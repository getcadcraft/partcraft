/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — every word a person reads comes from the add-on (api.t) or the app's language file. */
/**
 * partcraft-api.js — PartCraft's add-on API 1.0 and its own add-on loader (0.5 AO.7; docs/ADDONS-SPEC.md §5.7).
 * Once PartCraft's manifest says "addons": "own", the shell's boot (app-addons.js) steps aside and partcraft.js calls
 * startAddons({ host, … }) with its workspace host (the object workspaces already get) and the hooks listed below.
 *
 *   api = { ...sharedApi (ui.toolbarGroup, ui.panelSection, ui.settingsSection, files.importer / exporter),
 *           part: { get, commit, addFeature, onChange, mesh }, selection: { get, feature }, select(id),
 *           model (API 1.1): { addBodies(group, bodies, { name, label, fit }), addBody(body, { group }), removeBodies(group), bodies() } — display bodies,
 *           commands: { add, run, has }, props: { section }, ui.panelTab, status,
 *           study (API 1.2): { get(key), set(key, value, label), regen(), worker(modules, { name }) } — studies as data, the last rebuild, the compute worker }
 * api.model (1.1): boxes or meshes with a name, colour, opacity and transform (addons/addon-bodies.js) drawn in the 3D viewport, kept in the
 * part file under the add-on's id, placed or removed as a group in ONE undo step. Display only: never part of the solid (no mass, no STL).
 *
 * The part is PartCraft's own (part.js: { features[], seq, rollback, … }); every edit is host.commit(label, fn): one undo step,
 * then a rebuild. Commands are named "<add-on id>:<name>" inside PartCraft and run from the add-on's buttons or run(name).
 * Importers return { part } (a whole part, read with part.js readPart like a .json file) or { features: [{ type, props }] }
 * (added in one step). Exporters get { part, mesh, name } (mesh = the last rebuild's triangles).
 *
 * The app reads what add-ons registered through the object startAddons returns (also window.ccAddons):
 *   runCommand(name) → true when it was an add-on's · propsSections(selection) → [{ key, label, fields: [{ label, value,
 *   edit?(v) }] }] · importerFor(name) / importers() / exporters() · panelTabs() (render on show).
 * DOM-free except ui.panelTab: bin/test-addons-model-apps.mjs runs it in Node.
 */

import { AddonLoader, sharedApi } from '../addons.js';
import * as P from '../part.js';
import { installTrust, bundledOnly, NO_PACKAGES } from './trust.js';
import * as AB from './addon-bodies.js';

/** 1.1 (0.8 DC.117): api.model, display bodies in the viewport (additive; an add-on that asks for "1.0" still loads). */
/** 1.2 (0.8 SU.891, add-on advanced-sim): api.study, the part's studies as data, the last rebuild read-only and the app's compute worker (additive). */
/** 1.3 (0.9 SU.908c, add-on fem-solid): api.view, picking faces of the part in the 3D view and marking them (additive). */
export const PARTCRAFT_API_VERSION = '1.3';
const WORKER_MODULE = /^[a-z0-9][a-z0-9-]{0,40}\.js$/;
const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
const clone = (v) => (v === undefined || v === null ? v ?? null : JSON.parse(JSON.stringify(v)));

/**
 * The API one add-on gets. ctx = { host (PartCraft's workspace host: part, regen, commit, renderAll, renderPanel, status,
 * downloadBlob), selection() → { kind, id, name } | null, select(featureId), registry (importers/exporters), commands (Map),
 * props (Map), tabs (Map), find(selector) (follows popped-out panels), showTab(key) }.
 */
