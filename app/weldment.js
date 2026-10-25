/* SPDX-License-Identifier: Apache-2.0 */
/**
 * weldment.js — the Structural member feature: steel sections along sketch lines (0.7 D7.50, session part-08; DOM-free).
 *
 *   member { segs: [{ sketch, line }], section, rotate, anchor, corner: 'miter'|'butt', caps: null|{ t }, gussets: null|{ size, t } }
 *     segs: lines of one or several sketches (sketches on different planes make a frame in 3D); section: a name from the section
 *     table (shapes/sections.js, a copy of lib/shapes: AISC W/S/C/L/HSS/Pipe, EN IPE/HEA/HEB/UPN); rotate: degrees the section
 *     turns about its line; anchor: which point of the section's bounding box sits on the line (c = centre, tl tc tr ml mr bl
 *     bc br); corner: where two members meet end to end, both are cut on the plane halfway between them (miter), or the first
 *     runs through to the far face of the second and the second is cut square at the first's near face (butt); a member ending on another
 *     one's middle (a T) or where three or more meet is cut to fit against the first of them; caps: plates `t` thick on every free
 *     end (the section's outline); gussets: triangular plates `size` along each member, `t` thick, in the plane of every corner
 *     where two members meet at an angle.
 *   Orientation: the section's depth (v) points up (world +Y) unless the line is upright, then toward +Z; then `rotate`.
 *
 *   memberTools(f, ctx, lib) → { tools: [{ m, op: 'add', surfs }], info: { cutList, members } }   (kernel.js builds it)
 *   cutList(info) → rows [{ kind: 'member'|'cap'|'gusset', section, length, angles: [a0, a1], ends: [kind0, kind1], qty, items }]
 *   cutListCsv(rows, labels) → CSV text (formula cells escaped)
 */
import * as V from './vec.js';
import { byId, pointXY } from './sketch.js';
import { findSection, outline, displayName } from './shapes/sections.js';
import { registerParamField } from './params-part.js';
import * as MF from './meshfaces.js';
import { t } from './i18n.js';

export const WELD_LABELS = { get member() { return t('model.feature.member'); } };
export const WELD_BASE = { member: 'Member' };
export const ANCHORS = ['c', 'tl', 'tc', 'tr', 'ml', 'mr', 'bl', 'bc', 'br'];
export const CORNERS = ['miter', 'butt'];
export const DEFAULT_SECTION = 'HSS2X2X1/4';
export const WELD_DEFAULTS = { member: () => ({ segs: [], section: DEFAULT_SECTION, rotate: 0, anchor: 'c', corner: 'miter', caps: null, gussets: null }) };
export const MAX_SEGS = 500;

registerParamField('member', 'rotate', { get label() { return t('weld.param.rotate'); }, kind: 'angle', min: -360, max: 360 });

const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

/** Fill g from the untrusted feature f; c = part.js's reader context. → true for a member. */
export function readMember(f, g, c) {
  if (f.type !== 'member') return false;
  const need = (ok, key) => { if (!ok) throw new Error(t(key, { name: g.name })); };   // key: "{name}: … is bad."
  need(Array.isArray(f.segs) && f.segs.length <= MAX_SEGS && f.segs.every((s) => s && c.ids.has(s.sketch) && c.types.get(s.sketch) === 'sketch' && typeof s.line === 'string' && s.line.length <= 40), 'model.file.bad.its_lines');
  need(typeof f.section === 'string' && f.section.length <= 40 && !!findSection(f.section), 'model.file.bad.its_section');
  need(num(f.rotate ?? 0, -360, 360), 'model.file.bad.the_angle');
  need(ANCHORS.includes(f.anchor ?? 'c'), 'model.file.bad.its_anchor');
  need(CORNERS.includes(f.corner ?? 'miter'), 'model.file.bad.its_corners');
  need(f.caps == null || (typeof f.caps === 'object' && num(f.caps.t, 0.1, 1000)), 'model.file.bad.its_caps');
  need(f.gussets == null || (typeof f.gussets === 'object' && num(f.gussets.size, 1, 1e5) && num(f.gussets.t, 0.1, 1000)), 'model.file.bad.its_gussets');
  Object.assign(g, {
    segs: f.segs.map((s) => ({ sketch: s.sketch, line: s.line })), section: findSection(f.section).name, rotate: f.rotate ?? 0, anchor: f.anchor ?? 'c',
    corner: f.corner ?? 'miter', caps: f.caps ? { t: f.caps.t } : null, gussets: f.gussets ? { size: f.gussets.size, t: f.gussets.t } : null,
  });
  return true;
}
export const usesMember = (part) => part.features.some((f) => f.type === 'member');
/** The sketches a member feature needs. */
export const memberDeps = (f) => (f.type === 'member' && Array.isArray(f.segs) ? [...new Set(f.segs.map((s) => s.sketch))] : []);

