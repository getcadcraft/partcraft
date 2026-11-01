/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nlstudy-ui.js — the Simulation panel's part of the nonlinear and contact kinds (0.8 SU.891, part_PART_3's mount of part-sim-08's
 * solvers). ws-simulation.js calls these hooks the way it calls sim-thermal-ui.js; the study data is nlstudy.js', the solve is
 * nl-worker.js' (op nlSolve), the CalculiX deck and its results are nl-worker.js' ccxDeck / ccxRead.
 *   install(ctx, { show })          once: the contact-pair item kind (side A picks through the shared picker, side B here)
 *   KINDS                           [[kind, label]] for the study type list
 *   ensure(s)                       a study turned into one of these kinds gets its blocks (nlstudy.js ensureNl)
 *   studyFields(host, K, st, set, g) · addOptions(st) · kindOfType(type) · itemKinds(st)
 *   onPick(host, ctx, hit) → true when the click went to side B of a pair
 *   op(st) → 'nlSolve' | null · statusText(r) · plotOptions(r) · field(r, plot, range) · rows(r, add) · problems(r)
 *   ccxBlock(host, K, el, st) · exportDeck(host) · importResults(host)  — File › Export / Import, and the panel's two buttons
 * Top level is DOM-free (Node imports ws-simulation.js); the page is touched only in the hooks, through `host`.
 */
import { NL_KINDS, isNl, ensureNl, nlProblems } from './nlstudy.js';
import { simJob, findFaceIndex, materialOf } from './sim.js';
import { faceRef } from './brep.js';
import * as U from './sim-ui.js';
import { t } from './i18n.js';

const NL_WORKER = ['nl-worker.js'];
let CTX = null, SHOW = null, pickB = false;

export const KINDS = NL_KINDS.map((k) => Object.defineProperty([k, ''], 1, { get: () => t('study.nl.kind.' + k), enumerable: true }));   // labels read when shown
export const isNlKind = isNl;
export const ensure = (s) => ensureNl(s);
export const op = (st) => (st && isNl(st.kind) ? 'nlSolve' : null);
export const worker = () => NL_WORKER;

export function install(ctx, { show }) {
  CTX = ctx; SHOW = show;
  U.ITEM.contacts = {
    prefix: 'p', label: () => t('study.nl.pair'), icon: (it) => (it.type === 'bonded' ? 'link' : 'arrows-angle-contract'),
    make: (id) => ({ id, type: 'frictionless', faces: [], master: [], factor: 20 }),
    editor: (g, it, set, K, host) => pairEditor(g, it, set, K, host),
    shown: (st) => st.kind === 'contact',
  };
}

export const addOptions = (st) => (st && st.kind === 'contact' ? [['contact', t('study.nl.add_pair')]] : []);
export const kindOfType = (type) => (type === 'contact' ? 'contacts' : null);
export const itemKinds = (st) => (st && st.kind === 'contact' ? ['contacts'] : []);

/** The study's own fields: load steps and the slope after yield. */
export function studyFields(host, K, st, set, g) {
  if (CTX && !CTX.picking) pickB = false;
  if (!isNl(st.kind)) return;
  const nl = st.nonlinear || { steps: 10, Et: null };
  const mat = materialOf(st.material);
  g.append(...K.field(t('study.nl.steps'), K.num(nl.steps, (v) => { if (!Number.isInteger(v)) { host.status(t('study.nl.whole_steps')); return; } set(t('study.nl.steps'), (s) => { ensureNl(s).nonlinear.steps = v; }); }, { min: 1, max: 100, data: { nlSteps: '1' } })),
    ...K.field(t('study.nl.et'), K.num(nl.Et, (v) => set(t('study.nl.et'), (s) => { ensureNl(s).nonlinear.Et = v; }), { min: 0, max: 1e7, nullable: true, data: { nlEt: '1' } })),
    host.el('p', { className: 'pc-note span' }, t(st.kind === 'contact' ? 'study.nl.note_contact' : 'study.nl.note', { Et: U.sig(nl.Et ?? mat.E / 100), y: mat.yield })));
}

