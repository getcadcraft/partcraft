/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-finish.js — PartCraft's 3D finishing toolpaths (DOM-free): parallel (raster lines at any angle) and scallop
 * (passes a constant surface distance apart, so the cusp between neighbours stays at the height asked for).
 * Three axes, tool axis vertical, the whole model (nothing to pick); ball, bull-nose and flat end mills.
 *
 *   new Dropper(model, tool, {leave, floor, slope}) · .tip(x, y) → z of the tool tip · .ok(x, y) → is there surface to finish here
 *   cutLine(dropper, a, b, {tol, ds}) → [polyline [[x, y, z] …] …]   the parts of a straight line that can be finished
 *   opParallel(op, ctx, P) · opScallop(op, ctx, P)                    (registered in cam-paths.js)
 *
 * Method. The tool tip at (x, y) is the highest z at which the cutter touches no part of the model:
 *     z(x, y) = max over model points q within the tool radius of [ q.z − h(|q − (x, y)|) ]
 * with h the tool's tip profile (cam-tools.profile). The model's top surface is sampled on a grid of cell R/8 and the
 * best sample is refined: from the facet under it (a plane z = z0 + g·(Q − q)) the contact for a ball or bull-nose
 * cutter is at distance ρ* = A + rc·s/√(1 + s²) uphill from the tip (s = |g|, rc the nose radius, A = R − rc; for a
 * flat tool ρ* = R), checked against the real surface, a few rounds. Every value is a point of the real surface, so the
 * result is never above the true tip height; it is below it by a rounding that the refinement keeps far under the
 * tolerance. Then every edge (and so every vertex) of the triangles round the best contact is searched exactly: along an
 * edge z is linear and the cutter's h(ρ) convex, so the value is concave and a ternary search finds the contact. Stock to leave L is the model offset by L: the same cutter grown by L (radius, nose radius), tip raised
 * by L — exact for ball and bull-nose tools; a flat tool grows square (it leaves at least L, never less).
 * Lines are sampled every min(R/4, 1) mm and any piece whose midpoint is more than half the tolerance off the chord is split.
 *
 * Limits (the help says the same): the tool centre stays over the model (it does not go past the model's edge); the
 * top surface is what the cutter sees from above, so undercuts are not finished; no holder collision check; the
 * toolpath is a finishing pass: rough the stock first (a warning says when a pass would cut deep).
 */
import { profile } from './cam-tools.js';
import { t } from './i18n.js';

const DEG = Math.PI / 180;
const hyp = Math.hypot;

export function grownTool(tool, leave) {
  if (!(leave > 0)) return tool;
  return { ...tool, d: tool.d + 2 * leave, cornerR: tool.kind === 'bull' ? tool.cornerR + leave : tool.cornerR };
}

export class Dropper {
  constructor(model, tool, { leave = 0, floor = -Infinity, slope = [0, 90] } = {}) {
    if (!['ball', 'bull', 'flat'].includes(tool.kind)) throw new Error(t('mfg.finish.tool'));
    this.model = model; this.leave = leave; this.floor = floor;
    const g = grownTool(tool, leave);
    this.prof = profile(g);
    this.R = this.prof.R;
    this.rc = g.kind === 'ball' ? this.R : g.kind === 'bull' ? g.cornerR : 0;
    this.A = this.R - this.rc;
    this.sMin = Math.tan(slope[0] * DEG) - 1e-9;
    this.sMax = slope[1] >= 90 ? Infinity : Math.tan(slope[1] * DEG) + 1e-9;
    const b = model.box;
    let c = Math.max(0.02, this.R / 8);
    const w = b.max[0] - b.min[0], h = b.max[1] - b.min[1];
    while ((w / c + 1) * (h / c + 1) > 3e6) c *= 1.25;
    this.c = c; this.x0 = b.min[0]; this.y0 = b.min[1];
    this.nx = Math.max(1, Math.ceil(w / c)); this.ny = Math.max(1, Math.ceil(h / c));
    this.H = new Float32Array(this.nx * this.ny);
    for (let j = 0; j < this.ny; j++) for (let i = 0; i < this.nx; i++) this.H[j * this.nx + i] = model.heightAt(this.x0 + (i + 0.5) * c, this.y0 + (j + 0.5) * c);
  }
  /** Is there model surface under (x, y) with a slope inside the asked range? */
  ok(x, y) {
    const p = this.model.topPlane(x, y);
    if (!p) return false;
    const s = hyp(p.gx, p.gy);
    return s >= this.sMin && s <= this.sMax;
  }
  /** Tool-tip height at (x, y) (−Infinity when no model is within reach). */
  tip(x, y) {
    const { R, c, nx, ny, x0, y0, H, prof, model } = this;
    let best = model.heightAt(x, y), qx = x, qy = y;
    const i0 = Math.max(0, Math.floor((x - R - x0) / c)), i1 = Math.min(nx - 1, Math.floor((x + R - x0) / c));
    const j0 = Math.max(0, Math.floor((y - R - y0) / c)), j1 = Math.min(ny - 1, Math.floor((y + R - y0) / c));
    for (let j = j0; j <= j1; j++) {
      const dy = y0 + (j + 0.5) * c - y;
      for (let i = i0; i <= i1; i++) {
        const hh = H[j * nx + i];
        if (hh === -Infinity) continue;
        const dx = x0 + (i + 0.5) * c - x;
        const rho = hyp(dx, dy);
        if (rho > R) continue;
        const v = hh - prof.h(rho);
        if (v > best) { best = v; qx = x + dx; qy = y + dy; }
      }
    }
    if (best === -Infinity) return -Infinity;
    for (let it = 0; it < 6; it++) {
      const pl = model.topPlane(qx, qy);
      if (!pl) break;
      const s = hyp(pl.gx, pl.gy);
      let rx = x, ry = y;
      if (s > 1e-9) { const rho = this.A + (this.rc * s) / Math.sqrt(1 + s * s); rx = x + (rho * pl.gx) / s; ry = y + (rho * pl.gy) / s; }
      const rho = hyp(rx - x, ry - y);
      const hq = model.heightAt(rx, ry);
      if (hq === -Infinity || rho > R + 1e-9) break;
      const v = hq - prof.h(Math.min(rho, R));
      if (v > best + 1e-12) { best = v; qx = rx; qy = ry; } else break;
    }
    // edge and vertex contacts of the triangles round the best contact: along an edge z is linear and h(ρ) is convex, so the
    // value is concave in the position on the edge and a ternary search finds it (a position beyond the tool radius costs a steep penalty)
    const rN = 3 * c, I = model.mesh.indices, P3 = model.mesh.positions;
    for (const tr of model.trianglesIn(qx - rN, qy - rN, qx + rN, qy + rN)) {
      for (let e = 0; e < 3; e++) {
        const a = I[tr * 3 + e] * 3, b = I[tr * 3 + ((e + 1) % 3)] * 3;
        const ax = P3[a], ay = P3[a + 1], az = P3[a + 2], bx = P3[b] - ax, by = P3[b + 1] - ay, bz = P3[b + 2] - az;
        const f = (u) => { const rho = hyp(ax + bx * u - x, ay + by * u - y); return az + bz * u - (rho <= R ? prof.h(rho) : prof.h(R) + 1e6 * (rho - R)); };
        let lo = 0, hi = 1;
        for (let k = 0; k < 44; k++) {
          const m1 = lo + (hi - lo) / 3, m2 = hi - (hi - lo) / 3;
          if (f(m1) < f(m2)) lo = m1; else hi = m2;
        }
        for (const u of [(lo + hi) / 2, 0, 1]) {
          const rho = hyp(ax + bx * u - x, ay + by * u - y);
          if (rho > R + 1e-9) continue;
          const v = az + bz * u - prof.h(Math.min(rho, R));
          if (v > best) best = v;
        }
      }
    }
    return Math.max(best + this.leave, this.floor);
  }
}

/** The pieces of the straight line a → b (2D) that can be finished: [[x, y, z] …] each, within tol of the true tip height. */
export function cutLine(dr, a, b, { tol = 0.01, ds = 0 } = {}) {
  const L = hyp(b[0] - a[0], b[1] - a[1]);
  const step = ds > 0 ? ds : Math.min(dr.R / 4, 1);
  const at = (u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
  const good = (u) => { const p = at(u); return dr.ok(p[0], p[1]); };
  const pt = (u) => { const p = at(u); return [p[0], p[1], dr.tip(p[0], p[1])]; };
  const n = Math.max(1, Math.ceil(L / step));
  const runs = [];
  let from = -1;
  const edge = (bad, ok) => { for (let k = 0; k < 12; k++) { const m = (bad + ok) / 2; if (good(m)) ok = m; else bad = m; } return ok; };
  for (let k = 0; k <= n; k++) {
    const g = good(k / n);
    if (g && from < 0) from = k;
    if ((!g || k === n) && from >= 0) {
      const last = g ? k : k - 1;
      const u0 = from === 0 ? 0 : edge((from - 1) / n, from / n);
      const u1 = last === n ? 1 : edge((last + 1) / n, last / n);
      runs.push([u0, u1]);
      from = -1;
    }
  }
  const out = [];
  for (const [u0, u1] of runs) {
    if ((u1 - u0) * L < 1e-6) continue;
    const m = Math.max(1, Math.ceil(((u1 - u0) * L) / step));
    const line = [pt(u0)];
    const rec = (p0, t0, p1, t1, depth) => {
      if (depth < 14 && (t1 - t0) * L > 0.02) {
        const tm = (t0 + t1) / 2, pm = pt(tm);
        if (Math.abs(pm[2] - (p0[2] + p1[2]) / 2) > tol / 2) { rec(p0, t0, pm, tm, depth + 1); rec(pm, tm, p1, t1, depth + 1); return; }
      }
      line.push(p1);
    };
    let prev = line[0], tp = u0;
    for (let k = 1; k <= m; k++) { const tk = u0 + ((u1 - u0) * k) / m, pk = pt(tk); rec(prev, tp, pk, tk, 0); prev = pk; tp = tk; }
    out.push(thin(line, tol * 0.1));
  }
  return out;
}
/** Drop points that lie within eps of the line through their neighbours (a flat or straight run stays two points). */
function thin(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = [pts[0]];
  let a = pts[0];
  for (let k = 1; k < pts.length - 1; k++) {
    const b = pts[k + 1];
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], L2 = ux * ux + uy * uy + uz * uz;
    const p = pts[k];
    const tt = L2 > 0 ? ((p[0] - a[0]) * ux + (p[1] - a[1]) * uy + (p[2] - a[2]) * uz) / L2 : 0;
    const d = hyp(p[0] - a[0] - ux * tt, p[1] - a[1] - uy * tt, p[2] - a[2] - uz * tt);
    if (d > eps) { keep.push(p); a = p; }
  }
  keep.push(pts[pts.length - 1]);
  return keep;
}

function finishHeights(op, ctx) {
  const p = op.params, st = ctx.model.stock.max[2];
  const clearance = st + p.clearance;
  return { clearance, retract: Math.min(clearance, st + p.retract), floor: p.bottom === null ? -Infinity : p.bottom };
}

/** Walk a list of polylines [[x, y, z] …] with the tool: links stay down when a checked straight move allows, else lift. */
function emitRuns(runs, ctx, P, dr, tol, linkMax) {
  const { sp, tool } = ctx;
  const h = ctx.h;
  let deep = false;
  let end = null;
  for (const run of runs) {
    const f = run[0];
    let linked = false;
    if (end && hyp(f[0] - end[0], f[1] - end[1]) <= linkMax) {
      const pieces = cutLine(dr, end, f, { tol });
      if (pieces.length === 1 && hyp(pieces[0][0][0] - end[0], pieces[0][0][1] - end[1]) < 1e-3 && hyp(pieces[0][pieces[0].length - 1][0] - f[0], pieces[0][pieces[0].length - 1][1] - f[1]) < 1e-3) {
        for (const q of pieces[0].slice(1)) P.feed(q[0], q[1], q[2], sp.feed);
        linked = true;
      }
    }
    if (!linked) {
      if (P.pos) { P.rapidZ(h.retract); P.rapid(f[0], f[1], h.retract); } else { P.rapid(f[0], f[1], h.clearance); P.rapidZ(h.retract); }
      P.feed(f[0], f[1], f[2], sp.plunge);
    }
    for (const q of run.slice(1)) P.feed(q[0], q[1], q[2], sp.feed);
    for (const q of run) if (ctx.stockAt(q[0], q[1], tool.d / 2) - q[2] > tool.d * 0.5) { deep = true; break; }
    end = run[run.length - 1];
  }
  if (P.pos) P.rapidZ(h.clearance);
  if (deep) ctx.warn(t('mfg.finish.rough_first'));
}

// ---------------------------------------------------------------- parallel

export function opParallel(op, ctx, P) {
  const { model, tool } = ctx;
  const p = op.params;
  ctx.h = finishHeights(op, ctx);
  const dr = new Dropper(model, tool, { leave: p.leave, floor: ctx.h.floor, slope: [p.slopeFrom, p.slopeTo] });
  const s = p.stepover * tool.d;
  const th = p.angle * DEG, u = [Math.cos(th), Math.sin(th)], v = [-Math.sin(th), Math.cos(th)];
  const b = model.box;
  const cs = [[b.min[0], b.min[1]], [b.max[0], b.min[1]], [b.max[0], b.max[1]], [b.min[0], b.max[1]]];
  const us = cs.map((c) => c[0] * u[0] + c[1] * u[1]), vs = cs.map((c) => c[0] * v[0] + c[1] * v[1]);
  const u0 = Math.min(...us), u1 = Math.max(...us), v0 = Math.min(...vs), v1 = Math.max(...vs);
  const n = Math.max(1, Math.ceil((v1 - v0) / s - 1e-9));
  const runs = [];
  let flip = false;
  for (let k = 0; k <= n; k++) {
    const vv = v0 + ((v1 - v0) * k) / n;
    const a = [u[0] * u0 + v[0] * vv, u[1] * u0 + v[1] * vv], e = [u[0] * u1 + v[0] * vv, u[1] * u1 + v[1] * vv];
    let pieces = cutLine(dr, a, e, { tol: p.tolerance });
    if (flip) pieces = pieces.reverse().map((r) => r.slice().reverse());
    for (const r of pieces) runs.push(r);
    if (p.zigzag) flip = !flip;
  }
  if (!runs.length) { ctx.warn(t('mfg.finish.nothing')); return; }
  emitRuns(runs, ctx, P, dr, p.tolerance, 2.5 * s);
  ctx.info.lines = n + 1; ctx.info.pieces = runs.length; ctx.info.stepover = s;
}

// ---------------------------------------------------------------- scallop

/** Cusp height between two ball passes `s` apart on a flat surface: h = R − √(R² − (s/2)²). */
export const cuspHeight = (R, s) => R - Math.sqrt(Math.max(0, R * R - (s / 2) * (s / 2)));
/** The pass spacing that leaves cusps of height h: s = 2·√(2·R·h − h²). */
export const spacingFor = (R, h) => (h >= R ? 2 * R : 2 * Math.sqrt(2 * R * h - h * h));

class Heap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  push(key, val) {
    const K = this.k, V = this.v;
    let i = K.length;
    K.push(key); V.push(val);
    while (i > 0) { const pa = (i - 1) >> 1; if (K[pa] <= key) break; K[i] = K[pa]; V[i] = V[pa]; i = pa; }
    K[i] = key; V[i] = val;
  }
  pop() {
    const K = this.k, V = this.v;
    const rk = K[0], rv = V[0];
    const key = K.pop(), val = V.pop();
    const n = K.length;
    if (n) {
      let i = 0;
      for (;;) {
        let c = 2 * i + 1;
        if (c >= n) break;
        if (c + 1 < n && K[c + 1] < K[c]) c++;
        if (K[c] >= key) break;
        K[i] = K[c]; V[i] = V[c]; i = c;
      }
      K[i] = key; V[i] = val;
    }
    return [rk, rv];
  }
}

