/* SPDX-License-Identifier: Apache-2.0 */
/**
 * magnet-study.js — the Magnet study of a sketch (0.8 SG.7+, session oltl-su_PART_3; DOM-free). The person's way in to physics_PART_3's
 * `magnetSolve` (phys-worker.js: the 2-D triangle mesher magnetmesh.js and the nonlinear magnetostatics magnet.js): the closed profiles of a
 * sketch become regions of a 2-D model, each one air, iron, a permanent magnet or a coil, and the answer is the field B, the force and the
 * torque on a body (Maxwell stress round it). magnet-study-ui.js is the dialog.
 *
 *   sketchesOf(part)                       → [{ id, name, sketch }] the sketch features of a part
 *   loopsOf(sketch)                        → { loops: [[[x, y] …] …] (mm, the sketch's frame) } | { error }
 *   loopsOfSketches([{ id, name, sketch }]) → { loops, origin: [{ sketch, name, n }] } | { error }  several sketches, one list: a body that
 *                                            touches another shares an edge with it, which one sketch's profile reader refuses, so touching bodies
 *                                            go in different sketches (bodies that nest or stand apart can share one)
 *   defaultSpecs(n)                        → one spec per loop: { role: 'air' | 'iron' | 'magnet' | 'coil', mur, curve, br, angle, current, force }
 *   buildJob(loops, specs, opts)           → { job, meta, problems: [sentence] }   job = magnetSolve's input in metres and amperes;
 *                                            opts { depth (mm out of the sketch), pad (box margin, in sizes of the model), fine (0.5 | 1 | 2) }
 *   summarize(result, meta)                → the numbers a person reads: Bmax, per body force (N) and torque about its own centre (N·m)
 *   magnetProblems(summary, meta, src)     → the shared Problems (rule 29, docs/0.8-PROBLEMS-SPEC.md § 1–2)
 *   resultCsv(summary)                     → the results as CSV text
 *   fieldColour(f)                         → '#rrggbb' for f in 0…1 (the plot's colour scale)
 *
 * Units: the sketch is in mm, the solver in m, A and T. The model is planar: the answer is per metre of depth, and the force is scaled by the
 * depth the person gives. A magnet's field direction is an angle from +x in the sketch (anticlockwise). A coil's current is the TOTAL current through
 * its profile (turns × amperes), spread evenly over its area; its sign says which way it runs (+ out of the sketch). Every number of a material is the
 * person's: nothing here is a data sheet (the default iron is linear with μr 2000 and says so in the dialog).
 */
import * as S from './sketch.js';
import { t } from './i18n.js';

export const ROLES = ['air', 'iron', 'magnet', 'coil'];
export const MU0 = 4e-7 * Math.PI;
export const LIMITS = { loops: 24, curvePoints: 60, current: 1e9, br: 3, mur: 1e7, depth: 1e6 };
const MM = 1e-3;

export const sketchesOf = (part) => (part && part.features ? part.features : []).filter((f) => f.type === 'sketch' && f.sketch).map((f) => ({ id: f.id, name: f.name || f.id, sketch: f.sketch }));

export function loopsOf(sk) {
  if (!sk || !Array.isArray(sk.entities)) return { error: t('study.mag.err.no_sketch') };
  const p = S.profile(sk, 48);
  if (p.error) return { error: p.error };
  if (!p.loops.length) return { error: t('study.mag.err.no_loops') };
  if (p.loops.length > LIMITS.loops) return { error: t('study.mag.err.too_many', { n: p.loops.length, max: LIMITS.loops }) };
  return { loops: p.loops };
}

export function loopsOfSketches(list) {
  const loops = [], origin = [];
  for (const { id, name, sketch } of list || []) {
    const r = loopsOf(sketch);
    if (r.error) return { error: t('study.mag.err.in_sketch', { name, why: r.error }) };
    r.loops.forEach((l, n) => { loops.push(l); origin.push({ sketch: id, name, n: n + 1 }); });
  }
  if (!loops.length) return { error: t('study.mag.err.no_loops') };
  if (loops.length > LIMITS.loops) return { error: t('study.mag.err.too_many', { n: loops.length, max: LIMITS.loops }) };
  return { loops, origin };
}

export const defaultSpecs = (n) => Array.from({ length: n }, () => ({ role: 'iron', mur: 2000, curve: '', br: 1.2, angle: 0, murMag: 1.05, current: 0, force: false }));

