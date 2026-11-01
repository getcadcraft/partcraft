/* SPDX-License-Identifier: Apache-2.0 */
/**
 * magnet-study-ui.js — Tools › Magnet study of a sketch… (0.8 SG.7+, session oltl-su_PART_3): the dialog over magnet-study.js and physics_PART_3's
 * magnetSolve. Choose the sketches whose closed profiles are the bodies (touching bodies go in different sketches), give each one its part in the
 * model — air, iron (μr or a B–H curve), a permanent magnet (Br, direction), a coil (total current) — pick the bodies to take the force and torque on,
 * Run: the solve is in a compute worker, the field |B| is drawn over the model with the answers beside it, and Save results writes a CSV. Planar:
 * everything is per metre of depth, and the force is scaled by the depth you give. The Problems it raises go to the shell like every other check.
 *
 *   openMagnetDialog(ctx) → Promise<summary | null>
 *     ctx = { ask, el, status, part(), computeWorker(modules, opts), refreshProblems(), download(bytes, name, mime) }
 *   magnetProblemsNow() → the shared Problems for the last run
 * Test hook: window.partcraftMagnet = { state, run }.
 */
import { sketchesOf, loopsOfSketches, defaultSpecs, buildJob, summarize, magnetProblems, resultCsv, fieldColour, ROLES } from './magnet-study.js';
import { t } from './i18n.js';

const KEY = 'partcraft.magnet';
const M = { specs: {}, picked: null, result: null, sum: null, meta: null, used: null, busy: false, worker: null, view: null };
const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; } };
const keep = () => { try { localStorage.setItem(KEY, JSON.stringify(M.specs)); } catch { /* a private window: this session only */ } };

export const magnetProblemsNow = () => (M.sum && M.meta ? magnetProblems(M.sum, M.meta, M.used || []) : []);

/** |B| over the model: each triangle in its colour, the body outlines on top with their numbers. Returns the screen → model mapping for a probe. */
function paint(cv, res, loops, meta, bmax) {
  const g = cv.getContext('2d'), W = cv.width, H = cv.height, [x0, y0, x1, y1] = meta.box, k = Math.min(W / (x1 - x0), H / (y1 - y0)) * 0.98;
  const ox = (W - (x1 - x0) * k) / 2, oy = (H - (y1 - y0) * k) / 2;
  const X = (x) => ox + (x - x0) * k, Y = (y) => H - (oy + (y - y0) * k);
  g.clearRect(0, 0, W, H);
  const { nodes, tris } = res.mesh, mag = res.B.mag, top = bmax > 0 ? bmax : 1;
  for (let e = 0; e < tris.length / 3; e++) {
    const a = tris[3 * e], b = tris[3 * e + 1], c = tris[3 * e + 2];
    g.fillStyle = fieldColour(mag[e] / top);
    g.beginPath(); g.moveTo(X(nodes[2 * a]), Y(nodes[2 * a + 1])); g.lineTo(X(nodes[2 * b]), Y(nodes[2 * b + 1])); g.lineTo(X(nodes[2 * c]), Y(nodes[2 * c + 1])); g.closePath(); g.fill();
    g.strokeStyle = g.fillStyle; g.lineWidth = 0.5; g.stroke();   // no hairline gaps between triangles
  }
  g.lineWidth = 1.2; g.strokeStyle = '#111'; g.fillStyle = '#111'; g.font = '12px system-ui, sans-serif';
  loops.forEach((l, i) => {
    g.beginPath(); l.forEach(([x, y], j) => { const px = X(x * 1e-3), py = Y(y * 1e-3); if (j) g.lineTo(px, py); else g.moveTo(px, py); }); g.closePath(); g.stroke();
    let cx = 0, cy = 0; for (const [x, y] of l) { cx += x; cy += y; } cx /= l.length; cy /= l.length;
    g.fillStyle = '#fff'; g.fillRect(X(cx * 1e-3) - 7, Y(cy * 1e-3) - 8, 14, 14); g.fillStyle = '#111'; g.fillText(String(i + 1), X(cx * 1e-3) - 3.5 * String(i + 1).length, Y(cy * 1e-3) + 4);
  });
}

