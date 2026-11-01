/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-tensor.js — dense tensor kernels on typed arrays (column-major, MATLAB semantics), shared by the CraftScript VM
 * (cs-vm.js), the core library (cs-lib-core.js) and any other builtin module. DOM-free; no per-element boxing.
 *
 *   binop(op, a, b)          elementwise + - .* ./ .\ .^ == ~= < <= > >= & | with implicit expansion (broadcasting);
 *                            also 'min' 'max' 'mod' 'rem' 'atan2' 'hypot'
 *   unop(op, a)              'neg' 'not' 'plus'     map(a, fn) elementwise with a JS function → f64
 *   transpose(a)             matmul(a, b)          solve(A, B) (A\B: LU with partial pivoting, least squares if not square)
 *   range(a, s, b)           index(v, args)        assign(v, args, rhs, inPlace)   deleteAt(v, args)
 *   hcat(list) / vcat(list)  cat(dim, list)        truth(v)  sizeAlong(v, k, n) (for `end`)
 *   reduce(kind, v, dim)     sum prod max min any all mean (+ index outputs for max/min)
 * Index arguments: numbers, tensors (1-based), logical tensors (masks) or COLON. Messages are plain English.
 */
import { CsError, tensor, empty, isTensor, typeOf, describe, prodOf, normShape, checkSize, sizeOf, cell, SHARED } from './cs-values.js';
import { t } from './i18n.js';
import { dpow, datan2 } from './field/detmath.js';   // 0.8 CE.4 (rule D2): pow and atan2 must give the same bits in every engine

export const COLON = Object.freeze({ t: 'colon' });
/** ':' as an index (the VM passes the text ':'). */
export const isColon = (a) => a === COLON || a === ':';
const shapeText = (s) => s.join('×');

/** Numeric view of a value for arithmetic: { d: typed array, s: shape, logical } (strings → char codes). */
function view(v, op) {
  if (typeof v === 'number') return { d: null, x: v, s: [1, 1], logical: false };
  if (typeof v === 'boolean') return { d: null, x: v ? 1 : 0, s: [1, 1], logical: true };
  if (isTensor(v)) return v.data.length === 1 && v.shape.length === 2 ? { d: null, x: v.data[0], s: v.shape, logical: v.dtype === 'u8' } : { d: v.data, s: v.shape, logical: v.dtype === 'u8' };
  if (typeof v === 'string') { const d = new Float64Array(v.length); for (let i = 0; i < v.length; i++) d[i] = v.charCodeAt(i); return v.length === 1 ? { d: null, x: d[0], s: [1, 1] } : { d, s: [v.length ? 1 : 0, v.length] }; }
  throw new CsError(t('script.tensor.op_value', { op, got: describe(v) }));
}

const CMP_OPS = new Set(['==', '~=', '<', '<=', '>', '>=', '&', '|']);
function scalarOp(op, x, y) {
  switch (op) {
    case '+': return x + y; case '-': return x - y; case '.*': case '*': return x * y;
    case './': case '/': return x / y; case '.\\': case '\\': return y / x;
    case '.^': case '^': return pow(x, y);
    case '==': return x === y; case '~=': return x !== y; case '<': return x < y; case '<=': return x <= y;
    case '>': return x > y; case '>=': return x >= y; case '&': return x !== 0 && y !== 0; case '|': return x !== 0 || y !== 0;
    case 'min': return x < y || Number.isNaN(y) ? x : y; case 'max': return x > y || Number.isNaN(y) ? x : y;
    case 'mod': return y === 0 ? x : x - Math.floor(x / y) * y; case 'rem': return y === 0 ? x : x - Math.trunc(x / y) * y;
    case 'atan2': return datan2(x, y); case 'hypot': return hypot2(x, y);
    default: throw new CsError(t('script.tensor.unknown_op', { op }));
  }
}
/** √(x²+y²) without overflow, from + − × ÷ and sqrt only (Math.hypot is allowed to differ between engines). */
export function hypot2(x, y) {
  const a = Math.abs(x), b = Math.abs(y);
  if (a === Infinity || b === Infinity) return Infinity;
  if (a !== a || b !== b) return NaN;
  const m = a > b ? a : b;
  if (m === 0) return 0;
  const p = a / m, q = b / m;
  return m * Math.sqrt(p * p + q * q);
}
/** x^y as MATLAB for real results; a negative base with a non-integer exponent is complex → NaN with a clear error. */
function pow(x, y) {
  if (y === 2) return x * x;
  if (y === 0.5) return Math.sqrt(x);
  const r = dpow(x, y);
  if (Number.isNaN(r) && x < 0 && !Number.isInteger(y) && Number.isFinite(y)) throw new CsError(t('script.tensor.complex_power', { x, y }));
  return r;
}