export function makePartcraftApi(base, addon, ctx) {
  const shared = sharedApi(base, addon, ctx.registry);
  const id = addon.id;
  const track = (fn) => base.onDeactivate(fn);
  const listen = new Set();

  const part = {
    /** A copy of the part (features, parameters …). */
    get: () => clone(ctx.host.part),
    /** One undo step, then a rebuild: fn(part, P) changes the live part (P = part.js: addFeature, featureById, deleteFeatures …). */
    commit: (label, fn) => ctx.host.commit(String(label || addon.name), () => fn(ctx.host.part, P)),
    /** A feature added in one undo step → its id. An unknown feature type is refused. */
    addFeature(type, props = {}, label = null) {
      let made = null;
      try { ctx.host.commit(String(label || addon.name), () => { made = P.addFeature(ctx.host.part, String(type), clone(props) || {}); }); }
      catch (e) { if (!made) throw new Error('part.addFeature: "' + type + '" is not a PartCraft feature type'); throw e; }
      return made?.id ?? null;
    },
    onChange(fn) { listen.add(fn); const off = () => listen.delete(fn); track(off); return off; },
    /** The last rebuild's mesh ({ positions, indices, … } as PartCraft's exporters use it), or null. */
    mesh: () => ctx.host.regen?.mesh || null,
  };
  ctx.changeListeners.add((why) => { for (const fn of listen) { try { fn(why); } catch (e) { base.log('onChange threw', e); } } });

  const model = {
    /** Place (or replace) a group of display bodies in the viewport: one undo step. bodies = [{ name, color, box | mesh, opacity?, at?, rotY? }] (mm, Y up). → count placed. */
    addBodies(group, bodies, { name = '', label = null, fit = true } = {}) {
      let n = 0;
      AB.setGroup({}, id, String(group), { name, bodies });   // refused here, before an undo step is made, when the group id or the bodies are no good
      ctx.host.commit(String(label || addon.name), () => { n = AB.setGroup(ctx.host.part, id, String(group), { name, bodies }); });
      if (fit) ctx.bodies?.fit?.(); else ctx.bodies?.sync?.();
      return n;
    },
    /** One body added to a group (made if it is new): one undo step. */
    addBody(body, { group = 'default', label = null, fit = false } = {}) {
      const have = (ctx.host.part.addonBodies?.[id]?.[group]) || { name: '', bodies: [] };
      return model.addBodies(group, [...have.bodies, body], { name: have.name, label, fit });
    },
    /** Take a group away (one undo step) → true when it was there. */
    removeBodies(group, { label = null } = {}) {
      if (!ctx.host.part.addonBodies?.[id]?.[String(group)]) return false;
      ctx.host.commit(String(label || addon.name), () => { AB.removeGroup(ctx.host.part, id, String(group)); });
      ctx.bodies?.sync?.();
      return true;
    },
    /** This add-on's groups: [{ group, name, count }]. */
    bodies: () => AB.groupsOf(ctx.host.part, id).map(({ group, name, count }) => ({ group, name, count })),
  };

  const commands = {
    /** A command of its own; run it from the add-on's toolbar group (api.ui.toolbarGroup tool run) or api.commands.run. */
    add(name, fn, { label = name } = {}) {
      if (!SAFE_ID.test(String(name)) || typeof fn !== 'function') throw new Error('commands.add: name and fn');
      const key = id + ':' + name;
      if (ctx.commands.has(key)) throw new Error('commands.add: "' + name + '" is already added');
      ctx.commands.set(key, { addon: id, name, label: String(label), run: () => fn(api) });
      const off = () => ctx.commands.delete(key);
      track(off);
      return off;
    },
    run: (name) => { const c = ctx.commands.get(id + ':' + name); return c ? c.run() : undefined; },
    has: (name) => ctx.commands.has(id + ':' + name),
  };

  const props = {
    /** A section in the Properties panel: fields(selection, part) → [{ label, value, edit?(value) }] or []. */
    section({ key = id, label, fields } = {}) {
      if (key !== id && !String(key).startsWith(id + '.')) throw new Error('props.section: the key must be "' + id + '" or start with "' + id + '."');
      if (typeof fields !== 'function') throw new Error('props.section: fields(selection, part)');
      ctx.props.set(key, { key, addon: id, label: String(label || addon.name), fields });
      const off = () => ctx.props.delete(key);
      track(off);
      return off;
    },
  };

  const ui = { ...shared.ui, panelTab: panelTabMaker(ctx, id, base, track, '.pc-tabs[data-right-tabs]', 'pc-tab', 'pc-sec-') };

  /** API 1.2: the part's studies (part.studies, read by the reader each workspace registered), changed as data: one undo step, no kernel run. */
  const study = {
    get: (key) => clone(ctx.host.study ? ctx.host.study(String(key)) : null),
    set: (key, value, label = null) => { if (typeof ctx.host.setStudy !== 'function') throw new Error('study.set: this PartCraft cannot change studies'); ctx.host.setStudy(String(key), clone(value), String(label || addon.name)); },
    /** The last rebuild, read-only (do not change it): { mesh, faces, stats, named, exact } or null. */
    regen: () => { const r = ctx.host.regen; return r && r.mesh ? { mesh: r.mesh, faces: r.faces || [], stats: r.stats || null, named: !!r.named, exact: !!r.exact } : null; },
    /** The app's compute worker on its own modules (file names in PartCraft's folder, e.g. ['tet-worker.js', 'nl-worker.js']) → { call(op, args, { transfer }), terminate() }. */
    worker: (modules, opts = {}) => {
      if (!Array.isArray(modules) || !modules.length || !modules.every((m) => WORKER_MODULE.test(String(m)))) throw new Error('study.worker: modules are PartCraft file names');
      if (typeof ctx.host.computeWorker !== 'function') throw new Error('study.worker: no compute worker here');
      return ctx.host.computeWorker(modules.map(String), { name: String(opts.name || addon.name) });
    },
  };
  /** API 1.3: faces of the part's last rebuild, picked in the 3D view. A face is named by { name, at } (the part's own stable reference: it survives a rebuild). */
  const view = {
    /** [{ index, name, at, type, area }] of the last rebuild (empty when the rebuild has no named faces). */
    faces: () => ((ctx.host.regen && ctx.host.regen.faces) || []).map((f, index) => ({ index, name: f.name, at: f.at ? f.at.map((v) => +v.toFixed(6)) : null, type: f.type, area: f.area })).filter((f) => f.name && f.at),
    /** While active, a click on a face in the view calls fn({ index, ref: { name, at }, shift }) and does nothing else; → stop(). */
    pickFaces(fn) {
      if (typeof fn !== 'function') throw new Error('view.pickFaces: fn');
      const entry = { fn, addon: id };
      ctx.pickers.add(entry);
      const off = () => { ctx.pickers.delete(entry); ctx.faceView?.hover?.(null); };
      track(off);
      return off;
    },
    /** Mark faces (face refs) in the view; [] clears. */
    mark(refs) { ctx.faceView?.mark?.(view.resolve(refs || []).indices); },
    /** Face refs → indices into the last rebuild's faces (nearest face of the same name); `gone` counts refs that found none. */
    resolve(refs) {
      const faces = (ctx.host.regen && ctx.host.regen.faces) || [], indices = [];
      let gone = 0;
      for (const r of refs) {
        let best = -1, bd = Infinity;
        faces.forEach((f, i) => { if (f.name !== r.name || !f.at) return; const d = Math.hypot(f.at[0] - r.at[0], f.at[1] - r.at[1], f.at[2] - r.at[2]); if (d < bd) { bd = d; best = i; } });
        if (best >= 0) indices.push(best); else gone++;
      }
      return { indices, gone };
    },
  };
  const api = {
    ...shared, ui, part, model, commands, props, study, view,
    selection: { get: () => clone(ctx.selection()), feature: () => { const s = ctx.selection(); return s && s.kind === 'feature' ? clone(P.featureById(ctx.host.part, s.id)) : null; } },
    select: (fid) => ctx.select(fid),
    status: (text) => ctx.host.status(String(text)),
  };
  return api;
}

