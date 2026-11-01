/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * agents.js — PartCraft for AI assistants and scripts (0.7 AS.4, session assistants; docs/AGENTS-SPEC.md). The app contains
 * no AI: this gives the person's own assistant tools, and Settings › Assistants (host.js) decides which.
 *
 * DOM-free, shared by the page and the headless core (tools/cli/headless/part.mjs imports this file from the build):
 *   describePart(part, regen) · featureRows(part, regen) · paramRows(part) · setParameter(part, name, value) (mutates;
 *   the caller makes it one undo step) · massOf(part, regen) · await exportBytes(regen, kind, name, part) · scriptPart(part, regen)
 *   PARAM_SET_SCHEMA · EXPORT_KINDS
 *   await illustrateFiles(m, meshes, opts) → [{name, bytes, mime}] — a manual (Illustrate workspace, 0.7 TP.12) as its Export and
 *   Instructions menus write it (0.7 AS.6, session assistants-gaps); ILLUSTRATE_SCHEMA
 * The page (partcraft.js) calls installAgents({...}) once: PartCraft's live tools on host.control.
 *
 * Units: millimetres; the model is Y up (exports turn it Z up, as the app's own exports do). The dev build builds on the mesh
 * kernel (manifold): volumes are those of the triangle mesh (a little under a true curved solid) and STEP is faceted.
 */
import { FEATURE_LABELS, builtCount, addFeature } from './part.js';
import { evaluateVars, cloneParams, emptyParams, setVar } from './params.js';
import { partAdapter, applyPartParams, tidyParams, resolveTarget, linkOf } from './params-part.js';
import { solveSketch } from './solver.js';
import { meshMass } from './measure.js';
import { stlBinary, threeMf, stepFaceted } from './export.js';
import { getHost, undoRollback, ToolError } from "./host.js";
import * as DI from './design-it.js';
const PHOTO = () => import('./photo-sketch.js');   // 0.8 EG.38: loaded when a photo is imported (it brings the raster readers with it)
import * as HYDRO from './hydrostatics.js';   // 0.8 EG.26
import * as COST from './cost.js';   // 0.8 EG.76 (also registers part.studies.cost for headless readers)
import * as BRK from './break-part.js';   // 0.8 EG.31: Break it
export const design = DI;
export const cost = COST;
export const photo = PHOTO;   // a function: await photo() gives the module
export const hydro = HYDRO;   // headless tools (tools/cli/headless/tools.mjs) share the same sizing code
import { t } from './i18n.js';

const r6 = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.round(v * 1e6) / 1e6 : v ?? null);
export const PHOTO_PROPS = {
  path: { type: 'string', minLength: 1, maxLength: 1024, description: 'The picture (a PNG, a baseline JPEG or a TIFF) inside a folder you were given.' },
  mode: { type: 'string', enum: ['silhouette', 'lines'], default: 'silhouette', description: 'silhouette: a flat part as a dark (or light) shape on a plain ground, holes included. lines: a pen drawing of the outline.' },
  known_of: { type: 'string', enum: ['width', 'height', 'longest'], default: 'width', description: 'Which side of the shape known_mm is the length of.' },
  known_mm: { type: 'number', minimum: 0.01, maximum: 100000, description: 'The real length, in millimetres, of the side named by known_of. Needed unless mm_per_px is given.' },
  mm_per_px: { type: 'number', minimum: 0.0001, maximum: 1000, description: 'Millimetres per pixel, instead of known_mm.' },
  plane: { type: 'string', enum: ['front', 'top', 'right'], default: 'front', description: 'The base plane the sketch is drawn on.' },
  extrude: { type: 'number', minimum: 0, maximum: 10000, default: 0, description: 'Extrude the sketch by this many millimetres (0 = a sketch only).' },
  tolerance_px: { type: 'number', minimum: 0.5, maximum: 20, default: 1.5, description: 'How far, in pixels, the fitted lines and arcs may stray from the outline.' },
};
const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
export const EXPORT_KINDS = { stl: { ext: 'stl', mime: 'model/stl' }, '3mf': { ext: '3mf', mime: 'model/3mf' }, step: { ext: 'step', mime: 'model/step' },
  usdz: { ext: 'usdz', mime: 'model/vnd.usdz+zip' }, usda: { ext: 'usda', mime: 'model/vnd.usda' }, usdc: { ext: 'usdc', mime: 'application/octet-stream' } };   // USD: 0.7 AS.6 (usd-partcraft.js, XF.8)
export const PARAM_SET_SCHEMA = obj({
  name: { type: 'string', minLength: 1, maxLength: 200, description: 'A parameter (variable) name, or a feature\'s number as params_list names it: "Extrude1.depth", "Sketch1.D2", "f3.depth".' },
  value: { type: ['number', 'string'], description: 'A number (mm, degrees), or for a variable an expression such as "wall * 2".' },
}, ['name', 'value']);

// ---------------------------------------------------------------- reading

/** The part in short: features by type, failing ones, parameters, configurations, material, the built solid. */
export function describePart(part, regen) {
  const byType = {};
  for (const f of part.features) byType[f.type] = (byType[f.type] || 0) + 1;
  const failing = regen ? [...regen.results].filter(([, r]) => r.status === 'error').map(([id, r]) => ({ id, name: part.features.find((f) => f.id === id)?.name || id, message: r.message || r.error || null })) : [];
  const s = regen?.stats;
  return {
    name: part.name, units: 'mm', up: 'Y (exports turn it Z up)',
    features: part.features.length, built: builtCount(part), rolledBack: part.rollback !== null && part.rollback < part.features.length,
    byType, failing,
    parameters: part.params ? part.params.vars.length : 0, equations: part.params ? part.params.links.length : 0,
    configurations: part.configs ? { names: part.configs.rows.map((r) => r.name), active: part.configs.active ?? null } : null,
    material: part.material ? { name: part.material.name, density: part.material.density, densityUnit: 'g/cm³' } : null,
    solid: s ? { volume: r6(s.volume), area: r6(s.area), bodies: s.bodies, triangles: s.tris, bbox: { min: s.bbox.min.map(r6), max: s.bbox.max.map(r6) } } : null,
    kernel: regen?.exact ? 'exact' : 'mesh',
  };
}