/** Loop kernels: same-length arrays, or one side scalar. */
function kernel(op, a, b, x, y, n, out) {
  // a/b typed arrays or null (then x/y scalars)
  if (a && b) {
    switch (op) {
      case '+': for (let i = 0; i < n; i++) out[i] = a[i] + b[i]; return;
      case '-': for (let i = 0; i < n; i++) out[i] = a[i] - b[i]; return;
      case '.*': for (let i = 0; i < n; i++) out[i] = a[i] * b[i]; return;
      case './': for (let i = 0; i < n; i++) out[i] = a[i] / b[i]; return;
      case '.\\': for (let i = 0; i < n; i++) out[i] = b[i] / a[i]; return;
      case '==': for (let i = 0; i < n; i++) out[i] = a[i] === b[i] ? 1 : 0; return;
      case '~=': for (let i = 0; i < n; i++) out[i] = a[i] !== b[i] ? 1 : 0; return;
      case '<': for (let i = 0; i < n; i++) out[i] = a[i] < b[i] ? 1 : 0; return;
      case '<=': for (let i = 0; i < n; i++) out[i] = a[i] <= b[i] ? 1 : 0; return;
      case '>': for (let i = 0; i < n; i++) out[i] = a[i] > b[i] ? 1 : 0; return;
      case '>=': for (let i = 0; i < n; i++) out[i] = a[i] >= b[i] ? 1 : 0; return;
      case 'max': for (let i = 0; i < n; i++) { const p = a[i], q = b[i]; out[i] = p > q || q !== q ? p : q; } return;
      case 'min': for (let i = 0; i < n; i++) { const p = a[i], q = b[i]; out[i] = p < q || q !== q ? p : q; } return;
      default: for (let i = 0; i < n; i++) out[i] = +scalarOp(op, a[i], b[i]); return;
    }
  }
  if (a) {   // array op scalar
    switch (op) {
      case '+': for (let i = 0; i < n; i++) out[i] = a[i] + y; return;
      case '-': for (let i = 0; i < n; i++) out[i] = a[i] - y; return;
      case '.*': for (let i = 0; i < n; i++) out[i] = a[i] * y; return;
      case './': for (let i = 0; i < n; i++) out[i] = a[i] / y; return;
      case '.^': if (y === 2) { for (let i = 0; i < n; i++) out[i] = a[i] * a[i]; return; } if (y === 1) { for (let i = 0; i < n; i++) out[i] = a[i]; return; }
        for (let i = 0; i < n; i++) out[i] = pow(a[i], y); return;
      case '==': for (let i = 0; i < n; i++) out[i] = a[i] === y ? 1 : 0; return;
      case '~=': for (let i = 0; i < n; i++) out[i] = a[i] !== y ? 1 : 0; return;
      case '<': for (let i = 0; i < n; i++) out[i] = a[i] < y ? 1 : 0; return;
      case '<=': for (let i = 0; i < n; i++) out[i] = a[i] <= y ? 1 : 0; return;
      case '>': for (let i = 0; i < n; i++) out[i] = a[i] > y ? 1 : 0; return;
      case '>=': for (let i = 0; i < n; i++) out[i] = a[i] >= y ? 1 : 0; return;
      case 'max': if (y === y) { for (let i = 0; i < n; i++) { const p = a[i]; out[i] = p > y ? p : y; } } else for (let i = 0; i < n; i++) out[i] = a[i]; return;
      case 'min': if (y === y) { for (let i = 0; i < n; i++) { const p = a[i]; out[i] = p < y ? p : y; } } else for (let i = 0; i < n; i++) out[i] = a[i]; return;
      default: for (let i = 0; i < n; i++) out[i] = +scalarOp(op, a[i], y); return;
    }
  }
  switch (op) {   // scalar op array
    case '+': for (let i = 0; i < n; i++) out[i] = x + b[i]; return;
    case '-': for (let i = 0; i < n; i++) out[i] = x - b[i]; return;
    case '.*': for (let i = 0; i < n; i++) out[i] = x * b[i]; return;
    case './': for (let i = 0; i < n; i++) out[i] = x / b[i]; return;
    case 'max': if (x === x) { for (let i = 0; i < n; i++) { const q = b[i]; out[i] = x > q || q !== q ? x : q; } } else for (let i = 0; i < n; i++) out[i] = b[i]; return;
    case 'min': if (x === x) { for (let i = 0; i < n; i++) { const q = b[i]; out[i] = x < q || q !== q ? x : q; } } else for (let i = 0; i < n; i++) out[i] = b[i]; return;
    default: for (let i = 0; i < n; i++) out[i] = +scalarOp(op, x, b[i]); return;
  }
}

/** Broadcast shape of two shapes, or throw. */
export function broadcastShape(sa, sb, op) {
  const n = Math.max(sa.length, sb.length), out = new Array(n);
  for (let k = 0; k < n; k++) {
    const p = k < sa.length ? sa[k] : 1, q = k < sb.length ? sb[k] : 1;
    if (p === q || q === 1) out[k] = p;
    else if (p === 1) out[k] = q;
    else throw new CsError(t('script.tensor.size_mismatch', { op, a: shapeText(sa), b: shapeText(sb) }));
  }
  return out;
}

/** Elementwise binary operator with implicit expansion. Returns a number/boolean for scalar results. */
export function binop(op, a, b) {
  if (typeof a === 'number' && typeof b === 'number') return scalarOp(op, a, b);
  const A = view(a, op), B = view(b, op);
  const logicalOut = CMP_OPS.has(op);
  if (!A.d && !B.d) { const r = scalarOp(op, A.x, B.x); return logicalOut ? !!r : +r; }
  let shape, n;
  const sameShape = A.d && B.d && A.s.length === B.s.length && A.s.every((s, i) => s === B.s[i]);
  if (sameShape || !A.d || !B.d) {
    shape = A.d ? A.s : B.s; n = A.d ? A.d.length : B.d.length;
    const out = logicalOut ? new Uint8Array(n) : new Float64Array(n);
    kernel(op, A.d, B.d, A.x, B.x, n, out);
    return tensor(shape, out);
  }
  shape = broadcastShape(A.s, B.s, op);
  n = prodOf(shape);
  checkSize(n);
  const out = logicalOut ? new Uint8Array(n) : new Float64Array(n);
  const ad = A.d, bd = B.d;
  if (shape.length === 2) {
    const [r, c] = shape;
    const ar = A.s[0] === 1 ? 0 : 1, ac = (A.s[1] || 1) === 1 ? 0 : A.s[0];
    const br = B.s[0] === 1 ? 0 : 1, bc = (B.s[1] || 1) === 1 ? 0 : B.s[0];
    for (let j = 0, o = 0; j < c; j++) {
      const a0 = j * ac, b0 = j * bc;
      for (let i = 0; i < r; i++, o++) out[o] = +scalarOp(op, ad[a0 + i * ar], bd[b0 + i * br]);
    }
    return tensor(shape, out);
  }
  // N-d: odometer with per-dim strides (0 where a dim is broadcast)
  const nd = shape.length, sta = strides(A.s, nd), stb = strides(B.s, nd), idx = new Array(nd).fill(0);
  let ia = 0, ib = 0;
  for (let o = 0; o < n; o++) {
    out[o] = +scalarOp(op, ad[ia], bd[ib]);
    for (let k = 0; k < nd; k++) {
      if (++idx[k] < shape[k]) { ia += sta[k]; ib += stb[k]; break; }
      ia -= sta[k] * (shape[k] - 1); ib -= stb[k] * (shape[k] - 1); idx[k] = 0;
    }
  }
  return tensor(shape, out);
}
function strides(s, nd) {
  const st = new Array(nd);
  let m = 1;
  for (let k = 0; k < nd; k++) { const len = k < s.length ? s[k] : 1; st[k] = len === 1 ? 0 : m; m *= len; }
  return st;
}