/** ui.panelTab for an app whose right panel has a tablist (PartCraft, BimCraft): a tab + section of the add-on's own. */
export function panelTabMaker(ctx, id, base, track, listSel, tabClass, paneIdPrefix) {
  return function panelTab({ id: tid, title, render } = {}) {
    if (!SAFE_ID.test(String(tid))) throw new Error('ui.panelTab: id');
    const key = 'addon-' + (id + '-' + tid).replace(/[^a-z0-9-]/g, '-');
    ctx.tabs.set(key, { addon: id, title: String(title || tid), render });
    track(() => ctx.tabs.delete(key));
    if (!ctx.find || typeof document === 'undefined') return null;
    const list = ctx.find(listSel);
    if (!list) return null;
    const btn = document.createElement('button');
    Object.assign(btn, { type: 'button', className: tabClass, id: tabClass + '-' + key, textContent: String(title || tid), tabIndex: -1 });
    btn.setAttribute('role', 'tab'); btn.setAttribute('aria-selected', 'false'); btn.setAttribute('aria-controls', paneIdPrefix + key);
    btn.dataset.tab = key; btn.dataset.rtab = key; btn.dataset.addon = id;
    const pane = document.createElement('section');
    Object.assign(pane, { id: paneIdPrefix + key, hidden: true });
    pane.setAttribute('role', 'tabpanel'); pane.setAttribute('aria-labelledby', btn.id);
    pane.dataset.rpane = key; pane.dataset.addon = id;
    pane.addEventListener('cc-tab-shown', () => { try { pane.replaceChildren(); render?.(pane); } catch (e) { base.log('panelTab render threw', e); } });
    btn.addEventListener('click', () => ctx.showTab?.(key));
    list.append(btn);
    list.parentElement.append(pane);
    track(() => { if (btn.getAttribute('aria-selected') === 'true') ctx.showTab?.(null); btn.remove(); pane.remove(); });
    return pane;
  };
}

