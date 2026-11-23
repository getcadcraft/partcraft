/* SPDX-License-Identifier: Apache-2.0 */
/**
 * surfaces.js — exact B-rep surfaces in plain JS, for the tet mesher (DOM-free; the compute worker has no OpenCascade).
 * brep-surf.js writes each non-planar, non-cylindrical face's surface into regen.faces[i].surf; this module evaluates
 * it and finds the closest point on it.
 *
 * Records (mm, unit directions):
 *   { type 'sphere', c, r }
 *   { type 'cone', o (a point on the axis), d (axis), r0 (radius at o), k (tan of the half-angle: radius o + t·d = r0 + k·t) }
 *   { type 'torus', c, d, R (axis to tube centre), r (tube) }
 *   { type 'revolution', o, d, curve }      the profile curve turned about the axis (o, d)
 *   { type 'extrusion', d, curve }          the curve swept along d (OCCT: P(u, v) = C(u) + v·d)
 *   { type 'bspline', ud, vd, nu, nv, uk, vk (full knot vectors), P (3·nu·nv, row i·nv + j), W (nu·nv | null) }
 *   curve = { kind 'line', o, d } | { kind 'circle', c, x, y, r } | { kind 'ellipse', c, x, y, a, b } |
 *           { kind 'nurbs', deg, k (knot vector), P (3n), W (n | null) }   (parameters as OCCT's)
 *   every record: range [u0, u1, v0, v1] — the face's trimmed parameter box (BRepTools::UVBounds).
 * Closest point: analytic for the sphere, cone and torus (the face's trim is not applied: the mesher only projects points
 * already next to the face); revolution → a 1-D Newton on the profile in the point's meridian plane; extrusion → a 1-D
 * Newton on the curve in the plane across d; B-spline → a 2-D Newton (full Hessian, Gauss–Newton when it is not positive
 * definite, step halving on the distance), started from the nearest of a grid of samples over the trimmed box and kept
 * inside it. Rational curves and surfaces by the quotient rule on homogeneous derivatives (Piegl & Tiller, The NURBS
 * Book, A2.3, A3.6, A4.4).
 */

import { cross3 as cross, dot3 as dot, len3 as len, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
const perp = (d) => { const a = Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0], c = cross(d, a), l = len(c); return [c[0] / l, c[1] / l, c[2] / l]; };

export const EXACT_TYPES = ['sphere', 'cone', 'torus', 'revolution', 'extrusion', 'bspline'];

// ---------------------------------------------------------------------------------------- B-spline basis

/** Knot span index of u (n = poles − 1, degree p, knot vector U). */
export function findSpan(n, p, u, U) {
  if (u >= U[n + 1]) { let i = n; while (i > p && U[i] >= U[n + 1]) i--; return i; }
  if (u <= U[p]) { let i = p; while (i < n && U[i + 1] <= U[p]) i++; return i; }
  let lo = p, hi = n + 1, mid = (lo + hi) >> 1;
  while (u < U[mid] || u >= U[mid + 1]) { if (u < U[mid]) hi = mid; else lo = mid; mid = (lo + hi) >> 1; }
  return mid;
}
/** Basis functions and their derivatives up to nd at u in span i → ders[k][j] (A2.3). */
export function dersBasis(i, u, p, nd, U) {
  const ndu = Array.from({ length: p + 1 }, () => new Float64Array(p + 1)), left = new Float64Array(p + 1), right = new Float64Array(p + 1);
  ndu[0][0] = 1;
  for (let j = 1; j <= p; j++) {
    left[j] = u - U[i + 1 - j]; right[j] = U[i + j] - u;
    let saved = 0;
    for (let r = 0; r < j; r++) { ndu[j][r] = right[r + 1] + left[j - r]; const t = ndu[r][j - 1] / ndu[j][r]; ndu[r][j] = saved + right[r + 1] * t; saved = left[j - r] * t; }
    ndu[j][j] = saved;
  }
  const ders = Array.from({ length: nd + 1 }, () => new Float64Array(p + 1));
  for (let j = 0; j <= p; j++) ders[0][j] = ndu[j][p];
  const a = [new Float64Array(p + 1), new Float64Array(p + 1)];
  for (let r = 0; r <= p; r++) {
    let s1 = 0, s2 = 1; a[0][0] = 1;
    for (let k = 1; k <= nd; k++) {
      let d = 0; const rk = r - k, pk = p - k;
      if (r >= k) { a[s2][0] = a[s1][0] / ndu[pk + 1][rk]; d = a[s2][0] * ndu[rk][pk]; }
      const j1 = rk >= -1 ? 1 : -rk, j2 = r - 1 <= pk ? k - 1 : p - r;
      for (let j = j1; j <= j2; j++) { a[s2][j] = (a[s1][j] - a[s1][j - 1]) / ndu[pk + 1][rk + j]; d += a[s2][j] * ndu[rk + j][pk]; }
      if (r <= pk) { a[s2][k] = -a[s1][k - 1] / ndu[pk + 1][r]; d += a[s2][k] * ndu[r][pk]; }
      ders[k][r] = d; const t = s1; s1 = s2; s2 = t;
    }
  }
  let r = p;
  for (let k = 1; k <= nd; k++) { for (let j = 0; j <= p; j++) ders[k][j] *= r; r *= p - k; }
  return ders;
}

