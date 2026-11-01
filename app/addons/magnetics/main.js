/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Magnetics add-on for PartCraft (0.8 SG.7+, session `addons-finish-magnetics`; add-on API 1.1). A panel tab where a magnet study is
 * set up (an example device, or the closed profiles of this part's sketches; each body air, iron, a permanent magnet or a coil; the air box round
 * them), solved, read (|B|, flux lines, the force and torque on chosen bodies, a hand formula where the example has one), shown ON THE PART as
 * display bodies (api.model.addBodies: one undo step, saved with the part) and exported (summary CSV, field CSV, VTK, SVG, the study as JSON).
 *
 * No solver of its own: magnet-study.js (PartCraft) builds the job, phys-worker.js magnetSolve (magnetmesh.js + magnet.js) solves it in a compute
 * worker, as PartCraft's own Sketch › Magnet study does. Planar (2-D) magnetostatics: everything is per metre of depth, scaled by the depth given.
 * Commands: magnetics:example · solve · place · clear. Problems: the study's own (saturation past 2.1 T with a plain μr, a force contour that is
 * thin) when the page has the Problems panel. Test hook: window.ccMagnetics = { state, solve, place } (only in a browser).
 */
import { newStudy, cleanStudy, setupOf, runStudy, SHOW, TEMPLATES, TEMPLATE_IDS } from './lib/study.js';
import { cleanParams } from './lib/templates.js';
import { studyBodies, BANDS } from './lib/bodies.js';
import { fieldColour, fieldCsv, vtk, svg, summaryCsv, fluxLines } from './lib/results.js';

