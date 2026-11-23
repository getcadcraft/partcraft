/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-props-ui.js: props-ui.js's 2 bindings for this topic, moved out of mountProps() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSketchProps(ctx) is called once by mountProps(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables mountProps() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as S from './sketch.js';
import { el } from './ui-util.js';

export function mountSketchProps(mc) {
  const { numInput, status, renderProps, commit, built, editingFeature, describeC, tokens, editor, constraintList, numericEntry, exitSketch, entityName, ctx } = mc;

  function sketchDimsBlock(sf, title = t('app.dims.driving')) {
    const dims = sf.sketch.constraints.filter((c) => S.CONSTRAINTS[c.type].dim);
    if (!dims.length) return null;
    const rows = dims.map((c) => {
      const label = S.CONSTRAINTS[c.type].label + (c.type === 'angle' ? ' (°)' : '');
      const i = numInput(c.value, (v) => {
        if ((c.type === 'radius' || c.type === 'diameter') && v <= 0) { status(t('app.dims.radius_positive')); renderProps(); return; }
        if (c.type === 'angle' && v > 180) { status(t('app.dims.angle_range')); renderProps(); return; }
        commit(t('app.undo.change_dimension'), () => { const k = sf.sketch.constraints.find((q) => q.id === c.id); if (k) k.value = v; });
        built().then(() => { const r = ctx.regen.results.get(sf.id); if (r?.status === 'error') status(t('app.feature.error', { name: sf.name, error: r.message })); });
      }, { min: 0, key: sf.id + '.' + c.id });
      i.setAttribute('aria-label', label + ' ' + c.id);
      return el('div', { className: 'pc-dimrow' }, el('label', { htmlFor: i.id }, label), i);
    });
    return el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.dims.title', { title, name: sf.name })), el('div', { className: 'pc-checks' }, ...rows));
  }

  // ---- sketch panel
  function sketchProps() {
    const f = editingFeature();
    if (!f) return [];
    const sk = f.sketch;
    const out = [];
    const s = ctx.lastSolve;
    if (s) {
      const bad = [...new Set([...s.conflicts, ...s.redundant])];
      const text = s.status === 'over' ? t(s.conflicts.length ? 'app.sketch.msg_over_conflict' : 'app.sketch.msg_over_redundant', { list: bad.map((id) => describeC(sk, id)).join(', ') })
        : s.status === 'full' ? t('app.sketch.msg_full') : s.status === 'empty' ? t('app.sketch.msg_empty') : t('app.sketch.msg_under', { n: s.dof });
      out.push(ctx.msg(text, s.status === 'over' ? 'is-error' : s.status === 'full' ? 'is-ok' : ''));
    }
    const legend = el('div', { className: 'pc-legend' });
    const T = tokens();
    for (const [c, l] of [[T.under, t('app.sketch.legend_under')], [T.full, t('app.sketch.state_full')], [T.over, t('app.sketch.state_over')], [T.sel, t('app.sketch.legend_selected')]]) legend.append(el('span', {}, el('i', { style: 'background:' + c }), l));
    out.push(legend);
    const picked = [...editor.sel];
    const ents = picked.filter((id) => S.byId(sk, id));
    const cons = picked.filter((id) => sk.constraints.some((c) => c.id === id));
    if (ents.length) {
      const names = ents.map((id) => entityName(sk, id));
      out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.sketch.selected', { names: names.join(', ') }))));
      const app = S.applicable(sk, ents);
      const rel = app.filter((ty) => S.RELATIONS.includes(ty));
      const dims = app.filter((ty) => S.DIMENSIONS.includes(ty));
      if (rel.length) out.push(el('div', { className: 'pc-actions' }, ...rel.map((ty) => ctx.btn(S.CONSTRAINTS[ty].glyph + ' ' + S.CONSTRAINTS[ty].label, () => editor.addRelation(ty, ents)))));
      if (dims.length) out.push(el('div', { className: 'pc-actions', style: 'margin-top:.4rem' }, ...dims.map((ty) => ctx.btn(S.CONSTRAINTS[ty].label, () => { editor.addRelation(ty, ents); const c = editingFeature().sketch.constraints.at(-1); if (c && c.type === ty) editor.editDimension(c.id); }))));
      if (!rel.length && !dims.length) out.push(el('p', { className: 'pc-note' }, t('app.sketch.no_relation_fits')));
      const geoActions = [];
      if (ents.some((id) => { const e = S.byId(sk, id); return e && e.type !== 'point'; })) geoActions.push(ctx.btn(t('app.sketch.construction_toggle'), () => editor.toggleConstruction()));
      geoActions.push(ctx.btn(t('app.btn.delete'), () => editor.deleteSelection(), 'pc-btn is-danger'));
      out.push(el('div', { className: 'pc-actions', style: 'margin-top:.6rem' }, ...geoActions));
      const mine = sk.constraints.filter((c) => ents.some((id) => c.refs.includes(id)));
      if (mine.length) out.push(constraintList(sk, mine, t('app.sketch.relations_on_selection')));
    } else if (cons.length) {
      out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.sketch.selected_relations')), el('div', { className: 'pc-actions' }, ctx.btn(t('app.btn.delete'), () => editor.deleteSelection(), 'pc-btn is-danger'))));
      out.push(constraintList(sk, sk.constraints.filter((c) => cons.includes(c.id)), ''));
    } else {
      out.push(el('p', { className: 'pc-note' }, t('app.sketch.panel_note')));
      if (sk.constraints.length) out.push(constraintList(sk, sk.constraints, t('app.sketch.relations_dims')));
    }
    out.push(numericEntry());
    out.push(el('div', { className: 'pc-block pc-actions' }, ctx.btn(t('app.sketch.exit'), () => exitSketch(), 'pc-btn is-primary'), ctx.btn(t('app.sketch.fit'), () => editor.fit()), ctx.btn(t('app.btn.export_dxf'), () => ctx.exportDxf(f))));
    return out;
  }

  return { sketchDimsBlock, sketchProps };
}
