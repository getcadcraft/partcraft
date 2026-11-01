/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-values.js — CraftScript's value types: the plain-data contract every language, builtin, worker message and saved
 * workspace uses (docs/SCRIPTING-SPEC.md §2, docs/apps/craftscript.md "Values"). DOM-free; imports only i18n.js (messages).
 *
 *   number / bool / string        JS primitives (a scalar is a 1×1 tensor at the language level; builtins accept both)
 *   tensor  { t:'tensor', shape:[…], data: Float64Array, dtype?: 'i32'|'u8' }   column-major, ≤ 8 dims; u8 = logical
 *   sparse  { t:'sparse', n, m, rowPtr: Int32Array, col: Int32Array, val: Float64Array }   CSR, n rows × m columns
 *   mesh / field / model          see the spec; plain objects with typed arrays
 *   struct  { t:'struct', fields: {…} }      cell { t:'cell', shape?: [r, c], items: […] } (column-major; default 1×n)
 *   func    { t:'func', lang, name }         a handle to a script function (callable in the session, never saved)
 *
 * Rules for builtin authors: never mutate an argument; never return a NEW tensor whose typed array aliases an argument's
 * (returning the argument object itself is fine — the VM sees the identity and copies before writing).
 */
import { t } from './i18n.js';

export const CAPS = Object.freeze({
  tensor: 2 ** 27,               // elements per tensor
  dims: 8,
  string: 16 * 1024 * 1024,      // characters
  workspace: 32 * 1024 * 1024,   // bytes saved with the part (bigger variables stay in the session)
  items: 1 << 20,                // cell items / struct fields
  depth: 32,                     // nesting of cells/structs when reading untrusted data
});

/** A mark the language VMs put on a tensor object that two places can see (so writes copy first). Never serialised. */
export const SHARED = Symbol('cs.shared');
/** Where a func value keeps its in-session call(args, nargout) → value[] (non-enumerable, never serialised). */
export const CALL = Symbol('cs.call');

export class CsError extends Error {
  constructor(message, extra = {}) { super(message); this.name = 'CsError'; Object.assign(this, extra); }
}
/** Thrown when the instruction budget runs out or the user stops a run. */
export class StopError extends Error {
  constructor(message = t('script.rt.stopped')) { super(message); this.name = 'StopError'; }
}

const TYPED = { f64: Float64Array, i32: Int32Array, u8: Uint8Array };
export const isTyped = (a) => ArrayBuffer.isView(a) && !(a instanceof DataView);
export const prodOf = (shape) => { let n = 1; for (const s of shape) n *= s; return n; };

/** Drop trailing singleton dims (keep ≥ 2), as MATLAB does. */
export function normShape(shape) {
  const s = shape.slice();
  while (s.length > 2 && s[s.length - 1] === 1) s.pop();
  while (s.length < 2) s.push(s.length === 0 ? 1 : 1);
  return s;
}

export function checkSize(n) {
  if (!(n <= CAPS.tensor)) throw new CsError(t('script.val.too_big', { n: n.toLocaleString('en-US'), max: CAPS.tensor.toLocaleString('en-US') }));
}

/** A new tensor. data defaults to zeros; dtype 'f64' (default), 'i32' or 'u8' (logical). */
export function tensor(shape, data, dtype) {
  const sh = normShape(shape.map((x) => { if (!(Number.isInteger(x) && x >= 0)) throw new CsError(t('script.val.bad_size', { got: x })); return x; }));
  if (sh.length > CAPS.dims) throw new CsError(t('script.val.max_dims', { n: CAPS.dims }));
  const n = prodOf(sh);
  checkSize(n);
  if (!data) data = new (TYPED[dtype || 'f64'])(n);
  else if (data.length !== n) throw new CsError(`Internal: ${data.length} values for a ${sh.join('×')} array.`);   // i18n-ignore: a bug in a builtin, never a script author's doing
  const out = { t: 'tensor', shape: sh, data };
  if (data instanceof Uint8Array) out.dtype = 'u8'; else if (data instanceof Int32Array) out.dtype = 'i32';
  return out;
}
export const empty = () => tensor([0, 0]);
export const isTensor = (v) => v !== null && typeof v === 'object' && v.t === 'tensor';
export const isLogical = (v) => typeof v === 'boolean' || (isTensor(v) && v.dtype === 'u8');
export const isNumeric = (v) => typeof v === 'number' || typeof v === 'boolean' || isTensor(v);

