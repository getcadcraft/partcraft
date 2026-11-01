/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ws-simulation.js — the Simulation workspace: linear static stress and natural frequencies of the part on a
 * voxel mesh of 8-node hexahedra (fea.js, mg.js, voxel.js; method and limits there and in the panel). The study
 * lives in `part.studies.simulation` (sim.js readSimStudy); solving runs in a compute worker (sim-worker.js:
 * simSolve) with progress and Stop; results stay on the page (not in the file) and plot as colours on the part
 * on a plot mesh (the part's mesh split finer, drawn over the part; deformed: displaced, the part hidden) with a
 * legend, a hover probe and a table. Mesh = Tetrahedral (default for new studies: tetmesh.js / tetfea.js quadratic tets,
 * solved by tet-worker.js tetSolve; the plot mesh is the tet mesh's own surface, with a "Show mesh" overlay) or Voxel.
 * Top level is DOM-free (Node imports it); the page is touched only in the hooks, through `host`.
 */
import { registerWorkspace } from './workspaces.js';
import { registerStudyReader } from './part.js';
import { newSimStudy, readSimStudy, simJob, MATERIALS, materialOf, autoSize, AUTO_ELEMENTS, LIMITS, mesherOf, tetAutoSize } from './sim.js';
import { readEnv, newEnv, PRESETS, PRESET_IDS } from './env/env.js';
import { estimate } from './voxel.js';
import { threadWords } from './pool.js';
import * as U from './sim-ui.js';
import * as TH from './sim-thermal-ui.js';   // thermal, thermal stress, buckling
import * as FU from './flow-ui.js';   // flow (laminar CFD): withFlow() runs the hooks while the study's kind is 'flow'
import * as AU from './sim-adapt-ui.js';   // tets: automatic refinement fields and convergence results, exact-surface row
import * as NU from './nlstudy-ui.js';   // 0.8 SU.891 (part_PART_3): kinds nonlinear + contact, the CalculiX deck and its results
import { exactWhy } from './exact-client.js';
import { readStudy as readDesignStudy } from './study/study.js';
import * as DZ from './study-ui.js';   // 0.8 EG.33: design studies
import * as BR from './break-ui.js';   // 0.8 EG.31: Break it
import { createLive } from './study/live.js';   // 0.8 EG.29: live analysis while you edit
import { t } from './i18n.js';

registerStudyReader('simulation', (raw) => readSimStudy(raw));
registerStudyReader('design', (raw) => readDesignStudy(raw));   // EG.33: the design study (variants, metrics, limits, the pick)
registerStudyReader('environment', (raw) => readEnv(raw));   // EG.32: where the design lives (env/env.js); every solver reads it

const KEY = 'simulation';
const ctx = U.makeCtx(KEY, newSimStudy, readSimStudy);
ctx.onEdit = (host) => liveNudge(host);   // sim-ui.js edit(): a changed study restarts the live analysis
const S = { result: null, resultMesh: null, busy: false, progress: 0, worker: null, live: false, liveCtl: null, liveWorkers: {}, liveBusy: false, quality: null, qualityH: null, plot: 'vm', deformed: false, scale: null, mode: 0, error: null, problems: [], progressEl: null, probeEl: null, req: 0, showMesh: false };
const study = (host) => host.study(KEY);
const fresh = (host) => !!(S.result && host.regen && S.resultMesh === host.regen.mesh);

/** Where the design lives: a preset or typed numbers. "Not set" removes it (the old 9.81 m/s² and per-condition temperatures). */
function envBlock(host, K, el) {
  const env = host.study('environment') || null;
  const put = (v) => { const r = host.setStudy('environment', v, t('env.undo')) || host.renderPanel(); liveNudge(host); return r; };
  const names = { earth: t('env.earth'), moon: t('env.moon'), mars: t('env.mars'), orbit: t('env.orbit'), custom: t('env.custom') };
  const b = el('div', { className: 'pc-block', dataset: { simEnv: '1' } }, el('p', { className: 'pc-props-sub' }, t('env.title')));
  b.append(...K.field(t('env.world'), K.sel([['none', t('env.none')], ...PRESET_IDS.map((id) => [id, names[id]])], env ? env.preset : 'none',
    (v) => put(v === 'none' ? null : v === 'custom' ? { ...(env || newEnv('earth')), preset: 'custom' } : newEnv(v)), { simEnvPreset: '1' })));
  if (env) {
    const edit = (key, v) => { try { put(readEnv({ ...env, preset: env.preset === 'custom' ? 'custom' : env.preset, [key]: v })); } catch (e) { host.status(e.message); } };
    b.append(...K.field(t('env.g'), K.num(env.g, (v) => edit('g', v), { min: 0, max: 1000, data: { simEnvG: '1' } })),
      ...K.field(t('env.pressure'), K.num(env.pressure, (v) => edit('pressure', v), { min: 0, max: 1e9, data: { simEnvP: '1' } })),
      ...K.field(t('env.temperature'), K.num(env.temperature, (v) => edit('temperature', v), { min: -273.15, max: 1e4, data: { simEnvT: '1' } })));
    if (PRESETS[env.preset]) b.append(el('p', { className: 'pc-note' }, t('env.source', { source: PRESETS[env.preset].source })));
  }
  return b;
}

// ---------------------------------------------------------------- solving

/** One variant's solve for a design study: a worker from a small pool (two at a time), the same op the Solve button would use. */
const DZ_POOL = [];
function dzSolver(host, st) {
  const op = opOf(st);
  return async (job) => {
    const w = DZ_POOL.pop() || host.computeWorker(['sim-worker.js', 'thermal-worker.js', 'tet-worker.js', ...NU.worker()], { name: 'PartCraft design study', threads: true });
    const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer);
    try { return await w.call(op, job, { transfer: tr }); } finally { DZ_POOL.push(w); }
  };
}

const opOf = (st) => NU.op(st) || (mesherOf(st) === 'tet' && TH.opFor(st) !== 'thermoHistorySolve' ? 'tetSolve' : TH.opFor(st));

// ---------------------------------------------------------------- live analysis (EG.29)
// While the Live switch is on, a change to the part or the study starts a coarse solve (elements LIVE_COARSE × the study's size) at once and
// a refined one (the study's own size) after a quiet moment; study/live.js decides which result may be shown. A superseded solve's worker is
// terminated, so a stale answer stops costing time. Live is a view setting: it is not saved in the part.
const LIVE_COARSE = 4, LIVE_QUIET = 700, LIVE_KINDS = ['static', 'modal', 'thermal', 'buckling'];
const liveOk = (st) => !!st && LIVE_KINDS.includes(st.kind);
function liveStop(host) {
  if (S.liveCtl) S.liveCtl.stop();
  for (const q of Object.keys(S.liveWorkers)) { try { S.liveWorkers[q].terminate(); } catch (e) { /* already gone */ } }
  S.liveWorkers = {}; S.liveBusy = false;
}
function liveWorker(host, quality) {
  return (S.liveWorkers[quality] = S.liveWorkers[quality] || host.computeWorker(['sim-worker.js', 'thermal-worker.js', 'tet-worker.js', ...NU.worker()], { name: 'PartCraft live analysis', threads: quality === 'refined' }));
}
/** The element size a level uses: the study's own (or the automatic one), times the level's factor. Adaptive refinement is for the refined level only. */
export function liveStudy(st, regen, factor) {
  const tet = mesherOf(st) === 'tet', vol = regen.stats.volume;
  const base = st.h || (tet ? tetAutoSize(vol) : autoSize(vol, AUTO_ELEMENTS.simulation));
  return { ...st, h: base * factor, ...(factor > 1 ? { adaptive: null } : {}) };
}
function liveController(host) {
  return createLive({
    quiet: LIVE_QUIET, coarseFactor: LIVE_COARSE,
    solve: async ({ regen, st, env }, c) => {
      if (c.quality === 'refined' && S.liveWorkers.coarse) { try { S.liveWorkers.coarse.terminate(); } catch (e) { /* gone */ } delete S.liveWorkers.coarse; }
      const ls = liveStudy(st, regen, c.factor);
      const { job, problems } = simJob(ls, regen, { env });
      if (!job || problems.length) throw new Error(problems[0] || t('study.ws.nothing'));
      const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer);
      S.liveBusy = true;
      const r = await liveWorker(host, c.quality).call(opOf(ls), job, { transfer: tr });
      return { r, h: ls.h, regen };
    },
    onResult: ({ quality, result }) => {
      S.liveBusy = false;
      const { r, h, regen } = result;
      S.result = r; S.resultMesh = regen.mesh; S.mode = Math.min(S.mode, (r.freqs || [0]).length - 1); S.scale = null; S.error = null;
      S.quality = quality; S.qualityH = h;
      if (TH.handles(r)) TH.afterSolve(r, S);
      host.status(t(quality === 'coarse' ? 'live.status.coarse' : 'live.status.refined', { h: U.sig(h) }));
      plot(host); host.renderPanel();
    },
    onError: ({ error }) => { S.liveBusy = false; S.error = error && error.message ? error.message : String(error); host.status(t('study.ws.failed', { msg: S.error }), true); host.renderPanel(); },
  });
}
/** The part or the study changed: when Live is on and the study can be solved, start over. */
function liveChange(host) {
  if (!S.live || !S.liveCtl) return;
  const st = study(host);
  if (!liveOk(st) || !host.regen) return;
  const { problems } = simJob(st, host.regen, { check: true });
  if (problems.length) { S.liveCtl.stop(); host.status(problems[0]); return; }   // nothing to solve yet: the panel shows why
  for (const q of Object.keys(S.liveWorkers)) { try { S.liveWorkers[q].terminate(); } catch (e) { /* gone */ } }
  S.liveWorkers = {};
  S.liveCtl.change({ regen: host.regen, st, env: host.study('environment') || null });
}
const liveNudge = (host) => { if (S.live) liveChange(host); };
function setLive(host, on) {
  if (on === S.live) return;
  S.live = on;
  if (on) { S.req++; S.liveCtl = S.liveCtl || liveController(host); S.busy = false; liveChange(host); }
  else { liveStop(host); S.liveCtl = null; host.status(t('live.off')); }
  host.renderPanel();
}

