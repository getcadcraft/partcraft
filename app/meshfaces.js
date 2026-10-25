/* SPDX-License-Identifier: Apache-2.0 */
/**
 * meshfaces.js — named faces and edges for the mesh kernel (0.4 part 2, K.2b; DOM-free).
 *
 * The exact kernel (brep.js) hands the workspaces, picking and the drawing a face table — which face is a plane or a cylinder,
 * its axis and radius, and a name made from what generated it (`<feature>.side:<curve>`, `.start`, `.end`,
 * `.wall:<point>` …, `@<pattern>#<i>` for copies) — and an edge table between those faces. The mesh kernel (kernel.js,
 * manifold-3d) knows the same things before the booleans: each feature's tool is a prism, a solid of revolution or a set of
 * holes whose surfaces come straight from the sketch. So every tool carries its surfaces (`surfs`), exact and named the
 * way brep.js names them; after the booleans each triangle of the result is matched to a surface of the tool that made it
 * (manifold keeps every triangle's original tool id), and connected triangles on one surface become one face record.
 * The records have brep.js's shape, so the same code reads either kernel's result.
 *
 *   surface records  { name, type: 'plane', n, o } | { name, type: 'cylinder', axis: { o, d }, r }
 *                    | { name, type: 'cone', axis: { o (apex), d (unit, opening direction) }, k (tan of the half angle) }
 *                    | { name, type: 'sphere', c, r } | { name, type: 'torus', axis: { o (centre), d }, R, r }   (revolved arcs)
 *                    | { name, type: 'thread', axis: { o, d }, r0, r1, t0, t1 }   (a modelled thread's helical flanks, crests and roots:
 *                      every triangle between radii r0–r1 and heights t0–t1 along the axis; 0.5 WL.29)
 *                    | { name, type: 'other' }   (spline sides: named, not classified)
 *   moveSurfs(surfs, M4, suffix)          copies for a pattern or mirror: points and directions moved, names + suffix
 *   namedFaces(mesh, triTool, toolSurfs, { segments, triHint })  → { triFace, faces, edges, edgeSegs, segEdge }
 *     mesh: { positions, indices } (welded); triTool[t] = index into toolSurfs (−1 = unknown); toolSurfs[i] = surface list
 *     triHint (optional, 0.7 D7.49): Int32Array, triHint[t] = the surface index in its tool's list when known already (a body
 *     made from a mesh carries it as manifold's faceID), −1 = on none of them, −2 = not known (matched by geometry as usual).
 *     A surface with `noSpread` (a mesh body's flat face) never takes in an unclaimed neighbour (step 1b).
 *     faces[i]  = { name, type, n?, o?, axis?, r?, area, at }                          (brep.js faceTable rows)
 *     edges[j]  = { faces: [a, b] (sorted names), key, at, a, b, len, type: line|circle|curve, circ? { c, n, r } }
 *     edgeSegs  = Float32Array of segments (x1 y1 z1 x2 y2 z2 …), segEdge[s] = its edge index (brep.js mesh fields)
 * A triangle no surface claims (e.g. a whole-body mirror, whose surfaces are not tracked) keeps face −1; its edges are not listed.
 */
import * as V from './vec.js';

export const plane = (name, n, o) => ({ name, type: 'plane', n: V.norm(n), o: [...o] });
export const cylinder = (name, o, d, r) => ({ name, type: 'cylinder', axis: { o: [...o], d: V.norm(d) }, r });
export const cone = (name, apex, d, k) => ({ name, type: 'cone', axis: { o: [...apex], d: V.norm(d) }, k });
export const sphere = (name, c, r) => ({ name, type: 'sphere', c: [...c], r });
export const torus = (name, c, d, R, r) => ({ name, type: 'torus', axis: { o: [...c], d: V.norm(d) }, R, r });
export const other = (name) => ({ name, type: 'other' });
export const thread = (name, o, d, r0, r1, t0, t1) => ({ name, type: 'thread', axis: { o: [...o], d: V.norm(d) }, r0, r1, t0, t1 });
/** A surface limited to a hole's radius about its axis (o, d), or to a sketch line's extent from a along unit d. */
export const within = (s, o, d, r) => ({ ...s, within: { o: [...o], d: V.norm(d), r } });
export const span = (s, a, b) => { const d = V.sub(b, a), len = V.len(d); return { ...s, span: { a: [...a], d: V.mul(d, 1 / len), len } }; };

