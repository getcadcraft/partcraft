/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tetmesh.js — a body-fitted tetrahedral mesh of a solid from its B-rep tessellation (DOM-free; runs in the compute worker).
 *
 * Method: isosurface stuffing (F. Labelle & J. R. Shewchuk, "Isosurface stuffing: fast tetrahedral meshes with good
 * dihedral angles", SIGGRAPH 2007) on a graded background mesh.
 *  1. Background: a body-centred cubic (BCC) lattice over the part's box (cube corners + centres; 12 tets per cube), its
 *     spacing stretched ≤ a few % per axis so the box is a whole number of cubes (flat faces of a box-like part then lie on
 *     lattice planes). Graded by conforming longest-edge bisection (Rivara; ties broken by vertex ids, so it is
 *     deterministic) wherever a tet is longer than the size field allows.
 *  2. Size field: min(user size, curvature radius × `curv` (from the angle between neighbouring tessellation triangles of
 *     one face), wall thickness ÷ `thick` and gap ÷ 1.5 (rays from every triangle into and out of the part, only walls
 *     facing back count)), graded at `grade` mm per mm, floored at user size ÷ 2^levels.
 *  3. Stuffing: vertices classified inside / on / outside (ray parity, 3 skewed directions; "on" = within 1e-8 of the
 *     box diagonal); a cut point where each edge crosses the surface (exact segment–triangle hit); a vertex closer to a
 *     cut point than α × the edge is warped onto it (α 0.24999 on axis edges, 0.41189 on body diagonals: the paper's
 *     values; 0.33 on the face diagonals bisection makes); every background tet is replaced by its part inside (the
 *     paper's stencil cases: 1, 2 or 3 tets, or a prism of 3). Quads on background faces are split by their shorter
 *     diagonal (ids on a tie), so both tets sharing the face agree; a prism whose three diagonals turn the same way gets a
 *     centre point (8 tets). This replaces the paper's parity rule, so its angle bounds are not claimed: quality is
 *     measured and reported (`quality`).
 *  4. Boundary: the faces used once; each takes the B-rep face nearest its centroid (`triFace`). Boundary vertices on a
 *     plane, cylinder or a face with a surfaces.js record (sphere, cone, torus, revolution, extrusion, B-spline: brep-surf.js)
 *     are projected onto the exact surface (alternately onto both where two faces meet), and vertices
 *     near a B-rep edge polyline (`edgeSegs`) are snapped onto it when no tet around them degrades below 5° dihedral.
 *  5. Quadratic tets (`toT10`): a midside node per edge; on boundary edges it goes onto the exact surface or the
 *     tessellation of its face (both faces alternately on an edge), kept straight when that would fold an element.
 * Limits: the tessellation is the geometry for faces with no exact record (offset and other surfaces; its chord error,
 * ~1e-3 × radius at the default resolution; counted in stats.tessFaces); sharp edges that miss the lattice are recovered only by the snapping step (a chamfer of
 * up to ~α·h may remain where snapping is refused); features thinner than the floor size are not meshed.
 *
 * Mesh { nodes: Float64Array(3n), tets: Int32Array(4m) (positive volume), btri: Int32Array(3k) (outward), bface:
 *   Int32Array(k) (B-rep face of each, −1 unknown), quality, stats }. T10 adds { order: 2, tets10: Int32Array(10m) — corners
 *   then midsides (01)(12)(02)(03)(13)(23); btri6: Int32Array(6k) — corners then midsides (01)(12)(20) }.
 */

import { closestOnSurface, curvatureRadius } from './surfaces.js';
import { t } from './i18n.js';
import { cross3 as cross, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74)

// ---------------------------------------------------------------------------------------- triangle BVH

/** A bounding-volume hierarchy over a triangle mesh → { closest(p, filter?), near(p, r), firstHit(o, d, tmax), inside(p), triN(t) }. */
export function buildBVH(mesh) {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const cen = new Float64Array(nt * 3), tb = new Float64Array(nt * 6);
  for (let t = 0; t < nt; t++) {
    let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
    for (let c = 0; c < 3; c++) { const v = 3 * I[3 * t + c], x = P[v], y = P[v + 1], z = P[v + 2]; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; if (z < z0) z0 = z; if (z > z1) z1 = z; }
    tb.set([x0, y0, z0, x1, y1, z1], 6 * t); cen[3 * t] = (x0 + x1) / 2; cen[3 * t + 1] = (y0 + y1) / 2; cen[3 * t + 2] = (z0 + z1) / 2;
  }
  const order = new Int32Array(nt); for (let t = 0; t < nt; t++) order[t] = t;
  const cap = 2 * nt + 1, box = new Float64Array(6 * cap), left = new Int32Array(cap), right = new Int32Array(cap), start = new Int32Array(cap), count = new Int32Array(cap);
  let nn = 0;
  const select = (lo, hi, k, ax) => {   // quickselect order[lo..hi) so order[k] has the k-th centroid along ax
    while (hi - lo > 1) {
      const pv = cen[3 * order[(lo + hi) >> 1] + ax]; let i = lo, j = hi - 1;
      while (i <= j) { while (cen[3 * order[i] + ax] < pv) i++; while (cen[3 * order[j] + ax] > pv) j--; if (i <= j) { const s = order[i]; order[i] = order[j]; order[j] = s; i++; j--; } }
      if (k <= j) hi = j + 1; else if (k >= i) lo = i; else return;
    }
  };
  const build = (lo, hi) => {
    const n = nn++, b = 6 * n;
    box[b] = box[b + 1] = box[b + 2] = Infinity; box[b + 3] = box[b + 4] = box[b + 5] = -Infinity;
    let c0 = [Infinity, Infinity, Infinity], c1 = [-Infinity, -Infinity, -Infinity];
    for (let i = lo; i < hi; i++) {
      const t = order[i];
      for (let a = 0; a < 3; a++) { if (tb[6 * t + a] < box[b + a]) box[b + a] = tb[6 * t + a]; if (tb[6 * t + 3 + a] > box[b + 3 + a]) box[b + 3 + a] = tb[6 * t + 3 + a]; const c = cen[3 * t + a]; if (c < c0[a]) c0[a] = c; if (c > c1[a]) c1[a] = c; }
    }
    if (hi - lo <= 4) { left[n] = -1; start[n] = lo; count[n] = hi - lo; return n; }
    const ext = [c1[0] - c0[0], c1[1] - c0[1], c1[2] - c0[2]], ax = ext[0] >= ext[1] && ext[0] >= ext[2] ? 0 : ext[1] >= ext[2] ? 1 : 2, mid = (lo + hi) >> 1;
    select(lo, hi, mid, ax);
    left[n] = build(lo, mid); right[n] = build(mid, hi);
    return n;
  };
  if (nt) build(0, nt);
  const stack = new Int32Array(128);
  const boxD2 = (n, x, y, z) => { const b = 6 * n; let d = 0, t; t = box[b] - x; if (t > 0) d += t * t; t = x - box[b + 3]; if (t > 0) d += t * t; t = box[b + 1] - y; if (t > 0) d += t * t; t = y - box[b + 4]; if (t > 0) d += t * t; t = box[b + 2] - z; if (t > 0) d += t * t; t = z - box[b + 5]; if (t > 0) d += t * t; return d; };
  const q = new Float64Array(3);
  // closest point on triangle t to (x,y,z) → squared distance, point in q (Ericson 5.1.5)
  const triClosest = (t, x, y, z) => {
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const ax = P[a], ay = P[a + 1], az = P[a + 2], abx = P[b] - ax, aby = P[b + 1] - ay, abz = P[b + 2] - az, acx = P[c] - ax, acy = P[c + 1] - ay, acz = P[c + 2] - az;
    const apx = x - ax, apy = y - ay, apz = z - az, d1 = abx * apx + aby * apy + abz * apz, d2 = acx * apx + acy * apy + acz * apz;
    let u, v;
    if (d1 <= 0 && d2 <= 0) { u = 0; v = 0; } else {
      const bpx = x - P[b], bpy = y - P[b + 1], bpz = z - P[b + 2], d3 = abx * bpx + aby * bpy + abz * bpz, d4 = acx * bpx + acy * bpy + acz * bpz;
      const cpx = x - P[c], cpy = y - P[c + 1], cpz = z - P[c + 2], d5 = abx * cpx + aby * cpy + abz * cpz, d6 = acx * cpx + acy * cpy + acz * cpz;
      const vc = d1 * d4 - d3 * d2, vb = d5 * d2 - d1 * d6, va = d3 * d6 - d5 * d4;
      if (d3 >= 0 && d4 <= d3) { u = 1; v = 0; } else if (d6 >= 0 && d5 <= d6) { u = 0; v = 1; } else if (vc <= 0 && d1 >= 0 && d3 <= 0) { u = d1 / (d1 - d3); v = 0; } else if (vb <= 0 && d2 >= 0 && d6 <= 0) { u = 0; v = d2 / (d2 - d6); } else if (va <= 0 && d4 - d3 >= 0 && d5 - d6 >= 0) { const w = (d4 - d3) / ((d4 - d3) + (d5 - d6)); u = 1 - w; v = w; } else { const den = 1 / (va + vb + vc); u = vb * den; v = vc * den; }
    }
    q[0] = ax + abx * u + acx * v; q[1] = ay + aby * u + acy * v; q[2] = az + abz * u + acz * v;
    return (x - q[0]) ** 2 + (y - q[1]) ** 2 + (z - q[2]) ** 2;
  };
  /** Nearest point of the mesh (optionally only triangles where filter(t)) → { d2, tri, p:[x,y,z] }. */
  const closest = (p, filter = null, maxD2 = Infinity) => {
    const x = p[0], y = p[1], z = p[2];
    let best = maxD2, bt = -1, sp = 0; const bp = [NaN, NaN, NaN];
    if (!nt) return { d2: Infinity, tri: -1, p: bp };
    stack[sp++] = 0;
    while (sp) {
      const n = stack[--sp];
      if (boxD2(n, x, y, z) >= best) continue;
      if (left[n] < 0) { for (let i = start[n], e = start[n] + count[n]; i < e; i++) { const t = order[i]; if (filter && !filter(t)) continue; const d = triClosest(t, x, y, z); if (d < best) { best = d; bt = t; bp[0] = q[0]; bp[1] = q[1]; bp[2] = q[2]; } } continue; }
      const l = left[n], r = right[n], dl = boxD2(l, x, y, z), dr = boxD2(r, x, y, z);
      if (dl < dr) { stack[sp++] = r; stack[sp++] = l; } else { stack[sp++] = l; stack[sp++] = r; }
    }
    return { d2: best, tri: bt, p: bp };
  };
  /** Is any triangle within r of p? */
  const near = (p, r) => {
    const x = p[0], y = p[1], z = p[2], r2 = r * r; let sp = 0;
    if (!nt) return false;
    stack[sp++] = 0;
    while (sp) {
      const n = stack[--sp];
      if (boxD2(n, x, y, z) > r2) continue;
      if (left[n] < 0) { for (let i = start[n], e = start[n] + count[n]; i < e; i++) if (triClosest(order[i], x, y, z) <= r2) return true; continue; }
      stack[sp++] = left[n]; stack[sp++] = right[n];
    }
    return false;
  };
  // ray (o + t d, t in (tmin, tmax]) against the boxes / triangles (Möller–Trumbore, both sides)
  let pad = 0;   // boxes grown by 1e-9 × the diagonal: a ray in the plane of a box face (d = 0 on that axis) still enters
  const rayBox = (n, ox, oy, oz, ix, iy, iz, tmax) => {
    const b = 6 * n; let t0 = 0, t1 = tmax, a, c;
    a = (box[b] - pad - ox) * ix; c = (box[b + 3] + pad - ox) * ix; if (a > c) { const s = a; a = c; c = s; } if (a > t0) t0 = a; if (c < t1) t1 = c; if (t0 > t1) return false;
    a = (box[b + 1] - pad - oy) * iy; c = (box[b + 4] + pad - oy) * iy; if (a > c) { const s = a; a = c; c = s; } if (a > t0) t0 = a; if (c < t1) t1 = c; if (t0 > t1) return false;
    a = (box[b + 2] - pad - oz) * iz; c = (box[b + 5] + pad - oz) * iz; if (a > c) { const s = a; a = c; c = s; } if (a > t0) t0 = a; if (c < t1) t1 = c;
    return t0 <= t1;
  };
  const hit = new Float64Array(3);   // t, u, v of the last triangle test
  let tolB = 1e-12;   // barycentric slack (firstHit widens it so a ray through a tessellation edge or corner still hits)
  const rayTri = (t, ox, oy, oz, dx, dy, dz) => {
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const e1x = P[b] - P[a], e1y = P[b + 1] - P[a + 1], e1z = P[b + 2] - P[a + 2], e2x = P[c] - P[a], e2y = P[c + 1] - P[a + 1], e2z = P[c + 2] - P[a + 2];
    const px = dy * e2z - dz * e2y, py = dz * e2x - dx * e2z, pz = dx * e2y - dy * e2x, det = e1x * px + e1y * py + e1z * pz;
    const scale = Math.hypot(e1x, e1y, e1z) * Math.hypot(e2x, e2y, e2z) * Math.hypot(dx, dy, dz);
    if (Math.abs(det) <= 1e-14 * scale) return 0;   // parallel: 0 = no hit
    const inv = 1 / det, sx = ox - P[a], sy = oy - P[a + 1], sz = oz - P[a + 2], u = (sx * px + sy * py + sz * pz) * inv;
    if (u < -tolB || u > 1 + tolB) return 0;
    const qx = sy * e1z - sz * e1y, qy = sz * e1x - sx * e1z, qz = sx * e1y - sy * e1x, v = (dx * qx + dy * qy + dz * qz) * inv;
    if (v < -tolB || u + v > 1 + tolB) return 0;
    hit[0] = (e2x * qx + e2y * qy + e2z * qz) * inv; hit[1] = u; hit[2] = v;
    return u < 1e-9 || v < 1e-9 || u + v > 1 - 1e-9 ? 2 : 1;   // 2 = on an edge (ambiguous)
  };
  /** Walk the triangles whose boxes the ray meets: fn(t, kind) per triangle hit with t in (tmin, tmax]; fn returning true stops. */
  const walk = (o, d, tmin, tmax, fn) => {
    if (!nt) return;
    const ix = 1 / d[0], iy = 1 / d[1], iz = 1 / d[2]; let sp = 0;
    stack[sp++] = 0;
    while (sp) {
      const n = stack[--sp];
      if (!rayBox(n, o[0], o[1], o[2], ix, iy, iz, tmax)) continue;
      if (left[n] < 0) { for (let i = start[n], e = start[n] + count[n]; i < e; i++) { const t = order[i], k = rayTri(t, o[0], o[1], o[2], d[0], d[1], d[2]); if (k && hit[0] > tmin && hit[0] <= tmax && fn(t, k, hit[0])) return; } continue; }
      stack[sp++] = left[n]; stack[sp++] = right[n];
    }
  };
  /** First hit of o + t·d, t in (tmin, tmax] → { t, tri } or null. */
  const firstHit = (o, d, tmax = 1, tmin = 0) => { let bt = Infinity, btri = -1; tolB = 1e-7; walk(o, d, tmin, tmax, (t, k, th) => { if (th < bt) { bt = th; btri = t; } return false; }); tolB = 1e-12; return btri < 0 ? null : { t: bt, tri: btri }; };
  let diag = 0;
  if (nt) diag = Math.hypot(box[3] - box[0], box[4] - box[1], box[5] - box[2]);
  pad = 1e-9 * diag;
  const DIRS = [[0.8017, 0.4423, 0.4019], [-0.3612, 0.8221, -0.4401], [0.2713, -0.5197, 0.8101]];
  /** Inside the closed mesh? Parity of crossings along skewed rays; an edge-grazing ray is retried; majority of the clean ones. */
  const inside = (p) => {
    let votes = 0, clean = 0;
    for (const D of DIRS) {
      let cnt = 0, amb = false;
      const L = 4 * diag + 1, d = [D[0] * L, D[1] * L, D[2] * L];
      walk(p, d, 0, 1, (t, k) => { if (k === 2) { amb = true; return true; } cnt++; return false; });
      if (amb) continue;
      clean++; if (cnt & 1) votes++;
      if (clean === 2 && (votes === 0 || votes === 2)) break;
    }
    return clean ? votes * 2 > clean : false;
  };
  const triN = (t) => {
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], wx = P[c] - P[a], wy = P[c + 1] - P[a + 1], wz = P[c + 2] - P[a + 2];
    const nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx, l = Math.hypot(nx, ny, nz) || 1;
    return [nx / l, ny / l, nz / l];
  };
  return { closest, near, firstHit, walk, inside, triN, diag, bbox: nt ? { min: [box[0], box[1], box[2]], max: [box[3], box[4], box[5]] } : null };
}

// ---------------------------------------------------------------------------------------- exact faces

/** Does face record f have an exact surface here (plane, cylinder, or a surfaces.js record)? */
export const exactFace = (f) => !!f && ((f.type === 'plane' && !!f.n && !!f.o) || (f.type === 'cylinder' && !!f.axis && f.r > 0) || !!f.surf);

/** Project p onto B-rep face record f (plane / cylinder / surfaces.js record exactly; else the face's tessellation via bvh) → [x,y,z]. */
export function projectToFace(p, f, fi, bvh, triFace) {
  if (f && f.type === 'plane' && f.n && f.o) { const d = (p[0] - f.o[0]) * f.n[0] + (p[1] - f.o[1]) * f.n[1] + (p[2] - f.o[2]) * f.n[2]; return [p[0] - d * f.n[0], p[1] - d * f.n[1], p[2] - d * f.n[2]]; }
  if (f && f.type === 'cylinder' && f.axis && f.r > 0) {
    const o = f.axis.o, a = f.axis.d, qx = p[0] - o[0], qy = p[1] - o[1], qz = p[2] - o[2], t = qx * a[0] + qy * a[1] + qz * a[2];
    const rx = qx - t * a[0], ry = qy - t * a[1], rz = qz - t * a[2], rl = Math.hypot(rx, ry, rz);
    if (rl > 1e-12) return [o[0] + t * a[0] + f.r * rx / rl, o[1] + t * a[1] + f.r * ry / rl, o[2] + t * a[2] + f.r * rz / rl];
  }
  if (f && f.surf) return closestOnSurface(f.surf, p).p;
  const c = bvh.closest(p, triFace ? (t) => triFace[t] === fi : null);
  return c.tri >= 0 ? c.p.slice() : p.slice();
}
/** Onto the intersection of two or more faces: alternating projections (converges for faces meeting at an angle). */
export function projectToFaces(p, list, faces, bvh, triFace, iters = 12) {
  let x = p.slice();
  if (list.length === 1) return projectToFace(x, faces[list[0]], list[0], bvh, triFace);
  for (let k = 0; k < iters; k++) { const x0 = x; for (const fi of list) x = projectToFace(x, faces[fi], fi, bvh, triFace); if (Math.hypot(x[0] - x0[0], x[1] - x0[1], x[2] - x0[2]) < 1e-12 * (bvh.diag || 1)) break; }
  return x;
}

// ---------------------------------------------------------------------------------------- quality

const DIH_EDGES = [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2], [1, 2, 0, 3], [1, 3, 0, 2], [2, 3, 0, 1]];   // edge (a,b), opposite (c,d)

