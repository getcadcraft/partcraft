/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bodies-ui.js — the Design workspace's panels for the body tools of bodies.js (Combine, Move/Copy body, Scale body,
 * Path pattern, and the "copy bodies" option of linear / circular patterns). A UI module (text reaches the DOM only
 * through el()); partcraft.js hands in its state as `host` (getters) and calls:
 *   create(type)        props for a new feature from the selection (faces picked → their bodies), or null + a status
 *   panel(f, grid, out) the right-panel rows of a body tool
 *   extra(f, grid)      the "copy bodies" rows of a linear / circular pattern
 *   onPick(hit, ev)     a click in the view while one of its slots waits (true = taken)
 *   cancel()            Esc: drop a waiting slot
 *   bodiesBlock()       the part panel's list of bodies (ids in words, volumes)
 * The bodies a feature can use are the ones there just before it (regen.results[…].bodies, from brep-bodies.js).
 */
import * as P from './part.js';
import * as V from './vec.js';
import { edgeRef, faceRef, refForName } from './brep.js';
import { BODY_LABELS, bodyLabel, autoBodyLabel, cleanBodyName, setBodyName, setBodiesHidden, isBodyHidden, BODY_NAME_MAX } from './bodies.js';
import { t } from './i18n.js';
import { exactWhy } from './exact-client.js';

export const BODY_TYPES = new Set(Object.keys(BODY_LABELS));
export const BODY_ICONS = { combine: 'union', movebody: 'arrows-move', scalebody: 'aspect-ratio', pathpattern: 'bezier' };
export const BODY_MENU = ['combine', 'movebody', 'scalebody', 'pathpattern'];
const SOLID = new Set(['extrude', 'revolve', 'hole', 'lpattern', 'cpattern', 'mirror', 'import', 'sweep', 'loft', 'member']);
const combineOptions = () => [['join', t('ui.bodies.combine.join')], ['cut', t('ui.bodies.combine.cut')], ['intersect', t('ui.bodies.combine.intersect')]];
const moveOptions = () => [['translate', t('ui.bodies.move.translate')], ['points', t('ui.bodies.move.points')], ['rotate', t('ui.bodies.move.rotate')], ['align', t('ui.bodies.move.align')]];
/** The status line that asks for a click into a slot of kind `kind` (body, point, axis, plane, pathEdge). */
const SLOT_PROMPTS = { body: 'ui.bodies.arm.body', point: 'ui.bodies.arm.point', axis: 'ui.bodies.arm.axis', plane: 'ui.bodies.arm.plane', pathEdge: 'ui.bodies.arm.path_edge' };