// ---------------------------------------------------------------------------------------------------- geometry
const area = (p) => { let a = 0; for (let i = 0, j = p.length - 1; i < p.length; j = i++) a += p[j][0] * p[i][1] - p[i][0] * p[j][1]; return a / 2; };
const boxOf = (p) => { let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity; for (const [x, y] of p) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; } return [x0, y0, x1, y1]; };
const inPoly = (x, y, poly) => { let c = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const [xi, yi] = poly[i], [xj, yj] = poly[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c; } return c; };
const orient = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
/** Do segments ab and cd cross in their interiors (touching ends do not count)? */
function segCross(a, b, c, d) {
  const o1 = orient(a, b, c), o2 = orient(a, b, d), o3 = orient(c, d, a), o4 = orient(c, d, b);
  const eps = 1e-9 * (Math.abs(o1) + Math.abs(o2) + Math.abs(o3) + Math.abs(o4) + 1e-30);
  return ((o1 > eps && o2 < -eps) || (o1 < -eps && o2 > eps)) && ((o3 > eps && o4 < -eps) || (o3 < -eps && o4 > eps));
}
/** Pairs of loops whose outlines cross: the mesher needs profiles that touch or nest, never cross. */
export function crossingPairs(loops) {
  const out = [], boxes = loops.map(boxOf);
  for (let i = 0; i < loops.length; i++) for (let j = i + 1; j < loops.length; j++) {
    const A = boxes[i], B = boxes[j];
    if (A[2] < B[0] || B[2] < A[0] || A[3] < B[1] || B[3] < A[1]) continue;
    let hit = false;
    for (let a = 0; a < loops[i].length && !hit; a++) for (let b = 0; b < loops[j].length && !hit; b++) hit = segCross(loops[i][a], loops[i][(a + 1) % loops[i].length], loops[j][b], loops[j][(b + 1) % loops[j].length]);
    if (hit) out.push([i, j]);
  }
  return out;
}
const segDist = (px, py, a, b) => { const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, u = L2 > 0 ? Math.max(0, Math.min(1, ((px - a[0]) * dx + (py - a[1]) * dy) / L2)) : 0; return Math.hypot(px - a[0] - u * dx, py - a[1] - u * dy); };
/** The narrowest air gap between two bodies that do not touch (mm), or Infinity: the mesh must resolve it. Bodies that touch or overlap count as no gap. */
export function minGap(loops) { return Math.min(Infinity, ...gaps(loops).map((g) => g.d)); }
/** Every pair of bodies that stand apart but close: [{ i, j, d (mm), box }] with `box` the region where both come within d of each other (the gap's own area). */
export function gaps(loops) {
  const out = [], boxes = loops.map(boxOf);
  for (let i = 0; i < loops.length; i++) for (let j = i + 1; j < loops.length; j++) {
    let d = Infinity;
    for (const [A, B] of [[loops[i], loops[j]], [loops[j], loops[i]]]) for (const [x, y] of A) for (let k = 0; k < B.length; k++) d = Math.min(d, segDist(x, y, B[k], B[(k + 1) % B.length]));
    if (!(d > 1e-6)) continue;
    const e = 1.5 * d, a = boxes[i], b = boxes[j];
    const box = [Math.max(a[0], b[0]) - e, Math.max(a[1], b[1]) - e, Math.min(a[2], b[2]) + e, Math.min(a[3], b[3]) + e];
    if (box[2] > box[0] && box[3] > box[1]) out.push({ i, j, d, box });
  }
  return out;
}

/** What lies at a point: the role of the last-painted (smallest) profile that holds it, else air. Same paint order as the job: larger first. */
export function roleAt(x, y, loops, roles, order = loops.map((_, i) => i).sort((a, b) => Math.abs(area(loops[b])) - Math.abs(area(loops[a])))) {
  let r = 'air';
  for (const i of order) if (inPoly(x, y, loops[i])) r = roles[i] || 'iron';
  return r;
}
/** The contour box for the force on loop i: its own box grown by the largest margin (35 % of its size, then halved) whose edge runs only through
 *  air (or a coil, μr 1) — Maxwell's stress needs a path in a medium of permeability μ0 — and stays inside the domain. null when there is none. */
