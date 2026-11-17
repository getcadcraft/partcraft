#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Open solver cases add-on's panel logic (lib/opensolvers/os-panel.js, the shared panel) driven in Node through a stand-in host (no DOM):
 * settings are clean data and one undo step each, faces are picked and toggled, each of the three kinds of case is exported through PartCraft's own zip
 * writer (export.js zipStored) and the zip is read back here, blocking problems stop an export in words, results (VTK frames, a structure listing, a force
 * file) are read and handed to the host as display bodies, the words all come from lang/en.json, and lang/es-MX.json has the same keys.
 * The file formats themselves are tested in tools/opensolvers/test-*.mjs; the real page in tools/addons-test/browser-open-solvers.mjs.
 *   node public_html/assets/apps/partcraft/dev/addons/open-solvers/test/test.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url)), ADDON = path.resolve(HERE, '..'), ROOT = path.resolve(ADDON, '../../../../../../..');
const imp = (p) => import(pathToFileURL(p).href);
const PANEL = await imp(path.join(ADDON, 'lib/opensolvers/os-panel.js')), SETUP = await imp(path.join(ADDON, 'lib/opensolvers/os-setup.js')), VTK = await imp(path.join(ADDON, 'lib/opensolvers/os-vtk.js'));
const PROG = await imp(path.join(ADDON, 'lib/opensolvers/os-programs.js'));
const BOX = await imp(path.join(ROOT, 'lib/fem/solid-box.js'));
const { zipStored, crc32 } = await imp(path.join(ADDON, '../../export.js'));
const LANG = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8')), ES = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/es-MX.json'), 'utf8'));
let pass = 0, fail = 0;
const ok = (c, m, extra = '') => { if (c) pass++; else { fail++; console.log('  FAIL ' + m + (extra ? ' — ' + extra : '')); } };
const missing = new Set();
const t = (k, v = {}) => { if (LANG[k] === undefined) { missing.add(k); return '??' + k; } return LANG[k].replace(/\{(\w+)\}/g, (_, n) => (v[n] === undefined ? '{' + n + '}' : v[n])); };

/** A stored zip read back: [{ name, text }] (local headers; the CRC of every entry is checked). */
function unzip(bytes) {
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength), out = [], dec = new TextDecoder();
  let p = 0;
  while (p + 4 <= bytes.length && dv.getUint32(p, true) === 0x04034b50) {
    const method = dv.getUint16(p + 8, true), crc = dv.getUint32(p + 14, true), size = dv.getUint32(p + 18, true), nl = dv.getUint16(p + 26, true), el = dv.getUint16(p + 28, true);
    const name = dec.decode(bytes.subarray(p + 30, p + 30 + nl)), data = bytes.subarray(p + 30 + nl + el, p + 30 + nl + el + size);
    if (method !== 0) throw new Error('not stored'); if (crc32(data) !== crc) throw new Error('crc of ' + name);
    out.push({ name, text: dec.decode(data) }); p += 30 + nl + el + size;
  }
  return out;
}
// the model: a 100 × 10 × 10 bar. Host faces: 0 x=0, 1 x=100, 2 y=0, 3 y=10, 4 z=0, 5 z=10 (as lib/fem/solid-box.js numbers them)
const P = [0, 0, 0, 100, 0, 0, 100, 10, 0, 0, 10, 0, 0, 0, 10, 100, 0, 10, 100, 10, 10, 0, 10, 10];
const I = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
const surface = { positions: P, indices: I, triFace: [4, 4, 5, 5, 2, 2, 1, 1, 3, 3, 0, 0] };
const REF = { left: { name: 'left', at: [0, 5, 5] }, right: { name: 'right', at: [100, 5, 5] }, bottom: { name: 'bottom', at: [50, 0, 5] }, top: { name: 'top', at: [50, 10, 5] } };
const IDX = { left: 0, right: 1, bottom: 2, top: 3 };
function fakeHost(other = null) {
  const log = { undo: [], bodies: null, marks: null, status: [], downloads: [], meshed: 0 };
  let setup = null, picker = null, changeFn = null;
  const mesh = BOX.boxSolid(100, 10, 10, 4, 1, 1);
  const h = {
    t, status: (m) => log.status.push(m), name: () => 'Test bar.partcraft.json',
    setup: { get: () => setup, set: (s, label) => { setup = JSON.parse(JSON.stringify(s)); log.undo.push(label); } },
    faces: { available: () => true, pick: (fn) => { picker = fn; return () => { picker = null; }; }, mark: (r) => { log.marks = r; }, resolve: (refs) => ({ indices: refs.map((r) => IDX[r.name]).filter((i) => i !== undefined), gone: refs.filter((r) => IDX[r.name] === undefined).length }) },
    surface: () => surface,
    conductivity: (id) => ({ steel: 51.9, aluminium: 167 }[id] ?? null),
    mesh: async ({ h: size }) => { log.meshed++; return { mesh, info: { h: size || 25, volume: 10000 } }; },
    zip: (files) => zipStored(files),
    download: (name, data, mime) => log.downloads.push({ name, data, mime }),
    pickFiles: async () => [],
    bodies: { show: (b, name) => { log.bodies = { b, name }; return b.length; }, clear: () => { const had = !!log.bodies; log.bodies = null; return had; }, shown: () => !!log.bodies },
    otherStudy: () => other,
    onChange: (fn) => { changeFn = fn; return () => {}; },
  };
  return { h, log, mesh, click: (ref) => picker && picker(ref), change: () => changeFn && changeFn(), get setup() { return setup; }, get picking() { return !!picker; } };
}
const lastZip = (F) => { const d = F.log.downloads[F.log.downloads.length - 1]; return { name: d.name, mime: d.mime, files: unzip(d.data) }; };

