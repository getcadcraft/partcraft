/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-sim.js — stock simulation for PartCraft's CAM (DOM-free): a Z-map (heightfield) of the stock on a
 * square grid, cut by every toolpath segment swept with the tool's tip profile (cam-tools.profile), then
 * compared with the part's own heightfield.
 *
 *   new Sim(model, {cell, tolV, tolLat}) · sim.run(opPath) → {removed, gouges, rapidCuts} · sim.report()
 *   sim.deviation() · sim.colorAt(dev) · sim.toMesh(step, {colors}) — stock against the model, in colour (0.7 LC.15)
 *   cycleTime(program, setup) → {seconds, feed, rapid, toolChanges, perOp}
 *
 * Method and limits (3-axis, tool axis vertical): each cell keeps one height (the top of the stock there),
 * so undercuts are not represented. A segment lowers every cell within the tool radius of its XY track
 * to z + h(ρ) (ρ = the cell centre's distance from the track; exact for flat moves and flat arcs); moves
 * that change z are cut in sub-steps of at most 0.01 mm of z, each taken at its lower end (removal can be
 * up to 0.01 mm deeper than the real ramp). A gouge is a cell cut more than tolV (default 0.02 mm) below
 * the part's top surface there, where the part's height is the minimum over the cell centre and eight points
 * tolLat around it (so a cut that only grazes a wall within the display mesh's chord deviation is not
 * called a gouge). Remaining stock = the stock above the part's top surface (or above the stock bottom
 * where there is no part). Cycle time = feed moves at their feed + rapids as straight lines at the stated
 * rapid rate + tool changes at the stated time; real machines accelerate and move rapids axis by axis.
 */
import * as O from './cam-offset.js';
import { profile } from './cam-tools.js';
import { segments, segLength } from './cam-paths.js';

import { t } from './i18n.js';
const DZ = 0.01;

