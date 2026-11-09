/* SPDX-License-Identifier: Apache-2.0 */
/**
 * surfaces-pc.js — PartCraft's thin adapter for the Surfaces workspace (0.8 round 3, part_PART_3; SU.747b, cc-nurbs mounted). The panel, its
 * session and its three.js drawing are the shared cc-nurbs-ui (./nurbs-ui/, byte copies of lib/nurbs-ui via `node tools/nurbs-ui/sync.mjs
 * partcraft`); the geometry is cc-nurbs (./nurbs/, `node tools/nurbs/sync.mjs partcraft`). ModelCraft's adapter is surfaces-mc.js; SuperCad
 * Studio gets its own. What is PartCraft's here, and only here:
 *   - the patch set is kept in the part file as a study (`part.studies.nurbs`, cc-nurbs' doc.js shape; untrusted on the way in: cc-nurbs
 *     cleans it), outside the part's undo like ModelCraft's — the panel has its own Undo / Redo (one step per command);
 *   - PartCraft works in millimetres, as cc-nurbs does (display scale 1);
 *   - picking in 3D: a click on the view while a command waits for a curve, surface, edge or end (capture phase, before the part's own
 *     picking), and points clicked on the part's faces or, off the part, on the ground plane (y = 0); Enter or a double click ends them;
 *   - continuity problems go to the shell's Problems (source 'partcraft.nurbs', fix "Match" = surface.match, one panel undo step).
 * The surfaces are their own set beside the solid: they do not change the part's features or its build — until a NURBS solid is BAKED
 * (0.9 DC.54, session nurbs-09): Surfaces › Bake (or Bake into the part in the Solids list) adds the solid to the part as a body from a
 * mesh (an `import` feature with `mesh`, the same as an opened STL; its faces as triangles within the tolerance asked, Y up as drawn
 * here), added, cut or intersected, ONE part undo step; the patch set keeps the exact solid. The panel's solid Booleans run on the
 * part's own manifold-3d (host.manifold).
 * Scan fit (0.9 SU.1082, session reverse-nurbs-09): the panel's Scan group fits trimmed planes, cylinders and free-form patches to the part's built
 * mesh (host.regen.mesh, the same space as the surfaces) and then stitches them to a solid; cc-nurbs reverse.js does the work.
 */
import * as THREE from 'three';
import * as N from './nurbs/index.js';
import { Session } from './nurbs-ui/session.js';
import { NurbsDisplay } from './nurbs-ui/display.js';
import { mountSurfacesPanel } from './nurbs-ui/panel.js';
import * as HULL from './hull/fair.js';   // 0.8 EG.26: fairness of hull lines (cc-hull, lib/hull; node tools/hull/sync.mjs partcraft)
import { surfacesToSolid } from './hull/solid.js';   // 0.8 EG.26 (D7.45, decided 2026-10-29): surfaces to solid, so a hull drawn as surfaces can float
import * as HYDRO from './hydrostatics.js';
import * as MI from './meshimport.js';   // 0.9 DC.54: the bake is a body from a mesh, checked and kept as an opened STL is
import { registerWorkspace } from './workspaces.js';
import { registerStudyReader } from './part.js';
import { t } from './i18n.js';

export const KEY = 'nurbs';
// the file's patch set: cleaned by cc-nurbs (caps, names, versions); a broken one is refused here and the part opens without it
registerStudyReader(KEY, (raw) => JSON.parse(N.doc.toJSON(N.doc.fromJSON(JSON.stringify(raw)))));

const S = { session: null, display: null, root: null, panel: null, collecting: false, quiet: false, view: { mode: 'shaded', cvs: false }, points: null, src: null, host: null, onDown: null, onCam: null };

