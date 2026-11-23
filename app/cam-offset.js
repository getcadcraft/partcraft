/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-offset.js — the 2D curve core of PartCraft's CAM (DOM-free). Curves are lines and circular arcs, kept
 * exact (no faceting), so toolpaths can be written as G1 lines and G2/G3 arcs.
 *
 *   prim  {k:'L', s, e}                         line s → e
 *         {k:'A', s, e, c, r, a0, sw}           arc about c, radius r, from angle a0 through signed sweep sw
 *                                               (sw > 0 counter-clockwise); s/e are its end points
 *   loop  [prim…] each prim's e is the next one's s, closed
 *   region [loop…] oriented so the region is on the LEFT: outer loops counter-clockwise, holes clockwise
 *                                               (nonzero winding; orientRegion() fixes any input)
 *
 * Offsetting (offsetRegion) is "raw offset + trim by distance": every prim is moved d to its left (lines
 * shift, arcs change radius), every corner gets an arc of radius d about it (sweep = the turn there), so the
 * raw curve is continuous; all raw pieces of all loops are split at their mutual intersections, and a piece
 * is kept only when its midpoint is at distance ≥ d − tol from the original boundary (no part of the
 * boundary is nearer than d) and on the right side. The kept pieces are the exact level set at distance d:
 * islands, narrow necks that vanish, and self-intersections all fall out of the one test; the pieces are
 * chained back into loops (at a pinch point the sharpest left turn wins, which keeps lobes apart).
 * Cost is O(n²) in the number of prims (fine for machining outlines: tens to hundreds of curves).
 */
import { add2 as add, cross2 as crs, dist2 as dist, dot2 as dot, len2 as len, scale2 as mul, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
export { dist };
export const TAU = 2 * Math.PI;
export const EPS = 1e-9;          // parameter tolerance
export const TOL = 1e-6;          // mm: distance tolerance for trimming
export const JOIN = 1e-5;         // mm: end points closer than this are the same point when chaining

const left = (t) => [-t[1], t[0]];
const unit = (a) => { const l = len(a) || 1; return [a[0] / l, a[1] / l]; };
const polar = (c, r, a) => [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)];
const mod = (a, m) => ((a % m) + m) % m;

export const line = (s, e) => ({ k: 'L', s, e });
export function arc(c, r, a0, sw, s = null, e = null) {
  return { k: 'A', c, r, a0, sw, s: s || polar(c, r, a0), e: e || polar(c, r, a0 + sw) };
}
/** A full circle as one prim (ccw true = counter-clockwise), starting at angle a0. */
export const circle = (c, r, ccw = true, a0 = 0) => { const s = polar(c, r, a0); return arc(c, r, a0, ccw ? TAU : -TAU, s, s); };

export const lengthOf = (p) => (p.k === 'L' ? dist(p.s, p.e) : Math.abs(p.sw) * p.r);
export function pointAt(p, t) {
  if (t <= 0) return p.s; if (t >= 1) return p.e;
  return p.k === 'L' ? [p.s[0] + (p.e[0] - p.s[0]) * t, p.s[1] + (p.e[1] - p.s[1]) * t] : polar(p.c, p.r, p.a0 + p.sw * t);
}
/** Unit tangent (direction of travel) at parameter t. */
export function tangentAt(p, t) {
  if (p.k === 'L') return unit(sub(p.e, p.s));
  const a = p.a0 + p.sw * t, g = Math.sign(p.sw);
  return [-Math.sin(a) * g, Math.cos(a) * g];
}
export const reversePrim = (p) => (p.k === 'L' ? line(p.e, p.s) : arc(p.c, p.r, p.a0 + p.sw, -p.sw, p.e, p.s));
export const reverseLoop = (l) => l.slice().reverse().map(reversePrim);
export const loopLength = (l) => l.reduce((s, p) => s + lengthOf(p), 0);

