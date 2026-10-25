/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/display.js — the one display list every Illustrate picture is written from (DOM-free): the live overlay in the
 * 3D view, SVG (svg.js) and PDF (pdf.js) all draw the same items, so what is seen is what is written.
 * Units are millimetres on the output, x right and y UP from the bottom-left corner (as a PDF page).
 *
 *   d = { w, h, items: [item] }
 *   item = { t: 'path', pts: [[x,y]…], closed?, stroke? '#rrggbb', width? (mm), dash? [mm…], fill? '#rrggbb', opacity?, ref? }
 *        | { t: 'circle', c: [x,y], r, stroke?, width?, fill?, ref? }
 *        | { t: 'text', x, y, text, size (mm, cap-ish height = the font size), anchor 'start'|'middle'|'end', bold?, color?, rot?
 *            (degrees), ref? }     (y is the baseline)
 *        | { t: 'image', x, y, w, h, src (data:image/png|jpeg;base64,…) }
 *        | { t: 'group', items, clip?: { circle: [x, y, r] } | { rect: [x, y, w, h] }, ref? }
 *   `ref` names what an item belongs to (an annotation id), so a click on the overlay finds it.
 *
 *   PENS: the line weights (mm) by role — outline (silhouettes and boundaries), edge (sharp edges), detail (smooth edges,
 *   threads), hidden (dashed), cut (section outlines), thin (leaders, dimension lines), trail (explode trails, chain).
 *   textWidth(s, size) → mm (Helvetica metrics; the PDF uses Helvetica, SVG asks for it)
 *   arrowHead(tip, from, size) → a filled path item pointing at tip
 */
import { advance } from '../font.js';

export const PENS = Object.freeze({ outline: 0.5, edge: 0.35, detail: 0.18, hidden: 0.18, cut: 0.5, thin: 0.18, trail: 0.18 });
export const DASHES = Object.freeze({ hidden: [2, 1], trail: [6, 1, 1, 1] });
export const INK = '#1b1b1b';

export const newDisplay = (w, h) => ({ w, h, items: [] });
export const textWidth = (s, size) => advance(String(s ?? '')) / 1000 * size;
/** Cut a string to fit a width (mm), ending it with an ellipsis when cut. */
export function fitText(s, size, w) {
  s = String(s ?? '');
  if (textWidth(s, size) <= w + 1e-6) return s;
  while (s.length > 1 && textWidth(s + '…', size) > w) s = s.slice(0, -1);
  return s + '…';
}
export function arrowHead(tip, from, size, colour = INK) {
  const dx = tip[0] - from[0], dy = tip[1] - from[1], l = Math.hypot(dx, dy) || 1;
  const ux = dx / l, uy = dy / l, w = size * 0.32;
  return { t: 'path', pts: [tip, [tip[0] - ux * size - uy * w, tip[1] - uy * size + ux * w], [tip[0] - ux * size + uy * w, tip[1] - uy * size - ux * w]], closed: true, fill: colour };
}
export const circlePts = (c, r, n = 48, a0 = 0, a1 = 2 * Math.PI) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]; });

/** Every item's bounds (no text widths beyond the metrics; groups by their clip when they have one). */
export function bounds(items) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const add = (x, y) => { if (x < x0) x0 = x; if (y < y0) y0 = y; if (x > x1) x1 = x; if (y > y1) y1 = y; };
  for (const it of items) {
    if (it.t === 'path') for (const p of it.pts) add(p[0], p[1]);
    else if (it.t === 'circle') { add(it.c[0] - it.r, it.c[1] - it.r); add(it.c[0] + it.r, it.c[1] + it.r); }
    else if (it.t === 'text') { const w = textWidth(it.text, it.size), x = it.anchor === 'middle' ? it.x - w / 2 : it.anchor === 'end' ? it.x - w : it.x; add(x, it.y - it.size * 0.25); add(x + w, it.y + it.size); }
    else if (it.t === 'image') { add(it.x, it.y); add(it.x + it.w, it.y + it.h); }
    else if (it.t === 'group') {
      if (it.clip?.circle) { const [cx, cy, r] = it.clip.circle; add(cx - r, cy - r); add(cx + r, cy + r); }
      else if (it.clip?.rect) { const [x, y, w, h] = it.clip.rect; add(x, y); add(x + w, y + h); }
      else { const b = bounds(it.items); if (b) { add(b.x0, b.y0); add(b.x1, b.y1); } }
    }
  }
  return x0 <= x1 ? { x0, y0, x1, y1 } : null;
}
/** Move and scale items (x' = x·s + dx, y' = y·s + dy); widths, sizes and dashes scale too unless keepPens. */
export function place(items, { s = 1, dx = 0, dy = 0, keepPens = false } = {}) {
  const P = (p) => [p[0] * s + dx, p[1] * s + dy], k = keepPens ? 1 : s;
  return items.map((it) => {
    if (it.t === 'path') return { ...it, pts: it.pts.map(P), width: it.width !== undefined ? it.width * k : it.width, dash: it.dash ? it.dash.map((d) => d * k) : it.dash };
    if (it.t === 'circle') return { ...it, c: P(it.c), r: it.r * s, width: it.width !== undefined ? it.width * k : it.width };
    if (it.t === 'text') { const [x, y] = P([it.x, it.y]); return { ...it, x, y, size: it.size * s }; }
    if (it.t === 'image') { const [x, y] = P([it.x, it.y]); return { ...it, x, y, w: it.w * s, h: it.h * s }; }
    if (it.t === 'group') {
      const clip = it.clip?.circle ? { circle: [...P(it.clip.circle), it.clip.circle[2] * s] } : it.clip?.rect ? { rect: [...P(it.clip.rect), it.clip.rect[2] * s, it.clip.rect[3] * s] } : undefined;
      return { ...it, items: place(it.items, { s, dx, dy, keepPens }), clip };
    }
    return it;
  });
}
