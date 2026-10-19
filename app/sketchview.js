/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketchview.js — the 2D sketch editor drawn on a canvas over the 3D view while a sketch is open.
 * Sketch coordinates map to the stage as  x = w/2 + (u − cx)·s,  y = h/2 − (v − cy)·s  — the same
 * mapping view3d.js gives its orthographic camera, so the model behind lines up.
 *
 * Tools: select (click, Shift/Ctrl+click adds, drag a point or curve — the solver keeps every
 * relation while it moves —, drag on empty space for a window, drag a dimension's label),
 * line (click, click, … chains; Esc, Enter, right click or double click ends), centerline,
 * rect, circle (centre, radius), arc (centre, start, end — follows the way the pointer turns),
 * point, dimension (click one or two items, then click where the dimension goes; type the value),
 * fillet (click a corner, type the radius), paste (startPaste: the copied geometry follows the pointer, snapping
 * to points; a click puts it down as one undo step, Esc cancels).
 * spline (fit points) / cspline (control points): click points; Enter, Esc, right click or double click ends; a click
 * on the first point closes it. trim (click the piece to remove; it shows red under the pointer), extend (click near
 * the end), offset (click a curve — its chain highlights —, click the side, type the distance; B: both sides),
 * mirror (selection, then the line to mirror about), polygon (centre, corner, sides), slot (centre, centre, width),
 * lpattern (selection, two clicks for the step, copies), cpattern (selection, centre, copies), project (click a model
 * edge: host.pickEdge(clientX, clientY) → the exact kernel's edge record, host.frame() the sketch plane). The geometry work
 * is sketch-tools.js; each tool is one undo step and says how many relations it dropped.
 * `autoRelations` (Settings › PartCraft, on by default): off = drawing adds no coincident / horizontal / vertical
 * relations on its own (the pointer still snaps).
 * `dimDraw` (Settings › PartCraft "Dimension as you draw", on by default; 0.6 PU.1): while a line, rectangle, circle or arc is
 * being drawn its live size shows in a box beside the pointer; typing a number fills that box (Tab: the next one — a line's
 * angle, a rectangle's height, an arc's angle after its radius), Enter draws the shape at the typed sizes and each typed size
 * becomes a driving dimension in the same undo step; leaving a box keeps its value while the pointer gives the rest. `isPad(e)` from the host: a trackpad swipe pans, a pinch zooms.
 * Snapping: end points and the origin (→ coincident), onto curves (→ point on curve), and
 * nearly horizontal / vertical lines (→ horizontal / vertical relation).
 * Double click a dimension to change it. Wheel zooms at the pointer; middle or right drag pans;
 * two fingers pinch and pan.
 *
 * The host owns the data: sketch(), commit(label, fn), dragStart(), dragSolve(pins), dragEnd(),
 * info() (last solve: determined, conflicts, redundant), status(msg), changed().
 */
import * as S from './sketch.js';
import { fmt } from './vec.js';
import { pasteSketch } from './clipboard.js';
import * as SP from './sketch-spline.js';
import * as TL from './sketch-tools.js';
import { panButton, wheelFactor } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and pan buttons
import { pointOn } from './sketch-intersect.js';
import { t } from './i18n.js';

const PICK = 7, SNAP_PT = 10, SNAP_CURVE = 7;
/** A finger held this long without moving (ms, px) is a long press (0.4 S.8): right-click's or Shift+click's job. */
export const LONG_PRESS_MS = 550, LONG_PRESS_SLOP = 10;
/** Pick and snap distances grow this much for a finger (0.4 S.8): a fingertip covers ~7 mm where a pointer covers a pixel. */
export const TOUCH_REACH = 2.2;
const PICK_TOOLS = new Set(['trim', 'extend', 'offset', 'mirror']);
const TOOL_HINTS = {
  spline: () => t('ui.sketch.hint.spline'),
  cspline: () => t('ui.sketch.hint.cspline'),
  trim: () => t('ui.sketch.hint.trim'),
  extend: () => t('ui.sketch.hint.extend'),
  offset: (ed) => (ed.toolSel.length > 1 ? t('ui.sketch.hint.offset_selected') : t('ui.sketch.hint.offset')),
  mirror: (ed) => (ed.toolSel.length ? t('ui.sketch.hint.mirror_axis') : t('ui.sketch.hint.mirror')),
  project: () => t('ui.sketch.hint.project'),
  polygon: () => t('ui.sketch.hint.polygon'),
  slot: () => t('ui.sketch.hint.slot'),
  lpattern: (ed) => (ed.toolSel.length ? t('ui.sketch.hint.lpattern') : t('ui.sketch.hint.lpattern_select')),
  cpattern: (ed) => (ed.toolSel.length ? t('ui.sketch.hint.cpattern') : t('ui.sketch.hint.cpattern_select')),
};

export class SketchEditor {
  constructor(canvas, input, host) {
    this.canvas = canvas;
    this.input = input;
    this.host = host;
    this.ctx = canvas.getContext('2d');
    this.view = { cx: 0, cy: 0, s: 2 };
    this.reach = 1;   // × the pick and snap distances: TOUCH_REACH after a finger, 1 after a mouse or pen
    this.tool = 'select';
    this.sel = new Set();
    this.hover = null;
    this.step = null;           // tool in progress
    this.cursor = null;         // sketch coords
    this.snapAt = null;
    this.dimBoxes = [];
    this.glyphBoxes = [];
    this.active = false;
    this.pointers = new Map();
    this.autoRelations = true;
    this.dimDraw = true;        // 0.6 PU.1: type sizes while drawing (Settings › PartCraft)
    this.pasteClip = null;      // { clip, label } while the paste tool runs
    this.bind();
  }

  // ---------------------------------------------------------------- geometry helpers
  get sk() { return this.host.sketch(); }
  size() { const r = this.canvas.getBoundingClientRect(); return { w: r.width, h: r.height, r }; }
  toScreen([u, v]) { const { w, h } = this.size(); return [w / 2 + (u - this.view.cx) * this.view.s, h / 2 - (v - this.view.cy) * this.view.s]; }
  toSketch(x, y) { const { w, h } = this.size(); return [this.view.cx + (x - w / 2) / this.view.s, this.view.cy - (y - h / 2) / this.view.s]; }
  local(e) { const r = this.canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }

  setView(v) { this.view = { ...v }; this.host.viewChanged(this.view); this.draw(); }

  fit() {
    const b = S.bounds(this.sk);
    const { w, h } = this.size();
    if (!b) { this.setView({ cx: 0, cy: 0, s: this.view.s }); return; }
    let x0 = Math.min(b.x0, 0), y0 = Math.min(b.y0, 0), x1 = Math.max(b.x1, 0), y1 = Math.max(b.y1, 0);
    for (const c of this.sk.constraints) {
      const g = S.CONSTRAINTS[c.type].dim ? dimGeometry(this.sk, c) : null;
      if (g && g.at) { x0 = Math.min(x0, g.at[0]); y0 = Math.min(y0, g.at[1]); x1 = Math.max(x1, g.at[0]); y1 = Math.max(y1, g.at[1]); }
    }
    const s = Math.min((w - 120) / Math.max(x1 - x0, 1e-6), (h - 120) / Math.max(y1 - y0, 1e-6));
    this.setView({ cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, s: Math.max(1e-4, Math.min(s, 1e5)) });
  }

  setTool(tool) {
    if (tool !== 'paste') this.pasteClip = null;
    // mirror / patterns work on what was selected when they were chosen; offset keeps it as the chain's limit
    this.toolSel = ['mirror', 'lpattern', 'cpattern', 'offset'].includes(tool) ? [...this.sel].filter((id) => id !== S.ORIGIN && S.byId(this.sk, id)) : [];
    this.tool = tool;
    this.step = null;
    this.hideInput();
    if (tool !== 'select') this.sel.clear();
    this.canvas.dataset.tool = tool;
    if (tool === 'mirror' && this.toolSel.length) this.step = { axis: true };
    this.host.toolChanged?.(tool);
    this.host.changed();
    const hint = TOOL_HINTS[tool];
    if (hint) this.host.status(hint(this));
    this.draw();
  }

  /** Run a sketch-tools.js edit as one undo step; report what it dropped. */
  runTool(label, fn, done) {
    let r = null;
    try { this.host.commit(label, (sk) => { r = fn(sk); }); } catch (err) { this.host.status(err.message); return null; }
    const extra = r && r.dropped ? ' ' + t('ui.sketch.dropped', { n: r.dropped }) : '';
    this.host.status((done ? done(r) : t('ui.sketch.done', { what: label })) + extra);
    return r;
  }

  /** Paste tool: the clip (clipboard.js, kind 'sketch') follows the pointer by its middle; a click puts it down. */
  startPaste(clip, label = 'Paste') {
    this.setTool('paste');
    this.pasteClip = { clip, label };
    this.host.status(t('ui.sketch.paste.where'));
    this.draw();
  }
  /** A point id when relations are made automatically, else just the position. */
  R(sn) { return this.autoRelations && sn.ref ? sn.ref : sn.xy; }

  // ---------------------------------------------------------------- hit testing (screen px)
  hitAt(x, y, { points = true, curves = true, labels = true } = {}) {
    if (labels) {
      for (const b of this.dimBoxes) if (x >= b.x - 2 && x <= b.x + b.w + 2 && y >= b.y - 2 && y <= b.y + b.h + 2) return { kind: 'constraint', id: b.id };
      for (const b of this.glyphBoxes) if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) return { kind: 'constraint', id: b.id };
    }
    const sk = this.sk;
    let best = null;
    if (points) {
      for (const id of [S.ORIGIN, ...sk.entities.filter((e) => e.type === 'point').map((e) => e.id)]) {
        const [px, py] = this.toScreen(S.pointXY(sk, id));
        const d = Math.hypot(px - x, py - y);
        if (d <= PICK * this.reach + 1 && (!best || d < best.d)) best = { kind: 'entity', id, d };
      }
      if (best) return best;
    }
    if (curves) {
      const p = this.toSketch(x, y);
      for (const e of sk.entities) {
        if (e.type === 'point') continue;
        const d = curveDist(sk, e, p) * this.view.s;
        if (d <= PICK * this.reach && (!best || d < best.d)) best = { kind: 'entity', id: e.id, d };
      }
    }
    return best;
  }

  /** Snap a screen point for drawing: end points / origin, then curves. */
  snap(x, y, exclude = new Set()) {
    const sk = this.sk;
    let best = null;
    for (const id of [S.ORIGIN, ...sk.entities.filter((e) => e.type === 'point').map((e) => e.id)]) {
      if (exclude.has(id)) continue;
      const q = S.pointXY(sk, id);
      const [px, py] = this.toScreen(q);
      const d = Math.hypot(px - x, py - y);
      if (d <= SNAP_PT * this.reach && (!best || d < best.d)) best = { xy: q, ref: id, d };
    }
    if (best) return best;
    const p = this.toSketch(x, y);
    for (const e of sk.entities) {
      if (e.type === 'point' || exclude.has(e.id)) continue;
      const d = curveDist(sk, e, p) * this.view.s;
      if (d <= SNAP_CURVE * this.reach && (!best || d < best.d)) best = { xy: project(sk, e, p), on: e.id, d };
    }
    return best || { xy: p };
  }

  // ---------------------------------------------------------------- events
  bind() {
    const c = this.canvas;
    c.addEventListener('contextmenu', (e) => { if (this.active) e.preventDefault(); });
    c.addEventListener('wheel', (e) => {
      if (!this.active) return;
      e.preventDefault();
      const [x, y] = this.local(e);
      if (!e.ctrlKey && this.host.isPad?.(e)) {
        // trackpad: two fingers pan the sketch (a pinch arrives with ctrlKey and zooms)
        const k = e.deltaMode === 1 ? 16 : 1, v = this.view;
        this.setView({ s: v.s, cx: v.cx + e.deltaX * k / v.s, cy: v.cy - e.deltaY * k / v.s });
        return;
      }
      this.zoomAt(x, y, Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : e.ctrlKey ? 0.01 : 0.0015) * (e.ctrlKey ? 1 : wheelFactor())));   // IP.3: the style's wheel
    }, { passive: false });
    c.addEventListener('pointerdown', (e) => this.down(e));
    c.addEventListener('pointermove', (e) => this.move(e));
    c.addEventListener('pointerup', (e) => this.up(e));
    c.addEventListener('pointercancel', (e) => { this.pointers.delete(e.pointerId); this.drag = null; this.pan = null; this.cancelLongPress(); this.longPress = null; });
    c.addEventListener('dblclick', (e) => this.dbl(e));
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); this.inputDone(true); }
      else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); this.inputDone(false); }
      else if (e.key === 'Tab' && this.inputTab) { e.preventDefault(); e.stopPropagation(); this.inputTab(e.shiftKey); }
    });
    this.input.addEventListener('blur', () => { if (this.inputCb && !this.inputClosing) { if (this.inputBlur) this.inputBlur(); else this.inputDone(true); } });
  }

  zoomAt(x, y, k) {
    const before = this.toSketch(x, y);
    const s = Math.max(1e-4, Math.min(this.view.s * k, 1e5));
    const { w, h } = this.size();
    this.setView({ s, cx: before[0] - (x - w / 2) / s, cy: before[1] + (y - h / 2) / s });
  }

  down(e) {
    if (!this.active) return;
    this.reach = e.pointerType === 'touch' ? TOUCH_REACH : 1;
    const [x, y] = this.local(e);
    this.pointers.set(e.pointerId, [x, y]);
    this.canvas.setPointerCapture?.(e.pointerId);
    if (this.pointers.size === 2) {
      // pinch / two-finger pan: drop whatever the first finger began
      this.cancelLongPress();
      this.drag = null; this.box = null;
      const [a, b] = [...this.pointers.values()];
      this.pinch = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), m: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] };
      return;
    }
    if (e.button === 1 || e.button === 2) {
      if (e.button === 2 && this.tool !== 'select' && this.step) { this.finishStep(); return; }
      if (!panButton(e.button)) return;   // IP.3: a button the style does not pan with
      this.pan = { x, y, view: { ...this.view } };
      return;
    }
    if (e.button !== 0) return;
    this.downAt = [x, y];
    this.longPress = null;
    if (e.pointerType === 'touch') {
      const at = [x, y];
      this.longPress = { at, fired: false, timer: setTimeout(() => this.fireLongPress(at), LONG_PRESS_MS) };
    }
    if (this.tool === 'select') this.selectDown(x, y, e);
  }

  /** A finger held still: in a drawing tool with points placed, finish (as a right-click does); with Select, add the item under
   *  it to the selection or take it out (as Shift+click does). */
  fireLongPress(at) {
    const lp = this.longPress;
    if (!lp || lp.at !== at || !this.active || this.pointers.size !== 1) return;
    lp.fired = true;
    if (this.tool !== 'select') {
      if (!this.step) { lp.fired = false; return; }
      this.downAt = null;
      this.finishStep();
    } else {
      const h = this.hitAt(at[0], at[1]);
      this.drag = null; this.box = null; this.pressHit = null;
      if (h && h.kind === 'entity' && h.id !== S.ORIGIN) {
        if (this.sel.has(h.id)) this.sel.delete(h.id); else this.sel.add(h.id);
        this.host.changed();
      } else if (h) { this.sel.add(h.id); this.host.changed(); }
      this.draw();
    }
    try { navigator.vibrate?.(12); } catch { /* not allowed */ }
  }
  cancelLongPress() { if (this.longPress) { clearTimeout(this.longPress.timer); if (!this.longPress.fired) this.longPress = null; } }

  move(e) {
    if (!this.active) return;
    if (e.pointerType) this.reach = e.pointerType === 'touch' ? TOUCH_REACH : 1;
    const [x, y] = this.local(e);
    if (this.pointers.has(e.pointerId)) this.pointers.set(e.pointerId, [x, y]);
    if (this.longPress && !this.longPress.fired && Math.hypot(x - this.longPress.at[0], y - this.longPress.at[1]) > LONG_PRESS_SLOP) this.cancelLongPress();
    if (this.pinch && this.pointers.size === 2) {
      const [a, b] = [...this.pointers.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]), m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      const { w, h } = this.size();
      const k = d / (this.pinch.d || d);
      const anchor = this.toSketch(this.pinch.m[0], this.pinch.m[1]);
      const s = Math.max(1e-4, Math.min(this.view.s * k, 1e5));
      this.setView({ s, cx: anchor[0] - (m[0] - w / 2) / s, cy: anchor[1] + (m[1] - h / 2) / s });
      this.pinch = { d, m };
      return;
    }
    if (this.pan) {
      const v = this.pan.view;
      this.setView({ s: v.s, cx: v.cx - (x - this.pan.x) / v.s, cy: v.cy + (y - this.pan.y) / v.s });
      return;
    }
    this.cursor = this.toSketch(x, y);
    this.host.coords(this.cursor);
    if (this.tool === 'select') { this.selectMove(x, y, e); return; }
    const picking = PICK_TOOLS.has(this.tool) && !(this.tool === 'offset' && this.step);
    this.snapAt = this.tool === 'dimension' || picking ? null : this.snap(x, y, this.step?.exclude);
    this.hover = this.tool === 'dimension' || this.tool === 'fillet' ? this.hitAt(x, y, { labels: false, curves: this.tool === 'dimension' })
      : picking ? this.hitAt(x, y, { labels: false, points: false }) : null;
    if (this.step && this.tool === 'arc' && this.step.c && this.step.s) {
      const c = this.step.c.xy, s0 = this.step.lastAng ?? Math.atan2(this.step.s.xy[1] - c[1], this.step.s.xy[0] - c[0]);
      const a = Math.atan2(this.cursor[1] - c[1], this.cursor[0] - c[0]);
      let d = a - s0; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
      this.step.turn = (this.step.turn || 0) + d; this.step.lastAng = a;
    }
    this.draw();
  }

  up(e) {
    if (!this.active) return;
    const [x, y] = this.local(e);
    const wasPinch = !!this.pinch;
    this.pointers.delete(e.pointerId);
    const lp = this.longPress;
    this.cancelLongPress(); this.longPress = null;
    if (lp && lp.fired) { this.downAt = null; this.drag = null; this.box = null; this.pressHit = null; return; }
    if (this.pointers.size < 2) this.pinch = null;
    if (wasPinch) { this.downAt = null; return; }
    if (this.pan) { this.pan = null; return; }
    if (e.button !== 0) return;
    if (this.tool === 'select') { this.selectUp(x, y, e); return; }
    if (!this.downAt) return;
    this.downAt = null;
    this.click(x, y, e);
  }

  dbl(e) {
    if (!this.active) return;
    const [x, y] = this.local(e);
    if ((this.tool === 'line' || this.tool === 'spline' || this.tool === 'cspline') && this.step) { this.finishStep(); return; }
    const h = this.hitAt(x, y, { points: false, curves: false });
    if (h && h.kind === 'constraint') {
      const c = this.sk.constraints.find((k) => k.id === h.id);
      if (c && S.CONSTRAINTS[c.type].dim) this.editDimension(c.id);
    }
  }

  key(e) {
    if (!this.active) return false;
    if (e.ctrlKey || e.metaKey || e.altKey) return false;
    const k = e.key;
    if (k === 'Escape') {
      if (this.inputCb) { this.inputDone(false); return true; }
      if (this.step && ['offset', 'mirror', 'polygon', 'slot', 'lpattern', 'cpattern'].includes(this.tool)) { this.step = null; this.host.status(''); this.draw(); }
      else if (this.step) { this.finishStep(); } else if (this.tool !== 'select') this.setTool('select'); else if (this.sel.size) { this.sel.clear(); this.host.changed(); this.draw(); } else return false;
      return true;
    }
    if (k === 'Enter' && (this.step || this.tool === 'mirror')) { this.finishStep(); return true; }
    if ((k === 'Delete' || k === 'Backspace') && this.sel.size) { this.deleteSelection(); return true; }
    if (this.tool === 'offset' && k.toLowerCase() === 'b') { this.offsetBoth = !this.offsetBoth; this.host.status(this.offsetBoth ? t('ui.sketch.offset.both_on') : t('ui.sketch.offset.both_off')); this.draw(); return true; }
    if (/^[0-9.]$/.test(k) && this.ddStart(k)) return true;   // 0.6 PU.1: a size typed while drawing
    const tools = { l: 'line', n: 'centerline', r: 'rect', c: 'circle', a: 'arc', p: 'point', d: 'dimension', f: 'fillet', s: 'select', b: 'spline', t: 'trim', e: 'extend', o: 'offset', m: 'mirror' };
    if (tools[k.toLowerCase()] && !e.shiftKey) { this.setTool(tools[k.toLowerCase()]); return true; }
    if (k.toLowerCase() === 'q') { this.toggleConstruction(); return true; }
    return false;
  }

  // ---------------------------------------------------------------- select tool
  selectDown(x, y, e) {
    const h = this.hitAt(x, y);
    this.drag = null;
    if (h && h.kind === 'constraint') {
      const c = this.sk.constraints.find((k) => k.id === h.id);
      if (c && S.CONSTRAINTS[c.type].dim && this.dimBoxes.some((b) => b.id === c.id)) this.drag = { kind: 'label', id: c.id, start: [x, y], moved: false };
      this.pressHit = h;
      return;
    }
    this.pressHit = h;
    if (h && h.kind === 'entity' && h.id !== S.ORIGIN) {
      const sk = this.sk;
      const e0 = S.byId(sk, h.id);
      const at = this.toSketch(x, y);
      const pins = new Map();
      if (e0.type === 'point') pins.set(e0.id, [e0.x, e0.y]);
      else if (e0.type === 'circle' && this.nearCircleEdge(e0, at)) this.drag = { kind: 'radius', id: e0.id, start: [x, y], moved: false };
      else for (const p of S.pointsOf(e0)) pins.set(p, S.pointXY(sk, p));
      if (!this.drag) this.drag = { kind: 'geom', id: h.id, pins, from: at, start: [x, y], moved: false };
    } else if (!h) {
      this.box = { a: [x, y], b: [x, y], add: e.shiftKey || e.ctrlKey || e.metaKey || !!this.host.addMode?.() };
    }
  }

  nearCircleEdge(c, p) { const ce = S.pointXY(this.sk, c.c); return Math.abs(Math.hypot(p[0] - ce[0], p[1] - ce[1]) - c.r) * this.view.s < PICK * this.reach; }

  selectMove(x, y) {
    if (this.drag) {
      const d = this.drag;
      if (!d.moved && Math.hypot(x - d.start[0], y - d.start[1]) < 3) return;
      if (!d.moved) { d.moved = true; this.host.dragStart(d.kind === 'label' ? t('ui.sketch.op.move_dimension') : t('ui.sketch.op.drag')); }
      const p = this.toSketch(x, y);
      if (d.kind === 'label') { const c = this.sk.constraints.find((k) => k.id === d.id); if (c) setLabel(this.sk, c, p); this.draw(); return; }
      if (d.kind === 'radius') {
        const c = S.byId(this.sk, d.id), ce = S.pointXY(this.sk, c.c);
        this.host.dragSolve(null, new Map([[d.id, Math.hypot(p[0] - ce[0], p[1] - ce[1])]]));
        this.draw();
        return;
      }
      const dx = p[0] - d.from[0], dy = p[1] - d.from[1];
      const pins = new Map([...d.pins].map(([id, q]) => [id, [q[0] + dx, q[1] + dy]]));
      this.host.dragSolve(pins, null);
      this.draw();
      return;
    }
    if (this.box) { this.box.b = [x, y]; this.draw(); return; }
    const h = this.hitAt(x, y);
    const key = h ? h.kind + h.id : null;
    if (key !== (this.hover ? this.hover.kind + this.hover.id : null)) { this.hover = h; this.draw(); }
  }

  selectUp(x, y, e) {
    const add = e.shiftKey || e.ctrlKey || e.metaKey || !!this.host.addMode?.();
    if (this.drag && this.drag.moved) { this.drag = null; this.host.dragEnd(); this.draw(); return; }
    this.drag = null;
    if (this.box) {
      const b = this.box; this.box = null;
      if (Math.hypot(b.b[0] - b.a[0], b.b[1] - b.a[1]) > 4) {
        if (!b.add) this.sel.clear();
        const p0 = this.toSketch(Math.min(b.a[0], b.b[0]), Math.max(b.a[1], b.b[1])), p1 = this.toSketch(Math.max(b.a[0], b.b[0]), Math.min(b.a[1], b.b[1]));
        const inside = (q) => q[0] >= p0[0] && q[0] <= p1[0] && q[1] >= p0[1] && q[1] <= p1[1];
        for (const en of this.sk.entities) {
          const bb = entityBox(this.sk, en);
          if (inside([bb.x0, bb.y0]) && inside([bb.x1, bb.y1])) this.sel.add(en.id);
        }
        this.host.changed(); this.draw();
        return;
      }
    }
    const h = this.pressHit;
    this.pressHit = null;
    if (!h) { if (!add) this.sel.clear(); }
    else if (add) { if (this.sel.has(h.id)) this.sel.delete(h.id); else this.sel.add(h.id); }
    else { this.sel.clear(); this.sel.add(h.id); }
    this.host.changed(); this.draw();
  }

  // ---------------------------------------------------------------- drawing tools
  click(x, y, e) {
    const tl = this.tool;
    // sizes typed for this shape, then a click instead of Enter: the click gives only the direction (0.6 PU.1)
    if (!e?.ddPoint && this.step?.dd && Object.keys(this.step.dd).length && ['line', 'centerline', 'rect', 'circle', 'arc'].includes(tl)) { this.cursor = this.toSketch(x, y); this.snapAt = null; this.click(x, y, { ddPoint: this.ddPoint() }); return; }
    // a shape drawn from typed sizes (0.6 PU.1) lands exactly where they put it: no snapping
    const sn = e?.ddPoint ? { xy: e.ddPoint, ref: null, on: null, dd: true } : tl === 'dimension' || tl === 'fillet' ? null : this.snap(x, y, this.step?.exclude);
    const dd = sn?.dd ? { ...(this.step?.dd || {}) } : null;
    if (tl === 'paste' && this.pasteClip) {
      const { clip, label } = this.pasteClip;
      const d = [sn.xy[0] - clip.anchor[0], sn.xy[1] - clip.anchor[1]];
      let made = null;
      this.host.commit(label, (sk) => { made = pasteSketch(sk, clip, d); });
      this.setTool('select');
      if (made) { this.sel = new Set(made.ids); this.host.pasted?.(label, clip, made); }
      this.host.changed();
      this.draw();
      return;
    }
    if (tl === 'point') {
      this.host.commit(t('ui.sketch.op.point'), (sk) => { const id = S.addPoint(sk, ...sn.xy); this.joinSnap(sk, id, sn); });
      return;
    }
    if (tl === 'line' || tl === 'centerline') {
      if (!this.step) { this.step = { a: sn }; this.ddHint(); this.draw(); return; }
      const a = this.step.a;
      const { b, hv } = dd ? { b: sn, hv: this.step.ddHv || null } : this.hvSnap(a, sn);
      if (Math.hypot(b.xy[0] - a.xy[0], b.xy[1] - a.xy[1]) * this.view.s < 2 && !dd) return;
      let made = null;
      this.host.commit(tl === 'line' ? t('ui.sketch.op.line') : t('ui.sketch.op.centerline'), (sk) => {
        made = S.addLine(sk, this.R(a), this.R(b), { construction: tl === 'centerline' });
        if (!a.ref) this.joinSnap(sk, made.p1, a);
        if (!b.ref) this.joinSnap(sk, made.p2, b);
        if (hv) try { S.addConstraint(sk, hv, [made.id]); } catch { /* already implied */ }
        if (dd?.len !== undefined) this.ddDim(sk, 'distance', [made.id], dd.len);
      });
      if (tl === 'line' && made && !b.ref) { this.step = { a: { xy: S.pointXY(this.sk, made.p2), ref: made.p2 }, exclude: new Set([made.id, made.p2]) }; if (dd) this.ddHint(); }
      else this.step = null;
      this.draw();
      return;
    }
    if (tl === 'rect') {
      if (!this.step) { this.step = { a: sn }; this.ddHint(); this.draw(); return; }
      const a = this.step.a;
      if (!dd && (Math.abs(sn.xy[0] - a.xy[0]) * this.view.s < 3 || Math.abs(sn.xy[1] - a.xy[1]) * this.view.s < 3)) return;
      this.host.commit(t('ui.sketch.op.rectangle'), (sk) => {
        const r = S.addRect(sk, a.xy, sn.xy);
        const l0 = S.byId(sk, r.lines[0]), l2 = S.byId(sk, r.lines[2]);
        if (a.ref || a.on) this.joinSnap(sk, l0.p1, a, true);
        if (sn.ref || sn.on) this.joinSnap(sk, l2.p1, sn, true);
        if (dd?.w !== undefined) this.ddDim(sk, 'distance', [r.lines[0]], dd.w);
        if (dd?.h !== undefined) this.ddDim(sk, 'distance', [r.lines[1]], dd.h);
      });
      this.step = null;
      return;
    }
    if (tl === 'circle') {
      if (!this.step) { this.step = { c: sn }; this.ddHint(); this.draw(); return; }
      const c = this.step.c;
      const r = dd?.d !== undefined ? dd.d / 2 : Math.hypot(sn.xy[0] - c.xy[0], sn.xy[1] - c.xy[1]);
      if (r * this.view.s < 2 && !dd) return;
      this.host.commit(t('ui.sketch.op.circle'), (sk) => { const m = S.addCircle(sk, this.R(c), r); if (!c.ref) this.joinSnap(sk, m.c, c); if (dd?.d !== undefined) this.ddDim(sk, 'diameter', [m.id], dd.d); });
      this.step = null;
      return;
    }
    if (tl === 'arc') {
      if (!this.step) { this.step = { c: sn }; this.ddHint(); this.draw(); return; }
      if (!this.step.s) {
        if (Math.hypot(sn.xy[0] - this.step.c.xy[0], sn.xy[1] - this.step.c.xy[1]) * this.view.s < 2 && !dd) return;
        this.step.s = sn; this.step.turn = 0; this.step.lastAng = null;
        if (dd?.r !== undefined) this.step.rTyped = dd.r;   // its radius dimension comes with the arc
        this.step.dd = {}; this.ddHint(); this.draw(); return;
      }
      const { c, s, rTyped } = this.step;
      const cw = (this.step.turn || 0) < 0;
      this.host.commit(t('ui.sketch.op.arc'), (sk) => {
        const m = cw ? S.addArc(sk, this.R(c), this.R(sn), this.R(s)) : S.addArc(sk, this.R(c), this.R(s), this.R(sn));
        if (!c.ref) this.joinSnap(sk, m.c, c);
        if (rTyped !== undefined) this.ddDim(sk, 'radius', [m.id], rTyped);
      });
      this.step = null;
      return;
    }
    if (tl === 'spline' || tl === 'cspline') { this.splineClick(x, y, sn); return; }
    if (tl === 'trim' || tl === 'extend') {
      const h = this.hitAt(x, y, { labels: false, points: false });
      if (!h) { this.host.status(TOOL_HINTS[tl](this)); return; }
      const at = this.toSketch(x, y);
      if (tl === 'trim') this.runTool(t('ui.sketch.op.trim'), (sk) => TL.trim(sk, h.id, at), (r) => (r.removed === 'curve' ? t('ui.sketch.trim.whole') : t('ui.sketch.trim.done')));
      else this.runTool(t('ui.sketch.op.extend'), (sk) => TL.extend(sk, h.id, at), () => t('ui.sketch.extend.done'));
      this.hover = null;
      this.draw();
      return;
    }
    if (tl === 'offset') { this.offsetClick(x, y); return; }
    if (tl === 'project') {
      const rec = this.host.pickEdge?.(e.clientX, e.clientY);
      if (!rec) { this.host.status(TOOL_HINTS.project(this)); return; }
      this.runTool(t('ui.sketch.op.project'), (sk) => TL.projectEdge(sk, this.host.frame(), rec), (r) => t('ui.sketch.project.done', { kind: r.kind }));
      return;
    }
    if (tl === 'mirror') { this.mirrorClick(x, y); return; }
    if (tl === 'polygon') {
      if (!this.step) { this.step = { c: sn }; this.host.status(t('ui.sketch.polygon.corner')); this.draw(); return; }
      const c = this.step.c;
      if (Math.hypot(sn.xy[0] - c.xy[0], sn.xy[1] - c.xy[1]) * this.view.s < 3) return;
      const v = sn.xy;
      this.step = null;
      this.askValue([x, y], this.polySides || 6, t('ui.sketch.polygon.sides'), (n) => {
        if (!Number.isInteger(n) || n < 3 || n > 64) { this.host.status(t('ui.sketch.polygon.bad_sides')); return; }
        this.polySides = n;
        this.runTool(t('ui.sketch.op.polygon'), (sk) => {
          const r = TL.addPolygon(sk, c.xy, v, n);
          if (c.ref && this.autoRelations) S.addConstraint(sk, 'coincident', [S.byId(sk, r.circle).c, c.ref]);
          return r;
        }, () => t('ui.sketch.polygon.done', { n }));
      });
      this.draw();
      return;
    }
    if (tl === 'slot') {
      if (!this.step) { this.step = { a: sn }; this.host.status(t('ui.sketch.slot.other_end')); this.draw(); return; }
      if (!this.step.b) { if (Math.hypot(sn.xy[0] - this.step.a.xy[0], sn.xy[1] - this.step.a.xy[1]) * this.view.s < 3) return; this.step.b = sn; this.host.status(t('ui.sketch.slot.width')); this.draw(); return; }
      const { a, b } = this.step;
      this.step = null;
      const w = 2 * lineDist(sn.xy, a.xy, b.xy);
      this.runTool(t('ui.sketch.op.slot'), (sk) => {
        const r = TL.addSlot(sk, a.xy, b.xy, w);
        if (this.autoRelations) for (const [q, cId] of [[a, r.centres[0]], [b, r.centres[1]]]) if (q.ref) S.addConstraint(sk, 'coincident', [cId, q.ref]);
        return r;
      }, () => t('ui.sketch.slot.done', { w: fmt(w, 2) }));
      return;
    }
    if (tl === 'lpattern' || tl === 'cpattern') {
      const ids = this.toolSel;
      if (!ids.length) { this.host.status(TOOL_HINTS[tl](this)); return; }
      const ask = (label, done) => this.askValue([x, y], tl === 'cpattern' ? 6 : 3, t('ui.sketch.pattern.copies'), (n) => {
        if (!Number.isInteger(n) || n < 2 || n > 200) { this.host.status(t('ui.sketch.pattern.bad_copies')); return; }
        this.runTool(label, (sk) => done(sk, n), () => t('ui.sketch.pattern.done', { n }));
      });
      if (tl === 'cpattern') { const c = sn.xy; ask(t('ui.sketch.op.cpattern'), (sk, n) => TL.patternCircular(sk, ids, c, n)); return; }
      if (!this.step) { this.step = { a: sn }; this.host.status(t('ui.sketch.pattern.first_copy')); this.draw(); return; }
      const a = this.step.a;
      this.step = null;
      const d = [sn.xy[0] - a.xy[0], sn.xy[1] - a.xy[1]];
      if (Math.hypot(...d) * this.view.s < 3) return;
      ask(t('ui.sketch.op.lpattern'), (sk, n) => TL.patternLinear(sk, ids, d, n));
      return;
    }
    if (tl === 'dimension') { this.dimensionClick(x, y); return; }
    if (tl === 'fillet') {
      const h = this.hitAt(x, y, { labels: false, curves: false });
      if (!h || h.id === S.ORIGIN) { this.host.status(t('ui.sketch.fillet.pick')); return; }
      const sk = this.sk;
      const lines = sk.entities.filter((en) => en.type === 'line' && !en.construction && [en.p1, en.p2].some((p) => samePos(sk, p, h.id)));
      if (lines.length !== 2) { this.host.status(t('ui.sketch.fillet.two_lines')); return; }
      const len = Math.min(...lines.map((l) => { const a = S.pointXY(sk, l.p1), b = S.pointXY(sk, l.p2); return Math.hypot(b[0] - a[0], b[1] - a[1]); }));
      const guess = niceNumber(len / 5);
      this.askValue(this.toScreen(S.pointXY(sk, h.id)), guess, t('ui.sketch.fillet.radius'), (v) => {
        try { this.host.commit(t('ui.sketch.op.fillet'), (s2) => S.filletCorner(s2, h.id, v)); } catch (err) { this.host.status(err.message); }
      });
    }
  }

  /** Join a newly made point to what it snapped to. */
  joinSnap(sk, id, sn, alsoPoint = false) {
    if (!this.autoRelations) return;
    try {
      if (sn.ref && alsoPoint) S.addConstraint(sk, 'coincident', [id, sn.ref]);
      else if (sn.on) S.addConstraint(sk, 'coincident', [id, sn.on]);
    } catch { /* ignore */ }
  }

  /** Lines within 3° of horizontal or vertical snap to it (unless the end snapped to a point). */
  hvSnap(a, b) {
    if (b.ref || !this.autoRelations) return { b, hv: null };
    const dx = b.xy[0] - a.xy[0], dy = b.xy[1] - a.xy[1];
    const ang = Math.abs(Math.atan2(dy, dx) * 180 / Math.PI);
    if (Math.min(ang, 180 - ang) < 3) return { b: { ...b, xy: [b.xy[0], a.xy[1]], on: null }, hv: 'horizontal' };
    if (Math.abs(ang - 90) < 3) return { b: { ...b, xy: [a.xy[0], b.xy[1]], on: null }, hv: 'vertical' };
    return { b, hv: null };
  }

  finishStep(closed = false) {
    const tl = this.tool, st = this.step;
    this.step = null;
    if ((tl === 'spline' || tl === 'cspline') && st?.pts?.length >= 2) { this.commitSpline(st.pts, tl === 'cspline' ? 'control' : 'fit', closed); this.draw(); return; }
    if (tl === 'mirror' && !st && this.toolSel.length) { this.step = { axis: true }; this.host.status(TOOL_HINTS.mirror(this)); this.draw(); return; }
    this.host.status('');
    this.draw();
  }

  // ---------------------------------------------------------------- spline, offset, mirror
  splineClick(x, y, sn) {
    const st = this.step;
    if (!st) { this.step = { pts: [sn] }; this.draw(); return; }
    const first = this.toScreen(st.pts[0].xy), last = this.toScreen(st.pts[st.pts.length - 1].xy);
    if (st.pts.length >= 3 && Math.hypot(first[0] - x, first[1] - y) <= SNAP_PT * this.reach) { this.finishStep(true); return; }
    if (Math.hypot(last[0] - x, last[1] - y) < 3) return;
    st.pts.push(sn);
    this.draw();
  }

  commitSpline(pts, kind, closed) {
    this.runTool(kind === 'control' ? t('ui.sketch.op.cspline') : t('ui.sketch.op.spline'), (sk) => {
      const ids = pts.map((q) => {
        const id = S.addPoint(sk, ...q.xy);
        if (this.autoRelations && q.ref) S.addConstraint(sk, 'coincident', [id, q.ref]);
        else this.joinSnap(sk, id, q);
        return id;
      });
      return S.addSpline(sk, ids, { kind, closed });
    }, () => t(closed ? (kind === 'fit' ? 'ui.sketch.spline.closed_fit' : 'ui.sketch.spline.closed_control') : (kind === 'fit' ? 'ui.sketch.spline.fit' : 'ui.sketch.spline.control')));
  }

  offsetClick(x, y) {
    const sk = this.sk;
    if (!this.step) {
      const h = this.hitAt(x, y, { labels: false, points: false });
      if (!h) { this.host.status(TOOL_HINTS.offset(this)); return; }
      try { this.step = { chain: TL.chainOf(sk, h.id, this.toolSel.length > 1 && this.toolSel.includes(h.id) ? this.toolSel : null) }; } catch (err) { this.host.status(err.message); return; }
      this.offsetGhost = null;
      this.host.status(t('ui.sketch.offset.side'));
      this.draw();
      return;
    }
    const chain = this.step.chain, both = !!this.offsetBoth;
    const side = TL.offsetSide(sk, chain, this.toSketch(x, y));
    this.askValue([x, y], +side.d.toPrecision(3) || 1, t('ui.sketch.offset.distance'), (v) => {
      if (!(v > 0)) { this.host.status(t('ui.sketch.offset.positive')); return; }
      this.runTool(t('ui.sketch.op.offset'), (s2) => {
        const r = TL.offset(s2, chain, side.side * v);
        if (both) { const r2 = TL.offset(s2, chain, -side.side * v, { link: r.master }); r.made.push(...r2.made); r.err = Math.max(r.err, r2.err); }
        return r;
      }, (r) => (r.parametric ? t(both ? 'ui.sketch.offset.done_both' : 'ui.sketch.offset.done', { d: fmt(v) }) : t('ui.sketch.offset.done_spline', { d: fmt(v), tol: TL.OFFSET_TOL, gap: fmt(r.err, 6) })));
      this.step = null;
      this.draw();
    });
  }

  mirrorClick(x, y) {
    if (!this.step?.axis) {
      const h = this.hitAt(x, y, { labels: false });
      if (!h || h.id === S.ORIGIN) { this.host.status(TOOL_HINTS.mirror(this)); return; }
      const i = this.toolSel.indexOf(h.id);
      if (i >= 0) this.toolSel.splice(i, 1); else this.toolSel.push(h.id);
      this.host.status(t('ui.sketch.mirror.items', { n: this.toolSel.length }));
      this.draw();
      return;
    }
    const h = this.hitAt(x, y, { labels: false, points: false });
    const e = h && S.byId(this.sk, h.id);
    if (!e || e.type !== 'line') { this.host.status(t('ui.sketch.mirror.axis')); return; }
    const ids = this.toolSel;
    const r = this.runTool(t('ui.sketch.op.mirror'), (sk) => TL.mirror(sk, ids, e.id), (m) => t('ui.sketch.mirror.done', { n: m.relations }));
    if (r) { this.setTool('select'); this.sel = new Set(r.made.filter((id) => S.byId(this.sk, id)?.type !== 'point')); this.host.changed(); this.draw(); }
  }

  dimensionClick(x, y) {
    const h = this.hitAt(x, y, { labels: false });
    const st = this.step || (this.step = { picks: [] });
    if (h && h.kind === 'entity' && st.picks.length < 2 && !st.picks.includes(h.id)) {
      st.picks.push(h.id);
      const e = S.byId(this.sk, h.id);
      if (st.picks.length === 1 && e && e.type !== 'point' && e.type !== 'line') { /* round: place next click */ }
      this.host.status(st.picks.length === 1 ? t('ui.sketch.dim.second') : t('ui.sketch.dim.place'));
      this.draw();
      return;
    }
    if (!st.picks.length) { this.host.status(t('ui.sketch.dim.pick')); return; }
    const at = this.toSketch(x, y);
    const refs = st.picks;
    const type = pickDimType(this.sk, refs, at);
    this.step = null;
    if (!type) { this.host.status(t('ui.sketch.dim.cannot')); this.draw(); return; }
    let made = null;
    try {
      this.host.commit(t('ui.sketch.op.dimension'), (sk) => { made = S.addConstraint(sk, type, refs); setLabel(sk, made, at); });
      this.host.status('');
    } catch (err) { this.host.status(err.message); return; }
    if (made) this.editDimension(made.id, true);
  }

  /** Type a dimension's value. `fresh`: the dimension was just made, so the value joins that undo step. */
  editDimension(id, fresh = false) {
    const c = this.sk.constraints.find((k) => k.id === id);
    if (!c) return;
    const box = this.dimBoxes.find((b) => b.id === id);
    const at = box ? [box.x + box.w / 2, box.y + box.h / 2] : this.toScreen(dimGeometry(this.sk, c)?.at || [0, 0]);
    this.askValue(at, c.value, S.CONSTRAINTS[c.type].label, (v) => {
      try {
        if (!(v >= 0) || (c.type === 'angle' && v > 180) || ((c.type === 'radius' || c.type === 'diameter') && v <= 0)) throw new Error(c.type === 'angle' ? t('ui.sketch.dim.bad_angle') : t('ui.sketch.dim.positive'));
        this.host.commit(t('ui.sketch.op.change_dimension'), (sk) => { const k = sk.constraints.find((q) => q.id === id); if (k) k.value = v; }, { squash: fresh });
      } catch (err) { this.host.status(err.message); }
    });
    // "=width / 2", or a number for a dimension an equation drives: the parameters handle it (params-panel.js)
    this.inputRaw = this.host.dimTyped ? (raw) => this.host.dimTyped(id, raw) : null;
  }

  askValue([x, y], value, label, done, typed = null) {
    this.inputRaw = null;
    this.inputTab = null; this.inputBlur = null;
    const inp = this.input;
    inp.hidden = false;
    inp.value = fmt(value);
    inp.setAttribute('aria-label', label);
    const { w } = this.size();
    inp.style.left = Math.max(4, Math.min(x - 45, w - 100)) + 'px';
    inp.style.top = Math.max(4, y - 14) + 'px';
    this.inputCb = done;
    this.inputClosing = false;
    // a key already typed (0.6 PU.1): the box takes the focus now, so the next keys land in it, after that one;
    // `true` = focus now with the value selected (Tab to the next size box)
    if (typed === true) { inp.focus(); inp.select(); return; }
    if (typed !== null) { inp.value = typed; inp.focus(); inp.setSelectionRange(typed.length, typed.length); return; }
    setTimeout(() => { inp.focus(); inp.select(); }, 0);
  }

  inputDone(apply) {
    const cb = this.inputCb;
    if (!cb) return;
    this.inputCb = null;
    this.inputClosing = true;
    const raw = this.input.value.trim();
    const rawCb = this.inputRaw;
    this.inputRaw = null;
    this.hideInput();
    if (apply && rawCb && rawCb(raw)) { /* handled as an equation */ }
    else if (apply) {
      const v = parseNumber(raw);
      if (v === null) this.host.status(t('ui.sketch.not_number'));
      else cb(v);
    }
    this.host.refocus?.();
  }

  hideInput() { this.inputClosing = true; this.input.hidden = true; this.inputCb = null; this.inputTab = null; this.inputBlur = null; }

  // ---------------------------------------------------------------- dimension as you draw (0.6 PU.1)
  /** The boxes the shape being drawn takes, in Tab order: [[key, label]], or null (nothing being drawn, or the setting is off). */
  ddFields() {
    const st = this.step, tl = this.tool;
    if (!this.dimDraw || !st) return null;
    if (tl === 'line' || tl === 'centerline') return [['len', t('ui.sketch.dd.length')], ['ang', t('ui.sketch.dd.angle')]];
    if (tl === 'rect') return [['w', t('ui.sketch.dd.width')], ['h', t('ui.sketch.dd.height')]];
    if (tl === 'circle') return [['d', t('ui.sketch.dd.diameter')]];
    if (tl === 'arc') return st.s ? [['sweep', t('ui.sketch.dd.sweep')]] : [['r', t('ui.sketch.dd.radius')]];
    return null;
  }
  /** What the status bar says once a shape is started (the setting on). */
  ddHint() {
    if (!this.dimDraw || !this.step) return;
    const tl = this.tool, key = tl === 'arc' ? (this.step.s ? 'arc_sweep' : 'arc_r') : tl === 'centerline' ? 'line' : tl;
    if (['line', 'rect', 'circle', 'arc_r', 'arc_sweep'].includes(key)) this.host.status(t('ui.sketch.dd.hint.' + key));
  }
  /** The sizes the pointer gives now. */
  ddLive() {
    const st = this.step, cur = this.snapAt?.xy || this.cursor;
    if (!st || !cur) return {};
    const d = (p) => Math.hypot(cur[0] - p[0], cur[1] - p[1]);
    if (st.a) { const a = st.a.xy; return { len: d(a), ang: Math.atan2(cur[1] - a[1], cur[0] - a[0]) * 180 / Math.PI, w: Math.abs(cur[0] - a[0]), h: Math.abs(cur[1] - a[1]) }; }
    if (st.c && !st.s) return { d: 2 * d(st.c.xy), r: d(st.c.xy) };
    if (st.c && st.s) {
      const c = st.c.xy, a0 = Math.atan2(st.s.xy[1] - c[1], st.s.xy[0] - c[0]), a1 = Math.atan2(cur[1] - c[1], cur[0] - c[0]);
      let sw = (a1 - a0) * 180 / Math.PI;
      if ((st.turn || 0) < 0) sw = -sw;
      return { sweep: ((sw % 360) + 360) % 360 };
    }
    return {};
  }
  /** A digit typed while drawing opens the first box not typed yet, holding that digit. → false when nothing takes it. */
  ddStart(ch) {
    const f = this.ddFields();
    if (!f) return false;
    const st = this.step;
    st.dd = st.dd || {};
    const i = f.findIndex(([k]) => st.dd[k] === undefined);
    this.ddOpen(i < 0 ? 0 : i, ch);
    return true;
  }
  ddOpen(i, ch = null) {
    const f = this.ddFields();
    if (!f) return;
    const st = this.step, [k, label] = f[i];
    const live = this.ddLive();
    const shown = st.dd[k] ?? live[k] ?? 0;
    this.askValue(this.ddAt || this.toScreen(this.cursor || [0, 0]), k === 'ang' ? +shown.toFixed(1) : shown, label, (v) => { if (this.ddSet(k, v)) this.ddCommit(); }, ch ?? true);
    const keep = () => { const raw = this.input.value.trim(); const v = parseNumber(raw); if (raw && v !== null) this.ddSet(k, v); };
    this.inputBlur = () => { keep(); this.hideInput(); this.draw(); };
    this.inputTab = (back) => { keep(); if (f.length > 1) this.ddOpen((i + (back ? f.length - 1 : 1)) % f.length); };
    this.input.dataset.dd = k;
    this.host.status(t('ui.sketch.dd.typing', { what: label }));
    this.draw();
  }
  /** Keep a typed size for the shape being drawn. → false (and why, in the status bar) when it can't be one. */
  ddSet(k, v) {
    const st = this.step;
    if (!st) return false;
    if (k === 'ang') { st.dd.ang = ((v % 360) + 360) % 360; this.draw(); return true; }
    if (k === 'sweep' && !(v > 0 && v < 360)) { this.host.status(t('ui.sketch.dd.bad_sweep')); return false; }
    if (!(v > 0)) { this.host.status(t('ui.sketch.dim.positive')); return false; }
    st.dd[k] = v;
    this.draw();
    return true;
  }
  /** Where the typed sizes (and the pointer, for the rest) put the shape's next point, in sketch coordinates. */
  ddPoint() {
    const st = this.step, tl = this.tool, dd = st.dd || {}, live = this.ddLive();
    const cur = this.snapAt?.xy || this.cursor || [0, 0];
    const dirFrom = (o, q = cur) => { const dx = q[0] - o[0], dy = q[1] - o[1], l = Math.hypot(dx, dy); return l > 1e-12 ? [dx / l, dy / l] : [1, 0]; };
    if (tl === 'line' || tl === 'centerline') {
      const a = st.a.xy;
      let dir, hv = null;
      if (dd.ang !== undefined) {
        const r = dd.ang * Math.PI / 180, m = dd.ang % 180;
        dir = [Math.cos(r), Math.sin(r)];
        if (this.autoRelations) hv = m === 0 ? 'horizontal' : m === 90 ? 'vertical' : null;
      } else { const q = this.hvSnap(st.a, { xy: cur }); hv = q.hv; dir = dirFrom(a, q.b.xy); }
      st.ddHv = hv;
      const len = dd.len ?? live.len ?? 0;
      return [a[0] + dir[0] * len, a[1] + dir[1] * len];
    }
    if (tl === 'rect') {
      const a = st.a.xy, sx = cur[0] >= a[0] ? 1 : -1, sy = cur[1] >= a[1] ? 1 : -1;
      return [a[0] + sx * (dd.w ?? live.w ?? 0), a[1] + sy * (dd.h ?? live.h ?? 0)];
    }
    if (tl === 'circle') { const c = st.c.xy, r = (dd.d ?? live.d ?? 0) / 2, u = dirFrom(c); return [c[0] + u[0] * r, c[1] + u[1] * r]; }
    if (tl === 'arc' && !st.s) { const c = st.c.xy, r = dd.r ?? live.r ?? 0, u = dirFrom(c); return [c[0] + u[0] * r, c[1] + u[1] * r]; }
    if (tl === 'arc') {
      const c = st.c.xy, s = st.s.xy, sw = (dd.sweep ?? live.sweep ?? 0) * Math.PI / 180 * ((st.turn || 0) < 0 ? -1 : 1);
      const vx = s[0] - c[0], vy = s[1] - c[1];
      return [c[0] + vx * Math.cos(sw) - vy * Math.sin(sw), c[1] + vx * Math.sin(sw) + vy * Math.cos(sw)];
    }
    return cur;
  }
  /** Enter in a size box: draw the shape (or the arc's start) where the sizes put it. */
  ddCommit() {
    if (!this.step) return;
    const xy = this.ddPoint();
    const st = this.step, a = st.a?.xy || st.c?.xy;
    if (this.tool === 'rect' && a && (Math.abs(xy[0] - a[0]) < 1e-9 || Math.abs(xy[1] - a[1]) < 1e-9)) { this.host.status(t('ui.sketch.dd.need_pointer')); return; }
    const [x, y] = this.toScreen(xy);
    this.click(x, y, { ddPoint: xy });
    this.draw();
  }
  /** A typed size as a driving dimension, in the shape's own undo step; a size the sketch already fixes stays a plain number. */
  ddDim(sk, type, refs, v) {
    try { const c = S.addConstraint(sk, type, refs, v); const g = dimGeometry(sk, c); if (g?.at) setLabel(sk, c, g.at); } catch { /* already fixed by other relations */ }
  }

  // ---------------------------------------------------------------- edits
  deleteSelection() {
    const ids = [...this.sel];
    const cons = ids.filter((id) => this.sk.constraints.some((c) => c.id === id));
    const ents = ids.filter((id) => !cons.includes(id) && id !== S.ORIGIN);
    if (!cons.length && !ents.length) return;
    this.host.commit(t('ui.sketch.op.delete'), (sk) => { S.removeConstraints(sk, cons); S.removeEntities(sk, ents); });
    this.sel.clear();
    this.host.changed();
  }

  toggleConstruction() {
    const ids = [...this.sel].filter((id) => { const e = S.byId(this.sk, id); return e && !e.origin && e.type !== 'point'; });
    if (!ids.length) { this.host.status(t('ui.sketch.construction.select')); return; }
    this.host.commit(t('ui.sketch.op.construction'), (sk) => { for (const id of ids) { const e = S.byId(sk, id); if (e.construction) delete e.construction; else e.construction = true; } });
  }

  addRelation(type, refs = [...this.sel]) {
    try {
      this.host.commit(S.CONSTRAINTS[type].label, (sk) => S.addConstraint(sk, type, refs));
    } catch (err) { this.host.status(err.message); }
  }

  // ---------------------------------------------------------------- drawing
  draw() {
    const cv = this.canvas, ctx = this.ctx;
    const dpr = window.devicePixelRatio || 1;
    const { w, h } = this.size();
    if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    this.dimBoxes = []; this.glyphBoxes = [];
    if (!this.active) return;
    const T = this.host.tokens();
    const sk = this.sk;
    const info = this.host.info() || { determined: new Set(), conflicts: [], redundant: [] };
    const bad = new Set([...(info.conflicts || []), ...(info.redundant || [])]);
    const badEnts = new Set();
    for (const c of sk.constraints) if (bad.has(c.id)) c.refs.forEach((r) => badEnts.add(r));
    const colorOf = (e) => {
      if (this.sel.has(e.id)) return T.sel;
      if (this.hover && this.hover.id === e.id) return T.hover;
      if (badEnts.has(e.id)) return T.over;
      if (e.construction) return T.cons;
      return info.determined.has(e.id) ? T.full : T.under;
    };
    // axes through the origin
    const o = this.toScreen([0, 0]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = T.axis;
    ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(0, o[1]); ctx.lineTo(w, o[1]); ctx.moveTo(o[0], 0); ctx.lineTo(o[0], h); ctx.stroke();
    ctx.setLineDash([]);
    // curves
    for (const e of sk.entities) {
      if (e.type === 'point') continue;
      ctx.strokeStyle = colorOf(e);
      ctx.lineWidth = this.sel.has(e.id) || (this.hover && this.hover.id === e.id) ? 2.5 : 1.75;
      ctx.setLineDash(e.construction ? [8, 4, 2, 4] : []);
      ctx.beginPath();
      if (e.type === 'line') { const a = this.toScreen(S.pointXY(sk, e.p1)), b = this.toScreen(S.pointXY(sk, e.p2)); ctx.moveTo(...a); ctx.lineTo(...b); }
      else if (e.type === 'circle') { const c = this.toScreen(S.pointXY(sk, e.c)); ctx.arc(c[0], c[1], e.r * this.view.s, 0, Math.PI * 2); }
      else if (e.type === 'spline') this.splinePath(ctx, sk, e);
      else { const { c, r, a0, sweep } = S.arcAngles(sk, e); const cs = this.toScreen(c); ctx.arc(cs[0], cs[1], r * this.view.s, -a0, -(a0 + sweep), true); }
      ctx.stroke();
      if (e.type === 'spline' && e.kind === 'control') {
        // the control polygon, thin and dashed
        ctx.save(); ctx.lineWidth = 1; ctx.setLineDash([3, 3]); ctx.globalAlpha = 0.6; ctx.beginPath();
        e.pts.forEach((id, i) => { const q = this.toScreen(S.pointXY(sk, id)); if (i) ctx.lineTo(...q); else ctx.moveTo(...q); });
        if (e.closed) ctx.closePath();
        ctx.stroke(); ctx.restore();
      }
    }
    ctx.setLineDash([]);
    // points
    const loose = new Set(S.loosePoints(sk).map((p) => p.id));
    for (const e of sk.entities) {
      if (e.type !== 'point') continue;
      const [x, y] = this.toScreen([e.x, e.y]);
      ctx.fillStyle = colorOf(e);
      const r = loose.has(e.id) ? 3.5 : 2.5;
      ctx.beginPath(); ctx.arc(x, y, (this.sel.has(e.id) || (this.hover && this.hover.id === e.id)) ? r + 1.5 : r, 0, Math.PI * 2); ctx.fill();
      if (loose.has(e.id)) { ctx.strokeStyle = colorOf(e); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x - 7, y); ctx.lineTo(x + 7, y); ctx.moveTo(x, y - 7); ctx.lineTo(x, y + 7); ctx.stroke(); }
    }
    // origin
    ctx.strokeStyle = this.sel.has(S.ORIGIN) ? T.sel : T.originC;
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(o[0], o[1], 5, 0, Math.PI * 2); ctx.moveTo(o[0] - 9, o[1]); ctx.lineTo(o[0] + 9, o[1]); ctx.moveTo(o[0], o[1] - 9); ctx.lineTo(o[0], o[1] + 9); ctx.stroke();
    // relations and dimensions
    this.drawConstraints(ctx, T, bad);
    // in-progress tool preview
    this.drawPreview(ctx, T);
    if (this.box) {
      const b = this.box;
      ctx.strokeStyle = T.sel; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
      ctx.strokeRect(Math.min(b.a[0], b.b[0]), Math.min(b.a[1], b.b[1]), Math.abs(b.b[0] - b.a[0]), Math.abs(b.b[1] - b.a[1]));
      ctx.setLineDash([]);
    }
  }

  drawPreview(ctx, T) {
    const tl = this.tool, st = this.step;
    const typed = !!(st?.dd && Object.keys(st.dd).length && ['line', 'centerline', 'rect', 'circle', 'arc'].includes(tl));
    const cur = typed && (this.snapAt?.xy || this.cursor) ? this.ddPoint() : this.snapAt?.xy || this.cursor;   // 0.6 PU.1
    this.ddAt = null;
    if (!cur || tl === 'select') return;
    ctx.strokeStyle = T.sel; ctx.fillStyle = T.sel; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
    const P = (q) => this.toScreen(q);
    if (tl === 'paste' && this.pasteClip) { this.drawPastePreview(ctx, T, cur); return; }
    if (this.drawToolPreview(ctx, T, cur)) { ctx.setLineDash([]); return; }
    ctx.beginPath();
    if ((tl === 'line' || tl === 'centerline') && st) {
      const { b, hv } = typed ? { b: { xy: cur }, hv: st.ddHv } : this.hvSnap(st.a, this.snapAt || { xy: cur });
      ctx.moveTo(...P(st.a.xy)); ctx.lineTo(...P(b.xy));
      ctx.stroke(); ctx.setLineDash([]);
      const len = Math.hypot(b.xy[0] - st.a.xy[0], b.xy[1] - st.a.xy[1]);
      this.tag(ctx, T, P(b.xy), (hv ? t(hv === 'horizontal' ? 'ui.sketch.tag.horizontal' : 'ui.sketch.tag.vertical', { len: fmt(len, 2) }) : fmt(len, 2)), this.dimDraw);
    } else if (tl === 'rect' && st) {
      const a = P(st.a.xy), b = P(cur);
      ctx.rect(Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
      ctx.stroke(); ctx.setLineDash([]);
      this.tag(ctx, T, b, fmt(Math.abs(cur[0] - st.a.xy[0]), 2) + ' × ' + fmt(Math.abs(cur[1] - st.a.xy[1]), 2), this.dimDraw);
    } else if (tl === 'circle' && st) {
      const c = P(st.c.xy), r = Math.hypot(cur[0] - st.c.xy[0], cur[1] - st.c.xy[1]);
      ctx.arc(c[0], c[1], r * this.view.s, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      this.tag(ctx, T, P(cur), '⌀' + fmt(2 * r, 2), this.dimDraw);
    } else if (tl === 'arc' && st) {
      const c = P(st.c.xy);
      if (!st.s) { ctx.moveTo(...c); ctx.lineTo(...P(cur)); ctx.stroke(); if (this.dimDraw) { ctx.setLineDash([]); this.tag(ctx, T, P(cur), 'R' + fmt(Math.hypot(cur[0] - st.c.xy[0], cur[1] - st.c.xy[1]), 2), true); } }
      else {
        const r = Math.hypot(st.s.xy[0] - st.c.xy[0], st.s.xy[1] - st.c.xy[1]);
        const a0 = Math.atan2(st.s.xy[1] - st.c.xy[1], st.s.xy[0] - st.c.xy[0]), a1 = Math.atan2(cur[1] - st.c.xy[1], cur[0] - st.c.xy[0]);
        ctx.arc(c[0], c[1], r * this.view.s, -a0, -a1, (st.turn || 0) >= 0);
        ctx.stroke();
        if (this.dimDraw) { ctx.setLineDash([]); this.tag(ctx, T, P(cur), fmt(this.ddLive().sweep ?? 0, 1) + '°', true); }
      }
      ctx.setLineDash([]);
    }
    ctx.setLineDash([]);
    // snap marker
    if (this.snapAt && (this.snapAt.ref || this.snapAt.on)) {
      const [x, y] = P(this.snapAt.xy);
      ctx.strokeStyle = T.hover; ctx.lineWidth = 2;
      ctx.beginPath();
      if (this.snapAt.ref) ctx.rect(x - 6, y - 6, 12, 12); else { ctx.moveTo(x - 6, y + 6); ctx.lineTo(x + 6, y - 6); ctx.moveTo(x - 6, y - 6); ctx.lineTo(x + 6, y + 6); }
      ctx.stroke();
    }
    if (tl === 'dimension' && st?.picks?.length) {
      for (const id of st.picks) { const e = S.byId(this.sk, id); if (e) this.outline(ctx, e, T.sel); }
    }
    if (this.hover && (tl === 'dimension' || tl === 'fillet')) { const e = S.byId(this.sk, this.hover.id); if (e) this.outline(ctx, e, T.hover); }
  }

  /** Previews of the spline / trim / extend / offset / mirror / polygon / slot / pattern tools. True when drawn. */
  drawToolPreview(ctx, T, cur) {
    const tl = this.tool, st = this.step, sk = this.sk;
    const P = (q) => this.toScreen(q);
    const hoverE = this.hover && this.hover.kind === 'entity' ? S.byId(sk, this.hover.id) : null;
    const path = (pts, close = false) => { ctx.beginPath(); pts.forEach((q, i) => { if (i) ctx.lineTo(...P(q)); else ctx.moveTo(...P(q)); }); if (close) ctx.closePath(); ctx.stroke(); };
    const snapMark = () => {
      if (!this.snapAt || !(this.snapAt.ref || this.snapAt.on)) return;
      const [x, y] = P(this.snapAt.xy);
      ctx.setLineDash([]); ctx.strokeStyle = T.hover; ctx.lineWidth = 2; ctx.beginPath();
      if (this.snapAt.ref) ctx.rect(x - 6, y - 6, 12, 12); else { ctx.moveTo(x - 6, y + 6); ctx.lineTo(x + 6, y - 6); ctx.moveTo(x - 6, y - 6); ctx.lineTo(x + 6, y + 6); }
      ctx.stroke();
    };
    if (tl === 'spline' || tl === 'cspline') {
      if (st) {
        const Q = [...st.pts.map((q) => q.xy), cur];
        if (Math.hypot(Q[Q.length - 1][0] - Q[Q.length - 2][0], Q[Q.length - 1][1] - Q[Q.length - 2][1]) < 1e-9) Q.pop();
        try { if (Q.length >= 2) path(SP.tessellate(tl === 'spline' ? SP.interpFit(Q) : SP.controlCurve(Q), 24)); } catch { /* points on top of each other */ }
        if (tl === 'cspline') { ctx.lineWidth = 1; ctx.setLineDash([3, 3]); path(Q); }
        ctx.setLineDash([]);
        for (const q of st.pts) { const [x, y] = P(q.xy); ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill(); }
      }
      snapMark();
      return true;
    }
    if (tl === 'trim') {
      if (hoverE && hoverE.type !== 'point') {
        const piece = TL.trimPiece(sk, hoverE.id, cur);
        if (piece) {
          ctx.setLineDash([]); ctx.strokeStyle = T.over; ctx.lineWidth = 3.5;
          const pts = [];
          for (let i = 0; i <= 96; i++) { let u = piece.a + (piece.b - piece.a) * i / 96; if (piece.period && u > piece.hi) u -= piece.period; pts.push(pointOn(piece.cv, u)); }
          path(pts);
        }
      }
      return true;
    }
    if (tl === 'extend') { if (hoverE && hoverE.type !== 'point') this.outline(ctx, hoverE, T.hover); return true; }
    if (tl === 'offset') {
      if (!st) { if (hoverE && hoverE.type !== 'point') this.outline(ctx, hoverE, T.hover); return true; }
      for (const it of st.chain.items) { const e = S.byId(sk, it.id); if (e) this.outline(ctx, e, T.sel); }
      const side = TL.offsetSide(sk, st.chain, cur);
      const key = side.side + ':' + side.d.toPrecision(4) + ':' + !!this.offsetBoth;
      if (!this.offsetGhost || this.offsetGhost.key !== key) {
        const ghost = S.clone(sk), made = [];
        let error = null;
        try {
          made.push(...TL.offset(ghost, st.chain, side.side * side.d).made);
          if (this.offsetBoth) made.push(...TL.offset(ghost, st.chain, -side.side * side.d).made);
        } catch (err) { error = err.message; }
        this.offsetGhost = { key, ghost, made, error };
      }
      const g = this.offsetGhost;
      ctx.strokeStyle = T.sel; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
      for (const id of g.made) {
        const e = S.byId(g.ghost, id);
        ctx.beginPath();
        if (e.type === 'line') { ctx.moveTo(...P(S.pointXY(g.ghost, e.p1))); ctx.lineTo(...P(S.pointXY(g.ghost, e.p2))); }
        else if (e.type === 'circle') { const c = P(S.pointXY(g.ghost, e.c)); ctx.arc(c[0], c[1], e.r * this.view.s, 0, Math.PI * 2); }
        else if (e.type === 'arc') { const { c, r, a0, sweep } = S.arcAngles(g.ghost, e); const cs = P(c); ctx.arc(cs[0], cs[1], r * this.view.s, -a0, -(a0 + sweep), true); }
        else this.splinePath(ctx, g.ghost, e);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      this.tag(ctx, T, P(cur), g.error || (this.offsetBoth ? t('ui.sketch.tag.both_sides', { d: fmt(side.d, 3) }) : fmt(side.d, 3)));
      return true;
    }
    if (tl === 'mirror') {
      for (const id of this.toolSel) { const e = S.byId(sk, id); if (e) this.outline(ctx, e, T.sel); }
      if (hoverE) this.outline(ctx, hoverE, T.hover);
      return true;
    }
    if (tl === 'polygon') {
      if (st) {
        const c = st.c.xy, n = this.polySides || 6, r = Math.hypot(cur[0] - c[0], cur[1] - c[1]), a0 = Math.atan2(cur[1] - c[1], cur[0] - c[0]);
        path(Array.from({ length: n }, (_, i) => [c[0] + r * Math.cos(a0 + 2 * Math.PI * i / n), c[1] + r * Math.sin(a0 + 2 * Math.PI * i / n)]), true);
        ctx.setLineDash([]);
        this.tag(ctx, T, P(cur), t('ui.sketch.tag.polygon', { n, r: fmt(r, 2) }));
      }
      snapMark();
      return true;
    }
    if (tl === 'slot') {
      if (st) {
        const a = st.a.xy, b = st.b ? st.b.xy : cur;
        const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (!st.b || l < 1e-9) path([a, b]);
        else {
          const r = lineDist(cur, a, b), u = [(b[0] - a[0]) / l, (b[1] - a[1]) / l], n = [-u[1], u[0]], ang = Math.atan2(n[1], n[0]);
          const pts = [];
          for (let i = 0; i <= 24; i++) { const th = ang - Math.PI * i / 24; pts.push([b[0] + r * Math.cos(th), b[1] + r * Math.sin(th)]); }
          for (let i = 0; i <= 24; i++) { const th = ang + Math.PI - Math.PI * i / 24; pts.push([a[0] + r * Math.cos(th), a[1] + r * Math.sin(th)]); }
          path(pts, true);
          ctx.setLineDash([]);
          this.tag(ctx, T, P(cur), t('ui.sketch.tag.width', { w: fmt(2 * r, 2) }));
        }
      }
      snapMark();
      return true;
    }
    if (tl === 'lpattern' || tl === 'cpattern') {
      for (const id of this.toolSel) { const e = S.byId(sk, id); if (e) this.outline(ctx, e, T.sel); }
      ctx.strokeStyle = T.sel; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4]);
      if (tl === 'lpattern' && st) path([st.a.xy, cur]);
      ctx.setLineDash([]);
      snapMark();
      return true;
    }
    return false;
  }

  /** The clip's geometry where a click would put it (dashed, in the selection colour). */
  drawPastePreview(ctx, T, cur) {
    const { clip } = this.pasteClip;
    const ghost = S.newSketch();
    pasteSketch(ghost, clip, [cur[0] - clip.anchor[0], cur[1] - clip.anchor[1]]);
    ctx.beginPath();
    for (const e of ghost.entities) {
      if (e.type === 'line') { ctx.moveTo(...this.toScreen(S.pointXY(ghost, e.p1))); ctx.lineTo(...this.toScreen(S.pointXY(ghost, e.p2))); }
      else if (e.type === 'circle') { const c = this.toScreen(S.pointXY(ghost, e.c)); ctx.moveTo(c[0] + e.r * this.view.s, c[1]); ctx.arc(c[0], c[1], e.r * this.view.s, 0, Math.PI * 2); }
      else if (e.type === 'arc') { const { c, r, a0, sweep } = S.arcAngles(ghost, e); const cs = this.toScreen(c); const st = [cs[0] + r * this.view.s * Math.cos(a0), cs[1] - r * this.view.s * Math.sin(a0)]; ctx.moveTo(...st); ctx.arc(cs[0], cs[1], r * this.view.s, -a0, -(a0 + sweep), true); }
      else if (e.type === 'spline') this.splinePath(ctx, ghost, e);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    for (const p of S.loosePoints(ghost)) { const [x, y] = this.toScreen([p.x, p.y]); ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill(); }
    if (this.snapAt && (this.snapAt.ref || this.snapAt.on)) {
      const [x, y] = this.toScreen(this.snapAt.xy);
      ctx.strokeStyle = T.hover; ctx.lineWidth = 2;
      ctx.strokeRect(x - 6, y - 6, 12, 12);
    }
  }

  /** Path of a spline (added to the current path). */
  splinePath(ctx, sk, e) {
    let pts;
    try { pts = S.tessSpline(sk, e, 24); } catch { return; }
    pts.forEach((q, i) => { const p = this.toScreen(q); if (i) ctx.lineTo(...p); else ctx.moveTo(...p); });
  }

  outline(ctx, e, color) {
    const sk = this.sk;
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = 3;
    ctx.beginPath();
    if (e.type === 'point' || e.origin) { const [x, y] = this.toScreen([e.x, e.y]); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill(); return; }
    if (e.type === 'line') { ctx.moveTo(...this.toScreen(S.pointXY(sk, e.p1))); ctx.lineTo(...this.toScreen(S.pointXY(sk, e.p2))); }
    else if (e.type === 'circle') { const c = this.toScreen(S.pointXY(sk, e.c)); ctx.arc(c[0], c[1], e.r * this.view.s, 0, Math.PI * 2); }
    else if (e.type === 'spline') this.splinePath(ctx, sk, e);
    else { const { c, r, a0, sweep } = S.arcAngles(sk, e); const cs = this.toScreen(c); ctx.arc(cs[0], cs[1], r * this.view.s, -a0, -(a0 + sweep), true); }
    ctx.stroke();
  }

  tag(ctx, T, [x, y], text, boxed = false) {
    ctx.font = '600 12px ' + T.font;
    const w = ctx.measureText(text).width + 8;
    ctx.fillStyle = T.paper; ctx.fillRect(x + 10, y + 8, w, 18);
    // a box you can type into (0.6 PU.1): outlined like one; the size box opens over it
    if (boxed) { ctx.strokeStyle = T.sel; ctx.lineWidth = 1; ctx.setLineDash([]); ctx.strokeRect(x + 10.5, y + 8.5, w - 1, 17); this.ddAt = [x + 10 + 45, y + 8 + 14]; }
    ctx.fillStyle = T.full; ctx.fillText(text, x + 14, y + 21);
  }

  drawConstraints(ctx, T, bad) {
    const sk = this.sk;
    const stack = new Map();
    ctx.font = '600 12px ' + T.font;
    for (const c of sk.constraints) {
      const def = S.CONSTRAINTS[c.type];
      const isSel = this.sel.has(c.id), isHover = this.hover && this.hover.id === c.id;
      const col = isSel ? T.sel : isHover ? T.hover : bad.has(c.id) ? T.over : null;
      if (def.dim) { this.drawDim(ctx, T, c, col || T.dim); continue; }
      if (c.type === 'coincident' && !isSel && !bad.has(c.id)) continue;
      const anchor = glyphAnchor(sk, c);
      if (!anchor) continue;
      const key = anchor.map((v) => Math.round(v * 1000)).join(',');
      const n = stack.get(key) || 0;
      stack.set(key, n + 1);
      const [x, y] = this.toScreen(anchor);
      const bx = x + 8 + n * 17, by = y + 6;
      ctx.fillStyle = T.paper; ctx.strokeStyle = col || T.glyph; ctx.lineWidth = 1;
      ctx.fillRect(bx, by, 15, 15); ctx.strokeRect(bx + 0.5, by + 0.5, 14, 14);
      ctx.fillStyle = col || T.glyph;
      ctx.textAlign = 'center';
      ctx.fillText(def.glyph, bx + 7.5, by + 12);
      ctx.textAlign = 'left';
      this.glyphBoxes.push({ id: c.id, x: bx, y: by, w: 15, h: 15 });
    }
  }

  drawDim(ctx, T, c, col) {
    const g = dimGeometry(this.sk, c);
    if (!g) return;
    const P = (q) => this.toScreen(q);
    ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 1;
    ctx.beginPath();
    for (const [a, b] of g.lines) { ctx.moveTo(...P(a)); ctx.lineTo(...P(b)); }
    for (const a of g.arcs) {
      const cs = P(a.c);
      ctx.moveTo(cs[0] + Math.cos(-a.a0) * a.r * this.view.s, cs[1] + Math.sin(-a.a0) * a.r * this.view.s);
      ctx.arc(cs[0], cs[1], a.r * this.view.s, -a.a0, -a.a1, a.a1 > a.a0);
    }
    ctx.stroke();
    for (const [tip, dir] of g.arrows) {
      const [x, y] = P(tip);
      const d = [dir[0], -dir[1]], l = Math.hypot(...d) || 1, u = [d[0] / l, d[1] / l];
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - u[0] * 9 - u[1] * 3, y - u[1] * 9 + u[0] * 3); ctx.lineTo(x - u[0] * 9 + u[1] * 3, y - u[1] * 9 - u[0] * 3); ctx.closePath(); ctx.fill();
    }
    const [tx, ty] = P(g.at);
    ctx.font = '600 13px ' + T.font;
    const tw = ctx.measureText(g.text).width;
    const box = { id: c.id, x: tx - tw / 2 - 4, y: ty - 10, w: tw + 8, h: 19 };
    ctx.fillStyle = T.paper; ctx.fillRect(box.x, box.y, box.w, box.h);
    ctx.strokeStyle = col; ctx.strokeRect(box.x + 0.5, box.y + 0.5, box.w - 1, box.h - 1);
    ctx.fillStyle = col;
    ctx.fillText(g.text, tx - tw / 2, ty + 4.5);
    this.dimBoxes.push(box);
  }
}

