/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-postdef.js — PartCraft's post-processor file format (DOM-free): a post is a short text file you can read and
 * edit; this module parses it and runs it over a program to write G-code. The format is ours (a line-oriented list of
 * events and statements with a fixed set of variables), written from what a post has to do, not from any other
 * program's post files.
 *
 *   parsePost(text)                      → def  (throws PostError with .line)
 *   renderPost(def, program, {name})     → {text, ext, post}
 *   POST_EVENTS · POST_VARS              what the editor lists
 *
 * The file (one statement a line; blank lines and lines starting // are ignored; `end` closes `on`, `if` and `for`):
 *
 *   post fanuc                        id (letters, digits, - _)
 *   name Fanuc-style control (.nc)    shown in the Control list
 *   extension nc
 *   line-numbers 10                   N10, N20 … on every `emit` line; `off` for none
 *   decimal-point yes                 10. instead of 10 (comments never carry the point)
 *   canned-cycles yes                 no = holes are written as the moves they stand for
 *   modal motion G0 G1 G2 G3          words of a group are written only when they change
 *
 *   on <event>
 *     raw TEXT              a line exactly as typed (after {…} are filled in), no line number
 *     comment TEXT          (TEXT) with ASCII only and no brackets inside
 *     emit WORD WORD …      a line of words; words that come out empty are left out; no words, no line
 *     word WORD …           add words to the line being built; `emit` alone ends it
 *     if EXPR … else … end  · for tool in tools … end
 *     set NAME EXPR         · reset NAME …  (a modal group, an address letter like Z, or at.z)
 *     do rapid X Y Z        run the rapid event for a point
 *   end
 *
 * A word is typed text with {variable|filter} holes. Suffix ~ makes it modal (G0~, X{x}~, {hole.x}~): it is written only
 * when it differs from what was last written (a group word against its group, a letter+number against that letter);
 * suffix ! forces it to be written (it is still remembered). Filters: upper lower pad:N cut:N safe int.
 * EXPR: a variable, a number, yes/no/none, text, `a??b` (a, else b), `a == b`, `a != b`, `not a`, `a and b`, `a or b`.
 * A name that is not a variable is plain text (G81, mist, r).
 *
 * Events, in the order a program runs them: start · (per operation) operation · tool-change · spindle · approach ·
 * coolant-on · rapid · feed · arc · cycle-start · cycle-hole · cycle-end · end.
 */
import { expandCycle } from './cam-cycle.js';
import { q, num, safeComment } from './cam-fmt.js';
import { describeTool } from './cam-tools.js';
import { ORIGINS } from './cam-origins.js';
import { t } from './i18n.js';

export class PostError extends Error {
  constructor(line, key, params = {}) { super(t(key, { line, ...params })); this.line = line; this.key = key; }
}

/** Events and the variables each one sees (names; the editor's reference list). */
export const POST_VARS = {
  global: ['name', 'program', 'setup.axis', 'setup.origin', 'setup.coolant', 'stock.kind', 'stock.d', 'stock.sx', 'stock.sy', 'stock.sz', 'stock.minx', 'stock.miny', 'stock.minz', 'stock.maxx', 'stock.maxy', 'stock.maxz', 'cool', 'offset', 'at.x', 'at.y', 'at.z', 'at.f'],
  tool: ['tool.number', 'tool.desc', 'tool.kind', 'tool.d', 'tool.flutes', 'tool.fluteLen'],
  operation: ['op.name', 'op.type'],
  toolChange: ['previous'],
  spindle: ['rpm'],
  approach: ['first.x', 'first.y', 'first.z'],
  coolant: ['coolant.mode'],
  motion: ['x', 'y', 'z', 'f', 'moved'],
  arc: ['arc.g', 'arc.i', 'arc.j', 'arc.cx', 'arc.cy'],
  cycle: ['cycle.kind', 'cycle.init', 'feed', 'code', 'hole.x', 'hole.y', 'hole.z', 'hole.r', 'hole.q', 'hole.top', 'hole.return', 'hole.first'],
};
export const POST_EVENTS = {
  start: ['global', 'tool'], operation: ['global', 'operation'], 'tool-change': ['global', 'tool', 'toolChange'], spindle: ['global', 'spindle'],
  approach: ['global', 'tool', 'approach'], 'coolant-on': ['global', 'coolant'], rapid: ['global', 'motion'], feed: ['global', 'motion'],
  arc: ['global', 'motion', 'arc'], 'cycle-start': ['global', 'cycle'], 'cycle-hole': ['global', 'cycle'], 'cycle-end': ['global', 'cycle'], end: ['global'],
};
const KNOWN = new Set(Object.values(POST_VARS).flat());
const NAMESPACES = new Set(['tool', 'op', 'stock', 'setup', 'first', 'hole', 'arc', 'at', 'cycle', 'coolant']);
const FILTERS = { upper: (s) => String(s).toUpperCase(), lower: (s) => String(s).toLowerCase(), safe: safeComment, int: (s) => String(Math.round(+s)) };

// ------------------------------------------------------------------------------------------------ parsing

const LIT = { yes: true, true: true, no: false, false: false, none: null, null: null };
const NUMBER = /^-?\d+(\.\d+)?$/;

function parseOperand(tok, ctx, ln) {
  if (tok.includes('??')) { const [a, ...b] = tok.split('??'); return { k: 'co', a: parseOperand(a, ctx, ln), b: parseOperand(b.join('??'), ctx, ln) }; }
  if (Object.prototype.hasOwnProperty.call(LIT, tok)) return { k: 'lit', v: LIT[tok] };
  if (NUMBER.test(tok)) return { k: 'lit', v: +tok };
  if (/^"[^"]*"$/.test(tok)) return { k: 'lit', v: tok.slice(1, -1) };
  if (/^[A-Za-z_][\w.]*$/.test(tok)) {
    if (KNOWN.has(tok) || ctx.names.has(tok)) return { k: 'var', name: tok };
    if (tok.includes('.') && NAMESPACES.has(tok.split('.')[0])) throw new PostError(ln, 'cam.post.err.unknown_var', { name: tok });
    return { k: 'lit', v: tok };
  }
  throw new PostError(ln, 'cam.post.err.bad_expr', { text: tok });
}
function parseExpr(str, ctx, ln) {
  const toks = str.trim().split(/\s+/).filter(Boolean);
  if (!toks.length) throw new PostError(ln, 'cam.post.err.empty_expr');
  let i = 0;
  const or = () => { let a = and(); while (toks[i] === 'or') { i++; a = { k: 'or', a, b: and() }; } return a; };
  const and = () => { let a = not(); while (toks[i] === 'and') { i++; a = { k: 'and', a, b: not() }; } return a; };
  const not = () => { if (toks[i] === 'not') { i++; return { k: 'not', a: not() }; } return cmp(); };
  const cmp = () => {
    if (i >= toks.length) throw new PostError(ln, 'cam.post.err.bad_expr', { text: str });
    const a = parseOperand(toks[i++], ctx, ln);
    if (toks[i] === '==' || toks[i] === '!=') { const op = toks[i++]; if (i >= toks.length) throw new PostError(ln, 'cam.post.err.bad_expr', { text: str }); return { k: 'cmp', op, a, b: parseOperand(toks[i++], ctx, ln) }; }
    return a;
  };
  const e = or();
  if (i < toks.length) throw new PostError(ln, 'cam.post.err.bad_expr', { text: str });
  return e;
}
/** Text with {expr|filter} holes → parts [string | {e, filters}] */
function parseTemplate(text, ctx, ln) {
  const parts = [];
  let i = 0;
  while (i < text.length) {
    const o = text.indexOf('{', i);
    if (o < 0) { parts.push(text.slice(i)); break; }
    if (o > i) parts.push(text.slice(i, o));
    const c = text.indexOf('}', o);
    if (c < 0) throw new PostError(ln, 'cam.post.err.unclosed');
    const [ex, ...fs] = text.slice(o + 1, c).split('|');
    const filters = fs.map((f) => {
      const [name, arg] = f.split(':');
      if (name === 'pad' || name === 'cut') { if (!/^\d{1,3}$/.test(arg || '')) throw new PostError(ln, 'cam.post.err.filter_arg', { name }); return { name, n: +arg }; }
      if (!FILTERS[name]) throw new PostError(ln, 'cam.post.err.unknown_filter', { name });
      return { name };
    });
    parts.push({ e: parseOperand(ex.trim(), ctx, ln), filters });
    i = c + 1;
  }
  return parts;
}
/** Split a words line on spaces outside { }. */
function splitWords(s) {
  const out = [];
  let cur = '', d = 0;
  for (const ch of s) {
    if (ch === '{') d++;
    if (ch === '}') d = Math.max(0, d - 1);
    if (ch === ' ' && d === 0) { if (cur) out.push(cur); cur = ''; } else cur += ch;
  }
  if (cur) out.push(cur);
  return out;
}
function parseWord(w, ctx, ln) {
  let modal = false, force = false;
  let core = w;
  if (core.endsWith('!')) { force = true; core = core.slice(0, -1); }
  if (core.endsWith('~')) { modal = true; core = core.slice(0, -1); }
  if (force && !modal) throw new PostError(ln, 'cam.post.err.force_alone', { word: w });
  const m = /^([A-Za-z])\{([^{}|]+)\}$/.exec(core);
  const node = { parts: parseTemplate(core, ctx, ln), modal, force, addr: m ? m[1] : null, expr: m ? parseOperand(m[2].trim(), ctx, ln) : null, src: core };
  if (modal && !node.parts.some((p) => typeof p !== 'string')) {
    if (!ctx.groupOf.has(core) && !m) throw new PostError(ln, 'cam.post.err.not_in_group', { word: core });
  }
  return node;
}

/** Text → a post definition. */
export function parsePost(text) {
  const lines = String(text).replace(/\r\n?/g, '\n').split('\n');
  const def = { id: '', name: '', ext: 'nc', lineStep: 0, point: false, canned: true, groups: {}, events: {} };
  const ctx = { names: new Set(), groupOf: new Map() };
  // pre-pass: names made by `set` and `for`, and the modal groups (so the order of lines does not matter)
  lines.forEach((raw, k) => {
    const s = raw.trim();
    let m;
    if ((m = /^set\s+([A-Za-z_][\w.]*)(\s|$)/.exec(s))) ctx.names.add(m[1]);
    if ((m = /^for\s+([A-Za-z_]\w*)\s+in\s/.exec(s))) ctx.names.add(m[1]);
    if ((m = /^modal\s+([A-Za-z_]\w*)\s+(.+)$/.exec(s))) { def.groups[m[1]] = m[2].trim().split(/\s+/); for (const w of def.groups[m[1]]) ctx.groupOf.set(w, m[1]); }
  });
  const stack = [];   // open blocks: {kind, node}
  let cur = null;     // the list statements go into
  let event = null;
  lines.forEach((raw, k) => {
    const ln = k + 1;
    const s = raw.trim();
    if (!s || s.startsWith('//')) return;
    const sp = s.search(/\s/);
    const kw = sp < 0 ? s : s.slice(0, sp);
    const rest = sp < 0 ? '' : s.slice(sp + 1).trim();
    if (!cur) {   // top level
      switch (kw) {
        case 'post': if (!/^[A-Za-z0-9_-]{1,40}$/.test(rest)) throw new PostError(ln, 'cam.post.err.id'); def.id = rest; return;
        case 'name': def.name = rest.replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 80); return;
        case 'extension': if (!/^[A-Za-z0-9]{1,8}$/.test(rest)) throw new PostError(ln, 'cam.post.err.extension'); def.ext = rest.toLowerCase(); return;
        case 'line-numbers': if (rest === 'off') def.lineStep = 0; else if (/^\d{1,4}$/.test(rest) && +rest > 0) def.lineStep = +rest; else throw new PostError(ln, 'cam.post.err.line_numbers'); return;
        case 'decimal-point': case 'canned-cycles':
          if (rest !== 'yes' && rest !== 'no') throw new PostError(ln, 'cam.post.err.yes_no', { name: kw });
          if (kw === 'decimal-point') def.point = rest === 'yes'; else def.canned = rest === 'yes';
          return;
        case 'modal': return;   // read in the pre-pass
        case 'end': throw new PostError(ln, 'cam.post.err.end');
        case 'on': {
          if (!POST_EVENTS[rest]) throw new PostError(ln, 'cam.post.err.unknown_event', { name: rest, list: Object.keys(POST_EVENTS).join(', ') });
          if (def.events[rest]) throw new PostError(ln, 'cam.post.err.twice', { name: rest });
          event = rest; def.events[rest] = []; cur = def.events[rest]; stack.push({ kind: 'on' }); return;
        }
        default: throw new PostError(ln, 'cam.post.err.unknown_statement', { word: kw });
      }
    }
    switch (kw) {
      case 'raw': cur.push({ t: 'raw', parts: parseTemplate(rest, ctx, ln) }); return;
      case 'comment': cur.push({ t: 'comment', parts: parseTemplate(rest, ctx, ln) }); return;
      case 'emit': case 'word': cur.push({ t: kw, words: splitWords(rest).map((w) => parseWord(w, ctx, ln)) }); return;
      case 'set': {
        const m = /^([A-Za-z_][\w.]*)\s+(.+)$/.exec(rest);
        if (!m) throw new PostError(ln, 'cam.post.err.set');
        cur.push({ t: 'set', name: m[1], e: parseExpr(m[2], ctx, ln) }); return;
      }
      case 'reset': if (!rest) throw new PostError(ln, 'cam.post.err.reset'); cur.push({ t: 'reset', names: rest.split(/\s+/) }); return;
      case 'do': {
        const a = rest.split(/\s+/);
        if (a[0] !== 'rapid' || a.length !== 4) throw new PostError(ln, 'cam.post.err.do');
        cur.push({ t: 'do', args: a.slice(1).map((x) => parseOperand(x, ctx, ln)) }); return;
      }
      case 'if': { const node = { t: 'if', cond: parseExpr(rest, ctx, ln), then: [], else: [] }; cur.push(node); stack.push({ kind: 'if', node, parent: cur }); cur = node.then; return; }
      case 'else': {
        const top = stack[stack.length - 1];
        if (!top || top.kind !== 'if' || top.elsed) throw new PostError(ln, 'cam.post.err.else');
        top.elsed = true; cur = top.node.else; return;
      }
      case 'for': {
        const m = /^([A-Za-z_]\w*)\s+in\s+(\w+)$/.exec(rest);
        if (!m || m[2] !== 'tools') throw new PostError(ln, 'cam.post.err.for');
        const node = { t: 'for', v: m[1], body: [] };
        cur.push(node); stack.push({ kind: 'for', node, parent: cur }); cur = node.body; return;
      }
      case 'end': {
        const top = stack.pop();
        if (!top) throw new PostError(ln, 'cam.post.err.end');
        cur = top.kind === 'on' ? null : top.parent;
        return;
      }
      default: throw new PostError(ln, 'cam.post.err.unknown_statement', { word: kw });
    }
  });
  if (stack.length) throw new PostError(lines.length, 'cam.post.err.unclosed_block');
  if (!def.id) throw new PostError(1, 'cam.post.err.no_id');
  if (!def.name) def.name = def.id;
  return def;
}

