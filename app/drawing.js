/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing.js — a drawing sheet from the part (DOM-free): front, top and right orthographic views
 * in third-angle projection (top above front, right to the right) plus an isometric view, with
 * hidden edges dashed, overall dimensions, a border and a title block; written as a vector PDF.
 *
 *   const sheet = makeDrawing(mesh, { name, date, paper: 'a3' })   → display list in mm
 *   const { bytes } = await toPdf(sheet)
 *
 * Edges drawn: sharp edges (faces meeting at more than 20°) and, per view, silhouettes of curved
 * (faceted) surfaces — where a facet turned to the viewer meets one turned away. Visibility:
 * each edge is cut into short pieces and each piece's midpoint is tested against the triangles
 * in front of it (a grid over the view keeps that quick). Curves are their facets, as in the model.
 * The PDF writer is a trimmed copy of CadCraft's plot.js (Helvetica, WinAnsi, FlateDecode).
 * Scales are the ISO 5455 series (1:1, 1:2, 1:5, 1:10 … and 2:1, 5:1, 10:1).
 */
import * as V from './vec.js';
import { CP1252, SUBST, charAdvance } from './font.js';
import { t } from './i18n.js';
import { MAX_REVISIONS, nameFeatures } from './part.js';

export const VIEWS = {
  front: { dir: [0, 0, 1], right: [1, 0, 0], up: [0, 1, 0], get label() { return t('model.drawing.view.front'); } },
  top: { dir: [0, 1, 0], right: [1, 0, 0], up: [0, 0, -1], get label() { return t('model.drawing.view.top'); } },
  right: { dir: [1, 0, 0], right: [0, 0, -1], up: [0, 1, 0], get label() { return t('model.drawing.view.right'); } },
  iso: (() => { const d = V.norm([1, 1, 1]); const r = V.norm(V.cross([0, 1, 0], d)); return { dir: d, right: r, up: V.cross(d, r), get label() { return t('model.drawing.view.iso'); } }; })(),
};
// ISO 5455 recommended scales (reduction and enlargement)
export const SCALES = [10, 5, 2, 1, 1 / 2, 1 / 5, 1 / 10, 1 / 20, 1 / 50, 1 / 100, 1 / 200, 1 / 500, 1 / 1000];
// sheets, landscape (mm): ISO 216 A4–A0 and ANSI Y14.1 A–E (inches × 25.4). Keys are what part.drawing.sheet stores.
export const PAPERS = {
  a4: [297, 210], a3: [420, 297], a2: [594, 420], a1: [841, 594], a0: [1189, 841],
  'ansi-a': [279.4, 215.9], 'ansi-b': [431.8, 279.4], 'ansi-c': [558.8, 431.8], 'ansi-d': [863.6, 558.8], 'ansi-e': [1117.6, 863.6],
};
/** A sheet key in words: "A3 (420 × 297 mm)", "ANSI B (17 × 11 in)". */
export const sheetLabel = (k) => { const [w, h] = PAPERS[k] || PAPERS.a3; return k.startsWith('ansi') ? `ANSI ${k.slice(5).toUpperCase()} (${+(w / 25.4).toFixed(1)} × ${+(h / 25.4).toFixed(1)} in)` : `${k.toUpperCase()} (${w} × ${h} mm)`; };
/** The next revision letter after the last one (A, B … Z, AA …; digits count up). */
export function nextRevision(revs) {
  const last = revs && revs.length ? String(revs[revs.length - 1].rev || '') : '';
  if (!last) return 'A';
  if (/^\d+$/.test(last)) return String(Number(last) + 1);
  if (/^[A-Z]+$/.test(last)) {
    const a = last.split('');
    for (let i = a.length - 1; i >= 0; i--) { if (a[i] !== 'Z') { a[i] = String.fromCharCode(a[i].charCodeAt(0) + 1); return a.join(''); } a[i] = 'A'; }
    return 'A' + a.join('');
  }
  return last + '1';
}
const SHARP = Math.cos(20 * Math.PI / 180);
const margin0 = 10;   // border inset (mm)

export const scaleLabel = (s) => (s >= 1 ? `${s}:1` : `1:${Math.round(1 / s)}`);

/** Edges of a mesh: [{ a, b (vertex indices), t1, t2 (triangles), sharp }] and triangle normals. */
export function meshEdges(mesh) {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const normals = new Float64Array(nt * 3);
  for (let t = 0; t < nt; t++) {
    const p = (k) => [P[I[t * 3 + k] * 3], P[I[t * 3 + k] * 3 + 1], P[I[t * 3 + k] * 3 + 2]];
    const n = V.norm(V.cross(V.sub(p(1), p(0)), V.sub(p(2), p(0))));
    normals.set(n, t * 3);
  }
  const map = new Map();
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const a = I[t * 3 + k], b = I[t * 3 + (k + 1) % 3];
    const key = a < b ? a * 4294967296 + b : b * 4294967296 + a;
    const e = map.get(key);
    if (e) e.t2 = t; else map.set(key, { a: Math.min(a, b), b: Math.max(a, b), t1: t, t2: -1 });
  }
  const edges = [];
  const nrm = (t) => [normals[t * 3], normals[t * 3 + 1], normals[t * 3 + 2]];
  for (const e of map.values()) {
    if (e.t2 < 0) { e.sharp = true; edges.push(e); continue; }
    e.sharp = V.dot(nrm(e.t1), nrm(e.t2)) < SHARP;
    edges.push(e);
  }
  return { edges, normals };
}

