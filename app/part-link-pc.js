/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: errors carry a `code`; mountBimLink words everything through the app's t() */
/**
 * part-link-pc.js — PartCraft's side of the link to BimCraft (0.10 BK.179 / SU.1814, session bim-part-link-10). BimCraft's "Send to PartCraft" opens
 * PartCraft at `?partlink=<id>`; the package (cc-partlink, ./partlink/) waits in the shared store. It becomes a new part — the element as its first body, in
 * the element's own frame — and the building around it is drawn grey and read-only. The part file keeps only `bimLink` (part.js); "Save back to BimCraft"
 * sends the part's shape home as an update, which BimCraft shows as changed until the person accepts it.
 *
 *   partFromPackage(pkg, { P, MI }) → { part, report }            the part (import feature 'mesh', mm, up z) or throws PartLinkError('partlink.pc.open')
 *   updateFromPart(part, mesh)       → update for the store                  mesh = PartCraft's built mesh (Y up, mm)
 *   contextObject(THREE, pkg)       → a THREE.Group of the neighbours (world mm of PartCraft, Y up)
 *   mountBimLink(host)              → { receive(), sync(), saveBack() }       host: { t, status, ask, P, MI, THREE, view, part(), openPartText(text, name), regenMesh(), markDirty(), commit, hist,
 *                                       chip (element), store?, channel?, search? }
 */
import * as PL from './partlink/index.js';

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
export function updateFromPart(part, mesh, now) {
  const ref = part.bimLink;
  if (!ref) throw new PL.PartLinkError('partlink.pc.nolink');
  const pos = PL.yUpToZUp(Float64Array.from(mesh.positions));
  const welded = PL.localMesh(trianglesOf(pos, mesh.indices));
  return PL.makeUpdate({ link: ref.link, rev: ref.rev + 1, mesh: welded, from: { app: 'PartCraft', part: part.name }, baseHash: ref.hash, now });
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
      const up = updateFromPart(part, mesh);
      await store.put('update', ref.link, up);
      part.bimLink = { ...ref, rev: up.rev, hash: up.geometry.hash };
      h.markDirty();
      channel.post({ kind: 'update', link: ref.link });
      chip();
      status(t('partlink.pc.saved', { name: ref.name, rev: up.rev }), false);
      return true;
    } catch (e) { status(t('partlink.pc.save_failed', { error: words(e) }), true); return false; }
  }
  return { receive, sync: () => show(), saveBack, chip };
}
