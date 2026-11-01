/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-lib-core.js — CraftScript core builtins (module 'core'): constants, array creation and shape, elementwise maths,
 * reductions, sorting and sets, logical tests, text (sprintf/fprintf/num2str …), structs and cells, errors, timing and the
 * display commands (plot, imagesc, show, table, clf). DOM-free. Linear algebra, sparse matrices, meshes and files are
 * builder B's modules (cs-lib-linalg.js, cs-lib-mesh.js, cs-lib-io.js); this module never registers their names.
 *
 * Each builtin is fn(args, ctx) → value | value[] (several outputs, see ctx.nargout). Tensors are column-major typed
 * arrays (cs-values.js); kernels are in cs-tensor.js. A sparse argument to a core builtin is made dense first (except sum,
 * which works on CSR directly).
 */
import { registerBuiltin } from './cs-runtime.js';
import { CsError, tensor, empty, isTensor, typeOf, describe, sizeOf, numelOf, prodOf, num, asTensor, displayText, valueText, fmtNum, cell, struct, func, CALL, NAME_RE } from './cs-values.js';
import * as K from './cs-tensor.js';
import { t } from './i18n.js';
import { dsin, dcos, dtan, dexp, dlog, dlog2, dlog10, dpow, datan, dasin, dacos, dsinh, dcosh, dtanh, dcbrt } from './field/detmath.js';   // 0.8 CE.4 (rule D2): the same bits in every engine

const def = (name, fn, args) => registerBuiltin(name, fn, { args, module: 'core' });   // doc: the language file's script.doc.<name> (cs-runtime.js docKey)
const err = (m) => new CsError(m);

/* ------------------------------------------------------------------ argument helpers */

function dense(v) {
  if (v && v.t === 'sparse') {
    if (v.n * v.m > 2 ** 27) throw err(t('script.core.sparse_too_big', { n: v.n, m: v.m }));
    const d = new Float64Array(v.n * v.m);
    for (let i = 0; i < v.n; i++) for (let k = v.rowPtr[i]; k < v.rowPtr[i + 1]; k++) d[i + v.col[k] * v.n] += v.val[k];
    return tensor([v.n, v.m], d);
  }
  return v;
}
const T = (v, what) => { v = dense(v); if (typeof v === 'string') return K.charCodes(v); try { return asTensor(v); } catch { throw err(what ? t('script.core.not_numbers', { what, got: describe(v) }) : t('script.core.not_numbers_this', { got: describe(v) })); } };
const N = (v, what) => num(dense(v), what);
const I = (v, what) => { const x = N(v, what); if (!Number.isInteger(x)) throw err(t('script.core.not_whole', { what, x })); return x; };
const S = (v, what) => { if (typeof v !== 'string') throw err(t('script.core.not_text', { what, got: describe(v) })); return v; };
const out = (shape, data) => (data.length === 1 && shape.length <= 2 && shape.every((s) => s === 1) ? data[0] : tensor(shape, data));
const bool = (shape, data) => (data.length === 1 && shape.length <= 2 && shape.every((s) => s === 1) ? data[0] !== 0 : tensor(shape, data));
const isScalarLike = (v) => typeof v === 'number' || typeof v === 'boolean' || (isTensor(v) && v.data.length === 1);
const isStr = (v) => typeof v === 'string';
const row = (arr) => tensor([1, arr.length], Float64Array.from(arr));
const col = (arr) => tensor([arr.length, 1], Float64Array.from(arr));

/** Shape from zeros(n) / zeros(m, n, …) / zeros([m n …]); trailing class names ('double', 'like', …) ignored. */
function shapeArgs(args, name) {
  const a = args.filter((x) => typeof x !== 'string');
  if (!a.length) return [1, 1];
  let s;
  if (a.length === 1) {
    const t = T(a[0], name);
    s = t.data.length === 1 ? [t.data[0], t.data[0]] : Array.from(t.data);
  } else s = a.map((x) => N(x, t('script.core.what.a_size', { name })));
  return s.map((x) => {
    if (!Number.isFinite(x)) throw err(t('script.core.sizes_finite', { name }));
    if (!Number.isInteger(x)) throw err(t('script.core.sizes_whole', { name, x }));
    return Math.max(0, x);
  });
}
/** 0-based dimension from a 1-based script argument (undefined → null). */
const dimArg = (v, name) => { if (v === undefined) return null; const d = I(v, t('script.core.what.the_dimension', { name })); if (d < 1) throw err(t('script.core.dim_from_1', { name })); return d - 1; };

/* ------------------------------------------------------------------ random numbers (seedable) */

let seed = (Math.random() * 2 ** 32) >>> 0;
function rnd() { seed = (seed + 0x6D2B79F5) >>> 0; let t = seed; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }
let spare = null;
function gauss() { if (spare !== null) { const s = spare; spare = null; return s; } let u = 0, v = 0; while (u === 0) u = rnd(); v = rnd(); const r = Math.sqrt(-2 * Math.log(u)); spare = r * Math.sin(2 * Math.PI * v); return r * Math.cos(2 * Math.PI * v); }

/* ------------------------------------------------------------------ constants */

def('pi', (a) => (a.length ? K.binop('.*', fill(shapeArgs(a, 'pi'), 1), Math.PI) : Math.PI), 'pi');
def('Inf', (a) => (a.length ? fill(shapeArgs(a, 'Inf'), Infinity) : Infinity), 'Inf | Inf(n, m)');   // i18n-ignore: call signature (code)
def('inf', (a) => (a.length ? fill(shapeArgs(a, 'inf'), Infinity) : Infinity), 'inf');
def('NaN', (a) => (a.length ? fill(shapeArgs(a, 'NaN'), NaN) : NaN), 'NaN | NaN(n, m)');
def('nan', (a) => (a.length ? fill(shapeArgs(a, 'nan'), NaN) : NaN), 'nan');
def('eps', (a) => { if (!a.length) return Number.EPSILON; return K.map(T(a[0], 'eps'), (x) => { x = Math.abs(x); if (!Number.isFinite(x)) return NaN; if (x === 0) return 5e-324; const e = Math.floor(Math.log2(x)); return 2 ** (e - 52); }); }, 'eps | eps(x)');   // i18n-ignore: call signature (code)
def('realmax', () => Number.MAX_VALUE, 'realmax');
def('realmin', () => 2.2250738585072014e-308, 'realmin');
def('true', (a) => (a.length ? bool(shapeArgs(a, 'true'), new Uint8Array(prodOf(shapeArgs(a, 'true'))).fill(1)) : true), 'true | true(n, m)');   // i18n-ignore: call signature (code)
def('false', (a) => (a.length ? bool(shapeArgs(a, 'false'), new Uint8Array(prodOf(shapeArgs(a, 'false')))) : false), 'false | false(n, m)');   // i18n-ignore: call signature (code)
function fill(shape, v) { const t = tensor(shape); t.data.fill(v); return t.data.length === 1 && shape.length === 2 ? v : t; }

/* ------------------------------------------------------------------ creation */

