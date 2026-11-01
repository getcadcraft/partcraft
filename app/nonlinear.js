/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nonlinear.js — small-strain elastic–plastic analysis on quadratic tetrahedra (tetfea.js model), with load steps and, when a
 * `contact` object (contact.js) is given, contact between parts. DOM-free; runs in the compute worker. Units as tetfea.js:
 * mm, N, MPa, tonnes, s.
 *
 * Material (SU.891): linear elastic up to the yield stress σy, then a bilinear stress–strain curve with tangent modulus Et
 * (hardening modulus H = E·Et/(E − Et); Et = 0 is perfectly plastic). J2 (von Mises) flow, isotropic hardening, small strains.
 * Return mapping and the consistent tangent are Simo & Hughes, Computational Inelasticity (Springer, 1998) § 3.3 and
 * box 3.1 (radial return, algorithmic tangent C = κ1⊗1 + 2μθ(I − ⅓1⊗1) − 2μθ̄ n⊗n), written for engineering shear strains.
 * Per Gauss point (the 4-point rule of tetfea.js) the state is the plastic strain εp (6, engineering shear) and the
 * accumulated plastic strain α.
 * Solution: load factor λ = k/steps, k = 1…steps (a step that fails to converge is halved, down to 1/64 of a step), Newton–Raphson
 * on r = λ f − f_int(u) [− contact], each iteration's tangent assembled from the Gauss points' algorithmic tangent and solved
 * by tetfea.js system() + tetPCG (the tangent stays symmetric positive definite for Et ≥ 0 and the penalty terms of contact.js).
 * Limits: small displacement and strain (no geometric nonlinearity), rate-independent, no unloading history beyond what the
 * plastic strain keeps (loading is monotone in the tests), no kinematic hardening, isotropic materials.
 */
import { applyEnv } from './env/env.js';
import { elasticD, vonMises } from './fea.js';
import { makeTetModel, jac, SH4, GP4, system, tetPCG, scatterKe, tetBoundaryConditions } from './tetfea.js';

/** A bilinear (or linear, when sy is missing) material from { E, nu, yield, Et }: the numbers the return map needs. */
export function bilinearMaterial({ E, nu, yield: sy = Infinity, Et = 0, density = 0 }) {
  if (!(E > 0) || !(nu >= 0 && nu < 0.5)) throw new Error('bilinear material: E > 0 and 0 ≤ ν < 0.5 are required');   // i18n-ignore: internal check, the UI validates first
  if (!(Et >= 0 && Et < E)) throw new Error('bilinear material: 0 ≤ Et < E is required');   // i18n-ignore: internal check
  const G = E / (2 * (1 + nu)), K = E / (3 * (1 - 2 * nu));
  return { E, nu, sy, Et, H: E * Et / (E - Et), G, K, density, D: elasticD(nu).map((v) => v * E) };
}

const IDENT_N = [1, 1, 1, 0, 0, 0];

/**
 * Stress update at one Gauss point. eps: total strain (6, engineering shear); st: { ep: Float64Array(6) (engineering shear),
 * a } is read and the new state written to out.ep / out.a. Returns the stress in sig (6) and the algorithmic tangent in Dep
 * (36, row-major). Pure function of its arguments.
 */