export function unop(op, a) {
  if (typeof a === 'number') return op === 'neg' ? -a : op === 'not' ? a === 0 : a;
  if (typeof a === 'boolean') return op === 'neg' ? (a ? -1 : 0) : op === 'not' ? !a : +a;
  const A = view(a, op === 'neg' ? '-' : op === 'not' ? '~' : '+');
  if (!A.d) return op === 'neg' ? -A.x : op === 'not' ? A.x === 0 : A.x;
  const n = A.d.length, d = A.d;
  if (op === 'not') { const out = new Uint8Array(n); for (let i = 0; i < n; i++) out[i] = d[i] === 0 ? 1 : 0; return tensor(A.s, out); }
  const out = new Float64Array(n);
  if (op === 'neg') for (let i = 0; i < n; i++) out[i] = -d[i]; else for (let i = 0; i < n; i++) out[i] = d[i];
  return tensor(A.s, out);
}

/** Elementwise JS function → f64 tensor (or number for scalars). */
export function map(a, fn, name = 'This function') {
  if (typeof a === 'number') return fn(a);
  if (typeof a === 'boolean') return fn(a ? 1 : 0);
  const A = view(a, name);
  if (!A.d) return fn(A.x);
  const n = A.d.length, d = A.d, out = new Float64Array(n);
  for (let i = 0; i < n; i++) out[i] = fn(d[i]);
  return tensor(A.s, out);
}

export function transpose(a) {
  if (typeof a === 'number' || typeof a === 'boolean') return a;
  if (typeof a === 'string') return a.length <= 1 ? a : (() => { throw new CsError(t('script.tensor.transpose_text')); })();
  if (!isTensor(a)) throw new CsError(t('script.tensor.transpose_value', { got: describe(a) }));
  if (a.shape.length > 2) throw new CsError(t('script.tensor.transpose_nd', { size: shapeText(a.shape) }));
  const [r, c] = a.shape, d = a.data;
  const out = new (d.constructor)(d.length);
  if (r === 1 || c === 1) out.set(d);
  else for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) out[j + i * c] = d[i + j * r];
  return tensor([c, r], out);
}

export function matmul(a, b) {
  if ((typeof a === 'number' || typeof a === 'boolean') || (typeof b === 'number' || typeof b === 'boolean')) return binop('.*', a, b);
  const A = view(a, '*'), B = view(b, '*');
  if (!A.d || !B.d) return binop('.*', a, b);
  if (A.s.length > 2 || B.s.length > 2) throw new CsError(t('script.tensor.mtimes_2d'));
  const [m, k] = A.s, [k2, n] = B.s;
  if (k !== k2) throw new CsError(t('script.tensor.mtimes_inner', { a: shapeText(A.s), b: shapeText(B.s) }));
  checkSize(m * n);
  const out = new Float64Array(m * n), ad = A.d, bd = B.d;
  if (m === 1) {   // row × matrix: dot products down columns
    for (let j = 0; j < n; j++) { let s = 0; const o = j * k; for (let p = 0; p < k; p++) s += ad[p] * bd[o + p]; out[j] = s; }
  } else {
    for (let j = 0; j < n; j++) {
      const oc = j * m;
      for (let p = 0; p < k; p++) {
        const bv = bd[p + j * k];
        if (bv === 0) continue;
        const ac = p * m;
        for (let i = 0; i < m; i++) out[oc + i] += ad[ac + i] * bv;
      }
    }
  }
  return m === 1 && n === 1 ? out[0] : tensor([m, n], out);
}

/** A\B for dense A: LU with partial pivoting (square), else least squares by Householder QR. */
export function solve(a, b) {
  const A = view(a, '\\'), B = view(b, '\\');
  if (!A.d && A.x !== undefined && A.s[0] === 1 && A.s[1] === 1) return binop('./', b, A.x);
  const [m, n] = A.s;
  if (A.s.length > 2 || B.s.length > 2) throw new CsError(t('script.tensor.mldivide_2d'));
  const bd = B.d || Float64Array.of(B.x), nr = B.s[0], nc = B.d ? B.s[1] : 1;
  if (nr !== m) throw new CsError(t('script.tensor.mldivide_rows', { a: shapeText(A.s), b: shapeText(B.s) }));
  if (m === n) {
    const L = Float64Array.from(A.d), piv = new Int32Array(n);
    for (let k = 0; k < n; k++) {
      let p = k, best = Math.abs(L[k + k * n]);
      for (let i = k + 1; i < n; i++) { const v = Math.abs(L[i + k * n]); if (v > best) { best = v; p = i; } }
      piv[k] = p;
      if (best === 0) throw new CsError(t('script.tensor.singular'));
      if (p !== k) for (let j = 0; j < n; j++) { const t = L[k + j * n]; L[k + j * n] = L[p + j * n]; L[p + j * n] = t; }
      const d = L[k + k * n];
      for (let i = k + 1; i < n; i++) L[i + k * n] /= d;
      for (let j = k + 1; j < n; j++) { const f = L[k + j * n]; if (f !== 0) for (let i = k + 1; i < n; i++) L[i + j * n] -= L[i + k * n] * f; }
    }
    const X = Float64Array.from(bd);
    for (let c = 0; c < nc; c++) {
      const x = X.subarray(c * n, (c + 1) * n);
      for (let k = 0; k < n; k++) { const p = piv[k]; if (p !== k) { const t = x[k]; x[k] = x[p]; x[p] = t; } }
      for (let k = 0; k < n; k++) { const v = x[k]; if (v !== 0) for (let i = k + 1; i < n; i++) x[i] -= L[i + k * n] * v; }
      for (let k = n - 1; k >= 0; k--) { x[k] /= L[k + k * n]; const v = x[k]; if (v !== 0) for (let i = 0; i < k; i++) x[i] -= L[i + k * n] * v; }
    }
    return nc === 1 && n === 1 ? X[0] : tensor([n, nc], X);
  }
  // least squares (m > n) or minimum-norm-ish (m < n, via normal equations of A') — QR for m ≥ n
  if (m < n) { const At = transpose(a); const AAt = matmul(a, At); return matmul(At, solve(AAt, b)); }
  const R = Float64Array.from(A.d), X = Float64Array.from(bd);
  for (let k = 0; k < n; k++) {
    let s = 0; for (let i = k; i < m; i++) s += R[i + k * m] ** 2;
    let nrm = Math.sqrt(s); if (nrm === 0) throw new CsError(t('script.tensor.rank'));
    if (R[k + k * m] > 0) nrm = -nrm;
    const v0 = R[k + k * m] - nrm; R[k + k * m] = nrm;
    // apply H = I - 2 v v'/(v'v) with v = [v0; R(k+1:m,k)]
    let vtv = v0 * v0; for (let i = k + 1; i < m; i++) vtv += R[i + k * m] ** 2;
    if (vtv === 0) continue;
    for (let j = k + 1; j < n; j++) { let d = v0 * R[k + j * m]; for (let i = k + 1; i < m; i++) d += R[i + k * m] * R[i + j * m]; const f = 2 * d / vtv; R[k + j * m] -= f * v0; for (let i = k + 1; i < m; i++) R[i + j * m] -= f * R[i + k * m]; }
    for (let c = 0; c < nc; c++) { const o = c * m; let d = v0 * X[o + k]; for (let i = k + 1; i < m; i++) d += R[i + k * m] * X[o + i]; const f = 2 * d / vtv; X[o + k] -= f * v0; for (let i = k + 1; i < m; i++) X[o + i] -= f * R[i + k * m]; }
  }
  const out = new Float64Array(n * nc);
  for (let c = 0; c < nc; c++) for (let k = n - 1; k >= 0; k--) { let s = X[c * m + k]; for (let j = k + 1; j < n; j++) s -= R[k + j * m] * out[c * n + j]; out[c * n + k] = s / R[k + k * m]; }
  return nc === 1 && n === 1 ? out[0] : tensor([n, nc], out);
}

