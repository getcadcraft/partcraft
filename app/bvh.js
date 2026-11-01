/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bvh.js — a bounding-box tree over items that each have a box, for finding the few of a million that matter
 * (picking, snapping, collisions). No DOM, no three.js. Built once; items are found by box, by ray or by any test.
 *
 *   const t = new BoxTree(boxes)          boxes: Float64Array, 6 per item (min x y z, max x y z)
 *   t.box(min, max, cb)                   cb(i) for every item whose box touches [min, max]; cb → true stops
 *   t.ray(o, d, cb, tmax = Infinity)      cb(i) for every item whose box the ray o + t·d (0 ≤ t ≤ tmax) passes through;
 *                                         tmax may be {t}, read as it goes (a nearest-hit search shortens it)
 *   t.walk(test(lo, hi) → bool, cb)       cb(i) for every item whose box passes test(lo, hi) (each [x, y, z]; nodes are tested the same way)
 *   t.min / t.max                         the box of everything ([x, y, z]; null when empty)
 */
const LEAF = 6;

export class BoxTree {
  constructor(boxes) {
    const n = boxes.length / 6;
    this.n = n;
    this.boxes = boxes;
    this.idx = new Uint32Array(n);
    for (let i = 0; i < n; i++) this.idx[i] = i;
    const cen = new Float64Array(n * 3);
    for (let i = 0; i < n; i++) for (let k = 0; k < 3; k++) cen[i * 3 + k] = (boxes[i * 6 + k] + boxes[i * 6 + 3 + k]) / 2;
    // at most 2n/LEAF nodes (and 1 for an empty tree)
    const cap = Math.max(1, Math.ceil((2 * n) / LEAF) + 2);
    this.nb = new Float64Array(cap * 6);
    this.kid = new Int32Array(cap * 2);   // inner: left, right (right ≥ 0); leaf: -1 - start, count
    this.count = 0;
    if (n) this.build(0, n, cen); else this.node();
    this.min = n ? [this.nb[0], this.nb[1], this.nb[2]] : null;
    this.max = n ? [this.nb[3], this.nb[4], this.nb[5]] : null;
  }
  node() {
    if (this.count * 6 >= this.nb.length) {
      const nb = new Float64Array(this.nb.length * 2); nb.set(this.nb); this.nb = nb;
      const kid = new Int32Array(this.kid.length * 2); kid.set(this.kid); this.kid = kid;
    }
    return this.count++;
  }
  build(lo, hi, cen) {
    const id = this.node(), b = this.boxes, idx = this.idx;
    let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
    for (let k = lo; k < hi; k++) {
      const o = idx[k] * 6;
      if (b[o] < x0) x0 = b[o]; if (b[o + 1] < y0) y0 = b[o + 1]; if (b[o + 2] < z0) z0 = b[o + 2];
      if (b[o + 3] > x1) x1 = b[o + 3]; if (b[o + 4] > y1) y1 = b[o + 4]; if (b[o + 5] > z1) z1 = b[o + 5];
    }
    const nbo = id * 6;
    this.nb[nbo] = x0; this.nb[nbo + 1] = y0; this.nb[nbo + 2] = z0; this.nb[nbo + 3] = x1; this.nb[nbo + 4] = y1; this.nb[nbo + 5] = z1;
    if (hi - lo <= LEAF) { this.kid[id * 2] = -1 - lo; this.kid[id * 2 + 1] = hi - lo; return id; }
    // split at the median of the centres along the longest side of the centres' box
    let c0 = [Infinity, Infinity, Infinity], c1 = [-Infinity, -Infinity, -Infinity];
    for (let k = lo; k < hi; k++) for (let a = 0; a < 3; a++) { const v = cen[idx[k] * 3 + a]; if (v < c0[a]) c0[a] = v; if (v > c1[a]) c1[a] = v; }
    const ax = c1[0] - c0[0] >= c1[1] - c0[1] && c1[0] - c0[0] >= c1[2] - c0[2] ? 0 : c1[1] - c0[1] >= c1[2] - c0[2] ? 1 : 2;
    const mid = (lo + hi) >> 1;
    select(idx, cen, ax, lo, hi - 1, mid);
    const l = this.build(lo, mid, cen), r = this.build(mid, hi, cen);
    this.kid[id * 2] = l; this.kid[id * 2 + 1] = r;
    return id;
  }
  walk(test, cb) {
    if (!this.n) return;
    const nb = this.nb, kid = this.kid, idx = this.idx, stack = [0], lo = [0, 0, 0], hi = [0, 0, 0];
    while (stack.length) {
      const id = stack.pop(), o = id * 6;
      lo[0] = nb[o]; lo[1] = nb[o + 1]; lo[2] = nb[o + 2]; hi[0] = nb[o + 3]; hi[1] = nb[o + 4]; hi[2] = nb[o + 5];
      if (!test(lo, hi)) continue;
      const a = kid[id * 2], c = kid[id * 2 + 1];
      if (a < 0) {
        const s = -1 - a, b = this.boxes;
        for (let k = s; k < s + c; k++) {
          const i = idx[k], q = i * 6;
          lo[0] = b[q]; lo[1] = b[q + 1]; lo[2] = b[q + 2]; hi[0] = b[q + 3]; hi[1] = b[q + 4]; hi[2] = b[q + 5];
          if (test(lo, hi) && cb(i)) return true;
        }
      }
      else stack.push(c, a);
    }
    return false;
  }
  box(min, max, cb) {
    return this.walk((lo, hi) => lo[0] <= max[0] && hi[0] >= min[0] && lo[1] <= max[1] && hi[1] >= min[1] && lo[2] <= max[2] && hi[2] >= min[2], cb);
  }
  ray(o, d, cb, tmax = Infinity) {
    const ix = 1 / d[0], iy = 1 / d[1], iz = 1 / d[2];
    return this.walk((lo, hi) => {
      let t0 = 0, t1 = typeof tmax === 'number' ? tmax : tmax.t;
      for (let a = 0; a < 3; a++) {
        const inv = a === 0 ? ix : a === 1 ? iy : iz;
        let n = (lo[a] - o[a]) * inv, f = (hi[a] - o[a]) * inv;
        if (Number.isNaN(n) || Number.isNaN(f)) { if (o[a] < lo[a] || o[a] > hi[a]) return false; continue; }   // along a side
        if (n > f) { const s = n; n = f; f = s; }
        if (n > t0) t0 = n;
        if (f < t1) t1 = f;
        if (t0 > t1) return false;
      }
      return true;
    }, cb);
  }
}

