/* SPDX-License-Identifier: Apache-2.0 */
/**
 * contact.js — contact between parts for nonlinear.js (SU.891). DOM-free; same units as tetfea.js (mm, N, MPa).
 *
 * Several parts are merged into one T10 model (`mergeBodies`: nodes and elements concatenated, boundary faces kept, each
 * element knows its body so each part has its own material). Two parts meet through a pair: the slave surface (boundary
 * quadratic triangles) against master boundary faces. Gauss-point-to-surface, penalty: each slave face carries the 6-point
 * (degree 4) rule of tetfea.js TRI6; a point's gap is g = n·(x_s − x_m), x_s its position by the slave shape functions, x_m
 * its closest point on the master faces, n the master's outward normal there.
 *   frictionless — g < 0 gives the force kn·w·(−g) along n: on the slave's six nodes by their shape values, the opposite on
 *     the master's six nodes by theirs (w = the point's weight × face area density). This is the consistent traction
 *     integral, so a uniform pressure is carried exactly whatever the two meshes look like (the nodal version of this method,
 *     with lumped nodal areas, left half the nodes of a flat joint lifting).
 *   bonded — the point is tied to the master point it starts nearest to: force −kt·w·(x_s − x_m) on all three components
 *     (no sliding, no separation).
 * Within one Newton solve the pairing (master face, reference point, normal) is frozen, so g is linear in the displacements
 * and the tangent kn·w·c cᵀ (c = N_s n at the slave nodes, −N_m n at the master nodes) is exact; nonlinear.js then re-pairs on
 * the converged shape (`update`) and solves again until the pairing stops moving. The pairs' candidate nodes join the
 * matrix pattern before the model is made (`planContact().extraPairs` → makeTetModel).
 * Penalty stiffness kn, kt in MPa/mm (force per area per length); `autoPenalty(E, h)` = 20·E/h; the penetration is
 * about p·h/(20·E) — see `maxPenetration` in the info. A bonded joint carries the penalty's compliance σ/kt: raise the factor.
 * Limits: small displacement and small sliding (the candidate window `cutoff` is fixed at the start); frictionless or
 * bonded only (no friction, no preload, no adhesion); the master should not be much finer than the slave (a master node can
 * poke through between slave points); the tangent keeps the pairing fixed, so a contact that slides a lot needs the outer
 * loop (12 passes by default). References: T. A. Laursen, Computational Contact and Impact Mechanics (Springer, 2002)
 * ch. 3–4; P. Wriggers, Computational Contact Mechanics (2nd ed., Springer, 2006) ch. 5 and 9 (Gauss-point-to-surface and
 * the contact patch test).
 */
import { entry, t6, TRI6 } from './tetfea.js';

const REGULAR = 1e-4;
export const autoPenalty = (E, h, factor = 20) => factor * E / h;

/** Merge T10 parts (tetfea.js meshJob's t10: { nodes, tets10, btri6, bface }) → one t10 + { elemBody, nodeStart, triStart, faceStart }. */
export function mergeBodies(parts) {
  let nn = 0, ne = 0, nt = 0, nf = 0;
  for (const p of parts) { nn += p.nodes.length / 3; ne += p.tets10.length / 10; nt += p.btri6.length / 6; }
  const nodes = new Float64Array(3 * nn), tets10 = new Int32Array(10 * ne), btri6 = new Int32Array(6 * nt), bface = new Int32Array(nt), elemBody = new Int32Array(ne);
  const nodeStart = [], elemStart = [], triStart = [], faceStart = [];
  let on = 0, oe = 0, ot = 0;
  parts.forEach((p, b) => {
    nodeStart.push(on); elemStart.push(oe); triStart.push(ot); faceStart.push(nf);
    nodes.set(p.nodes, 3 * on);
    for (let i = 0; i < p.tets10.length; i++) tets10[10 * oe + i] = p.tets10[i] + on;
    for (let i = 0; i < p.btri6.length; i++) btri6[6 * ot + i] = p.btri6[i] + on;
    let maxF = -1;
    for (let i = 0; i < p.bface.length; i++) { bface[ot + i] = p.bface[i] < 0 ? -1 : p.bface[i] + nf; if (p.bface[i] > maxF) maxF = p.bface[i]; }
    for (let e = 0; e < p.tets10.length / 10; e++) elemBody[oe + e] = b;
    on += p.nodes.length / 3; oe += p.tets10.length / 10; ot += p.btri6.length / 6; nf += maxF + 1;
  });
  return { nodes, tets10, btri6, bface, order: 2, elemBody, nodeStart, elemStart, triStart, faceStart, bodies: parts.length };
}

