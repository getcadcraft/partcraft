/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nl-worker.js — the nonlinear and contact studies of the Simulation workspace as compute-worker ops (0.8 SU.891; DOM-free).
 * Written by part_PART_3 (the mount: nlstudy.js, nlstudy-ui.js, test-nl-mount.mjs) and REBUILT by physics_PART_3 on 2026-10-28 after it overwrote the
 * first copy of this file by mistake (it created a file of the same name a few minutes after part_PART_3 did, without looking). This rebuild follows
 * the contract in nlstudy.js, nlstudy-ui.js and tools/partcraft-test/test-nl-mount.mjs, which pass against it; part_PART_3 owns the file and may
 * replace it with its own copy. The solvers underneath are part-sim-08's (nonlinear.js, contact.js, calculix.js); nothing here runs ccx.
 *
 *   nlSolve(job)       job = sim.js simJob() of a 'nonlinear' | 'contact' study (job.nonlinear { steps, Et, tol }, job.contacts [{ type, slave: [face], master: [face],
 *                      factor }], job.elastic for a static study written elastic) → a static-shaped result (vertex vm / disp / u / plastic [/ pressure], maxVm,
 *                      maxDisp, reaction, loadTotal, summary, plotMesh …) plus nonlinear { converged, failedAt, lambda, steps, maxPlastic, Et, contact { active,
 *                      maxPenetration, normalForce, h, at, points } }
 *   ccxDeck(job)       → { text, nodes, elements }   the CalculiX .inp of the same model (file format only: the person runs CalculiX)
 *   ccxRead(job + frd) → the study's result shape from a CalculiX .frd on the rebuilt mesh: calculix { nodes, stress }; a file of another mesh is refused
 *   prepare(job)       → { model, M, elemBody, mats, bc, plan, pairs, h, rho, tm } the merged model of the job (also used by the tests)
 *
 * A part with several separate pieces is meshed piece by piece (the tet mesher cannot see a gap smaller than its element size: meshed together,
 * two pieces 0.01 mm apart lost both facing faces) and the pieces joined by contact.js mergeBodies; the part's own face numbers are kept, so supports,
 * loads and contact pairs resolved against regen.faces still mean the same faces.
 */
import { addOps } from './worker-ops.js';
import { meshJob, meshSummary, tetBoundaryConditions, jobFaces, makeTetModel } from './tetfea.js';
import { applyEnv } from './env/env.js';
import * as NL from './nonlinear.js';
import * as CT from './contact.js';
import * as CX from './calculix.js';
import { tetPlotMesh } from './tet-worker.js';

const T_PER_KGM3 = 1e-12;   // kg/m³ → tonnes/mm³ (the units of tetfea.js)
const progress = (ctx) => { let last = 0; return (f) => { const now = Date.now(); if (now - last > 150) { last = now; ctx && ctx.progress && ctx.progress(Math.max(0, Math.min(1, f))); } }; };
const at = (pm, values, comps = 1) => { const out = new Float32Array(pm.node.length * comps); pm.node.forEach((n, v) => { for (let c = 0; c < comps; c++) out[comps * v + c] = values[comps * n + c]; }); return out; };
const send = (ctx, pm) => { ctx.transfer && ctx.transfer(pm.positions.buffer, pm.indices.buffer, pm.triFace.buffer, pm.lines.buffer); return { positions: pm.positions, indices: pm.indices, triFace: pm.triFace, lines: pm.lines }; };
const argmax = (arr) => { let k = 0; for (let i = 1; i < arr.length; i++) if (arr[i] > arr[k]) k = i; return k; };

