/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tetfea.js — linear static and modal analysis on quadratic tetrahedra (T10) from tetmesh.js (DOM-free; runs in the
 * compute worker). Units as fea.js: mm, N, MPa, tonnes, s.
 *
 * Element: the 10-node isoparametric tetrahedron (corners L(2L−1), midsides 4LiLj; curved when tetmesh put a midside on
 * the surface), stiffness by the 4-point Gauss rule (degree 2: exact for straight sides), consistent mass and body
 * forces by a 64-point collapsed Gauss–Legendre rule (exact to degree 5 on straight sides; `tetRule` is tested).
 * Assembly: node-graph reverse Cuthill–McKee order, the lower triangle of K in scalar CSR. Constraints as fea.js does
 * them, projections P = I − QQᵀ per node (fixed: all, or the face normal for frictionless), solved as
 * K̃ = PKP + α(I − P) (α = mean diagonal) so any SPD preconditioner works: incomplete Cholesky IC(0) on K̃ (diagonal
 * shift raised on a breakdown), preconditioned conjugate gradients to a relative residual of 1e-9 (default).
 * Loads on the T6 boundary faces by a 6-point (degree 4) triangle rule: force = total ÷ the faces' area as a traction
 * (normal: into the part, per point), pressure p along the inward normal over the meshed face (its area is reported
 * beside the exact B-rep area),
 * gravity ρg over the volume. Stress: σ = D B u at the Gauss points, extrapolated linearly to the corners and midsides
 * of each element, then averaged at the nodes (the plotted field); unaveraged element values are kept for the maxima.
 * Zienkiewicz–Zhu error indicator: ‖σ* − σh‖ in the energy norm per element (σ* = the averaged field), and a global
 * percentage. Modal: consistent mass, LOBPCG (Knyazev 2001) with the IC(0) preconditioner on the projected space.
 * Limits: linear elastic, small displacement, isotropic; stresses at re-entrant corners and constrained edges are
 * singular (they grow with refinement); where tetmesh chamfered a sharp edge the local stress is approximate.
 */
import { applyEnv } from './env/env.js';
import { readMaterial, tonnesPerMm3, G_MM } from './materials.js';
import { t } from './i18n.js';
import { elasticD, vonMises, symEig, makeConstraints, solveSmall, typeWord } from './fea.js';
import { tetMesh, toT10, buildBVH, tetVolume } from './tetmesh.js';
import { buildAMG, fullFromLower } from './amg.js';
import { closestOnSurface, readSurface } from './surfaces.js';

// ---------------------------------------------------------------------------------------- rules and shapes

const GA = 0.5854101966249685, GB = 0.1381966011250105;
/** The 4-point rule (barycentric L1..L3 = x, y, z; weights × 1/6 = reference volume). */
export const GP4 = [[GB, GB, GB], [GA, GB, GB], [GB, GA, GB], [GB, GB, GA]].map((p) => [...p, 1 / 24]);
const GL4 = [[-0.8611363115940526, 0.3478548451374538], [-0.3399810435848563, 0.6521451548625461], [0.3399810435848563, 0.6521451548625461], [0.8611363115940526, 0.3478548451374538]];
/** Collapsed (Duffy / Stroud conical product) Gauss–Legendre rule on the unit tet: n³ points [x, y, z, w]. */
export function tetRule(gl = GL4) {
  const out = [];
  for (const [a, wa] of gl) for (const [b, wb] of gl) for (const [c, wc] of gl) {
    const u = (a + 1) / 2, v = (b + 1) / 2, w = (c + 1) / 2;
    // x = u, y = v(1 − u), z = w(1 − u)(1 − v); Jacobian (1 − u)²(1 − v)
    out.push([u, v * (1 - u), w * (1 - u) * (1 - v), wa * wb * wc / 8 * (1 - u) ** 2 * (1 - v)]);
  }
  return out;
}
const RULE64 = tetRule();
const EDGES = [[0, 1], [1, 2], [0, 2], [0, 3], [1, 3], [2, 3]];
const DL = [[-1, -1, -1], [1, 0, 0], [0, 1, 0], [0, 0, 1]];

/** T10 shape functions and their reference derivatives at (x, y, z) → { N: [10], dN: [[3] × 10] }. */
export function t10Shape(x, y, z) {
  const L = [1 - x - y - z, x, y, z], N = new Array(10), dN = new Array(10);
  for (let i = 0; i < 4; i++) { N[i] = L[i] * (2 * L[i] - 1); dN[i] = DL[i].map((d) => (4 * L[i] - 1) * d); }
  EDGES.forEach(([i, j], k) => { N[4 + k] = 4 * L[i] * L[j]; dN[4 + k] = [0, 1, 2].map((c) => 4 * (L[i] * DL[j][c] + L[j] * DL[i][c])); });
  return { N, dN };
}
export const SH4 = GP4.map(([x, y, z]) => t10Shape(x, y, z)), SH64 = RULE64.map(([x, y, z]) => t10Shape(x, y, z));
export { RULE64 };

/** Physical derivatives at a point of element el → { dNx: Float64Array(30) [node·3 + axis], det }. */
export function jac(X, el, dN, out) {
  let j00 = 0, j01 = 0, j02 = 0, j10 = 0, j11 = 0, j12 = 0, j20 = 0, j21 = 0, j22 = 0;
  for (let a = 0; a < 10; a++) { const n = 3 * el[a], d = dN[a], x = X[n], y = X[n + 1], z = X[n + 2]; j00 += x * d[0]; j01 += x * d[1]; j02 += x * d[2]; j10 += y * d[0]; j11 += y * d[1]; j12 += y * d[2]; j20 += z * d[0]; j21 += z * d[1]; j22 += z * d[2]; }
  const det = j00 * (j11 * j22 - j12 * j21) - j01 * (j10 * j22 - j12 * j20) + j02 * (j10 * j21 - j11 * j20);
  const id = 1 / det;
  // inverse transpose: dN/dx = J⁻ᵀ dN/dξ
  const i00 = (j11 * j22 - j12 * j21) * id, i01 = (j02 * j21 - j01 * j22) * id, i02 = (j01 * j12 - j02 * j11) * id;
  const i10 = (j12 * j20 - j10 * j22) * id, i11 = (j00 * j22 - j02 * j20) * id, i12 = (j02 * j10 - j00 * j12) * id;
  const i20 = (j10 * j21 - j11 * j20) * id, i21 = (j01 * j20 - j00 * j21) * id, i22 = (j00 * j11 - j01 * j10) * id;
  for (let a = 0; a < 10; a++) { const d = dN[a]; out[3 * a] = d[0] * i00 + d[1] * i10 + d[2] * i20; out[3 * a + 1] = d[0] * i01 + d[1] * i11 + d[2] * i21; out[3 * a + 2] = d[0] * i02 + d[1] * i12 + d[2] * i22; }
  return det;
}

/** Element stiffness (30×30, dofs node·3 + axis) for modulus E, D = elasticD(ν); fills Ke, returns the volume. */
export function t10Stiffness(X, el, E, D, Ke = new Float64Array(900)) {
  Ke.fill(0);
  const g = new Float64Array(30), DB = new Float64Array(6 * 30);
  let vol = 0;
  for (let p = 0; p < 4; p++) {
    const det = jac(X, el, SH4[p].dN, g);
    if (!(det > 0)) throw new Error(t('study.tet.inverted'));
    const w = GP4[p][3] * det * E; vol += GP4[p][3] * det;
    // DB = D·B, B rows (xx, yy, zz, xy, yz, zx) as fea.js
    for (let a = 0; a < 10; a++) {
      const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2];
      // columns 3a, 3a+1, 3a+2 of B: [dx,0,0,dy,0,dz], [0,dy,0,dx,dz,0], [0,0,dz,0,dy,dx]
      for (let r = 0; r < 6; r++) {
        const d = D.subarray ? D : D;
        DB[r * 30 + 3 * a] = d[r * 6] * dx + d[r * 6 + 3] * dy + d[r * 6 + 5] * dz;
        DB[r * 30 + 3 * a + 1] = d[r * 6 + 1] * dy + d[r * 6 + 3] * dx + d[r * 6 + 4] * dz;
        DB[r * 30 + 3 * a + 2] = d[r * 6 + 2] * dz + d[r * 6 + 4] * dy + d[r * 6 + 5] * dx;
      }
    }
    for (let a = 0; a < 10; a++) {
      const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2];
      for (let j = 0; j < 30; j++) {
        // Bᵀ rows for dofs 3a.. times DB column j
        const c0 = DB[j], c1 = DB[30 + j], c2 = DB[60 + j], c3 = DB[90 + j], c4 = DB[120 + j], c5 = DB[150 + j];
        Ke[(3 * a) * 30 + j] += w * (dx * c0 + dy * c3 + dz * c5);
        Ke[(3 * a + 1) * 30 + j] += w * (dy * c1 + dx * c3 + dz * c4);
        Ke[(3 * a + 2) * 30 + j] += w * (dz * c2 + dy * c4 + dx * c5);
      }
    }
  }
  return vol;
}