/** Sub-prim between parameters t0 < t1 (end points given to keep shared points identical). */
export function subPrim(p, t0, t1, s = null, e = null) {
  s = s || pointAt(p, t0); e = e || pointAt(p, t1);
  return p.k === 'L' ? line(s, e) : arc(p.c, p.r, p.a0 + p.sw * t0, p.sw * (t1 - t0), s, e);
}

/** Is angle a on the arc? → parameter t in [0, 1] or −1. */
export function arcParam(p, a, eps = EPS) {
  const span = Math.abs(p.sw);
  if (span >= TAU - eps) return mod((a - p.a0) * Math.sign(p.sw), TAU) / TAU;
  let u = p.sw > 0 ? mod(a - p.a0, TAU) : mod(p.a0 - a, TAU);
  if (u > span + eps) { if (u > TAU - eps) u = 0; else return -1; }
  return Math.min(1, u / span);
}

/** Closest distance from point q to a prim. */
export function distToPrim(q, p) {
  if (p.k === 'L') {
    const d = sub(p.e, p.s), l2 = dot(d, d);
    const t = l2 > 0 ? Math.max(0, Math.min(1, dot(sub(q, p.s), d) / l2)) : 0;
    return dist(q, [p.s[0] + d[0] * t, p.s[1] + d[1] * t]);
  }
  const v = sub(q, p.c), rho = len(v);
  if (rho < 1e-300 || arcParam(p, Math.atan2(v[1], v[0]), 1e-12) >= 0) return Math.abs(rho - p.r);
  return Math.min(dist(q, p.s), dist(q, p.e));
}
/** Closest point of a prim to q → { t, p, d }. */
export function closestOnPrim(q, p) {
  if (p.k === 'L') {
    const d = sub(p.e, p.s), l2 = dot(d, d);
    const t = l2 > 0 ? Math.max(0, Math.min(1, dot(sub(q, p.s), d) / l2)) : 0;
    const x = pointAt(p, t);
    return { t, p: x, d: dist(q, x) };
  }
  const v = sub(q, p.c);
  const t = arcParam(p, Math.atan2(v[1], v[0]), 1e-12);
  if (t >= 0) { const x = pointAt(p, t); return { t, p: x, d: dist(q, x) }; }
  const ds = dist(q, p.s), de = dist(q, p.e);
  return ds <= de ? { t: 0, p: p.s, d: ds } : { t: 1, p: p.e, d: de };
}
export function distToLoops(q, loops, stopBelow = -Infinity) {
  let m = Infinity;
  for (const l of loops) for (const p of l) { const d = distToPrim(q, p); if (d < m) { m = d; if (m < stopBelow) return m; } }
  return m;
}

/** Bounding box [minx, miny, maxx, maxy] of a prim (arcs: their end points plus the axis extremes they pass). */
export function boxOf(p) {
  let x0 = Math.min(p.s[0], p.e[0]), y0 = Math.min(p.s[1], p.e[1]), x1 = Math.max(p.s[0], p.e[0]), y1 = Math.max(p.s[1], p.e[1]);
  if (p.k === 'A') for (let k = 0; k < 4; k++) {
    if (arcParam(p, k * Math.PI / 2, 1e-12) < 0) continue;
    const q = polar(p.c, p.r, k * Math.PI / 2);
    x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]);
  }
  return [x0, y0, x1, y1];
}
export function boxOfLoops(loops) {
  const b = [Infinity, Infinity, -Infinity, -Infinity];
  for (const l of loops) for (const p of l) { const q = boxOf(p); b[0] = Math.min(b[0], q[0]); b[1] = Math.min(b[1], q[1]); b[2] = Math.max(b[2], q[2]); b[3] = Math.max(b[3], q[3]); }
  return b;
}

/** Signed area (counter-clockwise positive), exact for arcs. */
export function loopArea(l) {
  let s = 0;
  for (const p of l) {
    if (p.k === 'L') s += crs(p.s, p.e);
    else {
      const a1 = p.a0 + p.sw;
      s += p.r * p.c[0] * (Math.sin(a1) - Math.sin(p.a0)) - p.r * p.c[1] * (Math.cos(a1) - Math.cos(p.a0)) + p.r * p.r * p.sw;
    }
  }
  return s / 2;
}

