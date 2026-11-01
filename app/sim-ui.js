/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sim-ui.js — what the Simulation and Generative workspaces share on the page: editing a study in the part
 * (one undo step per change), picking faces for supports, loads and regions, the markers drawn in the view,
 * the panel's list and item editor, colour maps and legends. Top level is DOM-free (Node imports the ws files);
 * everything here runs inside a workspace hook and reaches the page only through `host`.
 */
import { faceRef } from './brep.js';
import { describe, CONSTRAINT_LABEL, LOAD_LABEL, findFaceIndex } from './sim.js';
import { exactWhy } from './exact-client.js';
import { t } from './i18n.js';

export const fmt = (v, dp = 3) => (Number.isFinite(v) ? String(+Number(v).toFixed(dp)) : '');
/** 4 significant figures, plain. */
export const sig = (v) => (Number.isFinite(v) ? (Math.abs(v) >= 1e5 || (Math.abs(v) < 1e-3 && v !== 0) ? v.toExponential(3) : String(+v.toPrecision(4))) : '');

/** Item kinds: prefix for new ids, label, icon; optional make(id, type) (new item), editor(g, it, set, K, host) (its panel fields) and shown(study) (markers drawn). Other modules add kinds (sim-thermal-ui.js: heat). */
export const ITEM = {
  constraints: { prefix: 'c', label: (it) => CONSTRAINT_LABEL[it.type], icon: (it) => (it.type === 'fixed' ? 'pin-angle' : 'arrows-expand') },
  loads: { prefix: 'l', label: (it) => LOAD_LABEL[it.type], icon: (it) => (it.type === 'force' ? 'arrow-down' : it.type === 'pressure' ? 'arrows-collapse' : 'globe') },
  preserve: { prefix: 'k', label: () => t('study.ui.preserve'), icon: () => 'shield-check' },
  obstacle: { prefix: 'o', label: () => t('study.ui.obstacle'), icon: () => 'slash-circle' },
};
const AXES = [['-y', null, [0, -1, 0]], ['y', null, [0, 1, 0]],   // Down / Up: words from the language files (axisOpts)
  ['x', '+X', [1, 0, 0]], ['-x', '−X', [-1, 0, 0]], ['z', '+Z', [0, 0, 1]], ['-z', '−Z', [0, 0, -1]]];
const axisOpts = () => AXES.map(([k, l]) => [k, k === '-y' ? t('study.ui.axis.down') : k === 'y' ? t('study.ui.axis.up') : l]);
const axisKey = (d) => { const a = AXES.find(([, , v]) => v.every((c, i) => Math.abs(c - d[i] / Math.hypot(...d)) < 1e-9)); return a ? a[0] : 'custom'; };

/** Per-workspace page state for the shared parts. */
export function makeCtx(key, newStudy, readStudy) {
  return { key, newStudy, readStudy, sel: null, picking: false, hoverProbe: null };
}

export const study = (host, ctx) => host.study(ctx.key);
/** Change the study in the part: fn(copy) edits it (return false to cancel); one undo step. */
export function edit(host, ctx, label, fn) {
  const s = JSON.parse(JSON.stringify(study(host, ctx) || ctx.newStudy()));
  if (fn(s) === false) return null;
  host.setStudy(ctx.key, ctx.readStudy(s), label);
  if (ctx.onEdit) ctx.onEdit(host);
  return s;
}
export const itemOf = (st, id) => (st ? Object.keys(ITEM).flatMap((k) => (st[k] || []).map((it) => ({ it, kind: k }))).find((x) => x.it.id === id) || null : null);
export const itemName = (kind, it) => t('study.sim.item_name', { label: ITEM[kind].label(it), n: it.id.replace(/\D/g, '') });

