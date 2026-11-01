/* SPDX-License-Identifier: Apache-2.0 */
/**
 * setup.js — the Advanced simulation add-on's study set-up (0.8 SU.891; DOM-free, pure). The study itself is PartCraft's own Simulation study
 * (part.studies.simulation, sim.js + nlstudy.js, read by sim.js readSimStudy): this file only turns it into a 'nonlinear' or 'contact' study, keeps
 * its supports, loads and material, and finds contact pairs between the separate pieces of the part. No solver logic lives here.
 *
 *   describe(st, regen)              → what the panel shows about the part and its study (pieces, kind, material, supports, loads, pairs)
 *   asKind(st, kind, { steps, Et })  → a copy of the study as 'nonlinear' | 'contact' (a new tet study when there is none), checked by readSimStudy
 *   findPairs(regen, { gap })        → [{ a, b, gap, overlap }] facing flat faces of two different pieces no more than `gap` mm apart
 *   withPairs(st, found, { type, factor }) / editPair(st, id, patch) / dropPair(st, id) → copies of the study, checked
 */
import { newSimStudy, readSimStudy, materialOf } from '../../../sim.js';
import { ensureNl, NL_DEFAULT, PENALTY_DEFAULT } from '../../../nlstudy.js';
import { splitMesh } from '../../../nl-worker.js';
import { faceRef } from '../../../brep.js';

export const GAP_DEFAULT = 0.5;   // mm: how far apart two faces may be and still be offered as a pair
const copy = (v) => JSON.parse(JSON.stringify(v));

/** Which piece each face of the rebuild belongs to (pieces = connected parts of the surface mesh, as nl-worker.js meshes them). */
export function facePieces(regen) {
  const out = new Map();
  if (!regen || !regen.mesh || !regen.mesh.triFace) return { pieces: 0, of: out };
  const parts = splitMesh(regen.mesh);
  parts.forEach((m, p) => { for (const f of m.triFace || []) if (!out.has(f)) out.set(f, p); });
  return { pieces: parts.length, of: out };
}

export function describe(st, regen) {
  const { pieces } = facePieces(regen);
  if (!st) return { study: false, pieces, faces: regen ? regen.faces.length : 0 };
  let mat = null;
  try { mat = materialOf(st.material); } catch { mat = null; }
  return {
    study: true, pieces, faces: regen ? regen.faces.length : 0, kind: st.kind, mesher: st.mesher, h: st.h ?? null,
    material: mat ? { name: mat.name, E: mat.E, nu: mat.nu, yield: mat.yield ?? null } : null,
    supports: (st.constraints || []).length, loads: (st.loads || []).length, pairs: (st.contacts || []).length,
    steps: st.nonlinear ? st.nonlinear.steps : null, Et: st.nonlinear ? st.nonlinear.Et : null,
  };
}

/** The study as a nonlinear or contact study; its supports, loads, material and element size are kept. Throws the reader's words when it is not good. */
export function asKind(st, kind, { steps = null, Et, tol = null } = {}) {
  if (kind !== 'nonlinear' && kind !== 'contact') throw new Error('asKind: kind');   // i18n-ignore: developer error
  const s = copy(st || newSimStudy());
  s.kind = kind;
  ensureNl(s);
  if (steps !== null) s.nonlinear.steps = steps;
  if (Et !== undefined) s.nonlinear.Et = Et;
  if (tol !== null) s.nonlinear.tol = tol;
  if (kind === 'nonlinear') delete s.contacts;
  return readSimStudy(s);
}

/** A flat face's 2-D extent in its own plane (u, v axes from its normal) from the rebuild's triangles. */
function extent(regen, fi, n) {
  const P = regen.mesh.positions, I = regen.mesh.indices, T = regen.mesh.triFace;
  const t = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]], ul = Math.hypot(...u);
  for (let k = 0; k < 3; k++) u[k] /= ul;
  const v = [n[1] * u[2] - n[2] * u[1], n[2] * u[0] - n[0] * u[2], n[0] * u[1] - n[1] * u[0]];
  const box = [Infinity, Infinity, -Infinity, -Infinity];
  for (let tr = 0; tr < T.length; tr++) {
    if (T[tr] !== fi) continue;
    for (let k = 0; k < 3; k++) {
      const q = 3 * I[3 * tr + k], x = P[q], y = P[q + 1], z = P[q + 2];
      const a = x * u[0] + y * u[1] + z * u[2], b = x * v[0] + y * v[1] + z * v[2];
      box[0] = Math.min(box[0], a); box[1] = Math.min(box[1], b); box[2] = Math.max(box[2], a); box[3] = Math.max(box[3], b);
    }
  }
  return { box, u, v };
}

