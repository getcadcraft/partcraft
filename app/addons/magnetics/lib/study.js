/* SPDX-License-Identifier: Apache-2.0 */
/**
 * study.js — the Magnetics add-on's study: what is modelled, with what, and the run (DOM-free). It does not carry a solver of its own: the
 * regions and the job are PartCraft's magnet-study.js (buildJob, summarize, magnetProblems), the mesh and the field are phys-worker.js
 * magnetSolve (magnetmesh.js + magnet.js), handed in as `solve(job)` (a compute worker on the page, the function itself in Node).
 *
 *   newStudy() · cleanStudy(raw)            the study as saved in the add-on's storage: { source 'template' | 'sketches', template, params,
 *                                           sketches: [id], specs: { key → spec }, depth (mm), pad (air box margin in model sizes), fine, show, flux }
 *   setupOf(study, part, { say })           → { loops (mm), specs, keys, names, frame, hand(specs)?, note?, error? }
 *   runStudy(setup, study, solve)           → Promise<{ res, sum, top (|B| at the top of the colour scale), meta, stats, check, flux, problems, specs, loops }> | throws { problems: [sentence] }
 */
import * as MS from '../../../magnet-study.js';
import { TEMPLATES, TEMPLATE_IDS, build as buildTemplate, cleanParams } from './templates.js';
import { regionStats, measure, fluxLines, colourTop, nearBox } from './results.js';
import { frameOf } from './bodies.js';

export const SHOW = ['field', 'flux', 'bodies', 'box', 'forces'];
const ROLES = MS.ROLES;
const fin = (v, d) => (Number.isFinite(Number(v)) && String(v).trim() !== '' ? Number(v) : d);
const clamp = (v, lo, hi, d) => Math.min(hi, Math.max(lo, fin(v, d)));

export const newStudy = () => ({ source: 'template', template: 'ccore', params: {}, sketches: [], specs: {}, depth: 20, pad: 1, fine: 1, show: Object.fromEntries(SHOW.map((k) => [k, k !== 'box'])), flux: 16 });

function cleanSpec(s) {
  if (!s || typeof s !== 'object') return null;
  return { role: ROLES.includes(s.role) ? s.role : 'iron', mur: clamp(s.mur, 1, 1e7, 2000), curve: String(s.curve || '').slice(0, 4000), br: clamp(s.br, 0, 3, 1.2), angle: clamp(s.angle, -3600, 3600, 0),
    murMag: clamp(s.murMag, 1, 100, 1.05), current: clamp(s.current, -1e9, 1e9, 0), force: !!s.force };
}

export function cleanStudy(raw) {
  const d = newStudy();
  if (!raw || typeof raw !== 'object') return d;
  const template = TEMPLATE_IDS.includes(raw.template) ? raw.template : d.template;
  const specs = {};
  for (const [k, v] of Object.entries(raw.specs || {}).slice(0, 200)) { const c = cleanSpec(v); if (c && /^[A-Za-z0-9:_.-]{1,80}$/.test(k)) specs[k] = c; }
  return {
    source: raw.source === 'sketches' ? 'sketches' : 'template', template, params: cleanParams(template, raw.params || {}),
    sketches: Array.isArray(raw.sketches) ? raw.sketches.filter((x) => typeof x === 'string').slice(0, 50) : [], specs,
    depth: clamp(raw.depth, 0.001, 1e6, d.depth), pad: [1, 2, 4].includes(Number(raw.pad)) ? Number(raw.pad) : 1, fine: [0.5, 1, 2].includes(Number(raw.fine)) ? Number(raw.fine) : 1,
    show: Object.fromEntries(SHOW.map((k) => [k, raw.show && typeof raw.show[k] === 'boolean' ? raw.show[k] : k !== 'box'])), flux: clamp(raw.flux, 2, 60, 16),
  };
}

export function setupOf(study, part, { say = (k) => k } = {}) {
  if (study.source === 'template') {
    const b = buildTemplate(study.template, study.params);
    const keys = b.specs.map((_, i) => 't:' + b.id + ':' + i);
    const specs = b.specs.map((s, i) => ({ ...s, ...(study.specs[keys[i]] || {}) }));
    return { loops: b.loops, specs, keys, names: b.names.map((k) => say(k)), frame: frameOf({ kind: 'base', name: 'front' }), hand: b.hand, plane: 'front' };
  }
  const all = MS.sketchesOf(part);
  if (!all.length) return { error: say('err.no_sketch') };
  const picked = all.filter((s) => study.sketches.includes(s.id));
  if (!picked.length) return { error: say('err.none_picked'), loops: [] };
  const r = MS.loopsOfSketches(picked);
  if (r.error) return { error: r.error, loops: [] };
  const keys = r.origin.map((o) => o.sketch + ':' + o.n);
  const specs = keys.map((k) => ({ ...MS.defaultSpecs(1)[0], ...(study.specs[k] || {}) }));
  const names = r.origin.map((o) => say('sketch.loop', { sketch: o.name, n: o.n }));
  // the plane: every picked sketch must lie on the same one; a plane on a face is not placed without a rebuild, so the field goes on the front plane and the panel says so
  const feats = (part.features || []).filter((f) => picked.some((s) => s.id === f.id));
  const planes = feats.map((f) => JSON.stringify(f.plane || null));
  let note = null, frame = frameOf(feats[0] && feats[0].plane);
  if (new Set(planes).size > 1) note = say('note.planes');
  if (!frame) { frame = frameOf({ kind: 'base', name: 'front' }); note = note || say('note.face_plane'); }
  return { loops: r.loops, specs, keys, names, frame, note, plane: feats[0]?.plane?.name || 'face' };
}

export async function runStudy(setup, study, solve) {
  if (setup.error) throw Object.assign(new Error(setup.error), { problems: [setup.error] });
  const built = MS.buildJob(setup.loops, setup.specs, { depth: study.depth, pad: study.pad, fine: study.fine });
  if (built.problems.length) throw Object.assign(new Error(built.problems.join(' ')), { problems: built.problems });
  const res = await solve(built.job);
  const sum = MS.summarize(res, built.meta);
  const stats = regionStats(res, built.meta);
  const check = setup.hand ? measure(res, setup.hand(setup.specs), sum) : null;
  const flux = fluxLines(res, study.flux);
  const problems = MS.magnetProblems(sum, built.meta, setup.specs, 'addon.magnetics');
  return { res, sum, top: colourTop(res), near: nearBox(setup.loops, 0.5), meta: built.meta, stats, check, flux, problems, specs: setup.specs.map((s) => ({ ...s })), loops: setup.loops, names: setup.names, frame: setup.frame, depth: study.depth };
}

export { TEMPLATES, TEMPLATE_IDS };
