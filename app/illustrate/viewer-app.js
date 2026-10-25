/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: runs inside the exported file; every word it shows comes in data.words */
/**
 * illustrate/viewer-app.js — what an exported manual file runs (0.7 TP.9). Never imported by the app: viewer-data.js packs it,
 * with three.js and anim.js, into one HTML file. Nothing here talks to a server.
 *
 *   start(data)   data = viewer-data.js viewerData()
 *   the model (drag to turn, right-drag or Shift to pan, wheel or pinch to zoom); the views as a list (click: the camera moves
 *   there, the parts take that view's places and looks, its cut and magnifier); the parts list (click a row: its parts light up;
 *   click a part: its row lights up); the animation with play, pause and a time slider; the magnifier as a round lens.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as A from './anim.js';

const b64 = (s, T) => { const bin = atob(s), u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return new T(u.buffer); };
const el = (tag, props = {}, ...kids) => { const n = document.createElement(tag); for (const [k, v] of Object.entries(props)) { if (k.startsWith('on')) n.addEventListener(k.slice(2), v); else if (k === 'text') n.textContent = v; else n.setAttribute(k, v); } for (const c of kids) if (c) n.append(c); return n; };

export function start(data) {
  const W = data.words || {};
  const side = document.getElementById('side'), stage = document.getElementById('stage');
  const canvas = el('canvas', { class: 'main', 'aria-label': W.model || 'Model' });
  stage.append(canvas);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true }); } catch {
    stage.append(el('div', { id: 'msg', text: W.noWebgl || 'This browser cannot show 3D (WebGL 2 is off or missing).' }));
    return null;
  }
  renderer.localClippingEnabled = true;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#ffffff');
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 2.2));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(1, 2, 1.5); scene.add(sun);
  // parts once, placed parts as meshes + their edges
  const geos = new Map();
  for (const p of data.parts) {
    const P = b64(p.P, Float32Array), I = b64(p.I, Uint32Array);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(P, 3));
    g.setIndex(new THREE.BufferAttribute(I, 1));
    const flat = g.toNonIndexed(); flat.computeVertexNormals();
    geos.set(p.id, { g: flat, edges: new THREE.EdgesGeometry(flat, 20), colour: p.colour });
  }
  const objs = new Map();
  for (const i of data.instances) {
    const G = geos.get(i.part);
    if (!G) continue;
    const mat = new THREE.MeshStandardMaterial({ color: G.colour, roughness: 0.7, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });
    const mesh = new THREE.Mesh(G.g, mat), edges = new THREE.LineSegments(G.edges, new THREE.LineBasicMaterial({ color: 0x1b1b1b }));
    for (const o of [mesh, edges]) { o.matrixAutoUpdate = false; scene.add(o); }
    mesh.userData.inst = i.id;
    objs.set(i.id, { mesh, edges, base: i.m, colour: G.colour, name: i.name });
  }
  const box = new THREE.Box3();
  for (const o of objs.values()) { o.mesh.matrix.fromArray(o.base); o.mesh.updateMatrixWorld(true); box.expandByObject(o.mesh); }
  const R = Math.max(box.getSize(new THREE.Vector3()).length() / 2, 1);
  // cameras: orthographic and perspective, as each view says
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 1e7), persp = new THREE.PerspectiveCamera(35, 1, 0.1, 1e7);
  let cam = ortho, half = R, current = null, picked = new Set(), playing = false, time = 0;
  const controls = new OrbitControls(ortho, canvas);
  controls.screenSpacePanning = true;
  controls.addEventListener('change', draw);
  function size() {
    const w = Math.max(1, stage.clientWidth), h = Math.max(1, stage.clientHeight);
    renderer.setSize(w, h, false);
    const a = w / h;
    ortho.left = -half * a; ortho.right = half * a; ortho.top = half; ortho.bottom = -half; ortho.updateProjectionMatrix();
    persp.aspect = a; persp.updateProjectionMatrix();
    return { w, h };
  }
  function setCamera(c) {
    cam = c.type === 'persp' ? persp : ortho;
    controls.object = cam;
    const d = new THREE.Vector3(...c.pos).sub(new THREE.Vector3(...c.target));
    const dist = Math.max(d.length(), R * 4);
    cam.up.set(...c.up);
    cam.position.copy(new THREE.Vector3(...c.target).add(d.normalize().multiplyScalar(cam === ortho ? dist : d.length() || dist)));
    if (cam === ortho) { half = c.height; ortho.zoom = 1; ortho.near = Math.max(dist - R * 3, dist * 1e-4); ortho.far = dist + R * 3; } else { persp.fov = c.fov || 35; }
    controls.target.set(...c.target);
    size();
    cam.lookAt(controls.target);
    controls.update();
  }
  /** A view's places and looks (and the animation's at `time` when there is one). */
  function apply(v, at = null) {
    const clip = [];
    let inter = false;
    if (v.look?.section) { const { n, c } = v.look.section; clip.push(new THREE.Plane(new THREE.Vector3(-n[0], -n[1], -n[2]), c)); }
    else if (v.look?.box) { const { min, max } = v.look.box; inter = true; for (let k = 0; k < 3; k++) { const a = [0, 0, 0]; a[k] = 1; clip.push(new THREE.Plane(new THREE.Vector3(...a), -max[k]), new THREE.Plane(new THREE.Vector3(...a.map((x) => -x)), min[k])); } }
    const poses = new Map(), vals = new Map();
    if (at !== null && data.anim) {
      const back = new Map(Object.entries(data.animIds || {}).map(([id, n]) => [n, id]));
      for (const p of A.posesAt(data.anim, at)) { const id = back.get(p.path[0]); if (id) poses.set(id, p.m); }
      for (const [k, val] of A.propsAt(data.anim, at)) { const [tg, prop] = k.split('|'); const id = back.get(Number(tg.slice(4))); if (id) vals.set(id + '|' + prop, val); }
    }
    for (const [id, o] of objs) {
      const st = v.state[id] || {};
      let hide = !!st.h, op = st.o ?? 1, col = st.c || o.colour;
      if (vals.has(id + '|visible')) hide = vals.get(id + '|visible')[0] < 0.5;
      if (vals.has(id + '|opacity')) op = vals.get(id + '|opacity')[0];
      if (vals.has(id + '|color')) { const c = vals.get(id + '|color'); col = '#' + c.map((x) => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, '0')).join(''); }
      const M = poses.get(id) || v.world[id] || o.base;
      for (const x of [o.mesh, o.edges]) { x.matrix.fromArray(M); x.matrixWorldNeedsUpdate = true; x.visible = !hide; x.material.clippingPlanes = clip; x.material.clipIntersection = inter; }
      const m = o.mesh.material, lit = picked.has(id);
      m.color.set(v.look?.style === 'lines' ? '#ffffff' : col); m.opacity = op; m.transparent = op < 1; m.depthWrite = op >= 1;
      m.emissive.set(lit ? '#d9822b' : '#000000'); m.emissiveIntensity = lit ? 0.5 : 0;
      m.side = clip.length ? THREE.DoubleSide : THREE.FrontSide;
      o.edges.visible = !hide && v.look?.style !== 'shaded';
    }
    if (at !== null && data.anim) { const c = A.cameraAt(data.anim, at); if (c) setCamera({ type: c.persp ? 'persp' : 'ortho', pos: c.eye, target: c.target, up: v.camera.up, height: c.height, fov: c.fov }); }
  }
  // the magnifier: a second, small renderer behind a round window
  const lensCanvas = el('canvas'), lens = el('div', { id: 'lens' }, lensCanvas);
  lens.hidden = true;
  stage.append(lens);
  let lensR = null;
  function drawLens(v, w, h) {
    const g = v.look?.magnifier;
    if (!g) { lens.hidden = true; return; }
    lens.hidden = false;
    const r = g.r * h, cx = g.at[0] * h, cy = h - g.at[1] * h;
    Object.assign(lens.style, { left: (cx - r) + 'px', top: (cy - r) + 'px', width: 2 * r + 'px', height: 2 * r + 'px' });
    if (!lensR) { lensR = new THREE.WebGLRenderer({ canvas: lensCanvas, antialias: true }); lensR.localClippingEnabled = true; }
    lensR.setPixelRatio(renderer.getPixelRatio()); lensR.setSize(2 * r, 2 * r);
    // a camera narrowed on the target point
    // a camera narrowed on the target: the square of 2r / zoom pixels round it fills the lens
    const lc = cam.clone();
    if (cam === ortho) {
      const pw = (ortho.top - ortho.bottom) / ortho.zoom / h;   // world units a pixel
      const cxw = (g.target[0] * h - w / 2) * pw, cyw = (g.target[1] * h - h / 2) * pw, e = (r / g.zoom) * pw;
      lc.left = cxw - e; lc.right = cxw + e; lc.top = cyw + e; lc.bottom = cyw - e; lc.zoom = 1;
      lc.updateProjectionMatrix();
    } else { lc.setViewOffset(w, h, g.target[0] * h - r / g.zoom, h - g.target[1] * h - r / g.zoom, 2 * r / g.zoom, 2 * r / g.zoom); lc.updateProjectionMatrix(); }
    lensR.render(scene, lc);
  }
  function draw() {
    if (!current) return;
    const { w, h } = { w: stage.clientWidth || 1, h: stage.clientHeight || 1 };
    renderer.render(scene, cam);
    drawLens(current, w, h);
  }
  // the side panel: title, views, parts list, animation
  side.append(el('h1', { text: data.title || '' }));
  const viewList = el('ul', { id: 'views' });
  const views = data.views.length ? data.views : [data.start];
  views.forEach((v, k) => viewList.append(el('li', {}, el('button', { type: 'button', 'data-view': String(k), onclick: () => go(k) }, v.name))));
  side.append(el('h2', { text: W.views || 'Views' }), viewList);
  const tbody = el('tbody');
  const rows = data.list.rows.map((r, k) => {
    const tr = el('tr', { 'data-row': String(k), 'aria-selected': 'false', onclick: () => pick(r.insts) }, ...r.cells.map((c) => el('td', { text: c })));
    tbody.append(tr);
    return tr;
  });
  side.append(el('h2', { text: W.parts || 'Parts list' }), el('table', {}, el('thead', {}, el('tr', {}, ...data.list.columns.map((c) => el('th', { scope: 'col', text: c })))), tbody));
  function pick(ids) {
    picked = new Set(ids);
    data.list.rows.forEach((r, k) => rows[k].setAttribute('aria-selected', String(r.insts.some((i) => picked.has(i)))));
    apply(current, data.anim && time ? time : null); draw();
  }
  const ray = new THREE.Raycaster();
  let down = null;
  canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerup', (e) => {
    if (!down || Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) return;
    const r = canvas.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), cam);
    const hit = ray.intersectObjects([...objs.values()].filter((o) => o.mesh.visible).map((o) => o.mesh), false)[0];
    const id = hit?.object.userData.inst;
    const row = id ? data.list.rows.find((x) => x.insts.includes(id)) : null;
    pick(row ? row.insts : []);
    if (row) rows[data.list.rows.indexOf(row)].scrollIntoView({ block: 'nearest' });
  });
  function go(k, animate = true) {
    const v = views[k];
    current = v;
    for (const b of viewList.querySelectorAll('button')) b.setAttribute('aria-current', String(b.dataset.view === String(k)));
    apply(v);
    if (!animate || !current.camera) { setCamera(v.camera); draw(); return; }
    // the camera glides there
    const from = { pos: cam.position.toArray(), target: controls.target.toArray(), height: half };
    const t0 = performance.now(), dur = 600;
    const step = (now) => {
      const s = Math.min(1, (now - t0) / dur), e = s * s * (3 - 2 * s);
      const lerp = (a, b) => a.map((x, i) => x + (b[i] - x) * e);
      setCamera({ ...v.camera, pos: lerp(from.pos, v.camera.pos), target: lerp(from.target, v.camera.target), height: from.height + (v.camera.height - from.height) * e });
      draw();
      if (s < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if (data.anim) {
    const range = el('input', { type: 'range', min: '0', max: String(data.anim.length), step: String(1 / data.anim.fps), value: '0', 'aria-label': W.time || 'Time' });
    const btn = el('button', { type: 'button', text: W.play || 'Play' });
    const bar = el('div', { id: 'play' }, btn, range);
    stage.append(bar);
    let last = 0;
    const tick = (now) => {
      if (!playing) return;
      time += (now - last) / 1000; last = now;
      if (time >= data.anim.length) { time = data.anim.length; playing = false; btn.textContent = W.play || 'Play'; }
      range.value = String(time);
      apply(current, time); draw();
      if (playing) requestAnimationFrame(tick);
    };
    btn.addEventListener('click', () => { playing = !playing; btn.textContent = playing ? (W.pause || 'Pause') : (W.play || 'Play'); if (playing) { if (time >= data.anim.length) time = 0; last = performance.now(); requestAnimationFrame(tick); } });
    range.addEventListener('input', () => { playing = false; btn.textContent = W.play || 'Play'; time = Number(range.value); apply(current, time); draw(); });
  }
  new ResizeObserver(() => { size(); draw(); }).observe(stage);
  size();
  go(0, false);
  const api = { go, pick, get current() { return views.indexOf(current); }, get picked() { return [...picked]; }, get time() { return time; }, renderer, objs };
  window.__manualViewer = api;
  return api;
}
