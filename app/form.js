/* SPDX-License-Identifier: Apache-2.0 */
/**
 * form.js — freeform "Form" bodies (DOM-free): a control cage refined by Catmull–Clark subdivision.
 * The cage is plain JSON and every edit is a pure function form → new form (so the undo history is
 * whole-form snapshots like the part's).
 *
 *   form = { format:'partcraft-form', version:1, verts:[[x,y,z]], faces:[[v…]] (3–64 verts, CCW seen
 *            from outside), creases:[[a, b, w]] (w in (0, 10]; 10 = SHARP = infinitely sharp; smaller
 *            = semi-sharp, DeRose: sharp rules for w levels, fractional part blended), corners:[v]
 *            (sharp vertices, stay put), sym: null | { axis:'x'|'y'|'z', at, side: 1|-1 } }
 *
 * Subdivision (`subdivide`): Catmull–Clark with the usual boundary/crease rules — boundary edges are
 * infinitely sharp, a vertex on 2 sharp edges takes the crease rule (a + 6v + b)/8, on 3+ (or marked,
 * or a boundary vertex with one face) the corner rule (stays); semi-sharp edges lose 1 per level.
 * `limitPoint` = the exact limit position masks (smooth: (n²v + 4Σe + Σf)/(n(n+5)), crease (a+4v+b)/6,
 * corner v); `tangentNormal` = Halstead's tangent masks.
 *
 * Conversion (`patches`): the cage is refined `level` times (≥ 1 when it has non-quads or semi-sharp
 * creases, so every face is a quad and every remaining crease infinitely sharp), then every quad
 * becomes one bicubic Bézier patch:
 *   - its 4×4 uniform B-spline grid (the face, the vertices across its four edges; across a sharp edge
 *     the phantom row 2·edge − inner, which reproduces the crease/boundary curve rule exactly) →
 *     Bézier points; corners = limit positions. Corners never need the diagonal grid points, so the
 *     same formula works for every quad.
 *   - a quad whose four corners are regular in their sector (interior valence 4; crease vertex with 2
 *     faces on this side; corner with 1) is EXACTLY the limit surface (Stam / B-spline equivalence);
 *     the test checks 1e-9 against the subdivision limit.
 *   - at an irregular corner (extraordinary vertex, dart, crease/corner vertex with an odd sector) the
 *     patch is an approximation: corner = the exact limit point, the two edge-adjacent Bézier points
 *     projected into the exact limit tangent plane (smooth/dart corners), the rest from the grid.
 *     Shared edge curves come from symmetric stencils, so neighbours meet exactly (watertight, C0);
 *     faces away from irregular corners join C2; tangent continuity across the edges that meet an
 *     irregular corner is approximate (measured by `patchReport`).
 */
import * as V from './vec.js';
import { t } from './i18n.js';
import { lerp3 as lerp, mid2 as mid } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const FORMAT = 'partcraft-form';
export const VERSION = 1;
export const SHARP = 10;
export const MAX_VERTS = 20000;
export const MAX_FACES = 20000;
const AXES = { x: 0, y: 1, z: 2 };

export const ek = (a, b) => (a < b ? a + ',' + b : b + ',' + a);
const keyPair = (k) => k.split(',').map(Number);
const clone = (form) => ({ format: FORMAT, version: VERSION, verts: form.verts.map((p) => [...p]), faces: form.faces.map((f) => [...f]), creases: (form.creases || []).map((c) => [...c]), corners: [...(form.corners || [])], sym: form.sym ? { ...form.sym } : null });
const avg = (pts) => { const s = [0, 0, 0]; for (const p of pts) { s[0] += p[0]; s[1] += p[1]; s[2] += p[2]; } const n = pts.length || 1; return [s[0] / n, s[1] / n, s[2] / n]; };
const comb = (terms) => { const s = [0, 0, 0]; for (const [w, p] of terms) { s[0] += w * p[0]; s[1] += w * p[1]; s[2] += w * p[2]; } return s; };
// fail(key, fills): the message comes from the language file (t is looked up here, at module scope: many functions
// below have a local `t` (the topology), which must never meet a t() call)
const fail = (key, fills) => { throw new Error(t(key, fills)); };

export function emptyForm() { return { format: FORMAT, version: VERSION, verts: [], faces: [], creases: [], corners: [], sym: null }; }

// ---------------------------------------------------------------- internal mesh + topology

/** The subdivision mesh of a form: P points, F faces, W crease weights (Infinity = sharp), C corners. */
export function meshOf(form) {
  const W = new Map();
  for (const [a, b, w] of form.creases || []) W.set(ek(a, b), w >= SHARP ? Infinity : w);
  return { P: form.verts.map((p) => [...p]), F: form.faces.map((f) => [...f]), W, C: new Set(form.corners || []) };
}

/** Edges (key → { a, b, key, f:[faces], w }), faces per vertex, edge keys per vertex. Boundary edges are sharp. */
export function topo(m) {
  const E = new Map();
  const vf = m.P.map(() => []), ve = m.P.map(() => []);
  m.F.forEach((f, fi) => {
    for (let k = 0; k < f.length; k++) {
      const v = f[k], w = f[(k + 1) % f.length];
      vf[v].push(fi);
      const key = ek(v, w);
      let e = E.get(key);
      if (!e) { e = { a: Math.min(v, w), b: Math.max(v, w), key, f: [] }; E.set(key, e); ve[v].push(key); ve[w].push(key); }
      e.f.push(fi);
    }
  });
  for (const e of E.values()) e.w = e.f.length < 2 ? Infinity : (m.W.get(e.key) || 0);
  return { E, vf, ve };
}

const other = (e, v) => (e.a === v ? e.b : e.a);
function sharpAt(t, v, finite = true) { return t.ve[v].map((k) => t.E.get(k)).filter((e) => (finite ? e.w > 0 : e.w === Infinity)); }
function isCorner(m, t, v, s) { return m.C.has(v) || s.length > 2 || (s.length === 2 && t.vf[v].length === 1); }

/** One Catmull–Clark step. `track` (optional): per face { root, uv:[[u,v]…] }, refined alongside (quads). */
export function subdivide(m, track = null) {
  const t = topo(m);
  const nV = m.P.length;
  const fp = m.F.map((f) => avg(f.map((v) => m.P[v])));
  const eIdx = new Map();
  const P = m.P.map(() => null);
  const edges = [...t.E.values()];
  edges.forEach((e, i) => {
    eIdx.set(e.key, nV + i);
    const mid = lerp(m.P[e.a], m.P[e.b], 0.5);
    let p;
    if (e.w >= 1) p = mid;
    else {
      const sm = avg([m.P[e.a], m.P[e.b], fp[e.f[0]], fp[e.f[1]]]);
      p = e.w > 0 ? lerp(sm, mid, e.w) : sm;
    }
    P.push(p);
  });
  for (const p of fp) P.push(p);
  for (let v = 0; v < nV; v++) {
    const pv = m.P[v];
    const n = t.ve[v].length;
    if (!n) { P[v] = [...pv]; continue; }
    const Q = avg(t.vf[v].map((fi) => fp[fi]));
    const R = avg(t.ve[v].map((k) => { const e = t.E.get(k); return lerp(m.P[e.a], m.P[e.b], 0.5); }));
    const smooth = comb([[1 / n, Q], [2 / n, R], [(n - 3) / n, pv]]);
    const s = sharpAt(t, v);
    const corner = isCorner(m, t, v, s);
    if (s.length < 2 && !corner) { P[v] = smooth; continue; }
    const sharpP = corner ? [...pv] : comb([[1 / 8, m.P[other(s[0], v)]], [6 / 8, pv], [1 / 8, m.P[other(s[1], v)]]]);
    const sh = m.C.has(v) ? Infinity : s.reduce((a, e) => a + e.w, 0) / s.length;
    P[v] = sh >= 1 ? sharpP : lerp(smooth, sharpP, sh);
  }
  const F = [], nt = track ? [] : null;
  m.F.forEach((f, fi) => {
    const fv = nV + edges.length + fi;
    const L = f.length;
    for (let k = 0; k < L; k++) {
      const c = f[k];
      F.push([c, eIdx.get(ek(c, f[(k + 1) % L])), fv, eIdx.get(ek(f[(k + L - 1) % L], c))]);
      if (track) {
        const U = track[fi].uv;
        nt.push({ root: track[fi].root, uv: [U[k], mid(U[k], U[(k + 1) % L]), [U.reduce((s, q) => s + q[0], 0) / L, U.reduce((s, q) => s + q[1], 0) / L], mid(U[(k + L - 1) % L], U[k])] });
      }
    }
  });
  const W = new Map();
  for (const e of edges) {
    if (e.f.length < 2) continue;
    const w = m.W.get(e.key);
    if (!(w > 0)) continue;
    const w2 = w === Infinity ? Infinity : w - 1;
    if (w2 > 0) { const mi = eIdx.get(e.key); W.set(ek(e.a, mi), w2); W.set(ek(mi, e.b), w2); }
  }
  return { P, F, W, C: new Set(m.C), track: nt };
}

