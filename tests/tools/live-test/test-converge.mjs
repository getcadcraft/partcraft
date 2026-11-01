#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-converge.mjs — LV.14: 10 clients making random overlapping edits end with identical models.
 *
 *   node tools/live-test/test-converge.mjs [--runs 3] [--clients 10] [--steps 150] [--seed N] [--no-chaos]
 *
 * Per run: the Rust session server (plain frames: the logic under test is the same), a host, a replica (the toy
 * adapter's validate + snapshots) and N editors. Every editor makes `steps` random edits on shared objects with
 * random pauses: property writes (often on the same few objects and fields), creates, deletes, text under a hold,
 * multi-op steps, invalid ones the replica refuses, undo and redo; with chaos, sockets are cut at random and clients
 * rejoin. Then: every client's model, the replica's and a fresh joiner's (from a snapshot) must be identical (checked
 * by hash), nothing pending, every client at the same seq. Also: 10 clients writing ONE property of ONE object as fast
 * as they can end with the same value everywhere.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { LiveClient, webSocketTransport } from '../../public_html/assets/js/live-client.js';
import { toyAdapter } from './toy-adapter.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const val = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const RUNS = +val('--runs', 3);
const N = +val('--clients', 10);
const STEPS = +val('--steps', 150);
const SEED0 = +val('--seed', 20261014);
const chaos = !args.includes('--no-chaos');
const TOKEN = 'conv-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function rng(seed) {
  let x = seed >>> 0 || 1;
  const r = () => { x ^= x << 13; x >>>= 0; x ^= x >> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; };
  r.int = (n) => Math.floor(r() * n);
  r.pick = (a) => a[Math.floor(r() * a.length)];
  return r;
}

async function server(extra = []) {
  const p = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--auto-approve', '--plain', '--token', TOKEN, ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
  return { url: `ws://${addr}/live`, stop: () => { p.stdin.end(); p.kill(); } };
}
function client(url, name, opts = {}) {
  const adapter = opts.adapter || toyAdapter(name);
  const c = new LiveClient(Object.assign({ transport: webSocketTransport(url), adapter, name, secure: false }, opts));
  c.a = adapter;
  c.stats = { refused: {}, skipped: 0, drops: 0 };
  c.on('refused', (r) => { c.stats.refused[r.reason] = (c.stats.refused[r.reason] || 0) + 1; });
  c.on('undo-skipped', () => { c.stats.skipped++; });
  c.connect();
  return c;
}
async function until(cond, what, ms = 30000) {
  const t0 = Date.now();
  while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(5); }
}
const quiet = (cs) => cs.every((c) => c.status === 'live' && c.pending.length === 0 && c.inbox.length === 0 && !c.flushQueued && !c.loading);

let failures = 0;
const report = (ok, msg) => { if (!ok) failures++; console.log(`${ok ? 'ok  ' : 'FAIL'} ${msg}`); };