def('zeros', (a) => { const s = shapeArgs(a, 'zeros'); return prodOf(s) === 1 && s.length === 2 ? 0 : tensor(s); }, 'zeros(n) | zeros(m, n, …) | zeros([m n])');
def('ones', (a) => fill(shapeArgs(a, 'ones'), 1), 'ones(n) | ones(m, n, …)');
def('eye', (a) => { const s = shapeArgs(a, 'eye'); if (s.length > 2) throw err(t('script.core.eye_2d')); const tv = tensor(s); for (let i = 0; i < Math.min(s[0], s[1]); i++) tv.data[i + i * s[0]] = 1; return tv.data.length === 1 ? tv.data[0] : tv; }, 'eye(n) | eye(m, n)');
def('rand', (a) => { const s = shapeArgs(a, 'rand'); const t = tensor(s); for (let i = 0; i < t.data.length; i++) t.data[i] = rnd(); return out(s, t.data); }, 'rand(n) | rand(m, n)');
def('randn', (a) => { const s = shapeArgs(a, 'randn'); const t = tensor(s); for (let i = 0; i < t.data.length; i++) t.data[i] = gauss(); return out(s, t.data); }, 'randn(n) | randn(m, n)');
def('randi', (a) => { const r = T(a[0], 'randi'); const lo = r.data.length > 1 ? r.data[0] : 1, hi = r.data.length > 1 ? r.data[1] : r.data[0]; const s = shapeArgs(a.slice(1), 'randi'); const t = tensor(s); for (let i = 0; i < t.data.length; i++) t.data[i] = lo + Math.floor(rnd() * (hi - lo + 1)); return out(s, t.data); }, 'randi(imax, n) | randi([lo hi], m, n)');
def('randperm', (a) => { const n = I(a[0], 'randperm'); const p = Array.from({ length: n }, (_, i) => i + 1); for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } return row(a[1] === undefined ? p : p.slice(0, I(a[1], 'randperm'))); }, 'randperm(n, k)');
def('rng', (a) => { const x = a[0]; if (x === 'default' || x === undefined) seed = 0; else if (x === 'shuffle') seed = (Math.random() * 2 ** 32) >>> 0; else seed = (N(x, t('script.core.what.rng_seed')) >>> 0); spare = null; return undefined; }, 'rng(seed) | rng(\'default\') | rng(\'shuffle\')');
def('linspace', (a) => { const lo = N(a[0], t('script.core.what.linspace_start')), hi = N(a[1], t('script.core.what.linspace_end')), n = a[2] === undefined ? 100 : Math.max(0, Math.floor(N(a[2], t('script.core.what.linspace_count')))); const d = new Float64Array(n); for (let i = 0; i < n; i++) d[i] = n === 1 ? hi : lo + (hi - lo) * i / (n - 1); return n === 1 ? d[0] : tensor([1, n], d); }, 'linspace(a, b, n)');
def('logspace', (a) => { const lo = N(a[0]), hi = N(a[1]), n = a[2] === undefined ? 50 : I(a[2], 'logspace: n'); const d = new Float64Array(n); for (let i = 0; i < n; i++) d[i] = 10 ** (n === 1 ? hi : lo + (hi - lo) * i / (n - 1)); return tensor([1, n], d); }, 'logspace(a, b, n)');
def('colon', (a) => K.range(N(a[0]), a.length > 2 ? N(a[1]) : 1, N(a[a.length > 2 ? 2 : 1])), 'colon(a, b) | colon(a, s, b)');
def('repmat', (a) => {
  const A = a[0];
  const reps = a.length === 2 ? (() => { const r = T(a[1], 'repmat'); return r.data.length === 1 ? [r.data[0], r.data[0]] : Array.from(r.data); })() : a.slice(1).map((x) => I(x, t('script.core.what.repmat_count')));
  if (isStr(A)) { if (reps[0] !== 1) throw err(t('script.core.repmat_text')); return A.repeat(Math.max(0, reps[1] ?? 1)); }
  if (A && A.t === 'cell') return cellRepmat(A, reps);
  const tv = T(A, 'repmat'), s = tv.shape.slice();
  while (s.length < reps.length) s.push(1);
  while (reps.length < s.length) reps.push(1);
  const os = s.map((x, k) => x * reps[k]), n = prodOf(os);
  const o = tv.dtype === 'u8' ? new Uint8Array(n) : new Float64Array(n);
  if (s.length === 2) {
    const [r, c] = s, [R] = os, d = tv.data;
    for (let bj = 0; bj < reps[1]; bj++) for (let j = 0; j < c; j++) { const src = j * r, dst0 = (bj * c + j) * R; for (let bi = 0; bi < reps[0]; bi++) o.set(d.subarray(src, src + r), dst0 + bi * r); }
  } else {
    const nd = s.length, idx = new Array(nd).fill(0);
    for (let q = 0; q < n; q++) {
      let src = 0, m = 1;
      for (let k = 0; k < nd; k++) { src += (idx[k] % s[k]) * m; m *= s[k]; }
      o[q] = tv.data[src];
      for (let k = 0; k < nd; k++) { if (++idx[k] < os[k]) break; idx[k] = 0; }
    }
  }
  return tv.dtype === 'u8' ? bool(os, o) : out(os, o);
}, 'repmat(A, m, n) | repmat(A, [m n])');
function cellRepmat(c, reps) { const [r, k] = sizeOf(c); const R = r * reps[0], C = k * (reps[1] ?? 1); const items = new Array(R * C); for (let j = 0; j < C; j++) for (let i = 0; i < R; i++) items[i + j * R] = c.items[(i % r) + (j % k) * r]; return cell(items, [R, C]); }
def('kron', (a) => {
  const A = T(a[0], 'kron'), B = T(a[1], 'kron');
  if (A.shape.length > 2 || B.shape.length > 2) throw err(t('script.core.kron_2d'));
  const [ar, ac] = A.shape, [br, bc] = B.shape, R = ar * br, C = ac * bc, o = new Float64Array(R * C);
  for (let j = 0; j < ac; j++) for (let i = 0; i < ar; i++) { const x = A.data[i + j * ar]; if (x === 0) continue; for (let q = 0; q < bc; q++) for (let p = 0; p < br; p++) o[(i * br + p) + (j * bc + q) * R] = x * B.data[p + q * br]; }
  return out([R, C], o);
}, 'kron(A, B)');
def('reshape', (a) => {
  const v = a[0];
  const total = numelOf(v);
  let s;
  if (a.length === 2) s = Array.from(T(a[1], 'reshape').data);
  else {
    s = a.slice(1).map((x) => (isTensor(x) && x.data.length === 0 ? null : N(x, t('script.core.what.reshape_size'))));
    const nul = s.filter((x) => x === null).length;
    if (nul > 1) throw err(t('script.core.reshape_one_empty'));
    if (nul) { const rest = s.reduce((p, x) => (x === null ? p : p * x), 1); if (rest === 0 || total % rest) throw err(t('script.core.reshape_split', { n: total })); s[s.indexOf(null)] = total / rest; }
  }
  if (prodOf(s) !== total) throw err(t('script.core.reshape_shape', { n: total, shape: s.join('×'), m: prodOf(s) }));
  if (isStr(v)) { if (s[0] !== 1 && total > 0) throw err(t('script.core.reshape_text_row')); return v; }
  if (v && v.t === 'cell') return cell(v.items.slice(), s.slice(0, 2));
  const tv = T(v, 'reshape');
  return tensor(s, tv.data.slice());
}, 'reshape(A, m, n, …) | reshape(A, [m n])');
def('meshgrid', (a, ctx) => {
  const x = T(a[0], 'meshgrid'), y = a[1] === undefined ? x : T(a[1], 'meshgrid');
  const nx = x.data.length, ny = y.data.length, X = new Float64Array(nx * ny), Y = new Float64Array(nx * ny);
  for (let j = 0; j < nx; j++) for (let i = 0; i < ny; i++) { X[i + j * ny] = x.data[j]; Y[i + j * ny] = y.data[i]; }
  const r = [tensor([ny, nx], X), tensor([ny, nx], Y)];
  return ctx.nargout > 1 ? r : r[0];
}, '[X, Y] = meshgrid(x, y)');
def('ndgrid', (a, ctx) => {
  const x = T(a[0], 'ndgrid'), y = a[1] === undefined ? x : T(a[1], 'ndgrid');
  const nx = x.data.length, ny = y.data.length, X = new Float64Array(nx * ny), Y = new Float64Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { X[i + j * nx] = x.data[i]; Y[i + j * nx] = y.data[j]; }
  const r = [tensor([nx, ny], X), tensor([nx, ny], Y)];
  return ctx.nargout > 1 ? r : r[0];
}, '[X, Y] = ndgrid(x, y)');
def('diag', (a) => {
  const t = T(a[0], 'diag'), k = a[1] === undefined ? 0 : I(a[1], 'diag: k');
  const [r, c] = t.shape;
  if (r === 1 || c === 1) { const n = t.data.length, m = n + Math.abs(k), o = new Float64Array(m * m); for (let i = 0; i < n; i++) o[(k >= 0 ? i : i - k) + (k >= 0 ? i + k : i) * m] = t.data[i]; return out([m, m], o); }
  const d = []; for (let i = 0; i < r; i++) { const j = i + k; if (j >= 0 && j < c) d.push(t.data[i + j * r]); }
  return d.length === 1 ? d[0] : col(d);
}, 'diag(v, k) | diag(A, k)');
for (const [name, lower] of [['tril', true], ['triu', false]]) def(name, (a) => {
  const t = T(a[0], name), k = a[1] === undefined ? 0 : I(a[1], `${name}: k`), [r, c] = t.shape, o = t.data.slice();
  for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) if (lower ? j - i > k : j - i < k) o[i + j * r] = 0;
  return out(t.shape, Float64Array.from(o));
}, `${name}(A, k)`);
def('cat', (a) => K.cat(I(a[0], t('script.core.what.cat_dim')) - 1, a.slice(1).map(dense)), 'cat(dim, A, B, …)');
def('horzcat', (a) => K.hcat(a.map(dense)), 'horzcat(A, B, …)');
def('vertcat', (a) => K.vcat(a.map(dense)), 'vertcat(A, B, …)');
def('magic', (a) => magic(I(a[0], 'magic')), 'magic(n)');
function magic(n) {
  if (n < 1) return empty();
  if (n === 2) return tensor([2, 2], Float64Array.of(4, 3, 1, 2));
  const M = new Float64Array(n * n), at = (i, j) => i + j * n;
  if (n % 2) { let i = 0, j = (n - 1) / 2; for (let k = 1; k <= n * n; k++) { M[at(i, j)] = k; const ni = (i - 1 + n) % n, nj = (j + 1) % n; if (M[at(ni, nj)]) i = (i + 1) % n; else { i = ni; j = nj; } } }
  else if (n % 4 === 0) { for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const v = i * n + j + 1; const keep = ((i % 4 === 0 || i % 4 === 3) && (j % 4 === 0 || j % 4 === 3)) || ((i % 4 === 1 || i % 4 === 2) && (j % 4 === 1 || j % 4 === 2)); M[at(i, j)] = keep ? n * n + 1 - v : v; } }
  else {
    const m = n / 2, A = magic(m).data, k = (n - 2) / 4;
    for (let j = 0; j < m; j++) for (let i = 0; i < m; i++) { const v = A[i + j * m]; M[at(i, j)] = v; M[at(i + m, j + m)] = v + m * m; M[at(i, j + m)] = v + 2 * m * m; M[at(i + m, j)] = v + 3 * m * m; }
    const cols = []; for (let j = 0; j < k; j++) cols.push(j); for (let j = n - k + 1; j < n; j++) cols.push(j);
    const swap = (i, j) => { const t = M[at(i, j)]; M[at(i, j)] = M[at(i + m, j)]; M[at(i + m, j)] = t; };
    for (let i = 0; i < m; i++) for (const j of cols) swap(i, j);
    swap(k, 0); swap(k, k);
  }
  return tensor([n, n], M);
}

/* ------------------------------------------------------------------ size and type */