/** Winding number of the loops about q (horizontal ray to +x; arcs split at their top and bottom). */
export function winding(loops, q) {
  let w = 0;
  const seg = (a, b) => {
    if (a[1] <= q[1] && b[1] > q[1]) { if (crs(sub(b, a), sub(q, a)) > 0) w++; }
    else if (b[1] <= q[1] && a[1] > q[1]) { if (crs(sub(b, a), sub(q, a)) < 0) w--; }
  };
  for (const l of loops) for (const p of l) {
    if (p.k === 'L') { seg(p.s, p.e); continue; }
    // monotone pieces of the arc between the angles π/2 + kπ
    const pieces = monotonePieces(p);
    for (const m of pieces) {
      const ys = m.s[1], ye = m.e[1];
      const up = ye > ys;
      if (!(up ? (ys <= q[1] && ye > q[1]) : (ye <= q[1] && ys > q[1]))) continue;
      const dy = q[1] - p.c[1];
      const h = Math.sqrt(Math.max(0, p.r * p.r - dy * dy));
      const x = p.c[0] + (Math.cos(m.a0 + m.sw / 2) >= 0 ? h : -h);
      if (x > q[0]) w += up ? 1 : -1;
    }
  }
  return w;
}
function monotonePieces(p) {
  const out = [];
  const cuts = [];
  for (let k = -8; k <= 8; k++) {
    const a = Math.PI / 2 + k * Math.PI;
    const t = (a - p.a0) / p.sw;
    if (t > 1e-12 && t < 1 - 1e-12) cuts.push(t);
  }
  cuts.sort((a, b) => a - b);
  let t0 = 0, s = p.s;
  for (const t of [...cuts, 1]) {
    const e = t === 1 ? p.e : polar(p.c, p.r, p.a0 + p.sw * t);
    out.push({ s, e, a0: p.a0 + p.sw * t0, sw: p.sw * (t - t0) });
    t0 = t; s = e;
  }
  return out;
}
export const inside = (loops, q) => winding(loops, q) !== 0;

/** Orient loops by nesting (even depth = outer → counter-clockwise, odd = hole → clockwise). */
export function orientRegion(loops) {
  const probe = loops.map((l) => pointAt(l[0], 0.5));
  return loops.map((l, i) => {
    let depth = 0;
    loops.forEach((m, j) => { if (j !== i && Math.abs(winding([m], probe[i])) % 2 === 1) depth++; });
    const ccw = loopArea(l) > 0;
    return (depth % 2 === 0) === ccw ? l : reverseLoop(l);
  });
}

// ---------------------------------------------------------------- intersections

