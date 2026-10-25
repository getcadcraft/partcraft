/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-paths.js — PartCraft's 2.5-axis toolpaths (DOM-free): face, 2D pocket, 2D contour, drill, chamfer,
 * plus the program (every operation in order, tool changes) and the canned-cycle expansion the posts and
 * the simulation share.
 *
 *   moves  {k:'rapid', p:[x,y,z]} | {k:'feed', p, f} | {k:'arc', p (end), c:[cx,cy], sw (signed sweep, ≤ π), f}
 *          (arcs are in the XY plane, helical when z changes) | {k:'cycle', kind drill|peck|chipbreak, init (z),
 *          f, holes:[{at:[x,y], top, z (bottom), r (R plane), q (peck), ret 'r'|'init'}]}
 *   opPath {op, tool, speeds, moves, warnings[], info{}}
 *
 * Methods (2.5-axis: the tool axis stays vertical; walls are vertical, floors flat):
 *   pocket  offset clearing from the exact region (cam-offset.offsetRegion): wall pass at r + leave, then
 *           every stepover inward until nothing is left, cut inside-out (each component's inner loops, then
 *           the loop around them; climb milling: material on the tool's right). Stepover ≤ r (50 % of D)
 *           so every point of the floor is within one tool radius of a pass (the level set argument:
 *           a point at distance δ from the walls lies δ − d_k < s ≤ r from the pass at the level d_k ≤ δ).
 *           Entry by helix (where a circle of the helix radius fits), else a ramp along the loop, or a plunge.
 *           Links between nested loops stay down when the straight move keeps r from every wall; others retract.
 *   adaptive constant-engagement clearing of the same regions (cam-adaptive.js): a helix in, passes that cut a set width w
 *           (≈ the engagement angle acos(1 − w/r)), linked down through cleared air or lifted, then the walls at r + leave
 *           (exact, from cam-offset) at every level; deeper stepdowns than a pocket (the cut is narrow). 0.4 P24.
 *   contour the exact outline offset by r + leave (outside or inside), climb by default, lead-in/out arcs on the
 *           air side, optional tabs, multiple depths.
 *   drill   holes = full cylinders along the tool axis; canned cycles G81/G83/G73 (expanded for controls
 *           without them); the R plane clears the part and the stock left by earlier operations.
 *   chamfer chamfer mill along an outline, offset so the cone cuts the asked width.
 *   face    zig-zag over the stock, overhanging its edges, down to the model top.
 *   parallel, scallop   3D finishing of the whole model (cam-finish.js).
 */
import * as O from './cam-offset.js';
import { speeds, profile, KINDS } from './cam-tools.js';
import { stockLoop, machineModel } from './cam.js';
import { adaptivePasses } from './cam-adaptive.js';
import { opParallel, opScallop } from './cam-finish.js';
import { t } from './i18n.js';

import { PECK_BACKOFF, expandCycle } from './cam-cycle.js';
export { PECK_BACKOFF, expandCycle };
const fmt = (v) => String(+Number(v).toFixed(3));

class Path {
  constructor() { this.moves = []; this.pos = null; }
  same(p) { return this.pos && Math.abs(this.pos[0] - p[0]) < 1e-9 && Math.abs(this.pos[1] - p[1]) < 1e-9 && Math.abs(this.pos[2] - p[2]) < 1e-9; }
  rapid(x, y, z) { const p = [x, y, z]; if (this.same(p)) return; this.moves.push({ k: 'rapid', p }); this.pos = p; }
  rapidZ(z) { if (this.pos) this.rapid(this.pos[0], this.pos[1], z); }
  feed(x, y, z, f) { const p = [x, y, z]; if (this.same(p)) return; this.moves.push({ k: 'feed', p, f }); this.pos = p; }
  feedZ(z, f) { this.feed(this.pos[0], this.pos[1], z, f); }
  /** One prim at z0 → z1 (lines become G1, arcs G2/G3, split ≤ 180°). */
  prim(p, z0, z1, f) {
    if (p.k === 'L') { this.feed(p.e[0], p.e[1], z1, f); return; }
    const parts = O.limitArcs([p]);
    let z = z0;
    const L = O.lengthOf(p);
    for (const q of parts) {
      const zn = parts.length === 1 ? z1 : z + (z1 - z0) * (O.lengthOf(q) / L);
      const end = [q.e[0], q.e[1], q === parts[parts.length - 1] ? z1 : zn];
      if (!this.same(end)) { this.moves.push({ k: 'arc', p: end, c: q.c.slice(), sw: q.sw, f }); this.pos = end; }
      z = zn;
    }
  }
  loop(loop, z, f) { for (const p of loop) this.prim(p, z, z, f); }
  /** Follow prims while z goes linearly from z0 to z1 over their length. */
  ramp(prims, z0, z1, f) {
    const L = prims.reduce((s, p) => s + O.lengthOf(p), 0);
    let acc = 0;
    for (const p of prims) { const a = z0 + (z1 - z0) * (acc / L); acc += O.lengthOf(p); this.prim(p, a, z0 + (z1 - z0) * (acc / L), f); }
  }
}

function levels(top, bottom, step) {
  if (!(top > bottom + 1e-9)) return [];
  const n = Math.max(1, Math.ceil((top - bottom) / step - 1e-9));
  return Array.from({ length: n }, (_, i) => (i === n - 1 ? bottom : top - ((top - bottom) * (i + 1)) / n));
}

function heights(op, ctx, geomTop, geomBottom) {
  const p = op.params, st = ctx.model.stock.max[2];
  const top = p.top ?? geomTop ?? st;
  const bottom = (p.bottom ?? geomBottom) + (p.bottom === null ? p.bottomOff : 0);
  const clearance = st + p.clearance;
  return { clearance, retract: Math.min(clearance, st + p.retract), feed: top + p.feedHeight, top, bottom };
}

/** Is the straight move a → b (2D) at least dmin from every wall of the region and inside it? */
function safeLink(a, b, region, dmin, grow = false) {
  const L = O.dist(a, b), n = Math.max(1, Math.ceil(L / 0.25));
  for (let i = 0; i <= n; i++) {
    const q = [a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n];
    if (O.inside(region, q) === grow) return false;
    if (O.distToLoops(q, region, dmin - 1e-6) < dmin - 1e-6) return false;
  }
  return true;
}

// ---------------------------------------------------------------- geometry of a selection

/** Regions to pocket: [{loops, top, bottom, through, open, what}] */
function pocketRegions(op, ctx) {
  const { model } = ctx;
  const out = [];
  const R = ctx.tool.d / 2;
  for (const ref of op.geo.faces) {
    const i = model.faceIndex(ref);
    if (i < 0) throw new Error(t('mfg.err.face_gone', { name: ref.name }));
    const f = model.faces[i];
    if (f.type === 'plane') {
      if (!model.isFloor(f)) throw new Error(t('mfg.pick.floor_or_hole'));
      const { z, loops } = model.faceLoops(i);
      const outer = loops.filter((l) => O.loopArea(l) > 0), inner = loops.filter((l) => O.loopArea(l) < 0);
      const keep = [];
      let open = false;
      for (const l of outer) {
        // open when the part is lower all round just outside the loop
        const lower = sampleSide(l, 0.5, -1).every((q) => !(model.heightAt(q[0], q[1]) > z + model.tol));
        if (lower) open = true; else keep.push(l);
      }
      const islands = inner.filter((l) => sampleSide(l, 0.5, -1).some((q) => model.heightAt(q[0], q[1]) > z + model.tol));
      const loops2 = open ? [stockLoop(model, R + 0.5), ...islands] : [...keep, ...islands];
      out.push({ loops: O.orientRegion(loops2), bottom: z, through: false, open, what: open ? t('mfg.region.open_face') : t('mfg.region.face') });
    } else if (f.type === 'cylinder') {
      const h = model.cylinderInfo(i);
      if (!h || !h.hole || !h.full) throw new Error(t('mfg.pick.hole_or_flat'));
      out.push({ loops: [[O.circle(h.c, h.r)]], bottom: h.bottom, through: h.through, open: false, what: t('mfg.region.hole', { d: fmt(2 * h.r) }) });
    } else throw new Error(t('mfg.pick.pocket'));
  }
  if (op.geo.edges.length) {
    const idx = op.geo.edges.map((r) => { const k = model.edgeIndex(r); if (k < 0) throw new Error(t('mfg.err.edge_gone')); return k; });
    const { z, loop } = model.edgeLoop(idx);
    out.push({ loops: O.orientRegion([loop]), bottom: z, through: false, open: false, what: t('mfg.region.edges') });
  }
  return out;
}
/** Points just off a loop: side +1 = its left, −1 = its right (outside a ccw outer loop, inside a cw hole). */
function sampleSide(loop, off, side) {
  const out = [];
  for (const p of loop) for (const t of [0.25, 0.5, 0.75]) {
    const q = O.pointAt(p, t), tg = O.tangentAt(p, t);
    out.push([q[0] - tg[1] * off * side, q[1] + tg[0] * off * side]);
  }
  return out;
}

/** Outlines to follow: [{loops (region), side, top?, bottom, through}] for contour and chamfer. */
function outlineSets(op, ctx, sideParam, withHoles) {
  const { model } = ctx;
  const out = [];
  for (const ref of op.geo.faces) {
    const i = model.faceIndex(ref);
    if (i < 0) throw new Error(t('mfg.err.face_gone', { name: ref.name }));
    const f = model.faces[i];
    if (f.type === 'plane') {
      if (Math.abs(Math.abs(f.n[2]) - 1) > 1e-9) throw new Error(t('mfg.pick.flat_square'));
      const { z, loops } = model.faceLoops(i);
      const outer = loops.filter((l) => O.loopArea(l) > 0);
      const side = sideParam === 'auto' ? 'outside' : sideParam;
      const use = withHoles ? loops : outer;
      if (side === 'outside') out.push({ loops: O.orientRegion(use), side, z, bottom: model.bottom, through: true });
      else for (const l of outer) out.push({ loops: [l], side, z, bottom: z, through: false });
    } else if (f.type === 'cylinder') {
      const h = model.cylinderInfo(i);
      if (!h || !h.full) throw new Error(t('mfg.pick.full_round'));
      const side = sideParam === 'auto' ? (h.hole ? 'inside' : 'outside') : sideParam;
      const through = h.hole ? h.through : Math.abs(h.bottom - model.bottom) < model.tol;
      out.push({ loops: [[O.circle(h.c, h.r)]], side, z: h.top, bottom: h.bottom, through });
    } else throw new Error(t('mfg.pick.outline_kinds'));
  }
  if (op.geo.edges.length) {
    const idx = op.geo.edges.map((r) => { const k = model.edgeIndex(r); if (k < 0) throw new Error(t('mfg.err.edge_gone')); return k; });
    const { z, loop } = model.edgeLoop(idx);
    out.push({ loops: O.orientRegion([loop]), side: sideParam === 'auto' ? 'outside' : sideParam, z, bottom: z, through: Math.abs(z - model.bottom) < model.tol });
  }
  return out;
}

// ---------------------------------------------------------------- operations

function opFace(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2;
  const h = heights(op, ctx, null, model.top);
  const s = model.stock;
  const zs = levels(h.top, h.bottom, p.stepdown);
  if (!zs.length) { ctx.warn(t('mfg.face.nothing')); return; }
  const swap = p.direction === 'y';
  const a0 = swap ? s.min[1] : s.min[0], a1 = swap ? s.max[1] : s.max[0];
  const b0 = swap ? s.min[0] : s.min[1], b1 = swap ? s.max[0] : s.max[1];
  const step = p.stepover * tool.d;
  const n = Math.max(1, Math.ceil((b1 - b0) / step - 1e-9));
  const rows = Array.from({ length: n + 1 }, (_, i) => b0 + ((b1 - b0) * i) / n);
  const xa = a0 - R - p.overhang, xb = a1 + R + p.overhang;
  const at = (u, v, z) => (swap ? [v, u, z] : [u, v, z]);
  let order = rows.slice(), side = 0;   // side 0: the tool is at the low end of a row, 1: the high end
  const s0 = at(xa, order[0], 0);
  P.rapid(s0[0], s0[1], h.clearance);
  P.rapidZ(h.feed);
  for (const z of zs) {
    P.feedZ(z, sp.plunge);   // outside the stock
    order.forEach((v, i) => {
      side = 1 - side;
      const e = at(side ? xb : xa, v, z);
      P.feed(e[0], e[1], z, sp.feed);
      if (i < order.length - 1) { const n2 = at(side ? xb : xa, order[i + 1], z); P.feed(n2[0], n2[1], z, sp.feed); }
    });
    order = order.reverse();
  }
  P.rapidZ(h.clearance);
  ctx.info.rows = rows.length; ctx.info.levels = zs.length;
}

function opPocket(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2;
  if (!KINDS[tool.kind].mills || tool.kind === 'chamfer') throw new Error(t('mfg.pocket.tool'));
  const regs = pocketRegions(op, ctx);
  if (!regs.length) throw new Error(t('mfg.pocket.pick'));
  const s = p.stepover * tool.d;
  let first = true;
  for (const reg of regs) {
    const bottom0 = reg.bottom - (reg.through ? p.breakthrough : 0);
    const h = heights(op, ctx, null, bottom0);
    const roughBottom = h.bottom + p.leaveAxial;
    const zs = levels(h.top, roughBottom, p.stepdown);
    if (!zs.length) { ctx.warn(t('cam.adaptive.warn.nothing', { what: reg.what })); continue; }
    const d0 = R + p.leave;
    const tree = offsetTree(reg.loops, d0, s);
    if (!tree.length) { ctx.warn(t('cam.adaptive.warn.fit', { d: fmt(tool.d), what: reg.what })); continue; }
    ctx.info.loops = (ctx.info.loops || 0) + countLoops(tree);
    if (first) { P.rapid(...firstPoint(tree), h.clearance); first = false; }
    let zFrom = h.top;
    for (const z of zs) {
      clearLevel(tree, z, zFrom, h, reg.loops, d0, ctx, P);
      zFrom = z;
    }
    // finishing: a floor pass (axial stock left) or the walls at r
    if (p.finish && (p.leave > 0 || p.leaveAxial > 0)) {
      if (p.leaveAxial > 0) {
        const t2 = offsetTree(reg.loops, R, s);
        if (t2.length) clearLevel(t2, h.bottom, roughBottom, h, reg.loops, R, ctx, P);
      } else {
        const walls = O.offsetRegion(reg.loops, R);
        for (const w of walls) {
          const { loop } = O.startNearest(w, P.pos);
          const start = loop[0].s;
          const near = O.closestOnPrim(start, nearestPrimOf(tree[0].loops, start));
          P.rapidZ(h.retract);
          P.rapid(near.p[0], near.p[1], h.retract);
          P.rapidZ(h.bottom + p.feedHeight);
          P.feedZ(h.bottom, sp.plunge);
          P.feed(start[0], start[1], h.bottom, sp.feed);
          P.loop(loop, h.bottom, sp.feed);
          P.feed(near.p[0], near.p[1], h.bottom, sp.feed);
        }
      }
      if (h.top - h.bottom > tool.fluteLen) ctx.warn(t('mfg.pocket.finish_deep', { depth: fmt(h.top - h.bottom), flute: fmt(tool.fluteLen) }));
    }
    P.rapidZ(h.retract);
  }
  if (P.pos) P.rapidZ(model.stock.max[2] + p.clearance);
}
function insideAlong(a, b, loops) {
  const n = Math.max(1, Math.ceil(O.dist(a, b) / 0.25));
  for (let i = 1; i < n; i++) if (!O.inside(loops, [a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n])) return false;
  return true;
}
function nearestPrimOf(loops, q) {
  let best = null, bd = Infinity;
  for (const l of loops) for (const p of l) { const d = O.distToPrim(q, p); if (d < bd) { bd = d; best = p; } }
  return best;
}
function firstPoint(tree) { let n = tree[0]; while (n.children.length) n = n.children[0]; return n.loops[0][0].s; }
const countLoops = (nodes) => nodes.reduce((s, n) => s + n.loops.length + countLoops(n.children), 0);

/**
 * Offset levels d0, d0 + s, … as a tree of components: node {d, loops (outer first, then its holes), children}.
 */
export function offsetTree(region, d0, s) {
  const lv = [];
  for (let k = 0; k < 10000; k++) {
    const ls = O.offsetRegion(region, d0 + k * s);
    if (!ls.length) break;
    lv.push(components(ls, d0 + k * s));
  }
  for (let k = lv.length - 1; k > 0; k--) {
    for (const c of lv[k]) {
      const q = O.pointAt(c.loops[0][0], 0);
      const parent = lv[k - 1].find((pc) => O.inside(pc.loops, q)) || lv[k - 1][0];
      parent.children.push(c);
    }
  }
  return lv[0] || [];
}
function components(loops, d) {
  const outers = loops.filter((l) => O.loopArea(l) > 0), holes = loops.filter((l) => O.loopArea(l) < 0);
  const comps = outers.map((l) => ({ d, loops: [l], children: [], area: O.loopArea(l) }));
  for (const h of holes) {
    const q = O.pointAt(h[0], 0);
    const owner = comps.filter((c) => O.inside([c.loops[0]], q)).sort((a, b) => a.area - b.area)[0];
    if (owner) owner.loops.push(h);
  }
  return comps;
}

/** Cut one depth: every component tree inside-out, with entries and links. */
function clearLevel(tree, z, zFrom, h, region, d0, ctx, P) {
  const { tool, sp } = ctx;
  const p = ctx.op.params;
  let down = false;   // the tool is at z inside cleared material
  const enter = (node, loop) => {
    // retract, go over the start, come down to just above the cleared level, then helix / ramp / plunge
    const room = node.d - d0;
    let rho = p.helixR * tool.d;
    if (p.entry === 'helix' && room < rho) rho = room >= 0.1 * tool.d ? room : 0;
    const start = loop[0].s;
    P.rapidZ(h.retract);
    if (p.entry === 'helix' && rho > 0) {
      const hs = [start[0] + rho, start[1]];
      P.rapid(hs[0], hs[1], h.retract);
      P.rapidZ(zFrom + p.feedHeight);
      P.feedZ(zFrom, sp.plunge);
      const pitch = 2 * Math.PI * rho * Math.tan((p.rampAngle * Math.PI) / 180);
      const halves = Math.max(1, Math.ceil((zFrom - z) / (pitch / 2) - 1e-9));
      let zz = zFrom;
      for (let i = 0; i < halves; i++) {
        const zn = zFrom - ((zFrom - z) * (i + 1)) / halves;
        P.prim(O.arc(start, rho, i % 2 ? Math.PI : 0, Math.PI), zz, zn, sp.ramp);
        zz = zn;
      }
      P.loop([O.circle(start, rho, true, halves % 2 ? Math.PI : 0)], z, sp.feed);
      P.feed(start[0], start[1], z, sp.feed);
      ctx.info.entries = (ctx.info.entries || 0) + 1;
    } else if (p.entry !== 'plunge') {
      P.rapid(start[0], start[1], h.retract);
      P.rapidZ(zFrom + p.feedHeight);
      P.feedZ(zFrom, sp.plunge);
      const need = (zFrom - z) / Math.tan((p.rampAngle * Math.PI) / 180);
      const L = O.loopLength(loop);
      const turns = Math.floor(need / L);
      const prims = [];
      for (let i = 0; i < turns; i++) prims.push(...loop);
      const rest = need - turns * L;
      const tail = rest > 1e-9 ? O.splitAtLengths(loop, [rest])[0] : [];
      prims.push(...tail);
      P.ramp(prims, zFrom, z, sp.ramp);
      // one full loop at depth from where the ramp stopped (cleans the ramp's slope)
      const { loop: l2 } = O.startNearest(loop, [P.pos[0], P.pos[1]]);
      P.loop(l2, z, sp.feed);
      ctx.info.entries = (ctx.info.entries || 0) + 1;
      return 'ramped';
    } else {
      P.rapid(start[0], start[1], h.retract);
      P.rapidZ(zFrom + p.feedHeight);
      P.feedZ(z, sp.plunge);
      ctx.info.entries = (ctx.info.entries || 0) + 1;
    }
    return 'entered';
  };
  const cutNode = (node) => {
    for (const c of node.children) cutNode(c);
    // this component's loops, nearest first
    const todo = node.loops.slice();
    while (todo.length) {
      let bi = 0, bd = Infinity, bl = null;
      todo.forEach((l, i) => { const r = O.startNearest(l, P.pos ? [P.pos[0], P.pos[1]] : l[0].s); if (r.d < bd) { bd = r.d; bi = i; bl = r.loop; } });
      todo.splice(bi, 1);
      const loop = bl;
      const start = loop[0].s;
      const here = P.pos ? [P.pos[0], P.pos[1]] : null;
      // stay down when the move keeps r from the walls and is short (a step out to the next loop) or runs
      // through this component's inside, which its inner loops have already cleared
      if (down && here && safeLink(here, start, region, d0) && (O.dist(here, start) <= 2 * tool.d + 1e-9 || insideAlong(here, start, node.loops))) {
        P.feed(start[0], start[1], z, sp.feed);
        P.loop(loop, z, sp.feed);
      } else {
        const how = enter(node, loop);
        if (how !== 'ramped') P.loop(loop, z, sp.feed);
      }
      down = true;
    }
  };
  for (const root of tree) { down = false; cutNode(root); }
  P.rapidZ(h.retract);
}

function opContour(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2;
  if (!KINDS[tool.kind].mills) throw new Error(t('mfg.contour.tool'));
  const sets = outlineSets(op, ctx, p.side, p.holes);
  if (!sets.length) throw new Error(t('mfg.contour.pick'));
  for (const set of sets) {
    const d = R + p.leave;
    const grow = set.side === 'outside';
    let paths = O.offsetRegion(set.loops, grow ? -d : d);
    if (!paths.length) { ctx.warn(t('mfg.contour.fit', { d: fmt(tool.d) })); continue; }
    if (grow === p.climb) paths = paths.map(O.reverseLoop);   // climb: material on the right
    const bottom0 = set.bottom - (set.through ? p.breakthrough : 0);
    const h = heights(op, ctx, null, bottom0);
    const zs = levels(h.top, h.bottom, p.stepdown);
    if (!zs.length) { ctx.warn(t('mfg.contour.nothing')); continue; }
    if (h.top - h.bottom > tool.fluteLen) ctx.warn(t('mfg.contour.deep', { depth: fmt(h.top - h.bottom), flute: fmt(tool.fluteLen) }));
    for (const path0 of paths) {
      const { loop } = O.startNearest(path0, P.pos ? [P.pos[0], P.pos[1]] : [model.stock.min[0], model.stock.min[1]]);
      const air = (q) => O.inside(set.loops, q) === !grow && O.distToLoops(q, set.loops, d - 1e-6) >= d - 1e-6;
      const lead = leadArcs(loop, p.lead * tool.d, air);
      const start = lead ? lead.inn.s : loop[0].s;
      if (!P.pos) P.rapid(start[0], start[1], h.clearance);
      P.rapidZ(h.retract);
      P.rapid(start[0], start[1], h.retract);
      let zFrom = h.top;
      zs.forEach((z, li) => {
        if (li === 0 || (!lead && !p.ramp)) {
          if (li > 0) { P.rapidZ(h.retract); P.rapid(start[0], start[1], h.retract); }
          P.rapidZ(zFrom + p.feedHeight);
        }
        if (p.ramp && !lead) {
          // ramp along the path from where the tool is, then one full loop at depth
          const lp = O.startNearest(loop, [P.pos[0], P.pos[1]]).loop;
          const need = (zFrom - z) / Math.tan((p.rampAngle * Math.PI) / 180);
          const L = O.loopLength(lp);
          const prims = [];
          for (let i = 0; i < Math.floor(need / L); i++) prims.push(...lp);
          const rest = need - Math.floor(need / L) * L;
          if (rest > 1e-9) prims.push(...O.splitAtLengths(lp, [rest])[0]);
          P.feedZ(zFrom, sp.plunge);
          P.ramp(prims, zFrom, z, sp.ramp);
          P.loop(O.startNearest(lp, [P.pos[0], P.pos[1]]).loop, z, sp.feed);
        } else {
          P.feedZ(z, sp.plunge);
          if (lead) P.prim(lead.inn, z, z, sp.feed);
          cutWithTabs(P, loop, z, set, h, p, tool, sp);
          if (lead) {
            P.prim(lead.out, z, z, sp.feed);
            // stay down: back along the air side to the lead-in start for the next depth
            if (li < zs.length - 1) {
              const e = [P.pos[0], P.pos[1]];
              if (O.dist(e, start) < 1e-9 || safeAirLine(e, start, air)) P.feed(start[0], start[1], z, sp.feed);
              else { P.rapidZ(h.retract); P.rapid(start[0], start[1], h.retract); P.rapidZ(z + p.feedHeight); }
            }
          }
        }
        zFrom = z;
      });
      P.rapidZ(h.retract);
    }
    ctx.info.levels = zs.length;
  }
  if (P.pos) P.rapidZ(model.stock.max[2] + p.clearance);
}
function safeAirLine(a, b, air) {
  const n = Math.max(1, Math.ceil(O.dist(a, b) / 0.25));
  for (let i = 0; i <= n; i++) if (!air([a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n])) return false;
  return true;
}
/** Quarter-circle lead-in/out arcs on the air side (the tool's left: climb puts material on the right). */
function leadArcs(loop, rho, air) {
  for (let k = 0; k < 4 && rho > 0.01; k++, rho /= 2) {
    const P0 = loop[0].s, t0 = O.tangentAt(loop[0], 0);
    const last = loop[loop.length - 1], t1 = O.tangentAt(last, 1);
    const nA0 = [-t0[1], t0[0]], nA1 = [-t1[1], t1[0]];
    const c0 = [P0[0] + rho * nA0[0], P0[1] + rho * nA0[1]];
    const a0 = Math.atan2(P0[1] - c0[1], P0[0] - c0[0]);
    const inn = O.arc(c0, rho, a0 - Math.PI / 2, Math.PI / 2, null, P0);
    const c1 = [P0[0] + rho * nA1[0], P0[1] + rho * nA1[1]];
    const a1 = Math.atan2(P0[1] - c1[1], P0[0] - c1[0]);
    const out = O.arc(c1, rho, a1, Math.PI / 2, P0, null);
    const pts = [...O.samplePrim(inn, 0.01).slice(0, -1), ...O.samplePrim(out, 0.01).slice(1)];
    if (pts.every(air)) return { inn, out };
  }
  return null;
}
function cutWithTabs(P, loop, z, set, h, p, tool, sp) {
  const tabTop = h.bottom + p.tabHeight;
  if (!(p.tabs > 0) || z >= tabTop - 1e-9 || set.side !== 'outside') { P.loop(loop, z, sp.feed); return; }
  const L = O.loopLength(loop), w = p.tabWidth + tool.d;
  if (w * p.tabs >= L) { P.loop(loop, z, sp.feed); return; }
  const cuts = [];
  for (let k = 0; k < p.tabs; k++) { const c = ((k + 0.5) * L) / p.tabs; cuts.push(c - w / 2, c + w / 2); }
  const pieces = O.splitAtLengths(loop, cuts);
  pieces.forEach((pc, i) => {
    const onTab = i % 2 === 1;
    if (!pc.length) return;
    if (onTab) { P.feedZ(tabTop, sp.plunge); P.loop(pc, tabTop, sp.feed); P.feedZ(z, sp.plunge); }
    else P.loop(pc, z, sp.feed);
  });
}

function opDrill(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params;
  if (tool.kind !== 'drill') ctx.warn(t('mfg.drill.not_drill'));
  let list = [];
  for (const ref of op.geo.faces) {
    const i = model.faceIndex(ref);
    if (i < 0) throw new Error(t('mfg.drill.gone', { name: ref.name }));
    const hI = model.cylinderInfo(i);
    if (!hI || !hI.hole || !hI.full) throw new Error(t('mfg.drill.pick_holes'));
    list.push({ ...hI, d: 2 * hI.r });
  }
  if (!list.length && p.diameter > 0) list = model.holes().filter((x) => Math.abs(x.d - p.diameter) < 1e-3);
  if (!list.length) throw new Error(t('mfg.drill.pick'));
  const sizes = [...new Set(list.map((x) => fmt(x.d)))];
  for (const s of sizes) if (Math.abs(+s - tool.d) > 0.01) ctx.warn(t('mfg.drill.size', { hole: s, d: fmt(tool.d) }));
  // order: nearest neighbour from the stock's front-left corner
  const order = [];
  let cur = [model.stock.min[0], model.stock.min[1]];
  const left = list.slice();
  while (left.length) {
    let bi = 0, bd = Infinity;
    left.forEach((x, i) => { const d = O.dist(cur, x.c); if (d < bd - 1e-9) { bd = d; bi = i; } });
    const x = left.splice(bi, 1)[0];
    order.push(x); cur = x.c;
  }
  const h = heights(op, ctx, null, null);
  const tip = profile(tool).tip || 0;
  const holes = order.map((x) => {
    const bottom = x.through ? x.bottom - p.breakthrough - (p.fullDiameter ? tip : 0) : x.bottom;
    const above = Math.max(x.top, ctx.stockAt(x.c[0], x.c[1], tool.d / 2 + 1));
    return { at: x.c.slice(), top: x.top, z: bottom, r: Math.min(h.retract, above + p.rPlane), q: p.cycle === 'drill' ? 0 : p.peck, ret: 'r' };
  });
  // return to R between holes only when the move at R clears the part and the stock
  for (let i = 0; i < holes.length - 1; i++) {
    const a = holes[i], b = holes[i + 1];
    const rz = Math.min(a.r, b.r);
    if (sweptTop(a.at, b.at, tool.d / 2 + 1, ctx) > rz - 0.5) a.ret = 'init';
  }
  const first = holes[0];
  P.rapid(first.at[0], first.at[1], h.clearance);
  P.rapidZ(h.retract);
  P.moves.push({ k: 'cycle', kind: p.cycle, init: h.retract, f: sp.plunge, holes });
  const last = holes[holes.length - 1];
  P.pos = [last.at[0], last.at[1], last.ret === 'r' ? last.r : h.retract];
  P.rapidZ(h.clearance);
  ctx.info.holes = holes.length;
  const deep = Math.max(...holes.map((x) => x.r - x.z));
  if (deep > tool.fluteLen) ctx.warn(t('mfg.drill.deep', { depth: fmt(deep), flute: fmt(tool.fluteLen) }));
}
function sweptTop(a, b, r, ctx) {
  const n = Math.max(2, Math.ceil(O.dist(a, b) / 1));
  let m = -Infinity;
  for (let i = 0; i <= n; i++) {
    const q = [a[0] + (b[0] - a[0]) * i / n, a[1] + (b[1] - a[1]) * i / n];
    for (const [dx, dy] of [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r], [0.7 * r, 0.7 * r], [-0.7 * r, 0.7 * r], [0.7 * r, -0.7 * r], [-0.7 * r, -0.7 * r]]) {
      m = Math.max(m, ctx.model.heightAt(q[0] + dx, q[1] + dy), ctx.stockAt(q[0] + dx, q[1] + dy, 0));
    }
  }
  return m;
}

