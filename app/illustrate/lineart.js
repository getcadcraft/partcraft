/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/lineart.js — technical illustrations (0.7 TP.7; DOM-free): a manual view as vector line art in one display list
 * (display.js), which svg.js and pdf.js both write — so the SVG and the PDF are the same drawing.
 *
 *   lineArt(m, meshes, view, { W, H (mm), hidden: 'dashed'|'off', fills: 'none'|'flat'|'shaded', detail, annotations, table,
 *            trails, cuts, pens, labels, pieces }) → { w, h, items, stats }
 *     three line weights: outline (silhouettes, open edges, cut outlines), edge (sharp edges), detail (soft creases, when
 *     asked); hidden lines dashed or left out; ghosted parts in a light thin line; cut faces hatched; fills flat (the part's
 *     colour) or shaded (lit from over the viewer's shoulder), painted back to front under the lines; explode trails as
 *     chain lines; the view's annotations and its parts list on top. A view's own camera (orthographic or perspective) is used.
 *   sheet({ paper, landscape, title, views: [{ art, caption }], margin }) → { w, h, items }   several views on one page, each
 *     scaled to fit its cell, with a caption under it and a border
 *   PAPERS (mm, portrait): a4, a3, letter, tabloid
 */
import { hiddenLines } from './hlr.js';
import { worldOf, instState } from './manual.js';
import { layout as annotLayout } from './annotate.js';
import { rows as partRows, tableItems } from './parts-list.js';
import { projector } from './camera.js';
import { PENS, DASHES, INK, place, fitText } from './display.js';
import { partColour } from './scene3d.js';
import { cutsOf, lensArt } from './look.js';
import { apply, boxOf, add, mul } from './m4.js';

export const PAPERS = Object.freeze({ a4: [210, 297], a3: [297, 420], letter: [215.9, 279.4], tabloid: [279.4, 431.8] });
const GHOST = '#9aa3ad', HATCH = '#1b1b1b';

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const toHex = (r, g, b) => '#' + [r, g, b].map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('');
const shadeOf = (h, k) => { const [r, g, b] = hex(h); return toHex(r * k, g * k, b * k); };

export function lineArt(m, meshes, view, { W = 180, H = 120, hidden = 'dashed', fills = 'auto', detail = false, annotations = true, table = true, trails = true, cuts = undefined, pens = PENS, labels = (k) => k, pieces = 600, xray = false, lens = true } = {}) {
  const aspect = W / H;
  if (cuts === undefined) cuts = cutsOf(view.look);
  // 'auto' follows the view's look: shaded → shaded fills, flat → flat fills, x-ray → every edge seen, else lines only
  const st = view.look?.style;
  if (fills === 'auto') fills = st === 'shaded' ? 'shaded' : st === 'flat' ? 'flat' : 'none';
  if (st === 'xray') xray = true;
  const r = hiddenLines(m, meshes, view, { aspect, cuts, hidden: hidden !== 'off', detail, pieces, wantTris: fills !== 'none', xray });
  const mm = (q) => [q[0] * H, q[1] * H];
  const items = [];
  const colourOf = (inst) => { const i = m.instances.find((x) => x.id === inst); const st = instState(view, inst); return st.color || partColour(i?.part || inst); };
  // fills, back to front, then the cut faces in white (hatch goes over them)
  if (fills !== 'none') {
    for (const tri of r.tris) {
      const c = colourOf(tri.inst);
      items.push({ t: 'path', pts: tri.pts.map(mm), closed: true, fill: fills === 'shaded' ? shadeOf(c, tri.shade) : c, stroke: fills === 'shaded' ? shadeOf(c, tri.shade) : c, width: 0.05 });
    }
  }
  for (const cap of r.caps) for (const l of cap.loops) items.push({ t: 'path', pts: l.map(mm), closed: true, fill: '#ffffff' });
  // explode trails: chain lines from where each moved part sits assembled to where the view draws it
  if (trails && (view.explode || Object.keys(view.moves || {}).length)) {
    const world = worldOf(m, view), P = projector(view.camera, aspect);
    for (const inst of m.instances) {
      if (instState(view, inst.id).hide) continue;
      const W1 = world.get(inst.id), W0 = inst.matrix;
      if (W1 === W0) continue;
      const mesh = meshes.get(inst.part);
      const b = boxOf(mesh?.positions);
      if (!b) continue;
      const c = mul(add(b.min, b.max), 0.5);
      const p0 = P.project(apply(W0, c)), p1 = P.project(apply(W1, c));
      if (Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) < 1e-4) continue;
      items.push({ t: 'path', pts: [mm(p0), mm(p1)], stroke: INK, width: pens.trail, dash: DASHES.trail });
    }
  }
  for (const h of r.hatch) items.push({ t: 'path', pts: [mm(h.a), mm(h.b)], stroke: HATCH, width: pens.detail });
  const ORDER = ['ghost', 'hidden', 'detail', 'edge', 'outline', 'cut'];
  for (const kind of ORDER) {
    const w = kind === 'ghost' ? pens.detail : kind === 'cut' ? pens.cut : pens[kind];
    // one polyline per chain of touching pieces: fewer items, and a dash pattern runs on round a curve instead of
    // starting again on every facet (short dashed facets would print solid)
    for (const pts of chain(r.lines.filter((l) => l.kind === kind))) items.push({ t: 'path', pts: pts.map(mm), stroke: kind === 'ghost' ? GHOST : INK, width: w, dash: kind === 'hidden' ? DASHES.hidden : undefined });
  }
  // annotations and the parts list
  if (annotations) items.push(...annotLayout(m, meshes, view, { aspect, H }));
  if (table && view.table) {
    const list = partRows(m, meshes, { view, scope: view.table.scope, collapse: view.table.collapse });
    const corner = (view.table.at[1] > 0.5 ? 't' : 'b') + (view.table.at[0] > 0.5 ? 'r' : 'l');
    items.push(...tableItems(list, view.table.columns, labels, { x: view.table.at[0] * W, y: view.table.at[1] * H, size: H * 0.022, maxW: W * 0.6, ref: 'table', corner }).items);
  }
  // the magnifier last, over everything
  if (lens && view.look?.magnifier) items.push(...lensArt(m, meshes, view, { W, H, lineArt, opts: { hidden, fills, detail, pens, pieces: Math.round(pieces / 2) } }));
  return { w: W, h: H, items, stats: r.stats };
}

