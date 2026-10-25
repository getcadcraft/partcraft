/* SPDX-License-Identifier: Apache-2.0 */
/**
 * params-part.js — PartCraft's adapter for the parametric engine (params.js), DOM-free. It hands the engine every
 * number of a part that an equation may drive, re-solves sketches after a change, and holds the small history
 * helpers (rollback steps) that the panel and the CLI share. It imports no part.js (part.js imports it), so
 * design-features.js or any workspace module may import it to register fields.
 *
 *   Target keys   "<featureId>.<field>"         a feature number from PARAM_FIELDS          f3.depth, f5.count
 *                 "<sketchFeatureId>.<constraintId>"  a sketch dimension (CONSTRAINTS[type].dim)   f1.k7
 *   Labels        what the user sees: "Extrude1 depth", "Sketch1 D3 (distance)" (D-numbers count the sketch's
 *                 dimensions in order, from 1).
 *
 *   partAdapter = { targets(part) → Map(key → { label, kind, get, set, min, max, integer, feature, field|constraint }),
 *                   afterApply(part, changedKeys) → { errors } }
 *   afterApply re-solves every sketch whose dimension changed; a sketch that cannot solve gets its previous
 *   dimension values back (its geometry was never moved — solver.js leaves it as it was) and is reported as
 *   { where: 'Sketch1', message }.
 *
 *   registerParamField(type, field, { label, kind, min, max, integer, when }) — add (or replace) a number field of a
 *   feature type. `when(feature)` (optional) says whether the field matters in the feature's current mode (the CLI's
 *   check skips fields that do not, e.g. a hole's depth when it goes through). A field is a target only while the
 *   feature holds a finite number there, so optional fields (null until used) appear when they are set.
 */
import { CONSTRAINTS } from './sketch.js';
import { solveSketch } from './solver.js';
import { readParams, hasParams, emptyParams, applyParams, evaluateVars, describeLinks, linkFor } from './params.js';
import { t as tr } from './i18n.js';

const POS = 1e-6;   // the smallest size readPart accepts for a depth / diameter / radius
const MAXL = 1e6;

// a field's label, read when shown (never at import: workers and Node load this before the language catalog)
const lbl = (key, spec) => Object.defineProperty(spec, 'label', { get: () => tr(key), enumerable: true, configurable: true });

/** type → field → { label, kind: 'length'|'angle'|'count'|'number', min?, max?, integer?, when? } */
export const PARAM_FIELDS = {
  extrude: {
    depth: lbl('model.params_part.field.depth', { kind: 'length', min: POS, max: MAXL, when: (f) => f.end === 'blind' || f.end === 'mid' || f.end === undefined }),
  },
  revolve: { angle: lbl('model.params_part.field.angle', { kind: 'angle', min: 0.001, max: 360 }) },
  hole: {
    d: lbl('model.params_part.field.diameter', { kind: 'length', min: POS, max: MAXL }),
    depth: lbl('model.params_part.field.depth', { kind: 'length', min: POS, max: MAXL, when: (f) => !f.through }),
    cboreD: lbl('model.params_part.field.counterbore_diameter', { kind: 'length', min: POS, max: MAXL, when: (f) => f.kind === 'cbore' }),
    cboreDepth: lbl('model.params_part.field.counterbore_depth', { kind: 'length', min: POS, max: MAXL, when: (f) => f.kind === 'cbore' }),
  },
  lpattern: {
    count: lbl('model.params_part.field.count', { kind: 'count', min: 1, max: 1000, integer: true }),
    spacing: lbl('model.params_part.field.spacing', { kind: 'length', min: -MAXL, max: MAXL }),
  },
  cpattern: {
    count: lbl('model.params_part.field.count', { kind: 'count', min: 1, max: 1000, integer: true }),
    angle: lbl('model.params_part.field.angle', { kind: 'angle', min: 0.001, max: 360 }),
  },
  fillet: { r: lbl('model.params_part.field.radius', { kind: 'length', min: POS, max: 1e5 }) },
  chamfer: { d: lbl('model.params_part.field.distance', { kind: 'length', min: POS, max: 1e5 }) },
  shell: { t: lbl('model.params_part.field.wall_thickness', { kind: 'length', min: POS, max: 1e5 }) },
};

