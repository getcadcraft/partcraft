/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sim-thermal.js — the thermal and buckling parts of a Simulation study as plain data (DOM-free): reading them from a file
 * (untrusted), describing heat conditions, the problems that block a solve, and the job fields the worker needs.
 * sim.js calls these; it passes its own validators in (no import back, so the worker's module graph has no cycle).
 *
 * part.studies.simulation gains (all optional, so older files read unchanged):
 *   kind 'thermal' | 'buckling' (besides 'static' | 'modal'); buckling uses `modes` (1–10) for the number of load factors
 *   heat: [{id 'h<n>', type 'temperature' T °C | 'flux' q W/m² (into the part) | 'power' P W (into the part, shared by area) |
 *           'convection' h W/(m²·K), Tamb °C | 'radiation' eps 0–1, Tamb °C, faces:[FaceRef]}]
 *   thermal: { gen W/m³ (internal heat generation, whole part), transient bool, T0 °C, t s, steps 1–500, scheme 'euler'|'cn' }
 *   thermalLoad: { mode 'none'|'uniform'|'field'|'transient', dT K (uniform rise), Tref °C (stress-free temperature for 'field' and
 *     'transient') } — static and buckling studies: 'field' takes the steady temperatures of the study's heat conditions; 'transient'
 *     (round 5) the temperatures of a transient run of them (settings in `thermal`: T0, t, steps, scheme), with the optional
 *     at 'worst'|'time' (stress history over the run, default | one time; buckling: always one time), time s (default: the end),
 *     solves 2–51 (stress solves over the run, default 21) — at/time/solves present only when set, so older files read unchanged
 */
import { t } from './i18n.js';

export const THERMAL_KINDS = ['thermal', 'buckling'];
export const HEAT_TYPES = ['temperature', 'flux', 'power', 'convection', 'radiation'];
/** Each heat condition type's name (getters: the text is looked up when it is read, never at import — workers and Node tests load
 *  this module before their language catalog). */
export const HEAT_LABEL = Object.defineProperties({}, Object.fromEntries(['temperature', 'flux', 'power', 'convection', 'radiation']
  .map((k) => [k, { get: () => t('study.thermal.heat.' + k), enumerable: true }])));
export const T_MIN = -273.15;
export const LOAD_MODES = ['none', 'uniform', 'field', 'transient'];

export const newHeat = (id, type) => (
  type === 'temperature' ? { id, type, faces: [], T: 100 }
    : type === 'flux' ? { id, type, faces: [], q: 10000 }
      : type === 'power' ? { id, type, faces: [], P: 10 }
        : type === 'convection' ? { id, type, faces: [], h: 10, Tamb: 20 }
          : { id, type: 'radiation', faces: [], eps: 0.9, Tamb: 20 });
export const newThermal = () => ({ gen: 0, transient: false, T0: 20, t: 60, steps: 30, scheme: 'euler' });
export const newThermalLoad = () => ({ mode: 'none', dT: 50, Tref: 20 });

/** The optional thermal fields of a study from a file → { heat?, thermal?, thermalLoad? } (only those present), or throws.
 *  v: sim.js validators { faceRefs, id, num, items }. */
export function readThermalFields(raw, { faceRefs, id, num, items }) {
  const out = {};
  const temp = (v, what) => num(v, T_MIN, 1e4, what);
  if (raw.heat !== undefined) out.heat = items(raw.heat, (it) => {
    const base = { id: id(it.id), type: HEAT_TYPES.includes(it.type) ? it.type : bad(t('study.thermal.read.unknown_type')), faces: faceRefs(it.faces) };
    if (it.type === 'temperature') base.T = temp(it.T, t('study.thermal.what.temperature'));
    if (it.type === 'flux') base.q = num(it.q, -1e9, 1e9, t('study.thermal.what.heat_flux'));
    if (it.type === 'power') base.P = num(it.P, -1e7, 1e7, t('study.thermal.what.heat_power'));
    if (it.type === 'convection') { base.h = num(it.h, 0, 1e6, t('study.thermal.what.convection')); base.Tamb = it.Tamb === null ? null : temp(it.Tamb, t('study.thermal.what.ambient')); }   // null = the environment's temperature (env/env.js)
    if (it.type === 'radiation') { base.eps = num(it.eps, 0, 1, t('study.thermal.what.emissivity')); base.Tamb = it.Tamb === null ? null : temp(it.Tamb, t('study.thermal.what.surroundings')); }
    return base;
  });
  if (raw.thermal !== undefined) {
    const th = raw.thermal;
    if (!th || typeof th !== 'object' || Array.isArray(th)) bad(t('study.thermal.read.settings_bad'));
    out.thermal = {
      gen: num(th.gen ?? 0, -1e12, 1e12, t('study.thermal.what.gen')), transient: th.transient === true,
      T0: temp(th.T0 ?? 20, t('study.thermal.what.t0')), t: num(th.t ?? 60, 1e-3, 1e9, t('study.thermal.what.span')),
      steps: Math.round(num(th.steps ?? 30, 1, 500, t('study.thermal.what.steps'))), scheme: ['euler', 'cn'].includes(th.scheme ?? 'euler') ? (th.scheme ?? 'euler') : bad(t('study.thermal.read.scheme_unknown')),
    };
  }
  if (raw.thermalLoad !== undefined) {
    const l = raw.thermalLoad;
    if (!l || typeof l !== 'object' || Array.isArray(l)) bad(t('study.thermal.read.load_bad'));
    out.thermalLoad = { mode: LOAD_MODES.includes(l.mode) ? l.mode : bad(t('study.thermal.read.load_mode')), dT: num(l.dT ?? 0, -1e4, 1e4, t('study.thermal.what.dt')), Tref: l.Tref === null ? null : temp(l.Tref ?? 20, t('study.thermal.what.tref')) };   // null = the environment's temperature
    if (l.at !== undefined) out.thermalLoad.at = ['worst', 'time'].includes(l.at) ? l.at : bad(t('study.thermal.read.load_at'));
    if (l.time !== undefined) out.thermalLoad.time = num(l.time, 0, 1e9, t('study.thermal.what.load_time'));
    if (l.solves !== undefined) out.thermalLoad.solves = Math.round(num(l.solves, 2, 51, t('study.thermal.what.solves')));
  }
  return out;
}
function bad(m) { throw new Error(m); }

const n3 = (v) => +Number(v).toPrecision(4);
/** A short description of a heat condition. */
export function describeHeat(it) {
  const faces = t('study.thermal.faces', { n: it.faces.length });
  if (it.type === 'temperature') return t('study.thermal.describe.temperature', { T: n3(it.T), faces });
  if (it.type === 'flux') return t(it.q >= 0 ? 'study.thermal.describe.flux_in' : 'study.thermal.describe.flux_out', { q: n3(it.q), faces });
  if (it.type === 'power') return t(it.P >= 0 ? 'study.thermal.describe.power_in' : 'study.thermal.describe.power_out', { P: n3(it.P), faces });
  if (it.type === 'convection') return t('study.thermal.describe.convection', { h: n3(it.h), T: n3(it.Tamb), faces });
  return t('study.thermal.describe.radiation', { eps: n3(it.eps), T: n3(it.Tamb), faces });
}

const usesHeat = (st) => st.kind === 'thermal' || ((st.kind === 'static' || st.kind === 'buckling') && st.thermalLoad && (st.thermalLoad.mode === 'field' || st.thermalLoad.mode === 'transient'));
/** A static or buckling study whose thermal load is a transient run's temperatures. */
export const transientLoad = (st) => (st.kind === 'static' || st.kind === 'buckling') && !!st.thermalLoad && st.thermalLoad.mode === 'transient';
/** A static study solved over the run's time steps (thermal-history.js). */
export const historyLoad = (st) => st.kind === 'static' && transientLoad(st);
const loaded = (st) => st.thermalLoad && st.thermalLoad.mode && st.thermalLoad.mode !== 'none';
/** Which item lists the panel shows for this study. */
export const itemKinds = (st) => (st.kind === 'thermal' ? ['heat'] : usesHeat(st) ? ['constraints', 'loads', 'heat'] : ['constraints', 'loads']);
/** The worker op that solves this study. */
export const opFor = (st) => (st.kind === 'thermal' ? 'thermalSolve' : st.kind === 'buckling' ? 'bucklingSolve' : historyLoad(st) ? 'thermoHistorySolve' : st.kind === 'static' && loaded(st) ? 'thermoStaticSolve' : 'simSolve');

/**
 * The thermal side of simJob: problems to add, whether the structural "Add a constraint / Add a load" checks apply, and the job
 * fields. heat: the study's heat items with faces resolved to indices; mat: the material object (materials.js shape).
 */
export function thermalJob(st, heat, mat) {
  const problems = [];
  const sink = heat.some((h) => ['temperature', 'convection', 'radiation'].includes(h.type));
  const tr = (st.kind === 'thermal' && st.thermal && st.thermal.transient) || transientLoad(st);
  if (usesHeat(st)) {
    if (!heat.length) problems.push(st.kind === 'thermal' ? t('study.thermal.problem.no_condition') : t('study.thermal.problem.load_needs_conditions'));
    else if (!sink && !tr) problems.push(st.kind === 'thermal' ? t('study.thermal.problem.no_sink_transient') : t('study.thermal.problem.no_sink'));
    for (const h of heat) if (!h.faces.length) problems.push(t('study.thermal.problem.no_faces', { name: t('study.thermal.item_name', { label: HEAT_LABEL[h.type], n: h.id.replace(/\D/g, '') }) }));
    if (!(mat && mat.k > 0)) problems.push(t('study.thermal.problem.no_k'));
    if (tr && !(mat && mat.cp > 0)) problems.push(t('study.thermal.problem.no_cp'));
  }
  if (loaded(st) && st.kind !== 'thermal' && !(mat && mat.alpha >= 0)) problems.push(t('study.thermal.problem.no_alpha'));
  const th = st.thermal || newThermal(), tl = st.thermalLoad;
  const at = transientLoad(st) ? (st.kind === 'buckling' ? 'time' : tl.at || 'worst') : null;
  if (at === 'time' && tl.time !== undefined && tl.time > th.t) problems.push(t('study.thermal.problem.stress_time_late', { time: n3(tl.time), end: n3(th.t) }));
  return {
    problems,
    needsConstraint: st.kind !== 'thermal',
    needsLoad: (st.kind === 'static' || st.kind === 'buckling') && !loaded(st),
    fields: {
      heat: usesHeat(st) ? heat : [], gen: usesHeat(st) ? th.gen : 0,
      transient: tr ? { T0: th.T0, t: th.t, steps: th.steps, theta: th.scheme === 'cn' ? 0.5 : 1 } : null,
      thermalLoad: (st.kind === 'static' || st.kind === 'buckling') && loaded(st) ? { ...st.thermalLoad, ...(at ? { at, time: tl.time ?? th.t, solves: tl.solves ?? 21 } : {}) } : null,
    },
  };
}