/** Segments [{ a, b }] joined end to end into polylines (ends within 1e-7 of the picture's height count as one point). */
export function chain(segs) {
  const key = (p) => Math.round(p[0] * 1e7) + ',' + Math.round(p[1] * 1e7);
  const at = new Map();
  segs.forEach((s, i) => { for (const p of [s.a, s.b]) { const k = key(p); (at.get(k) || at.set(k, []).get(k)).push(i); } });
  const used = new Uint8Array(segs.length), out = [];
  const grow = (pts) => {
    for (;;) {
      const k = key(pts[pts.length - 1]);
      const j = (at.get(k) || []).find((x) => !used[x]);
      if (j === undefined) return;
      used[j] = 1;
      const s = segs[j];
      pts.push(key(s.a) === k ? s.b : s.a);
    }
  };
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = 1;
    const fwd = [segs[i].a, segs[i].b];
    grow(fwd);
    const back = [segs[i].a];
    grow(back);
    out.push(back.length > 1 ? back.slice(1).reverse().concat(fwd) : fwd);
  }
  return out;
}

/** Several views on one page: cells in a grid, each view scaled to fit, its caption under it; a border and a title. */
export function sheet({ paper = 'a4', landscape = true, title = '', views = [], margin = 10 } = {}) {
  const [pw, ph] = PAPERS[paper] || PAPERS.a4;
  const W = landscape ? Math.max(pw, ph) : Math.min(pw, ph), H = landscape ? Math.min(pw, ph) : Math.max(pw, ph);
  const items = [{ t: 'path', pts: [[margin, margin], [W - margin, margin], [W - margin, H - margin], [margin, H - margin]], closed: true, stroke: INK, width: PENS.outline }];
  const titleH = title ? 9 : 0;
  if (title) items.push({ t: 'text', x: margin + 3, y: H - margin - 6.5, text: fitText(title, 5, W - 2 * margin - 6), size: 5, anchor: 'start', bold: true, color: INK }, { t: 'path', pts: [[margin, H - margin - titleH], [W - margin, H - margin - titleH]], stroke: INK, width: PENS.thin });
  const n = Math.max(1, views.length), cols = n <= 1 ? 1 : n <= 2 ? (landscape ? 2 : 1) : n <= 4 ? 2 : 3, rowsN = Math.ceil(n / cols);
  const gx = margin + 4, gy = margin + 4, gw = W - 2 * margin - 8, gh = H - 2 * margin - 8 - titleH;
  const cw = gw / cols, chh = gh / rowsN, cap = 6;
  views.forEach((v, k) => {
    const cx = gx + (k % cols) * cw, cy = gy + (rowsN - 1 - Math.floor(k / cols)) * chh;
    const s = Math.min((cw - 4) / v.art.w, (chh - 4 - cap) / v.art.h);
    const dx = cx + (cw - v.art.w * s) / 2, dy = cy + cap + (chh - cap - v.art.h * s) / 2;
    items.push({ t: 'group', items: place(v.art.items, { s, dx, dy, keepPens: true }) });
    if (v.caption) items.push({ t: 'text', x: cx + cw / 2, y: cy + 1.5, text: fitText(v.caption, 3.5, cw - 4), size: 3.5, anchor: 'middle', color: INK });
  });
  return { w: W, h: H, items };
}
