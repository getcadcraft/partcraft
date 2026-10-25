/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/camera.js — a manual camera as a projection onto the picture (DOM-free, imports m4.js only).
 * Picture coordinates: u right, v up, the picture `aspect` wide and 1 high, origin bottom-left (as in a PDF page).
 *
 *   const P = projector(camera, aspect)
 *   P.project([x,y,z]) → [u, v, d]   d = distance in front of the camera along its view (larger = farther)
 *   P.ray(u, v) → { o, d }          the line of sight through a picture point (world)
 *   P.right, P.up, P.dir (unit, world; dir points from the camera into the scene), P.mmPerUnit (orthographic: millimetres of
 *   model per picture unit; perspective: the same at the target's distance)
 * camera = { type: 'ortho' | 'persp', pos, target, up, height (ortho: half the view's height in mm), fov (persp, degrees) }
 */
import { sub, norm, cross, dot, add, mul, len } from './m4.js';

export function projector(cam, aspect = 1) {
  const dir = norm(sub(cam.target, cam.pos));
  let right = norm(cross(dir, cam.up));
  if (len(right) < 1e-9) right = norm(cross(dir, Math.abs(dir[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]));
  const up = cross(right, dir);
  const dist = len(sub(cam.target, cam.pos));
  if (cam.type === 'persp') {
    const tanH = Math.tan((cam.fov || 35) * Math.PI / 360);   // half the vertical field
    return {
      type: 'persp', aspect, right, up, dir, mmPerUnit: 2 * dist * tanH,
      project(p) {
        const q = sub(p, cam.pos), d = dot(q, dir);
        const k = 1 / (2 * tanH * Math.max(d, 1e-9));
        return [aspect / 2 + dot(q, right) * k, 0.5 + dot(q, up) * k, d];
      },
      ray(u, v) {
        const x = (u - aspect / 2) * 2 * tanH, y = (v - 0.5) * 2 * tanH;
        return { o: [...cam.pos], d: norm(add(dir, add(mul(right, x), mul(up, y)))) };
      },
    };
  }
  const h = cam.height || 100;
  return {
    type: 'ortho', aspect, right, up, dir, mmPerUnit: 2 * h,
    project(p) {
      const q = sub(p, cam.target);
      return [aspect / 2 + dot(q, right) / (2 * h), 0.5 + dot(q, up) / (2 * h), dot(sub(p, cam.pos), dir)];
    },
    ray(u, v) {
      const o = add(cam.target, add(mul(right, (u - aspect / 2) * 2 * h), mul(up, (v - 0.5) * 2 * h)));
      return { o: sub(o, mul(dir, dist + 1e6)), d: dir };
    },
  };
}

/** A camera that shows a box (world { min, max }) from `dir` (toward the viewer), filling `fill` of the picture's height. */
export function fitCamera(box, { dir = [1, 0.8, 1], up = [0, 1, 0], type = 'ortho', fov = 35, aspect = 1.6, fill = 0.85 } = {}) {
  const c = [(box.min[0] + box.max[0]) / 2, (box.min[1] + box.max[1]) / 2, (box.min[2] + box.max[2]) / 2];
  const d = norm(dir);
  const probe = projector({ type: 'ortho', pos: add(c, d), target: c, up, height: 1 }, aspect);
  let w = 0, hgt = 0;
  for (let i = 0; i < 8; i++) {
    const p = [i & 1 ? box.max[0] : box.min[0], i & 2 ? box.max[1] : box.min[1], i & 4 ? box.max[2] : box.min[2]];
    const q = sub(p, c);
    w = Math.max(w, Math.abs(dot(q, probe.right))); hgt = Math.max(hgt, Math.abs(dot(q, probe.up)));
  }
  const half = Math.max(hgt, w / aspect, 1e-6) / fill;
  const r = Math.max(len(sub(box.max, box.min)) / 2, 1);
  if (type === 'persp') {
    const dist = half / Math.tan(fov * Math.PI / 360) + r;
    return { type, pos: add(c, mul(d, dist)), target: c, up: [...up], height: half, fov };
  }
  return { type, pos: add(c, mul(d, r * 4)), target: c, up: [...up], height: half, fov };
}