// ------------------------------------------------------------------------------------------------ running

const truthy = (v) => !(v === null || v === undefined || v === false || v === '');
function same(a, b) {
  if (a == null || b == null) return a == null && b == null;
  if (typeof a === 'number' && typeof b === 'number') return q(a) === q(b);
  return String(a) === String(b);
}

class Runner {
  constructor(def) {
    this.def = def; this.out = []; this.n = 0; this.v = Object.create(null);
    this.slot = Object.create(null);    // modal numeric words by letter: raw value last written
    this.group = Object.create(null);   // modal text words by group: last word written
    this.pend = null;                   // words of the line being built
    this.groupOf = new Map();
    for (const [g, ws] of Object.entries(def.groups)) for (const w of ws) this.groupOf.set(w, g);
    this.v.cool = false; this.v.offset = null;
  }
  get(name) {
    if (name.startsWith('at.')) { const l = name.slice(3).toUpperCase(); return this.slot[l] ?? null; }
    const v = this.v[name];
    return v === undefined ? null : v;
  }
  ev(n) {
    switch (n.k) {
      case 'lit': return n.v;
      case 'var': return this.get(n.name);
      case 'co': { const a = this.ev(n.a); return a === null || a === undefined || a === '' ? this.ev(n.b) : a; }
      case 'not': return !truthy(this.ev(n.a));
      case 'and': return truthy(this.ev(n.a)) && truthy(this.ev(n.b));
      case 'or': return truthy(this.ev(n.a)) || truthy(this.ev(n.b));
      case 'cmp': { const e = same(this.ev(n.a), this.ev(n.b)); return n.op === '==' ? e : !e; }
      default: return null;
    }
  }
  text(parts, point) {
    let s = '';
    for (const p of parts) {
      if (typeof p === 'string') { s += p; continue; }
      let v = this.ev(p.e);
      if (typeof v === 'number') v = num(v, point);
      else if (v === true) v = 'yes'; else if (v === false || v === null || v === undefined) v = '';
      v = String(v);
      for (const f of p.filters) {
        if (f.name === 'pad') v = v.padStart(f.n, '0'); else if (f.name === 'cut') v = v.slice(0, f.n); else v = FILTERS[f.name](v);
      }
      s += v;
    }
    return s;
  }
  line(s) { if (this.def.lineStep) { this.n += this.def.lineStep; this.out.push('N' + this.n + ' ' + s); } else this.out.push(s); }
  /** A word → {text} or null (left out); a modal word is remembered as it is made, so two in one line see each other. */
  word(w) {
    const point = this.def.point;
    if (w.modal) {
      if (w.addr) {
        const val = this.ev(w.expr);
        if (typeof val === 'number') {
          if (!w.force && this.slot[w.addr] != null && q(this.slot[w.addr]) === q(val)) return null;
          this.slot[w.addr] = val;
          return { text: w.addr + num(val, point) };
        }
      }
      const txt = this.text(w.parts, point);
      if (!txt) return null;
      const g = this.groupOf.get(txt);
      if (!g) return { text: txt };
      if (!w.force && this.group[g] === txt) return null;
      this.group[g] = txt;
      return { text: txt };
    }
    const txt = this.text(w.parts, point);
    return txt ? { text: txt } : null;
  }
  flush() {
    const p = this.pend || [];
    this.pend = null;
    if (!p.length) return;
    this.line(p.map((x) => x.text).join(' '));
  }
  exec(list) {
    for (const s of list) {
      switch (s.t) {
        case 'raw': this.out.push(this.text(s.parts, this.def.point)); break;
        case 'comment': this.out.push('(' + safeComment(this.text(s.parts, false)) + ')'); break;
        case 'word': case 'emit': {
          const ws = s.words.map((w) => this.word(w)).filter(Boolean);
          this.pend = (this.pend || []).concat(ws);
          if (s.t === 'emit') this.flush();
          break;
        }
        case 'if': this.exec(truthy(this.ev(s.cond)) ? s.then : s.else); break;
        case 'for': for (const tl of this.tools) { this.toolVars(tl, s.v); this.exec(s.body); } break;
        case 'set': {
          const val = this.ev(s.e);
          if (s.name.startsWith('at.')) this.slot[s.name.slice(3).toUpperCase()] = val; else this.v[s.name] = val;
          break;
        }
        case 'reset':
          for (const nme of s.names) {
            if (nme.startsWith('at.')) delete this.slot[nme.slice(3).toUpperCase()];
            else if (this.def.groups[nme]) delete this.group[nme];
            else if (/^[A-Za-z]$/.test(nme)) delete this.slot[nme];
            else this.v[nme] = null;
          }
          break;
        case 'do': { const a = s.args.map((x) => this.ev(x)); this.move('rapid', a); break; }
        default: break;
      }
    }
  }
  fire(name) { const e = this.def.events[name]; if (e) { this.exec(e); this.flush(); } }
  toolVars(tl, p = 'tool') {
    const v = this.v;
    v[p + '.number'] = String(tl.number); v[p + '.desc'] = describeTool(tl); v[p + '.kind'] = tl.kind; v[p + '.d'] = tl.d;
    v[p + '.flutes'] = String(tl.flutes); v[p + '.fluteLen'] = tl.fluteLen;
  }
  /** A point move: kind rapid|feed (p = [x, y, z], f) or arc (m with c, sw). */
  move(kind, p, m = null) {
    if ((this.depth = (this.depth || 0) + 1) > 4) { this.depth = 0; throw new Error(t('cam.post.err.recursion')); }
    try { this.move1(kind, p, m); } finally { if (this.depth) this.depth--; }
  }
  move1(kind, p, m) {
    const v = this.v, S = this.slot;
    v.x = p[0]; v.y = p[1]; v.z = p[2];
    v.f = m && m.f !== undefined ? m.f : null;
    const diff = (L, val) => S[L] == null || q(val) !== q(S[L]);
    v.moved = diff('X', p[0]) || diff('Y', p[1]) || diff('Z', p[2]);
    if (kind === 'arc') {
      const x0 = q(S.X ?? 0), y0 = q(S.Y ?? 0);
      v['arc.g'] = m.sw < 0 ? '2' : '3';
      v['arc.cx'] = m.c[0]; v['arc.cy'] = m.c[1];
      v['arc.i'] = q(m.c[0] - x0); v['arc.j'] = q(m.c[1] - y0);
    }
    this.fire(kind);
  }
}