export function contourBox(i, loops, domain, roles = loops.map(() => 'iron')) {
  const own = boxOf(loops[i]), size = Math.max(own[2] - own[0], own[3] - own[1]), order = loops.map((_, k) => k).sort((a, b) => Math.abs(area(loops[b])) - Math.abs(area(loops[a])));
  const airy = (x, y) => { const r = roleAt(x, y, loops, roles, order); return r === 'air' || r === 'coil'; };
  // margins to try, in order: half of every air gap the body has first (the middle of the gap, where the field is smoothest), then 35 % of its size halved again and again
  const margins = [...gaps(loops).filter((g) => g.i === i || g.j === i).map((g) => g.d / 2).sort((a, b) => b - a), ...Array.from({ length: 9 }, (_, k) => 0.35 * size / 2 ** k)];
  for (const m of margins) {
    const box = [own[0] - m, own[1] - m, own[2] + m, own[3] + m];
    if (box[0] <= domain[0] || box[1] <= domain[1] || box[2] >= domain[2] || box[3] >= domain[3]) continue;
    const step = Math.max(Math.min(m / 2, size / 200), (box[2] - box[0] + box[3] - box[1]) / 800);   // never more than ~1600 samples
    let ok = true;
    const edge = (x0, y0, x1, y1) => { const n = Math.max(2, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / step)); for (let q = 0; q <= n && ok; q++) ok = airy(x0 + (x1 - x0) * q / n, y0 + (y1 - y0) * q / n); };
    edge(box[0], box[1], box[2], box[1]); edge(box[2], box[1], box[2], box[3]); edge(box[2], box[3], box[0], box[3]); edge(box[0], box[3], box[0], box[1]);
    if (ok) return box;
  }
  return null;
}

/** Every loop with the corners of the other loops that lie on its edges added to them (a T-junction split): bodies that touch then share
 *  whole edges, which the mesher can conform to (a corner on the middle of another body's edge, left alone, sends it refining forever). */
export function splitTouching(loops) {
  const size = Math.max(...boxOf(loops.flat()).map((v, k, b) => (k < 2 ? 0 : v - b[k - 2])), 1e-9), tol = 1e-7 * size;
  return loops.map((l, i) => {
    const out = [];
    for (let a = 0; a < l.length; a++) {
      const p = l[a], q = l[(a + 1) % l.length], dx = q[0] - p[0], dy = q[1] - p[1], L2 = dx * dx + dy * dy, ins = [];
      out.push(p);
      if (L2 <= 0) continue;
      loops.forEach((o, j) => {
        if (j === i) return;
        for (const v of o) {
          const u = ((v[0] - p[0]) * dx + (v[1] - p[1]) * dy) / L2;
          if (u > 1e-9 && u < 1 - 1e-9 && Math.hypot(p[0] + u * dx - v[0], p[1] + u * dy - v[1]) < tol) ins.push([u, v]);
        }
      });
      ins.sort((x, y) => x[0] - y[0]);
      for (const [, v] of ins) if (!out.some((w) => w[0] === v[0] && w[1] === v[1])) out.push([v[0], v[1]]);
    }
    return out;
  });
}

/** "B H" pairs, one per line (T, A/m), or { error }. B and H must both rise. */
export function parseCurve(text) {
  const pts = [];
  for (const line of String(text || '').split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const m = s.split(/[\s,;]+/).map(Number);
    if (m.length < 2 || !m.slice(0, 2).every(Number.isFinite)) return { error: t('study.mag.err.curve_line', { line: s.slice(0, 40) }) };
    pts.push([m[0], m[1]]);
  }
  if (pts.length > LIMITS.curvePoints) return { error: t('study.mag.err.curve_long', { max: LIMITS.curvePoints }) };
  for (let i = 0; i < pts.length; i++) if (!(pts[i][0] > 0 && pts[i][1] > 0) || (i && !(pts[i][0] > pts[i - 1][0] && pts[i][1] > pts[i - 1][1]))) return { error: t('study.mag.err.curve_rise') };
  return { points: pts };
}

// ---------------------------------------------------------------------------------------------------- the job
const clamp = (v, lo, hi, d) => (Number.isFinite(Number(v)) ? Math.min(hi, Math.max(lo, Number(v))) : d);