/** One view: visible and hidden 2D segments (model units, view coordinates u right, v up) and its 2D extents. */
export function projectView(mesh, edgesInfo, view, { hidden = true } = {}) {
  const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
  const { edges, normals } = edgesInfo;
  const pr = (i) => { const p = [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]]; return [V.dot(p, view.right), V.dot(p, view.up), V.dot(p, view.dir)]; };
  const nv = P.length / 3;
  const Q = new Float64Array(nv * 3);
  let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity, wMin = Infinity, wMax = -Infinity;
  for (let i = 0; i < nv; i++) {
    const q = pr(i); Q.set(q, i * 3);
    u0 = Math.min(u0, q[0]); u1 = Math.max(u1, q[0]); v0 = Math.min(v0, q[1]); v1 = Math.max(v1, q[1]); wMin = Math.min(wMin, q[2]); wMax = Math.max(wMax, q[2]);
  }
  const size = Math.max(u1 - u0, v1 - v0, wMax - wMin, 1e-9);
  // grid of triangles facing the viewer (the back faces are behind them in a closed solid)
  const G = 96;
  const cellW = (u1 - u0) / G || 1, cellH = (v1 - v0) / G || 1;
  const grid = Array.from({ length: G * G }, () => []);
  const front = [];
  for (let t = 0; t < nt; t++) {
    const nd = normals[t * 3] * view.dir[0] + normals[t * 3 + 1] * view.dir[1] + normals[t * 3 + 2] * view.dir[2];
    if (nd <= 1e-9) continue;
    front.push(t);
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    const tu0 = Math.min(Q[a * 3], Q[b * 3], Q[c * 3]), tu1 = Math.max(Q[a * 3], Q[b * 3], Q[c * 3]);
    const tv0 = Math.min(Q[a * 3 + 1], Q[b * 3 + 1], Q[c * 3 + 1]), tv1 = Math.max(Q[a * 3 + 1], Q[b * 3 + 1], Q[c * 3 + 1]);
    const gi0 = Math.max(0, Math.floor((tu0 - u0) / cellW)), gi1 = Math.min(G - 1, Math.floor((tu1 - u0) / cellW));
    const gj0 = Math.max(0, Math.floor((tv0 - v0) / cellH)), gj1 = Math.min(G - 1, Math.floor((tv1 - v0) / cellH));
    for (let i = gi0; i <= gi1; i++) for (let j = gj0; j <= gj1; j++) grid[j * G + i].push(t);
  }
  const eps = 1e-6 * size;
  const occluded = (u, v, w) => {
    const i = Math.min(G - 1, Math.max(0, Math.floor((u - u0) / cellW))), j = Math.min(G - 1, Math.max(0, Math.floor((v - v0) / cellH)));
    for (const t of grid[j * G + i]) {
      const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
      const x1 = Q[a], y1 = Q[a + 1], x2 = Q[b], y2 = Q[b + 1], x3 = Q[c], y3 = Q[c + 1];
      const den = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
      if (Math.abs(den) < 1e-12 * size * size) continue;
      const l1 = ((y2 - y3) * (u - x3) + (x3 - x2) * (v - y3)) / den;
      const l2 = ((y3 - y1) * (u - x3) + (x1 - x3) * (v - y3)) / den;
      const l3 = 1 - l1 - l2;
      const m = 1e-7;
      if (l1 < m || l2 < m || l3 < m) continue;
      const depth = l1 * Q[a + 2] + l2 * Q[b + 2] + l3 * Q[c + 2];
      if (depth > w + eps * 10) return true;
    }
    return false;
  };
  const visible = [], hid = [];
  const step = size / 150;
  const nd = (t) => normals[t * 3] * view.dir[0] + normals[t * 3 + 1] * view.dir[1] + normals[t * 3 + 2] * view.dir[2];
  for (const e of edges) {
    let draw = e.sharp;
    if (!draw && e.t2 >= 0) { const d1 = nd(e.t1), d2 = nd(e.t2); draw = (d1 > 1e-9) !== (d2 > 1e-9); }
    if (!draw) continue;
    const A = [Q[e.a * 3], Q[e.a * 3 + 1], Q[e.a * 3 + 2]], B = [Q[e.b * 3], Q[e.b * 3 + 1], Q[e.b * 3 + 2]];
    const len2 = Math.hypot(B[0] - A[0], B[1] - A[1]);
    if (len2 < 1e-9 * size) continue;   // seen end-on
    const n = Math.max(1, Math.ceil(Math.hypot(B[0] - A[0], B[1] - A[1], B[2] - A[2]) / step));
    let runStart = 0, runVis = null;
    const at = (k) => [A[0] + (B[0] - A[0]) * k / n, A[1] + (B[1] - A[1]) * k / n];
    for (let k = 0; k <= n; k++) {
      let vis = null;
      if (k < n) {
        const tm = (k + 0.5) / n;
        vis = !occluded(A[0] + (B[0] - A[0]) * tm, A[1] + (B[1] - A[1]) * tm, A[2] + (B[2] - A[2]) * tm);
      }
      if (k === n || (runVis !== null && vis !== runVis)) {
        const p = at(runStart), q = at(k);
        (runVis ? visible : hid).push([p[0], p[1], q[0], q[1]]);
        runStart = k;
      }
      runVis = vis;
    }
  }
  const vis = mergeSegments(visible, size);
  return { visible: vis, hidden: hidden ? mergeSegments(hid, size, vis) : [], box: { u0, v0, u1, v1 } };
}

/**
 * Join collinear segments that touch or overlap into one (so a dashed line keeps its rhythm and
 * an edge seen twice — front and back edges in line — is drawn once). `minus`: segments to cut out
 * (hidden lines are not drawn where a visible line covers them).
 */
export function mergeSegments(segs, size, minus = []) {
  const tol = 1e-6 * size;
  const lines = new Map();
  const lineOf = (s) => {
    let dx = s[2] - s[0], dy = s[3] - s[1];
    const l = Math.hypot(dx, dy);
    if (l < tol) return null;
    dx /= l; dy /= l;
    if (dx < -1e-12 || (Math.abs(dx) <= 1e-12 && dy < 0)) { dx = -dx; dy = -dy; }
    const off = dx * s[1] - dy * s[0];
    return { dx, dy, off, key: Math.round(Math.atan2(dy, dx) * 1e6) + ':' + Math.round(off / (tol * 10)) };
  };
  const group = (list, into) => {
    for (const s of list) {
      const L = lineOf(s);
      if (!L) continue;
      let g = into.get(L.key);
      if (!g) { g = { ...L, iv: [] }; into.set(L.key, g); }
      const t0 = s[0] * L.dx + s[1] * L.dy, t1 = s[2] * L.dx + s[3] * L.dy;
      g.iv.push([Math.min(t0, t1), Math.max(t0, t1)]);
    }
  };
  group(segs, lines);
  const cut = new Map();
  group(minus, cut);
  const union = (iv) => {
    iv.sort((a, b) => a[0] - b[0]);
    const out = [];
    for (const v of iv) { const last = out[out.length - 1]; if (last && v[0] <= last[1] + tol) last[1] = Math.max(last[1], v[1]); else out.push(v.slice()); }
    return out;
  };
  const result = [];
  for (const [key, g] of lines) {
    let iv = union(g.iv);
    const c = cut.get(key);
    if (c) {
      const cu = union(c.iv);
      const left = [];
      for (const [a, b] of iv) {
        let pieces = [[a, b]];
        for (const [x, y] of cu) pieces = pieces.flatMap(([p, q]) => (y <= p + tol || x >= q - tol ? [[p, q]] : [[p, Math.min(q, x)], [Math.max(p, y), q]]).filter(([u, v]) => v - u > tol));
        left.push(...pieces);
      }
      iv = left;
    }
    // a point on the line: foot from the origin
    const px = -g.dy * g.off, py = g.dx * g.off;
    for (const [a, b] of iv) result.push([px + g.dx * a, py + g.dy * a, px + g.dx * b, py + g.dy * b]);
  }
  return result;
}

const fmtLen = (v) => String(Number(v.toFixed(2)));

/** For a section of view k, the main view where its cutting plane is seen edge-on (third-angle layout). */
export const SECTION_TRACE = { front: 'top', top: 'front', right: 'front' };

/**
 * Views of a faceted mesh (the manifold kernel's solid): the same shape of data brep-draw.js makes.
 * With M (the manifold-3d module) and section ({ of, at? }), also the section view (meshSection).
 */
export function meshViews(mesh, { iso = true, M = null, section = null } = {}) {
  const info = meshEdges(mesh);
  const views = {};
  for (const k of ['front', 'top', 'right']) views[k] = projectView(mesh, info, VIEWS[k]);
  if (iso) views.iso = projectView(mesh, info, VIEWS.iso, { hidden: false });
  if (M && section && VIEWS[section.of]) { const s = meshSection(M, mesh, views, section); if (s) views.section = s; }
  return { views, exact: false };
}

/**
 * A section view of a faceted mesh (0.4 K.3, the mesh kernel's own): the solid cut by the plane square to view `sec.of` at
 * `sec.at` along its direction (default: through the middle of the part), the viewer's side taken away (manifold
 * trimByPlane), the rest projected like the other views (visible lines only, as brep-draw.js does); `cut` = the outline of
 * the facets lying in the cutting plane (drawing.js hatches inside it); `trace` = where the plane shows edge-on in the
 * neighbouring view (SECTION_TRACE). The same shape as brep-draw.js's views.section; null when nothing is left behind the plane.
 */