/** A NURBS curve's point and first two derivatives at t → [C, C', C''] (t clamped to the knot range). */
export function nurbsCurveD2(c, t) {
  const p = c.deg, n = c.P.length / 3 - 1, U = c.k;
  t = Math.max(U[p], Math.min(U[n + 1], t));
  const span = findSpan(n, p, t, U), N = dersBasis(span, t, p, Math.min(2, p), U);
  const A = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  for (let k = 0; k <= Math.min(2, p); k++) for (let j = 0; j <= p; j++) {
    const i = span - p + j, w = c.W ? c.W[i] : 1, b = N[k][j] * w;
    A[k][0] += b * c.P[3 * i]; A[k][1] += b * c.P[3 * i + 1]; A[k][2] += b * c.P[3 * i + 2]; A[k][3] += b;
  }
  // rational: C = A/w, C' = (A' − w'C)/w, C'' = (A'' − 2w'C' − w''C)/w
  const w = A[0][3], C = [A[0][0] / w, A[0][1] / w, A[0][2] / w];
  const C1 = [0, 1, 2].map((a) => (A[1][a] - A[1][3] * C[a]) / w);
  const C2 = [0, 1, 2].map((a) => (A[2][a] - 2 * A[1][3] * C1[a] - A[2][3] * C[a]) / w);
  return [C, C1, C2];
}

/** A curve record's point and derivatives at t → [C, C', C'']. */
export function curveD2(c, t) {
  if (c.kind === 'nurbs') return nurbsCurveD2(c, t);
  if (c.kind === 'line') return [[c.o[0] + t * c.d[0], c.o[1] + t * c.d[1], c.o[2] + t * c.d[2]], c.d.slice(), [0, 0, 0]];
  const a = c.kind === 'circle' ? c.r : c.a, b = c.kind === 'circle' ? c.r : c.b, cs = Math.cos(t), sn = Math.sin(t);
  const P = [0, 1, 2].map((i) => c.c[i] + a * cs * c.x[i] + b * sn * c.y[i]);
  return [P, [0, 1, 2].map((i) => -a * sn * c.x[i] + b * cs * c.y[i]), [0, 1, 2].map((i) => -a * cs * c.x[i] - b * sn * c.y[i])];
}