/** The connected pieces of a surface mesh (vertices welded by position), each as its own mesh; one piece → the mesh itself. */
export function splitMesh(mesh) {
  const P = mesh.positions, I = mesh.indices, nv = P.length / 3, weld = new Map(), rep = new Int32Array(nv);
  for (let v = 0; v < nv; v++) { const k = Math.round(P[3 * v] * 1e4) + ',' + Math.round(P[3 * v + 1] * 1e4) + ',' + Math.round(P[3 * v + 2] * 1e4); if (!weld.has(k)) weld.set(k, v); rep[v] = weld.get(k); }
  const parent = Int32Array.from({ length: nv }, (_, i) => i), find = (a) => { while (parent[a] !== a) { parent[a] = parent[parent[a]]; a = parent[a]; } return a; };
  for (let t = 0; t < I.length / 3; t++) { const a = find(rep[I[3 * t]]), b = find(rep[I[3 * t + 1]]), c = find(rep[I[3 * t + 2]]); parent[b] = a; parent[find(c)] = a; }
  const root = (v) => find(rep[v]), groups = new Map();
  for (let t = 0; t < I.length / 3; t++) { const r = root(I[3 * t]); (groups.get(r) || groups.set(r, []).get(r)).push(t); }
  if (groups.size <= 1) return [mesh];
  const keyOf = (x, y, z) => Math.round(x * 1e4) + ',' + Math.round(y * 1e4) + ',' + Math.round(z * 1e4);
  const compOfKey = new Map(); for (let v = 0; v < nv; v++) compOfKey.set(keyOf(P[3 * v], P[3 * v + 1], P[3 * v + 2]), root(v));
  return [...groups.entries()].map(([r, tris]) => {
    const map = new Map(), pos = [], idx = [], tf = [];
    const vid = (v) => { let k = map.get(v); if (k === undefined) { k = map.size; map.set(v, k); pos.push(P[3 * v], P[3 * v + 1], P[3 * v + 2]); } return k; };
    for (const t of tris) { for (let k = 0; k < 3; k++) idx.push(vid(I[3 * t + k])); if (mesh.triFace) tf.push(mesh.triFace[t]); }
    const out = { positions: Float32Array.from(pos), indices: Uint32Array.from(idx), triFace: mesh.triFace ? Int32Array.from(tf) : null };
    if (mesh.edgeSegs) { const s = []; for (let k = 0; k < mesh.edgeSegs.length / 6; k++) if (compOfKey.get(keyOf(mesh.edgeSegs[6 * k], mesh.edgeSegs[6 * k + 1], mesh.edgeSegs[6 * k + 2])) === r) for (let c = 0; c < 6; c++) s.push(mesh.edgeSegs[6 * k + c]); out.edgeSegs = Float32Array.from(s); }
    return out;
  });
}

/** Mesh the job (piece by piece), join the pieces, and make the model, boundary conditions and contact plan. */
export function prepare(job, onProgress = () => {}) {
  job = applyEnv(job);
  const m = job.material, nl = job.nonlinear || {}, rho = (m.density || 0) * T_PER_KGM3;
  const mat = NL.bilinearMaterial({ E: m.E, nu: m.nu, yield: job.elastic || !(m.yield > 0) ? Infinity : m.yield, Et: nl.Et ?? 0, density: rho });
  const pieces = (job.contacts && job.contacts.length ? splitMesh(job.mesh) : [job.mesh]);
  const meshes = pieces.map((mesh, i) => meshJob({ ...job, mesh }, (f) => onProgress((i + f) / pieces.length * 0.4)));
  let M = meshes[0].t10;
  if (meshes.length > 1) {
    const original = meshes.map((x) => x.t10.bface);
    M = CT.mergeBodies(meshes.map((x) => x.t10));
    M.bface = Int32Array.from(original.flatMap((b) => Array.from(b)));   // keep the part's face numbers: mergeBodies would offset them per piece
  }
  const elemBody = meshes.length > 1 ? M.elemBody : null;
  const h = job.h || meshes[0].tm.stats.h;
  const tris = (faces) => { const want = new Set(faces), out = []; for (let t = 0; t < M.bface.length; t++) if (want.has(M.bface[t])) out.push(t); return out; };
  const pairs = (job.contacts || []).map((c) => ({ id: c.id, type: c.type, slave: tris(c.slave), master: tris(c.master), kn: CT.autoPenalty(mat.E, h, c.factor) }));
  for (const p of pairs) if (!p.slave.length || !p.master.length) throw new Error('A contact pair has no faces on the mesh.');   // i18n-ignore: nlstudy.js checks the faces first; this is the backstop
  const plan = pairs.length ? CT.planContact(M, pairs, { cutoff: Math.max(2 * h, 1e-3) }) : null;
  const model = makeTetModel(M, plan ? { extraPairs: plan.extraPairs } : {});
  const bc = tetBoundaryConditions(model, job.bcs, { density: rho, faces: jobFaces(job) });
  const tm = meshes[0].tm;
  return { job, model, M, elemBody, mats: elemBody ? meshes.map(() => mat) : [mat], mat, bc, plan, pairs, h, rho, tm, meshes, steps: nl.steps || 10, tol: nl.tol || 1e-6, Et: nl.Et ?? 0 };
}

