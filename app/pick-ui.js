/* SPDX-License-Identifier: Apache-2.0 */
/**
 * pick-ui.js: partcraft.js's 9 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountPick(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { faceRefAt } from './kernel.js';
import * as V from './vec.js';
import { edgeRef, faceRef, findEdge, findFace } from './brep.js';
import * as P from './part.js';
import { t } from './i18n.js';

export function mountPick(ctx) {
  const { ST, status, exact, named, exactWhy, rebuild, commit, renderAll, focusStage, notInDesign } = ctx;

  // ---------------------------------------------------------------- 3D picking
  function isFlatFace(hit) {
    if (!hit || hit.kind !== 'face') return false;
    if (named() && hit.face !== undefined) return ST.regen.faces[hit.face]?.type === 'plane';
    if (hit.feature && ST.regen && faceRefAt(ST.regen, hit.feature, hit.normal, hit.point).kind === 'face') return true;
    // a facet of a curved surface has at least one smooth neighbour
    const mesh = ST.regen?.mesh;
    if (!mesh) return false;
    const grp = ST.view.planarGroups();
    const g = grp.groups[hit.group];
    const inG = new Set(g.tris);
    const I = mesh.indices;
    const key = (a, b) => (a < b ? a + ',' + b : b + ',' + a);
    const edgeTri = new Map();
    for (let t = 0; t < I.length / 3; t++) for (let k = 0; k < 3; k++) { const kk = key(I[t * 3 + k], I[t * 3 + (k + 1) % 3]); if (!edgeTri.has(kk)) edgeTri.set(kk, []); edgeTri.get(kk).push(t); }
    for (const t of g.tris) for (let k = 0; k < 3; k++) {
      for (const o of edgeTri.get(key(I[t * 3 + k], I[t * 3 + (k + 1) % 3])) || []) {
        if (inG.has(o)) continue;
        const n2 = grp.groups[grp.faceOf[o]].n;
        if (V.dot(n2, g.n) > Math.cos(20 * Math.PI / 180)) return false;
      }
    }
    return true;
  }

  /** Hover / highlight of a whole exact edge (all its segments), else the one segment. */
  const edgeHover = (h) => (named() && h.edge !== undefined ? { kind: 'edges', edges: [h.edge] } : h);
  function edgePick(i) {
    const e = ST.regen.edges[i];
    return { kind: 'edge', a: e.a, b: e.b, edge: i, ref: edgeRef(e), info: e };
  }
  function facePickAt(fi) {
    const f = ST.regen.faces[fi];
    return f ? { kind: 'face', face: fi, ref: faceRef(f), info: f } : null;
  }
  /** Marks in the view: Shift-picked edges/faces, and the references of the feature being picked for. */
  function showMarks() {
    if (!named()) { ST.view.setMarks(null); return; }
    const edges = [], faces = [];
    for (const m of ST.multi) (m.kind === 'edge' ? edges : faces).push(m.kind === 'edge' ? m.edge : m.face);
    if (ST.mode === 'pick') {
      const f = P.featureById(ST.part, ST.editing);
      if (f?.edges) for (const r of f.edges) { const i = findEdge(ST.regen.edges, r); if (i >= 0) edges.push(i); }
      if (f?.faces) for (const r of f.faces) { const i = findFace(ST.regen.faces, r); if (i >= 0) faces.push(i); }
    }
    ST.view.setMarks(edges.length || faces.length ? { edges, faces } : null);
  }

  /** The selected feature, when it takes references picked in the view (patterns, mirror). */
  function refFeature() {
    if (ST.sel?.kind !== 'feature') return null;
    const f = P.featureById(ST.part, ST.sel.id);
    return f && ['lpattern', 'cpattern', 'mirror'].includes(f.type) ? f : null;
  }

  // ---------------------------------------------------------------- picking references (fillet / chamfer / shell)
  /** Show the part as it is before the feature, so its edges or faces can be clicked on and off. */
  function startPick(id) {
    const f = P.featureById(ST.part, id);
    if (!f || !ctx.PICKERS.has(f.type) || notInDesign()) return;
    if (!ST.useExact && !(ctx.PICK_ON_MESH.has(f.type) && named())) { status(exactWhy(t('kernel.what.pick'), exact.state === 'loading' ? t('app.pick.needs_exact_loading') : t('app.pick.needs_exact_off'))); return; }
    if (ST.mode === 'sketch') ctx.exitSketch();
    ST.mode = 'pick'; ST.editing = id; ST.sel = { kind: 'feature', id };
    ST.pick = null; ST.multi = []; ST.view.setHighlight(null);
    rebuild(); renderAll();
    status(f.type === 'thread' ? t('thread.ui.pick_start', { name: f.name }) : f.type === 'draft' ? t('app.pick.start_draft', { name: f.name }) : f.type === 'shell' ? t('app.pick.start_shell', { name: f.name }) : t('app.pick.start_edges', { name: f.name }), true);
    focusStage();
  }
  function endPick() {
    if (ST.mode !== 'pick') return;
    const id = ST.editing;
    ST.mode = 'model'; ST.editing = null;
    ST.sel = id && P.featureById(ST.part, id) ? { kind: 'feature', id } : null;
    ST.view.setHover(null);
    rebuild(); renderAll(); status('');
  }
  function pickRef(h) {
    const f = P.featureById(ST.part, ST.editing);
    if (!f || !named()) return;
    if (ctx.FACE_PICKERS.has(f.type)) {
      if (!h || h.kind !== 'face' || h.face === undefined) { status(t('app.pick.click_face'), true); return; }
      const fc = ST.regen.faces[h.face];
      if (!fc?.name) { status(t('app.pick.face_unnamed'), true); return; }
      if (f.type === 'thread' && fc.type !== 'cylinder') { status(t('thread.ui.pick_round'), true); return; }
      const i = f.faces.findIndex((r) => findFace(ST.regen.faces, r) === h.face);
      commit(i >= 0 ? t('app.undo.drop_face') : t('app.undo.add_face'), () => { const g = P.featureById(ST.part, f.id); if (i >= 0) g.faces.splice(i, 1); else g.faces.push(faceRef(fc)); });
      status(t('app.pick.faces_open', { name: f.name, n: P.featureById(ST.part, f.id).faces.length }), true);
      return;
    }
    if (!h || h.kind !== 'edge' || h.edge === undefined) { status(t('app.pick.click_edge'), true); return; }
    const e = ST.regen.edges[h.edge];
    const i = f.edges.findIndex((r) => findEdge(ST.regen.edges, r) === h.edge);
    commit(i >= 0 ? t('app.undo.drop_edge') : t('app.undo.add_edge'), () => { const g = P.featureById(ST.part, f.id); if (i >= 0) g.edges.splice(i, 1); else g.edges.push(edgeRef(e)); });
    status(t('app.pick.edges_count', { name: f.name, n: P.featureById(ST.part, f.id).edges.length }), true);
  }

  return { isFlatFace, edgeHover, edgePick, facePickAt, showMarks, refFeature, startPick, endPick, pickRef };
}
