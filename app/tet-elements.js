/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tet-elements.js — the quadratic tetrahedron in thermal.js's ELEMENT and MESH INTERFACES, and the tetrahedral versions of
 * the thermal, thermal-stress and buckling studies (DOM-free; the compute worker runs them).
 *
 * ELEMENTS.tet10 (registered on import): conductivity ∫k∇Nᵀ∇N and the thermal load ∫BᵀDαΔT by the 4-point rule (exact
 * on straight sides: degree 2); capacity, heat load by the 64-point rule (consistent; `lumped` = HRZ: the consistent
 * diagonal scaled to the element's total ρc·V, all positive for T10 where row sums are not); gradient at the centroid;
 * stresses at the 4 Gauss points (nip 4), thermal strain subtracted; geometric stiffness ∫∇Naᵀσ∇Nb dV at those points
 * (degree 2 in the gradients × the linear stress field the 4 points carry). Boundary facets are the T6 faces (npf 6):
 * ∫NaNb dA and ∫Na dA by the 6-point degree-4 rule on the (curved) facet.
 * tetMeshAdapter(model) gives the MESH INTERFACE on a tetfea.js model (its RCM numbering, 3 dofs per node in the structural
 * solve), so solveHeat, thermalLoadVector, stressAtPoints / geometricOperator / bucklingEigen run unchanged.
 * Studies: solveTetThermal, solveTetThermoStatic, solveTetBuckling mirror thermal.js solveThermalStudy and buckling.js
 * solveThermoStatic / solveBuckling with the tet mesh and the tetfea.js solver (AMG / IC(0) preconditioned CG).
 */
import { applyEnv } from './env/env.js';
import { ELEMENTS, heatOnMesh, solveHeat, heatBCs, heatFlux, heatSummary, thermalMaterial, thermalLoadVector, SI } from './thermal.js';
import { stressAtPoints, geometricOperator, bucklingEigen, stepAt } from './buckling.js';
import { elasticD } from './fea.js';
import { t } from './i18n.js';
import { readMaterial, tonnesPerMm3 } from './materials.js';
import { SH4, GP4, RULE64, t10Shape, jac, TRI6, t6, meshJob, jobFaces, meshSummary, assemble, tetBoundaryConditions, tetRigidCheck, system, tetPCG, tetPostprocess, nodeEntry, massMul, combineEstimates, shapeErrors } from './tetfea.js';

const ID10 = Int32Array.from({ length: 10 }, (_, i) => i);
const SH64 = RULE64.map(([x, y, z]) => t10Shape(x, y, z));
const C0 = t10Shape(0.25, 0.25, 0.25);
const g30 = new Float64Array(30);

/** ∫ over the T6 facet Xf (18 coordinates): fn(N, dA) per rule point. */
function facetRule(Xf, fn) {
  for (const [, L1, L2, w] of TRI6) {
    const { N, d1, d2 } = t6(L1, L2), a = [0, 0, 0], b = [0, 0, 0];
    for (let k = 0; k < 6; k++) for (let c = 0; c < 3; c++) { a[c] += d1[k] * Xf[3 * k + c]; b[c] += d2[k] * Xf[3 * k + c]; }
    fn(N, Math.hypot(a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]) * w / 2);
  }
}

