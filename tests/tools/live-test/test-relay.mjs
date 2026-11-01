#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-relay.mjs — Studio's side of the relay (live/relay.rs) with the real relay daemon (session live-relay's
 * /var/www/CADCRAFT/relay/server.mjs, started in-process against a stand-in site, as its own tests do; nothing touches
 * getcadcraft.com). The Rust session server hosts through it; joiners come in with an invite link's secret.
 *
 *   node tools/live-test/test-relay.mjs
 *
 * Covers: the host socket and ticket; joiners through the relay (handshake end to end with context relay:<ROOM>, sealed
 * frames the relay can't read), approval cards marked "relay"; edits converge between relay and LAN joiners; the host
 * removing a relay joiner; the relay dropping the host socket (every relay joiner rejoins on its own); ending the room.
 */
import { spawn } from 'node:child_process';
import http from 'node:http';
import path from 'node:path';
import readline from 'node:readline';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const RELAY = process.env.CADCRAFT_RELAY || '/var/www/CADCRAFT/relay';
await import(path.join(root, 'tools/live-crypto/node-hook.mjs'));
const Crypto = await import(path.join(root, 'public_html/assets/js/live-crypto.js'));
const { LiveClient, webSocketTransport } = await import(path.join(root, 'public_html/assets/js/live-client.js'));
const { toyAdapter } = await import('./toy-adapter.mjs');
const { startRelay } = await import(path.join(RELAY, 'server.mjs'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(cond, what, ms = 8000) { const t0 = Date.now(); while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(5); } }

// ---- stand-in site (the relay-only API LiveRooms answers) ----------------------------------------------------------
const KEY = 'k'.repeat(40);
const ROOM = 'K7QX9M2B', TICKET = 'ticket-' + Math.random().toString(36).slice(2);
const site = { open: true, ends: [] };
const siteServer = http.createServer((req, res) => {
  let body = '';
  req.on('data', (c) => { body += c; });
  req.on('end', () => {
    const reply = (st, data) => { res.writeHead(st, { 'content-type': 'application/json' }); res.end(JSON.stringify(data)); };
    if (req.headers.authorization !== 'Bearer ' + KEY) return reply(404, { status: 'error' });
    const j = JSON.parse(body || '{}');
    const ep = req.url.replace('/api/v1/live/relay/', '');
    const limits = { room: ROOM, expires_ts: Math.floor(Date.now() / 1000) + 3600, max_clients: 20, license_ok: true, room_bytes_left: 1e9 };
    const okRoom = j.room === ROOM && site.open;
    if (ep === 'host') return okRoom && j.ticket === TICKET ? reply(200, { status: 'success', data: { limits } }) : reply(404, { status: 'error', code: 'not_found' });
    if (ep === 'join') return okRoom ? reply(200, { status: 'success', data: { limits } }) : reply(404, { status: 'error', code: 'not_found' });
    if (ep === 'end') { site.ends.push(j); site.open = false; return reply(200, { status: 'success', data: {} }); }
    if (ep === 'tick') return reply(200, { status: 'success', data: { rooms: (j.rooms || []).map((x) => ({ room: x.room, action: 'continue', license_ok: true, expires_ts: limits.expires_ts })) } });
    reply(404, {});
  });
});
await new Promise((r) => siteServer.listen(0, '127.0.0.1', r));
const relay = startRelay({ RELAY_PORT: 0, RELAY_SITE: `http://127.0.0.1:${siteServer.address().port}`, RELAY_KEY: KEY, RELAY_TICK_MS: 3600000,
  RELAY_IP_PER_MIN: 1000, RELAY_IP_OPEN: 1000, RELAY_HOST_WAIT_MS: 2000, quiet: true });
const rport = await relay.ready;
const relayBase = `ws://127.0.0.1:${rport}/relay`;

// ---- the session server, hosting through the relay -----------------------------------------------------------------
const TOKEN = 'rl-' + Math.random().toString(36).slice(2);
const srvProc = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN,
  '--relay', `${relayBase}/host/${ROOM}`, '--ticket', TICKET], { stdio: ['pipe', 'pipe', 'inherit'] });
const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: srvProc.stdout }).once('line', r)));

let pass = 0, fail = 0;
const check = async (name, fn) => { try { await fn(); pass++; console.log('ok   ' + name); } catch (e) { fail++; console.log('FAIL ' + name + ': ' + e.message); } };
const mk = (transportUrl, name, o = {}) => {
  const a = toyAdapter(name);
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(transportUrl), adapter: a, name, crypto: Crypto }, o));
  c.a = a; c.statuses = []; c.relayNotes = [];
  c.on('status', (s) => c.statuses.push(s.status));
  c.connect();
  return c;
};

