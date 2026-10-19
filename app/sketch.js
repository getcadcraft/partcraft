/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch.js — the constrained 2D sketch (DOM-free). A sketch is plain JSON data so it saves as-is:
 *
 *   { seq, entities: [...], constraints: [...] }
 *   point  { id, type:'point', x, y, construction? }
 *   line   { id, type:'line', p1, p2, construction? }          p1/p2 = point ids
 *   circle { id, type:'circle', c, r, construction? }          c = point id, r = radius (a solver variable)
 *   arc    { id, type:'arc', c, s, e, construction? }          counter-clockwise from s to e about c
 *   spline { id, type:'spline', kind:'fit'|'control', pts:[ids], closed?, a0?, a1?, knots?, construction? }
 *          fit: through its points (sketch-spline.js interpFit; a0/a1 = end tangent angles, solver variables,
 *          set by a tangent relation at that end, else natural ends); control: pts are the control polygon
 *          (clamped uniform cubic, or `knots` — a clamped knot vector left by trim / offset; closed = periodic)
 *   constraint { id, type, refs:[ids], value?, sign?, kind?, off?:[dx,dy] (dimension label, from the middle of what it measures) }
 *
 * The sketch origin is the virtual point 'O' at (0, 0): always fixed, never stored.
 * Points can be shared (a fillet arc uses the trimmed lines' end points); drawing tools make
 * separate end points joined by coincident relations, as part modelers do.
 *
 * Every constraint becomes one or more scalar residual equations (`equations`), solved by
 * solver.js. Signed quantities (point-to-line distance, tangent side, angle sense, horizontal
 * distance) remember the side they were made on in `sign`, so solving never flips geometry over.
 */

import * as SP from './sketch-spline.js';
import { t as tr } from './i18n.js';

export const ORIGIN = 'O';

/** Constraint catalogue: label, argument signatures (P point, L line, R circle or arc, S spline), whether it carries a value. */
export const CONSTRAINTS = {
  coincident: { get label() { return tr('model.sketch.rel.coincident'); }, sigs: ['PP', 'PL', 'PR'], glyph: '•' },
  horizontal: { get label() { return tr('model.sketch.rel.horizontal'); }, sigs: ['L', 'PP'], glyph: 'H' },
  vertical: { get label() { return tr('model.sketch.rel.vertical'); }, sigs: ['L', 'PP'], glyph: 'V' },
  parallel: { get label() { return tr('model.sketch.rel.parallel'); }, sigs: ['LL'], glyph: '∥' },
  perpendicular: { get label() { return tr('model.sketch.rel.perpendicular'); }, sigs: ['LL'], glyph: '⊥' },
  tangent: { get label() { return tr('model.sketch.rel.tangent'); }, sigs: ['LR', 'RR', 'LS', 'RS', 'SS'], glyph: 'T' },
  equal: { get label() { return tr('model.sketch.rel.equal'); }, sigs: ['LL', 'RR'], glyph: '=' },
  concentric: { get label() { return tr('model.sketch.rel.concentric'); }, sigs: ['RR', 'PR'], glyph: '◎' },
  midpoint: { get label() { return tr('model.sketch.rel.midpoint'); }, sigs: ['PL'], glyph: 'M' },
  fix: { get label() { return tr('model.sketch.rel.fix'); }, sigs: ['P', 'L', 'R', 'S'], glyph: '⚓' },
  symmetric: { get label() { return tr('model.sketch.rel.symmetric'); }, sigs: ['PPL'], glyph: '↔' },
  offsetlink: { get label() { return tr('model.sketch.rel.offsetlink'); }, sigs: ['LL', 'RR'], glyph: 'O', auto: true },
  distance: { get label() { return tr('model.sketch.rel.distance'); }, sigs: ['PP', 'PL', 'L', 'LL'], dim: true },
  hdistance: { get label() { return tr('model.sketch.rel.hdistance'); }, sigs: ['PP', 'L'], dim: true },
  vdistance: { get label() { return tr('model.sketch.rel.vdistance'); }, sigs: ['PP', 'L'], dim: true },
  radius: { get label() { return tr('model.sketch.rel.radius'); }, sigs: ['R'], dim: true },
  diameter: { get label() { return tr('model.sketch.rel.diameter'); }, sigs: ['R'], dim: true },
  angle: { get label() { return tr('model.sketch.rel.angle'); }, sigs: ['LL'], dim: true },
  offset: { get label() { return tr('model.sketch.rel.offset'); }, sigs: ['LL', 'RR'], dim: true, auto: true },
};
// `auto` ones are made by tools (Offset), never offered for a selection
export const RELATIONS = ['coincident', 'horizontal', 'vertical', 'parallel', 'perpendicular', 'tangent', 'equal', 'concentric', 'midpoint', 'symmetric', 'fix'];
export const DIMENSIONS = ['distance', 'hdistance', 'vdistance', 'radius', 'diameter', 'angle'];

export function newSketch() { return { seq: 1, entities: [], constraints: [] }; }

export function clone(sk) { return JSON.parse(JSON.stringify(sk)); }

// ---------------------------------------------------------------- lookup

export function byId(sk, id) {
  if (id === ORIGIN) return { id: ORIGIN, type: 'point', x: 0, y: 0, origin: true };
  return sk.entities.find((e) => e.id === id) || null;
}
const kindOf = (e) => (!e ? null : e.type === 'point' ? 'P' : e.type === 'line' ? 'L' : e.type === 'spline' ? 'S' : 'R');

export function pointXY(sk, id) { const p = byId(sk, id); return p ? [p.x, p.y] : null; }

/** Radius of a circle (stored) or an arc (|s − c|). */
export function radiusOf(sk, e) {
  if (e.type === 'circle') return e.r;
  const c = pointXY(sk, e.c), s = pointXY(sk, e.s);
  return Math.hypot(s[0] - c[0], s[1] - c[1]);
}

/** Points an entity is made of (ids). */
export function pointsOf(e) {
  if (!e) return [];
  if (e.type === 'point') return [e.id];
  if (e.type === 'line') return [e.p1, e.p2];
  if (e.type === 'circle') return [e.c];
  if (e.type === 'spline') return e.pts.slice();
  return [e.c, e.s, e.e];
}

// ---------------------------------------------------------------- splines

/** Fewest points a spline keeps (fit 2, control 2; closed 3). */
export const splineMin = (e) => (e.closed ? 3 : 2);

/** The spline's curve (sketch-spline.js flat B-spline) at the current point positions. */
export function splineCurve(sk, e, Pget = (id) => pointXY(sk, id)) {
  const Q = e.pts.map(Pget);
  if (e.kind === 'control') return SP.controlCurve(Q, { closed: !!e.closed, knots: e.knots || null });
  return SP.interpFit(Q, { closed: !!e.closed, a0: Number.isFinite(e.a0) ? e.a0 : null, a1: Number.isFinite(e.a1) ? e.a1 : null });
}

/** Unit tangent of an open spline at its start ('s') or end ('e'), along the curve's direction. */
export function splineEndTangent(sk, e, end, Pget, Aget) {
  const ang = Aget ? Aget(e, end === 's' ? 'a0' : 'a1') : e[end === 's' ? 'a0' : 'a1'];
  if (e.kind === 'fit' && Number.isFinite(ang)) return [Math.cos(ang), Math.sin(ang)];
  if (e.kind === 'control') {
    const P = e.pts.map(Pget || ((id) => pointXY(sk, id)));
    const d = end === 's' ? [P[1][0] - P[0][0], P[1][1] - P[0][1]] : [P[P.length - 1][0] - P[P.length - 2][0], P[P.length - 1][1] - P[P.length - 2][1]];
    const l = Math.hypot(...d) || 1e-300; return [d[0] / l, d[1] / l];
  }
  const c = splineCurve(sk, e, Pget);
  const t = SP.derivsAt(c, SP.domain(c)[end === 's' ? 0 : 1], 1)[1], l = Math.hypot(...t) || 1e-300;
  return [t[0] / l, t[1] / l];
}

/** Points along a spline (`perSpan` per knot span; a closed one repeats its start at the end). */
export function tessSpline(sk, e, perSpan = 16) { return SP.tessellate(splineCurve(sk, e), perSpan); }

/**
 * Add a spline through (fit) or controlled by (control) the given points: [x, y] makes a new point, an id
 * reuses a point (so a spline can start on a line's end). → { id, pts }.
 */
export function addSpline(sk, pts, opts = {}) {
  const kind = opts.kind === 'control' ? 'control' : 'fit';
  const ids = pts.map((v) => (typeof v === 'string' ? v : addPoint(sk, v[0], v[1])));
  if (ids.length < (opts.closed ? 3 : 2)) throw new Error(opts.closed ? tr('model.sketch_spline.closed_three') : tr('model.sketch_spline.open_two'));
  const e = { id: nextId(sk, 's'), type: 'spline', kind, pts: ids };
  if (opts.closed) e.closed = true;
  if (opts.construction) e.construction = true;
  if (kind === 'fit' && !opts.closed) { if (Number.isFinite(opts.a0)) e.a0 = opts.a0; if (Number.isFinite(opts.a1)) e.a1 = opts.a1; }
  if (kind === 'control' && !opts.closed && opts.knots) e.knots = opts.knots.slice();
  splineCurve(sk, e);   // throws on points on top of each other
  sk.entities.push(e);
  return { id: e.id, pts: ids };
}

/** Points that no curve uses: the sketch points (hole centers). */
export function loosePoints(sk) {
  const used = new Set();
  for (const e of sk.entities) if (e.type !== 'point') for (const p of pointsOf(e)) used.add(p);
  return sk.entities.filter((e) => e.type === 'point' && !used.has(e.id));
}

export function arcAngles(sk, a) {
  const c = pointXY(sk, a.c), s = pointXY(sk, a.s), e = pointXY(sk, a.e);
  const a0 = Math.atan2(s[1] - c[1], s[0] - c[0]);
  let a1 = Math.atan2(e[1] - c[1], e[0] - c[0]);
  let sweep = a1 - a0;
  while (sweep <= 1e-12) sweep += 2 * Math.PI;
  while (sweep > 2 * Math.PI) sweep -= 2 * Math.PI;
  return { c, r: Math.hypot(s[0] - c[0], s[1] - c[1]), a0, sweep };
}

// ---------------------------------------------------------------- building

const nextId = (sk, prefix) => prefix + (sk.seq++);

export function addPoint(sk, x, y, opts = {}) {
  const p = { id: nextId(sk, 'p'), type: 'point', x, y };
  if (opts.construction) p.construction = true;
  sk.entities.push(p);
  return p.id;
}

/** a, b: [x, y] (a new point) or an existing point id (a new point + coincident relation). */
function endPoint(sk, v, made) {
  if (typeof v === 'string') {
    const q = pointXY(sk, v);
    const id = addPoint(sk, q[0], q[1]);
    made.push(addConstraint(sk, 'coincident', [id, v]).id);
    return id;
  }
  return addPoint(sk, v[0], v[1]);
}

export function addLine(sk, a, b, opts = {}) {
  const made = [];
  const p1 = endPoint(sk, a, made), p2 = endPoint(sk, b, made);
  const l = { id: nextId(sk, 'l'), type: 'line', p1, p2 };
  if (opts.construction) l.construction = true;
  sk.entities.push(l);
  return { id: l.id, p1, p2, constraints: made };
}

export function addCircle(sk, c, r, opts = {}) {
  const made = [];
  const cid = endPoint(sk, c, made);
  const e = { id: nextId(sk, 'c'), type: 'circle', c: cid, r: Math.abs(r) };
  if (opts.construction) e.construction = true;
  sk.entities.push(e);
  return { id: e.id, c: cid, constraints: made };
}

/** Counter-clockwise arc about c from s; e is put on the radius through it. */
export function addArc(sk, c, s, e, opts = {}) {
  const made = [];
  const cxy = typeof c === 'string' ? pointXY(sk, c) : c;
  const sxy = typeof s === 'string' ? pointXY(sk, s) : s;
  const r = Math.hypot(sxy[0] - cxy[0], sxy[1] - cxy[1]);
  const exy0 = typeof e === 'string' ? pointXY(sk, e) : e;
  const ang = Math.atan2(exy0[1] - cxy[1], exy0[0] - cxy[0]);
  const exy = [cxy[0] + r * Math.cos(ang), cxy[1] + r * Math.sin(ang)];
  const cid = endPoint(sk, c, made), sid = endPoint(sk, s, made);
  const eid = typeof e === 'string' ? endPoint(sk, e, made) : addPoint(sk, exy[0], exy[1]);
  const a = { id: nextId(sk, 'a'), type: 'arc', c: cid, s: sid, e: eid };
  if (opts.construction) a.construction = true;
  sk.entities.push(a);
  return { id: a.id, c: cid, s: sid, e: eid, constraints: made };
}

/** Corner-to-corner rectangle: four lines joined at the corners, two horizontal and two vertical. */
export function addRect(sk, a, b, opts = {}) {
  const [x0, y0] = a, [x1, y1] = b;
  const pts = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const lines = [];
  for (let i = 0; i < 4; i++) lines.push(addLine(sk, pts[i], pts[(i + 1) % 4], opts));
  const made = [];
  for (let i = 0; i < 4; i++) made.push(addConstraint(sk, 'coincident', [lines[i].p2, lines[(i + 1) % 4].p1]).id);
  made.push(addConstraint(sk, 'horizontal', [lines[0].id]).id, addConstraint(sk, 'horizontal', [lines[2].id]).id);
  made.push(addConstraint(sk, 'vertical', [lines[1].id]).id, addConstraint(sk, 'vertical', [lines[3].id]).id);
  return { lines: lines.map((l) => l.id), constraints: made };
}

/** Which signature of `type` these refs match (refs reordered P < L < R), or null. */
export function matchSig(sk, type, refs) {
  const def = CONSTRAINTS[type];
  if (!def) return null;
  const ents = refs.map((r) => byId(sk, r));
  if (ents.some((e) => !e)) return null;
  const order = { P: 0, L: 1, R: 2, S: 3 };
  const pairs = refs.map((r, i) => ({ r, k: kindOf(ents[i]) })).sort((p, q) => order[p.k] - order[q.k]);
  const sig = pairs.map((p) => p.k).join('');
  if (!def.sigs.includes(sig)) return null;
  if (new Set(refs).size !== refs.length) return null;
  return { sig, refs: pairs.map((p) => p.r) };
}

/** Relations and dimensions that apply to a selection of entity ids. */
export function applicable(sk, refs) {
  const out = [];
  for (const t of Object.keys(CONSTRAINTS)) {
    if (CONSTRAINTS[t].auto) continue;
    const m = matchSig(sk, t, refs);
    if (!m) continue;
    if (t === 'tangent' && m.sig.includes('S') && !endMeet(sk, byId(sk, m.refs[0]), byId(sk, m.refs[1]))) continue;
    if (t === 'symmetric' && m.refs[0] === ORIGIN && m.refs[1] === ORIGIN) continue;
    if (t === 'distance' && m.sig === 'LL' && !nearlyParallel(sk, m.refs)) continue;
    if (t === 'angle' && nearlyParallel(sk, m.refs)) continue;
    if (t === 'coincident' && m.sig === 'PP' && refs.includes(ORIGIN) && false) continue;
    out.push(t);
  }
  return out;
}

function lineVec(sk, id) {
  const l = byId(sk, id);
  const a = pointXY(sk, l.p1), b = pointXY(sk, l.p2);
  return [b[0] - a[0], b[1] - a[1]];
}
function nearlyParallel(sk, [l1, l2]) {
  const u = lineVec(sk, l1), v = lineVec(sk, l2);
  const c = (u[0] * v[1] - u[1] * v[0]) / ((Math.hypot(...u) * Math.hypot(...v)) || 1);
  return Math.abs(c) < 1e-6;
}

/**
 * Add a relation or dimension. Values default to the current measurement; signed quantities
 * take the current side. Returns the constraint, or throws Error with a plain message.
 */
export function addConstraint(sk, type, refs, value, extra = {}) {
  const m = matchSig(sk, type, refs);
  if (!m) throw new Error(tr('model.sketch.not_apply', { relation: CONSTRAINTS[type]?.label || type }));
  if (type === 'tangent' && m.sig.includes('S')) {
    const a = byId(sk, m.refs[0]), b = byId(sk, m.refs[1]);
    const meet = endMeet(sk, a, b);
    if (!meet) throw new Error(tr('model.sketch.tangent_spline_end'));
    // a fit spline takes its end direction as a variable from now on (starting where it is)
    for (const [e, pid] of [[a, meet[0]], [b, meet[1]]]) {
      if (e.type !== 'spline' || e.kind !== 'fit') continue;
      const end = pid === e.pts[0] ? 's' : 'e', key = end === 's' ? 'a0' : 'a1';
      if (!Number.isFinite(e[key])) { const t = splineEndTangent(sk, e, end); e[key] = Math.atan2(t[1], t[0]); }
    }
  }
  if (type === 'symmetric' && m.refs[0] === m.refs[1]) throw new Error(tr('model.sketch.symmetric_two_points'));
  if (type === 'offsetlink' && !sk.constraints.some((k) => k.id === extra.of && k.type === 'offset')) throw new Error(tr('model.sketch.offsetlink_needs_dim'));
  const c = { id: nextId(sk, 'k'), type, refs: m.refs };
  if (type === 'offsetlink') c.of = extra.of;
  const meas = measure(sk, type, m.refs, m.sig);
  if (meas.sign !== undefined) c.sign = meas.sign;
  if (meas.kind !== undefined) c.kind = meas.kind;
  if (type === 'fix') c.value = meas.value;
  else if (CONSTRAINTS[type].dim) {
    const v = value === undefined ? meas.value : Number(value);
    if (!Number.isFinite(v)) throw new Error(tr('model.sketch.not_number'));
    if (type === 'angle' ? (v < 0 || v > 180) : v < 0) throw new Error(type === 'angle' ? tr('model.sketch.angle_range') : tr('model.sketch.dimension_negative'));
    if ((type === 'radius' || type === 'diameter') && v <= 0) throw new Error(tr('model.sketch.radius_zero'));
    c.value = v;
  }
  sk.constraints.push(c);
  return c;
}

/** Current geometric value (and side) for a constraint type on refs (already normalised). */
export function measure(sk, type, refs, sig = matchSig(sk, type, refs)?.sig) {
  const P = (id) => pointXY(sk, id);
  const E = (id) => byId(sk, id);
  const L = (id) => { const l = E(id); return [P(l.p1), P(l.p2)]; };
  const sgn = (v) => (v < 0 ? -1 : 1);
  switch (type) {
    case 'fix': {
      const e = E(refs[0]);
      if (e.type === 'point') return { value: [e.x, e.y] };
      if (e.type === 'line') return { value: [...P(e.p1), ...P(e.p2)] };
      if (e.type === 'circle') return { value: [...P(e.c), e.r] };
      if (e.type === 'spline') return { value: e.pts.flatMap((id) => P(id)) };
      return { value: [...P(e.c), ...P(e.s), ...P(e.e)] };
    }
    case 'distance': {
      if (sig === 'PP') { const a = P(refs[0]), b = P(refs[1]); return { value: Math.hypot(b[0] - a[0], b[1] - a[1]) }; }
      if (sig === 'L') { const [a, b] = L(refs[0]); return { value: Math.hypot(b[0] - a[0], b[1] - a[1]) }; }
      const p = sig === 'PL' ? P(refs[0]) : L(refs[1])[0];
      const s = signedDist(p, L(sig === 'PL' ? refs[1] : refs[0]));
      return { value: Math.abs(s), sign: sgn(s) };
    }
    case 'hdistance': case 'vdistance': {
      const [a, b] = sig === 'L' ? L(refs[0]) : [P(refs[0]), P(refs[1])];
      const d = type === 'hdistance' ? b[0] - a[0] : b[1] - a[1];
      return { value: Math.abs(d), sign: sgn(d) };
    }
    case 'offset': case 'offsetlink': {
      const s = sig === 'LL' ? signedDist(L(refs[1])[0], L(refs[0])) : radiusOf(sk, E(refs[1])) - radiusOf(sk, E(refs[0]));
      return { value: Math.abs(s), sign: sgn(s) };
    }
    case 'radius': return { value: radiusOf(sk, E(refs[0])) };
    case 'diameter': return { value: 2 * radiusOf(sk, E(refs[0])) };
    case 'angle': {
      const [a1, b1] = L(refs[0]), [a2, b2] = L(refs[1]);
      const u = [b1[0] - a1[0], b1[1] - a1[1]], v = [b2[0] - a2[0], b2[1] - a2[1]];
      const ang = Math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]);
      return { value: Math.abs(ang) * 180 / Math.PI, sign: sgn(ang) };
    }
    case 'tangent': {
      if (sig.includes('S')) return {};
      if (sig === 'LR') {
        const r = E(refs[1]);
        return { sign: sgn(signedDist(P(r.c), L(refs[0]))) };
      }
      const a = E(refs[0]), b = E(refs[1]);
      const ca = P(a.c), cb = P(b.c), ra = radiusOf(sk, a), rb = radiusOf(sk, b);
      const d = Math.hypot(cb[0] - ca[0], cb[1] - ca[1]);
      return Math.abs(d - (ra + rb)) <= Math.abs(d - Math.abs(ra - rb)) ? { kind: 'ext' } : { kind: 'int', sign: sgn(ra - rb) };
    }
    default: return {};
  }
}

