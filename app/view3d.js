/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view3d.js — the 3D view (three.js). Orthographic camera, render on demand.
 *   Model mode: OrbitControls (left drag orbit, right/middle drag pan, wheel zoom at the cursor; setOrbitButton('middle')
 *   makes the middle button orbit instead; `isPad(e)` true = a two-finger swipe orbits, Shift + swipe pans),
 *   standard views, picking of faces (planar faces highlight whole), edges and the base planes.
 *   Sketch mode: the camera looks square onto the sketch plane and follows `sketchView`
 *   {cx, cy, s} (sketch units at the stage centre, pixels per unit), so the 2D overlay canvas and
 *   the model line up exactly. Colours come from the page tokens (Paper / Model themes).
 *
 *   const v = new View3D(canvas, { onPick(hit) });  v.setMesh(mesh); v.view('iso'); v.fit();
 *   hit = { kind:'face', tri, point, normal, featureIndex, group } | { kind:'edge', a, b } | { kind:'plane', name } | null
 *   Workspace hooks (workspaces.js): setOverlay(id, Object3D|null) (scene objects that survive setMesh), clearOverlays(),
 *   setFaceColors(Float32Array|null) (result plots on the part; cleared by setMesh), setPartVisible(bool).
 *   Base planes: setPlanesVisible(bool), setPlanesFaint(bool) (0.6 PU.4: faint planes are drawn but never picked).
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BASE_PLANES, toWorld } from './vec.js';
import { planarGroups } from './faces.js';
import { onMouse } from './input-mouse.js';   // 0.5 IP.3: the menu style's buttons and wheel (input-partcraft.js)

const tv = (a) => new THREE.Vector3(a[0], a[1], a[2]);
export { THREE };   // workspaces get it as host.THREE (their modules stay importable in Node)

