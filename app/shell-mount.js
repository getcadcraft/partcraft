/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — PartCraft attaches the shell's seven modules (0.8 round 3, part_PART_3; docs/apps/shell-modules.md § Mounting): calc
 * sheets (EG.18), design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the Ask
 * box (AC.8). The block in mountShellModules is the doc's, unchanged; partHost() is what PartCraft hands over as `host`.
 *
 *   mountPartShell(pc) — pc = { part(), regen(), control, commit(label, fn), undo(), undoDepth(), sel(), selectFeature(id), labelOf(feature),
 *                               name(), path(), markDirty(), statusBar }
 *     → { host, load(part), opened(), selChanged(), changed(), tool(name) }
 * Calc sheets and reasons are kept in the part file as two studies, `part.studies.calcs` and `part.studies.reasons` (registered readers,
 * untrusted: the modules clean what they load; a part without them is written as before). They sit outside the part's undo, like
 * ModelCraft's: a sheet or a reason is never taken back by Ctrl+Z on the geometry, while the parameter a sheet drives changes in one undo
 * step (commit, which rebuilds). PartCraft hands over its parameters (variables and every driveable number, agents.js paramRows /
 * setParameter) and one running total it can stand behind: the part's weight from its material's density and the built volume.
 */
import * as UNITS from './unit-table.js';
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { registerStudyReader } from './part.js';
import { paramRows, setParameter } from './agents.js';
import { t as tr } from './i18n.js';

