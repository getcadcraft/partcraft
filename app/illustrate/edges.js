/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/edges.js — the edges of a triangle mesh (DOM-free, import-free). Meshes from files are often triangle soups
 * (STL) or split at every hard edge (glTF), so corners are welded by position first; then each welded edge knows its one
 * or two triangles. Used by the live view (feature lines) and by the line-art hidden-line pass (hlr.js).
 *
 *   topology(mesh) → { weld (vertex → welded id), normals (Float64Array, per triangle, unit), edges: [{ a, b (vertex indices
 *       for the coordinates), t1, t2 (−1 = open edge), cos (between the two normals; −2 open) }] }
 *   featureSegments(mesh, { angle = 20 }) → Float32Array [x0,y0,z0, x1,y1,z1, …]: open edges and edges whose faces meet at
 *       more than `angle` degrees (the same 20° drawing.js uses)
 */

export function topology(mesh) {
  const P = mesh.positions, I = mesh.indices, nv = P.length / 3, nt = I.length / 3;
  // weld by position: a grid of 1e-6 of the mesh's size
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < P.length; i++) { if (P[i] < lo) lo = P[i]; if (P[i] > hi) hi = P[i]; }
  const q = Math.max(hi - lo, 1e-9) * 1e-6;
  const weld = new Uint32Array(nv), seen = new Map();
  for (let i = 0; i < nv; i++) {
    const key = Math.round(P[i * 3] / q) + ',' + Math.round(P[i * 3 + 1] / q) + ',' + Math.round(P[i * 3 + 2] / q);
    let w = seen.get(key);
    if (w === undefined) { w = i; seen.set(key, i); }
    weld[i] = w;
  }
  const normals = new Float64Array(nt * 3);
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    normals[t * 3] = nx / l; normals[t * 3 + 1] = ny / l; normals[t * 3 + 2] = nz / l;
  }
  const map = new Map();
  const edges = [];
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const va = I[t * 3 + k], vb = I[t * 3 + (k + 1) % 3];
    const a = weld[va], b = weld[vb];
    if (a === b) continue;
    const key = a < b ? a * 4294967296 + b : b * 4294967296 + a;
    const e = map.get(key);
    if (e === undefined) { map.set(key, edges.length); edges.push({ a: va, b: vb, t1: t, t2: -1, cos: -2 }); }
    else if (edges[e].t2 < 0) edges[e].t2 = t;
    else edges[e].more = true;   // a third triangle on one edge (not a clean solid): drawn as sharp
  }
  for (const e of edges) {
    if (e.t2 < 0) continue;
    e.cos = e.more ? -1 : normals[e.t1 * 3] * normals[e.t2 * 3] + normals[e.t1 * 3 + 1] * normals[e.t2 * 3 + 1] + normals[e.t1 * 3 + 2] * normals[e.t2 * 3 + 2];
  }
  return { weld, normals, edges };
}

export function featureSegments(mesh, { angle = 20, topo = null } = {}) {
  const { edges } = topo || topology(mesh);
  const P = mesh.positions, lim = Math.cos(angle * Math.PI / 180);
  const out = [];
  for (const e of edges) {
    if (e.t2 >= 0 && e.cos >= lim) continue;
    out.push(P[e.a * 3], P[e.a * 3 + 1], P[e.a * 3 + 2], P[e.b * 3], P[e.b * 3 + 1], P[e.b * 3 + 2]);
  }
  return Float32Array.from(out);
}