/** A B-spline surface's point and derivatives to order 2 at (u, v) → { P, Su, Sv, Suu, Suv, Svv } (rational by A4.4). */
export function bsplineD2(s, u, v) {
  const p = s.ud, q = s.vd, nu = s.nu - 1, nv = s.nv - 1;
  u = Math.max(s.uk[p], Math.min(s.uk[nu + 1], u)); v = Math.max(s.vk[q], Math.min(s.vk[nv + 1], v));
  const su = findSpan(nu, p, u, s.uk), sv = findSpan(nv, q, v, s.vk);
  const Nu = dersBasis(su, u, p, Math.min(2, p), s.uk), Nv = dersBasis(sv, v, q, Math.min(2, q), s.vk);
  // homogeneous derivatives A[k][l] (x w, y w, z w, w) for k + l ≤ 2
  const A = [[null, null, null], [null, null], [null]];
  for (let k = 0; k <= 2; k++) for (let l = 0; k + l <= 2; l++) {
    const out = [0, 0, 0, 0];
    if (k <= Math.min(2, p) && l <= Math.min(2, q)) for (let a = 0; a <= p; a++) {
      const i = su - p + a, ba = Nu[k][a]; if (!ba) continue;
      for (let b = 0; b <= q; b++) {
        const j = sv - q + b, idx = i * s.nv + j, w = s.W ? s.W[idx] : 1, f = ba * Nv[l][b] * w;
        out[0] += f * s.P[3 * idx]; out[1] += f * s.P[3 * idx + 1]; out[2] += f * s.P[3 * idx + 2]; out[3] += f;
      }
    }
    A[k][l] = out;
  }
  const w = A[0][0][3], S = [[null, null, null], [null, null], [null]];
  const at = (k, l, a) => A[k][l][a], W = (k, l) => A[k][l][3];
  for (let k = 0; k <= 2; k++) for (let l = 0; k + l <= 2; l++) {
    const v3 = [0, 1, 2].map((a) => {
      let x = at(k, l, a);
      for (let j = 1; j <= l; j++) x -= BIN[l][j] * W(0, j) * S[k][l - j][a];
      for (let i = 1; i <= k; i++) { x -= BIN[k][i] * W(i, 0) * S[k - i][l][a]; let t = 0; for (let j = 1; j <= l; j++) t += BIN[l][j] * W(i, j) * S[k - i][l - j][a]; x -= BIN[k][i] * t; }
      return x / w;
    });
    S[k][l] = v3;
  }
  return { P: S[0][0], Su: S[1][0], Sv: S[0][1], Suu: S[2][0], Suv: S[1][1], Svv: S[0][2] };
}
const BIN = [[1], [1, 1], [1, 2, 1]];

// ---------------------------------------------------------------------------------------- closest points

const DONE = new WeakMap();   // record → projector

/** The closest point of surface record s to p → { p:[x,y,z], n:[unit normal, unoriented], d (distance), uv? }. */
export function closestOnSurface(s, p) {
  let f = DONE.get(s);
  if (!f) { f = makeProjector(s); DONE.set(s, f); }
  return f(p);
}
/** Distance from p to the surface. */
export const surfaceDistance = (s, p) => closestOnSurface(s, p).d;

/**
 * The smallest radius of curvature near p (for the mesh size field): exact for the sphere (r), torus (r) and cone
 * (ρ/cos α); otherwise from how fast the exact normal turns, |Δn|/ε over a step ε = `step` along three tangent directions
 * 60° apart (at least 3/4 of the largest principal curvature, never more than it plus the twist). Infinity when flat.
 */
export function curvatureRadius(s, p, step) {
  if (s.type === 'sphere') return s.r;
  if (s.type === 'torus') return s.r;
  const c = closestOnSurface(s, p);
  if (s.type === 'cone') { const q = sub(c.p, s.o), t = dot(q, s.d); return (s.r0 + s.k * t) * Math.hypot(1, s.k); }
  const t1 = perp(c.n), t2 = cross(c.n, t1);
  let k = 0;
  for (const a of [0, Math.PI / 3, 2 * Math.PI / 3]) {
    const dir = [0, 1, 2].map((i) => Math.cos(a) * t1[i] + Math.sin(a) * t2[i]), q = closestOnSurface(s, [0, 1, 2].map((i) => c.p[i] + step * dir[i]));
    const moved = len(sub(q.p, c.p));
    if (moved < 0.2 * step) continue;   // the step left the face's parameter box
    const sg = dot(q.n, c.n) < 0 ? -1 : 1;
    k = Math.max(k, len(sub(q.n.map((x) => sg * x), c.n)) / moved);
  }
  return k > 0 ? 1 / k : Infinity;
}