function opChamfer(op, ctx, P) {
  const { tool, sp } = ctx;
  const p = op.params;
  if (tool.kind !== 'chamfer') throw new Error(t('mfg.chamfer.tool'));
  const beta = (tool.angle / 2) * Math.PI / 180, rt = tool.tipD / 2;
  const depth = p.width / Math.tan(beta);
  const off = rt + p.tipOffset * Math.tan(beta);
  if (rt + (depth + p.tipOffset) * Math.tan(beta) > tool.d / 2 + 1e-9) throw new Error(t('mfg.chamfer.small', { width: fmt(p.width), tip: fmt(p.tipOffset), d: fmt(tool.d) }));
  const sets = outlineSets(op, ctx, 'outside', p.holes);
  if (!sets.length) throw new Error(t('mfg.chamfer.pick'));
  for (const set of sets) {
    // the chamfer sits on the selection's top edge: a face's own height, a round face's top
    const zt = set.z - depth - p.tipOffset;
    const grow = set.side === 'outside';
    let paths = O.offsetRegion(set.loops, grow ? -off : off);
    paths = grow ? paths.map(O.reverseLoop) : paths;
    const h = heights(op, ctx, null, zt);
    for (const path0 of paths) {
      const { loop } = O.startNearest(path0, P.pos ? [P.pos[0], P.pos[1]] : loopStart(path0));
      const s = loop[0].s;
      if (!P.pos) P.rapid(s[0], s[1], h.clearance);
      P.rapidZ(h.retract);
      P.rapid(s[0], s[1], h.retract);
      P.rapidZ(Math.max(set.z, zt) + p.feedHeight);
      P.feedZ(zt, sp.plunge);
      P.loop(loop, zt, sp.feed);
      P.rapidZ(h.retract);
    }
  }
  if (P.pos) P.rapidZ(ctx.model.stock.max[2] + p.clearance);
  ctx.info.depth = depth;
}
const loopStart = (l) => l[0].s;

