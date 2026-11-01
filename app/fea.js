/* SPDX-License-Identifier: Apache-2.0 */
/**
 * fea.js — linear static (and modal) finite-element analysis on a voxel grid (DOM-free).
 * Units: mm, N, MPa (N/mm²), tonnes (so density kg/m³ × 1e-12), s.
 *
 * Method. Every solid cube of a voxel.js grid is one 8-node hexahedron (trilinear, 3 dofs per node),
 * isotropic linear-elastic. All elements are equal cubes, so one 24×24 element stiffness serves the whole
 * model (scaled by E·h, and by a per-element factor for SIMP); K·x is applied element by element (matrix
 * free). Two element types:
 *   'h8i' (default) — Wilson–Taylor incompatible modes (3 bubble modes per component, condensed out once):
 *        exact for constant-Jacobian elements in pure bending, so beams are right with few elements through
 *        the thickness, and it passes the patch test on cubes.
 *   'h8'  — the plain fully integrated trilinear hex (2×2×2 Gauss), stiff in bending (shear locking).
 * Solver: preconditioned conjugate gradients with a geometric multigrid V-cycle (mg.js; node-block Jacobi
 * is kept as the simple option),
 * constraints as projections (fixed: all three directions; frictionless: the face normal) so CG works in
 * the space of admissible displacements. Stress: σ = D·ε at the 8 corners of each element (incompatible
 * modes included), von Mises per corner, averaged at nodes for plots; element value = the centre.
 * Reactions = (K·u − f) in the constrained directions; they balance the applied loads (checked).
 * Modal: lumped mass, subspace iteration on K⁻¹M with Rayleigh–Ritz (generalized Jacobi), each K⁻¹ by PCG.
 * Limits: small displacements, linear elastic (no plasticity, contact or buckling), the surface is the voxel
 * staircase (curved faces lose up to about h/2), stress concentrations at re-entrant corners and at
 * constrained edges are mesh dependent (singular), every material isotropic.
 */
import { applyEnv } from './env/env.js';
import * as VX from './voxel.js';
import { t, has } from './i18n.js';
import { readMaterial, tonnesPerMm3, G_MM } from './materials.js';
import { buildMG } from './mg.js';
import { getPool, voxelPCG } from './pool.js';   // threads (when the page is cross-origin isolated): pcg below hands over

/** A support or load type in words for a message (its own word when the language files have none). */
export const typeWord = (type) => (has('study.fea.type.' + type) ? t('study.fea.type.' + type) : type);

/** The preconditioner for a model: multigrid (a small model's coarsest level is the whole model: a direct solve). */
export const preconditioner = (model, cons, scale = null, opts = {}) => ({ mg: buildMG(model, cons, scale, applyK, opts) });

const XI = [-1, 1, 1, -1, -1, 1, 1, -1], ETA = [-1, -1, 1, 1, -1, -1, 1, 1], ZETA = [-1, -1, -1, -1, 1, 1, 1, 1];

/** Isotropic D (6×6, engineering shear strains) for E = 1. */
export function elasticD(nu) {
  const l = nu / ((1 + nu) * (1 - 2 * nu)), m = 1 / (2 * (1 + nu)), D = new Float64Array(36);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) D[i * 6 + j] = l + (i === j ? 2 * m : 0);
  for (let i = 3; i < 6; i++) D[i * 6 + i] = m;
  return D;
}

// B for a unit cube (x = (ξ+1)/2 ⇒ ∂/∂x = 2∂/∂ξ); dN = [[dx,dy,dz] per function]
function bRows(dN, nf) {
  const B = new Float64Array(6 * nf * 3), c = nf * 3;
  for (let a = 0; a < nf; a++) {
    const [dx, dy, dz] = dN[a];
    B[0 * c + 3 * a] = dx; B[1 * c + 3 * a + 1] = dy; B[2 * c + 3 * a + 2] = dz;
    B[3 * c + 3 * a] = dy; B[3 * c + 3 * a + 1] = dx;
    B[4 * c + 3 * a + 1] = dz; B[4 * c + 3 * a + 2] = dy;
    B[5 * c + 3 * a] = dz; B[5 * c + 3 * a + 2] = dx;
  }
  return B;
}
const dNc = (x, y, z) => XI.map((_, a) => [2 * XI[a] * (1 + ETA[a] * y) * (1 + ZETA[a] * z) / 8, 2 * ETA[a] * (1 + XI[a] * x) * (1 + ZETA[a] * z) / 8, 2 * ZETA[a] * (1 + XI[a] * x) * (1 + ETA[a] * y) / 8]);
const dNi = (x, y, z) => [[-4 * x, 0, 0], [0, -4 * y, 0], [0, 0, -4 * z]];

// C (r×c) = Aᵀ D B with A (6×ra), B (6×c)
function atDb(A, ra, D, B, cb, w, out) {
  const DB = new Float64Array(6 * cb);
  for (let i = 0; i < 6; i++) for (let k = 0; k < 6; k++) { const d = D[i * 6 + k]; if (d) for (let j = 0; j < cb; j++) DB[i * cb + j] += d * B[k * cb + j]; }
  for (let i = 0; i < ra; i++) for (let k = 0; k < 6; k++) { const a = A[k * ra + i]; if (a) for (let j = 0; j < cb; j++) out[i * cb + j] += w * a * DB[k * cb + j]; }
}