/** Break it: tets only, so one op for the yield and the buckling solve; two at a time are never needed, one pooled worker. */
function breakSolver(host) {
  return async (job) => {
    const w = DZ_POOL.pop() || host.computeWorker(['sim-worker.js', 'thermal-worker.js', 'tet-worker.js'], { name: 'PartCraft design study', threads: true });
    const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer);
    try { return await w.call('tetSolve', job, { transfer: tr }); } finally { DZ_POOL.push(w); }
  };
}

async function solve(host) {
  const st = study(host);
  if (!st) { host.status(t('study.ws.start_first')); return; }
  if (S.busy) return;
  const { job, problems } = simJob(st, host.regen, { env: host.study('environment') || null });
  S.problems = problems;
  if (!job || problems.length) { host.status(problems[0] || t('study.ws.nothing')); host.renderPanel(); return; }
  const id = ++S.req, mesh = host.regen.mesh;
  S.quality = null;
  S.busy = true; S.progress = 0; S.error = null; ctx.picking = false;
  host.renderPanel();
  host.status(st.kind === 'modal' ? t('study.ws.finding_modes') : t('study.ws.solving'), true);
  try {
    S.worker = S.worker || host.computeWorker(['sim-worker.js', 'thermal-worker.js', 'tet-worker.js', ...NU.worker()], { name: 'PartCraft simulation', threads: true });
    const tr = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) tr.push(job.mesh.triFace.buffer);
    const r = await S.worker.call(opOf(st), job, { transfer: tr, onProgress: (v) => { S.progress = v; if (S.progressEl) S.progressEl.textContent = progressText(); } });
    if (id !== S.req) return;
    S.result = r; S.resultMesh = mesh; S.mode = 0; S.scale = null; S.quality = null;
    if (TH.handles(r)) { TH.afterSolve(r, S); host.status(TH.statusText(r)); }
    else if (r.kind === 'modal') { S.deformed = true; host.status(t('study.ws.done_modal', { f: U.sig(r.freqs[0]), n: r.summary.elements.toLocaleString('en-US'), s: (r.ms / 1000).toFixed(1) })); }
    else if (r.nonlinear) host.status(NU.statusText(r), !r.nonlinear.converged);
    else host.status(t('study.ws.done_static', { vm: U.sig(r.maxVm.value), d: U.sig(r.maxDisp.value), sf: U.sig(r.minSafety), n: r.summary.elements.toLocaleString('en-US'), s: (r.ms / 1000).toFixed(1) }));
    if (r.adaptive) host.status(t('study.ws.done_adaptive', { message: r.adaptive.message, n: r.summary.elements.toLocaleString('en-US') }));
  } catch (e) {
    if (id !== S.req) return;
    const msg = e && e.message ? e.message : String(e);
    S.error = msg === 'Stopped.' ? null : msg;
    host.status(msg === 'Stopped.' ? t('study.ws.stopped') : t('study.ws.failed', { msg }), msg !== 'Stopped.');   // i18n-ignore: 'Stopped.' is the worker client's cancel message, compared
  } finally {
    if (id === S.req) { S.busy = false; plot(host); host.renderAll(); host.refreshProblems?.(); }
  }
}
function stop(host) {
  if (!S.busy) return;
  S.req++;
  if (S.worker) { S.worker.terminate(); S.worker = null; }
  S.busy = false;
  host.status(t('study.ws.stopped'));
  host.renderAll();
}
const progressText = () => t('study.ws.working', { n: Math.round(100 * S.progress) });