export const TET10 = {
  type: 'tet10', npe: 10, nip: 4,
  conductivity(X, k, out) {
    out.fill(0, 0, 100);
    for (let p = 0; p < 4; p++) {
      const det = jac(X, ID10, SH4[p].dN, g30), w = GP4[p][3] * det * k;
      for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) out[a * 10 + b] += w * (g30[3 * a] * g30[3 * b] + g30[3 * a + 1] * g30[3 * b + 1] + g30[3 * a + 2] * g30[3 * b + 2]);
    }
    return out;
  },
  capacity(X, rc, out, lumped) {
    const M = new Float64Array(100);
    for (let p = 0; p < SH64.length; p++) { const w = RULE64[p][3] * jac(X, ID10, SH64[p].dN, g30) * rc, N = SH64[p].N; for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) M[a * 10 + b] += w * N[a] * N[b]; }
    if (!lumped) { out.set(M); return out; }
    let tot = 0, dsum = 0; for (let i = 0; i < 100; i++) tot += M[i]; for (let a = 0; a < 10; a++) dsum += M[a * 11];
    for (let a = 0; a < 10; a++) out[a] = M[a * 11] * tot / dsum;
    return out;
  },
  heatLoad(X, Q, out) {
    out.fill(0, 0, 10);
    for (let p = 0; p < SH64.length; p++) { const w = RULE64[p][3] * jac(X, ID10, SH64[p].dN, g30) * Q, N = SH64[p].N; for (let a = 0; a < 10; a++) out[a] += w * N[a]; }
    return out;
  },
  gradient(X, Te, out) {
    jac(X, ID10, C0.dN, g30);
    out[0] = out[1] = out[2] = 0;
    for (let a = 0; a < 10; a++) for (let i = 0; i < 3; i++) out[i] += g30[3 * a + i] * Te[a];
    return out;
  },
  thermalLoad(X, E, nu, alpha, dT, out) {
    out.fill(0, 0, 30);
    const D = elasticD(nu);
    // D·[1 1 1 0 0 0] = (D00 + D01 + D02) on the normal rows (isotropic)
    const dn = D[0] + D[1] + D[2];
    for (let p = 0; p < 4; p++) {
      const det = jac(X, ID10, SH4[p].dN, g30), N = SH4[p].N;
      let t = 0; for (let a = 0; a < 10; a++) t += N[a] * dT[a];
      const s = GP4[p][3] * det * E * alpha * t * dn;
      for (let a = 0; a < 10; a++) { out[3 * a] += s * g30[3 * a]; out[3 * a + 1] += s * g30[3 * a + 1]; out[3 * a + 2] += s * g30[3 * a + 2]; }
    }
    return out;
  },
  stressPoints(X, E, nu, ue, out, th = null) {
    const D = elasticD(nu);
    for (let p = 0; p < 4; p++) {
      const det = jac(X, ID10, SH4[p].dN, g30); void det;
      let e0 = 0, e1 = 0, e2 = 0, e3 = 0, e4 = 0, e5 = 0;
      for (let a = 0; a < 10; a++) { const dx = g30[3 * a], dy = g30[3 * a + 1], dz = g30[3 * a + 2], ux = ue[3 * a], uy = ue[3 * a + 1], uz = ue[3 * a + 2]; e0 += dx * ux; e1 += dy * uy; e2 += dz * uz; e3 += dy * ux + dx * uy; e4 += dz * uy + dy * uz; e5 += dz * ux + dx * uz; }
      let et = 0; if (th) { const N = SH4[p].N; for (let a = 0; a < 10; a++) et += N[a] * th.dT[a]; et *= th.alpha; }
      const eps = [e0 - et, e1 - et, e2 - et, e3, e4, e5];
      for (let r = 0; r < 6; r++) { let s = 0; for (let k = 0; k < 6; k++) s += D[r * 6 + k] * eps[k]; out[6 * p + r] = E * s; }
    }
    return out;
  },
  geometricStiffness(X, sig, out) {
    out.fill(0, 0, 100);
    for (let p = 0; p < 4; p++) {
      const det = jac(X, ID10, SH4[p].dN, g30), w = GP4[p][3] * det, s = sig.subarray ? sig.subarray(6 * p, 6 * p + 6) : sig.slice(6 * p, 6 * p + 6);
      const m = [s[0], s[3], s[5], s[3], s[1], s[4], s[5], s[4], s[2]];
      for (let a = 0; a < 10; a++) {
        const ga = [g30[3 * a], g30[3 * a + 1], g30[3 * a + 2]];
        const t0 = m[0] * ga[0] + m[3] * ga[1] + m[6] * ga[2], t1 = m[1] * ga[0] + m[4] * ga[1] + m[7] * ga[2], t2 = m[2] * ga[0] + m[5] * ga[1] + m[8] * ga[2];
        for (let b = 0; b < 10; b++) out[a * 10 + b] += w * (t0 * g30[3 * b] + t1 * g30[3 * b + 1] + t2 * g30[3 * b + 2]);
      }
    }
    return out;
  },
  face: {
    npf: 6,
    mass(Xf, out) { out.fill(0, 0, 36); facetRule(Xf, (N, dA) => { for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) out[a * 6 + b] += N[a] * N[b] * dA; }); return out; },
    load(Xf, out) { out.fill(0, 0, 6); facetRule(Xf, (N, dA) => { for (let a = 0; a < 6; a++) out[a] += N[a] * dA; }); return out; },
  },
};
ELEMENTS.tet10 = TET10;

