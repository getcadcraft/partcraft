/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-dwg.js — a drawing sheet (drawing.js composeSheet) as a DWG file (0.7 W3.19, the variant pack). DOM-free.
 *
 * The sheet is written at full size in model space, 1 drawing unit = 1 mm on the paper, so it prints at 1:1 and every view
 * keeps the scale its title block says. Each pen of the sheet is a layer with its lineweight and linetype (PC-VISIBLE,
 * PC-HIDDEN, PC-THIN, PC-CHAIN, PC-BORDER; fills on PC-FILL; words on PC-TEXT), so the file plots like the PDF.
 * Dimensions are the lines and figures the PDF shows, not DIMENSION objects. Same layout as DetailCraft's dwgout.js.
 *
 *   sheetDwgModel(sheet, { title }) → a cc-dwg model (docs/DWG-LIB-SPEC.md) for dwg/write.js writeDwg(model, { version })
 *   sheetDwg(sheet, { title, version }) → the DWG file's bytes (AC1015 = R2000 unless asked otherwise)
 */
import { writeDwg } from './dwg/write.js';

const CAP = 0.718;                    // Helvetica / Arial capital height per unit of font size
const r6 = (v) => Math.round(v * 1e6) / 1e6;

/** The layer a stroke of the sheet goes on, by its pen: width and dash as composeSheet sets them. */
export function layerOf(s) {
  if (s.dash && s.dash.length) return s.dash.length > 2 ? { name: 'PC-CHAIN', lt: 'PC_CHAIN' } : { name: 'PC-HIDDEN', lt: 'PC_HIDDEN' };
  if (s.width >= 0.6) return { name: 'PC-BORDER', lt: 'CONTINUOUS' };
  if (s.width >= 0.4) return { name: 'PC-VISIBLE', lt: 'CONTINUOUS' };
  return { name: 'PC-THIN', lt: 'CONTINUOUS' };
}

export function sheetDwgModel(sheet, { title = '' } = {}) {
  const layers = new Map();   // name → { name, w (1/100 mm), dash, lt }
  const use = (l, w, dash) => {
    const have = layers.get(l.name);
    if (have) have.w = Math.max(have.w, Math.round(w * 100));
    else layers.set(l.name, { ...l, w: Math.round(w * 100), dash: dash && dash.length ? dash : null });
  };
  const base = (name) => ({ layer: name, color: { index: 256 }, linetype: 'ByLayer', lineweight: -1 });
  const ents = [];
  for (const s of sheet.strokes || []) {
    if (!s.segs || !s.segs.length) continue;
    const l = layerOf(s);
    use(l, s.width, s.dash);
    for (const g of s.segs) {
      const [x1, y1, x2, y2] = g;
      if (!(Math.hypot(x2 - x1, y2 - y1) > 1e-9)) continue;
      ents.push({ ...base(l.name), type: 'LINE', start: { x: r6(x1), y: r6(y1), z: 0 }, end: { x: r6(x2), y: r6(y2), z: 0 } });
    }
  }
  if ((sheet.fills || []).length) use({ name: 'PC-FILL', lt: 'CONTINUOUS' }, 0.18, null);
  for (const f of sheet.fills || []) {
    if (!f.pts || f.pts.length < 3) continue;
    ents.push({ ...base('PC-FILL'), type: 'HATCH', solid: true, pattern: 'SOLID', style: 0, patternType: 1,
      loops: [{ flags: 1, polyline: { vertices: f.pts.map(([x, y]) => ({ x: r6(x), y: r6(y) })), closed: true } }] });
  }
  for (const t of sheet.texts || []) {
    if (!String(t.text ?? '').trim()) continue;
    if (!layers.has('PC-TEXT')) use({ name: 'PC-TEXT', lt: 'CONTINUOUS' }, 0.25, null);
    const ha = t.anchor === 'middle' ? 1 : t.anchor === 'end' ? 2 : 0;
    const at = { x: r6(t.x), y: r6(t.y), z: 0 };
    ents.push({ ...base('PC-TEXT'), type: 'TEXT', insert: at, align: ha ? at : undefined, hAlign: ha, vAlign: 0, height: r6(t.size * CAP), rotation: t.rot || 0,
      widthFactor: 1, oblique: 0, style: 'PartCraft', value: String(t.text) });
  }
  const list = [...layers.values()];
  const linetypes = [];
  for (const l of list) {
    if (!l.dash || linetypes.some((x) => x.name === l.lt)) continue;
    linetypes.push({ handle: 'A' + (linetypes.length + 1).toString(16).toUpperCase(), name: l.lt, description: l.name + ' ' + l.dash.join(' '),
      patternLength: l.dash.reduce((s, v) => s + v, 0), elements: l.dash.map((v, i) => ({ length: i % 2 ? -v : v })) });
  }
  const W = sheet.w, H = sheet.h;
  return {
    version: 'AC1015', codepage: 'ANSI_1252',
    header: { INSUNITS: 4, MEASUREMENT: 1, LUNITS: 2, LUPREC: 2, LTSCALE: 1, LIMMIN: { x: 0, y: 0 }, LIMMAX: { x: W, y: H }, EXTMIN: { x: 0, y: 0, z: 0 }, EXTMAX: { x: W, y: H, z: 0 }, ...(title ? { PROJECTNAME: title } : {}) },
    tables: {
      linetypes,
      styles: [{ name: 'PartCraft', height: 0, widthFactor: 1, oblique: 0, font: 'arial.ttf', bigFont: '' }],
      layers: list.map((l) => ({ name: l.name, color: { index: 7 }, linetype: l.dash ? l.lt : 'Continuous', lineweight: l.w, plot: true })),
    },
    blocks: [{ name: '*Model_Space', entities: ents }, { name: '*Paper_Space', entities: [] }],
    layouts: [], objects: [],
  };
}

export function sheetDwg(sheet, { title = '', version = 'AC1015' } = {}) {
  const r = writeDwg(sheetDwgModel(sheet, { title }), { version });
  return r instanceof Uint8Array ? r : r.bytes || r.data || r;
}
