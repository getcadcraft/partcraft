/* SPDX-License-Identifier: Apache-2.0 */
/**
 * live.js — PartCraft's Studio Live adapter (0.5 LV.20, session live-apps; spec docs/STUDIO-LIVE-SPEC.md § 4, keys and
 * `touched` rules docs/LIVE-PROTOCOL.md § 6). DOM-free: tools/live-apps-test/test-partcraft-live.mjs drives it in Node
 * against the real session server, and checks that every window's kernel builds the same solid.
 *
 *   const live = createLive({ get: () => part, applied: () => … })   → the adapter (spec § 4)
 *   live.bind(client) / live.unbind();  live.step(beforeJson, label)  the app finished an edit
 *   createLiveAdapter({ host })                                      → Studio's entry point, for window.partcraft
 *
 * The part is the feature tree (part.js): the ops are the difference between the part before and after each edit.
 *   {o:'add', id, v, at}      a feature created (at = its place in the tree)      key e:f/<id> (c)
 *   {o:'del', id}             a feature removed                                    (d)
 *   {o:'set', id, f, v|x:1}   one field of a feature (a sketch travels whole: its entities, constraints and solved
 *                             positions — two people in one sketch: the later edit wins)   (p)
 *   {o:'ord', v:[id…]}        the tree's order (a feature dragged up or down)      key meta:features.order (s)
 *   {o:'top', f, v|x:1}       the part's other fields: name, rollback bar, material, parameters, configurations,
 *                             drawing, studies, bodies' names and colours          key meta:<f> (p)
 * Never meshes (spec § 4): every window rebuilds the solid from the tree with its own kernel; the kernel is deterministic
 * (the test compares the built meshes bit for bit). Ids: client c's new features are f<c × 1e6 + n>, so two people never
 * make the same one (feature names like "Sketch2" may repeat; they are names, not keys). `seq` is personal.
 * The tree's order is structural: a reorder is refused if someone changed the order since, so two reorders never mix.
 * Assemblies are not shared yet (see docs/0.5-sessions/live-apps.md § Known limits).
 */

import { pack, unpack } from './live-client.js';
import { t } from './i18n.js';

export const SCHEMA = 1;
export const ID_BLOCK = 1e6;
const PERSONAL = new Set(['seq']);
const clone = (v) => (v === undefined || v === null || typeof v !== 'object' ? v : JSON.parse(JSON.stringify(v)));
const same = (a, b) => a === b || JSON.stringify(a) === JSON.stringify(b);
const num = (id) => +String(id).replace(/^\D+/, '');
/** Feature ids named anywhere in a feature (its sketch "f3", a face "f2.end", a body "@f4" / "~f4"…); an imported STEP's
 *  own text is left out. */
function idsIn(v) {
  if (!v || typeof v !== 'object') return [];
  const { step, ...rest } = v; void step;
  return [...JSON.stringify(rest).matchAll(/(?:^|[^A-Za-z0-9_])(f\d+)(?![0-9])/g)].map((m) => m[1]);
}