// Fields of the 2026-10-11 design features (design-features.js) whose limits are known from their readers.
// They are targets only while the feature holds a number there (chamfer d2 only in two-distance mode, …).
const DESIGN_FIELDS = [
  ['extrude', 'depth2', lbl('model.params_part.field.second_depth', { kind: 'length', min: POS, max: MAXL, when: (f) => !!f.two })],
  ['extrude', 'taper', lbl('model.params_part.field.taper_angle', { kind: 'angle', min: -89, max: 89 })],
  ['extrude', 'offset', lbl('model.params_part.field.offset', { kind: 'length', min: -MAXL, max: MAXL, when: (f) => f.end === 'offset' })],
  ['hole', 'csinkD', lbl('model.params_part.field.countersink_diameter', { kind: 'length', min: POS, max: MAXL, when: (f) => f.kind === 'csink' })],
  ['hole', 'threadDepth', lbl('model.params_part.field.thread_depth', { kind: 'length', min: POS, max: MAXL, when: (f) => f.kind === 'tapped' })],
  ['chamfer', 'd2', lbl('model.params_part.field.second_distance', { kind: 'length', min: POS, max: 1e5, when: (f) => f.mode === 'two' })],
  ['chamfer', 'angle', lbl('model.params_part.field.angle', { kind: 'angle', min: 0.001, max: 89.999, when: (f) => f.mode === 'angle' })],
  ['fillet', 'r2', lbl('model.params_part.field.end_radius', { kind: 'length', min: POS, max: 1e5 })],
  ['plane', 'd', lbl('model.params_part.field.distance', { kind: 'length', min: -1e9, max: 1e9, when: (f) => f.mode === 'offset' })],
  ['plane', 'angle', lbl('model.params_part.field.angle', { kind: 'angle', min: -360, max: 360, when: (f) => f.mode === 'angle' })],
  ['draft', 'angle', lbl('model.params_part.field.angle', { kind: 'angle', min: -89, max: 89 })],
  ['sweep', 'scale', lbl('model.params_part.field.end_scale', { kind: 'number', min: 1e-3, max: 1e3 })],
];

const FIELD_RE = /^[A-Za-z][A-Za-z0-9]{0,30}$/;
const KINDS = ['length', 'angle', 'count', 'number'];

/**
 * Add or replace a number field an equation may drive. Call it at module load from any module that part.js does not
 * import itself through params-part.js (design-features.js, a workspace file, partcraft.js all qualify).
 */
export function registerParamField(type, field, spec = {}) {
  if (typeof type !== 'string' || !/^[a-z][a-z0-9-]{0,30}$/.test(type)) throw new Error('registerParamField: bad feature type.');   // i18n-ignore: developer error (a module registering a field)
  if (typeof field !== 'string' || !FIELD_RE.test(field) || /^k\d+$/.test(field)) throw new Error('registerParamField: bad field name (letters and digits; never k<number>, which names sketch dimensions).');   // i18n-ignore: developer error
  const kind = spec.kind ?? 'length';
  if (!KINDS.includes(kind)) throw new Error('registerParamField: kind is length, angle, count or number.');   // i18n-ignore: developer error
  // a label given as a getter (a translated text) stays one, so it is read in the language of the moment it is shown
  const d = Object.getOwnPropertyDescriptor(spec, 'label');
  const s = d && d.get ? Object.defineProperty({}, 'label', { get: () => String(d.get.call(spec) ?? field).slice(0, 60), enumerable: true, configurable: true }) : { label: String(spec.label ?? field).slice(0, 60) };
  s.kind = kind;
  for (const k of ['min', 'max']) if (spec[k] !== undefined) { if (!Number.isFinite(spec[k])) throw new Error(`registerParamField: ${k} must be a number.`); s[k] = spec[k]; }   // i18n-ignore: developer error
  if (spec.integer || kind === 'count') s.integer = true;
  if (typeof spec.when === 'function') s.when = spec.when;
  (PARAM_FIELDS[type] ||= {})[field] = s;
  return s;
}
for (const [t, f, s] of DESIGN_FIELDS) registerParamField(t, f, s);

/** Does this field matter in the feature's current mode (for check)? */
export const fieldInUse = (f, field) => { const s = PARAM_FIELDS[f.type]?.[field]; return !!s && (!s.when || !!s.when(f)); };

const DIM_LABEL = (type) => (CONSTRAINTS[type]?.label || type).toLowerCase();
const dimsOf = (sk) => sk.constraints.filter((c) => CONSTRAINTS[c.type]?.dim);

