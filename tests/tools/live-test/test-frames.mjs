#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-frames.mjs — LV.14's security cases, end to end over real sockets with encryption on (LIVE-CRYPTO.md frames):
 * a proxy between a joiner and the session server replays, reorders or tampers with one sealed WebSocket frame, in
 * either direction; the receiving side must close that connection at once (the client then rejoins and nothing is
 * applied twice). Also: a joiner the host never approved can't change anything; a wrong code never gets in.
 *
 *   node tools/live-test/test-frames.mjs
 */
import { spawn } from 'node:child_process';
import net from 'node:net';
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
const TOKEN = 'frames-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(cond, what, ms = 8000) { const t0 = Date.now(); while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(5); } }

async function server(extra = []) {
  const p = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--token', TOKEN, ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
  const [h, port] = addr.split(':');
  return { url: `ws://${addr}/live`, host: h, port: +port, stop: () => { p.stdin.end(); p.kill(); } };
}

/** WebSocket frame boundaries in a byte stream (RFC 6455 § 5.2). Returns [frames, rest]; each frame {raw, opcode, payloadAt}. */
function frames(buf) {
  const out = [];
  let p = 0;
  for (;;) {
    if (buf.length - p < 2) break;
    const op = buf[p] & 0x0f, masked = buf[p + 1] & 0x80;
    let len = buf[p + 1] & 0x7f, at = p + 2;
    if (len === 126) { if (buf.length - p < 4) break; len = buf.readUInt16BE(p + 2); at = p + 4; }
    else if (len === 127) { if (buf.length - p < 10) break; len = Number(buf.readBigUInt64BE(p + 2)); at = p + 10; }
    if (masked) at += 4;
    if (buf.length < at + len) break;
    out.push({ raw: buf.subarray(p, at + len), opcode: op, payloadAt: at - p, len });
    p = at + len;
  }
  return [out, buf.subarray(p)];
}

/**
 * A TCP proxy that passes the HTTP upgrade through, then counts binary WebSocket frames in each direction and attacks
 * the `at`-th one in direction `dir` once: replay (send it twice), reorder (hold it, send it after the next one), or
 * tamper (flip a payload byte). Records when each side closed.
 */
function proxy(target, attack) {
  const log = { attacked: false, attackedAt: 0, serverClosedAt: 0, clientClosedAt: 0, conns: 0 };
  const srv = net.createServer((c) => {
    log.conns++;
    const s = net.connect(target.port, target.host);
    const first = log.conns === 1;
    const pipeDir = (from, to, dir) => {
      let upgraded = false, buf = Buffer.alloc(0), count = 0, held = null;
      from.on('data', (d) => {
        if (!upgraded) {
          // the HTTP upgrade request / response goes through as is
          const all = Buffer.concat([buf, d]);
          const end = all.indexOf('\r\n\r\n');
          if (end < 0) { buf = all; return; }
          to.write(all.subarray(0, end + 4));
          upgraded = true;
          buf = Buffer.alloc(0);
          d = all.subarray(end + 4);
          if (!d.length) return;
        }
        const [fs, rest] = frames(Buffer.concat([buf, d]));
        buf = Buffer.from(rest);
        for (const f of fs) {
          let raw = Buffer.from(f.raw);
          if (f.opcode === 2) count++;
          const hit = first && f.opcode === 2 && dir === attack.dir && count === attack.at && !log.attacked;
          if (hit) {
            log.attacked = true; log.attackedAt = Date.now();
            if (attack.kind === 'replay') { to.write(raw); to.write(raw); continue; }
            if (attack.kind === 'reorder') { held = raw; continue; }
            if (attack.kind === 'tamper') { raw[f.payloadAt + Math.floor(f.len / 2)] ^= 0x01; to.write(raw); continue; }
          }
          to.write(raw);
          if (held) { to.write(held); held = null; }
        }
      });
    };
    pipeDir(c, s, 'c2s');
    pipeDir(s, c, 's2c');
    s.on('close', () => { if (first && !log.serverClosedAt) log.serverClosedAt = Date.now(); c.destroy(); });
    c.on('close', () => { if (first && !log.clientClosedAt) log.clientClosedAt = Date.now(); s.destroy(); });
    s.on('error', () => c.destroy());
    c.on('error', () => s.destroy());
  });
  return new Promise((r) => srv.listen(0, '127.0.0.1', () => r({ url: `ws://127.0.0.1:${srv.address().port}/live`, log, close: () => srv.close() })));
}

let pass = 0, fail = 0;
const check = async (name, fn) => { try { await fn(); pass++; console.log('ok   ' + name); } catch (e) { fail++; console.log('FAIL ' + name + ': ' + e.message); } };
const mk = (url, name, o = {}) => {
  const a = toyAdapter(name);
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(url), adapter: a, name, crypto: Crypto }, o));
  c.a = a; c.statuses = [];
  c.on('status', (s) => c.statuses.push(s.status));
  c.connect();
  return c;
};