export function createLive(opts) {
  const P = () => opts.get();
  let client = null, g = 0, queued = false;

  function diff(a, b) {
    const out = [], tail = [];
    const A = new Map((a.features || []).map((x) => [x.id, x])), B = new Map((b.features || []).map((x) => [x.id, x]));
    for (const id of A.keys()) if (!B.has(id)) out.push({ o: 'del', id });
    (b.features || []).forEach((x, at) => { if (!A.has(x.id)) out.push({ o: 'add', id: x.id, v: clone(x), at }); });
    for (const x of b.features || []) {
      const was = A.get(x.id);
      if (!was) continue;
      for (const f of new Set([...Object.keys(was), ...Object.keys(x)])) if (f !== 'id' && !same(was[f], x[f])) out.push(x[f] === undefined ? { o: 'set', id: x.id, f, x: 1 } : { o: 'set', id: x.id, f, v: clone(x[f]) });
    }
    const before = (a.features || []).map((x) => x.id).filter((id) => B.has(id)), after = (b.features || []).map((x) => x.id).filter((id) => A.has(id));
    if (before.join('\n') !== after.join('\n')) tail.push({ o: 'ord', v: (b.features || []).map((x) => x.id) });
    for (const f of new Set([...Object.keys(a), ...Object.keys(b)])) {
      if (f === 'features' || PERSONAL.has(f) || same(a[f], b[f])) continue;
      out.push(b[f] === undefined ? { o: 'top', f, x: 1 } : { o: 'top', f, v: clone(b[f]) });
    }
    return out.concat(tail);
  }

  function applyOp(op, p = P()) {
    const list = p.features;
    switch (op.o) {
      case 'add': { const i = list.findIndex((x) => x.id === op.id); if (i >= 0) list[i] = clone(op.v); else list.splice(Number.isInteger(op.at) ? Math.min(op.at, list.length) : list.length, 0, clone(op.v)); return; }
      case 'del': { const i = list.findIndex((x) => x.id === op.id); if (i >= 0) list.splice(i, 1); return; }
      case 'set': { const x = list.find((y) => y.id === op.id); if (!x) return; if (op.x) delete x[op.f]; else x[op.f] = clone(op.v); return; }
      case 'ord': { const by = new Map(list.map((x) => [x.id, x])); const next = op.v.map((id) => by.get(id)).filter(Boolean); for (const x of list) if (!next.includes(x)) next.push(x); list.splice(0, list.length, ...next); return; }
      case 'top': if (op.x) delete p[op.f]; else p[op.f] = clone(op.v); return;
      default: return;
    }
  }
  function invertOp(op, ids) {
    const p = P();
    switch (op.o) {
      case 'add': case 'del': { const i = ids().indexOf(op.id), x = i >= 0 ? p.features.find((y) => y.id === op.id) : null; return x ? { o: 'add', id: op.id, v: clone(x), at: i } : { o: 'del', id: op.id }; }
      case 'set': { const x = p.features.find((y) => y.id === op.id); if (!x) return null; return x[op.f] === undefined ? { o: 'set', id: op.id, f: op.f, x: 1 } : { o: 'set', id: op.id, f: op.f, v: clone(x[op.f]) }; }
      case 'ord': return { o: 'ord', v: ids().slice() };
      case 'top': return p[op.f] === undefined ? { o: 'top', f: op.f, x: 1 } : { o: 'top', f: op.f, v: clone(p[op.f]) };
      case 'g': return { o: 'g', g: op.g };
      default: return null;
    }
  }
  function walk(op, list) {
    if (op.o === 'add') { if (!list.includes(op.id)) list.splice(Number.isInteger(op.at) ? Math.min(op.at, list.length) : list.length, 0, op.id); }
    else if (op.o === 'del') { const i = list.indexOf(op.id); if (i >= 0) list.splice(i, 1); }
    else if (op.o === 'ord') { const next = op.v.filter((id) => list.includes(id)); for (const id of list) if (!next.includes(id)) next.push(id); list.splice(0, list.length, ...next); }
  }

  function touched(ops) {
    const out = [], seen = new Set();
    const add = (x) => { const k = x.k + '\u0000' + x.m + '\u0000' + (x.f || ''); if (!seen.has(k)) { seen.add(k); out.push(x); } };
    for (const op of ops) {
      switch (op.o) {
        case 'add': add({ k: 'e:f/' + op.id, m: 'c' }); for (const r of refsOf(op.v)) if (r !== op.id) add({ k: 'e:f/' + r, m: 'r' }); break;
        case 'del': add({ k: 'e:f/' + op.id, m: 'd' }); break;
        case 'set': add({ k: 'e:f/' + op.id, m: 'p', f: op.f }); if (!op.x) for (const r of refsOf({ [op.f]: op.v })) if (r !== op.id) add({ k: 'e:f/' + r, m: 'r' }); break;
        case 'ord': add({ k: 'meta:features.order', m: 's' }); break;
        case 'top': add({ k: 'meta:' + op.f, m: 'p', f: 'v' }); break;
        default: break;
      }
    }
    return out;
  }
  /** The features a feature builds on (its sketch, seeds, a face it sits on…): every feature id named anywhere in it. */
  function refsOf(v) {
    const ids = new Set(P().features.map((x) => x.id)), out = new Set();
    for (const id of idsIn(v)) if (ids.has(id)) out.add(id);
    return out;
  }

  /** The host's checks: a feature removed while another still builds on it, or one added on a feature that is gone. */
  function validate(ops) {
    const p = P();
    const after = new Map(p.features.map((x) => [x.id, x]));
    for (const op of ops) {
      if (op.o === 'add') after.set(op.id, op.v);
      else if (op.o === 'del') after.delete(op.id);
      else if (op.o === 'set') { const x = after.get(op.id); if (x) after.set(op.id, { ...x, [op.f]: op.x ? undefined : op.v }); }
    }
    const gone = new Set(p.features.map((x) => x.id).filter((id) => !after.has(id)));
    const all = new Set([...p.features.map((x) => x.id), ...after.keys()]);
    for (const [id, x] of after) for (const r of idsIn(x)) if (r !== id && all.has(r) && gone.has(r)) return 'feature-in-use';
    return null;
  }

  function claimIds() {
    if (!client || !client.c) return;
    const p = P(), lo = client.c * ID_BLOCK, hi = lo + ID_BLOCK;
    let next = lo + 1;
    for (const x of p.features) { const n = num(x.id); if (n >= next && n < hi) next = n + 1; }
    if (!(p.seq > lo && p.seq < hi)) p.seq = next; else p.seq = Math.max(p.seq, next);
  }
  function releaseIds() {
    const p = P();
    let max = 0;
    for (const x of p.features) { const n = num(x.id); if (Number.isFinite(n) && n > max) max = n; }
    p.seq = Math.max(p.seq || 1, max + 1);
  }
  const shared = () => { const s = clone(P()); for (const k of PERSONAL) delete s[k]; return s; };

  const live = {
    app: 'partcraft', schema: SCHEMA,
    get client() { return client; },
    onLocalChange(cb) { live.report = cb; },
    apply(ops, origin) {
      live.onApply?.(ops);   // the window's edit under way follows (watch() below)
      for (const op of ops) applyOp(op);
      if (!queued) { queued = true; Promise.resolve().then(() => { queued = false; opts.applied?.(origin); }); }   // one rebuild per batch
    },
    applyTo(p, ops) { for (const op of ops) applyOp(op, p); },
    invert(ops) {
      let ids = null;
      const order = () => ids || (ids = P().features.map((x) => x.id));
      const inv = [];
      for (const op of ops) { inv.push(invertOp(op, order)); walk(op, order()); }
      const out = inv.reverse().filter(Boolean);
      const gi = out.findIndex((o) => o.o === 'g'); if (gi > 0) out.unshift(out.splice(gi, 1)[0]);
      return out;
    },
    touched, validate, diff,
    /** EG.41 (0.8 round 3, part_PART_3): where a step landed, for an assistant's scope (studio/hub/live/assistant-scope.js). A part is one place
     *  (sheet ''), so a scope holds an assistant to kinds of change instead — `tags`: sketch (sketches), features (the solid features), params
     *  (variables and equations), studies (simulation, manufacture … settings), drawing, material, part (the rest). No box: a 2-D area means
     *  nothing on a part, so an area scope refuses a step it cannot place (scope-unknown), never lets one through. */
    where(ops) {
      const tags = new Set();
      const kind = (id, v) => { const f = v || P().features.find((x) => x.id === id); return f && f.type === 'sketch' ? 'sketch' : 'features'; };
      for (const op of ops || []) {
        if (!op || typeof op !== 'object') continue;
        if (op.o === 'add' || op.o === 'set' || op.o === 'del') tags.add(kind(op.id, op.o === 'add' ? op.v : null));
        else if (op.o === 'ord') tags.add('features');
        else if (op.o === 'top') tags.add(['params', 'studies', 'drawing', 'material'].includes(op.f) ? op.f : op.f === 'configs' ? 'params' : 'part');
      }
      return tags.size ? { sheet: '', tags: [...tags] } : null;
    },
    sheetLabel() { return t('live.where.part'); },
    snapshot() { return pack({ v: SCHEMA, part: shared() }); },
    load(bytes) {
      const s = unpack(bytes);
      if (!s || s.v !== SCHEMA || !s.part) throw new Error('live snapshot: unknown format');   // i18n-ignore (protocol)
      opts.replace(Object.assign(s.part, { seq: P().seq || 1 }));
      claimIds();
      opts.applied?.('load');
    },
    hash() { return JSON.stringify(shared()); },
    /** The app finished an edit: `before` = the part's JSON text before it (the history's own copy). */
    step(before, label) {
      if (!client) return;
      const a = typeof before === 'string' ? JSON.parse(before) : before, b = P();
      const ops = diff(a, b);
      if (!ops.length) return;
      const mark = { o: 'g', g: 's' + (++g) };
      client.localChange({ label: label || '', ops: [mark, ...ops], inverse: [mark, ...diff(b, a)] });
    },
    bind(c) { client = c; claimIds(); c.on('welcome', () => claimIds()); return live; },
    unbind() { releaseIds(); client = null; },
  };
  return live;
}