/** Consistent scalar mass (10×10, × I₃ per node pair) for density rho, and the shape-function integrals ∫N dV. */
export function t10Mass(X, el, rho, Me = new Float64Array(100), Ni = new Float64Array(10)) {
  Me.fill(0); Ni.fill(0);
  const g = new Float64Array(30);
  for (let p = 0; p < RULE64.length; p++) {
    const det = jac(X, el, SH64[p].dN, g), w = RULE64[p][3] * det, N = SH64[p].N;
    for (let a = 0; a < 10; a++) { Ni[a] += w * N[a]; const wa = rho * w * N[a]; for (let b = 0; b < 10; b++) Me[a * 10 + b] += wa * N[b]; }
  }
  return Me;
}

/** Strain-displacement at Gauss point p: stresses σ = E·D·B·ue (6), strains ε = B·ue. */
export function gpStress(X, el, p, ue, E, D, sig, eps, g = new Float64Array(30), th = null) {
  jac(X, el, SH4[p].dN, g);
  let exx = 0, eyy = 0, ezz = 0, gxy = 0, gyz = 0, gzx = 0;
  for (let a = 0; a < 10; a++) {
    const dx = g[3 * a], dy = g[3 * a + 1], dz = g[3 * a + 2], ux = ue[3 * a], uy = ue[3 * a + 1], uz = ue[3 * a + 2];
    exx += dx * ux; eyy += dy * uy; ezz += dz * uz; gxy += dy * ux + dx * uy; gyz += dz * uy + dy * uz; gzx += dz * ux + dx * uz;
  }
  eps[0] = exx; eps[1] = eyy; eps[2] = ezz; eps[3] = gxy; eps[4] = gyz; eps[5] = gzx;
  // th { alpha, dT (10, the element's nodal rises) }: σ = D(ε − αΔT·[1 1 1 0 0 0]); eps stays the total strain
  let et = 0; if (th) { const N = SH4[p].N; for (let a = 0; a < 10; a++) et += N[a] * th.dT[a]; et *= th.alpha; }
  for (let r = 0; r < 6; r++) { let s = 0; for (let k = 0; k < 6; k++) s += D[r * 6 + k] * (k < 3 ? eps[k] - et : eps[k]); sig[r] = E * s; }
}

// ---------------------------------------------------------------------------------------- the model

/** Reverse Cuthill–McKee order of a graph (CSR adj) → perm (new index of each old node). */
export function rcm(n, ptr, adj) {
  const deg = new Int32Array(n); for (let i = 0; i < n; i++) deg[i] = ptr[i + 1] - ptr[i];
  const order = [], seen = new Uint8Array(n);
  const byDeg = Array.from({ length: n }, (_, i) => i).sort((a, b) => deg[a] - deg[b]);
  for (const s0 of byDeg) {
    if (seen[s0]) continue;
    // a pseudo-peripheral start: the last node of a BFS from s0 (one pass)
    let s = s0; { const q = [s0], sn = new Set([s0]); for (let h = 0; h < q.length; h++) for (let k = ptr[q[h]]; k < ptr[q[h] + 1]; k++) { const w = adj[k]; if (!seen[w] && !sn.has(w)) { sn.add(w); q.push(w); } } s = q[q.length - 1]; }
    seen[s] = 1; const q = [s];
    for (let h = 0; h < q.length; h++) {
      const v = q[h], nb = [];
      for (let k = ptr[v]; k < ptr[v + 1]; k++) { const w = adj[k]; if (!seen[w]) { seen[w] = 1; nb.push(w); } }
      nb.sort((a, b) => deg[a] - deg[b]); for (const w of nb) q.push(w);
    }
    for (const v of q) order.push(v);
  }
  const perm = new Int32Array(n);
  for (let i = 0; i < n; i++) perm[order[n - 1 - i]] = i;
  return perm;
}

/** Node adjacency (sorted, including self) of a T10 mesh → { ptr, adj }. */
function adjacency(n, tets10, extra = null) {
  const sets = Array.from({ length: n }, () => []);
  const m = tets10.length / 10;
  for (let e = 0; e < m; e++) for (let a = 0; a < 10; a++) { const i = tets10[10 * e + a], l = sets[i]; for (let b = 0; b < 10; b++) l.push(tets10[10 * e + b]); }
  // extra node pairs (contact: a slave node and the nodes of its candidate master faces) join the pattern, both ways
  if (extra) for (let k = 0; k < extra.length; k += 2) { sets[extra[k]].push(extra[k + 1]); sets[extra[k + 1]].push(extra[k]); }
  const ptr = new Int32Array(n + 1), tmp = [];
  for (let i = 0; i < n; i++) { const u = Int32Array.from(new Set(sets[i])).sort(); sets[i] = u; ptr[i + 1] = ptr[i] + u.length; }
  const adj = new Int32Array(ptr[n]);
  for (let i = 0; i < n; i++) adj.set(sets[i], ptr[i]);
  void tmp;
  return { ptr, adj };
}

/**
 * The model of a T10 mesh: renumbered (RCM), scalar lower CSR pattern of K (3 dofs per node).
 * → { X, tets10, n (nodes), perm (old → new), ptr/col (CSR rows 0…3n), nodePtr/nodeAdj (lower node graph) }
 */
export function makeTetModel(t10, { extraPairs = null } = {}) {
  const n = t10.nodes.length / 3;
  let { ptr, adj } = adjacency(n, t10.tets10, extraPairs);
  const perm = rcm(n, ptr, adj);
  const X = new Float64Array(3 * n);
  for (let i = 0; i < n; i++) { X[3 * perm[i]] = t10.nodes[3 * i]; X[3 * perm[i] + 1] = t10.nodes[3 * i + 1]; X[3 * perm[i] + 2] = t10.nodes[3 * i + 2]; }
  const tets10 = Int32Array.from(t10.tets10, (v) => perm[v]);
  ({ ptr, adj } = adjacency(n, tets10, extraPairs && Int32Array.from(extraPairs, (v) => perm[v])));
  // lower node graph (neighbours ≤ self, sorted)
  const nodePtr = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) { let c = 0; for (let k = ptr[i]; k < ptr[i + 1]; k++) if (adj[k] <= i) c++; nodePtr[i + 1] = nodePtr[i] + c; }
  const nodeAdj = new Int32Array(nodePtr[n]);
  for (let i = 0, w = 0; i < n; i++) for (let k = ptr[i]; k < ptr[i + 1]; k++) if (adj[k] <= i) nodeAdj[w++] = adj[k];
  // scalar rows: row 3a+i holds, for each lower neighbour b < a, 3 columns; then i+1 columns of node a itself
  const N = 3 * n, rp = new Int32Array(N + 1);
  for (let a = 0; a < n; a++) { const nl = nodePtr[a + 1] - nodePtr[a] - 1; for (let i = 0; i < 3; i++) rp[3 * a + i + 1] = rp[3 * a + i] + 3 * nl + i + 1; }
  const col = new Int32Array(rp[N]);
  for (let a = 0; a < n; a++) for (let i = 0; i < 3; i++) {
    let w = rp[3 * a + i];
    for (let k = nodePtr[a]; k < nodePtr[a + 1] - 1; k++) { const b = nodeAdj[k]; col[w++] = 3 * b; col[w++] = 3 * b + 1; col[w++] = 3 * b + 2; }
    for (let j = 0; j <= i; j++) col[w++] = 3 * a + j;
  }
  const btri6 = t10.btri6 ? Int32Array.from(t10.btri6, (v) => perm[v]) : null;
  return { X, tets10, n, N, perm, rp, col, nodePtr, nodeAdj, btri6, bface: t10.bface, corners: t10.corners };
}