/** The MESH INTERFACE on a tetfea.js model (makeTetModel). */
export function tetMeshAdapter(model) {
  const nb = model.btri6.length / 6, area = new Float64Array(nb), Xf = new Float64Array(18), L = new Float64Array(6);
  const elemX = (e, X) => { for (let a = 0; a < 10; a++) { const n = model.tets10[10 * e + a]; X[3 * a] = model.X[3 * n]; X[3 * a + 1] = model.X[3 * n + 1]; X[3 * a + 2] = model.X[3 * n + 2]; } return X; };
  for (let f = 0; f < nb; f++) { for (let c = 0; c < 6; c++) { const n = model.btri6[6 * f + c]; Xf[3 * c] = model.X[3 * n]; Xf[3 * c + 1] = model.X[3 * n + 1]; Xf[3 * c + 2] = model.X[3 * n + 2]; } TET10.face.load(Xf, L); area[f] = L.reduce((s, v) => s + v, 0); }
  let volume = 0; const X = new Float64Array(30);
  for (let e = 0; e < model.tets10.length / 10; e++) { elemX(e, X); for (let p = 0; p < 4; p++) volume += GP4[p][3] * jac(X, ID10, SH4[p].dN, g30); }
  return {
    type: 'tet10', element: TET10, nn: model.n, xyz: model.X, active: new Uint8Array(model.n).fill(1), ne: model.tets10.length / 10, npe: 10, conn: model.tets10, volume,
    facets: { npf: 6, nodes: model.btri6, area },
    facetsOn(faceIdx) { const want = new Set(faceIdx), out = []; for (let f = 0; f < nb; f++) if (want.has(model.bface[f])) out.push(f); return Int32Array.from(out); },
    elemX,
  };
}

// ---------------------------------------------------------------------------------------- studies

/** The job's heat problem on a meshed tet model → solveHeat's result plus mesh, flux, summary (thermal.js heatOnGrid). */
export function heatOnTets(job, model, onProgress = null, cancelled = null, { steadyOnly = false } = {}) {
  const tr = !steadyOnly && job.transient ? job.transient : null;
  const { mat, k, rc } = thermalMaterial(job.material, { transient: !!tr });
  const mesh = tetMeshAdapter(model);
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bcs = heatBCs(mesh, job.heat || [], exactArea);
  const res = solveHeat(mesh, { k, rc, gen: (job.gen || 0) * SI.gen, bcs, transient: tr, onProgress, cancelled });
  if (!res.converged) throw new Error(t('study.thermal.solve.not_converged', { residual: res.residual.toExponential(1), n: res.iterations }));
  if (res.radiation && res.radiation.converged === false) throw new Error(t('study.thermal.solve.radiation_unsettled', { change: res.radiation.change.toExponential(1), n: res.radiation.iterations }));
  const flux = heatFlux(mesh, res.T, k);
  return { mat, mesh, bcs, res, flux, summary: heatSummary(mesh, res.T, flux) };
}

/**
 * Zienkiewicz–Zhu error estimate of a heat solution on tets: the flux −k∇T at the 4 Gauss points, extrapolated linearly to
 * each element's corners (midsides: the mean of their two) and averaged at the nodes (q*); per element
 * e_K² = ∫ (q* − qh)·(q* − qh) / k dV (the energy norm of the heat problem), U = ∫ qh·qh / k dV, and the global
 * η = √(Σe²/(U + Σe²)) as a %. → { err (per element e_K), errSq, energy, errorPct }. k in solver units (W/(mm·K)).
 */
