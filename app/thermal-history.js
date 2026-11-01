/* SPDX-License-Identifier: Apache-2.0 */
/**
 * thermal-history.js — thermal stress from a transient heat run (DOM-free): a static study whose thermal load is
 * `{ mode: 'transient' }` takes the temperatures of a transient thermal run on the SAME mesh (voxel cubes or quadratic tets),
 * and solves one linear static problem per chosen time step (quasi-static: no inertia, the material properties constant):
 *   at 'worst'  the stress history: `solves` time steps spread evenly over the run (the start included); peak von Mises per step,
 *               the time of the largest, and that step's full result (the default)
 *   at 'time'   one step: the one nearest `time`
 * Per step: f = f_mech + Σ ∫ Bᵀ D α (T(t) − Tref) dV, solved by the study's own solver (voxel: multigrid PCG; tets: AMG/IC(0) PCG),
 * warm-started from the previous step; σ = D(ε − α ΔT). The thermal run is thermal.js solveHeat with `frameSteps` = the stress
 * steps (the θ-method's own time steps; only the stored ones are solved for stress).
 * Linear superposition holds (small displacements, constant E, ν, α), so each step's stress is exactly what a static solve with that
 * step's temperatures gives (tools/partcraft-test/test-thermal.mjs checks this, and the steady limit of a long run).
 *
 *   solveThermoHistory(job, onProgress, cancelled, { onFrame(i, { u, res, dT, time, model }) }) → the static result of the worst (or
 *     chosen) step + history { at, times, maxVm, maxVmAt, maxDisp, iterations, worst } + thermal { minDT, maxDT, time, heat }
 * job: sim.js simJob for a static study (+ mesher 'tet' fields), with thermalLoad { mode 'transient', at, time, solves, Tref }
 * and transient { T0, t, steps, theta }.
 */
import { applyEnv } from './env/env.js';
import * as FE from './fea.js';
import * as TH from './thermal.js';
import { setup as voxelSetup, stepAt } from './buckling.js';
import { readMaterial, tonnesPerMm3 } from './materials.js';
import { meshJob, meshSummary, assemble, tetBoundaryConditions, tetRigidCheck, system, tetPCG, tetPostprocess, jobFaces } from './tetfea.js';
import { tetMeshAdapter } from './tet-elements.js';
import { t } from './i18n.js';

export const MAX_SOLVES = 51;

/** The time steps solved for stress: [step] for 'time', else `solves` steps evenly over the run, 0 (the start) and the end included. */
export function stressSteps(tr, tl) {
  if ((tl.at || 'worst') === 'time') return [stepAt(tr, tl.time).step];
  const n = Math.max(2, Math.min(MAX_SOLVES, Math.round(tl.solves || 21)));
  const out = new Set(); for (let i = 0; i < n; i++) out.add(Math.round(i * tr.steps / (n - 1)));
  return [...out].sort((a, b) => a - b);
}

/** The structural side on tets (tet-elements.js setupTet without its thermal part). */
function tetSetup(job, onProgress) {
  const mat = readMaterial(job.material), rho = tonnesPerMm3(mat.density);
  onProgress(0, 'Meshing');
  const { tm, t10, model } = meshJob(job, onProgress);
  const asm = assemble(model, mat.E, mat.nu, { rho, onProgress: (f) => onProgress(0.3 + 0.05 * f, 'Assembling') });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bc = tetBoundaryConditions(model, job.bcs, { density: rho, exactArea, nodeVolN: asm.nodeVolN, faces: jobFaces(job) });
  const free = tetRigidCheck(model, bc.cons);
  if (free) throw new Error(t('study.thermal.not_held', { motions: free.join(', ') }));
  const mesh = tetMeshAdapter(model), summary = meshSummary(tm, t10, model, rho);
  onProgress(0.4, 'Preconditioner');
  const sys = system(model, asm.K, bc.cons);
  return {
    mat, model, tm, bc, mesh, summary, nn: model.n, active: mesh.active,
    solve: (f, x0, tol) => tetPCG(model, sys, f, { x0, tol }),
    post: (u, f, thermal) => tetPostprocess(model, asm.K, u, f, bc.cons, { E: mat.E, nu: mat.nu, yieldStress: mat.yield, groups: bc.groups.constraints, thermal }),
  };
}
function voxSetup(job, onProgress, cancelled) {
  const s = voxelSetup(job, onProgress, cancelled, { thermal: false });
  onProgress(0.05, 'Preparing the solver');   // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
  const prec = FE.preconditioner(s.model, s.bc.cons), corr = TH.stressCorrection(s.model.type, s.mat.nu);
  return {
    ...s, nn: s.model.nn, active: s.model.active,
    solve: (f, x0, tol) => FE.pcg(s.model, s.bc.cons, f, { x0, tol, ...prec }),
    post: (u, f, thermal) => FE.postprocess(s.model, u, f, s.bc.cons, { yieldStress: s.mat.yield, groups: s.bc.groups.constraints, thermal: { ...thermal, corr } }),
  };
}