export function returnMap(mat, eps, ep0, a0, sig, Dep, out) {
  const { G, K, H, sy, D } = mat;
  const ee = [0, 0, 0, 0, 0, 0];
  for (let r = 0; r < 6; r++) ee[r] = eps[r] - ep0[r];
  const st = [0, 0, 0, 0, 0, 0];
  for (let r = 0; r < 6; r++) { let s = 0; for (let k = 0; k < 6; k++) s += D[r * 6 + k] * ee[k]; st[r] = s; }
  const p = (st[0] + st[1] + st[2]) / 3, s = [st[0] - p, st[1] - p, st[2] - p, st[3], st[4], st[5]];
  const s2 = s[0] * s[0] + s[1] * s[1] + s[2] * s[2] + 2 * (s[3] * s[3] + s[4] * s[4] + s[5] * s[5]);
  const q = Math.sqrt(1.5 * s2), f = q - (sy + H * a0);
  for (let r = 0; r < 6; r++) out.ep[r] = ep0[r];
  out.a = a0;
  if (!(f > 0)) {   // elastic
    for (let r = 0; r < 6; r++) sig[r] = st[r];
    Dep.set(D);
    return false;
  }
  const dg = f / (3 * G + H), th = 1 - 3 * G * dg / q, nrm = Math.sqrt(s2);
  for (let r = 0; r < 6; r++) sig[r] = (r < 3 ? p : 0) + th * s[r];
  // plastic strain increment: Δεp = Δγ · 3/2 · s / q (tensor); the engineering shear components are twice the tensor's
  for (let r = 0; r < 6; r++) out.ep[r] += dg * 1.5 * s[r] / q * (r < 3 ? 1 : 2);
  out.a = a0 + dg;
  const thb = 3 * G / (3 * G + H) - (1 - th), nv = s.map((v) => v / nrm);
  for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) {
    let v = K * (i < 3 && j < 3 ? 1 : 0);
    const id = (i === j ? (i < 3 ? 1 : 0.5) : 0) - (i < 3 && j < 3 ? 1 / 3 : 0);   // I_dev on engineering strains
    v += 2 * G * th * id - 2 * G * thb * nv[i] * nv[j];
    Dep[i * 6 + j] = v;
  }
  return true;
}

/** Element tangent stiffness Ke (30×30) and internal force fe (30) from the strain at the 4 Gauss points. */
function elementResponse(X, el, ue, mat, ep, al, epN, alN, Ke, fe, sigOut, g, sig, Dep, tmp, DB) {
  Ke.fill(0); fe.fill(0);
  let plastic = 0;
  for (let p = 0; p < 4; p++) {
    const det = jac(X, el, SH4[p].dN, g);
    if (!(det > 0)) throw new Error('inverted element');   // i18n-ignore: internal; the mesher never gives one
    let exx = 0, eyy = 0, ezz = 0, gxy = 0, gyz = 0, gzx = 0;
    for (let a = 0; a < 10; a++) {
      const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2], ux = ue[3 * a], uy = ue[3 * a + 1], uz = ue[3 * a + 2];
      exx += dx * ux; eyy += dy * uy; ezz += dz * uz; gxy += dy * ux + dx * uy; gyz += dz * uy + dy * uz; gzx += dz * ux + dx * uz;
    }
    const eps = tmp.eps; eps[0] = exx; eps[1] = eyy; eps[2] = ezz; eps[3] = gxy; eps[4] = gyz; eps[5] = gzx;
    const o = tmp.out, base = 6 * p;
    const pl = returnMap(mat, eps, ep.subarray(base, base + 6), al[p], sig, Dep, o);
    if (pl) plastic++;
    epN.set(o.ep, base); alN[p] = o.a;
    if (sigOut) sigOut.set(sig, base);
    const w = GP4[p][3] * det;
    // DB = Dep·B, then Ke += w BᵀDB and fe += w Bᵀσ
    for (let a = 0; a < 10; a++) {
      const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2];
      for (let r = 0; r < 6; r++) {
        DB[r * 30 + 3 * a] = Dep[r * 6] * dx + Dep[r * 6 + 3] * dy + Dep[r * 6 + 5] * dz;
        DB[r * 30 + 3 * a + 1] = Dep[r * 6 + 1] * dy + Dep[r * 6 + 3] * dx + Dep[r * 6 + 4] * dz;
        DB[r * 30 + 3 * a + 2] = Dep[r * 6 + 2] * dz + Dep[r * 6 + 4] * dy + Dep[r * 6 + 5] * dx;
      }
      fe[3 * a] += w * (dx * sig[0] + dy * sig[3] + dz * sig[5]);
      fe[3 * a + 1] += w * (dy * sig[1] + dx * sig[3] + dz * sig[4]);
      fe[3 * a + 2] += w * (dz * sig[2] + dy * sig[4] + dx * sig[5]);
    }
    for (let a = 0; a < 10; a++) {
      const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2];
      for (let j = 0; j < 30; j++) {
        const c0 = DB[j], c1 = DB[30 + j], c2 = DB[60 + j], c3 = DB[90 + j], c4 = DB[120 + j], c5 = DB[150 + j];
        Ke[(3 * a) * 30 + j] += w * (dx * c0 + dy * c3 + dz * c5);
        Ke[(3 * a + 1) * 30 + j] += w * (dy * c1 + dx * c3 + dz * c4);
        Ke[(3 * a + 2) * 30 + j] += w * (dz * c2 + dy * c4 + dx * c5);
      }
    }
  }
  return plastic;
}

