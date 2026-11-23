/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-turn.js — PartCraft's turning toolpaths (DOM-free; 0.11 CAM.5): facing, roughing, finishing, grooving, parting,
 * threading and drilling on centre, from the profile the part makes when it spins.
 *
 *   The lathe's Z is the setup's tool axis (machine Z of cam.js), through the middle of the stock; X is the radius from it.
 *   Z = 0 is the setup's work origin (a stock-top origin puts Z0 on the front face, the usual place). The chuck is at −Z.
 *   moves   {k: 'rapid' | 'feed' | 'thread', p: [x (RADIUS), 0, z], f (mm per REVOLUTION; thread: the lead)}
 *           p is the programmed point of the tool: the imaginary tip of a turning insert (nose centre − (rn, rn)), the
 *           left corner of a grooving blade, the point of a drill. The nose radius is already allowed for in the path:
 *           the posts write no G41/G42.
 *   path    kind 'lathe', frame {o: [cx, cy, 0]} (where the axis is in the work frame, for drawing), tip {dr, dz}
 *   spunProfile(model, c, zA, zB, dz) → {z0, dz, n, r}   · toolShape(tool, leave) · dropShape(profile, shape)
 *   class LatheStock                                      (exported for the tests)
 *
 * Method.
 *   The profile. The part is cut into slabs dz thick along Z; a slab's radius is the largest distance from the axis of
 *   any point of the part in it (each triangle clipped to the slab; the distance is convex over the clipped piece, so its
 *   largest value is at a corner). That is the outline the spinning part sweeps, never less than it.
 *   Where the tool may be. A tool is its lower edge b(u): the radius of the edge, measured from its reference point, at
 *   axial distance u from it (∞ where there is no tool). A turning insert is its nose circle plus the trailing edge, a
 *   straight line at 180° − lead − insert angle from the axis (the leading edge leans away at a lead of 90° or more; under
 *   90° it is a line too). A grooving blade is flat, as wide as the blade. Dropping that shape on the profile,
 *       rc(z) = max over z′ of [ profile(z′) − b(z′ − z) ],
 *   is the smallest radius the reference point may have at z — the 2D form of the drop cutter. It cannot follow a wall
 *   steeper than the trailing edge, so a groove behind a shoulder is left alone (and reported) rather than cut into.
 *   b is taken at its lowest within one slab either side, so the slab width never works against the part.
 *   What is cut. LatheStock keeps the stock's radius per slab; every feed move lowers it under the tool's true shape. Roughing
 *   takes passes along Z a depth of cut apart wherever rc + stock to leave is under the pass and stock is above it (open
 *   ends from the front, valleys by a radial plunge of one depth of cut), then once along the outline. Grooving plunges
 *   wherever the blade can take more than `minDepth` that is still there. The same stock gives each operation's removed
 *   volume and the gouge count (stock under the profile by more than 0.02 mm).
 *
 * Limits (the help says the same): outside turning only (no boring bar, no inside threads); one spindle, the part held at
 * −Z; lines only (no G2/G3: curves are short lines within the tolerance); longhand passes (no G71/G76 cycles); threading
 * is straight passes with a straight pull-out; drilling on centre does not change the stock model; no collision check of
 * the holder, the turret or the chuck; nothing here has been run on a lathe.
 */
import { latheSpeeds, speeds as millSpeeds, KINDS } from './cam-tools.js';
import { t } from './i18n.js';

const hyp = Math.hypot;
const DEG = Math.PI / 180;
const fmt = (v) => String(+Number(v).toFixed(3));
export const GOUGE_TOL = 0.02;

