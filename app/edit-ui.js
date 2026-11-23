/* SPDX-License-Identifier: Apache-2.0 */
/**
 * edit-ui.js: partcraft.js's 6 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountEdit(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as C from './clipboard.js';
import * as P from './part.js';
import * as V from './vec.js';
import * as WS from './workspaces.js';
import * as S from './sketch.js';
import { t } from './i18n.js';

export function mountEdit(ctx) {
  const { ST, ui, editor, status, editingFeature, built, commit, sketchCommit, showMarks, deleteSelected, announcePick, renderProps, renderAll, updateTools, editState, readStoredClip, focusStage } = ctx;

  window.addEventListener('storage', (e) => { if (e.key === C.STORAGE_KEY) { ST.clip = readStoredClip(); updateTools(); } });
  function setClip(c) {
    ST.clip = c;
    try { localStorage.setItem(C.STORAGE_KEY, JSON.stringify(c)); } catch { /* too big (a STEP inside) or a private window: this tab keeps it */ }
    updateTools();
  }

  /** Where a pasted / duplicated part goes: beside every part (keeping the copy's own turn), or exactly in place. */
  async function pastePlace(c, inPlace) {
    if (inPlace) return [...c.place];
    let build = null;
    const want = P.toJSON(P.readPart(c.part));
    for (const [pid, p] of Object.entries(ST.asm.parts)) if (ST.asmBuilds.get(pid)?.stats && P.toJSON(P.readPart(p.part)) === want) build = ST.asmBuilds.get(pid);
    if (!build) build = await ctx.buildPart(P.readPart(c.part));
    let minX = 0;
    if (build?.stats) {
      minX = Infinity;
      const b = build.stats.bbox;
      for (const x of [b.min[0], b.max[0]]) for (const y of [b.min[1], b.max[1]]) for (const z of [b.min[2], b.max[2]]) minX = Math.min(minX, V.applyMat(c.place, [x, y, z])[0]);
    }
    return V.matMul(V.translation([ctx.placeBeside() + 20 - minX, 0, 0]), c.place);
  }

  async function editAct(cmd) {
    const st = editState()[cmd];
    if (!st.ok) { status(st.why); return; }
    for (const d of ui.tools.querySelectorAll('details[open]')) d.open = false;
    if (ST.ws !== WS.DESIGN) { ctx.wsCall('command', cmd, ctx.host); return; }
    if (ST.mode === 'drawing') {
      if (cmd === 'delete') ctx.deleteNote();
      else if (cmd === 'select-none') { ST.drawingState.sel = null; ctx.composeShow(); renderProps(); updateTools(); }
      return;
    }
    if (ST.mode === 'sketch') return sketchEdit(cmd);
    if (ST.mode === 'assembly') return asmEdit(cmd);
    return modelEdit(cmd);
  }

  function sketchEdit(cmd) {
    const f = editingFeature();
    const ents = () => [...editor.sel].filter((id) => id !== S.ORIGIN && f.sketch.entities.some((e) => e.id === id));
    if (cmd === 'copy' || cmd === 'cut') {
      const c = C.copySketch(f.sketch, ents());
      setClip(c);
      const drop = c.dropped ? t('app.clip.will_drop', { n: c.dropped }) : '';
      if (cmd === 'cut') {
        const ids = ents();
        sketchCommit(t('app.undo.cut'), (sk) => S.removeEntities(sk, ids));
        editor.sel.clear(); editor.draw(); updateTools();
        status(t('app.clip.sketch_cut', { what: C.describeClip(c), dropped: drop }));
      } else status(t('app.clip.sketch_copied', { what: C.describeClip(c), relations: c.sketch.constraints.length ? t('app.clip.sketch_with_relations', { n: c.sketch.constraints.length }) : '', dropped: drop }));
      focusStage();
      return;
    }
    if (cmd === 'paste') { editor.startPaste(ST.clip, t('app.undo.paste')); updateTools(); focusStage(); return; }
    if (cmd === 'paste-in-place') {
      let made = null;
      sketchCommit(t('app.undo.paste_in_place'), (sk) => { made = C.pasteSketch(sk, ST.clip, [0, 0]); });
      editor.setTool('select');
      editor.sel = new Set(made.ids);
      editor.draw(); renderProps(); updateTools();
      status(t('app.clip.sketch_pasted_in_place', { what: C.describeClip(ST.clip), dropped: ST.clip.dropped ? t('app.clip.sketch_dropped', { n: ST.clip.dropped }) : '' }));
      focusStage();
      return;
    }
    if (cmd === 'duplicate') { editor.startPaste(C.copySketch(f.sketch, ents()), t('app.undo.duplicate')); updateTools(); focusStage(); return; }
    if (cmd === 'delete') { editor.deleteSelection(); return; }
    if (cmd === 'select-all') { editor.setTool('select'); editor.sel = new Set(f.sketch.entities.map((e) => e.id)); editor.draw(); renderProps(); updateTools(); status(t('app.sketch.selected_n', { n: f.sketch.entities.length })); return; }
    if (cmd === 'select-none') { editor.setTool('select'); editor.sel.clear(); editor.draw(); renderProps(); updateTools(); }
  }

  async function modelEdit(cmd) {
    if (cmd === 'delete') return deleteSelected();
    if (cmd === 'select-none') { ST.pick = null; ST.sel = null; ST.multi = []; ST.pendingSketch = false; showMarks(); ST.view.setHighlight(null); ST.view.setPlaneState(null, null); renderAll(); announcePick(); return; }
    if (cmd === 'paste' || cmd === 'paste-in-place') {
      let out = null;
      try { out = commit(cmd === 'paste' ? t('app.undo.paste') : t('app.undo.paste_in_place'), () => C.pasteFeatures(ST.part, ST.clip)); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
      const last = out.features[out.features.length - 1];
      ST.sel = { kind: 'feature', id: last.id };
      renderAll();
      await built();
      const bad = out.features.map((g) => ST.regen.results.get(g.id)).find((r) => r?.status === 'error');
      const names = out.features.map((g) => g.name).join(t('app.edge.and_sep'));
      status((ST.clip.from && ST.clip.from !== ST.part.name ? t('app.clip.features_pasted_from', { names, from: ST.clip.from }) : t('app.clip.features_pasted', { names })) + (out.note ? ' ' + out.note : '') + ' ' + (bad ? bad.message : t('app.clip.change_on_right')), true);
      return;
    }
    let c;
    try { c = C.copyFeature(ST.part, ST.sel.id); } catch (err) { status(err.message); return; }
    if (cmd === 'copy') { setClip(c); status(t('app.clip.feature_copied', { what: C.describeClip(c) })); return; }
    if (cmd === 'cut') { setClip(c); await deleteSelected(); return; }
    if (cmd === 'duplicate') {
      const out = commit(t('app.undo.duplicate'), () => C.pasteFeatures(ST.part, c));
      ST.sel = { kind: 'feature', id: out.features[out.features.length - 1].id };
      renderAll();
      await built();
      status(t('app.clip.feature_duplicated', { names: out.features.map((g) => g.name).join(t('app.edge.and_sep')) }), true);
    }
  }

  async function asmEdit(cmd) {
    if (cmd === 'delete') return ctx.asmDelete();
    if (cmd === 'select-none') { ST.asmSel = null; ST.jointPick = null; renderAll(); ctx.highlightAsm(); return; }
    if (cmd === 'copy' || cmd === 'cut') {
      const c = C.copyInstance(ST.asm, ST.asmSel.id);
      setClip(c);
      if (cmd === 'cut') { await ctx.asmDelete(); return; }
      status(t('app.clip.part_copied', { name: ctx.instById(ST.asmSel.id).name }));
      return;
    }
    const inPlace = cmd === 'paste-in-place';
    const c = cmd === 'duplicate' ? C.copyInstance(ST.asm, ST.asmSel.id) : ST.clip;
    let place;
    try { place = await pastePlace(c, inPlace); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
    if (ST.mode !== 'assembly' || !ST.asm) return;
    let inst;
    try { inst = ctx.commitAsm({ duplicate: () => t('app.undo.duplicate'), paste: () => t('app.undo.paste'), 'paste-in-place': () => t('app.undo.paste_in_place') }[cmd](), () => C.pasteInstance(ST.asm, c, place)); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
    ST.asmSel = { kind: 'inst', id: inst.id };
    renderAll(); ctx.highlightAsm();
    status(t(inPlace ? (cmd === 'duplicate' ? 'app.clip.part_duplicated_in_place' : 'app.clip.part_pasted_in_place') : (cmd === 'duplicate' ? 'app.clip.part_duplicated' : 'app.clip.part_pasted'), { name: inst.name }));
  }

  return { editAct, modelEdit };
}