export function meshSection(M, mesh, views, sec) {
  const view = VIEWS[sec.of];
  const P = mesh.positions;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], P[i + k]); max[k] = Math.max(max[k], P[i + k]); }
  const centre = V.mul(V.add(min, max), 0.5);
  const size = Math.max(1e-6, V.len(V.sub(max, min)));
  const at = Number.isFinite(sec.at) ? sec.at : V.dot(centre, view.dir);
  const o = V.add(V.sub(centre, V.mul(view.dir, V.dot(centre, view.dir))), V.mul(view.dir, at));
  const live = [];
  try {
    const gl = new M.Mesh({ numProp: 3, vertProperties: Float32Array.from(P), triVerts: Uint32Array.from(mesh.indices) });
    gl.merge();
    const whole = new M.Manifold(gl); live.push(whole);
    // trimByPlane keeps what lies on the normal's side: keep n·p ≥ −at with n = −dir, i.e. dir·p ≤ at (away from the viewer)
    const rest = whole.trimByPlane(V.mul(view.dir, -1), -at); live.push(rest);
    if (rest.isEmpty()) return null;
    const g = rest.getMesh();
    const np = g.numProp, nv = g.vertProperties.length / np;
    const pos = new Float64Array(nv * 3);
    for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) pos[i * 3 + k] = g.vertProperties[i * np + k];
    const cutMesh = { positions: pos, indices: Uint32Array.from(g.triVerts) };
    const v = projectView(cutMesh, meshEdges(cutMesh), view, { hidden: false });
    // facets in the plane facing the viewer: the edges only one of them uses are the cut's outline
    const tol = 1e-6 * size, I = cutMesh.indices, nt = I.length / 3;
    const use = new Map(), runs = new Map();   // undirected key → count, and the edge as its facet runs it
    const pt = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
    for (let t = 0; t < nt; t++) {
      const a = pt(I[t * 3]), b = pt(I[t * 3 + 1]), c = pt(I[t * 3 + 2]);
      if ([a, b, c].some((q) => Math.abs(V.dot(q, view.dir) - at) > tol)) continue;
      const n = V.cross(V.sub(b, a), V.sub(c, a));
      if (V.dot(n, view.dir) <= 0) continue;
      for (const [p, q] of [[I[t * 3], I[t * 3 + 1]], [I[t * 3 + 1], I[t * 3 + 2]], [I[t * 3 + 2], I[t * 3]]]) {
        const key = p < q ? p + ',' + q : q + ',' + p;
        use.set(key, (use.get(key) || 0) + 1);
        runs.set(key, [p, q]);
      }
    }
    // outline segments keep their facet's direction: counter-clockwise round the cut seen from the viewer (holes clockwise)
    const cut = [];
    for (const [key, n] of use) {
      if (n !== 1) continue;
      const [p, q] = runs.get(key);
      const a = pt(p), b = pt(q);
      cut.push([V.dot(a, view.right), V.dot(a, view.up), V.dot(b, view.right), V.dot(b, view.up)]);
    }
    let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity;
    for (const s of v.visible.concat(cut)) { u0 = Math.min(u0, s[0], s[2]); u1 = Math.max(u1, s[0], s[2]); v0 = Math.min(v0, s[1], s[3]); v1 = Math.max(v1, s[1], s[3]); }
    // the cutting plane's trace in the view that sees it edge-on (the same arithmetic as brep-draw.js)
    const traceView = SECTION_TRACE[sec.of], tv = VIEWS[traceView];
    const along = V.norm(V.cross(view.dir, tv.dir));
    const trace = { view: traceView, p: [V.dot(o, tv.right), V.dot(o, tv.up)], d: [V.dot(along, tv.right), V.dot(along, tv.up)],
      sight: [V.dot(V.mul(view.dir, -1), tv.right), V.dot(V.mul(view.dir, -1), tv.up)], box: views[traceView].box };
    return { visible: v.visible, hidden: [], cut, box: u0 === Infinity ? { u0: 0, v0: 0, u1: 1, v1: 1 } : { u0, v0, u1, v1 }, of: sec.of, at, trace };
  } finally {
    for (const m of live) { try { m.delete(); } catch { /* gone */ } }
  }
}

/** The sheet from a faceted mesh (kept for the manifold fallback and older callers). */
export function makeDrawing(mesh, opts = {}) {
  return composeSheet(meshViews(mesh, { iso: opts.iso !== false }), opts);
}

/** Even-odd hatch lines (45°, `gap` apart) inside the area bounded by `segs` (any order). */
export function hatch(segs, gap, angle = 45) {
  const a = angle * Math.PI / 180, dx = Math.cos(a), dy = Math.sin(a);
  const nx = -dy, ny = dx;   // lines are {p : p·n = c}
  let c0 = Infinity, c1 = -Infinity;
  for (const s of segs) for (const [x, y] of [[s[0], s[1]], [s[2], s[3]]]) { const c = x * nx + y * ny; c0 = Math.min(c0, c); c1 = Math.max(c1, c); }
  const out = [];
  if (!(c1 > c0)) return out;
  for (let c = Math.ceil(c0 / gap) * gap; c < c1; c += gap) {
    const ts = [];
    for (const s of segs) {
      const p = s[0] * nx + s[1] * ny - c, q = s[2] * nx + s[3] * ny - c;
      if ((p > 0) === (q > 0) || p === q) continue;
      const k = p / (p - q);
      const x = s[0] + (s[2] - s[0]) * k, y = s[1] + (s[3] - s[1]) * k;
      ts.push(x * dx + y * dy);
    }
    ts.sort((u, v) => u - v);
    for (let i = 0; i + 1 < ts.length; i += 2) {
      const t0 = ts[i], t1 = ts[i + 1];
      if (t1 - t0 < 1e-9) continue;
      out.push([nx * c + dx * t0, ny * c + dy * t0, nx * c + dx * t1, ny * c + dy * t1]);
    }
  }
  return out;
}

/** Clip 2D segments to a circle (centre c, radius r). */
export function clipToCircle(segs, c, r) {
  const out = [];
  for (const s of segs) {
    const ax = s[0] - c[0], ay = s[1] - c[1], bx = s[2] - c[0], by = s[3] - c[1];
    const dx = bx - ax, dy = by - ay;
    const A = dx * dx + dy * dy, B = 2 * (ax * dx + ay * dy), C = ax * ax + ay * ay - r * r;
    if (A < 1e-24) continue;
    const disc = B * B - 4 * A * C;
    if (disc <= 0) continue;
    const sq = Math.sqrt(disc);
    const t0 = Math.max(0, (-B - sq) / (2 * A)), t1 = Math.min(1, (-B + sq) / (2 * A));
    if (t1 - t0 <= 1e-12) continue;
    out.push([s[0] + (s[2] - s[0]) * t0, s[1] + (s[3] - s[1]) * t0, s[0] + (s[2] - s[0]) * t1, s[1] + (s[3] - s[1]) * t1]);
  }
  return out;
}

const circleSegs = (cx, cy, r, n = 72) => Array.from({ length: n }, (_, i) => {
  const a = 2 * Math.PI * i / n, b = 2 * Math.PI * (i + 1) / n;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a), cx + r * Math.cos(b), cy + r * Math.sin(b)];
});