/** Signed volume of tet (a,b,c,d) of coordinates X. */
export function tetVolume(X, a, b, c, d) {
  const ax = X[3 * a], ay = X[3 * a + 1], az = X[3 * a + 2];
  const ux = X[3 * b] - ax, uy = X[3 * b + 1] - ay, uz = X[3 * b + 2] - az, vx = X[3 * c] - ax, vy = X[3 * c + 1] - ay, vz = X[3 * c + 2] - az, wx = X[3 * d] - ax, wy = X[3 * d + 1] - ay, wz = X[3 * d + 2] - az;
  return (ux * (vy * wz - vz * wy) - uy * (vx * wz - vz * wx) + uz * (vx * wy - vy * wx)) / 6;
}

/** Min / max dihedral angle (degrees) and aspect ratio (longest edge ÷ (2√6 × inradius): 1 for a regular tet) of one tet.
 *  Angles from θ = atan2(3V·|e| / (2·A₁A₂), −n₁·n₂) with face normals from the vertex order, so a flat tet reads 0° / 180°. */
export function tetQuality(X, v) {
  const p = v.map((i) => [X[3 * i], X[3 * i + 1], X[3 * i + 2]]);
  const vol = Math.abs(tetVolume(X, ...v));
  const sgn = tetVolume(X, ...v) >= 0 ? 1 : -1;
  // outward normals (×2 area) of the face opposite each vertex, for a positively ordered tet
  const F = [[1, 2, 3], [0, 3, 2], [0, 1, 3], [0, 2, 1]];
  const fn = F.map(([a, b, c]) => cross(sub(p[b], p[a]), sub(p[c], p[a])).map((x) => x * sgn));
  const area = fn.map((n) => Math.hypot(...n) / 2);
  let mn = 180, mx = 0;
  for (const [a, b, c, d] of DIH_EDGES) {
    const n1 = fn[c], n2 = fn[d], A1 = area[c], A2 = area[d], L = Math.hypot(...sub(p[a], p[b]));
    const cs = -(n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2]) / 4, sn = 1.5 * vol * L;   // (A1A2 cos θ, A1A2 sin θ)
    const ang = A1 > 0 && A2 > 0 ? Math.atan2(sn, cs) * 180 / Math.PI : 0;
    if (ang < mn) mn = ang; if (ang > mx) mx = ang;
  }
  const rin = 3 * vol / (area[0] + area[1] + area[2] + area[3] || 1);
  let lmax = 0; for (const [a, b] of DIH_EDGES) lmax = Math.max(lmax, Math.hypot(...sub(p[a], p[b])));
  return { minDih: mn, maxDih: mx, aspect: rin > 0 ? lmax / (2 * Math.sqrt(6) * rin) : Infinity };
}

