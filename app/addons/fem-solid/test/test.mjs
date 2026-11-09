#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Solid FEM add-on's panel logic (lib/fem/solid-panel.js, the shared panel) driven in Node through a stand-in host (no DOM): settings are
 * clean data and one undo step each, faces are picked and toggled, the mesh and the solve go through the host and the engine, the plot is handed to the host as
 * display bodies, warnings reach the host's Problems store, a changed part clears the mesh. The words come from lang/en.json (every key the panel and the
 * warnings use must exist). The real page is tools/addons-test/browser-fem-solid.mjs.
 *   node public_html/assets/apps/partcraft/dev/addons/fem-solid/test/test.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)), ADDON = path.resolve(HERE, '..'), ROOT = path.resolve(ADDON, '../../../../../../..');
const PANEL = await import(pathToFileURL(path.join(ADDON, 'lib/fem/solid-panel.js')).href);
const SETUP = await import(pathToFileURL(path.join(ADDON, 'lib/fem/solid-setup.js')).href);
const BOX = await import(pathToFileURL(path.join(ROOT, 'lib/fem/solid-box.js')).href);
const LANG = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) { pass++; } else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };

const t = (k, v = {}) => (LANG[k] === undefined ? '??' + k : LANG[k].replace(/\{(\w+)\}/g, (_, n) => (v[n] === undefined ? '{' + n + '}' : v[n])));
const faceRefs = [{ name: 'left', at: [0, 5, 5] }, { name: 'right', at: [100, 5, 5] }, { name: 'top', at: [50, 10, 5] }];   // face index = position in this list
function fakeHost() {
  const log = { undo: [], bodies: null, problems: null, marks: null, picks: [], status: [] };
  let setup = null, picker = null, changeFn = null;
  const mesh = BOX.boxSolid(100, 10, 10, 8, 2, 2);   // faces 0 x=0, 1 x=100, 2 y=0, 3 y=10, 4, 5
  const idx = { left: 0, right: 1, top: 3 };
  const h = {
    t, status: (m) => log.status.push(m),
    setup: { get: () => setup, set: (s, label) => { setup = JSON.parse(JSON.stringify(s)); log.undo.push(label); } },
    faces: { available: () => true, pick: (fn) => { picker = fn; return () => { picker = null; }; }, mark: (r) => { log.marks = r; }, resolve: (refs) => ({ indices: refs.map((r) => idx[r.name]).filter((i) => i !== undefined), gone: refs.filter((r) => idx[r.name] === undefined).length }), label: (r) => r.name },
    mesh: async ({ h: size }) => ({ mesh, info: { h: size || 12.5 } }),
    bodies: { show: (b, name) => { log.bodies = { b, name }; return b.length; }, clear: () => { const had = !!log.bodies; log.bodies = null; return had; }, shown: () => !!log.bodies },
    problems: (l) => { log.problems = l; },
    onChange: (fn) => { changeFn = fn; return () => {}; },
  };
  return { h, log, click: (ref) => picker && picker(ref), change: () => changeFn && changeFn(), get setup() { return setup; }, get picking() { return !!picker; } };
}
{
  const F = fakeHost(), fem = PANEL.createSolidFem(F.h), A = fem.app;
  ok(A.get().material.id === 'steel' && A.get().supports.length === 0, 'default settings: steel, no supports');
  A.setMaterial('aluminium');
  ok(F.setup.material.id === 'aluminium' && F.setup.material.E === 68900 && F.log.undo.length === 1, 'a material preset is one undo step');
  A.setMaterial('custom', { E: 123456 });
  ok(F.setup.material.id === 'custom' && F.setup.material.E === 123456, 'a typed value makes the material custom');
  A.setMaterial('steel');
  const s1 = A.addSupport();
  ok(s1 === 's1' && F.picking && fem.S.picking === 's1', 'Add fixed faces starts picking for the new support');
  F.click(faceRefs[0]);
  ok(F.setup.supports[0].faces.length === 1 && F.log.marks.length === 1, 'a picked face is added and marked');
  F.click(faceRefs[0]);
  ok(F.setup.supports[0].faces.length === 0, 'picking the same face again takes it off');
  F.click(faceRefs[0]);
  A.stopPick();
  ok(!F.picking, 'Done picking stops the picker');
  const l1 = A.addLoad('force');
  F.click(faceRefs[1]);
  A.editLoad(l1, { F: [0, -100, 0] });
  ok(F.setup.loads[0].type === 'force' && F.setup.loads[0].faces.length === 1 && F.setup.loads[0].F[1] === -100, 'a force on the picked face');
  A.stopPick();
  ok(F.log.undo.length >= 8, 'every change was an undo step', String(F.log.undo.length));
  // solve before meshing: the panel meshes first
  const r = await A.solve();
  ok(r && r.ok && fem.S.result && fem.S.mesh, 'Solve meshes first, then solves', JSON.stringify(r && r.warnings));
  ok(Math.abs(r.reactions.total[1] - 100) < 1e-6, 'the reaction is the load', String(r.reactions.total[1]));
  ok(F.log.problems && F.log.problems.every((p) => p.code.startsWith('solidfem.') && p.text.length > 5 && !p.text.startsWith('??')), 'warnings reach the Problems store in words');
  ok(fem.S.warnings.some((w) => w.code === 'singular') && !fem.S.warnings.some((w) => A.wording(w).startsWith('??')), 'every warning has words in lang/en.json');
  // plot
  const n = A.show();
  ok(n >= 4 && F.log.bodies && F.log.bodies.b.every((b) => /^#[0-9a-f]{6}$/.test(b.color) && b.mesh.positions.length > 8) && fem.S.legend.legend.length === 8, 'Show hands colour-band bodies and a legend to the host', String(n));
  A.setPlot({ field: 'disp', scale: 10, beside: false });
  ok(F.setup.plot.field === 'disp' && fem.S.result, 'plot settings are saved and keep the result');
  const n2 = A.show();
  ok(n2 >= 1 && fem.S.legend.scale === 10, 'a typed deformation scale is used', String(fem.S.legend.scale));
  ok(A.clear() === true && !F.log.bodies && fem.S.legend === null, 'Remove the plot clears the host\'s bodies');
  // changing a setting after the solve drops the result
  A.setMaterial('titanium');
  ok(fem.S.result === null, 'a changed setting clears the stale result');
  // a changed part clears the mesh
  F.change();
  ok(fem.S.mesh === null && /changed/.test(fem.S.msg), 'a changed part clears the mesh');
  // modal
  A.setMaterial('steel'); A.setField('kind', 'modal'); A.setField('modes', 3);
  const m = await A.solve();
  ok(m && m.kind === 'modal' && m.freqHz.length === 3 && m.freqHz[0] > 100, 'a modal study through the panel', m && m.freqHz.map((f) => f.toFixed(0)).join(' '));
  ok(A.plotValues().name.includes('Hz') && A.show() >= 1, 'a mode shape is drawn');
  // no supports: refused with words
  A.remove('s1');
  const bad = await A.solve();
  ok(bad === null || !bad.ok, 'without a support nothing is solved');
  ok(/Nothing holds the part/.test(fem.S.msg) || fem.S.warnings.some((w) => w.code === 'no_support'), 'and the reason is in words', fem.S.msg);
}
{
  // the settings key is read from an untrusted file
  const bad = { v: 1, material: { id: 'steel', E: 1, nu: 0.3, rho: 1 }, loads: [{ id: 'a', type: 'force', faces: [], F: [1, 2] }] };
  let threw = false; try { SETUP.readSetup(bad); } catch { threw = true; }
  ok(threw, 'a load with a short force vector is refused');
}
{
  // every key the lib's wording and the adapter use is in the language file
  const src = ['solid-panel.js', 'solid-study.js'].map((f) => fs.readFileSync(path.join(ADDON, 'lib/fem', f), 'utf8')).join('\n') + fs.readFileSync(path.join(ADDON, 'host-partcraft.js'), 'utf8') + fs.readFileSync(path.join(ADDON, 'main.js'), 'utf8');
  const keys = new Set([...src.matchAll(/\bt\('([a-z_.]+)'/g)].map((m) => m[1]));
  for (const code of [...src.matchAll(/warn\('([a-z_]+)'/g)].map((m) => m[1])) keys.add('w.' + code);
  for (const id of ['steel', 'stainless', 'aluminium', 'titanium', 'abs', 'custom']) keys.add('mat.' + id);
  for (const ty of ['force', 'pressure', 'gravity']) keys.add('load.' + ty);
  keys.add('plot.vm'); keys.add('plot.disp');
  const missing = [...keys].filter((k) => !k.endsWith('.') && LANG[k] === undefined);
  ok(missing.length === 0, 'every word key the add-on uses is in lang/en.json', missing.join(', '));
}
console.log('Solid FEM add-on (panel logic): ' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
