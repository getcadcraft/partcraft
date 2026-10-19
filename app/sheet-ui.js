/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheet-ui.js — the Design workspace's panels for sheet metal (sheetmetal.js; 0.4 P15/P16). A UI module (text reaches the DOM
 * only through el()); partcraft.js hands in its state as `host` (getters, as for bodies-ui.js) and calls:
 *   create(type)        props for a new Base flange (the selected or last free sketch) / Edge flange (a picked edge), or null + a status
 *   panel(f, grid, out) the right-panel rows
 *   onPick(hit, ev)     a click in the view while the flange's edge slot waits (true = taken)
 *   cancel()            Esc: drop the waiting slot
 * 0.4 P17: both panels end with **Flat pattern** — Lay flat (host.flatPattern(): the exact kernel's sheetFlat op) → a preview
 * (outline, dashed bend lines), size, area, the bends, notes and Save DXF (export.js dxfFlat; host.saveText). The result is
 * kept for the rebuild it was made from (host.regen); a later rebuild shows Lay flat again.
 */
import * as P from './part.js';
import { edgeRef } from './brep.js';
import { SHEET_LABELS, RELIEFS, sheetOf, LIMITS } from './sheetmetal.js';
import { dxfFlat } from './export.js';
import { t } from './i18n.js';

const SVGNS = 'http://www.w3.org/2000/svg';

export const SHEET_TYPES = new Set(Object.keys(SHEET_LABELS));
export const SHEET_ICONS = { sheetbase: 'file-earmark', sheetflange: 'arrow-90deg-up' };
export const SHEET_MENU = ['sheetbase', 'sheetflange'];

export function installSheetUI(host) {
  const { el } = host;
  let slot = null;   // { id }: the flange whose edge is being picked
  const set = (f, label, fn) => host.setFeature(f.id, label, fn);
  const num = (f, key, label, undoLabel, [min, max]) => host.field(label, host.numInput(f[key], (v) => set(f, undoLabel, (g) => { g[key] = v; }), { min, max, key: f.id + '.' + key }));

  function freeSketch() {
    const part = host.part, sel = host.sel;
    if (sel?.kind === 'feature') { const f = P.featureById(part, sel.id); if (f?.type === 'sketch') return f.id; }
    const used = new Set(part.features.filter((f) => typeof f.sketch === 'string').map((f) => f.sketch));
    const c = part.features.slice(0, P.builtCount(part)).filter((f) => f.type === 'sketch' && !used.has(f.id) && f.sketch.entities.some((e) => e.type !== 'point' && !e.construction));
    return c.length ? c[c.length - 1].id : null;
  }

  function create(type) {
    if (!host.useExact) { host.status(t('sheet.ui.needs_exact')); return null; }
    if (type === 'sheetbase') {
      const sketch = freeSketch();
      if (!sketch) { host.status(t('sheet.ui.no_sketch')); return null; }
      return { sketch };
    }
    const part = host.part;
    if (!sheetOf(part, P.builtCount(part))) { host.status(t('sheet.err.no_base')); return null; }
    const pk = host.pick;
    return { edge: pk?.kind === 'edge' && pk.ref ? pk.ref : null };
  }

  function arm(f) {
    if (slot && slot.id === f.id) { slot = null; host.status(''); host.renderProps(); return; }
    slot = { id: f.id };
    host.status(t('sheet.ui.pick_status', { name: f.name }), true);
    host.renderProps();
    host.focusStage();
  }

  function onPick(h) {
    if (!slot) return false;
    const f = P.featureById(host.part, slot.id);
    if (!f) { slot = null; return false; }
    const regen = host.regen;
    const edge = h && h.kind === 'edge' && regen?.exact && h.edge !== undefined ? regen.edges[h.edge] : null;
    if (!edge || edge.type !== 'line') { host.status(t('sheet.ui.pick_straight') + ' ' + t('sheet.ui.esc_cancels'), true); return true; }
    slot = null;
    set(f, t('sheet.ui.undo.edge'), (g) => { g.edge = edgeRef(edge); });
    host.status(t('sheet.ui.edge_set', { name: f.name }));
    return true;
  }

  function cancel() { if (!slot) return false; slot = null; host.status(''); host.renderProps(); return true; }

  // ---------------------------------------------------------------- the flat pattern (P17)
  let flat = null;   // { regen, result } | { regen, error } | { regen, busy }
  const fmt = (v) => String(+v.toFixed(3));
  const bendWords = (b) => t(b.up ? 'sheet.flat.bend_up' : 'sheet.flat.bend_down', { name: b.name, angle: fmt(b.angle), r: fmt(b.r) });
  async function layFlat() {
    const regen = host.regen;
    flat = { regen, busy: true };
    host.renderProps();
    try { flat = { regen, result: await host.flatPattern() }; } catch (e) { flat = { regen, error: e.message }; }
    if (host.regen === regen) host.renderProps();
  }
  function preview(fl) {
    const doc = host.view?.canvas?.ownerDocument || document;
    const mk = (tag, attrs) => { const e = doc.createElementNS(SVGNS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v)); return e; };
    const { x0, y0, x1, y1 } = fl.box, w = Math.max(1e-6, x1 - x0), h = Math.max(1e-6, y1 - y0), m = 0.05 * Math.max(w, h);
    const svg = mk('svg', { viewBox: `${x0 - m} ${-(y1 + m)} ${w + 2 * m} ${h + 2 * m}`, class: 'pc-flat-svg', role: 'img', 'data-sheet-flat-svg': '1' });
    svg.setAttribute('aria-label', t('sheet.flat.preview_label', { w: fmt(w), h: fmt(h) }));
    const g = mk('g', { transform: 'scale(1,-1)', fill: 'none', 'vector-effect': 'non-scaling-stroke' });
    svg.append(g);
    const path = [];
    for (const sg of fl.segs) {
      if (sg.type === 'line') path.push(`M${sg.a[0]} ${sg.a[1]}L${sg.b[0]} ${sg.b[1]}`);
      else if (sg.type === 'circle') g.append(mk('circle', { cx: sg.c[0], cy: sg.c[1], r: sg.r, class: 'pc-flat-cut' }));
      else if (sg.type === 'arc') { const a0 = sg.a0 * Math.PI / 180, a1 = sg.a1 * Math.PI / 180, sw = ((sg.a1 - sg.a0) % 360 + 360) % 360; path.push(`M${sg.c[0] + sg.r * Math.cos(a0)} ${sg.c[1] + sg.r * Math.sin(a0)}A${sg.r} ${sg.r} 0 ${sw > 180 ? 1 : 0} 1 ${sg.c[0] + sg.r * Math.cos(a1)} ${sg.c[1] + sg.r * Math.sin(a1)}`); }
      else path.push('M' + sg.pts.map((p) => p.join(' ')).join('L'));
    }
    g.append(mk('path', { d: path.join(''), class: 'pc-flat-cut' }));
    for (const b of fl.bends) g.append(mk('line', { x1: b.a[0], y1: b.a[1], x2: b.b[0], y2: b.b[1], class: 'pc-flat-bend' }));
    return svg;
  }
  function flatBlock() {
    const regen = host.regen;
    const kids = [el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('sheet.flat.title'))];
    const cur = flat && flat.regen === regen ? flat : null;
    if (!cur || cur.error) {
      if (cur?.error) kids.push(host.msg(cur.error, 'is-error'));
      kids.push(el('div', { className: 'pc-actions' }, host.btn(t('sheet.flat.lay'), () => layFlat(), 'pc-btn', { dataset: { sheetFlat: '1' }, title: t('sheet.flat.lay_title') })));
    } else if (cur.busy) kids.push(el('p', { className: 'pc-props-sub' }, t('sheet.flat.busy')));
    else {
      const fl = cur.result, w = fl.box.x1 - fl.box.x0, h = fl.box.y1 - fl.box.y0;
      kids.push(preview(fl));
      const dl = el('dl', { className: 'pc-dl', dataset: { sheetFlatFacts: '1' } });
      const rows = [[t('sheet.flat.size'), t('sheet.flat.size_v', { w: fmt(w), h: fmt(h) })], [t('sheet.flat.area'), t('sheet.flat.area_v', { a: fmt(fl.area) })], [t('sheet.flat.bends'), String(fl.bends.length)]];
      for (const [k, v] of rows) dl.append(el('dt', {}, k), el('dd', {}, v));
      kids.push(dl);
      if (fl.bends.length) kids.push(el('ul', { className: 'pc-flat-bends' }, ...fl.bends.map((b) => el('li', {}, bendWords(b)))));
      for (const n of fl.notes) kids.push(el('p', { className: 'pc-props-sub' }, n));
      kids.push(el('div', { className: 'pc-actions' }, host.btn(t('sheet.flat.dxf'), () => {
        const { text } = dxfFlat(fl, (b) => t(b.up ? 'sheet.flat.note_up' : 'sheet.flat.note_down', { angle: fmt(b.angle), r: fmt(b.r) }));
        host.saveText(t('sheet.flat.file', { name: host.fileBase() }), text, 'application/dxf');
      }, 'pc-btn', { dataset: { sheetDxf: '1' }, title: t('sheet.flat.dxf_title') }),
      host.nest ? host.btn(t('nest.open'), () => host.nest(fl), 'pc-btn', { dataset: { sheetNest: '1' }, title: t('nest.open_title') }) : null));
    }
    return el('div', { className: 'pc-block', dataset: { sheetFlatBlock: '1' } }, ...kids);
  }

  function panel(f, grid, out) {
    const part = host.part;
    if (f.type === 'sheetbase') {
      const sk = P.featureById(part, f.sketch);
      grid.push(el('span', { className: 'k' }, t('sheet.ui.sketch')), el('span', { className: 'v' }, sk ? sk.name : '—'));
      grid.push(...num(f, 't', t('sheet.ui.thickness'), t('sheet.ui.undo.thickness'), LIMITS.t));
      grid.push(...num(f, 'r', t('sheet.ui.radius'), t('sheet.ui.undo.radius'), LIMITS.r));
      grid.push(...num(f, 'k', t('sheet.ui.k'), t('sheet.ui.undo.k'), LIMITS.k));
      grid.push(...num(f, 'depth', t('sheet.ui.depth'), t('sheet.ui.undo.depth'), LIMITS.depth));
      grid.push(host.check(t('sheet.ui.reverse'), f.reverse, (v) => set(f, t('sheet.ui.undo.side'), (g) => { g.reverse = v; })));
      out.push(el('div', { className: 'pc-props' }, ...grid));
      grid.length = 0;
      out.push(el('p', { className: 'pc-props-sub' }, t('sheet.ui.base_note')));
      out.push(flatBlock());
      return;
    }
    const sheet = sheetOf(part, P.indexOf(part, f.id));
    const picking = slot && slot.id === f.id;
    grid.push(el('span', { className: 'k' }, t('sheet.ui.edge')), el('span', { className: 'v pc-slot' },
      el('span', {}, f.edge ? t('sheet.ui.edge_between', { a: host.faceWords(f.edge.faces[0]), b: host.faceWords(f.edge.faces[1]) }) : t('sheet.ui.none')),
      host.btn(picking ? t('sheet.ui.picking') : t('sheet.ui.pick'), () => arm(f), picking ? 'pc-btn is-primary' : 'pc-btn', { dataset: { sheetSlot: 'edge' } })));
    grid.push(...num(f, 'angle', t('sheet.ui.angle'), t('sheet.ui.undo.angle'), LIMITS.angle));
    grid.push(...num(f, 'length', t('sheet.ui.length'), t('sheet.ui.undo.length'), LIMITS.length));
    grid.push(host.check(t('sheet.ui.flip'), f.flip, (v) => set(f, t('sheet.ui.undo.flip'), (g) => { g.flip = v; })));
    for (const i of [0, 1]) grid.push(...host.field(t(i ? 'sheet.ui.offset_end' : 'sheet.ui.offset_start'), host.numInput(f.offsets[i], (v) => set(f, t('sheet.ui.undo.offset'), (g) => { g.offsets = i ? [g.offsets[0], v] : [v, g.offsets[1]]; }), { min: LIMITS.offset[0], max: LIMITS.offset[1] })));
    grid.push(...host.field(t('sheet.ui.relief'), host.selectInput(RELIEFS.map((k) => [k, t('sheet.ui.relief.' + k)]), f.relief, (v) => set(f, t('sheet.ui.undo.relief'), (g) => { g.relief = v; }))));
    if (f.relief === 'rect') grid.push(...num(f, 'reliefWidth', t('sheet.ui.relief_width'), t('sheet.ui.undo.relief'), LIMITS.t));
    out.push(el('div', { className: 'pc-props' }, ...grid));
    grid.length = 0;
    out.push(el('p', { className: 'pc-props-sub' }, sheet ? t('sheet.ui.from_base', { name: sheet.name, t: sheet.t, r: sheet.r, k: sheet.k }) : t('sheet.err.no_base')));
    if (sheet) out.push(flatBlock());
  }

  return { create, panel, onPick, cancel, pickEdge: (f) => { if (!(slot && slot.id === f.id)) arm(f); }, get picking() { return slot ? slot.id : null; } };
}