// ---------------------------------------------------------------- plots

function field(host) {
  const r = S.result;
  if (!r) return null;
  if (TH.handles(r)) return TH.field(r, S);
  if (r.kind === 'modal') {
    const u = r.shapes[S.mode], nv = u.length / 3, mag = new Float32Array(nv);
    for (let v = 0; v < nv; v++) mag[v] = Math.hypot(u[3 * v], u[3 * v + 1], u[3 * v + 2]);
    return { values: mag, lo: 0, hi: 1, unit: t('study.ws.unit_relative'), title: t('study.ws.mode_shape', { n: S.mode + 1, f: U.sig(r.freqs[S.mode]) }), u, rev: false };
  }
  const v = r.vertex;
  const nf = NU.field(r, S.plot, range); if (nf) return nf;   // plastic strain; CalculiX results without stresses
  if (S.plot === 's1' && v.s1) return range(v.s1, 'MPa', t('study.ws.plot.s1'), v.u);
  if (S.plot === 's3' && v.s3) return range(v.s3, 'MPa', t('study.ws.plot.s3'), v.u);
  if (S.plot === 'strain' && v.strain) return range(v.strain, 'mm/mm', t('study.ws.plot.strain_vm'), v.u);
  if (S.plot === 'disp') { let hi = 0; for (const x of v.disp) hi = Math.max(hi, x); return { values: v.disp, lo: 0, hi: hi || 1, unit: 'mm', title: t('study.ws.plot.disp'), u: v.u }; }
  if (S.plot === 'safety') {
    const y = r.material.yield, sf = Float32Array.from(v.vm, (s) => (s > 0 ? Math.min(y / s, 100) : 100));
    return { values: sf, lo: 0, hi: 5, unit: t('study.ws.unit_safety', { y: U.sig(y) }), title: t('study.ws.plot.safety'), u: v.u, rev: true };
  }
  return { values: v.vm, lo: 0, hi: r.maxVm.value || 1, unit: 'MPa', title: t('study.ws.plot.vm'), u: v.u };
}
const range = (values, unit, title, u) => { let lo = Infinity, hi = -Infinity; for (const x of values) { if (x < lo) lo = x; if (x > hi) hi = x; } if (!(hi > lo)) hi = lo + 1; return { values, lo, hi, unit, title, u }; };
function autoScale(host, f) {
  const rg = host.regen, bb = rg.stats.bbox, diag = Math.hypot(bb.max[0] - bb.min[0], bb.max[1] - bb.min[1], bb.max[2] - bb.min[2]);
  let m = 0; for (let i = 0; i < f.u.length; i += 3) m = Math.max(m, Math.hypot(f.u[i], f.u[i + 1], f.u[i + 2]));
  if (!(m > 0)) return 1;
  const raw = 0.08 * diag / m, e = Math.floor(Math.log10(raw)), b = raw / 10 ** e;
  return +(([1, 2, 5, 10].find((s) => s >= b) || 10) * 10 ** e).toPrecision(2);
}
function plot(host) {
  const { view, THREE } = host;
  view.setOverlay('simulation-plot', null);
  view.setOverlay('simulation-mesh', null);
  if (!fresh(host)) { view.setPartVisible(true); return; }
  const f = field(host), mesh = S.result.plotMesh;
  const col = U.colorsFor(f.values, f.lo, f.hi, f.rev);
  const def = S.deformed && !!f.u;   // a thermal plot has no displacement
  if (def && S.scale === null) S.scale = autoScale(host, f);
  const P = mesh.positions, pos = def ? new Float32Array(P.length) : Float32Array.from(P);
  if (def) for (let i = 0; i < P.length; i++) pos[i] = P[i] + S.scale * f.u[i];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
  geo.computeVertexNormals();
  // undeformed: drawn over the part (which stays visible and pickable, with its edges); deformed: the part hidden
  const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
  m.userData.simPlot = def ? 'deformed' : 'plot';
  view.setPartVisible(!def);
  view.setOverlay('simulation-plot', m);
  // the tet mesh's element edges over the plot (moved with it when deformed)
  view.setOverlay('simulation-mesh', null);
  if (S.showMesh && mesh.lines) {
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    lg.setIndex(new THREE.BufferAttribute(mesh.lines, 1));
    const ls = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x1b2430, transparent: true, opacity: 0.55, depthTest: true }));
    ls.renderOrder = 12; ls.userData.simMesh = 'lines';
    view.setOverlay('simulation-mesh', ls);
  }
}

