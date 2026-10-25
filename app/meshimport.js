/* SPDX-License-Identifier: Apache-2.0 */
/**
 * meshimport.js — STL / OBJ / 3MF meshes opened as solid bodies (0.7 D7.49, session part-08; DOM-free).
 *
 * A file is untrusted: every count and offset is checked against the bytes, sizes are capped, and a file that cannot be
 * read says why in words (Error.code = 'mesh.*' key). The three steps:
 *
 *   readMeshFile(bytes, name) → { format: 'stl'|'obj'|'3mf', positions: Float64Array, indices: Uint32Array, unit: null|UNIT,
 *                                  objects, notes: [{ key, vars }] }                                       (async: 3MF inflates)
 *   repairMesh({ positions, indices }, { gap }) → { positions, indices, report }   weld, drop degenerate / doubled triangles,
 *       close small gaps (boundary points within `gap` of each other, default 1e-3 of the size), fill small holes, orient every
 *       shell consistently and outward. report = { vertices, triangles, welded, degenerate, duplicates, gapsClosed,
 *       holesFilled, holesLeft, openEdges, nonManifold, flipped, shells, closed }
 *   planarRegions(positions, indices) → { triPlane: Int32Array (plane index | −1), planes: [{ n, o, area, tris }] }
 *       flat faces merged across their triangles (neighbours within 0.05° and the size's tolerance of one plane), then every
 *       region on the same plane under one index: the faces a sketch can sit on (kernel.js names them `<feature>.flat:<k>`).
 *   encodeMesh / decodeMesh: the repaired mesh as it is kept in the part file ({ nv, nt, v: base64 float32, i: base64 uint32 }).
 *
 * Units: STL and OBJ carry none (the import asks; mm by default); 3MF says its unit. Positions stay in the file's units and
 * axes; kernel.js scales and turns them (feature fields `units`, `up`).
 */

export const MAX_TRIS = 3000000;          // triangles in one import (a 3 M triangle STL is 150 MB)
export const MAX_BYTES = 200 * 1024 * 1024;
export const UNITS = { um: 0.001, mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 };
const UNIT_3MF = { micron: 'um', millimeter: 'mm', centimeter: 'cm', meter: 'm', inch: 'in', foot: 'ft' };

class MeshError extends Error { constructor(key, vars = {}) { super(key); this.code = key; this.vars = vars; } }
const fail = (key, vars) => { throw new MeshError(key, vars); };

/** The file's format by name, then by its first bytes; null when it is none of the three. */
export function meshFormat(name, bytes) {
  const m = /\.(stl|obj|3mf)$/i.exec(name || '');
  if (m) return m[1].toLowerCase();
  if (bytes && bytes.length >= 4 && bytes[0] === 0x50 && bytes[1] === 0x4b) return '3mf';
  return null;
}

export async function readMeshFile(bytes, name = '') {
  if (!(bytes instanceof Uint8Array)) bytes = new Uint8Array(bytes);
  if (bytes.length > MAX_BYTES) fail('mesh.err.too_big', { mb: Math.round(MAX_BYTES / 1048576) });
  const format = meshFormat(name, bytes);
  if (format === 'stl') return { format, ...readStl(bytes) };
  if (format === 'obj') return { format, ...readObj(bytes) };
  if (format === '3mf') return { format, ...(await read3mf(bytes)) };
  fail('mesh.err.unknown_kind');
}

// ---- STL --------------------------------------------------------------------------------------------------------------

/** Binary when the size is exactly 84 + 50 n for the count it states (an ASCII file can start "solid" and still be binary). */
export function readStl(bytes) {
  if (bytes.length >= 84) {
    const n = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(80, true);
    if (84 + 50 * n === bytes.length) return stlBinary(bytes, n);
  }
  const head = latin1(bytes.subarray(0, Math.min(bytes.length, 512)));
  if (/^\s*solid\b/i.test(head) && /\bfacet\b|\bendsolid\b/i.test(latin1(bytes.subarray(0, Math.min(bytes.length, 4096))))) return stlAscii(latin1(bytes));
  if (bytes.length >= 84) fail('mesh.err.stl_size');   // binary by its look, but the count does not match the size: cut off
  fail('mesh.err.stl_bad');
}

function stlBinary(bytes, n) {
  if (n > MAX_TRIS) fail('mesh.err.too_many', { max: MAX_TRIS });
  if (n === 0) fail('mesh.err.empty');
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const positions = new Float64Array(n * 9), indices = new Uint32Array(n * 3);
  for (let t = 0; t < n; t++) {
    const at = 84 + 50 * t + 12;   // past the stored normal (not trusted: recomputed from the corners)
    for (let k = 0; k < 9; k++) positions[t * 9 + k] = dv.getFloat32(at + 4 * k, true);
    indices[t * 3] = t * 3; indices[t * 3 + 1] = t * 3 + 1; indices[t * 3 + 2] = t * 3 + 2;
  }
  return { positions, indices, unit: null, objects: 1, notes: [] };
}

