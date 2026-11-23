/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-ui.js: partcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountSketch(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as P from './part.js';
import { t } from './i18n.js';
import { planeFrame } from './kernel.js';
import * as V from './vec.js';
import * as S from './sketch.js';

export function mountSketch(ctx) {
  const { ST, ui, editor, tokens, status, currentFrame, rebuild, commit, endPick, renderAll, updateTools, focusStage, notInDesign } = ctx;

  // ---------------------------------------------------------------- sketch mode
  function startSketch() {
    if ((!ST.M && !ST.useExact) || notInDesign()) return;
    if (ST.mode === 'sketch' || ST.mode === 'drawing') return;
    if (ST.mode === 'pick') endPick();
    if (ST.sel?.kind === 'feature') {
      const f = P.featureById(ST.part, ST.sel.id);
      if (f?.type === 'sketch') { editSketch(f.id); return; }
      if (f?.type === 'plane' && ST.regen?.refGeom?.get(f.id)) { startSketchOn({ kind: 'ref', feature: f.id }); return; }
    }
    if (ST.pick?.kind === 'face') {
      if (!ST.pick.flat) { status(t('app.sketch.face_curved')); return; }
      startSketchOn(ST.pick.ref);
      return;
    }
    if (ST.sel?.kind === 'plane') { startSketchOn({ kind: 'base', name: ST.sel.name }); return; }
    ST.pendingSketch = true;
    ctx.syncPlanes();
    status(t('app.sketch.pick_plane'), true);
    updateTools();
  }

  function startSketchOn(plane) {
    ST.pendingSketch = false;
    const f = commit(t('app.undo.new_sketch'), () => P.addFeature(ST.part, 'sketch', { plane }));
    editSketch(f.id, true);
  }

  function editSketch(id, fresh = false) {
    const f = P.featureById(ST.part, id);
    if (!f || f.type !== 'sketch' || notInDesign()) return;
    if (ST.regen?.results.get(id)?.status === 'skipped' || (ST.regen && !ST.regen.frames.get(id) && !planeFrame(f.plane, ST.regen, ST.part))) {
      status(t('app.sketch.cannot_open', { reason: ST.regen.results.get(id)?.message || t('app.sketch.plane_gone') }));
      return;
    }
    ST.section?.stop();   // a sketch is drawn on its plane: no cut
    ST.mode = 'sketch';
    ST.editing = id;
    ST.sel = { kind: 'feature', id };
    ST.pick = null; ST.view.setHighlight(null); ST.view.setHover(null);
    rebuild();
    const frame = currentFrame();
    if (!frame) { exitSketch(); status(t('app.sketch.no_plane')); return; }
    ui.sk.hidden = false;
    editor.active = true;
    editor.sel.clear();
    ST.view.setPlanesVisible(false);
    // start at the model's scale, centred on the model (or fitted to the sketch)
    const r = ui.sk.getBoundingClientRect();
    const size = ST.regen?.stats ? Math.max(...ST.regen.stats.bbox.max.map((v, i) => v - ST.regen.stats.bbox.min[i])) : 100;
    const c = ST.regen?.stats ? V.toPlane(frame, ST.regen.stats.bbox.min.map((v, i) => (v + ST.regen.stats.bbox.max[i]) / 2)) : [0, 0];
    editor.view = { cx: c[0], cy: c[1], s: Math.max(0.01, Math.min(r.width, r.height) / (size * 1.6 || 160)) };
    if (!fresh && S.bounds(f.sketch)) editor.fit();
    ST.view.setSketch(frame, editor.view);
    editor.setTool(fresh ? 'line' : 'select');
    ui.skBar.hidden = false;
    ui.skName.textContent = t('app.sketch.name_on', { name: f.name, plane: planeLabel(f.plane) });
    ui.hint.hidden = true;
    showSketchState();
    renderAll();
    focusStage();
    status(fresh ? t('app.sketch.draw_profile') : t('app.sketch.editing', { name: f.name }), true);
  }

  function exitSketch() {
    if (ST.mode !== 'sketch') return;
    editor.hideInput();
    editor.active = false;
    editor.step = null;
    ui.sk.hidden = true;
    editor.draw();
    const id = ST.editing;
    ST.mode = 'model';
    ST.editing = null;
    ST.lastSolve = null;
    ST.view.setSketch(null);
    ui.skBar.hidden = true;
    ui.coords.textContent = '';
    ST.sel = id && P.featureById(ST.part, id) ? { kind: 'feature', id } : null;
    rebuild();
    ST.view.view('iso');
    renderAll();
    status('');
  }

  function showSketchState() {
    if (!ST.lastSolve) return;
    const s = ST.lastSolve;
    const word = { empty: () => t('app.sketch.state_empty'), under: () => t('app.sketch.state_under', { n: s.dof }), full: () => t('app.sketch.state_full'), over: () => t('app.sketch.state_over') }[s.status]?.();
    ui.skState.textContent = word;
    ui.skState.className = 'pc-chip is-' + (s.status === 'empty' ? 'under' : s.status);
  }

  function planeLabel(p) {
    if (!p) return '';
    if (p.kind === 'base') return V.PLANE_NAMES[p.name];
    if (p.kind === 'face') { const f = P.featureById(ST.part, p.feature); return t('app.plane.face_of', { name: f ? f.name : t('app.plane.deleted_feature') }); }
    if (p.kind === 'ref') return P.featureById(ST.part, p.feature)?.name || t('app.plane.deleted_plane');
    return t('app.plane.fixed');
  }

  /** World polylines of a sketch (for showing it in the model). */
  function sketchPolylines(f, color) {
    const frame = ST.regen?.frames.get(f.id);
    if (!frame) return [];
    const sk = f.sketch, out = [];
    const W = (p) => V.toWorld(frame, p[0], p[1]);
    for (const e of sk.entities) {
      let pts = null;
      if (e.type === 'line') pts = [S.pointXY(sk, e.p1), S.pointXY(sk, e.p2)];
      else if (e.type === 'circle') { pts = S.tessCircle(S.pointXY(sk, e.c), e.r, 64); pts.push(pts[0]); }
      else if (e.type === 'arc') pts = S.tessArc(sk, e, 64);
      else if (e.type === 'spline') { try { pts = S.tessSpline(sk, e, 16); } catch { pts = null; } }
      if (pts) out.push({ pts: pts.map(W), dashed: !!e.construction, color });
    }
    for (const p of S.loosePoints(sk)) {
      const s = 0.01 * Math.max(10, ST.view.size);
      out.push({ pts: [W([p.x - s, p.y]), W([p.x + s, p.y])], color }, { pts: [W([p.x, p.y - s]), W([p.x, p.y + s])], color });
    }
    return out;
  }

  function show3DSketches() {
    if (ST.mode === 'sketch' || !ST.regen) { ST.view.setSketchLines([]); ST.view.setRefs([]); return; }
    const used = new Set(ST.part.features.filter((f) => f.sketch && typeof f.sketch === 'string').map((f) => f.sketch));
    const lines = [];
    const T = tokens();
    for (const f of ST.part.features) {
      if (f.type !== 'sketch' || ST.regen.results.get(f.id)?.status !== 'ok') continue;
      const selected = ST.sel?.kind === 'feature' && ST.sel.id === f.id;
      if (selected || !used.has(f.id)) lines.push(...sketchPolylines(f, selected ? T.sel : undefined));
    }
    // reference planes / axes / points and cosmetic threads (design-ui.js)
    const dv = ctx.DUI.refsForView(ST.sel?.kind === 'feature' ? ST.sel.id : null, ST.view.size);
    if (dv.regionSketch) { const sf = P.featureById(ST.part, dv.regionSketch); if (sf) lines.push(...sketchPolylines(sf, T.sel)); }
    lines.push(...dv.lines);
    ST.view.setRefs(dv.refs);
    ST.view.setSketchLines(lines);
  }

  return { startSketch, startSketchOn, editSketch, exitSketch, showSketchState, planeLabel, show3DSketches };
}