/** Quality summary of a mesh: min/max dihedral, worst/mean aspect ratio, a histogram of min dihedral angles (10° bins). */
export function meshQuality(nodes, tets) {
  const m = tets.length / 4, hist = new Array(10).fill(0);
  let mn = 180, mx = 0, amax = 0, asum = 0, bad = 0;
  const v = [0, 0, 0, 0];
  for (let e = 0; e < m; e++) {
    v[0] = tets[4 * e]; v[1] = tets[4 * e + 1]; v[2] = tets[4 * e + 2]; v[3] = tets[4 * e + 3];
    const q = tetQuality(nodes, v);
    if (q.minDih < mn) mn = q.minDih; if (q.maxDih > mx) mx = q.maxDih; if (q.aspect > amax) amax = q.aspect; asum += q.aspect;
    hist[Math.min(9, Math.floor(q.minDih / 10))]++;
    if (q.minDih < 5) bad++;
  }
  return { minDihedral: m ? mn : 0, maxDihedral: m ? mx : 0, maxAspect: amax, meanAspect: m ? asum / m : 0, under5: bad, hist };
}

// ---------------------------------------------------------------------------------------- size field

/**
 * The target element size at any point → { at(p), floor, samples } (a graded grid of cell h/2 over the box).
 * opts { h, curv (size ÷ radius, default 0.5), thick (elements through a wall, 2), grade (0.5), levels (3: floor h/8), faces }
 */
export function sizeField(mesh, bvh, { h, curv = 0.5, thick = 2, grade = 0.5, levels = 3, faces = null } = {}) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace, nt = I.length / 3, floor = h / 2 ** levels;
  const samples = [];   // [x, y, z, s]
  const cen = (t) => { const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2]; return [(P[a] + P[b] + P[c]) / 3, (P[a + 1] + P[b + 1] + P[c + 1]) / 3, (P[a + 2] + P[b + 2] + P[c + 2]) / 3]; };
  // faces with an exact surfaces.js record: the radius of curvature from the surface itself, at every triangle's centroid
  // (the tessellation estimate below reads about a third of the true radius on doubly curved faces: the two triangles of
  // a twisted quad turn by the whole quad's angle over a third of its diagonal)
  const surfOf = (t) => (faces && tf && faces[tf[t]] && faces[tf[t]].surf) || null;
  if (curv > 0 && faces && tf) {
    const memo = new Map();
    for (let t = 0; t < nt; t++) {
      const s = surfOf(t); if (!s) continue;
      const c = cen(t);
      let r;
      if (s.type === 'sphere' || s.type === 'torus') { if (!memo.has(s)) memo.set(s, curvatureRadius(s, c, 0)); r = memo.get(s); } else r = curvatureRadius(s, c, Math.max(1e-6 * bvh.diag, 0.05 * h));
      const sz = r * curv;
      if (sz < h) samples.push([c[0], c[1], c[2], Math.max(floor, sz)]);
    }
  }
  // curvature: neighbouring triangles of one face, radius ≈ centroid distance ÷ normal angle
  if (curv > 0) {
    const edges = new Map();
    for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
      const a = I[3 * t + k], b = I[3 * t + (k + 1) % 3], key = a < b ? a * 67108864 + b : b * 67108864 + a, o = edges.get(key);
      if (o === undefined) edges.set(key, t);
      else if (o >= 0) {
        edges.set(key, -1);
        if (tf && tf[o] !== tf[t]) continue;
        if (surfOf(t)) continue;   // done exactly above
        const n1 = bvh.triN(o), n2 = bvh.triN(t), ang = Math.acos(Math.max(-1, Math.min(1, n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2])));
        if (ang < 1e-3) continue;
        const c1 = cen(o), c2 = cen(t), r = Math.hypot(c1[0] - c2[0], c1[1] - c2[1], c1[2] - c2[2]) / ang, s = r * curv;
        if (s < h) samples.push([(P[3 * a] + P[3 * b]) / 2, (P[3 * a + 1] + P[3 * b + 1]) / 2, (P[3 * a + 2] + P[3 * b + 2]) / 2, Math.max(floor, s)]);
      }
    }
  }
  // thickness and gaps: a ray from each triangle in and out; only a wall facing back counts
  if (thick > 0) {
    for (let t = 0; t < nt; t++) {
      const c = cen(t), n = bvh.triN(t), eps = 1e-7 * bvh.diag;
      for (const sgn of [-1, 1]) {
        const o = [c[0] + sgn * eps * n[0], c[1] + sgn * eps * n[1], c[2] + sgn * eps * n[2]], d = [sgn * n[0] * h * 2 * thick, sgn * n[1] * h * 2 * thick, sgn * n[2] * h * 2 * thick];
        let best = Infinity;
        bvh.walk(o, d, 0, 1, (tt, k, th) => { if (tt === t) return false; const m = bvh.triN(tt); if (m[0] * n[0] + m[1] * n[1] + m[2] * n[2] < -0.5 && th < best) best = th; return false; });
        if (best === Infinity) continue;
        const dist = best * h * 2 * thick, s = sgn < 0 ? dist / thick : dist / 1.5;
        if (s < h) samples.push([c[0], c[1], c[2], Math.max(floor, s)]);
      }
    }
  }
  // graded grid: s(n) = min over samples of s_i + grade·|n − p_i|, by chamfer sweeps
  const bb = bvh.bbox, cell = h / 2, pad = 2;
  const o = bb.min.map((v) => v - pad * cell), dims = [0, 1, 2].map((a) => Math.max(1, Math.ceil((bb.max[a] - bb.min[a]) / cell) + 2 * pad + 1));
  const [nx, ny, nz] = dims, G = new Float64Array(nx * ny * nz).fill(h);
  const idx = (i, j, k) => i + nx * (j + ny * k);
  const put = (list) => { for (const [x, y, z, s] of list) {
    const i = Math.round((x - o[0]) / cell), j = Math.round((y - o[1]) / cell), k = Math.round((z - o[2]) / cell);
    if (i < 0 || j < 0 || k < 0 || i >= nx || j >= ny || k >= nz) continue;
    // the sample's own grid node gets s plus the grading over its offset (so the field stays ≤ s + grade·dist)
    const dd = Math.hypot(x - (o[0] + i * cell), y - (o[1] + j * cell), z - (o[2] + k * cell));
    const v = s + grade * dd; if (v < G[idx(i, j, k)]) G[idx(i, j, k)] = Math.max(floor, v);
  } };
  const sweep = () => {
    const nb = []; for (let dk = -1; dk <= 1; dk++) for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) if (di || dj || dk) nb.push([di, dj, dk, grade * cell * Math.hypot(di, dj, dk)]);
    const fwd = nb.filter(([a, b, c]) => c < 0 || (c === 0 && (b < 0 || (b === 0 && a < 0)))), bwd = nb.filter((x) => !fwd.includes(x));
    for (let pass = 0; pass < 2; pass++) {
      for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { let v = G[idx(i, j, k)]; for (const [a, b, c, w] of fwd) { const ii = i + a, jj = j + b, kk = k + c; if (ii < 0 || jj < 0 || kk < 0 || ii >= nx || jj >= ny || kk >= nz) continue; const u = G[idx(ii, jj, kk)] + w; if (u < v) v = u; } G[idx(i, j, k)] = v; }
      for (let k = nz - 1; k >= 0; k--) for (let j = ny - 1; j >= 0; j--) for (let i = nx - 1; i >= 0; i--) { let v = G[idx(i, j, k)]; for (const [a, b, c, w] of bwd) { const ii = i + a, jj = j + b, kk = k + c; if (ii < 0 || jj < 0 || kk < 0 || ii >= nx || jj >= ny || kk >= nz) continue; const u = G[idx(ii, jj, kk)] + w; if (u < v) v = u; } G[idx(i, j, k)] = v; }
    }
  };
  put(samples);
  if (samples.length) sweep();
  const at = (p) => {
    const fx = (p[0] - o[0]) / cell, fy = (p[1] - o[1]) / cell, fz = (p[2] - o[2]) / cell;
    const i = Math.max(0, Math.min(nx - 2, Math.floor(fx))), j = Math.max(0, Math.min(ny - 2, Math.floor(fy))), k = Math.max(0, Math.min(nz - 2, Math.floor(fz)));
    let v = h;
    for (let c = 0; c < 8; c++) { const ii = Math.min(nx - 1, i + (c & 1)), jj = Math.min(ny - 1, j + ((c >> 1) & 1)), kk = Math.min(nz - 1, k + ((c >> 2) & 1)); const g = G[idx(ii, jj, kk)]; if (g < v) v = g; }
    return v;
  };
  const field = { at, floor, samples: samples.length, grid: G, dims, origin: o, cell, scale(f) { for (let i = 0; i < G.length; i++) G[i] = Math.max(floor, Math.min(h, f(G[i], i))); },
    /** more samples [x, y, z, size] (graded like the first) */
    add(list) { put(list); if (list.length) { field.samples += list.length; sweep(); } } };
  return field;
}