/**
 * Facing flat faces of different pieces: normals opposite (within 0.5°), the second face in front of the first by 0 … gap mm, their outlines
 * overlapping when seen along the normal. Side A (the faces that press, contact.js "slave") is the smaller face of the two.
 */
export function findPairs(regen, { gap = GAP_DEFAULT } = {}) {
  if (!regen || !regen.faces) return [];
  const { pieces, of } = facePieces(regen);
  if (pieces < 2) return [];
  const flat = regen.faces.map((f, i) => ({ f, i })).filter(({ f, i }) => f.type === 'plane' && f.n && f.o && of.has(i));
  const out = [], cos = Math.cos(0.5 * Math.PI / 180);
  for (let x = 0; x < flat.length; x++) for (let y = x + 1; y < flat.length; y++) {
    const A = flat[x], B = flat[y];
    if (of.get(A.i) === of.get(B.i)) continue;
    const n = A.f.n, m = B.f.n, dot = n[0] * m[0] + n[1] * m[1] + n[2] * m[2];
    if (dot > -cos) continue;
    const d = (B.f.o[0] - A.f.o[0]) * n[0] + (B.f.o[1] - A.f.o[1]) * n[1] + (B.f.o[2] - A.f.o[2]) * n[2];   // B in front of A along A's outward normal
    if (!(d >= -1e-6 && d <= gap)) continue;
    const ea = extent(regen, A.i, n), eb = extent(regen, B.i, n);
    const w = Math.min(ea.box[2], eb.box[2]) - Math.max(ea.box[0], eb.box[0]), h = Math.min(ea.box[3], eb.box[3]) - Math.max(ea.box[1], eb.box[1]);
    if (!(w > 1e-6 && h > 1e-6)) continue;
    const [sa, sb] = (A.f.area || 0) <= (B.f.area || 0) ? [A, B] : [B, A];
    out.push({ a: sa.i, b: sb.i, gap: Math.max(0, d), overlap: w * h, pieces: [of.get(sa.i), of.get(sb.i)] });
  }
  return out.sort((p, q) => p.gap - q.gap || q.overlap - p.overlap);
}

const nextId = (list) => { let n = 0; for (const c of list) n = Math.max(n, parseInt(String(c.id).replace(/\D/g, ''), 10) || 0); return 'p' + (n + 1); };

/** The found pairs added to the study (made a contact study first); a pair already there (same two faces) is not added twice. */
export function withPairs(st, regen, found, { type = 'frictionless', factor = PENALTY_DEFAULT } = {}) {
  const s = copy(asKind(st, 'contact'));
  const key = (a, b) => [a.name, b.name].sort().join('|');
  const have = new Set(s.contacts.map((c) => key(c.faces[0] || {}, c.master[0] || {})));
  let added = 0;
  for (const p of found) {
    const a = faceRef(regen.faces[p.a]), b = faceRef(regen.faces[p.b]);
    if (have.has(key(a, b))) continue;
    s.contacts.push({ id: nextId(s.contacts), type, faces: [a], master: [b], factor });
    have.add(key(a, b)); added++;
  }
  return { study: readSimStudy(s), added };
}

export function editPair(st, id, patch) {
  const s = copy(st);
  const c = (s.contacts || []).find((x) => x.id === id);
  if (!c) return readSimStudy(s);
  if (patch.type) c.type = patch.type;
  if (patch.factor !== undefined) c.factor = patch.factor;
  if (patch.swap) [c.faces, c.master] = [c.master, c.faces];
  return readSimStudy(s);
}

export function dropPair(st, id) {
  const s = copy(st);
  s.contacts = (s.contacts || []).filter((x) => x.id !== id);
  return readSimStudy(s);
}

export { NL_DEFAULT, PENALTY_DEFAULT };