function makeProjector(s) {
  if (s.type === 'sphere') return (p) => {
    const q = sub(p, s.c), l = len(q), n = l > 1e-300 ? [q[0] / l, q[1] / l, q[2] / l] : [1, 0, 0];
    return { p: [s.c[0] + s.r * n[0], s.c[1] + s.r * n[1], s.c[2] + s.r * n[2]], n, d: Math.abs(l - s.r) };
  };
  if (s.type === 'torus') return (p) => {
    const q = sub(p, s.c), t = dot(q, s.d), w = [q[0] - t * s.d[0], q[1] - t * s.d[1], q[2] - t * s.d[2]], wl = len(w), e = wl > 1e-300 ? w.map((x) => x / wl) : perp(s.d);
    const m = [s.c[0] + s.R * e[0], s.c[1] + s.R * e[1], s.c[2] + s.R * e[2]], g = sub(p, m), gl = len(g), n = gl > 1e-300 ? g.map((x) => x / gl) : e;
    return { p: [m[0] + s.r * n[0], m[1] + s.r * n[1], m[2] + s.r * n[2]], n, d: Math.abs(gl - s.r) };
  };
  if (s.type === 'cone') return (p) => {
    const q = sub(p, s.o), t = dot(q, s.d), w = [q[0] - t * s.d[0], q[1] - t * s.d[1], q[2] - t * s.d[2]], rho = len(w), e = rho > 1e-300 ? w.map((x) => x / rho) : perp(s.d);
    // the generator in the meridian plane: (ρ, t) = (r0 + k τ, τ); closest τ, kept on the nappe (ρ ≥ 0)
    let tau = ((rho - s.r0) * s.k + t) / (1 + s.k * s.k);
    if (s.r0 + s.k * tau < 0) tau = -s.r0 / s.k;
    const rr = s.r0 + s.k * tau, P = [0, 1, 2].map((a) => s.o[a] + tau * s.d[a] + rr * e[a]);
    const nl = Math.hypot(1, s.k), n = [0, 1, 2].map((a) => (e[a] - s.k * s.d[a]) / nl);
    return { p: P, n, d: len(sub(p, P)) };
  };
  if (s.type === 'revolution') return revolutionProjector(s);
  if (s.type === 'extrusion') return extrusionProjector(s);
  if (s.type === 'bspline') return bsplineProjector(s);
  throw new Error('internal: unknown surface ' + s.type);   // i18n-ignore: internal error
}

/** 1-D Newton minimiser of f on [a, b] from samples: fd(t) → [f, f', f'']; → t. */
function minimise1D(fd, a, b, nSamples) {
  // Newton from the best two samples (a closed curve's seam ties its two ends), the lower result kept
  let b1 = a, f1 = Infinity, b2 = a, f2 = Infinity;
  for (let i = 0; i <= nSamples; i++) { const t = a + (b - a) * i / nSamples, f = fd(t)[0]; if (f < f1) { b2 = b1; f2 = f1; b1 = t; f1 = f; } else if (f < f2) { b2 = t; f2 = f; } }
  const t1 = newton1D(fd, a, b, b1, (b - a) / nSamples), t2 = newton1D(fd, a, b, b2, (b - a) / nSamples);
  return fd(t2)[0] < fd(t1)[0] ? t2 : t1;
}
function newton1D(fd, a, b, t, step) {
  for (let it = 0; it < 60; it++) {
    const [f, g, h] = fd(t);
    let dt = h > 0 ? -g / h : -Math.sign(g) * step;
    if (Math.abs(dt) > step) dt = Math.sign(dt) * step;   // trust region: one sample spacing
    let tn = Math.max(a, Math.min(b, t + dt)), fn = fd(tn)[0], k = 0;
    // near the minimum the distance is flat to rounding (a √ε position error): a small Newton step is taken on the
    // gradient alone, so the foot point converges to full precision
    const small = h > 0 && Math.abs(dt) < 1e-6 * step;
    while (!small && fn > f && k++ < 40) { dt /= 2; tn = Math.max(a, Math.min(b, t + dt)); fn = fd(tn)[0]; }
    if (!small && fn > f) break;
    const moved = Math.abs(tn - t); t = tn;
    if (moved <= 1e-15 * (Math.abs(b - a) + Math.abs(t))) break;
  }
  return t;
}
const curveSamples = (s) => (s.curve.kind === 'nurbs' ? Math.min(400, Math.max(16, 4 * (s.curve.P.length / 3))) : 32);

