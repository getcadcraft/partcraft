/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nest-ui.js — Nest flat parts on sheets (0.6 LC.17, session `lc-make`): Export › Nest flat parts on sheets…, and the
 * sheet metal panel's Flat pattern › Nest on sheets…. The engine is the shared one (nest/nest.js, a copy of the repo's
 * lib/nest written only by tools/nest/sync.mjs); this file is the dialog and the few DOM-free helpers it needs.
 *
 *   flatToPart(flat, name, qty) → { name, loops, qty } | null   a flat pattern (sheet-flat.js) as a nesting part: its outline
 *     with every hole and relief (loopsFromSegs → partsFromLoops; the largest outline when the pieces make several)
 *   outlineParts(dxfText, base) → { parts: [{ name, loops, qty }], notes: [words], scale }   closed outlines of a DXF (a
 *     CadCraft drawing saved as DXF, any cutter file), in mm (inches, cm and m converted; no units said = mm, noted)
 *   GRAINS ('', 'along', 'across') → the engine's grain angle · TURNS · readSettings(raw) → settings (numbers clamped)
 *   runNest(parts, settings) → the engine's result · summary(result, settings) → [[label, value]] rows
 *   openNest(ctx, parts) → Promise   the dialog; ctx = { ask, el, btn, download(text, name, type), fileBase(), status }
 * Units are mm (PartCraft's). Parts keep their bends' direction only when they are not mirrored, so mirroring is off unless
 * asked for (a flat pattern laid mirrored bends the other way).
 */
import { nest, nestDxf, readOutlines, loopsFromSegs, partsFromLoops, regionArea, flatten } from './nest/nest.js';
import { t } from './i18n.js';

export const GRAINS = { '': null, along: 0, across: Math.PI / 2 };
export const TURNS = [0, 180, 90, 45, 15];
export const DEFAULTS = { kind: 'plate', w: 2500, h: 1250, count: 0, margin: 10, spacing: 5, step: 90, mirror: false };
const clamp = (v, lo, hi, d) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };

export function readSettings(raw = {}) {
  const s = { ...DEFAULTS, ...raw };
  return {
    kind: s.kind === 'roll' ? 'roll' : 'plate',
    w: clamp(s.w, 1, 1e6, DEFAULTS.w), h: clamp(s.h, 1, 1e6, DEFAULTS.h),
    count: Math.floor(clamp(s.count, 0, 9999, 0)),
    margin: clamp(s.margin, 0, 1e4, DEFAULTS.margin), spacing: clamp(s.spacing, 0, 1e4, DEFAULTS.spacing),
    step: TURNS.includes(Number(s.step)) ? Number(s.step) : DEFAULTS.step, mirror: !!s.mirror,
  };
}

export function flatToPart(flat, name, qty = 1) {
  if (!flat?.segs?.length) return null;
  const { loops } = loopsFromSegs(flat.segs, 1e-4);
  const parts = partsFromLoops(loops);
  if (!parts.length) return null;
  parts.sort((a, b) => regionArea(b.loops) - regionArea(a.loops));
  return { name, loops: parts[0].loops, qty: Math.max(1, Math.floor(qty)), grain: '' };
}

const SCALE = { mm: 1, '': 1, in: 25.4, cm: 10, m: 1000 };
export function outlineParts(text, base = 'Part') {
  const r = readOutlines(text);
  const k = SCALE[r.units] ?? 1;
  const notes = [];
  if (!r.units) notes.push(t('nest.dxf.no_units'));
  else if (k !== 1) notes.push(t('nest.dxf.units', { units: t('nest.unit.' + r.units) }));
  for (const n of r.notes) {
    const [kind, what, count] = n.split(':');
    if (kind === 'open') notes.push(t('nest.dxf.open', { n: +what }));
    else if (kind === 'skipped') notes.push(t('nest.dxf.skipped', { kind: what, n: +count }));
  }
  const parts = r.parts.map((p, i) => ({ name: base + ' ' + (i + 1), loops: p.loops.map((l) => l.map((q) => ({ x: q.x * k, y: q.y * k, ...(q.b ? { b: q.b } : {}) }))), qty: 1, grain: '' }));
  return { parts, notes, scale: k };
}

export function runNest(parts, settings, opts = {}) {
  const s = readSettings(settings);
  const sheet = s.kind === 'roll' ? { h: s.h, margin: s.margin } : { w: s.w, h: s.h, margin: s.margin, count: s.count > 0 ? s.count : Infinity };
  const list = parts.filter((p) => p.qty > 0).map((p, i) => ({ id: 'n' + i, name: p.name, loops: p.loops, qty: p.qty, grain: GRAINS[p.grain || ''] ?? null, turn: true, mirror: s.mirror }));
  const result = nest(list, sheet, { spacing: s.spacing, step: s.step, timeLimit: opts.timeLimit ?? 4000, tries: opts.tries });
  return { result, sheet, settings: s };
}