function stlAscii(text) {
  const pos = [];
  let solids = 0, facets = 0, bad = 0;
  const re = /\b(solid|vertex|endloop)\b/gi;
  let m, loop = [];
  const num = /\s*([-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?)/y;
  while ((m = re.exec(text))) {
    const w = m[1].toLowerCase();
    if (w === 'solid') { solids++; continue; }
    if (w === 'endloop') {
      if (loop.length === 9) { pos.push(...loop); facets++; if (facets > MAX_TRIS) fail('mesh.err.too_many', { max: MAX_TRIS }); }
      else bad++;
      loop = [];
      continue;
    }
    num.lastIndex = re.lastIndex;
    for (let k = 0; k < 3; k++) {
      const q = num.exec(text);
      if (!q) { bad++; break; }
      loop.push(+q[1]);
    }
    re.lastIndex = num.lastIndex || re.lastIndex;
  }
  if (!facets) fail(bad ? 'mesh.err.stl_bad' : 'mesh.err.empty');
  const positions = Float64Array.from(pos), indices = new Uint32Array(facets * 3).map((_, i) => i);
  const notes = [];
  if (bad) notes.push({ key: 'mesh.note.skipped_facets', vars: { n: bad } });
  return { positions, indices, unit: null, objects: Math.max(1, solids), notes };
}

// ---- OBJ --------------------------------------------------------------------------------------------------------------

/** v / f only (polygons fanned from their first corner; negative indices count back); texture, normals, curves ignored. */
export function readObj(bytes) {
  const text = typeof bytes === 'string' ? bytes : new TextDecoder('utf-8').decode(bytes);
  const pos = [], idx = [];
  let objects = 0, bad = 0, curves = 0;
  let lineStart = 0;
  const L = text.length;
  while (lineStart < L) {
    let end = text.indexOf('\n', lineStart);
    if (end < 0) end = L;
    const line = text.slice(lineStart, end).trim();
    lineStart = end + 1;
    if (!line || line[0] === '#') continue;
    const sp = line.split(/\s+/);
    const k = sp[0];
    if (k === 'v') {
      const x = +sp[1], y = +sp[2], z = +sp[3];
      if (!(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z))) { bad++; pos.push(NaN, NaN, NaN); continue; }
      pos.push(x, y, z);
      if (pos.length / 3 > MAX_TRIS * 3) fail('mesh.err.too_many', { max: MAX_TRIS });
    } else if (k === 'f') {
      const nv = pos.length / 3, c = [];
      for (let i = 1; i < sp.length; i++) {
        let q = parseInt(sp[i], 10);   // "7/2/5" → 7
        if (!Number.isFinite(q) || q === 0) { c.length = 0; break; }
        q = q < 0 ? nv + q : q - 1;
        if (q < 0 || q >= nv) { c.length = 0; break; }
        c.push(q);
      }
      if (c.length < 3) { bad++; continue; }
      for (let i = 1; i + 1 < c.length; i++) idx.push(c[0], c[i], c[i + 1]);
      if (idx.length / 3 > MAX_TRIS) fail('mesh.err.too_many', { max: MAX_TRIS });
    } else if (k === 'o' || k === 'g') objects++;
    else if (k === 'curv' || k === 'surf' || k === 'cstype') curves++;
  }
  if (!idx.length) fail(pos.length ? 'mesh.err.no_faces' : 'mesh.err.empty');
  const notes = [];
  if (bad) notes.push({ key: 'mesh.note.skipped_faces', vars: { n: bad } });
  if (curves) notes.push({ key: 'mesh.note.obj_curves' });
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), unit: null, objects: Math.max(1, objects), notes };
}

// ---- 3MF (a zip of XML parts; the 3MF Core Specification 1.3) ---------------------------------------------------------

/** Entries of a zip archive by name → () => Promise<Uint8Array>. Stored and deflated entries; zip64 and encryption refused. */
export function readZip(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65535); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) fail('mesh.err.zip_bad');
  const count = dv.getUint16(eocd + 10, true), cdSize = dv.getUint32(eocd + 12, true), cdAt = dv.getUint32(eocd + 16, true);
  if (count === 0xffff || cdAt === 0xffffffff) fail('mesh.err.zip64');
  if (cdAt + cdSize > eocd || count > 20000) fail('mesh.err.zip_bad');
  const out = new Map();
  let p = cdAt;
  for (let e = 0; e < count; e++) {
    if (p + 46 > bytes.length || dv.getUint32(p, true) !== 0x02014b50) fail('mesh.err.zip_bad');
    const flags = dv.getUint16(p + 8, true), method = dv.getUint16(p + 10, true);
    const csize = dv.getUint32(p + 20, true), usize = dv.getUint32(p + 24, true);
    const nl = dv.getUint16(p + 28, true), xl = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true);
    const lho = dv.getUint32(p + 42, true);
    if (p + 46 + nl > bytes.length) fail('mesh.err.zip_bad');
    const name = new TextDecoder('utf-8').decode(bytes.subarray(p + 46, p + 46 + nl));
    p += 46 + nl + xl + cl;
    if (flags & 1) fail('mesh.err.zip_encrypted');
    if (lho + 30 > bytes.length || dv.getUint32(lho, true) !== 0x04034b50) fail('mesh.err.zip_bad');
    const start = lho + 30 + dv.getUint16(lho + 26, true) + dv.getUint16(lho + 28, true);
    if (start + csize > bytes.length) fail('mesh.err.zip_cut');
    if (usize > MAX_BYTES) fail('mesh.err.too_big', { mb: Math.round(MAX_BYTES / 1048576) });
    const data = bytes.subarray(start, start + csize);
    out.set(name.replace(/^\/+/, ''), async () => {
      if (method === 0) return data;
      if (method !== 8) fail('mesh.err.zip_method');
      const got = await inflateRaw(data, usize);
      if (got.length !== usize) fail('mesh.err.zip_cut');
      return got;
    });
  }
  return out;
}

async function inflateRaw(data, expect) {
  if (typeof DecompressionStream === 'undefined') fail('mesh.err.zip_method');
  const ds = new DecompressionStream('deflate-raw');
  const w = ds.writable.getWriter();
  w.write(data).catch(() => {}); w.close().catch(() => {});
  const r = ds.readable.getReader(), parts = [];
  let n = 0;
  try {
    for (;;) {
      const { value, done } = await r.read();
      if (done) break;
      n += value.length;
      if (n > expect || n > MAX_BYTES) { r.cancel().catch(() => {}); fail('mesh.err.zip_bad'); }
      parts.push(value);
    }
  } catch (e) { if (e instanceof MeshError) throw e; fail('mesh.err.zip_cut'); }
  const out = new Uint8Array(n);
  let o = 0;
  for (const q of parts) { out.set(q, o); o += q.length; }
  return out;
}