/** Exact limit position of vertex v of an all-quad mesh (remaining creases treated as sharp). */
export function limitPoint(m, t, v) {
  const s = sharpAt(t, v);
  const pv = m.P[v];
  if (isCorner(m, t, v, s)) return [...pv];
  if (s.length === 2) return comb([[1 / 6, m.P[other(s[0], v)]], [4 / 6, pv], [1 / 6, m.P[other(s[1], v)]]]);
  const n = t.ve[v].length;
  const terms = [[n * n, pv]];
  for (const k of t.ve[v]) terms.push([4, m.P[other(t.E.get(k), v)]]);
  for (const fi of t.vf[v]) { const f = m.F[fi]; const p = f.indexOf(v); terms.push([1, m.P[f[(p + 2) % 4]]]); }
  return comb(terms.map(([w, p]) => [w / (n * (n + 5)), p]));
}

/** Ordered one-ring of an interior vertex of a quad mesh: [{ e, f }] (edge neighbour, face diagonal), or null. */
function ring(m, t, v) {
  const out = [];
  let fi = t.vf[v][0];
  for (let guard = 0; guard < 64; guard++) {
    const f = m.F[fi];
    const p = f.indexOf(v);
    out.push({ e: f[(p + 1) % 4], f: f[(p + 2) % 4] });
    const prev = f[(p + 3) % 4];
    const e = t.E.get(ek(v, prev));
    if (e.f.length < 2) return null;
    fi = e.f[0] === fi ? e.f[1] : e.f[0];
    if (fi === t.vf[v][0]) return out.length === t.ve[v].length ? out : null;
  }
  return null;
}

/** Unit normal of the limit surface at an interior vertex (Halstead's tangent masks), or null. */
export function tangentNormal(m, t, v) {
  const r = ring(m, t, v);
  if (!r) return null;
  const n = r.length;
  const c = Math.cos(2 * Math.PI / n);
  const A = 1 + c + Math.cos(Math.PI / n) * Math.sqrt(2 * (9 + c));
  let t1 = [0, 0, 0], t2 = [0, 0, 0];
  r.forEach(({ e, f }, j) => {
    const a = 2 * Math.PI * j / n, b = 2 * Math.PI * (j + 1) / n;
    t1 = V.add(t1, V.add(V.mul(m.P[e], A * Math.cos(a)), V.mul(m.P[f], Math.cos(a) + Math.cos(b))));
    t2 = V.add(t2, V.add(V.mul(m.P[e], A * Math.sin(a)), V.mul(m.P[f], Math.sin(a) + Math.sin(b))));
  });
  const nn = V.cross(t1, t2);
  const l = V.len(nn);
  return l > 1e-300 ? V.mul(nn, 1 / l) : null;
}

/** Faces in the sector of face fi around v (bounded by sharp edges). */
function sectorSize(m, t, fi, v) {
  const seen = new Set([fi]);
  for (const dir of [1, -1]) {
    let cur = fi;
    for (let guard = 0; guard < 64; guard++) {
      const f = m.F[cur];
      const p = f.indexOf(v);
      const nb = dir > 0 ? f[(p + 1) % f.length] : f[(p + f.length - 1) % f.length];
      const e = t.E.get(ek(v, nb));
      if (e.w > 0 || e.f.length < 2) break;
      const nx = e.f[0] === cur ? e.f[1] : e.f[0];
      if (seen.has(nx)) return seen.size;   // closed ring, no cut
      seen.add(nx); cur = nx;
    }
  }
  return seen.size;
}

/** Is v a regular corner of face fi (the patch there is exactly the limit surface)? */
export function regularCorner(m, t, fi, v) {
  const s = sharpAt(t, v);
  if (isCorner(m, t, v, s)) return sectorSize(m, t, fi, v) === 1;
  if (s.length === 2) return sectorSize(m, t, fi, v) === 2;
  if (s.length === 1) return false;          // dart
  return t.ve[v].length === 4 && t.vf[v].length === 4;
}

// ---------------------------------------------------------------- Bézier patches

const MB = [[1 / 6, 4 / 6, 1 / 6, 0], [0, 4 / 6, 2 / 6, 0], [0, 2 / 6, 4 / 6, 0], [0, 1 / 6, 4 / 6, 1 / 6]];
export const bern = (u) => [(1 - u) ** 3, 3 * u * (1 - u) ** 2, 3 * u * u * (1 - u), u ** 3];
export const bernD = (u) => [-3 * (1 - u) ** 2, 3 * (1 - u) ** 2 - 6 * u * (1 - u), 6 * u * (1 - u) - 3 * u * u, 3 * u * u];

/** Point of a bicubic Bézier patch (b[i][j], i along u). */
export function evalPatch(b, u, v) {
  const bu = bern(u), bv = bern(v);
  const s = [0, 0, 0];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { const w = bu[i] * bv[j], p = b[i][j]; s[0] += w * p[0]; s[1] += w * p[1]; s[2] += w * p[2]; }
  return s;
}
/** Unit normal (∂u × ∂v) of a patch. */
export function patchNormal(b, u, v) {
  const bu = bern(u), bv = bern(v), du = bernD(u), dv = bernD(v);
  const su = [0, 0, 0], sv = [0, 0, 0];
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    const p = b[i][j];
    for (let k = 0; k < 3; k++) { su[k] += du[i] * bv[j] * p[k]; sv[k] += bu[i] * dv[j] * p[k]; }
  }
  return V.norm(V.cross(su, sv));
}

/** The four grid points across the edge (c_k, c_k+1) of quad fi: [adjacent to c_k, adjacent to c_k+1], reflected across a sharp edge. */
function across(m, t, fi, k) {
  const f = m.F[fi];
  const a = f[k], b = f[(k + 1) % 4];
  const e = t.E.get(ek(a, b));
  if (e.w > 0 || e.f.length < 2) {
    // phantom row: 2·edge − inner (inner = the face's own vertices on the far side)
    const ia = f[(k + 3) % 4], ib = f[(k + 2) % 4];
    return [V.sub(V.mul(m.P[a], 2), m.P[ia]), V.sub(V.mul(m.P[b], 2), m.P[ib])];
  }
  const g = m.F[e.f[0] === fi ? e.f[1] : e.f[0]];
  if (g.length !== 4) fail('form.err.quads');
  const pa = g.indexOf(a), pb = g.indexOf(b);
  const na = g[(pa + 1) % 4] === b ? g[(pa + 3) % 4] : g[(pa + 1) % 4];
  const nb = g[(pb + 1) % 4] === a ? g[(pb + 3) % 4] : g[(pb + 1) % 4];
  return [m.P[na], m.P[nb]];
}