/** The outline of the spinning part: radius per slab [z0 + k·dz, z0 + (k+1)·dz), −Infinity where there is no part. */
export function spunProfile(model, c, zA, zB, dz) {
  const n = Math.max(1, Math.ceil((zB - zA) / dz));
  const r2 = new Float64Array(n).fill(-1);
  const P = model.mesh.positions, I = model.mesh.indices;
  const put = (k, x, y) => { if (k < 0 || k >= n) return; const d = (x - c[0]) * (x - c[0]) + (y - c[1]) * (y - c[1]); if (d > r2[k]) r2[k] = d; };
  const V = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let tr = 0; tr < I.length; tr += 3) {
    for (let e = 0; e < 3; e++) { const a = I[tr + e] * 3; V[e][0] = P[a]; V[e][1] = P[a + 1]; V[e][2] = P[a + 2]; }
    const zmin = Math.min(V[0][2], V[1][2], V[2][2]), zmax = Math.max(V[0][2], V[1][2], V[2][2]);
    // a point on a slab boundary belongs to the slab under it (a face at the very top of the part is not in the slab above)
    const slab = (z) => Math.floor((z - zA) / dz - 1e-7);
    const k0 = Math.max(0, slab(zmin)), k1 = Math.min(n - 1, slab(zmax));
    for (let e = 0; e < 3; e++) put(Math.min(n - 1, Math.max(0, slab(V[e][2]))), V[e][0], V[e][1]);
    if (k1 === k0) continue;
    const eps = dz * 1e-6;
    for (let e = 0; e < 3; e++) {
      const a = V[e], b = V[(e + 1) % 3];
      if (Math.abs(b[2] - a[2]) < 1e-15) continue;
      const lo = Math.min(a[2], b[2]), hi = Math.max(a[2], b[2]);
      for (let k = Math.max(k0, Math.ceil((lo - zA) / dz)); k <= k1 + 1; k++) {   // the plane between slab k−1 and slab k
        const zp = zA + k * dz;
        if (zp <= lo + eps || zp >= hi - eps) continue;                           // an end on the plane is that corner, placed above
        const f = (zp - a[2]) / (b[2] - a[2]), x = a[0] + (b[0] - a[0]) * f, y = a[1] + (b[1] - a[1]) * f;
        put(k - 1, x, y); put(k, x, y);
      }
    }
  }
  const r = new Float64Array(n);
  for (let k = 0; k < n; k++) r[k] = r2[k] < 0 ? -Infinity : Math.sqrt(r2[k]);
  return { z0: zA, dz, n, r };
}

/**
 * A lathe tool as its lower edge: {b(u), tip {dr, dz} (reference point − programmed point), uMin, uMax (where b is finite), w}.
 * `grow` adds stock to leave all round (the same reference point).
 */
export function toolShape(tool, grow = 0) {
  if (tool.kind === 'groove') {
    const w = tool.d, h = w / 2 + grow;
    return { kind: 'groove', w, b: (u) => (Math.abs(u) <= h + 1e-12 ? -grow : Infinity), tip: { dr: 0, dz: w / 2 }, uMin: -h, uMax: h };
  }
  if (tool.kind === 'drill') return { kind: 'drill', w: tool.d, b: (u) => (u >= 0 ? -Infinity : Infinity), tip: { dr: 0, dz: 0 }, uMin: 0, uMax: Infinity };
  const rn = tool.cornerR, rho = rn + grow;
  const lead = Math.min(tool.lead, 179) * DEG, beta = Math.max(1, 180 - tool.lead - tool.angle) * DEG;
  const uT = rho * Math.sin(beta), bT = -rho * Math.cos(beta), tb = Math.tan(beta);
  const open = tool.lead >= 90, uL = open ? -rho : -rho * Math.sin(lead), bL = open ? 0 : -rho * Math.cos(lead), tl = open ? 0 : Math.tan(lead);
  const b = (u) => {
    if (u < uL - 1e-12) return open ? Infinity : bL + (uL - u) * tl;
    if (u <= uT) return -Math.sqrt(Math.max(0, rho * rho - u * u));
    return bT + (u - uT) * tb;
  };
  return { kind: 'turn', w: 2 * rn, rn, b, tip: { dr: rn, dz: rn }, uMin: open ? -rho : -Infinity, uMax: Infinity };
}