// Steps of the distance search: every (di, dj) with gcd 1 and |di|, |dj| ≤ 3 (32 directions, at most 9° apart), each with the cells
// the straight step passes through (all must be on the model).
const NB = (() => {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const out = [];
  for (let di = -5; di <= 5; di++) for (let dj = -5; dj <= 5; dj++) {
    if ((!di && !dj) || gcd(Math.abs(di), Math.abs(dj)) !== 1) continue;
    const n = Math.max(Math.abs(di), Math.abs(dj)), seen = new Set(), via = [];
    for (let k = 1; k < 8 * n; k++) {
      const a = Math.round((di * k) / (8 * n)), b = Math.round((dj * k) / (8 * n)), key = a + ',' + b;
      if ((a === 0 && b === 0) || (a === di && b === dj) || seen.has(key)) continue;
      seen.add(key); via.push([a, b]);
    }
    out.push({ di, dj, len: Math.hypot(di, dj), via });
  }
  return out;
})();

/**
 * Distance over the model's surface (mm along it, 32-direction steps: the length of a straight run is at most ≈ 0.5 % over) from the sources to every cell of the model's top surface. → {g (Float64Array, Infinity off the model), nx, ny, c, x0, y0}
 */
export function surfaceDistance(model, c, from, maxCells = 1.5e6) {
  const b = model.box;
  const w = b.max[0] - b.min[0], h = b.max[1] - b.min[1];
  while ((w / c + 1) * (h / c + 1) > maxCells) c *= 1.25;
  const nx = Math.max(1, Math.ceil(w / c)), ny = Math.max(1, Math.ceil(h / c)), x0 = b.min[0], y0 = b.min[1];
  const H = new Float64Array(nx * ny);
  let top = -Infinity;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { const z = model.heightAt(x0 + (i + 0.5) * c, y0 + (j + 0.5) * c); H[j * nx + i] = z; if (z > top) top = z; }
  const g = new Float64Array(nx * ny).fill(Infinity);
  const heap = new Heap();
  const on = (i, j) => i >= 0 && j >= 0 && i < nx && j < ny && H[j * nx + i] > -Infinity;
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    if (!on(i, j)) continue;
    const src = from === 'top' ? H[j * nx + i] >= top - 1e-6 : !(on(i - 1, j) && on(i + 1, j) && on(i, j - 1) && on(i, j + 1));
    if (src) { g[j * nx + i] = 0; heap.push(0, j * nx + i); }
  }
  while (heap.size) {
    const [d, k] = heap.pop();
    if (d > g[k]) continue;
    const i = k % nx, j = (k - i) / nx;
    for (const { di, dj, via } of NB) {
      const ii = i + di, jj = j + dj;
      if (!on(ii, jj)) continue;
      let clear = true;
      for (const [a, b] of via) if (!on(i + a, j + b)) { clear = false; break; }
      if (!clear) continue;
      const k2 = jj * nx + ii;
      const nd = d + hyp(di * c, dj * c, H[k2] - H[k]);
      if (nd < g[k2]) { g[k2] = nd; heap.push(nd, k2); }
    }
  }
  return { g, H, nx, ny, c, x0, y0, top };
}