/** Dense solve of A X = B (A n×n, B n×m), Gaussian elimination with partial pivoting (small systems). */
export function solveSmall(A, n, B, m) {
  A = Float64Array.from(A); B = Float64Array.from(B);
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(A[r * n + c]) > Math.abs(A[p * n + c])) p = r;
    if (Math.abs(A[p * n + c]) < 1e-300) throw new Error('singular matrix');   // i18n-ignore: internal (a dense solve on a matrix the callers keep regular)
    if (p !== c) { for (let k = 0; k < n; k++) [A[c * n + k], A[p * n + k]] = [A[p * n + k], A[c * n + k]]; for (let k = 0; k < m; k++) [B[c * m + k], B[p * m + k]] = [B[p * m + k], B[c * m + k]]; }
    for (let r = c + 1; r < n; r++) {
      const f = A[r * n + c] / A[c * n + c]; if (!f) continue;
      for (let k = c; k < n; k++) A[r * n + k] -= f * A[c * n + k];
      for (let k = 0; k < m; k++) B[r * m + k] -= f * B[c * m + k];
    }
  }
  for (let c = n - 1; c >= 0; c--) for (let k = 0; k < m; k++) {
    let s = B[c * m + k]; for (let j = c + 1; j < n; j++) s -= A[c * n + j] * B[j * m + k];
    B[c * m + k] = s / A[c * n + c];
  }
  return B;
}

const hexCache = new Map();
/**
 * The element of a unit cube with E = 1 → { Ke: Float64Array(576), S: Float64Array(9·6·24) } (S: stress
 * operators at the 8 corners then the centre). For a cube of side h and modulus E: K = E·h·Ke, σ = (E/h)·S·u.
 */
export function hexElement(nu, type = 'h8i') {
  const key = nu + type;
  if (hexCache.has(key)) return hexCache.get(key);
  const D = elasticD(nu), g = 1 / Math.sqrt(3), detw = 1 / 8;
  const Kcc = new Float64Array(576), Kci = new Float64Array(24 * 9), Kii = new Float64Array(81);
  for (const x of [-g, g]) for (const y of [-g, g]) for (const z of [-g, g]) {
    const Bc = bRows(dNc(x, y, z), 8);
    atDb(Bc, 24, D, Bc, 24, detw, Kcc);
    if (type === 'h8i') { const Bi = bRows(dNi(x, y, z), 3); atDb(Bc, 24, D, Bi, 9, detw, Kci); atDb(Bi, 9, D, Bi, 9, detw, Kii); }
  }
  let Ke = Kcc, A = null;
  if (type === 'h8i') {
    // α = A u, A = −Kii⁻¹ Kic ; Ke = Kcc + Kci A
    const Kic = new Float64Array(9 * 24); for (let i = 0; i < 24; i++) for (let j = 0; j < 9; j++) Kic[j * 24 + i] = Kci[i * 9 + j];
    A = solveSmall(Kii, 9, Kic, 24).map((v) => -v);
    Ke = new Float64Array(576);
    for (let i = 0; i < 24; i++) for (let j = 0; j < 24; j++) { let s = Kcc[i * 24 + j]; for (let k = 0; k < 9; k++) s += Kci[i * 9 + k] * A[k * 24 + j]; Ke[i * 24 + j] = s; }
    for (let i = 0; i < 24; i++) for (let j = 0; j < i; j++) { const m = (Ke[i * 24 + j] + Ke[j * 24 + i]) / 2; Ke[i * 24 + j] = Ke[j * 24 + i] = m; }
  }
  const S = new Float64Array(9 * 144);
  const pts = XI.map((_, a) => [XI[a], ETA[a], ZETA[a]]).concat([[0, 0, 0]]);
  pts.forEach(([x, y, z], p) => {
    const B = bRows(dNc(x, y, z), 8);
    if (A) { const Bi = bRows(dNi(x, y, z), 3); for (let r = 0; r < 6; r++) for (let j = 0; j < 24; j++) { let s = 0; for (let k = 0; k < 9; k++) s += Bi[r * 9 + k] * A[k * 24 + j]; B[r * 24 + j] += s; } }
    for (let r = 0; r < 6; r++) for (let j = 0; j < 24; j++) { let s = 0; for (let k = 0; k < 6; k++) s += D[r * 6 + k] * B[k * 24 + j]; S[p * 144 + r * 24 + j] = s; }
  });
  const out = { Ke, S, type, nu };
  hexCache.set(key, out);
  return out;
}

export const vonMises = (s) => Math.sqrt(0.5 * ((s[0] - s[1]) ** 2 + (s[1] - s[2]) ** 2 + (s[2] - s[0]) ** 2) + 3 * (s[3] ** 2 + s[4] ** 2 + s[5] ** 2));

// ------------------------------------------------------------------------------------------- model

/**
 * The finite-element model of a grid: elems (element ids), node0 (their first node), active nodes,
 * the element matrix, and K·x. scale: optional Float64Array per grid element (SIMP stiffness factor).
 */
export function makeModel(grid, { E, nu, type = 'h8i', isSolid = null } = {}) {
  const solidAt = isSolid || ((e) => grid.solid[e] === 1);
  const ids = [];
  for (let e = 0; e < grid.solid.length; e++) if (solidAt(e)) ids.push(e);
  const elems = Int32Array.from(ids), node0 = Int32Array.from(ids, (e) => VX.elemNode0(grid, e));
  const nn = (grid.nx + 1) * (grid.ny + 1) * (grid.nz + 1);
  const active = VX.activeNodes(grid, solidAt);
  const el = hexElement(nu, type);
  return { grid, E, nu, type, elems, node0, nn, active, off: Int32Array.from(VX.cornerOffsets(grid)), Ke: el.Ke, S: el.S, kScale: E * grid.h };
}

