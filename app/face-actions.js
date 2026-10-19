/* SPDX-License-Identifier: Apache-2.0 */
/**
 * face-actions.js — the sketches behind the picked face's one-click actions (0.6 PU.3), DOM-free.
 *   Extrude from it / Cut into it: a sketch on the face holding its outline, so the feature pulls the face out or pushes it
 *   in (holes in the face stay holes: the profile is even-odd). Hole here: a sketch on the face with one point where it was
 *   clicked. partcraft.js adds the sketch and the feature in one undo step.
 *
 *   faceOutline(sk, frame, edges, faceName) → { made, skipped }   every edge of the face (regen.edges rows whose `faces` name
 *       it) projected with sketch-tools.js projectEdge (lines, and circles / arcs in the face's plane), each fixed; edges it
 *       cannot copy (free-form curves) are counted in `skipped`, so the caller can open the sketch to finish it instead
 *   pointAt(sk, frame, p) → the point id   a 3D point (on the face) as a sketch point
 *   cutDepth(bbox, n) → mm   half the part's extent along the face normal, rounded to two figures (at least 0.1): a first
 *       depth that cuts in without going through
 */
import * as S from './sketch.js';
import { projectEdge } from './sketch-tools.js';

const dot = (u, v) => u[0] * v[0] + u[1] * v[1] + u[2] * v[2];

export function faceOutline(sk, frame, edges, faceName) {
  let made = 0, skipped = 0;
  for (const e of edges || []) {
    if (!e || !Array.isArray(e.faces) || !e.faces.includes(faceName)) continue;
    try { made += projectEdge(sk, frame, e).made.length; } catch { skipped++; }
  }
  return { made, skipped };
}

export function pointAt(sk, frame, p) {
  const d = [p[0] - frame.o[0], p[1] - frame.o[1], p[2] - frame.o[2]];
  return S.addPoint(sk, dot(d, frame.x), dot(d, frame.y));
}

export function cutDepth(bbox, n) {
  if (!bbox || !Array.isArray(n)) return 1;
  let lo = Infinity, hi = -Infinity;
  for (const x of [bbox.min[0], bbox.max[0]]) for (const y of [bbox.min[1], bbox.max[1]]) for (const z of [bbox.min[2], bbox.max[2]]) {
    const v = dot([x, y, z], n);
    lo = Math.min(lo, v); hi = Math.max(hi, v);
  }
  const half = (hi - lo) / 2;
  return Number.isFinite(half) && half > 0 ? Math.max(0.1, Number(half.toPrecision(2))) : 1;
}