/** Intersections of two prims → [{ta, tb, p}] (overlapping collinear/concentric pieces give their overlap ends). */
export function intersect(A, B) {
  if (A.k === 'L' && B.k === 'L') return llx(A, B);
  if (A.k === 'L') return lax(A, B);
  if (B.k === 'L') return lax(B, A).map((x) => ({ ta: x.tb, tb: x.ta, p: x.p }));
  return aax(A, B);
}
function llx(A, B) {
  const r = sub(A.e, A.s), s = sub(B.e, B.s);
  const den = crs(r, s), qp = sub(B.s, A.s);
  const lr = len(r), ls = len(s);
  if (lr < 1e-15 || ls < 1e-15) return [];
  if (Math.abs(den) <= 1e-12 * lr * ls) {
    if (Math.abs(crs(qp, r)) / lr > TOL * 0.1) return [];
    // collinear: overlap ends
    const out = [];
    const tA = (q) => dot(sub(q, A.s), r) / (lr * lr), tB = (q) => dot(sub(q, B.s), s) / (ls * ls);
    for (const q of [B.s, B.e]) { const t = tA(q); if (t > -EPS && t < 1 + EPS) out.push({ ta: clamp01(t), tb: tB(q), p: q }); }
    for (const q of [A.s, A.e]) { const t = tB(q); if (t > -EPS && t < 1 + EPS) out.push({ ta: tA(q), tb: clamp01(t), p: q }); }
    return out.map((x) => ({ ta: clamp01(x.ta), tb: clamp01(x.tb), p: x.p }));
  }
  const ta = crs(qp, s) / den, tb = crs(qp, r) / den;
  const ea = EPS + TOL * 0.01 / lr, eb = EPS + TOL * 0.01 / ls;
  if (ta < -ea || ta > 1 + ea || tb < -eb || tb > 1 + eb) return [];
  return [{ ta: clamp01(ta), tb: clamp01(tb), p: [A.s[0] + r[0] * ta, A.s[1] + r[1] * ta] }];
}
const clamp01 = (t) => Math.max(0, Math.min(1, t));
function lax(L, C) {
  const d = sub(L.e, L.s), f = sub(L.s, C.c);
  const a = dot(d, d), b = 2 * dot(f, d), c = dot(f, f) - C.r * C.r;
  if (a < 1e-30) return [];
  let disc = b * b - 4 * a * c;
  const ld = Math.sqrt(a);
  // tangent within tolerance: one touching point
  if (disc < 0) { if (disc > -4 * a * (2 * C.r * TOL * 0.01)) disc = 0; else return []; }
  const sq = Math.sqrt(disc);
  const ts = disc === 0 ? [-b / (2 * a)] : [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
  const out = [];
  const e = EPS + TOL * 0.01 / ld;
  for (const t of ts) {
    if (t < -e || t > 1 + e) continue;
    const p = pointAt(L, clamp01(t));
    const tb = arcParam(C, Math.atan2(p[1] - C.c[1], p[0] - C.c[0]), EPS + TOL * 0.01 / C.r);
    if (tb < 0) continue;
    out.push({ ta: clamp01(t), tb, p });
  }
  return out;
}
function aax(A, B) {
  const d = dist(A.c, B.c);
  const out = [];
  if (d < 1e-12 * Math.max(1, A.r)) {
    if (Math.abs(A.r - B.r) > TOL * 0.1) return [];
    // concentric, same radius: overlap ends
    for (const q of [B.s, B.e]) { const t = arcParam(A, Math.atan2(q[1] - A.c[1], q[0] - A.c[0])); if (t >= 0) out.push({ ta: t, tb: q === B.s ? 0 : 1, p: q }); }
    for (const q of [A.s, A.e]) { const t = arcParam(B, Math.atan2(q[1] - B.c[1], q[0] - B.c[0])); if (t >= 0) out.push({ ta: q === A.s ? 0 : 1, tb: t, p: q }); }
    return out;
  }
  if (d > A.r + B.r + TOL * 0.01 || d < Math.abs(A.r - B.r) - TOL * 0.01) return [];
  const a = (A.r * A.r - B.r * B.r + d * d) / (2 * d);
  const h2 = A.r * A.r - a * a;
  const h = h2 > 0 ? Math.sqrt(h2) : 0;
  const u = mul(sub(B.c, A.c), 1 / d), m = add(A.c, mul(u, a)), n = left(u);
  const pts = h > 1e-12 ? [add(m, mul(n, h)), sub(m, mul(n, h))] : [m];
  for (const p of pts) {
    const ta = arcParam(A, Math.atan2(p[1] - A.c[1], p[0] - A.c[0]), EPS + TOL * 0.01 / A.r);
    const tb = arcParam(B, Math.atan2(p[1] - B.c[1], p[0] - B.c[0]), EPS + TOL * 0.01 / B.r);
    if (ta >= 0 && tb >= 0) out.push({ ta, tb, p });
  }
  return out;
}

// ---------------------------------------------------------------- offsetting

/** Raw offset pieces of one loop, d to its left (continuous closed curve). */
function rawOffset(loop, d) {
  const out = [];
  const n = loop.length;
  for (let i = 0; i < n; i++) {
    const p = loop[i];
    const t0 = tangentAt(p, 0), t1 = tangentAt(p, 1);
    const s = add(p.s, mul(left(t0), d)), e = add(p.e, mul(left(t1), d));
    if (p.k === 'L') out.push(line(s, e));
    else {
      const r2 = p.sw > 0 ? p.r - d : p.r + d;
      if (r2 > 1e-9) out.push(arc(p.c, r2, p.a0, p.sw, s, e));
      else if (r2 < -1e-9) out.push(arc(p.c, -r2, p.a0 + Math.PI, p.sw, s, e));
    }
    // corner to the next prim
    const q = loop[(i + 1) % n];
    const ta = t1, tb = tangentAt(q, 0);
    const turn = Math.atan2(crs(ta, tb), dot(ta, tb));
    if (Math.abs(turn) > 1e-12) {
      const v = p.e;
      const na = left(ta);
      out.push(arc(v, d, Math.atan2(na[1], na[0]), turn, e, add(q.s, mul(left(tb), d))));
    }
  }
  return out.filter((p) => lengthOf(p) > 1e-12);
}

/** Split every piece at its intersections with the others → sub-pieces. */
export function splitAll(pieces) {
  const boxes = pieces.map(boxOf);
  const cuts = pieces.map(() => []);
  const pad = JOIN;
  for (let i = 0; i < pieces.length; i++) {
    const bi = boxes[i];
    for (let j = i + 1; j < pieces.length; j++) {
      const bj = boxes[j];
      if (bi[0] > bj[2] + pad || bj[0] > bi[2] + pad || bi[1] > bj[3] + pad || bj[1] > bi[3] + pad) continue;
      for (const x of intersect(pieces[i], pieces[j])) { cuts[i].push([x.ta, x.p]); cuts[j].push([x.tb, x.p]); }
    }
  }
  const out = [];
  pieces.forEach((p, i) => {
    const L = lengthOf(p);
    const ts = cuts[i].filter(([t]) => t * L > JOIN && (1 - t) * L > JOIN).sort((a, b) => a[0] - b[0]);
    let t0 = 0, s = p.s;
    for (const [t, q] of ts) {
      if ((t - t0) * L <= JOIN) continue;
      out.push(subPrim(p, t0, t, s, q));
      t0 = t; s = q;
    }
    out.push(subPrim(p, t0, 1, s, p.e));
  });
  return out;
}

/**
 * Offset a region (loops oriented region-on-left) by d: d > 0 shrinks (moves into the region), d < 0 grows.
 * → loops of the offset region, oriented the same way. Empty when nothing is left.
 */
export function offsetRegion(loops, d, { tol = TOL } = {}) {
  if (!loops.length) return [];
  if (Math.abs(d) < 1e-12) return loops.map((l) => l.slice());
  const grow = d < 0, a = Math.abs(d);
  const src = grow ? loops.map(reverseLoop) : loops;
  const raw = [];
  for (const l of src) raw.push(...rawOffset(l, a));
  const parts = splitAll(raw);
  const kept = [];
  for (const p of parts) {
    const m = pointAt(p, 0.5);
    if (distToLoops(m, loops, a - tol) < a - tol) continue;
    if (inside(loops, m) === grow) continue;
    kept.push(p);
  }
  const clean = dropOpposed(kept);
  let out = chain(clean);
  out = out.map((l) => mergeLoop(l)).filter((l) => l.length && Math.abs(loopArea(l)) > 1e-10);
  if (grow) out = out.map(reverseLoop);   // built on the reversed loops: the grown region was on their right
  return out;
}

/** Remove pairs of coincident pieces running opposite ways (zero-width remains) and duplicates. */
function dropOpposed(pieces) {
  const gone = new Set();
  const boxes = pieces.map(boxOf);
  for (let i = 0; i < pieces.length; i++) {
    if (gone.has(i)) continue;
    for (let j = i + 1; j < pieces.length; j++) {
      if (gone.has(j)) continue;
      const bi = boxes[i], bj = boxes[j];
      if (Math.abs(bi[0] - bj[0]) > JOIN || Math.abs(bi[1] - bj[1]) > JOIN || Math.abs(bi[2] - bj[2]) > JOIN || Math.abs(bi[3] - bj[3]) > JOIN) continue;
      const A = pieces[i], B = pieces[j];
      if (A.k !== B.k) continue;
      const same = dist(A.s, B.s) < JOIN && dist(A.e, B.e) < JOIN, opp = dist(A.s, B.e) < JOIN && dist(A.e, B.s) < JOIN;
      if (!same && !opp) continue;
      if (distToPrim(pointAt(B, 0.5), A) > JOIN) continue;
      if (same) gone.add(j); else { gone.add(i); gone.add(j); break; }
    }
  }
  return pieces.filter((_, i) => !gone.has(i));
}

/** Chain directed pieces end → start into closed loops (sharpest left turn at a junction). */
export function chain(pieces) {
  const used = new Array(pieces.length).fill(false);
  const loops = [];
  const G = JOIN * 10;
  const cell = (p) => [Math.round(p[0] / G), Math.round(p[1] / G)];
  const starts = new Map();
  pieces.forEach((p, i) => { const k = cell(p.s).join(','); if (!starts.has(k)) starts.set(k, []); starts.get(k).push(i); });
  const near = (q) => {
    const [a, b] = cell(q), out = [];
    for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const k of starts.get((a + i) + ',' + (b + j)) || []) if (!used[k] && dist(pieces[k].s, q) < JOIN * 4) out.push(k);
    return out;
  };
  const turn = (p, q) => { const a = tangentAt(p, 1), b = tangentAt(q, 0); return Math.atan2(crs(a, b), dot(a, b)); };
  for (let i0 = 0; i0 < pieces.length; i0++) {
    if (used[i0]) continue;
    const loop = [pieces[i0]];
    used[i0] = true;
    let closed = false;
    for (let guard = 0; guard < 100000; guard++) {
      const cur = loop[loop.length - 1];
      const home = dist(cur.e, loop[0].s) < JOIN * 4;
      let best = -1, bt = home ? turn(cur, loop[0]) : -Infinity;
      for (const j of near(cur.e)) { const t = turn(cur, pieces[j]); if (t > bt) { bt = t; best = j; } }
      if (best < 0) { closed = home; break; }
      used[best] = true;
      loop.push(pieces[best]);
    }
    if (!closed) continue;
    // make the joints exact: each prim starts where the previous ends
    for (let k = 0; k < loop.length; k++) {
      const p = loop[k], j = (k + 1) % loop.length, q = loop[j];
      if (p.e !== q.s) loop[j] = q.k === 'L' ? line(p.e, q.e) : arc(q.c, q.r, q.a0, q.sw, p.e, q === p ? p.e : q.e);
    }
    loops.push(loop);
  }
  return loops;
}

