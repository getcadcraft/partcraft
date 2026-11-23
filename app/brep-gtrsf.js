/* SPDX-License-Identifier: Apache-2.0 */
/**
 * brep-gtrsf.js — an affine (non-uniform) map of an exact solid, for Scale body (DOM-free; OCCT is passed in).
 * This OpenCascade build binds gp_GTrsf but not BRepBuilderAPI_GTransform (nor NurbsConvert or BRep_Builder), so the
 * map is applied to the shape's BRep text (BRepToolsWrapper.Write / Read): every TShape is kept, every surface and
 * 3D curve is replaced by its image under the map IN THE SAME PARAMETERS, so the stored 2D curves (pcurves) stay valid
 * as they are and the topology is untouched:
 *   plane → plane (its image is a plane; the pcurves on planes are dropped, OpenCascade projects them again),
 *   line → degree-1 B-spline (exact), B-spline / Bézier curve or surface → poles mapped (exact, weights kept),
 *   circle, ellipse, cylinder, cone, sphere, torus, surfaces of revolution / extrusion of those → B-splines whose
 *   trigonometric directions are periodic uniform cubic interpolations of the exact map at 2π/n steps (n from the
 *   radius so the deviation is ≤ DEV mm; uniform cubic interpolation of a circle errs h⁴R/384, h = 2π/n) and whose
 *   straight directions are degree 1 (exact). A non-uniform scale turns circles into ellipses, which no analytic
 *   OpenCascade surface of the same parameters can hold, so curved analytic faces become B-spline surfaces.
 * Locations are baked in (a TShape used under two placements is written twice), triangulations and polygons dropped,
 * tolerances raised to cover the interpolation. Offset curves/surfaces, parabolas and hyperbolas are refused.
 *
 *   affineShape(oc, shape, A, { bbox }) → { shape (new, caller deletes), deviation (mm, ≤ bound), approximated }
 *   A = { m: 3×3 rows, t: [x, y, z] } with det m > 0.
 */
import { t as tr } from './i18n.js';
import { add3 as add, cross3 as cross, dot3 as dot, len3 as len, scale3 as mul, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const DEV = 4e-7;
const N_MIN = 32, N_MAX = 720;

const mulM = (a, b) => {   // 4×4 row-major (3 rows used): a ∘ b
  const r = new Array(12);
  for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) r[i * 4 + j] = a[i * 4] * b[j] + a[i * 4 + 1] * b[4 + j] + a[i * 4 + 2] * b[8 + j] + (j === 3 ? a[i * 4 + 3] : 0);
  return r;
};
const ID = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0];
const invM = (m) => {
  const [a, b, c, , d, e, f, , g, h, i] = m;
  const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  const r = [(e * i - f * h) / det, (c * h - b * i) / det, (b * f - c * e) / det, 0, (f * g - d * i) / det, (a * i - c * g) / det, (c * d - a * f) / det, 0, (d * h - e * g) / det, (b * g - a * h) / det, (a * e - b * d) / det, 0];
  for (let k = 0; k < 3; k++) r[k * 4 + 3] = -(r[k * 4] * m[3] + r[k * 4 + 1] * m[7] + r[k * 4 + 2] * m[11]);
  return r;
};
const powM = (m, p) => { let r = ID; const b = p < 0 ? invM(m) : m; for (let k = 0; k < Math.abs(p); k++) r = mulM(r, b); return r; };
const ap = (m, p) => [m[0] * p[0] + m[1] * p[1] + m[2] * p[2] + m[3], m[4] * p[0] + m[5] * p[1] + m[6] * p[2] + m[7], m[8] * p[0] + m[9] * p[1] + m[10] * p[2] + m[11]];
const av = (m, v) => [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[4] * v[0] + m[5] * v[1] + m[6] * v[2], m[8] * v[0] + m[9] * v[1] + m[10] * v[2]];
const norm = (a) => mul(a, 1 / len(a));
const key = (m) => m.map((v) => Math.round(v * 1e12) / 1e12).join(',');
const fmt = (v) => (Object.is(v, -0) ? '0' : String(v));
/** Largest singular value of a 3×3 (row-major in a 12-array) by power iteration on mᵀm. */
function sigmaMax(m) {
  let x = [1, 0.7, 0.3];
  for (let k = 0; k < 60; k++) { const y = av(m, x); const z = [m[0] * y[0] + m[4] * y[1] + m[8] * y[2], m[1] * y[0] + m[5] * y[1] + m[9] * y[2], m[2] * y[0] + m[6] * y[1] + m[10] * y[2]]; x = norm(z); }
  return len(av(m, x));
}

