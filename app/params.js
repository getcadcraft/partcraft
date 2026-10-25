/* SPDX-License-Identifier: Apache-2.0 */
/**
 * params.js — the parametric engine: global variables + equations, resolved in both directions
 * (DOM-free). CANONICAL COPY: CadCraft keeps a byte-identical copy (cadcraft/dev/params.js; its test
 * checks it) — change both or neither. Imports only ./expr.js.
 *
 *   params = { vars: [{ name, expr, note? }], links: [{ target, expr }] }
 *
 *   vars   — global variables (the parameter table). `expr` is text: a number ("40", "1.5in") or an
 *            expression of other variables ("width / 2 + wall"). A variable whose expr is a plain number
 *            is a *driving* variable; the rest are *driven*.
 *   links  — equations: the document value named by `target` = `expr`. Targets are keys an app adapter
 *            hands out (PartCraft: "f3.depth", "f1.k7" for a sketch dimension; CadCraft: "d:<handle>").
 *            A linked value is driven: its stored number is always the last resolved result, so a reader
 *            that knows nothing of params still builds the same geometry.
 *
 * Forward:  applyParams(doc, params, adapter) evaluates every variable (in dependency order; cycles are
 *           reported, never looped), then every link, writes changed values through the adapter and lets
 *           it re-solve (sketches, constraints). One call = one consistent state.
 * Backward: driveBack(params, adapter, key, value) — someone edited a driven value (typed a new depth,
 *           dragged a dimension). The driving variable behind it is solved for numerically (expr.js
 *           solveFor through the whole chain), so "depth = width / 2" typed 30 sets width to 60. Several
 *           driving variables behind one value → the caller picks (`prefer`), else the reply lists them.
 *           driveVar(params, name, value) does the same for a driven variable typed in the table.
 *
 * Adapter: { targets(doc) → Map(key → { label, kind: 'length'|'angle'|'count'|'number', get(), set(v),
 *            min?, max?, integer? }), afterApply?(doc, changedKeys) → { errors?: [{ where, message }] } }.
 */
import { parse, evaluate, literal, formatNumber, renameIn, NAME_RE, RESERVED, ExprError } from './expr.js';

import { t as tr } from './i18n.js';   // tr: these parsers call their tokens t
export const LIMITS = Object.freeze({ vars: 500, links: 4000, expr: 1000, note: 200 });
export const TARGET_RE = /^[A-Za-z0-9_.:@#-]{1,120}$/;

export const emptyParams = () => ({ vars: [], links: [] });
export const hasParams = (p) => !!p && ((p.vars && p.vars.length) || (p.links && p.links.length));
export const varByName = (p, name) => p.vars.find((v) => v.name === name) || null;
export const linkFor = (p, key) => p.links.find((l) => l.target === key) || null;
export const isDriving = (v) => literal(v.expr) !== null;

const text = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);

/** Why a name can't be a variable, or null. */
export function nameProblem(name, p = null, self = null) {
  if (typeof name !== 'string' || !NAME_RE.test(name)) return tr('param.name_starts_letter_has');
  if (RESERVED.has(name) || RESERVED.has(name.toLowerCase())) return tr('param.function_constant_unit_name', { name });
  if (/^(__proto__|constructor|prototype)$/.test(name)) return tr('param.is_reserved', { name });
  if (p && p.vars.some((v) => v.name === name && v !== self)) return tr('param.there_already_parameter_called', { name });
  return null;
}

/** Check untrusted params (from a file). `targetKeys` (Set) drops nothing: an unknown target throws. */
export function readParams(raw, { targetKeys = null } = {}) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error(tr('param.parameters_file_bad'));
  const vars = raw.vars ?? [], links = raw.links ?? [];
  if (!Array.isArray(vars) || vars.length > LIMITS.vars) throw new Error(tr('param.parameter_list_file_bad'));
  if (!Array.isArray(links) || links.length > LIMITS.links) throw new Error(tr('param.equation_list_file_bad'));
  const out = emptyParams();
  for (const v of vars) {
    if (!v || typeof v !== 'object') throw new Error(tr('param.parameter_file_bad'));
    const bad = nameProblem(v.name, out);
    if (bad) throw new Error(tr('param.parameter', { name: text(v.name, 40), bad }));
    if (typeof v.expr !== 'string' || v.expr.length > LIMITS.expr || !parse(v.expr).ok) throw new Error(tr('param.parameter_value_not_valid', { name: v.name }));
    const g = { name: v.name, expr: v.expr };
    if (v.note) g.note = text(v.note, LIMITS.note);
    out.vars.push(g);
  }
  const seen = new Set();
  for (const l of links) {
    if (!l || typeof l.target !== 'string' || !TARGET_RE.test(l.target) || seen.has(l.target)) throw new Error(tr('param.equation_file_bad'));
    if (targetKeys && !targetKeys.has(l.target)) throw new Error(tr('param.equation_drives_which_file', { target: text(l.target, 60) }));
    if (typeof l.expr !== 'string' || l.expr.length > LIMITS.expr || !parse(l.expr).ok) throw new Error(tr('param.equation_not_valid_expression', { target: l.target }));
    seen.add(l.target);
    out.links.push({ target: l.target, expr: l.expr });
  }
  return out;
}

