/* SPDX-License-Identifier: Apache-2.0 */
/**
 * part-item.js — the part on screen, in the forms other apps take when it is dragged to them (0.8 EG.78, studio_PART_2). DOM-free.
 *
 *   partItem(part, mesh, { name }) → { item, notes[] }   one LibraryCraft item (format 1): BimCraft places it in a model and puts it in
 *       the equipment schedule. Z up, front −Y, anchored back-middle-bottom (variants-item.js libraryBody); the plan is the footprint
 *       rectangle on layer EQUIP; a mesh over the library's triangle limit is a box of its size, and a note says so.
 *   partObj(mesh, name) → string          OBJ text, metres, Y up (what ModelCraft's importer reads, io/obj.js): ModelCraft places it as a group.
 *   dragForms(part, mesh, { name }) → { name, files: [{ kind, file }], meta, notes[] }   what window.cadcraftStudio.drag.start takes
 *
 * Nothing here names a file's folder or the person's computer: the offer carries the part's name and number only.
 */
import { libraryBody } from './variants-item.js';

const MAX_TRIANGLES = 200000;
const clip = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n);

export function partItem(part, mesh, { name = '' } = {}) {
  const notes = [];
  if (!mesh || !mesh.positions || !mesh.indices || !mesh.indices.length) throw new Error('no solid');   // i18n-ignore: drag-out.js checks the mesh first and words its own message
  const nm = clip(name || (part && part.name) || 'Part', 500) || 'Part';
  let decimals = 2, body = libraryBody(mesh, decimals);
  const bb = body.bounds;
  let shape;
  if (body.indices.length / 3 > MAX_TRIANGLES) {
    shape = { type: 'box', x: bb.x, y: bb.y, z: 0, w: Math.max(bb.w, 0.01), d: Math.max(bb.d, 0.01), h: Math.max(bb.h, 0.01) };
    notes.push('box');   // the caller words it (t('partitem.box'))
  } else shape = { type: 'mesh', positions: body.positions, indices: body.indices };
  const item = {
    format: 'cadcraft-library-item', format_version: 1, name: nm, kind: 'equipment', category: 'other/other',
    plan: { layers: [{ name: 'EQUIP', color: 7 }], entities: [{ type: 'poly', layer: 'EQUIP', color: null, closed: true,
      pts: [[bb.x, bb.y], [bb.x + bb.w, bb.y], [bb.x + bb.w, bb.y + bb.d], [bb.x, bb.y + bb.d]] }] },
    body: shape,
    params: { width: Math.max(bb.w, 0.01), depth: Math.max(bb.d, 0.01), height: Math.max(bb.h, 0.01) },
  };
  const number = part && (part.partNumber || (part.props && part.props.partNumber));
  if (number) item.model = clip(number, 100);
  return { item, notes };
}

export function partObj(mesh, name = 'part') {
  const P = mesh.positions, I = mesh.indices, n = P.length / 3;
  const out = ['# PartCraft part — meters, Y up', 'o ' + (clip(name, 80).replace(/\s+/g, '_') || 'part')];
  for (let i = 0; i < n; i++) out.push('v ' + (P[i * 3] / 1000).toFixed(6) + ' ' + (P[i * 3 + 1] / 1000).toFixed(6) + ' ' + (P[i * 3 + 2] / 1000).toFixed(6));
  for (let i = 0; i < I.length; i += 3) out.push('f ' + (I[i] + 1) + ' ' + (I[i + 1] + 1) + ' ' + (I[i + 2] + 1));
  return out.join('\n') + '\n';
}

export function dragForms(part, mesh, { name = '', File = globalThis.File } = {}) {
  const nm = clip(name || (part && part.name) || 'Part', 120) || 'Part';
  const base = nm.replace(/[^A-Za-z0-9._-]+/g, '_').slice(0, 60) || 'part';
  const { item, notes } = partItem(part, mesh, { name: nm });
  const files = [
    { kind: 'item', file: new File([JSON.stringify(item)], base + '.ccitem.json', { type: 'application/json' }) },
    { kind: 'mesh', file: new File([partObj(mesh, nm)], base + '.obj', { type: 'model/obj' }) },
  ];
  const meta = {};
  const number = item.model;
  if (number) meta.partNumber = number;
  return { name: nm, files, meta, notes };
}