export function installBodiesUI(host) {
  const { el } = host;
  let slot = null;   // { id, key, kind }
  const set = (f, label, fn) => host.setFeature(f.id, label, fn);
  const nameOf = (id) => P.featureById(host.part, id)?.name || t('ui.bodies.deleted_feature');
  const word = (id) => bodyLabel(host.part, id);
  /** Body ids there just before feature f (or at the end when f is null). */
  function bodiesBefore(f) {
    const r = host.regen;
    if (!r?.results) return [];
    const feats = host.part.features;
    const end = f ? P.indexOf(host.part, f.id) : feats.length;
    for (let i = end - 1; i >= 0; i--) { const x = r.results.get(feats[i].id); if (x && x.status === 'ok' && Array.isArray(x.bodies)) return x.bodies; }
    return [];
  }
  const vol = (id) => host.regen?.bodies?.find((b) => b.id === id)?.volume;
  const isSlot = (f, key) => slot && slot.id === f.id && slot.key === key;
  function arm(f, key, kind) {
    if (isSlot(f, key)) { slot = null; host.status(''); host.renderProps(); return; }
    if (!host.useExact) { host.status(exactWhy(t('kernel.what.pick'), t('ui.bodies.pick_needs_exact'))); return; }
    slot = { id: f.id, key, kind };
    host.status(t(SLOT_PROMPTS[kind], { name: f.name }), true);
    host.renderProps();
    host.focusStage();
  }
  const pickBtn = (f, key, kind, label = t('ui.bodies.pick')) => host.btn(isSlot(f, key) ? t('ui.bodies.picking_cancel') : label, () => arm(f, key, kind), isSlot(f, key) ? 'pc-btn is-primary' : 'pc-btn', { dataset: { bslot: key } });
  const row = (label, ...kids) => [el('span', { className: 'k' }, label), el('span', { className: 'v pc-slot' }, ...kids)];
  const sub = (text) => el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, text);

  // ---------------------------------------------------------------- words
  function pointWords(r) {
    if (!r) return t('ui.bodies.words.none');
    if (r.kind === 'fixed') return '(' + r.p.map((v) => V.fmt(v, 3)).join(', ') + ')';
    if (r.kind === 'ref') return nameOf(r.feature);
    if (r.kind === 'sketch') return r.entity === 'O' ? t('ui.bodies.words.origin_of', { sketch: nameOf(r.sketch) }) : t('ui.bodies.words.point_of', { point: r.entity, sketch: nameOf(r.sketch) });
    return t('ui.bodies.words.edge_end', { a: host.faceWords(r.edge.faces[0]), b: host.faceWords(r.edge.faces[1]) });
  }
  function planeWords(r) {
    if (!r) return t('ui.bodies.words.none');
    if (r.kind === 'base') return V.PLANE_NAMES[r.name];
    if (r.kind === 'ref') return nameOf(r.feature);
    if (r.kind === 'face') return host.faceWords(r.name || `${r.feature}.${r.face}${r.entity ? ':' + r.entity : ''}`);
    return t('ui.bodies.words.fixed_plane');
  }
  function axisWords(f) {
    if (f.edge) return t('ui.bodies.words.edge', { a: host.faceWords(f.edge.faces[0]), b: host.faceWords(f.edge.faces[1]) });
    if (f.face) return t('ui.bodies.words.axis_of', { name: host.faceWords(f.face.name) });
    const a = f.axis;
    if (!a) return t('ui.bodies.words.none');
    if (a.kind === 'world') return t('ui.bodies.words.world_axis', { axis: a.axis.toUpperCase() });
    if (a.kind === 'ref') return nameOf(a.feature);
    if (a.kind === 'axis') return t('ui.bodies.words.axis_of', { name: nameOf(a.feature) });
    return t('ui.bodies.words.picked_line');
  }

  // ---------------------------------------------------------------- body checkboxes
  function bodyChecks(f, key, { except = null, label = t('ui.bodies.bodies') } = {}) {
    const ids = bodiesBefore(f).filter((id) => id !== except);
    const cur = new Set(f[key] || []);
    const gone = [...cur].filter((id) => !ids.includes(id));
    const boxes = [...ids, ...gone].map((id) => {
      const v = vol(id);
      const c = host.check(gone.includes(id) ? t('ui.bodies.gone', { name: word(id) }) : v !== undefined ? t('ui.bodies.with_volume', { name: word(id), v: V.fmt(v, 1) }) : word(id), cur.has(id), (on) => set(f, label, (g) => { g[key] = on ? [...(g[key] || []).filter((x) => x !== id), id] : (g[key] || []).filter((x) => x !== id); }));
      c.dataset.body = id;
      return c;
    });
    return el('div', { className: 'pc-block' }, sub(label), boxes.length ? el('div', { className: 'pc-checks', dataset: { bodies: key } }, ...boxes) : el('p', { className: 'pc-muted' }, t('ui.bodies.none_before')),
      el('div', { className: 'pc-actions' }, pickBtn(f, key, 'body', t('ui.bodies.pick_in_view'))));
  }

  // ---------------------------------------------------------------- picking into a slot
  function onPick(h, ev) {
    if (!slot) return false;
    const f = P.featureById(host.part, slot.id);
    if (!f) { slot = null; return false; }
    const regen = host.regen;
    const face = h && h.kind === 'face' && regen?.exact && h.face !== undefined ? regen.faces[h.face] : null;
    const edge = h && h.kind === 'edge' && regen?.exact && h.edge !== undefined ? regen.edges[h.edge] : null;
    const refHit = h && h.kind === 'ref' ? P.featureById(host.part, h.id) : null;
    const nope = (m) => { host.status(t('ui.bodies.nope', { msg: m }), true); return true; };
    const done = (label, fn, keep = false) => { const k = slot; if (!keep) slot = null; set(f, label, fn); host.status(t('ui.bodies.slot_set', { name: f.name, what: label.toLowerCase() })); if (keep) { slot = k; host.renderProps(); } return true; };
    const key = slot.key;
    switch (slot.kind) {
      case 'body': {
        const id = face ? regen.faceBody?.[h.face] : null;
        if (!id) return nope(t('ui.bodies.nope.face'));
        if (!bodiesBefore(f).includes(id)) return nope(t('ui.bodies.nope.later', { body: word(id), name: f.name }));
        if (key === 'target') return done(t('ui.bodies.target'), (g) => { g.target = id; g.tools = (g.tools || []).filter((x) => x !== id); });
        // lists: a click adds or drops the body; the slot stays armed for more
        const k2 = slot, had = (f[key] || []).includes(id);
        set(f, t('ui.bodies.bodies'), (g) => { const l = g[key] || []; g[key] = l.includes(id) ? l.filter((x) => x !== id) : [...l, id]; if (key === 'tools' && g.target === id) g.target = null; });
        slot = k2; host.renderProps();
        host.status(t(had ? 'ui.bodies.list.dropped' : 'ui.bodies.list.added', { name: f.name, body: word(id) }), true);
        return true;
      }
      case 'point': {
        if (refHit && refHit.type === 'point') return done('Point', (g) => { g[key] = { kind: 'ref', feature: refHit.id }; });
        if (edge) { const m = h.a && h.b ? V.mul(V.add(h.a, h.b), 0.5) : edge.at; const p = V.len(V.sub(edge.a, m)) <= V.len(V.sub(edge.b, m)) ? edge.a : edge.b; return done('Point', (g) => { g[key] = { kind: 'vertex', edge: edgeRef(edge), p: p.map((v) => +v.toFixed(6)) }; }); }
        if (h && h.kind === 'face') return done('Point', (g) => { g[key] = { kind: 'fixed', p: h.point.map((v) => +v.toFixed(6)) }; });
        return nope(t('ui.bodies.nope.point'));
      }
      case 'axis': {
        if (refHit && refHit.type === 'axis') return done('Axis', (g) => { g.axis = { kind: 'ref', feature: refHit.id }; g.edge = null; g.face = null; });
        if (edge && (edge.type === 'line' || edge.type === 'circle')) return done('Axis', (g) => { g.edge = edgeRef(edge); g.face = null; });
        if (edge) return nope(t('ui.bodies.nope.free_curve'));
        if (face && face.type === 'cylinder' && face.name) return done('Axis', (g) => { g.face = faceRef(face); g.edge = null; });
        return nope(t('ui.bodies.nope.axis'));
      }
      case 'plane': {
        const idx = key === 'alignTo' ? 1 : 0;
        const put = (r) => done(idx ? t('ui.bodies.undo.align_to') : t('ui.bodies.undo.align_from'), (g) => { const l = [...(g.planes || [])]; l[idx] = r; if (idx && !l[0]) l[0] = r; g.planes = l; });
        if (h && h.kind === 'plane') return put({ kind: 'base', name: h.name });
        if (refHit && refHit.type === 'plane') return put({ kind: 'ref', feature: refHit.id });
        if (face && face.type === 'plane') return face.name ? put(refForName(face.name)) : nope(t('ui.bodies.nope.unnamed_face'));
        return nope(t('ui.bodies.nope.plane'));
      }
      case 'pathEdge':
        if (edge) return done(t('ui.bodies.undo.path_edge'), (g) => { g.path = [...g.path, { edge: edgeRef(edge) }]; }, true);
        return nope(t('ui.bodies.nope.edge'));
    }
    return false;
  }
  const cancel = () => { if (!slot) return false; slot = null; host.status(t('ui.bodies.cancelled')); host.renderProps(); return true; };

  // ---------------------------------------------------------------- new features
  function create(type) {
    if (!host.useExact) { host.status(exactWhy(BODY_LABELS[type], t('ui.bodies.needs_exact', { label: BODY_LABELS[type] }))); return null; }
    const regen = host.regen;
    const picked = [...host.multi, ...(host.pick && !host.multi.length ? [host.pick] : [])].filter((m) => m.kind === 'face' && m.face !== undefined);
    const ids = [...new Set(picked.map((m) => regen?.faceBody?.[m.face]).filter(Boolean))];
    const all = bodiesBefore(null);
    if (!all.length) { host.status(t('ui.bodies.build_first')); return null; }
    if (type === 'combine') {
      if (all.length < 2) { host.status(t('ui.bodies.combine.need')); return null; }
      const target = ids[0] || all[0];
      const tools = ids.length > 1 ? ids.slice(1) : all.filter((x) => x !== target).slice(0, 1);
      return { op: 'join', target, tools };
    }
    if (type === 'movebody' || type === 'scalebody') return { bodies: ids.length ? ids : [all[all.length - 1]] };
    if (type === 'pathpattern') {
      const sks = host.part.features.slice(0, P.builtCount(host.part)).filter((g) => g.type === 'sketch' && regen?.results.get(g.id)?.status === 'ok' && g.sketch.entities.some((e) => e.type !== 'point' && !e.construction));
      const used = new Set(host.part.features.filter((g) => typeof g.sketch === 'string').map((g) => g.sketch));
      const pathSk = sks.filter((g) => !used.has(g.id)).at(-1);
      const edges = host.multi.filter((m) => m.kind === 'edge' && m.ref).map((m) => ({ edge: m.ref }));
      const sel = host.sel?.kind === 'feature' ? P.featureById(host.part, host.sel.id) : null;
      const seed = sel && SOLID.has(sel.type) ? sel : null;
      return { seeds: seed ? [seed.id] : [], bodies: seed ? [] : ids.length ? ids : [all[all.length - 1]], path: edges.length ? edges : pathSk ? [{ sketch: pathSk.id }] : [] };
    }
    return {};
  }

  // ---------------------------------------------------------------- panels
  function panel(f, grid, out) {
    if (f.type === 'combine') {
      grid.push(...host.field(t('ui.bodies.operation'), host.selectInput(combineOptions(), f.op, (v) => set(f, t('ui.bodies.operation'), (g) => { g.op = v; }))));
      const ids = bodiesBefore(f);
      const opts = [...(f.target ? [] : [['', t('ui.bodies.pick_one')]]), ...ids.map((id) => [id, word(id)]), ...(f.target && !ids.includes(f.target) ? [[f.target, t('ui.bodies.gone', { name: word(f.target) })]] : [])];
      const tsel = host.selectInput(opts, f.target || '', (v) => { if (v) set(f, t('ui.bodies.target'), (g) => { g.target = v; g.tools = g.tools.filter((x) => x !== v); }); });
      tsel.dataset.target = '1';
      grid.push(el('label', { htmlFor: tsel.id }, t('ui.bodies.target')), el('span', { className: 'pc-slot' }, tsel, pickBtn(f, 'target', 'body')));
      grid.push(host.check(t('ui.bodies.combine.keep'), f.keep, (v) => set(f, t('ui.bodies.undo.keep_tools'), (g) => { g.keep = v; })));
      out.push(el('div', { className: 'pc-props' }, ...grid)); grid.length = 0;
      out.push(bodyChecks(f, 'tools', { except: f.target, label: t('ui.bodies.combine.tools') }));
      out.push(el('p', { className: 'pc-note' }, t('ui.bodies.combine.note')));
      return true;
    }
    if (f.type === 'movebody') {
      out.push(bodyChecks(f, 'bodies', { label: t('ui.bodies.move.bodies') }));
      grid.push(...host.field(t('ui.bodies.move'), host.selectInput(moveOptions(), f.mode, (v) => set(f, t('ui.bodies.undo.move_type'), (g) => { g.mode = v; }))));
      if (f.mode === 'translate') for (const k of ['dx', 'dy', 'dz']) grid.push(...host.field(t('ui.bodies.delta_mm', { axis: k[1].toUpperCase() }), host.numInput(f[k], (v) => set(f, t('ui.bodies.undo.distance'), (g) => { g[k] = v; }), { key: f.id + '.' + k })));
      if (f.mode === 'points') {
        grid.push(...row(t('ui.bodies.from'), el('span', { className: 'grow' }, pointWords(f.from)), pickBtn(f, 'from', 'point')));
        grid.push(...row(t('ui.bodies.to'), el('span', { className: 'grow' }, pointWords(f.to)), pickBtn(f, 'to', 'point')));
      }
      if (f.mode === 'rotate') {
        const i = P.indexOf(host.part, f.id);
        const opts = [['world:x', t('ui.bodies.words.world_axis', { axis: 'X' })], ['world:y', t('ui.bodies.words.world_axis', { axis: 'Y' })], ['world:z', t('ui.bodies.words.world_axis', { axis: 'Z' })], ...host.part.features.slice(0, i).filter((g) => g.type === 'axis').map((g) => ['ref:' + g.id, g.name])];
        const cur = f.edge || f.face ? 'pick' : f.axis?.kind === 'world' ? 'world:' + f.axis.axis : f.axis?.kind === 'ref' ? 'ref:' + f.axis.feature : 'pick';
        if (cur === 'pick') opts.push(['pick', axisWords(f)]);
        const s = host.selectInput(opts, cur, (v) => { if (v === 'pick') return; const [k, a] = v.split(':'); set(f, t('ui.bodies.axis'), (g) => { g.axis = k === 'world' ? { kind: 'world', axis: a } : { kind: 'ref', feature: a }; g.edge = null; g.face = null; }); });
        grid.push(el('label', { htmlFor: s.id }, t('ui.bodies.axis')), el('span', { className: 'pc-slot' }, s, pickBtn(f, 'axis', 'axis')));
        grid.push(...host.field(t('ui.bodies.angle_deg'), host.numInput(f.angle, (v) => set(f, t('ui.bodies.undo.angle'), (g) => { g.angle = v; }), { key: f.id + '.angle', min: -3600, max: 3600 })));
      }
      if (f.mode === 'align') {
        grid.push(...row(t('ui.bodies.align.face'), el('span', { className: 'grow' }, planeWords(f.planes[0])), pickBtn(f, 'alignFrom', 'plane')));
        grid.push(...row(t('ui.bodies.align.onto'), el('span', { className: 'grow' }, planeWords(f.planes[1])), pickBtn(f, 'alignTo', 'plane')));
        grid.push(host.check(t('ui.bodies.align.same_way'), f.flip, (v) => set(f, t('ui.bodies.undo.align_direction'), (g) => { g.flip = v; })));
      }
      grid.push(host.check(t('ui.bodies.move.copy'), f.copy, (v) => set(f, t('ui.bodies.undo.copy'), (g) => { g.copy = v; })));
      out.push(el('div', { className: 'pc-props' }, ...grid)); grid.length = 0;
      out.push(el('p', { className: 'pc-note' }, t('ui.bodies.move.note')));
      return true;
    }
    if (f.type === 'scalebody') {
      out.push(bodyChecks(f, 'bodies', { label: t('ui.bodies.scale.bodies') }));
      grid.push(host.check(t('ui.bodies.scale.uniform'), f.uniform, (v) => set(f, t('ui.bodies.undo.uniform'), (g) => { g.uniform = v; if (!v && g.sx === 1 && g.sy === 1 && g.sz === 1) { g.sx = g.s; g.sy = g.s; g.sz = g.s; } })));
      if (f.uniform) grid.push(...host.field(t('ui.bodies.scale'), host.numInput(f.s, (v) => set(f, t('ui.bodies.scale'), (g) => { g.s = v; }), { key: f.id + '.s', min: 0.000001, max: 1000000 })));
      else for (const k of ['sx', 'sy', 'sz']) grid.push(...host.field(t('ui.bodies.scale_axis', { axis: k[1].toUpperCase() }), host.numInput(f[k], (v) => set(f, t('ui.bodies.scale'), (g) => { g[k] = v; }), { key: f.id + '.' + k, min: 0.000001, max: 1000000 })));
      grid.push(...row(t('ui.bodies.scale.about'), el('span', { className: 'grow' }, f.point ? pointWords(f.point) : t('ui.bodies.scale.box_centre')), pickBtn(f, 'point', 'point'),
        f.point ? host.btn(t('ui.bodies.scale.box_centre_btn'), () => set(f, t('ui.bodies.undo.scale_point'), (g) => { g.point = null; }), 'pc-btn') : null));
      out.push(el('div', { className: 'pc-props' }, ...grid)); grid.length = 0;
      const note = host.regen?.results.get(f.id)?.note;
      if (note) out.push(host.msg(note, 'is-ok'));
      out.push(el('p', { className: 'pc-note' }, t('ui.bodies.scale.note')));
      return true;
    }
    if (f.type === 'pathpattern') {
      const useBodies = !!(f.bodies && f.bodies.length) || !f.seeds.length;
      grid.push(...host.field(t('ui.bodies.path.copy'), host.selectInput([['bodies', t('ui.bodies.path.copy_bodies')], ['features', t('ui.bodies.path.copy_features')]], useBodies ? 'bodies' : 'features', (v) => set(f, t('ui.bodies.undo.copy_what'), (g) => { if (v === 'bodies') { g.seeds = []; } else { g.bodies = []; } }))));
      out.push(el('div', { className: 'pc-props' }, ...grid)); grid.length = 0;
      if (useBodies) out.push(bodyChecks(f, 'bodies', { label: t('ui.bodies.copy.bodies') }));
      else {
        const earlier = host.part.features.slice(0, P.indexOf(host.part, f.id)).filter((g) => SOLID.has(g.type));
        out.push(el('div', { className: 'pc-block' }, sub(t('ui.bodies.path.features')), el('div', { className: 'pc-checks' }, ...earlier.map((g) => host.check(g.name, f.seeds.includes(g.id), (v) => set(f, t('ui.bodies.path.features'), (h) => { h.seeds = v ? [...h.seeds, g.id] : h.seeds.filter((x) => x !== g.id); }))))));
      }
      const sks = host.part.features.slice(0, P.indexOf(host.part, f.id)).filter((g) => g.type === 'sketch');
      const inPath = new Set(f.path.filter((x) => x.sketch).map((x) => x.sketch));
      const edges = f.path.map((x, i) => (x.edge ? el('li', {}, el('span', { className: 'grow' }, t('ui.bodies.path.edge', { a: host.faceWords(x.edge.faces[0]), b: host.faceWords(x.edge.faces[1]) })), host.btn(t('ui.bodies.remove'), () => set(f, t('ui.bodies.undo.path'), (h) => { h.path.splice(i, 1); }), 'pc-linkbtn')) : null)).filter(Boolean);
      out.push(el('div', { className: 'pc-block' }, sub(t('ui.bodies.path.title')),
        el('div', { className: 'pc-checks', dataset: { pathSketches: '1' } }, ...sks.map((g) => host.check(g.name, inPath.has(g.id), (v) => set(f, t('ui.bodies.undo.path'), (h) => { h.path = v ? [...h.path, { sketch: g.id }] : h.path.filter((x) => x.sketch !== g.id); })))),
        edges.length ? el('ul', { className: 'pc-list' }, ...edges) : null, el('div', { className: 'pc-actions' }, pickBtn(f, 'path', 'pathEdge', t('ui.bodies.path.pick_edges')))));
      grid.push(...host.field(t('ui.bodies.path.count'), host.numInput(f.count, (v) => set(f, t('ui.bodies.path.count'), (g) => { g.count = Math.max(1, Math.min(1000, Math.round(v))); }), { key: f.id + '.count', min: 1, max: 1000, step: 1 })));
      grid.push(...host.field(t('ui.bodies.path.spacing'), host.selectInput([['equal', t('ui.bodies.path.equal')], ['distance', t('ui.bodies.path.set_distance')]], f.spacing, (v) => set(f, t('ui.bodies.path.spacing'), (g) => { g.spacing = v; }))));
      if (f.spacing === 'distance') grid.push(...host.field(t('ui.bodies.distance_mm'), host.numInput(f.d, (v) => set(f, t('ui.bodies.undo.distance'), (g) => { g.d = v; }), { key: f.id + '.d', min: 0.000001 })));
      grid.push(...host.field(t('ui.bodies.path.orientation'), host.selectInput([['path', t('ui.bodies.path.follow')], ['fixed', t('ui.bodies.path.fixed')]], f.orient, (v) => set(f, t('ui.bodies.path.orientation'), (g) => { g.orient = v; }))));
      grid.push(host.check(t('ui.bodies.path.reverse'), f.reverse, (v) => set(f, t('ui.bodies.undo.reverse'), (g) => { g.reverse = v; })));
      out.push(el('div', { className: 'pc-props' }, ...grid)); grid.length = 0;
      out.push(el('p', { className: 'pc-note' }, t('ui.bodies.path.note')));
      return true;
    }
    return false;
  }

  /** Linear / circular patterns: copy bodies instead of features. */
  function extra(f, grid) {
    if (f.type !== 'lpattern' && f.type !== 'cpattern') return;
    const on = !!(f.bodies && f.bodies.length);
    grid.push(host.check(t('ui.bodies.copy.check'), on, (v) => set(f, t('ui.bodies.undo.copy_bodies'), (g) => { if (v) { const b = bodiesBefore(g); if (b.length) g.bodies = [b[0]]; } else delete g.bodies; })));
    if (on) {
      const ids = bodiesBefore(f);
      for (const id of ids) {
        const c = host.check(word(id), f.bodies.includes(id), (v) => set(f, t('ui.bodies.copy.bodies'), (g) => { g.bodies = v ? [...g.bodies.filter((x) => x !== id), id] : g.bodies.filter((x) => x !== id); if (!g.bodies.length) delete g.bodies; }));
        c.dataset.body = id;
        grid.push(c);
      }
    }
  }

  /** The part panel: every body — its name (type to rename; empty = the name from its feature), volume, Hide / Show. */
  function bodiesBlock() {
    const bs = host.regen?.bodies || [];
    if (bs.length < 2) return null;
    const part = host.part;
    const hidden = bs.filter((b) => isBodyHidden(part, b.id));
    const rows = bs.map((b) => {
      const off = isBodyHidden(part, b.id);
      const name = el('input', { type: 'text', className: 'pc-input grow', value: word(b.id), maxLength: BODY_NAME_MAX, placeholder: autoBodyLabel(part, b.id),
        title: t('bodies.name.title'), 'aria-label': t('bodies.name.label', { name: word(b.id) }), dataset: { bodyName: b.id } });
      name.addEventListener('change', () => { if (cleanBodyName(name.value) !== word(b.id)) host.commitView(t('bodies.undo.rename'), () => setBodyName(part, b.id, name.value)); });
      const eye = host.btn(off ? t('bodies.show') : t('bodies.hide'), () => {
        host.commitView(t(off ? 'bodies.undo.show' : 'bodies.undo.hide'), () => setBodiesHidden(part, [b.id], !off));
        if (!off) host.status(t('bodies.hidden.status', { name: word(b.id) }));
      }, 'pc-btn pc-btn-sm', { title: t(off ? 'bodies.show.title' : 'bodies.hide.title'), 'aria-pressed': String(off), dataset: { bodyHide: b.id } });
      return el('li', { className: off ? 'is-hidden' : '' }, name, el('span', { className: 'pc-muted' }, t('bodies.volume', { v: V.fmt(b.volume, 1) })), eye);
    });
    return el('div', { className: 'pc-block' }, sub(t('bodies.title', { n: bs.length })), el('ul', { className: 'pc-list', dataset: { bodyList: '1' } }, ...rows),
      hidden.length ? el('div', { className: 'pc-actions' }, el('p', { className: 'pc-note' }, t('bodies.hidden.note', { n: hidden.length })),
        host.btn(t('bodies.show_all'), () => host.commitView(t('bodies.undo.show_all'), () => setBodiesHidden(part, hidden.map((b) => b.id), false)), 'pc-btn', { dataset: { bodyShowAll: '1' } })) : null);
  }

  return { create, panel, extra, onPick, cancel, bodiesBlock, bodiesBefore, get slot() { return slot; }, clearIfGone() { if (slot && !P.featureById(host.part, slot.id)) slot = null; } };
}