function revolutionProjector(s) {
  const [, , v0, v1] = s.range, ns = curveSamples(s), o = s.o, d = s.d;
  return (p) => {
    const q = sub(p, o), tp = dot(q, d), wp = [q[0] - tp * d[0], q[1] - tp * d[1], q[2] - tp * d[2]], rp = len(wp), e = rp > 1e-300 ? wp.map((x) => x / rp) : perp(d);
    // in the meridian plane: minimise ½((ρ(s) − ρp)² + (t(s) − tp)²) over the profile parameter
    const fd = (v) => {
      const [C, C1, C2] = curveD2(s.curve, v), c = sub(C, o), t = dot(c, d), t1 = dot(C1, d), t2 = dot(C2, d);
      const w = [c[0] - t * d[0], c[1] - t * d[1], c[2] - t * d[2]], w1 = [C1[0] - t1 * d[0], C1[1] - t1 * d[1], C1[2] - t1 * d[2]], w2 = [C2[0] - t2 * d[0], C2[1] - t2 * d[1], C2[2] - t2 * d[2]];
      const r = Math.max(len(w), 1e-300), r1 = dot(w, w1) / r, r2 = (dot(w1, w1) + dot(w, w2)) / r - dot(w, w1) ** 2 / r ** 3;
      return [0.5 * ((r - rp) ** 2 + (t - tp) ** 2), (r - rp) * r1 + (t - tp) * t1, r1 * r1 + (r - rp) * r2 + t1 * t1 + (t - tp) * t2];
    };
    const v = minimise1D(fd, v0, v1, ns), [C, C1] = curveD2(s.curve, v), c = sub(C, o), t = dot(c, d), w = [c[0] - t * d[0], c[1] - t * d[1], c[2] - t * d[2]], r = len(w);
    const P = [0, 1, 2].map((a) => o[a] + t * d[a] + r * e[a]);
    // normal: the profile tangent turned in the meridian plane (ρ', t') → (t', −ρ')
    const t1 = dot(C1, d), r1 = r > 0 ? dot(w, [C1[0] - t1 * d[0], C1[1] - t1 * d[1], C1[2] - t1 * d[2]]) / r : 0, nl = Math.hypot(t1, r1) || 1;
    return { p: P, n: [0, 1, 2].map((a) => (t1 * e[a] - r1 * d[a]) / nl), d: len(sub(p, P)), uv: [Math.atan2(dot(e, cross(d, perp(d))), dot(e, perp(d))), v] };
  };
}

function extrusionProjector(s) {
  const [u0, u1] = s.range, ns = curveSamples(s), d = s.d;
  const across = (x) => { const t = dot(x, d); return [x[0] - t * d[0], x[1] - t * d[1], x[2] - t * d[2]]; };
  return (p) => {
    const fd = (u) => {
      const [C, C1, C2] = curveD2(s.curve, u), w = across(sub(p, C)), w1 = across(C1).map((x) => -x), w2 = across(C2).map((x) => -x);
      return [0.5 * dot(w, w), dot(w, w1), dot(w1, w1) + dot(w, w2)];
    };
    const u = minimise1D(fd, u0, u1, ns), [C, C1] = curveD2(s.curve, u), v = dot(sub(p, C), d), P = [0, 1, 2].map((a) => C[a] + v * d[a]);
    const n = cross(C1, d), nl = len(n) || 1;
    return { p: P, n: n.map((x) => x / nl), d: len(sub(p, P)), uv: [u, v] };
  };
}