const attrs = (tag) => { const a = {}; for (const m of tag.matchAll(/([\w:]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) a[m[1]] = m[3] ?? m[4]; return a; };
/** A 3MF transform "m00 m01 m02 m10 m11 m12 m20 m21 m22 m30 m31 m32" (row vectors: p' = [x y z 1] · M) → 12 numbers, or null. */
function transform3mf(s) {
  if (s === undefined) return null;
  const v = s.trim().split(/\s+/).map(Number);
  if (v.length !== 12 || !v.every(Number.isFinite)) fail('mesh.err.3mf_bad');
  return v;
}
const IDENT = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
/** a then b (both row-vector 4×3). */
function mul3mf(a, b) {
  const r = new Array(12);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) r[i * 3 + j] = a[i * 3] * b[j] + a[i * 3 + 1] * b[3 + j] + a[i * 3 + 2] * b[6 + j] + (i === 3 ? b[9 + j] : 0);
  return r;
}

export async function read3mf(bytes) {
  const zip = readZip(bytes);
  const text = async (name) => { const f = zip.get(name); if (!f) return null; return new TextDecoder('utf-8').decode(await f()); };
  let root = '3D/3dmodel.model';
  const rels = await text('_rels/.rels');
  if (rels) for (const m of rels.matchAll(/<Relationship\b[^>]*>/g)) { const a = attrs(m[0]); if (/3dmodel$/.test(a.Type || '') && a.Target) root = a.Target.replace(/^\/+/, ''); }
  const models = new Map();   // path → { unit, objects: Map(id → { mesh?, comps? }), build }
  async function model(path) {
    if (models.has(path)) return models.get(path);
    const xml = await text(path);
    if (xml === null) fail(path === root ? 'mesh.err.3mf_no_model' : 'mesh.err.3mf_bad');
    const head = /<model\b[^>]*>/.exec(xml);
    if (!head) fail('mesh.err.3mf_bad');
    const md = { unit: UNIT_3MF[attrs(head[0]).unit || 'millimeter'] || null, objects: new Map(), build: [] };
    if (!md.unit) fail('mesh.err.3mf_unit');
    models.set(path, md);
    for (const om of xml.matchAll(/<object\b([^>]*)>([\s\S]*?)<\/object>/g)) {
      const a = attrs(om[1]);
      const body = om[2], ob = { type: a.type || 'model' };
      const mesh = /<mesh\b[^>]*>([\s\S]*?)<\/mesh>/.exec(body);
      if (mesh) {
        const vs = [], ts = [];
        for (const v of mesh[1].matchAll(/<vertex\b([^>]*?)\/?>/g)) { const q = attrs(v[1]); vs.push(+q.x, +q.y, +q.z); }
        const nv = vs.length / 3;
        for (const tr of mesh[1].matchAll(/<triangle\b([^>]*?)\/?>/g)) {
          const q = attrs(tr[1]);
          const i = [q.v1, q.v2, q.v3].map((x) => (/^\d+$/.test(x || '') ? +x : -1));
          if (i.some((x) => x < 0 || x >= nv)) fail('mesh.err.3mf_bad');
          ts.push(...i);
        }
        if (!vs.every(Number.isFinite)) fail('mesh.err.3mf_bad');
        ob.mesh = { vs, ts };
      }
      const comps = [...body.matchAll(/<component\b([^>]*?)\/?>/g)].map((c) => { const q = attrs(c[1]); return { id: q.objectid, path: (q['p:path'] || '').replace(/^\/+/, '') || null, M: transform3mf(q.transform) }; });
      if (comps.length) ob.comps = comps;
      md.objects.set(a.id, ob);
    }
    const build = /<build\b[^>]*>([\s\S]*?)<\/build>/.exec(xml);
    if (build) for (const it of build[1].matchAll(/<item\b([^>]*?)\/?>/g)) { const q = attrs(it[1]); md.build.push({ id: q.objectid, path: (q['p:path'] || '').replace(/^\/+/, '') || null, M: transform3mf(q.transform) }); }
    return md;
  }
  const top = await model(root);
  if (!top.build.length) fail('mesh.err.3mf_no_items');
  const pos = [], idx = [];
  let objects = 0, skipped = 0;
  const scale = UNITS[top.unit];
  async function place(path, id, M, depth) {
    if (depth > 16) fail('mesh.err.3mf_bad');
    const md = await model(path);
    const ob = md.objects.get(id);
    if (!ob) fail('mesh.err.3mf_bad');
    if (ob.type === 'support' || ob.type === 'surface' || ob.type === 'other') { skipped++; return; }   // not part of the solid
    const s = UNITS[md.unit] / scale;   // a part file in another unit, in the root's
    if (ob.mesh) {
      objects++;
      const base = pos.length / 3, { vs, ts } = ob.mesh;
      for (let i = 0; i < vs.length; i += 3) {
        const x = vs[i] * s, y = vs[i + 1] * s, z = vs[i + 2] * s;
        pos.push(x * M[0] + y * M[3] + z * M[6] + M[9], x * M[1] + y * M[4] + z * M[7] + M[10], x * M[2] + y * M[5] + z * M[8] + M[11]);
      }
      for (const v of ts) idx.push(base + v);
      if (idx.length / 3 > MAX_TRIS) fail('mesh.err.too_many', { max: MAX_TRIS });
    }
    for (const c of ob.comps || []) await place(c.path || path, c.id, c.M ? mul3mf(c.M, M) : M, depth + 1);
  }
  for (const it of top.build) await place(it.path || root, it.id, it.M || IDENT, 0);
  if (!idx.length) fail('mesh.err.empty');
  const notes = [];
  if (skipped) notes.push({ key: 'mesh.note.3mf_skipped', vars: { n: skipped } });
  return { positions: Float64Array.from(pos), indices: Uint32Array.from(idx), unit: top.unit, objects, notes };
}

// ---- repair -----------------------------------------------------------------------------------------------------------

function sizeOf(P) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { const v = P[i + k]; if (v < lo[k]) lo[k] = v; if (v > hi[k]) hi[k] = v; }
  return { lo, hi, size: Math.max(1e-12, Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2])) };
}

/** Merge points within tol. A grid of 4·tol cells keyed by a numeric hash (collisions only cost a distance check); a point
 *  looks into a neighbouring cell only on the sides it is within tol of, so most points look into one cell. Old → new index. */
