/* SPDX-License-Identifier: Apache-2.0 */
/**
 * kicad.js — a KiCad board (.kicad_pcb) as a PartCraft part, so an enclosure can be designed around it (0.8 SU.897, owner 2026-10-29:
 * "a box per part with an editable height is enough for 0.8"). DOM-free; tools/partcraft-test/test-kicad.mjs drives it in Node.
 * Clean room: written from KiCad's published file-format documentation (S-expression board format); no KiCad code or library is
 * read or linked, and nothing is written back to KiCad. Units are mm.
 *
 *   parseSexp(text)       → the tree: arrays of atoms (strings; a quoted string is { s } so a name never reads as a keyword)
 *   readBoard(text)       → { thickness, loops [[ [x, y] … ] closed outlines, Y up], holes [{ x, y, d, plated, slot }],
 *                             parts [{ ref, footprint, side 'F'|'B', box [[x, y] × 4], size [w, d], model, height }], notes [string] }
 *   boardPart(board, o)   → a part (part.js shape): the board extruded down from the top plane, its holes cut through, and one body
 *                             per component whose height is a parameter `h_<ref>` (Parameters panel) — the guess is a placeholder
 *   importKicad(text, name) → { part, board, report: [lines] }
 *
 * Conventions (UNVERIFIED against real boards until three of them arrive, docs/community-tests/SU.897.md): KiCad's Y points down,
 * so every Y is negated once, here; a footprint's `(at x y angle)` is counter-clockwise on screen, i.e. counter-clockwise after the
 * flip. A component's box is its courtyard (F.CrtYd / B.CrtYd) when it has one, else the bounding box of its pads. KiCad stores a
 * part's height only in its 3-D model, so the height is a guess from the reference letter, said in the report. Copper, zones, nets,
 * silkscreen and 3-D model files are not read (a STEP body is the follow-up).
 */
import * as P from './part.js';
import * as S from './sketch.js';

export class KicadError extends Error {}   // i18n-ignore (developer message: the importer shows the report, not this)

