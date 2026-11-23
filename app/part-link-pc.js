/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: errors carry a `code`; mountBimLink words everything through the app's t() */
/**
 * part-link-pc.js — PartCraft's side of the link to BimCraft (0.10 BK.179 / SU.1814, session bim-part-link-10). BimCraft's "Send to PartCraft" opens
 * PartCraft at `?partlink=<id>`; the package (cc-partlink, ./partlink/) waits in the shared store. It becomes a new part — the element as its first body, in
 * the element's own frame — and the building around it is drawn grey and read-only. The part file keeps only `bimLink` (part.js); "Save back to BimCraft"
 * sends the part's shape home as an update, which BimCraft shows as changed until the person accepts it.
 *
 *   partFromPackage(pkg, { P, MI }) → { part, report }            the part (import feature 'mesh', mm, up z) or throws PartLinkError('partlink.pc.open')
 *   updateFromPart(part, mesh, now?, regen?) → update for the store         mesh = PartCraft's built mesh (Y up, mm); with the build (`regen`), the part's
 *                                       history as solids too when it can be one (solidFromPart)
 *   solidFromPart(part, regen) → { solid } | { why }   (0.11 SU.1814, su-finish-11) the element as BimCraft sent it (a straight prism), then each extrude
 *                                       and hole as a prism added or cut, in the element's frame: what BimCraft writes as an IfcBooleanResult of extrusions.
 *                                       Any other feature (fillet, pattern, revolve …), a feature that did not build, or an element that was no prism → { why }
 *   contextObject(THREE, pkg)       → a THREE.Group of the neighbours (world mm of PartCraft, Y up)
 *   mountBimLink(host)              → { receive(), sync(), saveBack() }       host: { t, status, ask, P, MI, THREE, view, part(), openPartText(text, name), regenMesh(), markDirty(), commit, hist,
 *                                       chip (element), store?, channel?, search? }
 */
import * as PL from './partlink/index.js';
import { builtCount } from './part.js';
import { profile, loosePoints } from './sketch.js';
import { ISO_COARSE } from './design-features.js';

/** The package's element as a part: one mesh import, the link kept in `bimLink`. */
export function partFromPackage(pkg, { P, MI }) {
  const fixed = MI.repairMesh({ positions: pkg.mesh.positions, indices: pkg.mesh.indices });
  const rep = fixed.report;
  if (!rep.closed) throw new PL.PartLinkError('partlink.pc.open', { open: rep.openEdges || 0, bad: rep.nonManifold || 0 });
  const part = P.newPart((pkg.source.name || 'Element').replace(/[\u0000-\u001f]/g, ' ').slice(0, 120));
  P.addFeature(part, 'import', { file: ((pkg.source.name || 'element') + '.ifc').slice(0, 200), mesh: MI.encodeMesh(fixed), units: 'mm', up: 'z', report: rep });
  part.bimLink = PL.refFromPackage(pkg);
  return { part, report: rep };
}

/** The update for a part's present shape (mesh in PartCraft's Y up) → in the element's frame (Z up). */
export function updateFromPart(part, mesh, now, regen = null) {
  const ref = part.bimLink;
  if (!ref) throw new PL.PartLinkError('partlink.pc.nolink');
  const pos = PL.yUpToZUp(Float64Array.from(mesh.positions));
  const welded = PL.localMesh(trianglesOf(pos, mesh.indices));
  const solid = regen ? solidFromPart(part, regen).solid || null : null;
  return PL.makeUpdate({ link: ref.link, rev: ref.rev + 1, mesh: welded, from: { app: 'PartCraft', part: part.name }, baseHash: ref.hash, solid, now });
}