/** A new constraint, load or region, selected and (when it takes faces) in picking mode. */
export function addItem(host, ctx, kind, type, extra = {}) {
  if (!host.regen || !(host.regen.exact || host.regen.named)) { host.status(exactWhy(t('kernel.what.simulation'), t('study.ui.needs_exact'))); return null; }
  let made = null;
  edit(host, ctx, t('study.ui.add_item', { what: (type && (kind === 'constraints' || kind === 'loads') ? (kind === 'constraints' ? CONSTRAINT_LABEL[type] : LOAD_LABEL[type]) : ITEM[kind].label({ type })).toLowerCase() }), (s) => {
    s.seq = (s.seq || 0) + 1;
    const id = ITEM[kind].prefix + s.seq;
    if (kind === 'constraints') made = { id, type, faces: [] };
    else if (kind === 'loads') made = type === 'force' ? { id, type, faces: [], total: 100, dir: 'normal' } : type === 'pressure' ? { id, type, faces: [], p: 1 } : { id, type: 'gravity', dir: [0, -1, 0] };
    else if (ITEM[kind].make) made = ITEM[kind].make(id, type);
    else made = { id, faces: [], t: extra.t ?? 2 };
    (s[kind] ||= []).push(made);
  });
  if (!made) return null;
  ctx.sel = made.id;
  ctx.picking = !!made.faces;
  if (ctx.picking) host.status(t('study.ui.pick_start', { item: itemName(kind, made) }), true);
  host.renderPanel();
  return made;
}

/** A click in the view while picking: add or drop the face on the selected item. */
export function togglePick(host, ctx, hit) {
  const st = study(host, ctx), x = itemOf(st, ctx.sel), rg = host.regen;
  if (!x || !x.it.faces || !rg || !rg.faces) return;
  if (!hit || hit.kind !== 'face' || hit.face === undefined || hit.face < 0) { host.status(t('study.ui.click_face')); return; }
  const ref = faceRef(rg.faces[hit.face]);
  edit(host, ctx, t('study.ui.pick_for', { item: itemName(x.kind, x.it) }), (s) => {
    const it = itemOf(s, x.it.id).it;
    const k = it.faces.findIndex((f) => findFaceIndex(rg.faces, f) === hit.face);
    if (k >= 0) it.faces.splice(k, 1);
    else { if (it.faces.length >= 64) { host.status(t('study.ui.max_faces')); return false; } it.faces.push(ref); }
  });
}

export function hoverFace(host, hit) {
  if (!hit || hit.kind !== 'face' || hit.face === undefined) { host.view.setHover(null); return; }
  const tris = [], tf = host.regen && host.regen.mesh && host.regen.mesh.triFace;
  if (tf) for (let t = 0; t < tf.length; t++) if (tf[t] === hit.face) tris.push(t);
  host.view.setHover({ tris });
}

/** The selected item's faces marked in the view. */
export function marks(host, ctx) {
  const x = itemOf(study(host, ctx), ctx.sel), rg = host.regen;
  if (!x || !x.it.faces || !rg || !rg.faces) { host.view.setMarks(null); return; }
  host.view.setMarks({ faces: x.it.faces.map((f) => findFaceIndex(rg.faces, f)).filter((i) => i >= 0) });
}

// ---------------------------------------------------------------- markers in the view

/** Up to `max` points (with outward normals) spread over a face of the mesh: centroids of its larger triangles. */
export function faceSamples(mesh, fi, max = 6) {
  const P = mesh.positions, I = mesh.indices, tf = mesh.triFace, tris = [];
  if (!tf) return [];
  for (let t = 0; t < tf.length; t++) if (tf[t] === fi) {
    const a = 3 * I[3 * t], b = 3 * I[3 * t + 1], c = 3 * I[3 * t + 2];
    const u = [P[b] - P[a], P[b + 1] - P[a + 1], P[b + 2] - P[a + 2]], w = [P[c] - P[a], P[c + 1] - P[a + 1], P[c + 2] - P[a + 2]];
    const n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]], l = Math.hypot(...n);
    if (l > 0) tris.push({ area: l / 2, p: [(P[a] + P[b] + P[c]) / 3, (P[a + 1] + P[b + 1] + P[c + 1]) / 3, (P[a + 2] + P[b + 2] + P[c + 2]) / 3], n: n.map((v) => v / l) });
  }
  if (!tris.length) return [];
  // farthest-point picks among the triangle centroids (the largest first)
  tris.sort((p, q) => q.area - p.area);
  const out = [tris[0]];
  while (out.length < Math.min(max, tris.length)) {
    let best = null, bd = -1;
    for (const t of tris) { const d = Math.min(...out.map((o) => Math.hypot(o.p[0] - t.p[0], o.p[1] - t.p[1], o.p[2] - t.p[2]))); if (d > bd) { bd = d; best = t; } }
    if (bd <= 1e-9) break;
    out.push(best);
  }
  return out;
}

