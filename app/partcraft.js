/* SPDX-License-Identifier: Apache-2.0 */
/**
 * partcraft.js — the PartCraft part modeler in the browser. Wires the page (ui.inc) to the part
 * history (part.js), the solid kernel (kernel.js on manifold-3d), the 3D view (view3d.js) and the
 * sketch editor (sketchview.js).
 *
 * Model: click a plane or a flat face, Sketch; draw and constrain; Exit; Extrude / Revolve / Hole /
 * patterns / Mirror from the toolbar. The history on the left edits, suppresses, rolls back,
 * reorders (Alt+↑/↓ where the history allows) and deletes features; the right panel edits the
 * selected feature's numbers and its sketch's driving dimensions — every change rebuilds the part.
 * A failing feature is marked in the history with its message; the rest still builds.
 * Files: Save/Open the part as JSON (`.partcraft.json`, versioned); Export STL, 3MF, faceted STEP,
 * and DXF of a sketch or a flat face. Everything stays on this computer.
 * Keys: Ctrl+Z/Y/S/O, Delete, F fit, Esc; in a sketch L R C A P N F D Q S (see sketchview.js).
 * Edit (toolbar Edit + its More menu; clipboard.js): Ctrl+C / X / V, Ctrl+Shift+V (paste in place), Ctrl+D (duplicate),
 * Delete, Ctrl+A (select all, in a sketch), Esc (select none). What they act on follows the context: sketch geometry
 * in an open sketch (paste follows the pointer; relations inside the copy come along, ties to other geometry are
 * dropped and counted), a sketch or a sketch-based feature (with its sketch) in the history, a part in an assembly
 * (same part, new placement beside the others). Each is one undo step. The clipboard is kept in memory and in
 * localStorage "partcraft.clipboard" (another tab can paste) and is checked like a file when read back.
 * Settings › PartCraft (settings.inc; localStorage "partcraft.settings"): orbit button, scrolling, relations while sketching, dimension as you draw (0.6 PU.1), corner indicator,
 *   solver threads ('auto' = hardwareConcurrency − 1 capped, or a count; pool.js — only on a cross-origin isolated page)
 *   (view cube | axis icon | none; viewcube.js + viewcube-three.js, byte-identical copies of ModelCraft's).
 * Workspaces (workspaces.js; the switcher starts the toolbar): Design is this file; Form, Simulation, Generative and
 * Manufacture are ws-<id>.js, imported below, working on the same part through `host` (docs/apps/partcraft-workspaces.md).
 * `window.partcraft` exposes the state for tests and the console.
 */
import Module from 'manifold-3d';
import { View3D, THREE } from './view3d.js';
import { SketchEditor } from './sketchview.js';
import * as S from './sketch.js';
import { solveSketch } from './solver.js';
import * as P from './part.js';
import { regenerate, faceRefAt, planeFrame, MESH_BUILT } from './kernel.js';
import * as X from './export.js';
import { partIfc } from './ifc-export.js';
import { evaluateVars } from './params.js';
import { faceLoops2D } from './faces.js';
import { composeSheet, meshViews, toPdf as drawingPdf, scaleLabel, sheetLabel, nextRevision, partHoles } from './drawing.js';
import { MATERIALS, presetOf } from './bom.js';
import { ExactKernel, exactKernelUrl } from './exact-client.js';
import { refForName, findEdge, findFace, edgeRef, faceRef, nameFeatures } from './brep.js';
import * as G from './gdt.js';
import { SheetView } from './sheetview.js';
import * as A from './assembly.js';
import * as V from './vec.js';
import * as C from './clipboard.js';
import { el, fillDl, swapChildren } from './ui-util.js';
import { mountParams } from './params-panel.js';
import { installDesignUI, DESIGN_TYPES, DESIGN_ICONS, EXTRUDE_END_OPTIONS, HOLE_TYPE_OPTIONS } from './design-ui.js';
import { installSurfaceUI, SURFACE_TYPES, SURFACE_MENU, SURFACE_ICONS } from './surface-ui.js';
import { installBodiesUI, BODY_TYPES, BODY_MENU, BODY_ICONS } from './bodies-ui.js';
import { installSheetUI, SHEET_TYPES, SHEET_MENU, SHEET_ICONS } from './sheet-ui.js';
import { installRibUI, RIB_TYPES, RIB_MENU, RIB_ICONS } from './rib-ui.js';
import { threadNotes } from './threads.js';
import { PARAM_FIELDS, linkOf } from './params-part.js';
import { treeValue } from './tree-value.js';   // 0.6 PU.5: the main value in a history row
import * as FA from './face-actions.js';   // 0.6 PU.3: Extrude from it, Cut into it, Hole here
import * as HM from './handle-math.js';   // 0.6 PU.2: drag handles on features
import { FeatureHandles } from './handles.js';
import { startAddons } from './addons/partcraft-api.js';
import { installThreadUI, THREAD_ICONS } from './thread-ui.js';
import { hiddenGeometry } from './bodies.js';
import * as WS from './workspaces.js';
import { computeWorker } from './compute-worker.js';
import { AUTO_THREADS, MAX_THREADS, isolated as threadsIsolated } from './pool.js';
import { createMeasure } from './measure-ui.js';
import { createStackup } from './stackup-ui.js';
import { createSection } from './section-ui.js';
import { createDraft } from './draft-ui.js';
import { faceSection } from './section.js';
import { t, has, locale } from './i18n.js';
import { createAsmTools } from './asm-ui.js';
// Workspaces (docs/apps/partcraft-workspaces.md): one import line per ws-<id>.js; each registers itself.
import './ws-form.js';
import './ws-simulation.js';
import './ws-generative.js';
import './ws-manufacture.js';
import { dockEditor, undockEditor } from './ws-script.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import { threeCubeOptions } from './viewcube-three.js';
import { Autosave } from "./app-autosave.js";
import { getHost } from "./host.js";

const root = document.querySelector('[data-partcraft]');
if (root) init(root);

const ICONS = { sketch: 'pencil-square', extrude: 'box-arrow-up', revolve: 'arrow-repeat', hole: 'record-circle', lpattern: 'grid-3x2-gap', cpattern: 'arrow-clockwise', mirror: 'symmetry-vertical', fillet: 'app', chamfer: 'hexagon', shell: 'box2', import: 'box-arrow-in-down', ...DESIGN_ICONS, ...SURFACE_ICONS, ...BODY_ICONS, ...SHEET_ICONS, ...RIB_ICONS, ...THREAD_ICONS };
const SOLID = new Set(['extrude', 'revolve', 'hole', 'lpattern', 'cpattern', 'mirror', 'import', 'sweep', 'loft']);
const PICKERS = new Set(['fillet', 'chamfer', 'shell', 'draft', 'thread']);
/** Each feature's main number, typed straight after selecting it (0.5 usability pass). */
const MAIN_NUMBER = { extrude: 'depth', revolve: 'angle', hole: 'd', lpattern: 'count', cpattern: 'count', fillet: 'r', chamfer: 'd', shell: 't', draft: 'angle', rib: 't', plane: 'd', thread: 'length' };
const FACE_PICKERS = new Set(['shell', 'draft', 'thread']);
/** Pickers whose faces or edges the mesh kernel names (K.2b) and builds (K.4, K.5; the thread, 0.5 WL.29). */
const PICK_ON_MESH = new Set([...MESH_BUILT, 'thread']);   // pickers whose references are faces (the others take edges)   // features whose references are picked in the view
const DESIGN_GROUPS = ['sketch', 'features', 'drawing', 'assembly'];   // toolbar groups only the Design workspace shows
const f3 = (v) => V.fmt(v, 3);
const ASM_EXPORTS = ['export-print', 'export-stl', 'export-3mf', 'export-step', 'export-step214', 'export-drawing', 'export-bom', 'export-ifc', 'export-nest'];   // what an assembly exports as a whole (asm-ui.js)