function ensure(host) {
  if (S.session) return;
  S.host = host;
  S.root = new THREE.Group(); S.root.name = 'surfaces';
  S.display = new NurbsDisplay(THREE, N, S.root, { scale: 1 });
  S.session = new Session(N, {
    onChange: (why) => {
      if (why === 'doc' && !S.quiet) {
        const p = S.host.part;
        if (S.session.doc.items.length) (p.studies ||= {})[KEY] = JSON.parse(N.doc.toJSON(S.session.doc));
        else if (p.studies) { delete p.studies[KEY]; if (!Object.keys(p.studies).length) delete p.studies; }
        S.host.markDirty?.();
      }
      draw();
      S.panel?.refresh();
      if (why === 'doc' || why === 'load') S.src?.invalidate();
    },
  });
  problems(host);
}
/** The part's patch set into the session (a part opened, New, or another file). */
function fromPart(host) {
  const j = host.part?.studies?.[KEY];
  S.quiet = true;
  try { S.session.load(j && typeof j === 'object' ? j : null); } catch (e) { S.session.load(null); host.status(t(e && e.code ? e.code : 'nurbs.ui.err.failed', (e && e.vars) || { error: String(e?.message || e) }), true); }
  finally { S.quiet = false; }
}
function draw() {
  if (!S.display || !S.host) return;
  const picks = S.session.cmd ? S.session.picks : [];
  S.display.draw(S.session.doc, { ...S.view, picks, tol: 0.02 });
  S.display.view(S.host.view.camera.position.toArray());
  S.host.view.render();
}

/** Continuity as shared Problems (rule 29): the patch set's own measured G0–G2 against what each edge wants. */
function problems(host) {
  const go = () => {
    const CP = window.ccProblems;
    if (!CP || S.src) return;
    S.src = CP.source({ id: 'partcraft.nurbs', kind: 'check', label: t('nurbs.ui.title'),
      run: () => [...(S.session.doc.items.some((i) => i.kind === 'surface') ? N.doc.continuity(S.session.doc).problems : []), ...HULL.fairProblems(N, S.session.doc, { source: 'partcraft.nurbs' })],
      fix: async (p, f) => {
        if (f.action === 'hull.fair') return fairIds(host, [f.args.id], 1) > 0;
        if (f.action !== 'nurbs.match') return false;
        const r = S.session.match(f.args, t('nurbs.ui.undo.label') + ': ' + t('nurbs.cmd.match_surface'));
        if (!r.ok) host.status(t(r.error.key, r.error.vars), true);
        return r.ok;
      } });
    S.src.invalidate();
  };
  if (typeof document !== 'undefined' && document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }
}