const COLORS = { fixed: '#2f6fd6', frictionless: '#2fa3b8', force: '#d9822b', pressure: '#a34fd8', gravity: '#7a8a2f', preserve: '#2e9e5b', obstacle: '#c0392b',
  temperature: '#d64545', flux: '#e0892b', power: '#c2549b', convection: '#3a8fd6', radiation: '#b8a12f' };

/** Draw supports (cones into the face), loads (arrows), gravity (one arrow) and regions (tinted faces). */
export function drawMarkers(host, ctx, prefix) {
  const { view, THREE } = host, rg = host.regen, st = study(host, ctx);
  view.setOverlay(prefix + '-markers', null);
  if (!st || !rg || !rg.mesh || !rg.faces || !rg.stats) return;
  const bb = rg.stats.bbox, diag = Math.hypot(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]) || 100;
  const L = diag * 0.07, grp = new THREE.Group();
  const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const arrow = (from, dir, len, color) => { const a = new THREE.ArrowHelper(v3(dir).normalize(), v3(from), len, color, len * 0.3, len * 0.16); a.renderOrder = 20; grp.add(a); };
  const cone = (p, n, color) => {
    const h = L * 0.35, m = new THREE.Mesh(new THREE.ConeGeometry(h * 0.45, h, 12), new THREE.MeshBasicMaterial({ color }));
    m.position.copy(v3(p).addScaledVector(v3(n), h / 2));
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v3(n).negate());
    grp.add(m);
  };
  const faceIdx = (it) => (it.faces || []).map((f) => findFaceIndex(rg.faces, f)).filter((i) => i >= 0);
  const vis = (k) => !(ITEM[k] && ITEM[k].shown) || ITEM[k].shown(st);   // a kind may hide its items for some studies
  for (const c of vis('constraints') ? st.constraints || [] : []) for (const fi of faceIdx(c)) for (const s of faceSamples(rg.mesh, fi, 8)) cone(s.p, s.n, COLORS[c.type]);
  for (const l of vis('loads') ? st.loads || [] : []) {
    if (l.type === 'gravity') { const c = [0, 1, 2].map((a) => (bb.min[a] + bb.max[a]) / 2); arrow(c.map((v, a) => v - l.dir[a] / Math.hypot(...l.dir) * L), l.dir, L * 1.6, COLORS.gravity); continue; }
    const sign = l.type === 'force' ? Math.sign(l.total) || 1 : Math.sign(l.p) || 1;
    for (const fi of faceIdx(l)) for (const s of faceSamples(rg.mesh, fi, l.type === 'pressure' ? 8 : 5)) {
      const d = l.type === 'force' && Array.isArray(l.dir) ? l.dir.map((v) => v * sign) : s.n.map((v) => -v * sign);
      const dl = Math.hypot(...d) || 1, u = d.map((v) => v / dl), len = l.type === 'pressure' ? L * 0.6 : L;
      // the arrow ends on the face when it pushes, starts there when it pulls
      const into = u[0] * s.n[0] + u[1] * s.n[1] + u[2] * s.n[2] < 0;
      arrow(into ? s.p.map((v, a) => v - u[a] * len) : s.p, u, len, COLORS[l.type]);
    }
  }
  for (const kind of ['preserve', 'obstacle', 'heat']) for (const r of vis(kind) ? st[kind] || [] : []) {
    const want = new Set(faceIdx(r)), P = rg.mesh.positions, I = rg.mesh.indices, tf = rg.mesh.triFace, pos = [];
    if (!tf) continue;
    for (let t = 0; t < tf.length; t++) if (want.has(tf[t])) for (let k = 0; k < 3; k++) { const v = 3 * I[3 * t + k]; pos.push(P[v], P[v + 1], P[v + 2]); }
    if (!pos.length) continue;
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: COLORS[r.type] || COLORS[kind], transparent: true, opacity: 0.35, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, side: THREE.DoubleSide }));
    m.renderOrder = 15; grp.add(m);
  }
  view.setOverlay(prefix + '-markers', grp);
}

