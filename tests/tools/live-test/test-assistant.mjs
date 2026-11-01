#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-assistant.mjs — an assistant as its own session client (0.5 LV.18, final sweep; LIVE-PROTOCOL.md § 4.8): the
 * person's client asks for a one-time key (`assistant` → `assistant-key`), a second LiveClient in the same window joins
 * with it (role `assistant`, `peer.of` = its person) and shares the person's model; steps the window routes to it go on
 * its own connection, with its own undo. Against the real session server (tools/live-test/server's `live-server`).
 *
 *   node tools/live-test/test-assistant.mjs [--only <substring>] [--verbose]
 *
 * Covers: the host's own assistant gets in at once; an editor's waits for the host's approval (approve → assistant
 * whatever role was picked; deny → its waiting edits are taken back); refused for viewers (no key, and a person made a
 * viewer loses theirs); its own undo (the person's undo stays theirs; undo skipped when someone wrote over it);
 * disconnect cleans up (holds released, peer gone, its waiting edits taken back or decided once); the person leaving or
 * removed takes it along; a forged or reused key is refused; the handshake with the key over an encrypted connection; a
 * random run with people and assistants converging.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import readline from 'node:readline';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
await import(path.join(root, 'tools/live-crypto/node-hook.mjs'));
const Crypto = await import(path.join(root, 'public_html/assets/js/live-crypto.js'));
const { LiveClient, webSocketTransport } = await import(path.join(root, 'public_html/assets/js/live-client.js'));
const { toyAdapter } = await import('./toy-adapter.mjs');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const verbose = args.includes('--verbose');
const bin = path.join(here, 'server/target/release/live-server');
const TOKEN = 'test-token-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function server(...extra) {
  const secure = extra.includes('--secure');
  extra = extra.filter((x) => x !== '--secure');
  const p = spawn(bin, ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, ...(secure ? [] : ['--plain']), ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  const line = await new Promise((res) => readline.createInterface({ input: p.stdout }).once('line', res));
  const { addr } = JSON.parse(line);
  return { url: `ws://${addr}/live`, stop: () => { p.stdin.end(); p.kill(); } };
}

const clients = [];
const watch = (c) => {
  c.events = [];
  for (const t of ['status', 'refused', 'undo-skipped', 'join', 'code', 'peer', 'holds', 'assistant-key']) c.on(t, (d) => c.events.push([t, d]));
  clients.push(c);
  return c;
};
function client(srv, name, opts = {}) {
  const adapter = opts.adapter || toyAdapter(name);
  const c = watch(new LiveClient(Object.assign({ transport: webSocketTransport(srv.url), adapter, name, device: 'test', secure: false, crypto: Crypto }, opts)));
  c.adapterRef = adapter;
  c.connect();
  return c;
}
const host = (srv, opts = {}) => client(srv, 'Host', Object.assign({ role: 'host', token: TOKEN }, opts));

/** What host.live.assistant() does in a window: a key from the person's client, then a second client sharing its model. */
async function assistant(srv, person, name = 'Helper', opts = {}) {
  const key = await person.requestAssistant();
  if (!key) return null;
  const a = watch(new LiveClient(Object.assign({ transport: webSocketTransport(srv.url), person, assistantKey: key, name, device: 'test', secure: false, crypto: Crypto }, opts)));
  person.linkAssistant(a);
  a.connect();
  return a;
}
/** The window routes a step to `a` while "its call runs" (Studio: host.control.acting). */
const by = (person, a, fn) => { person.route = () => a; try { return fn(); } finally { person.route = null; } };

async function until(cond, what, ms = 5000) {
  const t0 = Date.now();
  while (!cond()) {
    if (Date.now() - t0 > ms) throw new Error('timed out waiting for ' + what);
    await sleep(5);
  }
}
const live = (...cs) => until(() => cs.every((c) => c.status === 'live'), 'live: ' + cs.map((c) => c.o.name + '=' + c.status).join(', '));
const quiet = (cs) => cs.every((c) => c.pending.length === 0 && c.inbox.length === 0 && !c.flushQueued) && new Set(cs.filter((c) => !c.final).map((c) => c.q)).size === 1;
async function settled(...cs) {
  await until(() => quiet(cs), 'settled: ' + cs.map((c) => `${c.o.name} q${c.q} p${c.pending.length} ${c.status}`).join(', '));
  await sleep(25);
  await until(() => quiet(cs), 'settled again');
}
const same = (...cs) => { const h = cs.map((c) => c.adapterRef.hash()); for (const x of h) assert.equal(x, h[0], 'models differ'); };
const ev = (c, t) => c.events.filter(([x]) => x === t).map(([, d]) => d);

let pass = 0, fail = 0;
const tests = [];
const test = (name, fn) => tests.push({ name, fn });

// ---------------------------------------------------------------------------------------------------------------------

test('the host\'s own assistant gets in at once; its edits go on its own client, with its own undo', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), B = client(srv, 'Ben');
  await live(H, B);
  const a = await assistant(srv, H);
  assert.ok(a, 'a key');
  await live(a);
  assert.equal(a.role, 'assistant');
  assert.equal(ev(H, 'join').length, 0, 'no approve card for the host\'s own');
  await until(() => B.peers.get(a.c) && B.peers.get(a.c).of === H.c, 'others see it as the host\'s assistant');
  assert.equal(B.peers.get(a.c).role, 'assistant');
  H.adapterRef.edit('host draws', [{ op: 'add', id: 'h1', obj: { color: 1 } }]);
  by(H, a, () => H.adapterRef.edit('Assistant: add', [{ op: 'add', id: 'a1', obj: { color: 2 } }]));
  assert.ok(H.adapterRef.model.has('a1'), 'applied in the window at once');
  await settled(H, B, a);
  same(H, B);
  assert.equal(H.undoStack.length, 1, 'the person\'s undo has only the person\'s edit');
  assert.equal(a.undoStack.length, 1, 'the assistant\'s undo has its own');
  // the assistant undoes its own work; the host's edit stays
  by(H, a, () => assert.ok(H.undo()));
  await settled(H, B, a);
  same(H, B);
  assert.ok(!B.adapterRef.model.has('a1') && B.adapterRef.model.has('h1'), 'undo took back only the assistant\'s');
  // and the person's undo is the person's
  assert.ok(H.undo());
  await settled(H, B, a);
  assert.ok(!B.adapterRef.model.has('h1'));
  srv.stop();
});

