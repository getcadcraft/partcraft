/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/look.js — how a view looks and what it cuts away (0.7 TP.5; DOM-free): a style, a section plane or a box cut-away
 * (with the cut faces capped and hatched in line art), and the magnifier (a round lens that shows a zoomed detail or the
 * inside). Saved per view as `view.look`.
 *
 *   look = { style: 'shaded'|'outlined'|'flat'|'lines'|'xray',
 *            section: null | { n: [x,y,z] (unit; the side it points to is cut away), c (mm: points with n·p > c go) },
 *            box: null | { min: [x,y,z], max: [x,y,z] }   everything inside the box is cut away (a corner cut, a window),
 *            magnifier: null | { at: [u, v] (lens centre, picture heights from the bottom-left), r (radius, picture heights),
 *                                 target: [u, v] (what it looks at), zoom (1.5…10), mode: 'zoom'|'inside' } }
 *   readLook(raw) (registered with manual.js) · defaultLook() · cutsOf(look) → hlr.js cuts or null
 *   sectionFor(box, axis 'x'|'y'|'z', at 0…1, flip) → section through a box of the model
 *   magnified(view, look, aspect) → { view (camera zoomed on the target), clip: { circle } }   for the lens's line art
 *   lensArt(m, meshes, view, { W, H, lineArt }) → display items: the lens (a clipped group) for lineart.js
 */
import { t } from '../i18n.js';
import { registerReaders, ManualError } from './manual.js';
import { projector } from './camera.js';
import { add, sub, mul, norm, dot } from './m4.js';

export const STYLES = ['shaded', 'outlined', 'flat', 'lines', 'xray'];
const fin = (v, lim = 1e8) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= lim;
const v3 = (v, lim = 1e8) => Array.isArray(v) && v.length === 3 && v.every((x) => fin(x, lim));
const v2 = (v, lim = 10) => Array.isArray(v) && v.length === 2 && v.every((x) => fin(x, lim));
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const bad = () => { throw new Error('look'); };

export const defaultLook = () => ({ style: 'outlined', section: null, box: null, magnifier: null });

export function readLook(raw) {
  if (!isObj(raw)) bad();
  const L = defaultLook();
  if (raw.style !== undefined) { if (!STYLES.includes(raw.style)) bad(); L.style = raw.style; }
  if (raw.section !== undefined && raw.section !== null) {
    const s = raw.section;
    if (!isObj(s) || !v3(s.n, 2) || Math.hypot(...s.n) < 1e-9 || !fin(s.c)) bad();
    L.section = { n: norm(s.n), c: s.c };
  }
  if (raw.box !== undefined && raw.box !== null) {
    const b = raw.box;
    if (!isObj(b) || !v3(b.min) || !v3(b.max) || !b.min.every((x, k) => x < b.max[k])) bad();
    L.box = { min: [...b.min], max: [...b.max] };
  }
  if (raw.magnifier !== undefined && raw.magnifier !== null) {
    const g = raw.magnifier;
    if (!isObj(g) || !v2(g.at) || !v2(g.target) || !fin(g.r, 1) || g.r < 0.02 || g.r > 0.5 || !fin(g.zoom, 10) || g.zoom < 1.5 || !['zoom', 'inside'].includes(g.mode)) bad();
    L.magnifier = { at: [...g.at], target: [...g.target], r: g.r, zoom: g.zoom, mode: g.mode };
  }
  return L;
}
registerReaders({ look: (raw) => { try { return readLook(raw); } catch { throw new ManualError('bad_view', t('illustrate.file.bad_view')); } } });

/** The cut for hidden-line removal (hlr.js): what is removed and the faces left where it was cut. */
export function cutsOf(look) {
  if (!look) return null;
  if (look.section) {
    const { n, c } = look.section;
    return { removed: (p) => n[0] * p[0] + n[1] * p[1] + n[2] * p[2] > c + 1e-9, faces: [{ n, c, region: () => true }] };
  }
  if (look.box) {
    const { min, max } = look.box, e = 1e-9;
    const inside = (p) => p[0] > min[0] + e && p[0] < max[0] - e && p[1] > min[1] + e && p[1] < max[1] - e && p[2] > min[2] + e && p[2] < max[2] - e;
    const within = (p, skip) => [0, 1, 2].every((k) => k === skip || (p[k] >= min[k] - e && p[k] <= max[k] + e));
    const faces = [];
    for (let k = 0; k < 3; k++) {
      const n = [0, 0, 0]; n[k] = 1;
      faces.push({ n, c: max[k], region: (p) => within(p, k) }, { n: n.map((x) => -x), c: -min[k], region: (p) => within(p, k) });
    }
    return { removed: inside, faces };
  }
  return null;
}

