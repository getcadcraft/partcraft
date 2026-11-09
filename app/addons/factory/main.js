/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — words are lib/factory's (words.js) through api.t; this file only wires the host. */
/**
 * main.js — the Factory floor add-on for PartCraft (0.9 D8.13, session factory-floor-09): the CAM side of the factory job queue. PartCraft's
 * Manufacture workspace announces each posted program (`cc-cam-posted`, ws-manufacture.js doPost); this panel offers it to the factory job
 * queue (the hand-over outbox of lib/factory/jobs.js in this browser's storage, read by ModelCraft's Factory floor panel) or as a job file
 * (format cadcraft-factory-job v1). It never sends or starts anything itself.
 */
import { cleanJob, jobFile, outbox } from '../../factory/jobs.js';
import { wordsOf } from '../../factory/words.js';

export function activate(api) {
  const t = wordsOf((k, v) => api.t(k, v));
  let last = null, msg = '', pane = null;
  let storage = null; try { storage = window.localStorage; } catch { storage = null; }
  const box = outbox(storage);
  const onPosted = (e) => { const d = e && e.detail; if (!d || typeof d.text !== 'string') return; last = cleanJob({ name: d.part ? d.part + ' ' + d.file : d.file, file: d.file, text: d.text, post: d.post, from: { app: 'partcraft', part: d.part } }); last.postName = String(d.postName || d.post || ''); msg = ''; render(); };
  window.addEventListener('cc-cam-posted', onPosted);
  function download(name, text) {
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
  }
  const mk = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const button = (key, fn, disabled = false) => { const b = mk('button', 'pc-btn', t(key)); b.type = 'button'; b.disabled = disabled; b.setAttribute('data-ff-act', key); b.addEventListener('click', fn); return b; };
  function render() {
    if (!pane) return;
    const wrap = mk('div', 'pc-block'); wrap.setAttribute('data-ff-part', '');
    wrap.append(mk('p', 'pc-props-sub', t('factory.part.title')), mk('p', 'pc-note', t('factory.part.note')), mk('p', 'pc-note', t('factory.safety')));
    wrap.append(mk('p', 'pc-note', last ? t('factory.part.last', { file: last.file, post: last.postName }) : t('factory.part.none')));
    const row = mk('div', 'pc-actions');
    row.append(
      button('factory.part.queue', () => { if (!last) return; if (!storage) { msg = t('factory.part.noStore'); render(); return; } const n = box.push(last); msg = n ? t('factory.part.queued', { file: last.file, n }) : t('factory.part.noStore'); render(); }, !last),
      button('factory.part.save', () => { if (last) download((last.file || 'job').replace(/\.[^.]+$/, '') + '.ccjob.json', jobFile(last)); }, !last));
    wrap.append(row, mk('p', 'pc-note', storage ? t('factory.jobs.waiting', { n: box.list().length }) : ''));
    if (msg) { const m = mk('p', 'pc-note', msg); m.setAttribute('role', 'status'); wrap.append(m); }
    pane.replaceChildren(wrap);
  }
  const spec = { id: 'factory', title: t('factory.part.title'), render: (el) => { pane = el; render(); } };
  if (api.ui.panelTab) api.ui.panelTab(spec); else api.ui.panelSection({ ...spec, side: 'right' });
  window.ccFactoryPart = { last: () => last, outbox: () => box.list() };
  api.onDeactivate(() => { window.removeEventListener('cc-cam-posted', onPosted); delete window.ccFactoryPart; });
}
