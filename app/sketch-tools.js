/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-tools.js — sketch editing tools (DOM-free; each mutates the sketch it is given, like sketch.js's builders,
 * so the editor runs it inside one commit = one undo step). Every tool returns what it made and how many existing
 * relations it dropped because they no longer describe the geometry (`dropped`), so the status bar can say so.
 *
 *   trim(sk, id, at)              remove the piece of a line / arc / circle / spline under `at` up to the nearest
 *                                 crossings (none: the whole curve). Lines and arcs keep their direction relations;
 *                                 lengths, equal, midpoint and fix on them are dropped; a trimmed circle becomes an
 *                                 arc; a spline piece becomes an exact control-point spline (knot insertion). New ends
 *                                 are tied to the curve that cut them (point on line / arc / circle, or coincident
 *                                 with its end); a spline cutter adds no relation (there is no point-on-spline).
 *   extend(sk, id, at)            move the end of a line or arc nearest `at` to the next crossing along it.
 *   chainOf(sk, id) / offset(sk, chain, d, {link})
 *                                 offset a chain or loop of lines / arcs / splines (or a circle) by d to the left of
 *                                 its direction (d < 0: right). Lines and arcs exactly, corners mitred (trimmed or
 *                                 extended to meet); splines by a fit spline within OFFSET_TOL. Without splines the
 *                                 copy stays parametric: one Offset dimension (+ offset links) drives it; with a spline
 *                                 it is a one-shot copy (`parametric: false`).
 *   mirror(sk, ids, axis)         mirrored copies about a line, tied by symmetric relations (points on the axis are
 *                                 shared; circles get an equal relation).
 *   addPolygon(sk, c, v, n)       regular n-gon inscribed in a construction circle (equal sides).
 *   addSlot(sk, a, b, w)          straight slot: two tangent lines and two equal half circles.
 *   patternLinear / patternCircular   copies of the selection (one-shot; relations inside it copied when they
 *                                 survive the move: translation keeps all but fix, rotation drops H/V and fix).
 */
