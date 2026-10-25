/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/annotate.js — annotations that stay attached (0.7 TP.3; DOM-free). An annotation is pinned to a point on a part
 * (`anchor` = { inst, p: [x,y,z] in the part's own coordinates }), so it moves with its part when the part explodes or is
 * moved in a view; or pinned to the picture (shapes, pictures). A view shows the annotations listed in its `annots`.
 *
 *   a = { id: 'a<n>', kind, anchor?, off? [du, dv] (from the anchor's point, in picture heights), text?, frame?, pid? (balloon),
 *         arrow?: { dir (part's own axes, unit), len (mm), style: 'straight'|'curved'|'turn', bend (−1…1) },
 *         measure?: { kind: 'linear'|'angle'|'radius', pts: [anchor, anchor, anchor?], decimals (0…4) },
 *         box?: [u0, v0, u1, v1] (shapes and pictures: fractions of the picture's width and height, from the bottom-left),
 *         shape?: 'rect'|'ellipse'|'line'|'arrow', src? (picture: data:image/png|jpeg, ≤ 512 KB),
 *         style: { size (text height in picture heights), color '#rrggbb' } }
 *   kinds: label (text and a leader), callout (text in a box, leader), balloon (the part's item number in a circle, leader),
 *          arrow (3D: straight, curved, or a turn arrow round an axis), measure (linear, angle, radius from the geometry),
 *          shape (2D, pinned to the picture), picture (an image pinned to the picture)
 *   Text fields fill from the anchored part: {number} {name} {material} {description} {qty} {item}.
 *
 *   readAnnotation(raw, ctx) (registered with manual.js) · fillFields(text, ctx) · measureValue(m, a) → { value, text }
 *   layout(m, meshes, view, { aspect, H, rows, world?, state? }) → display items (world/state: an animation frame's, TP.6) (mm; display.js) for every annotation the view shows
 *   autoBalloons(m, meshes, view, { aspect }) → new balloon annotations for the shown parts that have none in the view yet
 *   (call inside Doc.edit with addAnnotation; part numbers are given by parts-list.js giveNumbers)
 *   addAnnotation(m, a, view) · updateAnnotation(m, id, patch) · removeAnnotation(m, id) · showAnnotation(view, id, on)
 */
import { t } from '../i18n.js';
import { registerReaders, worldOf, instState, LIMITS, ManualError } from './manual.js';
import { apply, applyDir, sub, add, mul, len, dot, norm, cross } from './m4.js';
import { projector } from './camera.js';
import { PENS, INK, textWidth, arrowHead, circlePts } from './display.js';
import { rows as partRows, numberOf, giveNumbers } from './parts-list.js';

export const KINDS = ['label', 'callout', 'balloon', 'arrow', 'measure', 'shape', 'picture'];
export const FRAMES = ['none', 'box', 'circle', 'underline'];
export const ARROW_STYLES = ['straight', 'curved', 'turn'];
export const MEASURE_KINDS = ['linear', 'angle', 'radius'];
export const SHAPES = ['rect', 'ellipse', 'line', 'arrow'];
export const DEFAULT_SIZE = 0.03;
export const MAX_PICTURE = 512 * 1024;
const HEX = /^#[0-9a-f]{6}$/;
const bad = () => { throw new ManualError('bad_annotation', t('illustrate.file.bad_annotation')); };
const fin = (v, lim = 1e9) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= lim;
const v3 = (v, lim = 1e7) => Array.isArray(v) && v.length === 3 && v.every((x) => fin(x, lim));
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const cleanText = (s, max) => String(s ?? '').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, '').slice(0, max);

function readAnchor(raw, instIds) {
  if (!isObj(raw) || typeof raw.inst !== 'string' || !instIds.has(raw.inst) || !v3(raw.p)) bad();
  return { inst: raw.inst, p: [...raw.p] };
}
export function readAnnotation(raw, { takeId, instIds, parts }) {
  if (!isObj(raw) || !KINDS.includes(raw.kind)) bad();
  const a = { id: takeId(raw.id), kind: raw.kind, style: { size: DEFAULT_SIZE, color: INK } };
  if (isObj(raw.style)) {
    if (raw.style.size !== undefined) { if (!fin(raw.style.size) || raw.style.size < 0.005 || raw.style.size > 0.2) bad(); a.style.size = raw.style.size; }
    if (raw.style.color !== undefined) { if (typeof raw.style.color !== 'string' || !HEX.test(raw.style.color)) bad(); a.style.color = raw.style.color; }
  }
  const off = () => (Array.isArray(raw.off) && raw.off.length === 2 && raw.off.every((x) => fin(x, 10)) ? [...raw.off] : [0.08, 0.08]);
  const box = () => { if (!Array.isArray(raw.box) || raw.box.length !== 4 || !raw.box.every((x) => fin(x, 2) && x >= -1)) bad(); return [...raw.box]; };
  if (a.kind === 'label' || a.kind === 'callout' || a.kind === 'balloon') {
    a.anchor = readAnchor(raw.anchor, instIds);
    a.off = off();
    a.text = cleanText(raw.text, LIMITS.text);
    a.frame = FRAMES.includes(raw.frame) ? raw.frame : a.kind === 'balloon' ? 'circle' : a.kind === 'callout' ? 'box' : 'underline';
    if (a.kind === 'balloon') { if (typeof raw.pid !== 'string' || !parts[raw.pid]) bad(); a.pid = raw.pid; }
  } else if (a.kind === 'arrow') {
    a.anchor = readAnchor(raw.anchor, instIds);
    const r = raw.arrow;
    if (!isObj(r) || !v3(r.dir, 2) || len(r.dir) < 1e-9 || !fin(r.len, 1e7) || r.len <= 0 || !ARROW_STYLES.includes(r.style)) bad();
    a.arrow = { dir: norm(r.dir), len: r.len, style: r.style, bend: fin(r.bend, 1) ? r.bend : 0.3 };
  } else if (a.kind === 'measure') {
    const r = raw.measure;
    if (!isObj(r) || !MEASURE_KINDS.includes(r.kind) || !Array.isArray(r.pts)) bad();
    const need = r.kind === 'linear' ? 2 : 3;
    if (r.pts.length !== need) bad();
    a.measure = { kind: r.kind, pts: r.pts.map((p) => readAnchor(p, instIds)), decimals: Number.isInteger(r.decimals) && r.decimals >= 0 && r.decimals <= 4 ? r.decimals : 1 };
    a.off = off();
  } else if (a.kind === 'shape') {
    if (!SHAPES.includes(raw.shape)) bad();
    a.shape = raw.shape; a.box = box();
  } else if (a.kind === 'picture') {
    if (typeof raw.src !== 'string' || raw.src.length > MAX_PICTURE * 1.4 || !/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/.test(raw.src)) bad();
    a.src = raw.src; a.box = box();
  }
  return a;
}
registerReaders({ annotation: readAnnotation });

// ---------------------------------------------------------------------------------------------- fields and values
/** Fill {number} {name} {material} {description} {qty} {item} from a part; other braces stay as typed. */
export function fillFields(text, ctx) {
  return String(text ?? '').replace(/\{(number|name|material|description|qty|item)\}/g, (_, k) => (ctx[k] === null || ctx[k] === undefined ? '' : String(ctx[k])));
}
function partCtx(m, inst, rowsList) {
  const i = m.instances.find((x) => x.id === inst);
  if (!i) return {};
  const p = m.parts[i.part];
  const row = rowsList?.find((r) => r.pids.includes(i.part));
  return { number: p.number, name: p.name, material: p.material, description: p.description, qty: row ? row.qty : m.instances.filter((x) => x.part === i.part).length, item: numberOf(m, i.part) };
}
const restPoint = (m, an) => { const i = m.instances.find((x) => x.id === an.inst); return i ? apply(i.matrix, an.p) : null; };
const fmtN = (v, d) => (Number.isFinite(v) ? v.toFixed(d) : '');
/** A circle through three points: { c, r } (null when they are in a line). */
export function circleThrough(a, b, c) {
  const ab = sub(b, a), ac = sub(c, a), n = cross(ab, ac), nn = dot(n, n);
  if (nn < 1e-18 * Math.max(dot(ab, ab), dot(ac, ac)) ** 2) return null;
  const k = add(mul(cross(n, ab), dot(ac, ac)), mul(cross(ac, n), dot(ab, ab)));
  const c0 = add(a, mul(k, 1 / (2 * nn)));
  return { c: c0, r: len(sub(c0, a)), n: norm(n) };
}
/** The value a measurement shows, from the parts where they are assembled (an explode does not change a size). */
export function measureValue(m, a) {
  const P = a.measure.pts.map((an) => restPoint(m, an));
  if (P.some((p) => !p)) return { value: null, text: '' };
  const d = a.measure.decimals;
  if (a.measure.kind === 'linear') { const v = len(sub(P[1], P[0])); return { value: v, text: t('illustrate.measure.mm', { v: fmtN(v, d) }) }; }
  if (a.measure.kind === 'angle') {
    const u = norm(sub(P[0], P[1])), w = norm(sub(P[2], P[1]));
    const v = Math.acos(Math.max(-1, Math.min(1, dot(u, w)))) * 180 / Math.PI;
    return { value: v, text: t('illustrate.measure.deg', { v: fmtN(v, d) }) };
  }
  const c = circleThrough(...P);
  return c ? { value: c.r, text: t('illustrate.measure.radius', { v: fmtN(c.r, d) }) } : { value: null, text: '' };
}

// ---------------------------------------------------------------------------------------------- layout
/** Where a leader from point `a` meets a text box (x0,y0,x1,y1) or circle. */
function boxEdge(a, box) {
  const cx = (box[0] + box[2]) / 2, cy = (box[1] + box[3]) / 2, dx = a[0] - cx, dy = a[1] - cy;
  if (!dx && !dy) return [cx, cy];
  const hx = (box[2] - box[0]) / 2, hy = (box[3] - box[1]) / 2;
  const s = Math.min(hx / Math.abs(dx || 1e-12), hy / Math.abs(dy || 1e-12));
  return [cx + dx * Math.min(s, 1), cy + dy * Math.min(s, 1)];
}

export function layout(m, meshes, view, { aspect = 1.6, H = 100, rows: rowsList = null, only = null, world: worldIn = null, state = null } = {}) {
  const P = projector(view.camera, aspect);
  const world = worldIn || worldOf(m, view);
  const shownAt = (an) => { if ((state ? state(an.inst) : instState(view, an.inst)).hide) return null; const M = world.get(an.inst); return M ? apply(M, an.p) : null; };
  const mm = (q) => [q[0] * H, q[1] * H];
  const proj = (w) => mm(P.project(w));
  const items = [];
  const list = rowsList || partRows(m, meshes, { view, scope: 'all' });
  const ids = new Set(view.annots || []);
  for (const a of m.annotations) {
    if (!ids.has(a.id) || (only && !only.includes(a.id))) continue;
    const col = a.style?.color || INK, size = (a.style?.size ?? DEFAULT_SIZE) * H, ref = a.id, off = a.off || [0.06, 0.05];
    const pen = { stroke: col, width: PENS.thin, ref };
    if (a.kind === 'label' || a.kind === 'callout' || a.kind === 'balloon') {
      const w = shownAt(a.anchor);
      if (!w) continue;
      const A = proj(w), T = [A[0] + off[0] * H, A[1] + off[1] * H];
      const ctx = partCtx(m, a.anchor.inst, list);
      const text = a.kind === 'balloon' ? String(numberOf(m, a.pid) ?? '?') : fillFields(a.text, ctx);
      const lines = text.split('\n').slice(0, 12);
      const tw = Math.max(...lines.map((l) => textWidth(l, size)), size * 0.6), lh = size * 1.25, th = lh * lines.length;
      let edge;
      if (a.frame === 'circle') {
        const r = Math.max(tw / 2 + size * 0.45, th / 2 + size * 0.35, size * 0.95);
        const d = Math.hypot(A[0] - T[0], A[1] - T[1]) || 1;
        edge = [T[0] + (A[0] - T[0]) / d * r, T[1] + (A[1] - T[1]) / d * r];
        items.push({ t: 'circle', c: T, r, fill: '#ffffff', ...pen });
      } else {
        const pad = size * 0.35, box = [T[0] - tw / 2 - pad, T[1] - th / 2 - pad, T[0] + tw / 2 + pad, T[1] + th / 2 + pad];
        if (a.frame === 'box') items.push({ t: 'path', pts: [[box[0], box[1]], [box[2], box[1]], [box[2], box[3]], [box[0], box[3]]], closed: true, fill: '#ffffff', ...pen });
        if (a.frame === 'underline') items.push({ t: 'path', pts: [[box[0], box[1]], [box[2], box[1]]], ...pen });
        edge = a.frame === 'underline' ? (A[0] < T[0] ? [box[0], box[1]] : [box[2], box[1]]) : boxEdge(A, box);
      }
      items.push({ t: 'path', pts: [A, edge], ...pen });
      items.push({ t: 'circle', c: A, r: Math.max(size * 0.14, 0.35), fill: col, ref });
      lines.forEach((l, k) => items.push({ t: 'text', x: T[0], y: T[1] + th / 2 - lh * (k + 1) + (lh - size) / 2 + size * 0.12, text: l, size, anchor: 'middle', bold: a.kind === 'balloon', color: col, ref }));
    } else if (a.kind === 'arrow') {
      const w = shownAt(a.anchor);
      if (!w) continue;
      const M = world.get(a.anchor.inst);
      const dir = norm(applyDir(M, a.arrow.dir));
      const head = Math.max(size * 0.9, 1.2);
      let pts;
      if (a.arrow.style === 'turn') {
        const u = norm(Math.abs(dir[1]) < 0.9 ? cross(dir, [0, 1, 0]) : cross(dir, [1, 0, 0])), v = cross(dir, u), r = a.arrow.len / 2;
        pts = Array.from({ length: 41 }, (_, i) => { const th = 1.5 * Math.PI * i / 40; return proj(add(w, add(mul(u, r * Math.cos(th)), mul(v, r * Math.sin(th))))); });
      } else if (a.arrow.style === 'curved') {
        const e = add(w, mul(dir, a.arrow.len));
        const A = proj(w), E = proj(e), nx = -(E[1] - A[1]), ny = E[0] - A[0];
        const C = [(A[0] + E[0]) / 2 + nx * a.arrow.bend * 0.5, (A[1] + E[1]) / 2 + ny * a.arrow.bend * 0.5];
        pts = Array.from({ length: 25 }, (_, i) => { const s = i / 24; return [(1 - s) ** 2 * A[0] + 2 * s * (1 - s) * C[0] + s * s * E[0], (1 - s) ** 2 * A[1] + 2 * s * (1 - s) * C[1] + s * s * E[1]]; });
      } else pts = [proj(w), proj(add(w, mul(dir, a.arrow.len)))];
      const tip = pts[pts.length - 1];
      let k = pts.length - 2;
      while (k > 0 && Math.hypot(tip[0] - pts[k][0], tip[1] - pts[k][1]) < head) k--;
      items.push({ t: 'path', pts: pts.slice(0, -1).concat([shorten(pts[pts.length - 2] || pts[0], tip, head * 0.6)]), stroke: col, width: PENS.edge, ref });
      items.push({ ...arrowHead(tip, pts[k], head, col), ref });
    } else if (a.kind === 'measure') {
      const W = a.measure.pts.map((an) => shownAt(an));
      if (W.some((x) => !x)) continue;
      const S = W.map(proj);
      const val = measureValue(m, a).text;
      const head = Math.max(size * 0.8, 1);
      if (a.measure.kind === 'linear') {
        const [p, q] = S, dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l;
        const o = (off[0] * nx + off[1] * ny) * H;
        const p2 = [p[0] + nx * o, p[1] + ny * o], q2 = [q[0] + nx * o, q[1] + ny * o], ext = Math.sign(o || 1) * size * 0.5;
        items.push({ t: 'path', pts: [p, [p2[0] + nx * ext, p2[1] + ny * ext]], ...pen }, { t: 'path', pts: [q, [q2[0] + nx * ext, q2[1] + ny * ext]], ...pen });
        items.push({ t: 'path', pts: [p2, q2], ...pen }, { ...arrowHead(p2, q2, head, col), ref }, { ...arrowHead(q2, p2, head, col), ref });
        let ang = Math.atan2(dy, dx) * 180 / Math.PI;
        if (ang > 90) ang -= 180; else if (ang < -90) ang += 180;
        const mid = [(p2[0] + q2[0]) / 2 + nx * size * 0.3 * Math.sign(o || 1), (p2[1] + q2[1]) / 2 + ny * size * 0.3 * Math.sign(o || 1)];
        items.push({ t: 'text', x: mid[0], y: mid[1], text: val, size, anchor: 'middle', color: col, rot: ang, ref });
      } else if (a.measure.kind === 'angle') {
        const [p, c, q] = S, r = Math.max(Math.min(Math.hypot(p[0] - c[0], p[1] - c[1]), Math.hypot(q[0] - c[0], q[1] - c[1])) * 0.5, size * 2);
        let a0 = Math.atan2(p[1] - c[1], p[0] - c[0]), a1 = Math.atan2(q[1] - c[1], q[0] - c[0]);
        if (a1 - a0 > Math.PI) a1 -= 2 * Math.PI; else if (a0 - a1 > Math.PI) a1 += 2 * Math.PI;
        const arc = circlePts(c, r, 32, a0, a1);
        items.push({ t: 'path', pts: [c, p], ...pen }, { t: 'path', pts: [c, q], ...pen }, { t: 'path', pts: arc, ...pen });
        const am = (a0 + a1) / 2;
        items.push({ t: 'text', x: c[0] + (r + size * 0.8) * Math.cos(am), y: c[1] + (r + size * 0.8) * Math.sin(am) - size * 0.35, text: val, size, anchor: 'middle', color: col, ref });
      } else {
        const circ = circleThrough(...W);
        if (!circ) continue;
        const C = proj(circ.c), A = S[0];
        items.push({ t: 'path', pts: [C, A], ...pen }, { ...arrowHead(A, C, head, col), ref });
        items.push({ t: 'path', pts: circlePts(C, Math.max(size * 0.12, 0.3), 12), closed: true, fill: col, ref });
        const T = [A[0] + off[0] * H, A[1] + off[1] * H];
        items.push({ t: 'path', pts: [A, T], ...pen });
        items.push({ t: 'text', x: T[0] + (T[0] >= A[0] ? size * 0.3 : -size * 0.3), y: T[1] - size * 0.35, text: val, size, anchor: T[0] >= A[0] ? 'start' : 'end', color: col, ref });
      }
    } else if (a.kind === 'shape' || a.kind === 'picture') {
      const W2 = aspect * H;
      const [u0, v0, u1, v1] = a.box, x0 = Math.min(u0, u1) * W2, x1 = Math.max(u0, u1) * W2, y0 = Math.min(v0, v1) * H, y1 = Math.max(v0, v1) * H;
      if (a.kind === 'picture') { items.push({ t: 'image', x: x0, y: y0, w: x1 - x0, h: y1 - y0, src: a.src, ref }); continue; }
      if (a.shape === 'rect') items.push({ t: 'path', pts: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]], closed: true, stroke: col, width: PENS.edge, ref });
      else if (a.shape === 'ellipse') items.push({ t: 'path', pts: Array.from({ length: 64 }, (_, i) => [(x0 + x1) / 2 + (x1 - x0) / 2 * Math.cos(i * Math.PI / 32), (y0 + y1) / 2 + (y1 - y0) / 2 * Math.sin(i * Math.PI / 32)]), closed: true, stroke: col, width: PENS.edge, ref });
      else {
        const p = [u0 * W2, v0 * H], q = [u1 * W2, v1 * H];
        if (a.shape === 'arrow') { const head = Math.max(size, 1.5); items.push({ t: 'path', pts: [p, shorten(p, q, head * 0.6)], stroke: col, width: PENS.edge, ref }, { ...arrowHead(q, p, head, col), ref }); }
        else items.push({ t: 'path', pts: [p, q], stroke: col, width: PENS.edge, ref });
      }
    }
  }
  return items;
}
function shorten(from, to, by) {
  const dx = to[0] - from[0], dy = to[1] - from[1], l = Math.hypot(dx, dy);
  if (l <= by) return from;
  return [to[0] - dx / l * by, to[1] - dy / l * by];
}

// ---------------------------------------------------------------------------------------------- balloons for a whole view
/** The point of a part to pin its balloon on: near the middle of its outline, on the side toward the viewer. */
export function balloonPoint(mesh, M, P) {
  const pos = mesh.positions, n = pos.length / 3, step = Math.max(1, Math.floor(n / 4000));
  const pts = [];
  let cu = 0, cv = 0, d0 = Infinity, d1 = -Infinity;
  for (let i = 0; i < n; i += step) {
    const q = P.project(apply(M, [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]]));
    pts.push([i, q]); cu += q[0]; cv += q[1]; d0 = Math.min(d0, q[2]); d1 = Math.max(d1, q[2]);
  }
  cu /= pts.length; cv /= pts.length;
  const front = d0 + (d1 - d0) * 0.4;
  let best = null, bd = Infinity;
  for (const [i, q] of pts) { if (q[2] > front) continue; const dd = (q[0] - cu) ** 2 + (q[1] - cv) ** 2; if (dd < bd) { bd = dd; best = i; } }
  if (best === null) best = pts[0][0];
  return { p: [pos[best * 3], pos[best * 3 + 1], pos[best * 3 + 2]], uv: P.project(apply(M, [pos[best * 3], pos[best * 3 + 1], pos[best * 3 + 2]])) };
}
/**
 * Balloons for every part the view shows (one per parts-list row, on the copy nearest the viewer) that has none in the view
 * yet. Numbers are given first (giveNumbers). The bubbles go on a ring round the picture of the parts, in the order of their
 * points' angles, kept apart. Returns the new annotations without ids (addAnnotation gives them).
 */
export function autoBalloons(m, meshes, view, { aspect = 1.6 } = {}) {
  const P = projector(view.camera, aspect);
  const world = worldOf(m, view);
  const shown = new Set(view.annots || []);
  const have = new Set(m.annotations.filter((a) => a.kind === 'balloon' && shown.has(a.id)).map((a) => a.pid));
  // new numbers go in the product's order (the first placed part first), as a parts list is read
  const order = new Map(m.instances.map((i, k) => [i.id, k]));
  const list = partRows(m, meshes, { view, scope: 'view' }).filter((r) => !r.pids.some((p) => have.has(p))).sort((a, b) => order.get(a.insts[0]) - order.get(b.insts[0]));
  giveNumbers(m, list.map((r) => r.pids[0]));
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
  const picks = [];
  for (const r of list) {
    let best = null;
    for (const id of r.insts) {
      const i = m.instances.find((x) => x.id === id), mesh = meshes.get(i.part);
      if (!mesh) continue;
      const bp = balloonPoint(mesh, world.get(id), P);
      if (!best || bp.uv[2] < best.uv[2]) best = { ...bp, inst: id, pid: i.part };
    }
    if (!best) continue;
    picks.push(best);
    u0 = Math.min(u0, best.uv[0]); u1 = Math.max(u1, best.uv[0]); v0 = Math.min(v0, best.uv[1]); v1 = Math.max(v1, best.uv[1]);
  }
  if (!picks.length) return [];
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  const R = Math.min(Math.max(Math.hypot(u1 - u0, v1 - v0) / 2 + 0.08, 0.18), 0.48);
  const list2 = picks.map((p) => ({ ...p, ang: Math.atan2(p.uv[1] - cv, p.uv[0] - cu) })).sort((a, b) => a.ang - b.ang);
  const minA = Math.min(0.11 / R, 2 * Math.PI / list2.length);
  for (let i = 1; i < list2.length; i++) if (list2[i].ang - list2[i - 1].ang < minA) list2[i].ang = list2[i - 1].ang + minA;
  return list2.map((p) => {
    let tu = cu + R * Math.cos(p.ang), tv = cv + R * Math.sin(p.ang);
    tu = Math.max(0.05, Math.min(aspect - 0.05, tu)); tv = Math.max(0.05, Math.min(0.95, tv));
    return { kind: 'balloon', pid: p.pid, anchor: { inst: p.inst, p: p.p }, off: [tu - p.uv[0], tv - p.uv[1]], text: '', frame: 'circle', style: { size: DEFAULT_SIZE, color: INK } };
  });
}

// ---------------------------------------------------------------------------------------------- edits (inside Doc.edit)
/** Add an annotation (gets its id) and show it in `view` (the scene, usually). */
export function addAnnotation(m, a, view = null) {
  if (m.annotations.length >= LIMITS.annotations) throw new ManualError('too_many', t('illustrate.annot.too_many', { n: LIMITS.annotations }));
  const rec = clean(m, { ...structuredClone(a), id: 'a' + m.seq++ });   // the same check a file gets: what is saved reads back the same
  m.annotations.push(rec);
  if (view) showAnnotation(view, rec.id, true);
  return rec;
}
/** Change an annotation (any field but id and kind); the result is checked like a file's. */
export function updateAnnotation(m, id, patch) {
  const k = m.annotations.findIndex((x) => x.id === id);
  if (k < 0) return null;
  const next = { ...structuredClone(m.annotations[k]) };
  for (const [key, v] of Object.entries(patch)) if (key !== 'id' && key !== 'kind') next[key] = structuredClone(v);
  m.annotations[k] = clean(m, next);
  return m.annotations[k];
}
const clean = (m, a) => readAnnotation(a, { takeId: (id) => id, instIds: new Set(m.instances.map((i) => i.id)), parts: m.parts });
export function removeAnnotation(m, id) {
  const k = m.annotations.findIndex((x) => x.id === id);
  if (k < 0) return false;
  m.annotations.splice(k, 1);
  for (const v of [...m.views, m.scene].filter(Boolean)) v.annots = (v.annots || []).filter((x) => x !== id);
  return true;
}
export function showAnnotation(view, id, on) {
  const s = new Set(view.annots || []);
  if (on) s.add(id); else s.delete(id);
  view.annots = [...s];
}