/** Merge collinear lines and arcs on one circle; drop pieces shorter than the join tolerance. */
export function mergeLoop(loop) {
  let l = loop.filter((p) => lengthOf(p) > JOIN * 0.1);
  if (l.length < 2) return l;
  const can = (p, q) => {
    if (p.k !== q.k) return false;
    if (p.k === 'L') { const u = unit(sub(p.e, p.s)), v = unit(sub(q.e, q.s)); return dot(u, v) > 0 && Math.abs(crs(u, v)) < 1e-10 && distToLineInf(q.e, p) < 1e-9; }
    return dist(p.c, q.c) < 1e-9 && Math.abs(p.r - q.r) < 1e-9 && Math.sign(p.sw) === Math.sign(q.sw) && Math.abs(p.sw + q.sw) <= TAU + 1e-12;
  };
  const join = (p, q) => (p.k === 'L' ? line(p.s, q.e) : arc(p.c, p.r, p.a0, p.sw + q.sw, p.s, q.e));
  let changed = true;
  while (changed && l.length > 1) {
    changed = false;
    const out = [];
    for (const p of l) {
      if (out.length && can(out[out.length - 1], p)) { out[out.length - 1] = join(out[out.length - 1], p); changed = true; } else out.push(p);
    }
    if (out.length > 1 && can(out[out.length - 1], out[0])) { out[0] = join(out[out.length - 1], out[0]); out.pop(); changed = true; }
    l = out;
  }
  return l;
}
function distToLineInf(q, p) { const u = unit(sub(p.e, p.s)); return Math.abs(crs(u, sub(q, p.s))); }