function init(root) {
  const $ = (s) => root.querySelector(s);
  const ui = {
    tools: $('.pc-tools'), tree: $('[data-tree]'), facts: $('[data-facts]'), partName: $('[data-part-name]'),
    props: $('[data-props]'), propsH: $('[data-props-h]'), gl: $('[data-gl]'), sk: $('[data-sketch-canvas]'), dimInput: $('[data-dim-input]'),
    hint: $('[data-hint]'), drop: $('[data-drop]'), busy: $('[data-busy]'), busyText: $('[data-busy-text]'),
    skBar: $('[data-sketch-bar]'), skState: $('[data-sketch-state]'), skName: $('[data-sketch-name]'),
    coords: $('[data-coords]'), status: $('[data-status]'), build: $('[data-build-state]'), file: $('[data-file]'), insertFile: $('[data-insert-file]'), exportMenu: $('[data-export-menu]'),
    sheet: $('[data-sheet]'), kernel: $('[data-kernel]'), ws: $('[data-workspace]'),
  };

  let M = null;
  let part = P.newPart();
  let regen = null;
  const hist = new P.History();
  let dirty = false;
  let sel = null;             // { kind:'feature', id } | { kind:'plane', name }
  let pick = null;            // picked geometry in the 3D view (face / edge)
  let mode = 'model';         // 'model' | 'sketch' | 'pick' (references of a fillet/chamfer/shell) | 'drawing' | 'assembly'
  let multi = [];             // picks added with Shift (edges or faces), for Fillet / Chamfer / Shell
  let drawingState = null;    // { views, key, sheet, tool, sel } in drawing mode
  let editing = null;         // sketch feature id while a sketch is open
  let lastSolve = null;
  let pendingSketch = false;  // Sketch pressed with nothing picked: the next plane/face pick starts it
  // assembly (mode 'assembly'): its own document, history and selection
  let addons = null;   // PartCraft's own add-on API 1.0 (addons/partcraft-api.js; 0.5 AO.7, wired by `part`)
  let asm = null, asmBuilds = new Map(), asmPlace = null, asmSel = null, jointPick = null, asmDirty = false, clashes = null;
  let asmSweep = null;   // which joint value the clash check sweeps (0.4 P19)
  const asmHist = new P.History();
  let editPartOf = null;      // { pid, stash: { part, dirty, undo, redo }, before } while a part of the assembly is open
  // measure-ui.js (Measure, every workspace), asm-ui.js (assembly tools), section-ui.js (Section view, every workspace) and
  // draft-ui.js (Draft analysis, Design; 0.4 P21), made next to `host`
  let measure = null, asmTools = null, section = null, draft = null, stackup = null;
  let clip = readStoredClip(); // the clipboard (clipboard.js): this tab's copy, or the one another tab stored
  let ws = WS.DESIGN;          // the active workspace (workspaces.js); Design = everything else in this file

  // ---------------------------------------------------------------- views
  let view = null;
  let handles = null, dragRaf = 0;   // drag handles on the selected feature (0.6 PU.2)
  try {
    view = new View3D(ui.gl, { onPick: (h, e) => onPick(h, e), onHover: (h) => onHover(h) });
    makeHandles();
  } catch (err) {
    ui.busy.hidden = false;
    ui.busyText.textContent = t('app.boot.no_webgl');
    return;
  }
  // touch (0.4 S.8): set by the first finger, cleared by a mouse; touch.add = the on-screen Add (a sticky Shift for selections)
  const touch = { on: false, add: false };
  const editor = new SketchEditor(ui.sk, ui.dimInput, {
    addMode: () => touch.add,
    sketch: () => editingFeature()?.sketch || S.newSketch(),
    commit: (label, fn, opts) => sketchCommit(label, fn, opts),
    dragStart: (label) => { hist.push(part, label); dirty = true; },
    dragSolve: (pin, pinRadius) => { lastSolve = solveSketch(editingFeature().sketch, { pin, pinRadius }); showSketchState(); },
    dragEnd: () => { rebuild(); renderProps(); },
    info: () => lastSolve,
    status: (m) => status(m),
    changed: () => { renderProps(); updateTools(); },
    coords: (p) => { ui.coords.textContent = `${f3(p[0])}, ${f3(p[1])}`; },
    viewChanged: (v) => { if (mode === 'sketch') view.setSketch(currentFrame(), v); },
    tokens: () => tokens(),
    toolChanged: () => updateTools(),
    refocus: () => focusStage(),
    isPad: (e) => looksLikePad(e),
    // sketch Project: the exact edge under the pointer (null without the exact kernel) and the sketch plane
    pickEdge: (cx, cy) => { const h = named() ? view.pickAt(cx, cy, { planes: false }) : null; return h && h.kind === 'edge' && h.edge !== undefined ? regen.edges[h.edge] : null; },
    frame: () => currentFrame(),
    dimTyped: (cid, raw) => paramsUI.dimTyped(editing, cid, raw),   // "=expr" in the dimension box (params-panel.js)
    pasted: (label, clip, made) => status(t(label === t('app.undo.duplicate') ? 'app.clip.sketch_duplicated' : 'app.clip.sketch_pasted', { what: C.describeClip(clip), relations: made.constraints.length ? t('app.clip.sketch_with_relations', { n: made.constraints.length }) : '', dropped: clip.dropped ? t('app.clip.sketch_dropped', { n: clip.dropped }) : '' })),
  });
  view.onResize = () => { if (mode === 'sketch') { view.setSketch(currentFrame(), editor.view); editor.draw(); } };

  // ---------------------------------------------------------------- settings (Settings › PartCraft; per viewer conveniences)
  const SET_DEFAULTS = { orbit: 'left', scroll: 'auto', autoRel: true, corner: 'cube', threads: 'auto', bed: null, planes: true, dimDraw: true };   // planes: View › Base planes (0.6 PU.4); dimDraw: Dimension as you draw (0.6 PU.1)
  // the printer's bed for the 3D-printing check (0.5 SG.4): [x, y, z] mm, each 10–5000, or null = not checked
  const okBed = (v) => v === null || (Array.isArray(v) && v.length === 3 && v.every((n) => Number.isFinite(n) && n >= 10 && n <= 5000));
  const okThreads = (v) => v === 'auto' || (Number.isInteger(v) && v >= 1 && v <= MAX_THREADS);
  const settings = (() => {
    const out = { ...SET_DEFAULTS };
    try {
      const v = JSON.parse(localStorage.getItem('partcraft.settings') || '{}');
      if (v && (v.orbit === 'left' || v.orbit === 'middle')) out.orbit = v.orbit;
      if (v && ['auto', 'mouse', 'trackpad'].includes(v.scroll)) out.scroll = v.scroll;
      if (v && typeof v.autoRel === 'boolean') out.autoRel = v.autoRel;
      if (v && ['cube', 'axes', 'none'].includes(v.corner)) out.corner = v.corner;
      if (v && okThreads(v.threads)) out.threads = v.threads;
      if (v && v.bed !== undefined && okBed(v.bed)) out.bed = v.bed;
      if (v && typeof v.planes === 'boolean') out.planes = v.planes;
      if (v && typeof v.dimDraw === 'boolean') out.dimDraw = v.dimDraw;
    } catch { /* private window or bad data: defaults */ }
    return out;
  })();
  const persistSettings = () => { try { localStorage.setItem('partcraft.settings', JSON.stringify(settings)); } catch { /* fine: this visit keeps them */ } };
  const settingsDlg = document.querySelector('[data-app-settings]');
  // Trackpads: in trackpad mode a two-finger swipe turns the part (pans a sketch); in "auto" when the scrolling looks
  // like a trackpad's (sideways, or fine-grained). A pinch arrives as a wheel event with ctrlKey and always zooms.
  let padUntil = 0;
  function looksLikePad(e) {
    if (settings.scroll === 'trackpad') return true;
    if (settings.scroll === 'mouse' || e.deltaMode !== 0) return false;
    if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) padUntil = e.timeStamp + 400;
    return e.timeStamp < padUntil;
  }
  view.isPad = looksLikePad;
  // corner indicator (Settings › PartCraft): the view cube (viewcube.js through viewcube-three.js; PartCraft is Y up, the
  // cube Z up — the adapter maps them) | the X/Y/Z axis icon | none. Neither shows while sketching or on the drawing sheet.
  const cubeOpts = threeCubeOptions({ camera: () => view.camera, controls: () => view.controls, render: () => view.render(), home: () => view.view('iso'), yUp: true });
  cubeOpts.i18n = { t, has };   // the cube's words: viewcube.* keys
  const viewCube = mountViewCube(ui.gl.parentElement, cubeOpts);
  const axisIcon = mountAxisIcon(ui.gl.parentElement, { getView: cubeOpts.getView, i18n: { t, has } });
  let cornerShown = '';
  function syncCorner() {
    const free = !view.sketchFrame && mode !== 'drawing' && mode !== 'sketch';
    const want = free ? settings.corner : 'none';
    if (want !== cornerShown) { cornerShown = want; viewCube.setVisible(want === 'cube'); axisIcon.setVisible(want === 'axes'); }
  }
  view.onRender = () => { syncCorner(); viewCube.update(); axisIcon.update(); handles?.update(); };
  view.controls.addEventListener('start', () => cubeOpts.stop());
  function applySettings() {
    view.setOrbitButton(settings.orbit);
    editor.autoRelations = settings.autoRel;
    editor.dimDraw = settings.dimDraw;
    syncCorner();
    syncSettingsUI();
  }
  function syncSettingsUI() {
    if (!settingsDlg) return;
    settingsDlg.querySelectorAll('input[name="pcOrbit"]').forEach((r) => { r.checked = r.value === settings.orbit; });
    settingsDlg.querySelectorAll('input[name="pcScroll"]').forEach((r) => { r.checked = r.value === settings.scroll; });
    const ar = settingsDlg.querySelector('input[name="pcAutoRel"]');
    if (ar) ar.checked = settings.autoRel;
    const dd = settingsDlg.querySelector('input[name="pcDimDraw"]');
    if (dd) dd.checked = settings.dimDraw;
    settingsDlg.querySelectorAll('input[name="pcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
    ['x', 'y', 'z'].forEach((k, i) => { const f = settingsDlg.querySelector(`input[name="pcBed${k.toUpperCase()}"]`); if (f) f.value = settings.bed ? String(settings.bed[i]) : ''; });
    const th = settingsDlg.querySelector('select[name="pcThreads"]');
    if (th) {
      if (th.options.length && th.options[0].value === 'auto') th.options[0].textContent = t('app.settings.threads_auto', { n: AUTO_THREADS() });
      th.value = String(settings.threads);
      const why = settingsDlg.querySelector('[data-pc-threads-state]');
      if (why) why.textContent = threadsIsolated() ? t('app.settings.threads_on', { n: (navigator.hardwareConcurrency || 1) }) : t('app.settings.threads_off');
    }
  }
  function setSetting(k, v) { settings[k] = v; persistSettings(); applySettings(); }
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const tg = e.target;
      if (tg.name === 'pcOrbit') { setSetting('orbit', tg.value); status(tg.value === 'middle' ? t('app.settings.orbit_middle') : t('app.settings.orbit_left')); }
      else if (tg.name === 'pcScroll') setSetting('scroll', tg.value);
      else if (tg.name === 'pcCorner') setSetting('corner', tg.value);
      else if (tg.name === 'pcThreads') { const v = tg.value === 'auto' ? 'auto' : Number(tg.value); if (okThreads(v)) setSetting('threads', v); }
      else if (/^pcBed[XYZ]$/.test(tg.name)) {
        const vals = ['X', 'Y', 'Z'].map((k) => settingsDlg.querySelector(`input[name="pcBed${k}"]`)?.value.trim() || '');
        if (vals.every((v) => v === '')) setSetting('bed', null);
        else { const b = vals.map(Number); if (okBed(b)) { setSetting('bed', b); status(t('app.settings.bed_set', { x: b[0], y: b[1], z: b[2] })); } else status(t('app.settings.bed_bad')); }
      }
      else if (tg.name === 'pcAutoRel') { setSetting('autoRel', tg.checked); status(tg.checked ? t('app.settings.autorel_on') : t('app.settings.autorel_off')); }
      else if (tg.name === 'pcDimDraw') { setSetting('dimDraw', tg.checked); status(tg.checked ? t('app.settings.dimdraw_on') : t('app.settings.dimdraw_off')); }
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { Object.assign(settings, SET_DEFAULTS); persistSettings(); applySettings(); });
    // another tab may have changed them: read them again whenever the dialog opens
    new MutationObserver(() => { if (settingsDlg.open) syncSettingsUI(); }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
  }
  window.addEventListener('storage', (e) => {
    if (e.key !== 'partcraft.settings') return;
    try { const v = JSON.parse(e.newValue || '{}'); if (v.orbit === 'left' || v.orbit === 'middle') settings.orbit = v.orbit; if (['auto', 'mouse', 'trackpad'].includes(v.scroll)) settings.scroll = v.scroll; if (typeof v.autoRel === 'boolean') settings.autoRel = v.autoRel; if (['cube', 'axes', 'none'].includes(v.corner)) settings.corner = v.corner; if (okThreads(v.threads)) settings.threads = v.threads; if (v.bed !== undefined && okBed(v.bed)) settings.bed = v.bed; if (typeof v.planes === 'boolean') { settings.planes = v.planes; syncPlanes(); } if (typeof v.dimDraw === 'boolean') settings.dimDraw = v.dimDraw; } catch { /* ignore */ }
    applySettings();
  });
  applySettings();

  function tokens() {
    const cs = getComputedStyle(document.documentElement);
    const cssVar = (n, d) => cs.getPropertyValue(n).trim() || d;
    return {
      full: cssVar('--ink', '#1d232b'), under: cssVar('--layer-blue', '#2f6fd6'), over: cssVar('--layer-red', '#c0392b'), cons: cssVar('--ink-2', '#5b6570'),
      sel: cssVar('--layer-orange', '#d9822b'), hover: cssVar('--layer-cyan', '#1a9fb5'), dim: cssVar('--ink', '#1d232b'), glyph: cssVar('--layer-green', '#2e9e5b'),
      paper: cssVar('--sheet-2', '#ffffff'), axis: cssVar('--grid-major', '#b8c2cc'), originC: cssVar('--layer-red', '#c0392b'), font: cssVar('--font', 'system-ui, sans-serif'),
    };
  }

  // ---------------------------------------------------------------- status
  let statusTimer = 0;
  function status(msg, keep = false) {
    ui.status.textContent = msg || '';
    clearTimeout(statusTimer);
    if (msg && !keep) statusTimer = setTimeout(() => { if (ui.status.textContent === msg) ui.status.textContent = ''; }, 9000);
  }

  // ---------------------------------------------------------------- kernels
  // manifold-3d (small, loads at once) builds the part. 0.4 has no exact kernel (K.2: OpenCascade left the manifest), so
  // exact.state is 'off' and the exact-only features say "Not built yet". When a build or a developer supplies OpenCascade
  // (exact-client.js exactKernelUrl), it loads in its worker and builds everything once ready, as up to 0.3.
  ui.busy.hidden = false;
  let useExact = false;
  const exact = new ExactKernel({ occtUrl: exactKernelUrl() });
  const exactOff = () => exact.state === 'off';
  /** The part on screen has named faces and edges: the exact kernel's, or the mesh kernel's own (0.4 K.2b). */
  const named = () => !!(regen?.exact || regen?.named);
  /** The words for something only an exact kernel does: "not built yet" in 0.4, else the loading / not loaded wording. */
  const exactWhy = (what, otherwise) => (exactOff() ? t('kernel.not_built', { what }) : otherwise);
  exact.onstate = (st, err) => {
    showKernel();
    if (st === 'ready') { useExact = true; ui.busy.hidden = true; status(t('app.kernel.ready', { secs: (exact.loadMs / 1000).toFixed(1) })); if (mode === 'assembly') { asmBuilds = new Map(); } rebuild(); }
    if (st === 'failed') { useExact = false; ui.busy.hidden = !!M; status(t('app.kernel.load_failed', { error: err && err.message ? err.message : err }), true); rebuild(); }
  };
  function showKernel() {
    const st = exact.state;
    if (st === 'off') { ui.kernel.textContent = M ? t('kernel.chip.mesh') : ''; ui.kernel.className = 'pc-chip is-ok'; ui.kernel.title = t('kernel.chip.mesh.title'); return; }
    ui.kernel.textContent = st === 'ready' ? t('app.kernel.chip_exact') : st === 'loading' ? t('app.kernel.chip_loading') : st === 'failed' ? t('app.kernel.chip_mesh_only') : M ? t('kernel.chip.mesh') : '';
    ui.kernel.className = 'pc-chip ' + (st === 'ready' ? 'is-ok' : st === 'failed' ? 'is-error' : 'is-busy');
    ui.kernel.title = st === 'ready' ? (exact.loadMs ? t('app.kernel.title_ready_loaded', { secs: (exact.loadMs / 1000).toFixed(1) }) : t('app.kernel.title_ready')) : st === 'loading' ? t('app.kernel.title_loading') : t('app.kernel.title_mesh');
  }
  const ready = Module().then((m) => { m.setup(); M = m; if (!useExact) { ui.busy.hidden = true; rebuild(); renderAll(); } showKernel(); return true; })
    .catch((err) => { if (!useExact) ui.busyText.textContent = t('app.kernel.solid_failed', { error: err && err.message ? err.message : err }); return false; });
  // OpenCascade is fetched once the page is up (it is big); nothing waits for it
  if (!exactOff()) setTimeout(() => { exact.start().catch(() => {}); }, 0);

  const editingFeature = () => (editing ? P.featureById(part, editing) : null);
  const currentFrame = () => (editing && regen ? regen.frames.get(editing) || planeFrame(editingFeature().plane, regen, part) : null);

  // Rebuilds: synchronous with manifold; with the exact kernel a request goes to the worker and the
  // newest one wins (a rebuild asked for while one runs is sent when it returns). built() resolves
  // once the part on screen matches the part in memory.
  let inflight = false, again = false;
  const waiters = [];
  const upToNow = () => (mode === 'sketch' && editing ? P.indexOf(part, editing) + 1 : mode === 'pick' && editing ? P.indexOf(part, editing) : null);
  function rebuild() {
    if (!M && !useExact) return;
    if (mode === 'assembly') { rebuildAsm(); return; }
    // the open sketch's state is the page's own solve: shown at once, whatever the kernel is doing
    if (mode === 'sketch' && editing && editingFeature()) { lastSolve = solveSketch(editingFeature().sketch); showSketchState(); }
    if (mode === 'drawing') { drawingRefresh(); }
    if (useExact) { requestExact(); return; }
    const t0 = performance.now();
    applyRegen(regenerate(part, M, { upTo: upToNow() }), performance.now() - t0);
  }
  function requestExact() {
    if (inflight) { again = true; return; }
    inflight = true;
    // sketches are solved here too, so the page's part is the solved part the worker builds
    for (const f of part.features) if (f.type === 'sketch') solveSketch(f.sketch);
    const t0 = performance.now();
    ui.build.textContent = t('app.build.rebuilding'); ui.build.className = 'pc-chip is-busy';
    exact.call('regen', { part, upTo: upToNow() }).then((r) => {
      inflight = false;
      if (again) { again = false; requestExact(); return; }
      applyRegen(r, performance.now() - t0);
    }, (err) => {
      inflight = false; again = false;
      if (exact.state !== 'ready') return;   // a failed load is reported by onstate
      status(t('app.kernel.failed_on_part', { error: err.message }));
      ui.build.textContent = t('app.build.kernel_error'); ui.build.className = 'pc-chip is-error';
      for (const w of waiters.splice(0)) w();
    });
  }
  const built = () => new Promise((res) => { if (!inflight && !again) res(); else waiters.push(res); });

  function applyRegen(r, ms) {
    regen = r;
    view.setMesh(regen.mesh);
    view.setHidden(hiddenGeometry(part, regen));
    syncPlanes();   // the first solid makes the base planes step back (0.6 PU.4), also when the exact kernel answers later
    syncHandles();  // the handle follows the rebuilt feature (0.6 PU.2)
    SUI.showSheets(regen);
    measure?.refresh(); section?.refresh(); draft?.refresh();
    if (pick && pick.kind === 'face') { pick = null; view.setHighlight(null); }
    if (pick && pick.kind === 'edge' && named() && pick.ref) { const i = findEdge(regen.edges, pick.ref); pick = i >= 0 ? edgePick(i) : null; }
    multi = multi.map((m) => (m.kind === 'edge' && named() ? (findEdge(regen.edges, m.ref) >= 0 ? edgePick(findEdge(regen.edges, m.ref)) : null) : null)).filter(Boolean);
    showMarks();
    const errs = [...regen.results.values()].filter((x) => x.status === 'error').length;
    ui.build.textContent = errs ? t('app.build.failing', { n: errs }) : mode === 'sketch' ? '' : t('app.build.rebuilt', { ms: Math.round(ms) });
    ui.build.className = 'pc-chip ' + (errs ? 'is-error' : 'is-ok');
    if (editing && mode === 'sketch') lastSolve = solveSketch(editingFeature().sketch);
    show3DSketches();
    renderTree();
    renderFacts();
    if (mode === 'sketch') { showSketchState(); editor.draw(); }
    else keepFocus(() => renderProps());
    updateTools();
    if (ws !== WS.DESIGN) wsCall('rebuilt', host);
    addons?.changed('rebuild');   // add-ons' part.onChange (an undo and an open rebuild too)
    for (const w of waiters.splice(0)) w();
  }

  /** Re-render a panel without losing the keyboard's place in it. */
  function keepFocus(fn) {
    const a = ui.props.ownerDocument.activeElement;   // the panel may be in the panels window
    const inProps = a && ui.props.contains(a);
    const all = inProps ? [...ui.props.querySelectorAll('input, select, button')] : [];
    const i = all.indexOf(a);
    fn();
    if (inProps && i >= 0) { const b = [...ui.props.querySelectorAll('input, select, button')][i]; if (b) b.focus({ preventScroll: true }); }
  }

  function commit(label, fn) {
    hist.push(part, label);
    const r = fn();
    dirty = true;
    rebuild();
    renderAll();
    return r;
  }

  /** A change that only touches how bodies are named or shown (part.bodyInfo): one undo step, no rebuild. */
  function commitView(label, fn) {
    hist.push(part, label);
    const r = fn();
    dirty = true;
    const h = hiddenGeometry(part, regen);
    view.setHidden(h);
    // a pick on a body that is now hidden goes
    if (h && pick && pick.kind === 'face' && h.faces.has(pick.face)) { pick = null; view.setHighlight(null); }
    if (h && pick && pick.kind === 'edge' && h.edges.has(pick.edge)) { pick = null; view.setHighlight(null); }
    if (h) multi = multi.filter((m) => !(m.kind === 'face' ? h.faces.has(m.face) : h.edges.has(m.edge)));
    showMarks();
    renderAll();
    return r;
  }

  function sketchCommit(label, fn, { squash = false } = {}) {
    const f = editingFeature();
    if (!f) return;
    const before = JSON.stringify(f.sketch);
    if (!squash) hist.push(part, label);
    try { fn(f.sketch); } catch (err) { f.sketch = JSON.parse(before); if (!squash) hist.undoStack.pop(); throw err; }
    dirty = true;
    lastSolve = solveSketch(f.sketch);
    if (lastSolve.conflicts.length) status(t('app.sketch.over_conflict', { list: [...new Set([...lastSolve.conflicts, ...lastSolve.redundant])].map((id) => describeC(f.sketch, id)).join(', ') }), true);
    else if (lastSolve.redundant.length) status(t('app.sketch.over_redundant', { n: lastSolve.redundant.length, list: lastSolve.redundant.map((id) => describeC(f.sketch, id)).join(', ') }), true);
    rebuild();
    renderProps();
    updateTools();
  }

  const describeC = (sk, id) => { const c = sk.constraints.find((k) => k.id === id); return c ? S.describe(c, f3) : id; };

  // ---------------------------------------------------------------- 3D picking
  function isFlatFace(hit) {
    if (!hit || hit.kind !== 'face') return false;
    if (named() && hit.face !== undefined) return regen.faces[hit.face]?.type === 'plane';
    if (hit.feature && regen && faceRefAt(regen, hit.feature, hit.normal, hit.point).kind === 'face') return true;
    // a facet of a curved surface has at least one smooth neighbour
    const mesh = regen?.mesh;
    if (!mesh) return false;
    const grp = view.planarGroups();
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

  function onHover(h) {
    if (measure?.active) return;   // measure-ui.js shows its own snap preview
    if (ws !== WS.DESIGN) { if (ws.onHover) wsCall('onHover', h, host); else view.setHover(null); return; }
    if (mode === 'sketch' || mode === 'drawing') return;
    if (mode === 'pick') {
      const want = FACE_PICKERS.has(P.featureById(part, editing)?.type) ? 'face' : 'edge';
      view.setHover(h && h.kind === want ? (want === 'edge' ? edgeHover(h) : { tris: h.tris }) : null);
      return;
    }
    if (mode === 'assembly') { view.setHover(h && h.kind === 'face' && h.inst ? { tris: h.tris, data: h.data, matrix: h.matrix } : null); return; }
    if (h && h.kind === 'ref') { view.setHover(null); return; }
    if (h && h.kind === 'plane') { view.setHover(null); view.setPlaneState(sel?.kind === 'plane' ? sel.name : null, h.name); return; }
    view.setPlaneState(sel?.kind === 'plane' ? sel.name : null, null);
    if (!h) { view.setHover(null); return; }
    if (h.kind === 'edge') { view.setHover(edgeHover(h)); return; }
    view.setHover({ tris: h.tris });
  }
  /** Hover / highlight of a whole exact edge (all its segments), else the one segment. */
  const edgeHover = (h) => (named() && h.edge !== undefined ? { kind: 'edges', edges: [h.edge] } : h);
  function edgePick(i) {
    const e = regen.edges[i];
    return { kind: 'edge', a: e.a, b: e.b, edge: i, ref: edgeRef(e), info: e };
  }
  function facePickAt(fi) {
    const f = regen.faces[fi];
    return f ? { kind: 'face', face: fi, ref: faceRef(f), info: f } : null;
  }
  /** Marks in the view: Shift-picked edges/faces, and the references of the feature being picked for. */
  function showMarks() {
    if (!named()) { view.setMarks(null); return; }
    const edges = [], faces = [];
    for (const m of multi) (m.kind === 'edge' ? edges : faces).push(m.kind === 'edge' ? m.edge : m.face);
    if (mode === 'pick') {
      const f = P.featureById(part, editing);
      if (f?.edges) for (const r of f.edges) { const i = findEdge(regen.edges, r); if (i >= 0) edges.push(i); }
      if (f?.faces) for (const r of f.faces) { const i = findFace(regen.faces, r); if (i >= 0) faces.push(i); }
    }
    view.setMarks(edges.length || faces.length ? { edges, faces } : null);
  }

  function onPick(h, e) {
    if (section?.picking && section.pick(h)) return;
    if (draft?.picking && draft.pick(h)) return;
    if (stackup?.picking) { stackup.pick(h, e); return; }
    if (measure?.active) { measure.pick(h, e); return; }
    if (mode === 'assembly' && asmTools?.pick(h)) return;
    if (ws !== WS.DESIGN) { wsCall('onPick', h, host, e); return; }
    if (mode === 'sketch' || mode === 'drawing') return;
    if (mode === 'assembly') { asmPick(h); return; }
    if (mode === 'pick') { pickRef(h); return; }
    if (DUI.onPick(h, e)) return;   // a reference slot of a Design feature panel was waiting for this click
    if (SUI.onPick(h, e)) return;   // a Gordon surface's "Pick edges" slot (surface-ui.js)
    if (SH.onPick(h, e)) return;   // a flange's edge slot (sheet-ui.js)
    if (BUI.onPick(h, e)) return;   // a body tool's slot: bodies, points, axes, planes, path edges (bodies-ui.js)
    if (h && h.kind === 'ref') {
      const rf = P.featureById(part, h.id);
      if (pendingSketch && rf?.type === 'plane') { startSketchOn({ kind: 'ref', feature: rf.id }); return; }
      if (rf) { pick = null; view.setHighlight(null); selectFeature(rf.id); }
      return;
    }
    if (e?.shiftKey && named() && h && (h.kind === 'edge' ? h.edge !== undefined : h.kind === 'face' && h.face !== undefined)) {
      // Shift+click collects edges (for Fillet / Chamfer) or faces (for Shell)
      const add = h.kind === 'edge' ? edgePick(h.edge) : facePickAt(h.face);
      if (multi.length && multi[0].kind !== add.kind) multi = [];
      if (pick && pick.kind === add.kind && !multi.length && (pick.kind === 'edge' ? pick.edge !== undefined : pick.face !== undefined)) multi.push(pick.kind === 'edge' ? edgePick(pick.edge) : facePickAt(pick.face));
      const at = multi.findIndex((m) => (m.kind === 'edge' ? m.edge === add.edge : m.face === add.face));
      if (at >= 0) multi.splice(at, 1); else multi.push(add);
      pick = null; view.setHighlight(null);
      showMarks(); renderProps();
      status(t(add.kind === 'edge' ? 'app.pick.multi_edges' : 'app.pick.multi_faces', { n: multi.length }));
      return;
    }
    if (multi.length) { multi = []; showMarks(); }
    if (!h) {
      pick = null; view.setHighlight(null);
      if (!refFeature()) { sel = null; view.setPlaneState(null, null); renderProps(); renderTree(); }
      if (pendingSketch) status(t('app.sketch.pick_plane'), true);
      return;
    }
    if (h.kind === 'plane') {
      pick = null; view.setHighlight(null);
      sel = { kind: 'plane', name: h.name };
      view.setPlaneState(h.name, null);
      renderTree(); renderProps();
      if (pendingSketch) startSketchOn({ kind: 'base', name: h.name });
      return;
    }
    if (h.kind === 'edge') {
      pick = named() && h.edge !== undefined ? edgePick(h.edge) : { kind: 'edge', a: h.a, b: h.b };
      view.setHighlight(edgeHover(h));
      renderProps();
      return;
    }
    const flat = isFlatFace(h);
    let ref;
    if (named() && h.face !== undefined) {
      const f = regen.faces[h.face];
      ref = flat ? (f?.name ? refForName(f.name) : { kind: 'fixed', o: f.o.map((v) => +v.toFixed(9)), n: f.n.map((v) => +v.toFixed(12)) }) : null;
      if (flat && f) h = { ...h, normal: f.n };
    } else ref = flat && h.feature ? faceRefAt(regen, h.feature, h.normal, h.point) : flat ? { kind: 'fixed', o: h.point, n: h.normal } : null;
    pick = { kind: 'face', ...h, flat, ref, info: named() && h.face !== undefined ? regen.faces[h.face] : null };
    view.setHighlight({ tris: h.tris });
    if (!refFeature()) { sel = null; view.setPlaneState(null, null); renderTree(); }
    renderProps();
    if (pendingSketch) {
      if (flat) startSketchOn(ref);
      else status(t('app.sketch.face_curved'), true);
    }
  }

  /** The selected feature, when it takes references picked in the view (patterns, mirror). */
  function refFeature() {
    if (sel?.kind !== 'feature') return null;
    const f = P.featureById(part, sel.id);
    return f && ['lpattern', 'cpattern', 'mirror'].includes(f.type) ? f : null;
  }

  // ---------------------------------------------------------------- picking references (fillet / chamfer / shell)
  /** Show the part as it is before the feature, so its edges or faces can be clicked on and off. */
  function startPick(id) {
    const f = P.featureById(part, id);
    if (!f || !PICKERS.has(f.type) || notInDesign()) return;
    if (!useExact && !(PICK_ON_MESH.has(f.type) && named())) { status(exactWhy(t('kernel.what.pick'), exact.state === 'loading' ? t('app.pick.needs_exact_loading') : t('app.pick.needs_exact_off'))); return; }
    if (mode === 'sketch') exitSketch();
    mode = 'pick'; editing = id; sel = { kind: 'feature', id };
    pick = null; multi = []; view.setHighlight(null);
    rebuild(); renderAll();
    status(f.type === 'thread' ? t('thread.ui.pick_start', { name: f.name }) : f.type === 'draft' ? t('app.pick.start_draft', { name: f.name }) : f.type === 'shell' ? t('app.pick.start_shell', { name: f.name }) : t('app.pick.start_edges', { name: f.name }), true);
    focusStage();
  }
  function endPick() {
    if (mode !== 'pick') return;
    const id = editing;
    mode = 'model'; editing = null;
    sel = id && P.featureById(part, id) ? { kind: 'feature', id } : null;
    view.setHover(null);
    rebuild(); renderAll(); status('');
  }
  function pickRef(h) {
    const f = P.featureById(part, editing);
    if (!f || !named()) return;
    if (FACE_PICKERS.has(f.type)) {
      if (!h || h.kind !== 'face' || h.face === undefined) { status(t('app.pick.click_face'), true); return; }
      const fc = regen.faces[h.face];
      if (!fc?.name) { status(t('app.pick.face_unnamed'), true); return; }
      if (f.type === 'thread' && fc.type !== 'cylinder') { status(t('thread.ui.pick_round'), true); return; }
      const i = f.faces.findIndex((r) => findFace(regen.faces, r) === h.face);
      commit(i >= 0 ? t('app.undo.drop_face') : t('app.undo.add_face'), () => { const g = P.featureById(part, f.id); if (i >= 0) g.faces.splice(i, 1); else g.faces.push(faceRef(fc)); });
      status(t('app.pick.faces_open', { name: f.name, n: P.featureById(part, f.id).faces.length }), true);
      return;
    }
    if (!h || h.kind !== 'edge' || h.edge === undefined) { status(t('app.pick.click_edge'), true); return; }
    const e = regen.edges[h.edge];
    const i = f.edges.findIndex((r) => findEdge(regen.edges, r) === h.edge);
    commit(i >= 0 ? t('app.undo.drop_edge') : t('app.undo.add_edge'), () => { const g = P.featureById(part, f.id); if (i >= 0) g.edges.splice(i, 1); else g.edges.push(edgeRef(e)); });
    status(t('app.pick.edges_count', { name: f.name, n: P.featureById(part, f.id).edges.length }), true);
  }

  // ---------------------------------------------------------------- sketch mode
  function startSketch() {
    if ((!M && !useExact) || notInDesign()) return;
    if (mode === 'sketch' || mode === 'drawing') return;
    if (mode === 'pick') endPick();
    if (sel?.kind === 'feature') {
      const f = P.featureById(part, sel.id);
      if (f?.type === 'sketch') { editSketch(f.id); return; }
      if (f?.type === 'plane' && regen?.refGeom?.get(f.id)) { startSketchOn({ kind: 'ref', feature: f.id }); return; }
    }
    if (pick?.kind === 'face') {
      if (!pick.flat) { status(t('app.sketch.face_curved')); return; }
      startSketchOn(pick.ref);
      return;
    }
    if (sel?.kind === 'plane') { startSketchOn({ kind: 'base', name: sel.name }); return; }
    pendingSketch = true;
    syncPlanes();
    status(t('app.sketch.pick_plane'), true);
    updateTools();
  }

  function startSketchOn(plane) {
    pendingSketch = false;
    const f = commit(t('app.undo.new_sketch'), () => P.addFeature(part, 'sketch', { plane }));
    editSketch(f.id, true);
  }

  function editSketch(id, fresh = false) {
    const f = P.featureById(part, id);
    if (!f || f.type !== 'sketch' || notInDesign()) return;
    if (regen?.results.get(id)?.status === 'skipped' || (regen && !regen.frames.get(id) && !planeFrame(f.plane, regen, part))) {
      status(t('app.sketch.cannot_open', { reason: regen.results.get(id)?.message || t('app.sketch.plane_gone') }));
      return;
    }
    section?.stop();   // a sketch is drawn on its plane: no cut
    mode = 'sketch';
    editing = id;
    sel = { kind: 'feature', id };
    pick = null; view.setHighlight(null); view.setHover(null);
    rebuild();
    const frame = currentFrame();
    if (!frame) { exitSketch(); status(t('app.sketch.no_plane')); return; }
    ui.sk.hidden = false;
    editor.active = true;
    editor.sel.clear();
    view.setPlanesVisible(false);
    // start at the model's scale, centred on the model (or fitted to the sketch)
    const r = ui.sk.getBoundingClientRect();
    const size = regen?.stats ? Math.max(...regen.stats.bbox.max.map((v, i) => v - regen.stats.bbox.min[i])) : 100;
    const c = regen?.stats ? V.toPlane(frame, regen.stats.bbox.min.map((v, i) => (v + regen.stats.bbox.max[i]) / 2)) : [0, 0];
    editor.view = { cx: c[0], cy: c[1], s: Math.max(0.01, Math.min(r.width, r.height) / (size * 1.6 || 160)) };
    if (!fresh && S.bounds(f.sketch)) editor.fit();
    view.setSketch(frame, editor.view);
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
    if (mode !== 'sketch') return;
    editor.hideInput();
    editor.active = false;
    editor.step = null;
    ui.sk.hidden = true;
    editor.draw();
    const id = editing;
    mode = 'model';
    editing = null;
    lastSolve = null;
    view.setSketch(null);
    ui.skBar.hidden = true;
    ui.coords.textContent = '';
    sel = id && P.featureById(part, id) ? { kind: 'feature', id } : null;
    rebuild();
    view.view('iso');
    renderAll();
    status('');
  }

  function showSketchState() {
    if (!lastSolve) return;
    const s = lastSolve;
    const word = { empty: () => t('app.sketch.state_empty'), under: () => t('app.sketch.state_under', { n: s.dof }), full: () => t('app.sketch.state_full'), over: () => t('app.sketch.state_over') }[s.status]?.();
    ui.skState.textContent = word;
    ui.skState.className = 'pc-chip is-' + (s.status === 'empty' ? 'under' : s.status);
  }

  function planeLabel(p) {
    if (!p) return '';
    if (p.kind === 'base') return V.PLANE_NAMES[p.name];
    if (p.kind === 'face') { const f = P.featureById(part, p.feature); return t('app.plane.face_of', { name: f ? f.name : t('app.plane.deleted_feature') }); }
    if (p.kind === 'ref') return P.featureById(part, p.feature)?.name || t('app.plane.deleted_plane');
    return t('app.plane.fixed');
  }

  /** World polylines of a sketch (for showing it in the model). */
  function sketchPolylines(f, color) {
    const frame = regen?.frames.get(f.id);
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
      const s = 0.01 * Math.max(10, view.size);
      out.push({ pts: [W([p.x - s, p.y]), W([p.x + s, p.y])], color }, { pts: [W([p.x, p.y - s]), W([p.x, p.y + s])], color });
    }
    return out;
  }

  function show3DSketches() {
    if (mode === 'sketch' || !regen) { view.setSketchLines([]); view.setRefs([]); return; }
    const used = new Set(part.features.filter((f) => f.sketch && typeof f.sketch === 'string').map((f) => f.sketch));
    const lines = [];
    const T = tokens();
    for (const f of part.features) {
      if (f.type !== 'sketch' || regen.results.get(f.id)?.status !== 'ok') continue;
      const selected = sel?.kind === 'feature' && sel.id === f.id;
      if (selected || !used.has(f.id)) lines.push(...sketchPolylines(f, selected ? T.sel : undefined));
    }
    // reference planes / axes / points and cosmetic threads (design-ui.js)
    const dv = DUI.refsForView(sel?.kind === 'feature' ? sel.id : null, view.size);
    if (dv.regionSketch) { const sf = P.featureById(part, dv.regionSketch); if (sf) lines.push(...sketchPolylines(sf, T.sel)); }
    lines.push(...dv.lines);
    view.setRefs(dv.refs);
    view.setSketchLines(lines);
  }

  // ---------------------------------------------------------------- features
  function chooseSketch(need) {
    if (mode === 'sketch') { const id = editing; exitSketch(); return id; }
    if (sel?.kind === 'feature') { const f = P.featureById(part, sel.id); if (f?.type === 'sketch') return f.id; }
    const used = new Set(part.features.filter((f) => typeof f.sketch === 'string').map((f) => f.sketch));
    const built = part.features.slice(0, P.builtCount(part));
    const cands = built.filter((f) => f.type === 'sketch' && !used.has(f.id) && regen?.results.get(f.id)?.status === 'ok');
    const ok = cands.filter((f) => (need === 'points' ? S.loosePoints(f.sketch).length : f.sketch.entities.some((e) => e.type !== 'point' && !e.construction)));
    return ok.length ? ok[ok.length - 1].id : null;
  }

  function newFeature(type, props) {
    const label = P.FEATURE_LABELS[type];   // the feature's name (part.js), also the undo step's label
    if ((DESIGN_TYPES.has(type) && type !== 'draft') || SURFACE_TYPES.has(type) || BODY_TYPES.has(type) || SHEET_TYPES.has(type) || RIB_TYPES.has(type)) {
      // reference geometry, sweep, loft: made from the selection, finished in the panel (design-ui.js)
      const dp = RIB_TYPES.has(type) ? RB.create() : SHEET_TYPES.has(type) ? SH.create(type) : BODY_TYPES.has(type) ? BUI.create(type) : SURFACE_TYPES.has(type) ? SUI.create(type) : DUI.create(type);
      if (!dp) return;
      const f = commit(label, () => P.addFeature(part, type, { ...dp, ...props }));
      sel = { kind: 'feature', id: f.id }; pick = null; multi = []; view.setHighlight(null); showMarks();
      if (type === 'sheetflange' && !f.edge) { renderAll(); SH.pickEdge(f); return; }   // no edge picked yet: wait for one
      renderAll();
      if (type === 'rib') { built().then(() => RB.afterBuild(f)).then((flipped) => { if (!flipped) { const r = regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t('rib.ui.added', { name: f.name })); } }); return; }
      built().then(() => { const r = regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t('app.feature.added_refs', { name: f.name })); });
      return;
    }
    if (PICKERS.has(type)) {
      if (!useExact && !(PICK_ON_MESH.has(type) && named())) { status(exactWhy(label, exact.state === 'loading' ? t('app.feature.needs_exact_loading', { what: label }) : t('app.feature.needs_exact_off', { what: label }))); return; }
      if (!regen?.mesh) { status(t('app.feature.build_solid_first')); return; }
      const want = FACE_PICKERS.has(type) ? 'face' : 'edge';
      const picked = [...multi, ...(pick && !multi.length ? [pick] : [])].filter((m) => m.kind === want && m.ref && (want === 'edge' || m.ref.name || m.info?.name))
        .filter((m) => type !== 'thread' || (m.info?.type ?? regen?.faces?.[m.face]?.type) === 'cylinder');
      props = FACE_PICKERS.has(type)
        ? { faces: picked.map((m) => (m.ref.name ? m.ref : faceRef(m.info))), ...props }
        : { edges: picked.map((m) => m.ref), ...props };
      const f = commit(label, () => P.addFeature(part, type, props));
      multi = []; pick = null; view.setHighlight(null);
      sel = { kind: 'feature', id: f.id };
      if (!picked.length) { startPick(f.id); return; }
      renderAll();
      built().then(() => { const r = regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t(want === 'edge' ? 'app.feature.added_edges' : 'app.feature.added_faces', { name: f.name, n: picked.length })); });
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
      const seedFrom = sel?.kind === 'feature' ? P.featureById(part, sel.id) : null;
      const built = part.features.slice(0, P.builtCount(part)).filter((f) => SOLID.has(f.type) && regen?.results.get(f.id)?.status === 'ok');
      if (type === 'mirror' && !built.length) { status(t('app.feature.build_solid_first')); return; }
      const seed = seedFrom && SOLID.has(seedFrom.type) ? seedFrom : built[built.length - 1];
      if (!seed && type !== 'mirror') { status(t('app.feature.build_feature_first')); return; }
      if (type === 'mirror') {
        props = { seeds: seedFrom && SOLID.has(seedFrom.type) ? [seedFrom.id] : 'body', ...props };
        if (pick?.kind === 'face' && pick.flat) props.plane = pick.ref;
      } else props = { seeds: [seed.id], ...props };
      if (type === 'cpattern') {
        const rev = [...built].reverse().find((f) => f.type === 'revolve');
        if (rev) props.axis = { kind: 'axis', feature: rev.id };
      }
      if (pick?.kind === 'edge' && (type === 'lpattern' || type === 'cpattern')) {
        const d = V.norm(V.sub(pick.b, pick.a));
        props[type === 'lpattern' ? 'dir' : 'axis'] = { kind: 'fixed', o: pick.a, d };
      }
    }
    const first = !regen?.mesh;
    const f = commit(label, () => P.addFeature(part, type, props));
    sel = { kind: 'feature', id: f.id };
    pick = null; view.setHighlight(null);
    renderAll();
    built().then(() => {
      const r = regen.results.get(f.id);
      const what = PARAM_FIELDS[type]?.[MAIN_NUMBER[type]]?.label;
      status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : what ? t('app.feature.added_type', { name: f.name, what }) : t('app.feature.added', { name: f.name }));
      if (first && regen?.mesh && mode === 'model') view.fit();   // the first solid fills the view (0.5 usability pass)
    });
  }

  function setFeature(id, label, fn) {
    commit(label, () => { const f = P.featureById(part, id); if (f) fn(f); });
    built().then(() => { const r = regen.results.get(id); if (r?.status === 'error') status(t('app.feature.error', { name: P.featureById(part, id).name, error: r.message })); });
  }

  async function deleteSelected() {
    if (mode === 'sketch') { editor.deleteSelection(); return; }
    if (sel?.kind !== 'feature') { status(t('app.feature.select_to_delete')); return; }
    const f = P.featureById(part, sel.id);
    if (!f) return;
    const deps = new Set();
    const walk = (id) => { for (const g of P.dependents(part, id)) if (!deps.has(g.id)) { deps.add(g.id); walk(g.id); } };
    walk(f.id);
    if (deps.size) {
      const names = [...deps].map((id) => P.featureById(part, id).name).join(', ');
      const ch = await ask({ title: t('app.feature.delete_title', { name: f.name }), text: t('app.feature.delete_deps', { n: deps.size, names, name: f.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['delete', t('app.btn.delete_all'), 'pc-btn is-primary']] });
      if (ch !== 'delete') return;
    }
    const names = commit(t('app.undo.delete'), () => P.deleteFeatures(part, [f.id]));
    sel = null;
    renderAll();
    status(t('app.feature.deleted', { names: names.join(', ') }));
  }

  function moveSelected(delta) {
    if (sel?.kind !== 'feature') return;
    const i = P.indexOf(part, sel.id);
    const can = P.canMove(part, sel.id, i + delta);
    if (!can.ok) { status(can.reason); return; }
    commit(t('app.undo.reorder'), () => P.moveFeature(part, sel.id, i + delta));
    status(t(delta < 0 ? 'app.feature.moved_up' : 'app.feature.moved_down', { name: P.featureById(part, sel.id).name }));
    setTimeout(() => ui.tree.querySelector(`[data-id="${sel.id}"]`)?.focus(), 0);
  }

  function rollTo(n) { commit(t('app.undo.roll_back'), () => { part.rollback = n >= part.features.length ? null : n; }); }

  // ---------------------------------------------------------------- tree
  function renderTree() {
    if (mode === 'assembly') { renderAsmTree(); return; }
    ui.partName.textContent = editPartOf ? t('app.tree.part_in_asm', { part: part.name, asm: asm.name }) : part.name;
    const items = [];
    for (const name of ['front', 'top', 'right']) {
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node', dataset: { plane: name }, 'aria-selected': String(sel?.kind === 'plane' && sel.name === name),
        onclick: () => { if (mode === 'sketch') return; sel = { kind: 'plane', name }; pick = null; view.setHighlight(null); view.setPlaneState(name, null); renderAll(); if (pendingSketch) startSketchOn({ kind: 'base', name }); },
      }, el('i', { className: 'bi bi-square', 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, V.PLANE_NAMES[name]), el('span'))));
    }
    items.push(el('li', { role: 'none', className: 'pc-tree-sep' }));
    const built = mode === 'sketch' && editing ? P.indexOf(part, editing) + 1 : mode === 'pick' && editing ? P.indexOf(part, editing) : P.builtCount(part);
    const used = new Map();
    for (const f of part.features) if (typeof f.sketch === 'string') used.set(f.sketch, f.id);
    part.features.forEach((f, i) => {
      if (i === built && part.rollback !== null && mode !== 'sketch') items.push(el('li', { role: 'none' }, el('button', { type: 'button', className: 'pc-rollbar', title: t('app.tree.rollbar_title'), onclick: () => rollTo(part.features.length) }, t('app.tree.rollbar'))));
      const r = regen?.results.get(f.id) || { status: 'ok' };
      const flag = r.status === 'error' ? t('app.tree.flag_error') : r.status === 'suppressed' ? t('app.tree.flag_off') : r.status === 'skipped' ? t('app.tree.flag_not_built') : r.warning ? '⚠' : f.type === 'sketch' && r.solve ? { full: '', under: '−', over: '+', empty: '' }[r.solve.status] : '';
      const cls = ['pc-node', r.status === 'error' || r.status === 'skipped' ? 'is-error' : '', r.warning ? 'is-warn' : '', f.suppressed ? 'is-off' : '', r.status === 'rolled' ? 'is-rolled' : '', f.type === 'sketch' && used.has(f.id) ? 'is-child' : ''].join(' ');
      const val = treeValue(f, f3);
      const b = el('button', {
        type: 'button', role: 'treeitem', className: cls, dataset: { id: f.id }, 'aria-selected': String(sel?.kind === 'feature' && sel.id === f.id),
        title: r.message || r.warning || (f.type === 'sketch' && r.solve ? sketchStateWord(r.solve) : P.FEATURE_LABELS[f.type]),
        onclick: () => selectFeature(f.id),
        // a double-click on the value (or on a row with nothing else to open) edits the value in the row (0.6 PU.5)
        ondblclick: (e) => { if (MAIN_NUMBER[f.type] && (e.target.closest('.pc-node-val') || (f.type !== 'sketch' && !PICKERS.has(f.type)))) editTreeValue(f.id); else if (f.type === 'sketch') editSketch(f.id); else if (PICKERS.has(f.type)) startPick(f.id); },
      }, el('i', { className: 'bi bi-' + (r.status === 'error' ? 'exclamation-triangle-fill' : ICONS[f.type]), 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, f.name),
      el('span', { className: 'pc-node-val', title: val && MAIN_NUMBER[f.type] ? t('app.tree.val_title') : null }, val), el('span', { className: 'pc-node-flag' }, flag));   // i18n-ignore: icon class names
      items.push(el('li', { role: 'none' }, b));
    });
    if (!part.features.length) items.push(el('li', { role: 'none', className: 'pc-muted' }, t('app.tree.no_features')));
    swapChildren(ui.tree, items);
  }

  const sketchStateWord = (s) => ({ full: () => t('app.sketch.state_full'), under: () => t('app.sketch.state_under_title', { n: s.dof }), over: () => t('app.sketch.state_over'), empty: () => t('app.sketch.state_empty') }[s.status]?.());

  function selectFeature(id) {
    if (mode === 'sketch') { if (id !== editing) { exitSketch(); } else return; }
    if (mode === 'pick') { if (id !== editing) endPick(); else return; }
    if (mode === 'drawing') leaveDrawing();
    sel = { kind: 'feature', id };
    view.setPlaneState(null, null);
    renderAll();
  }

  /** Edit a feature's main value in its history row (0.6 PU.5): a box over the row's value; Enter (or leaving it) hands the
   *  text to the feature's main box in the properties panel — the same limits, =expressions and one undo step — Esc keeps
   *  the old value. */
  function editTreeValue(id) {
    const f = P.featureById(part, id), main = f && MAIN_NUMBER[f.type];
    if (!main || mode === 'assembly') return false;
    if (sel?.kind !== 'feature' || sel.id !== id || mode !== 'model') selectFeature(id);
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
    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { e.preventDefault(); if (b.dataset.id) { if (sel?.id !== b.dataset.id) selectFeature(b.dataset.id); moveSelected(e.key === 'ArrowUp' ? -1 : 1); } return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); all[Math.max(0, Math.min(all.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1)))]?.focus(); }
  });

  // ---------------------------------------------------------------- facts
  function renderFacts() {
    if (mode === 'assembly') { renderAsmFacts(); return; }
    const s = regen?.stats;
    const errs = regen ? [...regen.results.values()].filter((r) => r.status === 'error').length : 0;
    if (!s) { fillDl(ui.facts, [[t('app.facts.solid'), M ? t('app.facts.none_yet') : t('app.facts.loading_kernel')], [t('app.facts.features'), part.features.length], [t('app.facts.failing'), errs || '']]); return; }
    const size = s.bbox.max.map((v, i) => f3(v - s.bbox.min[i])).join(' × ');
    fillDl(ui.facts, [
      [t('app.facts.volume'), f3(s.volume) + ' mm³'], [t('app.facts.area'), f3(s.area) + ' mm²'], [t('app.facts.size'), size + ' mm'],
      [t('app.facts.through_holes'), s.bodies === 1 ? String(s.genus) : ''], [t('app.facts.bodies'), s.bodies], [t('app.facts.triangles'), s.tris.toLocaleString('en-US')],
      [t('app.facts.features'), part.features.length], [t('app.facts.failing'), errs || ''],
    ]);
  }

  // ---------------------------------------------------------------- properties
  const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
  let uid = 0;
  // { key } = a params-part.js target ("f3.depth"): the field then takes =expressions and solves backward (params-panel.js)
  const numInput = (value, onchange, { min = null, max = null, step = 'any', key = null } = {}) => {
    if (key && paramsUI) return paramsUI.numInput(value, onchange, { min, max, step }, key);
    const i = el('input', { type: 'number', className: 'pc-input', id: 'pc-f' + (++uid), value: V.fmt(value, 6), step, inputMode: 'decimal' });
    if (min !== null) i.min = String(min);
    if (max !== null) i.max = String(max);
    i.addEventListener('change', () => {
      const v = Number(i.value);
      if (i.value.trim() === '' || !Number.isFinite(v) || (min !== null && v < min) || (max !== null && v > max)) { status(min !== null && max !== null ? t('app.input.number_from_to', { min, max }) : min !== null ? t('app.input.number_from', { min }) : max !== null ? t('app.input.number_to', { max }) : t('app.input.number')); i.value = V.fmt(value, 6); return; }
      onchange(v);
    });
    return i;
  };
  // Parameters tab, =expr fields, sketch-dimension equations, design tables, scripts, rollback steps (params-panel.js)
  const paramsUI = mountParams({
    root, part: () => part, commit: (label, fn) => commit(label, fn), status: (m, keep) => status(m, keep), ask: (o) => ask(o),
    download: (text, name, type) => download(text, name, type), openText: (text, name) => openText(text, name), mode: () => mode, fileBase: () => fileBase(),
    // a parameter's "Used by" entry: select that feature and show its properties (0.5 WL.30)
    selectFeature: (id) => { if (!P.featureById(part, id)) return; selectFeature(id); paramsUI.showTab('props'); },
  });
  /** A one-line text box; onchange gets the cleaned text (control characters out, trimmed, cut at max). */
  const textInput = (value, onchange, { max = 60, placeholder = '', attrs = {} } = {}) => {
    const i = el('input', { type: 'text', className: 'pc-input', id: 'pc-f' + (++uid), value: value || '', maxLength: max, placeholder, ...attrs });
    i.addEventListener('change', () => onchange(i.value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max)));
    return i;
  };
  const selectInput = (options, value, onchange) => {
    const s = el('select', { className: 'pc-select', id: 'pc-f' + (++uid) }, ...options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
    s.addEventListener('change', () => onchange(s.value));
    return s;
  };
  const check = (label, value, onchange) => {
    const i = el('input', { type: 'checkbox', checked: !!value });
    i.addEventListener('change', () => onchange(i.checked));
    return el('label', { className: 'pc-check span' }, i, label);
  };
  const btn = (label, onclick, cls = 'pc-btn', extra = {}) => el('button', { type: 'button', className: cls, onclick, ...extra }, label);
  const msg = (text, kind = '') => el('div', { className: 'pc-msg ' + kind }, el('p', {}, text));
  // the Design features' panels and reference picking (design-ui.js): it reads this page's state through getters
  const DUI = installDesignUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps: () => { renderProps(); show3DSketches(); }, focusStage: () => focusStage(),
    setFeature: (id, label, fn) => setFeature(id, label, fn), refList: (f, key) => refList(f, key), faceWords: (n) => faceWords(n), startSketchOn: (p) => startSketchOn(p),
    get part() { return part; }, get regen() { return regen; }, get pick() { return pick; }, get sel() { return sel; }, get multi() { return multi; },
    get useExact() { return useExact; }, get view() { return view; },
  });
  // surface features' panels (surface-ui.js); editForm opens a form feature's cage in the Form workspace (ws-form.js)
  const SUI = installSurfaceUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps: () => renderProps(), setFeature: (id, label, fn) => setFeature(id, label, fn),
    editForm: (id) => WS.getWorkspace('form')?.editFeature?.(id, host), faceWords: (n) => faceWords(n),
    get part() { return part; }, get regen() { return regen; }, get pick() { return pick; }, get sel() { return sel; }, get multi() { return multi; },
    get useExact() { return useExact; }, get view() { return view; },
  });
  // the body tools' panels and slots (bodies-ui.js): Combine, Move/Copy body, Scale body, Path pattern, pattern bodies
  const BUI = installBodiesUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps: () => renderProps(), focusStage: () => focusStage(),
    setFeature: (id, label, fn) => setFeature(id, label, fn), faceWords: (n) => faceWords(n),
    commitView: (label, fn) => commitView(label, fn),
    get part() { return part; }, get regen() { return regen; }, get pick() { return pick; }, get sel() { return sel; }, get multi() { return multi; },
    get useExact() { return useExact; }, get view() { return view; },
  });
  // sheet metal panels and the flange's edge slot (sheet-ui.js, 0.4 P15/P16)
  // the rib's panel (rib-ui.js, 0.4 P20)
  const RB = installRibUI({
    el, field, numInput, selectInput, check, btn, msg, status, setFeature: (id, label, fn) => setFeature(id, label, fn), built: () => built(),
    get part() { return part; }, get regen() { return regen; }, get sel() { return sel; }, get useExact() { return useExact; },
  });
  const TU = installThreadUI({
    el, field, numInput, selectInput, check, setFeature: (id, label, fn) => setFeature(id, label, fn),
    get regen() { return regen; },
  });
  const SH = installSheetUI({
    flatPattern: () => exact.call('sheetFlat', { part }), saveText: (name, text, type) => download(text, name, type), fileBase: () => fileBase(),
    nest: (flat) => openNest(flat),
    el, field, numInput, selectInput, check, btn, msg, status, renderProps: () => renderProps(), focusStage: () => focusStage(),
    setFeature: (id, label, fn) => setFeature(id, label, fn), faceWords: (n) => faceWords(n),
    commitView: (label, fn) => commitView(label, fn),
    get part() { return part; }, get regen() { return regen; }, get pick() { return pick; }, get sel() { return sel; }, get multi() { return multi; },
    get useExact() { return useExact; }, get view() { return view; },
  });

  function renderProps() {
    if (ws !== WS.DESIGN) { renderWsPanel(); return; }
    if (mode === 'assembly') { renderAsmProps(); return; }
    if (mode === 'drawing') { renderDrawingProps(); return; }
    const out = [];
    let head = t('app.props.head');
    if (mode === 'sketch') { head = editingFeature()?.name || t('app.props.sketch'); out.push(...sketchProps()); }
    else if (mode === 'pick' && P.featureById(part, editing)) { const f = P.featureById(part, editing); head = t('app.props.picking', { name: f.name }); out.push(...featureProps(f)); }
    else if (sel?.kind === 'feature' && P.featureById(part, sel.id)) { const f = P.featureById(part, sel.id); head = f.name; out.push(...featureProps(f)); }
    else if (sel?.kind === 'plane') {
      head = V.PLANE_NAMES[sel.name];
      out.push(el('p', { className: 'pc-note' }, t('app.props.base_plane')), el('div', { className: 'pc-actions' }, btn(t('app.props.sketch_on_it'), () => startSketchOn({ kind: 'base', name: sel.name }), 'pc-btn is-primary')));
    } else if (pick?.kind === 'face') { head = t('app.props.face'); out.push(...faceProps()); }
    else if (multi.length) {
      head = t(multi[0].kind === 'edge' ? 'app.props.n_edges' : 'app.props.n_faces', { n: multi.length });
      out.push(el('p', { className: 'pc-note' }, multi[0].kind === 'edge' ? t('app.props.multi_edges_note') : t('app.props.multi_faces_note')));
      out.push(el('div', { className: 'pc-actions' }, ...(multi[0].kind === 'edge' ? [btn(t('app.btn.fillet'), () => newFeature('fillet', {}), 'pc-btn is-primary'), btn(t('app.btn.chamfer'), () => newFeature('chamfer', {}))] : [btn(t('app.btn.shell'), () => newFeature('shell', {}), 'pc-btn is-primary')]), btn(t('app.btn.clear'), () => { multi = []; showMarks(); renderProps(); })));
    } else if (pick?.kind === 'edge') {
      head = t('app.props.edge');
      const d = V.sub(pick.b, pick.a);
      const p = el('dl', { className: 'pc-dl' });
      if (pick.info) {
        const e = pick.info;
        fillDl(p, [[t('app.props.kind'), t('app.props.exact', { kind: { line: () => t('app.edge.straight'), circle: () => t('app.edge.circle'), curve: () => t('app.edge.curve') }[e.type]?.() })], [t('app.props.length'), f3(e.len) + ' mm'], [t('app.props.between'), e.faces.map(faceWords).join(t('app.edge.and_sep'))], [t('app.props.from'), e.type === 'line' ? e.a.map(f3).join(', ') : ''], [t('app.props.to'), e.type === 'line' ? e.b.map(f3).join(', ') : '']]);
        out.push(p, el('div', { className: 'pc-actions' }, btn(t('app.btn.fillet'), () => newFeature('fillet', {}), 'pc-btn is-primary'), btn(t('app.btn.chamfer'), () => newFeature('chamfer', {}))));
        out.push(el('p', { className: 'pc-note' }, e.type === 'line' ? t('app.edge.note_line') : t('app.edge.note')));
      } else {
        fillDl(p, [[t('app.props.length'), f3(V.len(d)) + ' mm'], [t('app.props.from'), pick.a.map(f3).join(', ')], [t('app.props.to'), pick.b.map(f3).join(', ')]]);
        out.push(p, el('p', { className: 'pc-note' }, t('app.edge.note_mesh')));
      }
    } else { head = t('app.props.part'); out.push(...partProps()); }
    out.push(...addonSections());
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }

  /** Add-ons' Properties sections for the selection (heading + rows; a field with edit() gets a box whose change calls it). */
  function addonSections() {
    const out = [];
    for (const sct of addons?.propsSections(sel, part) || []) {
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
    const name = el('input', { type: 'text', className: 'pc-input', id: 'pc-part-name', value: part.name, maxLength: 120 });
    name.addEventListener('change', () => { const v = name.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 120); if (v) commit(t('app.undo.rename_part'), () => { part.name = v; }); });
    const matSel = selectInput([['', t('part.material.none')], ...MATERIALS.map((m, i) => [String(i), t('part.material.option', { name: m.name, d: m.density })])], presetOf(part.material) >= 0 ? String(presetOf(part.material)) : '', (v) => {
      const m = v === '' ? null : MATERIALS[Number(v)];
      hist.push(part, t('part.material.undo')); if (m) part.material = { name: m.name, density: m.density }; else delete part.material; dirty = true; renderAll();
    });
    matSel.dataset.partMaterial = '1';
    const res = selectInput([['32', t('app.part.res_coarse')], ['64', t('app.part.res_normal')], ['128', t('app.part.res_fine')], ['256', t('app.part.res_very_fine')]], String(part.resolution), (v) => commit(t('app.undo.resolution'), () => { part.resolution = Number(v); }));
    return [
      el('div', { className: 'pc-props' }, ...field(t('app.props.name'), name), ...field(t('part.material'), matSel), ...field(t('app.part.curves'), res)),
      el('p', { className: 'pc-note' }, useExact ? t('app.part.note_exact') : exactOff() ? t('kernel.part.note') : exact.state === 'loading' ? t('app.part.note_mesh_loading') : t('app.part.note_mesh_off')),
      el('p', { className: 'pc-note' }, t('app.part.start_note')),
      BUI.bodiesBlock(),
    ].filter(Boolean);
  }

  function faceProps() {
    const out = [];
    const d = el('dl', { className: 'pc-dl' });
    const owner = pick.feature ? P.featureById(part, pick.feature) : null;
    const fi = pick.info;
    if (fi) {
      const kind = { plane: () => t('app.face.flat'), cylinder: () => t('app.face.cylinder'), cone: () => t('app.face.cone'), sphere: () => t('app.face.sphere'), torus: () => t('app.face.torus'), spline: () => t('app.face.spline') }[fi.type]?.() || t('app.face.curved');
      const maker = fi.name ? P.featureById(part, nameFeatures(fi.name)[0]) : null;
      fillDl(d, [[t('app.props.kind'), t('app.props.exact', { kind })], [t('app.props.radius'), fi.r ? f3(fi.r) + ' mm (⌀' + f3(2 * fi.r) + ')' : ''], [t('app.props.area'), f3(fi.area) + ' mm²'], [t('app.props.made_by'), maker ? maker.name : ''], [t('app.props.face'), fi.name ? faceWords(fi.name) : ''],
        [t('app.props.normal'), fi.type === 'plane' ? fi.n.map((v) => V.fmt(v, 4)).join(', ') : ''], [t('app.props.axis'), fi.axis ? fi.axis.d.map((v) => V.fmt(v, 4)).join(', ') : ''],
        [t('app.props.reference'), fi.type === 'plane' ? (pick.ref.kind === 'face' ? t('app.face.follows', { name: maker ? maker.name : t('app.face.its_feature') }) : t('app.face.fixed_where_picked')) : '']]);
    } else fillDl(d, [[t('app.props.kind'), pick.flat ? t('app.face.flat') : t('app.face.curved_faceted')], [t('app.props.made_by'), owner ? owner.name : ''], [t('app.props.normal'), pick.normal.map((v) => V.fmt(v, 4)).join(', ')],
      [t('app.props.reference'), pick.flat ? (pick.ref.kind === 'face' ? t('app.face.follows', { name: owner ? owner.name : t('app.face.its_feature') }) : t('app.face.fixed_where_picked')) : '']]);
    out.push(d);
    if (fi && fi.name) out.push(el('div', { className: 'pc-actions', style: 'margin-bottom:.5rem' }, btn(t('app.face.shell_opening'), () => newFeature('shell', {}), 'pc-btn')));
    if (pick.flat) {
      out.push(el('div', { className: 'pc-actions' },
        btn(t('app.face.sketch_on'), () => startSketchOn(pick.ref), 'pc-btn is-primary'),
        btn(t('app.face.normal_to'), () => { const fr = V.frameFor(pick.normal, pick.point); view.normalTo(fr); }),
        btn(t('app.face.export_dxf'), () => exportDxf())));
      // one click from the face to the feature (0.6 PU.3)
      const fb = (key, kind) => { const b = btn(t(key), () => faceAction(kind)); b.title = t(key + '.title'); b.dataset.faceAction = kind; return b; };
      out.push(el('div', { className: 'pc-actions', style: 'margin-top:.4rem' }, fb('app.face.extrude_from', 'extrude'), fb('app.face.cut_into', 'cut'), fb('app.face.hole_here', 'hole')));
      if (pick.ref.kind === 'fixed') out.push(el('p', { className: 'pc-note' }, t('app.face.fixed_note')));
    }
    return out;
  }

  /** The picked flat face's one-click features (0.6 PU.3): 'extrude' pulls the face out and 'cut' pushes it in (a sketch on the
   *  face holding its outline, face-actions.js, then an Extrude), 'hole' drills where it was clicked (a sketch with one point,
   *  then a Hole through). The sketch and the feature are one undo step; the feature is selected, so a typed number goes into
   *  its main box. An outline with curves that can't be copied opens the sketch to finish by hand instead. */
  function faceAction(kind) {
    if (mode !== 'model' || pick?.kind !== 'face' || !pick.flat || !regen?.mesh) return;
    document.activeElement?.blur();   // the button goes with the panel: no box should inherit its focus, so a typed number reaches the feature
    const ref = pick.ref, frame = planeFrame(ref, regen, part), name = pick.info?.name;
    if (!frame) { status(t('app.sketch.no_plane')); return; }
    const sk = S.newSketch();
    if (kind === 'hole') FA.pointAt(sk, frame, pick.point);
    else {
      const r = name && regen.edges ? FA.faceOutline(sk, frame, regen.edges, name) : { made: 0, skipped: 0 };
      if (!r.made && !r.skipped) { status(t('app.face.no_outline')); return; }
      if (r.skipped || S.profile(sk).error) {
        const f = commit(t('app.undo.new_sketch'), () => P.addFeature(part, 'sketch', { plane: ref, sketch: sk }));
        editSketch(f.id);
        status(t('app.face.outline_open', { n: r.skipped || 1 }), true);
        return;
      }
    }
    const depth = kind === 'cut' ? FA.cutDepth(regen.stats?.bbox, frame.n) : 10;
    let s = null;
    const f = commit(t({ extrude: 'app.undo.face_extrude', cut: 'app.undo.face_cut', hole: 'app.undo.face_hole' }[kind]), () => {
      s = P.addFeature(part, 'sketch', { plane: ref, sketch: sk });
      return kind === 'hole' ? P.addFeature(part, 'hole', { sketch: s.id, through: true }) : P.addFeature(part, 'extrude', { sketch: s.id, op: kind === 'cut' ? 'cut' : 'add', end: 'blind', depth });
    });
    sel = { kind: 'feature', id: f.id }; pick = null; multi = []; view.setHighlight(null); showMarks();
    renderAll();
    built().then(() => {
      const r = regen.results.get(f.id);
      status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message })
        : kind === 'hole' ? t('app.face.added_hole', { name: f.name, sketch: s.name }) : t(kind === 'cut' ? 'app.face.added_cut' : 'app.face.added_extrude', { name: f.name, depth: f3(depth) }), true);
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
        built().then(() => { const r = regen.results.get(sf.id); if (r?.status === 'error') status(t('app.feature.error', { name: sf.name, error: r.message })); });
      }, { min: 0, key: sf.id + '.' + c.id });
      i.setAttribute('aria-label', label + ' ' + c.id);
      return el('div', { className: 'pc-dimrow' }, el('label', { htmlFor: i.id }, label), i);
    });
    return el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.dims.title', { title, name: sf.name })), el('div', { className: 'pc-checks' }, ...rows));
  }

  function featureProps(f) {
    const out = [];
    const r = regen?.results.get(f.id) || { status: 'ok' };
    if (r.status === 'error') out.push(msg(r.message, 'is-error'));
    else if (r.status === 'skipped') out.push(msg(t('app.feature.not_built', { reason: r.message }), 'is-error'));
    else if (r.status === 'suppressed') out.push(msg(t('app.feature.suppressed_msg')));
    else if (mode === 'pick' && editing === f.id) out.push(msg(t(FACE_PICKERS.has(f.type) ? 'app.feature.picking_faces' : 'app.feature.picking_edges', { name: f.name }), 'is-ok'));
    else if (r.status === 'rolled') out.push(msg(t('app.feature.rolled_msg')));
    if (r.warning) out.push(msg(r.warning));
    const grid = [];
    const set = (label, fn) => setFeature(f.id, label, fn);
    const sketchRow = (id) => { const s = P.featureById(part, id); return [el('span', { className: 'k' }, t('app.props.sketch_row')), el('span', { className: 'v' }, s ? s.name : t('app.props.gone'))]; };
    if (f.type === 'sketch') {
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.props.plane'), planeLabel(f.plane)], [t('app.props.state'), r.solve ? sketchStateWord(r.solve) : ''], [t('app.props.geometry'), t('app.props.geometry_value', { curves: f.sketch.entities.filter((e) => e.type !== 'point').length, points: S.loosePoints(f.sketch).length })], [t('app.props.relations'), f.sketch.constraints.length]]);
      out.push(dl, el('div', { className: 'pc-actions', style: 'margin-top:.6rem' }, btn(t('app.btn.edit_sketch'), () => editSketch(f.id), 'pc-btn is-primary'), btn(t('app.btn.export_dxf'), () => exportDxf(f))));
      const d = sketchDimsBlock(f);
      if (d) out.push(d);
    } else if (f.type === 'extrude') {
      grid.push(...sketchRow(f.sketch));
      grid.push(...field(t('app.props.operation'), selectInput([['add', t('app.op.add')], ['cut', t('app.op.cut')], ['intersect', t('app.op.intersect')], ['new', t('app.op.new')]], f.op, (v) => set(t('app.undo.operation'), (g) => { g.op = v; if (v !== 'cut' && g.end === 'through') g.end = 'blind'; }))));
      grid.push(...field(t('app.props.end'), selectInput(EXTRUDE_END_OPTIONS, f.end, (v) => set(t('app.undo.end_condition'), (g) => { g.end = v; if (['upto', 'offset'].includes(v) && !g.upto && pick?.kind === 'face' && pick.flat) g.upto = pick.ref; if (v !== 'blind') delete g.two; if (v === 'mid') delete g.taper; }))));
      if (f.end === 'blind' || f.end === 'mid') grid.push(...field(t('app.props.depth_mm'), numInput(f.depth, (v) => set(t('app.undo.depth'), (g) => { g.depth = v; }), { min: 0.000001, key: f.id + '.depth' })));
      if (f.end !== 'mid') grid.push(check(t('app.props.reverse'), f.reverse, (v) => set(t('app.undo.reverse'), (g) => { g.reverse = v; })));
    } else if (f.type === 'revolve') {
      grid.push(...sketchRow(f.sketch));
      grid.push(...field(t('app.props.operation'), selectInput([['add', t('app.op.add')], ['cut', t('app.op.cut')], ['intersect', t('app.op.intersect')], ['new', t('app.op.new')]], f.op, (v) => set(t('app.undo.operation'), (g) => { g.op = v; }))));
      grid.push(...field(t('app.props.angle_deg'), numInput(f.angle, (v) => set(t('app.undo.angle'), (g) => { g.angle = v; }), { min: 0.001, max: 360, key: f.id + '.angle' })));
      const sk = P.featureById(part, f.sketch)?.sketch;
      if (sk) {
        const lines = sk.entities.filter((e) => e.type === 'line');
        const opts = [['', t('app.revolve.first_centerline')], ...lines.map((l, i) => [l.id, t(l.construction ? 'app.revolve.centerline_n' : 'app.revolve.line_n', { n: i + 1, id: l.id })])];
        for (const g of part.features.slice(0, P.indexOf(part, f.id))) if (g.type === 'axis') opts.push(['ref:' + g.id, t('app.revolve.axis_feature', { name: g.name })]);
        const curAx = f.axis && typeof f.axis === 'object' ? (f.axis.kind === 'ref' ? 'ref:' + f.axis.feature : 'obj') : f.axis || '';
        if (curAx === 'obj') opts.push(['obj', t('app.revolve.picked_axis')]);
        grid.push(...field(t('app.props.axis'), selectInput(opts, curAx, (v) => { if (v !== 'obj') set(t('app.undo.axis'), (g) => { g.axis = v.startsWith('ref:') ? { kind: 'ref', feature: v.slice(4) } : v || null; }); })));
      }
    } else if (f.type === 'hole') {
      grid.push(...sketchRow(f.sketch));
      grid.push(el('span', { className: 'k' }, t('app.hole.holes')), el('span', { className: 'v' }, t('app.hole.count', { n: String(r.count ?? S.loosePoints(P.featureById(part, f.sketch)?.sketch || S.newSketch()).length) })));
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
      out.push(el('div', { className: 'pc-props' }, ...grid));
      grid.length = 0;
      out.push(refList(f, 'edges'));
    } else if (f.type === 'shell') {
      grid.push(...field(t('app.shell.wall_mm'), numInput(f.t, (v) => set(t('app.undo.wall'), (g) => { g.t = v; }), { min: 0.000001, key: f.id + '.t' })));
      grid.push(check(t('app.shell.outward'), f.outward, (v) => set(t('app.undo.shell_direction'), (g) => { g.outward = v; })));
      grid.push(el('span', { className: 'k' }, t('app.shell.open_faces')), el('span', { className: 'v' }, String(f.faces.length)));
      out.push(el('div', { className: 'pc-props' }, ...grid));
      grid.length = 0;
      out.push(refList(f, 'faces'));
    } else if (SHEET_TYPES.has(f.type)) {
      SH.panel(f, grid, out);
    } else if (RIB_TYPES.has(f.type)) {
      RB.panel(f, grid, out);
    } else if (f.type === 'thread') {
      TU.panel(f, grid, out);
      out.push(refList(f, 'faces'));
    } else if (BODY_TYPES.has(f.type)) {
      BUI.panel(f, grid, out);
    } else if (SURFACE_TYPES.has(f.type)) {
      SUI.panel(f, grid, out);
    } else if (DESIGN_TYPES.has(f.type)) {
      DUI.panel(f, grid, out);
    } else if (f.type === 'import') {
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.import.file'), f.file || 'STEP'], [t('app.import.size'), t('app.import.size_value', { kb: (f.step.length / 1024).toFixed(0) })], [t('app.import.up_axis'), f.up === 'y' ? t('app.import.up_y') : t('app.import.up_z')]]);
      out.push(dl);
      grid.push(...field(t('app.import.up_in_file'), selectInput([['z', t('app.import.z_up')], ['y', t('app.import.y_up')]], f.up, (v) => set(t('app.import.up_axis'), (g) => { g.up = v; }))));
    }
    if (!DESIGN_TYPES.has(f.type)) DUI.extra(f, grid);
    TU.holeExtra(f, grid);   // a tapped hole's modelled thread (thread-ui.js)
    BUI.extra(f, grid);   // linear / circular patterns: copy bodies (bodies-ui.js)
    if (grid.length) out.push(el('div', { className: 'pc-props' }, ...grid));
    if (typeof f.sketch === 'string') { const sf = P.featureById(part, f.sketch); const d = sf && sketchDimsBlock(sf, t('app.dims.sketch')); if (d) out.push(d); }
    // history actions
    const i = P.indexOf(part, f.id);
    out.push(el('div', { className: 'pc-block' }, el('div', { className: 'pc-actions' },
      btn(f.suppressed ? t('app.history.unsuppress') : t('app.history.suppress'), () => setFeature(f.id, f.suppressed ? t('app.history.unsuppress') : t('app.history.suppress'), (g) => { if (g.suppressed) delete g.suppressed; else g.suppressed = true; })),
      btn(t('app.history.roll_here'), () => rollTo(i), 'pc-btn', { title: t('app.history.roll_here_title') }),
      btn(t('app.history.move_up'), () => moveSelected(-1), 'pc-btn', { disabled: !P.canMove(part, f.id, i - 1).ok, title: P.canMove(part, f.id, i - 1).reason || t('app.history.move_up_title') }),
      btn(t('app.history.move_down'), () => moveSelected(1), 'pc-btn', { disabled: !P.canMove(part, f.id, i + 1).ok, title: P.canMove(part, f.id, i + 1).reason || t('app.history.move_down_title') }),
      btn(t('app.btn.delete'), () => deleteSelected(), 'pc-btn is-danger'),
    )));
    const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-feat-name', value: f.name, maxLength: 60 });
    nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60); if (v) setFeature(f.id, t('app.undo.rename'), (g) => { g.name = v; }); });
    out.push(el('div', { className: 'pc-block pc-props' }, ...field(t('app.props.name'), nameIn)));
    return out;
  }

  /** A face name (brep.js) in words: "Extrude1 end face", "Hole1 wall (copy 3 of CirPattern1)". */
  function faceWords(name) {
    const m = /^(f\d+)\.([a-z]+)(?::([^@~]+))?/.exec(name || '');
    if (!m) return '?';
    const g = P.featureById(part, m[1]);
    const FACE_KINDS = ['start', 'end', 'side', 'wall', 'floor', 'cbore', 'cfloor', 'top', 'blend', 'corner', 'bevel', 'face', 'draft', 'csink', 'far', 'thread', 'tend'];
    const kind = FACE_KINDS.includes(m[2]) ? t('app.face.kind.' + m[2]) : m[2];
    let out = t('app.face.words', { feature: g ? g.name : t('app.plane.deleted_feature'), kind }) + (m[2] === 'face' && m[3] ? ' ' + m[3].split('_').map((x) => Number(x) + 1).join('.') : '');
    for (const k of String(name).matchAll(/([@~])(f\d+)(?:#(\d+|m))?/g)) {
      const h = P.featureById(part, k[2]);
      out += k[1] === '~' ? t('app.face.inside_of', { name: h ? h.name : t('app.face.a_shell') }) : k[3] === 'm' ? t('app.face.mirrored_by', { name: h ? h.name : '?' }) : t('app.face.copy_of', { n: k[3], name: h ? h.name : '?' });
    }
    return out;
  }

  /** The edges or faces a fillet / chamfer / shell uses, each named by the faces it lies between. */
  function refList(f, key) {
    const desc = (name) => faceWords(name);
    const items = f[key].map((r, i) => {
      const gone = named() && (key === 'edges' ? findEdge(regen.edges, r) : findFace(regen.faces, r)) < 0 && mode === 'pick';
      const label = key === 'edges' ? t('app.refs.edge_n', { n: i + 1, a: desc(r.faces[0]), b: desc(r.faces[1]) }) : t('app.refs.face_n', { n: i + 1, name: desc(r.name) });
      return el('li', {}, el('span', { className: 'grow' + (gone ? ' is-bad' : ''), title: key === 'edges' ? r.faces.join(' × ') : r.name }, label),
        btn(t('app.btn.remove'), () => setFeature(f.id, key === 'edges' ? t('app.undo.drop_edge') : t('app.undo.drop_face'), (g) => { g[key].splice(i, 1); }), 'pc-linkbtn'));
    });
    const picking = mode === 'pick' && editing === f.id;
    return el('div', { className: 'pc-block' },
      el('p', { className: 'pc-note' }, key === 'edges' ? t('app.refs.edges_note') : t('app.refs.faces_note')),
      items.length ? el('ul', { className: 'pc-list' }, ...items) : el('p', { className: 'pc-muted' }, key === 'edges' ? t('app.refs.no_edges') : t('app.refs.no_faces')),
      el('div', { className: 'pc-actions' }, picking ? btn(t('app.refs.done_picking'), () => endPick(), 'pc-btn is-primary') : btn(key === 'edges' ? t('app.refs.pick_edges') : t('app.refs.pick_faces'), () => startPick(f.id), 'pc-btn is-primary', { disabled: !useExact && !(PICK_ON_MESH.has(f.type) && named()), title: useExact || (PICK_ON_MESH.has(f.type) && named()) ? '' : exactWhy(t('kernel.what.pick'), t('app.refs.needs_exact')) })));
  }

  function seedsField(f, allowBody = false) {
    const i = P.indexOf(part, f.id);
    const earlier = part.features.slice(0, i).filter((g) => SOLID.has(g.type));
    const boxes = [];
    if (allowBody) boxes.push(check(t('app.seeds.whole_body'), f.seeds === 'body', (v) => setFeature(f.id, t('app.undo.mirror_body'), (g) => { g.seeds = v ? 'body' : earlier.slice(-1).map((x) => x.id); })));
    if (f.seeds !== 'body') {
      for (const g of earlier) boxes.push(check(g.name, f.seeds.includes(g.id), (v) => setFeature(f.id, t('app.seeds.to_copy'), (h) => { h.seeds = v ? [...h.seeds, g.id] : h.seeds.filter((x) => x !== g.id); })));
    }
    return [el('span', { className: 'pc-props-sub' }, allowBody ? t('app.seeds.mirror') : t('app.seeds.to_copy')), el('div', { className: 'pc-checks' }, ...boxes)];
  }

  function dirSelect(f, key) {
    const ref = f[key];
    const i = P.indexOf(part, f.id);
    const opts = [['world:x', t('app.dir.x')], ['world:y', t('app.dir.y')], ['world:z', t('app.dir.z')]];
    for (const g of part.features.slice(0, i)) {
      if (g.type === 'revolve') opts.push(['axis:' + g.id, t('app.dir.axis_of', { name: g.name })]);
      if (g.type === 'axis') opts.push(['ref:' + g.id, g.name]);
      if (g.type === 'plane') opts.push(['ref:' + g.id, t('app.dir.plane_normal', { name: g.name })]);
      if (g.type === 'sketch') g.sketch.entities.filter((e) => e.type === 'line').slice(0, 30).forEach((l, k) => opts.push(['line:' + g.id + ':' + l.id, t(l.construction ? 'app.dir.centerline_of' : 'app.dir.line_of', { name: g.name, n: k + 1 })]));
    }
    if (ref.kind === 'fixed') opts.push(['fixed', t('app.dir.picked_fixed')]);
    if (pick?.kind === 'edge') opts.push(['pick', t('app.dir.picked_now')]);
    const cur = ref.kind === 'world' ? 'world:' + ref.axis : ref.kind === 'axis' ? 'axis:' + ref.feature : ref.kind === 'ref' ? 'ref:' + ref.feature : ref.kind === 'line' ? 'line:' + ref.sketch + ':' + ref.entity : 'fixed';
    return selectInput(opts, cur, (v) => {
      let nr;
      if (v === 'pick') nr = { kind: 'fixed', o: pick.a, d: V.norm(V.sub(pick.b, pick.a)) };
      else if (v === 'fixed') return;
      else { const [k, a, b] = v.split(':'); nr = k === 'world' ? { kind: 'world', axis: a } : k === 'axis' ? { kind: 'axis', feature: a } : k === 'ref' ? { kind: 'ref', feature: a } : { kind: 'line', sketch: a, entity: b }; }
      setFeature(f.id, key === 'dir' ? t('app.pattern.direction') : t('app.undo.axis'), (g) => { g[key] = nr; });
    });
  }

  function planeSelect(f) {
    const ref = f.plane;
    const opts = [['base:front', t('app.mirror.front')], ['base:top', t('app.mirror.top')], ['base:right', t('app.mirror.right')]];
    for (const g of part.features.slice(0, P.indexOf(part, f.id))) if (g.type === 'plane') opts.push(['ref:' + g.id, g.name]);
    if (ref.kind !== 'base' && ref.kind !== 'ref') opts.push(['cur', ref.kind === 'face' ? t('app.mirror.a_face_of', { name: P.featureById(part, ref.feature)?.name || '?' }) : t('app.mirror.a_fixed_plane')]);
    if (pick?.kind === 'face' && pick.flat) opts.push(['pick', t('app.mirror.picked_face')]);
    const cur = ref.kind === 'base' ? 'base:' + ref.name : ref.kind === 'ref' ? 'ref:' + ref.feature : 'cur';
    return selectInput(opts, cur, (v) => {
      if (v === 'cur') return;
      const nr = v === 'pick' ? pick.ref : v.startsWith('ref:') ? { kind: 'ref', feature: v.slice(4) } : { kind: 'base', name: v.split(':')[1] };
      setFeature(f.id, t('app.mirror.plane'), (g) => { g.plane = nr; });
    });
  }

  // ---- sketch panel
  function sketchProps() {
    const f = editingFeature();
    if (!f) return [];
    const sk = f.sketch;
    const out = [];
    const s = lastSolve;
    if (s) {
      const bad = [...new Set([...s.conflicts, ...s.redundant])];
      const text = s.status === 'over' ? t(s.conflicts.length ? 'app.sketch.msg_over_conflict' : 'app.sketch.msg_over_redundant', { list: bad.map((id) => describeC(sk, id)).join(', ') })
        : s.status === 'full' ? t('app.sketch.msg_full') : s.status === 'empty' ? t('app.sketch.msg_empty') : t('app.sketch.msg_under', { n: s.dof });
      out.push(msg(text, s.status === 'over' ? 'is-error' : s.status === 'full' ? 'is-ok' : ''));
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
      if (rel.length) out.push(el('div', { className: 'pc-actions' }, ...rel.map((ty) => btn(S.CONSTRAINTS[ty].glyph + ' ' + S.CONSTRAINTS[ty].label, () => editor.addRelation(ty, ents)))));
      if (dims.length) out.push(el('div', { className: 'pc-actions', style: 'margin-top:.4rem' }, ...dims.map((ty) => btn(S.CONSTRAINTS[ty].label, () => { editor.addRelation(ty, ents); const c = editingFeature().sketch.constraints.at(-1); if (c && c.type === ty) editor.editDimension(c.id); }))));
      if (!rel.length && !dims.length) out.push(el('p', { className: 'pc-note' }, t('app.sketch.no_relation_fits')));
      const geoActions = [];
      if (ents.some((id) => { const e = S.byId(sk, id); return e && e.type !== 'point'; })) geoActions.push(btn(t('app.sketch.construction_toggle'), () => editor.toggleConstruction()));
      geoActions.push(btn(t('app.btn.delete'), () => editor.deleteSelection(), 'pc-btn is-danger'));
      out.push(el('div', { className: 'pc-actions', style: 'margin-top:.6rem' }, ...geoActions));
      const mine = sk.constraints.filter((c) => ents.some((id) => c.refs.includes(id)));
      if (mine.length) out.push(constraintList(sk, mine, t('app.sketch.relations_on_selection')));
    } else if (cons.length) {
      out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.sketch.selected_relations')), el('div', { className: 'pc-actions' }, btn(t('app.btn.delete'), () => editor.deleteSelection(), 'pc-btn is-danger'))));
      out.push(constraintList(sk, sk.constraints.filter((c) => cons.includes(c.id)), ''));
    } else {
      out.push(el('p', { className: 'pc-note' }, t('app.sketch.panel_note')));
      if (sk.constraints.length) out.push(constraintList(sk, sk.constraints, t('app.sketch.relations_dims')));
    }
    out.push(numericEntry());
    out.push(el('div', { className: 'pc-block pc-actions' }, btn(t('app.sketch.exit'), () => exitSketch(), 'pc-btn is-primary'), btn(t('app.sketch.fit'), () => editor.fit()), btn(t('app.btn.export_dxf'), () => exportDxf(f))));
    return out;
  }

  /** Add geometry by typing coordinates (sketch units, mm): works without a pointer. */
  let numKind = 'line';
  function numericEntry() {
    // [label, takes "x, y"]
    const kinds = { point: [[t('app.num.at'), true]], line: [[t('app.num.from'), true], [t('app.num.to'), true]], centerline: [[t('app.num.from'), true], [t('app.num.to'), true]], rect: [[t('app.num.corner'), true], [t('app.num.opposite'), true]], circle: [[t('app.num.centre'), true], [t('app.num.radius'), false]] };
    const kind = selectInput([['line', t('app.num.line')], ['centerline', t('app.num.centerline')], ['rect', t('app.num.rect')], ['circle', t('app.num.circle')], ['point', t('app.num.point')]], numKind, (v) => { numKind = v; renderProps(); });
    const inputs = kinds[numKind].map(([label, xy], i) => { const inp = el('input', { type: 'text', className: 'pc-input', id: 'pc-num-' + i, inputMode: 'decimal', autocomplete: 'off', placeholder: xy ? '0, 0' : '10' }); return [label, inp, xy]; });
    const pair = (s) => { const m = /^\s*(-?[\d.]+(?:e-?\d+)?)\s*[, ]\s*(-?[\d.]+(?:e-?\d+)?)\s*$/i.exec(s); return m ? [Number(m[1]), Number(m[2])] : null; };
    const add = () => {
      const vals = inputs.map(([, inp, xy]) => (xy ? pair(inp.value) : Number(inp.value)));
      if (vals.some((v) => v === null || (typeof v === 'number' && !(v > 0)) || (Array.isArray(v) && !v.every(Number.isFinite)))) { status(t('app.num.bad_input')); return; }
      try {
        sketchCommit({ point: () => t('app.num.undo_point'), line: () => t('app.num.undo_line'), centerline: () => t('app.num.undo_centerline'), rect: () => t('app.num.undo_rect'), circle: () => t('app.num.undo_circle') }[numKind](), (sk) => {
          if (numKind === 'point') S.addPoint(sk, ...vals[0]);
          else if (numKind === 'line' || numKind === 'centerline') S.addLine(sk, vals[0], vals[1], { construction: numKind === 'centerline' });
          else if (numKind === 'rect') S.addRect(sk, vals[0], vals[1]);
          else S.addCircle(sk, vals[0], vals[1]);
        });
        status({ point: () => t('app.num.added_point'), line: () => t('app.num.added_line'), centerline: () => t('app.num.added_centerline'), rect: () => t('app.num.added_rect'), circle: () => t('app.num.added_circle') }[numKind]());
      } catch (err) { status(err.message); }
    };
    const form = el('form', { className: 'pc-props', onsubmit: (e) => { e.preventDefault(); add(); } },
      ...field(t('app.num.add'), kind), ...inputs.flatMap(([label, inp]) => field(label, inp)),
      el('span'), el('button', { type: 'submit', className: 'pc-btn' }, t('app.num.add')));
    return el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.num.title')), form);
  }

  function entityName(sk, id) {
    if (id === S.ORIGIN) return t('app.entity.origin');
    const e = S.byId(sk, id);
    if (!e) return id;
    const kind = e.type === 'point' ? t('app.entity.point') : e.type === 'line' ? (e.construction ? t('app.entity.centerline') : t('app.entity.line')) : e.type === 'circle' ? t('app.entity.circle') : e.type === 'arc' ? t('app.entity.arc') : e.type === 'spline' ? t('app.entity.spline') : e.type;
    return t('app.entity.named', { kind, id });
  }

  const openRelGroups = new Set();   // relation kinds whose group the person opened (0.6 PU.6), kept across redraws
  function constraintList(sk, list, title) {
    const bad = new Set([...(lastSolve?.conflicts || []), ...(lastSolve?.redundant || [])]);
    const row = (c, inGroup = false) => {
      const isDim = S.CONSTRAINTS[c.type].dim, what = c.refs.map((r) => entityName(sk, r)).join(', ');
      return el('li', {},
        el('span', { className: 'grow' + (bad.has(c.id) ? ' is-bad' : ''), title: inGroup ? S.describe(c, f3) + ': ' + what : what }, inGroup ? what : S.describe(c, f3)),
        isDim ? btn(t('app.btn.edit'), () => editor.editDimension(c.id), 'pc-linkbtn') : null,
        btn(t('app.btn.select'), () => { editor.sel.clear(); editor.sel.add(c.id); renderProps(); editor.draw(); }, 'pc-linkbtn'),
        btn(t('app.btn.delete'), () => sketchCommit(t('app.undo.delete_relation'), (s2) => S.removeConstraints(s2, [c.id])), 'pc-linkbtn'));
    };
    // repeated relations of one kind are one row, "Coincident × 4", opened to see each (0.6 PU.6)
    const group = (g) => {
      const ids = g.items.map((c) => c.id), def = S.CONSTRAINTS[g.type], isBad = ids.some((id) => bad.has(id));
      const d = el('details', { className: 'grow pc-rel-group', dataset: { relGroup: g.type }, open: isBad || openRelGroups.has(g.type), ontoggle: () => { if (d.open) openRelGroups.add(g.type); else openRelGroups.delete(g.type); } },
        el('summary', { className: isBad ? 'is-bad' : '', title: t('app.sketch.rel_group.title', { n: ids.length, label: def.label }) }, t('app.sketch.rel_group', { label: def.label, n: ids.length })),
        el('ul', { className: 'pc-list' }, ...g.items.slice(0, 200).map((c) => row(c, true))));
      return el('li', { className: 'pc-rel-row' }, d, el('span', { className: 'pc-rel-acts' },
        btn(t('app.btn.select'), () => { editor.sel.clear(); for (const id of ids) editor.sel.add(id); renderProps(); editor.draw(); status(t('app.sketch.rel_group.selected', { n: ids.length, label: def.label })); }, 'pc-linkbtn'),
        btn(t('app.btn.delete_all'), () => { sketchCommit(t('app.undo.delete_relations', { n: ids.length, label: def.label }), (s2) => S.removeConstraints(s2, ids)); status(t('app.sketch.rel_group.deleted', { n: ids.length, label: def.label })); }, 'pc-linkbtn')));
    };
    const ul = el('ul', { className: 'pc-list' }, ...S.groupConstraints(list.slice(0, 400)).map((x) => (x.c ? row(x.c) : group(x))));
    return el('div', { className: 'pc-block' }, title ? el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, title) : null, ul);
  }

  // found once and kept: the panel may move to the panels window, out of root's reach
  function modeNotes() { return modeNotes.c || (modeNotes.c = { tree: $('[data-tree-note]'), asm: $('[data-asm-note]'), factsH: $('[data-facts-h]') }); }
  /** The base planes (0.6 PU.4): full while choosing where to sketch, or with one selected; faint (drawn, not picked) once
   *  the part has a solid; View › Base planes off hides them except while choosing where to sketch. Sketches, drawings and
   *  assemblies set their own (hidden). */
  // ---------------------------------------------------------------- drag handles (0.6 PU.2, handles.js + handle-math.js)
  // The selected Extrude (blind or both sides) or Revolve, built, its value not driven by an equation, in the Design
  // workspace: an arrow (a curved one on a Revolve) to drag; the drag changes the part live and is one undo step at the end.
  function syncHandles() {
    if (!handles) return;
    let h = null;
    if (mode === 'model' && ws === WS.DESIGN && sel?.kind === 'feature' && regen?.mesh) {
      const f = P.featureById(part, sel.id), r = regen.results.get(sel.id);
      const key = f && { extrude: 'depth', revolve: 'angle' }[f.type];
      if (key && r?.status === 'ok' && !linkOf(part, f.id + '.' + key)) {
        const sf = typeof f.sketch === 'string' ? P.featureById(part, f.sketch) : null, frame = sf ? regen.frames.get(sf.id) : null;
        h = f.type === 'extrude' ? HM.extrudeHandle(f, frame, sf?.sketch) : HM.revolveHandle(f, regen.axes?.get(f.id), frame, sf?.sketch);
      }
    }
    handles.show(h);
  }
  function makeHandles() {
    handles = new FeatureHandles(view, ui.gl.parentElement, {
      t, fmt: (v) => f3(v),
      onDragStart: (h) => status(t(h.kind === 'extrude' ? 'app.handle.dragging_depth' : 'app.handle.dragging_angle'), true),
      onDrag: (h, v) => {
        const f = P.featureById(part, h.id);
        if (!f) return;
        f[h.key] = v;   // live: the undo step is made when the drag ends
        if (!dragRaf) dragRaf = requestAnimationFrame(() => { dragRaf = 0; rebuild(); });
      },
      onDragEnd: (h, v, v0) => {
        const f = P.featureById(part, h.id);
        if (!f) return;
        f[h.key] = v0;
        if (v !== v0) commit(t(h.kind === 'extrude' ? 'app.handle.undo_depth' : 'app.handle.undo_angle', { name: f.name }), () => { f[h.key] = v; });
        else { rebuild(); renderAll(); }
        built().then(() => { const r = regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t(h.kind === 'extrude' ? 'app.handle.done_depth' : 'app.handle.done_angle', { name: f.name, v: f3(f[h.key]) })); });
      },
      onCancel: (h, v0) => { const f = P.featureById(part, h.id); if (f) f[h.key] = v0; rebuild(); renderAll(); status(t('app.handle.cancelled', { v: f3(v0) })); },
      // the box beside the handle hands what was typed to the feature's own box (limits, =expressions, one undo step)
      onType: (h, text) => { const src = ui.props.querySelector(`[data-param-key="${h.id}.${h.key}"]`); if (src && !src.disabled) { src.value = text.replace(/\s*(mm|°)$/, ''); src.dispatchEvent(new Event('change', { bubbles: true })); } },
    });
  }

  function syncPlanes() {
    if (!view || (mode !== 'model' && mode !== 'pick')) return;
    const want = pendingSketch || sel?.kind === 'plane';
    view.setPlanesFaint(!want && !!regen?.mesh);
    view.setPlanesVisible(want || settings.planes);
  }

  function renderAll() {
    modeNotes().tree.hidden = mode === 'assembly';
    modeNotes().asm.hidden = mode !== 'assembly';
    modeNotes().factsH.textContent = mode === 'assembly' ? t('app.facts.h_assembly') : t('app.props.part');
    if (mode === 'assembly') { renderAsmTree(); renderAsmProps(); renderAsmFacts(); updateTools(); ui.hint.hidden = true; return; }
    paramsUI.render();   // first: it drops equations whose numbers were deleted
    syncPlanes(); syncHandles();
    renderTree(); renderProps(); renderFacts(); updateTools(); show3DSketches(); ui.hint.hidden = ws !== WS.DESIGN || mode === 'sketch' || mode === 'drawing' || part.features.length > 0;
  }

  // ---------------------------------------------------------------- toolbar
  const SKETCH_TOOLS = { 'tool-line': 'line', 'tool-rect': 'rect', 'tool-circle': 'circle', 'tool-arc': 'arc', 'tool-point': 'point', 'tool-centerline': 'centerline', 'tool-fillet': 'fillet', 'tool-dimension': 'dimension',
    'tool-spline': 'spline', 'tool-cspline': 'cspline', 'tool-project': 'project', 'tool-trim': 'trim', 'tool-extend': 'extend', 'tool-offset': 'offset', 'tool-mirror': 'mirror', 'tool-polygon': 'polygon', 'tool-slot': 'slot', 'tool-lpattern': 'lpattern', 'tool-cpattern': 'cpattern' };
  function updateTools() {
    showTouchBar();
    const inSk = mode === 'sketch', inAsm = mode === 'assembly', inDr = mode === 'drawing', inPick = mode === 'pick';
    // contextual: sketch tools only while sketching, features only on the part, drawing tools on the sheet, assembly tools only in an assembly
    for (const g of ui.tools.querySelectorAll('[data-group]')) g.hidden = (inAsm && ['sketch', 'features', 'drawing'].includes(g.dataset.group)) || (inSk && ['features', 'drawing'].includes(g.dataset.group)) || (inDr && ['sketch', 'features', 'assembly'].includes(g.dataset.group)) || (inPick && ['sketch', 'drawing', 'assembly'].includes(g.dataset.group));
    // workspaces: Design's groups only in Design; each other workspace's groups only in it
    for (const g of ui.tools.querySelectorAll('[data-group]')) { const w = g.dataset.workspaceGroup; if (w) g.hidden = w !== ws.id; else if (ws !== WS.DESIGN && DESIGN_GROUPS.includes(g.dataset.group)) g.hidden = true; }
    for (const b of ui.tools.querySelectorAll('[data-group="drawing"] [data-cmd]')) b.hidden = b.dataset.cmd === 'drawing' ? inDr : !inDr;
    for (const b of ui.tools.querySelectorAll('[data-group="features"] [data-cmd]')) b.hidden = b.dataset.cmd === 'pick-done' ? !inPick : inPick;
    const fm = ui.tools.querySelector('[data-features-menu]'); if (fm) fm.hidden = inPick;
    for (const b of ui.tools.querySelectorAll('[data-group="drawing"] [data-cmd^="dr-"]')) b.setAttribute('aria-pressed', String(!!drawingState && drawingState.tool === b.dataset.cmd.slice(3)));
    for (const b of ui.tools.querySelectorAll('[data-group="sketch"] [data-cmd]')) b.hidden = b.dataset.cmd === 'sketch' ? inSk : !inSk;
    for (const d of ui.tools.querySelectorAll('[data-sketch-menu]')) d.hidden = !inSk;
    for (const b of ui.tools.querySelectorAll('[data-cmd^="asm-"]')) {
      const c = b.dataset.cmd;
      b.hidden = inAsm ? ['asm-new', 'asm-back'].includes(c) : !(c === 'asm-new' || (c === 'asm-back' && editPartOf));
      if (c === 'asm-new') b.hidden = inAsm || !!editPartOf;
    }
    for (const b of ui.tools.querySelectorAll('[data-cmd="export-bom"]')) b.hidden = !inAsm;
    // File › Standard part opens a new part: not offered inside a sketch, which keeps the sketch toolbar to one row at 1440 px
    for (const b of ui.tools.querySelectorAll('[data-cmd="std-part"]')) b.hidden = inSk;
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-measure"]')) b.setAttribute('aria-checked', String(!!measure?.active));
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-section"]')) b.setAttribute('aria-checked', String(!!section?.active));
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-planes"]')) b.setAttribute('aria-checked', String(settings.planes));
    for (const [c, m] of [['view-draft', 'draft'], ['view-zebra', 'zebra'], ['view-curvature', 'curvature']]) for (const b of ui.tools.querySelectorAll(`[data-cmd="${c}"]`)) b.setAttribute('aria-checked', String(!!draft?.active && draft.mode === m));
    for (const b of ui.tools.querySelectorAll('[data-cmd]')) {
      const c = b.dataset.cmd;
      if (b.closest('[data-workspace-group]')) { wsToolState(b); continue; }
      let dis = !M && !['new', 'open'].includes(c);
      if (inAsm) {
        if (c === 'asm-insert-copy') dis = dis || !asm?.instances.length;
        if (c === 'asm-edit') dis = dis || asmSel?.kind !== 'inst';
        if (c === 'asm-joint') { dis = dis || (asm?.instances.length || 0) < 2; b.setAttribute('aria-pressed', String(!!jointPick)); }
        if (c === 'asm-stackup') b.setAttribute('aria-pressed', String(!!stackup?.active));
        if ((/^export-/.test(c) && !ASM_EXPORTS.includes(c)) || c === 'view-normal') dis = true;
        if (['export-step', 'export-step214', 'export-drawing'].includes(c)) { dis = dis || !useExact; if (exactOff()) b.title = (b.title.replace(/ — .*$/, '') || b.textContent.trim()) + ' — ' + t('kernel.not_built.short'); }
        if (c === 'undo') dis = !asmHist.undoStack.length;
        if (c === 'redo') dis = !asmHist.redoStack.length;
        b.disabled = dis;
        continue;
      }
      if (c === 'asm-new') dis = dis || inSk || !(regen?.mesh || asm);
      if (SKETCH_TOOLS[c] || c === 'construction' || c === 'exit-sketch') dis = dis || !inSk;
      if (c === 'sketch') dis = dis || inSk;
      if (['extrude', 'cut-extrude', 'revolve', 'revolve-cut', 'hole', 'lpattern', 'cpattern', 'mirror', 'view-normal'].includes(c) || /^view-(iso|front|back|top|bottom|right|left)$/.test(c)) dis = dis || inSk || inDr;
      if (['plane', 'axis', 'point'].includes(c)) dis = dis || inSk || inDr;
      // with no exact kernel at all (0.4) these stay clickable and answer "Not built yet" (run), so touch users get the words too
      if (MESH_BUILT.has(c) && exactOff()) { dis = dis || inSk || inDr; b.title = b.title.replace(/ — .*$/, '') || b.textContent.trim(); delete b.dataset.notBuilt; }   // the mesh kernel builds these (K.4)
      else if (['fillet', 'chamfer', 'shell', 'sweep', 'loft', 'draft', ...SURFACE_MENU, ...BODY_MENU, ...SHEET_MENU, ...RIB_MENU].includes(c) && exactOff()) { dis = dis || inSk || inDr; b.title = (b.title.replace(/ — .*$/, '') || b.textContent.trim()) + ' — ' + t('kernel.not_built.short'); b.dataset.notBuilt = ''; }
      else if (['fillet', 'chamfer', 'shell', 'sweep', 'loft', 'draft', ...SURFACE_MENU, ...BODY_MENU, ...SHEET_MENU, ...RIB_MENU].includes(c)) { dis = dis || inSk || inDr || !useExact; const base = b.dataset.exactBase ?? (b.dataset.exactBase = b.title.replace(/ — needs.*$/, '')); b.title = useExact ? base : t(exact.state === 'loading' ? 'app.tools.needs_exact_loading' : 'app.tools.needs_exact_off', { title: base }); }
      if (c === 'drawing') dis = dis || inSk || !regen?.mesh;
      if (/^export-step(214)?$/.test(c)) { dis = dis || !useExact; if (exactOff()) b.title = (b.title.replace(/ — .*$/, '') || b.textContent.trim()) + ' — ' + t('kernel.not_built.short'); }
      if (c === 'asm-new') dis = dis || inDr || inPick;
      if (c === 'undo') dis = !hist.undoStack.length;
      if (c === 'redo') dis = !hist.redoStack.length;
      b.disabled = dis;
      if (SKETCH_TOOLS[c]) b.setAttribute('aria-pressed', String(inSk && editor.tool === SKETCH_TOOLS[c]));
      if (c === 'sketch') b.setAttribute('aria-pressed', String(pendingSketch));
    }
    applyEditState();
    syncWsSwitcher();
  }

  /** Edit commands: enabled by context; a disabled one says why in its title. */
  const EDIT_CMDS = ['copy', 'cut', 'paste', 'paste-in-place', 'duplicate', 'delete', 'select-all', 'select-none'];
  function applyEditState() {
    const st = editState();
    for (const b of ui.tools.querySelectorAll('[data-cmd]')) {
      const c = b.dataset.cmd;
      if (!EDIT_CMDS.includes(c)) continue;
      if (b.dataset.baseTitle === undefined) b.dataset.baseTitle = b.getAttribute('title') || '';
      const s0 = st[c];
      b.disabled = !s0.ok;
      const base = b.dataset.baseTitle;
      const ttl = s0.ok ? base : (base ? base + ' — ' : '') + s0.why;
      if (ttl) b.setAttribute('title', ttl); else b.removeAttribute('title');
    }
  }
  function editState() {
    const yes = { ok: true, why: '' }, no = (why) => ({ ok: false, why });
    const all = (v) => Object.fromEntries(EDIT_CMDS.map((c) => [c, v]));
    if (!M && !useExact) return all(no(t('app.edit.loading')));
    const clipWord = clip ? C.describeClip(clip) : '';
    if (ws !== WS.DESIGN) return { ...all(no(t('app.edit.other_ws', { ws: ws.label }))), ...(wsCall('editState', host) || {}) };
    if (mode === 'pick') return all(no(t('app.edit.picking')));
    if (mode === 'drawing') {
      const s = drawingState?.sel;
      return {
        ...all(no(t('app.edit.drawing'))),
        delete: s ? yes : no(t('app.edit.select_note')),
        'select-all': no(t('app.edit.notes_one_at_a_time')),
        'select-none': s ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    if (mode === 'sketch') {
      const sk = editingFeature()?.sketch;
      const ents = sk ? [...editor.sel].filter((id) => id !== S.ORIGIN && sk.entities.some((e) => e.id === id)) : [];
      const any = [...editor.sel].some((id) => id !== S.ORIGIN);
      const can = ents.length ? yes : no(t('app.edit.select_geometry'));
      const paste = clip?.kind === 'sketch' ? yes : clip ? no(t(clip.kind === 'instance' ? 'app.edit.clip_part_to_asm' : 'app.edit.clip_features_exit_sketch', { what: clipWord })) : no(t('app.edit.nothing_to_paste_sketch'));
      return {
        copy: can, cut: can, duplicate: can, paste, 'paste-in-place': paste,
        delete: any ? yes : no(t('app.edit.select_geometry_any')),
        'select-all': sk?.entities.length ? yes : no(t('app.edit.sketch_empty')),
        'select-none': editor.sel.size || editor.tool !== 'select' ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    if (mode === 'assembly') {
      const inst = asmSel?.kind === 'inst';
      const can = inst ? yes : no(asmSel ? t('app.edit.joint_no_copy') : t('app.edit.select_part'));
      const paste = clip?.kind === 'instance' ? yes : clip ? no(t(clip.kind === 'sketch' ? 'app.edit.clip_sketch_to_sketch' : 'app.edit.clip_features_to_part', { what: clipWord })) : no(t('app.edit.nothing_to_paste_part'));
      return {
        copy: can, duplicate: can, paste, 'paste-in-place': paste,
        cut: !inst ? can : asm.instances.length > 1 ? yes : no(t('app.edit.asm_keeps_one')),
        delete: asmSel ? yes : no(t('app.edit.select_part_or_joint')),
        'select-all': no(t('app.edit.parts_one_at_a_time')),
        'select-none': asmSel || jointPick ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    const f = sel?.kind === 'feature' ? P.featureById(part, sel.id) : null;
    const can = !f ? no(t('app.edit.select_copyable')) : C.COPYABLE.has(f.type) ? yes : no(t('app.edit.not_copyable', { name: f.name }));
    const paste = clip?.kind === 'features' ? yes : clip ? no(t(clip.kind === 'sketch' ? 'app.edit.clip_sketch_open_first' : 'app.edit.clip_part_to_asm', { what: clipWord })) : no(t('app.edit.nothing_to_paste_feature'));
    return {
      copy: can, cut: can, duplicate: can, paste, 'paste-in-place': paste,
      delete: f ? yes : no(t('app.edit.select_feature')),
      'select-all': no(t('app.edit.history_one_at_a_time')),
      'select-none': sel || pick || multi.length || pendingSketch ? yes : no(t('app.edit.nothing_selected')),
    };
  }

  async function run(cmd) {
    if (addons?.runCommand(cmd)) return;   // an add-on's command ('<add-on id>:<name>')
    for (const d of ui.tools.querySelectorAll('details[open]')) d.open = false;
    // the active workspace sees every command first; its own (<id>-…) never reach Design
    if (ws !== WS.DESIGN && wsCall('command', cmd, host) === true) return;
    if (WS.workspaceOfCmd(cmd)) return;
    if (measure?.active && !/^(view-|export-|undo$|redo$|save$)/.test(cmd)) measure.stop();
    if (cmd === 'view-planes') { settings.planes = !settings.planes; persistSettings(); syncPlanes(); updateTools(); status(t(settings.planes ? 'app.planes.shown' : 'app.planes.hidden')); return; }
    if (cmd === 'view-section') { section.toggle(); updateTools(); return; }
    if (cmd === 'view-draft') { draft.toggle('draft'); updateTools(); return; }
    if (cmd === 'view-zebra') { draft.toggle('zebra'); updateTools(); return; }
    if (cmd === 'view-curvature') { draft.toggle('curvature'); updateTools(); return; }
    if (cmd === 'view-measure') { if (mode === 'sketch' || mode === 'drawing') { status(t('app.measure.model_only')); return; } measure.toggle(); updateTools(); return; }
    if (cmd === 'view-mass') { if (mode === 'sketch' || mode === 'drawing') { status(t('app.measure.mass_model_only')); return; } measure.mass(); updateTools(); return; }
    if (cmd === 'export-print') return checkPrint();
    if (cmd === 'export-nest') return openNest();
    if (mode === 'assembly' && ASM_EXPORTS.includes(cmd)) return asmTools.exportCmd(cmd);
    if (SKETCH_TOOLS[cmd]) { if (mode === 'sketch') editor.setTool(editor.tool === SKETCH_TOOLS[cmd] ? 'select' : SKETCH_TOOLS[cmd]); focusStage(); return; }
    if (exactOff() && P.EXACT_ONLY.has(cmd) && !MESH_BUILT.has(cmd)) { status(t('kernel.not_built', { what: P.FEATURE_LABELS[cmd] }), true); return; }
    switch (cmd) {
      case 'new': return newPart();
      case 'std-part': return openStandardPart();
      case 'open': if (await confirmDiscard()) { const [hf] = await fileHost.openFile({ types: [{ description: 'PartCraft, STEP', extensions: ['.json', '.step', '.stp'] }] }); await openFromHost(hf); } return;   // i18n-ignore: a file type label the OS shows
      case 'save': return savePart();
      case 'export-stl': return exportMesh('stl');
      case 'export-3mf': return exportMesh('3mf');
      case 'export-ifc': return exportIfc();
      case 'export-step': return exportStep('AP242');
      case 'export-step214': return exportStep('AP214');
      case 'export-step-faceted': return exportMesh('step');
      case 'export-step214-faceted': return exportMesh('step214');
      case 'export-sw-step': return exportForSw(false);
      case 'export-sw-macro': return exportForSw(true);
      case 'fillet': return newFeature('fillet', {});
      case 'chamfer': return newFeature('chamfer', {});
      case 'shell': return newFeature('shell', {});
      case 'plane': case 'axis': case 'point': case 'sweep': case 'loft': case 'draft': return newFeature(cmd, {});
      case 'patch': case 'surfloft': case 'stitch': case 'thicken': case 'offsetsurf': case 'extendsurf': case 'trimsurf': case 'gordon': return newFeature(cmd, {});
      case 'combine': case 'movebody': case 'scalebody': case 'pathpattern': return newFeature(cmd, {});
      case 'sheetbase': case 'sheetflange': case 'rib': return newFeature(cmd, {});
      case 'thread': return newFeature('thread', {});
      case 'pick-done': return endPick();
      case 'drawing': return enterDrawing();
      case 'dr-back': return leaveDrawing();
      case 'dr-datum': case 'dr-fcf': case 'dr-finish': case 'dr-detail': return drawingTool(cmd.slice(3));
      case 'dr-pdf': return exportDrawing();
      case 'export-dxf': return exportDxf();
      case 'export-drawing': return exportDrawing();
      case 'sketch': return startSketch();
      case 'exit-sketch': return exitSketch();
      case 'construction': editor.toggleConstruction(); return;
      case 'extrude': return newFeature('extrude', { op: 'add' });
      case 'cut-extrude': return newFeature('extrude', { op: 'cut', end: 'through' });
      case 'revolve': return newFeature('revolve', { op: 'add' });
      case 'revolve-cut': return newFeature('revolve', { op: 'cut' });
      case 'hole': return newFeature('hole', {});
      case 'lpattern': return newFeature('lpattern', {});
      case 'cpattern': return newFeature('cpattern', {});
      case 'mirror': return newFeature('mirror', {});
      case 'undo': return undoRedo(true);
      case 'redo': return undoRedo(false);
      case 'delete': return editAct('delete');
      case 'copy': case 'cut': case 'paste': case 'paste-in-place': case 'duplicate': case 'select-all': case 'select-none': return editAct(cmd);
      case 'asm-new': return enterAssembly();
      case 'asm-back': return backToAssembly();
      case 'asm-insert-copy': return asmInsertCopy();
      case 'asm-insert-file': ui.insertFile.click(); return;
      case 'asm-joint': return asmStartJoint();
      case 'asm-check': return asmCheck();
      case 'asm-stackup': stackup.toggle(); updateTools(); return;
      case 'asm-edit': return asmEditPart();
      case 'asm-close': return closeAssembly();
      case 'view-fit': if (mode === 'sketch') editor.fit(); else view.fit(); return;
      case 'view-normal': return normalTo();
      default: if (cmd.startsWith('view-')) view.view(cmd.slice(5));
    }
  }
  ui.tools.addEventListener('click', (e) => { const b = e.target.closest('button[data-cmd]'); if (b && !b.disabled) run(b.dataset.cmd); });
  document.addEventListener('click', (e) => { for (const d of ui.tools.querySelectorAll('details[open]')) if (!d.contains(e.target)) d.open = false; });

  function normalTo() {
    if (mode === 'sketch') return;
    if (pick?.kind === 'face') { view.normalTo(V.frameFor(pick.normal, pick.point)); return; }
    if (sel?.kind === 'plane') { view.normalTo(V.BASE_PLANES[sel.name]); return; }
    if (sel?.kind === 'feature') { const fr = regen?.frames.get(sel.id); if (fr) { view.normalTo(fr); return; } }
    status(t('app.view.normal_needs_pick'));
  }

  function undoRedo(isUndo) {
    queueMicrotask(() => noteChange());   // autosave: an undo or redo is an edit too
    if (mode === 'assembly') {
      const r = isUndo ? asmHist.undo(asm) : asmHist.redo(asm);
      if (!r) { status(isUndo ? t('app.undo.nothing_undo') : t('app.undo.nothing_redo')); return; }
      // an undone interference filter (0.5 WL.33) leaves the parts where they were: the check's results stay
      const bare = (a) => JSON.stringify({ ...a, clashFilter: undefined, version: undefined });
      const before = bare(asm);
      asm = A.readAssembly(r.part);
      const sameParts = bare(asm) === before;
      asmDirty = true; jointPick = null;
      if (!sameParts) clashes = null;
      if (asmSel && !(asmSel.kind === 'inst' ? asm.instances : asm.joints).some((x) => x.id === asmSel.id)) asmSel = null;
      rebuildAsm(); renderAll();
      status(t(isUndo ? 'app.undo.undid' : 'app.undo.redid', { what: r.label.toLowerCase() }));
      return;
    }
    const r = isUndo ? hist.undo(part) : hist.redo(part);
    if (!r) { status(isUndo ? t('app.undo.nothing_undo') : t('app.undo.nothing_redo')); return; }
    part = r.part;
    dirty = true;
    if (editing && !P.featureById(part, editing)) { if (mode === 'sketch') { editor.active = false; ui.sk.hidden = true; view.setSketch(null); ui.skBar.hidden = true; } mode = 'model'; editing = null; }
    if (sel?.kind === 'feature' && !P.featureById(part, sel.id)) sel = null;
    editor.sel.clear();
    rebuild();
    renderAll();
    status(t(isUndo ? 'app.undo.undid' : 'app.undo.redid', { what: r.label.toLowerCase() }));
  }

  // ---------------------------------------------------------------- edit: copy, cut, paste, duplicate, select
  function readStoredClip() {
    try { const raw = localStorage.getItem(C.STORAGE_KEY); return raw ? C.readClip(raw) : null; } catch { return null; }
  }
  window.addEventListener('storage', (e) => { if (e.key === C.STORAGE_KEY) { clip = readStoredClip(); updateTools(); } });
  function setClip(c) {
    clip = c;
    try { localStorage.setItem(C.STORAGE_KEY, JSON.stringify(c)); } catch { /* too big (a STEP inside) or a private window: this tab keeps it */ }
    updateTools();
  }

  /** Where a pasted / duplicated part goes: beside every part (keeping the copy's own turn), or exactly in place. */
  async function pastePlace(c, inPlace) {
    if (inPlace) return [...c.place];
    let build = null;
    const want = P.toJSON(P.readPart(c.part));
    for (const [pid, p] of Object.entries(asm.parts)) if (asmBuilds.get(pid)?.stats && P.toJSON(P.readPart(p.part)) === want) build = asmBuilds.get(pid);
    if (!build) build = await buildPart(P.readPart(c.part));
    let minX = 0;
    if (build?.stats) {
      minX = Infinity;
      const b = build.stats.bbox;
      for (const x of [b.min[0], b.max[0]]) for (const y of [b.min[1], b.max[1]]) for (const z of [b.min[2], b.max[2]]) minX = Math.min(minX, V.applyMat(c.place, [x, y, z])[0]);
    }
    return V.matMul(V.translation([placeBeside() + 20 - minX, 0, 0]), c.place);
  }

  async function editAct(cmd) {
    const st = editState()[cmd];
    if (!st.ok) { status(st.why); return; }
    for (const d of ui.tools.querySelectorAll('details[open]')) d.open = false;
    if (ws !== WS.DESIGN) { wsCall('command', cmd, host); return; }
    if (mode === 'drawing') {
      if (cmd === 'delete') deleteNote();
      else if (cmd === 'select-none') { drawingState.sel = null; composeShow(); renderProps(); updateTools(); }
      return;
    }
    if (mode === 'sketch') return sketchEdit(cmd);
    if (mode === 'assembly') return asmEdit(cmd);
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
    if (cmd === 'paste') { editor.startPaste(clip, t('app.undo.paste')); updateTools(); focusStage(); return; }
    if (cmd === 'paste-in-place') {
      let made = null;
      sketchCommit(t('app.undo.paste_in_place'), (sk) => { made = C.pasteSketch(sk, clip, [0, 0]); });
      editor.setTool('select');
      editor.sel = new Set(made.ids);
      editor.draw(); renderProps(); updateTools();
      status(t('app.clip.sketch_pasted_in_place', { what: C.describeClip(clip), dropped: clip.dropped ? t('app.clip.sketch_dropped', { n: clip.dropped }) : '' }));
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
    if (cmd === 'select-none') { pick = null; sel = null; multi = []; pendingSketch = false; showMarks(); view.setHighlight(null); view.setPlaneState(null, null); renderAll(); return; }
    if (cmd === 'paste' || cmd === 'paste-in-place') {
      let out = null;
      try { out = commit(cmd === 'paste' ? t('app.undo.paste') : t('app.undo.paste_in_place'), () => C.pasteFeatures(part, clip)); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
      const last = out.features[out.features.length - 1];
      sel = { kind: 'feature', id: last.id };
      renderAll();
      await built();
      const bad = out.features.map((g) => regen.results.get(g.id)).find((r) => r?.status === 'error');
      const names = out.features.map((g) => g.name).join(t('app.edge.and_sep'));
      status((clip.from && clip.from !== part.name ? t('app.clip.features_pasted_from', { names, from: clip.from }) : t('app.clip.features_pasted', { names })) + (out.note ? ' ' + out.note : '') + ' ' + (bad ? bad.message : t('app.clip.change_on_right')), true);
      return;
    }
    let c;
    try { c = C.copyFeature(part, sel.id); } catch (err) { status(err.message); return; }
    if (cmd === 'copy') { setClip(c); status(t('app.clip.feature_copied', { what: C.describeClip(c) })); return; }
    if (cmd === 'cut') { setClip(c); await deleteSelected(); return; }
    if (cmd === 'duplicate') {
      const out = commit(t('app.undo.duplicate'), () => C.pasteFeatures(part, c));
      sel = { kind: 'feature', id: out.features[out.features.length - 1].id };
      renderAll();
      await built();
      status(t('app.clip.feature_duplicated', { names: out.features.map((g) => g.name).join(t('app.edge.and_sep')) }), true);
    }
  }

  async function asmEdit(cmd) {
    if (cmd === 'delete') return asmDelete();
    if (cmd === 'select-none') { asmSel = null; jointPick = null; renderAll(); highlightAsm(); return; }
    if (cmd === 'copy' || cmd === 'cut') {
      const c = C.copyInstance(asm, asmSel.id);
      setClip(c);
      if (cmd === 'cut') { await asmDelete(); return; }
      status(t('app.clip.part_copied', { name: instById(asmSel.id).name }));
      return;
    }
    const inPlace = cmd === 'paste-in-place';
    const c = cmd === 'duplicate' ? C.copyInstance(asm, asmSel.id) : clip;
    let place;
    try { place = await pastePlace(c, inPlace); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
    if (mode !== 'assembly' || !asm) return;
    let inst;
    try { inst = commitAsm({ duplicate: () => t('app.undo.duplicate'), paste: () => t('app.undo.paste'), 'paste-in-place': () => t('app.undo.paste_in_place') }[cmd](), () => C.pasteInstance(asm, c, place)); } catch (err) { status(t('app.clip.paste_failed', { error: err.message })); return; }
    asmSel = { kind: 'inst', id: inst.id };
    renderAll(); highlightAsm();
    status(t(inPlace ? (cmd === 'duplicate' ? 'app.clip.part_duplicated_in_place' : 'app.clip.part_pasted_in_place') : (cmd === 'duplicate' ? 'app.clip.part_duplicated' : 'app.clip.part_pasted'), { name: inst.name }));
  }

  // ---------------------------------------------------------------- assembly
  function enterAssembly() {
    if ((!M && !useExact) || notInDesign()) return;
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    if (mode === 'drawing') return;
    if (!asm) {
      if (!regen?.mesh) { status(t('app.asm.build_first')); return; }
      asm = A.newAssembly((part.name || 'Part') + ' assembly');   // i18n-ignore: a default name saved in the file (data)
      A.insertPart(asm, part);
      asmHist.clear(); asmDirty = true;
      status(t('app.asm.started', { name: part.name }));
    } else status(t('app.asm.back_in', { name: asm.name }));
    mode = 'assembly';
    sel = null; pick = null; asmSel = null; jointPick = null; clashes = null;
    view.setPlanesVisible(false);
    rebuildAsm(); renderAll(); view.view('iso');
  }

  /** One part built by whichever kernel is in use (a promise either way). */
  const buildPart = (p) => (useExact ? exact.call('regen', { part: p }) : Promise.resolve(regenerate(p, M)));
  let asmSeq = 0;
  async function rebuildAsm() {
    if ((!M && !useExact) || !asm) return;
    const t0 = performance.now();
    const seq = ++asmSeq;
    for (const [pid, p] of Object.entries(asm.parts)) {
      const have = asmBuilds.get(pid);
      if (!have || have.src !== p.part) {
        const src = p.part;
        const r = await buildPart(src);
        if (seq !== asmSeq || !asm) return;
        r.src = src; asmBuilds.set(pid, r);
      }
    }
    for (const pid of [...asmBuilds.keys()]) if (!asm.parts[pid]) asmBuilds.delete(pid);
    asmPlace = A.placeAll(asm, asmBuilds);
    view.setSketchLines([]);
    showInstances();
    const bad = asmPlace.problems.filter((x) => !x.free).length;
    ui.build.textContent = bad ? t('app.asm.joint_problems', { n: bad }) : t('app.asm.placed', { ms: Math.round(performance.now() - t0) });
    ui.build.className = 'pc-chip ' + (bad ? 'is-error' : 'is-ok');
    if (mode === 'assembly') { renderAsmTree(); renderAsmFacts(); keepFocus(() => renderAsmProps()); }
    for (const w of asmWaiters.splice(0)) w();
  }
  const asmWaiters = [];
  const asmBuilt = () => new Promise((res) => { if (asm && asmPlace && Object.keys(asm.parts).every((pid) => asmBuilds.get(pid)?.src === asm.parts[pid].part)) res(); else asmWaiters.push(res); });

  function showInstances() {
    const shown = asmTools ? asmTools.displayWorld(asmPlace.world) : asmPlace.world;   // an exploded view moves what is drawn only
    view.setInstances(asm.instances.filter((i) => asmBuilds.get(i.part)?.mesh).map((i) => ({ id: i.id, data: asmBuilds.get(i.part).mesh, matrix: shown.get(i.id) })));
    highlightAsm();
    asmTools?.afterShow(); measure?.refresh(); section?.refresh(); draft?.refresh(); stackup?.refresh();
  }

  function highlightAsm() {
    const inst = asmSel?.kind === 'inst' ? asmSel.id : null;
    const it = inst && view.instances.find((o) => o.id === inst);
    if (it) view.setHighlight({ tris: [...Array(it.data.indices.length / 3).keys()], data: it.data, matrix: it.matrix });
    else if (jointPick?.a?.hit) { const h = jointPick.a.hit; const o = view.instances.find((x) => x.id === h.inst); view.setHighlight({ tris: h.tris, data: h.data, matrix: o ? o.matrix : h.matrix }); }
    else view.setHighlight(null);
  }

  function commitAsm(label, fn) {
    asmHist.push(asm, label);
    const r = fn();
    asmDirty = true; clashes = null;
    rebuildAsm(); renderAll();
    return r;
  }

  const instById = (id) => asm.instances.find((i) => i.id === id);
  const jointById = (id) => asm.joints.find((j) => j.id === id);

  /** A flat face picked on an instance → its mate plane in the part (stable when the face was made by a sketch edge). */
  function mateFromHit(h) {
    const inst = instById(h.inst), build = asmBuilds.get(inst.part);
    if ((build?.exact || build?.named) && h.face !== undefined) {
      const f = build.faces[h.face];
      if (!f || f.type !== 'plane') return null;
      return { inst: h.inst, plane: f.name ? refForName(f.name) : { kind: 'fixed', o: f.o.map((v) => +v.toFixed(9)), n: f.n.map((v) => +v.toFixed(12)) } };
    }
    const grp = view.instances.find((o) => o.id === h.inst).groups;
    const g = grp.groups[h.group];
    const I = h.data.indices;
    const key = (a, b) => (a < b ? a + ',' + b : b + ',' + a);
    const inG = new Set(g.tris);
    const edgeTri = new Map();
    for (let t = 0; t < I.length / 3; t++) for (let k = 0; k < 3; k++) { const kk = key(I[t * 3 + k], I[t * 3 + (k + 1) % 3]); if (!edgeTri.has(kk)) edgeTri.set(kk, []); edgeTri.get(kk).push(t); }
    let flat = true;
    for (const t of g.tris) for (let k = 0; k < 3 && flat; k++) for (const o of edgeTri.get(key(I[t * 3 + k], I[t * 3 + (k + 1) % 3])) || []) {
      if (!inG.has(o) && V.dot(grp.groups[grp.faceOf[o]].n, g.n) > Math.cos(20 * Math.PI / 180)) flat = false;
    }
    if (!flat) return null;
    const plane = h.feature ? faceRefAt(build, h.feature, g.n, h.point) : { kind: 'fixed', o: h.point, n: g.n };
    return { inst: h.inst, plane };
  }

  function asmPick(h) {
    if (jointPick) {
      if (!h || h.kind !== 'face' || !h.inst) { status(t('app.joint.pick_flat'), true); return; }
      const end = mateFromHit(h);
      if (!end) { status(t('app.joint.face_curved'), true); return; }
      if (!jointPick.a) {
        jointPick.a = { ...end, hit: h };
        highlightAsm(); renderAsmProps();
        status(t('app.joint.pick_second', { name: instById(h.inst).name }), true);
        return;
      }
      if (end.inst === jointPick.a.inst) { status(t('app.joint.different_part'), true); return; }
      const a = { inst: jointPick.a.inst, plane: jointPick.a.plane }, b = end;
      const revolveFace = (e) => { const pr = asm.parts[instById(e.inst).part].part; return e.plane.kind === 'face' && pr.features.find((f) => f.id === e.plane.feature)?.type === 'revolve'; };
      const type = revolveFace(a) && revolveFace(b) ? 'revolute' : 'rigid';
      jointPick = null;
      const j = commitAsm(t('app.undo.joint'), () => A.addJoint(asm, type, a, b));
      asmSel = { kind: 'joint', id: j.id };
      renderAll(); highlightAsm();
      const pr = asmPlace.problems.find((x) => x.joint === j.id);
      status(pr ? pr.message : t('app.joint.joins', { joint: j.name, a: instById(a.inst).name, b: instById(b.inst).name }));
      return;
    }
    asmSel = h && h.kind === 'face' && h.inst ? { kind: 'inst', id: h.inst } : null;
    renderAll(); highlightAsm();
  }

  function asmStartJoint() {
    if (mode !== 'assembly') return;
    if (asm.instances.length < 2) { status(t('app.joint.need_two')); return; }
    jointPick = { a: null };
    asmSel = null;
    highlightAsm(); updateTools(); renderAsmProps();
    status(t('app.joint.start'), true);
  }

  function placeBeside() {
    let maxX = -Infinity;
    for (const i of asm.instances) {
      const b = asmBuilds.get(i.part)?.stats;
      if (!b) continue;
      const W = asmPlace.world.get(i.id);
      for (const x of [b.bbox.min[0], b.bbox.max[0]]) for (const y of [b.bbox.min[1], b.bbox.max[1]]) for (const z of [b.bbox.min[2], b.bbox.max[2]]) maxX = Math.max(maxX, V.applyMat(W, [x, y, z])[0]);
    }
    return maxX === -Infinity ? 0 : maxX;
  }

  function asmInsertCopy() {
    const src = asmSel?.kind === 'inst' ? instById(asmSel.id) : asm.instances[asm.instances.length - 1];
    if (!src) return;
    const b = asmBuilds.get(src.part)?.stats;
    const dx = placeBeside() + 20 - (b ? b.bbox.min[0] : 0);
    const inst = commitAsm(t('app.undo.insert_copy'), () => A.insertPart(asm, null, { pid: src.part, place: V.translation([dx, 0, 0]) }));
    asmSel = { kind: 'inst', id: inst.id };
    renderAll(); highlightAsm();
    status(t('app.asm.inserted', { name: inst.name }));
  }

  ui.insertFile.addEventListener('change', async () => {
    const f = ui.insertFile.files[0]; ui.insertFile.value = '';
    if (!f || !asm) return;
    let p;
    try { p = P.readPart(await f.text()); } catch (err) { status(err.message); return; }
    const r = await buildPart(p);
    if (!r.mesh) { status(t('app.asm.no_solid', { file: f.name })); return; }
    const dx = placeBeside() + 20 - r.stats.bbox.min[0];
    const inst = commitAsm(t('app.undo.insert_part'), () => A.insertPart(asm, p, { place: V.translation([dx, 0, 0]) }));
    asmSel = { kind: 'inst', id: inst.id };
    renderAll(); highlightAsm();
    status(t('app.asm.inserted_from', { name: inst.name, file: f.name }));
  });

  async function asmDelete() {
    if (!asmSel) { status(t('app.asm.select_to_remove')); return; }
    if (asmSel.kind === 'joint') { const j = jointById(asmSel.id); commitAsm(t('app.undo.remove_joint'), () => { asm.joints = asm.joints.filter((x) => x.id !== j.id); }); asmSel = null; renderAll(); highlightAsm(); status(t('app.asm.removed', { name: j.name })); return; }
    const inst = instById(asmSel.id);
    if (asm.instances.length === 1) { status(t('app.asm.keep_one')); return; }
    const nj = asm.joints.filter((j) => j.a.inst === inst.id || j.b.inst === inst.id).length;
    if (nj) {
      const ch = await ask({ title: t('app.asm.remove_title', { name: inst.name }), text: t('app.asm.remove_joints', { n: nj }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['remove', t('app.btn.remove'), 'pc-btn is-primary']] });
      if (ch !== 'remove') return;
    }
    commitAsm(t('app.undo.remove_part'), () => A.removeInstance(asm, inst.id));
    asmSel = null; renderAll(); highlightAsm();
    status(t('app.asm.removed', { name: inst.name }));
  }

  function asmCheck() {
    const t0 = performance.now();
    clashes = A.interference(asm, asmBuilds, asmPlace.world, M, { touch: true });   // with kinds and touching faces (0.5 WL.33)
    renderAll();
    const name = (id) => instById(id)?.name || id;
    const { shown, hidden } = A.filterClashes(asm, clashes);
    const more = hidden.length ? t('asm.clash.hidden_note', { n: hidden.length }) : '';
    status(shown.length ? t('app.asm.interference', { list: shown.map((c) => clashWords(c, name)).join('; ') }) + more : t('app.asm.no_interference', { n: asm.instances.length, ms: Math.round(performance.now() - t0) }) + more, true);
  }
  /** One interference result in words: "Flange1 and Bolt1: thread depth mismatch, 12.3 mm³". */
  const clashWords = (c, name) => (c.kind === 'touch' ? t('asm.clash.row_touch', { a: name(c.a), b: name(c.b) }) : t('asm.clash.row', { a: name(c.a), b: name(c.b), kind: t('asm.clash.kind.' + c.kind), vol: f3(c.volume) }));
  /** A filter change: one undo step, saved with the assembly; the results stay (only what is shown changes). */
  function setClashFilter(label, fn) {
    asmHist.push(asm, label);
    fn();
    asmDirty = true;
    renderAll();
  }
  /** The interference results under the assembly's name: shown ones with "Hide this pair", the kinds to show, hidden counts. */
  function clashBlock() {
    const name = (id) => instById(id)?.name || id;
    const { shown, hidden } = A.filterClashes(asm, clashes || []);
    const hide = new Set(asm.clashFilter?.hide || []), pairs = asm.clashFilter?.pairs || [];
    const out = [];
    if (shown.length) out.push(el('ul', { className: 'pc-list', dataset: { clashes: '' } }, ...shown.map((c) => el('li', { dataset: { clashKind: c.kind, clashPair: c.a + '|' + c.b } },
      el('span', { className: 'grow' + (c.kind === 'overlap' || c.kind === 'thread-depth' ? ' is-bad' : '') }, clashWords(c, name)),
      btn(t('asm.clash.hide_pair'), () => setClashFilter(t('asm.clash.undo.hide_pair'), () => A.setPairHidden(asm, c.a, c.b, true)), 'pc-linkbtn', { dataset: { clashHide: '' } })))));
    const kinds = el('div', { className: 'pc-props', dataset: { clashKinds: '' } }, el('span', { className: 'span pc-props-sub' }, t('asm.clash.show')),
      ...A.CLASH_KINDS.map((k) => { const c = check(t('asm.clash.kind.' + k), !hide.has(k), (v) => setClashFilter(t('asm.clash.undo.kind'), () => A.setKindHidden(asm, k, !v))); c.dataset.clashKindToggle = k; return c; }));
    out.push(kinds);
    if (hidden.length || pairs.length) out.push(el('p', { className: 'pc-note', dataset: { clashHidden: String(hidden.length) } }, hidden.length ? t('asm.clash.hidden', { n: hidden.length }) + ' ' : '',
      pairs.length ? btn(t('asm.clash.show_pairs', { n: pairs.length }), () => setClashFilter(t('asm.clash.undo.show_pairs'), () => { for (const [a, b] of [...pairs]) A.setPairHidden(asm, a, b, false); }), 'pc-linkbtn', { dataset: { clashShowPairs: '' } }) : null));
    return el('div', { className: 'pc-block', dataset: { clashBlock: '' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('asm.clash.title')), ...out);
  }

  function asmEditPart() {
    if (asmSel?.kind !== 'inst') { status(t('app.asm.select_to_edit')); return; }
    const inst = instById(asmSel.id);
    asmTools.reset(); measure.stop(); stackup?.stop();
    editPartOf = { pid: inst.part, stash: { part, dirty, undo: hist.undoStack, redo: hist.redoStack }, before: JSON.stringify(asm.parts[inst.part].part) };
    part = JSON.parse(JSON.stringify(asm.parts[inst.part].part));
    hist.undoStack = []; hist.redoStack = []; dirty = false;
    mode = 'model'; sel = null; pick = null;
    view.setPlanesVisible(false);
    rebuild(); renderAll(); view.view('iso');
    status(t('app.asm.editing_part', { part: asm.parts[inst.part].name, asm: asm.name }), true);
  }

  function backToAssembly() {
    if (!editPartOf) return;
    if (mode === 'sketch') exitSketch();
    const { pid, stash, before } = editPartOf;
    if (JSON.stringify(part) !== before) {
      asmHist.push(asm, t('app.undo.edit_part', { name: asm.parts[pid].name }));
      asm.parts[pid].part = JSON.parse(JSON.stringify(part));
      asm.parts[pid].name = part.name;
      asmDirty = true; clashes = null;
    }
    part = stash.part; dirty = stash.dirty; hist.undoStack = stash.undo; hist.redoStack = stash.redo;
    editPartOf = null;
    regen = null;
    mode = 'assembly';
    rebuildAsm(); renderAll();
    status(t('app.asm.back_in', { name: asm.name }));
  }

  async function closeAssembly() {
    if (editPartOf) backToAssembly();
    if (!asm) return true;
    if (asmDirty) {
      const ch = await ask({ title: t('app.asm.unsaved_title'), text: t('app.asm.unsaved_text', { name: asm.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.asm.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
      if (ch === 'cancel') return false;
      if (ch === 'save') saveAssembly();
    }
    asmTools.reset(); measure.stop(); stackup?.stop();
    asm = null; asmBuilds = new Map(); asmSel = null; jointPick = null; asmDirty = false; clashes = null; asmHist.clear();
    mode = 'model';
    rebuild(); renderAll(); view.view('iso');
    status(t('app.asm.closed'));
    return true;
  }

  function saveAssembly() {
    const name = (asm.name || 'assembly').replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().slice(0, 80) || 'assembly';
    download(A.toJSON(asm), name + '.partcraft-asm.json', 'application/json');
    asmDirty = false;
    status(t('app.asm.saved', { file: name + '.partcraft-asm.json' }));
  }

  async function openAssemblyText(text, name) {
    let a;
    try { a = A.readAssembly(text); } catch (err) { status(err.message); await ask({ title: t('app.file.cannot_open', { name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    if (mode === 'sketch') exitSketch();
    if (editPartOf) backToAssembly();
    asmTools.reset(); measure.stop(); stackup?.stop();
    asm = a; asmBuilds = new Map(); asmHist.clear(); asmDirty = false; asmSel = null; jointPick = null; clashes = null;
    mode = 'assembly';
    view.setPlanesVisible(false);
    rebuildAsm(); renderAll(); view.view('iso');
    status(t('app.asm.opened', { name, parts: asm.instances.length, joints: asm.joints.length }));
  }

  // ---- assembly panels
  function renderAsmTree() {
    ui.partName.textContent = asm.name;
    const problem = (kind, id) => asmPlace?.problems.find((x) => x[kind] === id);
    const items = [el('li', { role: 'none', className: 'pc-props-sub' }, t('app.asm.tree_parts'))];
    asm.instances.forEach((i, n) => {
      const pr = problem('inst', i.id);
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node' + (pr ? ' is-warn' : ''), dataset: { inst: i.id }, 'aria-selected': String(asmSel?.kind === 'inst' && asmSel.id === i.id), title: pr ? pr.message : '',
        onclick: () => { asmSel = { kind: 'inst', id: i.id }; jointPick = null; renderAll(); highlightAsm(); },
        ondblclick: () => { asmSel = { kind: 'inst', id: i.id }; asmEditPart(); },
      }, el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, i.name), el('span', { className: 'pc-node-flag' }, n === 0 ? t('app.asm.flag_grounded') : pr ? t('app.asm.flag_free') : ''))));
    });
    items.push(el('li', { role: 'none', className: 'pc-props-sub' }, t('app.asm.tree_joints')));
    for (const j of asm.joints) {
      const pr = problem('joint', j.id);
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node' + (pr ? ' is-error' : ''), dataset: { joint: j.id }, 'aria-selected': String(asmSel?.kind === 'joint' && asmSel.id === j.id), title: pr ? pr.message : t('asm.joint.type.' + j.type),
        onclick: () => { asmSel = { kind: 'joint', id: j.id }; jointPick = null; renderAll(); highlightAsm(); },
      }, el('i', { className: 'bi bi-' + (pr ? 'exclamation-triangle-fill' : 'link-45deg'), 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, j.name), el('span', { className: 'pc-node-flag' }, pr ? '⚠' : t('asm.joint.type.' + j.type).toLowerCase()))));   // i18n-ignore: icon class names
    }
    if (!asm.joints.length) items.push(el('li', { role: 'none', className: 'pc-muted' }, t('app.asm.no_joints')));
    swapChildren(ui.tree, items);
  }

  function renderAsmFacts() {
    const free = asmPlace ? asmPlace.problems.filter((x) => x.free).length : 0;
    fillDl(ui.facts, [[t('app.asm.tree_parts'), Object.keys(asm.parts).length], [t('app.asm.facts_instances'), asm.instances.length], [t('app.asm.tree_joints'), asm.joints.length], [t('app.asm.facts_not_joined'), free || ''],
      [t('app.asm.facts_interference'), clashes === null ? t('app.asm.not_checked') : ((n) => (n ? t('asm.clash.facts', { n }) : t('app.asm.none')))(A.filterClashes(asm, clashes).shown.length)]]);
  }

  function endLabel(e) {
    const inst = instById(e.inst);
    const pr = asm.parts[inst.part].part;
    const f = e.plane.kind === 'face' ? pr.features.find((x) => x.id === e.plane.feature) : null;
    return t('app.joint.end_label', { name: inst.name, plane: e.plane.kind === 'base' ? V.PLANE_NAMES[e.plane.name] : f ? t('app.plane.face_of', { name: f.name }) : t('app.plane.fixed') });
  }

  function renderAsmProps() {
    const out = [];
    let head = t('app.facts.h_assembly');
    if (jointPick) {
      head = t('app.joint.new');
      out.push(msg(jointPick.a ? t('app.joint.pick_second_face') : t('app.joint.pick_first_face')), el('p', { className: 'pc-note' }, t('app.joint.new_note')));
    } else if (asmSel?.kind === 'joint' && jointById(asmSel.id)) {
      const j = jointById(asmSel.id);
      head = j.name;
      const pr = asmPlace?.problems.find((x) => x.joint === j.id);
      if (pr) out.push(msg(pr.message, 'is-error'));
      const setJ = (label, fn) => { commitAsm(label, () => fn(jointById(j.id))); };
      const grid = [];
      grid.push(...field(t('asm.joint.type'), selectInput(Object.keys(A.JOINT_TYPES).map((k) => [k, t('asm.joint.type.' + k)]), j.type, (v) => setJ(t('asm.joint.undo.type'), (x) => { x.type = v; if (x.limits && !A.readLimitsSafe(x.limits, v)) delete x.limits; }))));
      const rangeRow = (label, key, min, max, step) => {
        const start = j[key] || 0;
        const n = numInput(j[key] || 0, (v) => setJ(label, (x) => { x[key] = v; }));
        const r = el('input', { type: 'range', className: 'span pc-range', min: String(min), max: String(max), step: String(step), value: String(j[key] || 0), 'aria-label': t('asm.joint.drag', { label }), dataset: { jointRange: key } });
        r.addEventListener('input', () => { const x = jointById(j.id); x[key] = Number(r.value); asmPlace = A.placeAll(asm, asmBuilds); showInstances(); n.value = r.value; });
        r.addEventListener('change', () => { const v = Number(r.value); jointById(j.id)[key] = start; setJ(label, (y) => { y[key] = v; }); });
        n.dataset.jointValue = key;
        return [...field(label, n), r];
      };
      const size = Math.max(10, ...asm.instances.map((i) => { const b = asmBuilds.get(i.part)?.stats?.bbox; return b ? Math.max(...b.max.map((v, k) => v - b.min[k])) : 10; }));
      const valueLabel = (k) => t('asm.joint.value.' + k.toLowerCase());
      const span = (k) => { const L = A.limitOf(j, k); return L ? [L.min, L.max] : A.VALUE_UNIT[k] === 'deg' ? (k === 'angle' ? [-180, 180] : [-90, 90]) : [-Math.round(size), Math.round(size)]; };
      // the values the joint lets move: a number and a slider each; the values set once: a number
      for (const k of A.JOINT_DOF[j.type]) { const [lo, hi] = span(k); grid.push(...rangeRow(valueLabel(k), k, lo, hi, A.VALUE_UNIT[k] === 'deg' ? 1 : 0.5)); }
      for (const k of A.JOINT_SETUP[j.type]) { const n = numInput(j[k] || 0, (v) => setJ(valueLabel(k), (x) => { x[k] = v; })); n.dataset.jointValue = k; grid.push(...field(valueLabel(k), n)); }
      for (const [side, e] of [['a', j.a], ['b', j.b]]) {
        const inst = instById(e.inst), build = asmBuilds.get(inst.part), prt = asm.parts[inst.part].part;
        grid.push(el('span', { className: 'pc-props-sub' }, t(side === 'a' ? 'app.joint.first' : 'app.joint.second', { end: endLabel(e) })));
        const axes = A.axesOf(build, prt);
        const cur = e.axis ? e.axis.feature + (e.axis.index !== undefined ? ':' + e.axis.index : '') : '';
        grid.push(...field(t('app.joint.centre_on'), selectInput([['', t('app.joint.face_origin')], ...axes.map((a) => [a.key, a.label])], cur, (v) => setJ(t('app.undo.joint_centre'), (x) => {
          const en = x[side];
          if (!v) delete en.axis; else { const [fid, idx] = v.split(':'); en.axis = { feature: fid, ...(idx !== undefined ? { index: Number(idx) } : {}) }; }
        }))));
      }
      out.push(el('div', { className: 'pc-props' }, ...grid));
      out.push(...asmTools.jointSections(j));
      out.push(el('p', { className: 'pc-note', dataset: { jointNote: j.type } }, t('asm.joint.note.' + j.type)));
      // the clash check sweeps one value (a choice when the joint has several) across its limits, or a default span
      const dof = A.JOINT_DOF[j.type];
      if (!dof.includes(asmSweep)) asmSweep = dof[0] || null;
      const sweepSel = dof.length > 1 ? selectInput(dof.map((k) => [k, valueLabel(k)]), asmSweep, (v) => { asmSweep = v; }) : null;
      if (sweepSel) sweepSel.dataset.jointSweep = '';
      const motion = btn(t('asm.joint.check'), () => {
        const key = asmSweep || dof[0];
        const [from, to] = span(key);
        const res = A.motionCheck(asm, asmBuilds, M, j.id, from, to, 24, key).map((x) => ({ ...x, pairs: A.filterClashes(asm, x.pairs).shown }));   // the filters apply (0.5 WL.33)
        const bad = res.filter((x) => x.pairs.length);
        status(bad.length ? t('asm.joint.check_bad', { n: bad.length, of: res.length, value: valueLabel(key), at: f3(bad[0].value), vol: f3(bad[0].pairs[0].volume) }) : t('asm.joint.check_ok', { value: valueLabel(key), from: f3(from), to: f3(to), n: res.length }), true);
      }, 'pc-btn', { disabled: !dof.length, dataset: { jointCheck: '' } });
      if (sweepSel) out.push(el('div', { className: 'pc-props' }, ...field(t('asm.joint.sweep'), sweepSel)));
      out.push(el('div', { className: 'pc-block pc-actions' }, motion, btn(t('app.undo.remove_joint'), () => asmDelete(), 'pc-btn is-danger')));
    } else if (asmSel?.kind === 'inst' && instById(asmSel.id)) {
      const i = instById(asmSel.id);
      head = i.name;
      const n = asm.instances.indexOf(i);
      const dl = el('dl', { className: 'pc-dl' });
      const b = asmBuilds.get(i.part)?.stats;
      fillDl(dl, [[t('app.props.part'), asm.parts[i.part].name], [t('app.inst.copies'), asm.instances.filter((x) => x.part === i.part).length], [t('app.facts.volume'), b ? f3(b.volume) + ' mm³' : ''], [t('app.asm.tree_joints'), asm.joints.filter((j) => j.a.inst === i.id || j.b.inst === i.id).length], [t('app.inst.position'), n === 0 ? t('app.inst.grounded') : asmPlace?.problems.some((x) => x.inst === i.id) ? t('app.inst.not_joined') : t('app.inst.by_joints')]]);
      out.push(dl);
      const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-inst-name', value: i.name, maxLength: 80 });
      nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 80); if (v) commitAsm(t('app.undo.rename'), () => { instById(i.id).name = v; }); });
      out.push(el('div', { className: 'pc-block pc-props' }, ...field(t('app.props.name'), nameIn)));
      out.push(...asmTools.instSections(i));
      out.push(el('div', { className: 'pc-block pc-actions' },
        btn(t('app.inst.edit'), () => asmEditPart(), 'pc-btn is-primary'),
        btn(t('app.inst.insert_copy'), () => asmInsertCopy()),
        n > 0 ? btn(t('app.inst.make_grounded'), () => commitAsm(t('app.undo.ground'), () => { asm.instances.splice(n, 1); asm.instances.unshift(i); })) : null,
        btn(t('app.btn.remove'), () => asmDelete(), 'pc-btn is-danger')));
    } else {
      const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-asm-name', value: asm.name, maxLength: 120 });
      nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 120); if (v) commitAsm(t('app.undo.rename_assembly'), () => { asm.name = v; }); });
      out.push(el('div', { className: 'pc-props' }, ...field(t('app.props.name'), nameIn)));
      out.push(el('p', { className: 'pc-note' }, t('app.asm.note')));
      for (const pr of asmPlace?.problems || []) out.push(msg(pr.message, pr.free ? '' : 'is-error'));
      if (clashes || asm.clashFilter) out.push(clashBlock());
      if (asmPlace) out.push(...asmTools.rootSections());
    }
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }


  // ---------------------------------------------------------------- drawing sheet
  // The views come from OpenCascade's hidden-line removal (exact kernel) or from the mesh (fallback);
  // the sheet is composed here (drawing.js) with the part's notes (gdt.js) and shown as SVG (sheetview.js).
  let sheetView = null;
  const drawingOf = (p = part) => p.drawing || { section: null, detail: null, notes: [] };

  /** The part's holes for the drawing's hole table (drawing.js partHoles; 0.4 P23); null with the mesh kernel. */
  const drawingHoles = () => partHoles(part, regen);
  /** A sheet view's name in words (front, top, right, section, iso, detail). */
  const viewWord = (k) => (['front', 'top', 'right'].includes(k) ? t('drawing.view.' + k) : ['section', 'iso', 'detail'].includes(k) ? t('app.drawing.view_' + k) : k);

  async function enterDrawing() {
    if (notInDesign()) return;
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    if (mode === 'assembly') return;
    await built();
    if (!regen?.mesh) { status(t('app.drawing.build_first')); return; }
    section?.stop();
    mode = 'drawing';
    drawingState = { data: null, key: null, sheet: null, tool: null, sel: null, drag: null };
    pick = null; multi = []; view.setHighlight(null); view.setMarks(null);
    if (!sheetView) sheetView = new SheetView(ui.sheet, {
      onClick: (x, y) => drawingClick(x, y),
      onNoteDown: (id) => { drawingState.sel = id; drawingState.tool = null; composeShow(); renderAll(); },
      onNoteDrag: (id, dx, dy) => { drawingState.drag = { id, dx, dy }; composeShow(); },
      onNoteDrop: (id, dx, dy) => { drawingState.drag = null; commitDrawing(t('app.undo.move_note'), (d) => { const n = d.notes.find((q) => q.id === id); if (n) n.off = [+(n.off[0] + dx).toFixed(2), +(n.off[1] + dy).toFixed(2)]; }); },
      onHover: (id) => { if (drawingState && drawingState.hover !== id) { drawingState.hover = id; composeShow(); } },
    });
    ui.sheet.hidden = false;
    renderAll();
    status(t('app.drawing.making_views'), true);
    await drawingRefresh();
    if (mode !== 'drawing') return;
    status(useExact ? t('app.drawing.status_exact') : exactOff() ? t('kernel.drawing.status') : t('app.drawing.status_mesh'), true);
    sheetView.svg.focus({ preventScroll: true });
  }

  function leaveDrawing() {
    if (mode !== 'drawing') return;
    mode = 'model'; drawingState = null;
    ui.sheet.hidden = true;
    renderAll(); status('');
    focusStage();
  }

  async function drawingViewsNow(d) {
    if (useExact) return exact.call('drawing', { part, drawing: { section: d.section } });
    await built();
    return { ...meshViews(regen.mesh, { M, section: d.section }), threads: threadNotes(regen.threads) };   // the mesh kernel's own section view (0.4 K.3); thread callouts (0.5 WL.29)
  }

  async function drawingRefresh() {
    if (mode !== 'drawing' || !drawingState) return;
    const d = drawingOf();
    const key = (useExact ? 'x' : 'm') + JSON.stringify(part.features) + '|' + JSON.stringify(d.section) + '|' + part.resolution;
    if (drawingState.key !== key) {
      drawingState.key = key;
      try { drawingState.data = await drawingViewsNow(d); } catch (err) { status(t('app.drawing.views_failed', { error: err.message }), true); drawingState.data = null; }
      if (mode !== 'drawing' || drawingState.key !== key) return;
    }
    composeShow();
    renderProps();
  }

  function composeShow() {
    if (!drawingState?.data) return;
    const d = drawingOf();
    let notes = d.notes;
    const dr = drawingState.drag;
    if (dr) notes = notes.map((n) => (n.id === dr.id ? { ...n, off: [n.off[0] + dr.dx, n.off[1] + dr.dy] } : n));
    drawingState.sheet = composeSheet(drawingState.data, { name: part.name, drawing: { ...d, notes }, annotate: G.annotationGeometry, material: part.material?.name, holes: drawingHoles() });
    sheetView.show(drawingState.sheet, { selected: drawingState.sel, hover: drawingState.hover });
  }

  function commitDrawing(label, fn, { refetch = false } = {}) {
    hist.push(part, label);
    if (!part.drawing) part.drawing = { section: null, detail: null, notes: [] };
    fn(part.drawing);
    dirty = true;
    updateTools();
    if (refetch) drawingRefresh(); else { composeShow(); keepFocus(() => renderProps()); }
  }

  function drawingTool(tool) {
    if (mode !== 'drawing') return;
    drawingState.tool = drawingState.tool === tool ? null : tool;
    drawingState.sel = null;
    composeShow(); updateTools(); renderProps();
    status(drawingState.tool ? { datum: () => t('app.drawing.click_datum'), fcf: () => t('app.drawing.click_fcf'), finish: () => t('app.drawing.click_finish'), detail: () => t('app.drawing.click_detail') }[tool]() : '', true);
    sheetView.svg.focus({ preventScroll: true });
  }

  /** Which view a sheet point is on, and its view coordinates (snapped to the nearest drawn line within 2.5 mm). */
  function viewAt(x, y) {
    const sh = drawingState.sheet;
    for (const [k, p] of Object.entries(sh.place)) {
      const w = (p.box.u1 - p.box.u0) * p.s, h = (p.box.v1 - p.box.v0) * p.s;
      if (x < p.x - 3 || x > p.x + w + 3 || y < p.y - 3 || y > p.y + h + 3) continue;
      let u = p.box.u0 + (x - p.x) / p.s, v = p.box.v0 + (y - p.y) / p.s;
      const src = k === 'detail' ? null : drawingState.data.views[k];
      if (src) {
        let best = 2.5 / p.s, at = null;
        for (const g of [...src.visible, ...(src.cut || [])]) {
          const dx = g[2] - g[0], dy = g[3] - g[1], L = dx * dx + dy * dy;
          const t = L > 0 ? Math.max(0, Math.min(1, ((u - g[0]) * dx + (v - g[1]) * dy) / L)) : 0;
          const qx = g[0] + dx * t, qy = g[1] + dy * t, dd = Math.hypot(u - qx, v - qy);
          if (dd < best) { best = dd; at = [qx, qy]; }
        }
        if (at) [u, v] = at;
      }
      return { view: k, at: [+u.toFixed(4), +v.toFixed(4)] };
    }
    return null;
  }

  function drawingClick(x, y) {
    const tool = drawingState.tool;
    if (!tool) { if (drawingState.sel) { drawingState.sel = null; composeShow(); renderProps(); } return; }
    const hit = viewAt(x, y);
    if (!hit) { status(t('app.drawing.click_on_view'), true); return; }
    if (tool === 'detail') {
      if (hit.view === 'detail' || hit.view === 'iso') { status(t('app.drawing.detail_from'), true); return; }
      const b = drawingState.sheet.place[hit.view].box;
      const r = +(Math.max(b.u1 - b.u0, b.v1 - b.v0) / 8).toFixed(2);
      commitDrawing(t('app.undo.detail_view'), (d) => { d.detail = { of: hit.view, at: hit.at, r, scale: 2 }; });
      drawingState.tool = null; updateTools();
      status(t('app.drawing.detail_taken', { view: viewWord(hit.view) }));
      return;
    }
    const used = new Set(drawingOf().notes.map((n) => n.id));
    let k = 1; while (used.has('g' + k)) k++;
    const letters = drawingOf().notes.filter((n) => n.kind === 'datum').map((n) => n.letter);
    const props = { id: 'g' + k, view: hit.view, at: hit.at };
    if (tool === 'datum') props.letter = G.DATUM_LETTERS.find((L) => !letters.includes(L)) || 'A';
    const note = G.newAnnotation(tool, props);
    commitDrawing({ datum: () => t('app.undo.add_datum'), fcf: () => t('app.undo.add_fcf'), finish: () => t('app.undo.add_finish') }[tool](), (d) => { d.notes.push(note); });
    drawingState.sel = note.id; drawingState.tool = null;
    composeShow(); updateTools(); renderProps();
    status({ datum: () => t('app.drawing.placed_datum'), fcf: () => t('app.drawing.placed_fcf'), finish: () => t('app.drawing.placed_finish') }[tool]());
  }

  function renderDrawingProps() {
    const out = [];
    let head = t('app.drawing.head');
    const d = drawingOf();
    const n = drawingState?.sel ? d.notes.find((q) => q.id === drawingState.sel) : null;
    const setN = (label, fn) => commitDrawing(label, (dd) => { const q = dd.notes.find((x) => x.id === n.id); if (q) fn(q); });
    if (n) {
      head = n.kind === 'datum' ? t('app.gdt.datum_head', { letter: n.letter }) : n.kind === 'fcf' ? t('app.gdt.fcf_head') : t('app.gdt.finish_head');
      const bad = G.validate(n);
      if (bad) out.push(msg(bad, 'is-error'));
      const grid = [];
      if (n.kind === 'datum') grid.push(...field(t('app.gdt.letter'), selectInput(G.DATUM_LETTERS.map((L) => [L, L]), n.letter, (v) => setN(t('app.undo.datum_letter'), (q) => { q.letter = v; }))));
      if (n.kind === 'fcf') {
        const C = G.CHARACTERISTICS[n.char];
        grid.push(...field(t('app.gdt.tolerance'), selectInput(Object.entries(G.CHARACTERISTICS).map(([k2, c]) => [k2, c.label]), n.char, (v) => setN(t('app.undo.characteristic'), (q) => {
          q.char = v; const c = G.CHARACTERISTICS[v];
          if (!c.dia) q.dia = false; if (!c.mod) { q.mod = ''; q.datums = q.datums.map((x) => ({ ...x, mod: '' })); }
          if (c.datums === 'none') q.datums = []; else if (c.datums === 'required' && !q.datums.length) q.datums = [{ letter: 'A', mod: '' }];
        }))));
        grid.push(...field(t('app.gdt.zone_mm'), numInput(n.tol, (v) => setN(t('app.undo.tolerance_value'), (q) => { q.tol = v; }), { min: 0.000001 })));
        if (C.dia) grid.push(check(t('app.gdt.dia_zone'), n.dia, (v) => setN(t('app.undo.dia_zone'), (q) => { q.dia = v; })));
        if (C.mod) grid.push(...field(t('app.gdt.material'), selectInput([['', t('app.gdt.rfs')], ['M', 'MMC (Ⓜ)'], ['L', 'LMC (Ⓛ)']], n.mod, (v) => setN(t('app.undo.material_condition'), (q) => { q.mod = v; }))));
        if (C.datums !== 'none') {
          for (let i = 0; i < 3; i++) {
            const dt = n.datums[i];
            grid.push(...field([t('app.gdt.primary'), t('app.gdt.secondary'), t('app.gdt.tertiary')][i], selectInput([['', '—'], ...G.DATUM_LETTERS.map((L) => [L, L])], dt ? dt.letter : '', (v) => setN(t('app.undo.datum_reference'), (q) => {
              const list = q.datums.slice(0, 3);
              if (!v) list.splice(i); else if (list[i]) list[i] = { ...list[i], letter: v }; else if (i === list.length) list.push({ letter: v, mod: '' });
              q.datums = list;
            }))));
            if (dt && C.mod) grid.push(...field(t('app.gdt.modifier'), selectInput([['', t('app.gdt.mod_none')], ['M', 'MMB (Ⓜ)'], ['L', 'LMB (Ⓛ)']], dt.mod, (v) => setN(t('app.undo.datum_modifier'), (q) => { q.datums[i].mod = v; }))));
          }
        }
        if (C.legacy) out.push(el('p', { className: 'pc-note' }, t('app.gdt.legacy')));
      }
      if (n.kind === 'finish') {
        grid.push(...field(t('app.gdt.ra'), numInput(n.ra, (v) => setN(t('app.undo.roughness'), (q) => { q.ra = v; }), { min: 0.000001 })));
        grid.push(...field(t('app.gdt.process'), selectInput(Object.entries(G.PROCESSES), n.process, (v) => setN(t('app.undo.finish_process'), (q) => { q.process = v; }))));
        const note = el('input', { type: 'text', className: 'pc-input', id: 'pc-finish-note', value: n.note || '', maxLength: 40 });
        note.addEventListener('change', () => setN(t('app.undo.finish_note'), (q) => { q.note = note.value.replace(/[\u0000-\u001f]/g, '').slice(0, 40); }));
        grid.push(...field(t('app.gdt.note'), note));
      }
      out.push(el('div', { className: 'pc-props' }, ...grid));
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.gdt.reads'), G.describe(n)], [t('app.gdt.on'), t('app.gdt.on_view', { view: viewWord(n.view) })]]);
      out.push(el('div', { className: 'pc-block' }, dl));
      out.push(el('p', { className: 'pc-note' }, t('app.gdt.drag_note')));
      out.push(el('div', { className: 'pc-block pc-actions' }, btn(t('app.btn.delete'), () => deleteNote(), 'pc-btn is-danger'), btn(t('app.btn.done'), () => { drawingState.sel = null; composeShow(); renderProps(); })));
    } else {
      const grid = [];
      grid.push(...field(t('drawing.panel.sheet'), selectInput(P.SHEET_KEYS.map((k) => [k, sheetLabel(k)]), d.sheet || 'a3', (v) => commitDrawing(t('drawing.undo.sheet'), (dd) => { if (v === 'a3') delete dd.sheet; else dd.sheet = v; }))));
      grid.push(...field(t('app.drawing.section_aa'), selectInput([['', t('app.drawing.none')], ['front', t('app.drawing.of_front')], ['top', t('app.drawing.of_top')], ['right', t('app.drawing.of_right')]], d.section ? d.section.of : '', (v) => {
        commitDrawing(t('app.undo.section_view'), (dd) => { dd.section = v ? { of: v } : null; if (!v && dd.detail?.of === 'section') dd.detail = null; }, { refetch: true });
      })));
      if (d.section) grid.push(...field(t('app.drawing.cut_at'), numInput(d.section.at ?? sectionCentre(d.section.of), (v) => commitDrawing(t('app.undo.section_position'), (dd) => { dd.section.at = v; }, { refetch: true }))));
      grid.push(...field(t('app.drawing.detail_b'), selectInput([['', t('app.drawing.none')], ['front', t('app.drawing.from_front')], ['top', t('app.drawing.from_top')], ['right', t('app.drawing.from_right')], ...(d.section ? [['section', t('app.drawing.from_section')]] : [])], d.detail ? d.detail.of : '', (v) => {
        if (!v) { commitDrawing(t('app.undo.detail_view'), (dd) => { dd.detail = null; }); return; }
        drawingTool('detail'); status(t('app.drawing.click_detail_centre', { view: viewWord(v) }), true);
      })));
      if (d.detail) {
        grid.push(...field(t('app.drawing.detail_radius'), numInput(d.detail.r, (v) => commitDrawing(t('app.undo.detail_size'), (dd) => { dd.detail.r = v; }), { min: 0.001 })));
        grid.push(...field(t('app.drawing.detail_scale'), selectInput(P.DETAIL_SCALES.map((k) => [String(k), t('app.drawing.times_sheet', { k })]), String(d.detail.scale), (v) => commitDrawing(t('app.drawing.detail_scale'), (dd) => { dd.detail.scale = Number(v); }))));
      }
      grid.push(...field(t('drawing.holes.panel'), selectInput([['', t('drawing.holes.none')], ...['front', 'top', 'right'].map((k) => [k, t('drawing.holes.of', { view: t('drawing.view.' + k) })])], d.holeTable ? d.holeTable.view : '', (v) => commitDrawing(t('drawing.holes.undo'), (dd) => { if (v) dd.holeTable = { view: v }; else delete dd.holeTable; }))));
      if (d.holeTable && drawingState?.sheet?.holeTable) { const ht = drawingState.sheet.holeTable; grid.push(el('span', { className: 'k' }, ''), el('span', { className: 'v pc-muted', dataset: { holeCount: String(ht.rows.length) } }, t('drawing.holes.count', { n: ht.rows.length }) + (ht.skipped ? ' ' + t('drawing.holes.skipped', { n: ht.skipped }) : ''))); }
      else if (d.holeTable && !named()) grid.push(el('span', { className: 'k' }, ''), el('span', { className: 'v pc-muted' }, t('drawing.holes.exact')));
      out.push(el('div', { className: 'pc-props' }, ...grid));
      out.push(titleBlockPanel(d), revisionsPanel(d));
      const sh = drawingState?.sheet;
      if (sh?.omitted?.length) out.push(msg(t('app.drawing.no_room', { list: sh.omitted.join(', ') })));
      if (sh && !sh.exact) out.push(el('p', { className: 'pc-note' }, exactOff() ? t('kernel.drawing.note') : exact.state === 'loading' ? t('app.drawing.mesh_note_loading') : t('app.drawing.mesh_note_failed')));
      if (d.notes.length) out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.drawing.notes_on_sheet')),
        el('ul', { className: 'pc-list' }, ...d.notes.map((q) => el('li', {}, el('span', { className: 'grow' + (G.validate(q) ? ' is-bad' : '') }, G.describe(q)), btn(t('app.btn.select'), () => { drawingState.sel = q.id; composeShow(); renderProps(); }, 'pc-linkbtn'))))));
      out.push(el('p', { className: 'pc-note' }, t('app.drawing.notes_help')));
      out.push(el('div', { className: 'pc-block pc-actions' }, btn(t('app.drawing.export_pdf'), () => exportDrawing(), 'pc-btn is-primary'), btn(t('app.drawing.back'), () => leaveDrawing())));
    }
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }

  /** The title block's fields (part.drawing.title; empty = left out, Title falls back to the part's name, Date to today). */
  function titleBlockPanel(d) {
    const tt = d.title || {};
    const setT = (k, v) => commitDrawing(t('drawing.undo.title'), (dd) => { const n = { ...(dd.title || {}) }; if (v) n[k] = v; else delete n[k]; if (Object.keys(n).length) dd.title = n; else delete dd.title; });
    const rows = [['title', { placeholder: part.name }], ['number', {}], ['rev', { placeholder: d.revisions?.length ? d.revisions[d.revisions.length - 1].rev : '' }], ['company', {}], ['drawnBy', {}], ['checkedBy', {}], ['approvedBy', {}],
      ['date', { placeholder: new Date().toISOString().slice(0, 10) }], ['tolerance', { placeholder: t('drawing.panel.tolerance_ph') }], ['finish', {}]];
    const grid = [];
    for (const [k, o] of rows) {
      const inp = textInput(tt[k], (v) => {
        if (k === 'date' && v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) { status(t('drawing.panel.date_bad')); renderProps(); return; }
        setT(k, v);
      }, { max: P.TITLE_FIELDS[k], placeholder: o.placeholder || '', attrs: { 'data-title-field': k } });
      grid.push(...field(t('drawing.panel.' + k.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase())), inp));
    }
    const mat = el('p', { className: 'pc-note' }, part.material ? t('drawing.panel.material_is', { name: part.material.name }) : t('drawing.panel.material_none'));
    return el('div', { className: 'pc-block', dataset: { titleBlock: '1' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('drawing.panel.title_block')), el('div', { className: 'pc-props' }, ...grid), mat);
  }
  /** The revision list (part.drawing.revisions, oldest first): add one with the next letter and today's date, edit, delete. */
  function revisionsPanel(d) {
    const revs = d.revisions || [];
    const setR = (i, k, v) => commitDrawing(t('drawing.undo.revision'), (dd) => { if (dd.revisions?.[i]) dd.revisions[i] = { ...dd.revisions[i], [k]: v }; });
    const items = revs.map((r, i) => el('li', { dataset: { revRow: String(i) } },
      textInput(r.rev, (v) => setR(i, 'rev', v), { max: 8, attrs: { 'aria-label': t('drawing.panel.rev_rev'), 'data-rev-field': 'rev', style: 'width:3.5rem;flex:0 0 auto' } }),
      textInput(r.desc, (v) => setR(i, 'desc', v), { max: 120, attrs: { 'aria-label': t('drawing.panel.rev_desc'), 'data-rev-field': 'desc', className: 'pc-input grow' } }),
      textInput(r.date, (v) => { if (v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) { status(t('drawing.panel.date_bad')); renderProps(); return; } setR(i, 'date', v); }, { max: 10, attrs: { 'aria-label': t('drawing.panel.rev_date'), 'data-rev-field': 'date', style: 'width:6.5rem;flex:0 0 auto' } }),
      textInput(r.by, (v) => setR(i, 'by', v), { max: 40, attrs: { 'aria-label': t('drawing.panel.rev_by'), 'data-rev-field': 'by', style: 'width:4rem;flex:0 0 auto' } }),
      btn(t('drawing.panel.rev_delete'), () => commitDrawing(t('drawing.undo.revision_delete'), (dd) => { dd.revisions.splice(i, 1); if (!dd.revisions.length) delete dd.revisions; }), 'pc-linkbtn', { dataset: { revDelete: String(i) } })));
    const full = revs.length >= P.MAX_REVISIONS;
    return el('div', { className: 'pc-block', dataset: { revisions: '1' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('drawing.panel.revisions')),
      revs.length ? el('ul', { className: 'pc-list pc-revs' }, ...items) : el('p', { className: 'pc-note' }, t('drawing.panel.no_revisions')),
      el('div', { className: 'pc-actions' }, btn(t('drawing.panel.rev_add'), () => commitDrawing(t('drawing.undo.revision_add'), (dd) => { dd.revisions = [...(dd.revisions || []), { rev: nextRevision(dd.revisions), desc: '', date: new Date().toISOString().slice(0, 10), by: '' }]; }), 'pc-btn', { disabled: full, title: full ? t('drawing.panel.rev_full', { n: P.MAX_REVISIONS }) : '', dataset: { revAdd: '1' } })));
  }

  function sectionCentre(of) {
    const b = regen?.stats?.bbox; if (!b) return 0;
    const dir = { front: [0, 0, 1], top: [0, 1, 0], right: [1, 0, 0] }[of];
    return +V.dot(dir, b.min.map((v, i) => (v + b.max[i]) / 2)).toFixed(4);
  }

  function deleteNote() {
    const id = drawingState?.sel;
    if (!id) return;
    commitDrawing(t('app.undo.delete_note'), (d) => { d.notes = d.notes.filter((q) => q.id !== id); });
    drawingState.sel = null; composeShow(); renderProps();
    status(t('app.drawing.note_deleted'));
  }

  // ---------------------------------------------------------------- files
  function download(bytes, name, type) {
    const url = URL.createObjectURL(new Blob([bytes], { type }));
    const a = el('a', { href: url, download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
  const fileBase = () => (part.name || 'part').replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().slice(0, 80) || 'part';

  // Files through the shell's host adapter (0.4 W.2 / 1.4): the browser's picker or the desktop's dialogs, the recent list
  // on the start hint, files handed over at launch. Saving a part writes in place on the desktop (a download in the browser).
  const fileHost = getHost({ app: 'partcraft' });
  let saveTarget = null;   // the HostFile the open part came from, when it can be written in place
  const PART_TYPES = [{ description: 'PartCraft', extensions: ['.json'] }];   // i18n-ignore: a file type label the OS shows
  async function openFromHost(hf) {
    if (!hf) return;
    await openFile(hf);
    saveTarget = /\.json$/i.test(hf.name) && hf.writable ? hf : null;
  }
  fileHost.onOpenFiles(async (files) => { if (files[0] && await confirmDiscard()) await openFromHost(files[0]); });
  ready.then(async () => { const [first] = await fileHost.launchFiles(); if (first) await openFromHost(first); });   // desktop: the file it was started with
  // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the part comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) ready.then(() => import('./live.js')).then((m) => m.joinFromPage(window.partcraft, fileHost), (err) => status(err.message));
  async function savePart() {
    if (mode === 'assembly') { saveAssembly(); return; }
    if (mode === 'sketch') exitSketch();
    const name = fileBase() + '.partcraft.json';
    const r = await fileHost.save({ target: saveTarget, data: P.toJSON(part), name, types: PART_TYPES });
    if (!r.ok) { if (!r.cancelled) status(t('app.file.save_failed', { error: String(r.error?.message || r.error || '') })); return; }
    if (r.target?.writable) saveTarget = r.target;
    dirty = false;
    status(r.how === 'written' ? t('app.file.written', { file: r.path || r.name || name }) : t('app.file.saved', { file: name }));
  }

  function exportMesh(kind) {
    if (mode === 'sketch') exitSketch();
    if (!regen?.mesh) { status(t('app.export.no_solid')); return; }
    const name = fileBase();
    if (kind === 'stl') { download(X.stlBinary(regen.mesh, name), name + '.stl', 'model/stl'); status(t('app.export.stl', { file: name + '.stl', n: regen.mesh.indices.length / 3 })); }
    else if (kind === '3mf') { download(X.threeMf(regen.mesh, name), name + '.3mf', 'model/3mf'); status(t('app.export.3mf', { file: name + '.3mf' })); }
    else { const s = X.stepFaceted(regen.mesh, name, { schema: kind === 'step214' ? 'AP214' : 'AP242' }); download(s.text, name + '.step', 'model/step'); status(t('app.export.step_faceted', { file: name + '.step', n: s.counts.faces })); }
  }

  /**
   * Check for 3D printing (0.5 SG.4, #531): the part (or the whole assembly) as a printer mesh — Z up, mm, as the STL and
   * 3MF exports write it — through print3d.js: closed, faces the right way, not passing through itself; size against
   * the bed in Settings, volume, base, overhangs. Then the usual STL or 3MF export.
   */
  async function checkPrint() {
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    const asmMode = mode === 'assembly';
    if (!asmMode) await built();
    const src = asmMode ? asmTools.printMesh() : regen?.mesh;
    if (!src) { status(asmMode ? t('ui.asm.export.building') : t('app.export.no_solid')); return; }
    const PR = await import('./print3d.js');
    status(t('app.print3d.checking'), true);
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    const S = src.positions, n = S.length / 3, pos = new Float64Array(S.length);
    for (let i = 0; i < n; i++) { pos[i * 3] = S[i * 3]; pos[i * 3 + 1] = -S[i * 3 + 2]; pos[i * 3 + 2] = S[i * 3 + 1]; }   // Y up → Z up, as the exports
    const rep = PR.printCheck({ positions: pos, indices: src.indices, colors: null }, { bed: settings.bed });
    const mm = (v) => (Math.round(v * 10) / 10).toLocaleString(locale() === 'en-XA' ? 'en' : locale());
    const line = (k, x) => el('li', {}, t(k, x));
    const problems = rep.problems.map((p) => line('app.print3d.p.' + p.kind, { n: p.n }));
    const warnings = rep.warnings.map((w) => line('app.print3d.w.' + w.kind, { n: w.n || 0, share: Math.max(1, Math.round((w.share || 0) * 100)), angle: w.angle || 45, x: mm(w.bed?.[0] || 0), y: mm(w.bed?.[1] || 0), z: mm(w.bed?.[2] || 0) }));
    const body = el('div', { className: 'pc-print' },
      el('p', { className: 'pc-print-verdict', dataset: { printOk: rep.ok ? '1' : '0' } }, t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready')),
      problems.length ? el('ul', { className: 'pc-print-problems', dataset: { printProblems: '' } }, ...problems) : null,
      warnings.length ? el('ul', { className: 'pc-print-warnings', dataset: { printWarnings: '' } }, ...warnings) : null,
      el('ul', { className: 'pc-print-facts' },
        el('li', {}, t(asmMode ? 'app.print3d.what.asm' : 'app.print3d.what.part')),
        rep.size ? el('li', {}, t('app.print3d.size', { w: mm(rep.size[0]), d: mm(rep.size[1]), h: mm(rep.size[2]) })) : null,
        rep.volume != null ? el('li', {}, t('app.print3d.volume', { v: mm(rep.volume / 1000) })) : null,
        el('li', {}, t('app.print3d.tris', { n: rep.triangles })),
        settings.bed ? null : el('li', {}, t('app.print3d.nobed'))));
    status(t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready'));
    if (!rep.triangles) { await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.close'), 'pc-btn is-primary']] }); return; }
    const key = await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['stl', t('app.print3d.stl'), 'pc-btn'], ['3mf', t('app.print3d.3mf'), 'pc-btn is-primary']] });
    if (key === 'stl' || key === '3mf') return asmMode ? asmTools.exportCmd('export-' + key) : exportMesh(key);
  }

  /** IFC4 with every property: geometry, part properties, parameters, title block, quantities (ifc-export.js; 0.5 WL.32). */
  function exportIfc() {
    if (mode === 'sketch') exitSketch();
    if (!regen?.mesh) { status(t('app.export.no_solid')); return; }
    const name = fileBase(), r = partIfc(part, regen, { evaluate: evaluateVars, fileName: name + '.ifc' });
    download(r.text, name + '.ifc', 'application/x-step');
    status(t('app.export.ifc', { file: name + '.ifc', psets: r.counts.psets, n: r.counts.properties }));
  }

  async function exportDrawing() {
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    await built();
    if (!regen?.mesh) { status(t('app.drawing.no_solid')); return; }
    status(t('app.drawing.making'), true);
    let sheet;
    if (mode === 'drawing' && drawingState?.sheet && !drawingState.drag) sheet = composeSheet(drawingState.data, { name: part.name, drawing: drawingOf(), annotate: G.annotationGeometry, material: part.material?.name, holes: drawingHoles() });
    else {
      let data;
      try { data = await drawingViewsNow(drawingOf()); } catch (err) { status(t('app.drawing.failed', { error: err.message })); return; }
      sheet = composeSheet(data, { name: part.name, drawing: drawingOf(), annotate: G.annotationGeometry, material: part.material?.name, holes: drawingHoles() });
    }
    const pdf = await drawingPdf(sheet);
    download(pdf.bytes, fileBase() + ' - drawing.pdf', 'application/pdf');   // i18n-ignore: a file name
    const extras = Object.keys(sheet.views).filter((k) => ['section', 'detail', 'iso'].includes(k)).map((k) => ({ section: () => t('app.drawing.v_section'), detail: () => t('app.drawing.v_detail'), iso: () => t('app.drawing.v_iso') }[k]()));
    const nn = sheet.notes.filter((q) => q.box).length;
    status(t('app.drawing.exported', { scale: scaleLabel(sheet.scale), views: [t('app.drawing.v_front'), t('app.drawing.v_top'), t('app.drawing.v_right'), ...extras].join(', '), notes: nn ? t('app.drawing.gdt_notes', { n: nn }) : '', exact: sheet.exact ? t('app.drawing.exact_views') : '' }));
  }

  /**
   * SolidWorks exchange (swmacro.js, brep-xcaf.js): the named, coloured STEP, or the macro that builds the part natively
   * (+ that STEP on a second click). Built in the exact kernel's worker; without it the macro covers what needs no
   * face/edge picks and says what it left out. Not yet tested in SolidWorks — every message says so.
   */
  async function exportForSw(macro) {
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    await built();
    const name = fileBase();
    const SWM = await import('./swmacro.js');
    let res = null;
    if (useExact) {
      status(macro ? t('app.sw.writing_macro') : t('app.export.writing_step'), true);
      try { res = await exact.call('swExport', { part, name: part.name || name }); } catch (err) { status(t('app.export.failed', { error: err.message })); return; }
    } else if (!macro) { status(exactWhy(t('kernel.what.sw_step'), exact.state === 'loading' ? t('app.sw.step_needs_exact_loading') : t('app.sw.step_needs_exact_off'))); return; }
    const getStep = () => { if (res?.step) { download(res.step.text, name + '.step', 'model/step'); return true; } return false; };
    if (!macro) {
      if (!getStep()) { status(t('app.sw.step_failed', { reason: res?.stepError || t('app.sw.no_solid') })); return; }
      status(t('app.sw.step_done', { file: name + '.step', name: part.name }));
      return;
    }
    const swb = res ? res.swb : SWM.partToSwb(part, { name: part.name || name });
    download(SWM.toCp1252(swb.text), name + '.swb', 'application/octet-stream');
    const left = swb.notes.length;
    status(t('app.sw.macro_done', { file: name + '.swb', carried: swb.stats.carried, features: swb.stats.features, noexact: res ? '' : t('app.sw.without_exact'), notes: left ? t('app.sw.notes', { n: left }) : '' }));
    const text = [t('app.sw.macro_text', { carried: swb.stats.carried, features: swb.stats.features, vars: t('app.sw.vars', { n: swb.stats.vars }), equations: t('app.sw.equations', { n: swb.stats.equations }) }), ...swb.notes].join(' ');
    const buttons = [['close', t('app.btn.close'), 'pc-btn']];
    if (res?.step) buttons.push(['step', t('app.sw.download_step'), 'pc-btn is-primary']);
    const pickd = await ask({ title: t('app.sw.macro_title'), text: text + ' ' + (res?.step ? t('app.sw.step_beside') : res?.stepError ? t('app.sw.no_step', { error: res.stepError }) : t('app.sw.step_needs_exact')), buttons });
    if (pickd === 'step') getStep();
  }

  async function exportStep(schema) {
    if (mode === 'sketch') exitSketch();
    if (!useExact) { status(exactOff() ? t('kernel.step.not_built') : exact.state === 'loading' ? t('app.export.step_needs_exact_loading') : t('app.export.step_needs_exact_off')); return; }
    await built();
    if (!regen?.mesh) { status(t('app.export.no_solid')); return; }
    status(t('app.export.writing_step'), true);
    try {
      const { text } = await exact.call('step', { part, schema });
      const name = fileBase();
      download(text, name + '.step', 'model/step');
      const c = (re) => (text.match(re) || []).length;
      status(t('app.export.step_exact', { file: name + '.step', schema, faces: c(/ADVANCED_FACE\(/g), cyl: c(/CYLINDRICAL_SURFACE\(/g), cone: c(/CONICAL_SURFACE\(/g), torus: c(/TOROIDAL_SURFACE\(/g), spline: c(/B_SPLINE_SURFACE/g) }));
    } catch (err) { status(t('app.export.step_failed', { error: err.message })); }
  }

  function exportDxf(sf) {
    let f = sf || editingFeature() || (sel?.kind === 'feature' && P.featureById(part, sel.id)?.type === 'sketch' ? P.featureById(part, sel.id) : null);
    if (f && f.type === 'sketch') {
      const d = X.dxfSketch(f.sketch);
      const name = fileBase() + ' - ' + f.name.replace(/[^A-Za-z0-9 _.-]+/g, '_');
      download(d.text, name + '.dxf', 'image/vnd.dxf');
      status(t('app.export.dxf_sketch', { file: name + '.dxf', lines: d.counts.line, arcs: d.counts.arc, circles: d.counts.circle, points: d.counts.point }));
      return;
    }
    if (pick?.kind === 'face' && pick.flat && regen?.mesh) {
      const grp = view.planarGroups();
      const fl = faceLoops2D(regen.mesh, grp.groups[pick.group]);
      const d = X.dxfLoops(fl.loops);
      download(d.text, fileBase() + ' - face.dxf', 'image/vnd.dxf');   // i18n-ignore: a file name
      status(t('app.export.dxf_face', { n: fl.loops.length, area: f3(Math.abs(fl.area)) }));
      return;
    }
    status(t('app.export.dxf_nothing'));
  }

  async function newPart() {
    if (mode === 'assembly' || editPartOf) { if (!(await closeAssembly())) return; }
    if (!(await confirmDiscard())) return;
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    if (mode === 'drawing') leaveDrawing();
    part = P.newPart();
    hist.clear(); dirty = false; sel = null; pick = null; pendingSketch = false;
    view.setHighlight(null);
    rebuild(); renderAll(); view.view('iso');
    status(t('app.file.new_part'));
  }

  /**
   * File › Standard part (0.5 MQ.4): a bolt, nut, washer, pin, bearing or key from the standard's table (stdparts.js), opened
   * as a new part with one configuration per size (Parameters › Configurations switches it).
   */
  async function openStandardPart() {
    if (mode === 'assembly' || editPartOf) { if (!(await closeAssembly())) return; }
    if (!(await confirmDiscard())) return;
    const SP = await import('./stdparts.js');
    const fam = el('select', { className: 'pc-select', id: 'pc-std-fam' }, ...SP.TEMPLATES.map((x) => el('option', { value: x.id }, x.name + ' (' + x.standard + ')')));
    const size = el('select', { className: 'pc-select', id: 'pc-std-size' });
    const fill = () => size.replaceChildren(...SP.templateSizes(fam.value).map((z) => el('option', { value: z.size }, z.name)));
    fam.addEventListener('change', fill);
    fill();
    const body = el('div', { className: 'pc-std' },
      el('label', { htmlFor: 'pc-std-fam' }, t('app.std.part')), fam,
      el('label', { htmlFor: 'pc-std-size' }, t('app.std.size')), size,
      el('p', { className: 'pc-muted' }, t('app.std.note')));
    const ch = await ask({ title: t('app.std.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['open', t('app.std.open'), 'pc-btn is-primary']] });
    if (ch !== 'open') return;
    const made = SP.makeTemplate(fam.value, size.value);
    await openText(P.toJSON(made), made.name);
    dirty = true;   // a new part, not a file on disk yet
    status(t('app.std.opened', { name: made.name, size: made.configs.active }));
  }

  /** A cadcraft-sw-export file (CadCraftExport.swb run in SolidWorks): rebuilt by swimport.js in the exact kernel's worker. */
  async function openSwExport(text, name) {
    if (exactOff()) { status(t('kernel.not_built', { what: t('kernel.what.sw_open') }), true); return; }
    if (exact.state !== 'ready') {
      ui.busy.hidden = false; ui.busyText.textContent = t('app.sw.loading_exact');
      try { await exact.start(); } catch (err) { status(t('app.sw.open_needs_exact', { error: err.message })); return; } finally { ui.busy.hidden = true; }
    }
    status(t('app.sw.rebuilding', { name }), true);
    let r;
    try { r = await exact.call('swImport', { json: text }); } catch (err) { status(err.message); await ask({ title: t('app.file.cannot_open', { name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    let p;
    try { p = P.readPart(JSON.stringify(r.part)); } catch (err) { status(err.message); return; }
    if (mode === 'sketch') exitSketch();
    part = p;
    hist.clear(); dirty = true; sel = null; pick = null; multi = []; pendingSketch = false;
    view.setHighlight(null);
    rebuild(); renderAll();
    await built();
    syncPlanes(); view.view('iso');
    status(t('app.sw.opened_status', { report: r.report.lines[0] }), true);
    await ask({ title: t('app.sw.opened_title', { name }), text: r.report.lines.join(' '), buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
  }

  async function openText(text, name) {
    if (mode === 'pick') endPick();
    if (mode === 'drawing') leaveDrawing();
    if (/"format"\s*:\s*"partcraft-assembly"/.test(text.slice(0, 400))) { await openAssemblyText(text, name); return; }
    if (/"format"\s*:\s*"cadcraft-sw-export"/.test(text.slice(0, 400))) { await openSwExport(text, name); return; }
    let p;
    try { p = P.readPart(text); } catch (err) { status(err.message); await ask({ title: t('app.file.cannot_open', { name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    if (mode === 'assembly' && !(await closeAssembly())) return;   // a part file leaves the open assembly (asking when it has changes)
    if (mode === 'sketch') exitSketch();
    part = p;
    hist.clear(); dirty = false; sel = null; pick = null; multi = []; pendingSketch = false;
    view.setHighlight(null);
    rebuild(); renderAll();
    await built();
    syncPlanes(); view.view('iso');
    const errs = [...regen.results.values()].filter((r) => r.status === 'error').length;
    status(errs ? t('app.file.opened_failing', { name, n: part.features.length, errs }) : t('app.file.opened', { name, n: part.features.length }));
  }

  ui.file.addEventListener('change', async () => { const f = ui.file.files[0]; ui.file.value = ''; if (f) openFile(f); });
  async function openFile(f) {
    try { if (await addons?.openFromAddon(f)) return; } catch (e) { status(t('app.file.addon_failed', { name: f.name, error: e && e.message ? e.message : String(e) })); return; }   // an add-on's importer
    if (/\.(step|stp)$/i.test(f.name)) { await importStep(f); return; }
    if (f.size > 50 * 1024 * 1024) { status(t('app.file.too_big')); return; }
    if (!/\.json$/i.test(f.name)) { status(t('app.file.unknown_kind', { name: f.name })); return; }
    await openText(await f.text(), f.name);
  }

  /** A STEP file becomes an imported solid: the first feature of a new part, or added to this one. */
  async function importStep(f) {
    if (f.size > 60 * 1024 * 1024) { status(t('app.step.too_big')); return; }
    const text = await f.text();
    if (!/^\s*ISO-10303-21;/.test(text)) { status(t('app.step.not_step', { name: f.name })); return; }
    if (exactOff()) { status(t('kernel.not_built', { what: t('kernel.what.step_open') }), true); return; }
    if (exact.state !== 'ready') {
      ui.busy.hidden = false; ui.busyText.textContent = t('app.step.loading_exact');
      try { await exact.start(); } catch (err) { ui.busy.hidden = true; status(t('app.step.needs_exact', { error: err.message })); return; } finally { ui.busy.hidden = true; }
    }
    let info;
    try { info = await exact.call('stepInfo', { text }); } catch (err) { await ask({ title: t('app.step.cannot_import', { name: f.name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    let into = 'new';
    if (part.features.length) {
      into = await ask({ title: t('app.step.import_title', { name: f.name }), text: t('app.step.import_text', { n: info.solids, faces: info.faces, part: part.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['add', t('app.step.add_to_part'), 'pc-btn'], ['new', t('app.step.new_part'), 'pc-btn is-primary']] });
      if (into === 'cancel') return;
      if (into === 'new' && !(await confirmDiscard())) return;
    }
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    if (mode === 'drawing') leaveDrawing();
    if (into === 'new') {
      part = P.newPart(f.name.replace(/\.(step|stp)$/i, '').replace(/[\u0000-\u001f]/g, '').slice(0, 120) || 'Imported');   // i18n-ignore: a default part name saved in the file (data)
      hist.clear(); dirty = false; sel = null; pick = null;
    }
    const g = commit(t('app.undo.import_step'), () => P.addFeature(part, 'import', { file: f.name.slice(0, 200), step: text, up: 'z' }));
    sel = { kind: 'feature', id: g.id };
    view.setPlanesVisible(false);
    await built();
    renderAll(); view.view('iso');
    const r = regen.results.get(g.id);
    status(r?.status === 'ok' ? t('app.step.imported', { name: f.name, n: info.solids, faces: info.faces, vol: f3(info.volume) }) : t('app.feature.error', { name: g.name, error: r?.message || t('app.step.not_built') }), true);
  }

  const stage = $('[data-stage]');
  let dragDepth = 0;
  stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types.includes('Files')) { dragDepth++; ui.drop.hidden = false; e.preventDefault(); } });
  stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types.includes('Files')) e.preventDefault(); });
  stage.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) ui.drop.hidden = true; });
  stage.addEventListener('drop', async (e) => {
    e.preventDefault(); dragDepth = 0; ui.drop.hidden = true;
    const f = e.dataTransfer?.files?.[0];
    if (f && (await confirmDiscard())) openFile(f);
  });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;

  // Autosave and crash recovery (0.4 item 1.2; the shell's app-autosave.js): the open part, or the open assembly, is one
  // document. Every undoable edit goes through hist / asmHist.push (and undo/redo), so those mark it changed; a copy is written a
  // moment later. Saving, New, Open and closing clear `dirty` / `asmDirty`, and the watcher below then drops the copy.
  const autosave = new Autosave({ app: 'partcraft' });
  const asmShown = () => !!asm && !editPartOf;
  const adoc = autosave.doc({ id: 'open', name: fileBase(), snapshot: async () => (asmShown()
    ? { data: { kind: 'assembly', text: A.toJSON(asm) }, meta: { name: (asm.name || 'assembly') + '.partcraft-asm.json' } }
    : { data: { kind: 'part', text: P.toJSON(part) }, meta: { name: fileBase() + '.partcraft.json' } }) });
  let copyPending = false;
  const noteChange = () => {
    if (!(dirty || asmDirty)) return;
    adoc.rename(asmShown() ? asm.name || 'assembly' : fileBase());
    adoc.changed(); copyPending = true;
  };
  for (const h of [hist, asmHist]) { const push = h.push.bind(h); h.push = (...a) => { const r = push(...a); queueMicrotask(noteChange); return r; }; }
  setInterval(() => { if (copyPending && !dirty && !asmDirty) { adoc.clean(); copyPending = false; } }, 1500);
  ready.then(() => autosave.offer({
    onRecover: async (rec) => {
      const d = rec.data;
      if (!d || typeof d.text !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      await openText(d.text, rec.meta?.name || rec.name || t('app.file.recovered'));
      if (d.kind === 'assembly') asmDirty = true; else dirty = true;   // recovered work is not saved to a file yet
      noteChange(); renderAll();
    },
  }));

  window.addEventListener('beforeunload', (e) => { if ((dirty || asmDirty) && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !(dirty || asmDirty) || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    if (asmDirty) {
      const ch = await ask({ title: t('app.asm.unsaved_title'), text: t('app.asm.unsaved_text', { name: asm.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.asm.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
      if (ch === 'cancel') return;
      if (ch === 'save') saveAssembly();
    }
    leaving = true;
    setTimeout(() => location.assign(url.href), dirty || asmDirty ? 0 : 800);
  });

  async function confirmDiscard() {
    if (!dirty) return true;
    const ch = await ask({ title: t('app.file.unsaved_title'), text: t('app.file.unsaved_text', { name: part.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.file.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
    if (ch === 'save') { savePart(); return true; }
    return ch === 'discard';
  }

  /** Nest flat parts on sheets (0.6 LC.17, nest-ui.js): the flat pattern just laid, else this part's or — in an assembly —
   *  every sheet metal part's (one per copy; the exact kernel unfolds them), plus outlines from DXF files in the dialog. */
  async function openNest(flat = null) {
    const NU = await import('./nest-ui.js');
    const parts = [], why = [];
    const isSheet = (pt) => (pt?.features || []).some((f) => SHEET_TYPES.has(f.type));
    const unfold = async (pt, name, qty) => {
      if (!useExact) { why.push(t('nest.from.needs_exact', { name })); return; }
      try { const p = NU.flatToPart(await exact.call('sheetFlat', { part: pt }), name, qty); if (p) parts.push(p); else why.push(t('nest.from.no_outline', { name })); } catch (e) { why.push(name + ': ' + e.message); }
    };
    if (flat) { const p = NU.flatToPart(flat, part?.name || fileBase(), 1); if (p) parts.push(p); }
    else if (mode === 'assembly' && asm) {
      status(t('nest.from.unfolding'), true);
      for (const [pid, entry] of Object.entries(asm.parts)) {
        const qty = asm.instances.filter((i) => i.part === pid).length;
        if (qty && isSheet(entry.part)) await unfold(entry.part, entry.name || entry.part?.name || pid, qty);
      }
      status('');
    } else if (isSheet(part)) await unfold(part, part.name || fileBase(), 1);
    if (why.length) status(why.join(' '), true);
    await NU.openNest({ ask, el, btn, status, download: (text, name, type) => download(text, name, type), fileBase: () => fileBase() }, parts);
  }

  /** A small in-page dialog; resolves with the chosen button's key ('cancel' on Esc). */
  function ask({ title, text, body, buttons }) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'pc-dialog', 'aria-labelledby': 'pc-ask-h' },
        el('div', { className: 'pc-dialog-head' }, el('h2', { className: 'pc-h', id: 'pc-ask-h' }, title)),
        body ? el('div', { className: 'pc-dialog-text' }, body) : el('p', { className: 'pc-dialog-text' }, text),
        el('div', { className: 'pc-dialog-foot' }, ...buttons.map(([key, label, cls]) => el('button', { type: 'button', className: cls, dataset: { key } }, label))));
      let result = 'cancel';
      const back = document.activeElement;
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b) { result = b.dataset.key; dlg.close(); } });
      dlg.addEventListener('close', () => {
        dlg.remove();
        // blur + focus: Chromium leaves a mouse-closed modal's restored focus unable to take keys
        const t = back && back.isConnected && back !== document.body ? back : ui.gl;
        if (document.activeElement === t) t.blur();
        (t.focus ? t : ui.gl).focus({ preventScroll: true });
        done(result);
      });
      root.append(dlg);
      dlg.showModal();
      (dlg.querySelector('button[data-key="cancel"]') || dlg.querySelector('button'))?.focus();
    });
  }

  function focusStage() {
    const t = mode === 'sketch' ? ui.sk : ui.gl;
    if (!t.hasAttribute('tabindex')) t.tabIndex = 0;
    if (document.activeElement === t) t.blur();
    t.focus({ preventScroll: true });
  }
  ui.gl.tabIndex = 0; ui.sk.tabIndex = 0;

  // ---------------------------------------------------------------- workspaces (workspaces.js, ws-*.js)
  // Design is everything above; another workspace gets the toolbar group(s) it registered, the right panel, picks,
  // hovers and keys, and works on the same part through `host` (docs/apps/partcraft-workspaces.md).
  // Measure (every workspace) and the assembly tools (docs/apps/partcraft.md, measuring / BOM / exploded views)
  const IDENT4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  measure = createMeasure({
    view, THREE, el, exact, stage: ui.gl.parentElement, tokens: () => tokens(),
    status: (m, keep) => status(m, keep), useExact: () => useExact, changed: () => updateTools(),
    blocked: () => (mode === 'sketch' || mode === 'drawing' ? t('app.measure.model_only') : ''),
    targets: () => {
      if (mode === 'assembly') {
        if (!asm || !asmPlace) return [];
        const shown = asmTools.displayWorld(asmPlace.world);
        return asm.instances.filter((i) => asmBuilds.get(i.part)?.mesh).map((i) => ({ id: i.id, name: i.name, pid: i.part, partName: asm.parts[i.part].name, part: asm.parts[i.part].part, build: asmBuilds.get(i.part), matrix: shown.get(i.id), density: asm.parts[i.part].material?.density ?? null }));
      }
      return regen?.mesh ? [{ id: null, name: part.name, pid: null, partName: part.name, part, build: regen, matrix: IDENT4, density: part.material?.density ?? null, materialName: part.material?.name ?? null }] : [];
    },
  });
  section = createSection({
    view, el, stage: ui.gl.parentElement, status: (m, keep) => status(m, keep), changed: () => updateTools(),
    blocked: () => (mode === 'sketch' || mode === 'drawing' ? t('section.blocked') : ''),
    // a flat face: the exact kernel's face record (placed by the instance's matrix in an assembly); the mesh kernel has
    // no face records, so the clicked facet's plane stands in
    facePlane: (h) => {
      if (!h || h.kind !== 'face') throw new Error(t('section.need_flat'));
      const build = h.inst !== undefined ? asmBuilds.get(instById(h.inst)?.part) : regen;
      const rec = build?.faces?.[h.face];
      if (rec) return faceSection(rec, h.inst !== undefined ? h.matrix : null);
      const n = h.normal, p = h.worldPoint || h.point;
      if (h.inst !== undefined) { const M = h.matrix; const w = [M[0] * n[0] + M[4] * n[1] + M[8] * n[2], M[1] * n[0] + M[5] * n[1] + M[9] * n[2], M[2] * n[0] + M[6] * n[1] + M[10] * n[2]]; return faceSection({ type: 'plane', n: w, o: p }); }
      return faceSection({ type: 'plane', n, o: p });
    },
  });
  draft = createDraft({
    view, el, stage: ui.gl.parentElement, status: (m, keep) => status(m, keep), changed: () => updateTools(),
    blocked: () => (ws !== WS.DESIGN || mode === 'sketch' || mode === 'drawing' || mode === 'assembly' ? t('draft.blocked') : ''),
    mesh: () => (mode === 'assembly' ? null : regen?.mesh || null),
    faceNormal: (h) => {
      const rec = h && h.kind === 'face' && h.inst === undefined ? regen?.faces?.[h.face] : null;
      if (rec && rec.type === 'plane') return rec.n;
      if (h && h.kind === 'face' && !regen?.exact && h.normal) return h.normal;   // the mesh kernel: the clicked facet
      throw new Error(t('draft.need_flat'));
    },
    viewDir: () => { const d = new THREE.Vector3(); view.camera.getWorldDirection(d); return [d.x, d.y, d.z]; },
    color: (tok) => { const v = getComputedStyle(document.documentElement).getPropertyValue(tok).trim(); const m = /^#?([0-9a-f]{6})$/i.exec(v); const n = m ? parseInt(m[1], 16) : 0x808080; return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; },
  });
  // Tolerance stack-ups (0.6 LC.18, stackup-ui.js): Assembly › Stack-up, a card over the stage; edits are assembly undo steps
  stackup = createStackup({
    el, btn, view, THREE, stage: ui.gl.parentElement, tokens: () => tokens(), status: (m, keep) => status(m, keep),
    asm: () => (mode === 'assembly' ? asm : null), world: () => asmPlace?.world || new Map(),
    instName: (id) => (asm && instById(id)?.name) || '', partOf: (id) => { const i = asm && instById(id); return i ? asm.parts[i.part]?.part : null; },
    commit: (label, fn) => commitAsm(label, fn), download: (text, name, type) => download(text, name, type), fileBase: () => asm?.name || fileBase(),
  });
  asmTools = createAsmTools({
    el, view, THREE, A, V, X, exact, toPdf: (sh) => drawingPdf(sh), tokens: () => tokens(),
    get asm() { return asm; }, get builds() { return asmBuilds; }, get place() { return asmPlace; },
    useExact: () => useExact, status: (m, keep) => status(m, keep), download: (b, n, t) => download(b, n, t),
    commitAsm: (label, fn) => commitAsm(label, fn), showInstances: () => { if (asm && asmPlace) showInstances(); }, renderAll: () => renderAll(),
    field, numInput, selectInput, btn, check,
  });
  const host = {
    get part() { return part; }, get regen() { return regen; }, get useExact() { return useExact; }, get mode() { return mode; },
    get workspace() { return ws.id; }, get manifold() { return M; },
    exact, view, THREE, el, P,
    status: (m, keep = false) => status(m, keep),
    rebuild: () => rebuild(), built: () => built(), renderAll: () => renderAll(), renderPanel: () => keepFocus(() => renderProps()),
    /** One undo step on the part: fn() changes host.part. rebuild false = data only (studies), no kernel run. */
    commit: (label, fn, { rebuild: rb = true } = {}) => { if (rb) return commit(label, fn); hist.push(part, label); const r = fn(); dirty = true; renderAll(); return r; },
    study: (key) => P.study(part, key),
    setStudy: (key, value, label = t('app.undo.change_study')) => host.commit(label, () => P.setStudy(part, key, value), { rebuild: false }),
    downloadBlob: (name, blob, mime) => download(blob, name, mime || blob.type || 'application/octet-stream'),
    ask: (o) => ask(o),
    confirm: async (title, text, yes = t('app.btn.ok')) => (await ask({ title, text, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['yes', yes, 'pc-btn is-primary']] })) === 'yes',
    computeWorker: (modules, opts = {}) => {   // opts.threads: every call's args get the Settings thread count (compute-worker.js)
      const w = computeWorker(modules, opts);
      if (!opts.threads) return w;
      const n = () => (settings.threads === 'auto' ? AUTO_THREADS() : settings.threads);
      return { call: (op, args, o) => w.call(op, args && typeof args === 'object' && !Array.isArray(args) ? { ...args, threads: n() } : args, o), terminate: () => w.terminate(), get busy() { return w.busy; } };
    },
    focusStage: () => focusStage(), tokens: () => tokens(),
  };
  /** Call a hook of the active workspace; a throw becomes a status message (never a console error). */
  function wsCall(name, ...args) {
    const fn = ws[name];
    if (typeof fn !== 'function') return undefined;
    try { return fn.apply(ws, args); } catch (err) { status(t('app.ws.error', { ws: ws.label, error: err && err.message ? err.message : err }), true); return undefined; }
  }
  function notInDesign() {
    if (ws === WS.DESIGN) return false;
    status(t('app.ws.design_only', { ws: ws.label }));
    return true;
  }
  /** Why the other workspaces are off just now ('' = they are not). */
  function wsBlocked() { return mode === 'assembly' ? t('app.ws.blocked_asm') : editPartOf ? t('app.ws.blocked_asm_part') : ''; }
  function syncWsSwitcher() {
    if (!ui.ws) return;
    const why = wsBlocked();
    if (ui.ws.dataset.baseTitle === undefined) ui.ws.dataset.baseTitle = ui.ws.getAttribute('title') || '';
    for (const o of ui.ws.options) { const off = !!why && o.value !== 'design'; o.disabled = off; if (off) o.title = why; else o.removeAttribute('title'); }
    ui.ws.title = ui.ws.dataset.baseTitle + (why ? ' — ' + why : '');
    if (ui.ws.value !== ws.id) ui.ws.value = ws.id;
  }
  function wsToolState(b) {
    if (b.closest('[data-workspace-group]').dataset.workspaceGroup !== ws.id) return;
    if (b.dataset.baseTitle === undefined) b.dataset.baseTitle = b.getAttribute('title') || '';
    let st = !M && !useExact ? { ok: false, why: t('app.edit.loading') } : { ok: true, why: '' };
    if (st.ok && ws.toolState) st = wsCall('toolState', b.dataset.cmd, host) || st;
    b.disabled = !st.ok;
    b.title = st.ok || !st.why ? b.dataset.baseTitle : b.dataset.baseTitle + ' — ' + st.why;
  }
  function renderWsPanel() {
    // a node the workspace marks data-ws-keep="<its id>" stays in place: moving a textarea out of the page loses the
    // browser's own undo (the Script editor; 0.4 P7)
    const keep = [...ui.props.children].filter((c) => c.dataset && c.dataset.wsKeep === ws.id);
    if (!keep.length) { swapChildren(ui.props, []); ui.props.replaceChildren(); }
    else for (const c of [...ui.props.children]) if (!keep.includes(c)) c.remove();
    const head = ws.renderPanel ? wsCall('renderPanel', host, ui.props) : (ui.props.append(WS.placeholderPanel(ws, el)), null);
    ui.propsH.textContent = typeof head === 'string' && head ? head : ws.label;
  }
  /** Switch workspace (by the switcher, or tests). Leaves a sketch, pick mode or the drawing sheet first; assemblies stay in Design. */
  function setWorkspace(id) {
    const next = WS.getWorkspace(id);
    if (!next || next === ws) { syncWsSwitcher(); return false; }
    const why = next === WS.DESIGN ? '' : wsBlocked();
    if (why) { status(why); syncWsSwitcher(); return false; }
    if (mode === 'sketch') exitSketch();
    if (mode === 'pick') endPick();
    if (mode === 'drawing') leaveDrawing();
    pendingSketch = false; pick = null; multi = []; sel = null;
    view.setHighlight(null); view.setHover(null); view.setMarks(null); view.setPlaneState(null, null);
    measure?.stop(); draft?.stop();
    if (ws === WS.DESIGN) paramsUI.showTab('props');   // the Design tab's script editor goes home first (0.5 WL.31)
    wsCall('exit', host);
    view.clearOverlays(); view.setFaceColors(null); view.setPartVisible(true);
    ws = next;
    root.dataset.activeWorkspace = ws.id;
    wsCall('enter', host);
    renderAll();
    if (ws === WS.DESIGN) status(t('app.ws.design'));
    else if (!ws.renderPanel) status(t('app.ws.being_built', { ws: ws.label }));
    return true;
  }
  // the Script tab of Design's right panel (0.5 WL.31): the Script workspace's editor, while the tree and the view work as in
  // Design; shown only in Design (the Script workspace has the editor as its panel)
  {
    const sec = $('#pc-sec-script'), box = $('[data-script-tab]'), tab = $('#pc-tab-script');
    // open: the editor moves in and the panel widens as in the Script workspace (data-script-tab-open, partcraft.css)
    if (sec && box) new MutationObserver(() => {
      const open = !sec.hidden && ws === WS.DESIGN;
      if (open) dockEditor(host, box); else undockEditor(host);
      if (open) root.dataset.scriptTabOpen = ''; else delete root.dataset.scriptTabOpen;
    }).observe(sec, { attributes: true, attributeFilter: ['hidden'] });
    const syncTab = () => { if (tab) tab.hidden = ws !== WS.DESIGN; };
    syncTab();
    new MutationObserver(syncTab).observe(root, { attributes: true, attributeFilter: ['data-active-workspace'] });
  }
  if (ui.ws) {
    ui.ws.replaceChildren(...WS.listWorkspaces().map((w) => el('option', { value: w.id }, w.label)));
    ui.ws.addEventListener('change', () => setWorkspace(ui.ws.value));
  }
  { const editGroup = ui.tools.querySelector('[data-group="edit"]'); for (const w of WS.listWorkspaces()) if (!w.builtin) for (const g of WS.toolbarGroups(w, el)) ui.tools.insertBefore(g, editGroup); }
  root.dataset.activeWorkspace = ws.id;

  // ---------------------------------------------------------------- keys
  // ---------------------------------------------------------------- touch (0.4 S.8)
  // Shown once a finger touches the page, hidden again by a mouse: Add (sticky Shift for sketch selections), Done (finish a
  // line chain, a right-click's job) and Esc (the Esc key, sent to the view in use). A long press does Done / Add for one tap.
  function showTouchBar() {
    const bar = $('[data-touchbar]');
    if (!bar) return;
    bar.hidden = !touch.on;
    if (!touch.on) return;
    const inSk = mode === 'sketch';
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
    if (k === 'done') { if (mode === 'sketch' && editor.step) editor.finishStep(); showTouchBar(); updateTools(); return; }
    if (k === 'esc') {
      const target = mode === 'sketch' ? ui.sk : mode === 'drawing' ? (ui.sheet.querySelector('svg') || ui.sheet) : ui.gl;
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
      if (k === 's') { e.preventDefault(); savePart(); return; }
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
    if (/^[0-9.]$/.test(e.key) && !e.altKey && mode === 'model' && ws === WS.DESIGN && sel?.kind === 'feature') {
      const f = P.featureById(part, sel.id), main = f && MAIN_NUMBER[f.type];
      const inp = main && ui.props.querySelector(`[data-param-key="${f.id}.${main}"]`);
      if (inp && !inp.disabled) { e.preventDefault(); inp.focus(); inp.value = e.key; inp.setSelectionRange(1, 1); status(t('app.feature.type_main', { name: f.name })); return; }
    }
    if (tgt && tgt.closest && tgt.closest('.pc-tree') && (e.altKey || e.key.startsWith('Arrow'))) return;
    if (stackup?.active && stackup.keydown(e)) { e.preventDefault(); return; }
    if (measure?.active && measure.keydown(e)) { e.preventDefault(); return; }
    if (section?.active && section.keydown(e)) { e.preventDefault(); return; }
    if (draft?.active && draft.keydown(e)) { e.preventDefault(); return; }
    if (mode === 'assembly' && asmTools?.keydown(e)) { e.preventDefault(); return; }
    if (ws !== WS.DESIGN) {
      if (wsCall('keydown', e, host) === true) { e.preventDefault(); return; }
      if (e.key === 'Delete' || e.key === 'Backspace' || (k === 's' && !e.altKey && !e.shiftKey)) return;   // Design's keys
    }
    if (k === 'm' && !e.altKey && !e.shiftKey && mode !== 'sketch' && mode !== 'drawing') { e.preventDefault(); run('view-measure'); return; }
    if (k === 'x' && !e.altKey && !e.shiftKey && mode !== 'sketch' && mode !== 'drawing') { e.preventDefault(); run('view-section'); return; }
    if (mode === 'drawing') {
      if (e.key === 'Escape') { e.preventDefault(); if (drawingState.tool) drawingTool(drawingState.tool); else if (drawingState.sel) { drawingState.sel = null; composeShow(); renderProps(); } else leaveDrawing(); return; }
      if ((e.key === 'Delete' || e.key === 'Backspace') && drawingState.sel) { e.preventDefault(); deleteNote(); return; }
      if (drawingState.sel && !e.shiftKey && e.key.startsWith('Arrow')) {
        e.preventDefault();
        const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0;
        commitDrawing(t('app.undo.nudge_note'), (d) => { const q = d.notes.find((x) => x.id === drawingState.sel); if (q) q.off = [+(q.off[0] + dx).toFixed(2), +(q.off[1] + dy).toFixed(2)]; });
        return;
      }
      if (k === 'f' && !e.altKey) { e.preventDefault(); sheetView.fit(); return; }
      return;
    }
    if (mode === 'pick') {
      if (e.key === 'Escape' || e.key === 'Enter') { e.preventDefault(); endPick(); return; }
      if (k === 'f' && !e.altKey) { e.preventDefault(); view.fit(); return; }
      if (tgt === ui.gl && e.key.startsWith('Arrow')) { e.preventDefault(); const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0; if (e.shiftKey) view.panBy(-dx * 0.1, -dy * 0.1); else view.orbitBy(-dx * 15, dy * 15); }
      return;
    }
    if (mode === 'sketch') {
      if (editor.key(e)) { e.preventDefault(); updateTools(); return; }
      if (e.key === 'Escape') { e.preventDefault(); exitSketch(); return; }
      if (k === 'f' && !e.shiftKey) { e.preventDefault(); editor.fit(); }
      return;
    }
    if (mode === 'assembly') {
      if (e.key === 'Escape') { if (jointPick) { jointPick = null; highlightAsm(); renderAll(); status(t('app.joint.cancelled')); } else if (asmSel) { asmSel = null; renderAll(); highlightAsm(); } return; }
      if (e.key === 'Delete' || (e.key === 'Backspace' && asmSel)) { e.preventDefault(); asmDelete(); return; }
      if (k === 'f' && !e.altKey) { e.preventDefault(); view.fit(); return; }
      if (k === 'j') { e.preventDefault(); asmStartJoint(); return; }
    }
    if (e.key === 'Escape') {
      if (handles?.cancel()) return;   // a handle being dragged goes back (0.6 PU.2)
      if (DUI.cancel()) { show3DSketches(); return; }
      if (SH.cancel()) return;
      if (BUI.cancel()) return;
      if (pendingSketch) { pendingSketch = false; status(''); syncPlanes(); updateTools(); return; }
      if (pick || sel || multi.length) { pick = null; sel = null; multi = []; showMarks(); view.setHighlight(null); view.setPlaneState(null, null); renderAll(); }
      return;
    }
    if (e.key === 'Delete' || (e.key === 'Backspace' && sel)) { e.preventDefault(); deleteSelected(); return; }
    if (paramsUI.key(e)) { e.preventDefault(); return; }   // [ ] End: rollback bar back / forward / to the end
    if (k === 'f' && !e.altKey) { e.preventDefault(); view.fit(); return; }
    if (tgt === ui.gl && e.key.startsWith('Arrow')) {
      e.preventDefault();
      const dx = e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0;
      if (e.shiftKey) view.panBy(-dx * 0.1, -dy * 0.1); else view.orbitBy(-dx * 15, dy * 15);
      return;
    }
    if (tgt === ui.gl && (e.key === '+' || e.key === '=' || e.key === '-')) { e.preventDefault(); view.zoomBy(e.key === '-' ? 1 / 1.25 : 1.25); return; }
    if (k === 's' && !e.altKey && !e.shiftKey) { e.preventDefault(); startSketch(); }
  });


  window.partcraft = {
    ready, built, asmBuilt, exact, get useExact() { return useExact; }, get multi() { return multi; }, get drawing() { return drawingState; }, startPick, endPick, enterDrawing, leaveDrawing, drawingClick, G,
    exactReady: () => (exactOff() ? built() : exact.start().then(() => built())),   // no exact kernel (0.4): the mesh kernel's build
    viewCube, axisIcon, cubeView: cubeOpts.getView, get settings() { return settings; },
    get part() { return part; }, get regen() { return regen; }, get mode() { return mode; }, get editing() { return editing; },
    get lastSolve() { return lastSolve; }, get sel() { return sel; }, get pick() { return pick; },
    get asm() { return asm; }, get asmPlace() { return asmPlace; }, get clashes() { return clashes; }, get asmSel() { return asmSel; }, A,
    get workspace() { return ws.id; }, setWorkspace, host, WS,
    view, editor, S, P, V, C, run, rebuild, editSketch, exitSketch, selectFeature, openText, commit, undoRedo, hist, asmHist, settings, editState, editAct, paramsUI,
    clip: () => clip, DUI, get section() { return section; }, get handles() { return handles; },
    exportBytes: (kind) => (kind === 'stl' ? X.stlBinary(regen.mesh) : kind === '3mf' ? X.threeMf(regen.mesh) : kind === 'step' ? X.stepFaceted(regen.mesh, part.name).text : null),
    stepText: (schema = 'AP242') => exact.call('step', { part, schema }).then((r) => r.text),
    // Studio Live (0.5 LV.20, live.js): someone else's edits landed in `part`; a joiner's part arrived; the session's messages
    status: (m) => status(m),
    liveApplied: () => {
      if (editing && !P.featureById(part, editing)) { if (mode === 'sketch') { editor.active = false; ui.sk.hidden = true; view.setSketch(null); ui.skBar.hidden = true; } mode = 'model'; editing = null; }
      if (sel?.kind === 'feature' && !P.featureById(part, sel.id)) sel = null;
      dirty = true; rebuild(); renderAll();
    },
    liveReplace: (p) => { if (mode === 'sketch') exitSketch(); part = p; hist.clear(); sel = null; pick = null; multi = []; dirty = true; rebuild(); renderAll(); },
  };
  // the menu styles (0.5 IP.3, input-partcraft.js + the shell's app-input-ui.js): their messages go to the status bar
  window.ccInputHooks = { status: (text, bad) => status(text || '', bad) };
  // add-ons (0.5 AO.7): PartCraft's own loader and API; their exporters join the Export menu
  const syncAddonExports = () => {
    const list = $('[data-export-menu] .pc-menu-list');   // i18n-ignore: a selector
    if (!list || !addons) return;
    for (const b of list.querySelectorAll('[data-addon-export]')) b.remove();
    for (const ex of addons.exporters()) {
      list.append(el('button', { type: 'button', role: 'menuitem', dataset: { addonExport: ex.id }, onclick: async () => {
        list.closest('details')?.removeAttribute('open');
        try { const name = fileBase() + '.' + ex.extension; download(await ex.write(addons.exportInput(part.name)), name, ex.mime); status(t('app.export.addon', { file: name })); }
        catch (e) { status(t('app.export.addon_failed', { what: ex.label, error: e && e.message ? e.message : String(e) })); }
      } }, ex.label));
    }
  };
  startAddons({ host, selection: () => sel, select: (id) => selectFeature(id), find: (q) => root.querySelector(q), showTab: (k) => paramsUI.showTab(k || 'props') })
    .then((a) => { addons = a; a.onChange(() => { syncAddonExports(); renderProps(); }); syncAddonExports(); renderProps(); })
    .catch((e) => console.warn('add-ons did not start:', e));   // i18n-ignore: a developer message
  renderAll();
}
