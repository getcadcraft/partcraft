/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-rough3d.js — PartCraft's 3D roughing and rest machining (DOM-free; 0.11 CAM.1, CAM.2). Three axes, the whole model,
 * level by level from the stock that is there; flat, bull-nose and ball end mills (a face mill is taken as flat).
 *
 *   opRough3d(op, ctx, P) · opRest3d(op, ctx, P)      (registered in cam-paths.js)
 *   heightMax(mesh, …) · class RoughGrid              (exported for the tests)
 *
 * Method.
 *   Where the tool may be. A square grid of cell g covers the stock plus the tool radius. Each cell first gets the highest
 *   the model reaches anywhere in it (every triangle that overlaps the cell, bounded by its plane over the cell and by its
 *   own top). Then at every grid point s the lowest safe tip height is
 *       T(s) = max over cells c of [ top(c) + L − h(max(0, |c − s| − L − m)) ],   m = (√2 + 1/√2)·g,  L the stock to leave,
 *   h the tool's tip profile (cam-tools.profile). Why that is safe: a model point q in cell c is no higher than top(c) and
 *   within g/√2 of c; every point p of a pass is within √2·g of a grid point s it is allowed at (it lies in a grid square
 *   with s at a corner). So |q − p| ≥ |c − s| − m, and h never decreases with distance: a tool at p with its tip at
 *   z ≥ T(s) is at least L above q, and L clear of it sideways. Nothing but the mesh and the tool's profile goes into it,
 *   so the path cannot cut into the model; the price is up to m of extra stock on walls, which the finishing pass takes.
 *   (An earlier form used the exact drop cutter of cam-finish.js at every grid point: the same guarantee, a hundred times
 *   slower. The tests still check every cutting point against that exact cutter.)
 *   What is cut. A second array S holds the stock height at every grid point, started from the stock simulation of the
 *   operations before this one (the full stock when there is none) and lowered as this operation cuts. A point of a pass is
 *   NEEDED when stock stands more than minStock above the cutter under it, over an area at least minStock wide by the tool's width; passes are trimmed to the needed
 *   parts (plus a tool radius of run-in), so nothing is cut twice and a second operation with a smaller tool is rest
 *   machining by itself: it only goes where the first one left material.
 *   A level z: straight rows a stepover apart over the allowed points, zig-zag; then the outline of the allowed area (the
 *   level line T = z of the grid, marching squares) wherever stock is still needed along it. Levels: the stepdown, plus the
 *   height of every flat face of the model (+ stock to leave) when `flats` is on, so floors are not left a step high.
 *   Getting down. Where the cutter would touch stock on the way down it ramps along its own pass (back and forth over at
 *   most two diameters at the ramp angle); a pass too short for that is plunged at the plunge feed and counted. Rapids go
 *   down only as far as the stock map says is clear.
 *
 * Limits (the help says the same): rows are straight lines, not offsets of the shape (more air moves than an offset or
 * adaptive strategy would make); the first row at each level cuts the full tool width; walls keep up to m extra stock;
 * the tool shank and holder are not checked; undercuts are not seen (the model from above).
 */
import { profile } from './cam-tools.js';
import { t } from './i18n.js';

const hyp = Math.hypot;
const fmt = (v) => String(+Number(v).toFixed(3));

/**
 * The highest the mesh reaches in every cell of a grid (cell (i, j) is the square of side g centred on (x0 + i·g, y0 + j·g));
 * −Infinity where there is no model. Never under the true height anywhere in the cell.
 */
