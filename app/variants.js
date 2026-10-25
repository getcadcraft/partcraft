/* SPDX-License-Identifier: Apache-2.0 */
/**
 * variants.js — the variant pack: every configuration of a part (or a chosen set), built and written in one go
 * (0.7 W3.19, session configurator; LC.14). DOM-free: the app and the command line (`partcraft variants`) both run it,
 * each handing in its own way of building a part.
 *
 *   chooseVariants(part, names)      → { variants: [{ name, id, row }], errors[] }   the part's configurations (all, or the
 *                                      named ones, in the part's order); an unknown name is an error, no configurations too
 *   variantPart(part, row)           → { part, errors[] }   a copy of the part with that configuration applied (its parameter
 *                                      values and, when the configurations control features, the features it turns off)
 *   variantTable(part, variants)     → { columns: [{ key }], rows: [{ id, name, values, off[] }] }   every driving parameter
 *                                      that any chosen configuration sets, with the value each variant ends up with
 *   tableCsv(table) / tableJson(table, info)   the variants table as CSV / JSON text
 *   previewSvg(mesh)                 → an isometric line preview as SVG text
 *   buildPack(part, opts)            → { files: [{ name, data }], manifest, notes[], problems[], variants[] }
 *       opts.names     which configurations (default all)
 *       opts.formats   any of 'step' 'ifc' 'dwg' 'preview' (default all four)
 *       opts.build     async (variantPart) → the regenerate() result ({ mesh, stats, results, … }); required
 *       opts.step      async (variantPart, regen) → STEP text, or null for the faceted STEP (the default)
 *       opts.item      write the library item (<part>.item.json, LibraryCraft's format with `variants`); default true
 *       opts.now       the date written in the manifest and the files (tests pass a fixed one)
 *       opts.progress  (done, total, name) → called before each variant is built
 *   packZip(result)                  → the pack as one stored zip (Uint8Array)
 *
 * Files in the pack: one STEP, IFC, DWG (the part's three views as a drawing sheet) and preview SVG per variant, named by
 * the configuration; `variants.csv` and `variants.json` (the parameter table, and per variant the features turned off, the
 * files, the volume and the size); `<part>.item.json` (the same part as one LibraryCraft item with a body and footprint per
 * variant: upload it to /library and it becomes a configurator page); `README.txt`. A variant that fails to build is left
 * out of the files and named in `problems`; the others are still written.
 */
import * as CF from './configs.js';
import * as PR from './params.js';
import * as PP from './params-part.js';
import { stepFaceted, zipStored } from './export.js';
import { partIfc } from './ifc-export.js';
import { composeSheet, meshViews } from './drawing.js';
import { sheetDwg } from './drawing-dwg.js';
import { itemFromVariants } from './variants-item.js';
import { t } from './i18n.js';

export const PACK_FORMATS = ['step', 'ifc', 'dwg', 'preview'];
export const PACK_MAX = 200;   // the library's limit on the variants of an item

const slug = (s) => String(s).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
const fileStem = (s) => String(s).replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().replace(/^\.+/, '').slice(0, 80) || 'variant';
const uniq = (base, used, join = (b, i) => `${b} (${i})`) => { let n = base, i = 2; while (used.has(n.toLowerCase())) n = join(base, i++); used.add(n.toLowerCase()); return n; };

/** The configurations to build: [{ name, id, row }], ids unique (letters, digits, dashes) for the library item. */
export function chooseVariants(part, names = null) {
  const errors = [];
  const rows = part.configs?.rows || [];
  if (!rows.length) return { variants: [], errors: [t('variants.err.none')] };
  let picked = rows;
  if (names && names.length) {
    const want = new Set(names.map((n) => String(n).toLowerCase()));
    for (const n of names) if (!rows.some((r) => r.name.toLowerCase() === String(n).toLowerCase())) errors.push(t('variants.err.unknown', { name: String(n).slice(0, 60) }));
    picked = rows.filter((r) => want.has(r.name.toLowerCase()));
  }
  if (!picked.length && !errors.length) errors.push(t('variants.err.nothing'));
  if (picked.length > PACK_MAX) { errors.push(t('variants.err.many', { n: PACK_MAX })); picked = picked.slice(0, PACK_MAX); }
  const ids = new Set();
  const variants = picked.map((row) => ({ name: row.name, id: uniq(slug(row.name) || 'variant', ids, (b, i) => `${b.slice(0, 56)}-${i}`), row }));
  return { variants, errors };
}

/** A copy of the part with the configuration applied: parameters set, features on or off, the part's equations re-run. */
export function variantPart(part, row) {
  const p = structuredClone(part);
  const errors = [];
  try {
    if (!p.params) throw new Error(t('variants.err.no_params'));
    CF.applyRow(p.params, row);
  } catch (e) { return { part: p, errors: [e.message] }; }
  const off = CF.featuresOff(p.configs, row);
  if (off) for (const f of p.features) { if (off.has(f.id)) f.suppressed = true; else delete f.suppressed; }
  const ap = PP.applyPartParams(p);
  for (const e of ap.errors || []) errors.push(`${e.where}: ${e.message}`);
  p.configs = { rows: p.configs.rows, active: row.name };
  return { part: p, errors };
}

