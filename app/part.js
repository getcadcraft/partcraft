/* SPDX-License-Identifier: Apache-2.0 */
/**
 * part.js — the part document: an ordered feature history (DOM-free). Saved as JSON
 * (`<name>.partcraft.json`, format 'partcraft', version 1). Geometry is never stored: kernel.js
 * rebuilds the solid from the history every time.
 *
 *   part = { format, version, name, units:'mm', resolution, seq, rollback, features: [feature] }
 *   rollback: null (build everything) or the number of features built (0 … features.length)
 *
 * Features (each { id, type, name, suppressed? }):
 *   sketch   { plane: PlaneRef, sketch }                                     (sketch.js data)
 *   extrude  { sketch, op:'add'|'cut', end:'blind'|'mid'|'through', depth, reverse }
 *   revolve  { sketch, op, axis: lineId|null (null = first construction line), angle (degrees) }
 *   hole     { sketch, kind:'simple'|'cbore', d, depth, through, cboreD, cboreDepth, reverse }   at the sketch's points
 *   lpattern { seeds:[featureId], dir: DirRef, count, spacing, reverse }
 *   cpattern { seeds:[featureId], axis: DirRef, count, angle, reverse }  (360 = equal spacing all round)
 *   mirror   { seeds:[featureId] | 'body', plane: PlaneRef }
 *   fillet   { edges: [EdgeRef], r }          (exact kernel only) constant-radius round
 *   chamfer  { edges: [EdgeRef], d }          (exact kernel only) equal-distance chamfer
 *   shell    { faces: [FaceRef], t, outward } (exact kernel only) hollow the body, the picked faces open
 *   import   { file, step, up:'z'|'y' }       (exact kernel only) a solid read from STEP text (kept in the file)
 *   EdgeRef:  { faces: [faceName, faceName], at: [x,y,z] }   the edge between two named faces (brep.js), nearest `at`
 *   FaceRef:  { name: faceName, at: [x,y,z] }
 *
 *   drawing (optional): { section: null | { of:'front'|'top'|'right', at? }, detail: null | { of, at:[u,v], r, scale },
 *            notes: [gdt.js annotations], sheet?: SHEET_KEYS (absent = A3), title?: { TITLE_FIELDS }, revisions?: [{ rev, desc,
 *            date, by }] }   the drawing sheet's extra views, GD&T / surface-finish notes, size, title block, revisions (0.4)
 *   material (optional, 0.4): { name, density g/cm³ } (bom.js readMaterial) — the title block's material, mass properties
 *   studies (optional, version 3): { form?, simulation?, generative?, manufacture?, … }   per-workspace data; each key is
 *            read by the reader its workspace registered (registerStudyReader); a key nobody reads is refused.
 *            A file says version 3 only when it carries studies (fileVersion), so other parts stay version 2.
 *   params (optional, version 3; absent when empty): { vars:[{name, expr, note?}], links:[{target, expr}] } — global
 *            variables and equations (params.js); link targets are params-part.js keys "<featureId>.<field>" (f3.depth)
 *            and "<sketchFeatureId>.<constraintId>" (f1.k7). readPart checks it after the features (an equation on a
 *            number the file lacks is refused). Driven numbers keep their last resolved value in the features, so a
 *            reader that ignores params builds the same part.
 *   configs (optional, version 3; 0.4 P18): { rows: [{ name, values: { <parameter>: number } }], active } — configurations
 *            (configs.js): named rows of driving-parameter values; the part as saved is built with its current parameters.
 *            0.6 LC.14: a row may carry `off: [feature id]` (features it turns off); a file with any such row is version 4,
 *            so a 0.5 PartCraft refuses it by its version instead of dropping the rows' features silently.
 *
 *   PlaneRef: { kind:'base', name:'front'|'top'|'right' }
 *           | { kind:'face', feature, face:'start'|'end'|'side', entity? }   follows the feature when it changes
 *           | { kind:'face', feature, face:'named', name }                   any named face of the exact kernel (brep.js)
 *           | { kind:'fixed', o:[x,y,z], n:[x,y,z] }                          a plane that stays where it was picked
 *   DirRef:   { kind:'world', axis:'x'|'y'|'z' } | { kind:'line', sketch, entity } | { kind:'axis', feature } (a revolve's axis)
 *           | { kind:'fixed', o:[x,y,z], d:[x,y,z] }                          an edge picked on the model
 *   Design features (design-features.js, 2026-10-11): plane / axis / point (reference geometry), sweep, loft, draft, the new
 *   extrude / hole / chamfer / fillet options, PointRef, and PlaneRef / DirRef { kind:'ref', feature }. A file using any
 *   of them says version 3 (fileVersion), so a version-2 PartCraft refuses it by its version instead of by a feature.
 *   Freeform features (surface.js, 2026-10-11): form (a form.js cage), patch, surfloft, stitch, thicken, offsetsurf,
 *   extendsurf, trimsurf, gordon (curve network, gordon.js) — surface bodies live under the id of the feature that made
 *   them; also version 3.
 *   Body tools (bodies.js, 2026-10-11): combine, movebody, scalebody, pathpattern, body copies in l/cpattern (`bodies`),
 *   extrude / revolve op intersect | new; body ids follow brep-bodies.js trackBodies. Also version 3.
 *   bodyInfo (optional, version 3; 0.4): { <body id>: { name?, hidden? } } — bodies renamed or hidden in the view
 *            (bodies.js readBodyInfo; display only).
 */
