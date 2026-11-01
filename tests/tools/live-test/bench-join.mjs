#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bench-join.mjs — LV.10's budget (spec § 5): a joiner on a 50 MB drawing is working in under 10 s.
 *
 *   node tools/live-test/bench-join.mjs [--mb 50] [--profile lo|wifi|…]
 *
 * The host (this process) holds a toy model of line-like objects whose snapshot is about --mb MB of MessagePack and
 * answers the snapshot request itself (deflated, as live-client.js does over 64 KB); a joiner process connects with no
 * file, receives the snapshot in 256 KB chunks, inflates, loads, and makes an edit. Prints the timings. Profiles other
 * than lo need root (netem.mjs): the joiner sits behind the emulated access point.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { LiveClient, webSocketTransport } from '../../public_html/assets/js/live-client.js';
import { toyAdapter } from './toy-adapter.mjs';
import { PROFILES, netUp, netDown, inNs } from './netem.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const val = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const mb = +val('--mb', 50);
const profile = val('--profile', 'lo');
const emulated = profile !== 'lo';
if (emulated && !PROFILES[profile]) { console.error('unknown profile'); process.exit(2); }
if (emulated) netUp(profile, 1);
process.on('exit', () => { if (emulated) netDown(); });

const TOKEN = 'bench-' + Math.random().toString(36).slice(2);
const srv = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', emulated ? '0.0.0.0:0' : '127.0.0.1:0', '--app', 'cadcraft', '--auto-approve', '--plain', '--token', TOKEN], { stdio: ['pipe', 'pipe', 'inherit'] });
const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: srv.stdout }).once('line', r)));
// The host is in-process in Studio; here it connects over loopback (a network peer may send at most 1 MB frames, and
// the host's snapshot is one frame). The joiner comes through the emulated access point.
const port = addr.split(':').pop();
const hostUrl = `ws://127.0.0.1:${port}/live`;
const url = emulated ? `ws://10.77.0.1:${port}/live` : hostUrl;

// A drawing-like model: lines on 40 layers, coordinates to the millimetre.
const a = toyAdapter('host');
const rnd = (() => { let x = 12345; return () => ((x = (x * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff); })();
const r3 = (v) => Math.round(v * 1000) / 1000;
let i = 0;
const target = mb * 1e6;
let est = 0;
while (est < target) {
  const obj = { type: 'line', layer: 'A-WALL-' + (i % 40), color: i % 7, lt: 'Continuous', p1: [r3(rnd() * 50000), r3(rnd() * 30000)], p2: [r3(rnd() * 50000), r3(rnd() * 30000)] };
  a.model.set('o' + i, obj);
  est += 112; // measured size of one object in the snapshot
  i++;
}
let t = performance.now();
const raw = a.snapshot();
const packMs = performance.now() - t;
t = performance.now();
const deflated = new Uint8Array(await new Response(new Blob([raw]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer());
const deflateMs = performance.now() - t;
console.log(`model: ${a.model.size.toLocaleString()} objects, snapshot ${(raw.length / 1e6).toFixed(1)} MB (pack ${packMs.toFixed(0)} ms), deflated ${(deflated.length / 1e6).toFixed(1)} MB (${deflateMs.toFixed(0)} ms)`);

const H = new LiveClient({ transport: webSocketTransport(hostUrl), adapter: a, name: 'Host', role: 'host', token: TOKEN, secure: false });
await new Promise((r) => { H.on('status', ({ status }) => status === 'live' && r()); H.connect(); });

const cmd = [process.execPath, path.join(here, 'bench-joiner.mjs'), url];
const full = emulated ? inNs(1, cmd) : cmd;
const j = spawn(full[0], full.slice(1), { stdio: ['ignore', 'pipe', 'inherit'] });
let out = '';
j.stdout.on('data', (d) => { out += d; });
await new Promise((r) => j.on('close', r));
const res = JSON.parse(out.trim().split('\n').pop());
if (!res.ms) console.log("joiner:", JSON.stringify(res));
console.log(`profile ${profile}: joiner working after ${res.ms} ms (budget 10000), first edit round trip ${res.firstEditMs} ms, ${res.objects?.toLocaleString()} objects, joiner RSS ${res.rss} MB`);
H.stop(); srv.stdin.end(); srv.kill();
process.exit(res.ms && res.ms < 10000 ? 0 : 1);