const H = mk(`ws://${addr}/live`, 'Host', { role: 'host', token: TOKEN, secure: false });
const joins = [];
H.on('join', (b) => { joins.push(b); H.approve(b.c, 'editor'); });
// relay notices reach the host window as `relay` envelopes
const notes = [];
const origMessage = H.message.bind(H);
H.message = (m) => { if (m.t === 'relay') notes.push(m.b); return origMessage(m); };
await until(() => H.status === 'live', 'host');
const secretB64 = Crypto.newLinkSecret();
const secret = Crypto.parseLinkSecret(secretB64);
H.addLink(ROOM, secret, ROOM, {});
H.a.edit('add', [{ op: 'add', id: 'o', obj: { color: 1 } }]);
H.savedFile('sha256:none');

await check('the host socket connects with its ticket (relay says ready)', async () => {
  await until(() => notes.some((n) => n.state === 'ready'), 'ready notice');
  assert.equal(notes.find((n) => n.state === 'ready').room, ROOM);
});

const joinUrl = `${relayBase}/join/${ROOM}`;
const R1 = mk(joinUrl, 'Rita', { link: { room: ROOM, secret: secretB64 } });
const R2 = mk(joinUrl, 'Raj', { link: { room: ROOM, secret: secretB64 } });
const L1 = mk(`ws://${addr}/live`, 'Lena', { link: { room: ROOM, secret: secretB64 } }); // the same link, on the LAN (LV.26)

await check('joiners through the relay: handshake end to end, approval cards say "relay" (and "lan" for the LAN shortcut)', async () => {
  await until(() => [R1, R2, L1].every((c) => c.status === 'live' && c.a.model.has('o')), 'all live with the model');
  const via = Object.fromEntries(joins.map((j) => [j.name, j.via]));
  assert.deepEqual(via, { Rita: 'relay', Raj: 'relay', Lena: 'lan' });
  assert.ok(R1.keys && R2.keys && L1.keys, 'sealed frames');
});

await check('edits converge between relay joiners, the LAN joiner and the host', async () => {
  for (let i = 0; i < 25; i++) for (const c of [H, R1, R2, L1]) c.a.edit('e', [{ op: 'set', id: 'o', f: c.o.name + i % 5, v: i }]);
  await until(() => [H, R1, R2, L1].every((c) => !c.pending.length && !c.inbox.length) && new Set([H, R1, R2, L1].map((c) => c.q)).size === 1, 'settled');
  for (const c of [R1, R2, L1]) assert.equal(c.a.hash(), H.a.hash());
});

await check('a wrong link secret never gets in, and counts as a wrong try', async () => {
  const W = mk(joinUrl, 'Wrong', { link: { room: ROOM, secret: Crypto.newLinkSecret() } });
  await until(() => W.status === 'failed', 'refused');
  W.stop();
});

await check('the host removes a relay joiner: gone at once, no rejoin', async () => {
  const raj = joins.find((j) => j.name === 'Raj').c;
  H.remove(raj);
  await until(() => R2.status === 'removed', 'Raj removed');
  await sleep(300);
  assert.equal(R2.status, 'removed');
  assert.equal(R1.status, 'live');
});

await check('the relay drops the host socket: relay joiners rejoin on their own, nothing lost', async () => {
  R1.a.edit('before', [{ op: 'set', id: 'o', f: 'before', v: 1 }]);
  await until(() => !R1.pending.length, 'committed');
  // a second host connection with the ticket replaces ours (4002): as if Studio's socket dropped
  const imposter = new (await import(path.join(RELAY, 'node_modules/ws/index.js'))).default(`${relayBase}/host/${ROOM}`);
  await new Promise((r) => imposter.on('open', r));
  imposter.send(JSON.stringify({ t: 'host', ticket: TICKET }));
  await until(() => notes.some((n) => n.state === 'reconnecting'), 'the server noticed');
  imposter.close();
  await until(() => notes.filter((n) => n.state === 'ready').length >= 2, 'host socket back');
  await until(() => R1.status === 'live' && R1.statuses.includes('reconnecting'), 'Rita back', 20000);
  R1.a.edit('after', [{ op: 'set', id: 'o', f: 'after', v: 1 }]);
  await until(() => [H, R1, L1].every((c) => !c.pending.length && !c.inbox.length) && new Set([H, R1, L1].map((c) => c.q)).size === 1, 'settled', 10000);
  assert.equal(R1.a.hash(), H.a.hash());
  assert.equal(H.a.model.get('o').after, 1);
});

await check('ending the session ends the room: relay joiners end and keep their copy', async () => {
  H.end();
  await until(() => R1.status === 'ended' && L1.status === 'ended', 'ended');
  assert.ok(R1.a.model.has('o'));
});

for (const c of [H, R1, R2, L1]) c.stop();
srvProc.stdin.end(); srvProc.kill();
await relay.close?.();
siteServer.close();
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
