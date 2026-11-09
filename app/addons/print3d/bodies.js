/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — words come from the add-on's lang/en.json (api.t); this file returns keys and numbers. */
/**
 * bodies.js — what PartCraft puts on the print stage (roadmap PS.7). DOM-free, so Node and the page run the same code.
 *
 * PartCraft's world is Y up, millimetres; the bed is Z up with its corner at 0,0, so a point (x, y, z) of the part is (x, −z, y) on the bed.
 *
 *   toPrinter([x, y, z]) → [x, −z, y]
 *   bodiesOf({ regen, part, mode, asm, builds, world, applyMat }) → { bodies: [{ id, name, tris }], left: [{ id, name, why: { kind, n } }], notBuilt: string | null }
 *       tris = printer triangles [[ [x,y,z] ×3 ]…], left where they are (not yet centred on the bed)
 *       left = bodies that are not closed solids, with the first fault print3d.js finds ('open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect', 'empty')
 *   centred(tris) → { tris, size } standing on 0 and centred on the origin, as the stage's place() wants them
 *   signature({ regen, part, mode, asm }) → a string that changes when the bodies may have
 */
import { meshFromTriangles, printCheck } from '../../print3d.js';

export const toPrinter = (p) => [p[0], -p[2], p[1]];

/** Triangles of a PartCraft mesh {positions, indices} (Y up) as printer triangles, only those picked by `use(triangleIndex)`. */
function trisOf(mesh, use = null, matrix = null, applyMat = null) {
  const P = mesh.positions, I = mesh.indices, out = [];
  const pt = (i) => {
    let p = [P[3 * i], P[3 * i + 1], P[3 * i + 2]];
    if (matrix && applyMat) p = applyMat(matrix, p);
    return toPrinter(p);
  };
  for (let k = 0; k < I.length / 3; k++) if (!use || use(k)) out.push([pt(I[3 * k]), pt(I[3 * k + 1]), pt(I[3 * k + 2])]);
  return out;
}

/** The first thing that makes these triangles not a closed solid, or null. Uses the same check as Check for 3D printing. */
export function closedFault(tris) {
  if (!tris.length) return { kind: 'empty', n: 0 };
  const rep = printCheck(meshFromTriangles(tris.map((p) => ({ p }))), { bed: null });
  const bad = rep.problems.find((p) => ['empty', 'open', 'nonmanifold', 'flipped', 'inverted', 'selfintersect'].includes(p.kind));
  return bad ? { kind: bad.kind, n: bad.n || 0 } : null;
}

export function bodiesOf({ regen, part, mode, asm, builds, world, applyMat }) {
  const bodies = [], left = [];
  const judge = (id, name, tris) => { const why = closedFault(tris); if (why) left.push({ id, name, why }); else bodies.push({ id, name, tris }); };
  if (mode === 'assembly') {
    if (!asm || !builds || !world) return { bodies, left, notBuilt: 'assembly' };
    for (const inst of asm.instances || []) {
      const b = builds.get(inst.part);
      if (!b?.mesh) return { bodies: [], left: [], notBuilt: 'assembly' };
      judge('i:' + inst.id, inst.name || inst.id, trisOf(b.mesh, null, world.get(inst.id), applyMat));
    }
    return { bodies, left, notBuilt: null };
  }
  const mesh = regen?.mesh;
  if (!mesh || !mesh.indices.length) {
    const bad = regen ? [...regen.results.values()].find((r) => r.status === 'error') : null;
    return { bodies, left, notBuilt: bad ? String(bad.error || bad.message || 'error') : '' };
  }
  const info = part?.bodyInfo || {};
  if (regen.exact && regen.faceBody && mesh.triFace && (regen.bodies || []).length > 1) {
    const ids = regen.bodies.map((b) => b.id);
    for (const id of ids) {
      if (info[id]?.hidden) continue;
      const tris = trisOf(mesh, (k) => regen.faceBody[mesh.triFace[k]] === id);
      if (tris.length) judge('b:' + id, info[id]?.name || (part?.name || 'Part') + ' ' + id, tris);
    }
  } else {
    judge('b:part', part?.name || 'Part', trisOf(mesh));
  }
  return { bodies, left, notBuilt: null };
}

/** Standing on 0 (lowest point) and centred on the origin in x and y. */
export function centred(tris) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const t of tris) for (const p of t) for (let k = 0; k < 3; k++) { if (p[k] < lo[k]) lo[k] = p[k]; if (p[k] > hi[k]) hi[k] = p[k]; }
  const cx = (lo[0] + hi[0]) / 2, cy = (lo[1] + hi[1]) / 2;
  return { tris: tris.map((t) => t.map((p) => [p[0] - cx, p[1] - cy, p[2] - lo[2]])), size: [hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]] };
}

export function signature({ regen, part, mode, asm }) {
  if (mode === 'assembly') return 'asm:' + (asm?.instances || []).map((i) => i.id + (i.place || []).join(',')).join('|') + ':' + JSON.stringify(Object.keys(asm?.parts || {}));
  return 'part:' + (part?.name || '') + ':' + (regen?.mesh ? regen.mesh.indices.length + ':' + regen.mesh.positions.length : 'none') + ':' + JSON.stringify(part?.bodyInfo || {});
}
