/* SPDX-License-Identifier: Apache-2.0 */
// One LV.1 spike client inside headless Chromium (the browser joiner's path): node spike-browser.mjs '<json opts>'.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import { runClient } from './spike-core.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const opts = JSON.parse(process.argv[2]);
const lib = fs.readFileSync(path.join(here, '../../public_html/assets/js/live-client.js'), 'utf8')
  .replace(/^export (function|const|class) /gm, '$1 ');
const exe = (() => {
  const base = '/root/.cache/ms-playwright';
  const dirs = fs.existsSync(base) ? fs.readdirSync(base).filter((d) => d.startsWith('chromium')).sort().reverse() : [];
  for (const d of dirs) {
    for (const rel of ['chrome-linux/chrome', 'chrome-linux64/chrome', 'chrome-headless-shell-linux64/chrome-headless-shell']) {
      const p = path.join(base, d, rel);
      if (fs.existsSync(p)) return p;
    }
  }
  return undefined;
})();
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox'] });
const page = await browser.newPage();
// The page comes from the session server itself (same origin as the socket, as for a real browser joiner, LV.12):
// Chromium refuses a socket to a local address from any other origin (Local Network Access).
await page.goto(opts.url.replace(/^ws/, 'http').replace(/\/live$/, '/spike.html'));
await page.addScriptTag({ content: lib + '\nwindow.__mp = { pack, unpack };' });
const r = await page.evaluate(`(${runClient.toString()})(${JSON.stringify(opts)}, { WebSocketCtor: WebSocket, pack: window.__mp.pack, unpack: window.__mp.unpack, now: () => performance.now() })`);
await browser.close();
process.stdout.write(JSON.stringify(r) + '\n');
