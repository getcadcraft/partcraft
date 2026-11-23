/* SPDX-License-Identifier: Apache-2.0 */
/**
 * script.js — "PartCraft script" (.pcscript): a line-oriented text that builds a part, and the writer that turns any
 * part back into one (DOM-free). Forward: scriptToPart(text) → { part, warnings }. Backward: partToScript(part) →
 * { text, files }. part → script → part gives the same part (ids, order and every field; numbers to 12 significant
 * digits unless { exact: true }), so a script is a faithful, diff-friendly copy of the history.
 *
 * The format, for a person to read and write by hand:
 *
 *   pcscript 1                       optional first line (the format version)
 *   part "Bracket"                   a line at the left edge starts a statement …
 *     resolution 64                  … indented lines are its settings
 *   param width = 100                a variable (any expression of other variables; units mm cm m in ft ' " deg rad)
 *     note Overall width
 *   sketch Sketch1                   a feature: its type, then its name
 *     on top                         plane: front | top | right | face <feature> start|end | face <feature> side <curve>
 *                                     | face named <face> | plane <plane feature> | fixed x, y, z normal x, y, z
 *     point p1 0, 0                  geometry: point <id> x, y · line <id> <p> <p> · circle <id> <centre> <r>
 *     point p2 100, 0                  · arc <id> <centre> <start> <end> (counter-clockwise)
 *     line l1 p1 p2                    · spline <id> fit|control <points…> [closed; a0 <rad>; a1 <rad>; knots …]
 *     coincident p1 O                relations: <type> <ids…> (O is the sketch origin)
 *     horizontal l1
 *     distance l1 = width            dimensions: <type> <ids…> <number> — or = <expression>, which makes an equation
 *   extrude Extrude1
 *     sketch Sketch1
 *     depth = width / 5              a number, or = <expression> (an equation that drives it)
 *     reverse                        a flag on its own = yes
 *   rollback Extrude1                the rollback bar sits above Extrude1 (it and later features are not built)
 *
 * Optional settings of a geometry or relation line go in [ ] at its end, separated by ";": [construction],
 * [side -1; label 5, 3] (side = which side a signed dimension was made on; label = where its text sits). A "#" at the
 * start of a line or after a space starts a comment. Names with spaces go in "double quotes". Feature ids count the
 * features from f1 in order unless an "id f7" setting says otherwise; face names in edge/face references use them
 * (edge f2.side:l3 f2.end [at 50, 0, 10]). Settings this format has no words for are written "json …" and read back
 * as they are, so every feature type (today's and future ones) round-trips. Everything read is checked again by
 * part.js readPart (the same limits as opening a file), then solved; errors carry line numbers.
 */
import * as S from './sketch.js';
import { solveSketch } from './solver.js';
import * as P from './part.js';
import { parse as parseExpr, evaluate, literal, formatNumber, ExprError } from './expr.js';
import { evaluateVars, nameProblem, emptyParams, valueProblem, LIMITS as PLIMITS } from './params.js';
import { PARAM_FIELDS, partAdapter, applyPartParams, paramTargetKeys } from './params-part.js';
import { t } from './i18n.js';

export const SCRIPT_VERSION = 1;
export const SCRIPT_EXT = '.pcscript';
export const SCRIPT_LIMITS = Object.freeze({ bytes: 32 * 1024 * 1024, lines: 400000, line: 2 * 1024 * 1024, errors: 25 });

export class ScriptError extends Error {
  constructor(errors) {
    super(errors.map((e) => (e.line ? t('xch.script.at_line', { line: e.line, message: e.message }) : e.message)).join('\n'));
    this.errors = errors;
  }
}

const TOP = new Set(['pcscript', 'part', 'param', 'rollback', 'drawing', 'study', 'material', 'configs']);
const ENTITY_KW = new Set(['point', 'line', 'circle', 'arc', 'spline']);
const BARE = /^[A-Za-z_][A-Za-z0-9_-]*$/;
const KEY_RE = /^[A-Za-z][A-Za-z0-9-]{0,40}$/;
const WORD_RE = /^[A-Za-z0-9_.:@~#+-]+$/;
const RESERVED_WORDS = new Set(['yes', 'no', 'true', 'false', 'none', 'null', 'json']);

// ================================================================= lexing

/** Cut a comment: "#" at the start or after whitespace, outside "quotes". */
function stripComment(s) {
  let q = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '\\') i++; else if (c === '"') q = false; continue; }
    if (c === '"') q = true;
    else if (c === '#' && (i === 0 || /\s/.test(s[i - 1]))) return s.slice(0, i);
  }
  return s;
}

/** → [{ n, indent, body }] without blank and comment-only lines. */
function lexLines(text, errors) {
  const src = String(text ?? '');
  if (src.length > SCRIPT_LIMITS.bytes) throw new ScriptError([{ message: t('xch.script.max_mb', { mb: SCRIPT_LIMITS.bytes / 1048576 }) }]);
  const raw = src.replace(/^\uFEFF/, '').split(/\r\n|\n|\r/);
  if (raw.length > SCRIPT_LIMITS.lines) throw new ScriptError([{ message: t('xch.script.max_lines', { n: SCRIPT_LIMITS.lines }) }]);
  const out = [];
  raw.forEach((line, i) => {
    if (line.length > SCRIPT_LIMITS.line) { errors.push({ line: i + 1, message: t('xch.script.line_too_long') }); return; }
    if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(line)) { errors.push({ line: i + 1, message: t('xch.script.control_chars') }); return; }
    const body = stripComment(line).replace(/\s+$/, '');
    if (!body.trim()) return;
    out.push({ n: i + 1, indent: /^\s/.test(body), body: body.trim() });
  });
  return out;
}

/** First token: a "quoted string" (JSON escapes) or a run up to whitespace , [ ] =. → { tok, rest, quoted } | null */
function token(s) {
  s = s.replace(/^\s+/, '');
  if (!s) return null;
  if (s[0] === '"') {
    let i = 1;
    for (; i < s.length; i++) { if (s[i] === '\\') { i++; continue; } if (s[i] === '"') break; }
    if (i >= s.length) throw new Error(t('xch.script.quote_open'));
    let tok;
    try { tok = JSON.parse(s.slice(0, i + 1)); } catch { throw new Error(t('xch.script.quote_escape')); }
    return { tok, rest: s.slice(i + 1), quoted: true };
  }
  const m = /^[^\s,[\]=]+/.exec(s);
  if (!m) return { tok: s[0], rest: s.slice(1), quoted: false, punct: true };
  return { tok: m[0], rest: s.slice(m[0].length), quoted: false };
}
function tokens(s) {
  const out = [];
  let tk;
  while ((tk = token(s))) { if (!(tk.punct && tk.tok === ',')) out.push(tk.tok); s = tk.rest; }
  return out;
}

