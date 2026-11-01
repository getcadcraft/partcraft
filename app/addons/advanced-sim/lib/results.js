/* SPDX-License-Identifier: Apache-2.0 */
/**
 * results.js — what the Advanced simulation panel shows of a nonlinear / contact result (0.8 SU.891; DOM-free, pure). The result is nl-worker.js'
 * (static-shaped: vertex vm / disp / u / plastic, maxVm, maxDisp, reaction, loadTotal, summary, plotMesh, nonlinear { converged, failedAt, lambda,
 * steps, maxPlastic, Et, contact { active, maxPenetration, normalForce, h } } or calculix { nodes, stress } for a .frd read back).
 *
 *   summary(r)                → { rows: [{ key, vars }], steps: [{ lambda, iterations, plastic, residual }], ok }   (language keys; the panel says them)
 *   problems(r)               → nlstudy.js nlProblems (the shared Problems shape) with this add-on's source name
 *   FIELDS                    → the plots this result can show: vm (MPa), plastic (strain), disp (mm)
 *   bands(r, field, { n, scale, beside }) → { bodies, legend: [{ lo, hi, color }], scale, offset, lo, hi } display bodies for api.model.addBodies:
 *                               the deformed plot mesh cut into n colour bands (one body per band), drawn beside the part (`beside`) so it never
 *                               hides it. Display only: no mass, no export.
 */
import { nlProblems, PEN_LIMIT } from '../../../nlstudy.js';

export const SOURCE = 'partcraft.addon.advanced-sim';
export const FIELDS = ['vm', 'plastic', 'disp'];
// blue → cyan → green → yellow → red (a plain colour ramp, the usual order for low → high)
const RAMP = [[0x2b, 0x4c, 0xc9], [0x1f, 0x9f, 0xd6], [0x2a, 0xb5, 0x7d], [0x9c, 0xc8, 0x3a], [0xf2, 0xc2, 0x2e], [0xef, 0x7d, 0x22], [0xd9, 0x36, 0x2b]];
const hex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
export function rampColor(f) {
  const x = Math.max(0, Math.min(1, f)) * (RAMP.length - 1), i = Math.min(RAMP.length - 2, Math.floor(x)), t = x - i;
  return hex(RAMP[i].map((v, k) => v + (RAMP[i + 1][k] - v) * t));
}
const sig = (v, p = 4) => (Number.isFinite(v) ? +(+v).toPrecision(p) : v);

export function summary(r) {
  const rows = [];
  if (!r) return { rows, steps: [], ok: false };
  const n = r.calculix ? null : r.nonlinear || null, c = n && n.contact ? n.contact : null;
  if (r.calculix) rows.push({ key: r.calculix.stress ? 'res.ccx' : 'res.ccx_disp', vars: { n: r.calculix.nodes } });
  if (n) {
    rows.push(n.converged ? { key: 'res.converged', vars: { steps: n.steps.length } } : { key: 'res.failed', vars: { at: Math.round(100 * (n.failedAt ?? 0)), done: Math.round(100 * (n.lambda ?? 0)) } });
    rows.push({ key: 'res.iterations', vars: { n: r.iterations } });
  }
  const lt = r.loadTotal || [0, 0, 0];
  rows.push({ key: 'res.load', vars: { f: sig(Math.hypot(...lt) * (n ? n.lambda ?? 1 : 1)) } });
  if (r.maxDisp) rows.push({ key: 'res.disp', vars: { d: sig(r.maxDisp.value) } });
  if (r.maxVm && !(r.calculix && !r.calculix.stress)) rows.push({ key: 'res.vm', vars: { s: sig(r.maxVm.value), y: sig(r.material && r.material.yield) } });
  if (n) rows.push(n.maxPlastic > 0 ? { key: 'res.plastic', vars: { e: sig(n.maxPlastic, 3), pct: sig(100 * n.maxPlastic, 3), Et: sig(n.Et) } } : { key: 'res.elastic', vars: {} });
  if (c) {
    rows.push({ key: 'res.contact', vars: { n: c.active, f: sig(c.normalForce) } });
    rows.push({ key: c.h > 0 && c.maxPenetration > PEN_LIMIT * c.h ? 'res.pen.over' : 'res.pen', vars: { p: sig(c.maxPenetration, 3), h: sig(c.h, 3), pct: sig(c.h > 0 ? 100 * c.maxPenetration / c.h : 0, 3) } });
  }
  if (r.summary) rows.push({ key: 'res.mesh', vars: { e: r.summary.elements, n: r.summary.nodes } });
  if (Number.isFinite(r.ms)) rows.push({ key: 'res.time', vars: { s: sig(r.ms / 1000, 3) } });
  return { rows, steps: n ? n.steps.map((s) => ({ lambda: s.lambda, iterations: s.iterations, plastic: s.plastic, residual: s.residual })) : [], ok: n ? !!n.converged : true };
}