import { newSketch, readSketch } from './sketch.js';
import { readNotes } from './gdt.js';
import { DESIGN_LABELS, DESIGN_BASE, DESIGN_EXACT_ONLY, DESIGN_DEFAULTS, designDeps, readDesign, usesDesign, HOLE_KINDS, makeReaders } from './design-features.js';
import { BODY_LABELS, BODY_BASE, BODY_EXACT_ONLY, BODY_DEFAULTS, bodiesDeps, readBodies, usesBodies, readBodyInfo } from './bodies.js';
import { SURFACE_LABELS, SURFACE_BASE, SURFACE_EXACT_ONLY, SURFACE_DEFAULTS, surfaceDeps, readSurface, usesSurface } from './surface.js';
import { SHEET_LABELS, SHEET_BASE, SHEET_EXACT_ONLY, SHEET_DEFAULTS, sheetDeps, readSheet, usesSheetMetal } from './sheetmetal.js';
import { readPartParams } from './params-part.js';
import { readConfigs } from './configs.js';
import { RIB_LABELS, RIB_BASE, RIB_EXACT_ONLY, RIB_DEFAULTS, readRib, usesRib } from './rib.js';
import { THREAD_LABELS, THREAD_BASE, THREAD_DEFAULTS, readThread, readHoleThread, usesThread } from './threads.js';
import { readMaterial } from './bom.js';
import { t } from './i18n.js';

export const FORMAT = 'partcraft';
export const VERSION = 4;   // 2 added fillet, chamfer, shell, import, named face references and drawing notes; 3 added studies; 4 configurations that turn features off (0.6 LC.14); 1–3 open unchanged

// Each type's name for people. Getters, read when shown: workers and Node import this before the language catalog. The
// other modules' tables are getters too and are copied as getters (a spread would read them now).
export const FEATURE_LABELS = Object.defineProperties({
  get sketch() { return t('model.feature.sketch'); },
  get extrude() { return t('model.feature.extrude'); },
  get revolve() { return t('model.feature.revolve'); },
  get hole() { return t('model.feature.hole'); },
  get lpattern() { return t('model.feature.lpattern'); },
  get cpattern() { return t('model.feature.cpattern'); },
  get mirror() { return t('model.feature.mirror'); },
  get fillet() { return t('model.feature.fillet'); },
  get chamfer() { return t('model.feature.chamfer'); },
  get shell() { return t('model.feature.shell'); },
  get import() { return t('model.feature.import'); },
}, Object.assign({}, ...[DESIGN_LABELS, SURFACE_LABELS, BODY_LABELS, SHEET_LABELS, RIB_LABELS, THREAD_LABELS].map((L) => Object.getOwnPropertyDescriptors(L))));
/** Features only the exact (OpenCascade) kernel builds. */
export const EXACT_ONLY = new Set(['fillet', 'chamfer', 'shell', 'import', ...DESIGN_EXACT_ONLY, ...SURFACE_EXACT_ONLY, ...BODY_EXACT_ONLY, ...SHEET_EXACT_ONLY, ...RIB_EXACT_ONLY]);

export function newPart(name = 'Part1') {
  return { format: FORMAT, version: 2, name, units: 'mm', resolution: 64, seq: 1, rollback: null, features: [] };   // files: fileVersion()
}

export const featureById = (part, id) => part.features.find((f) => f.id === id) || null;
export const indexOf = (part, id) => part.features.findIndex((f) => f.id === id);
/** How many features are built (the rollback bar sits after this many). */
export const builtCount = (part) => (part.rollback === null ? part.features.length : Math.min(part.rollback, part.features.length));