/** Periodic uniform cubic interpolation of the unit circle: n poles, pole i (0-based) at angle (i − 1)·h (OCCT's periodic alignment: the value at knot j·h comes from poles j … j+2). */
function circleN(rEff) {
  const h = Math.pow(384 * DEV / Math.max(rEff, 1e-9), 0.25);
  let n = Math.ceil(2 * Math.PI / h);
  n = Math.max(N_MIN, Math.min(N_MAX, Math.ceil(n / 4) * 4));
  return n;
}
function unitCircle(n) {
  const h = 2 * Math.PI / n, k = 6 / (4 + 2 * Math.cos(h));
  const cs = [];
  for (let i = 0; i < n; i++) { const a = (i - 1) * h; cs.push([k * Math.cos(a), k * Math.sin(a)]); }
  return { n, h, cs, err: Math.pow(h, 4) / 384 };
}
/** A 1-D B-spline structure: { deg, periodic, knots [[k, m]], w: weights|null, n } */
const periodicDir = (n) => ({ deg: 3, periodic: true, knots: Array.from({ length: n + 1 }, (_, j) => [j * 2 * Math.PI / n, 1]), n });
const linearDir = (a, b) => ({ deg: 1, periodic: false, knots: [[a, 2], [b, 2]], n: 2 });

