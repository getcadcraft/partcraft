#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-lan.mjs — LV.12: browser joiners on the LAN (spec § 8). Run as root.
 *
 *   node tools/live-test/browser-lan.mjs [--suite <studio suite folder>] [--apps a,b] [--shots <dir>]
 *
 * The session server serves Studio's suite browser edition on its own port, and Chromium opens it from a LAN address
 * (the test bridge 10.77.0.1, see netem.mjs: not localhost, which browsers treat as secure) — so every page here is
 * what a teammate's browser gets: plain http://, not a secure context (no service worker, no crypto.subtle,
 * no randomUUID, no async clipboard).
 *   A. each app loads there: not a secure context, marked as a live page (meta cc-live), no page errors, the app's main
 *      element drawn; console errors are listed.
 *   B. a browser joins a session with a short code: live-client.js + live-crypto.js (noble, no crypto.subtle) from the
 *      same origin as the socket, the host approves, edits both ways converge.
 * Default suite: /var/www/CADCRAFT/studio/out/studio-suite/vdev (CADCRAFT_STUDIO overrides the studio folder).
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import { netUp, netDown } from './netem.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const args = process.argv.slice(2);
const val = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const studio = process.env.CADCRAFT_STUDIO || '/var/www/CADCRAFT/studio';
const suite = path.resolve(val('--suite', path.join(studio, 'out/studio-suite/vdev')));
const shots = val('--shots', null);
const appsWanted = val('--apps', 'cadcraft,bimcraft,modelcraft,markupcraft,takeoffcraft,civilcraft,detailcraft,partcraft').split(',');
const bin = path.join(here, 'server/target/release/live-server');
const TOKEN = 'lan-' + Math.random().toString(36).slice(2);
if (process.getuid && process.getuid() !== 0) { console.error('run as root (it sets up a test bridge)'); process.exit(2); }
if (!fs.existsSync(path.join(suite, 'index.html'))) { console.error('no suite at ' + suite); process.exit(2); }

let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else fail++; console.log(`${c ? 'ok  ' : 'FAIL'} ${msg}`); };
const exe = (() => {
  const base = '/root/.cache/ms-playwright';
  for (const d of fs.readdirSync(base).filter((x) => x.startsWith('chromium-')).sort().reverse()) {
    const p = path.join(base, d, 'chrome-linux64/chrome');
    if (fs.existsSync(p)) return p;
  }
  return undefined;
})();

netUp('flat', 0); // only the bridge: 10.77.0.1 is this machine's LAN-like address
process.on('exit', () => netDown());
process.on('SIGINT', () => process.exit(130));

async function server(www, extra = []) {
  const p = spawn(bin, ['--bind', '10.77.0.1:0', '--app', 'cadcraft', '--token', TOKEN, '--www', www, ...extra], { stdio: ['pipe', 'pipe', 'inherit'] });
  const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
  return { addr, stop: () => { p.stdin.end(); p.kill(); } };
}

const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });

// ---- A. the apps, from the host, over plain http ------------------------------------------------------------------
{
  const srv = await server(suite);
  console.log(`A. suite ${suite} at http://${srv.addr}/`);
  for (const slug of appsWanted) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [], consoleErrors = [];
    page.on('pageerror', (e) => errors.push(String(e.message || e).split('\n')[0]));
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 160)); });
    const resp = await page.goto(`http://${srv.addr}/apps/${slug}/`, { waitUntil: 'load', timeout: 60000 }).catch((e) => ({ status: () => 'ERR ' + e.message }));
    await page.waitForTimeout(2500);
    const facts = await page.evaluate(() => ({
      secure: window.isSecureContext, subtle: !!(window.crypto && window.crypto.subtle), marked: !!document.querySelector('meta[name="cc-live"]'),
      main: !!document.querySelector('main#main') && document.querySelector('main#main').children.length > 0,
      sw: 'serviceWorker' in navigator,
    })).catch((e) => ({ err: e.message }));
    ok(resp.status() === 200 && facts.secure === false && facts.marked && facts.main && !errors.length,
      `${slug}: loads from the host (${resp.status()}), secure context ${facts.secure}, crypto.subtle ${facts.subtle}, cc-live mark ${facts.marked}, ` +
      `main drawn ${facts.main}, page errors ${errors.length ? errors.join(' | ') : 'none'}`);
    if (consoleErrors.length) console.log(`     console errors (${consoleErrors.length}): ${[...new Set(consoleErrors)].slice(0, 4).join(' | ')}`);
    if (shots) { fs.mkdirSync(shots, { recursive: true }); await page.screenshot({ path: path.join(shots, `lan-${slug}.png`) }); }
    await page.close();
  }
  srv.stop();
}