/** Each feature: id, name, type (and its label), suppressed, after the rollback bar, its build status and message. */
export function featureRows(part, regen) {
  const n = builtCount(part);
  return part.features.map((f, i) => {
    const r = regen?.results?.get(f.id);
    return { id: f.id, name: f.name, type: f.type, label: FEATURE_LABELS[f.type] || f.type, suppressed: !!f.suppressed, rolledBack: i >= n,
      status: r ? r.status : i >= n ? 'rolled back' : 'not built', ...(r && (r.message || r.error) ? { message: r.message || r.error } : {}) };
  });
}

/** Variables (expression, value, note) and every number an equation can drive (key, label, value, its equation if driven). */
export function paramRows(part) {
  const p = part.params || emptyParams();
  const ev = evaluateVars(p);
  const variables = p.vars.map((v) => ({ name: v.name, expr: v.expr, value: r6(ev.values.get(v.name)), ...(v.note ? { note: v.note } : {}), ...(ev.errors.has(v.name) ? { error: ev.errors.get(v.name) } : {}) }));
  const numbers = [...partAdapter.targets(part)].map(([key, t]) => {
    const l = linkOf(part, key);
    return { key, label: t.label, value: r6(t.get()), kind: t.kind, ...(l ? { driven: l.expr } : {}) };
  });
  return { variables, numbers };
}

// ---------------------------------------------------------------- one change

/**
 * Set a variable (a number or an expression) or one of the part's numbers ("Extrude1.depth", "Sketch1.D2"), then apply
 * the equations. Mutates `part`; → {ok, kind, name|key, label, errors} or {ok: false, error}. Try it on a copy first.
 */
export function setParameter(part, name, value) {
  const p = part.params ? cloneParams(part.params) : emptyParams();
  const isVar = p.vars.some((v) => v.name === name);
  const key = isVar ? null : resolveTarget(part, name);
  if (isVar) {
    const r = setVar(p, name, String(value));
    if (!r.ok) return { ok: false, error: r.error };
    part.params = p;
    tidyParams(part);
    const applied = applyPartParams(part);
    return { ok: true, kind: 'variable', name, errors: applied.errors || [] };
  }
  if (!key) return { ok: false, error: 'There is no parameter or number "' + name + '". params_list shows the parameters and the numbers ("Extrude1.depth", "Sketch1.D2").' };
  const t = partAdapter.targets(part).get(key);
  const link = linkOf(part, key);
  if (link) return { ok: false, error: t.label + ' is driven by the equation "' + link.expr + '": set the parameters it uses instead.' };
  const v = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(v)) return { ok: false, error: t.label + ' takes a number.' };
  if ((t.min !== undefined && v < t.min) || (t.max !== undefined && v > t.max) || (t.integer && !Number.isInteger(v))) return { ok: false, error: t.label + ' must be ' + (t.integer ? 'a whole number ' : '') + 'between ' + t.min + ' and ' + t.max + '.' };
  const old = t.get();
  t.set(v);
  if (t.constraint) {
    const f = part.features.find((g) => g.id === t.feature);
    const s = solveSketch(f.sketch);
    if (!s.ok) { t.set(old); solveSketch(f.sketch); return { ok: false, error: f.name + ' cannot be solved with ' + t.label + ' = ' + v + '; nothing changed.' }; }
  }
  const applied = applyPartParams(part);
  return { ok: true, kind: 'number', key, label: t.label, errors: applied.errors || [] };
}

/** Mass properties of the built solid: volume, area, centre, inertia; mass when the part has a material. */
export function massOf(part, regen) {
  if (!regen?.mesh) throw new Error('The part has no solid yet.');
  const m = meshMass(regen.mesh);
  const rho = part.material && Number.isFinite(part.material.density) && part.material.density > 0 ? part.material.density / 1000 : null;   // g/cm³ → g/mm³
  const k = rho ?? 1;
  return {
    volume: r6(m.volume), volumeUnit: 'mm³', area: r6(m.area), areaUnit: 'mm²', centre: m.centre.map(r6), axes: 'model axes, Y up',
    material: part.material ? part.material.name : null, mass: rho ? r6(m.volume * rho) : null, massUnit: 'g',
    inertia: m.tensor.map((row) => row.map((v) => r6(v * k))), inertiaUnit: rho ? 'g·mm² (about the centre)' : 'mm⁵ (density 1; the part has no material)',
    note: 'From the triangle mesh (the mesh kernel): curved faces are facets, so the volume is a little under a true curved solid\'s.',
  };
}

/** The built solid as a file: STL, 3MF, a faceted STEP (AP242), or OpenUSD (.usdz/.usda/.usdc, needs `part` for its name,
 *  material and mass), as File › Export writes them. Async: the USD writer is loaded only when asked for. */
