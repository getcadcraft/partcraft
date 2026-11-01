/* SPDX-License-Identifier: Apache-2.0 */
/**
 * phys-worker.js — contact between SEPARATE PARTS and the 2-D magnet study as compute-worker ops (0.8 round 3, SU.891 and SG.7+ solver side; DOM-free).
 * physics_PART_3 owns this file. (Nonlinear and contact studies of ONE part are part_PART_3's nl-worker.js, op nlSolve; this file does not repeat them.)
 * 0.8 SU.891 (dec-su_PART_3, assembly study): a partJob may carry `place` (16 numbers, column-major, the instance's world matrix): the part is meshed in its own
 * frame, then its nodes, exact face records and force directions move to the assembly frame. A pair may carry `factor` (penalty = factor × E / h, like a part study).
 * To use it, add 'phys-worker.js' to the module list of the worker that should answer the ops, and call them by name like tetSolve. Nothing here
 * runs ccx or any outside program: our own solvers are the engine (KICKOFF rule 43); CalculiX's .inp / .frd files are only a file format (calculix.js).
 *
 *   contactSolve(job)     several parts that touch: job = { parts: [partJob …], pairs: [{ type 'frictionless' | 'bonded', slave: { part, faces: [i…] },
 *                         master: { part, faces: [i…] }, kn?, kt? }], nonlinear } — each partJob is a tet job of one part (simJob without its
 *                         environment) carrying its own supports and loads on its own faces; the parts are merged, face numbers offset
 *   magnetSolve(job)      2-D magnetostatics on a sketch profile: { box, loops: [{ region, poly }], size, materials, current, br, contours }
 *                         (magnetmesh.js makes the mesh; contours are element sets of air round a body whose Maxwell force is wanted)
 *
 * Results (structured-clonable; the plot mesh and vertex arrays are transferred):
 *   contactSolve → { kind: 'nonlinear', mesher: 'tet', converged, failedAt?, lambda, steps: [{ lambda, iterations, plastic, residual }],
 *     summary, material(s), maxVm { value, at }, maxDisp { value, at }, maxPlastic { value, at }, plasticElements, contact? { points, maxPenetration,
 *     maxPressure, normalForce, pairs }, loadTotal, vertex { vm, plastic, disp, u }, plotMesh, ms }
 *   magnetSolve → { kind: 'magnet', mesh stats, iterations, Bmax { value, at }, bodies: [{ region, area, fx, fy }]?, forces: [{ id, fx, fy, torque, edges }],
 *     mesh { nodes, tris, region }, B { x, y, mag } per element, A per node, ms }
 */
import { addOps } from './worker-ops.js';
import { meshJob, tetBoundaryConditions, jobFaces, makeTetModel } from './tetfea.js';
import { applyEnv } from './env/env.js';
import * as NL from './nonlinear.js';
import * as CT from './contact.js';
import * as MG from './magnet.js';
import * as CX from './calculix.js';
import * as MM from './magnetmesh.js';
import { tetPlotMesh } from './tet-worker.js';
import { applyMat, applyDir } from './vec.js';

const T_PER_KGM3 = 1e-12;   // kg/m³ → tonnes/mm³ (the units of tetfea.js)
const progress = (ctx) => { let last = 0; return (f) => { const now = Date.now(); if (now - last > 150) { last = now; ctx && ctx.progress && ctx.progress(Math.max(0, Math.min(1, f))); } }; };
const at = (pm, values, comps = 1) => { const out = new Float32Array(pm.node.length * comps); pm.node.forEach((n, v) => { for (let c = 0; c < comps; c++) out[comps * v + c] = values[comps * n + c]; }); return out; };
const send = (ctx, pm) => { ctx.transfer && ctx.transfer(pm.positions.buffer, pm.indices.buffer, pm.triFace.buffer, pm.lines.buffer); return { positions: pm.positions, indices: pm.indices, triFace: pm.triFace, lines: pm.lines }; };
const materialOf = (m) => NL.bilinearMaterial({ E: m.E, nu: m.nu, yield: m.yield > 0 ? m.yield : Infinity, Et: m.Et || 0, density: (m.density || 0) * T_PER_KGM3 });
const argmax = (arr) => { let k = 0; for (let i = 1; i < arr.length; i++) if (arr[i] > arr[k]) k = i; return k; };