/** Marching squares on the distance field at one level → polylines [[x, y] …] (closed ones repeat the first point). */
export function isoLines(F, level) {
  const { g, nx, ny, c, x0, y0 } = F;
  const segs = [];
  const key = (i, j, o) => 2 * (j * nx + i) + o;   // o 0: edge (i,j)–(i+1,j), 1: edge (i,j)–(i,j+1)
  const pos = new Map();
  const cross = (i, j, o) => {
    const k = key(i, j, o);
    let p = pos.get(k);
    if (!p) {
      const a = g[j * nx + i], bb = o === 0 ? g[j * nx + i + 1] : g[(j + 1) * nx + i];
      const f = (level - a) / (bb - a);
      p = [x0 + (i + 0.5 + (o === 0 ? f : 0)) * c, y0 + (j + 0.5 + (o === 1 ? f : 0)) * c];
      pos.set(k, p);
    }
    return k;
  };
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const v00 = g[j * nx + i], v10 = g[j * nx + i + 1], v01 = g[(j + 1) * nx + i], v11 = g[(j + 1) * nx + i + 1];
    if (!(v00 < Infinity && v10 < Infinity && v01 < Infinity && v11 < Infinity)) continue;
    const m = (v00 < level ? 1 : 0) | (v10 < level ? 2 : 0) | (v11 < level ? 4 : 0) | (v01 < level ? 8 : 0);
    if (m === 0 || m === 15) continue;
    const eb = () => cross(i, j, 0), er = () => cross(i + 1, j, 1), et = () => cross(i, j + 1, 0), el = () => cross(i, j, 1);
    const center = (v00 + v10 + v01 + v11) / 4 < level;
    switch (m) {
      case 1: case 14: segs.push([el(), eb()]); break;
      case 2: case 13: segs.push([eb(), er()]); break;
      case 3: case 12: segs.push([el(), er()]); break;
      case 4: case 11: segs.push([er(), et()]); break;
      case 6: case 9: segs.push([eb(), et()]); break;
      case 7: case 8: segs.push([el(), et()]); break;
      case 5: if (center) { segs.push([el(), et()], [eb(), er()]); } else { segs.push([el(), eb()], [er(), et()]); } break;
      case 10: if (center) { segs.push([el(), eb()], [er(), et()]); } else { segs.push([el(), et()], [eb(), er()]); } break;
      default: break;
    }
  }
  const adj = new Map();
  for (const [a, bb] of segs) { (adj.get(a) || adj.set(a, []).get(a)).push(bb); (adj.get(bb) || adj.set(bb, []).get(bb)).push(a); }
  const used = new Set();
  const ek = (a, bb) => (a < bb ? a + ':' + bb : bb + ':' + a);
  const lines = [];
  const walk = (start) => {
    const keys = [start];
    let cur = start;
    for (;;) {
      const next = (adj.get(cur) || []).find((n) => !used.has(ek(cur, n)));
      if (next === undefined) break;
      used.add(ek(cur, next));
      keys.push(next); cur = next;
      if (cur === start) break;
    }
    return keys;
  };
  for (const [k, nb] of adj) if (nb.length === 1) { const ks = walk(k); if (ks.length > 1) lines.push(ks); }
  for (const [k] of adj) { const ks = walk(k); if (ks.length > 2) lines.push(ks); }
  return lines.map((ks) => ks.map((k) => pos.get(k)));
}