/** The smallest radius the tool's reference point may have at each slab centre (−Infinity where nothing is in the way). */
export function dropShape(prof, shape) {
  const { n, dz, r } = prof;
  const rc = new Float64Array(n).fill(-Infinity);
  const bLow = (u) => Math.min(shape.b(u - dz), shape.b(u), shape.b(u + dz));
  const j0 = Number.isFinite(shape.uMin) ? Math.floor(shape.uMin / dz) - 1 : -n, j1 = Number.isFinite(shape.uMax) ? Math.ceil(shape.uMax / dz) + 1 : n;
  // the edge's height at every whole number of slabs from the reference point, once
  const lo = Math.max(-n, j0), hi = Math.min(n, j1), B = new Float64Array(hi - lo + 1);
  for (let d = lo; d <= hi; d++) B[d - lo] = bLow(d * dz);
  let rTop = -Infinity;
  for (let j = 0; j < n; j++) if (r[j] > rTop) rTop = r[j];
  for (let k = 0; k < n; k++) {
    let m = -Infinity;
    const a = Math.max(0, k + lo), e = Math.min(n - 1, k + hi);
    for (let j = a; j <= e; j++) {
      const rj = r[j];
      if (rj === -Infinity) continue;
      const b = B[j - k - lo];
      // far along a rising trailing edge nothing of the part can reach it any more
      if (j > k && shape.uMax === Infinity && rTop - b <= m && b > 0) break;
      const v = rj - b;
      if (v > m) m = v;
    }
    rc[k] = m;
  }
  return rc;
}

/** The stock on the lathe: its radius per slab, lowered by what the tool sweeps. */
export class LatheStock {
  constructor(prof, rStock, zTop) {
    this.prof = prof; this.n = prof.n; this.dz = prof.dz; this.z0 = prof.z0;
    this.rMax = rStock;
    this.S = new Float64Array(prof.n);
    for (let k = 0; k < prof.n; k++) this.S[k] = this.zOf(k) <= zTop + 1e-9 ? rStock : 0;
  }
  zOf(k) { return this.z0 + (k + 0.5) * this.dz; }
  kOf(z) { return Math.max(0, Math.min(this.n - 1, Math.floor((z - this.z0) / this.dz))); }
  /** Lower the stock under the tool's shape with its reference point at (z, r). */
  stamp(shape, z, r) {
    const k = this.kOf(z), { S, n, rMax, dz } = this, h = dz / 2;
    // a slab keeps the stock the tool's edge leaves anywhere in it: the edge at its highest over the slab (∞ = part of the slab is not cut)
    const bHigh = (u) => Math.max(shape.b(u - h + 1e-9), shape.b(u), shape.b(u + h - 1e-9));
    // Along a pass each stamp repeats most of the one before it: once the edge has stopped lowering anything for a run of slabs
    // beyond the tool's own width, the rest of a long trailing edge is left alone. Stopping early can only leave the stock
    // model a little high (it then asks for a cut that is air), never low.
    let idle = 0;
    for (let j = k; j < n; j++) {
      const u = this.zOf(j) - z, b = bHigh(u);
      if (b === Infinity) { if (u > h) break; continue; }
      const v = Math.max(0, r + b);
      if (v < S[j]) { S[j] = v; idle = 0; } else if (u > shape.w && ++idle > 24) break;
      if (u > shape.w && v >= rMax) break;          // the trailing edge has risen past any stock there is
    }
    idle = 0;
    for (let j = k - 1; j >= 0; j--) {
      const u = this.zOf(j) - z, b = bHigh(u);
      if (b === Infinity) { if (u < -h) break; continue; }
      const v = Math.max(0, r + b);
      if (v < S[j]) { S[j] = v; idle = 0; } else if (-u > shape.w && ++idle > 24) break;
      if (-u > shape.w && v >= rMax) break;
    }
  }
  /** Sweep the reference point from (z0, r0) to (z1, r1). */
  sweep(shape, a, b) {
    const m = Math.max(1, Math.ceil(Math.abs(b[0] - a[0]) / (this.dz / 2)), Math.ceil(Math.abs(b[1] - a[1]) / 0.25));
    for (let i = 0; i <= m; i++) this.stamp(shape, a[0] + ((b[0] - a[0]) * i) / m, a[1] + ((b[1] - a[1]) * i) / m);
  }
  /** Volume of the stock above the axis (mm³). */
  volume() { let v = 0; for (let k = 0; k < this.n; k++) v += Math.PI * this.S[k] * this.S[k] * this.dz; return v; }
  /** Slabs where the stock is under the part's outline by more than tol. → [[z, depth] …] */
  gouges(tol = GOUGE_TOL) {
    const out = [];
    for (let k = 0; k < this.n; k++) { const rp = this.prof.r[k]; if (rp > -Infinity && this.S[k] < rp - tol) out.push([this.zOf(k), rp - this.S[k]]); }
    return out;
  }
  /** The largest stock radius over the slabs within [z − h, z + h]. */
  maxIn(z, h) { let m = 0; for (let j = this.kOf(z - h); j <= this.kOf(z + h); j++) if (this.S[j] > m) m = this.S[j]; return m; }
}

