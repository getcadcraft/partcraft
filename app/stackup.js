/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stackup.js — tolerance stack-ups in an assembly (0.6 LC.18, session `lc-make`). DOM-free.
 *
 * A chain of dimensions, measured along one direction, closes on a gap (or any result dimension). Each link is a part's
 * dimension or an interface between two parts; each has a nominal, which way it adds, and a tolerance.
 *
 *   stack = { id 's<n>', name, dir: [x, y, z] (unit, assembly coordinates), spec: { min?, max? } | null (the gap's limits, mm),
 *             links: [link] }
 *   link  = { id 'l<n>', label, inst (assembly instance id | null), sign +1 | −1 (which way it adds round the loop),
 *             nominal (mm ≥ 0), up, lo (the deviations, mm: +0.1 / −0.05; up ≥ lo), sens (sensitivity, default 1),
 *             source 'typed' | 'gdt' | 'general' | 'interface' | 'measured', ref? (the GD&T note id or the general text) }
 *
 *   analyze(stack) → { nominal, mean, wc: {tol, min, max}, rss: {tol, sigma, min, max}, rows (ranked), spec checks }
 *     link i: a = sign·sens, mean m = nominal + (up + lo)/2, half tolerance t = (up − lo)/2.
 *     gap nominal Σ a·nominal, gap mean Σ a·m (unequal deviations shift the mean: the textbook "mean shift").
 *     worst case ± Σ|a|t;  RSS ± √Σ(a t)², each tolerance taken as ±3σ of a normal spread round its mean (σ = t/3).
 *     contributions: worst case |a|t / Σ|a|t, RSS (a t)² / Σ(a t)²; rows ranked by their RSS share, then worst case.
 *     against spec: worst case in or out; RSS: the share of assemblies expected outside the limits (normal), in ppm.
 *   fromPicks(picks, dir) → links   picks [{inst, at: [x, y, z] (assembly coordinates), label}] in the order clicked: s = dir·at;
 *     between picks on one instance a part dimension (nominal |Δs|, sign of Δs), between instances an interface (tolerance 0)
 *   GDT_CHAR → how a feature control frame's tolerance enters a stack; fromGdt(note) → { up, lo, kind, words[] } | null
 *   generalTol(text, nominal) → { up, lo, rule } | null   "±0.1", "+0.2/-0.1", "ISO 2768-m" (f, m, c, v; Table 1 linear)
 *   readStackups(raw, instIds) → [stack]   untrusted (a file): bad links dropped, numbers range-checked, at most 50 × 100
 *   normalTail(z) = P(Z > z) · csv(stack, res) → text (RFC 4180, a leading ' before = + − @)
 */
import { t } from './i18n.js';

export const LIMITS = { stacks: 50, links: 100, mm: 1e6, tol: 1e4, label: 80, name: 60 };
export const SOURCES = ['typed', 'gdt', 'general', 'interface', 'measured'];

// ------------------------------------------------------------------------------------------------ analysis

/** P(Z > z) for a standard normal (erfc, fractional error < 1.2e-7 everywhere: Numerical Recipes' erfcc). */
export function normalTail(z) {
  const x = z / Math.SQRT2, ax = Math.abs(x);
  const k = 1 / (1 + 0.5 * ax);
  const r = k * Math.exp(-ax * ax - 1.26551223 + k * (1.00002368 + k * (0.37409196 + k * (0.09678418 + k * (-0.18628806 + k * (0.27886807 + k * (-1.13520398 + k * (1.48851587 + k * (-0.82215223 + k * 0.17087277)))))))));
  const erfc = x >= 0 ? r : 2 - r;
  return erfc / 2;
}

export function analyze(stack) {
  const rows = [];
  let nominal = 0, mean = 0, wc = 0, ss = 0;
  for (const l of stack.links || []) {
    const a = (l.sign < 0 ? -1 : 1) * (Number.isFinite(l.sens) ? l.sens : 1);
    const m = l.nominal + (l.up + l.lo) / 2, tt = (l.up - l.lo) / 2;
    nominal += a * l.nominal; mean += a * m; wc += Math.abs(a) * tt; ss += (a * tt) ** 2;
    rows.push({ link: l, a, mean: m, t: tt, wc: Math.abs(a) * tt, rss2: (a * tt) ** 2 });
  }
  const rss = Math.sqrt(ss);
  for (const r of rows) { r.wcShare = wc > 0 ? r.wc / wc : 0; r.rssShare = ss > 0 ? r.rss2 / ss : 0; }
  const ranked = rows.slice().sort((x, y) => y.rssShare - x.rssShare || y.wcShare - x.wcShare);
  ranked.forEach((r, i) => { r.rank = i + 1; });
  const out = { nominal, mean, wc: { tol: wc, min: mean - wc, max: mean + wc }, rss: { tol: rss, sigma: rss / 3, min: mean - rss, max: mean + rss }, rows: ranked };
  const sp = stack.spec;
  if (sp && (Number.isFinite(sp.min) || Number.isFinite(sp.max))) {
    const lo = Number.isFinite(sp.min) ? sp.min : -Infinity, hi = Number.isFinite(sp.max) ? sp.max : Infinity;
    const sigma = rss / 3;
    const below = Number.isFinite(lo) ? (sigma > 0 ? normalTail((mean - lo) / sigma) : (mean < lo ? 1 : 0)) : 0;
    const above = Number.isFinite(hi) ? (sigma > 0 ? normalTail((hi - mean) / sigma) : (mean > hi ? 1 : 0)) : 0;
    out.spec = {
      min: lo, max: hi,
      wcOk: out.wc.min >= lo - 1e-12 && out.wc.max <= hi + 1e-12,
      rssOk: out.rss.min >= lo - 1e-12 && out.rss.max <= hi + 1e-12,
      below, above, ppm: (below + above) * 1e6,
    };
  }
  return out;
}

// ------------------------------------------------------------------------------------------------ building a chain

/** Picks in the order clicked → links (see the header). */
export function fromPicks(picks, dir, labels = {}) {
  const d = unit(dir);
  const links = [];
  for (let i = 0; i + 1 < picks.length; i++) {
    const a = picks[i], b = picks[i + 1];
    const ds = dot(d, b.at) - dot(d, a.at);
    const same = a.inst === b.inst;
    const nominal = round(Math.abs(ds));
    links.push({
      id: 'l' + (i + 1), label: same ? (labels.part ? labels.part(a, b) : (a.label || '') + ' → ' + (b.label || '')) : (labels.iface ? labels.iface(a, b) : ''),
      inst: same ? a.inst : null, sign: ds < 0 ? -1 : 1, nominal, up: 0, lo: 0, sens: 1, source: same ? 'measured' : 'interface',
    });
  }
  return links;
}
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const unit = (v) => { const L = Math.hypot(v[0], v[1], v[2]); return L > 1e-12 ? [v[0] / L, v[1] / L, v[2] / L] : [1, 0, 0]; };
const round = (v) => Math.round(v * 1e9) / 1e9;

// ------------------------------------------------------------------------------------------------ tolerances from the parts

/**
 * How each GD&T characteristic (gdt.js, ASME Y14.5) enters a one-direction stack. All give ± half the tolerance zone at the
 * controlled surface or axis; the kind decides the words shown:
 *   location / profile / runout: the surface or axis may lie anywhere in the zone — ±tol/2 (position and runout zones are
 *     round: along any one direction the axis still moves ±tol/2).
 *   orientation: the surface may tilt within the zone — ±tol/2 where the stack meets it, inside the size tolerance.
 *   form: usually inside the size tolerance already (Rule #1) — add it only when the stack meets the surface at a high point.
 * Material condition modifiers (Ⓜ, Ⓛ): the zone is taken at its stated size; the bonus a feature gains away from MMC/LMC is
 * not counted (say so). */
export const GDT_CHAR = {
  position: 'location', concentricity: 'location', symmetry: 'location',
  profileSurface: 'profile', profileLine: 'profile',
  circularRunout: 'runout', totalRunout: 'runout',
  perpendicularity: 'orientation', parallelism: 'orientation', angularity: 'orientation',
  flatness: 'form', straightness: 'form', circularity: 'form', cylindricity: 'form',
};

export function fromGdt(note) {
  if (!note || note.kind !== 'fcf' || !(note.tol > 0) || !GDT_CHAR[note.char]) return null;
  const kind = GDT_CHAR[note.char], h = note.tol / 2;
  const words = [t('stack.gdt.' + kind)];
  if (note.mod === 'M' || note.mod === 'L') words.push(t('stack.gdt.bonus'));
  return { up: h, lo: -h, kind, words };
}

/** ISO 2768-1 Table 1, linear dimensions: the permissible deviation (±) per tolerance class and nominal range. */
export const ISO2768 = {
  ranges: [3, 6, 30, 120, 400, 1000, 2000, 4000],   // upper ends; the first range starts at 0.5
  f: [0.05, 0.05, 0.1, 0.15, 0.2, 0.3, 0.5, null],
  m: [0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 1.2, 2],
  c: [0.2, 0.3, 0.5, 0.8, 1.2, 2, 3, 4],
  v: [null, 0.5, 1, 1.5, 2.5, 4, 6, 8],
};

/** A title block's general tolerance → the deviations for one nominal size, or null when it says nothing usable. */
export function generalTol(text, nominal) {
  const s = String(text || '').replace(/−/g, '-').replace(/,/g, '.').trim();
  if (!s) return null;
  let m = /2768\s*[-–]?\s*([fmcv])\b/i.exec(s) || /2768\s*[-–]?\s*([fmcv])[hkl]?\b/i.exec(s);
  if (m) {
    const cls = m[1].toLowerCase(), n = Math.abs(nominal);
    if (n < 0.5 || n > 4000) return null;
    const i = ISO2768.ranges.findIndex((hi) => n <= hi);
    const dev = ISO2768[cls][i];
    return dev == null ? null : { up: dev, lo: -dev, rule: 'ISO 2768-' + cls };
  }
  m = /(?:±|\+\/-|\+-)\s*(\d*\.?\d+)/.exec(s);
  if (m) { const v = parseFloat(m[1]); return v >= 0 && v <= LIMITS.tol ? { up: v, lo: -v, rule: '±' + v } : null; }
  m = /\+\s*(\d*\.?\d+)\s*\/?\s*-\s*(\d*\.?\d+)/.exec(s);
  if (m) { const u = parseFloat(m[1]), l = parseFloat(m[2]); return u <= LIMITS.tol && l <= LIMITS.tol ? { up: u, lo: -l, rule: '+' + u + '/-' + l } : null; }
  return null;
}

// ------------------------------------------------------------------------------------------------ files

const num = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi ? v : null);
const text = (v, max) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max) : '');