export function heatErrorZZ(model, T, k) {
  const m = model.tets10.length / 10, n = model.n, X = new Float64Array(30), qg = new Float64Array(12), qN = new Float64Array(3 * n), cnt = new Float64Array(n);
  const elQ = new Float64Array(m * 12);
  const exq = (vals, i) => { let S = 0; for (let p = 0; p < 4; p++) S += vals[p]; return (vals[i] - GB * S) / (GA - GB); };
  const tmp = new Float64Array(4), cq = new Float64Array(12);
  const elemX = (e) => { for (let a = 0; a < 10; a++) { const nd = model.tets10[10 * e + a]; X[3 * a] = model.X[3 * nd]; X[3 * a + 1] = model.X[3 * nd + 1]; X[3 * a + 2] = model.X[3 * nd + 2]; } };
  for (let e = 0; e < m; e++) {
    elemX(e);
    for (let p = 0; p < 4; p++) {
      jac(X, ID10, SH4[p].dN, g30);
      let gx = 0, gy = 0, gz = 0; for (let a = 0; a < 10; a++) { const t = T[model.tets10[10 * e + a]]; gx += g30[3 * a] * t; gy += g30[3 * a + 1] * t; gz += g30[3 * a + 2] * t; }
      qg[3 * p] = -k * gx; qg[3 * p + 1] = -k * gy; qg[3 * p + 2] = -k * gz;
    }
    elQ.set(qg, 12 * e);
    for (let c = 0; c < 3; c++) { for (let p = 0; p < 4; p++) tmp[p] = qg[3 * p + c]; for (let i = 0; i < 4; i++) cq[3 * i + c] = exq(tmp, i); }
    for (let a = 0; a < 10; a++) {
      const [i, j] = a < 4 ? [a, a] : EDGES10[a - 4], nd = model.tets10[10 * e + a];
      for (let c = 0; c < 3; c++) qN[3 * nd + c] += (cq[3 * i + c] + cq[3 * j + c]) / 2;
      cnt[nd]++;
    }
  }
  for (let i = 0; i < n; i++) for (let c = 0; c < 3; c++) qN[3 * i + c] /= cnt[i] || 1;
  const err = new Float32Array(m);
  let errSq = 0, energy = 0;
  for (let e = 0; e < m; e++) {
    elemX(e);
    let s = 0;
    for (let p = 0; p < 4; p++) {
      const w = GP4[p][3] * jac(X, ID10, SH4[p].dN, g30), N = SH4[p].N;
      let d0 = 0, d1 = 0, d2 = 0; for (let a = 0; a < 10; a++) { const nd = model.tets10[10 * e + a]; d0 += N[a] * qN[3 * nd]; d1 += N[a] * qN[3 * nd + 1]; d2 += N[a] * qN[3 * nd + 2]; }
      const q0 = elQ[12 * e + 3 * p], q1 = elQ[12 * e + 3 * p + 1], q2 = elQ[12 * e + 3 * p + 2];
      s += w * ((d0 - q0) ** 2 + (d1 - q1) ** 2 + (d2 - q2) ** 2) / k; energy += w * (q0 * q0 + q1 * q1 + q2 * q2) / k;
    }
    err[e] = Math.sqrt(s); errSq += s;
  }
  return { err, errSq, energy, errorPct: 100 * Math.sqrt(errSq / Math.max(1e-300, energy + errSq)) };
}
const GA = 0.5854101966249685, GB = 0.1381966011250105, EDGES10 = [[0, 1], [1, 2], [0, 2], [0, 3], [1, 3], [2, 3]];

/** A thermal study on tets (job: simJob with kind 'thermal', mesher 'tet'). */
export function solveTetThermal(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now();
  onProgress(0, 'Meshing');
  return solveTetThermalOnMesh(job, meshJob(job, onProgress), onProgress, cancelled, t0);
}
/** The thermal solve of a job on a mesh already made (meshJob's { tm, t10, model }); steady runs carry the ZZ estimate. */
export function solveTetThermalOnMesh(job, { tm, t10, model }, onProgress = () => {}, cancelled = null, t0 = Date.now()) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const h = heatOnTets(job, model, (f, t) => onProgress(0.3 + 0.7 * f, t), cancelled);
  const summary = meshSummary(tm, t10, model, tonnesPerMm3(h.mat.density));
  summary.dofs = h.res.nfree;
  return {
    kind: 'thermal', transient: !!job.transient, summary, material: h.mat, T: h.res.T, flux: h.flux, ...h.summary,
    balance: h.res.balance, bcAreas: h.bcs.map((b) => ({ area: b.area, meshArea: b.meshArea })), iterations: h.res.iterations, residual: h.res.residual,
    radiation: h.res.radiation, frames: h.res.frames, times: h.res.times, model, tm, mesh: h.mesh, ms: Date.now() - t0,
    ...(job.transient ? {} : heatErrorZZ(model, h.res.T, thermalMaterial(job.material, { transient: false }).k)),
  };
}