// ---------------------------------------------------------------- pure helpers

export function parseNumber(s) {
  if (typeof s !== 'string') return null;
  const t = s.replace(/\s+/g, '').replace(/^[⌀ØR]/i, '').replace(/(mm|°)$/i, '');
  if (!/^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(t)) return null;
  const v = Number(t);
  return Number.isFinite(v) ? v : null;
}

function niceNumber(v) { if (!(v > 0)) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); return Math.round(v / p) * p; }

function samePos(sk, a, b) { const p = S.pointXY(sk, a), q = S.pointXY(sk, b); return Math.hypot(p[0] - q[0], p[1] - q[1]) < 1e-6 * Math.max(1, S.extent(sk)); }

function lineDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
  return l > 0 ? Math.abs(dx * (p[1] - a[1]) - dy * (p[0] - a[0])) / l : Math.hypot(p[0] - a[0], p[1] - a[1]);
}

/** Nearest point on a spline (or null when it cannot be built). */
function splineNearest(sk, e, p) {
  try { const c = S.splineCurve(sk, e); return SP.pointAt(c, SP.closestParam(c, p)); } catch { return null; }
}

export function curveDist(sk, e, p) {
  if (e.type === 'spline') { const q = splineNearest(sk, e, p); return q ? Math.hypot(p[0] - q[0], p[1] - q[1]) : Infinity; }
  if (e.type === 'line') {
    const a = S.pointXY(sk, e.p1), b = S.pointXY(sk, e.p2);
    const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1e-300;
    const t = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2));
    return Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy);
  }
  if (e.type === 'circle') { const c = S.pointXY(sk, e.c); return Math.abs(Math.hypot(p[0] - c[0], p[1] - c[1]) - e.r); }
  if (e.type === 'arc') {
    const { c, r, a0, sweep } = S.arcAngles(sk, e);
    let a = Math.atan2(p[1] - c[1], p[0] - c[0]) - a0;
    while (a < 0) a += 2 * Math.PI;
    if (a <= sweep) return Math.abs(Math.hypot(p[0] - c[0], p[1] - c[1]) - r);
    const s = S.pointXY(sk, e.s), q = S.pointXY(sk, e.e);
    return Math.min(Math.hypot(p[0] - s[0], p[1] - s[1]), Math.hypot(p[0] - q[0], p[1] - q[1]));
  }
  return Infinity;
}