/** The parameter table: a column for every driving parameter any chosen configuration sets (the part's order), and for each
 * variant the value it ends up with. `variants[i].built` is the applied copy (variantPart); without it the row's own values. */
export function variantTable(part, variants) {
  const set = new Set();
  for (const v of variants) for (const k of Object.keys(v.row.values)) set.add(k);
  const columns = (part.params?.vars || []).filter((x) => set.has(x.name)).map((x) => ({ key: x.name }));
  for (const k of set) if (!columns.some((c) => c.key === k)) columns.push({ key: k });
  const rows = variants.map((v) => {
    const vals = v.built?.params ? PR.evaluateVars(v.built.params).values : null;
    const values = {};
    for (const c of columns) {
      const x = vals ? vals.get(c.key) : v.row.values[c.key];
      values[c.key] = Number.isFinite(x) ? Number(x.toPrecision(12)) : (Number.isFinite(v.row.values[c.key]) ? v.row.values[c.key] : 0);
    }
    const offIds = new Set(v.row.off || []);
    return { id: v.id, name: v.name, values, off: part.features.filter((f) => offIds.has(f.id)).map((f) => f.name) };
  });
  return { columns, rows };
}

const csvCell = (s) => { let x = String(s); if (/^[=+\-@]/.test(x) && !/^-?\d/.test(x)) x = "'" + x; return /[",;\r\n]/.test(x) ? `"${x.replace(/"/g, '""')}"` : x; };
const num = (v) => String(Number(Number(v).toPrecision(12)));

/** name, id, one column per parameter, the features turned off (names, ";"-separated), then one column per file when given. */
export function tableCsv(table, files = null) {
  const head = ['name', 'id', ...table.columns.map((c) => c.key), 'features_off', ...(files ? PACK_FORMATS.map((f) => f + '_file') : [])];   // i18n-ignore: column names of a data file
  const lines = [head, ...table.rows.map((r) => [r.name, r.id, ...table.columns.map((c) => num(r.values[c.key])), r.off.join('; '),
    ...(files ? PACK_FORMATS.map((f) => files[r.id]?.[f] || '') : [])])];
  return '﻿' + lines.map((l) => l.map(csvCell).join(',')).join('\r\n') + '\r\n';
}

export function tableJson(table, { part, now = new Date(), files = {}, stats = {}, notes = [] } = {}) {
  return JSON.stringify({
    format: 'partcraft-variants', version: 1, part: part.name, generated: now.toISOString(), units: 'mm',
    columns: table.columns.map((c) => c.key),
    variants: table.rows.map((r) => ({ id: r.id, name: r.name, values: r.values, features_off: r.off, files: files[r.id] || {}, ...(stats[r.id] || {}) })),
    notes,
  }, null, 2) + '\n';
}

/** An isometric preview of the mesh as SVG (visible edges only), 480 wide at most, drawn to be seen on white or dark. */
export function previewSvg(mesh, { title = '' } = {}) {
  const v = meshViews(mesh, { iso: true }).views.iso;
  const { u0, v0, u1, v1 } = v.box;
  const w = Math.max(1e-6, u1 - u0), h = Math.max(1e-6, v1 - v0), pad = Math.max(w, h) * 0.06, lw = Math.max(w, h) / 220;
  const f = (x) => Number(x.toFixed(3));
  const d = v.visible.map(([a, b, c, e]) => `M${f(a - u0)} ${f(v1 - b)}L${f(c - u0)} ${f(v1 - e)}`).join('');
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(-pad)} ${f(-pad)} ${f(w + 2 * pad)} ${f(h + 2 * pad)}" width="480"${title ? ` role="img" aria-label="${esc(title)}"` : ''}>`
    + (title ? `<title>${esc(title)}</title>` : '') + `<path d="${d}" fill="none" stroke="#1b1f24" stroke-width="${f(lw)}" stroke-linecap="round" stroke-linejoin="round"/></svg>\n`;
}

const sizeOf = (mesh) => {
  const P = mesh.positions, min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], P[i + k]); max[k] = Math.max(max[k], P[i + k]); }
  return [max[0] - min[0], max[2] - min[2], max[1] - min[1]].map((x) => Number(x.toFixed(4)));   // width (x), depth (z), height (y) of the Y-up model
};