function perpDeviation(a, b, p) {
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], L2 = ux * ux + uy * uy + uz * uz;
  const tt = L2 > 0 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * ux + (p[1] - a[1]) * uy + (p[2] - a[2]) * uz) / L2)) : 0;
  return hyp(p[0] - a[0] - ux * tt, p[1] - a[1] - uy * tt, p[2] - a[2] - uz * tt);
}
/** Douglas–Peucker in 3D. */
function simplify(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    let md = 0, mk = -1;
    for (let k = i + 1; k < j; k++) { const d = perpDeviation(pts[i], pts[j], pts[k]); if (d > md) { md = d; mk = k; } }
    if (mk >= 0 && md > eps) { keep[mk] = 1; stack.push([i, mk], [mk, j]); }
  }
  return pts.filter((_, k) => keep[k]);
}

export function opScallop(op, ctx, P) {
  const { model, tool } = ctx;
  const p = op.params;
  if (tool.kind === 'flat') throw new Error(t('mfg.scallop.flat'));
  ctx.h = finishHeights(op, ctx);
  const dr = new Dropper(model, tool, { leave: p.leave, floor: ctx.h.floor, slope: [p.slopeFrom, p.slopeTo] });
  const Rb = (tool.kind === 'ball' ? tool.d / 2 : tool.cornerR) + p.leave;
  const s = spacingFor(Rb, p.height);
  const F = surfaceDistance(model, Math.max(0.02, Math.min(s / 3, tool.d / 8)), p.from);
  let gmax = 0;
  for (let k = 0; k < F.g.length; k++) if (F.g[k] < Infinity && F.g[k] > gmax) gmax = F.g[k];
  const nL = Math.max(1, Math.ceil(gmax / s - 1e-9));
  const runs = [];
  let passes = 0;
  const side = F.c;
  for (let k = 0; k < nL; k++) {
    const level = Math.min((k + 0.5) * s, Math.max(gmax - 1e-6, F.c));
    for (let line of isoLines(F, level)) {
      // the surface height just either side of the pass decides the direction: the higher side stays on the right (climb)
      let score = 0;
      for (let q = 0; q + 1 < line.length; q++) {
        const a = line[q], bb = line[q + 1], dx = bb[0] - a[0], dy = bb[1] - a[1], L = hyp(dx, dy);
        if (L < 1e-9) continue;
        const mx = (a[0] + bb[0]) / 2, my = (a[1] + bb[1]) / 2;
        const hr = model.heightAt(mx + (dy / L) * side, my - (dx / L) * side), hl = model.heightAt(mx - (dy / L) * side, my + (dx / L) * side);
        if (hr > -Infinity && hl > -Infinity) score += Math.sign(hr - hl);
        else if (hr > -Infinity) score += 1; else if (hl > -Infinity) score -= 1;
      }
      if ((p.climb && score < 0) || (!p.climb && score > 0)) line = line.slice().reverse();
      // 3D points; pieces where the surface can't be finished (slope range) are left out
      const pts = line.map((q) => (dr.ok(q[0], q[1]) ? [q[0], q[1], dr.tip(q[0], q[1])] : null));
      let cur = [];
      const flush = () => {
        if (cur.length > 1) { let L = 0; for (let q = 1; q < cur.length; q++) L += hyp(cur[q][0] - cur[q - 1][0], cur[q][1] - cur[q - 1][1]); if (L >= 3 * F.c) runs.push({ level: k, pts: simplify(cur, p.tolerance / 4) }); }
        cur = [];
      };
      for (const q of pts) { if (q) cur.push(q); else flush(); }
      flush();
      passes++;
    }
  }
  if (!runs.length) { ctx.warn(t('mfg.finish.nothing')); return; }
  // order: level by level, nearest piece next
  const ordered = [];
  let at = null;
  for (let k = 0; k < nL; k++) {
    const left = runs.filter((r) => r.level === k);
    while (left.length) {
      let bi = 0, bd = Infinity;
      left.forEach((r, i) => { const d = at ? hyp(r.pts[0][0] - at[0], r.pts[0][1] - at[1]) : r.pts[0][0] + r.pts[0][1]; if (d < bd) { bd = d; bi = i; } });
      const r = left.splice(bi, 1)[0];
      ordered.push(r.pts); at = r.pts[r.pts.length - 1];
    }
  }
  emitRuns(ordered, ctx, P, dr, p.tolerance, 2.5 * s);
  ctx.info.spacing = s; ctx.info.cusp = p.height; ctx.info.passes = ordered.length; ctx.info.reach = gmax;
}

export const FINISH_OPS = { parallel: opParallel, scallop: opScallop };