/** "head [a; b c]" → [head, ['a', 'b c']] (the [ ] must end the line). */
function splitMods(s) {
  let q = false, depth = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) { if (c === '\\') i++; else if (c === '"') q = false; continue; }
    if (c === '"') q = true;
    else if (c === '(') depth++;
    else if (c === ')') depth--;
    else if (c === '[' && depth === 0) {
      if (!s.endsWith(']')) throw new Error(t('xch.script.mods_end'));
      const inner = s.slice(i + 1, -1).trim();
      return [s.slice(0, i).trim(), inner ? inner.split(';').map((x) => x.trim()).filter(Boolean) : []];
    }
  }
  return [s.trim(), []];
}

/** Split on commas outside ( ). */
function splitTopCommas(s) {
  const out = [];
  let depth = 0, cur = '';
  for (const c of s) {
    if (c === '(') depth++;
    if (c === ')') depth--;
    if (c === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += c;
  }
  if (cur.trim() !== '' || out.length) out.push(cur.trim());
  return out;
}

// ================================================================= reading

/**
 * Build a part from script text. `readFile(path)` (optional) returns the text of a file a script names (the STEP of an
 * import: "step-file x.step"). → { part, warnings: [{ line, message }] }. Throws ScriptError ({ errors }) when the script
 * cannot be read.
 */
export function scriptToPart(text, { readFile = null } = {}) {
  const errors = [];
  const fail = (line, message) => { errors.push({ line, message }); if (errors.length >= SCRIPT_LIMITS.errors) throw new ScriptError(errors); };
  const lines = lexLines(text, errors);

  // ---- pass 1: statements (a line at the left edge) and their indented settings
  const stmts = [];
  for (const L of lines) {
    if (L.indent) {
      if (!stmts.length) { fail(L.n, t('xch.script.orphan')); continue; }
      stmts[stmts.length - 1].props.push(L);
      continue;
    }
    let tk;
    try { tk = token(L.body); } catch (e) { fail(L.n, e.message); continue; }
    const kw = tk.tok;
    if (!TOP.has(kw) && !P.FEATURE_LABELS[kw]) { fail(L.n, t('xch.script.not_statement', { word: clip(kw), statements: [...TOP].join(', '), types: Object.keys(P.FEATURE_LABELS).join(', ') })); stmts.push({ kw: null, rest: '', line: L.n, props: [] }); continue; }
    stmts.push({ kw, rest: tk.rest.trim(), line: L.n, props: [] });
  }

  const raw = { format: P.FORMAT, version: P.VERSION, name: 'Part1', units: 'mm', resolution: 64, seq: 1, rollback: null, features: [] };
  const params = emptyParams();
  const paramLine = new Map();
  let rollbackStmt = null;
  const featStmts = [];

  // ---- pass 2: part, params, rollback, drawing, studies; ids and names of features
  for (const st of stmts) {
    if (!st.kw) continue;
    try {
      if (st.kw === 'pcscript') {
        const v = Number(st.rest);
        if (!Number.isInteger(v) || v < 1) fail(st.line, t('xch.script.version_word'));
        else if (v > SCRIPT_VERSION) fail(st.line, t('xch.script.newer', { v, reads: SCRIPT_VERSION }));
        noProps(st, fail);
      } else if (st.kw === 'part') {
        const tk = token(st.rest);
        if (tk) raw.name = String(tk.tok).replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 120);
        for (const pr of st.props) {
          const [k, v] = keyValue(pr.body);
          if (k === 'resolution') { const n = literal(v); if (n === null || !Number.isInteger(n) || n < 8 || n > 512) fail(pr.n, t('xch.script.resolution')); else raw.resolution = n; }
          else if (k === 'units') { if (v !== 'mm') fail(pr.n, t('xch.script.units')); }
          else fail(pr.n, t('xch.script.not_part_setting', { word: clip(k) }));
        }
      } else if (st.kw === 'param') {
        const m = /^([^\s=]+)\s*=\s*(.*)$/.exec(st.rest);
        if (!m) { fail(st.line, t('xch.script.param_form')); continue; }
        const [, name, expr] = m;
        const bad = nameProblem(name, params);
        if (bad) { fail(st.line, bad); continue; }
        const pe = parseExpr(expr);
        if (!pe.ok) { fail(st.line, t('xch.script.named_error', { name, error: pe.error })); continue; }
        if (params.vars.length >= PLIMITS.vars) { fail(st.line, t('xch.script.max_params', { n: PLIMITS.vars })); continue; }
        const v = { name, expr: expr.trim() };
        for (const pr of st.props) {
          const [k, val] = keyValue(pr.body);
          if (k === 'note') v.note = unquote(val).replace(/[\u0000-\u001f\u007f]/g, '').slice(0, PLIMITS.note);
          else fail(pr.n, t('xch.script.not_param_setting', { word: clip(k) }));
        }
        params.vars.push(v);
        paramLine.set(name, st.line);
      } else if (st.kw === 'rollback') {
        if (rollbackStmt) fail(st.line, t('xch.script.rollback_twice'));
        rollbackStmt = st; noProps(st, fail);
      } else if (st.kw === 'drawing') {
        raw.drawing = jsonValue(st.rest); noProps(st, fail);
      } else if (st.kw === 'material' || st.kw === 'configs') {
        raw[st.kw] = jsonValue(st.rest); noProps(st, fail);   // 0.4 P14 material, P18 configurations (part.js reads both)
      } else if (st.kw === 'study') {
        const tk = token(st.rest);
        if (!tk || !/^[a-z][a-z0-9-]{0,30}$/.test(tk.tok)) { fail(st.line, t('xch.script.study_form', { form: 'study <key> json {…}' })); continue; }
        (raw.studies ||= {})[tk.tok] = jsonValue(tk.rest.trim()); noProps(st, fail);
      } else featStmts.push(st);
    } catch (e) { fail(st.line, e.message); }
  }
  if (featStmts.length > 2000) fail(featStmts[2000].line, t('xch.script.max_features'));

  // parameter values (for placeholders of driven numbers and expressions in coordinates)
  const ev = evaluateVars(params);
  for (const [name, msg] of ev.errors) fail(paramLine.get(name), t('xch.script.named_error', { name, error: msg }));
  const vals = ev.values;
  const names = params.vars.map((v) => v.name);
  const calc = (src, what) => {
    const r = parseExpr(src, names);
    if (!r.ok) throw new Error(t('xch.script.named_error', { name: what, error: r.error }));
    try { return evaluate(r.ast, vals); } catch (e) { if (e instanceof ExprError) throw new Error(t('xch.script.named_error', { name: what, error: e.message })); throw e; }
  };

  // ids: "id fN" or the next number; names: the header's, else the type's next free name
  const tmp = P.newPart();
  let maxN = 0;
  const metas = [];
  for (const st of featStmts) {
    const idProp = st.props.find((pr) => /^id\s/.test(pr.body));
    let id = null;
    if (idProp) {
      const v = idProp.body.slice(2).trim();
      if (!/^f\d{1,16}$/.test(v)) fail(idProp.n, t('xch.script.feature_id'));
      else if (metas.some((m) => m.id === v)) fail(idProp.n, t('xch.script.id_twice', { id: v }));
      else id = v;
    }
    if (!id) { id = 'f' + (maxN + 1); while (metas.some((m) => m.id === id)) id = 'f' + (+id.slice(1) + 1); }
    maxN = Math.max(maxN, +id.slice(1));
    let name = null;
    try { const tk = token(st.rest); if (tk) { name = String(tk.tok); if (tk.rest.trim()) fail(st.line, t('xch.script.after_name', { text: clip(tk.rest.trim()) })); } } catch (e) { fail(st.line, e.message); }
    const f = P.addFeature(tmp, st.kw, name ? { name } : {});   // defaults of the type, a free name
    f.id = id;
    metas.push({ st, id, f });
  }
  const byName = new Map();
  for (const m of metas) { if (!byName.has(m.f.name)) byName.set(m.f.name, []); byName.get(m.f.name).push(m); }
  const ref = (tok, line) => {
    const hits = byName.get(tok) || [];
    if (hits.length === 1) return hits[0].id;
    if (hits.length > 1) throw new Error(t('xch.script.name_twice', { name: clip(tok), ids: hits.map((h) => h.id).reduce((a, b) => t('xch.script.or', { a, b })) }));
    if (metas.some((m) => m.id === tok)) return tok;
    throw new Error(t('xch.script.no_feature', { name: clip(tok) }));
  };

  // ---- pass 3: features
  const links = [];   // { target, expr, line }
  const listed = new WeakMap();   // feature → list keys (edges, faces) started by edge/face lines
  const sketchLines = new Map();   // feature id → header line
  const featLine = new Map();
  for (const { st, id, f } of metas) {
    featLine.set(id, st.line);
    const feat = { ...f };
    const done = new Set();
    for (const pr of st.props) {
      try {
        if (/^id\s/.test(pr.body)) continue;
        if (f.type === 'sketch') { sketchProp(feat, pr); continue; }
        const [k, v] = keyValue(pr.body);
        if (!KEY_RE.test(k)) throw new Error(t('xch.script.not_setting_name', { word: clip(k) }));
        const once = !['edge', 'face'].includes(k);
        if (once && done.has(k)) throw new Error(t('xch.script.set_twice', { key: k }));
        done.add(k);
        featureProp(feat, k, v, pr.n);
      } catch (e) { fail(pr.n, e.message); }
    }
    if (f.type === 'sketch') {
      try { finishSketch(feat, st.line); } catch (e) { fail(st.line, e.message); }
      sketchLines.set(id, st.line);
    }
    raw.features.push(feat);
  }

  function featureProp(feat, k, v, line) {
    const type = feat.type;
    if (k === 'suppressed') { const b = v === '' ? true : boolWord(v); if (b === null) throw new Error(t('xch.script.suppressed')); if (b) feat.suppressed = true; else delete feat.suppressed; return; }
    if (k === 'sketch' && ['extrude', 'revolve', 'hole', 'sweep'].includes(type)) { feat.sketch = ref(oneToken(v, 'sketch'), line); return; }
    if (k === 'seeds' && ['lpattern', 'cpattern', 'mirror'].includes(type)) { feat.seeds = v.trim() === 'body' && type === 'mirror' ? 'body' : tokens(v).map((tk) => ref(tk, line)); if (!feat.seeds.length) throw new Error(t('xch.script.seeds')); return; }
    if ((k === 'dir' && type === 'lpattern') || (k === 'axis' && type === 'cpattern')) { feat[k] = readDir(v, line); return; }
    if (k === 'axis' && type === 'revolve') {
      const tk = tokens(v);
      if (tk.length === 1 && tk[0] === 'first') feat.axis = null;
      else if (tk.length === 1 && !['x', 'y', 'z'].includes(tk[0])) feat.axis = tk[0];
      else feat.axis = readDir(v, line);
      return;
    }
    if (k === 'plane' && type === 'mirror') { feat.plane = readPlane(v, line); return; }
    if ((k === 'edge' || k === 'face') && v !== 'none' && !v.startsWith('json')) {   // "edge none" / "face json …": a design feature's own key
      const key = k + 's', seen = listed.get(feat) || new Set();
      listed.set(feat, seen);
      if (!seen.has(key)) { feat[key] = []; seen.add(key); }
      if (feat[key].length >= 2000) throw new Error(t(key === 'edges' ? 'xch.script.max_edges' : 'xch.script.max_faces'));
      feat[key].push(k === 'edge' ? readEdge(v) : readFace(v));
      return;
    }
    if (k === 'step-file' && type === 'import') {
      const path = unquote(v);
      if (!readFile) throw new Error(t('xch.script.needs_step', { file: clip(path) }));
      let txt;
      try { txt = readFile(path); } catch (e) { throw new Error(t('xch.script.cannot_read', { file: clip(path), why: e.message })); }
      feat.step = String(txt);
      if (!feat._file) feat.file = path.split(/[\\/]/).pop().slice(0, 200);
      return;
    }
    if (k === 'file' && type === 'import') { feat.file = unquote(v); feat._file = true; return; }
    const spec = PARAM_FIELDS[type]?.[k];
    if (spec) { numberProp(feat, k, v, line, spec); return; }
    feat[k] = genericValue(v, k);
  }

  function numberProp(feat, k, v, line, spec) {
    let expr = v.trim(), linked = false;
    if (expr.startsWith('=')) { expr = expr.slice(1).trim(); linked = true; }
    if (!expr) throw new Error(t('xch.script.needs_value', { key: k }));
    const lit = linked ? null : literal(expr);
    if (lit !== null) { feat[k] = lit; return; }
    if (expr === 'none' && !linked) { feat[k] = null; return; }
    let val = calc(expr, k);
    if (spec.integer) val = Math.round(val);
    const vp = valueProblem({ ...spec, label: `${feat.name} ${spec.label}` }, val);
    if (vp) throw new Error(t('xch.script.expr_error', { expr, error: vp }));
    feat[k] = val;
    links.push({ target: feat.id + '.' + k, expr, line });
  }

  function readPlane(v, line) {
    const s = v.trim();
    if (s.startsWith('json ')) return jsonValue(s);
    const tk = tokens(s);
    if (tk.length === 1 && ['front', 'top', 'right'].includes(tk[0])) return { kind: 'base', name: tk[0] };
    if (tk[0] === 'face' && tk[1] === 'named' && tk.length === 3) return { kind: 'face', feature: P.nameFeatures(tk[2])[0] || '', face: 'named', name: tk[2] };
    if (tk[0] === 'face' && (tk[2] === 'start' || tk[2] === 'end') && tk.length === 3) return { kind: 'face', feature: ref(tk[1], line), face: tk[2] };
    if (tk[0] === 'face' && tk[2] === 'side' && tk.length === 4) return { kind: 'face', feature: ref(tk[1], line), face: 'side', entity: tk[3] };
    if (tk[0] === 'plane' && tk.length === 2) return { kind: 'ref', feature: ref(tk[1], line) };
    if (tk[0] === 'fixed') { const m = /^fixed\s+(.+?)\s+normal\s+(.+)$/.exec(s); if (m) return { kind: 'fixed', o: vec(m[1], 3), n: vec(m[2], 3) }; }
    throw new Error(t('xch.script.plane_form', { form: 'front, top, right, face <feature> start|end, face <feature> side <curve>, face named <face>, plane <plane feature>, fixed x, y, z normal x, y, z' }));
  }
  function readDir(v, line) {
    const s = v.trim();
    if (s.startsWith('json ')) return jsonValue(s);
    const tk = tokens(s);
    if (tk.length === 1 && ['x', 'y', 'z'].includes(tk[0])) return { kind: 'world', axis: tk[0] };
    if (tk[0] === 'line' && tk.length === 3) return { kind: 'line', sketch: ref(tk[1], line), entity: tk[2] };
    if (tk[0] === 'axis-of' && tk.length === 2) return { kind: 'axis', feature: ref(tk[1], line) };
    if (tk[0] === 'ref' && tk.length === 2) return { kind: 'ref', feature: ref(tk[1], line) };
    if (tk[0] === 'fixed') { const m = /^fixed\s+(.+?)\s+dir\s+(.+)$/.exec(s); if (m) return { kind: 'fixed', o: vec(m[1], 3), d: vec(m[2], 3) }; }
    throw new Error(t('xch.script.dir_form', { form: 'x, y, z, line <sketch> <line>, axis-of <revolve>, ref <axis or plane feature>, fixed x, y, z dir x, y, z' }));
  }
  function readEdge(v) {
    const [head, mods] = splitMods(v);
    const tk = tokens(head);
    if (tk.length !== 2) throw new Error(t('xch.script.edge_form', { form: 'edge <face> <face> [at x, y, z]' }));
    const e = { faces: [tk[0], tk[1]] };
    for (const m of mods) { const [mk, mv] = keyValue(m); if (mk === 'at') e.at = vec(mv, 3); else throw new Error(t('xch.script.not_edge_setting', { word: clip(mk) })); }
    return e;
  }
  function readFace(v) {
    const [head, mods] = splitMods(v);
    const tk = tokens(head);
    if (tk.length !== 1) throw new Error(t('xch.script.face_form', { form: 'face <face name> [at x, y, z]' }));
    const r = { name: tk[0] };
    for (const m of mods) { const [mk, mv] = keyValue(m); if (mk === 'at') r.at = vec(mv, 3); else throw new Error(t('xch.script.not_face_setting', { word: clip(mk) })); }
    return r;
  }
  function vec(s, n) {
    let parts = splitTopCommas(s);
    if (parts.length === 1) parts = s.trim().split(/\s+/);
    if (parts.length !== n || parts.some((x) => x === '')) throw new Error(t('xch.script.expected_numbers', { n }));
    return parts.map((x, i) => calc(x, t('xch.script.what.number', { n: i + 1 })));
  }

  // ---- sketches
  function sketchProp(feat, pr) {
    const sk = (feat._sk ||= { entities: [], constraints: [], ids: new Set(['O']), lines: new Map() });
    const [head, mods] = splitMods(pr.body);
    let tk = token(head);
    let label = null;
    if (tk && !tk.quoted && tk.tok.endsWith(':') && tk.tok.length > 1) { label = tk.tok.slice(0, -1); tk = token(tk.rest); }
    if (!tk) throw new Error(t('xch.script.empty_sketch_line'));
    const kw = tk.tok, rest = tk.rest.trim();
    if (kw === 'on') { if (label || mods.length) throw new Error(t('xch.script.on_plane_only')); feat.plane = readPlane(rest, pr.n); return; }
    if (kw === 'seq') return;
    if (ENTITY_KW.has(kw)) {
      if (label) throw new Error(t('xch.script.geometry_label'));
      if (sk.entities.length >= 5000) throw new Error(t('xch.script.max_geometry'));
      const it = token(rest);
      if (!it) throw new Error(t('xch.script.needs_name', { kw, example: kw[0] + '1' }));
      const id = String(it.tok);
      if (!/^[A-Za-z][A-Za-z0-9_:-]{0,40}$/.test(id) || id === 'O') throw new Error(t('xch.script.bad_geometry_name', { name: clip(id) }));
      if (sk.ids.has(id)) throw new Error(t('xch.script.geometry_twice', { name: id }));
      const after = it.rest.trim();
      const e = { id, type: kw };
      const pt = (tok) => { if (!sk.entities.some((x) => x.id === tok && x.type === 'point') && tok !== 'O') throw new Error(t('xch.script.not_point', { name: tok })); return tok; };
      if (kw === 'point') { const [x, y] = vec(after, 2); e.x = x; e.y = y; }
      else if (kw === 'line') { const a = tokens(after); if (a.length !== 2) throw new Error(t('xch.script.line_form', { form: 'line <id> <point> <point>' })); e.p1 = pt(a[0]); e.p2 = pt(a[1]); }
      else if (kw === 'circle') { const a = token(after); if (!a || !a.rest.trim()) throw new Error(t('xch.script.circle_form', { form: 'circle <id> <centre point> <radius>' })); e.c = pt(a.tok); e.r = calc(a.rest.trim(), t('xch.script.what.radius')); }
      else if (kw === 'arc') { const a = tokens(after); if (a.length !== 3) throw new Error(t('xch.script.arc_form', { form: 'arc <id> <centre> <start> <end>' })); e.c = pt(a[0]); e.s = pt(a[1]); e.e = pt(a[2]); }
      else {
        const a = tokens(after);
        if (a[0] !== 'fit' && a[0] !== 'control') throw new Error(t('xch.script.spline_form', { form: 'spline <id> fit|control <points…>' }));
        e.kind = a[0]; e.pts = a.slice(1).map(pt);
      }
      for (const m of mods) {
        const [mk, mv] = keyValue(m);
        if (mk === 'construction' && !mv) e.construction = true;
        else if (kw === 'spline' && mk === 'closed' && !mv) e.closed = true;
        else if (kw === 'spline' && (mk === 'a0' || mk === 'a1')) e[mk] = calc(mv, mk);
        else if (kw === 'spline' && mk === 'knots') e.knots = splitTopCommas(mv).flatMap((x) => x.split(/\s+/)).filter(Boolean).map((x, i) => calc(x, t('xch.script.what.knot', { n: i + 1 })));
        else throw new Error(t('xch.script.not_geometry_setting', { word: clip(m), kw }));
      }
      sk.entities.push(e); sk.ids.add(id); sk.lines.set(id, pr.n);
      return;
    }
    const def = S.CONSTRAINTS[kw];
    if (!def) throw new Error(t('xch.script.not_sketch_word', { word: clip(kw), list: Object.keys(S.CONSTRAINTS).join(', ') }));
    if (sk.constraints.length >= 10000) throw new Error(t('xch.script.max_relations'));
    let refPart = rest, valPart = null, linked = false;
    const eq = topEquals(rest);
    if (eq >= 0) { refPart = rest.slice(0, eq); valPart = rest.slice(eq + 1).trim(); linked = true; }
    const toks = tokens(refPart);
    const refs = [];
    while (toks.length && (sk.ids.has(toks[0]))) refs.push(toks.shift());
    if (!linked && toks.length) valPart = toks.join(' ');
    else if (toks.length) throw new Error(t('xch.script.not_geometry', { name: toks[0] }));
    const c = { type: kw, refs, _line: pr.n };
    if (label) { if (!/^[A-Za-z][A-Za-z0-9_:-]{0,40}$/.test(label) || sk.ids.has(label)) throw new Error(t('xch.script.bad_label', { label: clip(label) })); c.id = label; sk.ids.add(label); }
    if (valPart !== null) {
      if (!def.dim) throw new Error(t('xch.script.no_value', { label: def.label }));
      if (!valPart) throw new Error(t('xch.script.value_missing'));
      const lit = linked ? null : literal(valPart);
      if (lit !== null) c.value = lit;
      else if (!linked) throw new Error(t('xch.script.not_number', { text: clip(valPart) }));
      else { c.value = calc(valPart, def.label); c._link = valPart; }
      if (!(c.value >= 0) || (kw === 'angle' && c.value > 180) || ((kw === 'radius' || kw === 'diameter') && c.value <= 0)) throw new Error(t(kw === 'angle' ? 'xch.script.bad_angle' : 'xch.script.bad_size', { label: def.label, value: formatNumber(c.value) }));
    }
    for (const m of mods) {
      const [mk, mv] = keyValue(m);
      if (mk === 'side') { if (mv === 'none') c.sign = null; else if (mv === '1' || mv === '+1' || mv === '-1') c.sign = Number(mv); else throw new Error(t('xch.script.side')); }
      else if ((mk === 'ext' || mk === 'int') && !mv) c.kind = mk;
      else if (mk === 'kind' && mv === 'none') c.kind = null;
      else if (mk === 'label') c.off = vec(mv, 2);
      else if (mk === 'at') c.at = vec(mv, 2);
      else if (mk === 'value' && kw === 'fix') c.fixValue = splitTopCommas(mv).map((x, i) => calc(x, t('xch.script.what.value', { n: i + 1 })));
      else if (mk === 'of' && kw === 'offsetlink') c.of = mv;
      else throw new Error(t(kw === 'fix' ? 'xch.script.not_setting_fix' : kw === 'offsetlink' ? 'xch.script.not_setting_offsetlink' : 'xch.script.not_setting_relation', { word: clip(m), label: def.label.toLowerCase() }));
    }
    sk.constraints.push(c);
  }

  function finishSketch(feat, headLine) {
    const sk = feat._sk || { entities: [], constraints: [], ids: new Set(['O']) };
    delete feat._sk;
    // ids for unlabelled relations: k<n> after the highest number any id uses
    let n = 0;
    for (const id of sk.ids) { const m = /(\d+)$/.exec(id); if (m) n = Math.max(n, +m[1]); }
    const used = new Set(sk.ids);
    for (const c of sk.constraints) if (!c.id) { do { n++; } while (used.has('k' + n)); c.id = 'k' + n; used.add(c.id); }
    const geo = { seq: n + 1, entities: sk.entities.map((e) => ({ ...e })), constraints: [] };
    for (const c of sk.constraints) {
      const ln = c._line;
      const m = S.matchSig(geo, c.type, c.refs);
      if (!m) { fail(ln, c.refs.length ? t('xch.script.not_apply', { label: S.CONSTRAINTS[c.type].label, refs: c.refs.join(', ') }) : t('xch.script.not_apply_nothing', { label: S.CONSTRAINTS[c.type].label })); continue; }
      const k = { id: c.id, type: c.type, refs: m.refs };
      const meas = S.measure(geo, c.type, m.refs, m.sig);
      if (c.type === 'fix') k.value = c.fixValue ?? meas.value;
      else if (S.CONSTRAINTS[c.type].dim) k.value = c.value ?? meas.value;
      const sign = c.sign === null ? undefined : c.sign ?? meas.sign;
      if (sign !== undefined) k.sign = sign;
      const kind = c.kind === null ? undefined : c.kind ?? meas.kind;
      if (kind !== undefined) k.kind = kind;
      if (c.at) k.at = c.at;
      if (c.off) k.off = c.off;
      if (c.type === 'offsetlink') { if (!c.of) { fail(ln, t('xch.script.offsetlink_of', { form: '[of <label>]' })); continue; } k.of = c.of; }
      if (c._link !== undefined) links.push({ target: feat.id + '.' + c.id, expr: c._link, line: ln });
      geo.constraints.push(k);
    }
    feat.sketch = geo;
  }

  if (errors.length) throw new ScriptError(errors);

  for (const f of raw.features) delete f._file;
  if (rollbackStmt) {
    const v = rollbackStmt.rest.trim();
    if (v && v !== 'end') {
      try { const id = ref(unquote(v), rollbackStmt.line); raw.rollback = raw.features.findIndex((f) => f.id === id); } catch (e) { fail(rollbackStmt.line, e.message); }
    }
  }
  params.links = links.map(({ target, expr }) => ({ target, expr }));
  if (params.vars.length || params.links.length) raw.params = params;
  if (errors.length) throw new ScriptError(errors);

  // ---- check it like a file, then resolve the equations and solve the sketches
  let part;
  try { part = P.readPart(raw); } catch (e) {
    const fname = /^(.+?): /.exec(e.message)?.[1];
    const m = fname && metas.find((x) => x.f.name === fname);
    const linkHit = /drives "([^"]+)"/.exec(e.message);
    throw new ScriptError([{ line: m ? m.st.line : linkHit ? links.find((l) => l.target === linkHit[1])?.line : undefined, message: e.message }]);
  }
  const warnings = [];
  const ap = applyPartParams(part);
  for (const er of ap.errors) {
    const ln = paramLine.get(er.where) ?? links.find((l) => l.target === er.where)?.line ?? metas.find((x) => x.f.name === er.where)?.st.line;
    errors.push({ line: ln, message: t('xch.script.named_error', { name: partAdapter.targets(part).get(er.where)?.label || er.where, error: er.message }) });
  }
  if (errors.length) throw new ScriptError(errors);
  for (const f of part.features) {
    if (f.type !== 'sketch') continue;
    const r = solveSketch(f.sketch);
    const ln = sketchLines.get(f.id);
    if (!r.ok) warnings.push({ line: ln, message: t('xch.script.unsolvable', { name: f.name, list: describeIds(f.sketch, [...r.conflicts, ...r.redundant]) }) });
    else if (r.status === 'over') warnings.push({ line: ln, message: t('xch.script.over_defined', { name: f.name, list: describeIds(f.sketch, [...r.conflicts, ...r.redundant]) }) });
  }
  return { part, warnings };
}