function signedDist(p, [a, b]) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const l = Math.hypot(dx, dy) || 1e-300;
  return (dx * (p[1] - a[1]) - dy * (p[0] - a[0])) / l;
}

/** The sketch panel's list (0.6 PU.6): relations of one kind that appear more than once become one group
 *  `{type, items}` in the place of the first of them; dimensions (they carry values) and single relations stay `{c}`. */
export function groupConstraints(list) {
  const count = new Map();
  for (const c of list) if (CONSTRAINTS[c.type] && !CONSTRAINTS[c.type].dim) count.set(c.type, (count.get(c.type) || 0) + 1);
  const out = [], groups = new Map();
  for (const c of list) {
    if ((count.get(c.type) || 0) < 2) { out.push({ c }); continue; }
    let g = groups.get(c.type);
    if (!g) { g = { type: c.type, items: [] }; groups.set(c.type, g); out.push(g); }
    g.items.push(c);
  }
  return out;
}

/** Human description of a constraint, e.g. "Distance 50" or "Parallel". */
export function describe(c, fmt = (v) => String(+v.toFixed(4))) {
  const def = CONSTRAINTS[c.type];
  if (!def) return c.type;
  if (!def.dim) return def.label;
  if (c.type === 'angle') return tr('model.sketch.describe.angle', { value: fmt(c.value) });
  if (c.type === 'diameter') return tr('model.sketch.describe.diameter', { value: fmt(c.value) });
  if (c.type === 'radius') return tr('model.sketch.describe.radius', { value: fmt(c.value) });
  if (c.type === 'offset') return tr('model.sketch.describe.offset', { value: fmt(c.value) });
  return tr('model.sketch.describe.dim', { label: def.label, value: fmt(c.value) });
}

