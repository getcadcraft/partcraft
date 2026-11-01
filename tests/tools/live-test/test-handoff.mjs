#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-handoff.mjs — over real sockets with encryption on: a joiner's signed-in name (LV.19: `signIn(aud)` → `hello.assertion`
 * / `picture`, and `join.aud` = the same connection's assertion audience), and host handoff (LV.17, spec § 10): the host
 * hands over to an editor, a second session server starts from the state (`live-server --from`), everyone follows `moved`
 * with a ticket from their own handshake (the old host with the one in its `moved`): no code, no approval; an edit made
 * while handing over commits once on the new host; roles swap; the models stay identical. Also: a short-code joiner rejoins
 * after its code expired (its rejoin ticket, LIVE-PROTOCOL § 8); a handoff to someone who came through the relay with a
 * state over 2 MB (sent in chunks under the relay's frame limit), the new host opening a room of its own and relay joiners
 * following it there, and a joiner who can reach neither told the session moved (`lost`, reason `moved`).
 *
 *   node tools/live-test/test-handoff.mjs
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
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
const TOKEN = 'handoff-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(cond, what, ms = 8000) { const t0 = Date.now(); while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(5); } }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cc-live-handoff-'));
const procs = [];

async function server(extra = []) {
  const p = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  procs.push(p);
  const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
  const [h, port] = addr.split(':');
  return { url: `ws://${addr}/live`, host: h, port: +port, stop: () => { p.stdin.end(); p.kill(); } };
}