// ---------------------------------------------------------------- helpers for paths

/** Start a closed loop at the point nearest q (splitting the prim there) → { loop, d }. */
export function startNearest(loop, q) {
  let best = null;
  loop.forEach((p, i) => { const c = closestOnPrim(q, p); if (!best || c.d < best.d - 1e-12) best = { i, ...c }; });
  const p = loop[best.i];
  const L = lengthOf(p);
  const rest = loop.slice(best.i + 1).concat(loop.slice(0, best.i));
  if (best.t * L <= JOIN) return { loop: [p, ...rest], d: best.d };
  if ((1 - best.t) * L <= JOIN) return { loop: [...rest, p], d: best.d };
  const x = best.p;
  if (p.k === 'A' && Math.abs(p.sw) >= TAU - 1e-12) {
    const a = Math.atan2(x[1] - p.c[1], x[0] - p.c[0]);
    return { loop: [arc(p.c, p.r, a, p.sw, x, x), ...rest], d: best.d };
  }
  return { loop: [subPrim(p, best.t, 1, x, p.e), ...rest, subPrim(p, 0, best.t, p.s, x)], d: best.d };
}

/** Split arcs so none sweeps more than maxSweep (every control reads ≤ 180° arcs the same way). */
export function limitArcs(loop, maxSweep = Math.PI) {
  const out = [];
  for (const p of loop) {
    if (p.k !== 'A' || Math.abs(p.sw) <= maxSweep + 1e-12) { out.push(p); continue; }
    const n = Math.ceil(Math.abs(p.sw) / maxSweep - 1e-12);
    let s = p.s;
    for (let i = 0; i < n; i++) {
      const e = i === n - 1 ? p.e : polar(p.c, p.r, p.a0 + p.sw * (i + 1) / n);
      out.push(arc(p.c, p.r, p.a0 + p.sw * i / n, p.sw / n, s, e));
      s = e;
    }
  }
  return out;
}

