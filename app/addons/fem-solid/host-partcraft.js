/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host-partcraft.js — the Solid FEM add-on's adapter for PartCraft (0.9 SU.908c): the part's solids as the model, PartCraft's own mesh kernel output
 * (its tetrahedral mesher, tetfea.js meshJob, the same mesh its Simulation study uses) as the mesh, faces picked in the 3D view (add-on API 1.3 api.view),
 * the settings in part.studies['fem-solid'] (one undo step each; read when the file opens by fem-solid-study.js), results as display bodies, the
 * host's Problems store. Everything else is the shared panel (lib/solid-panel.js) over the shared engine (lib/fem/).
 */
import { meshJob } from '../../tetfea.js';
import { meshForJob, autoSize } from '../../sim.js';
import { LIMITS, solveSolid } from './lib/fem/solid-study.js';

export const KEY = 'fem-solid', GROUP = 'plot';

/** The adapter for one add-on instance. t(key, vars) = api.t. */
export function makeHost(api, t) {
  let src = null;
  try { src = api.problems && typeof api.problems.source === 'function' ? api.problems.source({ id: 'solidfem', kind: 'check', label: t('name') }) : null; } catch { src = null; }
  const regen = () => api.study.regen();
  const sig = () => { const r = regen(); return r ? [r.stats && r.stats.volume, r.faces.length, r.mesh.positions.length, r.mesh.indices.length].join('|') : ''; };
  let bodiesBusy = false;
  return {
    t,
    status: (m) => api.status(m),
    setup: { get: () => api.study.get(KEY), set: (s, label) => api.study.set(KEY, s, label) },
    faces: {
      available: () => api.view.faces().length > 0,
      pick: (fn) => api.view.pickFaces((p) => fn(p.ref)),
      mark: (refs) => api.view.mark(refs),
      resolve: (refs) => api.view.resolve(refs),
      label: (ref) => ref.name,
    },
    async mesh({ h, onProgress }) {
      const rg = regen();
      if (!rg || !rg.mesh || !rg.faces.length || !rg.named && !rg.exact) throw new Error(t('msg.no_part'));
      const volume = rg.stats && rg.stats.volume;
      if (!(volume > 0)) throw new Error(t('msg.no_part'));
      const size = h || autoSize(12 * volume, 2500);
      const est = Math.round(12 * volume / size ** 3);
      if (est > 3 * LIMITS.elements) throw new Error(t('msg.too_fine', { n: est, max: LIMITS.elements }));
      const job = { mesh: { ...meshForJob(rg.mesh), ...(rg.mesh.edgeSegs ? { edgeSegs: Float32Array.from(rg.mesh.edgeSegs) } : {}) },
        faces: rg.faces.map((f) => ({ area: f.area, type: f.type, ...(f.n ? { n: f.n.slice(), o: f.o.slice() } : {}), ...(f.axis ? { axis: { o: f.axis.o.slice(), d: f.axis.d.slice() }, r: f.r } : {}), ...(f.surf ? { surf: f.surf } : {}) })),
        h: size, refineCurved: true, maxTets: 3 * LIMITS.elements };
      const m = meshJob(job, onProgress);
      return { mesh: { nodes: m.t10.nodes, tets10: m.t10.tets10, btri6: m.t10.btri6, bface: m.t10.bface }, info: { h: size, quality: m.tm.quality, volume: m.tm.stats.volume } };
    },
    /** The solve on a Web Worker (the page stays alive for the seconds it takes); where a worker cannot start, in place. */
    solve(job) {
      return new Promise((resolve, reject) => {
        let w;
        const inPlace = () => { try { resolve(solveSolid(job)); } catch (e) { reject(e); } };
        try { w = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' }); } catch { inPlace(); return; }
        w.onmessage = (e) => { w.terminate(); if (e.data.ok) resolve(e.data.result); else reject(new Error(e.data.error)); };
        w.onerror = () => { w.terminate(); inPlace(); };
        w.postMessage({ job });
      });
    },
    bodies: {
      show(bodies, name) { bodiesBusy = true; try { return api.model.addBodies(GROUP, bodies, { name, label: t('undo.show'), fit: false }); } finally { bodiesBusy = false; } },
      clear() { bodiesBusy = true; try { return api.model.removeBodies(GROUP, { label: t('undo.clear') }); } finally { bodiesBusy = false; } },
      shown: () => { try { return (api.model.bodies() || []).some((g) => g.group === GROUP); } catch { return false; } },
    },
    problems(list) {
      if (!src) return;
      src.set(list.map((p) => ({ id: 'solidfem:' + p.code, code: p.code, severity: p.severity === 'error' ? 'error' : 'warning', text: p.text, source: { kind: 'engine', name: 'solidfem' } })));
    },
    onRefresh(fn) { return api.part.onChange(() => fn()); },
    onChange(fn) {
      let last = sig();
      return api.part.onChange(() => { if (bodiesBusy) return; const now = sig(); if (now === last) return; last = now; fn(); });
    },
  };
}