function weld(P, tol, only = null) {
  const n = P.length / 3, map = new Int32Array(n).map((_, i) => i);
  const cell = Math.max(4 * tol, 1e-300), grid = new Map();
  const key = (x, y, z) => (Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791)) | 0;
  const near = [[0], [0], [0]];
  for (let i = 0; i < n; i++) {
    if (only && !only[i]) continue;
    const p = [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]], c = p.map((v) => Math.floor(v / cell));
    for (let k = 0; k < 3; k++) {
      const off = p[k] - c[k] * cell;
      near[k] = off < tol ? (cell - off < tol ? [0, -1, 1] : [0, -1]) : cell - off < tol ? [0, 1] : [0];
    }
    let hit = -1, best = tol * tol;
    for (const dx of near[0]) for (const dy of near[1]) for (const dz of near[2]) {
      const l = grid.get(key(c[0] + dx, c[1] + dy, c[2] + dz));
      if (!l) continue;
      for (const j of l) { const d = (P[j * 3] - p[0]) ** 2 + (P[j * 3 + 1] - p[1]) ** 2 + (P[j * 3 + 2] - p[2]) ** 2; if (d <= best && (hit < 0 || d < best || j < hit)) { best = d; hit = j; } }
    }
    if (hit >= 0) { map[i] = hit; continue; }
    const k = key(c[0], c[1], c[2]), l = grid.get(k);
    if (l) l.push(i); else grid.set(k, [i]);
  }
  return map;
}

const ekey = (u, v) => (u < v ? u * 4294967296 + v : v * 4294967296 + u);

/** Directed boundary half-edges (u → v with no v → u) and edges used by more than two triangles. */
function edgeCensus(I) {
  const und = new Map(), dir = new Set();
  for (let t = 0; t < I.length / 3; t++) for (let k = 0; k < 3; k++) {
    const u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3], key = ekey(u, v);
    und.set(key, (und.get(key) || 0) + 1);
    dir.add(u * 4294967296 + v);
  }
  const open = [];
  let nonManifold = 0;
  for (const [key, c] of und) {
    if (c > 2) { nonManifold++; continue; }
    if (c !== 1) continue;
    const a = Math.floor(key / 4294967296), b = key % 4294967296;
    open.push(dir.has(a * 4294967296 + b) ? [a, b] : [b, a]);
  }
  return { open, nonManifold };
}

/** Drop triangles with a repeated corner or no area, and doubled ones (two the same way: one kept; opposite ways: both go). */
function cleanTris(P, I, areaTol) {
  const out = [], seen = new Map();
  let degenerate = 0, duplicates = 0;
  for (let t = 0; t < I.length / 3; t++) {
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    if (a === b || b === c || a === c) { degenerate++; continue; }
    const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2];
    const vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
    const ar = Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
    if (!(ar > areaTol)) { degenerate++; continue; }
    const s = [a, b, c].sort((x, y) => x - y), k = s.join(',');
    const par = ((a < b) + (b < c) + (c < a)) & 1;   // which way round, independent of the starting corner
    const prev = seen.get(k);
    if (prev) { duplicates++; if (prev.par !== par) prev.gone = true; continue; }
    const rec = { tri: [a, b, c], par, gone: false };
    seen.set(k, rec); out.push(rec);
  }
  const keep = [];
  for (const r of out) { if (r.gone) { duplicates++; continue; } keep.push(...r.tri); }
  return { I: Uint32Array.from(keep), degenerate, duplicates };
}

/** Boundary half-edges chained into loops (each walks u → v → …); edges at a pinch point may end in an open chain (skipped). */
function boundaryLoops(open) {
  const next = new Map();
  for (const [u, v] of open) { const l = next.get(u); if (l) l.push(v); else next.set(u, [v]); }
  const used = new Set(), loops = [];
  for (const [u0, v0] of open) {
    const k0 = u0 * 4294967296 + v0;
    if (used.has(k0)) continue;
    const loop = [u0];
    let u = u0, v = v0, ok = false;
    for (let guard = 0; guard < open.length + 1; guard++) {
      used.add(u * 4294967296 + v);
      if (v === u0) { ok = true; break; }
      loop.push(v);
      const nx = (next.get(v) || []).find((w) => !used.has(v * 4294967296 + w));
      if (nx === undefined) break;
      u = v; v = nx;
    }
    if (ok && loop.length >= 3) loops.push(loop);
  }
  return loops;
}

/** Triangles closing a loop: ear clipping in the loop's best plane; a centre fan when the projection folds. The loop runs the
 *  way its own triangles' edges run, so the new ones go the other way round. */
