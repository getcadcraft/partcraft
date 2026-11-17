/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: STEP file content and error codes (the app words them). */
/**
 * step-exact.js — exact STEP (a true B-rep) from the mesh kernel's result (0.9.1, FIX-091-EXACT-STEP; DOM-free).
 *
 * The mesh kernel (kernel.js) builds facets, but it knows every face's exact surface: meshfaces.js matches each triangle to the
 * plane, cylinder, cone, sphere or torus of the tool that made it, straight from the sketch. That is enough to write the part
 * as an ADVANCED_BREP_SHAPE_REPRESENTATION without an exact kernel:
 *
 *   1. regions   neighbouring faces on one surface are joined; every triangle belongs to one region with one exact surface.
 *                Triangles on no analytic surface (spline sides, modelled threads) stay flat facets, each flat patch a PLANE
 *                face; a round face that touches such a patch anywhere but along a line on its own surface is written as
 *                facets too, so the shell always closes. (A flat patch with no other patch beside it is simply a flat face
 *                the kernel had no name for, and counts as exact.)
 *   2. topology  the mesh edges between two regions are chained into B-rep edges, ending where three or more regions meet;
 *                each region's loops are walked on the mesh, so they run counter-clockwise seen from outside.
 *   3. geometry  every vertex and edge point is moved onto the exact surfaces it lies between (Newton, least norm), so
 *                nothing keeps the facets' sag or the mesh's 32-bit rounding. An edge is a LINE, a CIRCLE, an ELLIPSE (a
 *                plane cutting a cylinder at an angle) or, where two round surfaces cross, a cubic B-spline through points
 *                computed on both surfaces and refined until it stays within FIT_TOL of them.
 *   4. solids    each connected shell is a MANIFOLD_SOLID_BREP; a shell inside another (a closed cavity) is a void of a
 *                BREP_WITH_VOIDS.
 *
 * Written from the published schemas only (ISO 10303-21, -42, AP214 / AP242 product structure). No STEP library's code read.
 *
 *   stepExact(regen, name, { date, schema: 'AP242'|'AP214', zUp: true, segments: 64 (the part's Curves setting),
 *                            map: (p) => p' (a rigid motion into the file's coordinates instead of zUp, e.g. cam.js's
 *                            machineModel().toM: the Manufacture setup's work coordinates) })
 *     regen: kernel.js's result ({ mesh: { positions, indices, triFace }, faces })
 *     → { text, counts: { faces, exact, faceted, plane, cylinder, cone, sphere, torus, edges, line, circle, ellipse, spline,
 *                         vertices, solids, voids, slivers (empty cavities left out) }, maxDev (mm, the largest spline-to-surface distance found), demoted: [names of round faces written as facets],
 *         why: [the reason for each] }
 *     throws StepExactError (code 'no_solid' | 'open' | 'failed')
 * Written Z up (as the STL and 3MF exports are), millimetres.
 */
import * as V from './vec.js';
import { interpolate, params as fitParams } from './nurbs/fit.js';
import { point as curvePoint } from './nurbs/curve.js';

export class StepExactError extends Error { constructor(code, detail = '') { super(code + (detail ? ': ' + detail : '')); this.code = code; this.detail = detail; } }

export const FIT_TOL = 1e-5;   // mm: a spline edge stays this close to both of its surfaces (checked between its points)
const HK = 4294967296;

const real = (v) => {
  if (!Number.isFinite(v) || Math.abs(v) < 1e-15) return '0.';
  const s = Number(v.toPrecision(16)).toExponential().toUpperCase();
  let [m, e] = s.split('E');
  if (!m.includes('.')) m += '.';
  const ex = parseInt(e, 10);
  if (ex === 0) return m;
  return m + 'E' + (ex < 0 ? '-' : '') + String(Math.abs(ex)).padStart(2, '0');
};
const str = (s) => "'" + String(s).replace(/[^\x20-\x7e]/g, '_').replace(/\\/g, '\\\\').replace(/'/g, "''") + "'";

// ------------------------------------------------------------------------------------------------ exact surfaces

/** A face record (meshfaces.js) → its exact surface, or null (spline sides, threads, a spindle torus). */
function surfOfFace(f) {
  if (!f) return null;
  if (f.type === 'plane' && f.n && f.o) return { type: 'plane', n: V.norm(f.n), o: [...f.o] };
  if (f.type === 'cylinder' && f.axis && f.r > 0) return { type: 'cylinder', o: [...f.axis.o], d: V.norm(f.axis.d), r: f.r };
  if (f.type === 'cone' && f.surf && f.surf.k > 0) return { type: 'cone', o: [...f.surf.o], d: V.norm(f.surf.d), k: f.surf.k };
  if (f.type === 'sphere' && f.surf && f.surf.r > 0) return { type: 'sphere', o: [...f.surf.c], r: f.surf.r };
  if (f.type === 'torus' && f.surf && f.surf.r > 0 && f.surf.R > f.surf.r * (1 + 1e-9)) return { type: 'torus', o: [...f.surf.c], d: V.norm(f.surf.d), R: f.surf.R, r: f.surf.r };
  return null;
}

/** Signed distance of p from the surface and its gradient (the surface's outward normal there). */
function sdf(s, p) {
  const v = V.sub(p, s.o);
  if (s.type === 'plane') return [V.dot(v, s.n), s.n];
  if (s.type === 'sphere') { const l = V.len(v); return [l - s.r, l > 0 ? V.mul(v, 1 / l) : [0, 0, 1]]; }
  const h = V.dot(v, s.d), w = V.sub(v, V.mul(s.d, h)), rho = V.len(w);
  const u = rho > 1e-300 ? V.mul(w, 1 / rho) : perp(s.d);
  if (s.type === 'cylinder') return [rho - s.r, u];
  if (s.type === 'cone') { const c = 1 / Math.sqrt(1 + s.k * s.k); return [(rho - h * s.k) * c, V.mul(V.sub(u, V.mul(s.d, s.k)), c)]; }
  const q = Math.hypot(rho - s.R, h);   // torus
  if (q < 1e-300) return [-s.r, u];
  return [q - s.r, V.add(V.mul(u, (rho - s.R) / q), V.mul(s.d, h / q))];
}

function perp(n) {
  let x = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  x = V.sub(x, V.mul(n, V.dot(x, n)));
  return V.norm(x);
}

/** Small dense solve (Gauss, partial pivoting); null when singular. */
function solveSmall(A, b) {
  const n = b.length, M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < 1e-300) return null;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = c + 1; r < n; r++) { const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  const x = new Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) { let s = M[r][n]; for (let k = r + 1; k < n; k++) s -= M[r][k] * x[k]; x[r] = s / M[r][r]; }
  return x;
}