/** Bézier net (4×4, [i][j]) of quad fi, and whether it is exact (all corners regular). */
export function quadPatch(m, t, fi, limits = null) {
  const f = m.F[fi];
  if (f.length !== 4) fail('form.err.quad_patch');
  const G = [0, 1, 2, 3].map(() => [null, null, null, null]);
  G[1][1] = m.P[f[0]]; G[2][1] = m.P[f[1]]; G[2][2] = m.P[f[2]]; G[1][2] = m.P[f[3]];
  [G[1][0], G[2][0]] = across(m, t, fi, 0);
  [G[3][1], G[3][2]] = across(m, t, fi, 1);
  [G[2][3], G[1][3]] = across(m, t, fi, 2);
  [G[0][2], G[0][1]] = across(m, t, fi, 3);
  const b = [0, 1, 2, 3].map(() => [null, null, null, null]);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    if ((i === 0 || i === 3) && (j === 0 || j === 3)) continue;
    const s = [0, 0, 0];
    for (let a = 0; a < 4; a++) {
      if (!MB[i][a]) continue;
      for (let c = 0; c < 4; c++) {
        const w = MB[i][a] * MB[j][c];
        if (!w) continue;
        const p = G[a][c];
        s[0] += w * p[0]; s[1] += w * p[1]; s[2] += w * p[2];
      }
    }
    b[i][j] = s;
  }
  const lim = (v) => (limits ? limits[v] : limitPoint(m, t, v));
  const CORN = [[0, 0, 1, 0, 0, 1], [3, 0, 2, 0, 3, 1], [3, 3, 3, 2, 2, 3], [0, 3, 0, 2, 1, 3]];   // corner, its two edge neighbours
  let exact = true;
  f.forEach((v, k) => {
    const [ci, cj, ai, aj, bi, bj] = CORN[k];
    b[ci][cj] = lim(v);
    if (regularCorner(m, t, fi, v)) return;
    exact = false;
    const s = sharpAt(t, v);
    if (s.length >= 2 || isCorner(m, t, v, s)) return;   // crease/corner: the curves along sharp edges are already exact
    const n = tangentNormal(m, t, v);
    if (!n) return;
    for (const [i, j] of [[ai, aj], [bi, bj]]) b[i][j] = V.sub(b[i][j], V.mul(n, V.dot(V.sub(b[i][j], b[ci][cj]), n)));
  });
  return { b, exact };
}

/** The refinement level a conversion needs: all quads and no semi-sharp creases left; `level` may ask for more (≤ 3). */
export function conversionLevel(form, level = null) {
  const wmax = Math.max(0, ...(form.creases || []).map((c) => (c[2] >= SHARP ? 0 : c[2])));
  const nonQuad = form.faces.some((f) => f.length !== 4);
  let need = Math.max(nonQuad ? 1 : 0, Math.ceil(wmax - 1e-12));
  if (level === null) {
    const m = meshOf(form), t = topo(m);
    if (!need && m.F.some((f, fi) => f.some((v) => !regularCorner(m, t, fi, v)))) need = 1;   // isolate extraordinary points
    return Math.min(4, need);
  }
  return Math.min(4, Math.max(need, Math.round(level)));
}

/** Refine k times; `track` refines each root face's parameter square alongside (roots = cage faces). */
export function refine(form, k, { track = false } = {}) {
  let m = meshOf(form);
  if (track) m.track = m.F.map((f, i) => ({ root: i, uv: f.length === 4 ? [[0, 0], [1, 0], [1, 1], [0, 1]] : f.map(() => [NaN, NaN]) }));
  for (let i = 0; i < k; i++) m = subdivide(m, m.track || null);
  return m;
}

/**
 * Every patch of the form's limit surface: { level, patches: [{ b, exact, root (cage face) }], exact,
 * approx, irregular (corners), mesh (the refined mesh, for tests) }.
 */
export function patches(form, { level = null } = {}) {
  if (!form.faces.length) fail('form.err.no_faces');
  const k = conversionLevel(form, level);
  const m = refine(form, k, { track: true });
  const t = topo(m);
  const limits = m.P.map((_, v) => (t.ve[v].length ? limitPoint(m, t, v) : null));
  const out = [];
  let exact = 0;
  const irregular = new Set();
  m.F.forEach((f, fi) => {
    const p = quadPatch(m, t, fi, limits);
    if (p.exact) exact++;
    else for (const v of f) if (!regularCorner(m, t, fi, v)) irregular.add(v);
    out.push({ b: p.b, exact: p.exact, root: m.track[fi].root, uv: m.track[fi].uv });
  });
  return { level: k, patches: out, exact, approx: out.length - exact, irregular: irregular.size, mesh: m, topo: t };
}

/**
 * How well the patches meet: largest gap and normal angle (degrees) across shared edges — overall and
 * between exact patches only — sampled at `n` points per edge.
 */
export function patchReport(pr, n = 5) {
  const { mesh: m, topo: t, patches: ps } = pr;
  const SIDE = [(s) => [s, 0], (s) => [1, s], (s) => [1 - s, 1], (s) => [0, 1 - s]];
  let gap = 0, deg = 0, degExact = 0;
  for (const e of t.E.values()) {
    if (e.f.length !== 2) continue;
    const [f0, f1] = e.f;
    const k0 = m.F[f0].findIndex((v, i) => ek(v, m.F[f0][(i + 1) % 4]) === e.key);
    const k1 = m.F[f1].findIndex((v, i) => ek(v, m.F[f1][(i + 1) % 4]) === e.key);
    const sharp = e.w > 0;
    for (let i = 0; i <= n; i++) {
      const s = i / n;
      const [u0, v0] = SIDE[k0](s), [u1, v1] = SIDE[k1](1 - s);
      const p0 = evalPatch(ps[f0].b, u0, v0), p1 = evalPatch(ps[f1].b, u1, v1);
      gap = Math.max(gap, V.len(V.sub(p0, p1)));
      if (sharp) continue;
      const n0 = patchNormal(ps[f0].b, u0, v0), n1 = patchNormal(ps[f1].b, u1, v1);
      const a = Math.acos(Math.min(1, Math.max(-1, V.dot(n0, n1)))) * 180 / Math.PI;
      if (!Number.isFinite(a)) continue;
      deg = Math.max(deg, a);
      if (ps[f0].exact && ps[f1].exact) degExact = Math.max(degExact, a);
    }
  }
  return { gap, deg, degExact };
}

/**
 * Limit-surface samples on each face of the mesh refined `k` times, `extra` levels deeper:
 * [{ face, uv, p }] (exact limit positions at dyadic parameters) — the independent reference.
 */
export function limitSamples(form, k, extra = 3) {
  const m0 = refine(form, k);
  let m = { ...m0, track: m0.F.map((f, i) => ({ root: i, uv: [[0, 0], [1, 0], [1, 1], [0, 1]] })) };
  for (let i = 0; i < extra; i++) m = subdivide(m, m.track);
  const t = topo(m);
  const out = [];
  const seen = new Set();
  m.F.forEach((f, fi) => f.forEach((v, c) => {
    const { root, uv } = m.track[fi];
    const key = root + ':' + v;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ face: root, uv: uv[c], p: limitPoint(m, t, v) });
  }));
  return out;
}

/** The smooth surface for display: limit positions of the cage refined `level` (≥ 1) times, as triangles. */
export function limitMesh(form, level = 2) {
  if (!form.faces.length) return { positions: new Float32Array(0), indices: new Uint32Array(0), triFace: [] };
  const m = refine(form, Math.max(1, level), { track: true });
  const t = topo(m);
  const positions = new Float32Array(m.P.length * 3);
  m.P.forEach((_, v) => { if (!t.ve[v].length) return; const p = limitPoint(m, t, v); positions.set(p, v * 3); });
  const idx = [], triFace = [];
  m.F.forEach((f, fi) => { idx.push(f[0], f[1], f[2], f[0], f[2], f[3]); triFace.push(m.track[fi].root, m.track[fi].root); });
  return { positions, indices: Uint32Array.from(idx), triFace };
}

/** The cage's edges for drawing: [{ a, b, w (0 = smooth, crease weight, SHARP), boundary }]. */
export function cageEdges(form) {
  const t = topo(meshOf(form));
  return [...t.E.values()].map((e) => ({ a: e.a, b: e.b, key: e.key, w: e.f.length < 2 ? 0 : (e.w === Infinity ? SHARP : e.w), boundary: e.f.length < 2 }));
}

/** Counts: verts, faces, edges, boundary edges, non-quads, extraordinary vertices, closed. */
export function formStats(form) {
  const m = meshOf(form), t = topo(m);
  let boundary = 0;
  for (const e of t.E.values()) if (e.f.length < 2) boundary++;
  let ev = 0;
  t.ve.forEach((ks, v) => { if (!ks.length) return; const s = sharpAt(t, v); if (!s.length && ks.length !== 4) ev++; });
  return { verts: form.verts.length, faces: form.faces.length, edges: t.E.size, boundary, nonQuads: form.faces.filter((f) => f.length !== 4).length, extraordinary: ev, closed: boundary === 0 && form.faces.length > 0 };
}

