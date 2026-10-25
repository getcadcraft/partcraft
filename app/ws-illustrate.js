/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-illustrate.js — the Illustrate workspace (0.7 Track TP, session `illustrate`): manuals made from the design. A manual is
 * a file of its own (illustrate/manual.js) holding a copy of the product, so this workspace draws the manual's scene itself
 * (illustrate/scene3d.js, an overlay; the part is hidden while a manual is open) and keeps its own undo history: every edit
 * is one step of the manual's Doc, and Undo / Redo / Save act on the manual while one is open here.
 *
 * Everything that knows PartCraft (assemblies, the kernels, bom.js rows) is in this file; illustrate/ stays DOM-free and free
 * of PartCraft-only imports (owner decision 1: 0.8 moves it to a shared lib/). The page is touched only inside the hooks.
 *
 * State here: the open manual (S.doc), the selection (instance ids), the view last opened (S.viewId), a live preview of the
 * explode slider (S.preview, not an undo step until the slider is let go), and the 3D scene object.
 */
import { registerWorkspace } from './workspaces.js';
import * as A from './assembly.js';
import { bomRows } from './bom.js';
import { regenerate } from './kernel.js';
import * as MN from './illustrate/all.js';
import * as IM from './illustrate/import.js';
import { createScene3d } from './illustrate/scene3d.js';
import * as AN from './illustrate/annotate.js';
import * as PL from './illustrate/parts-list.js';
import { createOverlay } from './illustrate/overlay-ui.js';
import { invert, apply as applyM } from './illustrate/m4.js';
import * as LA from './illustrate/lineart.js';
import * as LK from './illustrate/look.js';
import * as HL from './illustrate/hlr.js';
import * as SVG from './illustrate/svg.js';
import * as PDF from './illustrate/pdf.js';
import * as CV from './illustrate/canvas.js';
import * as DS from './illustrate/display.js';
import * as IN from './illustrate/instructions.js';
import * as UP from './illustrate/update.js';
import * as TL from './illustrate/timeline.js';
import * as AM from './illustrate/anim.js';
import * as VID from './illustrate/video.js';
import * as VD from './illustrate/viewer-data.js';
import { CSS } from './illustrate/style.js';
import { t } from './i18n.js';

const S = {
  doc: null, fileName: '', sel: new Set(), viewId: null, preview: null, scene3d: null, host: null, busy: false,
  overlay: null, ovOff: null, tool: null, toolPts: [], annSel: null, dragPrev: null, listScope: 'view', open: new Set(),
  animTime: null, playing: false, loop: false, raf: 0,
};
export const _state = S;   // tests read it