/** The result under the pointer: a ray on the plot overlay, the value interpolated in its triangle. */
function probe(host, ev) {
  if (!S.probeEl || !fresh(host) || !ev) return;
  const ov = host.view.overlays && host.view.overlays.get('simulation-plot');
  const h = ov ? host.view.ray(ev.clientX, ev.clientY).intersectObject(ov, false)[0] : null;
  if (!h) { S.probeEl.textContent = t('study.ws.probe_hint'); return; }
  const mesh = S.result.plotMesh, tri = h.faceIndex, g = ov.geometry.attributes.position, I = mesh.indices, P = mesh.positions;
  const a = [0, 1, 2].map((k) => I[3 * tri + k]);
  const w = bary(a.map((i) => [g.getX(i), g.getY(i), g.getZ(i)]), h.point.toArray());
  const val = (arr) => w[0] * arr[a[0]] + w[1] * arr[a[1]] + w[2] * arr[a[2]];
  const p = [0, 1, 2].map((c) => w[0] * P[3 * a[0] + c] + w[1] * P[3 * a[1] + c] + w[2] * P[3 * a[2] + c]);
  const r = S.result, at = t('study.ws.probe_at', { xyz: p.map((v) => U.fmt(v, 2)).join(', ') });
  if (TH.handles(r)) { S.probeEl.textContent = TH.probeText(r, S, val, at); return; }
  if (r.kind === 'modal') { S.probeEl.textContent = t('study.ws.probe_modal', { a: U.fmt(val(field(host).values), 3), at }); return; }
  const vm = val(r.vertex.vm), d = val(r.vertex.disp);
  const sf = vm > 0 ? U.sig(r.material.yield / vm) : t('study.ws.over_100');
  S.probeEl.textContent = r.vertex.s1 ? t('study.ws.probe_static_principal', { vm: U.sig(vm), s1: U.sig(val(r.vertex.s1)), s3: U.sig(val(r.vertex.s3)), e: U.sig(val(r.vertex.strain)), d: U.sig(d), sf, at })
    : t('study.ws.probe_static', { vm: U.sig(vm), d: U.sig(d), sf, at });
}
function bary(a, p) {
  const e0 = a[1].map((c, k) => c - a[0][k]), e1 = a[2].map((c, k) => c - a[0][k]), e2 = p.map((c, k) => c - a[0][k]);
  const dot = (x, y) => x[0] * y[0] + x[1] * y[1] + x[2] * y[2];
  const d00 = dot(e0, e0), d01 = dot(e0, e1), d11 = dot(e1, e1), d20 = dot(e2, e0), d21 = dot(e2, e1), den = d00 * d11 - d01 * d01 || 1;
  const w1 = (d11 * d20 - d01 * d21) / den, w2 = (d00 * d21 - d01 * d20) / den;
  return [1 - w1 - w2, w1, w2];
}

// ---------------------------------------------------------------- panel