/** Nodal averages of per-element values (each element's value goes to its ten nodes). */
function nodalFromElements(model, perElem) {
  const sum = new Float64Array(model.n), cnt = new Float64Array(model.n), m = model.tets10.length / 10;
  for (let e = 0; e < m; e++) for (let a = 0; a < 10; a++) { const n = model.tets10[10 * e + a]; sum[n] += perElem[e]; cnt[n]++; }
  for (let i = 0; i < model.n; i++) if (cnt[i]) sum[i] /= cnt[i];
  return sum;
}

function nlResult(ctx, r, model, summary, extra, mats, elemMat) {
  // a solve that gave up has no stresses yet: take them at the last converged state, so the result still shows where it was heading
  if (!r.sig) r.sig = NL.internal(model, mats, elemMat, r.u, r.state, { tangent: false, stress: true }).sig;
  const pm = tetPlotMesh(model), ex = NL.elementMaxima(model, r.sig, r.state);
  const vmN = nodalFromElements(model, ex.vm), apN = nodalFromElements(model, ex.plasticStrain);
  const dispN = new Float64Array(model.n);
  for (let i = 0; i < model.n; i++) dispN[i] = Math.hypot(r.u[3 * i], r.u[3 * i + 1], r.u[3 * i + 2]);
  const vertex = { vm: at(pm, vmN), plastic: at(pm, apN), disp: at(pm, dispN), u: at(pm, r.u, 3) };
  ctx.transfer && ctx.transfer(...Object.values(vertex).map((a) => a.buffer));
  const pos = (e) => { const c = [0, 0, 0]; for (let a = 0; a < 10; a++) for (let k = 0; k < 3; k++) c[k] += model.X[3 * model.tets10[10 * e + a] + k] / 10; return c; };
  const ev = argmax(ex.vm), ep = argmax(ex.plasticStrain), nd = argmax(dispN);
  let plasticElements = 0; for (let e = 0; e < ex.plasticStrain.length; e++) if (ex.plasticStrain[e] > 0) plasticElements++;
  return {
    kind: 'nonlinear', mesher: 'tet', converged: r.converged, failedAt: r.failedAt ?? null, lambda: r.lambda, summary,
    steps: r.steps.map((s) => ({ lambda: s.lambda, iterations: s.iterations, plastic: s.plastic, residual: s.residual })),
    maxVm: { value: ex.vm[ev], at: pos(ev) }, maxPlastic: { value: ex.plasticStrain[ep], at: pos(ep) }, plasticElements,
    maxDisp: { value: dispN[nd], at: [model.X[3 * nd], model.X[3 * nd + 1], model.X[3 * nd + 2]] },
    vertex, plotMesh: send(ctx, pm), ...extra,
  };
}