const fmt = (v, dp = 1) => String(+Number(v).toFixed(dp));
export function summary({ result, settings }) {
  const rows = [];
  if (settings.kind === 'roll') rows.push([t('nest.r.length'), t('nest.r.mm', { v: fmt(result.length) })]);
  else rows.push([t('nest.r.sheets'), String(result.sheets.length)], [t('nest.r.last'), t('nest.r.mm', { v: fmt(result.sheets.at(-1)?.used || 0) })]);
  rows.push([t('nest.r.placed'), String(result.placed.length)], [t('nest.r.efficiency'), t('nest.r.pct', { v: fmt(result.efficiency * 100) })]);
  if (result.unplaced.length) {
    const names = [...new Set(result.unplaced.map((u) => u.name))];
    rows.push([t('nest.r.unplaced'), t('nest.r.unplaced_v', { n: result.unplaced.length, names: names.join(', ') })]);
  }
  return rows;
}

// ------------------------------------------------------------------------------------------------ the dialog

const SVG = 'http://www.w3.org/2000/svg';
const svgEl = (tag, attrs = {}) => { const n = document.createElementNS(SVG, tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v)); return n; };

function preview({ result, sheet, settings }) {
  const H = sheet.h, W = settings.kind === 'roll' ? Math.max(result.length, 1) : sheet.w, gap = H * 0.08;
  const n = Math.max(1, result.sheets.length);
  const svg = svgEl('svg', { viewBox: `${-gap / 2} ${-gap / 2} ${W + gap} ${n * (H + gap)}`, class: 'pc-flat-svg pc-nest-svg', role: 'img', 'data-nest-svg': '1' });
  svg.setAttribute('aria-label', t('nest.preview_label', { n, w: fmt(W, 0), h: fmt(H, 0) }));
  for (let s = 0; s < n; s++) {
    const oy = s * (H + gap) + H;   // sheet s, y up
    svg.append(svgEl('rect', { x: 0, y: oy - H, width: W, height: H, class: 'pc-nest-sheet' }));
    const d = [];
    for (const p of result.placed) if (p.sheet === s) for (const l of p.loops) { const f = flatten(l, H / 2000); d.push('M' + f.map((q) => fmt(q.x, 3) + ' ' + fmt(oy - q.y, 3)).join('L') + 'Z'); }
    if (d.length) svg.append(svgEl('path', { d: d.join(''), class: 'pc-flat-cut pc-nest-part', 'fill-rule': 'evenodd' }));
  }
  return svg;
}