export class Sim {
  constructor(model, { cell = 0, tolV = 0.02, tolLat = null } = {}) {
    this.model = model;
    const s = model.stock;
    const w = s.max[0] - s.min[0], h = s.max[1] - s.min[1];
    this.cell = cell > 0 ? cell : Math.min(2, Math.max(0.1, Math.max(w, h) / 500));
    this.nx = Math.max(1, Math.ceil(w / this.cell));
    this.ny = Math.max(1, Math.ceil(h / this.cell));
    if (this.nx * this.ny > 4e6) throw new Error(t('cam.sim.grid_too_fine'));
    this.x0 = s.min[0]; this.y0 = s.min[1];
    this.top = s.max[2]; this.bottom = s.min[2];
    const n = this.nx * this.ny;
    this.z = new Float64Array(n);
    this.inStock = new Uint8Array(n);
    for (let j = 0; j < this.ny; j++) for (let i = 0; i < this.nx; i++) {
      const [x, y] = this.centre(i, j);
      const ins = s.kind === 'cylinder' ? Math.hypot(x - s.c[0], y - s.c[1]) <= s.r : x <= s.max[0] && y <= s.max[1];
      this.inStock[j * this.nx + i] = ins ? 1 : 0;
      this.z[j * this.nx + i] = ins ? this.top : -Infinity;
    }
    const diag = Math.hypot(...model.box.max.map((v, k) => v - model.box.min[k]));
    this.tolV = tolV;
    this.tolLat = tolLat ?? 2e-4 * diag + 0.01;   // the exact kernel's display mesh: linear deflection 2e-4 × diagonal
    this.hp = null;
    this.gouge = new Uint8Array(n);
    this.log = [];
  }
  centre(i, j) { return [this.x0 + (i + 0.5) * this.cell, this.y0 + (j + 0.5) * this.cell]; }
  /** The part's top at every cell centre (−Infinity where there is none). */
  partHeights() {
    if (this.hp) return this.hp;
    const hp = new Float64Array(this.nx * this.ny);
    for (let j = 0; j < this.ny; j++) for (let i = 0; i < this.nx; i++) { const [x, y] = this.centre(i, j); hp[j * this.nx + i] = this.model.heightAt(x, y); }
    return (this.hp = hp);
  }
  /** The part's height at a cell with the lateral tolerance (min over the centre and 8 points tolLat away). */
  erodedHeight(i, j) {
    const [x, y] = this.centre(i, j);
    let m = this.partHeights()[j * this.nx + i];
    for (let k = 0; k < 8 && m > -Infinity; k++) { const a = (k * Math.PI) / 4; m = Math.min(m, this.model.heightAt(x + this.tolLat * Math.cos(a), y + this.tolLat * Math.sin(a))); }
    return m;
  }
  /** Highest stock within radius r of (x, y) (the stock top outside the grid). */
  maxIn(x, y, r) {
    const i0 = Math.max(0, Math.floor((x - r - this.x0) / this.cell)), i1 = Math.min(this.nx - 1, Math.floor((x + r - this.x0) / this.cell));
    const j0 = Math.max(0, Math.floor((y - r - this.y0) / this.cell)), j1 = Math.min(this.ny - 1, Math.floor((y + r - this.y0) / this.cell));
    let m = -Infinity;
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const c = this.centre(i, j);
      if (Math.hypot(c[0] - x, c[1] - y) <= r + this.cell * 0.71) m = Math.max(m, this.z[j * this.nx + i]);
    }
    return m;
  }
  /** Lower the cells under one flat XY track (a prim) at height z. → cells lowered by more than tolV */
  stamp(prim, z, prof) {
    const R = prof.R, b = O.boxOf(prim);
    const i0 = Math.max(0, Math.floor((b[0] - R - this.x0) / this.cell)), i1 = Math.min(this.nx - 1, Math.floor((b[2] + R - this.x0) / this.cell));
    const j0 = Math.max(0, Math.floor((b[1] - R - this.y0) / this.cell)), j1 = Math.min(this.ny - 1, Math.floor((b[3] + R - this.y0) / this.cell));
    let hit = 0;
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const k = j * this.nx + i;
      if (!this.inStock[k]) continue;
      const zc = z + prof.h(O.distToPrim(this.centre(i, j), prim));
      if (zc < this.z[k]) { if (this.z[k] - zc > this.tolV) hit++; this.z[k] = zc; }
    }
    return hit;
  }
  /** Sweep one segment ({k, a, b, c?, sw?}). */
  sweep(s, prof) {
    const dz = s.b[2] - s.a[2];
    const flat = Math.abs(dz) < 1e-9;
    const xyLen = s.k === 'arc' ? Math.abs(s.sw) * Math.hypot(s.a[0] - s.c[0], s.a[1] - s.c[1]) : Math.hypot(s.b[0] - s.a[0], s.b[1] - s.a[1]);
    const primOf = (t0, t1) => {
      if (s.k === 'arc') {
        const r = Math.hypot(s.a[0] - s.c[0], s.a[1] - s.c[1]), a0 = Math.atan2(s.a[1] - s.c[1], s.a[0] - s.c[0]);
        return O.arc(s.c, r, a0 + s.sw * t0, s.sw * (t1 - t0));
      }
      const p = (t) => [s.a[0] + (s.b[0] - s.a[0]) * t, s.a[1] + (s.b[1] - s.a[1]) * t];
      return O.line(p(t0), p(t1));
    };
    if (flat) return this.stamp(primOf(0, 1), s.a[2], prof);
    if (xyLen < 1e-9) return this.stamp(O.line([s.a[0], s.a[1]], [s.a[0], s.a[1]]), Math.min(s.a[2], s.b[2]), prof);
    const n = Math.max(1, Math.ceil(Math.abs(dz) / DZ));
    let hit = 0;
    for (let i = 0; i < n; i++) hit += this.stamp(primOf(i / n, (i + 1) / n), Math.min(s.a[2] + (dz * i) / n, s.a[2] + (dz * (i + 1)) / n), prof);
    return hit;
  }
  /** Cut one operation's path; → {removed (mm³), gouges (new gouge cells), rapidCuts, at:[gouge spots]} */
  run(path, start = null) {
    if (!path.moves || !path.moves.length) return { removed: 0, gouges: 0, rapidCuts: 0, at: [] };
    const prof = profile(path.tool);
    const before = this.volume();
    let rapidCuts = 0;
    const rapidAt = [];
    const segs = segments([path], start);
    for (const s of segs) {
      const hit = this.sweep(s, prof);
      if (s.k === 'rapid' && hit) { rapidCuts++; if (rapidAt.length < 20) rapidAt.push(s.b.slice()); }
    }
    const g = this.findGouges();
    const res = { removed: before - this.volume(), gouges: g.count, at: g.at, rapidCuts, rapidAt };
    this.log.push({ op: path.op.id, ...res });
    return res;
  }
  /** Stock volume (above the stock bottom). */
  volume() {
    let v = 0;
    for (let k = 0; k < this.z.length; k++) if (this.inStock[k] && this.z[k] > this.bottom) v += this.z[k] - this.bottom;
    return v * this.cell * this.cell;
  }
  /** Mark new gouge cells → {count (new), at: [[x, y, depth]] up to 50 spots} */
  findGouges() {
    const hp = this.partHeights();
    let count = 0;
    const at = [];
    for (let j = 0; j < this.ny; j++) for (let i = 0; i < this.nx; i++) {
      const k = j * this.nx + i;
      if (this.gouge[k] || !(hp[k] > -Infinity) || this.z[k] >= hp[k] - this.tolV) continue;
      const he = this.erodedHeight(i, j);
      if (!(this.z[k] < he - this.tolV)) continue;
      this.gouge[k] = 1; count++;
      if (at.length < 50) { const c = this.centre(i, j); at.push([c[0], c[1], he - this.z[k]]); }
    }
    return { count, at };
  }
  /** Summary: remaining stock above the part, deepest gouge, cells, method. */
  report() {
    const hp = this.partHeights();
    let remaining = 0, maxLeft = 0, gouges = 0, deepest = 0;
    for (let j = 0; j < this.ny; j++) for (let i = 0; i < this.nx; i++) {
      const k = j * this.nx + i;
      if (!this.inStock[k]) continue;
      const floor = hp[k] > -Infinity ? Math.max(hp[k], this.bottom) : this.bottom;
      const left = this.z[k] - floor;
      if (left > this.tolV) { remaining += left; maxLeft = Math.max(maxLeft, left); }
      if (this.gouge[k]) { gouges++; deepest = Math.max(deepest, this.erodedHeight(i, j) - this.z[k]); }
    }
    const a = this.cell * this.cell;
    return { remaining: remaining * a, maxLeft, gouges, deepest, cell: this.cell, nx: this.nx, ny: this.ny, tolV: this.tolV, tolLat: this.tolLat, volume: this.volume() };
  }
  /** Height of the stock at (x, y) (nearest cell). */
  at(x, y) {
    const i = Math.floor((x - this.x0) / this.cell), j = Math.floor((y - this.y0) / this.cell);
    if (i < 0 || j < 0 || i >= this.nx || j >= this.ny) return -Infinity;
    return this.z[j * this.nx + i];
  }
  /** Stock against the model at every cell: z − the model's top there (or the stock bottom where there is no model). > 0 stock left, < 0 cut into the model. */
  deviation() {
    const hp = this.partHeights(), d = new Float32Array(this.nx * this.ny);
    for (let k = 0; k < d.length; k++) {
      if (!this.inStock[k]) { d[k] = NaN; continue; }
      const floor = hp[k] > -Infinity ? Math.max(hp[k], this.bottom) : this.bottom;
      d[k] = this.z[k] - floor;
    }
    return d;
  }
  /**
   * The colour of a cell for the stock-versus-model view: [r, g, b] 0–1. Cut into the model (below −tolV): red; on the model
   * (within ±tolV): green; stock left on it: yellow (a thin skin) through orange to the colour of uncut stock at `scale` mm
   * or more (default 1 mm).
   */
  colorAt(dev, scale = 1) {
    if (!(dev === dev)) return STOCK_RGB;
    if (dev < -this.tolV) return GOUGE_RGB;
    if (dev <= this.tolV) return ON_RGB;
    const u = Math.min(1, (dev - this.tolV) / scale);
    if (u >= 1) return STOCK_RGB;
    return u < 0.5 ? mix(THIN_RGB, MID_RGB, u * 2) : mix(MID_RGB, STOCK_RGB, (u - 0.5) * 2);
  }
  /** The Z-map as a triangle mesh (work coordinates): tops of the cells joined, for the 3D view. `colors` adds one RGB per vertex (stock against the model). */
  toMesh(step = 1, { colors = false, scale = 1 } = {}) {
    const nx = Math.ceil(this.nx / step) + 1, ny = Math.ceil(this.ny / step) + 1;
    const pos = new Float32Array(nx * ny * 3), idx = [];
    for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const ci = Math.min(this.nx - 1, i * step), cj = Math.min(this.ny - 1, j * step);
      const k = (j * nx + i) * 3, zz = this.z[cj * this.nx + ci];
      pos[k] = this.x0 + Math.min(this.nx, i * step) * this.cell; pos[k + 1] = this.y0 + Math.min(this.ny, j * step) * this.cell;
      pos[k + 2] = zz > -Infinity ? Math.max(zz, this.bottom) : this.bottom;
    }
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
      const cell = this.inStock[Math.min(this.ny - 1, j * step) * this.nx + Math.min(this.nx - 1, i * step)];
      if (cell) idx.push(a, b, d, a, d, c);
    }
    const out = { positions: pos, indices: new Uint32Array(idx) };
    if (colors) {
      const dev = this.deviation(), col = new Float32Array(nx * ny * 3);
      for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
        const ci = Math.min(this.nx - 1, i * step), cj = Math.min(this.ny - 1, j * step);
        const c = this.colorAt(dev[cj * this.nx + ci], scale), k = (j * nx + i) * 3;
        col[k] = c[0]; col[k + 1] = c[1]; col[k + 2] = c[2];
      }
      out.colors = col;
    }
    return out;
  }
}
const mix = (a, b, u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
/** The colours of the stock-versus-model view (the legend in the panel uses the same). */
export const GOUGE_RGB = [0.88, 0.19, 0.16], ON_RGB = [0.2, 0.7, 0.35], THIN_RGB = [0.96, 0.85, 0.25], MID_RGB = [0.92, 0.5, 0.15], STOCK_RGB = [0.62, 0.66, 0.74];

/** Machining time of a program: feed moves at their feed, rapids at the setup's rapid rate, tool changes. */
export function cycleTime(program, setup) {
  const rapid = setup.machine.rapid, tc = setup.machine.toolChange;
  let feed = 0, rap = 0, changes = 0, prevTool = null;
  const perOp = {};
  for (const ph of program.paths) {
    if (!ph.moves || !ph.moves.length) continue;
    if (ph.tool && ph.tool.id !== prevTool) { if (prevTool !== null) changes++; prevTool = ph.tool.id; }
    let f = 0, r = 0;
    for (const s of segments([ph])) {
      const L = segLength(s);
      if (s.k === 'rapid') r += L / rapid; else f += L / s.f;
    }
    perOp[ph.op.id] = (f + r) * 60;
    feed += f; rap += r;
  }
  return { seconds: (feed + rap) * 60 + changes * tc, feed: feed * 60, rapid: rap * 60, toolChanges: changes, perOp, rapidRate: rapid, toolChangeTime: tc };
}
