/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard.js — PartCraft's copy and paste (DOM-free). A clip is plain JSON so it can sit in memory and in
 * localStorage ("partcraft.clipboard", so another tab can paste it). Whatever comes back from storage is
 * untrusted and goes through readClip(), which checks it as strictly as the file loader does (it reuses
 * readSketch / readPart).
 *
 *   { format:'partcraft-clip', version:1, kind, … }
 *   kind 'sketch'    sketch geometry: { sketch:{entities, constraints}, anchor:[x,y], dropped }
 *                    the selected points and curves (a curve brings its end points); relations and
 *                    dimensions among them come along, those that tie them to other geometry (or the
 *                    origin) are dropped — `dropped` counts them, so the app can say so
 *   kind 'features'  a sketch feature, or an extrude / revolve / hole together with its sketch:
 *                    { features:[sketch, solid?], from } (pasted as new features at the rollback bar)
 *   kind 'instance'  an assembly part: { name, part (the part JSON), place:[16 numbers] }
 *
 *   copySketch(sk, ids)            → clip | null
 *   pasteSketch(sk, clip, [dx,dy]) → { ids (new entity ids), constraints (new constraint ids) }   mutates sk
 *   copyFeature(part, id)          → clip, or throws Error with the reason it cannot be copied
 *   pasteFeatures(part, clip)      → { features, note }   mutates part (P.addFeature)
 *   copyInstance(asm, id)          → clip
 *   pasteInstance(asm, clip, mat)  → the new instance   mutates asm (same part when the asm already has it)
 *   readClip(raw)                  → a clean clip, or throws Error
 */
import * as S from './sketch.js';
import * as P from './part.js';
import { insertPart } from './assembly.js';
import { t } from './i18n.js';

export const FORMAT = 'partcraft-clip';
export const VERSION = 1;
export const STORAGE_KEY = 'partcraft.clipboard';
/** Features that can be copied (with their sketch): the rest hang on geometry picked in this part. */
export const COPYABLE = new Set(['sketch', 'extrude', 'revolve', 'hole']);

const clone = (v) => JSON.parse(JSON.stringify(v));
const PREFIX = { point: 'p', line: 'l', circle: 'c', arc: 'a', spline: 's' };
const num = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e9;

// ---------------------------------------------------------------- sketch geometry