/** Stack-ups read from a file (untrusted). instIds: the assembly's instance ids (a link to a missing one keeps its numbers). */
export function readStackups(raw, instIds = []) {
  if (!Array.isArray(raw)) return [];
  const ids = new Set(instIds);
  const out = [];
  for (const s of raw.slice(0, LIMITS.stacks)) {
    if (!s || typeof s !== 'object' || !Array.isArray(s.dir) || s.dir.length !== 3 || !s.dir.every((v) => num(v, -1e6, 1e6) !== null)) continue;
    if (Math.hypot(...s.dir) < 1e-9) continue;
    const links = [];
    for (const l of (Array.isArray(s.links) ? s.links : []).slice(0, LIMITS.links)) {
      if (!l || typeof l !== 'object') continue;
      const nominal = num(l.nominal, 0, LIMITS.mm), up = num(l.up, -LIMITS.tol, LIMITS.tol), lo = num(l.lo, -LIMITS.tol, LIMITS.tol);
      if (nominal === null || up === null || lo === null || up < lo) continue;
      const sens = l.sens === undefined ? 1 : num(l.sens, -100, 100);
      if (sens === null) continue;
      links.push({
        id: /^l\d{1,6}$/.test(l.id) ? l.id : 'l' + (links.length + 1), label: text(l.label, LIMITS.label),
        inst: typeof l.inst === 'string' && ids.has(l.inst) ? l.inst : null, sign: l.sign === -1 ? -1 : 1, nominal, up, lo, sens,
        source: SOURCES.includes(l.source) ? l.source : 'typed', ...(typeof l.ref === 'string' ? { ref: text(l.ref, 60) } : {}),
      });
    }
    const spec = s.spec && typeof s.spec === 'object' ? { min: num(s.spec.min, -LIMITS.mm, LIMITS.mm), max: num(s.spec.max, -LIMITS.mm, LIMITS.mm) } : null;
    if (spec && spec.min !== null && spec.max !== null && spec.min > spec.max) continue;
    out.push({
      id: /^s\d{1,6}$/.test(s.id) ? s.id : 's' + (out.length + 1), name: text(s.name, LIMITS.name) || 'Stack-up ' + (out.length + 1), // i18n-ignore: a fallback name in the file
      dir: unit(s.dir), spec: spec && (spec.min !== null || spec.max !== null) ? { ...(spec.min !== null ? { min: spec.min } : {}), ...(spec.max !== null ? { max: spec.max } : {}) } : null, links,
    });
  }
  return out;
}