function fillLoop(P, loop, addPoint) {
  const pts = loop.map((i) => [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]]);
  const n = [0, 0, 0];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]);
  }
  const nl = Math.hypot(...n);
  const tris = [];
  if (nl > 0) {
    const N = n.map((x) => x / nl), ax = Math.abs(N[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
    const X = [N[1] * ax[2] - N[2] * ax[1], N[2] * ax[0] - N[0] * ax[2], N[0] * ax[1] - N[1] * ax[0]], xl = Math.hypot(...X);
    for (let k = 0; k < 3; k++) X[k] /= xl;
    const Y = [N[1] * X[2] - N[2] * X[1], N[2] * X[0] - N[0] * X[2], N[0] * X[1] - N[1] * X[0]];
    // the loop as its triangles' edges walk it: clockwise seen from outside the hole's fill, so reversed for a CCW polygon
    const q = pts.map((p) => [p[0] * X[0] + p[1] * X[1] + p[2] * X[2], p[0] * Y[0] + p[1] * Y[1] + p[2] * Y[2]]).reverse();
    const ids = loop.slice().reverse();
    let area = 0;
    for (let i = 0; i < q.length; i++) { const a = q[i], b = q[(i + 1) % q.length]; area += a[0] * b[1] - b[0] * a[1]; }
    if (area < 0) { q.reverse(); ids.reverse(); }
    const flip = area < 0;
    const live = q.map((_, i) => i);
    const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    let guard = 0;
    while (live.length > 3 && guard++ < 4 * q.length * q.length) {
      let cut = -1;
      for (let i = 0; i < live.length; i++) {
        const ia = live[(i + live.length - 1) % live.length], ib = live[i], ic = live[(i + 1) % live.length];
        const a = q[ia], b = q[ib], c = q[ic];
        if (cross(a, b, c) <= 0) continue;
        let inside = false;
        for (const j of live) {
          if (j === ia || j === ib || j === ic) continue;
          const p = q[j];
          if (cross(a, b, p) >= 0 && cross(b, c, p) >= 0 && cross(c, a, p) >= 0) { inside = true; break; }
        }
        if (!inside) { cut = i; break; }
      }
      if (cut < 0) { tris.length = 0; break; }
      const ia = live[(cut + live.length - 1) % live.length], ib = live[cut], ic = live[(cut + 1) % live.length];
      tris.push(flip ? [ids[ic], ids[ib], ids[ia]] : [ids[ia], ids[ib], ids[ic]]);
      live.splice(cut, 1);
    }
    if (live.length === 3 && (tris.length || q.length === 3)) { const [ia, ib, ic] = live; tris.push(flip ? [ids[ic], ids[ib], ids[ia]] : [ids[ia], ids[ib], ids[ic]]); return tris; }
  }
  // a fan from the loop's centre (a warped or self-crossing hole)
  const c = pts.reduce((s, p) => [s[0] + p[0], s[1] + p[1], s[2] + p[2]], [0, 0, 0]).map((x) => x / pts.length);
  const ci = addPoint(c);
  const out = [];
  for (let i = 0; i < loop.length; i++) out.push([loop[(i + 1) % loop.length], loop[i], ci]);
  return out;
}

/** Every point of the loop within tol of the loop's own best plane (Newell normal through its centre). */
function flatLoop(P, loop, tol) {
  const pts = loop.map((i) => [P[i * 3], P[i * 3 + 1], P[i * 3 + 2]]);
  const n = [0, 0, 0], c = [0, 0, 0];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    n[0] += (a[1] - b[1]) * (a[2] + b[2]); n[1] += (a[2] - b[2]) * (a[0] + b[0]); n[2] += (a[0] - b[0]) * (a[1] + b[1]);
    for (let k = 0; k < 3; k++) c[k] += a[k] / pts.length;
  }
  const l = Math.hypot(...n);
  if (!(l > 0)) return false;
  return pts.every((p) => Math.abs((p[0] - c[0]) * n[0] + (p[1] - c[1]) * n[1] + (p[2] - c[2]) * n[2]) / l <= tol);
}

/** Turn triangles so neighbours agree (an edge is walked once each way), then each closed shell so it encloses volume. */
function orient(P, I) {
  const nt = I.length / 3, edgeTris = new Map();
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const key = ekey(I[t * 3 + k], I[t * 3 + (k + 1) % 3]);
    const l = edgeTris.get(key);
    if (l) l.push(t); else edgeTris.set(key, [t]);
  }
  const has = (t, u, v) => { for (let k = 0; k < 3; k++) if (I[t * 3 + k] === u && I[t * 3 + (k + 1) % 3] === v) return true; return false; };
  const turned = new Uint8Array(nt);   // net: a triangle turned twice (to agree, then with its shell) is as it came
  const flipT = (t) => { const x = I[t * 3 + 1]; I[t * 3 + 1] = I[t * 3 + 2]; I[t * 3 + 2] = x; turned[t] ^= 1; };
  const shell = new Int32Array(nt).fill(-1);
  let shells = 0;
  const shellTris = [];
  for (let s0 = 0; s0 < nt; s0++) {
    if (shell[s0] >= 0) continue;
    const id = shells++, list = [s0], q = [s0];
    shell[s0] = id;
    while (q.length) {
      const t = q.pop();
      for (let k = 0; k < 3; k++) {
        const u = I[t * 3 + k], v = I[t * 3 + (k + 1) % 3];
        const l = edgeTris.get(ekey(u, v));
        if (!l || l.length !== 2) continue;   // open or non-manifold edges do not carry the orientation
        const o = l[0] === t ? l[1] : l[0];
        if (shell[o] >= 0) continue;
        if (has(o, u, v)) flipT(o);
        shell[o] = id; list.push(o); q.push(o);
      }
    }
    shellTris.push(list);
  }
  // signed volume of each shell (about its own first point, so far-off coordinates keep their digits)
  for (const list of shellTris) {
    const o = I[list[0] * 3];
    const ox = P[o * 3], oy = P[o * 3 + 1], oz = P[o * 3 + 2];
    let vol = 0;
    for (const t of list) {
      const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
      const ax = P[a * 3] - ox, ay = P[a * 3 + 1] - oy, az = P[a * 3 + 2] - oz;
      const bx = P[b * 3] - ox, by = P[b * 3 + 1] - oy, bz = P[b * 3 + 2] - oz;
      const cx = P[c * 3] - ox, cy = P[c * 3 + 1] - oy, cz = P[c * 3 + 2] - oz;
      vol += ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx);
    }
    if (vol < 0) for (const t of list) flipT(t);
  }
  let flipped = 0;
  for (let t = 0; t < nt; t++) flipped += turned[t];
  return { flipped, shells };
}

/** Points no triangle uses go; indices renumbered. */
function compact(P, I) {
  const map = new Int32Array(P.length / 3).fill(-1);
  const pos = [];
  const out = new Uint32Array(I.length);
  for (let i = 0; i < I.length; i++) {
    const v = I[i];
    if (map[v] < 0) { map[v] = pos.length / 3; pos.push(P[v * 3], P[v * 3 + 1], P[v * 3 + 2]); }
    out[i] = map[v];
  }
  return { P: Float64Array.from(pos), I: out };
}

export const HOLE_MAX_EDGES = 2000;    // holes up to this many edges are filled
export const HOLE_MAX_SPAN = 0.25;     // … and no wider than this share of the mesh's size

