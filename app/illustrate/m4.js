/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/m4.js — the little vector and matrix maths the Illustrate modules share (DOM-free, import-free, so 0.8 can
 * move the folder to a shared lib/). Matrices are 16 numbers, column-major (three.js `fromArray`, PartCraft's vec.js),
 * points [x, y, z] in millimetres, Y up.
 */

export const IDENT = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a) => { const l = len(a); return l > 1e-300 ? [a[0] / l, a[1] / l, a[2] / l] : [0, 0, 0]; };
export const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

export function apply(m, p) {
  return [m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12], m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13], m[2] * p[0] + m[6] * p[1] + m[10] * p[2] + m[14]];
}
export function applyDir(m, d) {
  return [m[0] * d[0] + m[4] * d[1] + m[8] * d[2], m[1] * d[0] + m[5] * d[1] + m[9] * d[2], m[2] * d[0] + m[6] * d[1] + m[10] * d[2]];
}
export function matMul(a, b) {
  const r = new Array(16);
  for (let c = 0; c < 4; c++) for (let i = 0; i < 4; i++) r[c * 4 + i] = a[i] * b[c * 4] + a[4 + i] * b[c * 4 + 1] + a[8 + i] * b[c * 4 + 2] + a[12 + i] * b[c * 4 + 3];
  return r;
}
export const translation = (o) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, o[0], o[1], o[2], 1];
/** Inverse of a general 4×4 (null when singular). */
export function invert(m) {
  const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = m;
  const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11;
  const b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30;
  const b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
  const det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det || !Number.isFinite(det)) return null;
  const d = 1 / det;
  return [
    (a11 * b11 - a12 * b10 + a13 * b09) * d, (a02 * b10 - a01 * b11 - a03 * b09) * d, (a31 * b05 - a32 * b04 + a33 * b03) * d, (a22 * b04 - a21 * b05 - a23 * b03) * d,
    (a12 * b08 - a10 * b11 - a13 * b07) * d, (a00 * b11 - a02 * b08 + a03 * b07) * d, (a32 * b02 - a30 * b05 - a33 * b01) * d, (a20 * b05 - a22 * b02 + a23 * b01) * d,
    (a10 * b10 - a11 * b08 + a13 * b06) * d, (a01 * b08 - a00 * b10 - a03 * b06) * d, (a30 * b04 - a31 * b02 + a33 * b00) * d, (a21 * b02 - a20 * b04 - a23 * b00) * d,
    (a11 * b07 - a10 * b09 - a12 * b06) * d, (a00 * b09 - a01 * b07 + a02 * b06) * d, (a31 * b01 - a30 * b03 - a32 * b00) * d, (a20 * b03 - a21 * b01 + a22 * b00) * d,
  ];
}
/** Axis-aligned box of a position array under a matrix: { min, max } (null for no points). */
export function boxOf(positions, m = IDENT) {
  if (!positions || positions.length < 3) return null;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < positions.length; i += 3) {
    const p = apply(m, [positions[i], positions[i + 1], positions[i + 2]]);
    for (let k = 0; k < 3; k++) { if (p[k] < min[k]) min[k] = p[k]; if (p[k] > max[k]) max[k] = p[k]; }
  }
  return { min, max };
}
export function unionBox(a, b) {
  if (!a) return b; if (!b) return a;
  return { min: a.min.map((v, k) => Math.min(v, b.min[k])), max: a.max.map((v, k) => Math.max(v, b.max[k])) };
}
export const boxCentre = (b) => mul(add(b.min, b.max), 0.5);
/** Is m a rigid motion (orthonormal 3×3 with det +1, last row 0 0 0 1) within tol? */
export function isRigid(m, tol = 1e-6) {
  const c = [[m[0], m[1], m[2]], [m[4], m[5], m[6]], [m[8], m[9], m[10]]];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (Math.abs(dot(c[i], c[j]) - (i === j ? 1 : 0)) > tol) return false;
  return Math.abs(m[3]) < tol && Math.abs(m[7]) < tol && Math.abs(m[11]) < tol && Math.abs(m[15] - 1) < tol && dot(cross(c[0], c[1]), c[2]) > 0;
}

/**
 * The rigid motion that best takes points A onto points B (same order), by Horn's quaternion method (closed form, no
 * library; B. K. P. Horn, "Closed-form solution of absolute orientation using unit quaternions", JOSA A 4(4), 1987).
 * A, B: flat [x,y,z,…] arrays of equal length ≥ 9. Returns { m (16), err (largest distance after the move) }.
 */
