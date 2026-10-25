/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/import.js — a product from a 3D file, for a new manual (0.7 TP.2; DOM-free; imports only m4.js and zip.js).
 * Unlike a solid-body import (meshimport.js flattens a file into one mesh), a manual keeps the file's tree and names, and
 * recognises copies of one part: the same geometry placed twice is one part (one parts-list row, quantity 2).
 *
 *   readProduct(bytes, name, { unit, up }) → Promise<product>          throws ImportError (code → 'illustrate.import.err.<code>')
 *   product = { kind ('gltf'|'obj'|'stl'|'3mf'), name, parts: Map(pid → { name, mesh }), instances: [{ id, part, name, group,
 *               matrix }], groups: [{ id, name, parent }], notes: [{ key, vars }] }
 *   sameParts(product, { tol }) → { product (copies folded into one part), folded (copies found) }
 *   splitShells(mesh) → [mesh]   the separate pieces of a mesh (triangles that share no corner, after welding)
 *
 * Formats (published specs only): glTF 2.0 / GLB (Khronos glTF 2.0 specification: nodes, meshes, accessors incl. normalized
 * integers, data: URI and GLB buffers; metres → mm; Y up), OBJ (v/f with o/g names; polygons fanned), STL (binary and ASCII,
 * several solids; each solid split into its shells), 3MF (3MF Core Specification 1.3: objects, components, build items and
 * their transforms, unit; Z up → Y up). Untrusted: offsets, counts, indices and numbers are checked; caps below.
 * Units: glTF says metres, 3MF says its unit; STL and OBJ say nothing (opts.unit, mm by default). Up: glTF is Y up, 3MF is Z
 * up; STL (default 'z', as printers use) and OBJ (default 'y') follow opts.up.
 */
import { IDENT, apply, matMul, rigidFit } from './m4.js';
import { readZip, ZipError } from './zip.js';
import { newManual } from './manual.js';

export class ImportError extends Error { constructor(code, vars = {}) { super(code); this.name = 'ImportError'; this.code = code; this.vars = vars; } }
const fail = (code, vars) => { throw new ImportError(code, vars); };
export const CAPS = Object.freeze({ bytes: 512 * 1024 * 1024, tris: 6_000_000, nodes: 200_000, instances: 20_000, depth: 32 });
export const UNITS = { um: 0.001, mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 };
const Z_TO_Y = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];   // (x, y, z) Z up → (x, z, −y) Y up
const scaleM = (s) => [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1];
const clean = (s, max = 120) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);

/** The format by name, then by the first bytes; null when none of ours. */
export function productFormat(name, bytes) {
  const m = /\.(gltf|glb|obj|stl|3mf)$/i.exec(name || '');
  if (m) return m[1].toLowerCase() === 'glb' ? 'gltf' : m[1].toLowerCase();
  if (bytes && bytes.length >= 4) {
    if (bytes[0] === 0x67 && bytes[1] === 0x6c && bytes[2] === 0x54 && bytes[3] === 0x46) return 'gltf';   // "glTF"
    if (bytes[0] === 0x50 && bytes[1] === 0x4b) return '3mf';
  }
  return null;
}

export async function readProduct(bytes, name = '', { unit = 'mm', up = null } = {}) {
  if (!(bytes instanceof Uint8Array)) bytes = new Uint8Array(bytes);
  if (bytes.length > CAPS.bytes) fail('too_big');
  if (!bytes.length) fail('empty');
  const kind = productFormat(name, bytes);
  const base = clean(String(name).replace(/\.[^.]+$/, '')) || 'Model';
  let p;
  if (kind === 'gltf') p = readGltf(bytes);
  else if (kind === 'obj') p = readObjProduct(bytes, { scale: UNITS[unit] ?? 1, up: up || 'y' });
  else if (kind === 'stl') p = readStlProduct(bytes, { scale: UNITS[unit] ?? 1, up: up || 'z', base });
  else if (kind === '3mf') p = await read3mfProduct(bytes);
  else fail('unknown_kind');
  if (!p.instances.length) fail('empty');
  return { kind, name: base, ...p };
}

