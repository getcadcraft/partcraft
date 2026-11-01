/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-features.js — the data side of PartCraft's two print features (0.8 SU.929 step 5 and SU.934; DOM-free). Written by
 * session `model-08` for `engineer`, who mounts it in the feature tree (design-features.js / part.js / the Design panel). part.js
 * keeps the document; this module holds the defaults, the untrusted-file reader, and the two evaluators. Like the other
 * features it is a node in the tree whose parameters stay editable: change the factor or the bed, the result is made again.
 *
 *   scale   { factors: [fx, fy, fz] (each > 0), about: 'center'|'min'|'base'|'origin', shrink: null | { pct: [px, py, pz], mode } }
 *           When `shrink` is set the factors come from it (a shrinkage allowance: a pattern bigger by the percent the cast part
 *           will shrink); the pair is kept so the allowance can be edited as a percent. 'mode' is 'add' (1 + p/100) or 'exact'
 *           (1 / (1 − p/100)). `about` is a point of the body's box that stays put.
 *   split   { mode: 'bed'|'planes', bed: [x, y, z] (mm), planes: [{ n: [1,0,0]|[0,1,0]|[0,0,1], d }] (mm), + print-split.js's options:
 *           connector, clearance, wall, perFace, pegD … magnetH, numbers, textH, place }  — a body cut into pieces that fit the bed,
 *           each piece a new body (op 'new'), numbered, with connectors and the joint numbers engraved.
 *
 *   scaleFactors(f) → [fx, fy, fz]            what a scale feature multiplies by (from `shrink` when set)
 *   scaleMatrix(box, f) → 16 numbers (column-major, as part.js uses)   box = { min, max } of the body, any unit (the matrix is unit-free)
 *   scaleTris(tris, f) → tris scaled in place of copy, with its box found from the triangles
 *   runSplit(M, tris, f) → print-split.js's result ({ pieces, pins, joints, planes, … }); tris = [{p:[a,b,c]}] or [[a,b,c]] in mm
 *   cleanPrintFeature(type, raw) → the feature's parameters from an untrusted file (defaults fill what is missing), or null
 */
import { parseFactors, shrinkFactor, SHRINK_MODES } from './scale-factors.js';
import { SPLIT_DEFAULTS, CONNECTORS, splitForPrint } from './print-split.js';

export const PRINT_TYPES = ['scale', 'split'];
export const SCALE_ABOUT = ['center', 'min', 'base', 'origin'];
export const PRINT_DEFAULTS = {
  scale: () => ({ factors: [1, 1, 1], about: 'center', shrink: null }),
  split: () => ({ mode: 'bed', bed: [220, 220, 250], planes: [], ...SPLIT_DEFAULTS }),
};

const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const triple = (a, ok) => Array.isArray(a) && a.length === 3 && a.every((v) => fin(v) && ok(v));

export function scaleFactors(f) {
  const s = f.shrink;
  if (s && Array.isArray(s.pct)) return s.pct.map((p) => shrinkFactor(p, s.mode) ?? 1);
  return f.factors.slice();
}

export function scaleMatrix(box, f) {
  const fs = scaleFactors(f);
  const a = f.about === 'origin' ? [0, 0, 0] : f.about === 'min' ? box.min.slice()
    : f.about === 'base' ? [(box.min[0] + box.max[0]) / 2, (box.min[1] + box.max[1]) / 2, box.min[2]] : [0, 1, 2].map((i) => (box.min[i] + box.max[i]) / 2);
  // x' = f·(x − a) + a  →  column-major 4×4 with the translation a·(1 − f)
  return [fs[0], 0, 0, 0, 0, fs[1], 0, 0, 0, 0, fs[2], 0, a[0] * (1 - fs[0]), a[1] * (1 - fs[1]), a[2] * (1 - fs[2]), 1];
}

const corners = (tr) => (Array.isArray(tr) ? tr : tr.p);
export function scaleTris(tris, f) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const tr of tris) for (const p of corners(tr)) for (let i = 0; i < 3; i++) { if (p[i] < min[i]) min[i] = p[i]; if (p[i] > max[i]) max[i] = p[i]; }
  const m = scaleMatrix({ min, max }, f);
  const at = (p) => [m[0] * p[0] + m[12], m[5] * p[1] + m[13], m[10] * p[2] + m[14]];
  return tris.map((tr) => (Array.isArray(tr) ? tr.map(at) : { ...tr, p: tr.p.map(at) }));
}

export function runSplit(M, tris, f) {
  const o = { ...f };
  delete o.mode;
  if (f.mode === 'bed') { o.bed = f.bed; delete o.planes; } else { o.planes = f.planes; delete o.bed; }
  return splitForPrint(M, tris.map((tr) => ({ p: corners(tr) })), o);
}

/** The parameters of a print feature from a file (untrusted), or null when it is not one of ours. */
export function cleanPrintFeature(type, raw) {
  if (!PRINT_TYPES.includes(type) || !raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out = PRINT_DEFAULTS[type]();
  if (type === 'scale') {
    if (triple(raw.factors, (v) => v > 1e-6 && v < 1e6)) out.factors = raw.factors.slice();
    else if (typeof raw.factors === 'string') { const fs = parseFactors(raw.factors.replace(/,/g, ';')); if (fs) out.factors = fs; }
    if (SCALE_ABOUT.includes(raw.about)) out.about = raw.about;
    const s = raw.shrink;
    if (s && typeof s === 'object' && triple(s.pct, (v) => v >= 0 && v < 50)) out.shrink = { pct: s.pct.slice(), mode: SHRINK_MODES.includes(s.mode) ? s.mode : 'add' };
    return out;
  }
  if (raw.mode === 'planes') out.mode = 'planes';
  if (triple(raw.bed, (v) => v >= 20 && v <= 2000)) out.bed = raw.bed.slice();
  if (Array.isArray(raw.planes)) {
    out.planes = raw.planes.slice(0, 64).filter((p) => p && triple(p.n, (v) => v === 0 || v === 1) && p.n.filter((v) => v === 1).length === 1 && fin(p.d)).map((p) => ({ n: p.n.slice(), d: p.d }));
  }
  if (CONNECTORS.includes(raw.connector)) out.connector = raw.connector;
  const range = { clearance: [0, 2], wall: [0.8, 10], perFace: [1, 8], pegD: [2, 30], pegL: [2, 40], keyW: [2, 30], keyL: [2, 40], dovetailW: [2, 40], dovetailH: [1, 20], dovetailAngle: [5, 30],
    dowelD: [2, 20], dowelL: [4, 80], magnetD: [2, 40], magnetH: [0.5, 20], textH: [1, 30], textMin: [1, 30], textDepth: [0.1, 3] };
  for (const [k, [lo, hi]] of Object.entries(range)) if (fin(raw[k]) && raw[k] >= lo && raw[k] <= hi) out[k] = raw[k];
  if (typeof raw.numbers === 'boolean') out.numbers = raw.numbers;
  if (raw.place && typeof raw.place === 'object' && !Array.isArray(raw.place)) {
    const place = {};
    for (const [k, v] of Object.entries(raw.place).slice(0, 256)) if (/^\d+-\d+$/.test(k) && Array.isArray(v)) place[k] = v.slice(0, 64).filter((p) => triple(p, () => true)).map((p) => p.slice());
    out.place = Object.keys(place).length ? place : null;
  }
  return out;
}
