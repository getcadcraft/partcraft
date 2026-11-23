#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-partcraft-frame.mjs — "Check this frame" in PartCraft (0.11 SU.1811, frame-ui.js + weldment.js info.members a/b): a real Structural member feature is built with
 * the mesh kernel, its members collected, supports and equipment parsed, checkThisFrame run on the PartCraft copy, and the report written as CSV. No page.
 *   node bin/test-partcraft-frame.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
let pass = 0, fail = 0;
const ok = (c, n, d = '') => { if (c) pass++; else { fail++; console.log('  FAIL ' + n + (d ? ' - ' + d : '')); } };
const I18N = await import(DEV + 'i18n.js');
const EN = JSON.parse(fs.readFileSync(DEV + 'lang/en.json', 'utf8'));
I18N.init({ locale: 'en', strings: EN });
const K = await import(DEV + 'kernel.js'), P = await import(DEV + 'part.js'), S = await import(DEV + 'sketch.js');
const U = await import(DEV + 'frame-ui.js');
const FP = await import(DEV + 'frame/frame-part.js');
const { default: Module } = await import(path.join(REPO, 'public_html/assets/vendor/manifold-3d/current/manifold.js'));
const M = await Module(); M.setup();

// a 2000 x 800 rectangle of HSS4X4X1/4 on the base plane
const part = P.newPart('Skid');
const sk = S.newSketch(); const r = S.addRect(sk, [0, 0], [2000, 800]);
const s = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: sk });
const m = P.addFeature(part, 'member', { segs: r.lines.map((l) => ({ sketch: s.id, line: l })), section: 'HSS4X4X1/4', corner: 'miter' });
const g = K.regenerate(part, M);
ok(g.results.get(m.id).status === 'ok', 'the Structural member feature builds');
const members = U.collectMembers(part, g.results);
ok(members.every((x) => x.a[2] === 0 && x.b[2] === 0) && members.length === 4 && members.every((x) => x.section === 'HSS4X4X1/4' && x.a.length === 3 && x.b.length === 3), 'four members collected with their lines');
const len = (x) => Math.hypot(x.b[0] - x.a[0], x.b[1] - x.a[1], x.b[2] - x.a[2]);
ok(members.map(len).map(Math.round).sort((a, b) => a - b).join() === '800,800,2000,2000', 'their lengths are the sketch lines (mm)', members.map(len).join());
ok(U.collectMembers({ features: [{ ...m, suppressed: true }] }, g.results).length === 0, 'a suppressed feature gives no members');
ok(U.collectMembers(part, new Map()).length === 0, 'a feature that did not build gives no members');

const feet = U.feetOf(members);
ok(feet.length === 4, 'the feet: the four corners, each once', JSON.stringify(feet));
ok(U.feetOf([{ a: [0, 0, 0], b: [0, 0, 500] }, { a: [100, 0, 0], b: [100, 0, 500] }]).length === 2 && U.feetOf([]).length === 0, 'feet of two legs; none of nothing');

const pp = U.parsePoints('1 2 3\n4,5,6\n\n7;8;9\nx y z\n1 2');
ok(pp.points.length === 3 && pp.bad.join() === '5,6', 'points: three read, lines 5 and 6 refused', JSON.stringify(pp));

const st = { code: 'asce-aisc', supports: feet.map(([x, y, z]) => ({ x, y, z, fix: 'pinned' })), equipment: [{ name: 'Pump', mass: '200', cg: '1000 400 300', mounts: '500 0 0\n1500 0 0\n500 800 0\n1500 800 0' }] };
const { input, errors } = U.buildInput(members, st);
ok(!errors.length && input.supports.length === 4 && input.equipment.length === 1 && input.equipment[0].mounts.length === 4, 'input built: 4 supports, 1 equipment with 4 mounts');
const bad = U.buildInput(members, { supports: [{ x: 'a', y: 0, z: 0, fix: 'pinned' }, { x: 0, y: 0, z: 0, fix: 'weird' }], equipment: [{ mass: '0', cg: '1 2', mounts: '' }] });
ok(bad.errors.map((e) => e.code + e.row).join() === 'support1,support2,equipment1', 'bad rows are named, none passed on', JSON.stringify(bad.errors));

const SH = await import(DEV + 'shapes/sections.js');
const shapes = { findSection: SH.findSection, outline: SH.outline };
for (const code of ['asce-aisc', 'en']) {
  const res = FP.checkThisFrame(input, shapes, { code });
  ok(res.ok && res.notReviewed === true && res.summary.members >= 4 && res.summary.weldNotChecked === 0, code + ': the check runs on the member lines from the page', JSON.stringify(res.summary));
  const t = (k) => I18N.t(k);
  const tabs = FP.partTables(res, I18N.t);
  ok(tabs.length > 2 && tabs.every((x) => !/^frame\./.test(x.title) && x.head.every((h) => !/^frame\./.test(h))), code + ': every table heading is a real word, not a missing key', tabs.map((x) => x.title).join(' | '));
  const csv = U.tablesCsv(tabs, EN['pcframe.not_reviewed']);
  ok(csv.startsWith('"An aid until an engineer') && csv.split('\n').length > 10, code + ': the CSV starts with the not-reviewed line');
}
ok(U.tablesCsv([{ title: '=cmd', head: ['a'], rows: [['@x']] }], 'n').includes("'=cmd") && U.tablesCsv([{ title: 't', head: ['a'], rows: [['@x']] }], 'n').includes("'@x"), 'CSV cells that look like formulas are quoted');
const none = FP.checkThisFrame({ members: [], supports: [], equipment: [] }, shapes, {});
ok(!none.ok && none.error === 'no-members' && EN['pcframe.code.no-members'], 'no members: refused with a code that has words');
const noSup = FP.checkThisFrame(U.buildInput(members, { supports: [], equipment: [] }).input, shapes, {});
ok(!noSup.ok, 'no supports: no answer is made up', String(noSup.error));
for (const k of ['pcframe.title', 'pcframe.verdict.pass', 'pcframe.verdict.fail', 'pcframe.verdict.none', 'ui.tb.views.frame', 'input.cmd.view.frame-check', 'frame.des.title', 'frame.weld.summary']) ok(typeof EN[k] === 'string' && EN[k].length, 'words exist: ' + k);
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