const cell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
const f4 = (v) => (Number.isFinite(v) ? String(+v.toFixed(4)) : '');

/** The stack-up as CSV: one row per link (ranked), then the results. */
export function csv(stack, res, instName = (id) => id || '') {
  const head = [t('stack.csv.rank'), t('stack.csv.link'), t('stack.csv.part'), t('stack.csv.sign'), t('stack.csv.nominal'), t('stack.csv.up'), t('stack.csv.lo'), t('stack.csv.mean'), t('stack.csv.tol'), t('stack.csv.wc'), t('stack.csv.rss'), t('stack.csv.source')];
  const lines = [head.map(cell).join(',')];
  for (const r of res.rows) lines.push([r.rank, r.link.label, instName(r.link.inst), r.a > 0 ? '+' : '-', f4(r.link.nominal), f4(r.link.up), f4(r.link.lo), f4(r.mean), f4(r.t), f4(r.wcShare * 100), f4(r.rssShare * 100), t('stack.source.' + r.link.source)].map(cell).join(','));
  lines.push('');
  lines.push([t('stack.csv.result'), t('stack.csv.nominal'), t('stack.csv.mean'), t('stack.csv.tol'), t('stack.csv.min'), t('stack.csv.max')].map(cell).join(','));
  lines.push([t('stack.r.wc'), f4(res.nominal), f4(res.mean), f4(res.wc.tol), f4(res.wc.min), f4(res.wc.max)].map(cell).join(','));
  lines.push([t('stack.r.rss'), f4(res.nominal), f4(res.mean), f4(res.rss.tol), f4(res.rss.min), f4(res.rss.max)].map(cell).join(','));
  return '﻿' + lines.join('\r\n') + '\r\n';
}