export function heightMax(mesh, x0, y0, g, nx, ny) {
  const H = new Float64Array(nx * ny).fill(-Infinity);
  const P = mesh.positions, I = mesh.indices, hg = g / 2;
  for (let t = 0; t < I.length; t += 3) {
    const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3;
    const ax = P[a], ay = P[a + 1], az = P[a + 2], bx = P[b], by = P[b + 1], bz = P[b + 2], cx = P[c], cy = P[c + 1], cz = P[c + 2];
    const i0 = Math.max(0, Math.ceil((Math.min(ax, bx, cx) - x0) / g - 0.5)), i1 = Math.min(nx - 1, Math.floor((Math.max(ax, bx, cx) - x0) / g + 0.5));
    const j0 = Math.max(0, Math.ceil((Math.min(ay, by, cy) - y0) / g - 0.5)), j1 = Math.min(ny - 1, Math.floor((Math.max(ay, by, cy) - y0) / g + 0.5));
    if (i1 < i0 || j1 < j0) continue;
    const zmax = Math.max(az, bz, cz);
    const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
    const size = Math.max(Math.abs(bx - ax), Math.abs(cx - ax), Math.abs(by - ay), Math.abs(cy - ay), 1e-12);
    const flat = Math.abs(area) > 1e-9 * size * size;        // seen from above it has an area (not a wall on edge)
    const sgn = area < 0 ? -1 : 1;
    // edges p → q: a cell is clear of the triangle when all four of its corners are outside one edge
    const E = [[ax, ay, bx, by], [bx, by, cx, cy], [cx, cy, ax, ay]];
    let gx = 0, gy = 0;
    if (flat) { gx = ((bz - az) * (cy - ay) - (cz - az) * (by - ay)) / area; gy = ((cz - az) * (bx - ax) - (bz - az) * (cx - ax)) / area; }
    let longest = 0;
    if (!flat) { let L = -1; for (let e = 0; e < 3; e++) { const d = Math.hypot(E[e][2] - E[e][0], E[e][3] - E[e][1]); if (d > L) { L = d; longest = e; } } }
    for (let j = j0; j <= j1; j++) {
      const y = y0 + j * g;
      for (let i = i0; i <= i1; i++) {
        const x = x0 + i * g;
        let out = false;
        if (flat) {
          for (let e = 0; e < 3 && !out; e++) { const px = E[e][0], py = E[e][1], qx = E[e][2], qy = E[e][3]; if (sgn * ((qx - px) * (y - py) - (qy - py) * (x - px)) + (Math.abs(qx - px) + Math.abs(qy - py)) * hg < 0) out = true; }
        } else {
          // on edge: a segment. The cell must straddle the line of its longest side.
          const px = E[longest][0], py = E[longest][1], qx = E[longest][2], qy = E[longest][3];
          if (Math.abs((qx - px) * (y - py) - (qy - py) * (x - px)) > (Math.abs(qx - px) + Math.abs(qy - py)) * hg) out = true;
        }
        if (out) continue;
        const z = flat ? Math.min(zmax, az + gx * (x - ax) + gy * (y - ay) + (Math.abs(gx) + Math.abs(gy)) * hg) : zmax;
        const k2 = j * nx + i;
        if (z > H[k2]) H[k2] = z;
      }
    }
  }
  return H;
}