/** The app side of what add-ons registered: commands, Properties sections, tabs. Shared by PartCraft and BimCraft. */
export function appSide(ctx, registry) {
  return {
    runCommand(key) { const c = ctx.commands.get(String(key)); if (!c) return false; try { c.run(); } catch (e) { console.warn('add-on command failed:', e); } return true; },   // i18n-ignore
    commandList: () => [...ctx.commands.entries()].map(([key, c]) => ({ key, addon: c.addon, name: c.name, label: c.label })),
    /** Properties sections for a selection: [{ key, label, fields: [{ label, value, edit? }] }]; a throwing section is skipped. */
    propsSections(selection, model) {
      const out = [];
      for (const s of ctx.props.values()) {
        let fields;
        try { fields = s.fields(clone(selection), model); } catch (e) { console.warn('add-on Properties section failed:', e); continue; }   // i18n-ignore
        if (!Array.isArray(fields) || !fields.length) continue;
        out.push({ key: s.key, label: s.label, fields: fields.filter((f) => f && typeof f.label === 'string').map((f) => ({ label: f.label, value: f.value === null || f.value === undefined ? '' : String(f.value), ...(typeof f.edit === 'function' ? { edit: f.edit } : {}) })) });
      }
      return out;
    },
    panelTabs: () => [...ctx.tabs.entries()].map(([key, x]) => ({ key, addon: x.addon, title: x.title })),
    importers: () => [...registry.importers.values()],
    exporters: () => [...registry.exporters.values()],
    importerFor: (name) => { const n = String(name || '').toLowerCase(); return [...registry.importers.values()].find((e) => e.extensions.some((x) => n.endsWith(x))) || null; },
  };
}

/**
 * Start PartCraft's add-ons. ctx = { host, selection(), select(id), find(selector), showTab(key) } plus loader options for tests
 * (packages, storage, importer, fetchJson, base, verify, bundledOnly). The app calls changed(why) after each rebuild, and on
 * open: importer → { part } | { features }, handled by openFromAddon(file).
 */
