/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-sheet-ui.js: partcraft.js's 24 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountDrawingSheet(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { mountDrawingExport } from './drawing-export-ui.js';

export function mountDrawingSheet(ctx) {
  const { ST, ui, hist, editor, settings, looksLikePad, status, exact, exactOff, named, exactWhy, editingFeature, built, keepFocus, commit, endPick, exitSketch, field, numInput, textInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, fileBase, openText, confirmDiscard, ask, focusStage, notInDesign, f3 } = ctx;

  // ---------------------------------------------------------------- drawing sheet
  // The views come from OpenCascade's hidden-line removal (exact kernel) or from the mesh (fallback);
  // the sheet is composed here (drawing.js) with the part's notes (gdt.js) and shown as SVG (sheetview.js).
  ST.sheetView = null;
  // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js)
  // three views, each moved the way its own wheel and drags move it: the sketch canvas (SketchEditor.zoomAt / setView / fit), the drawing sheet
  // (SheetView.zoomAt / panBy / fit; its host is in the page from the start, hidden until a drawing opens; nothing moves before the sheet is made) and the 3D view (OrbitControls' own steps, so zoom-to-cursor and the
  // 'change' → render path are the wheel's and the drag's). The sketch canvas and the sheet lie over the 3D canvas, so a move that lands on the
  // 3D view while one of them is open goes to it (the 3D camera is locked to the sketch then anyway).
  const skDev = {
    el: ui.sk, kind: '2d',
    pan(dx, dy) { if (!editor.active) return; const v = editor.view; editor.setView({ s: v.s, cx: v.cx - dx / v.s, cy: v.cy + dy / v.s }); },
    zoom(f, x, y) { if (!editor.active || !(f > 0)) return; const r = ui.sk.getBoundingClientRect(); editor.zoomAt(x ?? r.width / 2, y ?? r.height / 2, f); },
    fit() { if (editor.active) editor.fit(); },
  };
  const sheetDev = {
    el: ui.sheet, kind: '2d',
    pan(dx, dy) { ST.sheetView?.panBy(dx, dy); },
    zoom(f, x, y) { if (!ST.sheetView || !(f > 0)) return; const r = ui.sheet.getBoundingClientRect(); ST.sheetView.zoomAt(f, r.left + (x ?? r.width / 2), r.top + (y ?? r.height / 2)); },
    fit() { ST.sheetView?.fit(); },
  };
  const over3d = () => (ST.mode === 'sketch' && editor.active ? skDev : ST.mode === 'drawing' && ST.sheetView && !ui.sheet.hidden ? sheetDev : null);
  (window.ccViews ||= []).push(skDev, sheetDev, {
    el: ui.gl, kind: '3d',
    pan(dx, dy) { const o = over3d(); if (o) { o.pan(dx, dy); return; } const c = ST.view.controls; if (!c.enabled || ST.view.sketchFrame) return; c._pan(dx, dy); c.update(); },
    orbit(dx, dy) {
      if (over3d() || ST.view.sketchFrame) return;
      const c = ST.view.controls, h = Math.max(ui.gl.clientHeight, 1);
      if (!c.enabled) return;
      c._rotateLeft(2 * Math.PI * dx * c.rotateSpeed / h); c._rotateUp(2 * Math.PI * dy * c.rotateSpeed / h);   // as _handleMouseMoveRotate
      c.update();
    },
    zoom(f, x, y) {
      const o = over3d(); if (o) { o.zoom(f, x, y); return; }
      const c = ST.view.controls; if (!c.enabled || ST.view.sketchFrame || !(f > 0)) return;
      const r = ui.gl.getBoundingClientRect();
      c._updateZoomParameters(r.left + (x ?? r.width / 2), r.top + (y ?? r.height / 2));   // zoomToCursor, as the wheel
      c._dollyIn(1 / f); c.update();
    },
    fit() { const o = over3d(); if (o) o.fit(); else ST.view.fit(); },
  });
  const { enterDrawing, leaveDrawing, drawingRefresh, composeShow, commitDrawing, drawingTool, drawingClick, renderDrawingProps, deleteNote, exportMesh, checkPrint, exportIfc, exportUsd, exportDrawing, exportForSw, exportStep, exportDxf, exportSet, importStep, importKicadBoard, importMesh } = mountDrawingExport({
    ui, hist, settings, looksLikePad, status, exact, exactOff, named, exactWhy, editingFeature, built, keepFocus, commit, endPick, exitSketch, field, numInput, textInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, openText, confirmDiscard, ask, focusStage, notInDesign,
    get part() { return ST.part; }, set part(v) { ST.part = v; },
    get regen() { return ST.regen; },
    get mode() { return ST.mode; }, set mode(v) { ST.mode = v; },
    get section() { return ST.section; },
    get drawingState() { return ST.drawingState; }, set drawingState(v) { ST.drawingState = v; },
    get pick() { return ST.pick; }, set pick(v) { ST.pick = v; },
    get multi() { return ST.multi; }, set multi(v) { ST.multi = v; },
    get view() { return ST.view; },
    get sheetView() { return ST.sheetView; }, set sheetView(v) { ST.sheetView = v; },
    get useExact() { return ST.useExact; },
    get M() { return ST.M; },
    get dirty() { return ST.dirty; }, set dirty(v) { ST.dirty = v; },
    get fileBase() { return fileBase; },
    get asmTools() { return ST.asmTools; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
    get f3() { return f3; },
  });

  return { drawingRefresh, leaveDrawing, exportDxf, renderDrawingProps, checkPrint, exportMesh, exportIfc, exportUsd, exportStep, exportForSw, enterDrawing, drawingTool, exportDrawing, deleteNote, composeShow, importStep, importMesh, importKicadBoard, commitDrawing, exportSet, drawingClick };
}