// ---------------------------------------------------------------------------------------------- shared helpers
function meshFrom(pos, idx) {
  const positions = Float32Array.from(pos), indices = Uint32Array.from(idx);
  for (let i = 0; i < positions.length; i++) if (!Number.isFinite(positions[i]) || Math.abs(positions[i]) > 1e7) fail('bad_numbers');
  return { positions, indices };
}
/** Keep only the corners the triangles use (OBJ objects share one vertex list). */
function compact(P, I) {
  const map = new Map(), pos = [], idx = new Array(I.length);
  for (let k = 0; k < I.length; k++) {
    let j = map.get(I[k]);
    if (j === undefined) { j = pos.length / 3; map.set(I[k], j); pos.push(P[I[k] * 3], P[I[k] * 3 + 1], P[I[k] * 3 + 2]); }
    idx[k] = j;
  }
  return { pos, idx };
}
function transformPositions(pos, M) {
  const out = new Array(pos.length);
  for (let i = 0; i < pos.length; i += 3) { const q = apply(M, [pos[i], pos[i + 1], pos[i + 2]]); out[i] = q[0]; out[i + 1] = q[1]; out[i + 2] = q[2]; }
  return out;
}

/** The separate pieces of a mesh: triangles joined through shared (welded) corners. */
export function splitShells(mesh) {
  const P = mesh.positions, I = mesh.indices, nv = P.length / 3, nt = I.length / 3;
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < P.length; i++) { if (P[i] < lo) lo = P[i]; if (P[i] > hi) hi = P[i]; }
  const q = Math.max(hi - lo, 1e-9) * 1e-7;
  const weld = new Int32Array(nv), seen = new Map();
  for (let i = 0; i < nv; i++) { const key = Math.round(P[i * 3] / q) + ',' + Math.round(P[i * 3 + 1] / q) + ',' + Math.round(P[i * 3 + 2] / q); let w = seen.get(key); if (w === undefined) { w = i; seen.set(key, i); } weld[i] = w; }
  const parent = new Int32Array(nv).map((_, i) => i);
  const find = (x) => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  for (let t = 0; t < nt; t++) { const a = find(weld[I[t * 3]]), b = find(weld[I[t * 3 + 1]]), c = find(weld[I[t * 3 + 2]]); parent[b] = a; parent[find(c)] = a; }
  const groups = new Map();
  for (let t = 0; t < nt; t++) { const r = find(weld[I[t * 3]]); (groups.get(r) || groups.set(r, []).get(r)).push(t); }
  if (groups.size <= 1) return [mesh];
  return [...groups.values()].map((tris) => {
    const idx = [];
    for (const t of tris) idx.push(I[t * 3], I[t * 3 + 1], I[t * 3 + 2]);
    const c = compact(P, idx);
    return { positions: Float32Array.from(c.pos), indices: Uint32Array.from(c.idx) };
  });
}

// ---------------------------------------------------------------------------------------------- glTF 2.0 / GLB
const COMP = { 5120: [Int8Array, 1, 127], 5121: [Uint8Array, 1, 255], 5122: [Int16Array, 2, 32767], 5123: [Uint16Array, 2, 65535], 5125: [Uint32Array, 4, 0], 5126: [Float32Array, 4, 0] };
const NCOMP = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 };