export class View3D {
  constructor(canvas, { onPick = () => {}, onHover = () => {} } = {}) {
    this.canvas = canvas;
    this.onPick = onPick;
    this.onHover = onHover;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, stencil: true });   // stencil: section caps
    this.renderer.localClippingEnabled = true;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10000);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = false;
    this.controls.screenSpacePanning = true;
    this.controls.zoomToCursor = true;
    this.setOrbitButton('left');
    // the menu style's mouse (Settings › PartCraft › Menus, keys and mouse): its buttons win over the orbit setting when it
    // sets them (orbit3d), else the setting's; the wheel's speed and direction (a pinch, ctrl+wheel, is never turned round)
    this._inputOff = onMouse((mm) => { this._inputMouse = mm; this.setOrbitButton(this.orbitButton); this.controls.zoomSpeed = mm.zoomSpeed; this._wheelFlip = mm.wheel === -1; });
    canvas.addEventListener('wheel', (e) => {
      if (!this._wheelFlip || e.ctrlKey || e.ccFlipped) return;
      e.stopImmediatePropagation(); e.preventDefault();
      const f = new WheelEvent('wheel', { deltaX: e.deltaX, deltaY: -e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode, clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, bubbles: true, cancelable: true });
      f.ccFlipped = true;
      canvas.dispatchEvent(f);
    }, { capture: true, passive: false });
    this.controls.addEventListener('change', () => this.render());
    // trackpad (Settings › PartCraft › Scrolling): a two-finger swipe orbits, Shift + swipe pans; a pinch
    // (wheel + ctrlKey) is left to OrbitControls, which zooms. Caught on the way down, before OrbitControls sees it.
    this.isPad = null;
    canvas.parentElement?.addEventListener('wheel', (e) => {
      if (e.target !== canvas || this.sketchFrame || e.ctrlKey || !this.isPad || !this.isPad(e)) return;
      e.preventDefault(); e.stopPropagation();
      const k = e.deltaMode === 1 ? 16 : 1, r = canvas.getBoundingClientRect();
      if (e.shiftKey) this.panBy(-e.deltaX * k / Math.max(r.width, 1), -e.deltaY * k / Math.max(r.height, 1));
      else this.orbitBy(-e.deltaX * k * 0.25, -e.deltaY * k * 0.25);
    }, { capture: true, passive: false });

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x7d838c, 2.0));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    this.sun = sun;
    this.scene.add(sun);
    this.camera.add(sun);
    sun.position.set(0.4, 0.8, 1);
    this.scene.add(this.camera);

    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.planes = new THREE.Group();
    this.scene.add(this.planes);
    this.extra = new THREE.Group();   // sketches drawn in 3D, picked edge, axes
    this.refs = new THREE.Group();    // reference planes / axes / points (setRefs)
    this.scene.add(this.refs);
    this.scene.add(this.extra);
    this.overlayRoot = new THREE.Group();   // workspaces' own scene objects (setOverlay)
    this.scene.add(this.overlayRoot);
    this.overlays = new Map();
    this.partVisible = true;
    this.mesh = null; this.edges = null; this.hl = null; this.hover = null;
    this.groups = null;
    this.size = 100;
    this.box = new THREE.Box3(new THREE.Vector3(-50, -50, -50), new THREE.Vector3(50, 50, 50));
    this.sketchFrame = null;
    this.sketchView = null;
    this.showPlanes = true;
    this.planesFaint = false;
    this.colors = {};
    this.applyTheme();
    new MutationObserver(() => this.applyTheme()).observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.buildPlanes();
    this.resize();
    this.view('iso');
    this.bindPointer();
  }

  token(n, d) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim() || d; }

  applyTheme() {
    const c = (n, d) => new THREE.Color(this.token(n, d));
    this.colors = { bg: c('--sheet', '#f3f6f8'), ink: c('--ink', '#1d232b'), body: c('--grid', '#c9d1d9'), pick: c('--layer-orange', '#d9822b'), hover: c('--layer-cyan', '#1a9fb5'), plane: c('--layer-blue', '#2f6fd6'), sk: c('--layer-blue', '#2f6fd6') };
    const dark = document.documentElement.getAttribute('data-space') === 'model';
    this.dark = dark;
    this.scene.background = this.colors.bg;
    // a light grey part on paper, a mid grey on the dark model space
    this.bodyColor = new THREE.Color(dark ? '#8c96a3' : '#c8ced6');
    if (this.mesh && !this.mesh.material.vertexColors) this.mesh.material.color.copy(this.bodyColor);
    if (this.edges) this.edges.material.color.copy(this.colors.ink);
    for (const o of this.instances || []) { o.edges.material.color.copy(this.colors.ink); if (dark) o.mesh.material.color.set('#8c96a3'); }
    for (const p of this.planes.children) this.tintPlane(p);
    if (this.capQuad) this.capQuad.material.color.copy(this.capColor());
    this.render();
  }

  resize() {
    const host = this.canvas.parentElement;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false);
    this.updateFrustum();
    this.onResize?.();
    this.render();
  }

  updateFrustum() {
    const cam = this.camera;
    if (this.sketchFrame && this.sketchView) {
      const { s } = this.sketchView;
      cam.left = -this.w / 2 / s; cam.right = this.w / 2 / s; cam.top = this.h / 2 / s; cam.bottom = -this.h / 2 / s;
      cam.zoom = 1;
    } else {
      const half = this.viewHalf || this.size;
      const a = this.w / this.h;
      cam.left = -half * a; cam.right = half * a; cam.top = half; cam.bottom = -half;
    }
    cam.updateProjectionMatrix();
  }

  render() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; this.renderer.render(this.scene, this.camera); this.onRender?.(); });
  }
  renderNow() { this.renderer.render(this.scene, this.camera); }

  // ---------------------------------------------------------------- base planes
  buildPlanes() {
    this.planes.clear();
    const s = this.size * 0.6;
    for (const [name, f] of Object.entries(BASE_PLANES)) {
      const g = new THREE.Group();
      g.userData.plane = name;
      const corners = [[-s, -s], [s, -s], [s, s], [-s, s]].map(([u, v]) => tv(toWorld(f, u, v)));
      const geo = new THREE.BufferGeometry().setFromPoints([corners[0], corners[1], corners[2], corners[0], corners[2], corners[3]]);
      geo.computeVertexNormals();
      const fill = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }));
      fill.userData.plane = name;
      const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(corners), new THREE.LineBasicMaterial({ transparent: true, opacity: 0.6 }));
      g.add(fill, line);
      this.tintPlane(g);
      this.planes.add(g);
    }
    // origin triad
    const axes = new THREE.Group();
    const L = this.size * 0.15;
    for (const [d, col] of [[[1, 0, 0], '#c0392b'], [[0, 1, 0], '#2e9e5b'], [[0, 0, 1], '#2f6fd6']]) {
      axes.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), tv(d).multiplyScalar(L)]), new THREE.LineBasicMaterial({ color: col })));
    }
    axes.userData.axes = true;
    this.planes.add(axes);
    this.planes.visible = this.showPlanes;
  }

  tintPlane(g) {
    if (!g.userData.plane) return;
    const sel = this.selectedPlane === g.userData.plane, hov = this.hoverPlane === g.userData.plane;
    const col = sel ? this.colors.pick : hov ? this.colors.hover : this.colors.plane;
    g.children[0].material.color.copy(col);
    g.children[0].material.opacity = sel || hov ? 0.22 : this.planesFaint ? 0.015 : 0.07;
    g.children[1].material.color.copy(col);
    g.children[1].material.opacity = this.planesFaint && !sel ? 0.18 : 0.6;
  }
  setPlaneState(selected, hover) {
    this.selectedPlane = selected; this.hoverPlane = hover;
    for (const g of this.planes.children) this.tintPlane(g);
    this.render();
  }
  setPlanesVisible(on) { this.showPlanes = on; this.planes.visible = on; this.render(); }
  /** 0.6 PU.4: once the part has a solid the base planes step back — drawn faint and not picked (the origin triad stays). */
  setPlanesFaint(on) {
    if (this.planesFaint === !!on) return;
    this.planesFaint = !!on;
    for (const g of this.planes.children) this.tintPlane(g);
    this.render();
  }

  // ---------------------------------------------------------------- the part
  setMesh(mesh) {
    this.clearInstances();
    for (const o of [this.mesh, this.edges]) if (o) { o.geometry.dispose(); o.material.dispose(); o.removeFromParent(); }
    this.mesh = this.edges = null;
    this.setHighlight(null); this.setHover(null); this.setMarks?.(null);
    this.data = mesh;
    this.groups = null;
    this.visTri = null;
    if (!mesh) { this.applySection(); this.render(); return; }
    // flat shading: one vertex per triangle corner
    const P = mesh.positions, I = mesh.indices, nt = I.length / 3;
    const pos = new Float32Array(nt * 9);
    for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) for (let c = 0; c < 3; c++) pos[t * 9 + k * 3 + c] = P[I[t * 3 + k] * 3 + c];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    // the exact kernel sends OpenCascade's surface normals per corner: curved faces shade smooth
    if (mesh.cornerNormals && mesh.cornerNormals.length === pos.length) geo.setAttribute('normal', new THREE.BufferAttribute(mesh.cornerNormals, 3));
    else geo.computeVertexNormals();
    geo.computeBoundingBox(); geo.computeBoundingSphere();
    this.mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: this.bodyColor, roughness: 0.75, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
    this.root.add(this.mesh);
    const eg = edgeGeometry(mesh);
    this.edgeOfSeg = eg.edgeOfSeg;
    this.edges = new THREE.LineSegments(eg.geo, new THREE.LineBasicMaterial({ color: this.colors.ink }));
    this.root.add(this.edges);
    this.mesh.visible = this.edges.visible = this.partVisible;
    this.box = geo.boundingBox.clone();
    this.applySection();
    const sz = this.box.getSize(new THREE.Vector3()).length();
    if (Math.abs(sz - this.size * 1.4) > this.size * 0.5 || !this.sizedOnce) { this.size = Math.max(10, sz / 1.4); this.sizedOnce = true; this.buildPlanes(); }
    this.render();
  }

  planarGroups() { if (!this.groups && this.data) this.groups = planarGroups(this.data); return this.groups; }

  // ---------------------------------------------------------------- workspace hooks
  /** Add (obj: any THREE.Object3D, in world mm) or remove (null) a scene object under an id. Replacing or removing
   *  disposes the old object's geometries and materials. Overlays survive setMesh; leaving a workspace clears them. */
  setOverlay(id, obj) {
    const old = this.overlays.get(id);
    if (old) { old.removeFromParent(); old.traverse((o) => { o.geometry?.dispose(); for (const m of [].concat(o.material || [])) m.dispose(); }); this.overlays.delete(id); }
    if (obj) { this.overlays.set(id, obj); this.overlayRoot.add(obj); }
    this.render();
  }
  clearOverlays() { for (const id of [...this.overlays.keys()]) this.setOverlay(id, null); }
  /** Colour the part (a result plot): RGB 0…1 per mesh vertex (length = mesh.positions.length) or per triangle corner
   *  (length = 9 × triangles); null = the plain body colour. setMesh (every rebuild) clears it. */
  setFaceColors(c) {
    if (!this.mesh) return;
    const geo = this.mesh.geometry, mat = this.mesh.material;
    if (!c) {
      if (geo.getAttribute('color')) geo.deleteAttribute('color');
      mat.vertexColors = false; mat.color.copy(this.bodyColor); mat.needsUpdate = true; this.render(); return;
    }
    const I = this.data.indices, nt = I.length / 3;
    let col;
    if (c.length === nt * 9) col = Float32Array.from(c);
    else if (c.length === this.data.positions.length) {
      col = new Float32Array(nt * 9);
      for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) for (let j = 0; j < 3; j++) col[t * 9 + k * 3 + j] = c[I[t * 3 + k] * 3 + j];
    } else throw new Error(`setFaceColors: ${c.length} values for ${this.data.positions.length / 3} vertices / ${nt} triangles.`);   // i18n-ignore: a programming error (wrong colour array), never shown to a person
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    mat.vertexColors = true; mat.color.set(0xffffff); mat.needsUpdate = true;
    this.render();
  }
  /** Surface bodies (surface.js / brep.js `sheets`: [{ feature, positions, indices }]) drawn see-through, both sides; in every workspace. */
  setSheets(list) {
    if (!this.sheetRoot) { this.sheetRoot = new THREE.Group(); this.scene.add(this.sheetRoot); }
    for (const o of [...this.sheetRoot.children]) { o.geometry.dispose(); o.material.dispose(); o.removeFromParent(); }
    for (const s of list || []) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(s.positions, 3));
      geo.setIndex(new THREE.BufferAttribute(s.indices, 1));
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: this.colors.plane, transparent: true, opacity: 0.55, side: THREE.DoubleSide, roughness: 0.6, depthWrite: false }));
      m.userData.sheet = s.feature;
      this.sheetRoot.add(m);
    }
    this.render();
  }
  /**
   * Hide exact faces and edges (hidden bodies: bodies.js hiddenGeometry → { faces: Set, edges: Set }; null shows all).
   * The mesh keeps its per-corner buffer (face colours stay valid) and draws through an index of the visible triangles;
   * `visTri` maps a drawn triangle back to the mesh's. Picks never land on hidden geometry. setMesh clears it.
   */
  setHidden(h) {
    if (!this.mesh || !this.data) return;
    const geo = this.mesh.geometry, tf = this.data.triFace;
    const faces = h?.faces?.size && tf ? h.faces : null;
    if (faces) {
      const vis = [];
      for (let t = 0; t < tf.length; t++) if (!faces.has(tf[t])) vis.push(t);
      const idx = new Uint32Array(vis.length * 3);
      vis.forEach((t, i) => { idx[3 * i] = 3 * t; idx[3 * i + 1] = 3 * t + 1; idx[3 * i + 2] = 3 * t + 2; });
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
      this.visTri = Int32Array.from(vis);
    } else { geo.setIndex(null); this.visTri = null; }
    const eg = edgeGeometry(this.data, h?.edges?.size ? h.edges : null);
    this.edges.geometry.dispose(); this.edges.geometry = eg.geo; this.edgeOfSeg = eg.edgeOfSeg;
    this.render();
  }

  /** Show or hide the part (mesh and edges); kept across rebuilds until set again. */
  setPartVisible(on) {
    this.partVisible = !!on;
    for (const o of [this.mesh, this.edges]) if (o) o.visible = this.partVisible;
    this.render();
  }

  /** Marks: exact edges and faces picked for a fillet, chamfer or shell ({ edges: [i], faces: [i] } or null). */
  setMarks(m) {
    for (const o of this.marks || []) { o.geometry.dispose(); o.material.dispose(); o.removeFromParent(); }
    this.marks = [];
    if (m && this.data) {
      if (m.edges?.length) this.marks.push(this.swapOverlay(null, { kind: 'edges', edges: m.edges }, this.colors.pick, -4));
      if (m.faces?.length && this.data.triFace) {
        const want = new Set(m.faces), tris = [];
        for (let t = 0; t < this.data.triFace.length; t++) if (want.has(this.data.triFace[t])) tris.push(t);
        if (tris.length) this.marks.push(this.swapOverlay(null, { tris }, this.colors.pick, -4));
      }
    }
    this.render();
  }

  /** Highlight a set of triangles (a picked face) or an edge segment. */
  setHighlight(sel) { this.hl = this.swapOverlay(this.hl, sel, this.colors.pick, -3); this.render(); }
  setHover(sel) { this.hover = this.swapOverlay(this.hover, sel, this.colors.hover, -2); this.render(); }
  /** Highlights, hovers and marks follow the section's cut like the part (clipSection). */
  swapOverlay(old, sel, color, off) { return this.clipSection(this.makeOverlay(old, sel, color, off)); }
  clipSection(o) {
    if (o?.material) { o.material.clippingPlanes = this.section ? [this.sectionPlane()] : []; o.material.needsUpdate = true; }
    return o;
  }
  makeOverlay(old, sel, color, off) {
    if (old) { old.geometry.dispose(); old.material.dispose(); old.removeFromParent(); }
    const data = sel?.data || this.data;
    if (!sel || !data) return null;
    if (sel.kind === 'edges') {
      // whole exact edges, drawn as thin tubes (WebGL lines are one pixel wide): one cylinder per segment
      const want = new Set(sel.edges);
      const segs = [];
      if (data.edgeSegs) for (let k = 0; k < data.segEdge.length; k++) if (want.has(data.segEdge[k])) segs.push(k);
      const r = Math.max(this.size, 1) * 0.006;
      const tube = new THREE.InstancedMesh(new THREE.CylinderGeometry(r, r, 1, 8, 1, true), new THREE.MeshBasicMaterial({ color, depthTest: false }), Math.max(1, segs.length));
      const a = new THREE.Vector3(), b = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), m = new THREE.Matrix4(), q = new THREE.Quaternion();
      segs.forEach((k, i) => {
        a.fromArray(data.edgeSegs, k * 6); b.fromArray(data.edgeSegs, k * 6 + 3);
        const d = b.clone().sub(a), L = d.length() || 1e-9;
        q.setFromUnitVectors(up, d.divideScalar(L));
        m.compose(a.clone().add(b).multiplyScalar(0.5), q, new THREE.Vector3(1, L, 1));
        tube.setMatrixAt(i, m);
      });
      tube.count = segs.length;
      tube.renderOrder = 20;
      if (sel.matrix) { tube.matrixAutoUpdate = false; tube.matrix.fromArray(sel.matrix); }
      this.scene.add(tube);
      return tube;
    }
    if (sel.kind === 'edge') {
      const geo = new THREE.BufferGeometry().setFromPoints([tv(sel.a), tv(sel.b)]);
      const l = new THREE.Line(geo, new THREE.LineBasicMaterial({ color, depthTest: false }));
      l.renderOrder = 20;
      this.scene.add(l);
      return l;
    }
    const tris = sel.tris || [sel.tri];
    const P = data.positions, I = data.indices;
    const pos = new Float32Array(tris.length * 9);
    tris.forEach((t, j) => { for (let k = 0; k < 3; k++) for (let c = 0; c < 3; c++) pos[j * 9 + k * 3 + c] = P[I[t * 3 + k] * 3 + c]; });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: off, polygonOffsetUnits: off }));
    if (sel.matrix) { m.matrixAutoUpdate = false; m.matrix.fromArray(sel.matrix); }
    m.renderOrder = 10;
    this.scene.add(m);
    return m;
  }

  // ---------------------------------------------------------------- assembly instances
  clearInstances() {
    for (const o of this.instances || []) { o.mesh.material.dispose(); o.edges.material.dispose(); o.mesh.removeFromParent(); o.edges.removeFromParent(); }
    this.instances = [];
  }

  /** Several parts at once: [{ id, data (kernel mesh), matrix (16), tint (0…1 toward the pick colour) }]. Geometry is shared per part mesh. */
  setInstances(list) {
    for (const o of [this.mesh, this.edges]) if (o) { o.geometry.dispose(); o.material.dispose(); o.removeFromParent(); }
    this.mesh = this.edges = null; this.data = null; this.groups = null;
    this.setHighlight(null); this.setHover(null);
    this.clearInstances();
    this.geoCache = this.geoCache || new WeakMap();
    const box = new THREE.Box3();
    const palette = ['#c8ced6', '#b9c7d9', '#d6cbb9', '#c2d6c0', '#d6c0cd', '#c9c2d9'];
    list.forEach((it, n) => {
      let g = this.geoCache.get(it.data);
      if (!g) {
        const P = it.data.positions, I = it.data.indices, nt = I.length / 3;
        const pos = new Float32Array(nt * 9);
        for (let t = 0; t < nt; t++) for (let k = 0; k < 3; k++) for (let c = 0; c < 3; c++) pos[t * 9 + k * 3 + c] = P[I[t * 3 + k] * 3 + c];
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.computeVertexNormals(); geo.computeBoundingBox(); geo.computeBoundingSphere();
        if (it.data.cornerNormals && it.data.cornerNormals.length === pos.length) geo.setAttribute('normal', new THREE.BufferAttribute(it.data.cornerNormals, 3));
        g = { geo, edges: edgeGeometry(it.data).geo, groups: planarGroups(it.data) };
        this.geoCache.set(it.data, g);
      }
      const base = new THREE.Color(this.dark ? '#8c96a3' : palette[n % palette.length]);
      if (this.dark) base.offsetHSL(0, 0, (n % 3) * 0.04);
      const mesh = new THREE.Mesh(g.geo, new THREE.MeshStandardMaterial({ color: base, roughness: 0.75, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }));
      const edges = new THREE.LineSegments(g.edges, new THREE.LineBasicMaterial({ color: this.colors.ink }));
      for (const o of [mesh, edges]) { o.matrixAutoUpdate = false; o.matrix.fromArray(it.matrix); o.matrixWorldNeedsUpdate = true; this.root.add(o); }
      mesh.userData.inst = it.id;
      this.instances.push({ id: it.id, mesh, edges, data: it.data, matrix: it.matrix, groups: g.groups });
      box.union(g.geo.boundingBox.clone().applyMatrix4(new THREE.Matrix4().fromArray(it.matrix)));
    });
    if (!box.isEmpty()) {
      this.box = box;
      const sz = box.getSize(new THREE.Vector3()).length();
      this.size = Math.max(10, sz / 1.4);
      this.buildPlanes();
    }
    this.instMode = true;
    this.applySection();
    this.render();
  }

  // ---------------------------------------------------------------- live section (0.4 P13)
  /**
   * Cut the part (or every assembly instance) by a plane: sec = { n: [x,y,z] (unit, world), c (mm: points with n·p > c
   * are cut away), caps: bool } or null. Clipping planes on the body and edge materials; caps by the stencil buffer
   * (back faces +1, front faces −1 per closed body, then one quad on the plane where the count is not 0). Display only;
   * picks ignore what is cut away. Kept across setMesh / setInstances until set again.
   */
  setSection(sec) {
    this.section = sec ? { n: [...sec.n], c: sec.c, caps: sec.caps !== false } : null;
    this.applySection();
    this.render();
  }
  /** The section's plane in three.js form (keeps n·p + constant ≥ 0, i.e. n·p ≤ c), or null. */
  sectionPlane() {
    const s = this.section;
    return s ? new THREE.Plane(new THREE.Vector3(-s.n[0], -s.n[1], -s.n[2]), s.c) : null;
  }
  applySection() {
    for (const o of this.capParts || []) { o.material.dispose(); o.removeFromParent(); }
    if (this.capQuad) { this.capQuad.geometry.dispose(); this.capQuad.material.dispose(); this.capQuad.removeFromParent(); this.capQuad = null; }
    this.capParts = [];
    const plane = this.sectionPlane(), planes = plane ? [plane] : [];
    const bodies = this.instMode && this.instances?.length ? this.instances.map((o) => [o.mesh, o.edges]) : this.mesh ? [[this.mesh, this.edges]] : [];
    for (const [m, e] of bodies) for (const o of [m, e]) if (o) { o.material.clippingPlanes = planes; o.material.needsUpdate = true; }
    for (const o of [this.hl, this.hover, ...(this.marks || [])]) this.clipSection(o);
    if (!plane || !this.section.caps || !bodies.length) return;
    // stencil writers: same geometry and placement as each body, colour and depth untouched
    const writer = (side, op) => new THREE.MeshBasicMaterial({ side, clippingPlanes: planes, colorWrite: false, depthWrite: false, depthTest: false,
      stencilWrite: true, stencilFunc: THREE.AlwaysStencilFunc, stencilFail: op, stencilZFail: op, stencilZPass: op });
    for (const [m] of bodies) {
      for (const [side, op] of [[THREE.BackSide, THREE.IncrementWrapStencilOp], [THREE.FrontSide, THREE.DecrementWrapStencilOp]]) {
        const w = new THREE.Mesh(m.geometry, writer(side, op));
        w.matrixAutoUpdate = m.matrixAutoUpdate; w.matrix.copy(m.matrix); w.matrixWorldNeedsUpdate = true;
        w.renderOrder = 1; w.raycast = () => {};
        m.parent.add(w); this.capParts.push(w);
      }
      m.renderOrder = 3;
    }
    // the cap: a quad on the plane over the whole model, drawn where the stencil count is not 0, then the count is reset
    const n = new THREE.Vector3(...this.section.n), ctr = this.box.getCenter(new THREE.Vector3());
    const at = ctr.clone().addScaledVector(n, this.section.c - n.dot(ctr));
    const L = Math.max(10, this.box.getSize(new THREE.Vector3()).length() * 1.5);
    const geo = new THREE.PlaneGeometry(L, L);
    const mat = new THREE.MeshStandardMaterial({ color: this.capColor(), roughness: 0.9, metalness: 0, side: THREE.DoubleSide,
      stencilWrite: true, stencilRef: 0, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.ReplaceStencilOp, stencilZFail: THREE.ReplaceStencilOp, stencilZPass: THREE.ReplaceStencilOp });
    const q = new THREE.Mesh(geo, mat);
    q.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    q.position.copy(at);
    q.renderOrder = 2; q.raycast = () => {};
    q.userData.sectionCap = true;
    this.root.add(q); this.capQuad = q;
  }
  /** Cut faces read as solid material: the body colour shifted toward the theme's warm layer colour. */
  capColor() {
    const c = new THREE.Color(this.token('--layer-red', '#c0392b'));
    return (this.bodyColor || new THREE.Color('#c8ced6')).clone().lerp(c, 0.6);
  }

  /** Reference geometry (design-ui.js): [{ id, kind:'plane', corners:[4×xyz] } | { id, kind:'axis', a, b } | { id, kind:'point', p }],
   *  each with selected?; planes are translucent quads, axes dashed lines, points small crosses. Picked as { kind:'ref', id }. */
  setRefs(list) {
    for (const o of [...this.refs.children]) { o.geometry?.dispose(); o.material?.dispose(); o.removeFromParent(); }
    for (const g of list || []) {
      const col = g.selected ? this.colors.pick : this.colors.plane;
      if (g.kind === 'plane') {
        const c = g.corners.map(tv);
        const fill = new THREE.Mesh(new THREE.BufferGeometry().setFromPoints([c[0], c[1], c[2], c[0], c[2], c[3]]), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: g.selected ? 0.22 : 0.1, side: THREE.DoubleSide, depthWrite: false }));
        fill.userData.ref = g.id;
        const line = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(c), new THREE.LineBasicMaterial({ color: col }));
        line.userData.ref = g.id;
        this.refs.add(fill, line);
      } else {
        const s = this.size * 0.03;
        const segs = g.kind === 'axis' ? [g.a, g.b] : [0, 1, 2].flatMap((k) => { const d = [0, 0, 0]; d[k] = s; return [g.p.map((v, i) => v - d[i]), g.p.map((v, i) => v + d[i])]; });
        const geo = new THREE.BufferGeometry().setFromPoints(segs.map(tv));
        const l = new THREE.LineSegments(geo, g.kind === 'axis' ? new THREE.LineDashedMaterial({ color: col, dashSize: this.size / 30, gapSize: this.size / 60, depthTest: false }) : new THREE.LineBasicMaterial({ color: col, depthTest: false }));
        if (g.kind === 'axis') l.computeLineDistances();
        l.renderOrder = 16;
        l.userData.ref = g.id;
        this.refs.add(l);
      }
    }
    this.render();
  }

  /** Sketches shown in the model (world-space polylines), each { pts: [[x,y,z]…], color?, dashed? }. */
  setSketchLines(list) {
    for (const o of [...this.extra.children]) { o.geometry?.dispose(); o.material?.dispose(); o.removeFromParent(); }
    for (const s of list) {
      const geo = new THREE.BufferGeometry().setFromPoints(s.pts.map(tv));
      const mat = s.dashed ? new THREE.LineDashedMaterial({ color: s.color || this.colors.sk, dashSize: this.size / 40, gapSize: this.size / 60, depthTest: false })
        : new THREE.LineBasicMaterial({ color: s.color || this.colors.sk, depthTest: false });
      const l = new THREE.Line(geo, mat);
      if (s.dashed) l.computeLineDistances();
      l.renderOrder = 15;
      this.extra.add(l);
    }
    this.render();
  }

  // ---------------------------------------------------------------- camera
  view(name = 'iso') {
    const dirs = {
      iso: [1, 0.8, 1], front: [0, 0, 1], back: [0, 0, -1], top: [0, 1, 0], bottom: [0, -1, 0], right: [1, 0, 0], left: [-1, 0, 0],
    };
    const d = tv(dirs[name] || dirs.iso).normalize();
    const up = name === 'top' ? new THREE.Vector3(0, 0, -1) : name === 'bottom' ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0);
    this.lookAlong(d, up);
  }

  /** Look at the model from direction d (towards the viewer), fitted. */
  lookAlong(d, up = new THREE.Vector3(0, 1, 0)) {
    if (this.sketchFrame) return;
    const box = this.mesh || this.instances?.length ? this.box : new THREE.Box3(new THREE.Vector3(-this.size * 0.6, -this.size * 0.6, -this.size * 0.6), new THREE.Vector3(this.size * 0.6, this.size * 0.6, this.size * 0.6));
    const c = box.getCenter(new THREE.Vector3());
    const r = Math.max(box.getSize(new THREE.Vector3()).length() / 2, 1);
    this.camera.up.copy(up);
    this.camera.position.copy(c).addScaledVector(d, r * 4);
    this.camera.near = 0.01 * r; this.camera.far = r * 10;
    this.viewHalf = r * 1.1;
    this.camera.zoom = 1;
    this.controls.target.copy(c);
    this.updateFrustum();
    this.camera.lookAt(c);
    this.controls.update();
    this.render();
  }
  /** Which mouse button turns the view (Settings › PartCraft): 'left' (left orbits, middle/right pan) or
   *  'middle' (middle orbits, Shift/Ctrl + middle or right pans; the left button only picks). */
  setOrbitButton(which) {
    this.orbitButton = which === 'middle' ? 'middle' : 'left';
    const o = this._inputMouse?.orbit3d, ACT = { orbit: THREE.MOUSE.ROTATE, pan: THREE.MOUSE.PAN, zoom: THREE.MOUSE.DOLLY, none: null };
    if (o) { this.controls.mouseButtons = { LEFT: ACT[o.left] ?? null, MIDDLE: ACT[o.middle] ?? null, RIGHT: ACT[o.right] ?? null }; return; }   // IP.3: the style's
    this.controls.mouseButtons = this.orbitButton === 'middle'
      ? { LEFT: null, MIDDLE: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.PAN }
      : { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: THREE.MOUSE.PAN };
  }
  /** Keyboard navigation: turn about the target (degrees), pan (fractions of the view), zoom (factor). */
  orbitBy(yawDeg, pitchDeg) {
    if (this.sketchFrame) return;
    const t = this.controls.target, off = this.camera.position.clone().sub(t);
    const up = this.camera.up.clone().normalize();
    off.applyAxisAngle(up, yawDeg * Math.PI / 180);
    const right = new THREE.Vector3().crossVectors(up, off).normalize();
    const turned = off.clone().applyAxisAngle(right, -pitchDeg * Math.PI / 180);
    if (Math.abs(turned.clone().normalize().dot(up)) < 0.995) off.copy(turned);
    this.camera.position.copy(t).add(off);
    this.camera.lookAt(t);
    this.controls.update();
    this.render();
  }
  panBy(fx, fy) {
    if (this.sketchFrame) return;
    const w = (this.camera.right - this.camera.left) / this.camera.zoom, h = (this.camera.top - this.camera.bottom) / this.camera.zoom;
    const m = this.camera.matrixWorld.elements;
    const right = new THREE.Vector3(m[0], m[1], m[2]), up = new THREE.Vector3(m[4], m[5], m[6]);
    const d = right.multiplyScalar(-fx * w).add(up.multiplyScalar(fy * h));
    this.camera.position.add(d); this.controls.target.add(d);
    this.controls.update();
    this.render();
  }
  zoomBy(k) {
    if (this.sketchFrame) return;
    this.camera.zoom = Math.max(0.01, Math.min(this.camera.zoom * k, 1000));
    this.camera.updateProjectionMatrix();
    this.controls.update();
    this.render();
  }

  fit() { const d = this.camera.position.clone().sub(this.controls.target).normalize(); this.lookAlong(d, this.camera.up.clone()); }
  normalTo(frame) { this.lookAlong(tv(frame.n), tv(frame.y)); }

  /** Enter / update / leave sketch mode. view = { cx, cy, s } */
  setSketch(frame, view) {
    this.sketchFrame = frame;
    this.sketchView = view;
    if (!frame) {
      this.controls.enabled = true;
      this.updateFrustum();
      this.render();
      return;
    }
    this.controls.enabled = false;
    const r = Math.max(this.size * 4, 1000);
    const c = tv(toWorld(frame, view.cx, view.cy));
    this.camera.up.copy(tv(frame.y));
    this.camera.position.copy(c).addScaledVector(tv(frame.n), r);
    this.camera.near = 0.01; this.camera.far = r * 3;
    this.camera.lookAt(c);
    this.controls.target.copy(c);
    this.updateFrustum();
    this.render();
  }

  // ---------------------------------------------------------------- picking
  ray(clientX, clientY) {
    const r = this.canvas.getBoundingClientRect();
    const p = new THREE.Vector2(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.params.Line.threshold = (this.camera.right - this.camera.left) / this.camera.zoom / r.width * 5;
    ray.setFromCamera(p, this.camera);
    return ray;
  }

  /** The nearest hit not cut away by the section (null when every hit is). */
  keptHit(hits) {
    const s = this.section;
    if (!s) return hits[0] || null;
    return hits.find((h) => h.point.x * s.n[0] + h.point.y * s.n[1] + h.point.z * s.n[2] <= s.c + 1e-9) || null;
  }

  pickAt(clientX, clientY, { planes = this.planes.visible, edges = true } = {}) {
    const ray = this.ray(clientX, clientY);
    const hits = [];
    if (this.mesh && this.partVisible) {
      const h = this.keptHit(ray.intersectObject(this.mesh, false));
      if (h) {
        const tri = this.visTri ? this.visTri[h.faceIndex] : h.faceIndex;   // hidden bodies: drawn index → mesh triangle
        const n = h.face.normal.clone();
        const fi = this.data.triFeature[tri];
        const grp = this.planarGroups();
        const g = grp.faceOf[tri];
        const group = grp.groups[g];
        const planar = group.tris.length > 1 || true;
        const face = this.data.triFace ? this.data.triFace[tri] : undefined;
        if (face !== undefined) n.copy(triNormal3(this.data, tri));
        hits.push({ d: h.distance, hit: { kind: 'face', tri, point: h.point.toArray(), normal: n.toArray(), featureIndex: fi, feature: fi >= 0 ? this.data.featIds[fi] : null, tris: group.tris, group: g, planar, face } });
      }
    }
    if (this.instances?.length) {
      const h = this.keptHit(ray.intersectObjects(this.instances.map((o) => o.mesh), false));
      if (h) {
        const it = this.instances.find((o) => o.mesh === h.object);
        const tri = h.faceIndex;
        const inv = new THREE.Matrix4().fromArray(it.matrix).invert();
        const local = h.point.clone().applyMatrix4(inv);
        const g = it.groups.faceOf[tri];
        const fi = it.data.triFeature[tri];
        hits.push({ d: h.distance, hit: { kind: 'face', inst: it.id, tri, point: local.toArray(), normal: h.face.normal.toArray(), worldPoint: h.point.toArray(), featureIndex: fi, feature: fi >= 0 ? it.data.featIds[fi] : null, tris: it.groups.groups[g].tris, group: g, data: it.data, matrix: it.matrix, face: it.data.triFace ? it.data.triFace[tri] : undefined } });
      }
    }
    if (edges && this.edges && this.partVisible) {
      const h = this.keptHit(ray.intersectObject(this.edges, false));
      if (h) {
        const a = h.object.geometry.attributes.position;
        const i = h.index;
        const A = [a.getX(i), a.getY(i), a.getZ(i)], B = [a.getX(i + 1), a.getY(i + 1), a.getZ(i + 1)];
        const edge = this.edgeOfSeg ? this.edgeOfSeg[i / 2] : undefined;
        // an edge wins over the face it bounds when the pointer is right on it
        hits.push({ d: h.distance - (this.camera.far * 1e-4), hit: { kind: 'edge', a: A, b: B, edge } });
      }
    }
    if (this.refs.children.length && !this.sketchFrame) {
      const lines = this.refs.children.filter((o) => o.isLine);
      const hl = ray.intersectObjects(lines, false)[0];
      if (hl) hits.push({ d: hl.distance - (this.camera.far * 2e-4), hit: { kind: 'ref', id: hl.object.userData.ref } });
      const fills = this.refs.children.filter((o) => o.isMesh);
      const hf = ray.intersectObjects(fills, false)[0];
      if (hf) hits.push({ d: hf.distance + (this.mesh ? 1e9 : 0), hit: { kind: 'ref', id: hf.object.userData.ref } });
    }
    if (planes && this.planes.visible && !this.planesFaint) {
      const fills = this.planes.children.filter((g) => g.userData.plane).map((g) => g.children[0]);
      const h = ray.intersectObjects(fills, false)[0];
      if (h) hits.push({ d: h.distance + (this.mesh ? 1e9 : 0), hit: { kind: 'plane', name: h.object.userData.plane } });
    }
    hits.sort((p, q) => p.d - q.d);
    return hits.length ? hits[0].hit : null;
  }

  bindPointer() {
    let down = null;
    this.canvas.addEventListener('pointerdown', (e) => { if (e.button === 0) down = { x: e.clientX, y: e.clientY }; });
    this.canvas.addEventListener('pointerup', (e) => {
      if (this.sketchFrame) return;
      if (!down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 4) { down = null; return; }
      down = null;
      this.onPick(this.pickAt(e.clientX, e.clientY), e);
    });
    this.canvas.addEventListener('pointermove', (e) => {
      if (this.sketchFrame || e.buttons) return;
      this.onHover(this.pickAt(e.clientX, e.clientY), e);
    });
    this.canvas.addEventListener('pointerleave', () => { if (!this.sketchFrame) this.onHover(null); });
  }
}

