#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — cc-step (lib/step/, 0.7 D7.26, session part-08): STEP files to triangles.
 *   - every fixture in fixtures/step/ (written by OpenCascade, a black box: tools/step-test/make-fixtures.mjs) read, welded and
 *     repaired by PartCraft's meshimport.js: a closed solid whose volume is OpenCascade's to 0.5 %, the solid and instance
 *     counts, the bounding box inside OpenCascade's (its box is loose on curved faces), the schema (AP203 / AP214 / AP242) and the unit (inches);
 *   - PartCraft's own faceted STEP (export.js stepFaceted) of a part read back: the same volume;
 *   - ModelCraft's importer (io/step-import.js): closed meshes in metres, OpenCascade's volume, each placed part its own mesh;
 *   - BimCraft's (step-ifc.js): an IFC4 model, one proxy per placed solid, that BimCraft's own IFC reader draws in full;
 *   - untrusted: every fixture cut off at 40 lengths and 60 files with flipped bytes: each read what it could or said why with a
 *     step.err.* code (nothing else thrown); not STEP, empty, no DATA section;
 *   - the copies (tools/step/sync.mjs --check).
 *   node tools/step-test/test.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const VERBOSE = process.argv.includes('--verbose');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (VERBOSE) console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m); } };
const section = (t) => console.log('\n== ' + t);

const { readStep, schemaOf } = await import(path.join(REPO, 'lib/step/read.js'));
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
const I18N = await import(DEV + 'i18n.js');
I18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(DEV + 'lang/en.json', 'utf8')) });
const MI = await import(DEV + 'meshimport.js');
const { default: Module } = await import(path.join(REPO, 'public_html/assets/vendor/manifold-3d/current/manifold.js'));
const M = await Module(); M.setup();
const FIX = path.join(REPO, 'fixtures/step');
const facts = JSON.parse(fs.readFileSync(path.join(FIX, 'facts.json'), 'utf8'));

/** All solids of a read, welded and repaired, with manifold's volume. */
function solidOf(r) {
  const pos = MI.meshFromStep(r);   // what PartCraft does with a STEP when there is no exact kernel
  const rep = MI.repairMesh(pos);
  let volume = NaN;
  try { const m = new M.Manifold(new M.Mesh({ numProp: 3, vertProperties: Float32Array.from(rep.positions), triVerts: rep.indices })); volume = m.volume(); m.delete(); } catch { /* not a solid */ }
  let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < rep.positions.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], rep.positions[i + k]); hi[k] = Math.max(hi[k], rep.positions[i + k]); }
  return { rep, volume, bbox: [lo, hi] };
}

section('cc-step: OpenCascade\'s files (fixtures/step)');
for (const [file, x] of Object.entries(facts)) {
  const t0 = performance.now();
  const r = readStep(fs.readFileSync(path.join(FIX, file)));
  const ms = performance.now() - t0;
  const s = solidOf(r);
  const err = Math.abs(s.volume - x.volume) / x.volume;
  // OpenCascade's box (BRepBndLib.Add, no triangulation) grows by control points on curved faces: ours must lie inside it.
  const boxOff = Math.max(...[0, 1, 2].flatMap((k) => [x.bbox[0][k] - s.bbox[0][k], s.bbox[1][k] - x.bbox[1][k]]));
  const schemaWant = x.schema === 'AP203' ? 'AP203' : x.schema.startsWith('AP242') ? 'AP242' : 'AP214';
  ok(s.rep.report.closed && err < 5e-3 && r.counts.solids === x.solids && r.counts.instances === x.instances && boxOff <= 4 * r.tol + 1e-6 && r.schema === schemaWant && !r.notes.length,
    `${file}: closed, volume ${s.volume.toFixed(2)} (${x.volume}, ${(err * 100).toFixed(3)} %), ${r.counts.solids} solid(s), ${r.counts.instances} placed, box within ${boxOff.toExponential(1)}, ${r.schema}, ${r.counts.triangles} triangles, ${ms.toFixed(0)} ms — ${x.note}`);
}
{
  const r = readStep(fs.readFileSync(path.join(FIX, 'box-inch.step')));
  ok(r.unitMm === 25.4, 'box-inch.step: the file\'s length unit is the inch (25.4 mm); read in millimetres');
  ok(schemaOf("AP242_MANAGED_MODEL_BASED_3D_ENGINEERING_MIM_LF { 1 0 10303 442 1 1 4 }") === 'AP242' && schemaOf('CONFIG_CONTROL_DESIGN') === 'AP203' && schemaOf('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }') === 'AP214' && schemaOf('IFC4') === 'other', 'schemas from FILE_SCHEMA');
}

section('cc-step: PartCraft\'s own faceted STEP');
{
  const X = await import(DEV + 'export.js');
  const body = M.Manifold.cube([40, 30, 20]).subtract(M.Manifold.cylinder(30, 6, 6, 32).translate([20, 15, -5]));
  const g = body.getMesh();
  const mesh = { positions: Float32Array.from(g.vertProperties), indices: Uint32Array.from(g.triVerts) };
  const s = X.stepFaceted(mesh, 'Holed block', { schema: 'AP242' });
  const r = readStep(new TextEncoder().encode(s.text));
  const so = solidOf(r);
  ok(so.rep.report.closed && Math.abs(so.volume - body.volume()) / body.volume() < 1e-6, `stepFaceted (AP242, ${s.counts.faces} faces) read back: closed, the same volume (${so.volume.toFixed(3)})`);
}