/** The lathe's view of the part, made once per program and shared by its turning operations (ctx.shared.lathe). */
export function latheState(ctx) {
  if (ctx.shared.lathe) return ctx.shared.lathe;
  const model = ctx.mainModel || ctx.model, st = model.stock0 || model.stock;
  const c = st.kind === 'cylinder' ? st.c.slice() : [(st.min[0] + st.max[0]) / 2, (st.min[1] + st.max[1]) / 2];
  const rStock = st.kind === 'cylinder' ? st.r : hyp(st.max[0] - st.min[0], st.max[1] - st.min[1]) / 2;
  const zB = st.max[2] + 1e-6;
  const dz = Math.min(0.1, Math.max(0.01, (zB - (Math.min(st.min[2], model.bottom) - 25)) / 4000));
  // the front face of the part lies on a slab boundary, so a facing cut is a whole number of slabs
  const zA = model.top - Math.ceil((model.top - (Math.min(st.min[2], model.bottom) - 25)) / dz) * dz;
  const prof = spunProfile(model, c, zA, zB, dz);
  const stock = new LatheStock(prof, rStock, st.max[2]);
  return (ctx.shared.lathe = { c, rStock, prof, stock, top: model.top, bottom: model.bottom, stockTop: st.max[2], box: st.kind !== 'cylinder', drops: new Map() });
}

/** Moves in terms of the tool's reference point; writes the programmed point and cuts the stock. */
class Lathe {
  constructor(ctx, P, L, shape) { this.ctx = ctx; this.P = P; this.L = L; this.shape = shape; this.at = null; this.before = L.stock.volume(); this.cut = 0; }
  prog(z, r) { return [r - this.shape.tip.dr, 0, z - this.shape.tip.dz]; }
  rapid(z, r) { const p = this.prog(z, r); this.P.rapid(p[0], p[1], p[2]); this.at = [z, r]; }
  feed(z, r, f) {
    const p = this.prog(z, r);
    this.P.feed(p[0], p[1], p[2], f);
    if (this.at) { this.L.stock.sweep(this.shape, this.at, [z, r]); this.cut += hyp(z - this.at[0], r - this.at[1]); }
    this.at = [z, r];
  }
  done(extra = {}) {
    const { ctx, L } = this;
    const g = L.stock.gouges();
    ctx.pathKind = 'lathe'; ctx.frame = { o: [L.c[0], L.c[1], 0] }; ctx.tip = this.shape.tip;
    ctx.simResult = { removed: Math.max(0, this.before - L.stock.volume()), gouges: g.length, at: g.slice(0, 20).map(([z, d]) => [L.c[0] + L.prof.r[L.stock.kOf(z)], L.c[1], d]), rapidCuts: 0, rapidAt: [] };
    Object.assign(ctx.info, { cutLength: this.cut, ...extra });
    if (L.box && !L.warnedBox) { ctx.warn(t('mfg.turn.box_stock')); L.warnedBox = true; }
  }
}
function setup(op, ctx, kinds) {
  const { tool } = ctx;
  if (!kinds.includes(tool.kind)) throw new Error(t(kinds[0] === 'groove' ? 'mfg.turn.tool_groove' : kinds[0] === 'drill' ? 'mfg.turn.tool_drill' : 'mfg.turn.tool_turn'));
  const L = latheState(ctx);
  if (tool.kind === 'drill') {
    const m = millSpeeds(tool, ctx.setup.material, ctx.setup.machine);
    ctx.sp = { rpm: m.rpm, feed: m.fz, plunge: m.fz, ramp: m.fz, vc: m.vc, fz: m.fz, clamped: m.clamped, source: m.source, lathe: true, css: null, fixedRpm: m.rpm, maxRpm: ctx.setup.machine.maxRpm, refD: tool.d };
  } else ctx.sp = latheSpeeds(tool, ctx.setup.material, ctx.setup.machine, 2 * L.rStock);
  return L;
}
/** rc for a shape, kept per program (the drop is the same for every operation that uses the same tool and stock to leave). */
function dropFor(L, tool, grow) {
  const key = [tool.id, tool.kind, tool.d, tool.cornerR, tool.angle, tool.lead, grow].join('/');
  if (!L.drops.has(key)) L.drops.set(key, dropShape(L.prof, toolShape(tool, grow)));
  return L.drops.get(key);
}
/** Thin a (z, r) polyline to a tolerance (Douglas–Peucker). */
function thin2(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop(), a = pts[i], b = pts[j], Lq = hyp(b[0] - a[0], b[1] - a[1]);
    let md = 0, mk = -1;
    for (let k = i + 1; k < j; k++) { const q = pts[k]; const d = Lq < 1e-12 ? hyp(q[0] - a[0], q[1] - a[1]) : Math.abs((b[0] - a[0]) * (q[1] - a[1]) - (b[1] - a[1]) * (q[0] - a[0])) / Lq; if (d > md) { md = d; mk = k; } }
    if (mk >= 0 && md > eps) { keep[mk] = 1; stack.push([i, mk], [mk, j]); }
  }
  return pts.filter((_, k) => keep[k]);
}
/**
 * The outline as reference-point positions from the front of the part back to zStop: [[z, r] …], z falling.
 * rc is the drop for the tool grown by the stock to leave. The kept polyline is within eps of the points left out and is
 * lifted by eps, so it is never under them radially; along Z it can be eps off (half the tolerance asked for).
 */
