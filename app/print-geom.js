/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-geom.js — rays and distances on a printer mesh (0.7 LC.21, session print-07), shared by the supports preview,
 * the wall-thickness check and hollowing. DOM-free and import-light (bvh.js for the box tree). ModelCraft's alone.
 *
 * A printer mesh is print3d.js's: {positions: Float64Array (mm, Z up), indices: Uint32Array}, triangles wound
 * counter-clockwise seen from outside (use weld() first so corners are shared).
 *
 *   triMesh(mesh)                         → T = {P, I, nt, N (unit normals, 3 per triangle), A (areas), tree (bvh.js BoxTree),
 *                                           lo, hi, size}; the tree is built once and read by every query below
 *   rayNearest(T, ox, oy, oz, dx, dy, dz, tmin, tmax, skip, hit)
 *                                         → the distance to the nearest triangle the ray o + t·d meets with tmin < t ≤ tmax
 *                                           (−1: none); hit.tri = that triangle, hit.back = 1 when the ray meets its back
 *                                           (the ray is inside the solid there). `skip` = a triangle to leave out (−1: none).
 *                                           Allocation-free (rule 18): the traversal stack lives on T.
 *   nearestDist(T, x, y, z, r)            → the distance from a point to the nearest triangle within r (Infinity when none)
 *   triPointDist2(T, t, x, y, z)          → the squared distance from a point to triangle t
 */
import { BoxTree } from './bvh.js';

export function triMesh(mesh) {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const N = new Float64Array(nt * 3), A = new Float64Array(nt), boxes = new Float64Array(nt * 6);
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2];
    const vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, l = Math.hypot(nx, ny, nz);
    A[t] = l / 2;
    if (l) { N[t * 3] = nx / l; N[t * 3 + 1] = ny / l; N[t * 3 + 2] = nz / l; }
    for (let k = 0; k < 3; k++) {
      const x = P[a + k], y = P[b + k], z = P[c + k];
      const mn = Math.min(x, y, z), mx = Math.max(x, y, z);
      boxes[t * 6 + k] = mn; boxes[t * 6 + 3 + k] = mx;
      if (mn < lo[k]) lo[k] = mn;
      if (mx > hi[k]) hi[k] = mx;
    }
  }
  const tree = new BoxTree(boxes);
  return { P, I, nt, N, A, tree, boxes, lo, hi, size: [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]], stack: new Int32Array(256) };
}

// the box tree's own arrays (bvh.js: nb = node boxes, kid = inner [left, right] / leaf [-1 - start, count], idx = items)
function grow(T) { const s = new Int32Array(T.stack.length * 2); s.set(T.stack); T.stack = s; return s; }

export function rayNearest(T, ox, oy, oz, dx, dy, dz, tmin, tmax, skip, hit) {
  const { tree, P, I } = T;
  if (!tree.n) return -1;
  const nb = tree.nb, kid = tree.kid, idx = tree.idx, B = tree.boxes;
  const ix = 1 / dx, iy = 1 / dy, iz = 1 / dz;
  let best = tmax, bestTri = -1, bestBack = 0, sp = 0, st = T.stack;
  st[sp++] = 0;
  while (sp) {
    const id = st[--sp], o = id * 6;
    if (!slab(nb, o, ox, oy, oz, ix, iy, iz, tmin, best)) continue;
    const a = kid[id * 2], c = kid[id * 2 + 1];
    if (a >= 0) { if (sp + 2 > st.length) st = grow(T); st[sp++] = c; st[sp++] = a; continue; }
    for (let k = -1 - a, e = -1 - a + c; k < e; k++) {
      const t = idx[k];
      if (t === skip || !slab(B, t * 6, ox, oy, oz, ix, iy, iz, tmin, best)) continue;
      // Möller–Trumbore
      const p0 = I[t * 3] * 3, p1 = I[t * 3 + 1] * 3, p2 = I[t * 3 + 2] * 3;
      const e1x = P[p1] - P[p0], e1y = P[p1 + 1] - P[p0 + 1], e1z = P[p1 + 2] - P[p0 + 2];
      const e2x = P[p2] - P[p0], e2y = P[p2 + 1] - P[p0 + 1], e2z = P[p2 + 2] - P[p0 + 2];
      const hx = dy * e2z - dz * e2y, hy = dz * e2x - dx * e2z, hz = dx * e2y - dy * e2x;
      const det = e1x * hx + e1y * hy + e1z * hz;
      if (Math.abs(det) < 1e-14) continue;
      const f = 1 / det, sx = ox - P[p0], sy = oy - P[p0 + 1], sz = oz - P[p0 + 2];
      const u = f * (sx * hx + sy * hy + sz * hz);
      if (u < -1e-9 || u > 1 + 1e-9) continue;
      const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x;
      const v = f * (dx * qx + dy * qy + dz * qz);
      if (v < -1e-9 || u + v > 1 + 1e-9) continue;
      const d = f * (e2x * qx + e2y * qy + e2z * qz);
      if (d > tmin && d <= best) { best = d; bestTri = t; bestBack = det < 0 ? 1 : 0; }
    }
  }
  if (bestTri < 0) return -1;
  if (hit) { hit.tri = bestTri; hit.back = bestBack; }
  return best;
}