const GROUP = 'study';
const STYLE = `[data-magnetics]{display:grid;gap:.6rem;font-size:.85rem}
[data-magnetics] h3{font-size:.9rem;margin:.4rem 0 0}
[data-magnetics] .mg-row{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;border-top:1px solid var(--ws-line,#8884);padding:.3rem 0}
[data-magnetics] .mg-row input[type=number]{width:5.5rem}
[data-magnetics] .mg-grid{display:grid;grid-template-columns:auto 1fr;gap:.3rem .5rem;align-items:center}
[data-magnetics] canvas{width:100%;height:auto;border:1px solid var(--ws-line,#8884);background:#fff}
[data-magnetics] .mg-legend{height:.7rem;border-radius:2px}
[data-magnetics] .mg-btns{display:flex;flex-wrap:wrap;gap:.35rem}
[data-magnetics] table{border-collapse:collapse;width:100%}
[data-magnetics] td,[data-magnetics] th{border-top:1px solid var(--ws-line,#8884);padding:.15rem .25rem;text-align:left;font-weight:normal}
[data-magnetics] .mg-ok{color:#15803d}[data-magnetics] .mg-off{color:#b45309}
[data-magnetics] textarea{width:100%}`;

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  let study;
  try { study = cleanStudy(api.storage.get('study')); } catch { study = newStudy(); }
  const S = { study, result: null, busy: false, msg: '', placed: 0 };
  let pane = null, worker = null, styleEl = null;
  const save = () => { try { api.storage.set('study', S.study); } catch { /* storage blocked: the study stays in the page */ } };
  const status = (m) => { S.msg = m; try { api.status(m); } catch { /* no status line */ } };
  const src = (() => { try { return api.problems && typeof api.problems.source === 'function' ? api.problems.source({ id: 'study', kind: 'engine', label: t('name') }) : null; } catch { return null; } })();
  if (typeof document !== 'undefined' && document.head) { styleEl = document.createElement('style'); styleEl.setAttribute('data-cc-magnetics-style', ''); styleEl.textContent = STYLE; document.head.append(styleEl); }

  const setup = () => setupOf(S.study, api.part.get(), { say: t });

  async function solveJob(job) {
    if (typeof Worker !== 'undefined' && typeof document !== 'undefined') {
      if (!worker) { const CW = await import('../../compute-worker.js'); worker = CW.computeWorker(['phys-worker.js'], { name: 'PartCraft Magnetics' }); }
      try { return await worker.call('magnetSolve', job); } catch (e) { try { worker.terminate(); } catch { /* gone */ } worker = null; throw e; }
    }
    const W = await import('../../phys-worker.js');   // Node (tests): the same op, called directly
    return W.magnetSolve(job);
  }

  async function solve() {
    if (S.busy) return null;
    S.busy = true; status(t('msg.working')); render();
    try {
      const su = setup();
      S.result = await runStudy(su, S.study, solveJob);
      try { src?.set(S.result.problems); } catch (e) { api.log('problems', e); }
      status(t('msg.done', { B: +S.result.sum.bmax.toPrecision(3), tris: S.result.sum.tris }));
      return S.result;
    } catch (e) {
      S.result = null;
      status(e && e.problems ? e.problems.join(' ') : t('msg.failed', { error: e && e.message ? e.message : String(e) }));
      return null;
    } finally { S.busy = false; render(); }
  }

  function place() {
    const r = S.result;
    if (!r) { status(t('msg.solve_first')); render(); return 0; }
    const out = studyBodies(r.res, r.meta, { frame: r.frame, depth: r.depth, flux: r.flux, forces: r.sum.bodies, top: r.top, crop: r.near, show: S.study.show, names: r.names, say: t });
    if (!out.bodies.length) { status(t('msg.nothing_to_show')); render(); return 0; }
    S.placed = api.model.addBodies(GROUP, out.bodies, { name: t('group.name', { B: +r.sum.bmax.toPrecision(3) }), label: t('undo.place'), fit: true });
    status(out.skipped.length ? t('msg.placed_skipped', { n: S.placed, what: out.skipped.map((k) => t('show.' + k)).join(', ') }) : t('msg.placed', { n: S.placed }));
    render();
    return S.placed;
  }
  function clear() {
    const had = api.model.removeBodies(GROUP, { label: t('undo.clear') });
    S.placed = 0; status(had ? t('msg.cleared') : t('msg.none_placed')); render();
    return had;
  }
  const placedCount = () => { try { return (api.model.bodies().find((g) => g.group === GROUP) || {}).count || 0; } catch { return 0; } };

  // ---- exports
  const base = () => (S.study.source === 'template' ? 'magnetics ' + S.study.template : 'magnetics ' + ((api.part.get() || {}).name || 'part')).replace(/[^A-Za-z0-9._ -]+/g, '_').slice(0, 60);
  const exportsOf = {
    summary: () => [summaryCsv(S.result.sum, S.result.stats, S.result.check, S.result.meta), 'summary.csv', 'text/csv'],
    field: () => [fieldCsv(S.result.res), 'field.csv', 'text/csv'],
    vtk: () => [vtk(S.result.res, 'CadCraft PartCraft Magnetics ' + base()), 'field.vtk', 'text/plain'],
    svg: () => [svg(S.result.res, S.result.loops, { top: S.result.top, flux: S.result.flux, legend: t('svg.legend', { B: +S.result.top.toPrecision(3), max: +S.result.sum.bmax.toPrecision(3), dA: fmtFlux(S.result.flux.dA * S.result.depth * 1e-3) }) }), 'field.svg', 'image/svg+xml'],
    study: () => [JSON.stringify({ format: 'cadcraft-magnetics-study', version: 1, study: S.study }, null, 1), 'study.json', 'application/json'],
  };
  function download(kind) {
    if (kind !== 'study' && !S.result) { status(t('msg.solve_first')); render(); return null; }
    const [text, suffix, mime] = exportsOf[kind]();
    const name = base() + ' ' + suffix;
    const d = pane?.ownerDocument || (typeof document !== 'undefined' ? document : null);
    if (d && typeof URL !== 'undefined' && URL.createObjectURL) {
      const a = d.createElement('a');
      a.download = name; a.href = URL.createObjectURL(new Blob([text], { type: mime }));
      d.body.append(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    }
    return { name, text };
  }
  const exp = (id, ext, mime, kind) => api.files.exporter({ id, label: t('export.' + kind), extension: ext, mime, write: async () => { if (!S.result) throw new Error(t('msg.solve_first')); return exportsOf[kind]()[0]; } });
  exp('summary', 'csv', 'text/csv', 'summary');
  exp('vtk', 'vtk', 'text/plain', 'vtk');

  // ---- commands
  api.commands.add('example', () => { S.study = cleanStudy({ ...S.study, source: 'template', template: 'ccore', params: {}, pad: 1 }); save(); return solve(); }, { label: t('cmd.example') });
  api.commands.add('solve', () => solve(), { label: t('cmd.solve') });
  api.commands.add('place', () => place(), { label: t('cmd.place') });
  api.commands.add('clear', () => clear(), { label: t('cmd.clear') });

  // ---- the panel
  const fmt = (v, p = 4) => String(+Number(v).toPrecision(p));
  function fmtFlux(wb) { const a = Math.abs(wb); return a >= 1e-3 ? fmt(wb * 1e3) + ' mWb' : fmt(wb * 1e6) + ' µWb'; }   // i18n-ignore: units
  function h(tag, attrs = {}, ...kids) {
    const d = pane.ownerDocument, e = d.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'on') for (const [ev, fn] of Object.entries(v)) e.addEventListener(ev, fn);
      else if (k === 'text') e.textContent = v;
      else if (k in e && typeof v !== 'string') e[k] = v;
      else e.setAttribute(k, v === true ? '' : String(v));
    }
    for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(typeof c === 'string' ? d.createTextNode(c) : c);
    return e;
  }
  const change = (fn) => { fn(S.study); S.study = cleanStudy(S.study); save(); render(); };
  const numIn = (attrs, value, onSet) => h('input', { type: 'number', class: 'pc-input', step: 'any', inputmode: 'decimal', value: String(value), ...attrs, on: { change: (ev) => onSet(ev.target.value) } });

  function regionRows(su) {
    if (!su.loops || !su.loops.length) return [h('p', { class: 'pc-note', text: su.error || t('err.none_picked') })];
    return su.specs.map((s, i) => {
      const key = su.keys[i];
      const upd = (patch) => change((st) => { st.specs[key] = { ...s, ...patch }; });
      const role = h('select', { class: 'pc-select', 'data-mg-role': String(i + 1), 'aria-label': t('region.role', { n: i + 1 }), on: { change: (ev) => upd({ role: ev.target.value }) } },
        ...['air', 'iron', 'magnet', 'coil'].map((r) => h('option', { value: r, selected: r === s.role, text: t('role.' + r) })));
      const f = (label, k, unit) => h('label', {}, label + ' ', numIn({ 'data-mg-field': k + ':' + (i + 1) }, s[k], (v) => upd({ [k]: Number(v) })), unit ? ' ' + unit : '');
      const kids = [h('strong', { text: String(i + 1) }), h('span', { text: su.names[i] }), role];
      if (s.role === 'iron') kids.push(f('μr', 'mur'), h('details', {}, h('summary', { text: t('region.curve') }), h('p', { class: 'pc-note', text: t('region.curve_note') }),
        h('textarea', { class: 'pc-input', rows: '3', 'data-mg-curve': String(i + 1), placeholder: t('region.curve_ph'), on: { change: (ev) => upd({ curve: ev.target.value }) } }, s.curve || '')));
      if (s.role === 'magnet') kids.push(f('Br', 'br', 'T'), f(t('region.angle'), 'angle', '°'), f('μr', 'murMag'));
      if (s.role === 'coil') kids.push(f(t('region.current'), 'current', 'A'));
      if (s.role !== 'air') kids.push(h('label', {}, h('input', { type: 'checkbox', checked: !!s.force, 'data-mg-force': String(i + 1), on: { change: (ev) => upd({ force: ev.target.checked }) } }), ' ' + t('region.force')));
      return h('div', { class: 'mg-row', 'data-mg-row': String(i + 1) }, ...kids);
    });
  }

  function paint(cv, r) {
    const g = cv.getContext && cv.getContext('2d');
    if (!g) return;
    const W = cv.width, H = cv.height, [x0, y0, x1, y1] = r.near.map((v) => v / 1e3), k = Math.min(W / (x1 - x0), H / (y1 - y0));
    const ox = (W - (x1 - x0) * k) / 2, oy = (H - (y1 - y0) * k) / 2, X = (x) => ox + (x - x0) * k, Y = (y) => H - (oy + (y - y0) * k);
    const N = r.res.mesh.nodes, T = r.res.mesh.tris, top = r.top || r.sum.bmax || 1;
    g.clearRect(0, 0, W, H);
    g.save(); g.beginPath(); g.rect(X(x0), Y(y1), (x1 - x0) * k, (y1 - y0) * k); g.clip();
    for (let e = 0; e < T.length / 3; e++) {
      const a = T[3 * e], b = T[3 * e + 1], c = T[3 * e + 2];
      g.fillStyle = fieldColour(r.res.B.mag[e] / top); g.strokeStyle = g.fillStyle; g.lineWidth = 0.5;
      g.beginPath(); g.moveTo(X(N[2 * a]), Y(N[2 * a + 1])); g.lineTo(X(N[2 * b]), Y(N[2 * b + 1])); g.lineTo(X(N[2 * c]), Y(N[2 * c + 1])); g.closePath(); g.fill(); g.stroke();
    }
    g.strokeStyle = '#f5f5f5'; g.lineWidth = 0.8; g.beginPath();
    const s = r.flux.segs; for (let i = 0; i < s.length; i += 4) { g.moveTo(X(s[i] / 1e3), Y(s[i + 1] / 1e3)); g.lineTo(X(s[i + 2] / 1e3), Y(s[i + 3] / 1e3)); }
    g.stroke();
    g.strokeStyle = '#111'; g.lineWidth = 1.2; g.font = '12px system-ui, sans-serif';
    r.loops.forEach((l, i) => {
      g.beginPath(); l.forEach(([x, y], j) => (j ? g.lineTo(X(x / 1e3), Y(y / 1e3)) : g.moveTo(X(x / 1e3), Y(y / 1e3)))); g.closePath(); g.stroke();
      let cx = 0, cy = 0; for (const [x, y] of l) { cx += x; cy += y; } cx /= l.length * 1e3; cy /= l.length * 1e3;
      g.fillStyle = '#fff'; g.fillRect(X(cx) - 7, Y(cy) - 8, 14, 14); g.fillStyle = '#111'; g.fillText(String(i + 1), X(cx) - 3.5 * String(i + 1).length, Y(cy) + 4);
    });
    g.restore();
  }

  function results() {
    const r = S.result;
    if (!r) return [h('p', { class: 'pc-note', text: t('res.none') })];
    const cv = h('canvas', { width: '560', height: '360', 'data-mg-plot': '1', role: 'img', 'aria-label': t('res.plot_alt') });
    paint(cv, r);
    const grad = 'linear-gradient(to right,' + Array.from({ length: BANDS + 1 }, (_, k) => fieldColour(k / BANDS)).join(',') + ')';   // i18n-ignore: CSS
    const out = [cv, h('div', { class: 'mg-legend', style: 'background:' + grad }), h('div', { class: 'mg-btns', style: 'justify-content:space-between' }, h('span', { text: '0 T' }), h('span', { text: t('res.top', { B: fmt(r.top, 3) }) })),
      h('p', { 'data-mg-bmax': fmt(r.sum.bmax, 6), text: t('res.bmax', { B: fmt(r.sum.bmax), x: fmt(r.sum.bmaxAt[0], 4), y: fmt(r.sum.bmaxAt[1], 4) }) }),
      h('p', { class: 'pc-note', text: t('res.mesh', { tris: r.sum.tris, it: r.sum.iterations, ms: r.sum.ms ?? '' }) }),
      h('p', { class: 'pc-note', 'data-mg-flux': String(r.flux.levels.length), text: t('res.flux', { n: r.flux.levels.length, dA: fmtFlux(r.flux.dA * r.depth * 1e-3), d: r.depth }) })];
    const rows = r.stats.map((s) => {
      const f = r.sum.bodies.find((b) => b.loop === s.loop);
      return h('tr', { 'data-mg-body': String(s.loop), 'data-mg-mean': fmt(s.meanB, 6), ...(f ? { 'data-mg-fx': fmt(f.fx, 6), 'data-mg-fy': fmt(f.fy, 6) } : {}) },
        h('td', { text: s.loop + ' ' + (r.names[s.loop - 1] || '') }), h('td', { text: t('role.' + s.role) }), h('td', { text: fmt(s.meanB, 3) + ' / ' + fmt(s.maxB, 3) + ' T' }),   // i18n-ignore: units
        h('td', { text: f ? t('res.force', { fx: fmt(f.fx), fy: fmt(f.fy), tau: fmt(f.torque) }) : '' }));
    });
    out.push(h('table', {}, h('thead', {}, h('tr', {}, ...['res.th.body', 'res.th.role', 'res.th.b', 'res.th.force'].map((k) => h('th', { text: t(k) })))), h('tbody', {}, ...rows)));
    if (r.sum.bodies.length) out.push(h('p', { class: 'pc-note', text: t('res.depth_note', { d: r.depth }) }));
    if (r.check) {
      const c = r.check, unit = c.kind === 'force' ? ' N/m' : ' T';   // i18n-ignore: units
      out.push(h('p', { class: c.ok ? 'mg-ok' : 'mg-off', 'data-mg-check': fmt(100 * c.diff, 3), 'data-mg-check-ok': String(c.ok) },
        t(c.what) + ' ' + t('res.check', { want: fmt(c.want) + unit, got: fmt(c.got) + unit, diff: (c.diff >= 0 ? '+' : '') + fmt(100 * c.diff, 3) })));
      if (!c.ok) out.push(h('p', { class: 'pc-note', text: t('res.check_off') }));
    }
    for (const p of r.problems) out.push(h('p', { class: 'mg-off', 'data-mg-problem': p.code, text: t('problem.' + p.code.split('.').pop(), p.msg.vars) }));
    return out;
  }

  function render() {
    if (!pane) return;
    pane.replaceChildren();
    const st = S.study, su = setup();
    const part = api.part.get() || {}, sketches = (part.features || []).filter((f) => f.type === 'sketch');
    const src0 = h('select', { class: 'pc-select', 'data-mg-source': '1', on: { change: (ev) => change((x) => { x.source = ev.target.value; if (x.source === 'sketches' && !x.sketches.length) x.sketches = ((api.part.get() || {}).features || []).filter((f) => f.type === 'sketch').map((f) => f.id); }) } },
      h('option', { value: 'template', selected: st.source === 'template', text: t('source.template') }), h('option', { value: 'sketches', selected: st.source === 'sketches', text: t('source.sketches') }));
    const setupKids = [h('div', { class: 'mg-grid' }, h('span', { text: t('source') }), src0)];
    if (st.source === 'template') {
      setupKids.push(h('div', { class: 'mg-grid' }, h('span', { text: t('template') }),
        h('select', { class: 'pc-select', 'data-mg-template': '1', on: { change: (ev) => change((x) => { x.template = ev.target.value; x.params = cleanParams(x.template, {}); x.pad = TEMPLATES[x.template].pad || 1; }) } },
          ...TEMPLATE_IDS.map((id) => h('option', { value: id, selected: id === st.template, text: t('tpl.' + id) })))));
      setupKids.push(h('p', { class: 'pc-note', text: t('tpl.' + st.template + '.about') }));
      setupKids.push(h('div', { class: 'mg-grid' }, ...TEMPLATES[st.template].params.flatMap((q) => [h('span', { text: t('param.' + q.key) }),
        numIn({ 'data-mg-param': q.key, min: String(q.min), max: String(q.max) }, st.params[q.key], (v) => change((x) => { x.params = { ...x.params, [q.key]: Number(v) }; }))])));
      setupKids.push(h('div', { class: 'mg-btns' }, h('button', { type: 'button', class: 'pc-btn', 'data-mg-reset': '1', text: t('btn.reset'), on: { click: () => change((x) => { for (const k of Object.keys(x.specs)) if (k.startsWith('t:' + x.template + ':')) delete x.specs[k]; x.params = cleanParams(x.template, {}); x.pad = TEMPLATES[x.template].pad || 1; }) } })));
    } else {
      if (!sketches.length) setupKids.push(h('p', { class: 'pc-note', text: t('err.no_sketch') }));
      else setupKids.push(h('div', {}, ...sketches.map((f) => h('label', { class: 'pc-check', style: 'display:block' },
        h('input', { type: 'checkbox', checked: st.sketches.includes(f.id), 'data-mg-sketch': f.id, on: { change: (ev) => change((x) => { x.sketches = ev.target.checked ? [...new Set([...x.sketches, f.id])] : x.sketches.filter((id) => id !== f.id); }) } }), ' ' + (f.name || f.id)))),
      h('p', { class: 'pc-note', text: t('sketch.touching') }));
      if (su.note) setupKids.push(h('p', { class: 'mg-off', 'data-mg-note': '1', text: su.note }));
    }
    setupKids.push(h('h3', { text: t('h.bodies') }), ...regionRows(su));
    // the air box: its margin and size
    let boxText = '';
    if (su.loops && su.loops.length) {
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const l of su.loops) for (const [x, y] of l) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
      const m = Math.max(x1 - x0, y1 - y0) * st.pad;
      boxText = t('box.size', { w: fmt(x1 - x0 + 2 * m, 4), h: fmt(y1 - y0 + 2 * m, 4) });
    }
    setupKids.push(h('h3', { text: t('h.air') }), h('div', { class: 'mg-grid' },
      h('span', { text: t('box.margin') }), h('select', { class: 'pc-select', 'data-mg-pad': '1', on: { change: (ev) => change((x) => { x.pad = Number(ev.target.value); }) } }, ...[1, 2, 4].map((v) => h('option', { value: String(v), selected: v === st.pad, text: t('box.pad.' + v) }))),
      h('span', { text: t('depth') }), h('span', {}, numIn({ 'data-mg-depth': '1', min: '0.001' }, st.depth, (v) => change((x) => { x.depth = Number(v); })), ' mm'),   // i18n-ignore: unit
      h('span', { text: t('quality') }), h('select', { class: 'pc-select', 'data-mg-fine': '1', on: { change: (ev) => change((x) => { x.fine = Number(ev.target.value); }) } }, ...[['0.5', 'q.fast'], ['1', 'q.normal'], ['2', 'q.fine']].map(([v, k]) => h('option', { value: v, selected: Number(v) === st.fine, text: t(k) })))),
    h('p', { class: 'pc-note', 'data-mg-box': '1', text: boxText + ' ' + t('box.note') }));

    const placed = placedCount();
    pane.append(h('div', { 'data-magnetics': '1' },
      h('p', { class: 'pc-note', text: t('intro') }),
      h('h3', { text: t('h.setup') }), ...setupKids,
      h('div', { class: 'mg-btns' }, h('button', { type: 'button', class: 'pc-btn is-primary', 'data-mg-solve': '1', disabled: S.busy, text: S.busy ? t('msg.working') : t('btn.solve'), on: { click: () => solve() } })),
      S.msg ? h('p', { class: 'pc-note', 'data-mg-msg': '1', 'aria-live': 'polite', text: S.msg }) : null,
      h('h3', { text: t('h.results') }), h('div', { 'data-mg-results': S.result ? '1' : '0' }, ...results()),
      h('h3', { text: t('h.part') }),
      h('div', { class: 'mg-btns' }, ...SHOW.map((k) => h('label', { class: 'pc-check' }, h('input', { type: 'checkbox', checked: st.show[k], 'data-mg-show': k, on: { change: (ev) => change((x) => { x.show[k] = ev.target.checked; }) } }), ' ' + t('show.' + k)))),
      h('div', { class: 'mg-grid' }, h('span', { text: t('flux.count') }), numIn({ 'data-mg-nflux': '1', min: '2', max: '60', step: '1' }, st.flux, (v) => onFlux(v))),
      h('div', { class: 'mg-btns' }, h('button', { type: 'button', class: 'pc-btn', 'data-mg-place': '1', disabled: !S.result, text: placed ? t('btn.replace') : t('btn.place'), on: { click: () => place() } }),
        h('button', { type: 'button', class: 'pc-btn', 'data-mg-clear': '1', disabled: !placed, text: t('btn.clear'), on: { click: () => clear() } })),
      h('p', { class: 'pc-note', 'data-mg-placed': String(placed), text: placed ? t('part.placed', { n: placed }) : t('part.note') }),
      h('h3', { text: t('h.export') }),
      h('div', { class: 'mg-btns' }, ...['summary', 'field', 'vtk', 'svg', 'study'].map((k) => h('button', { type: 'button', class: 'pc-btn', 'data-mg-export': k, disabled: k !== 'study' && !S.result, text: t('export.' + k), on: { click: () => download(k) } }))),
      h('p', { class: 'pc-note', text: t('limits') })));
  }

  // the flux line count changes only the drawing: the lines are drawn again from the result, without solving again
  function onFlux(v) {
    const n = S.study.flux;
    change((x) => { x.flux = Number(v); });
    if (S.result && S.study.flux !== n) { S.result.flux = fluxLines(S.result.res, S.study.flux); render(); }
  }

  const tabPane = api.ui.panelTab({ id: 'magnetics', title: t('tab'), render: (el) => { pane = el; render(); } });
  if (tabPane) pane = tabPane;
  api.part.onChange(() => { if (pane && !S.busy) render(); });   // new or changed sketches, undo of the display bodies
  if (typeof window !== 'undefined') window.ccMagnetics = { state: S, solve, place, clear, download, onFlux };
  return () => {
    try { worker?.terminate(); } catch { /* gone */ }
    styleEl?.remove();
    if (typeof window !== 'undefined' && window.ccMagnetics?.state === S) delete window.ccMagnetics;
  };
}
