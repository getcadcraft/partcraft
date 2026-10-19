/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handles.js — drag handles on the selected feature in the 3D view (0.6 PU.2): an arrow on an Extrude's end face that drags
 * its depth, a curved arrow at the end of a Revolve that drags its angle, each with the value in a box beside it. The maths
 * (where the handle sits, what a drag gives) is handle-math.js; partcraft.js decides which feature has one and owns the
 * part (each drag is one undo step there).
 *
 *   const hd = new FeatureHandles(view, stageEl, { t, fmt, onDragStart(h), onDrag(h, v), onDragEnd(h, v, v0), onCancel(h, v0), onType(h, text) });
 *   hd.show(h | null)   the handle for handle-math.js's description, or none; kept (not reset) while a drag runs
 *   hd.update()         after the camera moves: the box follows the tip on screen (partcraft.js calls it from view.onRender)
 *   hd.dragging         true while a drag runs; hd.box = the value box (an <input>)
 *   hd.cancel()         Esc during a drag: the old value comes back
 *
 * The pointer: hovering the handle turns the orbit off (so a press grabs it instead of turning the view) and shows a grab
 * cursor; a press on it becomes a drag after 4 px (a plain click still picks what is under it), and the drag's moves and
 * release are taken before the view's own listeners (capture phase), so no pick or orbit happens. The value box: type a number (or "=expression") and Enter — onType hands it to the feature's main box.
 */
import { THREE } from './view3d.js';
import * as HM from './handle-math.js';

const tv = (a) => new THREE.Vector3(a[0], a[1], a[2]);