/** Position of entry (row r = 3a+i, column c = 3b+j, b ≤ a) in the CSR values. */
export function entry(model, a, i, b, j) {
  const { nodePtr, nodeAdj, rp } = model;
  if (b === a) return rp[3 * a + i] + 3 * (nodePtr[a + 1] - nodePtr[a] - 1) + j;
  let lo = nodePtr[a], hi = nodePtr[a + 1] - 2;
  while (lo <= hi) { const m = (lo + hi) >> 1, v = nodeAdj[m]; if (v < b) lo = m + 1; else if (v > b) hi = m - 1; else return rp[3 * a + i] + 3 * (m - nodePtr[a]) + j; }
  throw new Error('internal: entry not in the pattern');   // i18n-ignore: internal assertion
}

/** Assemble K (lower CSR values) → { K: Float64Array, vol }. Also the node mass (scalar lower graph) when rho given. */
export function assemble(model, E, nu, { rho = 0, mass = false, onProgress = null } = {}) {
  const D = elasticD(nu), K = new Float64Array(model.col.length), m = model.tets10.length / 10;
  const Ke = new Float64Array(900), el = new Int32Array(10);
  const Mv = mass ? new Float64Array(model.nodeAdj.length) : null, Me = new Float64Array(100), Ni = new Float64Array(10), nodeVolN = new Float64Array(model.n);
  let vol = 0;
  const pos = new Int32Array(100);   // node-pair → first scalar entry offsets (per element)
  let t0 = Date.now();
  for (let e = 0; e < m; e++) {
    for (let a = 0; a < 10; a++) el[a] = model.tets10[10 * e + a];
    vol += t10Stiffness(model.X, el, E, D, Ke);
    for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) {
      const A = el[a], B = el[b];
      if (B > A) continue;
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
        if (B === A && j > i) continue;
        K[entry(model, A, i, B, j)] += Ke[(3 * a + i) * 30 + 3 * b + j];
      }
    }
    if (mass || rho) {
      t10Mass(model.X, el, rho || 1, Me, Ni);
      for (let a = 0; a < 10; a++) nodeVolN[el[a]] += Ni[a];
      if (mass) for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) { const A = el[a], B = el[b]; if (B > A) continue; Mv[nodeEntry(model, A, B)] += Me[a * 10 + b]; }
    }
    if (onProgress && Date.now() - t0 > 200) { t0 = Date.now(); onProgress(e / m); }
  }
  void pos;
  return { K, vol, M: Mv, nodeVolN };
}
/** Add a 30×30 element matrix Ke (dofs node·3 + axis of the 10 nodes `el`) into the lower CSR values K. */
export function scatterKe(model, K, el, Ke) {
  for (let a = 0; a < 10; a++) for (let b = 0; b < 10; b++) {
    const A = el[a], B = el[b];
    if (B > A) continue;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      if (B === A && j > i) continue;
      K[entry(model, A, i, B, j)] += Ke[(3 * a + i) * 30 + 3 * b + j];
    }
  }
}
export function nodeEntry(model, a, b) {
  const { nodePtr, nodeAdj } = model;
  let lo = nodePtr[a], hi = nodePtr[a + 1] - 1;
  while (lo <= hi) { const m = (lo + hi) >> 1, v = nodeAdj[m]; if (v < b) lo = m + 1; else if (v > b) hi = m - 1; else return m; }
  throw new Error('internal: node entry');   // i18n-ignore: internal assertion
}

/** y = A x for a symmetric matrix stored as lower scalar CSR (values V). */
export function symMul(model, V, x, y) {
  const { rp, col, N } = model;
  y.fill(0);
  for (let r = 0; r < N; r++) {
    let s = 0; const xr = x[r];
    for (let k = rp[r], e = rp[r + 1] - 1; k < e; k++) { const c = col[k], v = V[k]; s += v * x[c]; y[c] += v * xr; }
    y[r] += s + V[rp[r + 1] - 1] * xr;   // the diagonal is the row's last entry
  }
  return y;
}
/** y = M x for the node mass (scalar per node pair, × I₃). */
export function massMul(model, Mv, x, y) {
  const { nodePtr, nodeAdj, n } = model;
  y.fill(0);
  for (let a = 0; a < n; a++) {
    const xa0 = x[3 * a], xa1 = x[3 * a + 1], xa2 = x[3 * a + 2];
    for (let k = nodePtr[a], e = nodePtr[a + 1] - 1; k < e; k++) { const b = nodeAdj[k], v = Mv[k]; y[3 * a] += v * x[3 * b]; y[3 * a + 1] += v * x[3 * b + 1]; y[3 * a + 2] += v * x[3 * b + 2]; y[3 * b] += v * xa0; y[3 * b + 1] += v * xa1; y[3 * b + 2] += v * xa2; }
    const d = Mv[nodePtr[a + 1] - 1]; y[3 * a] += d * xa0; y[3 * a + 1] += d * xa1; y[3 * a + 2] += d * xa2;
  }
  return y;
}

// ---------------------------------------------------------------------------------------- constraints and the solver

/** Per-node projectors from fea.js makeConstraints → { P: Float64Array(9n) | null per node via has, has: Uint8Array } */
function projectors(model, cons) {
  const has = new Uint8Array(model.n), P = new Float64Array(9 * model.n);
  cons.nodes.forEach((nd, m) => { has[nd] = 1; P.set(cons.P.subarray(9 * m, 9 * m + 9), 9 * nd); });
  const proj = (v) => {
    for (let a = 0; a < model.n; a++) {
      if (!has[a]) continue;
      const d = 3 * a, p = 9 * a, x = v[d], y = v[d + 1], z = v[d + 2];
      v[d] = P[p] * x + P[p + 1] * y + P[p + 2] * z; v[d + 1] = P[p + 3] * x + P[p + 4] * y + P[p + 5] * z; v[d + 2] = P[p + 6] * x + P[p + 7] * y + P[p + 8] * z;
    }
    return v;
  };
  return { has, P, proj };
}

/** K̃ = PKP + α(I − P) as lower CSR values (a copy). */
function projectedK(model, K, pj, alpha) {
  const Kt = Float64Array.from(K), { has, P } = pj, { n, nodePtr, nodeAdj } = model;
  const blk = new Float64Array(9), t = new Float64Array(9), I3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  const Pm = (a) => (has[a] ? P.subarray(9 * a, 9 * a + 9) : I3);
  for (let a = 0; a < n; a++) for (let k = nodePtr[a]; k < nodePtr[a + 1]; k++) {
    const b = nodeAdj[k];
    if (!has[a] && !has[b]) continue;
    const diag = a === b;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) blk[3 * i + j] = diag && j > i ? Kt[entry(model, a, j, a, i)] : Kt[entry(model, a, i, b, j)];
    const Pa = Pm(a), Pb = Pm(b);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { let s = 0; for (let k2 = 0; k2 < 3; k2++) s += blk[3 * i + k2] * Pb[3 * k2 + j]; t[3 * i + j] = s; }
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { let s = 0; for (let k2 = 0; k2 < 3; k2++) s += Pa[3 * i + k2] * t[3 * k2 + j]; blk[3 * i + j] = s; }
    if (diag) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) blk[3 * i + j] += alpha * ((i === j ? 1 : 0) - Pa[3 * i + j]);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { if (diag && j > i) continue; Kt[entry(model, a, i, b, j)] = blk[3 * i + j]; }
  }
  return Kt;
}