function project(sk, e, p) {
  if (e.type === 'spline') return splineNearest(sk, e, p) || p;
  if (e.type === 'line') {
    const a = S.pointXY(sk, e.p1), b = S.pointXY(sk, e.p2);
    const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1e-300;
    const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
    return [a[0] + t * dx, a[1] + t * dy];
  }
  const c = S.pointXY(sk, e.c), r = S.radiusOf(sk, e);
  const d = Math.hypot(p[0] - c[0], p[1] - c[1]) || 1;
  return [c[0] + (p[0] - c[0]) / d * r, c[1] + (p[1] - c[1]) / d * r];
}

function entityBox(sk, e) {
  if (e.type === 'point') return { x0: e.x, y0: e.y, x1: e.x, y1: e.y };
  if (e.type === 'spline') { let q; try { q = S.tessSpline(sk, e, 8); } catch { q = e.pts.map((id) => S.pointXY(sk, id)); } return { x0: Math.min(...q.map((v) => v[0])), y0: Math.min(...q.map((v) => v[1])), x1: Math.max(...q.map((v) => v[0])), y1: Math.max(...q.map((v) => v[1])) }; }
  const pts = e.type === 'line' ? [S.pointXY(sk, e.p1), S.pointXY(sk, e.p2)]
    : e.type === 'circle' ? (() => { const c = S.pointXY(sk, e.c); return [[c[0] - e.r, c[1] - e.r], [c[0] + e.r, c[1] + e.r]]; })()
      : S.tessArc(sk, e, 32);
  return { x0: Math.min(...pts.map((p) => p[0])), y0: Math.min(...pts.map((p) => p[1])), x1: Math.max(...pts.map((p) => p[0])), y1: Math.max(...pts.map((p) => p[1])) };
}

