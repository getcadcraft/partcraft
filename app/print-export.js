/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-export.js — PartCraft's two print exports (0.8 SU.934 shrinkage / scale and SU.929 step 5 split for printing; part_PART_3). The owner's
 * shape (engineer.md § Inbox, 2026-10-27): not features — the mesh kernel holds one body and a body-level scale would move every named face —
 * but actions on the export: the part's mesh scaled for printing (STL / 3MF), and the part cut into pieces that fit the bed, with connectors
 * and numbers, as a zip. The work is the shared files (byte copies from modelcraft/dev via `node tools/modelcraft-test/print-split-sync.mjs
 * partcraft`, rule 39): scale-factors.js, print-features.js (scaleFactors, scaleTris, runSplit), print-split.js (splitForPrint, splitFiles),
 * print3d.js (zipStored, stlBinary, threeMF). This file only turns the part's mesh into triangles and back and holds the two dialogs.
 *
 *   trisOf(mesh) → [[a, b, c]]                    mm, PartCraft's axes
 *   scaledMesh(mesh, f) → { positions, indices }   f = print-features scale parameters ({ factors, about, shrink })
 *   scaleFile(mesh, f, { format, name }) → { name, data, factors }
 *   splitZip(M, mesh, f, { format, name }) → Promise<{ name, data (zip bytes), pieces, pins, joints }>   f = split parameters (bed …)
 *   openScaleDialog(ctx) · openSplitDialog(ctx)   ctx = { ask, el, status, download(bytes, name, type), mesh(), name(), manifold }
 */
import { scaleFactors, scaleTris, runSplit, PRINT_DEFAULTS, SCALE_ABOUT } from './print-features.js';
import { splitFiles, CONNECTORS } from './print-split.js';
import { zipStored, stlBinary, threeMF } from './print3d.js';
import { SHRINK_MODES } from './scale-factors.js';
import { t } from './i18n.js';

export function trisOf(mesh) {
  const P = mesh.positions, I = mesh.indices, out = new Array(I.length / 3);
  const v = (i) => [P[3 * i], P[3 * i + 1], P[3 * i + 2]];
  for (let k = 0; k < out.length; k++) out[k] = [v(I[3 * k]), v(I[3 * k + 1]), v(I[3 * k + 2])];
  return out;
}
const meshOf = (tris) => {
  const positions = new Float32Array(tris.length * 9), indices = new Uint32Array(tris.length * 3);
  tris.forEach((tr, k) => { for (let j = 0; j < 3; j++) { positions.set(tr[j], 9 * k + 3 * j); indices[3 * k + j] = 3 * k + j; } });
  return { positions, indices };
};
export const scaledMesh = (mesh, f) => meshOf(scaleTris(trisOf(mesh), f));
const safe = (s) => String(s || 'part').replace(/[^\p{L}\p{N}._ -]+/gu, '_').trim() || 'part';

export function scaleFile(mesh, f, { format = 'stl', name = 'part' } = {}) {
  const m = scaledMesh(mesh, f), base = safe(name) + '-scaled';
  return format === '3mf' ? { name: base + '.3mf', data: threeMF(m, { name: base, app: 'PartCraft' }), factors: scaleFactors(f) } : { name: base + '.stl', data: stlBinary(m), factors: scaleFactors(f) };
}

export async function splitZip(M, mesh, f, { format = 'stl', name = 'part' } = {}) {
  const res = await runSplit(M, trisOf(mesh), f);
  const zip = zipStored(splitFiles(res, { format, name: safe(name), bed: f.mode === 'bed' ? f.bed : null }));
  return { name: safe(name) + '-pieces.zip', data: zip, pieces: res.pieces.length, pins: res.pins.length, joints: res.joints.length };
}

// ---------------------------------------------------------------- the two dialogs (thin: the numbers are checked by the shared code)

