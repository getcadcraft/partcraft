/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bodies.js — the data side of the body tools (DOM-free, 2026-10-11): Combine (join / cut / intersect bodies after the
 * fact), Move/Copy body, Scale body, the path pattern, and body copies in linear / circular patterns. part.js keeps the
 * document; this module holds their defaults, references for dependsOn, untrusted-file readers, body ids and the
 * kernel-free arithmetic the exact kernel (brep-bodies.js) and the tests share.
 *
 *   combine     { op join|cut|intersect, target: BodyId|null, tools:[BodyId], keep }
 *   movebody    { bodies:[BodyId], mode translate|points|rotate|align, dx, dy, dz, from: PointRef|null, to: PointRef|null,
 *                 axis: DirRef|null, edge: EdgeRef|null (straight edge, or a circle's axis), face: FaceRef|null (a cylinder's
 *                 axis), angle (°), planes:[PlaneRef from, PlaneRef to] (align), flip, copy }
 *   scalebody   { bodies:[BodyId], uniform, s, sx, sy, sz (world axes), point: PointRef|null (null = the bodies' box centre) }
 *   pathpattern { seeds:[featureId], bodies:[BodyId], path:[PathItem], count, spacing equal|distance, d, orient path|fixed, reverse }
 *   lpattern / cpattern gain bodies:[BodyId] (written only when used): the copies are new bodies.
 *   extrude / revolve op gains intersect and new (as sweep and loft have).
 *
 * Body ids (brep-bodies.js trackBodies): a body is named after the feature whose solid started it — 'f5'; a feature that
 * starts several at once numbers the rest 'f5:2', 'f5:3'; a copy made by a move, a pattern or a path pattern is
 * '<source body>@<feature>#<i>'. A boolean that merges bodies keeps the earliest one's id, Combine keeps its target's,
 * a cut that splits a body leaves every piece under its id. So references survive upstream edits; a body that is gone
 * (merged away, or its feature deleted) fails the feature that names it, saying so.
 */
import { t } from './i18n.js';
import { registerParamField } from './params-part.js';
import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, scale3 as mul, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

// the types' names for people, read when shown (getters: never translated at import; part.js keeps them getters)
export const BODY_LABELS = {
  get combine() { return t('model.feature.combine'); }, get movebody() { return t('model.feature.movebody'); },
  get scalebody() { return t('model.feature.scalebody'); }, get pathpattern() { return t('model.feature.pathpattern'); },
};
export const BODY_BASE = { combine: 'Combine', movebody: 'Move', scalebody: 'Scale', pathpattern: 'PathPattern' };
/** Only OpenCascade builds these (kernel.js skips them with the reason): the mesh kernel has one solid, no bodies. */
export const BODY_EXACT_ONLY = ['combine', 'movebody', 'scalebody', 'pathpattern'];
export const COMBINE_OPS = ['join', 'cut', 'intersect'];
export const MOVE_MODES = ['translate', 'points', 'rotate', 'align'];
export const PATH_SPACING = ['equal', 'distance'];
export const PATH_ORIENT = ['path', 'fixed'];

export const BODY_DEFAULTS = {
  combine: () => ({ op: 'join', target: null, tools: [], keep: false }),
  movebody: () => ({ bodies: [], mode: 'translate', dx: 0, dy: 0, dz: 0, from: null, to: null, axis: { kind: 'world', axis: 'y' }, edge: null, face: null, angle: 90, planes: [], flip: false, copy: false }),
  scalebody: () => ({ bodies: [], uniform: true, s: 2, sx: 1, sy: 1, sz: 1, point: null }),
  pathpattern: () => ({ seeds: [], bodies: [], path: [], count: 4, spacing: 'equal', d: 20, orient: 'path', reverse: false }),
};

// equations may drive these numbers (params-part.js)
registerParamField('movebody', 'dx', { label: 'ΔX', kind: 'length', min: -1e6, max: 1e6, when: (f) => f.mode === 'translate' });
registerParamField('movebody', 'dy', { label: 'ΔY', kind: 'length', min: -1e6, max: 1e6, when: (f) => f.mode === 'translate' });
registerParamField('movebody', 'dz', { label: 'ΔZ', kind: 'length', min: -1e6, max: 1e6, when: (f) => f.mode === 'translate' });
registerParamField('movebody', 'angle', { get label() { return t('model.params_part.field.angle'); }, kind: 'angle', min: -3600, max: 3600, when: (f) => f.mode === 'rotate' });
registerParamField('scalebody', 's', { get label() { return t('model.bodies.field.scale'); }, kind: 'number', min: 1e-6, max: 1e6, when: (f) => f.uniform });
for (const k of ['sx', 'sy', 'sz']) registerParamField('scalebody', k, { get label() { return t('model.bodies.field.scale_axis', { axis: k.slice(1).toUpperCase() }); }, kind: 'number', min: 1e-6, max: 1e6, when: (f) => !f.uniform });
registerParamField('pathpattern', 'count', { get label() { return t('model.params_part.field.count'); }, kind: 'count', min: 1, max: 1000, integer: true });
registerParamField('pathpattern', 'd', { get label() { return t('model.params_part.field.spacing'); }, kind: 'length', min: 1e-6, max: 1e6, when: (f) => f.spacing === 'distance' });

// ---------------------------------------------------------------- body ids
export const BODY_RE = /^f\d{1,16}(:\d{1,4})?(@f\d{1,16}#\d{1,4}){0,24}$/;
export const goodBody = (id) => typeof id === 'string' && id.length <= 300 && BODY_RE.test(id);
/** Feature ids a body id depends on (its maker and every copying feature). */
export const bodyFeatures = (id) => [...new Set(String(id || '').match(/f\d+/g) || [])];
/** A body id in words: its own name when renamed (part.bodyInfo), else "Extrude2", "Extrude2 (2)", "Extrude2, copy 1 of Move1". */
export function bodyLabel(part, id) {
  const own = part.bodyInfo?.[id]?.name;
  if (own) return own;
  return autoBodyLabel(part, id);
}
/** The body's name from the features that made it (what a renamed body goes back to when its name is cleared). */
export function autoBodyLabel(part, id) {
  const nm = (fid) => part.features.find((f) => f.id === fid)?.name || t('model.bodies.deleted_feature');
  const m = /^(f\d+)(?::(\d+))?((?:@f\d+#\d+)*)$/.exec(id || '');
  if (!m) return String(id);
  let s = nm(m[1]) + (m[2] ? ` (${m[2]})` : '');
  for (const k of m[3].matchAll(/@(f\d+)#(\d+)/g)) s += t('model.bodies.copy_of', { i: k[2], name: nm(k[1]) });
  return s;
}

/** Feature ids the body fields of a feature depend on (part.js dependsOn adds the rest). */
export function bodiesDeps(f) {
  const d = new Set();
  const ids = [...(Array.isArray(f.bodies) ? f.bodies : []), ...(Array.isArray(f.tools) ? f.tools : []), ...(typeof f.target === 'string' ? [f.target] : [])];
  if (BODY_LABELS[f.type] || f.type === 'lpattern' || f.type === 'cpattern') for (const b of ids) if (goodBody(b)) bodyFeatures(b).forEach((x) => d.add(x));
  if (f.type === 'movebody' || f.type === 'scalebody') {
    for (const r of [f.axis, f.from, f.to, f.point]) {
      if (!r || typeof r !== 'object') continue;
      if (r.kind === 'ref' || r.kind === 'axis') d.add(r.feature);
      if (r.kind === 'line' || r.kind === 'sketch') d.add(r.sketch);
      if (r.kind === 'vertex' && r.edge && Array.isArray(r.edge.faces)) for (const n of r.edge.faces) for (const k of String(n).match(/f\d+/g) || []) d.add(k);
    }
  }
  return [...d];
}

// ---------------------------------------------------------------- reading untrusted files
const num = (v, lo = -1e9, hi = 1e9) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;
const vec3 = (v) => Array.isArray(v) && v.length === 3 && v.every((x) => num(x));

/**
 * Fill `g` (the clean feature) from `f` (untrusted) for the body types and the bodies of linear / circular patterns.
 * `c` = part.js's reader context { ids, types, readPlane, readDir } plus `R` = design-features.js makeReaders(c).
 * Returns true when it handled the type.
 */
export function readBodies(f, g, c, R) {
  // keys: model.file.bad.* = "{name}: … is bad.", model.file.in.* = "{name}: {problem} (…)."
  const need = (cond, key, fills) => { if (!cond) throw new Error(t(key, { name: g.name, ...fills })); };
  const wrap = (fn, key) => { try { return fn(); } catch (e) { throw new Error(t(key, { name: g.name, problem: e.message.replace(/\.$/, '') })); } };
  const body = (b) => { if (!goodBody(b) || !bodyFeatures(b).every((x) => c.ids.has(x))) throw new Error(t('model.bodies.bad_ref')); return b; };
  const bodies = (v, max = 500) => { need(Array.isArray(v) && v.length <= max, 'model.file.bad.its_body_list'); return wrap(() => v.map(body), 'model.file.in.its_bodies'); };
  const opt = (v, fn, what) => (v === null || v === undefined ? null : wrap(() => fn(v), what));
  switch (f.type) {
    case 'combine':
      need(COMBINE_OPS.includes(f.op), 'model.file.bad.the_operation');
      Object.assign(g, { op: f.op, target: f.target === null || f.target === undefined ? null : wrap(() => body(f.target), 'model.file.in.its_target'), tools: bodies(f.tools), keep: f.keep === true });
      return true;
    case 'movebody':
      need(MOVE_MODES.includes(f.mode), 'model.file.bad.the_move_type');
      for (const k of ['dx', 'dy', 'dz']) need(num(f[k] ?? 0, -1e6, 1e6), 'model.file.bad.field', { field: k });
      need(num(f.angle ?? 0, -3600, 3600), 'model.file.bad.the_angle');
      need(f.planes === undefined || (Array.isArray(f.planes) && f.planes.length <= 2), 'model.file.bad.its_align_planes');
      Object.assign(g, {
        bodies: bodies(f.bodies), mode: f.mode, dx: f.dx ?? 0, dy: f.dy ?? 0, dz: f.dz ?? 0,
        from: opt(f.from, R.pointRef, 'model.file.in.its_from_point'), to: opt(f.to, R.pointRef, 'model.file.in.its_to_point'),
        axis: opt(f.axis, (a) => c.readDir(a, c.ids, c.types), 'model.file.in.its_axis'), edge: opt(f.edge, R.edgeRef, 'model.file.in.its_axis_edge'), face: opt(f.face, R.faceRef, 'model.file.in.its_axis_face'),
        angle: f.angle ?? 0, planes: wrap(() => (f.planes || []).map((p) => c.readPlane(p, c.ids, c.types)), 'model.file.in.its_align_planes'), flip: f.flip === true, copy: f.copy === true,
      });
      return true;
    case 'scalebody':
      for (const k of ['s', 'sx', 'sy', 'sz']) need(num(f[k] ?? 1, 1e-6, 1e6), 'model.file.bad.the_scale', { k });
      Object.assign(g, { bodies: bodies(f.bodies), uniform: f.uniform !== false, s: f.s ?? 1, sx: f.sx ?? 1, sy: f.sy ?? 1, sz: f.sz ?? 1, point: opt(f.point, R.pointRef, 'model.file.in.its_point') });
      return true;
    case 'pathpattern':
      need(Array.isArray(f.seeds) && f.seeds.length <= 500 && f.seeds.every((s) => c.ids.has(s)), 'model.file.bad.the_features_to_pattern');
      need(Number.isInteger(f.count) && f.count >= 1 && f.count <= 1000, 'model.file.bad.the_count');
      need(PATH_SPACING.includes(f.spacing), 'model.file.bad.the_spacing_type'); need(num(f.d, 1e-6, 1e6), 'model.file.bad.the_spacing'); need(PATH_ORIENT.includes(f.orient), 'model.file.bad.the_orientation');
      Object.assign(g, { seeds: [...f.seeds], bodies: bodies(f.bodies ?? []), path: wrap(() => R.list(f.path, R.pathItem, 200, 'model.file.list.the_path'), 'model.file.in.its_path'), count: f.count, spacing: f.spacing, d: f.d, orient: f.orient, reverse: f.reverse === true });
      return true;
    case 'lpattern': case 'cpattern':
      if (f.bodies !== undefined && f.bodies !== null) { const b = bodies(f.bodies); if (b.length) g.bodies = b; }
      return false;
  }
  return false;
}

// ---------------------------------------------------------------- body names and hiding (0.4 P3)
/**
 * part.bodyInfo (optional, version 3): { <body id>: { name?: string ≤ 60, hidden?: true } } — a body's own name (shown
 * wherever the body is named) and whether the view hides it. Display only: hidden bodies are still built, measured and
 * exported. An entry whose body no longer exists is harmless (it applies again if the body comes back, e.g. on undo).
 */
export const BODY_NAME_MAX = 60;
export const cleanBodyName = (s) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, BODY_NAME_MAX);
/** Untrusted bodyInfo → a clean copy, or null when empty. `ids` = the file's feature ids (a body must name only those). */
export function readBodyInfo(raw, ids) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error(t('file.bodies.bad'));
  const keys = Object.keys(raw);
  if (keys.length > 500) throw new Error(t('file.bodies.too_many'));
  const out = {};
  for (const id of keys) {
    const v = raw[id];
    if (!goodBody(id) || !v || typeof v !== 'object' || Array.isArray(v)) throw new Error(t('file.bodies.entry_bad'));
    if (v.name !== undefined && typeof v.name !== 'string') throw new Error(t('file.bodies.name_bad'));
    if (!bodyFeatures(id).every((x) => ids.has(x))) continue;   // its feature was deleted before the save: dropped
    const e = {};
    const name = cleanBodyName(v.name);
    if (name) e.name = name;
    if (v.hidden === true) e.hidden = true;
    if (e.name || e.hidden) out[id] = e;
  }
  return Object.keys(out).length ? out : null;
}
/** Set (or clear, with '' / null) a body's name in place; drops empty entries. */
export function setBodyName(part, id, name) {
  const n = cleanBodyName(name);
  const info = part.bodyInfo || (part.bodyInfo = {});
  const e = { ...(info[id] || {}) };
  if (n && n !== autoBodyLabel(part, id)) e.name = n; else delete e.name;
  if (e.name || e.hidden) info[id] = e; else delete info[id];
  if (!Object.keys(info).length) delete part.bodyInfo;
}
/** Hide or show bodies in place. */
export function setBodiesHidden(part, ids, hidden) {
  const info = part.bodyInfo || (part.bodyInfo = {});
  for (const id of ids) {
    const e = { ...(info[id] || {}) };
    if (hidden) e.hidden = true; else delete e.hidden;
    if (e.name || e.hidden) info[id] = e; else delete info[id];
  }
  if (!Object.keys(info).length) delete part.bodyInfo;
}
export const isBodyHidden = (part, id) => part.bodyInfo?.[id]?.hidden === true;
/**
 * What the view hides for these bodies: exact face indices (regen.faceBody) and exact edges whose every face is hidden.
 * → { faces: Set, edges: Set } or null when nothing is hidden among the built bodies.
 */
export function hiddenGeometry(part, regen) {
  if (!part.bodyInfo || !regen?.faceBody || !regen.faces) return null;
  const hid = new Set((regen.bodies || []).map((b) => b.id).filter((id) => isBodyHidden(part, id)));
  if (!hid.size) return null;
  // a split face keeps its name on both pieces, but no name is in two bodies (brep-bodies.js), so edges go by name
  const faces = new Set(), names = new Set();
  regen.faceBody.forEach((b, i) => { if (hid.has(b)) { faces.add(i); if (regen.faces[i]) names.add(regen.faces[i].name); } });
  const edges = new Set();
  (regen.edges || []).forEach((e, i) => { if (e.faces?.length && e.faces.every((n) => names.has(n))) edges.add(i); });
  return { faces, edges, bodies: hid };
}

/** Does this part use anything a version-2 reader would refuse? (Its file then says version 3.) */
export const usesBodies = (part) => !!(part.bodyInfo && Object.keys(part.bodyInfo).length) || part.features.some((f) => BODY_LABELS[f.type] || ((f.type === 'extrude' || f.type === 'revolve') && (f.op === 'new' || f.op === 'intersect')) || (Array.isArray(f.bodies) && f.bodies.length));

// ---------------------------------------------------------------- arithmetic shared with the tests (kernel-free)

/** Column-major 4×4 of p ↦ c + diag(sx, sy, sz)(p − c). */
export const scaleAbout = (c, sx, sy, sz) => [sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, c[0] * (1 - sx), c[1] * (1 - sy), c[2] * (1 - sz), 1];
/** 3×3 rotation (rows) taking unit a to unit b by the smallest turn (Rodrigues); a ≈ −b turns π about `perp`. */
export function minimalRotation(a, b, perp = null) {
  const v = cross(a, b), c = dot(a, b), s = len(v);
  let k, ang;
  if (s < 1e-12) {
    if (c > 0) return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    k = perp || (Math.abs(a[0]) < 0.9 ? cross(a, [1, 0, 0]) : cross(a, [0, 1, 0]));
    k = mul(k, 1 / len(k)); ang = Math.PI;
  } else { k = mul(v, 1 / s); ang = Math.atan2(s, c); }
  return axisRotation(k, ang);
}
/** 3×3 rotation (rows) about unit axis k by `ang` radians. */
export function axisRotation(k, ang) {
  const c = Math.cos(ang), s = Math.sin(ang), t = 1 - c, [x, y, z] = k;
  return [[t * x * x + c, t * x * y - s * z, t * x * z + s * y], [t * x * y + s * z, t * y * y + c, t * y * z - s * x], [t * x * z - s * y, t * y * z + s * x, t * z * z + c]];
}
export const mat3Mul = (A, B) => A.map((r) => [0, 1, 2].map((j) => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j]));
export const mat3Apply = (A, v) => [dot(A[0], v), dot(A[1], v), dot(A[2], v)];
/** Column-major 4×4 of p ↦ R(p − c) + c + t. */
export function rigid(R, c = [0, 0, 0], t = [0, 0, 0]) {
  const o = add(sub(c, mat3Apply(R, c)), t);
  return [R[0][0], R[1][0], R[2][0], 0, R[0][1], R[1][1], R[2][1], 0, R[0][2], R[1][2], R[2][2], 0, o[0], o[1], o[2], 1];
}

/**
 * Where the instances of a path pattern sit, along a path of total length L, the seed's own spot at arc length s0.
 * → [arc lengths] (instance 0 = the seed), or { error } in words. Closed paths wrap; equal spacing on an open path
 * spreads the count from the seed to the end it points at, on a closed one round the whole loop.
 */
export function pathStations({ L, s0, closed, count, spacing, d, reverse }) {
  const dir = reverse ? -1 : 1;
  const room = closed ? L : dir > 0 ? L - s0 : s0;
  if (count < 2) return [s0];
  let step;
  if (spacing === 'equal') {
    if (!closed && room <= 1e-9 * Math.max(1, L)) return { error: dir > 0 ? t('model.bodies.path.seed_at_end') : t('model.bodies.path.seed_at_start') };
    step = closed ? L / count : room / (count - 1);
  } else {
    step = d;
    if (!closed && step * (count - 1) > room * (1 + 1e-9) + 1e-9) return { error: t('model.bodies.path.too_short', { count, d: +d.toFixed(6), need: +(step * (count - 1)).toFixed(6), left: +room.toFixed(6) }) };
  }
  const out = [];
  for (let i = 0; i < count; i++) { let s = s0 + dir * step * i; if (closed) s = ((s % L) + L) % L; out.push(s); }
  return out;
}