// ---------------------------------------------------------------------------------------- background lattice

const ALPHA_LONG = 0.24999, ALPHA_SHORT = 0.41189, ALPHA_MID = 0.33;

/** A growable store of points (Float64) */
export class Pts {
  constructor(n = 1024) { this.a = new Float64Array(3 * n); this.n = 0; }
  push(x, y, z) { if (3 * this.n + 3 > this.a.length) { const b = new Float64Array(this.a.length * 2); b.set(this.a); this.a = b; } const i = this.n++; this.a[3 * i] = x; this.a[3 * i + 1] = y; this.a[3 * i + 2] = z; return i; }
  get(i) { return [this.a[3 * i], this.a[3 * i + 1], this.a[3 * i + 2]]; }
}
const ekey = (a, b) => (a < b ? a * 67108864 + b : b * 67108864 + a);

/**
 * BCC lattice over box (padded one cube) → { pts, tets: number[] (flat 4s), spacing, cubes }. The spacing is ≤ h: the
 * box's thinnest side is a whole number of cubes, and each other side too when that stretches the cube ≤ 8 %; a side
 * that would need more stays unaligned at its far end (its faces are cut, not lattice planes).
 */
export function bccLattice(bbox, h) {
  const L = [0, 1, 2].map((a) => bbox.max[a] - bbox.min[a]), lmin = Math.max(Math.min(...L), 1e-9 * Math.max(...L));
  const s0 = lmin / Math.ceil(lmin / h - 1e-9), s = s0 >= h / 2 ? s0 : h;   // a side under h/2 is left to the size field
  const n = [0, 1, 2].map((a) => { const k = Math.max(1, Math.round(L[a] / s)); return Math.abs(L[a] / (k * s) - 1) <= 0.08 ? k : Math.ceil(L[a] / s); });
  const sp = [0, 1, 2].map((a) => (Math.abs(L[a] / (n[a] * s) - 1) <= 0.08 ? L[a] / n[a] : s) || s);
  const pts = new Pts(), NC = n.map((v) => v + 3), CC = n.map((v) => v + 2);   // corners i = −1 … n+1, centres −1 … n
  const corner = (i, j, k) => (i + 1) + NC[0] * ((j + 1) + NC[1] * (k + 1));
  for (let k = -1; k <= n[2] + 1; k++) for (let j = -1; j <= n[1] + 1; j++) for (let i = -1; i <= n[0] + 1; i++) pts.push(bbox.min[0] + i * sp[0], bbox.min[1] + j * sp[1], bbox.min[2] + k * sp[2]);
  const c0 = pts.n, centre = (i, j, k) => c0 + (i + 1) + CC[0] * ((j + 1) + CC[1] * (k + 1));
  for (let k = -1; k <= n[2]; k++) for (let j = -1; j <= n[1]; j++) for (let i = -1; i <= n[0]; i++) pts.push(bbox.min[0] + (i + 0.5) * sp[0], bbox.min[1] + (j + 0.5) * sp[1], bbox.min[2] + (k + 0.5) * sp[2]);
  const tets = [];
  const add = (a, b, c, d) => { if (tetVolume(pts.a, a, b, c, d) < 0) tets.push(a, b, d, c); else tets.push(a, b, c, d); };
  for (let k = -1; k <= n[2]; k++) for (let j = -1; j <= n[1]; j++) for (let i = -1; i <= n[0]; i++) {
    const c1 = centre(i, j, k);
    // the faces towards +x, +y, +z neighbours: 4 tets (c1, c2, face edge)
    if (i < n[0]) { const c2 = centre(i + 1, j, k), q = [corner(i + 1, j, k), corner(i + 1, j + 1, k), corner(i + 1, j + 1, k + 1), corner(i + 1, j, k + 1)]; for (let m = 0; m < 4; m++) add(c1, c2, q[m], q[(m + 1) % 4]); }
    if (j < n[1]) { const c2 = centre(i, j + 1, k), q = [corner(i, j + 1, k), corner(i + 1, j + 1, k), corner(i + 1, j + 1, k + 1), corner(i, j + 1, k + 1)]; for (let m = 0; m < 4; m++) add(c1, c2, q[m], q[(m + 1) % 4]); }
    if (k < n[2]) { const c2 = centre(i, j, k + 1), q = [corner(i, j, k + 1), corner(i + 1, j, k + 1), corner(i + 1, j + 1, k + 1), corner(i, j + 1, k + 1)]; for (let m = 0; m < 4; m++) add(c1, c2, q[m], q[(m + 1) % 4]); }
  }
  return { pts, tets, spacing: sp, cubes: n };
}

/**
 * Conforming longest-edge bisection of the tets for which want(tetIndex, verts, tags) is true, repeated (want is asked
 * again of the children) up to `rounds` times. Ties in length break by vertex ids so neighbours agree. Mutates.
 * tags { a: array per tet }: carried to the children (both halves inherit), tags.a replaced at the end.
 */
export function bisectRefine(pts, tets, want, { rounds = 12, maxTets = Infinity, onNew = null, tags = null } = {}) {
  const mid = new Map();
  const q2 = (a, b) => { const A = pts.a; return (A[3 * a] - A[3 * b]) ** 2 + (A[3 * a + 1] - A[3 * b + 1]) ** 2 + (A[3 * a + 2] - A[3 * b + 2]) ** 2; };
  let unit = 0; for (let e = 0; e < Math.min(tets.length / 4, 50); e++) unit = Math.max(unit, q2(tets[4 * e], tets[4 * e + 1]));
  unit = unit || 1;
  const PAIRS = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
  const longest = (T, e) => {   // → index into PAIRS
    let best = -1, bl = -1, bk = -1;
    for (let p = 0; p < 6; p++) {
      const a = T[4 * e + PAIRS[p][0]], b = T[4 * e + PAIRS[p][1]], l = Math.round(q2(a, b) / unit * 1e7), k = ekey(a, b);
      if (l > bl || (l === bl && k < bk)) { bl = l; bk = k; best = p; }
    }
    return best;
  };
  let T = tets, G = tags ? tags.a : null;   // tags { a: per-tet values }: children inherit their parent's (tags.a replaced)
  for (let round = 0; round < rounds; round++) {
    const marked = new Set();
    const m0 = T.length / 4;
    for (let e = 0; e < m0; e++) if (want(e, T, G)) { const p = longest(T, e); marked.add(ekey(T[4 * e + PAIRS[p][0]], T[4 * e + PAIRS[p][1]])); }
    if (!marked.size) break;
    if (m0 + 2 * marked.size > maxTets) break;
    for (let guard = 0; guard < 200; guard++) {
      // closure: a tet with a marked edge has its longest edge marked
      for (let changed = true; changed;) {
        changed = false;
        for (let e = 0; e < T.length / 4; e++) {
          let any = false; for (const [i, j] of PAIRS) if (marked.has(ekey(T[4 * e + i], T[4 * e + j]))) { any = true; break; }
          if (!any) continue;
          const p = longest(T, e), k = ekey(T[4 * e + PAIRS[p][0]], T[4 * e + PAIRS[p][1]]);
          if (!marked.has(k)) { marked.add(k); changed = true; }
        }
      }
      const N = [], NG = G ? [] : null; let split = 0;
      for (let e = 0; e < T.length / 4; e++) {
        const p = longest(T, e), i = PAIRS[p][0], j = PAIRS[p][1], a = T[4 * e + i], b = T[4 * e + j], k = ekey(a, b);
        if (!marked.has(k)) { N.push(T[4 * e], T[4 * e + 1], T[4 * e + 2], T[4 * e + 3]); if (G) NG.push(G[e]); continue; }
        let m = mid.get(k);
        if (m === undefined) { const A = pts.a; m = pts.push((A[3 * a] + A[3 * b]) / 2, (A[3 * a + 1] + A[3 * b + 1]) / 2, (A[3 * a + 2] + A[3 * b + 2]) / 2); mid.set(k, m); if (onNew) onNew(m, a, b); }
        const c1 = [T[4 * e], T[4 * e + 1], T[4 * e + 2], T[4 * e + 3]], c2 = c1.slice();
        c1[j] = m; c2[i] = m;   // replacing one end keeps the orientation
        N.push(...c1, ...c2); split++;
        if (G) NG.push(G[e], G[e]);
      }
      T = N; if (G) G = NG;
      if (!split) break;
    }
  }
  if (tags) tags.a = G;
  return T;
}