/** Which dimension a dimension-tool selection makes. */
export function pickDimType(sk, refs, at) {
  const ents = refs.map((r) => S.byId(sk, r));
  const kinds = ents.map((e) => (e.type === 'point' ? 'P' : e.type === 'line' ? 'L' : e.type === 'circle' ? 'C' : 'A')).sort().join('');
  if (kinds === 'C') return 'diameter';
  if (kinds === 'A') return 'radius';
  if (kinds === 'L' || kinds === 'PP') {
    // like a drafting dimension: where the label goes decides aligned / horizontal / vertical
    const [a, b] = kinds === 'L' ? [S.pointXY(sk, ents[0].p1), S.pointXY(sk, ents[0].p2)] : [S.pointXY(sk, refs[0]), S.pointXY(sk, refs[1])];
    const x0 = Math.min(a[0], b[0]), x1 = Math.max(a[0], b[0]), y0 = Math.min(a[1], b[1]), y1 = Math.max(a[1], b[1]);
    const slanted = Math.abs(b[0] - a[0]) > 1e-9 && Math.abs(b[1] - a[1]) > 1e-9;
    if (slanted && at) {
      if (at[0] >= x0 && at[0] <= x1 && (at[1] > y1 || at[1] < y0)) return 'hdistance';
      if (at[1] >= y0 && at[1] <= y1 && (at[0] > x1 || at[0] < x0)) return 'vdistance';
    }
    return 'distance';
  }
  if (kinds === 'LP') return 'distance';
  if (kinds === 'LL') return S.applicable(sk, refs).includes('angle') ? 'angle' : 'distance';
  return null;
}