export function repairMesh({ positions, indices }, { gap = null } = {}) {
  let P = positions, I = indices;
  const report = { vertices: 0, triangles: 0, welded: 0, degenerate: 0, duplicates: 0, gapsClosed: 0, holesFilled: 0, holesLeft: 0, openEdges: 0, nonManifold: 0, flipped: 0, shells: 0, closed: false };
  // points that are not numbers: their triangles go
  const badPt = new Uint8Array(P.length / 3);
  for (let i = 0; i < P.length / 3; i++) if (!(Number.isFinite(P[i * 3]) && Number.isFinite(P[i * 3 + 1]) && Number.isFinite(P[i * 3 + 2]))) badPt[i] = 1;
  if (badPt.includes(1)) {
    const keep = [];
    for (let t = 0; t < I.length / 3; t++) if (!badPt[I[t * 3]] && !badPt[I[t * 3 + 1]] && !badPt[I[t * 3 + 2]]) keep.push(I[t * 3], I[t * 3 + 1], I[t * 3 + 2]); else report.degenerate++;
    I = Uint32Array.from(keep);
    const fin = new Float64Array(P);
    for (let i = 0; i < badPt.length; i++) if (badPt[i]) fin[i * 3] = fin[i * 3 + 1] = fin[i * 3 + 2] = 0;
    P = fin;
  }
  if (!I.length) fail('mesh.err.empty');
  const { size } = sizeOf(compact(P, I).P);
  const exact = 1e-7 * size, gapTol = gap === null ? 1e-3 * size : gap;
  // 1. weld coincident corners (an STL repeats every corner for every triangle)
  {
    const map = weld(P, exact);
    let merged = 0;
    for (let i = 0; i < map.length; i++) if (map[i] !== i) merged++;
    report.welded = merged;
    I = I.map((v) => map[v]);
    const c = compact(P, I); P = c.P; I = c.I;
  }
  const areaTol = 1e-14 * size * size;
  let cl = cleanTris(P, I, areaTol);
  I = cl.I; report.degenerate += cl.degenerate; report.duplicates += cl.duplicates;
  // 2. small gaps: boundary points within gapTol of another boundary point are merged
  let census = edgeCensus(I);
  if (census.open.length && gapTol > exact) {
    const onEdge = new Uint8Array(P.length / 3);
    for (const [u, v] of census.open) { onEdge[u] = 1; onEdge[v] = 1; }
    const map = weld(P, gapTol, onEdge);
    let merged = 0;
    for (let i = 0; i < map.length; i++) if (map[i] !== i) merged++;
    if (merged) {
      I = I.map((v) => map[v]);
      cl = cleanTris(P, I, areaTol); I = cl.I; report.degenerate += cl.degenerate; report.duplicates += cl.duplicates;
      const before = census.open.length;
      census = edgeCensus(I);
      report.gapsClosed = Math.max(0, before - census.open.length);
    }
  }
  // 3. orient first, so every hole's border runs one way round; then holes small enough are filled (each fill is made to
  // agree with its border), and the shells oriented again now that they are closed
  const o1 = orient(P, I);
  census = edgeCensus(I);
  if (census.open.length) {
    const pos = Array.from(P);
    const addPoint = (p) => { pos.push(p[0], p[1], p[2]); return pos.length / 3 - 1; };
    const extra = [];
    const loops = boundaryLoops(census.open);
    // two flat borders in one plane (a ring-shaped face gone: its outside and its hole) would each be filled over the hole:
    // left open and reported instead
    const planeOf = (loop) => {
      if (!flatLoop(P, loop, 1e-5 * size)) return null;
      const n = [0, 0, 0], c = [0, 0, 0];
      for (let i = 0; i < loop.length; i++) {
        const a = loop[i] * 3, b = loop[(i + 1) % loop.length] * 3;
        n[0] += (P[a + 1] - P[b + 1]) * (P[a + 2] + P[b + 2]); n[1] += (P[a + 2] - P[b + 2]) * (P[a] + P[b]); n[2] += (P[a] - P[b]) * (P[a + 1] + P[b + 1]);
        for (let k = 0; k < 3; k++) c[k] += P[a + k] / loop.length;
      }
      const l = Math.hypot(...n);
      return { n: n.map((x) => x / l), c };
    };
    const planes = loops.map(planeOf);
    const shared = loops.map((_, i) => !!planes[i] && planes.some((q, j) => j !== i && q && Math.abs(Math.abs(q.n[0] * planes[i].n[0] + q.n[1] * planes[i].n[1] + q.n[2] * planes[i].n[2]) - 1) < 1e-6
      && Math.abs((q.c[0] - planes[i].c[0]) * q.n[0] + (q.c[1] - planes[i].c[1]) * q.n[1] + (q.c[2] - planes[i].c[2]) * q.n[2]) <= 1e-5 * size));
    for (const [li, loop] of loops.entries()) {
      if (shared[li]) { report.holesLeft++; continue; }
      let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
      for (const v of loop) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], P[v * 3 + k]); hi[k] = Math.max(hi[k], P[v * 3 + k]); }
      const span = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]);
      // a flat border is filled whatever its size (the missing face is exactly that flat region); a warped one only when small
      if (loop.length > HOLE_MAX_EDGES || (span > HOLE_MAX_SPAN * size && !flatLoop(P, loop, 1e-5 * size))) { report.holesLeft++; continue; }
      for (const tr of fillLoop(P, loop, addPoint)) extra.push(...tr);
      report.holesFilled++;
    }
    if (extra.length) {
      P = Float64Array.from(pos);
      const all = new Uint32Array(I.length + extra.length);
      all.set(I); all.set(extra, I.length);
      cl = cleanTris(P, all, areaTol); I = cl.I;
      census = edgeCensus(I);
    }
  }
  // holes the loop walk could not close (pinched boundaries) count too
  if (census.open.length && !report.holesLeft) report.holesLeft = Math.max(1, boundaryLoops(census.open).length);
  const o = orient(P, I);
  report.flipped = o1.flipped + o.flipped; report.shells = o.shells;
  const c = compact(P, I); P = c.P; I = c.I;
  report.openEdges = census.open.length; report.nonManifold = census.nonManifold;
  report.vertices = P.length / 3; report.triangles = I.length / 3;
  report.closed = !census.open.length && !census.nonManifold;
  return { positions: P, indices: I, report };
}

