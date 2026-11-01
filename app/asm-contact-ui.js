/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asm-contact-ui.js — the contact study of an assembly (0.8 SU.891, session dec-su_PART_3): Assembly › Contact. A card over the stage, like Motion.
 * The model is asm-contact.js (Node-tested), the solver phys-worker.js (op contactSolve, in the compute worker; contactDeck for CalculiX).
 *
 *   createContact(ctx) → { active, picking, start(), stop(), toggle(), pick(hit, ev) → bool, keydown(ev) → bool, refresh() }
 *   contactProblemsNow() → the shared Problems for the last run
 *   ctx = { el, btn, stage, status(msg, keep), asm(), builds() → Map(pid → build), world() → Map(inst → mat4), instName(id), refSide(hit) → FaceRef | null,
 *           save(spec) (the study into the assembly file, outside undo), computeWorker(modules, opts), download(data, name, mime), fileBase(), refreshProblems() }
 * Each part brings its own supports, loads and material from its own Simulation study; here you choose the pairs: Pick side A, click faces of one
 * part, Pick side B, click faces of another. Solve runs the nonlinear solver (our own); Export CalculiX deck writes the same model for the person's ccx.
 * Shift is not needed: every click adds a face, a click on a chosen face takes it off, Esc or Done ends the picking.
 */
import * as AC from './asm-contact.js';
import { t } from './i18n.js';

const S = { result: null, parts: [], names: [] };
export const contactProblemsNow = () => (S.result ? AC.contactProblems(S.result) : []);
const f = (v, dp = 4) => String(Number((Math.abs(v) < 1e-12 ? 0 : v).toFixed(dp)));