// ---- the history as solids (0.11 SU.1814) ----
const Z_UP = (v) => [v[0], -v[2], v[1]];   // PartCraft's Y up → the element's Z up (the inverse of the import's (x, y, z) → (x, z, −y))
const along = (o, n, z) => [o[0] + n[0] * z, o[1] + n[1] * z, o[2] + n[2] * z];
const inRing = (l, p) => { let c = false; for (let i = 0, j = l.length - 1; i < l.length; j = i++) { const a = l[i], b = l[j]; if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
const ringArea = (l) => { let a = 0; for (let i = 0; i < l.length; i++) { const p = l[i], q = l[(i + 1) % l.length]; a += p[0] * q[1] - q[0] * p[1]; } return Math.abs(a / 2); };
/** Profile loops (even-odd, as the kernel's cross-section) → [{ outer, holes }]: a loop inside an even number of others is an outer. */
function regionsOf(loops) {
  const depth = loops.map((l, i) => loops.reduce((d, m, j) => d + (j !== i && inRing(m, l[0]) ? 1 : 0), 0));
  const out = loops.map((l, i) => (depth[i] % 2 ? null : { outer: l, holes: [], i })).filter(Boolean);
  loops.forEach((l, i) => {
    if (!(depth[i] % 2)) return;
    const host = out.filter((g) => depth[g.i] === depth[i] - 1 && inRing(g.outer, l[0])).sort((a, b) => ringArea(a.outer) - ringArea(b.outer))[0];
    if (host) host.holes.push(l);
  });
  return out.map(({ outer, holes }) => ({ outer, holes }));
}
/** Every corner of the steps so far, as the kernel's "through" reads the body: the extent along a frame's normal, from its plane. */
function rangeOf(steps, frame) {
  let lo = Infinity, hi = -Infinity;
  for (const s of steps) {
    if (s.op === 'cut') continue;
    const ring = s.circle ? [[s.circle.c[0] - s.circle.r, s.circle.c[1] - s.circle.r], [s.circle.c[0] + s.circle.r, s.circle.c[1] + s.circle.r], [s.circle.c[0] - s.circle.r, s.circle.c[1] + s.circle.r], [s.circle.c[0] + s.circle.r, s.circle.c[1] - s.circle.r]] : s.outer;
    for (const [u, v] of ring) for (const z of [0, s.depth]) {
      const p = [0, 1, 2].map((k) => s.origin[k] + s.x[k] * u + s.y[k] * v + s.n[k] * z);
      const d = (p[0] - frame.o[0]) * frame.n[0] + (p[1] - frame.o[1]) * frame.n[1] + (p[2] - frame.o[2]) * frame.n[2];
      lo = Math.min(lo, d); hi = Math.max(hi, d);
    }
  }
  return lo <= hi ? [lo, hi] : null;
}
export function solidFromPart(part, regen) {
  const ref = part.bimLink;
  if (!ref?.prism) return { why: 'noprism' };
  const n = builtCount(part), feats = part.features.slice(0, n).filter((f) => !f.suppressed);
  const first = feats[0];
  if (!first || first.type !== 'import' || !first.mesh || (first.op && first.op !== 'add')) return { why: 'base' };
  // the base, in PartCraft's frame (Y up): the element's prism turned back (Z up → Y up), so every step below is in one frame until the end
  const Y_UP = (v) => [v[0], v[2], -v[1]];
  const base = PL.mapPrism(ref.prism, Y_UP);
  if (!base) return { why: 'base' };
  const steps = [{ op: 'base', ...base }];
  const ok = (f) => regen?.results?.get(f.id)?.status === 'ok';
  if (!ok(first)) return { why: 'notbuilt', feature: first.name };
  const sketchOf = (id) => { const sf = part.features.find((g) => g.id === id && g.type === 'sketch'); const fr = regen.frames?.get(id); return sf && fr ? { sk: sf.sketch, fr } : null; };
  for (const f of feats.slice(1)) {
    if (f.type === 'sketch' || f.type === 'plane' || f.type === 'axis' || f.type === 'point') continue;   // they make nothing
    if (!ok(f)) return { why: 'notbuilt', feature: f.name };
    if (f.type === 'extrude') {
      if (f.taper || f.regions?.length || !['blind', 'mid', 'through'].includes(f.end || 'blind') || (f.op !== 'add' && f.op !== 'cut')) return { why: 'feature', feature: f.name };
      const s = sketchOf(f.sketch); if (!s) return { why: 'feature', feature: f.name };
      const pr = profile(s.sk, part.resolution);
      if (pr.error || !pr.loops.length) return { why: 'feature', feature: f.name };
      const sign = (f.op === 'cut' ? -1 : 1) * (f.reverse ? -1 : 1);
      let h = f.depth, z0;
      const end = f.end || 'blind';
      if (f.two && end === 'blind') { h = f.depth + f.depth2; z0 = sign > 0 ? -f.depth2 : -f.depth; }
      else if (end === 'blind') z0 = sign > 0 ? 0 : -h;
      else if (end === 'mid') z0 = -h / 2;
      else {
        if (f.op !== 'cut') return { why: 'feature', feature: f.name };
        const rg = rangeOf(steps, s.fr); if (!rg) return { why: 'feature', feature: f.name };
        const margin = 1 + 0.01 * (rg[1] - rg[0]);
        if (sign > 0) { z0 = 0; h = Math.max(rg[1], 0) + margin; } else { h = -Math.min(rg[0], 0) + margin; z0 = -h; }
      }
      if (!(h > 0)) return { why: 'feature', feature: f.name };
      for (const g of regionsOf(pr.loops)) steps.push({ op: f.op, origin: along(s.fr.o, s.fr.n, z0), x: s.fr.x, n: s.fr.n, depth: h, outer: g.outer, holes: g.holes });
      continue;
    }
    if (f.type === 'hole') {
      if (!['simple', 'cbore', 'tapped'].includes(f.kind || 'simple') || (f.kind === 'tapped' && f.modelled)) return { why: 'feature', feature: f.name };
      const s = sketchOf(f.sketch); if (!s) return { why: 'feature', feature: f.name };
      const pts = loosePoints(s.sk).filter((p) => !p.construction);
      const th = f.kind === 'tapped' ? ISO_COARSE[f.size] : null;
      if (!pts.length || (f.kind === 'tapped' && !th)) return { why: 'feature', feature: f.name };
      const sign = f.reverse ? 1 : -1;
      let depth = f.depth;
      if (f.through) {
        const rg = rangeOf(steps, s.fr); if (!rg) return { why: 'feature', feature: f.name };
        const margin = 1 + 0.01 * (rg[1] - rg[0]);
        depth = sign < 0 ? -rg[0] + margin : rg[1] + margin;
      }
      if (!(depth > 0)) return { why: 'feature', feature: f.name };
      const d = th ? th[2] : f.d;
      for (const p of pts) {
        steps.push({ op: 'cut', origin: along(s.fr.o, s.fr.n, sign < 0 ? -depth : 0), x: s.fr.x, n: s.fr.n, depth, circle: { c: [p.x, p.y], r: d / 2 } });
        if (f.kind === 'cbore') steps.push({ op: 'cut', origin: along(s.fr.o, s.fr.n, sign < 0 ? -f.cboreDepth : 0), x: s.fr.x, n: s.fr.n, depth: f.cboreDepth, circle: { c: [p.x, p.y], r: f.cboreD / 2 } });
      }
      continue;
    }
    return { why: 'feature', feature: f.name };   // fillet, chamfer, shell, patterns, mirror, revolve, sweep … are not prisms
  }
  const solid = PL.cleanSolid({ kind: 'csg', steps: steps.map((st) => { const m = PL.mapPrism(st, Z_UP); return m ? { op: st.op, ...m } : null; }) });
  return solid ? { solid } : { why: 'limits' };
}
const trianglesOf = (pos, idx) => { const o = new Float64Array(idx.length * 3); for (let i = 0; i < idx.length; i++) { o[i * 3] = pos[idx[i] * 3]; o[i * 3 + 1] = pos[idx[i] * 3 + 1]; o[i * 3 + 2] = pos[idx[i] * 3 + 2]; } return o; };

/** The neighbours as one translucent group (element frame → PartCraft's Y up); picking is off, so nothing here can be selected or changed. */
export function contextObject(THREE, pkg) {
  const g = new THREE.Group();
  g.name = 'bim-context'; g.userData.readOnly = true;
  const mat = new THREE.MeshStandardMaterial({ color: 0x9aa4ad, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide });
  const lineMat = new THREE.LineBasicMaterial({ color: 0x6b7680, transparent: true, opacity: 0.6 });
  for (const c of pkg.context) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(PL.zUpToYUp(c.mesh.positions)), 3));
    geo.setIndex(new THREE.BufferAttribute(Uint32Array.from(c.mesh.indices), 1));
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat); m.name = c.name || c.cls; m.userData.readOnly = true; m.raycast = () => {};
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), lineMat); e.raycast = () => {};
    g.add(m, e);
  }
  return g;
}