/** A section through a model box: axis 'x' | 'y' | 'z', at 0…1 of the box along it; flip keeps the other side. */
export function sectionFor(box, axis = 'x', at = 0.5, flip = false) {
  const k = { x: 0, y: 1, z: 2 }[axis] ?? 0;
  const n = [0, 0, 0]; n[k] = flip ? -1 : 1;
  const c = box.min[k] + (box.max[k] - box.min[k]) * Math.max(0, Math.min(1, at));
  return { n, c: flip ? -c : c };
}

/** The lens's own view: the same scene, the camera narrowed on the target (zoom), or the inside (x-ray: nothing hides). */
export function magnified(view, look, aspect) {
  const g = look.magnifier, cam = view.camera;
  const P = projector(cam, aspect);
  const ray = P.ray(g.target[0], g.target[1]);
  // the target point at the camera's target depth
  const d = dot(sub(cam.target, ray.o), ray.d);
  const centre = add(ray.o, mul(ray.d, d));
  const shift = sub(centre, cam.target);
  // the lens is 2r picture heights across and shows the target `zoom` times bigger than the picture does
  const zcam = { ...cam, pos: add(cam.pos, shift), target: centre, height: cam.height * 2 * g.r / g.zoom, fov: cam.type === 'persp' ? Math.min(170, (cam.fov || 35) * 2 * g.r / g.zoom) : cam.fov };
  const insts = { ...view.insts };
  if (g.mode === 'inside') for (const id of Object.keys(insts)) if (insts[id]?.ghost) insts[id] = { ...insts[id], ghost: false };
  return { view: { ...view, camera: zcam, insts, annots: [], table: null, look: { ...look, magnifier: null } }, xray: g.mode === 'inside' };
}

/**
 * The lens for a W × H mm picture: a white disc, the magnified line art clipped to it, a ring, and a thin leader circle on
 * the target. lineArt is lineart.js's (passed in: look.js does not import it).
 */
export function lensArt(m, meshes, view, { W, H, lineArt, opts = {} }) {
  const g = view.look?.magnifier;
  if (!g) return [];
  const aspect = W / H, R = g.r * H, cx = g.at[0] * H, cy = g.at[1] * H;
  const mv = magnified(view, view.look, aspect);
  // the lens picture is a square of side 2R centred on the lens
  const art = lineArt(m, meshes, mv.view, { ...opts, W: 2 * R, H: 2 * R, annotations: false, table: false, trails: false, hidden: opts.hidden, cuts: cutsOf(view.look), xray: mv.xray });
  const items = art.items.map((it) => shift(it, cx - R, cy - R));
  const tx = g.target[0] * H, ty = g.target[1] * H, tr = R / g.zoom;
  return [
    { t: 'circle', c: [tx, ty], r: tr, stroke: '#1b1b1b', width: 0.18, dash: [1, 0.6], ref: 'magnifier' },
    { t: 'path', pts: [[tx + (cx - tx) * tr / Math.hypot(cx - tx, cy - ty || 1e-9), ty + (cy - ty) * tr / Math.hypot(cx - tx, cy - ty || 1e-9)], [cx - (cx - tx) * R / Math.hypot(cx - tx, cy - ty || 1e-9), cy - (cy - ty) * R / Math.hypot(cx - tx, cy - ty || 1e-9)]], stroke: '#1b1b1b', width: 0.18, ref: 'magnifier' },
    { t: 'group', clip: { circle: [cx, cy, R] }, items: [{ t: 'circle', c: [cx, cy], r: R, fill: '#ffffff' }, ...items], ref: 'magnifier' },
    { t: 'circle', c: [cx, cy], r: R, stroke: '#1b1b1b', width: 0.5, ref: 'magnifier' },
  ];
}
function shift(it, dx, dy) {
  if (it.t === 'path') return { ...it, pts: it.pts.map((p) => [p[0] + dx, p[1] + dy]) };
  if (it.t === 'circle') return { ...it, c: [it.c[0] + dx, it.c[1] + dy] };
  if (it.t === 'text' || it.t === 'image') return { ...it, x: it.x + dx, y: it.y + dy };
  if (it.t === 'group') return { ...it, items: it.items.map((k) => shift(k, dx, dy)) };
  return it;
}