export async function openMagnetDialog(ctx) {
  const { el } = ctx;
  const part = ctx.part(), sketches = sketchesOf(part);
  if (!sketches.length) { ctx.status(t('study.mag.ui.no_sketch'), true); return null; }
  M.specs = { ...load(), ...M.specs };
  M.picked = new Set((M.picked && [...M.picked].filter((id) => sketches.some((s) => s.id === id)).length ? [...M.picked] : sketches.map((s) => s.id)).filter((id) => sketches.some((s) => s.id === id)));
  let current = null;   // { loops, origin }
  const num = (v, d) => (Number.isFinite(Number(v)) && String(v).trim() !== '' ? Number(v) : d);
  const depth = el('input', { type: 'number', className: 'pc-input', value: String(M.depth ?? 100), min: '0.001', step: 'any', inputMode: 'decimal', dataset: { magDepth: '1' } });
  const fine = el('select', { className: 'pc-select', dataset: { magFine: '1' } }, ...[['0.5', 'study.mag.ui.q.fast'], ['1', 'study.mag.ui.q.normal'], ['2', 'study.mag.ui.q.fine']].map(([v, k]) => el('option', { value: v, selected: v === String(M.fine ?? 1) }, t(k))));
  const pad = el('select', { className: 'pc-select', dataset: { magPad: '1' } }, ...[['1', 'study.mag.ui.pad.1'], ['2', 'study.mag.ui.pad.2'], ['4', 'study.mag.ui.pad.4']].map(([v, k]) => el('option', { value: v, selected: v === String(M.pad ?? 1) }, t(k))));
  const picks = el('div', { className: 'pc-mag-sketches', dataset: { magSketches: '1' } }, ...sketches.map((s) => {
    const cb = el('input', { type: 'checkbox', checked: M.picked.has(s.id), dataset: { magSketch: s.id } });
    cb.addEventListener('change', () => { if (cb.checked) M.picked.add(s.id); else M.picked.delete(s.id); rebuild(); });
    return el('label', { className: 'pc-check' }, cb, ' ', s.name);
  }));
  const table = el('div', { className: 'pc-mag-regions', dataset: { magRegions: '1' } });
  const out = el('div', { className: 'pc-mag-out', dataset: { magOut: '1' }, 'aria-live': 'polite' }, el('p', { className: 'pc-note' }, t('study.mag.ui.choose')));
  const specKey = (o) => o.sketch + ':' + o.n;
  const specOf = (i) => (M.specs[specKey(current.origin[i])] ||= defaultSpecs(1)[0]);

  function rebuild() {
    const chosen = sketches.filter((s) => M.picked.has(s.id));
    if (!chosen.length) { current = null; table.replaceChildren(el('p', { className: 'pc-msg' }, t('study.mag.ui.none_picked'))); return; }
    const r = loopsOfSketches(chosen);
    if (r.error) { current = null; table.replaceChildren(el('p', { className: 'pc-msg' }, r.error)); return; }
    current = r;
    table.replaceChildren(...r.loops.map((l, i) => row(i)));
  }
  function row(i) {
    const o = current.origin[i], s = specOf(i);
    const upd = (patch) => { Object.assign(s, patch); keep(); };
    const role = el('select', { className: 'pc-select', dataset: { magRole: String(i + 1) } }, ...ROLES.map((r) => el('option', { value: r, selected: r === s.role }, t('study.mag.role.' + r))));
    const numIn = (label, key, step, unit) => {
      const inp = el('input', { type: 'number', className: 'pc-input pc-mag-num', value: String(s[key]), step: step || 'any', inputMode: 'decimal', dataset: { magField: key + ':' + (i + 1) } });
      inp.addEventListener('change', () => upd({ [key]: num(inp.value, s[key]) }));
      return el('label', { className: 'pc-field-inline' }, el('span', {}, label), inp, unit ? ' ' + unit : '');
    };
    const curve = el('textarea', { className: 'pc-input', rows: 3, placeholder: t('study.mag.ui.curve_ph'), dataset: { magCurve: String(i + 1) } }, s.curve || '');
    curve.addEventListener('change', () => upd({ curve: curve.value }));
    const force = el('input', { type: 'checkbox', checked: !!s.force, dataset: { magForce: String(i + 1) } });
    force.addEventListener('change', () => upd({ force: force.checked }));
    const params = el('span', { className: 'pc-mag-params' });
    const fill = () => {
      const kids = [];
      if (s.role === 'iron') kids.push(numIn('μr', 'mur', '1'), el('details', {}, el('summary', {}, t('study.mag.ui.curve')), el('p', { className: 'pc-note' }, t('study.mag.ui.curve_note')), curve));
      if (s.role === 'magnet') kids.push(numIn('Br', 'br', '0.01', 'T'), numIn(t('study.mag.ui.angle'), 'angle', '1', '°'), numIn('μr', 'murMag', '0.01'));
      if (s.role === 'coil') kids.push(numIn(t('study.mag.ui.current'), 'current', '1', 'A'));
      if (s.role !== 'air') kids.push(el('label', { className: 'pc-check' }, force, ' ', t('study.mag.ui.force')));
      params.replaceChildren(...kids);
    };
    role.addEventListener('change', () => { upd({ role: role.value }); fill(); });
    fill();
    const l = current.loops[i];
    let a = 0; for (let k = 0, j = l.length - 1; k < l.length; j = k++) a += l[j][0] * l[k][1] - l[k][0] * l[j][1];
    return el('div', { className: 'pc-mag-row', dataset: { magRow: String(i + 1) } },
      el('strong', {}, String(i + 1)), ' ', el('span', { className: 'pc-note' }, t('study.mag.ui.loop', { sketch: o.name, n: o.n, area: +(Math.abs(a) / 2).toFixed(1) })), ' ', role, ' ', params);
  }

  async function run() {
    if (M.busy) return;
    if (!current) { out.replaceChildren(el('p', { className: 'pc-msg' }, t('study.mag.ui.none_picked'))); return; }
    M.depth = num(depth.value, 100); M.fine = num(fine.value, 1); M.pad = num(pad.value, 1);
    const specs = current.loops.map((_, i) => specOf(i));
    const built = buildJob(current.loops, specs, { depth: M.depth, fine: M.fine, pad: M.pad });
    if (built.problems.length) { out.replaceChildren(...built.problems.map((p) => el('p', { className: 'pc-msg' }, p))); return; }
    M.busy = true; out.replaceChildren(el('p', { className: 'pc-note' }, t('study.mag.ui.working')));
    ctx.status(t('study.mag.ui.working'), true);
    try {
      M.worker = M.worker || ctx.computeWorker(['phys-worker.js'], { name: 'PartCraft magnet' });
      const res = await M.worker.call('magnetSolve', built.job);
      const sum = summarize(res, built.meta);
      M.result = res; M.sum = sum; M.meta = built.meta; M.used = specs.map((s) => ({ ...s }));
      show(res, sum, built.meta);
      ctx.refreshProblems?.();
      ctx.status(t('study.mag.ui.done', { B: +sum.bmax.toPrecision(3) }));
    } catch (e) {
      out.replaceChildren(el('p', { className: 'pc-msg' }, t('study.mag.ui.failed', { error: e && e.message ? e.message : String(e) })));
      M.worker?.terminate?.(); M.worker = null;
    } finally { M.busy = false; }
  }
  function show(res, sum, meta) {
    const cv = el('canvas', { width: 560, height: 380, className: 'pc-mag-canvas', role: 'img', 'aria-label': t('study.mag.ui.plot_alt'), dataset: { magPlot: '1' } });
    paint(cv, res, current.loops, meta, sum.bmax);
    const rows = [
      el('p', { className: 'pc-note', dataset: { magBmax: String(+sum.bmax.toPrecision(5)) } }, t('study.mag.ui.bmax', { B: +sum.bmax.toPrecision(4), x: +sum.bmaxAt[0].toFixed(2), y: +sum.bmaxAt[1].toFixed(2) })),
      el('p', { className: 'pc-note' }, t('study.mag.ui.mesh', { tris: sum.tris, it: sum.iterations, ms: sum.ms })),
    ];
    for (const b of sum.bodies) rows.push(el('p', { className: 'pc-note', dataset: { magBody: String(b.loop), magFx: String(+b.fx.toPrecision(6)), magFy: String(+b.fy.toPrecision(6)), magTorque: String(+b.torque.toPrecision(6)) } },
      t('study.mag.ui.body', { n: b.loop, fx: +b.fx.toPrecision(4), fy: +b.fy.toPrecision(4), f: +b.force.toPrecision(4), tau: +b.torque.toPrecision(4) })));
    if (sum.bodies.length) rows.push(el('p', { className: 'pc-note' }, t('study.mag.ui.depth_note', { d: sum.depthMm })));
    const csv = el('button', { type: 'button', className: 'pc-btn', dataset: { magCsv: '1' } }, t('study.mag.ui.csv'));
    csv.addEventListener('click', () => ctx.download?.(new TextEncoder().encode(resultCsv(sum)), (part.name || 'part') + ' magnet study.csv', 'text/csv'));
    for (const p of magnetProblems(sum, meta, M.used)) rows.push(el('p', { className: 'pc-msg' }, t(p.msg.key, p.msg.vars)));
    out.replaceChildren(cv, ...rows, el('p', { className: 'pc-note' }, t('study.mag.ui.limits')), csv);
  }

  const runBtn = el('button', { type: 'button', className: 'pc-btn is-primary', dataset: { magRun: '1' } }, t('study.mag.ui.run'));
  runBtn.addEventListener('click', run);
  window.partcraftMagnet = { state: M, run, rebuild, specs: () => current && current.loops.map((_, i) => specOf(i)), loops: () => current && current.loops };
  const field = (label, input) => el('label', { className: 'pc-field' }, el('span', {}, label), input);
  rebuild();
  const body = el('div', { className: 'pc-form pc-mag', dataset: { magDialog: '1' } },
    el('p', { className: 'pc-note' }, t('study.mag.ui.intro')),
    field(t('study.mag.ui.sketches'), picks), el('p', { className: 'pc-note' }, t('study.mag.ui.touching')),
    table,
    field(t('study.mag.ui.depth'), el('span', { className: 'pc-inline' }, depth, ' mm')),   // i18n-ignore: the unit
    field(t('study.mag.ui.quality'), fine), field(t('study.mag.ui.pad'), pad),
    runBtn, out);
  await ctx.ask({ title: t('study.mag.ui.title'), body, buttons: [['close', t('app.btn.close'), 'pc-btn']] });
  M.worker?.terminate?.(); M.worker = null;
  delete window.partcraftMagnet;
  return M.sum;
}