export async function openNest(ctx, parts0 = []) {
  const { el, btn, ask } = ctx;
  const parts = parts0.map((p) => ({ ...p }));
  let settings = readSettings();
  let last = null;
  const body = el('div', { className: 'pc-nest', dataset: { nest: '1' } });
  const listBox = el('div', { className: 'pc-nest-parts' });
  const notesBox = el('div', { className: 'pc-nest-notes', 'aria-live': 'polite' });
  const outBox = el('div', { className: 'pc-nest-out', 'aria-live': 'polite' });
  let uid = 0;
  const id = () => 'pc-nest-' + (++uid);
  const num = (value, onchange, attrs = {}) => { const i = el('input', { type: 'number', className: 'pc-input', value: String(value), id: id(), ...attrs }); i.addEventListener('change', () => onchange(i.value)); return i; };
  const labelled = (label, input) => el('label', { className: 'pc-nest-field', htmlFor: input.id }, el('span', {}, label), input);
  const select = (opts, value, onchange) => { const s = el('select', { className: 'pc-select', id: id() }, ...opts.map(([v, l]) => el('option', { value: v, selected: String(v) === String(value) }, l))); s.addEventListener('change', () => onchange(s.value)); return s; };

  function renderParts() {
    listBox.replaceChildren();
    if (!parts.length) { listBox.append(el('p', { className: 'pc-props-sub' }, t('nest.parts.none'))); return; }
    const rows = parts.map((p, i) => el('tr', { dataset: { nestPart: String(i) } },
      el('td', {}, p.name),
      el('td', {}, num(p.qty, (v) => { p.qty = Math.floor(clamp(v, 0, 999, 1)); }, { min: 0, max: 999, step: 1, 'aria-label': t('nest.parts.qty_of', { name: p.name }), dataset: { nestQty: String(i) } })),
      el('td', {}, select([['', t('nest.grain.none')], ['along', t('nest.grain.along')], ['across', t('nest.grain.across')]], p.grain || '', (v) => { p.grain = v; })),
      el('td', {}, btn(t('nest.parts.remove'), () => { parts.splice(i, 1); renderParts(); }, 'pc-btn', { title: t('nest.parts.remove_title', { name: p.name }) }))));
    listBox.append(el('table', { className: 'pc-bom pc-nest-table' },
      el('thead', {}, el('tr', {}, el('th', {}, t('nest.parts.name')), el('th', {}, t('nest.parts.qty')), el('th', {}, t('nest.parts.grain')), el('th', {}, ''))),
      el('tbody', {}, ...rows)));
  }

  const fileIn = el('input', { type: 'file', accept: '.dxf', hidden: true, dataset: { nestFile: '1' } });
  fileIn.addEventListener('change', async () => {
    const f = fileIn.files?.[0];
    fileIn.value = '';
    if (!f) return;
    let text;
    try { text = await f.text(); } catch (e) { notesBox.replaceChildren(el('p', {}, e.message)); return; }
    const base = f.name.replace(/\.dxf$/i, '');
    const r = outlineParts(text, base);
    parts.push(...r.parts);
    notesBox.replaceChildren(el('p', {}, t('nest.dxf.added', { n: r.parts.length, name: f.name })), ...r.notes.map((n) => el('p', {}, n)));
    renderParts();
  });

  const sheetBox = el('div', { className: 'pc-nest-sheetbox' });
  function renderSheet() {
    const s = settings, set = (k) => (v) => { settings = readSettings({ ...settings, [k]: v }); renderSheet(); };
    sheetBox.replaceChildren(
      labelled(t('nest.sheet.kind'), select([['plate', t('nest.sheet.plate')], ['roll', t('nest.sheet.roll')]], s.kind, set('kind'))),
      ...(s.kind === 'plate' ? [labelled(t('nest.sheet.w'), num(s.w, set('w'), { min: 1, dataset: { nestW: '1' } }))] : []),
      labelled(t(s.kind === 'plate' ? 'nest.sheet.h' : 'nest.sheet.roll_w'), num(s.h, set('h'), { min: 1, dataset: { nestH: '1' } })),
      ...(s.kind === 'plate' ? [labelled(t('nest.sheet.count'), num(s.count, set('count'), { min: 0, step: 1, title: t('nest.sheet.count_title') }))] : []),
      labelled(t('nest.sheet.margin'), num(s.margin, set('margin'), { min: 0 })),
      labelled(t('nest.sheet.spacing'), num(s.spacing, set('spacing'), { min: 0, dataset: { nestSpacing: '1' } })),
      labelled(t('nest.sheet.turns'), select(TURNS.map((d) => [d, d ? t('nest.turns.step', { d }) : t('nest.turns.none')]), s.step, set('step'))),
      el('label', { className: 'pc-check' }, (() => { const i = el('input', { type: 'checkbox', checked: s.mirror }); i.addEventListener('change', () => { settings = readSettings({ ...settings, mirror: i.checked }); }); return i; })(), t('nest.sheet.mirror')));
  }

  function renderOut() {
    outBox.replaceChildren();
    if (!last) return;
    const dl = el('dl', { className: 'pc-dl', dataset: { nestFacts: '1' } });
    for (const [k, v] of summary(last)) dl.append(el('dt', {}, k), el('dd', {}, v));
    outBox.append(preview(last), dl, el('div', { className: 'pc-actions' }, btn(t('nest.dxf.save'), () => {
      const text = nestDxf(last.result, last.sheet, { units: 'mm' });
      ctx.download(text, t('nest.dxf.file', { name: ctx.fileBase() }), 'application/dxf');
    }, 'pc-btn', { dataset: { nestDxf: '1' }, title: t('nest.dxf.save_title') })));
  }

  const go = () => {
    if (!parts.some((p) => p.qty > 0)) { notesBox.replaceChildren(el('p', {}, t('nest.parts.none'))); return; }
    ctx.status(t('nest.busy'), true);
    try { last = runNest(parts, settings); } catch (e) { last = null; notesBox.replaceChildren(el('p', {}, e.message)); }
    ctx.status(last ? t('nest.done', { n: last.result.placed.length, pct: fmt(last.result.efficiency * 100) }) : '');
    renderOut();
  };

  body.append(
    el('p', { className: 'pc-props-sub' }, t('nest.intro')),
    listBox,
    el('div', { className: 'pc-actions' }, btn(t('nest.dxf.add'), () => fileIn.click(), 'pc-btn', { dataset: { nestAdd: '1' }, title: t('nest.dxf.add_title') }), fileIn),
    notesBox,
    el('p', { className: 'pc-props-sub' }, t('nest.sheet.title')),
    sheetBox,
    el('div', { className: 'pc-actions' }, btn(t('nest.run'), go, 'pc-btn is-primary', { dataset: { nestRun: '1' } })),
    outBox);
  renderParts(); renderSheet();
  await ask({ title: t('nest.title'), body, buttons: [['cancel', t('app.btn.close'), 'pc-btn']] });
}