/**
 * Lines for a part's edges: the exact kernel's own edge polylines (`edgeSegs`, minus seams), else the
 * mesh's feature edges (> 25°). → { geo, edgeOfSeg: Int32Array | null } (segment → exact edge index)
 */
function edgeGeometry(mesh, hidden = null) {
  if (mesh.edgeSegs && mesh.segEdge) {
    const keep = [];
    for (let k = 0; k < mesh.segEdge.length; k++) if (mesh.segEdge[k] >= 0 && !(hidden && hidden.has(mesh.segEdge[k]))) keep.push(k);
    const pos = new Float32Array(keep.length * 6);
    const edgeOfSeg = new Int32Array(keep.length);
    keep.forEach((k, j) => { pos.set(mesh.edgeSegs.subarray(k * 6, k * 6 + 6), j * 6); edgeOfSeg[j] = mesh.segEdge[k]; });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return { geo, edgeOfSeg };
  }
  const ig = new THREE.BufferGeometry();
  ig.setAttribute('position', new THREE.BufferAttribute(mesh.positions, 3));
  ig.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
  const geo = new THREE.EdgesGeometry(ig, 25);
  ig.dispose();
  return { geo, edgeOfSeg: null };
}

/** A triangle's geometric normal (picking reports this, not the smoothed shading normal). */
function triNormal3(data, t) {
  const P = data.positions, I = data.indices;
  const p = (k) => new THREE.Vector3(P[I[t * 3 + k] * 3], P[I[t * 3 + k] * 3 + 1], P[I[t * 3 + k] * 3 + 2]);
  const a = p(0), b = p(1), c = p(2);
  return b.sub(a).cross(c.sub(a)).normalize();
}