function opAdaptive(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2, w = p.engagement * tool.d;
  if (!KINDS[tool.kind].mills || tool.kind === 'chamfer') throw new Error(t('cam.adaptive.err.tool'));
  const regs = pocketRegions(op, ctx);
  if (!regs.length) throw new Error(t('cam.adaptive.err.pick'));
  let started = false;
  for (const reg of regs) {
    const bottom0 = reg.bottom - (reg.through ? p.breakthrough : 0);
    const h = heights(op, ctx, null, bottom0);
    const zs = levels(h.top, h.bottom + p.leaveAxial, p.stepdown);
    if (!zs.length) { ctx.warn(t('cam.adaptive.warn.nothing', { what: reg.what })); continue; }
    let A;
    try { A = adaptivePasses(reg.loops, { R, w, leave: p.leave, helixR: p.helixR * tool.d }); } catch { ctx.warn(t('cam.adaptive.warn.fit', { d: fmt(tool.d), what: reg.what })); continue; }
    ctx.info.passes = (ctx.info.passes || 0) + A.passes.length;
    ctx.info.engagement = { w, angle: Math.acos(1 - Math.min(1, w / R)) * 180 / Math.PI, cell: A.cell };
    const walls = O.offsetRegion(reg.loops, R + p.leave);
    const c = A.entry.c, er = A.entry.r, start = [c[0] + er, c[1]];
    let zFrom = h.top;
    for (const z of zs) {
      // in: a helix at the entry (else a plunge where it is farthest from the walls)
      if (!started) { P.rapid(start[0], start[1], h.clearance); started = true; } else { P.rapidZ(h.retract); P.rapid(start[0], start[1], h.retract); }
      P.rapidZ(zFrom + p.feedHeight);
      if (er > 0.05) {
        const pitch = 2 * Math.PI * er * Math.tan((p.rampAngle * Math.PI) / 180), dz = zFrom + p.feedHeight - z, turns = Math.max(1, Math.ceil(dz / pitch));
        const circ = O.circle(c, er, true, 0);
        P.ramp(Array.from({ length: turns }, () => circ), zFrom + p.feedHeight, z, sp.plunge);
        P.loop([circ], z, sp.feed);
      } else P.feedZ(z, sp.plunge);
      // the passes
      A.passes.forEach((lp, i) => {
        if (i === 0 || A.links[i - 1] === 'down') P.feed(lp[0][0], lp[0][1], z, sp.feed);
        else { P.rapidZ(h.retract); P.rapid(lp[0][0], lp[0][1], h.retract); P.rapidZ(zFrom + p.feedHeight); P.feedZ(z, sp.plunge); }   // rapid only through the level above (cleared), feed the last part
        for (const q of (A.closed[i] ? [...lp.slice(1), lp[0]] : lp.slice(1))) P.feed(q[0], q[1], z, sp.feed);
      });
      // the walls at r + leave (exact)
      for (const wl of walls) {
        const { loop } = O.startNearest(wl, P.pos);
        const s0 = loop[0].s;
        if (safeLink([P.pos[0], P.pos[1]], s0, reg.loops, R + p.leave)) P.feed(s0[0], s0[1], z, sp.feed);
        else { P.rapidZ(h.retract); P.rapid(s0[0], s0[1], h.retract); P.rapidZ(zFrom + p.feedHeight); P.feedZ(z, sp.plunge); }
        P.loop(loop, z, sp.feed);
      }
      zFrom = z;
    }
    P.rapidZ(h.retract);
  }
  if (P.pos) P.rapidZ(model.stock.max[2] + p.clearance);
}