function readGltf(bytes) {
  let json, bin = null;
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (bytes.length >= 12 && dv.getUint32(0, true) === 0x46546c67) {
    if (dv.getUint32(4, true) !== 2) fail('gltf_version');
    const total = Math.min(dv.getUint32(8, true), bytes.length);
    let p = 12;
    while (p + 8 <= total) {
      const len = dv.getUint32(p, true), type = dv.getUint32(p + 4, true);
      if (p + 8 + len > total) fail('cut_off');
      const chunk = bytes.subarray(p + 8, p + 8 + len);
      if (type === 0x4e4f534a && json === undefined) json = parseJson(chunk);
      else if (type === 0x004e4942 && !bin) bin = chunk;
      p += 8 + len + ((4 - (len % 4)) % 4);
    }
    if (json === undefined) fail('gltf_bad');
  } else json = parseJson(bytes);
  const g = json;
  if (!g || typeof g !== 'object' || !g.asset || !/^2\./.test(String(g.asset.version || ''))) fail('gltf_version');
  const notes = [];
  const arr = (x) => (Array.isArray(x) ? x : []);
  for (const ext of arr(g.extensionsRequired)) if (ext !== 'KHR_mesh_quantization' && ext !== 'KHR_materials_unlit') fail('gltf_ext', { ext: clean(ext, 60) });
  const buffers = arr(g.buffers).map((b, i) => {
    if (!b || typeof b !== 'object') fail('gltf_bad');
    if (b.uri === undefined) { if (i === 0 && bin) return bin; fail('gltf_bad'); }
    const m = /^data:[^;,]*;base64,([A-Za-z0-9+/=]*)$/.exec(String(b.uri));
    if (!m) fail('gltf_external');
    return b64(m[1]);
  });
  const views = arr(g.bufferViews), accs = arr(g.accessors);
  function accessor(i, want) {
    const a = accs[i];
    if (!a || typeof a !== 'object' || !Number.isInteger(a.count) || a.count < 0 || a.count > CAPS.tris * 3) fail('gltf_bad');
    if (a.sparse) fail('gltf_sparse');
    const nc = NCOMP[a.type], ct = COMP[a.componentType];
    if (!nc || !ct || (want && nc !== want)) fail('gltf_bad');
    const [Type, size, max] = ct;
    const out = new Float64Array(a.count * nc);
    if (a.bufferView === undefined) return out;   // all zeros (spec)
    const v = views[a.bufferView];
    if (!v || typeof v !== 'object') fail('gltf_bad');
    const buf = buffers[v.buffer];
    if (!buf) fail('gltf_bad');
    const vOff = v.byteOffset || 0, vLen = v.byteLength, aOff = a.byteOffset || 0;
    const stride = v.byteStride || nc * size;
    if (!Number.isInteger(vOff) || !Number.isInteger(vLen) || !Number.isInteger(aOff) || !Number.isInteger(stride) || stride < nc * size || stride > 252) fail('gltf_bad');
    if (vOff + vLen > buf.length || (a.count && aOff + stride * (a.count - 1) + nc * size > vLen)) fail('cut_off');
    const d = new DataView(buf.buffer, buf.byteOffset + vOff, vLen);
    const get = { 5120: (o) => d.getInt8(o), 5121: (o) => d.getUint8(o), 5122: (o) => d.getInt16(o, true), 5123: (o) => d.getUint16(o, true), 5125: (o) => d.getUint32(o, true), 5126: (o) => d.getFloat32(o, true) }[a.componentType];
    const norm = a.normalized && max ? (x) => Math.max(x / max, -1) : (x) => x;
    for (let k = 0; k < a.count; k++) for (let c = 0; c < nc; c++) out[k * nc + c] = norm(get(aOff + k * stride + c * size));
    void Type;
    return out;
  }
  // meshes → parts (every triangle primitive of a glTF mesh in one part), metres → mm
  const parts = new Map(), meshPid = new Map();
  let tris = 0, skipped = 0;
  arr(g.meshes).forEach((m, mi) => {
    if (!m || typeof m !== 'object') fail('gltf_bad');
    const pos = [], idx = [];
    for (const pr of arr(m.primitives)) {
      if (!pr || typeof pr !== 'object' || !pr.attributes || typeof pr.attributes !== 'object') fail('gltf_bad');
      if ((pr.mode ?? 4) !== 4) { skipped++; continue; }
      if (pr.extensions?.KHR_draco_mesh_compression) { notes.push({ key: 'illustrate.import.note.draco' }); skipped++; continue; }
      if (pr.attributes.POSITION === undefined) { skipped++; continue; }
      const P = accessor(pr.attributes.POSITION, 3), n = P.length / 3, base = pos.length / 3;
      for (let i = 0; i < P.length; i++) pos.push(P[i] * 1000);
      const I = pr.indices !== undefined ? accessor(pr.indices, 1) : Float64Array.from({ length: n }, (_, i) => i);
      if (I.length % 3) fail('gltf_bad');
      for (let i = 0; i < I.length; i++) { const v = I[i]; if (!Number.isInteger(v) || v < 0 || v >= n) fail('gltf_bad'); idx.push(base + v); }
      tris += I.length / 3;
      if (tris > CAPS.tris) fail('too_big');
    }
    if (!idx.length) return;
    const pid = 'm' + mi;
    parts.set(pid, { name: clean(m.name) || 'Mesh ' + (mi + 1), mesh: meshFrom(pos, idx) });
    meshPid.set(mi, pid);
  });
  if (skipped) notes.push({ key: 'illustrate.import.note.skipped_prims', vars: { n: skipped } });
  // nodes → instances and groups
  const nodes = arr(g.nodes);
  if (nodes.length > CAPS.nodes) fail('too_big');
  const instances = [], groups = [];
  const sceneIdx = Number.isInteger(g.scene) ? g.scene : 0;
  const roots = arr(g.scenes?.[sceneIdx]?.nodes);
  const seen = new Set();
  function localMatrix(n) {
    if (Array.isArray(n.matrix)) { if (n.matrix.length !== 16 || !n.matrix.every(Number.isFinite)) fail('gltf_bad'); const m = [...n.matrix]; m[12] *= 1000; m[13] *= 1000; m[14] *= 1000; return m; }
    const tr = Array.isArray(n.translation) ? n.translation : [0, 0, 0], r = Array.isArray(n.rotation) ? n.rotation : [0, 0, 0, 1], s = Array.isArray(n.scale) ? n.scale : [1, 1, 1];
    if (tr.length !== 3 || r.length !== 4 || s.length !== 3 || ![...tr, ...r, ...s].every(Number.isFinite)) fail('gltf_bad');
    const [x, y, z, w] = r;
    const R = [1 - 2 * (y * y + z * z), 2 * (x * y + z * w), 2 * (x * z - y * w), 0, 2 * (x * y - z * w), 1 - 2 * (x * x + z * z), 2 * (y * z + x * w), 0, 2 * (x * z + y * w), 2 * (y * z - x * w), 1 - 2 * (x * x + y * y), 0, 0, 0, 0, 1];
    for (let c = 0; c < 3; c++) for (let k = 0; k < 3; k++) R[c * 4 + k] *= s[c];
    R[12] = tr[0] * 1000; R[13] = tr[1] * 1000; R[14] = tr[2] * 1000;
    return R;
  }
  function walk(i, parentM, group, depth) {
    if (!Number.isInteger(i) || i < 0 || i >= nodes.length || seen.has(i)) fail('gltf_bad');
    if (depth > CAPS.depth) fail('too_deep');
    seen.add(i);
    const n = nodes[i];
    if (!n || typeof n !== 'object') fail('gltf_bad');
    const M = matMul(parentM, localMatrix(n));
    const label = clean(n.name);
    if (n.mesh !== undefined) {
      const pid = meshPid.get(n.mesh);
      if (pid) {
        if (instances.length >= CAPS.instances) fail('too_big');
        instances.push({ id: 'n' + i, part: pid, name: label || parts.get(pid).name, group, matrix: M });
      }
    }
    const kids = arr(n.children);
    if (kids.length) {
      const gid = 'g' + i;
      groups.push({ id: gid, name: label || 'Group ' + (i + 1), parent: group });
      for (const c of kids) walk(c, M, gid, depth + 1);
    }
  }
  for (const r of roots.length ? roots : nodes.map((_, i) => i).filter((i) => !nodes.some((n) => arr(n?.children).includes(i)))) walk(r, IDENT, null, 0);
  // a group holding nothing drawn is left out
  pruneGroups(groups, instances);
  return { parts, instances, groups, notes, unit: 'm' };
}
function parseJson(bytes) {
  try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); } catch { fail('gltf_bad'); }
  return null;
}
function b64(s) {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const clean64 = s.replace(/=+$/, '');
  const out = new Uint8Array(Math.floor(clean64.length * 3 / 4));
  let bits = 0, acc = 0, o = 0;
  for (const ch of clean64) {
    const v = A.indexOf(ch);
    if (v < 0) fail('gltf_bad');
    acc = (acc << 6) | v; bits += 6;
    if (bits >= 8) { bits -= 8; out[o++] = (acc >> bits) & 255; }
  }
  return out.subarray(0, o);
}
function pruneGroups(groups, instances) {
  const used = new Set();
  const byId = new Map(groups.map((g) => [g.id, g]));
  for (const i of instances) { let g = i.group; while (g && !used.has(g)) { used.add(g); g = byId.get(g)?.parent ?? null; } }
  for (let k = groups.length - 1; k >= 0; k--) if (!used.has(groups[k].id)) groups.splice(k, 1);
}