export async function startAddons(ctx) {
  const registry = { importers: new Map(), exporters: new Map(), listeners: new Set(), changed() { for (const fn of this.listeners) { try { fn(); } catch { /* app */ } } } };
  const full = { ...ctx, registry, commands: new Map(), props: new Map(), tabs: new Map(), changeListeners: new Set(), pickers: new Set() };
  const opts = { app: 'partcraft', appName: ctx.appName || 'PartCraft', apiVersion: PARTCRAFT_API_VERSION, makeApi: (b, a) => makePartcraftApi(b, a, full) };
  for (const k of ['packages', 'storage', 'importer', 'fetchJson', 'base', 'locale', 'timeout']) if (ctx[k] !== undefined) opts[k] = ctx[k];
  if (ctx.bundledOnly ?? bundledOnly()) opts.packages = NO_PACKAGES;
  if (!ctx.verify) installTrust(AddonLoader); else AddonLoader.verify = ctx.verify;
  const loader = new AddonLoader(opts);
  const side = appSide(full, registry);
  const api = {
    loader, ...side,
    list: () => loader.list(), installPackage: (p) => loader.installPackage(p), uninstall: (id) => loader.uninstall(id),
    onChange: (fn) => { registry.listeners.add(fn); const off = loader.on(fn); return () => { registry.listeners.delete(fn); off(); }; },
    /** The app calls this on a click in the view (API 1.3): true when an add-on is picking faces and took the click. */
    pick(h, e) {
      if (!full.pickers.size) return false;
      const rg = ctx.host.regen, p = [...full.pickers].pop();
      if (h && h.kind === 'face' && h.face !== undefined && h.face >= 0 && rg && rg.faces && rg.faces[h.face] && rg.faces[h.face].name) {
        const f = rg.faces[h.face];
        try { p.fn({ index: h.face, ref: { name: f.name, at: f.at.map((v) => +v.toFixed(6)) }, shift: !!(e && e.shiftKey) }); } catch (err) { console.warn('add-on face pick failed:', err); }   // i18n-ignore
      }
      return true;
    },
    /** The app calls this on hover: true while an add-on is picking (the face under the pointer is lit). */
    hover(h) {
      if (!full.pickers.size) return false;
      const tf = ctx.host.regen && ctx.host.regen.mesh && ctx.host.regen.mesh.triFace, tris = [];
      if (h && h.kind === 'face' && h.face >= 0 && tf) for (let t = 0; t < tf.length; t++) if (tf[t] === h.face) tris.push(t);
      ctx.faceView?.hover?.(tris.length ? tris : null);
      return true;
    },
    /** The app calls this after every change (rebuild, undo, open): add-ons' part.onChange hears it. */
    changed: (why) => { for (const fn of full.changeListeners) fn(why); },
    /** An add-on importer for this file → true when it opened it ({ part } replaces the part; { features } adds them). */
    async openFromAddon(file) {
      const imp = side.importerFor(file?.name);
      if (!imp) return false;
      const data = await imp.read(file);
      if (data && data.part) {
        const r = P.readPart(data.part);   // checked like a .json file someone opened; throws with the reason
        ctx.host.commit(file.name, () => { const h = ctx.host.part; for (const k of Object.keys(h)) delete h[k]; Object.assign(h, r); });
        return true;
      }
      if (data && Array.isArray(data.features)) {
        ctx.host.commit(file.name, () => { for (const f of data.features) P.addFeature(ctx.host.part, String(f.type), clone(f.props) || {}); });
        return true;
      }
      throw new Error('the add-on\'s importer returned neither a part nor features');   // i18n-ignore
    },
    /** What an exporter's write() gets. */
    exportInput: (name) => ({ part: clone(ctx.host.part), mesh: ctx.host.regen?.mesh || null, name }),
  };
  if (typeof window !== 'undefined' && !ctx.noGlobal) window.ccAddons = api;
  await loader.start();
  return api;
}