// ---------------------------------------------------------------- tokenised geometry records
class Toks {
  constructor(text) { this.t = text.trim().split(/\s+/).filter(Boolean); this.i = 0; }
  n() { const v = this.t[this.i++]; if (v === undefined) throw new Error('short'); return Number(v); }
  s() { return this.t[this.i++]; }
  pt() { return [this.n(), this.n(), this.n()]; }
}
function readCurve(T) {
  const type = T.n();
  switch (type) {
    case 1: return { type: 'line', p: T.pt(), d: T.pt() };
    case 2: return { type: 'circle', p: T.pt(), n: T.pt(), x: T.pt(), y: T.pt(), r: T.n() };
    case 3: return { type: 'ellipse', p: T.pt(), n: T.pt(), x: T.pt(), y: T.pt(), r1: T.n(), r2: T.n() };
    case 4: T.pt(); T.pt(); T.pt(); T.pt(); T.n(); return { type: 'parabola' };
    case 5: T.pt(); T.pt(); T.pt(); T.pt(); T.n(); T.n(); return { type: 'hyperbola' };
    case 6: { const rat = T.n(), deg = T.n(); const poles = [], w = []; for (let i = 0; i <= deg; i++) { poles.push(T.pt()); if (rat) w.push(T.n()); } return { type: 'bezier', deg, poles, w: rat ? w : null }; }
    case 7: {
      const rat = T.n(), per = T.n(), deg = T.n(), np = T.n(), nk = T.n();
      const poles = [], w = [], knots = [];
      for (let i = 0; i < np; i++) { poles.push(T.pt()); if (rat) w.push(T.n()); }
      for (let i = 0; i < nk; i++) knots.push([T.n(), T.n()]);
      return { type: 'bspline', deg, periodic: !!per, poles, w: rat ? w : null, knots };
    }
    case 8: { const u1 = T.n(), u2 = T.n(); return { type: 'trimmed', u1, u2, basis: readCurve(T) }; }
    case 9: T.n(); T.pt(); readCurve(T); return { type: 'offset' };
  }
  throw new Error('curve type ' + type);   // i18n-ignore: internal, caught and reworded below
}
function readSurface(T) {
  const type = T.n();
  const ax = () => ({ p: T.pt(), n: T.pt(), x: T.pt(), y: T.pt() });
  switch (type) {
    case 1: return { type: 'plane', ...ax() };
    case 2: return { type: 'cylinder', ...ax(), r: T.n() };
    case 3: return { type: 'cone', ...ax(), r: T.n(), ang: T.n() };
    case 4: return { type: 'sphere', ...ax(), r: T.n() };
    case 5: return { type: 'torus', ...ax(), r1: T.n(), r2: T.n() };
    case 6: { const d = T.pt(); return { type: 'extrusion', d, basis: readCurve(T) }; }
    case 7: { const p = T.pt(), d = T.pt(); return { type: 'revolution', p, d, basis: readCurve(T) }; }
    case 8: {
      const ur = T.n(), vr = T.n(), ud = T.n(), vd = T.n();
      const poles = [], w = [];
      for (let i = 0; i <= ud; i++) { const row = [], wr = []; for (let j = 0; j <= vd; j++) { row.push(T.pt()); if (ur || vr) wr.push(T.n()); } poles.push(row); w.push(wr); }
      return { type: 'bezsurf', ud, vd, poles, w: ur || vr ? w : null };
    }
    case 9: {
      const ur = T.n(), vr = T.n(), up = T.n(), vp = T.n(), ud = T.n(), vd = T.n(), nu = T.n(), nv = T.n(), nuk = T.n(), nvk = T.n();
      const poles = [], w = [];
      for (let i = 0; i < nu; i++) { const row = [], wr = []; for (let j = 0; j < nv; j++) { row.push(T.pt()); if (ur || vr) wr.push(T.n()); } poles.push(row); w.push(wr); }
      const uk = [], vk = [];
      for (let i = 0; i < nuk; i++) uk.push([T.n(), T.n()]);
      for (let i = 0; i < nvk; i++) vk.push([T.n(), T.n()]);
      return { type: 'bsurf', ur, vr, up: !!up, vp: !!vp, ud, vd, poles, w: ur || vr ? w : null, uk, vk };
    }
    case 10: { const u1 = T.n(), u2 = T.n(), v1 = T.n(), v2 = T.n(); return { type: 'rtrimmed', u1, u2, v1, v2, basis: readSurface(T) }; }
    case 11: T.n(); readSurface(T); return { type: 'offset' };
  }
  throw new Error('surface type ' + type);   // i18n-ignore: internal, caught and reworded below
}
function readList(text, count, fn) {
  const T = new Toks(text);
  const out = [];
  for (let i = 0; i < count; i++) out.push(fn(T));
  return out;
}