/** The type name of a value: number bool string tensor sparse mesh field model struct cell func (or 'unknown'). */
export function typeOf(v) {
  if (typeof v === 'number') return 'number';
  if (typeof v === 'boolean') return 'bool';
  if (typeof v === 'string') return 'string';
  if (v && typeof v === 'object' && typeof v.t === 'string') return v.t;
  return 'unknown';
}

/** Shape of any value as MATLAB's size() sees it. */
export function sizeOf(v) {
  if (typeof v === 'number' || typeof v === 'boolean') return [1, 1];
  if (typeof v === 'string') return [1, v.length];
  if (!v || typeof v !== 'object') return [1, 1];
  if (v.t === 'tensor') return v.shape;
  if (v.t === 'sparse') return [v.n, v.m];
  if (v.t === 'cell') return v.shape || [1, v.items.length];
  return [1, 1];
}
export const numelOf = (v) => prodOf(sizeOf(v));

/** A number from a scalar-like value (number, bool, 1×1 tensor); throws a plain message otherwise. */
export function num(v, what = null) {
  if (typeof v === 'number') return v;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (isTensor(v) && v.data.length === 1) return v.data[0];
  if (v && v.t === 'sparse' && v.n * v.m === 1) return v.val.length ? v.val[0] : 0;
  throw new CsError(t('script.val.not_scalar', { what: what ?? t('script.val.this_value'), got: describe(v) }));
}
/** Any numeric value as a tensor (numbers and bools become 1×1; strings become their character codes). */
export function asTensor(v) {
  if (isTensor(v)) return v;
  if (typeof v === 'number') return tensor([1, 1], Float64Array.of(v));
  if (typeof v === 'boolean') return tensor([1, 1], Uint8Array.of(v ? 1 : 0));
  if (typeof v === 'string') { const d = new Float64Array(v.length); for (let i = 0; i < v.length; i++) d[i] = v.charCodeAt(i); return tensor([v.length ? 1 : 0, v.length], d); }
  throw new CsError(t('script.val.not_numbers', { got: describe(v) }));
}
/** Float64Array of a numeric value's elements (column-major). May return the tensor's own array: do not write to it. */
export function f64(v) {
  const t = asTensor(v);
  return t.data instanceof Float64Array ? t.data : Float64Array.from(t.data);
}
/** Unwrap a 1×1 tensor to a number (or bool for logical); other values unchanged. */
export function simplify(v) {
  if (isTensor(v) && v.data.length === 1 && v.shape.length === 2) return v.dtype === 'u8' ? v.data[0] !== 0 : v.data[0];
  return v;
}

export const struct = (fields = {}) => ({ t: 'struct', fields });
export const cell = (items = [], shape) => ({ t: 'cell', shape: shape || [items.length ? 1 : 0, items.length], items });
export const func = (lang, name, call) => { const f = { t: 'func', lang, name }; if (call) Object.defineProperty(f, CALL, { value: call }); return f; };

/** Short description for messages: "a 3×4 array", "the text 'abc'", "a struct". */
export function describe(v) {
  const ty = typeOf(v);
  if (ty === 'number') return t('script.val.desc.number', { value: fmtNum(v) });
  if (ty === 'bool') return v ? 'true' : 'false';
  if (ty === 'string') return v.length > 30 ? t('script.val.desc.long_text', { n: v.length }) : t('script.val.desc.text', { text: v });
  if (ty === 'tensor') return t(v.dtype === 'u8' ? 'script.val.desc.logical' : 'script.val.desc.array', { size: v.shape.join('×') });
  if (ty === 'sparse') return t('script.val.desc.sparse', { size: `${v.n}×${v.m}` });
  if (ty === 'cell') return t('script.val.desc.cell', { size: sizeOf(v).join('×') });
  if (ty === 'func') return t('script.val.desc.func', { name: v.name });
  if (ty === 'unknown') return v === undefined ? t('script.val.desc.nothing') : v === null ? 'null' : t('script.val.desc.unknown');
  return t('script.val.desc.other', { type: ty });
}