function pairEditor(g, it, set, K, host) {
  const { el } = host;
  g.append(...K.field(t('study.ui.type'), K.sel([['frictionless', t('study.nl.frictionless')], ['bonded', t('study.nl.bonded')]], it.type, (v) => set(t('study.nl.pair_type'), (c) => { c.type = v; }), { nlPairType: '1' })),
    ...K.field(t('study.nl.factor'), K.num(it.factor, (v) => set(t('study.nl.factor'), (c) => { c.factor = v; }), { min: 1, max: 1e4, data: { nlFactor: '1' } })),
    el('span', { className: 'k' }, t('study.nl.side_a')), el('span', { className: 'v' }, t('study.sim.desc.faces', { n: it.faces.length })),
    el('span', { className: 'k' }, t('study.nl.side_b')), el('span', { className: 'v', dataset: { nlSideB: String(it.master.length) } }, t('study.sim.desc.faces', { n: it.master.length })),
    el('div', { className: 'pc-actions span' }, K.btn(pickB && CTX?.picking ? t('study.ui.done_picking') : t('study.nl.pick_b'), () => {
      const on = !(pickB && CTX.picking);
      pickB = on; CTX.picking = on;
      host.status(on ? t('study.nl.picking_b') : t('study.ui.picking_done'), on);
      host.renderPanel();
    }, 'pc-btn' + (pickB && CTX?.picking ? ' is-primary' : ''), { dataset: { nlPickB: '1' }, 'aria-pressed': String(pickB && !!CTX?.picking) })),
    el('p', { className: 'pc-note span' }, t('study.nl.pair_note')));
}

/** A click while picking side B of the selected pair: add or drop the face there. → true when handled. */
export function onPick(host, ctx, hit) {
  if (!pickB) return false;
  const st = U.study(host, ctx), x = U.itemOf(st, ctx.sel), rg = host.regen;
  if (!x || x.kind !== 'contacts' || !rg || !rg.faces) { pickB = false; return false; }
  if (!hit || hit.kind !== 'face' || hit.face === undefined || hit.face < 0) { host.status(t('study.ui.click_face')); return true; }
  const ref = faceRef(rg.faces[hit.face]);
  U.edit(host, ctx, t('study.nl.pick_b_undo', { item: U.itemName('contacts', x.it) }), (s) => {
    const it = U.itemOf(s, x.it.id).it;
    const k = it.master.findIndex((f) => findFaceIndex(rg.faces, f) === hit.face);
    if (k >= 0) it.master.splice(k, 1);
    else { if (it.master.length >= 64) { host.status(t('study.ui.max_faces')); return false; } it.master.push(ref); }
  });
  return true;
}

export const statusText = (r) => {
  const n = r.nonlinear;
  if (!n.converged) return t('study.nl.status_failed', { done: Math.round(100 * n.lambda), at: Math.round(100 * (n.failedAt ?? 0)) });
  return t(n.contact ? 'study.nl.status_contact' : 'study.nl.status', { vm: U.sig(r.maxVm.value), d: U.sig(r.maxDisp.value), ep: U.sig(n.maxPlastic), f: n.contact ? U.sig(n.contact.normalForce) : '', s: (r.ms / 1000).toFixed(1) });
};
export const plotOptions = (r) => (r.vertex && r.vertex.plastic ? [['plastic', t('study.nl.plot.plastic')]] : []);
export function field(r, plot, range) {
  if (plot === 'plastic' && r.vertex && r.vertex.plastic) return range(r.vertex.plastic, 'mm/mm', t('study.nl.plot.plastic'), r.vertex.u);
  if (r.calculix && !r.calculix.stress && plot !== 'disp') { let hi = 0; for (const x of r.vertex.disp) hi = Math.max(hi, x); return { values: r.vertex.disp, lo: 0, hi: hi || 1, unit: 'mm', title: t('study.ws.plot.disp'), u: r.vertex.u }; }
  return null;
}
/** Extra rows in the results table. */
export function rows(r, add) {
  if (r.calculix) { add(t('study.nl.row.ccx'), t('study.nl.row.ccx_value', { n: r.calculix.nodes.toLocaleString('en-US'), stress: r.calculix.stress ? t('study.nl.row.ccx_stress') : t('study.nl.row.ccx_no_stress') }), { nlCcx: String(r.calculix.nodes) }); return; }
  const n = r.nonlinear;
  if (!n) return;
  add(t('study.nl.row.load'), n.converged ? t('study.nl.row.load_all', { steps: n.steps.length }) : t('study.nl.row.load_part', { done: Math.round(100 * n.lambda), at: Math.round(100 * (n.failedAt ?? 0)) }), { nlConverged: String(n.converged) });
  add(t('study.nl.row.plastic'), n.maxPlastic > 0 ? U.sig(n.maxPlastic) : t('study.nl.row.elastic'), { nlPlastic: String(n.maxPlastic) });
  add(t('study.nl.row.et'), `${U.sig(n.Et)} MPa`);   // i18n-ignore: a number and its unit
  if (n.contact) {
    add(t('study.nl.row.contact'), t('study.nl.row.contact_value', { n: n.contact.active, f: U.sig(n.contact.normalForce) }), { nlContactForce: String(n.contact.normalForce) });
    add(t('study.nl.row.penetration'), t('study.nl.row.penetration_value', { pen: U.sig(n.contact.maxPenetration), pct: U.sig(100 * n.contact.maxPenetration / (n.contact.h || 1)) }), { nlPenetration: String(n.contact.maxPenetration) });
  }
}
export const problems = (r) => nlProblems(r, 'partcraft.mfg');

