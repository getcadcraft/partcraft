/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-multiaxis.js — PartCraft's toolpaths in which the rotary axes move while cutting (DOM-free; 0.11 CAM.4):
 *   five    5-axis finishing: the parallel passes of cam-finish.js with a ball end mill that leans as it goes
 *   rotary  4th-axis finishing: the part turns about the work X axis, the ball end mill points at that axis
 * (A fixed tilted direction for an ordinary operation — 3+2 — is not here: it is op.orient, cam.js machineModel.)
 *
 *   moves  {k: 'rapid' | 'feed', p: [x, y, z] (the tool TIP, work frame), a: [i, j, k] (unit vector from the tip towards the
 *          spindle, work frame), f}. The posts turn a into rotary positions for the machine in Setup (cam-kin.js).
 *   opFive(op, ctx, P) · opRotary(op, ctx, P)        (registered in cam-paths.js)
 *   radialDrop(mesh, …) · class RadialDropper        (exported for the tests)
 *
 * five — method. A ball cuts with a sphere, and the sphere does not change when the tool leans about the ball's centre. So the
 * ball CENTRE follows the gouge-free 3-axis parallel pass (the drop cutter of cam-finish.js: centre = tip + R·ez), and only the
 * direction of the shank is chosen: the surface normal there (the normal of the surface the centre moves on, by central
 * differences; `towardNormal` 0–1 blends from upright to the normal), leaned forward along the cut by `lean` degrees so the
 * dead centre of the ball is not what cuts, and never more than `maxTilt` from upright. The tip is then centre − R·a.
 * Shank check: the tool above the ball is taken as balls of the tool's radius along its axis, every R/2 up to the flute
 * length (at least 4 diameters); each must clear the model seen from above (the same drop cutter). Where one does not, the
 * lean is halved until it does (upright always does: that is the 3-axis pass). Between two points the control moves tip and
 * direction evenly; that lifts the centre off the surface by at most R·θ²/8 for a turn of θ, so points are added until θ is
 * small enough for the tolerance, and the shank is checked every tool radius along the pass.
 * Limits: ball end mills only; every pass is entered and left by a straight lift (no linking moves on the surface); the
 * holder is not checked; the model is what is seen from above (no undercuts: for those, tilt an ordinary operation).
 *
 * rotary — method. For a turn angle θ the tool points along u = [0, −sin θ, cos θ] through the axis. The part's triangles are
 * turned by −θ about the axis, and the ball (radius R + stock to leave) is dropped on them along u at each X: the largest of
 * the facet contacts (centre = contact + R·n, inside the triangle), the edge contacts (the larger root of the distance from the
 * centre to the edge's line = R, when the foot is on the edge) and the vertex contacts — the exact drop of a sphere on a
 * triangle mesh. `along`: lines along X, one stepover of turn apart (the stepover is measured at the stock's radius);
 * `around`: rings round the part, one stepover of X apart. Straight pieces are refined to the tolerance; links between
 * neighbours follow the surface through points worked out the same way. Rapids are at the stock's radius + clearance.
 * Limits: ball end mills only; the tool always points at the axis (no offset, no lead); surfaces the tool cannot see
 * looking at the axis are not cut; shank and holder are not checked.
 *
 * Neither is run through the stock simulation (a height map cannot hold a leaning cut); the tests check the paths against
 * the geometry instead.
 */
import { Dropper, cutLine } from './cam-finish.js';
import { t } from './i18n.js';
import { dot3 as dot } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const DEG = Math.PI / 180;
const hyp = Math.hypot;
const norm = (v) => { const L = hyp(v[0], v[1], v[2]) || 1; return [v[0] / L, v[1] / L, v[2] / L]; };
const angle = (a, b) => Math.acos(Math.max(-1, Math.min(1, dot(a, b))));
const EZ = [0, 0, 1];
/** The unit vector a fraction f of the way from a to b round the great circle. */
function slerp(a, b, f) {
  const th = angle(a, b);
  if (th < 1e-9) return a.slice();
  const s = Math.sin(th), w0 = Math.sin((1 - f) * th) / s, w1 = Math.sin(f * th) / s;
  return norm([a[0] * w0 + b[0] * w1, a[1] * w0 + b[1] * w1, a[2] * w0 + b[2] * w1]);
}

// ---------------------------------------------------------------- five

export function opFive(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2;
  if (tool.kind !== 'ball') throw new Error(t('mfg.five.tool'));
  const st = model.stock.max[2];
  const clearance = st + p.clearance, retract = Math.min(clearance, st + p.retract);
  const floor = p.bottom === null ? -Infinity : p.bottom;
  const dr = new Dropper(model, tool, { leave: p.leave, floor });
  const s = p.stepover * tool.d;
  const th = p.angle * DEG, u = [Math.cos(th), Math.sin(th)], v = [-Math.sin(th), Math.cos(th)];
  const b = model.box;
  const cs = [[b.min[0], b.min[1]], [b.max[0], b.min[1]], [b.max[0], b.max[1]], [b.min[0], b.max[1]]];
  const us = cs.map((c) => c[0] * u[0] + c[1] * u[1]), vs = cs.map((c) => c[0] * v[0] + c[1] * v[1]);
  const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs);
  const n = Math.max(1, Math.ceil((v1 - v0) / s - 1e-9));
  const maxTilt = p.maxTilt * DEG, lean = p.lean * DEG;
  const thMax = Math.sqrt((8 * p.tolerance) / R);          // the turn between two points that lifts the centre by the tolerance
  const shankLen = Math.max(tool.fluteLen, 4 * tool.d), e = Math.max(0.05, R / 10);
  const zc = (x, y) => dr.tip(x, y) + R;                    // the surface the ball's centre moves on
  let reduced = 0, tiltSeen = 0, points = 0, pieces = 0;

  /** The direction wanted at centre c, cutting along unit direction f (3D). */
  const wanted = (c, f) => {
    const zx0 = zc(c[0] - e, c[1]), zx1 = zc(c[0] + e, c[1]), zy0 = zc(c[0], c[1] - e), zy1 = zc(c[0], c[1] + e);
    let nrm = EZ;
    if ([zx0, zx1, zy0, zy1].every(Number.isFinite)) nrm = norm([-(zx1 - zx0) / (2 * e), -(zy1 - zy0) / (2 * e), 1]);
    let a = slerp(EZ, nrm, p.towardNormal);
    if (lean > 0) {
      const ft = [f[0] - dot(f, a) * a[0], f[1] - dot(f, a) * a[1], f[2] - dot(f, a) * a[2]];
      if (hyp(...ft) > 1e-9) { const g = norm(ft), cl = Math.cos(lean), sl = Math.sin(lean); a = norm([a[0] * cl + g[0] * sl, a[1] * cl + g[1] * sl, a[2] * cl + g[2] * sl]); }
    }
    const tl = angle(EZ, a);
    if (tl > maxTilt) a = slerp(EZ, a, maxTilt / tl);
    return a;
  };
  /** Does the shank along a from centre c clear the model? */
  const zTopAll = model.top + p.leave + R;                 // no ball centre above this can touch the model
  const clear = (c, a) => {
    if (a[2] > 1 - 1e-12) return true;                      // upright is the 3-axis pass itself
    for (let d = R / 2; d <= shankLen + 1e-9; d += R / 2) {
      const q = [c[0] + a[0] * d, c[1] + a[1] * d, c[2] + a[2] * d];
      if (q[2] >= zTopAll) break;                            // and the rest of the shank is higher still
      if (zc(q[0], q[1]) > q[2] + 1e-6) return false;
    }
    return true;
  };
  const settle = (c, f) => {
    let a = wanted(c, f);
    for (let k = 0; k < 7 && !clear(c, a); k++) { a = k === 6 ? EZ.slice() : slerp(EZ, a, 0.5); if (k === 0) reduced++; }
    return a;
  };

  const runs = [];
  let flip = false;
  for (let k = 0; k <= n; k++) {
    const vv = v0 + ((v1 - v0) * k) / n;
    const a = [u[0] * u0 + v[0] * vv, u[1] * u0 + v[1] * vv], en = [u[0] * u1 + v[0] * vv, u[1] * u1 + v[1] * vv];
    let pcs = cutLine(dr, a, en, { tol: p.tolerance, ds: Math.min(R, 1) });
    if (flip) pcs = pcs.reverse().map((r) => r.slice().reverse());
    for (const r of pcs) if (r.length > 1) runs.push(r);
    if (p.zigzag) flip = !flip;
  }
  if (!runs.length) { ctx.warn(t('mfg.finish.nothing')); return; }

  const push = (k, tip, a, f) => { const m = { k, p: tip, a }; if (f !== undefined) m.f = f; P.moves.push(m); P.pos = tip; };
  for (const run of runs) {
    // centres along the pass, close enough for the shank check (cutLine thins flat stretches: put points back every R)
    const cen = [];
    for (let q = 0; q < run.length; q++) {
      const c1 = [run[q][0], run[q][1], run[q][2] + R];
      if (q > 0) {
        const c0 = cen[cen.length - 1], L = hyp(c1[0] - c0[0], c1[1] - c0[1]), m = Math.ceil(L / Math.max(R, 0.25));
        for (let w = 1; w < m; w++) { const x = c0[0] + ((c1[0] - c0[0]) * w) / m, y = c0[1] + ((c1[1] - c0[1]) * w) / m; cen.push([x, y, zc(x, y)]); }
      }
      cen.push(c1);
    }
    const dirOf = (q) => { const a = cen[Math.max(0, q - 1)], bb = cen[Math.min(cen.length - 1, q + 1)]; return norm([bb[0] - a[0], bb[1] - a[1], bb[2] - a[2]]); };
    let pts = cen.map((c, q) => ({ c, a: settle(c, dirOf(q)), f: dirOf(q) }));
    // more points where the direction turns fast (the centre lifts by R·θ²/8 between two points)
    for (let round = 0; round < 6; round++) {
      const next = [pts[0]];
      let added = false;
      for (let q = 1; q < pts.length; q++) {
        const A = pts[q - 1], B = pts[q];
        if (angle(A.a, B.a) > thMax && hyp(B.c[0] - A.c[0], B.c[1] - A.c[1]) > 0.02) {
          const x = (A.c[0] + B.c[0]) / 2, y = (A.c[1] + B.c[1]) / 2, c = [x, y, zc(x, y)];
          next.push({ c, a: settle(c, A.f), f: A.f }); added = true;
        }
        next.push(B);
      }
      pts = next;
      if (!added) break;
    }
    // drop points that the neighbours already give (position within a tenth of the tolerance, direction within 0.25°)
    const keep = [pts[0]];
    for (let q = 1; q < pts.length - 1; q++) {
      const A = keep[keep.length - 1], B = pts[q + 1], M = pts[q];
      const L = hyp(B.c[0] - A.c[0], B.c[1] - A.c[1], B.c[2] - A.c[2]);
      const f = L > 0 ? ((M.c[0] - A.c[0]) * (B.c[0] - A.c[0]) + (M.c[1] - A.c[1]) * (B.c[1] - A.c[1]) + (M.c[2] - A.c[2]) * (B.c[2] - A.c[2])) / (L * L) : 0;
      const off = hyp(M.c[0] - A.c[0] - (B.c[0] - A.c[0]) * f, M.c[1] - A.c[1] - (B.c[1] - A.c[1]) * f, M.c[2] - A.c[2] - (B.c[2] - A.c[2]) * f);
      if (off > p.tolerance * 0.1 || angle(M.a, slerp(A.a, B.a, Math.max(0, Math.min(1, f)))) > 0.25 * DEG || L > 4 * tool.d) keep.push(M);
    }
    if (pts.length > 1) keep.push(pts[pts.length - 1]);
    const tipOf = (q) => [q.c[0] - R * q.a[0], q.c[1] - R * q.a[1], q.c[2] - R * q.a[2]];
    const first = keep[0], t0 = tipOf(first);
    // in: over the first point at the retract height with the first direction, straight down (the centre comes down a vertical line)
    const up = (q, z) => { const tp = tipOf(q); return [tp[0], tp[1], Math.max(z, tp[2])]; };
    if (!P.pos) push('rapid', up(first, clearance), first.a);
    push('rapid', up(first, retract), first.a);
    push('feed', t0, first.a, sp.plunge);
    for (const q of keep.slice(1)) { push('feed', tipOf(q), q.a, sp.feed); tiltSeen = Math.max(tiltSeen, angle(EZ, q.a)); }
    const last = keep[keep.length - 1];
    push('rapid', up(last, retract), last.a);
    points += keep.length; pieces++;
  }
  const end = P.pos;
  push('rapid', [end[0], end[1], clearance], EZ.slice());
  ctx.pathKind = 'multi'; ctx.noSim = true;
  ctx.info.lines = n + 1; ctx.info.pieces = pieces; ctx.info.points = points; ctx.info.stepover = s;
  ctx.info.maxTilt = tiltSeen / DEG; ctx.info.reduced = reduced;
  if (reduced) ctx.warn(t('mfg.five.reduced', { n: reduced }));
}

// ---------------------------------------------------------------- rotary

/**
 * The exact drop of a ball of radius Rb on a triangle mesh, along a direction that turns about an axis parallel to X.
 * mesh {positions, indices}; axis through (ay, az). drop(x, θ) → the distance of the ball's centre from the axis (−Infinity: nothing there).
 */
export class RadialDropper {
  constructor(mesh, ay, az, Rb) {
    this.P = mesh.positions; this.I = mesh.indices; this.ay = ay; this.az = az; this.Rb = Rb;
    const P3 = this.P, I = this.I, nt = I.length / 3;
    let x0 = Infinity, x1 = -Infinity;
    for (let i = 0; i < P3.length; i += 3) { if (P3[i] < x0) x0 = P3[i]; if (P3[i] > x1) x1 = P3[i]; }
    this.x0 = x0; this.x1 = x1;
    this.bw = Math.max(Rb, (x1 - x0) / 400, 1e-6);
    this.nb = Math.max(1, Math.ceil((x1 - x0) / this.bw));
    this.bins = Array.from({ length: this.nb }, () => []);
    for (let k = 0; k < nt; k++) {
      const xa = P3[I[k * 3] * 3], xb = P3[I[k * 3 + 1] * 3], xc = P3[I[k * 3 + 2] * 3];
      const lo = Math.min(xa, xb, xc) - Rb, hi = Math.max(xa, xb, xc) + Rb;
      const i0 = Math.max(0, Math.floor((lo - x0) / this.bw)), i1 = Math.min(this.nb - 1, Math.floor((hi - x0) / this.bw));
      for (let i = i0; i <= i1; i++) this.bins[i].push(k);
    }
    this.theta = null; this.Y = new Float64Array(P3.length / 3); this.Z = new Float64Array(P3.length / 3);
  }
  /** Turn the vertices so the tool direction for angle θ (radians) is +Z'. */
  turn(theta) {
    if (this.theta === theta) return;
    const c = Math.cos(theta), s = Math.sin(theta), P3 = this.P, { ay, az, Y, Z } = this;
    for (let i = 0, k = 0; i < P3.length; i += 3, k++) { const y = P3[i + 1] - ay, z = P3[i + 2] - az; Y[k] = y * c + z * s; Z[k] = -y * s + z * c; }
    this.theta = theta;
  }
  drop(x, theta) {
    this.turn(theta);
    const { P: P3, I, Y, Z, Rb } = this;
    if (x < this.x0 - Rb || x > this.x1 + Rb) return -Infinity;
    const bin = this.bins[Math.max(0, Math.min(this.nb - 1, Math.floor((x - this.x0) / this.bw)))];
    let best = -Infinity;
    const R2 = Rb * Rb;
    for (const k of bin) {
      const ia = I[k * 3], ib = I[k * 3 + 1], ic = I[k * 3 + 2];
      const ax = P3[ia * 3] - x, ay = Y[ia], az = Z[ia], bx = P3[ib * 3] - x, by = Y[ib], bz = Z[ib], cx = P3[ic * 3] - x, cy = Y[ic], cz = Z[ic];
      if (Math.min(ay, by, cy) > Rb || Math.max(ay, by, cy) < -Rb || Math.min(ax, bx, cx) > Rb || Math.max(ax, bx, cx) < -Rb) continue;
      if (Math.max(az, bz, cz) + Rb <= best) continue;
      // vertices
      let d2 = ax * ax + ay * ay; if (d2 <= R2) { const v = az + Math.sqrt(R2 - d2); if (v > best) best = v; }
      d2 = bx * bx + by * by; if (d2 <= R2) { const v = bz + Math.sqrt(R2 - d2); if (v > best) best = v; }
      d2 = cx * cx + cy * cy; if (d2 <= R2) { const v = cz + Math.sqrt(R2 - d2); if (v > best) best = v; }
      // edges: the centre (0, 0, s) at distance Rb from the edge's line, the larger s, foot on the edge
      for (let e = 0; e < 3; e++) {
        const px = e === 0 ? ax : e === 1 ? bx : cx, py = e === 0 ? ay : e === 1 ? by : cy, pz = e === 0 ? az : e === 1 ? bz : cz;
        const qx = e === 0 ? bx : e === 1 ? cx : ax, qy = e === 0 ? by : e === 1 ? cy : ay, qz = e === 0 ? bz : e === 1 ? cz : az;
        const dx = qx - px, dy = qy - py, dz = qz - pz, L2 = dx * dx + dy * dy + dz * dz;
        if (L2 < 1e-24) continue;
        const A = 1 - (dz * dz) / L2;
        if (A < 1e-12) continue;
        const ee = -px * dx - py * dy;                 // (centre − P)·d without the s part
        const B = -2 * ee * dz / L2, C = px * px + py * py - (ee * ee) / L2 - R2;
        const disc = B * B - 4 * A * C;
        if (disc < 0) continue;
        const q = (-B + Math.sqrt(disc)) / (2 * A);    // s − pz
        const uu = (ee + q * dz) / L2;
        if (uu < 0 || uu > 1) continue;
        const v = pz + q;
        if (v > best) best = v;
      }
      // facet
      const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const nl = Math.sqrt(nx * nx + ny * ny + nz * nz);
      if (nl < 1e-18) continue;
      nx /= nl; ny /= nl; nz /= nl;
      if (nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
      if (nz < 1e-9) continue;
      const fx = -Rb * nx, fy = -Rb * ny;              // the contact point's x, y
      const den = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
      if (Math.abs(den) < 1e-18) continue;
      const l1 = ((by - cy) * (fx - cx) + (cx - bx) * (fy - cy)) / den, l2 = ((cy - ay) * (fx - cx) + (ax - cx) * (fy - cy)) / den, l3 = 1 - l1 - l2;
      if (l1 < 0 || l2 < 0 || l3 < 0) continue;
      const v = l1 * az + l2 * bz + l3 * cz + Rb * nz;
      if (v > best) best = v;
    }
    return best;
  }
}
/** One call: the centre's distance from the axis for a ball of radius Rb at x, turn angle θ (radians). */
export function radialDrop(mesh, ay, az, Rb, x, theta) { return new RadialDropper(mesh, ay, az, Rb).drop(x, theta); }

export function opRotary(op, ctx, P) {
  const { tool, sp } = ctx;
  const model = ctx.mainModel || ctx.model;
  const p = op.params, R = tool.d / 2;
  if (tool.kind !== 'ball') throw new Error(t('mfg.rotary.tool'));
  const st = model.stock0 || model.stock;
  const ay = p.axisY ?? (st.min[1] + st.max[1]) / 2, az = p.axisZ ?? (st.min[2] + st.max[2]) / 2;
  const rStock = Math.max(...[st.min[1], st.max[1]].flatMap((y) => [st.min[2], st.max[2]].map((z) => hyp(y - ay, z - az))));   // the stock's farthest corner from the axis
  const rSafe = rStock + p.clearance + R;
  let xa = p.xFrom ?? model.box.min[0], xb = p.xTo ?? model.box.max[0];
  if (xa > xb) [xa, xb] = [xb, xa];
  if (!(xb - xa > 1e-6)) throw new Error(t('mfg.rotary.range'));
  if (Math.abs(p.angleTo - p.angleFrom) < 1e-6) throw new Error(t('mfg.rotary.angles'));
  const D = new RadialDropper(model.mesh, ay, az, R + p.leave);
  const th0 = p.angleFrom * DEG, th1 = p.angleTo * DEG, full = Math.abs(Math.abs(p.angleTo - p.angleFrom) - 360) < 1e-6;
  const s = p.stepover * tool.d, tol = p.tolerance;
  /** A path point at (x, θ): {x, th, r (centre), tip, a} or null where there is nothing to cut. */
  const at = (x, th) => {
    let r = D.drop(x, th);
    if (r === -Infinity) return null;
    r = Math.max(r, R);                                   // the tip never passes the axis
    const u = [0, -Math.sin(th), Math.cos(th)];
    return { x, th, r, a: u, tip: [x, ay + (r - R) * u[1], az + (r - R) * u[2]] };
  };
  const safe = (x, th) => { const u = [0, -Math.sin(th), Math.cos(th)]; return { tip: [x, ay + (rSafe - R) * u[1], az + (rSafe - R) * u[2]], a: u }; };
  const push = (k, q, f) => { const m = { k, p: q.tip, a: q.a }; if (f !== undefined) m.f = f; P.moves.push(m); P.pos = q.tip; };
  /** Points from A to B (both at (x, θ)), refined until the middle of every piece is within the tolerance of the surface. */
  const between = (A, B, depth = 0) => {
    const xm = (A.x + B.x) / 2, tm = (A.th + B.th) / 2, M = at(xm, tm);
    if (!M) return null;
    const flatEnough = Math.abs(M.r - (A.r + B.r) / 2) <= tol / 2 && Math.abs(B.th - A.th) * Math.max(A.r, B.r) <= 2 * Math.sqrt(2 * tol * Math.max(A.r, B.r, 1e-6)) + 1e-12;
    if (depth >= 12 || flatEnough || (Math.abs(B.x - A.x) < 0.02 && Math.abs(B.th - A.th) * Math.max(A.r, 1) < 0.02)) return [B];
    const l = between(A, M, depth + 1), r = between(M, B, depth + 1);
    return l && r ? [...l, ...r] : null;
  };
  /** One pass through the (x, θ) stations given: pieces of points (a station with nothing under it ends a piece). */
  const passOf = (stations) => {
    const pcs = [];
    let cur = [];
    for (const [x, th] of stations) {
      const q = at(x, th);
      if (!q) { if (cur.length > 1) pcs.push(cur); cur = []; continue; }
      if (cur.length) { const mid = between(cur[cur.length - 1], q); if (mid) cur.push(...mid); else { if (cur.length > 1) pcs.push(cur); cur = [q]; } } else cur.push(q);
    }
    if (cur.length > 1) pcs.push(cur);
    return pcs;
  };
  const passes = [];
  if (p.pattern === 'around') {
    const nRing = Math.max(1, Math.ceil((xb - xa) / s - 1e-9));
    const dth = 5 * DEG;   // stations; the pieces between them are refined to the tolerance
    const nth = Math.max(8, Math.ceil(Math.abs(th1 - th0) / dth));
    for (let k = 0; k <= nRing; k++) {
      const x = xa + ((xb - xa) * k) / nRing, st2 = [];
      for (let q = 0; q <= nth; q++) st2.push([x, th0 + ((th1 - th0) * q) / nth]);
      if (p.zigzag && k % 2) st2.reverse();
      passes.push(...passOf(st2));
    }
    ctx.info.rings = nRing + 1;
  } else {
    const dth = Math.min(15 * DEG, s / Math.max(rStock, 1e-6));
    const nL = Math.max(1, Math.ceil(Math.abs(th1 - th0) / dth - 1e-9));
    const dx = Math.min(R / 2, 2), nxs = Math.max(1, Math.ceil((xb - xa) / dx));
    for (let k = 0; k < nL + (full ? 0 : 1); k++) {
      const th = th0 + ((th1 - th0) * k) / nL, st2 = [];
      for (let q = 0; q <= nxs; q++) st2.push([xa + ((xb - xa) * q) / nxs, th]);
      if (p.zigzag && k % 2) st2.reverse();
      passes.push(...passOf(st2));
    }
    ctx.info.lines = nL + (full ? 0 : 1);
  }
  if (!passes.length) { ctx.warn(t('mfg.finish.nothing')); return; }
  let points = 0, links = 0;
  let end = null;
  for (const pc of passes) {
    const first = pc[0];
    let linked = false;
    if (end && Math.abs(first.x - end.x) <= 1.5 * s + 1e-9 && Math.abs(first.th - end.th) * rStock <= 1.5 * s + 1e-9) {
      const mid = between(end, first);
      if (mid) { for (const q of mid) push('feed', q, sp.feed); linked = true; links++; }
    }
    if (!linked) {
      if (end) push('rapid', safe(end.x, end.th));
      push('rapid', safe(first.x, first.th));
      push('feed', first, sp.plunge);
    }
    for (const q of pc.slice(1)) push('feed', q, sp.feed);
    points += pc.length;
    end = pc[pc.length - 1];
  }
  push('rapid', safe(end.x, end.th));
  ctx.pathKind = 'multi'; ctx.noSim = true;
  ctx.info.passes = passes.length; ctx.info.points = points; ctx.info.links = links; ctx.info.safeRadius = rSafe - R; ctx.info.axis = [ay, az];
  const pv = ctx.setup && ctx.setup.machine ? ctx.setup.machine.pivot || [0, 0, 0] : [0, 0, 0];
  if (ctx.setup && ctx.setup.machine && !ctx.setup.machine.tcp && (Math.abs(pv[1] - ay) > 1e-6 || Math.abs(pv[2] - az) > 1e-6)) ctx.warn(t('mfg.rotary.pivot', { y: +ay.toFixed(3), z: +az.toFixed(3) }));
}

export const MULTI_OPS = { five: opFive, rotary: opRotary };