test('an editor\'s assistant waits for the host: approved as an assistant; denied → its waiting edits are taken back', async () => {
  const srv = await server();
  const H = host(srv);
  await live(H);
  const A = client(srv, 'Ana');
  await until(() => ev(H, 'join').length === 1, 'Ana knocks');
  H.approve(ev(H, 'join')[0].c, 'editor');
  await live(A);
  const a = await assistant(srv, A);
  await until(() => ev(H, 'join').length === 2, 'the assistant knocks');
  const card = ev(H, 'join')[1];
  assert.equal(card.assistant.of, A.c, 'the card says whose');
  assert.equal(card.assistant.of_name, 'Ana');
  assert.equal(a.status, 'waiting');
  // an edit made while it waits is kept here and sent once it is in
  by(A, a, () => A.adapterRef.edit('Assistant: add', [{ op: 'add', id: 'w1', obj: { n: 1 } }]));
  assert.ok(A.adapterRef.model.has('w1'));
  H.approve(card.c, 'editor');             // whatever the host picks, an assistant is an assistant
  await live(a);
  assert.equal(a.role, 'assistant');
  await settled(H, A, a);
  same(H, A);
  assert.ok(H.adapterRef.model.has('w1'));
  // a second assistant, denied: what it did meanwhile goes back
  const b = await assistant(srv, A, 'Other');
  await until(() => ev(H, 'join').length === 3, 'second knock');
  by(A, b, () => A.adapterRef.edit('Assistant: add', [{ op: 'add', id: 'w2', obj: { n: 2 } }]));
  assert.ok(A.adapterRef.model.has('w2'));
  H.deny(ev(H, 'join')[2].c);
  await until(() => b.status === 'denied', 'denied');
  await settled(H, A);
  assert.ok(!A.adapterRef.model.has('w2'), 'taken back in the person\'s window');
  same(H, A);
  assert.equal(ev(b, 'refused').at(-1).reason, 'gone');
  srv.stop();
});