// ---------------------------------------------------------------------------------------------- OBJ
function readObjProduct(bytes, { scale, up }) {
  const text = new TextDecoder('utf-8').decode(bytes);
  const P = [];
  const objs = [];   // { name, idx: [] }
  let cur = null, bad = 0, tris = 0;
  const begin = (name) => { cur = { name: clean(name), idx: [] }; objs.push(cur); };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line || line[0] === '#') continue;
    const sp = line.split(/\s+/);
    const k = sp[0];
    if (k === 'v') {
      const x = +sp[1], y = +sp[2], z = +sp[3];
      if (!(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z))) { bad++; P.push(0, 0, 0); continue; }
      P.push(x, y, z);
      if (P.length > CAPS.tris * 9) fail('too_big');
    } else if (k === 'o' || (k === 'g' && (!cur || cur.idx.length || !cur.name))) {
      if (cur && !cur.idx.length) cur.name = clean(sp.slice(1).join(' ')) || cur.name; else begin(sp.slice(1).join(' '));
    } else if (k === 'f') {
      if (!cur) begin('');
      const nv = P.length / 3, c = [];
      for (let i = 1; i < sp.length; i++) {
        let q = parseInt(sp[i], 10);
        if (!Number.isFinite(q) || q === 0) { c.length = 0; break; }
        q = q < 0 ? nv + q : q - 1;
        if (q < 0 || q >= nv) { c.length = 0; break; }
        c.push(q);
      }
      if (c.length < 3) { bad++; continue; }
      for (let i = 1; i + 1 < c.length; i++) cur.idx.push(c[0], c[i], c[i + 1]);
      tris += c.length - 2;
      if (tris > CAPS.tris) fail('too_big');
    }
  }
  const M = matMul(up === 'z' ? Z_TO_Y : IDENT, scaleM(scale));
  const parts = new Map(), instances = [];
  objs.filter((o) => o.idx.length).forEach((o, k) => {
    const c = compact(P, o.idx);
    const pid = 'o' + (k + 1);
    parts.set(pid, { name: o.name || 'Object ' + (k + 1), mesh: meshFrom(transformPositions(c.pos, M), c.idx) });
    instances.push({ id: pid, part: pid, name: o.name || 'Object ' + (k + 1), group: null, matrix: [...IDENT] });
  });
  if (!instances.length) fail(P.length ? 'no_faces' : 'empty');
  const notes = bad ? [{ key: 'illustrate.import.note.skipped_faces', vars: { n: bad } }] : [];
  return { parts, instances, groups: [], notes, unit: null };
}