section('cc-step in ModelCraft (io/step-import.js)');
{
  const MC = path.join(REPO, 'public_html/assets/apps/modelcraft/dev/');
  const MI18N = await import(MC + 'i18n.js');
  MI18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(MC + 'lang/en.json', 'utf8')) });
  const { Model } = await import(MC + 'model.js');
  const SI = await import(MC + 'io/step-import.js');
  for (const file of ['plate.step', 'rounded.step', 'torus.step', 'vase.step', 'assembly.step', 'box-inch.step']) {
    const model = new Model();
    const read = SI.readStepFile(fs.readFileSync(path.join(FIX, file)));
    const r = model.change('x', (m) => SI.importStep(m, read, file));
    const infos = [...model.defs.values()].filter((d) => d.mesh).map((d) => d.mesh.info());
    const vol = infos.reduce((a, i) => a + (i.volume || 0), 0) * 1e9;   // m³ → mm³
    const want = facts[file].volume;
    const sharp = [   // FL_SHARP (mesh.js) = 8
    ...model.defs.values()].filter((d) => d.mesh).reduce((a, d) => { let n = 0; for (let h = 0; h < d.mesh.nh; h++) if (d.mesh.hTw[h] > h && (d.mesh.hFl[h] & 8)) n++; return a + n; }, 0);
    ok(infos.length === facts[file].instances && infos.every((i) => i.closed) && Math.abs(vol - want) / want < 5e-3 && r.report.solids === infos.length,
      `${file}: ${infos.length} closed mesh(es) in metres, ${vol.toFixed(1)} mm³ (${want}), ${r.report.faces} faces, ${sharp} sharp edges`);
  }
}

section('cc-step in BimCraft (step-ifc.js: STEP → IFC4 → IfcModel)');
{
  const BC = path.join(REPO, 'public_html/assets/apps/bimcraft/dev/');
  const { stepToIfc } = await import(BC + 'step-ifc.js');
  const { IfcModel } = await import(BC + 'ifc-model.js');
  const WebIFC = await import(fs.existsSync(BC + 'ifc/api.js') ? BC + 'ifc/api.js' : path.join(REPO, 'lib/ifc/api.js'));
  const quiet = async (fn) => { const l = console.log, w = console.warn; console.log = console.warn = () => {}; try { return await fn(); } finally { console.log = l; console.warn = w; } };
  const ifcm = await quiet(() => IfcModel.create(WebIFC, null));
  for (const file of ['plate.step', 'assembly.step', 'box-inch.step']) {
    const { text, read } = stepToIfc(fs.readFileSync(path.join(FIX, file)), { name: file.replace(/\.step$/, '') });
    const want = read.solids.reduce((n, s) => n + s.indices.length / 3, 0);
    const info = await quiet(() => ifcm.load(new TextEncoder().encode(text)));
    const proxies = (text.match(/IFCBUILDINGELEMENTPROXY\(/g) || []).length;
    ok(info.schema === 'IFC4' && info.storeys.length === 1 && info.triangles === want && proxies === facts[file].instances,
      `${file}: an IFC4 model with ${proxies} proxy element(s) on one storey; BimCraft's reader draws all ${info.triangles} triangles (${want})`);
  }
  ifcm.close();
}

section('cc-step: untrusted files');
{
  let n = 0, codes = 0, other = 0, partial = 0;
  for (const file of Object.keys(facts)) {
    const b = fs.readFileSync(path.join(FIX, file));
    for (let i = 1; i <= 40; i++) {
      const cut = b.subarray(0, Math.floor(b.length * i / 41));
      n++;
      try { const r = readStep(cut); if (r.solids.length) partial++; }
      catch (e) { if (e && /^step\.err\./.test(e.code || '')) codes++; else { other++; if (other < 4) console.log('    unexpected:', file, cut.length, e && e.stack ? e.stack.split('\n').slice(0, 2).join(' ') : e); } }
    }
  }
  ok(other === 0 && codes > 0, `${n} cut-off files: ${partial} read in part, ${codes} refused with a reason, nothing else thrown`);
  let seed = 11, other2 = 0;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const files = Object.keys(facts);
  for (let k = 0; k < 60; k++) {
    const b = Uint8Array.from(fs.readFileSync(path.join(FIX, files[k % files.length])));
    for (let j = 0; j < 12; j++) b[Math.floor(rnd() * b.length)] = Math.floor(rnd() * 256);
    try { readStep(b); } catch (e) { if (!/^step\.err\./.test(e.code || '')) { other2++; if (other2 < 4) console.log('    unexpected:', e && e.stack ? e.stack.split('\n').slice(0, 2).join(' ') : e); } }
  }
  ok(other2 === 0, '60 files with flipped bytes: read or refused with a reason, nothing else thrown');
  const code = (b) => { try { readStep(b); return 'read'; } catch (e) { return e.code || e.message; } };
  ok(code(new TextEncoder().encode('hello')) === 'step.err.not_step' && code(new Uint8Array(0)) === 'step.err.not_step' && code(new TextEncoder().encode('ISO-10303-21;\nHEADER;\nENDSEC;\nEND-ISO-10303-21;')) === 'step.err.bad_file'
    && code(new TextEncoder().encode("ISO-10303-21;\nHEADER;\nFILE_SCHEMA(('AUTOMOTIVE_DESIGN'));\nENDSEC;\nDATA;\n#1=CARTESIAN_POINT('',(0.,0.,0.));\nENDSEC;\nEND-ISO-10303-21;")) === 'step.err.no_solids',
    'not STEP / empty / no DATA section / no solid in it: each its own reason');
}

section('cc-step: the copies');
{
  let okSync = true;
  try { execFileSync(process.execPath, [path.join(REPO, 'tools/step/sync.mjs'), '--check'], { encoding: 'utf8' }); } catch { okSync = false; }
  ok(okSync, 'tools/step/sync.mjs --check: PartCraft, ModelCraft and BimCraft hold the library as it is');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