/** IC(0) of a lower-CSR SPD matrix (in place on a copy) with a diagonal shift raised on breakdown → { L, shift }. */
export function ic0(model, A) {
  const { rp, col, N } = model, diagIdx = new Int32Array(N);
  for (let r = 0; r < N; r++) diagIdx[r] = rp[r + 1] - 1;
  const w = new Float64Array(N);
  for (let shift = 0, attempt = 0; attempt < 12; attempt++, shift = shift ? shift * 4 : 1e-3) {
    const L = Float64Array.from(A);
    if (shift) for (let r = 0; r < N; r++) L[diagIdx[r]] *= 1 + shift;
    let ok = true;
    for (let i = 0; i < N && ok; i++) {
      const s0 = rp[i], s1 = rp[i + 1] - 1;
      for (let k = s0; k < s1; k++) w[col[k]] = L[k];
      for (let k = s0; k < s1; k++) {
        const c = col[k];
        // L_ic = (A_ic − Σ_{j<c} L_ij L_cj) / L_cc, row c of L holds L_cj
        let s = w[c];
        for (let q = rp[c], qe = rp[c + 1] - 1; q < qe; q++) s -= w[col[q]] * L[q];
        s /= L[diagIdx[c]];
        w[c] = s; L[k] = s;
      }
      let d = L[s1];
      for (let k = s0; k < s1; k++) d -= L[k] * L[k];
      for (let k = s0; k < s1; k++) w[col[k]] = 0;
      if (!(d > 1e-14 * Math.abs(A[s1]))) { ok = false; break; }
      L[s1] = Math.sqrt(d);
    }
    if (ok) return { L, shift };
  }
  throw new Error(t('study.tet.precond_failed'));
}
/** z = (L Lᵀ)⁻¹ r */
function icSolve(model, L, r, z) {
  const { rp, col, N } = model;
  for (let i = 0; i < N; i++) { let s = r[i]; for (let k = rp[i], e = rp[i + 1] - 1; k < e; k++) s -= L[k] * z[col[k]]; z[i] = s / L[rp[i + 1] - 1]; }
  for (let i = N - 1; i >= 0; i--) { const zi = (z[i] /= L[rp[i + 1] - 1]); for (let k = rp[i], e = rp[i + 1] - 1; k < e; k++) z[col[k]] -= L[k] * zi; }
  return z;
}

/**
 * The operator and preconditioner of a constrained model → { apply(x, y) (K̃ x), prec(r, z), pj, alpha, kind, info }.
 * prec 'amg' (default: smoothed aggregation, amg.js, rigid motions as the near-null space) or 'ic0'.
 */
export function system(model, K, cons, { prec = model.N > 5000 ? 'amg' : 'ic0' } = {}) {
  const pj = projectors(model, cons);
  let dsum = 0; for (let r = 0; r < model.N; r++) dsum += K[model.rp[r + 1] - 1];
  const alpha = dsum / model.N;
  const Kt = projectedK(model, K, pj, alpha);
  // one thread (0.4 P4 removed the threaded K̃x and V-cycle: pool.js, "tets: one thread")
  const tmp = new Float64Array(model.N);
  const base = { pj, alpha, Kt, apply: (x, y) => symMul(model, Kt, x, y) };
  if (prec === 'ic0') {
    const { L, shift } = ic0(model, Kt);
    return { ...base, kind: 'ic0', info: { shift }, prec: (r, z) => { tmp.set(r); pj.proj(tmp); icSolve(model, L, tmp, z); return pj.proj(z); } };
  }
  const A = fullFromLower(model.N, model.rp, model.col, Kt), X = model.X;
  const groups = Int32Array.from({ length: model.n + 1 }, (_, i) => 3 * i);
  let c = [0, 0, 0]; for (let i = 0; i < model.n; i++) for (let a = 0; a < 3; a++) c[a] += X[3 * i + a] / model.n;
  const B = [0, 1, 2, 3, 4, 5].map((k) => {
    const v = new Float64Array(model.N);
    for (let i = 0; i < model.n; i++) {
      const x = X[3 * i] - c[0], y = X[3 * i + 1] - c[1], z = X[3 * i + 2] - c[2];
      if (k < 3) v[3 * i + k] = 1;
      else if (k === 3) { v[3 * i + 1] = -z; v[3 * i + 2] = y; } else if (k === 4) { v[3 * i] = z; v[3 * i + 2] = -x; } else { v[3 * i] = -y; v[3 * i + 1] = x; }
    }
    return pj.proj(v);
  });
  const amg = buildAMG(A, groups, B);
  return { ...base, kind: 'amg', info: { levels: amg.levels, ms: amg.ms }, prec: (r, z) => { tmp.set(r); pj.proj(tmp); amg.apply(tmp, z); return pj.proj(z); } };
}

/** Preconditioned CG on K̃ u = P f → { u, iterations, residual, converged }. */
export function tetPCG(model, sys, f, { tol = 1e-9, maxIter = 0, x0 = null, onProgress = null, cancelled = null, label = 'Solving' } = {}) {
  const N = model.N, u = x0 ? Float64Array.from(x0) : new Float64Array(N);
  const b = sys.pj.proj(Float64Array.from(f));
  sys.pj.proj(u);
  let bn = 0; for (let i = 0; i < N; i++) bn += b[i] * b[i]; bn = Math.sqrt(bn);
  if (bn === 0) return { u: new Float64Array(N), iterations: 0, residual: 0, converged: true };
  const r = new Float64Array(N), z = new Float64Array(N), p = new Float64Array(N), q = new Float64Array(N);
  sys.apply(u, q); for (let i = 0; i < N; i++) r[i] = b[i] - q[i];
  sys.pj.proj(r);
  sys.prec(r, z); p.set(z);
  let rz = 0; for (let i = 0; i < N; i++) rz += r[i] * z[i];
  const cap = maxIter || Math.max(1000, 4 * Math.sqrt(N) * 10);
  let it = 0, res = 1, t0 = Date.now();
  for (; it < cap; it++) {
    let rn = 0; for (let i = 0; i < N; i++) rn += r[i] * r[i];
    res = Math.sqrt(rn) / bn;
    if (res < tol) break;
    if (onProgress && Date.now() - t0 > 200) { t0 = Date.now(); onProgress(Math.min(0.99, Math.log(res) / Math.log(tol)), `${label}: iteration ${it}, residual ${res.toExponential(1)}`); }   // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
    if (cancelled && (it & 15) === 0 && cancelled()) throw new Error('Cancelled');
    sys.apply(p, q); sys.pj.proj(q);
    let pq = 0; for (let i = 0; i < N; i++) pq += p[i] * q[i];
    if (!(pq > 0)) break;
    const a = rz / pq;
    for (let i = 0; i < N; i++) { u[i] += a * p[i]; r[i] -= a * q[i]; }
    sys.prec(r, z);
    let rz2 = 0; for (let i = 0; i < N; i++) rz2 += r[i] * z[i];
    const beta = rz2 / rz; rz = rz2;
    for (let i = 0; i < N; i++) p[i] = z[i] + beta * p[i];
  }
  return { u, iterations: it, residual: res, converged: res < tol };
}

// ---------------------------------------------------------------------------------------- boundary conditions

// 6-point degree-4 triangle rule (Dunavant): [L0, L1, L2, w] (w sums to 1)
export const TRI6 = (() => { const a = 0.445948490915965, b = 0.091576213509771, wa = 0.223381589678011, wb = 0.109951743655322; return [[a, a, 1 - 2 * a, wa], [a, 1 - 2 * a, a, wa], [1 - 2 * a, a, a, wa], [b, b, 1 - 2 * b, wb], [b, 1 - 2 * b, b, wb], [1 - 2 * b, b, b, wb]]; })();
/** T6 at barycentric L: N (corners 0..2, midsides (01)(12)(20)), dN/dL1, dN/dL2 with L0 = 1 − L1 − L2. */
export function t6(L1, L2) {
  const L0 = 1 - L1 - L2;
  const N = [L0 * (2 * L0 - 1), L1 * (2 * L1 - 1), L2 * (2 * L2 - 1), 4 * L0 * L1, 4 * L1 * L2, 4 * L2 * L0];
  const d1 = [-(4 * L0 - 1), 4 * L1 - 1, 0, 4 * (L0 - L1), 4 * L2, -4 * L2];
  const d2 = [-(4 * L0 - 1), 0, 4 * L2 - 1, -4 * L1, 4 * L1, 4 * (L0 - L2)];
  return { N, d1, d2 };
}
/** Integrate over boundary T6 triangle t: fn(N, normal (outward, |n| = area density), point) per rule point. */
function faceIntegrate(model, t, fn) {
  const X = model.X, v = model.btri6.subarray(6 * t, 6 * t + 6);
  for (const [, L1, L2, w] of TRI6) {
    const { N, d1, d2 } = t6(L1, L2), a = [0, 0, 0], b = [0, 0, 0], p = [0, 0, 0];
    for (let k = 0; k < 6; k++) for (let c = 0; c < 3; c++) { const x = X[3 * v[k] + c]; a[c] += d1[k] * x; b[c] += d2[k] * x; p[c] += N[k] * x; }
    // reference triangle area 1/2
    const n = [(a[1] * b[2] - a[2] * b[1]) * w / 2, (a[2] * b[0] - a[0] * b[2]) * w / 2, (a[0] * b[1] - a[1] * b[0]) * w / 2];
    fn(N, n, p, v);
  }
}