/** M4 (column-major) applied to a direction: the linear part only. */
const dirOf = (M, d) => [M[0] * d[0] + M[4] * d[1] + M[8] * d[2], M[1] * d[0] + M[5] * d[1] + M[9] * d[2], M[2] * d[0] + M[6] * d[1] + M[10] * d[2]];

/** The surfaces of a copied tool: moved by M4 (a rigid motion or a reflection) and renamed with the copy's suffix. */
export function moveSurfs(surfs, M, suffix) {
  if (!surfs) return null;
  return surfs.map((s0) => {
    let s = s0;
    const name = s.name ? s.name + suffix : s.name;
    const moved = {};
    if (s.within) moved.within = { ...s.within, o: V.applyMat(M, s.within.o), d: V.norm(dirOf(M, s.within.d)) };
    if (s.span) moved.span = { ...s.span, a: V.applyMat(M, s.span.a), d: V.norm(dirOf(M, s.span.d)) };
    s = { ...s, ...moved };
    if (s.type === 'plane') return { ...s, name, n: V.norm(dirOf(M, s.n)), o: V.applyMat(M, s.o) };
    if (s.type === 'cylinder' || s.type === 'cone' || s.type === 'torus' || s.type === 'thread') return { ...s, name, axis: { o: V.applyMat(M, s.axis.o), d: V.norm(dirOf(M, s.axis.d)) } };
    if (s.type === 'sphere') return { ...s, name, c: V.applyMat(M, s.c) };
    return { ...s, name };
  });
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const radial = (p, ax) => { const v = sub(p, ax.o); const h = V.dot(v, ax.d); return [Math.hypot(...sub(v, V.mul(ax.d, h))), h]; };

/** Does triangle (points P, unit normal nt) lie on surface s? tol: distance in model units; sag: the chord sag of a round
 *  surface as a fraction of its radius (a boolean puts new points on the facets, up to one sag inside the true surface). */
function onSurface(s, P, nt, tol, sag) {
  // bounds tell coincident surfaces apart (two counterbore floors in one plane, two collinear sketch lines): the triangle's
  // centre must lie within the hole's radius of its axis, or along its sketch line's extent
  if (s.within) { const c = V.mul(P.reduce((q, p) => V.add(q, p), [0, 0, 0]), 1 / 3); if (radial(c, s.within)[0] > s.within.r + tol) return false; }
  if (s.span) { const c = V.mul(P.reduce((q, p) => V.add(q, p), [0, 0, 0]), 1 / 3); const u = V.dot(sub(c, s.span.a), s.span.d); if (u < -tol || u > s.span.len + tol) return false; }
  // nt null: a needle triangle (a boolean leaves some with two points in one place) whose normal means nothing: points only
  if (s.type === 'plane') return (!nt || Math.abs(V.dot(nt, s.n)) > 0.9) && P.every((p) => Math.abs(V.dot(sub(p, s.o), s.n)) <= tol);
  if (s.type === 'cylinder') {
    if (nt && Math.abs(V.dot(nt, s.axis.d)) > 0.5) return false;   // a cap: its points can lie on the cylinder too
    return P.every((p) => { const d = radial(p, s.axis)[0] - s.r; return d <= tol + 1e-6 * s.r && d >= -(tol + sag * s.r); });
  }
  if (s.type === 'cone') {
    if (nt && Math.abs(V.dot(nt, s.axis.d)) > 0.999) return false;   // a flat cap, not the cone
    return P.every((p) => { const [rho, h] = radial(p, s.axis); const d = rho - h * s.k; return h >= -tol && d <= tol * (1 + s.k) && d >= -(tol * (1 + s.k) + sag * h * s.k); });
  }
  if (s.type === 'sphere') return P.every((p) => { const d = Math.hypot(...sub(p, s.c)) - s.r; return d <= tol && d >= -(tol + sag * s.r); });
  if (s.type === 'torus') {
    return P.every((p) => { const [rho, h] = radial(p, s.axis); const d = Math.hypot(rho - s.R, h) - s.r; return d <= tol && d >= -(tol + sag * (s.R + s.r)); });
  }
  if (s.type === 'thread') {
    if (nt && Math.abs(V.dot(nt, s.axis.d)) > 0.99) return false;   // a flat end, not the thread
    return P.every((p) => { const [rho, h] = radial(p, s.axis); return rho >= s.r0 - tol - sag * s.r0 && rho <= s.r1 + tol && h >= s.t0 - tol && h <= s.t1 + tol; });
  }
  return false;
}

export function namedFaces(mesh, triTool, toolSurfs, { segments = 64, triHint = null } = {}) {
  const sag = 1.5 * (1 - Math.cos(Math.PI / Math.max(8, segments)));   // segments: the part's facets per full turn
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const pt = (i) => [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]];
  let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], P[i + k]); hi[k] = Math.max(hi[k], P[i + k]); }
  const size = Math.max(1e-9, Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]));
  const tol = 2e-6 * size + 1e-7;   // float32 positions round to ~1e-7 of their size
  // 1. each triangle → (tool, surface index)
  const surfOf = new Int32Array(nt).fill(-1);
  const surfKey = [];                // global surface index → [tool, k]
  const keyIndex = new Map();
  const triArea = new Float64Array(nt), triCen = new Float64Array(nt * 3), triN = new Float64Array(nt * 3);
  for (let t = 0; t < nt; t++) {
    const a = pt(I[t * 3]), b = pt(I[t * 3 + 1]), c = pt(I[t * 3 + 2]);
    const cr = V.cross(sub(b, a), sub(c, a)), ln = Math.hypot(...cr);
    triArea[t] = ln / 2;
    for (let k = 0; k < 3; k++) { triCen[t * 3 + k] = (a[k] + b[k] + c[k]) / 3; triN[t * 3 + k] = ln > 0 ? cr[k] / ln : 0; }
    const ti = triTool[t];
    const surfs = ti >= 0 ? toolSurfs[ti] : null;
    if (!surfs) continue;
    const hint = triHint ? triHint[t] : -2;
    if (hint === -1) continue;
    if (hint >= 0 && hint < surfs.length) {
      const key = ti + ':' + hint;
      let g = keyIndex.get(key);
      if (g === undefined) { g = surfKey.length; keyIndex.set(key, g); surfKey.push([ti, hint]); }
      surfOf[t] = g;
      continue;
    }
    const longest = Math.max(Math.hypot(...sub(b, a)), Math.hypot(...sub(c, b)), Math.hypot(...sub(a, c)));
    const n = ln > 1e-6 * longest * longest ? [triN[t * 3], triN[t * 3 + 1], triN[t * 3 + 2]] : null;
    let hit = -1;
    for (const want of ['plane', 'cylinder', 'cone', 'sphere', 'torus', 'thread']) {
      hit = surfs.findIndex((s) => s.type === want && onSurface(s, [a, b, c], n, tol, sag));
      if (hit >= 0) break;
    }
    if (hit < 0) continue;
    const key = ti + ':' + hit;
    let g = keyIndex.get(key);
    if (g === undefined) { g = surfKey.length; keyIndex.set(key, g); surfKey.push([ti, hit]); }
    surfOf[t] = g;
  }
  // 1b. what is left (needles where two round surfaces meet) joins an edge-neighbour's surface
  const nbr = (t) => { const out = []; for (let k = 0; k < 3; k++) { const u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3]; for (const q of edgeTrisOf(u, v)) if (q !== t) out.push(q); } return out; };
  const edgeTris0 = new Map();
  const ekey0 = (u, v) => (u < v ? u * 4294967296 + v : v * 4294967296 + u);
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) { const key = ekey0(I[t * 3 + k], I[t * 3 + (k + 1) % 3]); const l = edgeTris0.get(key); if (l) l.push(t); else edgeTris0.set(key, [t]); }
  const edgeTrisOf = (u, v) => edgeTris0.get(ekey0(u, v)) || [];
  for (let pass = 0; pass < 4; pass++) {
    let changed = 0;
    for (let t = 0; t < nt; t++) {
      if (surfOf[t] >= 0 || triTool[t] < 0 || (triHint && triHint[t] === -1)) continue;
      const q = nbr(t).find((x) => surfOf[x] >= 0 && surfKey[surfOf[x]][0] === triTool[t] && !toolSurfs[surfKey[surfOf[x]][0]][surfKey[surfOf[x]][1]].noSpread);
      if (q !== undefined) { surfOf[t] = surfOf[q]; changed++; }
    }
    if (!changed) break;
  }
  // 2. connected triangles on one surface → one face (union–find over shared edges)
  const parent = new Int32Array(nt).map((_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const edgeTris = new Map();
  const ekey = (u, v) => (u < v ? u * 4294967296 + v : v * 4294967296 + u);
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3], key = ekey(u, v);
    const l = edgeTris.get(key);
    if (l) l.push(t); else edgeTris.set(key, [t]);
  }
  for (const tris of edgeTris.values()) {
    if (tris.length !== 2) continue;
    const [p, q] = tris;
    if (surfOf[p] >= 0 && surfOf[p] === surfOf[q]) { const rp = find(p), rq = find(q); if (rp !== rq) parent[rp] = rq; }
  }
  const triFace = new Int32Array(nt).fill(-1);
  const faces = [];
  const faceOfRoot = new Map();
  for (let t = 0; t < nt; t++) {
    if (surfOf[t] < 0) continue;
    const r = find(t);
    let fi = faceOfRoot.get(r);
    if (fi === undefined) {
      fi = faces.length; faceOfRoot.set(r, fi);
      const [ti, k] = surfKey[surfOf[t]];
      const s = toolSurfs[ti][k];
      faces.push({ s, area: 0, cx: 0, cy: 0, cz: 0, nx: 0, ny: 0, nz: 0 });
    }
    triFace[t] = fi;
    const f = faces[fi], A = triArea[t];
    f.area += A; f.cx += triCen[t * 3] * A; f.cy += triCen[t * 3 + 1] * A; f.cz += triCen[t * 3 + 2] * A;
    f.nx += triN[t * 3] * A; f.ny += triN[t * 3 + 1] * A; f.nz += triN[t * 3 + 2] * A;
  }
  const faceRecs = faces.map((f) => {
    const s = f.s, at = f.area > 0 ? [f.cx / f.area, f.cy / f.area, f.cz / f.area] : [0, 0, 0];
    const rec = { name: s.name || null, type: s.type, area: f.area, at };
    if (s.type === 'plane') {
      // the outward normal is the triangles' (a cut's face points back into the tool)
      const sign = V.dot([f.nx, f.ny, f.nz], s.n) < 0 ? -1 : 1;
      rec.n = V.mul(s.n, sign); rec.o = [...s.o];
    } else if (s.type === 'cylinder') { rec.axis = { o: [...s.axis.o], d: [...s.axis.d] }; rec.r = s.r; }
    else if (s.type === 'cone') { rec.axis = { o: [...s.axis.o], d: [...s.axis.d] }; rec.surf = { type: 'cone', o: [...s.axis.o], d: [...s.axis.d], r0: 0, k: s.k }; }
    else if (s.type === 'sphere') rec.surf = { type: 'sphere', c: [...s.c], r: s.r };
    else if (s.type === 'thread') { rec.axis = { o: [...s.axis.o], d: [...s.axis.d] }; rec.r = s.r1; }
    else if (s.type === 'torus') { rec.axis = { o: [...s.axis.o], d: [...s.axis.d] }; rec.surf = { type: 'torus', c: [...s.axis.o], d: [...s.axis.d], R: s.R, r: s.r }; }
    // (rec.surf: the exact surface the tet mesher projects onto, in surfaces.js's form, as brep-surf.js writes it)
    return rec;
  });
  // 3. edges: mesh edges between two different faces, chained into polylines per face pair
  const pairs = new Map();   // "fa|fb" → [[u, v] …]
  for (const [key, tris] of edgeTris) {
    if (tris.length !== 2) continue;
    const fa = triFace[tris[0]], fb = triFace[tris[1]];
    if (fa < 0 || fb < 0 || fa === fb) continue;
    const u = Math.floor(key / 4294967296), v = key % 4294967296;
    const pk = fa < fb ? fa + '|' + fb : fb + '|' + fa;
    const l = pairs.get(pk);
    if (l) l.push([u, v]); else pairs.set(pk, [[u, v]]);
  }
  const edges = [], segs = [], segEdge = [];
  for (const [pk, list] of pairs) {
    const [fa, fb] = pk.split('|').map(Number);
    // chain the pair's segments into polylines (open or closed)
    const adj = new Map();
    const link = (x, y, i) => { const l = adj.get(x); if (l) l.push([y, i]); else adj.set(x, [[y, i]]); };
    list.forEach(([u, v], i) => { link(u, v, i); link(v, u, i); });
    const used = new Uint8Array(list.length);
    for (let s0 = 0; s0 < list.length; s0++) {
      if (used[s0]) continue;
      // this component's segments, then start from an end (a vertex with one segment) when the chain is open
      const stack = [list[s0][0]], seen = new Set(stack);
      while (stack.length) { const x = stack.pop(); for (const [y] of adj.get(x) || []) if (!seen.has(y)) { seen.add(y); stack.push(y); } }
      let start = list[s0][0];
      for (const x of seen) if ((adj.get(x) || []).length === 1) { start = x; break; }
      const chain = [start];
      for (let cur = start; ;) {
        const step = (adj.get(cur) || []).find(([, i]) => !used[i]);
        if (!step) break;
        used[step[1]] = 1; cur = step[0]; chain.push(cur);
      }
      if (chain.length < 2) continue;
      const pts = chain.map(pt);
      let len = 0;
      const cum = [0];
      for (let i = 1; i < pts.length; i++) { len += Math.hypot(...sub(pts[i], pts[i - 1])); cum.push(len); }
      let mi = 1; while (mi < cum.length - 1 && cum[mi] < len / 2) mi++;
      const f0 = (cum[mi] - len / 2) / Math.max(1e-30, cum[mi] - cum[mi - 1]);
      const at = V.add(V.mul(pts[mi - 1], f0), V.mul(pts[mi], 1 - f0));
      const names = [faceRecs[fa].name || '?', faceRecs[fb].name || '?'].sort();
      const rec = { faces: names, key: names.join('|'), at, a: pts[0], b: pts[pts.length - 1], len, type: 'curve' };
      // a straight run, or a circle where a plane meets a cylinder square to it
      const dir = V.sub(pts[pts.length - 1], pts[0]), dl = Math.hypot(...dir);
      if (dl > tol && pts.every((p) => Math.hypot(...V.cross(sub(p, pts[0]), V.mul(dir, 1 / dl))) <= tol * 10)) rec.type = 'line';
      else {
        const A = faceRecs[fa], B = faceRecs[fb];
        // a round face's axis: if every point sits at one radius and one height about it, the edge is (part of) a circle
        const ax = [A, B].find((x) => x.type === 'cylinder' || x.type === 'cone' || x.type === 'torus')?.axis;
        const rh = ax ? pts.map((p) => radial(p, ax)) : null;
        const rmax = rh ? Math.max(...rh.map((x) => x[0])) : 0;   // facet corners sit on the circle, boolean-made points up to a sag inside
        if (rh && rh.every(([r, h]) => r <= rmax + tol && r >= rmax - tol * 10 - sag * rmax && Math.abs(h - rh[0][1]) <= tol * 10) && rmax > tol) {
          const cyl = [A, B].find((x) => x.type === 'cylinder' && x.axis === ax);   // a cylinder's radius is exact (from the sketch)
          rec.type = 'circle'; rec.circ = { c: V.add(ax.o, V.mul(ax.d, rh[0][1])), n: [...ax.d], r: cyl && Math.abs(cyl.r - rmax) <= tol * 10 + sag * cyl.r ? cyl.r : rmax };
        } else if (chain[0] === chain[chain.length - 1] && pts.length > 4) {
          // any other closed, flat loop whose points all sit at one distance from their centre (a cone meeting a plane …)
          const ring = pts.slice(0, -1), c = V.mul(ring.reduce((q, p) => V.add(q, p), [0, 0, 0]), 1 / ring.length);
          const r = ring.reduce((q, p) => q + Math.hypot(...sub(p, c)), 0) / ring.length;
          const k = Math.floor(ring.length / 4), n = V.norm(V.cross(sub(ring[0], c), sub(ring[k], c)));
          if (r > tol && ring.every((p) => Math.abs(Math.hypot(...sub(p, c)) - r) <= tol * 10 && Math.abs(V.dot(sub(p, c), n)) <= tol * 10)) { rec.type = 'circle'; rec.circ = { c, n, r }; }
        }
      }
      if (rec.type === 'circle') {
        // its points exactly on the circle (CAM rebuilds a circle from a, b and at): projected radially in its plane; a closed
        // circle's middle point is the one opposite a, as the exact kernel's is
        const { c, n, r } = rec.circ;
        const onC = (p) => { const v = sub(p, c); const w = sub(v, V.mul(n, V.dot(v, n))); const l = Math.hypot(...w); return l > 0 ? V.add(c, V.mul(w, r / l)) : p; };
        const closed = chain[0] === chain[chain.length - 1];
        rec.a = onC(rec.a); rec.b = closed ? rec.a : onC(rec.b);
        rec.at = closed ? V.sub(V.mul(c, 2), rec.a) : onC(rec.at);
      }
      const ei = edges.length;
      edges.push(rec);
      for (let i = 1; i < pts.length; i++) { segs.push(...pts[i - 1], ...pts[i]); segEdge.push(ei); }
    }
  }
  return { triFace, faces: faceRecs, edges, edgeSegs: new Float32Array(segs), segEdge: new Int32Array(segEdge) };
}