/** a:s:b as MATLAB (1×n row; empty 1×0 when it runs the wrong way). */
export function rangeCount(a, s, b) {
  if (!Number.isFinite(a) || !Number.isFinite(s) || !Number.isFinite(b)) { if (Number.isNaN(a) || Number.isNaN(s) || Number.isNaN(b)) throw new CsError(t('script.tensor.range_nan')); throw new CsError(t('script.tensor.range_inf')); }
  if (s === 0 || (b - a) / s < 0) return 0;
  const q = (b - a) / s;
  const tol = 3 * Number.EPSILON * Math.max(Math.abs(a), Math.abs(b)) / Math.abs(s);
  return Math.floor(q + Math.max(tol, 1e-10)) + 1;
}
export function range(a, s, b) {
  const n = rangeCount(a, s, b);
  checkSize(n);
  const out = new Float64Array(n);
  for (let k = 0; k < n; k++) out[k] = a + k * s;
  if (n > 0 && Number.isInteger(a) && Number.isInteger(s)) { /* exact */ } else if (n > 1) { const last = a + (n - 1) * s; if (Math.abs(last - b) < 1e-10 * Math.max(1, Math.abs(b))) out[n - 1] = b; }
  return tensor([1, n], out);
}

/** Truth of a condition (if/while): non-empty and every element non-zero. */
export function truth(v, where = null) {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number') { if (Number.isNaN(v)) throw new CsError(t('script.tensor.cond_nan', { what: where ?? t('script.tensor.what.condition') })); return v !== 0; }
  if (typeof v === 'string') { if (!v.length) return false; for (let i = 0; i < v.length; i++) if (v.charCodeAt(i) === 0) return false; return true; }
  if (isTensor(v)) { const d = v.data; if (!d.length) return false; for (let i = 0; i < d.length; i++) if (d[i] === 0) return false; return true; }
  if (v && v.t === 'sparse') { if (v.n * v.m === 0) return false; return v.rowPtr[v.n] === v.n * v.m && Array.prototype.every.call(v.val, (x) => x !== 0); }
  throw new CsError(t('script.tensor.cond_type', { what: where ?? t('script.tensor.what.condition'), got: describe(v) }));
}

/* ------------------------------------------------------------------ indexing */

/** Size of `v` that `end` means in index position k of n. */
export function sizeAlong(v, k, n) {
  const s = sizeOf(v);
  if (n === 1) return prodOf(s);
  if (k < n - 1) return k < s.length ? s[k] : 1;
  let p = 1; for (let d = k; d < s.length; d++) p *= s[d];
  return p;
}

/** Resolve one index argument against a length → Int32Array of 0-based positions (or null for ':'), checking range. */
function indexList(ix, len, pos, nargs, srcShape, grow) {
  if (ix === COLON) return null;
  let out;
  if (typeof ix === 'number') out = Int32Array.of(checkIdx(ix, pos, nargs));
  else if (typeof ix === 'boolean') out = ix ? Int32Array.of(0) : new Int32Array(0);
  else if (isTensor(ix)) {
    const d = ix.data, n = d.length;
    if (ix.dtype === 'u8') {
      let c = 0; for (let i = 0; i < n; i++) if (d[i]) c++;
      out = new Int32Array(c);
      for (let i = 0, k = 0; i < n; i++) if (d[i]) { if (i >= len && !grow) throw new CsError(t('script.tensor.logical_past', { pos: i + 1, n: len })); out[k++] = i; }
      return out;
    }
    out = new Int32Array(n);
    for (let i = 0; i < n; i++) out[i] = checkIdx(d[i], pos, nargs);
  } else if (typeof ix === 'string') {
    if (ix === ':') return null;
    throw new CsError(t('script.tensor.text_index', { text: ix }));
  } else throw new CsError(t('script.tensor.bad_index', { got: describe(ix) }));
  if (!grow) for (let i = 0; i < out.length; i++) if (out[i] >= len) throw new CsError(pastEnd(out[i] + 1, len, pos, nargs, srcShape));
  return out;
}
function checkIdx(x, pos, nargs) {
  if (!(x >= 1) || x !== Math.floor(x)) {
    if (x === 0) throw new CsError(t('script.tensor.index_zero'));
    throw new CsError(nargs > 1 ? t('script.tensor.index_whole_pos', { got: x, pos: pos + 1 }) : t('script.tensor.index_whole', { got: x }));
  }
  if (x > 2 ** 31 - 2) throw new CsError(t('script.tensor.index_large', { i: x }));
  return x - 1;
}
function pastEnd(i, len, pos, nargs, shape) {
  if (nargs === 1) return t('script.tensor.past_end', { i, n: len });
  const key = pos === 0 ? 'script.tensor.past_end_rows' : pos === 1 ? 'script.tensor.past_end_cols' : 'script.tensor.past_end_dim';
  return t(key, { i, pos: pos + 1, n: len, dim: pos + 1, shape: shapeText(shape) });
}