const numIn = (el, value, step = 'any') => el('input', { type: 'number', className: 'pc-input', value: String(value), step, inputMode: 'decimal' });
const selIn = (el, opts, value) => el('select', { className: 'pc-select' }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
const row = (el, label, input) => el('label', { className: 'pc-field' }, el('span', {}, label), input);

export async function openScaleDialog(ctx) {
  const { el } = ctx, mesh = ctx.mesh();
  if (!mesh || !mesh.indices || !mesh.indices.length) { ctx.status(t('pexp.no_solid'), true); return null; }
  const d = PRINT_DEFAULTS.scale();
  const how = selIn(el, [['shrink', t('pexp.scale.by_shrink')], ['factors', t('pexp.scale.by_factors')]], 'shrink');
  const px = numIn(el, 1.5), py = numIn(el, 1.5), pz = numIn(el, 1.5), fx = numIn(el, 1), fy = numIn(el, 1), fz = numIn(el, 1);
  const mode = selIn(el, SHRINK_MODES.map((m) => [m, t('pexp.scale.mode.' + m)]), 'add');
  const about = selIn(el, SCALE_ABOUT.map((a) => [a, t('pexp.scale.about.' + a)]), d.about);
  const format = selIn(el, [['stl', 'STL'], ['3mf', '3MF']], 'stl');
  const body = el('div', { className: 'pc-form', dataset: { pexpScale: '1' } },
    el('p', { className: 'pc-note' }, t('pexp.scale.intro')),
    row(el, t('pexp.scale.how'), how),
    row(el, t('pexp.scale.pct', { axis: 'X' }), px), row(el, t('pexp.scale.pct', { axis: 'Y' }), py), row(el, t('pexp.scale.pct', { axis: 'Z' }), pz), row(el, t('pexp.scale.mode'), mode),
    row(el, t('pexp.scale.factor', { axis: 'X' }), fx), row(el, t('pexp.scale.factor', { axis: 'Y' }), fy), row(el, t('pexp.scale.factor', { axis: 'Z' }), fz),
    row(el, t('pexp.scale.about'), about), row(el, t('pexp.format'), format));
  const key = await ctx.ask({ title: t('pexp.scale.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['save', t('pexp.save'), 'pc-btn is-primary']] });
  if (key !== 'save') return null;
  const n = (i) => Number(i.value);
  const f = { ...d, about: about.value };
  if (how.value === 'shrink') {
    const pct = [n(px), n(py), n(pz)];
    if (!pct.every((p) => p >= 0 && p < 50)) { ctx.status(t('pexp.scale.bad_pct'), true); return null; }
    f.shrink = { pct, mode: mode.value };
  } else {
    const fs = [n(fx), n(fy), n(fz)];
    if (!fs.every((v) => v > 0.01 && v < 100)) { ctx.status(t('pexp.scale.bad_factor'), true); return null; }
    f.factors = fs;
  }
  const out = scaleFile(mesh, f, { format: format.value, name: ctx.name() });
  ctx.download(out.data, out.name, format.value === '3mf' ? 'model/3mf' : 'model/stl');
  ctx.status(t('pexp.scale.saved', { file: out.name, f: out.factors.map((v) => +v.toFixed(5)).join(' × ') }));
  return out;
}

export async function openSplitDialog(ctx) {
  const { el } = ctx, mesh = ctx.mesh();
  if (!mesh || !mesh.indices || !mesh.indices.length) { ctx.status(t('pexp.no_solid'), true); return null; }
  const d = PRINT_DEFAULTS.split();
  const bx = numIn(el, d.bed[0]), by = numIn(el, d.bed[1]), bz = numIn(el, d.bed[2]);
  const conn = selIn(el, CONNECTORS.map((c) => [c, t('pexp.split.conn.' + c)]), d.connector);
  const clear = numIn(el, d.clearance), numbers = el('input', { type: 'checkbox', checked: d.numbers });
  const format = selIn(el, [['stl', 'STL'], ['3mf', '3MF']], 'stl');
  const body = el('div', { className: 'pc-form', dataset: { pexpSplit: '1' } },
    el('p', { className: 'pc-note' }, t('pexp.split.intro')),
    row(el, t('pexp.split.bed', { axis: 'X' }), bx), row(el, t('pexp.split.bed', { axis: 'Y' }), by), row(el, t('pexp.split.bed', { axis: 'Z' }), bz),
    row(el, t('pexp.split.connector'), conn), row(el, t('pexp.split.clearance'), clear),
    el('label', { className: 'pc-check' }, numbers, t('pexp.split.numbers')), row(el, t('pexp.format'), format));
  const key = await ctx.ask({ title: t('pexp.split.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['save', t('pexp.split.save'), 'pc-btn is-primary']] });
  if (key !== 'save') return null;
  const bed = [Number(bx.value), Number(by.value), Number(bz.value)];
  if (!bed.every((v) => v >= 20 && v <= 2000)) { ctx.status(t('pexp.split.bad_bed'), true); return null; }
  const f = { ...d, mode: 'bed', bed, connector: conn.value, clearance: Math.max(0, Math.min(2, Number(clear.value) || 0)), numbers: numbers.checked };
  ctx.status(t('pexp.split.working'), true);
  try {
    const out = await splitZip(ctx.manifold, mesh, f, { format: format.value, name: ctx.name() });
    ctx.download(out.data, out.name, 'application/zip');
    ctx.status(t('pexp.split.saved', { file: out.name, n: out.pieces, j: out.joints }));
    return out;
  } catch (err) {
    ctx.status(t('pexp.split.failed', { error: err && err.code ? err.code : String(err && err.message ? err.message : err) }), true);
    return null;
  }
}