// ---- EG.26: fairing hull lines (stations, waterlines, buttocks): the fewest cubic control points within the tolerance, no new inflection ----
/** Fair the curves `ids` within `tol` mm: one panel undo step for all of them. → how many were changed. */
function fairIds(host, ids, tol) {
  let doc = S.session.doc, n = 0;
  const lines = [];
  for (const id of ids) {
    const it = N.doc.item(doc, id);
    if (!it || it.kind !== 'curve') continue;
    const r = HULL.fairCurve(N, it.curve, { tol });
    if (!r.fair || r.cvs >= it.curve.cvs.length && r.after.roughness >= r.before.roughness) continue;
    doc = N.doc.replace(doc, id, r.curve); n++;
    lines.push(t('hull.faired_one', { name: it.name || id, cvs: r.cvs, was: it.curve.cvs.length, dev: +r.deviation.toFixed(3), inf: r.before.inflections }));
  }
  if (n) S.session.push(doc, t('hull.undo'));
  host.status(n ? t('hull.faired', { n }) + ' ' + lines.join(' ') : t('hull.nothing'), !n);
  return n;
}
async function fairDialog(host) {
  const curves = S.session.doc.items.filter((i) => i.kind === 'curve' && !i.hidden);
  if (!curves.length) { host.status(t('hull.no_curves'), true); return; }
  const rows = curves.map((it) => ({ it, f: HULL.fairness(N, it.curve) }));
  const el = host.el, tol = el('input', { type: 'number', className: 'pc-input', value: '1', min: '0.001', step: 'any', inputMode: 'decimal', dataset: { hullTol: '1' } });
  const list = el('ul', { className: 'pc-note', dataset: { hullList: '1' } }, ...rows.map(({ it, f }) => el('li', {}, t('hull.row', { name: it.name || it.id, inf: f.inflections, k: +f.maxK.toPrecision(3), jump: +f.maxJump.toPrecision(3), rough: +f.roughness.toPrecision(3) }))));
  const body = el('div', { className: 'pc-form', dataset: { hullDialog: '1' } }, el('p', { className: 'pc-note' }, t('hull.intro')), list,
    el('label', { className: 'pc-field' }, el('span', {}, t('hull.tol')), tol));
  const key = await host.ask({ title: t('hull.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['fair', t('hull.fair'), 'pc-btn is-primary']] });
  if (key !== 'fair') return;
  const tl = Number(tol.value);
  if (!(tl > 0)) { host.status(t('hull.bad_tol'), true); return; }
  fairIds(host, rows.filter(({ f }) => f.inflections || f.maxJump > 1e-4 * Math.max(1, f.maxK)).map(({ it }) => it.id), tl);
}

// ---- EG.26: float the surfaces. Patches that enclose a hull become one closed solid (cc-hull solid.js), then the hydrostatics read it ----
async function floatDialog(host) {
  const surfaces = S.session.doc.items.filter((i) => i.kind === 'surface' && !i.hidden);
  if (!surfaces.length) { host.status(t('hull.float.none'), true); return; }
  const el = host.el;
  const inp = (v, ds, extra = {}) => el('input', { type: 'number', className: 'pc-input', value: v, step: 'any', inputMode: 'decimal', dataset: ds, ...extra });
  const draft = inp('1', { floatDraft: '1' }, { min: '0.001' }), kg = inp('', { floatKg: '1' });
  const mirror = el('select', { className: 'pc-input', dataset: { floatMirror: '1' } }, el('option', { value: '' }, t('hull.float.mirror.none')), el('option', { value: 'z' }, t('hull.float.mirror.z')), el('option', { value: 'x' }, t('hull.float.mirror.x')), el('option', { value: 'y' }, t('hull.float.mirror.y')));
  const unit = el('select', { className: 'pc-input', dataset: { floatUnit: '1' } }, ...['m', 'mm', 'ft'].map((u) => el('option', { value: u }, u)));
  const water = el('select', { className: 'pc-input', dataset: { floatWater: '1' } }, el('option', { value: 'sea' }, t('hull.float.sea')), el('option', { value: 'fresh' }, t('hull.float.fresh')));
  const out = el('div', { className: 'pc-note', dataset: { floatOut: '1' }, role: 'status' });
  const field = (label, c) => el('label', { className: 'pc-field' }, el('span', {}, label), c);
  const run = () => {
    out.replaceChildren();
    const sol = surfacesToSolid(N, S.session.doc, { n: 32, mirror: mirror.value || null });
    if (!sol.closed) { out.append(el('p', { className: 'pc-err' }, t('hull.float.open', { edges: sol.openEdges, bad: sol.nonManifold, n: surfaces.length }))); return; }
    const a = { draft: Number(draft.value), length_unit: unit.value, water: water.value };
    if (kg.value !== '') a.kg = Number(kg.value);
    try {
      const r = HYDRO.describe({ mesh: { positions: sol.positions, indices: sol.indices } }, a);
      const rows = [['hull.float.disp', r.displacement_t + ' t'], ['hull.float.vol', r.volume_m3 + ' m³'], ['hull.float.kb', r.kb_m + ' m'], ['hull.float.lcb', r.lcb_m + ' m'], ['hull.float.km', r.km_transverse_m + ' m'], ['hull.float.wp', r.waterplane.area_m2 + ' m²'], ['hull.float.cb', String(r.cb)]];
      if (r.stability) rows.push(['hull.float.gm', r.stability.gm_m + ' m'], ['hull.float.gz', (r.stability.max_gz_m ?? '–') + ' m at ' + (r.stability.max_gz_at_deg ?? '–') + '°']);
      out.append(el('p', {}, t('hull.float.solid', { tri: sol.triangles, capped: sol.capped })), el('ul', { dataset: { floatRows: '1' } }, ...rows.map(([k, v]) => el('li', {}, t(k) + ': ' + v))), el('p', { className: 'pc-note' }, r.notes[1]));
    } catch (e) { out.append(el('p', { className: 'pc-err' }, e.message)); }
  };
  const body = el('div', { className: 'pc-form', dataset: { floatDialog: '1' } }, el('p', { className: 'pc-note' }, t('hull.float.intro', { n: surfaces.length })),
    field(t('hull.float.mirror'), mirror), field(t('hull.float.unit'), unit), field(t('hull.float.draft'), draft), field(t('hull.float.water'), water), field(t('hull.float.kg'), kg), out);
  for (const c of [mirror, unit, draft, water, kg]) c.addEventListener('input', run);   // the answer follows the inputs
  run();
  await host.ask({ title: t('hull.float.title'), body, buttons: [['cancel', t('hull.float.close'), 'pc-btn is-primary']] });
}

// ---- 0.9 DC.54: bake a NURBS solid into the part — a body from a mesh (import feature), added, cut or intersected, one part undo step ----
async function bakeDialog(host, sid = null) {
  ensure(host);
  const list = N.solid.solids(S.session.doc);
  if (!list.length) { host.status(t('nurbs.ui.solid.bake_none'), true); return; }
  const el = host.el;
  const solidSel = el('select', { className: 'pc-input', dataset: { bakeSolid: '1' } }, ...list.map((b) => el('option', { value: b.id, selected: b.id === sid }, (b.name || b.id) + ' (' + t('nurbs.ui.solid.faces', { n: b.faces.length }) + ')')));
  const opSel = el('select', { className: 'pc-input', dataset: { bakeOp: '1' } }, ...['add', 'cut', 'intersect'].map((o) => el('option', { value: o }, t('app.mesh.op.' + o))));
  const tol = el('input', { type: 'number', className: 'pc-input', value: '0.05', min: '0.001', step: 'any', inputMode: 'decimal', dataset: { bakeTol: '1' } });
  const field = (label, c) => el('label', { className: 'pc-field' }, el('span', {}, label), c);
  const body = el('div', { className: 'pc-form', dataset: { bakeDialog: '1' } }, el('p', { className: 'pc-note' }, t('nurbs.ui.solid.bake_intro')),
    field(t('nurbs.ui.solid.bake_which'), solidSel), field(t('app.mesh.op'), opSel), field(t('nurbs.ui.solid.bake_tol'), tol));
  const key = await host.ask({ title: t('nurbs.ui.solid.bake_title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['bake', t('nurbs.ui.solid.bake_pc'), 'pc-btn is-primary']] });
  if (key !== 'bake') return;
  const tl = Number(tol.value);
  if (!(tl >= 0.001 && tl <= 10)) { host.status(t('nurbs.ui.solid.bake_bad_tol'), true); return; }
  const id = solidSel.value, b = N.solid.solid(S.session.doc, id);
  let m;
  try { m = N.solid.mesh(S.session.doc, id, { tol: tl }); } catch (e) { host.status(t(e && e.code ? e.code : 'nurbs.ui.err.failed', (e && e.vars) || { error: String(e?.message || e) }), true); return; }
  const fixed = MI.repairMesh({ positions: m.positions, indices: m.indices });
  if (!fixed.report.closed) { host.status(t('nurbs.err.solid_open', { name: b.name || id, edges: fixed.report.openEdges + fixed.report.nonManifold, gap: tl * 2, tol: tl }), true); return; }
  if (fixed.report.triangles > MI.MAX_TRIS) { host.status(t('nurbs.ui.solid.bake_big', { n: fixed.report.triangles }), true); return; }
  const op = opSel.value;
  const g = host.commit(t('nurbs.ui.solid.bake_undo'), () => host.P.addFeature(host.part, 'import', { file: t('nurbs.ui.solid.bake_file', { name: b.name || id }).slice(0, 200), mesh: MI.encodeMesh(fixed), units: 'mm', up: 'y', op, report: fixed.report }));
  await host.built?.();
  const r = host.regen?.results?.get(g.id);
  if (r && r.status && r.status !== 'ok') host.status(t('nurbs.ui.solid.bake_failed', { why: r.message || r.status }), true);
  else host.status(t('nurbs.ui.solid.baked_pc', { name: b.name || id, n: fixed.report.triangles, volume: Math.round(m.report.volume * 100) / 100, op: t('app.mesh.op.' + op) }), true);
}

// ---- picking: a curve / surface / edge / end for a command, or points on the part or the ground ----
const ray = new THREE.Raycaster();
function rayAt(host, ev) {
  const v = host.view, r = v.canvas.getBoundingClientRect();
  ray.setFromCamera(new THREE.Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1), v.camera);
  return ray;
}
function pointAt(host, ev) {
  const rc = rayAt(host, ev);
  const hit = rc.intersectObjects(host.view.root ? [host.view.root] : [], true)[0];
  if (hit) return hit.point.toArray();
  const g = new THREE.Vector3();
  return rc.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), g) ? g.toArray() : null;
}
function onDown(ev) {
  const host = S.host;
  if (!host || ev.button !== 0) return;
  if (S.points) {
    ev.stopPropagation(); ev.preventDefault();
    const p = pointAt(host, ev);
    if (!p) return;
    const last = S.points.pts[S.points.pts.length - 1];
    if (ev.detail >= 2 || (last && Math.hypot(p[0] - last[0], p[1] - last[1], p[2] - last[2]) < 1e-9)) { finishPoints(); return; }
    S.points.pts.push(p.map((v) => Math.round(v * 1e6) / 1e6));
    host.status(t('nurbs.ui.points.hint', { n: S.points.pts.length }), true);
    return;
  }
  if (!S.collecting) return;
  ray.params.Line = { threshold: 2 };
  const hit = S.display.pick(rayAt(host, ev));
  if (!hit) return;
  ev.stopPropagation(); ev.preventDefault();
  if (!S.session.pick(hit) && !S.session.pick({ id: hit.id })) host.status(t('nurbs.ui.pick.miss'));
}
function finishPoints(cancel = false) {
  const pp = S.points; S.points = null;
  if (pp) pp.done(cancel ? null : pp.pts);
}

function enter(host) {
  ensure(host);
  host.view.setOverlay('surfaces', S.root);
  fromPart(host);
  S.onDown = onDown;
  host.view.canvas.addEventListener('pointerdown', S.onDown, true);
  S.onCam = () => { if (S.display.view(host.view.camera.position.toArray())) host.view.render(); };
  host.view.controls?.addEventListener('change', S.onCam);
  draw();
}
function exit(host) {
  finishPoints(true);
  if (S.onDown) host.view.canvas.removeEventListener('pointerdown', S.onDown, true);
  if (S.onCam) host.view.controls?.removeEventListener('change', S.onCam);
  S.collecting = false;
}

function renderPanel(host, box) {
  ensure(host);
  S.panel?.dispose?.();
  S.panel = mountSurfacesPanel(box, {
    t, session: S.session, get view() { return S.view; },
    setView: (v) => { S.view = { mode: ['shaded', 'zebra', 'curvature'].includes(v.mode) ? v.mode : 'shaded', cvs: !!v.cvs }; draw(); S.panel?.refresh(); },
    collecting: (on) => { if (on !== S.collecting) { S.collecting = on; if (on) host.status(t('nurbs.ui.pick.hint'), true); } },
    pickPoints: () => new Promise((resolve) => { finishPoints(true); S.points = { pts: [], done: resolve }; host.status(t('nurbs.ui.points.hint', { n: 0 }), true); }),
    save: (name, text, type) => host.downloadBlob(name, new Blob([text], { type: type || 'application/octet-stream' }), type),
    open: (exts) => host.openText?.([{ description: exts.join(' '), extensions: exts }]),   // i18n-ignore: file extensions
    base: () => String(host.part?.name || 'part').replace(/[^A-Za-z0-9 _-]/g, '').trim() || 'part',
    print: (text) => host.status(text), range: () => S.display.range(),
    manifold: async () => { if (!host.manifold) throw new Error('manifold'); return host.manifold; },   // i18n-ignore: never shown (the panel words it)
    bake: { label: t('nurbs.ui.solid.bake_pc'), run: (id) => bakeDialog(host, id) },
    // 0.9 SU.1082: the part's built mesh (mm, Y up as drawn, the same space as the surfaces) is the scan to fit planes, cylinders and free-form patches to
    cloud: (map, tol) => { S.display.setCloud(map, tol); host.view.render(); },   // the scan fit's deviation map (0.9 round 2)
    scan: { get: () => { const m = host.regen?.mesh; return m && m.indices && m.indices.length >= 3 ? { positions: m.positions, indices: m.indices } : null; } },
  });
  return t('surf.ws.heading');
}

/** The open part changed (opened, New, undo of a study): read its patch set again while the workspace shows. */
export function partChanged(host) { if (S.session && host.workspace === 'surfaces') { fromPart(host); draw(); S.panel?.refresh(); } }
/**
 * 0.9 DC.54: SuperCad Studio's Surfaces panel sends its patch set here and brings ours back (window.partcraft.surfaces). The set is in this app's own
 * space (mm, Y up as drawn; Super turns its Z-up set a quarter turn before it calls). `receive` adds it as ONE import step of the panel's session
 * (the panel's Undo takes it out) and keeps it in the part's study like any edit; the caller (window.partcraft.surfaces) shows the Surfaces workspace first, because the
 * session's history is only kept while that workspace shows. `snapshot` is the part's current patch set (cleaned), or null.
 */
export function receive(host, other, label) {
  ensure(host);
  if (host.workspace !== 'surfaces') fromPart(host);
  return S.session.importDoc(other, label);
}
export function snapshot(host) {
  if (S.session && host.workspace === 'surfaces') return JSON.parse(N.doc.toJSON(S.session.doc));
  const j = host.part?.studies?.[KEY];
  return j && typeof j === 'object' ? JSON.parse(N.doc.toJSON(N.doc.fromJSON(JSON.stringify(j)))) : null;
}
export const _state = S;   // tests

const TB = { 'surfaces-curve': 'curve.points', 'surfaces-loft': 'surface.loft', 'surfaces-sweep': 'surface.sweep1', 'surfaces-match': 'surface.match' };
const ws = registerWorkspace({
  id: 'surfaces', label: 'surf.ws.label', icon: 'bezier', blurb: 'surf.ws.blurb',
  groups: [{ label: 'surf.tb.group', items: [
    { cmd: 'surfaces-curve', icon: 'bezier2', label: 'surf.tb.curve', title: 'surf.tb.curve.title' },
    { cmd: 'surfaces-loft', icon: 'layers', label: 'surf.tb.loft', title: 'surf.tb.loft.title' },
    { cmd: 'surfaces-sweep', icon: 'bezier', label: 'surf.tb.sweep', title: 'surf.tb.sweep.title' },
    { cmd: 'surfaces-match', icon: 'link-45deg', label: 'surf.tb.match', title: 'surf.tb.match.title' },
    { cmd: 'surfaces-zebra', icon: 'reception-4', label: 'surf.tb.zebra', title: 'surf.tb.zebra.title' },
    { cmd: 'surfaces-fair', icon: 'activity', label: 'surf.tb.fair', title: 'surf.tb.fair.title' },   // 0.8 EG.26
    { cmd: 'surfaces-float', icon: 'water', label: 'surf.tb.float', title: 'surf.tb.float.title' },   // 0.8 EG.26 (D7.45)
    { cmd: 'surfaces-bake', icon: 'box-arrow-in-down', label: 'nurbs.ui.tb.bake', title: 'nurbs.ui.tb.bake.title' },   // 0.9 DC.54
  ] }],
  enter, exit, renderPanel,
  command(cmd, host) {
    ensure(host);
    if (TB[cmd]) { if (S.session.cmd === TB[cmd]) S.session.cancel(); else S.session.start(TB[cmd]); host.renderPanel(); return true; }
    if (cmd === 'surfaces-fair') { fairDialog(host); return true; }
    if (cmd === 'surfaces-float') { floatDialog(host); return true; }
    if (cmd === 'surfaces-bake') { bakeDialog(host); return true; }
    if (cmd === 'surfaces-zebra') { S.view = { ...S.view, mode: S.view.mode === 'zebra' ? 'shaded' : 'zebra' }; draw(); host.renderPanel(); return true; }
    return false;
  },
  keydown(ev) {
    if (S.points && ev.key === 'Enter') { finishPoints(); return true; }
    if (S.points && ev.key === 'Escape') { finishPoints(true); return true; }
    return false;
  },
  rebuilt() { draw(); },
});
// words when shown, never at import (the keys pass registerWorkspace's checks first)
const lazy = (o, f) => { const key = o[f]; Object.defineProperty(o, f, { get: () => t(key), enumerable: true, configurable: true }); };
lazy(ws, 'label'); lazy(ws, 'blurb');
for (const g of ws.groups) { lazy(g, 'label'); for (const it of g.items) { lazy(it, 'label'); lazy(it, 'title'); } }