export function mountBimLink(h) {
  const { t, status } = h;
  const store = h.store || PL.idbStore(globalThis.indexedDB);
  const channel = h.channel || PL.openChannel();
  let shown = null;   // the link whose context is on screen
  const words = (e) => (e && e.code ? t(e.code, e.vars) : String((e && e.message) || e));

  /** Open the package named in the address (`?partlink=<id>`) as a new part. → true when it did. */
  async function receive(search = h.search ?? globalThis.location?.search ?? '') {
    const id = new URLSearchParams(search).get(PL.QUERY);
    if (!id) return false;
    try { const u = new URLSearchParams(globalThis.location.search); u.delete(PL.QUERY); globalThis.history?.replaceState(null, '', globalThis.location.pathname + (u.toString() ? '?' + u : '') + (globalThis.location.hash || '')); } catch { /* an odd page */ }
    if (!PL.isLinkId(id)) { status(t('partlink.err.link'), true); return false; }
    let pkg;
    try {
      const raw = await store.get('package', id);
      if (!raw) throw new PL.PartLinkError('partlink.pc.gone');
      pkg = PL.readPackage(raw);
      const { part } = partFromPackage(pkg, h);
      await h.openPartText(h.P.toJSON(part), part.name);
      h.markDirty();
    } catch (e) { status(t('partlink.pc.failed', { error: words(e) }), true); return false; }
    await show(pkg);
    status(t('partlink.pc.opened', { name: pkg.source.name, n: pkg.context.length, app: pkg.source.app }));
    return true;
  }

  /** The context of the link the open part carries: from the store when it is still there. */
  async function show(pkg = null) {
    const ref = h.part().bimLink;
    if (!ref) { if (shown) { h.view.setOverlay('bim-context', null); shown = null; } chip(); return; }
    if (shown !== ref.link) {
      try {
        const p = pkg || PL.readPackage(await store.get('package', ref.link));
        h.view.setOverlay('bim-context', contextObject(h.THREE, p));
        shown = ref.link;
      } catch { h.view.setOverlay('bim-context', null); shown = ref.link; }
    }
    chip();
  }
  function chip() {
    const el = h.chip; if (!el) return;
    const ref = h.part().bimLink;
    el.hidden = !ref;
    if (ref) { el.textContent = ref.rev ? t('partlink.pc.chip_saved', { name: ref.name, rev: ref.rev }) : t('partlink.pc.chip', { name: ref.name }); el.title = t('partlink.pc.chip_title', { cls: ref.ifcClass, file: ref.file }); }
  }

  /** File › Save back to BimCraft. */
  async function saveBack() {
    const part = h.part(), ref = part.bimLink;
    if (!ref) { status(t('partlink.pc.nolink'), true); return false; }
    const mesh = h.regenMesh();
    if (!mesh || !mesh.indices?.length) { status(t('partlink.pc.nosolid'), true); return false; }
    try {
      const up = updateFromPart(part, mesh, undefined, h.regen?.() || null);   // 0.11 SU.1814: the history as solids when it can be
      await store.put('update', ref.link, up);
      part.bimLink = { ...ref, rev: up.rev, hash: up.geometry.hash };
      h.markDirty();
      channel.post({ kind: 'update', link: ref.link });
      chip();
      status(t('partlink.pc.saved', { name: ref.name, rev: up.rev }) + ' ' + t(up.solid ? 'partlink.pc.saved_solid' : 'partlink.pc.saved_mesh', { n: up.solid ? up.solid.steps.length - 1 : 0 }), false);
      return true;
    } catch (e) { status(t('partlink.pc.save_failed', { error: words(e) }), true); return false; }
  }
  return { receive, sync: () => show(), saveBack, chip };
}