function glyphAnchor(sk, c) {
  const e = S.byId(sk, c.refs[0]);
  const target = c.refs.length > 1 && e && e.type === 'point' ? S.byId(sk, c.refs[1]) : e;
  const at = (x) => {
    if (!x) return null;
    if (x.type === 'point') return [x.x, x.y];
    if (x.type === 'line') { const a = S.pointXY(sk, x.p1), b = S.pointXY(sk, x.p2); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }
    if (x.type === 'spline') { try { const c = S.splineCurve(sk, x), [lo, hi] = SP.domain(c); return SP.pointAt(c, (lo + hi) / 2); } catch { return S.pointXY(sk, x.pts[0]); } }
    const ce = S.pointXY(sk, x.c), r = S.radiusOf(sk, x);
    return [ce[0] + r * 0.7071, ce[1] + r * 0.7071];
  };
  if (c.type === 'midpoint' || (c.type === 'concentric' && e.type === 'point')) return at(e);
  if (c.type === 'tangent' && c.refs.some((r) => S.byId(sk, r)?.type === 'spline')) { const m = S.endMeet(sk, S.byId(sk, c.refs[0]), S.byId(sk, c.refs[1])); if (m) return S.pointXY(sk, m[1]); }
  if (c.type === 'symmetric') { const a = S.pointXY(sk, c.refs[0]), b = S.pointXY(sk, c.refs[1]); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }
  return at(target);
}

