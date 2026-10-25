/* SPDX-License-Identifier: Apache-2.0 */
/**
 * laser-ui.js — Export › Laser program… (0.7 SU.772, session `part-07` mounting make-07's panel): the flat parts' cut lines (and
 * bend lines, as their own layer) or outlines from a DXF go to lib/laser's panel (laser/laser-panel.js, a copy written by
 * tools/laser/sync.mjs): what each layer does, the preview, GRBL G-code to save, and — after a click — framing and sending over
 * Web Serial. The settings are saved in the part or assembly file (`laser`, cleaned by laser-model.js `cleanJob`).
 *
 *   flatInput(flats, outlines) → { shapes, pictures }   flats: sheet-flat.js patterns, outlines: nest-ui.js outlineParts() parts;
 *     layers CUT (closed outlines and holes) and BEND (open bend lines); pieces are laid side by side, 10 mm apart
 *   openLaser(ctx, flats) → Promise    the dialog; ctx = { ask, el, btn, status, download(text, name, type), fileBase(),
 *     getJob(), setJob(label, next), confirm(text) → Promise<boolean> }
 */
import { laserPanel } from './laser/laser-panel.js';
import { loopsFromSegs, partsFromLoops, flatten } from './nest/nest.js';
import { outlineParts } from './nest-ui.js';
import { t } from './i18n.js';

const GAP = 10;
const bb = (loops) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const l of loops) for (const p of flatten(l, 0.05)) { x0 = Math.min(x0, p.x); y0 = Math.min(y0, p.y); x1 = Math.max(x1, p.x); y1 = Math.max(y1, p.y); } return { x0, y0, x1, y1 }; };
const move = (l, dx, dy) => l.map((p) => ({ ...p, x: p.x + dx, y: p.y + dy }));

export function flatInput(flats = [], outlines = []) {
  const pieces = [];   // { loops, bends }
  for (const f of flats) {
    if (!f?.segs?.length) continue;
    const parts = partsFromLoops(loopsFromSegs(f.segs, 1e-4).loops);
    for (const p of parts) pieces.push({ loops: p.loops, bends: f.bends || [] });
  }
  for (const o of outlines) pieces.push({ loops: o.loops, bends: [] });
  const shapes = [], cut = [], bend = [];
  let x = 0;
  for (const pc of pieces) {
    const b = bb(pc.loops), dx = x - b.x0, dy = -b.y0;
    for (const l of pc.loops) cut.push(move(l, dx, dy));
    for (const bn of pc.bends) if (bn?.a && bn?.b) bend.push([{ x: bn.a[0] + dx, y: bn.a[1] + dy }, { x: bn.b[0] + dx, y: bn.b[1] + dy }]);
    x += b.x1 - b.x0 + GAP;
  }
  if (cut.length) shapes.push({ layer: 'CUT', loops: cut, closed: true });
  for (const l of bend) shapes.push({ layer: 'BEND', loops: [l], closed: false });
  return { shapes, pictures: [] };
}

export async function openLaser(ctx, flats = []) {
  const { el, btn, ask } = ctx;
  const outlines = [];
  const notes = el('div', { className: 'pc-nest-notes', 'aria-live': 'polite' });
  let version = 1, input = flatInput(flats, outlines);
  const root = el('div', { className: 'pc-laser', dataset: { laser: '1' } });
  const fileIn = el('input', { type: 'file', accept: '.dxf', hidden: true, dataset: { laserFile: '1' } });
  fileIn.addEventListener('change', async () => {
    const f = fileIn.files?.[0];
    fileIn.value = '';
    if (!f) return;
    let text;
    try { text = await f.text(); } catch (e) { notes.replaceChildren(el('p', {}, e.message)); return; }
    const r = outlineParts(text, f.name.replace(/\.dxf$/i, ''));
    outlines.push(...r.parts);
    input = flatInput(flats, outlines); version++;
    notes.replaceChildren(el('p', {}, t('nest.dxf.added', { n: r.parts.length, name: f.name })), ...r.notes.map((n) => el('p', {}, n)));
    render();
  });
  const host = {
    el, t,
    cls: { block: 'pc-block', note: 'pc-note', head: 'pc-props-sub', table: 'pc-bom', btn: 'pc-btn', primary: 'pc-btn is-primary', link: 'pc-linkbtn', select: 'pc-select', input: 'pc-input', error: 'pc-perr' },
    job: () => ctx.getJob() || {},
    setJob: (label, next) => { version++; const r = ctx.setJob(label, next); render(); return r; },
    layers: () => [...new Set(input.shapes.map((s) => s.layer))],
    input: () => input,
    version: () => version,
    download: (name, data, type) => ctx.download(data, name, type),
    print: (text) => ctx.status(text),
    fileName: () => ctx.fileBase(),
    confirm: (text) => ctx.confirm(text),
    serial: typeof navigator !== 'undefined' ? navigator.serial : undefined,
    rerender: () => render(),
  };
  const panel = laserPanel(host);
  function render() {
    root.replaceChildren(
      ...(!input.shapes.length ? [el('p', { className: 'pc-props-sub', dataset: { laserNone: '1' } }, t('pclaser.none'))] : []),
      el('div', { className: 'pc-actions' }, btn(t('nest.dxf.add'), () => fileIn.click(), 'pc-btn', { dataset: { laserAdd: '1' }, title: t('nest.dxf.add_title') }), fileIn),
      notes, ...panel.panel());
  }
  render();
  await ask({ title: t('pclaser.title'), body: root, buttons: [['cancel', t('app.btn.close'), 'pc-btn']] });
  panel.dispose?.();
}
