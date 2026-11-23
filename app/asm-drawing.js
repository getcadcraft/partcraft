/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asm-drawing.js — the assembly drawing and the assembly's mesh exports (DOM-free).
 *
 *   assemblySheet(data, rows, { name, date, balloons, trails, exploded }) → sheet for drawing.js toPdf():
 *       A3 landscape: one view of the placed (or exploded) parts — hidden-line removed by OCCT HLR
 *       (measure-brep.js assemblyViews), at one ISO 5455 scale — with a balloon (item number, leader, dot) per BOM
 *       row on the instance it names, chain-line trails from rest to exploded positions when `trails` is given,
 *       the bill of materials (item, quantity, part number, name, material, mass) above the title block.
 *       data = { view: { visible, hidden, box }, anchors: [[u,v,depth]…], exact }   balloons = [{ item, anchor index }]
 *       balloonsFor(rows, instances, anchors) picks, per row, the copy whose anchor is nearest the viewer.
 *       trails = [[[x,y,z]…]…] world points (projected here the way HLR projects).  → also `balloons` placed and `rows`.
 *   assemblyMesh(items) → one welded-per-part mesh of every placed instance (world coordinates) for STL
 *   assembly3mf(name, parts, items) → 3MF bytes: each part once as an object, one build item per instance with its
 *       placement as the item transform (Z up like the part export).   parts: Map(pid → { name, mesh }), items: [{ pid, name, matrix }]
 */
import * as V from './vec.js';
import { VIEWS, SCALES, PAPERS, scaleLabel, winAnsi } from './drawing.js';
import { zipStored } from './export.js';
import { t } from './i18n.js';
import { escXmlClean as xmlEsc } from './util.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

const circle = (cx, cy, r, n = 48) => Array.from({ length: n }, (_, i) => {
  const a = 2 * Math.PI * i / n, b = 2 * Math.PI * (i + 1) / n;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a), cx + r * Math.cos(b), cy + r * Math.sin(b)];
});
const textW = (s, size) => winAnsi(s).width / 1000 * size;
/** Cut a string to fit a width (mm), ending it with an ellipsis when cut. */
export function fit(s, size, w) {
  s = String(s ?? '');
  if (textW(s, size) <= w) return s;
  while (s.length > 1 && textW(s + '…', size) > w) s = s.slice(0, -1);
  return s + '…';
}
const fmtMass = (g) => (g === null ? '' : g >= 1000 ? String(Number((g / 1000).toFixed(3))) + ' kg' : String(Number(g.toFixed(2))) + ' g');

/** One balloon per BOM row on the copy nearest the viewer. instances: [{ part: pid }] in anchor order. */
export function balloonsFor(rows, instances, anchors) {
  return rows.map((r) => {
    let best = -1;
    instances.forEach((i, k) => { if (i.part === r.pid && (best < 0 || (anchors[k][2] ?? 0) > (anchors[best][2] ?? 0))) best = k; });
    return { item: r.item, anchor: best };
  }).filter((b) => b.anchor >= 0);
}

// [label, width mm]; the label is a getter so the language file is read when the sheet is drawn, not at import
export const BOM_COLS = [['xch.asmdwg.col.item', 12], ['xch.asmdwg.col.qty', 12], ['xch.asmdwg.col.number', 34], ['xch.asmdwg.col.name', 58], ['xch.asmdwg.col.material', 38], ['xch.asmdwg.col.mass_each', 26]]
  .map(([key, w]) => { const c = [key, w]; Object.defineProperty(c, 0, { get: () => t(key), enumerable: true }); return c; });

