/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/parts-list.js — the manual's parts list and balloon numbers (0.7 TP.4; DOM-free; imports manual.js only).
 * The rows come from the manual's own copy of the parts (for a PartCraft source, the same properties bom.js gave when the
 * manual was made: number, name, description, material, density).
 *
 * Balloon numbers stay put: a part gets the next number the first time it needs one (m.balloons = { next, items: { pid: n } })
 * and keeps it; `next` only grows, so a number is never given to another part, even after a part is removed (TP.10).
 *
 *   giveNumbers(m, pids) → pids that got a new number          numberOf(m, pid) → n | null
 *   rows(m, meshes, { view, scope: 'all'|'view', collapse: true }) → [{ item, qty, pids, insts, number, name, description,
 *       material, density, volume (mm³, each), massEach (g), massTotal (g), props }] in balloon order, then unnumbered by name
 *       scope 'view': only parts the view shows (not hidden, not ghosted). collapse: parts that are the same (same part
 *       number, or no number and the same name, and the same shape) are one row; collapse false: one row per placed part.
 *   COLUMNS (keys → label keys), columnValue(row, key) → text, csv(rows, columns) → CSV text (RFC 4180, CRLF, UTF-8 BOM;
 *       text cells starting = + - @ tab or CR get a leading ' so a spreadsheet does not run them)
 *   tableItems(rows, columns, label, { x, y (top-right corner, mm), size (text mm), maxW, colour, ref }) → { items, w, h }
 *       the parts list drawn as a table (display.js items), header row first; text cut to fit with an ellipsis
 *   readTable(raw) → clean view.table ({ at: [u, v] 0…1 of the picture: the corner nearest it holds the table (default bottom
 *       right), columns, scope, collapse }) or throws
 */
import { meshStats, shownInstances, registerReaders } from './manual.js';
import { textWidth, fitText, PENS, INK } from './display.js';

export const COLUMNS = ['item', 'qty', 'number', 'name', 'description', 'material', 'mass', 'massTotal', 'volume'];
export const DEFAULT_COLUMNS = ['item', 'qty', 'number', 'name', 'material'];
export const MAX_NUMBER = 999999;

export const numberOf = (m, pid) => m.balloons.items[pid] ?? null;
export function giveNumbers(m, pids) {
  const got = [];
  for (const pid of pids) {
    if (!m.parts[pid] || m.balloons.items[pid] !== undefined) continue;
    if (m.balloons.next > MAX_NUMBER) break;
    m.balloons.items[pid] = m.balloons.next++;
    got.push(pid);
  }
  return got;
}
/** Take a part's number away (its number is not given out again). */
export function dropNumber(m, pid) { delete m.balloons.items[pid]; }

const statsCache = new WeakMap();
function statsOf(mesh) {
  if (!mesh) return { volume: null };
  let s = statsCache.get(mesh);
  if (!s) { s = meshStats(mesh); statsCache.set(mesh, s); }
  return s;
}
/** Is the shape of two parts the same (corners and triangles, within a hair)? */
function sameShape(a, b) {
  if (!a || !b || a.positions.length !== b.positions.length || a.indices.length !== b.indices.length) return false;
  const sa = statsOf(a), sb = statsOf(b);
  return Math.abs(sa.volume - sb.volume) <= 1e-6 * Math.max(sa.volume, 1) && Math.abs(sa.area - sb.area) <= 1e-6 * Math.max(sa.area, 1);
}

export function rows(m, meshes, { view = null, scope = 'all', collapse = true } = {}) {
  const shown = scope === 'view' ? new Set(shownInstances(m, view).filter((i) => !view?.insts?.[i.id]?.ghost).map((i) => i.id)) : null;
  const insts = m.instances.filter((i) => !shown || shown.has(i.id));
  const out = [];
  const byKey = new Map();
  for (const inst of insts) {
    const p = m.parts[inst.part];
    let r = null;
    if (collapse) {
      r = byKey.get(inst.part);
      if (!r) r = out.find((x) => x.pids[0] !== inst.part && (p.number ? x.number === p.number : !x.number && x.name === p.name) && sameShape(meshes.get(x.pids[0]), meshes.get(inst.part)));
    }
    if (!r) {
      const vol = statsOf(meshes.get(inst.part)).volume;
      r = { item: numberOf(m, inst.part), qty: 0, pids: [inst.part], insts: [], number: p.number, name: p.name, description: p.description, material: p.material, density: p.density, volume: vol, massEach: vol !== null && p.density ? vol * p.density / 1000 : null, massTotal: null, props: { ...p.props } };
      out.push(r);
    } else if (!r.pids.includes(inst.part)) { r.pids.push(inst.part); if (r.item === null) r.item = numberOf(m, inst.part); }
    if (collapse) byKey.set(inst.part, r);
    r.qty++; r.insts.push(inst.id);
  }
  for (const r of out) r.massTotal = r.massEach === null ? null : r.massEach * r.qty;
  return out.sort((a, b) => (a.item ?? Infinity) - (b.item ?? Infinity) || a.name.localeCompare(b.name));
}

const n3 = (v) => (v === null || v === undefined ? '' : String(Number(v.toFixed(3))));
const mass = (g) => (g === null ? '' : g >= 1000 ? String(Number((g / 1000).toFixed(3))) + ' kg' : String(Number(g.toFixed(2))) + ' g');
/** A row's cell as text (masses with their unit; volume in mm³). Custom properties: 'prop:<key>'. */
export function columnValue(r, key) {
  switch (key) {
    case 'item': return r.item === null ? '' : String(r.item);
    case 'qty': return String(r.qty);
    case 'number': case 'name': case 'description': case 'material': return r[key] || '';
    case 'mass': return mass(r.massEach);
    case 'massTotal': return mass(r.massTotal);
    case 'volume': return n3(r.volume);
    default: return key.startsWith('prop:') ? r.props[key.slice(5)] || '' : '';
  }
}
/** Every column a manual's rows can show: the standard ones, then each custom property key found. */
export function columnsFor(m) {
  const keys = new Set();
  for (const p of Object.values(m.parts)) for (const k of Object.keys(p.props || {})) keys.add('prop:' + k);
  return [...COLUMNS, ...[...keys].sort()];
}

export function csvCell(v, { text = true } = {}) {
  let s = v === null || v === undefined ? '' : String(v);
  if (text && /^[=+\-@\t\r]/.test(s)) s = '\'' + s;
  return /[",\r\n]|^\s|\s$/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
const NUMERIC = new Set(['item', 'qty', 'volume']);
/** CSV of the rows; `labels` maps a column key to its heading (the caller's language). */
export function csv(list, columns, labels = (k) => k) {
  const lines = [columns.map((c) => csvCell(labels(c))).join(',')];
  for (const r of list) lines.push(columns.map((c) => csvCell(columnValue(r, c), { text: !NUMERIC.has(c) })).join(','));
  return '﻿' + lines.join('\r\n') + '\r\n';
}

const RIGHT = new Set(['item', 'qty', 'mass', 'massTotal', 'volume']);
export function tableItems(list, columns, label, { x = 0, y = 0, size = 2.5, maxW = Infinity, colour = INK, ref = 'table', corner = 'tr' } = {}) {
  const pad = size * 0.45, rowH = size * 1.7;
  const cap = { name: size * 22, description: size * 26 };
  // headers are bold: about 8% wider than the regular metrics say
  const widths = columns.map((c) => Math.min(cap[c] ?? size * 16, Math.max(textWidth(label(c), size) * 1.08, ...list.map((r) => textWidth(columnValue(r, c), size))) + 2 * pad));
  let w = widths.reduce((a, b) => a + b, 0);
  if (w > maxW) { const k = maxW / w; for (let i = 0; i < widths.length; i++) widths[i] *= k; w = maxW; }
  const h = rowH * (list.length + 1);
  const x0 = corner.endsWith('r') ? x - w : x, y1 = corner.startsWith('t') ? y : y + h, y0 = y1 - h;
  const items = [{ t: 'path', pts: [[x0, y0], [x0 + w, y0], [x0 + w, y1], [x0, y1]], closed: true, fill: '#ffffff', stroke: colour, width: PENS.edge, ref }];
  for (let r = 1; r <= list.length; r++) items.push({ t: 'path', pts: [[x0, y1 - r * rowH], [x0 + w, y1 - r * rowH]], stroke: colour, width: r === 1 ? PENS.edge : PENS.thin, ref });
  let cx = x0;
  widths.forEach((cw, i) => {
    if (i) items.push({ t: 'path', pts: [[cx, y0], [cx, y1]], stroke: colour, width: PENS.thin, ref });
    const c = columns[i], right = RIGHT.has(c);
    const tx = right ? cx + cw - pad : cx + pad, anchor = right ? 'end' : 'start';
    items.push({ t: 'text', x: tx, y: y1 - rowH + (rowH - size) / 2 + size * 0.12, text: fitText(label(c), size, cw - 2 * pad), size, anchor, bold: true, color: colour, ref });
    list.forEach((row, k) => items.push({ t: 'text', x: tx, y: y1 - rowH * (k + 2) + (rowH - size) / 2 + size * 0.12, text: fitText(columnValue(row, c), size, cw - 2 * pad), size, anchor, color: colour, ref }));
    cx += cw;
  });
  return { items, w, h, x0, y0 };
}

/** A view's parts-list table from a file (untrusted). */
export function readTable(raw, { allowed = null } = {}) {
  if (raw === null || raw === undefined) return null;
  if (typeof raw !== 'object' || Array.isArray(raw)) throw new Error('table');
  const at = Array.isArray(raw.at) && raw.at.length === 2 && raw.at.every((x) => typeof x === 'number' && x >= 0 && x <= 1) ? [...raw.at] : [0.98, 0.03];   // bottom right: clear of the view cube
  const cols = Array.isArray(raw.columns) ? raw.columns.filter((c) => typeof c === 'string' && (COLUMNS.includes(c) || /^prop:[^\u0000-\u001f]{1,40}$/.test(c)) && (!allowed || allowed.includes(c))).slice(0, 12) : [];
  return { at, columns: cols.length ? [...new Set(cols)] : [...DEFAULT_COLUMNS], scope: raw.scope === 'all' ? 'all' : 'view', collapse: raw.collapse !== false };
}

registerReaders({ table: (raw) => readTable(raw) });