/** Dims of v collapsed to n index positions (trailing dims merged into the last). */
function dimsFor(shape, n) {
  if (n === 1) return [prodOf(shape)];
  const out = [];
  for (let k = 0; k < n - 1; k++) out.push(k < shape.length ? shape[k] : 1);
  let p = 1; for (let k = n - 1; k < shape.length; k++) p *= shape[k];
  out.push(p);
  return out;
}

/** v(args) for tensors, numbers, bools, strings and cells (paren: returns a sub-cell). */
export function index(v, args) {
  if (typeof v === 'string') {
    const t = index(charCodes(v), args);
    const d = typeof t === 'number' ? [t] : t.data;
    let s = ''; for (let i = 0; i < d.length; i++) s += String.fromCharCode(d[i]);
    return s;
  }
  if (v && v.t === 'cell') {
    const r = index(tensor(sizeOf(v), Float64Array.from({ length: v.items.length }, (_, i) => i)), args);
    const ids = typeof r === 'number' ? [r] : Array.from(r.data);
    return cell(ids.map((i) => v.items[i]), typeof r === 'number' ? [1, 1] : r.shape.slice(0, 2));
  }
  const isScalar = typeof v === 'number' || typeof v === 'boolean';
  const T = isScalar ? null : v;
  if (!isScalar && !isTensor(v)) throw new CsError(t('script.tensor.no_index', { got: describe(v) }));
  const shape = isScalar ? [1, 1] : T.shape, data = isScalar ? null : T.data;
  const logical = isScalar ? typeof v === 'boolean' : T.dtype === 'u8';
  const nargs = args.length;
  if (nargs === 0) return v;
  if (nargs === 1) {
    const total = prodOf(shape);
    const ix = args[0];
    if (typeof ix === 'number' && !isScalar) {   // fast path: one element
      const k = checkIdx(ix, 0, 1);
      if (k >= total) throw new CsError(pastEnd(k + 1, total, 0, 1, shape));
      return logical ? data[k] !== 0 : data[k];
    }
    const list = indexList(ix, total, 0, 1, shape, false);
    let outShape;
    if (list === null) outShape = [total, 1];
    else if (isTensor(ix) && ix.dtype !== 'u8') {
      const isVec = (s) => s.length === 2 && (s[0] === 1 || s[1] === 1);
      outShape = isVec(shape) && isVec(ix.shape) ? (shape[0] === 1 ? [1, list.length] : [list.length, 1]) : ix.shape;
    } else if (isTensor(ix) && ix.dtype === 'u8') outShape = shape.length === 2 && shape[0] === 1 && (ix.shape[0] === 1) ? [1, list.length] : [list.length, 1];
    else outShape = [1, list.length];
    const n = list === null ? total : list.length;
    if (n === 1 && outShape.length === 2) { const x = isScalar ? (typeof v === 'boolean' ? +v : v) : data[list === null ? 0 : list[0]]; return logical ? x !== 0 : x; }
    const out = logical ? new Uint8Array(n) : new Float64Array(n);
    if (isScalar) { out.fill(+v); }
    else if (list === null) out.set(data);
    else for (let i = 0; i < n; i++) out[i] = data[list[i]];
    return tensor(outShape, out);
  }
  const dims = dimsFor(shape, nargs);
  const lists = args.map((ix, k) => indexList(ix, dims[k], k, nargs, shape, false));
  const lens = lists.map((l, k) => (l === null ? dims[k] : l.length));
  const n = prodOf(lens);
  checkSize(n);
  if (isScalar) { const out = logical ? new Uint8Array(n) : new Float64Array(n); out.fill(+v); return n === 1 ? v : tensor(lens, out); }
  if (nargs === 2) {
    const [L0, L1] = lists, r = dims[0], nr = lens[0], nc = lens[1];
    if (n === 1) { const x = data[(L0 ? L0[0] : 0) + (L1 ? L1[0] : 0) * r]; return logical ? x !== 0 : x; }
    const out = logical ? new Uint8Array(n) : new Float64Array(n);
    for (let j = 0, o = 0; j < nc; j++) {
      const cj = (L1 ? L1[j] : j) * r;
      if (L0 === null) { out.set(data.subarray(cj, cj + r), o); o += r; }
      else for (let i = 0; i < nr; i++) out[o++] = data[cj + L0[i]];
    }
    return tensor(lens, out);
  }
  const out = logical ? new Uint8Array(n) : new Float64Array(n);
  const st = []; { let m = 1; for (let k = 0; k < nargs; k++) { st.push(m); m *= dims[k]; } }
  const idx = new Array(nargs).fill(0);
  for (let o = 0; o < n; o++) {
    let src = 0;
    for (let k = 0; k < nargs; k++) src += (lists[k] === null ? idx[k] : lists[k][idx[k]]) * st[k];
    out[o] = data[src];
    for (let k = 0; k < nargs; k++) { if (++idx[k] < lens[k]) break; idx[k] = 0; }
  }
  return n === 1 ? (logical ? out[0] !== 0 : out[0]) : tensor(lens, out);
}
export function charCodes(s) { const d = new Float64Array(s.length); for (let i = 0; i < s.length; i++) d[i] = s.charCodeAt(i); return tensor([s.length ? 1 : 0, s.length], d); }

/**
 * v(args) = rhs. Returns the new value (the same tensor object when it could write in place: inPlace true, not shared,
 * same size). rhs is a scalar (broadcast) or has as many elements as the selection. Grows arrays as MATLAB does.
 */