/** Approximate memory of a value in bytes (for the workspace cap and the Variables panel). */
export function sizeBytes(v, depth = 0) {
  if (depth > CAPS.depth) return 0;
  if (typeof v === 'number') return 8;
  if (typeof v === 'boolean') return 1;
  if (typeof v === 'string') return 2 * v.length;
  if (!v || typeof v !== 'object') return 0;
  let n = 16;
  for (const k of Object.keys(v)) {
    const x = v[k];
    if (isTyped(x)) n += x.byteLength;
    else if (Array.isArray(x)) for (const y of x) n += sizeBytes(y, depth + 1);
    else if (x && typeof x === 'object') n += sizeBytes(x, depth + 1);
    else if (typeof x === 'string') n += 2 * x.length;
    else n += 8;
  }
  if (v.t === 'struct') { n = 16; for (const x of Object.values(v.fields)) n += sizeBytes(x, depth + 1); }
  return n;
}

/** Summary for the Variables panel: { type, size: [..], bytes, min?, max? }. */
export function summary(v) {
  const s = { type: typeOf(v), size: sizeOf(v), bytes: sizeBytes(v) };
  const d = typeof v === 'number' ? [v] : isTensor(v) ? v.data : v && v.t === 'sparse' ? v.val : null;
  if (d && d.length) {
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i < d.length; i++) { const x = d[i]; if (x < lo) lo = x; if (x > hi) hi = x; }
    if (v && v.t === 'sparse' && v.val.length < v.n * v.m) { lo = Math.min(lo, 0); hi = Math.max(hi, 0); }
    s.min = lo; s.max = hi;
  }
  return s;
}

/* ------------------------------------------------------------------ (de)serialising */

/**
 * A structured-clone-safe copy of a value plus the ArrayBuffers to transfer (func values keep only {t, lang, name};
 * session-only symbols are dropped). With { copy: false } typed arrays are not copied, so transferring them empties the
 * original: use that only for values the sender no longer needs.
 */
export function toPlain(v, { copy = true, transfer = [] } = {}, depth = 0) {
  if (depth > CAPS.depth) throw new CsError(t('script.val.too_deep_save'));
  if (v === null || typeof v !== 'object') return v;
  if (isTyped(v)) { const a = copy ? v.slice() : v; if (!transfer.includes(a.buffer)) transfer.push(a.buffer); return a; }
  if (Array.isArray(v)) return v.map((x) => toPlain(x, { copy, transfer }, depth + 1));
  if (v.t === 'func') return { t: 'func', lang: String(v.lang), name: String(v.name) };
  const o = {};
  for (const k of Object.keys(v)) o[k] = toPlain(v[k], { copy, transfer }, depth + 1);
  return o;
}

/** A workspace (Map or {name: value}) → { vars: {name: plain value}, transfer, skipped: [names too big / not savable] }. */
export function serializeWorkspace(ws, { limit = CAPS.workspace, copy = true } = {}) {
  const entries = ws instanceof Map ? [...ws] : Object.entries(ws);
  const vars = {}, transfer = [], skipped = [];
  let total = 0;
  for (const [name, v] of entries) {
    if (typeOf(v) === 'func') { skipped.push({ name, why: t('script.val.skip.func') }); continue; }
    const b = sizeBytes(v);
    if (total + b > limit) { skipped.push({ name, why: t('script.val.skip.big', { mb: Math.ceil(b / 1048576) }) }); continue; }
    total += b;
    vars[name] = toPlain(v, { copy, transfer });
  }
  return { vars, transfer, skipped, bytes: total };
}

export const NAME_RE = /^[A-Za-z][A-Za-z0-9_]{0,62}$/;

/**
 * Check an untrusted value (from a file, a worker message or a saved part) and return a clean copy, or throw a plain
 * message. Accepts every §2 type; typed arrays are checked against shapes.
 */