function renderPanel(host, box) {
  const { el } = host;
  const K = U.kit(host);
  const st = study(host);
  S.progressEl = null; S.probeEl = null;
  if (!st) {
    box.append(el('div', { className: 'pc-block' },
      el('p', { className: 'pc-note' }, t('study.ws.intro')),
      el('div', { className: 'pc-actions' }, K.btn(t('study.ws.new_study'), () => { U.edit(host, ctx, t('study.ws.new_study_undo'), () => {}); host.renderPanel(); }, 'pc-btn is-primary', { dataset: { simNew: '1' } }))));
    U.marks(host, ctx);
    return t('study.ws.heading');
  }
  const rg = host.regen, mat = materialOf(st.material);
  const set = (label, fn) => U.edit(host, ctx, label, fn);
  const g = el('div', { className: 'pc-props' },
    el('p', { className: 'pc-props-sub' }, t('study.ws.study')),
    ...K.field(t('study.ui.type'), K.sel([...FU.KINDS, ...NU.KINDS], st.kind, (v) => set(t('study.ws.study_type'), (s) => { s.kind = v; NU.ensure(s); }), { simKind: '1' })),
    ...K.field(t('study.ws.material'), K.sel([...MATERIALS.map((m) => [m.id, m.name]), ...(typeof st.material === 'object' ? [['custom', st.material.name]] : [])], typeof st.material === 'string' ? st.material : 'custom', (v) => { if (v !== 'custom') set(t('study.ws.material'), (s) => { s.material = v; }); }, { simMaterial: '1' })),
    el('span', { className: 'k' }, t('study.ws.properties')), el('span', { className: 'v' }, ['thermal', 'static', 'buckling'].includes(st.kind) ? t('study.ws.props_thermal', { E: U.sig(mat.E / 1000), nu: mat.nu, density: mat.density, yield: mat.yield, thermal: TH.thermalProps(mat) }) : t('study.ws.props', { E: U.sig(mat.E / 1000), nu: mat.nu, density: mat.density, yield: mat.yield })));
  TH.studyFields(host, K, st, set, g);
  NU.studyFields(host, K, st, set, g);
  if (st.kind === 'modal' || st.kind === 'buckling') g.append(...K.field(st.kind === 'buckling' ? t('study.ws.load_factors') : t('study.ws.modes'), K.num(st.modes, (v) => { if (!Number.isInteger(v)) { host.status(t('study.ws.whole_modes')); return; } set(t('study.ws.modes'), (s) => { s.modes = v; }); }, { min: 1, max: 10 })));
  const tet = mesherOf(st) === 'tet';
  if (st.kind !== 'flow') g.append(...K.field(t('study.ws.mesh'), K.sel([['tet', t('study.ws.mesher_tet')], ['voxel', t('study.ws.mesher_voxel')]], tet ? 'tet' : 'voxel', (v) => set(t('study.ws.mesh_type'), (s) => { s.mesher = v; }), { simMesher: '1' })));
  const autoH = rg && rg.stats ? (tet ? tetAutoSize(rg.stats.volume) : autoSize(rg.stats.volume, AUTO_ELEMENTS.simulation)) : null;
  g.append(...K.field(t('study.ws.element_size_mm'), K.num(st.h, (v) => set(t('study.ws.element_size'), (s) => { s.h = v; }), { min: 0.01, max: 1000, nullable: true, data: { simSize: '1' } })));
  const h = st.h || autoH;
  if (tet && rg && rg.stats && h) {
    const n = Math.round(12 * rg.stats.volume / h ** 3), over = n > LIMITS.tetElements;
    g.append(el('span', { className: 'k' }, t('study.ws.mesh_size')), el('span', { className: 'v' + (over ? ' is-bad' : ''), dataset: { simEstimate: String(n) } }, meshEst(st.h ? null : h, t('study.ws.est_tet', { n: n.toLocaleString('en-US') }), over ? LIMITS.tetElements : null)));
    g.append(K.check(t('study.ws.refine_curved'), st.refineCurved !== false, (v) => set(t('study.ws.refine_curved_undo'), (s) => { s.refineCurved = v; }), { dataset: { simRefineCurved: '1' } }));
    AU.fields(host, K, st, set, g);
  }
  if (!tet && rg && rg.stats && h) {
    const e = estimate(rg.stats.volume, rg.stats.bbox, h);
    const over = e.elements > LIMITS.simElements;
    g.append(el('span', { className: 'k' }, t('study.ws.mesh')), el('span', { className: 'v' + (over ? ' is-bad' : ''), dataset: { simEstimate: String(e.elements) } }, meshEst(st.h ? null : h, t('study.ws.est_voxel', { n: e.elements.toLocaleString('en-US'), mem: U.memText(e.bytes) }), over ? LIMITS.simElements : null)));
  }
  if (!tet) g.append(...K.field(t('study.ws.element'), K.sel([['h8i', t('study.ws.elem_h8i')], ['h8', t('study.ws.elem_h8')]], st.elem, (v) => set(t('study.ws.element_type'), (s) => { s.elem = v; }))));
  else g.append(el('span', { className: 'k' }, t('study.ws.element')), el('span', { className: 'v' }, t('study.ws.elem_tet10')));
  box.append(el('div', { className: 'pc-block' }, g));
  // EG.32: the environment (gravity, ambient pressure, ambient temperature) every solver reads; saved in the part (studies.environment)
  box.append(envBlock(host, K, el));
  // supports and loads
  const addOpts = [...TH.addOptions(st), ...NU.addOptions(st)];
  let addType = addOpts[0][0];
  box.append(el('div', { className: 'pc-block' }, el('div', { className: 'pc-actions' },
    K.sel(addOpts, addType, (v) => { addType = v; }, { simAddType: '1' }),
    K.btn(t('study.ws.add'), () => U.addItem(host, ctx, NU.kindOfType(addType) || TH.kindOfType(addType), addType), 'pc-btn', { dataset: { simAdd: '1' } }))));
  U.renderItems(host, ctx, box, K, [...TH.itemKinds(st), ...NU.itemKinds(st)]);
  // solve
  const sb = el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub' }, t('study.ws.solve')));
  const { problems } = simJob(st, rg, { check: true });
  for (const p of S.busy ? [] : problems) sb.append(el('div', { className: 'pc-msg' }, el('p', {}, p)));
  if (S.error) sb.append(el('div', { className: 'pc-msg is-error' }, el('p', {}, S.error)));
  sb.append(el('div', { className: 'pc-actions' },
    K.btn(t('study.ws.solve'), () => solve(host), 'pc-btn is-primary', { disabled: S.busy || problems.length > 0, dataset: { simSolve: '1' } }),
    K.btn(t('study.ws.stop'), () => stop(host), 'pc-btn', { disabled: !S.busy, dataset: { simStop: '1' } })));
  if (S.busy) { S.progressEl = el('p', { className: 'pc-note', dataset: { simProgress: '1' }, role: 'status' }, progressText()); sb.append(S.progressEl); }
  if (liveOk(st)) {   // EG.29
    sb.append(K.check(t('live.switch'), S.live, (v) => setLive(host, v), { dataset: { simLive: '1' } }));
    if (S.live) sb.append(el('p', { className: 'pc-note', dataset: { simLiveNote: S.quality || (S.liveBusy ? 'solving' : 'waiting') }, role: 'status' },
      S.quality ? t(S.quality === 'coarse' ? 'live.state.coarse' : 'live.state.refined', { h: U.sig(S.qualityH) }) : t(S.liveBusy ? 'live.state.solving' : 'live.state.waiting')));
    else sb.append(el('p', { className: 'pc-note' }, t('live.note', { n: LIVE_COARSE })));
  }
  box.append(sb);
  box.append(NU.ccxBlock(host, K, el, st));   // SU.891: a CalculiX deck out, its results back
  if (st.kind === 'static' || st.kind === 'buckling') box.append(BR.block(host, K, el, st, breakSolver(host)));   // EG.31
  box.append(DZ.block(host, K, el, st, () => dzSolver(host, st)));   // EG.33
  if (S.result) renderResults(host, box, K);
  if (tet) box.append(el('div', { className: 'pc-block' }, el('p', { className: 'pc-note', dataset: { simMethodTet: '1' } }, t('study.ws.tet_note') + (TH.methodNote(st) ? ' ' + TH.methodNote(st) : ' ' + t('study.ws.reactions_balance') + TH.staticNote(st)) + ' ' + t('study.ws.lab_check'))));
  else box.append(el('div', { className: 'pc-block' }, el('p', { className: 'pc-note' }, TH.methodNote(st) || t('study.ws.voxel_note') + ' ' + t('study.ws.reactions_balance') + TH.staticNote(st) + ' ' + t('study.ws.lab_check'))));
  U.marks(host, ctx);
  return t('study.ws.heading');
}