const SUB = [[0, 3, 5], [3, 1, 4], [5, 4, 2], [3, 4, 5]];
const REF = [[0, 0], [1, 0], [0, 1], [0.5, 0], [0.5, 0.5], [0, 0.5]];

/** Closest point of triangle abc to p (Ericson, Real-Time Collision Detection § 5.1.5) → { d2, w: [wa, wb, wc] }. */
function closestTri(p, a, b, c) {
  const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]], ap = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
  const dot = (x, y) => x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
  const d1 = dot(ab, ap), d2 = dot(ac, ap);
  let w;
  if (d1 <= 0 && d2 <= 0) w = [1, 0, 0];
  else {
    const bp = [p[0] - b[0], p[1] - b[1], p[2] - b[2]], d3 = dot(ab, bp), d4 = dot(ac, bp);
    if (d3 >= 0 && d4 <= d3) w = [0, 1, 0];
    else {
      const vc = d1 * d4 - d3 * d2;
      if (vc <= 0 && d1 >= 0 && d3 <= 0) { const v = d1 / (d1 - d3); w = [1 - v, v, 0]; }
      else {
        const cp = [p[0] - c[0], p[1] - c[1], p[2] - c[2]], d5 = dot(ab, cp), d6 = dot(ac, cp);
        if (d6 >= 0 && d5 <= d6) w = [0, 0, 1];
        else {
          const vb = d5 * d2 - d1 * d6;
          if (vb <= 0 && d2 >= 0 && d6 <= 0) { const v = d2 / (d2 - d6); w = [1 - v, 0, v]; }
          else {
            const va = d3 * d6 - d5 * d4;
            if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) { const v = (d4 - d3) / ((d4 - d3) + (d5 - d6)); w = [0, 1 - v, v]; }
            else { const den = 1 / (va + vb + vc), v = vb * den, ww = vc * den; w = [1 - v - ww, v, ww]; }
          }
        }
      }
    }
  }
  const q = [0, 1, 2].map((i) => w[0] * a[i] + w[1] * b[i] + w[2] * c[i]);
  return { d2: (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2, w };
}

/** Closest point on boundary T6 triangle t (current coordinates Y) to p → { d2, L1, L2 } (reference coordinates of the point). */
function closestT6(Y, v, p) {
  let best = null;
  const P = Array.from(v, (n) => [Y[3 * n], Y[3 * n + 1], Y[3 * n + 2]]);
  for (const [i, j, k] of SUB) {
    const r = closestTri(p, P[i], P[j], P[k]);
    if (!best || r.d2 < best.d2) best = { d2: r.d2, L1: r.w[0] * REF[i][0] + r.w[1] * REF[j][0] + r.w[2] * REF[k][0], L2: r.w[0] * REF[i][1] + r.w[1] * REF[j][1] + r.w[2] * REF[k][1] };
  }
  return best;
}

/** Position, T6 shape values and outward unit normal of boundary triangle v at (L1, L2) on coordinates Y. */
function surfacePoint(Y, v, L1, L2) {
  const { N, d1, d2 } = t6(L1, L2), x = [0, 0, 0], a = [0, 0, 0], b = [0, 0, 0];
  for (let k = 0; k < 6; k++) for (let c = 0; c < 3; c++) { const y = Y[3 * v[k] + c]; x[c] += N[k] * y; a[c] += d1[k] * y; b[c] += d2[k] * y; }
  const n = [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]], l = Math.hypot(...n) || 1;
  return { N, x, n: n.map((q) => q / l) };
}

/**
 * Plan the contact on the merged t10 (old node numbering). pairs: [{ type: 'frictionless' | 'bonded', slave: [btri indices],
 * master: [btri indices], kn (MPa/mm), gtol? }]. opts { cutoff (mm, window round each slave face; default 1 + 3 × mean slave
 * edge) }. → { extraPairs (for makeTetModel), plans, bind(model) → contact object for solveNonlinear }.
 */