/** Mesh, loads (mechanical + thermal) and supports of a static / buckling job on tets (buckling.js setup). */
function setupTet(job, onProgress, cancelled, given = null) {
  const mat = readMaterial(job.material), rho = tonnesPerMm3(mat.density);
  onProgress(0, 'Meshing');
  const { tm, t10, model } = given || meshJob(job, onProgress);   // given: a mesh made already (tetadapt.js passes)
  const asm = assemble(model, mat.E, mat.nu, { rho, onProgress: (f) => onProgress(0.3 + 0.05 * f, 'Assembling') });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bc = tetBoundaryConditions(model, job.bcs, { density: rho, exactArea, nodeVolN: asm.nodeVolN, faces: jobFaces(job) });
  const free = tetRigidCheck(model, bc.cons);
  if (free) throw new Error(t('study.fea.not_held', { free: free.join(', ') }));
  const mesh = tetMeshAdapter(model);
  let thermal = null, heat = null, at = null;
  const tl = job.thermalLoad;
  if (tl && tl.mode && tl.mode !== 'none') {
    if (!(mat.alpha >= 0)) throw new Error(t('study.buckling.no_alpha'));
    const dT = new Float64Array(model.n);
    if (tl.mode === 'uniform') dT.fill(tl.dT);
    else if (job.temperatures) for (let n = 0; n < model.n; n++) dT[n] = job.temperatures[n] - (tl.Tref ?? 20);   // given nodal temperatures (tests)
    else if (tl.mode === 'transient') {   // round 5 (builder C): the transient run's temperatures at the step nearest tl.time (buckling over time)
      if (!job.transient) throw new Error(t('study.thermal.history.needs_transient'));
      onProgress(0.35, 'Temperatures over time');   // i18n-ignore: progress label, never shown
      at = stepAt(job.transient, tl.time);
      heat = heatOnMesh(job, mesh, { frameSteps: [at.step], cancelled });
      for (let n = 0; n < model.n; n++) dT[n] = heat.res.frames[0][n] - (tl.Tref ?? 20);
    } else { onProgress(0.35, 'Temperatures'); heat = heatOnTets(job, model, null, cancelled, { steadyOnly: true }); for (let n = 0; n < model.n; n++) dT[n] = heat.res.T[n] - (tl.Tref ?? 20); }
    const ft = thermalLoadVector(mesh, mat, dT);
    for (let i = 0; i < ft.length; i++) bc.f[i] += ft[i];
    thermal = { dT, alpha: mat.alpha, at };
  }
  const summary = meshSummary(tm, t10, model, rho);
  onProgress(0.4, 'Preconditioner');
  const sys = system(model, asm.K, bc.cons);
  return { mat, model, tm, asm, bc, mesh, thermal, heat, summary, sys };
}
const tempInfo = (s) => {
  if (!s.thermal) return null;
  let lo = Infinity, hi = -Infinity; for (const v of s.thermal.dT) { lo = Math.min(lo, v); hi = Math.max(hi, v); }
  return { minDT: lo, maxDT: hi, heat: s.heat ? { minT: s.heat.summary.minT, maxT: s.heat.summary.maxT, balance: s.heat.res.balance } : null, time: s.thermal.at ? s.thermal.at.time : null };
};