/** y = K x (scale: per-model-element factor or null). */
export function applyK(model, x, y, scale = null) {
  const { node0, off, Ke, kScale } = model, ne = node0.length;
  const xe = new Float64Array(24), dof = new Int32Array(24);
  y.fill(0);
  for (let m = 0; m < ne; m++) {
    const s = scale ? scale[m] * kScale : kScale;
    if (s === 0) continue;
    const n0 = node0[m];
    for (let c = 0; c < 8; c++) { const d = 3 * (n0 + off[c]); dof[3 * c] = d; dof[3 * c + 1] = d + 1; dof[3 * c + 2] = d + 2; xe[3 * c] = x[d]; xe[3 * c + 1] = x[d + 1]; xe[3 * c + 2] = x[d + 2]; }
    for (let i = 0, r = 0; i < 24; i++, r += 24) {
      let t = 0;
      for (let j = 0; j < 24; j++) t += Ke[r + j] * xe[j];
      y[dof[i]] += s * t;
    }
  }
  return y;
}

/** Node-block diagonal of K, inverted → Float64Array(9·nn) (inactive nodes 0). */
export function blockJacobi(model, scale = null) {
  const { node0, off, Ke, kScale, nn } = model, B = new Float64Array(9 * nn);
  for (let m = 0; m < node0.length; m++) {
    const s = scale ? scale[m] * kScale : kScale;
    for (let c = 0; c < 8; c++) {
      const b = 9 * (node0[m] + off[c]);
      for (let a = 0; a < 3; a++) for (let d = 0; d < 3; d++) B[b + a * 3 + d] += s * Ke[(3 * c + a) * 24 + 3 * c + d];
    }
  }
  for (let n = 0; n < nn; n++) {
    const b = 9 * n, a = B.subarray(b, b + 9);
    const det = a[0] * (a[4] * a[8] - a[5] * a[7]) - a[1] * (a[3] * a[8] - a[5] * a[6]) + a[2] * (a[3] * a[7] - a[4] * a[6]);
    if (!(Math.abs(det) > 0)) { a.fill(0); continue; }
    const inv = [a[4] * a[8] - a[5] * a[7], a[2] * a[7] - a[1] * a[8], a[1] * a[5] - a[2] * a[4], a[5] * a[6] - a[3] * a[8], a[0] * a[8] - a[2] * a[6], a[2] * a[3] - a[0] * a[5], a[3] * a[7] - a[4] * a[6], a[1] * a[6] - a[0] * a[7], a[0] * a[4] - a[1] * a[3]];
    for (let k = 0; k < 9; k++) a[k] = inv[k] / det;
  }
  return B;
}

// ------------------------------------------------------------------------------------------- constraints

/** Constraint set → { nodes: Int32Array, P: Float64Array(9 each), dirs: [[unit vectors]] } (P = I − QQᵀ). */
export function makeConstraints(nodeDirs) {
  const nodes = [], P = [], dirs = [];
  for (const [n, list] of nodeDirs) {
    const q = [];
    for (const d of list) {   // Gram–Schmidt
      let v = [...d];
      for (const u of q) { const t = v[0] * u[0] + v[1] * u[1] + v[2] * u[2]; v = [v[0] - t * u[0], v[1] - t * u[1], v[2] - t * u[2]]; }
      const l = Math.hypot(...v);
      if (l > 1e-6) q.push(v.map((c) => c / l));
      if (q.length === 3) break;
    }
    const p = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    for (const u of q) for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) p[a * 3 + b] -= u[a] * u[b];
    nodes.push(n); P.push(...p); dirs.push(q);
  }
  return { nodes: Int32Array.from(nodes), P: Float64Array.from(P), dirs };
}

function projector(model, cons) {
  const { active, nn } = model, cn = cons.nodes, P = cons.P;
  return (v) => {
    for (let n = 0; n < nn; n++) if (!active[n]) { v[3 * n] = 0; v[3 * n + 1] = 0; v[3 * n + 2] = 0; }
    for (let m = 0; m < cn.length; m++) {
      const d = 3 * cn[m], p = 9 * m, x = v[d], y = v[d + 1], z = v[d + 2];
      v[d] = P[p] * x + P[p + 1] * y + P[p + 2] * z; v[d + 1] = P[p + 3] * x + P[p + 4] * y + P[p + 5] * z; v[d + 2] = P[p + 6] * x + P[p + 7] * y + P[p + 8] * z;
    }
    return v;
  };
}

/** Symmetric eigenvalues of a small matrix (cyclic Jacobi) → { values, vectors (column-major n×n) }. */
export function symEig(A, n) {
  const a = Float64Array.from(A), v = new Float64Array(n * n);
  for (let i = 0; i < n; i++) v[i * n + i] = 1;
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) off += a[i * n + j] ** 2;
    if (off < 1e-30) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      const apq = a[p * n + q]; if (Math.abs(apq) < 1e-300) continue;
      const th = (a[q * n + q] - a[p * n + p]) / (2 * apq), t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1)), c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const akp = a[k * n + p], akq = a[k * n + q]; a[k * n + p] = c * akp - s * akq; a[k * n + q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = a[p * n + k], aqk = a[q * n + k]; a[p * n + k] = c * apk - s * aqk; a[q * n + k] = s * apk + c * aqk; }
      for (let k = 0; k < n; k++) { const vkp = v[k * n + p], vkq = v[k * n + q]; v[k * n + p] = c * vkp - s * vkq; v[k * n + q] = s * vkp + c * vkq; }
    }
  }
  return { values: Array.from({ length: n }, (_, i) => a[i * n + i]), vectors: v };
}

/**
 * Is the body held? The six rigid motions (about the grid's centre, lengths scaled by its size) restricted
 * to the constrained directions must be independent. → null, or the motions left free in words.
 */