/** Remove entities (and points only they used, and every constraint that mentions any of them). */
export function removeEntities(sk, ids) {
  const gone = new Set(ids);
  gone.delete(ORIGIN);
  for (const id of ids) {
    const e = byId(sk, id);
    if (e && e.type !== 'point') for (const p of pointsOf(e)) gone.add(p);
  }
  // keep points still used by curves that stay (shared fillet points)
  for (const e of sk.entities) {
    if (gone.has(e.id) || e.type === 'point') continue;
    for (const p of pointsOf(e)) if (gone.has(p) && !ids.includes(p)) gone.delete(p);
  }
  // removing a point removes curves built on it — a spline just loses that point while it keeps enough
  for (const e of sk.entities) {
    if (e.type === 'point' || gone.has(e.id) || !pointsOf(e).some((p) => gone.has(p))) continue;
    if (e.type === 'spline' && e.pts.filter((p) => !gone.has(p)).length >= splineMin(e)) {
      const keep = e.pts.filter((p) => !gone.has(p));
      if (keep[0] !== e.pts[0]) delete e.a0;
      if (keep[keep.length - 1] !== e.pts[e.pts.length - 1]) delete e.a1;
      e.pts = keep; delete e.knots;
      continue;
    }
    gone.add(e.id);
  }
  sk.entities = sk.entities.filter((e) => !gone.has(e.id));
  const before = sk.constraints.length;
  sk.constraints = sk.constraints.filter((c) => !c.refs.some((r) => gone.has(r)));
  dropOrphanLinks(sk);
  return { entities: gone.size, constraints: before - sk.constraints.length };
}