const OPS = { face: opFace, pocket: opPocket, adaptive: opAdaptive, contour: opContour, drill: opDrill, chamfer: opChamfer, parallel: opParallel, scallop: opScallop };

// ---------------------------------------------------------------- program

/**
 * Every operation's toolpath, in order. `sim` (cam-sim.js Sim, optional) is run after each operation so later
 * ones see the stock that is left (drill R planes). → {model, paths:[opPath | {op, error}], warnings}
 */
export function generateProgram(study, regen, { sim = null, model = null, only = null, extraOps = {} } = {}) {
  model = model || machineModel(regen, study.setup);
  const paths = [];
  const stockTop = model.stock.max[2];
  for (const op of study.ops) {
    if (op.suppressed) { paths.push({ op, suppressed: true, moves: [], warnings: [] }); continue; }
    if (only && !only.includes(op.id)) continue;
    const tool = study.tools.find((t) => t.id === op.tool);
    if (!tool) { paths.push({ op, error: t('mfg.op.choose_tool'), moves: [], warnings: [] }); continue; }
    const warnings = [];
    const sp = speeds(tool, study.setup.material, study.setup.machine);
    if (sp.clamped === 'max') warnings.push(t('mfg.speed.clamped', { rpm: study.setup.machine.maxRpm }));
    const ctx = {
      model, tool, sp, op, info: {}, warn: (m) => warnings.push(m),
      stockAt: (x, y, r) => (sim ? sim.maxIn(x, y, r) : stockTop),
    };
    const P = new Path();
    const fn = OPS[op.type] || extraOps[op.type];
    try {
      if (!fn) throw new Error(t('mfg.op.not_built'));
      fn(op, ctx, P);
      const res = { op, tool, speeds: sp, moves: P.moves, warnings, info: ctx.info };
      if (sim) { const r = sim.run(res); res.sim = r; }
      paths.push(res);
    } catch (e) {
      paths.push({ op, tool, speeds: sp, error: e.message, moves: [], warnings });
    }
  }
  return { model, paths, setup: study.setup, tools: study.tools };
}

