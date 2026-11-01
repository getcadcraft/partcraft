#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spike.mjs — LV.1: Studio Live's transport and latency spike (docs/0.5-PLAN.md LV.1, spec § 3, § 5).
 *
 *   node tools/live-test/spike.mjs [--profile lo|wifi|badwifi] [--clients 10] [--browsers 1] [--seconds 20]
 *                                  [--rate 10] [--unplug <seconds>] [--out tmp/live-spike]
 *
 * Starts the Rust session server (tools/live-test/server, `cargo build --release` first), then N clients: Node
 * processes plus headless Chromium pages (the browser joiner's code path), each editing at --rate a second and sending
 * presence 30 a second. Prints edit round trips (p50/p99) against the budgets (p50 < 15 ms, p99 < 50 ms on Wi-Fi),
 * presence received per peer per second, and checks every client ended on the same seq with the same commit hash.
 *
 * Profiles other than `lo` need root: each client gets its own network namespace joined to a bridge ("the access
 * point") by a veth pair with netem on both ends — wifi: 2 ms ± 2 ms each way, 100 Mbit/s, 0.05% loss; lossy: the same
 * with 0.3% loss; badwifi: 6 ms ± 6 ms, 20 Mbit/s, 1% loss; flat / jitter isolate delay and jitter.
 * For the run only, one iptables INPUT rule accepts the test bridge's private 10.77.0.0/24 (the host firewall drops
 * everything else); it is deleted with the bridge, also on Ctrl+C. That is an emulation of Wi-Fi, not Wi-Fi: real laptops, a phone and an access point are the owner's check.
 * --unplug D takes the bridge down for D seconds in the middle of the run (pulling the access point's plug): clients
 * must notice (3 missed pings), reconnect with their resume token and last seq, re-send pending edits and converge.
 */
import { spawn } from 'node:child_process';
import { PROFILES, netUp, netDown, plug, inNs } from './netem.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const args = process.argv.slice(2);
const val = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const profile = val('--profile', 'lo');
const nNode = +val('--clients', 10);
const nBrowser = +val('--browsers', 1);
const seconds = +val('--seconds', 20);
const rate = +val('--rate', 10);
const unplug = +val('--unplug', 0);
const outDir = path.resolve(root, val('--out', 'tmp/live-spike'));
const bin = path.join(here, 'server/target/release/live-server');
if (!fs.existsSync(bin)) { console.error(`build the server first: (cd ${path.relative(process.cwd(), path.join(here, 'server'))} && cargo build --release)`); process.exit(2); }

const total = nNode + nBrowser;
const emulated = profile !== 'lo';
if (emulated && !PROFILES[profile]) { console.error('unknown profile ' + profile); process.exit(2); }
if (emulated) netUp(profile, total);
process.on('exit', () => { if (emulated) netDown(); });
process.on('SIGINT', () => process.exit(130));

const www = path.join(outDir, 'www');
fs.mkdirSync(www, { recursive: true });
fs.writeFileSync(path.join(www, 'spike.html'), '<!doctype html><meta charset="utf-8"><title>Live spike</title><p>LV.1 spike client</p>');
const server = spawn(bin, ['--bind', emulated ? '10.77.0.1:0' : '127.0.0.1:0', '--auto-approve', '--plain', '--app', 'spike', '--stats', '--www', www], { stdio: ['pipe', 'pipe', 'pipe'] });
const serverStats = [];
readline.createInterface({ input: server.stderr }).on('line', (l) => { try { serverStats.push(JSON.parse(l)); } catch { process.stderr.write(l + '\n'); } });
const first = await new Promise((res) => readline.createInterface({ input: server.stdout }).once('line', res));
const { addr } = JSON.parse(first);
const url = `ws://${addr}/live`;
console.log(`server ${addr}  profile ${profile}  clients ${nNode} node + ${nBrowser} browser  ${seconds}s at ${rate} edits/s each${unplug ? `  unplug ${unplug}s` : ''}`);

const startAt = Date.now() + 4000 + nBrowser * 1500;
const kids = [];
for (let i = 1; i <= total; i++) {
  const isBrowser = i > nNode;
  const opts = { url, name: (isBrowser ? 'browser' : 'node') + i, rate, seconds, startAt, settleMs: unplug ? 9000 : 3000 };
  const cmd = [process.execPath, path.join(here, isBrowser ? 'spike-browser.mjs' : 'spike-node.mjs'), JSON.stringify(opts)];
  const full = emulated ? inNs(i, cmd) : cmd;
  const p = spawn(full[0], full.slice(1), { stdio: ['ignore', 'pipe', 'inherit'], cwd: here });
  kids.push(new Promise((res) => {
    let out = '';
    p.stdout.on('data', (d) => { out += d; });
    p.on('close', () => { try { res(JSON.parse(out.trim().split('\n').pop())); } catch { res({ name: opts.name, error: out.slice(0, 300) }); } });
  }));
}
if (unplug) {
  const at = startAt + (seconds * 1000) / 2 - (unplug * 1000) / 2;
  setTimeout(() => { console.log(`  unplug: access point down for ${unplug}s`); plug(false); }, at - Date.now());
  setTimeout(() => { console.log('  unplug: access point back'); plug(true); }, at - Date.now() + unplug * 1000);
}
const results = await Promise.all(kids);
server.stdin.end();
server.kill();

const all = results.flatMap((r) => r.rtt ? [r] : []);
const hashes = new Set(all.map((r) => r.hash + '@' + r.q));
const pad = (s, n) => String(s ?? '-').padStart(n);
console.log('\nclient        edits commits refused gaps    q   p50   p90   p99   max  pres/s reconn rejoin(ms)  hash');
for (const r of results) {
  if (!r.rtt) { console.log(`${r.name}  ERROR ${r.error}`); continue; }
  console.log(`${r.name.padEnd(12)}${pad(r.edits, 6)}${pad(r.commits, 8)}${pad(r.refused, 8)}${pad(r.gaps, 5)}${pad(r.q, 5)}` +
    `${pad(r.rtt.p50?.toFixed(1), 6)}${pad(r.rtt.p90?.toFixed(1), 6)}${pad(r.rtt.p99?.toFixed(1), 6)}${pad(r.rtt.max?.toFixed(0), 6)}` +
    `${pad(r.presencePerSecPerPeer, 8)}${pad(r.reconnects, 7)}  ${(r.rejoinMs || []).map((x) => x.toFixed(0)).join(',').padEnd(10)}  ${r.hash}`);
}
const merged = all.flatMap((r) => []).length; void merged;
const pctAll = (p) => {
  // pooled percentile from per-client p50/p99 is not exact; recompute from the clients' own samples is not shipped,
  // so report the worst client's value (conservative).
  return Math.max(...all.map((r) => r.rtt[p] ?? 0));
};
const pooled = all.flatMap((r) => r.samples || []).sort((a, b) => a - b);
const pp = (p) => pooled.length ? pooled[Math.min(pooled.length - 1, Math.floor(pooled.length * p))] : null;
const conv = hashes.size === 1 && all.length === total && all[0].q > 0 && all.every((r) => r.gaps === 0 && r.pendingLeft === 0 && r.commits > 0);
const summary = {
  profile, clients: total, browsers: nBrowser, seconds, rate, unplug,
  worst_p50: pctAll('p50'), worst_p99: pctAll('p99'),
  pooled: { n: pooled.length, p50: pp(0.5), p90: pp(0.9), p99: pp(0.99), p999: pp(0.999), max: pooled.at(-1),
    over50: pooled.filter((x) => x > 50).length },
  presence_min: Math.min(...all.map((r) => r.presencePerSecPerPeer)),
  converged: conv, seq: all[0]?.q, commits_total: serverStats.at(-1)?.commits,
  budgets: { p50: 15, p99: 50, presence: 30 },
};
console.log(`\nall edits pooled (${pooled.length}): p50 ${pp(0.5)?.toFixed(1)} ms, p99 ${pp(0.99)?.toFixed(1)} ms, p99.9 ${pp(0.999)?.toFixed(1)} ms, max ${pooled.at(-1)?.toFixed(0)} ms; ${summary.pooled.over50} over 50 ms`);
console.log(`worst client p50 ${summary.worst_p50.toFixed(1)} ms (budget 15), worst p99 ${summary.worst_p99.toFixed(1)} ms (budget 50), presence ≥ ${summary.presence_min}/s per peer (budget 30)`);
console.log(`converged: ${conv ? 'yes' : 'NO'} (${hashes.size} distinct hash@seq; gaps ${all.reduce((a, r) => a + r.gaps, 0)}; pending left ${all.reduce((a, r) => a + r.pendingLeft, 0)})`);
fs.mkdirSync(outDir, { recursive: true });
const file = path.join(outDir, `${profile}${unplug ? '-unplug' : ''}.json`);
fs.writeFileSync(file, JSON.stringify({ summary, results, server: serverStats }, null, 1));
console.log(`→ ${path.relative(root, file)}`);
process.exit(conv ? 0 : 1);