export function removeConstraints(sk, ids) {
  const set = new Set(ids);
  sk.constraints = sk.constraints.filter((c) => !set.has(c.id));
  dropOrphanLinks(sk);
}

/** Offset links go with their offset dimension. */
function dropOrphanLinks(sk) {
  const masters = new Set(sk.constraints.filter((c) => c.type === 'offset').map((c) => c.id));
  sk.constraints = sk.constraints.filter((c) => c.type !== 'offsetlink' || masters.has(c.of));
}

/**
 * Sketch fillet at the corner where two lines meet (pointId = one of the corner's end points):
 * trims both lines, adds a tangent arc of radius r sharing their new end points, and a driving
 * radius. Constraints on the corner points themselves (they no longer exist) are removed.
 */
export function filletCorner(sk, pointId, r) {
  if (!(r > 0)) throw new Error(tr('model.sketch.fillet_radius_zero'));
  const at = pointXY(sk, pointId);
  if (!at) throw new Error(tr('model.sketch.fillet_pick_corner'));
  const tol = 1e-6 * Math.max(1, extent(sk));
  const ends = [];
  for (const e of sk.entities) {
    if (e.type !== 'line' || e.construction) continue;
    for (const [mine, other] of [[e.p1, e.p2], [e.p2, e.p1]]) {
      const q = pointXY(sk, mine);
      if (Math.hypot(q[0] - at[0], q[1] - at[1]) <= tol) ends.push({ line: e, mine, other });
    }
  }
  if (ends.length !== 2 || ends[0].line === ends[1].line) throw new Error(tr('model.sketch.fillet_two_lines'));
  const P = at;
  const [A, B] = ends;
  const fa = pointXY(sk, A.other), fb = pointXY(sk, B.other);
  const la = Math.hypot(fa[0] - P[0], fa[1] - P[1]), lb = Math.hypot(fb[0] - P[0], fb[1] - P[1]);
  const u1 = [(fa[0] - P[0]) / la, (fa[1] - P[1]) / la], u2 = [(fb[0] - P[0]) / lb, (fb[1] - P[1]) / lb];
  const cosT = Math.max(-1, Math.min(1, u1[0] * u2[0] + u1[1] * u2[1]));
  const th = Math.acos(cosT);
  if (th < 1e-6 || Math.PI - th < 1e-6) throw new Error(tr('model.sketch.fillet_in_line'));
  const d = r / Math.tan(th / 2);
  if (d >= la - tol || d >= lb - tol) throw new Error(tr('model.sketch.fillet_too_big'));
  const t1 = [P[0] + u1[0] * d, P[1] + u1[1] * d], t2 = [P[0] + u2[0] * d, P[1] + u2[1] * d];
  const bis = [u1[0] + u2[0], u1[1] + u2[1]], bl = Math.hypot(...bis);
  const h = r / Math.sin(th / 2);
  const c = [P[0] + bis[0] / bl * h, P[1] + bis[1] / bl * h];
  let ida = A.mine, idb = B.mine;
  if (ida === idb) { idb = addPoint(sk, P[0], P[1]); const l = B.line; if (l.p1 === ida) l.p1 = idb; else l.p2 = idb; }
  // constraints on the corner points go with the corner
  const removed = sk.constraints.filter((k) => k.refs.includes(ida) || k.refs.includes(idb));
  sk.constraints = sk.constraints.filter((k) => !removed.includes(k));
  setPt(sk, ida, t1); setPt(sk, idb, t2);
  const cid = addPoint(sk, c[0], c[1]);
  const ccw = (t1[0] - c[0]) * (t2[1] - c[1]) - (t1[1] - c[1]) * (t2[0] - c[0]) > 0;
  const arc = { id: nextId(sk, 'a'), type: 'arc', c: cid, s: ccw ? ida : idb, e: ccw ? idb : ida };
  sk.entities.push(arc);
  addConstraint(sk, 'tangent', [A.line.id, arc.id]);
  addConstraint(sk, 'tangent', [B.line.id, arc.id]);
  addConstraint(sk, 'radius', [arc.id], r);
  return { arc: arc.id, removed: removed.length };
}