export async function exportBytes(regen, kind, name = 'part', part = null) {
  if (!regen?.mesh) throw new Error('The part has no solid to export.');
  if (kind === 'usdz' || kind === 'usda' || kind === 'usdc') {
    const { partUsd } = await import('./usd-partcraft.js');
    const r = partUsd(part || { name }, regen, { format: kind, name: name + '.' + kind });
    return { bytes: typeof r.data === 'string' ? new TextEncoder().encode(r.data) : r.data, ...EXPORT_KINDS[kind] };
  }
  if (kind === 'stl') return { bytes: stlBinary(regen.mesh, name), ...EXPORT_KINDS.stl };
  if (kind === '3mf') return { bytes: threeMf(regen.mesh, name), ...EXPORT_KINDS['3mf'] };
  if (kind === 'step') { const s = stepFaceted(regen.mesh, name); return { bytes: new TextEncoder().encode(s.text), ...EXPORT_KINDS.step, note: 'Faceted STEP (' + s.counts.faces + ' triangles as faces): the mesh kernel has no exact surfaces.' }; }
  throw new Error('Formats: stl, 3mf, step, usdz, usda, usdc.');
}

/** What a script sees as `part` (the Script workspace's own shape) and its parameters by name. */
export function scriptPart(part, regen) {
  const m = regen?.mesh;
  const model = m && m.positions && m.indices ? { t: 'model', source: 'part', ref: String(part.name || 'Part').slice(0, 120), mesh: { t: 'mesh', kind: 'tri', nodes: Float64Array.from(m.positions), elems: Int32Array.from(m.indices) } } : null;
  const params = {};
  if (part.params) for (const [k, v] of evaluateVars(part.params).values) if (Number.isFinite(v)) params[k] = v;
  return { model, params };
}

// ---------------------------------------------------------------- 0.7 AS.6: a manual exported (Illustrate, TP.12)

/** The manual's words in the reader's language: the parts-list columns, the instructions' fixed words, the viewer's (as ws-illustrate.js). */
const columnLabel = (c) => (c.startsWith('prop:') ? c.slice(5) : t('illustrate.col.' + c.replace(/[A-Z]/g, (x) => '-' + x.toLowerCase())));
const docWords = () => ({
  page: (n, total) => t('illustrate.doc.page', { n, total }), step: (n) => t('illustrate.doc.step', { n }), warning: t('illustrate.doc.warning'),
  parts: t('illustrate.doc.parts'), tools: t('illustrate.doc.tools'), partsList: t('illustrate.doc.parts_list'), coverLine: (s, p) => t('illustrate.doc.cover_line', { steps: s, parts: p }),
});
const viewerWords = () => ({ views: t('illustrate.viewer.views'), parts: t('illustrate.viewer.parts'), play: t('illustrate.anim.play'), pause: t('illustrate.anim.pause'),
  time: t('illustrate.anim.time'), model: t('illustrate.viewer.model'), noWebgl: t('illustrate.viewer.no_webgl'), scene: t('illustrate.export.scene_name') });