// ---------------------------------------------------------------- colour maps and legends

// a perceptual rainbow (blue → cyan → green → yellow → red), as most FEA plots use
const STOPS = [[0.18, 0.30, 0.85], [0.10, 0.72, 0.88], [0.25, 0.75, 0.30], [0.97, 0.82, 0.15], [0.86, 0.20, 0.15]];
export function colormap(t) {
  const x = Math.max(0, Math.min(1, Number.isFinite(t) ? t : 0)) * (STOPS.length - 1), i = Math.min(STOPS.length - 2, Math.floor(x)), f = x - i;
  return [0, 1, 2].map((k) => STOPS[i][k] + f * (STOPS[i + 1][k] - STOPS[i][k]));
}
export const gradientCss = (rev = false) => 'linear-gradient(to right, ' + (rev ? [...STOPS].reverse() : STOPS).map((c) => `rgb(${c.map((v) => Math.round(v * 255)).join(',')})`).join(', ') + ')';

/** Per-vertex colours for values in [lo, hi] (rev: high is good, as for safety factor). */
export function colorsFor(values, lo, hi, rev = false) {
  const out = new Float32Array(values.length * 3), span = hi - lo || 1;
  for (let i = 0; i < values.length; i++) { let t = (values[i] - lo) / span; if (rev) t = 1 - t; const c = colormap(t); out[3 * i] = c[0]; out[3 * i + 1] = c[1]; out[3 * i + 2] = c[2]; }
  return out;
}

export function legend(host, { title, lo, hi, unit, rev = false }) {
  const { el } = host;
  const bar = el('div', { className: 'pc-sim-bar', 'aria-hidden': 'true' });
  bar.style.setProperty('background', gradientCss(rev));
  const ticks = el('div', { className: 'pc-sim-ticks' }, ...[0, 0.25, 0.5, 0.75, 1].map((f) => el('span', {}, sig(lo + f * (hi - lo)))));
  return el('div', { className: 'pc-sim-legend', dataset: { simLegend: '1' } }, el('p', { className: 'pc-props-sub' }, `${title} (${unit})`), bar, ticks);
}

// ---------------------------------------------------------------- panel pieces

