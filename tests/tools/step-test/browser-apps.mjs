#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * browser-apps.mjs — STEP in ModelCraft and BimCraft on the page (0.7 D7.26, session part-08), headless Chromium at /lab.
 *   ModelCraft: Import › plate.step and assembly.step → closed meshes at the true size (OpenCascade's volume to 0.5 %), each
 *   placed part its own mesh, the status line names the schema; a file that is not STEP says why.
 *   BimCraft: Open › assembly.step → an IFC model with three elements in 3D, the status line "AP214 file, read as triangles".
 * Fails on any console error. Run as root (BimCraft's test admin session: tools/bimcraft-test/admin.php session|down).
 * Shots: <out>/step-modelcraft.png, step-bimcraft.png.
 *   node tools/step-test/browser-apps.mjs [--out <dir>]
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const BASE = 'https://getcadcraft.com';
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(arg('--out', path.join(REPO, 'tmp/shots/step')));
fs.mkdirSync(OUT, { recursive: true });
const FIX = path.join(REPO, 'fixtures/step');
const facts = JSON.parse(fs.readFileSync(path.join(FIX, 'facts.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (c, m, d) => { if (c) { pass++; console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m + (d ? ' — ' + d : '')); } };

const req = createRequire(path.join(REPO, 'tools/modelcraft-test/package.json'));
const { chromium } = req('playwright-core');
const cacheDir = path.join(process.env.HOME || '/root', '.cache/ms-playwright');
const build = fs.readdirSync(cacheDir).filter((d) => /^chromium-\d+$/.test(d)).sort((a, b) => parseInt(b.split('-')[1]) - parseInt(a.split('-')[1]))[0];
const exe = ['chrome-linux64/chrome', 'chrome-linux/chrome'].map((s) => path.join(cacheDir, build, s)).find((p) => fs.existsSync(p));
const adminPhp = path.join(REPO, 'tools/bimcraft-test/admin.php');
const { cookie } = JSON.parse(execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'session'], { encoding: 'utf8' }).trim().split('\n').pop());
const browser = await chromium.launch({ executablePath: exe, args: ['--no-sandbox', '--host-resolver-rules=MAP getcadcraft.com 127.0.0.1', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const [cn, cv] = cookie.split('=');
await ctx.addCookies([{ name: cn, value: cv, domain: 'getcadcraft.com', path: '/', secure: true, httpOnly: true }]);
const problems = [];
const watch = (page, app) => {
  page.on('console', (m) => { if (m.type() === 'error') problems.push(app + ': ' + m.text()); });
  page.on('pageerror', (e) => problems.push(app + ': ' + e.message));
};

try {
  console.log('\n== STEP in ModelCraft (0.7 D7.26)');
  {
    const page = await ctx.newPage();
    watch(page, 'modelcraft');
    await page.goto(BASE + '/lab/modelcraft', { waitUntil: 'load' });
    await page.waitForFunction(() => window.modelcraft && window.modelcraft.model, null, { timeout: 60000 });
    const msg = () => page.evaluate(() => window.modelcraft.ui.msg.textContent);
    const meshes = () => page.evaluate(() => [...window.modelcraft.model.defs.values()].filter((d) => d.mesh).map((d) => d.mesh.info()).map((i) => ({ closed: i.closed, volume: i.volume })));
    await page.setInputFiles('[data-file-import]', path.join(FIX, 'plate.step'));
    await page.waitForFunction(() => /Imported plate\.step/.test(window.modelcraft.ui.msg.textContent), null, { timeout: 60000 });
    const m1 = await meshes();
    const v1 = m1.reduce((a, i) => a + (i.volume || 0), 0) * 1e9;
    ok(m1.length === 1 && m1[0].closed && Math.abs(v1 - facts['plate.step'].volume) / facts['plate.step'].volume < 5e-3, `plate.step: one closed mesh, ${v1.toFixed(1)} mm³ (${facts['plate.step'].volume}); "${(await msg()).trim()}"`);
    ok(/AP214/.test(await msg()), 'the status line names the schema');
    await page.setInputFiles('[data-file-import]', path.join(FIX, 'assembly.step'));
    await page.waitForFunction(() => /Imported assembly\.step/.test(window.modelcraft.ui.msg.textContent), null, { timeout: 60000 });
    const m2 = await meshes();
    ok(m2.length === 4 && m2.every((i) => i.closed), `assembly.step: three more closed meshes, one per placed part (${m2.length} in all)`);
    await page.screenshot({ path: path.join(OUT, 'step-modelcraft.png') });
    await page.setInputFiles('[data-file-import]', { name: 'bad.step', mimeType: 'model/step', buffer: Buffer.from('hello, not STEP\n') });
    await page.waitForFunction(() => /not a STEP file/.test(window.modelcraft.ui.msg.textContent), null, { timeout: 30000 }).catch(() => {});
    ok(/not a STEP file/.test(await msg()) && (await meshes()).length === 4, 'a .step that is not STEP: says why, nothing added');
    await page.close();
  }

  console.log('\n== STEP in BimCraft (0.7 D7.26)');
  {
    const page = await ctx.newPage();
    watch(page, 'bimcraft');
    await page.goto(BASE + '/lab/bimcraft', { waitUntil: 'load' });
    await page.waitForSelector('[data-file]', { state: 'attached', timeout: 60000 });
    await page.setInputFiles('[data-file]', path.join(FIX, 'assembly.step'));
    await page.waitForFunction(() => /read as triangles/.test(document.querySelector('[data-status]')?.textContent || ''), null, { timeout: 90000 }).catch(() => {});
    const st = (await page.textContent('[data-status]')).trim();
    ok(/AP214 file, read as triangles: 3 solids/.test(st), 'Open › assembly.step: "' + st + '"');
    const tree = await page.evaluate(() => (document.querySelector('[data-tree], .bc-tree')?.textContent || '').replace(/\s+/g, ' ').slice(0, 400));
    ok(/STEP/.test(tree) || /Proxy|proxy/.test(tree), 'the model tree shows the STEP storey and its elements', tree);
    await page.screenshot({ path: path.join(OUT, 'step-bimcraft.png') });
    await page.close();
  }
  ok(problems.length === 0, 'no console errors' + (problems.length ? ': ' + problems.slice(0, 5).join('; ') : ''));
} catch (e) {
  fail++;
  console.log('  FAIL ' + (e && e.stack ? e.stack.split('\n').slice(0, 3).join(' | ') : e));
} finally {
  await browser.close();
  execFileSync('sudo', ['-u', 'www-data', 'php', adminPhp, 'down']);
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