export function buildJob(loops, specs, { depth = 100, pad = 1, fine = 1 } = {}) {
  const problems = [];
  if (!loops || !loops.length) return { job: null, meta: null, problems: [t('study.mag.err.no_loops')] };
  const cross = crossingPairs(loops);
  for (const [i, j] of cross) problems.push(t('study.mag.err.cross', { a: i + 1, b: j + 1 }));
  const sp = loops.map((_, i) => ({ ...defaultSpecs(1)[0], ...(specs[i] || {}) }));
  const sources = sp.filter((s, i) => (s.role === 'magnet' && clamp(s.br, 0, 99, 0) > 0) || (s.role === 'coil' && Number(s.current) !== 0));
  if (!sources.length) problems.push(t('study.mag.err.no_source'));
  // the model box: the profiles' box with a margin of `pad` sizes on every side
  const all = boxOf(loops.flat());
  const w = all[2] - all[0], h = all[3] - all[1], size = Math.max(w, h, 1e-9);
  const margin = clamp(pad, 0.25, 6, 1) * size;
  const domain = [all[0] - margin, all[1] - margin, all[2] + margin, all[3] + margin];
  const m = (v) => v * MM;
  // paint order: larger profiles first, so a magnet inside a yoke paints over it (magnetmesh: the last polygon that holds a centroid wins)
  const cut = splitTouching(loops);
  const order = loops.map((_, i) => i).sort((a, b) => Math.abs(area(loops[b])) - Math.abs(area(loops[a])));
  const materials = { 0: { type: 'linear', mur: 1 } }, current = {}, br = {}, jobLoops = [], meta = { regions: [], contours: [], depth: clamp(depth, 0.001, LIMITS.depth, 100), box: domain.map(m) };
  for (const i of order) {
    const s = sp[i], id = i + 1, poly = cut[i].map(([x, y]) => [m(x), m(y)]), a = Math.abs(area(loops[i])) * MM * MM;
    if (s.role === 'air') materials[id] = { type: 'linear', mur: 1 };
    else if (s.role === 'iron') {
      const c = parseCurve(s.curve);
      if (String(s.curve || '').trim() && c.error) problems.push(t('study.mag.err.region', { n: id, why: c.error }));
      if (c.points && c.points.length >= 2) materials[id] = { type: 'table', points: c.points.map(([B, H]) => [B, H]) };
      else materials[id] = { type: 'linear', mur: clamp(s.mur, 1, LIMITS.mur, 2000) };
    } else if (s.role === 'magnet') {
      const Br = clamp(s.br, 0, LIMITS.br, 0), ang = clamp(s.angle, -3600, 3600, 0) * Math.PI / 180;
      materials[id] = { type: 'linear', mur: clamp(s.murMag, 1, 100, 1.05) };
      br[id] = [Br * Math.cos(ang), Br * Math.sin(ang)];
    } else if (s.role === 'coil') {
      materials[id] = { type: 'linear', mur: 1 };
      const I = clamp(s.current, -LIMITS.current, LIMITS.current, 0);
      if (a > 0) current[id] = I / a;
    } else problems.push(t('study.mag.err.region', { n: id, why: s.role }));
    jobLoops.push({ region: id, poly });
    meta.regions.push({ id, loop: i, role: s.role, area: a });
  }
  // sizes: each body to a fifth of its narrowest side, the air gaps between bodies to a third of the gap, graded out to the box
  const q = clamp(fine, 0.5, 2, 1), base = m(size) * (1 + 2 * clamp(pad, 0.25, 6, 1)) / 14 / q;
  const zones = loops.map((p) => { const b = boxOf(p); return { box: b.map(m), h: Math.max(m(Math.max(1e-9, Math.min(b[2] - b[0], b[3] - b[1]))) / 5 / q, base / 40) }; });
  for (const g of gaps(loops)) if (g.d < 0.3 * size) zones.push({ box: g.box.map(m), h: Math.max(m(g.d) / 4 / q, base / 120) });
  const sizeSpec = { base, grow: 0.3, zones };
  // force contours
  sp.forEach((s, i) => {
    if (!s.force) return;
    const box = contourBox(i, loops, domain, sp.map((q) => q.role));
    if (!box) { problems.push(t('study.mag.err.contour', { n: i + 1 })); return; }
    const own = boxOf(loops[i]), margin = Math.min(own[0] - box[0], own[1] - box[1], box[2] - own[2], box[3] - own[3]);
    const hNear = Math.min(...zones.filter((z) => !(z.box[2] < m(box[0]) || z.box[0] > m(box[2]) || z.box[3] < m(box[1]) || z.box[1] > m(box[3]))).map((z) => z.h));
    meta.contours.push({ id: 'r' + (i + 1), loop: i, box: box.map(m), thin: m(margin) < 3 * hNear });   // a contour within three triangles of its body: the stress there is rough
  });
  const job = { box: domain.map(m), loops: jobLoops, size: sizeSpec, materials, current, br, contours: meta.contours.map((c) => ({ id: c.id, box: c.box })), maxPoints: 60000 };
  return { job, meta, problems };
}

