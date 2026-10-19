/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handle-math.js — where a selected feature's drag handle sits and what a drag does to its value (0.6 PU.2), DOM-free.
 *
 *   extrudeHandle(f, frame, sk) → { kind: 'extrude', id, key: 'depth', base, dir, value, scale } | null
 *       An arrow from the middle of the sketch's profile along the way the Extrude goes (a Cut goes into the part, Reverse
 *       flips it), its tip on the end face: base + dir · value / scale (scale 2 for "both sides", whose end face is at half
 *       the depth). Only blind and both-sides ends have a depth to drag.
 *   revolveHandle(f, axis, frame, sk) → { kind: 'revolve', id, key: 'angle', axis {o, d}, start, value } | null
 *       An arc handle at the profile's middle turned by the angle about the axis (right hand), `start` = the profile's middle.
 *   handleTip(h) → [x, y, z]                       where the handle is drawn (and grabbed)
 *   axisParam(o, d, ro, rd) → t | null           the point o + t·d on the handle's axis nearest the pointer's ray ro + s·rd
 *   dragExtrude(h, v0, t0, t) → value            the depth after dragging from axis parameter t0 to t (rounded, > 0)
 *   dragRevolve(h, v0, ro, rd, prev) → value     the angle where the pointer's ray meets the plane the handle turns in
 *       (unwrapped from `prev`, so a drag past 360° stops there), rounded to whole degrees, 1–360
 *   niceStep(v) → the step a drag rounds to: a tenth of the value's order of magnitude (25 → 1, 3 → 0.1, 150 → 10)
 */
import * as S from './sketch.js';

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => { const l = Math.hypot(...a); return l > 1e-300 ? mul(a, 1 / l) : a; };
const world = (fr, u, v) => add(fr.o, add(mul(fr.x, u), mul(fr.y, v)));

/** The middle of a sketch's closed profile (its loops' bounding box), in sketch coordinates; null without a profile. */
export function profileMiddle(sk) {
  if (!sk) return null;
  const p = S.profile(sk);
  if (p.error || !p.loops?.length) return null;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of p.loops) for (const [x, y] of l) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  return [(x0 + x1) / 2, (y0 + y1) / 2];
}

export function extrudeHandle(f, frame, sk) {
  if (!f || f.type !== 'extrude' || !frame || !(f.end === 'blind' || f.end === 'mid') || !(f.depth > 0)) return null;
  const m = profileMiddle(sk);
  if (!m) return null;
  const sign = (f.op === 'cut' ? -1 : 1) * (f.reverse ? -1 : 1);
  return { kind: 'extrude', id: f.id, key: 'depth', base: world(frame, m[0], m[1]), dir: norm(mul(frame.n, sign)), value: f.depth, scale: f.end === 'mid' ? 2 : 1 };
}

export function revolveHandle(f, axis, frame, sk) {
  if (!f || f.type !== 'revolve' || !axis || !frame || !(f.angle > 0)) return null;
  const m = profileMiddle(sk);
  if (!m) return null;
  return { kind: 'revolve', id: f.id, key: 'angle', axis: { o: axis.o, d: norm(axis.d) }, start: world(frame, m[0], m[1]), value: f.angle };
}

/** p turned by `deg` degrees about the line {o, d} (right hand, d unit). */
export function turn(p, { o, d }, deg) {
  const a = deg * Math.PI / 180, v = sub(p, o), c = Math.cos(a), s = Math.sin(a);
  return add(o, add(add(mul(v, c), mul(cross(d, v), s)), mul(d, dot(d, v) * (1 - c))));
}

export function handleTip(h, value = h.value) {
  if (h.kind === 'extrude') return add(h.base, mul(h.dir, value / h.scale));
  return turn(h.start, h.axis, value);
}

export function axisParam(o, d, ro, rd) {
  const w0 = sub(o, ro), a = dot(d, d), b = dot(d, rd), c = dot(rd, rd), dd = dot(d, w0), e = dot(rd, w0);
  const den = a * c - b * b;
  if (Math.abs(den) < 1e-9 * a * c) return null;   // the ray runs along the axis: no way to read a drag
  return (b * e - c * dd) / den;
}

export function niceStep(v) {
  const m = Math.pow(10, Math.floor(Math.log10(Math.max(Math.abs(v), 1e-3))));
  return Math.max(0.01, m / 10);
}

const roundTo = (v, step) => Number((Math.round(v / step) * step).toFixed(6));

export function dragExtrude(h, v0, t0, t) {
  const step = niceStep(v0);
  return Math.max(step, roundTo(v0 + h.scale * (t - t0), step));
}

export function dragRevolve(h, v0, ro, rd, prev = v0) {
  const { o, d } = h.axis;
  const c = add(o, mul(d, dot(sub(h.start, o), d)));   // the circle's centre on the axis
  const den = dot(rd, d);
  if (Math.abs(den) < 1e-9) return prev;               // looking along the plane: keep what it was
  const hit = add(ro, mul(rd, dot(sub(c, ro), d) / den));
  const u = norm(sub(h.start, c)), w = cross(d, u), q = sub(hit, c);
  let ang = Math.atan2(dot(q, w), dot(q, u)) * 180 / Math.PI;
  ang = ((ang % 360) + 360) % 360;
  // unwrap toward the previous value, so 350° → 10° reads as 370° (then clamped) rather than a jump back to 10°
  const k = Math.round((prev - ang) / 360);
  ang += 360 * k;
  return Math.min(360, Math.max(1, Math.round(ang)));
}