// ---------------------------------------------------------------------------------------------- making a manual
/** SHA-256 of text or bytes as hex ('' where the browser has no crypto.subtle, e.g. plain http). */
async function sha256(data) {
  try {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : data;
    const h = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
    return [...h].map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch { return ''; }
}
/** One part built by whichever kernel is in use. */
function buildPart(host, part) {
  if (host.useExact) return host.exact.call('regen', { part });
  if (!host.manifold) throw new Error(t('illustrate.new.kernel_loading'));
  return Promise.resolve(regenerate(part, host.manifold, { checkpoints: false }));
}
/** A manual from a PartCraft assembly (read with assembly.js), its builds and placements. */
export function manualFromAssembly(asm, builds, world, { kind = 'partcraft-assembly', sourceName = '', sha = '' } = {}) {
  const rows = bomRows(asm, builds);
  const parts = {};
  for (const r of rows) {
    const b = builds.get(r.pid);
    if (!b?.mesh) continue;
    parts[r.pid] = { name: r.name, number: r.number, description: r.description, material: r.material, density: r.density, mesh: { positions: b.mesh.positions, indices: b.mesh.indices } };
  }
  const instances = asm.instances.filter((i) => parts[i.part]).map((i) => ({ id: i.id, part: i.part, name: i.name, matrix: world.get(i.id) || i.place }));
  const explodes = (asm.views || []).map((v) => ({ id: v.id, name: v.name, steps: v.steps.map((s) => ({ insts: s.insts.filter((x) => instances.some((i) => i.id === x)), dir: s.dir, dist: s.dist })).filter((s) => s.insts.length) }));
  return MN.newManual({ name: t('illustrate.new.default_name', { name: asm.name }), source: { kind, name: sourceName || asm.name, sha256: sha, assembly: JSON.parse(A.toJSON(asm)) }, parts, instances, explodes });
}
async function newFromPart(host) {
  const p = host.part, mesh = host.regen?.mesh;
  if (!mesh || !p) { host.status(t('illustrate.new.need_part')); return; }
  const asm = A.newAssembly(p.name || 'Part');
  A.insertPart(asm, p);
  const builds = new Map([[asm.instances[0].part, host.regen]]);
  const world = A.placeAll(asm, builds).world;
  const text = A.toJSON(asm);
  took(host, manualFromAssembly(asm, builds, world, { kind: 'partcraft-part', sourceName: p.name, sha: await sha256(text) }));
}
/** The assembly open in Design (only when partcraft.js offers host.assembly(), asked of part-08). */
const openAssembly = (host) => (host.mode === 'assembly' && typeof host.assembly === 'function' ? host.assembly() : null);
async function newFromOpenAssembly(host) {
  const a = openAssembly(host);
  if (!a || !a.asm?.instances.length) { host.status(t('illustrate.new.need_assembly')); return; }
  if (!a.world || a.asm.instances.some((i) => !a.builds.get(i.part)?.mesh)) { host.status(t('illustrate.busy')); return; }
  const text = A.toJSON(a.asm);
  took(host, manualFromAssembly(a.asm, a.builds, a.world, { sourceName: a.asm.name, sha: await sha256(text) }));
}
async function newFromAssemblyText(host, text, name) {
  let asm;
  try { asm = A.readAssembly(text); } catch (e) { await host.ask({ title: t('illustrate.new.cannot', { name }), text: e.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
  const builds = new Map();
  const pids = Object.keys(asm.parts);
  S.busy = true;
  try {
    for (const [k, pid] of pids.entries()) {
      host.status(t('illustrate.new.building', { n: k + 1, of: pids.length, name: asm.parts[pid].name }), true);
      builds.set(pid, await buildPart(host, asm.parts[pid].part));
    }
  } catch (e) { host.status(t('illustrate.new.build_failed', { error: e.message }), true); return; } finally { S.busy = false; }
  const world = A.placeAll(asm, builds).world;
  took(host, manualFromAssembly(asm, builds, world, { sourceName: name, sha: await sha256(text) }));
}
const PRODUCT_ACCEPT = '.glb,.gltf,.obj,.stl,.3mf,.step,.stp';
/** A manual from another 3D file (TP.2): glTF/GLB, OBJ, STL, 3MF keep their tree and names; copies become one part. */
async function newFromProductFile(host, bytes, name) {
  if (/\.(step|stp)$/i.test(name)) { await host.ask({ title: t('illustrate.new.cannot', { name }), text: t('illustrate.import.step'), buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
  if (/\.(gltf|glb)$/i.test(name) && IM.productFormat(name, bytes) === null) return;
  let unit = 'mm';
  if (/\.(stl|obj)$/i.test(name)) {
    const k = await host.ask({ title: t('illustrate.import.unit_title', { name }), text: t('illustrate.import.unit_text'), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['in', t('illustrate.import.unit_in'), 'pc-btn'], ['cm', t('illustrate.import.unit_cm'), 'pc-btn'], ['mm', t('illustrate.import.unit_mm'), 'pc-btn is-primary']] });
    if (k === 'cancel') return;
    unit = k;
  }
  let product;
  try { product = await IM.readProduct(bytes, name, { unit }); } catch (e) {
    const why = e instanceof IM.ImportError ? t('illustrate.import.err.' + e.code, e.vars) : e.message;
    await host.ask({ title: t('illustrate.new.cannot', { name }), text: why, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
    return;
  }
  const { product: p, folded } = IM.sameParts(product);
  took(host, IM.productToManual(p, { name: t('illustrate.new.default_name', { name: p.name }), sourceName: name, sha: await sha256(bytes) }));
  const notes = p.notes.map((n) => t(n.key, n.vars));
  if (folded) notes.unshift(t('illustrate.import.folded', { n: folded }));
  if (notes.length) host.status(notes.join(' '), true);
}
/** A file handed over by another app (ModelCraft, BimCraft: sendHandoff), once partcraft.js passes it here. */
export async function openHandedFile(host, file, from = '') {
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (/\.partcraft-manual\.json$/i.test(file.name)) { start(host, MN.readManual(bytes), file.name); return; }
  await newFromProductFile(host, bytes, file.name);
  if (S.doc && from) host.status(t('illustrate.import.handed', { from }));
}
/** A product was made: a new manual, or (Update from the design) brought into the open one. */
function took(host, made) {
  if (S.updating) { S.updating = false; return updateFrom(host, made); }
  start(host, made, '');
  return undefined;
}
/** Update from the design (TP.10): build the changed source the same way, show what changes, apply it as one undo step. */
async function updateManual(host) {
  if (!S.doc || S.busy) return;
  const kind = S.doc.m.source.kind;
  const open = kind === 'partcraft-assembly' ? openAssembly(host) : kind === 'partcraft-part' && host.mode !== 'assembly' && host.regen?.mesh ? true : null;
  const k = await host.ask({ title: t('illustrate.update.title'), text: t('illustrate.update.text', { name: S.doc.m.source.name || '—' }),
    buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['file', t('illustrate.update.from_file'), 'pc-btn'], ...(open ? [['open', kind === 'partcraft-assembly' ? t('illustrate.update.from_open_asm') : t('illustrate.update.from_open_part'), 'pc-btn is-primary']] : [])] });
  const run = async (fn) => { S.updating = true; try { await fn(); } finally { S.updating = false; } };
  if (k === 'open') await run(() => (kind === 'partcraft-assembly' ? newFromOpenAssembly(host) : newFromPart(host)));
  else if (k === 'file') {
    const accept = kind.startsWith('partcraft') ? '.json,application/json' : PRODUCT_ACCEPT;
    pickFile(host, accept, async (f) => run(async () => (kind.startsWith('partcraft') ? newFromAssemblyText(host, await f.text(), f.name) : newFromProductFile(host, new Uint8Array(await f.arrayBuffer()), f.name))));
  }
}
async function updateFrom(host, made) {
  const plan = UP.planUpdate(S.doc.m, S.doc.meshes, made);
  if (plan.same) {
    if (made.m.source.sha256 !== S.doc.m.source.sha256) edit(host, t('illustrate.undo.update'), (m) => { m.source = structuredClone(made.m.source); }, { redraw: false });
    host.status(t('illustrate.update.same'), true);
    return;
  }
  const { el } = host;
  const sec = (key, list, fmt) => (list.length ? [el('p', { className: 'pc-props-sub' }, t(key, { n: list.length })), el('ul', { className: 'pc-list' }, ...list.slice(0, 40).map((x) => el('li', {}, fmt(x))))] : []);
  const body = el('div', { className: 'il-update', dataset: { ilUpdate: '1' } },
    ...sec('illustrate.update.moved', plan.moved, (x) => t('illustrate.update.moved_row', { name: x.name, mm: x.dist.toFixed(1) })),
    ...sec('illustrate.update.reshaped', plan.reshaped, (x) => x.name),
    ...sec('illustrate.update.added', plan.added, (x) => x.name),
    ...sec('illustrate.update.removed', plan.removed, (x) => x.name + (x.annotations.length || x.keys ? ' — ' + t('illustrate.update.removed_with', { a: x.annotations.length, k: x.keys }) : '')),
    ...sec('illustrate.update.renamed', plan.renamed, (x) => x.from + ' → ' + x.to),
    el('p', { className: 'pc-note' }, t('illustrate.update.note')));
  const k = await host.ask({ title: t('illustrate.update.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['go', t('illustrate.update.go'), 'pc-btn is-primary']] });
  if (k !== 'go') return;
  const rep = edit(host, t('illustrate.undo.update'), (m, d) => UP.applyUpdate(m, d, made));
  if (!rep) return;
  S.sel = new Set([...S.sel].filter((id) => S.doc.m.instances.some((i) => i.id === id)));
  if (S.annSel && !S.doc.m.annotations.some((a) => a.id === S.annSel)) S.annSel = null;
  drawScene(host); host.renderAll();
  host.status(t('illustrate.update.done', { moved: rep.moved.length, reshaped: rep.reshaped.length, added: rep.added.length, removed: rep.removed.length }), true);
}
/** Make `made` ({ m, meshes }) the open manual and show it. */
function start(host, made, fileName) {
  S.doc = new MN.Doc(made);
  S.fileName = fileName;
  S.sel = new Set(); S.viewId = null; S.preview = null;
  if (!S.doc.m.scene) S.doc.m.scene = MN.blankScene(MN.defaultCamera(MN.sceneBox(S.doc.m, S.doc.meshes, null)));
  showScene(host, true);
  host.status(t('illustrate.opened', { name: S.doc.m.name, parts: Object.keys(S.doc.m.parts).length, placed: S.doc.m.instances.length }));
  host.renderAll();
}

// ---------------------------------------------------------------------------------------------- files
function pickFile(host, accept, onFile) {
  const input = host.el('input', { type: 'file', accept, hidden: true });
  input.addEventListener('change', async () => {
    const f = input.files?.[0];
    input.remove();
    if (f) try { await onFile(f); } catch (e) { host.status(e.message, true); }
  });
  document.body.append(input);
  input.click();
}
async function openManualFile(host, f) {
  if (!(await leaveDirty(host))) return;
  if (f.size > MN.LIMITS.bytes) { host.status(t('illustrate.file.too_big'), true); return; }
  let made;
  try { made = MN.readManual(new Uint8Array(await f.arrayBuffer())); } catch (e) {
    await host.ask({ title: t('illustrate.open.cannot', { name: f.name }), text: e.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
    return;
  }
  start(host, made, f.name);
}
/** Open a manual from text (tests, the dev shell). */
export function openManualText(host, text, name = 'manual' + MN.EXT) { start(host, MN.readManual(text), name); }
function save(host) {
  if (!S.doc) return;
  syncCamera(host);
  const name = (S.fileName && S.fileName.endsWith(MN.EXT) ? S.fileName.slice(0, -MN.EXT.length) : S.doc.m.name.replace(/[\\/:*?"<>|]+/g, ' ').trim() || 'Manual') + MN.EXT;
  host.downloadBlob(name, new Blob([S.doc.toJSON()], { type: 'application/json' }), 'application/json');
  S.doc.dirty = false; S.fileName = name;
  host.status(t('illustrate.saved', { file: name }));
}
async function leaveDirty(host) {
  if (!S.doc || !S.doc.dirty) return true;
  return host.confirm(t('illustrate.unsaved.title'), t('illustrate.unsaved.text', { name: S.doc.m.name }), t('illustrate.unsaved.yes'));
}
async function newManual(host) {
  if (S.busy || !(await leaveDirty(host))) return;
  const k = await host.ask({
    title: t('illustrate.new.title'), text: t('illustrate.new.text'),
    buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['other', t('illustrate.new.from_other'), 'pc-btn'], ['file', t('illustrate.new.from_asm_file'), 'pc-btn'],
      openAssembly(host) ? ['asm', t('illustrate.new.from_asm'), 'pc-btn is-primary'] : ['part', t('illustrate.new.from_part'), 'pc-btn is-primary']],
  });
  if (k === 'asm') await newFromOpenAssembly(host);
  else if (k === 'part') await newFromPart(host);
  else if (k === 'file') pickFile(host, '.json,application/json', async (f) => newFromAssemblyText(host, await f.text(), f.name));
  else if (k === 'other') pickFile(host, PRODUCT_ACCEPT, async (f) => newFromProductFile(host, new Uint8Array(await f.arrayBuffer()), f.name));
}

// ---------------------------------------------------------------------------------------------- the scene in the view
/** The scene being shown: the manual's, with the explode slider's live value while it is dragged. */
const shownScene = () => (S.preview ? { ...S.doc.m.scene, ...S.preview } : S.doc.m.scene);
function showScene(host, fitCamera = false) {
  const v = host.view;
  if (!S.doc) return;
  v.setPartVisible(false);
  if (!S.scene3d) {
    const tk = host.tokens?.() || {};
    S.scene3d = createScene3d(host.THREE, { ink: tk.full || '#1b2733', pick: tk.sel || '#d9822b', dark: !!v.dark });
    v.setOverlay('illustrate-scene', S.scene3d.group);
  }
  ensureOverlay(host);
  drawScene(host);
  if (fitCamera) setCamera(host, S.doc.m.scene.camera);
}
function drawScene(host) {
  if (!S.doc || !S.scene3d) return;
  hideHostParts(host, true);
  const sc = shownScene();
  const cuts = LK.cutsOf(sc.look);
  const f = animFrame();
  const caps = cuts && !f ? HL.capPolygons(S.doc.m, S.doc.meshes, sc, cuts) : [];
  S.scene3d.update({ m: S.doc.m, meshes: S.doc.meshes, world: f ? f.world : MN.worldOf(S.doc.m, sc), state: f ? f.state : (id) => MN.instState(sc, id), selected: S.sel, look: sc.look, caps });
  if (f && S.doc.m.anim.camera.length) setCamera(host, f.camera);   // the camera follows only when the animation has camera keys
  host.view.render();
  drawOverlay(host);
}
/** The open part or assembly stays out of sight while a manual is shown (setPartVisible covers the part; an assembly's
 *  instances are the view's own objects). */
function hideHostParts(host, hide) {
  host.view.setPartVisible?.(!hide);
  // the base planes too: only their object is hidden; Design's renderAll (syncPlanes) shows them again by its own setting
  if (hide && host.view.planes) host.view.planes.visible = false;
  for (const o of host.view.instances || []) { if (o.mesh) o.mesh.visible = !hide; if (o.edges) o.edges.visible = !hide; }
}
/** The view's camera as a manual camera (the live view is orthographic; a view's own type is kept). */
function cameraOf(host, type = 'ortho', fov = 35) {
  const c = host.view.camera, tg = host.view.controls.target;
  return { type, pos: [c.position.x, c.position.y, c.position.z], target: [tg.x, tg.y, tg.z], up: [c.up.x, c.up.y, c.up.z], height: (c.top - c.bottom) / 2 / (c.zoom || 1), fov };
}
function setCamera(host, cam) {
  const v = host.view, c = v.camera;
  const box = MN.sceneBox(S.doc.m, S.doc.meshes, shownScene());
  const R = box ? Math.max(Math.hypot(box.max[0] - box.min[0], box.max[1] - box.min[1], box.max[2] - box.min[2]) / 2, 1) : 100;
  let dir = [cam.pos[0] - cam.target[0], cam.pos[1] - cam.target[1], cam.pos[2] - cam.target[2]];
  const d = Math.hypot(...dir) || 1;
  dir = dir.map((x) => x / d);
  const dist = Math.max(d, R * 4);   // orthographic: how far back does not change the picture, only the clipping
  c.up.set(...cam.up);
  c.position.set(cam.target[0] + dir[0] * dist, cam.target[1] + dir[1] * dist, cam.target[2] + dir[2] * dist);
  c.near = Math.max(dist - R * 3, dist * 1e-4); c.far = dist + R * 3;
  v.viewHalf = cam.height; c.zoom = 1;
  v.controls.target.set(...cam.target);
  v.updateFrustum();
  c.lookAt(...cam.target);
  v.controls.update();
  v.render();
}
/** Keep the scene's camera in step with the view (not an undo step: turning the view is not an edit). */
function syncCamera(host) {
  if (!S.doc || !host.view) return;
  const prev = S.doc.m.scene.camera;
  S.doc.m.scene.camera = MN.readCamera(cameraOf(host, prev.type, prev.fov));
}
function fitTo(host, dirName) {
  const DIRS = { iso: [1, 0.8, 1], front: [0, 0, 1], back: [0, 0, -1], top: [0, 1, 0], bottom: [0, -1, 0], right: [1, 0, 0], left: [-1, 0, 0] };
  const box = MN.sceneBox(S.doc.m, S.doc.meshes, shownScene());
  let dir = DIRS[dirName];
  if (!dir) { const c = cameraOf(host); dir = [c.pos[0] - c.target[0], c.pos[1] - c.target[1], c.pos[2] - c.target[2]]; }
  const cam = MN.defaultCamera(box, dir);
  if (dirName === 'top') cam.up = [0, 0, -1]; else if (dirName === 'bottom') cam.up = [0, 0, 1]; else if (!DIRS[dirName]) cam.up = cameraOf(host).up;
  setCamera(host, cam);
}
/** A small picture of the view as it is now (JPEG data URL, under the file's limit), or ''. */
function thumbnail(host) {
  try {
    const v = host.view;
    v.renderNow();
    const src = v.renderer.domElement, w = 192, h = 120;
    const cv = host.el('canvas', { width: w, height: h });
    const g = cv.getContext('2d');
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    const k = Math.min(w / src.width, h / src.height);
    g.drawImage(src, (w - src.width * k) / 2, (h - src.height * k) / 2, src.width * k, src.height * k);
    for (const q of [0.75, 0.55, 0.35]) { const url = cv.toDataURL('image/jpeg', q); if (url.length <= MN.LIMITS.thumb && /^data:image\/jpeg;base64,/.test(url)) return url; }
  } catch { /* a lost context or a tainted canvas: no picture */ }
  return '';
}

// ---------------------------------------------------------------------------------------------- edits (each one undo step)
function edit(host, label, fn, { redraw = true } = {}) {
  if (!S.doc) return undefined;
  syncCamera(host);
  let r;
  try { r = S.doc.edit(label, fn); } catch (e) { host.status(t('illustrate.edit_failed', { label, error: e.message })); return undefined; }
  if (redraw) drawScene(host);
  host.renderAll();
  return r;
}
const selIds = () => [...S.sel].filter((id) => S.doc.m.instances.some((i) => i.id === id));
function setLook(host, label, patch) {
  const ids = selIds();
  if (!ids.length) { host.status(t('illustrate.need_selection')); return; }
  edit(host, label, (m) => MN.setInstState(m.scene, ids, patch));
}
function addView(host) {
  syncCamera(host);
  const thumb = thumbnail(host);
  const v = edit(host, t('illustrate.undo.add_view'), (m) => { const nv = MN.addView(m, { camera: m.scene.camera }); MN.updateView(m, nv.id, { ...m.scene, thumb }); return nv; }, { redraw: false });
  if (v) { S.viewId = v.id; host.status(t('illustrate.view.added', { name: v.name })); host.renderAll(); }
}
function updateView(host) {
  const v = S.viewId && S.doc.view(S.viewId);
  if (!v) { host.status(t('illustrate.view.none_open')); return; }
  syncCamera(host);
  const thumb = thumbnail(host);
  edit(host, t('illustrate.undo.update_view', { name: v.name }), (m) => MN.updateView(m, v.id, { ...m.scene, thumb }), { redraw: false });
  host.status(t('illustrate.view.updated', { name: v.name }));
}
function goToView(host, id) {
  const v = S.doc.view(id);
  if (!v) return;
  S.preview = null;
  edit(host, t('illustrate.undo.go_to_view', { name: v.name }), (m) => { m.scene = MN.sceneOf(v); });
  S.viewId = id;
  setCamera(host, v.camera);
  host.renderAll();
}


// ---------------------------------------------------------------------------------------------- annotations over the view (TP.3, TP.4)
const TOOLS3D = { label: 1, callout: 1, arrow: 1, curved: 1, turn: 1, linear: 2, angle: 3, radius: 3 };
const TOOLS2D = new Set(['rect', 'ellipse', 'line', 'arrow2d', 'aim']);
function ensureOverlay(host) {
  if (S.overlay || typeof document === 'undefined' || !host.view?.canvas?.parentElement) return;
  const stage = host.view.canvas.parentElement;
  S.overlay = createOverlay(stage, {
    onSelect: (ref) => { S.annSel = ref; S.sel = new Set(); drawScene(host); host.renderPanel(); },
    onDrag: (ref, dx, dy, phase) => dragAnnot(host, ref, dx, dy, phase),
    onPoint: (x, y) => toolPoint2d(host, x, y),
  });
  const redraw = () => drawOverlay(host);
  host.view.controls.addEventListener('change', redraw);
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(redraw) : null;
  ro?.observe(stage);
  S.ovOff = () => { host.view.controls.removeEventListener('change', redraw); ro?.disconnect(); };
}
function dropOverlay() { S.ovOff?.(); S.ovOff = null; S.overlay?.destroy(); S.overlay = null; }
const columnLabel = (c) => (c.startsWith('prop:') ? c.slice(5) : t('illustrate.col.' + c.replace(/[A-Z]/g, (x) => '-' + x.toLowerCase())));
/** The scene as the overlay draws it: with the live camera (turning the view is not an edit). */
const liveScene = (host) => { const sc = shownScene(); return { ...sc, camera: cameraOf(host, sc.camera.type, sc.camera.fov) }; };
/** The parts list placed in a view, as display items in a w × h picture. */
export function tableFor(m, meshes, sc, tbl, w, h) {
  const list = PL.rows(m, meshes, { view: sc, scope: tbl.scope, collapse: tbl.collapse });
  const corner = (tbl.at[1] > 0.5 ? 't' : 'b') + (tbl.at[0] > 0.5 ? 'r' : 'l');
  return PL.tableItems(list, tbl.columns, columnLabel, { x: tbl.at[0] * w, y: tbl.at[1] * h, size: h * 0.022, maxW: w * 0.6, ref: 'table', corner });
}
function drawOverlay(host) {
  if (!S.overlay) return;
  if (!S.doc) { S.overlay.draw({ w: 1, h: 1, items: [] }); return; }
  const { w, h } = S.overlay.size();
  const sc = liveScene(host);
  let m = S.doc.m;
  if (S.dragPrev?.a) m = { ...m, annotations: m.annotations.map((a) => (a.id === S.dragPrev.a.id ? S.dragPrev.a : a)) };
  const f = animFrame();
  const items = AN.layout(m, S.doc.meshes, sc, { aspect: w / h, H: h, world: f?.world, state: f?.state });
  const tbl = S.dragPrev?.table || sc.table;
  if (tbl) items.push(...tableFor(m, S.doc.meshes, sc, tbl, w, h).items);
  const lookNow = S.dragPrev?.look || sc.look;
  if (lookNow?.magnifier) items.push(...lensItems(host, { ...sc, look: lookNow }, w, h));
  S.overlay.setSelected(S.annSel);
  S.overlay.draw({ w, h, items });
}
/** The magnifier on the overlay: worked out again when the view stops moving if it is slow (hidden lines are not free). */
function lensItems(host, sc, w, h) {
  const key = JSON.stringify([sc.camera, sc.look, sc.insts, sc.moves, sc.explode, w, h]);
  if (S.lens?.key === key) return S.lens.items;
  if (S.lens?.slow && !S.lens.settled) {
    clearTimeout(S.lens.timer);
    S.lens.timer = setTimeout(() => { if (S.lens) { S.lens.settled = true; drawOverlay(host); } }, 160);
    return [];
  }
  const t0 = performance.now();
  const k = h / 120;   // pens in the overlay's pixels, as on a picture 120 mm high
  const pens = Object.fromEntries(Object.entries(DS.PENS).map(([n, v]) => [n, v * k]));
  const items = LK.lensArt(S.doc.m, S.doc.meshes, sc, { W: w, H: h, lineArt: LA.lineArt, opts: { hidden: 'dashed', pens, pieces: 260 } })
    .map((it) => (it.ref === 'magnifier' && (it.t === 'circle' || it.t === 'path') && it.width ? { ...it, width: it.width * k } : it));
  S.lens = { key, items, slow: performance.now() - t0 > 40, settled: false };
  return items;
}
function dragAnnot(host, ref, dx, dy, phase) {
  const { w, h } = S.overlay.size();
  if (ref === 'magnifier') {
    const L = S.doc.m.scene.look;
    if (!L?.magnifier) return;
    const at = [L.magnifier.at[0] + dx / h, L.magnifier.at[1] - dy / h];
    if (phase === 'end') { S.dragPrev = null; edit(host, t('illustrate.undo.mag'), (m) => { m.scene.look = LK.readLook({ ...m.scene.look, magnifier: { ...m.scene.look.magnifier, at } }); }); return; }
    S.dragPrev = { look: { ...L, magnifier: { ...L.magnifier, at } } }; drawOverlay(host); return;
  }
  if (ref === 'table') {
    const tbl = S.doc.m.scene.table;
    if (!tbl) return;
    const at = [Math.max(0, Math.min(1, tbl.at[0] + dx / w)), Math.max(0, Math.min(1, tbl.at[1] - dy / h))];
    if (phase === 'end') { S.dragPrev = null; edit(host, t('illustrate.undo.move_table'), (m) => { m.scene.table.at = at; }); return; }
    S.dragPrev = { table: { ...tbl, at } }; drawOverlay(host); return;
  }
  const a = S.doc.m.annotations.find((x) => x.id === ref);
  if (!a) return;
  const patch = {};
  if (a.off) patch.off = [a.off[0] + dx / h, a.off[1] - dy / h];
  if (a.box) patch.box = [a.box[0] + dx / w, a.box[1] - dy / h, a.box[2] + dx / w, a.box[3] - dy / h];
  if (!Object.keys(patch).length) return;
  if (phase === 'end') { S.dragPrev = null; edit(host, t('illustrate.undo.move_annot'), (m) => AN.updateAnnotation(m, ref, patch)); return; }
  S.dragPrev = { a: { ...a, ...patch } }; drawOverlay(host);
}
function setTool(host, tool) {
  S.tool = S.tool === tool ? null : tool; S.toolPts = [];
  S.overlay?.capture(!!S.tool && TOOLS2D.has(S.tool));
  host.status(S.tool ? t('illustrate.tool.hint.' + S.tool) : t('illustrate.tool.off'));
  host.renderPanel();
}
/** A picked point as an anchor (in the part's own axes) and the picked face's normal there. */
function anchorAt(h) {
  const m = S.doc.m, inst = m.instances.find((i) => i.id === h.inst);
  const M = MN.worldOf(m, shownScene()).get(h.inst), inv = invert(M);
  const p = applyM(inv, h.point);
  let n = [0, 1, 0];
  const mesh = S.doc.meshes.get(inst.part);
  if (mesh && Number.isInteger(h.face) && h.face * 3 + 2 < mesh.indices.length) {
    const P = mesh.positions, I = mesh.indices, k = h.face * 3;
    const a = [P[I[k] * 3], P[I[k] * 3 + 1], P[I[k] * 3 + 2]], b = [P[I[k + 1] * 3], P[I[k + 1] * 3 + 1], P[I[k + 1] * 3 + 2]], c = [P[I[k + 2] * 3], P[I[k + 2] * 3 + 1], P[I[k + 2] * 3 + 2]];
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const nn = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]], l = Math.hypot(...nn);
    if (l > 0) n = nn.map((x) => x / l);
  }
  return { anchor: { inst: h.inst, p: p.map((x) => Number(x.toFixed(6))) }, normal: n };
}
const sceneSize = () => { const b = MN.sceneBox(S.doc.m, S.doc.meshes, shownScene()); return b ? Math.hypot(b.max[0] - b.min[0], b.max[1] - b.min[1], b.max[2] - b.min[2]) : 100; };
function placeAnnot(host, a, label) {
  const rec = edit(host, label, (m) => AN.addAnnotation(m, a, m.scene));
  if (rec) { S.annSel = rec.id; S.sel = new Set(); host.status(t('illustrate.annot.added')); }
  S.tool = null; S.toolPts = []; S.overlay?.capture(false);
  host.renderAll();
}
function toolPick(host, h) {
  if (!h) { host.status(t('illustrate.tool.need_part')); return; }
  const { anchor, normal } = anchorAt(h);
  S.toolPts.push(anchor);
  const need = TOOLS3D[S.tool];
  if (S.toolPts.length < need) { host.status(t('illustrate.tool.more', { n: need - S.toolPts.length })); drawOverlay(host); return; }
  const pts = S.toolPts, tool = S.tool;
  const L = Math.max(sceneSize() * 0.18, 1);
  if (tool === 'label' || tool === 'callout') placeAnnot(host, { kind: tool, anchor: pts[0], off: [0.09, 0.07], text: tool === 'callout' ? '{number} {name}' : '{name}' }, t('illustrate.undo.add_annot'));
  else if (tool === 'arrow' || tool === 'curved' || tool === 'turn') placeAnnot(host, { kind: 'arrow', anchor: pts[0], arrow: { dir: normal, len: tool === 'turn' ? L * 0.5 : L, style: tool === 'arrow' ? 'straight' : tool, bend: 0.35 } }, t('illustrate.undo.add_annot'));
  else placeAnnot(host, { kind: 'measure', measure: { kind: tool, pts, decimals: tool === 'angle' ? 0 : 1 }, off: [0.03, 0.05] }, t('illustrate.undo.add_measure'));
}
function toolPoint2d(host, x, y) {
  if (S.tool === 'aim') {
    const { h } = S.overlay.size();
    S.tool = null; S.overlay.capture(false);
    edit(host, t('illustrate.undo.mag'), (m) => { m.scene.look = LK.readLook({ ...m.scene.look, magnifier: { ...m.scene.look.magnifier, target: [x / h, 1 - y / h] } }); });
    return;
  }
  if (!S.tool || !TOOLS2D.has(S.tool)) return;
  const { w, h } = S.overlay.size();
  S.toolPts.push([x / w, 1 - y / h]);
  if (S.toolPts.length < 2) { host.status(t('illustrate.tool.more', { n: 1 })); return; }
  const [p, q] = S.toolPts;
  const shape = S.tool === 'arrow2d' ? 'arrow' : S.tool;
  placeAnnot(host, { kind: 'shape', shape, box: [p[0], p[1], q[0], q[1]] }, t('illustrate.undo.add_annot'));
}
function addPicture(host) {
  pickFile(host, 'image/png,image/jpeg', async (f) => {
    const src = await pictureUrl(host, f);
    if (src) placeAnnot(host, { kind: 'picture', src, box: [0.04, 0.04, 0.24, 0.2] }, t('illustrate.undo.add_annot'));
  });
}
function balloonAll(host) {
  const { w, h } = S.overlay ? S.overlay.size() : { w: 16, h: 10 };
  const n = edit(host, t('illustrate.undo.balloons'), (m) => {
    const sc = { ...m.scene, camera: cameraOf(host, m.scene.camera.type, m.scene.camera.fov) };
    const list = AN.autoBalloons(m, S.doc.meshes, sc, { aspect: w / h });
    for (const b of list) AN.addAnnotation(m, b, m.scene);
    return list.length;
  });
  host.status(n ? t('illustrate.balloons.added', { n }) : t('illustrate.balloons.none'));
}
function saveCsv(host) {
  const sc = shownScene(), tbl = sc.table;
  const columns = tbl?.columns || PL.DEFAULT_COLUMNS.concat(['description', 'mass']);
  const list = PL.rows(S.doc.m, S.doc.meshes, { view: sc, scope: S.listScope, collapse: true });
  const name = t('illustrate.list.csv_name', { name: safeName(S.doc.m.name) });
  host.downloadBlob(name, new Blob([PL.csv(list, columns, columnLabel)], { type: 'text/csv' }), 'text/csv');
  host.status(t('illustrate.saved', { file: name }));
}

// ---------------------------------------------------------------------------------------------- animation (TP.6)
const fmtTime = (s) => (Math.round(s * 100) / 100).toFixed(2) + ' s';
/** Keys at a glance: the camera and each part with their key times; a click goes to that time. */
function dopeSheet(host, K, a) {
  const { el } = K;
  const rows = [];
  const chips = (times) => el('span', { className: 'il-keys' }, ...times.slice(0, 40).map((tt) => el('button', { type: 'button', className: 'il-key', title: fmtTime(tt), onclick: () => { stopPlay(host); S.animTime = tt; drawScene(host); host.renderPanel(); } }, '◆')));
  if (a.camera.length) rows.push(el('li', {}, el('span', { className: 'il-track' }, t('illustrate.anim.camera')), chips(a.camera.map((k) => k.t))));
  for (const inst of S.doc.m.instances) {
    const n = S.doc.m.animIds?.of[inst.id];
    if (n === undefined) continue;
    const times = new Set();
    for (const o of a.objects) if (o.path[0] === n) for (const k of o.keys) times.add(k.t);
    for (const p of a.props || []) if (p.target === 'obj:' + n) for (const k of p.keys) times.add(k.t);
    if (times.size) rows.push(el('li', { dataset: { ilTrack: inst.id } }, el('span', { className: 'il-track' }, inst.name), chips([...times].sort((x, y) => x - y))));
  }
  return el('ul', { className: 'il-dope', 'aria-label': t('illustrate.anim.keys') }, ...rows);
}
/** The scene as the animation shows it at S.animTime (null when not playing or scrubbing). */
function animFrame() {
  if (S.animTime === null || S.animTime === undefined || !S.doc?.m.anim) return null;
  return TL.frameAt(S.doc.m, S.animTime, shownScene());
}
function play(host) {
  if (!S.doc?.m.anim) return;
  S.playing = true;
  let last = performance.now();
  if ((S.animTime ?? 0) >= S.doc.m.anim.length - 1e-6) S.animTime = 0;
  const tick = (now) => {
    if (!S.playing || !S.doc?.m.anim) return;
    S.animTime = (S.animTime ?? 0) + (now - last) / 1000; last = now;
    if (S.animTime > S.doc.m.anim.length) { if (S.loop) S.animTime %= S.doc.m.anim.length; else { S.animTime = S.doc.m.anim.length; S.playing = false; } }
    drawScene(host);
    const r = document.querySelector('[data-il-time]'); if (r) r.value = String(S.animTime);
    if (S.playing) S.raf = requestAnimationFrame(tick); else host.renderPanel();
  };
  S.raf = requestAnimationFrame(tick);
  host.renderPanel();
}
function stopPlay(host) {
  const was = S.playing;
  S.playing = false;
  if (S.raf) cancelAnimationFrame(S.raf);
  S.raf = 0;
  if (was && host) host.renderPanel();
}
/** The view at w × h as a canvas, with its annotations and parts list painted on top (pictures and video frames). */
function captureFrame(host, w, h) {
  const v = host.view, r = v.renderer, c = v.camera;
  r.setSize(w, h, false);
  const aspect = w / h, half = (c.top - c.bottom) / 2 / (c.zoom || 1);
  c.left = -half * aspect; c.right = half * aspect; c.top = half; c.bottom = -half; c.zoom = 1; c.updateProjectionMatrix();
  r.render(v.scene, c);
  const out = host.el('canvas', { width: w, height: h });
  const g = out.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
  g.drawImage(r.domElement, 0, 0, w, h);
  const f = animFrame();
  const sc = { ...shownScene(), camera: cameraOf(host) };
  const items = AN.layout(S.doc.m, S.doc.meshes, sc, { aspect, H: h, world: f?.world, state: f?.state });
  if (sc.table) items.push(...tableFor(S.doc.m, S.doc.meshes, sc, sc.table, w, h).items);
  CV.draw(g, { w, h, items }, { scale: 1 });
  return out;
}
async function saveVideo(host, kind, width) {
  const a = S.doc?.m.anim;
  if (!a) return;
  stopPlay(host);
  const { w: sw, h: sh } = S.overlay ? S.overlay.size() : { w: 1600, h: 1000 };
  const w = VID.even(Math.max(320, Math.min(3840, width || 1280))), h = VID.even(w * sh / sw);
  const fps = a.fps, n = AM.frameCount(a, fps);
  let sink;
  try { sink = await VID.createVideoSink({ kind, w, h, fps }); } catch (e) { host.status(t('illustrate.export.failed', { error: e.message }), true); return; }
  const r = host.view.renderer, pr = r.getPixelRatio(), keep = S.animTime;
  if (S.overlay?.element) S.overlay.element.style.visibility = 'hidden';
  S.busy = true;
  try {
    r.setPixelRatio(1);
    for (let i = 0; i < n; i++) {
      S.animTime = AM.frameTime(i, fps);
      drawScene(host);
      await sink.add(captureFrame(host, w, h), i);
      if (i % fps === 0) host.status(t('illustrate.anim.video_progress', { n: i + 1, of: n }), true);
    }
    const out = await sink.finish();
    const name = safeName(S.doc.m.name) + '.' + out.ext;
    host.downloadBlob(name, out.blob, out.mime);
    host.status(t('illustrate.saved', { file: name }), true);
  } catch (e) { sink.abort?.(); host.status(t('illustrate.export.failed', { error: e.message }), true); } finally {
    S.busy = false;
    r.setPixelRatio(pr);
    if (S.overlay?.element) S.overlay.element.style.visibility = '';
    S.animTime = keep; drawScene(host); host.view.resize();
  }
}

// ---------------------------------------------------------------------------------------------- the interactive file (TP.9)
const viewerWords = () => ({ views: t('illustrate.viewer.views'), parts: t('illustrate.viewer.parts'), play: t('illustrate.anim.play'), pause: t('illustrate.anim.pause'),
  time: t('illustrate.anim.time'), model: t('illustrate.viewer.model'), noWebgl: t('illustrate.viewer.no_webgl'), scene: t('illustrate.export.scene_name') });
async function saveViewer(host) {
  host.status(t('illustrate.viewer.packing'), true);
  syncCamera(host);
  const text = async (u) => { const r = await fetch(u, { cache: 'no-cache' }); if (!r.ok) throw new Error(u); return r.text(); };
  const three = import.meta.resolve('three');
  try {
    const modules = await VD.bundleModules((b) => (b.own ? text(new URL('./illustrate/' + b.own, import.meta.url).href) : b.file ? text(new URL('./' + b.file, three).href) : text(import.meta.resolve(b.spec))));
    const licence = await text(new URL('./LICENSE', three).href).catch(() => '');
    const data = VD.viewerData(S.doc.m, S.doc.meshes, { words: viewerWords(), labels: columnLabel });
    const html = VD.viewerHtml({ title: S.doc.m.name, lang: document.documentElement.lang || 'en', modules, data, licence });
    const name = safeName(S.doc.m.name) + '.html';
    host.downloadBlob(name, new Blob([html], { type: 'text/html' }), 'text/html');
    host.status(t('illustrate.viewer.saved', { file: name, mb: (html.length / 1048576).toFixed(1) }), true);
  } catch (e) { host.status(t('illustrate.export.failed', { error: e.message }), true); }
}

// ---------------------------------------------------------------------------------------------- export (TP.7)
const safeName = (s) => String(s).replace(/[\\/:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim() || 'Manual';
/** The views to export: [{ name, view }] — the scene (with the live camera), one saved view, or every saved view. */
function exportTargets(host, what) {
  const m = S.doc.m;
  if (what === 'scene') return [{ name: t('illustrate.export.scene_name'), view: liveScene(host) }];
  if (what.startsWith('view:')) { const v = S.doc.view(what.slice(5)); return v ? [{ name: v.name, view: v }] : []; }
  return m.views.map((v) => ({ name: v.name, view: v }));
}
function artFor(target, opts, W, H) {
  return LA.lineArt(S.doc.m, S.doc.meshes, target.view, { W, H, hidden: opts.hidden, fills: opts.fills, detail: opts.detail, labels: columnLabel });
}
/** Decoded pictures for a canvas (data: URLs only, through an Image element). */
async function decodePictures(display) {
  const map = new Map();
  for (const src of CV.pictures(display)) {
    await new Promise((res) => { const im = new Image(); im.onload = () => { map.set(src, im); res(); }; im.onerror = res; im.src = src; });
  }
  return map;
}
const canvasBlob = (cv) => new Promise((res) => cv.toBlob((b) => res(b), 'image/png'));
async function exportManual(host, opts) {
  const m = S.doc.m, targets = exportTargets(host, opts.what);
  if (!targets.length) { host.status(t('illustrate.export.nothing')); return; }
  const base = safeName(m.name);
  const [pw, ph] = LA.PAPERS[opts.paper] || LA.PAPERS.a4;
  const W = Math.max(pw, ph), H = Math.min(pw, ph);
  host.status(t('illustrate.export.working'), true);
  await new Promise((r) => setTimeout(r, 0));
  if (opts.format === 'pdf' || opts.format === 'svg') {
    let pages;
    if (opts.layout === 'sheet' && targets.length > 1) pages = [LA.sheet({ paper: opts.paper, title: m.name, views: targets.map((x) => ({ art: artFor(x, opts, 180, 120), caption: x.name })) })];
    else pages = targets.map((x) => LA.sheet({ paper: opts.paper, title: m.name, views: [{ art: artFor(x, opts, W - 28, H - 40), caption: x.name }] }));
    if (opts.format === 'pdf') {
      const { bytes, missing, skipped } = await PDF.toPdf(pages, { title: m.name });
      const name = base + (targets.length === 1 ? ' - ' + safeName(targets[0].name) : '') + '.pdf';
      host.downloadBlob(name, new Blob([bytes], { type: 'application/pdf' }), 'application/pdf');
      host.status(t('illustrate.export.saved_pdf', { file: name, pages: pages.length }) + (missing ? ' ' + t('illustrate.export.missing_chars', { n: missing }) : '') + (skipped ? ' ' + t('illustrate.export.skipped_pictures', { n: skipped }) : ''), true);
    } else {
      pages.forEach((p, k) => {
        const name = base + ' - ' + safeName(opts.layout === 'sheet' && targets.length > 1 ? t('illustrate.export.sheet_name') : targets[k].name) + '.svg';
        host.downloadBlob(name, new Blob([SVG.svgText(p, { title: m.name, background: '#ffffff' })], { type: 'image/svg+xml' }), 'image/svg+xml');
      });
      host.status(t('illustrate.export.saved_svg', { n: pages.length }), true);
    }
    return;
  }
  // pictures (PNG): line art painted on a canvas, or the 3D view rendered at that size with the annotations on top
  const px = Math.max(320, Math.min(opts.format === 'png-picture' ? 4096 : 8000, Math.round(opts.width) || 2400));
  for (const x of targets) {
    let cv;
    if (opts.format === 'png-lines') {
      const { w, h } = S.overlay ? S.overlay.size() : { w: 1600, h: 1000 };
      const Hmm = 120, Wmm = Hmm * w / h;
      const art = artFor(x, opts, Wmm, Hmm);
      const scale = px / Wmm;
      cv = host.el('canvas', { width: px, height: Math.round(Hmm * scale) });
      CV.draw(cv.getContext('2d'), art, { scale, background: '#ffffff', images: await decodePictures(art) });
    } else cv = await renderPicture(host, x, px);
    if (!cv) continue;
    const blob = await canvasBlob(cv);
    const name = base + ' - ' + safeName(x.name) + '.png';
    if (blob) host.downloadBlob(name, blob, 'image/png');
  }
  host.status(t('illustrate.export.saved_png', { n: targets.length }), true);
}
/** The 3D view of a target rendered at `px` wide (the stage's shape), its annotations and parts list painted on top. */
async function renderPicture(host, target, px) {
  const v = host.view, r = v.renderer, c = v.camera;
  const { w: sw, h: sh } = S.overlay ? S.overlay.size() : { w: v.w || 1600, h: v.h || 1000 };
  const aspect = sw / sh, w = px, h = Math.round(px / aspect);
  const wasPreview = S.preview, liveCam = cameraOf(host);
  if (target.view !== liveScene(host)) { S.preview = MN.sceneOf(target.view); drawScene(host); setCamera(host, target.view.camera); }
  const pr = r.getPixelRatio();
  let out = null;
  try {
    r.setPixelRatio(1); r.setSize(w, h, false);
    const half = (c.top - c.bottom) / 2 / (c.zoom || 1);
    c.left = -half * aspect; c.right = half * aspect; c.top = half; c.bottom = -half; c.zoom = 1; c.updateProjectionMatrix();
    S.overlay?.element && (S.overlay.element.style.visibility = 'hidden');
    r.render(v.scene, c);
    out = host.el('canvas', { width: w, height: h });
    const g = out.getContext('2d');
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, w, h);
    g.drawImage(r.domElement, 0, 0, w, h);
    const sc = { ...shownScene(), camera: cameraOf(host, target.view.camera.type, target.view.camera.fov) };
    const items = AN.layout(S.doc.m, S.doc.meshes, sc, { aspect, H: h });
    if (sc.table) items.push(...tableFor(S.doc.m, S.doc.meshes, sc, sc.table, w, h).items);
    const d = { w, h, items };
    CV.draw(g, d, { scale: 1, images: await decodePictures(d) });
  } finally {
    r.setPixelRatio(pr);
    if (S.overlay?.element) S.overlay.element.style.visibility = '';
    S.preview = wasPreview; drawScene(host);
    setCamera(host, liveCam);
    v.resize();
  }
  return out;
}
/** The instructions' fixed words in the reader's language. */
const docWords = () => ({
  page: (n, total) => t('illustrate.doc.page', { n, total }), step: (n) => t('illustrate.doc.step', { n }), warning: t('illustrate.doc.warning'),
  parts: t('illustrate.doc.parts'), tools: t('illustrate.doc.tools'), partsList: t('illustrate.doc.parts_list'), coverLine: (s, p) => t('illustrate.doc.cover_line', { steps: s, parts: p }),
});
async function saveInstructions(host, kind) {
  const m = S.doc.m;
  if (!m.instructions?.steps.length) { host.status(t('illustrate.ins.no_steps')); return; }
  host.status(t('illustrate.export.working'), true);
  await new Promise((r) => setTimeout(r, 0));
  const name = safeName(m.instructions.title || m.name);
  try {
    if (kind === 'pdf') {
      const pages = IN.pages(m, S.doc.meshes, { words: docWords(), labels: columnLabel });
      const { bytes, missing, skipped } = await PDF.toPdf(pages, { title: m.instructions.title || m.name });
      host.downloadBlob(name + '.pdf', new Blob([bytes], { type: 'application/pdf' }), 'application/pdf');
      host.status(t('illustrate.export.saved_pdf', { file: name + '.pdf', pages: pages.length }) + (missing ? ' ' + t('illustrate.export.missing_chars', { n: missing }) : '') + (skipped ? ' ' + t('illustrate.export.skipped_pictures', { n: skipped }) : ''), true);
    } else {
      const text = IN.html(m, S.doc.meshes, { words: docWords(), labels: columnLabel, svgText: SVG.svgText, lang: document.documentElement.lang || 'en' });
      host.downloadBlob(name + '.html', new Blob([text], { type: 'text/html' }), 'text/html');
      host.status(t('illustrate.saved', { file: name + '.html' }), true);
    }
  } catch (e) { host.status(t('illustrate.export.failed', { error: e.message }), true); }
}
/** A PNG or JPEG file as a data: URL (checked by its first bytes), or null with a message. */
async function pictureUrl(host, f) {
  if (f.size > AN.MAX_PICTURE) { host.status(t('illustrate.annot.picture_big', { kb: Math.round(AN.MAX_PICTURE / 1024) }), true); return null; }
  const bytes = new Uint8Array(await f.arrayBuffer());
  const png = bytes[0] === 0x89 && bytes[1] === 0x50, jpg = bytes[0] === 0xff && bytes[1] === 0xd8;
  if (!png && !jpg) { host.status(t('illustrate.annot.picture_kind'), true); return null; }
  let bin = '';
  for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
  return 'data:image/' + (png ? 'png' : 'jpeg') + ';base64,' + btoa(bin);
}
async function exportDialog(host) {
  if (!S.doc) return;
  const { el } = host;
  const K = kit(host);
  const sel = (name, options, value) => el('select', { className: 'pc-select', name, id: K.id() }, ...options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
  const what = sel('what', [['scene', t('illustrate.export.what_scene')], ...S.doc.m.views.map((v) => ['view:' + v.id, t('illustrate.export.what_view', { name: v.name })]), ...(S.doc.m.views.length ? [['all', t('illustrate.export.what_all', { n: S.doc.m.views.length })]] : [])], S.viewId ? 'view:' + S.viewId : 'scene');
  const format = sel('format', [['pdf', t('illustrate.export.pdf')], ['svg', t('illustrate.export.svg')], ['png-lines', t('illustrate.export.png_lines')], ['png-picture', t('illustrate.export.png_picture')], ['html3d', t('illustrate.export.html3d')]], S.exportOpts?.format || 'pdf');
  const layout = sel('layout', [['pages', t('illustrate.export.one_per_page')], ['sheet', t('illustrate.export.one_sheet')]], S.exportOpts?.layout || 'pages');
  const paper = sel('paper', Object.keys(LA.PAPERS).map((k) => [k, t('illustrate.paper.' + k)]), S.exportOpts?.paper || 'a4');
  const hidden = sel('hidden', [['dashed', t('illustrate.export.hidden_dashed')], ['off', t('illustrate.export.hidden_off')]], S.exportOpts?.hidden || 'dashed');
  const fills = sel('fills', [['auto', t('illustrate.export.fills_auto')], ['none', t('illustrate.export.fills_none')], ['flat', t('illustrate.export.fills_flat')], ['shaded', t('illustrate.export.fills_shaded')]], S.exportOpts?.fills || 'auto');
  const detail = el('input', { type: 'checkbox', name: 'detail', checked: !!S.exportOpts?.detail });
  const width = el('input', { type: 'number', className: 'pc-input', name: 'width', id: K.id(), min: 320, max: 8000, step: 10, value: String(S.exportOpts?.width || 2400) });
  const body = el('div', { className: 'pc-props il-export', dataset: { ilExport: '1' } },
    ...K.field(t('illustrate.export.what'), what), ...K.field(t('illustrate.export.format'), format), ...K.field(t('illustrate.export.layout'), layout),
    ...K.field(t('illustrate.export.paper'), paper), ...K.field(t('illustrate.export.hidden'), hidden), ...K.field(t('illustrate.export.fills'), fills),
    el('label', { className: 'pc-check span' }, detail, t('illustrate.export.detail')), ...K.field(t('illustrate.export.width'), width),
    el('p', { className: 'pc-note span' }, t('illustrate.export.note')));
  const k = await host.ask({ title: t('illustrate.export.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['go', t('illustrate.export.go'), 'pc-btn is-primary']] });
  if (k !== 'go') return;
  S.exportOpts = { what: what.value, format: format.value, layout: layout.value, paper: paper.value, hidden: hidden.value, fills: fills.value, detail: detail.checked, width: Number(width.value) };
  if (S.exportOpts.format === 'html3d') { await saveViewer(host); return; }
  try { await exportManual(host, S.exportOpts); } catch (e) { host.status(t('illustrate.export.failed', { error: e.message }), true); }
}

// ---------------------------------------------------------------------------------------------- picking and keys
function onPick(hit, host, ev) {
  if (!S.doc || !S.scene3d || !ev) return;
  const h = S.scene3d.pick(host.view.ray(ev.clientX, ev.clientY));
  if (S.tool && TOOLS3D[S.tool]) { toolPick(host, h); return; }
  if (S.annSel) { S.annSel = null; }
  if (ev.shiftKey || ev.ctrlKey || ev.metaKey) { if (h) { if (S.sel.has(h.inst)) S.sel.delete(h.inst); else S.sel.add(h.inst); } }
  else S.sel = new Set(h ? [h.inst] : []);
  drawScene(host); host.renderAll();
  if (h) { const i = S.doc.m.instances.find((x) => x.id === h.inst); host.status(t('illustrate.picked', { name: i?.name || h.inst, n: S.sel.size })); }
}
function selectRow(host, ids, ev) {
  if (ev && (ev.shiftKey || ev.ctrlKey || ev.metaKey)) { const all = ids.every((id) => S.sel.has(id)); for (const id of ids) if (all) S.sel.delete(id); else S.sel.add(id); }
  else S.sel = new Set(ids);
  drawScene(host); host.renderAll();
}

// ---------------------------------------------------------------------------------------------- the panel
function kit(host) {
  const { el } = host;
  let n = 0;
  const id = () => 'il-' + (++n) + Math.random().toString(36).slice(2, 6);
  const btn = (label, onclick, cls = 'pc-btn', extra = {}) => el('button', { type: 'button', className: cls, onclick, ...extra }, label);
  const icon = (name, label, onclick, extra = {}) => el('button', { type: 'button', className: 'il-icon', title: label, 'aria-label': label, onclick, ...extra }, el('i', { className: 'bi bi-' + name, 'aria-hidden': 'true' }));   // i18n-ignore: an icon class
  const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
  return { el, btn, icon, field, id };
}
function renderPanel(host, box) {
  S.host = host;
  if (S.doc) { hideHostParts(host, true); host.view.render(); }   // renderAll has just put the base planes back
  const K = kit(host), { el } = K;
  if (!S.doc) {
    box.append(el('div', { className: 'pc-sec' },
      el('p', { className: 'pc-note' }, t('illustrate.intro')),
      el('div', { className: 'pc-actions' },
        openAssembly(host) ? K.btn(t('illustrate.new.from_asm'), () => newFromOpenAssembly(host), 'pc-btn is-primary', { dataset: { ilNew: 'asm' } })
          : K.btn(t('illustrate.new.from_part'), () => newFromPart(host), 'pc-btn is-primary', { dataset: { ilNew: 'part' }, disabled: !host.regen?.mesh }),
        K.btn(t('illustrate.new.from_asm_file'), () => pickFile(host, '.json,application/json', async (f) => newFromAssemblyText(host, await f.text(), f.name)), 'pc-btn', { dataset: { ilNew: 'file' } }),
        K.btn(t('illustrate.tb.open'), () => pickFile(host, MN.EXT + ',.json,application/json', (f) => openManualFile(host, f)), 'pc-btn', { dataset: { ilOpen: '1' } }))));
    return t('illustrate.ws.label');
  }
  const m = S.doc.m;
  // the manual
  const nameIn = el('input', { className: 'pc-input', id: K.id(), value: m.name, maxLength: MN.LIMITS.name, dataset: { ilName: '1' } });
  nameIn.addEventListener('change', () => { const v = nameIn.value.trim(); if (v && v !== m.name) edit(host, t('illustrate.undo.rename_manual'), (x) => { x.name = v.slice(0, MN.LIMITS.name); }, { redraw: false }); });
  box.append(el('div', { className: 'pc-sec' },
    el('div', { className: 'pc-props' }, ...K.field(t('illustrate.panel.name'), nameIn),
      el('span', { className: 'k' }, t('illustrate.panel.source')), el('span', { className: 'v' }, t('illustrate.panel.source_line', { name: m.source.name || '—', kind: t('illustrate.kind.' + m.source.kind), parts: Object.keys(m.parts).length, placed: m.instances.length }))),
    el('div', { className: 'pc-actions' }, K.btn(t('illustrate.update.button'), () => updateManual(host), 'pc-btn pc-btn-sm', { dataset: { ilUpdate: '1' } }))));
  // views
  const views = el('ol', { className: 'il-views', 'aria-label': t('illustrate.panel.views') });
  m.views.forEach((v, k) => {
    views.append(el('li', { className: 'il-view' + (v.id === S.viewId ? ' is-current' : ''), dataset: { ilView: v.id } },
      v.thumb ? el('img', { className: 'il-thumb', src: v.thumb, alt: '' }) : el('span', { className: 'il-thumb-none', 'aria-hidden': 'true' }),
      el('button', { type: 'button', className: 'il-view-name', title: t('illustrate.view.go', { name: v.name }), onclick: () => goToView(host, v.id), ondblclick: () => renameView(host, v.id) }, v.name),
      el('span', { className: 'il-view-acts' },
        K.icon('arrow-up', t('illustrate.view.up'), () => edit(host, t('illustrate.undo.move_view'), (x) => MN.moveView(x, v.id, k - 1), { redraw: false }), { disabled: k === 0 }),
        K.icon('arrow-down', t('illustrate.view.down'), () => edit(host, t('illustrate.undo.move_view'), (x) => MN.moveView(x, v.id, k + 1), { redraw: false }), { disabled: k === m.views.length - 1 }),
        K.icon('pencil', t('illustrate.view.rename'), () => renameView(host, v.id)),
        K.icon('files', t('illustrate.view.duplicate'), () => { const c = edit(host, t('illustrate.undo.duplicate_view'), (x) => MN.duplicateView(x, v.id), { redraw: false }); if (c) S.viewId = c.id; host.renderAll(); }, { dataset: { ilDup: v.id } }),
        K.icon('trash', t('illustrate.view.delete'), () => { edit(host, t('illustrate.undo.delete_view', { name: v.name }), (x) => MN.removeView(x, v.id), { redraw: false }); if (S.viewId === v.id) S.viewId = null; host.renderAll(); }, { dataset: { ilDel: v.id } }))));
  });
  box.append(el('div', { className: 'pc-sec' },
    el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, t('illustrate.panel.views_n', { n: m.views.length }))),
    m.views.length ? views : el('p', { className: 'pc-note' }, t('illustrate.panel.no_views'))));
  // explode
  if (m.explodes.length) {
    const sc = shownScene();
    const sel = el('select', { className: 'pc-select', id: K.id(), dataset: { ilExplode: '1' } },
      el('option', { value: '' }, t('illustrate.explode.none')),
      ...m.explodes.map((e) => el('option', { value: e.id, selected: sc.explode?.ref === e.id }, e.name)));
    sel.addEventListener('change', () => edit(host, t('illustrate.undo.explode'), (x) => { x.scene.explode = sel.value ? { ref: sel.value, t: x.scene.explode?.t ?? 1 } : null; }));
    const range = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 0, max: 100, step: 1, value: Math.round((sc.explode?.t ?? 1) * 100), disabled: !sc.explode, dataset: { ilExplodeT: '1' } });
    range.addEventListener('input', () => { if (!S.doc.m.scene.explode) return; S.preview = { explode: { ref: S.doc.m.scene.explode.ref, t: Number(range.value) / 100 } }; drawScene(host); });
    range.addEventListener('change', () => { const p = S.preview; S.preview = null; if (p) edit(host, t('illustrate.undo.explode'), (x) => { x.scene.explode = p.explode; }); });
    box.append(el('div', { className: 'pc-sec' }, el('div', { className: 'pc-props' }, ...K.field(t('illustrate.explode.label'), sel), ...K.field(t('illustrate.explode.amount'), range))));
  }
  // the look: style, section, box cut-away, magnifier (TP.5)
  {
    const sc = shownScene();
    const L = sc.look || LK.defaultLook();
    const setLookEdit = (label, fn) => edit(host, label, (x) => { const cur = x.scene.look ? structuredClone(x.scene.look) : LK.defaultLook(); fn(cur); x.scene.look = LK.readLook(cur); });
    const style = el('select', { className: 'pc-select', id: K.id(), dataset: { ilStyle: '1' } }, ...LK.STYLES.map((k) => el('option', { value: k, selected: L.style === k }, t('illustrate.look.style.' + k))));
    style.addEventListener('change', () => setLookEdit(t('illustrate.undo.look_style'), (l) => { l.style = style.value; }));
    const mb = MN.sceneBox(m, S.doc.meshes, { ...sc, explode: null, moves: {} }) || { min: [-50, -50, -50], max: [50, 50, 50] };
    const secOn = el('input', { type: 'checkbox', checked: !!L.section, dataset: { ilSection: '1' } });
    secOn.addEventListener('change', () => setLookEdit(secOn.checked ? t('illustrate.undo.section_on') : t('illustrate.undo.section_off'), (l) => { l.section = secOn.checked ? LK.sectionFor(mb, 'x', 0.5) : null; if (secOn.checked) l.box = null; }));
    const g = el('div', { className: 'pc-props' }, ...K.field(t('illustrate.look.style'), style), el('label', { className: 'pc-check span' }, secOn, t('illustrate.look.section')));
    if (L.section) {
      const k = L.section.n.findIndex((x) => Math.abs(x) > 0.5), axis = 'xyz'[k] || 'x', flip = L.section.n[k] < 0;
      const along = (flip ? -L.section.c : L.section.c);
      const frac = (along - mb.min[k]) / ((mb.max[k] - mb.min[k]) || 1);
      const ax = el('select', { className: 'pc-select', id: K.id(), dataset: { ilSecAxis: '1' } }, ...['x', 'y', 'z'].map((a) => el('option', { value: a, selected: a === axis }, t('illustrate.look.axis_' + a))));
      ax.addEventListener('change', () => setLookEdit(t('illustrate.undo.section'), (l) => { l.section = LK.sectionFor(mb, ax.value, 0.5, flip); }));
      const at = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 0, max: 100, step: 1, value: Math.round(Math.max(0, Math.min(1, frac)) * 100), dataset: { ilSecAt: '1' } });
      at.addEventListener('input', () => { S.preview = { look: { ...L, section: LK.sectionFor(mb, axis, Number(at.value) / 100, flip) } }; drawScene(host); });
      at.addEventListener('change', () => { S.preview = null; setLookEdit(t('illustrate.undo.section'), (l) => { l.section = LK.sectionFor(mb, axis, Number(at.value) / 100, flip); }); });
      const fl = K.btn(t('illustrate.look.flip'), () => setLookEdit(t('illustrate.undo.section'), (l) => { l.section = LK.sectionFor(mb, axis, frac, !flip); }), 'pc-btn pc-btn-sm span');
      g.append(...K.field(t('illustrate.look.axis'), ax), ...K.field(t('illustrate.look.where'), at), fl);
    }
    const boxOn = el('input', { type: 'checkbox', checked: !!L.box, dataset: { ilBox: '1' } });
    // the corner cut: from `f` of the way along each axis to just past the model's far corner
    const cornerBox = (f) => ({ min: mb.min.map((v, k) => mb.max[k] - (mb.max[k] - v) * f), max: mb.max.map((v, k) => v + (v - mb.min[k]) * 0.05 + 1e-3) });
    boxOn.addEventListener('change', () => setLookEdit(boxOn.checked ? t('illustrate.undo.box_on') : t('illustrate.undo.box_off'), (l) => { l.box = boxOn.checked ? cornerBox(0.5) : null; if (boxOn.checked) l.section = null; }));
    g.append(el('label', { className: 'pc-check span' }, boxOn, t('illustrate.look.box')));
    if (L.box) {
      const k0 = (L.box.min[0] - mb.min[0]) / ((mb.max[0] - mb.min[0]) || 1);
      const size = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 5, max: 95, step: 1, value: Math.round((1 - k0) * 100), dataset: { ilBoxSize: '1' } });
      const boxAt = cornerBox;
      size.addEventListener('input', () => { S.preview = { look: { ...L, box: boxAt(Number(size.value) / 100) } }; drawScene(host); });
      size.addEventListener('change', () => { S.preview = null; setLookEdit(t('illustrate.undo.box'), (l) => { l.box = boxAt(Number(size.value) / 100); }); });
      g.append(...K.field(t('illustrate.look.box_size'), size));
    }
    const magOn = el('input', { type: 'checkbox', checked: !!L.magnifier, dataset: { ilMag: '1' } });
    magOn.addEventListener('change', () => {
      const { w, h } = S.overlay ? S.overlay.size() : { w: 16, h: 10 };
      setLookEdit(magOn.checked ? t('illustrate.undo.mag_on') : t('illustrate.undo.mag_off'), (l) => { l.magnifier = magOn.checked ? { at: [w / h * 0.82, 0.72], target: [w / h * 0.5, 0.5], r: 0.17, zoom: 3, mode: 'zoom' } : null; });
    });
    g.append(el('label', { className: 'pc-check span' }, magOn, t('illustrate.look.magnifier')));
    if (L.magnifier) {
      const mode = el('select', { className: 'pc-select', id: K.id(), dataset: { ilMagMode: '1' } }, el('option', { value: 'zoom', selected: L.magnifier.mode === 'zoom' }, t('illustrate.look.mag_zoom')), el('option', { value: 'inside', selected: L.magnifier.mode === 'inside' }, t('illustrate.look.mag_inside')));
      mode.addEventListener('change', () => setLookEdit(t('illustrate.undo.mag'), (l) => { l.magnifier.mode = mode.value; }));
      const zoom = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 15, max: 100, step: 5, value: Math.round(L.magnifier.zoom * 10) });
      zoom.addEventListener('change', () => setLookEdit(t('illustrate.undo.mag'), (l) => { l.magnifier.zoom = Number(zoom.value) / 10; }));
      const rad = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 5, max: 40, step: 1, value: Math.round(L.magnifier.r * 100) });
      rad.addEventListener('change', () => setLookEdit(t('illustrate.undo.mag'), (l) => { l.magnifier.r = Number(rad.value) / 100; }));
      g.append(...K.field(t('illustrate.look.mag_mode'), mode), ...K.field(t('illustrate.look.mag_power'), zoom), ...K.field(t('illustrate.look.mag_size'), rad),
        K.btn(t('illustrate.look.mag_aim'), () => setTool(host, 'aim'), 'pc-btn pc-btn-sm span', { 'aria-pressed': String(S.tool === 'aim'), dataset: { ilAim: '1' } }));
    }
    box.append(el('div', { className: 'pc-sec' }, el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, t('illustrate.panel.look'))), g));
  }
  // annotations
  {
    const sc = shownScene();
    const shownIds = new Set(sc.annots || []);
    const toolBtn = (tool, iconName) => K.icon(iconName, t('illustrate.tool.' + tool), () => setTool(host, tool), { 'aria-pressed': String(S.tool === tool), dataset: { ilTool: tool }, className: 'il-icon' + (S.tool === tool ? ' is-on' : '') });
    const tools = el('div', { className: 'il-tools', role: 'group', 'aria-label': t('illustrate.panel.annotate') },
      toolBtn('label', 'chat-left-text'), toolBtn('callout', 'chat-square-text'), toolBtn('arrow', 'arrow-up-right'), toolBtn('curved', 'arrow-return-right'), toolBtn('turn', 'arrow-clockwise'),
      toolBtn('linear', 'rulers'), toolBtn('angle', 'triangle'), toolBtn('radius', 'circle'),
      toolBtn('rect', 'square'), toolBtn('ellipse', 'circle-half'), toolBtn('line', 'slash-lg'), toolBtn('arrow2d', 'arrow-right'),
      K.icon('image', t('illustrate.tool.picture'), () => addPicture(host), { dataset: { ilTool: 'picture' } }));
    const list = el('ul', { className: 'il-annots' });
    for (const a of m.annotations) {
      const on = shownIds.has(a.id);
      list.append(el('li', { className: 'il-annot' + (a.id === S.annSel ? ' is-current' : '') + (on ? '' : ' is-hidden'), dataset: { ilAnnot: a.id } },
        el('button', { type: 'button', className: 'il-row-name', 'aria-selected': String(a.id === S.annSel), onclick: () => { S.annSel = a.id; S.sel = new Set(); drawScene(host); host.renderPanel(); } }, annotTitle(a)),
        K.icon(on ? 'eye' : 'eye-slash', on ? t('illustrate.annot.hide_here') : t('illustrate.annot.show_here'), () => edit(host, on ? t('illustrate.undo.hide_annot') : t('illustrate.undo.show_annot'), (x) => AN.showAnnotation(x.scene, a.id, !on))),
        K.icon('trash', t('illustrate.annot.delete'), () => { edit(host, t('illustrate.undo.delete_annot'), (x) => AN.removeAnnotation(x, a.id)); if (S.annSel === a.id) S.annSel = null; host.renderAll(); })));
    }
    const sec = el('div', { className: 'pc-sec' }, el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, t('illustrate.panel.annotate'))), tools,
      S.tool ? el('p', { className: 'pc-note' }, t('illustrate.tool.hint.' + S.tool)) : null,
      m.annotations.length ? list : el('p', { className: 'pc-note' }, t('illustrate.annot.none')));
    const a = S.annSel && m.annotations.find((x) => x.id === S.annSel);
    if (a) sec.append(annotEditor(host, K, a));
    box.append(sec);
  }
  // the parts list
  {
    const sc = shownScene();
    const list = PL.rows(m, S.doc.meshes, { view: sc, scope: S.listScope });
    const scope = el('select', { className: 'pc-select', id: K.id(), dataset: { ilScope: '1' } }, el('option', { value: 'view', selected: S.listScope === 'view' }, t('illustrate.list.scope_view')), el('option', { value: 'all', selected: S.listScope === 'all' }, t('illustrate.list.scope_all')));
    scope.addEventListener('change', () => { S.listScope = scope.value; host.renderPanel(); });
    const table = el('table', { className: 'pc-ptable il-list' }, el('thead', {}, el('tr', {}, ...['item', 'qty', 'name'].map((c) => el('th', { scope: 'col' }, columnLabel(c))))),
      el('tbody', {}, ...list.map((r) => el('tr', { dataset: { ilRow: r.pids[0] } }, el('td', {}, r.item ?? '—'), el('td', {}, String(r.qty)), el('td', {}, r.name)))));
    const shown = !!sc.table;
    const showTbl = el('input', { type: 'checkbox', checked: shown, id: K.id(), dataset: { ilTable: '1' } });
    showTbl.addEventListener('change', () => edit(host, showTbl.checked ? t('illustrate.undo.table_on') : t('illustrate.undo.table_off'), (x) => { x.scene.table = showTbl.checked ? PL.readTable({ scope: 'view' }) : null; }));
    const sec = el('div', { className: 'pc-sec' }, el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, t('illustrate.panel.list_n', { n: list.reduce((s, r) => s + r.qty, 0) }))),
      el('div', { className: 'pc-props' }, ...K.field(t('illustrate.list.scope'), scope)),
      el('div', { className: 'il-list-wrap' }, table),
      el('div', { className: 'pc-actions' },
        K.btn(t('illustrate.list.balloon_all'), () => balloonAll(host), 'pc-btn pc-btn-sm', { dataset: { ilBalloons: '1' } }),
        K.btn(t('illustrate.list.csv'), () => saveCsv(host), 'pc-btn pc-btn-sm', { dataset: { ilCsv: '1' } })),
      el('label', { className: 'pc-check' }, showTbl, t('illustrate.list.in_view')));
    if (shown) {
      const cols = el('div', { className: 'il-cols', role: 'group', 'aria-label': t('illustrate.list.columns') });
      for (const c of PL.columnsFor(m)) {
        const cb = el('input', { type: 'checkbox', checked: sc.table.columns.includes(c), dataset: { ilCol: c } });
        cb.addEventListener('change', () => edit(host, t('illustrate.undo.columns'), (x) => { const cur = x.scene.table.columns.filter((k) => k !== c); x.scene.table.columns = cb.checked ? PL.COLUMNS.concat(PL.columnsFor(x).filter((k) => !PL.COLUMNS.includes(k))).filter((k) => cur.includes(k) || k === c) : (cur.length ? cur : x.scene.table.columns); }));
        cols.append(el('label', { className: 'pc-check' }, cb, columnLabel(c)));
      }
      const tscope = el('select', { className: 'pc-select', id: K.id() }, el('option', { value: 'view', selected: sc.table.scope === 'view' }, t('illustrate.list.scope_view')), el('option', { value: 'all', selected: sc.table.scope === 'all' }, t('illustrate.list.scope_all')));
      tscope.addEventListener('change', () => edit(host, t('illustrate.undo.columns'), (x) => { x.scene.table.scope = tscope.value; }));
      sec.append(el('p', { className: 'pc-props-sub' }, t('illustrate.list.columns')), cols, el('div', { className: 'pc-props' }, ...K.field(t('illustrate.list.table_scope'), tscope)));
    }
    box.append(sec);
  }
  // animation (TP.6)
  {
    const det = el('details', { className: 'pc-sec il-details', open: S.open.has('anim'), dataset: { ilAnim: '1' } }, el('summary', { className: 'pc-h' }, t('illustrate.panel.animation')));
    det.addEventListener('toggle', () => { if (det.open) S.open.add('anim'); else S.open.delete('anim'); });
    const a = m.anim;
    const at = S.animTime ?? 0;
    const sc = shownScene();
    const doKey = (label, fn) => { stopPlay(); edit(host, label, fn, { redraw: false }); S.animTime = S.animTime ?? 0; drawScene(host); };
    const quick = el('div', { className: 'pc-actions' },
      K.btn(t('illustrate.anim.key_all'), () => doKey(t('illustrate.undo.anim_key'), (x) => TL.keyScene(x, x.scene, at)), 'pc-btn pc-btn-sm', { dataset: { ilKeyAll: '1' } }),
      K.btn(t('illustrate.anim.key_sel'), () => doKey(t('illustrate.undo.anim_key'), (x) => TL.keyParts(x, x.scene, at, selIds())), 'pc-btn pc-btn-sm', { disabled: !S.sel.size }),
      K.btn(t('illustrate.anim.key_cam'), () => { syncCamera(host); doKey(t('illustrate.undo.anim_key'), (x) => TL.keyCamera(x, x.scene.camera, at)); }, 'pc-btn pc-btn-sm'),
      K.btn(t('illustrate.anim.record_explode'), () => doKey(t('illustrate.undo.anim_record'), (x) => TL.recordExplode(x, { ...x.scene, explode: x.scene.explode || (x.explodes[0] ? { ref: x.explodes[0].id, t: 1 } : null) }, { start: a ? a.length : 0, step: 1 })), 'pc-btn pc-btn-sm', { disabled: !m.explodes.length, dataset: { ilRecord: '1' } }),
      K.btn(t('illustrate.anim.views_stops'), () => doKey(t('illustrate.undo.anim_stops'), (x) => TL.viewsAsStops(x, x.views.map((v) => v.id), { start: a ? a.length + 1 : 0 })), 'pc-btn pc-btn-sm', { disabled: !m.views.length, dataset: { ilStops: '1' } }));
    if (!a) det.append(el('p', { className: 'pc-note' }, t('illustrate.anim.intro')), quick);
    else {
      const fps = a.fps;
      const range = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 0, max: a.length, step: 1 / fps, value: at, dataset: { ilTime: '1' } });
      range.addEventListener('input', () => { stopPlay(); S.animTime = Number(range.value); drawScene(host); timeOut.textContent = fmtTime(S.animTime); });
      const timeOut = el('output', { htmlFor: range.id, className: 'v' }, fmtTime(at));
      const loop = el('input', { type: 'checkbox', checked: S.loop, dataset: { ilLoop: '1' } });
      loop.addEventListener('change', () => { S.loop = loop.checked; });
      const len = el('input', { type: 'number', className: 'pc-input', id: K.id(), min: 0.5, max: 3600, step: 0.5, value: a.length });
      len.addEventListener('change', () => { const v = Number(len.value); if (v >= 0.5 && v <= 3600) edit(host, t('illustrate.undo.anim_length'), (x) => { x.anim = AM.retime(x.anim, v); }, { redraw: false }); });
      const kind = el('select', { className: 'pc-select', id: K.id(), dataset: { ilVideoKind: '1' } }, ...['webm', 'mp4', 'png'].map((k) => el('option', { value: k }, t('illustrate.anim.video_' + k))));
      const width = el('input', { type: 'number', className: 'pc-input', id: K.id(), min: 320, max: 3840, step: 2, value: 1280, dataset: { ilVideoW: '1' } });
      det.append(
        el('div', { className: 'pc-actions' },
          K.btn(S.playing ? t('illustrate.anim.pause') : t('illustrate.anim.play'), () => (S.playing ? stopPlay(host) : play(host)), 'pc-btn pc-btn-sm is-primary', { dataset: { ilPlay: '1' } }),
          K.btn(t('illustrate.anim.stop'), () => { stopPlay(host); S.animTime = null; drawScene(host); host.renderPanel(); }, 'pc-btn pc-btn-sm', { dataset: { ilStop: '1' } }),
          el('label', { className: 'pc-check' }, loop, t('illustrate.anim.loop'))),
        el('div', { className: 'pc-props' }, ...K.field(t('illustrate.anim.time'), range), el('span', { className: 'k' }), timeOut, ...K.field(t('illustrate.anim.length'), len)),
        el('p', { className: 'pc-props-sub' }, t('illustrate.anim.keys_here', { time: fmtTime(at) })), quick,
        dopeSheet(host, K, a),
        el('p', { className: 'pc-props-sub' }, t('illustrate.anim.video')),
        el('div', { className: 'pc-props' }, ...K.field(t('illustrate.anim.video_kind'), kind), ...K.field(t('illustrate.export.width'), width)),
        el('div', { className: 'pc-actions' },
          K.btn(t('illustrate.anim.video_save'), () => saveVideo(host, kind.value, Number(width.value)), 'pc-btn pc-btn-sm', { dataset: { ilVideo: '1' } }),
          K.btn(t('illustrate.anim.clear'), () => { stopPlay(host); S.animTime = null; edit(host, t('illustrate.undo.anim_clear'), (x) => { x.anim = null; }); }, 'pc-btn pc-btn-sm')));
    }
    box.append(det);
  }
  // instructions (TP.8)
  {
    const ins = m.instructions;
    const det = el('details', { className: 'pc-sec il-details', open: S.open.has('ins'), dataset: { ilIns: '1' } }, el('summary', { className: 'pc-h' }, t('illustrate.panel.instructions')));
    det.addEventListener('toggle', () => { if (det.open) S.open.add('ins'); else S.open.delete('ins'); });
    const setIns = (label, fn) => edit(host, label, (x) => { fn(x.instructions); x.instructions = IN.readInstructions(x.instructions, { viewIds: new Set(x.views.map((v) => v.id)) }); }, { redraw: false });
    if (!ins) {
      det.append(el('p', { className: 'pc-note' }, t('illustrate.ins.intro')),
        K.btn(t('illustrate.ins.start'), () => { edit(host, t('illustrate.undo.ins_start'), (x) => { x.instructions = IN.defaultInstructions(x); }, { redraw: false }); S.open.add('ins'); host.renderPanel(); }, 'pc-btn pc-btn-sm', { disabled: !m.views.length, dataset: { ilInsStart: '1' } }));
    } else {
      const input = (value, max, onchange, extra = {}) => { const i = el('input', { className: 'pc-input', id: K.id(), maxLength: max, ...extra }); i.value = value; i.addEventListener('change', () => onchange(i.value)); return i; };
      const area = (value, onchange, extra = {}) => { const a = el('textarea', { className: 'pc-input', id: K.id(), rows: 2, ...extra }); a.value = value; a.addEventListener('change', () => onchange(a.value)); return a; };
      const check = (label, on, onchange, extra = {}) => { const c = el('input', { type: 'checkbox', checked: on, ...extra }); c.addEventListener('change', () => onchange(c.checked)); return el('label', { className: 'pc-check span' }, c, label); };
      const T = ins.template;
      const paper = el('select', { className: 'pc-select', id: K.id() }, ...Object.keys(LA.PAPERS).map((k) => el('option', { value: k, selected: T.paper === k }, t('illustrate.paper.' + k))));
      paper.addEventListener('change', () => setIns(t('illustrate.undo.ins_template'), (x) => { x.template.paper = paper.value; }));
      const accent = el('input', { type: 'color', className: 'il-colour', id: K.id(), value: T.accent });
      accent.addEventListener('change', () => setIns(t('illustrate.undo.ins_template'), (x) => { x.template.accent = accent.value; }));
      det.append(el('div', { className: 'pc-props' },
        ...K.field(t('illustrate.ins.title'), input(ins.title, 120, (v) => setIns(t('illustrate.undo.ins_text'), (x) => { x.title = v; }), { dataset: { ilInsTitle: '1' } })),
        ...K.field(t('illustrate.ins.subtitle'), input(ins.subtitle, 200, (v) => setIns(t('illustrate.undo.ins_text'), (x) => { x.subtitle = v; }))),
        check(t('illustrate.ins.cover'), ins.cover, (on) => setIns(t('illustrate.undo.ins_pages'), (x) => { x.cover = on; })),
        check(t('illustrate.ins.parts_page'), ins.partsPage, (on) => setIns(t('illustrate.undo.ins_pages'), (x) => { x.partsPage = on; })),
        el('p', { className: 'pc-props-sub' }, t('illustrate.ins.template')),
        ...K.field(t('illustrate.export.paper'), paper),
        check(t('illustrate.ins.landscape'), T.landscape, (on) => setIns(t('illustrate.undo.ins_template'), (x) => { x.template.landscape = on; })),
        ...K.field(t('illustrate.ins.accent'), accent),
        ...K.field(t('illustrate.ins.footer'), input(T.footer, 160, (v) => setIns(t('illustrate.undo.ins_template'), (x) => { x.template.footer = v; }))),
        el('div', { className: 'pc-actions span' },
          K.btn(T.logo ? t('illustrate.ins.logo_change') : t('illustrate.ins.logo_add'), () => pickFile(host, 'image/png,image/jpeg', async (f) => { const src = await pictureUrl(host, f); if (src) setIns(t('illustrate.undo.ins_template'), (x) => { x.template.logo = src; }); }), 'pc-btn pc-btn-sm'),
          T.logo ? K.btn(t('illustrate.ins.logo_remove'), () => setIns(t('illustrate.undo.ins_template'), (x) => { x.template.logo = ''; }), 'pc-btn pc-btn-sm') : null,
          K.btn(t('illustrate.ins.template_save'), () => host.downloadBlob(safeName(ins.title || m.name) + IN.TEMPLATE_EXT, new Blob([IN.templateText(T)], { type: 'application/json' }), 'application/json'), 'pc-btn pc-btn-sm'),
          K.btn(t('illustrate.ins.template_open'), () => pickFile(host, IN.TEMPLATE_EXT + ',.json', async (f) => { let tpl; try { tpl = IN.readTemplate(await f.text()); } catch { host.status(t('illustrate.ins.template_bad', { name: f.name }), true); return; } setIns(t('illustrate.undo.ins_template'), (x) => { x.template = tpl; }); }), 'pc-btn pc-btn-sm'))));
      const steps = el('ol', { className: 'il-steps' });
      ins.steps.forEach((st, k) => {
        const view = el('select', { className: 'pc-select', id: K.id() }, ...m.views.map((v) => el('option', { value: v.id, selected: v.id === st.view }, v.name)));
        view.addEventListener('change', () => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].view = view.value; }));
        const pic = el('select', { className: 'pc-select', id: K.id() }, ...IN.PICTURES.map((p) => el('option', { value: p, selected: st.picture === p }, t('illustrate.ins.picture.' + p))));
        pic.addEventListener('change', () => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].picture = pic.value; }));
        steps.append(el('li', { className: 'il-step', dataset: { ilStep: String(k) } },
          el('div', { className: 'pc-sec-head' }, el('strong', {}, t('illustrate.ins.step_n', { n: k + 1 })), el('span', { className: 'il-view-acts' },
            K.icon('arrow-up', t('illustrate.view.up'), () => setIns(t('illustrate.undo.ins_step'), (x) => { const [s] = x.steps.splice(k, 1); x.steps.splice(k - 1, 0, s); }), { disabled: k === 0 }),
            K.icon('arrow-down', t('illustrate.view.down'), () => setIns(t('illustrate.undo.ins_step'), (x) => { const [s] = x.steps.splice(k, 1); x.steps.splice(k + 1, 0, s); }), { disabled: k === ins.steps.length - 1 }),
            K.icon('trash', t('illustrate.ins.step_delete'), () => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps.splice(k, 1); })))),
          el('div', { className: 'pc-props' },
            ...K.field(t('illustrate.ins.view'), view), ...K.field(t('illustrate.ins.step_title'), input(st.title, 120, (v) => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].title = v; }))),
            ...K.field(t('illustrate.ins.picture'), pic),
            check(t('illustrate.ins.step_list'), st.list, (on) => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].list = on; })),
            ...K.field(t('illustrate.ins.notes'), area(st.notes, (v) => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].notes = v; }), { maxLength: 4000, dataset: { ilNotes: String(k) } })),
            ...K.field(t('illustrate.ins.warnings'), area(st.warnings.join('\n'), (v) => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].warnings = v.split('\n'); }), { maxLength: 4000 })),
            ...K.field(t('illustrate.ins.tools'), area(st.tools.join('\n'), (v) => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps[k].tools = v.split('\n'); }), { maxLength: 2400 })))));
      });
      const addView = el('select', { className: 'pc-select', id: K.id(), dataset: { ilAddStep: '1' } }, ...m.views.map((v) => el('option', { value: v.id }, v.name)));
      det.append(el('p', { className: 'pc-props-sub' }, t('illustrate.ins.steps')), steps,
        el('div', { className: 'pc-props' }, ...K.field(t('illustrate.ins.add_step'), addView)),
        el('div', { className: 'pc-actions' },
          K.btn(t('illustrate.ins.add'), () => setIns(t('illustrate.undo.ins_step'), (x) => { x.steps.push(...IN.stepsFromViews(m, [addView.value])); }), 'pc-btn pc-btn-sm', { disabled: !m.views.length }),
          K.btn(t('illustrate.ins.pdf'), () => saveInstructions(host, 'pdf'), 'pc-btn pc-btn-sm is-primary', { dataset: { ilInsPdf: '1' } }),
          K.btn(t('illustrate.ins.html'), () => saveInstructions(host, 'html'), 'pc-btn pc-btn-sm', { dataset: { ilInsHtml: '1' } })));
    }
    box.append(det);
  }
  // product tree
  const tree = el('ul', { className: 'il-tree', role: 'tree', 'aria-label': t('illustrate.panel.parts'), 'aria-multiselectable': 'true' });
  const sc = shownScene();
  for (const r of MN.treeRows(m)) {
    if (r.kind === 'group') {
      const ids = MN.instancesIn(m, r.id);
      const all = ids.length && ids.every((id) => S.sel.has(id));
      tree.append(el('li', { className: 'il-row il-row-group', role: 'none', style: `--d:${r.depth}` },
        el('button', { type: 'button', role: 'treeitem', className: 'il-row-name', 'aria-selected': String(!!all), dataset: { ilGroup: r.id }, onclick: (e) => selectRow(host, ids, e) }, r.name),
        el('span', { className: 'il-flag' }, t('illustrate.tree.group_n', { n: ids.length })), el('span')));
      continue;
    }
    const st = MN.instState(sc, r.id);
    tree.append(el('li', { className: 'il-row' + (st.hide ? ' is-hidden' : '') + (st.ghost ? ' is-ghost' : ''), role: 'none', style: `--d:${r.depth}` },
      el('button', { type: 'button', role: 'treeitem', className: 'il-row-name', 'aria-selected': String(S.sel.has(r.id)), dataset: { ilInst: r.id }, onclick: (e) => selectRow(host, [r.id], e) }, r.name),
      el('span', { className: 'il-flag' }, st.hide ? t('illustrate.tree.hidden') : st.ghost ? t('illustrate.tree.ghost') : ''),
      K.icon(st.hide ? 'eye-slash' : 'eye', st.hide ? t('illustrate.tree.show') : t('illustrate.tree.hide'), () => edit(host, st.hide ? t('illustrate.undo.show') : t('illustrate.undo.hide'), (x) => MN.setInstState(x.scene, [r.id], { hide: !st.hide })), { dataset: { ilEye: r.id } })));
  }
  box.append(el('div', { className: 'pc-sec' }, el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, t('illustrate.panel.parts'))), tree));
  // the selection
  const ids = selIds();
  if (ids.length) {
    const first = MN.instState(sc, ids[0]);
    const part = m.parts[m.instances.find((i) => i.id === ids[0]).part];
    const op = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 5, max: 100, step: 5, value: Math.round(first.opacity * 100), dataset: { ilOpacity: '1' } });
    op.addEventListener('change', () => setLook(host, t('illustrate.undo.opacity'), { opacity: Number(op.value) / 100 }));
    const col = el('input', { type: 'color', className: 'il-colour', id: K.id(), value: first.color || '#c8ced6', dataset: { ilColour: '1' } });
    col.addEventListener('change', () => setLook(host, t('illustrate.undo.colour'), { color: col.value }));
    box.append(el('div', { className: 'pc-sec' },
      el('div', { className: 'pc-sec-head' }, el('h3', { className: 'pc-h' }, ids.length === 1 ? m.instances.find((i) => i.id === ids[0]).name : t('illustrate.sel.n', { n: ids.length }))),
      ids.length === 1 ? el('dl', { className: 'pc-props' },
        el('dt', { className: 'k' }, t('illustrate.sel.part')), el('dd', { className: 'v' }, part.name),
        el('dt', { className: 'k' }, t('illustrate.sel.number')), el('dd', { className: 'v' }, part.number || '—'),
        el('dt', { className: 'k' }, t('illustrate.sel.material')), el('dd', { className: 'v' }, part.material || '—')) : null,
      el('div', { className: 'pc-props' }, ...K.field(t('illustrate.sel.opacity'), op), ...K.field(t('illustrate.sel.colour'), col)),
      el('div', { className: 'pc-actions' },
        K.btn(t('illustrate.sel.same_part'), () => { S.sel = new Set(MN.sameParts(m, ids)); drawScene(host); host.renderAll(); }, 'pc-btn pc-btn-sm', { dataset: { ilSame: '1' } }),
        K.btn(t('illustrate.sel.plain'), () => setLook(host, t('illustrate.undo.plain'), { ghost: false, opacity: 1, color: null }), 'pc-btn pc-btn-sm'),
        K.btn(t('illustrate.sel.clear'), () => { S.sel = new Set(); drawScene(host); host.renderAll(); }, 'pc-btn pc-btn-sm'))));
  }
  return t('illustrate.ws.label');
}
/** A line naming an annotation in the list. */
function annotTitle(a) {
  const k = t('illustrate.annot.kind.' + (a.kind === 'measure' ? a.measure.kind : a.kind === 'arrow' ? 'arrow_' + a.arrow.style : a.kind === 'shape' ? 'shape_' + a.shape : a.kind));
  if (a.kind === 'balloon') return k + ' ' + (PL.numberOf(S.doc.m, a.pid) ?? '?') + ' · ' + (S.doc.m.parts[a.pid]?.name || '');
  if (a.kind === 'measure') return k + ' ' + AN.measureValue(S.doc.m, a).text;
  if (a.text) return k + ': ' + a.text.split('\n')[0].slice(0, 40);
  return k;
}
/** The selected annotation's fields; each change is one undo step. */
function annotEditor(host, K, a) {
  const { el } = K;
  const set = (label, patch) => edit(host, label, (m) => AN.updateAnnotation(m, a.id, patch));
  const g = el('div', { className: 'pc-props il-editor', dataset: { ilEditor: a.id } });
  if (a.kind === 'label' || a.kind === 'callout') {
    const tx = el('textarea', { className: 'pc-input', id: K.id(), rows: 2, maxLength: 2000, dataset: { ilText: '1' } });
    tx.value = a.text;
    tx.addEventListener('change', () => set(t('illustrate.undo.annot_text'), { text: tx.value }));
    const fr = el('select', { className: 'pc-select', id: K.id() }, ...AN.FRAMES.map((f) => el('option', { value: f, selected: a.frame === f }, t('illustrate.annot.frame.' + f))));
    fr.addEventListener('change', () => set(t('illustrate.undo.annot_frame'), { frame: fr.value }));
    g.append(...K.field(t('illustrate.annot.text'), tx), el('p', { className: 'pc-note span' }, t('illustrate.annot.fields')), ...K.field(t('illustrate.annot.frame'), fr));
  }
  if (a.kind === 'arrow') {
    const st = el('select', { className: 'pc-select', id: K.id() }, ...AN.ARROW_STYLES.map((f) => el('option', { value: f, selected: a.arrow.style === f }, t('illustrate.annot.kind.arrow_' + f))));
    st.addEventListener('change', () => set(t('illustrate.undo.annot_arrow'), { arrow: { ...a.arrow, style: st.value } }));
    const ln = el('input', { type: 'number', className: 'pc-input', id: K.id(), min: 0.1, step: 'any', value: Number(a.arrow.len.toFixed(2)) });
    ln.addEventListener('change', () => { const v = Number(ln.value); if (v > 0 && v < 1e6) set(t('illustrate.undo.annot_arrow'), { arrow: { ...a.arrow, len: v } }); });
    const flip = K.btn(t('illustrate.annot.flip'), () => set(t('illustrate.undo.annot_arrow'), { arrow: { ...a.arrow, dir: a.arrow.dir.map((x) => -x) } }), 'pc-btn pc-btn-sm span');
    g.append(...K.field(t('illustrate.annot.style'), st), ...K.field(t('illustrate.annot.length'), ln), flip);
  }
  if (a.kind === 'measure') {
    const dc = el('select', { className: 'pc-select', id: K.id() }, ...[0, 1, 2, 3].map((d) => el('option', { value: d, selected: a.measure.decimals === d }, String(d))));
    dc.addEventListener('change', () => set(t('illustrate.undo.annot_decimals'), { measure: { ...a.measure, decimals: Number(dc.value) } }));
    g.append(el('span', { className: 'k' }, t('illustrate.annot.value')), el('span', { className: 'v' }, AN.measureValue(S.doc.m, a).text), ...K.field(t('illustrate.annot.decimals'), dc));
  }
  const size = el('input', { type: 'range', className: 'il-range', id: K.id(), min: 10, max: 80, step: 2, value: Math.round((a.style?.size ?? AN.DEFAULT_SIZE) * 1000), dataset: { ilSize: '1' } });
  size.addEventListener('change', () => set(t('illustrate.undo.annot_style'), { style: { ...a.style, size: Number(size.value) / 1000 } }));
  const col = el('input', { type: 'color', className: 'il-colour', id: K.id(), value: a.style?.color || '#1b1b1b' });
  col.addEventListener('change', () => set(t('illustrate.undo.annot_style'), { style: { ...a.style, color: col.value } }));
  if (a.kind !== 'picture') g.append(...K.field(t('illustrate.annot.size'), size), ...K.field(t('illustrate.annot.colour'), col));
  g.append(el('div', { className: 'pc-actions span' }, K.btn(t('illustrate.annot.delete'), () => { edit(host, t('illustrate.undo.delete_annot'), (m) => AN.removeAnnotation(m, a.id)); S.annSel = null; host.renderAll(); }, 'pc-btn pc-btn-sm', { dataset: { ilAnnotDel: a.id } })));
  return g;
}
async function renameView(host, id) {
  const v = S.doc.view(id);
  if (!v) return;
  const row = document.querySelector(`[data-il-view="${CSS_ESCAPE(id)}"] .il-view-name`);
  if (!row) return;
  const input = host.el('input', { className: 'pc-input', value: v.name, maxLength: MN.LIMITS.name, 'aria-label': t('illustrate.view.rename') });
  const done = (ok) => { if (ok && input.value.trim() && input.value.trim() !== v.name) edit(host, t('illustrate.undo.rename_view'), (m) => MN.renameView(m, id, input.value), { redraw: false }); else host.renderPanel(); };
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); done(true); } else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); done(false); } });
  input.addEventListener('blur', () => done(true), { once: true });
  row.replaceWith(input);
  input.focus(); input.select();
}
const CSS_ESCAPE = (s) => String(s).replace(/["\\]/g, '\\$&');

// ---------------------------------------------------------------------------------------------- the workspace
function lazyLabels(ws) {
  const lazy = (o, f) => { const key = o[f]; Object.defineProperty(o, f, { get: () => t(key), enumerable: true, configurable: true }); };
  lazy(ws, 'label'); if (ws.blurb !== undefined) lazy(ws, 'blurb');
  for (const g of ws.groups) { lazy(g, 'label'); for (const it of g.items) { lazy(it, 'label'); lazy(it, 'title'); } }
  return ws;
}
const NEEDS_DOC = new Set(['illustrate-export', 'illustrate-save', 'illustrate-view-add', 'illustrate-view-update', 'illustrate-hide', 'illustrate-ghost', 'illustrate-isolate', 'illustrate-show-all']);
const NEEDS_SEL = new Set(['illustrate-hide', 'illustrate-ghost', 'illustrate-isolate']);

export const WORKSPACE = lazyLabels(registerWorkspace({
  id: 'illustrate',
  label: 'illustrate.ws.label',
  icon: 'easel',
  blurb: 'illustrate.ws.blurb',
  assemblies: true,   // asked of part-08: may open while an assembly is open (then host.assembly() gives it)
  _state: S,   // the browser tests read the workspace's state here
  groups: [
    { label: 'illustrate.group.manual', items: [
      { cmd: 'illustrate-new', icon: 'file-earmark-plus', label: 'illustrate.tb.new', title: 'illustrate.tb.new.title' },
      { cmd: 'illustrate-open', icon: 'folder2-open', label: 'illustrate.tb.open', title: 'illustrate.tb.open.title' },
      { cmd: 'illustrate-save', icon: 'save', label: 'illustrate.tb.save', title: 'illustrate.tb.save.title' },
    ] },
    { label: 'illustrate.group.views', items: [
      { cmd: 'illustrate-view-add', icon: 'camera', label: 'illustrate.tb.add', title: 'illustrate.tb.add.title' },
      { cmd: 'illustrate-view-update', icon: 'camera-reels', label: 'illustrate.tb.update', title: 'illustrate.tb.update.title' },
    ] },
    { label: 'illustrate.group.show', items: [
      { cmd: 'illustrate-hide', icon: 'eye-slash', label: 'illustrate.tb.hide', title: 'illustrate.tb.hide.title' },
      { cmd: 'illustrate-ghost', icon: 'transparency', label: 'illustrate.tb.ghost', title: 'illustrate.tb.ghost.title' },
      { cmd: 'illustrate-isolate', icon: 'bullseye', label: 'illustrate.tb.isolate', title: 'illustrate.tb.isolate.title' },
      { cmd: 'illustrate-show-all', icon: 'eye', label: 'illustrate.tb.showall', title: 'illustrate.tb.showall.title' },
    ] },
    { label: 'illustrate.group.out', items: [
      { cmd: 'illustrate-export', icon: 'box-arrow-up-right', label: 'illustrate.tb.export', title: 'illustrate.tb.export.title' },
    ] },
  ],
  enter(host) {
    S.host = host;
    if (typeof document !== 'undefined' && !document.getElementById('il-css')) { const st = host.el('style', { id: 'il-css' }); st.textContent = CSS; document.head.append(st); }
    if (S.doc) showScene(host, true);
  },
  exit(host) {
    if (S.doc) syncCamera(host);
    stopPlay(); S.animTime = null;
    S.preview = null; S.tool = null; S.toolPts = []; S.dragPrev = null;
    dropOverlay();
    hideHostParts(host, false);
    if (S.scene3d) { S.scene3d.dispose(); S.scene3d = null; }   // the view drops the overlay (and its geometries) after this
  },
  command(cmd, host) {
    switch (cmd) {
      case 'illustrate-new': newManual(host); return true;
      case 'illustrate-open': leaveDirty(host).then((go) => { if (go) pickFile(host, MN.EXT + ',.json,application/json', (f) => openManualFile(host, f)); }); return true;
      case 'illustrate-save': save(host); return true;
      case 'illustrate-view-add': addView(host); return true;
      case 'illustrate-view-update': updateView(host); return true;
      case 'illustrate-hide': setLook(host, t('illustrate.undo.hide'), { hide: true }); S.sel = new Set(); host.renderAll(); return true;
      case 'illustrate-ghost': { const ids = selIds(); const on = !ids.every((id) => MN.instState(S.doc.m.scene, id).ghost); setLook(host, on ? t('illustrate.undo.ghost') : t('illustrate.undo.unghost'), { ghost: on }); return true; }
      case 'illustrate-isolate': { const ids = selIds(); if (ids.length) edit(host, t('illustrate.undo.isolate'), (m) => MN.isolate(m, m.scene, ids)); return true; }
      case 'illustrate-show-all': edit(host, t('illustrate.undo.show_all'), (m) => MN.showAll(m, m.scene)); return true;
      case 'illustrate-export': exportDialog(host); return true;
    }
    if (!S.doc) return false;
    // shared commands that mean the manual while one is open
    if (cmd === 'save') { save(host); return true; }
    if (cmd === 'undo' || cmd === 'redo') {
      const label = cmd === 'undo' ? S.doc.undo() : S.doc.redo();
      S.preview = null;
      host.status(label ? t(cmd === 'undo' ? 'illustrate.undone' : 'illustrate.redone', { label }) : t(cmd === 'undo' ? 'illustrate.nothing_to_undo' : 'illustrate.nothing_to_redo'));
      drawScene(host); host.renderAll();
      return true;
    }
    if (cmd === 'select-all') { S.sel = new Set(MN.shownInstances(S.doc.m, S.doc.m.scene).map((i) => i.id)); drawScene(host); host.renderAll(); return true; }
    if (cmd === 'select-none') { S.sel = new Set(); S.annSel = null; drawScene(host); host.renderAll(); return true; }
    if (cmd === 'delete' && S.annSel) { const id = S.annSel; S.annSel = null; edit(host, t('illustrate.undo.delete_annot'), (m) => AN.removeAnnotation(m, id)); return true; }
    const vm = /^view-(iso|front|back|top|bottom|right|left|fit)$/.exec(cmd);
    if (vm) { fitTo(host, vm[1]); return true; }
    return false;
  },
  toolState(cmd, host) {
    if (S.busy) return { ok: false, why: t('illustrate.busy') };
    if (NEEDS_DOC.has(cmd) && !S.doc) return { ok: false, why: t('illustrate.need_manual') };
    if (NEEDS_SEL.has(cmd) && !S.sel.size) return { ok: false, why: t('illustrate.need_selection') };
    if (cmd === 'illustrate-view-update' && !(S.viewId && S.doc.view(S.viewId))) return { ok: false, why: t('illustrate.view.none_open') };
    return { ok: true };
  },
  editState() {
    if (!S.doc) return {};
    const yes = { ok: true, why: '' };
    return { 'select-all': yes, 'select-none': S.sel.size || S.annSel ? yes : { ok: false, why: t('illustrate.need_selection') }, delete: S.annSel ? yes : { ok: false, why: t('illustrate.annot.pick_first') } };
  },
  /** The Undo / Redo buttons while Illustrate is active (asked of part-08: partcraft.js reads it when it is there). */
  undoState() { return S.doc ? { undo: S.doc.canUndo, redo: S.doc.canRedo } : null; },
  /** The part (or the open assembly) was built again: it comes back into the view, so keep it out of sight. */
  rebuilt(host) { if (S.doc) { hideHostParts(host, true); host.view.render(); } },
  renderPanel,
  onPick,
  onHover() {},
  keydown(e, host) {
    if (!S.doc || e.ctrlKey || e.metaKey || e.altKey) return false;
    const k = e.key.toLowerCase();
    if (k === 'h') { WORKSPACE.command('illustrate-hide', host); return true; }
    if (k === 'g') { WORKSPACE.command('illustrate-ghost', host); return true; }
    if (k === 'i') { WORKSPACE.command('illustrate-isolate', host); return true; }
    if (e.key === 'Escape' && S.tool) { setTool(host, S.tool); return true; }
    if (e.key === 'Escape' && (S.sel.size || S.annSel)) { S.sel = new Set(); S.annSel = null; drawScene(host); host.renderAll(); return true; }
    if ((e.key === 'Delete' || e.key === 'Backspace') && S.annSel) { WORKSPACE.command('delete', host); return true; }
    return false;
  },
}));