/**
 * Straight and arc segments of a program, canned cycles expanded: [{k rapid|feed|arc, a, b, c?, sw?, f, op}]
 * (the simulation, the 3D overlay, the cycle time and the tests read this).
 */
export function segments(paths, start = null) {
  const out = [];
  let pos = start;
  for (const ph of paths) {
    if (!ph.moves || !ph.moves.length) continue;
    for (const m0 of ph.moves) {
      const list = m0.k === 'cycle' ? expandCycle(m0) : [m0];
      for (const m of list) {
        if (!pos) { pos = m.p; continue; }
        if (m.k === 'arc') out.push({ k: 'arc', a: pos, b: m.p, c: m.c, sw: m.sw, f: m.f, op: ph.op.id });
        else out.push({ k: m.k, a: pos, b: m.p, f: m.f, op: ph.op.id });
        pos = m.p;
      }
    }
  }
  return out;
}

/** Points along one segment (arcs sampled at chord tolerance tol). */
export function segPoints(s, tol = 0.01) {
  if (s.k !== 'arc') return [s.a, s.b];
  const r = Math.hypot(s.a[0] - s.c[0], s.a[1] - s.c[1]);
  const a0 = Math.atan2(s.a[1] - s.c[1], s.a[0] - s.c[0]);
  const da = r > tol ? 2 * Math.acos(Math.max(-1, 1 - tol / r)) : Math.PI / 4;
  const n = Math.max(2, Math.ceil(Math.abs(s.sw) / da));
  const out = [];
  for (let i = 0; i <= n; i++) {
    const a = a0 + (s.sw * i) / n;
    out.push(i === n ? s.b : [s.c[0] + r * Math.cos(a), s.c[1] + r * Math.sin(a), s.a[2] + ((s.b[2] - s.a[2]) * i) / n]);
  }
  return out;
}
export const segLength = (s) => {
  if (s.k !== 'arc') return Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1], s.b[2] - s.a[2]);
  const r = Math.hypot(s.a[0] - s.c[0], s.a[1] - s.c[1]);
  return Math.hypot(Math.abs(s.sw) * r, s.b[2] - s.a[2]);
};