export class FeatureHandles {
  constructor(view, stage, hooks) {
    this.view = view;
    this.stage = stage;
    this.hooks = hooks;
    this.h = null;
    this.drag = null;
    this.hover = false;
    this.group = null;
    this.box = document.createElement('input');
    Object.assign(this.box, { type: 'text', className: 'pc-input pc-handle-val', hidden: true, inputMode: 'decimal', autocomplete: 'off', spellcheck: false });
    this.box.dataset.handleBox = '';
    this.box.addEventListener('focus', () => this.box.select());
    this.box.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); const v = this.box.value.trim(); this.box.blur(); if (this.h && v && v !== this.shown) this.hooks.onType(this.h, v); }
      else if (e.key === 'Escape') { e.preventDefault(); this.box.value = this.shown; this.box.blur(); }
    });
    this.box.addEventListener('blur', () => { if (this.h && !this.drag) this.box.value = this.shown; });
    stage.append(this.box);
    const c = view.canvas;
    c.addEventListener('pointermove', (e) => this.move(e), { capture: true });
    c.addEventListener('pointerdown', (e) => this.down(e), { capture: true });
    c.addEventListener('pointerup', (e) => this.up(e), { capture: true });
    c.addEventListener('pointercancel', () => { if (this.drag) this.cancel(); }, { capture: true });
  }

  get dragging() { return !!this.drag; }

  /** The handle's size in model units: about 7 % of the part, at least 2. */
  size() {
    const b = this.view.box;
    const ext = b ? Math.max(b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z) : 100;
    return Math.max(2, (Number.isFinite(ext) ? ext : 100) * 0.07);
  }

  show(h) {
    this.h = h;
    if (!h) { this.view.setOverlay('pc-handle', null); this.group = null; this.box.hidden = true; this.setHover(false); return; }
    const k = this.size(), col = this.view.colors.pick, g = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({ color: col, depthTest: false, transparent: true, opacity: 0.95 });
    const tip = HM.handleTip(h);
    let along;
    if (h.kind === 'extrude') {
      along = tv(h.dir);
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(k * 0.07, k * 0.07, k * 0.9, 10), mat);
      shaft.position.copy(tv(tip).add(along.clone().multiplyScalar(k * 0.45)));
      shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), along);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(k * 0.22, k * 0.5, 16), mat);
      cone.position.copy(tv(tip).add(along.clone().multiplyScalar(k * 1.15)));
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), along);
      g.add(shaft, cone);
      this.anchor = tv(tip).add(along.clone().multiplyScalar(k * 1.5));
    } else {
      // along the circle the tip moves on as the angle grows: d × (tip − axis)
      const { o, d } = h.axis, r = HM.handleTip(h);
      const c = tv(o).add(tv(d).multiplyScalar(tv(d).dot(tv(r).sub(tv(o)))));
      along = tv(d).cross(tv(r).sub(c)).normalize();
      const rad = tv(r).sub(c).length();
      const pts = [];
      for (let i = -6; i <= 0; i++) pts.push(tv(HM.turn(r, h.axis, (i * k * 0.12 / Math.max(rad, 1e-6)) * 180 / Math.PI)));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, k * 0.07, 8, false), mat);
      const cone = new THREE.Mesh(new THREE.ConeGeometry(k * 0.22, k * 0.5, 16), mat);
      cone.position.copy(tv(r).add(along.clone().multiplyScalar(k * 0.25)));
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), along);
      g.add(tube, cone);
      this.anchor = tv(r).add(tv(r).sub(c).normalize().multiplyScalar(k * 1.2));   // outward from the axis: clear of the arrow
    }
    // a larger, invisible grip around the arrow: easier to catch than its thin shaft
    const grip = new THREE.Mesh(new THREE.SphereGeometry(k * 0.55, 12, 8), new THREE.MeshBasicMaterial({ visible: false }));
    grip.position.copy(tv(tip).add(along.clone().multiplyScalar(h.kind === 'extrude' ? k * 0.8 : 0)));
    g.add(grip);
    g.renderOrder = 10;
    g.userData.handle = true;
    this.group = g;
    this.view.setOverlay('pc-handle', g);
    this.shown = this.hooks.fmt(h.value) + (h.kind === 'extrude' ? ' mm' : '°');
    if (document.activeElement !== this.box) this.box.value = this.shown;
    this.box.setAttribute('aria-label', this.hooks.t(h.kind === 'extrude' ? 'app.handle.depth_label' : 'app.handle.angle_label'));
    this.box.title = this.hooks.t('app.handle.box_title');
    this.box.hidden = false;
    this.update();
  }

  /** Put the value box beside the handle on screen. */
  update() {
    if (!this.h || !this.anchor) return;
    const v = this.view, p = this.anchor.clone().project(v.camera), r = v.canvas.getBoundingClientRect(), s = this.stage.getBoundingClientRect();
    const x = (p.x + 1) / 2 * r.width + (r.left - s.left), y = (1 - p.y) / 2 * r.height + (r.top - s.top);
    const inside = p.z > -1 && p.z < 1 && x > -40 && y > -20 && x < s.width + 40 && y < s.height + 20;
    this.box.style.left = Math.round(Math.max(4, Math.min(x + 8, s.width - 90))) + 'px';
    this.box.style.top = Math.round(Math.max(4, Math.min(y - 12, s.height - 30))) + 'px';
    this.box.hidden = !inside;
  }

  hit(e) {
    if (!this.group) return false;
    const ray = this.view.ray(e.clientX, e.clientY);
    return ray.intersectObject(this.group, true).length > 0;
  }

  setHover(on) {
    if (on === this.hover) return;
    this.hover = on;
    this.view.controls.enabled = !on;
    this.view.canvas.style.cursor = on ? 'grab' : '';
  }

  move(e) {
    // a press on the handle becomes a drag once the pointer moves 4 px; a plain click stays a click (it picks what is under it)
    if (this.press && !this.drag) {
      if (Math.hypot(e.clientX - this.press.x, e.clientY - this.press.y) <= 4) return;
      const p = this.press;
      this.press = null;
      this.view.canvas.setPointerCapture?.(p.id);
      this.drag = { h: p.h, v0: p.h.value, v: p.h.value, t0: p.t0 };
      this.view.canvas.style.cursor = 'grabbing';
      this.hooks.onDragStart(p.h);
    }
    if (this.drag) {
      e.stopImmediatePropagation();
      const ray = this.view.ray(e.clientX, e.clientY).ray, ro = ray.origin.toArray(), rd = ray.direction.toArray();
      const h = this.drag.h;
      let v;
      if (h.kind === 'extrude') { const t = HM.axisParam(h.base, h.dir, ro, rd); if (t === null) return; v = HM.dragExtrude(h, this.drag.v0, this.drag.t0, t); }
      else v = HM.dragRevolve(h, this.drag.v0, ro, rd, this.drag.v);
      if (v === this.drag.v) return;
      this.drag.v = v;
      this.box.value = this.hooks.fmt(v) + (h.kind === 'extrude' ? ' mm' : '°');
      this.hooks.onDrag(h, v);
      return;
    }
    if (e.buttons) return;
    this.setHover(this.hit(e));
  }

  down(e) {
    this.press = null;
    if (e.button !== 0 || !this.h || !this.hit(e)) return;
    const h = this.h, ray = this.view.ray(e.clientX, e.clientY).ray;
    const t0 = h.kind === 'extrude' ? HM.axisParam(h.base, h.dir, ray.origin.toArray(), ray.direction.toArray()) : 0;
    if (t0 === null) return;
    this.view.controls.enabled = false;   // this press may become a drag: the view must not turn (its listener runs after this one)
    this.press = { h, t0, x: e.clientX, y: e.clientY, id: e.pointerId };
  }

  up(e) {
    if (this.press) { this.press = null; this.view.controls.enabled = !this.hover; }
    if (!this.drag) return;
    e.stopImmediatePropagation();
    const { h, v, v0 } = this.drag;
    this.drag = null;
    this.view.canvas.style.cursor = this.hover ? 'grab' : '';
    this.hooks.onDragEnd(h, v, v0);
  }

  cancel() {
    if (!this.drag) return false;
    const { h, v0 } = this.drag;
    this.drag = null;
    this.view.canvas.style.cursor = '';
    this.hooks.onCancel(h, v0);
    return true;
  }
}
