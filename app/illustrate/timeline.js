/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/timeline.js — the manual's animation (0.7 TP.6; DOM-free), built on AN.1's model rather than a fork of it: the keys
 * are a `cadcraft-anim` v1 object (anim.js, a byte-identical copy of ModelCraft's render/anim.js, owner `anim`), evaluated by
 * anim.js's own functions. This module only adds the manual's properties to it.
 *
 *   m.anim     null | the cadcraft-anim object. Placements are anim.js object tracks on path [n]; a part's visibility, opacity and
 *              colour are property tracks on target 'obj:<n>' (props 'visible' [0|1] held, 'opacity' [0…1], 'color' [r,g,b]);
 *              the camera is anim.js's camera track ({eye, target, fov, persp, height}).
 *   m.animIds  { next, of: { instance id: n } } — anim.js paths are numbers: each instance gets one once (like balloon numbers,
 *              never given again), so keys stay with their instance through Update (TP.10).
 *
 *   numberFor(m, id) · instOfNumber(m, n)
 *   keyParts(m, view, t, ids) · keyCamera(m, camera, t) · keyScene(m, view, t)       (inside Doc.edit; one undo step each)
 *   recordExplode(m, view, { start, step }) → keys: one key per explode step (from the explode's own steps, as explode.js plays them)
 *   viewsAsStops(m, ids, { start, move, hold }) → the views in order as camera stops, with their parts' looks
 *   frameAt(m, t, base) → { camera, world: Map(id → matrix), state(id) → { hide, ghost, opacity, color } }   for the view
 *   keysOn(m, id) → number of keys an instance has · dropInstance(m, id) (Update) · readAnimParts(raw, ctx) (registered)
 */
import { registerReaders, worldOf, instState, readCamera, ManualError } from './manual.js';
import * as A from './anim.js';
import { t } from '../i18n.js';
import { partColour } from './scene3d.js';

const HEX = (rgb) => '#' + rgb.map((x) => Math.max(0, Math.min(255, Math.round(x * 255))).toString(16).padStart(2, '0')).join('');
const RGB = (hex) => [1, 3, 5].map((k) => parseInt(hex.slice(k, k + 2), 16) / 255);

export function numberFor(m, id) {
  m.animIds ||= { next: 1, of: {} };
  if (m.animIds.of[id] === undefined) m.animIds.of[id] = m.animIds.next++;
  return m.animIds.of[id];
}
export function instOfNumber(m, n) {
  for (const [id, k] of Object.entries(m.animIds?.of || {})) if (k === n) return id;
  return null;
}
const animOf = (m) => m.anim || A.emptyAnim(1, 30);   // as long as its keys reach (anim.js grows it)
const camOf = (c) => ({ eye: [...c.pos], target: [...c.target], fov: c.fov || 35, persp: c.type === 'persp', height: c.height || 100 });
const manualCam = (c, up = [0, 1, 0]) => readCamera({ type: c.persp ? 'persp' : 'ortho', pos: c.eye, target: c.target, up, height: c.height, fov: c.fov });

/** Key the given parts as the view shows them: place, shown or not, opacity, colour. */
export function keyParts(m, view, time, ids, { ease = 'smooth' } = {}) {
  const world = worldOf(m, view);
  let a = animOf(m);
  for (const id of ids) {
    const inst = m.instances.find((i) => i.id === id);
    if (!inst) continue;
    const n = numberFor(m, id), st = instState(view, id);
    a = A.setObjectKey(a, [n], inst.name, time, world.get(id), ease);
    a = A.setPropKey(a, 'obj:' + n, 'visible', time, [st.hide ? 0 : 1], 'hold', { name: inst.name });
    a = A.setPropKey(a, 'obj:' + n, 'opacity', time, [st.ghost ? 0.22 : st.opacity], ease === 'hold' ? 'hold' : 'linear', { name: inst.name });
    if (st.color || A.findProp(a, 'obj:' + n, 'color') >= 0) {
      // a colour track that starts later than the part's first key starts from the part's own colour there
      const first = a.objects.find((o) => o.path[0] === n)?.keys[0]?.t;
      if (A.findProp(a, 'obj:' + n, 'color') < 0 && first !== undefined && first < time) a = A.setPropKey(a, 'obj:' + n, 'color', first, RGB(partColour(inst.part)), 'linear', { name: inst.name });
      a = A.setPropKey(a, 'obj:' + n, 'color', time, RGB(st.color || partColour(inst.part)), 'linear', { name: inst.name });
    }
  }
  m.anim = a;
  return a;
}
export function keyCamera(m, camera, time, ease = 'smooth') { m.anim = A.setCameraKey(animOf(m), time, camOf(camera), ease); return m.anim; }
export const keyScene = (m, view, time) => { keyParts(m, view, time, m.instances.map((i) => i.id)); return keyCamera(m, view.camera, time); };

/** One key per step of the view's exploded view: assembled at `start`, each step's end `step` seconds later. */
export function recordExplode(m, view, { start = 0, step = 1 } = {}) {
  const ex = view.explode && m.explodes.find((e) => e.id === view.explode.ref);
  if (!ex || !ex.steps.length) throw new ManualError('no_explode', t('illustrate.anim.no_explode'));
  const n = ex.steps.length, moved = [...new Set(ex.steps.flatMap((s) => s.insts))];
  for (let k = 0; k <= n; k++) keyParts(m, { ...view, explode: { ref: ex.id, t: k / n } }, start + k * step, moved, { ease: 'linear' });
  return n + 1;
}
/** The views in order as camera stops: a move of `move` seconds to each, then `hold` seconds on it; their parts' looks keyed too. */
export function viewsAsStops(m, ids, { start = 0, move = 2, hold = 1.5 } = {}) {
  let time = start, count = 0;
  for (const id of ids) {
    const v = m.views.find((x) => x.id === id);
    if (!v) continue;
    if (count) time += move;
    // arrive and hold still ('hold'), then leave easing out and into the next stop ('stop': no speed at either key)
    keyCamera(m, v.camera, time, 'hold');
    keyParts(m, v, time, m.instances.map((i) => i.id), { ease: 'hold' });
    time += hold;
    keyCamera(m, v.camera, time, 'stop');
    keyParts(m, v, time, m.instances.map((i) => i.id), { ease: 'stop' });
    count++;
  }
  return count;
}

/** What the view shows at time t: base = the scene the animation plays over (keys win where there are any). */
export function frameAt(m, time, base) {
  const a = m.anim;
  const world = worldOf(m, base);
  if (!a) return { camera: base.camera, world, state: (id) => instState(base, id) };
  for (const p of A.posesAt(a, time)) { const id = instOfNumber(m, p.path[0]); if (id && p.path.length === 1) world.set(id, p.m); }
  const vals = A.propsAt(a, time);
  const cam = A.cameraAt(a, time);
  const state = (id) => {
    const s = instState(base, id), n = m.animIds?.of[id];
    if (n === undefined) return s;
    const vis = vals.get('obj:' + n + '|visible'), op = vals.get('obj:' + n + '|opacity'), col = vals.get('obj:' + n + '|color');
    const out = { ...s };
    if (vis) out.hide = vis[0] < 0.5;
    if (op) { out.opacity = Math.max(0, Math.min(1, op[0])); out.ghost = false; }
    if (col) out.color = HEX(col);
    return out;
  };
  return { camera: cam ? manualCam(cam, base.camera.up) : base.camera, world, state };
}

export function keysOn(m, id) {
  const n = m.animIds?.of[id];
  if (n === undefined || !m.anim) return 0;
  const o = m.anim.objects.find((x) => x.path.length === 1 && x.path[0] === n);
  return (o ? o.keys.length : 0) + (m.anim.props || []).filter((p) => p.target === 'obj:' + n).reduce((s, p) => s + p.keys.length, 0);
}
/** An instance leaves (Update): its tracks go; its number is not given again. */
export function dropInstance(m, id) {
  const n = m.animIds?.of[id];
  if (n === undefined) return;
  if (m.anim) {
    m.anim.objects = m.anim.objects.filter((x) => !(x.path[0] === n));
    if (m.anim.props) { m.anim.props = m.anim.props.filter((p) => p.target !== 'obj:' + n); if (!m.anim.props.length) delete m.anim.props; }
    if (m.anim.rests) { m.anim.rests = m.anim.rests.filter((r) => r.path[0] !== n); if (!m.anim.rests.length) delete m.anim.rests; }
  }
  delete m.animIds.of[id];
}

/** The file's anim and animIds (untrusted): anim.js cleans the animation; every number must be an instance's. */
export function readAnimParts(raw, { instIds }) {
  const ids = raw.animIds;
  let animIds = null;
  if (ids !== undefined && ids !== null) {
    if (typeof ids !== 'object' || !Number.isInteger(ids.next) || ids.next < 1 || ids.next > 1e6 || typeof ids.of !== 'object' || !ids.of) throw new Error('animIds');
    const of = {}, seen = new Set();
    for (const [id, n] of Object.entries(ids.of)) {
      if (id === '__proto__' || !instIds.has(id) || !Number.isInteger(n) || n < 1 || n >= ids.next || seen.has(n)) throw new Error('animIds');
      seen.add(n); of[id] = n;
    }
    animIds = { next: ids.next, of };
  }
  let anim = null;
  if (raw.anim !== undefined && raw.anim !== null) {
    anim = A.cleanAnim(raw.anim);
    if (!anim) throw new Error('anim');
    const known = new Set(Object.values(animIds?.of || {}));
    const okPath = (p) => p.length === 1 && known.has(p[0]);
    if (!anim.objects.every((o) => okPath(o.path)) || !(anim.props || []).every((p) => !p.target.startsWith('obj:') || okPath(p.target.slice(4).split('/').map(Number)))) throw new Error('anim');
  }
  return { anim, animIds };
}
registerReaders({ anim: readAnimParts });