function nodalFromElements(model, perElem) {
  const sum = new Float64Array(model.n), cnt = new Float64Array(model.n), m = model.tets10.length / 10;
  for (let e = 0; e < m; e++) for (let a = 0; a < 10; a++) { const n = model.tets10[10 * e + a]; sum[n] += perElem[e]; cnt[n]++; }
  for (let i = 0; i < model.n; i++) if (cnt[i]) sum[i] /= cnt[i];
  return sum;
}
/** The support reaction on a set of nodes: internal force minus the load applied there (a loaded node on a symmetry plane is in both). */
const sumNodes = (fint, f, nodes) => { const s = [0, 0, 0]; for (const n of nodes) for (let a = 0; a < 3; a++) s[a] += fint[3 * n + a] - f[3 * n + a]; return s; };

/** The static-shaped result of a solved nonlinear / contact model. */
function resultOf(P, r, ctx, { contact = null, t0, calculix = null, vmNodes = null } = {}) {
  const { model, mat, bc } = P;
  if (!r.sig) r.sig = NL.internal(model, P.mats, P.elemBody, r.u, r.state, { tangent: false, stress: true }).sig;   // a solve that gave up: stresses at the last good state
  const fint = r.fint || NL.internal(model, P.mats, P.elemBody, r.u, r.state, { tangent: false }).fint;
  const pm = tetPlotMesh(model), ex = NL.elementMaxima(model, r.sig, r.state);
  const dispN = new Float64Array(model.n);
  for (let i = 0; i < model.n; i++) dispN[i] = Math.hypot(r.u[3 * i], r.u[3 * i + 1], r.u[3 * i + 2]);
  const vertex = { vm: at(pm, vmNodes || nodalFromElements(model, ex.vm)), plastic: at(pm, nodalFromElements(model, ex.plasticStrain)), disp: at(pm, dispN), u: at(pm, r.u, 3) };
  ctx.transfer && ctx.transfer(...Object.values(vertex).map((a) => a.buffer));
  const ev = argmax(ex.vm), ep = argmax(ex.plasticStrain), nd = argmax(dispN);
  const pos = (e) => { const c = [0, 0, 0]; for (let a = 0; a < 10; a++) for (let k = 0; k < 3; k++) c[k] += model.X[3 * model.tets10[10 * e + a] + k] / 10; return c; };
  const reaction = sumNodes(fint, bc.f, bc.cons.nodes);
  const groupReactions = bc.groups.constraints.map((g) => sumNodes(fint, bc.f, g.nodes));
  const vm = vmNodes ? vmNodes[argmax(vmNodes)] : ex.vm[ev];
  const nSteps = r.steps || [];
  const summary = { ...meshSummary(P.tm, P.meshes[0].t10, model, P.rho), elements: model.tets10.length / 10, nodes: model.n, dofs: model.N };
  const nonlinear = {
    converged: r.converged, failedAt: r.failedAt ?? null, lambda: r.lambda, Et: P.Et,
    steps: nSteps.map((s) => ({ lambda: s.lambda, iterations: s.iterations, plastic: s.plastic, residual: s.residual })), maxPlastic: ex.plasticStrain[ep],
    ...(contact ? { contact: contact.info } : {}),
  };
  return {
    kind: 'static', mesher: 'tet', summary, material: { ...mat, yield: Number.isFinite(mat.sy) ? mat.sy : P.job.material.yield }, iterations: nSteps.reduce((a, s) => a + s.iterations, 0), residual: nSteps.length ? nSteps[nSteps.length - 1].residual : 0,
    maxVm: { value: vm, at: pos(ev) }, maxVmElem: { value: vm, at: pos(ev) }, maxDisp: { value: dispN[nd], at: [model.X[3 * nd], model.X[3 * nd + 1], model.X[3 * nd + 2]] },
    minSafety: vm > 0 ? (P.job.material.yield > 0 ? P.job.material.yield / vm : Infinity) : Infinity, reaction, groupReactions, loadTotal: Array.from(bc.loadTotal || [0, 0, 0]),
    maxS1: null, minS3: null, errorPct: undefined, loadAreas: [], thermal: null, adaptive: null, vertex, plotMesh: send(ctx, pm), nonlinear, ...(calculix ? { calculix } : {}), ms: Date.now() - t0,
  };
}