/**
 * Supports and loads on faces → { f, cons, loadTotal, groups, faceArea } (fea.js shapes). bcs as fea.js
 * boundaryConditions: { constraints: [{type, faces | nodes, axes?}], loads: [{type force|pressure|gravity, …}] }.
 */
export function tetBoundaryConditions(model, bcs, { density = 0, exactArea = null, nodeVolN = null, faces = null } = {}) {
  const N = model.N, f = new Float64Array(N), nb = model.btri6 ? model.btri6.length / 6 : 0;
  const nodeDirs = new Map(), groups = { constraints: [], loads: [] };
  const trisOf = (faces) => { const want = new Set(faces), out = []; for (let t = 0; t < nb; t++) if (want.has(model.bface[t])) out.push(t); return out; };
  const meshArea = (tris) => { let A = 0; for (const t of tris) faceIntegrate(model, t, (N_, n) => { A += Math.hypot(...n); }); return A; };
  // distance of a point to face fi's exact surface (plane / cylinder), or null when the face has no closed form
  const exactDist = (p, fi) => {
    const r = faces && faces[fi];
    if (r && r.type === 'plane' && r.n && r.o) return Math.abs((p[0] - r.o[0]) * r.n[0] + (p[1] - r.o[1]) * r.n[1] + (p[2] - r.o[2]) * r.n[2]);
    if (r && r.type === 'cylinder' && r.axis && r.r > 0) { const o = r.axis.o, a = r.axis.d, q = [p[0] - o[0], p[1] - o[1], p[2] - o[2]], t = q[0] * a[0] + q[1] * a[1] + q[2] * a[2]; return Math.abs(Math.hypot(q[0] - t * a[0], q[1] - t * a[1], q[2] - t * a[2]) - r.r); }
    if (r && r.surf) return closestOnSurface(r.surf, p).d;
    return null;
  };
  for (const c of bcs.constraints || []) {
    let nodes;
    const normals = new Map();   // node → Map(face → summed normal)
    if (c.nodes) nodes = [...c.nodes];
    else {
      const tris = trisOf(c.faces);
      for (const t of tris) {
        const v = model.btri6.subarray(6 * t, 6 * t + 6), fi = model.bface[t];
        let hl = 0; for (let k = 0; k < 3; k++) { const a = v[k], b = v[(k + 1) % 3]; hl += Math.hypot(model.X[3 * a] - model.X[3 * b], model.X[3 * a + 1] - model.X[3 * b + 1], model.X[3 * a + 2] - model.X[3 * b + 2]) / 3; }
        // the normal at each of the 6 nodes (corners at L = vertices, midsides at edge middles); a node of a triangle
        // that straddles a sharp edge (the mesher's chamfer) is held only if it lies on the face itself
        [[0, 0], [1, 0], [0, 1], [0.5, 0], [0.5, 0.5], [0, 0.5]].forEach(([L1, L2], k) => {
          const p = [model.X[3 * v[k]], model.X[3 * v[k] + 1], model.X[3 * v[k] + 2]], dist = exactDist(p, fi);
          if (dist !== null && dist > 2e-3 * hl) return;
          const { d1, d2 } = t6(L1, L2), a = [0, 0, 0], b = [0, 0, 0];
          for (let q = 0; q < 6; q++) for (let cc = 0; cc < 3; cc++) { const x = model.X[3 * v[q] + cc]; a[cc] += d1[q] * x; b[cc] += d2[q] * x; }
          let n = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
          const r = faces && faces[fi], nl = Math.hypot(...n) || 1;
          // exact normals where the face has one (sign from the element's outward side)
          if (r && r.type === 'plane' && r.n) { const s = Math.sign(n[0] * r.n[0] + n[1] * r.n[1] + n[2] * r.n[2]) || 1; n = r.n.map((x) => s * x * nl); }
          else if (r && r.type === 'cylinder' && r.axis) { const o = r.axis.o, ad = r.axis.d, q = [p[0] - o[0], p[1] - o[1], p[2] - o[2]], t = q[0] * ad[0] + q[1] * ad[1] + q[2] * ad[2], rad = [q[0] - t * ad[0], q[1] - t * ad[1], q[2] - t * ad[2]], rl = Math.hypot(...rad) || 1, s = Math.sign(n[0] * rad[0] + n[1] * rad[1] + n[2] * rad[2]) || 1; n = rad.map((x) => s * x / rl * nl); }
          else if (r && r.surf) { const sn = closestOnSurface(r.surf, p).n, s = Math.sign(n[0] * sn[0] + n[1] * sn[1] + n[2] * sn[2]) || 1; n = sn.map((x) => s * x * nl); }
          let m = normals.get(v[k]); if (!m) normals.set(v[k], (m = new Map()));
          const sm = m.get(fi) || [0, 0, 0]; m.set(fi, [sm[0] + n[0], sm[1] + n[1], sm[2] + n[2]]);
        });
      }
      nodes = [...normals.keys()];
    }
    if (!nodes.length) throw new Error(t('study.tet.constraint_no_nodes', { type: typeWord(c.type) }));
    for (const nd of nodes) {
      const list = nodeDirs.get(nd) || [];
      if (c.type === 'fixed') list.push(...(c.axes || [0, 1, 2]).map((a) => [0, 1, 2].map((b) => (a === b ? 1 : 0))));
      else { const m = normals.get(nd); if (m) for (const n of m.values()) { const l = Math.hypot(...n) || 1; list.push(n.map((x) => x / l)); } }
      nodeDirs.set(nd, list);
    }
    groups.constraints.push({ type: c.type, nodes: Int32Array.from(nodes) });
  }
  const total = [0, 0, 0];
  for (const l of bcs.loads || []) {
    if (l.type === 'gravity') {
      const d = l.dir || [0, -1, 0], dl = Math.hypot(...d) || 1, g = l.g ?? G_MM;
      for (let a = 0; a < model.n; a++) for (let c = 0; c < 3; c++) { const v = density * g * nodeVolN[a] * d[c] / dl; f[3 * a + c] += v; total[c] += v; }
      groups.loads.push({ type: 'gravity', nodes: new Int32Array(0) });
      continue;
    }
    const tris = l.nodes ? [] : trisOf(l.faces);
    if (!tris.length) throw new Error(t('study.tet.load_no_faces', { type: typeWord(l.type) }));
    const A = meshArea(tris), nodes = new Set();
    let traction;   // (N, n, p) → vector per unit area at the point
    if (l.type === 'force') {
      const vec = Array.isArray(l.dir) ? l.dir.map((v) => v / (Math.hypot(...l.dir) || 1)) : null;
      traction = (n) => { const ln = Math.hypot(...n) || 1; return vec ? vec.map((v) => v * l.total / A) : n.map((v) => -v / ln * l.total / A); };
    } else {
      traction = (n) => { const ln = Math.hypot(...n) || 1; return n.map((v) => -v / ln * l.p); };
    }
    for (const t of tris) faceIntegrate(model, t, (Nn, n, p, v) => {
      const tr = traction(n), da = Math.hypot(...n);
      for (let k = 0; k < 6; k++) { nodes.add(v[k]); for (let c = 0; c < 3; c++) { const val = Nn[k] * tr[c] * da; f[3 * v[k] + c] += val; total[c] += val; } }
    });
    groups.loads.push({ type: l.type, nodes: Int32Array.from(nodes), area: A, exactArea: exactArea && l.faces ? l.faces.reduce((s, fi) => s + (exactArea[fi] || 0), 0) : null });
  }
  return { f, cons: makeConstraints(nodeDirs), loadTotal: total, groups };
}