function nextName(part, type) {
  const base = { sketch: 'Sketch', extrude: 'Extrude', revolve: 'Revolve', hole: 'Hole', lpattern: 'LPattern', cpattern: 'CirPattern', mirror: 'Mirror', fillet: 'Fillet', chamfer: 'Chamfer', shell: 'Shell', import: 'Imported', ...DESIGN_BASE, ...SURFACE_BASE, ...BODY_BASE, ...SHEET_BASE, ...RIB_BASE, ...THREAD_BASE }[type];
  let n = 1;
  const names = new Set(part.features.map((f) => f.name));
  while (names.has(base + n)) n++;
  return base + n;
}

const DEFAULTS = {
  sketch: () => ({ plane: { kind: 'base', name: 'front' }, sketch: newSketch() }),
  extrude: () => ({ sketch: null, op: 'add', end: 'blind', depth: 10, reverse: false }),
  revolve: () => ({ sketch: null, op: 'add', axis: null, angle: 360 }),
  hole: () => ({ sketch: null, kind: 'simple', d: 6, depth: 10, through: true, cboreD: 11, cboreDepth: 6, reverse: false }),
  lpattern: () => ({ seeds: [], dir: { kind: 'world', axis: 'x' }, count: 3, spacing: 20, reverse: false }),
  cpattern: () => ({ seeds: [], axis: { kind: 'world', axis: 'y' }, count: 6, angle: 360, reverse: false }),
  mirror: () => ({ seeds: [], plane: { kind: 'base', name: 'right' } }),
  fillet: () => ({ edges: [], r: 2 }),
  chamfer: () => ({ edges: [], d: 1 }),
  shell: () => ({ faces: [], t: 2, outward: false }),
  import: () => ({ file: '', step: '', up: 'z' }),
  ...DESIGN_DEFAULTS,
  ...SURFACE_DEFAULTS,
  ...BODY_DEFAULTS,
  ...SHEET_DEFAULTS,
  ...RIB_DEFAULTS,
  ...THREAD_DEFAULTS,
};

/** Feature ids a face name depends on (same rule as brep.js nameFeatures). */
export function nameFeatures(name) {
  const out = new Set();
  const m = /^(f\d+)\./.exec(name || '');
  if (m) out.add(m[1]);
  for (const k of String(name || '').matchAll(/[@~](f\d+)/g)) out.add(k[1]);
  return [...out];
}

/** Insert a new feature at the rollback bar (or the end); the bar moves past it. Returns it. */
export function addFeature(part, type, props = {}) {
  const f = { id: 'f' + part.seq++, type, name: nextName(part, type), ...DEFAULTS[type](), ...props };
  const at = builtCount(part);
  part.features.splice(at, 0, f);
  if (part.rollback !== null) part.rollback = at + 1;
  if (part.rollback !== null && part.rollback >= part.features.length) part.rollback = null;
  return f;
}

/** Feature ids this feature needs (sketch, the face its plane sits on, seeds, reference lines/axes). */
export function dependsOn(f) {
  const d = new Set();
  if (typeof f.sketch === 'string') d.add(f.sketch);
  const plane = f.type === 'sketch' || f.type === 'mirror' ? f.plane : null;
  if (plane && plane.kind === 'face') { d.add(plane.feature); if (plane.name) nameFeatures(plane.name).forEach((x) => d.add(x)); }
  if (Array.isArray(f.edges)) for (const e of f.edges) for (const n of e.faces) nameFeatures(n).forEach((x) => d.add(x));
  if (Array.isArray(f.faces)) for (const r of f.faces) nameFeatures(r.name).forEach((x) => d.add(x));
  if (Array.isArray(f.seeds)) f.seeds.forEach((s) => d.add(s));
  for (const r of [f.dir, f.axis && typeof f.axis === 'object' ? f.axis : null]) {
    if (!r) continue;
    if (r.kind === 'line') d.add(r.sketch);
    if (r.kind === 'axis') d.add(r.feature);
  }
  for (const x of designDeps(f, nameFeatures)) d.add(x);
  for (const x of surfaceDeps(f)) d.add(x);
  for (const x of bodiesDeps(f)) d.add(x);
  for (const x of sheetDeps(f, nameFeatures)) d.add(x);
  if (f.plane && f.plane.kind === 'ref') d.add(f.plane.feature);
  return [...d];
}

/** Features that (directly) use `id`. */
export const dependents = (part, id) => part.features.filter((f) => dependsOn(f).includes(id));

