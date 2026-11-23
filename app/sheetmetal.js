/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheetmetal.js — sheet metal in PartCraft (DOM-free; 0.4 P15–P17): the features' data, the file reader, and the geometry that
 * needs no kernel (the bent profile of an open base flange, bend allowances, the flat length). brep-sheet.js builds the solids
 * with OpenCascade; sheet-flat.js (an exact-kernel worker op) lays them flat.
 *
 *   sheetbase  { sketch, t, r, k, depth, reverse }   a base flange. A closed profile: a plate t thick. An open profile of
 *              lines: a bent sheet — the sketch is one face, the thickness goes inside the first bend (reverse: outside), every corner
 *              is a bend of inner radius r (outer r + t, both about one centre) — extruded `depth` along the sketch's normal.
 *              t, r, k (the K-factor: where the neutral layer sits, 0…0.5 of t from the inside) are the part's sheet: the
 *              flanges after it use them.
 *   sheetflange { edge: EdgeRef, angle (degrees, 1…180), length, flip, offsets: [a, b], relief 'rect' | 'none', reliefWidth }
 *              an edge flange on a straight edge of the plate's top or bottom face: a bend of the sheet's inner radius
 *              starting at the plate's edge face (the bend outside the plate), then a flat leg `length` long. It bends
 *              toward the side of the picked edge's face (flip: the other side). offsets shorten it from each end of the
 *              edge; with an offset, a rectangular bend relief (reliefWidth wide, r + t deep) is cut into the plate there.
 *
 *   bendAllowance(angleRad, r, t, k) = θ·(r + k·t)   the length of the neutral layer through a bend (flat pattern)
 *   bentProfile(pts, { t, r, side }) → { loop: { segs, poly } (profileFaces' form, sketch units), bends: [{ i, c, theta,
 *              rIn, rOut, rPath, rOff, d }], straights: [flat run of each line] } (side +1: thickness to the left of the
 *              path's direction, −1 right); refuses a leg too short for its bends
 *   flatOfProfile(bp, t, k) → { length, lines: [{ at, from, to, angle, r, ba }] }   the developed length and bend lines
 */
import { t as tr } from './i18n.js';
import { registerParamField } from './params-part.js';
import { add2 as add, cross2 as cross, dot2 as dot, len2 as len, scale2 as mul, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

// numbers a parameter or equation can drive (params-part.js)
registerParamField('sheetbase', 't', { get label() { return tr('sheet.param.t'); }, kind: 'length', min: 0.01, max: 100 });
registerParamField('sheetbase', 'r', { get label() { return tr('sheet.param.r'); }, kind: 'length', min: 0, max: 1000 });
registerParamField('sheetbase', 'k', { get label() { return tr('sheet.param.k'); }, kind: 'number', min: 0, max: 0.5 });
registerParamField('sheetbase', 'depth', { get label() { return tr('sheet.param.depth'); }, kind: 'length', min: 0.01, max: 1e5 });
registerParamField('sheetflange', 'angle', { get label() { return tr('sheet.param.angle'); }, kind: 'angle', min: 1, max: 180 });
registerParamField('sheetflange', 'length', { get label() { return tr('sheet.param.length'); }, kind: 'length', min: 0.01, max: 1e5 });
registerParamField('sheetflange', 'reliefWidth', { get label() { return tr('sheet.param.relief_width'); }, kind: 'length', min: 0.01, max: 100, when: (f) => f.relief === 'rect' });

// the types' names for people, read when shown (getters: never translated at import)
export const SHEET_LABELS = { get sheetbase() { return tr('model.feature.sheetbase'); }, get sheetflange() { return tr('model.feature.sheetflange'); } };
export const SHEET_BASE = { sheetbase: 'BaseFlange', sheetflange: 'EdgeFlange' };
export const SHEET_EXACT_ONLY = ['sheetbase', 'sheetflange'];
export const SHEET_DEFAULTS = {
  sheetbase: () => ({ t: 2, r: 2, k: 0.44, depth: 50, reverse: false }),
  sheetflange: () => ({ edge: null, angle: 90, length: 20, flip: false, offsets: [0, 0], relief: 'rect', reliefWidth: 2 }),
};
export const RELIEFS = ['rect', 'none'];
export const LIMITS = { t: [0.01, 100], r: [0, 1000], k: [0, 0.5], depth: [0.01, 1e5], angle: [1, 180], length: [0.01, 1e5], offset: [0, 1e5] };

const num = (v, [lo, hi]) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

/** Feature ids the sheet metal fields depend on (part.js dependsOn adds the rest: sketch). */
export function sheetDeps(f, nameFeatures) {
  const d = [];
  if (f.type === 'sheetflange' && f.edge && Array.isArray(f.edge.faces)) for (const n of f.edge.faces) d.push(...nameFeatures(n));
  return d;
}

/**
 * Fill g (the clean feature) from f (untrusted) for the sheet metal types. c = part.js's reader context ({ ids, types }),
 * R = design-features.js makeReaders(c) (edgeRef). → true when it handled the type. Messages are file-reader fragments.
 */
export function readSheet(f, g, c, R) {
  const need = (ok, key) => { if (!ok) throw new Error(tr(key, { name: g.name })); };   // key: "{name}: … is bad."
  switch (f.type) {
    case 'sheetbase':
      need(c.ids.has(f.sketch) && c.types.get(f.sketch) === 'sketch', 'model.file.bad.its_sketch');
      need(num(f.t, LIMITS.t) && num(f.r, LIMITS.r) && num(f.k, LIMITS.k) && num(f.depth, LIMITS.depth), 'model.file.bad.its_thickness_radius_k_factor_or_depth');
      Object.assign(g, { sketch: f.sketch, t: f.t, r: f.r, k: f.k, depth: f.depth, reverse: f.reverse === true });
      return true;
    case 'sheetflange':
      need(num(f.angle, LIMITS.angle) && num(f.length, LIMITS.length), 'model.file.bad.its_angle_or_length');
      need(Array.isArray(f.offsets) && f.offsets.length === 2 && f.offsets.every((o) => num(o, LIMITS.offset)), 'model.file.bad.its_offsets');
      need(RELIEFS.includes(f.relief) && num(f.reliefWidth, LIMITS.t), 'model.file.bad.its_relief');
      Object.assign(g, { edge: f.edge === null || f.edge === undefined ? null : R.edgeRef(f.edge), angle: f.angle, length: f.length, flip: f.flip === true, offsets: [...f.offsets], relief: f.relief, reliefWidth: f.reliefWidth });
      return true;
  }
  return false;
}

/** A part with sheet metal features says file version 3 (a version-2 reader would refuse the type anyway). */
export const usesSheetMetal = (part) => part.features.some((f) => SHEET_LABELS[f.type]);
/** The base flange a feature at index i builds on: the last one before it (null: none). */
export function sheetOf(part, i) { for (let j = i - 1; j >= 0; j--) if (part.features[j].type === 'sheetbase' && !part.features[j].suppressed) return part.features[j]; return null; }

export const bendAllowance = (theta, r, t, k) => theta * (r + k * t);

/** One open chain through segments [[a, b], …] (2-D, any order and direction) → its points end to end, or null when they
 *  are not one chain (a branch, a gap, a loop, two pieces). Shared with the rib (brep-rib.js). */
export function lineChain(segs) {
  if (!segs.length) return null;
  const tol = 1e-6 * Math.max(1, ...segs.flat().map((p) => Math.hypot(p[0], p[1])));
  const same = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) <= tol;
  const deg = (p) => segs.reduce((k, s) => k + (same(s[0], p) ? 1 : 0) + (same(s[1], p) ? 1 : 0), 0);
  const start = segs.flat().find((p) => deg(p) === 1);
  if (!start) return null;
  const used = new Set(), pts = [start];
  let cur = start;
  while (used.size < segs.length) {
    const k = segs.findIndex((s, i) => !used.has(i) && (same(s[0], cur) || same(s[1], cur)));
    if (k < 0) return null;
    used.add(k);
    cur = same(segs[k][0], cur) ? segs[k][1] : segs[k][0];
    pts.push(cur);
  }
  return pts.every((p, i) => i === 0 || deg(p) <= 2) ? pts : null;
}

// ---------------------------------------------------------------- the bent profile of an open base flange
const unit = (a) => mul(a, 1 / len(a)), left = (a) => [-a[1], a[0]];

/** An arc segment in profileFaces' form, from a to b about c (radius r), the short way unless sweep says otherwise. */
function arcSeg(id, c, r, a, b, ccw) {
  const a0 = Math.atan2(a[1] - c[1], a[0] - c[0]);
  let a1 = Math.atan2(b[1] - c[1], b[0] - c[0]), sw = a1 - a0;
  if (ccw) { while (sw <= 0) sw += 2 * Math.PI; } else { while (sw >= 0) sw -= 2 * Math.PI; }
  const mid = [c[0] + r * Math.cos(a0 + sw / 2), c[1] + r * Math.sin(a0 + sw / 2)];
  const pts = [];
  for (let i = 0; i <= 16; i++) { const t = a0 + sw * i / 16; pts.push([c[0] + r * Math.cos(t), c[1] + r * Math.sin(t)]); }
  return { id, type: 'arc', a, b, c, r, mid, pts };
}

export function bentProfile(pts, { t, r, side = 1 }) {
  if (!Array.isArray(pts) || pts.length < 2) throw new Error('bentProfile: a path of two or more points.');   // i18n-ignore: a programming error
  const n = pts.length, dirs = [];
  for (let i = 0; i + 1 < n; i++) { const d = sub(pts[i + 1], pts[i]); if (!(len(d) > 1e-9)) throw new Error(tr('sheet.err.zero_line')); dirs.push(unit(d)); }
  // bends at the inner points
  const bends = [], trim = new Array(n).fill(0);
  for (let i = 1; i + 1 < n; i++) {
    const u = dirs[i - 1], w = dirs[i], theta = Math.atan2(cross(u, w), dot(u, w));   // signed turn, CCW positive
    if (Math.abs(theta) < 1e-9) throw new Error(tr('sheet.err.straight_on'));
    if (Math.abs(Math.abs(theta) - Math.PI) < 1e-6) throw new Error(tr('sheet.err.fold_back'));
    const toward = side * Math.sign(theta) > 0;   // the thickness grows toward the bend's centre: the path is its outer face
    const rPath = toward ? r + t : r, rOff = toward ? r : r + t;
    const d = rPath * Math.tan(Math.abs(theta) / 2);
    const c = add(pts[i], add(mul(left(u), Math.sign(theta) * rPath), mul(u, -d)));
    bends.push({ i, theta, rIn: r, rOut: r + t, rPath, rOff, d, c });
    trim[i] = d;
  }
  // legs long enough for their bends
  for (let j = 0; j + 1 < n; j++) {
    const L = len(sub(pts[j + 1], pts[j])), used = (j > 0 ? trim[j] : 0) + (j + 2 < n ? trim[j + 1] : 0);
    if (used > L + 1e-9) throw new Error(tr('sheet.err.short_leg', { n: j + 1, len: +L.toFixed(4), need: +used.toFixed(4) }));
  }
  const off = (p, dirIdx) => add(p, mul(left(dirs[dirIdx]), side * t));
  // the path side: P0 → (line, arc)… → Pn
  const segs = [];
  let id = 0, cur = pts[0];
  const path = [], offs = [];
  for (let j = 0; j + 1 < n; j++) {
    const end = j + 2 < n ? sub(pts[j + 1], mul(dirs[j], trim[j + 1])) : pts[j + 1];
    path.push({ type: 'line', a: cur, b: end });
    if (j + 2 < n) {
      const b = bends[j], next = add(pts[j + 1], mul(dirs[j + 1], trim[j + 1]));
      path.push({ type: 'arc', c: b.c, r: b.rPath, a: end, b: next, ccw: b.theta > 0 });
      cur = next;
    }
  }
  // the offset side, parallel (lines shifted, arcs concentric)
  for (const s of path) {
    if (s.type === 'line') { const k = path.indexOf(s), j = path.slice(0, k).filter((x) => x.type === 'line').length; offs.push({ type: 'line', a: off(s.a, j), b: off(s.b, j) }); }
    else { const k = path.indexOf(s), j = path.slice(0, k).filter((x) => x.type === 'line').length - 1, b = bends[j]; offs.push({ type: 'arc', c: b.c, r: b.rOff, a: off(s.a, j), b: off(s.b, j + 1), ccw: b.theta > 0 }); }
  }
  const push = (s) => { segs.push(s.type === 'line' ? { id: 's' + id++, type: 'line', a: s.a, b: s.b, pts: [s.a, s.b] } : arcSeg('s' + id++, s.c, s.r, s.a, s.b, s.ccw)); };
  path.forEach(push);
  push({ type: 'line', a: pts[n - 1], b: offs[offs.length - 1].b });   // the end cap
  for (let k = offs.length - 1; k >= 0; k--) { const s = offs[k]; push(s.type === 'line' ? { type: 'line', a: s.b, b: s.a } : { type: 'arc', c: s.c, r: s.r, a: s.b, b: s.a, ccw: !s.ccw }); }
  push({ type: 'line', a: offs[0].a, b: pts[0] });   // the start cap
  const poly = segs.flatMap((s) => s.pts.slice(0, -1));
  // the flat: straight runs (path length minus trims) + a bend allowance per bend (k applied by the caller: allowances listed)
  const straights = [];
  for (let j = 0; j + 1 < n; j++) straights.push(len(sub(pts[j + 1], pts[j])) - (j > 0 ? trim[j] : 0) - (j + 2 < n ? trim[j + 1] : 0));
  return { loop: { segs, poly }, bends, straights };
}

/** The flat length of a bent profile and its bend centre-lines (distances from the start of the flat). */
export function flatOfProfile(bp, t, k) {
  let x = 0;
  const lines = [];
  bp.straights.forEach((s, j) => {
    x += s;
    const b = bp.bends[j];
    if (!b) return;
    const ba = bendAllowance(Math.abs(b.theta), b.rIn, t, k);
    lines.push({ at: x + ba / 2, from: x, to: x + ba, angle: b.theta * 180 / Math.PI, r: b.rIn, ba });
    x += ba;
  });
  return { length: x, lines };
}