// ---- flat faces -------------------------------------------------------------------------------------------------------

export const FLAT_ANGLE = 0.05;   // degrees between neighbouring triangles' normals on one flat face
export const SHARP_ANGLE = 20;    // degrees: a flat face's border is mostly edges at least this sharp
export const MAX_FLATS = 2000;    // named flat faces kept (the largest)

export function planarRegions(P, I) {
  const nt = I.length / 3, { size } = sizeOf(P);
  const tol = 2e-6 * size + 1e-7, cosA = Math.cos(FLAT_ANGLE * Math.PI / 180);
  const N = new Float64Array(nt * 3), A = new Float64Array(nt);
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2];
    const vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, l = Math.hypot(nx, ny, nz);
    A[t] = l / 2;
    if (l > 0) { N[t * 3] = nx / l; N[t * 3 + 1] = ny / l; N[t * 3 + 2] = nz / l; }
  }
  const parent = new Int32Array(nt).map((_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  const edgeTris = new Map();   // edge → [t] or [t, s] (a third triangle on an edge makes it −1: not a face border we can judge)
  for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) {
    const key = ekey(I[t * 3 + k], I[t * 3 + (k + 1) % 3]);
    const l = edgeTris.get(key);
    if (l === undefined) { edgeTris.set(key, [t]); continue; }
    if (l === -1) continue;
    if (l.length === 2) { edgeTris.set(key, -1); continue; }
    l.push(t);
    const s = l[0];
    const d = N[s * 3] * N[t * 3] + N[s * 3 + 1] * N[t * 3 + 1] + N[s * 3 + 2] * N[t * 3 + 2];
    if (d < cosA) continue;
    // the other triangle's corners on this one's plane
    const o = I[s * 3];
    let ok = true;
    for (let q = 0; q < 3 && ok; q++) { const v = I[t * 3 + q]; ok = Math.abs((P[v * 3] - P[o * 3]) * N[s * 3] + (P[v * 3 + 1] - P[o * 3 + 1]) * N[s * 3 + 1] + (P[v * 3 + 2] - P[o * 3 + 2]) * N[s * 3 + 2]) <= tol; }
    if (ok) { const rs = find(s), rt = find(t); if (rs !== rt) parent[rs] = rt; }
  }
  // each region's border: how much of its length is a sharp edge (≥ SHARP_ANGLE, or open). A facet of a round surface meets its
  // neighbours at a few degrees along its long sides, so it is not a face; a real flat face is bounded mostly by sharp edges.
  const cosS = Math.cos(SHARP_ANGLE * Math.PI / 180);
  const border = new Map();   // region root → [sharp length, all length]
  const addB = (r, len, sharp) => { let b = border.get(r); if (!b) border.set(r, (b = [0, 0])); b[1] += len; if (sharp) b[0] += len; };
  for (const [key, l] of edgeTris) {
    const u = Math.floor(key / 4294967296), v = key % 4294967296;
    const len = Math.hypot(P[u * 3] - P[v * 3], P[u * 3 + 1] - P[v * 3 + 1], P[u * 3 + 2] - P[v * 3 + 2]);
    if (l === -1) continue;
    if (l.length === 1) { addB(find(l[0]), len, true); continue; }
    const [s, t] = l, rs = find(s), rt = find(t);
    if (rs === rt) continue;
    const sharp = N[s * 3] * N[t * 3] + N[s * 3 + 1] * N[t * 3 + 1] + N[s * 3 + 2] * N[t * 3 + 2] < cosS;
    addB(rs, len, sharp); addB(rt, len, sharp);
  }
  // regions: area-weighted normal and centre, then every corner checked against that plane (a slow curve can chain along)
  const reg = new Map();
  for (let t = 0; t < nt; t++) {
    const r = find(t);
    let g = reg.get(r);
    if (!g) reg.set(r, (g = { tris: [], area: 0, n: [0, 0, 0], c: [0, 0, 0] }));
    g.tris.push(t); g.area += A[t];
    for (let k = 0; k < 3; k++) { g.n[k] += N[t * 3 + k] * A[t]; g.c[k] += (P[I[t * 3] * 3 + k] + P[I[t * 3 + 1] * 3 + k] + P[I[t * 3 + 2] * 3 + k]) / 3 * A[t]; }
  }
  const flats = [];
  for (const [root, g] of reg) {
    if (!(g.area > 0)) continue;
    const b = border.get(root);
    if (b && b[1] > 0 && b[0] < 0.5 * b[1]) continue;
    const nl = Math.hypot(...g.n);
    if (!(nl > 0)) continue;
    const n = g.n.map((x) => x / nl), c = g.c.map((x) => x / g.area);
    let ok = true;
    for (const t of g.tris) { for (let q = 0; q < 3 && ok; q++) { const v = I[t * 3 + q]; ok = Math.abs((P[v * 3] - c[0]) * n[0] + (P[v * 3 + 1] - c[1]) * n[1] + (P[v * 3 + 2] - c[2]) * n[2]) <= 4 * tol; } if (!ok) break; }
    if (ok) flats.push({ n, c, area: g.area, tris: g.tris });
  }
  // regions on one plane share an index (a face split by a boss is still one plane for a sketch)
  flats.sort((a, b) => b.area - a.area || a.c[0] - b.c[0] || a.c[1] - b.c[1] || a.c[2] - b.c[2]);
  const planes = [], triPlane = new Int32Array(nt).fill(-1);
  for (const f of flats) {
    let k = planes.findIndex((p) => p.n[0] * f.n[0] + p.n[1] * f.n[1] + p.n[2] * f.n[2] > cosA && Math.abs((f.c[0] - p.o[0]) * p.n[0] + (f.c[1] - p.o[1]) * p.n[1] + (f.c[2] - p.o[2]) * p.n[2]) <= 4 * tol);
    if (k < 0) {
      if (planes.length >= MAX_FLATS) continue;
      k = planes.length;
      planes.push({ n: f.n, o: f.c, area: 0, tris: 0 });
    }
    planes[k].area += f.area; planes[k].tris += f.tris.length;
    for (const t of f.tris) triPlane[t] = k;
  }
  return { triPlane, planes };
}

