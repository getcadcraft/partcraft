/* SPDX-License-Identifier: Apache-2.0 */
/**
 * buckling.js — thermal stress and linear (eigenvalue) buckling on the voxel mesh (DOM-free). Element-level work goes through
 * thermal.js's ELEMENT and MESH INTERFACES (thermalLoad, stressPoints, geometricStiffness), so a tet mesh that provides them
 * (builder A, 'tet10') can reuse geometricOperator / stressAtPoints / bucklingEigen with its own structural solve.
 *
 * Thermal stress (a static study with a thermal load): f = Kᵤ-load + Σ ∫ Bᵀ D α ΔT dV; stresses σ = D(ε − α ΔT I) (fea.js postprocess
 * `thermal`). ΔT is a uniform rise, or the steady temperature field of the study's heat conditions on the same mesh, minus the
 * stress-free reference temperature. Reactions still balance the mechanical loads (thermal loads are self-balanced).
 *
 * Linear buckling: a static pre-stress solve under the study's loads (× 1), σ at the 2×2×2 Gauss points, the geometric stiffness
 * Kσ = Σ ∫ ∇Nᵀ σ ∇N dV ⊗ I₃, then (K + λ Kσ) φ = 0 for the lowest positive load factors λ. Written as K⁻¹(−Kσ) φ = μ φ, μ = 1/λ, and
 * solved by subspace iteration (each K⁻¹ by multigrid PCG, which is shift-invert about λ = 0) with Rayleigh–Ritz on (Zᵀ(−Kσ)Z, ZᵀKZ)
 * until each wanted λ changes < 1e-6 (relative). Kσ uses the compatible (trilinear) displacements; the h8i bubble modes stiffen K
 * only. Limits: linear (no imperfections, no pre-buckling deflection, elastic): real structures usually buckle BELOW these loads.
 */
import { applyEnv } from './env/env.js';
import * as VX from './voxel.js';
import { t } from './i18n.js';
import * as FE from './fea.js';
import * as TH from './thermal.js';
import { readMaterial, tonnesPerMm3 } from './materials.js';
import { getPool, hexOperator, blockOperator, plainIO } from './pool.js';   // threads (cross-origin isolated page, big model)

/** σ at every element's integration points (6·nip per element) from a displacement field (3 per node). th: null | { alpha, dT (nn) } */
export function stressAtPoints(mesh, u, { E, nu }, th = null, scale = null) {
  const { ne, npe, element: el } = mesh, nip = el.nip;
  const out = new Float64Array(ne * nip * 6), X = new Float64Array(3 * npe), ue = new Float64Array(3 * npe), te = new Float64Array(npe), sg = new Float64Array(6 * nip);
  for (let e = 0; e < ne; e++) {
    mesh.elemX(e, X);
    for (let a = 0; a < npe; a++) { const n = mesh.conn[e * npe + a]; ue[3 * a] = u[3 * n]; ue[3 * a + 1] = u[3 * n + 1]; ue[3 * a + 2] = u[3 * n + 2]; if (th) te[a] = th.dT[n]; }
    el.stressPoints(X, E * (scale ? scale[e] : 1), nu, ue, sg, th ? { alpha: th.alpha, dT: te } : null);
    out.set(sg, e * nip * 6);
  }
  return out;
}

/** y = s · Kσ x (3 dofs per node), element by element; s = −1 gives the −Kσ of the eigenproblem. */
export function geometricOperator(mesh, sig, s = 1) {
  const { ne, npe, element: el } = mesh, nip = el.nip;
  const X = new Float64Array(3 * npe), G = new Float64Array(npe * npe);
  return (x, y) => {
    y.fill(0);
    for (let e = 0; e < ne; e++) {
      mesh.elemX(e, X);
      el.geometricStiffness(X, sig.subarray(e * nip * 6, (e + 1) * nip * 6), G);
      for (let a = 0; a < npe; a++) {
        const na = 3 * mesh.conn[e * npe + a];
        let t0 = 0, t1 = 0, t2 = 0;
        for (let b = 0; b < npe; b++) { const g = G[a * npe + b], nb = 3 * mesh.conn[e * npe + b]; t0 += g * x[nb]; t1 += g * x[nb + 1]; t2 += g * x[nb + 2]; }
        y[na] += s * t0; y[na + 1] += s * t1; y[na + 2] += s * t2;
      }
    }
    return y;
  };
}

