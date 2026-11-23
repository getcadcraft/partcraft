/* SPDX-License-Identifier: Apache-2.0 */
/**
 * flow-domain.js — the fluid space of a part as lattice cells (DOM-free), for flow.js.
 *
 * Internal flow: the part is voxelized (voxel.js; a cube is solid when its centre is inside) in its box grown by two cells.
 * Every opening picked as an inlet or outlet is closed one of two ways:
 *   lid  — a flat face around an opening (the rim of a pipe end, a port face): the face's holes are found by rasterizing
 *          the face in its own plane (pixels of half a cell; holes = uncovered pixels the border flood cannot reach) and
 *          the cells just behind the plane over the holes (a digital plane L1-thick, so no diagonal link crosses it)
 *          become boundary cells of that opening. Every hole of the face is closed (two ports on one face: cap one).
 *   cap  — any other face (the inner face of a cap modelled over the opening, SolidWorks style): the links from fluid
 *          cells that cross that face carry the opening's condition.
 * The fluid is then what is not solid, not a lid and cannot be reached from the grid's border (6-connected flood):
 * an opening left open joins the cavity to the outside and leaves no fluid. Cavities touching no opening are dropped.
 * External flow: a box around the part (the user's distances, whole cells), one layer of boundary cells outside it:
 * faces the flow enters by are inflow (velocity), faces it leaves by are outflow (pressure), faces along it are slip;
 * fluid = the cells reachable from the box's faces (closed cavities inside the part are left out).
 * Walls: every link from a fluid cell into a solid cell is cut against the part's triangles for the wall distance q
 * (interpolated bounce-back) and the B-rep face it crosses (which can make it an opening's link: a cap).
 */
import { voxelize, meshBBox, triangleHash } from './voxel.js';
import { CX, CY, CZ, Q } from './flow.js';
import { t } from './i18n.js';
import { cross3 as cross, dot3 as dot, sub3 as sub, unit3 as unit } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)


/** Area-weighted outward normal and area of a face from the mesh's triangles. */
export function faceNormal(mesh, fi) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace, s = [0, 0, 0];
  let area = 0;
  for (let t = 0; t < I.length / 3; t++) {
    if ((tf ? tf[t] : 0) !== fi) continue;
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const n = cross([P[b] - P[a], P[b + 1] - P[a + 1], P[b + 2] - P[a + 2]], [P[c] - P[a], P[c + 1] - P[a + 1], P[c + 2] - P[a + 2]]);
    s[0] += n[0]; s[1] += n[1]; s[2] += n[2]; area += Math.hypot(n[0], n[1], n[2]) / 2;
  }
  const l = Math.hypot(s[0], s[1], s[2]);
  return { n: l > 0 ? [s[0] / l, s[1] / l, s[2] / l] : [0, 0, 1], flat: area > 0 ? l / 2 / area : 0, area };
}

/**
 * Area of the holes of a flat face (mm²), exact for its triangles: the face's boundary edges (used by one of its
 * triangles) chained into loops; a loop turning clockwise about the outward normal bounds a hole. → { holes, loops }
 */
export function faceHoleArea(mesh, fi, n) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace, cnt = new Map(), next = new Map();
  const key = (a, b) => a * 4294967296 + b;
  for (let t = 0; t < I.length / 3; t++) {
    if ((tf ? tf[t] : 0) !== fi) continue;
    for (let k = 0; k < 3; k++) { const a = I[3 * t + k], b = I[3 * t + (k + 1) % 3]; cnt.set(key(a, b), (cnt.get(key(a, b)) || 0) + 1); }
  }
  for (const [kk] of cnt) { const a = Math.floor(kk / 4294967296), b = kk % 4294967296; if (!cnt.has(key(b, a))) next.set(a, b); }
  let holes = 0, loops = 0;
  const seen = new Set();
  for (const a0 of next.keys()) {
    if (seen.has(a0)) continue;
    let a = a0, area = 0, guard = 0;
    do {
      seen.add(a); const b = next.get(a); if (b === undefined) break;
      const pa = [P[3 * a], P[3 * a + 1], P[3 * a + 2]], pb = [P[3 * b], P[3 * b + 1], P[3 * b + 2]];
      area += dot(cross(pa, pb), n) / 2; a = b;
    } while (a !== a0 && ++guard < 1e6);
    loops++;
    if (area < 0) holes -= area;
  }
  return { holes, loops };
}

