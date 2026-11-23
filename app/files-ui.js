/* SPDX-License-Identifier: Apache-2.0 */
/**
 * files-ui.js: partcraft.js's 19 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFiles(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { getHost } from "./host.js";
import { el } from './ui-util.js';
import { t } from './i18n.js';
import * as A from './assembly.js';
import * as P from './part.js';
import { partChanged as surfacesChanged } from './surfaces-pc.js';
import { partChanged as nodesChanged } from './nodes-pc.js';
import { Autosave } from "./app-autosave.js";
import { followJournal, recoverState } from "./history/index.js";
import { SHEET_TYPES } from './sheet-ui.js';

export function mountFiles(mc) {
  const { ST, $, ui, hist, asmHist, status, exact, exactOff, ready, rebuild, built, endPick, exitSketch, btn, syncPlanes, renderAll, closeAssembly, saveAssembly, leaveDrawing, importStep, importMesh, importKicadBoard, download, fileBase, openText, confirmDiscard, ask } = mc;

  // Files through the shell's host adapter (0.4 W.2 / 1.4): the browser's picker or the desktop's dialogs, the recent list
  // on the start hint, files handed over at launch. Saving a part writes in place on the desktop (a download in the browser).
  const fileHost = getHost({ app: 'partcraft' });
  ST.saveTarget = null;   // the HostFile the open part came from, when it can be written in place
  const PART_TYPES = [{ description: 'PartCraft', extensions: ['.json'] }];   // i18n-ignore: a file type label the OS shows
  async function openFromHost(hf) {
    if (!hf) return;
    await openFile(hf);
    ST.saveTarget = /\.json$/i.test(hf.name) && hf.writable ? hf : null;
  }
  fileHost.onOpenFiles(async (files) => { if (files[0] && await confirmDiscard()) await openFromHost(files[0]); });
  ready.then(async () => { const [first] = await fileHost.launchFiles(); if (first) await openFromHost(first); });   // desktop: the file it was started with
  // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the part comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) ready.then(() => import('./live.js')).then((m) => m.joinFromPage(window.partcraft, fileHost), (err) => status(err.message));
  // ---- the Documents panel (0.8 SU.1058, session vault-08; mounted by engineer): vault/vault-app.js, loaded on first use. A file opened from a
  // project folder is saved over only while it is checked out to you (the panel's saveBlocked), and check-in writes the open part's bytes.
  ST.vaultUi = null; ST.vaultRef = null;
  async function openVault() {
    if (!ST.vaultUi) {
      const { installVaultPanel } = await import('./vault/vault-app.js');
      ST.vaultUi = installVaultPanel({
        stage: ui.gl.parentElement, el, t, print: (m) => status(m), focusCommandLine: () => {}, fileHost, kinds: ['part', 'assembly'],
        openFile,
        currentFile: (rec) => {
          if (ST.mode === 'sketch') exitSketch();
          const asmOpen = ST.mode === 'assembly';
          if ((rec.kind === 'assembly') !== asmOpen) return { wrong: true };
          return { bytes: new TextEncoder().encode(asmOpen ? A.toJSON(ST.asm) : P.toJSON(ST.part)) };
        },
        getRef: () => ST.vaultRef, setRef: (r) => { ST.vaultRef = r; }, afterCheckin: () => { ST.dirty = false; },
        saveBlob: (name, text, mime) => download(text, name, mime),
      });
    }
    await ST.vaultUi.open();
  }

  async function savePart() {
    if (ST.vaultUi && ST.vaultRef) { const ro = await ST.vaultUi.saveBlocked(); if (ro) { status(ro); return; } }   // a vault file: only while checked out to you
    if (ST.mode === 'assembly') { saveAssembly(); return; }
    if (ST.mode === 'sketch') exitSketch();
    const name = fileBase() + '.partcraft.json';
    ST.shellKit?.stampSave?.();   // 0.9 DI.1
    const r = await fileHost.save({ target: ST.saveTarget, data: P.toJSON(ST.part), name, types: PART_TYPES });
    if (!r.ok) { if (!r.cancelled) status(t('app.file.save_failed', { error: String(r.error?.message || r.error || '') })); return; }
    if (r.target?.writable) ST.saveTarget = r.target;
    ST.dirty = false;
    status(r.how === 'written' ? t('app.file.written', { file: r.path || r.name || name }) : t('app.file.saved', { file: name }));
  }

  /** 0.11 DC.27: Save for 0.10: a copy of the part whose new feature ids are numbered again into the range 0.10 and older read
   *  (part.js olderCopy). Only when someone picks it; Save (Ctrl+S) always writes the part as it is. The copy is not this part's file. */
  async function saveOlder() {
    if (ST.mode === 'assembly') return;   // a part's copy; an assembly keeps its own numbering (not DC.27's file counter)
    if (ST.mode === 'sketch') exitSketch();
    ST.shellKit?.stampSave?.();
    let data;
    try { data = P.olderCopy(P.toJSON(ST.part)); } catch { status(t('app.file.older_full')); return; }
    const name = fileBase() + ' (0.10).partcraft.json';   // i18n-ignore: a file name
    const r = await fileHost.save({ target: null, data, name, types: PART_TYPES });
    if (!r.ok) { if (!r.cancelled) status(t('app.file.save_failed', { error: String(r.error?.message || r.error || '') })); return; }
    status(t('app.file.older_saved', { file: r.path || r.name || name }));
  }

  async function newPart() {
    if (ST.mode === 'assembly' || ST.editPartOf) { if (!(await closeAssembly())) return; }
    if (!(await confirmDiscard())) return;
    if (ST.mode === 'sketch') exitSketch();
    if (ST.mode === 'pick') endPick();
    if (ST.mode === 'drawing') leaveDrawing();
    ST.part = P.newPart();
    hist.clear(); ST.dirty = false; ST.sel = null; ST.pick = null; ST.pendingSketch = false;
    ST.view.setHighlight(null);
    rebuild(); renderAll(); ST.view.view('iso');
    ST.shellKit?.opened(); surfacesChanged(mc.host); nodesChanged(mc.host);
    status(t('app.file.new_part'));
  }

  /**
   * File › Standard part (0.5 MQ.4): a bolt, nut, washer, pin, bearing or key from the standard's table (stdparts.js), opened
   * as a new part with one configuration per size (Parameters › Configurations switches it).
   */
  async function openStandardPart() {
    if (ST.mode === 'assembly' || ST.editPartOf) { if (!(await closeAssembly())) return; }
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
    ST.dirty = true;   // a new part, not a file on disk yet
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
    if (ST.mode === 'sketch') exitSketch();
    ST.part = p;
    hist.clear(); ST.dirty = true; ST.sel = null; ST.pick = null; ST.multi = []; ST.pendingSketch = false;
    ST.view.setHighlight(null);
    rebuild(); renderAll();
    await built();
    syncPlanes(); ST.view.view('iso');
    status(t('app.sw.opened_status', { report: r.report.lines[0] }), true);
    await ask({ title: t('app.sw.opened_title', { name }), text: r.report.lines.join(' '), buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
  }

  ui.file.addEventListener('change', async () => { const f = ui.file.files[0]; ui.file.value = ''; if (f) openFile(f); });
  // 2026-11-12: the start card's "Try a sample file" button (and the same entry in the command palette): opens a small bracket through the normal open path
  async function openSample() {
    try {
      if (!(await confirmDiscard())) return;
      const r = await fetch(new URL('./samples/sample-bracket.partcraft.json', import.meta.url));
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await openText(await r.text(), 'sample-bracket.partcraft.json');
    } catch (err) { status(t('app.sample.noload', { why: err && err.message ? err.message : String(err) })); }
  }
  document.querySelector('[data-hint-sample]')?.addEventListener('click', openSample);
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'partcraft-sample', label: t('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }
  async function openFile(f) {
    try { if (await ST.addons?.openFromAddon(f)) return; } catch (e) { status(t('app.file.addon_failed', { name: f.name, error: e && e.message ? e.message : String(e) })); return; }   // an add-on's importer
    if (/\.(step|stp)$/i.test(f.name)) { await importStep(f); return; }
    if (/\.(stl|obj|3mf)$/i.test(f.name)) { await importMesh(f); return; }
    if (/\.kicad_pcb$/i.test(f.name)) { await importKicadBoard(f); return; }   // 0.8 SU.897: a KiCad board, parts as boxes (kicad.js)
    if (/\.3dm$/i.test(f.name)) { await importMesh(f, { threedm: true }); return; }   // 0.7 SU.810: a .3dm's meshes and surfaces as one body (mesh3dm.js)
    // 0.11 PERF.20: a part never needs more than a megabyte or two; an assembly lists up to 50,000 placed parts (about 400 MB), more than that is the model's own cap, said by readAssembly
    const asmFile = /\.partcraft-asm\.json$/i.test(f.name);
    if (f.size > (asmFile ? 400 : 50) * 1024 * 1024) { status(t(asmFile ? 'app.file.too_big_asm' : 'app.file.too_big')); return; }
    if (!/\.json$/i.test(f.name)) { status(t('app.file.unknown_kind', { name: f.name })); return; }
    await openText(await f.text(), f.name);
  }

  const stage = $('[data-stage]');
  ST.dragDepth = 0;
  stage.addEventListener('dragenter', (e) => { if (e.dataTransfer?.types.includes('Files')) { ST.dragDepth++; ui.drop.hidden = false; e.preventDefault(); } });
  stage.addEventListener('dragover', (e) => { if (e.dataTransfer?.types.includes('Files')) e.preventDefault(); });
  stage.addEventListener('dragleave', () => { ST.dragDepth = Math.max(0, ST.dragDepth - 1); if (!ST.dragDepth) ui.drop.hidden = true; });
  stage.addEventListener('drop', async (e) => {
    e.preventDefault(); ST.dragDepth = 0; ui.drop.hidden = true;
    const f = e.dataTransfer?.files?.[0];
    if (f && (await confirmDiscard())) openFile(f);
  });

  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  ST.leaving = false;

  // Autosave and crash recovery (0.4 item 1.2; the shell's app-autosave.js): the open part, or the open assembly, is one
  // document. Every undoable edit goes through hist / asmHist.push (and undo/redo), so those mark it changed; a copy is written a
  // moment later. Saving, New, Open and closing clear `dirty` / `asmDirty`, and the watcher below then drops the copy.
  const autosave = new Autosave({ app: 'partcraft' });
  const asmShown = () => !!ST.asm && !ST.editPartOf;
  // 0.10 PERF.24: the first copy is the whole document, then only the chunks each edit changed (lib/history); the history that is followed is the shown document's
  const adoc = autosave.doc({ id: 'open', name: fileBase(), journal: followJournal(() => (asmShown()
    ? asmHist.journal(() => ST.asm, () => ({ docKind: 'assembly', name: (ST.asm.name || 'assembly') + '.partcraft-asm.json' }))
    : hist.journal(() => ST.part, () => ({ docKind: 'part', name: fileBase() + '.partcraft.json' })))) });
  ST.copyPending = false;
  const noteChange = () => {
    if (!(ST.dirty || ST.asmDirty)) return;
    adoc.rename(asmShown() ? ST.asm.name || 'assembly' : fileBase());
    adoc.changed(); ST.copyPending = true;
  };
  for (const h of [hist, asmHist]) { const push = h.push.bind(h); h.push = (...a) => { const r = push(...a); queueMicrotask(noteChange); return r; }; }
  setInterval(() => { if (ST.copyPending && !ST.dirty && !ST.asmDirty) { adoc.clean(); ST.copyPending = false; } }, 1500);
  ready.then(() => autosave.offer({
    onRecover: async (rec) => {
      const d = rec.data;
      const chunks = d && d.kind === 'chunks';   // 0.10: a base and its changes
      const docKind = chunks ? rec.meta?.docKind : d?.kind;
      let text = d?.text;
      if (chunks) { const doc = recoverState(rec, P.HISTORY_SPEC); text = docKind === 'assembly' ? A.toJSON(doc) : P.toJSON(doc); }
      if (typeof text !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      await openText(text, rec.meta?.name || rec.name || t('app.file.recovered'));
      if (docKind === 'assembly') ST.asmDirty = true; else ST.dirty = true;   // recovered work is not saved to a file yet
      noteChange(); renderAll();
    },
  }));

  window.addEventListener('beforeunload', (e) => { if ((ST.dirty || ST.asmDirty) && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !(ST.dirty || ST.asmDirty) || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    if (ST.asmDirty) {
      const ch = await ask({ title: t('app.asm.unsaved_title'), text: t('app.asm.unsaved_text', { name: ST.asm.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.asm.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
      if (ch === 'cancel') return;
      if (ch === 'save') saveAssembly();
    }
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), ST.dirty || ST.asmDirty ? 0 : 800);
  });

  /** Nested sheets to G-code (0.8 SU.1035 step 4b, fab-08's cam-sheets-ui.js): a program per sheet of a nested DXF through the posts of
   *  this part's Manufacture study (its own posts and the post last chosen), else the built-in ones. */
  async function openSheets() {
    const SU = await import('./cam-sheets-ui.js');
    const mfg = () => ST.part?.studies?.manufacture || null;
    await SU.openSheets({ ask, el, btn, status, download, fileBase,
      posts: () => (mfg()?.posts || []), post: () => mfg()?.setup?.machine?.post });
  }

  /** SU.934 / SU.929 step 5 (print-export.js): the part's mesh scaled for printing, or cut into pieces for the bed (a zip). Actions on the export,
   *  not features: the mesh kernel holds one body (engineer.md § Inbox). */
  async function printExport(cmd) {
    if (ST.mode === 'assembly') { status(t('pexp.part_only'), true); return; }
    await built();
    const PX = await import('./print-export.js');
    const ctx = { ask, el, status, download, mesh: () => ST.regen?.mesh, name: fileBase, manifold: ST.M };
    return cmd === 'export-scaled' ? PX.openScaleDialog(ctx) : PX.openSplitDialog(ctx);
  }

  /** Laser program (0.7 SU.772, laser-ui.js on make-07's panel): the flat patterns of this part's or the assembly's sheet metal
   *  parts (the exact kernel unfolds them) and/or outlines from a DXF; the settings are saved in the file (`laser`). */
  async function openLaser() {
    const LU = await import('./laser-ui.js');
    const flats = [], why = [];
    const isSheet = (pt) => (pt?.features || []).some((f) => SHEET_TYPES.has(f.type));
    const unfold = async (pt, name) => {
      if (!ST.useExact) { why.push(t('nest.from.needs_exact', { name })); return; }
      try { flats.push(await exact.call('sheetFlat', { part: pt })); } catch (e) { why.push(name + ': ' + e.message); }
    };
    if (ST.mode === 'assembly' && ST.asm) { for (const [pid, entry] of Object.entries(ST.asm.parts)) if (ST.asm.instances.some((i) => i.part === pid) && isSheet(entry.part)) await unfold(entry.part, entry.name || pid); }
    else if (isSheet(ST.part)) await unfold(ST.part, ST.part.name || fileBase());
    if (why.length) status(why.join(' '), true);
    const holder = () => (ST.mode === 'assembly' && ST.asm ? ST.asm : ST.part);
    await LU.openLaser({ ask, el, btn, status, download, fileBase,
      getJob: () => holder()?.laser || null,
      setJob: (label, next) => { const h = holder(); if (!h) return; (h === ST.asm ? asmHist : hist).push(h, label); h.laser = next; if (h === ST.asm) ST.asmDirty = true; else ST.dirty = true; },
      confirm: async (text) => (await ask({ title: t('pclaser.title'), text, buttons: [['ok', t('app.btn.ok'), 'pc-btn is-primary'], ['cancel', t('app.btn.cancel'), 'pc-btn']] })) === 'ok' }, flats);
  }

  ui.gl.tabIndex = 0; ui.sk.tabIndex = 0;

  return { fileHost, openFromHost, openVault, savePart, saveOlder, newPart, openStandardPart, openSwExport, noteChange, openSheets, printExport, openLaser };
}
