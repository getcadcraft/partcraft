/* SPDX-License-Identifier: Apache-2.0 */
/**
 * measure-ui.js — the Measure tool (View › Views › Measure, key M) and Mass properties, in every workspace, on the part
 * or on an assembly's placed parts. UI module: the math is measure.js (Node-tested), the exact distances and mass
 * properties come from the exact worker (measure-brep.js ops measureDistance / measureMass).
 *
 *   createMeasure(ctx) → { active, start(), stop(), toggle(), pick(hit, ev), keydown(ev) → bool, mass(), refresh(), state }
 *   ctx = { view, THREE, el, status(msg, keep), exact, stage, useExact(), targets() → [{ id, name, pid, part, build, matrix,
 *           density }], blocked() → '' | why }
 * Clicks: a vertex, edge midpoint or circle centre within 10 px snaps (screen space); else an edge within 6 px (exact
 * kernel); else the face under the pointer; Shift+click takes the whole body. Two picks give the minimum distance with
 * its closest points drawn, ΔXYZ, angle, gaps. A third click starts again. Esc clears, Esc again closes.
 */
import * as ME from './measure.js';
import { MATERIALS } from './bom.js';
import { t } from './i18n.js';

const f = (v, dp = 4) => String(Number((Math.abs(v) < 1e-12 ? 0 : v).toFixed(dp)));

