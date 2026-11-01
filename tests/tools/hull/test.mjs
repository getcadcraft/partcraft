#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — cc-hull fair.js (0.8 EG.26) against known answers, on cc-nurbs:
 *   an arc of radius 40: κ = 1/40 everywhere, no inflection, roughness ~0, no jump; y = 10 sin(x/10) over one wave: exactly one inflection, at
 *   the middle; a quarter ellipse through 21 points with ±2 mm noise: ripples (inflections) the clean curve has not, and fairCurve removes
 *   them within 3 mm while cutting the roughness; two arcs r 20 and r 50 joined tangentially: a curvature jump of |1/20 − 1/50| = 0.03 at the
 *   joint; fairProblems speaks the shared Problems shape; the copies are byte-identical (sync --check partcraft).
 *   node tools/hull/test.mjs [--verbose]
 */
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const N = await import(pathToFileURL(path.join(ROOT, 'lib/nurbs/index.js')).href);
const H = await import(pathToFileURL(path.join(ROOT, 'lib/hull/fair.js')).href);
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) { pass++; if (process.argv.includes('--verbose')) console.log('  ok  ', m); } else { fail++; console.log('FAIL', m); } };

const arc = N.curve.arc([0, 0, 0], [1, 0, 0], [0, 1, 0], 40, 0, Math.PI / 2);
const fa = H.fairness(N, arc);
ok(fa.inflections === 0 && Math.abs(fa.maxK - 1 / 40) < 1e-9 && fa.roughness < 1e-12 && fa.maxJump < 1e-9 && Math.abs(fa.length - 20 * Math.PI) < 1e-6,
  `arc r 40: κ max ${fa.maxK.toFixed(9)} = 1/40, ${fa.inflections} inflections, roughness ${fa.roughness.toExponential(1)}, jump ${fa.maxJump.toExponential(1)}, length ${fa.length.toFixed(6)} = 20π`);
const wave = N.fit.interpolate(Array.from({ length: 41 }, (_, i) => { const x = i * Math.PI * 2 / 40 * 10; return [x, 10 * Math.sin(x / 10), 0]; }), 3);
const fw = H.fairness(N, wave), mid = N.curve.point(wave, fw.at[0] ?? 0);
ok(fw.inflections === 1 && Math.abs(mid[0] - 10 * Math.PI) < 0.5, `one wave of 10 sin(x/10): ${fw.inflections} inflection, at x = ${mid[0].toFixed(3)} (10π = ${(10 * Math.PI).toFixed(3)})`);
// a noisy station
let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647 - 0.5) * 2;
const Q = Array.from({ length: 21 }, (_, i) => { const a = Math.PI / 2 * i / 20; return [600 * Math.cos(a) + (i % 20 ? 2 * rnd() : 0), 400 * Math.sin(a) + (i % 20 ? 2 * rnd() : 0), 0]; });
const clean = N.fit.interpolate(Q.map((_, i) => { const a = Math.PI / 2 * i / 20; return [600 * Math.cos(a), 400 * Math.sin(a), 0]; }), 3);
const noisy = N.fit.interpolate(Q, 3), fn = H.fairness(N, noisy), fc = H.fairness(N, clean);
ok(fc.inflections === 0 && fn.inflections > 0, `an ellipse quarter through 21 points: clean ${fc.inflections} inflections; with ±2 mm noise ${fn.inflections} ripples`);
const fr = H.fairCurve(N, noisy, { tol: 3 });
ok(fr.fair && fr.after.inflections === 0 && fr.deviation <= 3 && fr.after.roughness < 0.01 * fn.roughness && fr.cvs < noisy.cvs.length,
  `fairCurve (tol 3 mm): ${fr.cvs} control points (was ${noisy.cvs.length}), deviation ${fr.deviation.toFixed(4)} mm, ${fr.after.inflections} inflections, roughness ${fn.roughness.toExponential(2)} → ${fr.after.roughness.toExponential(2)}`);
// two arcs joined: a curvature jump
const a1 = N.curve.arc([0, 0, 0], [1, 0, 0], [0, 1, 0], 20, -Math.PI / 2, 0), a2 = N.curve.arc([-30, 0, 0], [1, 0, 0], [0, 1, 0], 50, 0, Math.PI / 4);
const j = N.curve.join([a1, a2]);
const fj = H.fairness(N, j);
ok(Math.abs(fj.maxJump - Math.abs(1 / 20 - 1 / 50)) < 1e-6 && fj.inflections === 0, `arcs r 20 and r 50 joined tangentially: curvature jump ${fj.maxJump.toFixed(6)} = |1/20 − 1/50| = 0.030000, no inflection`);
// Problems
let d = N.doc.newDoc(); d = N.doc.add(d, 'curve', noisy, { name: 'Station 4', id: 'st4' }).doc; d = N.doc.add(d, 'curve', j, { name: 'Bilge', id: 'bilge' }).doc; d = N.doc.add(d, 'curve', arc, { id: 'arc' }).doc;
const ps = H.fairProblems(N, d);
ok(ps.some((p) => p.code === 'hull.inflection' && p.about[0].id === 'st4' && p.fixes[0].action === 'hull.fair') && ps.some((p) => p.code === 'hull.jump' && p.about[0].id === 'bilge') && !ps.some((p) => p.about[0].id === 'arc'),
  'fairProblems: the noisy station (inflections, fix "fair") and the bilge (jump), nothing for the arc — ' + ps.map((p) => p.code + ':' + p.about[0].id).join(', '));
let same = false; try { execFileSync(process.execPath, [path.join(ROOT, 'tools/hull/sync.mjs'), '--check', 'partcraft'], { stdio: 'pipe' }); same = true; } catch { same = false; }
ok(same, 'the PartCraft copy is byte-identical (sync --check partcraft)');
console.log(`hull: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
