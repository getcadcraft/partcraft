/* SPDX-License-Identifier: Apache-2.0 */
/**
 * motion.js — motion studies in an assembly (0.8 EG.7, session part_PART_2). DOM-free.
 *
 * Drive one joint value over its travel in a time, and record at every step: where chosen points of the parts are, how fast they move, which
 * parts clash and how close the others come. The placement is the assembly's own (assembly.js placeAll, joint limits and closed loops
 * included), the clash test its own interference(), the clearance manifold-3d's minGap on the parts as placed.
 *
 *   spec  = { joint: id, key?: the joint value driven (default its first), from, to (mm or degrees; held inside the joint's limits),
 *             duration: seconds (default 2), steps: 1…400 (default 24), law: 'linear' | 'ease' | 'sine' | 'round-trip',
 *             tracks?: [{ inst, at?: [x, y, z] in the part's own coordinates (default the middle of its box), name? }],
 *             clearance?: { pairs?: [[inst, inst]…] (default every pair within `search`), limit?: mm (a gap under it is flagged), search?: mm (default 50) },
 *             clashes?: boolean (default true) }
 *   motionStudy(asm, builds, M, spec) → { spec, key, unit, clamped, rows[steps + 1], summary, notes[] }
 *     row = { k, time, value, rate (value units per second), closed, tracks: [{ id, pos, vel, speed, acc }], clashes: [{ a, b, volume, kind }],
 *             gaps: [{ a, b, gap }] }
 *     summary = { clashSteps, firstClash: {k, time, value, pair} | null, minGap: {a, b, gap, k, time, value} | null, gapFlags (steps under the limit),
 *                 peaks: [{ id, speed, speedAt: time, acc, accAt: time, travel (path length mm) }], open (steps where a loop did not close) }
 *   Velocity and acceleration are finite differences of the recorded positions (central inside, one-sided at the ends): a coarse step
 *   under-reads a sharp peak, which the notes say.
 *   LAWS · lawOf(name) · series(study, what, instName?) → [{ id, name, unit, points: [[t, y]] }] · plotSvg(series, opts) → svg text · csv(study, names)
 */
import * as A from './assembly.js';
import * as V from './vec.js';
import { t } from './i18n.js';

export const LAWS = {
  linear: (s) => s,
  ease: (s) => s * s * (3 - 2 * s),                       // smoothstep: speed 0 at both ends, 1.5 × the average in the middle
  sine: (s) => 0.5 - 0.5 * Math.cos(Math.PI * s),          // speed 0 at both ends, π/2 × the average in the middle
  'round-trip': (s) => (s < 0.5 ? 2 * s : 2 - 2 * s),      // from → to → from at constant speed
};
export const lawOf = (n) => LAWS[n] || LAWS.linear;
export const LIMITS = { steps: 400, pairs: 60, tracks: 12, duration: 3600, search: 1e4 };

export class MotionError extends Error {
  constructor(code, message, next = []) { super(message); this.code = code; this.next = next; }
}

const num = (v, lo, hi, what) => {
  if (typeof v !== 'number' || !Number.isFinite(v) || v < lo || v > hi) throw new MotionError('invalid_argument', t('motion.err.range', { what, lo, hi }));
  return v;
};

/** The middle of a part's mesh box, in the part's own coordinates. */
function boxCentre(build) {
  const p = build?.mesh?.positions;
  if (!p || !p.length) return [0, 0, 0];
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < p.length; i += 3) for (let k = 0; k < 3; k++) { const v = p[i + k]; if (v < lo[k]) lo[k] = v; if (v > hi[k]) hi[k] = v; }
  return [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2];
}