export function assemblySheet(data, rows, { name = 'Assembly', date = new Date(), balloons = [], trails = [], exploded = null, paper = 'a3' } = {}) {
  const [W, H] = PAPERS[paper] || PAPERS.a3;
  const margin = 10, gap = 12, tbW = 180, tbH = 32, rowH = 6;
  const strokes = { visible: { width: 0.5, dash: null, segs: [] }, thin: { width: 0.18, dash: null, segs: [] }, chain: { width: 0.18, dash: [8, 1.5, 1.5, 1.5], segs: [] }, border: { width: 0.7, dash: null, segs: [] } };
  const fills = [], texts = [];
  const rect = (x, y, w, h, layer) => strokes[layer].segs.push([x, y, x + w, y], [x + w, y, x + w, y + h], [x + w, y + h, x, y + h], [x, y + h, x, y]);
  // bill of materials above the title block, header on top
  const bx = W - margin - tbW;
  const maxRows = Math.floor((H - 2 * margin - tbH - 12) / rowH) - 1;
  const more = Math.max(0, rows.length - maxRows);
  const allRows = rows;
  if (more) rows = rows.slice(0, maxRows - 1).concat([{ item: '', qty: '', number: '', name: t('xch.asmdwg.more_parts', { n: more + 1 }), material: '', massEach: null }]);
  const tableH = (rows.length + 1) * rowH;
  const ty0 = margin + tbH, ty1 = ty0 + tableH;
  if (rows.length) {
    rect(bx, ty0, tbW, tableH, 'border');
    let x = bx;
    for (const [, w] of BOM_COLS.slice(0, -1)) { x += w; strokes.thin.segs.push([x, ty0, x, ty1]); }
    for (let r = 1; r <= rows.length; r++) strokes.thin.segs.push([bx, ty0 + r * rowH, bx + tbW, ty0 + r * rowH]);
    // header in the top row, then the items top-down
    const baseY = (r) => ty1 - (r + 1) * rowH + 1.9;
    x = bx;
    for (const [h, w] of BOM_COLS) { texts.push({ x: x + 1.5, y: baseY(0), size: 2.5, text: h, anchor: 'start', bold: true }); x += w; }
    rows.forEach((r, i) => {
      const cells = [String(r.item), String(r.qty), r.number || '', r.name, r.material || '', fmtMass(r.massEach)];
      let cx = bx;
      cells.forEach((c, k) => { const w = BOM_COLS[k][1]; texts.push({ x: cx + 1.5, y: baseY(i + 1), size: 2.5, text: fit(c, 2.5, w - 3), anchor: 'start' }); cx += w; });
    });
  }
  // the view: left of the table column, full height
  const vx0 = margin + gap, vy0 = margin + gap, vx1 = bx - gap, vy1 = H - margin - gap - 6;
  const v = data.view;
  const bw = v.box.u1 - v.box.u0, bh = v.box.v1 - v.box.v0;
  const scale = SCALES.find((s) => bw * s <= (vx1 - vx0) * 0.78 && bh * s <= (vy1 - vy0) * 0.78) || SCALES[SCALES.length - 1];
  const ox = vx0 + ((vx1 - vx0) - bw * scale) / 2, oy = vy0 + ((vy1 - vy0) - bh * scale) / 2;
  const toSheet = (u, w) => [ox + (u - v.box.u0) * scale, oy + (w - v.box.v0) * scale];
  for (const g of v.visible) { const a = toSheet(g[0], g[1]), b = toSheet(g[2], g[3]); strokes.visible.segs.push([a[0], a[1], b[0], b[1]]); }
  const vw = VIEWS.iso;
  for (const pts of trails) {
    for (let i = 0; i + 1 < pts.length; i++) {
      const a = toSheet(V.dot(pts[i], vw.right), V.dot(pts[i], vw.up)), b = toSheet(V.dot(pts[i + 1], vw.right), V.dot(pts[i + 1], vw.up));
      strokes.chain.segs.push([a[0], a[1], b[0], b[1]]);
    }
  }
  texts.push({ x: (vx0 + vx1) / 2, y: vy1 + 1, size: 3.5, text: exploded ? t('xch.asmdwg.view_exploded', { view: exploded, scale: scaleLabel(scale) }) : t('xch.asmdwg.view_iso', { scale: scaleLabel(scale) }), anchor: 'middle' });
  // balloons on a ring around the view, in the order of their anchors' angles, kept 10 mm apart
  const placed = [];
  if (balloons.length) {
    const cx = ox + bw * scale / 2, cy = oy + bh * scale / 2;
    const R = Math.hypot(bw * scale, bh * scale) / 2 + 12;
    const br = 4;
    const list = balloons.map((b) => {
      const a = toSheet(data.anchors[b.anchor][0], data.anchors[b.anchor][1]);
      return { ...b, a, ang: Math.atan2(a[1] - cy, a[0] - cx) };
    }).sort((p, q) => p.ang - q.ang);
    const minA = (2 * br + 3) / R;
    for (let i = 1; i < list.length; i++) if (list[i].ang - list[i - 1].ang < minA) list[i].ang = list[i - 1].ang + minA;
    for (const b of list) {
      let x = cx + R * Math.cos(b.ang), y = cy + R * Math.sin(b.ang);
      x = Math.max(vx0 + br, Math.min(vx1 - br, x)); y = Math.max(vy0 + br, Math.min(vy1 - br, y));
      strokes.thin.segs.push(...circle(x, y, br));
      const d = Math.hypot(b.a[0] - x, b.a[1] - y) || 1;
      strokes.thin.segs.push([x + (b.a[0] - x) / d * br, y + (b.a[1] - y) / d * br, b.a[0], b.a[1]]);
      fills.push({ pts: Array.from({ length: 12 }, (_, k) => [b.a[0] + 0.6 * Math.cos(k * Math.PI / 6), b.a[1] + 0.6 * Math.sin(k * Math.PI / 6)]) });
      texts.push({ x, y: y - 1.25, size: 3.5, text: String(b.item), anchor: 'middle', bold: true });
      placed.push({ item: b.item, x, y, anchor: b.a });
    }
  }
  // border and title block
  rect(margin, margin, W - 2 * margin, H - 2 * margin, 'border');
  const by = margin;
  rect(bx, by, tbW, tbH, 'border');
  strokes.thin.segs.push([bx, by + 16, bx + tbW, by + 16], [bx + 110, by, bx + 110, by + 16], [bx + 110, by + 16, bx + 110, by + tbH]);
  const d = date instanceof Date ? date : new Date(date);
  texts.push({ x: bx + 3, y: by + 23, size: 5, text: fit(name, 5, 104), anchor: 'start', bold: true });
  texts.push({ x: bx + 113, y: by + 26, size: 2.5, text: t('drawing.tb.scale'), anchor: 'start' }, { x: bx + 113, y: by + 19.5, size: 4, text: scaleLabel(scale), anchor: 'start' });
  texts.push({ x: bx + 3, y: by + 10, size: 2.5, text: data.exact ? t('xch.asmdwg.units_exact') : t('xch.asmdwg.units_facets'), anchor: 'start' });
  texts.push({ x: bx + 3, y: by + 4, size: 2.5, text: data.exact ? t('xch.asmdwg.made_occt') : t('drawing.tb.made'), anchor: 'start' });
  texts.push({ x: bx + 113, y: by + 10, size: 2.5, text: t('drawing.tb.date'), anchor: 'start' }, { x: bx + 113, y: by + 4, size: 3, text: d.toISOString().slice(0, 10), anchor: 'start' });
  return { w: W, h: H, name, scale, strokes: Object.values(strokes), fills, texts, balloons: placed, rows: allRows.length, listed: rows.length - (more ? 1 : 0), view: { x: ox, y: oy, w: bw * scale, h: bh * scale }, exact: !!data.exact };
}

