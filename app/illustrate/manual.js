/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/manual.js — the manual: a file of its own (`<name>.partcraft-manual.json`, format `partcraft-manual`, version 1)
 * that carries a copy of the product (every part's mesh, the product tree, part properties) and a link back to where it came
 * from (the source's kind, name and SHA-256), plus an ordered list of views. DOM-free; its only import is the shared i18n.js
 * (every app carries a byte-identical copy), so 0.8 can move illustrate/ to a shared lib/ (owner decision 1, 2026-10-21).
 *
 * In memory a manual is two things: `m`, plain JSON-able data (everything but the meshes), and `meshes`, a Map(pid →
 * { positions: Float32Array, indices: Uint32Array }) that is never changed in place (Update swaps whole meshes). Files are
 * untrusted: readManual() checks every count, offset, number and string, caps sizes, and throws ManualError (with a `code`)
 * and nothing else.
 *
 *   m = { format, version, name, created (ISO date), seq (next own id number),
 *         source: { kind (SOURCE_KINDS), name, sha256 (64 hex | ''), assembly? (the PartCraft assembly file's JSON object,
 *                   kept for Update; checked by assembly.js when used) },
 *         parts: { [pid]: { name, number, description, material, density (g/cm³ | null), props: { key: text } } },
 *         groups: [{ id, name, parent (group id | null) }]             sub-assemblies of the product tree
 *         instances: [{ id (stable: the source's own id), part (pid), name, group (id | null), matrix (16, column-major) }]
 *         explodes: [{ id, name, steps: [{ insts, dir (unit), dist (mm) }] }]   the source's exploded views (explode.js)
 *         balloons: { next, items: { [pid]: n } }                       numbers given once, never reused (bom.js here, TP.4)
 *         views: [view], annotations: [annotation] (annotate.js, TP.3),
 *         scene: null | { camera, explode, moves, insts, look }   the scene being worked on (a view without id, name or picture),
 *         instructions: null | the instructions document (instructions.js, TP.8: template, cover, steps from views, parts page),
 *         anim, animIds: null | the animation (timeline.js, TP.6: AN.1's cadcraft-anim format; instances as numbered paths) }
 *   view = { id, name, camera: { type: 'ortho' | 'persp', pos, target, up, height (ortho: half the view's height, mm),
 *            fov (persp: vertical, degrees) }, explode: null | { ref (explode id), t (0…1) }, moves: { [inst]: [dx,dy,dz] },
 *            insts: { [inst]: { hide?, ghost?, opacity? (0…1), color? '#rrggbb' } }, look (look.js, TP.5), table (parts-list.js,
 *            TP.4: the parts list placed in the view, or null), annots (ids of the annotations the view shows; annotate.js, TP.3),
 *            thumb ('' | data:image/…) }
 *   File meshes: parts[pid].mesh = { v: base64 Float32 little-endian xyz, t: base64 Uint32 little-endian triangle corners }.
 *
 * Edits: every change goes through Doc.edit(label, fn) = one undo step (snapshots of `m` plus the mesh map; meshes are
 * shared, never copied).
 */
import { t } from '../i18n.js';
import { IDENT, add, mul, norm, len, apply, matMul, translation, boxOf, unionBox } from './m4.js';

export const FORMAT = 'partcraft-manual';
export const VERSION = 1;
export const EXT = '.partcraft-manual.json';
export const SOURCE_KINDS = ['partcraft-assembly', 'partcraft-part', 'step', 'gltf', 'obj', 'stl', '3mf', 'ifc', 'modelcraft', 'usd', 'fbx'];
export const LIMITS = Object.freeze({
  bytes: 256 * 1024 * 1024, parts: 5000, instances: 20000, groups: 5000, depth: 32, views: 200, explodes: 50, steps: 200,
  stepInsts: 5000, annotations: 5000, trisPerPart: 4_000_000, vertsPerPart: 6_000_000, vertsTotal: 30_000_000, name: 120,
  text: 2000, props: 40, propKey: 40, propVal: 200, thumb: 96 * 1024, assembly: 128 * 1024 * 1024, history: 100,
});
const ID_RE = /^[A-Za-z0-9_.:/-]{1,64}$/;
const OWN_ID = /^[a-z]\d{1,9}$/;
const HEX = /^#[0-9a-f]{6}$/;

export class ManualError extends Error {
  constructor(code, message) { super(message); this.name = 'ManualError'; this.code = code; }
}
const fail = (code, key, fill) => { throw new ManualError(code, t('illustrate.file.' + key, fill)); };

// ---------------------------------------------------------------------------------------------- small checks
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const clean = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const cleanText = (s, max) => String(s ?? '').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, '').slice(0, max);
const fin = (v, lim = 1e9) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= lim;
const vec3 = (v, lim = 1e9) => Array.isArray(v) && v.length === 3 && v.every((x) => fin(x, lim));
const mat16 = (v) => Array.isArray(v) && v.length === 16 && v.every((x) => fin(x, 1e9));
const ownKeys = (o) => Object.keys(o).filter((k) => k !== '__proto__' && k !== 'constructor' && k !== 'prototype');

// ---------------------------------------------------------------------------------------------- base64 meshes
const LE = new Uint8Array(new Uint32Array([1]).buffer)[0] === 1;
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const B64I = new Int16Array(256).fill(-1);
for (let i = 0; i < 64; i++) B64I[B64.charCodeAt(i)] = i;

export function b64encode(bytes) {
  const out = [];
  let chunk = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i], b = bytes[i + 1], c = bytes[i + 2];
    chunk += B64[a >> 2] + B64[((a & 3) << 4) | ((b ?? 0) >> 4)] + (i + 1 < bytes.length ? B64[((b & 15) << 2) | ((c ?? 0) >> 6)] : '=') + (i + 2 < bytes.length ? B64[c & 63] : '=');
    if (chunk.length > 65536) { out.push(chunk); chunk = ''; }
  }
  out.push(chunk);
  return out.join('');
}
/** Bytes from base64 (strict alphabet, padding checked); null when it is not base64. */
export function b64decode(s) {
  if (typeof s !== 'string' || s.length % 4) return null;
  const pad = s.endsWith('==') ? 2 : s.endsWith('=') ? 1 : 0;
  const n = s.length / 4 * 3 - pad;
  const out = new Uint8Array(n);
  let o = 0;
  for (let i = 0; i < s.length; i += 4) {
    const a = B64I[s.charCodeAt(i)], b = B64I[s.charCodeAt(i + 1)];
    const c = s[i + 2] === '=' && i + 4 === s.length ? 0 : B64I[s.charCodeAt(i + 2)];
    const d = s[i + 3] === '=' && i + 4 === s.length ? 0 : B64I[s.charCodeAt(i + 3)];
    if (a < 0 || b < 0 || c < 0 || d < 0) return null;
    const v = (a << 18) | (b << 12) | (c << 6) | d;
    if (o < n) out[o++] = v >> 16 & 255;
    if (o < n) out[o++] = v >> 8 & 255;
    if (o < n) out[o++] = v & 255;
  }
  return out;
}
function typedBytes(arr) {
  const b = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  if (LE) return b;
  const c = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i += 4) { c[i] = b[i + 3]; c[i + 1] = b[i + 2]; c[i + 2] = b[i + 1]; c[i + 3] = b[i]; }
  return c;
}
function fromBytes(bytes, Type) {
  if (!LE) { const c = new Uint8Array(bytes.length); for (let i = 0; i < bytes.length; i += 4) { c[i] = bytes[i + 3]; c[i + 1] = bytes[i + 2]; c[i + 2] = bytes[i + 1]; c[i + 3] = bytes[i]; } bytes = c; }
  return new Type(bytes.buffer, bytes.byteOffset, bytes.length / 4);
}
export const encodeMesh = (mesh) => ({ v: b64encode(typedBytes(Float32Array.from(mesh.positions))), t: b64encode(typedBytes(Uint32Array.from(mesh.indices))) });

/** A mesh from a file: every float finite and within ±1e7 mm, every index inside the vertices, whole triangles. */
export function decodeMesh(raw, budget) {
  if (!isObj(raw) || typeof raw.v !== 'string' || typeof raw.t !== 'string') fail('bad_mesh', 'bad_mesh');
  const vb = b64decode(raw.v), tb = b64decode(raw.t);
  if (!vb || !tb || vb.length % 12 || tb.length % 12) fail('bad_mesh', 'bad_mesh');
  const nv = vb.length / 12, nt = tb.length / 12;
  if (nv > LIMITS.vertsPerPart || nt > LIMITS.trisPerPart) fail('too_big', 'too_big');
  budget.verts += nv;
  if (budget.verts > LIMITS.vertsTotal) fail('too_big', 'too_big');
  const positions = fromBytes(vb, Float32Array), indices = fromBytes(tb, Uint32Array);
  for (let i = 0; i < positions.length; i++) if (!(Math.abs(positions[i]) <= 1e7)) fail('bad_mesh', 'bad_mesh');
  for (let i = 0; i < indices.length; i++) if (indices[i] >= nv) fail('bad_mesh', 'bad_mesh');
  return { positions, indices };
}

// ---------------------------------------------------------------------------------------------- building a manual
/**
 * A new manual from a product: parts (pid → { name, number?, description?, material?, density?, props?, mesh }),
 * instances ([{ id, part, name, group?, matrix }]), groups, explodes. Returns { m, meshes } (not yet a Doc).
 */
export function newManual({ name = 'Manual', source = { kind: 'partcraft-assembly', name: '', sha256: '' }, parts = {}, instances = [], groups = [], explodes = [], created = new Date() } = {}) {
  const m = {
    format: FORMAT, version: VERSION, name: clean(name, LIMITS.name) || 'Manual', created: new Date(created).toISOString(), seq: 1,
    source: { kind: SOURCE_KINDS.includes(source.kind) ? source.kind : 'partcraft-assembly', name: clean(source.name, LIMITS.name), sha256: /^[0-9a-f]{64}$/.test(source.sha256 || '') ? source.sha256 : '' },
    parts: {}, groups: [], instances: [], explodes: [], balloons: { next: 1, items: {} }, views: [], annotations: [], scene: null, instructions: null, anim: null, animIds: null,
  };
  if (source.assembly && isObj(source.assembly)) m.source.assembly = source.assembly;
  const meshes = new Map();
  for (const [pid, p] of Object.entries(parts)) {
    m.parts[pid] = partRecord(p);
    meshes.set(pid, { positions: Float32Array.from(p.mesh.positions), indices: Uint32Array.from(p.mesh.indices) });
  }
  m.groups = groups.map((g) => ({ id: g.id, name: clean(g.name, LIMITS.name), parent: g.parent ?? null }));
  m.instances = instances.map((i) => ({ id: i.id, part: i.part, name: clean(i.name, LIMITS.name) || m.parts[i.part]?.name || i.id, group: i.group ?? null, matrix: [...(i.matrix || IDENT)] }));
  m.explodes = explodes.map((e) => ({ id: e.id, name: clean(e.name, LIMITS.name), steps: e.steps.map((s) => ({ insts: [...s.insts], dir: norm(s.dir), dist: s.dist })) }));
  return { m, meshes };
}
function partRecord(p) {
  const props = {};
  if (isObj(p.props)) for (const k of ownKeys(p.props).slice(0, LIMITS.props)) { const key = clean(k, LIMITS.propKey); if (key) props[key] = clean(p.props[k], LIMITS.propVal); }
  return { name: clean(p.name, LIMITS.name) || 'Part', number: clean(p.number, 40), description: clean(p.description, 200), material: clean(p.material, 60), density: fin(p.density, 25) && p.density > 0 ? p.density : null, props };
}

/** The file text: `m` plus each part's mesh (base64). */
export function toJSON(m, meshes) {
  const parts = {};
  for (const [pid, p] of Object.entries(m.parts)) parts[pid] = { ...p, mesh: encodeMesh(meshes.get(pid)) };
  return JSON.stringify({ ...m, format: FORMAT, version: VERSION, parts });
}

// ---------------------------------------------------------------------------------------------- reading a file
/** text (string) or bytes (Uint8Array / ArrayBuffer) → { m, meshes }. Throws ManualError only. */
export function readManual(input) {
  let text = input;
  try {
    if (input instanceof ArrayBuffer) input = new Uint8Array(input);
    if (input instanceof Uint8Array) {
      if (input.length > LIMITS.bytes) fail('too_big', 'too_big');
      text = new TextDecoder('utf-8', { fatal: true }).decode(input);
    }
  } catch (e) { if (e instanceof ManualError) throw e; fail('not_json', 'not_json'); }
  if (typeof text !== 'string') fail('not_json', 'not_json');
  if (text.length > LIMITS.bytes) fail('too_big', 'too_big');
  let raw;
  try { raw = JSON.parse(text.charCodeAt(0) === 0xfeff ? text.slice(1) : text); } catch { fail('not_json', 'not_json'); }
  try { return readManualObject(raw); } catch (e) {
    if (e instanceof ManualError) throw e;
    throw new ManualError('bad', t('illustrate.file.bad', { what: String(e && e.message || e).slice(0, 120) }));
  }
}

export function readManualObject(raw) {
  if (!isObj(raw) || raw.format !== FORMAT) fail('not_manual', 'not_manual');
  if (!Number.isInteger(raw.version) || raw.version < 1) fail('not_manual', 'not_manual');
  if (raw.version > VERSION) fail('too_new', 'too_new', { v: raw.version });
  const m = {
    format: FORMAT, version: VERSION, name: clean(raw.name, LIMITS.name) || 'Manual',
    created: typeof raw.created === 'string' && !Number.isNaN(Date.parse(raw.created)) ? new Date(raw.created).toISOString() : new Date(0).toISOString(),
    seq: Number.isInteger(raw.seq) && raw.seq > 0 && raw.seq < 1e9 ? raw.seq : 1,
    source: { kind: 'partcraft-assembly', name: '', sha256: '' }, parts: {}, groups: [], instances: [], explodes: [],
    balloons: { next: 1, items: {} }, views: [], annotations: [], scene: null, instructions: null, anim: null, animIds: null,
  };
  // source
  if (isObj(raw.source)) {
    const s = raw.source;
    m.source.kind = SOURCE_KINDS.includes(s.kind) ? s.kind : fail('bad_source', 'bad_source');
    m.source.name = clean(s.name, LIMITS.name);
    m.source.sha256 = typeof s.sha256 === 'string' && /^[0-9a-f]{64}$/.test(s.sha256) ? s.sha256 : '';
    if (s.assembly !== undefined) {
      if (!isObj(s.assembly)) fail('bad_source', 'bad_source');
      m.source.assembly = s.assembly;   // assembly.js readAssembly() checks it whenever Update uses it
    }
  }
  // parts and meshes
  if (!isObj(raw.parts)) fail('bad_parts', 'bad_parts');
  const pids = ownKeys(raw.parts);
  if (!pids.length) fail('no_parts', 'no_parts');
  if (pids.length > LIMITS.parts) fail('too_big', 'too_big');
  const meshes = new Map(), budget = { verts: 0 };
  for (const pid of pids) {
    if (!ID_RE.test(pid)) fail('bad_parts', 'bad_parts');
    const p = raw.parts[pid];
    if (!isObj(p)) fail('bad_parts', 'bad_parts');
    if (p.density !== undefined && p.density !== null && !(fin(p.density, 25) && p.density > 0)) fail('bad_parts', 'bad_parts');
    if (p.props !== undefined && !isObj(p.props)) fail('bad_parts', 'bad_parts');
    m.parts[pid] = partRecord(p);
    meshes.set(pid, decodeMesh(p.mesh, budget));
  }
  // groups (a tree: parents exist and no loops, at most LIMITS.depth deep)
  if (raw.groups !== undefined) {
    if (!Array.isArray(raw.groups) || raw.groups.length > LIMITS.groups) fail('bad_tree', 'bad_tree');
    const ids = new Set();
    for (const g of raw.groups) {
      if (!isObj(g) || typeof g.id !== 'string' || !ID_RE.test(g.id) || ids.has(g.id)) fail('bad_tree', 'bad_tree');
      ids.add(g.id);
      m.groups.push({ id: g.id, name: clean(g.name, LIMITS.name) || g.id, parent: g.parent ?? null });
    }
    const byId = new Map(m.groups.map((g) => [g.id, g]));
    for (const g of m.groups) {
      if (g.parent !== null && (typeof g.parent !== 'string' || !byId.has(g.parent))) fail('bad_tree', 'bad_tree');
      let at = g, depth = 0;
      while (at.parent !== null) { at = byId.get(at.parent); if (++depth > LIMITS.depth || at === g) fail('bad_tree', 'bad_tree'); }
    }
  }
  const groupIds = new Set(m.groups.map((g) => g.id));
  // instances
  if (!Array.isArray(raw.instances) || !raw.instances.length) fail('no_parts', 'no_parts');
  if (raw.instances.length > LIMITS.instances) fail('too_big', 'too_big');
  const instIds = new Set();
  for (const i of raw.instances) {
    if (!isObj(i) || typeof i.id !== 'string' || !ID_RE.test(i.id) || instIds.has(i.id)) fail('bad_instance', 'bad_instance');
    if (typeof i.part !== 'string' || !m.parts[i.part]) fail('bad_instance', 'bad_instance');
    if (!mat16(i.matrix)) fail('bad_instance', 'bad_instance');
    const group = i.group ?? null;
    if (group !== null && !groupIds.has(group)) fail('bad_instance', 'bad_instance');
    instIds.add(i.id);
    m.instances.push({ id: i.id, part: i.part, name: clean(i.name, LIMITS.name) || m.parts[i.part].name, group, matrix: [...i.matrix] });
  }
  // the source's exploded views
  if (raw.explodes !== undefined) {
    if (!Array.isArray(raw.explodes) || raw.explodes.length > LIMITS.explodes) fail('bad_explode', 'bad_explode');
    const ids = new Set();
    for (const e of raw.explodes) {
      if (!isObj(e) || typeof e.id !== 'string' || !ID_RE.test(e.id) || ids.has(e.id) || !Array.isArray(e.steps) || e.steps.length > LIMITS.steps) fail('bad_explode', 'bad_explode');
      ids.add(e.id);
      const steps = e.steps.map((s) => {
        if (!isObj(s) || !Array.isArray(s.insts) || s.insts.length > LIMITS.stepInsts || !s.insts.every((x) => instIds.has(x))) fail('bad_explode', 'bad_explode');
        if (!vec3(s.dir) || len(s.dir) < 1e-9 || !fin(s.dist, 1e7)) fail('bad_explode', 'bad_explode');
        return { insts: [...new Set(s.insts)], dir: norm(s.dir), dist: s.dist };
      });
      m.explodes.push({ id: e.id, name: clean(e.name, LIMITS.name) || e.id, steps });
    }
  }
  // balloons
  if (raw.balloons !== undefined) {
    const b = raw.balloons;
    if (!isObj(b) || !Number.isInteger(b.next) || b.next < 1 || b.next > 1e6 || !isObj(b.items)) fail('bad_balloons', 'bad_balloons');
    const used = new Set();
    for (const pid of ownKeys(b.items)) {
      const n = b.items[pid];
      if (!m.parts[pid] || !Number.isInteger(n) || n < 1 || n >= b.next || used.has(n)) fail('bad_balloons', 'bad_balloons');
      used.add(n); m.balloons.items[pid] = n;
    }
    m.balloons.next = b.next;
  }
  // views
  let seqMax = 0;
  const takeOwn = (id, set) => {
    if (typeof id !== 'string' || !OWN_ID.test(id) || set.has(id)) fail('bad_view', 'bad_view');
    set.add(id); seqMax = Math.max(seqMax, Number(id.slice(1)));
    return id;
  };
  if (raw.views !== undefined) {
    if (!Array.isArray(raw.views) || raw.views.length > LIMITS.views) fail('bad_view', 'bad_view');
    const ids = new Set(), explodeIds = new Set(m.explodes.map((e) => e.id));
    for (const v of raw.views) m.views.push(readView(v, { takeId: (id) => takeOwn(id, ids), instIds, explodeIds }));
  }
  // annotations are read by annotate.js once that module registers its reader (TP.3); until then a file with some is refused
  if (raw.annotations !== undefined) {
    if (!Array.isArray(raw.annotations) || raw.annotations.length > LIMITS.annotations) fail('bad_annotation', 'bad_annotation');
    const ids = new Set(), viewIds = new Set(m.views.map((v) => v.id));
    for (const a of raw.annotations) {
      if (!annotationReader) fail('bad_annotation', 'bad_annotation');
      m.annotations.push(annotationReader(a, { takeId: (id) => takeOwn(id, ids), instIds, viewIds, parts: m.parts }));
    }
  }
  // every annotation a view shows must exist
  const annIds = new Set(m.annotations.map((a) => a.id));
  for (const v of m.views) if (!v.annots.every((x) => annIds.has(x))) fail('bad_view', 'bad_view');
  // the scene being worked on (a view without a name: where the manual was left)
  if (raw.scene !== undefined && raw.scene !== null) {
    const { id: _i, name: _n, thumb: _t, ...scene } = readView({ ...(isObj(raw.scene) ? raw.scene : fail('bad_view', 'bad_view')), id: 'x0', name: '', thumb: '' }, { takeId: (id) => id, instIds, explodeIds: new Set(m.explodes.map((e) => e.id)) });
    if (!scene.annots.every((x) => annIds.has(x))) fail('bad_view', 'bad_view');
    m.scene = scene;
  }
  // the instructions document (instructions.js, TP.8)
  if (raw.instructions !== undefined && raw.instructions !== null) {
    if (!instructionsReader) fail('bad_instructions', 'bad_instructions');
    try { m.instructions = instructionsReader(raw.instructions, { viewIds: new Set(m.views.map((v) => v.id)) }); } catch (e) { if (e instanceof ManualError) throw e; fail('bad_instructions', 'bad_instructions'); }
  }
  // the animation (timeline.js, TP.6)
  if ((raw.anim !== undefined && raw.anim !== null) || (raw.animIds !== undefined && raw.animIds !== null)) {
    if (!animReader) fail('bad_anim', 'bad_anim');
    try { Object.assign(m, animReader(raw, { instIds })); } catch (e) { if (e instanceof ManualError) throw e; fail('bad_anim', 'bad_anim'); }
  }
  m.seq = Math.max(m.seq, seqMax + 1);
  return { m, meshes };
}

let annotationReader = null, lookReader = null, tableReader = null, instructionsReader = null, animReader = null;
/** annotate.js and look.js register the readers of their parts of the file (keeps manual.js free of their imports). */
export function registerReaders({ annotation, look, table, instructions, anim } = {}) { if (annotation) annotationReader = annotation; if (look) lookReader = look; if (table) tableReader = table; if (instructions) instructionsReader = instructions; if (anim) animReader = anim; }

export const CAMERA_TYPES = ['ortho', 'persp'];
export function readCamera(c) {
  if (!isObj(c) || !CAMERA_TYPES.includes(c.type) || !vec3(c.pos, 1e8) || !vec3(c.target, 1e8) || !vec3(c.up)) fail('bad_view', 'bad_view');
  if (len(c.up) < 1e-9 || len([c.pos[0] - c.target[0], c.pos[1] - c.target[1], c.pos[2] - c.target[2]]) < 1e-9) fail('bad_view', 'bad_view');
  const height = fin(c.height, 1e8) && c.height > 0 ? c.height : 100;
  const fov = fin(c.fov, 180) && c.fov >= 1 && c.fov <= 170 ? c.fov : 35;
  return { type: c.type, pos: [...c.pos], target: [...c.target], up: norm(c.up), height, fov };
}
function readView(v, { takeId, instIds, explodeIds }) {
  if (!isObj(v)) fail('bad_view', 'bad_view');
  const view = { id: takeId(v.id), name: clean(v.name, LIMITS.name) || v.id, camera: readCamera(v.camera), explode: null, moves: {}, insts: {}, look: null, table: null, annots: [], thumb: '' };
  if (v.annots !== undefined) {
    if (!Array.isArray(v.annots) || v.annots.length > LIMITS.annotations || !v.annots.every((x) => typeof x === 'string' && OWN_ID.test(x))) fail('bad_view', 'bad_view');
    view.annots = [...new Set(v.annots)];
  }
  if (v.explode !== undefined && v.explode !== null) {
    if (!isObj(v.explode) || !explodeIds.has(v.explode.ref) || !fin(v.explode.t, 1) || v.explode.t < 0) fail('bad_view', 'bad_view');
    view.explode = { ref: v.explode.ref, t: v.explode.t };
  }
  if (v.moves !== undefined) {
    if (!isObj(v.moves)) fail('bad_view', 'bad_view');
    for (const id of ownKeys(v.moves)) { if (!instIds.has(id) || !vec3(v.moves[id], 1e7)) fail('bad_view', 'bad_view'); view.moves[id] = [...v.moves[id]]; }
  }
  if (v.insts !== undefined) {
    if (!isObj(v.insts)) fail('bad_view', 'bad_view');
    for (const id of ownKeys(v.insts)) {
      const s = v.insts[id];
      if (!instIds.has(id) || !isObj(s)) fail('bad_view', 'bad_view');
      const st = {};
      if (s.hide === true) st.hide = true;
      if (s.ghost === true) st.ghost = true;
      if (s.opacity !== undefined) { if (!fin(s.opacity, 1) || s.opacity < 0) fail('bad_view', 'bad_view'); if (s.opacity < 1) st.opacity = s.opacity; }
      if (s.color !== undefined && s.color !== null) { if (typeof s.color !== 'string' || !HEX.test(s.color)) fail('bad_view', 'bad_view'); st.color = s.color; }
      if (Object.keys(st).length) view.insts[id] = st;
    }
  }
  if (v.look !== undefined && v.look !== null) view.look = lookReader ? lookReader(v.look, { instIds }) : fail('bad_view', 'bad_view');
  if (v.table !== undefined && v.table !== null) { if (!tableReader) fail('bad_view', 'bad_view'); try { view.table = tableReader(v.table); } catch { fail('bad_view', 'bad_view'); } }
  if (v.thumb !== undefined && v.thumb !== '') {
    if (typeof v.thumb !== 'string' || v.thumb.length > LIMITS.thumb || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(v.thumb)) fail('bad_view', 'bad_view');
    view.thumb = v.thumb;
  }
  return view;
}

// ---------------------------------------------------------------------------------------------- the scene of a view
/** Offsets of an exploded view at t (explode.js's rule: the steps play one after another, each moving dir · dist). */
export function explodeOffsets(ex, tt = 1) {
  const out = new Map();
  if (!ex) return out;
  const n = ex.steps.length;
  ex.steps.forEach((s, k) => {
    const p = Math.max(0, Math.min(1, tt * n - k));
    if (!p) return;
    for (const id of s.insts) out.set(id, add(out.get(id) || [0, 0, 0], mul(s.dir, s.dist * p)));
  });
  return out;
}
/** Where each instance is drawn in a view: Map(inst → matrix) = translation(explode offset + the view's own move) · placement. */
export function worldOf(m, view) {
  const ex = view?.explode ? m.explodes.find((e) => e.id === view.explode.ref) : null;
  const offs = explodeOffsets(ex, view?.explode?.t ?? 0);
  const out = new Map();
  for (const i of m.instances) {
    let o = offs.get(i.id) || null;
    const mv = view?.moves?.[i.id];
    if (mv) o = o ? add(o, mv) : mv;
    out.set(i.id, o ? matMul(translation(o), i.matrix) : i.matrix);
  }
  return out;
}
/** An instance's look in a view: { hide, ghost, opacity, color }. */
export const instState = (view, id) => ({ hide: false, ghost: false, opacity: 1, color: null, ...(view?.insts?.[id] || {}) });
/** Instances drawn in a view (not hidden), in the product's order. */
export const shownInstances = (m, view) => m.instances.filter((i) => !view?.insts?.[i.id]?.hide);
/** Box of the shown instances (world mm), or null. */
export function sceneBox(m, meshes, view, ids = null) {
  const world = worldOf(m, view);
  let box = null;
  for (const i of shownInstances(m, view)) if (!ids || ids.includes(i.id)) box = unionBox(box, boxOf(meshes.get(i.part)?.positions, world.get(i.id)));
  return box;
}
/** Every instance of the parts the given instances are (select-same-part). */
export function sameParts(m, ids) {
  const parts = new Set(m.instances.filter((i) => ids.includes(i.id)).map((i) => i.part));
  return m.instances.filter((i) => parts.has(i.part)).map((i) => i.id);
}
/** Instances under a group, its sub-groups included. */
export function instancesIn(m, groupId) {
  const kids = new Map();
  for (const g of m.groups) if (g.parent) (kids.get(g.parent) || kids.set(g.parent, []).get(g.parent)).push(g.id);
  const all = new Set();
  const walk = (id) => { if (all.has(id)) return; all.add(id); for (const k of kids.get(id) || []) walk(k); };
  walk(groupId);
  return m.instances.filter((i) => i.group && all.has(i.group)).map((i) => i.id);
}
/** The product tree for a panel: [{ kind: 'group'|'inst', id, name, depth, part? }] in tree order. */
export function treeRows(m) {
  const rows = [];
  const kids = new Map([[null, []]]);
  for (const g of m.groups) (kids.get(g.parent) || kids.set(g.parent, []).get(g.parent)).push({ kind: 'group', g });
  for (const i of m.instances) (kids.get(i.group) || kids.set(i.group, []).get(i.group)).push({ kind: 'inst', i });
  const walk = (key, depth) => {
    for (const k of kids.get(key) || []) {
      if (k.kind === 'group') { rows.push({ kind: 'group', id: k.g.id, name: k.g.name, depth }); walk(k.g.id, depth + 1); }
      else rows.push({ kind: 'inst', id: k.i.id, name: k.i.name, depth, part: k.i.part });
    }
  };
  walk(null, 0);
  return rows;
}

// ---------------------------------------------------------------------------------------------- view edits (call inside Doc.edit)
const nextId = (m, letter) => letter + m.seq++;
export function defaultCamera(box, dir = [1, 0.8, 1], type = 'ortho') {
  const c = box ? [(box.min[0] + box.max[0]) / 2, (box.min[1] + box.max[1]) / 2, (box.min[2] + box.max[2]) / 2] : [0, 0, 0];
  const r = box ? Math.max(len([box.max[0] - box.min[0], box.max[1] - box.min[1], box.max[2] - box.min[2]]) / 2, 1) : 100;
  const d = norm(dir);
  return { type, pos: add(c, mul(d, r * 4)), target: c, up: [0, 1, 0], height: r * 1.1, fov: 35 };
}
export function addView(m, { name, camera, from = null } = {}) {
  if (m.views.length >= LIMITS.views) throw new ManualError('too_many', t('illustrate.view.too_many', { n: LIMITS.views }));
  const base = from ? structuredClone(from) : { explode: null, moves: {}, insts: {}, look: null, table: null, annots: [], thumb: '' };
  const v = { ...base, id: nextId(m, 'v'), name: clean(name, LIMITS.name) || t('illustrate.view.default_name', { n: m.views.length + 1 }), camera: camera ? readCamera(camera) : (from ? base.camera : defaultCamera(null)) };
  const at = from ? m.views.indexOf(m.views.find((x) => x.id === from.id)) + 1 : m.views.length;
  m.views.splice(at > 0 ? at : m.views.length, 0, v);
  return v;
}
export function duplicateView(m, id) {
  const v = m.views.find((x) => x.id === id);
  if (!v) return null;
  return addView(m, { from: v, name: t('illustrate.view.copy_name', { name: v.name }).slice(0, LIMITS.name) });
}
export function removeView(m, id) {
  const k = m.views.findIndex((x) => x.id === id);
  if (k < 0) return false;
  m.views.splice(k, 1);
  if (m.instructions) m.instructions.steps = m.instructions.steps.filter((s) => s.view !== id);
  return true;
}
/** Move a view to index `to` (clamped). */
export function moveView(m, id, to) {
  const k = m.views.findIndex((x) => x.id === id);
  if (k < 0) return false;
  const [v] = m.views.splice(k, 1);
  m.views.splice(Math.max(0, Math.min(m.views.length, to)), 0, v);
  return true;
}
export function renameView(m, id, name) {
  const v = m.views.find((x) => x.id === id);
  const n = clean(name, LIMITS.name);
  if (!v || !n) return false;
  v.name = n;
  return true;
}
/** "Update view": store the current scene (camera, explode, moves, instance looks, look) into a saved view. */
export function updateView(m, id, scene) {
  const v = m.views.find((x) => x.id === id);
  if (!v) return false;
  v.camera = readCamera(scene.camera);
  v.explode = scene.explode ? { ...scene.explode } : null;
  v.moves = structuredClone(scene.moves || {});
  v.insts = structuredClone(scene.insts || {});
  v.look = scene.look ? structuredClone(scene.look) : null;
  v.table = scene.table ? structuredClone(scene.table) : null;
  v.annots = [...(scene.annots || [])];
  if (scene.thumb !== undefined) v.thumb = scene.thumb;
  return true;
}
/** The scene from a saved view (what clicking a view does). */
export function sceneOf(view) {
  const { id: _i, name: _n, thumb: _t, ...s } = structuredClone(view);
  return s;
}
/** The scene, made when a manual has none yet (a new manual opens on this). */
export const blankScene = (camera) => ({ camera: readCamera(camera), explode: null, moves: {}, insts: {}, look: null, table: null, annots: [] });
/** Change instances' looks in a view (patch keys hide, ghost, opacity, color; null/false/1 clears one). */
export function setInstState(view, ids, patch) {
  for (const id of ids) {
    const s = { ...(view.insts[id] || {}) };
    for (const [k, v] of Object.entries(patch)) {
      if (k === 'hide' || k === 'ghost') { if (v) s[k] = true; else delete s[k]; }
      else if (k === 'opacity') { if (v === null || v >= 1) delete s.opacity; else s.opacity = Math.max(0, Math.min(1, v)); }
      else if (k === 'color') { if (v && HEX.test(v)) s.color = v; else delete s.color; }
    }
    if (Object.keys(s).length) view.insts[id] = s; else delete view.insts[id];
  }
}
/** Show only these instances (isolate); the rest are hidden. */
export function isolate(m, view, ids) {
  const keep = new Set(ids);
  for (const i of m.instances) setInstState(view, [i.id], { hide: !keep.has(i.id) });
}
export function showAll(m, view) { for (const i of m.instances) setInstState(view, [i.id], { hide: false }); }
/** Move instances in a view by d (mm), on top of any explode. */
export function moveInstances(view, ids, d) {
  for (const id of ids) {
    const o = add(view.moves[id] || [0, 0, 0], d);
    if (len(o) < 1e-9) delete view.moves[id]; else view.moves[id] = o;
  }
}

// ---------------------------------------------------------------------------------------------- the document and its undo
/** A manual being edited: every change is Doc.edit(label, fn) = one undo step. */
export class Doc {
  constructor({ m, meshes }, { limit = LIMITS.history } = {}) {
    this.m = m; this.meshes = meshes; this.undoStack = []; this.redoStack = []; this.limit = limit; this.dirty = false;
  }
  snapshot() { return { m: structuredClone(this.m), meshes: new Map(this.meshes) }; }
  /** Run fn(m, doc) as one undo step; a throw leaves the manual as it was. */
  edit(label, fn) {
    const before = this.snapshot();
    let r;
    try { r = fn(this.m, this); } catch (e) { this.m = before.m; this.meshes = before.meshes; throw e; }
    this.undoStack.push({ label, ...before });
    if (this.undoStack.length > this.limit) this.undoStack.shift();
    this.redoStack.length = 0;
    this.dirty = true;
    return r;
  }
  get canUndo() { return this.undoStack.length > 0; }
  get canRedo() { return this.redoStack.length > 0; }
  get undoLabel() { return this.undoStack.at(-1)?.label || ''; }
  get redoLabel() { return this.redoStack.at(-1)?.label || ''; }
  undo() {
    const s = this.undoStack.pop();
    if (!s) return null;
    this.redoStack.push({ label: s.label, ...this.snapshot() });
    this.m = s.m; this.meshes = s.meshes; this.dirty = true;
    return s.label;
  }
  redo() {
    const s = this.redoStack.pop();
    if (!s) return null;
    this.undoStack.push({ label: s.label, ...this.snapshot() });
    this.m = s.m; this.meshes = s.meshes; this.dirty = true;
    return s.label;
  }
  view(id) { return this.m.views.find((v) => v.id === id) || null; }
  toJSON() { return toJSON(this.m, this.meshes); }
}

/** Volume (mm³) and area of a closed mesh under a matrix (signed volume; |·| for badly wound meshes). */
export function meshStats(mesh) {
  const P = mesh.positions, I = mesh.indices;
  let vol = 0, area = 0;
  for (let k = 0; k < I.length; k += 3) {
    const a = I[k] * 3, b = I[k + 1] * 3, c = I[k + 2] * 3;
    const ax = P[a], ay = P[a + 1], az = P[a + 2], bx = P[b], by = P[b + 1], bz = P[b + 2], cx = P[c], cy = P[c + 1], cz = P[c + 2];
    vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
    const ux = bx - ax, uy = by - ay, uz = bz - az, vx = cx - ax, vy = cy - ay, vz = cz - az;
    area += Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx) / 2;
  }
  return { volume: Math.abs(vol), area };
}
export { apply };