/**
 * The sheet: { w, h, strokes: [{ width, dash, segs }], fills: [{ pts }], texts: [{ x, y, size, text, anchor }],
 * scale, place: { view: { x, y, s, box } } (to map sheet ↔ view), notes: [{ id, box }], omitted: [] }
 * in millimetres from the sheet's lower-left corner.
 *   data: { views: { front, top, right, iso?, section? }, exact }   (meshViews() or brep-draw.js drawingViews())
 *   drawing: the part's drawing settings { section?, detail?, notes? }   notes are drawn by `annotate`
 *   annotate(note, anchor) → { strokes, fills, texts, box } (gdt.js annotationGeometry), optional
 */
/**
 * The part's holes for the hole table (0.4 P23): the exact kernel's cylindrical faces made by hole features (pattern copies
 * too), one per axis line (a counterbore's two cylinders are one hole), the smallest radius the drill; the callout in words
 * (THRU / DEEP, counterbore, countersink; a tapped hole's thread callout). → [{ o, d, dia, depth, callout, feature }] or null
 * (the mesh kernel has no face records).
 */
export function partHoles(part, regen) {
  if (!(regen?.exact || regen?.named) || !Array.isArray(regen.faces)) return null;   // either kernel's named faces (0.4 K.2b)
  const holeF = new Map(part.features.filter((f) => f.type === 'hole').map((f) => [f.id, f]));
  const groups = new Map();
  for (const fr of regen.faces) {
    if (!fr || fr.type !== 'cylinder' || !fr.axis || !fr.name) continue;
    const fid = nameFeatures(fr.name).find((id) => holeF.has(id));
    if (!fid) continue;
    let d = V.norm(fr.axis.d);
    if (d[0] < -1e-9 || (Math.abs(d[0]) <= 1e-9 && (d[1] < -1e-9 || (Math.abs(d[1]) <= 1e-9 && d[2] < 0)))) d = V.mul(d, -1);
    const o = V.sub(fr.axis.o, V.mul(d, V.dot(fr.axis.o, d)));
    const key = fid + '|' + [...d, ...o].map((v) => Math.round(v * 1e4)).join(',');
    const g = groups.get(key);
    if (g) g.r = Math.min(g.r, fr.r); else groups.set(key, { fid, d, o, r: fr.r });
  }
  const f2 = (v) => String(+v.toFixed(2));
  return [...groups.values()].map(({ fid, d, o, r }) => {
    const f = holeF.get(fid), dia = 2 * r, th = regen.threads?.get?.(fid);
    let callout = f.through ? t('drawing.holes.thru', { d: f2(dia) }) : t('drawing.holes.deep', { d: f2(dia), depth: f2(f.depth) });
    if (f.kind === 'cbore') callout += t('drawing.holes.cbore', { d: f2(f.cboreD), depth: f2(f.cboreDepth) });
    if (f.kind === 'csink') callout += t('drawing.holes.csink', { d: f2(f.csinkD), angle: f.csinkAngle });
    if (f.kind === 'tapped' && th?.callout) callout = th.callout;
    return { o, d, dia, depth: f.through ? null : f.depth, callout, feature: f.name };
  });
}

/**
 * The hole table's rows (0.4 P23): the holes seen end-on in `view` (axis along its direction), measured from the view box's
 * lower-left corner (u0, v0), tagged by size: A1, A2 … for the first size, B1 … for the next (sizes by diameter, then callout).
 * holes = [{ o, d (unit axis), dia, depth (null = through), callout, feature }] (partcraft.js gathers them from the exact
 * kernel's cylindrical faces, pattern copies included). → { rows: [{ tag, x, y, u, v, dia, size, depth, feature }], skipped }
 */
export function holeTableRows(holes, view, box) {
  const V0 = VIEWS[view];
  if (!V0) return { rows: [], skipped: holes.length };
  const rows = [];
  let skipped = 0;
  for (const h of holes) {
    if (Math.abs(V.dot(V.norm(h.d), V0.dir)) < 1 - 1e-9) { skipped++; continue; }
    const u = V.dot(h.o, V0.right), v = V.dot(h.o, V0.up);
    rows.push({ u, v, x: u - box.u0, y: v - box.v0, dia: h.dia, size: h.callout || 'Ø' + fmtLen(h.dia), depth: h.depth, feature: h.feature });
  }
  const sizes = [...new Set(rows.map((r) => r.dia.toFixed(6) + '|' + r.size))].sort((a, b) => parseFloat(a) - parseFloat(b) || a.localeCompare(b));
  rows.sort((a, b) => sizes.indexOf(a.dia.toFixed(6) + '|' + a.size) - sizes.indexOf(b.dia.toFixed(6) + '|' + b.size) || b.y - a.y || a.x - b.x);
  const count = new Map();
  for (const r of rows) {
    const k = sizes.indexOf(r.dia.toFixed(6) + '|' + r.size), n = (count.get(k) || 0) + 1;
    count.set(k, n);
    r.tag = (k < 26 ? String.fromCharCode(65 + k) : 'Z' + (k - 25)) + n;
  }
  return { rows, skipped };
}

/** The scale composeSheet gives the three main views on a paper (the same rule it uses). */
export function sheetScale(views, key, revH = 0) {
  const [W, H] = PAPERS[key], gap = 18, tbH = 40;
  const bw = (v) => v.box.u1 - v.box.u0, bh = (v) => v.box.v1 - v.box.v0;
  const areaW = W - 2 * margin0 - 2 * gap, areaH = H - 2 * margin0 - tbH - 2 * gap - revH;
  const needW = bw(views.front) + bw(views.right), needH = bh(views.front) + bh(views.top);
  return SCALES.find((s) => needW * s <= areaW * 0.82 && needH * s <= areaH * 0.82) || SCALES[SCALES.length - 1];
}
export const AUTO_PAPERS = ['a4', 'a3', 'a2', 'a1', 'a0'];
/** 0.8 EG.56: the paper an automatic sheet takes — the largest standard scale up to 1:1 that A0 allows, on the smallest sheet giving it. */
export function autoPaper(views, revH = 0) {
  const target = Math.min(1, sheetScale(views, 'a0', revH));
  return AUTO_PAPERS.find((k) => sheetScale(views, k, revH) >= target - 1e-12) || 'a0';
}