export function rigidCheck(model, cons) {
  const g = model.grid, c = [g.origin[0] + g.nx * g.h / 2, g.origin[1] + g.ny * g.h / 2, g.origin[2] + g.nz * g.h / 2], L = Math.max(g.nx, g.ny, g.nz) * g.h;
  const G = new Float64Array(36);
  for (let m = 0; m < cons.nodes.length; m++) {
    const p = VX.nodeXYZ(g, cons.nodes[m]).map((v, a) => (v - c[a]) / L);
    const R = [[1, 0, 0, 0, p[2], -p[1]], [0, 1, 0, -p[2], 0, p[0]], [0, 0, 1, p[1], -p[0], 0]];   // rows x,y,z; cols tx ty tz rx ry rz
    for (const q of cons.dirs[m]) {
      const r = [0, 1, 2, 3, 4, 5].map((k) => q[0] * R[0][k] + q[1] * R[1][k] + q[2] * R[2][k]);
      for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) G[i * 6 + j] += r[i] * r[j];
    }
  }
  const { values, vectors } = symEig(G, 6);
  const big = Math.max(...values, 1e-30), names = [t('study.fea.free.move_x'), t('study.fea.free.move_y'), t('study.fea.free.move_z'), t('study.fea.free.turn_x'), t('study.fea.free.turn_y'), t('study.fea.free.turn_z')];
  const free = [];
  values.forEach((v, k) => {
    if (v > 1e-9 * big && v > 1e-12) return;
    let best = 0; for (let i = 1; i < 6; i++) if (Math.abs(vectors[i * 6 + k]) > Math.abs(vectors[best * 6 + k])) best = i;
    free.push(names[best]);
  });
  return free.length ? free : null;
}

// ------------------------------------------------------------------------------------------- PCG

/**
 * Projected PCG for K u = f. → { u, iterations, residual (relative), converged }.
 * opts { x0, tol 1e-8, maxIter, scale, Minv (block Jacobi) | mg (mg.js buildMG: a V-cycle per iteration), onProgress(fraction, text), cancelled() }
 */
export function pcg(model, cons, f, { x0 = null, tol = 1e-8, maxIter = 0, scale = null, Minv = null, mg = null, onProgress = null, cancelled = null, label = 'Solving' } = {}) {
  const pool = getPool();
  if (pool && pool.big(3 * model.nn)) return voxelPCG(pool, model, cons, f, { x0, tol, maxIter, scale, mg, M: mg ? null : Minv || blockJacobi(model, scale), onProgress, cancelled, label });
  const n = 3 * model.nn, proj = projector(model, cons);
  const M = mg ? null : Minv || blockJacobi(model, scale);
  const u = x0 ? Float64Array.from(x0) : new Float64Array(n);
  proj(u);
  const r = new Float64Array(n), z = new Float64Array(n), p = new Float64Array(n), q = new Float64Array(n);
  const b = proj(Float64Array.from(f));
  let bn = 0; for (let i = 0; i < n; i++) bn += b[i] * b[i];
  bn = Math.sqrt(bn);
  if (bn === 0) return { u: new Float64Array(n), iterations: 0, residual: 0, converged: true };
  applyK(model, u, q, scale);
  for (let i = 0; i < n; i++) r[i] = b[i] - q[i];
  proj(r);
  const tmp = mg ? new Float64Array(n) : null;
  const prec = (src, dst) => {
    if (mg) { tmp.set(src); proj(tmp); mg.apply(tmp, dst); return proj(dst); }
    for (let nd = 0; nd < model.nn; nd++) {
      const d = 3 * nd, m = 9 * nd, x = src[d], y = src[d + 1], w = src[d + 2];
      dst[d] = M[m] * x + M[m + 1] * y + M[m + 2] * w; dst[d + 1] = M[m + 3] * x + M[m + 4] * y + M[m + 5] * w; dst[d + 2] = M[m + 6] * x + M[m + 7] * y + M[m + 8] * w;
    }
    return proj(dst);
  };
  prec(r, z); p.set(z);
  let rz = 0; for (let i = 0; i < n; i++) rz += r[i] * z[i];
  const cap = maxIter || Math.max(2000, 20 * Math.cbrt(model.elems.length) * 30);
  let it = 0, res = 1, t0 = Date.now();
  for (; it < cap; it++) {
    let rn = 0; for (let i = 0; i < n; i++) rn += r[i] * r[i];
    res = Math.sqrt(rn) / bn;
    if (res < tol) break;
    if (onProgress && Date.now() - t0 > 200) { t0 = Date.now(); onProgress(Math.min(0.99, Math.log(res) / Math.log(tol)), `${label}: iteration ${it}, residual ${res.toExponential(1)}`); }   // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
    if (cancelled && (it & 15) === 0 && cancelled()) throw new Error('Cancelled');
    applyK(model, p, q, scale); proj(q);
    let pq = 0; for (let i = 0; i < n; i++) pq += p[i] * q[i];
    if (!(pq > 0)) break;
    const a = rz / pq;
    for (let i = 0; i < n; i++) { u[i] += a * p[i]; r[i] -= a * q[i]; }
    prec(r, z);
    let rz2 = 0; for (let i = 0; i < n; i++) rz2 += r[i] * z[i];
    const beta = rz2 / rz; rz = rz2;
    for (let i = 0; i < n; i++) p[i] = z[i] + beta * p[i];
  }
  return { u, iterations: it, residual: res, converged: res < tol };
}

// ------------------------------------------------------------------------------------------- study → job

export const CONSTRAINT_TYPES = ['fixed', 'frictionless'];
export const LOAD_TYPES = ['force', 'pressure', 'gravity'];

/** A FaceRef {name, at} → index into regen.faces (nearest `at` among faces of that name), or −1. */
export function faceIndex(faces, ref) {
  let best = -1, bd = Infinity;
  faces.forEach((f, i) => {
    if (f.name !== ref.name) return;
    const d = ref.at && f.at ? Math.hypot(f.at[0] - ref.at[0], f.at[1] - ref.at[1], f.at[2] - ref.at[2]) : 0;
    if (d < bd) { bd = d; best = i; }
  });
  return best;
}