// ---------------------------------------------------------------- primitives (Y up, outward CCW faces)

function fromQuads(verts, faces) { return { ...emptyForm(), verts, faces }; }

/** A box of nx × ny × nz faces per side, size sx × sy × sz, centred on the origin. */
export function box(nx = 1, ny = 1, nz = 1, sx = 100, sy = 100, sz = 100) {
  const n = [nx, ny, nz].map((x) => Math.max(1, Math.min(32, Math.round(x))));
  const verts = [], index = new Map(), faces = [];
  const vid = (l) => { const k = l.join(','); if (!index.has(k)) { index.set(k, verts.length); verts.push([(l[0] / n[0] - 0.5) * sx, (l[1] / n[1] - 0.5) * sy, (l[2] / n[2] - 0.5) * sz]); } return index.get(k); };
  // [fixed axis, side, s axis, t axis] with ∂s × ∂t outward
  const SIDES = [[0, 1, 1, 2], [0, 0, 2, 1], [1, 1, 2, 0], [1, 0, 0, 2], [2, 1, 0, 1], [2, 0, 1, 0]];
  for (const [ax, side, sa, ta] of SIDES) {
    for (let i = 0; i < n[sa]; i++) for (let j = 0; j < n[ta]; j++) {
      const at = (s, t) => { const l = [0, 0, 0]; l[ax] = side ? n[ax] : 0; l[sa] = s; l[ta] = t; return vid(l); };
      faces.push([at(i, j), at(i + 1, j), at(i + 1, j + 1), at(i, j + 1)]);
    }
  }
  return fromQuads(verts, faces);
}

/** An open plane of n × m faces, w (X) × d (Z), facing +Y. */
export function plane(n = 2, m = 2, w = 100, d = 100) {
  n = Math.max(1, Math.min(64, Math.round(n))); m = Math.max(1, Math.min(64, Math.round(m)));
  const verts = [], faces = [];
  // s along Z, t along X: Z × X = +Y
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) verts.push([(j / m - 0.5) * w, 0, (i / n - 0.5) * d]);
  const id = (i, j) => i * (m + 1) + j;
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) faces.push([id(i, j), id(i + 1, j), id(i + 1, j + 1), id(i, j + 1)]);
  return fromQuads(verts, faces);
}

/** A cylinder about Y: n around, m up, radius r, height h, centred; caps as one n-sided face each (or open). */
export function cylinder(n = 8, m = 1, r = 50, h = 100, caps = true) {
  n = Math.max(3, Math.min(64, Math.round(n))); m = Math.max(1, Math.min(64, Math.round(m)));
  const verts = [], faces = [];
  for (let j = 0; j <= m; j++) for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n; verts.push([r * Math.cos(a), (j / m - 0.5) * h, r * Math.sin(a)]); }
  const id = (i, j) => j * n + (i % n);
  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) faces.push([id(i, j), id(i, j + 1), id(i + 1, j + 1), id(i + 1, j)]);
  if (caps) {
    faces.push([...Array(n).keys()].map((i) => id(i, 0)));
    faces.push([...Array(n).keys()].map((i) => id(n - 1 - i, m)));
  }
  return fromQuads(verts, faces);
}

/** A torus about Y: n around the axis, m around the tube; R major, r minor. Every vertex is regular. */
export function torus(n = 8, m = 6, R = 50, r = 20) {
  n = Math.max(3, Math.min(64, Math.round(n))); m = Math.max(3, Math.min(64, Math.round(m)));
  const verts = [], faces = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) {
    const a = 2 * Math.PI * i / n, b = 2 * Math.PI * j / m;
    verts.push([(R + r * Math.cos(b)) * Math.cos(a), r * Math.sin(b), (R + r * Math.cos(b)) * Math.sin(a)]);
  }
  const id = (i, j) => (i % n) * m + (j % m);
  for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) faces.push([id(i, j), id(i, j + 1), id(i + 1, j + 1), id(i + 1, j)]);
  return fromQuads(verts, faces);
}

/** A quadball: a box of n per side pushed onto a sphere, its cage fitted so the limit points lie on radius r. */
export function sphere(n = 2, r = 50, fit = true) {
  const f = box(n, n, n, 2, 2, 2);
  f.verts = f.verts.map((p) => V.mul(V.norm(p), r));
  return fit ? fitTo(f, (p) => V.mul(V.norm(p), r)) : f;
}

/** Torus with its cage fitted so the limit points lie on the true torus. */
export function torusFitted(n = 8, m = 6, R = 50, r = 20) {
  const proj = (p) => { const q = [p[0], 0, p[2]]; const c = V.mul(V.norm(q), R); return V.add(c, V.mul(V.norm(V.sub(p, c)), r)); };
  return fitTo(torus(n, m, R, r), proj);
}

/**
 * Move cage vertices so their limit points land on a target surface (`proj` = closest point on it):
 * p ← p + (proj(L) − L), a few rounds. The limit points then lie on it; between them the surface is
 * the subdivision surface, not the analytic one.
 */
export function fitTo(form, proj, rounds = 400) {
  let f = clone(form);
  for (let r = 0; r < rounds; r++) {
    const m = subdivide(meshOf(f));
    const t = topo(m);
    let worst = 0;
    f.verts = f.verts.map((p, v) => { const L = limitPoint(m, t, v); const d = V.sub(proj(L), L); worst = Math.max(worst, V.len(d)); return V.add(p, d); });
    if (worst < 1e-12 * sizeOf(f)) break;
  }
  return f;
}

/** Add one face through points (3+), reusing existing vertices within `tol` (builds a surface click by click). */
export function addFace(form, pts, { tol = 1e-6 } = {}) {
  if (!Array.isArray(pts) || pts.length < 3 || pts.length > 64) fail('form.err.face_points');
  const f = clone(form);
  const ids = pts.map((p) => {
    if (typeof p === 'number') { if (!f.verts[p]) fail('form.err.face_point_gone'); return p; }
    const i = f.verts.findIndex((q) => V.len(V.sub(q, p)) <= tol);
    if (i >= 0) return i;
    f.verts.push([...p]);
    return f.verts.length - 1;
  });
  if (new Set(ids).size !== ids.length) fail('form.err.face_dup');
  f.faces.push(ids);
  // match the neighbours' orientation: reverse when it shares an edge in the same direction
  const used = new Set();
  form.faces.forEach((g) => g.forEach((v, k) => used.add(v + '>' + g[(k + 1) % g.length])));
  if (ids.some((v, k) => used.has(v + '>' + ids[(k + 1) % ids.length]))) f.faces[f.faces.length - 1] = ids.reverse();
  return checked(f);
}

// ---------------------------------------------------------------- selection

/** The vertices of a selection { verts?, edges? (keys 'a,b'), faces? }. */
export function selVerts(form, sel = {}) {
  const s = new Set();
  for (const v of sel.verts || []) if (form.verts[v]) s.add(v);
  for (const k of sel.edges || []) for (const v of keyPair(k)) if (form.verts[v]) s.add(v);
  for (const fi of sel.faces || []) for (const v of form.faces[fi] || []) s.add(v);
  return [...s];
}

/** The edge loop through an edge (continues straight through valence-4 vertices; along boundaries). */
export function edgeLoop(form, key) {
  const m = meshOf(form), t = topo(m);
  const e0 = t.E.get(key);
  if (!e0) return [];
  const out = [key];
  const walk = (from, v) => {
    let ek0 = from;
    for (let guard = 0; guard < 10000; guard++) {
      const e = t.E.get(ek0);
      const ks = t.ve[v];
      let next = null;
      if (e.f.length < 2) {
        const b = ks.filter((k) => k !== ek0 && t.E.get(k).f.length < 2);
        if (b.length === 1 && ks.length <= 3) next = b[0];
      } else if (ks.length === 4) {
        const faces = new Set(e.f);
        const c = ks.filter((k) => k !== ek0 && !t.E.get(k).f.some((fi) => faces.has(fi)));
        if (c.length === 1) next = c[0];
      }
      if (!next || next === key) return next === key;
      out.push(next);
      v = other(t.E.get(next), v);
      ek0 = next;
    }
    return false;
  };
  if (!walk(key, e0.b)) walk(key, e0.a);
  return [...new Set(out)];
}