export function readValue(raw, depth = 0) {
  if (depth > CAPS.depth) throw new CsError(t('script.val.too_deep'));
  if (typeof raw === 'number') return raw;
  if (typeof raw === 'boolean') return raw;
  if (typeof raw === 'string') { if (raw.length > CAPS.string) throw new CsError(t('script.val.text_long')); return raw; }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new CsError(t('script.val.not_value'));
  const arr = (a, Ctor, n, what) => {
    let x = a;
    if (Array.isArray(a)) { if (a.length > CAPS.tensor) throw new CsError(t('script.val.read.too_many', { what })); x = Ctor.from(a, Number); }
    if (!(x instanceof Ctor)) throw new CsError(t('script.val.read.wrong_type', { what }));
    if (n !== undefined && x.length !== n) throw new CsError(t('script.val.read.count', { what, got: x.length, want: n }));
    return x.slice();
  };
  switch (raw.t) {
    case 'tensor': {
      if (!Array.isArray(raw.shape) || raw.shape.length < 1 || raw.shape.length > CAPS.dims || !raw.shape.every((s) => Number.isInteger(s) && s >= 0)) throw new CsError(t('script.val.read.array_shape'));
      const n = prodOf(raw.shape);
      checkSize(n);
      const dt = raw.dtype === 'u8' ? 'u8' : raw.dtype === 'i32' ? 'i32' : 'f64';
      return tensor(raw.shape, arr(raw.data, TYPED[dt], n, t('script.val.what.array')));
    }
    case 'sparse': {
      const n = raw.n, m = raw.m;
      if (!(Number.isInteger(n) && n >= 0 && Number.isInteger(m) && m >= 0)) throw new CsError(t('script.val.read.sparse_size'));
      const rowPtr = arr(raw.rowPtr, Int32Array, n + 1, t('script.val.what.sparse_rows'));
      const nnz = rowPtr[n];
      checkSize(nnz);
      const col = arr(raw.col, Int32Array, nnz, t('script.val.what.sparse_cols')), val = arr(raw.val, Float64Array, nnz, t('script.val.what.sparse_vals'));
      if (rowPtr[0] !== 0) throw new CsError(t('script.val.read.sparse_ptr'));
      for (let i = 0; i < n; i++) if (rowPtr[i + 1] < rowPtr[i]) throw new CsError(t('script.val.read.sparse_ptr'));
      for (let k = 0; k < nnz; k++) if (!(col[k] >= 0 && col[k] < m)) throw new CsError(t('script.val.read.sparse_col'));
      return { t: 'sparse', n, m, rowPtr, col, val };
    }
    case 'struct': {
      if (!raw.fields || typeof raw.fields !== 'object' || Array.isArray(raw.fields)) throw new CsError(t('script.val.read.struct_none'));
      const keys = Object.keys(raw.fields);
      if (keys.length > CAPS.items) throw new CsError(t('script.val.read.struct_many'));
      const f = {};
      for (const k of keys) { if (!NAME_RE.test(k)) throw new CsError(t('script.val.read.struct_name', { name: k.slice(0, 40) })); f[k] = readValue(raw.fields[k], depth + 1); }
      return struct(f);
    }
    case 'cell': {
      if (!Array.isArray(raw.items) || raw.items.length > CAPS.items) throw new CsError(t('script.val.read.cell_items'));
      const items = raw.items.map((x) => readValue(x, depth + 1));
      let shape = [items.length ? 1 : 0, items.length];
      if (raw.shape !== undefined) {
        if (!Array.isArray(raw.shape) || raw.shape.length !== 2 || !raw.shape.every((s) => Number.isInteger(s) && s >= 0) || raw.shape[0] * raw.shape[1] !== items.length) throw new CsError(t('script.val.read.cell_shape'));
        shape = raw.shape.slice();
      }
      return cell(items, shape);
    }
    case 'func':
      if (typeof raw.name !== 'string' || raw.name.length > 200) throw new CsError(t('script.val.read.func_name'));
      return func(String(raw.lang || 'craft').slice(0, 20), raw.name);
    case 'sdf': return readSdf(raw);
    case 'mesh': case 'field': case 'model': {
      // Builder B's types: keep known typed arrays and plain fields; deep-check typed arrays only.
      const o = {};
      for (const k of Object.keys(raw)) {
        if (!/^[A-Za-z][A-Za-z0-9_]{0,40}$/.test(k)) continue;
        const x = raw[k];
        if (isTyped(x)) { checkSize(x.length); o[k] = x.slice(); }
        else if (x === null || ['number', 'string', 'boolean'].includes(typeof x)) o[k] = typeof x === 'string' ? x.slice(0, 4096) : x;
        else if (Array.isArray(x)) { if (x.length > 64) throw new CsError(t('script.val.read.list_long', { type: raw.t })); o[k] = x.map((y) => (typeof y === 'object' && y !== null ? readValue(y, depth + 1) : y)); }
        else o[k] = readValue(x, depth + 1);
      }
      o.t = raw.t;
      return o;
    }
    default:
      throw new CsError(t('script.val.read.unknown_type', { type: String(raw.t).slice(0, 20) }));
  }
}

