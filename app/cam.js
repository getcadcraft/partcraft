/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam.js — PartCraft's Manufacture workspace kernel (DOM-free): the setup (stock, work origin, tool axis),
 * the part seen in machine coordinates, the study saved in `part.studies.manufacture`, and the program
 * (every operation's toolpath, in order). 2.5-axis milling and drilling from the exact model's faces and
 * edges; operations in cam-paths.js, posts in cam-post.js, stock simulation in cam-sim.js, tools in
 * cam-tools.js, 2D curves in cam-offset.js.
 *
 *   study {version:1, setup, tools:[tool], ops:[op]}
 *   setup {axis +x|-x|+y|-y|+z|-z (world axis that becomes machine +Z; default +y = PartCraft's up),
 *          origin stock-top-min|stock-top-centre|stock-bottom-min|stock-bottom-centre|model-top-centre|model-origin,
 *          stock {kind box|cylinder, mode offset|fixed, side, top, bottom (offsets, mm), size [x,y,z] (fixed), r (cylinder)},
 *          material (cam-tools MATERIALS key), machine {post fanuc|grbl|linuxcnc, maxRpm, rapid (mm/min), toolChange (s)},
 *          program (number), coolant flood|mist|off}
 *   op    {id, type face|pocket|adaptive|contour|drill|chamfer|parallel|scallop, name, tool (tool id), suppressed, geo {faces:[FaceRef], edges:[EdgeRef]},
 *          params {...} (OP_PARAMS)}
 *
 * Machine frame: Z = the chosen world axis, X/Y right-handed (+y → X = world X, Y = −world Z, the top plane's
 * sketch axes). Every coordinate the CAM kernel hands out is in the work frame: machine axes, origin = the
 * setup's work origin (G54). Units: mm.
 */
import { boundaryLoops } from './faces.js';
import { findFace, findEdge } from './brep.js';
import * as O from './cam-offset.js';
import { readTool, starterLibrary, MATERIALS } from './cam-tools.js';
import { parsePost } from './cam-postdef.js';
import { ORIGINS } from './cam-origins.js';
import { t } from './i18n.js';

export const STUDY_VERSION = 1;
const d3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

export const AXES = {
  '+y': { x: [1, 0, 0], y: [0, 0, -1], z: [0, 1, 0], get label() { return t('mfg.axis.py'); } },
  '-y': { x: [1, 0, 0], y: [0, 0, 1], z: [0, -1, 0], get label() { return t('mfg.axis.ny'); } },
  '+z': { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1], get label() { return t('mfg.axis.pz'); } },
  '-z': { x: [1, 0, 0], y: [0, -1, 0], z: [0, 0, -1], get label() { return t('mfg.axis.nz'); } },
  '+x': { x: [0, 0, -1], y: [0, 1, 0], z: [1, 0, 0], get label() { return t('mfg.axis.px'); } },
  '-x': { x: [0, 0, 1], y: [0, 1, 0], z: [-1, 0, 0], get label() { return t('mfg.axis.nx'); } },
};
export { ORIGINS };
/** The UI label of a work origin (ORIGINS keeps the English the G-code comments carry). */
export function originLabel(key) {
  const m = { 'stock-top-min': 'mfg.origin.top_min', 'stock-top-centre': 'mfg.origin.top_centre', 'stock-bottom-min': 'mfg.origin.bottom_min', 'stock-bottom-centre': 'mfg.origin.bottom_centre', 'model-top-centre': 'mfg.origin.model_top_centre', 'model-origin': 'mfg.origin.model_origin' }[key];
  return m ? t(m) : key;
}
export const POSTS = {
  get fanuc() { return t('mfg.post.fanuc'); },
  grbl: 'GRBL (.nc)', linuxcnc: 'LinuxCNC (.ngc)',   // i18n-ignore: control names + file extensions
};
// labels are getters: the table is read at module load (also in workers before their catalog arrives), so t() runs only on use
export const OP_TYPES = {
  get face() { return t('mfg.op.face'); }, get pocket() { return t('mfg.op.pocket'); }, get adaptive() { return t('mfg.op.adaptive'); },
  get contour() { return t('mfg.op.contour'); }, get drill() { return t('mfg.op.drill'); }, get chamfer() { return t('mfg.op.chamfer'); },
  get parallel() { return t('mfg.op.parallel'); }, get scallop() { return t('mfg.op.scallop'); },
};

export function newSetup() {
  return {
    axis: '+y', origin: 'stock-top-min',
    stock: { kind: 'box', mode: 'offset', side: 2, top: 1, bottom: 0, size: [100, 100, 30], r: 50 },
    material: 'aluminum', machine: { post: 'grbl', maxRpm: 24000, rapid: 5000, toolChange: 15 }, program: 1001, coolant: 'flood',
  };
}
export function newStudy() { return { version: STUDY_VERSION, setup: newSetup(), tools: starterLibrary(), ops: [], posts: [] }; }

// ---------------------------------------------------------------- the study's own posts (cam-postdef.js text files)

export const POST_LIMITS = { count: 20, text: 60000 };
const POST_ID = /^[A-Za-z0-9_-]{1,40}$/;
/** The study's own posts [{id, text}] from untrusted data: ids unique, every text parses. */
export function readPosts(list) {
  if (list === undefined || list === null) return [];
  if (!Array.isArray(list) || list.length > POST_LIMITS.count) throw new Error(t('mfg.study.post_list'));
  const seen = new Set();
  return list.map((p) => {
    if (!p || typeof p.id !== 'string' || !POST_ID.test(p.id) || seen.has(p.id)) throw new Error(t('mfg.study.post_id'));
    seen.add(p.id);
    if (typeof p.text !== 'string' || p.text.length > POST_LIMITS.text) throw new Error(t('mfg.study.post_text'));
    try { parsePost(p.text); } catch (e) { throw new Error(t('mfg.study.post_bad', { id: p.id, line: e.line || 1, error: e.message })); }
    return { id: p.id, text: p.text };
  });
}

// ---------------------------------------------------------------- operation parameters

// [min, max, default] for numbers, [values…] (first = default) for choices, true/false for flags
const H = { clearance: [0, 500, 10], retract: [0, 500, 5], feedHeight: [0.1, 100, 1], top: [null], bottom: [null], bottomOff: [-200, 200, 0] };
const HF = { clearance: H.clearance, retract: H.retract, bottom: H.bottom };
export const OP_PARAMS = {
  face: { ...H, stepover: [0.05, 1, 0.75], stepdown: [0.05, 50, 2], overhang: [0, 100, 2], direction: ['x', 'y'] },
  pocket: { ...H, stepover: [0.05, 0.5, 0.4], stepdown: [0.05, 100, 2], leave: [0, 20, 0], leaveAxial: [0, 20, 0], finish: false, entry: ['helix', 'ramp', 'plunge'], rampAngle: [0.5, 45, 3], helixR: [0.05, 2, 0.4], breakthrough: [0, 20, 1] },
  // 0.4 P24: engagement = the radial width each pass cuts, as a fraction of the diameter; helixR × D the entry helix
  adaptive: { ...H, engagement: [0.05, 0.45, 0.15], stepdown: [0.05, 100, 6], leave: [0, 20, 0], leaveAxial: [0, 20, 0], helixR: [0.05, 1, 0.25], rampAngle: [0.5, 45, 2], breakthrough: [0, 20, 1] },
  contour: { ...H, side: ['auto', 'outside', 'inside'], stepdown: [0.05, 100, 2], leave: [0, 20, 0], climb: true, lead: [0, 5, 0.5], tabs: [0, 32, 0], tabWidth: [0.5, 100, 6], tabHeight: [0.1, 100, 2], breakthrough: [0, 20, 1], holes: false, ramp: false, rampAngle: [0.5, 45, 3] },
  drill: { ...H, cycle: ['peck', 'drill', 'chipbreak'], peck: [0.05, 100, 3], rPlane: [0.1, 100, 2], breakthrough: [0, 20, 1], fullDiameter: true, diameter: [0, 250, 0] },
  chamfer: { ...H, width: [0.05, 20, 0.5], tipOffset: [0, 20, 0.5], holes: true },
  // 0.7 LC.15, 3D finishing of the whole model (cam-finish.js): stepover × D; tolerance, leave and bottom in mm; angles in degrees
  parallel: { ...HF, stepover: [0.005, 0.5, 0.1], tolerance: [0.001, 1, 0.01], angle: [0, 180, 0], leave: [0, 20, 0], zigzag: true, slopeFrom: [0, 90, 0], slopeTo: [0, 90, 90] },
  scallop: { ...HF, height: [0.001, 1, 0.02], tolerance: [0.001, 1, 0.01], leave: [0, 20, 0], from: ['edge', 'top'], climb: true, slopeFrom: [0, 90, 0], slopeTo: [0, 90, 90] },
};
export function defaultParams(type) {
  const s = OP_PARAMS[type], out = {};
  for (const [k, v] of Object.entries(s)) out[k] = typeof v === 'boolean' ? v : v.length === 1 ? null : typeof v[0] === 'string' ? v[0] : v[2];
  return out;
}
let opSeq = 0;
export function newOp(type, props = {}) {
  if (!OP_PARAMS[type]) throw new Error(t('mfg.op.unknown'));
  return { id: props.id || 'o' + (++opSeq) + Math.random().toString(36).slice(2, 6), type, name: props.name || OP_TYPES[type], tool: props.tool || null, suppressed: false, geo: { faces: [], edges: [], ...(props.geo || {}) }, params: { ...defaultParams(type), ...(props.params || {}) } };
}

// ---------------------------------------------------------------- reading untrusted studies

const clean = (s, n = 80) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, n);
const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const numIn = (v, lo, hi, what) => { if (!isNum(v) || v < lo || v > hi) throw new Error(t('mfg.study.range', { what })); return v; };
const NAME_OK = /^f\d{1,9}\.[a-z]+(:[A-Za-z0-9_:-]{1,40})?([@~]f\d{1,9}(#(\d{1,4}|m))?){0,24}$/;
const readAt = (a, what) => { if (!Array.isArray(a) || a.length !== 3 || !a.every((v) => isNum(v) && Math.abs(v) < 1e7)) throw new Error(t('mfg.study.point', { what })); return a.slice(); };
function readFaceRef(r) {
  if (!r || typeof r.name !== 'string' || !NAME_OK.test(r.name)) throw new Error(t('mfg.study.face_ref'));
  return { name: r.name, at: readAt(r.at, t('mfg.study.w.face')) };
}
function readEdgeRef(r) {
  if (!r || !Array.isArray(r.faces) || r.faces.length !== 2 || !r.faces.every((n) => typeof n === 'string' && (NAME_OK.test(n) || n === '?'))) throw new Error(t('mfg.study.edge_ref'));
  return { faces: r.faces.slice(), at: readAt(r.at, t('mfg.study.w.edge')) };
}

export function readSetup(j) {
  if (!j || typeof j !== 'object') throw new Error(t('mfg.study.no_setup'));
  const d = newSetup();
  const st = j.stock || {};
  const s = {
    axis: AXES[j.axis] ? j.axis : (() => { throw new Error(t('mfg.study.axis')); })(),
    origin: ORIGINS[j.origin] ? j.origin : (() => { throw new Error(t('mfg.study.origin')); })(),
    stock: {
      kind: st.kind === 'cylinder' ? 'cylinder' : 'box', mode: st.mode === 'fixed' ? 'fixed' : 'offset',
      side: numIn(st.side ?? d.stock.side, 0, 1000, t('mfg.study.w.side')), top: numIn(st.top ?? d.stock.top, 0, 1000, t('mfg.study.w.top')),
      bottom: numIn(st.bottom ?? d.stock.bottom, 0, 1000, t('mfg.study.w.bottom')),
      size: Array.isArray(st.size) && st.size.length === 3 ? st.size.map((v, i) => numIn(v, 0.1, 5000, t('mfg.study.w.size', { axis: 'xyz'[i] }))) : d.stock.size.slice(),
      r: numIn(st.r ?? d.stock.r, 0.1, 2500, t('mfg.study.w.radius')),
    },
    material: MATERIALS[j.material] ? j.material : 'aluminum',
    machine: {
      post: POSTS[j.machine?.post] || /^custom:[A-Za-z0-9_-]{1,40}$/.test(j.machine?.post) ? j.machine.post : 'grbl',
      maxRpm: numIn(j.machine?.maxRpm ?? 24000, 100, 200000, t('mfg.study.w.max_rpm')),
      rapid: numIn(j.machine?.rapid ?? 5000, 10, 200000, t('mfg.study.w.rapid')),
      toolChange: numIn(j.machine?.toolChange ?? 15, 0, 3600, t('mfg.study.w.tool_change')),
    },
    program: numIn(j.program ?? 1001, 1, 9999, t('mfg.study.w.program')),
    coolant: ['flood', 'mist', 'off'].includes(j.coolant) ? j.coolant : 'flood',
  };
  if (!Number.isInteger(s.program)) throw new Error(t('mfg.study.program_whole'));
  return s;
}

export function readParams(type, p) {
  const s = OP_PARAMS[type], out = {};
  p = p && typeof p === 'object' ? p : {};
  for (const [k, spec] of Object.entries(s)) {
    const v = p[k];
    if (typeof spec === 'boolean') { out[k] = v === undefined ? spec : !!v; continue; }
    if (spec.length === 1) { out[k] = v === null || v === undefined ? null : numIn(v, -10000, 10000, k); continue; }
    if (typeof spec[0] === 'string') { out[k] = v === undefined ? spec[0] : spec.includes(v) ? v : (() => { throw new Error(t('mfg.study.choice', { name: k, list: spec.join(', ') })); })(); continue; }
    out[k] = v === undefined ? spec[2] : numIn(v, spec[0], spec[1], k);
  }
  for (const k of ['tabs']) if (k in out && !Number.isInteger(out[k])) throw new Error(t('mfg.study.tabs_whole'));
  return out;
}

/** A study from untrusted data (part files): every field range-checked; refuses newer versions. */
export function readStudy(j) {
  if (!j || typeof j !== 'object') throw new Error(t('mfg.study.not_object'));
  if (j.version !== STUDY_VERSION) throw new Error(j.version > STUDY_VERSION ? t('mfg.study.newer') : t('mfg.study.version'));
  if (!Array.isArray(j.tools) || j.tools.length > 200) throw new Error(t('mfg.study.tool_list'));
  if (!Array.isArray(j.ops) || j.ops.length > 500) throw new Error(t('mfg.study.op_list'));
  const tools = j.tools.map(readTool);
  const ids = new Set();
  for (const tl of tools) { if (ids.has(tl.id)) throw new Error(t('mfg.study.tool_id')); ids.add(tl.id); }
  const opIds = new Set();
  const ops = j.ops.map((o) => {
    if (!o || typeof o !== 'object' || !OP_PARAMS[o.type]) throw new Error(t('mfg.study.op_type'));
    if (typeof o.id !== 'string' || !/^[A-Za-z0-9_-]{1,40}$/.test(o.id) || opIds.has(o.id)) throw new Error(t('mfg.study.op_id'));
    opIds.add(o.id);
    if (o.tool !== null && !ids.has(o.tool)) throw new Error(t('mfg.study.op_tool'));
    const geo = o.geo || {};
    if ((geo.faces && !Array.isArray(geo.faces)) || (geo.edges && !Array.isArray(geo.edges)) || (geo.faces || []).length > 500 || (geo.edges || []).length > 2000) throw new Error(t('mfg.study.geo_list'));
    return {
      id: o.id, type: o.type, name: clean(o.name) || OP_TYPES[o.type], tool: o.tool ?? null, suppressed: !!o.suppressed,
      geo: { faces: (geo.faces || []).map(readFaceRef), edges: (geo.edges || []).map(readEdgeRef) },
      params: readParams(o.type, o.params),
    };
  });
  const posts = readPosts(j.posts);
  const setup = readSetup(j.setup);
  if (setup.machine.post.startsWith('custom:') && !posts.some((p) => 'custom:' + p.id === setup.machine.post)) throw new Error(t('mfg.study.post_missing'));
  return { version: STUDY_VERSION, setup, tools, ops, posts };
}

// ---------------------------------------------------------------- the part in machine coordinates

/**
 * The part (an exact regen: faces, edges, mesh, stats) seen from the machine: work-frame coordinates,
 * the stock, height queries, face loops and holes. → model
 */
export function machineModel(regen, setup) {
  if (!regen || !regen.mesh || !regen.stats) throw new Error(t('mfg.no_solid'));
  const ax = AXES[setup.axis] || AXES['+y'];
  const rot = (p) => [d3(p, ax.x), d3(p, ax.y), d3(p, ax.z)];
  const rotD = rot;
  // exact model box (axis-aligned turns keep it exact)
  const wb = regen.stats.bbox;
  const corners = [];
  for (const x of [wb.min[0], wb.max[0]]) for (const y of [wb.min[1], wb.max[1]]) for (const z of [wb.min[2], wb.max[2]]) corners.push(rot([x, y, z]));
  const bmin = [0, 1, 2].map((k) => Math.min(...corners.map((c) => c[k]))), bmax = [0, 1, 2].map((k) => Math.max(...corners.map((c) => c[k])));
  const st = setup.stock;
  let smin, smax;
  if (st.mode === 'fixed') {
    const cx = (bmin[0] + bmax[0]) / 2, cy = (bmin[1] + bmax[1]) / 2, top = bmax[2] + st.top;
    smin = [cx - st.size[0] / 2, cy - st.size[1] / 2, top - st.size[2]]; smax = [cx + st.size[0] / 2, cy + st.size[1] / 2, top];
  } else {
    smin = [bmin[0] - st.side, bmin[1] - st.side, bmin[2] - st.bottom]; smax = [bmax[0] + st.side, bmax[1] + st.side, bmax[2] + st.top];
  }
  let cyl = null;
  if (st.kind === 'cylinder') {
    const c = [(bmin[0] + bmax[0]) / 2, (bmin[1] + bmax[1]) / 2];
    const r = st.mode === 'fixed' ? st.r : Math.hypot(bmax[0] - bmin[0], bmax[1] - bmin[1]) / 2 + st.side;
    cyl = { c, r };
    smin = [c[0] - r, c[1] - r, smin[2]]; smax = [c[0] + r, c[1] + r, smax[2]];
  }
  const sc = [(smin[0] + smax[0]) / 2, (smin[1] + smax[1]) / 2];
  const bc = [(bmin[0] + bmax[0]) / 2, (bmin[1] + bmax[1]) / 2];
  const O0 = {
    'stock-top-min': [smin[0], smin[1], smax[2]], 'stock-top-centre': [sc[0], sc[1], smax[2]],
    'stock-bottom-min': [smin[0], smin[1], smin[2]], 'stock-bottom-centre': [sc[0], sc[1], smin[2]],
    'model-top-centre': [bc[0], bc[1], bmax[2]], 'model-origin': [0, 0, 0],
  }[setup.origin] || [smin[0], smin[1], smax[2]];
  const toM = (p) => { const q = rot(p); return [q[0] - O0[0], q[1] - O0[1], q[2] - O0[2]]; };
  const toWorld = (m) => {
    const q = [m[0] + O0[0], m[1] + O0[1], m[2] + O0[2]];
    return [0, 1, 2].map((k) => ax.x[k] * q[0] + ax.y[k] * q[1] + ax.z[k] * q[2]);
  };
  const sh = (p) => [p[0] - O0[0], p[1] - O0[1], p[2] - O0[2]];
  const stock = { kind: cyl ? 'cylinder' : 'box', min: sh(smin), max: sh(smax), c: cyl ? [cyl.c[0] - O0[0], cyl.c[1] - O0[1]] : null, r: cyl ? cyl.r : null };
  const box = { min: sh(bmin), max: sh(bmax) };

  // mesh
  const P = regen.mesh.positions, I = regen.mesh.indices;
  const nv = P.length / 3;
  const pos = new Float64Array(P.length);
  for (let i = 0; i < nv; i++) { const q = toM([P[i * 3], P[i * 3 + 1], P[i * 3 + 2]]); pos[i * 3] = q[0]; pos[i * 3 + 1] = q[1]; pos[i * 3 + 2] = q[2]; }
  const mesh = { positions: pos, indices: I, triFace: regen.mesh.triFace };
  const faces = (regen.faces || []).map((f) => {
    const g = { ...f, at: toM(f.at) };
    if (f.n) { g.n = rotD(f.n); g.o = toM(f.o); }
    if (f.axis) g.axis = { o: toM(f.axis.o), d: rotD(f.axis.d) };
    return g;
  });
  const edges = (regen.edges || []).map((e) => ({ ...e, a: toM(e.a), b: toM(e.b), at: toM(e.at) }));
  const size = Math.max(1, ...box.max.map((v, k) => v - box.min[k]));
  const tol = 1e-4 + 2e-6 * size;   // float32 mesh vertices vs exact edges

  // triangle bins for height queries (XY)
  const nt = I.length / 3;
  const binN = Math.max(4, Math.min(256, Math.round(Math.sqrt(nt / 2))));
  const bx0 = box.min[0] - 1e-6, by0 = box.min[1] - 1e-6;
  const bw = (box.max[0] - box.min[0] + 2e-6) / binN, bh = (box.max[1] - box.min[1] + 2e-6) / binN;
  const bins = Array.from({ length: binN * binN }, () => []);
  for (let t = 0; t < nt; t++) {
    const a = I[t * 3], b = I[t * 3 + 1], c = I[t * 3 + 2];
    const xs = [pos[a * 3], pos[b * 3], pos[c * 3]], ys = [pos[a * 3 + 1], pos[b * 3 + 1], pos[c * 3 + 1]];
    const i0 = Math.max(0, Math.floor((Math.min(...xs) - bx0) / bw)), i1 = Math.min(binN - 1, Math.floor((Math.max(...xs) - bx0) / bw));
    const j0 = Math.max(0, Math.floor((Math.min(...ys) - by0) / bh)), j1 = Math.min(binN - 1, Math.floor((Math.max(...ys) - by0) / bh));
    for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) bins[j * binN + i].push(t);
  }
  /** z values where the vertical line at (x, y) meets the mesh (triangles seen edge-on are skipped). */
  function hits(x, y) {
    const i = Math.floor((x - bx0) / bw), j = Math.floor((y - by0) / bh);
    if (i < 0 || j < 0 || i >= binN || j >= binN) return [];
    const out = [];
    for (const t of bins[j * binN + i]) {
      const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
      const x1 = pos[a], y1 = pos[a + 1], x2 = pos[b], y2 = pos[b + 1], x3 = pos[c], y3 = pos[c + 1];
      const den = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
      if (Math.abs(den) < 1e-14) continue;
      const l1 = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / den;
      const l2 = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / den;
      const l3 = 1 - l1 - l2;
      if (l1 < -1e-12 || l2 < -1e-12 || l3 < -1e-12) continue;
      out.push({ z: l1 * pos[a + 2] + l2 * pos[b + 2] + l3 * pos[c + 2], up: den > 0 });
    }
    return out;
  }
  /** Top of the part at (x, y) (−Infinity where there is none). */
  function heightAt(x, y) { let m = -Infinity; for (const h of hits(x, y)) if (h.z > m) m = h.z; return m; }
  /** Triangles whose bins touch the window [x0, x1] × [y0, y1] (each once) — the 3D finishing's edge and vertex contacts. */
  function trianglesIn(x0, y0, x1, y1) {
    const i0 = Math.max(0, Math.floor((x0 - bx0) / bw)), i1 = Math.min(binN - 1, Math.floor((x1 - bx0) / bw));
    const j0 = Math.max(0, Math.floor((y0 - by0) / bh)), j1 = Math.min(binN - 1, Math.floor((y1 - by0) / bh));
    const seen = new Set();
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) for (const t of bins[j * binN + i]) seen.add(t);
    return [...seen];
  }
  /** The highest triangle at (x, y) as z(X, Y) = z + gx·(X − x) + gy·(Y − y): {z, gx, gy}, null where there is none (3D finishing). */
  function topPlane(x, y) {
    const i = Math.floor((x - bx0) / bw), j = Math.floor((y - by0) / bh);
    if (i < 0 || j < 0 || i >= binN || j >= binN) return null;
    let best = null;
    for (const t of bins[j * binN + i]) {
      const a = I[t * 3] * 3, b = I[t * 3 + 1] * 3, c = I[t * 3 + 2] * 3;
      const x1 = pos[a], y1 = pos[a + 1], x2 = pos[b], y2 = pos[b + 1], x3 = pos[c], y3 = pos[c + 1];
      const den = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
      if (Math.abs(den) < 1e-14) continue;
      const l1 = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / den;
      const l2 = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / den;
      const l3 = 1 - l1 - l2;
      if (l1 < -1e-12 || l2 < -1e-12 || l3 < -1e-12) continue;
      const z = l1 * pos[a + 2] + l2 * pos[b + 2] + l3 * pos[c + 2];
      if (best && z <= best.z) continue;
      const d2 = (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);
      const z1 = pos[a + 2], z2 = pos[b + 2], z3 = pos[c + 2];
      best = { z, gx: ((z2 - z1) * (y3 - y1) - (z3 - z1) * (y2 - y1)) / d2, gy: ((z3 - z1) * (x2 - x1) - (z2 - z1) * (x3 - x1)) / d2 };
    }
    return best;
  }
  /** Is there part material just below z at (x, y)? (ray parity, nudged off mesh vertices) */
  function materialBelow(x, y, z) {
    const hs = hits(x + 1.37e-7, y + 0.91e-7).filter((h) => h.z < z).sort((a, b) => b.z - a.z);
    if (!hs.length) return false;
    // the first surface below: facing up means we are above material
    return hs[0].up;
  }

  // exact vertices and circles from the edge table, for snapping mesh loops
  const ends = [];
  for (const e of edges) { ends.push(e.a); if (O.dist(e.a, e.b) > tol || Math.abs(e.a[2] - e.b[2]) > tol) ends.push(e.b); }
  const circles = [];
  for (const e of edges) {
    if (e.type !== 'circle' || Math.abs(e.a[2] - e.b[2]) > tol || Math.abs(e.a[2] - e.at[2]) > tol) continue;
    let c, r;
    if (Math.hypot(e.a[0] - e.b[0], e.a[1] - e.b[1]) < tol) { c = [(e.a[0] + e.at[0]) / 2, (e.a[1] + e.at[1]) / 2]; r = Math.hypot(e.a[0] - e.at[0], e.a[1] - e.at[1]) / 2; }
    else { const cc = circum(e.a, e.at, e.b); if (!cc) continue; c = cc.c; r = cc.r; }
    circles.push({ c, r, z: e.a[2], a: e.a, b: e.b, at: e.at });
  }

  /** Is face i a plane facing +Z (a floor or top the tool can reach)? */
  const isFloor = (f) => f.type === 'plane' && f.n && f.n[2] > 1 - 1e-9;
  /** Loops of planar face i in the work XY plane, curves exact (lines, arcs from the edge table). → {z, loops} */
  function faceLoops(i) {
    const f = faces[i];
    if (!f || f.type !== 'plane' || Math.abs(Math.abs(f.n[2]) - 1) > 1e-9) throw new Error(t('mfg.pick.flat_square'));
    const z = f.o[2];
    const tris = [];
    for (let t = 0; t < nt; t++) if (mesh.triFace[t] === i) tris.push(t);
    const raw = boundaryLoops(mesh, tris);
    const zEnds = ends.filter((p) => Math.abs(p[2] - z) < tol);
    const zCirc = circles.filter((c) => Math.abs(c.z - z) < tol);
    const loops = raw.map((vl) => snapLoop(vl.map((v) => [pos[v * 3], pos[v * 3 + 1]]), zEnds, zCirc, tol));
    return { z, loops: O.orientRegion(loops.filter((l) => l.length)) };
  }
  /** A cylinder face along the tool axis → {c, r, top, bottom, hole (material outside), full, through} or null. */
  function cylinderInfo(i) {
    const f = faces[i];
    if (!f || f.type !== 'cylinder' || Math.abs(Math.abs(f.axis.d[2]) - 1) > 1e-9) return null;
    let zmin = Infinity, zmax = -Infinity, hole = 0, ang = new Set();
    const c = [f.axis.o[0], f.axis.o[1]];
    for (let t = 0; t < nt; t++) {
      if (mesh.triFace[t] !== i) continue;
      const vs = [I[t * 3], I[t * 3 + 1], I[t * 3 + 2]].map((v) => [pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]]);
      for (const p of vs) { zmin = Math.min(zmin, p[2]); zmax = Math.max(zmax, p[2]); ang.add(Math.floor(((Math.atan2(p[1] - c[1], p[0] - c[0]) + Math.PI) / O.TAU) * 36) % 36); }
      const u = [vs[1][0] - vs[0][0], vs[1][1] - vs[0][1], vs[1][2] - vs[0][2]], w = [vs[2][0] - vs[0][0], vs[2][1] - vs[0][1], vs[2][2] - vs[0][2]];
      const n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
      const m = [(vs[0][0] + vs[1][0] + vs[2][0]) / 3 - c[0], (vs[0][1] + vs[1][1] + vs[2][1]) / 3 - c[1]];
      hole += n[0] * m[0] + n[1] * m[1] < 0 ? 1 : -1;
    }
    const snapZ = (z) => { let best = z, bd = tol; for (const p of ends) { const d = Math.abs(p[2] - z); if (d < bd) { bd = d; best = p[2]; } } return best; };
    const top = snapZ(zmax), bottom = snapZ(zmin);
    const isHole = hole > 0;
    return { c, r: f.r, top, bottom, hole: isHole, full: ang.size >= 34, through: isHole ? !materialBelow(c[0], c[1], bottom - 1e-3) : false };
  }
  /** Every full hole along the tool axis → [{face, c, r, d, top, bottom, through}] */
  function holes() {
    const out = [];
    faces.forEach((f, i) => { const h = cylinderInfo(i); if (h && h.hole && h.full) out.push({ face: i, ...h, d: 2 * h.r }); });
    return out;
  }
  /** A closed chain of edges (indices) in one plane square to the axis → {z, loop} */
  function edgeLoop(list) {
    const es = list.map((k) => edges[k]);
    if (!es.length) throw new Error(t('mfg.pick.edges_first'));
    const z = es[0].a[2];
    for (const e of es) if (Math.abs(e.a[2] - z) > tol || Math.abs(e.b[2] - z) > tol || Math.abs(e.at[2] - z) > tol) throw new Error(t('mfg.edges.one_plane'));
    const prims = es.map((e) => {
      if (e.type === 'line') return O.line([e.a[0], e.a[1]], [e.b[0], e.b[1]]);
      if (e.type === 'circle') {
        if (Math.hypot(e.a[0] - e.b[0], e.a[1] - e.b[1]) < tol) { const c = [(e.a[0] + e.at[0]) / 2, (e.a[1] + e.at[1]) / 2]; return O.circle(c, Math.hypot(e.a[0] - e.at[0], e.a[1] - e.at[1]) / 2, true, Math.atan2(e.a[1] - c[1], e.a[0] - c[0])); }
        const cc = circum(e.a, e.at, e.b);
        return arcThrough(cc.c, cc.r, e.a, e.at, e.b);
      }
      throw new Error(t('mfg.edges.free_form'));
    });
    const loop = chainOpen(prims, tol);
    if (!loop) throw new Error(t('mfg.edges.not_closed'));
    return { z, loop };
  }

  return {
    axis: setup.axis, frame: ax, origin: O0, toM, toWorld, stock, box, top: box.max[2], bottom: box.min[2], faces, edges, mesh, tol,
    heightAt, topPlane, trianglesIn, materialBelow, faceLoops, cylinderInfo, holes, edgeLoop, isFloor,
    faceIndex: (ref) => findFace(regen.faces, ref),   // world-space refs (FaceRef/EdgeRef) → index, −1 when gone
    edgeIndex: (ref) => findEdge(regen.edges, ref),
  };
}