function outline(L, rc, zStop, eps) {
  const S = L.stock, pts = [];
  for (let k = S.kOf(L.top + 1e-6); k >= 0; k--) {
    const z = S.zOf(k);
    if (z < zStop - 1e-9) break;
    pts.push([z, Math.max(0, rc[k] === -Infinity ? 0 : rc[k])]);
  }
  return thin2(pts, eps).map(([z, r]) => [z, r + eps]);
}

// ---------------------------------------------------------------- operations

function opTurnFace(op, ctx, P) {
  const L = setup(op, ctx, ['turn']), p = op.params, { tool, sp } = ctx;
  const shape = toolShape(tool), rn = shape.rn, T = new Lathe(ctx, P, L, shape);
  const zEnd = L.top + p.leave, zFrom = L.stockTop;
  const rSafe = L.rStock + p.clearance + rn, zSafe = L.stockTop + p.clearance + rn;
  const n = zFrom > zEnd + 1e-9 ? Math.max(1, Math.ceil((zFrom - zEnd) / p.stepdown - 1e-9)) : 1;
  T.rapid(zSafe, rSafe);
  for (let i = 1; i <= n; i++) {
    const zf = zFrom > zEnd + 1e-9 ? zFrom - ((zFrom - zEnd) * i) / n : zEnd;   // the face plane; the nose centre is rn in front of it
    T.rapid(zf + rn, rSafe);
    T.feed(zf + rn, -p.past, sp.feed);
    T.feed(zf + rn + 0.5, -p.past + 0.5, sp.feed);
    T.rapid(zf + rn + 0.5, rSafe);
  }
  T.rapid(zSafe, rSafe);
  T.done({ levels: n });
}

