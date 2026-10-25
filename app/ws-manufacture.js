/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-manufacture.js — the Manufacture workspace (CAM, 2.5-axis milling and drilling). The study lives in
 * `part.studies.manufacture` (cam.js readStudy); toolpaths and the stock simulation run in a compute worker
 * (cam-worker.js); the posts (cam-post.js) run on the page. Panel tabs: Operations (list, editor, picking,
 * simulation, playback, post), Setup (stock, work origin, tool axis, machine), Tools (library, feeds/speeds).
 * Top level is DOM-free (Node imports it); the page is touched only in the hooks, through `host`.
 */
import { registerWorkspace } from './workspaces.js';
import { registerStudyReader } from './part.js';
import { readStudy, newStudy, newOp, OP_TYPES, OP_PARAMS, AXES, ORIGINS, POSTS, POST_LIMITS, originLabel } from './cam.js';
import { parsePost } from './cam-postdef.js';
import { t } from './i18n.js';
import { newTool, KINDS, MATERIALS, speeds, describeTool, validateTool, speedsSource, exportLibrary, readLibrary, mergeTools, savedLibrary, saveToLibrary, removeFromLibrary } from './cam-tools.js';
import { segments, segPoints } from './cam-paths.js';
import { post, toolpathCsv, toolpathJson } from './cam-post.js';
import { openPostEditor, readPostFile } from './cam-post-editor.js';
import { postCopy, blankPost } from './cam-posts-builtin.js';
import { GOUGE_RGB, ON_RGB, THIN_RGB, MID_RGB, STOCK_RGB } from './cam-sim.js';
import { faceRef, edgeRef } from './brep.js';
import { exactWhy } from './exact-client.js';

registerStudyReader('manufacture', (raw) => readStudy(raw));

const KEY = 'manufacture';
const S = { tab: 'ops', op: null, tool: null, picking: false, result: null, resultFor: null, busy: false, req: 0, worker: null, timer: 0, play: 0, showPaths: true, showStock: false, error: null };
const COLORS = ['#2f7fd8', '#d8772f', '#2fa36b', '#a34fd8', '#c9a227', '#d83f6b', '#3fb8c9', '#7a8a2f'];
const fmt = (v, dp = 3) => (Number.isFinite(v) ? String(+Number(v).toFixed(dp)) : '');
// Parameter labels and choice names: looked up on use (label(k), choice(k, v)), never at import.
const LABEL_KEYS = {
  clearance: 'mfg.param.clearance', retract: 'mfg.param.retract', feedHeight: 'mfg.param.feed_height', top: 'mfg.param.top',
  bottom: 'mfg.param.bottom', bottomOff: 'mfg.param.bottom_off', stepover: 'mfg.param.stepover', stepdown: 'mfg.param.stepdown',
  overhang: 'mfg.param.overhang', direction: 'mfg.param.direction', leave: 'mfg.param.leave', leaveAxial: 'mfg.param.leave_axial',
  finish: 'mfg.param.finish', entry: 'mfg.param.entry', rampAngle: 'mfg.param.ramp_angle', helixR: 'mfg.param.helix_r',
  breakthrough: 'mfg.param.breakthrough', side: 'mfg.param.side', climb: 'mfg.param.climb', lead: 'mfg.param.lead',
  tabs: 'mfg.param.tabs', tabWidth: 'mfg.param.tab_width', tabHeight: 'mfg.param.tab_height', holes: 'mfg.param.holes',
  ramp: 'mfg.param.ramp', cycle: 'mfg.param.cycle', peck: 'mfg.param.peck', rPlane: 'mfg.param.r_plane',
  fullDiameter: 'mfg.param.full_diameter', diameter: 'mfg.param.diameter', width: 'mfg.param.width', tipOffset: 'mfg.param.tip_offset',
  engagement: 'cam.adaptive.engagement',   // 0.4 P24
  tolerance: 'mfg.param.tolerance', angle: 'mfg.param.angle', zigzag: 'mfg.param.zigzag', slopeFrom: 'mfg.param.slope_from', slopeTo: 'mfg.param.slope_to',   // 0.7 LC.15
  height: 'mfg.param.cusp', from: 'mfg.param.from',
};
const label = (k) => (LABEL_KEYS[k] ? t(LABEL_KEYS[k]) : k);
const CHOICES = { direction: ['x', 'y'], entry: ['helix', 'ramp', 'plunge'], side: ['auto', 'outside', 'inside'], cycle: ['peck', 'drill', 'chipbreak'], from: ['edge', 'top'] };
const choice = (k, v) => ((CHOICES[k] || []).includes(v) ? t(`mfg.choice.${k}.${v}`) : v);
const NEEDS_GEO = { pocket: true, adaptive: true, contour: true, drill: true, chamfer: true };   // parallel and scallop take the whole model: nothing to pick
const TOOL_FOR = { face: ['face', 'flat'], pocket: ['flat', 'bull', 'ball'], adaptive: ['flat', 'bull'], contour: ['flat', 'bull'], drill: ['drill'], chamfer: ['chamfer'], parallel: ['ball', 'bull', 'flat'], scallop: ['ball', 'bull'] };

const study = (host) => host.study(KEY);
function edit(host, label, fn) {
  const s = JSON.parse(JSON.stringify(study(host) || newStudy()));
  const r = fn(s);
  if (r === false) return;
  host.setStudy(KEY, s, label);
  schedule(host);
}
const opOf = (st, id) => (st ? st.ops.find((o) => o.id === id) : null);

function schedule(host, delay = 150) {
  clearTimeout(S.timer);
  S.timer = setTimeout(() => generate(host), delay);
}

/** Toolpaths + simulation in the worker; the newest request wins. */
async function generate(host) {
  const st = study(host);
  const rg = host.regen;
  if (!st || !st.ops.length) { S.result = null; S.error = null; draw(host); host.renderPanel(); return; }
  if (!rg || !(rg.exact || rg.named) || !rg.mesh || !rg.faces) { S.result = null; S.error = exactWhy(t('kernel.what.manufacture'), t('mfg.need.exact_solid')); draw(host); host.renderPanel(); return; }
  const id = ++S.req;
  S.busy = true; S.error = null;
  host.renderPanel();
  host.status(t('mfg.generating'), true);
  try {
    S.worker = S.worker || host.computeWorker(['cam-worker.js'], { name: 'PartCraft manufacture' });   // i18n-ignore: worker name (developer tools only)
    const args = { study: st, regen: { faces: rg.faces, edges: rg.edges, mesh: { positions: rg.mesh.positions, indices: rg.mesh.indices, triFace: rg.mesh.triFace }, stats: { bbox: rg.stats.bbox } } };
    const r = await S.worker.call('camProgram', args);
    if (id !== S.req) return;
    S.result = r; S.resultFor = st; S.play = Math.min(S.play, Math.max(0, segs(host).length));
    const errs = r.paths.filter((p) => p.error).length;
    host.status(errs ? t('mfg.status.failed', { n: errs }) : r.report.gouges ? t('mfg.status.ready_gouges', { time: time(r.time.seconds), n: r.report.gouges }) : t('mfg.status.ready', { time: time(r.time.seconds) }));
  } catch (e) {
    if (id !== S.req) return;
    S.result = null; S.error = e && e.message ? e.message : String(e);
    host.status(t('mfg.status.error', { error: S.error }), true);
  } finally {
    if (id === S.req) { S.busy = false; draw(host); host.renderAll(); }   // renderAll also refreshes the toolbar's Post state
  }
}
const time = (s) => { const m = Math.floor(s / 60), r = Math.round(s - m * 60); return m >= 60 ? t('mfg.time.h_min', { h: Math.floor(m / 60), m: m % 60 }) : t('mfg.time.min_s', { m, s: r }); };