/** The merged model of a contact job (shared by the solve and the CalculiX deck). */
export function prepareContact(job, prog = () => {}) {
  if (!Array.isArray(job.parts) || job.parts.length < 2) throw new Error('A contact study needs two or more parts.');   // i18n-ignore: the caller words it
  const jobs = job.parts.map((p) => applyEnv(p));
  for (const p of jobs) for (const l of (p.bcs && p.bcs.loads) || []) if (l.type === 'gravity') throw new Error('Gravity is not available in a contact study yet: apply the weight as a force.');   // i18n-ignore
  const meshes = jobs.map((p, i) => meshJob(p, (f) => prog(0.3 * (i + f) / jobs.length)));
  // a part placed in an assembly: nodes, exact face records and force directions go to the assembly frame (rigid placements only)
  const place = jobs.map((p) => (Array.isArray(p.place) && p.place.length === 16 && p.place.every(Number.isFinite) ? p.place : null));
  place.forEach((m, i) => { if (!m) return; const nd = meshes[i].t10.nodes; for (let k = 0; k < nd.length; k += 3) { const q = applyMat(m, [nd[k], nd[k + 1], nd[k + 2]]); nd[k] = q[0]; nd[k + 1] = q[1]; nd[k + 2] = q[2]; } });
  const placedFace = (m, f) => (!m || !f ? f : { ...f, ...(f.n ? { n: applyDir(m, f.n), o: applyMat(m, f.o) } : {}), ...(f.axis ? { axis: { o: applyMat(m, f.axis.o), d: applyDir(m, f.axis.d) } } : {}) });
  const M = CT.mergeBodies(meshes.map((m) => m.t10));
  const trisOf = (ref) => {
    const lo = M.faceStart[ref.part], hi = ref.part + 1 < M.faceStart.length ? M.faceStart[ref.part + 1] : Infinity, want = new Set(ref.faces.map((f) => f + lo)), out = [];
    for (let t = 0; t < M.bface.length; t++) if (M.bface[t] >= lo && M.bface[t] < hi && want.has(M.bface[t])) out.push(t);
    if (!out.length) throw new Error('A contact surface of part ' + (ref.part + 1) + ' has no faces on the mesh.');   // i18n-ignore
    return out;
  };
  const mats = jobs.map((p) => materialOf(p.material));
  const hMin = Math.min(...meshes.map((m) => m.tm.stats.h || Infinity), ...jobs.map((p) => p.h || Infinity));
  const pairs = (job.pairs || []).map((pr) => ({ type: pr.type === 'bonded' ? 'bonded' : 'frictionless', slave: trisOf(pr.slave), master: trisOf(pr.master),
    kn: pr.kn || CT.autoPenalty(Math.min(mats[pr.slave.part].E, mats[pr.master.part].E), Number.isFinite(hMin) ? hMin : 1, pr.factor > 0 ? pr.factor : pr.type === 'bonded' ? 1e3 : 100), ...(pr.kt ? { kt: pr.kt } : {}) }));   // factors 1e3 / 100: the penalty's own give is ~1e-3 / 1e-2 of the element size's share (contact.js header); gap-closing loads also need small steps, below
  const plan = CT.planContact(M, pairs, { cutoff: job.cutoff ?? null });
  const model = makeModel(M, plan);
  const bcs = { constraints: [], loads: [] }, faces = [];
  jobs.forEach((p, b) => {
    const off = M.faceStart[b], map = (it) => ({ ...it, faces: (it.faces || []).map((f) => f + off) });
    for (const c of (p.bcs && p.bcs.constraints) || []) bcs.constraints.push(map(c));
    for (const l of (p.bcs && p.bcs.loads) || []) { const m = map(l); if (place[b] && Array.isArray(m.dir)) m.dir = applyDir(place[b], m.dir); bcs.loads.push(m); }
    const own = jobFaces(p); for (let i = 0; i < own.length; i++) faces[off + i] = placedFace(place[b], own[i]);
  });
  const bc = tetBoundaryConditions(model, bcs, { density: 0, faces });
  return { jobs, meshes, M, pairs, plan, model, bc, mats, hMin };
}

export function contactSolve(job, ctx = { progress() {}, transfer() {} }) {
  const t0 = Date.now(), prog = progress(ctx);
  const { jobs, M, pairs, plan, model, bc, mats, hMin } = prepareContact(job, prog);
  const contact = plan.bind(model);
  const r = NL.solveNonlinear(model, mats, M.elemBody, bc, { steps: 10, ...(job.nonlinear || {}), contact, onProgress: (l) => prog(0.3 + 0.7 * l), prec: 'ic0' });
  const rep = contact.report(), info = contact.info || {};
  let normalForce = 0, maxPressure = 0; for (const q of rep) { normalForce += q.force; if (q.pressure > maxPressure) maxPressure = q.pressure; }
  const summary = { mesher: 'tet', elements: model.tets10.length / 10, nodes: model.n, dofs: model.N, parts: jobs.length, h: hMin };
  return nlResult(ctx, r, model, summary, {
    materials: mats.map((m) => ({ E: m.E, nu: m.nu, yield: m.sy, Et: m.Et })), loadTotal: Array.from(bc.loadTotal || []),
    contact: { points: rep.length, maxPenetration: info.maxPenetration ?? 0, maxPressure, normalForce, pairs: pairs.map((p) => ({ type: p.type, kn: p.kn, slaveFaces: p.slave.length, masterFaces: p.master.length })),
      report: rep.slice(0, 2000).map((q) => ({ at: q.at, pressure: q.pressure, gap: q.gap })) },
    ms: Date.now() - t0,
  }, mats, M.elemBody);
}
const makeModel = (M, plan) => makeTetModel(M, { extraPairs: plan.extraPairs });