/** Every element's geometric stiffness block (npe² each) for a stress field at the points (the threaded Kσ uses them). */
export function elementBlocks(mesh, sig) {
  const { ne, npe, element: el } = mesh, nip = el.nip, q = npe * npe, out = new Float64Array(ne * q), X = new Float64Array(3 * npe), G = new Float64Array(q);
  for (let e = 0; e < ne; e++) { mesh.elemX(e, X); el.geometricStiffness(X, sig.subarray(e * nip * 6, (e + 1) * nip * 6), G); out.set(G, e * q); }
  return out;
}

/**
 * The largest μ of K⁻¹ G φ = μ φ (G = −Kσ) by subspace iteration with Rayleigh–Ritz → { factors λ = 1/μ (lowest positive first),
 * shapes, iterations, converged, negative (the smallest reverse-load factor |λ| found, or null) }.
 * op { n, solve(b, x0) → x (admissible, K⁻¹ b), applyK(x, y), applyG(x, y), modes, maxIter 80, tol 1e-6, onProgress, cancelled }
 */
export function bucklingEigen({ n, solve, applyK, applyG, modes = 4, maxIter = 80, tol = 1e-6, onProgress = null, cancelled = null }) {
  const q = Math.max(modes + 4, Math.min(2 * modes, modes + 8));
  let rnd = 4321; const rand = () => ((rnd = (rnd * 1103515245 + 12345) % 2147483648) / 2147483648) - 0.5;
  let X = Array.from({ length: q }, () => Float64Array.from({ length: n }, rand)), Y = X.map(() => null);
  let mu = null, prev = null, it = 0, converged = false;
  const g = new Float64Array(n);
  for (; it < maxIter; it++) {
    if (cancelled && cancelled()) throw new Error('Cancelled');
    const Z = X.map((x, k) => { applyG(x, g); return solve(g, Y[k]); });
    const KZ = Z.map((z) => applyK(z, new Float64Array(n))), GZ = Z.map((z) => applyG(z, new Float64Array(n)));
    const Kr = new Float64Array(q * q), Gr = new Float64Array(q * q);
    for (let a = 0; a < q; a++) for (let b = a; b < q; b++) {
      let sk = 0, sg = 0; for (let i = 0; i < n; i++) { sk += Z[a][i] * KZ[b][i]; sg += Z[a][i] * GZ[b][i]; }
      Kr[a * q + b] = Kr[b * q + a] = sk; Gr[a * q + b] = Gr[b * q + a] = sg;
    }
    // Kr = L Lᵀ, C = L⁻¹ Gr L⁻ᵀ, eig C, y = L⁻ᵀ w
    const L = new Float64Array(q * q);
    for (let i = 0; i < q; i++) for (let j = 0; j <= i; j++) {
      let s = Kr[i * q + j]; for (let k = 0; k < j; k++) s -= L[i * q + k] * L[j * q + k];
      L[i * q + j] = i === j ? Math.sqrt(Math.max(s, 1e-300)) : s / L[j * q + j];
    }
    const Li = FE.solveSmall(L, q, Float64Array.from({ length: q * q }, (_, k) => (Math.floor(k / q) === k % q ? 1 : 0)), q);
    const C = new Float64Array(q * q);
    for (let i = 0; i < q; i++) for (let j = 0; j < q; j++) { let s = 0; for (let a = 0; a < q; a++) for (let b = 0; b < q; b++) s += Li[i * q + a] * Gr[a * q + b] * Li[j * q + b]; C[i * q + j] = s; }
    const { values, vectors } = FE.symEig(C, q);
    const order = values.map((v, i) => i).sort((a, b) => values[b] - values[a]);   // largest μ (smallest positive λ) first
    mu = order.map((i) => values[i]);
    X = order.map((col) => {
      const w = new Float64Array(q); for (let a = 0; a < q; a++) { let s = 0; for (let b = 0; b < q; b++) s += Li[b * q + a] * vectors[b * q + col]; w[a] = s; }
      const x = new Float64Array(n); for (let a = 0; a < q; a++) { const c = w[a]; if (c) for (let i = 0; i < n; i++) x[i] += c * Z[a][i]; }
      return x;
    });
    Y = X.map((x, k) => Float64Array.from(x, (v) => v * mu[k]));   // warm start: K⁻¹G x ≈ μ x
    if (onProgress) onProgress((it + 1) / maxIter, `Buckling: iteration ${it + 1}`);   // i18n-ignore: progress label, never shown
    const want = mu.slice(0, modes);
    if (prev && want.every((m, i) => Math.abs(m - prev[i]) <= tol * Math.abs(m))) { converged = true; it++; break; }
    prev = want.slice();
  }
  const pos = mu.map((m, i) => ({ m, i })).filter((p) => p.m > 0).slice(0, modes);
  const negs = mu.filter((m) => m < 0);
  return { factors: pos.map((p) => 1 / p.m), shapes: pos.map((p) => X[p.i]), iterations: it, converged, negative: negs.length ? 1 / Math.min(...negs) : null };
}