import * as S from './sketch.js';
import * as SP from './sketch-spline.js';
import { t as tr } from './i18n.js';
import { curveOf, intersect, paramOf, pointOn, rangeOf, normAng, tangentOn } from './sketch-intersect.js';
import { dist2 as dist, dot3 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const OFFSET_TOL = 0.001;   // mm: spline offsets are fitted within this

const tolOf = (sk) => 1e-7 * Math.max(1, S.extent(sk));
const setPt = (sk, id, [x, y]) => { const p = S.byId(sk, id); p.x = x; p.y = y; };
const usedBy = (sk, pid, except) => sk.entities.some((e) => e.type !== 'point' && e.id !== except && S.pointsOf(e).includes(pid));
const snapshot = (sk) => new Set(sk.constraints.map((c) => c.id));
const droppedSince = (sk, before) => { const now = new Set(sk.constraints.map((c) => c.id)); let n = 0; for (const id of before) if (!now.has(id)) n++; return n; };

/** Relations on a line that still hold for a shorter piece of it (all are about the infinite line). */
function lineKeeps(sk, c) {
  if (['horizontal', 'vertical', 'parallel', 'perpendicular', 'angle', 'coincident', 'tangent', 'symmetric', 'offset', 'offsetlink'].includes(c.type)) return true;
  if (c.type === 'distance') { const m = S.matchSig(sk, c.type, c.refs); return m && m.sig !== 'L'; }
  return false;
}
/** Relations on an arc / circle that hold for any piece of its circle. */
const roundKeeps = (c) => ['radius', 'diameter', 'concentric', 'tangent', 'equal', 'coincident', 'offset', 'offsetlink'].includes(c.type);

/** Point-level relations go with a moved end; curve-level ones the curve no longer meets are dropped. */
function dropOnPoint(sk, pid) { sk.constraints = sk.constraints.filter((c) => !c.refs.includes(pid)); }
function filterCurve(sk, id, keep) { S.removeConstraints(sk, sk.constraints.filter((c) => c.refs.includes(id) && !keep(c)).map((c) => c.id)); }

/** A point of `curveId` that must move: a new one if another curve shares it. Returns the id to move. */
function ownPoint(sk, e, key) {
  const pid = e[key];
  if (!usedBy(sk, pid, e.id)) return pid;
  const q = S.pointXY(sk, pid);
  const id = S.addPoint(sk, q[0], q[1]);
  e[key] = id;
  return id;
}

/** Tie a new end point to the curve that cut it there. */
function tieTo(sk, pid, cutter) {
  if (!cutter) return;
  const at = S.pointXY(sk, pid), tol = 1e3 * tolOf(sk);
  for (const q of S.endsOf(cutter)) if (dist(S.pointXY(sk, q), at) <= tol) { try { S.addConstraint(sk, 'coincident', [pid, q]); } catch { /* */ } return; }
  if (cutter.type === 'line' || cutter.type === 'circle' || cutter.type === 'arc') { try { S.addConstraint(sk, 'coincident', [pid, cutter.id]); } catch { /* */ } }
}

/** Crossings of curve e with every other curve: [{ t, p, by }] sorted by t (its own end points left out). */
export function crossings(sk, e) {
  const cv = curveOf(sk, e), tol = 1e3 * tolOf(sk);
  const r = rangeOf(cv);
  const ends = r.periodic ? [] : [pointOn(cv, r.lo), pointOn(cv, r.hi)];
  const out = [];
  for (const o of sk.entities) {
    if (o.id === e.id || o.type === 'point') continue;
    let co;
    try { co = curveOf(sk, o); } catch { continue; }
    for (const x of intersect(cv, co)) {
      if (ends.some((q) => dist(q, x.p) <= tol)) continue;
      if (out.some((y) => dist(y.p, x.p) <= tol)) continue;
      out.push({ t: x.ta, p: x.p, by: o });
    }
  }
  return { cv, cuts: out.sort((a, b) => a.t - b.t), range: r };
}

// ---------------------------------------------------------------- trim

/** The piece trim would remove at `at`: { cv, a, b, hi, period } parameters (b may pass hi on a closed curve), or null. */
export function trimPiece(sk, id, at) {
  const e = S.byId(sk, id);
  if (!e || e.type === 'point') return null;
  let x;
  try { x = crossings(sk, e); } catch { return null; }
  const { cv, cuts, range } = x;
  let tc = paramOf(cv, at);
  if (range.periodic) {
    const T = range.hi - range.lo;
    if (cuts.length < 2) return { cv, a: range.lo, b: range.hi, hi: range.hi, period: 0 };
    let lo = null, hi = null;
    for (const c of cuts) { if (c.t < tc) lo = c; if (c.t > tc && !hi) hi = c; }
    const a = (lo || cuts[cuts.length - 1]).t, b0 = (hi || cuts[0]).t;
    return { cv, a, b: b0 > a ? b0 : b0 + T, hi: range.hi, period: T };
  }
  if (cv.kind === 'arc' && tc > cv.sweep) tc = tc - cv.sweep < 2 * Math.PI - tc ? cv.sweep : 0;
  tc = Math.max(range.lo, Math.min(range.hi, tc));
  let a = range.lo, b = range.hi;
  for (const c of cuts) { if (c.t < tc) a = c.t; if (c.t > tc && b === range.hi) b = Math.min(b, c.t); }
  return { cv, a, b, hi: range.hi, period: 0 };
}

/**
 * Trim the piece of curve `id` under sketch point `at`. → { removed: 'curve'|'piece', made: [ids], dropped }.
 * Throws with a plain message when there is nothing it can do.
 */
export function trim(sk, id, at) {
  const e = S.byId(sk, id);
  if (!e || e.type === 'point' || e.origin) throw new Error(tr('model.sketch_tools.trim_pick'));
  const before = snapshot(sk);
  const { cv, cuts, range } = crossings(sk, e);
  let tc = paramOf(cv, at);
  if (!range.periodic) tc = Math.max(range.lo, Math.min(range.hi, cv.kind === 'arc' && tc > cv.sweep ? (tc - cv.sweep < 2 * Math.PI - tc ? cv.sweep : 0) : tc));
  const done = (removed, made = []) => ({ removed, made, dropped: droppedSince(sk, before) });
  if (range.periodic) {
    if (cuts.length < 2) { S.removeEntities(sk, [id]); return done('curve'); }
    let a = null, b = null;
    for (const c of cuts) { if (c.t < tc) a = c; if (c.t > tc && !b) b = c; }
    a = a || cuts[cuts.length - 1]; b = b || cuts[0];
    // keep from b round to a
    if (e.type === 'circle') {
      const sId = S.addPoint(sk, ...b.p), eId = S.addPoint(sk, ...a.p);
      const arc = { id: 'a' + (sk.seq++), type: 'arc', c: e.c, s: sId, e: eId };
      if (e.construction) arc.construction = true;
      sk.entities.push(arc);
      filterCurve(sk, id, roundKeeps);
      for (const c of sk.constraints) c.refs = c.refs.map((r) => (r === id ? arc.id : r));
      sk.entities = sk.entities.filter((x) => x.id !== id);
      tieTo(sk, sId, b.by); tieTo(sk, eId, a.by);
      return done('piece', [arc.id]);
    }
    const ub = b.t, ua = a.t <= ub ? a.t + (range.hi - range.lo) : a.t;
    return done('piece', splinePieces(sk, e, cv, [[ub, ua, b, a]]));
  }
  let lo = null, hi = null;
  for (const c of cuts) { if (c.t < tc) lo = c; if (c.t > tc && !hi) hi = c; }
  if (!lo && !hi) { S.removeEntities(sk, [id]); return done('curve'); }
  if (e.type === 'line') {
    filterCurve(sk, id, (c) => lineKeeps(sk, c));
    if (!lo) { const p = ownPoint(sk, e, 'p1'); dropOnPoint(sk, p); setPt(sk, p, hi.p); tieTo(sk, p, hi.by); return done('piece', [id]); }
    if (!hi) { const p = ownPoint(sk, e, 'p2'); dropOnPoint(sk, p); setPt(sk, p, lo.p); tieTo(sk, p, lo.by); return done('piece', [id]); }
    // split: this line keeps p1 → lo; a new one runs hi → p2 on the same infinite line
    const p2 = e.p2;
    const nA = S.addPoint(sk, ...lo.p), nB = S.addPoint(sk, ...hi.p);
    e.p2 = nA;
    const l2 = { id: 'l' + (sk.seq++), type: 'line', p1: nB, p2 };
    if (e.construction) l2.construction = true;
    sk.entities.push(l2);
    for (const q of [nB, p2]) { try { S.addConstraint(sk, 'coincident', [q, id]); } catch { /* */ } }
    tieTo(sk, nA, lo.by); tieTo(sk, nB, hi.by);
    return done('piece', [id, l2.id]);
  }
  if (e.type === 'arc') {
    filterCurve(sk, id, roundKeeps);
    if (!lo) { const p = ownPoint(sk, e, 's'); dropOnPoint(sk, p); setPt(sk, p, hi.p); tieTo(sk, p, hi.by); return done('piece', [id]); }
    if (!hi) { const p = ownPoint(sk, e, 'e'); dropOnPoint(sk, p); setPt(sk, p, lo.p); tieTo(sk, p, lo.by); return done('piece', [id]); }
    const end = e.e;
    const nA = S.addPoint(sk, ...lo.p), nB = S.addPoint(sk, ...hi.p);
    e.e = nA;
    const a2 = { id: 'a' + (sk.seq++), type: 'arc', c: e.c, s: nB, e: end };
    if (e.construction) a2.construction = true;
    sk.entities.push(a2);
    S.addConstraint(sk, 'equal', [id, a2.id]);
    tieTo(sk, nA, lo.by); tieTo(sk, nB, hi.by);
    return done('piece', [id, a2.id]);
  }
  // open spline
  const keep = [];
  if (lo) keep.push([range.lo, lo.t, null, lo]);
  if (hi) keep.push([hi.t, range.hi, hi, null]);
  return done('piece', splinePieces(sk, e, cv, keep));
}

/**
 * Replace spline e by exact control-point pieces over the parameter ranges [[ua, ub, cutA, cutB]…]
 * (cut = the crossing at that end, null = the spline's own end, which keeps its point and tangent relations).
 */
function splinePieces(sk, e, cv, ranges) {
  const made = [];
  const remap = new Map();   // old end point id → new spline id (tangent relations follow)
  for (const [ua, ub, ca, cb] of ranges) {
    const seg = SP.normalizeKnots(SP.segment(cv.bs, ua, ub));
    const n = seg.poles.length;
    const ids = seg.poles.map((q, i) => {
      if (i === 0 && !ca && !e.closed) return e.pts[0];
      if (i === n - 1 && !cb && !e.closed) return e.pts[e.pts.length - 1];
      return S.addPoint(sk, q[0], q[1]);
    });
    const r = S.addSpline(sk, ids, { kind: 'control', knots: seg.knots, construction: e.construction });
    made.push(r.id);
    if (!ca) remap.set(e.pts[0], r.id);
    if (!cb) remap.set(e.pts[e.pts.length - 1], r.id);
    if (ca) tieTo(sk, ids[0], ca.by);
    if (cb) tieTo(sk, ids[n - 1], cb.by);
  }
  // tangent relations at an end that survives move to the piece that has it; the rest go with the old spline
  for (const c of sk.constraints) {
    if (c.type !== 'tangent' || !c.refs.includes(e.id)) continue;
    const meet = S.endMeet(sk, e, S.byId(sk, c.refs.find((r) => r !== e.id)));
    const to = meet && remap.get(meet[0]);
    if (to) c.refs = c.refs.map((r) => (r === e.id ? to : r));
  }
  S.removeEntities(sk, [e.id]);
  return made;
}

// ---------------------------------------------------------------- extend

/** Extend the end of line / arc `id` nearest `at` to the next curve it meets. → { made, dropped }. */
export function extend(sk, id, at) {
  const e = S.byId(sk, id);
  if (!e || (e.type !== 'line' && e.type !== 'arc')) throw new Error(tr('model.sketch_tools.extend_pick'));
  const before = snapshot(sk);
  const cv = curveOf(sk, e), tol = 1e3 * tolOf(sk);
  const key = e.type === 'line' ? (dist(at, S.pointXY(sk, e.p1)) < dist(at, S.pointXY(sk, e.p2)) ? 'p1' : 'p2') : (dist(at, S.pointXY(sk, e.s)) < dist(at, S.pointXY(sk, e.e)) ? 's' : 'e');
  let best = null;
  for (const o of sk.entities) {
    if (o.id === id || o.type === 'point') continue;
    let co;
    try { co = curveOf(sk, o); } catch { continue; }
    for (const x of intersect(cv, co, { infA: true })) {
      // how far past the end, along the curve
      let gap;
      if (e.type === 'line') { const L = dist(cv.a, cv.b); gap = key === 'p2' ? (x.ta - 1) * L : -x.ta * L; }
      else gap = key === 'e' ? (x.ta - cv.sweep) * cv.r : (2 * Math.PI - x.ta) * cv.r;
      if (e.type === 'arc' && x.ta <= cv.sweep + 1e-12) continue;
      if (!(gap > tol)) continue;
      if (!best || gap < best.gap) best = { gap, p: x.p, by: o };
    }
  }
  if (!best) throw new Error(tr('model.sketch_tools.extend_nothing'));
  const pid = ownPoint(sk, e, key);
  dropOnPoint(sk, pid);
  if (e.type === 'line') filterCurve(sk, id, (c) => lineKeeps(sk, c));
  else filterCurve(sk, id, roundKeeps);
  setPt(sk, pid, best.p);
  tieTo(sk, pid, best.by);
  return { made: [id], dropped: droppedSince(sk, before) };
}

// ---------------------------------------------------------------- offset

/** End positions of a curve (open ones only). */
function endXY(sk, e) {
  const ends = S.endsOf(e);
  return ends.length ? ends.map((p) => S.pointXY(sk, p)) : null;
}

/**
 * The chain through curve `id`: connected (by end positions) curves of the same kind (profile or construction),
 * stopping where more than two ends meet. → { items: [{ id, fwd }], closed }. `ids` limits it to a selection.
 */
export function chainOf(sk, id, ids = null) {
  const e0 = S.byId(sk, id);
  if (!e0 || e0.type === 'point') throw new Error(tr('model.sketch_tools.offset_pick'));
  if (!endXY(sk, e0)) return { items: [{ id, fwd: true }], closed: true };
  const tol = 1e3 * tolOf(sk);
  const pool = sk.entities.filter((e) => e.type !== 'point' && endXY(sk, e) && !!e.construction === !!e0.construction && (!ids || ids.includes(e.id)));
  const atNode = (p, except) => pool.filter((e) => e.id !== except && endXY(sk, e).some((q) => dist(p, q) <= tol));
  const items = [{ id, fwd: true }];
  const used = new Set([id]);
  const walk = (forward) => {
    let cur = e0, fwd = true;
    for (;;) {
      const [a, b] = endXY(sk, cur);
      const p = forward === fwd ? b : a;
      const all = atNode(p, cur.id);
      if (all.length !== 1) return false;
      const nx = all[0];
      if (used.has(nx.id)) return nx.id === id;
      const [na] = endXY(sk, nx);
      const nf = forward ? dist(na, p) <= tol : dist(na, p) > tol;
      used.add(nx.id);
      if (forward) items.push({ id: nx.id, fwd: nf }); else items.unshift({ id: nx.id, fwd: nf });
      cur = nx; fwd = nf;
    }
  };
  const closed = walk(true);
  if (!closed) walk(false);
  return { items, closed };
}

/** Which side of the chain p is on (+1 left of its direction, −1 right) and how far from it. */
export function offsetSide(sk, chain, p) {
  let best = null;
  for (const it of chain.items) {
    const cv = curveOf(sk, S.byId(sk, it.id));
    const r = rangeOf(cv);
    let t = paramOf(cv, p);
    if (!r.periodic) t = cv.kind === 'arc' ? (t > cv.sweep ? (t - cv.sweep < 2 * Math.PI - t ? cv.sweep : 0) : t) : Math.max(r.lo, Math.min(r.hi, t));
    const q = pointOn(cv, t), d = dist(p, q);
    if (!best || d < best.d) {
      let tg = tangentOn(cv, t);
      if (!it.fwd) tg = [-tg[0], -tg[1]];
      const side = tg[0] * (p[1] - q[1]) - tg[1] * (p[0] - q[0]) >= 0 ? 1 : -1;
      best = { d, side };
    }
  }
  return best;
}

/**
 * Offset a chain (chainOf) by d to its left. `link`: an existing Offset dimension id the copy follows (both sides).
 * → { made: [ids], master: constraint id | null, parametric, err (largest spline fit error) }.
 */
export function offset(sk, chain, d, { link = null } = {}) {
  if (!(Math.abs(d) > 0)) throw new Error(tr('model.sketch_tools.offset_zero'));
  const tol = 1e3 * tolOf(sk);
  // each item as a travel-oriented element: line {S, E, dir}, arc {c, r, ccw, S, E, sweep0}, spline {Q, a0, a1}, closed {circle | spline}
  const els = chain.items.map(({ id, fwd }) => {
    const e = S.byId(sk, id);
    if (e.type === 'line') {
      let a = S.pointXY(sk, e.p1), b = S.pointXY(sk, e.p2);
      if (!fwd) [a, b] = [b, a];
      const l = dist(a, b), n = [-(b[1] - a[1]) / l, (b[0] - a[0]) / l];
      return { e, kind: 'line', S: [a[0] + d * n[0], a[1] + d * n[1]], E: [b[0] + d * n[0], b[1] + d * n[1]], dir: [b[0] - a[0], b[1] - a[1]] };
    }
    if (e.type === 'circle') {
      const r = e.r - d;
      if (!(r > tol)) throw new Error(tr('model.sketch_tools.offset_circle'));
      return { e, kind: 'circle', c: S.pointXY(sk, e.c), r };
    }
    if (e.type === 'arc') {
      const { c, r: r0, a0, sweep } = S.arcAngles(sk, e);
      const r = fwd ? r0 - d : r0 + d;
      if (!(r > tol)) throw new Error(tr('model.sketch_tools.offset_arc'));
      const at = (ang) => [c[0] + r * Math.cos(ang), c[1] + r * Math.sin(ang)];
      return { e, kind: 'arc', c, r, ccw: fwd, S: at(fwd ? a0 : a0 + sweep), E: at(fwd ? a0 + sweep : a0), sweep0: sweep };
    }
    // spline
    let bs = S.splineCurve(sk, e);
    if (e.closed) { const f = SP.offsetFit(bs, d, OFFSET_TOL); return { e, kind: 'cspline', Q: f.Q, err: f.err }; }
    if (!fwd) bs = SP.reverse(bs);
    const f = SP.offsetFit(bs, d, OFFSET_TOL);
    return { e, kind: 'spline', Q: f.Q, a0: f.a0, a1: f.a1, S: f.Q[0], E: f.Q[f.Q.length - 1], err: f.err };
  });
  const hasSpline = els.some((x) => x.kind === 'spline' || x.kind === 'cspline');
  // corners: mitre lines and arcs to meet; splines must join smoothly
  const n = els.length, open = !chain.closed || els[0].kind === 'circle' || els[0].kind === 'cspline';
  const full = (x) => (x.kind === 'line' ? { kind: 'line', a: x.S, b: x.E } : { kind: 'circle', c: x.c, r: x.r });
  if (!(els[0].kind === 'circle' || els[0].kind === 'cspline')) {
    for (let i = 0; i < (open ? n - 1 : n); i++) {
      const A = els[i], B = els[(i + 1) % n];
      if (dist(A.E, B.S) <= tol) { B.S = A.E; continue; }
      if (A.kind === 'spline' || B.kind === 'spline') throw new Error(tr('model.sketch_tools.offset_spline_joins'));
      const mid = [(A.E[0] + B.S[0]) / 2, (A.E[1] + B.S[1]) / 2];
      const xs = intersect(full(A), full(B), { infA: true, infB: true });
      if (!xs.length) throw new Error(tr('model.sketch_tools.offset_corner', { x: +mid[0].toFixed(3), y: +mid[1].toFixed(3) }));
      const X = xs.reduce((m, x) => (dist(x.p, mid) < dist(m.p, mid) ? x : m)).p;
      A.E = X; B.S = X;
    }
  }
  // nothing turned inside out
  for (const x of els) {
    if (x.kind === 'line' && ((x.E[0] - x.S[0]) * x.dir[0] + (x.E[1] - x.S[1]) * x.dir[1]) <= 0) throw new Error(tr('model.sketch_tools.offset_side_inside_out'));
    if (x.kind === 'arc') {
      const ang = (p) => Math.atan2(p[1] - x.c[1], p[0] - x.c[0]);
      const sw = x.ccw ? normAng(ang(x.E) - ang(x.S)) : normAng(ang(x.S) - ang(x.E));
      if (Math.abs(sw - x.sweep0) > Math.PI || sw < 1e-9) throw new Error(tr('model.sketch_tools.offset_arc_inside_out'));
    }
  }
  // build
  const made = [];
  const ends = [];   // [startPointId, endPointId] per element
  for (const x of els) {
    const cons = x.e.construction ? { construction: true } : {};
    if (x.kind === 'line') { const r = S.addLine(sk, x.S, x.E, cons); x.id = r.id; ends.push([r.p1, r.p2]); }
    else if (x.kind === 'circle') { const r = S.addCircle(sk, x.c, x.r, cons); x.id = r.id; ends.push(null); }
    else if (x.kind === 'arc') {
      const r = x.ccw ? S.addArc(sk, x.c, x.S, x.E, cons) : S.addArc(sk, x.c, x.E, x.S, cons);
      x.id = r.id; ends.push(x.ccw ? [r.s, r.e] : [r.e, r.s]);
    } else if (x.kind === 'cspline') { const r = S.addSpline(sk, x.Q, { kind: 'fit', closed: true, ...cons }); x.id = r.id; ends.push(null); }
    else {
      x.Q[0] = x.S; x.Q[x.Q.length - 1] = x.E;
      const r = S.addSpline(sk, x.Q, { kind: 'fit', a0: x.a0, a1: x.a1, ...cons }); x.id = r.id; ends.push([r.pts[0], r.pts[r.pts.length - 1]]);
    }
    made.push(x.id);
  }
  if (ends[0]) for (let i = 0; i < (open ? n - 1 : n); i++) S.addConstraint(sk, 'coincident', [ends[i][1], ends[(i + 1) % n][0]]);
  let master = null;
  if (!hasSpline) {
    els.forEach((x, i) => {
      if (i === 0 && !link) { const m = S.addConstraint(sk, 'offset', [x.e.id, x.id]); m.value = Math.abs(d); master = m.id; }
      else S.addConstraint(sk, 'offsetlink', [x.e.id, x.id], undefined, { of: link || master });
    });
  }
  return { made, master: master || link, parametric: !hasSpline, err: Math.max(0, ...els.map((x) => x.err || 0)) };
}

// ---------------------------------------------------------------- copies (mirror, patterns)

/**
 * Copy entities `ids` (curves bring their points) with point map `f([x, y]) → [x, y]`. `same(pid)` → reuse that
 * point instead of copying it. `flip`: orientation reverses (arcs swap ends, spline angles reflect via `ang`).
 * → { map: Map(old → new), made: [ids] }.
 */
function copyEntities(sk, ids, f, { flip = false, ang = (a) => a, same = () => false } = {}) {
  const take = new Set();
  for (const id of ids) {
    const e = S.byId(sk, id);
    if (!e || e.origin) continue;
    take.add(id);
    if (e.type !== 'point') for (const p of S.pointsOf(e)) take.add(p);
  }
  const map = new Map([[S.ORIGIN, S.ORIGIN]]);
  const made = [];
  const src = sk.entities.filter((e) => take.has(e.id));
  for (const e of src.filter((x) => x.type === 'point')) {
    if (same(e.id)) { map.set(e.id, e.id); continue; }
    const id = S.addPoint(sk, ...f([e.x, e.y]), { construction: e.construction });
    map.set(e.id, id); made.push(id);
  }
  for (const e of src.filter((x) => x.type !== 'point')) {
    const n = JSON.parse(JSON.stringify(e));
    n.id = { line: 'l', circle: 'c', arc: 'a', spline: 's' }[e.type] + (sk.seq++);
    for (const k of ['p1', 'p2', 'c', 's', 'e']) if (typeof n[k] === 'string') n[k] = map.get(n[k]);
    if (n.pts) n.pts = n.pts.map((p) => map.get(p));
    if (flip && n.type === 'arc') [n.s, n.e] = [n.e, n.s];
    for (const k of ['a0', 'a1']) if (Number.isFinite(n[k])) n[k] = ang(n[k]);
    sk.entities.push(n);
    map.set(e.id, n.id); made.push(n.id);
  }
  return { map, made };
}

/** Copy the relations among copied entities that `keep` accepts (fix values move with `f`). */
function copyRelations(sk, map, keep, f) {
  const src = sk.constraints.slice();
  for (const c of src) {
    if (!c.refs.every((r) => map.has(r)) || c.refs.every((r) => map.get(r) === r) || !keep(c)) continue;
    const n = JSON.parse(JSON.stringify(c));
    n.id = 'k' + (sk.seq++);
    n.refs = c.refs.map((r) => map.get(r));
    if (n.type === 'offsetlink') { if (!map.has('k:' + c.of)) continue; n.of = map.get('k:' + c.of); }
    if (n.type === 'fix' && f) { const e = S.byId(sk, n.refs[0]); const pairs = e.type === 'circle' ? 1 : n.value.length / 2; for (let i = 0; i < pairs; i++) [n.value[2 * i], n.value[2 * i + 1]] = f([n.value[2 * i], n.value[2 * i + 1]]); }
    delete n.at;
    sk.constraints.push(n);
    map.set('k:' + c.id, n.id);
  }
}

/** Mirror entities about line `axis`; mirror copies are tied by symmetric relations. → { made, dropped: 0, relations }. */
export function mirror(sk, ids, axis) {
  const L = S.byId(sk, axis);
  if (!L || L.type !== 'line') throw new Error(tr('model.sketch_tools.mirror_line'));
  const a = S.pointXY(sk, L.p1), b = S.pointXY(sk, L.p2);
  const l = dist(a, b);
  if (!(l > 0)) throw new Error(tr('model.sketch_tools.mirror_no_length'));
  const u = [(b[0] - a[0]) / l, (b[1] - a[1]) / l];
  const refl = ([x, y]) => { const t = (x - a[0]) * u[0] + (y - a[1]) * u[1], q = [a[0] + t * u[0], a[1] + t * u[1]]; return [2 * q[0] - x, 2 * q[1] - y]; };
  const phi = Math.atan2(u[1], u[0]);
  const tol = 1e3 * tolOf(sk);
  const onAxis = (pid) => { const p = S.pointXY(sk, pid); return Math.abs((p[0] - a[0]) * u[1] - (p[1] - a[1]) * u[0]) <= tol; };
  const sel = ids.filter((id) => id !== axis && id !== L.p1 && id !== L.p2 && id !== S.ORIGIN);
  if (!sel.length) throw new Error(tr('model.sketch_tools.mirror_select'));
  const { map, made } = copyEntities(sk, sel, refl, { flip: true, ang: (t) => 2 * phi - t, same: onAxis });
  let relations = 0;
  for (const [o, n] of map) {
    const e = S.byId(sk, o);
    if (!e || o === S.ORIGIN) continue;
    if (e.type === 'point') {
      if (o === n) {
        if (!sk.constraints.some((c) => c.type === 'coincident' && c.refs.includes(o) && c.refs.includes(axis))) { try { S.addConstraint(sk, 'coincident', [o, axis]); relations++; } catch { /* */ } }
      } else { S.addConstraint(sk, 'symmetric', [o, n, axis]); relations++; }
    } else if (e.type === 'circle') { S.addConstraint(sk, 'equal', [o, n]); relations++; }
  }
  return { made, dropped: 0, relations };
}

const TRANSLATION_KEEPS = (c) => c.type !== 'fix';
const ROTATION_KEEPS = (c) => !['fix', 'horizontal', 'vertical', 'hdistance', 'vdistance'].includes(c.type);

/** `count` copies (count ≥ 2 including the original) stepped by [dx, dy]. One-shot. */
export function patternLinear(sk, ids, [dx, dy], count) {
  if (!(count >= 2) || count > 200 || !Number.isInteger(count)) throw new Error(tr('model.sketch_tools.pattern_count'));
  const made = [];
  for (let i = 1; i < count; i++) {
    const f = ([x, y]) => [x + dx * i, y + dy * i];
    const r = copyEntities(sk, ids, f);
    copyRelations(sk, r.map, TRANSLATION_KEEPS, f);
    made.push(...r.made);
  }
  return { made, dropped: 0 };
}

/** `count` copies round centre c over `angle` degrees (360 = evenly round). One-shot. */
export function patternCircular(sk, ids, c, count, angle = 360) {
  if (!(count >= 2) || count > 200 || !Number.isInteger(count)) throw new Error(tr('model.sketch_tools.pattern_count'));
  if (!(angle > 0 && angle <= 360)) throw new Error(tr('model.sketch_tools.pattern_angle'));
  const step = (angle >= 360 ? 360 / count : angle / (count - 1)) * Math.PI / 180;
  const made = [];
  for (let i = 1; i < count; i++) {
    const th = step * i, co = Math.cos(th), si = Math.sin(th);
    const f = ([x, y]) => [c[0] + co * (x - c[0]) - si * (y - c[1]), c[1] + si * (x - c[0]) + co * (y - c[1])];
    const r = copyEntities(sk, ids, f, { ang: (t) => t + th });
    copyRelations(sk, r.map, ROTATION_KEEPS, f);
    made.push(...r.made);
  }
  return { made, dropped: 0 };
}

// ---------------------------------------------------------------- polygon, slot

/** Regular polygon: centre c, first vertex v, n sides, inscribed in a construction circle. */
export function addPolygon(sk, c, v, n) {
  if (!Number.isInteger(n) || n < 3 || n > 64) throw new Error(tr('model.sketch_tools.polygon_sides'));
  const r = dist(c, v);
  if (!(r > 0)) throw new Error(tr('model.sketch_tools.polygon_size'));
  const a0 = Math.atan2(v[1] - c[1], v[0] - c[0]);
  const circ = S.addCircle(sk, c, r, { construction: true });
  const corners = [];
  for (let i = 0; i < n; i++) corners.push([c[0] + r * Math.cos(a0 + 2 * Math.PI * i / n), c[1] + r * Math.sin(a0 + 2 * Math.PI * i / n)]);
  const lines = [];
  for (let i = 0; i < n; i++) lines.push(S.addLine(sk, corners[i], corners[(i + 1) % n]));
  for (let i = 0; i < n; i++) {
    S.addConstraint(sk, 'coincident', [lines[i].p2, lines[(i + 1) % n].p1]);
    S.addConstraint(sk, 'coincident', [lines[i].p1, circ.id]);
    if (i) S.addConstraint(sk, 'equal', [lines[0].id, lines[i].id]);
  }
  return { circle: circ.id, lines: lines.map((x) => x.id), made: [circ.id, ...lines.map((x) => x.id)] };
}

/** Straight slot between centres a and b, width w. */
export function addSlot(sk, a, b, w) {
  const l = dist(a, b), r = w / 2;
  if (!(l > 0)) throw new Error(tr('model.sketch_tools.slot_centres'));
  if (!(r > 0)) throw new Error(tr('model.sketch_tools.slot_width'));
  const u = [(b[0] - a[0]) / l, (b[1] - a[1]) / l], n = [-u[1], u[0]];
  const P = (c, s) => [c[0] + n[0] * r * s, c[1] + n[1] * r * s];
  const ca = S.addPoint(sk, ...a), cb = S.addPoint(sk, ...b);
  const p1 = S.addPoint(sk, ...P(a, 1)), p2 = S.addPoint(sk, ...P(b, 1)), p3 = S.addPoint(sk, ...P(b, -1)), p4 = S.addPoint(sk, ...P(a, -1));
  const nid = (k) => k + (sk.seq++);
  const arcB = { id: nid('a'), type: 'arc', c: cb, s: p3, e: p2 }, arcA = { id: nid('a'), type: 'arc', c: ca, s: p1, e: p4 };
  const top = { id: nid('l'), type: 'line', p1: p2, p2: p1 }, bot = { id: nid('l'), type: 'line', p1: p4, p2: p3 };
  sk.entities.push(arcB, arcA, top, bot);
  for (const [L, A] of [[top, arcA], [top, arcB], [bot, arcA], [bot, arcB]]) S.addConstraint(sk, 'tangent', [L.id, A.id]);
  S.addConstraint(sk, 'equal', [arcA.id, arcB.id]);
  return { made: [arcA.id, arcB.id, top.id, bot.id], centres: [ca, cb], arcs: [arcA.id, arcB.id] };
}

// ---------------------------------------------------------------- project model edges

/**
 * Project an exact-kernel edge record (regen.edges: type line|circle|curve, end points a / b, circle centre / axis /
 * radius `circ`) onto the sketch plane `frame` {o, x, y, n} as fixed geometry (a Fix relation; it does not follow
 * later model changes). Lines exactly; circles and arcs exactly when their plane is parallel to the sketch.
 */
export function projectEdge(sk, frame, edge) {
  if (!edge) throw new Error(tr('model.sketch_tools.project_pick'));
  const loc = (p) => { const d = [p[0] - frame.o[0], p[1] - frame.o[1], p[2] - frame.o[2]]; return [dot(d, frame.x), dot(d, frame.y)]; };
  const tol = 1e3 * tolOf(sk);
  if (edge.type === 'line') {
    const A = loc(edge.a), B = loc(edge.b);
    if (dist(A, B) <= tol) throw new Error(tr('model.sketch_tools.project_point'));
    const l = S.addLine(sk, A, B);
    S.addConstraint(sk, 'fix', [l.id]);
    return { made: [l.id], dropped: 0, kind: 'line' };
  }
  if (edge.type === 'circle' && edge.circ) {
    const { c, n, r } = edge.circ;
    const cn = dot(n, frame.n);
    if (Math.abs(Math.abs(cn) - 1) > 1e-9) throw new Error(tr('model.sketch_tools.project_ellipse'));
    const C = loc(c);
    const A = loc(edge.a), B = loc(edge.b);
    if (dist(A, B) <= tol) { const k = S.addCircle(sk, C, r); S.addConstraint(sk, 'fix', [k.id]); return { made: [k.id], dropped: 0, kind: 'circle' }; }
    // OCCT's circle runs counter-clockwise about its own axis: the same way round in the sketch when the axes agree
    const a = cn > 0 ? S.addArc(sk, C, A, B) : S.addArc(sk, C, B, A);
    S.addConstraint(sk, 'fix', [a.id]);
    return { made: [a.id], dropped: 0, kind: 'arc' };
  }
  throw new Error(tr('model.sketch_tools.project_freeform'));
}