export function motionStudy(asm, builds, M, spec) {
  const j = asm.joints.find((x) => x.id === spec.joint);
  if (!j) throw new MotionError('not_found', t('motion.err.no_joint', { id: spec.joint }), [t('motion.err.no_joint.next')]);
  const dof = A.JOINT_DOF[j.type] || [];
  if (!dof.length) throw new MotionError('unsupported', t('motion.err.rigid', { type: j.type }), [t('motion.err.rigid.next')]);
  const key = spec.key || dof[0];
  if (!dof.includes(key)) throw new MotionError('invalid_argument', t('motion.err.key', { type: j.type, dof: dof.join(', '), key }), [t('motion.err.key.next', { dof: dof[0] })]);
  const steps = Math.round(num(spec.steps ?? 24, 1, LIMITS.steps, 'steps'));
  const duration = num(spec.duration ?? 2, 1e-6, LIMITS.duration, 'duration');
  const law = spec.law && LAWS[spec.law] ? spec.law : 'linear';
  if (spec.law && !LAWS[spec.law]) throw new MotionError('invalid_argument', t('motion.err.law', { law: spec.law }), [t('motion.err.law.next', { laws: Object.keys(LAWS).join(', ') })]);
  let from = num(spec.from, -1e6, 1e6, 'from'), to = num(spec.to, -1e6, 1e6, 'to');
  const L = A.limitOf(j, key);
  let clamped = false;
  if (L) { const f2 = Math.max(L.min, Math.min(L.max, from)), t2 = Math.max(L.min, Math.min(L.max, to)); clamped = f2 !== from || t2 !== to; from = f2; to = t2; }
  const insts = new Map(asm.instances.map((i) => [i.id, i]));
  const tracks = (spec.tracks || []).slice(0, LIMITS.tracks).map((tr, i) => {
    const inst = insts.get(tr.inst);
    if (!inst) throw new MotionError('not_found', t('motion.err.inst', { id: tr.inst }), [t('motion.err.inst.next')]);
    const at = Array.isArray(tr.at) && tr.at.length === 3 && tr.at.every((q) => Number.isFinite(q)) ? tr.at : boxCentre(builds.get(inst.part));
    return { id: 't' + (i + 1), inst: inst.id, name: tr.name || inst.name || inst.id, at };
  });
  const wantClashes = spec.clashes !== false;
  const cl = spec.clearance ? { limit: spec.clearance.limit ?? null, search: num(spec.clearance.search ?? 50, 0.001, LIMITS.search, 'search'), pairs: spec.clearance.pairs || null } : null;
  if (cl && cl.pairs) {
    if (cl.pairs.length > LIMITS.pairs) throw new MotionError('too_large', t('motion.err.pairs_many', { n: LIMITS.pairs }), [t('motion.err.pairs_many.next')]);
    for (const p of cl.pairs) if (!Array.isArray(p) || p.length !== 2 || !insts.has(p[0]) || !insts.has(p[1]) || p[0] === p[1]) throw new MotionError('not_found', t('motion.err.pair'), [t('motion.err.inst.next')]);
  }

  // the parts as solids, made once; each step transforms them
  const live = [];
  const T = (m) => { live.push(m); return m; };
  const base = new Map();
  if (cl) {
    for (const i of asm.instances) {
      const b = builds.get(i.part);
      if (!b?.mesh) continue;
      const mesh = new M.Mesh({ numProp: 3, vertProperties: new Float32Array(b.mesh.positions), triVerts: new Uint32Array(b.mesh.indices) });
      mesh.merge();
      base.set(i.id, T(new M.Manifold(mesh)));
    }
  }
  const keep = j[key];
  const hold = new Set([j.id + '.' + key]);
  const rows = [];
  let start = null;
  const warn = [];
  try {
    for (let k = 0; k <= steps; k++) {
      const s = k / steps, v = from + (to - from) * lawOf(law)(s);
      j[key] = v;
      const { world, loops } = A.placeAll(asm, builds, { hold, start });
      start = loops?.values?.size ? loops.values : null;
      const row = { k, time: duration * s, value: v, rate: 0, closed: loops ? loops.closed !== false : true, tracks: [], clashes: [], gaps: [] };
      for (const tr of tracks) row.tracks.push({ id: tr.id, pos: V.applyMat(world.get(tr.inst), tr.at), vel: [0, 0, 0], speed: 0, acc: [0, 0, 0] });
      if (wantClashes) row.clashes = A.filterClashes(asm, A.interference(asm, builds, world, M)).shown.map((c) => ({ a: c.a, b: c.b, volume: c.volume, kind: c.kind }));
      if (cl) {
        const placed = new Map();
        for (const [id, m] of base) placed.set(id, T(m.transform(world.get(id))));
        const pairs = cl.pairs || (() => { const ids = [...placed.keys()], out = []; for (let x = 0; x < ids.length; x++) for (let y = x + 1; y < ids.length; y++) out.push([ids[x], ids[y]]); return out.slice(0, LIMITS.pairs); })();
        for (const [a, b] of pairs) {
          const A1 = placed.get(a), B1 = placed.get(b);
          if (!A1 || !B1) continue;
          const g = A1.minGap(B1, cl.search);
          if (g < cl.search - 1e-9 || cl.pairs) row.gaps.push({ a, b, gap: g });   // a pair beyond the search length is "far", not listed unless asked for
        }
      }
      rows.push(row);
    }
  } finally {
    j[key] = keep;
    for (const m of live) { try { m.delete(); } catch { /* gone */ } }
  }

  // velocity and acceleration: finite differences of what was recorded
  const dt = duration / steps;
  for (let k = 0; k <= steps; k++) {
    const r = rows[k], p = rows[Math.max(0, k - 1)], n = rows[Math.min(steps, k + 1)];
    const span = (n.time - p.time) || 1;
    r.rate = (n.value - p.value) / span;
    r.tracks.forEach((tr, i) => {
      const a = p.tracks[i].pos, b = n.tracks[i].pos;
      tr.vel = [0, 1, 2].map((q) => (b[q] - a[q]) / span);
      tr.speed = Math.hypot(...tr.vel);
      if (k > 0 && k < steps) tr.acc = [0, 1, 2].map((q) => (p.tracks[i].pos[q] - 2 * tr.pos[q] + n.tracks[i].pos[q]) / (dt * dt));
    });
  }
  // the ends: one-sided (the central form above already used the neighbour); acceleration copies the neighbour's

  // the summary
  const clashRows = rows.filter((r) => r.clashes.length);
  let minGap = null, gapFlags = 0;
  for (const r of rows) {
    let flagged = false;
    for (const g of r.gaps) {
      if (!minGap || g.gap < minGap.gap) minGap = { a: g.a, b: g.b, gap: g.gap, k: r.k, time: r.time, value: r.value };
      if (cl && cl.limit !== null && g.gap < cl.limit) flagged = true;
    }
    if (flagged) gapFlags++;
  }
  const peaks = tracks.map((tr, i) => {
    let sp = 0, spAt = 0, ac = 0, acAt = 0, travel = 0;
    rows.forEach((r, k) => {
      const q = r.tracks[i];
      if (q.speed > sp) { sp = q.speed; spAt = r.time; }
      const am = Math.hypot(...q.acc);
      if (am > ac) { ac = am; acAt = r.time; }
      if (k > 0) travel += Math.hypot(...[0, 1, 2].map((c) => q.pos[c] - rows[k - 1].tracks[i].pos[c]));
    });
    return { id: tr.id, name: tr.name, speed: sp, speedAt: spAt, acc: ac, accAt: acAt, travel };
  });
  const first = clashRows[0];
  const notes = [];
  if (clamped) notes.push(t('motion.note.clamped'));
  notes.push(t('motion.note.fd', { n: steps + 1, ms: (dt * 1000).toFixed(1) }));
  if (clashRows.length) notes.push(t('motion.note.clash'));
  if (rows.some((r) => !r.closed)) notes.push(t('motion.note.loop'));
  const summary = {
    clashSteps: clashRows.length,
    firstClash: first ? { k: first.k, time: first.time, value: first.value, pair: [first.clashes[0].a, first.clashes[0].b], volume: first.clashes[0].volume } : null,
    minGap, gapFlags, peaks, open: rows.filter((r) => !r.closed).length,
  };
  return { spec: { ...spec, key, from, to, duration, steps, law }, key, unit: A.VALUE_UNIT[key] || '', clamped, tracks, rows, summary, notes };
}