/**
 * Where a dimension's label is measured from: the middle of what it measures (centre of a circle,
 * corner of an angle). Labels are stored as an offset `off` from it, so they travel with the geometry.
 */
export function dimAnchor(sk, c) {
  const P = (id) => S.pointXY(sk, id);
  const E = (id) => S.byId(sk, id);
  const m = S.matchSig(sk, c.type, c.refs);
  if (!m) return null;
  const r = c.refs;
  if (c.type === 'radius' || c.type === 'diameter' || (c.type === 'offset' && m.sig === 'RR')) return P(E(r[0]).c);
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  if (c.type === 'angle') {
    const l1 = E(r[0]), l2 = E(r[1]);
    const a1 = P(l1.p1), b1 = P(l1.p2), a2 = P(l2.p1), b2 = P(l2.p2);
    const d1 = [b1[0] - a1[0], b1[1] - a1[1]], d2 = [b2[0] - a2[0], b2[1] - a2[1]];
    const den = d1[0] * d2[1] - d1[1] * d2[0];
    if (Math.abs(den) < 1e-12) return mid(a1, a2);
    const t = ((a2[0] - a1[0]) * d2[1] - (a2[1] - a1[1]) * d2[0]) / den;
    return [a1[0] + d1[0] * t, a1[1] + d1[1] * t];
  }
  if (m.sig === 'L') return mid(P(E(r[0]).p1), P(E(r[0]).p2));
  if (m.sig === 'PP') return mid(P(r[0]), P(r[1]));
  const p = m.sig === 'PL' ? P(r[0]) : P(E(r[1]).p1);
  const L = E(m.sig === 'PL' ? r[1] : r[0]);
  return mid(p, mid(P(L.p1), P(L.p2)));
}