/**
 * Boundary conditions on a grid → { f: Float64Array(3·nn), cons, loadTotal:[x,y,z], groups } where each
 * constraint/load lists its nodes (for markers and reactions). bcs: { constraints:[{type, faces:[idx]}],
 * loads:[{type:'force', faces, total, dir:'normal'|[x,y,z]} | {type:'pressure', faces, p} | {type:'gravity', dir}] }.
 * Forces on a face are shared by tributary area of the face's voxel facets; "normal" pushes into the part
 * along each node's normal; pressure acts on the face's true area (exactArea, when given) along the inward
 * normal, the voxel facets' weights scaled to it. Gravity: ρ·g·h³ per element, an eighth to each corner.
 */
export function boundaryConditions(model, mesh, bcs, { density = 0, surfaceOnly = true, exactArea = null, scale = null } = {}) {
  const g = model.grid, f = new Float64Array(3 * model.nn), nodeDirs = new Map(), groups = { constraints: [], loads: [] };
  // an item picks faces (by index) or, for tests and scripted studies, grid nodes directly
  const fn = (it) => (it.nodes ? { nodes: Int32Array.from(it.nodes), weight: new Float64Array(it.nodes.length).fill(1), normal: new Float32Array(it.nodes.length * 3), quadArea: 0 } : VX.faceNodes(g, mesh, it.faces, { surfaceOnly }));
  const okNode = (n) => model.active[n] === 1;
  for (const c of bcs.constraints || []) {
    const sel = fn(c), nodes = [];
    sel.nodes.forEach((n, i) => {
      if (!okNode(n)) return;
      nodes.push(n);
      const list = nodeDirs.get(n) || [];
      if (c.type === 'fixed') list.push(...(c.axes || [0, 1, 2]).map((a) => [0, 1, 2].map((b) => (a === b ? 1 : 0))));
      else list.push(...(sel.normals ? sel.normals[i] : [[sel.normal[i * 3], sel.normal[i * 3 + 1], sel.normal[i * 3 + 2]]]));
      nodeDirs.set(n, list);
    });
    if (!nodes.length) throw new Error(t('study.fea.constraint_no_nodes', { type: typeWord(c.type) }));
    groups.constraints.push({ type: c.type, nodes: Int32Array.from(nodes) });
  }
  const total = [0, 0, 0];
  for (const l of bcs.loads || []) {
    const nodes = [];
    if (l.type === 'gravity') {
      const d = l.dir || [0, -1, 0], dl = Math.hypot(...d) || 1, w = density * (l.g ?? G_MM) * g.h ** 3 / 8;
      for (let m = 0; m < model.node0.length; m++) {
        const s = scale ? scale[m] : 1;
        for (let c = 0; c < 8; c++) { const n = model.node0[m] + model.off[c]; for (let a = 0; a < 3; a++) { f[3 * n + a] += s * w * d[a] / dl; total[a] += s * w * d[a] / dl; } }
      }
      groups.loads.push({ type: 'gravity', nodes: new Int32Array(0) });
      continue;
    }
    const sel = fn(l);
    let wsum = 0; sel.nodes.forEach((n, i) => { if (okNode(n)) wsum += sel.weight[i]; });
    if (!(wsum > 0)) throw new Error(t('study.fea.load_no_nodes', { type: typeWord(l.type) }));
    let mag, vec = null;
    if (l.type === 'force') { mag = l.total; if (Array.isArray(l.dir)) { const dl = Math.hypot(...l.dir) || 1; vec = l.dir.map((v) => v / dl); } }
    else { const A = exactArea && l.faces ? l.faces.reduce((s, fi) => s + (exactArea[fi] || 0), 0) : sel.quadArea || wsum; mag = l.p * A; }
    sel.nodes.forEach((n, i) => {
      if (!okNode(n)) return;
      nodes.push(n);
      const share = mag * sel.weight[i] / wsum;
      const d = vec || [-sel.normal[i * 3], -sel.normal[i * 3 + 1], -sel.normal[i * 3 + 2]];
      for (let a = 0; a < 3; a++) { f[3 * n + a] += share * d[a]; total[a] += share * d[a]; }
    });
    groups.loads.push({ type: l.type, nodes: Int32Array.from(nodes) });
  }
  return { f, cons: makeConstraints(nodeDirs), loadTotal: total, groups };
}

// ------------------------------------------------------------------------------------------- results

