/* SPDX-License-Identifier: Apache-2.0 */
/**
 * asm-ui.js — the assembly panel's tools (UI module): part properties, BOM (+ CSV), joint limits, exploded views
 * (steps, auto, slider, trails), moving unjoined parts by hand (typed values or three's TransformControls gizmo),
 * and the whole-assembly exports (STEP via the exact worker's asmStep, STL, 3MF, drawing PDF, BOM CSV).
 * The logic lives in assembly.js, bom.js, explode.js, asm-drawing.js and measure-brep.js (Node-tested).
 *
 *   createAsmTools(ctx) → { instSections(inst), jointSections(joint), rootSections(), displayWorld(world), afterShow(),
 *     pick(hit) → bool (true when a tool took the click), keydown(ev) → bool, exportCmd(cmd), printMesh(), reset(), state }
 * Exploded state (which view, slider position) is page state: it changes only what is drawn and what the drawing
 * shows, never joints or `place`.
 */
import { t } from './i18n.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import * as BOM from './bom.js';
import { assemblyIfc } from './ifc-export.js';
import { evaluateVars } from './params.js';
import { readPart } from './part.js';
import * as EX from './explode.js';
import { assemblySheet, assemblyMesh, assembly3mf, balloonsFor } from './asm-drawing.js';
import { exactWhy } from './exact-client.js';

const DIRS = { x: [1, 0, 0], '-x': [-1, 0, 0], y: [0, 1, 0], '-y': [0, -1, 0], z: [0, 0, 1], '-z': [0, 0, -1] };
/** The step direction choices (a function: labels come from the language file when shown). */
const dirLabels = () => [['x', '+X'], ['-x', '−X'], ['y', '+Y'], ['-y', '−Y'], ['z', '+Z'], ['-z', '−Z'], ['face', t('ui.asm.dir.face')], ['drag', t('ui.asm.dir.drag')]];