/**
 * The lid cells of a flat face: cells (not solid) just behind its plane whose centres project onto a hole of the face.
 * → { cells: [grid index], holes: hole pixel count } or null when the face has no hole.
 */
export function lidCells(grid, solid, mesh, fi, n, o) {
  const { h, nx, ny, nz, origin } = grid;
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace;
  const ref = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0], u = unit(cross(n, ref)), v = cross(n, u);
  const tris = [];
  let umin = Infinity, umax = -Infinity, vmin = Infinity, vmax = -Infinity;
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let t = 0; t < I.length / 3; t++) {
    if ((tf ? tf[t] : 0) !== fi) continue;
    const pts = [0, 1, 2].map((k) => { const a = 3 * I[3 * t + k], p = [P[a], P[a + 1], P[a + 2]]; for (let c = 0; c < 3; c++) { lo[c] = Math.min(lo[c], p[c]); hi[c] = Math.max(hi[c], p[c]); } const d = sub(p, o); return [dot(d, u), dot(d, v)]; });
    for (const [a, b] of pts) { umin = Math.min(umin, a); umax = Math.max(umax, a); vmin = Math.min(vmin, b); vmax = Math.max(vmax, b); }
    tris.push(pts);
  }
  if (!tris.length) return null;
  const ps = h / 2, W = Math.ceil((umax - umin) / ps) + 5, H = Math.ceil((vmax - vmin) / ps) + 5;
  if (W * H > 16e6) return null;
  const u0 = umin - 2 * ps, v0 = vmin - 2 * ps, cov = new Uint8Array(W * H);
  const mark = (a, b) => { const i = Math.floor((a - u0) / ps), j = Math.floor((b - v0) / ps); if (i >= 0 && j >= 0 && i < W && j < H) cov[i + W * j] = 1; };
  for (const [A, B, C] of tris) {
    // pixel centres inside the triangle, and its edges sampled finely (conservative: thin rims stay closed)
    const i0 = Math.max(0, Math.floor((Math.min(A[0], B[0], C[0]) - u0) / ps)), i1 = Math.min(W - 1, Math.floor((Math.max(A[0], B[0], C[0]) - u0) / ps));
    const j0 = Math.max(0, Math.floor((Math.min(A[1], B[1], C[1]) - v0) / ps)), j1 = Math.min(H - 1, Math.floor((Math.max(A[1], B[1], C[1]) - v0) / ps));
    const d = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
    if (Math.abs(d) > 1e-18) for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = u0 + (i + 0.5) * ps, y = v0 + (j + 0.5) * ps;
      const w1 = ((B[0] - x) * (C[1] - y) - (B[1] - y) * (C[0] - x)) / d, w2 = ((C[0] - x) * (A[1] - y) - (C[1] - y) * (A[0] - x)) / d, w3 = 1 - w1 - w2;
      if (w1 >= -1e-9 && w2 >= -1e-9 && w3 >= -1e-9) cov[i + W * j] = 1;
    }
    for (const [p, q] of [[A, B], [B, C], [C, A]]) { const L = Math.hypot(q[0] - p[0], q[1] - p[1]), k = Math.max(1, Math.ceil(L / (ps / 3))); for (let s = 0; s <= k; s++) mark(p[0] + (q[0] - p[0]) * s / k, p[1] + (q[1] - p[1]) * s / k); }
  }
  // flood the uncovered pixels from the border: what it cannot reach is a hole
  const out = new Uint8Array(W * H), stack = [];
  const push = (i) => { if (!cov[i] && !out[i]) { out[i] = 1; stack.push(i); } };
  for (let i = 0; i < W; i++) { push(i); push(i + W * (H - 1)); }
  for (let j = 0; j < H; j++) { push(W * j); push(W - 1 + W * j); }
  while (stack.length) { const p = stack.pop(), i = p % W, j = (p - i) / W; if (i > 0) push(p - 1); if (i < W - 1) push(p + 1); if (j > 0) push(p - W); if (j < H - 1) push(p + W); }
  let holes = 0;
  for (let p = 0; p < W * H; p++) if (!cov[p] && !out[p]) holes++;
  if (!holes) return null;
  // cells behind the plane (signed distance in (−T, 0], T the L1 thickness) over the face or its holes
  const T = h * (Math.abs(n[0]) + Math.abs(n[1]) + Math.abs(n[2])), cells = [];
  const box = [0, 1, 2].map((c) => [Math.max(0, Math.floor((lo[c] - T - h - origin[c]) / h)), Math.min([nx, ny, nz][c] - 1, Math.floor((hi[c] + T + h - origin[c]) / h))]);
  for (let k = box[2][0]; k <= box[2][1]; k++) for (let j = box[1][0]; j <= box[1][1]; j++) for (let i = box[0][0]; i <= box[0][1]; i++) {
    const e = i + nx * (j + ny * k);
    if (solid[e]) continue;
    const c = [origin[0] + (i + 0.5) * h, origin[1] + (j + 0.5) * h, origin[2] + (k + 0.5) * h], d = sub(c, o), s = dot(d, n);
    if (!(s > -T - 1e-9 * h && s <= 1e-9 * h)) continue;
    const pi = Math.floor((dot(d, u) - u0) / ps), pj = Math.floor((dot(d, v) - v0) / ps);
    if (pi < 0 || pj < 0 || pi >= W || pj >= H || out[pi + W * pj]) continue;
    cells.push(e);
  }
  return { cells, holes, area: holes * ps * ps };
}