/** Copy the selected points and curves of a sketch (ids may include relations; they are ignored). */
export function copySketch(sk, ids) {
  const take = new Set();
  for (const id of ids) {
    if (id === S.ORIGIN) continue;
    const e = sk.entities.find((x) => x.id === id);
    if (!e) continue;
    take.add(e.id);
    if (e.type !== 'point') for (const p of S.pointsOf(e)) take.add(p);
  }
  const entities = sk.entities.filter((e) => take.has(e.id)).map(clone);
  if (!entities.length) return null;
  const constraints = [], dropped = [];
  for (const c of sk.constraints) {
    const inside = c.refs.filter((r) => take.has(r)).length;
    if (inside === c.refs.length) constraints.push(clone(c));
    else if (inside) dropped.push(c.id);
  }
  // an offset link goes only with its offset dimension
  for (let i = constraints.length - 1; i >= 0; i--) {
    const c = constraints[i];
    if (c.type === 'offsetlink' && !constraints.some((m) => m.id === c.of)) { constraints.splice(i, 1); dropped.push(c.id); }
  }
  const sketch = { seq: 1, entities, constraints };
  const b = S.bounds(sketch);
  return {
    format: FORMAT, version: VERSION, kind: 'sketch', sketch,
    anchor: b ? [(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2] : [0, 0],
    dropped: dropped.length,
    curves: entities.filter((e) => e.type !== 'point').length,
    points: S.loosePoints(sketch).length,
  };
}

/** Shift a fix relation's stored position by (dx, dy). */
function shiftFix(c, ents, dx, dy) {
  const e = ents.get(c.refs[0]);
  if (!e || !Array.isArray(c.value)) return;
  const pairs = e.type === 'circle' ? 1 : c.value.length / 2;   // a circle's value ends with its radius
  for (let i = 0; i < pairs; i++) { c.value[2 * i] += dx; c.value[2 * i + 1] += dy; }
}

/** Paste clip geometry into a sketch, moved by d = [dx, dy]. New ids throughout; returns them. */
export function pasteSketch(sk, clip, d = [0, 0]) {
  const [dx, dy] = d;
  const map = new Map([[S.ORIGIN, S.ORIGIN]]);
  const src = clip.sketch;
  for (const e of src.entities) map.set(e.id, PREFIX[e.type] + sk.seq++);
  const ids = [];
  const ents = new Map();
  // points first, so curves always refer to points that exist
  for (const e of [...src.entities.filter((x) => x.type === 'point'), ...src.entities.filter((x) => x.type !== 'point')]) {
    const n = clone(e);
    n.id = map.get(e.id);
    if (n.type === 'point') { n.x += dx; n.y += dy; }
    for (const k of ['p1', 'p2', 'c', 's', 'e']) if (typeof n[k] === 'string' && n.type !== 'point') n[k] = map.get(n[k]);
    if (n.type === 'spline') n.pts = n.pts.map((p) => map.get(p));
    sk.entities.push(n);
    ids.push(n.id);
    ents.set(n.id, n);
  }
  const cons = [];
  const kmap = new Map();
  for (const c of src.constraints) {
    if (!c.refs.every((r) => map.has(r))) continue;
    const n = clone(c);
    n.id = 'k' + sk.seq++;
    kmap.set(c.id, n.id);
    if (n.type === 'offsetlink') { if (!kmap.has(c.of)) continue; n.of = kmap.get(c.of); }
    n.refs = c.refs.map((r) => map.get(r));
    if (n.type === 'fix') shiftFix(n, ents, dx, dy);
    if (Array.isArray(n.at)) n.at = [n.at[0] + dx, n.at[1] + dy];
    sk.constraints.push(n);
    cons.push(n.id);
  }
  return { ids, constraints: cons };
}

// ---------------------------------------------------------------- features

/** Copy a feature of the part: a sketch, or a sketch-based feature with its sketch. Throws Error(reason). */
export function copyFeature(part, id) {
  const f = P.featureById(part, id);
  if (!f) throw new Error(t('xch.clip.select_feature'));
  if (!COPYABLE.has(f.type)) throw new Error(t('xch.clip.not_copyable', { name: f.name }));
  const feats = [];
  if (f.type !== 'sketch') {
    const s = P.featureById(part, f.sketch);
    if (!s) throw new Error(t('xch.clip.no_sketch', { name: f.name }));
    feats.push(clone(s));
  }
  feats.push(clone(f));
  return { format: FORMAT, version: VERSION, kind: 'features', from: part.name, features: feats };
}

/** Does a plane reference only name features this part has? */
function planeFits(part, plane) {
  if (plane.kind !== 'face') return true;
  const need = [plane.feature, ...(plane.name ? P.nameFeatures(plane.name) : [])];
  return need.every((id) => P.featureById(part, id));
}

/** Paste copied features as new ones (new ids and names) at the rollback bar. → { features, note } */
export function pasteFeatures(part, clip) {
  const out = [];
  let note = '';
  const [s0, solid] = clip.features[0].type === 'sketch' ? clip.features : [null, clip.features[0]];
  let sketchId = null;
  if (s0) {
    let plane = clone(s0.plane);
    if (!planeFits(part, plane)) { plane = { kind: 'base', name: 'front' }; note = t('xch.clip.face_missing', { name: s0.name }); }
    const ns = P.addFeature(part, 'sketch', { plane, sketch: clone(s0.sketch) });
    out.push(ns);
    sketchId = ns.id;
  }
  if (solid && solid.type !== 'sketch') {
    const props = clone(solid);
    delete props.id; delete props.name; delete props.type;
    props.sketch = sketchId;
    out.push(P.addFeature(part, solid.type, props));
  }
  return { features: out, note };
}

// ---------------------------------------------------------------- assembly instances

export function copyInstance(asm, id) {
  const inst = asm.instances.find((i) => i.id === id);
  if (!inst) return null;
  const p = asm.parts[inst.part];
  return { format: FORMAT, version: VERSION, kind: 'instance', name: p.name, part: clone(p.part), place: [...inst.place] };
}

/** Paste a part instance with placement `place` (16 numbers). Reuses the assembly's copy of the same part. */
export function pasteInstance(asm, clip, place) {
  const want = P.toJSON(P.readPart(clip.part));
  const pid = Object.keys(asm.parts).find((k) => { try { return P.toJSON(P.readPart(asm.parts[k].part)) === want; } catch { return false; } });
  if (pid) return insertPart(asm, null, { pid, place });
  return insertPart(asm, P.readPart(clip.part), { place });
}

// ---------------------------------------------------------------- untrusted clips

/** Check a clip read back from storage (or anywhere): returns a clean copy or throws Error. */
export function readClip(raw) {
  let j = raw;
  if (typeof raw === 'string') {
    if (raw.length > 80 * 1024 * 1024) throw new Error(t('xch.clip.too_big'));
    try { j = JSON.parse(raw); } catch { throw new Error(t('xch.clip.not_partcraft')); }
  }
  if (!j || typeof j !== 'object' || j.format !== FORMAT) throw new Error(t('xch.clip.not_partcraft'));
  if (j.version !== VERSION) throw new Error(t('xch.clip.other_version'));
  if (j.kind === 'sketch') {
    const sk = S.readSketch(j.sketch);
    if (!sk.entities.length) throw new Error(t('xch.clip.sketch_empty'));
    if (sk.constraints.some((c) => c.refs.includes(S.ORIGIN))) throw new Error(t('xch.clip.sketch_origin'));
    if (!Array.isArray(j.anchor) || j.anchor.length !== 2 || !j.anchor.every(num)) throw new Error(t('xch.clip.sketch_no_position'));
    const dropped = Number.isInteger(j.dropped) && j.dropped >= 0 && j.dropped < 1e6 ? j.dropped : 0;
    return { format: FORMAT, version: VERSION, kind: 'sketch', sketch: sk, anchor: [...j.anchor], dropped, curves: sk.entities.filter((e) => e.type !== 'point').length, points: S.loosePoints(sk).length };
  }
  if (j.kind === 'features') {
    const f = j.features;
    if (!Array.isArray(f) || f.length < 1 || f.length > 2) throw new Error(t('xch.clip.features_bad'));
    const types = f.map((x) => x && x.type);
    const okShape = (f.length === 1 && types[0] === 'sketch') || (f.length === 2 && types[0] === 'sketch' && ['extrude', 'revolve', 'hole'].includes(types[1]) && f[1].sketch === f[0].id);
    if (!okShape) throw new Error(t('xch.clip.features_bad'));
    // the plane may name a face of another part: check its shape here, whether it fits when pasted
    const plane = f[0].plane;
    const ids = new Set(plane && plane.kind === 'face' ? [plane.feature, ...(plane.name ? P.nameFeatures(plane.name) : [])].filter((x) => /^f\d{1,16}$/.test(x)) : []);
    const cleanPlane = P.readPlane(plane, ids);
    const tmp = P.readPart({ format: P.FORMAT, version: P.VERSION, name: 'clip', features: f.map((x, i) => (i === 0 ? { ...x, plane: { kind: 'base', name: 'front' } } : x)) });
    tmp.features[0].plane = cleanPlane;
    return { format: FORMAT, version: VERSION, kind: 'features', from: String(j.from ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 120), features: tmp.features };
  }
  if (j.kind === 'instance') {
    const part = P.readPart(j.part);
    if (!Array.isArray(j.place) || j.place.length !== 16 || !j.place.every(num)) throw new Error(t('xch.clip.part_position'));
    return { format: FORMAT, version: VERSION, kind: 'instance', name: part.name, part: JSON.parse(P.toJSON(part)), place: [...j.place] };
  }
  throw new Error(t('xch.clip.unknown_kind'));
}

/** Words for a clip: "2 curves", "Sketch2 and Extrude1", "Bracket". */
export function describeClip(c) {
  if (!c) return '';
  if (c.kind === 'sketch') {
    const parts = [];
    if (c.curves) parts.push(t('xch.clip.curves', { n: c.curves }));
    if (c.points) parts.push(t('xch.clip.points', { n: c.points }));
    return parts.reduce((a, b) => t('xch.clip.and', { a, b })) || t('xch.clip.sketch_geometry');
  }
  if (c.kind === 'features') return c.features.length ? c.features.map((f) => f.name).reduce((a, b) => t('xch.clip.and', { a, b })) : '';
  return c.name;
}