export function createContact(ctx) {
  const { el, btn } = ctx;
  const st = { active: false, picking: null, c: null, busy: false, error: '', problems: [], deck: null };
  let card = null, uid = 0, worker = null;
  const id = () => 'pc-asc-' + (++uid);

  const load = () => { const a = ctx.asm(); st.c = a && a.contactStudy ? JSON.parse(JSON.stringify(a.contactStudy)) : AC.newContact(); };
  const save = () => { st.result = null; S.result = null; ctx.refreshProblems?.(); ctx.save?.(st.c.pairs.length ? JSON.parse(JSON.stringify(st.c)) : null); };
  function start() { if (!ctx.asm()) { ctx.status(t('asm.contact.needs_asm'), true); return; } st.active = true; st.error = ''; st.problems = []; load(); render(); }
  function stop() { st.active = false; st.picking = null; card?.remove(); card = null; }
  const toggle = () => (st.active ? stop() : start());

  /** A click on a face of a part while a side is being picked. */
  function pick(h) {
    if (!st.picking) return false;
    const p = st.c.pairs.find((x) => x.id === st.picking.pair);
    if (!p) { st.picking = null; return false; }
    if (!h || h.kind !== 'face' || !h.inst || h.face === undefined) { ctx.status(t('asm.contact.pick.face'), true); return true; }
    const side = p[st.picking.side], other = p[st.picking.side === 'a' ? 'b' : 'a'];
    if (other.inst === h.inst) { ctx.status(t('asm.contact.pick.other_part'), true); return true; }
    const ref = ctx.refSide(h);
    if (!ref) { ctx.status(t('asm.contact.pick.face'), true); return true; }
    if (side.inst && side.inst !== h.inst) { side.faces = []; }
    side.inst = h.inst;
    const k = side.faces.findIndex((x) => x.name === ref.name && Math.hypot(x.at[0] - ref.at[0], x.at[1] - ref.at[1], x.at[2] - ref.at[2]) < 1e-3);
    if (k >= 0) side.faces.splice(k, 1); else side.faces.push(ref);
    save(); render();
    return true;
  }
  function keydown(e) {
    if (!st.active) return false;
    if (e.key === 'Escape') { if (st.picking) { st.picking = null; ctx.status(''); render(); } else stop(); return true; }
    return false;
  }
  const beginPick = (pair, side) => { st.picking = { pair, side }; ctx.status(t('asm.contact.pick.status'), true); render(); };

  async function run() {
    if (st.busy) return;
    st.error = ''; S.result = null; st.result = null; st.deck = null;
    const job = AC.contactJob(ctx.asm(), ctx.builds(), ctx.world(), st.c);
    st.problems = job.problems; st.warnings = job.warnings;
    if (!job.job) { render(); return; }
    st.busy = true; ctx.status(t('asm.contact.working'), true); render();
    try {
      worker = worker || ctx.computeWorker(['phys-worker.js'], { name: 'PartCraft assembly contact' });
      const r = await worker.call('contactSolve', job.job);
      st.result = r; S.result = r; S.parts = job.parts; S.names = job.names;
      ctx.refreshProblems?.();
      ctx.status(r.converged ? t('asm.contact.done', { n: r.contact ? r.contact.points : 0 }) : t('asm.contact.not_converged'), true);
    } catch (e) {
      st.error = e && e.message ? e.message : String(e);
      worker?.terminate?.(); worker = null;
    } finally { st.busy = false; render(); }
  }
  async function deck() {
    const job = AC.contactJob(ctx.asm(), ctx.builds(), ctx.world(), st.c);
    st.problems = job.problems;
    if (!job.job) { render(); return; }
    try {
      worker = worker || ctx.computeWorker(['phys-worker.js'], { name: 'PartCraft assembly contact' });
      const d = await worker.call('contactDeck', { ...job.job, title: ctx.fileBase() });
      ctx.download(d.text, t('asm.contact.deck.file', { name: ctx.fileBase() }), 'text/plain');
      ctx.status(t('asm.contact.deck.saved', { nodes: d.nodes, elements: d.elements }));
    } catch (e) { st.error = e && e.message ? e.message : String(e); worker?.terminate?.(); worker = null; render(); }
  }

  async function readFrd() {
    const job = AC.contactJob(ctx.asm(), ctx.builds(), ctx.world(), st.c);
    st.problems = job.problems; st.warnings = job.warnings;
    if (!job.job) { render(); return; }
    try {
      const file = await ctx.openText?.(['.frd']);
      if (!file) return;
      worker = worker || ctx.computeWorker(['phys-worker.js'], { name: 'PartCraft assembly contact' });
      const r = await worker.call('contactRead', { ...job.job, frd: file.text });
      st.frd = { name: file.name, r };
      st.error = '';
      ctx.status(t('asm.contact.frd.done', { name: file.name }));
    } catch (e) { st.error = e && e.message ? e.message : String(e); st.frd = null; worker?.terminate?.(); worker = null; }
    render();
  }
  const num = (value, onchange, attrs = {}) => { const i = el('input', { type: 'number', className: 'pc-input pc-mot-num', value: f(value), step: 'any', id: id(), ...attrs }); i.addEventListener('change', () => { const v = Number(i.value); if (Number.isFinite(v)) { onchange(v); save(); } }); return i; };
  const select = (opts, value, onchange, attrs = {}) => { const s = el('select', { className: 'pc-select pc-select-sm', id: id(), ...attrs }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => { onchange(s.value); save(); render(); }); return s; };
  const labelled = (label, input) => el('label', { className: 'pc-stk-field', htmlFor: input.id }, el('span', {}, label), input);

  const sideText = (s) => (s.inst ? t('asm.contact.side', { part: ctx.instName(s.inst), n: s.faces.length }) : t('asm.contact.side_none'));
  function pairRow(p) {
    const n = p.id.replace(/\D/g, '');
    const picking = (side) => st.picking && st.picking.pair === p.id && st.picking.side === side;
    return el('div', { className: 'pc-stk-row pc-asc-pair', dataset: { ascPair: p.id } },
      el('strong', {}, t('asm.contact.pair_name', { n })),
      labelled(t('asm.contact.type'), select([['frictionless', t('asm.contact.type.frictionless')], ['bonded', t('asm.contact.type.bonded')]], p.type, (v) => { p.type = v; }, { dataset: { ascType: p.id } })),
      labelled(t('asm.contact.factor'), num(p.factor, (v) => { p.factor = Math.max(1, Math.min(1e4, v)); }, { min: 1, max: 1e4, dataset: { ascFactor: p.id } })),
      btn(t(picking('a') ? 'asm.contact.pick.done' : 'asm.contact.pick.a'), () => { if (picking('a')) { st.picking = null; ctx.status(''); render(); } else beginPick(p.id, 'a'); }, 'pc-btn pc-btn-sm', { dataset: { ascPickA: p.id } }),
      el('span', { className: 'pc-props-sub', dataset: { ascSideA: p.id } }, sideText(p.a)),
      btn(t(picking('b') ? 'asm.contact.pick.done' : 'asm.contact.pick.b'), () => { if (picking('b')) { st.picking = null; ctx.status(''); render(); } else beginPick(p.id, 'b'); }, 'pc-btn pc-btn-sm', { dataset: { ascPickB: p.id } }),
      el('span', { className: 'pc-props-sub', dataset: { ascSideB: p.id } }, sideText(p.b)),
      btn(t('asm.contact.pair.remove'), () => { AC.removePair(st.c, p.id); st.picking = null; save(); render(); }, 'pc-btn pc-btn-sm', { dataset: { ascRemove: p.id } }));
  }

  function resultNodes(r) {
    const dl = el('dl', { className: 'pc-dl pc-measure-dl', dataset: { ascResult: '1' } });
    const add = (k, v, d) => dl.append(el('dt', {}, k), el('dd', d ? { dataset: d } : {}, v));
    add(t('asm.contact.r.state'), r.converged ? t('asm.contact.r.converged', { steps: r.steps.length }) : t('asm.contact.r.failed', { at: Math.round(100 * (r.failedAt ?? 0)), done: Math.round(100 * (r.lambda ?? 0)) }), { ascConverged: String(r.converged) });
    if (r.contact) {
      add(t('asm.contact.r.force'), t('asm.contact.r.force_v', { force: f(r.contact.normalForce, 1), points: r.contact.points }), { ascForce: String(r.contact.normalForce) });
      add(t('asm.contact.r.pen'), t('asm.contact.r.pen_v', { pen: Number(r.contact.maxPenetration.toPrecision(3)), pct: f(100 * r.contact.maxPenetration / (r.summary.h || 1), 2) }));
    }
    add(t('asm.contact.r.disp'), t('asm.contact.r.disp_v', { value: f(r.maxDisp.value, 5), x: f(r.maxDisp.at[0], 1), y: f(r.maxDisp.at[1], 1), z: f(r.maxDisp.at[2], 1) }), { ascDisp: String(r.maxDisp.value) });
    add(t('asm.contact.r.vm'), t('asm.contact.r.vm_v', { value: f(r.maxVm.value, 2) }));
    if (r.maxPlastic && r.maxPlastic.value > 0) add(t('asm.contact.r.plastic'), f(r.maxPlastic.value, 6));
    add(t('asm.contact.r.parts'), S.names.join(', '));
    add(t('asm.contact.r.mesh'), t('asm.contact.r.mesh_v', { elements: r.summary.elements, nodes: r.summary.nodes, ms: r.ms }));
    return [dl];
  }

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure pc-stk pc-mot pc-asc', role: 'region', 'aria-label': t('asm.contact.title'), 'data-asm-contact': '' }); ctx.stage.append(card); }
    const asm = ctx.asm();
    const kids = [el('div', { className: 'pc-measure-head' }, el('strong', {}, t('asm.contact.title')), btn(t('app.btn.close'), () => stop(), 'pc-btn pc-btn-sm', { dataset: { ascClose: '1' } })),
      el('p', { className: 'pc-props-sub' }, t('asm.contact.intro'))];
    if (!asm || asm.instances.length < 2) { kids.push(el('p', { className: 'pc-props-sub' }, t('asm.contact.need_two'))); card.replaceChildren(...kids); return; }
    kids.push(el('div', { className: 'pc-stk-row' },
      labelled(t('asm.contact.steps'), num(st.c.steps, (v) => { st.c.steps = Math.max(1, Math.min(100, Math.round(v))); }, { min: 1, max: 100, step: 1, dataset: { ascSteps: '1' } })),
      labelled(t('asm.contact.et'), num(st.c.Et === null ? NaN : st.c.Et, (v) => { st.c.Et = v > 0 ? v : null; }, { min: 0, dataset: { ascEt: '1' }, value: st.c.Et === null ? '' : f(st.c.Et) }))));
    for (const p of st.c.pairs) kids.push(pairRow(p));
    kids.push(el('div', { className: 'pc-actions' },
      btn(t('asm.contact.pair.add'), () => { AC.addPair(st.c, 'frictionless'); save(); render(); }, 'pc-btn pc-btn-sm', { dataset: { ascAdd: '1' } }),
      btn(st.busy ? t('asm.contact.working') : t('asm.contact.run'), () => run(), 'pc-btn is-primary pc-btn-sm', { dataset: { ascRun: '1' }, disabled: st.busy }),
      btn(t('asm.contact.deck'), () => deck(), 'pc-btn pc-btn-sm', { dataset: { ascDeck: '1' } }),
      ctx.openText ? btn(t('asm.contact.frd'), () => readFrd(), 'pc-btn pc-btn-sm', { dataset: { ascFrd: '1' } }) : null));
    const inPairs = new Set(st.c.pairs.flatMap((p) => [p.a.inst, p.b.inst]));
    const idle = asm.instances.filter((i) => !inPairs.has(i.id)).map((i) => i.name);
    if (st.c.pairs.length && idle.length) kids.push(el('p', { className: 'pc-props-sub', dataset: { ascIdle: '1' } }, t('asm.contact.idle', { list: idle.join(', ') })));
    if (st.picking) kids.push(el('p', { className: 'pc-props-sub', dataset: { ascPicking: '1' } }, t('asm.contact.pick.status')));
    for (const p of st.warnings || []) kids.push(el('p', { className: 'pc-props-sub', dataset: { ascWarning: '1' } }, p));
    for (const p of st.problems) kids.push(el('p', { className: 'pc-note', role: 'alert', dataset: { ascProblem: '1' } }, p));
    if (st.error) kids.push(el('p', { className: 'pc-note', role: 'alert', dataset: { ascError: '1' } }, st.error));
    if (st.frd) kids.push(el('dl', { className: 'pc-dl pc-measure-dl', dataset: { ascFrdResult: '1' } }, el('dt', {}, t('asm.contact.frd.file')), el('dd', {}, st.frd.name),
      el('dt', {}, t('asm.contact.r.disp')), el('dd', { dataset: { ascFrdDisp: String(st.frd.r.maxDisp.value) } }, t('asm.contact.r.disp_v', { value: f(st.frd.r.maxDisp.value, 5), x: f(st.frd.r.maxDisp.at[0], 1), y: f(st.frd.r.maxDisp.at[1], 1), z: f(st.frd.r.maxDisp.at[2], 1) })),
      ...(st.frd.r.maxVm ? [el('dt', {}, t('asm.contact.r.vm')), el('dd', {}, t('asm.contact.r.vm_v', { value: f(st.frd.r.maxVm.value, 2) }))] : [])));
    if (st.result) kids.push(...resultNodes(st.result));
    kids.push(el('p', { className: 'pc-props-sub' }, t('asm.contact.note')));
    card.replaceChildren(...kids);
  }

  return { get active() { return st.active; }, get picking() { return !!st.picking; }, start, stop, toggle, pick, keydown, refresh: () => { if (st.active) render(); } };
}