/** Fresh material state for a model: plastic strain (m·4·6) and accumulated plastic strain (m·4). */
export function newState(model) {
  const m = model.tets10.length / 10;
  return { ep: new Float64Array(m * 24), a: new Float64Array(m * 4) };
}

/**
 * Internal force and (optionally) the tangent for displacement u → { fint, K, plastic (Gauss points yielding), epN, aN, sig }.
 * mats: one material per element index (mats[elemMat[e]]); trial state is returned, not committed.
 */
export function internal(model, mats, elemMat, u, state, { tangent = true, stress = false } = {}) {
  const m = model.tets10.length / 10, X = model.X;
  const fint = new Float64Array(model.N), K = tangent ? new Float64Array(model.col.length) : null;
  const epN = new Float64Array(m * 24), aN = new Float64Array(m * 4), sigAll = stress ? new Float64Array(m * 24) : null;
  const el = new Int32Array(10), ue = new Float64Array(30), Ke = new Float64Array(900), fe = new Float64Array(30), g = new Float64Array(30);
  const sig = new Float64Array(6), Dep = new Float64Array(36), DB = new Float64Array(180), tmp = { eps: new Float64Array(6), out: { ep: new Float64Array(6), a: 0 } };
  let plastic = 0;
  for (let e = 0; e < m; e++) {
    for (let a = 0; a < 10; a++) { el[a] = model.tets10[10 * e + a]; for (let c = 0; c < 3; c++) ue[3 * a + c] = u[3 * el[a] + c]; }
    plastic += elementResponse(X, el, ue, mats[elemMat ? elemMat[e] : 0], state.ep.subarray(24 * e, 24 * e + 24), state.a.subarray(4 * e, 4 * e + 4),
      epN.subarray(24 * e, 24 * e + 24), aN.subarray(4 * e, 4 * e + 4), Ke, fe, sigAll && sigAll.subarray(24 * e, 24 * e + 24), g, sig, Dep, tmp, DB);
    for (let a = 0; a < 10; a++) for (let c = 0; c < 3; c++) fint[3 * el[a] + c] += fe[3 * a + c];
    if (tangent) scatterKe(model, K, el, Ke);
  }
  return { fint, K, plastic, epN, aN, sig: sigAll };
}

const norm = (v) => { let s = 0; for (let i = 0; i < v.length; i++) s += v[i] * v[i]; return Math.sqrt(s); };

/**
 * Load-stepped Newton solve. model: makeTetModel; mats/elemMat: materials per element; bc: { f (reference load, N), cons
 * (makeConstraints) }; opts { steps (10), tol (1e-6, on the residual relative to the load), maxIter (25), contact, prec,
 * onProgress, cancelled, trace (called with { lambda, iteration, residual, contact } each Newton iteration) }.
 * → { u, state, steps: [{ lambda, iterations, plastic, residual, contact? }], converged, failedAt? , fint }
 */