const describeIds = (sk, ids) => [...new Set(ids)].map((id) => { const c = sk.constraints.find((k) => k.id === id); return c ? S.describe(c, (v) => formatNumber(v)) + ` (${c.refs.join(' ')})` : id; }).join(', ') || t('xch.script.its_relations');

function noProps(st, fail) { for (const pr of st.props) fail(pr.n, t('xch.script.no_settings', { kw: st.kw })); }
function keyValue(s) { const m = /^(\S+)\s*(.*)$/.exec(s.trim()); return m ? [m[1], m[2].trim()] : ['', '']; }
function oneToken(v, what) { const tk = tokens(v); if (tk.length !== 1) throw new Error(t('xch.script.one_name', { key: what })); return tk[0]; }
function unquote(v) { const s = v.trim(); if (s.startsWith('"')) { const tk = token(s); if (tk.rest.trim()) throw new Error(t('xch.script.after_quote')); return tk.tok; } return s; }
function boolWord(v) { return v === 'yes' || v === 'true' ? true : v === 'no' || v === 'false' ? false : null; }
function topEquals(s) { let q = false; for (let i = 0; i < s.length; i++) { const c = s[i]; if (q) { if (c === '\\') i++; else if (c === '"') q = false; continue; } if (c === '"') q = true; else if (c === '=' && s[i + 1] !== '=' && s[i - 1] !== '=' && s[i - 1] !== '<' && s[i - 1] !== '>' && s[i - 1] !== '!') return i; } return -1; }
function jsonValue(s) {
  const v = s.trim();
  if (!v.startsWith('json')) throw new Error(t('xch.script.json_form'));
  try { return JSON.parse(v.slice(4).trim()); } catch (e) { throw new Error(t('xch.script.json_bad', { why: String(e.message).slice(0, 120) })); }
}
function genericValue(v, k) {
  if (v === '') return true;
  const b = boolWord(v);
  if (b !== null) return b;
  if (v === 'none' || v === 'null') return null;
  if (v.startsWith('json ') || v === 'json') return jsonValue(v);
  if (v.startsWith('"')) return unquote(v);
  if (v.startsWith('=')) throw new Error(t('xch.script.no_equation', { key: k }));
  const lit = literal(v);
  if (lit !== null) return lit;
  if (WORD_RE.test(v)) return v;
  throw new Error(t('xch.script.bad_value', { key: k }));
}
const clip = (s) => String(s).slice(0, 40);