// ------------------------------------------------------------------------------------------------ plots and files

/** The series a plot draws. what: 'position' (x, y, z of each track), 'speed', 'acceleration', 'value' (the joint value and its rate), 'clearance'. */
export function series(study, what, instName = (id) => id) {
  const R = study.rows;
  const nameOf = (id) => (study.tracks.find((q) => q.id === id) || {}).name || id;
  const out = [];
  if (what === 'position') study.tracks.forEach((tr, i) => ['x', 'y', 'z'].forEach((ax, c) => out.push({ id: tr.id + '.' + ax, name: nameOf(tr.id) + ' ' + ax.toUpperCase(), unit: 'mm', points: R.map((r) => [r.time, r.tracks[i].pos[c]]) })));
  else if (what === 'speed') study.tracks.forEach((tr, i) => out.push({ id: tr.id, name: nameOf(tr.id), unit: 'mm/s', points: R.map((r) => [r.time, r.tracks[i].speed]) }));
  else if (what === 'acceleration') study.tracks.forEach((tr, i) => out.push({ id: tr.id, name: nameOf(tr.id), unit: 'mm/s²', points: R.map((r) => [r.time, Math.hypot(...r.tracks[i].acc)]) }));
  else if (what === 'value') {
    out.push({ id: 'value', name: study.key, unit: study.unit, points: R.map((r) => [r.time, r.value]) });
    out.push({ id: 'rate', name: study.key + '/s', unit: study.unit + '/s', points: R.map((r) => [r.time, r.rate]) });
  } else if (what === 'clearance') {
    const keys = new Map();
    for (const r of R) for (const g of r.gaps) keys.set(g.a + '|' + g.b, [g.a, g.b]);
    for (const [k, [a, b]] of keys) out.push({ id: k, name: instName(a) + ' – ' + instName(b), unit: 'mm', points: R.map((r) => { const g = r.gaps.find((x) => x.a === a && x.b === b); return [r.time, g ? g.gap : null]; }) });
  }
  return out;
}

