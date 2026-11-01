/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Advanced simulation add-on for PartCraft (0.8 SU.891; add-on API 1.2). A tab "Advanced sim" in the right panel that sets the part's
 * Simulation study up as a nonlinear (material that yields) or contact (separate pieces pressing on each other) study, finds the contact pairs,
 * runs it, shows the numbers, the load steps and a colour plot (display bodies beside the part), and writes / reads CalculiX files.
 *
 * No solver logic of its own: the study is PartCraft's (sim.js, nlstudy.js), the solve is nl-worker.js nlSolve on the app's compute worker (the solvers
 * nonlinear.js, contact.js, calculix.js of session part-sim-08), imported from the app's folder, never copied. Logic of the add-on is in lib/ (pure,
 * Node tests in test/). The CalculiX decks have never been run in CalculiX: the panel, the help and the listing say so.
 * Commands: advanced-sim:run, advanced-sim:deck, advanced-sim:pairs.
 */
import * as SU from './lib/setup.js';
import * as RU from './lib/run.js';
import * as RS from './lib/results.js';
import { mountPanel } from './lib/ui.js';

const KEY = 'simulation', GROUP = 'results';
// the panel's few own styles (the rest are PartCraft's pc-* classes)
const CSS = '[data-asim].asim{padding:.5rem .75rem !important;font-size:.85em;box-sizing:border-box}.asim .asim-grid{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);gap:.25rem .6rem;align-items:center;margin:.3rem 0}.asim .asim-grid .k{opacity:.75}.asim .pc-block{margin-bottom:.8rem}'
  + '.asim .asim-legend{display:flex;height:.8rem;margin:.4rem 0;border-radius:2px;overflow:hidden}.asim .asim-swatch{flex:1 1 0;min-width:.5rem}'
  + '.asim .asim-steps{width:100%;border-collapse:collapse;font-size:.8em;margin:.4rem 0}.asim .asim-steps th,.asim .asim-steps td{text-align:right;padding:.1rem .3rem;border-bottom:1px solid var(--pc-line,#8884)}'
  + '.asim .asim-list{margin:.3rem 0;padding-left:1.1rem;font-size:.85em}.asim .asim-bad{color:var(--pc-danger,#c0392b)}.asim .asim-warn{border-left:3px solid #d9a21b;padding-left:.5rem}'
  + '.asim .asim-pair{border-top:1px solid var(--pc-line,#8884);padding-top:.3rem;margin-top:.3rem}.asim .asim-pair-name{font-size:.8em;word-break:break-all;margin:.2rem 0}';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const S = { busy: false, msg: '', result: null, problems: [], found: null, gap: SU.GAP_DEFAULT, field: 'vm', legend: null, study: null };
  let pane = null;
  const tell = (m) => { S.msg = m; try { api.status(m); } catch { /* no status line */ } render(); };
  const regen = () => api.study.regen();
  const study = () => api.study.get(KEY);
  const src = (() => { try { return api.problems && typeof api.problems.source === 'function' ? api.problems.source({ id: 'nl', kind: 'check', label: t('name') }) : null; } catch { return null; } })();
  const render = () => { if (!pane) return; S.study = study(); try { mountPanel(pane, app); } catch (e) { api.log('panel failed', e); /* i18n-ignore */ pane.textContent = String((e && e.message) || e); } };
  const set = (st, label) => { api.study.set(KEY, st, label); S.result = null; S.legend = null; render(); };
  const guard = (fn) => { try { return fn(); } catch (e) { tell(String((e && e.message) || e)); return null; } };
  const download = (name, text, mime = 'text/plain') => {
    const d = pane?.ownerDocument || (typeof document !== 'undefined' ? document : null);
    if (!d) return;
    const a = d.createElement('a');
    a.download = name; a.href = URL.createObjectURL(new Blob([text], { type: mime }));
    d.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  };
  const pickText = (accept) => new Promise((resolve) => {
    const d = pane.ownerDocument, i = d.createElement('input');
    i.type = 'file'; i.accept = accept; i.hidden = true;
    i.addEventListener('change', async () => { const f = i.files && i.files[0]; i.remove(); resolve(f ? await f.text() : null); });
    i.addEventListener('cancel', () => { i.remove(); resolve(null); });
    d.body.append(i); i.click();
  });
  const baseName = () => (String(api.part.get()?.name || 'part').replace(/[^A-Za-z0-9._ -]+/g, '_').trim().slice(0, 60) || 'part');
  const words = (p) => ({ 'no-study': t('why.no_study'), 'not-nl': t('why.not_nl'), 'tet-only': t('why.tet_only'), nothing: t('why.nothing') }[p] || p);
  /** The job of the part's study now, or null with S.problems set. */
  const job = () => {
    const r = RU.jobOf(study(), regen(), { env: api.study.get('environment'), title: api.part.get()?.name });
    S.problems = r.problems.map(words);
    if (!r.job) { tell(S.problems[0] || t('why.nothing')); return null; }
    return r.job;
  };
  const withWorker = async (fn) => {
    const w = api.study.worker(RU.WORKER_MODULES, { name: t('name') });
    try { return await fn(w); } finally { try { w.terminate(); } catch { /* gone */ } }
  };
  const busy = async (label, fn) => {
    if (S.busy) return null;
    S.busy = true; S.msg = label; render();
    try { return await fn(); } catch (e) { api.log('advanced-sim failed', e); /* i18n-ignore */ S.msg = t('msg.failed', { msg: String((e && e.message) || e) }); return null; } finally { S.busy = false; render(); }
  };
  const ownProblems = (r) => RS.problems(r).map((p) => ({ ...p, text: p.code === 'sim.nl.newton' ? t('p.newton', p.msg.vars) : t('p.penetration', p.msg.vars) }));

  const app = {
    t, state: () => S,
    info: () => SU.describe(S.study, regen()),
    summary: () => RS.summary(S.result),
    fields: () => RS.fieldsOf(S.result),
    setKind: (kind) => guard(() => { const cur = study(); set(SU.asKind(cur, kind), t('undo.kind', { kind: t('kind.' + kind) })); tell(t(cur ? 'msg.kind' : 'msg.kind_new', { kind: t('kind.' + kind) })); }),
    setNl: (patch) => guard(() => {
      if (patch.steps !== undefined && !(Number.isInteger(patch.steps) && patch.steps >= 1 && patch.steps <= 100)) { tell(t('msg.steps')); return; }
      const st = study(); set(SU.asKind(st, st.kind, patch), t('undo.nl'));
    }),
    setGap: (v) => { if (v !== null && v >= 0 && v <= 50) S.gap = v; render(); },
    findPairs() {
      const rg = regen();
      if (!rg) { tell(t('why.nothing')); return []; }
      S.found = SU.findPairs(rg, { gap: S.gap }).map((p) => ({ ...p, aName: rg.faces[p.a].name, bName: rg.faces[p.b].name }));
      tell(S.found.length ? t('msg.found', { n: S.found.length }) : t('msg.found_none'));
      return S.found;
    },
    addPairs: () => guard(() => {
      if (!S.found || !S.found.length) return;
      const r = SU.withPairs(study(), regen(), S.found);
      S.found = null;
      set(r.study, t('undo.pairs')); tell(t('msg.added', { n: r.added }));
    }),
    editPair: (id, patch) => guard(() => { if (patch.factor !== undefined && !(patch.factor >= 1 && patch.factor <= 1e4)) { tell(t('msg.factor')); return; } set(SU.editPair(study(), id, patch), t('undo.pair')); }),
    dropPair: (id) => guard(() => set(SU.dropPair(study(), id), t('undo.pair_drop'))),
    run: () => busy(t('run.busy'), async () => {
      const j = job(); if (!j) return null;
      const r = await withWorker((w) => RU.solve(w, j));
      S.result = r; S.legend = null;
      S.field = RS.fieldsOf(r).includes(S.field) ? S.field : 'vm';
      try { src?.set(ownProblems(r)); } catch (e) { api.log('problems', e); }
      const n = r.nonlinear;
      S.msg = n && !n.converged ? t('msg.run_failed', { at: Math.round(100 * (n.failedAt ?? 0)) }) : t('msg.run_done', { d: +r.maxDisp.value.toPrecision(4), s: +r.maxVm.value.toPrecision(4) });
      try { api.status(S.msg); } catch { /* no status line */ }
      return r;
    }),
    deck: () => busy(t('ccx.writing'), async () => {
      const j = job(); if (!j) return null;
      const r = await withWorker((w) => RU.deck(w, j));
      const head = t('ccx.deck_head').split('\n').map((l) => '** ' + l).join('\n') + '\n';   // CalculiX reads lines starting ** as comments
      download(baseName() + '.inp', head + r.text);
      S.msg = t('ccx.written', { n: r.nodes, e: r.elements });
      return r;
    }),
    frd: () => busy(t('ccx.reading'), async () => {
      const j = job(); if (!j) return null;
      const text = await pickText('.frd');
      if (!text) { S.msg = ''; return null; }
      const r = await withWorker((w) => RU.readFrd(w, j, text));
      S.result = r; S.legend = null; S.field = 'disp';
      S.msg = t('ccx.read', { n: r.calculix.nodes, d: +r.maxDisp.value.toPrecision(4) });
      return r;
    }),
    setField: (f) => { S.field = f; render(); },
    bandsShown: () => { try { return (api.model.bodies() || []).some((g) => g.group === GROUP); } catch { return false; } },
    showBands: () => guard(() => {
      const b = RS.bands(S.result, S.field);
      if (!b || !b.bodies.length) { tell(t('plot.none')); return 0; }
      if (b.triangles > 60000) { tell(t('plot.too_big', { n: b.triangles })); return 0; }
      const n = api.model.addBodies(GROUP, b.bodies, { name: t('plot.group', { field: t('plot.' + S.field) }), label: t('undo.plot') });
      S.legend = { bands: b.legend, lo: b.lo, hi: b.hi, scale: b.scale, field: S.field };
      tell(t('plot.shown', { n, scale: b.scale }));
      return n;
    }),
    clearBands: () => guard(() => { const ok = api.model.removeBodies(GROUP); S.legend = null; tell(ok ? t('plot.removed') : t('plot.none_shown')); return ok; }),
  };

  if (typeof document !== 'undefined' && document.head) {
    const style = document.createElement('style'); style.setAttribute('data-asim-style', ''); style.textContent = CSS; document.head.append(style);
    api.onDeactivate(() => style.remove());
  }
  pane = api.ui.panelTab({ id: 'study', title: t('tab'), render: (el) => { pane = el; render(); } });
  api.part.onChange(() => { S.found = null; render(); });
  api.commands.add('run', () => app.run(), { label: t('cmd.run') });
  api.commands.add('deck', () => app.deck(), { label: t('cmd.deck') });
  api.commands.add('pairs', () => { app.setKind('contact'); app.findPairs(); return app.addPairs(); }, { label: t('cmd.pairs') });
  render();
  // the deactivate function (the Problems source and the tab go by themselves); `.app` is what the Node tests drive
  return Object.assign(() => { S.result = null; }, { app });
}
