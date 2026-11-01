/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cost-ui.js — the Cost tab of the Manufacture panel (0.8 EG.76, session part_PART_2): what it costs to make this part, updating as the part
 * changes. The maths is cost.js (Node-tested); this is the tab. The process, the quantity and any rate the person changed are saved with
 * the part (part.studies.cost); the rates that were not changed are the placeholders of cost.js and the tab says so.
 *
 *   renderCost(host, box, K)   host = the workspace host (part, regen, el, setStudy, renderPanel); K = ws-manufacture's kit (field, num, sel, btn)
 */
import { estimate, readCost, DEFAULT_RATES, PROCESSES, materialOf } from './cost.js';
import { t } from './i18n.js';

const KEY = 'cost';
const money = (v, cur) => v.toFixed(2) + ' ' + cur;

/** The lines under the total, from the numbers (the estimate's own English drivers are for the assistant). */
function drivers(est) {
  const top = Object.entries(est.shares).sort((a, b) => b[1] - a[1])[0];
  const out = top ? [t('cost.driver.top', { what: t('cost.row.' + top[0]), pct: Math.round(top[1] * 100) })] : [];
  if (est.qty < 5 && est.job > 0) out.push(t('cost.driver.setup', { job: money(est.job, est.currency), qty: est.qty }));
  return out;
}

export function renderCost(host, box, K) {
  const { el } = host;
  const cur = host.part.studies?.[KEY] || { process: 'cnc', qty: 1 };
  const save = (label, fn) => {
    const s = JSON.parse(JSON.stringify(cur));
    fn(s);
    if (s.rates) { for (const k of Object.keys(s.rates)) if (s.rates[k] && typeof s.rates[k] === 'object' && !Object.keys(s.rates[k]).length) delete s.rates[k]; if (!Object.keys(s.rates).length) delete s.rates; }
    host.setStudy(KEY, readCost(s), label);
  };
  const rates = (path) => path.reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), cur.rates);
  const defaults = (path) => path.reduce((o, k) => o[k], DEFAULT_RATES);
  const setRate = (path, v) => save(t('cost.undo.rate'), (s) => { let o = (s.rates ||= {}); for (const k of path.slice(0, -1)) o = (o[k] ||= {}); o[path[path.length - 1]] = v; });
  const rateField = (label, path, extra = {}) => K.field(label, K.num(rates(path) ?? defaults(path), (v) => setRate(path, v), { min: 0, max: 1e6, ...extra }));

  const g = el('div', { className: 'pc-props', dataset: { costPanel: '1' } },
    ...K.field(t('cost.process'), K.sel(PROCESSES.map((p) => [p, t('cost.process.' + p)]), cur.process, (v) => save(t('cost.undo.process'), (s) => { s.process = v; }))),
    ...K.field(t('cost.qty'), K.num(cur.qty, (v) => save(t('cost.undo.qty'), (s) => { s.qty = Math.max(1, Math.round(v)); }), { min: 1, max: 1e6, step: 1 })));
  box.append(el('div', { className: 'pc-block' }, g));

  let est = null, err = '';
  try { est = estimate(host.part, host.regen, { process: cur.process, qty: cur.qty, rates: cur.rates }); }
  catch (e) { err = e.message + (e.next && e.next.length ? ' ' + e.next.join(' ') : ''); }

  const mat = est ? est.material : materialOf(host.part.material?.name);
  const r = [
    ...(cur.process === 'cnc'
      ? [...rateField(t('cost.rate.machine', { cur: est ? est.currency : 'USD' }), ['cnc', 'perHour']), ...rateField(t('cost.rate.setup', { cur: est ? est.currency : 'USD' }), ['cnc', 'setup'])]
      : [...rateField(t('cost.rate.machine', { cur: est ? est.currency : 'USD' }), ['print', 'perHour']), ...rateField(t('cost.rate.setup', { cur: est ? est.currency : 'USD' }), ['print', 'setup'])]),
    ...(mat ? rateField(t('cost.rate.kg', { cur: est ? est.currency : 'USD', material: mat }), ['perKg', mat]) : []),
    ...(cur.process === 'cnc' && mat ? rateField(t('cost.rate.mrr'), ['cnc', 'mrr', mat], { step: 100 }) : []),
  ];
  box.append(el('div', { className: 'pc-block pc-props', dataset: { costRates: '1' } }, el('p', { className: 'pc-props-sub' }, t('cost.rates.head')), ...r,
    el('div', { className: 'pc-actions span' }, K.btn(t('cost.rates.reset'), () => save(t('cost.undo.rate'), (s) => { delete s.rates; }), 'pc-btn pc-btn-sm', { dataset: { costReset: '1' }, disabled: !cur.rates }))));

  if (err) { box.append(el('div', { className: 'pc-block' }, el('p', { className: 'pc-note', role: 'alert', dataset: { costError: '1' } }, err))); return; }
  const dl = el('dl', { className: 'pc-dl', dataset: { costResult: '1' } });
  for (const row of est.rows) dl.append(el('dt', {}, t('cost.row.' + row.id)), el('dd', {}, money(row.amount, est.currency)));
  dl.append(el('dt', {}, el('strong', {}, t('cost.total', { qty: est.qty }))), el('dd', {}, el('strong', {}, money(est.total, est.currency))));
  if (est.qty > 1) dl.append(el('dt', {}, t('cost.job')), el('dd', {}, money(est.total * est.qty, est.currency)));
  box.append(el('div', { className: 'pc-block' }, dl,
    ...drivers(est).map((d) => el('p', { className: 'pc-props-sub' }, d)),
    el('p', { className: 'pc-note', dataset: { costNote: '1' } }, t('cost.placeholder'))));
}