/**
 * Studio's entry point: the adapter for the part open in this window (window.partcraft), or null. Edits are found through
 * the part's history: every edit starts with hist.push(part, label) (the part before it); the step is sent once the part
 * settles — at once after a command, or when a drag in a sketch stops. While live, Undo / Redo are per person.
 */
export function createLiveAdapter({ host } = {}) {
  const app = globalThis.partcraft;
  if (!app || !app.part || !app.hist) return null;
  const a = createLive({
    get: () => app.part,
    replace: (p) => app.liveReplace(p),
    // the rebuild re-solves sketches in place: what it writes is not an edit of ours
    applied: () => { app.liveApplied(); a.resync?.(); },
  });
  const lv = host && host.live;
  if (lv && lv.on) {
    let stop = null, offs = [];
    const say = (m) => { try { app.status && app.status(m); } catch { /* no status bar */ } };
    const off = lv.on((c) => {
      if (c && c.adapter === a) {
        a.bind(c); stop = watch(app, a, c);
        offs = [
          c.on('refused', (r) => say(t(r.reason === 'locked' ? 'live.refused.locked' : r.reason === 'role' ? 'live.refused.role' : 'live.refused', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('undo-skipped', (r) => say(t('live.undo_skipped', { what: r.label || '', name: r.byName || t('live.someone') }))),
          c.on('ended', () => say(t('live.ended'))),
          c.on('status', ({ status, first }) => {
      // a drop that heals within a moment (or the socket closing as the host ends) is not worth a message
      if (status === 'live') { if (first !== false || c.toldDrop) say(t('live.status.live')); c.toldDrop = false; }
      else if (status === 'reconnecting') setTimeout(() => { if (c.status === 'reconnecting') { c.toldDrop = true; say(t('live.status.reconnecting')); } }, 1500);
      else if (status === 'waiting') say(t('live.status.waiting'));
    }),
        ];
        app.live = a;
      } else if (!c && a.client) { offs.forEach((f) => f()); if (stop) stop(); a.unbind(); app.live = null; off(); }
    });
  }
  return a;
}

/** Hooks on window.partcraft's history while live: steps out, undo / redo in. Returns the function that removes them. */
function watch(app, a, client) {
  const hist = app.hist;
  const orig = { push: hist.push, undo: hist.undo, redo: hist.redo };
  hist.clear();
  let open = null;      // { before (JSON text), label } of the edit under way
  let known = JSON.stringify(app.part), lastLabel = '';   // the part as last sent or received
  // others' edits (and the session's own rollbacks and rebases) land in the part while an edit of ours is under way: they go
  // into its starting copy too, so the step sent is only what we did
  a.onApply = (ops) => {
    if (open) { const b = JSON.parse(open.before); a.applyTo(b, ops); open.before = JSON.stringify(b); }
    const k = JSON.parse(known); a.applyTo(k, ops); known = JSON.stringify(k);
  };
  a.resync = () => { if (!open) known = JSON.stringify(app.part); };
  const finish = () => {
    if (!open) return;
    const now = JSON.stringify(app.part);
    const o = open; open = null;
    if (now !== o.before) a.step(o.before, o.label);
    known = now;
  };
  hist.push = function (part, label) {
    finish();
    const r = orig.push.call(hist, part, label);
    open = { before: JSON.stringify(part), label };
    lastLabel = label;
    setTimeout(() => { if (open && !(app.editor && app.editor.drag)) finish(); }, 0);   // a command: at once; a drag: once it stops (the timer)
    return r;
  };
  // a drag (or anything that changes the part without a new history step): sent once the part has been still for a moment
  let last = null, still = 0;
  const timer = setInterval(() => {
    const now = JSON.stringify(app.part);
    if (!open) { if (now === known) return; open = { before: known, label: lastLabel }; }
    if (now === last) { if (++still >= 2 && !(app.editor && app.editor.drag)) { still = 0; finish(); } } else { last = now; still = 0; }
  }, 250);
  const top = (st) => (st.length ? st[st.length - 1].label || '' : '');
  hist.undo = () => { finish(); const l = top(client.undoStack); return client.undo() ? { part: app.part, label: l } : null; };
  hist.redo = () => { finish(); const l = top(client.redoStack); return client.redo() ? { part: app.part, label: l } : null; };
  return () => { finish(); clearInterval(timer); a.onApply = null; a.resync = null; hist.push = orig.push; hist.undo = orig.undo; hist.redo = orig.redo; hist.clear(); };
}

/** A browser opening a link with #live=<code> (a page a host serves on the LAN) or ?live=<ROOM>#<secret> joins. */
export async function joinFromPage(app, fileHost, w = globalThis) {
  const lv = fileHost && fileHost.live;
  if (!lv || !app) return false;
  let code = null, link = null, url;
  try { code = lv.pageCode(); } catch { code = null; }
  if (!code && w.location) {
    const q = new URLSearchParams(w.location.search), room = (q.get('live') || '').toUpperCase(), secret = (w.location.hash || '').slice(1);
    if (/^[0-9A-Z]{8}$/.test(room) && /^[A-Za-z0-9_-]{22,43}$/.test(secret)) {
      link = { room, secret };
      url = (w.location.protocol === 'https:' ? 'wss://' : 'ws://') + w.location.host + '/live/relay/join/' + room;
      q.delete('live');
      try { w.history.replaceState(w.history.state, '', w.location.pathname + (q.toString() ? '?' + q : '')); } catch { /* no history */ }
    }
  }
  if (!code && !link) return false;
  const adapter = createLiveAdapter({ host: fileHost });
  if (!adapter) return false;
  await lv.join({ adapter, name: t('live.guest'), code: code || undefined, link: link || undefined, url });
  return true;
}