function opTurnRough(op, ctx, P) {
  const L = setup(op, ctx, ['turn']), p = op.params, { tool, sp } = ctx;
  const shape = toolShape(tool), rn = shape.rn, T = new Lathe(ctx, P, L, shape), S = L.stock;
  const rc = dropFor(L, tool, p.leave);
  const zStop = (p.stopZ ?? L.bottom) + rn;                       // the nose centre's lowest z
  const zFront = L.stockTop + p.clearance + rn;
  const rSafe = L.rStock + p.clearance + rn, zSafe = zFront;
  const kTop = S.kOf(L.stockTop + rn), kStop = S.kOf(zStop + 1e-9);
  let rMin = Infinity;
  for (let k = kStop; k <= kTop; k++) rMin = Math.min(rMin, Math.max(0, rc[k] === -Infinity ? 0 : rc[k]));
  const levels = [];
  for (let r = L.rStock + rn - p.depth; r > rMin + 1e-6; r -= p.depth) levels.push(r);   // nose-centre radii
  let passes = 0;
  T.rapid(zSafe, rSafe);
  for (const r of levels) {
    // runs of slabs, front to back, where the tool may be at r
    let k = kTop;
    while (k >= kStop) {
      if (!((rc[k] === -Infinity ? 0 : rc[k]) <= r + 1e-9)) { k--; continue; }
      let e = k;
      while (e - 1 >= kStop && (rc[e - 1] === -Infinity ? 0 : rc[e - 1]) <= r + 1e-9) e--;
      // only where stock stands above this pass
      let hi = -1, lo = -1;
      for (let j = k; j >= e; j--) if (S.S[j] > r - rn + 1e-6) { if (hi < 0) hi = j; lo = j; }
      if (hi >= 0) {
        const open = k === kTop;
        const za = open ? zFront : S.zOf(Math.min(k, hi + Math.ceil(rn / S.dz) + 1)), zb = Math.max(zStop, S.zOf(Math.max(e, lo - Math.ceil(rn / S.dz) - 1)));
        if (za > zb + 1e-9) {
          if (open) { T.rapid(za, rSafe); T.rapid(za, r); }
          else { T.rapid(za, rSafe); T.rapid(za, Math.min(rSafe, Math.max(r, S.maxIn(za, rn) + rn + 0.5))); T.feed(za, r, sp.plunge); }
          T.feed(zb, r, sp.feed);
          T.feed(Math.min(za, zb + p.pullout), r + p.pullout, sp.feed);
          T.rapid(Math.min(za, zb + p.pullout), rSafe);
          passes++;
        }
      }
      k = e - 1;
    }
  }
  // once along the outline, to take the steps off
  const pts = outline(L, rc, zStop, 0.005);
  if (pts.length > 1) {
    const zIn = Math.max(pts[0][0] + p.clearance, L.stockTop + rn + 0.5);   // in front of the stock, faced or not
    T.rapid(zIn, rSafe);
    T.rapid(zIn, pts[0][1]);
    for (const [z, r] of pts) T.feed(z, r, sp.feed);
    const last = pts[pts.length - 1];
    T.feed(last[0], Math.max(last[1], S.maxIn(last[0], rn) + rn) + p.pullout, sp.feed);
    T.rapid(last[0], rSafe);
  }
  T.rapid(zSafe, rSafe);
  T.done({ passes, levels: levels.length });
}

function opTurnFinish(op, ctx, P) {
  const L = setup(op, ctx, ['turn']), p = op.params, { tool, sp } = ctx;
  const shape = toolShape(tool), rn = shape.rn, T = new Lathe(ctx, P, L, shape), S = L.stock;
  const rc = dropFor(L, tool, p.leave);
  const zStop = (p.stopZ ?? L.bottom) + rn;
  const rSafe = L.rStock + p.clearance + rn, zSafe = L.stockTop + p.clearance + rn;
  const pts = outline(L, rc, zStop, p.tolerance / 2);
  if (pts.length < 2) { ctx.warn(t('mfg.turn.nothing')); T.done(); return; }
  const f = Math.round(sp.feed * p.feedFactor * 1000) / 1000;
  T.rapid(zSafe, rSafe);
  const zIn = Math.max(pts[0][0] + p.clearance, L.stockTop + rn + 0.5);
  T.rapid(zIn, rSafe);
  T.rapid(zIn, pts[0][1]);
  for (const [z, r] of pts) T.feed(z, r, f);
  const last = pts[pts.length - 1];
  T.feed(last[0], Math.max(last[1], S.maxIn(last[0], rn) + rn) + 0.5, f);
  T.rapid(last[0], rSafe);
  T.rapid(zSafe, rSafe);
  // what the insert could not reach (a groove behind a shoulder): slabs where more is left than the nose radius leaves in a corner
  let missed = 0;
  for (let k = S.kOf(zStop); k <= S.kOf(L.top - 1e-6); k++) if (L.prof.r[k] > -Infinity && S.S[k] - L.prof.r[k] > p.leave + rn + 0.1) missed++;
  if (missed) ctx.warn(t('mfg.turn.unreached', { mm: fmt(missed * S.dz) }));
  T.done({ points: pts.length, unreached: missed * S.dz });
}