export function rigidFit(A, B) {
  const n = A.length / 3;
  let ca = [0, 0, 0], cb = [0, 0, 0];
  for (let i = 0; i < n; i++) { ca = add(ca, [A[i * 3], A[i * 3 + 1], A[i * 3 + 2]]); cb = add(cb, [B[i * 3], B[i * 3 + 1], B[i * 3 + 2]]); }
  ca = mul(ca, 1 / n); cb = mul(cb, 1 / n);
  let Sxx = 0, Sxy = 0, Sxz = 0, Syx = 0, Syy = 0, Syz = 0, Szx = 0, Szy = 0, Szz = 0;
  for (let i = 0; i < n; i++) {
    const a = [A[i * 3] - ca[0], A[i * 3 + 1] - ca[1], A[i * 3 + 2] - ca[2]], b = [B[i * 3] - cb[0], B[i * 3 + 1] - cb[1], B[i * 3 + 2] - cb[2]];
    Sxx += a[0] * b[0]; Sxy += a[0] * b[1]; Sxz += a[0] * b[2]; Syx += a[1] * b[0]; Syy += a[1] * b[1]; Syz += a[1] * b[2]; Szx += a[2] * b[0]; Szy += a[2] * b[1]; Szz += a[2] * b[2];
  }
  const N = [
    [Sxx + Syy + Szz, Syz - Szy, Szx - Sxz, Sxy - Syx],
    [Syz - Szy, Sxx - Syy - Szz, Sxy + Syx, Szx + Sxz],
    [Szx - Sxz, Sxy + Syx, -Sxx + Syy - Szz, Syz + Szy],
    [Sxy - Syx, Szx + Sxz, Syz + Szy, -Sxx - Syy + Szz],
  ];
  const q = topEigenvector4(N);
  const [w, x, y, z] = q;
  const R = [
    1 - 2 * (y * y + z * z), 2 * (x * y + w * z), 2 * (x * z - w * y), 0,
    2 * (x * y - w * z), 1 - 2 * (x * x + z * z), 2 * (y * z + w * x), 0,
    2 * (x * z + w * y), 2 * (y * z - w * x), 1 - 2 * (x * x + y * y), 0,
    0, 0, 0, 1,
  ];
  const t = sub(cb, applyDir(R, ca));
  const m = [...R.slice(0, 12), t[0], t[1], t[2], 1];
  let err = 0;
  for (let i = 0; i < n; i++) { const p = apply(m, [A[i * 3], A[i * 3 + 1], A[i * 3 + 2]]); err = Math.max(err, Math.hypot(p[0] - B[i * 3], p[1] - B[i * 3 + 1], p[2] - B[i * 3 + 2])); }
  return { m, err };
}

/** Eigenvector of the largest eigenvalue of a symmetric 4×4 (Jacobi rotations). */
function topEigenvector4(S) {
  const a = S.map((r) => r.slice());
  const v = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
  for (let sweep = 0; sweep < 50; sweep++) {
    let off = 0;
    for (let p = 0; p < 4; p++) for (let q = p + 1; q < 4; q++) off += a[p][q] * a[p][q];
    if (off < 1e-30) break;
    for (let p = 0; p < 4; p++) for (let q = p + 1; q < 4; q++) {
      if (Math.abs(a[p][q]) < 1e-300) continue;
      const th = (a[q][q] - a[p][p]) / (2 * a[p][q]);
      const tt = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1));
      const c = 1 / Math.sqrt(tt * tt + 1), s = tt * c;
      for (let k = 0; k < 4; k++) { const akp = a[k][p], akq = a[k][q]; a[k][p] = c * akp - s * akq; a[k][q] = s * akp + c * akq; }
      for (let k = 0; k < 4; k++) { const apk = a[p][k], aqk = a[q][k]; a[p][k] = c * apk - s * aqk; a[q][k] = s * apk + c * aqk; }
      for (let k = 0; k < 4; k++) { const vkp = v[k][p], vkq = v[k][q]; v[k][p] = c * vkp - s * vkq; v[k][q] = s * vkp + c * vkq; }
    }
  }
  let best = 0;
  for (let i = 1; i < 4; i++) if (a[i][i] > a[best][best]) best = i;
  const q = [v[0][best], v[1][best], v[2][best], v[3][best]];
  const l = Math.hypot(...q) || 1;
  return q.map((x) => x / l);
}