export const problems = (r) => nlProblems(r, SOURCE);

/** The fields this result has values for. */
export const fieldsOf = (r) => FIELDS.filter((f) => r && r.vertex && r.vertex[f] && !(f === 'vm' && r.calculix && !r.calculix.stress) && !(f === 'plastic' && (!r.nonlinear || r.calculix)));

export function bands(r, field = 'vm', { n = 8, scale = null, beside = true } = {}) {
  const pm = r && r.plotMesh, val = r && r.vertex && r.vertex[field], U = r && r.vertex && r.vertex.u;
  if (!pm || !val) return null;
  const P = pm.positions, I = pm.indices, nv = P.length / 3, nt = I.length / 3;
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < val.length; i++) { const v = val[i]; if (Number.isFinite(v)) { if (v < lo) lo = v; if (v > hi) hi = v; } }
  if (!(hi >= lo)) return null;
  if (hi - lo < 1e-12 * Math.max(1, Math.abs(hi))) hi = lo + 1e-12 * Math.max(1, Math.abs(lo)) + 1e-30;
  // the size of the part, and the shape's scale: the largest displacement drawn as 5 % of the part's size unless given
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nv; i++) for (let k = 0; k < 3; k++) { const x = P[3 * i + k]; if (x < mn[k]) mn[k] = x; if (x > mx[k]) mx[k] = x; }
  const size = Math.hypot(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]) || 1;
  let umax = 0; if (U) for (let i = 0; i < nv; i++) umax = Math.max(umax, Math.hypot(U[3 * i], U[3 * i + 1], U[3 * i + 2]));
  const k = scale !== null ? scale : (umax > 0 ? Math.max(1, +((0.05 * size) / umax).toPrecision(2)) : 1);
  const offset = beside ? [(mx[0] - mn[0]) * 1.25 + 0.1 * size, 0, 0] : [0, 0, 0];
  const band = (v) => Math.min(n - 1, Math.max(0, Math.floor((v - lo) / (hi - lo) * n)));
  const groups = Array.from({ length: n }, () => ({ pos: [], idx: [], map: new Map() }));
  for (let t = 0; t < nt; t++) {
    const a = I[3 * t], b = I[3 * t + 1], c = I[3 * t + 2];
    const g = groups[band((val[a] + val[b] + val[c]) / 3)];
    for (const q of [a, b, c]) {
      let id = g.map.get(q);
      if (id === undefined) {
        id = g.map.size; g.map.set(q, id);
        for (let d = 0; d < 3; d++) g.pos.push(P[3 * q + d] + (U ? k * U[3 * q + d] : 0) + offset[d]);
      }
      g.idx.push(id);
    }
  }
  const legend = groups.map((_, i) => ({ lo: lo + (hi - lo) * i / n, hi: lo + (hi - lo) * (i + 1) / n, color: rampColor((i + 0.5) / n) }));
  const bodies = [];
  groups.forEach((g, i) => { if (g.idx.length) bodies.push({ name: 'band ' + (i + 1), color: legend[i].color, mesh: { positions: g.pos, indices: g.idx } }); });
  return { bodies, legend, scale: k, offset, lo, hi, triangles: nt };
}