// first value each key had before an applyParams run, so afterApply can put a failed sketch back
const journal = new WeakMap();
const remember = (doc, key, old) => { let j = journal.get(doc); if (!j) journal.set(doc, (j = new Map())); if (!j.has(key)) j.set(key, old); };

/** Every drivable number of the part (see the header). */
function targets(part) {
  const out = new Map();
  for (const f of part.features || []) {
    const fields = PARAM_FIELDS[f.type];
    if (fields) {
      for (const [field, s] of Object.entries(fields)) {
        if (typeof f[field] !== 'number' || !Number.isFinite(f[field])) continue;
        const key = f.id + '.' + field;
        out.set(key, {
          label: `${f.name} ${s.label}`, kind: s.kind, min: s.min, max: s.max, integer: !!s.integer, feature: f.id, field,
          get: () => f[field], set: (v) => { remember(part, key, f[field]); f[field] = v; },
        });
      }
    }
    if (f.type === 'sketch' && f.sketch) {
      dimsOf(f.sketch).forEach((c, i) => {
        const key = f.id + '.' + c.id;
        const ang = c.type === 'angle';
        const min = ang ? 0 : c.type === 'radius' || c.type === 'diameter' ? POS : 0;
        out.set(key, {
          label: `${f.name} D${i + 1} (${DIM_LABEL(c.type)})`, kind: ang ? 'angle' : 'length', min, max: ang ? 180 : MAXL, integer: false, feature: f.id, constraint: c.id, dim: `D${i + 1}`,
          get: () => c.value, set: (v) => { remember(part, key, c.value); c.value = v; },
        });
      });
    }
  }
  return out;
}

/** Re-solve the sketches whose dimensions changed; put back the dimensions of one that cannot solve. */
function afterApply(part, changed) {
  const errors = [];
  const j = journal.get(part) || new Map();
  journal.delete(part);
  const bySketch = new Map();
  for (const key of changed) {
    const [fid, sub] = splitKey(key);
    const f = part.features.find((g) => g.id === fid);
    if (!f || f.type !== 'sketch') continue;
    if (!bySketch.has(f)) bySketch.set(f, []);
    bySketch.get(f).push(sub);
  }
  for (const [f, cids] of bySketch) {
    const r = solveSketch(f.sketch);
    if (r.ok) continue;
    const names = [];
    for (const cid of cids) {
      const c = f.sketch.constraints.find((k) => k.id === cid);
      const old = j.get(f.id + '.' + cid);
      if (c && old !== undefined) { names.push(`${dimLabel(f, c)} = ${+c.value.toPrecision(12)}`); c.value = old; }
    }
    solveSketch(f.sketch);
    errors.push({ where: f.name, message: tr('model.params_part.cannot_solve', { name: f.name, values: names.join(', '), n: names.length }) });
  }
  return { errors };
}

function dimLabel(f, c) {
  const i = dimsOf(f.sketch).indexOf(c);
  return `${f.name} D${i + 1}`;
}

export const partAdapter = { targets, afterApply };

/** "f3.depth" → ["f3", "depth"]. */
export function splitKey(key) {
  const i = String(key).indexOf('.');
  return i < 0 ? [String(key), ''] : [key.slice(0, i), key.slice(i + 1)];
}

/** The keys a file's params may target (part.js readPart: after the features are read). */
export const paramTargetKeys = (part) => new Set(targets(part).keys());

/** Validate a file's params against the part just read → clean params (or throws). Absent/empty → null. */
export function readPartParams(raw, part) {
  const p = readParams(raw, { targetKeys: paramTargetKeys(part) });
  return hasParams(p) ? p : null;
}

/** part.params, created when missing (for editing). Call tidyParams afterwards so an empty table leaves the file. */
export function paramsOf(part) { if (!part.params) part.params = emptyParams(); return part.params; }
export function tidyParams(part) { if (part.params && !hasParams(part.params)) delete part.params; }

/** Forward: resolve every variable and equation into the part. → applyParams' result. */
export function applyPartParams(part, opts = {}) {
  if (!hasParams(part.params)) return { ok: true, values: new Map(), errors: [], changed: [] };
  return applyParams(part, part.params, partAdapter, opts);
}

/** Is this target driven by an equation? → the link or null. */
export const linkOf = (part, key) => (part.params ? linkFor(part.params, key) : null);

