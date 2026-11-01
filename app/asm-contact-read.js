/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asm-contact-read.js — the assembly contact study as data (0.8 SU.891): read from a file (untrusted), made new, pairs added and removed.
 * Import-free on purpose: assembly.js reads the study through this file; asm-contact.js (which pulls in the solver's job builder) re-exports it.
 */
const PENALTY_DEFAULT = 20;   // nlstudy.js PENALTY_DEFAULT
const MAX_PAIRS = 40, MAX_FACES = 200;
export const newContact = () => ({ steps: 10, Et: null, tol: 1e-6, pairs: [] });
const nrm = (v, lo, hi, d) => (typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi ? v : d);

const faceList = (raw) => (Array.isArray(raw) ? raw.slice(0, MAX_FACES) : []).filter((f) => f && typeof f.name === 'string' && f.name.length <= 600 && /^[\w.:\-+ ()\/\[\]#,@]*$/.test(f.name)
  && Array.isArray(f.at) && f.at.length === 3 && f.at.every((c) => typeof c === 'number' && Number.isFinite(c) && Math.abs(c) <= 1e7)).map((f) => ({ name: f.name, at: f.at.slice() }));

/** The study from a file (untrusted) → a clean copy, or null when absent or empty of pairs that name instances of this assembly. */
export function readContact(raw, instIds) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const seen = new Set(), pairs = [];
  for (const p of (Array.isArray(raw.pairs) ? raw.pairs : []).slice(0, MAX_PAIRS)) {
    if (!p || typeof p !== 'object' || !instIds.includes(p.a?.inst) || !instIds.includes(p.b?.inst)) continue;
    const id = typeof p.id === 'string' && /^p\d{1,4}$/.test(p.id) && !seen.has(p.id) ? p.id : 'p' + (pairs.length + 1 + [...seen].length);
    seen.add(id);
    pairs.push({ id, type: p.type === 'bonded' ? 'bonded' : 'frictionless', a: { inst: p.a.inst, faces: faceList(p.a.faces) }, b: { inst: p.b.inst, faces: faceList(p.b.faces) },
      factor: nrm(p.factor, 1, 1e4, PENALTY_DEFAULT) });
  }
  if (!pairs.length) return null;
  return { steps: Math.round(nrm(raw.steps, 1, 100, 10)), Et: raw.Et === null || raw.Et === undefined ? null : nrm(raw.Et, 0, 1e7, null), tol: nrm(raw.tol, 1e-10, 1e-2, 1e-6), pairs };
}

export function addPair(c, type = 'frictionless') {
  const n = 1 + Math.max(0, ...c.pairs.map((p) => +p.id.slice(1) || 0));
  const p = { id: 'p' + n, type, a: { inst: null, faces: [] }, b: { inst: null, faces: [] }, factor: PENALTY_DEFAULT };
  c.pairs.push(p);
  return p;
}
export const removePair = (c, id) => { c.pairs = c.pairs.filter((p) => p.id !== id); };