def('size', (a, ctx) => {
  const s = sizeOf(a[0]);
  if (a[1] !== undefined) { const d = I(a[1], t('script.core.what.size_dim')); if (d < 1) throw err(t('script.core.dim_from_1', { name: 'size' })); return d <= s.length ? s[d - 1] : 1; }
  if (ctx.nargout > 1) { const r = []; for (let k = 0; k < ctx.nargout; k++) r.push(k < ctx.nargout - 1 ? (s[k] ?? 1) : prodOf(s.slice(k))); return r; }
  return row(s);
}, 'size(A) | size(A, dim) | [m, n] = size(A)');
def('numel', (a) => numelOf(a[0]), 'numel(A)');
def('length', (a) => { const s = sizeOf(a[0]); return s.some((x) => x === 0) ? 0 : Math.max(...s); }, 'length(A)');
def('ndims', (a) => sizeOf(a[0]).length, 'ndims(A)');
def('isempty', (a) => numelOf(a[0]) === 0 && typeOf(a[0]) !== 'struct' && typeOf(a[0]) !== 'func', 'isempty(A)');
def('isscalar', (a) => numelOf(a[0]) === 1, 'isscalar(A)');
def('isvector', (a) => { const s = sizeOf(a[0]); return s.length === 2 && (s[0] === 1 || s[1] === 1) && prodOf(s) >= 1; }, 'isvector(A)');
def('isrow', (a) => { const s = sizeOf(a[0]); return s.length === 2 && s[0] === 1; }, 'isrow(A)');
def('iscolumn', (a) => { const s = sizeOf(a[0]); return s.length === 2 && s[1] === 1; }, 'iscolumn(A)');
def('ismatrix', (a) => sizeOf(a[0]).length === 2, 'ismatrix(A)');
def('issquare', (a) => { const s = sizeOf(a[0]); return s.length === 2 && s[0] === s[1]; }, 'issquare(A)');
def('isnumeric', (a) => typeof a[0] === 'number' || (isTensor(a[0]) && a[0].dtype !== 'u8') || typeOf(a[0]) === 'sparse', 'isnumeric(A)');
def('isreal', (a) => typeof a[0] === 'number' || typeof a[0] === 'boolean' || isTensor(a[0]) || typeOf(a[0]) === 'sparse', 'isreal(A)');
def('isfloat', (a) => typeof a[0] === 'number' || (isTensor(a[0]) && !a[0].dtype), 'isfloat(A)');
def('islogical', (a) => typeof a[0] === 'boolean' || (isTensor(a[0]) && a[0].dtype === 'u8'), 'islogical(A)');
def('ischar', (a) => typeof a[0] === 'string', 'ischar(A)');
def('isstring', (a) => typeof a[0] === 'string', 'isstring(A)');
def('iscell', (a) => typeOf(a[0]) === 'cell', 'iscell(A)');
def('isstruct', (a) => typeOf(a[0]) === 'struct', 'isstruct(A)');
def('iscellstr', (a) => typeOf(a[0]) === 'cell' && a[0].items.every(isStr), 'iscellstr(A)');
def('isa', (a) => { const c = S(a[1], t('script.core.what.isa_class')); const k = classOf(a[0]); if (c === k) return true; if (c === 'numeric') return k === 'double' || k === 'int32' || k === 'single'; if (c === 'float') return k === 'double'; return c === 'sparse' && typeOf(a[0]) === 'sparse'; }, 'isa(A, class)');
def('class', (a) => classOf(a[0]), 'class(A)');
function classOf(v) { const t = typeOf(v); return t === 'number' ? 'double' : t === 'bool' ? 'logical' : t === 'string' ? 'char' : t === 'tensor' ? (v.dtype === 'u8' ? 'logical' : v.dtype === 'i32' ? 'int32' : 'double') : t === 'func' ? 'function_handle' : t === 'sparse' ? 'double' : t; }
def('double', (a) => { const v = dense(a[0]); if (typeof v === 'number') return v; if (typeof v === 'boolean') return +v; const t = T(v, 'double'); return t.dtype || t.data.length === 1 ? out(t.shape, Float64Array.from(t.data)) : t; }, 'double(A)');
def('single', (a) => { const t = T(a[0], 'single'); return out(t.shape, Float64Array.from(t.data, Math.fround)); }, 'single(A)');
def('logical', (a) => { const v = dense(a[0]); if (typeof v === 'boolean') return v; if (typeof v === 'number') { if (v !== v) throw err(t('script.core.logical_nan')); return v !== 0; } const tv = T(v, 'logical'); const o = new Uint8Array(tv.data.length); for (let i = 0; i < o.length; i++) { if (tv.data[i] !== tv.data[i]) throw err(t('script.core.logical_nan')); o[i] = tv.data[i] !== 0 ? 1 : 0; } return bool(tv.shape, o); }, 'logical(A)');
for (const name of ['int32', 'int64', 'int16', 'int8', 'uint8', 'uint16', 'uint32', 'uint64']) def(name, (a) => K.map(T(a[0], name), (x) => (x !== x ? 0 : Math.round(x))), `${name}(A)`);
def('squeeze', (a) => { const t = T(a[0], 'squeeze'); if (t.shape.length <= 2) return t; const s = t.shape.filter((x) => x !== 1); while (s.length < 2) s.push(1); return tensor(s, t.data.slice()); }, 'squeeze(A)');
def('permute', (a) => {
  const tv = T(a[0], 'permute'), p = Array.from(T(a[1], 'permute').data, (x) => x - 1), nd = p.length;
  const s = tv.shape.slice(); while (s.length < nd) s.push(1);
  if (p.slice().sort((x, y) => x - y).some((x, i) => x !== i)) throw err(t('script.core.permute_order'));
  const os = p.map((k) => s[k]), st = []; { let m = 1; for (let k = 0; k < nd; k++) { st.push(m); m *= s[k]; } }
  const o = new (tv.data.constructor)(tv.data.length), idx = new Array(nd).fill(0);
  for (let q = 0; q < o.length; q++) { let src = 0; for (let k = 0; k < nd; k++) src += idx[k] * st[p[k]]; o[q] = tv.data[src]; for (let k = 0; k < nd; k++) { if (++idx[k] < os[k]) break; idx[k] = 0; } }
  return tensor(os, o);
}, 'permute(A, order)');
def('flip', (a) => flipDim(a[0], a[1] === undefined ? null : I(a[1], 'flip') - 1), 'flip(A, dim)');
def('fliplr', (a) => flipDim(a[0], 1), 'fliplr(A)');
def('flipud', (a) => flipDim(a[0], 0), 'flipud(A)');
function flipDim(v, dim) {
  if (isStr(v)) return [...v].reverse().join('');
  const t = T(v, 'flip');
  if (dim === null) dim = K.defaultDim(t.shape);
  const s = t.shape.slice(); while (s.length <= dim) s.push(1);
  let inner = 1; for (let k = 0; k < dim; k++) inner *= s[k];
  const len = s[dim], outer = t.data.length / (inner * len || 1), o = new (t.data.constructor)(t.data.length);
  for (let q = 0; q < outer; q++) for (let k = 0; k < len; k++) for (let i = 0; i < inner; i++) o[q * inner * len + k * inner + i] = t.data[q * inner * len + (len - 1 - k) * inner + i];
  return tensor(t.shape, o);
}
def('circshift', (a) => {
  const tv = T(a[0], 'circshift'), sh = T(a[1], 'circshift');
  let shifts = Array.from(sh.data), dims;
  if (a[2] !== undefined) { dims = [I(a[2], t('script.core.what.circshift_dim')) - 1]; }
  else if (shifts.length === 1) dims = [K.defaultDim(tv.shape)];
  else dims = shifts.map((_, i) => i);
  const s = tv.shape.slice(); while (s.length <= Math.max(...dims)) s.push(1);
  const full = new Array(s.length).fill(0); dims.forEach((d, i) => { full[d] = shifts[i]; });
  const st = []; { let m = 1; for (const x of s) { st.push(m); m *= x; } }
  const o = new (tv.data.constructor)(tv.data.length), idx = new Array(s.length).fill(0);
  for (let q = 0; q < o.length; q++) { let dst = 0; for (let k = 0; k < s.length; k++) dst += (((idx[k] + full[k]) % s[k] + s[k]) % s[k]) * st[k]; o[dst] = tv.data[q]; for (let k = 0; k < s.length; k++) { if (++idx[k] < s[k]) break; idx[k] = 0; } }
  return tensor(tv.shape, o);
}, 'circshift(A, k, dim)');
def('rot90', (a) => { let t = T(a[0], 'rot90'); let k = a[1] === undefined ? 1 : I(a[1], 'rot90'); k = ((k % 4) + 4) % 4; for (let i = 0; i < k; i++) t = flipDim(K.transpose(t), 0); return t; }, 'rot90(A, k)');
def('sub2ind', (a) => { const s = Array.from(T(a[0], 'sub2ind').data); const subs = a.slice(1).map((x) => T(x, 'sub2ind')); const n = subs[0].data.length; const o = new Float64Array(n); for (let i = 0; i < n; i++) { let ix = 0, m = 1; for (let k = 0; k < subs.length; k++) { const v = subs[k].data[i]; const lim = k < subs.length - 1 ? s[k] : prodOf(s.slice(k)); if (!(v >= 1 && v <= lim && Number.isInteger(v))) throw err(t('script.core.sub2ind_range', { v })); ix += (v - 1) * m; m *= s[k] ?? 1; } o[i] = ix + 1; } return out(subs[0].shape, o); }, 'sub2ind(sz, r, c, …)');
def('ind2sub', (a, ctx) => { const s = Array.from(T(a[0], 'ind2sub').data); const ix = T(a[1], 'ind2sub'); const no = Math.max(1, ctx.nargout); const outs = Array.from({ length: no }, () => new Float64Array(ix.data.length)); for (let i = 0; i < ix.data.length; i++) { let r = ix.data[i] - 1; for (let k = 0; k < no; k++) { if (k === no - 1) outs[k][i] = r + 1; else { const d = s[k] ?? 1; outs[k][i] = (r % d) + 1; r = Math.floor(r / d); } } } const res = outs.map((o) => out(ix.shape, o)); return no > 1 ? res : res[0]; }, '[r, c] = ind2sub(sz, idx)');

/* ------------------------------------------------------------------ elementwise maths */

const MATH1 = {
  // the transcendental ones are field/detmath.js's (+ − × ÷ and sqrt only), so a script gives the same bits in Node, Chrome, Firefox and Safari
  abs: Math.abs, sqrt: Math.sqrt, exp: dexp, log: dlog, log2: dlog2, log10: dlog10,
  log1p: (x) => (Math.abs(x) < 1e-4 ? x - x * x / 2 + x * x * x / 3 : dlog(1 + x)), expm1: (x) => (Math.abs(x) < 1e-4 ? x + x * x / 2 + x * x * x / 6 : dexp(x) - 1),
  sin: dsin, cos: dcos, tan: dtan, asin: dasin, acos: dacos, atan: datan, sinh: dsinh, cosh: dcosh, tanh: dtanh,
  asinh: (x) => (x < 0 ? -1 : 1) * dlog(Math.abs(x) + Math.sqrt(x * x + 1)), acosh: (x) => (x < 1 ? NaN : dlog(x + Math.sqrt(x * x - 1))), atanh: (x) => (x > 1 || x < -1 ? NaN : 0.5 * dlog((1 + x) / (1 - x))),
  floor: Math.floor, ceil: Math.ceil, fix: Math.trunc,
  round: (x) => (x < 0 ? -Math.round(-x) : Math.round(x)), sign: Math.sign, cbrt: dcbrt,
  sind: (x) => dsin(x * Math.PI / 180), cosd: (x) => dcos(x * Math.PI / 180), tand: (x) => dtan(x * Math.PI / 180),
  deg2rad: (x) => x * Math.PI / 180, rad2deg: (x) => x * 180 / Math.PI, gamma, factorial: (x) => (x < 0 || !Number.isInteger(x) ? NaN : gamma(x + 1)),
  real: (x) => x, conj: (x) => x, imag: () => 0,
};
for (const [name, f] of Object.entries(MATH1)) def(name, (a) => {
  if (a.length < 1) throw err(t('script.core.needs_arg', { name }));
  if (name === 'round' && a[1] !== undefined) { const d = I(a[1], t('script.core.what.round_digits')), m = 10 ** d; return K.map(T(a[0], 'round'), (x) => MATH1.round(x * m) / m); }
  return K.map(dense(a[0]), f, name);
}, `${name}(x)`);
function gamma(x) {
  if (Number.isInteger(x)) { if (x <= 0) return Infinity; if (x < 171) { let r = 1; for (let i = 2; i < x; i++) r *= i; return r; } return Infinity; }
  if (x < 0.5) return Math.PI / (dsin(Math.PI * x) * gamma(1 - x));
  const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  x -= 1; let s = c[0]; for (let i = 1; i < g + 2; i++) s += c[i] / (x + i);
  const t = x + g + 0.5;
  return Math.sqrt(2 * Math.PI) * dpow(t, x + 0.5) * dexp(-t) * s;
}
def('isnan', (a) => { const v = dense(a[0]); if (typeof v === 'number') return v !== v; const t = T(v, 'isnan'); const o = new Uint8Array(t.data.length); for (let i = 0; i < o.length; i++) o[i] = t.data[i] !== t.data[i] ? 1 : 0; return bool(t.shape, o); }, 'isnan(x)');
def('isinf', (a) => { const v = dense(a[0]); if (typeof v === 'number') return v === Infinity || v === -Infinity; const t = T(v, 'isinf'); const o = new Uint8Array(t.data.length); for (let i = 0; i < o.length; i++) o[i] = t.data[i] === Infinity || t.data[i] === -Infinity ? 1 : 0; return bool(t.shape, o); }, 'isinf(x)');
def('isfinite', (a) => { const v = dense(a[0]); if (typeof v === 'number') return Number.isFinite(v); const t = T(v, 'isfinite'); const o = new Uint8Array(t.data.length); for (let i = 0; i < o.length; i++) o[i] = Number.isFinite(t.data[i]) ? 1 : 0; return bool(t.shape, o); }, 'isfinite(x)');
for (const [name, op] of [['plus', '+'], ['minus', '-'], ['times', '.*'], ['rdivide', './'], ['ldivide', '.\\'], ['power', '.^'], ['eq', '=='], ['ne', '~='], ['lt', '<'], ['le', '<='], ['gt', '>'], ['ge', '>='], ['and', '&'], ['or', '|'], ['mod', 'mod'], ['rem', 'rem'], ['atan2', 'atan2'], ['hypot', 'hypot']]) {
  def(name, (a) => { if (a.length !== 2) throw err(t('script.core.two_args', { name })); return K.binop(op, dense(a[0]), dense(a[1])); }, `${name}(a, b)`);
}
def('mtimes', (a) => K.matmul(dense(a[0]), dense(a[1])), 'mtimes(A, B)');
def('not', (a) => K.unop('not', dense(a[0])), 'not(a)');
def('xor', (a) => { const x = K.binop('~=', K.unop('not', K.unop('not', dense(a[0]))), K.unop('not', K.unop('not', dense(a[1])))); return x; }, 'xor(a, b)');
def('uminus', (a) => K.unop('neg', dense(a[0])), 'uminus(a)');
def('transpose', (a) => K.transpose(dense(a[0])), 'transpose(A)');
def('ctranspose', (a) => K.transpose(dense(a[0])), 'ctranspose(A)');
def('nthroot', (a) => elem2(a, (x, n) => (x < 0 && n % 2 === 1 ? -dpow(-x, 1 / n) : dpow(x, 1 / n)), 'nthroot'), 'nthroot(x, n)');
def('nchoosek', (a) => { const n = I(a[0], 'nchoosek: n'), k = I(a[1], 'nchoosek: k'); if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= Math.min(k, n - k); i++) r = r * (n - Math.min(k, n - k) + i) / i; return Math.round(r); }, 'nchoosek(n, k)');
def('gcd', (a) => elem2(a, (x, y) => { x = Math.abs(x); y = Math.abs(y); while (y) [x, y] = [y, x % y]; return x; }, 'gcd'), 'gcd(a, b)');
def('lcm', (a) => elem2(a, (x, y) => { let p = Math.abs(x), q = Math.abs(y), g = p, h = q; while (h) [g, h] = [h, g % h]; return g ? p * q / g : 0; }, 'lcm'), 'lcm(a, b)');
function elem2(a, f, name) {
  const A = T(a[0], name), B = T(a[1], name);
  if (A.data.length === 1) return K.map(B, (y) => f(A.data[0], y));
  if (B.data.length === 1) return K.map(A, (x) => f(x, B.data[0]));
  if (A.data.length !== B.data.length) throw err(t('script.core.sizes_mismatch', { name }));
  const o = new Float64Array(A.data.length); for (let i = 0; i < o.length; i++) o[i] = f(A.data[i], B.data[i]);
  return out(A.shape, o);
}

