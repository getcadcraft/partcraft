/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sim.js — Simulation and Generative studies as plain data (DOM-free): new, read (untrusted, for
 * part.studies), describe, element-size advice, and the job a worker solves (face references resolved to
 * the current build's face indices).
 *
 * part.studies.simulation = { v:1, kind 'static'|'modal', material (materials.js id | {name,E,nu,density,yield}),
 *   h (element size mm | null = auto), elem 'h8i'|'h8', modes 1–10, seq,
 *   constraints: [{id, type 'fixed'|'frictionless', faces:[FaceRef]}], loads: [{id, type 'force', faces, total N,
 *   dir 'normal'|[x,y,z]} | {id, type 'pressure', faces, p MPa} | {id, type 'gravity', dir:[x,y,z]}] }
 *   + kind 'thermal' | 'buckling' and the optional heat / thermal / thermalLoad fields: sim-thermal.js
 *   + kind 'flow' and the optional flow block (laminar CFD): flow-study.js
 *   + mesher 'tet' | 'voxel' (tetmesh.js / tetfea.js quadratic tets, or the voxel cubes; absent = 'voxel', what files
 *     saved before the tet mesher were solved with; new studies say 'tet'), refineCurved (tets: smaller elements on curved
 *     faces, default true), adaptive { target %, passes } (tets: automatic refinement, tetadapt.js; absent = off)
 * part.studies.generative = { v:1, material, materials:[ids] (outcomes), volfracs:[0.05–0.9], h | null, rmin mm | null,
 *   designSpace 'part'|'box', margin mm, maxIter, seq, constraints, loads (force/pressure only),
 *   preserve: [{id, faces, t}], obstacle: [{id, faces, t}] }
 * FaceRef = { name (brep.js NAME_RE), at:[x,y,z] } — the same references fillets and shells use.
 */
import { t } from './i18n.js';
import { MATERIALS, materialById, readMaterial } from './materials.js';
import { NAME_RE } from './brep.js';
import { THERMAL_KINDS, HEAT_LABEL, readThermalFields, describeHeat, thermalJob } from './sim-thermal.js';
import { newEnv, envProblems } from './env/env.js';
import { readFlow } from './flow-study.js';   // kind 'flow': settings in study.flow (flow-study.js)
import { NL_KINDS, readNlFields, nlJob } from './nlstudy.js';   // 0.8 SU.891: kinds 'nonlinear' | 'contact' (nlstudy.js, part_PART_3's mount)

export const LIMITS = { simElements: 300000, genElements: 60000, tetElements: 150000, refs: 64, items: 32 };
export const AUTO_ELEMENTS = { simulation: 20000, generative: 8000, tet: 12000 };
/** The study's mesher ('voxel' for studies saved before tets, and for flow, which has its own grid). */
export const mesherOf = (st) => (st && st.kind !== 'flow' && st.mesher === 'tet' ? 'tet' : 'voxel');
/** Tets: the lattice size for about `target` tets before grading (12 per cube of the BCC lattice). */
export const tetAutoSize = (volume) => autoSize(12 * volume, AUTO_ELEMENTS.tet);

export function newSimStudy() {
  return { v: 1, kind: 'static', material: 'al6061', h: null, elem: 'h8i', mesher: 'tet', modes: 4, seq: 0, constraints: [], loads: [] };
}
export function newGenStudy() {
  return { v: 1, material: 'al6061', materials: ['al6061'], volfracs: [0.2, 0.3, 0.4], h: null, rmin: null, designSpace: 'part', margin: 10, maxIter: 80, seq: 0, constraints: [], loads: [], preserve: [], obstacle: [] };
}

const bad = (m) => { throw new Error(m); };
const num = (v, lo, hi, what) => (typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi ? v : bad(t('study.sim.err.out_of_range', { what })));
const id = (v) => (typeof v === 'string' && /^[a-z]{1,4}\d{1,6}$/.test(v) ? v : bad(t('study.sim.err.bad_id')));
const vec = (v, what) => (Array.isArray(v) && v.length === 3 && v.every((c) => typeof c === 'number' && Number.isFinite(c) && Math.abs(c) <= 1e6) && Math.hypot(...v) > 1e-9 ? v.slice() : bad(t('study.sim.err.needs_direction', { what })));
function faceRefs(list) {
  if (!Array.isArray(list) || list.length > LIMITS.refs) bad(t('study.sim.err.bad_face_list'));
  return list.map((f) => {
    if (!f || typeof f.name !== 'string' || f.name.length > 600 || !NAME_RE.test(f.name)) bad(t('study.sim.err.bad_face_name'));
    if (!Array.isArray(f.at) || f.at.length !== 3 || !f.at.every((c) => typeof c === 'number' && Number.isFinite(c) && Math.abs(c) <= 1e7)) bad(t('study.sim.err.bad_face_point'));
    return { name: f.name, at: f.at.slice() };
  });
}
function material(m) {
  if (typeof m === 'string') return materialById(m) ? m : bad(t('study.sim.err.unknown_material'));
  const c = readMaterial(m), out = { name: c.name, E: c.E, nu: c.nu, density: c.density, yield: c.yield };
  for (const k of ['k', 'cp', 'alpha']) if (c[k] !== undefined) out[k] = c[k];   // thermal values, optional (sim-thermal.js)
  return out;
}
function items(list, read) {
  if (!Array.isArray(list) || list.length > LIMITS.items) bad(t('study.sim.err.bad_list'));
  const seen = new Set();
  return list.map((x) => { if (!x || typeof x !== 'object') bad(t('study.sim.err.bad_item')); const r = read(x); if (seen.has(r.id)) bad(t('study.sim.err.dup_id')); seen.add(r.id); return r; });
}
const constraint = (c) => ({ id: id(c.id), type: ['fixed', 'frictionless'].includes(c.type) ? c.type : bad(t('study.sim.err.constraint_type')), faces: faceRefs(c.faces) });
function load(l, allowGravity = true) {
  if (l.type === 'force') return { id: id(l.id), type: 'force', faces: faceRefs(l.faces), total: num(l.total, -1e9, 1e9, t('study.sim.what.force')), dir: l.dir === 'normal' ? 'normal' : vec(l.dir, t('study.sim.what.force')) };
  if (l.type === 'pressure') return { id: id(l.id), type: 'pressure', faces: faceRefs(l.faces), p: num(l.p, -1e5, 1e5, t('study.sim.what.pressure')), ...(l.absolute === true ? { absolute: true } : {}) };   // absolute: the pressure inside a sealed volume; the environment's ambient is taken off (env/env.js)
  if (l.type === 'gravity' && allowGravity) return { id: id(l.id), type: 'gravity', dir: vec(l.dir, t('study.sim.what.gravity')) };
  return bad(t('study.sim.err.load_type'));
}
const size = (h) => (h === null || h === undefined ? null : num(h, 0.01, 1000, t('study.sim.what.element_size')));
/** Automatic refinement settings { target: estimated error % (0.05–50), passes: most solves (1–10) }. */
export const ADAPTIVE_DEFAULT = { target: 1, passes: 5 };
const readAdaptive = (a) => (a && typeof a === 'object' && !Array.isArray(a) ? { target: num(a.target, 0.05, 50, t('study.sim.what.refine_target')), passes: Math.round(num(a.passes, 1, 10, t('study.sim.what.refine_passes'))) } : bad(t('study.sim.err.bad_adaptive')));

/** part.studies.simulation from a file (untrusted) → a clean copy, or throws. */
export function readSimStudy(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || raw.v !== 1) bad(t('study.sim.err.bad_study'));
  return {
    v: 1, kind: ['static', 'modal', ...THERMAL_KINDS, 'flow', ...NL_KINDS].includes(raw.kind) ? raw.kind : bad(t('study.sim.err.unknown_kind')),
    material: material(raw.material), h: size(raw.h), elem: ['h8i', 'h8'].includes(raw.elem) ? raw.elem : bad(t('study.sim.err.unknown_elem')),
    // the mesher right after elem (where newSimStudy has it), only when present: older files read back unchanged
    ...(raw.mesher !== undefined ? { mesher: ['tet', 'voxel'].includes(raw.mesher) ? raw.mesher : bad(t('study.sim.err.unknown_mesher')) } : {}),
    ...(raw.refineCurved !== undefined ? { refineCurved: typeof raw.refineCurved === 'boolean' ? raw.refineCurved : bad(t('study.sim.err.bad_refine_curved')) } : {}),
    ...(raw.adaptive !== undefined ? { adaptive: readAdaptive(raw.adaptive) } : {}),   // tets: automatic refinement (tetadapt.js), only when on
    modes: Math.round(num(raw.modes ?? 4, 1, 10, t('study.sim.what.modes'))), seq: Math.round(num(raw.seq ?? 0, 0, 1e6, t('study.sim.what.counter'))),
    constraints: items(raw.constraints, constraint), loads: items(raw.loads, (l) => load(l, true)),
    ...readThermalFields(raw, { faceRefs, id, num, items }),   // heat, thermal, thermalLoad (only when present)
    ...(raw.kind === 'flow' || raw.flow !== undefined ? { flow: readFlow(raw.flow) } : {}),   // flow settings (flow-study.js)
    ...readNlFields(raw, { faceRefs, id, num, items }),   // nonlinear, contacts (only when present: nlstudy.js)
  };
}
/** part.studies.generative from a file (untrusted) → a clean copy, or throws. */
export function readGenStudy(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || raw.v !== 1) bad(t('study.sim.err.bad_gen'));
  const vf = raw.volfracs, mats = raw.materials;
  if (!Array.isArray(vf) || !vf.length || vf.length > 6) bad(t('study.sim.err.gen_volfracs'));
  if (!Array.isArray(mats) || !mats.length || mats.length > 4 || !mats.every((m) => typeof m === 'string' && materialById(m))) bad(t('study.sim.err.gen_materials'));
  const region = (r) => ({ id: id(r.id), faces: faceRefs(r.faces), t: num(r.t, 0, 1000, t('study.sim.what.region_thickness')) });
  return {
    v: 1, material: material(raw.material), materials: [...new Set(mats)], volfracs: [...new Set(vf.map((v) => num(v, 0.05, 0.9, t('study.sim.what.target_volume'))))].sort((a, b) => a - b),
    h: size(raw.h), rmin: raw.rmin === null || raw.rmin === undefined ? null : num(raw.rmin, 0.01, 1000, t('study.sim.what.min_member')),
    designSpace: ['part', 'box'].includes(raw.designSpace) ? raw.designSpace : bad(t('study.sim.err.gen_space')),
    margin: num(raw.margin ?? 10, 0, 1000, t('study.sim.what.margin')), maxIter: Math.round(num(raw.maxIter ?? 80, 5, 300, t('study.sim.what.iterations'))), seq: Math.round(num(raw.seq ?? 0, 0, 1e6, t('study.sim.what.counter'))),
    constraints: items(raw.constraints, constraint), loads: items(raw.loads, (l) => load(l, false)), preserve: items(raw.preserve || [], region), obstacle: items(raw.obstacle || [], region),
  };
}

