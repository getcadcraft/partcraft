#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sync.mjs — lib/hull (cc-hull, 0.8 EG.26) is canonical; each host carries byte-identical copies in dev/hull/. Nobody edits a copy. Rule 31: name
 * the targets (no argument = refuse).
 *   node tools/hull/sync.mjs [--check] <partcraft|modelcraft|supercadcraft> …
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const LIB = path.join(ROOT, 'lib/hull'), APPS = path.join(ROOT, 'public_html/assets/apps');
export const FILES = ['fair.js', 'solid.js'];
export const TARGETS = { partcraft: path.join(APPS, 'partcraft/dev/hull'), modelcraft: path.join(APPS, 'modelcraft/dev/hull'), supercadcraft: path.join(APPS, 'supercadcraft/dev/hull') };
const args = process.argv.slice(2), check = args.includes('--check'), names = args.filter((a) => !a.startsWith('--'));
if (!names.length) { console.error('name the target(s): ' + Object.keys(TARGETS).join(' | ')); process.exit(2); }
let diff = 0;
for (const name of names) {
  const dir = TARGETS[name];
  if (!dir) { console.error(name + ': not a target'); diff++; continue; }
  if (!check) fs.mkdirSync(dir, { recursive: true });
  const changed = [];
  for (const f of FILES) { const src = fs.readFileSync(path.join(LIB, f)), dst = path.join(dir, f); if (fs.existsSync(dst) && fs.readFileSync(dst).equals(src)) continue; changed.push(f); if (!check) fs.writeFileSync(dst, src); }
  if (changed.length && check) diff++;
  console.log(name + ': ' + (changed.length ? (check ? 'differs: ' : 'copied: ') + changed.join(', ') : 'in step'));
}
process.exit(diff ? 1 : 0);
