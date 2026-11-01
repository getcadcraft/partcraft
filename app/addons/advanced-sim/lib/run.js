/* SPDX-License-Identifier: Apache-2.0 */
/**
 * run.js — runs the part's nonlinear / contact study through PartCraft's own path (0.8 SU.891; DOM-free). The job is sim.js simJob's, the
 * solve is nl-worker.js nlSolve on the app's compute worker (the same op the Simulation workspace calls), the CalculiX deck is nl-worker.js
 * ccxDeck (calculix.js exportInp) and a CalculiX .frd is read back by ccxRead. Nothing here runs CalculiX.
 *
 *   jobOf(st, regen, { env, title }) → { job, problems }   problems = words why it cannot run (from sim.js / nlstudy.js)
 *   solve(worker, job) · deck(worker, job) → { text, nodes, elements } · readFrd(worker, job, text)
 * worker = { call(op, args, { transfer }) } — api.study.worker(['tet-worker.js', 'nl-worker.js']) in the page; the ops themselves in Node tests.
 */
import { simJob } from '../../../sim.js';
import { isNl } from '../../../nlstudy.js';

export const WORKER_MODULES = ['tet-worker.js', 'nl-worker.js'];

export function jobOf(st, regen, { env = null, title = 'Part' } = {}) {
  if (!st) return { job: null, problems: ['no-study'] };
  if (!isNl(st.kind)) return { job: null, problems: ['not-nl'] };
  const { job, problems } = simJob(st, regen, { env });
  if (!job || problems.length) return { job: null, problems: problems.length ? problems : ['nothing'] };
  if (job.mesher !== 'tet') return { job: null, problems: ['tet-only'] };
  job.title = String(title || 'Part');
  return { job, problems: [] };
}

const transfer = (job) => { const t = [job.mesh.positions.buffer, job.mesh.indices.buffer]; if (job.mesh.triFace) t.push(job.mesh.triFace.buffer); return t; };

export const solve = (worker, job) => worker.call('nlSolve', job, { transfer: transfer(job) });
export const deck = (worker, job) => worker.call('ccxDeck', job, { transfer: transfer(job) });
export const readFrd = (worker, job, text) => worker.call('ccxRead', { ...job, frd: String(text || '') }, { transfer: transfer(job) });
