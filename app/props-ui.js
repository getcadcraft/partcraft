/* SPDX-License-Identifier: Apache-2.0 */
/**
 * props-ui.js: partcraft.js's 15 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountProps(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, fillDl } from './ui-util.js';
import { t } from './i18n.js';
import { MATERIALS, presetOf } from './bom.js';
import * as P from './part.js';
import { nameFeatures } from './brep.js';
import * as V from './vec.js';
import { planeFrame } from './kernel.js';
import * as S from './sketch.js';
import * as FA from './face-actions.js';
import './design-ui.js';
import './sheet-ui.js';
import './gen-ui.js';
import './weld-ui.js';
import './rib-ui.js';
import './bodies-ui.js';
import './surface-ui.js';
import './meshimport.js';
import { mountSketchProps } from './sketch-props-ui.js';
import { mountFeatureProps } from './feature-props-ui.js';

export function mountProps(ctx) {
  const { hist, editor, tokens, status, exact, exactOff, named, exactWhy, editingFeature, built, commit, describeC, showMarks, startPick, endPick, startSketchOn, editSketch, exitSketch, planeLabel, newFeature, setFeature, deleteSelected, moveSelected, rollTo, sketchStateWord, field, numInput, selectInput, check, renderProps, numericEntry, constraintList, renderAll } = ctx;

  /** 0.8 PANEL-COMPACT: label + control pairs (what field() / check() make) as the shared property grid (window.ccPropGrid); any other node, and a
   *  field driven by an equation (its ƒ button needs the label), is kept as DOM in a block under it. The grid's box stands in for the old control: a
   *  change is written to that control and its own change handler runs (the same setFeature / paramsUI code path, the same undo step), and the box
   *  carries the control's data-* (data-param-key: the digit-typing and tree-editing shortcuts find it) so nothing else changes. Without the grid the
   *  old block is returned. */
  function propGridBlock(items, key, category) {
    const flat = items.filter(Boolean);
    if (!window.ccPropGrid) return [el('div', { className: 'pc-props' }, ...flat)];
    const rows = [], bind = new Map(), rest = [];
    const ctl = (x) => x && ((x.tagName === 'INPUT' && (x.type === 'text' || x.type === 'number')) || x.tagName === 'SELECT');
    for (let i = 0; i < flat.length; i++) {
      const a = flat[i], b = flat[i + 1], id = 'r' + rows.length;
      if (a.tagName === 'LABEL' && !a.classList.contains('pc-check') && ctl(b) && !b.classList.contains('is-driven')) {
        const label = a.textContent.trim() || '?';
        if (b.tagName === 'SELECT') rows.push({ id, category, label, type: 'select', value: b.value, readonly: b.disabled, options: [...b.options].map((o) => ({ value: o.value, label: o.textContent })) });
        else rows.push({ id, category, label, type: 'text', value: b.value, readonly: b.disabled || b.readOnly });
        bind.set(id, { el: b, orig: b.value, kind: 'value' });
        i++;
      } else if (a.tagName === 'LABEL' && a.classList.contains('pc-check') && a.querySelector('input[type="checkbox"]')) {
        const cb = a.querySelector('input[type="checkbox"]');
        rows.push({ id, category, label: a.textContent.trim() || '?', type: 'checkbox', value: cb.checked, readonly: cb.disabled });
        bind.set(id, { el: cb, orig: cb.checked, kind: 'check' });
      } else if (a.tagName === 'SPAN' && a.classList.contains('k') && b && b.tagName === 'SPAN' && b.classList.contains('v')) {
        rows.push({ id, category, label: a.textContent.trim() || '?', type: 'readonly', value: b.textContent });
        i++;
      } else rest.push(a);
    }
    if (!rows.length) return [el('div', { className: 'pc-props' }, ...flat)];
    const host = el('div', { className: 'pc-grid' });
    const g = ccPropGrid.create(host, { label: t('app.grid.label'), key, rows, onChange: (id, v) => {
      const b = bind.get(id); if (!b) return;
      if (b.kind === 'check') b.el.checked = !!v; else b.el.value = String(v);
      b.el.dispatchEvent(new Event('change', { bubbles: true }));
      // refused (out of range, an unknown name): the panel does not rebuild, so the box goes back to what the model holds
      setTimeout(() => { if (host.isConnected && b.kind === 'value') g.setValue(id, b.orig); }, 400);
    } });
    for (const [id, b] of bind) { const n = host.querySelector('[data-pg-row="' + id + '"]'); if (n) for (const k of Object.keys(b.el.dataset)) n.dataset[k] = b.el.dataset[k]; }
    return [host, ...(rest.length ? [el('div', { className: 'pc-props' }, ...rest)] : [])];
  }

  /** Add-ons' Properties sections for the selection (heading + rows; a field with edit() gets a box whose change calls it). */
  function addonSections() {
    const out = [];
    for (const sct of ctx.addons?.propsSections(ctx.sel, ctx.part) || []) {
      const rows = [];
      for (const fl of sct.fields) {
        if (fl.edit) {
          const inp = el('input', { type: 'text', className: 'pc-input', value: fl.value });
          inp.addEventListener('change', () => { try { fl.edit(inp.value); } catch (e) { status(e && e.message ? e.message : String(e)); } });
          rows.push(...field(fl.label, inp));
        } else rows.push(el('span', { className: 'k' }, fl.label), el('span', { className: 'v' }, fl.value));
      }
      out.push(el('div', { className: 'pc-block', dataset: { addonSection: sct.key } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, sct.label), el('div', { className: 'pc-props' }, ...rows)));
    }
    return out;
  }

  function partProps() {
    const name = el('input', { type: 'text', className: 'pc-input', id: 'pc-part-name', value: ctx.part.name, maxLength: 120 });
    name.addEventListener('change', () => { const v = name.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 120); if (v) commit(t('app.undo.rename_part'), () => { ctx.part.name = v; }); });
    const matSel = selectInput([['', t('part.material.none')], ...MATERIALS.map((m, i) => [String(i), t('part.material.option', { name: m.name, d: m.density })])], presetOf(ctx.part.material) >= 0 ? String(presetOf(ctx.part.material)) : '', (v) => {
      const m = v === '' ? null : MATERIALS[Number(v)];
      hist.push(ctx.part, t('part.material.undo')); if (m) ctx.part.material = { name: m.name, density: m.density }; else delete ctx.part.material; ctx.dirty = true; renderAll();
    });
    matSel.dataset.partMaterial = '1';
    const res = selectInput([['32', t('app.part.res_coarse')], ['64', t('app.part.res_normal')], ['128', t('app.part.res_fine')], ['256', t('app.part.res_very_fine')]], String(ctx.part.resolution), (v) => commit(t('app.undo.resolution'), () => { ctx.part.resolution = Number(v); }));
    return [
      ...propGridBlock([...field(t('app.props.name'), name), ...field(t('part.material'), matSel), ...field(t('app.part.curves'), res)], 'part', t('app.grid.part')),
      el('p', { className: 'pc-note' }, ctx.useExact ? t('app.part.note_exact') : exactOff() ? t('kernel.part.note') : exact.state === 'loading' ? t('app.part.note_mesh_loading') : t('app.part.note_mesh_off')),
      el('p', { className: 'pc-note' }, t('app.part.start_note')),
      ctx.BUI.bodiesBlock(),
    ].filter(Boolean);
  }

  function faceProps() {
    const out = [];
    const d = el('dl', { className: 'pc-dl' });
    const owner = ctx.pick.feature ? P.featureById(ctx.part, ctx.pick.feature) : null;
    const fi = ctx.pick.info;
    if (fi) {
      const kind = { plane: () => t('app.face.flat'), cylinder: () => t('app.face.cylinder'), cone: () => t('app.face.cone'), sphere: () => t('app.face.sphere'), torus: () => t('app.face.torus'), spline: () => t('app.face.spline') }[fi.type]?.() || t('app.face.curved');
      const maker = fi.name ? P.featureById(ctx.part, nameFeatures(fi.name)[0]) : null;
      fillDl(d, [[t('app.props.kind'), t('app.props.exact', { kind })], [t('app.props.radius'), fi.r ? ctx.f3(fi.r) + ' mm (⌀' + ctx.f3(2 * fi.r) + ')' : ''], [t('app.props.area'), ctx.f3(fi.area) + ' mm²'], [t('app.props.made_by'), maker ? maker.name : ''], [t('app.props.face'), fi.name ? faceWords(fi.name) : ''],
        [t('app.props.normal'), fi.type === 'plane' ? fi.n.map((v) => V.fmt(v, 4)).join(', ') : ''], [t('app.props.axis'), fi.axis ? fi.axis.d.map((v) => V.fmt(v, 4)).join(', ') : ''],
        [t('app.props.reference'), fi.type === 'plane' ? (ctx.pick.ref.kind === 'face' ? t('app.face.follows', { name: maker ? maker.name : t('app.face.its_feature') }) : t('app.face.fixed_where_picked')) : '']]);
    } else fillDl(d, [[t('app.props.kind'), ctx.pick.flat ? t('app.face.flat') : t('app.face.curved_faceted')], [t('app.props.made_by'), owner ? owner.name : ''], [t('app.props.normal'), ctx.pick.normal.map((v) => V.fmt(v, 4)).join(', ')],
      [t('app.props.reference'), ctx.pick.flat ? (ctx.pick.ref.kind === 'face' ? t('app.face.follows', { name: owner ? owner.name : t('app.face.its_feature') }) : t('app.face.fixed_where_picked')) : '']]);
    out.push(d);
    if (fi && fi.name) out.push(el('div', { className: 'pc-actions', style: 'margin-bottom:.5rem' }, ctx.btn(t('app.face.shell_opening'), () => newFeature('shell', {}), 'pc-btn')));
    if (ctx.pick.flat) {
      out.push(el('div', { className: 'pc-actions' },
        ctx.btn(t('app.face.sketch_on'), () => startSketchOn(ctx.pick.ref), 'pc-btn is-primary'),
        ctx.btn(t('app.face.normal_to'), () => { const fr = V.frameFor(ctx.pick.normal, ctx.pick.point); ctx.view.normalTo(fr); }),
        ctx.btn(t('app.face.export_dxf'), () => ctx.exportDxf())));
      // one click from the face to the feature (0.6 PU.3)
      const fb = (key, kind) => { const b = ctx.btn(t(key), () => faceAction(kind)); b.title = t(key + '.title'); b.dataset.faceAction = kind; return b; };
      out.push(el('div', { className: 'pc-actions', style: 'margin-top:.4rem' }, fb('app.face.extrude_from', 'extrude'), fb('app.face.cut_into', 'cut'), fb('app.face.hole_here', 'hole')));
      if (ctx.pick.ref.kind === 'fixed') out.push(el('p', { className: 'pc-note' }, t('app.face.fixed_note')));
    }
    return out;
  }

  /** The picked flat face's one-click features (0.6 PU.3): 'extrude' pulls the face out and 'cut' pushes it in (a sketch on the
   *  face holding its outline, face-actions.js, then an Extrude), 'hole' drills where it was clicked (a sketch with one point,
   *  then a Hole through). The sketch and the feature are one undo step; the feature is selected, so a typed number goes into
   *  its main box. An outline with curves that can't be copied opens the sketch to finish by hand instead. */
  function faceAction(kind) {
    if (ctx.mode !== 'model' || ctx.pick?.kind !== 'face' || !ctx.pick.flat || !ctx.regen?.mesh) return;
    document.activeElement?.blur();   // the button goes with the panel: no box should inherit its focus, so a typed number reaches the feature
    const ref = ctx.pick.ref, frame = planeFrame(ref, ctx.regen, ctx.part), name = ctx.pick.info?.name;
    if (!frame) { status(t('app.sketch.no_plane')); return; }
    const sk = S.newSketch();
    if (kind === 'hole') FA.pointAt(sk, frame, ctx.pick.point);
    else {
      const r = name && ctx.regen.edges ? FA.faceOutline(sk, frame, ctx.regen.edges, name) : { made: 0, skipped: 0 };
      if (!r.made && !r.skipped) { status(t('app.face.no_outline')); return; }
      if (r.skipped || S.profile(sk).error) {
        const f = commit(t('app.undo.new_sketch'), () => P.addFeature(ctx.part, 'sketch', { plane: ref, sketch: sk }));
        editSketch(f.id);
        status(t('app.face.outline_open', { n: r.skipped || 1 }), true);
        return;
      }
    }
    const depth = kind === 'cut' ? FA.cutDepth(ctx.regen.stats?.bbox, frame.n) : 10;
    let s = null;
    const f = commit(t({ extrude: 'app.undo.face_extrude', cut: 'app.undo.face_cut', hole: 'app.undo.face_hole' }[kind]), () => {
      s = P.addFeature(ctx.part, 'sketch', { plane: ref, sketch: sk });
      return kind === 'hole' ? P.addFeature(ctx.part, 'hole', { sketch: s.id, through: true }) : P.addFeature(ctx.part, 'extrude', { sketch: s.id, op: kind === 'cut' ? 'cut' : 'add', end: 'blind', depth });
    });
    ctx.sel = { kind: 'feature', id: f.id }; ctx.pick = null; ctx.multi = []; ctx.view.setHighlight(null); showMarks();
    renderAll();
    built().then(() => {
      const r = ctx.regen.results.get(f.id);
      status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message })
        : kind === 'hole' ? t('app.face.added_hole', { name: f.name, sketch: s.name }) : t(kind === 'cut' ? 'app.face.added_cut' : 'app.face.added_extrude', { name: f.name, depth: ctx.f3(depth) }), true);
    });
  }

  const { sketchDimsBlock, sketchProps } = mountSketchProps({
    numInput, status, renderProps, commit, built, editingFeature, describeC, tokens, editor, constraintList, numericEntry, exitSketch, entityName, ctx,
  });

  const GRID_FEATURES = new Set(['extrude', 'revolve', 'hole', 'fillet', 'chamfer', 'shell']);
  const { featureProps, faceWords, refList } = mountFeatureProps({
    setFeature, field, planeLabel, sketchStateWord, editSketch, selectInput, numInput, check, rollTo, moveSelected, deleteSelected, named, endPick, startPick, exactWhy, propGridBlock, sketchDimsBlock, GRID_FEATURES, ctx,
  });







  function entityName(sk, id) {
    if (id === S.ORIGIN) return t('app.entity.origin');
    const e = S.byId(sk, id);
    if (!e) return id;
    const kind = e.type === 'point' ? t('app.entity.point') : e.type === 'line' ? (e.construction ? t('app.entity.centerline') : t('app.entity.line')) : e.type === 'circle' ? t('app.entity.circle') : e.type === 'arc' ? t('app.entity.arc') : e.type === 'spline' ? t('app.entity.spline') : e.type;
    return t('app.entity.named', { kind, id });
  }

  return { addonSections, partProps, faceProps, featureProps, faceWords, refList, sketchProps, entityName };
}
