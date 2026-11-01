/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-sheets.js — nested sheets (a DXF with layers SHEET / PARTS / LABELS, as lib/nest `nestDxf` and the CadCraft Cabinets
 * add-on write it) → one PartCraft CAM program per sheet → G-code through the existing posts (0.8 SU.1035 step 4b, session
 * `fab-08`). DOM-free. It adds no toolpath maths: every cut is the shared contour operation (cam-paths.js `generateProgram`,
 * offset by the tool radius, climb, lead arcs, stepdown, tabs), run over a small stand-in for the solid model.
 *
 *   sheetsFromDxf(text, { scale }) → { sheets: [{ index, w, h, parts: [{ id, label, loops, holes }] }], units, notes: [{ code, ... }] }
 *     one entry per rectangle on SHEET (top to bottom, as the sheets are drawn), the parts of PARTS whose middle lies inside it,
 *     coordinates moved so the sheet's lower left corner is (0, 0) and converted to mm (units from $INSUNITS, none = mm);
 *     a part's `label` is the LABELS text inside its outline; `holes` = the inner loops
 *   sheetPrograms(sheets, opts) → { programs: [{ sheet, program, post, info }], notes }
 *     opts: thickness (mm, required), tool ({ d, flutes, ... } a flat end mill; default 6 mm, 2 flutes), material ('wood'),
 *     stepdown, tabs, tabWidth, tabHeight, lead, breakthrough, leave, order ('holes first' always; parts in the order of the
 *     DXF's labels = the cutting order), machine { maxRpm }, coolant ('off'), post ('grbl' | 'fanuc' | 'linuxcnc' | custom id),
 *     posts (custom posts), program (first number), name
 *   sheetsGcode(text, opts) → [{ sheet, name, text, ext, notes, info }]   the whole way, one file per sheet
 *
 * Notes are codes, never prose (the dialog words them): no_sheets, no_parts, units_none, open_loops, tool_too_big, unplaced_part,
 * part_not_cut. Nothing here is run on a machine: the output says "verify before running", like every post.
 */
import * as O from './cam-offset.js';
import { readOutlines } from './nest/nest.js';
import { newTool } from './cam-tools.js';
import { newOp, newSetup } from './cam.js';
import { generateProgram } from './cam-paths.js';
import { renderPost } from './cam-postdef.js';
import { BUILTIN_POSTS } from './cam-posts-builtin.js';
import { parsePost } from './cam-postdef.js';

const SCALE = { mm: 1, cm: 10, m: 1000, in: 25.4, '': 1 };

/** A closed polyline with bulges → arcs and lines (counter-clockwise when the polyline is). */
export function loopToPrims(pts) {
  const n = pts.length, out = [];
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const s = [a.x, a.y], e = [b.x, b.y];
    const d = Math.hypot(e[0] - s[0], e[1] - s[1]);
    if (d < 1e-9) continue;
    const bu = a.b || 0;
    if (Math.abs(bu) < 1e-12) { out.push(O.line(s, e)); continue; }
    const half = d / 2, r = half * (1 + bu * bu) / (2 * Math.abs(bu));
    const off = half * (1 - bu * bu) / (2 * bu);               // signed distance from the chord's middle to the centre (left of s → e when b > 0)
    const mx = (s[0] + e[0]) / 2, my = (s[1] + e[1]) / 2;
    const nx = -(e[1] - s[1]) / d, ny = (e[0] - s[0]) / d;
    const c = [mx + nx * off, my + ny * off];
    out.push(O.arc(c, r, Math.atan2(s[1] - c[1], s[0] - c[0]), 4 * Math.atan(bu), s, e));
  }
  return out;
}
const area = (prims) => O.loopArea(prims);
const ccw = (prims) => (area(prims) >= 0 ? prims : O.reverseLoop(prims));

// a bulged segment can swing outside its end points: sample the arcs for the box
const bboxExact = (loops) => {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of loops) for (const p of loopToPrims(l)) {
    for (const q of O.samplePrim(p, 0.05)) { x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]); }
  }
  return { x0, y0, x1, y1 };
};
const within = (b, x, y) => x >= b.x0 - 1e-6 && x <= b.x1 + 1e-6 && y >= b.y0 - 1e-6 && y <= b.y1 + 1e-6;