/** A deep copy (params are plain data). */
export const cloneParams = (p) => ({ vars: p.vars.map((v) => ({ ...v })), links: p.links.map((l) => ({ ...l })) });

// ---------------------------------------------------------------- forward

/**
 * Evaluate every variable. → { values: Map, errors: Map(name → message), order: [names], uses: Map(name → [names]) }.
 * `overrides` (name → number) replace those variables' values (design tables, solving backward).
 */
export function evaluateVars(p, overrides = null) {
  const names = new Set(p.vars.map((v) => v.name));
  const parsed = new Map(), uses = new Map(), errors = new Map();
  for (const v of p.vars) {
    if (overrides && overrides.has(v.name)) { uses.set(v.name, []); continue; }
    const r = parse(v.expr, [...names]);
    if (!r.ok) { errors.set(v.name, r.error); uses.set(v.name, []); continue; }
    parsed.set(v.name, r.ast); uses.set(v.name, r.uses);
  }
  // dependency order (DFS); a cycle marks every variable on it
  const order = [], state = new Map(), stack = [];
  const visit = (n) => {
    if (state.get(n) === 2) return;
    if (state.get(n) === 1) {
      const loop = stack.slice(stack.indexOf(n));
      for (const m of loop) errors.set(m, `${loop.join(', ')} ${loop.length === 1 ? tr('param.uses_itself') : tr('param.use_each_other')}.`);
      return;
    }
    state.set(n, 1); stack.push(n);
    for (const d of uses.get(n) || []) visit(d);
    stack.pop(); state.set(n, 2); order.push(n);
  };
  for (const v of p.vars) visit(v.name);
  const values = new Map();
  for (const n of order) {
    if (overrides && overrides.has(n)) { values.set(n, overrides.get(n)); continue; }
    if (errors.has(n)) continue;
    const missing = (uses.get(n) || []).filter((d) => !values.has(d));
    if (missing.length) { errors.set(n, tr('param.uses_which_no_value', { v: missing.join(', '), n: missing.length })); continue; }
    try { values.set(n, evaluate(parsed.get(n), values)); } catch (e) {
      if (!(e instanceof ExprError)) throw e;
      errors.set(n, e.message);
    }
  }
  return { values, errors, order, uses };
}

/** Check a value against a target's kind/limits; → message or null. */
export function valueProblem(t, v) {
  if (!Number.isFinite(v)) return tr('param.not_number');
  if (t.integer || t.kind === 'count') { if (Math.abs(v - Math.round(v)) > 1e-9) return tr('param.has_whole_number_came', { label: t.label, v: formatNumber(v) }); }
  if (t.min !== undefined && v < t.min - 1e-12) return tr('param.has_least_came_out', { label: t.label, min: formatNumber(t.min), v: formatNumber(v) });
  if (t.max !== undefined && v > t.max + 1e-12) return tr('param.can_most_came_out', { label: t.label, max: formatNumber(t.max), v: formatNumber(v) });
  return null;
}

/**
 * Resolve everything and write it into the document. → { ok, values, errors: [{ where, message }], changed: [keys] }.
 * A link with an error leaves its target as it was; everything else still applies.
 */
export function applyParams(doc, p, adapter, { overrides = null } = {}) {
  const ev = evaluateVars(p, overrides);
  const errors = [...ev.errors].map(([name, message]) => ({ where: name, message }));
  const targets = adapter.targets(doc);
  const changed = [];
  for (const l of p.links) {
    const t = targets.get(l.target);
    if (!t) { errors.push({ where: l.target, message: tr('param.equation_drives_something_gone') }); continue; }
    const r = parse(l.expr, [...ev.values.keys(), ...ev.errors.keys()]);
    if (!r.ok) { errors.push({ where: l.target, message: r.error }); continue; }
    const bad = r.uses.filter((n) => !ev.values.has(n));
    if (bad.length) { errors.push({ where: l.target, message: tr('param.uses_which_no_value', { v: bad.join(', '), n: bad.length }) }); continue; }
    let v;
    try { v = evaluate(r.ast, ev.values); } catch (e) { if (!(e instanceof ExprError)) throw e; errors.push({ where: l.target, message: e.message }); continue; }
    if (t.integer || t.kind === 'count') v = Math.round(v);
    const vp = valueProblem(t, v);
    if (vp) { errors.push({ where: l.target, message: vp }); continue; }
    const cur = t.get();
    if (!(Math.abs(cur - v) <= 1e-12 * Math.max(1, Math.abs(v)))) { t.set(v); changed.push(l.target); }
  }
  if (adapter.afterApply) {
    const r = adapter.afterApply(doc, changed) || {};
    if (r.errors) errors.push(...r.errors);
  }
  return { ok: errors.length === 0, values: ev.values, errors, changed };
}