/** S-expression tokens → nested arrays. Strings in quotes become { s }. */
export function parseSexp(text) {
  const src = String(text).replace(/^﻿/, '');
  let i = 0;
  const n = src.length;
  const stack = [[]];
  while (i < n) {
    const c = src[i];
    if (c === '(') { const a = []; stack[stack.length - 1].push(a); stack.push(a); i++; if (stack.length > 200) throw new KicadError('nested too deeply'); }
    else if (c === ')') { if (stack.length < 2) throw new KicadError('unbalanced ")"'); stack.pop(); i++; }
    else if (c === '"') {
      let s = ''; i++;
      while (i < n && src[i] !== '"') { if (src[i] === '\\' && i + 1 < n) { i++; s += src[i] === 'n' ? '\n' : src[i]; } else s += src[i]; i++; }
      if (i >= n) throw new KicadError('unterminated string');
      i++; stack[stack.length - 1].push({ s });
    } else if (/\s/.test(c)) i++;
    else { let j = i; while (j < n && !/[\s()"]/.test(src[j])) j++; stack[stack.length - 1].push(src.slice(i, j)); i = j; }
  }
  if (stack.length !== 1) throw new KicadError('unbalanced "("');
  return stack[0];
}

const txt = (x) => (x && typeof x === 'object' && !Array.isArray(x) ? x.s : x);
const kids = (node, key) => node.filter((x) => Array.isArray(x) && txt(x[0]) === key);
const kid = (node, key) => kids(node, key)[0] || null;
const num = (x, d = 0) => { const v = parseFloat(txt(x)); return Number.isFinite(v) ? v : d; };
const xy = (node) => (node ? [num(node[1]), num(node[2])] : null);
const rad = (deg) => deg * Math.PI / 180;

/** Height guesses by reference letters (mm). Placeholders: the person edits them. */
const HEIGHTS = [[/^(R|RN|FB|F|D|LED)$/, 1], [/^(C|CP|L|Q|TP|Y|X)$/, 2.5], [/^(U|IC|IC\d*)$/, 2], [/^(J|P|CN|USB|JP)$/, 8], [/^(SW|S|BT|K|RV|RLY)$/, 6]];
export function guessHeight(ref) {
  const letters = String(ref).replace(/[^A-Za-z].*$/, '').toUpperCase();
  for (const [re, h] of HEIGHTS) if (re.test(letters)) return h;
  return 3;
}

function arcPoints(c, r, a0, sweep) {
  const steps = Math.max(2, Math.ceil(Math.abs(sweep) / rad(7.5)));
  return Array.from({ length: steps + 1 }, (_, k) => { const a = a0 + sweep * k / steps; return [c[0] + r * Math.cos(a), c[1] + r * Math.sin(a)]; });
}
/** The arc through three points: [centre, radius, start angle, signed sweep] or null for collinear points. */
function threePoint(a, m, b) {
  const d = 2 * (a[0] * (m[1] - b[1]) + m[0] * (b[1] - a[1]) + b[0] * (a[1] - m[1]));
  if (Math.abs(d) < 1e-12) return null;
  const f = (p) => p[0] * p[0] + p[1] * p[1];
  const cx = (f(a) * (m[1] - b[1]) + f(m) * (b[1] - a[1]) + f(b) * (a[1] - m[1])) / d;
  const cy = (f(a) * (b[0] - m[0]) + f(m) * (a[0] - b[0]) + f(b) * (m[0] - a[0])) / d;
  const c = [cx, cy], r = Math.hypot(a[0] - cx, a[1] - cy);
  const ang = (p) => Math.atan2(p[1] - cy, p[0] - cx);
  const a0 = ang(a), am = ang(m), a1 = ang(b);
  const wrap = (v) => ((v % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const ccw = wrap(a1 - a0), mid = wrap(am - a0);
  return [c, r, a0, mid <= ccw ? ccw : ccw - 2 * Math.PI];
}

/** Closed loops from loose pieces (each a list of points), joined where ends meet within 1e-3 mm. */
function chain(pieces, notes) {
  const left = pieces.map((p) => p.slice());
  const near = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) < 1e-3;
  const loops = [];
  while (left.length) {
    const cur = left.shift();
    let grew = true;
    while (grew && !near(cur[0], cur[cur.length - 1])) {
      grew = false;
      for (let k = 0; k < left.length; k++) {
        const p = left[k], end = cur[cur.length - 1];
        if (near(p[0], end)) cur.push(...p.slice(1));
        else if (near(p[p.length - 1], end)) cur.push(...p.slice(0, -1).reverse());
        else continue;
        left.splice(k, 1); grew = true; break;
      }
    }
    if (near(cur[0], cur[cur.length - 1]) && cur.length > 3) loops.push(cur.slice(0, -1));
    else notes.push('An outline piece does not close (' + cur.length + ' points); it was left out.');
  }
  return loops;
}

/** Local point → board point (Y flipped once; angle counter-clockwise after the flip). */
const place = (at, rot, p) => {
  const lx = p[0], ly = -p[1], a = rad(rot);
  return [at[0] + lx * Math.cos(a) - ly * Math.sin(a), -at[1] + lx * Math.sin(a) + ly * Math.cos(a)];
};

export function readBoard(text) {
  const root = parseSexp(text).find((x) => Array.isArray(x) && txt(x[0]) === 'kicad_pcb');
  if (!root) throw new KicadError('This is not a KiCad board (no kicad_pcb).');
  const notes = [];
  const thickness = num(kid(kid(root, 'general') || [], 'thickness')?.[1], 1.6) || 1.6;
  const edge = [];
  const flipPts = (pts) => pts.map(([x, y]) => [x, -y]);
  for (const g of root.filter(Array.isArray)) {
    const k = txt(g[0]);
    if (!['gr_line', 'gr_arc', 'gr_circle', 'gr_rect', 'gr_poly'].includes(k)) continue;
    const layer = txt(kid(g, 'layer')?.[1]);
    if (layer !== 'Edge.Cuts') continue;
    const s = xy(kid(g, 'start')), e = xy(kid(g, 'end')), m = xy(kid(g, 'mid')), c = xy(kid(g, 'center'));
    if (k === 'gr_line' && s && e) edge.push(flipPts([s, e]));
    else if (k === 'gr_rect' && s && e) edge.push(flipPts([s, [e[0], s[1]], e, [s[0], e[1]], s]));
    else if (k === 'gr_circle' && c && e) { const r = Math.hypot(e[0] - c[0], e[1] - c[1]); const pts = arcPoints([c[0], c[1]], r, 0, 2 * Math.PI); edge.push(flipPts(pts)); }
    else if (k === 'gr_poly') { const pts = (kid(kid(g, 'pts') || [], 'xy') ? kids(kid(g, 'pts'), 'xy').map(xy) : []); if (pts.length > 2) edge.push(flipPts([...pts, pts[0]])); }
    else if (k === 'gr_arc' && s && e) {
      if (m) { const a = threePoint(s, m, e); if (a) edge.push(flipPts(arcPoints(a[0], a[1], a[2], a[3]))); else edge.push(flipPts([s, e])); }
      else { const ang = num(kid(g, 'angle')?.[1]); const r = Math.hypot(e[0] - s[0], e[1] - s[1]); const a0 = Math.atan2(e[1] - s[1], e[0] - s[0]); edge.push(flipPts(arcPoints(s, r, a0, rad(ang)))); notes.push('An old-format arc (centre, end, angle) was read; its direction is unchecked.'); }
    }
  }
  const loops = chain(edge, notes);
  if (!loops.length) notes.push('No closed board outline was found on Edge.Cuts.');
  const holes = [], parts = [];
  const seen = new Set();
  for (const f of root.filter(Array.isArray)) {
    const k = txt(f[0]);
    if (k !== 'footprint' && k !== 'module') continue;
    const at = kid(f, 'at') ? [num(kid(f, 'at')[1]), num(kid(f, 'at')[2])] : [0, 0];
    const rot = num(kid(f, 'at')?.[3]);
    const side = /^B\./.test(txt(kid(f, 'layer')?.[1]) || '') ? 'B' : 'F';
    let ref = '';
    for (const p of kids(f, 'property')) if (txt(p[1]) === 'Reference') ref = String(txt(p[2]) || '');
    if (!ref) for (const t of kids(f, 'fp_text')) if (txt(t[1]) === 'reference') ref = String(txt(t[2]) || '');
    if (!ref) ref = 'part' + (parts.length + 1);
    const local = [];
    const court = [];
    let pads = 0, npPads = 0;
    for (const g of f.filter(Array.isArray)) {
      const gk = txt(g[0]);
      const layer = txt(kid(g, 'layer')?.[1]) || '';
      if (/CrtYd/.test(layer)) {
        if (gk === 'fp_line' || gk === 'fp_rect') { const s = xy(kid(g, 'start')), e = xy(kid(g, 'end')); if (s && e) court.push(s, e); }
        else if (gk === 'fp_circle') { const c = xy(kid(g, 'center')), e = xy(kid(g, 'end')); if (c && e) { const r = Math.hypot(e[0] - c[0], e[1] - c[1]); court.push([c[0] - r, c[1] - r], [c[0] + r, c[1] + r]); } }
        else if (gk === 'fp_poly') for (const p of kids(kid(g, 'pts') || [], 'xy')) court.push(xy(p));
      }
      if (gk === 'pad') {
        const pat = xy(kid(g, 'at')) || [0, 0], size = xy(kid(g, 'size')) || [0, 0], prot = num(kid(g, 'at')?.[3]);
        const quarter = Math.abs(Math.round(prot / 90)) % 2 === 1;
        const [w, h] = quarter ? [size[1], size[0]] : size;
        local.push([pat[0] - w / 2, pat[1] - h / 2], [pat[0] + w / 2, pat[1] + h / 2]);
        const kind = txt(g[2]);
        pads++; if (kind === 'np_thru_hole') npPads++;
        const dr = kid(g, 'drill');
        if (dr && (kind === 'thru_hole' || kind === 'np_thru_hole')) {
          const oval = txt(dr[1]) === 'oval';
          const d = oval ? Math.min(num(dr[2]), num(dr[3])) : num(dr[1]);
          const slot = oval && Math.abs(num(dr[2]) - num(dr[3])) > 1e-6;
          if (d > 0) { const [hx, hy] = place(at, rot, pat); holes.push({ x: hx, y: hy, d, plated: kind === 'thru_hole', slot }); if (slot) notes.push('A slot (oval drill) on ' + ref + ' was cut as a round hole of its smaller width.'); }
        }
      }
    }
    if (!court.length && pads && pads === npPads) continue;   // a mounting hole: the hole is cut, nothing stands up
    const pts = court.length ? court : local;
    if (!pts.length) { notes.push(ref + ' has no courtyard or pads; no box was made for it.'); continue; }
    const x0 = Math.min(...pts.map((p) => p[0])), x1 = Math.max(...pts.map((p) => p[0])), y0 = Math.min(...pts.map((p) => p[1])), y1 = Math.max(...pts.map((p) => p[1]));
    let name = ref, n = 2;
    while (seen.has(name)) name = ref + '_' + n++;
    seen.add(name);
    parts.push({ ref: name, footprint: String(txt(f[1]) || ''), side, box: [[x0, y0], [x1, y0], [x1, y1], [x0, y1]].map((p) => place(at, rot, p)), size: [x1 - x0, y1 - y0],
      model: txt(kid(f, 'model')?.[1]) || null, height: guessHeight(ref), fromCourtyard: court.length > 0 });
  }
  return { thickness, loops, holes, parts, notes };
}

const ident = (ref) => 'h_' + String(ref).replace(/[^A-Za-z0-9]/g, '_');

/** A closed polygon of lines with coincident corners. */
function polygon(sk, pts) {
  const lines = pts.map((p, i) => S.addLine(sk, p, pts[(i + 1) % pts.length]));
  for (let i = 0; i < lines.length; i++) S.addConstraint(sk, 'coincident', [lines[i].p2, lines[(i + 1) % lines.length].p1]);
}

export function boardPart(board, { name = 'Board' } = {}) {
  if (!board.loops.length) throw new KicadError('The board has no closed outline, so there is nothing to build.');
  const part = P.newPart(name);
  const vars = [{ name: 'board_t', expr: String(+board.thickness.toFixed(4)) }];
  const links = [];
  const TOP = { kind: 'base', name: 'top' };
  const sketch = (plane, draw) => { const sk = S.newSketch(); draw(sk); return P.addFeature(part, 'sketch', { plane, sketch: sk }); };
  const sb = sketch(TOP, (sk) => { for (const l of board.loops) polygon(sk, l); for (const h of board.holes) S.addCircle(sk, [h.x, h.y], h.d / 2); });
  const eb = P.addFeature(part, 'extrude', { sketch: sb.id, depth: board.thickness, reverse: true });
  links.push({ target: eb.id + '.depth', expr: 'board_t' });
  const under = { kind: 'fixed', o: [0, -board.thickness, 0], n: [0, 1, 0] };
  for (const p of board.parts) {
    const v = ident(p.ref);
    vars.push({ name: v, expr: String(p.height) });
    const s = sketch(p.side === 'B' ? under : TOP, (sk) => polygon(sk, p.box));
    const e = P.addFeature(part, 'extrude', { sketch: s.id, op: 'add', depth: p.height, reverse: p.side === 'B' });
    e.name = p.ref;
    links.push({ target: e.id + '.depth', expr: v });
  }
  part.params = { vars, links };
  return part;
}

export function importKicad(text, name = 'Board') {
  const board = readBoard(text);
  const part = boardPart(board, { name: String(name).replace(/\.kicad_pcb$/i, '') || 'Board' });
  const report = [
    'Board ' + board.thickness + ' mm thick, ' + board.loops.length + ' outline' + (board.loops.length === 1 ? '' : 's') + ', ' + board.holes.length + ' holes, ' + board.parts.length + ' parts as boxes.',
    'Part heights are placeholders guessed from the reference letter (KiCad keeps them only in the 3-D model): edit h_<reference> in Parameters.',
    ...(board.parts.some((p) => p.model) ? ['The 3-D models the footprints name were not loaded.'] : []),
    ...board.notes,
  ];
  return { part, board, report };
}