export function composeSheet(data, { name = t('model.drawing.default_name'), date = new Date(), paper = null, drawing = {}, annotate = null, material = '', holes = null } = {}) {
  const revs = (drawing.revisions || []).slice(-MAX_REVISIONS), revH = revs.length ? 7 + 5 * revs.length : 0;
  const views = data.views;
  const bw = (v) => v.box.u1 - v.box.u0, bh = (v) => v.box.v1 - v.box.v0;
  // 0.8 EG.56 (part_PART_3): an automatic sheet — the largest standard scale up to 1:1, on the smallest ISO sheet that holds the views at it
  const sheetKey = drawing.sheet === 'auto' ? autoPaper(views, revH) : PAPERS[drawing.sheet] ? drawing.sheet : PAPERS[paper] ? paper : 'a3';
  const [W, H] = PAPERS[sheetKey];
  const revW = Math.min(150, W - 2 * margin0 - 40);
  const margin = margin0, gap = 18, tbH = 40, tbW = 180;
  const areaW = W - 2 * margin - 2 * gap, areaH = H - 2 * margin - tbH - 2 * gap - revH;
  const needW = bw(views.front) + bw(views.right), needH = bh(views.front) + bh(views.top);
  const scale = SCALES.find((s) => needW * s <= areaW * 0.82 && needH * s <= areaH * 0.82) || SCALES[SCALES.length - 1];
  const strokes = { visible: { width: 0.5, dash: null, segs: [] }, hidden: { width: 0.25, dash: [2, 1], segs: [] }, thin: { width: 0.18, dash: null, segs: [] }, chain: { width: 0.18, dash: [8, 1.5, 1.5, 1.5], segs: [] }, border: { width: 0.7, dash: null, segs: [] } };
  const extra = [];
  const fills = [], texts = [], omitted = [];
  const x0 = margin + gap, y0 = margin + tbH + gap + 6;
  const place = {};
  const at = (k, x, y, s) => { place[k] = { x, y, s, box: views[k].box }; };
  at('front', x0 + 12, y0 + 8, scale);
  at('top', place.front.x, place.front.y + bh(views.front) * scale + gap, scale);
  at('right', place.front.x + bw(views.front) * scale + gap, place.front.y, scale);
  // the free areas: above the right view (right of the top view), and right of the right view above the title block
  const slots = [];
  {
    const left = Math.max(place.right.x, place.top.x + bw(views.top) * scale + gap);
    const bottom = place.right.y + bh(views.right) * scale + gap + 8;
    slots.push({ x: left, y: bottom, w: W - margin - gap - left, h: H - margin - gap - revH - bottom });
    const l2 = place.right.x + bw(views.right) * scale + gap;
    slots.push({ x: l2, y: margin + tbH + gap + 8, w: W - margin - gap - l2, h: bottom - gap - 8 - (margin + tbH + gap + 8) });
  }
  // extra views wanted, most important first
  const wanted = [];
  const sec = views.section && drawing.section ? views.section : null;
  const det = drawing.detail && (views[drawing.detail.of] || (drawing.detail.of === 'section' && sec)) ? drawing.detail : null;
  if (sec) wanted.push({ key: 'section', w: bw(sec), h: bh(sec), max: scale });
  if (det) wanted.push({ key: 'detail', w: 2 * det.r, h: 2 * det.r, max: scale * det.scale, fixed: scale * det.scale });
  // the hole table (0.4 P23): a fixed-size table, before the isometric view
  const HT = drawing.holeTable && VIEWS[drawing.holeTable.view] && drawing.holeTable.view !== 'iso' && holes ? holeTableRows(holes, drawing.holeTable.view, views[drawing.holeTable.view].box) : null;
  const HTC = [12, 22, 22, 0], HTR = 5;
  if (HT) {
    HTC[3] = Math.min(90, Math.max(30, ...HT.rows.map((r) => textWidth(r.size, 2.5) + 4), textWidth(t('drawing.holes.size'), 2.5) + 4));
    wanted.push({ key: 'holes', w: HTC.reduce((a, b) => a + b, 0), h: HTR * (HT.rows.length + 1) + 7, max: 1, fixed: 1 });
  }
  if (views.iso) wanted.push({ key: 'iso', w: bw(views.iso), h: bh(views.iso), max: scale });
  const used = slots.map(() => 0);
  for (const it of wanted) {
    let ok = false;
    for (let i = 0; i < slots.length && !ok; i++) {
      const sl = slots[i];
      const free = { x: sl.x + used[i], w: sl.w - used[i], h: sl.h };
      if (free.w < 20 || free.h < 20) continue;
      const s = it.fixed ? (it.w * it.fixed <= free.w && it.h * it.fixed + 10 <= free.h ? it.fixed : null)
        : SCALES.find((q) => q <= it.max && it.w * q <= free.w && it.h * q + 10 <= free.h) || null;
      if (!s) continue;
      const wv = it.w * s, hv = it.h * s;
      const px = free.x + (wanted.length > 1 && slots[i].w > 2 * wv ? 0 : (free.w - wv) / 2), py = sl.y + (free.h - hv) / 2;
      if (it.key === 'detail') place.detail = { x: px, y: py, s, box: { u0: det.at[0] - det.r, v0: det.at[1] - det.r, u1: det.at[0] + det.r, v1: det.at[1] + det.r } };
      else if (it.key === 'holes') place.holes = { x: px, y: py, s: 1, box: { u0: 0, v0: 0, u1: it.w, v1: it.h } };
      else at(it.key, px, py, s);
      used[i] += wv + gap;
      ok = true;
    }
    if (!ok) omitted.push(it.key);
  }
  const toSheet = (k, u, v) => { const p = place[k]; return [p.x + (u - p.box.u0) * p.s, p.y + (v - p.box.v0) * p.s]; };
  const put = (k, layer, segs) => {
    for (const g of segs) { const a = toSheet(k, g[0], g[1]), b = toSheet(k, g[2], g[3]); strokes[layer].segs.push([a[0], a[1], b[0], b[1]]); }
  };
  for (const k of ['front', 'top', 'right', 'iso']) {
    if (!place[k]) continue;
    put(k, 'visible', views[k].visible);
    if (k !== 'iso') put(k, 'hidden', views[k].hidden || []);
    texts.push({ x: place[k].x + bw(views[k]) * place[k].s / 2, y: place[k].y - (k === 'front' ? 24 : 9), size: 3.5, text: place[k].s !== scale ? t('model.drawing.view_scaled', { view: VIEWS[k].label, scale: scaleLabel(place[k].s) }) : VIEWS[k].label, anchor: 'middle' });
  }
  // section: the cut view, its hatching, and the cutting-plane line on the view that sees the plane edge-on
  if (sec && place.section) {
    put('section', 'visible', sec.visible);
    put('section', 'visible', sec.cut);
    const hs = hatch(sec.cut, 2.5 / place.section.s);
    put('section', 'thin', hs);
    const p = place.section;
    texts.push({ x: p.x + bw(sec) * p.s / 2, y: p.y - 9, size: 3.5, text: p.s !== scale ? t('model.drawing.view_scaled', { view: t('model.drawing.section'), scale: scaleLabel(p.s) }) : t('model.drawing.section'), anchor: 'middle' });
    const tr = sec.trace;
    if (place[tr.view]) {
      const b = tr.box, d = tr.d, len = Math.hypot(d[0], d[1]) || 1, u = [d[0] / len, d[1] / len];
      // extend the line across the view's box plus a little
      const ts = [];
      for (const [x, y] of [[b.u0, b.v0], [b.u1, b.v0], [b.u0, b.v1], [b.u1, b.v1]]) ts.push((x - tr.p[0]) * u[0] + (y - tr.p[1]) * u[1]);
      const ext = 6 / place[tr.view].s;
      const A = [tr.p[0] + u[0] * (Math.min(...ts) - ext), tr.p[1] + u[1] * (Math.min(...ts) - ext)];
      const B = [tr.p[0] + u[0] * (Math.max(...ts) + ext), tr.p[1] + u[1] * (Math.max(...ts) + ext)];
      const a = toSheet(tr.view, ...A), bb = toSheet(tr.view, ...B);
      strokes.chain.segs.push([a[0], a[1], bb[0], bb[1]]);
      const sl = Math.hypot(tr.sight[0], tr.sight[1]) || 1, sg = [tr.sight[0] / sl, tr.sight[1] / sl];
      const L = Math.hypot(bb[0] - a[0], bb[1] - a[1]) || 1, uu = [(bb[0] - a[0]) / L, (bb[1] - a[1]) / L];
      for (const [e, dirIn] of [[a, 1], [bb, -1]]) {
        const thickEnd = [e[0] + uu[0] * 5 * dirIn, e[1] + uu[1] * 5 * dirIn];
        extra.push({ width: 0.7, dash: null, segs: [[e[0], e[1], thickEnd[0], thickEnd[1]]] });
        // arrow square to the line, pointing the way the section is looked at
        const tail = [e[0] - sg[0] * 7, e[1] - sg[1] * 7];
        strokes.thin.segs.push([tail[0], tail[1], e[0] - sg[0] * 0.1, e[1] - sg[1] * 0.1]);
        arrow(fills, [e[0], e[1]], sg);
        texts.push({ x: tail[0] - sg[0] * 3, y: tail[1] - sg[1] * 3 - 1.2, size: 3.5, text: 'A', anchor: 'middle', bold: true });   // i18n-ignore: section letter
      }
    }
  }
  // detail: a circle on its parent view, and the circle's contents enlarged
  if (det && place.detail) {
    const parent = det.of === 'section' ? (place.section ? 'section' : null) : det.of;
    const src = det.of === 'section' ? sec : views[det.of];
    if (parent && place[parent]) {
      const c = toSheet(parent, det.at[0], det.at[1]);
      strokes.thin.segs.push(...circleSegs(c[0], c[1], det.r * place[parent].s));
      texts.push({ x: c[0] + det.r * place[parent].s * 0.75 + 1.5, y: c[1] + det.r * place[parent].s * 0.75 + 1.5, size: 3.5, text: 'B', anchor: 'start', bold: true });   // i18n-ignore: detail letter
      put('detail', 'visible', clipToCircle(src.visible.concat(det.of === 'section' ? src.cut : []), det.at, det.r));
      put('detail', 'hidden', clipToCircle(src.hidden || [], det.at, det.r));
      if (det.of === 'section') put('detail', 'thin', clipToCircle(hatch(src.cut, 2.5 / place.detail.s), det.at, det.r));
      const dc = toSheet('detail', det.at[0], det.at[1]);
      strokes.thin.segs.push(...circleSegs(dc[0], dc[1], det.r * place.detail.s));
      texts.push({ x: dc[0], y: dc[1] - det.r * place.detail.s - 6, size: 3.5, text: t('model.drawing.view_scaled', { view: t('model.drawing.detail'), scale: scaleLabel(place.detail.s) }), anchor: 'middle' });
    } else omitted.push('detail');
  }
  // overall dimensions: width and height on the front view, depth on the top view
  const dimH = (xa, xb, y, yRef, value) => {
    strokes.thin.segs.push([xa, yRef, xa, y - 2], [xb, yRef, xb, y - 2], [xa, y, xb, y]);
    arrow(fills, [xa, y], [-1, 0]); arrow(fills, [xb, y], [1, 0]);
    texts.push({ x: (xa + xb) / 2, y: y + 1.2, size: 3.5, text: value, anchor: 'middle' });
  };
  const dimV = (ya, yb, x, xRef, value) => {
    strokes.thin.segs.push([xRef, ya, x - 2, ya], [xRef, yb, x - 2, yb], [x, ya, x, yb]);
    arrow(fills, [x, ya], [0, -1]); arrow(fills, [x, yb], [0, 1]);
    texts.push({ x: x - 1.2, y: (ya + yb) / 2, size: 3.5, text: value, anchor: 'middle', rot: 90 });
  };
  const F = views.front, Tv = views.top;
  const fx0 = place.front.x, fy0 = place.front.y, fx1 = fx0 + bw(F) * scale, fy1 = fy0 + bh(F) * scale;
  dimH(fx0, fx1, fy0 - 14, fy0 - 1, fmtLen(bw(F)));
  dimV(fy0, fy1, fx0 - 8, fx0 - 1, fmtLen(bh(F)));
  const tx0 = place.top.x, ty0 = place.top.y, ty1 = ty0 + bh(Tv) * scale;
  dimV(ty0, ty1, tx0 - 8, tx0 - 1, fmtLen(bh(Tv)));
  // annotations (GD&T, datums, surface finish) attached to points of the views
  const notes = [];
  for (const n of drawing.notes || []) {
    const k = n.view === 'detail' ? (place.detail ? 'detail' : null) : place[n.view] ? n.view : null;
    if (!k || !annotate) { notes.push({ id: n.id, missing: true }); continue; }
    const anchor = toSheet(k, n.at[0], n.at[1]);
    const g = annotate(n, anchor);
    for (const st of g.strokes) extra.push({ width: st.width, dash: st.dash || null, segs: st.segs });
    fills.push(...g.fills);
    texts.push(...g.texts);
    notes.push({ id: n.id, box: g.box, anchor });
  }
  // the hole table: tags beside each hole on its view, the origin they are measured from, and the table (0.4 P23)
  let holeTable = null;
  if (HT && place.holes && place[drawing.holeTable.view]) {
    const k = drawing.holeTable.view, b = views[k].box;
    for (const r of HT.rows) {
      const c = toSheet(k, r.u, r.v), off = r.dia / 2 * place[k].s;
      texts.push({ x: c[0] + off * 0.75 + 1, y: c[1] + off * 0.75 + 1, size: 2.5, text: r.tag, anchor: 'start', bold: true });
    }
    const o = toSheet(k, b.u0, b.v0);
    strokes.thin.segs.push([o[0] - 3, o[1], o[0] + 3, o[1]], [o[0], o[1] - 3, o[0], o[1] + 3]);
    texts.push({ x: o[0] - 1.5, y: o[1] - 4.5, size: 2.5, text: 'X0 Y0', anchor: 'end' });   // i18n-ignore: drawing notation
    const p = place.holes, tw = HTC.reduce((a, c) => a + c, 0), th = HTR * (HT.rows.length + 1);
    const top = p.y + th;
    texts.push({ x: p.x, y: top + 2.5, size: 3, text: t('drawing.holes.title', { view: t('drawing.view.' + k) }), anchor: 'start', bold: true });
    strokes.thin.segs.push([p.x, top, p.x + tw, top], [p.x, p.y, p.x + tw, p.y], [p.x, p.y, p.x, top], [p.x + tw, p.y, p.x + tw, top]);
    let xx = p.x;
    const head = [t('drawing.holes.tag'), 'X', 'Y', t('drawing.holes.size')];   // i18n-ignore: X and Y are coordinates
    HTC.forEach((w, i) => { if (i) strokes.thin.segs.push([xx, p.y, xx, top]); texts.push({ x: xx + 1.2, y: top - HTR + 1.4, size: 2.5, text: head[i], anchor: 'start', bold: true }); xx += w; });
    HT.rows.forEach((r, i) => {
      const y = top - HTR * (i + 2);
      strokes.thin.segs.push([p.x, y + HTR, p.x + tw, y + HTR]);
      const cells = [r.tag, fmtLen(r.x), fmtLen(r.y), r.size];
      let x2 = p.x;
      cells.forEach((v, c) => { texts.push({ x: x2 + 1.2, y: y + 1.4, size: 2.5, text: fitText(String(v), HTC[c] - 2.4, 2.5), anchor: 'start' }); x2 += HTC[c]; });
    });
    holeTable = { view: k, rows: HT.rows.map(({ tag, x, y, size, dia, depth }) => ({ tag, x, y, size, dia, depth })), skipped: HT.skipped };
  } else if (drawing.holeTable && !holes) omitted.push('holes');
  // 0.8 EG.20 (part_PART_3): hole dimensions — on the main view that sees the most holes end-on: a centre mark on each, one callout per size
  // ("n× ⌀ …" with a leader to the first), and ordinate positions from the view's lower-left corner (X below the view, Y to its left)
  let holeDims = null;
  if (drawing.holeDims && holes && holes.length) {
    const cand = ['front', 'top', 'right'].map((k) => ({ k, rows: holeTableRows(holes, k, views[k].box).rows })).sort((a, b) => b.rows.length - a.rows.length)[0];
    if (cand && cand.rows.length && place[cand.k]) {
      const k = cand.k, b = views[k].box, s = place[k].s, o = toSheet(k, b.u0, b.v0), x1 = toSheet(k, b.u1, b.v0)[0], y1 = toSheet(k, b.u0, b.v1)[1];
      const groups = new Map();
      for (const r of cand.rows) { const key = r.dia.toFixed(6) + '|' + r.size; (groups.get(key) || groups.set(key, []).get(key)).push(r); }
      for (const r of cand.rows) { const c = toSheet(k, r.u, r.v), m = Math.max(1.5, r.dia / 2 * s + 1.5); strokes.chain.segs.push([c[0] - m, c[1], c[0] + m, c[1]], [c[0], c[1] - m, c[0], c[1] + m]); }
      let gi = 0;
      for (const rows of groups.values()) {
        const r = rows[0], c = toSheet(k, r.u, r.v), rr = r.dia / 2 * s, dir = [Math.SQRT1_2, Math.SQRT1_2], start = [c[0] + dir[0] * rr, c[1] + dir[1] * rr];
        const end = [start[0] + 8 + 3 * gi, start[1] + 8 + 3 * gi], label = (rows.length > 1 ? rows.length + '× ' : '') + r.size;
        strokes.thin.segs.push([start[0], start[1], end[0], end[1]], [end[0], end[1], end[0] + textWidth(label, 3) + 2, end[1]]);
        arrow(fills, start, [-dir[0], -dir[1]]);
        texts.push({ x: end[0] + 1, y: end[1] + 1, size: 3, text: label, anchor: 'start' });
        gi++;
      }
      const xs = [...new Set(cand.rows.map((r) => +r.x.toFixed(2)))].sort((a, b) => a - b), ys = [...new Set(cand.rows.map((r) => +r.y.toFixed(2)))].sort((a, b) => a - b);
      const yb = o[1] - (k === 'front' ? 24 : 10), xl = o[0] - (k === 'front' || k === 'top' ? 18 : 8);
      strokes.thin.segs.push([o[0], o[1] - 1, o[0], yb + 2]);
      texts.push({ x: o[0], y: yb - 3.5, size: 2.5, text: '0', anchor: 'middle', rot: 90 });
      for (const x of xs) { const sx = o[0] + x * s; strokes.thin.segs.push([sx, o[1] - 1, sx, yb + 2]); texts.push({ x: sx, y: yb - 3.5, size: 2.5, text: fmtLen(x), anchor: 'middle', rot: 90 }); }
      strokes.thin.segs.push([o[0] - 1, o[1], xl + 2, o[1]]);
      texts.push({ x: xl - 1, y: o[1] - 1, size: 2.5, text: '0', anchor: 'end' });
      for (const y of ys) { const sy = o[1] + y * s; strokes.thin.segs.push([o[0] - 1, sy, xl + 2, sy]); texts.push({ x: xl - 1, y: sy - 1, size: 2.5, text: fmtLen(y), anchor: 'end' }); }
      holeDims = { view: k, holes: cand.rows.length, sizes: groups.size, xs, ys, box: [o[0], o[1], x1, y1] };
    }
  } else if (drawing.holeDims && !holes) omitted.push('holes');
  // border, title block (ISO 7200-style cells) and the revision block (top right)
  const rect = (x, y, w, h, layer) => strokes[layer].segs.push([x, y, x + w, y], [x + w, y, x + w, y + h], [x + w, y + h, x, y + h], [x, y + h, x, y]);
  rect(margin, margin, W - 2 * margin, H - 2 * margin, 'border');
  const bx = W - margin - tbW, by = margin;
  rect(bx, by, tbW, tbH, 'border');
  const tt = drawing.title || {};
  const d = date instanceof Date ? date : new Date(date);
  const rev = tt.rev || (revs.length ? revs[revs.length - 1].rev : '');
  // rows from the top: title + company (14) · number, revision, material (9) · drawn, checked, approved, date (9) · scale, size, notes (8)
  const rows = [[14, [[120, t('drawing.tb.title'), tt.title || name, 5, true], [60, t('drawing.tb.company'), tt.company || '', 3]]],
    [9, [[60, t('drawing.tb.number'), tt.number || '', 3.5, true], [20, t('drawing.tb.rev'), rev, 3.5, true], [100, t('drawing.tb.material'), material || '', 3]]],
    [9, [[45, t('drawing.tb.drawn'), tt.drawnBy || '', 3], [45, t('drawing.tb.checked'), tt.checkedBy || '', 3], [45, t('drawing.tb.approved'), tt.approvedBy || '', 3], [45, t('drawing.tb.date'), tt.date || d.toISOString().slice(0, 10), 3]]],
    [8, [[25, t('drawing.tb.scale'), scaleLabel(scale), 3.5, true], [30, t('drawing.tb.size'), sheetKey.startsWith('ansi') ? 'ANSI ' + sheetKey.slice(5).toUpperCase() : sheetKey.toUpperCase(), 3.5], [125, null, null]]]];
  let ry = by + tbH;
  const cells = {};
  rows.forEach(([h, cs], ri) => {
    ry -= h;
    if (ri) strokes.thin.segs.push([bx, ry + h, bx + tbW, ry + h]);
    let cx = bx;
    cs.forEach(([w, label, value, size, bold], ci) => {
      if (ci) strokes.thin.segs.push([cx, ry, cx, ry + h]);
      if (label) {
        texts.push({ x: cx + 1.5, y: ry + h - 2.6, size: 2, text: label, anchor: 'start' });
        if (value) texts.push({ x: cx + 1.5, y: ry + 1.6, size, text: fitText(String(value), (w - 3) * (bold ? 0.9 : 1), size), anchor: 'start', bold: !!bold });   // bold runs ~10 % wider
        cells[label] = { x: cx, y: ry, w, h };
      }
      cx += w;
    });
  });
  // the last cell: units, projection, kernel, and the notice the LGPL arrangement asks for
  const nx = bx + 55 + 1.5;
  texts.push({ x: nx, y: by + 4.6, size: 2, text: fitText(t('drawing.tb.units') + (data.exact ? ' ' + t('drawing.tb.exact') : ' ' + t('drawing.tb.facets')), 122, 2), anchor: 'start' });
  texts.push({ x: nx, y: by + 1.4, size: 2, text: fitText(t('drawing.tb.made') + (data.exact ? ' ' + t('drawing.tb.occt') : ''), 122, 2), anchor: 'start' });
  // general tolerance and finish, when given: a line above the title block
  const general = [tt.tolerance ? t('drawing.tb.tolerance', { v: tt.tolerance }) : '', tt.finish ? t('drawing.tb.finish', { v: tt.finish }) : ''].filter(Boolean);
  const threadsY = by + tbH + 4 + (general.length ? 5 : 0);
  if (general.length) texts.push({ x: bx, y: by + tbH + 4, size: 3, text: fitText(general.join('   '), tbW, 3), anchor: 'start' });
  // tapped holes: the thread is cosmetic in the model, so its callout is a note above the title block
  (data.threads || []).forEach((th, i) => texts.push({ x: bx, y: threadsY + i * 5, size: 3.5, text: (th.count > 1 ? th.count + '× ' : '') + th.callout, anchor: 'start' }));
  // revisions: newest at the bottom, header on top, in the top-right corner inside the border
  if (revs.length) {
    const rx = W - margin - revW, top = H - margin, cw = [12, revW - 12 - 22 - 18, 22, 18];
    rect(rx, top - revH, revW, revH, 'border');
    const head = [t('drawing.rev.rev'), t('drawing.rev.desc'), t('drawing.rev.date'), t('drawing.rev.by')];
    const rowAt = (i) => top - 7 - 5 * (i + 1);
    strokes.thin.segs.push([rx, top - 7, rx + revW, top - 7]);
    let x = rx;
    cw.forEach((w, i) => { if (i) strokes.thin.segs.push([x, top - revH, x, top]); texts.push({ x: x + 1.5, y: top - 5, size: 2.5, text: head[i], anchor: 'start', bold: true }); x += w; });
    revs.forEach((r, i) => {
      const y = rowAt(i);
      if (i) strokes.thin.segs.push([rx, y + 5, rx + revW, y + 5]);
      let xx = rx;
      [r.rev, r.desc, r.date, r.by].forEach((v, k) => { if (v) texts.push({ x: xx + 1.5, y: y + 1.4, size: 2.5, text: fitText(String(v), cw[k] - 3, 2.5), anchor: 'start' }); xx += cw[k]; });
    });
  }
  const viewsOut = {};
  for (const k of Object.keys(place)) {
    if (k === 'holes') continue;
    const p = place[k], v = k === 'detail' ? null : views[k];
    viewsOut[k] = { x: p.x, y: p.y, w: (p.box.u1 - p.box.u0) * p.s, h: (p.box.v1 - p.box.v0) * p.s, s: p.s, visible: v ? v.visible.length : 0, hidden: v ? (v.hidden || []).length : 0 };
  }
  return {
    w: W, h: H, paper: sheetKey, name, scale, titleCells: cells, revisions: revs.length, isoScale: place.iso ? place.iso.s : null, strokes: [...Object.values(strokes), ...extra], fills, texts,
    views: viewsOut, place, notes, omitted, exact: !!data.exact, holeTable, holeDims,
  };
}