/** Stresses, displacements, reactions from a solved u. */
export function postprocess(model, u, f, cons, { yieldStress = Infinity, scale = null, groups = null, thermal = null } = {}) {
  const { grid: g, node0, off, S, nn, active } = model, sF = model.E / g.h;
  const ne = node0.length, vmElem = new Float32Array(ne), vmSum = new Float64Array(nn), cnt = new Uint16Array(nn);
  const ue = new Float64Array(24), s = new Float64Array(6);
  // thermal { dT (per grid node, rise over the stress-free temperature), alpha, corr? }: σ = D(ε − α ΔT I) (thermal.js, buckling.js)
  const thK = thermal ? model.E * thermal.alpha / (1 - 2 * model.nu) : 0;
  let elMax = 0, elMaxAt = -1;
  for (let m = 0; m < ne; m++) {
    const n0 = node0[m], k = (scale ? scale[m] : 1) * sF;
    for (let c = 0; c < 8; c++) { const d = 3 * (n0 + off[c]); ue[3 * c] = u[d]; ue[3 * c + 1] = u[d + 1]; ue[3 * c + 2] = u[d + 2]; }
    for (let p = 0; p < 9; p++) {
      for (let r = 0; r < 6; r++) { let t = 0; const b = p * 144 + r * 24; for (let j = 0; j < 24; j++) t += S[b + j] * ue[j]; s[r] = k * t; }
      if (thermal) {
        let dt = 0; if (p < 8) dt = thermal.dT[n0 + off[p]]; else { for (let c = 0; c < 8; c++) dt += thermal.dT[n0 + off[c]]; dt /= 8; }
        const sc = scale ? scale[m] : 1, st = sc * thK * dt; s[0] -= st; s[1] -= st; s[2] -= st;
        const C = thermal.corr;   // h8i: the bubble modes' thermal share per unit E·α (thermal.js stressCorrection)
        if (C) for (let r = 0; r < 6; r++) { let t = 0; for (let c = 0; c < 8; c++) t += C[p * 48 + r * 8 + c] * thermal.dT[n0 + off[c]]; s[r] += sc * model.E * thermal.alpha * t; }
      }
      const vm = vonMises(s);
      if (p < 8) { vmSum[n0 + off[p]] += vm; cnt[n0 + off[p]]++; } else { vmElem[m] = vm; if (vm > elMax) { elMax = vm; elMaxAt = m; } }
    }
  }
  const vmNode = new Float32Array(nn), disp = new Float32Array(nn);
  let vMax = 0, vAt = -1, dMax = 0, dAt = -1;
  for (let n = 0; n < nn; n++) {
    if (!active[n]) { vmNode[n] = NaN; disp[n] = NaN; continue; }
    vmNode[n] = vmSum[n] / cnt[n];
    disp[n] = Math.hypot(u[3 * n], u[3 * n + 1], u[3 * n + 2]);
    if (vmNode[n] > vMax) { vMax = vmNode[n]; vAt = n; }
    if (disp[n] > dMax) { dMax = disp[n]; dAt = n; }
  }
  // reactions: (K u − f) in the constrained directions
  const ku = applyK(model, u, new Float64Array(3 * nn), scale);
  const reaction = [0, 0, 0], nodeR = new Map();
  for (let m = 0; m < cons.nodes.length; m++) {
    const d = 3 * cons.nodes[m], r = [ku[d] - f[d], ku[d + 1] - f[d + 1], ku[d + 2] - f[d + 2]], rr = [0, 0, 0];
    for (const q of cons.dirs[m]) { const t = r[0] * q[0] + r[1] * q[1] + r[2] * q[2]; for (let a = 0; a < 3; a++) rr[a] += t * q[a]; }
    for (let a = 0; a < 3; a++) reaction[a] += rr[a];
    nodeR.set(cons.nodes[m], rr);
  }
  // per constraint (a node shared by two constraints counts in both)
  const groupReactions = groups ? groups.map((gr) => { const s = [0, 0, 0]; for (const n of gr.nodes) { const rr = nodeR.get(n); if (rr) for (let a = 0; a < 3; a++) s[a] += rr[a]; } return s; }) : null;
  let compliance = 0; for (let i = 0; i < f.length; i++) compliance += f[i] * u[i];
  return {
    vmNode, vmElem, disp, reaction, groupReactions, compliance,
    maxVm: { value: vMax, node: vAt, at: vAt >= 0 ? VX.nodeXYZ(g, vAt) : null },
    maxVmElem: { value: elMax, at: elMaxAt >= 0 ? VX.elemCentre(g, model.elems[elMaxAt]) : null },
    maxDisp: { value: dMax, node: dAt, at: dAt >= 0 ? VX.nodeXYZ(g, dAt) : null, vec: dAt >= 0 ? [u[3 * dAt], u[3 * dAt + 1], u[3 * dAt + 2]] : null },
    minSafety: vMax > 0 ? yieldStress / vMax : Infinity,
  };
}

/** A nodal grid field sampled at a point: trilinear over the cell's active corners (renormalised); the
 *  nearest cell with active corners when the point's own has none (the staircase). comps 1 or 3. */
export function sampleField(model, values, comps, p, out = new Float64Array(comps)) {
  const g = model.grid, NX = g.nx + 1, NXY = NX * (g.ny + 1);
  const fx = (p[0] - g.origin[0]) / g.h, fy = (p[1] - g.origin[1]) / g.h, fz = (p[2] - g.origin[2]) / g.h;
  for (let ring = 0; ring <= 2; ring++) {
    out.fill(0); let wsum = 0;
    const i0 = Math.min(g.nx - 1, Math.max(0, Math.floor(fx))), j0 = Math.min(g.ny - 1, Math.max(0, Math.floor(fy))), k0 = Math.min(g.nz - 1, Math.max(0, Math.floor(fz)));
    for (let dk = -ring; dk <= ring + 1; dk++) for (let dj = -ring; dj <= ring + 1; dj++) for (let di = -ring; di <= ring + 1; di++) {
      const i = i0 + di, j = j0 + dj, k = k0 + dk;
      if (i < 0 || j < 0 || k < 0 || i > g.nx || j > g.ny || k > g.nz) continue;
      const n = i + NX * j + NXY * k;
      if (!model.active[n]) continue;
      const w = Math.max(0, 1 - Math.abs(fx - i) / (ring + 1)) * Math.max(0, 1 - Math.abs(fy - j) / (ring + 1)) * Math.max(0, 1 - Math.abs(fz - k) / (ring + 1));
      if (w <= 0) continue;
      for (let c = 0; c < comps; c++) out[c] += w * values[comps * n + c];
      wsum += w;
    }
    if (wsum > 0) { for (let c = 0; c < comps; c++) out[c] /= wsum; return out; }
  }
  out.fill(NaN);
  return out;
}

