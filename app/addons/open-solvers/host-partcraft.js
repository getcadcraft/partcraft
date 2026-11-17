/* SPDX-License-Identifier: Apache-2.0 */
/**
 * host-partcraft.js — the Open solver cases add-on's adapter for PartCraft (suggestion 1309): the part's last rebuild as the surface (its triangles and
 * the face each belongs to), PartCraft's own tetrahedral mesher (tetfea.js meshJob, the mesh its Simulation study uses) for the solid cases, faces picked
 * in the 3D view (add-on API 1.3 api.view), the settings in part.studies['open-solvers'] (one undo step each; read when the file opens by
 * open-solvers-study.js), the app's zip writer (export.js zipStored) for the case folder, results as display bodies (api.model), and the fixtures and
 * loads of the part's own Simulation study or Solid FEM settings when the person asks to copy them. Everything else is the shared panel and engine
 * (lib/opensolvers/).
 */
import { meshJob } from '../../tetfea.js';
import { meshForJob, autoSize } from '../../sim.js';
import { zipStored } from '../../export.js';
import { materialById } from '../../materials.js';

export const KEY = 'open-solvers', GROUP = 'result';
const MAX_ELEMENTS = 30000;   // what the page meshes in reasonable time; a finer deck needs a typed element size and patience
const PRESET_TO_APP = { steel: 'steel', stainless: 'ss304', aluminium: 'al6061', titanium: 'ti64', abs: 'abs' };
const APP_TO_PRESET = Object.fromEntries(Object.entries(PRESET_TO_APP).map(([a, b]) => [b, a]));

