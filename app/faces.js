/* SPDX-License-Identifier: Apache-2.0 */
/**
 * faces.js — planar faces of a triangle mesh (DOM-free). Groups edge-connected triangles that lie
 * in one plane, and traces each group's boundary into closed loops (outer + holes). Used to
 * highlight a picked face, export a face profile as DXF and write merged planar faces to STEP.
 * The mesh is the kernel's { positions (xyz), indices (3 per triangle) }; manifold meshes are
 * closed with no T-junctions, so every group boundary closes.
 */
import * as V from './vec.js';

export function triNormal(pos, idx, t) {
  const p = (k) => [pos[idx[t * 3 + k] * 3], pos[idx[t * 3 + k] * 3 + 1], pos[idx[t * 3 + k] * 3 + 2]];
  const a = p(0), b = p(1), c = p(2);
  const n = V.cross(V.sub(b, a), V.sub(c, a));
  const l = V.len(n);
  return { n: l > 0 ? V.mul(n, 1 / l) : [0, 0, 0], a, area2: l };
}

/** → { faceOf: Int32Array (triangle → group), groups: [{ tris:[t], n, d }] } */
export function planarGroups(mesh, angTol = 1e-5) {
  if (mesh.triFace) return faceGroups(mesh);
  return planarGroupsMesh(mesh, angTol);
}

/** The exact kernel's faces as groups (one group per B-rep face; n = its first triangle's normal). */
export function faceGroups(mesh) {
  const nt = mesh.indices.length / 3;
  const faceOf = new Int32Array(nt);
  const byFace = new Map();
  const groups = [];
  for (let t = 0; t < nt; t++) {
    const f = mesh.triFace[t];
    let g = byFace.get(f);
    if (g === undefined) { const q = triNormal(mesh.positions, mesh.indices, t); g = groups.length; byFace.set(f, g); groups.push({ tris: [], n: q.n, d: V.dot(q.n, q.a), face: f }); }
    groups[g].tris.push(t);
    faceOf[t] = g;
  }
  return { groups, faceOf };
}

/** Coplanar edge-connected triangles of any mesh (ignores B-rep faces; used where facets are wanted). */
export function planarGroupsMesh(mesh, angTol = 1e-5) {
  const { positions: pos, indices: idx } = mesh;
  const nt = idx.length / 3;
  const info = [];
  let size = 1;
  for (let i = 0; i < pos.length; i++) size = Math.max(size, Math.abs(pos[i]));
  const dTol = 1e-5 * size;
  for (let t = 0; t < nt; t++) { const q = triNormal(pos, idx, t); info.push({ n: q.n, d: V.dot(q.n, q.a) }); }
  const parent = new Int32Array(nt).map((_, i) => i);
  const find = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
  const edges = new Map();
  for (let t = 0; t < nt; t++) {
    for (let k = 0; k < 3; k++) {
      const a = idx[t * 3 + k], b = idx[t * 3 + (k + 1) % 3];
      const key = a < b ? a + ',' + b : b + ',' + a;
      const o = edges.get(key);
      if (o === undefined) { edges.set(key, t); continue; }
      const A = info[t], B = info[o];
      if (V.dot(A.n, B.n) > 1 - angTol && Math.abs(A.d - B.d) < dTol) parent[find(t)] = find(o);
    }
  }
  const faceOf = new Int32Array(nt);
  const groups = [];
  const map = new Map();
  for (let t = 0; t < nt; t++) {
    const r = find(t);
    let g = map.get(r);
    if (g === undefined) { g = groups.length; map.set(r, g); groups.push({ tris: [], n: info[t].n, d: info[t].d }); }
    groups[g].tris.push(t);
    faceOf[t] = g;
  }
  return { faceOf, groups };
}

