/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-ui.js: partcraft.js's 1 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountInput(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as WS from './workspaces.js';
import * as P from './part.js';

export function mountInput(ctx) {
  const { ST, $, ui, touch, editor, status, showMarks, endPick, startSketch, exitSketch, show3DSketches, deleteSelected, paramsUI, DUI, BUI, SH, renderProps, syncPlanes, renderAll, updateTools, run, undoRedo, editAct, highlightAsm, asmStartJoint, asmDelete, drawingTool, composeShow, leaveDrawing, deleteNote, commitDrawing, savePart, host, wsCall } = ctx;

  // ---------------------------------------------------------------- keys
  // ---------------------------------------------------------------- touch (0.4 S.8)
  // Shown once a finger touches the page, hidden again by a mouse: Add (sticky Shift for sketch selections), Done (finish a
  // line chain, a right-click's job) and Esc (the Esc key, sent to the view in use). A long press does Done / Add for one tap.
  function showTouchBar() {
    const bar = $('[data-touchbar]');
    if (!bar) return;
    bar.hidden = !touch.on;
    if (!touch.on) return;
    const inSk = ST.mode === 'sketch';
    const btn = (k) => bar.querySelector(`[data-touch="${k}"]`);
    btn('add').hidden = !(inSk && editor.tool === 'select');
    if (btn('add').hidden && touch.add) touch.add = false;
    btn('add').setAttribute('aria-pressed', String(touch.add));
    btn('done').hidden = !(inSk && editor.tool !== 'select' && editor.step);
  }
  document.addEventListener('pointerdown', (e) => {
    const on = e.pointerType === 'touch' ? true : e.pointerType === 'mouse' ? false : touch.on;
    if (on === touch.on) return;
    touch.on = on;
    if (!on) touch.add = false;
    showTouchBar();
    if (on) status(t('touch.long_press'));
  }, true);
  // the editor's step changes on taps that call no updateTools: keep Done in step while a finger is in use
  for (const ev of ['pointerup', 'pointercancel']) ui.sk.addEventListener(ev, () => { if (touch.on) setTimeout(showTouchBar, 0); });
  $('[data-touchbar]')?.addEventListener('click', (e) => {
    const b = e.target.closest('[data-touch]');
    if (!b) return;
    const k = b.dataset.touch;
    if (k === 'add') { touch.add = !touch.add; showTouchBar(); return; }
    if (k === 'done') { if (ST.mode === 'sketch' && editor.step) editor.finishStep(); showTouchBar(); updateTools(); return; }
    if (k === 'esc') {
      const target = ST.mode === 'sketch' ? ui.sk : ST.mode === 'drawing' ? (ui.sheet.querySelector('svg') || ui.sheet) : ui.gl;
      target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true, cancelable: true }));
      setTimeout(showTouchBar, 0);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    const tgt = e.target;
    const typing = tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.tagName === 'SELECT' || tgt.isContentEditable);
    if (document.querySelector('dialog[open]')) return;
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
      if (k === 'z' && !e.shiftKey) { if (typing && tgt !== ui.dimInput) return; e.preventDefault(); undoRedo(true); return; }
      if (k === 'y' || (k === 'z' && e.shiftKey)) { if (typing && tgt !== ui.dimInput) return; e.preventDefault(); undoRedo(false); return; }
      if (k === 's') { e.preventDefault(); if (ST.ws !== WS.DESIGN && wsCall('command', 'save', host) === true) return; savePart(); return; }
      if (k === 'o') { e.preventDefault(); run('open'); return; }
      const EDIT_KEYS = { c: 'copy', x: 'cut', v: e.shiftKey ? 'paste-in-place' : 'paste', d: 'duplicate', a: 'select-all' };
      if (EDIT_KEYS[k]) {
        if (typing) return;   // text fields keep their own copy and paste
        // text selected on the page (outside the views) is copied by the browser as usual
        const txt = String(window.getSelection?.() || '');
        if ((k === 'c' || k === 'x') && txt.trim() && tgt !== ui.gl && tgt !== ui.sk) return;
        e.preventDefault();
        editAct(EDIT_KEYS[k]);
      }
      return;
    }
    if (typing) return;
    // 0.5 usability pass: with a feature selected, typing a number starts editing its main value (an Extrude's depth, a Hole's
    // diameter …) in the panel; Enter sets it. Digits are no shortcut anywhere else
    if (/^[0-9.]$/.test(e.key) && !e.altKey && ST.mode === 'model' && ST.ws === WS.DESIGN && ST.sel?.kind === 'feature') {
      const f = P.featureById(ST.part, ST.sel.id), main = f && ctx.MAIN_NUMBER[f.type];
      const inp = main && ui.props.querySelector(`[data-param-key="${f.id}.${main}"]`);
      if (inp && !inp.disabled) {
        e.preventDefault(); inp.focus(); inp.value = e.key; inp.setSelectionRange(1, 1); status(t('app.feature.type_main', { name: f.name }));
        // FX.252: the box now belongs to the shared property grid, which sets a value on "change". A browser sends no "change" on Enter for a
        // value put there by code (the first digit), so a single typed digit was never set. Enter in this box now says "change" itself.
        if (!inp.ccEnterSets) { inp.ccEnterSets = true; inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); inp.dispatchEvent(new Event('change', { bubbles: true })); } }); }
        return;
      }
    }
    if (tgt && tgt.closest && tgt.closest('.pc-tree') && (e.altKey || e.key.startsWith('Arrow'))) return;
    if (ST.stackup?.active && ST.stackup.keydown(e)) { e.preventDefault(); return; }
    if (ST.motion?.active && ST.motion.keydown(e)) { e.preventDefault(); return; }
    if (ST.contactStudy?.active && ST.contactStudy.keydown(e)) { e.preventDefault(); return; }
    if (ST.measure?.active && ST.measure.keydown(e)) { e.preventDefault(); return; }
    if (ST.section?.active && ST.section.keydown(e)) { e.preventDefault(); return; }
    if (ST.draft?.active && ST.draft.keydown(e)) { e.preventDefault(); return; }
    if (ST.mode === 'assembly' && ST.asmTools?.keydown(e)) { e.preventDefault(); return; }
    if (ST.ws !== WS.DESIGN) {
      if (wsCall('keydown', e, host) === true) { e.preventDefault(); return; }
      if (e.key === 'Delete' || e.key === 'Backspace' || (k === 's' && !e.altKey && !e.shiftKey)) return;   // Design's keys
    }
    if (k === 'm' && !e.altKey && !e.shiftKey && ST.mode !== 'sketch' && ST.mode !== 'drawing') { e.preventDefault(); run('view-measure'); return; }
    if (k === 'x' && !e.altKey && !e.shiftKey && ST.mode !== 'sketch' && ST.mode !== 'drawing') { e.preventDefault(); run('view-section'); return; }
    if (ST.mode === 'drawing') {
      if (e.key === 'Escape') { e.preventDefault(); if (ST.drawingState.tool) drawingTool(ST.drawingState.tool); else if (ST.drawingState.sel) { ST.drawingState.sel = null; composeShow(); renderProps(); } else leaveDrawing(); return; }
      if ((e.key === 'Delete' || e.key === 'Backspace') && ST.drawingState.sel) { e.preventDefault(); deleteNote(); return; }
      if (ST.drawingState.sel && !e.shiftKey && e.key.startsWith('Arrow')) {
        e.preventDefault();
        const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0;
        commitDrawing(t('app.undo.nudge_note'), (d) => { const q = d.notes.find((x) => x.id === ST.drawingState.sel); if (q) q.off = [+(q.off[0] + dx).toFixed(2), +(q.off[1] + dy).toFixed(2)]; });
        return;
      }
      if (k === 'f' && !e.altKey) { e.preventDefault(); ST.sheetView.fit(); return; }
      return;
    }
    if (ST.mode === 'pick') {
      if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); endPick(); return; }
      if (k === 'f' && !e.altKey) { e.preventDefault(); ST.view.fit(); return; }
      if (tgt === ui.gl && e.key.startsWith('Arrow')) { e.preventDefault(); const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0; if (e.shiftKey) ST.view.panBy(-dx * 0.1, -dy * 0.1); else ST.view.orbitBy(-dx * 15, dy * 15); }
      return;
    }
    if (ST.mode === 'sketch') {
      if (editor.key(e)) { e.preventDefault(); updateTools(); return; }
      if (e.key === 'Escape') { e.preventDefault(); exitSketch(); return; }
      if (k === 'f' && !e.shiftKey) { e.preventDefault(); editor.fit(); }
      return;
    }
    if (ST.mode === 'assembly') {
      if (e.key === 'Escape') { if (ST.jointPick) { ST.jointPick = null; highlightAsm(); renderAll(); status(t('app.joint.cancelled')); } else if (ST.asmSel) { ST.asmSel = null; renderAll(); highlightAsm(); } return; }
      if (e.key === 'Delete' || (e.key === 'Backspace' && ST.asmSel)) { e.preventDefault(); asmDelete(); return; }
      if (k === 'f' && !e.altKey) { e.preventDefault(); ST.view.fit(); return; }
      if (k === 'j') { e.preventDefault(); asmStartJoint(); return; }
    }
    if (e.key === 'Escape') {
      if (ST.handles?.cancel()) return;   // a handle being dragged goes back (0.6 PU.2)
      if (DUI.cancel()) { show3DSketches(); return; }
      if (SH.cancel()) return;
      if (BUI.cancel()) return;
      if (ST.pendingSketch) { ST.pendingSketch = false; status(''); syncPlanes(); updateTools(); return; }
      if (ST.pick || ST.sel || ST.multi.length) { ST.pick = null; ST.sel = null; ST.multi = []; showMarks(); ST.view.setHighlight(null); ST.view.setPlaneState(null, null); renderAll(); }
      return;
    }
    if (e.key === 'Delete' || (e.key === 'Backspace' && ST.sel)) { e.preventDefault(); deleteSelected(); return; }
    if (paramsUI.key(e)) { e.preventDefault(); return; }   // [ ] End: rollback bar back / forward / to the end
    if (k === 'f' && !e.altKey) { e.preventDefault(); ST.view.fit(); return; }
    if (tgt === ui.gl && e.key.startsWith('Arrow')) {
      e.preventDefault();
      const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0;
      if (e.shiftKey) ST.view.panBy(-dx * 0.1, -dy * 0.1); else ST.view.orbitBy(-dx * 15, dy * 15);
      return;
    }
    if (tgt === ui.gl && (e.key === '+' || e.key === '=' || e.key === '-')) { e.preventDefault(); ST.view.zoomBy(e.key === '-' ? 1 / 1.25 : 1.25); return; }
    if (k === 's' && !e.altKey && !e.shiftKey) { e.preventDefault(); startSketch(); }
  });

  return { showTouchBar };
}