/** Segment p → p + d against the triangles near it: the first crossing as { t (0…1), face, n (unit triangle normal along d) } or null. */
function firstHit(mesh, hash, p, d) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace;
  const mid = [p[0] + d[0] / 2, p[1] + d[1] / 2, p[2] + d[2] / 2];
  let best = null;
  for (const t of hash.near(mid)) {
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const e1 = [P[b] - P[a], P[b + 1] - P[a + 1], P[b + 2] - P[a + 2]], e2 = [P[c] - P[a], P[c + 1] - P[a + 1], P[c + 2] - P[a + 2]];
    const pv = cross(d, e2), det = dot(e1, pv);
    if (Math.abs(det) < 1e-20) continue;
    const inv = 1 / det, tv = [p[0] - P[a], p[1] - P[a + 1], p[2] - P[a + 2]], uu = dot(tv, pv) * inv;
    if (uu < -1e-9 || uu > 1 + 1e-9) continue;
    const qv = cross(tv, e1), vv = dot(d, qv) * inv;
    if (vv < -1e-9 || uu + vv > 1 + 1e-9) continue;
    const s = dot(e2, qv) * inv;
    if (s < -1e-9 || s > 1 + 1e-9) continue;
    if (!best || s < best.t) { const nn = cross(e1, e2), l = Math.hypot(nn[0], nn[1], nn[2]) || 1, sg = dot(nn, d) >= 0 ? 1 / l : -1 / l; best = { t: Math.max(0, Math.min(1, s)), face: tf ? tf[t] : 0, n: [nn[0] * sg, nn[1] * sg, nn[2] * sg] }; }
  }
  return best;
}

/**
 * The domain. spec = { type 'internal'|'external', h (mm), openings: [{ role 'inlet'|'outlet', faces: [face index] }],
 *   box (external): { up, down, side } mm, dir (external): unit flow direction, interpolated (default true) }
 * → { nx, ny, nz, h, origin, kind (Int32Array: −1 solid/outside, 0 fluid, g ≥ 1 boundary cell), groups: [null, {...}],
 *     wallGroup(cell, dir), openingGroups: [[g…] per opening], faceMode: [['lid'|'cap'] per opening face], counts, problems }
 * groups (internal): one per opening face, { type 'velocity'|'pressure', opening, dir (inflow direction, unit), lid };
 * (external): 1 inflow, 2 outflow, 3–5 slip normal to x / y / z.
 */