/** Width in mm of a text at a size (Helvetica widths). */
const textWidth = (s, size) => [...String(s)].reduce((a, ch) => a + charAdvance(ch), 0) * size / 1000;

/** Text cut to a width in mm at a size (Helvetica widths), ending in "…" when cut. */
function fitText(s, w, size) {
  const width = (str) => [...str].reduce((a, ch) => a + charAdvance(ch), 0) * size / 1000;
  if (width(s) <= w) return s;
  let lo = 0, hi = s.length;
  while (lo < hi) { const m = (lo + hi + 1) >> 1; if (width(s.slice(0, m) + '…') <= w) lo = m; else hi = m - 1; }
  return s.slice(0, lo) + '…';
}

function arrow(fills, [x, y], [dx, dy]) {
  const L = 3, w = 0.9;
  fills.push({ pts: [[x, y], [x - dx * L - dy * w, y - dy * L + dx * w], [x - dx * L + dy * w, y - dy * L - dx * w]] });
}

// ---------------------------------------------------------------- PDF (from CadCraft's plot.js)

function num(v) {
  if (!Number.isFinite(v)) return '0';
  const s = (Math.abs(v) < 5e-5 ? 0 : v).toFixed(4);
  return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
}

/** A string as an escaped PDF literal in WinAnsiEncoding, its width (1/1000 em), and how many characters had no glyph. */
export function winAnsi(s) {
  let str = '', width = 0, missing = 0;
  for (let ch of s) {
    ch = SUBST[ch] || ch;
    let code = ch.codePointAt(0);
    if (CP1252[ch] !== undefined) code = CP1252[ch];
    else if (code > 0xff || (code >= 0x7f && code < 0xa0) || code < 0x20) { code = 0x3f; missing++; width += 556; }
    if (code === 0x28 || code === 0x29 || code === 0x5c) str += '\\' + String.fromCharCode(code);
    else if (code >= 0x20 && code < 0x7f) str += String.fromCharCode(code);
    else str += '\\' + code.toString(8).padStart(3, '0');
    if (code !== 0x3f || ch === '?') width += charAdvance(ch);
  }
  return { str, width, missing };
}