/** Is the body held? (fea.js rigidCheck on node coordinates) → null or the free motions in words. */
export function tetRigidCheck(model, cons) {
  const X = model.X, lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < model.n; i++) for (let a = 0; a < 3; a++) { lo[a] = Math.min(lo[a], X[3 * i + a]); hi[a] = Math.max(hi[a], X[3 * i + a]); }
  const c = lo.map((v, a) => (v + hi[a]) / 2), L = Math.max(...hi.map((v, a) => v - lo[a])) || 1, G = new Float64Array(36);
  for (let m = 0; m < cons.nodes.length; m++) {
    const nd = cons.nodes[m], p = [0, 1, 2].map((a) => (X[3 * nd + a] - c[a]) / L);
    const R = [[1, 0, 0, 0, p[2], -p[1]], [0, 1, 0, -p[2], 0, p[0]], [0, 0, 1, p[1], -p[0], 0]];
    for (const q of cons.dirs[m]) { const r = [0, 1, 2, 3, 4, 5].map((k) => q[0] * R[0][k] + q[1] * R[1][k] + q[2] * R[2][k]); for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) G[i * 6 + j] += r[i] * r[j]; }
  }
  const { values, vectors } = symEig(G, 6), big = Math.max(...values, 1e-30), names = [t('study.fea.free.move_x'), t('study.fea.free.move_y'), t('study.fea.free.move_z'), t('study.fea.free.turn_x'), t('study.fea.free.turn_y'), t('study.fea.free.turn_z')], free = [];
  values.forEach((v, k) => { if (v > 1e-9 * big && v > 1e-12) return; let best = 0; for (let i = 1; i < 6; i++) if (Math.abs(vectors[i * 6 + k]) > Math.abs(vectors[best * 6 + k])) best = i; free.push(names[best]); });
  return free.length ? free : null;
}

// ---------------------------------------------------------------------------------------- results

/** Principal stresses (descending) of a symmetric stress [xx, yy, zz, xy, yz, zx]. */
export function principal(s) {
  const [a, b, c, d, e, f] = s, m = (a + b + c) / 3, A = a - m, B = b - m, C = c - m;
  const q2 = (A * A + B * B + C * C + 2 * (d * d + e * e + f * f)) / 6, q = Math.sqrt(q2);
  if (q < 1e-14 * (Math.abs(m) + 1e-300)) return [m, m, m];
  const det = (A * (B * C - e * e) - d * (d * C - e * f) + f * (d * e - B * f)) / (q2 * q) / 2, phi = Math.acos(Math.max(-1, Math.min(1, det))) / 3;
  const s1 = m + 2 * q * Math.cos(phi), s3 = m + 2 * q * Math.cos(phi + 2 * Math.PI / 3);
  return [s1, 3 * m - s1 - s3, s3];
}
/** Von Mises equivalent strain √(2/3 e:e) of engineering strains [xx, yy, zz, γxy, γyz, γzx]. */
export const eqStrain = (e) => { const m = (e[0] + e[1] + e[2]) / 3, a = e[0] - m, b = e[1] - m, c = e[2] - m; return Math.sqrt(2 / 3 * (a * a + b * b + c * c + (e[3] * e[3] + e[4] * e[4] + e[5] * e[5]) / 2)); };

/**
 * Stresses etc. from a solved u → per node: sig (6n), eps (6n), vm, s1, s3, strain, disp; element: vmMax per element
 * (unaveraged, Gauss points and extrapolated nodes), ZZ error per element and global %; maxima; reactions.
 */
export function tetPostprocess(model, K, u, f, cons, { E, nu, yieldStress = Infinity, groups = null, thermal = null } = {}) {
  const D = elasticD(nu), n = model.n, m = model.tets10.length / 10, X = model.X;
  const sigN = new Float64Array(6 * n), epsN = new Float64Array(6 * n), cnt = new Float64Array(n);
  const el = new Int32Array(10), ue = new Float64Array(30), g = new Float64Array(30), sg = [0, 1, 2, 3].map(() => new Float64Array(6)), eg = [0, 1, 2, 3].map(() => new Float64Array(6));
  const vmElem = new Float32Array(m), elemSig = new Float64Array(m * 4 * 6);
  const ex = (vals, i) => { // linear field from 4 Gauss values → value at corner i (c_i)
    let S = 0; for (let k = 0; k < 4; k++) S += vals[k]; return (vals[i] - GB * S) / (GA - GB);
  };
  const cs = new Float64Array(4 * 6), ce = new Float64Array(4 * 6), tmp = new Float64Array(4);
  const teT = new Float64Array(10), thT = thermal ? { alpha: thermal.alpha, dT: teT } : null;
  let elMax = 0, elMaxAt = -1;
  for (let e = 0; e < m; e++) {
    for (let a = 0; a < 10; a++) { el[a] = model.tets10[10 * e + a]; for (let c = 0; c < 3; c++) ue[3 * a + c] = u[3 * el[a] + c]; if (thermal) teT[a] = thermal.dT[el[a]]; }
    for (let p = 0; p < 4; p++) { gpStress(X, el, p, ue, E, D, sg[p], eg[p], g, thermal ? thT : null); elemSig.set(sg[p], (4 * e + p) * 6); }
    // corner values c_i of the linear fit (GP p sits nearest corner p−1 for p ≥ 1; GP 0 nearest corner 0) — order
    // GP4 = [(b,b,b) ↔ L0 = a], [(a,b,b) ↔ L1], [(b,a,b) ↔ L2], [(b,b,a) ↔ L3]: GP i ↔ corner i
    for (let r = 0; r < 6; r++) {
      for (let p = 0; p < 4; p++) tmp[p] = sg[p][r]; for (let i = 0; i < 4; i++) cs[6 * i + r] = ex(tmp, i);
      for (let p = 0; p < 4; p++) tmp[p] = eg[p][r]; for (let i = 0; i < 4; i++) ce[6 * i + r] = ex(tmp, i);
    }
    let emax = 0;
    for (let a = 0; a < 10; a++) {
      const [i, j] = a < 4 ? [a, a] : EDGES[a - 4], nd = el[a];
      for (let r = 0; r < 6; r++) { sigN[6 * nd + r] += (cs[6 * i + r] + cs[6 * j + r]) / 2; epsN[6 * nd + r] += (ce[6 * i + r] + ce[6 * j + r]) / 2; }
      cnt[nd]++;
      if (a < 4) emax = Math.max(emax, vonMises(cs.subarray(6 * a, 6 * a + 6)));
    }
    for (let p = 0; p < 4; p++) emax = Math.max(emax, vonMises(sg[p]));
    vmElem[e] = emax; if (emax > elMax) { elMax = emax; elMaxAt = e; }
  }
  const vm = new Float32Array(n), s1 = new Float32Array(n), s3 = new Float32Array(n), strain = new Float32Array(n), disp = new Float32Array(n);
  let vMax = 0, vAt = -1, dMax = 0, dAt = -1, s1Max = -Infinity, s3Min = Infinity;
  for (let a = 0; a < n; a++) {
    for (let r = 0; r < 6; r++) { sigN[6 * a + r] /= cnt[a] || 1; epsN[6 * a + r] /= cnt[a] || 1; }
    const s = sigN.subarray(6 * a, 6 * a + 6), pr = principal(s);
    vm[a] = vonMises(s); s1[a] = pr[0]; s3[a] = pr[2]; strain[a] = eqStrain(epsN.subarray(6 * a, 6 * a + 6));
    disp[a] = Math.hypot(u[3 * a], u[3 * a + 1], u[3 * a + 2]);
    if (vm[a] > vMax) { vMax = vm[a]; vAt = a; }
    if (disp[a] > dMax) { dMax = disp[a]; dAt = a; }
    if (pr[0] > s1Max) s1Max = pr[0]; if (pr[2] < s3Min) s3Min = pr[2];
  }
  // ZZ error: ∫ (σ* − σh)ᵀ D⁻¹ (σ* − σh) / E per element, σ* from the nodal field by the shape functions
  const err = new Float32Array(m);
  let errSum = 0, energy = 0;
  const Cinv = (s) => { const [a, b, c, d, e2, f2] = s; return ((a * a + b * b + c * c) - 2 * nu * (a * b + b * c + c * a) + 2 * (1 + nu) * (d * d + e2 * e2 + f2 * f2)) / E; };
  for (let e = 0; e < m; e++) {
    let s = 0, w0 = 0;
    for (let a = 0; a < 10; a++) el[a] = model.tets10[10 * e + a];
    for (let p = 0; p < 4; p++) {
      const det = jac(X, el, SH4[p].dN, g), w = GP4[p][3] * det, N = SH4[p].N, sh = elemSig.subarray((4 * e + p) * 6, (4 * e + p) * 6 + 6), d = [0, 0, 0, 0, 0, 0];
      for (let a = 0; a < 10; a++) for (let r = 0; r < 6; r++) d[r] += N[a] * sigN[6 * el[a] + r];
      for (let r = 0; r < 6; r++) d[r] -= sh[r];
      s += w * Cinv(d); w0 += w * Cinv(sh);
    }
    err[e] = Math.sqrt(Math.max(0, s)); errSum += s; energy += w0;
  }
  // reactions: (K u − f) in the constrained directions
  const ku = symMul(model, K, u, new Float64Array(model.N));
  const reaction = [0, 0, 0], nodeR = new Map();
  for (let q = 0; q < cons.nodes.length; q++) {
    const d = 3 * cons.nodes[q], r = [ku[d] - f[d], ku[d + 1] - f[d + 1], ku[d + 2] - f[d + 2]], rr = [0, 0, 0];
    for (const dir of cons.dirs[q]) { const t = r[0] * dir[0] + r[1] * dir[1] + r[2] * dir[2]; for (let a = 0; a < 3; a++) rr[a] += t * dir[a]; }
    for (let a = 0; a < 3; a++) reaction[a] += rr[a];
    nodeR.set(cons.nodes[q], rr);
  }
  const groupReactions = groups ? groups.map((gr) => { const s = [0, 0, 0]; for (const nd of gr.nodes) { const rr = nodeR.get(nd); if (rr) for (let a = 0; a < 3; a++) s[a] += rr[a]; } return s; }) : null;
  let compliance = 0; for (let i = 0; i < f.length; i++) compliance += f[i] * u[i];
  const at = (a) => (a >= 0 ? [X[3 * a], X[3 * a + 1], X[3 * a + 2]] : null);
  const elCentre = (e) => { if (e < 0) return null; const c = [0, 0, 0]; for (let k = 0; k < 4; k++) for (let a = 0; a < 3; a++) c[a] += X[3 * model.tets10[10 * e + k] + a] / 4; return c; };
  return {
    sigN, epsN, vm, s1, s3, strain, disp, vmElem, err, reaction, groupReactions, compliance,
    errorPct: 100 * Math.sqrt(errSum / Math.max(1e-300, energy + errSum)), errSq: errSum, energy,   // energy = ∫σh:C⁻¹:σh (twice the strain energy)
    maxVm: { value: vMax, node: vAt, at: at(vAt) },
    maxVmElem: { value: elMax, at: elCentre(elMaxAt) },
    maxDisp: { value: dMax, node: dAt, at: at(dAt), vec: dAt >= 0 ? [u[3 * dAt], u[3 * dAt + 1], u[3 * dAt + 2]] : null },
    maxS1: s1Max, minS3: s3Min,
    minSafety: vMax > 0 ? yieldStress / vMax : Infinity,
  };
}