export function createAsmTools(ctx) {
  const { el, view, THREE, A, V } = ctx;
  const st = { viewId: null, t: 1, draft: null, awaitFace: null, gizmo: null };
  const f3 = (v) => V.fmt(v, 3);
  const asm = () => ctx.asm;
  const instName = (id) => asm().instances.find((i) => i.id === id)?.name || id;
  const activeView = () => (st.viewId ? (asm().views || []).find((v) => v.id === st.viewId) || null : null);

  // ---------------------------------------------------------------- what is drawn
  function displayWorld(world) {
    const v = activeView();
    if (!v || !v.steps.length || st.gizmo?.purpose === 'move') return world;
    return EX.exploded(world, EX.offsets(v, st.t));
  }
  const centreOf = (inst, world) => {
    const b = ctx.builds.get(inst.part)?.stats?.bbox;
    return V.applyMat(world.get(inst.id), b ? V.mul(V.add(b.min, b.max), 0.5) : [0, 0, 0]);
  };
  function afterShow() {
    const v = activeView();
    if (v && ctx.place && st.t > 0) {
      const centres = new Map(asm().instances.map((i) => [i.id, centreOf(i, ctx.place.world)]));
      const pts = [];
      for (const tr of EX.trails(v, centres, st.t)) for (let k = 0; k + 1 < tr.pts.length; k++) pts.push(...tr.pts[k], ...tr.pts[k + 1]);
      if (pts.length) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
        const line = new THREE.LineSegments(geo, new THREE.LineDashedMaterial({ color: ctx.tokens().ink || '#1d232b', dashSize: view.size / 40, gapSize: view.size / 80 }));
        line.computeLineDistances();
        view.setOverlay('asm-trails', line);
      } else view.setOverlay('asm-trails', null);
    } else view.setOverlay('asm-trails', null);
    if (st.gizmo) placeProxy();
    view.render();
  }

  // ---------------------------------------------------------------- the gizmo (TransformControls on a proxy at the parts' middle)
  function placeProxy() {
    const g = st.gizmo, shown = displayWorld(ctx.place.world);
    const cs = g.insts.map((id) => centreOf(asm().instances.find((i) => i.id === id), shown));
    const c = V.mul(cs.reduce((s, p) => V.add(s, p), [0, 0, 0]), 1 / cs.length);
    if (!g.dragging) { g.proxy.position.set(c[0], c[1], c[2]); g.proxy.quaternion.identity(); g.proxy.updateMatrixWorld(true); g.start = g.proxy.matrixWorld.clone(); }
  }
  function startGizmo(insts, mode, purpose, onDone) {
    stopGizmo();
    const proxy = new THREE.Object3D();
    view.scene.add(proxy);
    const tc = new TransformControls(view.camera, view.canvas);
    tc.setMode(mode);
    tc.setSize(0.9);
    const g = st.gizmo = { tc, proxy, insts, purpose, mode, dragging: false, start: null, base: null };
    placeProxy();
    tc.attach(proxy);
    view.setOverlay('asm-gizmo', tc.getHelper());
    tc.addEventListener('dragging-changed', (e) => {
      view.controls.enabled = !e.value;
      g.dragging = e.value;
      if (e.value) g.base = new Map(view.instances.filter((o) => insts.includes(o.id)).map((o) => [o.id, [...o.matrix]]));
    });
    tc.addEventListener('change', () => view.render());
    tc.addEventListener('objectChange', () => {
      const d = deltaOf(g);
      for (const o of view.instances) if (g.base?.has(o.id)) { const m = V.matMul(d, g.base.get(o.id)); for (const x of [o.mesh, o.edges]) { x.matrix.fromArray(m); x.matrixWorldNeedsUpdate = true; } }
      view.render();
    });
    tc.addEventListener('mouseUp', () => { const d = deltaOf(g); setTimeout(() => onDone(d), 0); });
    ctx.renderAll();
  }
  function deltaOf(g) {
    g.proxy.updateMatrixWorld(true);
    const m = g.proxy.matrixWorld.clone().multiply(g.start.clone().invert());
    return m.toArray().map((v) => (Math.abs(v) < 1e-12 ? 0 : v));
  }
  function stopGizmo() {
    const g = st.gizmo;
    if (!g) return;
    st.gizmo = null;
    g.tc.detach(); g.tc.dispose();
    view.setOverlay('asm-gizmo', null);
    g.proxy.removeFromParent();
    view.controls.enabled = true;
  }

  // ---------------------------------------------------------------- moving by hand
  function moveBy(id, opts, label) {
    const inst = asm().instances.find((i) => i.id === id);
    try {
      const np = A.movePlace(inst.place, opts);
      ctx.commitAsm(label, () => A.moveInstance(asm(), id, np));
      ctx.status(t('ui.asm.move.done', { name: inst.name }));
    } catch (err) { ctx.status(err.message); }
  }
  function startDrag(id, mode) {
    if (st.gizmo?.purpose === 'move' && st.gizmo.insts[0] === id && st.gizmo.mode === mode) { stopGizmo(); ctx.renderAll(); return; }
    startGizmo([id], mode, 'move', (d) => {
      const inst = asm().instances.find((i) => i.id === id);
      if (!inst || d.every((v, k) => Math.abs(v - [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1][k]) < 1e-12)) return;
      try { ctx.commitAsm(mode === 'rotate' ? t('ui.asm.undo.turn_hand') : t('ui.asm.undo.move_hand'), () => A.moveInstance(asm(), id, V.matMul(d, inst.place))); } catch (err) { ctx.status(err.message); }
    });
    ctx.status(mode === 'rotate' ? t('ui.asm.drag.turn_hint') : t('ui.asm.drag.move_hint'), true);
  }

  function instSections(inst) {
    const out = [];
    const p = asm().parts[inst.part];
    const pid = inst.part;
    const setP = (label, fn) => ctx.commitAsm(label, () => fn(asm().parts[pid]));
    // properties of the part (shared by its copies)
    const num = el('input', { type: 'text', className: 'pc-input', id: 'pc-part-number', value: p.number || '', maxLength: 40, 'data-part-number': '' });
    num.addEventListener('change', () => setP(t('ui.asm.part.number'), (x) => { const v = BOM.readPartProps({ number: num.value }).number; if (v) x.number = v; else delete x.number; }));
    const desc = el('input', { type: 'text', className: 'pc-input', id: 'pc-part-desc', value: p.description || '', maxLength: 200, 'data-part-desc': '' });
    desc.addEventListener('change', () => setP(t('ui.asm.part.description'), (x) => { const v = BOM.readPartProps({ description: desc.value }).description; if (v) x.description = v; else delete x.description; }));
    const known = BOM.presetOf(p.material);   // by name, or by density when the part was saved in another language
    const mat = ctx.selectInput([['', t('part.material.none')], ...BOM.MATERIALS.map((m, i) => [String(i), t('ui.asm.material.option', { name: m.name, density: m.density })]), ['custom', t('ui.asm.material.custom')]], p.material ? (known >= 0 ? String(known) : 'custom') : '', (v) => {
      if (v === 'custom') { setP(t('part.material.undo'), (x) => { x.material = { name: 'Custom', density: p.material?.density || 1 }; }); return; }   // i18n-ignore: 'Custom' is the material name stored in the file
      setP(t('part.material.undo'), (x) => { const m = v === '' ? null : BOM.MATERIALS[Number(v)]; if (m) x.material = { name: m.name, density: m.density }; else delete x.material; });
    });
    mat.dataset.partMaterial = '';
    const grid = [el('span', { className: 'pc-props-sub' }, t('ui.asm.part.props', { name: p.name })), ...ctx.field(t('ui.asm.part.number'), num), ...ctx.field(t('ui.asm.part.description'), desc), ...ctx.field(t('part.material'), mat)];
    if (p.material && !known) {
      const dn = ctx.numInput(p.material.density, (v) => setP(t('ui.asm.part.density_undo'), (x) => { x.material = BOM.readMaterial({ name: x.material?.name || 'Custom', density: v }); }), { min: 0.001, max: BOM.MAX_DENSITY });   // i18n-ignore: 'Custom' is the stored material name
      dn.dataset.partDensity = '';
      grid.push(...ctx.field(t('ui.asm.part.density'), dn));
    }
    const vol = ctx.builds.get(pid)?.stats?.volume;
    if (p.material && vol) grid.push(el('span', { className: 'k' }, t('ui.asm.part.mass')), el('span', {}, t(ctx.builds.get(pid).exact ? 'ui.asm.mass' : 'ui.asm.mass_facets', { mass: f3(BOM.massOf(vol, p.material.density)) })));
    out.push(el('div', { className: 'pc-block pc-props' }, ...grid));
    // moving by hand: only parts no joint ties to the grounded one
    const free = A.freeIds(asm()).has(inst.id);
    if (!free) out.push(el('p', { className: 'pc-note' }, asm().instances[0] === inst ? t('ui.asm.move.grounded') : t('ui.asm.move.joined')));
    else {
      const d = [0, 0, 0];
      const ins = ['X', 'Y', 'Z'].map((ax, k) => { const i = el('input', { type: 'number', className: 'pc-input', id: 'pc-move-' + ax.toLowerCase(), value: '0', step: 'any', 'data-move': ax.toLowerCase() }); i.addEventListener('change', () => { d[k] = Number(i.value) || 0; }); return i; });
      const rot = { axis: 'y', angle: 90 };
      const ang = el('input', { type: 'number', className: 'pc-input', id: 'pc-turn-angle', value: '90', step: 'any', 'data-turn-angle': '' });
      ang.addEventListener('change', () => { rot.angle = Number(ang.value) || 0; });
      const axSel = ctx.selectInput([['x', 'X'], ['y', 'Y'], ['z', 'Z']], 'y', (v) => { rot.axis = v; });
      const c = () => centreOf(inst, ctx.place.world);
      const g = st.gizmo?.purpose === 'move' && st.gizmo.insts[0] === inst.id ? st.gizmo.mode : null;
      out.push(el('div', { className: 'pc-block pc-props' },
        el('span', { className: 'pc-props-sub' }, t('ui.asm.move.title')),
        ...ctx.field(t('ui.asm.move.delta', { axis: 'X' }), ins[0]), ...ctx.field(t('ui.asm.move.delta', { axis: 'Y' }), ins[1]), ...ctx.field(t('ui.asm.move.delta', { axis: 'Z' }), ins[2]),
        el('span', { className: 'span pc-actions' }, ctx.btn(t('ui.asm.move.go'), () => { ins.forEach((i, k) => { d[k] = Number(i.value) || 0; }); moveBy(inst.id, { move: [...d] }, t('ui.asm.move.go')); }, 'pc-btn', { 'data-move-go': '' })),
        ...ctx.field(t('ui.asm.turn.about'), axSel), ...ctx.field(t('ui.asm.turn.angle'), ang),
        el('span', { className: 'span pc-actions' }, ctx.btn(t('ui.asm.turn.go'), () => { rot.angle = Number(ang.value) || 0; moveBy(inst.id, { rotate: { axis: DIRS[rot.axis], angle: rot.angle, about: c() } }, t('ui.asm.turn.go')); }, 'pc-btn', { 'data-turn-go': '' }),
          ctx.btn(g === 'translate' ? t('ui.asm.drag.stop_move') : t('ui.asm.drag.move'), () => startDrag(inst.id, 'translate'), 'pc-btn', { 'aria-pressed': String(g === 'translate'), 'data-drag-move': '' }),
          ctx.btn(g === 'rotate' ? t('ui.asm.drag.stop_turn') : t('ui.asm.drag.turn'), () => startDrag(inst.id, 'rotate'), 'pc-btn', { 'aria-pressed': String(g === 'rotate'), 'data-drag-turn': '' }))));
    }
    return out;
  }

  // ---------------------------------------------------------------- joint limits (one pair per value the joint lets move; 0.4 P19)
  function jointSections(j) {
    const dof = A.JOINT_DOF[j.type] || [];
    if (!dof.length) return [];
    const setJ = (label, fn) => ctx.commitAsm(label, () => fn(asm().joints.find((x) => x.id === j.id)));
    const grid = [el('span', { className: 'pc-props-sub' }, t('asm.limits.title'))];
    /** The joint's limits as { value: {min, max} } (the one-value shape read as its first value). */
    const keyed = (x) => { const out = {}; for (const k of dof) { const L = A.limitOf(x, k); if (L) out[k] = { ...L }; } return out; };
    /** Written back in the one-value shape when only a revolute's / slider's own value is limited (version 2 files read it). */
    const store = (x, m) => { const ks = Object.keys(m); if (!ks.length) delete x.limits; else if (dof.length === 1 && ks[0] === dof[0]) x.limits = m[dof[0]]; else x.limits = m; };
    for (const k of dof) {
      const unit = A.VALUE_UNIT[k] === 'deg' ? '°' : 'mm';
      const L = A.limitOf(j, k), name = t('asm.joint.value.' + k.toLowerCase());
      const box = ctx.check(t('asm.limits.hold', { value: name }), !!L, (on) => setJ(t('asm.limits.undo'), (x) => {
        const m = keyed(x);
        if (!on) delete m[k];
        else { const v = x[k] || 0, w = unit === '°' ? 90 : 50; m[k] = { min: Math.min(v, 0), max: Math.max(v, 0) + w }; }
        store(x, m);
      }));
      box.dataset.limitFor = k;
      grid.push(box);
      if (L) {
        const setL = (end) => (v) => { try { const m = keyed(j); A.readLimits({ ...m, [k]: { ...m[k], [end]: v } }, j.type); setJ(t('asm.limits.undo'), (x) => { const mm = keyed(x); mm[k] = { ...mm[k], [end]: v }; store(x, mm); }); } catch (err) { ctx.status(err.message); ctx.renderAll(); } };
        const mn = ctx.numInput(L.min, setL('min')), mx = ctx.numInput(L.max, setL('max'));
        mn.dataset.limitMin = k; mx.dataset.limitMax = k;
        grid.push(...ctx.field(t('asm.limits.min', { value: name, unit }), mn), ...ctx.field(t('asm.limits.max', { value: name, unit }), mx));
      }
    }
    return [el('div', { className: 'pc-block pc-props' }, ...grid)];
  }

  // ---------------------------------------------------------------- BOM + exploded views (no selection)
  function bomSection() {
    const rows = BOM.bomRows(asm(), ctx.builds);
    const head = el('tr', {}, ...[t('ui.asm.bom.item'), t('ui.asm.bom.qty'), t('ui.asm.part.number'), t('ui.asm.bom.name'), t('part.material'), t('ui.asm.bom.mass_each')].map((h) => el('th', { scope: 'col' }, h)));
    const body = rows.map((r) => el('tr', {}, el('td', {}, String(r.item)), el('td', {}, String(r.qty)), el('td', {}, r.number), el('td', {}, r.name), el('td', {}, r.material), el('td', {}, r.massEach === null ? '' : t('ui.asm.mass', { mass: f3(r.massEach) }))));
    const total = rows.length && rows.every((r) => r.massTotal !== null) ? rows.reduce((s, r) => s + r.massTotal, 0) : null;
    return [el('div', { className: 'pc-block' }, el('span', { className: 'pc-props-sub' }, t('ui.asm.bom.title')),
      el('table', { className: 'pc-bom', 'data-bom': '' }, el('thead', {}, head), el('tbody', {}, ...body)),
      el('p', { className: 'pc-note' }, total === null ? t('ui.asm.bom.no_mass') : t(rows.every((r) => r.exact) ? 'ui.asm.bom.total_exact' : 'ui.asm.bom.total', { mass: f3(total), n: rows.reduce((s, r) => s + r.qty, 0) })),
      el('div', { className: 'pc-actions' }, ctx.btn(t('ui.asm.bom.csv'), () => exportCmd('export-bom'), 'pc-btn', { 'data-bom-csv': '' }), ctx.btn(t('ui.asm.bom.drawing'), () => exportCmd('export-drawing'), 'pc-btn', { 'data-asm-drawing': '' })))];
  }

  function explodeSection() {
    const views = asm().views || [];
    const v = activeView();
    const out = [el('span', { className: 'pc-props-sub' }, t('ui.asm.explode.title'))];
    const sel = ctx.selectInput([['', t('ui.asm.explode.none')], ...views.map((x) => [x.id, x.name])], v ? v.id : '', (id) => { st.viewId = id || null; st.t = 1; st.draft = null; ctx.showInstances(); ctx.renderAll(); });
    sel.dataset.explodeView = '';
    out.push(el('div', { className: 'pc-props' }, ...ctx.field(t('ui.asm.explode.view'), sel)));
    const items = () => asm().instances.map((i) => {
      const bb = ctx.builds.get(i.part)?.stats?.bbox, W = ctx.place.world.get(i.id);
      if (!bb) return { id: i.id, box: { min: [0, 0, 0], max: [0, 0, 0] } };
      const pts = [0, 1, 2, 3, 4, 5, 6, 7].map((k) => V.applyMat(W, [k & 1 ? bb.max[0] : bb.min[0], k & 2 ? bb.max[1] : bb.min[1], k & 4 ? bb.max[2] : bb.min[2]]));
      return { id: i.id, box: { min: [0, 1, 2].map((c) => Math.min(...pts.map((p) => p[c]))), max: [0, 1, 2].map((c) => Math.max(...pts.map((p) => p[c]))) } };
    });
    const auto = (mode) => {
      if (asm().instances.length < 2) { ctx.status(t('ui.asm.explode.need_two')); return; }
      const steps = EX.autoSteps(items(), mode, { tree: mode === 'joints' ? A.jointTree(asm(), ctx.builds, ctx.place.world) : [] });
      if (!steps.length) { ctx.status(mode === 'joints' ? t('ui.asm.explode.no_joints') : t('ui.asm.explode.nothing')); return; }
      const nv = ctx.commitAsm(t('ui.asm.undo.auto'), () => { const w = EX.newView(asm(), t(mode === 'joints' ? 'ui.asm.explode.name_joints' : 'ui.asm.explode.name_radial', { n: (asm().views?.length || 0) + 1 })); for (const s of steps) EX.addStep(asm(), w, s.insts, s.dir, s.dist); return w; });
      st.viewId = nv.id; st.t = 1; ctx.showInstances(); ctx.renderAll();
      ctx.status(t('ui.asm.explode.made', { name: nv.name, n: steps.length }));
    };
    out.push(el('div', { className: 'pc-actions' },
      ctx.btn(t('ui.asm.explode.new'), () => { const nv = ctx.commitAsm(t('ui.asm.undo.new_view'), () => EX.newView(asm())); st.viewId = nv.id; st.t = 1; st.draft = { insts: new Set(), dir: 'y', dist: 50 }; ctx.showInstances(); ctx.renderAll(); }, 'pc-btn', { 'data-explode-new': '' }),
      ctx.btn(t('ui.asm.explode.auto_radial'), () => auto('radial'), 'pc-btn', { 'data-explode-auto': 'radial' }),
      ctx.btn(t('ui.asm.explode.auto_joints'), () => auto('joints'), 'pc-btn', { 'data-explode-auto': 'joints', disabled: !asm().joints.length })));
    if (!v) { out.push(el('p', { className: 'pc-note' }, t('ui.asm.explode.note'))); return [el('div', { className: 'pc-block' }, ...out)]; }
    const setV = (label, fn) => ctx.commitAsm(label, () => fn((asm().views || []).find((x) => x.id === v.id)));
    const name = el('input', { type: 'text', className: 'pc-input', id: 'pc-explode-name', value: v.name, maxLength: 60 });
    name.addEventListener('change', () => { const nm = name.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 60); if (nm) setV(t('ui.asm.undo.rename_view'), (x) => { x.name = nm; }); });
    const slider = el('input', { type: 'range', className: 'span pc-range', min: '0', max: '1', step: '0.01', value: String(st.t), 'aria-label': t('ui.asm.explode.slider'), 'data-explode-slider': '' });
    slider.addEventListener('input', () => { st.t = Number(slider.value); ctx.showInstances(); });
    out.push(el('div', { className: 'pc-props' }, ...ctx.field(t('ui.asm.bom.name'), name), el('span', { className: 'k' }, t('ui.asm.explode.assembled')), el('span', { className: 'pc-range-end' }, t('ui.asm.explode.exploded')), slider));
    out.push(el('ol', { className: 'pc-list', 'data-explode-steps': '' }, ...v.steps.map((s, k) => el('li', {},
      el('span', { className: 'grow' }, t('ui.asm.explode.step', { n: k + 1, parts: s.insts.map(instName).join(', '), dist: f3(s.dist), dir: s.dir.map((c) => f3(c)).join(', ') })),
      ctx.btn(t('ui.asm.explode.remove'), () => setV(t('ui.asm.undo.remove_step'), (x) => { x.steps = x.steps.filter((y) => y.id !== s.id); }), 'pc-btn pc-btn-sm')))));
    if (!v.steps.length) out.push(el('p', { className: 'pc-note' }, t('ui.asm.explode.no_steps')));
    // a new step: parts, direction, distance
    const d = st.draft ||= { insts: new Set(), dir: 'y', dist: 50 };
    const boxes = asm().instances.map((i) => ctx.check(i.name, d.insts.has(i.id), (on) => { if (on) d.insts.add(i.id); else d.insts.delete(i.id); }));
    boxes.forEach((b, k) => { b.dataset.stepInst = asm().instances[k].id; });
    const dirSel = ctx.selectInput(dirLabels(), d.dir, (val) => { d.dir = val; d.faceDir = null; ctx.renderAll(); });
    dirSel.dataset.stepDir = '';
    const dist = ctx.numInput(d.dist, (val) => { d.dist = val; });
    dist.dataset.stepDist = '';
    const grid = [el('span', { className: 'pc-props-sub' }, t('ui.asm.step.title')), ...boxes, ...ctx.field(t('ui.asm.step.direction'), dirSel)];
    if (d.dir !== 'drag') grid.push(...ctx.field(t('ui.asm.step.distance'), dist));
    if (d.dir === 'face') grid.push(el('span', { className: 'span pc-note' }, d.faceDir ? t('ui.asm.step.face_normal', { dir: d.faceDir.map((c) => f3(c)).join(', ') }) : t('ui.asm.step.click_face')));
    const add = () => {
      const insts = [...d.insts];
      if (!insts.length) { ctx.status(t('ui.asm.step.tick')); return; }
      if (d.dir === 'drag') {
        startGizmo(insts, 'translate', 'explode', (m) => {
          const vec = [m[12], m[13], m[14]], L = V.len(vec);
          stopGizmo();
          if (L < 1e-6) { ctx.renderAll(); return; }
          setV(t('ui.asm.undo.step'), (x) => EX.addStep(asm(), x, insts, vec, L));
          st.t = 1; ctx.status(t('ui.asm.step.added', { dist: f3(L) }));
        });
        ctx.status(t('ui.asm.step.drag_hint'), true);
        return;
      }
      const dir = d.dir === 'face' ? d.faceDir : DIRS[d.dir];
      if (!dir) { ctx.status(t('ui.asm.step.face_first')); st.awaitFace = true; return; }
      try { setV(t('ui.asm.undo.step'), (x) => EX.addStep(asm(), x, insts, dir, d.dist)); st.t = 1; } catch (err) { ctx.status(err.message); }
    };
    grid.push(el('span', { className: 'span pc-actions' }, ctx.btn(d.dir === 'drag' ? t('ui.asm.step.drag_add') : t('ui.asm.step.add'), add, 'pc-btn is-primary', { 'data-step-add': '' }),
      ctx.btn(t('ui.asm.explode.delete'), () => { setV(t('ui.asm.undo.delete_view'), () => { asm().views = asm().views.filter((x) => x.id !== v.id); }); st.viewId = null; st.draft = null; ctx.showInstances(); ctx.renderAll(); }, 'pc-btn is-danger', { 'data-explode-delete': '' })));
    if (d.dir === 'face') st.awaitFace = true;
    out.push(el('div', { className: 'pc-props' }, ...grid));
    return [el('div', { className: 'pc-block' }, ...out)];
  }
  const rootSections = () => [...bomSection(), ...explodeSection()];

  /** A click in the view while a tool waits for a face (explode step direction). */
  function pick(h) {
    if (!st.awaitFace || !st.draft || st.draft.dir !== 'face' || !activeView()) return false;
    if (!h || h.kind !== 'face' || !h.inst || !h.normal) { ctx.status(t('ui.asm.pick.face')); return true; }
    const n = V.norm(h.normal);
    st.draft.faceDir = n.map((c) => +c.toFixed(12));
    st.awaitFace = false;
    ctx.renderAll();
    ctx.status(t('ui.asm.pick.done', { dir: n.map((c) => f3(c)).join(', ') }));
    return true;
  }
  function keydown(e) {
    if (e.key === 'Escape' && st.gizmo) { stopGizmo(); ctx.showInstances(); ctx.renderAll(); ctx.status(t('ui.asm.stopped')); return true; }
    return false;
  }
  function reset() { stopGizmo(); st.viewId = null; st.t = 1; st.draft = null; st.awaitFace = null; view.setOverlay('asm-trails', null); }

  // ---------------------------------------------------------------- exports of the whole assembly
  // i18n-ignore: download file name
  const baseName = () => (asm().name || 'assembly').replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().slice(0, 80) || 'assembly';
  async function exportCmd(cmd) {
    const a = asm(), world = ctx.place?.world;
    if (!world || a.instances.some((i) => !ctx.builds.get(i.part)?.mesh)) { ctx.status(t('ui.asm.export.building')); return; }
    const name = baseName();
    if (cmd === 'export-bom') {
      ctx.download(BOM.bomCsv(BOM.bomRows(a, ctx.builds)), name + ' - BOM.csv', 'text/csv');   // i18n-ignore: download file name
      ctx.status(t('ui.asm.export.bom', { file: name + ' - BOM.csv', n: Object.keys(a.parts).length }));
      return;
    }
    if (cmd === 'export-usd') {
      // 0.7 XF.8 (session usd): a prototype per part, an instance per placement (usd-partcraft.js on cc-usd, ./usd/)
      const { assemblyUsd } = await import('./usd-partcraft.js');
      const r = assemblyUsd(a, ctx.builds, world, { format: 'usdz', name: name + '.usdz' });
      ctx.download(new Blob([r.data], { type: 'model/vnd.usdz+zip' }), name + '.usdz', 'model/vnd.usdz+zip');
      ctx.status(t('usd.done', { name: name + '.usdz', n: r.report.instances }));
      return;
    }
    if (cmd === 'export-ifc') {
      // IFC4 with every property: a type per part (its properties), an occurrence per instance (its values; 0.5 WL.32)
      const r = assemblyIfc(a, ctx.builds, world, { evaluate: evaluateVars, readPart, bom: BOM.bomRows(a, ctx.builds), fileName: name + '.ifc' });
      ctx.download(r.text, name + '.ifc', 'application/x-step');
      ctx.status(t('ui.asm.export.ifc', { file: name + '.ifc', parts: Object.keys(a.parts).length, n: a.instances.length, props: r.counts.properties }));
      return;
    }
    if (cmd === 'export-stl') {
      const m = assemblyMesh(a.instances.map((i) => ({ mesh: ctx.builds.get(i.part).mesh, matrix: world.get(i.id) })));
      ctx.download(ctx.X.stlBinary(m, name), name + '.stl', 'model/stl');
      ctx.status(t('ui.asm.export.stl', { file: name + '.stl', n: m.indices.length / 3 }));
      return;
    }
    if (cmd === 'export-3mf') {
      const parts = new Map(Object.entries(a.parts).map(([pid, p]) => [pid, { name: p.name, mesh: ctx.builds.get(pid).mesh }]));
      ctx.download(assembly3mf(a.name, parts, a.instances.map((i) => ({ pid: i.part, name: i.name, matrix: world.get(i.id) }))), name + '.3mf', 'model/3mf');
      ctx.status(t('ui.asm.export.3mf', { file: name + '.3mf', n: parts.size, copies: a.instances.length }));
      return;
    }
    if (!ctx.useExact()) { ctx.status(exactWhy(t('kernel.what.asm_step'), t('ui.asm.export.no_exact'))); return; }
    if (cmd === 'export-step' || cmd === 'export-step214') {
      ctx.status(t('ui.asm.export.writing_step'), true);
      try {
        const r = await ctx.exact.call('asmStep', { name: a.name, schema: cmd === 'export-step214' ? 'AP214' : 'AP242', items: a.instances.map((i) => ({ part: a.parts[i.part].part, matrix: world.get(i.id) })) });
        ctx.download(r.text, name + '.step', 'model/step');
        ctx.status(t('ui.asm.export.step', { file: name + '.step', n: r.solids, schema: cmd === 'export-step214' ? 'AP214' : 'AP242' }));
      } catch (err) { ctx.status(t('ui.asm.export.step_failed', { error: err.message })); }
      return;
    }
    if (cmd === 'export-drawing') {
      ctx.status(t('ui.asm.export.drawing_making'), true);
      const v = activeView();
      const shown = v && v.steps.length ? EX.exploded(world, EX.offsets(v, 1)) : world;
      try {
        const data = await ctx.exact.call('asmViews', { view: 'iso', items: a.instances.map((i) => ({ part: a.parts[i.part].part, matrix: shown.get(i.id) })) });
        const rows = BOM.bomRows(a, ctx.builds);
        const trails = v && v.steps.length ? EX.trails(v, new Map(a.instances.map((i) => [i.id, centreOf(i, world)])), 1).map((tr) => tr.pts) : [];
        const sheet = assemblySheet(data, rows, { name: a.name, balloons: balloonsFor(rows, a.instances, data.anchors), trails, exploded: v && v.steps.length ? v.name : null });
        const pdf = await ctx.toPdf(sheet);
        ctx.download(pdf.bytes, name + ' - assembly drawing.pdf', 'application/pdf');   // i18n-ignore: download file name
        const ex = v && v.steps.length;
        ctx.status(t('ui.asm.export.drawing' + (sheet.balloons.length ? '_balloons' : '') + (ex ? '_exploded' : ''), { balloons: sheet.balloons.length, n: rows.length, view: ex ? v.name : '' }));
      } catch (err) { ctx.status(t('ui.asm.export.drawing_failed', { error: err.message })); }
    }
  }

  /** The whole assembly as one mesh (model space, Y up, mm) for the 3D-printing check (0.5 SG.4), or null while parts build. */
  function printMesh() {
    const a = asm(), world = ctx.place?.world;
    if (!world || a.instances.some((i) => !ctx.builds.get(i.part)?.mesh)) return null;
    return assemblyMesh(a.instances.map((i) => ({ mesh: ctx.builds.get(i.part).mesh, matrix: world.get(i.id) })));
  }
  return { instSections, jointSections, rootSections, displayWorld, afterShow, pick, keydown, exportCmd, printMesh, reset, stopGizmo, state: st, get gizmo() { return st.gizmo; } };
}