/** The section's loops with the anchor point at (0, 0), and its bounding box. */
function profileLoops(p, anchor) {
  const loops = outline(p, 4);
  let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
  for (const [u, v] of loops[0]) { lo = [Math.min(lo[0], u), Math.min(lo[1], v)]; hi = [Math.max(hi[0], u), Math.max(hi[1], v)]; }
  const au = anchor[1] === 'l' ? lo[0] : anchor[1] === 'r' ? hi[0] : (lo[0] + hi[0]) / 2;
  const av = anchor[0] === 't' ? hi[1] : anchor[0] === 'b' ? lo[1] : (lo[1] + hi[1]) / 2;
  const a = anchor === 'c' ? [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2] : anchor === 'ml' ? [lo[0], (lo[1] + hi[1]) / 2] : anchor === 'mr' ? [hi[0], (lo[1] + hi[1]) / 2] : [au, av];
  const out = loops.map((l) => l.map(([u, v]) => [u - a[0], v - a[1]]));
  return { loops: out, w: hi[0] - lo[0], h: hi[1] - lo[1], R: Math.max(...out[0].map(([u, v]) => Math.hypot(u, v))) };
}

/** The member's frame: u across, v the section's depth, d along the line (right-handed: u = v × d). */
function memberFrame(d, rotate) {
  const up = Math.abs(d[1]) > 0.999 ? [0, 0, 1] : [0, 1, 0];
  let v = V.norm(V.sub(up, V.mul(d, V.dot(up, d))));
  let u = V.cross(v, d);
  if (rotate) { const R = V.rotationAbout([0, 0, 0], d, rotate); u = V.applyDir(R, u); v = V.applyDir(R, v); }
  return { u: V.norm(u), v: V.norm(v) };
}

/**
 * Build the members. lib: { fail, frames (sketch id → frame), sketchOf(id) → feature }. Each member is one tool; caps and
 * gussets are tools of their own. Surfaces: each member's long flat sides `<id>.m<i>.side:<k>` and its cut ends `.end0` /
 * `.end1`; caps `<id>.cap<i>:<end>` (planes).
 */