function bsplineProjector(s) {
  const [u0, u1, v0, v1] = s.range;
  const spans = (U, deg, a, b) => { let c = 0; for (let i = 1; i < U.length; i++) if (U[i] > U[i - 1] && U[i] > a && U[i - 1] < b) c++; return Math.max(1, c) * (deg + 1); };
  const mu = Math.min(48, Math.max(8, 2 * spans(s.uk, s.ud, u0, u1))), mv = Math.min(48, Math.max(8, 2 * spans(s.vk, s.vd, v0, v1)));
  const G = new Float64Array(3 * (mu + 1) * (mv + 1));
  for (let i = 0; i <= mu; i++) for (let j = 0; j <= mv; j++) { const P = bsplineD2(s, u0 + (u1 - u0) * i / mu, v0 + (v1 - v0) * j / mv).P, k = 3 * (i * (mv + 1) + j); G[k] = P[0]; G[k + 1] = P[1]; G[k + 2] = P[2]; }
  let size = 0; for (let k = 3; k < G.length; k += 3) size = Math.max(size, Math.abs(G[k] - G[0]), Math.abs(G[k + 1] - G[1]), Math.abs(G[k + 2] - G[2]));
  const du = (u1 - u0) / mu, dv = (v1 - v0) / mv;
  // a direction whose two ends meet (a closed surface's seam): steps wrap around it instead of stopping there
  const meets = (f) => [0.1, 0.5, 0.9].every((t) => { const a = f(0, t), b = f(1, t); return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) <= 1e-10 * (size || 1); });
  const uClosed = meets((e, t) => bsplineD2(s, e ? u1 : u0, v0 + t * (v1 - v0)).P), vClosed = meets((e, t) => bsplineD2(s, u0 + t * (u1 - u0), e ? v1 : v0).P);
  const put = (x, a, b, closed) => (closed ? a + ((((x - a) % (b - a)) + (b - a)) % (b - a)) : Math.max(a, Math.min(b, x)));
  const newton = (p, u, v) => {
    let D = bsplineD2(s, u, v), r = sub(D.P, p), f = dot(r, r);
    for (let it = 0; it < 80; it++) {
      const g0 = dot(D.Su, r), g1 = dot(D.Sv, r);
      let a = dot(D.Su, D.Su) + dot(D.Suu, r), b = dot(D.Su, D.Sv) + dot(D.Suv, r), c = dot(D.Sv, D.Sv) + dot(D.Svv, r);
      let det = a * c - b * b;
      if (!(a > 0 && det > 1e-300 * a * c)) { a = dot(D.Su, D.Su); b = dot(D.Su, D.Sv); c = dot(D.Sv, D.Sv); det = a * c - b * b; }   // Gauss–Newton
      let su = 0, sv = 0;
      if (det > 0) { su = -(c * g0 - b * g1) / det; sv = -(a * g1 - b * g0) / det; } else { su = -g0 / (a || 1); sv = -g1 / (c || 1); }
      // trust region: a few grid cells
      const sc = Math.max(Math.abs(su) / (2 * du), Math.abs(sv) / (2 * dv), 1); su /= sc; sv /= sc;
      let un = put(u + su, u0, u1, uClosed), vn = put(v + sv, v0, v1, vClosed), Dn = bsplineD2(s, un, vn), rn = sub(Dn.P, p), fn = dot(rn, rn), k = 0;
      const small = det > 0 && sc === 1 && Math.abs(su) < 1e-6 * du && Math.abs(sv) < 1e-6 * dv;   // the gradient alone (as newton1D)
      if (small) { u = un; v = vn; D = Dn; r = rn; f = fn; if (Math.abs(su) < 1e-15 * (u1 - u0) && Math.abs(sv) < 1e-15 * (v1 - v0)) break; continue; }
      while (fn > f && k++ < 40) { su /= 2; sv /= 2; un = put(u + su, u0, u1, uClosed); vn = put(v + sv, v0, v1, vClosed); Dn = bsplineD2(s, un, vn); rn = sub(Dn.P, p); fn = dot(rn, rn); }
      if (fn > f) break;
      const moved = Math.abs(su) / (u1 - u0 || 1) + Math.abs(sv) / (v1 - v0 || 1);
      u = un; v = vn; D = Dn; r = rn; f = fn;
      if (moved < 1e-16 || f < (1e-15 * size) ** 2) break;
    }
    return { u, v, D, f };
  };
  return (p) => {
    // the nearest two samples as starts (a seam or a fold can put the nearest on the wrong side)
    let b1 = -1, f1 = Infinity, b2 = -1, f2 = Infinity;
    for (let k = 0, i = 0; k < G.length; k += 3, i++) { const f = (G[k] - p[0]) ** 2 + (G[k + 1] - p[1]) ** 2 + (G[k + 2] - p[2]) ** 2; if (f < f1) { b2 = b1; f2 = f1; b1 = i; f1 = f; } else if (f < f2) { b2 = i; f2 = f; } }
    let best = null;
    for (const i of [b1, b2]) { if (i < 0) continue; const r = newton(p, u0 + du * Math.floor(i / (mv + 1)), v0 + dv * (i % (mv + 1))); if (!best || r.f < best.f) best = r; }
    const n = cross(best.D.Su, best.D.Sv), nl = len(n) || 1;
    return { p: best.D.P, n: n.map((x) => x / nl), d: Math.sqrt(best.f), uv: [best.u, best.v] };
  };
}