/** Quads across an edge, both ways: [{ face, a (side-A vertex of the entry edge), entry, exit }] and the ring's edges. */
function ringWalk(form, key) {
  const m = meshOf(form), t = topo(m);
  const e0 = t.E.get(key);
  if (!e0) fail('form.err.edge_gone');
  const steps = [];
  const edges = [{ key, A: e0.a }];
  let closed = false;
  for (let side = 0; side < e0.f.length && !closed; side++) {
    let fi = e0.f[side], ekey = key, A = e0.a;
    const seen = new Set();
    for (let guard = 0; guard < 10000; guard++) {
      const f = form.faces[fi];
      if (f.length !== 4 || seen.has(fi)) break;
      seen.add(fi);
      const k = f.findIndex((v, i) => ek(v, f[(i + 1) % 4]) === ekey);
      const Aout = f[k] === A ? f[(k + 3) % 4] : f[(k + 2) % 4];
      const okey = ek(f[(k + 2) % 4], f[(k + 3) % 4]);
      steps.push({ face: fi, entry: ekey, exit: okey, A, Aout });
      if (okey === key) { closed = true; break; }
      edges.push({ key: okey, A: Aout });
      const oe = t.E.get(okey);
      if (oe.f.length < 2) break;
      fi = oe.f[0] === fi ? oe.f[1] : oe.f[0];
      ekey = okey; A = Aout;
    }
  }
  return { steps, edges, closed };
}

/** The edge ring through an edge (the edges an inserted loop would cross). */
export function edgeRing(form, key) { return [...new Set(ringWalk(form, key).edges.map((e) => e.key))]; }

// ---------------------------------------------------------------- symmetry

const mirrorP = (sym, p) => { const q = [...p]; const a = AXES[sym.axis]; q[a] = 2 * sym.at - q[a]; return q; };
function sizeOf(form) { let s = 0; for (const p of form.verts) s = Math.max(s, Math.abs(p[0]), Math.abs(p[1]), Math.abs(p[2])); return Math.max(1, s); }

/** Mirror partner of every vertex (itself on the plane, −1 when none). */
export function partners(form) {
  if (!form.sym) return form.verts.map(() => -1);
  const tol = 1e-6 * sizeOf(form);
  const cell = (p) => p.map((x) => Math.round(x / (tol * 10))).join(',');
  const grid = new Map();
  form.verts.forEach((p, i) => { const k = cell(p); if (!grid.has(k)) grid.set(k, []); grid.get(k).push(i); });
  return form.verts.map((p) => {
    const q = mirrorP(form.sym, p);
    const c = q.map((x) => Math.round(x / (tol * 10)));
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) for (let dz = -1; dz <= 1; dz++) {
      for (const j of grid.get([c[0] + dx, c[1] + dy, c[2] + dz].join(',')) || []) if (V.len(V.sub(form.verts[j], q)) <= tol) return j;
    }
    return -1;
  });
}

/**
 * Turn on symmetry about the plane axis = at: keeps the `side` (+1: coordinates ≥ at), moves its
 * vertices that lie past the plane onto it, and mirrors it (the seam is welded). Later edits of
 * either side apply to both.
 */
export function setSymmetry(form, axis, at = 0, side = 1) {
  if (!(axis in AXES) || !Number.isFinite(at) || Math.abs(at) > 1e6) fail('form.err.sym_need');
  const f = clone(form);
  f.sym = { axis, at, side: side < 0 ? -1 : 1 };
  return resym(f);
}
export function clearSymmetry(form) { const f = clone(form); f.sym = null; return f; }

/** Rebuild the mirrored half from the kept half (stable order: kept faces first). */
export function resym(form) {
  if (!form.sym) return form;
  const { sym } = form;
  const a = AXES[sym.axis];
  const tol = 1e-6 * sizeOf(form);
  const sd = (p) => (p[a] - sym.at) * sym.side;
  const keepF = form.faces.filter((f) => sd(avg(f.map((v) => form.verts[v]))) > tol);
  if (!keepF.length) fail('form.err.sym_empty');
  const used = [...new Set(keepF.flat())].sort((x, y) => x - y);
  const map = new Map(used.map((v, i) => [v, i]));
  const verts = used.map((v) => { const p = [...form.verts[v]]; if (sd(p) < tol) p[a] = sym.at; return p; });
  const mirrorOf = new Map();
  verts.forEach((p, i) => {
    if (Math.abs(p[a] - sym.at) <= tol) { mirrorOf.set(i, i); return; }
    mirrorOf.set(i, verts.length); verts.push(mirrorP(sym, p));
  });
  const faces = keepF.map((f) => f.map((v) => map.get(v)));
  for (const f of keepF.map((g) => g.map((v) => map.get(v)))) faces.push(f.map((v) => mirrorOf.get(v)).reverse());
  const creases = [];
  for (const [x, y, w] of form.creases || []) {
    if (!map.has(x) || !map.has(y)) continue;
    const X = map.get(x), Y = map.get(y);
    creases.push([X, Y, w]);
    const MX = mirrorOf.get(X), MY = mirrorOf.get(Y);
    if (MX !== X || MY !== Y) creases.push([MX, MY, w]);
  }
  const corners = [];
  for (const v of form.corners || []) if (map.has(v)) { const X = map.get(v); corners.push(X); if (mirrorOf.get(X) !== X) corners.push(mirrorOf.get(X)); }
  return checked({ ...emptyForm(), verts, faces, creases: dedupeCreases(creases), corners: [...new Set(corners)], sym: { ...sym } });
}

function dedupeCreases(cs) { const m = new Map(); for (const [a, b, w] of cs) m.set(ek(a, b), [Math.min(a, b), Math.max(a, b), w]); return [...m.values()]; }

/** Selection items on the mirrored side → their kept-side partners (topology edits run on the kept side, then resym). */
function toKept(form, sel) {
  if (!form.sym) return sel;
  const pt = partners(form);
  const a = AXES[form.sym.axis];
  const kept = (v) => (form.verts[v][a] - form.sym.at) * form.sym.side >= -1e-9 * sizeOf(form);
  const mv = (v) => (kept(v) ? v : pt[v] >= 0 ? pt[v] : v);
  const faceKey = (f) => [...f].sort((x, y) => x - y).join(',');
  const fmap = new Map(form.faces.map((f, i) => [faceKey(f), i]));
  return {
    verts: (sel.verts || []).map(mv),
    edges: (sel.edges || []).map((k) => { const [x, y] = keyPair(k); return ek(mv(x), mv(y)); }),
    faces: (sel.faces || []).map((fi) => { const f = form.faces[fi]; if (!f || f.every(kept)) return fi; const j = fmap.get(faceKey(f.map(mv))); return j === undefined ? fi : j; }),
  };
}

// ---------------------------------------------------------------- edits (pure: form → new form)

/** Soft falloff weight at distance d for radius R: (1 − (d/R)²)². */
export const falloff = (d, R) => (d >= R ? 0 : (1 - (d / R) ** 2) ** 2);

/**
 * Transform the selection by a 4×4 column-major matrix. `soft` > 0 pulls the vertices within that
 * distance along with a smooth falloff. With symmetry on, the mirror side follows (mirrored
 * transform) and seam vertices stay on the plane.
 */