/** TEXT / MTEXT of a layer: [{ x, y, s }] (ASCII DXF, the writer's own text). */
function layerTexts(text, layer) {
  const lines = String(text).split(/\r\n|\r|\n/), out = [];
  let cur = null;
  for (let i = 0; i + 1 < lines.length; i += 2) {
    const c = parseInt(lines[i].trim(), 10), v = lines[i + 1].trim();
    if (!Number.isFinite(c)) break;
    if (c === 0) { if (cur && cur.type !== null) out.push(cur); cur = (v === 'TEXT' || v === 'MTEXT') ? { type: v, layer: '', x: 0, y: 0, s: '' } : { type: null }; continue; }
    if (!cur || cur.type === null) continue;
    if (c === 8) cur.layer = v.toUpperCase();
    else if (c === 10) cur.x = +v; else if (c === 20) cur.y = +v;
    else if (c === 1) cur.s = v;
  }
  if (cur && cur.type !== null) out.push(cur);
  return out.filter((e) => e.layer === layer);
}

export function sheetsFromDxf(text, { scale = null } = {}) {
  const notes = [];
  const sh = readOutlines(text, { skipLayers: ['PARTS', 'LABELS', 'REMNANTS'] });
  const pt = readOutlines(text, { skipLayers: ['SHEET', 'LABELS', 'REMNANTS'] });
  // lib/nest's writer says its units by $MEASUREMENT only (0 inches, 1 metric); $INSUNITS wins when a file has it
  const meas = /\$MEASUREMENT\s*\r?\n\s*70\s*\r?\n\s*(\d)/.exec(String(text));
  const units = sh.units || pt.units || (meas ? (meas[1] === '0' ? 'in' : 'mm') : '');
  const k = scale ?? SCALE[units] ?? 1;
  if (!units) notes.push({ code: 'units_none' });
  if ([...sh.notes, ...pt.notes].some((n) => n.startsWith('open:'))) notes.push({ code: 'open_loops' });
  if (!sh.parts.length) { notes.push({ code: 'no_sheets' }); return { sheets: [], units, notes }; }
  const sheetsRaw = sh.parts.map((p) => ({ loops: p.loops, box: bboxExact([p.loops[0]]) })).sort((a, b) => b.box.y1 - a.box.y1);
  const labels = layerTexts(text, 'LABELS');
  const sheets = sheetsRaw.map((s, index) => ({ index, w: (s.box.x1 - s.box.x0) * k, h: (s.box.y1 - s.box.y0) * k, box: s.box, parts: [] }));
  let unplaced = 0;
  for (const p of pt.parts) {
    const outer = p.loops[0], b = bboxExact([outer]);
    const cx = (b.x0 + b.x1) / 2, cy = (b.y0 + b.y1) / 2;
    const s = sheets.find((q) => within(q.box, cx, cy));
    if (!s) { unplaced++; continue; }
    const move = (l) => l.map((q) => ({ x: (q.x - s.box.x0) * k, y: (q.y - s.box.y0) * k, ...(q.b ? { b: q.b } : {}) }));
    const lab = labels.find((t) => within(b, t.x, t.y));
    s.parts.push({ id: lab ? lab.s : '', label: lab ? lab.s : '', loops: [move(outer)], holes: p.loops.slice(1).map(move), _labelAt: lab ? labels.indexOf(lab) : Infinity });
  }
  if (unplaced) notes.push({ code: 'unplaced_part', n: unplaced });
  // the cutting order = the order the labels were written (the DXF writer puts them in the nest order); unlabelled parts last
  for (const s of sheets) { s.parts.sort((a, b) => a._labelAt - b._labelAt); for (const p of s.parts) delete p._labelAt; }
  if (!sheets.some((s) => s.parts.length)) notes.push({ code: 'no_parts' });
  return { sheets: sheets.map(({ box, ...s }) => s), units, notes };
}

/** The stand-in solid the shared contour operation reads: flat faces at the top of the sheet, each with the loops to follow. */
function standIn(w, h, thickness, faces) {
  return {
    stock: { kind: 'box', min: [0, 0, -thickness], max: [w, h, 0], c: null, r: null },
    top: 0, bottom: -thickness, tol: 1e-6,
    faces: faces.map(() => ({ type: 'plane', n: [0, 0, 1] })),
    faceIndex: (ref) => ref.i,
    faceLoops: (i) => ({ z: 0, loops: faces[i] }),
  };
}

