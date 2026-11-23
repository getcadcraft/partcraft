/* SPDX-License-Identifier: Apache-2.0 */
/**
 * toolbar-ui.js: partcraft.js's 7 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountToolbar(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as C from './clipboard.js';
import * as WS from './workspaces.js';
import * as S from './sketch.js';
import * as P from './part.js';
import { openFrameCheck } from './frame-ui.js';
import { el } from './ui-util.js';
import { exportDeck as ccxExport, importResults as ccxImport } from './nlstudy-ui.js';
import { CMD_METHOD as ARC_CMDS } from './sketch-arcs.js';
import { MESH_BUILT } from './kernel.js';
import * as V from './vec.js';
import * as A from './assembly.js';

export function mountToolbar(ctx) {
  const { ST, ui, hist, asmHist, editor, settings, persistSettings, status, exactOff, editingFeature, rebuild, built, commit, endPick, startSketch, exitSketch, newFeature, btn, syncPlanes, renderAll, updateTools, download, fileBase, confirmDiscard, openNest, ask, focusStage } = ctx;

  // ---------------------------------------------------------------- toolbar
  const SKETCH_TOOLS = { 'tool-line': 'line', 'tool-rect': 'rect', 'tool-circle': 'circle', 'tool-arc': 'arc', 'tool-point': 'point', 'tool-centerline': 'centerline', 'tool-fillet': 'fillet', 'tool-dimension': 'dimension',
    'tool-spline': 'spline', 'tool-cspline': 'cspline', 'tool-project': 'project', 'tool-trim': 'trim', 'tool-extend': 'extend', 'tool-offset': 'offset', 'tool-mirror': 'mirror', 'tool-polygon': 'polygon', 'tool-slot': 'slot', 'tool-lpattern': 'lpattern', 'tool-cpattern': 'cpattern' };

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
    if (!ST.M && !ST.useExact) return all(no(t('app.edit.loading')));
    const clipWord = ST.clip ? C.describeClip(ST.clip) : '';
    if (ST.ws !== WS.DESIGN) return { ...all(no(t('app.edit.other_ws', { ws: ST.ws.label }))), ...(ctx.wsCall('editState', ctx.host) || {}) };
    if (ST.mode === 'pick') return all(no(t('app.edit.picking')));
    if (ST.mode === 'drawing') {
      const s = ST.drawingState?.sel;
      return {
        ...all(no(t('app.edit.drawing'))),
        delete: s ? yes : no(t('app.edit.select_note')),
        'select-all': no(t('app.edit.notes_one_at_a_time')),
        'select-none': s ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    if (ST.mode === 'sketch') {
      const sk = editingFeature()?.sketch;
      const ents = sk ? [...editor.sel].filter((id) => id !== S.ORIGIN && sk.entities.some((e) => e.id === id)) : [];
      const any = [...editor.sel].some((id) => id !== S.ORIGIN);
      const can = ents.length ? yes : no(t('app.edit.select_geometry'));
      const paste = ST.clip?.kind === 'sketch' ? yes : ST.clip ? no(t(ST.clip.kind === 'instance' ? 'app.edit.clip_part_to_asm' : 'app.edit.clip_features_exit_sketch', { what: clipWord })) : no(t('app.edit.nothing_to_paste_sketch'));
      return {
        copy: can, cut: can, duplicate: can, paste, 'paste-in-place': paste,
        delete: any ? yes : no(t('app.edit.select_geometry_any')),
        'select-all': sk?.entities.length ? yes : no(t('app.edit.sketch_empty')),
        'select-none': editor.sel.size || editor.tool !== 'select' ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    if (ST.mode === 'assembly') {
      const inst = ST.asmSel?.kind === 'inst';
      const can = inst ? yes : no(ST.asmSel ? t('app.edit.joint_no_copy') : t('app.edit.select_part'));
      const paste = ST.clip?.kind === 'instance' ? yes : ST.clip ? no(t(ST.clip.kind === 'sketch' ? 'app.edit.clip_sketch_to_sketch' : 'app.edit.clip_features_to_part', { what: clipWord })) : no(t('app.edit.nothing_to_paste_part'));
      return {
        copy: can, duplicate: can, paste, 'paste-in-place': paste,
        cut: !inst ? can : ST.asm.instances.length > 1 ? yes : no(t('app.edit.asm_keeps_one')),
        delete: ST.asmSel ? yes : no(t('app.edit.select_part_or_joint')),
        'select-all': no(t('app.edit.parts_one_at_a_time')),
        'select-none': ST.asmSel || ST.jointPick ? yes : no(t('app.edit.nothing_selected')),
      };
    }
    const f = ST.sel?.kind === 'feature' ? P.featureById(ST.part, ST.sel.id) : null;
    const can = !f ? no(t('app.edit.select_copyable')) : C.COPYABLE.has(f.type) ? yes : no(t('app.edit.not_copyable', { name: f.name }));
    const paste = ST.clip?.kind === 'features' ? yes : ST.clip ? no(t(ST.clip.kind === 'sketch' ? 'app.edit.clip_sketch_open_first' : 'app.edit.clip_part_to_asm', { what: clipWord })) : no(t('app.edit.nothing_to_paste_feature'));
    return {
      copy: can, cut: can, duplicate: can, paste, 'paste-in-place': paste,
      delete: f ? yes : no(t('app.edit.select_feature')),
      'select-all': no(t('app.edit.history_one_at_a_time')),
      'select-none': ST.sel || ST.pick || ST.multi.length || ST.pendingSketch ? yes : no(t('app.edit.nothing_selected')),
    };
  }

  /** run(cmd)'s commands (the toolbar's data-cmd buttons, the menus, the keys, the shell's palette): command -> what it does, each entry the body
   *  of its old `if (cmd === …)` / `case` unchanged (PERF.78, perf-finish-11 r2; was a 100-line function, cyclomatic count 143).
   *  RUN_FIRST is looked up before the mode guards (as the if-chain was), RUN_CMDS after them (as the switch was). */
  const RUN_FIRST = {
    'view-planes': () => { settings.planes = !settings.planes; persistSettings(); syncPlanes(); updateTools(); status(t(settings.planes ? 'app.planes.shown' : 'app.planes.hidden')); },
    'view-section': () => { ST.section.toggle(); updateTools(); },
    'view-light': () => { settings.lightDisplay = !settings.lightDisplay; persistSettings(); ST.view.setLod(settings.lightDisplay ? 'light' : 'auto'); updateTools(); status(t(settings.lightDisplay ? 'asm.light.on' : 'asm.light.off')); },
    'view-draft': () => { ST.draft.toggle('draft'); updateTools(); },
    'view-zebra': () => { ST.draft.toggle('zebra'); updateTools(); },
    'view-curvature': () => { ST.draft.toggle('curvature'); updateTools(); },
    'view-measure': () => { if (ST.mode === 'sketch' || ST.mode === 'drawing') { status(t('app.measure.model_only')); return; } ST.measure.toggle(); updateTools(); },
    'view-frame-check': () => { if (ST.mode === 'sketch' || ST.mode === 'drawing') { status(t('pcframe.model_only')); return; } return openFrameCheck({ part: ST.part, results: ST.regen?.results, ask, el, btn, status, download, fileBase }); },
    'view-mass': () => { if (ST.mode === 'sketch' || ST.mode === 'drawing') { status(t('app.measure.mass_model_only')); return; } ST.measure.mass(); updateTools(); },
    'export-print': () => ctx.checkPrint(),
    'export-nest': () => openNest(),
    'export-sheets': () => ctx.openSheets(),
    'export-ccx': () => ccxExport(ctx.host),
    'export-scaled': (cmd) => ctx.printExport(cmd),
    'export-split': (cmd) => ctx.printExport(cmd),
    'sketch-magnet': async () => {   // 0.8 SG.7+: Sketch › Magnet study… (magnet-study-ui.js on physics_PART_3's magnetSolve)
      if (ST.mode === 'assembly') { status(t('study.mag.ui.no_sketch'), true); return; }
      if (ST.mode === 'sketch') exitSketch();
      const MU = await import('./magnet-study-ui.js');
      return MU.openMagnetDialog({ ask, el, status, part: () => ST.part, computeWorker: (mods, o) => ctx.host.computeWorker(mods, o), refreshProblems: () => ST.problemsSync?.(), download });
    },
    'sketch-photo': async () => {   // 0.8 EG.38: Sketch › From a photo… (photo-sketch-ui.js on part_PART_2's photo-sketch.js)
      if (ST.mode === 'assembly') { status(t('pexp.part_only'), true); return; }
      if (ST.mode === 'sketch') exitSketch();
      const PU = await import('./photo-sketch-ui.js');
      return PU.openPhotoDialog({ ask, el, status, commit, part: () => ST.part, addFeature: (p, type, props) => P.addFeature(p, type, props), built });
    },
    'import-frd': () => { if (ST.ws.id !== 'simulation' && !ctx.setWorkspace('simulation')) return; return ccxImport(ctx.host); },
    'export-laser': () => ctx.openLaser(),
  };
  const RUN_CMDS = {
    'link-save-back': () => ST.bimLink?.saveBack(),   // 0.10 SU.1814
    'new': () => ctx.newPart(),
    'std-part': () => ctx.openStandardPart(),
    'documents': () => ctx.openVault(),   // 0.8 SU.1058 (vault-08)
    'open': async () => { if (await confirmDiscard()) { const [hf] = await ctx.fileHost.openFile({ types: [{ description: 'PartCraft, STEP, STL, OBJ, 3MF, 3DM', extensions: ['.json', '.step', '.stp', '.stl', '.obj', '.3mf', '.3dm'] }] }); await ctx.openFromHost(hf); } },   // i18n-ignore: a file type label the OS shows
    'save': () => ctx.savePart(),
    'save-older': () => ctx.saveOlder(),   // 0.11 DC.27
    'export-stl': () => ctx.exportMesh('stl'),
    'export-3mf': () => ctx.exportMesh('3mf'),
    'export-ifc': () => ctx.exportIfc(),
    'export-usd': () => ctx.exportUsd(),   // 0.7 XF.8 (session usd)
    'export-step': () => ctx.exportStep('AP242'),
    'export-step214': () => ctx.exportStep('AP214'),
    'export-step-faceted': () => ctx.exportMesh('step'),
    'export-step214-faceted': () => ctx.exportMesh('step214'),
    'export-sw-step': () => ctx.exportForSw(false),
    'export-sw-macro': () => ctx.exportForSw(true),
    'fillet': () => newFeature('fillet', {}),
    'chamfer': () => newFeature('chamfer', {}),
    'shell': () => newFeature('shell', {}),
    'plane': (cmd) => newFeature(cmd, {}),
    'axis': (cmd) => newFeature(cmd, {}),
    'point': (cmd) => newFeature(cmd, {}),
    'sweep': (cmd) => newFeature(cmd, {}),
    'loft': (cmd) => newFeature(cmd, {}),
    'draft': (cmd) => newFeature(cmd, {}),
    'patch': (cmd) => newFeature(cmd, {}),
    'surfloft': (cmd) => newFeature(cmd, {}),
    'stitch': (cmd) => newFeature(cmd, {}),
    'thicken': (cmd) => newFeature(cmd, {}),
    'offsetsurf': (cmd) => newFeature(cmd, {}),
    'extendsurf': (cmd) => newFeature(cmd, {}),
    'trimsurf': (cmd) => newFeature(cmd, {}),
    'gordon': (cmd) => newFeature(cmd, {}),
    'combine': (cmd) => newFeature(cmd, {}),
    'movebody': (cmd) => newFeature(cmd, {}),
    'scalebody': (cmd) => newFeature(cmd, {}),
    'pathpattern': (cmd) => newFeature(cmd, {}),
    'sheetbase': (cmd) => newFeature(cmd, {}),
    'sheetflange': (cmd) => newFeature(cmd, {}),
    'rib': (cmd) => newFeature(cmd, {}),
    'member': (cmd) => newFeature(cmd, {}),
    'generated': (cmd) => newFeature(cmd, {}),
    'thread': () => newFeature('thread', {}),
    'pick-done': () => endPick(),
    'drawing': () => ctx.enterDrawing(),
    'dr-back': () => ctx.leaveDrawing(),
    'dr-datum': (cmd) => ctx.drawingTool(cmd.slice(3)),
    'dr-fcf': (cmd) => ctx.drawingTool(cmd.slice(3)),
    'dr-finish': (cmd) => ctx.drawingTool(cmd.slice(3)),
    'dr-detail': (cmd) => ctx.drawingTool(cmd.slice(3)),
    'dr-pdf': () => ctx.exportDrawing(),
    'export-dxf': () => ctx.exportDxf(),
    'export-drawing': () => ctx.exportDrawing(),
    'sketch': () => startSketch(),
    'exit-sketch': () => exitSketch(),
    'construction': () => { editor.toggleConstruction(); },
    'extrude': () => newFeature('extrude', { op: 'add' }),
    'cut-extrude': () => newFeature('extrude', { op: 'cut', end: 'through' }),
    'revolve': () => newFeature('revolve', { op: 'add' }),
    'revolve-cut': () => newFeature('revolve', { op: 'cut' }),
    'hole': () => newFeature('hole', {}),
    'lpattern': () => newFeature('lpattern', {}),
    'cpattern': () => newFeature('cpattern', {}),
    'mirror': () => newFeature('mirror', {}),
    'undo': () => undoRedo(true),
    'redo': () => undoRedo(false),
    'delete': () => ctx.editAct('delete'),
    'copy': (cmd) => ctx.editAct(cmd),
    'cut': (cmd) => ctx.editAct(cmd),
    'paste': (cmd) => ctx.editAct(cmd),
    'paste-in-place': (cmd) => ctx.editAct(cmd),
    'duplicate': (cmd) => ctx.editAct(cmd),
    'select-all': (cmd) => ctx.editAct(cmd),
    'select-none': (cmd) => ctx.editAct(cmd),
    'asm-new': () => ctx.enterAssembly(),
    'asm-back': () => ctx.backToAssembly(),
    'asm-insert-copy': () => ctx.asmInsertCopy(),
    'asm-insert-file': () => { ui.insertFile.click(); },
    'asm-joint': () => ctx.asmStartJoint(),
    'asm-check': () => ctx.asmCheck(),
    'asm-stackup': () => { ST.stackup.toggle(); updateTools(); },
    'asm-motion': () => { ST.motion.toggle(); updateTools(); },
    'asm-contact': () => { ST.contactStudy.toggle(); updateTools(); },
    'asm-edit': () => ctx.asmEditPart(),
    'asm-close': () => ctx.closeAssembly(),
    'view-fit': () => { if (ST.mode === 'sketch') editor.fit(); else ST.view.fit(); },
    'view-normal': normalTo,
  };
  async function run(cmd) {
    ST.shellKit?.tool(cmd);   // lessons: where a command runs
    if (ST.addons?.runCommand(cmd)) return;   // an add-on's command ('<add-on id>:<name>')
    for (const d of ui.tools.querySelectorAll('details[open]')) d.open = false;
    // the active workspace sees every command first; its own (<id>-…) never reach Design
    if (ST.ws !== WS.DESIGN && ctx.wsCall('command', cmd, ctx.host) === true) return;
    if (WS.workspaceOfCmd(cmd)) return;
    if (ST.measure?.active && !/^(view-|export-|undo$|redo$|save$)/.test(cmd)) ST.measure.stop();
    // PERF.78 (perf-finish-11 r2): the commands are two tables, looked up where the if-chain and the switch stood, so the order of the
    // checks between them (assembly exports, arc / sketch tools, the exact-kernel-only features) is the same as before
    const early = Object.hasOwn(RUN_FIRST, cmd) ? RUN_FIRST[cmd] : null;
    if (early) return early(cmd);
    if (ST.mode === 'assembly' && ctx.ASM_EXPORTS.includes(cmd)) return ST.asmTools.exportCmd(cmd);
    if (ARC_CMDS[cmd]) { if (ST.mode === 'sketch') { editor.setArcMethod(ARC_CMDS[cmd]); editor.setTool('arc'); updateTools(); } focusStage(); return; }   // 0.9 FX.137
    if (SKETCH_TOOLS[cmd]) { if (ST.mode === 'sketch') editor.setTool(editor.tool === SKETCH_TOOLS[cmd] ? 'select' : SKETCH_TOOLS[cmd]); focusStage(); return; }
    if (exactOff() && P.EXACT_ONLY.has(cmd) && !MESH_BUILT.has(cmd)) { status(t('kernel.not_built', { what: P.FEATURE_LABELS[cmd] }), true); return; }
    const fn = Object.hasOwn(RUN_CMDS, cmd) ? RUN_CMDS[cmd] : null;
    if (fn) return fn(cmd);
    if (cmd.startsWith('view-')) ST.view.view(cmd.slice(5));
  }
  ui.tools.addEventListener('click', (e) => { const b = e.target.closest('button[data-cmd]'); if (b && !b.disabled) run(b.dataset.cmd); });
  document.addEventListener('click', (e) => { for (const d of ui.tools.querySelectorAll('details[open]')) if (!d.contains(e.target)) d.open = false; });

  function normalTo() {
    if (ST.mode === 'sketch') return;
    if (ST.pick?.kind === 'face') { ST.view.normalTo(V.frameFor(ST.pick.normal, ST.pick.point)); return; }
    if (ST.sel?.kind === 'plane') { ST.view.normalTo(V.BASE_PLANES[ST.sel.name]); return; }
    if (ST.sel?.kind === 'feature') { const fr = ST.regen?.frames.get(ST.sel.id); if (fr) { ST.view.normalTo(fr); return; } }
    status(t('app.view.normal_needs_pick'));
  }

  function undoRedo(isUndo) {
    // a workspace with its own history (Illustrate's manual) takes the keys as it takes the buttons (asked by illustrate, 0.7)
    if (ST.ws !== WS.DESIGN && ctx.wsCall('command', isUndo ? 'undo' : 'redo', ctx.host) === true) return;
    queueMicrotask(() => ctx.noteChange());   // autosave: an undo or redo is an edit too
    if (ST.mode === 'assembly') {
      const r = isUndo ? asmHist.undo(ST.asm) : asmHist.redo(ST.asm);
      if (!r) { status(isUndo ? t('app.undo.nothing_undo') : t('app.undo.nothing_redo')); return; }
      // an undone interference filter (0.5 WL.33) leaves the parts where they were: the check's results stay
      const bare = (a) => JSON.stringify({ ...a, clashFilter: undefined, version: undefined });
      const before = bare(ST.asm);
      ST.asm = A.readAssembly(r.part);
      const sameParts = bare(ST.asm) === before;
      ST.asmDirty = true; ST.jointPick = null;
      if (!sameParts) ST.clashes = null;
      if (ST.asmSel && !(ST.asmSel.kind === 'inst' ? ST.asm.instances : ST.asm.joints).some((x) => x.id === ST.asmSel.id)) ST.asmSel = null;
      ctx.rebuildAsm(); renderAll();
      status(t(isUndo ? 'app.undo.undid' : 'app.undo.redid', { what: r.label.toLowerCase() }));
      return;
    }
    const r = isUndo ? hist.undo(ST.part) : hist.redo(ST.part);
    if (!r) { status(isUndo ? t('app.undo.nothing_undo') : t('app.undo.nothing_redo')); return; }
    ST.part = r.part;
    ST.dirty = true;
    if (ST.editing && !P.featureById(ST.part, ST.editing)) { if (ST.mode === 'sketch') { editor.active = false; ui.sk.hidden = true; ST.view.setSketch(null); ui.skBar.hidden = true; } ST.mode = 'model'; ST.editing = null; }
    if (ST.sel?.kind === 'feature' && !P.featureById(ST.part, ST.sel.id)) ST.sel = null;
    editor.sel.clear();
    rebuild();
    renderAll();
    status(t(isUndo ? 'app.undo.undid' : 'app.undo.redid', { what: r.label.toLowerCase() }));
  }

  return { SKETCH_TOOLS, applyEditState, editState, run, undoRedo };
}
