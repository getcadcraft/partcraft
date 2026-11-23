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
import { CMD_METHOD as ARC_CMDS } from './sketch-arcs.js';   // 0.9 FX.137: tool-arc-3p … the Arc tool's methods
import * as S from './sketch.js';
import { solveSketch } from './solver.js';
import * as P from './part.js';
import { mountUndoHook } from './undo-hook.js';   // 0.8 EG.77
import { regenerate, faceRefAt, planeFrame, MESH_BUILT } from './kernel.js';
import * as X from './export.js';
import './ifc-export.js';
import './params.js';
import './faces.js';
import './drawing.js';
import './bom.js';
import { ExactKernel, exactKernelUrl } from './exact-client.js';
import { refForName, findEdge } from './brep.js';
import * as G from './gdt.js';
import './sheetview.js';
import * as A from './assembly.js';
import * as V from './vec.js';
import * as C from './clipboard.js';
import { el, fillDl, swapChildren } from './ui-util.js';
import { mountParams } from './params-panel.js';
import { installAgents } from './agents.js';   // 0.7 AS.4: tools for the person's own AI assistant (off until Settings › Assistants)
import { installDesignUI, DESIGN_ICONS } from './design-ui.js';
import { installSurfaceUI, SURFACE_MENU, SURFACE_ICONS } from './surface-ui.js';
import { installBodiesUI, BODY_MENU, BODY_ICONS } from './bodies-ui.js';
import { installSheetUI, SHEET_TYPES, SHEET_MENU, SHEET_ICONS } from './sheet-ui.js';
import { installRibUI, RIB_MENU, RIB_ICONS } from './rib-ui.js';
import './frame-ui.js';   // 0.11 SU.1811: Check this frame
import { installWeldUI, WELD_ICONS } from './weld-ui.js';   // 0.7 D7.50: structural members
import { simEnvProblems } from './sim.js';
import './fem-solid-study.js';   // 0.9 SU.908c: the settings of the Solid FEM add-on in the file (part.studies['fem-solid'])
import './open-solvers-study.js';   // 0.9.1 (suggestion 1309): the settings of the Open solver cases add-on in the file (part.studies['open-solvers'])
import { studyProblemsNow } from './study-ui.js';
import { pcProblems, SRC_ID as PROBLEMS_SRC } from './problems-partcraft.js';   // 0.8 CE.6: the shell's Problems
import { installGenUI, GEN_ICONS } from './gen-ui.js';   // 0.8 CE.3: a script that adds a body (Generated)
import './shapes/sections.js';
import './threads.js';
import './params-part.js';
import './tree-value.js';   // 0.6 PU.5: the main value in a history row
import './face-actions.js';   // 0.6 PU.3: Extrude from it, Cut into it, Hole here
import './handle-math.js';   // 0.6 PU.2: drag handles on features
import { mountBimLink } from './part-link-pc.js';   // 0.10 BK.179 / SU.1814: Send to PartCraft from BimCraft, Save back to BimCraft
import * as MI from './meshimport.js';   // 0.7 D7.49: STL / OBJ / 3MF opened as solid bodies
import { FeatureHandles } from './handles.js';
import { startAddons } from './addons/partcraft-api.js';
import * as AB from './addons/addon-bodies.js';   // 0.8 DC.117: display bodies an add-on placed (add-on API 1.1)
import { installThreadUI, THREAD_ICONS } from './thread-ui.js';
import { hiddenGeometry } from './bodies.js';
import * as WS from './workspaces.js';
import { computeWorker } from './compute-worker.js';
import { AUTO_THREADS, MAX_THREADS, isolated as threadsIsolated } from './pool.js';
import './measure-ui.js';
import './stackup-ui.js';
import { contactProblemsNow } from './asm-contact-ui.js';   // 0.8 SU.891: Assembly › Contact
import './motion-ui.js';   // 0.8 EG.7: Assembly › Motion
import './section-ui.js';
import './draft-ui.js';
import './section.js';
import { t, has } from './i18n.js';
import './asm-ui.js';
// Workspaces (docs/apps/partcraft-workspaces.md): one import line per ws-<id>.js; each registers itself.
import './ws-form.js';
import { simProblemsNow } from './ws-simulation.js';
import { magnetProblemsNow } from './magnet-study-ui.js';   // 0.8 SG.7+: the Magnet study's findings in the shared Problems
import { breakProblemsNow } from './break-part.js';   // 0.8 EG.31 (physics_PART_3): Break it's findings in the shared Problems
import { mountPartShell } from './shell-mount.js';
import { mountPartAccess } from './access-mount.js';   // 0.8 round 3 (access_PART_3): EG.52, the feature tree without sight
import { partChanged as nodesChanged } from './nodes-pc.js';   // 0.8 DC.54 (nodes_PART_3): the Nodes workspace (cc-nodes)
import { partChanged as surfacesChanged, receive as surfacesReceive, snapshot as surfacesSnapshot } from './surfaces-pc.js';   // 0.8 SU.747b (part_PART_3): the Surfaces workspace (cc-nurbs + cc-nurbs-ui)   // 0.8 round 3 (part_PART_3): the shell's calc sheets, reasons, totals, lessons, Suggest, activity, Ask box
import './nlstudy-ui.js';   // 0.8 SU.891: File › Export CalculiX (.inp) / its results (.frd)
import './ws-generative.js';
import './ws-manufacture.js';
import './ws-illustrate.js';   // 0.7 Track TP (session illustrate)
import './ws-engineer.js';   // 0.8 Track CE (session engineer): generators, inputs, data sheet, checks
import './ws-script.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import { threeCubeOptions } from './viewcube-three.js';
import "./app-autosave.js";
import "./history/index.js";   // 0.10 PERF.24: autosave that writes what changed
import "./host.js";
import './drawing-export-ui.js';
import { mountProps } from './props-ui.js';
import { mountInput } from './input-ui.js';
import { mountWorkspaceUi } from './workspaces-ui.js';
import { mountFiles } from './files-ui.js';
import { mountDrawingSheet } from './drawing-sheet-ui.js';
import { mountAssembly } from './assembly-ui.js';
import { mountEdit } from './edit-ui.js';
import { mountToolbar } from './toolbar-ui.js';
import { mountHandles } from './handles-ui.js';
import { mountTree } from './tree-ui.js';
import { mountFeatures } from './features-ui.js';
import { mountSketch } from './sketch-ui.js';
import { mountPick } from './pick-ui.js';

const root = document.querySelector('[data-partcraft]');
if (root) init(root);

const ICONS = { sketch: 'pencil-square', extrude: 'box-arrow-up', revolve: 'arrow-repeat', hole: 'record-circle', lpattern: 'grid-3x2-gap', cpattern: 'arrow-clockwise', mirror: 'symmetry-vertical', fillet: 'app', chamfer: 'hexagon', shell: 'box2', import: 'box-arrow-in-down', ...DESIGN_ICONS, ...SURFACE_ICONS, ...BODY_ICONS, ...SHEET_ICONS, ...RIB_ICONS, ...THREAD_ICONS, ...WELD_ICONS, ...GEN_ICONS };
const SOLID = new Set(['extrude', 'revolve', 'hole', 'lpattern', 'cpattern', 'mirror', 'import', 'sweep', 'loft', 'member', 'generated']);
const PICKERS = new Set(['fillet', 'chamfer', 'shell', 'draft', 'thread']);
/** Each feature's main number, typed straight after selecting it (0.5 usability pass). */
const MAIN_NUMBER = { extrude: 'depth', revolve: 'angle', hole: 'd', lpattern: 'count', cpattern: 'count', fillet: 'r', chamfer: 'd', shell: 't', draft: 'angle', rib: 't', plane: 'd', thread: 'length' };
const FACE_PICKERS = new Set(['shell', 'draft', 'thread']);
/** Pickers whose faces or edges the mesh kernel names (K.2b) and builds (K.4, K.5; the thread, 0.5 WL.29). */
const PICK_ON_MESH = new Set([...MESH_BUILT, 'thread']);   // pickers whose references are faces (the others take edges)   // features whose references are picked in the view
const DESIGN_GROUPS = ['sketch', 'features', 'drawing', 'assembly'];   // toolbar groups only the Design workspace shows
function f3(v) { return V.fmt(v, 3); }
const ASM_EXPORTS = ['export-print', 'export-stl', 'export-3mf', 'export-step', 'export-step214', 'export-drawing', 'export-bom', 'export-ifc', 'export-nest', 'export-laser', 'export-usd'];   // what an assembly exports as a whole (asm-ui.js)