// ---------------------------------------------------------------------------------------------- STL
function readStlProduct(bytes, { scale, up, base }) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const solids = [];
  if (bytes.length >= 84 && 84 + 50 * dv.getUint32(80, true) === bytes.length) {
    const n = dv.getUint32(80, true);
    if (n > CAPS.tris) fail('too_big');
    const pos = new Array(n * 9);
    for (let t = 0; t < n; t++) for (let k = 0; k < 9; k++) pos[t * 9 + k] = dv.getFloat32(84 + 50 * t + 12 + 4 * k, true);
    const head = clean(new TextDecoder('latin1').decode(bytes.subarray(0, 80)).replace(/^solid\s*/i, ''));
    solids.push({ name: /^[\x20-\x7e]+$/.test(head) && !/^(binary|stl|exported)/i.test(head) ? head : '', pos });
  } else {
    const text = new TextDecoder('latin1').decode(bytes);
    if (!/^\s*solid\b/i.test(text)) fail(bytes.length >= 84 ? 'cut_off' : 'stl_bad');
    const re = /\bsolid[ \t]*([^\r\n]*)|\bvertex\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)/g;
    let m, cur = null, n = 0;
    while ((m = re.exec(text))) {
      if (m[1] !== undefined && m[0].startsWith('solid')) { cur = { name: clean(m[1]), pos: [] }; solids.push(cur); continue; }
      if (!cur) continue;
      cur.pos.push(+m[2], +m[3], +m[4]);
      if (++n > CAPS.tris * 3) fail('too_big');
    }
    for (const s of solids) s.pos.length -= s.pos.length % 9;
  }
  const M = matMul(up === 'z' ? Z_TO_Y : IDENT, scaleM(scale));
  const parts = new Map(), instances = [], groups = [];
  let k = 0;
  solids.filter((s) => s.pos.length).forEach((s, si) => {
    const mesh = meshFrom(transformPositions(s.pos, M), Array.from({ length: s.pos.length / 3 }, (_, i) => i));
    const shells = splitShells(mesh);
    const gname = s.name || (solids.length > 1 ? base + ' ' + (si + 1) : base);
    const gid = shells.length > 1 ? 's' + (si + 1) : null;
    if (gid) groups.push({ id: gid, name: gname, parent: null });
    shells.forEach((sh, j) => {
      const pid = 'p' + (++k);
      const nm = shells.length > 1 ? gname + ' ' + (j + 1) : gname;
      parts.set(pid, { name: nm, mesh: sh });
      instances.push({ id: pid, part: pid, name: nm, group: gid, matrix: [...IDENT] });
      if (instances.length > CAPS.instances) fail('too_big');
    });
  });
  if (!instances.length) fail('empty');
  return { parts, instances, groups, notes: [], unit: null };
}