/** p moved the shortest way onto every surface in the list (damped least-norm Newton). → { p, res (largest distance left) } */
function project(p0, surfs) {
  let p = [...p0], res = Infinity;
  if (!surfs.length) return { p, res: 0 };
  for (let it = 0; it < 100; it++) {
    const F = [], G = [];
    for (const s of surfs) { const [f, g] = sdf(s, p); F.push(f); G.push(g); }
    res = Math.max(...F.map(Math.abs));
    if (res < 1e-13 * (1 + Math.abs(p[0]) + Math.abs(p[1]) + Math.abs(p[2]))) break;
    const m = F.length, A = [];
    let tr = 0;
    for (let i = 0; i < m; i++) { A.push([]); for (let j = 0; j < m; j++) A[i].push(V.dot(G[i], G[j])); tr += A[i][i]; }
    for (let i = 0; i < m; i++) A[i][i] += 1e-10 * tr / m;   // damping: tangent surfaces (a fillet meeting its face) have a double root
    const y = solveSmall(A, F);
    if (!y) break;
    let d = [0, 0, 0];
    for (let i = 0; i < m; i++) d = V.add(d, V.mul(G[i], y[i]));
    p = V.sub(p, d);
    if (!p.every(Number.isFinite)) return { p: [...p0], res: Infinity };
  }
  return { p, res };
}

function sameSurf(a, b, tol) {
  if (a.type !== b.type) return false;
  const par = (x, y) => Math.abs(V.dot(x, y)) > 1 - 1e-12;
  const offAxis = (q, s) => { const v = V.sub(q, s.o); return V.len(V.sub(v, V.mul(s.d, V.dot(v, s.d)))); };
  if (a.type === 'plane') return V.dot(a.n, b.n) > 1 - 1e-12 && Math.abs(V.dot(V.sub(b.o, a.o), a.n)) <= tol;
  if (a.type === 'cylinder') return par(a.d, b.d) && offAxis(b.o, a) <= tol && Math.abs(a.r - b.r) <= tol;
  if (a.type === 'sphere') return V.len(V.sub(a.o, b.o)) <= tol && Math.abs(a.r - b.r) <= tol;
  if (a.type === 'cone') return V.dot(a.d, b.d) > 1 - 1e-12 && V.len(V.sub(a.o, b.o)) <= tol && Math.abs(a.k - b.k) <= 1e-12 * (1 + a.k);
  return par(a.d, b.d) && V.len(V.sub(a.o, b.o)) <= tol && Math.abs(a.R - b.R) <= tol && Math.abs(a.r - b.r) <= tol;
}

// ------------------------------------------------------------------------------------------------ the writer

export function stepExact(regen, name = 'part', opts = {}) {
  const mesh = regen?.mesh;
  if (!mesh || !mesh.indices?.length) throw new StepExactError('no_solid');
  const faces = regen.faces || [];
  const demoted = new Set();
  let last = null;
  const why = [];
  for (let round = 0; round < 12; round++) {
    const r = attempt(mesh, faces, demoted, name, opts);
    if (r.ok) { r.out.why = why; return r.out; }
    last = r; why.push(r.why);
    let grew = false;
    for (const f of r.demote) if (!demoted.has(f)) { demoted.add(f); grew = true; }
    if (!grew) break;
  }
  throw new StepExactError('failed', last?.why || '');
}

