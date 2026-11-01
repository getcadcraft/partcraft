/* SPDX-License-Identifier: Apache-2.0 */
/**
 * study-ui.js — the Design study block of the Simulation panel (0.8 EG.33). The study is saved in the part (`studies.design`, read by
 * study/study.js readStudy); the results are kept for the session. Variants come from the part's configurations or from ranges of its
 * driving parameters; each is rebuilt and solved by study-run.js; the trade-off chart and the table take a pick, and "Use this variant"
 * applies it to the part (one undo step).
 */
import { readStudy, feasible, paretoFront, tradeoff, chartSvg, studyProblems, expandVariants, pick } from './study/study.js';
import { runPartStudy, variantOf, METRICS } from './study-run.js';
import * as CF from './configs.js';
import * as PP from './params-part.js';
import { t } from './i18n.js';

export const SRC = 'partcraft.study';
const KIND_METRICS = { static: ['mass', 'maxDisp', 'maxVm', 'minSafety'], modal: ['mass', 'freq1'], thermal: ['mass', 'maxT'], buckling: ['mass', 'bucklingFactor'] };
const NUM = /^-?\d+(\.\d+)?(e-?\d+)?$/i;
const S = { run: null, busy: false, done: 0, total: 0, cancel: false };
/** What Problems reads: the study and its last run. */
export const lastRun = () => (S.run ? { study: S.run.study, result: S.run.result } : null);
/** A metric's word key: the metric names are camelCase (maxVm), language keys are lower case (study.dz.m.max_vm). */
const metricKey = (k) => String(k).replace(/[A-Z]/g, (c) => '_' + c.toLowerCase());
export const studyProblemsNow = () => (S.run ? studyProblems(S.run.study, S.run.result, SRC) : []);

const drivingOf = (part) => ((part.params && part.params.vars) || []).filter((v) => NUM.test(String(v.expr).trim())).map((v) => ({ name: v.name, value: Number(v.expr) }));
const metricsFor = (kind, old) => (KIND_METRICS[kind] || ['mass']).map((k) => ({ key: k, goal: METRICS[k].goal, unit: METRICS[k].unit, ...(old && old[k] !== undefined ? { limit: old[k] } : {}) }));
const keyOf = (v) => v.set.$config !== undefined ? v.set.$config : v.id;

/** The saved study, or a fresh one from what the part has (configurations first, else its driving parameters). */
function current(host, sim) {
  const saved = host.study('design');
  const limits = {};
  if (saved) for (const m of saved.metrics) if (m.limit !== undefined) limits[m.key] = m.limit;
  const kind = (sim && sim.kind) || 'static';
  if (saved) return { ...saved, metrics: metricsFor(kind, limits) };
  const part = host.part, rows = (part.configs && part.configs.rows) || [];
  const source = rows.length ? { kind: 'configs', names: rows.map((r) => r.name) }
    : { kind: 'parameters', params: drivingOf(part).slice(0, 2).map((p) => ({ name: p.name, from: p.value, to: p.value * 2, steps: 3 })) };
  return { v: 1, title: '', source: source.kind === 'parameters' && !source.params.length ? { kind: 'list', variants: [{ label: 'V1', set: {} }] } : source, metrics: metricsFor(kind), picked: null };
}

export function block(host, K, el, sim, solveFor) {
  const part = host.part, st = current(host, sim);
  const save = (next, label) => { try { host.setStudy('design', readStudy(next), label || t('study.dz.undo')); } catch (e) { host.status(e.message, true); } };
  const b = el('div', { className: 'pc-block', dataset: { simDesign: '1' } }, el('p', { className: 'pc-props-sub' }, t('study.dz.title')), el('p', { className: 'pc-note' }, t('study.dz.intro')));
  const rows = (part.configs && part.configs.rows) || [], drv = drivingOf(part);
  b.append(...K.field(t('study.dz.source'), K.sel([['configs', t('study.dz.src_configs', { n: rows.length })], ['parameters', t('study.dz.src_params')]], st.source.kind === 'configs' ? 'configs' : 'parameters',
    (v) => save({ ...st, source: v === 'configs' ? { kind: 'configs', names: rows.map((r) => r.name) } : { kind: 'parameters', params: drv.slice(0, 2).map((p) => ({ name: p.name, from: p.value, to: p.value * 2, steps: 3 })) }, picked: null }), { simDzSource: '1' })));
  if (st.source.kind === 'configs' && !rows.length) b.append(el('p', { className: 'pc-note' }, t('study.dz.no_configs')));
  if (st.source.kind === 'parameters') {
    if (!drv.length) b.append(el('p', { className: 'pc-note' }, t('study.dz.no_params')));
    st.source.params.forEach((p, i) => {
      const upd = (patch) => save({ ...st, source: { ...st.source, params: st.source.params.map((q, j) => (j === i ? { ...q, ...patch } : q)) }, picked: null });
      b.append(el('div', { className: 'pc-props' }, ...K.field(t('study.dz.param'), K.sel(drv.map((d) => [d.name, d.name]), p.name, (v) => upd({ name: v }), { simDzParam: String(i) })),
        ...K.field(t('study.dz.from'), K.num(p.from, (v) => upd({ from: v }), { data: { simDzFrom: String(i) } })), ...K.field(t('study.dz.to'), K.num(p.to, (v) => upd({ to: v }), { data: { simDzTo: String(i) } })),
        ...K.field(t('study.dz.steps'), K.num(p.steps, (v) => upd({ steps: Math.round(v) }), { min: 1, max: 200, data: { simDzSteps: String(i) } }))));
    });
  }
  for (const m of st.metrics) {
    b.append(...K.field(t('study.dz.limit', { what: t('study.dz.m.' + metricKey(m.key)), unit: m.unit }), K.num(m.limit === undefined ? null : m.limit,
      (v) => save({ ...st, metrics: st.metrics.map((x) => { if (x.key !== m.key) return x; const { limit, ...rest } = x; return v === null ? rest : { ...rest, limit: v }; }) }), { nullable: true, data: { simDzLimit: m.key } })));
  }
  let n = 0; try { n = expandVariants(readStudy(st)).length; } catch (e) { b.append(el('p', { className: 'pc-msg is-error' }, e.message)); }
  const solve = solveFor();
  b.append(el('div', { className: 'pc-actions' },
    K.btn(t('study.dz.run', { n }), () => run(host, st, sim, solve), 'pc-btn is-primary', { disabled: S.busy || !n || !host.buildPart, dataset: { simDzRun: '1' } }),
    K.btn(t('study.ws.stop'), () => { S.cancel = true; }, 'pc-btn', { disabled: !S.busy, dataset: { simDzStop: '1' } })));
  if (S.busy) b.append(el('p', { className: 'pc-note', role: 'status', dataset: { simDzProgress: '1' } }, t('study.dz.progress', { done: S.done, total: S.total })));
  if (S.run) results(host, b, K, el, st);
  return b;
}