export function kit(host) {
  const { el } = host;
  let uid = 0;
  const id = () => 'pc-s' + Math.random().toString(36).slice(2, 8) + (++uid);
  const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
  const num = (value, onchange, { min = null, max = null, nullable = false, data = null } = {}) => {
    const i = el('input', { type: 'number', className: 'pc-input', id: id(), value: value === null || value === undefined ? '' : fmt(value, 6), step: 'any', inputMode: 'decimal' });
    if (data) Object.assign(i.dataset, data);
    i.addEventListener('change', () => {
      if (nullable && i.value.trim() === '') { onchange(null); return; }
      const v = Number(i.value);
      if (i.value.trim() === '' || !Number.isFinite(v) || (min !== null && v < min) || (max !== null && v > max)) { host.status(min !== null && max !== null ? t('study.ui.number_range', { min, max }) : min !== null ? t('study.ui.number_min', { min }) : max !== null ? t('study.ui.number_max', { max }) : t('study.ui.number')); i.value = value === null || value === undefined ? '' : fmt(value, 6); return; }
      onchange(v);
    });
    return i;
  };
  const sel = (options, value, onchange, data = null) => {
    const s = el('select', { className: 'pc-select', id: id() }, ...options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
    if (data) Object.assign(s.dataset, data);
    s.addEventListener('change', () => onchange(s.value));
    return s;
  };
  const check = (label, value, onchange, extra = {}) => {
    const i = el('input', { type: 'checkbox', checked: !!value, ...extra });
    i.addEventListener('change', () => onchange(i.checked));
    return el('label', { className: 'pc-check span' }, i, label);
  };
  const btn = (label, onclick, cls = 'pc-btn', extra = {}) => el('button', { type: 'button', className: cls, onclick, ...extra }, label);
  return { field, num, sel, check, btn };
}

/** The list of supports, loads and regions, and the selected item's editor. kinds: which lists to show. */
export function renderItems(host, ctx, box, K, kinds) {
  const { el } = host;
  const st = study(host, ctx);
  const list = el('div', { className: 'pc-list', role: 'listbox', 'aria-label': t('study.ui.items_label') });
  let n = 0;
  for (const kind of kinds) for (const it of st[kind] || []) {
    n++;
    const missing = it.faces && host.regen && host.regen.faces ? it.faces.filter((f) => findFaceIndex(host.regen.faces, f) < 0).length : 0;
    const flag = it.faces && !it.faces.length ? t('study.ui.flag_no_faces') : missing ? t('study.ui.flag_gone', { n: missing }) : it.faces ? t('study.sim.desc.faces', { n: it.faces.length }) : '';
    list.append(el('button', { type: 'button', className: 'pc-node' + (missing || (it.faces && !it.faces.length) ? ' is-warn' : ''), role: 'option', 'aria-selected': String(ctx.sel === it.id), dataset: { simItem: it.id }, onclick: () => { ctx.sel = it.id; ctx.picking = false; host.renderPanel(); } },
      el('i', { className: 'bi bi-' + ITEM[kind].icon(it), 'aria-hidden': 'true' })   // i18n-ignore: icon class
      , el('span', { className: 'pc-node-name' }, itemName(kind, it)), el('span', { className: 'pc-node-flag' }, flag)));
  }
  if (!n) list.append(el('p', { className: 'pc-note' }, t('study.ui.empty')));
  box.append(el('div', { className: 'pc-block' }, list));
  const x = itemOf(st, ctx.sel);
  if (!x) return;
  const { it, kind } = x;
  const set = (label, fn) => edit(host, ctx, label, (s) => fn(itemOf(s, it.id).it));
  const g = el('div', { className: 'pc-props' }, el('p', { className: 'pc-props-sub' }, itemName(kind, it)));
  if (kind === 'constraints') g.append(...K.field(t('study.ui.type'), K.sel([['fixed', t('study.ui.fixed_long')], ['frictionless', t('study.ui.frictionless_long')]], it.type, (v) => set(t('study.ui.constraint_type'), (c) => { c.type = v; }), { simType: '1' })));
  if (kind === 'loads' && it.type === 'force') {
    const key = it.dir === 'normal' ? 'normal' : axisKey(it.dir);
    g.append(...K.field(t('study.ui.total_force'), K.num(it.total, (v) => set(t('study.sim.load.force'), (l) => { l.total = v; }), { min: -1e9, max: 1e9, data: { simForce: '1' } })),
      ...K.field(t('study.ui.direction'), K.sel([['normal', t('study.ui.normal_into')], ...axisOpts(), ...(key === 'custom' ? [['custom', t('study.ui.custom')]] : [])], key, (v) => set(t('study.ui.force_direction'), (l) => { l.dir = v === 'normal' ? 'normal' : AXES.find((a) => a[0] === v)[2].slice(); }), { simDir: '1' })));
    if (key === 'custom') g.append(el('span', { className: 'k' }, t('study.ui.vector')), el('span', { className: 'v' }, it.dir.map((v) => fmt(v, 4)).join(', ')));
  }
  if (kind === 'loads' && it.type === 'pressure') g.append(...K.field(t('study.ui.pressure_mpa'), K.num(it.p, (v) => set(t('study.sim.load.pressure'), (l) => { l.p = v; }), { min: -1e5, max: 1e5, data: { simPressure: '1' } })));
  if (kind === 'loads' && it.type === 'gravity') g.append(...K.field(t('study.ui.direction'), K.sel(axisOpts(), axisKey(it.dir), (v) => set(t('study.ui.gravity_direction'), (l) => { l.dir = AXES.find((a) => a[0] === v)[2].slice(); }))), el('p', { className: 'pc-note span' }, t('study.ui.gravity_note')));
  if (ITEM[kind].editor) ITEM[kind].editor(g, it, set, K, host);
  if (kind === 'preserve' || kind === 'obstacle') g.append(...K.field(kind === 'preserve' ? t('study.ui.keep_solid') : t('study.ui.keep_empty'), K.num(it.t, (v) => set(t('study.ui.region_thickness'), (r) => { r.t = v; }), { min: 0, max: 1000, data: { simThick: '1' } })));
  if (it.faces) g.append(el('span', { className: 'k' }, t('study.ui.faces')), el('span', { className: 'v' }, faceWords(host, it.faces)));
  const acts = el('div', { className: 'pc-actions' });
  if (it.faces) acts.append(K.btn(ctx.picking ? t('study.ui.done_picking') : t('study.ui.pick_faces'), () => { ctx.picking = !ctx.picking; host.status(ctx.picking ? t('study.ui.picking_on') : t('study.ui.picking_done')); host.renderPanel(); }, 'pc-btn' + (ctx.picking ? ' is-primary' : ''), { dataset: { simPick: '1' }, 'aria-pressed': String(ctx.picking) }));
  acts.append(K.btn(t('study.ui.delete'), () => { edit(host, ctx, t('study.ui.delete_item', { item: itemName(kind, it) }), (s) => { s[kind] = s[kind].filter((y) => y.id !== it.id); }); ctx.sel = null; ctx.picking = false; host.renderPanel(); }, 'pc-btn', { dataset: { simDelete: '1' } }));
  box.append(el('div', { className: 'pc-block' }, g, acts, el('p', { className: 'pc-note' }, describe(it))));
}

function faceWords(host, faces) {
  const rg = host.regen;
  if (!faces.length) return t('study.ui.none_picked');
  const words = faces.map((f) => {
    const i = rg && rg.faces ? findFaceIndex(rg.faces, f) : -1;
    if (i < 0) return t('study.ui.face_gone');
    const x = rg.faces[i];
    return x.type === 'cylinder' ? t('study.ui.face_round', { d: fmt(2 * x.r) }) : x.type === 'plane' ? t('study.ui.face_flat') : t('study.ui.face_other', { type: x.type });
  });
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;
  const area = faces.reduce((s, f) => { const i = rg && rg.faces ? findFaceIndex(rg.faces, f) : -1; return s + (i >= 0 ? rg.faces[i].area : 0); }, 0);
  return t('study.ui.faces_area', { list: Object.entries(counts).map(([w, n]) => (n > 1 ? t('study.ui.times', { n, what: w }) : w)).join(', '), area: fmt(area, 1) });
}

/** Barycentric value of a per-vertex field at a picked point on triangle `tri`. */
export function valueAt(mesh, values, tri, p, comps = 1) {
  const P = mesh.positions, I = mesh.indices, v = [0, 1, 2].map((k) => I[3 * tri + k]);
  const a = v.map((i) => [P[3 * i], P[3 * i + 1], P[3 * i + 2]]);
  const e0 = a[1].map((c, k) => c - a[0][k]), e1 = a[2].map((c, k) => c - a[0][k]), e2 = p.map((c, k) => c - a[0][k]);
  const dot = (x, y) => x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
  const d00 = dot(e0, e0), d01 = dot(e0, e1), d11 = dot(e1, e1), d20 = dot(e2, e0), d21 = dot(e2, e1), den = d00 * d11 - d01 * d01 || 1;
  const w1 = (d11 * d20 - d01 * d21) / den, w2 = (d00 * d21 - d01 * d20) / den, w0 = 1 - w1 - w2;
  const out = [];
  for (let c = 0; c < comps; c++) out.push(w0 * values[comps * v[0] + c] + w1 * values[comps * v[1] + c] + w2 * values[comps * v[2] + c]);
  return comps === 1 ? out[0] : out;
}

export const baseName = (host) => String(host.part.name || 'Part').replace(/[^A-Za-z0-9 _-]/g, '').trim().replace(/\s+/g, '-') || 'Part';
/** The mesh of a result in words: cubes of the voxel mesh, or the quadratic tets (summary.mesher 'tet'). */
export const meshWords = (s) => (s.mesher === 'tet' ? t('study.ui.mesh_tet', { n: s.elements.toLocaleString('en-US'), nodes: s.nodes.toLocaleString('en-US'), h: fmt(s.h) }) : t('study.ui.mesh_voxel', { n: s.elements.toLocaleString('en-US'), h: fmt(s.h) }));
export const memText = (bytes) => (bytes > 1e9 ? (bytes / 1e9).toFixed(1) + ' GB' : Math.max(1, Math.round(bytes / 1e6)) + ' MB');
