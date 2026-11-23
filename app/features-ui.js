/* SPDX-License-Identifier: Apache-2.0 */
/**
 * features-ui.js: partcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFeatures(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as P from './part.js';
import * as S from './sketch.js';
import { DESIGN_TYPES } from './design-ui.js';
import { SURFACE_TYPES } from './surface-ui.js';
import { BODY_TYPES } from './bodies-ui.js';
import { SHEET_TYPES } from './sheet-ui.js';
import { RIB_TYPES } from './rib-ui.js';
import { WELD_TYPES } from './weld-ui.js';
import { GEN_TYPES } from './gen-ui.js';
import { t } from './i18n.js';
import { displayName as SECTION_NAME } from './shapes/sections.js';
import { faceRef } from './brep.js';
import * as V from './vec.js';
import { PARAM_FIELDS } from './params-part.js';

export function mountFeatures(ctx) {
  const { ST, ui, editor, status, exact, named, exactWhy, built, commit, showMarks, startPick, exitSketch, renderAll, ask } = ctx;

  // ---------------------------------------------------------------- features
  function chooseSketch(need) {
    if (ST.mode === 'sketch') { const id = ST.editing; exitSketch(); return id; }
    if (ST.sel?.kind === 'feature') { const f = P.featureById(ST.part, ST.sel.id); if (f?.type === 'sketch') return f.id; }
    const used = new Set(ST.part.features.filter((f) => typeof f.sketch === 'string').map((f) => f.sketch));
    const built = ST.part.features.slice(0, P.builtCount(ST.part));
    const cands = built.filter((f) => f.type === 'sketch' && !used.has(f.id) && ST.regen?.results.get(f.id)?.status === 'ok');
    const ok = cands.filter((f) => (need === 'points' ? S.loosePoints(f.sketch).length : f.sketch.entities.some((e) => e.type !== 'point' && !e.construction)));
    return ok.length ? ok[ok.length - 1].id : null;
  }

  function newFeature(type, props) {
    const label = P.FEATURE_LABELS[type];   // the feature's name (part.js), also the undo step's label
    if ((DESIGN_TYPES.has(type) && type !== 'draft') || SURFACE_TYPES.has(type) || BODY_TYPES.has(type) || SHEET_TYPES.has(type) || RIB_TYPES.has(type) || WELD_TYPES.has(type) || GEN_TYPES.has(type)) {
      // reference geometry, sweep, loft: made from the selection, finished in the panel (design-ui.js)
      const dp = GEN_TYPES.has(type) ? ctx.GU.create() : WELD_TYPES.has(type) ? ctx.WU.create() : RIB_TYPES.has(type) ? ctx.RB.create() : SHEET_TYPES.has(type) ? ctx.SH.create(type) : BODY_TYPES.has(type) ? ctx.BUI.create(type) : SURFACE_TYPES.has(type) ? ctx.SUI.create(type) : ctx.DUI.create(type);
      if (!dp) return;
      const f = commit(label, () => P.addFeature(ST.part, type, { ...dp, ...props }));
      ST.sel = { kind: 'feature', id: f.id }; ST.pick = null; ST.multi = []; ST.view.setHighlight(null); showMarks();
      if (type === 'sheetflange' && !f.edge) { renderAll(); ctx.SH.pickEdge(f); return; }   // no edge picked yet: wait for one
      renderAll();
      if (type === 'generated') { built().then(() => ctx.GU.run(f)); return; }   // 0.8 CE.3: a new Generated body runs its script at once
      if (type === 'rib') { built().then(() => ctx.RB.afterBuild(f)).then((flipped) => { if (!flipped) { const r = ST.regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t('rib.ui.added', { name: f.name })); } }); return; }
      built().then(() => {
        const r = ST.regen.results.get(f.id);
        if (r?.status === 'error') status(t('app.feature.error', { name: f.name, error: r.message }));
        else if (type === 'member') status(t('weld.ui.added', { name: f.name, n: f.segs.length, section: SECTION_NAME(f.section) }));   // D7.50
        else status(t('app.feature.added_refs', { name: f.name }));
      });
      return;
    }
    if (ctx.PICKERS.has(type)) {
      if (!ST.useExact && !(ctx.PICK_ON_MESH.has(type) && named())) { status(exactWhy(label, exact.state === 'loading' ? t('app.feature.needs_exact_loading', { what: label }) : t('app.feature.needs_exact_off', { what: label }))); return; }
      if (!ST.regen?.mesh) { status(t('app.feature.build_solid_first')); return; }
      const want = ctx.FACE_PICKERS.has(type) ? 'face' : 'edge';
      const picked = [...ST.multi, ...(ST.pick && !ST.multi.length ? [ST.pick] : [])].filter((m) => m.kind === want && m.ref && (want === 'edge' || m.ref.name || m.info?.name))
        .filter((m) => type !== 'thread' || (m.info?.type ?? ST.regen?.faces?.[m.face]?.type) === 'cylinder');
      props = ctx.FACE_PICKERS.has(type)
        ? { faces: picked.map((m) => (m.ref.name ? m.ref : faceRef(m.info))), ...props }
        : { edges: picked.map((m) => m.ref), ...props };
      const f = commit(label, () => P.addFeature(ST.part, type, props));
      ST.multi = []; ST.pick = null; ST.view.setHighlight(null);
      ST.sel = { kind: 'feature', id: f.id };
      if (!picked.length) { startPick(f.id); return; }
      renderAll();
      built().then(() => { const r = ST.regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t(want === 'edge' ? 'app.feature.added_edges' : 'app.feature.added_faces', { name: f.name, n: picked.length })); });
      return;
    }
    if (type === 'extrude' || type === 'revolve' || type === 'hole') {
      const sk = chooseSketch(type === 'hole' ? 'points' : 'profile');
      if (!sk) { status(type === 'hole' ? t('app.feature.need_point_sketch') : t('app.feature.need_sketch')); return; }
      props = { sketch: sk, ...props };
      if (type === 'hole') {
        // drill a body that is there: through all when the sketch sits on a face
        props.through = true;
      }
    } else {
      const seedFrom = ST.sel?.kind === 'feature' ? P.featureById(ST.part, ST.sel.id) : null;
      const built = ST.part.features.slice(0, P.builtCount(ST.part)).filter((f) => ctx.SOLID.has(f.type) && ST.regen?.results.get(f.id)?.status === 'ok');
      if (type === 'mirror' && !built.length) { status(t('app.feature.build_solid_first')); return; }
      const seed = seedFrom && ctx.SOLID.has(seedFrom.type) ? seedFrom : built[built.length - 1];
      if (!seed && type !== 'mirror') { status(t('app.feature.build_feature_first')); return; }
      if (type === 'mirror') {
        props = { seeds: seedFrom && ctx.SOLID.has(seedFrom.type) ? [seedFrom.id] : 'body', ...props };
        if (ST.pick?.kind === 'face' && ST.pick.flat) props.plane = ST.pick.ref;
      } else props = { seeds: [seed.id], ...props };
      if (type === 'cpattern') {
        const rev = [...built].reverse().find((f) => f.type === 'revolve');
        if (rev) props.axis = { kind: 'axis', feature: rev.id };
      }
      if (ST.pick?.kind === 'edge' && (type === 'lpattern' || type === 'cpattern')) {
        const d = V.norm(V.sub(ST.pick.b, ST.pick.a));
        props[type === 'lpattern' ? 'dir' : 'axis'] = { kind: 'fixed', o: ST.pick.a, d };
      }
    }
    const first = !ST.regen?.mesh;
    const f = commit(label, () => P.addFeature(ST.part, type, props));
    ST.sel = { kind: 'feature', id: f.id };
    ST.pick = null; ST.view.setHighlight(null);
    renderAll();
    built().then(() => {
      const r = ST.regen.results.get(f.id);
      const what = PARAM_FIELDS[type]?.[ctx.MAIN_NUMBER[type]]?.label;
      status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : what ? t('app.feature.added_type', { name: f.name, what }) : t('app.feature.added', { name: f.name }));
      if (first && ST.regen?.mesh && ST.mode === 'model') ST.view.fit();   // the first solid fills the view (0.5 usability pass)
    });
  }

  function setFeature(id, label, fn) {
    commit(label, () => { const f = P.featureById(ST.part, id); if (f) fn(f); });
    built().then(() => { const r = ST.regen.results.get(id); if (r?.status === 'error') status(t('app.feature.error', { name: P.featureById(ST.part, id).name, error: r.message })); });
  }

  async function deleteSelected() {
    if (ST.mode === 'sketch') { editor.deleteSelection(); return; }
    if (ST.sel?.kind !== 'feature') { status(t('app.feature.select_to_delete')); return; }
    const f = P.featureById(ST.part, ST.sel.id);
    if (!f) return;
    const deps = new Set();
    const walk = (id) => { for (const g of P.dependents(ST.part, id)) if (!deps.has(g.id)) { deps.add(g.id); walk(g.id); } };
    walk(f.id);
    if (deps.size) {
      const names = [...deps].map((id) => P.featureById(ST.part, id).name).join(', ');
      const ch = await ask({ title: t('app.feature.delete_title', { name: f.name }), text: t('app.feature.delete_deps', { n: deps.size, names, name: f.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['delete', t('app.btn.delete_all'), 'pc-btn is-primary']] });
      if (ch !== 'delete') return;
    }
    const names = commit(t('app.undo.delete'), () => P.deleteFeatures(ST.part, [f.id]));
    ST.sel = null;
    renderAll();
    status(t('app.feature.deleted', { names: names.join(', ') }));
  }

  function moveSelected(delta) {
    if (ST.sel?.kind !== 'feature') return;
    const i = P.indexOf(ST.part, ST.sel.id);
    const can = P.canMove(ST.part, ST.sel.id, i + delta);
    if (!can.ok) { status(can.reason); return; }
    commit(t('app.undo.reorder'), () => P.moveFeature(ST.part, ST.sel.id, i + delta));
    status(t(delta < 0 ? 'app.feature.moved_up' : 'app.feature.moved_down', { name: P.featureById(ST.part, ST.sel.id).name }));
    setTimeout(() => ui.tree.querySelector(`[data-id="${ST.sel.id}"]`)?.focus(), 0);
  }

  function rollTo(n) { commit(t('app.undo.roll_back'), () => { ST.part.rollback = n >= ST.part.features.length ? null : n; }); }

  return { newFeature, setFeature, deleteSelected, moveSelected, rollTo };
}
