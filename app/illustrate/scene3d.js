/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/scene3d.js — the manual's scene in a three.js view (no imports: the caller passes THREE, so the module loads in
 * Node and in any app's view). One group; each shown instance is a mesh (flat-shaded, geometry shared per part) and its
 * feature lines (edges.js). Looks per instance: colour override, opacity, ghost (grey and see-through), selected (tinted).
 *
 *   const s = createScene3d(THREE, { ink, body, pick })   colours as '#rrggbb'
 *   s.update({ m, meshes, world (Map inst → matrix), state (inst → { hide, ghost, opacity, color }), selected (Set), look, caps })
 *     look (look.js): style shaded (no lines) | outlined | flat (unlit colours) | lines (white faces, ink lines) | xray (all
 *     see-through); a section plane or a box cut-away as clipping planes (box: everything inside it goes); caps =
 *     hlr.js capPolygons(): the cut faces filled, triangulated with THREE.ShapeUtils
 *   s.pick(raycaster) → instance id | null      s.group (add it to the scene)      s.dispose()
 */
import { featureSegments } from './edges.js';

const PALETTE = ['#c8ced6', '#b9c7d9', '#d6cbb9', '#c2d6c0', '#d6c0cd', '#c9c2d9', '#d9d2b8', '#bcd3d6'];
/** A part's resting colour: the same pid always gets the same one. */
export function partColour(pid, dark = false) {
  let h = 0;
  for (let i = 0; i < pid.length; i++) h = (h * 31 + pid.charCodeAt(i)) >>> 0;
  return dark ? ['#8c96a3', '#96a0ad', '#828c99'][h % 3] : PALETTE[h % PALETTE.length];
}