/** Per-vertex values of the part mesh: { vm, disp (magnitude), u (xyz) } as Float32Arrays. */
export function onMesh(model, res, u, mesh) {
  const nv = mesh.positions.length / 3, vm = new Float32Array(nv), disp = new Float32Array(nv), uv = new Float32Array(nv * 3);
  const one = new Float64Array(1), three = new Float64Array(3), vmv = Float64Array.from(res.vmNode, (v) => (Number.isFinite(v) ? v : 0));
  for (let v = 0; v < nv; v++) {
    const p = [mesh.positions[v * 3], mesh.positions[v * 3 + 1], mesh.positions[v * 3 + 2]];
    sampleField(model, vmv, 1, p, one); vm[v] = one[0];
    sampleField(model, u, 3, p, three); uv[v * 3] = three[0]; uv[v * 3 + 1] = three[1]; uv[v * 3 + 2] = three[2];
    disp[v] = Math.hypot(three[0], three[1], three[2]);
  }
  return { vm, disp, u: uv };
}

/**
 * A display mesh fine enough to plot a field on: every edge longer than `lim` is split at its midpoint (shared
 * edges split once, so the mesh stays closed; a triangle with 1, 2 or 3 split edges becomes 2, 3 or 4), repeated
 * until none is longer, or until about maxTris triangles. → { positions: Float32Array, indices: Uint32Array, triFace }
 */
export function refineMesh(mesh, lim, maxTris = 400000) {
  let P = Array.from(mesh.positions), I = Array.from(mesh.indices), TF = mesh.triFace ? Array.from(mesh.triFace) : null;
  const L2 = lim * lim;
  for (let pass = 0; pass < 12; pass++) {
    const mid = new Map(), d2 = (a, b) => (P[3 * a] - P[3 * b]) ** 2 + (P[3 * a + 1] - P[3 * b + 1]) ** 2 + (P[3 * a + 2] - P[3 * b + 2]) ** 2;
    const key = (a, b) => (a < b ? a * 4294967296 + b : b * 4294967296 + a);
    let marked = 0;
    for (let t = 0; t < I.length; t += 3) for (let k = 0; k < 3; k++) { const a = I[t + k], b = I[t + (k + 1) % 3], q = key(a, b); if (!mid.has(q) && d2(a, b) > L2) { mid.set(q, -1); marked++; } }
    if (!marked || I.length / 3 + marked * 2 > maxTris) break;
    for (const q of mid.keys()) { const a = Math.floor(q / 4294967296), b = q % 4294967296; mid.set(q, P.length / 3); P.push((P[3 * a] + P[3 * b]) / 2, (P[3 * a + 1] + P[3 * b + 1]) / 2, (P[3 * a + 2] + P[3 * b + 2]) / 2); }
    const NI = [], NF = [];
    for (let t = 0; t < I.length; t += 3) {
      const v = [I[t], I[t + 1], I[t + 2]], m = [0, 1, 2].map((k) => mid.get(key(v[k], v[(k + 1) % 3])) ?? -1), f = TF ? TF[t / 3] : 0;
      const tri = (a, b, c) => { NI.push(a, b, c); NF.push(f); };
      const n = m.filter((x) => x >= 0).length;
      if (n === 0) tri(v[0], v[1], v[2]);
      else if (n === 3) { tri(v[0], m[0], m[2]); tri(m[0], v[1], m[1]); tri(m[2], m[1], v[2]); tri(m[0], m[1], m[2]); }
      else {
        // rotate so the first split edge is v0–v1
        let r = m.findIndex((x) => x >= 0);
        if (n === 2 && m[(r + 2) % 3] >= 0) r = (r + 2) % 3;   // the two split edges start at v[r]
        const a = v[r], b = v[(r + 1) % 3], c = v[(r + 2) % 3], ab = m[r], bc = m[(r + 1) % 3];
        if (n === 1) { tri(a, ab, c); tri(ab, b, c); }
        else { tri(a, ab, c); tri(ab, b, bc); tri(ab, bc, c); }
      }
    }
    I = NI; TF = NF;
  }
  return { positions: Float32Array.from(P), indices: Uint32Array.from(I), triFace: Int32Array.from(TF || new Array(I.length / 3).fill(0)) };
}

// ------------------------------------------------------------------------------------------- modal

/** Lumped mass per node (t), 3 equal dofs. */
export function lumpedMass(model, density) {
  const m = new Float64Array(model.nn), me = density * model.grid.h ** 3 / 8;
  for (let e = 0; e < model.node0.length; e++) for (let c = 0; c < 8; c++) m[model.node0[e] + model.off[c]] += me;
  return m;
}

/**
 * The lowest `modes` natural frequencies (Hz) by subspace iteration: X ← K⁻¹ M X, Rayleigh–Ritz on
 * (XᵀKX, XᵀMX), until every wanted eigenvalue changes < 1e-6 (relative). → { freqs, shapes: [Float64Array] }.
 */