// ---------------------------------------------------------------- CalculiX: a deck out, results back (the person runs CalculiX)

export function ccxBlock(host, K, el, st) {
  if (!st || !(isNl(st.kind) || st.kind === 'static')) return el('div', { hidden: true });
  return el('div', { className: 'pc-block', dataset: { nlCcxBlock: '1' } }, el('p', { className: 'pc-props-sub' }, t('study.nl.ccx.heading')),
    el('div', { className: 'pc-actions' },
      K.btn(t('study.nl.ccx.export'), () => exportDeck(host), 'pc-btn', { dataset: { nlCcxExport: '1' } }),
      K.btn(t('study.nl.ccx.import'), () => importResults(host), 'pc-btn', { dataset: { nlCcxImport: '1' } })),
    el('p', { className: 'pc-note' }, t('study.nl.ccx.note')));
}

function jobFor(host) {
  const st = U.study(host, CTX);
  if (!st) { host.status(t('study.ws.start_first')); return null; }
  if (!(isNl(st.kind) || st.kind === 'static')) { host.status(t('study.nl.ccx.kinds')); return null; }
  const { job, problems: pr } = simJob(st, host.regen, { env: host.study('environment') || null });
  if (!job || pr.length) { host.status(pr[0] || t('study.ws.nothing'), true); return null; }
  if (job.mesher !== 'tet') { host.status(t('study.nl.problem.tet_only'), true); return null; }
  if (!isNl(job.kind)) { job.kind = 'nonlinear'; job.nonlinear = { steps: 1, Et: 0, tol: 1e-6 }; job.elastic = true; }   // a static study: elastic (no *PLASTIC)
  job.title = String(host.part.name || 'Part');
  return job;
}
async function run(host, opName, job) {
  const w = host.computeWorker(['tet-worker.js', ...NL_WORKER], { name: 'PartCraft CalculiX' });
  const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer);
  try { return await w.call(opName, job, { transfer: tr }); } finally { w.terminate(); }
}
export async function exportDeck(host) {
  const job = jobFor(host);
  if (!job) return;
  host.status(t('study.nl.ccx.writing'), true);
  try {
    const r = await run(host, 'ccxDeck', job);
    host.downloadBlob(U.baseName(host) + '.inp', new Blob([r.text], { type: 'text/plain' }), 'text/plain');
    host.status(t('study.nl.ccx.written', { n: r.nodes.toLocaleString('en-US'), e: r.elements.toLocaleString('en-US') }));
  } catch (e) { host.status(t('study.ws.failed', { msg: e && e.message ? e.message : String(e) }), true); }
}
export async function importResults(host) {
  const job = jobFor(host);
  if (!job) return;
  const f = await host.openText?.([{ description: 'CalculiX results (.frd)', extensions: ['.frd'] }]);   // i18n-ignore: a file type label the OS shows
  if (!f) return;
  host.status(t('study.nl.ccx.reading'), true);
  try {
    const r = await run(host, 'ccxRead', { ...job, frd: f.text });
    SHOW(host, r);
    host.status(t('study.nl.ccx.read', { n: r.calculix.nodes.toLocaleString('en-US'), d: U.sig(r.maxDisp.value) }));
  } catch (e) { host.status(t('study.ws.failed', { msg: e && e.message ? e.message : String(e) }), true); }
}