/** Boundary loops (vertex index lists, counter-clockwise seen from outside for the outer one) of a set of triangles. */
export function boundaryLoops(mesh, tris) {
  const idx = mesh.indices;
  const dir = new Map();
  for (const t of tris) for (let k = 0; k < 3; k++) {
    const a = idx[t * 3 + k], b = idx[t * 3 + (k + 1) % 3];
    const rev = b + '>' + a;
    if (dir.has(rev)) dir.delete(rev); else dir.set(a + '>' + b, [a, b]);
  }
  const next = new Map();
  for (const [a, b] of dir.values()) { if (!next.has(a)) next.set(a, []); next.get(a).push(b); }
  const loops = [];
  for (const [start] of next) {
    while (next.get(start) && next.get(start).length) {
      const loop = [start];
      let cur = next.get(start).pop();
      let guard = 0;
      while (cur !== start && guard++ < 1e6) {
        loop.push(cur);
        const outs = next.get(cur);
        if (!outs || !outs.length) break;
        cur = outs.pop();
      }
      if (loop.length >= 3) loops.push(loop);
    }
  }
  return loops;
}

/** A planar group's loops in its own plane frame (vec.frameFor) — outer first, then holes. */
export function faceLoops2D(mesh, group) {
  const pos = mesh.positions;
  const frame = V.frameFor(group.n, V.mul(group.n, group.d));
  const loops = boundaryLoops(mesh, group.tris).map((l) => l.map((v) => V.toPlane(frame, [pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]])));
  const area = (l) => { let s = 0; for (let i = 0, j = l.length - 1; i < l.length; j = i++) s += l[j][0] * l[i][1] - l[i][0] * l[j][1]; return s / 2; };
  loops.sort((a, b) => Math.abs(area(b)) - Math.abs(area(a)));
  return { frame, loops: loops.map((l) => dropCollinear(l)), area: loops.reduce((s, l) => s + area(l), 0) };
}

/**
 * Outlines of a flat face that are whole circles (0.9.1 FX.223): a closed loop whose every point is on one cylinder face of the
 * body standing square to the face (a drilled or imported hole, a round boss). → per loop { c: [x, y], r } or null. The centre
 * and radius are the cylinder's own, not fitted to the facets, so a DXF gets the true circle a laser or plasma table cuts.
 */
export function loopCircles(frame, loops, faces) {
  const cyls = (faces || []).filter((f) => f && f.type === 'cylinder' && f.axis && f.r > 0 && Math.abs(V.dot(f.axis.d, frame.n)) > 1 - 1e-9)
    .map((f) => ({ c: V.toPlane(frame, f.axis.o), r: f.r }));
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of loops) for (const [x, y] of l) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  const span = loops.length ? Math.hypot(x1 - x0, y1 - y0) : 0;
  const tol = 4e-6 * span + 1e-6;   // 32-bit positions round to about 1e-7 of the part's size
  return loops.map((l) => {
    if (l.length < 8) return null;
    for (const k of cyls) {
      if (!l.every((p) => Math.abs(Math.hypot(p[0] - k.c[0], p[1] - k.c[1]) - k.r) <= tol)) continue;
      // all the way round once: the loop's turning about the centre is one full turn
      let turn = 0;
      for (let i = 0; i < l.length; i++) {
        const a = l[i], b = l[(i + 1) % l.length];
        const u = [a[0] - k.c[0], a[1] - k.c[1]], v = [b[0] - k.c[0], b[1] - k.c[1]];
        turn += Math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]);
      }
      if (Math.abs(Math.abs(turn) - 2 * Math.PI) < 1e-6) return { c: [k.c[0], k.c[1]], r: k.r };
    }
    return null;
  });
}

/** Remove vertices that sit on a straight run (mesh boundaries carry them from neighbouring faces). */
export function dropCollinear(loop, sinTol = 1e-6) {
  if (loop.length <= 3) return loop;
  const out = [];
  for (let i = 0; i < loop.length; i++) {
    const a = loop[(i + loop.length - 1) % loop.length], b = loop[i], c = loop[(i + 1) % loop.length];
    const u = [b[0] - a[0], b[1] - a[1]], v = [c[0] - b[0], c[1] - b[1]];
    const l = Math.hypot(...u) * Math.hypot(...v);
    const straight = l > 0 && Math.abs(u[0] * v[1] - u[1] * v[0]) / l < sinTol && u[0] * v[0] + u[1] * v[1] > 0;
    if (!straight) out.push(b);
  }
  return out.length >= 3 ? out : loop;
}