export function transform(form, sel, M4, { soft = 0 } = {}) {
  const f = clone(form);
  const ids = selVerts(form, sel);
  if (!ids.length) return f;
  const w = new Map(ids.map((v) => [v, 1]));
  const pt = form.sym ? partners(form) : null;
  const src = new Set(ids);
  if (pt) for (const v of ids) if (pt[v] >= 0) src.add(pt[v]);
  if (soft > 0) {
    const S = [...src].map((v) => form.verts[v]);
    form.verts.forEach((p, v) => { if (w.has(v)) return; let d = Infinity; for (const q of S) d = Math.min(d, V.len(V.sub(p, q))); const x = falloff(d, soft); if (x > 0) w.set(v, x); });
  }
  let MR = null, sideSel = 1, a = 0;
  if (form.sym) {
    a = AXES[form.sym.axis];
    const R = V.reflection(V.mul([0, 0, 0].map((_, i) => (i === a ? 1 : 0)), form.sym.at), [0, 0, 0].map((_, i) => (i === a ? 1 : 0)));
    MR = V.matMul(R, V.matMul(M4, R));
    const s = ids.reduce((acc, v) => acc + (form.verts[v][a] - form.sym.at), 0);
    sideSel = s < 0 ? -1 : 1;
    for (const v of ids) if (pt[v] >= 0 && pt[v] !== v && !w.has(pt[v])) w.set(pt[v], 1);
  }
  const tol = 1e-6 * sizeOf(form);
  for (const [v, wt] of w) {
    const p = form.verts[v];
    let M = M4;
    if (MR) { const d = p[a] - form.sym.at; if (Math.abs(d) > tol && Math.sign(d) !== sideSel) M = MR; }
    const q = V.applyMat(M, p);
    let r = lerp(p, q, wt);
    if (pt && pt[v] === v) r[a] = form.sym.at;
    f.verts[v] = r;
  }
  return f;
}
export const move = (form, sel, d, opts) => transform(form, sel, V.translation(d), opts);
export const rotate = (form, sel, center, axis, deg, opts) => transform(form, sel, V.rotationAbout(center, V.norm(axis), deg), opts);
export function scale(form, sel, center, s, opts) {
  const k = Array.isArray(s) ? s : [s, s, s];
  const M = [k[0], 0, 0, 0, 0, k[1], 0, 0, 0, 0, k[2], 0, center[0] * (1 - k[0]), center[1] * (1 - k[1]), center[2] * (1 - k[2]), 1];
  return transform(form, sel, M, opts);
}
/** The centre of a selection (for the gizmo). */
export const selCenter = (form, sel) => avg(selVerts(form, sel).map((v) => form.verts[v]));

/** Run a topology edit on the kept side, then rebuild the mirror. */
function symEdit(form, sel, fn) {
  if (!form.sym) return checked(fn(clone(form), sel));
  return resym(checked(fn(clone(form), toKept(form, sel))));
}

/** Remove unused vertices and creases on gone edges (renumbering). */
function compact(f) {
  const used = new Set(f.faces.flat());
  const map = new Map();
  const verts = [];
  f.verts.forEach((p, v) => { if (used.has(v)) { map.set(v, verts.length); verts.push(p); } });
  const faces = f.faces.map((g) => g.map((v) => map.get(v)));
  const edges = new Set();
  faces.forEach((g) => g.forEach((v, k) => edges.add(ek(v, g[(k + 1) % g.length]))));
  const creases = dedupeCreases(f.creases.filter(([a, b]) => map.has(a) && map.has(b)).map(([a, b, w]) => [map.get(a), map.get(b), w])).filter(([a, b]) => edges.has(ek(a, b)));
  const corners = [...new Set(f.corners.filter((v) => map.has(v)).map((v) => map.get(v)))];
  return { ...f, verts, faces, creases, corners };
}

/** Throws when the cage is not a valid oriented 2-manifold-with-boundary; returns it. */
function checked(f) {
  const dir = new Set();
  const cnt = new Map();
  f.faces.forEach((g) => {
    if (g.length < 3 || new Set(g).size !== g.length) fail('form.err.degenerate');
    g.forEach((v, k) => {
      const w = g[(k + 1) % g.length];
      const d = v + '>' + w;
      if (dir.has(d)) fail('form.err.flip');
      dir.add(d);
      const key = ek(v, w);
      cnt.set(key, (cnt.get(key) || 0) + 1);
    });
  });
  for (const c of cnt.values()) if (c > 2) fail('form.err.nonmanifold');
  return f;
}

/** Extrude faces as one region: the region moves `dist` along its averaged normals and side walls join it. */
export function extrudeFaces(form, faceIds, dist = 0) {
  return symEdit(form, { faces: faceIds }, (f, sel) => {
    const set = new Set(sel.faces.filter((i) => f.faces[i]));
    if (!set.size) fail('form.err.pick_extrude');
    const nrm = new Map();
    for (const fi of set) {
      const g = f.faces[fi];
      const n = newell(g.map((v) => f.verts[v]));
      for (const v of g) nrm.set(v, V.add(nrm.get(v) || [0, 0, 0], n));
    }
    const dup = new Map();
    for (const [v, n] of nrm) {
      let d = V.mul(V.norm(n), dist);
      if (f.sym) { const a = AXES[f.sym.axis]; if (Math.abs(f.verts[v][a] - f.sym.at) <= 1e-6 * sizeOf(f)) d[a] = 0; }
      dup.set(v, f.verts.length); f.verts.push(V.add(f.verts[v], d));
    }
    const dirUse = new Map();
    for (const fi of set) { const g = f.faces[fi]; g.forEach((v, k) => dirUse.set(ek(v, g[(k + 1) % g.length]), (dirUse.get(ek(v, g[(k + 1) % g.length])) || 0) + 1)); }
    const sides = [];
    for (const fi of set) {
      const g = f.faces[fi];
      g.forEach((v, k) => {
        const w = g[(k + 1) % g.length];
        if (dirUse.get(ek(v, w)) === 1) sides.push([v, w, dup.get(w), dup.get(v)]);
      });
      f.faces[fi] = g.map((v) => dup.get(v));
    }
    // with symmetry, a wall standing on the seam is inside the body: leave it out
    const seam = (v) => f.sym && Math.abs(f.verts[v][AXES[f.sym.axis]] - f.sym.at) <= 1e-6 * sizeOf(f);
    for (const s of sides) if (!(seam(s[0]) && seam(s[1]))) f.faces.push(s);
    // creases on the region's edges move up with it
    f.creases = f.creases.map(([a, b, w]) => (dirUse.has(ek(a, b)) ? [dup.get(a), dup.get(b), w] : [a, b, w]));
    return compact(f);
  });
}
function newell(pts) {
  const n = [0, 0, 0];
  for (let i = 0; i < pts.length; i++) { const p = pts[i], q = pts[(i + 1) % pts.length]; n[0] += (p[1] - q[1]) * (p[2] + q[2]); n[1] += (p[2] - q[2]) * (p[0] + q[0]); n[2] += (p[0] - q[0]) * (p[1] + q[1]); }
  return n;
}

/** Extrude open-boundary edges by a vector (each makes a new quad). */
export function extrudeEdges(form, keys, vec) {
  return symEdit(form, { edges: keys }, (f, sel) => {
    const t = topo(meshOf(f));
    const es = sel.edges.map((k) => t.E.get(k)).filter(Boolean);
    if (!es.length || es.some((e) => e.f.length !== 1)) fail('form.err.extrude_edges');
    const dup = new Map();
    const nv = (v) => { if (!dup.has(v)) { dup.set(v, f.verts.length); f.verts.push(V.add(f.verts[v], vec)); } return dup.get(v); };
    for (const e of es) {
      const g = f.faces[e.f[0]];
      const k = g.findIndex((v, i) => ek(v, g[(i + 1) % g.length]) === e.key);
      const a = g[k], b = g[(k + 1) % g.length];
      f.faces.push([b, a, nv(a), nv(b)]);
    }
    return f;
  });
}

/** Split edges (key → new vertex at A + t(B − A)), inserting the vertex into every face that uses the edge. */
function splitEdges(f, splits) {
  // splits: Map key → { A, t, id? }
  for (const [key, s] of splits) {
    const [a, b] = keyPair(key);
    const B = s.A === a ? b : a;
    s.id = f.verts.length; f.verts.push(lerp(f.verts[s.A], f.verts[B], s.t));
    const w = f.creases.find(([x, y]) => ek(x, y) === key);
    if (w) f.creases.push([a, s.id, w[2]], [s.id, b, w[2]]);
  }
  f.creases = f.creases.filter(([x, y]) => !splits.has(ek(x, y)));
  return splits;
}
function insertSplitPoints(f, splits, skip = new Set()) {
  f.faces = f.faces.map((g, fi) => {
    if (skip.has(fi)) return g;
    const out = [];
    g.forEach((v, k) => { out.push(v); const s = splits.get(ek(v, g[(k + 1) % g.length])); if (s) out.push(s.id); });
    return out;
  });
}

