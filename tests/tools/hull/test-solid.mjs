#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-solid.mjs — cc-hull solid.js, surfaces to solid (0.8 EG.26; owner decision D7.45, 2026-10-29), against closed-form hulls:
 *   a box barge of five planar patches (open deck capped): volume L·B·T, KB = T/2, BM = B²/(12T); the same barge drawn as HALF (mirror) gives the same;
 *   a half-immersed log (extruded circle + two end caps): πR²L/2 within the polygon error; open sets are reported open and never floated silently;
 *   PartCraft's hydrostatics (describe) reads the result; the PartCraft copy of cc-hull is byte-identical.
 *   node tools/hull/test-solid.mjs [--verbose]
 */
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const imp = (p) => import(pathToFileURL(path.join(ROOT, p)).href);
const N = await imp('lib/nurbs/index.js'), H = await imp('lib/hull/solid.js'), HY = await imp('public_html/assets/apps/partcraft/dev/hydrostatics.js');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (process.argv.includes('--verbose')) console.log('  ok  ', m); } else { fail++; console.log('FAIL', m); } };
const near = (a, b, rel) => Math.abs(a - b) <= rel * Math.abs(b);

const L = 10000, B = 3000, D = 2000, T = 1000;   // x along, y up (keel at 0), z across
const quad = (a, b, c, d) => N.construct.planarPatch([a, b, c, d]);
const docOf = (patches) => { let d = N.doc.newDoc(); patches.forEach((s, i) => { d = N.doc.add(d, 'surface', s, { name: 'P' + i, id: 'p' + i }).doc; }); return d; };
const P = (x, y, z) => [x, y, z];
const bottom = quad(P(0, 0, -B / 2), P(L, 0, -B / 2), P(L, 0, B / 2), P(0, 0, B / 2));
const sideP = quad(P(0, 0, B / 2), P(L, 0, B / 2), P(L, D, B / 2), P(0, D, B / 2));
const sideM = quad(P(0, 0, -B / 2), P(L, 0, -B / 2), P(L, D, -B / 2), P(0, D, -B / 2));
const end0 = quad(P(0, 0, -B / 2), P(0, 0, B / 2), P(0, D, B / 2), P(0, D, -B / 2));
const end1 = quad(P(L, 0, -B / 2), P(L, 0, B / 2), P(L, D, B / 2), P(L, D, -B / 2));
const mesh = (s) => ({ mesh: { positions: s.positions, indices: s.indices } });

// 1. the barge as five patches
{
  const s = H.surfacesToSolid(N, docOf([bottom, sideP, sideM, end0, end1]), { n: 6 });
  ok(s.closed && s.capped === 1 && s.openEdges === 0 && s.nonManifold === 0, `barge: closed after capping the deck (capped ${s.capped}, open edges ${s.openEdges})`);
  ok(near(s.volume, L * B * D, 1e-9), `barge: volume ${s.volume} = L·B·D`);
  const r = HY.describe(mesh(s), { draft: T, length_unit: 'mm', water: 'fresh' });
  ok(near(r.volume_m3, L * B * T / 1e9, 1e-6), `barge at draft ${T}: displaced volume ${r.volume_m3} m³ = L·B·T`);
  ok(Math.abs(r.kb_m - T / 2000) < 1e-4, `KB ${r.kb_m} m = T/2`);
  ok(Math.abs(r.bm_transverse_m - B * B / (12 * T) / 1000) < 1e-3, `BM ${r.bm_transverse_m} m = B²/12T = ${(B * B / (12 * T) / 1000).toFixed(4)}`);
  const st = HY.describe(mesh(s), { draft: T, length_unit: 'mm', water: 'fresh', kg: 800 });
  ok(st.stability.stable_upright && Math.abs(st.stability.gm_m - 0.45) < 0.01, `righting arms from the surfaces (KG 0.8 m): GM ${st.stability.gm_m} m, max GZ ${st.stability.max_gz_m} m`);
  const noCap = H.surfacesToSolid(N, docOf([bottom, sideP, sideM, end0, end1]), { n: 6, cap: false });
  ok(!noCap.closed && noCap.openEdges > 0 && noCap.notes.includes('open'), `without capping the open deck is reported (${noCap.openEdges} open edges), never passed off as closed`);
}
// 2. drawn to the centreline only: half the patches, mirrored
{
  const hb = quad(P(0, 0, 0), P(L, 0, 0), P(L, 0, B / 2), P(0, 0, B / 2)), he0 = quad(P(0, 0, 0), P(0, 0, B / 2), P(0, D, B / 2), P(0, D, 0)), he1 = quad(P(L, 0, 0), P(L, 0, B / 2), P(L, D, B / 2), P(L, D, 0));
  const s = H.surfacesToSolid(N, docOf([hb, sideP, he0, he1]), { n: 6, mirror: 'z' });
  ok(s.closed && s.notes.includes('mirrored') && near(s.volume, L * B * D, 1e-9), `half barge + mirror: closed, volume ${s.volume} = L·B·D`);
  const r = HY.describe(mesh(s), { draft: T, length_unit: 'mm', water: 'fresh' });
  ok(near(r.volume_m3, L * B * T / 1e9, 1e-6) && Math.abs(r.tcb_m) < 1e-6, `half barge floats like the whole: ${r.volume_m3} m³, TCB ${r.tcb_m}`);
}
// 3. a log: an extruded circle (seam welded) and two circular caps
{
  const R = 1000, Ll = 8000;
  const circ = N.curve.circle([0, 0, 0], [1, 0, 0], R);   // in the y-z plane, axis along x
  const wall = N.construct.extrude(circ, [Ll, 0, 0]).surface;
  const s = H.surfacesToSolid(N, docOf([wall]), { n: 48 });
  ok(s.closed && s.capped === 2, `log: closed with both end caps (capped ${s.capped}, open ${s.openEdges})`);
  const exact = Math.PI * R * R * Ll;
  ok(near(s.volume, exact, 3e-3) && s.volume < exact, `log: volume ${s.volume.toFixed(0)} within 0.3 % of πR²L (inscribed polygon: slightly less)`);
  const r = HY.describe(mesh(s), { draft: R, length_unit: 'mm', water: 'fresh', up: 'y' });
  ok(near(r.volume_m3, exact / 2e9, 5e-3), `log floating half-immersed: ${r.volume_m3} m³ ≈ πR²L/2 = ${(exact / 2e9).toFixed(4)}`);
}
// 4. an open set is never closed by guessing
{
  const s = H.surfacesToSolid(N, docOf([bottom, sideP]), { n: 4 });
  ok(!s.closed && s.openEdges > 0 && s.notes.includes('open'), `two patches only: not closed (${s.openEdges} open edges)`);
  const e = H.surfacesToSolid(N, N.doc.newDoc(), {});
  ok(!e.closed && e.notes.includes('no_surfaces') && e.triangles === 0, 'no surfaces: nothing, said so');
  const some = H.surfacesToSolid(N, docOf([bottom, sideP, sideM, end0, end1]), { n: 4, ids: ['p0', 'p1'] });
  ok(some.used.join() === 'p0,p1' && !some.closed, 'ids picks the patches');
}
let same = false; try { execFileSync(process.execPath, [path.join(ROOT, 'tools/hull/sync.mjs'), '--check', 'partcraft'], { stdio: 'pipe' }); same = true; } catch { /* differs */ }
ok(same, 'the PartCraft copy of cc-hull is byte-identical (sync --check partcraft)');
console.log(`hull solid: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