// ---------------------------------------------------------------- writing B-spline records
const ptText = (p) => p.map(fmt).join(' ');
function curveRecord(c) {
  // c = { deg, periodic, poles, w, knots }
  const rat = c.w ? 1 : 0;
  const head = `7 ${rat} ${c.periodic ? 1 : 0} ${c.deg} ${c.poles.length} ${c.knots.length}`;
  const ps = c.poles.map((p, i) => ptText(p) + (rat ? ' ' + fmt(c.w[i]) : '')).join('  ');
  return head + ' ' + ps + '\n ' + c.knots.map(([k, m]) => fmt(k) + ' ' + m).join('  ') + '\n';
}
function surfRecord(s) {
  // s = { u: dir, v: dir, poles[i][j], w[i][j]|null }
  const rat = s.w ? 1 : 0;
  const head = `9 ${rat} ${rat} ${s.u.periodic ? 1 : 0} ${s.v.periodic ? 1 : 0} ${s.u.deg} ${s.v.deg} ${s.poles.length} ${s.poles[0].length} ${s.u.knots.length} ${s.v.knots.length}`;
  const lines = [head];
  s.poles.forEach((row, i) => lines.push(row.map((p, j) => ptText(p) + (rat ? ' ' + fmt(s.w[i][j]) : '')).join(' ')));
  lines.push(s.u.knots.map(([k, m]) => fmt(k) + ' ' + m).join(' '));
  lines.push(s.v.knots.map(([k, m]) => fmt(k) + ' ' + m).join(' '));
  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------- the map of one curve / surface in its parameters
/**
 * A curve (local coordinates) under the affine map T (12-array, local → image) as a B-spline in the same parameter.
 * range(dir, origin) → [a, b]: the parameter range a straight direction must cover. → { rec: {deg, periodic, poles, w,
 * knots}, err } (err = the interpolation bound in mm, 0 when exact).
 */
function mapCurve(c, T, range) {
  const s = sigmaMax(T);
  if (c.type === 'line') {
    const d = c.d, [a, b] = range(d, c.p);
    return { rec: { deg: 1, periodic: false, poles: [ap(T, add(c.p, mul(d, a))), ap(T, add(c.p, mul(d, b)))], w: null, knots: [[a, 2], [b, 2]] }, err: 0 };
  }
  if (c.type === 'circle' || c.type === 'ellipse') {
    const r1 = c.type === 'circle' ? c.r : c.r1, r2 = c.type === 'circle' ? c.r : c.r2;
    const U = unitCircle(circleN(Math.max(r1, r2) * s));
    const poles = U.cs.map(([x, y]) => ap(T, add(c.p, add(mul(c.x, r1 * x), mul(c.y, r2 * y)))));
    return { rec: { deg: 3, periodic: true, poles, w: null, knots: periodicDir(U.n).knots }, err: U.err * Math.max(r1, r2) * s };
  }
  if (c.type === 'bezier') return { rec: { deg: c.deg, periodic: false, poles: c.poles.map((p) => ap(T, p)), w: c.w, knots: [[0, c.deg + 1], [1, c.deg + 1]] }, err: 0 };
  if (c.type === 'bspline') return { rec: { deg: c.deg, periodic: c.periodic, poles: c.poles.map((p) => ap(T, p)), w: c.w, knots: c.knots }, err: 0 };
  if (c.type === 'trimmed') return mapCurve(c.basis, T, range);
  throw new Error(`a ${c.type} curve`);   // i18n-ignore: internal, caught and reworded below
}
/** A curve's 1-D structure in local coordinates (for surfaces built from it): { dir, poles (local), w, err(rEff) } */
function curveDir(c, range) {
  if (c.type === 'line') { const [a, b] = range(c.d, c.p); return { dir: linearDir(a, b), poles: [add(c.p, mul(c.d, a)), add(c.p, mul(c.d, b))], w: null, circ: 0 }; }
  if (c.type === 'circle' || c.type === 'ellipse') {
    const r1 = c.type === 'circle' ? c.r : c.r1, r2 = c.type === 'circle' ? c.r : c.r2;
    return { circ: Math.max(r1, r2), make: (n) => { const U = unitCircle(n); return { dir: periodicDir(n), poles: U.cs.map(([x, y]) => add(c.p, add(mul(c.x, r1 * x), mul(c.y, r2 * y)))), w: null, err: U.err * Math.max(r1, r2) }; } };
  }
  if (c.type === 'bezier') return { dir: { deg: c.deg, periodic: false, knots: [[0, c.deg + 1], [1, c.deg + 1]] }, poles: c.poles, w: c.w, circ: 0 };
  if (c.type === 'bspline') return { dir: { deg: c.deg, periodic: c.periodic, knots: c.knots }, poles: c.poles, w: c.w, circ: 0 };
  if (c.type === 'trimmed') return curveDir(c.basis, range);
  throw new Error(`a ${c.type} curve`);   // i18n-ignore: internal, caught and reworded below
}
const resolveDir = (cd, s) => (cd.make ? cd.make(circleN(cd.circ * s)) : { ...cd, err: 0 });

/** A surface under T as a B-spline in the same parameters → { rec | plane, err }. */
function mapSurface(S, T, range) {
  const s = sigmaMax(T);
  if (S.type === 'plane') {
    // the image of a plane is a plane: an orthonormal frame with the same handedness (pcurves on it are recomputed)
    const hand = Math.sign(dot(cross(S.x, S.y), S.n)) || 1;
    const X = norm(av(T, S.x)), Z = norm(cross(av(T, S.x), av(T, S.y)));
    const Y = cross(Z, X);
    return { plane: { p: ap(T, S.p), n: mul(Z, hand), x: X, y: Y }, err: 0 };
  }
  if (S.type === 'rtrimmed') return mapSurface(S.basis, T, range);
  if (S.type === 'bezsurf') {
    const dir = (d) => ({ deg: d, periodic: false, knots: [[0, d + 1], [1, d + 1]] });
    return { rec: { u: dir(S.ud), v: dir(S.vd), poles: S.poles.map((r) => r.map((p) => ap(T, p))), w: S.w }, err: 0 };
  }
  if (S.type === 'bsurf') return { rec: { u: { deg: S.ud, periodic: S.up, knots: S.uk }, v: { deg: S.vd, periodic: S.vp, knots: S.vk }, poles: S.poles.map((r) => r.map((p) => ap(T, p))), w: S.w }, err: 0 };
  const tensor = (udir, vdir, f, w = null) => ({ u: udir, v: vdir, poles: Array.from({ length: udir.n }, (_, i) => Array.from({ length: vdir.n }, (__, j) => ap(T, f(i, j)))), w });
  const { p: O, x: X, y: Y, n: Z } = S;
  const ring = (c) => add(mul(X, c[0]), mul(Y, c[1]));
  if (S.type === 'cylinder' || S.type === 'cone') {
    // O + (R + v·sin a)(cos u X + sin u Y) + v·cos a Z: periodic in u, straight (degree 1, exact) in v
    const sa = S.type === 'cone' ? Math.sin(S.ang) : 0, ca = S.type === 'cone' ? Math.cos(S.ang) : 1;
    const [a, b] = range(mul(Z, ca), O);
    const rmax = Math.max(Math.abs(S.r + a * sa), Math.abs(S.r + b * sa));
    const U = unitCircle(circleN(rmax * s));
    const vs = [a, b];
    const rec = tensor({ ...periodicDir(U.n), n: U.n }, { ...linearDir(a, b), n: 2 }, (i, j) => add(O, add(mul(ring(U.cs[i]), S.r + vs[j] * sa), mul(Z, vs[j] * ca))));
    return { rec, err: U.err * rmax * s };
  }
  if (S.type === 'sphere' || S.type === 'torus') {
    // both directions periodic: (cos v, sin v) interpolated over a full turn (the face only uses v in [−π/2, π/2] on a sphere)
    const R1 = S.type === 'sphere' ? 0 : S.r1, R2 = S.type === 'sphere' ? S.r : S.r2;
    const U = unitCircle(circleN((R1 + R2) * s)), W = unitCircle(circleN(R2 * s));
    const rec = tensor({ ...periodicDir(U.n), n: U.n }, { ...periodicDir(W.n), n: W.n }, (i, j) => add(O, add(mul(ring(U.cs[i]), R1 + R2 * W.cs[j][0]), mul(Z, R2 * W.cs[j][1]))));
    return { rec, err: (U.err * (R1 + R2) + W.err * R2) * s * 1.5 };
  }
  if (S.type === 'extrusion') {
    // C(u) + v·D
    const cd = resolveDir(curveDir(S.basis, range), s);
    const [a, b] = range(S.d, cd.poles[0], { spread: Math.max(...cd.poles.map((q) => len(sub(q, cd.poles[0])))) });
    const vs = [a, b];
    const rec = tensor({ ...cd.dir, n: cd.poles.length }, { ...linearDir(a, b), n: 2 }, (i, j) => add(cd.poles[i], mul(S.d, vs[j])), cd.w ? cd.poles.map((_, i) => [cd.w[i], cd.w[i]]) : null);
    return { rec, err: (cd.err || 0) * s };
  }
  if (S.type === 'revolution') {
    // P + Rot(D, u)(C(v) − P): each pole of the basis curve swept round a periodic cubic circle
    const D = norm(S.d), P = S.p;
    const cd = resolveDir(curveDir(S.basis, (d, o) => range(d, o, { revolve: P })), s);
    const rmax = Math.max(1e-9, ...cd.poles.map((q) => len(sub(sub(q, P), mul(D, dot(sub(q, P), D))))));
    const U = unitCircle(circleN(rmax * s));
    const rot = (q, c, sn) => { const w = sub(q, P), along = mul(D, dot(w, D)), rad = sub(w, along), perp = cross(D, rad); return add(P, add(along, add(mul(rad, c), mul(perp, sn)))); };
    const rec = tensor({ ...periodicDir(U.n), n: U.n }, { ...cd.dir, n: cd.poles.length }, (i, j) => rot(cd.poles[j], U.cs[i][0], U.cs[i][1]), cd.w ? Array.from({ length: U.n }, () => [...cd.w]) : null);
    return { rec, err: (U.err * rmax + (cd.err || 0)) * s };
  }
  throw new Error(`a ${S.type} surface`);   // i18n-ignore: internal, caught and reworded below
}

// ---------------------------------------------------------------- the shape text
function sections(text) {
  const lines = text.split('\n');
  const find = (name) => lines.findIndex((l) => l.startsWith(name + ' '));
  const at = { loc: find('Locations'), c2: find('Curve2ds'), c3: find('Curves'), p3: find('Polygon3D'), pt: find('PolygonOnTriangulations'), s: find('Surfaces'), tri: find('Triangulations'), sh: find('TShapes') };
  if (Object.values(at).some((v) => v < 0)) throw new Error(tr('model.brep_gtrsf.unknown_section'));
  return { lines, at, count: (k) => Number(lines[at[k]].split(/\s+/)[1]) };
}

export function affineShape(oc, shape, A, { bbox } = {}) {
  const G = [A.m[0][0], A.m[0][1], A.m[0][2], A.t[0], A.m[1][0], A.m[1][1], A.m[1][2], A.t[1], A.m[2][0], A.m[2][1], A.m[2][2], A.t[2]];
  const det = G[0] * (G[5] * G[10] - G[6] * G[9]) - G[1] * (G[4] * G[10] - G[6] * G[8]) + G[2] * (G[4] * G[9] - G[5] * G[8]);
  if (!(det > 0)) throw new Error(tr('model.brep_gtrsf.handedness'));
  const text = oc.BRepToolsWrapper.Write(shape);
  const { lines, at, count } = sections(text);
  const header = lines.slice(0, at.loc).join('\n');
  // locations
  const locs = [ID];
  {
    const T = new Toks(lines.slice(at.loc + 1, at.c2).join('\n'));
    for (let k = 0; k < count('loc'); k++) {
      const typ = T.n();
      if (typ === 1) { const m = []; for (let i = 0; i < 12; i++) m.push(T.n()); locs.push(m); }
      else { let L = ID; let l1 = T.n(); while (l1 !== 0) { const p = T.n(); L = mulM(powM(locs[l1], p), L); l1 = T.n(); } locs.push(L); }
    }
  }
  const c2Text = lines.slice(at.c2, at.c3).join('\n');
  const curves = [null, ...readList(lines.slice(at.c3 + 1, at.p3).join('\n'), count('c3'), readCurve)];
  const surfs = [null, ...readList(lines.slice(at.s + 1, at.tri).join('\n'), count('s'), readSurface)];
  // TShapes: line based
  const nodes = [];
  {
    const L = lines.slice(at.sh + 1);
    let i = 0;
    const N = count('sh');
    while (nodes.length < N) {
      while (i < L.length && L[i].trim() === '') i++;
      const type = L[i++].trim();
      const geo = [];
      while (L[i].trim() !== '') geo.push(L[i++]);
      i++;   // blank
      const flags = L[i++].trim();
      const kids = [];
      let done = false;
      while (!done) {
        for (const t of L[i++].trim().split(/\s+/).filter(Boolean)) { if (t === '*') { done = true; break; } kids.push(t); }
      }
      const children = [];
      for (let k = 0; k < kids.length; k += 2) children.push({ o: kids[k][0], idx: Number(kids[k].slice(1)), loc: Number(kids[k + 1]) });
      nodes.push({ type, geo, flags, children });
    }
    // the root reference after the shapes
    const rest = L.slice(i).join(' ').trim().split(/\s+/);
    nodes.root = { o: rest[0][0], idx: Number(rest[0].slice(1)), loc: Number(rest[1] || 0) };
  }
  const N = nodes.length;
  const nodeAt = (idx) => nodes[N - idx];
  // world box → parameter ranges of straight directions
  const diag = len(sub(bbox.max, bbox.min)) || 1;

  // new geometry, memoised by (index, total placement)
  const newCurves = [], newSurfs = [], curveMemo = new Map(), surfMemo = new Map(), planeSurf = new Set();
  let maxErr = 0, approximated = 0;
  const mid = mul(add(bbox.min, bbox.max), 0.5);
  // the parameter range a straight direction o + t·d must cover: every point of the solid is within diag/2 of the box centre
  const rangeFor = (M) => {
    const centre = ap(invM(M), mid);
    return (d, o, extra) => {
      const L = len(d), t0 = dot(sub(centre, o), d) / (L * L);
      let D = diag;
      if (extra?.revolve) D = diag + 2 * len(sub(centre, extra.revolve));
      if (extra?.spread !== undefined) D = 2 * diag + extra.spread;
      D /= L;
      return [t0 - 1.02 * D - 1, t0 + 1.02 * D + 1];
    };
  };
  const curveIdx = (ci, M) => {
    const k = ci + '|' + key(M);
    if (curveMemo.has(k)) return curveMemo.get(k);
    const T = mulM(G, M);
    let r;
    try { r = mapCurve(curves[ci], T, rangeFor(M)); } catch (e) { const ty = /^a (\S+) curve$/.exec(e.message); throw new Error(ty ? tr('model.brep_gtrsf.curve_type', { type: ty[1] }) : tr('model.brep_gtrsf.curve')); }
    newCurves.push(curveRecord(r.rec));
    if (r.err) { maxErr = Math.max(maxErr, r.err); approximated++; }
    curveMemo.set(k, newCurves.length);
    return newCurves.length;
  };
  const surfIdx = (si, M) => {
    const k = si + '|' + key(M);
    if (surfMemo.has(k)) return surfMemo.get(k);
    const T = mulM(G, M);
    let r;
    try { r = mapSurface(surfs[si], T, rangeFor(M)); } catch (e) { const ty = /^a (\S+) surface$/.exec(e.message); throw new Error(ty ? tr('model.brep_gtrsf.surface_type', { type: ty[1] }) : tr('model.brep_gtrsf.surface')); }
    if (r.plane) { newSurfs.push(`1 ${ptText(r.plane.p)} ${ptText(r.plane.n)} ${ptText(r.plane.x)} ${ptText(r.plane.y)}\n`); planeSurf.add(newSurfs.length); }
    else newSurfs.push(surfRecord(r.rec));
    if (r.err) { maxErr = Math.max(maxErr, r.err); approximated++; }
    surfMemo.set(k, newSurfs.length);
    return newSurfs.length;
  };

  // flatten: every (TShape, placement) once, children first
  const out = [], memo = new Map();
  const tolUp = () => fmt(Math.max(1e-7, 3 * maxErr + 1e-9));
  const visit = (idx, M) => {
    const k = idx + '|' + key(M);
    if (memo.has(k)) return memo.get(k);
    const nd = nodeAt(idx);
    const kids = nd.children.map((c) => ({ o: c.o, n: visit(c.idx, mulM(M, locs[c.loc])) }));
    const geo = [];
    const L = (l) => mulM(M, locs[l]);
    if (nd.type === 'Ve') {
      const tol = Number(nd.geo[0]);
      const p = nd.geo[1].trim().split(/\s+/).map(Number);
      geo.push(fmt(tol), ptText(ap(G, ap(M, p))));
      for (const ln of nd.geo.slice(2)) {
        const t = ln.trim().split(/\s+/);
        if (t[0] === '0') continue;
        if (t[0] === '1') geo.push(`1 ${t[1]} ${curveIdx(+t[2], L(+t[3]))} 0`);
        else if (t[0] === '2') { const s = surfIdx(+t[3], L(+t[4])); if (!planeSurf.has(s)) geo.push(`2 ${t[1]} ${t[2]} ${s} 0`); }
        else if (t[0] === '3') { const s = surfIdx(+t[3], L(+t[4])); if (!planeSurf.has(s)) geo.push(`3 ${t[1]} ${t[2]} ${s} 0`); }
      }
      geo.push('0 0');
      geo.tolIndex = 0;
    } else if (nd.type === 'Ed') {
      const h = nd.geo[0].trim().split(/\s+/);
      const reps = [];
      for (const ln of nd.geo.slice(1)) {
        const t = ln.trim().split(/\s+/);
        if (t[0] === '0' && t.length === 1) continue;
        if (t[0] === '1') reps.push(`1  ${curveIdx(+t[1], L(+t[2]))} 0 ${t[3]} ${t[4]}`);
        else if (t[0] === '2') { const s = surfIdx(+t[2], L(+t[3])); if (!planeSurf.has(s)) reps.push(`2  ${t[1]} ${s} 0 ${t[4]} ${t[5]}`); }
        else if (t[0] === '3') { const m = /^(\d+)(\D.*)$/.exec(t[2]); const c2b = m ? m[1] : t[2], cont = m ? m[2] : ''; const s = surfIdx(+t[3], L(+t[4])); if (!planeSurf.has(s)) reps.push(`3  ${t[1]} ${c2b}${cont} ${s} 0 ${t[5]} ${t[6]}`); }
        // 4 (regularity), 5–7 (polygons): dropped
      }
      geo.push(` ${h[0]} ${h[1]} ${h[2]} ${h[3]}`, ...reps, '0');
      geo.edgeTol = true;
    } else if (nd.type === 'Fa') {
      const t = nd.geo[0].trim().split(/\s+/);
      geo.push(`${t[0]}  ${t[1]} ${surfIdx(+t[2], L(+t[3]))} 0`);
      geo.faceTol = true;
    }
    out.push({ type: nd.type, geo, flags: nd.flags, kids });
    memo.set(k, out.length);   // position (1-based) in writing order
    return out.length;
  };
  const rootPos = visit(nodes.root.idx, locs[nodes.root.loc]);
  // tolerances: raised to cover the interpolation (vertices, edges, faces)
  const tl = tolUp();
  for (const o of out) {
    if (o.type === 'Ve') o.geo[0] = fmt(Math.max(Number(o.geo[0]), Number(tl)));
    if (o.type === 'Ed') { const h = o.geo[0].trim().split(/\s+/); h[0] = fmt(Math.max(Number(h[0]), Number(tl))); o.geo[0] = ' ' + h.join(' '); }
    if (o.type === 'Fa') { const t = o.geo[0].split(/\s+/).filter(Boolean); t[1] = fmt(Math.max(Number(t[1]), Number(tl))); o.geo[0] = `${t[0]}  ${t[1]} ${t[2]} ${t[3]}`; }
  }
  const M2 = out.length;
  const idxOf = (pos) => M2 - pos + 1;
  const sh = [];
  for (const o of out) {
    sh.push(o.type, ...o.geo, '', o.flags, (o.kids.length ? o.kids.map((c) => `${c.o}${idxOf(c.n)} 0`).join(' ') + ' ' : '') + '*');
  }
  // i18n-ignore: OpenCascade BRep text format
  const text2 = [header, 'Locations 0', c2Text, `Curves ${newCurves.length}`, newCurves.join(''), 'Polygon3D 0', 'PolygonOnTriangulations 0', `Surfaces ${newSurfs.length}`, newSurfs.join(''), 'Triangulations 0', '', `TShapes ${M2}`, sh.join('\n'), '', `${nodes.root.o}${idxOf(rootPos)} 0`, ''].join('\n');
  let res;
  try { res = oc.BRepToolsWrapper.Read(text2); } catch (e) { throw new Error(tr('model.brep_gtrsf.read_back')); }
  if (!res || res.IsNull()) throw new Error(tr('model.brep_gtrsf.read_back'));
  return { shape: res, deviation: maxErr, approximated, text: text2 };
}