export function planContact(t10, pairs, { cutoff = null } = {}) {
  const X = t10.nodes, bt = t10.btri6, extra = [], plans = [];
  const bbox = (t) => { const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity]; for (let k = 0; k < 6; k++) for (let c = 0; c < 3; c++) { const x = X[3 * bt[6 * t + k] + c]; if (x < lo[c]) lo[c] = x; if (x > hi[c]) hi[c] = x; } return [lo, hi]; };
  for (const pr of pairs) {
    let cut = cutoff;
    if (cut === null) { let s = 0, c = 0; for (const t of pr.slave) { for (let k = 0; k < 3; k++) { const a = bt[6 * t + k], b = bt[6 * t + (k + 1) % 3]; s += Math.hypot(X[3 * a] - X[3 * b], X[3 * a + 1] - X[3 * b + 1], X[3 * a + 2] - X[3 * b + 2]); c++; } } cut = 1 + 3 * s / Math.max(1, c); }
    const boxes = pr.master.map((t) => bbox(t)), items = [];
    for (const st of pr.slave) {
      const [slo, shi] = bbox(st), cands = [];
      pr.master.forEach((t, i) => { const [lo, hi] = boxes[i]; if (slo[0] <= hi[0] + cut && shi[0] >= lo[0] - cut && slo[1] <= hi[1] + cut && shi[1] >= lo[1] - cut && slo[2] <= hi[2] + cut && shi[2] >= lo[2] - cut) cands.push(t); });
      if (!cands.length) continue;
      const sv = Array.from(bt.subarray(6 * st, 6 * st + 6));
      for (const t of cands) for (let k = 0; k < 6; k++) for (const s of sv) { const m = bt[6 * t + k]; if (m !== s) extra.push(s, m); }
      for (const [, L1, L2, wq] of TRI6) {
        const { N, d1, d2 } = t6(L1, L2), a = [0, 0, 0], b = [0, 0, 0];
        for (let k = 0; k < 6; k++) for (let c = 0; c < 3; c++) { a[c] += d1[k] * X[3 * sv[k] + c]; b[c] += d2[k] * X[3 * sv[k] + c]; }
        items.push({ sv, N, w: wq * Math.hypot(a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]) / 2, cands });
      }
    }
    plans.push({ type: pr.type || 'frictionless', kn: pr.kn, items, cut, gtol: pr.gtol });
  }
  return { extraPairs: Int32Array.from(extra), plans, bind: (model) => bindContact(model, plans) };
}

/**
 * The contact object nonlinear.js calls: apply(model, u, r, K) → info (forces and stiffness for the current pairing),
 * update(model, u) → true when the pairing moved (nonlinear.js then solves again: the outer loop), commit(), report().
 */