// ---------------------------------------------------------------------------------------- stuffing

/**
 * The whole mesher. mesh {positions, indices, triFace, edgeSegs?}, faces (regen.faces: type, n/o or axis/r) →
 * linear tet mesh (see the header). opts { h (target size), curv, thick, grade, levels, maxTets, sizeScale?(field) }
 */
export function tetMesh(mesh, faces = [], opts = {}) {
  const t0 = Date.now(), prog = opts.onProgress || (() => {});
  const bvh = opts.bvh || buildBVH(mesh);
  if (!bvh.bbox) throw new Error(t('study.tet.no_surface'));
  const h = opts.h, diag = bvh.diag, epsOn = 1e-8 * diag;
  if (!(h > 0)) throw new Error(t('study.mesh.size_positive'));
  prog(0.02, 'Size field');   // i18n-ignore: progress label, never shown
  const field = opts.field || sizeField(mesh, bvh, { h, curv: opts.curv ?? 0.5, thick: opts.thick ?? 2, grade: opts.grade ?? 0.5, levels: opts.levels ?? 3, faces });
  // stuff; where a boundary triangle straddles a sharp edge (a chamfer: its centroid off the surface by > 6 % of its
  // size) halve the size there and stuff again, up to `featurePasses` times (no lower than the floor)
  const passes = opts.featurePasses ?? 3;
  let res = null;
  for (let pass = 0; ; pass++) {
    res = stuffOnce(mesh, faces, bvh, field, { ...opts, h, epsOn, prog: (f, t) => prog((pass + f) / (passes + 1), t) });
    const add = pass < passes ? chamfers(res, bvh, field) : [];
    res.stats.chamfers = add.chamfers ?? res.stats.chamfers;
    if (!add.length) { res.stats.featurePasses = pass; break; }
    field.add(add);
  }
  res.stats.ms = Date.now() - t0;
  res.field = field;
  return res;
}

/** Boundary triangles off the surface (chamfers) → size samples at half their size (none at the floor), .chamfers = count */
function chamfers(res, bvh, field) {
  const { nodes, btri } = res, out = [];
  let n = 0;
  for (let t = 0; t < btri.length / 3; t++) {
    const v = [btri[3 * t], btri[3 * t + 1], btri[3 * t + 2]], c = [0, 1, 2].map((a) => (nodes[3 * v[0] + a] + nodes[3 * v[1] + a] + nodes[3 * v[2] + a]) / 3);
    let L = 0; for (let k = 0; k < 3; k++) { const a = v[k], b = v[(k + 1) % 3]; L = Math.max(L, Math.hypot(nodes[3 * a] - nodes[3 * b], nodes[3 * a + 1] - nodes[3 * b + 1], nodes[3 * a + 2] - nodes[3 * b + 2])); }
    const d = Math.sqrt(bvh.closest(c).d2);
    if (d <= 0.06 * L) continue;
    n++;
    const s = L / 2;
    if (s < field.floor * 1.01 || field.at(c) < s) continue;
    out.push([c[0], c[1], c[2], s]);
    for (const k of v) out.push([nodes[3 * k], nodes[3 * k + 1], nodes[3 * k + 2], s]);
  }
  out.chamfers = n;
  return out;
}

