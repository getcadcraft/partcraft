/* SPDX-License-Identifier: Apache-2.0 */
/**
 * study-run.js — runs a design study (study/study.js, 0.8 EG.33) on a part: each variant is the part with a configuration or a set of
 * driving-parameter values applied (variants.js variantPart), rebuilt by the kernel in use, solved with the part's Simulation study and
 * the environment, and reduced to numbers. DOM-free; the app hands in how it builds and how it solves.
 *
 *   METRICS                      the numbers a variant can report: key → { unit, goal } (what the solver gives for the study's kind)
 *   metricsOf(result, regen, material)    → { mass (kg), volume (mm³), maxVm, maxDisp, minSafety | freq1 | maxT, … }
 *   runPartStudy({ part, sim, env, study, buildPart, solve, concurrency, onProgress, cancelled }) → runStudy's { rows, failed, cancelled }
 *       solve(job) → Promise<result>   the caller owns the workers
 */
import { runStudy } from './study/study.js';
import { variantPart } from './variants.js';
import * as CF from './configs.js';
import * as PP from './params-part.js';
import { simJob, materialOf } from './sim.js';
import { t } from './i18n.js';

export const METRICS = {
  mass: { unit: 'kg', goal: 'min' }, volume: { unit: 'mm³', goal: 'min' },
  maxVm: { unit: 'MPa', goal: 'min' }, maxDisp: { unit: 'mm', goal: 'min' }, minSafety: { unit: '', goal: 'max' },
  freq1: { unit: 'Hz', goal: 'max' }, maxT: { unit: '°C', goal: 'min' }, minT: { unit: '°C', goal: 'none' }, bucklingFactor: { unit: '', goal: 'max' },
};

/** Numbers out of a solver result (any kind) and the rebuilt part. Keys that the kind does not give are left out. */
export function metricsOf(r, regen, material) {
  const m = {};
  const vol = regen && regen.stats && regen.stats.volume;
  if (Number.isFinite(vol)) { m.volume = vol; if (material && material.density) m.mass = vol * 1e-9 * material.density; }
  const val = (x) => (x && typeof x === 'object' ? x.value : x);
  if (r.kind === 'static') { m.maxVm = val(r.maxVm); m.maxDisp = val(r.maxDisp); m.minSafety = r.minSafety; }
  else if (r.kind === 'modal') m.freq1 = r.freqs[0];
  else if (r.kind === 'thermal') { m.maxT = val(r.maxT); m.minT = val(r.minT); }
  else if (r.kind === 'buckling') m.bucklingFactor = r.factors[0];
  for (const k of Object.keys(m)) if (!Number.isFinite(m[k])) delete m[k];
  return m;
}

/** The part with one variant applied: a configuration by name (variants.js), or driving-parameter values typed by the study. */
export function variantOf(part, v) {
  if (v.set.$config !== undefined) {
    const row = (part.configs?.rows || []).find((r) => r.name === v.set.$config);
    return row ? variantPart(part, row) : { part, errors: [t('study.run.no_config', { name: String(v.set.$config) })] };
  }
  const p = structuredClone(part), errors = [];
  try {
    if (!p.params) throw new Error(t('variants.err.no_params'));
    CF.applyRow(p.params, { name: v.id, values: v.set });
  } catch (e) { return { part: p, errors: [e.message] }; }
  for (const e of PP.applyPartParams(p).errors || []) errors.push(`${e.where}: ${e.message}`);
  return { part: p, errors };
}

export async function runPartStudy({ part, sim, env = null, study, buildPart, solve, concurrency = 2, onProgress = null, cancelled = () => false }) {
  const material = materialOf(sim.material);
  const evaluate = async (v) => {
    const vp = variantOf(part, v);
    if (vp.errors.length) return { error: vp.errors[0] };
    const regen = await buildPart(vp.part);
    const { job, problems } = simJob(sim, regen, { env });
    if (!job || problems.length) return { error: problems[0] || t('study.ws.nothing') };
    return metricsOf(await solve(job), regen, material);
  };
  return runStudy(study, evaluate, { concurrency, onProgress, cancelled });
}
