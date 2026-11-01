/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-sheets-ui.js — Manufacture › Nested sheets to G-code (0.8 SU.1035 step 4b, session `fab-08`): the dialog over cam-sheets.js. Open a
 * nested-sheets DXF (the Cabinets add-on's, or any nest with layers SHEET / PARTS / LABELS), set the sheet thickness, the tool, tabs and
 * the post, make one program per sheet and save them. The engine is cam-sheets.js (DOM-free, tested by
 * tools/partcraft-test/test-cam-sheets.mjs); the words are sheets-lang.mjs (written into lang/ by tools/partcraft-test/sheets-words.mjs).
 *
 *   readOptions(raw) → clamped options for sheetsGcode: { thickness, tool: { d, flutes, fluteLen }, stepdown, tabs, tabWidth, tabHeight, post, material }
 *   noteText(note) → the words of a note code from cam-sheets.js
 *   openSheets(ctx) → Promise   ctx = { ask, el, btn, status, download(text, name, type), fileBase(), posts() → study posts, post() → the post last used }
 */
import { sheetsFromDxf, sheetsGcode } from './cam-sheets.js';
import { POSTS } from './cam.js';
import { MATERIALS } from './cam-tools.js';
import { t } from './i18n.js';

const clamp = (v, lo, hi, d) => { const n = Number(v); return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : d; };
export const DEFAULTS = { thickness: 18, toolD: 6, flutes: 2, stepdown: 6, tabs: 0, tabWidth: 6, tabHeight: 2, post: 'grbl', material: 'wood' };

export function readOptions(raw = {}) {
  const d = DEFAULTS;
  const thickness = clamp(raw.thickness, 0.1, 200, d.thickness), dia = clamp(raw.toolD, 0.5, 50, d.toolD);
  return {
    thickness, tool: { d: dia, flutes: Math.round(clamp(raw.flutes, 1, 8, d.flutes)), fluteLen: Math.max(20, thickness + 5) },
    stepdown: clamp(raw.stepdown, 0.1, 100, d.stepdown), tabs: Math.round(clamp(raw.tabs, 0, 12, d.tabs)),
    tabWidth: clamp(raw.tabWidth, 0.5, 100, d.tabWidth), tabHeight: clamp(raw.tabHeight, 0.1, 100, d.tabHeight),
    post: String(raw.post || d.post), material: MATERIALS[raw.material] ? raw.material : d.material,
  };
}

export const noteText = (n) => t('sheets.note.' + n.code, { n: n.n ?? '', sheet: n.sheet ?? '', why: n.why ?? '' });

export async function openSheets(ctx) {
  const { el, btn, ask } = ctx;
  let raw = { ...DEFAULTS, post: ctx.post?.() || DEFAULTS.post };
  let text = null, name = '', files = [];
  const body = el('div', { className: 'pc-sheets', dataset: { sheets: '1' } });
  const notesBox = el('div', { className: 'pc-nest-notes', 'aria-live': 'polite' });
  const outBox = el('div', { className: 'pc-nest-out', 'aria-live': 'polite' });
  let uid = 0;
  const id = () => 'pc-sheets-' + (++uid);
  const num = (key, attrs = {}) => { const i = el('input', { type: 'number', className: 'pc-input', value: String(raw[key]), id: id(), dataset: { sheetsField: key }, ...attrs }); i.addEventListener('change', () => { raw[key] = i.value; }); return i; };
  const labelled = (label, input) => el('label', { className: 'pc-nest-field', htmlFor: input.id }, el('span', {}, label), input);
  const posts = () => [...Object.keys(POSTS).map((k) => [k, POSTS[k]]), ...(ctx.posts?.() || []).map((p) => ['custom:' + p.id, p.name || p.id])];
  const postSel = () => { const s = el('select', { className: 'pc-select', id: id(), dataset: { sheetsField: 'post' } }, ...posts().map(([v, l]) => el('option', { value: v, selected: v === raw.post }, l))); s.addEventListener('change', () => { raw.post = s.value; }); return s; };
  const matSel = () => { const s = el('select', { className: 'pc-select', id: id(), dataset: { sheetsField: 'material' } }, ...Object.keys(MATERIALS).map((k) => el('option', { value: k, selected: k === raw.material }, MATERIALS[k].label))); s.addEventListener('change', () => { raw.material = s.value; }); return s; };

  const fileIn = el('input', { type: 'file', accept: '.dxf', hidden: true, dataset: { sheetsFile: '1' } });
  fileIn.addEventListener('change', async () => {
    const f = fileIn.files?.[0];
    fileIn.value = '';
    if (!f) return;
    try { text = await f.text(); } catch (e) { notesBox.replaceChildren(el('p', {}, e.message)); return; }
    name = f.name.replace(/\.dxf$/i, '');
    const r = sheetsFromDxf(text);
    files = [];
    outBox.replaceChildren();
    notesBox.replaceChildren(el('p', { dataset: { sheetsOpened: '1' } }, t('sheets.opened', { name: f.name, sheets: r.sheets.length, parts: r.sheets.reduce((a, s) => a + s.parts.length, 0) })), ...r.notes.map((n) => el('p', {}, noteText(n))));
  });

  const go = () => {
    if (!text) { notesBox.replaceChildren(el('p', {}, t('sheets.none'))); return; }
    const o = readOptions(raw);
    ctx.status(t('sheets.busy'), true);
    let r;
    try { r = sheetsGcode(text, { ...o, posts: ctx.posts?.() || [], name: name || ctx.fileBase() }); } catch (e) { ctx.status(''); notesBox.replaceChildren(el('p', {}, e.message === 'post' ? t('sheets.err.post') : e.message)); return; }
    files = r.files;
    ctx.status(t('sheets.done', { n: files.length }));
    notesBox.replaceChildren(...r.notes.map((n) => el('p', {}, noteText(n))));
    const rows = files.map((f) => el('li', { dataset: { sheetsProgram: String(f.sheet) } }, t('sheets.sheet', { n: f.sheet, parts: f.info.parts, holes: f.info.holes }), ' ',
      btn(t('sheets.save', { n: f.sheet, ext: f.ext }), () => ctx.download(f.text, t('sheets.file', { name: name || ctx.fileBase(), n: f.sheet, ext: f.ext }), 'text/plain'), 'pc-btn', { dataset: { sheetsSave: String(f.sheet) } })));
    outBox.replaceChildren(el('ul', { className: 'pc-list' }, ...rows), el('p', { className: 'pc-props-sub' }, t('sheets.verify')));
  };

  body.append(
    el('p', { className: 'pc-props-sub' }, t('sheets.intro')),
    el('div', { className: 'pc-actions' }, btn(t('sheets.open'), () => fileIn.click(), 'pc-btn', { dataset: { sheetsOpen: '1' }, title: t('sheets.open_title') }), fileIn),
    notesBox,
    labelled(t('sheets.thickness'), num('thickness', { min: 0.1, step: 'any' })), labelled(t('sheets.tool_d'), num('toolD', { min: 0.5, step: 'any' })), labelled(t('sheets.flutes'), num('flutes', { min: 1, max: 8, step: 1 })),
    labelled(t('sheets.stepdown'), num('stepdown', { min: 0.1, step: 'any' })), labelled(t('sheets.tabs'), num('tabs', { min: 0, max: 12, step: 1 })),
    labelled(t('sheets.tab_width'), num('tabWidth', { min: 0.5, step: 'any' })), labelled(t('sheets.tab_height'), num('tabHeight', { min: 0.1, step: 'any' })),
    labelled(t('sheets.post'), postSel()), labelled(t('sheets.material'), matSel()),
    el('div', { className: 'pc-actions' }, btn(t('sheets.run'), go, 'pc-btn is-primary', { dataset: { sheetsRun: '1' } })),
    outBox);
  await ask({ title: t('sheets.title'), body, buttons: [['cancel', t('app.btn.close'), 'pc-btn']] });
}