function setPt(sk, id, [x, y]) { const p = byId(sk, id); p.x = x; p.y = y; }

export function extent(sk) {
  let m = 0;
  for (const e of sk.entities) {
    if (e.type === 'point') m = Math.max(m, Math.abs(e.x), Math.abs(e.y));
    if (e.type === 'circle') { const c = pointXY(sk, e.c); m = Math.max(m, Math.abs(c[0]) + e.r, Math.abs(c[1]) + e.r); }
  }
  return m;
}

/** Bounding box of the sketch geometry {x0,y0,x1,y1} or null. */
export function bounds(sk) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const inc = (x, y) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); };
  for (const e of sk.entities) {
    if (e.type === 'point') inc(e.x, e.y);
    else if (e.type === 'circle') { const c = pointXY(sk, e.c); inc(c[0] - e.r, c[1] - e.r); inc(c[0] + e.r, c[1] + e.r); }
    else if (e.type === 'arc') for (const p of tessArc(sk, e, 32)) inc(p[0], p[1]);
    else if (e.type === 'spline') { try { for (const p of tessSpline(sk, e, 8)) inc(p[0], p[1]); } catch { /* points on top of each other */ } }
  }
  return x0 === Infinity ? null : { x0, y0, x1, y1 };
}

// ---------------------------------------------------------------- equations (for solver.js)

/**
 * Residual equations for the whole sketch over a variable vector. `vars` maps
 * point id → [ix, iy], circle id → ir and '<spline id>:a0' / ':a1' → the fit spline's end angle into x;
 * anything missing from `vars` reads its stored value. Returns [{ cid, f: () => number, deps: [param indices] }].
 */