/** A surface record from an untrusted source (sizes and numbers checked) → the record or null. */
export function readSurface(s) {
  const v3 = (a) => Array.isArray(a) && a.length === 3 && a.every(Number.isFinite);
  const arr = (a, n) => (Array.isArray(a) || ArrayBuffer.isView(a)) && a.length === n && Array.prototype.every.call(a, Number.isFinite);
  if (!s || typeof s !== 'object' || !EXACT_TYPES.includes(s.type) || !arr(s.range, 4)) return null;
  const ok = (() => {
    if (s.type === 'sphere') return v3(s.c) && s.r > 0;
    if (s.type === 'cone') return v3(s.o) && v3(s.d) && Number.isFinite(s.r0) && Number.isFinite(s.k) && Math.abs(s.k) > 1e-9;
    if (s.type === 'torus') return v3(s.c) && v3(s.d) && s.R > 0 && s.r > 0;
    const curveOk = (c) => c && (c.kind === 'line' ? v3(c.o) && v3(c.d) : c.kind === 'circle' ? v3(c.c) && v3(c.x) && v3(c.y) && c.r > 0 : c.kind === 'ellipse' ? v3(c.c) && v3(c.x) && v3(c.y) && c.a > 0 && c.b > 0
      : c.kind === 'nurbs' && Number.isInteger(c.deg) && c.deg >= 1 && c.deg <= 25 && c.P && c.P.length % 3 === 0 && c.P.length / 3 > c.deg && c.P.length <= 30000 && arr(c.P, c.P.length) && arr(c.k, c.P.length / 3 + c.deg + 1) && (!c.W || arr(c.W, c.P.length / 3)));
    if (s.type === 'revolution') return v3(s.o) && v3(s.d) && curveOk(s.curve);
    if (s.type === 'extrusion') return v3(s.d) && curveOk(s.curve);
    return Number.isInteger(s.ud) && Number.isInteger(s.vd) && s.ud >= 1 && s.vd >= 1 && s.ud <= 25 && s.vd <= 25 && s.nu > s.ud && s.nv > s.vd && s.nu * s.nv <= 40000
      && arr(s.P, 3 * s.nu * s.nv) && arr(s.uk, s.nu + s.ud + 1) && arr(s.vk, s.nv + s.vd + 1) && (!s.W || arr(s.W, s.nu * s.nv));
  })();
  return ok ? s : null;
}