/** One stuffing on the current size field (see the header). */
function stuffOnce(mesh, faces, bvh, field, opts) {
  const { h, epsOn, prog } = opts;
  const lat = bccLattice(bvh.bbox, h), pts = lat.pts;
  const maxTets = opts.maxTets || 400000;
  if (lat.tets.length / 4 > maxTets * 8) throw new Error(t('study.mesh.too_many'));
  // vertex classes: −1 in, +1 out (0 = warped onto the surface, later); computed when first asked. A vertex ON the
  // surface counts as in (onSurf): an edge from it that runs along the surface (a lattice plane in a flat face) gets a
  // cut point where it leaves the part, so a sharp edge between that face and another is found; an edge that leaves
  // the part at once is cut at the vertex itself (merged; the tets it would make are flat and dropped).
  let sign = new Int8Array(pts.n + 1024), known = new Uint8Array(pts.n + 1024), onSurf = new Uint8Array(pts.n + 1024);
  const grow = () => { if (pts.n > sign.length) { const s = new Int8Array(pts.n * 2), k = new Uint8Array(pts.n * 2), o = new Uint8Array(pts.n * 2); s.set(sign); k.set(known); o.set(onSurf); sign = s; known = k; onSurf = o; } };
  const cls = (v) => { grow(); if (known[v]) return sign[v]; const p = pts.get(v); if (bvh.near(p, epsOn)) { sign[v] = -1; onSurf[v] = 1; } else sign[v] = bvh.inside(p) ? -1 : 1; known[v] = 1; return sign[v]; };
  // keep the lattice tets that touch the part: a vertex not outside, or a vertex within the tet's size of the surface
  prog(0.06, 'Lattice');
  const lmax0 = Math.hypot(...lat.spacing);
  const nearMemo = new Int8Array(pts.n);   // 0 unknown, 1 near, 2 far (within the lattice diagonal)
  const isNear = (v) => { if (!nearMemo[v]) nearMemo[v] = bvh.near(pts.get(v), lmax0) ? 1 : 2; return nearMemo[v] === 1; };
  let T = [];
  for (let e = 0; e < lat.tets.length / 4; e++) {
    const v = lat.tets.slice(4 * e, 4 * e + 4);
    if (v.some((x) => cls(x) <= 0) || v.some(isNear)) T.push(...v);
  }
  // refine where the size field asks (only tets touching the part)
  prog(0.12, 'Grading');
  const tlen = (Tt, e) => { let l = 0; for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) { const a = Tt[4 * e + i], b = Tt[4 * e + j]; l = Math.max(l, Math.hypot(pts.a[3 * a] - pts.a[3 * b], pts.a[3 * a + 1] - pts.a[3 * b + 1], pts.a[3 * a + 2] - pts.a[3 * b + 2])); } return l; };
  if (field.samples || opts.forceRefine) {
    T = bisectRefine(pts, T, (e, Tt) => {
      const L = tlen(Tt, e), A = pts.a;
      // the lattice's own tets have longest edge ≈ the spacing: refine when longer than the size wanted (+ 10 % slack)
      let s = Infinity;
      for (let i = 0; i < 4; i++) { const v = Tt[4 * e + i]; s = Math.min(s, field.at([A[3 * v], A[3 * v + 1], A[3 * v + 2]])); }
      const c = [0, 1, 2].map((a) => (A[3 * Tt[4 * e] + a] + A[3 * Tt[4 * e + 1] + a] + A[3 * Tt[4 * e + 2] + a] + A[3 * Tt[4 * e + 3] + a]) / 4);
      s = Math.min(s, field.at(c));
      if (L <= 1.1 * s) return false;
      // only near the part
      let touch = false;
      for (let i = 0; i < 4 && !touch; i++) { const v = Tt[4 * e + i]; if (cls(v) <= 0 || bvh.near(pts.get(v), L)) touch = true; }
      return touch;
    }, { rounds: 3 * (opts.levels ?? 3) + 3, maxTets });
    // drop tets now well away from the part
    const K = [];
    for (let e = 0; e < T.length / 4; e++) { const v = [T[4 * e], T[4 * e + 1], T[4 * e + 2], T[4 * e + 3]], L = tlen(T, e); if (v.some((x) => cls(x) <= 0) || v.some((x) => bvh.near(pts.get(x), L))) K.push(...v); }
    T = K;
  }
  if (T.length / 4 > maxTets) throw new Error(t('study.tet.too_many_background', { n: Math.round(T.length / 4).toLocaleString('en-US'), max: maxTets.toLocaleString('en-US') }));
  for (let i = 0; i < T.length; i++) cls(T[i]);
  prog(0.3, 'Cut points');   // i18n-ignore: progress label, never shown
  // edges, cut points (fraction from the inside end), and warping
  const PAIRS = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
  const cut = new Map();   // edge key → [x, y, z] of the cut point
  const alpha = (a, b) => {
    const A = pts.a, d = [Math.abs(A[3 * a] - A[3 * b]) / lat.spacing[0], Math.abs(A[3 * a + 1] - A[3 * b + 1]) / lat.spacing[1], Math.abs(A[3 * a + 2] - A[3 * b + 2]) / lat.spacing[2]], l = Math.hypot(...d), mx = Math.max(...d), mn = Math.min(...d);
    return mx > 0.95 * l ? ALPHA_LONG : mn > 0.45 * l ? ALPHA_SHORT : ALPHA_MID;
  };
  const cutPoint = (a, b) => {   // a inside, b outside
    const pa = pts.get(a), pb = pts.get(b), d = [pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]];
    let tmin = 0;
    if (onSurf[a]) {
      const dl = 1e-4, q = [pa[0] + dl * d[0], pa[1] + dl * d[1], pa[2] + dl * d[2]];
      if (!bvh.near(q, epsOn) && !bvh.inside(q)) return { t: 0, p: pa };
      tmin = dl;
    }
    const hh = bvh.firstHit(pa, d, 1, tmin);
    let t = hh ? hh.t : 0.5;
    if (!hh) {   // classification and the ray disagree (a grazing edge): bisect on the classification (on = in)
      let lo = tmin, hi = 1;
      for (let it = 0; it < 40; it++) { const m = (lo + hi) / 2, p = [pa[0] + m * d[0], pa[1] + m * d[1], pa[2] + m * d[2]]; if (bvh.near(p, epsOn) || bvh.inside(p)) lo = m; else hi = m; }
      t = (lo + hi) / 2;
    }
    return { t, p: [pa[0] + t * d[0], pa[1] + t * d[1], pa[2] + t * d[2]] };
  };
  const edgeList = new Map();
  for (let e = 0; e < T.length / 4; e++) for (const [i, j] of PAIRS) { const a = T[4 * e + i], b = T[4 * e + j]; const k = ekey(a, b); if (!edgeList.has(k)) edgeList.set(k, a < b ? [a, b] : [b, a]); }
  const warpTo = new Map();   // vertex → [dist², point]
  for (const [k, [a, b]] of edgeList) {
    if (sign[a] * sign[b] !== -1) continue;
    const [inn, out] = sign[a] < 0 ? [a, b] : [b, a], c = cutPoint(inn, out), al = alpha(a, b);
    cut.set(k, c.t > 0 ? c.p : inn);   // a number: merged into that vertex
    if (c.t === 0) continue;
    const L = Math.hypot(...[0, 1, 2].map((x) => pts.a[3 * a + x] - pts.a[3 * b + x]));
    for (const [v, f] of [[inn, c.t], [out, 1 - c.t]]) if (f < al) { const d = f * L, w = warpTo.get(v); if (!w || d < w[0]) warpTo.set(v, [d, c.p]); }
  }
  for (const [v, [, p]] of warpTo) { pts.a[3 * v] = p[0]; pts.a[3 * v + 1] = p[1]; pts.a[3 * v + 2] = p[2]; sign[v] = 0; }
  for (const [k, [a, b]] of edgeList) if (cut.has(k) && (sign[a] === 0 || sign[b] === 0)) cut.delete(k);
  prog(0.45, 'Stuffing');
  // output vertices: lattice vertices ≤ 0 used, and cut points
  const outIdx = new Map(), cutIdx = new Map(), X = new Pts(T.length / 2);
  const surfOut = [];   // output vertex → on the surface (a cut point, a warped vertex, a lattice vertex lying on it)
  const vid = (v) => { let i = outIdx.get(v); if (i === undefined) { i = X.push(pts.a[3 * v], pts.a[3 * v + 1], pts.a[3 * v + 2]); outIdx.set(v, i); surfOut[i] = sign[v] === 0 || onSurf[v] === 1; } return i; };
  // i18n-ignore-next: 'internal: missing cut point' is an internal assertion
  const cid = (a, b) => { const k = ekey(a, b); let i = cutIdx.get(k); if (i === undefined) { const p = cut.get(k); if (p === undefined) throw new Error('internal: missing cut point'); i = typeof p === 'number' ? vid(p) : X.push(p[0], p[1], p[2]); surfOut[i] = true; cutIdx.set(k, i); } return i; };
  const out = [];
  let steiner = 0, flat = 0;
  const emit = (a, b, c, d) => {
    if (a === b || a === c || a === d || b === c || b === d || c === d) { flat++; return; }
    // four corners on the surface and flat: a sliver lying along it (no volume): left out, its faces join the boundary
    if (surfOut[a] && surfOut[b] && surfOut[c] && surfOut[d] && tetQuality(X.a, [a, b, c, d]).minDih < 5) { flat++; return; }
    if (tetVolume(X.a, a, b, c, d) < 0) out.push(a, b, d, c); else out.push(a, b, c, d); };
  // a quad (a, b, cb, ca) on a background face, a/b lattice vertices: diagonal a–cb (true) or b–ca
  const diagAcb = (a, b, ca, cb, ga, gb) => {
    const d1 = Math.hypot(...[0, 1, 2].map((x) => X.a[3 * a + x] - X.a[3 * cb + x])), d2 = Math.hypot(...[0, 1, 2].map((x) => X.a[3 * b + x] - X.a[3 * ca + x]));
    if (Math.abs(d1 - d2) > 1e-9 * (d1 + d2)) return d1 < d2;
    return ga < gb;
  };
  // prism A0A1A2–B0B1B2 (Ai–Bi lateral), diag[k] for quad (Ak, Ak+1): true = Ak–Bk+1, false = Ak+1–Bk
  const prism = (A, B, dg) => {
    const cntA = [0, 0, 0], cntB = [0, 0, 0];
    for (let k = 0; k < 3; k++) { const k1 = (k + 1) % 3; if (dg[k]) { cntA[k]++; cntB[k1]++; } else { cntA[k1]++; cntB[k]++; } }
    for (let i = 0; i < 3; i++) {
      if (cntA[i] === 2) { emit(A[i], B[0], B[1], B[2]); const j = (i + 1) % 3, k = (i + 2) % 3; pyramid(A[i], [A[j], A[k], B[k], B[j]], dg[j]); return; }
      if (cntB[i] === 2) { emit(B[i], A[0], A[1], A[2]); const j = (i + 1) % 3, k = (i + 2) % 3; pyramid(B[i], [A[j], A[k], B[k], B[j]], dg[j]); return; }
    }
    // cyclic: a centre point
    const c = X.push(...[0, 1, 2].map((x) => (X.a[3 * A[0] + x] + X.a[3 * A[1] + x] + X.a[3 * A[2] + x] + X.a[3 * B[0] + x] + X.a[3 * B[1] + x] + X.a[3 * B[2] + x]) / 6));
    steiner++;
    emit(c, A[0], A[1], A[2]); emit(c, B[0], B[1], B[2]);
    for (let k = 0; k < 3; k++) { const k1 = (k + 1) % 3; if (dg[k]) { emit(c, A[k], A[k1], B[k1]); emit(c, A[k], B[k1], B[k]); } else { emit(c, A[k], A[k1], B[k]); emit(c, A[k1], B[k1], B[k]); } }
  };
  // pyramid apex z over quad q (cyclic order) split along q0–q2 (d02) or q1–q3
  const pyramid = (z, q, d02) => {
    if (d02) { emit(z, q[0], q[1], q[2]); emit(z, q[0], q[2], q[3]); } else { emit(z, q[1], q[2], q[3]); emit(z, q[1], q[3], q[0]); }
  };
  for (let e = 0; e < T.length / 4; e++) {
    const v = [T[4 * e], T[4 * e + 1], T[4 * e + 2], T[4 * e + 3]], s = v.map((x) => sign[x]);
    const neg = v.filter((x, i) => s[i] < 0), zer = v.filter((x, i) => s[i] === 0), pos = v.filter((x, i) => s[i] > 0);
    // all four on the surface (warped, or lattice vertices lying on it): kept when the centre is inside and the tet is
    // not a sliver along the surface (dropping one leaves boundary faces whose corners are all on the surface)
    if (v.every((x) => sign[x] === 0 || onSurf[x])) {
      const c = [0, 1, 2].map((a) => (pts.a[3 * v[0] + a] + pts.a[3 * v[1] + a] + pts.a[3 * v[2] + a] + pts.a[3 * v[3] + a]) / 4);
      if (tetQuality(pts.a, v).minDih >= 5 && bvh.inside(c)) emit(...v.map(vid)); else flat++;
      continue;
    }
    if (!neg.length) continue;
    if (!pos.length) { emit(...v.map(vid)); continue; }
    if (neg.length === 1) {
      const a = neg[0], rest = [...zer.map(vid), ...pos.map((p) => cid(a, p))];
      emit(vid(a), ...rest); continue;
    }
    if (neg.length === 2 && pos.length === 2) {
      const [a, b] = neg, [p, q] = pos, A = vid(a), B = vid(b), cap = cid(a, p), caq = cid(a, q), cbp = cid(b, p), cbq = cid(b, q);
      // prism bottom (A, cap, caq), top (B, cbp, cbq); quads: k=0 (A,cap | B,cbp) = face (a,b,p); k=1 (cap,caq | cbp,cbq) = iso; k=2 (caq,A | cbq,B) = face (a,b,q)
      const d0 = diagAcb(A, B, cap, cbp, a, b);   // A–cbp ?  in prism terms quad k=0 is (A0=A, A1=cap, B1=cbp, B0=B): Ak–Bk+1 = A–cbp
      const d2a = diagAcb(A, B, caq, cbq, a, b);  // A–cbq ?  quad k=2 is (A2=caq, A0=A, B0=B, B2=cbq): Ak–Bk+1 = caq–B, so A–cbq is "false"
      const opts2 = [true, false].map((d1) => [d0, d1, !d2a]);
      // the iso quad is free: take an acyclic choice, the shorter diagonal first
      const len = (i, j) => Math.hypot(...[0, 1, 2].map((x) => X.a[3 * i + x] - X.a[3 * j + x]));
      opts2.sort((u, w) => (u[1] ? len(cap, cbq) : len(caq, cbp)) - (w[1] ? len(cap, cbq) : len(caq, cbp)));
      const acyc = (dg) => { const c = [0, 0, 0, 0, 0, 0]; for (let k = 0; k < 3; k++) { const k1 = (k + 1) % 3; if (dg[k]) { c[k]++; c[3 + k1]++; } else { c[k1]++; c[3 + k]++; } } return c.some((x) => x === 2); };
      prism([A, cap, caq], [B, cbp, cbq], opts2.find(acyc) || opts2[0]);
      continue;
    }
    if (neg.length === 2 && zer.length === 1) {
      const [a, b] = neg, p = pos[0], A = vid(a), B = vid(b), cap = cid(a, p), cbp = cid(b, p);
      pyramid(vid(zer[0]), [A, B, cbp, cap], diagAcb(A, B, cap, cbp, a, b));
      continue;
    }
    if (neg.length === 3) {
      const [a, b, c] = neg, p = pos[0], A = [vid(a), vid(b), vid(c)], B = [cid(a, p), cid(b, p), cid(c, p)];
      // quad k: (Ak, Ak+1, Bk+1, Bk) on face (k, k+1, p); diagonal Ak–Bk+1 when diagAcb(Ak, Ak+1, Bk, Bk+1)
      const g = [a, b, c];
      prism(A, B, [0, 1, 2].map((k) => diagAcb(A[k], A[(k + 1) % 3], B[k], B[(k + 1) % 3], g[k], g[(k + 1) % 3])));
      continue;
    }
    throw new Error('internal: unhandled stencil');   // i18n-ignore: internal assertion
  }
  prog(0.6, 'Boundary');
  const res = finishMesh(X, out, mesh, faces, bvh, { h, steiner, background: T.length / 4, snap: opts.snap !== false });
  res.stats.flatDropped = flat;
  return res;
}

