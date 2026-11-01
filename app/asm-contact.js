/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asm-contact.js — a contact study between the parts of an assembly (0.8 SU.891; owner 2026-10-29: "contact study stored in the assembly file";
 * session dec-su_PART_3). DOM-free. The solver is phys-worker.js (op contactSolve; contactDeck writes the CalculiX .inp), which meshes each part
 * in its own frame and moves it to where the assembly put it. This file reads and checks the study, and turns the assembly into that job.
 *
 *   asm.contactStudy = { steps 1–100, Et MPa | null (slope after yield; null = 1 % of E), tol, pairs: [{ id 'p<n>', type 'frictionless' | 'bonded',
 *                        a: { inst, faces: [FaceRef] }, b: { inst, faces: [FaceRef] }, factor 1–1e4 }] }
 *   optional, no version change (an older reader leaves it out). A FaceRef is { name, at } — the same reference a part's own study keeps (sim.js).
 * Each part brings its own supports, loads and material from ITS Simulation study (part.studies.simulation: a fixed face and a force); the
 * assembly adds only the pairs. A part with no pair is not in the solve (the card says so). Gravity is not used (apply the weight as a force).
 *
 *   readContact(raw, instIds) → clean copy | null   (untrusted file)         newContact()
 *   addPair(c, type) / removePair(c, id)                                     pairFaces(build, refs) → face indices | null when one is gone
 *   contactJob(asm, builds, world, c) → { job | null, problems: [text] (stop the solve), warnings: [text], parts: [inst id], names: [name] }
 *   contactProblems(result, src) → the shared Problems (rule 29), the same two as a part's nonlinear study
 */
import { t } from './i18n.js';
import { readSimStudy, simJob, findFaceIndex, materialOf } from './sim.js';
import { nlProblems } from './nlstudy.js';
export { newContact, readContact, addPair, removePair } from './asm-contact-read.js';

/** Face references → indices into a build's faces; null when one no longer exists. */
export function pairFaces(build, refs) {
  if (!build || !build.faces) return null;
  const idx = refs.map((r) => findFaceIndex(build.faces, r));
  return idx.some((i) => i < 0) ? null : idx;
}

/** The assembly + its study → the job contactSolve / contactDeck read. Problems are words for the card; a job comes only when none stops the solve. */
export function contactJob(asm, builds, world, c) {
  const problems = [], warnings = [], none = (extra = {}) => ({ job: null, problems, warnings, parts: [], names: [], ...extra });
  if (!asm || !c || !c.pairs || !c.pairs.length) return none({ problems: [t('asm.contact.p.no_pair')] });
  const inst = (id) => asm.instances.find((i) => i.id === id);
  const used = [];
  for (const p of c.pairs) {
    for (const s of [p.a, p.b]) if (s.inst && !used.includes(s.inst)) used.push(s.inst);
    const label = t('asm.contact.pair_name', { n: p.id.replace(/\D/g, '') });
    if (!p.a.inst || !p.b.inst || !p.a.faces.length || !p.b.faces.length) problems.push(t('asm.contact.p.sides', { name: label }));
    else if (p.a.inst === p.b.inst) problems.push(t('asm.contact.p.same', { name: label }));
  }
  if (used.length < 2) problems.push(t('asm.contact.p.two_parts'));
  if (problems.length) return none();
  const parts = [], names = [], jobs = [];
  for (const id of used) {
    const it = inst(id), pid = it && it.part, part = pid && asm.parts[pid] && asm.parts[pid].part, name = it ? it.name : id;
    const build = builds.get(pid), m = world && world.get(id);
    if (!part || !build) { problems.push(t('asm.contact.p.not_built', { name })); continue; }
    if (!m) { problems.push(t('asm.contact.p.not_placed', { name })); continue; }
    const raw = part.studies && part.studies.simulation;
    let st;
    try { st = raw ? readSimStudy(raw) : null; } catch (e) { problems.push(t('asm.contact.p.bad_study', { name, why: e.message })); continue; }
    if (!st) { problems.push(t('asm.contact.p.no_study', { name })); continue; }
    const r = simJob({ ...st, kind: 'static', mesher: 'tet', adaptive: null, contacts: [], nonlinear: undefined }, build);
    if (!r.job) { problems.push(t('asm.contact.p.no_job', { name, why: r.problems.join(' ') })); continue; }
    // a part of an assembly needs neither a support nor a load of its own: the study as a whole needs one support (checked below)
    const skip = new Set([t('study.sim.add_constraint'), t('study.sim.add_load')]);
    problems.push(...r.problems.filter((x) => !skip.has(x)).map((x) => name + ': ' + x));
    const mat = materialOf(st.material);
    jobs.push({ ...r.job, material: { ...r.job.material, ...(c.Et !== null && c.Et !== undefined ? { Et: c.Et } : { Et: mat.E / 100 }) }, place: Array.from(m) });
    parts.push(id); names.push(name);
  }
  if (problems.length) return none({ parts, names });
  const idx = (s) => parts.indexOf(s);
  const pairs = [];
  for (const p of c.pairs) {
    const label = t('asm.contact.pair_name', { n: p.id.replace(/\D/g, '') });
    const A = pairFaces(builds.get(asm.instances.find((i) => i.id === p.a.inst).part), p.a.faces), B = pairFaces(builds.get(asm.instances.find((i) => i.id === p.b.inst).part), p.b.faces);
    if (!A || !B) { problems.push(t('study.sim.faces_gone', { items: label })); continue; }
    pairs.push({ type: p.type, slave: { part: idx(p.a.inst), faces: A }, master: { part: idx(p.b.inst), faces: B }, factor: p.factor });
  }
  if (problems.length) return none({ parts, names });
  const hasSupport = jobs.some((j) => j.bcs && j.bcs.constraints && j.bcs.constraints.length);
  if (!hasSupport) { problems.push(t('asm.contact.p.no_support')); return none({ parts, names }); }
  // a part nothing holds (no support of its own, no bonded pair) floats in frictionless contact: say so, but let the solve try
  parts.forEach((id, i) => {
    const held = (jobs[i].bcs && jobs[i].bcs.constraints && jobs[i].bcs.constraints.length) || c.pairs.some((p) => p.type === 'bonded' && (p.a.inst === id || p.b.inst === id));
    if (!held) warnings.push(t('asm.contact.p.floating', { name: names[i] }));
  });
  return { job: { parts: jobs, pairs, nonlinear: { steps: c.steps, tol: c.tol }, names }, problems: [], warnings, parts, names };
}

/** The shared Problems for the last result (same two as a part's nonlinear study; the id says it is the assembly's). */
export function contactProblems(r, src = 'partcraft.asm.contact') {
  if (!r) return [];
  const rr = r.nonlinear ? r : { nonlinear: { converged: r.converged, failedAt: r.failedAt, lambda: r.lambda, contact: r.contact ? { h: r.summary && r.summary.h, maxPenetration: r.contact.maxPenetration, at: r.contact.report && r.contact.report[0] && r.contact.report[0].at } : null } };
  return nlProblems(rr, src);
}