/**
 * A field value (0.8 CE.2, cs-lib-field.js): { t:'sdf', kind, spec, scalar? }. The spec is a tree of plain objects, numbers, strings,
 * arrays and typed arrays (a baked grid's bricks); checked here for shape and size only: the field builtins compile it and say
 * what is wrong with it in words.
 */
function readSdf(raw) {
  const keyOk = /^[A-Za-z_][A-Za-z0-9_]{0,30}$/;
  const clean = (x, depth) => {
    if (depth > 40) throw new CsError(t('script.val.too_deep'));
    if (x === null || typeof x === 'boolean') return x;
    if (typeof x === 'number') return x;
    if (typeof x === 'string') { if (x.length > 200) throw new CsError(t('script.val.text_long')); return x; }
    if (isTyped(x)) { checkSize(x.length); return x.slice(); }
    if (Array.isArray(x)) { if (x.length > CAPS.tensor) throw new CsError(t('script.val.read.too_many', { what: 'field' })); return x.map((y) => clean(y, depth + 1)); }
    if (typeof x === 'object') { const o = {}; for (const k of Object.keys(x)) { if (!keyOk.test(k)) throw new CsError(t('script.val.not_value')); o[k] = clean(x[k], depth + 1); } return o; }
    throw new CsError(t('script.val.not_value'));
  };
  if (!raw.spec || typeof raw.spec !== 'object' || typeof raw.spec.t !== 'string') throw new CsError(t('script.val.not_value'));
  const v = { t: 'sdf', kind: String(raw.kind || raw.spec.t).slice(0, 30), spec: clean(raw.spec, 0) };
  if (raw.scalar) v.scalar = true;
  return v;
}

/** A workspace read from untrusted data ({name: value}) → Map; bad names/values are dropped and listed. */
export function readWorkspace(raw) {
  const ws = new Map(), dropped = [];
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ws, dropped };
  for (const [k, v] of Object.entries(raw).slice(0, 10000)) {
    if (!NAME_RE.test(k)) { dropped.push({ name: k.slice(0, 64), why: t('script.val.skip.name') }); continue; }
    try { ws.set(k, readValue(v)); } catch (e) { dropped.push({ name: k, why: e.message }); }
  }
  return { ws, dropped };
}

/* ------------------------------------------------------------------ text */

/** A number as MATLAB's "format short g"-ish text. */
export function fmtNum(x) {
  if (Number.isNaN(x)) return 'NaN';
  if (x === Infinity) return 'Inf';
  if (x === -Infinity) return '-Inf';
  if (Number.isInteger(x) && Math.abs(x) < 1e15) return String(x);
  const a = Math.abs(x);
  if (a >= 1e5 || a < 1e-4) return x.toExponential(4).replace(/e([+-])(\d)$/, 'e$10$2');
  return String(+x.toPrecision(5));
}

/** The text a statement without ";" echoes: "x = 5", "A =\n   1   2\n   3   4". */
export function displayText(name, v) {
  const head = name ? `${name} =` : '';
  const body = valueText(v);
  if (!body.includes('\n') && (typeof v !== 'object' || v === null || (isTensor(v) && v.data.length <= 1) || typeof v === 'string')) return name ? `${head} ${body}` : body;
  return name ? `${head}\n${body}` : body;
}