/** Put a dimension's label at p (stored relative to its anchor). */
export function setLabel(sk, c, p) {
  const a = dimAnchor(sk, c);
  if (!a) return;
  c.off = [p[0] - a[0], p[1] - a[1]];
  delete c.at;
}

/** Lines, arcs, arrowheads and the label for a dimension, all in sketch coordinates. */
export function dimGeometry(sk, c) {
  if (c.off) { const a = dimAnchor(sk, c); if (a) c = { ...c, at: [a[0] + c.off[0], a[1] + c.off[1]] }; }
  const P = (id) => S.pointXY(sk, id);
  const E = (id) => S.byId(sk, id);
  const m = S.matchSig(sk, c.type, c.refs);
  if (!m) return null;
  const sig = m.sig, r = c.refs;
  const scale = Math.max(1, S.extent(sk));
  const off = scale * 0.08;
  const out = { lines: [], arcs: [], arrows: [], text: '', at: null };
  const v = fmt(c.value, 3);
  if (c.type === 'radius' || c.type === 'diameter') {
    const e = E(r[0]), ce = P(e.c), rad = S.radiusOf(sk, e);
    let dir = c.at ? [c.at[0] - ce[0], c.at[1] - ce[1]] : [0.7071, 0.7071];
    if (e.type === 'arc' && !c.at) { const { a0, sweep } = S.arcAngles(sk, e); dir = [Math.cos(a0 + sweep / 2), Math.sin(a0 + sweep / 2)]; }
    const dl = Math.hypot(...dir) || 1; dir = [dir[0] / dl, dir[1] / dl];
    const edge = [ce[0] + dir[0] * rad, ce[1] + dir[1] * rad];
    const at = c.at || [ce[0] + dir[0] * (rad + off), ce[1] + dir[1] * (rad + off)];
    if (c.type === 'radius') { out.lines.push([ce, edge], [edge, at]); out.arrows.push([edge, dir]); out.text = 'R' + v; }
    else { const back = [ce[0] - dir[0] * rad, ce[1] - dir[1] * rad]; out.lines.push([back, edge], [edge, at]); out.arrows.push([edge, dir], [back, [-dir[0], -dir[1]]]); out.text = '⌀' + v; }
    out.at = at;
    return out;
  }
  if (c.type === 'angle') {
    const l1 = E(r[0]), l2 = E(r[1]);
    const a1 = P(l1.p1), b1 = P(l1.p2), a2 = P(l2.p1), b2 = P(l2.p2);
    const d1 = [b1[0] - a1[0], b1[1] - a1[1]], d2 = [b2[0] - a2[0], b2[1] - a2[1]];
    const den = d1[0] * d2[1] - d1[1] * d2[0];
    if (Math.abs(den) < 1e-12) return null;
    const t = ((a2[0] - a1[0]) * d2[1] - (a2[1] - a1[1]) * d2[0]) / den;
    const X = [a1[0] + d1[0] * t, a1[1] + d1[1] * t];
    const far = (a, b) => (Math.hypot(a[0] - X[0], a[1] - X[1]) > Math.hypot(b[0] - X[0], b[1] - X[1]) ? a : b);
    const f1 = far(a1, b1), f2 = far(a2, b2);
    const ang1 = Math.atan2(f1[1] - X[1], f1[0] - X[0]), ang2 = Math.atan2(f2[1] - X[1], f2[0] - X[0]);
    let s = ang1, e = ang2, d = e - s;
    while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    if (d < 0) { s = ang2; d = -d; }
    const rad = c.at ? Math.hypot(c.at[0] - X[0], c.at[1] - X[1]) : Math.min(Math.hypot(f1[0] - X[0], f1[1] - X[1]), Math.hypot(f2[0] - X[0], f2[1] - X[1])) * 0.6 || off;
    out.arcs.push({ c: X, r: rad, a0: s, a1: s + d });
    const mid = s + d / 2;
    out.at = c.at || [X[0] + Math.cos(mid) * rad, X[1] + Math.sin(mid) * rad];
    out.text = v + '°';
    out.arrows.push([[X[0] + Math.cos(s) * rad, X[1] + Math.sin(s) * rad], [Math.sin(s), -Math.cos(s)]], [[X[0] + Math.cos(s + d) * rad, X[1] + Math.sin(s + d) * rad], [-Math.sin(s + d), Math.cos(s + d)]]);
    return out;
  }
  if (c.type === 'offset' && sig === 'RR') {
    const a = E(r[0]), b = E(r[1]), ce = P(a.c), ra = S.radiusOf(sk, a), rb = S.radiusOf(sk, b);
    let dir = c.at ? [c.at[0] - ce[0], c.at[1] - ce[1]] : [0.7071, 0.7071];
    if (b.type === 'arc' && !c.at) { const { a0, sweep } = S.arcAngles(sk, b); dir = [Math.cos(a0 + sweep / 2), Math.sin(a0 + sweep / 2)]; }
    const dl = Math.hypot(...dir) || 1; dir = [dir[0] / dl, dir[1] / dl];
    const pa = [ce[0] + dir[0] * ra, ce[1] + dir[1] * ra], pb = [ce[0] + dir[0] * rb, ce[1] + dir[1] * rb];
    out.lines.push([pa, pb]);
    out.arrows.push([pb, [pb[0] - pa[0], pb[1] - pa[1]]], [pa, [pa[0] - pb[0], pa[1] - pb[1]]]);
    out.at = c.at || [(pa[0] + pb[0]) / 2 + dir[0] * off * 0.3, (pa[1] + pb[1]) / 2 + dir[1] * off * 0.3];
    out.text = v;
    return out;
  }
  if ((c.type === 'distance' || c.type === 'offset') && (sig === 'PL' || sig === 'LL')) {
    const p = sig === 'PL' ? P(r[0]) : P(E(r[1]).p1);
    const L = E(sig === 'PL' ? r[1] : r[0]);
    const a = P(L.p1), b = P(L.p2);
    const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1e-300;
    const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / l2;
    const q = [a[0] + t * dx, a[1] + t * dy];
    out.lines.push([p, q]);
    if (t < 0 || t > 1) out.lines.push([t < 0 ? a : b, q]);
    const u = [q[0] - p[0], q[1] - p[1]];
    out.arrows.push([q, u], [p, [-u[0], -u[1]]]);
    out.at = c.at || [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    if (c.at) out.lines.push([[(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], c.at]);
    out.text = v;
    return out;
  }
  // point-to-point / line length: aligned, horizontal or vertical
  const [a, b] = sig === 'L' ? [P(E(r[0]).p1), P(E(r[0]).p2)] : [P(r[0]), P(r[1])];
  if (c.type === 'hdistance' || c.type === 'vdistance') {
    const k = c.type === 'hdistance' ? 1 : 0;   // the coordinate the dimension line sits at
    const lvl = c.at ? c.at[k] : Math.max(a[k], b[k]) + off;
    const A = k === 1 ? [a[0], lvl] : [lvl, a[1]], B = k === 1 ? [b[0], lvl] : [lvl, b[1]];
    out.lines.push([a, A], [b, B], [A, B]);
    const u = [B[0] - A[0], B[1] - A[1]];
    out.arrows.push([A, [-u[0], -u[1]]], [B, u]);
    out.at = c.at || [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    out.text = v;
    return out;
  }
  const d = [b[0] - a[0], b[1] - a[1]], l = Math.hypot(...d) || 1;
  const n = [-d[1] / l, d[0] / l];
  const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const o = c.at ? (c.at[0] - a[0]) * n[0] + (c.at[1] - a[1]) * n[1] : off;
  const A = [a[0] + n[0] * o, a[1] + n[1] * o], B = [b[0] + n[0] * o, b[1] + n[1] * o];
  out.lines.push([a, A], [b, B], [A, B]);
  out.arrows.push([A, [-d[0], -d[1]]], [B, d]);
  out.at = c.at || [mid[0] + n[0] * o, mid[1] + n[1] * o];
  out.text = v;
  return out;
}