/** Insert an edge loop across the ring of quads through an edge, at fraction t (0–1) along it. */
export function insertEdgeLoop(form, key, t = 0.5) {
  if (!(t > 0 && t < 1)) fail('form.err.loop_t');
  return symEdit(form, { edges: [key] }, (f, sel) => {
    const { steps, edges } = ringWalk(f, sel.edges[0]);
    if (!steps.length) fail('form.err.loop_none');
    const splits = new Map(edges.map((e) => [e.key, { A: e.A, t }]));
    splitEdges(f, splits);
    const done = new Set();
    const add = [];
    for (const st of steps) {
      if (done.has(st.face)) continue;
      done.add(st.face);
      const g = f.faces[st.face];
      const k = g.findIndex((v, i) => ek(v, g[(i + 1) % 4]) === st.entry);
      const mi = splits.get(st.entry).id, mo = splits.get(st.exit).id;
      add.push([st.face, [g[k], mi, mo, g[(k + 3) % 4]], [mi, g[(k + 1) % 4], g[(k + 2) % 4], mo]]);
    }
    for (const [fi, q1, q2] of add) { f.faces[fi] = q1; f.faces.push(q2); }
    insertSplitPoints(f, splits, new Set([...done, ...add.map((_, i) => f.faces.length - add.length + i)]));
    return f;
  });
}

/** Insert a point on an edge (both faces gain a corner). */
export function insertPoint(form, key, t = 0.5) {
  if (!(t > 0 && t < 1)) fail('form.err.point_t');
  return symEdit(form, { edges: [key] }, (f, sel) => {
    const [a] = keyPair(sel.edges[0]);
    if (!topo(meshOf(f)).E.has(sel.edges[0])) fail('form.err.edge_gone');
    const splits = splitEdges(f, new Map([[sel.edges[0], { A: a, t }]]));
    insertSplitPoints(f, splits);
    return f;
  });
}

/** Split faces into quads around their centres (neighbours gain the edge midpoints). */
export function subdivideFaces(form, faceIds) {
  return symEdit(form, { faces: faceIds }, (f, sel) => {
    const set = [...new Set(sel.faces.filter((i) => f.faces[i]))];
    if (!set.length) fail('form.err.pick_subdivide');
    const splits = new Map();
    for (const fi of set) { const g = f.faces[fi]; g.forEach((v, k) => { const key = ek(v, g[(k + 1) % g.length]); if (!splits.has(key)) splits.set(key, { A: Math.min(v, g[(k + 1) % g.length]), t: 0.5 }); }); }
    splitEdges(f, splits);
    const orig = set.map((fi) => [fi, f.faces[fi]]);
    const skip = new Set(set);
    insertSplitPoints(f, splits, skip);
    for (const [fi, g] of orig) {
      const c = f.verts.length; f.verts.push(avg(g.map((v) => f.verts[v])));
      const L = g.length;
      const mid = (k) => splits.get(ek(g[k], g[(k + 1) % L])).id;
      const quads = g.map((v, k) => [v, mid(k), c, mid((k + L - 1) % L)]);
      f.faces[fi] = quads[0];
      for (let k = 1; k < L; k++) f.faces.push(quads[k]);
    }
    return f;
  });
}

/** Delete faces (vertices left unused go too). */
export function deleteFaces(form, faceIds) {
  return symEdit(form, { faces: faceIds }, (f, sel) => {
    const gone = new Set(sel.faces);
    f.faces = f.faces.filter((_, i) => !gone.has(i));
    return compact(f);
  });
}
/** Delete vertices and every face using them. */
export function deleteVerts(form, ids) {
  return symEdit(form, { verts: ids }, (f, sel) => {
    const gone = new Set(sel.verts);
    f.faces = f.faces.filter((g) => !g.some((v) => gone.has(v)));
    return compact(f);
  });
}
/** Delete edges: an edge between two faces merges them; an open edge takes its face. */
export function deleteEdges(form, keys) {
  return symEdit(form, { edges: keys }, (f, sel) => {
    for (const key of sel.edges) {
      const t = topo(meshOf(f));
      const e = t.E.get(key);
      if (!e) continue;
      if (e.f.length < 2) { f.faces.splice(e.f[0], 1); continue; }
      const [fi, gi] = e.f;
      if (fi === gi) fail('form.err.edge_inside');
      const F0 = f.faces[fi], G0 = f.faces[gi];
      const k = F0.findIndex((v, i) => ek(v, F0[(i + 1) % F0.length]) === key);
      const a = F0[k], b = F0[(k + 1) % F0.length];
      const rf = [...F0.slice(k + 1), ...F0.slice(0, k + 1)];     // b … a
      const j = G0.indexOf(a);
      const rg = [...G0.slice(j), ...G0.slice(0, j)];              // a … b
      const merged = [...rf, ...rg.slice(1, -1)];
      if (rg[rg.length - 1] !== b || new Set(merged).size !== merged.length) fail('form.err.merge');
      f.faces[fi] = merged;
      f.faces.splice(gi, 1);
      f.creases = f.creases.filter(([x, y]) => ek(x, y) !== key);
    }
    return compact(f);
  });
}

/** An open boundary loop through a boundary edge, ordered the way a face filling it must run. */
export function boundaryLoop(form, key) {
  const t = topo(meshOf(form));
  const e0 = t.E.get(key);
  if (!e0 || e0.f.length !== 1) fail('form.err.pick_boundary');
  const next = new Map();   // virtual (fill) direction: reverse of the face's
  for (const e of t.E.values()) {
    if (e.f.length !== 1) continue;
    const g = form.faces[e.f[0]];
    const k = g.findIndex((v, i) => ek(v, g[(i + 1) % g.length]) === e.key);
    const x = g[k], y = g[(k + 1) % g.length];
    if (!next.has(y)) next.set(y, x);
  }
  const g = form.faces[e0.f[0]];
  const k = g.findIndex((v, i) => ek(v, g[(i + 1) % g.length]) === key);
  const start = g[(k + 1) % g.length];
  const loop = [start];
  let v = next.get(start);
  for (let guard = 0; guard < 100000 && v !== start; guard++) { if (v === undefined || loop.includes(v)) fail('form.err.boundary_open'); loop.push(v); v = next.get(v); }
  return loop;
}

/** Fill the open boundary loop through an edge with one face. */
export function fillHole(form, key) {
  return symEdit(form, { edges: [key] }, (f, sel) => {
    const loop = boundaryLoop(f, sel.edges[0]);
    if (loop.length > 64) fail('form.err.hole_big');
    f.faces.push(loop);
    return f;
  });
}

/** Bridge two faces or two open loops (A, B: { face } | { edge }) of equal size with `segments` rows of quads. */
export function bridge(form, A, B, { segments = 1 } = {}) {
  const sel = { faces: [A.face, B.face].filter((x) => x !== undefined), edges: [A.edge, B.edge].filter((x) => x !== undefined) };
  return symEdit(form, sel, (f, s) => {
    let fi = 0, ei = 0;
    const take = (X) => (X.face !== undefined ? { face: s.faces[fi++] } : { edge: s.edges[ei++] });
    const a = take(A), b = take(B);
    const loopOf = (X) => (X.face !== undefined ? (f.faces[X.face] || fail('form.err.bridge_gone')) : boundaryLoop(f, X.edge));
    const la = [...loopOf(a)], lb = [...loopOf(b)];
    if (la.length !== lb.length) fail('form.err.bridge_count', { a: la.length, b: lb.length });
    if (la.some((v) => lb.includes(v))) fail('form.err.bridge_share');
    const n = la.length;
    let best = 0, bd = Infinity;
    for (let o = 0; o < n; o++) { let d = 0; for (let i = 0; i < n; i++) d += V.len(V.sub(f.verts[la[i]], f.verts[lb[((o - i) % n + n) % n]])) ** 2; if (d < bd) { bd = d; best = o; } }
    const gone = new Set([a.face, b.face].filter((x) => x !== undefined));
    f.faces = f.faces.filter((_, i) => !gone.has(i));
    const segs = Math.max(1, Math.min(32, Math.round(segments)));
    const rows = [la];
    for (let r = 1; r < segs; r++) rows.push(la.map((v, i) => { f.verts.push(lerp(f.verts[v], f.verts[lb[((best - i) % n + n) % n]], r / segs)); return f.verts.length - 1; }));
    rows.push(la.map((_, i) => lb[((best - i) % n + n) % n]));
    for (let r = 0; r < segs; r++) for (let i = 0; i < n; i++) {
      const i1 = (i + 1) % n;
      f.faces.push([rows[r][i], rows[r][i1], rows[r + 1][i1], rows[r + 1][i]]);
    }
    return compact(f);
  });
}