/**
 * A target named the way people type it → its key, or null. Accepts the key itself ("f3.depth", "f1.k7"), a feature
 * name + field ("Extrude1.depth", "Extrude1 depth", "Hole1.diameter") and a sketch name + D-number ("Sketch1.D3").
 */
export function resolveTarget(part, text) {
  const s = String(text ?? '').trim();
  const all = targets(part);
  if (all.has(s)) return s;
  const m = /^(.+?)[ .]([A-Za-z][A-Za-z0-9 ]*)$/.exec(s);
  if (!m) return null;
  const [, fname, field] = m;
  const fs = (part.features || []).filter((f) => f.name === fname || f.id === fname);
  if (fs.length !== 1) return null;
  const f = fs[0];
  for (const [key, t] of all) {
    if (t.feature !== f.id) continue;
    if (t.field && (t.field === field || PARAM_FIELDS[f.type][t.field].label.toLowerCase() === field.toLowerCase())) return key;
    if (t.dim && t.dim.toLowerCase() === field.toLowerCase()) return key;
  }
  return null;
}

/** A human name for a key ("Extrude1.depth" style, usable with resolveTarget). */
export function targetName(part, key, all = targets(part), byId = null) {
  const t = all.get(key);
  if (!t) return key;
  const f = byId ? byId.get(t.feature) : part.features.find((g) => g.id === t.feature);
  return `${f.name}.${t.field || t.dim}`;
}

/** Links whose targets are gone (after deleting features) are dropped → their labels (from before). */
export function pruneDeleted(partBefore, partAfter) {
  if (!partAfter.params) return [];
  const keep = targets(partAfter);
  const labels = targets(partBefore);
  const gone = partAfter.params.links.filter((l) => !keep.has(l.target));
  partAfter.params.links = partAfter.params.links.filter((l) => keep.has(l.target));
  tidyParams(partAfter);
  return gone.map((l) => labels.get(l.target)?.label || l.target);
}

/** Variables, their values/errors and every equation, for panels and the CLI. */
export function paramsReport(part) {
  const p = part.params || emptyParams();
  const ev = evaluateVars(p);
  const vars = p.vars.map((v) => ({ name: v.name, expr: v.expr, note: v.note || '', value: ev.values.has(v.name) ? ev.values.get(v.name) : null, error: ev.errors.get(v.name) || null }));
  const all = targets(part), byId = new Map(part.features.map((f) => [f.id, f]));   // once, not once per equation (0.7 D7.51: 558 equations took 370 ms)
  const links = describeLinks(part, p, partAdapter, all).map((l) => ({ ...l, name: targetName(part, l.target, all, byId) }));
  return { vars, links };
}

// ---------------------------------------------------------------- rollback (both ways)

/** How many features are built (part.js builtCount, repeated here so this module needs no part.js). */
const built = (part) => (part.rollback === null || part.rollback === undefined ? part.features.length : Math.min(part.rollback, part.features.length));

/** Move the rollback bar `delta` features (negative = back). → { ok, from, to, message }. */
export function stepRollback(part, delta) {
  const from = built(part), n = part.features.length;
  const to = Math.max(0, Math.min(n, from + delta));
  if (to === from) return { ok: false, from, to, message: delta < 0 ? (n ? tr('model.params_part.rollback.at_top') : tr('model.params_part.rollback.none')) : tr('model.params_part.rollback.at_end') };
  part.rollback = to >= n ? null : to;
  return { ok: true, from, to, message: rollbackWords(part) };
}
/** Put the bar just above feature `id` (so it and everything after are not built), or at the end with null. */
export function rollTo(part, id) {
  if (id === null) { const from = built(part); part.rollback = null; return { ok: true, from, to: part.features.length, message: rollbackWords(part) }; }
  const i = part.features.findIndex((f) => f.id === id);
  if (i < 0) return { ok: false, message: tr('model.params_part.no_such_feature') };
  const from = built(part);
  part.rollback = i;
  return { ok: true, from, to: i, message: rollbackWords(part) };
}
export function rollbackWords(part) {
  const b = built(part), n = part.features.length;
  if (b >= n) return tr('model.params_part.rollback.all', { n });
  if (b === 0) return tr('model.params_part.rollback.nothing', { name: part.features[0].name });
  return tr('model.params_part.rollback.after', { name: part.features[b - 1].name, b, n });
}