export function assign(v, args, rhs, inPlace = false) {
  if (typeof rhs === 'string') {
    if (typeof v === 'string' || v === undefined) { const r = assign(v === undefined ? undefined : charCodes(v), args, charCodes(rhs), false); return codesToString(r); }
    rhs = charCodes(rhs);
  }
  if (typeof v === 'string') { return codesToString(assign(charCodes(v), args, rhs, false)); }
  if (rhs && rhs.t === 'cell') throw new CsError(t('script.tensor.cell_into_array'));
  if (!(typeof rhs === 'number' || typeof rhs === 'boolean' || isTensor(rhs))) throw new CsError(t('script.tensor.store_value', { got: describe(rhs) }));
  // empty rhs with () = deletion
  if (isTensor(rhs) && rhs.data.length === 0 && rhs.shape.length === 2 && rhs.shape[0] === 0 && rhs.shape[1] === 0) return deleteAt(v === undefined ? empty() : v, args);
  let T;
  if (v === undefined) T = empty();
  else if (typeof v === 'number') T = tensor([1, 1], Float64Array.of(v));
  else if (typeof v === 'boolean') T = tensor([1, 1], Uint8Array.of(v ? 1 : 0));
  else if (isTensor(v)) T = v;
  else throw new CsError(t('script.tensor.no_assign', { got: describe(v) }));
  const rv = typeof rhs === 'number' ? rhs : typeof rhs === 'boolean' ? (rhs ? 1 : 0) : null;
  const rd = rv === null ? rhs.data : null;
  const rn = rv === null ? rd.length : 1;
  const nargs = args.length;
  const shape = T.shape;
  // result dtype: logical stays logical only if rhs is logical; ints become f64
  const rhsLogical = typeof rhs === 'boolean' || (isTensor(rhs) && rhs.dtype === 'u8');
  const keepType = T.dtype === undefined || (T.dtype === 'u8' && rhsLogical) || (T.dtype === 'u8' && T.data.length === 0);
  const wantU8 = T.dtype === 'u8' && rhsLogical || (T.data.length === 0 && rhsLogical && v === undefined);
  if (nargs === 1) {
    const total = prodOf(shape), ix = args[0];
    // fast path: one numeric index in range, in place
    if (typeof ix === 'number' && rv !== null && inPlace && !T[SHARED] && keepType && ix >= 1 && ix <= total && ix === Math.floor(ix)) { T.data[ix - 1] = rv; return T; }
    const list = indexList(ix, total, 0, 1, shape, true);
    const cnt = list === null ? total : list.length;
    if (rv === null && rn !== cnt) throw new CsError(t(cnt === 1 ? 'script.tensor.values_place' : 'script.tensor.values_places', { n: rn, places: cnt }));
    let maxI = -1; if (list) for (let i = 0; i < list.length; i++) if (list[i] > maxI) maxI = list[i];
    let target = T, tshape = shape;
    if (maxI >= total) {
      // growth: vectors grow along their direction; empty / scalar grow as rows
      if (shape.length === 2 && (shape[0] === 1 || total === 0)) tshape = [1, maxI + 1];
      else if (shape.length === 2 && shape[1] === 1) tshape = [maxI + 1, 1];
      else throw new CsError(t('script.tensor.grow_vector', { i: maxI + 1, shape: shapeText(shape) }));
      target = tensor(tshape, undefined, wantU8 ? 'u8' : undefined);
      target.data.set(T.data.length && !(T.data instanceof target.data.constructor) ? Float64Array.from(T.data) : T.data);
    } else target = writable(T, inPlace, wantU8);
    const d = target.data;
    if (list === null) { if (rv !== null) d.fill(rv); else d.set(rd); }
    else if (rv !== null) for (let i = 0; i < list.length; i++) d[list[i]] = rv;
    else for (let i = 0; i < list.length; i++) d[list[i]] = rd[i];
    return target;
  }
  const dims = dimsFor(shape, nargs);
  if (nargs < shape.length && prodOf(shape.slice(nargs)) > 1 && nargs >= 2) { /* trailing dims merged: fine */ }
  const lists = args.map((ix, k) => indexList(ix, dims[k], k, nargs, shape, true));
  const lens = lists.map((l, k) => (l === null ? (dims[k] === 0 && rv === null ? sizeAlongRhs(rhs, k, nargs) : dims[k]) : l.length));
  const cnt = prodOf(lens);
  if (rv === null && rn !== cnt) {
    // allow matching non-singleton dims (A(:,1) = row vector)
    const rs = rhs.shape.filter((s) => s !== 1), ls = lens.filter((s) => s !== 1);
    if (!(rn === cnt && rs.length === ls.length)) throw new CsError(t('script.tensor.assign_size', { left: shapeText(lens), right: shapeText(rhs.shape) }));
  }
  // new size
  const newDims = dims.slice();
  for (let k = 0; k < nargs; k++) {
    if (lists[k] === null) { if (dims[k] === 0) newDims[k] = lens[k]; continue; }
    let mx = -1; for (let i = 0; i < lists[k].length; i++) if (lists[k][i] > mx) mx = lists[k][i];
    if (mx + 1 > newDims[k]) newDims[k] = mx + 1;
  }
  let target;
  const grows = newDims.some((s, k) => s !== dims[k]);
  if (grows) {
    if (nargs < shape.length && prodOf(shape.slice(nargs - 1)) !== dims[nargs - 1]) throw new CsError(t('script.tensor.grow_merged'));
    const fullShape = nargs >= shape.length ? newDims : [...newDims.slice(0, nargs - 1), ...shape.slice(nargs - 1)];
    target = tensor(fullShape, undefined, wantU8 ? 'u8' : undefined);
    // copy old into new
    const od = T.data, nd = target.data;
    if (od.length) {
      const oldD = dimsFor(shape, nargs), stO = [], stN = [];
      { let a = 1, b = 1; for (let k = 0; k < nargs; k++) { stO.push(a); stN.push(b); a *= oldD[k]; b *= newDims[k]; } }
      const idx = new Array(nargs).fill(0);
      for (let o = 0; o < od.length; o++) {
        let dst = 0; for (let k = 0; k < nargs; k++) dst += idx[k] * stN[k];
        nd[dst] = od[o];
        for (let k = 0; k < nargs; k++) { if (++idx[k] < oldD[k]) break; idx[k] = 0; }
      }
    }
  } else target = writable(T, inPlace, wantU8);
  const d = target.data;
  const st = []; { let m = 1; for (let k = 0; k < nargs; k++) { st.push(m); m *= newDims[k]; } }
  if (nargs === 2) {
    const [L0, L1] = lists, r = newDims[0], nr = lens[0], nc = lens[1];
    for (let j = 0, o = 0; j < nc; j++) {
      const cj = (L1 ? L1[j] : j) * r;
      if (L0 === null) { if (rv !== null) d.fill(rv, cj, cj + r); else d.set(rd.subarray(o, o + r), cj); o += nr; }
      else if (rv !== null) for (let i = 0; i < nr; i++) d[cj + L0[i]] = rv;
      else for (let i = 0; i < nr; i++) d[cj + L0[i]] = rd[o++];
    }
    return target;
  }
  const idx = new Array(nargs).fill(0);
  for (let o = 0; o < cnt; o++) {
    let dst = 0;
    for (let k = 0; k < nargs; k++) dst += (lists[k] === null ? idx[k] : lists[k][idx[k]]) * st[k];
    d[dst] = rv !== null ? rv : rd[o];
    for (let k = 0; k < nargs; k++) { if (++idx[k] < lens[k]) break; idx[k] = 0; }
  }
  return target;
}
function sizeAlongRhs(rhs, k, n) { const s = sizeOf(rhs); return k < n - 1 ? (s[k] ?? 1) : prodOf(s.slice(k)); }
function writable(T, inPlace, wantU8) {
  if (inPlace && !T[SHARED] && (T.dtype === undefined || (T.dtype === 'u8' && wantU8))) return T;
  if (T.dtype === 'u8' && wantU8) return tensor(T.shape, T.data.slice());
  return tensor(T.shape, T.dtype ? Float64Array.from(T.data) : T.data.slice());
}
function codesToString(t) { const d = typeof t === 'number' ? [t] : t.data; let s = ''; for (let i = 0; i < d.length; i++) s += String.fromCharCode(d[i]); return s; }