export class RoughGrid {
  constructor(model, tool, { leave = 0, bottom = -Infinity, stockAt = null, maxPoints = 600000, cell = 0, simCell = 0 } = {}) {
    const st = model.stock, R = tool.d / 2;
    let g = cell > 0 ? cell : Math.min(1, Math.max(0.1, R / 12));
    const span = (k) => st.max[k] - st.min[k] + 2 * R;
    while ((span(0) / g + 5) * (span(1) / g + 5) > maxPoints) g *= 1.15;
    this.g = g; this.m = (Math.SQRT2 + Math.SQRT1_2) * g; this.R = R; this.model = model; this.bottom = bottom;
    this.x0 = st.min[0] - R - 2 * g; this.y0 = st.min[1] - R - 2 * g;
    this.nx = Math.ceil((st.max[0] + R + 2 * g - this.x0) / g) + 1;
    this.ny = Math.ceil((st.max[1] + R + 2 * g - this.y0) / g) + 1;
    const n = this.nx * this.ny, { nx, ny } = this;
    const prof = profile({ ...tool, kind: tool.kind === 'face' ? 'flat' : tool.kind });
    // where the tool may be: T(s) = max over cells c of [ top(c) + L − h(max(0, |c − s| − L − m)) ]
    const Hm = heightMax(model.mesh, this.x0, this.y0, g, nx, ny);
    let hTop = -Infinity;
    for (let k = 0; k < n; k++) if (Hm[k] > hTop) hTop = Hm[k];
    const reach = R + leave + this.m, rc = Math.ceil(reach / g);
    const drop = [];
    for (let dj = -rc; dj <= rc; dj++) for (let di = -rc; di <= rc; di++) { const rho = Math.hypot(di, dj) * g; if (rho <= reach) drop.push([di, dj, prof.h(Math.min(R, Math.max(0, rho - leave - this.m)))]); }
    drop.sort((a, b) => a[2] - b[2]);
    this.T = new Float64Array(n);
    this.S = new Float64Array(n);
    const top = st.max[2];
    // grid points with model within reach (a box-shaped spread of the cells that have model): the others are open air
    const near = new Uint8Array(n);
    { const tmp = new Uint8Array(n);
      for (let j = 0; j < ny; j++) { let run = 0; for (let i = 0; i < nx; i++) { if (Hm[j * nx + i] > -Infinity) run = rc + 1; if (run > 0) { tmp[j * nx + i] = 1; run--; } } run = 0; for (let i = nx - 1; i >= 0; i--) { if (Hm[j * nx + i] > -Infinity) run = rc + 1; if (run > 0) { tmp[j * nx + i] = 1; run--; } } }
      for (let i = 0; i < nx; i++) { let run = 0; for (let j = 0; j < ny; j++) { if (tmp[j * nx + i]) run = rc + 1; if (run > 0) { near[j * nx + i] = 1; run--; } } run = 0; for (let j = ny - 1; j >= 0; j--) { if (tmp[j * nx + i]) run = rc + 1; if (run > 0) { near[j * nx + i] = 1; run--; } } } }
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const x = this.x0 + i * g, y = this.y0 + j * g, k = j * nx + i;
      let tv = -Infinity;
      if (near[k]) for (const [di, dj, h] of drop) {
        if (hTop + leave - h <= tv) break;                      // sorted by h: nothing further can be higher
        const a = i + di, b = j + dj;
        if (a < 0 || b < 0 || a >= nx || b >= ny) continue;
        const v = Hm[b * nx + a] + leave - h;
        if (v > tv) tv = v;
      }
      this.T[k] = Math.max(tv, bottom);
      const inside = st.kind === 'cylinder' ? hyp(x - st.c[0], y - st.c[1]) <= st.r : x >= st.min[0] && x <= st.max[0] && y >= st.min[1] && y <= st.max[1];
      this.S[k] = inside ? (stockAt ? stockAt(x, y, 0) : top) : -Infinity;   // the stock at the point itself (the nearest cell of the simulation)
    }
    // the cutter's footprint on the grid: offsets and the height of its cutting surface above the tip there
    const r = Math.ceil(R / g);
    this.off = [];
    for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) { const rho = hyp(di, dj) * g; if (rho <= R) this.off.push([di, dj, prof.h(rho)]); }
    this.off.sort((a, b) => a[2] - b[2] || hyp(a[0], a[1]) - hyp(b[0], b[1]));
    // The stock map is points, the simulation is cells, the tool a disc: two more footprints keep the three from disagreeing.
    //   offNeed   a little inside the disc: stock right at the rim (the next pass's, or a neighbouring cell's) is not a reason to cut
    //   offTouch  a little outside it: a rapid comes down only where nothing is near the rim either
    const shrink = Math.max(g / 2, simCell), rr = Math.ceil((R + g) / g);
    this.offNeed = this.off.filter(([di, dj]) => hyp(di, dj) * g <= R - shrink);
    this.offNear = this.off.filter(([di, dj]) => hyp(di, dj) * g <= R - shrink - 0.71 * g);   // for a point up to half a cell off the grid
    if (!this.offNeed.length) this.offNeed = [[0, 0, 0]];
    if (!this.offNear.length) this.offNear = [[0, 0, 0]];
    this.offTouch = [];
    for (let dj = -rr; dj <= rr; dj++) for (let di = -rr; di <= rr; di++) { const rho = hyp(di, dj) * g; if (rho <= R + g) this.offTouch.push([di, dj, prof.h(Math.min(rho, R))]); }
  }
  ix(x) { return Math.max(0, Math.min(this.nx - 1, Math.round((x - this.x0) / this.g))); }
  iy(y) { return Math.max(0, Math.min(this.ny - 1, Math.round((y - this.y0) / this.g))); }
  X(i) { return this.x0 + i * this.g; }
  Y(j) { return this.y0 + j * this.g; }
  allowed(i, j, z) { return this.T[j * this.nx + i] <= z + 1e-9; }
  /** The tip height at which the cutter at grid point (i, j) first touches the stock (−Infinity in air). */
  touch(i, j) {
    let m = -Infinity;
    const { nx, ny, S } = this;
    for (const [di, dj, h] of this.offTouch) {
      const a = i + di, b = j + dj;
      if (a < 0 || b < 0 || a >= nx || b >= ny) continue;
      const v = S[b * nx + a] - h;
      if (v > m) m = v;
    }
    return m;
  }
  /** Does the cutter at (i, j) with its tip at z have more than `min` of stock to cut somewhere under it? */
  needed(i, j, z, min, near = false) {
    const { nx, ny, S } = this, list = near ? this.offNear : this.offNeed;
    // enough of it to be worth a pass: stock thinner than `min` SIDEWAYS (a film along a wall, as long as the tool is wide) does
    // not count either, or a smaller tool would go round every wall the bigger one left a hair on
    const want = Math.max(1, Math.min(Math.ceil(list.length * 0.6), Math.round((min * 2 * this.R) / (this.g * this.g))));
    let n = 0;
    for (const [di, dj, h] of list) {
      const a = i + di, b = j + dj;
      if (a < 0 || b < 0 || a >= nx || b >= ny) continue;
      if (S[b * nx + a] - h > z + min && ++n >= want) return true;
    }
    return false;
  }
  /** Lower the stock map under the cutter at (i, j), tip at z. */
  stamp(i, j, z) {
    const { nx, ny, S } = this;
    for (const [di, dj, h] of this.off) {
      const a = i + di, b = j + dj;
      if (a < 0 || b < 0 || a >= nx || b >= ny) continue;
      const k = b * nx + a;
      if (S[k] > z + h) S[k] = z + h;
    }
  }
  /** Stamp along a straight move (2D) at z. */
  stampLine(a, b, z) {
    const n = Math.max(1, Math.ceil(hyp(b[0] - a[0], b[1] - a[1]) / (this.g * 0.75)));
    for (let k = 0; k <= n; k++) this.stamp(this.ix(a[0] + ((b[0] - a[0]) * k) / n), this.iy(a[1] + ((b[1] - a[1]) * k) / n), z);
  }
  /** May the tool go straight from a to b (2D) at z? (every point's nearest grid point allowed) */
  clearLine(a, b, z) {
    const n = Math.max(1, Math.ceil(hyp(b[0] - a[0], b[1] - a[1]) / (this.g * 0.5)));
    for (let k = 0; k <= n; k++) if (!this.allowed(this.ix(a[0] + ((b[0] - a[0]) * k) / n), this.iy(a[1] + ((b[1] - a[1]) * k) / n), z)) return false;
    return true;
  }
  /** The level line T = z as polylines [[x, y] …] (the edge of where the tool may be at z). */
  outline(z) {
    return isoLines2(this.T, this.nx, this.ny, this.g, this.x0, this.y0, z + 1e-7);
  }
}