async function run(host, st, sim, solve) {
  if (S.busy) return;
  let study; try { study = readStudy(st); } catch (e) { host.status(e.message, true); return; }
  S.busy = true; S.cancel = false; S.done = 0; S.total = expandVariants(study).length; host.renderPanel();
  host.status(t('study.dz.running'), true);
  try {
    const result = await runPartStudy({ part: host.part, sim, env: host.study('environment') || null, study, buildPart: (p) => host.buildPart(p), solve, concurrency: 2,
      onProgress: ({ done }) => { S.done = done; host.renderPanel(); }, cancelled: () => S.cancel });
    S.run = { study, result, units: Object.fromEntries(study.metrics.map((m) => [m.key, m.unit])) };
    host.status(t('study.dz.done', { n: result.rows.length, bad: result.failed }));
  } catch (e) { host.status(t('study.ws.failed', { msg: e.message }), true); }
  S.busy = false; host.renderPanel(); host.refreshProblems && host.refreshProblems();
}

const fmt = (x) => (typeof x === 'number' ? +x.toPrecision(4) : '');
function results(host, b, K, el, st) {
  const { study, result } = S.run, rows = result.rows, front = new Set(paretoFront(study, rows).map((r) => r.id));
  const xk = study.metrics[0].key, yk = (study.metrics[1] || study.metrics[0]).key;
  const head = el('tr', {}, el('th', {}, t('study.dz.col_variant')), ...study.metrics.map((m) => el('th', {}, t('study.dz.m.' + metricKey(m.key)) + (m.unit ? ' (' + m.unit + ')' : ''))), el('th', {}, t('study.dz.col_state')), el('th', {}));
  const body = rows.map((r) => el('tr', { dataset: { simDzRow: r.id }, className: study.picked === r.id ? 'is-picked' : '' }, el('td', {}, r.label),
    ...study.metrics.map((m) => el('td', {}, r.values ? String(fmt(r.values[m.key])) : '')),
    el('td', {}, r.error !== undefined ? t('study.dz.s_failed') + ': ' + r.error : feasible(study, r) ? (front.has(r.id) ? t('study.dz.s_front') : t('study.dz.s_ok')) : t('study.dz.s_over')),
    el('td', {}, K.btn(study.picked === r.id ? t('study.dz.picked') : t('study.dz.pick'), () => { host.setStudy('design', readStudy(pick({ ...st }, r.id)), t('study.dz.undo_pick')); S.run.study = pick(study, r.id); host.renderPanel(); }, 'pc-btn', { dataset: { simDzPick: r.id } }))));
  b.append(el('div', { className: 'pc-scroll' }, el('table', { className: 'pc-table', dataset: { simDzTable: '1' } }, el('thead', {}, head), el('tbody', {}, ...body))));
  if (rows.some((r) => r.values)) {
    const wrap = el('div', { className: 'pc-chart', dataset: { simDzChart: '1' } });
    wrap.innerHTML = chartSvg(tradeoff(study, rows, xk, yk), { picked: study.picked, labels: { front: t('study.dz.s_front'), ok: t('study.dz.s_ok'), over: t('study.dz.s_over') } });   // our own escaped SVG string (study.js), no user HTML
    b.append(wrap);
  }
  const pk = study.picked && rows.find((r) => r.id === study.picked);
  if (pk) b.append(el('div', { className: 'pc-actions' }, K.btn(t('study.dz.use', { name: pk.label }), () => use(host, study, pk), 'pc-btn is-primary', { dataset: { simDzUse: '1' } })));
}

/** Put the picked variant into the part: a configuration becomes the active one, parameter values are written. One undo step. */
function use(host, study, row) {
  const v = expandVariants(study).find((x) => x.id === row.id);
  if (!v) return;
  const r = variantOf(host.part, v);
  if (r.errors.length) { host.status(r.errors[0], true); return; }
  host.commit(t('study.dz.undo_use'), () => {
    const part = host.part;
    if (v.set.$config !== undefined) { const cfg = part.configs.rows.find((x) => x.name === v.set.$config); CF.applyRow(part.params, cfg); part.configs = { ...part.configs, active: cfg.name }; }
    else CF.applyRow(part.params, { name: v.id, values: v.set });
    PP.applyPartParams(part);
  });
}