/** The stress history (or one step) of a transient thermal load. */
export function solveThermoHistory(job, onProgress = () => {}, cancelled = null, { onFrame = null } = {}) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now(), tl = job.thermalLoad, tr = job.transient;
  if (!tl || tl.mode !== 'transient' || !tr) throw new Error(t('study.thermal.history.needs_transient'));
  const tet = job.mesher === 'tet';
  const s = tet ? tetSetup(job, onProgress) : voxSetup(job, onProgress, cancelled);
  if (!(s.mat.alpha >= 0)) throw new Error(t('study.thermal.mat.missing', { what: t('study.thermal.mat.alpha') }));
  const steps = stressSteps(tr, tl), Tref = tl.Tref ?? 20, at = tl.at === 'time' ? 'time' : 'worst';
  const heat = TH.heatOnMesh(job, s.mesh, { frameSteps: steps, cancelled, onProgress: (f, what) => onProgress(0.1 + 0.4 * f, 'Temperatures: ' + what) });   // i18n-ignore: progress label, never shown
  const frames = heat.res.frames, times = heat.res.times;
  const fm = s.bc.f, f = new Float64Array(fm.length), dT = new Float64Array(s.nn);
  const hist = { at, times, maxVm: [], maxVmAt: [], maxDisp: [], iterations: [], worst: 0 };
  let x0 = null, best = null, worstRes = 0, iterations = 0;
  const tol = job.tol || 1e-8;
  for (let i = 0; i < frames.length; i++) {
    if (cancelled && cancelled()) throw new Error('Cancelled');
    const T = frames[i];
    for (let n = 0; n < s.nn; n++) dT[n] = s.active[n] ? T[n] - Tref : 0;
    const ft = TH.thermalLoadVector(s.mesh, s.mat, dT);
    for (let k = 0; k < f.length; k++) f[k] = fm[k] + ft[k];
    const sol = s.solve(f, x0, tol);
    if (!sol.converged) throw new Error(t('study.thermal.history.not_converged', { time: times[i].toPrecision(4), residual: sol.residual.toExponential(1), n: sol.iterations }));
    iterations += sol.iterations; worstRes = Math.max(worstRes, sol.residual); x0 = sol.u;
    const th = { dT: Float64Array.from(dT), alpha: s.mat.alpha };
    const res = s.post(sol.u, f, th);
    hist.maxVm.push(res.maxVm.value); hist.maxVmAt.push(res.maxVm.at); hist.maxDisp.push(res.maxDisp.value); hist.iterations.push(sol.iterations);
    if (onFrame) onFrame(i, { u: sol.u, res, dT: th.dT, time: times[i], model: s.model });
    if (!best || res.maxVm.value > best.res.maxVm.value) { best = { i, u: sol.u, res, dT: th.dT }; hist.worst = i; }
    // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
    onProgress(0.5 + 0.5 * (i + 1) / frames.length, `Stress at ${times[i].toPrecision(3)} s (${i + 1} of ${frames.length})`);
  }
  let lo = Infinity, hi = -Infinity; for (let n = 0; n < s.nn; n++) if (s.active[n]) { lo = Math.min(lo, best.dT[n]); hi = Math.max(hi, best.dT[n]); }
  return {
    kind: 'static', summary: s.summary, material: s.mat, u: best.u, iterations, residual: worstRes, loadTotal: s.bc.loadTotal, groups: s.bc.groups, ...best.res,
    thermal: { minDT: lo, maxDT: hi, time: times[best.i], transient: true, heat: { minT: heat.summary.minT, maxT: heat.summary.maxT, balance: heat.res.balance, end: times[times.length - 1] } },
    dT: best.dT, history: hist, model: s.model, grid: s.grid || null, tm: s.tm || null, ms: Date.now() - t0,
  };
}