// ---- C. features that need a secure context (reported, not failed: the fixes are the apps' owners') ----------------
const gaps = [];
{
  const srv = await server(suite);
  if (appsWanted.includes('takeoffcraft')) {
    const page = await browser.newPage();
    const errs = [];
    page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().split('\n')[0]); });
    await page.goto(`http://${srv.addr}/apps/takeoffcraft/`);
    await page.waitForTimeout(1500);
    await page.setInputFiles('input[data-file-pdf]', path.join(root, 'fixtures/pdf/kitchen-plan-sheet.pdf'));
    await page.waitForTimeout(3000);
    const sheets = await page.evaluate(() => (window.takeoffcraft && window.takeoffcraft.sheets ? window.takeoffcraft.sheets().length : -1));
    if (sheets > 0) console.log('ok   C. takeoffcraft opens a PDF on a LAN page');
    else gaps.push(`takeoffcraft can't open a PDF on a LAN page (pdfset.js sha256Hex uses crypto.subtle): ${errs[0] || 'no sheets'}`);
    await page.close();
  }
  srv.stop();
}
for (const g of gaps) console.log('gap  C. ' + g);

// ---- B. a browser joins with a short code -------------------------------------------------------------------------
{
  const www = path.join(root, 'tmp/live-lan-www');
  fs.rmSync(www, { recursive: true, force: true });
  fs.mkdirSync(path.join(www, 'js'), { recursive: true });
  for (const f of ['live-client.js', 'live-crypto.js', 'host.js']) fs.copyFileSync(path.join(root, 'public_html/assets/js', f), path.join(www, 'js', f));
  for (const lib of ['noble-curves', 'noble-hashes', 'noble-ciphers']) fs.cpSync(fs.realpathSync(path.join(root, 'public_html/assets/vendor', lib, 'current')), path.join(www, 'vendor', lib), { recursive: true });
  fs.writeFileSync(path.join(www, 'js/toy-adapter.mjs'), fs.readFileSync(path.join(here, 'toy-adapter.mjs'), 'utf8').replace("'../../public_html/assets/js/live-client.js'", "'./live-client.js'"));
  fs.writeFileSync(path.join(www, 'join.html'), `<!doctype html><html><head><meta charset="utf-8"><title>Join</title>
<script type="importmap">{"imports":{"@noble/curves/":"/vendor/noble-curves/","@noble/hashes/":"/vendor/noble-hashes/","@noble/ciphers/":"/vendor/noble-ciphers/"}}</script>
</head><body><main id="main"><p>Browser joiner</p></main>
<script type="module">
import { LiveClient, webSocketTransport } from './js/live-client.js';
import * as Crypto from './js/live-crypto.js';
import { toyAdapter } from './js/toy-adapter.mjs';
window.__join = (code) => {
  const a = toyAdapter('browser');
  const c = new LiveClient({ transport: webSocketTransport('ws://' + location.host + '/live'), adapter: a, name: 'Browser', code, crypto: Crypto });
  window.__c = c; window.__a = a;
  c.connect();
};
// D: through host.js, as an app page does (host.live.join on a page the host served).
window.__joinHost = async (code) => {
  const { getHost } = await import('./js/host.js');
  const a = toyAdapter('browser-host');
  window.__hc = await getHost({ app: 'cadcraft' }).live.join({ adapter: a, name: 'Browser via host.js', code });
  window.__ha = a;
};
window.__ready = true;
</script></body></html>`);
  const srv = await server(www);
  console.log(`B. join page at http://${srv.addr}/join.html`);
  const { LiveClient, webSocketTransport } = await import(path.join(root, 'public_html/assets/js/live-client.js'));
  const { toyAdapter } = await import('./toy-adapter.mjs');
  const ha = toyAdapter('host');
  const H = new LiveClient({ transport: webSocketTransport(`ws://${srv.addr}/live`), adapter: ha, name: 'Host', role: 'host', token: TOKEN, secure: false });
  const codes = [];
  H.on('code', (b) => codes.push(b.code));
  H.on('join', (b) => H.approve(b.c, 'editor'));
  await new Promise((r) => { H.on('status', ({ status }) => status === 'live' && r()); H.connect(); });
  ha.edit('add', [{ op: 'add', id: 'h1', obj: { v: 1 } }]);
  H.invite({});
  const until = async (f, what, ms = 15000) => { const t0 = Date.now(); while (!(await f())) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await new Promise((r) => setTimeout(r, 20)); } };
  await until(() => codes.length, 'code');
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e.message || e)));
  await page.goto(`http://${srv.addr}/join.html`);
  await until(() => page.evaluate(() => window.__ready === true), 'page ready');
  const ctx = await page.evaluate(() => ({ secure: window.isSecureContext, subtle: !!(crypto && crypto.subtle) }));
  ok(ctx.secure === false && ctx.subtle === false, `B. the join page is not a secure context (crypto.subtle ${ctx.subtle})`);
  await page.evaluate((code) => window.__join(code), codes[0]);
  try {
    await until(() => page.evaluate(() => window.__c.status === 'live' && window.__a.model.has('h1')), 'browser live with the host’s model');
    ok(true, 'B. browser joined with the code (SPAKE2 + ChaCha20-Poly1305 in the page, approved by the host) and got the model');
    await page.evaluate(() => { for (let i = 0; i < 20; i++) window.__a.edit('b', [{ op: 'set', id: 'h1', f: 'b' + i, v: i }]); });
    for (let i = 0; i < 20; i++) ha.edit('h', [{ op: 'set', id: 'h1', f: 'h' + i, v: i }]);
    await until(async () => (await page.evaluate(() => window.__c.pending.length === 0 && window.__a.hash())) === ha.hash() && H.pending.length === 0, 'converged');
    ok(true, 'B. 20 edits each way over sealed frames: browser and host identical');
    const sealed = await page.evaluate(() => !!window.__c.keys);
    ok(sealed, 'B. frames are sealed (live-crypto session in the page)');
  } catch (e) {
    ok(false, 'B. ' + e.message + ' (browser status ' + (await page.evaluate(() => window.__c && window.__c.status)) + ')');
  }
  ok(!errors.length, 'B. no page errors' + (errors.length ? ': ' + errors.join(' | ') : ''));
  // D. The host hands the session to someone whose new address this page can't reach (LV.17): host.js says where it went.
  try {
    await page.evaluate((code) => window.__joinHost(code), codes[0]);
    await until(() => page.evaluate(() => window.__hc && window.__hc.status === 'live'), 'host.js joiner live');
    await import(path.join(root, 'tools/live-crypto/node-hook.mjs'));
    const xa = toyAdapter('x');
    const never = () => ({ send() {}, close() {} });
    const X = new LiveClient({ transport: webSocketTransport(`ws://${srv.addr}/live`), adapter: xa, name: 'Xena', code: codes[0], crypto: (await import(path.join(root, 'public_html/assets/js/live-crypto.js'))),
      takeOver: async () => ({ addrs: ['192.0.2.1'], port: 9, transport: never, local: false }) });
    await new Promise((r) => { X.on('status', ({ status }) => status === 'live' && r()); X.connect(); });
    H.handover(X.c);
    await until(() => page.evaluate(() => !!document.querySelector('[data-live-moved]')), 'the moved notice', 20000);
    const note = await page.evaluate(() => ({ text: document.querySelector('[data-live-moved]').textContent, href: document.querySelector('[data-live-moved] a')?.href, status: window.__hc.status }));
    ok(note.status === 'lost' && /moved/.test(note.text) && note.text.includes('Xena') && note.href === 'http://192.0.2.1:9/apps/cadcraft/',
      'D. a page that can\'t follow a handoff is told the session moved, to whom, and the new host\'s page: ' + JSON.stringify(note));
    X.stop();
  } catch (e) {
    ok(false, 'D. ' + e.message);
  }
  H.stop();
  srv.stop();
}

await browser.close();
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