/** The program as cam-post.js wants it, from the worker's result and the study it was made from. */
function program(host) {
  const r = S.result, st = S.resultFor;
  if (!r || !st) return null;
  const paths = r.paths.map((p) => ({ op: opOf(st, p.op), tool: st.tools.find((t) => t.id === p.tool) || null, speeds: p.speeds, moves: p.moves, warnings: p.warnings, info: p.info, error: p.error, sim: p.sim })).filter((p) => p.op);
  return { setup: st.setup, model: { stock: r.stock }, tools: st.tools, paths };
}
let segCache = null;
function segs(host) {
  const pg = program(host);
  if (!pg) return [];
  if (segCache && segCache.r === S.result) return segCache.s;
  const s = segments(pg.paths.filter((p) => p.moves.length));
  segCache = { r: S.result, s };
  return s;
}
function toWorldFn(r) {
  const ax = AXES[r.axis] || AXES['+y'], o = r.origin;
  return (m) => { const q = [m[0] + o[0], m[1] + o[1], m[2] + o[2]]; return [0, 1, 2].map((k) => ax.x[k] * q[0] + ax.y[k] * q[1] + ax.z[k] * q[2]); };
}

// ---------------------------------------------------------------- 3D overlays

function draw(host) {
  const { view, THREE } = host;
  const r = S.result;
  for (const id of ['manufacture-paths', 'manufacture-stock', 'manufacture-gouges', 'manufacture-tool']) view.setOverlay(id, null);
  if (!r) return;
  const W = toWorldFn(r);
  const st = S.resultFor;
  if (S.showPaths) {
    const g = new THREE.Group();
    const all = segs(host);
    const byOp = new Map();
    for (const s of all) { if (!byOp.has(s.op)) byOp.set(s.op, { feed: [], rapid: [] }); const b = byOp.get(s.op)[s.k === 'rapid' ? 'rapid' : 'feed']; const pts = segPoints(s, 0.05); for (let i = 0; i < pts.length - 1; i++) b.push(...W(pts[i]), ...W(pts[i + 1])); }
    let k = 0;
    for (const op of st.ops) {
      const b = byOp.get(op.id);
      if (!b) continue;
      const col = new THREE.Color(COLORS[k++ % COLORS.length]);
      if (b.feed.length) { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(b.feed, 3)); const l = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: col })); l.renderOrder = 30; g.add(l); }
      if (b.rapid.length) { const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(b.rapid, 3)); const l = new THREE.LineSegments(geo, new THREE.LineDashedMaterial({ color: col, dashSize: 2, gapSize: 1.5, transparent: true, opacity: 0.7 })); l.computeLineDistances(); l.renderOrder = 30; g.add(l); }
    }
    view.setOverlay('manufacture-paths', g);
  }
  if (S.showStock && r.zmap) {
    const P = r.zmap.positions, pos = new Float32Array(P.length);
    for (let i = 0; i < P.length; i += 3) { const w = W([P[i], P[i + 1], P[i + 2]]); pos[i] = w[0]; pos[i + 1] = w[1]; pos[i + 2] = w[2]; }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setIndex(new THREE.BufferAttribute(r.zmap.indices, 1));
    geo.computeVertexNormals();
    // 0.7 LC.15: stock against the model in colour (green on the model, red cut into it, yellow → orange → stock grey left on it)
    const colored = !!(r.zmap.colors && r.zmap.colors.length === P.length);
    if (colored) geo.setAttribute('color', new THREE.BufferAttribute(r.zmap.colors, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial(colored ? { vertexColors: true, transparent: true, opacity: 0.92, side: THREE.DoubleSide } : { color: '#c9a46a', transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
    view.setOverlay('manufacture-stock', m);
  }
  if (r.gouges.length) {
    const pts = [];
    for (const a of r.gouges) pts.push(...W([a[0], a[1], r.stock.max[2]]));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const p = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#e0302a', size: 9, sizeAttenuation: false, depthTest: false }));
    p.renderOrder = 40;
    view.setOverlay('manufacture-gouges', p);
  }
  drawTool(host);
}
function drawTool(host) {
  const { view, THREE } = host;
  view.setOverlay('manufacture-tool', null);
  const r = S.result, all = segs(host);
  if (!r || !all.length || !(S.play > 0)) return;
  const s = all[Math.min(all.length, S.play) - 1];
  const ph = program(host).paths.find((p) => p.op.id === s.op);
  const tool = ph && ph.tool;
  if (!tool) return;
  const W = toWorldFn(r), ax = AXES[r.axis] || AXES['+y'];
  const h = Math.max(tool.fluteLen, tool.d);
  const geo = new THREE.CylinderGeometry(tool.d / 2, tool.d / 2, h, 24);
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: '#8a94a3', transparent: true, opacity: 0.8 }));
  const tip = W(s.b);
  const up = new THREE.Vector3(...ax.z);
  m.position.set(tip[0] + up.x * h / 2, tip[1] + up.y * h / 2, tip[2] + up.z * h / 2);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), up);
  view.setOverlay('manufacture-tool', m);
}
function marks(host) {
  const st = study(host), op = opOf(st, S.op), rg = host.regen;
  if (!op || !rg || !rg.faces || S.tab !== 'ops') { host.view.setMarks(null); return; }
  const faces = op.geo.faces.map((f) => rg.faces.findIndex((x) => x.name === f.name && Math.hypot(x.at[0] - f.at[0], x.at[1] - f.at[1], x.at[2] - f.at[2]) < 1e-3)).filter((i) => i >= 0);
  const edges = op.geo.edges.map((e) => rg.edges.findIndex((x) => x.key === [...e.faces].sort().join('|') && Math.hypot(x.at[0] - e.at[0], x.at[1] - e.at[1], x.at[2] - e.at[2]) < 1e-3)).filter((i) => i >= 0);
  host.view.setMarks({ faces, edges });
}

// ---------------------------------------------------------------- operations

function addOp(host, type) {
  if (!(host.regen?.exact || host.regen?.named)) { host.status(exactWhy(t('kernel.what.manufacture'), t('mfg.need.exact_loading'))); return; }
  let made = null;
  edit(host, t('mfg.undo.add_op', { op: OP_TYPES[type].toLowerCase() }), (s) => {
    const want = TOOL_FOR[type];
    const tool = want.map((k) => s.tools.find((t) => t.kind === k)).find(Boolean);
    made = newOp(type, { tool: tool ? tool.id : null, name: uniqueName(s, OP_TYPES[type]) });
    s.ops.push(made);
  });
  S.tab = 'ops'; S.op = made.id; S.picking = !!NEEDS_GEO[type];
  host.renderPanel();
  if (S.picking) host.status(type === 'drill' ? t('mfg.pick.start_drill') : t('mfg.pick.start'), true);
}
function uniqueName(s, base) { let n = 1; while (s.ops.some((o) => o.name === base + ' ' + n)) n++; return base + ' ' + n; }