test('refused for viewers: no key; a person made a viewer loses their assistant', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), V = client(srv, 'Vic'), A = client(srv, 'Ana');
  await live(H, V, A);
  H.setRole(V.c, 'viewer');
  await until(() => V.role === 'viewer', 'viewer');
  assert.equal(await V.requestAssistant(), null, 'the client asks nothing as a viewer');
  V.send({ t: 'assistant', b: {} });       // and the server refuses one anyway
  await until(() => ev(V, 'assistant-key').length === 1, 'answer');
  assert.equal(ev(V, 'assistant-key')[0].reason, 'role');
  assert.equal(ev(V, 'assistant-key')[0].kid, undefined);
  const a = await assistant(srv, A);
  await live(a);
  H.setRole(A.c, 'viewer');
  await until(() => a.status === 'removed', 'the assistant goes when its person can only look');
  assert.equal(a.events.filter(([t, d]) => t === 'status' && d.status === 'removed')[0][1].reason, 'person');
  srv.stop();
});

test('own undo is skipped when someone wrote over it, and says who', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), B = client(srv, 'Ben');
  await live(H, B);
  H.adapterRef.edit('add', [{ op: 'add', id: 'o', obj: { color: 0 } }]);
  await settled(H, B);
  const a = await assistant(srv, H);
  await live(a);
  by(H, a, () => H.adapterRef.edit('Assistant: color', [{ op: 'set', id: 'o', f: 'color', v: 5 }]));
  await settled(H, B, a);
  B.adapterRef.edit('color', [{ op: 'set', id: 'o', f: 'color', v: 9 }]);
  await settled(H, B, a);
  by(H, a, () => assert.equal(H.undo(), false));
  const sk = ev(a, 'undo-skipped').at(-1);
  assert.equal(sk.byName, 'Ben', 'undo skipped, by Ben');
  assert.equal(H.adapterRef.model.get('o').color, 9);
  srv.stop();
});

test('disconnect cleans up: holds released, peer gone, edits still waiting taken back or decided once; the person leaving takes it along', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  await live(H, A, B);
  const a = await assistant(srv, A);
  await live(a);
  a.hold(['e:x']);
  await until(() => B.holds.get('e:x') === a.c, 'its hold seen');
  // an edit, then gone at once (the window's Disconnect): the edit is decided once — kept everywhere or nowhere
  by(A, a, () => A.adapterRef.edit('Assistant: add', [{ op: 'add', id: 'late', obj: { n: 1 } }]));
  a.leave();
  await until(() => B.peers.get(a.c) && B.peers.get(a.c).state === 'gone', 'peer gone');
  await until(() => !B.holds.has('e:x'), 'hold released');
  await settled(H, A, B);
  same(H, A, B);
  assert.equal(A.assistants.size, 0, 'unlinked');
  assert.equal(A.pending.length, 0, 'nothing of it waits in the person\'s window');
  // an edit routed to a client that has left is refused at once (the window keeps nothing it can't send)
  by(A, a, () => A.adapterRef.edit('Assistant: add', [{ op: 'add', id: 'after', obj: {} }]));
  assert.ok(!A.adapterRef.model.has('after'));
  // the person leaving takes its assistant along
  const b = await assistant(srv, A);
  await live(b);
  A.leave();
  await until(() => b.status === 'removed', 'removed with its person');
  srv.stop();
});

