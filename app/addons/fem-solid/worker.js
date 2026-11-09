/* SPDX-License-Identifier: Apache-2.0 */
/* worker.js — runs one Solid FEM solve off the page's thread: { job } in, { ok, result } or { ok: false, error } out (lib/fem/solid-study.js solveSolid). */
import { solveSolid } from './lib/fem/solid-study.js';

self.onmessage = (e) => {
  try { self.postMessage({ ok: true, result: solveSolid(e.data.job) }); } catch (err) { self.postMessage({ ok: false, error: String((err && err.message) || err) }); }
};