function init(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { M: undefined, part: undefined, regen: undefined, shellKit: undefined, problemsSync: undefined, dirty: undefined, bimLink: undefined, sel: undefined, pick: undefined, mode: undefined, multi: undefined, drawingState: undefined, editing: undefined, lastSolve: undefined, pendingSketch: undefined, addons: undefined, asm: undefined, asmBuilds: undefined, asmPlace: undefined, asmSel: undefined, jointPick: undefined, asmDirty: undefined, clashes: undefined, asmSweep: undefined, editPartOf: undefined, measure: undefined, asmTools: undefined, section: undefined, draft: undefined, stackup: undefined, motion: undefined, contactStudy: undefined, clip: undefined, ws: undefined, view: undefined, handles: undefined, dragRaf: undefined, padUntil: undefined, cornerShown: undefined, statusTimer: undefined, useExact: undefined, inflight: undefined, again: undefined, meshMs: undefined, meshMsPart: undefined, meshWorker: undefined, meshWorkerOk: undefined, meshSent: undefined, uid: undefined, numKind: undefined, asmSeq: undefined, asmFit: undefined, asmTreeLimit: undefined, sheetView: undefined, saveTarget: undefined, vaultUi: undefined, vaultRef: undefined, dragDepth: undefined, leaving: undefined, copyPending: undefined };
  const $ = (s) => root.querySelector(s);
  const ui = {
    tools: $('.pc-tools'), tree: $('[data-tree]'), facts: $('[data-facts]'), partName: $('[data-part-name]'),
    props: $('[data-props]'), propsH: $('[data-props-h]'), gl: $('[data-gl]'), sk: $('[data-sketch-canvas]'), dimInput: $('[data-dim-input]'),
    hint: $('[data-hint]'), drop: $('[data-drop]'), busy: $('[data-busy]'), busyText: $('[data-busy-text]'),
    skBar: $('[data-sketch-bar]'), skState: $('[data-sketch-state]'), skName: $('[data-sketch-name]'),
    coords: $('[data-coords]'), status: $('[data-status]'), build: $('[data-build-state]'), file: $('[data-file]'), insertFile: $('[data-insert-file]'), exportMenu: $('[data-export-menu]'),
    sheet: $('[data-sheet]'), kernel: $('[data-kernel]'), ws: $('[data-workspace]'),
  };

  ST.M = null;
  ST.part = P.newPart();
  ST.regen = null;
  ST.shellKit = null;   // shell-mount.js: the shell's seven modules, once mounted (after the assistants' control channel)
  ST.problemsSync = null;   // the shell's Problems (manifest "problems"): what a Generated feature's checks found, handed over after every rebuild
  const hist = new P.History();
  mountUndoHook({ hist, undoOne: () => undoRedo(true) });   // 0.8 EG.77: tells Studio each finished step
  ST.dirty = false;
  ST.bimLink = null;   // 0.10 SU.1814: part-link-pc.js, mounted at the end
  ST.sel = null;             // { kind:'feature', id } | { kind:'plane', name }
  ST.pick = null;            // picked geometry in the 3D view (face / edge)
  ST.mode = 'model';         // 'model' | 'sketch' | 'pick' (references of a fillet/chamfer/shell) | 'drawing' | 'assembly'
  ST.multi = [];             // picks added with Shift (edges or faces), for Fillet / Chamfer / Shell
  ST.drawingState = null;    // { views, key, sheet, tool, sel } in drawing mode
  ST.editing = null;         // sketch feature id while a sketch is open
  ST.lastSolve = null;
  ST.pendingSketch = false;  // Sketch pressed with nothing picked: the next plane/face pick starts it
  // assembly (mode 'assembly'): its own document, history and selection
  ST.addons = null;   // PartCraft's own add-on API 1.0 (addons/partcraft-api.js; 0.5 AO.7, wired by `part`)
  ST.asm = null; ST.asmBuilds = new Map(); ST.asmPlace = null; ST.asmSel = null; ST.jointPick = null; ST.asmDirty = false; ST.clashes = null;
  ST.asmSweep = null;   // which joint value the clash check sweeps (0.4 P19)
  const asmHist = new P.History();
  ST.editPartOf = null;      // { pid, stash: { part, dirty, undo, redo }, before } while a part of the assembly is open
  // measure-ui.js (Measure, every workspace), asm-ui.js (assembly tools), section-ui.js (Section view, every workspace) and
  // draft-ui.js (Draft analysis, Design; 0.4 P21), made next to `host`
  ST.measure = null; ST.asmTools = null; ST.section = null; ST.draft = null; ST.stackup = null; ST.motion = null; ST.contactStudy = null;
  ST.clip = readStoredClip(); // the clipboard (clipboard.js): this tab's copy, or the one another tab stored
  ST.ws = WS.DESIGN;          // the active workspace (workspaces.js); Design = everything else in this file

  // ---------------------------------------------------------------- views
  ST.view = null;
  ST.handles = null; ST.dragRaf = 0;   // drag handles on the selected feature (0.6 PU.2)
  try {
    ST.view = new View3D(ui.gl, { onPick, onHover });
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
    commit: sketchCommit,
    dragStart: (label) => { hist.push(ST.part, label); ST.dirty = true; },
    dragSolve: (pin, pinRadius) => { ST.lastSolve = solveSketch(editingFeature().sketch, { pin, pinRadius }); showSketchState(); },
    dragEnd: () => { rebuild(); renderProps(); },
    info: () => ST.lastSolve,
    status: (m) => status(m),
    changed: () => { renderProps(); updateTools(); },
    coords: (p) => { ui.coords.textContent = `${f3(p[0])}, ${f3(p[1])}`; },
    viewChanged: (v) => { if (ST.mode === 'sketch') ST.view.setSketch(currentFrame(), v); },
    tokens,
    toolChanged: updateTools,
    refocus: focusStage,
    isPad: looksLikePad,
    // sketch Project: the exact edge under the pointer (null without the exact kernel) and the sketch plane
    pickEdge: (cx, cy) => { const h = named() ? ST.view.pickAt(cx, cy, { planes: false }) : null; return h && h.kind === 'edge' && h.edge !== undefined ? ST.regen.edges[h.edge] : null; },
    frame: currentFrame,
    dimTyped: (cid, raw) => paramsUI.dimTyped(ST.editing, cid, raw),   // "=expr" in the dimension box (params-panel.js)
    pasted: (label, clip, made) => status(t(label === t('app.undo.duplicate') ? 'app.clip.sketch_duplicated' : 'app.clip.sketch_pasted', { what: C.describeClip(clip), relations: made.constraints.length ? t('app.clip.sketch_with_relations', { n: made.constraints.length }) : '', dropped: clip.dropped ? t('app.clip.sketch_dropped', { n: clip.dropped }) : '' })),
  });
  ST.view.onResize = () => { if (ST.mode === 'sketch') { ST.view.setSketch(currentFrame(), editor.view); editor.draw(); } };

  // ---------------------------------------------------------------- settings (Settings › PartCraft; per viewer conveniences)
  const SET_DEFAULTS = { orbit: 'left', scroll: 'auto', autoRel: true, corner: 'cube', threads: 'auto', bed: null, planes: true, dimDraw: true, lightDisplay: false };   // planes: View › Base planes (0.6 PU.4); dimDraw: Dimension as you draw (0.6 PU.1)
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
      if (v && typeof v.lightDisplay === 'boolean') out.lightDisplay = v.lightDisplay;
    } catch { /* private window or bad data: defaults */ }
    return out;
  })();
  ST.view.lodMode = settings.lightDisplay ? 'light' : 'auto';   // 0.9 SU.749: the lightweight display (Views menu)
  const persistSettings = () => { try { localStorage.setItem('partcraft.settings', JSON.stringify(settings)); } catch { /* fine: this visit keeps them */ } };
  const settingsDlg = document.querySelector('[data-app-settings]');
  // Trackpads: in trackpad mode a two-finger swipe turns the part (pans a sketch); in "auto" when the scrolling looks
  // like a trackpad's (sideways, or fine-grained). A pinch arrives as a wheel event with ctrlKey and always zooms.
  ST.padUntil = 0;
  function looksLikePad(e) {
    if (settings.scroll === 'trackpad') return true;
    if (settings.scroll === 'mouse' || e.deltaMode !== 0) return false;
    if (e.deltaX !== 0 || (e.deltaY % 1 !== 0 && Math.abs(e.deltaY) < 50)) ST.padUntil = e.timeStamp + 400;
    return e.timeStamp < ST.padUntil;
  }
  ST.view.isPad = looksLikePad;
  // corner indicator (Settings › PartCraft): the view cube (viewcube.js through viewcube-three.js; PartCraft is Y up, the
  // cube Z up — the adapter maps them) | the X/Y/Z axis icon | none. Neither shows while sketching or on the drawing sheet.
  const cubeOpts = threeCubeOptions({ camera: () => ST.view.camera, controls: () => ST.view.controls, render: () => ST.view.render(), home: () => ST.view.view('iso'), yUp: true });
  cubeOpts.i18n = { t, has };   // the cube's words: viewcube.* keys
  const viewCube = mountViewCube(ui.gl.parentElement, cubeOpts);
  const axisIcon = mountAxisIcon(ui.gl.parentElement, { getView: cubeOpts.getView, i18n: { t, has } });
  ST.cornerShown = '';
  function syncCorner() {
    const free = !ST.view.sketchFrame && ST.mode !== 'drawing' && ST.mode !== 'sketch';
    const want = free ? settings.corner : 'none';
    if (want !== ST.cornerShown) { ST.cornerShown = want; viewCube.setVisible(want === 'cube'); axisIcon.setVisible(want === 'axes'); }
  }
  ST.view.onRender = () => { syncCorner(); viewCube.update(); axisIcon.update(); ST.handles?.update(); };
  ST.view.controls.addEventListener('start', () => cubeOpts.stop());
  function applySettings() {
    ST.view.setOrbitButton(settings.orbit);
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
  ST.statusTimer = 0;
  function status(msg, keep = false) {
    ui.status.textContent = msg || '';
    clearTimeout(ST.statusTimer);
    if (msg && !keep) ST.statusTimer = setTimeout(() => { if (ui.status.textContent === msg) ui.status.textContent = ''; }, 9000);
  }

  // ---------------------------------------------------------------- kernels
  // manifold-3d (small, loads at once) builds the part. 0.4 has no exact kernel (K.2: OpenCascade left the manifest), so
  // exact.state is 'off' and the exact-only features say "Not built yet". When a build or a developer supplies OpenCascade
  // (exact-client.js exactKernelUrl), it loads in its worker and builds everything once ready, as up to 0.3.
  ui.busy.hidden = false;
  ST.useExact = false;
  const exact = new ExactKernel({ occtUrl: exactKernelUrl() });
  const exactOff = () => exact.state === 'off';
  /** The part on screen has named faces and edges: the exact kernel's, or the mesh kernel's own (0.4 K.2b). */
  const named = () => !!(ST.regen?.exact || ST.regen?.named);
  /** The words for something only an exact kernel does: "not built yet" in 0.4, else the loading / not loaded wording. */
  const exactWhy = (what, otherwise) => (exactOff() ? t('kernel.not_built', { what }) : otherwise);
  exact.onstate = (st, err) => {
    showKernel();
    if (st === 'ready') { ST.useExact = true; ui.busy.hidden = true; status(t('app.kernel.ready', { secs: (exact.loadMs / 1000).toFixed(1) })); if (ST.mode === 'assembly') { ST.asmBuilds = new Map(); } rebuild(); }
    if (st === 'failed') { ST.useExact = false; ui.busy.hidden = !!ST.M; status(t('app.kernel.load_failed', { error: err && err.message ? err.message : err }), true); rebuild(); }
  };
  function showKernel() {
    const st = exact.state;
    if (st === 'off') { ui.kernel.textContent = ST.M ? t('kernel.chip.mesh') : ''; ui.kernel.className = 'pc-chip is-ok'; ui.kernel.title = t('kernel.chip.mesh.title'); return; }
    ui.kernel.textContent = st === 'ready' ? t('app.kernel.chip_exact') : st === 'loading' ? t('app.kernel.chip_loading') : st === 'failed' ? t('app.kernel.chip_mesh_only') : ST.M ? t('kernel.chip.mesh') : '';
    ui.kernel.className = 'pc-chip ' + (st === 'ready' ? 'is-ok' : st === 'failed' ? 'is-error' : 'is-busy');
    ui.kernel.title = st === 'ready' ? (exact.loadMs ? t('app.kernel.title_ready_loaded', { secs: (exact.loadMs / 1000).toFixed(1) }) : t('app.kernel.title_ready')) : st === 'loading' ? t('app.kernel.title_loading') : t('app.kernel.title_mesh');
  }
  const ready = Module().then((m) => { m.setup(); ST.M = m; if (!ST.useExact) { ui.busy.hidden = true; rebuild(); renderAll(); } showKernel(); return true; })
    .catch((err) => { if (!ST.useExact) ui.busyText.textContent = t('app.kernel.solid_failed', { error: err && err.message ? err.message : err }); return false; });
  // OpenCascade is fetched once the page is up (it is big); nothing waits for it
  if (!exactOff()) setTimeout(() => { exact.start().catch(() => {}); }, 0);

  const editingFeature = () => (ST.editing ? P.featureById(ST.part, ST.editing) : null);
  function currentFrame() { return ST.editing && ST.regen ? ST.regen.frames.get(ST.editing) || planeFrame(editingFeature().plane, ST.regen, ST.part) : null; }

  // Rebuilds: synchronous with manifold for a quick part; with the exact kernel, or a mesh-kernel part whose last build took
  // MESH_WORKER_MS or more (0.10 PERF.39), a request goes to a worker and the newest one wins (a rebuild asked for while one
  // runs is sent when it returns; one that has run STALE_MS already is stopped and the newest sent at once). built() resolves
  // once the part on screen matches the part in memory.
  ST.inflight = false; ST.again = false;
  const MESH_WORKER_MS = 80, MESH_WORKER_TOOLS = 150, STALE_MS = 1500;
  ST.meshMs = 0; ST.meshMsPart = null; ST.meshWorker = null; ST.meshWorkerOk = true; ST.meshSent = 0;
  /** About how many solids a build applies: one per feature, a pattern's copies of its seeds (count × count2), a mirror two. */
  const toolsEstimate = (p) => {
    const n = new Map();
    let all = 0;
    for (const f of p.features) {
      const seeds = Array.isArray(f.seeds) ? f.seeds.reduce((a, id) => a + (n.get(id) || 1), 0) : 0;
      const k = seeds ? seeds * (f.type === 'mirror' ? 2 : Math.max(1, Math.min(1e5, f.count | 0)) * Math.max(1, Math.min(1e5, f.count2 | 0))) : 1;
      n.set(f.id, k); all += k;
    }
    return all;
  };
  /** The mesh kernel's rebuild goes to its worker: this part's last build was slow, or (not built yet: a file just opened) it looks big. */
  const meshInWorker = () => ST.meshWorkerOk && typeof Worker === 'function'
    && (ST.meshMsPart === ST.part ? ST.meshMs >= MESH_WORKER_MS : toolsEstimate(ST.part) >= MESH_WORKER_TOOLS);
  const waiters = [];
  const upToNow = () => (ST.mode === 'sketch' && ST.editing ? P.indexOf(ST.part, ST.editing) + 1 : ST.mode === 'pick' && ST.editing ? P.indexOf(ST.part, ST.editing) : null);
  function rebuild() {
    if (!ST.M && !ST.useExact) return;
    if (ST.mode === 'assembly') { return rebuildAsm(); }
    // the open sketch's state is the page's own solve: shown at once, whatever the kernel is doing
    if (ST.mode === 'sketch' && ST.editing && editingFeature()) { ST.lastSolve = solveSketch(editingFeature().sketch); showSketchState(); }
    if (ST.mode === 'drawing') { drawingRefresh(); }
    if (ST.useExact) { requestExact(); return; }
    if (meshInWorker()) { requestMesh(); return; }
    if (ST.inflight) { ST.again = true; return; }   // a worker build is still out: its answer is old, the next build comes after it
    const t0 = performance.now();
    const r = regenerate(ST.part, ST.M, { upTo: upToNow() });
    ST.meshMs = performance.now() - t0; ST.meshMsPart = ST.part;
    applyRegen(r, ST.meshMs);
  }
  /** 0.10 PERF.39: the mesh kernel in mesh-kernel-worker.js; the page shows the part it has until the new one lands. */
  function requestMesh() {
    if (ST.inflight) {
      ST.again = true;
      // a long build of a part that has changed since: its answer would be thrown away, so stop it and send the newest now
      if (performance.now() - ST.meshSent > STALE_MS && ST.meshWorker) { ST.meshWorker.terminate(); ST.meshWorker = null; }
      return;
    }
    ST.inflight = true;
    for (const f of ST.part.features) if (f.type === 'sketch') solveSketch(f.sketch);   // the worker builds the part as the page has it solved
    const t0 = ST.meshSent = performance.now(), sentPart = ST.part;
    ui.build.textContent = t('app.build.rebuilding'); ui.build.className = 'pc-chip is-busy';
    if (!ST.meshWorker) ST.meshWorker = computeWorker(['mesh-kernel-worker.js'], { name: 'PartCraft mesh kernel' });   // i18n-ignore: a worker's name for developer tools
    const w = ST.meshWorker;
    w.call('meshRegen', { part: ST.part, upTo: upToNow(), manifoldUrl: import.meta.resolve('manifold-3d') }, {
      onProgress: (f) => { if (ST.inflight && !ST.again) ui.build.textContent = t('app.build.rebuilding_pct', { pct: Math.round(f * 100) }); },
    }).then((r) => {
      ST.inflight = false;
      ST.meshMs = performance.now() - t0; ST.meshMsPart = sentPart;
      if (ST.again) { ST.again = false; rebuild(); return; }
      applyRegen(r, ST.meshMs);
    }, (err) => {
      ST.inflight = false;
      if (ST.again) { ST.again = false; rebuild(); return; }   // stopped for a newer part (terminate)
      // the worker could not start or failed: build here from now on, as before 0.10
      console.warn('mesh kernel worker failed; building on the page', err);
      ST.meshWorkerOk = false; ST.meshWorker = null;
      rebuild();
    });
  }
  function requestExact() {
    if (ST.inflight) { ST.again = true; return; }
    ST.inflight = true;
    // sketches are solved here too, so the page's part is the solved part the worker builds
    for (const f of ST.part.features) if (f.type === 'sketch') solveSketch(f.sketch);
    const t0 = performance.now();
    ui.build.textContent = t('app.build.rebuilding'); ui.build.className = 'pc-chip is-busy';
    exact.call('regen', { part: ST.part, upTo: upToNow() }).then((r) => {
      ST.inflight = false;
      if (ST.again) { ST.again = false; requestExact(); return; }
      applyRegen(r, performance.now() - t0);
    }, (err) => {
      ST.inflight = false; ST.again = false;
      if (exact.state !== 'ready') return;   // a failed load is reported by onstate
      status(t('app.kernel.failed_on_part', { error: err.message }));
      ui.build.textContent = t('app.build.kernel_error'); ui.build.className = 'pc-chip is-error';
      for (const w of waiters.splice(0)) w();
    });
  }
  // FX.239: a file can be opened before the solid kernel has loaded (SuperCad Studio hands the Parts view its project file at once). rebuild() does
  // nothing until then, so "built" first waits for the kernel, whose arrival rebuilds the part that is open by then.
  function built() { return ready.then(() => new Promise((res) => { if (!ST.inflight && !ST.again) res(); else waiters.push(res); })); }

  /** 0.8 DC.117: the display bodies add-ons placed (part.addonBodies) drawn as scene overlays; called after every rebuild, undo, open and workspace change. */
  const bodyOverlays = new Set();
  function syncAddonBodies() {
    const want = new Map();
    for (const [a, groups] of Object.entries(ST.part.addonBodies || {})) for (const [g, def] of Object.entries(groups)) want.set('addon-bodies:' + a + ':' + g, def);
    for (const key of [...bodyOverlays]) if (!want.has(key)) { ST.view.setOverlay(key, null); bodyOverlays.delete(key); }
    for (const [key, def] of want) {
      const old = ST.view.overlays.get(key);
      if (old && old.userData.def === def) continue;   // the same data: already drawn
      const obj = AB.groupObject(THREE, def);
      obj.userData.def = def;
      ST.view.setOverlay(key, obj); bodyOverlays.add(key);
    }
    ST.view.setExtraBounds(AB.boundsOf(ST.part));
  }
  function applyRegen(r, ms) {
    ST.regen = r;
    ST.problemsSync?.();
    ST.shellKit?.changed();
    ST.view.setMesh(ST.regen.mesh);
    ST.view.setHidden(hiddenGeometry(ST.part, ST.regen));
    syncAddonBodies();
    syncPlanes();   // the first solid makes the base planes step back (0.6 PU.4), also when the exact kernel answers later
    syncHandles();  // the handle follows the rebuilt feature (0.6 PU.2)
    SUI.showSheets(ST.regen);
    ST.measure?.refresh(); ST.section?.refresh(); ST.draft?.refresh();
    if (ST.pick && ST.pick.kind === 'face') { ST.pick = null; ST.view.setHighlight(null); }
    if (ST.pick && ST.pick.kind === 'edge' && named() && ST.pick.ref) { const i = findEdge(ST.regen.edges, ST.pick.ref); ST.pick = i >= 0 ? edgePick(i) : null; }
    ST.multi = ST.multi.map((m) => (m.kind === 'edge' && named() ? (findEdge(ST.regen.edges, m.ref) >= 0 ? edgePick(findEdge(ST.regen.edges, m.ref)) : null) : null)).filter(Boolean);
    showMarks();
    const errs = [...ST.regen.results.values()].filter((x) => x.status === 'error').length;
    ui.build.textContent = errs ? t('app.build.failing', { n: errs }) : ST.mode === 'sketch' ? '' : t('app.build.rebuilt', { ms: Math.round(ms) });
    ui.build.className = 'pc-chip ' + (errs ? 'is-error' : 'is-ok');
    if (ST.editing && ST.mode === 'sketch') ST.lastSolve = solveSketch(editingFeature().sketch);
    show3DSketches();
    renderTree();
    renderFacts();
    if (ST.mode === 'sketch') { showSketchState(); editor.draw(); }
    else keepFocus(() => renderProps());
    updateTools();
    if (ST.ws !== WS.DESIGN) wsCall('rebuilt', host);
    ST.addons?.changed('rebuild');   // add-ons' part.onChange (an undo and an open rebuild too)
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
    hist.push(ST.part, label);
    const r = fn();
    ST.dirty = true;
    rebuild();
    renderAll();
    return r;
  }

  /** A change that only touches how bodies are named or shown (part.bodyInfo): one undo step, no rebuild. */
  function commitView(label, fn) {
    hist.push(ST.part, label);
    const r = fn();
    ST.dirty = true;
    const h = hiddenGeometry(ST.part, ST.regen);
    ST.view.setHidden(h);
    // a pick on a body that is now hidden goes
    if (h && ST.pick && ST.pick.kind === 'face' && h.faces.has(ST.pick.face)) { ST.pick = null; ST.view.setHighlight(null); }
    if (h && ST.pick && ST.pick.kind === 'edge' && h.edges.has(ST.pick.edge)) { ST.pick = null; ST.view.setHighlight(null); }
    if (h) ST.multi = ST.multi.filter((m) => !(m.kind === 'face' ? h.faces.has(m.face) : h.edges.has(m.edge)));
    showMarks();
    renderAll();
    return r;
  }

  function sketchCommit(label, fn, { squash = false } = {}) {
    const f = editingFeature();
    if (!f) return;
    const before = JSON.stringify(f.sketch);
    if (!squash) hist.push(ST.part, label);
    try { fn(f.sketch); } catch (err) { f.sketch = JSON.parse(before); if (!squash) hist.undoStack.pop(); throw err; }
    ST.dirty = true;
    ST.lastSolve = solveSketch(f.sketch);
    if (ST.lastSolve.conflicts.length) status(t('app.sketch.over_conflict', { list: [...new Set([...ST.lastSolve.conflicts, ...ST.lastSolve.redundant])].map((id) => describeC(f.sketch, id)).join(', ') }), true);
    else if (ST.lastSolve.redundant.length) status(t('app.sketch.over_redundant', { n: ST.lastSolve.redundant.length, list: ST.lastSolve.redundant.map((id) => describeC(f.sketch, id)).join(', ') }), true);
    rebuild();
    renderProps();
    updateTools();
  }

  const describeC = (sk, id) => { const c = sk.constraints.find((k) => k.id === id); return c ? S.describe(c, f3) : id; };

  const { isFlatFace, edgeHover, edgePick, facePickAt, showMarks, refFeature, startPick, endPick, pickRef } = mountPick({
    ST, status, exact, named, exactWhy, rebuild, commit, renderAll, focusStage, notInDesign,
    get exitSketch() { return exitSketch; },
    get PICKERS() { return PICKERS; },
    get PICK_ON_MESH() { return PICK_ON_MESH; },
    get FACE_PICKERS() { return FACE_PICKERS; },
  });

  function onHover(h) {
    if (ST.addons?.hover(h)) return;   // an add-on is picking faces: the face under the pointer is lit
    if (ST.measure?.active) return;   // measure-ui.js shows its own snap preview
    if (ST.ws !== WS.DESIGN) { if (ST.ws.onHover) wsCall('onHover', h, host); else ST.view.setHover(null); return; }
    if (ST.mode === 'sketch' || ST.mode === 'drawing') return;
    if (ST.mode === 'pick') {
      const want = FACE_PICKERS.has(P.featureById(ST.part, ST.editing)?.type) ? 'face' : 'edge';
      ST.view.setHover(h && h.kind === want ? (want === 'edge' ? edgeHover(h) : { tris: h.tris }) : null);
      return;
    }
    if (ST.mode === 'assembly') { ST.view.setHover(h && h.kind === 'face' && h.inst ? { tris: h.tris, data: h.data, matrix: h.matrix } : null); return; }
    if (h && h.kind === 'ref') { ST.view.setHover(null); return; }
    if (h && h.kind === 'plane') { ST.view.setHover(null); ST.view.setPlaneState(ST.sel?.kind === 'plane' ? ST.sel.name : null, h.name); return; }
    ST.view.setPlaneState(ST.sel?.kind === 'plane' ? ST.sel.name : null, null);
    if (!h) { ST.view.setHover(null); return; }
    if (h.kind === 'edge') { ST.view.setHover(edgeHover(h)); return; }
    ST.view.setHover({ tris: h.tris });
  }

  function onPick(h, e) {
    if (ST.addons?.pick(h, e)) return;   // an add-on is picking faces (add-on API 1.3 api.view)
    if (ST.section?.picking && ST.section.pick(h)) return;
    if (ST.draft?.picking && ST.draft.pick(h)) return;
    if (ST.stackup?.picking) { ST.stackup.pick(h, e); return; }
    if (ST.motion?.picking) { ST.motion.pick(h, e); return; }
    if (ST.contactStudy?.picking) { ST.contactStudy.pick(h, e); return; }
    if (ST.measure?.active) { ST.measure.pick(h, e); return; }
    if (ST.mode === 'assembly' && ST.asmTools?.pick(h)) return;
    if (ST.ws !== WS.DESIGN) { wsCall('onPick', h, host, e); return; }
    if (ST.mode === 'sketch' || ST.mode === 'drawing') return;
    if (ST.mode === 'assembly') { asmPick(h); return; }
    if (ST.mode === 'pick') { pickRef(h); return; }
    if (DUI.onPick(h, e)) return;   // a reference slot of a Design feature panel was waiting for this click
    if (SUI.onPick(h, e)) return;   // a Gordon surface's "Pick edges" slot (surface-ui.js)
    if (SH.onPick(h, e)) return;   // a flange's edge slot (sheet-ui.js)
    if (BUI.onPick(h, e)) return;   // a body tool's slot: bodies, points, axes, planes, path edges (bodies-ui.js)
    if (h && h.kind === 'ref') {
      const rf = P.featureById(ST.part, h.id);
      if (ST.pendingSketch && rf?.type === 'plane') { startSketchOn({ kind: 'ref', feature: rf.id }); return; }
      if (rf) { ST.pick = null; ST.view.setHighlight(null); selectFeature(rf.id); }
      return;
    }
    if (e?.shiftKey && named() && h && (h.kind === 'edge' ? h.edge !== undefined : h.kind === 'face' && h.face !== undefined)) {
      // Shift+click collects edges (for Fillet / Chamfer) or faces (for Shell)
      const add = h.kind === 'edge' ? edgePick(h.edge) : facePickAt(h.face);
      if (ST.multi.length && ST.multi[0].kind !== add.kind) ST.multi = [];
      if (ST.pick && ST.pick.kind === add.kind && !ST.multi.length && (ST.pick.kind === 'edge' ? ST.pick.edge !== undefined : ST.pick.face !== undefined)) ST.multi.push(ST.pick.kind === 'edge' ? edgePick(ST.pick.edge) : facePickAt(ST.pick.face));
      const at = ST.multi.findIndex((m) => (m.kind === 'edge' ? m.edge === add.edge : m.face === add.face));
      if (at >= 0) ST.multi.splice(at, 1); else ST.multi.push(add);
      ST.pick = null; ST.view.setHighlight(null);
      showMarks(); renderProps();
      status(t(add.kind === 'edge' ? 'app.pick.multi_edges' : 'app.pick.multi_faces', { n: ST.multi.length }));
      return;
    }
    if (ST.multi.length) { ST.multi = []; showMarks(); }
    if (!h) {
      ST.pick = null; ST.view.setHighlight(null);
      if (!refFeature()) { ST.sel = null; ST.view.setPlaneState(null, null); renderProps(); renderTree(); }
      if (ST.pendingSketch) status(t('app.sketch.pick_plane'), true);
      return;
    }
    if (h.kind === 'plane') {
      ST.pick = null; ST.view.setHighlight(null);
      ST.sel = { kind: 'plane', name: h.name };
      ST.view.setPlaneState(h.name, null);
      renderTree(); renderProps();
      if (ST.pendingSketch) startSketchOn({ kind: 'base', name: h.name });
      return;
    }
    if (h.kind === 'edge') {
      ST.pick = named() && h.edge !== undefined ? edgePick(h.edge) : { kind: 'edge', a: h.a, b: h.b };
      ST.view.setHighlight(edgeHover(h));
      renderProps();
      return;
    }
    const flat = isFlatFace(h);
    let ref;
    if (named() && h.face !== undefined) {
      const f = ST.regen.faces[h.face];
      ref = flat ? (f?.name ? refForName(f.name) : { kind: 'fixed', o: f.o.map((v) => +v.toFixed(9)), n: f.n.map((v) => +v.toFixed(12)) }) : null;
      if (flat && f) h = { ...h, normal: f.n };
    } else ref = flat && h.feature ? faceRefAt(ST.regen, h.feature, h.normal, h.point) : flat ? { kind: 'fixed', o: h.point, n: h.normal } : null;
    ST.pick = { kind: 'face', ...h, flat, ref, info: named() && h.face !== undefined ? ST.regen.faces[h.face] : null };
    ST.view.setHighlight({ tris: h.tris });
    if (!refFeature()) { ST.sel = null; ST.view.setPlaneState(null, null); renderTree(); }
    renderProps();
    if (ST.pendingSketch) {
      if (flat) startSketchOn(ref);
      else status(t('app.sketch.face_curved'), true);
    }
  }



  const { startSketch, startSketchOn, editSketch, exitSketch, showSketchState, planeLabel, show3DSketches } = mountSketch({
    ST, ui, editor, tokens, status, currentFrame, rebuild, commit, endPick, renderAll, updateTools, focusStage, notInDesign,
    get syncPlanes() { return syncPlanes; },
    get DUI() { return DUI; },
  });








  const { newFeature, setFeature, deleteSelected, moveSelected, rollTo } = mountFeatures({
    ST, ui, editor, status, exact, named, exactWhy, built, commit, showMarks, startPick, exitSketch, renderAll, ask,
    get GU() { return GU; },
    get WU() { return WU; },
    get RB() { return RB; },
    get SH() { return SH; },
    get BUI() { return BUI; },
    get SUI() { return SUI; },
    get DUI() { return DUI; },
    get PICKERS() { return PICKERS; },
    get PICK_ON_MESH() { return PICK_ON_MESH; },
    get FACE_PICKERS() { return FACE_PICKERS; },
    get SOLID() { return SOLID; },
    get MAIN_NUMBER() { return MAIN_NUMBER; },
  });






  const { renderTree, sketchStateWord, selectFeature, announcePick, renderFacts } = mountTree({
    ST, ui, status, built, startPick, endPick, startSketchOn, editSketch, exitSketch, moveSelected, rollTo, renderAll, f3,
    get renderAsmTree() { return renderAsmTree; },
    get leaveDrawing() { return leaveDrawing; },
    get modelEdit() { return modelEdit; },
    get renderAsmFacts() { return renderAsmFacts; },
    get MAIN_NUMBER() { return MAIN_NUMBER; },
    get PICKERS() { return PICKERS; },
    get ICONS() { return ICONS; },
  });






  // ---------------------------------------------------------------- properties
  const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
  ST.uid = 0;
  // { key } = a params-part.js target ("f3.depth"): the field then takes =expressions and solves backward (params-panel.js)
  const numInput = (value, onchange, { min = null, max = null, step = 'any', key = null } = {}) => {
    if (key && paramsUI) return paramsUI.numInput(value, onchange, { min, max, step }, key);
    const i = el('input', { type: 'number', className: 'pc-input', id: 'pc-f' + (++ST.uid), value: V.fmt(value, 6), step, inputMode: 'decimal' });
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
    root, part: () => ST.part, commit, status, ask,
    download, openText, mode: () => ST.mode, fileBase,
    // a parameter's "Used by" entry: select that feature and show its properties (0.5 WL.30)
    selectFeature: (id) => { if (!P.featureById(ST.part, id)) return; selectFeature(id); paramsUI.showTab('props'); },
    variantPack: openVariantPackDialog,   // the Configurations block's Variant pack button (variants-ui.js; 0.7 W3.19)
  });
  /** A one-line text box; onchange gets the cleaned text (control characters out, trimmed, cut at max). */
  const textInput = (value, onchange, { max = 60, placeholder = '', attrs = {} } = {}) => {
    const i = el('input', { type: 'text', className: 'pc-input', id: 'pc-f' + (++ST.uid), value: value || '', maxLength: max, placeholder, ...attrs });
    i.addEventListener('change', () => onchange(i.value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max)));
    return i;
  };
  const selectInput = (options, value, onchange) => {
    const s = el('select', { className: 'pc-select', id: 'pc-f' + (++ST.uid) }, ...options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
    s.addEventListener('change', () => onchange(s.value));
    return s;
  };
  const check = (label, value, onchange) => {
    const i = el('input', { type: 'checkbox', checked: !!value });
    i.addEventListener('change', () => onchange(i.checked));
    return el('label', { className: 'pc-check span' }, i, label);
  };
  const { addonSections, partProps, faceProps, featureProps, faceWords, refList, sketchProps, entityName } = mountProps({
    hist, editor, tokens, status, exact, exactOff, named, exactWhy, editingFeature, built, commit, describeC, showMarks, startPick, endPick, startSketchOn, editSketch, exitSketch, planeLabel, newFeature, setFeature, deleteSelected, moveSelected, rollTo, sketchStateWord, field, numInput, selectInput, check, renderProps, numericEntry, constraintList, renderAll,
    get addons() { return ST.addons; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
    get part() { return ST.part; },
    get dirty() { return ST.dirty; }, set dirty(v) { ST.dirty = v; },
    get useExact() { return ST.useExact; },
    get BUI() { return BUI; },
    get pick() { return ST.pick; }, set pick(v) { ST.pick = v; },
    get btn() { return btn; },
    get view() { return ST.view; },
    get exportDxf() { return exportDxf; },
    get mode() { return ST.mode; },
    get regen() { return ST.regen; },
    get multi() { return ST.multi; }, set multi(v) { ST.multi = v; },
    get msg() { return msg; },
    get editing() { return ST.editing; },
    get SH() { return SH; },
    get GU() { return GU; },
    get WU() { return WU; },
    get RB() { return RB; },
    get TU() { return TU; },
    get SUI() { return SUI; },
    get DUI() { return DUI; },
    get lastSolve() { return ST.lastSolve; },
    get f3() { return f3; },
    get FACE_PICKERS() { return FACE_PICKERS; },
    get PICK_ON_MESH() { return PICK_ON_MESH; },
    get SOLID() { return SOLID; },
  });
  const btn = (label, onclick, cls = 'pc-btn', extra = {}) => el('button', { type: 'button', className: cls, onclick, ...extra }, label);
  const msg = (text, kind = '') => el('div', { className: 'pc-msg ' + kind }, el('p', {}, text));
  // the Design features' panels and reference picking (design-ui.js): it reads this page's state through getters
  const DUI = installDesignUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps: () => { renderProps(); show3DSketches(); }, focusStage,
    setFeature, refList: (f, key) => refList(f, key), faceWords: (n) => faceWords(n), startSketchOn,
    get part() { return ST.part; }, get regen() { return ST.regen; }, get pick() { return ST.pick; }, get sel() { return ST.sel; }, get multi() { return ST.multi; },
    get useExact() { return ST.useExact; }, get view() { return ST.view; },
  });
  // surface features' panels (surface-ui.js); editForm opens a form feature's cage in the Form workspace (ws-form.js)
  const SUI = installSurfaceUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps, setFeature,
    editForm: (id) => WS.getWorkspace('form')?.editFeature?.(id, host), faceWords: (n) => faceWords(n),
    get part() { return ST.part; }, get regen() { return ST.regen; }, get pick() { return ST.pick; }, get sel() { return ST.sel; }, get multi() { return ST.multi; },
    get useExact() { return ST.useExact; }, get view() { return ST.view; },
  });
  // the body tools' panels and slots (bodies-ui.js): Combine, Move/Copy body, Scale body, Path pattern, pattern bodies
  const BUI = installBodiesUI({
    el, field, numInput, selectInput, check, btn, msg, status, renderProps, focusStage,
    setFeature, faceWords: (n) => faceWords(n),
    commitView,
    get part() { return ST.part; }, get regen() { return ST.regen; }, get pick() { return ST.pick; }, get sel() { return ST.sel; }, get multi() { return ST.multi; },
    get useExact() { return ST.useExact; }, get view() { return ST.view; },
  });
  // sheet metal panels and the flange's edge slot (sheet-ui.js, 0.4 P15/P16)
  // the rib's panel (rib-ui.js, 0.4 P20)
  const RB = installRibUI({
    el, field, numInput, selectInput, check, btn, msg, status, setFeature, built,
    get part() { return ST.part; }, get regen() { return ST.regen; }, get sel() { return ST.sel; }, get useExact() { return ST.useExact; },
  });
  const WU = installWeldUI({
    el, field, numInput, selectInput, check, btn, status, setFeature, fmt: f3,
    download,
    get part() { return ST.part; }, get regen() { return ST.regen; }, get sel() { return ST.sel; },
  });
  const GU = installGenUI({
    el, field, numInput, selectInput, check, btn, textInput, status, setFeature, renderProps, built,
    computeWorker: (modules, opts) => host.computeWorker(modules, opts), download,
    get part() { return ST.part; }, get regen() { return ST.regen; },
  });
  // ---- Problems (0.8 CE.6; docs/0.8-PROBLEMS-SPEC.md): what a Generated feature's manufacturing checks found, in the shell's ⚠ panel.
  // Accepting a problem lasts for the session: the part file does not keep accepted problems yet.
  if (document.getElementById('cc-problems')) {
    const go = () => {
      const CP = window.ccProblems;
      if (!CP) return;
      const src = CP.source({ id: PROBLEMS_SRC, kind: 'check', label: t('problems.src.partcraft') });
      ST.problemsSync = () => src.set([...pcProblems(ST.part, ST.regen, { labelOf: (f) => f.name }), ...simEnvProblems(ST.part.studies), ...studyProblemsNow(), ...simProblemsNow(), ...breakProblemsNow(), ...magnetProblemsNow(), ...contactProblemsNow()]);
      CP.adapter({
        t, file: () => ST.part.name,
        select: (p) => { const a = p.about.find((x) => x.kind === 'feature' && P.featureById(ST.part, x.id)); if (a) selectFeature(a.id); },
        focus: () => {},
        saveAccepted: () => {},
      });
      ST.problemsSync();
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  const TU = installThreadUI({
    el, field, numInput, selectInput, check, setFeature,
    get regen() { return ST.regen; },
  });
  const SH = installSheetUI({
    flatPattern: () => exact.call('sheetFlat', { part: ST.part }), saveText: (name, text, type) => download(text, name, type), fileBase,
    nest: openNest,
    el, field, numInput, selectInput, check, btn, msg, status, renderProps, focusStage,
    setFeature, faceWords: (n) => faceWords(n),
    commitView,
    get part() { return ST.part; }, get regen() { return ST.regen; }, get pick() { return ST.pick; }, get sel() { return ST.sel; }, get multi() { return ST.multi; },
    get useExact() { return ST.useExact; }, get view() { return ST.view; },
  });

  function renderProps() {
    if (ST.ws !== WS.DESIGN) { renderWsPanel(); return; }
    if (ST.mode === 'assembly') { renderAsmProps(); return; }
    if (ST.mode === 'drawing') { renderDrawingProps(); return; }
    const out = [];
    let head = t('app.props.head');
    if (ST.mode === 'sketch') { head = editingFeature()?.name || t('app.props.sketch'); out.push(...sketchProps()); }
    else if (ST.mode === 'pick' && P.featureById(ST.part, ST.editing)) { const f = P.featureById(ST.part, ST.editing); head = t('app.props.picking', { name: f.name }); out.push(...featureProps(f)); }
    else if (ST.sel?.kind === 'feature' && P.featureById(ST.part, ST.sel.id)) { const f = P.featureById(ST.part, ST.sel.id); head = f.name; out.push(...featureProps(f)); }
    else if (ST.sel?.kind === 'plane') {
      head = V.PLANE_NAMES[ST.sel.name];
      out.push(el('p', { className: 'pc-note' }, t('app.props.base_plane')), el('div', { className: 'pc-actions' }, btn(t('app.props.sketch_on_it'), () => startSketchOn({ kind: 'base', name: ST.sel.name }), 'pc-btn is-primary')));
    } else if (ST.pick?.kind === 'face') { head = t('app.props.face'); out.push(...faceProps()); }
    else if (ST.multi.length) {
      head = t(ST.multi[0].kind === 'edge' ? 'app.props.n_edges' : 'app.props.n_faces', { n: ST.multi.length });
      out.push(el('p', { className: 'pc-note' }, ST.multi[0].kind === 'edge' ? t('app.props.multi_edges_note') : t('app.props.multi_faces_note')));
      out.push(el('div', { className: 'pc-actions' }, ...(ST.multi[0].kind === 'edge' ? [btn(t('app.btn.fillet'), () => newFeature('fillet', {}), 'pc-btn is-primary'), btn(t('app.btn.chamfer'), () => newFeature('chamfer', {}))] : [btn(t('app.btn.shell'), () => newFeature('shell', {}), 'pc-btn is-primary')]), btn(t('app.btn.clear'), () => { ST.multi = []; showMarks(); renderProps(); })));
    } else if (ST.pick?.kind === 'edge') {
      head = t('app.props.edge');
      const d = V.sub(ST.pick.b, ST.pick.a);
      const p = el('dl', { className: 'pc-dl' });
      if (ST.pick.info) {
        const e = ST.pick.info;
        fillDl(p, [[t('app.props.kind'), t('app.props.exact', { kind: { line: () => t('app.edge.straight'), circle: () => t('app.edge.circle'), curve: () => t('app.edge.curve') }[e.type]?.() })], [t('app.props.length'), f3(e.len) + ' mm'], [t('app.props.between'), e.faces.map(faceWords).join(t('app.edge.and_sep'))], [t('app.props.from'), e.type === 'line' ? e.a.map(f3).join(', ') : ''], [t('app.props.to'), e.type === 'line' ? e.b.map(f3).join(', ') : '']]);
        out.push(p, el('div', { className: 'pc-actions' }, btn(t('app.btn.fillet'), () => newFeature('fillet', {}), 'pc-btn is-primary'), btn(t('app.btn.chamfer'), () => newFeature('chamfer', {}))));
        out.push(el('p', { className: 'pc-note' }, e.type === 'line' ? t('app.edge.note_line') : t('app.edge.note')));
      } else {
        fillDl(p, [[t('app.props.length'), f3(V.len(d)) + ' mm'], [t('app.props.from'), ST.pick.a.map(f3).join(', ')], [t('app.props.to'), ST.pick.b.map(f3).join(', ')]]);
        out.push(p, el('p', { className: 'pc-note' }, t('app.edge.note_mesh')));
      }
    } else { head = t('app.props.part'); out.push(...partProps()); }
    out.push(...addonSections());
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }













  /** Add geometry by typing coordinates (sketch units, mm): works without a pointer. */
  ST.numKind = 'line';
  function numericEntry() {
    // [label, takes "x, y"]
    const kinds = { point: [[t('app.num.at'), true]], line: [[t('app.num.from'), true], [t('app.num.to'), true]], centerline: [[t('app.num.from'), true], [t('app.num.to'), true]], rect: [[t('app.num.corner'), true], [t('app.num.opposite'), true]], circle: [[t('app.num.centre'), true], [t('app.num.radius'), false]] };
    const kind = selectInput([['line', t('app.num.line')], ['centerline', t('app.num.centerline')], ['rect', t('app.num.rect')], ['circle', t('app.num.circle')], ['point', t('app.num.point')]], ST.numKind, (v) => { ST.numKind = v; renderProps(); });
    const inputs = kinds[ST.numKind].map(([label, xy], i) => { const inp = el('input', { type: 'text', className: 'pc-input', id: 'pc-num-' + i, inputMode: 'decimal', autocomplete: 'off', placeholder: xy ? '0, 0' : '10' }); return [label, inp, xy]; });
    const pair = (s) => { const m = /^\s*(-?[\d.]+(?:e-?\d+)?)\s*[, ]\s*(-?[\d.]+(?:e-?\d+)?)\s*$/i.exec(s); return m ? [Number(m[1]), Number(m[2])] : null; };
    const add = () => {
      const vals = inputs.map(([, inp, xy]) => (xy ? pair(inp.value) : Number(inp.value)));
      if (vals.some((v) => v === null || (typeof v === 'number' && !(v > 0)) || (Array.isArray(v) && !v.every(Number.isFinite)))) { status(t('app.num.bad_input')); return; }
      try {
        sketchCommit({ point: () => t('app.num.undo_point'), line: () => t('app.num.undo_line'), centerline: () => t('app.num.undo_centerline'), rect: () => t('app.num.undo_rect'), circle: () => t('app.num.undo_circle') }[ST.numKind](), (sk) => {
          if (ST.numKind === 'point') S.addPoint(sk, ...vals[0]);
          else if (ST.numKind === 'line' || ST.numKind === 'centerline') S.addLine(sk, vals[0], vals[1], { construction: ST.numKind === 'centerline' });
          else if (ST.numKind === 'rect') S.addRect(sk, vals[0], vals[1]);
          else S.addCircle(sk, vals[0], vals[1]);
        });
        status({ point: () => t('app.num.added_point'), line: () => t('app.num.added_line'), centerline: () => t('app.num.added_centerline'), rect: () => t('app.num.added_rect'), circle: () => t('app.num.added_circle') }[ST.numKind]());
      } catch (err) { status(err.message); }
    };
    const form = el('form', { className: 'pc-props', onsubmit: (e) => { e.preventDefault(); add(); } },
      ...field(t('app.num.add'), kind), ...inputs.flatMap(([label, inp]) => field(label, inp)),
      el('span'), el('button', { type: 'submit', className: 'pc-btn' }, t('app.num.add')));
    return el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.num.title')), form);
  }


  const openRelGroups = new Set();   // relation kinds whose group the person opened (0.6 PU.6), kept across redraws
  function constraintList(sk, list, title) {
    const bad = new Set([...(ST.lastSolve?.conflicts || []), ...(ST.lastSolve?.redundant || [])]);
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
  const { syncHandles, syncPlanes } = mountHandles({
    ST, settings,
  });
  function makeHandles() {
    ST.handles = new FeatureHandles(ST.view, ui.gl.parentElement, {
      t, fmt: f3,
      onDragStart: (h) => status(t(h.kind === 'extrude' ? 'app.handle.dragging_depth' : 'app.handle.dragging_angle'), true),
      onDrag: (h, v) => {
        const f = P.featureById(ST.part, h.id);
        if (!f) return;
        f[h.key] = v;   // live: the undo step is made when the drag ends
        if (!ST.dragRaf) ST.dragRaf = requestAnimationFrame(() => { ST.dragRaf = 0; rebuild(); });
      },
      onDragEnd: (h, v, v0) => {
        const f = P.featureById(ST.part, h.id);
        if (!f) return;
        f[h.key] = v0;
        if (v !== v0) commit(t(h.kind === 'extrude' ? 'app.handle.undo_depth' : 'app.handle.undo_angle', { name: f.name }), () => { f[h.key] = v; });
        else { rebuild(); renderAll(); }
        built().then(() => { const r = ST.regen.results.get(f.id); status(r?.status === 'error' ? t('app.feature.error', { name: f.name, error: r.message }) : t(h.kind === 'extrude' ? 'app.handle.done_depth' : 'app.handle.done_angle', { name: f.name, v: f3(f[h.key]) })); });
      },
      onCancel: (h, v0) => { const f = P.featureById(ST.part, h.id); if (f) f[h.key] = v0; rebuild(); renderAll(); status(t('app.handle.cancelled', { v: f3(v0) })); },
      // the box beside the handle hands what was typed to the feature's own box (limits, =expressions, one undo step)
      onType: (h, text) => { const src = ui.props.querySelector(`[data-param-key="${h.id}.${h.key}"]`); if (src && !src.disabled) { src.value = text.replace(/\s*(mm|°)$/, ''); src.dispatchEvent(new Event('change', { bubbles: true })); } },
    });
  }


  function renderAll() {
    modeNotes().tree.hidden = ST.mode === 'assembly';
    modeNotes().asm.hidden = ST.mode !== 'assembly';
    modeNotes().factsH.textContent = ST.mode === 'assembly' ? t('app.facts.h_assembly') : t('app.props.part');
    if (ST.mode === 'assembly') { renderAsmTree(); renderProps(); renderAsmFacts(); updateTools(); ui.hint.hidden = true; return; }   // renderProps: the assembly's panel in Design, an assemblies:true workspace's own otherwise (illustrate)
    paramsUI.render();   // first: it drops equations whose numbers were deleted
    syncPlanes(); syncHandles();
    ST.shellKit?.selChanged();
    renderTree(); renderProps(); renderFacts(); updateTools(); show3DSketches(); ui.hint.hidden = ST.ws !== WS.DESIGN || ST.mode === 'sketch' || ST.mode === 'drawing' || ST.part.features.length > 0;
    ST.bimLink?.sync();
  }

  const { SKETCH_TOOLS, applyEditState, editState, run, undoRedo } = mountToolbar({
    ST, ui, hist, asmHist, editor, settings, persistSettings, status, exactOff, editingFeature, rebuild, built, commit, endPick, startSketch, exitSketch, newFeature, btn, syncPlanes, renderAll, updateTools, download, fileBase, confirmDiscard, openNest, ask, focusStage,
    get wsCall() { return wsCall; },
    get host() { return host; },
    get checkPrint() { return checkPrint; },
    get openSheets() { return openSheets; },
    get printExport() { return printExport; },
    get setWorkspace() { return setWorkspace; },
    get openLaser() { return openLaser; },
    get newPart() { return newPart; },
    get openStandardPart() { return openStandardPart; },
    get openVault() { return openVault; },
    get fileHost() { return fileHost; },
    get openFromHost() { return openFromHost; },
    get savePart() { return savePart; },
    get saveOlder() { return saveOlder; },
    get exportMesh() { return exportMesh; },
    get exportIfc() { return exportIfc; },
    get exportUsd() { return exportUsd; },
    get exportStep() { return exportStep; },
    get exportForSw() { return exportForSw; },
    get enterDrawing() { return enterDrawing; },
    get leaveDrawing() { return leaveDrawing; },
    get drawingTool() { return drawingTool; },
    get exportDrawing() { return exportDrawing; },
    get exportDxf() { return exportDxf; },
    get editAct() { return editAct; },
    get enterAssembly() { return enterAssembly; },
    get backToAssembly() { return backToAssembly; },
    get asmInsertCopy() { return asmInsertCopy; },
    get asmStartJoint() { return asmStartJoint; },
    get asmCheck() { return asmCheck; },
    get asmEditPart() { return asmEditPart; },
    get closeAssembly() { return closeAssembly; },
    get noteChange() { return noteChange; },
    get rebuildAsm() { return rebuildAsm; },
    get ASM_EXPORTS() { return ASM_EXPORTS; },
  });
  function updateTools() {
    showTouchBar();
    const inSk = ST.mode === 'sketch', inAsm = ST.mode === 'assembly', inDr = ST.mode === 'drawing', inPick = ST.mode === 'pick';
    // contextual: sketch tools only while sketching, features only on the part, drawing tools on the sheet, assembly tools only in an assembly
    for (const g of ui.tools.querySelectorAll('[data-group]')) g.hidden = (inAsm && ['sketch', 'features', 'drawing'].includes(g.dataset.group)) || (inSk && ['features', 'drawing'].includes(g.dataset.group)) || (inDr && ['sketch', 'features', 'assembly'].includes(g.dataset.group)) || (inPick && ['sketch', 'drawing', 'assembly'].includes(g.dataset.group));
    // workspaces: Design's groups only in Design; each other workspace's groups only in it
    for (const g of ui.tools.querySelectorAll('[data-group]')) { const w = g.dataset.workspaceGroup; if (w) g.hidden = w !== ST.ws.id; else if (ST.ws !== WS.DESIGN && DESIGN_GROUPS.includes(g.dataset.group)) g.hidden = true; }
    for (const b of ui.tools.querySelectorAll('[data-group="drawing"] [data-cmd]')) b.hidden = b.dataset.cmd === 'drawing' ? inDr : !inDr;
    for (const b of ui.tools.querySelectorAll('[data-group="features"] [data-cmd]')) b.hidden = b.dataset.cmd === 'pick-done' ? !inPick : inPick;
    const fm = ui.tools.querySelector('[data-features-menu]'); if (fm) fm.hidden = inPick;
    for (const b of ui.tools.querySelectorAll('[data-group="drawing"] [data-cmd^="dr-"]')) b.setAttribute('aria-pressed', String(!!ST.drawingState && ST.drawingState.tool === b.dataset.cmd.slice(3)));
    for (const b of ui.tools.querySelectorAll('[data-group="sketch"] [data-cmd]')) b.hidden = b.dataset.cmd === 'sketch' ? inSk : !inSk;
    for (const d of ui.tools.querySelectorAll('[data-sketch-menu]')) d.hidden = !inSk;
    for (const b of ui.tools.querySelectorAll('[data-cmd^="asm-"]')) {
      const c = b.dataset.cmd;
      b.hidden = inAsm ? ['asm-new', 'asm-back'].includes(c) : !(c === 'asm-new' || (c === 'asm-back' && ST.editPartOf));
      if (c === 'asm-new') b.hidden = inAsm || !!ST.editPartOf;
    }
    for (const b of ui.tools.querySelectorAll('[data-cmd="export-bom"]')) b.hidden = !inAsm;
    // File › Standard part opens a new part: not offered inside a sketch, which keeps the sketch toolbar to one row at 1440 px
    for (const b of ui.tools.querySelectorAll('[data-cmd="std-part"]')) b.hidden = inSk;
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-measure"]')) b.setAttribute('aria-checked', String(!!ST.measure?.active));
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-section"]')) b.setAttribute('aria-checked', String(!!ST.section?.active));
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-light"]')) { b.setAttribute('aria-checked', String(settings.lightDisplay)); b.hidden = ST.mode !== 'assembly'; }
    for (const b of ui.tools.querySelectorAll('[data-cmd="view-planes"]')) b.setAttribute('aria-checked', String(settings.planes));
    for (const [c, m] of [['view-draft', 'draft'], ['view-zebra', 'zebra'], ['view-curvature', 'curvature']]) for (const b of ui.tools.querySelectorAll(`[data-cmd="${c}"]`)) b.setAttribute('aria-checked', String(!!ST.draft?.active && ST.draft.mode === m));
    // a workspace with its own history (Illustrate's manual) says when Undo / Redo can act (0.7, asked by illustrate)
    const wsUndo = ST.ws !== WS.DESIGN && typeof ST.ws.undoState === 'function' ? wsCall('undoState', host) : null;
    for (const b of ui.tools.querySelectorAll('[data-cmd]')) {
      const c = b.dataset.cmd;
      if (b.closest('[data-workspace-group]')) { wsToolState(b); continue; }
      if (wsUndo && (c === 'undo' || c === 'redo')) { b.disabled = !wsUndo[c]; continue; }
      let dis = !ST.M && !['new', 'open'].includes(c);
      if (inAsm) {
        if (c === 'asm-insert-copy') dis = dis || !ST.asm?.instances.length;
        if (c === 'asm-edit') dis = dis || ST.asmSel?.kind !== 'inst';
        if (c === 'asm-joint') { dis = dis || (ST.asm?.instances.length || 0) < 2; b.setAttribute('aria-pressed', String(!!ST.jointPick)); }
        if (c === 'asm-stackup') b.setAttribute('aria-pressed', String(!!ST.stackup?.active));
        if (c === 'asm-contact') { dis = dis || (ST.asm?.instances.length || 0) < 2; b.setAttribute('aria-pressed', String(!!ST.contactStudy?.active)); }
        if (c === 'asm-motion') { dis = dis || !ST.asm?.joints.some((j) => (A.JOINT_DOF[j.type] || []).length); b.setAttribute('aria-pressed', String(!!ST.motion?.active)); }
        if ((/^export-/.test(c) && !ASM_EXPORTS.includes(c)) || c === 'view-normal') dis = true;
        if (['export-step', 'export-step214', 'export-drawing'].includes(c)) { dis = dis || !ST.useExact; if (exactOff()) b.title = (b.title.replace(/ — .*$/, '') || b.textContent.trim()) + ' — ' + t('kernel.not_built.short'); }
        if (c === 'undo') dis = !asmHist.undoStack.length;
        if (c === 'redo') dis = !asmHist.redoStack.length;
        b.disabled = dis;
        continue;
      }
      if (c === 'asm-new') dis = dis || inSk || !(ST.regen?.mesh || ST.asm);
      if (SKETCH_TOOLS[c] || ARC_CMDS[c] || c === 'construction' || c === 'exit-sketch') dis = dis || !inSk;
      if (c === 'sketch') dis = dis || inSk;
      if (['extrude', 'cut-extrude', 'revolve', 'revolve-cut', 'hole', 'lpattern', 'cpattern', 'mirror', 'view-normal'].includes(c) || /^view-(iso|front|back|top|bottom|right|left)$/.test(c)) dis = dis || inSk || inDr;
      if (['plane', 'axis', 'point'].includes(c)) dis = dis || inSk || inDr;
      // with no exact kernel at all (0.4) these stay clickable and answer "Not built yet" (run), so touch users get the words too
      if (MESH_BUILT.has(c) && exactOff()) { dis = dis || inSk || inDr; b.title = b.title.replace(/ — .*$/, '') || b.textContent.trim(); delete b.dataset.notBuilt; }   // the mesh kernel builds these (K.4)
      else if (['fillet', 'chamfer', 'shell', 'sweep', 'loft', 'draft', ...SURFACE_MENU, ...BODY_MENU, ...SHEET_MENU, ...RIB_MENU].includes(c) && exactOff()) { dis = dis || inSk || inDr; b.title = (b.title.replace(/ — .*$/, '') || b.textContent.trim()) + ' — ' + t('kernel.not_built.short'); b.dataset.notBuilt = ''; }
      else if (['fillet', 'chamfer', 'shell', 'sweep', 'loft', 'draft', ...SURFACE_MENU, ...BODY_MENU, ...SHEET_MENU, ...RIB_MENU].includes(c)) { dis = dis || inSk || inDr || !ST.useExact; const base = b.dataset.exactBase ?? (b.dataset.exactBase = b.title.replace(/ — needs.*$/, '')); b.title = ST.useExact ? base : t(exact.state === 'loading' ? 'app.tools.needs_exact_loading' : 'app.tools.needs_exact_off', { title: base }); }
      if (c === 'drawing') dis = dis || inSk || !ST.regen?.mesh;
      if (/^export-step(214)?$/.test(c)) { dis = dis || inSk || !ST.regen?.mesh; b.title = b.title.replace(/ — .*$/, '') || b.textContent.trim(); }   // 0.9.1: exact STEP is written from the mesh kernel too (step-exact.js)
      if (c === 'asm-new') dis = dis || inDr || inPick;
      if (c === 'undo') dis = !hist.undoStack.length;
      if (c === 'redo') dis = !hist.redoStack.length;
      b.disabled = dis;
      if (SKETCH_TOOLS[c]) b.setAttribute('aria-pressed', String(inSk && editor.tool === SKETCH_TOOLS[c]));
      if (ARC_CMDS[c]) b.setAttribute('aria-pressed', String(inSk && editor.tool === 'arc' && editor.arcM === ARC_CMDS[c]));
      if (c === 'sketch') b.setAttribute('aria-pressed', String(ST.pendingSketch));
    }
    applyEditState();
    syncWsSwitcher();
  }





  // ---------------------------------------------------------------- edit: copy, cut, paste, duplicate, select
  function readStoredClip() {
    try { const raw = localStorage.getItem(C.STORAGE_KEY); return raw ? C.readClip(raw) : null; } catch { return null; }
  }
  const { editAct, modelEdit } = mountEdit({
    ST, ui, editor, status, editingFeature, built, commit, sketchCommit, showMarks, deleteSelected, announcePick, renderProps, renderAll, updateTools, editState, readStoredClip, focusStage,
    get buildPart() { return buildPart; },
    get placeBeside() { return placeBeside; },
    get wsCall() { return wsCall; },
    get host() { return host; },
    get deleteNote() { return deleteNote; },
    get composeShow() { return composeShow; },
    get asmDelete() { return asmDelete; },
    get highlightAsm() { return highlightAsm; },
    get instById() { return instById; },
    get commitAsm() { return commitAsm; },
  });






  const { enterAssembly, buildPart, rebuildAsm, asmBuilt, showInstances, highlightAsm, commitAsm, instById, jointById, asmPick, asmStartJoint, placeBeside, asmInsertCopy, asmDelete, asmCheck, asmEditPart, backToAssembly, closeAssembly, saveAssembly, openAssemblyText, renderAsmTree, renderAsmFacts, renderAsmProps } = mountAssembly({
    ST, ui, hist, asmHist, status, exact, rebuild, keepFocus, endPick, exitSketch, field, numInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, ask, notInDesign, f3,
    get wsCall() { return wsCall; },
    get host() { return host; },
  });

  /** Variant pack (variants.js): every chosen configuration built with the kernel in use, as one zip. */
  async function openVariantPackDialog() {
    if (ST.mode === 'sketch') exitSketch();
    if (!ST.M && !ST.useExact) { status(t('app.export.no_solid')); return; }
    await built();
    const { openVariantPack } = await import('./variants-ui.js');
    await openVariantPack({
      ask, status, download, part: () => ST.part, fileBase,
      buildPart,
      stepFor: ST.useExact ? (p) => exact.call('step', { part: p, schema: 'AP242' }).then((r) => r.text)
        : (p, r) => import('./step-exact.js').then((SE) => SE.stepExact(r, p.name || 'part', { segments: p.resolution || 64 }).text),   // 0.9.1: exact STEP from the mesh kernel
    });
  }























  const { drawingRefresh, leaveDrawing, exportDxf, renderDrawingProps, checkPrint, exportMesh, exportIfc, exportUsd, exportStep, exportForSw, enterDrawing, drawingTool, exportDrawing, deleteNote, composeShow, importStep, importMesh, importKicadBoard, commitDrawing, exportSet, drawingClick } = mountDrawingSheet({
    ST, ui, hist, editor, settings, looksLikePad, status, exact, exactOff, named, exactWhy, editingFeature, built, keepFocus, commit, endPick, exitSketch, field, numInput, textInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, fileBase, openText, confirmDiscard, ask, focusStage, notInDesign, f3,
  });















  // ---------------------------------------------------------------- files
  function download(bytes, name, type) {
    const url = URL.createObjectURL(new Blob([bytes], { type }));
    const a = el('a', { href: url, download: name });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  }
  function fileBase() { return (ST.part.name || 'part').replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().slice(0, 80) || 'part'; }

  const { fileHost, openFromHost, openVault, savePart, saveOlder, newPart, openStandardPart, openSwExport, noteChange, openSheets, printExport, openLaser } = mountFiles({
    ST, $, ui, hist, asmHist, status, exact, exactOff, ready, rebuild, built, endPick, exitSketch, btn, syncPlanes, renderAll, closeAssembly, saveAssembly, leaveDrawing, importStep, importMesh, importKicadBoard, download, fileBase, openText, confirmDiscard, ask,
    get host() { return host; },
  });














  async function openText(text, name) {
    ST.vaultRef = null;   // the vault sets its own mark after it opens a file (vault-app.js)
    if (ST.mode === 'pick') endPick();
    if (ST.mode === 'drawing') leaveDrawing();
    if (/"format"\s*:\s*"partcraft-assembly"/.test(text.slice(0, 400))) { await openAssemblyText(text, name); return; }
    if (/"format"\s*:\s*"cadcraft-sw-export"/.test(text.slice(0, 400))) { await openSwExport(text, name); return; }
    let p;
    try { p = P.readPart(text); } catch (err) { status(err.message); await ask({ title: t('app.file.cannot_open', { name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    if (ST.mode === 'assembly' && !(await closeAssembly())) return;   // a part file leaves the open assembly (asking when it has changes)
    if (ST.mode === 'sketch') exitSketch();
    P.takeIdBlock(p);   // 0.11 DC.27: this session's new feature ids come from a block of its own
    ST.part = p;
    hist.clear(); ST.dirty = false; ST.sel = null; ST.pick = null; ST.multi = []; ST.pendingSketch = false;
    ST.view.setHighlight(null);
    rebuild(); renderAll();
    await built();
    syncPlanes(); ST.view.view('iso');
    ST.shellKit?.opened(); surfacesChanged(host); nodesChanged(host);
    const errs = ST.regen ? [...ST.regen.results.values()].filter((r) => r.status === 'error').length : 0;   // no kernel at all: the file is open, nothing is built
    status(errs ? t('app.file.opened_failing', { name, n: ST.part.features.length, errs }) : t('app.file.opened', { name, n: ST.part.features.length }));
  }









  async function confirmDiscard() {
    if (!ST.dirty) return true;
    const ch = await ask({ title: t('app.file.unsaved_title'), text: t('app.file.unsaved_text', { name: ST.part.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.file.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
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
      if (!ST.useExact) { why.push(t('nest.from.needs_exact', { name })); return; }
      try { const p = NU.flatToPart(await exact.call('sheetFlat', { part: pt }), name, qty); if (p) parts.push(p); else why.push(t('nest.from.no_outline', { name })); } catch (e) { why.push(name + ': ' + e.message); }
    };
    if (flat) { const p = NU.flatToPart(flat, ST.part?.name || fileBase(), 1); if (p) parts.push(p); }
    else if (ST.mode === 'assembly' && ST.asm) {
      status(t('nest.from.unfolding'), true);
      for (const [pid, entry] of Object.entries(ST.asm.parts)) {
        const qty = ST.asm.instances.filter((i) => i.part === pid).length;
        if (qty && isSheet(entry.part)) await unfold(entry.part, entry.name || entry.part?.name || pid, qty);
      }
      status('');
    } else if (isSheet(ST.part)) await unfold(ST.part, ST.part.name || fileBase(), 1);
    if (why.length) status(why.join(' '), true);
    // the offcut stock lives in the open assembly's or part's file (0.7 SU.755); changing it is a change to the file
    const holder = () => (ST.mode === 'assembly' && ST.asm ? ST.asm : ST.part);
    await NU.openNest({ ask, el, btn, status, download, fileBase,
      getStock: () => holder()?.stock || null,
      setStock: (stock) => { const h = holder(); if (!h) return; h.stock = stock; if (h === ST.asm) ST.asmDirty = true; else ST.dirty = true; } }, parts);
  }




  /** A small in-page dialog; resolves with the chosen button's key ('cancel' on Esc). */
  function ask({ title, text, body, buttons, wide }) {
    return new Promise((done) => {
      const dlg = el('dialog', { className: 'pc-dialog' + (wide ? ' pc-dialog-wide' : ''), 'aria-labelledby': 'pc-ask-h' },
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
    const t = ST.mode === 'sketch' ? ui.sk : ui.gl;
    if (!t.hasAttribute('tabindex')) t.tabIndex = 0;
    if (document.activeElement === t) t.blur();
    t.focus({ preventScroll: true });
  }

  const { host, wsCall, syncWsSwitcher, wsToolState, renderWsPanel, setWorkspace } = mountWorkspaceUi({
    ST, $, ui, hist, settings, tokens, status, exact, rebuild, built, bodyOverlays, syncAddonBodies, keepFocus, commit, endPick, exitSketch, field, numInput, paramsUI, selectInput, check, btn, GU, renderProps, renderAll, updateTools, buildPart, showInstances, commitAsm, instById, jointById, leaveDrawing, download, fileBase, fileHost, ask, focusStage, root,
  });
  function notInDesign() {
    if (ST.ws === WS.DESIGN) return false;
    status(t('app.ws.design_only', { ws: ST.ws.label }));
    return true;
  }

  const { showTouchBar } = mountInput({
    ST, $, ui, touch, editor, status, showMarks, endPick, startSketch, exitSketch, show3DSketches, deleteSelected, paramsUI, DUI, BUI, SH, renderProps, syncPlanes, renderAll, updateTools, run, undoRedo, editAct, highlightAsm, asmStartJoint, asmDelete, drawingTool, composeShow, leaveDrawing, deleteNote, commitDrawing, savePart, host, wsCall,
    get MAIN_NUMBER() { return MAIN_NUMBER; },
  });



  // ---- AI assistants and scripts (0.7 AS.4, session assistants; agents.js on host.js's control channel): tools only, off until Settings › Assistants ----
  installAgents({ part: () => ST.part, regen: () => ST.regen, mode: () => ST.mode, commit, built: async () => { await ready; await built(); },
    savePart, download, computeWorker: (modules, opts) => host.computeWorker(modules, opts),
    fileBase, undo: () => undoRedo(true), lastUndo: () => (hist.undoStack.length ? hist.undoStack[hist.undoStack.length - 1].label : null),
    foldUndo: () => { hist.undoStack.pop(); }, say: (s) => status(s) });   // 0.9 SU.810b: a live link's pushes share one undo step; its update in the status bar
  // ---- the shell's modules (0.8 round 3, docs/apps/shell-modules.md § Mounting): calc sheets drive parameters, reasons on features, the part's weight
  ST.shellKit = mountPartShell({ part: () => ST.part, regen: () => ST.regen, control: fileHost.control, commit, undo: () => undoRedo(true),
    undoDepth: () => hist.undoStack.length, sel: () => ST.sel, selectFeature, labelOf: (f) => f.name || P.FEATURE_LABELS[f.type] || f.type,
    name: () => ST.part.name || fileBase(), path: () => ST.saveTarget?.path || '', markDirty: () => { ST.dirty = true; }, statusBar: document.querySelector('.pc-status') });

  mountPartAccess({ part: () => ST.part, regen: () => ST.regen, stage: ui.tree, status: ui.status, facts: () => [...(ui.facts?.querySelectorAll('dt') || [])].map((dt) => dt.textContent.trim() + ' ' + (dt.nextElementSibling?.textContent || '').trim()).filter((x) => /\S\s+\S/.test(x)).join('. ') + '.', sel: () => ST.sel,
    selectFeature, partName: () => ST.part.name || fileBase(), labelOf: (f) => f.name || P.FEATURE_LABELS[f.type] || f.type });   // EG.52
  window.partcraft = {
    get exportSet() { return exportSet; },   // Finalize and export in SuperCad Studio (SC.7)
    ready, built, asmBuilt, exact, get useExact() { return ST.useExact; }, get multi() { return ST.multi; }, get drawing() { return ST.drawingState; }, startPick, endPick, enterDrawing, leaveDrawing, drawingClick, G,
    exactReady: () => (exactOff() ? built() : exact.start().then(() => built())),   // no exact kernel (0.4): the mesh kernel's build
    viewCube, axisIcon, cubeView: cubeOpts.getView, get settings() { return settings; },
    get part() { return ST.part; }, get regen() { return ST.regen; }, get mode() { return ST.mode; }, get editing() { return ST.editing; },
    get lastSolve() { return ST.lastSolve; }, get sel() { return ST.sel; }, get pick() { return ST.pick; },
    get asm() { return ST.asm; }, get contactStudy() { return ST.contactStudy; }, get asmBuilds() { return ST.asmBuilds; }, get asmPlace() { return ST.asmPlace; }, get clashes() { return ST.clashes; }, get asmSel() { return ST.asmSel; }, A,
    get workspace() { return ST.ws.id; }, setWorkspace, host, WS,
    surfaces: { receive: (doc, label) => { if (ST.ws.id !== 'surfaces' && !setWorkspace('surfaces')) return { ok: false, error: { key: 'nurbs.ui.err.failed', vars: { error: 'workspace' } } }; return surfacesReceive(host, doc, label); }, snapshot: () => surfacesSnapshot(host) },   // 0.9 DC.54: SuperCad Studio's Surfaces panel sends to / brings back from here (surfaces-pc.js)
    control: fileHost.control, get shellKit() { return ST.shellKit; },   // the assistants' channel and the shell's modules (tests, 0.8 round 3)
    // 0.7 WS.14 (session ws-partcraft, workspace-partcraft.js): unsaved changes, the running tool, the part panel's list of bodies
    get dirty() { return ST.dirty; },
    get tool() { return ST.mode === 'sketch' ? 'sketch' : ST.mode === 'pick' ? 'pick' : ST.mode === 'drawing' && ST.drawingState?.tool ? 'drawing' : ST.pendingSketch ? 'sketch-plane' : ST.measure?.active ? 'measure' : ST.section?.active ? 'section' : ST.draft?.active ? 'draft' : 'select'; },
    bodiesBlock: () => BUI.bodiesBlock(),
    view: ST.view, editor, S, P, V, C, run, rebuild, editSketch, exitSketch, selectFeature, openText, commit, undoRedo, hist, asmHist, settings, editState, editAct, paramsUI,
    clip: () => ST.clip, DUI, get section() { return ST.section; }, get handles() { return ST.handles; },
    exportBytes: (kind) => (kind === 'stl' ? X.stlBinary(ST.regen.mesh) : kind === '3mf' ? X.threeMf(ST.regen.mesh) : kind === 'step' ? X.stepFaceted(ST.regen.mesh, ST.part.name).text : null),
    stepText: (schema = 'AP242') => exact.call('step', { part: ST.part, schema }).then((r) => r.text),
    // Studio Live (0.5 LV.20, live.js): someone else's edits landed in `part`; a joiner's part arrived; the session's messages
    status: (m) => status(m),
    liveApplied: () => {
      if (ST.editing && !P.featureById(ST.part, ST.editing)) { if (ST.mode === 'sketch') { editor.active = false; ui.sk.hidden = true; ST.view.setSketch(null); ui.skBar.hidden = true; } ST.mode = 'model'; ST.editing = null; }
      if (ST.sel?.kind === 'feature' && !P.featureById(ST.part, ST.sel.id)) ST.sel = null;
      ST.dirty = true; rebuild(); renderAll();
    },
    liveReplace: (p) => { if (ST.mode === 'sketch') exitSketch(); ST.part = p; hist.clear(); ST.sel = null; ST.pick = null; ST.multi = []; ST.dirty = true; rebuild(); renderAll(); },
  };
  // the menu styles (0.5 IP.3, input-partcraft.js + the shell's app-input-ui.js): their messages go to the status bar
  window.ccInputHooks = { status: (text, bad) => status(text || '', bad) };
  // add-ons (0.5 AO.7): PartCraft's own loader and API; their exporters join the Export menu
  const syncAddonExports = () => {
    const list = $('[data-export-menu] .pc-menu-list');   // i18n-ignore: a selector
    if (!list || !ST.addons) return;
    for (const b of list.querySelectorAll('[data-addon-export]')) b.remove();
    for (const ex of ST.addons.exporters()) {
      list.append(el('button', { type: 'button', role: 'menuitem', dataset: { addonExport: ex.id }, onclick: async () => {
        list.closest('details')?.removeAttribute('open');
        try { const name = fileBase() + '.' + ex.extension; download(await ex.write(ST.addons.exportInput(ST.part.name)), name, ex.mime); status(t('app.export.addon', { file: name })); }
        catch (e) { status(t('app.export.addon_failed', { what: ex.label, error: e && e.message ? e.message : String(e) })); }
      } }, ex.label));
    }
  };
  // 0.8 EG.78 (studio_PART_2): drag the part to another app in Studio (drag-out.js, part-item.js; Studio's window.cadcraftStudio.drag)
  if (window.cadcraftStudio?.drag) import('./drag-out.js').then((m) => m.mountDragOut({ current: () => (ST.regen?.mesh ? { part: ST.part, mesh: ST.regen.mesh } : null), status, t })).catch((e) => console.warn('drag to another app did not start:', e));   // i18n-ignore: a developer message
  startAddons({ host, faceView: { mark: (faces) => ST.view.setMarks(faces.length ? { faces } : null), hover: (tris) => ST.view.setHover(tris ? { tris } : null) }, bodies: { sync: syncAddonBodies, fit: () => { syncAddonBodies(); ST.view.view('iso'); } }, selection: () => ST.sel, select: selectFeature, find: (q) => root.querySelector(q), showTab: (k) => paramsUI.showTab(k || 'props') })
    .then((a) => { ST.addons = a; a.onChange(() => { syncAddonExports(); renderProps(); }); syncAddonExports(); renderProps(); })
    .catch((e) => console.warn('add-ons did not start:', e));   // i18n-ignore: a developer message
  // the layouts of Settings › Global › Layout (0.7 WS.14): the shell's engine builds a layout file's blocks, workspace-partcraft.js
  // fills them; only builds whose manifest lists layouts carry the engine (#cc-workspace)
  if (document.getElementById('cc-workspace')) {
    import('./workspace-partcraft.js').then((m) => m.mountPartcraftWorkspace(root))
      .catch((e) => { document.documentElement.removeAttribute('data-cc-ws-boot'); console.warn('layouts did not start:', e); });   // i18n-ignore: a developer message
  }
  // 0.10 BK.179 / SU.1814 (bim-part-link-10): a part sent from BimCraft opens here with the building around it; Save back sends it home
  ST.bimLink = mountBimLink({ t, status, P, MI, THREE, view: ST.view, part: () => ST.part, openPartText: openText, regenMesh: () => ST.regen?.mesh || null, regen: () => ST.regen, markDirty: () => { ST.dirty = true; }, chip: $('[data-bim-link]') });   // regen: 0.11 SU.1814, the history as solids
  ready.then(() => ST.bimLink.receive()).catch((e) => console.warn('part link:', e));   // i18n-ignore: a developer message
  renderAll();
}