export function equations(sk, x, vars) {
  const ents = new Map(sk.entities.map((e) => [e.id, e]));
  const P = (id) => {
    if (id === ORIGIN) return [0, 0];
    const v = vars.get(id);
    if (v) return [x[v[0]], x[v[1]]];
    const e = ents.get(id); return [e.x, e.y];
  };
  const depsP = (id) => vars.get(id) || [];
  const R = (e) => {
    if (e.type === 'circle') { const v = vars.get(e.id); return v !== undefined ? x[v] : e.r; }
    const c = P(e.c), s = P(e.s); return Math.hypot(s[0] - c[0], s[1] - c[1]);
  };
  const depsE = (id) => {
    const e = ents.get(id);
    if (!e || id === ORIGIN) return depsP(id);
    if (e.type === 'point') return depsP(id);
    const d = pointsOf(e).flatMap(depsP);
    if (e.type === 'circle' && vars.has(e.id)) d.push(vars.get(e.id));
    if (e.type === 'spline') for (const k of [':a0', ':a1']) if (vars.has(e.id + k)) d.push(vars.get(e.id + k));
    return d;
  };
  const Aget = (e, key) => { const v = vars.get(e.id + ':' + key); return v !== undefined ? x[v] : e[key]; };
  const Tan = (e, end) => splineEndTangent(sk, e, end, P, Aget);
  const L = (id) => { const l = ents.get(id); return [P(l.p1), P(l.p2)]; };
  const out = [];
  const push = (cid, deps, ...fs) => { for (const f of fs) out.push({ cid, f, deps }); };

  // arcs: end point on the same radius as the start point
  for (const e of sk.entities) {
    if (e.type !== 'arc') continue;
    push('arc:' + e.id, depsE(e.id), () => { const c = P(e.c), s = P(e.s), q = P(e.e); return Math.hypot(q[0] - c[0], q[1] - c[1]) - Math.hypot(s[0] - c[0], s[1] - c[1]); });
  }
  const dir = (id) => { const [a, b] = L(id); return [b[0] - a[0], b[1] - a[1]]; };
  const sd = (p, id) => signedDist(p, L(id));

  for (const c of sk.constraints) {
    const m = matchSig(sk, c.type, c.refs);
    if (!m) continue;
    const r = c.refs, sig = m.sig;
    const deps = [...new Set(r.flatMap(depsE))];
    const E = (id) => ents.get(id);
    switch (c.type) {
      case 'coincident':
        if (sig === 'PP') push(c.id, deps, () => P(r[0])[0] - P(r[1])[0], () => P(r[0])[1] - P(r[1])[1]);
        else if (sig === 'PL') push(c.id, deps, () => sd(P(r[0]), r[1]));
        else push(c.id, deps, () => { const p = P(r[0]), ce = P(E(r[1]).c); return Math.hypot(p[0] - ce[0], p[1] - ce[1]) - R(E(r[1])); });
        break;
      case 'horizontal': case 'vertical': {
        const k = c.type === 'horizontal' ? 1 : 0;
        if (sig === 'L') push(c.id, deps, () => { const [a, b] = L(r[0]); return b[k] - a[k]; });
        else push(c.id, deps, () => P(r[1])[k] - P(r[0])[k]);
        break;
      }
      case 'parallel': push(c.id, deps, () => { const u = dir(r[0]), v = dir(r[1]); return (u[0] * v[1] - u[1] * v[0]) / ((Math.hypot(...u) * Math.hypot(...v)) || 1e-300); }); break;
      case 'perpendicular': push(c.id, deps, () => { const u = dir(r[0]), v = dir(r[1]); return (u[0] * v[0] + u[1] * v[1]) / ((Math.hypot(...u) * Math.hypot(...v)) || 1e-300); }); break;
      case 'tangent': {
        // Where the two curves share an end point, the distance form has a zero gradient at the
        // solution (it is a maximum there), so use "radius at the joint is square to the line" /
        // "the joint and both centres are in line" instead.
        if (sig.includes('S')) {
          const a = E(r[0]), b = E(r[1]), meet = endMeet(sk, a, b);
          if (!meet) break;
          const endOf = (e, pid) => (pid === e.pts[0] ? 's' : 'e');
          const cross = (u, v) => (u[0] * v[1] - u[1] * v[0]) / ((Math.hypot(...u) * Math.hypot(...v)) || 1e-300);
          if (sig === 'LS') push(c.id, deps, () => cross(dir(r[0]), Tan(b, endOf(b, meet[1]))));
          else if (sig === 'SS') push(c.id, deps, () => cross(Tan(a, endOf(a, meet[0])), Tan(b, endOf(b, meet[1]))));
          else push(c.id, deps, () => { const t = Tan(b, endOf(b, meet[1])), ce = P(a.c), p = P(meet[1]); return (t[0] * (p[0] - ce[0]) + t[1] * (p[1] - ce[1])) / (R(a) || 1e-300); });
          break;
        }
        const j = sharedEnd(sk, E(r[0]), E(r[1]));
        if (j && sig === 'LR') {
          push(c.id, deps, () => { const u = dir(r[0]), ce = P(E(r[1]).c), p = P(j); return (u[0] * (p[0] - ce[0]) + u[1] * (p[1] - ce[1])) / ((Math.hypot(...u) * R(E(r[1]))) || 1e-300); });
          break;
        }
        if (j) {
          push(c.id, deps, () => { const p = P(j), a = P(E(r[0]).c), b = P(E(r[1]).c); return ((p[0] - a[0]) * (p[1] - b[1]) - (p[1] - a[1]) * (p[0] - b[0])) / ((R(E(r[0])) * R(E(r[1]))) || 1e-300); });
          break;
        }
        if (sig === 'LR') push(c.id, deps, () => (c.sign || 1) * sd(P(E(r[1]).c), r[0]) - R(E(r[1])));
        else push(c.id, deps, () => {
          const a = E(r[0]), b = E(r[1]), ca = P(a.c), cb = P(b.c);
          const d = Math.hypot(cb[0] - ca[0], cb[1] - ca[1]);
          return c.kind === 'int' ? d - (c.sign || 1) * (R(a) - R(b)) : d - (R(a) + R(b));
        });
        break;
      }
      case 'equal':
        if (sig === 'LL') push(c.id, deps, () => Math.hypot(...dir(r[0])) - Math.hypot(...dir(r[1])));
        else push(c.id, deps, () => R(E(r[0])) - R(E(r[1])));
        break;
      case 'concentric': {
        const ca = sig === 'PR' ? r[0] : E(r[0]).c, cb = E(r[1]).c;
        push(c.id, deps, () => P(ca)[0] - P(cb)[0], () => P(ca)[1] - P(cb)[1]);
        break;
      }
      case 'midpoint':
        push(c.id, deps, () => { const [a, b] = L(r[1]); return P(r[0])[0] - (a[0] + b[0]) / 2; }, () => { const [a, b] = L(r[1]); return P(r[0])[1] - (a[1] + b[1]) / 2; });
        break;
      case 'fix': {
        const e = E(r[0]) || byId(sk, r[0]);
        const v = c.value || [];
        const pts = e.type === 'point' ? [e.id] : pointsOf(e);
        pts.forEach((pid, i) => push(c.id, deps, () => P(pid)[0] - v[2 * i], () => P(pid)[1] - v[2 * i + 1]));
        if (e.type === 'circle') push(c.id, deps, () => R(e) - v[2]);
        break;
      }
      case 'distance':
        if (sig === 'PP') push(c.id, deps, () => { const a = P(r[0]), b = P(r[1]); return Math.hypot(b[0] - a[0], b[1] - a[1]) - c.value; });
        else if (sig === 'L') push(c.id, deps, () => Math.hypot(...dir(r[0])) - c.value);
        else if (sig === 'PL') push(c.id, deps, () => (c.sign || 1) * sd(P(r[0]), r[1]) - c.value);
        else push(c.id, deps, () => (c.sign || 1) * sd(L(r[1])[0], r[0]) - c.value);
        break;
      case 'hdistance': case 'vdistance': {
        const k = c.type === 'hdistance' ? 0 : 1;
        push(c.id, deps, () => { const [a, b] = sig === 'L' ? L(r[0]) : [P(r[0]), P(r[1])]; return (c.sign || 1) * (b[k] - a[k]) - c.value; });
        break;
      }
      case 'symmetric':
        // the middle of the two points on the line, and the pair square to it
        push(c.id, deps, () => { const a = P(r[0]), b = P(r[1]); return sd([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], r[2]); },
          () => { const a = P(r[0]), b = P(r[1]), u = dir(r[2]); return ((b[0] - a[0]) * u[0] + (b[1] - a[1]) * u[1]) / (Math.hypot(...u) || 1e-300); });
        break;
      case 'offset': case 'offsetlink': {
        const master = c.type === 'offset' ? c : sk.constraints.find((k) => k.id === c.of && k.type === 'offset');
        if (!master) break;
        if (sig === 'LL') {
          push(c.id, deps, () => { const u = dir(r[0]), v = dir(r[1]); return (u[0] * v[1] - u[1] * v[0]) / ((Math.hypot(...u) * Math.hypot(...v)) || 1e-300); },
            () => (c.sign || 1) * sd(L(r[1])[0], r[0]) - master.value);
        } else {
          const a = E(r[0]), b = E(r[1]);
          push(c.id, deps, () => P(a.c)[0] - P(b.c)[0], () => P(a.c)[1] - P(b.c)[1], () => (c.sign || 1) * (R(b) - R(a)) - master.value);
        }
        break;
      }
      case 'radius': push(c.id, deps, () => R(E(r[0])) - c.value); break;
      case 'diameter': push(c.id, deps, () => 2 * R(E(r[0])) - c.value); break;
      case 'angle':
        push(c.id, deps, () => {
          const u = dir(r[0]), v = dir(r[1]);
          let d = Math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]) - (c.sign || 1) * c.value * Math.PI / 180;
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d <= -Math.PI) d += 2 * Math.PI;
          return d;
        });
        break;
    }
  }
  return out;
}