/** A mesh estimate: `text` (about n …), prefixed when the size is automatic (autoH mm) and warned when over `max` elements. */
function meshEst(autoH, text, max) {
  const s = autoH === null ? text : t('study.ws.est_auto', { h: U.fmt(autoH), text });
  return max === null ? s : t('study.ws.est_over', { text: s, max: max.toLocaleString('en-US') });
}
function renderResults(host, box, K) {
  const { el } = host;
  const r = S.result, ok = fresh(host);
  const b = el('div', { className: 'pc-block', dataset: { simResults: '1' } }, el('p', { className: 'pc-props-sub' }, t('study.ws.results')));
  if (!ok) { b.append(el('div', { className: 'pc-msg' }, el('p', {}, t('study.ws.stale')))); box.append(b); return; }
  if (S.quality) b.append(el('p', { className: 'pc-note', dataset: { simLiveQuality: S.quality } }, t(S.quality === 'coarse' ? 'live.result.coarse' : 'live.result.refined', { h: U.sig(S.qualityH) })));
  if (TH.handles(r)) { TH.renderResults(host, b, K, r, S, { plot: () => plot(host), autoScale: (f) => autoScale(host, f), study: study(host) }); AU.results(host, b, r); box.append(b); return; }
  const f = field(host);
  const ctl = el('div', { className: 'pc-props' });
  if (r.kind === 'static') ctl.append(...K.field(t('study.ws.show'), K.sel([['vm', t('study.ws.plot.vm')], ...(r.vertex.s1 ? [['s1', t('study.ws.plot.s1')], ['s3', t('study.ws.plot.s3')], ['strain', t('study.ws.plot.strain')]] : []), ...NU.plotOptions(r), ['disp', t('study.ws.plot.disp')], ['safety', t('study.ws.plot.safety')]], S.plot, (v) => { S.plot = v; plot(host); host.renderPanel(); }, { simPlot: '1' })));
  else ctl.append(...K.field(t('study.ws.mode'), K.sel(r.freqs.map((fq, i) => [String(i), t('study.ws.mode_option', { n: i + 1, f: U.sig(fq) })]), String(S.mode), (v) => { S.mode = Number(v); S.scale = null; plot(host); host.renderPanel(); }, { simMode: '1' })));
  if (r.history) TH.historyControls(host, ctl, r, S, () => plot(host));   // a transient thermal load: time slider + peak chart
  ctl.append(K.check(t('study.ws.deformed'), S.deformed, (v) => { S.deformed = v; plot(host); host.renderPanel(); }, { dataset: { simDeformed: '1' } }));
  if (r.plotMesh.lines) ctl.append(K.check(t('study.ws.show_mesh'), S.showMesh, (v) => { S.showMesh = v; plot(host); }, { dataset: { simShowMesh: '1' } }));
  if (S.deformed) ctl.append(...K.field(t('study.ws.scale'), K.num(S.scale ?? autoScale(host, f), (v) => { S.scale = v; plot(host); }, { min: 0, max: 1e9, data: { simScale: '1' } })));
  b.append(ctl, U.legend(host, f));
  S.probeEl = el('p', { className: 'pc-note', dataset: { simProbe: '1' }, 'aria-live': 'polite' }, t('study.ws.probe_hint'));
  b.append(S.probeEl);
  const dl = el('dl', { className: 'pc-dl', dataset: { simTable: '1' } });
  const add = (k, v, data) => dl.append(el('dt', {}, k), el('dd', data ? { dataset: data } : {}, v));
  const s = r.summary, xyz = (p) => `(${p.map((v) => U.fmt(v, 2)).join(', ')})`;
  if (r.kind === 'static') {
    add(t('study.ws.row.max_vm'), t('study.ws.row.mpa_at', { v: U.sig(r.maxVm.value), at: xyz(r.maxVm.at) }), { simMaxVm: String(r.maxVm.value) });
    // i18n-ignore: a number and its unit
    add(s.mesher === 'tet' ? t('study.ws.row.max_elem_tet') : t('study.ws.row.max_elem_voxel'), `${U.sig(r.maxVmElem.value)} MPa`);
    add(t('study.ws.row.max_disp'), t('study.ws.row.mm_at', { v: U.sig(r.maxDisp.value), at: xyz(r.maxDisp.at) }), { simMaxDisp: String(r.maxDisp.value) });
    add(t('study.ws.row.min_safety'), t('study.ws.row.safety_value', { v: U.sig(r.minSafety), y: r.material.yield }), { simSafety: String(r.minSafety) });
    add(t('study.ws.row.applied'), `${r.loadTotal.map((v) => U.sig(v)).join(', ')} N`);
    add(t('study.ws.row.reactions'), `${r.reaction.map((v) => U.sig(v)).join(', ')} N`, { simReaction: r.reaction.join(',') });
    const st = study(host);
    (r.groupReactions || []).forEach((g, i) => { const c = st.constraints[i]; if (c) add(`  ${U.itemName('constraints', c)}`, `${g.map((v) => U.sig(v)).join(', ')} N`); });
    TH.staticRows(r, add);
    NU.rows(r, add);
    if (r.vertex.s1) add(t('study.ws.row.principal_range'), t('study.ws.row.mpa_range', { lo: U.sig(r.minS3), hi: U.sig(r.maxS1) }));
    if (r.errorPct !== undefined) add(t('study.ws.row.error'), t('study.ws.row.error_value', { v: U.sig(r.errorPct) }), { simErrorPct: String(r.errorPct) });
    add(t('study.ws.row.solver'), r.threads ? t('study.ws.row.solver_threads', { n: r.iterations, res: r.residual.toExponential(1), s: (r.ms / 1000).toFixed(1), threads: threadWords(r.threads, s.mesher === 'tet' ? t('study.ws.tet_one_thread') : '') }) : t('study.ws.row.solver_value', { n: r.iterations, res: r.residual.toExponential(1), s: (r.ms / 1000).toFixed(1) }), { simThreads: String(r.threads ? r.threads.used : 1) });
  } else {
    // i18n-ignore: a number and its unit
    r.freqs.forEach((fq, i) => add(t('study.ws.row.mode_n', { n: i + 1 }), `${U.sig(fq)} Hz`, i === 0 ? { simF1: String(fq) } : null));
    add(t('study.ws.row.time'), r.threads ? t('study.ws.row.time_threads', { s: (r.ms / 1000).toFixed(1), threads: threadWords(r.threads, s.mesher === 'tet' ? t('study.ws.tet_one_thread') : '') }) : `${(r.ms / 1000).toFixed(1)} s`, { simThreads: String(r.threads ? r.threads.used : 1) });
  }
  add(t('study.ws.mesh'), t('study.ws.row.mesh_value', { mesh: U.meshWords(s), n: s.dofs.toLocaleString('en-US') }));
  if (s.quality) add(t('study.ws.row.quality'), t('study.ws.row.quality_value', { lo: U.fmt(s.quality.minDihedral, 1), hi: U.fmt(s.quality.maxDihedral, 1), aspect: U.fmt(s.quality.maxAspect, 2), mean: U.fmt(s.quality.meanAspect, 2) }), { simQuality: String(s.quality.minDihedral) });
  add(t('study.ws.row.volume_mass'), t('study.ws.row.volume_mass_value', { v: U.sig(s.volume), g: U.sig(s.mass * 1000), exact: U.sig(host.regen.stats.volume) }));
  AU.exactRow(s, add);
  b.append(dl);
  AU.results(host, b, r);
  if (r.kind === 'static') b.append(el('p', { className: 'pc-note' }, s.mesher === 'tet' ? t('study.ws.note_static_tet') : t('study.ws.note_static_voxel')));
  else b.append(el('p', { className: 'pc-note' }, (s.mesher === 'tet' ? t('study.ws.note_modal_tet') : t('study.ws.note_modal_voxel')) + ' ' + t('study.ws.note_modal_shapes')));
  box.append(b);
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

lazyLabels(registerWorkspace(FU.withFlow({
  id: 'simulation',
  label: 'study.ws.heading',
  icon: 'activity',
  blurb: 'study.ws.reg.blurb',
  groups: [{ label: 'study.ws.study', items: [
    { cmd: 'simulation-fixed', icon: 'pin-angle', label: 'study.tb.fixed', title: 'study.ws.reg.fixed_title' },
    { cmd: 'simulation-force', icon: 'arrow-down', label: 'study.tb.force', title: 'study.ws.reg.force_title' },
    { cmd: 'simulation-pressure', icon: 'arrows-collapse', label: 'study.tb.pressure', title: 'study.ws.reg.pressure_title' },
    { cmd: 'simulation-solve', icon: 'play-fill', label: 'study.tb.solve', title: 'study.ws.reg.solve_title' },
  ] }],
  enter(host) {
    // onHover carries no pointer position; the deformed plot's probe needs one (its own raycast on the overlay)
    if (!S.onMove) S.onMove = (e) => { if (!ctx.picking) probe(host, e); };
    host.view.canvas.addEventListener('pointermove', S.onMove, { passive: true });
    U.drawMarkers(host, ctx, 'simulation'); plot(host);
  },
  exit(host) {
    if (S.onMove) host.view.canvas.removeEventListener('pointermove', S.onMove);
    S.req++;
    if (S.worker) { S.worker.terminate(); S.worker = null; }
    liveStop(host); S.live = false; S.liveCtl = null; BR.clear(host);
    S.busy = false; ctx.picking = false;
    host.view.setMarks(null);
  },
  command(cmd, host) {
    if (cmd === 'simulation-fixed') { U.addItem(host, ctx, 'constraints', 'fixed'); return true; }
    if (cmd === 'simulation-force') { U.addItem(host, ctx, 'loads', 'force'); return true; }
    if (cmd === 'simulation-pressure') { U.addItem(host, ctx, 'loads', 'pressure'); return true; }
    if (cmd === 'simulation-solve') { solve(host); return true; }
    return false;
  },
  renderPanel(host, box) { const h = renderPanel(host, box); U.drawMarkers(host, ctx, 'simulation'); return h; },
  onPick(hit, host) {
    if (ctx.picking) { if (NU.onPick(host, ctx, hit)) return; togglePick(host, hit); return; }
    if (hit && hit.kind === 'face' && !fresh(host)) host.status(t('study.ws.choose_item'));
  },
  onHover(hit, host) {
    if (ctx.picking) { U.hoverFace(host, hit); return; }
    host.view.setHover(null);
  },
  keydown(ev, host) {
    if (ev.key === 'Escape' && ctx.picking) { ctx.picking = false; host.status(t('study.ui.picking_done')); host.renderPanel(); return true; }
    return false;
  },
  toolState(cmd, host) {
    if (/^simulation-(fixed|force|pressure)$/.test(cmd) && !(host.regen?.exact || host.regen?.named)) return { ok: false, why: exactWhy(t('kernel.what.simulation'), t('study.ws.needs_exact')) };
    if (/^simulation-(fixed|force|pressure)$/.test(cmd) && study(host)?.kind === 'thermal') return { ok: false, why: t('study.ws.thermal_tools') };
    if (cmd === 'simulation-solve') {
      if (S.busy) return { ok: false, why: t('study.ws.solving_now') };
      const st = study(host);
      if (!st) return { ok: false, why: t('study.ws.start_first') };
      const { problems } = simJob(st, host.regen, { check: true });
      if (problems.length) return { ok: false, why: problems[0] };
    }
    return { ok: true };
  },
  rebuilt(host) { U.drawMarkers(host, ctx, 'simulation'); plot(host); liveChange(host); },
})));

function togglePick(host, hit) { U.togglePick(host, ctx, hit); }


/** SU.891: the shared Problems of the last nonlinear / contact result (partcraft.js hands them to the shell with the others). */
export const simProblemsNow = () => NU.problems(S.result);
NU.install(ctx, { show: (host, r) => { S.req++; S.result = r; S.resultMesh = host.regen.mesh; S.mode = 0; S.scale = null; S.quality = null; S.plot = r.calculix && !r.calculix.stress ? 'disp' : 'vm'; plot(host); host.renderAll(); } });
export const _state = S;   // tests
export const _ctx = ctx;