/** Which picks an operation takes (in machine terms: the tool axis is the setup's +Z). */
function pickable(host, op, hit) {
  const st = study(host), rg = host.regen, ax = AXES[st.setup.axis].z;
  if (hit.kind === 'edge') {
    if (hit.edge === undefined || hit.edge < 0) return { why: t('mfg.why.edge_not_exact') };
    if (op.type === 'drill') {
      // the rim of a hole means the hole
      const e = rg.edges[hit.edge];
      const k = rg.faces.findIndex((f) => e.faces.includes(f.name) && f.type === 'cylinder');
      if (k < 0) return { why: t('mfg.why.drill_holes') };
      hit = { kind: 'face', face: k };
    } else if (op.type === 'face') return { why: t('mfg.why.face_no_picks') };
    else return { edge: hit.edge };
  }
  if (hit.kind === 'edge') {
    return { edge: hit.edge };
  }
  if (hit.kind !== 'face' || hit.face === undefined || hit.face < 0) return { why: t('mfg.why.click_part') };
  const f = rg.faces[hit.face];
  const dot = (a) => a[0] * ax[0] + a[1] * ax[1] + a[2] * ax[2];
  if (f.type === 'plane') {
    if (op.type === 'drill') return { why: t('mfg.why.drill_axis') };
    if (Math.abs(Math.abs(dot(f.n)) - 1) > 1e-9) return { why: t('mfg.why.flat_not_square') };
    if ((op.type === 'pocket' || op.type === 'adaptive') && dot(f.n) < 0) return { why: t('mfg.why.looks_away') };
    return { face: hit.face };
  }
  if (f.type === 'cylinder') {
    if (Math.abs(Math.abs(dot(f.axis.d)) - 1) > 1e-9) return { why: t('mfg.why.round_not_axis') };
    return { face: hit.face };
  }
  return { why: t('mfg.why.face_type', { type: f.type }) };
}
function togglePick(host, hit) {
  const st = study(host), op = opOf(st, S.op);
  if (!op) return;
  const p = pickable(host, op, hit);
  if (p.why) { host.status(p.why); return; }
  const rg = host.regen;
  edit(host, t('mfg.undo.pick', { name: op.name }), (s) => {
    const o = opOf(s, op.id);
    if (p.face !== undefined) {
      const ref = faceRef(rg.faces[p.face]);
      const k = o.geo.faces.findIndex((f) => f.name === ref.name && Math.hypot(f.at[0] - ref.at[0], f.at[1] - ref.at[1], f.at[2] - ref.at[2]) < 1e-3);
      if (k >= 0) o.geo.faces.splice(k, 1); else o.geo.faces.push(ref);
    } else {
      const ref = edgeRef(rg.edges[p.edge]);
      const key = [...ref.faces].sort().join('|');
      const k = o.geo.edges.findIndex((e) => [...e.faces].sort().join('|') === key && Math.hypot(e.at[0] - ref.at[0], e.at[1] - ref.at[1], e.at[2] - ref.at[2]) < 1e-3);
      if (k >= 0) o.geo.edges.splice(k, 1); else o.geo.edges.push(ref);
    }
  });
}
function geoWords(host, op) {
  const rg = host.regen;
  const words = op.geo.faces.map((f) => {
    const x = rg && rg.faces ? rg.faces.find((g) => g.name === f.name) : null;
    if (!x) return t('mfg.geo.gone');
    return x.type === 'cylinder' ? t('mfg.geo.round', { d: fmt(2 * x.r) }) : x.type === 'plane' ? t('mfg.geo.flat') : t('mfg.geo.other', { type: x.type });
  });
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;
  const out = Object.entries(counts).map(([w, n]) => (n > 1 ? t('mfg.geo.times', { n, what: w }) : w));
  if (op.geo.edges.length) out.push(t('mfg.geo.edges', { n: op.geo.edges.length }));
  return out.length ? out.join(', ') : t('mfg.geo.nothing');
}

// ---------------------------------------------------------------- panel

