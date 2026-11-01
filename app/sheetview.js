/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sheetview.js — the drawing sheet on screen: drawing.js's display list (millimetres, y up) drawn as
 * SVG over the stage, with zoom (wheel, +/−, two-finger pinch), pan (middle or right drag, arrow keys with Shift, two fingers,
 * or one finger dragged on empty paper: 0.4 S.8) and
 * picking: clicks report sheet millimetres; notes (GD&T, datums, finish) can be dragged.
 * Text from the part (its name, note text) reaches the page only through textContent.
 *
 *   const sv = new SheetView(host, { onClick(x, y, e), onNoteDown(id, e), onNoteDrag(id, dx, dy), onNoteDrop(id, dx, dy) })
 *   sv.show(sheet, { selected })  ·  sv.fit()  ·  sv.toSheet(clientX, clientY)
 */
import { t } from './i18n.js';

const NS = 'http://www.w3.org/2000/svg';
const mk = (tag, attrs = {}) => { const e = document.createElementNS(NS, tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v)); return e; };
const n = (v) => (Math.round(v * 1000) / 1000).toString();

export class SheetView {
  constructor(host, cb = {}) {
    this.host = host;
    this.cb = cb;
    this.svg = mk('svg', { class: 'pc-sheet-svg', role: 'img', 'aria-label': t('ui.sheetview.aria') });
    this.svg.setAttribute('tabindex', '0');
    this.root = mk('g');
    this.svg.append(this.root);
    host.append(this.svg);
    this.sheet = null;
    this.view = { x: 0, y: 0, k: 1 };   // screen = (sheet − view) · k
    this.bind();
    new ResizeObserver(() => { if (this.sheet && !this.userMoved) this.fit(); }).observe(host);
  }

  get size() { const r = this.svg.getBoundingClientRect(); return [Math.max(1, r.width), Math.max(1, r.height)]; }

  fit() {
    if (!this.sheet) return;
    const [w, h] = this.size;
    const k = Math.min(w / (this.sheet.w + 10), h / (this.sheet.h + 10));
    this.view = { k, x: this.sheet.w / 2 - w / 2 / k, y: this.sheet.h / 2 + h / 2 / k };
    this.userMoved = false;
    this.apply();
  }

  apply() {
    const { k, x, y } = this.view;
    // sheet y is up: screen = ((sx − x)·k, (y − sy)·k)
    this.root.setAttribute('transform', `matrix(${n(k)} 0 0 ${n(-k)} ${n(-x * k)} ${n(y * k)})`);
  }

  toSheet(cx, cy) {
    const r = this.svg.getBoundingClientRect();
    return [this.view.x + (cx - r.left) / this.view.k, this.view.y - (cy - r.top) / this.view.k];
  }

  zoomAt(f, cx, cy) {
    const [sx, sy] = this.toSheet(cx, cy);
    const r = this.svg.getBoundingClientRect();
    this.view.k = Math.max(0.2, Math.min(this.view.k * f, 80));
    this.view.x = sx - (cx - r.left) / this.view.k;
    this.view.y = sy + (cy - r.top) / this.view.k;
    this.userMoved = true;
    this.apply();
  }
  panBy(dxPx, dyPx) { this.view.x -= dxPx / this.view.k; this.view.y += dyPx / this.view.k; this.userMoved = true; this.apply(); }

  show(sheet, { selected = null, hover = null } = {}) {
    const first = !this.sheet;
    this.sheet = sheet;
    const g = mk('g');
    g.append(mk('rect', { x: 0, y: 0, width: sheet.w, height: sheet.h, class: 'pc-sheet-paper' }));
    for (const s of sheet.strokes) {
      if (!s.segs.length) continue;
      let d = '';
      for (const q of s.segs) d += `M${n(q[0])} ${n(q[1])}L${n(q[2])} ${n(q[3])}`;
      const p = mk('path', { d, class: 'pc-sheet-ink', 'stroke-width': Math.max(s.width, 0.13) });
      if (s.dash) p.setAttribute('stroke-dasharray', s.dash.join(' '));
      g.append(p);
    }
    if (sheet.fills.length) {
      let d = '';
      for (const f of sheet.fills) d += f.pts.map((p, i) => (i ? 'L' : 'M') + n(p[0]) + ' ' + n(p[1])).join('') + 'Z';
      g.append(mk('path', { d, class: 'pc-sheet-fill' }));
    }
    for (const t of sheet.texts) {
      // texts are drawn upright: flip each one back inside the y-up group
      const el = mk('text', { class: 'pc-sheet-text' + (t.bold ? ' is-bold' : ''), 'font-size': t.size, 'text-anchor': t.anchor === 'middle' ? 'middle' : t.anchor === 'end' ? 'end' : 'start', transform: `translate(${n(t.x)} ${n(t.y)}) scale(1 -1)${t.rot ? ' rotate(' + n(-t.rot) + ')' : ''}` });
      el.textContent = t.text;
      g.append(el);
    }
    for (const nt of sheet.notes || []) {
      if (!nt.box) continue;
      const [x0, y0, x1, y1] = nt.box;
      const r = mk('rect', { x: x0 - 1, y: y0 - 1, width: x1 - x0 + 2, height: y1 - y0 + 2, class: 'pc-sheet-note' + (nt.id === selected ? ' is-selected' : nt.id === hover ? ' is-hover' : ''), 'data-note': nt.id });
      g.append(r);
    }
    this.root.replaceChildren(g);
    if (first || !this.userMoved) this.fit(); else this.apply();
  }