// ---------------------------------------------------------------------------------------------- 3MF
const UNIT_3MF = { micron: 'um', millimeter: 'mm', centimeter: 'cm', meter: 'm', inch: 'in', foot: 'ft' };
const attrsOf = (s) => { const o = {}; for (const m of s.matchAll(/([A-Za-z_:][\w:.-]*)\s*=\s*"([^"]*)"/g)) o[m[1]] = m[2].replace(/&quot;/g, '"').replace(/&apos;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); return o; };
function m3mf(s) {
  if (s === undefined) return [...IDENT];
  const v = String(s).trim().split(/\s+/).map(Number);
  if (v.length !== 12 || !v.every(Number.isFinite)) fail('3mf_bad');
  return [v[0], v[1], v[2], 0, v[3], v[4], v[5], 0, v[6], v[7], v[8], 0, v[9], v[10], v[11], 1];
}
async function read3mfProduct(bytes) {
  let zip;
  try { zip = readZip(bytes); } catch (e) { if (e instanceof ZipError) fail(e.code === 'not_zip' ? '3mf_bad' : e.code === 'bad' ? 'cut_off' : '3mf_bad'); throw e; }
  const text = async (name) => { const f = zip.get(name); if (!f) return null; try { return new TextDecoder('utf-8').decode(await f.read()); } catch { fail('cut_off'); } return null; };
  let root = '3D/3dmodel.model';
  const rels = await text('_rels/.rels');
  if (rels) for (const m of rels.matchAll(/<Relationship\b[^>]*>/g)) { const a = attrsOf(m[0]); if (/3dmodel$/.test(a.Type || '') && a.Target) root = a.Target.replace(/^\/+/, ''); }
  const models = new Map();
  async function model(path) {
    if (models.has(path)) return models.get(path);
    if (models.size > 200) fail('too_big');
    const xml = await text(path);
    if (xml === null) fail('3mf_bad');
    const head = /<model\b[^>]*>/.exec(xml);
    if (!head) fail('3mf_bad');
    const unit = UNIT_3MF[attrsOf(head[0]).unit || 'millimeter'];
    if (!unit) fail('3mf_bad');
    const md = { unit, objects: new Map(), build: [] };
    models.set(path, md);
    for (const om of xml.matchAll(/<object\b([^>]*)>([\s\S]*?)<\/object>/g)) {
      const a = attrsOf(om[1]);
      const ob = { name: clean(a.name), type: a.type || 'model' };
      const mesh = /<mesh\b[^>]*>([\s\S]*?)<\/mesh>/.exec(om[2]);
      if (mesh) {
        const vs = [], ts = [];
        for (const v of mesh[1].matchAll(/<vertex\b([^>]*?)\/?>/g)) { const q = attrsOf(v[1]); vs.push(+q.x, +q.y, +q.z); }
        const nv = vs.length / 3;
        for (const tr of mesh[1].matchAll(/<triangle\b([^>]*?)\/?>/g)) {
          const q = attrsOf(tr[1]);
          const i = [q.v1, q.v2, q.v3].map((x) => (/^\d+$/.test(x || '') ? +x : -1));
          if (i.some((x) => x < 0 || x >= nv)) fail('3mf_bad');
          ts.push(...i);
          if (ts.length > CAPS.tris * 3) fail('too_big');
        }
        if (!vs.every(Number.isFinite)) fail('bad_numbers');
        ob.mesh = { vs, ts };
      }
      const comps = [...om[2].matchAll(/<component\b([^>]*?)\/?>/g)].map((c) => { const q = attrsOf(c[1]); return { id: q.objectid, path: (q['p:path'] || '').replace(/^\/+/, '') || null, M: m3mf(q.transform) }; });
      if (comps.length) ob.comps = comps;
      md.objects.set(a.id, ob);
    }
    const build = /<build\b[^>]*>([\s\S]*?)<\/build>/.exec(xml);
    if (build) for (const it of build[1].matchAll(/<item\b([^>]*?)\/?>/g)) { const q = attrsOf(it[1]); md.build.push({ id: q.objectid, path: (q['p:path'] || '').replace(/^\/+/, '') || null, M: m3mf(q.transform) }); }
    return md;
  }
  const top = await model(root);
  if (!top.build.length) fail('empty');
  const parts = new Map(), instances = [], groups = [];
  const pidOf = new Map();   // path#id → pid
  let skipped = 0, gseq = 0;
  async function place(path, id, M, group, label, depth) {
    if (depth > CAPS.depth) fail('too_deep');
    const md = await model(path);
    const ob = md.objects.get(id);
    if (!ob) fail('3mf_bad');
    if (ob.type === 'support' || ob.type === 'other') { skipped++; return; }
    const s = UNITS[md.unit];
    if (ob.mesh) {
      const key = path + '#' + id;
      let pid = pidOf.get(key);
      if (!pid) {
        pid = 'b' + (pidOf.size + 1);
        pidOf.set(key, pid);
        parts.set(pid, { name: ob.name || 'Object ' + id, mesh: meshFrom(ob.mesh.vs.map((v) => v * s), ob.mesh.ts) });
      }
      if (instances.length >= CAPS.instances) fail('too_big');
      instances.push({ id: label, part: pid, name: ob.name || parts.get(pid).name, group, matrix: matMul(Z_TO_Y, M) });
    }
    if (ob.comps) {
      let g = group;
      if (ob.comps.length > 1 || ob.mesh) { g = 'g' + (++gseq); groups.push({ id: g, name: ob.name || 'Object ' + id, parent: group }); }
      for (const [k, c] of ob.comps.entries()) await place(c.path || path, c.id, matMul(M, scaleTranslation(c.M, s)), g, label + '.' + (k + 1), depth + 1);
    }
  }
  const s0 = UNITS[top.unit];
  for (const [k, it] of top.build.entries()) await place(it.path || root, it.id, scaleTranslation(it.M, s0), null, 'b' + (k + 1), 0);
  const notes = skipped ? [{ key: 'illustrate.import.note.3mf_skipped', vars: { n: skipped } }] : [];
  pruneGroups(groups, instances);
  return { parts, instances, groups, notes, unit: top.unit };
}
/** A transform written in a file's unit, with its move in millimetres (meshes are scaled to mm as they are read). */
function scaleTranslation(M, s) { const m = [...M]; m[12] *= s; m[13] *= s; m[14] *= s; return m; }

// ---------------------------------------------------------------------------------------------- copies of one part
function signature(mesh) {
  const P = mesh.positions, I = mesh.indices;
  let area = 0, vol = 0;
  for (let k = 0; k < I.length; k += 3) {
    const a = I[k] * 3, b = I[k + 1] * 3, c = I[k + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    area += Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
    vol += (P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c])) / 6;
  }
  const r = (x) => (x === 0 ? '0' : x.toPrecision(5));
  return P.length / 3 + '/' + I.length / 3 + '/' + r(area) + '/' + r(Math.abs(vol));
}
/**
 * Fold copies of one part into one: two parts whose meshes have the same corners in the same order, one a rigid move of the
 * other (within tol of the size), become one part; the copy's instances get that move folded into their matrix.
 */