// ================================================================= writing

/**
 * Write any part as a script. → { text, files: [{ name, text }] } — files are the STEP texts of imported solids,
 * written beside the script and named by "step-file" (with { inlineStep: true } the STEP goes inside the script).
 * { exact: true } writes every number with all its digits (default: 12 significant digits).
 */
export function partToScript(part, { exact = false, inlineStep = false, comment = true } = {}) {
  const num = (v) => (exact ? String(Object.is(v, -0) ? 0 : v) : formatNumber(v));
  // positions (sketch points, picked points) carry the solver's residue (30.0000000000558): written to 9 decimals of
  // a millimetre, which the reader solves back onto the relations
  const pos = (v) => (exact ? num(v) : formatNumber(Math.abs(v) < 1e12 ? Number(v.toFixed(9)) : v));
  const vecS = (a) => a.map(pos).join(', ');
  const out = [];
  const files = [];
  const links = new Map((part.params?.links || []).map((l) => [l.target, l.expr]));
  const nameCount = new Map();
  for (const f of part.features) nameCount.set(f.name, (nameCount.get(f.name) || 0) + 1);
  const ids = new Set(part.features.map((f) => f.id));
  const tok = (s) => (BARE.test(s) && !RESERVED_WORDS.has(s) ? s : JSON.stringify(s));
  const fref = (id) => {
    const f = part.features.find((g) => g.id === id);
    if (!f) return id;
    return nameCount.get(f.name) === 1 && !(ids.has(f.name) && f.name !== id) && !['body', 'end', 'first', 'named'].includes(f.name) ? tok(f.name) : id;
  };
  const strVal = (s) => (WORD_RE.test(s) && !RESERVED_WORDS.has(s) && literal(s) === null && !/^[=-]/.test(s) ? s : JSON.stringify(s));
  const generic = (v) => {
    if (v === true) return 'yes';
    if (v === false) return 'no';
    if (v === null) return 'none';
    if (typeof v === 'number') return num(v);
    if (typeof v === 'string') return strVal(v);
    return 'json ' + JSON.stringify(v);
  };
  const planeS = (p) => {
    if (!p || typeof p !== 'object') return 'json ' + JSON.stringify(p);
    const keys = Object.keys(p).sort().join(',');
    if (p.kind === 'base' && keys === 'kind,name') return p.name;
    if (p.kind === 'face' && (p.face === 'start' || p.face === 'end') && keys === 'face,feature,kind') return `face ${fref(p.feature)} ${p.face}`;   // i18n-ignore: pcscript file text
    if (p.kind === 'face' && p.face === 'side' && keys === 'entity,face,feature,kind' && /^[A-Za-z][A-Za-z0-9_:-]*$/.test(p.entity)) return `face ${fref(p.feature)} side ${p.entity}`;   // i18n-ignore: pcscript file text
    if (p.kind === 'face' && p.face === 'named' && keys === 'face,feature,kind,name' && /^\S+$/.test(p.name)) return `face named ${p.name}`;   // i18n-ignore: pcscript file text
    if (p.kind === 'ref' && keys === 'feature,kind') return `plane ${fref(p.feature)}`;   // i18n-ignore: pcscript file text
    if (p.kind === 'fixed' && keys === 'kind,n,o') return `fixed ${vecS(p.o)} normal ${vecS(p.n)}`;   // i18n-ignore: pcscript file text
    return 'json ' + JSON.stringify(p);
  };
  const dirS = (d) => {
    if (!d || typeof d !== 'object') return 'json ' + JSON.stringify(d);
    const keys = Object.keys(d).sort().join(',');
    if (d.kind === 'world' && keys === 'axis,kind') return d.axis;
    if (d.kind === 'line' && keys === 'entity,kind,sketch' && /^[A-Za-z][A-Za-z0-9_:-]*$/.test(d.entity)) return `line ${fref(d.sketch)} ${d.entity}`;   // i18n-ignore: pcscript file text
    if (d.kind === 'axis' && keys === 'feature,kind') return `axis-of ${fref(d.feature)}`;
    if (d.kind === 'ref' && keys === 'feature,kind') return `ref ${fref(d.feature)}`;   // i18n-ignore: pcscript file text
    if (d.kind === 'fixed' && keys === 'd,kind,o') return `fixed ${vecS(d.o)} dir ${vecS(d.d)}`;   // i18n-ignore: pcscript file text
    return 'json ' + JSON.stringify(d);
  };
  const isEdgeRef = (e) => e && Array.isArray(e.faces) && e.faces.length === 2 && e.faces.every((n) => typeof n === 'string' && /^\S+$/.test(n) && !n.includes('[') && !n.includes('"')) && Object.keys(e).every((k) => k === 'faces' || (k === 'at' && Array.isArray(e.at) && e.at.length === 3));
  const isFaceRef = (r) => r && typeof r.name === 'string' && /^\S+$/.test(r.name) && !r.name.includes('[') && !r.name.includes('"') && Object.keys(r).every((k) => k === 'name' || (k === 'at' && Array.isArray(r.at) && r.at.length === 3));

  if (comment) out.push(`# ${part.name} — a PartCraft script. A line at the left edge starts a statement; indented lines are its settings.`);
  out.push(`pcscript ${SCRIPT_VERSION}`);   // i18n-ignore: pcscript file text
  out.push(`part ${JSON.stringify(part.name)}`, `  resolution ${part.resolution}`);   // i18n-ignore: pcscript file text
  if (part.params?.vars?.length) {
    out.push('');
    for (const v of part.params.vars) {
      out.push(`param ${v.name} = ${v.expr}`);
      if (v.note) out.push(`  note ${/[#"\\]|^\s|\s$/.test(v.note) ? JSON.stringify(v.note) : v.note}`);   // i18n-ignore: pcscript file text
    }
  }
  let maxN = 0;
  for (const f of part.features) {
    out.push('');
    out.push(`${f.type} ${tok(f.name)}`);
    const want = 'f' + (maxN + 1);
    if (f.id !== want) out.push(`  id ${f.id}`);   // i18n-ignore: pcscript file text
    maxN = Math.max(maxN, +f.id.slice(1));
    if (f.suppressed) out.push('  suppressed');
    if (f.type === 'sketch') { writeSketch(f); continue; }
    for (const [k, v] of Object.entries(f)) {
      if (['id', 'type', 'name', 'suppressed'].includes(k)) continue;
      const key = f.id + '.' + k;
      if (links.has(key)) { out.push(`  ${k} = ${links.get(key)}`); continue; }
      if (k === 'sketch' && typeof v === 'string') { out.push(`  sketch ${fref(v)}`); continue; }   // i18n-ignore: pcscript file text
      if (k === 'seeds' && ['lpattern', 'cpattern', 'mirror'].includes(f.type)) { out.push(`  seeds ${v === 'body' ? 'body' : Array.isArray(v) && v.length ? v.map(fref).join(', ') : generic(v)}`); continue; }   // i18n-ignore: pcscript file text
      if ((k === 'dir' && f.type === 'lpattern') || (k === 'axis' && f.type === 'cpattern')) { out.push(`  ${k} ${dirS(v)}`); continue; }
      if (k === 'axis' && f.type === 'revolve') { out.push(`  axis ${v === null ? 'first' : typeof v === 'string' && /^[A-Za-z][A-Za-z0-9_:-]*$/.test(v) && !['x', 'y', 'z', 'first'].includes(v) ? v : dirS(v)}`); continue; }   // i18n-ignore: pcscript file text
      if (k === 'plane' && f.type === 'mirror') { out.push(`  plane ${planeS(v)}`); continue; }   // i18n-ignore: pcscript file text
      if (k === 'edges' && Array.isArray(v) && v.length && v.every(isEdgeRef)) { for (const e of v) out.push(`  edge ${e.faces[0]} ${e.faces[1]}${e.at ? ` [at ${vecS(e.at)}]` : ''}`); continue; }   // i18n-ignore: pcscript file text
      if (k === 'faces' && Array.isArray(v) && v.length && v.every(isFaceRef)) { for (const r of v) out.push(`  face ${r.name}${r.at ? ` [at ${vecS(r.at)}]` : ''}`); continue; }   // i18n-ignore: pcscript file text
      if (f.type === 'import' && k === 'step') {
        if (inlineStep) { out.push(`  step ${JSON.stringify(v)}`); continue; }   // i18n-ignore: pcscript file text
        const base = (f.file || f.name).replace(/\.(step|stp)$/i, '').replace(/[^A-Za-z0-9 _.-]+/g, '_').slice(0, 80) || f.id;
        let name = base + '.step', i = 2;
        while (files.some((x) => x.name === name)) name = `${base} (${i++}).step`;   // i18n-ignore: pcscript file text
        files.push({ name, text: v });
        out.push(`  step-file ${JSON.stringify(name)}`);
        continue;
      }
      if (f.type === 'import' && k === 'file') { out.push(`  file ${JSON.stringify(v)}`); continue; }   // i18n-ignore: pcscript file text
      if (typeof v === 'boolean' && PARAM_FIELDS[f.type]?.[k] === undefined && ['reverse', 'through', 'outward'].includes(k)) { if (v) out.push(`  ${k}`); continue; }
      out.push(`  ${k} ${generic(v)}`);
    }
  }
  if (part.rollback !== null && part.rollback !== undefined && part.rollback < part.features.length) {
    out.push('', `rollback ${fref(part.features[part.rollback].id)}`);   // i18n-ignore: pcscript file text
  }
  if (part.material) out.push('', 'material json ' + JSON.stringify(part.material));   // i18n-ignore: pcscript file text
  if (part.configs && part.configs.rows && part.configs.rows.length) out.push('', 'configs json ' + JSON.stringify(part.configs));   // i18n-ignore: pcscript file text
  if (part.drawing) out.push('', 'drawing json ' + JSON.stringify(part.drawing));   // i18n-ignore: pcscript file text
  if (part.studies) for (const [k, v] of Object.entries(part.studies)) out.push('', `study ${k} json ` + JSON.stringify(v));   // i18n-ignore: pcscript file text
  return { text: out.join('\n') + '\n', files };

  function writeSketch(f) {
    out.push(`  on ${planeS(f.plane)}`);   // i18n-ignore: pcscript file text
    const sk = f.sketch;
    // sides and fix values are compared with what the reader will measure: the geometry as written
    const skW = JSON.parse(JSON.stringify(sk));
    for (const e of skW.entities) { if (e.type === 'point') { e.x = Number(pos(e.x)); e.y = Number(pos(e.y)); } if (e.type === 'circle') e.r = Number(pos(e.r)); }
    const labelled = new Set(sk.constraints.filter((c) => c.type === 'offsetlink').map((c) => c.of));
    for (const e of sk.entities) {
      const mods = [];
      if (e.construction) mods.push('construction');
      let body;
      if (e.type === 'point') body = `point ${e.id} ${pos(e.x)}, ${pos(e.y)}`;   // i18n-ignore: pcscript file text
      else if (e.type === 'line') body = `line ${e.id} ${e.p1} ${e.p2}`;   // i18n-ignore: pcscript file text
      else if (e.type === 'circle') body = `circle ${e.id} ${e.c} ${pos(e.r)}`;   // i18n-ignore: pcscript file text
      else if (e.type === 'arc') body = `arc ${e.id} ${e.c} ${e.s} ${e.e}`;   // i18n-ignore: pcscript file text
      else if (e.type === 'spline') {
        body = `spline ${e.id} ${e.kind} ${e.pts.join(' ')}`;   // i18n-ignore: pcscript file text
        if (e.closed) mods.unshift('closed');
        for (const k of ['a0', 'a1']) if (Number.isFinite(e[k])) mods.push(`${k} ${num(e[k])}`);
        if (e.knots) mods.push(`knots ${e.knots.map(num).join(', ')}`);   // i18n-ignore: pcscript file text
      } else body = `# unknown geometry ${e.type}`;
      out.push(`  ${body}${mods.length ? ` [${mods.join('; ')}]` : ''}`);
    }
    for (const c of sk.constraints) {
      const def = S.CONSTRAINTS[c.type];
      let body = `${labelled.has(c.id) ? c.id + ': ' : ''}${c.type} ${c.refs.join(' ')}`;
      const key = f.id + '.' + c.id;
      if (def?.dim) body += links.has(key) ? ` = ${links.get(key)}` : ` ${num(c.value)}`;
      const mods = [];
      let meas = {};
      try { meas = S.measure(skW, c.type, c.refs); } catch { /* unknown: everything is written */ }
      if (c.sign !== meas.sign) mods.push(c.sign === undefined ? 'side none' : `side ${c.sign}`);   // i18n-ignore: pcscript file text
      if (c.kind !== meas.kind) mods.push(c.kind === undefined ? 'kind none' : c.kind);   // i18n-ignore: pcscript file text
      if (c.type === 'fix' && Array.isArray(c.value) && !(Array.isArray(meas.value) && meas.value.length === c.value.length && meas.value.every((x, i) => Math.abs(x - c.value[i]) <= 1e-9 * Math.max(1, Math.abs(x))))) mods.push(`value ${c.value.map(pos).join(', ')}`);   // i18n-ignore: pcscript file text
      if (c.at) mods.push(`at ${vecS(c.at)}`);   // i18n-ignore: pcscript file text
      if (c.off) mods.push(`label ${vecS(c.off)}`);   // i18n-ignore: pcscript file text
      if (c.type === 'offsetlink') mods.push(`of ${c.of}`);   // i18n-ignore: pcscript file text
      out.push(`  ${body}${mods.length ? ` [${mods.join('; ')}]` : ''}`);
    }
  }
}

/** Does this text look like a script (rather than a part file)? */
export function looksLikeScript(text) {
  const s = String(text ?? '').replace(/^\uFEFF/, '');
  if (/^\s*\{/.test(s)) return false;
  for (const line of s.split(/\r?\n/, 50)) {
    const b = stripComment(line).trim();
    if (!b) continue;
    const kw = b.split(/\s/)[0];
    return TOP.has(kw) || !!P.FEATURE_LABELS[kw];
  }
  return false;
}

/** Keys of everything an equation in this part may drive (for tools). */
export const scriptTargetKeys = (part) => paramTargetKeys(part);
