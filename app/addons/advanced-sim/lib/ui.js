/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui.js — the Advanced simulation tab (0.8 SU.891). Plain DOM, drawn again from the state after every change (main.js render()).
 * Every word comes from the add-on's language file through app.t. Hooks for tests: data-asim (the pane), data-asim-act="<action>",
 * data-asim-field="<name>", data-asim-pair="<id>", data-asim-row="<key>".
 *
 *   mountPanel(el, app)   app = main.js' object: t, state(), info(), and the actions (setKind, setNl, findPairs, addPairs, editPair, dropPair,
 *                         run, deck, frd, showBands, clearBands, setField, setGap)
 */
const sig = (v, p = 4) => (Number.isFinite(+v) ? String(+(+v).toPrecision(p)) : String(v ?? ''));

export function mountPanel(root, app) {
  const { t } = app, S = app.state(), info = app.info();
  const d = root.ownerDocument;
  const el = (tag, props = {}, ...kids) => {
    const e = d.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
      if (v === undefined || v === null || v === false) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : String(v));
    }
    for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(c);
    return e;
  };
  const btn = (label, act, fn, { primary = false, disabled = false } = {}) => el('button', { type: 'button', class: 'pc-btn' + (primary ? ' is-primary' : ''), 'data-asim-act': act, disabled: disabled || S.busy, onclick: () => fn() }, label);
  const num = (name, value, fn, { min, max, step = 'any', placeholder } = {}) => el('input', {
    type: 'number', class: 'pc-input', 'data-asim-field': name, value: value === null || value === undefined ? '' : String(value), min, max, step, placeholder,
    onchange: (ev) => { const s = String(ev.target.value).trim(); fn(s === '' ? null : Number(s)); },
  });
  const row = (k, v) => [el('span', { class: 'k' }, k), el('span', { class: 'v' }, v)];
  const head = (s) => el('p', { class: 'pc-props-sub' }, s);
  const note = (s, cls = '') => el('p', { class: 'pc-note' + (cls ? ' ' + cls : '') }, s);

  const box = el('div', { 'data-asim': '', class: 'asim' });
  box.append(el('p', { class: 'pc-note', 'data-asim-honest': '' }, t('panel.honest')));

  // ---- the part and its study
  const part = el('div', { class: 'pc-block' }, head(t('part.heading')));
  const g = el('div', { class: 'asim-grid' });
  g.append(...row(t('part.pieces'), String(info.pieces)));
  if (!info.study) part.append(g, note(t('part.no_study')));
  else {
    g.append(...row(t('part.kind'), t('kind.' + info.kind)));
    if (info.material) g.append(...row(t('part.material'), t('part.material_value', { name: info.material.name, E: sig(info.material.E), y: info.material.yield ? sig(info.material.yield) : '-' })));
    g.append(...row(t('part.supports'), String(info.supports)), ...row(t('part.loads'), String(info.loads)));
    part.append(g);
    if (!info.supports || !info.loads) part.append(note(t('part.need_bcs')));
  }
  box.append(part);

  // ---- study type
  const kind = info.study ? info.kind : null;
  const ty = el('div', { class: 'pc-block' }, head(t('type.heading')),
    el('div', { class: 'pc-actions' },
      btn(t('type.nonlinear'), 'kind-nonlinear', () => app.setKind('nonlinear'), { primary: kind === 'nonlinear' }),
      btn(t('type.contact'), 'kind-contact', () => app.setKind('contact'), { primary: kind === 'contact' })),
    note(t('type.note')));
  if (kind === 'nonlinear' || kind === 'contact') {
    const gy = el('div', { class: 'asim-grid' });
    gy.append(el('label', { class: 'k' }, t('nl.steps')), num('steps', info.steps, (v) => app.setNl({ steps: v }), { min: 1, max: 100, step: 1 }));
    gy.append(el('label', { class: 'k' }, t('nl.et')), num('Et', info.Et, (v) => app.setNl({ Et: v }), { min: 0, step: 'any', placeholder: info.material ? sig(info.material.E / 100) : '' }));
    ty.append(gy, note(t('nl.et_note', { E: info.material ? sig(info.material.E / 100) : '-' })));
  }
  box.append(ty);

  // ---- contact pairs
  if (kind === 'contact') {
    const cp = el('div', { class: 'pc-block', 'data-asim-pairs': String(S.study?.contacts?.length || 0) }, head(t('pairs.heading')));
    const gg = el('div', { class: 'asim-grid' });
    gg.append(el('label', { class: 'k' }, t('pairs.gap')), num('gap', S.gap, (v) => app.setGap(v), { min: 0, max: 50, step: 'any' }));
    cp.append(gg, el('div', { class: 'pc-actions' }, btn(t('pairs.find'), 'find-pairs', () => app.findPairs())));
    if (S.found) {
      if (!S.found.length) cp.append(note(info.pieces < 2 ? t('pairs.one_piece') : t('pairs.none', { gap: sig(S.gap) })));
      else {
        const ul = el('ul', { class: 'asim-list', 'data-asim-found': String(S.found.length) });
        for (const p of S.found) ul.append(el('li', {}, t('pairs.found_one', { a: p.aName, b: p.bName, gap: sig(p.gap, 3), area: sig(p.overlap, 3) })));
        cp.append(ul, el('div', { class: 'pc-actions' }, btn(t('pairs.add', { n: S.found.length }), 'add-pairs', () => app.addPairs(), { primary: true })));
      }
    }
    const pairs = S.study?.contacts || [];
    if (!pairs.length) cp.append(note(t('pairs.empty')));
    for (const c of pairs) {
      const sel = el('select', { class: 'pc-input', 'data-asim-field': 'type', onchange: (ev) => app.editPair(c.id, { type: ev.target.value }) },
        ...['frictionless', 'bonded'].map((k) => el('option', { value: k, selected: c.type === k }, t('pair.' + k))));
      sel.value = c.type;
      cp.append(el('div', { class: 'asim-pair', 'data-asim-pair': c.id },
        el('p', { class: 'asim-pair-name' }, t('pair.name', { n: c.id.replace(/\D/g, ''), a: c.faces.map((f) => f.name).join(', '), b: c.master.map((f) => f.name).join(', ') })),
        el('div', { class: 'asim-grid' }, el('label', { class: 'k' }, t('pair.type')), sel,
          el('label', { class: 'k' }, t('pair.factor')), num('factor', c.factor, (v) => app.editPair(c.id, { factor: v }), { min: 1, max: 10000 })),
        el('div', { class: 'pc-actions' }, btn(t('pair.swap'), 'swap-pair', () => app.editPair(c.id, { swap: true })), btn(t('pair.remove'), 'drop-pair', () => app.dropPair(c.id)))));
    }
    cp.append(note(t('pairs.note')));
    box.append(cp);
  }

  // ---- run and results
  const rn = el('div', { class: 'pc-block' }, head(t('run.heading')),
    el('div', { class: 'pc-actions' }, btn(S.busy ? t('run.busy') : t('run.go'), 'run', () => app.run(), { primary: true, disabled: !(kind === 'nonlinear' || kind === 'contact') })));
  if (S.problems && S.problems.length) rn.append(el('ul', { class: 'asim-list asim-bad', 'data-asim-problems': String(S.problems.length) }, ...S.problems.map((p) => el('li', {}, p))));
  if (S.result) {
    const sm = app.summary();
    const rg = el('div', { class: 'asim-grid', 'data-asim-result': sm.ok ? 'ok' : 'failed' });
    for (const r of sm.rows) rg.append(el('span', { class: 'k' }, t(r.key + '.k')), el('span', { class: 'v', 'data-asim-row': r.key }, t(r.key, r.vars)));
    rn.append(head(S.result.calculix ? t('res.heading_ccx') : t('res.heading')), rg);
    if (sm.steps.length) {
      const tb = el('table', { class: 'asim-steps', 'data-asim-steps': String(sm.steps.length) },
        el('thead', {}, el('tr', {}, el('th', {}, t('steps.load')), el('th', {}, t('steps.iter')), el('th', {}, t('steps.plastic')), el('th', {}, t('steps.residual')))));
      const body = el('tbody');
      for (const s of sm.steps) body.append(el('tr', {}, el('td', {}, Math.round(100 * s.lambda) + ' %'), el('td', {}, String(s.iterations)), el('td', {}, String(s.plastic)), el('td', {}, sig(s.residual, 2))));
      tb.append(body); rn.append(tb);
    }
    // the plot as display bodies beside the part
    const fields = app.fields();
    if (fields.length) {
      const fs = el('select', { class: 'pc-input', 'data-asim-field': 'plot', onchange: (ev) => app.setField(ev.target.value) }, ...fields.map((f) => el('option', { value: f, selected: S.field === f }, t('plot.' + f))));
      fs.value = S.field;
      rn.append(el('div', { class: 'asim-grid' }, el('label', { class: 'k' }, t('plot.label')), fs),
        el('div', { class: 'pc-actions' }, btn(t('plot.show'), 'show-bands', () => app.showBands()), btn(t('plot.remove'), 'clear-bands', () => app.clearBands(), { disabled: !app.bandsShown() })));
      if (S.legend) {
        const lg = el('div', { class: 'asim-legend', 'data-asim-legend': String(S.legend.bands.length) });
        for (const b of S.legend.bands) lg.append(el('span', { class: 'asim-swatch', style: 'background:' + b.color, title: sig(b.lo, 3) + ' – ' + sig(b.hi, 3) }));
        rn.append(lg, note(t('plot.legend', { lo: sig(S.legend.lo, 3), hi: sig(S.legend.hi, 3), unit: t('unit.' + S.legend.field), scale: sig(S.legend.scale, 3) })));
      }
      rn.append(note(t('plot.note')));
    }
  }
  box.append(rn);

  // ---- CalculiX
  box.append(el('div', { class: 'pc-block', 'data-asim-ccx': '' }, head(t('ccx.heading')),
    el('p', { class: 'pc-note asim-warn', 'data-asim-ccx-honest': '' }, t('ccx.never_run')),
    el('div', { class: 'pc-actions' },
      btn(t('ccx.export'), 'deck', () => app.deck(), { disabled: !(kind === 'nonlinear' || kind === 'contact') }),
      btn(t('ccx.import'), 'frd', () => app.frd(), { disabled: !(kind === 'nonlinear' || kind === 'contact') })),
    note(t('ccx.note'))));

  if (S.msg) box.append(el('p', { class: 'pc-note', role: 'status', 'data-asim-msg': '' }, S.msg));
  root.replaceChildren(box);
}
