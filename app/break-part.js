/* SPDX-License-Identifier: Apache-2.0 */
/**
 * break-part.js — Break it for a part (0.8 round 3, EG.31). DOM-free; the app hands in how it solves.
 *
 * "Scale the loads until the first yield or buckling, and show where." The part's own Simulation study (supports, loads, material, element
 * size, environment) is run as a linear static study and as a buckling study; study/breakit.js turns the two results into findings:
 *
 *   yield     the load factor at which the highest von Mises stress reaches the material's yield: the study's minimum safety factor (stress is
 *             proportional to load in a linear study, and every load of the study — forces, pressures, gravity — scales together), and where
 *   buckling  the first buckling load factor of the same supports and loads (a factor under 1 means the part buckles as loaded)
 *
 *   breakPart({ st, regen, env, solve, B, material? }) → Promise<{ ok, problems?, findings, first, yieldAt, notes }>
 *       solve(job) → Promise<result>    the caller owns the workers (ws-simulation.js passes the same op the Solve button uses)
 *   scaleLoads(st, λ) → the study with its force and pressure loads multiplied (used by the tests to confirm the factor by a second solve)
 *   breakProblemsNow() / setBreak(run) → the Problems of the last run, for partcraft.js's one problems feed
 */
import * as B0 from './study/breakit.js';
import { simJob, materialOf } from './sim.js';
import { t } from './i18n.js';

export async function breakPart({ st, regen, env = null, solve, B = B0, material = null }) {
  const mat = material || materialOf(st.material);
  const notes = [];
  const stat = { ...st, kind: 'static', mesher: 'tet', adaptive: null };   // tets: one op (tetSolve) for both solves, whatever mesh the study uses
  const a = simJob(stat, regen, { env });
  if (!a.job || a.problems.length) return { ok: false, problems: a.problems, findings: [], notes };
  const result = await solve(a.job);
  const findings = B.partFindings(result, { material: mat });
  // buckling of the same supports and loads: a missing piece (no loads that buckle) is a note, never a failure of the run
  try {
    const bk = simJob({ ...st, kind: 'buckling', mesher: 'tet', modes: 1, adaptive: null }, regen, { env });
    if (!bk.job || bk.problems.length) notes.push(t('breakit.part.no_buckling', { why: (bk.problems && bk.problems[0]) || '' }));
    else findings.push(...B.partFindings(await solve(bk.job), { material: mat }));
  } catch (e) { notes.push(t('breakit.part.no_buckling', { why: e && e.message ? e.message : String(e) })); }
  const ranked = B.rank(findings);
  const y = findings.find((f) => f.kind === 'yield');
  return { ok: true, findings: ranked, first: ranked[0] || null, yieldAt: y && y.where ? y.where.at : null, notes, h: a.h };
}

/** The study with force and pressure loads multiplied by λ (gravity is not a number in the study; it scales with the environment). */
export function scaleLoads(st, lam) {
  return { ...st, loads: st.loads.map((l) => (l.type === 'force' ? { ...l, total: l.total * lam } : l.type === 'pressure' ? { ...l, p: l.p * lam } : l)) };
}

let last = null;
export const setBreak = (run) => { last = run; };
export function breakProblemsNow(source = 'partcraft.breakit') {
  if (!last || !last.ok) return [];
  return B0.findingProblems(last.findings, { source }).map((p) => ({ ...p, about: [{ kind: 'part', id: 'part' }] }));
}