const PALETTE = ['#2b6cb0', '#c05621', '#2f855a', '#b83280', '#6b46c1', '#2c7a7b'];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nice = (lo, hi, n = 5) => {
  if (!(hi > lo)) { hi = lo + 1; }
  const raw = (hi - lo) / n, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p, step = (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p;
  const a = Math.floor(lo / step) * step, b = Math.ceil(hi / step) * step, ticks = [];
  for (let v = a; v <= b + step * 1e-9; v += step) ticks.push(Math.abs(v) < step * 1e-9 ? 0 : v);
  return { lo: a, hi: b, ticks };
};
const fmt = (v) => String(Number(v.toPrecision(4)));

/** Line plot as SVG text: axes, ticks, one line per series (gaps in a series break the line). opts: { width, height, title, xLabel, yLabel }. */
export function plotSvg(list, opts = {}) {
  const W = opts.width || 520, H = opts.height || 260, m = { l: 56, r: 12, t: opts.title ? 26 : 10, b: 38 };
  const pts = list.flatMap((s) => s.points.filter((p) => p[1] !== null && Number.isFinite(p[1])));
  const x = nice(Math.min(...pts.map((p) => p[0]), 0), Math.max(...pts.map((p) => p[0]), 1e-9)), y = nice(Math.min(...pts.map((p) => p[1]), 0), Math.max(...pts.map((p) => p[1]), 1e-9));
  const sx = (v) => m.l + (v - x.lo) / (x.hi - x.lo) * (W - m.l - m.r), sy = (v) => H - m.b - (v - y.lo) / (y.hi - y.lo) * (H - m.t - m.b);
  const o = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" font-family="sans-serif" font-size="11">`];
  if (opts.title) o.push(`<text x="${m.l}" y="16" font-size="12" font-weight="bold" fill="currentColor">${esc(opts.title)}</text>`);
  for (const v of y.ticks) o.push(`<line x1="${m.l}" x2="${W - m.r}" y1="${sy(v).toFixed(1)}" y2="${sy(v).toFixed(1)}" stroke="currentColor" stroke-opacity="0.15"/><text x="${m.l - 6}" y="${(sy(v) + 4).toFixed(1)}" text-anchor="end" fill="currentColor">${fmt(v)}</text>`);
  for (const v of x.ticks) o.push(`<line x1="${sx(v).toFixed(1)}" x2="${sx(v).toFixed(1)}" y1="${m.t}" y2="${H - m.b}" stroke="currentColor" stroke-opacity="0.15"/><text x="${sx(v).toFixed(1)}" y="${H - m.b + 14}" text-anchor="middle" fill="currentColor">${fmt(v)}</text>`);
  o.push(`<rect x="${m.l}" y="${m.t}" width="${W - m.l - m.r}" height="${H - m.t - m.b}" fill="none" stroke="currentColor" stroke-opacity="0.5"/>`);
  list.forEach((s, i) => {
    const col = PALETTE[i % PALETTE.length];
    let d = '', pen = false;
    for (const [px, py] of s.points) { if (py === null || !Number.isFinite(py)) { pen = false; continue; } d += (pen ? 'L' : 'M') + sx(px).toFixed(1) + ' ' + sy(py).toFixed(1); pen = true; }
    o.push(`<path d="${d}" fill="none" stroke="${col}" stroke-width="1.6"/>`);
    o.push(`<text x="${m.l + 6 + i * 96}" y="${m.t + 12}" fill="${col}">${esc(s.name)}</text>`);
  });
  if (opts.xLabel) o.push(`<text x="${(m.l + W - m.r) / 2}" y="${H - 6}" text-anchor="middle" fill="currentColor">${esc(opts.xLabel)}</text>`);
  if (opts.yLabel) o.push(`<text transform="translate(12 ${(m.t + H - m.b) / 2}) rotate(-90)" text-anchor="middle" fill="currentColor">${esc(opts.yLabel)}</text>`);
  o.push('</svg>');
  return o.join('');
}

const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
const f4 = (v) => (Number.isFinite(v) ? String(+v.toFixed(5)) : '');

/** One row per step: time, the driven value and its rate, then per track its position, velocity and speed, the clashes and the least gap. */
export function csv(study, instName = (id) => id) {
  const head = [t('motion.csv.step'), t('motion.csv.time'), study.key + ' (' + study.unit + ')', t('motion.csv.rate')];
  for (const tr of study.tracks) for (const c of ['x', 'y', 'z']) head.push(tr.name + ' ' + c + ' (mm)');
  for (const tr of study.tracks) head.push(tr.name + ' ' + t('motion.csv.speed') + ' (mm/s)');
  head.push(t('motion.csv.clashes'), t('motion.csv.min_gap'));
  const lines = [head.map(cell).join(',')];
  for (const r of study.rows) {
    const row = [r.k, f4(r.time), f4(r.value), f4(r.rate)];
    r.tracks.forEach((q) => row.push(f4(q.pos[0]), f4(q.pos[1]), f4(q.pos[2])));
    r.tracks.forEach((q) => row.push(f4(q.speed)));
    row.push(r.clashes.map((c) => instName(c.a) + ' × ' + instName(c.b)).join('; '), r.gaps.length ? f4(Math.min(...r.gaps.map((g) => g.gap))) : '');
    lines.push(row.map(cell).join(','));
  }
  return '﻿' + lines.join('\r\n') + '\r\n';
}