export async function buildPack(part, opts = {}) {
  const { names = null, formats = PACK_FORMATS, build, step = null, item = true, now = new Date(), progress = null } = opts;
  if (typeof build !== 'function') throw new Error('buildPack needs opts.build');   // i18n-ignore: a programming error
  const want = new Set(formats.filter((f) => PACK_FORMATS.includes(f)));
  const out = { files: [], manifest: null, notes: [], problems: [], variants: [] };
  const chosen = chooseVariants(part, names);
  for (const e of chosen.errors) out.problems.push({ name: null, error: e });
  if (!chosen.variants.length) return out;

  const stems = new Set();
  const built = [], fileMap = {}, stats = {};
  let faceted = false, meshDrawing = false;
  let done = 0;
  for (const v of chosen.variants) {
    if (progress) await progress(done++, chosen.variants.length, v.name);
    const ap = variantPart(part, v.row);
    if (ap.errors.length) { out.problems.push({ name: v.name, error: ap.errors.join('; ') }); continue; }
    let regen;
    try { regen = await build(ap.part); } catch (e) { out.problems.push({ name: v.name, error: e.message }); continue; }
    const res = (id) => (regen?.results ? (typeof regen.results.get === 'function' ? regen.results.get(id) : regen.results[id]) : null);   // a Map here, a plain object from the kernel worker
    const failing = (ap.part.features || []).filter((f) => !f.suppressed && (res(f.id)?.status === 'error' || res(f.id)?.status === 'skipped'));
    if (failing.length) { out.problems.push({ name: v.name, error: failing.map((f) => `${f.name}: ${res(f.id).message || t('variants.err.not_built')}`).join('; ') }); continue; }
    if (!regen?.mesh || !regen.mesh.indices.length) { out.problems.push({ name: v.name, error: t('variants.err.no_solid') }); continue; }
    const stem = uniq(fileStem(v.name), stems);
    const files = {}, add = (kind, ext, data) => { files[kind] = `${stem}.${ext}`; out.files.push({ name: files[kind], data }); };
    const title = `${part.name}: ${v.name}`;
    try {
      if (want.has('step')) {
        let text = step ? await step(ap.part, regen) : null;
        if (!text) { text = stepFaceted(regen.mesh, part.name, { date: now }).text; faceted = true; }
        add('step', 'step', text);
      }
      if (want.has('ifc')) add('ifc', 'ifc', partIfc({ ...ap.part, name: title }, regen, { evaluate: PR.evaluateVars, fileName: `${stem}.ifc`, now }).text);   // i18n-ignore: a file name
      if (want.has('dwg')) {
        const sheet = composeSheet(meshViews(regen.mesh, { iso: true }), { name: title, date: now, drawing: ap.part.drawing || {}, material: ap.part.material?.name || '' });
        add('dwg', 'dwg', sheetDwg(sheet, { title }));
        meshDrawing = true;
      }
      if (want.has('preview')) add('preview', 'svg', previewSvg(regen.mesh, { title }));
    } catch (e) {
      out.problems.push({ name: v.name, error: e.message });
      out.files = out.files.filter((f) => !Object.values(files).includes(f.name));
      continue;
    }
    built.push({ ...v, built: ap.part, mesh: regen.mesh });
    fileMap[v.id] = files;
    stats[v.id] = { volume_mm3: regen.stats ? Number(Number(regen.stats.volume).toPrecision(9)) : null, size_mm: sizeOf(regen.mesh) };
    out.variants.push({ id: v.id, name: v.name, files });
  }
  if (!built.length) return out;

  const table = variantTable(part, built);
  if (faceted) out.notes.push(t('variants.note.faceted'));
  if (meshDrawing) out.notes.push(t('variants.note.drawing'));
  if (want.has('preview')) out.notes.push(t('variants.note.preview'));
  out.files.push({ name: 'variants.csv', data: tableCsv(table, fileMap) });
  out.files.push({ name: 'variants.json', data: tableJson(table, { part, now, files: fileMap, stats, notes: out.notes }) });
  if (item) {
    const it = itemFromVariants(part, table, built, { activeName: part.configs?.active || null });
    out.files.push({ name: `${fileStem(part.name)}.item.json`, data: JSON.stringify(it.item) + '\n' });   // i18n-ignore: a file name
    out.notes.push(...it.notes);
    out.item = it.item;
  }
  out.files.push({ name: 'README.txt', data: readme(part, out, now) });
  out.manifest = { part: part.name, variants: out.variants, columns: table.columns.map((c) => c.key), notes: out.notes };
  return out;
}

function readme(part, out, now) {
  const L = [t('variants.readme.title', { part: part.name, n: out.variants.length, date: now.toISOString().slice(0, 10) }), ''];
  L.push(t('variants.readme.files'));
  L.push('  variants.csv, variants.json   ' + t('variants.readme.table'));   // i18n-ignore: file names
  L.push('  <name>.step .ifc .dwg .svg    ' + t('variants.readme.per'));
  if (out.item) L.push('  *.item.json                   ' + t('variants.readme.item'));
  if (out.notes.length) { L.push('', t('variants.readme.notes')); for (const n of out.notes) L.push('  - ' + n); }
  if (out.problems.length) { L.push('', t('variants.readme.problems')); for (const p of out.problems) L.push('  - ' + (p.name ? p.name + ': ' : '') + p.error); }
  return L.join('\r\n') + '\r\n';
}

export function packZip(result) { return zipStored(result.files); }