export function memberTools(f, ctx, lib) {
  const { fail } = lib;
  if (!f.segs.length) fail(t('weld.err.no_lines'));
  const p = findSection(f.section);
  if (!p) fail(t('weld.err.section', { section: f.section }));
  const prof = profileLoops(p, f.anchor || 'c');
  // the lines in the world
  const mem = f.segs.map((s, i) => {
    const frame = lib.frames.get(s.sketch), sf = lib.sketchOf(s.sketch);
    if (!frame || !sf) fail(t('weld.err.sketch_not_built'));
    const l = byId(sf.sketch, s.line);
    if (!l || l.type !== 'line') fail(t('weld.err.line_gone', { sketch: sf.name }));
    const a = V.toWorld(frame, ...pointXY(sf.sketch, l.p1)), b = V.toWorld(frame, ...pointXY(sf.sketch, l.p2));
    const L = V.len(V.sub(b, a));
    if (!(L > 1e-6)) fail(t('weld.err.zero_line', { sketch: sf.name }));
    const d = V.mul(V.sub(b, a), 1 / L);
    return { i, a, b, L, d, ...memberFrame(d, f.rotate || 0), ends: [{ kind: 'free' }, { kind: 'free' }] };
  });
  let size = 0;
  for (const m of mem) size = Math.max(size, V.len(m.a), V.len(m.b), m.L);
  const tol = 1e-6 * Math.max(1, size);
  // nodes: line ends that meet (within tol)
  const nodes = [];
  for (const m of mem) for (const e of [0, 1]) {
    const P = e ? m.b : m.a;
    let nd = nodes.find((n) => V.len(V.sub(n.P, P)) <= tol);
    if (!nd) nodes.push((nd = { P, ends: [] }));
    nd.ends.push({ m, e });
  }
  // a line end on another line's middle: a T
  for (const nd of nodes) {
    if (nd.ends.length !== 1) continue;
    const { m } = nd.ends[0];
    for (const o of mem) {
      if (o === m) continue;
      const s = V.dot(V.sub(nd.P, o.a), o.d);
      if (s <= tol || s >= o.L - tol) continue;
      if (V.len(V.sub(V.add(o.a, V.mul(o.d, s)), nd.P)) <= tol) { nd.through = o; break; }
    }
  }
  const R = prof.R;
  const extFor = (cosA) => { const half = Math.acos(Math.max(-1, Math.min(1, cosA))) / 2; return Math.min(50 * R, R / Math.max(Math.tan(half), 0.02)) + R; };
  // what happens at each end: ext (how far past the node the raw member runs), a plane to keep behind, or a member to fit against
  for (const nd of nodes) {
    if (nd.through) { const { m, e } = nd.ends[0]; m.ends[e] = { kind: 'cope', ext: R + 1e-3, against: [nd.through] }; continue; }
    if (nd.ends.length === 1) continue;
    if (nd.ends.length === 2) {
      const [A, B] = nd.ends;
      const dIn = A.e === 1 ? A.m.d : V.mul(A.m.d, -1);    // A's direction toward the node
      const dOut = B.e === 0 ? B.m.d : V.mul(B.m.d, -1);   // B's direction away from the node
      if (V.dot(dIn, dOut) < -1 + 1e-9) fail(t('weld.err.fold_back'));
      if ((f.corner || 'miter') === 'miter') {
        const n = V.norm(V.add(dIn, dOut)), ext = extFor(V.dot(dIn, dOut));
        // A keeps n·x ≤ n·P, B keeps n·x ≥ n·P
        A.m.ends[A.e] = { kind: 'miter', ext, plane: { n: V.mul(n, -1), off: -V.dot(n, nd.P) }, cut: n };
        B.m.ends[B.e] = { kind: 'miter', ext, plane: { n, off: V.dot(n, nd.P) }, cut: n };
      } else {
        // butt: A runs to B's far face (B's section extent along A's direction); B is cut square at A's near face (A's extent
        // along B's direction), as a tube is cut before it is welded on (a fit to A's rounded corners would leave slivers)
        const reachB = Math.max(...prof.loops[0].map(([u, v]) => Math.abs(V.dot(V.add(V.mul(B.m.u, u), V.mul(B.m.v, v)), dIn))));
        const reachA = Math.max(...prof.loops[0].map(([u, v]) => Math.abs(V.dot(V.add(V.mul(A.m.u, u), V.mul(A.m.v, v)), dOut))));
        A.m.ends[A.e] = { kind: 'butt', ext: reachB + R, plane: { n: V.mul(dIn, -1), off: -V.dot(dIn, nd.P) - reachB }, cut: dIn };
        B.m.ends[B.e] = { kind: 'butt', ext: 0, plane: { n: dOut, off: V.dot(dOut, nd.P) + reachA }, cut: dOut };
      }
      if (f.gussets && Math.abs(V.dot(dIn, dOut)) < 1 - 1e-6) nd.gusset = { dIn, dOut };
      continue;
    }
    // three or more: the first runs square to the far side of the others, the others are cut to fit against it
    const [first, ...rest] = nd.ends;
    const dIn = first.e === 1 ? first.m.d : V.mul(first.m.d, -1);
    let reach = 0;
    for (const o of rest) reach = Math.max(reach, ...prof.loops[0].map(([u, v]) => Math.abs(V.dot(V.add(V.mul(o.m.u, u), V.mul(o.m.v, v)), dIn))));
    first.m.ends[first.e] = { kind: 'butt', ext: reach + R, plane: { n: V.mul(dIn, -1), off: -V.dot(dIn, nd.P) - reach }, cut: dIn };
    for (const o of rest) o.m.ends[o.e] = { kind: 'cope', ext: R + 1e-3, against: [first.m] };
  }
  // raw members (each run past its ends as far as its end needs), then the plane cuts
  const M = ctx.M, T = ctx.T;
  const cs = T(new M.CrossSection(prof.loops, 'EvenOdd'));
  const csOuter = T(new M.CrossSection([prof.loops[0]], 'Positive'));   // the outside: what another member is cut to fit against
  for (const m of mem) {
    const e0 = m.ends[0].ext || 0, e1 = m.ends[1].ext || 0;
    const start = V.sub(m.a, V.mul(m.d, e0)), B = V.basisMatrix(m.u, m.v, m.d, start);
    let s = T(T(cs.extrude(m.L + e0 + e1)).transform(B)), env = T(T(csOuter.extrude(m.L + e0 + e1)).transform(B));
    for (const e of [0, 1]) { const end = m.ends[e]; if (end.plane) { s = T(s.trimByPlane(end.plane.n, end.plane.off)); env = T(env.trimByPlane(end.plane.n, end.plane.off)); } }
    m.solid = s; m.env = env;
  }
  // fits: a member cut against the (plane-cut) members it meets
  for (const m of mem) for (const e of [0, 1]) {
    const end = m.ends[e];
    if (end.kind !== 'cope') continue;
    for (const o of end.against) m.solid = T(m.solid.subtract(o.env));
    // the part of the member on the far side of the one it meets goes (a T in the middle of a tube would otherwise go through)
    const parts = m.solid.decompose();
    if (parts.length > 1) {
      // keep the piece that holds the member's middle
      const mid = V.add(m.a, V.mul(m.d, m.L / 2));
      let keep = parts[0], best = Infinity;
      for (const q of parts) { const bb = q.boundingBox(); const c = [0, 1, 2].map((k) => (bb.min[k] + bb.max[k]) / 2); const dd = V.len(V.sub(c, mid)); if (dd < best) { best = dd; keep = q; } }
      for (const q of parts) if (q !== keep) q.delete(); else T(q);
      m.solid = keep;
    } else parts.forEach((q) => T(q));
  }
  const tools = [];
  // surfaces of a member: its long flat sides (straight outline edges longer than a tenth of the section), its cut ends
  const sideSurfs = (m) => {
    const out = [];
    const big = 0.1 * Math.max(prof.w, prof.h);
    prof.loops.forEach((loop) => loop.forEach((q, k) => {
      const r = loop[(k + 1) % loop.length];
      if (Math.hypot(r[0] - q[0], r[1] - q[1]) < big) return;
      const tu = [r[0] - q[0], r[1] - q[1]], nn = [tu[1], -tu[0]];   // outward for a CCW outer loop, into the hole for a CW hole: the plane is the same
      const n = V.norm(V.add(V.mul(m.u, nn[0]), V.mul(m.v, nn[1])));
      const o = V.add(m.a, V.add(V.mul(m.u, q[0]), V.mul(m.v, q[1])));
      out.push(MF.plane(`${f.id}.m${m.i}.side:${out.length}`, n, o));   // i18n-ignore: a face name (identifier)
    }));
    for (const e of [0, 1]) {
      const end = m.ends[e];
      if (end.plane) out.push(MF.plane(`${f.id}.m${m.i}.end${e}`, end.plane.n, V.mul(end.plane.n, end.plane.off)));   // i18n-ignore: a face name
      else if (end.kind === 'free') out.push(MF.plane(`${f.id}.m${m.i}.end${e}`, e ? m.d : V.mul(m.d, -1), e ? m.b : m.a));   // i18n-ignore: a face name
    }
    return out;
  };
  for (const m of mem) tools.push({ m: m.solid, op: 'add', surfs: sideSurfs(m) });
  // caps on free ends: the section's outline, t thick, outside the end
  const caps = [];
  if (f.caps) {
    const outer = T(new M.CrossSection([prof.loops[0]], 'Positive'));
    for (const m of mem) for (const e of [0, 1]) {
      if (m.ends[e].kind !== 'free') continue;
      const out = e ? m.d : V.mul(m.d, -1), at = e ? m.b : m.a;
      // the member's own u, v (so a channel's or an angle's cap matches it), extruded outward: at the start end that frame is a
      // mirror image, which manifold turns the right way out
      const plate = T(T(outer.extrude(f.caps.t)).transform(V.basisMatrix(m.u, m.v, out, at)));
      tools.push({ m: plate, op: 'add', surfs: [MF.plane(`${f.id}.cap${m.i}:${e}`, out, V.add(at, V.mul(out, f.caps.t)))] });   // i18n-ignore: a face name
      caps.push({ member: m.i, end: e });
    }
  }
  // gussets: a right triangle in the corner's plane, `size` along each member from the node, centred on that plane
  const gussets = [];
  if (f.gussets) for (const nd of nodes) {
    if (!nd.gusset) continue;
    const { dIn, dOut } = nd.gusset;
    const nG = V.norm(V.cross(dIn, dOut));
    const x = V.mul(dIn, -1), y = V.norm(V.cross(nG, x));
    const s = f.gussets.size;
    const q2 = [V.dot(V.mul(dOut, s), x), V.dot(V.mul(dOut, s), y)];
    const tri = [[0, 0], [s, 0], q2];
    const area = (tri[1][0] - tri[0][0]) * (tri[2][1] - tri[0][1]) - (tri[2][0] - tri[0][0]) * (tri[1][1] - tri[0][1]);
    const loop = area > 0 ? tri : [tri[0], tri[2], tri[1]];
    const g = T(T(T(new M.CrossSection([loop], 'Positive')).extrude(f.gussets.t)).transform(V.basisMatrix(x, y, nG, V.sub(nd.P, V.mul(nG, f.gussets.t / 2)))));
    tools.push({ m: g, op: 'add' });
    gussets.push({ size: s, t: f.gussets.t, angle: Math.acos(Math.max(-1, Math.min(1, V.dot(x, dOut)))) * 180 / Math.PI });
  }
  // the cut list: each member's length along its line (its long point to long point) and its end cuts
  const members = mem.map((m) => {
    const gm = m.solid.getMesh();
    const np = gm.numProp, P = gm.vertProperties;
    let lo = Infinity, hi = -Infinity;
    for (let k = 0; k < P.length; k += np) { const s = (P[k] - m.a[0]) * m.d[0] + (P[k + 1] - m.a[1]) * m.d[1] + (P[k + 2] - m.a[2]) * m.d[2]; if (s < lo) lo = s; if (s > hi) hi = s; }
    const ang = (e) => { const end = m.ends[e]; if (!end.cut) return 0; return Math.round(Math.acos(Math.min(1, Math.abs(V.dot(end.cut, m.d)))) * 180 / Math.PI * 100) / 100; };
    return { i: m.i, length: Math.round((hi - lo) * 10) / 10, angles: [ang(0), ang(1)], ends: m.ends.map((e, k) => (e.kind === 'cope' ? 'fit' : ang(k) > 0.005 ? 'angle' : 'square')) };
  });
  return {
    tools,
    count: mem.length,
    info: { section: p.name, display: displayName(p.name), w: prof.w, h: prof.h, members, caps: caps.map((c) => ({ ...c, t: f.caps.t, w: prof.w, h: prof.h })), gussets },
  };
}