function slab(b, o, ox, oy, oz, ix, iy, iz, t0, t1) {
  for (let a = 0; a < 3; a++) {
    const og = a === 0 ? ox : a === 1 ? oy : oz, inv = a === 0 ? ix : a === 1 ? iy : iz;
    let n = (b[o + a] - og) * inv, f = (b[o + 3 + a] - og) * inv;
    if (n !== n || f !== f) { if (og < b[o + a] || og > b[o + 3 + a]) return false; continue; }   // along a side (0 · ∞)
    if (n > f) { const s = n; n = f; f = s; }
    if (n > t0) t0 = n;
    if (f < t1) t1 = f;
    if (t0 > t1) return false;
  }
  return true;
}

/** Squared distance from (x, y, z) to triangle t (Ericson, Real-Time Collision Detection § 5.1.5). */
export function triPointDist2(T, t, x, y, z) {
  const P = T.P, I = T.I, a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
  const ax = P[a], ay = P[a + 1], az = P[a + 2];
  const abx = P[b] - ax, aby = P[b + 1] - ay, abz = P[b + 2] - az, acx = P[c] - ax, acy = P[c + 1] - ay, acz = P[c + 2] - az;
  const apx = x - ax, apy = y - ay, apz = z - az;
  const d1 = abx * apx + aby * apy + abz * apz, d2 = acx * apx + acy * apy + acz * apz;
  let qx, qy, qz;
  if (d1 <= 0 && d2 <= 0) { qx = ax; qy = ay; qz = az; }
  else {
    const bpx = x - P[b], bpy = y - P[b + 1], bpz = z - P[b + 2];
    const d3 = abx * bpx + aby * bpy + abz * bpz, d4 = acx * bpx + acy * bpy + acz * bpz;
    const cpx = x - P[c], cpy = y - P[c + 1], cpz = z - P[c + 2];
    const d5 = abx * cpx + aby * cpy + abz * cpz, d6 = acx * cpx + acy * cpy + acz * cpz;
    const vc = d1 * d4 - d3 * d2, vb = d5 * d2 - d1 * d6, va = d3 * d6 - d5 * d4;
    if (d3 >= 0 && d4 <= d3) { qx = P[b]; qy = P[b + 1]; qz = P[b + 2]; }
    else if (d6 >= 0 && d5 <= d6) { qx = P[c]; qy = P[c + 1]; qz = P[c + 2]; }
    else if (vc <= 0 && d1 >= 0 && d3 <= 0) { const v = d1 / (d1 - d3); qx = ax + abx * v; qy = ay + aby * v; qz = az + abz * v; }
    else if (vb <= 0 && d2 >= 0 && d6 <= 0) { const w = d2 / (d2 - d6); qx = ax + acx * w; qy = ay + acy * w; qz = az + acz * w; }
    else if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) {
      const w = (d4 - d3) / ((d4 - d3) + (d5 - d6));
      qx = P[b] + (P[c] - P[b]) * w; qy = P[b + 1] + (P[c + 1] - P[b + 1]) * w; qz = P[b + 2] + (P[c + 2] - P[b + 2]) * w;
    } else {
      const den = 1 / (va + vb + vc), v = vb * den, w = vc * den;
      qx = ax + abx * v + acx * w; qy = ay + aby * v + acy * w; qz = az + abz * v + acz * w;
    }
  }
  return (x - qx) * (x - qx) + (y - qy) * (y - qy) + (z - qz) * (z - qz);
}

export function nearestDist(T, x, y, z, r) {
  const { tree } = T;
  if (!tree.n) return Infinity;
  const nb = tree.nb, kid = tree.kid, idx = tree.idx, B = tree.boxes;
  let best2 = r * r, found = false, sp = 0, st = T.stack;
  st[sp++] = 0;
  while (sp) {
    const id = st[--sp];
    if (boxD2(nb, id * 6, x, y, z) > best2) continue;
    const a = kid[id * 2], c = kid[id * 2 + 1];
    if (a >= 0) { if (sp + 2 > st.length) st = grow(T); st[sp++] = c; st[sp++] = a; continue; }
    for (let k = -1 - a, e = -1 - a + c; k < e; k++) {
      const t = idx[k];
      if (boxD2(B, t * 6, x, y, z) > best2) continue;
      const d2 = triPointDist2(T, t, x, y, z);
      if (d2 <= best2) { best2 = d2; found = true; }
    }
  }
  return found ? Math.sqrt(best2) : Infinity;
}

function boxD2(b, o, x, y, z) {
  const dx = x < b[o] ? b[o] - x : x > b[o + 3] ? x - b[o + 3] : 0;
  const dy = y < b[o + 1] ? b[o + 1] - y : y > b[o + 4] ? y - b[o + 4] : 0;
  const dz = z < b[o + 2] ? b[o + 2] - z : z > b[o + 5] ? z - b[o + 5] : 0;
  return dx * dx + dy * dy + dz * dz;
}
