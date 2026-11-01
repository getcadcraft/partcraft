/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nlstudy.js — the nonlinear and contact kinds of the Simulation study (0.8 SU.891, mounted by part_PART_3 on part-sim-08's
 * solvers nonlinear.js / contact.js / calculix.js; DOM-free). sim.js reads and resolves these fields through three hooks
 * (readNlFields, nlJob, NL_KINDS), the way it does for sim-thermal.js; nl-worker.js solves the job; nlstudy-ui.js is the panel.
 *
 * part.studies.simulation, kind 'nonlinear' | 'contact', adds:
 *   nonlinear: { steps 1–100 (load increments; halved on their own when a step fails), Et MPa | null (the slope after yield;
 *                null = 1 % of E), tol (residual, relative to the load) }   — present only on these kinds
 *   contacts:  [{ id 'p<n>', type 'frictionless' | 'bonded', faces: [FaceRef] (side A, the faces that press), master: [FaceRef]
 *                (side B, the faces they press on), factor 1–1e4 (penalty = factor × E / element size; 20 by default) }]
 * A contact pair joins faces of the same part's bodies (a part with several bodies, or one body touching itself across a slot).
 * The material yields as a bilinear J2 material in both kinds (Et after the yield stress), so 'nonlinear' is plasticity alone and
 * 'contact' is plasticity plus the pairs.
 *
 * Results (nl-worker.js) look like a static result (vertex vm, disp, u) plus `nonlinear` { converged, failedAt, lambda, steps,
 * maxPlastic, contact { active, maxPenetration, normalForce, h, points } } and vertex.plastic (and vertex.pressure with contact).
 *   nlProblems(result, src) → the shared Problems (rule 29): a load step that did not converge, a penetration over 1 % of the
 *   element size.
 */
import { t } from './i18n.js';
import { findFaceIndex } from './sim.js';

export const NL_KINDS = ['nonlinear', 'contact'];
export const isNl = (kind) => NL_KINDS.includes(kind);
export const NL_DEFAULT = { steps: 10, Et: null, tol: 1e-6 };
export const PENALTY_DEFAULT = 20;
/** A penetration larger than this share of the element size is a problem (part-sim-08's rule). */
export const PEN_LIMIT = 0.01;

const bad = (m) => { throw new Error(m); };

/** The nonlinear / contact fields of a study from a file (untrusted). helpers = sim.js' own { faceRefs, id, num, items }. */
export function readNlFields(raw, { faceRefs, id, num, items }) {
  const out = {};
  if (raw.nonlinear !== undefined || isNl(raw.kind)) {
    const n = raw.nonlinear && typeof raw.nonlinear === 'object' && !Array.isArray(raw.nonlinear) ? raw.nonlinear : (raw.nonlinear === undefined ? {} : bad(t('study.nl.err.bad_block')));
    out.nonlinear = {
      steps: Math.round(num(n.steps ?? NL_DEFAULT.steps, 1, 100, t('study.nl.what.steps'))),
      Et: n.Et === null || n.Et === undefined ? null : num(n.Et, 0, 1e7, t('study.nl.what.et')),
      tol: num(n.tol ?? NL_DEFAULT.tol, 1e-10, 1e-2, t('study.nl.what.tol')),
    };
  }
  if (raw.contacts !== undefined || raw.kind === 'contact') {
    out.contacts = items(raw.contacts || [], (c) => ({
      id: id(c.id), type: ['frictionless', 'bonded'].includes(c.type) ? c.type : bad(t('study.nl.err.contact_type')),
      faces: faceRefs(c.faces), master: faceRefs(c.master || []), factor: num(c.factor ?? PENALTY_DEFAULT, 1, 1e4, t('study.nl.what.factor')),
    }));
  }
  return out;
}