  noteAt(cx, cy) {
    const [x, y] = this.toSheet(cx, cy);
    const pad = 1.5;
    for (const nt of [...(this.sheet?.notes || [])].reverse()) {
      if (!nt.box) continue;
      const [x0, y0, x1, y1] = nt.box;
      if (x >= x0 - pad && x <= x1 + pad && y >= y0 - pad && y <= y1 + pad) return nt.id;
    }
    return null;
  }

  bind() {
    const s = this.svg;
    let drag = null;
    const fingers = new Map();   // touch pointers: id → [clientX, clientY]
    let pinch = null;            // { d, m } while two fingers are down
    s.addEventListener('wheel', (e) => { e.preventDefault(); if (!e.ctrlKey && this.cb.isPad?.(e)) { this.panBy(-e.deltaX * (e.deltaMode === 1 ? 16 : 1), -e.deltaY * (e.deltaMode === 1 ? 16 : 1)); return; } this.zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY); }, { passive: false });
    s.addEventListener('contextmenu', (e) => e.preventDefault());
    s.addEventListener('pointerdown', (e) => {
      s.focus({ preventScroll: true });
      if (e.pointerType === 'touch') {
        fingers.set(e.pointerId, [e.clientX, e.clientY]);
        s.setPointerCapture?.(e.pointerId);
        if (fingers.size === 2) {
          // a second finger: whatever the first began stops (a note being dragged goes back), and the two pinch and pan
          if (drag?.note && drag.moved) this.cb.onNoteDrag?.(drag.note, 0, 0);
          drag = null;
          const [a, b] = [...fingers.values()];
          pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), m: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
          return;
        }
        if (fingers.size > 2) return;
      }
      if (e.button === 1 || e.button === 2) { drag = { pan: true, x: e.clientX, y: e.clientY }; s.setPointerCapture(e.pointerId); return; }
      if (e.button !== 0) return;
      const id = this.noteAt(e.clientX, e.clientY);
      drag = { note: id, x: e.clientX, y: e.clientY, moved: false };
      if (id) { this.cb.onNoteDown?.(id, e); s.setPointerCapture(e.pointerId); }
    });
    s.addEventListener('pointermove', (e) => {
      if (fingers.has(e.pointerId)) fingers.set(e.pointerId, [e.clientX, e.clientY]);
      if (pinch && fingers.size === 2) {
        const [a, b] = [...fingers.values()];
        const d = Math.hypot(a[0] - b[0], a[1] - b[1]), m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
        this.panBy(m[0] - pinch.m[0], m[1] - pinch.m[1]);
        if (pinch.d > 0 && d > 0) this.zoomAt(d / pinch.d, m[0], m[1]);
        pinch = { d, m };
        return;
      }
      if (drag && !drag.note && !drag.pan && e.pointerType === 'touch' && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 8) {
        drag = { pan: true, x: drag.x, y: drag.y };   // one finger on empty paper: pan
      }
      if (!drag) { this.cb.onHover?.(this.noteAt(e.clientX, e.clientY)); return; }
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (drag.pan) { this.panBy(dx, dy); drag.x = e.clientX; drag.y = e.clientY; return; }
      if (drag.note && (drag.moved || Math.hypot(dx, dy) > 3)) { drag.moved = true; this.cb.onNoteDrag?.(drag.note, dx / this.view.k, -dy / this.view.k); }
    });
    const lift = (e) => { fingers.delete(e.pointerId); if (fingers.size < 2 && pinch) { pinch = null; drag = null; return true; } return false; };
    s.addEventListener('pointercancel', (e) => { lift(e); drag = null; });
    s.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch' && (lift(e) || fingers.size)) return;   // the end of a pinch places nothing
      const d = drag; drag = null;
      if (!d || d.pan) return;
      if (d.note && d.moved) { this.cb.onNoteDrop?.(d.note, (e.clientX - d.x) / this.view.k, -(e.clientY - d.y) / this.view.k); return; }
      if (!d.note) { const [x, y] = this.toSheet(e.clientX, e.clientY); this.cb.onClick?.(x, y, e); }
    });
    s.addEventListener('keydown', (e) => {
      if (e.key === '+' || e.key === '=') { e.preventDefault(); const r = s.getBoundingClientRect(); this.zoomAt(1.25, r.left + r.width / 2, r.top + r.height / 2); }
      else if (e.key === '-') { e.preventDefault(); const r = s.getBoundingClientRect(); this.zoomAt(1 / 1.25, r.left + r.width / 2, r.top + r.height / 2); }
      else if (e.shiftKey && e.key.startsWith('Arrow')) { e.preventDefault(); this.panBy(e.key === 'ArrowLeft' ? 40 : e.key === 'ArrowRight' ? -40 : 0, e.key === 'ArrowUp' ? 40 : e.key === 'ArrowDown' ? -40 : 0); }
    });
  }
}