// ------------------------------------------------------------------------------------------- jobs

/** The time step a transient thermal load uses: the step nearest `time` (default: the end) → { step, time }. */
export function stepAt(tr, time) {
  const dt = tr.t / tr.steps, step = Math.max(0, Math.min(tr.steps, Math.round((time ?? tr.t) / dt)));
  return { step, time: step * dt };
}

/** The model, loads (mechanical + thermal) and constraints of a static or buckling job on a fresh voxel grid.
 *  thermal false: the structural pieces only (thermal-history.js adds one thermal load per time step itself). */
export function setup(job, onProgress, cancelled, { thermal: withThermal = true } = {}) {
  const mat = readMaterial(job.material), rho = tonnesPerMm3(mat.density);
  onProgress(0, 'Building the voxel mesh');   // i18n-ignore: progress label, never shown
  const grid = VX.voxelize(job.mesh, { h: job.h });
  if (!grid.count) throw new Error(t('study.fea.no_elements'));
  const type = job.elem || 'h8i';
  const model = FE.makeModel(grid, { E: mat.E, nu: mat.nu, type });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bc = FE.boundaryConditions(model, job.mesh, job.bcs, { density: rho, exactArea });
  const free = FE.rigidCheck(model, bc.cons);
  if (free) throw new Error(t('study.fea.not_held', { free: free.join(', ') }));
  const mesh = TH.voxelMesh(grid, { type });
  let thermal = null, heat = null, at = null;
  const tl = job.thermalLoad;
  if (withThermal && tl && tl.mode && tl.mode !== 'none') {
    if (!(mat.alpha >= 0)) throw new Error(t('study.buckling.no_alpha'));
    const dT = new Float64Array(model.nn);
    if (tl.mode === 'uniform') { for (let n = 0; n < model.nn; n++) if (model.active[n]) dT[n] = tl.dT; }
    else if (job.temperatures) { for (let n = 0; n < model.nn; n++) if (model.active[n]) dT[n] = job.temperatures[n] - (tl.Tref ?? 20); }   // given nodal temperatures (tests)
    else {
      onProgress(0, 'Temperatures');
      // 'field': the steady temperatures; 'transient': the run's temperatures at the step nearest tl.time
      if (tl.mode === 'transient' && !job.transient) throw new Error(t('study.thermal.history.needs_transient'));
      at = tl.mode === 'transient' ? stepAt(job.transient, tl.time) : null;
      heat = TH.heatOnGrid(job, grid, null, cancelled, at ? { frameSteps: [at.step] } : { steadyOnly: true });
      const T = at ? heat.res.frames[0] : heat.res.T;
      for (let n = 0; n < model.nn; n++) if (model.active[n]) dT[n] = T[n] - (tl.Tref ?? 20);
    }
    const ft = TH.thermalLoadVector(mesh, mat, dT);
    for (let i = 0; i < ft.length; i++) bc.f[i] += ft[i];
    thermal = { dT, alpha: mat.alpha, corr: TH.stressCorrection(type, mat.nu), at };
  }
  const summary = { elements: model.elems.length, nodes: model.active.reduce((s, a) => s + a, 0), h: grid.h, nx: grid.nx, ny: grid.ny, nz: grid.nz, oddRows: grid.oddRows, volume: model.elems.length * grid.h ** 3, mass: model.elems.length * grid.h ** 3 * rho * 1000 };
  summary.dofs = 3 * summary.nodes;
  return { mat, grid, model, bc, mesh, thermal, heat, summary };
}