/** The new study fields when a study becomes one of these kinds (nlstudy-ui.js calls it on a change of type). */
export function ensureNl(s) {
  if (!isNl(s.kind)) return s;
  s.nonlinear = s.nonlinear || { ...NL_DEFAULT };
  if (s.kind === 'contact') s.contacts = s.contacts || [];
  s.mesher = 'tet';
  return s;
}

/**
 * The job fields of a nonlinear / contact study → { problems, fields }. faces = regen.faces; the material's E sets the penalty.
 * Contact pairs become { type, slave: [face index], master: [face index], factor }.
 */
export function nlJob(st, faces, mat) {
  if (!isNl(st.kind)) return { problems: [], fields: {} };
  const problems = [];
  const nl = st.nonlinear || NL_DEFAULT;
  if (st.mesher !== 'tet') problems.push(t('study.nl.problem.tet_only'));
  if (!(mat && mat.yield > 0)) problems.push(t('study.nl.problem.no_yield'));
  const Et = nl.Et === null ? (mat ? mat.E / 100 : 0) : nl.Et;
  if (mat && !(Et < mat.E)) problems.push(t('study.nl.problem.et_too_big', { Et, E: mat.E }));
  const pairs = [];
  if (st.kind === 'contact') {
    if (!(st.contacts || []).length) problems.push(t('study.nl.problem.no_pair'));
    for (const c of st.contacts || []) {
      const name = t('study.nl.pair_name', { n: c.id.replace(/\D/g, '') });
      const a = c.faces.map((f) => findFaceIndex(faces, f)), b = c.master.map((f) => findFaceIndex(faces, f));
      if (a.some((i) => i < 0) || b.some((i) => i < 0)) problems.push(t('study.sim.faces_gone', { items: name }));
      const A = a.filter((i) => i >= 0), B = b.filter((i) => i >= 0);
      if (!A.length || !B.length) { problems.push(t('study.nl.problem.pair_sides', { name })); continue; }
      if (A.some((i) => B.includes(i))) { problems.push(t('study.nl.problem.pair_same', { name })); continue; }
      pairs.push({ id: c.id, type: c.type, slave: A, master: B, factor: c.factor });
    }
  }
  return { problems, fields: { nonlinear: { steps: nl.steps, Et, tol: nl.tol }, ...(st.kind === 'contact' ? { contacts: pairs } : {}) } };
}

/** The shared Problems for the last nonlinear result (rule 29; docs/0.8-PROBLEMS-SPEC.md § 1–2). */
export function nlProblems(r, src = 'partcraft.sim') {
  const n = r && r.nonlinear;
  if (!n) return [];
  const out = [];
  if (!n.converged) out.push({
    id: src + ':nl.newton', code: 'sim.nl.newton', severity: 'error',
    msg: { key: 'study.nl.p.newton', vars: { at: Math.round(100 * (n.failedAt ?? 0)), done: Math.round(100 * (n.lambda ?? 0)) } },
    about: [{ kind: 'study', id: 'simulation', label: t('study.nl.p.about') }],
    source: { kind: 'engine', name: src },
    req: { op: '>=', value: 100, unit: '%' }, found: { value: Math.round(100 * (n.lambda ?? 0)), unit: '%' },
  });
  const c = n.contact;
  if (c && c.h > 0 && c.maxPenetration > PEN_LIMIT * c.h) out.push({
    id: src + ':nl.penetration', code: 'sim.nl.penetration', severity: 'warning',
    msg: { key: 'study.nl.p.penetration', vars: { pen: +c.maxPenetration.toPrecision(3), h: +c.h.toPrecision(3), pct: +(100 * c.maxPenetration / c.h).toFixed(2) } },
    about: [{ kind: 'study', id: 'simulation', label: t('study.nl.p.about') }],
    ...(c.at ? { where: { space: '3d', at: c.at } } : {}),
    source: { kind: 'engine', name: src },
    req: { op: '<=', value: +(PEN_LIMIT * c.h).toPrecision(3), unit: 'mm' }, found: { value: +c.maxPenetration.toPrecision(3), unit: 'mm' },
  });
  return out;
}