function bindContact(model, plans) {
  const perm = model.perm, bt = model.btri6, X0 = model.X;
  const P = plans.map((pl) => ({ ...pl, items: pl.items.map((it) => ({ sv: it.sv.map((n) => perm[n]), N: it.N, w: it.w, cands: it.cands, pair: null })) }));
  const state = { last: [], info: null };
  const addBlock = (K, A, B, v) => {   // lower triangle of the 3×3 block (A, B), values v(i, j)
    if (B > A) return;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { if (A === B && j > i) continue; const val = v(i, j); if (val !== 0) K[entry(model, A, i, B, j)] += val; }
  };
  /** Pair every slave point with its closest master point on the shape Y → true when any pairing moved. */
  function pairAll(Y) {
    let moved = false;
    for (const pl of P) for (const it of pl.items) {
      const p = [0, 0, 0]; for (let k = 0; k < 6; k++) for (let a = 0; a < 3; a++) p[a] += it.N[k] * Y[3 * it.sv[k] + a];
      if (pl.type === 'bonded' && it.pair) continue;   // a bonded point keeps the pairing it starts with
      let best = null;
      for (const t of it.cands) { const rr = closestT6(Y, bt.subarray(6 * t, 6 * t + 6), p); if (!best || rr.d2 < best.d2) best = { ...rr, t }; }
      if (!best || !(best.d2 <= pl.cut * pl.cut)) { if (it.pair) moved = true; it.pair = null; continue; }
      const { N, n } = surfacePoint(Y, bt.subarray(6 * best.t, 6 * best.t + 6), best.L1, best.L2), old = it.pair;
      if (!old || old.t !== best.t || Math.abs(old.L1 - best.L1) > 2e-3 || Math.abs(old.L2 - best.L2) > 2e-3) moved = true;
      it.pair = { t: best.t, L1: best.L1, L2: best.L2, N, n };
    }
    return moved;
  }
  pairAll(X0);
  function apply(m, u, r, K) {
    let active = 0, maxPen = 0, fn = 0; state.last = [];
    for (const pl of P) {
      const kn = pl.kn, bonded = pl.type === 'bonded';
      for (const it of pl.items) {
        const pr = it.pair; if (!pr) continue;
        const w = it.w, v = bt.subarray(6 * pr.t, 6 * pr.t + 6), N = pr.N, nodes = [...it.sv, ...v], c = [...it.N, ...N.map((q) => -q)];
        if (bonded) {
          const rel = [0, 0, 0];
          for (let a = 0; a < 3; a++) for (let q = 0; q < 12; q++) rel[a] += c[q] * (X0[3 * nodes[q] + a] + u[3 * nodes[q] + a]);
          const kw = kn * w;
          for (let a = 0; a < 3; a++) rel[a] -= it.rest ? it.rest[a] : 0;
          if (!it.rest) { it.rest = rel.slice(); for (let a = 0; a < 3; a++) rel[a] = 0; }
          for (let q = 0; q < 12; q++) for (let a = 0; a < 3; a++) r[3 * nodes[q] + a] -= kw * c[q] * rel[a];
          for (let q = 0; q < 12; q++) for (let q2 = 0; q2 < 12; q2++) addBlock(K, nodes[q], nodes[q2], (i, j) => (i === j ? kw * c[q] * c[q2] : 0));
          active++;
          continue;
        }
        // gap on the current shape with the frozen foot point and normal: n·(x_s − Σ N_i x_i)
        const n = pr.n, xs = [0, 0, 0]; let g = 0;
        for (let a = 0; a < 3; a++) { let d = 0; for (let q = 0; q < 12; q++) d += c[q] * (X0[3 * nodes[q] + a] + u[3 * nodes[q] + a]); g += d * n[a]; if (a >= 0) for (let q = 0; q < 6; q++) xs[a] += it.N[q] * (X0[3 * nodes[q] + a] + u[3 * nodes[q] + a]); }
        const gtol = pl.gtol ?? 1e-6;
        if (!(g <= gtol)) {
          // an open point carries a token stiffness (1e-4 of the penalty) so a part that only the contact holds is not a
          // singular system before it closes; no force
          const kr = REGULAR * kn * w;
          for (let q = 0; q < 12; q++) for (let q2 = 0; q2 < 12; q2++) addBlock(K, nodes[q], nodes[q2], (i, j) => kr * c[q] * c[q2] * n[i] * n[j]);
          continue;
        }
        const kw = kn * w, f = g < 0 ? kw * -g : 0;
        if (f > 0) { active++; fn += f; if (-g > maxPen) maxPen = -g; state.last.push({ gap: g, force: f, w, pressure: f / w, at: xs }); }
        for (let q = 0; q < 12; q++) for (let a = 0; a < 3; a++) r[3 * nodes[q] + a] += f * c[q] * n[a];
        for (let q = 0; q < 12; q++) for (let q2 = 0; q2 < 12; q2++) addBlock(K, nodes[q], nodes[q2], (i, j) => kw * c[q] * c[q2] * n[i] * n[j]);
      }
    }
    return (state.info = { active, maxPenetration: maxPen, normalForce: fn });
  }
  function update(m, u) {
    const Y = new Float64Array(X0.length); for (let i = 0; i < Y.length; i++) Y[i] = X0[i] + u[i];
    return pairAll(Y);
  }
  return { apply, update, commit() {}, report: () => state.last, get info() { return state.info; } };
}