export function valueText(v, depth = 0) {
  const ty = typeOf(v);
  if (ty === 'number') return fmtNum(v);
  if (ty === 'bool') return v ? '1' : '0';
  if (ty === 'string') return `'${v}'`;
  if (ty === 'func') return `@${v.name}`;
  if (ty === 'tensor') return tensorText(v);
  if (ty === 'sparse') {
    const lines = [];
    let shown = 0;
    for (let i = 0; i < v.n && shown < 40; i++) for (let k = v.rowPtr[i]; k < v.rowPtr[i + 1] && shown < 40; k++, shown++) lines.push(`   (${i + 1},${v.col[k] + 1})   ${fmtNum(v.val[k])}`);
    const nnz = v.rowPtr[v.n];
    return '   ' + t('script.val.show.sparse', { size: `${v.n}×${v.m}`, n: nnz }) + (lines.length ? '\n' + lines.join('\n') : '') + (nnz > shown ? '\n   ' + t('script.val.show.more', { n: nnz - shown }) : '');
  }
  if (ty === 'struct') {
    if (depth > 1) return '   [struct]';
    const ks = Object.keys(v.fields);
    if (!ks.length) return '   ' + t('script.val.show.struct_empty');
    const w = Math.max(...ks.map((k) => k.length));
    return ks.map((k) => `   ${k.padStart(w)}: ${oneLine(v.fields[k])}`).join('\n');
  }
  if (ty === 'cell') {
    if (!v.items.length) return '   {}';
    const [r, c] = sizeOf(v);
    const rows = [];
    for (let i = 0; i < Math.min(r, 20); i++) { const row = []; for (let j = 0; j < c; j++) row.push(oneLine(v.items[i + j * r])); rows.push('   {' + row.join('   ') + '}'); }
    return rows.join('\n');
  }
  return `   [${ty}${v && v.kind ? ' ' + v.kind : ''}]`;   // fields too: [sdf union]
}
function oneLine(v) {
  const t = typeOf(v);
  if (t === 'number' || t === 'bool' || t === 'string' || t === 'func') return valueText(v);
  if (t === 'tensor' && v.data.length <= 6 && v.shape.length === 2 && v.shape[0] <= 1) return '[' + Array.from(v.data, fmtNum).join(' ') + ']';
  return `[${sizeOf(v).join('×')} ${t}]`;
}
function tensorText(v) {
  const n = v.data.length;
  if (n === 0) return '     []' + (v.shape.some((s) => s) ? `  (${v.shape.join('×')})` : '');
  if (n === 1) return fmtNum(v.data[0]);
  if (v.shape.length > 2) {
    const [r, c] = v.shape, page = r * c, pages = n / page, out = [];
    for (let p = 0; p < Math.min(pages, 8); p++) {
      const idx = []; let q = p;
      for (let d = 2; d < v.shape.length; d++) { idx.push(q % v.shape[d] + 1); q = Math.floor(q / v.shape[d]); }
      out.push(`  (:,:,${idx.join(',')}) =`, tensorText({ t: 'tensor', shape: [r, c], data: v.data.subarray(p * page, (p + 1) * page) }));
    }
    if (pages > 8) out.push('  ' + t('script.val.show.more_pages', { n: pages - 8 }));
    return out.join('\n');
  }
  const [r, c] = v.shape;
  const R = Math.min(r, 60), C = Math.min(c, 30);
  let allInt = true, big = 0;
  for (let i = 0; i < n; i++) { const x = v.data[i]; if (Number.isFinite(x)) { if (!Number.isInteger(x)) allInt = false; big = Math.max(big, Math.abs(x)); } }
  const useE = !allInt && (big >= 1e5 || (big > 0 && big < 1e-3));
  const f = (x) => (!Number.isFinite(x) ? fmtNum(x) : allInt ? String(x) : useE ? x.toExponential(4) : x.toFixed(4));
  const cells = [];
  let w = 1;
  for (let i = 0; i < R; i++) { const row = []; for (let j = 0; j < C; j++) { const s = f(v.data[i + j * r]); w = Math.max(w, s.length); row.push(s); } cells.push(row); }
  const lines = cells.map((row) => row.map((s) => s.padStart(w + 3)).join(''));
  if (c > C) lines[0] += '   ' + t('script.val.show.more_cols', { n: c });
  if (r > R) lines.push('   ' + t('script.val.show.more_rows', { n: r }));
  return lines.join('\n');
}