/** Marching squares on a grid whose point (i, j) is at (x0 + i·c, y0 + j·c) → polylines (closed ones repeat the first point). */
export function isoLines2(G, nx, ny, c, x0, y0, level) {
  const segs = [];
  const pos = new Map();
  const cross = (i, j, o) => {   // o 0: edge (i,j)–(i+1,j), 1: edge (i,j)–(i,j+1)
    const k = 2 * (j * nx + i) + o;
    if (!pos.has(k)) {
      const a = G[j * nx + i], b = o === 0 ? G[j * nx + i + 1] : G[(j + 1) * nx + i];
      const f = Math.max(0, Math.min(1, (level - a) / (b - a)));
      pos.set(k, [x0 + (i + (o === 0 ? f : 0)) * c, y0 + (j + (o === 1 ? f : 0)) * c]);
    }
    return k;
  };
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const v00 = G[j * nx + i], v10 = G[j * nx + i + 1], v01 = G[(j + 1) * nx + i], v11 = G[(j + 1) * nx + i + 1];
    const m = (v00 < level ? 1 : 0) | (v10 < level ? 2 : 0) | (v11 < level ? 4 : 0) | (v01 < level ? 8 : 0);
    if (m === 0 || m === 15) continue;
    const eb = () => cross(i, j, 0), er = () => cross(i + 1, j, 1), et = () => cross(i, j + 1, 0), el = () => cross(i, j, 1);
    switch (m) {
      case 1: case 14: segs.push([el(), eb()]); break;
      case 2: case 13: segs.push([eb(), er()]); break;
      case 3: case 12: segs.push([el(), er()]); break;
      case 4: case 11: segs.push([er(), et()]); break;
      case 6: case 9: segs.push([eb(), et()]); break;
      case 7: case 8: segs.push([el(), et()]); break;
      case 5: segs.push([el(), eb()], [er(), et()]); break;     // two allowed corners across a square: each keeps its own corner
      case 10: segs.push([eb(), er()], [el(), et()]); break;
      default: break;
    }
  }
  const adj = new Map();
  for (const [a, b] of segs) { (adj.get(a) || adj.set(a, []).get(a)).push(b); (adj.get(b) || adj.set(b, []).get(b)).push(a); }
  const used = new Set();
  const ek = (a, b) => (a < b ? a + ':' + b : b + ':' + a);
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