/** Weld vertices into one at their centre (faces that collapse are dropped). */
export function weld(form, ids) {
  return symEdit(form, { verts: ids }, (f, sel) => {
    const vs = [...new Set(sel.verts)].filter((v) => f.verts[v]);
    if (vs.length < 2) fail('form.err.pick_weld');
    const keep = vs[0];
    f.verts[keep] = avg(vs.map((v) => f.verts[v]));
    const to = (v) => (vs.includes(v) ? keep : v);
    f.faces = f.faces.map((g) => { const h = g.map(to); return h.filter((v, k) => v !== h[(k + 1) % h.length]); }).filter((g) => g.length >= 3);
    f.creases = f.creases.map(([a, b, w]) => [to(a), to(b), w]).filter(([a, b]) => a !== b);
    f.corners = f.corners.map(to);
    return compact(f);
  });
}

/** Set crease weight on edges (w = SHARP: fully sharp; 0 removes). */
export function crease(form, keys, w = SHARP) {
  if (!(w >= 0 && w <= SHARP)) fail('form.err.crease_weight', { max: SHARP });
  return symEdit(form, { edges: keys }, (f, sel) => {
    const t = topo(meshOf(f));
    const set = new Set(sel.edges.filter((k) => t.E.has(k)));
    if (!set.size) fail('form.err.pick_crease');
    f.creases = f.creases.filter(([a, b]) => !set.has(ek(a, b)));
    if (w > 0) for (const k of set) { const [a, b] = keyPair(k); f.creases.push([a, b, w]); }
    return f;
  });
}
export const uncrease = (form, keys) => crease(form, keys, 0);
/** Mark or clear sharp (corner) vertices. */
export function setCorners(form, ids, on = true) {
  return symEdit(form, { verts: ids }, (f, sel) => {
    const s = new Set(f.corners);
    for (const v of sel.verts) if (f.verts[v]) { if (on) s.add(v); else s.delete(v); }
    f.corners = [...s];
    return f;
  });
}

/** Flatten vertices onto a plane (default: the least-squares plane through them). */
export function flatten(form, sel, pl = null) {
  const ids = selVerts(form, sel);
  if (ids.length < 3 && !pl) fail('form.err.pick_flatten');
  let o, n;
  if (pl) { o = pl.o; n = V.norm(pl.n); } else { o = avg(ids.map((v) => form.verts[v])); n = bestNormal(ids.map((v) => V.sub(form.verts[v], o))); }
  const f = clone(form);
  const pt = form.sym ? partners(form) : null;
  const todo = new Set(ids);
  if (pt) for (const v of ids) if (pt[v] >= 0) todo.add(pt[v]);
  for (const v of todo) {
    const isMirror = pt && !ids.includes(v);
    const oo = isMirror ? mirrorP(form.sym, o) : o;
    const nn = isMirror ? mirrorP({ ...form.sym, at: 0 }, n) : n;
    const p = form.verts[v];
    f.verts[v] = V.sub(p, V.mul(nn, V.dot(V.sub(p, oo), nn)));
  }
  return f;
}
/** Smallest-variance direction of centred points (Jacobi eigen-solve of the 3×3 covariance). */
export function bestNormal(pts) {
  const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of pts) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) A[i][j] += p[i] * p[j];
  const Vm = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  for (let sweep = 0; sweep < 50; sweep++) {
    let off = 0;
    for (let p = 0; p < 3; p++) for (let q = p + 1; q < 3; q++) off += A[p][q] ** 2;
    if (off < 1e-30) break;
    for (let p = 0; p < 3; p++) for (let q = p + 1; q < 3; q++) {
      if (Math.abs(A[p][q]) < 1e-300) continue;
      const th = (A[q][q] - A[p][p]) / (2 * A[p][q]);
      const tt = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1));
      const c = 1 / Math.sqrt(tt * tt + 1), s = tt * c;
      for (let k = 0; k < 3; k++) { const akp = A[k][p], akq = A[k][q]; A[k][p] = c * akp - s * akq; A[k][q] = s * akp + c * akq; }
      for (let k = 0; k < 3; k++) { const apk = A[p][k], aqk = A[q][k]; A[p][k] = c * apk - s * aqk; A[q][k] = s * apk + c * aqk; }
      for (let k = 0; k < 3; k++) { const vkp = Vm[k][p], vkq = Vm[k][q]; Vm[k][p] = c * vkp - s * vkq; Vm[k][q] = s * vkp + c * vkq; }
    }
  }
  let mi = 0;
  for (let i = 1; i < 3; i++) if (A[i][i] < A[mi][mi]) mi = i;
  return V.norm([Vm[0][mi], Vm[1][mi], Vm[2][mi]]);
}

// ---------------------------------------------------------------- reading untrusted data

const num = (v, lim = 1e6) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= lim;

/** Check a form from a file, the clipboard or a part feature; returns a clean copy or throws Error with a plain message. */
export function readForm(raw) {
  let j = raw;
  if (typeof raw === 'string') { try { j = JSON.parse(raw); } catch { fail('form.file.not_json'); } }
  if (!j || typeof j !== 'object' || j.format !== FORMAT) fail('form.file.not_form');
  if (!Number.isInteger(j.version) || j.version < 1) fail('form.file.no_version');
  if (j.version > VERSION) fail('form.file.newer', { v: j.version, mine: VERSION });
  if (!Array.isArray(j.verts) || j.verts.length > MAX_VERTS) fail('form.file.max_verts', { n: MAX_VERTS });
  if (!Array.isArray(j.faces) || j.faces.length > MAX_FACES) fail('form.file.max_faces', { n: MAX_FACES });
  const verts = j.verts.map((p) => { if (!Array.isArray(p) || p.length !== 3 || !p.every((x) => num(x))) fail('form.file.vertex'); return [...p]; });
  const nv = verts.length;
  const vid = (v) => Number.isInteger(v) && v >= 0 && v < nv;
  const faces = j.faces.map((f) => { if (!Array.isArray(f) || f.length < 3 || f.length > 64 || !f.every(vid) || new Set(f).size !== f.length) fail('form.file.face'); return [...f]; });
  const f = { ...emptyForm(), verts, faces };
  checked(f);
  const edges = new Set();
  faces.forEach((g) => g.forEach((v, k) => edges.add(ek(v, g[(k + 1) % g.length]))));
  if (j.creases !== undefined) {
    if (!Array.isArray(j.creases) || j.creases.length > 4 * MAX_FACES) fail('form.file.creases');
    f.creases = dedupeCreases(j.creases.map((c) => {
      if (!Array.isArray(c) || c.length !== 3 || !vid(c[0]) || !vid(c[1]) || !edges.has(ek(c[0], c[1])) || !(typeof c[2] === 'number' && c[2] > 0 && c[2] <= SHARP)) fail('form.file.crease');
      return [c[0], c[1], c[2]];
    }));
  }
  if (j.corners !== undefined) {
    if (!Array.isArray(j.corners) || j.corners.length > nv || !j.corners.every(vid)) fail('form.file.corners');
    f.corners = [...new Set(j.corners)];
  }
  if (j.sym !== undefined && j.sym !== null) {
    const s = j.sym;
    if (!s || !(s.axis in AXES) || !num(s.at) || ![1, -1].includes(s.side ?? 1)) fail('form.file.symmetry');
    f.sym = { axis: s.axis, at: s.at, side: s.side ?? 1 };
  }
  return f;
}

export const toJSON = (form) => JSON.stringify(form);