// ---- flow, external: nothing to pick; both lines
{
  const F = fakeHost(), osc = PANEL.createOpenSolvers(F.h), A = osc.app;
  ok(A.get().target === 'flow' && A.get().flow.kind === 'external' && A.get().groups.length === 0, 'default: an external flow case, nothing picked');
  const info = A.info();
  ok(info && info.Re > 0 && info.location && info.cells > 0 && info.k > 0 && info.omega > 0, 'the panel has the numbers to show before writing (Reynolds, cells, k, omega, the point in the fluid)');
  A.set('flow.speed', 25);
  ok(F.setup.flow.speed === 25 && F.log.undo.length === 1, 'a setting is one undo step');
  A.set('flow.fluid', 'water');
  ok(F.setup.flow.nu === 1.003e-6 && F.setup.flow.rho === 998.2, 'choosing water fills its viscosity and density');
  A.set('flow.nu', 2e-6);
  ok(F.setup.flow.fluid === 'custom', 'a typed viscosity makes the fluid custom');
  const ex = await A.exportCase();
  const z = lastZip(F);
  ok(ex && z.name === 'Test_bar-openfoam.zip' && z.mime === 'application/zip' && z.files.every((f) => f.name.startsWith('Test_bar-openfoam/')), 'Export hands the host a zip named after the part, one folder inside', z.name);
  const names = z.files.map((f) => f.name.replace('Test_bar-openfoam/', ''));
  ok(['system/controlDict', 'system/blockMeshDict', 'system/snappyHexMeshDict', 'system/surfaceFeatureExtractDict', 'constant/transportProperties', 'constant/turbulenceProperties', 'constant/triSurface/body.stl', '0.orig/U', '0.orig/p', '0.orig/k', '0.orig/omega', '0.orig/nut', 'Allrun', 'Allclean', 'README.txt'].every((n) => names.includes(n)), 'the zip holds the flow case of the openfoam.com line', names.join(' '));
  ok(JSON.stringify(osc.S.exported.files) === JSON.stringify(z.files.map((f) => f.name)) && /written: \d+ files/.test(osc.S.msg), 'the panel lists the files it wrote');
  A.set('flow.flavour', 'foundation');
  await A.exportCase();
  const n2 = lastZip(F).files.map((f) => f.name.replace('Test_bar-openfoam/', ''));
  ok(['constant/physicalProperties', 'constant/momentumTransport', 'system/surfaceFeaturesDict', 'system/functions', 'constant/geometry/body.stl', '0/U'].every((n) => n2.includes(n)) && !n2.some((n) => /triSurface|0\.orig|transportProperties/.test(n)), 'the other line: its own file names', n2.join(' '));
  // internal with nothing picked: refused in words, nothing downloaded
  const before = F.log.downloads.length;
  A.set('flow.kind', 'internal');
  const bad = await A.exportCase();
  ok(bad === null && F.log.downloads.length === before && /Not written\. An internal flow needs an inlet/.test(osc.S.msg) && osc.S.problems.some((p) => p.code === 'no_outlet' && p.severity === 'error'), 'an internal flow with no inlet is not written, and the panel says why', osc.S.msg);
  const g1 = A.addGroup('inlet');
  ok(g1 === 'g1' && F.picking && osc.S.picking === 'g1', 'Add inlet starts picking');
  F.click(REF.left);
  ok(F.setup.groups[0].faces.length === 1 && F.setup.groups[0].U === 1 && F.log.marks.length === 1, 'a clicked face joins the inlet and is marked');
  F.click(REF.left); ok(F.setup.groups[0].faces.length === 0, 'clicking it again takes it off');
  F.click(REF.left); A.stopPick(); ok(!F.picking, 'Done picking stops the picker');
  A.editGroup('g1', { U: 3 });
  const g2 = A.addGroup('outlet'); F.click(REF.right); A.stopPick();
  const good = await A.exportCase();
  const zi = lastZip(F).files, U = zi.find((f) => f.name.endsWith('0/U')).text;
  ok(good && g2 === 'g2' && /inlet_g1[\s\S]*uniform \(3 0 0\)/.test(U) && zi.some((f) => f.name.endsWith('constant/geometry/inlet_g1.stl')) && zi.some((f) => f.name.endsWith('constant/geometry/walls.stl')), 'with an inlet (3 m/s into the fluid along +X) and an outlet the internal case is written, a surface file a patch');
  ok(osc.S.problems.length === 0, 'and no problems are listed');
  A.remove('g2');
  ok(F.setup.groups.length === 1 && (await A.exportCase()) === null, 'removing the outlet blocks the export again');
}
// ---- structure: copy from the part's own study, export, results back
{
  const other = { from: 'simulation', groups: [{ role: 'fixed', faces: [REF.left] }, { role: 'force-normal', faces: [REF.right], total: 250 }, { role: 'pressure', faces: [REF.top], p: 0.2 }], material: { id: 'aluminium', E: 68900, nu: 0.33, rho: 2700, yield: 276, k: 167 } };
  const F = fakeHost(other), osc = PANEL.createOpenSolvers(F.h), A = osc.app;
  A.set('target', 'structure');
  ok(A.rolesNow().join() === 'fixed,force,pressure', 'a static study reads fixed faces, forces and pressures');
  const n = A.copyStudy();
  ok(n === 3 && F.setup.groups.map((g) => g.role).join() === 'fixed,force,pressure' && F.setup.material.id === 'aluminium' && /Copied 3 items from the Simulation study/.test(osc.S.msg), 'Copy from this part\'s study brings fixtures, loads and the material', osc.S.msg);
  ok(F.setup.groups[1].F.join() === '-250,0,0', 'a force along the face normal becomes a vector into the part: 250 N on the +X face → (−250, 0, 0)', String(F.setup.groups[1].F));
  const ex = await A.exportCase();
  const z = lastZip(F);
  ok(ex && F.log.meshed === 1 && z.name === 'Test_bar-code-aster.zip' && z.files.map((f) => f.name.split('/')[1]).join() === 'Test_bar.comm,Test_bar.mail,Test_bar.export,README.txt', 'Export meshes first, then writes comm, mail, export, README', z.files.map((f) => f.name).join(' '));
  const comm = z.files[0].text;
  ok(/FORCE_FACE=\(\s*_F\(GROUP_MA="FRC_G2", FX=-2\.5, FY=0\.0, FZ=0\.0\)/.test(comm) && /E=68900\.0, NU=0\.33, RHO=2\.7e-9/.test(comm), 'the command file carries the copied load (250 N / 100 mm²) and material');
  // a listing in the layout of the solver's print routine, for this very mesh
  const nn = F.mesh.nodes.length / 3, L = [' CHAMP AUX NOEUDS DE NOM SYMBOLIQUE  DEPL', ' NUMERO D\'ORDRE: 1 INST:  0.00000E+00', '', ' NOEUD   DX DY DZ'];
  for (let i = 0; i < nn; i++) L.push(' ' + (i + 1) + ' ' + (-1e-4 * F.mesh.nodes[3 * i]).toExponential(6) + ' 0.0 0.0');
  L.push('', ' CHAMP AUX NOEUDS DE NOM SYMBOLIQUE  SIEQ_NOEU', ' NUMERO D\'ORDRE: 1 INST:  0.00000E+00', '', ' NOEUD   VMIS');
  for (let i = 0; i < nn; i++) L.push(' ' + (i + 1) + ' ' + (2.5 + 0.01 * i).toExponential(6));
  const rd = await A.importResults([{ name: 'Test_bar.resu', text: L.join('\n') + '\n' }]);
  ok(rd && rd.frames === 1 && osc.S.frames[0].kind === 'aster' && F.setup.plot.field === 'point:SIEQ_NOEU_VMIS', 'the listing is read; the plot opens on von Mises', JSON.stringify(rd) + ' ' + F.setup.plot.field);
  const shown = A.show();
  ok(shown >= 2 && F.log.bodies.b.every((b) => /^#[0-9a-f]{6}$/.test(b.color) && b.mesh.indices.length >= 3) && osc.S.legend.legend.length === 8 && Math.abs(osc.S.legend.lo - 2.5) < 0.2, 'Show hands colour-band bodies and a legend to the host', String(shown));
  const xs = F.log.bodies.b.flatMap((b) => b.mesh.positions.filter((_, i) => i % 3 === 0));
  ok(Math.min(...xs) > 100, 'beside the part: the plot starts past the part (x > 100 mm)', String(Math.min(...xs)));
  ok(osc.S.legend.scale > 1, 'small displacements are drawn enlarged (automatic scale ' + osc.S.legend.scale + ')');
  A.setPlot({ field: 'point:DEPL:mag', scale: 1, beside: false });
  A.show();
  const x2 = F.log.bodies.b.flatMap((b) => b.mesh.positions.filter((_, i) => i % 3 === 0));
  ok(Math.abs(Math.max(...x2) - (100 - 0.01)) < 1e-6 && Math.abs(osc.S.legend.hi - 0.01) < 0.002, 'displacement at scale 1 where the file puts it: the end moves 0.01 mm', String(Math.max(...x2)));
  ok(A.clear() === true && !F.log.bodies && osc.S.legend === null, 'Remove the plot clears the host\'s bodies');
  // heat: needs a conductivity; the preset's comes from the host's material list
  A.set('structure.kind', 'thermal');
  ok(A.rolesNow().join() === 'temp,flux,conv', 'a heat study reads temperatures, fluxes and convection');
  A.setMaterial('steel');
  ok(F.setup.material.k === 51.9, 'choosing a preset takes its conductivity from the host\'s own material list');
  const none = await A.exportCase();
  ok(none === null && /needs at least one temperature or convection face/.test(osc.S.msg), 'a heat study with no temperature is refused in words', osc.S.msg);
  const tg = A.addGroup('temp'); F.click(REF.left); A.stopPick(); A.editGroup(tg, { T: 80 });
  const th = await A.exportCase();
  ok(th && /TEMP_IMPO=\(\s*_F\(GROUP_MA="TMP_G4", TEMP=80\.0\)/.test(lastZip(F).files[0].text) && /LAMBDA=0\.0519/.test(lastZip(F).files[0].text), 'the heat study is written with the temperature face and the conductivity in W/(mm·K)');
  F.change();
  ok(osc.S.mesh === null && /changed/.test(osc.S.msg) && osc.S.exported === null, 'a changed part clears the mesh and the list of written files');
}
// ---- impact: export, VTK frames back (the converter's layout: points already moved)
{
  const F = fakeHost(), osc = PANEL.createOpenSolvers(F.h), A = osc.app;
  A.set('target', 'impact');
  A.set('impact.v0.1', -6);
  ok(F.setup.impact.v0.join() === '0,-6,0', 'a path into a vector sets one component');
  const ex = await A.exportCase();
  const z = lastZip(F);
  ok(ex && z.name === 'Test_bar-openradioss.zip' && z.files.map((f) => f.name.split('/')[1]).join() === 'Test_bar_0000.rad,Test_bar_0001.rad,README.txt' && z.files[0].text.startsWith('#RADIOSS STARTER\n') && /-6000/.test(z.files[0].text), 'Export writes the starter and engine decks; 6 m/s is 6000 mm/s in the deck');
  A.set('impact.v0.1', 0); A.set('impact.gravity', false);
  ok((await A.exportCase()) === null && /Nothing moves/.test(osc.S.msg), 'a run where nothing moves is refused in words');
  const frame = (k) => VTK.writeVtk({ title: 'vtk output', points: [0, 0, 0, 100, 0, 0, 0, 10, 0, 0, 0, 10 + k], cells: [[0, 1, 2, 3]], cellTypes: [10],
    pointData: { NODE_ID: { comps: 1, data: [1, 2, 3, 4] }, Displacement: { comps: 3, data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, k] } }, cellData: { '3DELEM_Von_Mises': { comps: 1, data: [100 * k] }, '3DELEM_Plastic_Strain': { comps: 1, data: [0.01 * k] } } });
  const rd = await A.importResults([{ name: 'bar_010.vtk', text: frame(3) }, { name: 'bar_002.vtk', text: frame(1) }, { name: 'bar_001.vtk', text: frame(0) }, { name: 'notes.vtk', text: '# vtk DataFile Version 3.0\nx\nBINARY\n' }]);
  ok(rd.frames === 3 && osc.S.frames.map((f) => f.name).join() === 'bar_001.vtk,bar_002.vtk,bar_010.vtk' && osc.S.frame === 2 && rd.bad.length === 1 && /binary/i.test(osc.S.msg), 'three frames in number order, the last one shown; the binary file is named with the reason', osc.S.msg);
  ok(F.setup.plot.field === 'cell:3DELEM_Von_Mises' && osc.S.frames[0].deformed, 'the plot opens on von Mises; the frames are known to hold moved points');
  A.setPlot({ beside: false }); A.show();
  const zs = F.log.bodies.b.flatMap((b) => b.mesh.positions.filter((_, i) => i % 3 === 2));
  ok(Math.max(...zs) === 13 && osc.S.legend.lo === 300 && A.toMm() === 1, 'frame 3 at scale 1: the moved point is drawn where the file has it (13 mm), not moved twice');
  A.setFrame(1); A.setPlot({ field: 'cell:3DELEM_Plastic_Strain', scale: 3 }); A.show();
  const z2 = F.log.bodies.b.flatMap((b) => b.mesh.positions.filter((_, i) => i % 3 === 2));
  ok(Math.max(...z2) === 13 && Math.abs(osc.S.legend.lo - 0.01) < 1e-12, 'frame 2 at scale 3: 10 + 3 × 1 mm; plastic strain 0.01');
  ok(A.fields().map((f) => A.fieldLabel(f)).every((s) => !s.includes('??')), 'every field has a label in words');
}
// ---- flow results: a patch file in metres and a force file
{
  const F = fakeHost(), osc = PANEL.createOpenSolvers(F.h), A = osc.app;
  const patch = '# vtk DataFile Version 2.0\nbody\nASCII\nDATASET POLYDATA\nPOINTS 4 float\n0 0 0 0.1 0 0 0.1 0.01 0 0 0.01 0\nPOLYGONS 1 5\n4 0 1 2 3\nCELL_DATA 1\nFIELD attributes 2\np 1 1 float\n-42.5\nU 3 1 float\n0 0 0\nPOINT_DATA 4\nFIELD attributes 1\np 1 4 float\n-40 -41 -44 -45\n';
  const forces = '# Force\n# CofR : (0 0 0)\n#\n# Time total_x total_y total_z pressure_x pressure_y pressure_z viscous_x viscous_y viscous_z\n500 1.25 0.5 0 1 0.5 0 0.25 0 0\n';
  const rd = await A.importResults([{ name: 'body_500.vtk', text: patch }, { name: 'force.dat', text: forces }]);
  ok(rd.frames === 1 && rd.forces && osc.S.forces.last.total.join() === '1.25,0.5,0' && osc.S.forces.last.viscous[0] === 0.25, 'a wall patch and the force file are read together');
  ok(/:p$/.test(F.setup.plot.field) && A.toMm() === 1000, 'a flow result opens on pressure and is read in metres');
  A.setPlot({ beside: false }); A.show();
  const xs = F.log.bodies.b.flatMap((b) => b.mesh.positions.filter((_, i) => i % 3 === 0));
  ok(Math.max(...xs) === 100, 'the patch is drawn in the model\'s millimetres (0.1 m → 100 mm)');
  A.setUnit('mm'); ok(A.toMm() === 1, 'the person can say the file is in millimetres');
  ok((await A.importResults([{ name: 'x.txt', text: 'hello' }])).bad.length === 1 && /Could not read/.test(osc.S.msg), 'a file that is none of these is named, not swallowed');
}
// ---- words and data
{
  ok(missing.size === 0, 'every key the panel asked for is in lang/en.json', [...missing].join(' '));
  const roles = [...new Set(Object.values(SETUP.ROLES).flat())];
  ok(roles.every((r) => LANG['role.' + r] && LANG['add.' + r]) && ['flow', 'structure', 'impact'].every((k) => LANG['target.' + k] && LANG['export.units_' + k] && LANG['results.how_' + k] && LANG['need.for_' + k]), 'a label for every role and every kind of case');
  const codes = ['group_empty', 'faces_gone', 'many_cells', 'no_inlet', 'no_outlet', 'no_location', 'inlet_not_flat', 'no_elements', 'bad_elements', 'no_fixed', 'modal_free', 'no_load', 'no_density', 'no_conductivity', 'no_thermal', 'no_motion', 'many_cycles'];
  ok(codes.every((c) => LANG['p.' + c]) && PANEL.BLOCKING.every((c) => LANG['p.' + c]), 'words for every problem code');
  const ka = Object.keys(LANG), kb = Object.keys(ES);
  ok(JSON.stringify(ka) === JSON.stringify(kb), 'lang/es-MX.json has the same keys as en.json');
  const ph = (s) => (s.match(/\{\w+\}/g) || []).sort().join();
  ok(ka.every((k) => ph(LANG[k]) === ph(ES[k])), 'and the same placeholders in every string', ka.filter((k) => ph(LANG[k]) !== ph(ES[k])).join(' '));
  ok(!/install/i.test(JSON.stringify(LANG)) && !/instal/i.test(JSON.stringify(ES)), 'nothing says "install": the solvers and the add-on are added');
  ok(/separate from CadCraft/.test(LANG['need.separate']) && /not part of it/.test(LANG['need.separate']) && /add them to your own computer yourself/.test(LANG['need.separate']), 'the panel says the programs are separate, not part of CadCraft, and added by the person');
  ok(/No case from this add-on has yet been run in the real solvers/.test(LANG['panel.honest']) && /No case from this add-on has yet been run in the real solvers/.test(LANG['note.unrun']), 'the panel says no case has been run in the real solvers');
  ok(PROG.PROGRAMS.length === 4 && PROG.PROGRAMS.every((p) => /^https:\/\//.test(p.url) && /GNU (Affero )?General Public License, version 3 or later/.test(p.licence)) && PROG.PROGRAMS.find((p) => p.id === 'openradioss').licence.includes('Affero'), 'four programs, each with its licence and its own project page');
  const man = JSON.parse(fs.readFileSync(path.join(ADDON, 'addon.json'), 'utf8'));
  ok(man.id === 'open-solvers' && man.default === 'off' && man.license === 'Apache-2.0' && man.apps.join() === 'partcraft' && /No case has yet been run in the real solvers/.test(man.description) && man.description.length <= 400, 'addon.json: off by default, Apache-2.0, says it was never run');
  // the reader refuses what is not a setup
  let threw = 0; for (const bad of [null, { target: 'x' }, { groups: [{ id: 'g1', role: 'inlet', faces: [{ name: '', at: [0, 0, 0] }] }] }, { flow: { speed: -1 } }, { groups: [{ id: 'g1', role: 'fixed' }, { id: 'g1', role: 'fixed' }] }]) { try { SETUP.readSetup(bad); } catch { threw++; } }
  ok(threw === 5, 'the settings reader refuses a bad target, a nameless face, a negative speed, a repeated id', String(threw));
  const round = SETUP.readSetup(JSON.parse(JSON.stringify(SETUP.readSetup(SETUP.newSetup()))));
  ok(JSON.stringify(round) === JSON.stringify(SETUP.readSetup(SETUP.newSetup())), 'a clean setup reads back unchanged');
  // the copies in the add-on are the library, byte for byte
  const libDir = path.join(ROOT, 'lib/opensolvers'), copies = fs.readdirSync(libDir).filter((f) => f.endsWith('.js'));
  ok(copies.length >= 9 && copies.every((f) => fs.readFileSync(path.join(libDir, f)).equals(fs.readFileSync(path.join(ADDON, 'lib/opensolvers', f)))) && fs.readFileSync(path.join(libDir, 'os-setup.js')).equals(fs.readFileSync(path.join(ADDON, '../../open-solvers-setup.js'))), 'the add-on\'s copies of lib/opensolvers are in step (tools/opensolvers/sync.mjs)');
  const srcs = copies.map((f) => fs.readFileSync(path.join(libDir, f), 'utf8'));
  ok(srcs.every((s) => s.startsWith('/* SPDX-License-Identifier: Apache-2.0 */')) && !srcs.some((s) => /\bdocument\.|window\./.test(s.replace(/ownerDocument/g, ''))), 'every library file is Apache-2.0 and none reaches for the page (the panel draws only into the pane it is given)');
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