// labels from the language files, read where they are shown (getters: never t() at import)
export const CONSTRAINT_LABEL = { get fixed() { return t('study.sim.constraint.fixed'); }, get frictionless() { return t('study.sim.constraint.frictionless'); } };
export const LOAD_LABEL = { get force() { return t('study.sim.load.force'); }, get pressure() { return t('study.sim.load.pressure'); }, get gravity() { return t('study.sim.load.gravity'); } };
export const materialOf = (m) => (typeof m === 'string' ? materialById(m) : { id: 'custom', ...m });
export { MATERIALS };

/** A short description of a study item. */
export function describe(item) {
  if (HEAT_LABEL[item.type]) return describeHeat(item);
  if (item.type === 'gravity') return t('study.sim.desc.gravity', { dir: item.dir.map((v) => +v.toFixed(3)).join(', ') });
  const faces = item.faces ? t('study.sim.desc.faces', { n: item.faces.length }) : '';
  if (item.type === 'force') return item.dir === 'normal' ? t('study.sim.desc.force_normal', { force: +item.total.toFixed(3), faces }) : t('study.sim.desc.force_along', { force: +item.total.toFixed(3), dir: item.dir.map((v) => +v.toFixed(3)).join(', '), faces });
  if (item.type === 'pressure') return t('study.sim.desc.pressure', { p: +item.p.toFixed(4), faces });
  if (item.t !== undefined) return t('study.sim.desc.region', { faces, t: +item.t.toFixed(3) });
  return t('study.sim.desc.on_faces', { label: CONSTRAINT_LABEL[item.type] || item.type, faces });
}