/** Compact, find the boundary, give each boundary triangle its B-rep face, project / snap boundary vertices. */
function finishMesh(X, out, mesh, faces, bvh, { h, steiner, background, snap }) {
  // drop unused vertices
  const used = new Int32Array(X.n).fill(-1); let nn = 0;
  for (const v of out) if (used[v] < 0) used[v] = nn++;
  const nodes = new Float64Array(3 * nn);
  for (let v = 0; v < X.n; v++) if (used[v] >= 0) { nodes[3 * used[v]] = X.a[3 * v]; nodes[3 * used[v] + 1] = X.a[3 * v + 1]; nodes[3 * used[v] + 2] = X.a[3 * v + 2]; }
  const tets = Int32Array.from(out, (v) => used[v]);
  const m = tets.length / 4;
  // boundary faces: used once (outward = the face opposite vertex k, wound so its normal points away from k)
  const FACES = [[1, 2, 3], [0, 3, 2], [0, 1, 3], [0, 2, 1]];
  const fmap = new Map();
  for (let e = 0; e < m; e++) for (let k = 0; k < 4; k++) {
    const f = FACES[k].map((i) => tets[4 * e + i]), s = f.slice().sort((x, y) => x - y), key = s[0] + ',' + s[1] + ',' + s[2];
    if (fmap.has(key)) fmap.delete(key); else fmap.set(key, f);
  }
  const btri = new Int32Array(fmap.size * 3); let bi = 0;
  for (const f of fmap.values()) { btri[bi++] = f[0]; btri[bi++] = f[1]; btri[bi++] = f[2]; }
  const smoothed = improveInterior(nodes, tets, btri, 10);
  const nb = btri.length / 3, bface = new Int32Array(nb).fill(-1), tf = mesh.triFace;
  const cen = (t) => [0, 1, 2].map((a) => (nodes[3 * btri[3 * t] + a] + nodes[3 * btri[3 * t + 1] + a] + nodes[3 * btri[3 * t + 2] + a]) / 3);
  const assign = () => { for (let t = 0; t < nb; t++) { const c = bvh.closest(cen(t)); bface[t] = c.tri >= 0 && tf ? tf[c.tri] : c.tri >= 0 ? 0 : -1; } };
  assign();
  // vertex → set of faces of its boundary triangles; tets around each vertex (for quality checks)
  const vfaces = new Map();
  for (let t = 0; t < nb; t++) for (let k = 0; k < 3; k++) { const v = btri[3 * t + k]; let s = vfaces.get(v); if (!s) vfaces.set(v, (s = new Set())); if (bface[t] >= 0) s.add(bface[t]); }
  const vtet = new Map();
  for (let e = 0; e < m; e++) for (let k = 0; k < 4; k++) { const v = tets[4 * e + k]; if (!vfaces.has(v)) continue; let l = vtet.get(v); if (!l) vtet.set(v, (l = [])); l.push(e); }
  const okAround = (v, minDih) => (vtet.get(v) || []).every((e) => { const q = [tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]]; return tetVolume(nodes, ...q) > 0 && tetQuality(nodes, q).minDih >= minDih; });
  const moveTo = (v, p, minDih) => {
    const old = [nodes[3 * v], nodes[3 * v + 1], nodes[3 * v + 2]];
    const before = Math.min(...(vtet.get(v) || []).map((e) => tetQuality(nodes, [tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]]).minDih));
    nodes[3 * v] = p[0]; nodes[3 * v + 1] = p[1]; nodes[3 * v + 2] = p[2];
    if (okAround(v, Math.min(minDih, before))) return true;
    nodes[3 * v] = old[0]; nodes[3 * v + 1] = old[1]; nodes[3 * v + 2] = old[2];
    return false;
  };
  let snapped = 0, projected = 0;
  // snap vertices near B-rep edges (where the stuffing chamfered a sharp edge) onto them
  if (snap && mesh.edgeSegs && mesh.edgeSegs.length) {
    const S = mesh.edgeSegs, ns = S.length / 6;
    const segClosest = (p) => {
      let best = Infinity, bp = null;
      for (let s = 0; s < ns; s++) {
        const ax = S[6 * s], ay = S[6 * s + 1], az = S[6 * s + 2], dx = S[6 * s + 3] - ax, dy = S[6 * s + 4] - ay, dz = S[6 * s + 5] - az, l2 = dx * dx + dy * dy + dz * dz;
        let t = l2 > 0 ? ((p[0] - ax) * dx + (p[1] - ay) * dy + (p[2] - az) * dz) / l2 : 0; t = Math.max(0, Math.min(1, t));
        const x = ax + t * dx, y = ay + t * dy, z = az + t * dz, d = (p[0] - x) ** 2 + (p[1] - y) ** 2 + (p[2] - z) ** 2;
        if (d < best) { best = d; bp = [x, y, z]; }
      }
      return { d: Math.sqrt(best), p: bp };
    };
    // candidates: on boundary triangles of ≥ 2 faces (a chamfer straddles the edge), nearest the edge first; one per
    // stretch of edge (not within 0.6 × its local size of a vertex already there), and only if no tet drops below 12°
    const cand = [], on = [];
    for (const [v, fs] of vfaces) {
      if (fs.size < 2) continue;
      const p = [nodes[3 * v], nodes[3 * v + 1], nodes[3 * v + 2]], c = segClosest(p);
      if (!c.p) continue;
      let ls = 0, ln = 0;
      for (const e of vtet.get(v) || []) for (let k = 0; k < 4; k++) { const w = tets[4 * e + k]; if (w !== v) { ls += Math.hypot(nodes[3 * w] - p[0], nodes[3 * w + 1] - p[1], nodes[3 * w + 2] - p[2]); ln++; } }
      const hl = ln ? ls / ln : h;
      if (c.d < 1e-7 * bvh.diag) { on.push([c.p, hl]); continue; }
      if (c.d < 0.45 * hl) cand.push([c.d, v, c.p, hl]);
    }
    cand.sort((a, b) => a[0] - b[0]);
    const taken = (p, hl) => on.some(([q, hq]) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 0.6 * Math.min(hl, hq));
    for (const [, v, p, hl] of cand) {
      if (taken(p, hl)) continue;
      if (moveTo(v, p, 12)) { snapped++; on.push([p, hl]); }
    }
    if (snapped) assign();
    vfaces.clear();
    for (let t = 0; t < nb; t++) for (let k = 0; k < 3; k++) { const v = btri[3 * t + k]; let s = vfaces.get(v); if (!s) vfaces.set(v, (s = new Set())); if (bface[t] >= 0) s.add(bface[t]); }
  }
  // project boundary vertices onto the exact surfaces (planes, cylinders, surfaces.js records; both faces alternately at an edge)
  for (const [v, fs] of vfaces) {
    const list = [...fs];
    if (!list.length || list.length > 3 || !list.every((fi) => exactFace(faces[fi]))) continue;
    const p = [nodes[3 * v], nodes[3 * v + 1], nodes[3 * v + 2]], q = projectToFaces(p, list, faces, bvh, tf);
    const d = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
    if (d < 1e-12 * bvh.diag || d > 0.25 * h) continue;
    if (moveTo(v, q, 10)) projected++;
  }
  // slivers the projection or the stuffing left (e.g. four points in one plane through a cylinder's ruling): their
  // interior vertices moved again
  const smoothed2 = improveInterior(nodes, tets, btri, 10);
  const quality = meshQuality(nodes, tets);
  let vol = 0; for (let e = 0; e < m; e++) vol += tetVolume(nodes, tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]);
  return { nodes, tets, btri, bface, quality, stats: { nodes: nn, tets: m, boundaryTris: nb, steiner, background, snapped, projected, smoothed: smoothed + smoothed2, volume: vol, h, ...faceCounts(bface, faces) } };
}