export function makeHost(api, t) {
  const regen = () => api.study.regen();
  const sig = () => { const r = regen(); return r ? [r.stats && r.stats.volume, r.faces.length, r.mesh.positions.length, r.mesh.indices.length].join('|') : ''; };
  const doc = () => (typeof document !== 'undefined' ? document : null);
  let bodiesBusy = false;
  return {
    t,
    status: (m) => api.status(m),
    name: () => String(api.part.get()?.name || 'part'),
    setup: { get: () => api.study.get(KEY), set: (s, label) => api.study.set(KEY, s, label) },
    faces: {
      available: () => api.view.faces().length > 0,
      pick: (fn) => api.view.pickFaces((p) => fn(p.ref)),
      mark: (refs) => api.view.mark(refs),
      resolve: (refs) => api.view.resolve(refs),
    },
    /** The last rebuild's triangles with the face of each, or null. */
    surface() {
      const rg = regen();
      if (!rg || !rg.mesh || !rg.mesh.indices || !rg.mesh.indices.length) return null;
      return { positions: rg.mesh.positions, indices: rg.mesh.indices, triFace: rg.mesh.triFace || null, volume: rg.stats && rg.stats.volume };
    },
    /** Thermal conductivity (W/(m·K)) of a preset from PartCraft's own material list, or null. */
    conductivity: (preset) => { const m = materialById(PRESET_TO_APP[preset]); return m && m.k ? m.k : null; },
    async mesh({ h, onProgress }) {
      const rg = regen();
      if (!rg || !rg.mesh || !rg.faces.length || !rg.named && !rg.exact) throw new Error(t('msg.no_part'));
      const volume = rg.stats && rg.stats.volume;
      if (!(volume > 0)) throw new Error(t('msg.no_part'));
      const size = h || autoSize(12 * volume, 1500);
      const est = Math.round(12 * volume / size ** 3);
      if (est > 3 * MAX_ELEMENTS) throw new Error(t('msg.too_fine', { n: est, max: MAX_ELEMENTS }));
      const job = { mesh: { ...meshForJob(rg.mesh), ...(rg.mesh.edgeSegs ? { edgeSegs: Float32Array.from(rg.mesh.edgeSegs) } : {}) },
        faces: rg.faces.map((f) => ({ area: f.area, type: f.type, ...(f.n ? { n: f.n.slice(), o: f.o.slice() } : {}), ...(f.axis ? { axis: { o: f.axis.o.slice(), d: f.axis.d.slice() }, r: f.r } : {}), ...(f.surf ? { surf: f.surf } : {}) })),
        h: size, refineCurved: true, maxTets: 3 * MAX_ELEMENTS };
      const m = meshJob(job, onProgress || (() => {}));
      return { mesh: { nodes: m.t10.nodes, tets10: m.t10.tets10, btri6: m.t10.btri6, bface: m.t10.bface }, info: { h: size, volume: m.tm.stats.volume } };
    },
    zip: (files) => zipStored(files),
    download(name, data, mime = 'application/zip') {
      const d = doc(); if (!d) return;
      const a = d.createElement('a');
      a.download = name; a.href = URL.createObjectURL(new Blob([data], { type: mime }));
      d.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    },
    /** The person picks result files → [{ name, text }] ([] when they cancel). */
    pickFiles: (accept) => new Promise((resolve) => {
      const d = doc(); if (!d) { resolve([]); return; }
      const i = d.createElement('input');
      i.type = 'file'; i.accept = accept; i.multiple = true; i.hidden = true; i.setAttribute('data-osc-file', '');
      i.addEventListener('change', async () => { const out = []; for (const f of [...(i.files || [])].slice(0, 200)) out.push({ name: f.name, text: await f.text() }); i.remove(); resolve(out); });
      i.addEventListener('cancel', () => { i.remove(); resolve([]); });
      d.body.append(i); i.click();
    }),
    bodies: {
      show(bodies, name) { bodiesBusy = true; try { return api.model.addBodies(GROUP, bodies, { name, label: t('undo.show'), fit: false }); } finally { bodiesBusy = false; } },
      clear() { bodiesBusy = true; try { return api.model.removeBodies(GROUP, { label: t('undo.clear') }); } finally { bodiesBusy = false; } },
      shown: () => { try { return (api.model.bodies() || []).some((g) => g.group === GROUP); } catch { return false; } },
    },
    /** Fixtures, loads and the material of the part's own studies, in this add-on's shape: the Simulation study first, else the Solid FEM settings. */
    otherStudy() {
      const sim = api.study.get('simulation'), fem = api.study.get('fem-solid'), groups = [];
      let material = null, from = null;
      if (sim && ((sim.constraints || []).length || (sim.loads || []).length)) {
        from = 'simulation';
        for (const c of sim.constraints || []) if (c.type === 'fixed') groups.push({ role: 'fixed', faces: c.faces });
        for (const l of sim.loads || []) {
          if (l.type === 'pressure') groups.push({ role: 'pressure', faces: l.faces, p: l.p });
          else if (l.type === 'force' && Array.isArray(l.dir)) { const n = Math.hypot(...l.dir) || 1; groups.push({ role: 'force', faces: l.faces, F: l.dir.map((v) => v / n * l.total) }); }
          else if (l.type === 'force') groups.push({ role: 'force-normal', faces: l.faces, total: l.total });   // the panel turns it into a vector along the faces' normal
        }
        const m = typeof sim.material === 'string' ? materialById(sim.material) : sim.material;
        if (m) material = { id: (typeof sim.material === 'string' && APP_TO_PRESET[sim.material]) || 'custom', E: m.E, nu: m.nu, rho: m.density, yield: m.yield ?? null, k: m.k ?? null };
      } else if (fem && ((fem.supports || []).length || (fem.loads || []).length)) {
        from = 'fem-solid';
        for (const s of fem.supports || []) groups.push({ role: 'fixed', faces: s.faces });
        for (const l of fem.loads || []) { if (l.type === 'force') groups.push({ role: 'force', faces: l.faces, F: l.F }); else if (l.type === 'pressure') groups.push({ role: 'pressure', faces: l.faces, p: l.p }); }
        if (fem.material) material = { ...fem.material, k: null };
      }
      return from ? { from, groups, material } : null;
    },
    onRefresh(fn) { return api.part.onChange(() => fn()); },
    onChange(fn) {
      let last = sig();
      return api.part.onChange(() => { if (bodiesBusy) return; const now = sig(); if (now === last) return; last = now; fn(); });
    },
  };
}