/** Can feature `id` move to position `to` (index in the list after removal)? → { ok, reason } */
export function canMove(part, id, to) {
  const from = indexOf(part, id);
  if (from < 0 || to < 0 || to >= part.features.length) return { ok: false, reason: t('model.part.move.at_end') }; 
  if (to === from) return { ok: false, reason: t('model.part.move.there') };
  const f = part.features[from];
  const order = part.features.filter((g) => g !== f);
  order.splice(to, 0, f);
  const pos = new Map(order.map((g, i) => [g.id, i]));
  for (const g of order) {
    for (const d of dependsOn(g)) {
      if (pos.has(d) && pos.get(d) > pos.get(g.id)) {
        const dep = featureById(part, d);
        return { ok: false, reason: t('model.part.move.uses', { name: g.name, dep: dep.name }) };
      }
    }
  }
  return { ok: true };
}

export function moveFeature(part, id, to) {
  const ok = canMove(part, id, to);
  if (!ok.ok) return ok;
  const from = indexOf(part, id);
  const built = builtCount(part);
  const [f] = part.features.splice(from, 1);
  part.features.splice(to, 0, f);
  if (part.rollback !== null) part.rollback = built;
  return { ok: true };
}

/** Delete features and everything that depends on them (returns the names removed). */
export function deleteFeatures(part, ids) {
  const gone = new Set(ids);
  let grew = true;
  while (grew) {
    grew = false;
    for (const f of part.features) if (!gone.has(f.id) && dependsOn(f).some((d) => gone.has(d))) { gone.add(f.id); grew = true; }
  }
  const built = builtCount(part);
  const before = part.features.slice(0, built).filter((f) => gone.has(f.id)).length;
  const names = part.features.filter((f) => gone.has(f.id)).map((f) => f.name);
  part.features = part.features.filter((f) => !gone.has(f.id));
  if (part.rollback !== null) { part.rollback = built - before; if (part.rollback >= part.features.length) part.rollback = null; }
  return names;
}

/** The version a file of this part needs: 4 when a configuration turns features off, 3 with studies (a version-2 reader
 *  would drop them silently), else 2. */
export const fileVersion = (part) => (configsOff(part) ? 4 : ((part.studies && Object.keys(part.studies).length) || usesDesign(part) || usesSurface(part) || usesBodies(part) || hasParamsKey(part) || usesSheet(part) || usesSheetMetal(part) || hasConfigs(part) || usesRib(part) || usesThread(part) ? 3 : 2));
const configsOff = (part) => !!(part.configs && part.configs.rows && part.configs.rows.some((r) => r.off && r.off.length));
const hasConfigs = (part) => !!(part.configs && part.configs.rows && part.configs.rows.length);
/** 0.4 P14: a material, or a drawing's sheet size, title block or revisions — a version-2 reader would drop them silently. */
const usesSheet = (part) => !!(part.material || (part.drawing && ((part.drawing.sheet && part.drawing.sheet !== 'a3') || part.drawing.title || (part.drawing.revisions && part.drawing.revisions.length) || part.drawing.holeTable)));
/** params (params-part.js) is written only when it holds a variable or an equation. */
const hasParamsKey = (part) => !!(part.params && ((part.params.vars && part.params.vars.length) || (part.params.links && part.params.links.length)));
export const toJSON = (part) => { const { params, configs, ...rest } = part; return JSON.stringify({ ...rest, ...(hasParamsKey(part) ? { params } : {}), ...(hasConfigs(part) ? { configs } : {}), version: fileVersion(part) }, null, 1); };

// ---------------------------------------------------------------- studies (per-workspace data, version 3)
const STUDY_READERS = new Map();   // key → reader(raw, { ids, part }) → clean value, or throws Error with a plain message
export const STUDY_KEY = /^[a-z][a-z0-9-]{0,30}$/;
/** A workspace's reader for its key of part.studies (untrusted input: range-check everything, return a clean copy). */
export function registerStudyReader(key, fn) {
  if (!STUDY_KEY.test(key) || typeof fn !== 'function') throw new Error('registerStudyReader(key, fn): bad key or reader.');   // i18n-ignore: developer error
  if (STUDY_READERS.has(key)) throw new Error(`A study reader for "${key}" is already registered.`);   // i18n-ignore: developer error (two modules register one key)
  STUDY_READERS.set(key, fn);
}
export const studyKeys = () => [...STUDY_READERS.keys()];
/** part.studies[key] (undefined when absent). */
export const study = (part, key) => part.studies?.[key];
/** Set (value) or remove (undefined/null) part.studies[key]; an empty studies object is removed. Use inside commit(). */
export function setStudy(part, key, value) {
  if (!STUDY_READERS.has(key)) throw new Error(`No study reader is registered for "${key}".`);   // i18n-ignore: developer error
  if (value === undefined || value === null) { if (part.studies) delete part.studies[key]; }
  else (part.studies ||= {})[key] = value;
  if (part.studies && !Object.keys(part.studies).length) delete part.studies;
}