export function createMeasure(ctx) {
  const { view, THREE, el } = ctx;
  const cands = new WeakMap();
  const st = { active: false, picks: [], pair: null, mass: null, busy: false, density: null, seq: 0, hover: null };
  let card = null;

  const candsOf = (b) => { let c = cands.get(b); if (!c) { c = ME.snapCandidates(b); cands.set(b, c); } return c; };
  const projector = (M) => {
    const r = view.canvas.getBoundingClientRect();
    const v = new THREE.Vector3();
    return (p) => {
      const w = M ? [M[0] * p[0] + M[4] * p[1] + M[8] * p[2] + M[12], M[1] * p[0] + M[5] * p[1] + M[9] * p[2] + M[13], M[2] * p[0] + M[6] * p[1] + M[10] * p[2] + M[14]] : p;
      v.set(w[0], w[1], w[2]).project(view.camera);
      if (v.z < -1 || v.z > 1) return null;
      return [r.left + (v.x + 1) / 2 * r.width, r.top + (1 - v.y) / 2 * r.height];
    };
  };
  const toWorld = (M, p) => [M[0] * p[0] + M[4] * p[1] + M[8] * p[2] + M[12], M[1] * p[0] + M[5] * p[1] + M[9] * p[2] + M[13], M[2] * p[0] + M[6] * p[1] + M[10] * p[2] + M[14]];

  /** A view hit + pointer position → a pick, or null. */
  function resolve(h, x, y, shift) {
    const targets = ctx.targets();
    if (!targets.length) return null;
    const hitT = h && h.kind === 'face' ? (h.inst ? targets.find((t) => t.id === h.inst) : targets[0]) : h && h.kind === 'edge' ? targets[0] : null;
    if (shift && hitT) return { kind: 'body', target: hitT, matrix: hitT.matrix, local: h.point };
    // the nearest snap point and the nearest edge (exact kernel) under the pointer: the point wins when it is no farther
    // than the edge (+ 1 px), so a hole's rim picks the circle and its middle picks the centre
    let snap = null, edge = null;
    for (const list of [hitT ? [hitT] : [], targets]) {
      for (const t of list) {
        const pr = projector(t.matrix);
        const c = ME.snapAt(candsOf(t.build), pr, x, y, 10);
        if (c) { const s = pr(c.p); const d = Math.hypot(s[0] - x, s[1] - y); if (!snap || d < snap.d) snap = { c, t, d }; }
        if ((t.build.exact || t.build.named) && t.build.mesh?.edgeSegs) { const e = ME.nearestEdgeAt(t.build, pr, x, y, 6); if (e.index >= 0 && (!edge || e.d < edge.d)) edge = { ...e, t }; }
      }
      if (snap || edge) break;
    }
    if (snap && (!edge || snap.d <= edge.d + 1)) return { kind: snap.c.kind, target: snap.t, matrix: snap.t.matrix, local: snap.c.p, edge: snap.c.edge };
    if (edge) { const e = edge.t.build.edges[edge.index]; return { kind: 'edge', target: edge.t, matrix: edge.t.matrix, index: edge.index, at: e.at, local: e.at }; }
    if (hitT && h.kind === 'face') {
      const b = hitT.build;
      if ((b.exact || b.named) && h.face !== undefined && b.faces[h.face]) return { kind: 'face', target: hitT, matrix: hitT.matrix, index: h.face, at: b.faces[h.face].at, local: h.point };
      return { kind: 'face', target: hitT, matrix: hitT.matrix, tris: h.tris, local: h.point };
    }
    return null;
  }

  // ---------------------------------------------------------------- the overlay: picked points, closest points and their line
  function marks() {
    const g = new THREE.Group();
    g.renderOrder = 10;
    const pts = [], col = [];
    const c = new THREE.Color(ctx.tokens?.().pick || '#d9822b'), c2 = new THREE.Color('#1a9fb5');
    const at = (p) => { pts.push(...p); col.push(c.r, c.g, c.b); };
    for (const pk of st.picks) at(toWorld(pk.matrix, pk.local));
    if (st.hover) { pts.push(...toWorld(st.hover.matrix, st.hover.local)); col.push(c2.r, c2.g, c2.b); }
    if (st.pair?.p1) { at(st.pair.p1); at(st.pair.p2); }
    if (pts.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      const m = new THREE.Points(geo, new THREE.PointsMaterial({ size: 9, sizeAttenuation: false, vertexColors: true, depthTest: false }));
      m.renderOrder = 11; g.add(m);
    }
    if (st.pair?.p1) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([...st.pair.p1, ...st.pair.p2], 3));
      const l = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: c, depthTest: false }));
      l.renderOrder = 11; g.add(l);
    }
    view.setOverlay('measure', g.children.length ? g : null);
    view.render();
  }

  // ---------------------------------------------------------------- results
  const pickLabel = (pk) => {
    const t = pk.target, where = ctx.targets().length > 1 || t.id ? ' on ' + t.name : '';
    if (pk.kind === 'face') { const fc = pk.target.build.faces?.[pk.index]; return 'Face' + (fc ? ' (' + ({ plane: 'flat', cylinder: 'cylinder', cone: 'cone', sphere: 'sphere', torus: 'torus', spline: 'freeform' }[fc.type] || 'curved') + ')' : '') + where; }
    return ME.kindLabel(pk.kind) + where;
  };
  const mkPick = (pk) => ({ ...pk, geometry: null });
  async function compute() {
    const seq = ++st.seq;
    st.pair = null;
    if (st.picks.length === 2) {
      const [a, b] = st.picks;
      const ia = ME.info(a.target.build, a), ib = ME.info(b.target.build, b);
      let exactD = null, fallback = false;
      if (!(ME.isPointPick(a) && ME.isPointPick(b))) {
        if (ctx.useExact() && a.target.build.exact && b.target.build.exact) {
          st.busy = true; render();
          try { exactD = await ctx.exact.call('measureDistance', { a: { part: a.target.part, matrix: a.matrix, sub: ME.exactSub(a) }, b: { part: b.target.part, matrix: b.matrix, sub: ME.exactSub(b) } }); } catch (err) { fallback = true; ctx.status(t('ui.measure.exact_failed', { error: err.message }), true); }
          st.busy = false;
        } else fallback = true;
        if (seq !== st.seq) return;
        if (fallback) { a.geometry = ME.geometryOf(a.target.build, a); b.geometry = ME.geometryOf(b.target.build, b); }
      }
      st.pair = ME.pair(a, b, ia, ib, exactD);
    }
    if (seq !== st.seq) return;
    for (const pk of st.picks) if (pk.kind === 'body') { await bodyMass(pk); if (seq !== st.seq) return; }
    render(); marks();
  }
  async function propsOf(tg) {
    if (ctx.useExact() && tg.build.exact) return ctx.exact.call('measureMass', { part: tg.part });
    return ME.meshMass(tg.build.mesh);
  }
  const placed = (props, tg, density) => { if (density) return ME.placeMass(props, tg.matrix, density); const p = ME.placeMass(props, tg.matrix, 1000); delete p.mass; return p; };
  async function bodyMass(pk) {
    const tg = pk.target, d = tg.density ?? st.density;
    try { pk.massProps = placed(await propsOf(tg), tg, d); } catch (err) { ctx.status(t('ui.measure.mass_failed', { error: err.message }), true); }
  }

  /** Mass properties of everything shown (the part, or every placed part of the assembly). */
  async function mass() {
    if (!st.active) start();
    if (!st.active) return;
    const targets = ctx.targets();
    if (!targets.length) { ctx.status(t('ui.measure.no_solid')); return; }
    const seq = ++st.seq;
    st.busy = true; st.picks = []; st.pair = null; render();
    try {
      const props = new Map();
      for (const t of targets) { const k = t.pid || 'part'; if (!props.has(k)) props.set(k, await propsOf(t)); if (seq !== st.seq) return; }
      const missing = targets.filter((t) => !(t.density ?? st.density));
      const list = targets.map((t) => placed(props.get(t.pid || 'part'), t, missing.length ? null : (t.density ?? st.density)));
      const all = missing.length ? (() => { const g = ME.combineMass(list.map((p) => ({ ...p, mass: p.volume }))); delete g.mass; return g; })() : ME.combineMass(list);
      st.mass = { props: all, missing: [...new Set(missing.map((t) => t.partName || t.name))], count: targets.length };
    } catch (err) { ctx.status(t('ui.measure.mass_failed', { error: err.message }), true); st.mass = null; }
    st.busy = false;
    render(); marks();
  }

  function rows() {
    const out = [];
    if (st.mass) {
      out.push([t('ui.measure.of'), st.mass.count > 1 ? t('ui.measure.of_parts', { n: st.mass.count }) : t('ui.measure.of_part')]);
      out.push(...ME.massRows(st.mass.props));
      return out;
    }
    st.picks.forEach((pk, i) => {
      out.push([st.picks.length > 1 ? t('ui.measure.picked_n', { n: i + 1 }) : t('ui.measure.picked'), pickLabel(pk)]);
      try { out.push(...ME.infoRows(ME.info(pk.target.build, pk))); } catch { /* gone */ }
      if (pk.massProps) out.push(...ME.massRows(pk.massProps));
    });
    if (st.pair) out.push(...ME.pairRows(st.pair));
    return out;
  }

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure', role: 'region', 'aria-label': t('ui.measure.title'), 'data-measure': '' }); ctx.stage.append(card); }
    const r = rows();
    const dl = el('dl', { className: 'pc-dl pc-measure-dl' });
    for (const [k, v] of r) dl.append(el('dt', {}, k), el('dd', {}, String(v)));
    const kids = [el('div', { className: 'pc-measure-head' }, el('strong', {}, st.mass ? t('ui.measure.mass') : t('ui.measure.title')),
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-measure-close': '', title: t('ui.measure.close.title'), onclick: stop }, t('ui.measure.close')))];
    if (st.busy) kids.push(el('p', { className: 'pc-note' }, t('ui.measure.working')));
    else if (!r.length) kids.push(el('p', { className: 'pc-note' }, t('ui.measure.empty')));
    else kids.push(dl);
    if (st.mass?.missing.length) kids.push(el('p', { className: 'pc-note' }, t('ui.measure.no_mass', { n: st.mass.missing.length, names: st.mass.missing.join(', ') })));
    const tg = ctx.targets();
    if (tg.length && tg.every((t) => !t.id) && tg[0].density) {
      // the part has its own material (Part panel, 0.4): mass uses it
      kids.push(el('p', { className: 'pc-measure-mat', 'data-measure-material-part': '' }, t('measure.material_from_part', { name: tg[0].materialName || '', d: tg[0].density })));
    } else if (tg.length && tg.every((t) => !t.id)) {
      const sel = el('select', { className: 'pc-select', 'aria-label': t('ui.measure.material_for_mass'), 'data-measure-material': '' },
        el('option', { value: '' }, t('ui.measure.no_material')), ...MATERIALS.map((m) => el('option', { value: String(m.density) }, t('ui.measure.material_option', { name: m.name, d: m.density }))));
      sel.value = st.density ? String(st.density) : '';
      sel.addEventListener('change', () => { st.density = sel.value ? Number(sel.value) : null; if (st.mass) mass(); else compute(); });
      kids.push(el('label', { className: 'pc-measure-mat' }, el('span', {}, t('ui.measure.material')), sel));
    }
    kids.push(el('div', { className: 'pc-actions' },
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-measure-copy': '', disabled: !r.length, onclick: copy }, t('ui.measure.copy')),
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-measure-mass': '', onclick: mass }, t('ui.measure.mass')),
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-measure-clear': '', disabled: !r.length, onclick: clear }, t('ui.measure.clear'))));
    card.replaceChildren(...kids);
  }
  async function copy() {
    const text = ME.asText(rows());
    st.copied = text;
    try { await navigator.clipboard.writeText(text); ctx.status(t('ui.measure.copied')); } catch { ctx.status(t('ui.measure.copy_refused')); }
  }

  function clear() { st.seq++; st.picks = []; st.pair = null; st.mass = null; st.busy = false; render(); marks(); }
  function start() {
    const why = ctx.blocked();
    if (why) { ctx.status(why); return; }
    st.active = true; clear();
    ctx.status(t('ui.measure.start'), true);
    ctx.changed?.();
  }
  function stop() { st.active = false; st.seq++; st.picks = []; st.pair = null; st.mass = null; st.hover = null; view.setOverlay('measure', null); view.render(); render(); ctx.changed?.(); }

  function pick(h, ev) {
    const pk = ev ? resolve(h, ev.clientX, ev.clientY, ev.shiftKey) : null;
    if (!pk) { ctx.status(t('ui.measure.nothing')); return; }
    st.mass = null;
    if (st.picks.length >= 2) st.picks = [];
    st.picks.push(mkPick(pk));
    compute();
  }
  // hover preview of the snap
  view.canvas.addEventListener('pointermove', (e) => {
    if (!st.active || e.buttons) return;
    const h = view.pickAt(e.clientX, e.clientY);
    const pk = resolve(h, e.clientX, e.clientY, e.shiftKey);
    st.hover = pk && ME.isPointPick(pk) ? pk : null;
    if (pk && pk.kind === 'edge' && !pk.target.id) view.setHover({ kind: 'edges', edges: [pk.index] }); else if (pk && pk.kind === 'face' && !pk.target.id) view.setHover({ tris: h.tris }); else view.setHover(null);
    marks();
  });

  function keydown(e) {
    if (!st.active) return false;
    if (e.key === 'Escape') { if (st.picks.length || st.mass) clear(); else stop(); return true; }
    return false;
  }

  return {
    get active() { return st.active; }, state: st,
    start, stop, toggle: () => (st.active ? stop() : start()), pick, keydown, mass, clear, rows,
    refresh: () => { if (st.active) { const ts = ctx.targets(); st.picks = st.picks.filter((pk) => ts.some((t) => t.build === pk.target.build && t.matrix === pk.target.matrix)); if (st.picks.length < 2) st.pair = null; render(); marks(); } },
  };
}