/** A tidy element size giving about `target` elements for a solid of this volume (1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8 × 10ⁿ). */
export function autoSize(volume, target) {
  const raw = Math.cbrt(volume / target), e = Math.floor(Math.log10(raw)), b = raw / 10 ** e;
  const steps = [1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  const s = steps.find((x) => x >= b - 1e-9) || 10;
  return +(s * 10 ** e).toPrecision(3);
}

/** A FaceRef → index into regen.faces (same name, nearest `at`), or −1. */
export function findFaceIndex(faces, ref) {
  let best = -1, bd = Infinity;
  faces.forEach((f, i) => { if (f.name !== ref.name) return; const d = Math.hypot(f.at[0] - ref.at[0], f.at[1] - ref.at[1], f.at[2] - ref.at[2]); if (d < bd) { bd = d; best = i; } });
  return best;
}

function resolve(list, faces, what, gone) {
  return list.map((it) => {
    if (!it.faces) return { ...it };
    const idx = it.faces.map((f) => findFaceIndex(faces, f));
    if (idx.some((i) => i < 0)) gone.push(what(it));
    return { ...it, faces: idx.filter((i) => i >= 0) };
  });
}

/** The mesh fields a worker needs (copies, so the transfer leaves the view's mesh alone). */
export const meshForJob = (mesh) => ({ positions: Float32Array.from(mesh.positions), indices: Uint32Array.from(mesh.indices), triFace: mesh.triFace ? Int32Array.from(mesh.triFace) : null });

/** Simulation study + exact build → { job, problems: [text] } (problems: nothing to solve yet, faces gone, …); check: no mesh copy. */
export function simJob(st, regen, { check = false, env = null } = {}) {
  const problems = [];
  if (!regen || !(regen.exact || regen.named) || !regen.mesh || !regen.faces || !regen.stats) return { job: null, problems: [t('study.sim.need_exact')] };
  const gone = [];
  const constraints = resolve(st.constraints, regen.faces, (c) => t('study.sim.item_name', { label: CONSTRAINT_LABEL[c.type], n: c.id.replace(/\D/g, '') }), gone);
  const loads = resolve(st.loads, regen.faces, (l) => t('study.sim.item_name', { label: LOAD_LABEL[l.type], n: l.id.replace(/\D/g, '') }), gone);
  const heat = resolve(st.heat || [], regen.faces, (h) => t('study.sim.item_name', { label: HEAT_LABEL[h.type], n: h.id.replace(/\D/g, '') }), gone);
  const tj = thermalJob(st, heat, materialOf(st.material));   // thermal / buckling / thermal load (sim-thermal.js)
  const nj = nlJob(st, regen.faces, materialOf(st.material));   // nonlinear / contact (nlstudy.js)
  if (gone.length) problems.push(t('study.sim.faces_gone', { items: gone.join(', ') }));
  problems.push(...nj.problems);
  if (!constraints.length && tj.needsConstraint && st.kind !== 'flow') problems.push(t('study.sim.add_constraint'));
  if ((st.kind === 'static' || st.kind === 'buckling' || NL_KINDS.includes(st.kind)) && !loads.length && (tj.needsLoad || NL_KINDS.includes(st.kind))) problems.push(t('study.sim.add_load'));
  problems.push(...tj.problems);
  for (const it of st.kind === 'thermal' ? [] : [...constraints, ...loads]) if (it.faces && !it.faces.length) problems.push(t('study.sim.no_faces', { item: t('study.sim.item_name', { label: it.type === 'fixed' || it.type === 'frictionless' ? CONSTRAINT_LABEL[it.type] : LOAD_LABEL[it.type], n: it.id.replace(/\D/g, '') }) }));
  const tet = mesherOf(st) === 'tet';
  const h = st.h || (tet ? tetAutoSize(regen.stats.volume) : autoSize(regen.stats.volume, AUTO_ELEMENTS.simulation));
  const est = Math.round((tet ? 12 : 1) * regen.stats.volume / h ** 3);   // tets: before grading near curved faces and edges
  const lim = tet ? LIMITS.tetElements : LIMITS.simElements;
  if (est > lim) problems.push(t('study.sim.too_many', { n: est.toLocaleString('en-US'), max: lim.toLocaleString('en-US') }));
  const job = { kind: st.kind, modes: st.modes, material: materialOf(st.material), h, elem: st.elem, mesh: check ? null : meshForJob(regen.mesh), faces: regen.faces.map((f) => ({ area: f.area })), bcs: { constraints, loads }, ...tj.fields, ...nj.fields };
  if (tet) {   // the tet mesher reads the exact surfaces (planes, cylinders) and the B-rep edges
    job.mesher = 'tet'; job.refineCurved = st.refineCurved !== false;
    if (st.adaptive && ['static', 'thermal', 'modal', 'buckling'].includes(st.kind)) job.adaptive = { target: st.adaptive.target, passes: st.adaptive.passes, maxElements: LIMITS.tetElements };   // tet-worker.js applies it (static / buckling without a thermal load, modal, steady thermal)
    job.faces = regen.faces.map((f) => ({ area: f.area, type: f.type, ...(f.n ? { n: f.n.slice(), o: f.o.slice() } : {}), ...(f.axis ? { axis: { o: f.axis.o.slice(), d: f.axis.d.slice() }, r: f.r } : {}), ...(f.surf ? { surf: f.surf } : {}) }));   // surf: brep-surf.js exact surface (spheres, cones, tori, revolutions, extrusions, B-splines)
    if (job.mesh && regen.mesh.edgeSegs) job.mesh.edgeSegs = Float32Array.from(regen.mesh.edgeSegs);
  }
  // EG.32: the part's environment (part.studies.environment) rides with the job; a heat condition or a thermal load that asks for
  // "the environment's temperature" (Tamb / Tref null) gets Earth's when the part has none set. Files without an environment keep 9810 mm/s².
  const needsAmbient = heat.some((x) => x.Tamb === null) || (job.thermalLoad && job.thermalLoad.Tref === null);
  if (env || needsAmbient) job.env = env || newEnv('earth');
  const envNotes = envProblems(job.env || null, { gravityLoads: loads.filter((l) => l.type === 'gravity').length, absolutePressure: loads.filter((l) => l.absolute).length, material: materialOf(st.material) });
  return { job, problems, h, estimate: est, envProblems: envNotes };
}

/** EG.32: the environment's own Problems for the shell (no solve needed): part.studies → [problem]. Empty when the part sets no environment. */
export function simEnvProblems(studies) {
  const env = studies && studies.environment;
  if (!env) return [];
  const st = studies.simulation ? readSimStudy(studies.simulation) : newSimStudy();
  return envProblems(env, { gravityLoads: st.loads.filter((l) => l.type === 'gravity').length, absolutePressure: st.loads.filter((l) => l.absolute).length, material: materialOf(st.material) });
}

/** Generative study + exact build → { job, variants, problems }. */
export function genJob(st, regen, { check = false } = {}) {
  const problems = [];
  if (!regen || !(regen.exact || regen.named) || !regen.mesh || !regen.faces || !regen.stats) return { job: null, problems: [t('study.sim.gen_need_exact')] };
  const gone = [];
  const constraints = resolve(st.constraints, regen.faces, (c) => t('study.sim.item_name', { label: CONSTRAINT_LABEL[c.type], n: c.id.replace(/\D/g, '') }), gone);
  const loads = resolve(st.loads, regen.faces, (l) => t('study.sim.item_name', { label: LOAD_LABEL[l.type], n: l.id.replace(/\D/g, '') }), gone);
  const preserve = resolve(st.preserve, regen.faces, (r) => t('study.sim.preserve_n', { n: r.id.replace(/\D/g, '') }), gone);
  const obstacle = resolve(st.obstacle, regen.faces, (r) => t('study.sim.obstacle_n', { n: r.id.replace(/\D/g, '') }), gone);
  if (gone.length) problems.push(t('study.sim.faces_gone', { items: gone.join(', ') }));
  if (!constraints.length) problems.push(t('study.sim.add_constraint'));
  if (!loads.length) problems.push(t('study.sim.add_load'));
  const bb = regen.stats.bbox, m = st.margin;
  const box = { min: bb.min.map((v) => v - m), max: bb.max.map((v) => v + m) };
  const vol = st.designSpace === 'box' ? (box.max[0] - box.min[0]) * (box.max[1] - box.min[1]) * (box.max[2] - box.min[2]) : regen.stats.volume;
  const h = st.h || autoSize(vol, AUTO_ELEMENTS.generative);
  const est = Math.round(vol / h ** 3);
  if (est > LIMITS.genElements) problems.push(t('study.sim.gen_too_many', { n: est.toLocaleString('en-US'), max: LIMITS.genElements.toLocaleString('en-US') }));
  const job = {
    material: materialOf(st.material), h, rmin: st.rmin || 1.5 * h, projection: true, designSpace: st.designSpace, box, maxIter: st.maxIter,
    mesh: check ? null : meshForJob(regen.mesh), faces: regen.faces.map((f) => ({ area: f.area })), constraints, loads, preserve, obstacle,
  };
  const variants = [];
  for (const v of st.volfracs) for (const mat of st.materials) variants.push({ volfrac: v, material: materialOf(mat) });
  return { job, variants, problems, h, estimate: est };
}