/** Faces the boundary uses: how many have an exact surface, and which follow the tessellation (their types). */
export function faceCounts(bface, faces) {
  const used = new Set(bface); used.delete(-1);
  let exact = 0; const tess = [];
  for (const fi of used) { if (exactFace(faces[fi])) exact++; else tess.push(faces[fi] ? faces[fi].type || 'other' : 'unknown'); }
  return { exactFaces: exact, tessFaces: tess.length, tessTypes: [...new Set(tess)] };
}

/**
 * Interior vertices of tets whose smallest dihedral angle is under `minDih`: moved to the centre of their neighbours,
 * or part way there, when that raises the worst angle of the tets around them (3 sweeps). → vertices moved
 */
export function improveInterior(nodes, tets, btri, minDih = 10) {
  const m = tets.length / 4, nn = nodes.length / 3, onB = new Uint8Array(nn);
  for (const v of btri) onB[v] = 1;
  const vt = Array.from({ length: nn }, () => []);
  for (let e = 0; e < m; e++) for (let k = 0; k < 4; k++) vt[tets[4 * e + k]].push(e);
  const q = (e) => tetQuality(nodes, [tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]]);
  const worst = (v) => { let w = 180; for (const e of vt[v]) { if (tetVolume(nodes, tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]) <= 0) return -1; w = Math.min(w, q(e).minDih); } return w; };
  let moved = 0;
  for (let sweep = 0; sweep < 3; sweep++) {
    const cand = new Set();
    for (let e = 0; e < m; e++) if (q(e).minDih < minDih) for (let k = 0; k < 4; k++) { const v = tets[4 * e + k]; if (!onB[v]) cand.add(v); }
    if (!cand.size) break;
    for (const v of cand) {
      const nb = new Set(); for (const e of vt[v]) for (let k = 0; k < 4; k++) { const w = tets[4 * e + k]; if (w !== v) nb.add(w); }
      const c = [0, 0, 0]; for (const w of nb) for (let a = 0; a < 3; a++) c[a] += nodes[3 * w + a] / nb.size;
      const p0 = [nodes[3 * v], nodes[3 * v + 1], nodes[3 * v + 2]], w0 = worst(v);
      let best = w0, bp = null, ls = 0;
      for (const w of nb) ls += Math.hypot(nodes[3 * w] - p0[0], nodes[3 * w + 1] - p0[1], nodes[3 * w + 2] - p0[2]) / nb.size;
      const tries = [1, 0.5, 0.25].map((f) => [0, 1, 2].map((a) => p0[a] + f * (c[a] - p0[a])));
      // and off the plane of each bad tet's opposite face (a sliver's vertex pushed out of its plane)
      for (const e of vt[v]) {
        if (q(e).minDih >= minDih) continue;
        const o = [tets[4 * e], tets[4 * e + 1], tets[4 * e + 2], tets[4 * e + 3]].filter((x) => x !== v), P = o.map((x) => [nodes[3 * x], nodes[3 * x + 1], nodes[3 * x + 2]]);
        const u = [0, 1, 2].map((a) => P[1][a] - P[0][a]), w2 = [0, 1, 2].map((a) => P[2][a] - P[0][a]), n = [u[1] * w2[2] - u[2] * w2[1], u[2] * w2[0] - u[0] * w2[2], u[0] * w2[1] - u[1] * w2[0]], nl = Math.hypot(...n) || 1;
        const sgn = Math.sign(n[0] * (p0[0] - P[0][0]) + n[1] * (p0[1] - P[0][1]) + n[2] * (p0[2] - P[0][2])) || 1;
        for (const f of [0.05, 0.1, 0.2, 0.3]) tries.push([0, 1, 2].map((a) => p0[a] + sgn * f * ls * n[a] / nl));
      }
      for (const t of tries) {
        for (let a = 0; a < 3; a++) nodes[3 * v + a] = t[a];
        const w = worst(v); if (w > best + 1e-9) { best = w; bp = t; }
      }
      const p = bp || p0; for (let a = 0; a < 3; a++) nodes[3 * v + a] = p[a];
      if (bp) moved++;
    }
  }
  return moved;
}

// ---------------------------------------------------------------------------------------- quadratic tets

const T10_EDGES = [[0, 1], [1, 2], [0, 2], [0, 3], [1, 3], [2, 3]];

/** Jacobian determinants of a T10 at its corners and the 4 Gauss points (all must be > 0). */
export function t10DetJ(X, el) {
  const pts = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1], [0.1381966011250105, 0.1381966011250105, 0.1381966011250105], [0.5854101966249685, 0.1381966011250105, 0.1381966011250105], [0.1381966011250105, 0.5854101966249685, 0.1381966011250105], [0.1381966011250105, 0.1381966011250105, 0.5854101966249685]];
  return pts.map(([x, y, z]) => {
    const L = [1 - x - y - z, x, y, z], dL = [[-1, -1, -1], [1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const J = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const add = (node, d) => { for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) J[3 * r + c] += X[3 * node + r] * d[c]; };
    for (let i = 0; i < 4; i++) add(el[i], dL[i].map((v) => (4 * L[i] - 1) * v));
    T10_EDGES.forEach(([i, j], k) => add(el[4 + k], [0, 1, 2].map((c) => 4 * (L[i] * dL[j][c] + L[j] * dL[i][c]))));
    return J[0] * (J[4] * J[8] - J[5] * J[7]) - J[1] * (J[3] * J[8] - J[5] * J[6]) + J[2] * (J[3] * J[7] - J[4] * J[6]);
  });
}

/**
 * Linear tet mesh → quadratic (T10): a node at each edge's middle; boundary edges' nodes go onto the exact surface
 * (plane / cylinder, else the face's tessellation; an edge between two faces onto both) unless an element would fold.
 */
export function toT10(tm, mesh, faces, bvh) {
  const { nodes, tets, btri, bface } = tm, m = tets.length / 4, nn = nodes.length / 3;
  const emap = new Map(), list = [];
  const tets10 = new Int32Array(10 * m);
  for (let e = 0; e < m; e++) {
    for (let k = 0; k < 4; k++) tets10[10 * e + k] = tets[4 * e + k];
    T10_EDGES.forEach(([i, j], k) => {
      const a = tets[4 * e + i], b = tets[4 * e + j], key = ekey(a, b);
      let id = emap.get(key);
      if (id === undefined) { id = nn + list.length / 2; emap.set(key, id); list.push(a, b); }
      tets10[10 * e + 4 + k] = id;
    });
  }
  const X = new Float64Array(3 * (nn + list.length / 2));
  X.set(nodes);
  for (let i = 0; i < list.length / 2; i++) for (let c = 0; c < 3; c++) X[3 * (nn + i) + c] = (nodes[3 * list[2 * i] + c] + nodes[3 * list[2 * i + 1] + c]) / 2;
  // boundary edges → faces of the triangles beside them
  const nb = btri.length / 3, btri6 = new Int32Array(6 * nb), ef = new Map();
  for (let t = 0; t < nb; t++) for (let k = 0; k < 3; k++) {
    const a = btri[3 * t + k], b = btri[3 * t + (k + 1) % 3], key = ekey(a, b);
    btri6[6 * t + k] = btri[3 * t + k]; btri6[6 * t + 3 + k] = emap.get(key);
    let s = ef.get(key); if (!s) ef.set(key, (s = new Set())); if (bface[t] >= 0) s.add(bface[t]);
  }
  // elements around each midside node, for the fold check
  const around = new Map();
  for (let e = 0; e < m; e++) for (let k = 4; k < 10; k++) { const v = tets10[10 * e + k]; if (v >= nn && ef.has(ekey(list[2 * (v - nn)], list[2 * (v - nn) + 1]))) { let l = around.get(v); if (!l) around.set(v, (l = [])); l.push(e); } }
  let curved = 0, kept = 0;
  for (const [key, fs] of ef) {
    if (!fs.size || fs.size > 3) continue;
    const id = emap.get(key), p = [X[3 * id], X[3 * id + 1], X[3 * id + 2]], q = projectToFaces(p, [...fs], faces, bvh, mesh.triFace);
    const d = Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]);
    if (d < 1e-12 * bvh.diag) continue;
    // a moved midside node must not fold its elements (detJ > 0.2 × the straight element's, everywhere checked)
    const els = around.get(id) || [], before = els.map((e) => Math.min(...t10DetJ(X, tets10.subarray(10 * e, 10 * e + 10))));
    X[3 * id] = q[0]; X[3 * id + 1] = q[1]; X[3 * id + 2] = q[2];
    if (els.every((e, i) => Math.min(...t10DetJ(X, tets10.subarray(10 * e, 10 * e + 10))) > 0.2 * before[i])) curved++;
    else { X[3 * id] = p[0]; X[3 * id + 1] = p[1]; X[3 * id + 2] = p[2]; kept++; }
  }
  return { ...tm, order: 2, nodes: X, corners: nn, tets10, btri6, stats: { ...tm.stats, nodes10: X.length / 3, curvedEdges: curved, straightKept: kept } };
}