/** Douglas–Peucker in 2D (keeps both ends). */
function simplify2(pts, eps) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [i, j] = stack.pop();
    const a = pts[i], b = pts[j], L = hyp(b[0] - a[0], b[1] - a[1]);
    let md = 0, mk = -1;
    for (let k = i + 1; k < j; k++) {
      const p = pts[k];
      const d = L < 1e-12 ? hyp(p[0] - a[0], p[1] - a[1]) : Math.abs((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) / L;
      if (d > md) { md = d; mk = k; }
    }
    if (mk >= 0 && md > eps) { keep[mk] = 1; stack.push([i, mk], [mk, j]); }
  }
  return pts.filter((_, k) => keep[k]);
}
const pathLength = (pts) => { let L = 0; for (let k = 1; k < pts.length; k++) L += hyp(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]); return L; };
/** The first `len` of a polyline. */
function headOf(pts, len) {
  const out = [pts[0]];
  let left = len;
  for (let k = 1; k < pts.length && left > 1e-9; k++) {
    const a = pts[k - 1], b = pts[k], L = hyp(b[0] - a[0], b[1] - a[1]);
    if (L <= left) { out.push(b); left -= L; } else { out.push([a[0] + ((b[0] - a[0]) * left) / L, a[1] + ((b[1] - a[1]) * left) / L]); left = 0; }
  }
  return out;
}

function levelsOf(top, bottom, step, extra) {
  const zs = [];
  if (top > bottom + 1e-9) {
    const n = Math.max(1, Math.ceil((top - bottom) / step - 1e-9));
    for (let i = 1; i <= n; i++) zs.push(i === n ? bottom : top - ((top - bottom) * i) / n);
  }
  for (const z of extra) if (z > bottom + 1e-6 && z < top - 1e-6 && !zs.some((v) => Math.abs(v - z) < 1e-6)) zs.push(z);
  return zs.sort((a, b) => b - a);
}

