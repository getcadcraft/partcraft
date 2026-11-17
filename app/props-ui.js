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
import { nameFeatures, findEdge, findFace } from './brep.js';
import * as V from './vec.js';
import { planeFrame } from './kernel.js';
import * as S from './sketch.js';
import * as FA from './face-actions.js';
import { EXTRUDE_END_OPTIONS, HOLE_TYPE_OPTIONS, DESIGN_TYPES } from './design-ui.js';
import { SHEET_TYPES } from './sheet-ui.js';
import { GEN_TYPES } from './gen-ui.js';
import { WELD_TYPES } from './weld-ui.js';
import { RIB_TYPES } from './rib-ui.js';
import { BODY_TYPES } from './bodies-ui.js';
import { SURFACE_TYPES } from './surface-ui.js';
import * as MI from './meshimport.js';

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

  const GRID_FEATURES = new Set(['extrude', 'revolve', 'hole', 'fillet', 'chamfer', 'shell']);
  function featureProps(f) {
    const out = [];
    const r = ctx.regen?.results.get(f.id) || { status: 'ok' };
    if (r.status === 'error') out.push(ctx.msg(r.message, 'is-error'));
    else if (r.status === 'skipped') out.push(ctx.msg(t('app.feature.not_built', { reason: r.message }), 'is-error'));
    else if (r.status === 'suppressed') out.push(ctx.msg(t('app.feature.suppressed_msg')));
    else if (ctx.mode === 'pick' && ctx.editing === f.id) out.push(ctx.msg(t(ctx.FACE_PICKERS.has(f.type) ? 'app.feature.picking_faces' : 'app.feature.picking_edges', { name: f.name }), 'is-ok'));
    else if (r.status === 'rolled') out.push(ctx.msg(t('app.feature.rolled_msg')));
    if (r.warning) out.push(ctx.msg(r.warning));
    const grid = [];
    const set = (label, fn) => setFeature(f.id, label, fn);
    const core = !!window.ccPropGrid && GRID_FEATURES.has(f.type);   // 0.8 PANEL-COMPACT: these features' numbers and choices (and the name) are one property grid
    const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-feat-name', value: f.name, maxLength: 60 });
    nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60); if (v) setFeature(f.id, t('app.undo.rename'), (g) => { g.name = v; }); });
    if (core) grid.push(...field(t('app.props.name'), nameIn));
    const gridOut = (key) => (core ? propGridBlock(grid, key, t('app.grid.parameters')) : [el('div', { className: 'pc-props' }, ...grid)]);
    const sketchRow = (id) => { const s = P.featureById(ctx.part, id); return [el('span', { className: 'k' }, t('app.props.sketch_row')), el('span', { className: 'v' }, s ? s.name : t('app.props.gone'))]; };
    if (f.type === 'sketch') {
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.props.plane'), planeLabel(f.plane)], [t('app.props.state'), r.solve ? sketchStateWord(r.solve) : ''], [t('app.props.geometry'), t('app.props.geometry_value', { curves: f.sketch.entities.filter((e) => e.type !== 'point').length, points: S.loosePoints(f.sketch).length })], [t('app.props.relations'), f.sketch.constraints.length]]);
      out.push(dl, el('div', { className: 'pc-actions', style: 'margin-top:.6rem' }, ctx.btn(t('app.btn.edit_sketch'), () => editSketch(f.id), 'pc-btn is-primary'), ctx.btn(t('app.btn.export_dxf'), () => ctx.exportDxf(f))));
      const d = sketchDimsBlock(f);
      if (d) out.push(d);
    } else if (f.type === 'extrude') {
      grid.push(...sketchRow(f.sketch));
      grid.push(...field(t('app.props.operation'), selectInput([['add', t('app.op.add')], ['cut', t('app.op.cut')], ['intersect', t('app.op.intersect')], ['new', t('app.op.new')]], f.op, (v) => set(t('app.undo.operation'), (g) => { g.op = v; if (v !== 'cut' && g.end === 'through') g.end = 'blind'; }))));
      grid.push(...field(t('app.props.end'), selectInput(EXTRUDE_END_OPTIONS, f.end, (v) => set(t('app.undo.end_condition'), (g) => { g.end = v; if (['upto', 'offset'].includes(v) && !g.upto && ctx.pick?.kind === 'face' && ctx.pick.flat) g.upto = ctx.pick.ref; if (v !== 'blind') delete g.two; if (v === 'mid') delete g.taper; }))));
      if (f.end === 'blind' || f.end === 'mid') grid.push(...field(t('app.props.depth_mm'), numInput(f.depth, (v) => set(t('app.undo.depth'), (g) => { g.depth = v; }), { min: 0.000001, key: f.id + '.depth' })));
      if (f.end !== 'mid') grid.push(check(t('app.props.reverse'), f.reverse, (v) => set(t('app.undo.reverse'), (g) => { g.reverse = v; })));
    } else if (f.type === 'revolve') {
      grid.push(...sketchRow(f.sketch));
      grid.push(...field(t('app.props.operation'), selectInput([['add', t('app.op.add')], ['cut', t('app.op.cut')], ['intersect', t('app.op.intersect')], ['new', t('app.op.new')]], f.op, (v) => set(t('app.undo.operation'), (g) => { g.op = v; }))));
      grid.push(...field(t('app.props.angle_deg'), numInput(f.angle, (v) => set(t('app.undo.angle'), (g) => { g.angle = v; }), { min: 0.001, max: 360, key: f.id + '.angle' })));
      const sk = P.featureById(ctx.part, f.sketch)?.sketch;
      if (sk) {
        const lines = sk.entities.filter((e) => e.type === 'line');
        const opts = [['', t('app.revolve.first_centerline')], ...lines.map((l, i) => [l.id, t(l.construction ? 'app.revolve.centerline_n' : 'app.revolve.line_n', { n: i + 1, id: l.id })])];
        for (const g of ctx.part.features.slice(0, P.indexOf(ctx.part, f.id))) if (g.type === 'axis') opts.push(['ref:' + g.id, t('app.revolve.axis_feature', { name: g.name })]);
        const curAx = f.axis && typeof f.axis === 'object' ? (f.axis.kind === 'ref' ? 'ref:' + f.axis.feature : 'obj') : f.axis || '';
        if (curAx === 'obj') opts.push(['obj', t('app.revolve.picked_axis')]);
        grid.push(...field(t('app.props.axis'), selectInput(opts, curAx, (v) => { if (v !== 'obj') set(t('app.undo.axis'), (g) => { g.axis = v.startsWith('ref:') ? { kind: 'ref', feature: v.slice(4) } : v || null; }); })));
      }
    } else if (f.type === 'hole') {
      grid.push(...sketchRow(f.sketch));
      grid.push(el('span', { className: 'k' }, t('app.hole.holes')), el('span', { className: 'v' }, t('app.hole.count', { n: String(r.count ?? S.loosePoints(P.featureById(ctx.part, f.sketch)?.sketch || S.newSketch()).length) })));
      grid.push(...field(t('app.hole.type'), selectInput(HOLE_TYPE_OPTIONS, f.kind, (v) => set(t('app.undo.hole_type'), (g) => { g.kind = v; if ((v === 'csink' || v === 'tapped') && !g.size) Object.assign(g, { csinkD: Math.max(12, g.d * 2), csinkAngle: 90, size: 'M6', threadDepth: null }); }))));
      grid.push(...field(t('app.hole.diameter_mm'), numInput(f.d, (v) => set(t('app.undo.diameter'), (g) => { g.d = v; }), { min: 0.000001, key: f.id + '.d' })));
      grid.push(check(t('app.hole.through_all'), f.through, (v) => set(t('app.hole.through_all'), (g) => { g.through = v; })));
      if (!f.through) grid.push(...field(t('app.props.depth_mm'), numInput(f.depth, (v) => set(t('app.undo.depth'), (g) => { g.depth = v; }), { min: 0.000001, key: f.id + '.depth' })));
      if (f.kind === 'cbore') {
        grid.push(...field(t('app.hole.cbore_d'), numInput(f.cboreD, (v) => set(t('app.undo.cbore_d'), (g) => { g.cboreD = v; }), { min: 0.000001, key: f.id + '.cboreD' })));
        grid.push(...field(t('app.hole.cbore_depth'), numInput(f.cboreDepth, (v) => set(t('app.hole.cbore_depth'), (g) => { g.cboreDepth = v; }), { min: 0.000001, key: f.id + '.cboreDepth' })));
      }
      grid.push(check(t('app.props.reverse'), f.reverse, (v) => set(t('app.undo.reverse'), (g) => { g.reverse = v; })));
    } else if (f.type === 'lpattern' || f.type === 'cpattern') {
      grid.push(...seedsField(f));
      if (f.type === 'lpattern') {
        grid.push(...field(t('app.pattern.direction'), dirSelect(f, 'dir')));
        grid.push(...field(t('app.pattern.spacing_mm'), numInput(f.spacing, (v) => set(t('app.undo.spacing'), (g) => { g.spacing = v; }), { key: f.id + '.spacing' })));
      } else {
        grid.push(...field(t('app.props.axis'), dirSelect(f, 'axis')));
        grid.push(...field(t('app.props.angle_deg'), numInput(f.angle, (v) => set(t('app.undo.angle'), (g) => { g.angle = v; }), { min: 0.001, max: 360, key: f.id + '.angle' })));
        grid.push(el('span', { className: 'span pc-muted' }, f.angle === 360 ? t('app.pattern.full_circle') : t('app.pattern.spread')));
      }
      grid.push(...field(t('app.pattern.count'), numInput(f.count, (v) => set(t('app.pattern.count'), (g) => { g.count = Math.max(1, Math.min(1000, Math.round(v))); }), { min: 1, max: 1000, step: 1, key: f.id + '.count' })));
      grid.push(check(t('app.props.reverse'), f.reverse, (v) => set(t('app.undo.reverse'), (g) => { g.reverse = v; })));
    } else if (f.type === 'mirror') {
      grid.push(...seedsField(f, true));
      grid.push(...field(t('app.mirror.plane'), planeSelect(f)));
    } else if (f.type === 'fillet' || f.type === 'chamfer') {
      const key = f.type === 'fillet' ? 'r' : 'd';
      grid.push(...field(f.type === 'fillet' ? t('app.fillet.radius_mm') : t('app.chamfer.distance_mm'), numInput(f[key], (v) => set(f.type === 'fillet' ? t('app.props.radius') : t('app.undo.distance'), (g) => { g[key] = v; }), { min: 0.000001, key: f.id + '.' + key })));
      grid.push(el('span', { className: 'k' }, t('app.fillet.edges')), el('span', { className: 'v' }, String(f.edges.length)));
      out.push(...gridOut('feature'));
      grid.length = 0;
      out.push(refList(f, 'edges'));
    } else if (f.type === 'shell') {
      grid.push(...field(t('app.shell.wall_mm'), numInput(f.t, (v) => set(t('app.undo.wall'), (g) => { g.t = v; }), { min: 0.000001, key: f.id + '.t' })));
      grid.push(check(t('app.shell.outward'), f.outward, (v) => set(t('app.undo.shell_direction'), (g) => { g.outward = v; })));
      grid.push(el('span', { className: 'k' }, t('app.shell.open_faces')), el('span', { className: 'v' }, String(f.faces.length)));
      out.push(...gridOut('feature'));
      grid.length = 0;
      out.push(refList(f, 'faces'));
    } else if (SHEET_TYPES.has(f.type)) {
      ctx.SH.panel(f, grid, out);
    } else if (GEN_TYPES.has(f.type)) {
      ctx.GU.panel(f, grid, out);
    } else if (WELD_TYPES.has(f.type)) {
      ctx.WU.panel(f, grid, out);
    } else if (RIB_TYPES.has(f.type)) {
      ctx.RB.panel(f, grid, out);
    } else if (f.type === 'thread') {
      ctx.TU.panel(f, grid, out);
      out.push(refList(f, 'faces'));
    } else if (BODY_TYPES.has(f.type)) {
      ctx.BUI.panel(f, grid, out);
    } else if (SURFACE_TYPES.has(f.type)) {
      ctx.SUI.panel(f, grid, out);
    } else if (DESIGN_TYPES.has(f.type)) {
      ctx.DUI.panel(f, grid, out);
    } else if (f.type === 'import' && f.mesh) {
      // a body from a mesh (D7.49): what it was made from, what the import repaired; units, up axis and operation stay editable
      const dl = el('dl', { className: 'pc-dl' });
      const fmt = (/\.(stl|obj|3mf|step|stp|3dm)$/i.exec(f.file || '')?.[1] || 'stl').toUpperCase().replace('STP', 'STEP');   // a STEP read as triangles (D7.26) is a mesh body too
      const fixed = f.report ? MI.reportLines(f.report).filter((l) => !(fmt === 'STEP' && l.key === 'mesh.rep.welded')).map((l) => t(l.key, l.vars)) : [];
      fillDl(dl, [[t('app.import.file'), f.file || fmt], [t('app.import.made_from'), t('app.import.mesh_value', { fmt, n: f.mesh.nt })], [t('app.import.repaired'), fixed.length ? fixed.join(' ') : t('app.import.repaired_none')]]);
      out.push(dl);
      grid.push(...field(t('app.mesh.units'), selectInput(Object.keys(MI.UNITS).map((u) => [u, t('app.mesh.unit.' + u)]), f.units, (v) => set(t('app.mesh.units'), (g) => { g.units = v; }))));
      grid.push(...field(t('app.import.up_in_file'), selectInput([['z', t('app.import.z_up')], ['y', t('app.import.y_up')]], f.up, (v) => set(t('app.import.up_axis'), (g) => { g.up = v; }))));
      grid.push(...field(t('app.mesh.op'), selectInput(['add', 'cut', 'intersect'].map((o) => [o, t('app.mesh.op.' + o)]), f.op || 'add', (v) => set(t('app.mesh.op'), (g) => { g.op = v; }))));
    } else if (f.type === 'import') {
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.import.file'), f.file || 'STEP'], [t('app.import.size'), t('app.import.size_value', { kb: (f.step.length / 1024).toFixed(0) })], [t('app.import.up_axis'), f.up === 'y' ? t('app.import.up_y') : t('app.import.up_z')]]);
      out.push(dl);
      grid.push(...field(t('app.import.up_in_file'), selectInput([['z', t('app.import.z_up')], ['y', t('app.import.y_up')]], f.up, (v) => set(t('app.import.up_axis'), (g) => { g.up = v; }))));
    }
    if (!DESIGN_TYPES.has(f.type)) ctx.DUI.extra(f, grid);
    ctx.TU.holeExtra(f, grid);   // a tapped hole's modelled thread (thread-ui.js)
    ctx.BUI.extra(f, grid);   // linear / circular patterns: copy bodies (bodies-ui.js)
    if (grid.length) out.push(...gridOut('feature'));
    if (typeof f.sketch === 'string') { const sf = P.featureById(ctx.part, f.sketch); const d = sf && sketchDimsBlock(sf, t('app.dims.sketch')); if (d) out.push(d); }
    // history actions
    const i = P.indexOf(ctx.part, f.id);
    out.push(el('div', { className: 'pc-block' }, el('div', { className: 'pc-actions' },
      ctx.btn(f.suppressed ? t('app.history.unsuppress') : t('app.history.suppress'), () => setFeature(f.id, f.suppressed ? t('app.history.unsuppress') : t('app.history.suppress'), (g) => { if (g.suppressed) delete g.suppressed; else g.suppressed = true; })),
      ctx.btn(t('app.history.roll_here'), () => rollTo(i), 'pc-btn', { title: t('app.history.roll_here_title') }),
      ctx.btn(t('app.history.move_up'), () => moveSelected(-1), 'pc-btn', { disabled: !P.canMove(ctx.part, f.id, i - 1).ok, title: P.canMove(ctx.part, f.id, i - 1).reason || t('app.history.move_up_title') }),
      ctx.btn(t('app.history.move_down'), () => moveSelected(1), 'pc-btn', { disabled: !P.canMove(ctx.part, f.id, i + 1).ok, title: P.canMove(ctx.part, f.id, i + 1).reason || t('app.history.move_down_title') }),
      ctx.btn(t('app.btn.delete'), () => deleteSelected(), 'pc-btn is-danger'),
    )));
    if (!core) out.push(el('div', { className: 'pc-block pc-props' }, ...field(t('app.props.name'), nameIn)));
    return out;
  }

  /** A face name (brep.js) in words: "Extrude1 end face", "Hole1 wall (copy 3 of CirPattern1)". */
  function faceWords(name) {
    const m = /^(f\d+)\.([a-z]+)(?::([^@~]+))?/.exec(name || '');
    if (!m) return '?';
    const g = P.featureById(ctx.part, m[1]);
    const FACE_KINDS = ['start', 'end', 'side', 'wall', 'floor', 'cbore', 'cfloor', 'top', 'blend', 'corner', 'bevel', 'face', 'draft', 'csink', 'far', 'thread', 'tend'];
    const kind = FACE_KINDS.includes(m[2]) ? t('app.face.kind.' + m[2]) : m[2];
    let out = t('app.face.words', { feature: g ? g.name : t('app.plane.deleted_feature'), kind }) + (m[2] === 'face' && m[3] ? ' ' + m[3].split('_').map((x) => Number(x) + 1).join('.') : '');
    for (const k of String(name).matchAll(/([@~])(f\d+)(?:#(\d+|m))?/g)) {
      const h = P.featureById(ctx.part, k[2]);
      out += k[1] === '~' ? t('app.face.inside_of', { name: h ? h.name : t('app.face.a_shell') }) : k[3] === 'm' ? t('app.face.mirrored_by', { name: h ? h.name : '?' }) : t('app.face.copy_of', { n: k[3], name: h ? h.name : '?' });
    }
    return out;
  }

  /** The edges or faces a fillet / chamfer / shell uses, each named by the faces it lies between. */
  function refList(f, key) {
    const desc = (name) => faceWords(name);
    const items = f[key].map((r, i) => {
      const gone = named() && (key === 'edges' ? findEdge(ctx.regen.edges, r) : findFace(ctx.regen.faces, r)) < 0 && ctx.mode === 'pick';
      const label = key === 'edges' ? t('app.refs.edge_n', { n: i + 1, a: desc(r.faces[0]), b: desc(r.faces[1]) }) : t('app.refs.face_n', { n: i + 1, name: desc(r.name) });
      return el('li', {}, el('span', { className: 'grow' + (gone ? ' is-bad' : ''), title: key === 'edges' ? r.faces.join(' × ') : r.name }, label),
        ctx.btn(t('app.btn.remove'), () => setFeature(f.id, key === 'edges' ? t('app.undo.drop_edge') : t('app.undo.drop_face'), (g) => { g[key].splice(i, 1); }), 'pc-linkbtn'));
    });
    const picking = ctx.mode === 'pick' && ctx.editing === f.id;
    return el('div', { className: 'pc-block' },
      el('p', { className: 'pc-note' }, key === 'edges' ? t('app.refs.edges_note') : t('app.refs.faces_note')),
      items.length ? el('ul', { className: 'pc-list' }, ...items) : el('p', { className: 'pc-muted' }, key === 'edges' ? t('app.refs.no_edges') : t('app.refs.no_faces')),
      el('div', { className: 'pc-actions' }, picking ? ctx.btn(t('app.refs.done_picking'), () => endPick(), 'pc-btn is-primary') : ctx.btn(key === 'edges' ? t('app.refs.pick_edges') : t('app.refs.pick_faces'), () => startPick(f.id), 'pc-btn is-primary', { disabled: !ctx.useExact && !(ctx.PICK_ON_MESH.has(f.type) && named()), title: ctx.useExact || (ctx.PICK_ON_MESH.has(f.type) && named()) ? '' : exactWhy(t('kernel.what.pick'), t('app.refs.needs_exact')) })));
  }

  function seedsField(f, allowBody = false) {
    const i = P.indexOf(ctx.part, f.id);
    const earlier = ctx.part.features.slice(0, i).filter((g) => ctx.SOLID.has(g.type));
    const boxes = [];
    if (allowBody) boxes.push(check(t('app.seeds.whole_body'), f.seeds === 'body', (v) => setFeature(f.id, t('app.undo.mirror_body'), (g) => { g.seeds = v ? 'body' : earlier.slice(-1).map((x) => x.id); })));
    if (f.seeds !== 'body') {
      for (const g of earlier) boxes.push(check(g.name, f.seeds.includes(g.id), (v) => setFeature(f.id, t('app.seeds.to_copy'), (h) => { h.seeds = v ? [...h.seeds, g.id] : h.seeds.filter((x) => x !== g.id); })));
    }
    return [el('span', { className: 'pc-props-sub' }, allowBody ? t('app.seeds.mirror') : t('app.seeds.to_copy')), el('div', { className: 'pc-checks' }, ...boxes)];
  }

  function dirSelect(f, key) {
    const ref = f[key];
    const i = P.indexOf(ctx.part, f.id);
    const opts = [['world:x', t('app.dir.x')], ['world:y', t('app.dir.y')], ['world:z', t('app.dir.z')]];
    for (const g of ctx.part.features.slice(0, i)) {
      if (g.type === 'revolve') opts.push(['axis:' + g.id, t('app.dir.axis_of', { name: g.name })]);
      if (g.type === 'axis') opts.push(['ref:' + g.id, g.name]);
      if (g.type === 'plane') opts.push(['ref:' + g.id, t('app.dir.plane_normal', { name: g.name })]);
      if (g.type === 'sketch') g.sketch.entities.filter((e) => e.type === 'line').slice(0, 30).forEach((l, k) => opts.push(['line:' + g.id + ':' + l.id, t(l.construction ? 'app.dir.centerline_of' : 'app.dir.line_of', { name: g.name, n: k + 1 })]));
    }
    if (ref.kind === 'fixed') opts.push(['fixed', t('app.dir.picked_fixed')]);
    if (ctx.pick?.kind === 'edge') opts.push(['pick', t('app.dir.picked_now')]);
    const cur = ref.kind === 'world' ? 'world:' + ref.axis : ref.kind === 'axis' ? 'axis:' + ref.feature : ref.kind === 'ref' ? 'ref:' + ref.feature : ref.kind === 'line' ? 'line:' + ref.sketch + ':' + ref.entity : 'fixed';
    return selectInput(opts, cur, (v) => {
      let nr;
      if (v === 'pick') nr = { kind: 'fixed', o: ctx.pick.a, d: V.norm(V.sub(ctx.pick.b, ctx.pick.a)) };
      else if (v === 'fixed') return;
      else { const [k, a, b] = v.split(':'); nr = k === 'world' ? { kind: 'world', axis: a } : k === 'axis' ? { kind: 'axis', feature: a } : k === 'ref' ? { kind: 'ref', feature: a } : { kind: 'line', sketch: a, entity: b }; }
      setFeature(f.id, key === 'dir' ? t('app.pattern.direction') : t('app.undo.axis'), (g) => { g[key] = nr; });
    });
  }

  function planeSelect(f) {
    const ref = f.plane;
    const opts = [['base:front', t('app.mirror.front')], ['base:top', t('app.mirror.top')], ['base:right', t('app.mirror.right')]];
    for (const g of ctx.part.features.slice(0, P.indexOf(ctx.part, f.id))) if (g.type === 'plane') opts.push(['ref:' + g.id, g.name]);
    if (ref.kind !== 'base' && ref.kind !== 'ref') opts.push(['cur', ref.kind === 'face' ? t('app.mirror.a_face_of', { name: P.featureById(ctx.part, ref.feature)?.name || '?' }) : t('app.mirror.a_fixed_plane')]);
    if (ctx.pick?.kind === 'face' && ctx.pick.flat) opts.push(['pick', t('app.mirror.picked_face')]);
    const cur = ref.kind === 'base' ? 'base:' + ref.name : ref.kind === 'ref' ? 'ref:' + ref.feature : 'cur';
    return selectInput(opts, cur, (v) => {
      if (v === 'cur') return;
      const nr = v === 'pick' ? ctx.pick.ref : v.startsWith('ref:') ? { kind: 'ref', feature: v.slice(4) } : { kind: 'base', name: v.split(':')[1] };
      setFeature(f.id, t('app.mirror.plane'), (g) => { g.plane = nr; });
    });
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

  function entityName(sk, id) {
    if (id === S.ORIGIN) return t('app.entity.origin');
    const e = S.byId(sk, id);
    if (!e) return id;
    const kind = e.type === 'point' ? t('app.entity.point') : e.type === 'line' ? (e.construction ? t('app.entity.centerline') : t('app.entity.line')) : e.type === 'circle' ? t('app.entity.circle') : e.type === 'arc' ? t('app.entity.arc') : e.type === 'spline' ? t('app.entity.spline') : e.type;
    return t('app.entity.named', { kind, id });
  }

  return { addonSections, partProps, faceProps, featureProps, faceWords, refList, sketchProps, entityName };
}