const safeName = (s) => String(s).replace(/[\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim() || 'Manual';
export const ILLUSTRATE_SCHEMA = obj({
  as: { type: 'string', enum: ['pdf', 'svg', 'html'], description: 'pdf (default), svg (one file per page) or html (views: the interactive 3D file that opens offline in a browser; instructions: the instructions as a web page).' },
  what: { type: 'string', enum: ['views', 'instructions'], default: 'views', description: 'views: the manual\'s saved views as line art (as Export writes them); instructions: the step-by-step document (as Instructions › Save writes it; pdf or html).' },
  view: { anyOf: [{ type: 'string', minLength: 1, maxLength: 200 }, { type: 'integer', minimum: 1 }], description: 'One saved view (its name, or its number from 1); default every view (the scene when the manual has none).' },
  paper: { type: 'string', enum: ['a4', 'a3', 'letter', 'tabloid'], default: 'a4', description: 'Paper size (default a4).' },
  layout: { type: 'string', enum: ['pages', 'sheet'], default: 'pages', description: 'pages: a page per view; sheet: every view on one sheet.' },
  hidden: { type: 'string', enum: ['dashed', 'off'], default: 'dashed', description: 'Hidden lines dashed or left out.' },
  fills: { type: 'string', enum: ['auto', 'none', 'flat', 'shaded'], default: 'auto', description: 'Fill style of the line art: auto, none, flat or shaded (default auto).' },
});

/**
 * A manual ({m, meshes}: illustrate/manual.js readManual) as files, through the Illustrate workspace's own writers: line art
 * (illustrate/lineart.js) on sheets → PDF (illustrate/pdf.js) or SVG (illustrate/svg.js); the instructions (illustrate/instructions.js);
 * the interactive 3D file (illustrate/viewer-data.js). `loadSource(b)` gives the viewer's module sources (viewer-data.js BUNDLE: own
 * files of illustrate/, three.js files) and `licence` three.js's notice: the page fetches them, the headless core reads them from disk.
 * → { files: [{name, bytes, mime}], pages, notes }
 */
export async function illustrateFiles(m, meshes, { as = 'pdf', what = 'views', view = null, paper = 'a4', layout = 'pages', hidden = 'dashed', fills = 'auto', lang = 'en', loadSource = null, licence = '' } = {}) {
  const enc = (x) => new TextEncoder().encode(x);
  const notes = [];
  const say = (r) => { if (r.missing) notes.push(r.missing + ' characters the PDF font lacks were printed as "?".'); if (r.skipped) notes.push(r.skipped + ' pictures could not be placed.'); };
  if (what === 'instructions') {
    if (!m.instructions?.steps?.length) throw new Error('This manual has no instructions yet (Instructions › Start in the Illustrate workspace).');
    if (as === 'svg') throw new Error('Instructions are written as pdf or html.');
    const IN = await import('./illustrate/instructions.js');
    const name = safeName(m.instructions.title || m.name);
    if (as === 'html') {
      const SVG = await import('./illustrate/svg.js');
      return { files: [{ name: name + '.html', bytes: enc(IN.html(m, meshes, { words: docWords(), labels: columnLabel, svgText: SVG.svgText, lang })), mime: 'text/html' }], pages: null, notes };
    }
    const PDF = await import('./illustrate/pdf.js');
    const pages = IN.pages(m, meshes, { words: docWords(), labels: columnLabel });
    const r = await PDF.toPdf(pages, { title: m.instructions.title || m.name });
    say(r);
    return { files: [{ name: name + '.pdf', bytes: r.bytes, mime: 'application/pdf' }], pages: pages.length, notes };
  }
  const base = safeName(m.name);
  if (as === 'html') {
    if (!loadSource) throw new Error('The interactive file needs the viewer\'s modules, which this copy of the tools cannot read.');
    const VD = await import('./illustrate/viewer-data.js');
    const modules = await VD.bundleModules(loadSource);
    const data = VD.viewerData(m, meshes, { words: viewerWords(), labels: columnLabel });
    return { files: [{ name: base + '.html', bytes: enc(VD.viewerHtml({ title: m.name, lang, modules, data, licence })), mime: 'text/html' }], pages: null, notes };
  }
  // the views to export, as ws-illustrate.js exportTargets: one saved view, or every one (the scene when there are none)
  let targets;
  if (view !== null && view !== undefined) {
    const v = typeof view === 'number' ? m.views[view - 1] : m.views.find((x) => x.name.toLowerCase() === String(view).toLowerCase());
    if (!v) throw new Error('No view ' + JSON.stringify(view) + '. Views: ' + (m.views.map((x) => x.name).join(', ') || 'none') + '.');
    targets = [{ name: v.name, view: v }];
  } else targets = m.views.length ? m.views.map((v) => ({ name: v.name, view: v })) : (m.scene ? [{ name: t('illustrate.export.scene_name'), view: m.scene }] : []);
  if (!targets.length) throw new Error('This manual has no views to export.');
  const [LA, PDF, SVG] = await Promise.all([import('./illustrate/lineart.js'), import('./illustrate/pdf.js'), import('./illustrate/svg.js')]);
  const [pw, ph] = LA.PAPERS[paper] || LA.PAPERS.a4;
  const W = Math.max(pw, ph), H = Math.min(pw, ph);
  const art = (x, w, h) => LA.lineArt(m, meshes, x.view, { W: w, H: h, hidden, fills, labels: columnLabel });
  const sheetMode = layout === 'sheet' && targets.length > 1;
  const pages = sheetMode ? [LA.sheet({ paper, title: m.name, views: targets.map((x) => ({ art: art(x, 180, 120), caption: x.name })) })]
    : targets.map((x) => LA.sheet({ paper, title: m.name, views: [{ art: art(x, W - 28, H - 40), caption: x.name }] }));
  if (as === 'svg') {
    return { files: pages.map((p, k) => ({ name: base + ' - ' + safeName(sheetMode ? t('illustrate.export.sheet_name') : targets[k].name) + '.svg', bytes: enc(SVG.svgText(p, { title: m.name, background: '#ffffff' })), mime: 'image/svg+xml' })), pages: pages.length, notes };
  }
  const r = await PDF.toPdf(pages, { title: m.name });
  say(r);
  return { files: [{ name: base + (targets.length === 1 ? ' - ' + safeName(targets[0].name) : '') + '.pdf', bytes: r.bytes, mime: 'application/pdf' }], pages: pages.length, notes };
}

// ---------------------------------------------------------------- the live tools

const PATH = { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads as the app\'s own Export does.' };
const SCRIPT_SCHEMA = obj({ source: { type: 'string', minLength: 1, maxLength: 1000000, description: 'The script source (use path instead to run a file).' }, path: { ...PATH, description: 'Studio: a .craft, .lua or .py file inside the allowed folders.' },
  language: { type: 'string', enum: ['craft', 'lua', 'python'], description: 'craft (CraftScript), lua or python.' }, budget: { type: 'number', minimum: 1e3, maximum: 1e11, default: 2e9, description: 'Most steps the script may take.' } });

/**
 * Register PartCraft's live tools. `app` = {part(), regen(), mode(), commit(label, fn) (one undo step + rebuild),
 * built() (a promise: the rebuild is done), savePart(), download(bytes, name, mime), computeWorker(modules, opts),
 * fileBase(), undo() (the app's own Ctrl+Z), lastUndo() (its label)}.
 */
export function installAgents(app) {
  const H = getHost({ app: 'partcraft' });
  const C = H.control, F = C.files;
  const PREFIX = 'Assistant: ';
  const T = (d) => C.tool(d);
  const partMode = () => { if (app.mode() === 'assembly') throw new Error('An assembly is open; the PartCraft tools work on a part.'); };
  const out = async (bytes, name, mime, a) => {
    if (a.path) { if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).'); return { path: await F.write(a.path, bytes, { overwrite: a.overwrite }) }; }
    app.download(bytes, name, mime);
    return { downloaded: name };
  };
  C.configure({
    title: 'PartCraft',
    rollback: undoRollback(async () => { app.undo(); await app.built(); }),   // previews of edit tools (AI-CONNECT-SPEC § 2.3)
    document: () => (app.part().name ? app.part().name + '.partcraft.json' : null),
    info: () => ({ part: app.part().name, features: app.part().features.length, mode: app.mode() }),
  });
  T({ name: 'app_info', group: 'read', title: 'About this window', description: 'PartCraft\'s window: the part open, its feature count, the mode (model, sketch, drawing, assembly) and the permissions the person allowed.',
    run: async () => ({ app: 'partcraft', allowed: C.groups, part: app.part().name, features: app.part().features.length, mode: app.mode() }) });
  T({ name: 'part_describe', group: 'read', untrusted: true, title: 'Describe the part', description: 'The part: features by type, failing ones, parameters and equations, configurations, material, and the built solid (volume mm³, area, bodies, bounding box; model Y up).',
    run: async () => { partMode(); await app.built(); return describePart(app.part(), app.regen()); } });
  T({ name: 'features_list', group: 'read', untrusted: true, title: 'List features', description: 'The feature history in order: id, name, type, suppressed, after the rollback bar, build status and message.',
    run: async () => { partMode(); await app.built(); return { features: featureRows(app.part(), app.regen()) }; } });
  T({ name: 'params_list', group: 'read', untrusted: true, title: 'List parameters', description: 'The part\'s parameters (name, expression, value) and every number an equation can drive (key, label such as "Extrude1 depth", value, the equation when driven).',
    run: async () => { partMode(); return paramRows(app.part()); } });
  T({ name: 'mass_properties', group: 'read', title: 'Mass properties', description: 'Volume, surface area, centre of mass and the inertia tensor about it; the mass when the part has a material. From the triangle mesh.',
    run: async () => { partMode(); await app.built(); return massOf(app.part(), app.regen()); } });
  // ---- Break it (0.8 EG.31): what gives way first. Runs the part's own Simulation study; changes nothing, so no preview or undo step ----
  T({ name: 'break_run', group: 'read', title: 'What breaks first', description: 'Scale the loads of the part\'s Simulation study until it gives way: returns the load factor to first yield (and where, in mm) and to buckling, worst first. A factor under 1 means it gives way as loaded. Linear study with tetrahedral elements at the study\'s element size; all loads scale together. Changes nothing. Add supports and loads in the Simulation workspace first.',
    inputSchema: obj({}),
    outputSchema: obj({ first: { type: ['object', 'null'], description: 'What gives way first: kind (yield | buckling), factor, failing.' }, findings: { type: 'array', description: 'Worst first: kind, factor (load factor to failure), util (1/factor), failing, where ({at:[x,y,z]} for yield), what (peak stress and yield, MPa).' }, notes: { type: 'array', items: { type: 'string' } }, elementSize: { type: 'number', description: 'Element size used, mm.' } }),
    run: async () => {
      partMode(); await app.built();
      const part = app.part(), st = part.studies && part.studies.simulation;
      if (!st) throw new ToolError('no_study', 'The part has no Simulation study.', { next: ['Open the Simulation workspace, add a support and a load, then call break_run again.'] });
      const w = app.computeWorker(['sim-worker.js', 'thermal-worker.js', 'tet-worker.js'], { name: 'PartCraft break it', threads: true });
      try {
        const solve = async (job) => { const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer); return w.call('tetSolve', job, { transfer: tr }); };
        const r = await BRK.breakPart({ st, regen: app.regen(), env: (part.studies && part.studies.environment) || null, solve });
        if (!r.ok) throw new ToolError('not_ready', r.problems[0] || 'The study cannot be solved yet.', { next: ['Fix what the Simulation panel lists (supports, loads, faces), then call break_run again.'] });
        const row = (f) => ({ kind: f.kind, factor: r6(f.factor), util: r6(f.util), failing: f.failing, where: f.where || null, what: f.what || {} });
        return { first: r.first ? { kind: r.first.kind, factor: r6(r.first.factor), failing: r.first.failing } : null, findings: r.findings.map(row), notes: r.notes, elementSize: r6(r.h) };
      } finally { try { w.terminate(); } catch (e) { /* already gone */ } }
    } });
  // ---- describe it, get it (0.8 EG.75): pick a generator, size it from loads and material, stress-check it, return the checked part ----
  T({ name: 'generators_list', group: 'read', title: 'List generators', description: 'The generators that can make a part from a need: the ones sized here by hand formulas (bracket, shaft) and the Engineer workspace scripts (heat exchanger, manifold, lattice beam, gyroid block). Returns each id, what it needs and what it makes. Use generators_find to pick one from words.',
    run: async () => ({ generators: DI.listGenerators() }) });
  T({ name: 'generators_find', group: 'read', title: 'Find a generator', description: 'Rank the generators for a need written in words ("bracket holding 20 pounds at 6 inches"). Matches words, not meaning: no trained model. Returns the candidates with the words that matched; an empty list means none fits.',
    inputSchema: obj({ text: { type: 'string', maxLength: 500, description: 'The need in plain words.' }, load: { type: 'string', maxLength: 60, description: 'Optional load kind: point-force-at-distance, torque, bending-and-torque, heat-duty.' } }),
    run: async (a) => ({ picks: DI.findGenerators(a) }) });
  const designRun = (fn) => async (a) => { try { return await fn(a); } catch (e) { if (e instanceof DI.DesignError) throw new ToolError(e.code, e.message, { next: e.next }); throw e; } };
  const DESIGN_REQ = ['generator', 'material'];
  T({ name: 'design_estimate', group: 'read', title: 'Size a part from its loads', description: 'Size a generator from the loads and the material by textbook formulas and check it: returns the dimensions, every check (stress, shear, deflection, bolts) with its limit and safety factor, the mass and the working. Builds nothing; design_make builds it. States what is not checked.',
    inputSchema: obj({ ...DI.DESIGN_PROPS }, DESIGN_REQ), outputSchema: DI.ESTIMATE_SCHEMA,
    run: designRun((a) => DI.publicEstimate(DI.estimate(DI.specFromArgs(a)))) });
  T({ name: 'design_check', group: 'read', title: 'Check a bracket\'s thickness', description: 'Check a bracket you chose the thickness of, for the same loads: returns the stress, shear, deflection and bolt checks against the limits. Use design_estimate to let the thickness be sized.',
    inputSchema: obj({ ...DI.DESIGN_PROPS, thickness: { type: 'number', minimum: 0.1, maximum: 200, description: 'The shelf and flange thickness, in length_unit.' } }, [...DESIGN_REQ, 'thickness']), outputSchema: DI.ESTIMATE_SCHEMA,
    run: designRun((a) => { if (a.generator !== 'bracket') throw new DI.DesignError('unsupported', 'Only a bracket is checked at a chosen thickness.', ['Use design_estimate for a shaft.']); return DI.publicEstimate(DI.estimate(DI.specFromArgs(a))); }) });
  T({ name: 'design_make', group: 'edit', title: 'Make the checked part', description: 'Size the generator (as design_estimate), build the part (sketches, extrudes and the bolt holes, material set) and put it in the open part as one undo step. Refuses a part that already has features unless replace is true. Returns the estimate and the built solid.',
    inputSchema: obj({ ...DI.DESIGN_PROPS, name: { type: 'string', maxLength: 60, description: 'The part\'s name (default Bracket or Shaft).' }, replace: { type: 'boolean', default: false, description: 'true replaces the features of a part that is not empty.' } }, DESIGN_REQ), outputSchema: DI.MAKE_SCHEMA,
    preview: designRun((a) => { partMode(); const est = DI.estimate(DI.specFromArgs(a)); const n = app.part().features.length; if (n && !a.replace) throw new ToolError('conflict', 'The part already has ' + n + ' features.', { next: ['Call design_make again with replace true.', 'Open a new part first.'] }); return { would: { generator: est.generator, ok: est.ok, dims: est.dims, features: est.generator === 'bracket' ? 4 : 2, replaces: n }, undo: PREFIX + 'design ' + est.generator }; }),
    run: designRun(async (a) => {
      partMode();
      const est = DI.estimate(DI.specFromArgs(a));
      const n = app.part().features.length;
      if (n && !a.replace) throw new ToolError('conflict', 'The part already has ' + n + ' features.', { next: ['Call design_make again with replace true.', 'Open a new part first.'] });
      const built = DI.buildPart(est, a.name);
      const label = PREFIX + 'design ' + est.generator;
      app.commit(label, () => { const p = app.part(); p.features = built.features; p.seq = built.seq; p.rollback = null; p.material = built.material; if (a.name) p.name = a.name; });
      await app.built();
      const d = describePart(app.part(), app.regen());
      return { undo: label, estimate: DI.publicEstimate(est), failing: d.failing, solid: d.solid };
    }) });
  // ---- making cost as you design (0.8 EG.76) ----
  T({ name: 'cost_estimate', group: 'read', title: 'Estimate the making cost', description: 'Estimate what it costs to make the part, machined from a block of stock or 3D printed: stock or filament, cutting or machine time, holes, handling and the setup shared by the quantity. Returns each row, the total for one part at that quantity, the biggest drivers and what is not counted. Uses the rates saved with the part, else placeholders: an estimate, not a quote.',
    inputSchema: obj({
      process: { type: 'string', enum: ['cnc', 'printed'], description: 'How it is made: cnc (cut from a block of stock) or printed (3D printed). Default: the part\'s saved choice, else cnc.' },
      qty: { type: 'integer', minimum: 1, maximum: 1000000, description: 'How many parts the job makes (the setup is shared by them).' },
      machine_rate: { type: 'number', minimum: 0, maximum: 100000, description: 'Machine cost per hour, in the cost currency.' },
      setup: { type: 'number', minimum: 0, maximum: 1000000, description: 'Setup cost per job, in the cost currency.' },
      price_per_kg: { type: 'number', minimum: 0, maximum: 100000, description: 'Price of the part\'s material per kilogram, in the cost currency.' },
    }),
    run: async (a) => {
      partMode();
      await app.built();
      try { return COST.estimate(app.part(), app.regen(), COST.optionsFor(app.part(), a)); }
      catch (e) { if (e.code) throw new ToolError(e.code, e.message, { next: e.next || [] }); throw e; }
    } });
  // ---- photo to sketch (0.8 EG.38): a picture of a flat part or a pen drawing becomes a sketch at a stated scale ----
  const photoOpts = (a) => ({ mode: a.mode, tolPx: a.tolerance_px, ...(a.mm_per_px ? { mmPerPx: a.mm_per_px } : a.known_mm ? { known: { of: a.known_of || 'width', mm: a.known_mm } } : {}) });
  const photoLoad = async (a) => {
    partMode();
    if (!F.available) throw new ToolError('unsupported', 'Reading a picture from a path works only in CadCraft Studio (the desktop app).', { next: ['Open the part in Studio, or use File › Import there.'] });
    if (!a.known_mm && !a.mm_per_px) throw new ToolError('invalid_argument', 'Say the scale: one real length (known_mm, with known_of) or mm_per_px.', { next: ['Give known_mm, for example the width of the part in millimetres.'] });
    const PH = await PHOTO();
    let img;
    try { img = await PH.decodePhoto(await F.read(F.resolve(a.path))); }
    catch (e) { if (e.code) throw new ToolError(e.code, e.message, { next: e.next || [] }); throw e; }
    const r = PH.photoToSketch(img, photoOpts(a));
    r.PH = PH;
    if (!r.found) throw new ToolError('failed', r.problems.join(' ') || 'No shape was found in the picture.', { next: ['Use a picture of the part on a plain, evenly lit ground.', 'Try mode lines for a pen drawing.'] });
    return r;
  };
  const photoSummary = (r) => ({ entities: { lines: r.report.lines || 0, arcs: r.report.arcs || 0, circles: r.report.circles || 0 }, outlines: r.loops.length, size_mm: { width: Math.round(r.size.w * 100) / 100, height: Math.round(r.size.h * 100) / 100 }, mm_per_px: Math.round(r.mmPerPx * 1e5) / 1e5, notes: r.problems });
  T({ name: 'photo_import', group: 'edit', title: 'Sketch from a photo', description: 'Turn a picture of a flat part (its silhouette on a plain ground, holes included) or of a pen drawing into a sketch of lines, arcs and circles at the scale you give, and optionally extrude it: one undo step. Classic image processing on this computer, no trained model. Returns what it found and what it could not tell.',
    inputSchema: obj({ ...PHOTO_PROPS }, ['path']),
    preview: async (a) => { const r = await photoLoad(a); return { would: { ...photoSummary(r), features: a.extrude > 0 ? 2 : 1 }, undo: PREFIX + 'photo to sketch' }; },
    run: async (a) => {
      const r = await photoLoad(a);
      const label = PREFIX + 'photo to sketch';
      app.commit(label, () => {
        const p = app.part();
        const sk = addFeature(p, 'sketch', { plane: { kind: 'base', name: a.plane || 'front' }, sketch: r.PH.sketchFromEntities(r.entities, r.loops) });
        if (a.extrude > 0) addFeature(p, 'extrude', { sketch: sk.id, depth: a.extrude });
      });
      await app.built();
      const d = describePart(app.part(), app.regen());
      return { undo: label, ...photoSummary(r), failing: d.failing, solid: d.solid };
    } });
  // ---- hydrostatics of a floating hull (0.8 EG.26) ----
  T({ name: 'hydrostatics_describe', group: 'read', title: 'Hydrostatics of the hull', description: 'Float the part as a hull at a draft: displacement, centre of buoyancy, waterplane, wetted surface, metacentre heights, block and waterplane coefficients, tonnes per cm; with kg also the metacentric height and the righting-arm curve (GZ against heel). Textbook hydrostatics from the solid; no trim, no free surface.',
    inputSchema: obj({ draft: HYDRO.HYDRO_PROPS.draft, length_unit: HYDRO.HYDRO_PROPS.length_unit, water: HYDRO.HYDRO_PROPS.water, kg: HYDRO.HYDRO_PROPS.kg, heel_to: HYDRO.HYDRO_PROPS.heel_to, up: HYDRO.HYDRO_PROPS.up, length_axis: HYDRO.HYDRO_PROPS.length_axis, across_axis: HYDRO.HYDRO_PROPS.across_axis }, ['draft']),
    run: async (a) => {
      partMode();
      await app.built();
      try { return HYDRO.describe(app.regen(), a); }
      catch (e) { if (e.code) throw new ToolError(e.code, e.message, { next: e.next || [] }); throw e; }
    } });
  T({ name: 'param_set', group: 'edit', rollbackPreview: true, title: 'Set a parameter and rebuild', description: 'Set a parameter (a number or an expression) or one of the part\'s numbers ("Extrude1.depth", "Sketch1.D2"), apply the equations and rebuild: one undo step labelled "Assistant: set …". Returns what failed to build, if anything, and the new solid.',
    inputSchema: PARAM_SET_SCHEMA,
    run: async (a) => {
      partMode();
      const trial = JSON.parse(JSON.stringify(app.part()));
      const t = setParameter(trial, a.name, a.value);
      if (!t.ok) throw new Error(t.error);
      const label = PREFIX + 'set ' + a.name + ' = ' + a.value;
      let r = null;
      app.commit(label, () => { r = setParameter(app.part(), a.name, a.value); });
      await app.built();
      const d = describePart(app.part(), app.regen());
      return { ...r, undo: label, failing: d.failing, solid: d.solid };
    } });
  T({ name: 'undo', group: 'edit', title: 'Undo', description: 'Undo the assistant\'s last steps on the part (only steps labelled "Assistant:" unless any is true).',
    inputSchema: obj({ steps: { description: 'How many steps to undo (default 1).', type: 'integer', minimum: 1, maximum: 100, default: 1 }, any: { description: 'true also undoes steps the person made, not only the assistant\'s (default false).', type: 'boolean', default: false } }),
    preview: (a) => { const l = app.lastUndo(); return { wouldUndo: l && (a.any || l.startsWith(PREFIX)) ? [l] : [], note: 'Only the last step is shown: PartCraft\'s history is not listed.' }; },
    run: async (a) => {
      partMode();
      const undone = [];
      for (let i = 0; i < a.steps; i++) { const l = app.lastUndo(); if (!l || (!a.any && !l.startsWith(PREFIX))) break; app.undo(); undone.push(l); }
      await app.built();
      return { undone };
    } });
  T({ name: 'script_run', group: 'edit', rollbackPreview: true, title: 'Run a script', description: 'Run a CraftScript, Lua or Python script in the same sealed worker the Script workspace uses (no network, no files, no page): `part` is the built solid and param()/params() the parameters. Returns what it printed and displayed. It does not change the part.',
    inputSchema: SCRIPT_SCHEMA,
    run: async (a) => {
      partMode();
      if (!a.source === !a.path) throw new Error('Give the script text or a path, one of them.');
      let source = a.source, file = 'assistant.craft';
      if (a.path) { if (!F.available) throw new Error('File paths work only in CadCraft Studio.'); const full = F.resolve(a.path); file = full.replace(/^.*[\\/]/, ''); source = new TextDecoder().decode(await F.read(full)); }
      const lang = a.language || (/\.lua$/i.test(file) ? 'lua' : /\.py$/i.test(file) ? 'python' : 'craft');
      await app.built();
      const { model, params } = scriptPart(app.part(), app.regen());
      const prints = [], displays = {};
      const { createEngine } = await import('./cs-client.js');
      const eng = createEngine({ makeWorker: () => app.computeWorker(['cs-worker.js'], { name: 'assistant-script' }), onPrint: (s) => { if (prints.length < 2000) prints.push(String(s)); },
        onDisplay: (cmd) => { const k = cmd.show ? 'show ' + cmd.show : Object.keys(cmd).find((x) => x !== 'opts') || 'display'; displays[k] = (displays[k] || 0) + 1; } });
      try {
        const r = await eng.run(source, { lang, file, budget: a.budget, part: model || undefined, params, libBase: new URL('./craftlib/', import.meta.url).href });
        return { ok: !!r.ok, ...(r.error ? { error: r.error } : {}), printed: prints.join('').split('\n').slice(0, 2000), displayed: displays, variables: (r.vars || []).map((v) => v.name || v).slice(0, 200), ms: r.ms };
      } finally { try { eng.stop(); } catch { /* gone */ } }
    } });
  T({ name: 'part_export', group: 'export', title: 'Export the part', description: 'The built solid as STL, 3MF, STEP (faceted: the mesh kernel has no exact surfaces) or OpenUSD (.usdz, .usda, .usdc, with its material and mass), as File › Export writes them. With a path (Studio) it is written there, else it downloads.',
    inputSchema: obj({ format: { description: 'stl, 3mf, step (faceted), usdz, usda or usdc.', type: 'string', enum: Object.keys(EXPORT_KINDS) }, path: PATH, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }, ['format']),
    run: async (a) => {
      partMode();
      await app.built();
      if (a.path && !new RegExp('\\.' + EXPORT_KINDS[a.format].ext + '$', 'i').test(a.path)) throw new Error('A ' + a.format.toUpperCase() + ' file ends in .' + EXPORT_KINDS[a.format].ext + '.');
      const x = await exportBytes(app.regen(), a.format, app.fileBase(), app.part());
      return { format: a.format, bytes: x.bytes.length, ...(x.note ? { note: x.note } : {}), ...(await out(x.bytes, app.fileBase() + '.' + x.ext, x.mime, a)) };
    } });
  // ---- 0.7 AS.6 (assistants-gaps): a manual made in the Illustrate workspace (TP.12), as its Export / Instructions menus write it
  T({ name: 'illustrate_export', group: 'export', title: 'Export a manual', description: 'A manual (Illustrate workspace) as PDF or SVG line art of its saved views, as the interactive 3D file (html, opens offline in a browser), or its step-by-step instructions (what: instructions; pdf or html), as the workspace\'s Export and Instructions menus write them. The manual open in the Illustrate workspace, or (Studio) a .partcraft-manual.json file. With a path (Studio) the file is written there (several SVG pages: path is a folder), else it downloads.',
    inputSchema: obj({ ...ILLUSTRATE_SCHEMA.properties, file: { ...PATH, description: 'Studio: a .partcraft-manual.json inside the allowed folders; default the manual open in the Illustrate workspace.' }, path: PATH, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }),
    run: async (a) => {
      let doc;
      if (a.file) {
        if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).');
        const MN = await import('./illustrate/all.js');
        try { doc = MN.readManual(await F.read(F.resolve(a.file))); } catch (e) { throw new Error(a.file + ': ' + (e.message || e)); }
      } else {
        const W = await import('./ws-illustrate.js');
        doc = W._state.doc;
        if (!doc) throw new Error('No manual is open: open one in the Illustrate workspace (Workspace › Illustrate), or give a file (Studio).');
        doc = { m: doc.m, meshes: doc.meshes };
      }
      const text = async (u) => { const r = await fetch(u, { cache: 'no-cache' }); if (!r.ok) throw new Error('Could not read ' + u + '.'); return r.text(); };
      const three = (() => { try { return import.meta.resolve('three'); } catch { return null; } })();
      const loadSource = (b) => (b.own ? text(new URL('./illustrate/' + b.own, import.meta.url).href) : b.file ? text(new URL('./' + b.file, three).href) : text(import.meta.resolve(b.spec)));
      const licence = three ? await text(new URL('./LICENSE', three).href).catch(() => '') : '';
      const r = await illustrateFiles(doc.m, doc.meshes, { ...a, as: a.as || 'pdf', lang: (typeof document !== 'undefined' && document.documentElement.lang) || 'en', loadSource, licence });
      const info = { manual: doc.m.name, as: a.as || 'pdf', what: a.what || 'views', ...(r.pages ? { pages: r.pages } : {}), ...(r.notes.length ? { notes: r.notes } : {}) };
      if (a.path) {
        if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).');
        if (r.files.length === 1) {
          const ext = r.files[0].name.split('.').pop();
          if (!new RegExp('\\.' + ext + '$', 'i').test(a.path)) throw new Error('This export is a .' + ext + ' file: give a path ending in .' + ext + '.');
          return { ...info, files: [{ path: await F.write(a.path, r.files[0].bytes, { overwrite: a.overwrite }), bytes: r.files[0].bytes.length }] };
        }
        const dir = a.path.replace(/[\\/]+$/, '');
        const files = [];
        for (const f of r.files) files.push({ path: await F.write(dir + '/' + f.name, f.bytes, { overwrite: a.overwrite }), bytes: f.bytes.length });
        return { ...info, files };
      }
      for (const f of r.files) app.download(f.bytes, f.name, f.mime);
      return { ...info, downloaded: r.files.map((f) => f.name) };
    } });
  T({ name: 'part_save', group: 'save', title: 'Save the part', description: 'PartCraft\'s own Save (.partcraft.json): to its file when it was opened from one on the desktop, else a new file; with a path (Studio) written there, and later saves go there too.',
    inputSchema: obj({ path: { ...PATH, description: 'Studio: a .partcraft.json file inside the allowed folders.' }, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }),
    run: async (a) => {
      partMode();
      if (!a.path) { await app.savePart(); return { saved: true }; }
      if (!/\.partcraft\.json$/i.test(a.path)) throw new Error('A PartCraft part is a .partcraft.json file.');
      const r = await F.into(a.path, () => app.savePart(), { overwrite: a.overwrite });
      if (!r.written.length) throw new Error(r.errors[0] || 'Nothing was written to ' + a.path + '.');
      return { saved: true, path: r.written[0] };
    } });
  return C;
}