function rough(op, ctx, P, rest) {
  const { model, tool, sp } = ctx;
  const p = op.params, R = tool.d / 2;
  if (!['flat', 'bull', 'ball', 'face'].includes(tool.kind)) throw new Error(t('mfg.rough.tool'));
  const st = model.stock, top = st.max[2];
  const bottom = Math.max(p.bottom ?? model.bottom, st.min[2] - 50);
  const clearance = top + p.clearance, retract = Math.min(clearance, top + p.retract);
  if (rest && !ctx.hasSim) ctx.warn(t('mfg.rest.no_sim'));
  const G = new RoughGrid(model, tool, { leave: p.leave, bottom, stockAt: ctx.hasSim ? ctx.stockAt : null, cell: ctx.cell3d || 0, simCell: ctx.simCell || 0 });
  const g = G.g;
  let sTop = -Infinity;
  for (let k = 0; k < G.S.length; k++) if (G.S[k] > sTop) sTop = G.S[k];
  if (sTop === -Infinity) { ctx.warn(t('mfg.rough.nothing')); return; }
  const flats = [];
  if (p.flats) for (const f of model.faces) if (model.isFloor(f)) flats.push(f.o[2] + p.leave);
  const zs = levelsOf(Math.min(top, sTop), bottom, p.stepdown, flats);
  if (!zs.length) { ctx.warn(t('mfg.rough.nothing')); return; }
  if (top - bottom > tool.fluteLen) ctx.warn(t('mfg.rough.deep', { depth: fmt(top - bottom), flute: fmt(tool.fluteLen) }));
  const ns = Math.max(1, Math.round((p.stepover * tool.d) / g));
  const pad = Math.ceil(R / g) + 1, gap = Math.ceil((2 * tool.d) / g);
  const tanA = Math.tan((p.rampAngle * Math.PI) / 180);
  const rampSpan = 2 * tool.d, linkMax = 2.5 * ns * g + 1e-9;
  let plunges = 0, ramps = 0, cutLen = 0, passes = 0, flip = false;

  /** Come down to z at the start of a pass (pts: the pass in 2D). The tool is somewhere above, or nowhere yet. */
  const enter = (pts, z) => {
    const s = pts[0], i = G.ix(s[0]), j = G.iy(s[1]);
    if (!P.pos) P.rapid(s[0], s[1], clearance);
    else { P.rapidZ(retract); P.rapid(s[0], s[1], retract); }
    const touch = G.touch(i, j);
    if (!(touch > z + 1e-9)) { P.rapidZ(Math.min(retract, z + p.feedHeight)); P.feedZ(z, sp.plunge); return; }
    P.rapidZ(Math.min(retract, touch + p.feedHeight));
    const head = headOf(pts, rampSpan), L = pathLength(head);
    const zFrom = Math.min(touch, P.pos[2]);
    if (L < 0.5 * tool.d) { P.feedZ(z, sp.plunge); plunges++; return; }
    P.feedZ(zFrom, sp.plunge);
    const legs = Math.max(1, Math.ceil((zFrom - z) / (L * tanA) - 1e-9));
    const back = head.slice().reverse();
    for (let k = 0; k < legs; k++) {
      const leg = k % 2 ? back : head, z0 = zFrom - ((zFrom - z) * k) / legs, z1 = zFrom - ((zFrom - z) * (k + 1)) / legs;
      let acc = 0;
      for (let q = 1; q < leg.length; q++) { acc += hyp(leg[q][0] - leg[q - 1][0], leg[q][1] - leg[q - 1][1]); P.feed(leg[q][0], leg[q][1], z0 + ((z1 - z0) * acc) / L, sp.ramp); }
    }
    if (legs % 2) for (let q = 1; q < back.length; q++) P.feed(back[q][0], back[q][1], z, sp.feed);
    ramps++;
  };
  /** Cut one pass (2D polyline) at z, linked from where the tool is when a short straight move allows it. */
  const cut = (pts, z) => {
    const s = pts[0];
    const here = P.pos && Math.abs(P.pos[2] - z) < 1e-9 ? [P.pos[0], P.pos[1]] : null;
    if (here && hyp(here[0] - s[0], here[1] - s[1]) <= linkMax && G.clearLine(here, s, z)) { P.feed(s[0], s[1], z, sp.feed); G.stampLine(here, s, z); }
    else enter(pts, z);
    for (let q = 1; q < pts.length; q++) { P.feed(pts[q][0], pts[q][1], z, sp.feed); G.stampLine(pts[q - 1], pts[q], z); }
    cutLen += pathLength(pts); passes++;
  };

  for (const z of zs) {
    // rows
    const rows = [];
    for (let j = 0; j < G.ny; j += ns) rows.push(j);
    for (const j of rows) {
      const pieces = [];
      let i = 0;
      while (i < G.nx) {
        if (!G.allowed(i, j, z)) { i++; continue; }
        let e = i;
        while (e + 1 < G.nx && G.allowed(e + 1, j, z)) e++;
        // the needed parts of the run [i, e]
        let from = -1, last = -1;
        const flush = () => { if (from >= 0) pieces.push([Math.max(i, from - pad), Math.min(e, last + pad)]); from = -1; };
        for (let k = i; k <= e; k++) {
          if (!G.needed(k, j, z, p.minStock)) continue;
          if (from >= 0 && k - last > gap) flush();
          if (from < 0) from = k;
          last = k;
        }
        flush();
        i = e + 1;
      }
      if (!pieces.length) continue;
      // pieces whose run-in overlaps become one
      const merged = [];
      for (const pc of pieces) { const m = merged[merged.length - 1]; if (m && pc[0] <= m[1]) m[1] = Math.max(m[1], pc[1]); else merged.push(pc.slice()); }
      const y = G.Y(j);
      const list = flip ? merged.reverse().map(([a, b]) => [b, a]) : merged;
      for (let [a, b] of list) {
        if (a === b) continue;
        // start from the end that is in the open when only one is: coming in from the side needs no ramp
        if (G.touch(a, j) > z + 1e-9 && !(G.touch(b, j) > z + 1e-9)) [a, b] = [b, a];
        cut([[G.X(a), y], [G.X(b), y]], z);
      }
      flip = !flip;
    }
    // the outline of the allowed area, where stock is still left along it
    for (const line of G.outline(z)) {
      if (line.length < 2) continue;
      const need = line.map((q) => G.needed(G.ix(q[0]), G.iy(q[1]), z, p.minStock, true));
      // a short stretch with nothing to cut between two that have is cut through (the rows leave a cusp at every row end:
      // lifting between each pair would make a pass per cusp)
      { let last = -1, run = 0;
        for (let k = 0; k < line.length; k++) {
          if (k > 0) run += hyp(line[k][0] - line[k - 1][0], line[k][1] - line[k - 1][1]);
          if (!need[k]) continue;
          if (last >= 0 && run <= 2 * tool.d) for (let q = last + 1; q < k; q++) need[q] = true;
          last = k; run = 0;
        } }
      let from = -1;
      const parts = [];
      for (let k = 0; k <= line.length; k++) {
        if (k < line.length && need[k]) { if (from < 0) from = k; continue; }
        if (from >= 0) { parts.push(line.slice(Math.max(0, from - 1), Math.min(line.length, k + 1))); from = -1; }
      }
      for (const part of parts) {
        const pts = simplify2(part, 0.4 * g);   // a grid outline is a staircase: 0.4 g straightens it and stays inside the √2·g the proof allows (1 + 0.4 < √2)
        if (pathLength(pts) < Math.max(g, tool.d / 4)) continue;   // a stub shorter than a quarter of the tool is not a pass
        cut(pts, z);
      }
    }
    if (P.pos) P.rapidZ(retract);
  }
  if (!P.pos) { ctx.warn(t(rest ? 'mfg.rest.nothing' : 'mfg.rough.nothing')); return; }
  P.rapidZ(clearance);
  if (plunges) ctx.warn(t('mfg.rough.plunges', { n: plunges }));
  ctx.info.levels = zs.length; ctx.info.passes = passes; ctx.info.cell = g; ctx.info.wallExtra = G.m; ctx.info.ramps = ramps; ctx.info.plunges = plunges; ctx.info.cutLength = cutLen;
}

export function opRough3d(op, ctx, P) { rough(op, ctx, P, false); }
export function opRest3d(op, ctx, P) { rough(op, ctx, P, true); }
export const ROUGH_OPS = { rough3d: opRough3d, rest3d: opRest3d };