/** The cut list: identical pieces grouped. → rows [{ kind, section, length, angles, ends, qty, items }] (items = member numbers). */
export function cutList(info) {
  if (!info) return [];
  const rows = new Map();
  const add = (key, row, item) => { const r = rows.get(key); if (r) { r.qty++; r.items.push(item); } else rows.set(key, { ...row, qty: 1, items: [item] }); };
  for (const m of info.members) {
    const [a0, a1] = m.angles[0] <= m.angles[1] ? m.angles : [m.angles[1], m.angles[0]];
    const [k0, k1] = m.angles[0] <= m.angles[1] ? m.ends : [m.ends[1], m.ends[0]];
    add(['m', info.section, m.length.toFixed(1), a0, a1, k0, k1].join('|'), { kind: 'member', section: info.display, length: m.length, angles: [a0, a1], ends: [k0, k1] }, m.i + 1);
  }
  for (const c of info.caps) add(['c', c.t, c.w.toFixed(1), c.h.toFixed(1)].join('|'), { kind: 'cap', section: '', length: 0, t: c.t, w: c.w, h: c.h }, c.member + 1);
  for (const g of info.gussets) add(['g', g.size, g.t, g.angle.toFixed(1)].join('|'), { kind: 'gusset', section: '', length: 0, t: g.t, size: g.size, angle: g.angle }, 0);
  return [...rows.values()];
}

const csvCell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
/** CSV of the cut list. labels: { head: [7 column names], member, cap, gusset, square, angle, fit } (the page's words). */
export function cutListCsv(rows, labels) {
  const out = [labels.head.map(csvCell).join(',')];
  rows.forEach((r, n) => {
    const what = r.kind === 'member' ? r.section : r.kind === 'cap' ? labels.cap : labels.gusset;
    const size = r.kind === 'member' ? r.length.toFixed(1) : r.kind === 'cap' ? `${r.w.toFixed(1)} x ${r.h.toFixed(1)} x ${r.t}` : `${r.size} x ${r.size} x ${r.t}`;   // i18n-ignore: a size written into a CSV
    const ends = r.kind === 'member' ? r.ends.map((e, k) => (e === 'fit' ? labels.fit : e === 'angle' ? `${r.angles[k]}°` : labels.square)).join(' / ') : '';
    out.push([n + 1, r.qty, labels[r.kind], what, size, ends, r.items.filter(Boolean).join(' ')].map(csvCell).join(','));
  });
  return out.join('\n') + '\n';
}