// ---------------------------------------------------------------------------------------- modal (LOBPCG)

/**
 * The lowest `modes` eigenpairs of K̃ x = λ M x on the admissible space (LOBPCG, block size modes + 2, IC(0)
 * preconditioner) → { freqs (Hz), shapes, iterations, residuals, converged }.
 */
export function tetModal(model, sys, Mv, { modes = 4, tol = 1e-4, maxIter = 3000, onProgress = null, cancelled = null } = {}) {
  const N = model.N, q = modes + Math.max(3, Math.ceil(modes / 2)), proj = sys.pj.proj;
  const Kx = (x) => proj(sys.apply(x, new Float64Array(N))), Mx = (x) => massMul(model, Mv, x, new Float64Array(N));
  let rnd = 12345; const rand = () => ((rnd = (rnd * 1103515245 + 12345) % 2147483648) / 2147483648) - 0.5;
  let X = Array.from({ length: q }, (_, k) => { const v = new Float64Array(N); for (let i = 0; i < N; i++) v[i] = k === 0 ? (i % 3 === 1 ? 1 : 0.1) : rand(); return proj(v); });
  // the preconditioned start: a few smoothing steps push the random vectors towards the low modes
  X = X.map((x) => { const z = new Float64Array(N); sys.prec(Mx(x), z); return z; });
  const dot = (a, b) => { let s = 0; for (let i = 0; i < N; i++) s += a[i] * b[i]; return s; };
  const comb = (vs, C, cols, ld) => cols.map((j) => { const out = new Float64Array(N); vs.forEach((v, i) => { const c = C[i * ld + j]; if (c) for (let k = 0; k < N; k++) out[k] += c * v[k]; }); return out; });
  // Rayleigh–Ritz on basis S (with K S, M S) → { vals, C (ld = S.length), cols kept }
  const rr = (S, KS, MS) => {
    const s = S.length, GA2 = new Float64Array(s * s), GB2 = new Float64Array(s * s);
    for (let i = 0; i < s; i++) for (let j = i; j < s; j++) { GA2[i * s + j] = GA2[j * s + i] = dot(S[i], KS[j]); GB2[i * s + j] = GB2[j * s + i] = dot(S[i], MS[j]); }
    // GB = V Λ Vᵀ; drop near-dependent directions; T = V Λ^-½
    const { values: bv, vectors: bV } = symEig(GB2, s), bmax = Math.max(...bv);
    const keep = bv.map((v, i) => i).filter((i) => bv[i] > 1e-10 * bmax);
    const k = keep.length, T = new Float64Array(s * k);
    keep.forEach((c, j) => { const sc = 1 / Math.sqrt(bv[c]); for (let i = 0; i < s; i++) T[i * k + j] = bV[i * s + c] * sc; });
    const Cm = new Float64Array(k * k);
    for (let a = 0; a < k; a++) for (let b = a; b < k; b++) { let t = 0; for (let i = 0; i < s; i++) { let u2 = 0; for (let j = 0; j < s; j++) u2 += GA2[i * s + j] * T[j * k + b]; t += T[i * k + a] * u2; } Cm[a * k + b] = Cm[b * k + a] = t; }
    const { values, vectors } = symEig(Cm, k), order = values.map((v, i) => i).sort((a, b) => values[a] - values[b]);
    const C = new Float64Array(s * k);
    order.forEach((c, j) => { for (let i = 0; i < s; i++) { let t = 0; for (let l = 0; l < k; l++) t += T[i * k + l] * vectors[l * k + c]; C[i * k + j] = t; } });
    return { vals: order.map((c) => values[c]), C, k };
  };
  let KX = X.map(Kx), MX = X.map(Mx);
  let r0 = rr(X, KX, MX), lam = r0.vals.slice(0, q);
  X = comb(X, r0.C, [...Array(q).keys()], r0.k); KX = X.map(Kx); MX = X.map(Mx);
  let P = null, KP = null, MP = null, it = 0, res = [];
  for (; it < maxIter; it++) {
    if (cancelled && cancelled()) throw new Error('Cancelled');
    const R = X.map((x, j) => { const r = new Float64Array(N); for (let i = 0; i < N; i++) r[i] = KX[j][i] - lam[j] * MX[j][i]; return proj(r); });
    res = R.map((r, j) => Math.sqrt(dot(r, r)) / (Math.abs(lam[j]) * Math.sqrt(dot(MX[j], MX[j])) || 1));
    if (onProgress) onProgress(Math.min(0.99, (it + 1) / maxIter + 0.5 * Math.max(0, Math.log(Math.max(...res.slice(0, modes))) / Math.log(tol))), `Modes: iteration ${it + 1}, residual ${Math.max(...res.slice(0, modes)).toExponential(1)}`);   // i18n-ignore: progress label, never shown
    if (res.slice(0, modes).every((x) => x < tol)) break;
    const W = R.map((r) => { const z = new Float64Array(N); sys.prec(r, z); return z; });
    // M-normalise W (the Gram matrix drops near-dependent directions by size, so every block must be on one scale)
    const MW = W.map(Mx);
    W.forEach((w, j) => { const l = Math.sqrt(Math.max(dot(w, MW[j]), 1e-300)); for (let i = 0; i < N; i++) { w[i] /= l; MW[j][i] /= l; } });
    const KW = W.map(Kx);
    const S = [...X, ...W, ...(P || [])], KS = [...KX, ...KW, ...(KP || [])], MS = [...MX, ...MW, ...(MP || [])];
    const r = rr(S, KS, MS);
    if (r.k < q) { P = null; KP = null; MP = null; continue; }
    const cols = [...Array(q).keys()];
    lam = r.vals.slice(0, q);
    // P = the W and P parts of the new X
    const Cp = Float64Array.from(r.C); for (let i = 0; i < q; i++) for (let j = 0; j < r.k; j++) Cp[i * r.k + j] = 0;
    P = comb(S, Cp, cols, r.k); KP = comb(KS, Cp, cols, r.k); MP = comb(MS, Cp, cols, r.k);
    X = comb(S, r.C, cols, r.k); KX = comb(KS, r.C, cols, r.k); MX = comb(MS, r.C, cols, r.k);
    // P normalised for conditioning
    for (let j = 0; j < q; j++) { const l = Math.sqrt(Math.max(dot(P[j], MP[j]), 1e-300)); for (let i = 0; i < N; i++) { P[j][i] /= l; KP[j][i] /= l; MP[j][i] /= l; } }
  }
  const converged = res.slice(0, modes).every((x) => x < tol);
  return { freqs: lam.slice(0, modes).map((l) => Math.sqrt(Math.max(l, 0)) / (2 * Math.PI)), shapes: X.slice(0, modes), iterations: it, residuals: res.slice(0, modes), converged };
}