/** v(args) = [] — delete elements (one index), or whole rows/columns (one non-colon position). */
export function deleteAt(v, args) {
  const T = typeof v === 'string' ? charCodes(v) : v && v.t === 'cell' ? null : isTensor(v) ? v : typeof v === 'number' || typeof v === 'boolean' ? tensor([1, 1], Float64Array.of(+v)) : null;
  if (v && v.t === 'cell') {
    const keep = deleteAt(tensor(sizeOf(v), Float64Array.from({ length: v.items.length }, (_, i) => i)), args);
    const ids = isTensor(keep) ? Array.from(keep.data) : typeof keep === 'number' ? [keep] : [];
    return cell(ids.map((i) => v.items[i]), isTensor(keep) ? keep.shape.slice(0, 2) : [1, ids.length]);
  }
  if (!T) throw new CsError(t('script.tensor.no_delete', { got: describe(v) }));
  const shape = T.shape;
  let out;
  if (args.length === 1) {
    const total = prodOf(shape);
    const list = indexList(args[0], total, 0, 1, shape, false);
    const del = new Uint8Array(total);
    if (list === null) del.fill(1); else for (const i of list) del[i] = 1;
    const keep = [];
    for (let i = 0; i < total; i++) if (!del[i]) keep.push(T.data[i]);
    const data = T.dtype === 'u8' ? Uint8Array.from(keep) : Float64Array.from(keep);
    out = tensor(shape.length === 2 && shape[1] === 1 && shape[0] !== 1 ? [keep.length, 1] : [keep.length ? 1 : (list === null ? 0 : 1), keep.length], data);
    if (list === null) out = tensor([0, 0], T.dtype === 'u8' ? new Uint8Array(0) : new Float64Array(0));
  } else {
    const dims = dimsFor(shape, args.length);
    const nonColon = args.map((a, k) => (isColon(a) ? -1 : k)).filter((k) => k >= 0);
    // positions whose index covers the whole dim count as ':'
    const real = nonColon.filter((k) => { const l = indexList(args[k], dims[k], k, args.length, shape, false); const s = new Set(l); return s.size !== dims[k]; });
    if (real.length > 1) throw new CsError(t('script.tensor.delete_rows_cols'));
    const k = real.length ? real[0] : nonColon[0] ?? 0;
    const list = indexList(args[k], dims[k], k, args.length, shape, false);
    const del = new Uint8Array(dims[k]); if (list === null) del.fill(1); else for (const i of list) del[i] = 1;
    const keepIdx = []; for (let i = 0; i < dims[k]; i++) if (!del[i]) keepIdx.push(i + 1);
    const sel = args.map((a, q) => (q === k ? tensor([1, keepIdx.length], Float64Array.from(keepIdx)) : COLON));
    const r = index(T, sel);
    out = isTensor(r) ? r : tensor([1, 1], Float64Array.of(+r));
    if (keepIdx.length === 0) { const ns = dims.slice(); ns[k] = 0; out = tensor(ns, T.dtype === 'u8' ? new Uint8Array(0) : new Float64Array(0)); }
  }
  return typeof v === 'string' ? codesToString(out) : out;
}

/* ------------------------------------------------------------------ concatenation */

const isEmpty00 = (v) => isTensor(v) && v.data.length === 0 && v.shape.length === 2 && v.shape[0] === 0 && v.shape[1] === 0;