// ---------------------------------------------------------------------------------------------------- the answer
export function summarize(res, meta) {
  const d = meta.depth * MM;   // metres of depth
  const bodies = (res.forces || []).map((f) => {
    const c = meta.contours.find((x) => x.id === f.id), L = meta.regions.find((r) => r.loop === c.loop);
    const b = c.box, cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;   // the torque is asked about the body's own middle, not the sketch origin
    const tau = f.torque - (cx * f.fy - cy * f.fx);
    return { id: f.id, loop: c.loop + 1, role: L ? L.role : '', thin: !!c.thin, fx: f.fx * d, fy: f.fy * d, force: Math.hypot(f.fx, f.fy) * d, torque: tau * d, fxPerM: f.fx, fyPerM: f.fy, centre: [cx / MM, cy / MM] };
  });
  return { bmax: res.Bmax.value, bmaxAt: [res.Bmax.at[0] / MM, res.Bmax.at[1] / MM], iterations: res.iterations, tris: res.stats ? res.stats.tris : res.mesh.tris.length / 3, minAngle: res.stats ? res.stats.minAngle : null, bodies, depthMm: meta.depth, ms: res.ms, energy: res.energy };
}

/** The shared Problems for a magnet result and the model that made it (rule 29). */
export function magnetProblems(sum, meta, specs = [], src = 'partcraft.magnet') {
  if (!sum) return [];
  const out = [];
  const lin = (meta.regions || []).filter((r) => r.role === 'iron' && specs[r.loop] && !String(specs[r.loop].curve || '').trim());
  if (lin.length && sum.bmax > 2.1) out.push({
    id: src + ':saturation', code: 'sim.magnet.saturation', severity: 'warning',
    msg: { key: 'study.mag.p.saturation', vars: { B: +sum.bmax.toFixed(2) } },
    about: [{ kind: 'study', id: 'magnet', label: t('study.mag.p.about') }],
    where: { space: '2d', at: sum.bmaxAt },
    source: { kind: 'engine', name: src },
    req: { op: '<=', value: 2.1, unit: 'T' }, found: { value: +sum.bmax.toFixed(2), unit: 'T' },
  });
  for (const b of sum.bodies) if (b.thin) out.push({
    id: src + ':force_thin:' + b.loop, code: 'sim.magnet.force_thin', severity: 'warning',
    msg: { key: 'study.mag.p.force_thin', vars: { n: b.loop } },
    about: [{ kind: 'study', id: 'magnet', label: t('study.mag.p.about') }],
    where: { space: '2d', at: b.centre },
    source: { kind: 'engine', name: src },
  });
  return out;
}

export function resultCsv(sum) {
  const q = (v) => (typeof v === 'number' ? String(+v.toPrecision(8)) : '"' + String(v).replace(/"/g, '""') + '"');
  const rows = [['quantity', 'value', 'unit'], ['Bmax', q(sum.bmax), 'T'], ['Bmax at x', q(sum.bmaxAt[0]), 'mm'], ['Bmax at y', q(sum.bmaxAt[1]), 'mm'], ['depth', q(sum.depthMm), 'mm'], ['triangles', q(sum.tris), ''], ['iterations', q(sum.iterations), '']];
  for (const b of sum.bodies) rows.push([`region ${b.loop} Fx`, q(b.fx), 'N'], [`region ${b.loop} Fy`, q(b.fy), 'N'], [`region ${b.loop} torque about its centre`, q(b.torque), 'N·m']);
  return '﻿' + rows.map((r) => r.join(',')).join('\r\n') + '\r\n';
}

/** A colour scale for |B|: dark blue → teal → yellow → red (f in 0…1). */
export function fieldColour(f) {
  const x = Math.min(1, Math.max(0, f)), stops = [[0, [24, 40, 96]], [0.35, [28, 132, 150]], [0.7, [240, 200, 60]], [1, [200, 40, 30]]];
  let k = 1; while (k < stops.length - 1 && x > stops[k][0]) k++;
  const [x0, c0] = stops[k - 1], [x1, c1] = stops[k], u = (x - x0) / (x1 - x0 || 1);
  const h = (v) => Math.round(c0[v] + (c1[v] - c0[v]) * u).toString(16).padStart(2, '0');
  return '#' + h(0) + h(1) + h(2);
}