// ---------------------------------------------------------------- meshes of the whole assembly
/** items: [{ mesh, matrix }] → { positions, indices } in world coordinates. */
export function assemblyMesh(items) {
  let nv = 0, ni = 0;
  for (const it of items) { nv += it.mesh.positions.length; ni += it.mesh.indices.length; }
  const positions = new Float32Array(nv), indices = new Uint32Array(ni);
  let pv = 0, pi = 0;
  for (const it of items) {
    const P = it.mesh.positions, base = pv / 3;
    for (let i = 0; i < P.length; i += 3) { const q = V.applyMat(it.matrix, [P[i], P[i + 1], P[i + 2]]); positions[pv++] = q[0]; positions[pv++] = q[1]; positions[pv++] = q[2]; }
    for (const k of it.mesh.indices) indices[pi++] = base + k;
  }
  return { positions, indices };
}

const num = (v) => { const r = Math.abs(v) < 1e-12 ? 0 : v; return Number(r.toPrecision(9)).toString(); };
const zUp = (x, y, z) => [x, -z, y];
const Y_TO_Z = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];
const Z_TO_Y = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];

export function assembly3mf(name, parts, items) {
  const out = [];
  out.push('<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n');
  out.push(` <metadata name="Title">${xmlEsc(name)}</metadata>\n <metadata name="Application">PartCraft</metadata>\n <resources>\n`);
  const ids = new Map();
  let n = 1;
  for (const [pid, p] of parts) {
    ids.set(pid, n);
    out.push(`  <object id="${n}" type="model" name="${xmlEsc(p.name)}">\n   <mesh>\n    <vertices>\n`);
    const P = p.mesh.positions, I = p.mesh.indices;
    // objects are stored in the part's own axes turned Z up; the item transform puts them in place
    for (let i = 0; i < P.length; i += 3) { const [x, y, z] = zUp(P[i], P[i + 1], P[i + 2]); out.push(`     <vertex x="${num(x)}" y="${num(y)}" z="${num(z)}"/>\n`); }
    out.push('    </vertices>\n    <triangles>\n');
    for (let t = 0; t < I.length; t += 3) out.push(`     <triangle v1="${I[t]}" v2="${I[t + 1]}" v3="${I[t + 2]}"/>\n`);
    out.push('    </triangles>\n   </mesh>\n  </object>\n');
    n++;
  }
  out.push(' </resources>\n <build>\n');
  for (const it of items) {
    // Z-up placement: Y_TO_Z · M · Z_TO_Y; 3MF writes the 3×4 as m00 m01 m02 m10 … m30 m31 m32 (row vectors)
    const m = V.matMul(Y_TO_Z, V.matMul(it.matrix, Z_TO_Y));
    const t = [m[0], m[1], m[2], m[4], m[5], m[6], m[8], m[9], m[10], m[12], m[13], m[14]].map(num).join(' ');
    out.push(`  <item objectid="${ids.get(it.pid)}" transform="${t}"/>\n`);
  }
  out.push(' </build>\n</model>\n');
  const types = '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>\n';
  const rels = '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>\n';
  return zipStored([{ name: '[Content_Types].xml', data: types }, { name: '_rels/.rels', data: rels }, { name: '3D/3dmodel.model', data: out.join('') }]);
}