/** Concatenate along dim (0 = rows / vertical, 1 = columns / horizontal, …). */
export function cat(dim, list) {
  const items = list.filter((v) => !(isEmpty00(v)));
  if (!items.length) return list.length && list.every((v) => typeof v === 'string') ? '' : empty();
  if (items.some((v) => v && v.t === 'cell')) {
    if (!items.every((v) => v && v.t === 'cell')) throw new CsError(t('script.tensor.mix_cells'));
    const ts = items.map((c) => tensor(sizeOf(c), Float64Array.from({ length: c.items.length }, (_, i) => i)));
    // map via offsets
    const all = []; let off = 0; const ts2 = ts.map((t, i) => { const r = tensor(t.shape, t.data.map((x) => x + off)); off += items[i].items.length; all.push(...items[i].items); return r; });
    const r = cat(dim, ts2);
    const ids = isTensor(r) ? r.data : [r];
    return cell(Array.from(ids, (i) => all[i]), isTensor(r) ? r.shape.slice(0, 2) : [1, 1]);
  }
  if (items.some((v) => typeof v === 'string')) {
    if (dim !== 1) {
      if (items.length === 1) return items[0];
      throw new CsError(t('script.tensor.vcat_text'));
    }
    return items.map((v) => (typeof v === 'string' ? v : codesToString(isTensor(v) ? v : tensor([1, 1], Float64Array.of(+v))))).join('');
  }
  for (const v of items) if (!(typeof v === 'number' || typeof v === 'boolean' || isTensor(v))) throw new CsError(t(v && v.t === 'struct' ? 'script.tensor.concat_struct' : 'script.tensor.concat_value', { got: describe(v) }));
  const shapes = items.map(sizeOf);
  const nd = Math.max(dim + 1, ...shapes.map((s) => s.length));
  const full = shapes.map((s) => { const x = s.slice(); while (x.length < nd) x.push(1); return x; });
  const out = full[0].slice();
  out[dim] = 0;
  for (let i = 0; i < full.length; i++) {
    for (let k = 0; k < nd; k++) if (k !== dim && full[i][k] !== out[k]) throw new CsError(t(dim === 1 ? 'script.tensor.join_side' : dim === 0 ? 'script.tensor.join_top' : 'script.tensor.join_dim', { dim: dim + 1, a: shapeText(shapes[0]), b: shapeText(shapes[i]) }));
    out[dim] += full[i][dim];
  }
  const logical = items.every((v) => typeof v === 'boolean' || (isTensor(v) && v.dtype === 'u8'));
  const n = prodOf(out);
  checkSize(n);
  const data = logical ? new Uint8Array(n) : new Float64Array(n);
  // block size: product of dims below and including dim, per item; outer = product above dim
  let inner = 1; for (let k = 0; k < dim; k++) inner *= out[k];
  let outer = 1; for (let k = dim + 1; k < nd; k++) outer *= out[k];
  const outBlock = inner * out[dim];
  let offset = 0;
  for (let i = 0; i < items.length; i++) {
    const v = items[i];
    const blk = inner * full[i][dim];
    if (typeof v === 'number' || typeof v === 'boolean') { for (let o = 0; o < outer; o++) data[o * outBlock + offset] = +v; }
    else {
      const d = v.data;
      if (outer === 1) data.set(d, offset);
      else for (let o = 0; o < outer; o++) data.set(d.subarray(o * blk, (o + 1) * blk), o * outBlock + offset);
    }
    offset += blk;
  }
  return n === 1 && out.length === 2 ? (logical ? data[0] !== 0 : data[0]) : tensor(out, data);
}
export const hcat = (list) => cat(1, list);
export const vcat = (list) => cat(0, list);

/* ------------------------------------------------------------------ reductions */

/** First non-singleton dimension (0-based) of a shape, MATLAB's default for sum/max/…. */
export function defaultDim(shape) { for (let k = 0; k < shape.length; k++) if (shape[k] !== 1) return k; return 0; }

/**
 * Reduce along dim (0-based; null = first non-singleton). kind: sum prod max min any all mean.
 * Returns { value, index } (index = 1-based positions for max/min).
 */
export function reduce(kind, v, dim = null) {
  const T = typeof v === 'number' || typeof v === 'boolean' ? tensor([1, 1], Float64Array.of(+v)) : typeof v === 'string' ? charCodes(v) : v;
  if (!isTensor(T)) throw new CsError(t('script.tensor.fn_value', { fn: kind, got: describe(v) }));
  let shape = T.shape;
  if (dim === null) {
    if (shape.length === 2 && shape[0] === 0 && shape[1] === 0) {   // sum([]) = 0, max([]) = []
      if (kind === 'sum' || kind === 'any') return { value: kind === 'any' ? false : 0 };
      if (kind === 'prod' || kind === 'all') return { value: kind === 'all' ? true : 1 };
      if (kind === 'mean') return { value: NaN };
      return { value: empty(), index: empty() };
    }
    dim = defaultDim(shape);
  }
  const full = shape.slice(); while (full.length <= dim) full.push(1);
  const len = full[dim];
  let inner = 1; for (let k = 0; k < dim; k++) inner *= full[k];
  let outer = 1; for (let k = dim + 1; k < full.length; k++) outer *= full[k];
  const outShape = full.slice(); outShape[dim] = (kind === 'max' || kind === 'min') && len === 0 ? 0 : 1;
  const n = inner * outer;
  const d = T.data;
  const logical = kind === 'any' || kind === 'all';
  const out = logical ? new Uint8Array(n) : new Float64Array(n);
  const idx = kind === 'max' || kind === 'min' ? new Float64Array(n) : null;
  for (let o = 0; o < outer; o++) {
    for (let i = 0; i < inner; i++) {
      const base = o * inner * len + i, oi = o * inner + i;
      switch (kind) {
        case 'sum': case 'mean': { let s = 0; for (let k = 0; k < len; k++) s += d[base + k * inner]; out[oi] = kind === 'mean' ? s / len : s; break; }
        case 'prod': { let s = 1; for (let k = 0; k < len; k++) s *= d[base + k * inner]; out[oi] = s; break; }
        case 'any': { let s = 0; for (let k = 0; k < len; k++) if (d[base + k * inner] !== 0 && d[base + k * inner] === d[base + k * inner]) { s = 1; break; } out[oi] = s; break; }
        case 'all': { let s = 1; for (let k = 0; k < len; k++) if (d[base + k * inner] === 0) { s = 0; break; } out[oi] = s; break; }
        case 'max': case 'min': {
          let best = NaN, bi = 0;
          for (let k = 0; k < len; k++) {
            const x = d[base + k * inner];
            if (x !== x) continue;
            if (best !== best || (kind === 'max' ? x > best : x < best)) { best = x; bi = k; }
          }
          out[oi] = best; idx[oi] = bi + 1;
          break;
        }
        default: throw new CsError(t('script.tensor.unknown_reduction', { fn: kind }));
      }
    }
  }
  if (len === 0 && (kind === 'max' || kind === 'min')) return { value: tensor(outShape, new Float64Array(0)), index: tensor(outShape, new Float64Array(0)) };
  const wrap = (a) => (a.length === 1 && outShape.length <= 2 ? (logical ? a[0] !== 0 : a[0]) : tensor(outShape, a));
  return { value: wrap(out), index: idx ? wrap(idx) : undefined };
}

export { typeOf };