// ---- kept in the part file --------------------------------------------------------------------------------------------

function toB64(u8) {
  let s = '';
  for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000));
  return btoa(s);
}
function fromB64(s) {
  const bin = atob(s), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
const littleEndian = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
function leBytes(typed) {
  const u8 = new Uint8Array(typed.buffer, typed.byteOffset, typed.byteLength);
  if (littleEndian) return u8;
  const out = new Uint8Array(u8.length);
  for (let i = 0; i < u8.length; i += 4) { out[i] = u8[i + 3]; out[i + 1] = u8[i + 2]; out[i + 2] = u8[i + 1]; out[i + 3] = u8[i]; }
  return out;
}

export function encodeMesh({ positions, indices }) {
  return { nv: positions.length / 3, nt: indices.length / 3, v: toB64(leBytes(Float32Array.from(positions))), i: toB64(leBytes(Uint32Array.from(indices))) };
}

/** The mesh a part file keeps, checked (untrusted): counts against the data, every index in range, every number finite. */
export function decodeMesh(m) {
  if (!m || typeof m !== 'object' || !Number.isInteger(m.nv) || !Number.isInteger(m.nt) || m.nv < 3 || m.nt < 1 || m.nt > MAX_TRIS || m.nv > 3 * MAX_TRIS) fail('mesh.err.kept_bad');
  if (typeof m.v !== 'string' || typeof m.i !== 'string' || m.v.length !== 4 * Math.ceil(m.nv * 12 / 3) || m.i.length !== 4 * Math.ceil(m.nt * 12 / 3)) fail('mesh.err.kept_bad');
  let vb, ib;
  try { vb = fromB64(m.v); ib = fromB64(m.i); } catch { fail('mesh.err.kept_bad'); }
  if (vb.length !== m.nv * 12 || ib.length !== m.nt * 12) fail('mesh.err.kept_bad');
  const dv = new DataView(vb.buffer), di = new DataView(ib.buffer);
  const positions = new Float32Array(m.nv * 3), indices = new Uint32Array(m.nt * 3);
  for (let k = 0; k < positions.length; k++) { const x = dv.getFloat32(k * 4, true); if (!Number.isFinite(x)) fail('mesh.err.kept_bad'); positions[k] = x; }
  for (let k = 0; k < indices.length; k++) { const x = di.getUint32(k * 4, true); if (x >= m.nv) fail('mesh.err.kept_bad'); indices[k] = x; }
  return { positions, indices };
}

/** decodeMesh plus its flat faces, kept for the last few meshes (a rebuild decodes nothing it decoded before). */
const decoded = new Map();
export function meshOf(m) {
  const key = m.v;
  let d = decoded.get(key);
  if (d && d.i === m.i) { decoded.delete(key); decoded.set(key, d); return d.mesh; }
  const mesh = decodeMesh(m);
  mesh.flats = planarRegions(mesh.positions, mesh.indices);
  decoded.set(key, { i: m.i, mesh });
  while (decoded.size > 4) decoded.delete(decoded.keys().next().value);
  return mesh;
}

/** The repair report as it is kept beside the mesh (numbers only, checked when read). */
export const REPORT_KEYS = ['vertices', 'triangles', 'welded', 'degenerate', 'duplicates', 'gapsClosed', 'holesFilled', 'holesLeft', 'openEdges', 'nonManifold', 'flipped', 'shells'];
export function readReport(r) {
  if (!r || typeof r !== 'object') return null;
  const out = {};
  for (const k of REPORT_KEYS) { const v = r[k]; out[k] = Number.isInteger(v) && v >= 0 && v <= 1e9 ? v : 0; }
  out.closed = r.closed === true;
  return out;
}

/** Everything the import says about a file, for the dialog and the status line: [{ key, vars }] (lang keys). */
export function reportLines(report, notes = []) {
  const out = [...notes];
  const add = (key, n) => { if (n) out.push({ key, vars: { n } }); };
  add('mesh.rep.welded', report.welded);
  add('mesh.rep.degenerate', report.degenerate);
  add('mesh.rep.duplicates', report.duplicates);
  add('mesh.rep.gaps', report.gapsClosed);
  add('mesh.rep.holes', report.holesFilled);
  add('mesh.rep.flipped', report.flipped);
  if (report.shells > 1) out.push({ key: 'mesh.rep.shells', vars: { n: report.shells } });
  if (!report.closed) {
    if (report.holesLeft) out.push({ key: 'mesh.rep.holes_left', vars: { n: report.holesLeft, edges: report.openEdges } });
    else if (report.openEdges) out.push({ key: 'mesh.rep.open_edges', vars: { n: report.openEdges } });
    if (report.nonManifold) out.push({ key: 'mesh.rep.non_manifold', vars: { n: report.nonManifold } });
  }
  return out;
}

/** A STEP file read by cc-step (step/read.js readStep, 0.7 D7.26) as one mesh in mm, shaped like readMeshFile's answer: every
 *  solid's triangles together (repairMesh welds them), the reader's notes, and the read itself as `step` for the dialog. */
export function meshFromStep(r) {
  let n = 0, t = 0;
  for (const s of r.solids) { n += s.positions.length; t += s.indices.length; }
  if (t / 3 > MAX_TRIS) throw new MeshError('mesh.err.too_many', { max: MAX_TRIS });
  const positions = new Float64Array(n), indices = new Uint32Array(t);
  let pn = 0, ti = 0;
  for (const s of r.solids) {
    const base = pn / 3;
    positions.set(s.positions, pn);
    for (let i = 0; i < s.indices.length; i++) indices[ti++] = base + s.indices[i];
    pn += s.positions.length;
  }
  return { positions, indices, format: 'step', unit: 'mm', notes: r.notes.slice(), step: r };
}

function latin1(u8) { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return s; }

export { MeshError };