function circum(a, b, c) {
  const ax = a[0], ay = a[1], bx = b[0], by = b[1], cx = c[0], cy = c[1];
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(d) < 1e-14) return null;
  const a2 = ax * ax + ay * ay, b2 = bx * bx + by * by, c2 = cx * cx + cy * cy;
  const ux = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / d, uy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / d;
  return { c: [ux, uy], r: Math.hypot(ax - ux, ay - uy) };
}
const ang = (c, p) => Math.atan2(p[1] - c[1], p[0] - c[0]);
const mod = (a, m) => ((a % m) + m) % m;
/** Arc about c from s to e passing through m (all 2D). */
function arcThrough(c, r, s, m, e) {
  const a0 = ang(c, s), am = ang(c, m), a1 = ang(c, e);
  const ccw = mod(am - a0, O.TAU) < mod(a1 - a0, O.TAU) || O.dist(s, e) < 1e-12;
  let sw = ccw ? mod(a1 - a0, O.TAU) : -mod(a0 - a1, O.TAU);
  if (Math.abs(sw) < 1e-12) sw = ccw ? O.TAU : -O.TAU;
  return O.arc(c, r, a0, sw, [s[0], s[1]], [e[0], e[1]]);
}

/** Turn a mesh boundary loop (2D points) into exact prims: corners snapped to edge ends, arcs onto edge circles. */
function snapLoop(pts, zEnds, zCirc, tol) {
  const n = pts.length;
  const corner = pts.map((p) => { let best = null, bd = tol; for (const q of zEnds) { const d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < bd) { bd = d; best = [q[0], q[1]]; } } return best; });
  const ci = [];
  for (let i = 0; i < n; i++) if (corner[i]) ci.push(i);
  const onC = (p, c) => Math.abs(Math.hypot(p[0] - c.c[0], p[1] - c.c[1]) - c.r) < tol;
  if (!ci.length) {
    // no exact vertex (should not happen with OCCT edges): keep the polyline
    return pts.map((p, i) => O.line(p, pts[(i + 1) % n]));
  }
  const out = [];
  for (let k = 0; k < ci.length; k++) {
    const i = ci[k], j = ci[(k + 1) % ci.length];
    const span = j > i ? j - i : j + n - i;
    const mids = [];
    for (let s = 1; s < span; s++) mids.push(pts[(i + s) % n]);
    const s = corner[i], e = corner[j];
    let cand = null;
    if (mids.length) cand = zCirc.find((c) => onC(s, c) && onC(e, c) && mids.every((p) => onC(p, c)));
    else cand = zCirc.find((c) => O.dist(s, e) > tol && ((O.dist(c.a, s) < tol && O.dist(c.b, e) < tol) || (O.dist(c.a, e) < tol && O.dist(c.b, s) < tol)) && Math.abs(crossDist(c.at, s, e)) > tol);
    if (cand) {
      const m = mids.length ? mids[Math.floor(mids.length / 2)] : [cand.at[0], cand.at[1]];
      out.push(arcThrough(cand.c, cand.r, s, m, e));
    } else if (mids.length && !mids.every((p) => Math.abs(crossDist(p, s, e)) < tol)) {
      // a free-form edge: the mesh polyline (chord tolerance = the display mesh's)
      let prev = s;
      for (const p of mids) { out.push(O.line(prev, p)); prev = p; }
      out.push(O.line(prev, e));
    } else if (O.dist(s, e) > 1e-12) out.push(O.line(s, e));
  }
  // join exactly
  for (let k = 0; k < out.length; k++) {
    const p = out[k], q = out[(k + 1) % out.length];
    if (p.e !== q.s) out[(k + 1) % out.length] = q.k === 'L' ? O.line(p.e, q.e) : O.arc(q.c, q.r, q.a0, q.sw, p.e, q === p ? p.e : q.e);
  }
  return out;
}
function crossDist(p, a, b) {
  const l = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (l < 1e-15) return Math.hypot(p[0] - a[0], p[1] - a[1]);
  return ((b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])) / l;
}
/** Order and orient prims into one closed loop (prims may come in any direction). */
function chainOpen(prims, tol) {
  if (prims.length === 1) return O.dist(prims[0].s, prims[0].e) < tol ? [prims[0]] : null;
  const left = prims.slice(1), loop = [prims[0]];
  while (left.length) {
    const end = loop[loop.length - 1].e;
    let k = left.findIndex((p) => O.dist(p.s, end) < tol), rev = false;
    if (k < 0) { k = left.findIndex((p) => O.dist(p.e, end) < tol); rev = true; }
    if (k < 0) {
      if (loop.length === 1) { loop[0] = O.reversePrim(loop[0]); continue; }
      return null;
    }
    const p = left.splice(k, 1)[0];
    loop.push(rev ? O.reversePrim(p) : p);
  }
  if (O.dist(loop[loop.length - 1].e, loop[0].s) > tol) return null;
  for (let k = 0; k < loop.length; k++) {
    const p = loop[k], q = loop[(k + 1) % loop.length];
    if (p.e !== q.s) loop[(k + 1) % loop.length] = q.k === 'L' ? O.line(p.e, q.e) : O.arc(q.c, q.r, q.a0, q.sw, p.e, q.e);
  }
  return loop;
}

/** The stock's outline in the work XY plane, as a region (counter-clockwise). */
export function stockLoop(model, grow = 0) {
  const s = model.stock;
  if (s.kind === 'cylinder') return [O.circle(s.c, s.r + grow)];
  const x0 = s.min[0] - grow, y0 = s.min[1] - grow, x1 = s.max[0] + grow, y1 = s.max[1] + grow;
  return [O.line([x0, y0], [x1, y0]), O.line([x1, y0], [x1, y1]), O.line([x1, y1], [x0, y1]), O.line([x0, y1], [x0, y0])];
}