/** The doc's block (shell-modules.md § Mounting 2). Kept as the doc has it; browser-mount-kit.mjs compares them. */
export function mountShellModules(host) {
  { const f = () => window.ccDocTitleFollow && window.ccDocTitleFollow(host); if (window.ccDocTitleFollow) f(); else window.addEventListener('load', f); }   // 2026-11-09: tab title = document name (one pattern, app-shell.js)
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // DI.1 drawing details — what the app counts, and where the written details are kept in its file
  when('ccDocInfo', 'docinfo', () => {
    ccDocInfo.attach({ read: host.docinfo?.read, persist: (json) => host.file.set('docinfo', json), step: host.step, onChange: host.docinfo?.onChange });   // read() → { units, extents, counts, extra, bytes, path }
    ccDocInfo.registerTools(host.control);
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}

// the two keys live in part.studies; a file's copy is untrusted — kept as an object of bounded size here, cleaned by the module on load
const MAX_KEPT = 2_000_000;
const keepObject = (raw) => {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('not an object');   // i18n-ignore: a reader's refusal, the part reader words it
  if (JSON.stringify(raw).length > MAX_KEPT) throw new Error('too large');   // i18n-ignore: as above
  return JSON.parse(JSON.stringify(raw));
};
// registered when this module loads (part.js refuses a study key without a reader), like every workspace's studies
registerStudyReader('calcs', keepObject);
registerStudyReader('reasons', keepObject);
registerStudyReader('docinfo', keepObject);   // 0.9 DI.1: the drawing details

// a value a calc sheet hands over in its unit → PartCraft's (mm, degrees)
const TO_MM = { mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 }, TO_DEG = { deg: 1, '°': 1, rad: 180 / Math.PI };

/** The first lesson: a part from nothing — a sketch, a solid from it, a hole. Each step is checked on the part, however it is done. */
function lessonsOf(pc) {
  const feats = () => pc.part().features.filter((f) => !f.suppressed);
  const solidOk = () => { const r = pc.regen(); return !!(r && r.stats && r.stats.volume > 0); };
  return {
    lessons: [{
      id: 'partcraft.first-part', title: tr('pc.lesson.first.title'), intro: tr('pc.lesson.first.intro'), level: 'beginner',
      steps: [
        { id: 'sketch', text: tr('pc.lesson.first.sketch'), hints: [tr('pc.lesson.first.sketch.h1'), tr('pc.lesson.first.sketch.h2')], done: { probe: 'pc-sketch' } },
        { id: 'solid', text: tr('pc.lesson.first.solid'), hints: [tr('pc.lesson.first.solid.h1')], done: { probe: 'pc-solid' } },
        { id: 'hole', text: tr('pc.lesson.first.hole'), hints: [tr('pc.lesson.first.hole.h1')], done: { probe: 'pc-hole' } },
      ],
      badge: { title: tr('pc.lesson.first.badge') },
    }],
    probes: {
      'pc-sketch': () => feats().some((f) => f.type === 'sketch' && f.sketch && (f.sketch.entities || []).length > 0),
      'pc-solid': () => solidOk() && feats().some((f) => ['extrude', 'revolve', 'sweep', 'loft'].includes(f.type) && f.op !== 'cut'),
      'pc-hole': () => solidOk() && feats().some((f) => f.type === 'hole' || ((f.type === 'extrude' || f.type === 'revolve') && f.op === 'cut')),
    },
  };
}

/** What PartCraft hands over (the doc's table, § 3). */
export function partHost(pc, keep) {
  const ASSIST = () => assistantPrefs(getHost({ app: 'partcraft' }));
  let packText = '';   // PartCraft's skill pack (AC.5): the Ask box sends it with each question
  import('../../../js/skill-packs.js').then((m) => { packText = (m.PACKS || []).filter((x) => x.app === 'partcraft').map((x) => x.skill).join('\n\n'); }, () => {});
  const listeners = new Set();
  const selected = () => {
    const s = pc.sel();
    if (!s || s.kind !== 'feature') return null;
    const f = pc.part().features.find((x) => x.id === s.id);
    return f ? { kind: 'feature', id: f.id, label: String(pc.labelOf(f) || f.name || f.id).slice(0, 80) } : null;
  };
  const rows = () => paramRows(pc.part());
  const host = {
    control: pc.control,
    units: UNITS,
    step: (label, fn) => pc.commit(label, fn),
    file: { set: (key, json) => keep(key, json) },
    docinfo: {   // DI.1: the built solid's real numbers; nothing while there is no solid (a part is in mm)
      read: () => {
        const r = pc.regen(), st = r && r.stats, mesh = r && r.mesh;
        const counts = { elements: pc.part().features.length };
        if (mesh && mesh.indices && mesh.positions) { counts.triangles = Math.floor(mesh.indices.length / 3); counts.vertices = Math.floor(mesh.positions.length / 3); }
        return { units: 'mm', path: pc.path() || pc.name(), extents: st && st.bbox ? { min: st.bbox.min, max: st.bbox.max } : null, counts };
      },
    },
    params: {
      list: () => { const r = rows(); return [...r.variables.map((v) => v.name), ...r.numbers.map((n) => n.key)]; },
      get: (name) => {
        const r = rows(), v = r.variables.find((x) => x.name === name);
        if (v) return Number.isFinite(v.value) ? v.value : null;
        const n = r.numbers.find((x) => x.key === name || x.label === name);
        if (!n || !Number.isFinite(n.value)) return null;
        return { value: n.value, unit: n.kind === 'angle' ? 'deg' : n.kind === 'count' || n.kind === 'integer' ? '' : 'mm' };
      },
      set: (name, value, unit) => {
        let v = Number(value);
        if (!Number.isFinite(v)) return false;
        if (unit && TO_MM[unit]) v *= TO_MM[unit]; else if (unit && TO_DEG[unit]) v *= TO_DEG[unit];
        let r = null;
        pc.commit(tr('pc.shell.drive', { name }), () => { r = setParameter(pc.part(), name, v); });
        return !!(r && r.ok);
      },
    },
    selection: selected,
    onSelection: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
    select: (el) => { if (el && el.kind === 'feature' && pc.part().features.some((f) => f.id === el.id)) pc.selectFeature(el.id); },
    totals: [{
      id: 'partcraft.weight', measure: 'weight', label: tr('pc.shell.total_weight'),
      read: () => {
        const p = pc.part(), r = pc.regen(), rho = p.material && Number(p.material.density);
        if (!(rho > 0) || !r || !r.stats || !(r.stats.volume > 0)) return null;
        return { value: r.stats.volume * 1e-6 * rho, note: tr('pc.shell.total_weight_note', { material: p.material.name || '' }) };   // mm³ × g/cm³ (part.material, bom.js) → kg
      },
    }],
    statusBar: pc.statusBar || null,
    ...lessonsOf(pc),
    rev: () => pc.undoDepth(),
    document: () => ({ docId: pc.name(), path: pc.path() || '', name: pc.name() }),
    dirty: () => !!pc.dirty,   // 2026-11-09: the tab title's unsaved mark (assets/js/app-doc-title.js)
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'partcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo: (i) => { let n = 0; while (pc.undoDepth() > i && n++ < 200) pc.undo(); },
    version: () => String(pc.undoDepth()),
    askContext: () => ({ file: pc.name(), selection: selected() }),
    skillPack: () => packText,
    _selChanged: () => { for (const fn of listeners) try { fn(); } catch { /* a listener's own trouble */ } },
  };
  return host;
}

/** Mounts everything; the page calls load(part) / opened() after a file opens or New, selChanged() when the selection moves, changed()
 *  after a rebuild, tool(name) where it runs a command. */
export function mountPartShell(pc) {
  const keep = (key, json) => {
    const p = pc.part();
    if (json) (p.studies ||= {})[key] = json;
    else if (p.studies) { delete p.studies[key]; if (!Object.keys(p.studies).length) delete p.studies; }
    pc.markDirty();
  };
  const host = partHost(pc, keep);
  mountShellModules(host);
  const reload = () => {
    const st = pc.part().studies || {};
    if (window.ccCalc) ccCalc.load(st.calcs || null);
    if (window.ccReasons) ccReasons.load(st.reasons || null);
    if (window.ccDocInfo) ccDocInfo.load(st.docinfo || null);
  };
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  document.addEventListener('cc-docinfo-ready', reload, { once: true });
  let lastSel = null;
  return {
    host,
    /** A part was read or made: its sheets and reasons come in, Suggest drops what it had pending, lessons look again. */
    opened() { reload(); if (host.fileOpened) host.fileOpened(tr('pc.shell.opened')); if (window.ccLessons) ccLessons.emit('model', {}); },
    selChanged() { const s = pc.sel(), k = s ? s.kind + ':' + s.id : ''; if (k !== lastSel) { lastSel = k; host._selChanged(); } },
    changed() { if (window.ccLessons) ccLessons.emit('model', {}); if (window.ccTotals) ccTotals.invalidate?.(); },
    tool(name) { host.emit?.('tool', { name }); },
    /** DI.1: call just before the part is written. A part whose details were never written stays as it was; otherwise the save time goes in (outside undo). */
    stampSave() { if (window.ccDocInfo && ccDocInfo.state().written) { const di = ccDocInfo.save(); if (di) (pc.part().studies ||= {}).docinfo = di; } },
  };
}