/* ------------------------------------------------------------------ reductions */

function sparseSum(v, dim) {
  if (dim === 1) { const o = new Float64Array(v.n); for (let i = 0; i < v.n; i++) { let s = 0; for (let k = v.rowPtr[i]; k < v.rowPtr[i + 1]; k++) s += v.val[k]; o[i] = s; } return out([v.n, 1], o); }
  if (dim === 0 || dim === null) { const o = new Float64Array(v.m); for (let k = 0; k < v.val.length; k++) o[v.col[k]] += v.val[k]; return v.n === 1 && dim === null ? sparseSum(v, 1) : out([1, v.m], o); }
  return dense(v);
}
function reduceArgs(name, a) {
  let dim = null, all = false;
  for (const x of a.slice(1)) {
    if (x === 'all') all = true;
    else if (isStr(x)) { if (!['omitnan', 'includenan', 'double', 'native', 'default'].includes(x)) throw err(t('script.core.unknown_option', { name, x })); }
    else dim = dimArg(x, name);
  }
  return { dim, all };
}
for (const kind of ['sum', 'prod', 'mean', 'any', 'all']) def(kind, (a) => {
  if (!a.length) throw err(t('script.core.needs_arg', { name: kind }));
  const { dim, all } = reduceArgs(kind, a);
  if (kind === 'sum' && a[0] && a[0].t === 'sparse' && !all) return sparseSum(a[0], dim);
  let v = dense(a[0]);
  if (all) { const t = T(v, kind); v = tensor([t.data.length, 1], t.data); return K.reduce(kind, v, 0).value; }
  if (isStr(v)) v = K.charCodes(v);
  return K.reduce(kind, v, dim).value;
}, `${kind}(A) | ${kind}(A, dim) | ${kind}(A, 'all')`);   // i18n-ignore: call signature (code)
for (const kind of ['max', 'min']) def(kind, (a, ctx) => {
  if (!a.length) throw err(t('script.core.needs_arg', { name: kind }));
  if (a.length >= 2 && !(isTensor(a[1]) && a[1].data.length === 0)) {   // elementwise max(a, b)
    if (ctx.nargout > 1) throw err(t('script.core.minmax_two', { name: kind }));
    return K.binop(kind, dense(a[0]), dense(a[1]));
  }
  let dim = a.length >= 3 ? dimArg(a[2], kind) : null;
  let v = dense(a[0]);
  if (a[2] === 'all') { const t = T(v, kind); v = tensor([t.data.length, 1], t.data); dim = 0; }
  const r = K.reduce(kind, isStr(v) ? K.charCodes(v) : v, dim);
  return ctx.nargout > 1 ? [r.value, r.index] : r.value;
}, `${kind}(A) | ${kind}(A, [], dim) | ${kind}(a, b) | [m, i] = ${kind}(A)`);
for (const [name, prod] of [['cumsum', false], ['cumprod', true]]) def(name, (a) => {
  const t = T(a[0], name), dim = a[1] === undefined ? K.defaultDim(t.shape) : dimArg(a[1], name);
  const s = t.shape.slice(); while (s.length <= dim) s.push(1);
  let inner = 1; for (let k = 0; k < dim; k++) inner *= s[k];
  const len = s[dim], outer = t.data.length / (inner * len || 1), o = new Float64Array(t.data.length);
  for (let q = 0; q < outer; q++) for (let i = 0; i < inner; i++) { let acc = prod ? 1 : 0; for (let k = 0; k < len; k++) { const p = q * inner * len + k * inner + i; acc = prod ? acc * t.data[p] : acc + t.data[p]; o[p] = acc; } }
  return out(t.shape, o);
}, `${name}(A, dim)`);   // i18n-ignore: call signature (code)
def('median', (a) => statAlong(a, 'median', (x) => { const s = Float64Array.from(x).sort(); const n = s.length; return n === 0 ? NaN : n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }), 'median(A, dim)');
def('var', (a) => statAlong([a[0], a[2]].filter((x) => x !== undefined), 'var', (x) => variance(x, a[1])), 'var(A, w, dim)');
def('std', (a) => statAlong([a[0], a[2]].filter((x) => x !== undefined), 'std', (x) => Math.sqrt(variance(x, a[1]))), 'std(A, w, dim)');
function variance(x, w) { const n = x.length; if (n <= 1) return 0; let m = 0; for (const v of x) m += v; m /= n; let s = 0; for (const v of x) s += (v - m) ** 2; const ww = w === undefined || (isTensor(w) && !w.data.length) ? 0 : N(w); return s / (ww === 1 ? n : n - 1); }
function statAlong(a, name, f) {
  const t = T(a[0], name), dim = a[1] === undefined ? K.defaultDim(t.shape) : dimArg(a[1], name);
  const s = t.shape.slice(); while (s.length <= dim) s.push(1);
  let inner = 1; for (let k = 0; k < dim; k++) inner *= s[k];
  const len = s[dim], outer = t.data.length / (inner * len || 1), os = s.slice(); os[dim] = 1;
  const o = new Float64Array(inner * outer), buf = new Float64Array(len);
  for (let q = 0; q < outer; q++) for (let i = 0; i < inner; i++) { for (let k = 0; k < len; k++) buf[k] = t.data[q * inner * len + k * inner + i]; o[q * inner + i] = f(buf); }
  return out(os, o);
}
def('dot', (a) => { const x = T(a[0], 'dot'), y = T(a[1], 'dot'); if (x.data.length !== y.data.length) throw err(t('script.core.dot_len', { a: x.data.length, b: y.data.length })); let s = 0; for (let i = 0; i < x.data.length; i++) s += x.data[i] * y.data[i]; return s; }, 'dot(a, b)');
def('cross', (a) => { const x = T(a[0], 'cross'), y = T(a[1], 'cross'); if (x.data.length !== 3 || y.data.length !== 3) throw err(t('script.core.cross_3')); const [p, q, r] = x.data, [u, v, w] = y.data; return tensor(x.shape, Float64Array.of(q * w - r * v, r * u - p * w, p * v - q * u)); }, 'cross(a, b)');
def('diff', (a) => {
  let t = T(a[0], 'diff'); const n = a[1] === undefined ? 1 : I(a[1], 'diff: n');
  for (let r = 0; r < n; r++) {
    const dim = a[2] === undefined ? K.defaultDim(t.shape) : dimArg(a[2], 'diff');
    const s = t.shape.slice(); while (s.length <= dim) s.push(1);
    let inner = 1; for (let k = 0; k < dim; k++) inner *= s[k];
    const len = s[dim], outer = t.data.length / (inner * len || 1), os = s.slice(); os[dim] = Math.max(0, len - 1);
    const o = new Float64Array(prodOf(os));
    for (let q = 0; q < outer; q++) for (let k = 0; k < len - 1; k++) for (let i = 0; i < inner; i++) o[q * inner * (len - 1) + k * inner + i] = t.data[q * inner * len + (k + 1) * inner + i] - t.data[q * inner * len + k * inner + i];
    t = tensor(os, o);
  }
  return out(t.shape, t.data);
}, 'diff(x, n, dim)');
def('trapz', (a) => { if (a.length === 1) { const y = T(a[0], 'trapz').data; let s = 0; for (let i = 1; i < y.length; i++) s += (y[i] + y[i - 1]) / 2; return s; } const x = T(a[0], 'trapz').data, y = T(a[1], 'trapz').data; if (x.length !== y.length) throw err(t('script.core.trapz_len')); let s = 0; for (let i = 1; i < y.length; i++) s += (x[i] - x[i - 1]) * (y[i] + y[i - 1]) / 2; return s; }, 'trapz(y) | trapz(x, y)');
def('find', (a, ctx) => {
  const t = T(a[0], 'find'), lim = a[1] === undefined ? Infinity : I(a[1], 'find: n'), last = a[2] === 'last';
  const idx = [];
  if (last) { for (let i = t.data.length - 1; i >= 0 && idx.length < lim; i--) if (t.data[i] !== 0) idx.unshift(i); }
  else for (let i = 0; i < t.data.length && idx.length < lim; i++) if (t.data[i] !== 0) idx.push(i);
  const isRow = t.shape.length === 2 && t.shape[0] === 1 && t.shape[1] !== 1;
  const mk = (arr) => (isRow ? tensor([arr.length ? 1 : 1, arr.length], Float64Array.from(arr)) : tensor([arr.length, arr.length ? 1 : (t.data.length === 0 ? 0 : 1)], Float64Array.from(arr)));
  const one = (arr) => { const v = mk(arr); return v.data.length === 1 ? v.data[0] : (v.data.length === 0 ? tensor(isRow ? [1, 0] : [0, 1]) : v); };
  if (ctx.nargout <= 1) return one(idx.map((i) => i + 1));
  const r = t.shape[0];
  const res = [one(idx.map((i) => (i % r) + 1)), one(idx.map((i) => Math.floor(i / r) + 1))];
  if (ctx.nargout > 2) res.push(one(idx.map((i) => t.data[i])));
  return res;
}, 'find(x) | find(x, n) | [r, c, v] = find(A)');
def('sort', (a, ctx) => {
  let v = dense(a[0]);
  let dim = null, desc = false;
  for (const x of a.slice(1)) { if (x === 'descend') desc = true; else if (x === 'ascend') desc = false; else dim = dimArg(x, 'sort'); }
  if (v && v.t === 'cell') {
    if (!v.items.every(isStr)) throw err(t('script.core.sort_cell'));
    const ix = v.items.map((s, i) => i).sort((p, q) => (v.items[p] < v.items[q] ? -1 : v.items[p] > v.items[q] ? 1 : p - q));
    if (desc) ix.reverse();
    const c = cell(ix.map((i) => v.items[i]), sizeOf(v).slice());
    return ctx.nargout > 1 ? [c, out(sizeOf(v), Float64Array.from(ix, (i) => i + 1))] : c;
  }
  if (isStr(v)) { const s = [...v].sort(); if (desc) s.reverse(); return s.join(''); }
  const tv = T(v, 'sort');
  if (dim === null) dim = K.defaultDim(tv.shape);
  const s = tv.shape.slice(); while (s.length <= dim) s.push(1);
  let inner = 1; for (let k = 0; k < dim; k++) inner *= s[k];
  const len = s[dim], outer = tv.data.length / (inner * len || 1);
  const o = new Float64Array(tv.data.length), oi = new Float64Array(tv.data.length), ix = new Array(len);
  for (let q = 0; q < outer; q++) for (let i = 0; i < inner; i++) {
    const base = q * inner * len + i;
    for (let k = 0; k < len; k++) ix[k] = k;
    ix.sort((p, r) => { const x = tv.data[base + p * inner], y = tv.data[base + r * inner]; if (x !== x) return y !== y ? p - r : 1; if (y !== y) return -1; return desc ? (y - x || p - r) : (x - y || p - r); });
    for (let k = 0; k < len; k++) { o[base + k * inner] = tv.data[base + ix[k] * inner]; oi[base + k * inner] = ix[k] + 1; }
  }
  const res = out(tv.shape, o);
  return ctx.nargout > 1 ? [res, out(tv.shape, oi)] : res;
}, '[B, i] = sort(A, dim, \'descend\')');
function sortedUnique(arr) { const s = Float64Array.from(arr).sort(); const o = []; for (let i = 0; i < s.length; i++) if (i === 0 || s[i] !== s[i - 1] || (s[i] !== s[i] && false)) o.push(s[i]); return o; }
const orient = (v, arr, both) => { const s = sizeOf(v); const isRow = s.length === 2 && s[0] === 1 && (both === undefined || both); return isRow ? row(arr) : col(arr); };
def('unique', (a, ctx) => {
  const v = dense(a[0]);
  if (v && v.t === 'cell') { const u = [...new Set(v.items.map((x) => S(x, t('script.core.what.unique_cell'))))].sort(); return cell(u, [u.length, 1]); }
  if (isStr(v)) return [...new Set(v)].sort().join('');
  const tv = T(v, 'unique');
  const stable = a.includes('stable');
  const u = stable ? [...new Set(tv.data)] : sortedUnique(tv.data);
  const isRow = tv.shape.length === 2 && tv.shape[0] === 1;
  const C = isRow ? row(u) : col(u);
  if (ctx.nargout <= 1) return C.data.length === 1 ? C.data[0] : C;
  const pos = new Map(); u.forEach((x, i) => pos.set(x, i));
  const first = new Float64Array(u.length).fill(0), ic = new Float64Array(tv.data.length);
  for (let i = tv.data.length - 1; i >= 0; i--) { const k = pos.get(tv.data[i]); first[k] = i + 1; ic[i] = k + 1; }
  // MATLAB: ia = first occurrence
  const fst = new Float64Array(u.length).fill(-1);
  for (let i = 0; i < tv.data.length; i++) { const k = pos.get(tv.data[i]); if (fst[k] < 0) fst[k] = i + 1; }
  return [C, col(Array.from(fst)), col(Array.from(ic))];
}, '[C, ia, ic] = unique(A) | unique(A, \'stable\')');
for (const [name, op] of [['union', 'u'], ['intersect', 'i'], ['setdiff', 'd']]) def(name, (a, ctx) => {
  const A = dense(a[0]), B = dense(a[1]);
  if ((A && A.t === 'cell') || (B && B.t === 'cell')) {
    const x = A.t === 'cell' ? A.items : [A], y = B.t === 'cell' ? B.items : [B];
    const sy = new Set(y), sx = new Set(x);
    const r = op === 'u' ? [...new Set([...x, ...y])] : op === 'i' ? [...sx].filter((e) => sy.has(e)) : [...sx].filter((e) => !sy.has(e));
    r.sort();
    return cell(r, [1, r.length]);
  }
  const x = T(A, name).data, y = T(B, name).data;
  const sy = new Set(y);
  let r;
  if (op === 'u') r = sortedUnique([...x, ...y]);
  else if (op === 'i') r = sortedUnique(Array.from(x).filter((e) => sy.has(e)));
  else r = sortedUnique(Array.from(x).filter((e) => !sy.has(e)));
  const sA = sizeOf(A), sB = sizeOf(B);
  const rowA = sA.length === 2 && sA[0] === 1, rowB = sB.length === 2 && sB[0] === 1;
  const asRow = op === 'd' ? rowA || numelOf(A) === 0 : (rowA || numelOf(A) === 0) && (rowB || numelOf(B) === 0);
  const res = asRow ? (r.length ? row(r) : tensor([1, 0])) : (r.length ? col(r) : tensor([0, 1]));
  const v = res.data.length === 1 ? res.data[0] : res;
  if (ctx.nargout > 1 && op !== 'u') { const pos = new Map(); for (let i = x.length - 1; i >= 0; i--) pos.set(x[i], i + 1); return [v, col(r.map((e) => pos.get(e)))]; }
  return v;
}, `${name}(A, B)`);
def('ismember', (a, ctx) => {
  const A = dense(a[0]), B = dense(a[1]);
  if (isStr(A) && B && B.t === 'cell') { const i = B.items.indexOf(A); return ctx.nargout > 1 ? [i >= 0, i + 1] : i >= 0; }
  if (A && A.t === 'cell') { const set = B.t === 'cell' ? B.items : [B]; const o = new Uint8Array(A.items.length); A.items.forEach((x, i) => { o[i] = set.includes(x) ? 1 : 0; }); return bool(sizeOf(A), o); }
  const x = T(A, 'ismember'), y = T(B, 'ismember').data;
  const pos = new Map(); for (let i = y.length - 1; i >= 0; i--) pos.set(y[i], i + 1);
  const o = new Uint8Array(x.data.length), loc = new Float64Array(x.data.length);
  for (let i = 0; i < o.length; i++) { const p = pos.get(x.data[i]); o[i] = p ? 1 : 0; loc[i] = p || 0; }
  return ctx.nargout > 1 ? [bool(x.shape, o), out(x.shape, loc)] : bool(x.shape, o);
}, '[tf, loc] = ismember(A, B)');
def('accumarray', (a) => {
  const subs = T(a[0], 'accumarray'), vals = T(a[1], 'accumarray');
  const [n, d] = subs.shape;
  if (d > 2) throw err(t('script.core.accumarray_cols'));
  let sz;
  if (a[2] !== undefined && !(isTensor(a[2]) && !a[2].data.length)) sz = Array.from(T(a[2], t('script.core.what.accumarray_size')).data);
  else { sz = [0, 1]; for (let i = 0; i < n; i++) { sz[0] = Math.max(sz[0], subs.data[i]); if (d === 2) sz[1] = Math.max(sz[1], subs.data[i + n]); } }
  const o = new Float64Array(prodOf(sz)), vs = vals.data.length === 1 ? null : vals.data;
  if (vs && vs.length !== n) throw err(t('script.core.accumarray_count', { n, m: vs.length }));
  for (let i = 0; i < n; i++) {
    const r = subs.data[i] - 1, c = d === 2 ? subs.data[i + n] - 1 : 0;
    if (!(r >= 0 && r < sz[0] && c >= 0 && c < (sz[1] ?? 1)) || !Number.isInteger(r) || !Number.isInteger(c)) throw err(t('script.core.accumarray_range', { i: i + 1 }));
    o[r + c * sz[0]] += vs ? vs[i] : vals.data[0];
  }
  return out(sz, o);
}, 'accumarray(subs, vals, sz)');
def('histc', (a) => { const x = T(a[0], 'histc').data, e = T(a[1], 'histc').data; const o = new Float64Array(e.length); for (const v of x) { for (let k = e.length - 1; k >= 0; k--) { if (k === e.length - 1 ? v === e[k] : v >= e[k] && v < e[k + 1]) { o[k]++; break; } } } return out(sizeOf(a[1]), o); }, 'histc(x, edges)');
def('interp1', (a) => {
  const x = T(a[0], 'interp1').data, y = T(a[1], 'interp1').data, xi = T(a[2], 'interp1');
  const method = isStr(a[3]) ? a[3] : 'linear', extrap = a[a.length - 1] === 'extrap' ? true : (typeof a[a.length - 1] === 'number' && a.length >= 5 ? a[a.length - 1] : null);
  if (x.length !== y.length || x.length < 2) throw err(t('script.core.interp1_len'));
  for (let i = 1; i < x.length; i++) if (!(x[i] > x[i - 1])) throw err(t('script.core.interp1_increasing'));
  const o = K.map(xi, (q) => {
    if (q < x[0] || q > x[x.length - 1]) { if (extrap === null) return NaN; if (typeof extrap === 'number') return extrap; }
    let lo = 0, hi = x.length - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (x[m] <= q) lo = m; else hi = m; }
    if (q < x[0]) { lo = 0; hi = 1; } else if (q > x[x.length - 1]) { lo = x.length - 2; hi = x.length - 1; }
    if (method === 'nearest') return q - x[lo] <= x[hi] - q ? y[lo] : y[hi];
    if (method === 'previous') return q >= x[hi] ? y[hi] : y[lo];
    return y[lo] + (y[hi] - y[lo]) * (q - x[lo]) / (x[hi] - x[lo]);
  });
  return o;
}, 'interp1(x, y, xi, method, \'extrap\')');
def('polyval', (a) => { const p = T(a[0], 'polyval').data; return K.map(dense(a[1]), (x) => { let s = 0; for (const c of p) s = s * x + c; return s; }); }, 'polyval(p, x)');
def('polyfit', (a) => { const x = T(a[0], 'polyfit').data, y = T(a[1], 'polyfit').data, n = I(a[2], t('script.core.what.polyfit_degree')); const m = x.length; const V = new Float64Array(m * (n + 1)); for (let i = 0; i < m; i++) for (let j = 0; j <= n; j++) V[i + j * m] = x[i] ** (n - j); const p = K.solve(tensor([m, n + 1], V), tensor([m, 1], Float64Array.from(y))); return K.transpose(typeof p === 'number' ? tensor([1, 1], Float64Array.of(p)) : p); }, 'polyfit(x, y, n)');
def('isequal', (a) => { for (let i = 1; i < a.length; i++) if (!equal(a[0], a[i])) return false; return true; }, 'isequal(A, B, …)');
function equal(x, y) {
  x = dense(x); y = dense(y);
  if (isStr(x) || isStr(y)) return isStr(x) && isStr(y) && x === y;
  const tx = typeOf(x), ty = typeOf(y);
  if ((tx === 'number' || tx === 'bool' || tx === 'tensor') && (ty === 'number' || ty === 'bool' || ty === 'tensor')) {
    const A = asTensor(x), B = asTensor(y);
    if (A.shape.length !== B.shape.length || A.shape.some((s, i) => s !== B.shape[i])) return false;
    for (let i = 0; i < A.data.length; i++) if (A.data[i] !== B.data[i]) return false;
    return true;
  }
  if (tx !== ty) return false;
  if (tx === 'cell') return x.items.length === y.items.length && sizeOf(x).join() === sizeOf(y).join() && x.items.every((v, i) => equal(v, y.items[i]));
  if (tx === 'struct') { const kx = Object.keys(x.fields).sort(), ky = Object.keys(y.fields).sort(); return kx.join() === ky.join() && kx.every((k) => equal(x.fields[k], y.fields[k])); }
  if (tx === 'func') return x.name === y.name;
  return x === y;
}

