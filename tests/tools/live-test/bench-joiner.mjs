/* SPDX-License-Identifier: Apache-2.0 */
// One joiner for bench-join.mjs: node bench-joiner.mjs <ws url> → prints {ms, bytes, objects} once it is working.
import { LiveClient, webSocketTransport } from '../../public_html/assets/js/live-client.js';
import { toyAdapter } from './toy-adapter.mjs';
const a = toyAdapter('joiner');
const t0 = performance.now();
let bytes = 0;
const c = new LiveClient({ transport: webSocketTransport(process.argv[2]), adapter: a, name: 'Joiner', secure: false });
c.on('loaded', (d) => { bytes = d.bytes; });
if (process.env.DEBUG) for (const t of ['status', 'loaded', 'welcome', 'refused']) c.on(t, (d) => console.error(t, JSON.stringify(d).slice(0, 200)));
c.on('status', ({ status }) => {
  if (status !== 'live' || !bytes) return;
  const ms = performance.now() - t0;
  // "working": an edit of ours goes through
  a.edit('first', [{ op: 'set', id: 'o0', f: 'x', v: 1 }]);
  const t1 = performance.now();
  const iv = setInterval(() => {
    if (c.pending.length) return;
    clearInterval(iv);
    process.stdout.write(JSON.stringify({ ms: Math.round(ms), firstEditMs: Math.round(performance.now() - t1), bytes, objects: a.model.size, rss: Math.round(process.memoryUsage().rss / 1e6) }) + '\n');
    c.leave();
    process.exit(0);
  }, 2);
});
c.connect();
setTimeout(() => { process.stdout.write(JSON.stringify({ error: 'timeout', status: c.status }) + '\n'); process.exit(1); }, 120000);