export async function toPdf(sheet) {
  const ops = [];
  ops.push((72 / 25.4).toFixed(9) + ' 0 0 ' + (72 / 25.4).toFixed(9) + ' 0 0 cm', '0 0 0 RG 0 0 0 rg 1 J 1 j');
  for (const s of sheet.strokes) {
    if (!s.segs.length) continue;
    ops.push(num(s.width) + ' w ' + (s.dash ? '[' + s.dash.map(num).join(' ') + '] 0 d' : '[] 0 d'));
    for (const g of s.segs) ops.push(num(g[0]) + ' ' + num(g[1]) + ' m ' + num(g[2]) + ' ' + num(g[3]) + ' l');
    ops.push('S');
  }
  for (const f of sheet.fills) ops.push(f.pts.map((p, i) => num(p[0]) + ' ' + num(p[1]) + (i ? ' l' : ' m')).join(' ') + ' h f');
  let missing = 0;
  for (const t of sheet.texts) {
    const enc = winAnsi(t.text);
    missing += enc.missing;
    const w = enc.width / 1000 * t.size;
    const dx = t.anchor === 'middle' ? -w / 2 : t.anchor === 'end' ? -w : 0;
    const r = (t.rot || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
    const x = t.x + dx * c, y = t.y + dx * s;
    // i18n-ignore: PDF content stream
    ops.push('BT /' + (t.bold ? 'F2' : 'F1') + ' 1 Tf ' + [t.size * c, t.size * s, -t.size * s, t.size * c, x, y].map(num).join(' ') + ' Tm (' + enc.str + ') Tj ET');
  }
  const content = new TextEncoder().encode(ops.join('\n') + '\n');
  const packed = await deflate(content);
  return { bytes: assemble(sheet.w, sheet.h, packed || content, !!packed, sheet.name), missing };
}

async function deflate(bytes) {
  if (typeof CompressionStream === 'undefined') return null;
  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch { return null; }
}

function assemble(wMm, hMm, content, flate, title) {
  const enc = new TextEncoder();
  const parts = [], offsets = [];
  let size = 0;
  const push = (b) => { const u = typeof b === 'string' ? enc.encode(b) : b; parts.push(u); size += u.length; };
  const obj = (n, body) => { offsets[n] = size; push(n + ' 0 obj\n'); for (const b of [].concat(body)) push(b); push('\nendobj\n'); };
  const pt = (mm) => num(mm * 72 / 25.4);
  const now = new Date(), pad = (x) => String(x).padStart(2, '0');
  const date = 'D:' + now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
  push('%PDF-1.4\n');
  push(Uint8Array.from([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a]));
  obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
  obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
  obj(3, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ' + pt(wMm) + ' ' + pt(hMm) + '] /Resources << /Font << /F1 5 0 R /F2 7 0 R >> >> /Contents 4 0 R >>');
  obj(4, ['<< /Length ' + content.length + (flate ? ' /Filter /FlateDecode' : '') + ' >>\nstream\n', content, '\nendstream']);
  obj(5, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  obj(6, '<< /Title (' + winAnsi(String(title || '')).str + ') /Producer (PartCraft) /Creator (PartCraft) /CreationDate (' + date + ') >>');
  obj(7, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  const xref = size;
  push('xref\n0 8\n0000000000 65535 f \n' + offsets.slice(1).map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join(''));
  push('trailer\n<< /Size 8 /Root 1 0 R /Info 6 0 R >>\nstartxref\n' + xref + '\n%%EOF\n');
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { out.set(p, at); at += p.length; }
  return out;
}