function readStudies(s, part, ids) {
  if (!s || typeof s !== 'object' || Array.isArray(s)) throw new Error(t('model.part.file.studies_bad'));
  const keys = Object.keys(s);
  if (!keys.length) return;
  if (keys.length > 32) throw new Error(t('model.part.file.too_many_studies'));
  const out = {};
  for (const k of keys) {
    const fn = STUDY_KEY.test(k) && STUDY_READERS.get(k);
    if (!fn) throw new Error(t('model.part.file.unknown_study', { key: text(k, 40) }));
    const v = fn(s[k], { ids, part });
    if (v !== undefined && v !== null) out[k] = v;
  }
  if (Object.keys(out).length) part.studies = out;
}

// ---------------------------------------------------------------- reading untrusted files

const num = (v, lo = -1e9, hi = 1e9) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;
const vec3 = (v) => Array.isArray(v) && v.length === 3 && v.every((x) => num(x)) && Math.hypot(...v) <= 1e9;
const ID = /^f\d{1,9}$/;
const text = (s, max = 120) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);
const NAME_RE = /^f\d{1,9}\.[a-z]+(:[A-Za-z0-9_:-]{1,40})?([@~]f\d{1,9}(#(\d{1,4}|m))?){0,24}$/;
const goodName = (n) => typeof n === 'string' && n.length <= 400 && NAME_RE.test(n);

export function readPlane(p, ids, types = null) {
  if (!p || typeof p !== 'object') throw new Error(t('model.part.file.plane_missing'));
  if (p.kind === 'ref' && ids.has(p.feature) && (!types || types.get(p.feature) === 'plane')) return { kind: 'ref', feature: p.feature };
  if (p.kind === 'base' && ['front', 'top', 'right'].includes(p.name)) return { kind: 'base', name: p.name };
  if (p.kind === 'face' && ids.has(p.feature) && ['start', 'end', 'side'].includes(p.face)) {
    const r = { kind: 'face', feature: p.feature, face: p.face };
    if (p.face === 'side') { if (typeof p.entity !== 'string' || p.entity.length > 40) throw new Error(t('model.part.file.face_bad')); r.entity = p.entity; }
    return r;
  }
  if (p.kind === 'face' && p.face === 'named' && goodName(p.name) && ids.has(nameFeatures(p.name)[0])) return { kind: 'face', feature: nameFeatures(p.name)[0], face: 'named', name: p.name };
  if (p.kind === 'fixed' && vec3(p.o) && vec3(p.n) && Math.hypot(...p.n) > 1e-9) return { kind: 'fixed', o: [...p.o], n: [...p.n] };
  throw new Error(t('model.part.file.plane_bad'));
}

function readDir(d, ids, types = null) {
  if (!d || typeof d !== 'object') throw new Error(t('model.part.file.dir_missing'));
  if (d.kind === 'ref' && ids.has(d.feature) && (!types || ['axis', 'plane'].includes(types.get(d.feature)))) return { kind: 'ref', feature: d.feature };
  if (d.kind === 'world' && ['x', 'y', 'z'].includes(d.axis)) return { kind: 'world', axis: d.axis };
  if (d.kind === 'line' && ids.has(d.sketch) && typeof d.entity === 'string' && d.entity.length <= 40) return { kind: 'line', sketch: d.sketch, entity: d.entity };
  if (d.kind === 'axis' && ids.has(d.feature)) return { kind: 'axis', feature: d.feature };
  if (d.kind === 'fixed' && vec3(d.o) && vec3(d.d) && Math.hypot(...d.d) > 1e-9) return { kind: 'fixed', o: [...d.o], d: [...d.d] };
  throw new Error(t('model.part.file.dir_bad'));
}

/** Check an opened file; returns a clean part or throws Error with a plain message. */
export function readPart(raw) {
  let j = raw;
  if (typeof raw === 'string') { try { j = JSON.parse(raw); } catch { throw new Error(t('model.part.file.not_json')); } }
  if (!j || j.format !== FORMAT) throw new Error(t('model.part.file.not_partcraft'));
  if (!Number.isInteger(j.version) || j.version < 1) throw new Error(t('model.part.file.no_version'));
  if (j.version > VERSION) throw new Error(t('model.part.file.newer', { v: j.version, max: VERSION }));
  if (!Array.isArray(j.features) || j.features.length > 2000) throw new Error(t('model.part.file.no_features'));
  const part = newPart(text(j.name) || 'Part1');
  if (num(j.resolution, 8, 512)) part.resolution = Math.round(j.resolution);
  const ids = new Set();
  const types = new Map();
  const dc = { ids, types, goodName, nameFeatures, readPlane, readDir };
  let maxN = 0;
  for (const f of j.features) {
    if (!f || !ID.test(f.id) || ids.has(f.id) || !FEATURE_LABELS[f.type]) throw new Error(t('model.part.file.feature_bad'));
    const g = { id: f.id, type: f.type, name: text(f.name, 60) || f.id };
    if (f.suppressed === true) g.suppressed = true;
    // keys: model.file.bad.* = "{name}: … is bad."
    const need = (cond, key, fills) => { if (!cond) throw new Error(t(key, { name: g.name, ...fills })); };
    const sketchRef = () => { need(ids.has(f.sketch) && part.features.find((x) => x.id === f.sketch)?.type === 'sketch', 'model.file.bad.its_sketch'); return f.sketch; };
    switch (f.type) {
      case 'sketch': g.plane = readPlane(f.plane, ids, types); g.sketch = readSketch(f.sketch); break;
      case 'extrude':
        g.sketch = sketchRef(); need(['add', 'cut', 'intersect', 'new'].includes(f.op), 'model.file.bad.the_operation'); need(['blind', 'mid', 'through', 'upto', 'next', 'vertex', 'offset'].includes(f.end), 'model.file.bad.the_end_condition'); need(num(f.depth, 1e-6, 1e6), 'model.file.bad.the_depth');
        Object.assign(g, { op: f.op, end: f.end, depth: f.depth, reverse: f.reverse === true }); readDesign(f, g, dc); break;
      case 'revolve':
        g.sketch = sketchRef(); need(['add', 'cut', 'intersect', 'new'].includes(f.op), 'model.file.bad.the_operation'); need(num(f.angle, 1e-3, 360), 'model.file.bad.the_angle'); need(f.axis === null || f.axis === undefined || typeof f.axis === 'string' || typeof f.axis === 'object', 'model.file.bad.the_axis');
        Object.assign(g, { op: f.op, angle: f.angle, axis: f.axis && typeof f.axis === 'object' ? readDir(f.axis, ids, types) : f.axis ?? null }); break;
      case 'hole':
        g.sketch = sketchRef(); need(HOLE_KINDS.includes(f.kind), 'model.file.bad.the_hole_type');
        for (const k of ['d', 'depth', 'cboreD', 'cboreDepth']) need(num(f[k], 1e-6, 1e6), 'model.file.bad.field', { field: k });
        Object.assign(g, { kind: f.kind, d: f.d, depth: f.depth, through: f.through === true, cboreD: f.cboreD, cboreDepth: f.cboreDepth, reverse: f.reverse === true }); readDesign(f, g, dc); readHoleThread(f, g); break;
      case 'lpattern':
        need(Array.isArray(f.seeds) && f.seeds.every((s) => ids.has(s)), 'model.file.bad.the_features_to_pattern'); need(Number.isInteger(f.count) && f.count >= 1 && f.count <= 1000, 'model.file.bad.the_count'); need(num(f.spacing, -1e6, 1e6), 'model.file.bad.the_spacing');
        Object.assign(g, { seeds: [...f.seeds], dir: readDir(f.dir, ids), count: f.count, spacing: f.spacing, reverse: f.reverse === true }); readBodies(f, g, dc, makeReaders(dc)); break;
      case 'cpattern':
        need(Array.isArray(f.seeds) && f.seeds.every((s) => ids.has(s)), 'model.file.bad.the_features_to_pattern'); need(Number.isInteger(f.count) && f.count >= 1 && f.count <= 1000, 'model.file.bad.the_count'); need(num(f.angle, 1e-3, 360), 'model.file.bad.the_angle');
        Object.assign(g, { seeds: [...f.seeds], axis: readDir(f.axis, ids), count: f.count, angle: f.angle, reverse: f.reverse === true }); readBodies(f, g, dc, makeReaders(dc)); break;
      case 'mirror':
        need(f.seeds === 'body' || (Array.isArray(f.seeds) && f.seeds.every((s) => ids.has(s))), 'model.file.bad.what_to_mirror');
        Object.assign(g, { seeds: f.seeds === 'body' ? 'body' : [...f.seeds], plane: readPlane(f.plane, ids) }); break;
      case 'fillet': case 'chamfer': {
        need(Array.isArray(f.edges) && f.edges.length <= 2000, 'model.file.bad.its_edge_list');
        g.edges = f.edges.map((e) => {
          need(e && Array.isArray(e.faces) && e.faces.length === 2 && e.faces.every(goodName) && e.faces.every((n) => nameFeatures(n).every((x) => ids.has(x))), 'model.file.bad.an_edge_reference');
          need(e.at === undefined || vec3(e.at), 'model.file.bad.an_edge_position');
          return { faces: [...e.faces], ...(e.at ? { at: [...e.at] } : {}) };
        });
        const key = f.type === 'fillet' ? 'r' : 'd';
        need(num(f[key], 1e-6, 1e5), f.type === 'fillet' ? 'model.file.bad.the_radius' : 'model.file.bad.the_distance');
        g[key] = f[key]; readDesign(f, g, dc); break;
      }
      case 'form': case 'patch': case 'surfloft': case 'stitch': case 'thicken': case 'offsetsurf': case 'extendsurf': case 'trimsurf': case 'gordon':
        readSurface(f, g, dc); break;
      case 'plane': case 'axis': case 'point': case 'sweep': case 'loft': case 'draft':
        readDesign(f, g, dc); break;
      case 'combine': case 'movebody': case 'scalebody': case 'pathpattern':
        readBodies(f, g, dc, makeReaders(dc)); break;
      case 'sheetbase': case 'sheetflange':
        readSheet(f, g, dc, makeReaders(dc)); break;
      case 'rib':
        readRib(f, g, dc); break;
      case 'thread':
        readThread(f, g, dc, makeReaders(dc)); break;
      case 'shell':
        need(Array.isArray(f.faces) && f.faces.length <= 500, 'model.file.bad.its_face_list');
        g.faces = f.faces.map((r) => {
          need(r && goodName(r.name) && nameFeatures(r.name).every((x) => ids.has(x)), 'model.file.bad.a_face_reference');
          need(r.at === undefined || vec3(r.at), 'model.file.bad.a_face_position');
          return { name: r.name, ...(r.at ? { at: [...r.at] } : {}) };
        });
        need(num(f.t, 1e-6, 1e5), 'model.file.bad.the_thickness');
        Object.assign(g, { t: f.t, outward: f.outward === true }); break;
      case 'import':
        need(typeof f.step === 'string' && f.step.length <= 60 * 1024 * 1024 && /^\s*ISO-10303-21;/.test(f.step), 'model.file.bad.its_step_data');
        Object.assign(g, { file: text(f.file, 200), step: f.step, up: f.up === 'y' ? 'y' : 'z' }); break;
    }
    ids.add(g.id);
    types.set(g.id, g.type);
    maxN = Math.max(maxN, +g.id.slice(1));
    part.features.push(g);
  }
  part.seq = maxN + 1;
  if (j.drawing !== undefined && j.drawing !== null) part.drawing = readDrawing(j.drawing);
  if (j.studies !== undefined && j.studies !== null) readStudies(j.studies, part, ids);
  if (j.material !== undefined && j.material !== null) part.material = readMaterial(j.material);   // 0.4 P14: { name, density g/cm³ } (bom.js)
  if (j.bodyInfo !== undefined && j.bodyInfo !== null) { const bi = readBodyInfo(j.bodyInfo, ids); if (bi) part.bodyInfo = bi; }
  // params after the features: every equation must drive a number this file has (params-part.js targets)
  if (j.params !== undefined && j.params !== null) { const pp = readPartParams(j.params, part); if (pp) part.params = pp; }
  // configurations after the parameters: every value must name one of them (configs.js, 0.4 P18)
  if (j.configs !== undefined && j.configs !== null) { const cf = readConfigs(j.configs, part.params, part.features); if (cf) part.configs = cf; }
  if (j.rollback === null || j.rollback === undefined) part.rollback = null;
  else if (Number.isInteger(j.rollback) && j.rollback >= 0 && j.rollback < part.features.length) part.rollback = j.rollback;
  return part;
}

export const DRAWING_VIEWS = ['front', 'top', 'right'];
export const SHEET_KEYS = ['a4', 'a3', 'a2', 'a1', 'a0', 'ansi-a', 'ansi-b', 'ansi-c', 'ansi-d', 'ansi-e'];   // drawing.js PAPERS
/** Title block fields (part.drawing.title) and their longest text; date is Y-m-d. */
export const TITLE_FIELDS = { title: 60, number: 40, rev: 8, company: 60, drawnBy: 40, checkedBy: 40, approvedBy: 40, date: 10, finish: 40, tolerance: 40 };
export const MAX_REVISIONS = 20;
export const DETAIL_SCALES = [2, 4, 5, 10];   // detail enlargement over the sheet scale (results stay ISO 5455 when the sheet's is)

/** The drawing settings of an untrusted file (section, detail, notes) or throws Error. */
export function readDrawing(d) {
  if (!d || typeof d !== 'object') throw new Error(t('model.part.file.drawing_bad'));
  const out = { section: null, detail: null, notes: [] };
  if (d.section) {
    if (!DRAWING_VIEWS.includes(d.section.of) || (d.section.at !== undefined && !num(d.section.at))) throw new Error(t('model.part.file.section_bad'));
    out.section = { of: d.section.of, ...(d.section.at !== undefined ? { at: d.section.at } : {}) };
  }
  if (d.detail) {
    const dt = d.detail;
    if (![...DRAWING_VIEWS, 'section'].includes(dt.of) || !Array.isArray(dt.at) || dt.at.length !== 2 || !dt.at.every((v) => num(v)) || !num(dt.r, 1e-3, 1e6) || !DETAIL_SCALES.includes(dt.scale)) throw new Error(t('model.part.file.detail_bad'));
    out.detail = { of: dt.of, at: [...dt.at], r: dt.r, scale: dt.scale };
  }
  if (d.notes !== undefined) out.notes = readNotes(d.notes);
  // 0.4 P14: sheet size, title block, revisions (each written only when used)
  if (d.sheet !== undefined && d.sheet !== null) { if (!SHEET_KEYS.includes(d.sheet)) throw new Error(t('file.drawing.sheet_bad')); if (d.sheet !== 'a3') out.sheet = d.sheet; }
  if (d.title !== undefined && d.title !== null) {
    if (typeof d.title !== 'object' || Array.isArray(d.title)) throw new Error(t('file.drawing.title_bad'));
    const tt = {};
    for (const [k, max] of Object.entries(TITLE_FIELDS)) {
      const v = d.title[k];
      if (v === undefined || v === null || v === '') continue;
      if (typeof v !== 'string') throw new Error(t('file.drawing.title_bad'));
      const c = text(v, max).trim();
      if (k === 'date' && c && !/^\d{4}-\d{2}-\d{2}$/.test(c)) throw new Error(t('file.drawing.date_bad'));
      if (c) tt[k] = c;
    }
    if (Object.keys(tt).length) out.title = tt;
  }
  // 0.4 P23: the hole table's view
  if (d.holeTable !== undefined && d.holeTable !== null) { if (typeof d.holeTable !== 'object' || !['front', 'top', 'right'].includes(d.holeTable.view)) throw new Error(t('file.drawing.holes_bad')); out.holeTable = { view: d.holeTable.view }; }
  if (d.revisions !== undefined && d.revisions !== null) {
    if (!Array.isArray(d.revisions) || d.revisions.length > MAX_REVISIONS) throw new Error(t('file.drawing.revisions_bad'));
    const rs = d.revisions.map((r) => {
      if (!r || typeof r !== 'object' || [r.rev, r.desc, r.date, r.by].some((v) => v !== undefined && typeof v !== 'string')) throw new Error(t('file.drawing.revisions_bad'));
      const date = text(r.date, 10).trim();
      if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(t('file.drawing.date_bad'));
      return { rev: text(r.rev, 8).trim(), desc: text(r.desc, 120).trim(), date, by: text(r.by, 40).trim() };
    });
    if (rs.length) out.revisions = rs;
  }
  return out;
}

/** Undo history of whole-part JSON snapshots. */
export class History {
  constructor(limit = 200) { this.limit = limit; this.undoStack = []; this.redoStack = []; }
  push(part, label) {
    this.undoStack.push({ json: JSON.stringify(part), label });
    if (this.undoStack.length > this.limit) this.undoStack.shift();
    this.redoStack = [];
  }
  undo(part) {
    const s = this.undoStack.pop();
    if (!s) return null;
    this.redoStack.push({ json: JSON.stringify(part), label: s.label });
    return { part: JSON.parse(s.json), label: s.label };
  }
  redo(part) {
    const s = this.redoStack.pop();
    if (!s) return null;
    this.undoStack.push({ json: JSON.stringify(part), label: s.label });
    return { part: JSON.parse(s.json), label: s.label };
  }
  clear() { this.undoStack = []; this.redoStack = []; }
}