function kit(host) {
  const { el } = host;
  let uid = 0;
  const id = () => 'pc-m' + Math.random().toString(36).slice(2, 8) + (++uid);
  const field = (label, input) => [el('label', { htmlFor: input.id }, label), input];
  const num = (value, onchange, { min = null, max = null, nullable = false } = {}) => {
    const i = el('input', { type: 'number', className: 'pc-input', id: id(), value: value === null || value === undefined ? '' : fmt(value, 6), step: 'any', inputMode: 'decimal' });
    i.addEventListener('change', () => {
      if (nullable && i.value.trim() === '') { onchange(null); return; }
      const v = Number(i.value);
      if (i.value.trim() === '' || !Number.isFinite(v) || (min !== null && v < min) || (max !== null && v > max)) { host.status(min !== null && max !== null ? t('mfg.num.range', { min, max }) : min !== null ? t('mfg.num.from', { min }) : max !== null ? t('mfg.num.to', { max }) : t('mfg.num.any')); i.value = value === null ? '' : fmt(value, 6); return; }
      onchange(v);
    });
    return i;
  };
  const sel = (options, value, onchange) => {
    const s = el('select', { className: 'pc-select', id: id() }, ...options.map(([v, l]) => el('option', { value: v, selected: v === value }, l)));
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

function renderPanel(host, box) {
  const { el } = host;
  const K = kit(host);
  const st = study(host);
  const tabs = el('div', { className: 'pc-actions', role: 'group', 'aria-label': t('mfg.panel.aria') },
    ...[['ops', t('mfg.tab.ops')], ['setup', t('mfg.tab.setup')], ['tools', t('mfg.tab.tools')]].map(([k, l]) => K.btn(l, () => { S.tab = k; S.picking = false; host.renderPanel(); }, 'pc-btn' + (S.tab === k ? ' is-primary' : ''), { 'aria-pressed': String(S.tab === k), dataset: { mtab: k } })));
  box.append(el('div', { className: 'pc-block' }, tabs));
  if (!st) {
    box.append(el('div', { className: 'pc-block' },
      el('p', { className: 'pc-note' }, t('mfg.intro')),
      el('div', { className: 'pc-actions' }, K.btn(t('mfg.new_setup'), () => { edit(host, t('mfg.undo.new_setup'), () => {}); S.tab = 'setup'; host.renderPanel(); }, 'pc-btn is-primary', { dataset: { mnew: '1' } }))));
    marks(host);
    return t('mfg.ws.label');
  }
  if (S.tab === 'setup') renderSetup(host, box, st, K);
  else if (S.tab === 'tools') renderTools(host, box, st, K);
  else renderOps(host, box, st, K);
  marks(host);
  return t('mfg.ws.label');
}

function renderSetup(host, box, st, K) {
  const { el } = host;
  const s = st.setup;
  const set = (label, fn) => edit(host, label, (x) => fn(x.setup));
  const g = el('div', { className: 'pc-props' },
    el('p', { className: 'pc-props-sub' }, t('mfg.setup.axis_origin')),
    ...K.field(t('mfg.setup.tool_axis'), K.sel(Object.entries(AXES).map(([k, v]) => [k, v.label]), s.axis, (v) => set(t('mfg.undo.tool_axis'), (x) => { x.axis = v; }))),
    ...K.field(t('mfg.setup.origin'), K.sel(Object.keys(ORIGINS).map((k) => [k, originLabel(k)]), s.origin, (v) => set(t('mfg.undo.origin'), (x) => { x.origin = v; }))),
    el('p', { className: 'pc-props-sub' }, t('mfg.stock')),
    ...K.field(t('mfg.setup.shape'), K.sel([['box', t('mfg.setup.box')], ['cylinder', t('mfg.setup.cylinder')]], s.stock.kind, (v) => set(t('mfg.undo.stock_shape'), (x) => { x.stock.kind = v; }))),
    ...K.field(t('mfg.setup.size'), K.sel([['offset', t('mfg.setup.offsets')], ['fixed', t('mfg.setup.fixed')]], s.stock.mode, (v) => set(t('mfg.undo.stock_size'), (x) => { x.stock.mode = v; }))),
  );
  if (s.stock.mode === 'offset') g.append(
    ...K.field(t('mfg.setup.side'), K.num(s.stock.side, (v) => set(t('mfg.undo.stock_offset'), (x) => { x.stock.side = v; }), { min: 0, max: 1000 })),
    ...K.field(t('mfg.setup.top'), K.num(s.stock.top, (v) => set(t('mfg.undo.stock_offset'), (x) => { x.stock.top = v; }), { min: 0, max: 1000 })),
    ...K.field(t('mfg.param.bottom_off'), K.num(s.stock.bottom, (v) => set(t('mfg.undo.stock_offset'), (x) => { x.stock.bottom = v; }), { min: 0, max: 1000 })));
  else {
    if (s.stock.kind === 'cylinder') g.append(...K.field(t('mfg.setup.radius'), K.num(s.stock.r, (v) => set(t('mfg.undo.stock_radius'), (x) => { x.stock.r = v; }), { min: 0.1, max: 2500 })));
    else ['X', 'Y'].forEach((a, i) => g.append(...K.field(t('mfg.setup.axis_size', { axis: a }), K.num(s.stock.size[i], (v) => set(t('mfg.undo.stock_size'), (x) => { x.stock.size[i] = v; }), { min: 0.1, max: 5000 }))));
    g.append(...K.field(t('mfg.setup.axis_size', { axis: 'Z' }), K.num(s.stock.size[2], (v) => set(t('mfg.undo.stock_size'), (x) => { x.stock.size[2] = v; }), { min: 0.1, max: 5000 })),
      ...K.field(t('mfg.setup.above'), K.num(s.stock.top, (v) => set(t('mfg.undo.stock_offset'), (x) => { x.stock.top = v; }), { min: 0, max: 1000 })));
  }
  g.append(
    el('p', { className: 'pc-props-sub' }, t('mfg.setup.material_machine')),
    ...K.field(t('mfg.setup.material'), K.sel(Object.entries(MATERIALS).map(([k, v]) => [k, v.label]), s.material, (v) => set(t('mfg.setup.material'), (x) => { x.material = v; }))),
    ...K.field(t('mfg.post'), K.sel(postOptions(st), s.machine.post, (v) => set(t('mfg.post'), (x) => { x.machine.post = v; }))),
    ...K.field(t('mfg.setup.max_rpm'), K.num(s.machine.maxRpm, (v) => set(t('mfg.undo.spindle'), (x) => { x.machine.maxRpm = v; }), { min: 100, max: 200000 })),
    ...K.field(t('mfg.setup.rapid'), K.num(s.machine.rapid, (v) => set(t('mfg.undo.rapid'), (x) => { x.machine.rapid = v; }), { min: 10, max: 200000 })),
    ...K.field(t('mfg.setup.tool_change'), K.num(s.machine.toolChange, (v) => set(t('mfg.undo.tool_change'), (x) => { x.machine.toolChange = v; }), { min: 0, max: 3600 })),
    ...K.field(t('mfg.setup.coolant'), K.sel([['flood', t('mfg.setup.flood')], ['mist', t('mfg.setup.mist')], ['off', t('mfg.setup.coolant_off')]], s.coolant, (v) => set(t('mfg.setup.coolant'), (x) => { x.coolant = v; }))),
    ...K.field(t('mfg.setup.program'), K.num(s.program, (v) => { if (!Number.isInteger(v)) { host.status(t('mfg.setup.program_whole')); return; } set(t('mfg.setup.program'), (x) => { x.program = v; }); }, { min: 1, max: 9999 })),
  );
  box.append(el('div', { className: 'pc-block' }, g));
  const r = S.result;
  if (r) box.append(el('div', { className: 'pc-block' }, el('dl', { className: 'pc-dl' },
    el('dt', {}, t('mfg.stock')), el('dd', {}, r.stock.kind === 'cylinder' ? `⌀${fmt(2 * r.stock.r)} × ${fmt(r.stock.max[2] - r.stock.min[2])} mm` : `${fmt(r.stock.max[0] - r.stock.min[0])} × ${fmt(r.stock.max[1] - r.stock.min[1])} × ${fmt(r.stock.max[2] - r.stock.min[2])} mm`),   // i18n-ignore: numbers and units
    el('dt', {}, t('mfg.setup.stock_top')), el('dd', {}, 'Z ' + fmt(r.stock.max[2])))));
  box.append(el('div', { className: 'pc-block' }, el('p', { className: 'pc-note' }, t('mfg.setup.note'))));
}

function renderTools(host, box, st, K) {
  const { el } = host;
  const list = el('div', { className: 'pc-list', role: 'listbox', 'aria-label': t('mfg.tab.tools') });
  for (const tl of st.tools) {
    const b = el('button', { type: 'button', className: 'pc-node', role: 'option', 'aria-selected': String(S.tool === tl.id), dataset: { mtool: tl.id }, onclick: () => { S.tool = tl.id; host.renderPanel(); } },
      el('i', { className: 'bi bi-' + (tl.kind === 'drill' ? 'arrow-down-circle' : 'tools'), 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, `T${tl.number} ${tl.name || describeTool(tl)}`), el('span', { className: 'pc-node-flag' }, ''));   // i18n-ignore: icon class
    list.append(b);
  }
  let kind = 'flat';
  box.append(el('div', { className: 'pc-block' }, list, el('div', { className: 'pc-actions' },
    K.sel(Object.entries(KINDS).map(([k, v]) => [k, v.label]), kind, (v) => { kind = v; }),
    K.btn(t('mfg.tools.add'), () => {
      const id = 'tl' + Date.now().toString(36);
      edit(host, t('mfg.tools.add'), (s) => { const n = Math.max(0, ...s.tools.map((x) => x.number)) + 1; s.tools.push(newTool(kind, { id, number: Math.min(999, n) })); });
      S.tool = id; host.renderPanel();
    }, 'pc-btn', { dataset: { maddtool: '1' } }))));
  renderLibrary(host, box, st, K);
  const tl = st.tools.find((x) => x.id === S.tool);
  if (!tl) { box.append(el('div', { className: 'pc-block' }, el('p', { className: 'pc-note' }, t('mfg.tools.choose', { source: speedsSource() })))); return; }
  const set = (label, fn) => edit(host, label, (s) => {
    const x = s.tools.find((y) => y.id === tl.id), copy = { ...x };
    fn(copy);
    const why = validateTool(copy);
    if (why) { host.status(why); return false; }
    copy.name = copy.name && copy.name !== describeTool(x) ? copy.name : describeTool(copy);
    Object.assign(x, copy);
  });
  const g = el('div', { className: 'pc-props' },
    el('p', { className: 'pc-props-sub' }, KINDS[tl.kind].label),
    ...K.field(t('mfg.tools.number'), K.num(tl.number, (v) => set(t('mfg.undo.tool_number'), (x) => { x.number = v; }), { min: 1, max: 999 })),
    ...K.field(t('mfg.tools.d'), K.num(tl.d, (v) => set(t('mfg.undo.tool_d'), (x) => { x.d = v; }), { min: 0.05, max: 250 })),
    ...K.field(t('mfg.tools.flutes'), K.num(tl.flutes, (v) => set(t('mfg.tools.flutes'), (x) => { x.flutes = v; }), { min: 1, max: 20 })),
    ...K.field(t('mfg.tools.flute_len'), K.num(tl.fluteLen, (v) => set(t('mfg.tools.flute_len'), (x) => { x.fluteLen = v; }), { min: 0.01, max: 500 })));
  if (tl.kind === 'bull') g.append(...K.field(t('mfg.tools.corner'), K.num(tl.cornerR, (v) => set(t('mfg.tools.corner'), (x) => { x.cornerR = v; }), { min: 0, max: 125 })));
  if (tl.kind === 'drill' || tl.kind === 'chamfer') g.append(...K.field(tl.kind === 'drill' ? t('mfg.tools.point_angle') : t('mfg.tools.included_angle'), K.num(tl.angle, (v) => set(t('mfg.undo.tool_angle'), (x) => { x.angle = v; }), { min: 0, max: 180 })));
  if (tl.kind === 'chamfer') g.append(...K.field(t('mfg.tools.tip'), K.num(tl.tipD, (v) => set(t('mfg.tools.tip'), (x) => { x.tipD = v; }), { min: 0, max: 250 })));
  g.append(...K.field(t('mfg.tools.material'), K.sel([['carbide', t('mfg.tools.carbide')], ['hss', t('mfg.tools.hss')]], tl.material, (v) => set(t('mfg.undo.tool_material'), (x) => { x.material = v; }))),
    el('p', { className: 'pc-props-sub' }, t('mfg.tools.overrides')),
    ...K.field(t('mfg.tools.vc'), K.num(tl.vc, (v) => set(t('mfg.tools.cutting_speed'), (x) => { x.vc = v; }), { min: 0.001, max: 100000, nullable: true })),
    ...K.field(tl.kind === 'drill' ? t('mfg.tools.fpr') : t('mfg.tools.fz'), K.num(tl.fz, (v) => set(t('mfg.tools.chip_load'), (x) => { x.fz = v; }), { min: 0.000001, max: 100, nullable: true })),
    ...K.field(t('mfg.tools.rpm'), K.num(tl.rpm, (v) => set(t('mfg.undo.spindle'), (x) => { x.rpm = v; }), { min: 1, max: 200000, nullable: true })),
    ...K.field(t('mfg.tools.feed_mm'), K.num(tl.feed, (v) => set(t('mfg.feed'), (x) => { x.feed = v; }), { min: 0.1, max: 100000, nullable: true })));
  const sp = speeds(tl, st.setup.material, st.setup.machine);
  box.append(el('div', { className: 'pc-block' }, g),
    el('div', { className: 'pc-block' }, el('dl', { className: 'pc-dl' },
      el('dt', {}, t('mfg.spindle')), el('dd', {}, sp.clamped === 'max' ? t('mfg.tools.rpm_max', { rpm: sp.rpm }) : `${sp.rpm} rpm`),   // i18n-ignore: unit
      el('dt', {}, t('mfg.feed')), el('dd', {}, `${fmt(sp.feed, 1)} mm/min`), el('dt', {}, t('mfg.plunge')), el('dd', {}, `${fmt(sp.plunge, 1)} mm/min`),   // i18n-ignore: numbers and units
      el('dt', {}, t('mfg.tools.cutting_speed')), el('dd', {}, `${fmt(sp.vc, 1)} m/min`), el('dt', {}, tl.kind === 'drill' ? t('mfg.tools.feed_per_rev') : t('mfg.tools.chip_load')), el('dd', {}, `${fmt(sp.fz, 4)} mm`)),   // i18n-ignore: numbers and units
    el('p', { className: 'pc-note' }, t('mfg.tools.formula', { source: speedsSource() })),
    el('div', { className: 'pc-actions' }, K.btn(t('mfg.tools.delete'), () => {
      const users = st.ops.filter((o) => o.tool === tl.id);
      if (users.length) { host.status(t('mfg.tools.in_use', { n: users.length, names: users.map((o) => o.name).join(', ') })); return; }
      edit(host, t('mfg.tools.delete'), (s) => { s.tools = s.tools.filter((x) => x.id !== tl.id); });
      S.tool = null; host.renderPanel();
    }, 'pc-btn', { dataset: { mdeltool: '1' } }))));
}

function renderOps(host, box, st, K) {
  const { el } = host;
  const r = S.result && S.resultFor ? S.result : null;
  const res = (id) => (r ? r.paths.find((p) => p.op === id) : null);
  const list = el('div', { className: 'pc-list', role: 'listbox', 'aria-label': t('mfg.tab.ops') });
  st.ops.forEach((o, i) => {
    const p = res(o.id);
    const flag = o.suppressed ? t('mfg.flag.off') : !p ? (S.busy ? '…' : '') : p.error ? t('mfg.flag.error') : p.sim && p.sim.gouges ? t('mfg.flag.gouges') : p.warnings.length ? t('mfg.flag.note') : t('mfg.flag.moves', { n: p.moves.length });
    const cls = ['pc-node', p && (p.error || (p.sim && p.sim.gouges)) ? 'is-error' : '', p && p.warnings.length ? 'is-warn' : '', o.suppressed ? 'is-off' : ''].join(' ');
    list.append(el('button', { type: 'button', className: cls, role: 'option', 'aria-selected': String(S.op === o.id), dataset: { mop: o.id }, onclick: () => { S.op = o.id; S.picking = false; host.renderPanel(); } },
      swatch(el, COLORS[i % COLORS.length]),
      el('span', { className: 'pc-node-name' }, o.name), el('span', { className: 'pc-node-flag' }, flag)));
  });
  if (!st.ops.length) list.append(el('p', { className: 'pc-note' }, t('mfg.ops.none')));
  box.append(el('div', { className: 'pc-block' }, list));
  const op = opOf(st, S.op);
  if (op) renderOpEditor(host, box, st, op, res(op.id), K);
  renderProgram(host, box, st, r, K);
}

function renderOpEditor(host, box, st, op, p, K) {
  const { el } = host;
  const i = st.ops.indexOf(op);
  const set = (label, fn) => edit(host, label, (s) => fn(opOf(s, op.id)));
  const g = el('div', { className: 'pc-props' },
    el('p', { className: 'pc-props-sub' }, OP_TYPES[op.type]),
    ...K.field(t('mfg.op.name'), (() => { const n = el('input', { type: 'text', className: 'pc-input', id: 'pc-mname', value: op.name, maxLength: 80 }); n.addEventListener('change', () => set(t('mfg.undo.rename_op'), (o) => { o.name = n.value.trim() || OP_TYPES[op.type]; })); return n; })()),
    ...K.field(t('mfg.op.tool'), K.sel([['', t('mfg.op.choose_a_tool')], ...st.tools.map((t) => [t.id, `T${t.number} ${t.name || describeTool(t)}`])], op.tool || '', (v) => set(t('mfg.undo.op_tool'), (o) => { o.tool = v || null; }))),
  );
  if (NEEDS_GEO[op.type]) g.append(el('span', { className: 'k' }, t('mfg.op.geometry')), el('span', { className: 'v' }, geoWords(host, op)));
  else if (op.type === 'parallel' || op.type === 'scallop') g.append(el('span', { className: 'k' }, t('mfg.op.geometry')), el('span', { className: 'v' }, t('mfg.op.whole_model')));
  const spec = OP_PARAMS[op.type];
  for (const [k, v] of Object.entries(spec)) {
    if (typeof v === 'boolean') { g.append(K.check(label(k), op.params[k], (x) => set(label(k), (o) => { o.params[k] = x; }), { dataset: { mparam: k } })); continue; }
    let input;
    if (v.length === 1) input = K.num(op.params[k], (x) => set(label(k), (o) => { o.params[k] = x; }), { min: -10000, max: 10000, nullable: true });
    else if (typeof v[0] === 'string') input = K.sel(v.map((c) => [c, choice(k, c)]), op.params[k], (x) => set(label(k), (o) => { o.params[k] = x; }));
    else input = K.num(op.params[k], (x) => { if (k === 'tabs' && !Number.isInteger(x)) { host.status(t('mfg.op.tabs_whole')); return; } set(label(k), (o) => { o.params[k] = x; }); }, { min: v[0], max: v[1] });
    input.dataset.mparam = k;
    g.append(...K.field(label(k), input));
  }
  const acts = el('div', { className: 'pc-actions' });
  if (NEEDS_GEO[op.type]) acts.append(K.btn(S.picking ? t('mfg.pick.done_btn') : t('mfg.pick.btn'), () => { S.picking = !S.picking; host.status(S.picking ? t('mfg.pick.on') : t('mfg.pick.done')); host.renderPanel(); }, 'pc-btn' + (S.picking ? ' is-primary' : ''), { dataset: { mpick: '1' }, 'aria-pressed': String(S.picking) }));
  acts.append(
    K.btn(t('mfg.op.up'), () => edit(host, t('mfg.undo.move_op'), (s) => { if (i === 0) return false; const [x] = s.ops.splice(i, 1); s.ops.splice(i - 1, 0, x); }), 'pc-btn', { disabled: i === 0, dataset: { mup: '1' } }),
    K.btn(t('mfg.op.down'), () => edit(host, t('mfg.undo.move_op'), (s) => { if (i === s.ops.length - 1) return false; const [x] = s.ops.splice(i, 1); s.ops.splice(i + 1, 0, x); }), 'pc-btn', { disabled: i === st.ops.length - 1, dataset: { mdown: '1' } }),
    K.btn(op.suppressed ? t('mfg.op.unsuppress') : t('mfg.op.suppress'), () => set(op.suppressed ? t('mfg.undo.unsuppress') : t('mfg.undo.suppress'), (o) => { o.suppressed = !o.suppressed; }), 'pc-btn', { dataset: { msuppress: '1' } }),
    K.btn(t('mfg.op.delete'), () => { edit(host, t('mfg.undo.delete_op'), (s) => { s.ops = s.ops.filter((o) => o.id !== op.id); }); S.op = null; S.picking = false; host.renderPanel(); }, 'pc-btn', { dataset: { mdelete: '1' } }));
  box.append(el('div', { className: 'pc-block' }, g, acts));
  if (p) {
    const rows = [];
    if (p.error) rows.push(el('div', { className: 'pc-msg is-error' }, el('p', {}, p.error)));
    for (const w of p.warnings) rows.push(el('div', { className: 'pc-msg is-warn' }, el('p', {}, w)));
    const dl = el('dl', { className: 'pc-dl' });
    const add = (k, v) => { if (v !== '' && v !== null && v !== undefined) dl.append(el('dt', {}, k), el('dd', {}, String(v))); };
    if (p.speeds) { add(t('mfg.spindle'), p.speeds.rpm + ' rpm'); add(t('mfg.op.feed_plunge'), `${fmt(p.speeds.feed, 1)} / ${fmt(p.speeds.plunge, 1)} mm/min`); }   // i18n-ignore: numbers and units
    add(t('mfg.op.moves'), p.moves.length);
    if (p.info.holes) add(t('mfg.op.holes'), p.info.holes);
    if (p.info.loops) add(t('mfg.op.loops'), p.info.loops);
    if (p.info.entries) add(t('mfg.op.entries'), p.info.entries);
    if (S.result && S.result.time.perOp[op.id] !== undefined) add(t('mfg.op.time'), time(S.result.time.perOp[op.id]));
    if (p.sim) { add(t('mfg.op.removed'), fmt(p.sim.removed / 1000, 1) + ' cm³'); add(t('mfg.gouges'), p.sim.gouges ? t('mfg.cells', { n: p.sim.gouges }) : t('mfg.none')); if (p.sim.rapidCuts) add(t('mfg.op.rapid_cuts'), p.sim.rapidCuts); }
    box.append(el('div', { className: 'pc-block' }, ...rows, dl));
  }
}

function renderProgram(host, box, st, r, K) {
  const { el } = host;
  const b = el('div', { className: 'pc-block', dataset: { mprogram: '1' } }, el('p', { className: 'pc-props-sub' }, t('mfg.sim')));
  if (S.busy) b.append(el('p', { className: 'pc-note' }, t('mfg.generating')));
  if (S.error) b.append(el('div', { className: 'pc-msg is-error' }, el('p', {}, S.error)));
  if (r) {
    const rep = r.report, tm = r.time;
    b.append(el('dl', { className: 'pc-dl', dataset: { msummary: '1' } },
      el('dt', {}, t('mfg.sim.cycle')), el('dd', { dataset: { mtime: String(Math.round(tm.seconds)) } }, time(tm.seconds)),
      el('dt', {}, t('mfg.sim.feeds_rapids')), el('dd', {}, `${time(tm.feed)} / ${time(tm.rapid)}`),
      el('dt', {}, t('mfg.sim.tool_changes')), el('dd', {}, String(tm.toolChanges)),
      el('dt', {}, t('mfg.gouges')), el('dd', { dataset: { mgouges: String(rep.gouges) } }, rep.gouges ? t('mfg.sim.gouges', { n: rep.gouges, depth: fmt(rep.deepest) }) : t('mfg.none')),
      el('dt', {}, t('mfg.sim.left')), el('dd', {}, t('mfg.sim.left_v', { volume: fmt(rep.remaining / 1000, 1), thick: fmt(rep.maxLeft) }))),
    el('p', { className: 'pc-note' }, t('mfg.sim.note', { cell: fmt(rep.cell), nx: rep.nx, ny: rep.ny, tolv: fmt(rep.tolV), tollat: fmt(rep.tolLat), rapid: tm.rapidRate, change: tm.toolChangeTime })));
    const all = segs(host);
    const slider = el('input', { type: 'range', min: '0', max: String(all.length), step: '1', value: String(Math.min(S.play, all.length)), className: 'pc-range', id: 'pc-mplay', 'aria-label': t('mfg.sim.playback'), dataset: { mplay: '1' } });
    const where = el('p', { className: 'pc-note', dataset: { mwhere: '1' } });
    const say = () => {
      const k = Number(slider.value);
      if (!k) { where.textContent = t('mfg.sim.play_hint', { n: all.length }); return; }
      const s = all[k - 1], o = opOf(S.resultFor, s.op);
      where.textContent = t('mfg.sim.segment', { k, n: all.length, name: o ? o.name : '', move: t(s.k === 'rapid' ? 'mfg.sim.move.rapid' : s.k === 'arc' ? 'mfg.sim.move.arc' : 'mfg.sim.move.feed'), x: fmt(s.b[0]), y: fmt(s.b[1]), z: fmt(s.b[2]) });
    };
    slider.addEventListener('input', () => { S.play = Number(slider.value); say(); drawTool(host); });
    say();
    b.append(el('div', { className: 'pc-props' }, ...K.field(t('mfg.sim.playback'), slider)), where,
      el('div', { className: 'pc-checks' },
        K.check(t('mfg.sim.show_paths'), S.showPaths, (v) => { S.showPaths = v; draw(host); }, { dataset: { mshowpaths: '1' } }),
        K.check(t('mfg.sim.show_stock'), S.showStock, (v) => { S.showStock = v; draw(host); host.renderPanel(); }, { dataset: { mshowstock: '1' } })),
      ...(S.showStock ? [legend(el)] : []));
  } else if (!S.busy && !S.error) b.append(el('p', { className: 'pc-note' }, st.ops.length ? t('mfg.sim.appear') : t('mfg.sim.add_op')));
  box.append(b);
  const pb = el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub' }, t('mfg.post')),
    el('div', { className: 'pc-props' }, ...K.field(t('mfg.control'), K.sel(postOptions(st), st.setup.machine.post, (v) => edit(host, t('mfg.post'), (s) => { s.setup.machine.post = v; })))),
    el('div', { className: 'pc-actions' },
      K.btn(t('mfg.post.edit'), () => editSelectedPost(host, st), 'pc-btn', { dataset: { mpostedit: '1' } }),
      K.btn(t('mfg.post.new'), () => runPostEditor(host, st, { text: blankPost(freshPostId(st, 'my-post'), t('mfg.post.new_name')), isNew: true }), 'pc-btn', { dataset: { mpostnew: '1' } }),
      K.btn(t('mfg.post.import'), () => pickFile(host, '.cpost,.txt,text/plain', async (f) => {
        try { runPostEditor(host, st, { text: await readPostFile(f), isNew: true }); } catch (e) { host.status(e.message, true); }
      }), 'pc-btn', { dataset: { mpostimport: '1' } })),
    el('div', { className: 'pc-actions' },
      K.btn(t('mfg.download_gcode'), () => doPost(host), 'pc-btn is-primary', { disabled: !r, dataset: { mpost: '1' } }),
      K.btn(t('mfg.toolpath_csv'), () => { const pg = program(host); if (pg) host.downloadBlob(baseName(host) + '-toolpath.csv', new Blob([toolpathCsv(pg)], { type: 'text/csv' }), 'text/csv'); }, 'pc-btn', { disabled: !r }),
      K.btn(t('mfg.toolpath_json'), () => { const pg = program(host); if (pg) host.downloadBlob(baseName(host) + '-toolpath.json', new Blob([toolpathJson(pg)], { type: 'application/json' }), 'application/json'); }, 'pc-btn', { disabled: !r })),
    el('p', { className: 'pc-note' }, t('mfg.lab_note')));
  box.append(pb);
}
/** The key to the stock colours (cam-sim.js colorAt): the same five colours the view uses. */
function legend(el) {
  const rgb = (c) => `rgb(${c.map((v) => Math.round(v * 255)).join(',')})`;
  const css = (n, o) => { for (const [k, v] of Object.entries(o)) n.style.setProperty(k, v); return n; };
  const row = (c, text) => css(el('li', {}, swatch(el, rgb(c)), el('span', {}, text)), { display: 'flex', gap: '.4rem', 'align-items': 'center' });
  return css(el('ul', { className: 'pc-note', dataset: { mlegend: '1' } },
    row(ON_RGB, t('mfg.legend.on')), row(GOUGE_RGB, t('mfg.legend.cut')), row(THIN_RGB, t('mfg.legend.thin')), row(MID_RGB, t('mfg.legend.more')), row(STOCK_RGB, t('mfg.legend.stock'))), { 'list-style': 'none', margin: '.25rem 0 0', padding: '0' });
}
function swatch(el, c) {
  const sw = el('span', { 'aria-hidden': 'true' });
  for (const [k, v] of [['display', 'inline-block'], ['width', '.7rem'], ['height', '.7rem'], ['border-radius', '2px'], ['flex', 'none'], ['background', c]]) sw.style.setProperty(k, v);
  return sw;
}
// ---------------------------------------------------------------- posts of one's own (cam-postdef.js)

const postTitle = (p) => { try { return parsePost(p.text).name; } catch { return p.id; } };
/** The Control list: the three built-in posts, then the study's own. */
const postOptions = (st) => [...Object.keys(POSTS).map((k) => [k, POSTS[k]]), ...(st.posts || []).map((p) => ['custom:' + p.id, postTitle(p)])];
const postName = (st, key) => { const o = postOptions(st).find(([k]) => k === key); return o ? o[1] : key; };
function freshPostId(st, base) {
  const used = new Set((st.posts || []).map((p) => p.id));
  let id = base, n = 2;
  while (used.has(id)) id = base + '-' + n++;
  return id;
}
function pickFile(host, accept, onFile) {
  const input = host.el('input', { type: 'file', accept });
  input.hidden = true;
  input.addEventListener('change', () => { const f = input.files && input.files[0]; input.remove(); if (f) onFile(f); });
  document.body.append(input);
  input.click();
}
async function runPostEditor(host, st, { text, isNew, oldId = null }) {
  await openPostEditor(host, {
    text, isNew, program: program(host),
    exists: (id) => (st.posts || []).some((p) => p.id === id),
    onSave: (txt) => {
      const def = parsePost(txt);
      if (!oldId && (st.posts || []).length >= POST_LIMITS.count) { host.status(t('mfg.post.too_many', { n: POST_LIMITS.count }), true); return false; }
      edit(host, t('mfg.undo.post_save'), (s) => {
        s.posts = s.posts || [];
        const k = oldId ? s.posts.findIndex((p) => p.id === oldId) : -1, rec = { id: def.id, text: txt };
        if (k >= 0) s.posts[k] = rec; else s.posts.push(rec);
        if (!oldId || s.setup.machine.post === 'custom:' + oldId) s.setup.machine.post = 'custom:' + def.id;
      });
      host.status(t('mfg.post.saved', { name: def.name }));
      return true;
    },
    onDelete: oldId ? () => {
      edit(host, t('mfg.undo.post_delete'), (s) => { s.posts = (s.posts || []).filter((p) => p.id !== oldId); if (s.setup.machine.post === 'custom:' + oldId) s.setup.machine.post = 'grbl'; });
      return true;
    } : null,
  });
  host.renderPanel();
}
function editSelectedPost(host, st) {
  const key = st.setup.machine.post;
  const own = key.startsWith('custom:') ? (st.posts || []).find((p) => 'custom:' + p.id === key) : null;
  if (own) runPostEditor(host, st, { text: own.text, isNew: false, oldId: own.id });
  else runPostEditor(host, st, { text: postCopy(key, freshPostId(st, 'my-' + key), t('mfg.post.copy_name', { name: POSTS[key] })), isNew: true });
}

// ---------------------------------------------------------------- tool library: mine (in the browser) and files

function renderLibrary(host, box, st, K) {
  const { el } = host;
  const saved = savedLibrary();
  const tl = st.tools.find((x) => x.id === S.tool);
  let pick = saved.length ? '0' : '';
  const say = (m) => host.status(t('mfg.lib.merged', { added: m.added.length, skipped: m.skipped.length }) + (m.renumbered.length ? ' ' + t('mfg.lib.renumbered', { list: m.renumbered.map((r) => `${r.name}: T${r.from} → T${r.to}`).join(', ') }) : ''));
  const bring = (incoming, label) => {
    let m;
    try { m = mergeTools(st.tools, incoming); } catch (e) { host.status(e.message, true); return; }
    if (m.added.length) edit(host, label, (s) => { s.tools = mergeTools(s.tools, incoming).tools; });
    say(m);
    host.renderPanel();
  };
  const list = K.sel(saved.length ? saved.map((x, i) => [String(i), `T${x.number} ${x.name || describeTool(x)}`]) : [['', t('mfg.lib.empty')]], pick, (v) => { pick = v; });
  list.dataset.mlibList = '1';
  box.append(el('div', { className: 'pc-block', dataset: { mlibrary: '1' } },
    el('p', { className: 'pc-props-sub' }, t('mfg.lib.title')),
    el('p', { className: 'pc-note' }, t('mfg.lib.note')),
    el('div', { className: 'pc-props' }, ...K.field(t('mfg.lib.mine'), list)),
    el('div', { className: 'pc-actions' },
      K.btn(t('mfg.lib.add_to_part'), () => { const x = saved[Number(pick)]; if (x) bring([x], t('mfg.lib.add_to_part')); }, 'pc-btn', { disabled: !saved.length, dataset: { mlibadd: '1' } }),
      K.btn(t('mfg.lib.remove'), () => { if (pick !== '' && removeFromLibrary(Number(pick))) { host.status(t('mfg.lib.removed')); host.renderPanel(); } }, 'pc-btn', { disabled: !saved.length, dataset: { mlibremove: '1' } })),
    el('div', { className: 'pc-actions' },
      K.btn(t('mfg.lib.save_tool'), () => { if (!tl) return; const r = saveToLibrary([tl]); host.status(r.ok ? t('mfg.lib.saved', { added: r.added.length, skipped: r.skipped.length }) : t('mfg.lib.no_storage'), !r.ok); host.renderPanel(); }, 'pc-btn', { disabled: !tl, dataset: { mlibsave: '1' } }),
      K.btn(t('mfg.lib.save_all'), () => { const r = saveToLibrary(st.tools); host.status(r.ok ? t('mfg.lib.saved', { added: r.added.length, skipped: r.skipped.length }) : t('mfg.lib.no_storage'), !r.ok); host.renderPanel(); }, 'pc-btn', { dataset: { mlibsaveall: '1' } })),
    el('div', { className: 'pc-actions' },
      K.btn(t('mfg.lib.export'), () => host.downloadBlob(baseName(host) + '-tools.json', new Blob([exportLibrary(st.tools, baseName(host))], { type: 'application/json' }), 'application/json'), 'pc-btn', { dataset: { mlibexport: '1' } }),
      K.btn(t('mfg.lib.import'), () => pickFile(host, '.json,application/json', async (f) => {
        try { bring(readLibrary(await f.text()), t('mfg.lib.import')); } catch (e) { host.status(e.message, true); }
      }), 'pc-btn', { dataset: { mlibimport: '1' } }))));
}

const baseName = (host) => String(host.part.name || 'Part').replace(/[^A-Za-z0-9 _-]/g, '').trim().replace(/\s+/g, '-') || 'Part';   // i18n-ignore: file name
function doPost(host) {
  const pg = program(host);
  if (!pg) { host.status(t('mfg.make_first')); return; }
  const bad = pg.paths.filter((p) => p.error);
  if (bad.length) host.status(t('mfg.post.left_out', { n: bad.length, names: bad.map((p) => p.op.name).join(', ') }), true);
  // the control and the study's own posts are read now, not from the study the toolpaths were last made from: they do not change the toolpaths
  const cur = study(host) || S.resultFor;
  const kind = cur.setup.machine.post;
  const out = post(pg, { post: kind, name: host.part.name || 'Part', posts: cur.posts || [] });   // i18n-ignore: program name in the G-code
  host.downloadBlob(`${baseName(host)}.${out.ext}`, new Blob([out.text], { type: 'text/plain' }), 'text/plain');
  if (!bad.length) host.status(t('mfg.post.done', { post: postName(cur, kind) }));
}

// ---------------------------------------------------------------- registration

// Labels, blurb and titles go in as language-file keys (they pass registerWorkspace's checks) and are then turned into
// getters on the stored definition, so t() runs when the toolbar or switcher is drawn, never at import.
function lazyLabels(ws) {
  const lazy = (o, f) => { const key = o[f]; Object.defineProperty(o, f, { get: () => t(key), enumerable: true, configurable: true }); };
  lazy(ws, 'label'); if (ws.blurb !== undefined) lazy(ws, 'blurb');
  for (const g of ws.groups) { lazy(g, 'label'); for (const it of g.items) { lazy(it, 'label'); lazy(it, 'title'); } }
  return ws;
}

lazyLabels(registerWorkspace({
  id: 'manufacture',
  label: 'mfg.ws.label',
  icon: 'gear-wide-connected',
  blurb: 'mfg.ws.blurb',
  groups: [
    { label: 'mfg.tb.ops', items: [
      { cmd: 'manufacture-face', icon: 'border-top', label: 'mfg.tb.face', title: 'mfg.tb.face.title' },
      { cmd: 'manufacture-pocket', icon: 'bounding-box-circles', label: 'mfg.tb.pocket', title: 'mfg.tb.pocket.title' },
      { cmd: 'manufacture-adaptive', icon: 'tornado', label: 'cam.adaptive.label', title: 'cam.adaptive.title' },
      { cmd: 'manufacture-contour', icon: 'bezier2', label: 'mfg.tb.contour', title: 'mfg.tb.contour.title' },
      { cmd: 'manufacture-drill', icon: 'record-circle', label: 'mfg.tb.drill', title: 'mfg.tb.drill.title' },
      { cmd: 'manufacture-chamfer', icon: 'triangle', label: 'mfg.tb.chamfer', title: 'mfg.tb.chamfer.title' },
      { cmd: 'manufacture-parallel', icon: 'list-nested', label: 'mfg.tb.parallel', title: 'mfg.tb.parallel.title' },
      { cmd: 'manufacture-scallop', icon: 'water', label: 'mfg.tb.scallop', title: 'mfg.tb.scallop.title' },
    ] },
    { label: 'mfg.tb.program', items: [
      { cmd: 'manufacture-simulate', icon: 'play-circle', label: 'mfg.tb.simulate', title: 'mfg.tb.simulate.title' },
      { cmd: 'manufacture-post', icon: 'file-earmark-code', label: 'mfg.tb.post', title: 'mfg.tb.post.title' },
    ] },
  ],
  enter(host) { schedule(host, 0); },
  exit(host) {
    clearTimeout(S.timer); S.req++;
    if (S.worker) { S.worker.terminate(); S.worker = null; }
    S.picking = false; S.busy = false;
    host.view.setMarks(null);
  },
  command(cmd, host) {
    const m = /^manufacture-(face|pocket|adaptive|contour|drill|chamfer|parallel|scallop)$/.exec(cmd);
    if (m) { addOp(host, m[1]); return true; }
    if (cmd === 'manufacture-simulate') { S.showStock = true; S.tab = 'ops'; generate(host); return true; }
    if (cmd === 'manufacture-post') { doPost(host); return true; }
    return false;
  },
  renderPanel,
  onPick(hit, host) {
    if (!S.picking) { if (hit) host.status(t('mfg.pick.choose_op')); return; }
    if (!hit) return;
    togglePick(host, hit);
  },
  onHover(hit, host) {
    if (!S.picking || !hit) { host.view.setHover(null); return; }
    if (hit.kind === 'face' && hit.face !== undefined) {
      const tris = [];
      const tf = host.regen && host.regen.mesh && host.regen.mesh.triFace;
      if (tf) for (let t = 0; t < tf.length; t++) if (tf[t] === hit.face) tris.push(t);
      host.view.setHover({ tris });
    } else if (hit.kind === 'edge' && hit.edge !== undefined) host.view.setHover({ kind: 'edges', edges: [hit.edge] });
    else host.view.setHover(null);
  },
  keydown(ev, host) {
    if (ev.key === 'Escape' && S.picking) { S.picking = false; host.status(t('mfg.pick.done')); host.renderPanel(); return true; }
    return false;
  },
  toolState(cmd, host) {
    if (/^manufacture-(face|pocket|contour|drill|chamfer|parallel|scallop)$/.test(cmd) && !(host.regen?.exact || host.regen?.named)) return { ok: false, why: exactWhy(t('kernel.what.manufacture'), t('mfg.need.exact')) };
    const st = study(host);
    if (cmd === 'manufacture-simulate' && !(st && st.ops.length)) return { ok: false, why: t('mfg.add_op_first') };
    if (cmd === 'manufacture-post' && !S.result) return { ok: false, why: t('mfg.make_first') };
    return { ok: true };
  },
  rebuilt(host) { schedule(host); },
}));

export const _state = S;   // tests