test('a forged or reused key is refused; the key works through the handshake on an encrypted connection', async () => {
  const srv = await server('--secure', '--auto-approve');
  const H = host(srv);
  await live(H);
  H.invite({});
  await until(() => ev(H, 'code').length === 1, 'code');
  const A = client(srv, 'Ana', { secure: true, code: ev(H, 'code')[0].code });
  await live(A);
  const a = await assistant(srv, A, 'Helper', { secure: true });
  await live(a);
  assert.equal(a.role, 'assistant');
  assert.ok(a.keys, 'over a sealed connection');
  by(A, a, () => A.adapterRef.edit('Assistant: add', [{ op: 'add', id: 's1', obj: {} }]));
  await settled(H, A, a);
  same(H, A);
  // the same key again: used up
  const again = watch(new LiveClient({ transport: webSocketTransport(srv.url), person: A, assistantKey: a.o.assistantKey, name: 'Again', secure: true, crypto: Crypto }));
  again.connect();
  await until(() => again.final, 'refused');
  assert.ok(['failed', 'denied'].includes(again.status), again.status);
  // a forged key (right kid shape, wrong secret)
  const key = await A.requestAssistant();
  const forged = watch(new LiveClient({ transport: webSocketTransport(srv.url), person: A, assistantKey: { ...key, secret: new Uint8Array(32) }, name: 'Forged', secure: true, crypto: Crypto }));
  forged.connect();
  await until(() => forged.final, 'refused');
  assert.equal(forged.status, 'failed');
  srv.stop();
  // on a plain test server the key rides in hello: a wrong secret is denied
  const srv2 = await server('--auto-approve');
  const H2 = host(srv2);
  await live(H2);
  const k2 = await H2.requestAssistant();
  const f2 = watch(new LiveClient({ transport: webSocketTransport(srv2.url), person: H2, assistantKey: { ...k2, secret: new Uint8Array(32).fill(7) }, name: 'Forged', secure: false }));
  f2.connect();
  await until(() => f2.final, 'denied');
  assert.equal(f2.status, 'denied');
  srv2.stop();
});

test('people and assistants editing at random converge', async () => {
  const srv = await server('--auto-approve');
  const H = host(srv), A = client(srv, 'Ana'), B = client(srv, 'Ben');
  await live(H, A, B);
  const ha = await assistant(srv, H, 'H-helper'), aa = await assistant(srv, A, 'A-helper');
  await live(ha, aa);
  let seed = 11;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  const ids = ['o1', 'o2', 'o3', 'o4'];
  for (const id of ids) H.adapterRef.edit('add', [{ op: 'add', id, obj: { c: 0 } }]);
  await settled(H, A, B, ha, aa);
  const actors = [[H, null], [A, null], [B, null], [H, ha], [A, aa]];
  for (let i = 0; i < 400; i++) {
    const [p, a] = actors[Math.floor(rnd() * actors.length)];
    const id = ids[Math.floor(rnd() * ids.length)];
    const r = rnd();
    const step = () => {
      if (r < 0.6) p.adapterRef.edit('set', [{ op: 'set', id, f: 'c', v: i }, { op: 'set', id, f: 'w', v: p.o.name + (a ? '+' : '') }]);
      else if (r < 0.75) p.adapterRef.edit('add', [{ op: 'add', id: id + ':' + i, obj: { c: i } }]);
      else if (r < 0.85) { const k = [...p.adapterRef.model.keys()].find((x) => x.includes(':')); if (k) p.adapterRef.edit('del', [{ op: 'del', id: k }]); }
      else p.undo();
    };
    if (a) by(p, a, step); else step();
    if (i % 20 === 0) await sleep(3);
  }
  await settled(H, A, B, ha, aa);
  same(H, A, B);
  assert.ok(ha.undoStack.length + aa.undoStack.length > 0, 'assistants kept their own undo');
  srv.stop();
});

// ---------------------------------------------------------------------------------------------------------------------

for (const t of tests) {
  if (only && !t.name.includes(only)) continue;
  const t0 = Date.now();
  try {
    await t.fn();
    pass++;
    console.log(`ok   ${t.name} (${Date.now() - t0} ms)`);
  } catch (e) {
    fail++;
    console.log(`FAIL ${t.name}: ${verbose ? e.stack : e.message}`);
  } finally {
    for (const c of clients.splice(0)) c.stop();
  }
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