/** Each link's current value, its parse uses, and whether it resolves (for panels and the CLI). */
export function describeLinks(doc, p, adapter, targets = adapter.targets(doc)) {
  const ev = evaluateVars(p);
  return p.links.map((l) => {
    const t = targets.get(l.target);
    const r = compute(l.expr, ev.values);
    return { target: l.target, expr: l.expr, label: t ? t.label : l.target, kind: t?.kind, value: t ? t.get() : null, result: r.ok ? r.value : null, error: t ? (r.ok ? null : r.error) : tr('param.equation_drives_something_gone') };
  });
}
function compute(src, values) {
  const r = parse(src, [...values.keys()]);
  if (!r.ok) return r;
  try { return { ok: true, value: evaluate(r.ast, values) }; } catch (e) { if (!(e instanceof ExprError)) throw e; return { ok: false, error: e.message }; }
}

// ---------------------------------------------------------------- backward

/** Driving variables an expression ends up depending on (through driven variables). */
export function drivingBehind(p, src) {
  const r = parse(src);
  if (!r.ok) return [];
  const ev = evaluateVars(p);
  const out = new Set(), seen = new Set();
  const walk = (n) => {
    if (seen.has(n)) return; seen.add(n);
    const v = varByName(p, n);
    if (!v) return;
    if (isDriving(v)) { out.add(n); return; }
    for (const d of ev.uses.get(n) || []) walk(d);
  };
  r.uses.forEach(walk);
  return [...out];
}

/**
 * Solve expression `src` = `value` for one driving variable. → { ok, var, from, to } |
 * { ok: false, error, choices? } (choices = the driving variables to pick from).
 */
function solveBack(p, src, value, prefer, label) {
  const behind = drivingBehind(p, src);
  if (!behind.length) return { ok: false, error: tr('param.fixed_expression_change_equation', { label, src }), choices: [] };
  let name = prefer;
  if (name && !behind.includes(name)) return { ok: false, error: tr('param.does_not_depend', { label, name }), choices: behind };
  if (!name) {
    if (behind.length > 1) return { ok: false, error: tr('param.depends_pick_which_one', { label, v: behind.join(', ') }), choices: behind };
    name = behind[0];
  }
  const ast = parse(src).ast;
  const base = evaluateVars(p);
  const from = base.values.get(name);
  // f(x): re-evaluate the whole chain with `name` = x, then the expression
  const chain = (x) => { const ev = evaluateVars(p, new Map([[name, x]])); return evaluate(ast, ev.values); };
  const res = solveChain(chain, from, value);
  if (!res.ok) return { ok: false, error: tr('param.cannot_changing', { label, value: formatNumber(value), name }), choices: behind };
  return { ok: true, var: name, from, to: res.value };
}