/* ------------------------------------------------------------------ text */

const ESC = { n: '\n', t: '\t', r: '\r', a: '\x07', b: '\b', f: '\f', v: '\v', '\\': '\\', '"': '"', "'": "'" };
function unescape(s) {
  return s.replace(/\\(x[0-9a-fA-F]{1,4}|[0-7]{1,3}|.)/g, (m, c) => { if (c[0] === 'x') return String.fromCharCode(parseInt(c.slice(1), 16)); if (/^[0-7]+$/.test(c)) return String.fromCharCode(parseInt(c, 8)); return ESC[c] ?? m; });
}
function expEx(s) { return s.replace(/e([+-])(\d)$/, 'e$10$2'); }
function fmtG(x, p, alt, upper) {
  if (p === 0) p = 1;
  if (x === 0) return alt ? (0).toFixed(p - 1) : '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  let s;
  const ex = Number(x.toExponential(p - 1).split('e')[1]);
  if (ex < -4 || ex >= p) { s = x.toExponential(p - 1); if (!alt) s = s.replace(/\.?0+e/, 'e'); s = expEx(s); }
  else { s = x.toFixed(Math.max(0, p - 1 - ex)); if (!alt && s.includes('.')) s = s.replace(/\.?0+$/, ''); }
  void e;
  return upper ? s.toUpperCase() : s;
}
/** MATLAB/C sprintf: %[flags][width][.prec](d i u f F e E g G x X o c s %), recycling the format over the arguments. */
export function sprintf(fmt, args) {
  fmt = unescape(fmt);
  const atoms = [];
  for (const v0 of args) {
    const v = dense(v0);
    if (isStr(v)) atoms.push(v);
    else if (typeof v === 'number' || typeof v === 'boolean') atoms.push(+v);
    else if (isTensor(v)) for (let i = 0; i < v.data.length; i++) atoms.push(v.data[i]);
    else if (v && v.t === 'cell') { for (const x of v.items) atoms.push(isStr(x) ? x : N(x, 'sprintf')); }
    else throw err(t('script.core.sprintf_cannot', { what: describe(v) }));
  }
  const re = /%(%|([-+ 0#]*)(\*|\d+)?(?:\.(\*|\d+))?([diufFeEgGxXocs]))/g;
  const specs = [...fmt.matchAll(re)].filter((m) => m[1] !== '%');
  let res = '', k = 0;
  const conv = (m) => {
    if (m[1] === '%') return '%';
    let [, , flags = '', w, p, c] = m;
    if (w === '*') w = String(atoms[k++] ?? 0);
    if (p === '*') p = String(atoms[k++] ?? 0);
    const width = w === undefined ? 0 : Number(w), prec = p === undefined ? null : Number(p);
    let x = atoms[k++];
    let s;
    if (c === 's' || c === 'c') {
      s = isStr(x) ? x : c === 'c' ? String.fromCharCode(x) : fmtNum(x);
      if (prec !== null && c === 's') s = s.slice(0, prec);
    } else {
      if (isStr(x)) { if (x.length === 1) x = x.charCodeAt(0); else { s = x; } }
      if (s === undefined) {
        if (!Number.isFinite(x)) s = x !== x ? 'NaN' : x > 0 ? (flags.includes('+') ? '+Inf' : 'Inf') : '-Inf';
        else {
          if ('diu'.includes(c) && !Number.isInteger(x)) { c = 'e'; }
          const neg = x < 0 || Object.is(x, -0) && false; const ax = Math.abs(x);
          switch (c) {
            case 'd': case 'i': case 'u': s = String(ax); break;
            case 'f': case 'F': s = ax.toFixed(prec ?? 6); break;
            case 'e': case 'E': s = expEx(ax.toExponential(prec ?? 6)); if (c === 'E') s = s.toUpperCase(); break;
            case 'g': case 'G': s = fmtG(ax, prec ?? 6, flags.includes('#'), c === 'G'); break;
            case 'x': s = Math.trunc(ax).toString(16); break;
            case 'X': s = Math.trunc(ax).toString(16).toUpperCase(); break;
            case 'o': s = Math.trunc(ax).toString(8); break;
            default: s = String(ax);
          }
          const sign = neg ? '-' : flags.includes('+') ? '+' : flags.includes(' ') ? ' ' : '';
          if (flags.includes('0') && !flags.includes('-') && width > s.length + sign.length) s = s.padStart(width - sign.length, '0');
          s = sign + s;
        }
      }
    }
    if (s.length < width) s = flags.includes('-') ? s.padEnd(width) : s.padStart(width);
    return s;
  };
  if (!specs.length) return fmt.replace(/%%/g, '%');
  let guard = 0;
  do {
    let last = 0, stop = false;
    for (const m of fmt.matchAll(re)) {
      if (m[1] !== '%' && k >= atoms.length && (k > 0 || atoms.length > 0)) { res += fmt.slice(last, m.index); stop = true; break; }
      res += fmt.slice(last, m.index) + conv(m);
      last = m.index + m[0].length;
    }
    if (!stop) res += fmt.slice(last);
    if (stop) break;
  } while (k < atoms.length && ++guard < 1e6);
  return res;
}
def('sprintf', (a) => sprintf(S(a[0], t('script.core.what.sprintf_format')), a.slice(1)), 'sprintf(format, …)');
def('fprintf', (a, ctx) => { let args = a; if (typeof a[0] === 'number' && (a[0] === 1 || a[0] === 2) && isStr(a[1])) args = a.slice(1); if (!isStr(args[0])) { ctx.print(valueText(args[0]) + '\n'); return undefined; } ctx.print(sprintf(args[0], args.slice(1))); return undefined; }, 'fprintf(format, …)');
def('disp', (a, ctx) => { const v = a[0]; if (v === undefined) return undefined; if (isStr(v)) { ctx.print(v + '\n'); return undefined; } if (isTensor(v) && v.data.length === 0) return undefined; const t = valueText(v); ctx.print((typeof v === 'number' || typeof v === 'boolean' ? t : t) + '\n'); return undefined; }, 'disp(x)');
def('display', (a, ctx) => { ctx.print(displayText(isStr(a[1]) ? a[1] : '', a[0]) + '\n'); return undefined; }, 'display(x)');
def('num2str', (a) => {
  const v = dense(a[0]);
  if (isStr(v)) return v;
  if (isStr(a[1])) return sprintf(a[1], [v]);
  const fmt1 = (x) => {
    if (a[1] !== undefined) return fmtG(x, I(a[1], t('script.core.what.num2str_precision')), false, false);
    if (!Number.isFinite(x)) return x !== x ? 'NaN' : x > 0 ? 'Inf' : '-Inf';
    if (Number.isInteger(x)) return String(x);
    const d = Math.max(Math.ceil(Math.log10(Math.abs(x))), 1) + 4;
    return fmtG(x, d, false, false);
  };
  if (typeof v === 'number' || typeof v === 'boolean') return fmt1(+v);
  const tv = T(v, 'num2str');
  if (tv.data.length === 1) return fmt1(tv.data[0]);
  const [r, c] = tv.shape;
  if (r > 1) { const rows = []; for (let i = 0; i < r; i++) { const parts = []; for (let j = 0; j < c; j++) parts.push(fmt1(tv.data[i + j * r])); rows.push(parts.join('  ')); } return rows.join('\n'); }
  return Array.from(tv.data, fmt1).join('  ');
}, 'num2str(x) | num2str(x, precision) | num2str(x, format)');
def('int2str', (a) => { const v = K.map(dense(a[0]), MATH1.round); return typeof v === 'number' ? String(v) : Array.from(v.data, String).join('  '); }, 'int2str(x)');
def('mat2str', (a) => {
  const v = dense(a[0]); const p = a[1] === undefined ? 15 : I(a[1], t('script.core.what.mat2str_precision'));
  const f = (x) => (Number.isInteger(x) ? String(x) : !Number.isFinite(x) ? (x !== x ? 'NaN' : x > 0 ? 'Inf' : '-Inf') : String(+x.toPrecision(p)));
  if (isStr(v)) return `'${v.replace(/'/g, "''")}'`;
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'number') return f(v);
  const tv = T(v, 'mat2str'); const [r, c] = tv.shape; const lg = tv.dtype === 'u8';
  if (tv.data.length === 1) return lg ? (tv.data[0] ? 'true' : 'false') : f(tv.data[0]);
  const rows = []; for (let i = 0; i < r; i++) { const parts = []; for (let j = 0; j < c; j++) { const x = tv.data[i + j * r]; parts.push(lg ? (x ? 'true' : 'false') : f(x)); } rows.push(parts.join(' ')); }
  return '[' + rows.join(';') + ']';
}, 'mat2str(A, precision)');
def('str2double', (a) => { const v = a[0]; const one = (s) => { if (!isStr(s)) return NaN; const t = s.trim().replace(/^\+/, ''); if (/^-?inf$/i.test(t)) return t[0] === '-' ? -Infinity : Infinity; if (/^nan$/i.test(t)) return NaN; return /^[-]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(t) ? Number(t) : NaN; }; if (v && v.t === 'cell') return out(sizeOf(v), Float64Array.from(v.items, one)); return one(v); }, 'str2double(s)');
def('str2num', (a) => { const s = S(a[0], 'str2num'); const rows = s.trim().replace(/^\[|\]$/g, '').split(/;|\n/).map((r) => r.trim().split(/[\s,]+/).filter(Boolean).map((x) => Number(x))); if (rows.some((r) => r.some((x) => Number.isNaN(x)))) return empty(); const c = rows[0]?.length || 0; if (rows.some((r) => r.length !== c)) return empty(); const R = rows.length, d = new Float64Array(R * c); rows.forEach((r, i) => r.forEach((x, j) => { d[i + j * R] = x; })); return out([R, c], d); }, 'str2num(s)');
def('char', (a) => { const v = dense(a[0]); if (isStr(v)) return v; if (v && v.t === 'cell') { if (v.items.length === 1 && isStr(v.items[0])) return v.items[0]; throw err(t('script.core.char_cell')); } const tv = T(v, 'char'); return String.fromCharCode(...tv.data); }, 'char(codes)');
def('blanks', (a) => ' '.repeat(Math.max(0, I(a[0], 'blanks'))), 'blanks(n)');
def('strcat', (a) => { if (a.some((x) => x && x.t === 'cell')) { const n = Math.max(...a.map((x) => (x && x.t === 'cell' ? x.items.length : 1))); const items = []; for (let i = 0; i < n; i++) items.push(a.map((x) => (x && x.t === 'cell' ? x.items[x.items.length === 1 ? 0 : i] : x)).join('')); return cell(items, [1, n]); } return a.map((x) => (isStr(x) ? x.replace(/[ \t\n]+$/, '') : sprintf('%g', [x]))).join(''); }, 'strcat(a, b, …)');
def('strtrim', (a) => mapStr(a[0], (s) => s.trim()), 'strtrim(s)');
def('deblank', (a) => mapStr(a[0], (s) => s.replace(/\s+$/, '')), 'deblank(s)');
def('upper', (a) => mapStr(a[0], (s) => s.toUpperCase()), 'upper(s)');
def('lower', (a) => mapStr(a[0], (s) => s.toLowerCase()), 'lower(s)');
function mapStr(v, f) { if (isStr(v)) return f(v); if (v && v.t === 'cell') return cell(v.items.map((x) => f(S(x, t('script.core.what.text')))), sizeOf(v).slice()); throw err(t('script.core.expected_text', { got: describe(v) })); }
for (const [name, f] of [['strcmp', (x, y) => x === y], ['strcmpi', (x, y) => x.toLowerCase() === y.toLowerCase()]]) def(name, (a) => cmpStr(a[0], a[1], f), `${name}(a, b)`);
def('strncmp', (a) => { const n = I(a[2], 'strncmp: n'); return cmpStr(a[0], a[1], (x, y) => x.length >= n && y.length >= n && x.slice(0, n) === y.slice(0, n)); }, 'strncmp(a, b, n)');
function cmpStr(x, y, f) {
  const cx = x && x.t === 'cell', cy = y && y.t === 'cell';
  if (!cx && !cy) return isStr(x) && isStr(y) && f(x, y);
  const items = cx ? x.items : y.items, other = cx ? y : x;
  const o = new Uint8Array(items.length);
  items.forEach((s, i) => { const t = cx && cy ? y.items[i] : other; o[i] = isStr(s) && isStr(t) && f(s, t) ? 1 : 0; });
  return bool(sizeOf(cx ? x : y), o);
}
def('strrep', (a) => mapStr(a[0], (s) => s.split(S(a[1], t('script.core.what.strrep_old'))).join(S(a[2], t('script.core.what.strrep_new')))), 'strrep(s, old, new)');
def('strfind', (a) => { const s = S(a[0], 'strfind'), p = S(a[1], 'strfind'); const r = []; if (p.length) for (let i = s.indexOf(p); i >= 0; i = s.indexOf(p, i + 1)) r.push(i + 1); return r.length === 1 ? r[0] : r.length ? row(r) : tensor([1, 0]); }, 'strfind(s, pattern)');
def('strsplit', (a) => { const s = S(a[0], 'strsplit'); const parts = a[1] === undefined ? s.trim().split(/\s+/) : s.split(a[1] && a[1].t === 'cell' ? new RegExp(a[1].items.map((d) => S(d, 'delimiter').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')) : unescape(S(a[1], t('script.core.what.strsplit_delimiter')))); return cell(parts, [1, parts.length]); }, 'strsplit(s, delimiter)');
def('strjoin', (a) => { const c = a[0]; if (!c || c.t !== 'cell') throw err(t('script.core.strjoin_cell')); return c.items.map((x) => S(x, 'strjoin')).join(a[1] === undefined ? ' ' : unescape(S(a[1], t('script.core.what.strjoin_delimiter')))); }, 'strjoin(c, delimiter)');
def('contains', (a) => mapBool(a[0], (s) => s.includes(S(a[1], 'contains'))), 'contains(s, pattern)');
def('startsWith', (a) => mapBool(a[0], (s) => s.startsWith(S(a[1], 'startsWith'))), 'startsWith(s, p)');
def('endsWith', (a) => mapBool(a[0], (s) => s.endsWith(S(a[1], 'endsWith'))), 'endsWith(s, p)');
function mapBool(v, f) { if (isStr(v)) return f(v); if (v && v.t === 'cell') return bool(sizeOf(v), Uint8Array.from(v.items, (x) => (isStr(x) && f(x) ? 1 : 0))); throw err(t('script.core.expected_text', { got: describe(v) })); }
def('regexprep', (a) => { const s = a[0], p = S(a[1], t('script.core.what.regexprep_pattern')), r = S(a[2], t('script.core.what.regexprep_replacement')); let re; try { re = new RegExp(p, a.includes('ignorecase') ? 'gi' : 'g'); } catch (e) { throw err(t('script.core.regexprep_bad', { why: e.message })); } return mapStr(s, (x) => x.replace(re, r)); }, 'regexprep(s, pattern, replacement)');
def('regexp', (a, ctx) => { const s = S(a[0], 'regexp'), p = S(a[1], 'regexp'); let re; try { re = new RegExp(p, 'g'); } catch (e) { throw err(t('script.core.regexp_bad', { why: e.message })); } const ms = [...s.matchAll(re)]; const mode = a.find((x) => isStr(x) && ['match', 'tokens', 'once', 'start', 'names', 'split'].includes(x) && x !== p && x !== s); const once = a.includes('once'); if (mode === 'match') return once ? (ms[0] ? ms[0][0] : '') : cell(ms.map((m) => m[0]), [1, ms.length]); if (mode === 'tokens') return once ? (ms[0] ? cell(ms[0].slice(1), [1, ms[0].length - 1]) : cell([])) : cell(ms.map((m) => cell(m.slice(1), [1, m.length - 1])), [1, ms.length]); if (mode === 'split') { const parts = s.split(new RegExp(p)); return cell(parts, [1, parts.length]); } const st = ms.map((m) => m.index + 1); void ctx; return st.length === 1 ? st[0] : st.length ? row(st) : tensor([1, 0]); }, 'regexp(s, pattern, \'match\'|\'tokens\'|\'split\'|\'once\')');
def('newline', () => '\n', 'newline');

/* ------------------------------------------------------------------ structs and cells */

def('struct', (a) => {
  if (a.length % 2) throw err(t('script.core.struct_pairs'));
  const f = {};
  for (let i = 0; i < a.length; i += 2) {
    const k = S(a[i], t('script.core.what.struct_field'));
    if (!NAME_RE.test(k)) throw err(t('script.core.bad_field', { name: k }));
    let v = a[i + 1];
    if (v && v.t === 'cell') { if (v.items.length === 1) v = v.items[0]; else if (v.items.length === 0) v = empty(); else throw err(t('script.core.struct_array')); }
    f[k] = v;
  }
  return struct(f);
}, 'struct(\'a\', 1, \'b\', 2)');
def('fieldnames', (a) => { const s = a[0]; if (!s || s.t !== 'struct') throw err(t('script.core.fieldnames_struct', { got: describe(s) })); const k = Object.keys(s.fields); return cell(k, [k.length, 1]); }, 'fieldnames(s)');
def('isfield', (a) => { const s = a[0]; if (!s || s.t !== 'struct') return false; const f = a[1]; if (f && f.t === 'cell') return bool(sizeOf(f), Uint8Array.from(f.items, (x) => (isStr(x) && Object.hasOwn(s.fields, x) ? 1 : 0))); return isStr(f) && Object.hasOwn(s.fields, f); }, 'isfield(s, name)');
def('rmfield', (a) => { const s = a[0]; if (!s || s.t !== 'struct') throw err(t('script.core.rmfield_struct')); const names = a[1] && a[1].t === 'cell' ? a[1].items : [a[1]]; const f = { ...s.fields }; for (const n of names) { if (!Object.hasOwn(f, n)) throw err(t('script.core.no_field', { name: n })); delete f[n]; } return struct(f); }, 'rmfield(s, name)');
def('setfield', (a) => { const s = a[0] === undefined || (isTensor(a[0]) && !a[0].data.length) ? struct() : a[0]; if (s.t !== 'struct') throw err(t('script.core.setfield_struct')); const k = S(a[1], t('script.core.what.setfield_name')); if (!NAME_RE.test(k)) throw err(t('script.core.bad_field', { name: k })); return struct({ ...s.fields, [k]: a[2] }); }, 'setfield(s, name, value)');
def('getfield', (a) => { const s = a[0]; if (!s || s.t !== 'struct') throw err(t('script.core.getfield_struct')); const k = S(a[1], t('script.core.what.getfield_name')); if (!Object.hasOwn(s.fields, k)) throw err(t('script.core.no_field', { name: k })); return s.fields[k]; }, 'getfield(s, name)');
def('struct2cell', (a) => { const s = a[0]; if (!s || s.t !== 'struct') throw err(t('script.core.struct2cell_struct')); const v = Object.values(s.fields); return cell(v, [v.length, 1]); }, 'struct2cell(s)');
def('cell2struct', (a) => { const c = a[0], f = a[1]; if (!c || c.t !== 'cell' || !f || f.t !== 'cell' || c.items.length !== f.items.length) throw err(t('script.core.cell2struct_cells')); const o = {}; f.items.forEach((k, i) => { if (!isStr(k) || !NAME_RE.test(k)) throw err(t('script.core.cell2struct_name')); o[k] = c.items[i]; }); return struct(o); }, 'cell2struct(values, names)');
def('cell', (a) => { const s = shapeArgs(a, 'cell'); if (s.length > 2) throw err(t('script.core.cell_2d')); return cell(Array.from({ length: prodOf(s) }, () => empty()), s); }, 'cell(n) | cell(m, n)');
def('num2cell', (a) => { const v = dense(a[0]); if (isStr(v)) return cell([...v], [1, v.length]); const t = T(v, 'num2cell'); return cell(Array.from(t.data, (x) => (t.dtype === 'u8' ? x !== 0 : x)), t.shape.slice(0, 2)); }, 'num2cell(A)');
def('cell2mat', (a) => { const c = a[0]; if (!c || c.t !== 'cell') throw err(t('script.core.cell2mat_cell')); if (!c.items.length) return empty(); const [r, k] = sizeOf(c); const rows = []; for (let i = 0; i < r; i++) { const parts = []; for (let j = 0; j < k; j++) parts.push(dense(c.items[i + j * r])); rows.push(K.hcat(parts)); } return K.vcat(rows); }, 'cell2mat(c)');
def('deal', (a, ctx) => { const n = Math.max(1, ctx.nargout); if (a.length !== 1 && a.length !== n) throw err(t('script.core.deal_count', { n: a.length, m: n })); const r = Array.from({ length: n }, (_, i) => a[a.length === 1 ? 0 : i]); return n > 1 ? r : r[0]; }, '[a, b] = deal(x, y) | [a, b] = deal(x)');
function uniformOpt(a) {
  let uniform = true, errHandler = null; const rest = [];
  for (let i = 0; i < a.length; i++) {
    if (isStr(a[i]) && /^(UniformOutput|ErrorHandler)$/i.test(a[i]) && i + 1 < a.length) { if (/^u/i.test(a[i])) uniform = !!N(a[i + 1]); else errHandler = a[i + 1]; i++; }
    else rest.push(a[i]);
  }
  return { uniform, errHandler, rest };
}
function applyEach(name, a, ctx, getItems) {
  const { uniform, rest } = uniformOpt(a);
  let f = rest[0];
  const lists = rest.slice(1);
  if (!lists.length) throw err(t('script.core.apply_nothing', { name }));
  const shapes = lists.map((x) => sizeOf(x)), n = numelOf(lists[0]);
  for (const x of lists) if (numelOf(x) !== n) throw err(t('script.core.apply_counts', { name }));
  const items = lists.map(getItems);
  const no = Math.max(1, ctx.nargout);
  if (isStr(f)) { const legacy = { isempty: (v) => numelOf(v) === 0, length: (v) => { const s = sizeOf(v); return s.some((x) => !x) ? 0 : Math.max(...s); }, numel: numelOf, ndims: (v) => sizeOf(v).length, isreal: () => true, isclass: () => false }; if (legacy[f] && no === 1) { const g = legacy[f]; f = func('craft', f, (args) => [g(args[0])]); } }
  const outs = Array.from({ length: no }, () => new Array(n));
  for (let i = 0; i < n; i++) {
    ctx.check(1);
    const r = ctx.invoke(f, items.map((L) => L[i]), no);
    const vals = no > 1 ? r : [r];
    for (let k = 0; k < no; k++) {
      const v = vals[k];
      if (uniform) {
        if (v === undefined) throw err(t('script.core.apply_nothing_returned', { name }));
        const x = typeof v === 'number' ? v : typeof v === 'boolean' ? v : isTensor(v) && v.data.length === 1 ? (v.dtype === 'u8' ? v.data[0] !== 0 : v.data[0]) : null;
        if (x === null) throw err(t('script.core.apply_not_scalar', { name, got: describe(v), i: i + 1 }));
        outs[k][i] = x;
      } else outs[k][i] = v;
    }
  }
  const shape = shapes[0].slice(0, Math.max(2, shapes[0].length));
  const res = outs.map((o) => {
    if (!uniform) return cell(o, shape.slice(0, 2));
    if (o.length && o.every((x) => typeof x === 'boolean')) return bool(shape, Uint8Array.from(o, (x) => (x ? 1 : 0)));
    return n === 0 ? tensor(shape) : out(shape, Float64Array.from(o, (x) => +x));
  });
  return no > 1 ? res : res[0];
}
def('cellfun', (a, ctx) => applyEach('cellfun', a, ctx, (c) => { if (!c || c.t !== 'cell') throw err(t('script.core.cellfun_cells', { got: describe(c) })); return c.items; }), 'cellfun(f, c, …, \'UniformOutput\', false)');
def('arrayfun', (a, ctx) => applyEach('arrayfun', a, ctx, (v) => { v = dense(v); if (isStr(v)) return [...v]; if (v && v.t === 'cell') return v.items.map((x) => cell([x], [1, 1])); if (v && v.t === 'struct') return [v]; const t = T(v, 'arrayfun'); return Array.from(t.data, (x) => (t.dtype === 'u8' ? x !== 0 : x)); }), 'arrayfun(f, A, …, \'UniformOutput\', false)');
def('func2str', (a) => { const f = a[0]; if (!f || f.t !== 'func') throw err(t('script.core.func2str_handle')); return f.name.startsWith('@') ? f.name : '@' + f.name; }, 'func2str(f)');
def('is_function_handle', (a) => typeOf(a[0]) === 'func', 'is_function_handle(f)');

/* ------------------------------------------------------------------ errors */

function messageFrom(a, name) {
  if (!a.length) return { message: t('script.core.no_message', { name }), identifier: '' };
  if (a[0] && a[0].t === 'struct') return { message: String(a[0].fields.message ?? ''), identifier: String(a[0].fields.identifier ?? '') };
  const first = S(a[0], t('script.core.what.message', { name }));
  if (a.length > 1 && /^[A-Za-z][\w-]*(:[\w-]+)+$/.test(first) && isStr(a[1])) return { identifier: first, message: sprintf(a[1], a.slice(2)) };
  return { identifier: '', message: a.length > 1 ? sprintf(first, a.slice(1)) : first };
}
def('error', (a) => { const m = messageFrom(a, 'error'); throw new CsError(m.message, { identifier: m.identifier }); }, 'error(message) | error(format, …) | error(id, format, …)');
def('warning', (a, ctx) => { if (a[0] === 'off' || a[0] === 'on') return undefined; const m = messageFrom(a, 'warning'); ctx.print(`Warning: ${m.message}\n`); return undefined; }, 'warning(message) | warning(format, …)');
def('assert', (a) => { let ok; try { ok = K.truth(dense(a[0]), t('script.core.what.assert_condition')); } catch { ok = false; } if (!ok) { const m = a.length > 1 ? messageFrom(a.slice(1), 'assert') : { message: t('script.core.assert_failed'), identifier: '' }; throw new CsError(m.message, { identifier: m.identifier }); } return undefined; }, 'assert(cond, message, …)');
def('rethrow', (a) => { const m = messageFrom(a, 'rethrow'); throw new CsError(m.message, { identifier: m.identifier }); }, 'rethrow(err)');
def('MException', (a) => struct({ identifier: S(a[0], t('script.core.what.mexception_identifier')), message: sprintf(S(a[1], t('script.core.what.mexception_message')), a.slice(2)), stack: cell([]) }), 'MException(id, format, …)');
def('throw', (a) => { const m = messageFrom(a, 'throw'); throw new CsError(m.message, { identifier: m.identifier }); }, 'throw(err)');

/* ------------------------------------------------------------------ time */

const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
let ticAt = null;
def('tic', (a, ctx) => { ticAt = now(); return ctx.nargout >= 1 ? ticAt * 1000 : undefined; }, 'tic');
def('toc', (a, ctx) => { const t0 = a[0] !== undefined ? N(a[0]) / 1000 : ticAt; if (t0 === null) throw err(t('script.core.toc_first')); const s = (now() - t0) / 1000; if (ctx.nargout >= 1) return s; ctx.print(t('script.core.elapsed', { s: s.toFixed(6) }) + '\n'); return undefined; }, 'toc | t = toc');
def('clock', () => { const d = new Date(); return row([d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() + d.getMilliseconds() / 1000]); }, 'clock');
def('cputime', () => now() / 1000, 'cputime');
def('pause', () => undefined, 'pause(n)');
def('datestr', () => new Date().toISOString().replace('T', ' ').slice(0, 19), 'datestr');

/* ------------------------------------------------------------------ display commands (the page draws them; Node collects them) */

function nameValueOpts(list, name) {
  const o = {};
  for (let i = 0; i < list.length; i++) {
    const k = list[i];
    if (k && k.t === 'struct') { Object.assign(o, k.fields); continue; }
    if (!isStr(k)) throw err(t('script.core.opts_pairs', { name, got: describe(k) }));
    if (i + 1 >= list.length) { o.style = k; break; }
    o[k] = list[++i];
  }
  return o;
}
def('plot', (a, ctx) => {
  const v = a.map(dense);
  let x, y, rest;
  if (v.length === 1 || (v.length >= 2 && isStr(v[1]))) { y = T(v[0], 'plot'); x = K.range(1, 1, y.data.length); rest = v.slice(1); }
  else { x = T(v[0], 'plot'); y = T(v[1], 'plot'); rest = v.slice(2); if (x.data.length !== y.data.length) throw err(t('script.core.plot_len', { a: x.data.length, b: y.data.length })); }
  const style = rest.length % 2 === 1 && isStr(rest[0]) ? rest.shift() : null;
  const opts = nameValueOpts(rest, 'plot');
  if (style) opts.style = style;
  ctx.display({ plot: { x: tensor([1, x.data.length], Float64Array.from(x.data)), y: tensor([1, y.data.length], Float64Array.from(y.data)), opts } });
  return undefined;
}, 'plot(y) | plot(x, y, style, \'name\', value, …)');
def('imagesc', (a, ctx) => { const m = T(a[0], 'imagesc'); if (m.shape.length > 2) throw err(t('script.core.imagesc_2d')); ctx.display({ image: tensor(m.shape, Float64Array.from(m.data)), opts: { scaled: true, ...nameValueOpts(a.slice(1), 'imagesc') } }); return undefined; }, 'imagesc(M, \'name\', value, …)');
def('image', (a, ctx) => { const m = T(a[0], 'image'); ctx.display({ image: tensor(m.shape, Float64Array.from(m.data)), opts: { scaled: false, ...nameValueOpts(a.slice(1), 'image') } }); return undefined; }, 'image(M)');
def('table', (a, ctx) => { ctx.display({ table: a[0], opts: nameValueOpts(a.slice(1), 'table') }); return undefined; }, 'table(v, \'name\', value, …)');
def('show', (a, ctx) => {
  const v = a[0], t = typeOf(v);
  const opts = nameValueOpts(a.slice(1), 'show');
  if (t === 'mesh' || t === 'field' || t === 'model') ctx.display({ show: t, value: v, opts });
  else if (t === 'tensor' && v.shape.length === 2 && v.shape[0] > 1 && v.shape[1] > 1) ctx.display({ image: v, opts: { scaled: true, ...opts } });
  else ctx.display({ table: v, opts });
  return undefined;
}, 'show(v, \'name\', value, …)');
def('clf', (a, ctx) => { ctx.display({ clear: true }); return undefined; }, 'clf');
for (const name of ['figure', 'hold', 'drawnow', 'axis', 'colormap', 'caxis', 'clim', 'colorbar', 'grid', 'box', 'subplot', 'title', 'xlabel', 'ylabel', 'zlabel', 'legend', 'close', 'clc', 'format', 'shg', 'set', 'more']) {
  def(name, () => undefined, `${name}(…)`);
}
def('gray', (a) => { const n = a[0] === undefined ? 64 : I(a[0], 'gray'); const d = new Float64Array(n * 3); for (let i = 0; i < n; i++) { const v = n === 1 ? 0 : i / (n - 1); d[i] = d[i + n] = d[i + 2 * n] = v; } return tensor([n, 3], d); }, 'gray(n)');
def('jet', (a) => { const n = a[0] === undefined ? 64 : I(a[0], 'jet'); const d = new Float64Array(n * 3); for (let i = 0; i < n; i++) { const x = n === 1 ? 0.5 : i / (n - 1); const f = (c) => Math.max(0, Math.min(1, 1.5 - Math.abs(4 * x - c))); d[i] = f(3); d[i + n] = f(2); d[i + 2 * n] = f(1); } return tensor([n, 3], d); }, 'jet(n)');

/* ------------------------------------------------------------------ misc */

def('isvarname', (a) => isStr(a[0]) && NAME_RE.test(a[0]) && !['if', 'for', 'end', 'while', 'function', 'return', 'else', 'elseif', 'switch', 'case', 'otherwise', 'try', 'catch', 'break', 'continue'].includes(a[0]), 'isvarname(s)');
def('input', () => { throw err(t('script.core.input')); }, 'input');
def('keyboard', () => { throw err(t('script.core.keyboard')); }, 'keyboard');
def('version', () => 'CraftScript 1', 'version');
def('nargchk', () => undefined, 'nargchk');
def('narginchk', () => undefined, 'narginchk(lo, hi)');
def('validateattributes', () => undefined, 'validateattributes(…)');
def('builtins', (a, ctx) => { const names = ctx.runtime.builtins().map((b) => b.name).sort(); return cell(names, [names.length, 1]); }, 'builtins()');
def('help', (a, ctx) => {
  const name = a[0];
  const list = ctx.runtime.builtins();
  if (!isStr(name)) { ctx.print(t('script.core.help_count', { n: list.length }) + '\n'); return undefined; }
  const b = list.find((x) => x.name === name);
  ctx.print(b ? `${b.args}\n  ${b.doc} (${b.module})\n` : t('script.core.help_none', { name }) + '\n');
  return undefined;
}, 'help name');   // i18n-ignore: call signature (code)

void CALL;