const tempInfo = (s) => {
  if (!s.thermal) return null;
  let lo = Infinity, hi = -Infinity;
  s.model.active.forEach((a, n) => { if (a) { lo = Math.min(lo, s.thermal.dT[n]); hi = Math.max(hi, s.thermal.dT[n]); } });
  return { minDT: lo, maxDT: hi, heat: s.heat ? { minT: s.heat.summary.minT, maxT: s.heat.summary.maxT, balance: s.heat.res.balance } : null, time: s.thermal.at ? s.thermal.at.time : null };
};

/** A static study with a thermal load (uniform ΔT or the study's temperature field) — fea.js solveStudy plus thermal strain. */
export function solveThermoStatic(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), s = setup(job, onProgress, cancelled);
  onProgress(0, 'Preparing the solver');   // i18n-ignore: progress label, never shown
  const sol = FE.pcg(s.model, s.bc.cons, s.bc.f, { tol: job.tol || 1e-8, onProgress, cancelled, ...FE.preconditioner(s.model, s.bc.cons) });
  if (!sol.converged) throw new Error(t('study.fea.no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  onProgress(1, 'Stresses');
  const res = FE.postprocess(s.model, sol.u, s.bc.f, s.bc.cons, { yieldStress: s.mat.yield, groups: s.bc.groups.constraints, thermal: s.thermal });
  return { kind: 'static', summary: s.summary, material: s.mat, u: sol.u, iterations: sol.iterations, residual: sol.residual, loadTotal: s.bc.loadTotal, groups: s.bc.groups, ...res, thermal: tempInfo(s), dT: s.thermal ? s.thermal.dT : null, model: s.model, grid: s.grid, ms: Date.now() - t0 };
}

/** A linear buckling study: pre-stress under the study's loads, then the lowest `modes` load factors and their shapes. */
export function solveBuckling(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), s = setup(job, onProgress, cancelled);
  const { model, bc, mesh, mat } = s;
  const prec = FE.preconditioner(model, bc.cons);
  onProgress(0, 'Pre-stress');
  const sol = FE.pcg(model, bc.cons, bc.f, { tol: 1e-10, cancelled, ...prec });
  if (!sol.converged) throw new Error(t('study.buckling.prestress_no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  const sig = stressAtPoints(mesh, sol.u, mat, s.thermal);
  const pool = getPool(), par = pool && pool.big(3 * model.nn);
  const applyG = par ? plainIO(pool, 3 * model.nn, blockOperator(pool, mesh, elementBlocks(mesh, sig), -1)) : geometricOperator(mesh, sig, -1);
  const applyKp = par ? plainIO(pool, 3 * model.nn, hexOperator(pool, model)) : null;
  let solves = 0, worst = 0;
  const eig = bucklingEigen({
    n: 3 * model.nn, modes: job.modes || 4, onProgress, cancelled,
    applyK: par ? applyKp : (x, y) => FE.applyK(model, x, y),
    applyG,
    solve: (b, x0) => { const r = FE.pcg(model, bc.cons, b, { x0, tol: 1e-9, cancelled, ...prec }); solves++; if (!r.converged) worst = Math.max(worst, r.residual); return r.u; },
  });
  if (!eig.factors.length) throw new Error(eig.negative ? t('study.buckling.none_reversed', { f: eig.negative.toPrecision(4) }) : t('study.buckling.none'));
  const pre = FE.postprocess(model, sol.u, bc.f, bc.cons, { yieldStress: mat.yield, thermal: s.thermal });
  const L = Math.hypot(...bc.loadTotal);
  return {
    kind: 'buckling', summary: s.summary, material: mat, factors: eig.factors, shapes: eig.shapes, converged: eig.converged, eigIterations: eig.iterations, solves, solveResidual: worst,
    negative: eig.negative, loadTotal: bc.loadTotal, loadMagnitude: L, preMaxVm: pre.maxVm, preMaxDisp: pre.maxDisp, reaction: pre.reaction, preIterations: sol.iterations,
    thermal: tempInfo(s), model, grid: s.grid, ms: Date.now() - t0,
  };
}