/** Root-find chain(x) = value from x0 (secant, then bracket outward + bisect: expr.js solveFor's strategy on a function). */
function solveChain(chain, x0, value) {
  const f = (x) => { try { return chain(x) - value; } catch { return NaN; } };
  const scale = Math.max(1, Math.abs(value), Math.abs(x0));
  const close = (y) => Number.isFinite(y) && Math.abs(y) <= 1e-10 * scale;
  let a = x0, fa = f(a);
  if (close(fa)) return { ok: true, value: a };
  let b = x0 === 0 ? 1e-3 : x0 * (1 + 1e-4), fb = f(b);
  for (let k = 0; k < 80 && Number.isFinite(fa) && Number.isFinite(fb) && fb !== fa; k++) {
    const c = b - fb * (b - a) / (fb - fa), fc = f(c);
    if (close(fc)) return { ok: true, value: nice(c, f, close) };
    a = b; fa = fb; b = c; fb = fc;
  }
  const g0 = f(x0);
  for (let step = Math.max(1e-6, Math.abs(x0) * 1e-3); step < 1e9; step *= 2) {
    for (const s of [x0 + step, x0 - step]) {
      const gs = f(s);
      if (close(gs)) return { ok: true, value: nice(s, f, close) };
      if (Number.isFinite(g0) && Number.isFinite(gs) && Math.sign(gs) !== Math.sign(g0)) {
        let lo = x0, hi = s, glo = g0;
        for (let k = 0; k < 200; k++) {
          const mid = (lo + hi) / 2, gm = f(mid);
          if (close(gm) || Math.abs(hi - lo) <= 1e-15 * Math.max(1, Math.abs(mid))) return { ok: true, value: nice(mid, f, close) };
          if (Math.sign(gm) === Math.sign(glo)) { lo = mid; glo = gm; } else hi = mid;
        }
      }
    }
  }
  return { ok: false };
}
/** The roundest number near x that still solves it (fewest decimals, then 12 significant digits). */
function nice(x, f, close) {
  for (let d = 0; d <= 10; d++) { const r = Math.round(x * 10 ** d) / 10 ** d; if (close(f(r))) return r; }
  const r = Number(x.toPrecision(12)); return close(f(r)) ? r : x;
}

/**
 * Someone set the document value `key` to `value`. Unlinked → { ok, direct: true } (the caller writes it).
 * Linked → the driving variable behind the equation is changed in `p` (mutated): { ok, var, from, to }.
 * A link to a constant expression is rewritten to the new number: { ok, link: key, from, to }.
 */
export function driveBack(p, adapter, doc, key, value, { prefer = null } = {}) {
  const l = linkFor(p, key);
  if (!l) return { ok: true, direct: true };
  const t = adapter.targets(doc).get(key);
  const label = t ? t.label : key;
  if (t) { const vp = valueProblem(t, value); if (vp) return { ok: false, error: vp }; }
  if (literal(l.expr) !== null || !parse(l.expr).ok || !parse(l.expr).uses.length) {
    const from = l.expr; l.expr = formatNumber(value); return { ok: true, link: key, from, to: l.expr };
  }
  const r = solveBack(p, l.expr, value, prefer, label);
  if (!r.ok) return r;
  varByName(p, r.var).expr = formatNumber(r.to);
  return r;
}

/** Someone typed a value for variable `name`. Driving → set. Driven → solve its driving variable(s). */
export function driveVar(p, name, value, { prefer = null } = {}) {
  const v = varByName(p, name);
  if (!v) return { ok: false, error: tr('param.there_no_parameter_called', { name }) };
  if (isDriving(v)) { const from = v.expr; v.expr = formatNumber(value); return { ok: true, var: name, from, to: v.expr }; }
  const r = solveBack(p, v.expr, value, prefer, name);
  if (!r.ok) return r;
  varByName(p, r.var).expr = formatNumber(r.to);
  return r;
}

// ---------------------------------------------------------------- editing helpers (mutate p; callers wrap them in one undo step)

/** Add or change a variable. → { ok } | { ok: false, error }. */
export function setVar(p, name, expr, { note, rename } = {}) {
  const r = parse(expr);
  if (!r.ok) return { ok: false, error: r.error };
  const before = cloneParams(p);
  const undo = () => { p.vars = before.vars; p.links = before.links; };
  let v = varByName(p, rename ?? name);
  if (rename !== undefined && rename !== name) {
    if (!v) return { ok: false, error: tr('param.there_no_parameter_called_2', { rename }) };
    const bad = nameProblem(name, p, v);
    if (bad) return { ok: false, error: bad };
    for (const w of p.vars) w.expr = renameIn(w.expr, rename, name);
    for (const l of p.links) l.expr = renameIn(l.expr, rename, name);
    v.name = name;
  }
  if (!v) {
    const bad = nameProblem(name, p);
    if (bad) return { ok: false, error: bad };
    if (p.vars.length >= LIMITS.vars) return { ok: false, error: tr('param.part_holds_parameters_most', { vars: LIMITS.vars }) };
    v = { name, expr: String(expr) }; p.vars.push(v);
  }
  v.expr = String(expr);
  if (note !== undefined) { if (note) v.note = text(note, LIMITS.note); else delete v.note; }
  const ev = evaluateVars(p);
  if (ev.errors.has(name) && /each other|itself/.test(ev.errors.get(name))) { const error = ev.errors.get(name); undo(); return { ok: false, error, cycle: true }; }
  return { ok: true };
}

/** Where a variable is used (other variables and link targets). */
export function usesOf(p, name) {
  const vars = p.vars.filter((v) => v.name !== name && parse(v.expr).uses?.includes(name)).map((v) => v.name);
  const links = p.links.filter((l) => parse(l.expr).uses?.includes(name)).map((l) => l.target);
  return { vars, links };
}