/** Points along a prim no farther than chord tolerance tol from it (for drawing and tests). */
export function samplePrim(p, tol = 0.01, maxStep = Infinity) {
  if (p.k === 'L') {
    const L = lengthOf(p), n = Math.max(1, Math.ceil(L / maxStep));
    return Array.from({ length: n + 1 }, (_, i) => pointAt(p, i / n));
  }
  const da = p.r > tol ? 2 * Math.acos(Math.max(-1, 1 - tol / p.r)) : Math.PI / 2;
  const n = Math.max(2, Math.ceil(Math.abs(p.sw) / da), Math.ceil(lengthOf(p) / maxStep));
  return Array.from({ length: n + 1 }, (_, i) => pointAt(p, i / n));
}

/** Split a loop at arc lengths (sorted, 0..total) → list of prim lists between them. */
export function splitAtLengths(loop, cuts) {
  const out = [[]];
  let acc = 0, ci = 0;
  for (const p0 of loop) {
    let p = p0, L = lengthOf(p), base = acc;
    while (ci < cuts.length && cuts[ci] < base + L - JOIN) {
      if (cuts[ci] <= base + JOIN) { if (out[out.length - 1].length) out.push([]); ci++; continue; }
      const t = (cuts[ci] - base) / L;
      const x = pointAt(p, t);
      out[out.length - 1].push(subPrim(p, 0, t, p.s, x));
      out.push([]);
      p = subPrim(p, t, 1, x, p.e);
      base = cuts[ci]; L = lengthOf(p);
      ci++;
    }
    out[out.length - 1].push(p);
    acc += lengthOf(p0);
  }
  return out;
}
