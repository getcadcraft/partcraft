/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspaces-ui.js: partcraft.js's 8 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountWorkspaceUi(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { createMeasure } from './measure-ui.js';
import { THREE } from './view3d.js';
import { el, swapChildren } from './ui-util.js';
import { t } from './i18n.js';
import { createSection } from './section-ui.js';
import { faceSection } from './section.js';
import { createDraft } from './draft-ui.js';
import * as WS from './workspaces.js';
import { createStackup } from './stackup-ui.js';
import { createMotion } from './motion-ui.js';
import * as A from './assembly.js';
import { createContact } from './asm-contact-ui.js';
import { faceRef } from './brep.js';
import { createAsmTools } from './asm-ui.js';
import * as V from './vec.js';
import * as X from './export.js';
import { toPdf as drawingPdf } from './drawing.js';
import * as P from './part.js';
import { computeWorker } from './compute-worker.js';
import { AUTO_THREADS } from './pool.js';
import { dockEditor, undockEditor } from './ws-script.js';

export function mountWorkspaceUi(ctx) {
  const { ST, $, ui, hist, settings, tokens, status, exact, rebuild, built, bodyOverlays, syncAddonBodies, keepFocus, commit, endPick, exitSketch, field, numInput, paramsUI, selectInput, check, btn, GU, renderProps, renderAll, updateTools, buildPart, showInstances, commitAsm, instById, jointById, leaveDrawing, download, fileBase, fileHost, ask, focusStage, root } = ctx;

  // ---------------------------------------------------------------- workspaces (workspaces.js, ws-*.js)
  // Design is everything above; another workspace gets the toolbar group(s) it registered, the right panel, picks,
  // hovers and keys, and works on the same part through `host` (docs/apps/partcraft-workspaces.md).
  // Measure (every workspace) and the assembly tools (docs/apps/partcraft.md, measuring / BOM / exploded views)
  const IDENT4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  ST.measure = createMeasure({
    view: ST.view, THREE, el, exact, stage: ui.gl.parentElement, tokens,
    status, useExact: () => ST.useExact, changed: updateTools,
    blocked: () => (ST.mode === 'sketch' || ST.mode === 'drawing' ? t('app.measure.model_only') : ''),
    targets: () => {
      if (ST.mode === 'assembly') {
        if (!ST.asm || !ST.asmPlace) return [];
        const shown = ST.asmTools.displayWorld(ST.asmPlace.world);
        return ST.asm.instances.filter((i) => ST.asmBuilds.get(i.part)?.mesh).map((i) => ({ id: i.id, name: i.name, pid: i.part, partName: ST.asm.parts[i.part].name, part: ST.asm.parts[i.part].part, build: ST.asmBuilds.get(i.part), matrix: shown.get(i.id), density: ST.asm.parts[i.part].material?.density ?? null }));
      }
      return ST.regen?.mesh ? [{ id: null, name: ST.part.name, pid: null, partName: ST.part.name, part: ST.part, build: ST.regen, matrix: IDENT4, density: ST.part.material?.density ?? null, materialName: ST.part.material?.name ?? null }] : [];
    },
  });
  ST.section = createSection({
    view: ST.view, el, stage: ui.gl.parentElement, status, changed: updateTools,
    blocked: () => (ST.mode === 'sketch' || ST.mode === 'drawing' ? t('section.blocked') : ''),
    // a flat face: the exact kernel's face record (placed by the instance's matrix in an assembly); the mesh kernel has
    // no face records, so the clicked facet's plane stands in
    facePlane: (h) => {
      if (!h || h.kind !== 'face') throw new Error(t('section.need_flat'));
      const build = h.inst !== undefined ? ST.asmBuilds.get(instById(h.inst)?.part) : ST.regen;
      const rec = build?.faces?.[h.face];
      if (rec) return faceSection(rec, h.inst !== undefined ? h.matrix : null);
      const n = h.normal, p = h.worldPoint || h.point;
      if (h.inst !== undefined) { const M = h.matrix; const w = [M[0] * n[0] + M[4] * n[1] + M[8] * n[2], M[1] * n[0] + M[5] * n[1] + M[9] * n[2], M[2] * n[0] + M[6] * n[1] + M[10] * n[2]]; return faceSection({ type: 'plane', n: w, o: p }); }
      return faceSection({ type: 'plane', n, o: p });
    },
  });
  ST.draft = createDraft({
    view: ST.view, el, stage: ui.gl.parentElement, status, changed: updateTools,
    blocked: () => (ST.ws !== WS.DESIGN || ST.mode === 'sketch' || ST.mode === 'drawing' || ST.mode === 'assembly' ? t('draft.blocked') : ''),
    mesh: () => (ST.mode === 'assembly' ? null : ST.regen?.mesh || null),
    faceNormal: (h) => {
      const rec = h && h.kind === 'face' && h.inst === undefined ? ST.regen?.faces?.[h.face] : null;
      if (rec && rec.type === 'plane') return rec.n;
      if (h && h.kind === 'face' && !ST.regen?.exact && h.normal) return h.normal;   // the mesh kernel: the clicked facet
      throw new Error(t('draft.need_flat'));
    },
    viewDir: () => { const d = new THREE.Vector3(); ST.view.camera.getWorldDirection(d); return [d.x, d.y, d.z]; },
    color: (tok) => { const v = getComputedStyle(document.documentElement).getPropertyValue(tok).trim(); const m = /^#?([0-9a-f]{6})$/i.exec(v); const n = m ? parseInt(m[1], 16) : 0x808080; return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255]; },
  });
  // Tolerance stack-ups (0.6 LC.18, stackup-ui.js): Assembly › Stack-up, a card over the stage; edits are assembly undo steps
  ST.stackup = createStackup({
    el, btn, view: ST.view, THREE, stage: ui.gl.parentElement, tokens, status,
    asm: () => (ST.mode === 'assembly' ? ST.asm : null), world: () => ST.asmPlace?.world || new Map(),
    instName: (id) => (ST.asm && instById(id)?.name) || '', partOf: (id) => { const i = ST.asm && instById(id); return i ? ST.asm.parts[i.part]?.part : null; },
    commit: commitAsm, download, fileBase: () => ST.asm?.name || fileBase(),
  });
  // Motion studies (0.8 EG.7, motion-ui.js): Assembly › Motion, a card over the stage; a study is not saved in the file
  ST.motion = createMotion({
    el, btn, stage: ui.gl.parentElement, status,
    asm: () => (ST.mode === 'assembly' ? ST.asm : null), builds: () => ST.asmBuilds, M: () => ST.M,
    instName: (id) => (ST.asm && instById(id)?.name) || '', download, fileBase: () => ST.asm?.name || fileBase(),
    // 0.8 EG.7 (round 3): the study's settings kept in the assembly file, and the scrub bar's pose (shown only; the joint keeps its value)
    save: (spec) => { if (!ST.asm) return; ST.asm.motion = spec; ST.asmDirty = true; },
    pose: (jid, key, v) => { const x = ST.asm && jointById(jid); if (!x) return; const keep = x[key]; x[key] = v; try { ST.asmPlace = A.placeAll(ST.asm, ST.asmBuilds, { hold: new Set([jid + '.' + key]), start: ST.asmPlace?.loops?.values }); } finally { x[key] = keep; } showInstances(); },
    unpose: () => { if (!ST.asm) return; ST.asmPlace = A.placeAll(ST.asm, ST.asmBuilds); showInstances(); },
  });
  // Contact studies (0.8 SU.891, asm-contact-ui.js): Assembly › Contact, a card over the stage; the pairs and settings are kept in the assembly file
  ST.contactStudy = createContact({
    el, btn, stage: ui.gl.parentElement, status,
    asm: () => (ST.mode === 'assembly' ? ST.asm : null), builds: () => ST.asmBuilds, world: () => ST.asmPlace?.world || new Map(),
    instName: (id) => (ST.asm && instById(id)?.name) || '', fileBase: () => ST.asm?.name || fileBase(), download,
    refSide: (h) => { const i = ST.asm && instById(h.inst), b = i && ST.asmBuilds.get(i.part), f = b && b.faces && b.faces[h.face]; return f && f.name ? faceRef(f) : null; },
    save: (spec) => { if (!ST.asm) return; if (spec) ST.asm.contactStudy = spec; else delete ST.asm.contactStudy; ST.asmDirty = true; },
    computeWorker: (modules, opts) => host.computeWorker(modules, opts), refreshProblems: () => ST.problemsSync?.(),
    openText: async (types) => { const [hf] = await fileHost.openFile({ types }); return hf ? { name: hf.name, text: await hf.text() } : null; },   // a CalculiX .frd
  });
  ST.asmTools = createAsmTools({
    el, view: ST.view, THREE, A, V, X, exact, toPdf: (sh) => drawingPdf(sh), tokens,
    get asm() { return ST.asm; }, get builds() { return ST.asmBuilds; }, get place() { return ST.asmPlace; },
    useExact: () => ST.useExact, status, download,
    commitAsm, showInstances: () => { if (ST.asm && ST.asmPlace) showInstances(); }, renderAll,
    field, numInput, selectInput, btn, check,
  });
  const host = {
    get part() { return ST.part; }, get regen() { return ST.regen; }, get useExact() { return ST.useExact; }, get mode() { return ST.mode; },
    get workspace() { return ST.ws.id; }, get manifold() { return ST.M; },
    exact, view: ST.view, THREE, el, P,
    status: (m, keep = false) => status(m, keep),
    rebuild, built, renderAll, renderPanel: () => keepFocus(() => renderProps()),
    /** One undo step on the part: fn() changes host.part. rebuild false = data only (studies), no kernel run. */
    commit: (label, fn, { rebuild: rb = true } = {}) => { if (rb) return commit(label, fn); hist.push(ST.part, label); const r = fn(); ST.dirty = true; renderAll(); return r; },
    buildPart,   // a copy of the part built with the kernel in use (design studies)
    refreshProblems: () => ST.problemsSync?.(),
    markDirty: () => { ST.dirty = true; },   // data kept outside the part's undo (the Surfaces patch set)
    study: (key) => P.study(ST.part, key),
    setStudy: (key, value, label = t('app.undo.change_study')) => (host.commit(label, () => P.setStudy(ST.part, key, value), { rebuild: false }), ST.problemsSync?.()),
    downloadBlob: (name, blob, mime) => download(blob, name, mime || blob.type || 'application/octet-stream'),
    openText: async (types) => { const [hf] = await fileHost.openFile({ types }); return hf ? { name: hf.name, text: await hf.text() } : null; },   // SU.891: a CalculiX .frd
    ask,
    confirm: async (title, text, yes = t('app.btn.ok')) => (await ask({ title, text, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['yes', yes, 'pc-btn is-primary']] })) === 'yes',
    computeWorker: (modules, opts = {}) => {   // opts.threads: every call's args get the Settings thread count (compute-worker.js)
      const w = computeWorker(modules, opts);
      if (!opts.threads) return w;
      const n = () => (settings.threads === 'auto' ? AUTO_THREADS() : settings.threads);
      return { call: (op, args, o) => w.call(op, args && typeof args === 'object' && !Array.isArray(args) ? { ...args, threads: n() } : args, o), terminate: () => w.terminate(), get busy() { return w.busy; } };
    },
    focusStage, tokens,
    /** The Generated feature's panel and generator list (gen-ui.js, 0.8 CE.3 / CE.9), for the Engineer workspace. */
    get generated() { return GU; },
    /** The open assembly, read-only (0.7, for Illustrate): its instances' builds and world placements, or null. */
    assembly: () => (ST.mode === 'assembly' && ST.asm ? { asm: ST.asm, builds: ST.asmBuilds, world: ST.asmPlace?.world || null } : null),
  };
  /** Call a hook of the active workspace; a throw becomes a status message (never a console error). */
  function wsCall(name, ...args) {
    const fn = ST.ws[name];
    if (typeof fn !== 'function') return undefined;
    try { return fn.apply(ST.ws, args); } catch (err) { status(t('app.ws.error', { ws: ST.ws.label, error: err && err.message ? err.message : err }), true); return undefined; }
  }

  /** Why the other workspaces are off just now ('' = they are not). A workspace that says `assemblies: true` (Illustrate) also
   *  opens while an assembly is open. */
  function wsBlocked(target = null) {
    if (ST.mode === 'assembly') return target && target.assemblies ? '' : t('app.ws.blocked_asm');
    return ST.editPartOf ? t('app.ws.blocked_asm_part') : '';
  }
  function syncWsSwitcher() {
    if (!ui.ws) return;
    const why = wsBlocked();
    if (ui.ws.dataset.baseTitle === undefined) ui.ws.dataset.baseTitle = ui.ws.getAttribute('title') || '';
    for (const o of ui.ws.options) { const off = !!why && o.value !== 'design' && !!wsBlocked(WS.getWorkspace(o.value)); o.disabled = off; if (off) o.title = why; else o.removeAttribute('title'); }
    ui.ws.title = ui.ws.dataset.baseTitle + (why ? ' — ' + why : '');
    if (ui.ws.value !== ST.ws.id) ui.ws.value = ST.ws.id;
  }
  function wsToolState(b) {
    if (b.closest('[data-workspace-group]').dataset.workspaceGroup !== ST.ws.id) return;
    if (b.dataset.baseTitle === undefined) b.dataset.baseTitle = b.getAttribute('title') || '';
    let st = !ST.M && !ST.useExact ? { ok: false, why: t('app.edit.loading') } : { ok: true, why: '' };
    if (st.ok && ST.ws.toolState) st = wsCall('toolState', b.dataset.cmd, host) || st;
    b.disabled = !st.ok;
    b.title = st.ok || !st.why ? b.dataset.baseTitle : b.dataset.baseTitle + ' — ' + st.why;
  }
  function renderWsPanel() {
    // a node the workspace marks data-ws-keep="<its id>" stays in place: moving a textarea out of the page loses the
    // browser's own undo (the Script editor; 0.4 P7)
    const keep = [...ui.props.children].filter((c) => c.dataset && c.dataset.wsKeep === ST.ws.id);
    if (!keep.length) { swapChildren(ui.props, []); ui.props.replaceChildren(); }
    else for (const c of [...ui.props.children]) if (!keep.includes(c)) c.remove();
    const head = ST.ws.renderPanel ? wsCall('renderPanel', host, ui.props) : (ui.props.append(WS.placeholderPanel(ST.ws, el)), null);
    ui.propsH.textContent = typeof head === 'string' && head ? head : ST.ws.label;
  }
  /** Switch workspace (by the switcher, or tests). Leaves a sketch, pick mode or the drawing sheet first; assemblies stay in Design. */
  function setWorkspace(id) {
    const next = WS.getWorkspace(id);
    if (!next || next === ST.ws) { syncWsSwitcher(); return false; }
    const why = next === WS.DESIGN ? '' : wsBlocked(next);
    if (why) { status(why); syncWsSwitcher(); return false; }
    if (ST.mode === 'sketch') exitSketch();
    if (ST.mode === 'pick') endPick();
    if (ST.mode === 'drawing') leaveDrawing();
    ST.pendingSketch = false; ST.pick = null; ST.multi = []; ST.sel = null;
    ST.view.setHighlight(null); ST.view.setHover(null); ST.view.setMarks(null); ST.view.setPlaneState(null, null);
    ST.measure?.stop(); ST.draft?.stop();
    if (ST.ws === WS.DESIGN) paramsUI.showTab('props');   // the Design tab's script editor goes home first (0.5 WL.31)
    wsCall('exit', host);
    ST.view.clearOverlays(); bodyOverlays.clear(); syncAddonBodies(); ST.view.setFaceColors(null); ST.view.setPartVisible(true);
    ST.ws = next;
    root.dataset.activeWorkspace = ST.ws.id;
    wsCall('enter', host);
    renderAll();
    if (ST.ws === WS.DESIGN) status(t('app.ws.design'));
    else if (!ST.ws.renderPanel) status(t('app.ws.being_built', { ws: ST.ws.label }));
    return true;
  }
  // the Script tab of Design's right panel (0.5 WL.31): the Script workspace's editor, while the tree and the view work as in
  // Design; shown only in Design (the Script workspace has the editor as its panel)
  {
    const sec = $('#pc-sec-script'), box = $('[data-script-tab]'), tab = $('#pc-tab-script');
    // open: the editor moves in and the panel widens as in the Script workspace (data-script-tab-open, partcraft.css)
    if (sec && box) new MutationObserver(() => {
      const open = !sec.hidden && ST.ws === WS.DESIGN;
      if (open) dockEditor(host, box); else undockEditor(host);
      if (open) root.dataset.scriptTabOpen = ''; else delete root.dataset.scriptTabOpen;
    }).observe(sec, { attributes: true, attributeFilter: ['hidden'] });
    const syncTab = () => { if (tab) tab.hidden = ST.ws !== WS.DESIGN; };
    syncTab();
    new MutationObserver(syncTab).observe(root, { attributes: true, attributeFilter: ['data-active-workspace'] });
  }
  if (ui.ws) {
    ui.ws.replaceChildren(...WS.listWorkspaces().map((w) => el('option', { value: w.id }, w.label)));
    ui.ws.addEventListener('change', () => setWorkspace(ui.ws.value));
  }
  { const editGroup = ui.tools.querySelector('[data-group="edit"]'); for (const w of WS.listWorkspaces()) if (!w.builtin) for (const g of WS.toolbarGroups(w, el)) ui.tools.insertBefore(g, editGroup); }
  root.dataset.activeWorkspace = ST.ws.id;

  return { host, wsCall, syncWsSwitcher, wsToolState, renderWsPanel, setWorkspace };
}