export function createScene3d(THREE, { ink = '#1b2733', pick = '#2f6fd6', ghost = '#9aa3ad', dark = false } = {}) {
  const group = new THREE.Group();
  group.name = 'illustrate-scene';
  let cache = new WeakMap();
  const objs = new Map();   // inst → { mesh, edges }
  const capGroup = new THREE.Group();
  group.add(capGroup);
  const clipPlanes = (look) => {
    if (look?.section) { const { n, c } = look.section; return { planes: [new THREE.Plane(new THREE.Vector3(-n[0], -n[1], -n[2]), c)], inter: false }; }
    if (look?.box) { const { min, max } = look.box; const P = []; for (let k = 0; k < 3; k++) { const a = [0, 0, 0]; a[k] = 1; P.push(new THREE.Plane(new THREE.Vector3(...a), -max[k]), new THREE.Plane(new THREE.Vector3(...a.map((x) => -x)), min[k])); } return { planes: P, inter: true }; }
    return { planes: [], inter: false };
  };
  const geoFor = (mesh) => {
    let g = cache.get(mesh);
    if (g) return g;
    const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
    const pos = new Float32Array(nt * 9);
    for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) for (let c = 0; c < 3; c++) pos[t * 9 + k * 3 + c] = P[I[t * 3 + k] * 3 + c];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.BufferAttribute(featureSegments(mesh), 3));
    g = { geo, eg };
    cache.set(mesh, g);
    return g;
  };
  const dropObj = (o) => { o.mesh.material.dispose(); o.edges.material.dispose(); o.mesh.removeFromParent(); o.edges.removeFromParent(); };

  function update({ m, meshes, world, state, selected = new Set(), look = null, caps = [] }) {
    const shown = new Set();
    const style = look?.style || 'outlined';
    const clip = clipPlanes(look);
    for (const inst of m.instances) {
      const st = state(inst.id);
      const mesh = meshes.get(inst.part);
      if (st.hide || !mesh) continue;
      shown.add(inst.id);
      let o = objs.get(inst.id);
      const g = geoFor(mesh);
      if (o && o.geo !== g) { dropObj(o); o = null; }
      if (!o) {
        const mm = new THREE.Mesh(g.geo, new THREE.MeshStandardMaterial({ roughness: 0.75, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
        const ee = new THREE.LineSegments(g.eg, new THREE.LineBasicMaterial({ color: ink }));
        for (const x of [mm, ee]) { x.matrixAutoUpdate = false; group.add(x); }
        mm.userData.inst = inst.id;
        o = { mesh: mm, edges: ee, geo: g };
        objs.set(inst.id, o);
      }
      const M = world.get(inst.id);
      for (const x of [o.mesh, o.edges]) { x.matrix.fromArray(M); x.matrixWorldNeedsUpdate = true; }
      const mat = o.mesh.material, sel = selected.has(inst.id);
      const op = st.ghost ? Math.min(st.opacity, 0.22) : style === 'xray' ? Math.min(st.opacity, 0.28) : st.opacity;
      const base = st.ghost ? ghost : style === 'lines' ? '#ffffff' : st.color || partColour(inst.part, dark);
      const unlit = style === 'flat' || style === 'lines';
      mat.color.set(unlit ? '#000000' : base);
      mat.transparent = op < 1; mat.opacity = op; mat.depthWrite = op >= 1;
      mat.emissive.set(sel ? pick : unlit ? base : '#000000'); mat.emissiveIntensity = sel ? 0.45 : unlit ? 1 : 0;
      mat.clippingPlanes = clip.planes; mat.clipIntersection = clip.inter; mat.side = clip.planes.length ? THREE.DoubleSide : THREE.FrontSide;
      mat.needsUpdate = true;
      const em = o.edges.material;
      em.clippingPlanes = clip.planes; em.clipIntersection = clip.inter; em.needsUpdate = true;
      o.edges.visible = style !== 'shaded' || sel;
      em.color.set(sel ? pick : ink); em.transparent = op < 1; em.opacity = st.ghost ? 0.35 : Math.max(op, 0.2);
      o.mesh.renderOrder = op < 1 ? 2 : 0; o.edges.renderOrder = op < 1 ? 3 : 1;
    }
    for (const [id, o] of objs) if (!shown.has(id)) { dropObj(o); objs.delete(id); }
    // the cut faces, filled (a little darker than the part), slightly in front of the plane so they win over its back faces
    for (const c of [...capGroup.children]) { c.geometry.dispose(); c.material.dispose(); c.removeFromParent(); }
    for (const cap of caps) {
      const inst = m.instances.find((i) => i.id === cap.inst);
      const st = state(cap.inst);
      const colour = new THREE.Color(st.color || partColour(inst?.part || '', dark)).multiplyScalar(0.8);
      const pos = [];
      const { o, e1, e2 } = cap.frame, lift = 1e-3;
      const at = (q) => [o[0] + e1[0] * q[0] + e2[0] * q[1] - cap.n[0] * lift, o[1] + e1[1] * q[0] + e2[1] * q[1] - cap.n[1] * lift, o[2] + e1[2] * q[0] + e2[2] * q[1] - cap.n[2] * lift];
      for (const poly of cap.polys) {
        const contour = poly.outer.map((q) => new THREE.Vector2(q[0], q[1])), holes = poly.holes.map((h) => h.map((q) => new THREE.Vector2(q[0], q[1])));
        const all = [...poly.outer, ...poly.holes.flat()];
        let tris;
        try { tris = THREE.ShapeUtils.triangulateShape(contour, holes); } catch { continue; }
        for (const tri of tris) for (const k of tri) pos.push(...at(all[k]));
      }
      if (!pos.length) continue;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: colour, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
      capGroup.add(mesh);
    }
  }
  function pickInst(ray) {
    const hits = ray.intersectObjects([...objs.values()].map((o) => o.mesh), false);
    // ghosted parts are seen through: a click goes to the first solid part behind them, else the ghost
    const solid = hits.find((h) => h.object.material.opacity >= 0.5);
    const h = solid || hits[0];
    return h ? { inst: h.object.userData.inst, point: [h.point.x, h.point.y, h.point.z], face: h.faceIndex } : null;
  }
  function dispose() {
    for (const o of objs.values()) dropObj(o);
    objs.clear();
    for (const c of [...capGroup.children]) { c.geometry.dispose(); c.material.dispose(); c.removeFromParent(); }
    cache = new WeakMap();   // the view disposes the geometries with the overlay
  }
  return { group, update, pick: pickInst, dispose, get count() { return objs.size; } };
}