export function flowDomain(mesh, spec) {
  const h = spec.h, problems = [];
  const bb = meshBBox(mesh);
  let box;
  if (spec.type === 'external') {
    const d = spec.dir, ax = [0, 1, 2].reduce((m, a) => (Math.abs(d[a]) > Math.abs(d[m]) ? a : m), 0), s = Math.sign(d[ax]) || 1;
    const pad = (v) => Math.max(1, Math.ceil(v / h - 1e-9)) * h;
    const lo = [0, 1, 2].map((a) => bb.min[a] - pad(a === ax ? (s > 0 ? spec.box.up : spec.box.down) : spec.box.side));
    const hi = [0, 1, 2].map((a) => bb.max[a] + pad(a === ax ? (s > 0 ? spec.box.down : spec.box.up) : spec.box.side));
    // one more layer outside the box for the boundary cells
    box = { min: lo.map((v) => v - h), max: hi.map((v) => v + h) };
  } else box = { min: bb.min.map((v) => v - 2 * h), max: bb.max.map((v) => v + 2 * h) };
  const g = voxelize(mesh, { h, bbox: box, surface: false });
  const { nx, ny, nz, origin } = g, ncell = nx * ny * nz, nxy = nx * ny;
  if (ncell > 40e6) throw new Error(t('study.flow.err.domain_too_large'));
  const kind = new Int32Array(ncell);
  for (let e = 0; e < ncell; e++) kind[e] = g.solid[e] ? -1 : 0;
  const groups = [null], openingGroups = [], faceMode = [], faceGroup = new Map(), counts = { lidCells: 0 };
  const flood = (seedFn, passable, label) => {
    const stack = [];
    for (let e = 0; e < ncell; e++) if (seedFn(e) && passable(e)) { kind[e] = label; stack.push(e); }
    while (stack.length) {
      const e = stack.pop(), i = e % nx, j = ((e - i) / nx) % ny, k = (e - i - nx * j) / nxy;
      if (i > 0 && passable(e - 1)) { kind[e - 1] = label; stack.push(e - 1); }
      if (i < nx - 1 && passable(e + 1)) { kind[e + 1] = label; stack.push(e + 1); }
      if (j > 0 && passable(e - nx)) { kind[e - nx] = label; stack.push(e - nx); }
      if (j < ny - 1 && passable(e + nx)) { kind[e + nx] = label; stack.push(e + nx); }
      if (k > 0 && passable(e - nxy)) { kind[e - nxy] = label; stack.push(e - nxy); }
      if (k < nz - 1 && passable(e + nxy)) { kind[e + nxy] = label; stack.push(e + nxy); }
    }
  };
  const onBorder = (e) => { const i = e % nx, j = ((e - i) / nx) % ny, k = (e - i - nx * j) / nxy; return i === 0 || j === 0 || k === 0 || i === nx - 1 || j === ny - 1 || k === nz - 1; };
  if (spec.type === 'external') {
    const d = spec.dir;
    // boundary layer: inflow (u·n_out < 0) beats outflow (u·n_out > 0) beats slip
    groups.push({ type: 'velocity', name: 'inflow' }, { type: 'pressure', name: 'outflow' }, { type: 'slip', axis: 0 }, { type: 'slip', axis: 1 }, { type: 'slip', axis: 2 });
    const eps = 1e-6;
    for (let k = 0; k < nz; k++) for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
      const ijk = [i, j, k], dims = [nx, ny, nz];
      let gIn = false, gOut = false, slip = -1;
      for (let a = 0; a < 3; a++) {
        const side = ijk[a] === 0 ? -1 : ijk[a] === dims[a] - 1 ? 1 : 0;
        if (!side) continue;
        const un = side * d[a];
        if (un < -eps) gIn = true; else if (un > eps) gOut = true; else if (slip < 0) slip = a;
      }
      if (!gIn && !gOut && slip < 0) continue;
      kind[i + nx * (j + ny * k)] = gIn ? 1 : gOut ? 2 : 3 + slip;
    }
    // fluid: cells reachable from the boundary layer
    const MARK = -3;
    const seeds = (e) => { if (kind[e] !== 0) return false; const i = e % nx, j = ((e - i) / nx) % ny, k = (e - i - nx * j) / nxy; return i === 1 || j === 1 || k === 1 || i === nx - 2 || j === ny - 2 || k === nz - 2; };
    flood(seeds, (e) => kind[e] === 0, MARK);
    for (let e = 0; e < ncell; e++) kind[e] = kind[e] === MARK ? 0 : kind[e] === 0 ? -1 : kind[e];
  } else {
    // lids and caps, one group per opening face
    spec.openings.forEach((op, oi) => {
      const gs = [], modes = [];
      for (const fi of op.faces) {
        const fn = faceNormal(mesh, fi);
        const f = spec.faces && spec.faces[fi];
        let lid = null;
        if (f && f.type === 'plane' && f.n && f.o) lid = lidCells(g, g.solid, mesh, fi, f.n, f.o);
        else if (fn.flat > 0.999 && fn.area > 0) lid = lidCells(g, g.solid, mesh, fi, fn.n, centroidOf(mesh, fi));
        const gi = groups.length;
        if (lid && lid.cells.length) {
          const nrm = f && f.n ? f.n : fn.n;
          const ha = faceHoleArea(mesh, fi, nrm).holes;
          groups.push({ type: op.role === 'inlet' ? 'velocity' : 'pressure', opening: oi, face: fi, dir: [-nrm[0], -nrm[1], -nrm[2]], lid: true, area: ha > 0 ? ha : lid.area });
          for (const e of lid.cells) kind[e] = gi;
          counts.lidCells += lid.cells.length; modes.push('lid');
        } else {
          groups.push({ type: op.role === 'inlet' ? 'velocity' : 'pressure', opening: oi, face: fi, dir: fn.n.slice(), lid: false, area: f && f.area ? f.area : fn.area });
          faceGroup.set(fi, gi); modes.push('cap');
          if (fn.flat < 0.98) problems.push('curved');
        }
        gs.push(gi);
      }
      openingGroups.push(gs); faceMode.push(modes);
    });
    // the outside: flood from the grid's border through empty cells
    flood(onBorder, (e) => kind[e] === 0, -2);
  }
  // wall links: cut each fluid → solid link against the mesh (q, face)
  const hash = triangleHash(mesh, 2 * h, 1.5 * h);
  const wall = new Map();
  const interpolated = spec.interpolated !== false;
  for (let e = 0; e < ncell; e++) {
    if (kind[e] !== 0) continue;
    const i = e % nx, j = ((e - i) / nx) % ny, k = (e - i - nx * j) / nxy;
    const p = [origin[0] + (i + 0.5) * h, origin[1] + (j + 0.5) * h, origin[2] + (k + 0.5) * h];
    for (let q = 1; q < Q; q++) {
      const ii = i + CX[q], jj = j + CY[q], kk = k + CZ[q];
      if (ii < 0 || jj < 0 || kk < 0 || ii >= nx || jj >= ny || kk >= nz) continue;
      const t = ii + nx * (jj + ny * kk);
      if (kind[t] >= 0) continue;
      const hit = firstHit(mesh, hash, p, [CX[q] * h, CY[q] * h, CZ[q] * h]);
      const gi = hit && faceGroup.has(hit.face) ? faceGroup.get(hit.face) : 0;
      // q: where the link meets the wall (½ for bounce-back walls); d and n (the true distance fraction and the surface
      // normal into the solid) are kept for the turbulence wall model either way
      if (gi || hit) wall.set(e * Q + q, { g: gi, q: hit && interpolated ? hit.t : 0.5, d: hit ? hit.t : 0.5, n: hit ? hit.n : null });
    }
  }
  // internal: keep only cavities that touch an opening
  if (spec.type !== 'external') {
    const comp = new Int32Array(ncell).fill(-1), touches = [];
    let nc = 0;
    for (let e0 = 0; e0 < ncell; e0++) {
      if (kind[e0] !== 0 || comp[e0] >= 0) continue;
      const roles = new Set(), stack = [e0];
      comp[e0] = nc;
      while (stack.length) {
        const e = stack.pop(), i = e % nx, j = ((e - i) / nx) % ny, k = (e - i - nx * j) / nxy;
        for (let q = 1; q < Q; q++) {
          const ii = i + CX[q], jj = j + CY[q], kk = k + CZ[q];
          if (ii < 0 || jj < 0 || kk < 0 || ii >= nx || jj >= ny || kk >= nz) continue;
          const t = ii + nx * (jj + ny * kk), kt = kind[t];
          if (kt >= 1) roles.add(groups[kt].type);
          else if (kt < 0) { const w = wall.get(e * Q + q); if (w && w.g) roles.add(groups[w.g].type); }
          else if (q <= 6 && comp[t] < 0) { comp[t] = nc; stack.push(t); }
        }
      }
      touches.push(roles); nc++;
    }
    counts.cavities = nc; counts.dropped = 0; counts.noOutlet = 0; counts.noInlet = 0;
    for (let e = 0; e < ncell; e++) {
      if (kind[e] !== 0) continue;
      const r = touches[comp[e]];
      if (!r.size) { kind[e] = -1; continue; }
    }
    touches.forEach((r) => { if (!r.size) counts.dropped++; else { if (!r.has('pressure')) counts.noOutlet++; if (!r.has('velocity')) counts.noInlet++; } });
  }
  let fluid = 0;
  for (let e = 0; e < ncell; e++) if (kind[e] === 0) fluid++;
  counts.fluid = fluid;
  for (const key of wall.keys()) if (kind[Math.floor(key / Q)] !== 0) wall.delete(key);
  return {
    nx, ny, nz, h, origin, kind, groups, openingGroups, faceMode, counts, problems, solid: g.solid,
    wallGroup: (cell, q) => wall.get(cell * Q + q) || null, wallLinks: wall.size,
  };
}