/** A static study with a thermal load on tets (σ = D(ε − αΔT)). */
export function solveTetThermoStatic(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), s = setupTet(job, onProgress, cancelled);
  const sol = tetPCG(s.model, s.sys, s.bc.f, { tol: job.tol || 1e-8, onProgress: (f, t) => onProgress(0.45 + 0.5 * f, t), cancelled });
  if (!sol.converged) throw new Error(t('study.fea.no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  const res = tetPostprocess(s.model, s.asm.K, sol.u, s.bc.f, s.bc.cons, { E: s.mat.E, nu: s.mat.nu, yieldStress: s.mat.yield, groups: s.bc.groups.constraints, thermal: s.thermal });
  return { kind: 'static', summary: s.summary, material: s.mat, u: sol.u, iterations: sol.iterations, residual: sol.residual, loadTotal: s.bc.loadTotal, groups: s.bc.groups, ...res, thermal: tempInfo(s), dT: s.thermal ? s.thermal.dT : null, model: s.model, tm: s.tm, ms: Date.now() - t0 };
}

/** Linear buckling on tets: pre-stress, Kσ from the T10 Gauss-point stresses, buckling.js bucklingEigen. */
export function solveTetBuckling(job, onProgress = () => {}, cancelled = null, given = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), s = setupTet(job, onProgress, cancelled, given);
  const { model, bc, mesh, mat, sys } = s;
  onProgress(0.45, 'Pre-stress');
  const sol = tetPCG(model, sys, bc.f, { tol: 1e-10, cancelled });
  if (!sol.converged) throw new Error(t('study.buckling.prestress_no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  const sig = stressAtPoints(mesh, sol.u, mat, s.thermal);
  // Kσ assembled once on the node graph (the element's npe×npe block ⊗ I₃), applied as −Kσ x
  const Gv = new Float64Array(model.nodeAdj.length), X = new Float64Array(30), Ge = new Float64Array(100);
  for (let e = 0; e < mesh.ne; e++) {
    mesh.elemX(e, X); TET10.geometricStiffness(X, sig.subarray(e * 24, e * 24 + 24), Ge);
    for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) { const A = model.tets10[10 * e + a], B = model.tets10[10 * e + b]; if (B <= A) Gv[nodeEntry(model, A, B)] -= Ge[a * 10 + b]; }
  }
  const applyG = (x, y) => massMul(model, Gv, x, y);
  void geometricOperator;
  let solves = 0, worst = 0;
  const eig = bucklingEigen({
    n: model.N, modes: job.modes || 4, cancelled, onProgress: (f, t) => onProgress(0.5 + 0.5 * f, t),
    applyK: (x, y) => sys.pj.proj(sys.apply(x, y)),
    applyG: (x, y) => sys.pj.proj(applyG(x, y)),
    solve: (b, x0) => { const r = tetPCG(model, sys, b, { x0, tol: 1e-8, cancelled }); solves++; if (!r.converged) worst = Math.max(worst, r.residual); return r.u; },
  });
  if (!eig.factors.length) throw new Error(eig.negative ? t('study.buckling.none_reversed', { f: eig.negative.toPrecision(4) }) : t('study.buckling.none'));
  const pre = tetPostprocess(model, s.asm.K, sol.u, bc.f, bc.cons, { E: mat.E, nu: mat.nu, yieldStress: mat.yield, thermal: s.thermal });
  // 0.4 P5: automatic refinement — the pre-stress field and the buckling modes, each at unit energy (tetfea.js combineEstimates)
  //    (the modes as one field: their RMS, so the pre-stress weighs as much as all the modes together)
  const est = job.adaptive ? combineEstimates([pre, shapeErrors(model, s.asm.K, bc.cons, mat, eig.shapes)]) : null;
  return {
    ...(est || {}),
    kind: 'buckling', summary: s.summary, material: mat, factors: eig.factors, shapes: eig.shapes, converged: eig.converged, eigIterations: eig.iterations, solves, solveResidual: worst,
    negative: eig.negative, loadTotal: bc.loadTotal, loadMagnitude: Math.hypot(...bc.loadTotal), preMaxVm: pre.maxVm, preMaxDisp: pre.maxDisp, reaction: pre.reaction, preIterations: sol.iterations,
    thermal: tempInfo(s), model, tm: s.tm, ms: Date.now() - t0,
  };
}
/** The buckling study on a mesh made already (tetadapt.js passes). */
export const solveTetBucklingOnMesh = (job, mesh, onProgress = () => {}, cancelled = null) => solveTetBuckling(job, onProgress, cancelled, mesh);