function opTurnGroove(op, ctx, P) {
  const L = setup(op, ctx, ['groove']), p = op.params, { tool, sp } = ctx;
  const shape = toolShape(tool), T = new Lathe(ctx, P, L, shape), S = L.stock, w = tool.d;
  const rg = dropFor(L, tool, p.leave);
  const zHi = Math.min(p.zFrom ?? L.top, L.top) - w / 2, zLo = Math.max(p.zTo ?? L.bottom, L.bottom) + w / 2;
  const rSafe = L.rStock + p.clearance, zSafe = L.stockTop + p.clearance + w;
  if (!(zHi >= zLo - 1e-9)) throw new Error(t('mfg.groove.range'));
  // worth a plunge: more than minDepth of stock over at least 0.2 mm of the blade's width (a sliver one slab wide beside a shoulder is not)
  const want = (k) => {
    const z = S.zOf(k), g = Math.max(0, rg[k] === -Infinity ? 0 : rg[k]);
    let wide = 0;
    for (let j = S.kOf(z - w / 2 + S.dz); j <= S.kOf(z + w / 2 - S.dz); j++) if (S.S[j] - g > p.minDepth) wide++;
    return wide * S.dz >= 0.2;
  };
  const step = Math.max(S.dz, w * p.stepover);
  let plunges = 0, deepest = 0;
  T.rapid(zSafe, rSafe);
  let k = S.kOf(zHi);
  const kLo = S.kOf(zLo);
  while (k >= kLo) {
    if (!want(k)) { k--; continue; }
    let e = k;
    while (e - 1 >= kLo && want(e - 1)) e--;
    const za = S.zOf(k), zb = S.zOf(e), n = Math.max(0, Math.ceil((za - zb) / step - 1e-9));
    for (let i = 0; i <= n; i++) {
      const z = n ? za - ((za - zb) * i) / n : (za + zb) / 2, kk = S.kOf(z);
      const bottom = Math.max(0, rg[kk] === -Infinity ? 0 : rg[kk]), from = S.maxIn(z, w / 2);
      if (!(from - bottom > 1e-6)) continue;
      T.rapid(z, rSafe);
      T.rapid(z, Math.min(rSafe, from + 0.5));
      if (p.peck > 0) for (let r = from - p.peck; r > bottom + 1e-9; r -= p.peck) { T.feed(z, r, sp.feed); T.rapid(z, r + Math.min(0.3, p.peck / 2)); }
      T.feed(z, bottom, sp.feed);
      T.rapid(z, rSafe);
      plunges++; deepest = Math.max(deepest, from - bottom);
    }
    k = e - 1;
  }
  T.rapid(zSafe, rSafe);
  if (!plunges) ctx.warn(t('mfg.groove.nothing'));
  if (deepest > tool.fluteLen) ctx.warn(t('mfg.groove.deep', { depth: fmt(deepest), reach: fmt(tool.fluteLen) }));
  T.done({ plunges, deepest });
}

function opTurnPart(op, ctx, P) {
  const L = setup(op, ctx, ['groove']), p = op.params, { tool, sp } = ctx;
  const shape = toolShape(tool), T = new Lathe(ctx, P, L, shape), S = L.stock, w = tool.d;
  const z = (p.z ?? L.bottom) - w / 2;                             // the blade sits just behind the part
  const rSafe = L.rStock + p.clearance, zSafe = L.stockTop + p.clearance + w;
  const from = Math.max(S.maxIn(z, w / 2), 0);
  T.rapid(zSafe, rSafe);
  T.rapid(z, rSafe);
  T.rapid(z, Math.min(rSafe, from + 0.5));
  if (p.peck > 0) for (let r = from - p.peck; r > -p.past + 1e-9; r -= p.peck) { T.feed(z, r, sp.feed); T.rapid(z, r + Math.min(0.3, p.peck / 2)); }
  T.feed(z, -p.past, sp.feed);
  T.rapid(z, rSafe);
  T.rapid(zSafe, rSafe);
  if (from > tool.fluteLen) ctx.warn(t('mfg.groove.deep', { depth: fmt(from), reach: fmt(tool.fluteLen) }));
  T.done({ z: z - w / 2 });
}