// ---------------------------------------------------------------------------------------- the whole job

/** Mesh a job's part → { t10, model, meshStats } (shared by the static, modal, thermal and buckling solves). */
export function meshJob(job, onProgress = () => {}) {
  const bvh = buildBVH(job.mesh), faces = jobFaces(job);
  const tm = tetMesh(job.mesh, faces, { h: job.h, curv: job.refineCurved === false ? 0 : 0.25, thick: 1, levels: job.levels ?? 3, maxTets: job.maxTets || 300000, bvh, onProgress: (f, t) => onProgress(0.3 * f, t), field: job.field || null });
  const t10 = toT10(tm, job.mesh, faces, bvh);
  const model = makeTetModel(t10);
  return { tm, t10, model, bvh, faces };
}
/** The job's face records with their exact surfaces checked (surfaces.js readSurface; a bad one is dropped: that face then
 *  follows the tessellation). job.exactSurfaces === false drops them all (the tests' "before"). Cached on the job. */
export function jobFaces(job) {
  if (job._faces) return job._faces;
  const faces = (job.faces || []).map((f) => { if (!f || !f.surf) return f; const { surf, ...rest } = f; return job.exactSurfaces !== false && readSurface(surf) ? f : rest; });
  Object.defineProperty(job, '_faces', { value: faces, enumerable: false, configurable: true });
  return faces;
}

/** Summary of a meshed model for the UI. */
export function meshSummary(tm, t10, model, rho) {
  let vol = 0; const m = model.tets10.length / 10, g = new Float64Array(30), el = new Int32Array(10);
  for (let e = 0; e < m; e++) { for (let a = 0; a < 10; a++) el[a] = model.tets10[10 * e + a]; for (let p = 0; p < 4; p++) vol += GP4[p][3] * jac(model.X, el, SH4[p].dN, g); }
  return { mesher: 'tet', elements: m, nodes: model.n, dofs: model.N, h: tm.stats.h, volume: vol, mass: vol * rho * 1000, quality: tm.quality, background: tm.stats.background, curvedEdges: t10.stats.curvedEdges, straightKept: t10.stats.straightKept, snapped: tm.stats.snapped, steiner: tm.stats.steiner, exactFaces: tm.stats.exactFaces, tessFaces: tm.stats.tessFaces, tessTypes: tm.stats.tessTypes };
}

/**
 * One tetrahedral study, start to end (pure; the worker calls it). job as fea.js solveStudy plus faces with their
 * geometry (type, n/o, axis/r, area) and mesh.edgeSegs. → { kind, summary, model, results … }
 */
export function solveTetStudy(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now();
  onProgress(0, 'Meshing');
  return solveTetOnMesh(job, meshJob(job, onProgress), onProgress, cancelled, t0);
}
/** The static or modal solve of a job on a mesh already made (meshJob's { tm, t10, model }); progress from 0.3. */
export function solveTetOnMesh(job, { tm, t10, model }, onProgress = () => {}, cancelled = null, t0 = Date.now()) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const mat = readMaterial(job.material), rho = tonnesPerMm3(mat.density);
  onProgress(0.3, 'Assembling');
  const asm = assemble(model, mat.E, mat.nu, { rho, mass: job.kind === 'modal', onProgress: (f) => onProgress(0.3 + 0.1 * f, 'Assembling') });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bc = tetBoundaryConditions(model, job.bcs, { density: rho, exactArea, nodeVolN: asm.nodeVolN, faces: jobFaces(job) });
  const free = tetRigidCheck(model, bc.cons);
  if (free) throw new Error(t('study.fea.not_held', { free: free.join(', ') }));
  const summary = meshSummary(tm, t10, model, rho);
  onProgress(0.42, 'Preconditioner');
  const sys = system(model, asm.K, bc.cons);
  if (job.kind === 'modal') {
    const r = tetModal(model, sys, asm.M, { modes: job.modes || 4, onProgress: (f, t) => onProgress(0.45 + 0.55 * f, t), cancelled });
    if (!r.converged) throw new Error(t('study.tet.eig_no_converge', { res: Math.max(...r.residuals).toExponential(1), n: r.iterations }));
    const out = { kind: 'modal', summary, freqs: r.freqs, shapes: r.shapes, iterations: r.iterations, residuals: r.residuals, model, tm, ms: Date.now() - t0 };
    if (job.adaptive) Object.assign(out, shapeErrors(model, asm.K, bc.cons, mat, r.shapes));   // 0.4 P5: automatic refinement of modal studies
    return out;
  }
  const sol = tetPCG(model, sys, bc.f, { tol: job.tol || 1e-8, onProgress: (f, t) => onProgress(0.45 + 0.5 * f, t), cancelled });
  if (!sol.converged) throw new Error(t('study.fea.no_converge', { res: sol.residual.toExponential(1), n: sol.iterations }));
  onProgress(0.97, 'Stresses');
  const res = tetPostprocess(model, asm.K, sol.u, bc.f, bc.cons, { E: mat.E, nu: mat.nu, yieldStress: mat.yield, groups: bc.groups.constraints });
  return { kind: 'static', summary, material: mat, u: sol.u, iterations: sol.iterations, residual: sol.residual, loadTotal: bc.loadTotal, groups: bc.groups, ...res, model, tm, K: asm.K, f: bc.f, ms: Date.now() - t0 };
}

/**
 * 0.4 P5: the error estimate of several fields at once (mode shapes, a buckling study's pre-stress and modes). Each field's
 * Zienkiewicz–Zhu indicators (tetPostprocess) are scaled to its own unit energy, so every field counts alike whatever its
 * amplitude: e_K² = Σ_f e_K,f² / U_f, Σe² = Σ_f Σe²_f / U_f, U = the number of fields, errorPct = 100·√(Σe² / (U + Σe²)) —
 * the RMS of the fields' own estimates for small errors. → { err, errSq, energy, errorPct, errorParts: [% per field] }
 */
export function combineEstimates(parts) {
  const m = parts[0].err.length, err = new Float64Array(m), pct = [];
  let errSq = 0;
  for (const q of parts) {
    const U = Math.max(q.energy, 1e-300);
    for (let e = 0; e < m; e++) err[e] += q.err[e] * q.err[e] / U;
    errSq += q.errSq / U;
    pct.push(q.errorPct);
  }
  for (let e = 0; e < m; e++) err[e] = Math.sqrt(err[e]);
  const energy = parts.length;
  return { err, errSq, energy, errorPct: 100 * Math.sqrt(errSq / (energy + errSq)), errorParts: pct };
}
/** The ZZ estimate of mode shapes (no loads: only the indicators are used). */
export function shapeErrors(model, K, cons, mat, shapes) {
  const zero = new Float64Array(model.N);
  return combineEstimates(shapes.map((u) => tetPostprocess(model, K, u, zero, cons, { E: mat.E, nu: mat.nu })));
}

export { tetVolume, solveSmall };