export function sheetPrograms(sheets, opts = {}) {
  const thickness = Number(opts.thickness);
  if (!(thickness > 0)) throw new Error('thickness');
  const notes = [];
  const tool = opts.tool?.id ? opts.tool : newTool('flat', { id: 'sheet-tool', number: 1, d: 6, flutes: 2, fluteLen: Math.max(20, thickness + 5), ...(opts.tool || {}) });
  const post = opts.post || 'grbl';
  const setup = { ...newSetup(), material: opts.material || 'wood', program: opts.program || 1001, coolant: opts.coolant || 'off',
    origin: 'stock-bottom-min' === opts.origin ? 'stock-bottom-min' : 'stock-top-min', machine: { post, maxRpm: opts.machine?.maxRpm || 24000, rapid: 8000, toolChange: 15 } };
  const base = { stepdown: opts.stepdown ?? Math.max(2, Math.min(thickness, tool.d)), tabs: opts.tabs ?? 0, tabWidth: opts.tabWidth ?? 6, tabHeight: opts.tabHeight ?? 2,
    lead: opts.lead ?? 0.5, breakthrough: opts.breakthrough ?? 1, leave: opts.leave ?? 0, climb: true, holes: false };
  const defs = { ...BUILTIN_POSTS };
  const customs = new Map((opts.posts || []).map((p) => [p.id, p.text]));
  const textOf = (id) => (id.startsWith('custom:') ? customs.get(id.slice(7)) : defs[id]);
  const postText = textOf(post);
  if (!postText) throw new Error('post');
  const def = parsePost(postText);
  const out = [];
  let n = 0;
  for (const s of sheets) {
    if (!s.parts.length) continue;
    const faces = [], ops = [];
    const add = (loops, side, bottomFull, name, id) => {
      faces.push(loops);
      ops.push(newOp('contour', { id: 'op' + (++n), name, tool: tool.id, geo: { faces: [{ i: faces.length - 1 }] },
        params: { ...base, side, ...(bottomFull ? { bottom: -thickness - base.breakthrough } : {}) } }));
    };
    // every hole and cut-out first, then the outlines, so a part never moves while it is still being cut
    for (const p of s.parts) p.holes.forEach((hl, i) => add([ccw(loopToPrims(hl))], 'inside', true, (p.label || 'Part') + ' hole ' + (i + 1)));
    for (const p of s.parts) add(O.orientRegion([ccw(loopToPrims(p.loops[0]))]), 'outside', false, p.label || 'Part');
    const model = standIn(s.w, s.h, thickness, faces);
    const study = { setup, tools: [tool], ops, posts: opts.posts || [] };
    const prog = generateProgram(study, null, { model });
    const bad = prog.paths.filter((x) => x.error || !x.moves.length);
    if (bad.length) notes.push({ code: 'part_not_cut', sheet: s.index + 1, n: bad.length, why: bad[0].error || (bad[0].warnings || [])[0] || '' });
    if (prog.paths.some((x) => (x.warnings || []).some((w) => /fit|big|large/i.test(String(w))))) notes.push({ code: 'tool_too_big', sheet: s.index + 1 });
    const info = { parts: s.parts.length, holes: s.parts.reduce((a, p) => a + p.holes.length, 0), w: s.w, h: s.h };
    prog.setup = { ...setup, program: setup.program + out.length };
    out.push({ sheet: s.index + 1, program: prog, post, info });
  }
  return { programs: out, notes, def };
}

export function sheetsGcode(text, opts = {}) {
  const r = sheetsFromDxf(text, { scale: opts.scale ?? null });
  if (!r.sheets.length) return { files: [], notes: r.notes };
  const { programs, notes, def } = sheetPrograms(r.sheets, opts);
  const name = opts.name || 'Sheet';
  const files = programs.map((p) => {
    const o = renderPost(def, p.program, { name: name + ' ' + p.sheet });
    return { sheet: p.sheet, name: name + '-' + String(p.sheet).padStart(2, '0'), text: o.text, ext: o.ext, info: p.info };
  });
  return { files, notes: r.notes.concat(notes) };
}