function centroidOf(mesh, fi) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace, s = [0, 0, 0];
  let n = 0;
  for (let t = 0; t < I.length / 3; t++) if ((tf ? tf[t] : 0) === fi) for (let k = 0; k < 3; k++) { const a = 3 * I[3 * t + k]; s[0] += P[a]; s[1] += P[a + 1]; s[2] += P[a + 2]; n++; }
  return n ? s.map((v) => v / n) : [0, 0, 0];
}

/** Frontal area of a mesh seen along `dir` (projected triangles rasterized on a res × res grid over their extent), mm². */
export function frontalArea(mesh, dir, res = 1024) {
  const d = unit(dir), ref = Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0], u = unit(cross(d, ref)), v = cross(d, u);
  const P = mesh.positions, I = mesh.indices, nv = P.length / 3, U = new Float64Array(nv), V = new Float64Array(nv);
  let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity;
  for (let i = 0; i < nv; i++) { const p = [P[3 * i], P[3 * i + 1], P[3 * i + 2]]; U[i] = dot(p, u); V[i] = dot(p, v); u0 = Math.min(u0, U[i]); u1 = Math.max(u1, U[i]); v0 = Math.min(v0, V[i]); v1 = Math.max(v1, V[i]); }
  const ps = Math.max(u1 - u0, v1 - v0) / res || 1, W = Math.ceil((u1 - u0) / ps) + 1, H = Math.ceil((v1 - v0) / ps) + 1, cov = new Uint8Array(W * H);
  for (let t = 0; t < I.length / 3; t++) {
    const a = I[3 * t], b = I[3 * t + 1], c = I[3 * t + 2];
    const A = [U[a], V[a]], B = [U[b], V[b]], C = [U[c], V[c]], det = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
    if (Math.abs(det) < 1e-18) continue;
    const i0 = Math.max(0, Math.floor((Math.min(A[0], B[0], C[0]) - u0) / ps)), i1 = Math.min(W - 1, Math.floor((Math.max(A[0], B[0], C[0]) - u0) / ps));
    const j0 = Math.max(0, Math.floor((Math.min(A[1], B[1], C[1]) - v0) / ps)), j1 = Math.min(H - 1, Math.floor((Math.max(A[1], B[1], C[1]) - v0) / ps));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const x = u0 + (i + 0.5) * ps, y = v0 + (j + 0.5) * ps;
      const w1 = ((B[0] - x) * (C[1] - y) - (B[1] - y) * (C[0] - x)) / det, w2 = ((C[0] - x) * (A[1] - y) - (C[1] - y) * (A[0] - x)) / det;
      if (w1 >= 0 && w2 >= 0 && w1 + w2 <= 1) cov[i + W * j] = 1;
    }
  }
  let n = 0; for (const c of cov) n += c;
  return n * ps * ps;
}