/** End points of a curve (an open spline's first and last point; circles and closed splines have none). */
export function endsOf(e) {
  if (!e) return [];
  if (e.type === 'line') return [e.p1, e.p2];
  if (e.type === 'arc') return [e.s, e.e];
  if (e.type === 'spline' && !e.closed) return [e.pts[0], e.pts[e.pts.length - 1]];
  return [];
}

/** The end of a and the end of b where they meet (shared id, or joined by a point-to-point coincident): [pa, pb] or null. */
export function endMeet(sk, a, b) {
  const ea = endsOf(a), eb = endsOf(b);
  for (const p of ea) if (eb.includes(p)) return [p, p];
  for (const k of sk.constraints) {
    if (k.type !== 'coincident' || k.refs.length !== 2) continue;
    const [u, v] = k.refs;
    if (ea.includes(u) && eb.includes(v)) return [u, v];
    if (ea.includes(v) && eb.includes(u)) return [v, u];
  }
  return null;
}

/** The end point two curves meet at (shared id, or joined by a point-to-point coincident), or null. Only arcs have ends among round curves. */
export function sharedEnd(sk, a, b) {
  if (a?.type === 'spline' || b?.type === 'spline') return null;
  const m = endMeet(sk, a, b);
  return m ? m[0] : null;
}

// ---------------------------------------------------------------- profiles

/** Points along an arc, start to end inclusive, `segFull` segments per full turn (at least 1). */
export function tessArc(sk, a, segFull = 64) {
  const { c, r, a0, sweep } = arcAngles(sk, a);
  const n = Math.max(1, Math.ceil(sweep / (2 * Math.PI) * segFull - 1e-9));
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = a0 + sweep * i / n;
    pts.push([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]);
  }
  return pts;
}

export function tessCircle(c, r, segFull = 64) {
  const pts = [];
  for (let i = 0; i < segFull; i++) { const t = 2 * Math.PI * i / segFull; pts.push([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]); }
  return pts;
}

/**
 * Closed loops from the sketch's (non-construction) lines, arcs and circles.
 * → { loops: [[[x,y]…]…], curves: [{id, loop}] } or { error } when an end is left open or branches.
 */
export function profile(sk, segFull = 64) {
  const tol = 1e-6 * Math.max(1, extent(sk));
  const loops = [];
  const curves = [];
  const segs = [];
  for (const e of sk.entities) {
    if (e.construction) continue;
    if (e.type === 'circle') {
      if (!(e.r > tol)) return { error: tr('model.sketch.circle_no_size') };
      loops.push(tessCircle(pointXY(sk, e.c), e.r, segFull));
      curves.push({ id: e.id, loop: loops.length - 1 });
    } else if (e.type === 'line') {
      const a = pointXY(sk, e.p1), b = pointXY(sk, e.p2);
      if (Math.hypot(b[0] - a[0], b[1] - a[1]) <= tol) return { error: tr('model.sketch.line_no_length') };
      segs.push({ id: e.id, pts: [a, b] });
    } else if (e.type === 'arc') {
      segs.push({ id: e.id, pts: tessArc(sk, e, segFull) });
    } else if (e.type === 'spline') {
      let pts;
      try { pts = tessSpline(sk, e, Math.max(4, Math.ceil(segFull / 8))); } catch (err) { return { error: err.message }; }
      if (e.closed) { pts.pop(); loops.push(pts); curves.push({ id: e.id, loop: loops.length - 1 }); }
      else segs.push({ id: e.id, pts });
    }
  }
  // join ends by position
  const nodes = [];
  const nodeOf = (p) => {
    for (let i = 0; i < nodes.length; i++) if (Math.hypot(nodes[i].p[0] - p[0], nodes[i].p[1] - p[1]) <= tol * 10) return i;
    nodes.push({ p, ends: [] });
    return nodes.length - 1;
  };
  for (const s of segs) {
    s.n0 = nodeOf(s.pts[0]); s.n1 = nodeOf(s.pts[s.pts.length - 1]);
    nodes[s.n0].ends.push(s); nodes[s.n1].ends.push(s);
  }
  for (const n of nodes) {
    if (n.ends.length === 1) return { error: tr('model.sketch.profile_open', { x: fx(n.p[0]), y: fx(n.p[1]) }), at: n.p };
    if (n.ends.length > 2) return { error: tr('model.sketch.profile_branches', { x: fx(n.p[0]), y: fx(n.p[1]) }), at: n.p };
  }
  const used = new Set();
  for (const s0 of segs) {
    if (used.has(s0)) continue;
    const loop = [];
    const start = s0.n0;
    let s = s0, from = start;
    const li = loops.length;
    for (let guard = 0; guard <= segs.length; guard++) {
      used.add(s);
      curves.push({ id: s.id, loop: li });
      const fwd = s.n0 === from;
      const pts = fwd ? s.pts : [...s.pts].reverse();
      for (let i = 0; i < pts.length - 1; i++) loop.push(pts[i]);
      const to = fwd ? s.n1 : s.n0;
      if (to === start) break;
      const nx = nodes[to].ends.find((q) => q !== s);
      if (!nx || used.has(nx)) break;
      from = to; s = nx;
    }
    if (loop.length < 3) return { error: tr('model.sketch.loop_three_sides') };
    loops.push(loop);
  }
  return { loops, curves };
}

const fx = (v) => String(+v.toFixed(3));

