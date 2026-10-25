/* SPDX-License-Identifier: Apache-2.0 */
/**
 * variants-item.js — a part's built variants as one LibraryCraft item (format 1 with `variants`; 0.7 W3.19). DOM-free.
 * This module does not import libitem.js (an app cannot import another app's file); the pack's tests and the library's own
 * upload check the item against libitem.js / LibraryItemFormat.php.
 *
 *   itemFromVariants(part, table, built, { activeName }) → { item, notes[] }
 *      table = variantTable(); built = [{ id, name, mesh }] in the table's order (mesh: the variant's built mesh, PartCraft's
 *      Y-up millimetres). The item is the converter's kind of output (no uuid, version, license or provenance: the upload
 *      form asks for them). Its own plan, body and params are the default variant's (the active configuration when it is
 *      among them, else the first); each variant carries its parameter values, its body and its footprint.
 *
 * Coordinates as the library wants them: Z up, the item's front facing −Y (PartCraft's +Z), and the insertion point at the
 * middle of the back, at the bottom of each variant — a taller or wider variant grows from the same spot. Positions are
 * rounded to 0.01 mm. The plan is the bounding rectangle (layer EQUIP). A variant too big for the library (an item is at most
 * 8 MB and a body 200,000 triangles) is a box of its size instead, and a note says so.
 */
import { t } from './i18n.js';

const MAX_BYTES = 7_600_000;      // the library's limit is 8 MB for the whole item
const MAX_TRIANGLES = 200000;
const r = (v, d) => { const k = 10 ** d; const x = Math.round(v * k) / k; return x === 0 ? 0 : x; };

/** The variant's mesh in library coordinates (Z up, front −Y, anchored back-middle-bottom) and its bounds. */
function libraryBody(mesh, decimals) {
  const P = mesh.positions, n = P.length / 3;
  const q = new Array(P.length);
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (let i = 0; i < n; i++) {
    const x = P[i * 3], y = -P[i * 3 + 2], z = P[i * 3 + 1];   // (x, y, z) → (x, −z, y): rotate +90° about X
    q[i * 3] = x; q[i * 3 + 1] = y; q[i * 3 + 2] = z;
    if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  const ox = -(minX + maxX) / 2, oy = -maxY, oz = -minZ;
  const positions = new Array(q.length);
  for (let i = 0; i < n; i++) { positions[i * 3] = r(q[i * 3] + ox, decimals); positions[i * 3 + 1] = r(q[i * 3 + 1] + oy, decimals); positions[i * 3 + 2] = r(q[i * 3 + 2] + oz, decimals); }
  const bounds = { x: r(minX + ox, 2), y: r(minY + oy, 2), z: 0, w: r(maxX - minX, 2), d: r(maxY - minY, 2), h: r(maxZ - minZ, 2) };
  return { positions, indices: Array.from(mesh.indices), bounds };
}

const boxOf = (b) => ({ type: 'box', x: b.x, y: b.y, z: 0, w: Math.max(b.w, 0.01), d: Math.max(b.d, 0.01), h: Math.max(b.h, 0.01) });

export function itemFromVariants(part, table, built, { activeName = null } = {}) {
  const notes = [];
  const cols = new Map((part.params?.vars || []).map((v) => [v.name, v]));
  const bodies = built.map((b) => libraryBody(b.mesh, 2));
  const tooMany = bodies.some((b) => b.indices.length / 3 > MAX_TRIANGLES);
  const make = (decimals, boxes) => {
    const rows = built.map((b, i) => {
      const body = libraryBody(b.mesh, decimals), bb = body.bounds;
      const tr = table.rows[i];
      return {
        id: tr.id, name: tr.name, values: tr.values,
        body: boxes.has(i) || body.indices.length / 3 > MAX_TRIANGLES ? boxOf(bb) : { type: 'mesh', positions: body.positions, indices: body.indices },
        footprint: { x: bb.x, y: bb.y, w: Math.max(bb.w, 0.01), d: Math.max(bb.d, 0.01) },
      };
    });
    return rows;
  };
  const defIndex = Math.max(0, built.findIndex((b) => b.name === activeName));
  let boxes = new Set(), decimals = 2, rows = make(decimals, boxes);
  const item = () => {
    const d = rows[defIndex], bb = d.footprint;
    const body = d.body;
    return {
      format: 'cadcraft-library-item', format_version: 1, name: String(part.name || 'Part').slice(0, 500), kind: 'equipment', category: 'other/other',
      plan: { layers: [{ name: 'EQUIP', color: 7 }], entities: [{ type: 'poly', layer: 'EQUIP', color: null, closed: true,
        pts: [[bb.x, bb.y], [bb.x + bb.w, bb.y], [bb.x + bb.w, bb.y + bb.d], [bb.x, bb.y + bb.d]] }] },
      body,
      params: { width: bb.w, depth: bb.d, height: bodies[defIndex].bounds.h },
      variants: {
        columns: table.columns.map((c) => { const note = cols.get(c.key)?.note; return note ? { key: c.key, label: String(note).slice(0, 500) } : { key: c.key }; }),
        rows: rows.map((row, i) => (i === defIndex ? (({ body: _own, ...rest }) => rest)(row) : row)),   // the default variant's body is the item's own
        default: d.id,
      },
    };
  };
  let it = item();
  const size = () => JSON.stringify(it).length;
  if (size() > MAX_BYTES) { decimals = 1; rows = make(decimals, boxes); it = item(); notes.push(t('variants.item.rounded')); }
  if (size() > MAX_BYTES) {
    // the biggest bodies become boxes until it fits (the default variant last)
    const order = built.map((_, i) => i).filter((i) => i !== defIndex).sort((a, b) => bodies[b].indices.length - bodies[a].indices.length).concat(defIndex);
    for (const i of order) { boxes.add(i); rows = make(decimals, boxes); it = item(); if (size() <= MAX_BYTES) break; }
    notes.push(t('variants.item.boxes', { n: boxes.size }));
  }
  if (tooMany) notes.push(t('variants.item.triangles'));
  if (size() > MAX_BYTES) notes.push(t('variants.item.too_big'));
  notes.push(t('variants.item.plan'));
  return { item: it, notes };
}