/** The contact object's report as the numbers the panel and Problems read. */
function contactInfo(contact, P) {
  const rep = contact.report(), info = contact.info || {};
  let normalForce = 0, pen = 0, at0 = null;
  for (const q of rep) { normalForce += q.force; if (-q.gap > pen) { pen = -q.gap; at0 = q.at; } }
  return { info: { active: rep.length, maxPenetration: Math.max(pen, info.maxPenetration || 0), normalForce, h: P.h, at: at0, points: rep.slice(0, 2000).map((q) => ({ at: q.at, pressure: q.pressure, gap: q.gap })) }, report: rep };
}

export function nlSolve(job, ctx = { progress() {}, transfer() {} }) {
  const t0 = Date.now(), prog = progress(ctx);
  const P = prepare(job, prog), contact = P.plan ? P.plan.bind(P.model) : null;
  const r = NL.solveNonlinear(P.model, P.mats, P.elemBody, P.bc, { steps: P.steps, tol: P.tol, contact, onProgress: (l) => prog(0.4 + 0.6 * l), prec: contact ? 'ic0' : undefined });
  return resultOf(P, r, ctx, { contact: contact ? contactInfo(contact, P) : null, t0 });
}

export function ccxDeck(job) {
  const P = prepare(job);
  const text = CX.exportInp({ model: P.model, elemBody: P.elemBody, materials: P.mats, cons: P.bc.cons, f: P.bc.f, pairs: P.pairs, steps: P.steps, title: job.title || 'PartCraft study' });
  return { text, nodes: P.model.n, elements: P.model.tets10.length / 10 };
}

export function ccxRead(job, ctx = { progress() {}, transfer() {} }) {
  const t0 = Date.now(), P = prepare(job), frd = CX.parseFrd(String(job.frd || ''));
  if (frd.nodes.size !== P.model.n) throw new Error(`The results file has ${frd.nodes.size} nodes and this study's mesh has ${P.model.n}: the mesh is not the one the deck was written from. Write the deck again from this study and rerun CalculiX.`);   // i18n-ignore: nl-worker's own refusal, in words
  const u = CX.frdDisplacements(frd, P.model);
  if (!u) throw new Error('The results file has no displacements (DISP). Ask CalculiX for U in the step\'s output.');   // i18n-ignore
  const stressBlk = [...frd.blocks].reverse().find((b) => b.name === 'STRESS');
  const state = { ep: new Float64Array(0), a: new Float64Array(4 * (P.model.tets10.length / 10)) };
  // CalculiX's S gives a von Mises per node when it wrote one; else the plot shows displacement only (rows() in nlstudy-ui.js says which)
  const sig = new Float64Array(24 * (P.model.tets10.length / 10));
  const nodeVm = new Float64Array(P.model.n);
  if (stressBlk) for (const [id, v] of stressBlk.values) { const n = id - 1; if (n >= 0 && n < P.model.n && v.length >= 6) { const [a, b, c, d, e, f] = v; nodeVm[n] = Math.sqrt(0.5 * ((a - b) ** 2 + (b - c) ** 2 + (c - a) ** 2) + 3 * (d * d + e * e + f * f)); } }
  const r = { u, state, sig, steps: [], converged: true, lambda: 1, fint: new Float64Array(P.model.N) };
  return resultOf(P, r, ctx, { t0, calculix: { nodes: frd.nodes.size, stress: !!stressBlk }, vmNodes: stressBlk ? nodeVm : null });
}

addOps({ nlSolve, ccxDeck, ccxRead });