/** Run a parsed post over a program ({setup, model: {stock}, paths}) → {text, ext, post}. */
export function renderPost(def, program, { name = 'Part' } = {}) {
  const R = new Runner(def);
  const setup = program.setup;
  const paths = program.paths.filter((p) => p.moves && p.moves.length);
  const v = R.v;
  const s = program.model.stock;
  v.name = name; v.program = String(setup.program);
  v['setup.axis'] = setup.axis; v['setup.origin'] = ORIGINS[setup.origin] || setup.origin; v['setup.coolant'] = setup.coolant;
  v['stock.kind'] = s.kind; v['stock.d'] = s.kind === 'cylinder' ? 2 * s.r : null;
  v['stock.sx'] = s.max[0] - s.min[0]; v['stock.sy'] = s.max[1] - s.min[1]; v['stock.sz'] = s.max[2] - s.min[2];
  v['stock.minx'] = s.min[0]; v['stock.miny'] = s.min[1]; v['stock.minz'] = s.min[2];
  v['stock.maxx'] = s.max[0]; v['stock.maxy'] = s.max[1]; v['stock.maxz'] = s.max[2];
  R.tools = [];
  for (const p of paths) if (p.tool && !R.tools.find((x) => x.id === p.tool.id)) R.tools.push(p.tool);
  R.fire('start');
  const coolOn = setup.coolant === 'mist' || setup.coolant === 'flood' ? setup.coolant : null;
  let tool = null, rpm = null;
  for (const p of paths) {
    v['op.name'] = p.op.name; v['op.type'] = p.op.type || null;
    R.fire('operation');
    const first = p.moves[0];
    if (!tool || tool.id !== p.tool.id) {
      v.previous = !!tool;
      tool = p.tool; rpm = null;
      R.toolVars(tool);
      R.fire('tool-change');
    }
    if (p.speeds.rpm !== rpm) { rpm = p.speeds.rpm; v.rpm = String(rpm); R.fire('spindle'); }
    v['first.x'] = first.p[0]; v['first.y'] = first.p[1]; v['first.z'] = first.p[2];
    R.fire('approach');
    R.move('rapid', first.p);
    if (coolOn && !v.cool) { v['coolant.mode'] = coolOn; R.fire('coolant-on'); v.cool = true; }
    for (const m of p.moves.slice(1)) {
      if (m.k !== 'cycle') { R.move(m.k, m.p, m); continue; }
      if (!def.canned) { for (const e of expandCycle(m)) R.move(e.k, e.p, e); continue; }
      v['cycle.kind'] = m.kind; v['cycle.init'] = m.init; v.feed = m.f;
      R.fire('cycle-start');
      const hv = (hl, k) => {
        v['hole.x'] = hl.at[0]; v['hole.y'] = hl.at[1]; v['hole.z'] = hl.z; v['hole.r'] = hl.r; v['hole.q'] = hl.q; v['hole.top'] = hl.top;
        v['hole.return'] = hl.ret === 'r' ? 'r' : 'init'; v['hole.first'] = k === 0;
      };
      m.holes.forEach((hl, k) => { hv(hl, k); R.fire('cycle-hole'); });
      hv(m.holes[m.holes.length - 1], m.holes.length - 1);
      R.fire('cycle-end');
    }
  }
  R.fire('end');
  return { text: R.out.join('\n') + '\n', ext: def.ext, post: def.id };
}