for (let run = 0; run < RUNS; run++) {
  const seed = SEED0 + run;
  const R0 = rng(seed);
  const srv = await server();
  const H = client(srv.url, 'Host', { role: 'host', token: TOKEN });
  await until(() => H.status === 'live', 'host');
  const Rp = client(srv.url, 'Replica', { role: 'replica', token: TOKEN, adapter: toyAdapter('replica') });
  await until(() => Rp.status === 'live', 'replica');
  // Shared objects to fight over, and the layers the validator knows.
  const base = [];
  for (let i = 0; i < 12; i++) base.push({ op: 'add', id: 'o' + i, obj: { color: 0, lt: 'cont', text: '' } });
  base.push({ op: 'add', id: 'LA', obj: { kind: 'layer' } });
  H.a.edit('base', base);
  const eds = [];
  for (let i = 0; i < N; i++) eds.push(client(srv.url, 'E' + i));
  await until(() => eds.every((c) => c.status === 'live') && quiet([H, ...eds]), 'editors in');

  const t0 = Date.now();
  await Promise.all(eds.map(async (c, ci) => {
    const r = rng(seed * 100 + ci + 1);
    const held = [];
    for (let s = 0; s < STEPS; s++) {
      if (r() < 0.6) await sleep(r.int(6));
      const ids = [...c.a.model.keys()].filter((k) => k !== 'LA');
      const hot = ids.filter((k) => /^o[0-3]$/.test(k));
      const any = () => (hot.length && r() < 0.5 ? r.pick(hot) : ids.length ? r.pick(ids) : null);
      const x = r();
      if (chaos && x < 0.01 && c.conn && c.status === 'live') { c.stats.drops++; c.conn.t.close(); continue; }
      if (x < 0.40) { const id = any(); if (id) c.a.edit('set', [{ op: 'set', id, f: r.pick(['color', 'lt', 'w', 'p']), v: r.int(1000) }]); }
      else if (x < 0.50) c.a.edit('add', [{ op: 'add', id: c.newId(), obj: Object.assign({ color: r.int(9) }, r() < 0.3 ? { layer: 'A' } : {}) }]);
      else if (x < 0.56) { const id = any(); if (id && !/^o[0-1]$/.test(id)) c.a.edit('del', [{ op: 'del', id }]); }
      else if (x < 0.64) {
        const id = any();
        if (id) { c.hold(['e:' + id]); held.push('e:' + id); c.a.edit('type', [{ op: 'text', id, v: c.o.name + s }]); }
        if (held.length > 2) c.release([held.shift()]);
      }
      else if (x < 0.74) c.undo();
      else if (x < 0.79) c.redo();
      else if (x < 0.83) { const id = any(); if (id) c.a.edit('bad', [{ op: 'set', id, f: 'bad', v: 1 }]); }
      else if (x < 0.86) c.a.edit('bad layer', [{ op: 'add', id: c.newId(), obj: { layer: 'Nope' } }]);
      else {
        const id = any(), id2 = any();
        if (id && id2) c.a.edit('multi', [{ op: 'set', id, f: 'color', v: r.int(1000) }, { op: 'set', id: id2, f: 'lt', v: 'l' + r.int(9) }, { op: 'add', id: c.newId(), obj: { from: id } }]);
      }
    }
    c.release();
  }));
  try {
    await until(() => quiet([H, ...eds]) && new Set([H, ...eds].map((c) => c.q)).size === 1, 'all settled', 60000);
  } catch (e) {
    for (const c of [H, ...eds, Rp]) console.log(c.o.name, JSON.stringify(c.state()), 'inbox', c.inbox.length, 'loading', c.loading, 'pending n', c.pending.slice(0, 3).map((p) => p.n + ':' + p.label + (p.sent ? '' : '(unsent)')).join(' '));
    throw e;
  }
  await until(() => Rp.q === H.q && Rp.validated.size === 0 && Rp.inbox.length === 0, 'replica settled');
  // A fresh joiner from a snapshot.
  const late = client(srv.url, 'Late');
  await until(() => late.status === 'live' && quiet([late]) && late.q === H.q, 'late joiner');
  const all = [H, ...eds, Rp, late];
  const hashes = new Set(all.map((c) => c.a.hash()));
  const refused = {};
  let skipped = 0, drops = 0, edits = 0;
  for (const c of eds) { for (const [k, v] of Object.entries(c.stats.refused)) refused[k] = (refused[k] || 0) + v; skipped += c.stats.skipped; drops += c.stats.drops; edits += c.n; }
  report(hashes.size === 1,
    `run ${run + 1} (seed ${seed}): ${N} editors × ${STEPS} steps in ${((Date.now() - t0) / 1000).toFixed(1)} s → ${edits} edits, ` +
    `seq ${H.q}, refused ${JSON.stringify(refused)}, undo skipped ${skipped}, socket drops ${drops}, ` +
    `${H.a.model.size} objects — ${hashes.size === 1 ? 'all ' + all.length + ' models identical (clients, replica, snapshot joiner)' : hashes.size + ' different models'}`);
  for (const c of all) c.stop();
  srv.stop();
}

// One property, one object, 10 writers as fast as they can.
{
  const srv = await server();
  const H = client(srv.url, 'Host', { role: 'host', token: TOKEN });
  await until(() => H.status === 'live', 'host');
  H.a.edit('add', [{ op: 'add', id: 'x', obj: { color: 0 } }]);
  const eds = [];
  for (let i = 0; i < 10; i++) eds.push(client(srv.url, 'W' + i));
  await until(() => eds.every((c) => c.status === 'live') && quiet([H, ...eds]), 'writers in');
  for (let k = 0; k < 50; k++) for (const [i, c] of eds.entries()) c.a.edit('color', [{ op: 'set', id: 'x', f: 'color', v: i * 1000 + k }]);
  await until(() => quiet([H, ...eds]) && new Set([H, ...eds].map((c) => c.q)).size === 1, 'writers settled');
  const vals = new Set([H, ...eds].map((c) => c.a.model.get('x').color));
  report(vals.size === 1 && H.q === 501, `10 clients × 50 writes of one property: seq ${H.q}, final value ${[...vals].join(',')} on all ${eds.length + 1}`);
  for (const c of [H, ...eds]) c.stop();
  srv.stop();
}

console.log(failures ? `${failures} failed` : 'all converged');
process.exit(failures ? 1 : 0);