function attempt(mesh, faces, demoted, name, { date = new Date(), schema = 'AP242', zUp = true, segments = 64, map = null } = {}) {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3, nv = P.length / 3;
  const triFace = mesh.triFace && mesh.triFace.length === nt ? mesh.triFace : new Int32Array(nt).fill(-1);
  const pt = (i) => [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]];
  let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], P[i + k]); hi[k] = Math.max(hi[k], P[i + k]); }
  const size = Math.max(1e-9, V.len(V.sub(hi, lo)));
  const tol = 2e-6 * size + 1e-7;

  // half-edges: (u → v) → t * 3 + k; a closed manifold has every twin
  const he = new Map();
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) he.set(I[t * 3 + k] * HK + I[t * 3 + (k + 1) % 3], t * 3 + k);
  const twinOf = new Int32Array(nt * 3);
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const q = he.get(I[t * 3 + (k + 1) % 3] * HK + I[t * 3 + k]);
    if (q === undefined) throw new StepExactError('open');
    twinOf[t * 3 + k] = q;
  }
  const triN = new Float64Array(nt * 3), triA = new Float64Array(nt), degen = new Uint8Array(nt), thin = new Uint8Array(nt), triH = new Float64Array(nt);   // triH: a triangle's height on its longest side
  for (let t = 0; t < nt; t++) {
    const a = pt(I[t * 3]), b = pt(I[t * 3 + 1]), c = pt(I[t * 3 + 2]);
    const cr = V.cross(V.sub(b, a), V.sub(c, a)), ln = V.len(cr);
    const longest = Math.max(V.len(V.sub(b, a)), V.len(V.sub(c, b)), V.len(V.sub(a, c)));
    triA[t] = ln / 2;
    if (ln > 1e-6 * longest * longest && ln > 0) for (let k = 0; k < 3; k++) triN[t * 3 + k] = cr[k] / ln; else degen[t] = 1;
    if (ln < 2e-3 * longest * longest) thin[t] = 1;   // a sliver: its normal is mostly rounding
    triH[t] = longest > 0 ? ln / longest : 0;
  }

  // ---- 1. regions
  const nf = faces.length;
  const faceSurf = faces.map((f, i) => (demoted.has(i) ? null : surfOfFace(f)));
  const fpar = Int32Array.from({ length: nf }, (_, i) => i);
  const ffind = (x) => { while (fpar[x] !== x) { fpar[x] = fpar[fpar[x]]; x = fpar[x]; } return x; };
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const q = Math.floor(twinOf[t * 3 + k] / 3);
    const fa = triFace[t], fb = triFace[q];
    if (fa < 0 || fb < 0 || fa >= fb || !faceSurf[fa] || !faceSurf[fb]) continue;
    const ra = ffind(fa), rb = ffind(fb);
    if (ra !== rb && sameSurf(faceSurf[fa], faceSurf[fb], tol * 4)) fpar[ra] = rb;
  }
  // a triangle really lies on a surface: meshfaces.js hands triangles no surface claimed to a neighbour's face (a fillet
  // tool's flat ends, a spline side next to a cap), so every triangle is checked against the surface it is said to be on
  const sag = 1.5 * (1 - Math.cos(Math.PI / Math.max(8, segments)));
  const onSurf = (s, t) => {
    let c = [0, 0, 0], Rm = 0;
    for (let k = 0; k < 3; k++) {
      const p = pt(I[t * 3 + k]);
      c = V.add(c, p);
      const f = sdf(s, p)[0];
      if (s.type === 'plane') { if (Math.abs(f) > tol * 4) return false; continue; }
      let R = s.r;
      if (s.type === 'torus') R = s.R + s.r;
      else if (s.type === 'cone') { const v = V.sub(p, s.o); R = V.len(V.sub(v, V.mul(s.d, V.dot(v, s.d)))); }
      if (f > tol * 4 || f < -(tol * 4 + sag * R)) return false;
      if (R > Rm) Rm = R;
    }
    if (thin[t]) return true;
    // a needle no taller than the surface's own chord sag (three points of one meridian at an imported sphere's pole) can
    // stand edge-on to the surface: its corners are on it, which is what counts
    if (s.type !== 'plane' && triH[t] <= tol * 4 + sag * Rm) return true;
    const d = V.dot(sdf(s, V.mul(c, 1 / 3))[1], [triN[t * 3], triN[t * 3 + 1], triN[t * 3 + 2]]);
    return s.type === 'plane' ? d > 0.9 : Math.abs(d) > 0.7;
  };
  const reg = new Int32Array(nt).fill(-1);
  for (let t = 0; t < nt; t++) { const f = triFace[t]; if (f >= 0 && f < nf && faceSurf[f] && !degen[t] && onSurf(faceSurf[ffind(f)], t)) reg[t] = ffind(f); }
  // … and one that is on a neighbour's exact surface joins it (the fillet tool's end is part of the cap it lies in)
  for (let pass = 0, changed = 1; changed && pass < 1000; pass++) {
    changed = 0;
    for (let t = 0; t < nt; t++) {
      if (reg[t] >= 0 || degen[t]) continue;
      for (let k = 0; k < 3; k++) {
        const q = Math.floor(twinOf[t * 3 + k] / 3);
        if (reg[q] >= 0 && onSurf(faceSurf[reg[q]], t)) { reg[t] = reg[q]; changed++; break; }
      }
    }
  }
  // flat patches of what is left: neighbouring facets with one normal, checked for flatness afterwards
  const tpar = Int32Array.from({ length: nt }, (_, i) => i);
  const tfind = (x) => { while (tpar[x] !== x) { tpar[x] = tpar[tpar[x]]; x = tpar[x]; } return x; };
  const isFacet = (t) => reg[t] < 0 && !degen[t];
  for (let t = 0; t < nt; t++) {
    if (!isFacet(t)) continue;
    for (let k = 0; k < 3; k++) {
      const q = Math.floor(twinOf[t * 3 + k] / 3);
      if (q <= t || !isFacet(q)) continue;
      if (triN[t * 3] * triN[q * 3] + triN[t * 3 + 1] * triN[q * 3 + 1] + triN[t * 3 + 2] * triN[q * 3 + 2] > 1 - 1e-9) { const a = tfind(t), b = tfind(q); if (a !== b) tpar[a] = b; }
    }
  }
  const groups = new Map();
  for (let t = 0; t < nt; t++) if (isFacet(t)) { const r = tfind(t); const g = groups.get(r); if (g) g.push(t); else groups.set(r, [t]); }
  const regions = new Map();   // id → { surf, facet, faces: [face indices] }
  for (let f = 0; f < nf; f++) if (faceSurf[f]) { const r = ffind(f); const g = regions.get(r); if (g) g.faces.push(f); else regions.set(r, { surf: faceSurf[r], facet: false, faces: [f] }); }
  let nextId = nf;
  const addFacet = (tris) => {
    let n = [0, 0, 0];
    for (const t of tris) n = V.add(n, V.mul([triN[t * 3], triN[t * 3 + 1], triN[t * 3 + 2]], triA[t]));
    n = V.norm(n);
    const o = pt(I[tris[0] * 3]);
    const id = nextId++;
    regions.set(id, { surf: { type: 'plane', n, o }, facet: true, faces: [] });
    for (const t of tris) reg[t] = id;
    return id;
  };
  for (const tris of groups.values()) {
    let n = [0, 0, 0];
    for (const t of tris) n = V.add(n, V.mul([triN[t * 3], triN[t * 3 + 1], triN[t * 3 + 2]], triA[t]));
    n = V.norm(n);
    const o = pt(I[tris[0] * 3]);
    const flat = tris.length === 1 || tris.every((t) => [0, 1, 2].every((k) => Math.abs(V.dot(V.sub(pt(I[t * 3 + k]), o), n)) <= tol * 4));
    if (flat) addFacet(tris); else for (const t of tris) addFacet([t]);
  }
  // needles (no area): the region of the neighbour across their longest edge
  for (let pass = 0; pass < 8; pass++) {
    let left = 0;
    for (let t = 0; t < nt; t++) {
      if (reg[t] >= 0) continue;
      let best = -1, bl = -1;
      for (let k = 0; k < 3; k++) {
        const q = Math.floor(twinOf[t * 3 + k] / 3);
        if (reg[q] < 0) continue;
        const l = V.len(V.sub(pt(I[t * 3 + k]), pt(I[t * 3 + (k + 1) % 3])));
        if (l > bl) { bl = l; best = q; }
      }
      if (best >= 0) reg[t] = reg[best]; else left++;
    }
    if (!left) break;
  }
  if (reg.includes(-1)) return { ok: false, demote: [], why: 'triangles with no area and no neighbour' };

  const curved = (id) => { const r = regions.get(id); return !r.facet && r.surf.type !== 'plane'; };
  const demote = new Set();
  const demoteRegion = (id) => { if (curved(id)) for (const f of regions.get(id).faces) demote.add(f); };

  // ---- 2. topology: boundary mesh edges, B-rep vertices, chains
  const touching = new Set();   // flat patches beside other flat patches: facets standing in for a surface
  const adj = new Map();   // vertex → [[other, pairKey]]
  const forced = new Uint8Array(nv);
  const pairKey = (a, b) => (a < b ? a * HK + b : b * HK + a);
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const q = Math.floor(twinOf[t * 3 + k] / 3);
    const ra = reg[t], rb = reg[q];
    if (ra === rb) continue;
    const fa = regions.get(ra).facet, fb = regions.get(rb).facet;
    const u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3];
    if (u > v) continue;
    if (fa !== fb && curved(fa ? rb : ra)) {
      // a flat patch beside a round face: fine when their shared segment lies on the round surface (a flat face the
      // kernel named no surface for, meeting a fillet along a ruling); a facet standing in for a curve does not
      const s = regions.get(fa ? rb : ra).surf, a = pt(u), b = pt(v);
      if (![a, b, V.mul(V.add(a, b), 0.5)].every((p) => Math.abs(sdf(s, p)[0]) <= tol * 4)) demoteRegion(fa ? rb : ra);
    }
    if (fa && fb) { touching.add(ra); touching.add(rb); }
    const pk = pairKey(ra, rb);
    const link = (x, y) => { const l = adj.get(x); if (l) l.push([y, pk]); else adj.set(x, [[y, pk]]); };
    link(u, v); link(v, u);
    if (fa || fb) { forced[u] = 1; forced[v] = 1; }
  }
  if (demote.size) return { ok: false, demote: [...demote], why: 'round faces beside faceted ones' };
  const isVert = new Uint8Array(nv);
  for (const [v, l] of adj) if (forced[v] || l.length !== 2 || l[0][1] !== l[1][1]) isVert[v] = 1;
  const chains = [];        // { verts: [mesh vertex …], ra, rb }
  const segChain = new Map();   // undirected mesh edge key → [chain, index of its first vertex in the chain]
  const ukey = (u, v) => (u < v ? u * HK + v : v * HK + u);
  const walk = (v0, v1, pk) => {
    const verts = [v0, v1];
    segChain.set(ukey(v0, v1), [chains.length, 0]);
    let prev = v0, cur = v1;
    while (!isVert[cur]) {
      const l = adj.get(cur);
      const nx = l[0][0] === prev ? l[1][0] : l[0][0];
      segChain.set(ukey(cur, nx), [chains.length, verts.length - 1]);
      verts.push(nx); prev = cur; cur = nx;
      if (verts.length > nv + 2) throw new StepExactError('failed', 'an edge does not end');
    }
    chains.push({ verts, ra: Math.floor(pk / HK), rb: pk % HK });
  };
  for (const [v, l] of adj) if (isVert[v]) for (const [w, pk] of l) if (!segChain.has(ukey(v, w))) walk(v, w, pk);
  for (const [v, l] of adj) for (const [w, pk] of l) if (!segChain.has(ukey(v, w))) { isVert[v] = 1; walk(v, w, pk); }   // closed rings: one vertex each

  // ---- 3. geometry: vertices, then edges
  const vertRegs = new Map();
  for (const c of chains) for (const v of [c.verts[0], c.verts[c.verts.length - 1]]) { let s = vertRegs.get(v); if (!s) { s = new Set(); vertRegs.set(v, s); } s.add(c.ra); s.add(c.rb); }
  const exactSurfs = (ids) => [...ids].map((id) => regions.get(id)).filter((r) => !r.facet).map((r) => r.surf);
  const vpos = new Map();
  for (const [v, ids] of vertRegs) {
    const p0 = pt(v), r = project(p0, exactSurfs(ids));
    if (!(r.res <= 1e-9 * size + 1e-10) || V.len(V.sub(r.p, p0)) > 0.02 * size + 1e-6) { for (const id of ids) demoteRegion(id); if (![...ids].some(curved)) vpos.set(v, p0); continue; }
    vpos.set(v, r.p);
  }
  if (demote.size) return { ok: false, demote: [...demote], why: 'a corner is not on its surfaces' };
  let maxDev = 0;
  const eps = 1e-8 * size + 1e-9;
  for (const c of chains) {
    const A = regions.get(c.ra), B = regions.get(c.rb);
    const a = vpos.get(c.verts[0]), b = vpos.get(c.verts[c.verts.length - 1]);
    const closed = c.verts[0] === c.verts[c.verts.length - 1];
    c.a = a; c.b = b; c.closed = closed;
    if (A.facet || B.facet || c.verts.length === 2 && !closed && (A.surf.type === 'plane' && B.surf.type === 'plane')) { c.geom = { type: 'line' }; continue; }
    const surfs = [A.surf, B.surf];
    const pts = [a];
    let bad = false;
    for (let i = 1; i < c.verts.length - 1; i++) {
      const p0 = pt(c.verts[i]), r = project(p0, surfs);
      if (!(r.res <= 1e-9 * size + 1e-10) || V.len(V.sub(r.p, p0)) > 0.02 * size + 1e-6) { bad = true; break; }
      pts.push(r.p);
    }
    pts.push(b);
    if (bad) { demoteRegion(c.ra); demoteRegion(c.rb); if (!demote.size) c.geom = { type: 'line' }; continue; }
    const g = fitEdge(pts, closed, surfs, eps, size);
    if (!g) { demoteRegion(c.ra); demoteRegion(c.rb); if (!demote.size) c.geom = { type: 'line' }; continue; }
    c.geom = g;
    if (g.dev > maxDev) maxDev = g.dev;
  }
  if (demote.size) return { ok: false, demote: [...demote], why: 'an edge between two round faces could not be fitted' };

  // ---- loops: each region's boundary half-edges, walked round the mesh
  const isB = (h) => reg[Math.floor(h / 3)] !== reg[Math.floor(twinOf[h] / 3)];
  const nextB = (h) => {
    let t = Math.floor(h / 3), k = (h % 3 + 1) % 3;
    for (let guard = 0; guard < 100000; guard++) {
      if (isB(t * 3 + k)) return t * 3 + k;
      const q = twinOf[t * 3 + k];
      t = Math.floor(q / 3); k = (q % 3 + 1) % 3;
    }
    throw new StepExactError('failed', 'a face boundary does not close');
  };
  const seen = new Uint8Array(nt * 3);
  const loopsOf = new Map();   // region → [{ edges: [[chain, forward]], pts: [mesh vertices] }]
  for (let h0 = 0; h0 < nt * 3; h0++) {
    if (seen[h0] || !isB(h0)) continue;
    const r = reg[Math.floor(h0 / 3)];
    const edges = [], vs = [];
    for (let h = h0; !seen[h]; h = nextB(h)) {
      seen[h] = 1;
      const t = Math.floor(h / 3), k = h % 3, u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3];
      vs.push(u);
      const [ci, i] = segChain.get(ukey(u, v));
      const c = chains[ci], fwd = c.verts[i] === u && c.verts[i + 1] === v;
      if (fwd ? i === 0 : i === c.verts.length - 2) edges.push([ci, fwd]);
    }
    if (!edges.length) throw new StepExactError('failed', 'a face boundary has no edge');
    const l = loopsOf.get(r); if (l) l.push({ edges, vs }); else loopsOf.set(r, [{ edges, vs }]);
  }

  // ---- 4. shells: regions joined through their edges; each shell's volume says solid or void
  const usedRegs = new Set(reg);
  const rids = [...regions.keys()].filter((id) => usedRegs.has(id));
  const rpar = new Map(rids.map((id) => [id, id]));
  const rfind = (x) => { while (rpar.get(x) !== x) { rpar.set(x, rpar.get(rpar.get(x))); x = rpar.get(x); } return x; };
  for (const c of chains) { const a = rfind(c.ra), b = rfind(c.rb); if (a !== b) rpar.set(a, b); }
  const shells = new Map();   // root → { regs, tris, vol, lo, hi }
  for (const id of rids) { const r = rfind(id); let s = shells.get(r); if (!s) { s = { regs: [], tris: [], vol: 0, lo: [Infinity, Infinity, Infinity], hi: [-Infinity, -Infinity, -Infinity] }; shells.set(r, s); } s.regs.push(id); }
  const regTris = new Map(rids.map((id) => [id, []]));
  for (let t = 0; t < nt; t++) {
    regTris.get(reg[t]).push(t);
    const s = shells.get(rfind(reg[t]));
    s.tris.push(t);
    const a = pt(I[t * 3]), b = pt(I[t * 3 + 1]), c = pt(I[t * 3 + 2]);
    s.vol += V.dot(a, V.cross(b, c)) / 6;
    for (const p of [a, b, c]) for (let k = 0; k < 3; k++) { s.lo[k] = Math.min(s.lo[k], p[k]); s.hi[k] = Math.max(s.hi[k], p[k]); }
  }
  const outer = [...shells.values()].filter((s) => s.vol > 0);
  if (!outer.length) throw new StepExactError('no_solid');
  for (const s of outer) s.voids = [];
  let slivers = 0;
  for (const s of shells.values()) {
    if (s.vol > 0) continue;
    // a cavity with no room in it (two faces a rounding error apart, left by a union) is not written
    let area = 0;
    for (const t of s.tris) area += triA[t];
    if (-s.vol < 1e-4 * Math.pow(area, 1.5)) { slivers++; continue; }
    // the solid a cavity is in: the smallest one that holds a point of it (a ray from the point crosses its skin an odd number of times)
    const t0 = s.tris.reduce((m, t) => (triA[t] > triA[m] ? t : m), s.tris[0]);   // just inside the cavity, off its largest facet
    const q = V.add(V.mul(V.add(V.add(pt(I[t0 * 3]), pt(I[t0 * 3 + 1])), pt(I[t0 * 3 + 2])), 1 / 3), V.mul([triN[t0 * 3], triN[t0 * 3 + 1], triN[t0 * 3 + 2]], 1e-4 * size));
    const rd = V.norm([0.5773, 0.3141, 0.7532]);
    const inside = (o) => {
      if (![0, 1, 2].every((k) => o.lo[k] <= s.lo[k] + tol && o.hi[k] >= s.hi[k] - tol)) return false;
      let n = 0;
      for (const t of o.tris) {
        const a = pt(I[t * 3]), e1 = V.sub(pt(I[t * 3 + 1]), a), e2 = V.sub(pt(I[t * 3 + 2]), a);
        const h = V.cross(rd, e2), det = V.dot(e1, h);
        if (Math.abs(det) < 1e-300) continue;
        const sv = V.sub(q, a), u = V.dot(sv, h) / det;
        if (u < 0 || u > 1) continue;
        const qv = V.cross(sv, e1), v = V.dot(rd, qv) / det;
        if (v < 0 || u + v > 1) continue;
        if (V.dot(e2, qv) / det > 0) n++;
      }
      return n % 2 === 1;
    };
    const host = outer.filter(inside).sort((x, y) => x.vol - y.vol)[0];
    if (!host) throw new StepExactError('failed', 'a cavity outside every solid');
    s.isVoid = true; host.voids.push(s);
  }

  // ---- write
  const ap214 = schema === 'AP214';
  const T = map || (zUp ? (p) => [p[0], -p[2], p[1]] : (p) => p);
  const T0 = T([0, 0, 0]), TD = (d) => V.sub(T(d), T0);   // directions: the turn without the shift
  const ents = [];
  const add = (s) => { ents.push(s); return '#' + ents.length; };
  const nm = str(name);
  const ctx = add(ap214 ? "APPLICATION_CONTEXT('core data for automotive mechanical design processes')" : "APPLICATION_CONTEXT('managed model based 3d engineering')");
  add(ap214 ? `APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,${ctx})` : `APPLICATION_PROTOCOL_DEFINITION('international standard','ap242_managed_model_based_3d_engineering',2011,${ctx})`);
  const pctx = add(`PRODUCT_CONTEXT('',${ctx},'mechanical')`);
  const prod = add(`PRODUCT(${nm},${nm},'',(${pctx}))`);
  add(`PRODUCT_RELATED_PRODUCT_CATEGORY('part',$,(${prod}))`);
  const pdf = add(`PRODUCT_DEFINITION_FORMATION('','',${prod})`);
  const pdc = add(`PRODUCT_DEFINITION_CONTEXT('part definition',${ctx},'design')`);
  const pd = add(`PRODUCT_DEFINITION('design','',${pdf},${pdc})`);
  const pds = add(`PRODUCT_DEFINITION_SHAPE('','',${pd})`);
  const lu = add('(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))');
  const au = add('(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))');
  const su = add('(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())');
  const unc = add(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(${real(Math.max(1e-6, 2 * maxDev, 2 * tol))}),${lu},'distance_accuracy_value','confusion accuracy')`);
  const gctx = add(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((${unc}))GLOBAL_UNIT_ASSIGNED_CONTEXT((${lu},${au},${su}))REPRESENTATION_CONTEXT('Context #1','3D Context with UNIT and UNCERTAINTY'))`);
  const cp = (p) => { const q = T(p); return add(`CARTESIAN_POINT('',(${real(q[0])},${real(q[1])},${real(q[2])}))`); };
  const dir = (d) => { const q = V.norm(TD(V.norm(d))); return add(`DIRECTION('',(${real(q[0])},${real(q[1])},${real(q[2])}))`); };
  const a2p = (o, z, x) => add(`AXIS2_PLACEMENT_3D('',${cp(o)},${dir(z)},${dir(x || perp(V.norm(z)))})`);
  const place = add(`AXIS2_PLACEMENT_3D('',${add("CARTESIAN_POINT('',(0.,0.,0.))")},${add("DIRECTION('',(0.,0.,1.))")},${add("DIRECTION('',(1.,0.,0.))")})`);

  const counts = { faces: 0, exact: 0, faceted: 0, plane: 0, cylinder: 0, cone: 0, sphere: 0, torus: 0, edges: 0, line: 0, circle: 0, ellipse: 0, spline: 0, vertices: 0, solids: outer.length, voids: 0, slivers };
  const vref = new Map();
  const vertex = (v) => { let r = vref.get(v); if (!r) { r = add(`VERTEX_POINT('',${cp(vpos.get(v))})`); vref.set(v, r); counts.vertices++; } return r; };
  const edgeMemo = new Map();
  const edgeRef = (ci) => {
    let ref = edgeMemo.get(ci);
    if (ref) return ref;
    const c = chains[ci], g = c.geom;
    counts.edges++;
    let curve;
    if (g.type === 'line') { counts.line++; curve = add(`LINE('',${cp(c.a)},${add(`VECTOR('',${dir(V.sub(c.b, c.a))},1.)`)})`); }
    else if (g.type === 'circle') { counts.circle++; curve = add(`CIRCLE('',${a2p(g.c, g.n, V.sub(c.a, g.c))},${real(g.r)})`); }
    else if (g.type === 'ellipse') { counts.ellipse++; curve = add(`ELLIPSE('',${a2p(g.c, g.n, g.x)},${real(g.a)},${real(g.b)})`); }
    else {
      counts.spline++;
      const U = g.curve.knots, ks = [], ms = [];
      for (const u of U) { if (ks.length && u === ks[ks.length - 1]) ms[ms.length - 1]++; else { ks.push(u); ms.push(1); } }
      curve = add(`B_SPLINE_CURVE_WITH_KNOTS('',${g.curve.deg},(${g.curve.cvs.map(cp).join(',')}),.UNSPECIFIED.,.F.,.F.,(${ms.join(',')}),(${ks.map(real).join(',')}),.UNSPECIFIED.)`);
    }
    ref = add(`EDGE_CURVE('',${vertex(c.verts[0])},${vertex(c.verts[c.verts.length - 1])},${curve},.T.)`);
    edgeMemo.set(ci, ref);
    return ref;
  };

  const demotedNames = [...demoted].map((f) => faces[f]?.name).filter(Boolean);
  const faceRef = (id, flip) => {
    const R = regions.get(id), s = R.surf, tris = regTris.get(id);
    // does the surface's own normal point out of the solid?
    let dotSum = 0;
    const rv = new Set();
    for (const t of tris) {
      const c = V.mul(V.add(V.add(pt(I[t * 3]), pt(I[t * 3 + 1])), pt(I[t * 3 + 2])), 1 / 3);
      dotSum += triA[t] * V.dot(sdf(s, c)[1], [triN[t * 3], triN[t * 3 + 1], triN[t * 3 + 2]]);
      rv.add(I[t * 3]); rv.add(I[t * 3 + 1]); rv.add(I[t * 3 + 2]);
    }
    let same = dotSum >= 0;
    let surf;
    if (s.type === 'plane') { surf = add(`PLANE('',${a2p(s.o, s.n)})`); }
    else if (s.type === 'cylinder') surf = add(`CYLINDRICAL_SURFACE('',${a2p(s.o, s.d)},${real(s.r)})`);
    else if (s.type === 'sphere') surf = add(`SPHERICAL_SURFACE('',${a2p(s.o, [0, 1, 0])},${real(s.r)})`);
    else if (s.type === 'torus') surf = add(`TOROIDAL_SURFACE('',${a2p(s.o, s.d)},${real(s.R)},${real(s.r)})`);
    else {
      let hs = 0, n = 0;
      for (const v of rv) { hs += V.dot(V.sub(pt(v), s.o), s.d); n++; }
      const h0 = Math.max(hs / n, 1e-6 * size);
      surf = add(`CONICAL_SURFACE('',${a2p(V.add(s.o, V.mul(s.d, h0)), s.d)},${real(h0 * s.k)},${real(Math.atan(s.k))})`);
    }
    counts[s.type]++; counts.faces++; if (R.facet && touching.has(id)) counts.faceted++; else counts.exact++;   // a lone flat patch is a flat face
    const loops = loopsOf.get(id) || [];
    if (s.type === 'plane' && loops.length > 1) {
      const area = (l) => { let a = [0, 0, 0]; for (let i = 0; i < l.vs.length; i++) a = V.add(a, V.cross(pt(l.vs[i]), pt(l.vs[(i + 1) % l.vs.length]))); return V.dot(a, s.n) * (same ? 1 : -1); };
      loops.sort((x, y) => area(y) - area(x));
    }
    const ori = flip ? '.F.' : '.T.';
    const bounds = loops.map((l, i) => {
      const oes = l.edges.map(([ci, fwd]) => add(`ORIENTED_EDGE('',*,*,${edgeRef(ci)},${fwd ? '.T.' : '.F.'})`));
      return add(`${i === 0 ? 'FACE_OUTER_BOUND' : 'FACE_BOUND'}('',${add(`EDGE_LOOP('',(${oes.join(',')}))`)},${ori})`);
    });
    const pointBound = (p) => bounds.push(add(`${bounds.length ? 'FACE_BOUND' : 'FACE_OUTER_BOUND'}('',${add(`VERTEX_LOOP('',${add(`VERTEX_POINT('',${cp(p)})`)})`)},.T.)`));
    if (s.type === 'cone') { for (const v of rv) if (V.len(V.sub(pt(v), s.o)) <= tol * 10) { pointBound(s.o); break; } }   // the apex is part of the face
    if (!bounds.length) {
      if (s.type === 'sphere') pointBound(V.add(s.o, [0, s.r, 0]));
      else if (s.type === 'torus') pointBound(V.add(s.o, V.mul(perp(s.d), s.R + s.r)));
      else throw new StepExactError('failed', 'a face with no boundary');
    }
    if (flip) same = !same;
    const fname = R.facet ? '' : (faces[R.faces[0]]?.name || '');
    return add(`ADVANCED_FACE(${str(fname)},(${bounds.join(',')}),${surf},${same ? '.T.' : '.F.'})`);
  };
  const items = [place];
  for (const s of outer) {
    const sh = add(`CLOSED_SHELL('',(${s.regs.map((id) => faceRef(id, false)).join(',')}))`);
    if (!s.voids.length) { items.push(add(`MANIFOLD_SOLID_BREP(${nm},${sh})`)); continue; }
    const vs = s.voids.map((v) => { counts.voids++; return add(`ORIENTED_CLOSED_SHELL('',*,${add(`CLOSED_SHELL('',(${v.regs.map((id) => faceRef(id, true)).join(',')}))`)},.F.)`); });
    items.push(add(`BREP_WITH_VOIDS(${nm},${sh},(${vs.join(',')}))`));
  }
  const rep = add(`ADVANCED_BREP_SHAPE_REPRESENTATION(${nm},(${items.join(',')}),${gctx})`);
  add(`SHAPE_DEFINITION_REPRESENTATION(${pds},${rep})`);
  const iso = date.toISOString().slice(0, 19);
  const head = [
    'ISO-10303-21;', 'HEADER;',
    `FILE_DESCRIPTION(('PartCraft exact solid${counts.faceted ? ' (some faces faceted)' : ''}'),'2;1');`,
    `FILE_NAME(${str(name + '.step')},'${iso}',(''),(''),'PartCraft','PartCraft','');`,
    ap214 ? "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));" : "FILE_SCHEMA(('AP242_MANAGED_MODEL_BASED_3D_ENGINEERING_MIM_LF { 1 0 10303 442 1 1 4 }'));",
    'ENDSEC;', 'DATA;',
  ];
  const body = ents.map((e, i) => `#${i + 1}=${e};`);
  return { ok: true, out: { text: [...head, ...body, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n'), counts, maxDev, demoted: demotedNames } };
}

// ------------------------------------------------------------------------------------------------ edge curves

/** The curve through pts (already on both surfaces), in their order: line, circle, ellipse or cubic B-spline. null = no fit. */
function fitEdge(pts, closed, surfs, eps, size) {
  const a = pts[0], b = pts[pts.length - 1], n = pts.length;
  if (!closed) {
    const d = V.sub(b, a), dl = V.len(d);
    if (dl > eps && pts.every((p) => V.len(V.cross(V.sub(p, a), V.mul(d, 1 / dl))) <= eps * 10)) return { type: 'line', dev: 0 };
  }
  if (n >= 3) {
    // a circle through three spread points, checked on all of them
    const q = closed ? [pts[0], pts[Math.floor((n - 1) / 3)], pts[Math.floor(2 * (n - 1) / 3)]] : [a, pts[Math.floor(n / 2)], b];
    const circ = circleOf(q[0], q[1], q[2]);
    if (circ && circ.r < 1e6 * size) {
      let { c, n: nn, r } = circ;
      // on a round surface's axis: take the axis as the circle's own (exact, not fitted)
      for (const s of surfs) {
        if (!s.d || Math.abs(V.dot(s.d, nn)) < 1 - 1e-9) continue;
        const v = V.sub(c, s.o), off = V.len(V.sub(v, V.mul(s.d, V.dot(v, s.d))));
        if (off <= eps * 100) { c = V.add(s.o, V.mul(s.d, V.dot(V.sub(a, s.o), s.d))); nn = V.dot(s.d, nn) < 0 ? V.mul(s.d, -1) : [...s.d]; r = V.len(V.sub(a, c)); break; }
      }
      if (r > eps * 100 && pts.every((p) => { const v = V.sub(p, c); return Math.abs(V.len(v) - r) <= eps * 100 && Math.abs(V.dot(v, nn)) <= eps * 100; })) {
        return { type: 'circle', c, n: turnOf(pts, c, nn) < 0 ? V.mul(nn, -1) : nn, r, dev: 0 };
      }
    }
    // a plane cutting a cylinder at an angle: an ellipse
    const pl = surfs.find((s) => s.type === 'plane'), cy = surfs.find((s) => s.type === 'cylinder');
    if (pl && cy) {
      const cosA = V.dot(pl.n, cy.d);
      if (Math.abs(cosA) > 1e-6) {
        const c = V.add(cy.o, V.mul(cy.d, V.dot(V.sub(pl.o, cy.o), pl.n) / cosA));
        const x = V.norm(V.sub(cy.d, V.mul(pl.n, cosA))), y = V.cross(pl.n, x);
        const A = cy.r / Math.abs(cosA), Bm = cy.r;
        if (pts.every((p) => { const v = V.sub(p, c); return Math.abs(Math.hypot(V.dot(v, x) / A, V.dot(v, y) / Bm) - 1) <= 1e-7; })) {
          return { type: 'ellipse', c, n: turnOf(pts, c, pl.n) < 0 ? V.mul(pl.n, -1) : [...pl.n], x, a: A, b: Bm, dev: 0 };
        }
      }
    }
  }
  return splineOf(pts, surfs, size);
}

function circleOf(p, q, r) {
  const u = V.sub(q, p), v = V.sub(r, p), w = V.cross(u, v), wl = V.dot(w, w);
  if (wl < 1e-24 * (V.dot(u, u) * V.dot(v, v) + 1e-300)) return null;
  const c = V.add(p, V.mul(V.add(V.mul(V.cross(w, u), V.dot(v, v)), V.mul(V.cross(v, w), V.dot(u, u))), 1 / (2 * wl)));
  return { c, n: V.norm(w), r: V.len(V.sub(p, c)) };
}

/** Which way the points go round c about n (> 0: counter-clockwise). */
function turnOf(pts, c, n) {
  let s = 0;
  for (let i = 1; i < pts.length; i++) s += V.dot(V.cross(V.sub(pts[i - 1], c), V.sub(pts[i], c)), n);
  return s;
}

function splineOf(pts0, surfs, size) {
  // drop points that crowd their neighbour (two tessellations crossing leave some very close pairs)
  let total = 0;
  for (let i = 1; i < pts0.length; i++) total += V.len(V.sub(pts0[i], pts0[i - 1]));
  if (!(total > 0)) return null;
  const minGap = total / Math.max(8, pts0.length) * 0.2;
  let Q = [pts0[0]];
  for (let i = 1; i < pts0.length - 1; i++) if (V.len(V.sub(pts0[i], Q[Q.length - 1])) >= minGap && V.len(V.sub(pts0[i], pts0[pts0.length - 1])) >= minGap) Q.push(pts0[i]);
  Q.push(pts0[pts0.length - 1]);
  let curve = null, dev = Infinity;
  for (let round = 0; round < 6; round++) {
    let t;
    try { t = fitParams(Q, 'chord'); curve = interpolate(Q, 3, { params: t }); } catch { return null; }
    dev = 0;
    const next = [Q[0]];
    for (let i = 0; i + 1 < Q.length; i++) {
      const mid = curvePoint(curve, (t[i] + t[i + 1]) / 2);
      const pr = project(mid, surfs);
      if (!(pr.res <= 1e-9 * size + 1e-10)) return null;
      const d = V.len(V.sub(pr.p, mid));
      if (d > dev) dev = d;
      if (d > FIT_TOL / 4) next.push(pr.p);
      next.push(Q[i + 1]);
    }
    if (dev <= FIT_TOL || next.length > 600) break;
    Q = next;
  }
  if (!(dev <= FIT_TOL * 100)) return null;
  return { type: 'spline', curve, dev };
}