/** Even-odd point-in-region test against a set of loops. */
export function insideLoops(loops, p) {
  let inside = false;
  for (const loop of loops) {
    for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
      const a = loop[i], b = loop[j];
      if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < (b[0] - a[0]) * (p[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
    }
  }
  return inside;
}

export function loopArea(loop) {
  let s = 0;
  for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) s += (loop[j][0] * loop[i][1] - loop[i][0] * loop[j][1]);
  return s / 2;
}

// ---------------------------------------------------------------- validation of file data

const ID = /^[A-Za-z][A-Za-z0-9_:-]{0,40}$/;
const num = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e9;

/** One untrusted spline entity → a clean copy, or throws. */
function readSpline(e, isPt, take) {
  const bad = (key) => new Error(tr(key));
  if (e.kind !== 'fit' && e.kind !== 'control') throw bad('model.sketch.spline_bad.kind');
  if (!Array.isArray(e.pts) || e.pts.length > 500) throw bad('model.sketch.spline_bad.points');
  const closed = e.closed === true;
  if (e.pts.length < (closed ? 3 : 2)) throw bad('model.sketch.spline_bad.too_few');
  if (!e.pts.every((p) => typeof p === 'string' && isPt(p) && p !== ORIGIN) || new Set(e.pts).size !== e.pts.length) throw bad('model.sketch.spline_bad.point_twice');
  const out = { id: take(e.id), type: 'spline', kind: e.kind, pts: e.pts.slice() };
  if (closed) out.closed = true;
  for (const key of ['a0', 'a1']) {
    if (e[key] === undefined) continue;
    if (e.kind !== 'fit' || closed || !num(e[key])) throw bad('model.sketch.spline_bad.end_angle');
    out[key] = e[key];
  }
  if (e.knots !== undefined) {
    if (e.kind !== 'control' || closed) throw bad('model.sketch.spline_bad.knots_kind');
    const why = SP.knotProblem(e.knots, e.pts.length);
    if (why) throw new Error(why);
    out.knots = e.knots.slice();
  }
  return out;
}

/** Check untrusted sketch JSON; returns a clean copy or throws Error. */
export function readSketch(raw) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.entities) || !Array.isArray(raw.constraints)) throw new Error(tr('model.sketch.file.no_entities'));
  const sk = { seq: Number.isInteger(raw.seq) && raw.seq > 0 ? raw.seq : 1, entities: [], constraints: [] };
  const ids = new Set([ORIGIN]);
  const take = (id) => { if (typeof id !== 'string' || !ID.test(id) || ids.has(id)) throw new Error(tr('model.sketch.file.bad_id')); ids.add(id); return id; };
  for (const e of raw.entities.slice(0, 5000)) {
    const cons = e.construction === true ? { construction: true } : {};
    if (e.type === 'point') { if (!num(e.x) || !num(e.y)) throw new Error(tr('model.sketch.file.bad_point')); sk.entities.push({ id: take(e.id), type: 'point', x: e.x, y: e.y, ...cons }); }
  }
  const isPt = (id) => id === ORIGIN || sk.entities.some((e) => e.id === id && e.type === 'point');
  for (const e of raw.entities.slice(0, 5000)) {
    const cons = e.construction === true ? { construction: true } : {};
    if (e.type === 'line') { if (!isPt(e.p1) || !isPt(e.p2) || e.p1 === ORIGIN || e.p2 === ORIGIN) throw new Error(tr('model.sketch.file.bad_line')); sk.entities.push({ id: take(e.id), type: 'line', p1: e.p1, p2: e.p2, ...cons }); }
    else if (e.type === 'circle') { if (!isPt(e.c) || e.c === ORIGIN || !num(e.r) || e.r <= 0) throw new Error(tr('model.sketch.file.bad_circle')); sk.entities.push({ id: take(e.id), type: 'circle', c: e.c, r: e.r, ...cons }); }
    else if (e.type === 'arc') { if (![e.c, e.s, e.e].every((p) => isPt(p) && p !== ORIGIN)) throw new Error(tr('model.sketch.file.bad_arc')); sk.entities.push({ id: take(e.id), type: 'arc', c: e.c, s: e.s, e: e.e, ...cons }); }
    else if (e.type === 'spline') sk.entities.push({ ...readSpline(e, isPt, take), ...cons });
    else if (e.type !== 'point') throw new Error(tr('model.sketch.file.unknown_geometry'));
  }
  for (const e of sk.entities) if (e.type === 'spline') { try { splineCurve(sk, e); } catch { throw new Error(tr('model.sketch.file.spline_coincident')); } }
  for (const c of raw.constraints.slice(0, 10000)) {
    if (!c || !CONSTRAINTS[c.type] || !Array.isArray(c.refs)) throw new Error(tr('model.sketch.file.unknown_relation'));
    const k = { id: take(c.id), type: c.type, refs: c.refs.map(String) };
    if (!matchSig(sk, k.type, k.refs)) throw new Error(tr('model.sketch.file.relation_wrong', { relation: CONSTRAINTS[c.type].label.toLowerCase() }));
    if (c.type === 'fix') { if (!Array.isArray(c.value) || !c.value.every(num)) throw new Error(tr('model.sketch.file.bad_fix')); k.value = [...c.value]; }
    else if (CONSTRAINTS[c.type].dim) { if (!num(c.value) || c.value < 0) throw new Error(tr('model.sketch.file.bad_dimension')); k.value = c.value; }
    if (c.sign === 1 || c.sign === -1) k.sign = c.sign;
    if (c.kind === 'ext' || c.kind === 'int') k.kind = c.kind;
    if (Array.isArray(c.at) && c.at.length === 2 && c.at.every(num)) k.at = [...c.at];
    if (Array.isArray(c.off) && c.off.length === 2 && c.off.every(num)) k.off = [...c.off];
    if (c.type === 'offsetlink') k.of = String(c.of);
    if (c.type === 'tangent' && /S/.test(matchSig(sk, k.type, k.refs).sig) && !endMeet(sk, byId(sk, k.refs[0]), byId(sk, k.refs[1]))) throw new Error(tr('model.sketch.file.tangent_spline_end'));
    if (c.type === 'symmetric' && k.refs[0] === k.refs[1]) throw new Error(tr('model.sketch.file.symmetric_wrong'));
    sk.constraints.push(k);
  }
  for (const k of sk.constraints) if (k.type === 'offsetlink' && !sk.constraints.some((m) => m.id === k.of && m.type === 'offset')) throw new Error(tr('model.sketch.file.offset_lost'));
  for (const id of ids) { const m = /^[a-z](\d+)$/.exec(id); if (m) sk.seq = Math.max(sk.seq, +m[1] + 1); }
  return sk;
}
