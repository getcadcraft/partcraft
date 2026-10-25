/* SPDX-License-Identifier: Apache-2.0 */
/**
 * usd-partcraft.js — a part or an assembly as OpenUSD (0.7 XF.8, session `usd`; docs/USD-CONVENTIONS.md § 10). DOM-free.
 * The library is cc-usd (./usd/, a copy of lib/usd written by tools/usd/sync.mjs).
 *
 *   partUsd(part, regen, { format = 'usdz', name }) → { data, report: { parts, instances } }
 *   assemblyUsd(asm, builds, world, { format = 'usdz', name }) → same
 *     builds = Map(part id → regenerate() result with .mesh {positions, indices}, .stats), world = Map(instance id → 4×4
 *     column-major, PartCraft's millimetres, Y up) — the same inputs as ifc-export.js
 *
 * PartCraft works in millimetres with Y up; USD gets metres with Z up ((x, y, z) mm → (x, −z, y) / 1000 m; placements
 * turned the same way). A part is one Xform (kind component) with its built mesh as `Body`. An assembly writes each part
 * once as a prototype under the class `/Prototypes` and each instance as an instanceable reference to it, placed where the
 * assembly puts it. On each part (the prototype in an assembly): `cadcraft:partNumber`, `cadcraft:material`,
 * `cadcraft:density` (g/cm³), `cadcraft:volume` (m³), `cadcraft:mass` (kg, with a material); on each instance its name.
 */
import { UsdBuilder, V } from './usd/index.js';

const A = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];   // Y up → Z up as a column-major matrix: (x, y, z) → (x, −z, y)
const AI = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];
function mmul(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  return o;
}
/** A placement (mm, Y up) → metres, Z up: A·M·A⁻¹ with the translation in metres. */
function place(M) { const m = mmul(A, mmul(M, AI)); m[12] /= 1000; m[13] /= 1000; m[14] /= 1000; return m; }
const unit = (u) => ({ customData: V('dictionary', new Map([['unit', V('string', u)]])) });

function body(b, prim, mesh, mat) {
  const P = mesh.positions, n = P.length / 3;
  const pts = new Float32Array(P.length);
  for (let i = 0; i < n; i++) { pts[i * 3] = P[i * 3] / 1000; pts[i * 3 + 1] = -P[i * 3 + 2] / 1000; pts[i * 3 + 2] = P[i * 3 + 1] / 1000; }
  const nt = mesh.indices.length / 3;
  b.mesh(prim, 'Body', { points: pts, counts: new Int32Array(nt).fill(3), indices: Int32Array.from(mesh.indices) }, { material: mat });
}
function partData(b, prim, part, stats) {
  const S = (n, v) => { if (v !== null && v !== undefined && v !== '') b.attr(prim, n, 'string', String(v), { custom: true, uniform: true }); };
  S('cadcraft:partNumber', part.number || part.drawing?.title?.number || null);
  if (part.material) {
    S('cadcraft:material', part.material.name);
    if (Number.isFinite(part.material.density)) b.attr(prim, 'cadcraft:density', 'double', part.material.density, { custom: true, uniform: true, meta: unit('g/cm3') });
  }
  if (stats && Number.isFinite(stats.volume)) {
    b.attr(prim, 'cadcraft:volume', 'double', stats.volume * 1e-9, { custom: true, uniform: true, meta: unit('m3') });
    if (part.material && Number.isFinite(part.material.density)) b.attr(prim, 'cadcraft:mass', 'double', stats.volume * part.material.density * 1e-6, { custom: true, uniform: true, meta: unit('kg') });
  }
}
const material = (b, part) => b.material(part.material ? 'm_' + part.material.name : 'Part', { base_color: [0.6, 0.62, 0.65], base_metalness: part.material && /steel|alum|iron|brass|copper|metal/i.test(part.material.name) ? 1 : 0, specular_roughness: 0.4 }, { displayName: part.material ? part.material.name : 'Part' });

export function partUsd(part, regen, { format = 'usdz', name = 'Part' } = {}) {
  if (!regen?.mesh) throw new Error('partUsd: the part has no solid');   // i18n-ignore: the caller checks first
  const b = new UsdBuilder({ app: 'PartCraft', source: name, doc: part.name || name });
  const p = b.group(b.root, part.name || 'Part', { kind: 'component', displayName: part.name || 'Part' });
  partData(b, p, part, regen.stats);
  body(b, p, regen.mesh, material(b, part));
  return { data: format === 'usdz' ? b.usdz() : b.write(format), report: { parts: 1, instances: 1 } };
}

export function assemblyUsd(asm, builds, world, { format = 'usdz', name = 'Assembly' } = {}) {
  const b = new UsdBuilder({ app: 'PartCraft', source: name, doc: asm.name || name });
  const protos = new Map();
  let root = null;
  for (const [pid, entry] of Object.entries(asm.parts)) {
    // an assembly's part entry holds the part's own data (`part`) beside its assembly properties (number, description)
    const inner = entry.part && typeof entry.part === 'object' ? entry.part : entry;
    const part = { ...inner, name: entry.name || inner.name, number: entry.number ?? inner.number, material: inner.material || entry.material };
    const built = builds.get(pid);
    if (!built?.mesh) continue;
    if (!root) root = b.layer.addPrim('/', 'Prototypes', { specifier: 'class' });
    const p = b.prim(root, part.name || pid, 'Xform', { displayName: part.name || pid });
    partData(b, p, part, built.stats);
    body(b, p, built.mesh, material(b, part));
    protos.set(pid, p);
  }
  let instances = 0;
  for (const inst of asm.instances) {
    const proto = protos.get(inst.part), M = world.get(inst.id);
    if (!proto || !M) continue;
    const e = asm.parts[inst.part];
    const nm = inst.name || e?.name || e?.part?.name || 'Part';
    const ip = b.group(b.root, nm, { kind: 'component', displayName: nm, matrix: place(M), instanceable: true, references: [proto] });
    b.attr(ip, 'cadcraft:instance', 'string', String(inst.id), { custom: true, uniform: true });
    instances++;
  }
  return { data: format === 'usdz' ? b.usdz() : b.write(format), report: { parts: protos.size, instances } };
}
