/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh3dm.js — a .3dm file as one mesh for PartCraft's mesh import (0.7 SU.810, session 3dm; DOM-free). cc-3dm (./3dm/, a
 * copy of lib/3dm/ written only by tools/3dm/sync.mjs) reads the file: meshes as they are, polysurfaces and extrusions from
 * the render meshes saved with them or tessellated by cc-3dm. Every visible object with faces, and every block placement
 * of them, goes into one triangle list where the file puts it; meshimport.js then repairs it like an STL (weld, close small
 * gaps, orient) and the dialog says whether it closes. Curves, points and the rest are left out and said so.
 *
 *   meshFrom3dm(bytes) → { positions (file units, or mm), indices, format: '3dm', unit: 'mm' | 'cm' | 'm' | 'in' | 'ft' | 'um',
 *                          notes [{ key, vars }], threedm { objects, cached, ours, curves, hidden } }
 *   Errors: Error.code = a ccdm.* or mesh.* key with .vars (the caller words it).
 */
import { open3dm } from './3dm/index.js';

const MAX_TRIS = 3000000;
const MAX_DEPTH = 16;
const PART_UNITS = new Set(['um', 'mm', 'cm', 'm', 'in', 'ft']);

class Mesh3dmError extends Error { constructor(key, vars = {}) { super(key); this.code = key; this.vars = vars; } }

const mul = (a, b) => {
  const r = new Array(16);
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { let s = 0; for (let k = 0; k < 4; k++) s += a[i * 4 + k] * b[k * 4 + j]; r[i * 4 + j] = s; }
  return r;
};
const I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

export function meshFrom3dm(bytes) {
  let scene;
  try { scene = open3dm(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)); }
  catch (e) { throw e && e.name === 'ThreeDmError' ? new Mesh3dmError('ccdm.part.unreadable', { why: e.message }) : e; }
  const unitOk = PART_UNITS.has(scene.units.name);
  const s = unitOk ? 1 : scene.units.metres * 1000;   // other units: into millimetres
  const P = [], T = [];
  const facts = { objects: 0, cached: scene.report.surfaces.cached, ours: Object.values(scene.report.surfaces.ours).reduce((a, n) => a + n, 0), curves: scene.report.curves, hidden: 0 };
  const hiddenLayer = (it) => it.layer >= 0 && scene.layers[it.layer] && !scene.layers[it.layer].visible;
  const put = (items, M, depth) => {
    for (const it of items) {
      if (it.hidden || hiddenLayer(it)) { if (it.kind !== 'curve') facts.hidden++; continue; }
      if (it.kind === 'mesh') {
        const base = P.length / 3, p = it.positions;
        for (let i = 0; i < p.length; i += 3) {
          const x = p[i], y = p[i + 1], z = p[i + 2];
          const w = M[12] * x + M[13] * y + M[14] * z + M[15] || 1;
          P.push((M[0] * x + M[1] * y + M[2] * z + M[3]) / w * s, (M[4] * x + M[5] * y + M[6] * z + M[7]) / w * s, (M[8] * x + M[9] * y + M[10] * z + M[11]) / w * s);
        }
        for (let i = 0; i < it.indices.length; i++) T.push(base + it.indices[i]);
        if (T.length / 3 > MAX_TRIS) throw new Mesh3dmError('mesh.err.too_many', { max: MAX_TRIS });
        facts.objects++;
      } else if (it.kind === 'instance' && depth < MAX_DEPTH) {
        const b = scene.blocks.get(it.block);
        if (b) put(b.items, mul(M, it.xform), depth + 1);
      }
    }
  };
  put(scene.items, I, 0);
  const notes = scene.notes.slice();
  if (facts.curves) notes.push({ key: 'ccdm.part.curves', vars: { n: facts.curves } });
  if (facts.hidden) notes.push({ key: 'ccdm.part.hidden', vars: { n: facts.hidden } });
  if (!T.length) throw new Mesh3dmError('ccdm.part.none', {});
  // a mirrored placement turns its triangles inside out; repairMesh orients every shell again, so nothing to do here
  return { positions: Float64Array.from(P), indices: Uint32Array.from(T), format: '3dm', unit: unitOk ? scene.units.name : 'mm', notes, threedm: facts };
}
