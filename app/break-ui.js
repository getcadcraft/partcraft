/* SPDX-License-Identifier: Apache-2.0 */
/**
 * break-ui.js — the Break it block of the Simulation panel (0.8 round 3, EG.31): one button, "What breaks first?", runs break-part.js on the
 * part's own Simulation study and lists what it found, worst first: the load factor to first yield and to buckling, and where the stress peaks
 * (a marker on the part). Findings also go to the shared Problems list (break-part.js breakProblemsNow, fed by partcraft.js's one problems feed).
 *
 *   block(host, K, el, st, solver) → the panel block   solver(job) → Promise<result> (ws-simulation.js passes its pooled workers)
 *   clear(host)                    remove the marker (the workspace was left, or the part changed)
 */
import { breakPart, setBreak } from './break-part.js';
import { sig } from './sim-ui.js';
import { t } from './i18n.js';

const S = { run: null, mesh: null, busy: false, error: null };
const at = (p) => p.map((v) => +v.toFixed(1)).join(', ');

export function clear(host) { host.view.setOverlay('simulation-break', null); }
function mark(host, p) {
  clear(host);
  if (!p) return;
  const { THREE } = host, bb = host.regen.stats.bbox, r = 0.025 * Math.hypot(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]);
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 12), new THREE.MeshBasicMaterial({ color: 0xd62d20, depthTest: false, transparent: true, opacity: 0.9 }));
  m.position.set(p[0], p[1], p[2]); m.renderOrder = 20; m.userData.breakMarker = true;
  host.view.setOverlay('simulation-break', m);
}

function words(f) {
  const fail = f.failing ? '.fail' : '';
  if (f.kind === 'yield') return t('breakit.row.yield' + fail, { f: sig(f.factor), vm: f.what.vm == null ? '–' : sig(f.what.vm), yield: f.what.yield == null ? '–' : sig(f.what.yield), at: f.where ? at(f.where.at) : '–' });
  return t('breakit.row.buckling' + fail, { f: sig(f.factor) });
}

async function run(host, st, solver) {
  S.busy = true; S.error = null; host.renderPanel();
  host.status(t('breakit.running'), true);
  try {
    const r = await breakPart({ st, regen: host.regen, env: host.study('environment') || null, solve: solver });
    if (!r.ok) { S.error = r.problems[0] || t('study.ws.nothing'); S.run = null; setBreak(null); }
    else { S.run = r; S.mesh = host.regen.mesh; setBreak(r); mark(host, r.yieldAt); host.status(t('breakit.done', { what: t('breakit.what.' + r.first.kind) })); }
  } catch (e) { S.error = e && e.message ? e.message : String(e); S.run = null; setBreak(null); host.status(t('breakit.failed', { msg: S.error }), true); }
  S.busy = false;
  host.refreshProblems?.();
  host.renderPanel();
}

export function block(host, K, el, st, solver) {
  const b = el('div', { className: 'pc-block', dataset: { simBreak: '1' } }, el('p', { className: 'pc-props-sub' }, t('breakit.title')), el('p', { className: 'pc-note' }, t('breakit.note')));
  b.append(el('div', { className: 'pc-actions' }, K.btn(t('breakit.run'), () => run(host, st, solver), 'pc-btn', { disabled: S.busy, dataset: { simBreakRun: '1' } })));
  if (S.busy) b.append(el('p', { className: 'pc-note', role: 'status' }, t('breakit.running')));
  if (S.error) b.append(el('div', { className: 'pc-msg is-error' }, el('p', {}, S.error)));
  if (S.run && S.mesh !== host.regen?.mesh) { b.append(el('div', { className: 'pc-msg' }, el('p', {}, t('breakit.stale')))); clear(host); }
  else if (S.run) {
    const dl = el('dl', { className: 'pc-dl', dataset: { simBreakList: '1' } });
    S.run.findings.forEach((f, i) => dl.append(el('dt', {}, (i === 0 ? t('breakit.first') + ' · ' : '') + t('breakit.what.' + f.kind)), el('dd', { dataset: { simBreakRow: f.kind, simBreakFactor: String(f.factor), simBreakFailing: f.failing ? '1' : '0' } }, words(f))));
    b.append(dl);
    for (const n of S.run.notes) b.append(el('p', { className: 'pc-note' }, n));
    b.append(el('p', { className: 'pc-note' }, t('breakit.method')));
  }
  return b;
}