/** Remove a variable; refused while anything uses it unless `inline` (then its current value is written in). */
export function removeVar(p, name, { inline = false } = {}) {
  const v = varByName(p, name);
  if (!v) return { ok: false, error: tr('param.there_no_parameter_called', { name }) };
  const u = usesOf(p, name);
  if ((u.vars.length || u.links.length) && !inline) return { ok: false, error: tr('param.is_used_by', { name, v: [...u.vars, ...u.links].join(', ') }), uses: u };
  if (inline) {
    const val = evaluateVars(p).values.get(name);
    if (val === undefined) return { ok: false, error: tr('param.has_no_value_write', { name }) };
    const lit = `(${formatNumber(val)})`;
    for (const w of p.vars) if (w !== v) w.expr = renameIn(w.expr, name, lit);
    for (const l of p.links) l.expr = renameIn(l.expr, name, lit);
  }
  p.vars.splice(p.vars.indexOf(v), 1);
  return { ok: true };
}

/** Link (or relink) a document value to an expression. Validates against current values. */
export function setLink(p, adapter, doc, key, expr) {
  const t = adapter.targets(doc).get(key);
  if (!t) return { ok: false, error: tr('param.value_cannot_driven_equation') };
  const ev = evaluateVars(p);
  const r = compute(expr, ev.values);
  if (!r.ok) return { ok: false, error: r.error };
  const vp = valueProblem(t, t.integer || t.kind === 'count' ? Math.round(r.value) : r.value);
  if (vp) return { ok: false, error: vp };
  const l = linkFor(p, key);
  if (l) l.expr = String(expr);
  else { if (p.links.length >= LIMITS.links) return { ok: false, error: tr('param.too_many_equations') }; p.links.push({ target: key, expr: String(expr) }); }
  return { ok: true, value: r.value };
}
export function removeLink(p, key) {
  const i = p.links.findIndex((l) => l.target === key);
  if (i >= 0) p.links.splice(i, 1);
  return i >= 0;
}
/** Drop links whose targets are gone (after deleting features/entities); returns the dropped keys. */
export function pruneLinks(p, adapter, doc) {
  const keys = adapter.targets(doc);
  const gone = p.links.filter((l) => !keys.has(l.target)).map((l) => l.target);
  p.links = p.links.filter((l) => keys.has(l.target));
  return gone;
}

// ---------------------------------------------------------------- design tables

/**
 * Parse a design table (CSV text; first row = header). The first column may be a configuration name
 * ("name", "config" or "configuration"); every other header must be a variable. → { ok, rows: [{ name,
 * overrides: Map }] } | { ok: false, error }. Cells are expressions of numbers (units allowed); empty = keep.
 */
export function readDesignTable(csv, p) {
  const lines = String(csv).replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim() !== '');
  if (lines.length < 2) return { ok: false, error: tr('param.design_table_needs_header') };
  if (lines.length > 10001) return { ok: false, error: tr('param.design_table_has_10') };
  const cells = lines.map(splitCsv);
  const head = cells[0].map((h) => h.trim());
  const named = /^(name|config|configuration)$/i.test(head[0]);
  const cols = named ? head.slice(1) : head;
  for (const c of cols) if (!varByName(p, c)) return { ok: false, error: tr('param.design_table_has_column', { c: text(c, 40) }) };
  const rows = [];
  for (let r = 1; r < cells.length; r++) {
    const row = cells[r];
    const name = named ? text(row[0], 60).trim() || tr('param.row', { r }) : tr('param.row', { r });
    const overrides = new Map();
    cols.forEach((c, j) => {
      const cell = (row[j + (named ? 1 : 0)] ?? '').trim();
      if (cell === '') return;
      const v = literal(cell);
      if (v === null) throw new Error(tr('param.design_table_row_not', { r, c, cell: text(cell, 30) }));
      overrides.set(c, v);
    });
    rows.push({ name, overrides });
  }
  return { ok: true, rows, columns: cols };
}
function splitCsv(line) {
  const out = []; let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
    else if (c === '"') q = true; else if (c === ',' || c === ';' || c === '\t') { out.push(cur); cur = ''; } else cur += c;
  }
  out.push(cur);
  return out;
}

/** Overrides as variable edits (a design-table row made permanent, or CLI --set name=value). */
export function applyOverrides(p, overrides) {
  for (const [n, v] of overrides) { const w = varByName(p, n); if (!w) throw new Error(tr('param.there_no_parameter_called_3', { n })); w.expr = formatNumber(v); }
}