let pass = 0, fail = 0;
const check = async (name, fn) => { try { await fn(); pass++; console.log('ok   ' + name); } catch (e) { fail++; console.log('FAIL ' + name + ': ' + (e.stack || e.message)); } };
const mk = (url, name, o = {}) => {
  const a = toyAdapter(name);
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(url), adapter: a, name, crypto: Crypto }, o));
  c.a = a; c.statuses = [];
  c.on('status', (s) => c.statuses.push(s.status));
  c.connect();
  return c;
};
async function hostWithCode(srv) {
  const H = mk(srv.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  const codes = [], joins = [];
  H.on('code', (b) => codes.push(b.code));
  H.on('join', (b) => joins.push(b));
  await until(() => H.status === 'live', 'host');
  H.invite({});
  await until(() => codes.length, 'code');
  return { H, code: codes[0], joins };
}

await check('signed-in name: hello carries signIn’s assertion and picture; join carries the same connection’s aud', async () => {
  const srv = await server(['--token', TOKEN]);
  const { H, code, joins } = await hostWithCode(srv);
  let asked = null;
  const pic = Uint8Array.from({ length: 40 }, (_, i) => i);
  const A = mk(srv.url, 'Ana', { code, signIn: async (aud) => { asked = aud; return { assertion: 'v1.claims.sig', picture: pic }; } });
  await until(() => joins.length, 'join card');
  assert.equal(typeof asked, 'string');
  assert.equal(asked.length, 43, 'aud = base64url of 32 bytes');
  assert.equal(joins[0].aud, asked, 'server and joiner agree on the audience');
  assert.equal(joins[0].assertion, 'v1.claims.sig');
  assert.deepEqual([...joins[0].picture], [...pic]);
  // a second joiner has another audience (bound to its own connection)
  const B = mk(srv.url, 'Ben', { code, signIn: async () => null });
  await until(() => joins.length === 2, 'second join card');
  assert.ok(joins[1].aud && joins[1].aud !== joins[0].aud, 'per-connection audience');
  assert.ok(!joins[1].assertion, 'no assertion when signIn gives none');
  // a signIn that never answers delays hello at most 4 s
  const t0 = Date.now();
  const C = mk(srv.url, 'Cy', { code, signIn: () => new Promise(() => {}) });
  await until(() => joins.length === 3, 'join after the sign-in timeout', 7000);
  assert.ok(Date.now() - t0 >= 3500 && !joins[2].assertion, 'hello went without the assertion');
  // the host's plain local window has no handshake: no aud
  H.stop(); A.stop(); B.stop(); C.stop(); srv.stop();
});

await check('host handoff: everyone moves to the new host with tickets, no code, no approval; nothing lost or doubled', async () => {
  const s1 = await server(['--token', TOKEN, '--auto-approve']);
  const { H, code } = await hostWithCode(s1);
  const A = mk(s1.url, 'Ana', { code });
  let s2 = null;
  const B = mk(s1.url, 'Ben', {
    code,
    takeOver: async (state) => {
      const f = path.join(tmp, 'state.bin');
      fs.writeFileSync(f, state);
      s2 = await server(['--from', f]);   // no --auto-approve: nobody may need approving again
      return { addrs: ['127.0.0.1'], port: s2.port, transport: webSocketTransport(s2.url), local: false };
    },
  });
  await until(() => A.status === 'live' && B.status === 'live', 'joined');
  H.a.edit('add', [{ op: 'add', id: 'h1', obj: { c: 1 } }]);
  A.a.edit('add', [{ op: 'add', id: 'a1', obj: { c: 2 } }]);
  B.a.edit('add', [{ op: 'add', id: 'b1', obj: { c: 3 } }]);
  await until(() => [H, A, B].every((c) => c.q === 3 && !c.pending.length), 'three commits everywhere');
  const moved = [];
  for (const c of [H, A, B]) c.on('moved', (m) => moved.push([c.o.name, m]));
  H.handover(B.c);
  // edits made while the state is on its way: undecided on the old host, committed once on the new one
  A.a.edit('set', [{ op: 'set', id: 'h1', f: 'color', v: 7 }]);
  await until(() => B.role === 'host' && A.relocated && H.relocated && [H, A, B].every((c) => c.status === 'live' && !c.pending.length), 'everyone on the new host', 10000);
  assert.equal(moved.length, 3);
  assert.ok(A.key && A.key.kid === 'h:' + A.c && A.key.context === 'rejoin:' + A.session, 'A came back with its ticket');
  assert.ok(H.key && H.key.secret.length === 32, 'the old host got a ticket in its moved');
  assert.equal(H.role, 'editor', 'the old host is an editor now');
  await until(() => H.q === A.q && A.q === B.q, 'same seq');
  assert.equal(A.q, 4, 'the edit made during the handover committed once');
  assert.equal(H.a.model.get('h1').color, 7);
  // the new host works as host: an edit from the old host commits there and reaches everyone
  H.a.edit('set', [{ op: 'set', id: 'a1', f: 'color', v: 9 }]);
  await until(() => [H, A, B].every((c) => c.q === 5 && !c.pending.length), 'a commit on the new host');
  assert.equal(A.a.hash(), B.a.hash());
  assert.equal(H.a.hash(), B.a.hash());
  // and it hosts: a lock from B (the new host) holds for A
  B.lock(['e:b1']);
  await until(() => A.locks.has('e:b1'), 'lock from the new host');
  // the old session server is idle: nobody is left on it
  for (const c of [H, A, B]) c.stop();
  s1.stop(); s2.stop();
});

await check('handover to someone who is not there is called off; edits go on committing', async () => {
  const s1 = await server(['--token', TOKEN, '--auto-approve']);
  const { H, code } = await hostWithCode(s1);
  const A = mk(s1.url, 'Ana', { code });
  await until(() => A.status === 'live', 'joined');
  const off = [];
  H.on('handover-off', (b) => off.push(b));
  H.handover(999);
  await until(() => off.length, 'handover-off');
  assert.equal(off[0].reason, 'unknown');
  // A is handed the state but has no takeOver and leaves: called off, commits resume
  H.handover(A.c);
  await sleep(100);
  A.a.edit('add', [{ op: 'add', id: 'x', obj: {} }]);
  await sleep(200);
  assert.equal(H.q, 0, 'nothing commits while handing over');
  A.leave();
  await until(() => off.length === 2, 'called off when the new host left');
  assert.equal(off[1].reason, 'gone');
  H.a.edit('add', [{ op: 'add', id: 'y', obj: {} }]);
  // A's edit, queued while frozen, is decided now (it was sent before A left), then the host's
  await until(() => H.q === 2 && !H.pending.length, 'commits again');
  assert.ok(H.a.model.has('x') && H.a.model.has('y'));
  H.stop(); s1.stop();
});

await check('a short-code joiner rejoins after its code expired (with its rejoin ticket, not the code)', async () => {
  const srv = await server(['--token', TOKEN, '--auto-approve']);
  const H = mk(srv.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  const codes = [], gone = [];
  H.on('code', (b) => codes.push(b.code));
  H.on('code-gone', (b) => gone.push(b));
  await until(() => H.status === 'live', 'host');
  H.send({ t: 'invite', b: { one_time: false, ttl: 10000 } });   // the shortest a code may live
  await until(() => codes.length, 'code');
  const A = mk(srv.url, 'Ana', { code: codes[0] });
  await until(() => A.status === 'live', 'joined');
  assert.ok(A.key && A.key.kid === 'h:' + A.c, 'A holds its rejoin ticket');
  await until(() => gone.some((g) => g.reason === 'expired'), 'the code expired', 15000);
  const late = mk(srv.url, 'Late', { code: codes[0] });
  await until(() => late.final, 'the expired code is refused');
  A.hangUp('test drop');
  await until(() => A.statuses.includes('reconnecting') && A.status === 'live', 'A back in after the code expired', 10000);
  H.a.edit('add', [{ op: 'add', id: 'after', obj: {} }]);
  await until(() => A.a.model.has('after'), 'and in step');
  for (const c of [H, A, late]) c.stop();
  srv.stop();
});

await check('handoff through the relay: a state over 2 MB in chunks, the new host\'s own room, relay joiners follow; one who can\'t is told', async () => {
  const http = await import('node:http');
  const RELAY = process.env.CADCRAFT_RELAY || '/var/www/CADCRAFT/relay';
  const { startRelay } = await import(path.join(RELAY, 'server.mjs'));
  const KEY = 'k'.repeat(40);
  const rooms = { K7QX9M2B: 'ticket-one-' + Math.random().toString(36).slice(2), M2B7QX9K: 'ticket-two-' + Math.random().toString(36).slice(2) };
  const site = http.createServer((req, res) => {
    let body = '';
    req.on('data', (c) => { body += c; });
    req.on('end', () => {
      const reply = (st, data) => { res.writeHead(st, { 'content-type': 'application/json' }); res.end(JSON.stringify(data)); };
      if (req.headers.authorization !== 'Bearer ' + KEY) return reply(404, {});
      const j = JSON.parse(body || '{}');
      const ep = req.url.replace('/api/v1/live/relay/', '');
      const limits = { room: j.room, expires_ts: Math.floor(Date.now() / 1000) + 3600, max_clients: 20, license_ok: true, room_bytes_left: 1e9 };
      if (ep === 'host') return rooms[j.room] && j.ticket === rooms[j.room] ? reply(200, { status: 'success', data: { limits } }) : reply(404, { code: 'not_found' });
      if (ep === 'join') return rooms[j.room] ? reply(200, { status: 'success', data: { limits } }) : reply(404, { code: 'not_found' });
      if (ep === 'end') return reply(200, { status: 'success', data: {} });
      if (ep === 'tick') return reply(200, { status: 'success', data: { rooms: (j.rooms || []).map((x) => ({ room: x.room, action: 'continue', license_ok: true, expires_ts: limits.expires_ts })) } });
      reply(404, {});
    });
  });
  await new Promise((r) => site.listen(0, '127.0.0.1', r));
  const relay = startRelay({ RELAY_PORT: 0, RELAY_SITE: `http://127.0.0.1:${site.address().port}`, RELAY_KEY: KEY, RELAY_TICK_MS: 3600000,
    RELAY_IP_PER_MIN: 1000, RELAY_IP_OPEN: 1000, RELAY_HOST_WAIT_MS: 2000, quiet: true });
  const rbase = `ws://127.0.0.1:${await relay.ready}/relay`;
  const roomUrl = (room) => `${rbase}/join/${room}`;
  const s1 = await server(['--token', TOKEN, '--auto-approve', '--relay', `${rbase}/host/K7QX9M2B`, '--ticket', rooms.K7QX9M2B]);
  const H = mk(s1.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  await until(() => H.status === 'live', 'host');
  const secret = Crypto.parseLinkSecret(Crypto.newLinkSecret());
  H.addLink('K7QX9M2B', secret, 'K7QX9M2B', {});
  // A log over 2 MB: three edits of ~900 KB each (an edit may be up to 1 MB).
  for (let i = 0; i < 3; i++) H.a.edit('add', [{ op: 'add', id: 'big' + i, obj: { blob: 'x'.repeat(900 * 1024) } }]);
  await until(() => H.q === 3 && !H.pending.length, 'the big edits');
  const viaRelay = (name, o = {}) => mk(roomUrl('K7QX9M2B'), name, Object.assign({ link: { room: 'K7QX9M2B', secret }, roomUrl }, o));
  const unreachable = (h) => { setTimeout(() => h.close('unreachable', 0), 10); return { send() {}, close() {} }; };
  let s2 = null, stateBytes = 0, chunks = 0;
  const B = viaRelay('Ben', {
    takeOver: async (state) => {
      stateBytes = state.length;
      const f = path.join(tmp, 'state-big.bin');
      fs.writeFileSync(f, state);
      s2 = await server(['--from', f, '--relay', `${rbase}/host/M2B7QX9K`, '--ticket', rooms.M2B7QX9K]);
      return { addrs: ['127.0.0.1'], port: s2.port, transport: webSocketTransport(s2.url), local: false };
    },
    newRoom: async () => 'M2B7QX9K',
  });
  const origB = B.message.bind(B);
  B.message = (m) => { if (m.t === 'handover') chunks++; return origB(m); };
  // C came through the relay and can't reach the new host's LAN address: it follows to the new room.
  const C = viaRelay('Cy', { relocate: (url) => (url.includes('/relay/') ? webSocketTransport(url) : unreachable) });
  // D can reach nothing: it is told the session moved out of reach and keeps its copy.
  const D = viaRelay('Dee', { relocate: () => unreachable });
  await until(() => [B, C, D].every((c) => c.status === 'live' && c.q === 3), 'three relay joiners with the big log', 20000);
  H.handover(B.c);
  await until(() => B.role === 'host' && C.relocated && C.status === 'live' && H.status === 'live' && H.relocated, 'moved, through the relay', 30000);
  assert.ok(stateBytes > 2 * 1024 * 1024, 'the state is over 2 MB: ' + stateBytes);
  assert.ok(chunks >= Math.ceil(stateBytes / (256 * 1024)), 'it came in ' + chunks + ' chunks of at most 256 KB');
  assert.ok(C.move === null && C.key && C.key.kid === 'h:' + C.c, 'Cy rejoined in the new host\'s room with its ticket');
  await until(() => D.final, 'Dee gives up', 20000);
  assert.equal(D.status, 'lost');
  assert.equal(D.statuses.includes('lost'), true);
  H.a.edit('add', [{ op: 'add', id: 'after', obj: {} }]);
  await until(() => B.a.model.has('after') && C.a.model.has('after'), 'an edit after the move reaches the relay joiner');
  for (const c of [H, B, C, D]) c.stop();
  s1.stop(); s2.stop();
  await relay.close?.();
  site.close();
});

for (const p of procs) { try { p.kill(); } catch { /* gone */ } }
fs.rmSync(tmp, { recursive: true, force: true });
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
