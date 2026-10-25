#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sync.mjs — copies cc-step (lib/step/, 0.7 D7.26, session part-08) into the apps that read STEP, with cc-ifc's ISO 10303-21
 * module (lib/ifc/step.js, read-only here: its owner edits it) beside it as part21.js; read.js's one import of it is rewritten
 * from '../ifc/step.js' to './part21.js'. Every other byte is the library's. `--check` fails (exit 1) when a copy differs.
 *   node tools/step/sync.mjs [--check] [app…]      apps: partcraft, modelcraft, bimcraft
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const LIB = path.join(ROOT, 'lib/step');
const APPS = path.join(ROOT, 'public_html/assets/apps');
export const TARGETS = {
  partcraft: path.join(APPS, 'partcraft/dev/step'),
  modelcraft: path.join(APPS, 'modelcraft/dev/io/step'),
  bimcraft: path.join(APPS, 'bimcraft/dev/step'),
};
export const FILES = ['read.js', 'geom.js', 'tess.js'];

/** The text each copy must hold: name → contents. */
export function expected() {
  const out = new Map();
  for (const f of FILES) {
    let t = fs.readFileSync(path.join(LIB, f), 'utf8');
    if (f === 'read.js') {
      if (!t.includes("from '../ifc/step.js'")) throw new Error("lib/step/read.js no longer imports '../ifc/step.js': update tools/step/sync.mjs");
      t = t.replace("from '../ifc/step.js'", "from './part21.js'");
    }
    out.set(f, t);
  }
  out.set('part21.js', fs.readFileSync(path.join(ROOT, 'lib/ifc/step.js'), 'utf8'));
  return out;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  const names = args.filter((a) => !a.startsWith('--'));
  const want = expected();
  let bad = 0;
  for (const name of names.length ? names : Object.keys(TARGETS)) {
    const dir = TARGETS[name];
    if (!dir) { console.error(name + ': not a target (' + Object.keys(TARGETS).join(', ') + ')'); bad++; continue; }
    const changed = [];
    for (const [f, text] of want) {
      const dst = path.join(dir, f);
      const have = fs.existsSync(dst) ? fs.readFileSync(dst, 'utf8') : null;
      if (have === text) continue;
      changed.push(f);
      if (!check) { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(dst, text); }
    }
    const stale = fs.existsSync(dir) ? fs.readdirSync(dir).filter((n) => n.endsWith('.js') && !want.has(n)) : [];
    if (!check) for (const n of stale) fs.unlinkSync(path.join(dir, n));
    if (changed.length || stale.length) bad += check ? 1 : 0;
    console.log(`${name}: ${changed.length || stale.length ? (check ? 'DIFFERS' : 'updated') + ' — ' + [...changed, ...stale.map((n) => n + ' (removed)')].join(', ') : 'ok'} (${want.size} files)`);
  }
  if (check && bad) process.exit(1);
}