function opTurnThread(op, ctx, P) {
  const L = setup(op, ctx, ['turn']), p = op.params;
  const depth = p.depth > 0 ? p.depth : 0.6134 * p.pitch;          // an external 60° thread: 0.6134 × pitch
  const rMaj = p.diameter / 2;
  const zStart = p.zStart ?? L.top + Math.max(2 * p.pitch, 2), zEnd = L.top - p.length;
  const rSafe = Math.max(L.rStock, rMaj) + p.clearance, zSafe = Math.max(L.stockTop + p.clearance, zStart);
  if (!(zStart > zEnd)) throw new Error(t('mfg.thread.range'));
  if (depth >= rMaj) throw new Error(t('mfg.thread.depth'));
  // the tool is taken as a sharp point: the path is the point itself
  const rapid = (z, r) => P.rapid(r, 0, z);
  rapid(zSafe, rSafe);
  const cuts = [];
  for (let i = 1; i <= p.passes; i++) cuts.push(depth * Math.sqrt(i / p.passes));   // equal chip area per pass
  for (let i = 0; i < p.spring; i++) cuts.push(depth);
  for (const d of cuts) {
    rapid(zStart, rSafe);
    rapid(zStart, rMaj - d);
    P.moves.push({ k: 'thread', p: [rMaj - d, 0, zEnd], f: p.pitch }); P.pos = [rMaj - d, 0, zEnd];
    rapid(zEnd, rSafe);
  }
  rapid(zSafe, rSafe);
  const S = L.stock;
  let shoulder = false;
  for (let k = S.kOf(zEnd - 2 * p.pitch); k <= S.kOf(zEnd); k++) if (L.prof.r[k] > rMaj + 0.05) shoulder = true;
  if (shoulder) ctx.warn(t('mfg.thread.shoulder'));
  ctx.pathKind = 'lathe'; ctx.frame = { o: [L.c[0], L.c[1], 0] }; ctx.tip = { dr: 0, dz: 0 };
  ctx.simResult = { removed: 0, gouges: 0, at: [], rapidCuts: 0, rapidAt: [] };
  Object.assign(ctx.info, { passes: cuts.length, depth, minor: 2 * (rMaj - depth) });
}

function opTurnDrill(op, ctx, P) {
  const L = setup(op, ctx, ['drill']), p = op.params, { sp } = ctx;
  const zSafe = L.stockTop + p.clearance, zEnd = L.top - p.depth;
  P.rapid(0, 0, zSafe);
  const z = L.stockTop + Math.min(1, p.clearance);
  P.rapid(0, 0, z);
  if (p.peck > 0) {
    let cur = L.stockTop;
    while (cur > zEnd + 1e-9) {
      const next = Math.max(zEnd, cur - p.peck);
      P.feed(0, 0, next, sp.feed);
      if (next > zEnd + 1e-9) { P.rapid(0, 0, z); P.rapid(0, 0, next + 0.5); }
      cur = next;
    }
  } else P.feed(0, 0, zEnd, sp.feed);
  P.rapid(0, 0, zSafe);
  ctx.pathKind = 'lathe'; ctx.frame = { o: [L.c[0], L.c[1], 0] }; ctx.tip = { dr: 0, dz: 0 };
  ctx.simResult = { removed: 0, gouges: 0, at: [], rapidCuts: 0, rapidAt: [] };
  Object.assign(ctx.info, { depth: p.depth });
  if (p.depth > ctx.tool.fluteLen) ctx.warn(t('mfg.drill.deep', { depth: fmt(p.depth), flute: fmt(ctx.tool.fluteLen) }));
}

export const TURN_OPS = { turnface: opTurnFace, turnrough: opTurnRough, turnfinish: opTurnFinish, turngroove: opTurnGroove, turnpart: opTurnPart, turnthread: opTurnThread, turndrill: opTurnDrill };
export const isLatheTool = (tool) => !!(KINDS[tool.kind] && KINDS[tool.kind].lathe);