async function attackRun(dir, kind) {
  const srv = await server(['--auto-approve']);
  const H = mk(srv.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  const codes = [];
  H.on('code', (b) => codes.push(b.code));
  await until(() => H.status === 'live', 'host');
  H.invite({});
  await until(() => codes.length, 'code');
  // c2s binary frames: 1 pake A, 2 pake confirm, 3 hello, 4… edits/pings. s2c: 1 pake B, 2 pake confirm, 3 welcome, 4… .
  const px = await proxy(srv, { dir, kind, at: 6 });
  const A = mk(px.url, 'Ana', { code: codes[0] });
  await until(() => A.status === 'live', 'joined through the proxy');
  for (let i = 0; i < 10; i++) { A.a.edit('add', [{ op: 'add', id: 'a' + i, obj: { i } }]); H.a.edit('add', [{ op: 'add', id: 'h' + i, obj: { i } }]); await sleep(15); }
  await until(() => px.log.attacked, 'attack done');
  // the side that received the bad frame closes at once
  await until(() => (dir === 'c2s' ? px.log.serverClosedAt : px.log.clientClosedAt), 'connection closed after the bad frame', 3000);
  const ms = (dir === 'c2s' ? px.log.serverClosedAt : px.log.clientClosedAt) - px.log.attackedAt;
  // the joiner rejoins (a fresh connection, no attack) and both end identical, every edit applied once
  await until(() => A.statuses.includes('reconnecting') && A.status === 'live' && A.pending.length === 0 && H.pending.length === 0 && A.q === H.q, 'rejoined and settled');
  await sleep(50);
  assert.equal(A.a.hash(), H.a.hash(), 'models differ');
  assert.equal(H.a.model.size, 20);
  A.stop(); H.stop(); px.close(); srv.stop();
  return ms;
}

for (const dir of ['c2s', 's2c']) {
  for (const kind of ['replay', 'reorder', 'tamper']) {
    await check(`${kind}ed frame ${dir === 'c2s' ? 'joiner → host' : 'host → joiner'}: refused, connection closed, rejoin, nothing applied twice`, async () => {
      const ms = await attackRun(dir, kind);
      assert.ok(ms < 1000, `closed after ${ms} ms`);
    });
  }
}

await check('a joiner the host never approved changes nothing, then is denied', async () => {
  const srv = await server([]);
  const H = mk(srv.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  const codes = [], joins = [];
  H.on('code', (b) => codes.push(b.code));
  H.on('join', (b) => joins.push(b));
  await until(() => H.status === 'live', 'host');
  H.a.edit('add', [{ op: 'add', id: 'o', obj: { color: 1 } }]);
  H.invite({});
  await until(() => codes.length, 'code');
  const M = mk(srv.url, 'Mallory', { code: codes[0] });
  await until(() => M.status === 'waiting' && joins.length, 'waiting for approval');
  // force edits out before any welcome (a modified client could)
  for (let n = 1; n <= 5; n++) M.send({ t: 'edit', n, b: { label: 'x', ops: [{ op: 'set', id: 'o', f: 'color', v: 99 }], touched: [{ k: 'e:o', m: 'p', f: 'color' }] } });
  M.send({ t: 'lock', b: { keys: ['e:o'] } });
  await sleep(200);
  assert.equal(H.q, 1, 'something was committed');
  assert.equal(H.a.model.get('o').color, 1);
  assert.equal(H.locks.size, 0);
  H.deny(joins[0].c);
  await until(() => M.status === 'denied', 'denied');
  H.stop(); M.stop(); srv.stop();
});

await check('a wrong code never gets past the handshake; three in a row replace the code', async () => {
  const srv = await server(['--auto-approve']);
  const H = mk(srv.url, 'Host', { role: 'host', token: TOKEN, secure: false });
  const codes = [], gone = [];
  H.on('code', (b) => codes.push(b));
  H.on('code-gone', (b) => gone.push(b));
  await until(() => H.status === 'live', 'host');
  H.invite({});
  await until(() => codes.length, 'code');
  const good = codes[0].code;
  const wrongs = ['00000', '11111', '22222'].map((w) => good.slice(0, 3) + (good.slice(3) === w ? '33333' : w));
  for (const w of wrongs) {
    const W = mk(srv.url, 'Guess', { code: w });
    await until(() => W.status === 'failed', 'wrong code fails');
    W.stop();
  }
  await until(() => codes.length === 2 && gone.length === 1, 'code replaced');
  assert.equal(codes[1].reason, 'wrong-tries');
  const old = mk(srv.url, 'Late', { code: good });
  await until(() => old.status === 'failed', 'old code refused');
  const fresh = mk(srv.url, 'Ana', { code: codes[1].code });
  await until(() => fresh.status === 'live', 'new code works');
  H.stop(); old.stop(); fresh.stop(); srv.stop();
});

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