/** Put the k-th smallest (by cen[i*3+ax]) at idx[k], smaller before it and larger after (lo..hi inclusive). */
function select(idx, cen, ax, lo, hi, k) {
  const key = (i) => cen[idx[i] * 3 + ax];
  while (hi > lo) {
    const pv = key((lo + hi) >> 1);
    let i = lo, j = hi;
    while (i <= j) {
      while (key(i) < pv) i++;
      while (key(j) > pv) j--;
      if (i <= j) { const s = idx[i]; idx[i] = idx[j]; idx[j] = s; i++; j--; }
    }
    if (k <= j) hi = j; else if (k >= i) lo = i; else return;
  }
}

/** Boxes (6 per item) for lists of points: pts(i) → array of [x, y, z]; n items. */
export function boxesOf(n, pts, pad = 0) {
  const b = new Float64Array(n * 6);
  for (let i = 0; i < n; i++) {
    let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
    for (const p of pts(i)) {
      if (p[0] < x0) x0 = p[0]; if (p[1] < y0) y0 = p[1]; if (p[2] < z0) z0 = p[2];
      if (p[0] > x1) x1 = p[0]; if (p[1] > y1) y1 = p[1]; if (p[2] > z1) z1 = p[2];
    }
    const o = i * 6;
    b[o] = x0 - pad; b[o + 1] = y0 - pad; b[o + 2] = z0 - pad; b[o + 3] = x1 + pad; b[o + 4] = y1 + pad; b[o + 5] = z1 + pad;
  }
  return b;
}