export function modal(model, cons, density, { modes = 4, maxIter = 40, onProgress = null, cancelled = null } = {}) {
  const n = 3 * model.nn, q = Math.min(2 * modes, modes + 8), mass = lumpedMass(model, density), proj = projector(model, cons);
  const Minv = blockJacobi(model);
  // start vectors: the mass diagonal and pseudo-random vectors
  let rnd = 12345; const rand = () => ((rnd = (rnd * 1103515245 + 12345) % 2147483648) / 2147483648) - 0.5;
  let X = Array.from({ length: q }, (_, k) => { const v = new Float64Array(n); for (let i = 0; i < n; i++) v[i] = k === 0 ? 1 : rand(); return proj(v); });
  const Mx = (x) => { const y = new Float64Array(n); for (let i = 0; i < n; i++) y[i] = mass[Math.floor(i / 3)] * x[i]; return y; };
  let prev = null, lam = null, Y = X.map(() => null);
  for (let it = 0; it < maxIter; it++) {
    const Z = X.map((x, k) => pcg(model, cons, Mx(x), { x0: Y[k], tol: 1e-10, Minv, cancelled }).u);
    Y = Z;
    // Rayleigh–Ritz
    const KZ = Z.map((z) => proj(applyK(model, z, new Float64Array(n)))), MZ = Z.map(Mx);
    const Kr = new Float64Array(q * q), Mr = new Float64Array(q * q);
    for (let a = 0; a < q; a++) for (let b = a; b < q; b++) {
      let sk = 0, sm = 0; for (let i = 0; i < n; i++) { sk += Z[a][i] * KZ[b][i]; sm += Z[a][i] * MZ[b][i]; }
      Kr[a * q + b] = Kr[b * q + a] = sk; Mr[a * q + b] = Mr[b * q + a] = sm;
    }
    // Mr = L Lᵀ (Cholesky), C = L⁻¹ Kr L⁻ᵀ, eig C
    const L = new Float64Array(q * q);
    for (let i = 0; i < q; i++) for (let j = 0; j <= i; j++) {
      let s = Mr[i * q + j]; for (let k = 0; k < j; k++) s -= L[i * q + k] * L[j * q + k];
      L[i * q + j] = i === j ? Math.sqrt(Math.max(s, 1e-300)) : s / L[j * q + j];
    }
    const Li = solveSmall(L, q, Float64Array.from({ length: q * q }, (_, k) => (Math.floor(k / q) === k % q ? 1 : 0)), q);
    const C = new Float64Array(q * q);
    for (let i = 0; i < q; i++) for (let j = 0; j < q; j++) { let s = 0; for (let a = 0; a < q; a++) for (let b = 0; b < q; b++) s += Li[i * q + a] * Kr[a * q + b] * Li[j * q + b]; C[i * q + j] = s; }
    const { values, vectors } = symEig(C, q);
    const order = values.map((v, i) => i).sort((a, b) => values[a] - values[b]);
    lam = order.map((i) => values[i]);
    // new X = Z · L⁻ᵀ · vectors (sorted), normalised
    X = order.map((col) => {
      const w = new Float64Array(q); for (let a = 0; a < q; a++) { let s = 0; for (let b = 0; b < q; b++) s += Li[b * q + a] * vectors[b * q + col]; w[a] = s; }
      const x = new Float64Array(n); for (let a = 0; a < q; a++) { const c = w[a]; if (c) for (let i = 0; i < n; i++) x[i] += c * Z[a][i]; }
      return x;
    });
    Y = X.map((x, k) => Float64Array.from(x, (v) => v / lam[k]));   // warm start: K⁻¹M x ≈ x/λ for a converged x
    if (onProgress) onProgress((it + 1) / maxIter, `Modes: iteration ${it + 1}`);   // i18n-ignore: progress label, never shown
    if (prev && lam.slice(0, modes).every((l, i) => Math.abs(l - prev[i]) <= 1e-6 * l)) break;
    prev = lam.slice();
  }
  const freqs = lam.slice(0, modes).map((l) => Math.sqrt(Math.max(l, 0)) / (2 * Math.PI));
  return { freqs, shapes: X.slice(0, modes) };
}

// ------------------------------------------------------------------------------------------- the whole job

/**
 * One simulation, start to end, as a pure function a worker can call.
 * job { mesh {positions, indices, triFace}, faces?: regen.faces (for exact areas), material (id or object),
 *       h, elem 'h8i'|'h8', kind 'static'|'modal', modes, bcs (face indices; see boundaryConditions), tol }
 * → { grid summary, stats, results (static) | freqs (modal), field arrays for plotting }.
 */
export function solveStudy(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), mat = readMaterial(job.material), rho = tonnesPerMm3(mat.density);
  onProgress(0, 'Building the voxel mesh');   // i18n-ignore: progress label, never shown
  const grid = VX.voxelize(job.mesh, { h: job.h });
  if (!grid.count) throw new Error(t('study.fea.no_elements'));
  const model = makeModel(grid, { E: mat.E, nu: mat.nu, type: job.elem || 'h8i' });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bc = boundaryConditions(model, job.mesh, job.bcs, { density: rho, exactArea });
  const free = rigidCheck(model, bc.cons);
  if (free) throw new Error(t('study.fea.not_held', { free: free.join(', ') }));
  const summary = { elements: model.elems.length, nodes: model.active.reduce((s, a) => s + a, 0), h: grid.h, nx: grid.nx, ny: grid.ny, nz: grid.nz, oddRows: grid.oddRows, volume: model.elems.length * grid.h ** 3, mass: model.elems.length * grid.h ** 3 * rho * 1000 };
  summary.dofs = 3 * summary.nodes;
  if (job.kind === 'modal') {
    const r = modal(model, bc.cons, rho, { modes: job.modes || 4, onProgress, cancelled });
    return { kind: 'modal', summary, freqs: r.freqs, shapes: r.shapes, model, grid, ms: Date.now() - t0 };
  }
  onProgress(0, 'Preparing the solver');   // i18n-ignore: progress label, never shown
  const sol = pcg(model, bc.cons, bc.f, { tol: job.tol || 1e-8, onProgress, cancelled, ...preconditioner(model, bc.cons) });
  if (!sol.converged) throw new Error(t('study.fea.no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  onProgress(1, 'Stresses');   // i18n-ignore: progress label, never shown
  const res = postprocess(model, sol.u, bc.f, bc.cons, { yieldStress: mat.yield, groups: bc.groups.constraints });
  return { kind: 'static', summary, material: mat, u: sol.u, iterations: sol.iterations, residual: sol.residual, loadTotal: bc.loadTotal, groups: bc.groups, ...res, model, grid, ms: Date.now() - t0 };
}