export function solveNonlinear(model, mats, elemMat, bc, opts = {}) {
  const { steps = 10, tol = 1e-6, maxIter = 25, contact = null, prec = undefined, onProgress = null, cancelled = null, tolPCG = 1e-10, trace = null, maxOuter = 12 } = opts;
  const N = model.N, f = bc.f, fn = norm(f) || 1;
  let u = new Float64Array(N), state = newState(model), lam = 0, dl = 1 / steps, minDl = 1 / (steps * 64);
  const log = [];
  const newton = (lamNext, u0) => {
    const uT = Float64Array.from(u0); let it = 0, res = Infinity, plastic = 0, ctxInfo = null;
    for (; it < maxIter; it++) {
      if (cancelled && cancelled()) throw new Error('Cancelled');
      const nl = internal(model, mats, elemMat, uT, state, { tangent: true });
      const r = new Float64Array(N);
      for (let i = 0; i < N; i++) r[i] = lamNext * f[i] - nl.fint[i];
      if (contact) ctxInfo = contact.apply(model, uT, r, nl.K);   // adds the contact forces to r and the penalty stiffness to K
      bc.cons && projectResidual(model, bc.cons, r);
      res = norm(r) / (lamNext * fn);
      plastic = nl.plastic;
      if (trace) trace({ lambda: lamNext, iteration: it, residual: res, contact: ctxInfo });
      if (res < tol || (res < tol * 1e3 && it > 0 && contact && contact.relaxed)) return { ok: true, u: uT, it, res, plastic, ctxInfo };
      const sys = system(model, nl.K, bc.cons, prec ? { prec } : {});
      const sol = tetPCG(model, sys, r, { tol: tolPCG, cancelled });
      if (!sol.converged && !(sol.residual < 1e-6)) break;
      for (let i = 0; i < N; i++) uT[i] += sol.u[i];
    }
    return { ok: false, u: uT, it, res, plastic, ctxInfo };
  };
  while (lam < 1 - 1e-12) {
    const lamNext = Math.min(1, lam + dl);
    let cur = newton(lamNext, u), outer = 0, total = cur.it;
    // contact: re-pair on the converged shape and solve again until the pairing stops moving
    while (contact && cur.ok && outer < maxOuter && contact.update(model, cur.u)) { outer++; cur = newton(lamNext, cur.u); total += cur.it; }
    if (cur.ok) {
      u = cur.u; lam = lamNext;
      // commit the state at the converged displacement
      const nl = internal(model, mats, elemMat, u, state, { tangent: false });
      state = { ep: nl.epN, a: nl.aN };
      log.push({ lambda: lam, iterations: total, outer, plastic: cur.plastic, residual: cur.res, contact: cur.ctxInfo });
      if (contact) contact.commit(model, u);
      if (onProgress) onProgress(lam);
      dl = Math.min(1 / steps, dl * 1.5);
    } else {
      if (contact) contact.update(model, u);
      dl /= 2;
      if (dl < minDl) return { u, state, steps: log, converged: false, failedAt: lamNext, lambda: lam };
    }
  }
  const fin = internal(model, mats, elemMat, u, state, { tangent: false, stress: true });
  return { u, state, steps: log, converged: true, lambda: 1, fint: fin.fint, sig: fin.sig };
}

/** Zero the residual in the constrained directions (P r), as tetPCG does for the right-hand side. */
function projectResidual(model, cons, r) {
  for (let m = 0; m < cons.nodes.length; m++) {
    const d = 3 * cons.nodes[m], p = 9 * m, x = r[d], y = r[d + 1], z = r[d + 2];
    r[d] = cons.P[p] * x + cons.P[p + 1] * y + cons.P[p + 2] * z;
    r[d + 1] = cons.P[p + 3] * x + cons.P[p + 4] * y + cons.P[p + 5] * z;
    r[d + 2] = cons.P[p + 6] * x + cons.P[p + 7] * y + cons.P[p + 8] * z;
  }
}

/** Von Mises of each element's Gauss-point stresses (max per element) and the equivalent plastic strain (max per element). */
export function elementMaxima(model, sig, state) {
  const m = model.tets10.length / 10, vm = new Float32Array(m), ap = new Float32Array(m);
  for (let e = 0; e < m; e++) {
    let v = 0, a = 0;
    for (let p = 0; p < 4; p++) { v = Math.max(v, vonMises(sig.subarray(24 * e + 6 * p, 24 * e + 6 * p + 6))); a = Math.max(a, state.a[4 * e + p]); }
    vm[e] = v; ap[e] = a;
  }
  return { vm, plasticStrain: ap };
}

/**
 * A nonlinear study on a mesh already made (tetfea.js meshJob's { tm, t10, model }): job.material { E, nu, yield, Et },
 * job.bcs as tetfea.js tetBoundaryConditions, job.nonlinear { steps, tol }. Contact between parts goes through
 * contact.js buildContact (job.contact) — see contact.js.
 */
export function solveNonlinearOnMesh(job, { model }, opts = {}) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const mat = bilinearMaterial(job.material);
  const bc = tetBoundaryConditions(model, job.bcs, { density: mat.density, faces: job.faces || null });
  const r = solveNonlinear(model, [mat], null, bc, { ...(job.nonlinear || {}), ...opts });
  return { ...r, material: mat, loadTotal: bc.loadTotal, groups: bc.groups };
}

export { makeTetModel, IDENT_N };