const matOf = (spec) => (spec.type === 'brauer' ? MG.brauer(spec) : spec.type === 'table' ? MG.table(spec.points) : MG.linear(spec.mur ?? 1));
export function magnetSolve(job, ctx = { progress() {}, transfer() {} }) {
  const t0 = Date.now();
  const size = job.size && typeof job.size === 'object' ? MM.sizeField(job.size) : job.size;
  const mesh = MM.meshProfile({ box: job.box, loops: job.loops, size, minAngle: job.minAngle, maxPoints: job.maxPoints });
  if (mesh.stats.truncated) throw new Error('The mesh needs more points than allowed (' + mesh.stats.points + '): make the size larger or raise the limit.');   // i18n-ignore
  const materials = {}; for (const [id, spec] of Object.entries(job.materials || { 0: { type: 'linear', mur: 1 } })) materials[id] = matOf(spec);
  if (!materials[0]) materials[0] = MG.linear(1);
  const r = MG.solveMagnetostatic(mesh, { region: mesh.region, materials, current: job.current || {}, br: job.br || {}, tol: job.tol, maxIter: job.maxIter });
  const G = r.geom, e = argmax(r.Bmag);
  const forces = (job.contours || []).map((c) => {
    const inside = c.box ? (x, y) => x > c.box[0] && x < c.box[2] && y > c.box[1] && y < c.box[3] : (x, y) => (c.radius !== undefined ? Math.hypot(x - c.at[0], y - c.at[1]) < c.radius : false);
    return { id: c.id, ...MG.maxwell(mesh, r, inside) };
  });
  const area = {}; for (let i = 0; i < mesh.region.length; i++) area[mesh.region[i]] = (area[mesh.region[i]] || 0) + G.area[i];
  const out = { kind: 'magnet', stats: mesh.stats, iterations: r.iterations, Bmax: { value: r.Bmag[e], at: [G.cx[e], G.cy[e]] }, areas: area, forces,
    mesh: { nodes: mesh.nodes, tris: mesh.tris, region: mesh.region }, B: { x: Float32Array.from(r.Bx), y: Float32Array.from(r.By), mag: Float32Array.from(r.Bmag) }, A: Float32Array.from(r.A), energy: r.energy ?? null, ms: Date.now() - t0 };
  ctx.transfer && ctx.transfer(out.mesh.nodes.buffer, out.mesh.tris.buffer, out.mesh.region.buffer, out.B.x.buffer, out.B.y.buffer, out.B.mag.buffer, out.A.buffer);
  return out;
}

/** The CalculiX deck (.inp) of the same model (the person runs ccx themselves; we only write its file format). */
export function contactDeck(job) {
  const { jobs, model, M, mats, bc, pairs } = prepareContact(job);
  const names = job.names || jobs.map((_, i) => 'PART' + (i + 1));
  const text = CX.exportInp({ model, elemBody: M.elemBody, materials: mats, cons: bc.cons, f: bc.f, pairs: pairs.map((q, i) => ({ id: 'c' + (i + 1), ...q })), steps: (job.nonlinear && job.nonlinear.steps) || 10, title: job.title || 'PartCraft assembly study', names });
  return { text, nodes: model.n, elements: model.tets10.length / 10 };
}

/** The results file (.frd) the person's own CalculiX wrote for that deck, read back on the rebuilt mesh: the displacements (and the von Mises of S when it holds one). */
export function contactRead(job) {
  const { model, jobs } = prepareContact(job);
  const frd = CX.parseFrd(String(job.frd || ''));
  if (frd.nodes.size !== model.n) throw new Error(`The results file has ${frd.nodes.size} nodes and this study's mesh has ${model.n}: the mesh is not the one the deck was written from. Write the deck again from this study and run that.`);   // i18n-ignore
  const u = CX.frdDisplacements(frd, model);
  if (!u) throw new Error('The results file has no displacements (DISP). Ask CalculiX for U in the step\'s output.');   // i18n-ignore
  let nd = 0, dmax = -1;
  for (let i = 0; i < model.n; i++) { const d = Math.hypot(u[3 * i], u[3 * i + 1], u[3 * i + 2]); if (d > dmax) { dmax = d; nd = i; } }
  const stress = [...frd.blocks].reverse().find((b) => b.name === 'STRESS');
  let vm = null;
  if (stress) { vm = 0; for (const [, v] of stress.values) if (v.length >= 6) { const [a, b, c, d, e, f] = v; vm = Math.max(vm, Math.sqrt(0.5 * ((a - b) ** 2 + (b - c) ** 2 + (c - a) ** 2) + 3 * (d * d + e * e + f * f))); } }
  return { kind: 'calculix', calculix: { nodes: frd.nodes.size, stress: !!stress }, parts: jobs.length, maxDisp: { value: dmax, at: [model.X[3 * nd], model.X[3 * nd + 1], model.X[3 * nd + 2]] }, maxVm: vm === null ? null : { value: vm } };
}

addOps({ contactSolve, contactDeck, contactRead, magnetSolve });
