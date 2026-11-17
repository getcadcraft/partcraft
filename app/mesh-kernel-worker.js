/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mesh-kernel-worker.js — the mesh kernel's rebuild as a compute-worker op (0.10 PERF.39, session `model-part-10`; DOM-free).
 * A part that takes long to build (750 features: 3 s; a 40 × 40 hole plate: 9 s) is rebuilt here, so the page keeps
 * answering; partcraft.js sends the newest part and draws the result when it lands (the newest request wins).
 *
 *   meshRegen({ part, upTo, manifoldUrl }, ctx) → kernel.js regenerate()'s result (plain data: Maps, typed arrays)
 *     manifoldUrl  the page's own URL of manifold-3d (import.meta.resolve: the import map does not reach a worker); the module
 *                  is loaded once per worker, so its checkpoints (kernel.js, D7.51) stay for the next rebuild
 *     progress     ctx.progress(features done / features to build), at most ~6 a second
 * The sketches arrive solved (the page solves them first, as for the exact kernel), so the page and the worker build the same part.
 */
import { addOps } from './worker-ops.js';
import { regenerate } from './kernel.js';

let M = null, loading = null;
async function manifold(url) {
  if (M) return M;
  if (!loading) loading = import(url).then(async (mod) => { const m = await mod.default(); m.setup(); M = m; return m; }).finally(() => { loading = null; });
  return loading;
}

export async function meshRegen({ part, upTo = null, manifoldUrl }, ctx = { progress() {}, transfer() {} }) {
  const m = await manifold(manifoldUrl);
  let last = 0;
  const r = regenerate(part, m, { upTo, progress: (f) => { const now = Date.now(); if (now - last > 160) { last = now; ctx.progress(f); } } });
  if (r.mesh) for (const k of ['positions', 'indices', 'triFeature', 'triFace', 'edgeSegs', 'segEdge']) if (r.mesh[k]?.buffer) ctx.transfer(r.mesh[k].buffer);
  return r;
}

addOps({ meshRegen });
