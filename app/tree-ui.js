/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tree-ui.js: partcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountTree(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import { el, swapChildren, fillDl } from './ui-util.js';
import * as V from './vec.js';
import * as P from './part.js';
import { treeValue } from './tree-value.js';
import { PARAM_FIELDS } from './params-part.js';

export function mountTree(ctx) {
  const { ST, ui, status, built, startPick, endPick, startSketchOn, editSketch, exitSketch, moveSelected, rollTo, renderAll, f3 } = ctx;

  // ---------------------------------------------------------------- tree
  function renderTree() {
    if (ST.mode === 'assembly') { ctx.renderAsmTree(); return; }
    ui.partName.textContent = ST.editPartOf ? t('app.tree.part_in_asm', { part: ST.part.name, asm: ST.asm.name }) : ST.part.name;
    const items = [];
    for (const name of ['front', 'top', 'right']) {
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node', dataset: { plane: name }, 'aria-selected': String(ST.sel?.kind === 'plane' && ST.sel.name === name),
        onclick: () => { if (ST.mode === 'sketch') return; ST.sel = { kind: 'plane', name }; ST.pick = null; ST.view.setHighlight(null); ST.view.setPlaneState(name, null); renderAll(); if (ST.pendingSketch) startSketchOn({ kind: 'base', name }); },
      }, el('i', { className: 'bi bi-square', 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, V.PLANE_NAMES[name]), el('span'))));
    }
    items.push(el('li', { role: 'none', className: 'pc-tree-sep' }));
    const built = ST.mode === 'sketch' && ST.editing ? P.indexOf(ST.part, ST.editing) + 1 : ST.mode === 'pick' && ST.editing ? P.indexOf(ST.part, ST.editing) : P.builtCount(ST.part);
    const used = new Map();
    for (const f of ST.part.features) if (typeof f.sketch === 'string') used.set(f.sketch, f.id);
    ST.part.features.forEach((f, i) => {
      if (i === built && ST.part.rollback !== null && ST.mode !== 'sketch') items.push(el('li', { role: 'none' }, el('button', { type: 'button', className: 'pc-rollbar', title: t('app.tree.rollbar_title'), onclick: () => rollTo(ST.part.features.length) }, t('app.tree.rollbar'))));
      const r = ST.regen?.results.get(f.id) || { status: 'ok' };
      const flag = r.status === 'error' ? t('app.tree.flag_error') : r.status === 'suppressed' ? t('app.tree.flag_off') : r.status === 'skipped' ? t('app.tree.flag_not_built') : r.warning ? '⚠' : f.type === 'sketch' && r.solve ? { full: '', under: '−', over: '+', empty: '' }[r.solve.status] : '';
      const cls = ['pc-node', r.status === 'error' || r.status === 'skipped' ? 'is-error' : '', r.warning ? 'is-warn' : '', f.suppressed ? 'is-off' : '', r.status === 'rolled' ? 'is-rolled' : '', f.type === 'sketch' && used.has(f.id) ? 'is-child' : ''].join(' ');
      const val = treeValue(f, f3);
      const b = el('button', {
        type: 'button', role: 'treeitem', className: cls, dataset: { id: f.id }, 'aria-selected': String(ST.sel?.kind === 'feature' && ST.sel.id === f.id),
        title: r.message || r.warning || (f.type === 'sketch' && r.solve ? sketchStateWord(r.solve) : P.FEATURE_LABELS[f.type]),
        onclick: () => { if (!window.ccState?.select([{ kind: 'feature', id: f.id }])) selectFeature(f.id); },   // 0.11 UI.25: the tree row goes through the one state
        // a double-click on the value (or on a row with nothing else to open) edits the value in the row (0.6 PU.5)
        ondblclick: (e) => { if (ctx.MAIN_NUMBER[f.type] && (e.target.closest('.pc-node-val') || (f.type !== 'sketch' && !ctx.PICKERS.has(f.type)))) editTreeValue(f.id); else if (f.type === 'sketch') editSketch(f.id); else if (ctx.PICKERS.has(f.type)) startPick(f.id); },
      }, el('i', { className: 'bi bi-' + (r.status === 'error' ? 'exclamation-triangle-fill' : ctx.ICONS[f.type]), 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, f.name),
      el('span', { className: 'pc-node-val', title: val && ctx.MAIN_NUMBER[f.type] ? t('app.tree.val_title') : null }, val), el('span', { className: 'pc-node-flag' }, flag));   // i18n-ignore: icon class names
      items.push(el('li', { role: 'none' }, b));
    });
    if (!ST.part.features.length) items.push(el('li', { role: 'none', className: 'pc-muted' }, t('app.tree.no_features')));
    swapChildren(ui.tree, items);
  }

  const sketchStateWord = (s) => ({ full: () => t('app.sketch.state_full'), under: () => t('app.sketch.state_under_title', { n: s.dof }), over: () => t('app.sketch.state_over'), empty: () => t('app.sketch.state_empty') }[s.status]?.());

  function selectFeature(id) {
    if (ST.mode === 'sketch') { if (id !== ST.editing) { exitSketch(); } else return; }
    if (ST.mode === 'pick') { if (id !== ST.editing) endPick(); else return; }
    if (ST.mode === 'drawing') ctx.leaveDrawing();
    ST.sel = { kind: 'feature', id };
    ST.view.setPlaneState(null, null);
    renderAll();
    announcePick();
  }
  // 0.8 SC.5 (part-model_PART_4): the picked feature is announced to the page (SuperCad Studio hears `cc-pick`); a pick from another panel
  // comes back through window.ccPickApply(refs). Both are inert outside Super.
  function announcePick() {
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'partcraft', ids: ST.sel && ST.sel.kind === 'feature' ? [String(ST.sel.id)] : [] } })); } catch { /* no window */ }
  }
  const pickApply = (refs) => {
    const r = (refs || []).find((x) => P.featureById(ST.part, x.id) || P.featureById(ST.part, Number(x.id)));
    if (!r) return false;
    selectFeature(P.featureById(ST.part, r.id) ? r.id : Number(r.id)); return true;
  };
  window.ccPickApply = pickApply;
  // SC.5 (sc-r5-select): the same adapter by app name (several apps share one page in Super), with a clear (the app's own Select none, in the model only)
  (window.ccPickers = window.ccPickers || {}).partcraft = { apply: pickApply, get: () => ({ ids: ST.sel && ST.sel.kind === 'feature' ? [String(ST.sel.id)] : [] }), clear: () => { if (ST.mode === 'model' && ST.sel?.kind === 'feature') ctx.modelEdit('select-none'); return true; } };

  /** Edit a feature's main value in its history row (0.6 PU.5): a box over the row's value; Enter (or leaving it) hands the
   *  text to the feature's main box in the properties panel — the same limits, =expressions and one undo step — Esc keeps
   *  the old value. */
  function editTreeValue(id) {
    const f = P.featureById(ST.part, id), main = f && ctx.MAIN_NUMBER[f.type];
    if (!main || ST.mode === 'assembly') return false;
    if (ST.sel?.kind !== 'feature' || ST.sel.id !== id || ST.mode !== 'model') selectFeature(id);
    const src = ui.props.querySelector(`[data-param-key="${id}.${main}"]`);
    const row = ui.tree.querySelector(`.pc-node[data-id="${id}"]`);
    if (!src || src.disabled || !row) { status(t('app.tree.val_none', { name: f.name })); return false; }
    const li = row.parentElement;
    const inp = el('input', { type: 'text', className: 'pc-input pc-node-edit', value: src.value, inputMode: 'decimal', autocomplete: 'off', spellcheck: false, 'aria-label': t('app.tree.val_label', { name: f.name, what: PARAM_FIELDS[f.type]?.[main]?.label || main }) });
    let done = false;
    const finish = (set) => {
      if (done) return;
      done = true;
      const v = inp.value.trim();
      inp.remove(); row.classList.remove('is-editing');
      if (set && v && v !== src.value && src.isConnected) { src.value = v; src.dispatchEvent(new Event('change', { bubbles: true })); }
      const back = () => { if (!document.activeElement || document.activeElement === document.body || !document.activeElement.isConnected) ui.tree.querySelector(`.pc-node[data-id="${id}"]`)?.focus(); };
      (ui.tree.querySelector(`.pc-node[data-id="${id}"]`) || row).focus();
      built().then(back);   // the exact kernel answers later and redraws the history: the row keeps the focus
    };
    inp.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); finish(true); } else if (e.key === 'Escape') { e.preventDefault(); finish(false); } });
    inp.addEventListener('blur', () => finish(true));
    row.classList.add('is-editing');
    li.append(inp);
    inp.focus(); inp.select();
    status(t('app.tree.val_editing', { name: f.name }), true);
    return true;
  }

  ui.tree.addEventListener('keydown', (e) => {
    const b = e.target.closest('.pc-node');
    if (!b) return;
    if (e.key === 'F2' && b.dataset.id) { e.preventDefault(); editTreeValue(b.dataset.id); return; }
    const all = [...ui.tree.querySelectorAll('.pc-node')];
    const i = all.indexOf(b);
    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { e.preventDefault(); if (b.dataset.id) { if (ST.sel?.id !== b.dataset.id) selectFeature(b.dataset.id); moveSelected(e.key === 'ArrowUp' ? -1 : 1); } return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); all[Math.max(0, Math.min(all.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)))]?.focus(); }
  });

  // ---------------------------------------------------------------- facts
  function renderFacts() {
    if (ST.mode === 'assembly') { ctx.renderAsmFacts(); return; }
    const s = ST.regen?.stats;
    const errs = ST.regen ? [...ST.regen.results.values()].filter((r) => r.status === 'error').length : 0;
    if (!s) { fillDl(ui.facts, [[t('app.facts.solid'), ST.M ? t('app.facts.none_yet') : t('app.facts.loading_kernel')], [t('app.facts.features'), ST.part.features.length], [t('app.facts.failing'), errs || '']]); return; }
    const size = s.bbox.max.map((v, i) => f3(v - s.bbox.min[i])).join(' × ');
    fillDl(ui.facts, [
      [t('app.facts.volume'), f3(s.volume) + ' mm³'], [t('app.facts.area'), f3(s.area) + ' mm²'], [t('app.facts.size'), size + ' mm'],
      [t('app.facts.through_holes'), s.bodies === 1 ? String(s.genus) : ''], [t('app.facts.bodies'), s.bodies], [t('app.facts.triangles'), s.tris.toLocaleString('en-US')],
      [t('app.facts.features'), ST.part.features.length], [t('app.facts.failing'), errs || ''],
    ]);
  }

  return { renderTree, sketchStateWord, selectFeature, announcePick, renderFacts };
}