export function sameParts(product, { tol = 1e-5 } = {}) {
  const sig = new Map();
  for (const [pid, p] of product.parts) { const s = signature(p.mesh); (sig.get(s) || sig.set(s, []).get(s)).push(pid); }
  const into = new Map();   // copy pid → { pid, m (copy = m · canonical) }
  for (const pids of sig.values()) {
    if (pids.length < 2) continue;
    const reps = [];
    for (const pid of pids) {
      const P = product.parts.get(pid).mesh.positions;
      let size = 0;
      for (let i = 3; i < P.length; i += 3) size = Math.max(size, Math.abs(P[i] - P[0]), Math.abs(P[i + 1] - P[1]), Math.abs(P[i + 2] - P[2]));
      let found = null;
      for (const r of reps) {
        const R = product.parts.get(r).mesh;
        if (!sameTriangles(R.indices, product.parts.get(pid).mesh.indices)) continue;
        const fit = rigidFit(sample(R.positions), sample(P));
        if (fit.err > tol * Math.max(size, 1e-9)) continue;
        if (maxError(fit.m, R.positions, P) > tol * Math.max(size, 1e-9) * 4) continue;
        found = { pid: r, m: fit.m };
        break;
      }
      if (found) into.set(pid, found); else reps.push(pid);
    }
  }
  if (!into.size) return { product, folded: 0 };
  const parts = new Map([...product.parts].filter(([pid]) => !into.has(pid)));
  const instances = product.instances.map((i) => {
    const f = into.get(i.part);
    return f ? { ...i, part: f.pid, matrix: matMul(i.matrix, f.m) } : i;
  });
  for (const [, f] of into) { const p = parts.get(f.pid); if (p) p.name = commonName(p.name); }
  return { product: { ...product, parts, instances }, folded: into.size };
}
/** A new manual from a product (after sameParts): { m, meshes } for manual.js's Doc. */
export function productToManual(product, { name, sourceName = '', sha = '' } = {}) {
  const parts = {};
  for (const [pid, p] of product.parts) parts[pid] = { name: p.name, mesh: p.mesh };
  return newManual({ name: name || product.name, source: { kind: product.kind, name: sourceName || product.name, sha256: sha }, parts, instances: product.instances, groups: product.groups, explodes: [] });
}
const commonName = (n) => n.replace(/\s+\d+$/, '').replace(/\s*<\d+>$/, '') || n;
const sameTriangles = (a, b) => { if (a.length !== b.length) return false; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false; return true; };
function sample(P, max = 3000) {
  const n = P.length / 3;
  if (n <= max) return P;
  const out = new Float64Array(max * 3), step = n / max;
  for (let k = 0; k < max; k++) { const i = Math.floor(k * step) * 3; out[k * 3] = P[i]; out[k * 3 + 1] = P[i + 1]; out[k * 3 + 2] = P[i + 2]; }
  return out;
}
function maxError(m, A, B) {
  let e = 0;
  for (let i = 0; i < A.length; i += 3) { const p = apply(m, [A[i], A[i + 1], A[i + 2]]); e = Math.max(e, Math.abs(p[0] - B[i]), Math.abs(p[1] - B[i + 1]), Math.abs(p[2] - B[i + 2])); }
  return e;
}
