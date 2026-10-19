/* SPDX-License-Identifier: Apache-2.0 */
/**
 * params-panel.js — the Parameters tab of PartCraft's right panel, the expression-aware number fields, the sketch
 * dimension box's equations, configurations (design-table rows saved in the part, configs.js; 0.4 P18), scripts and the
 * rollback steps (DOM through ui-util el(): text only).
 *
 *   const pp = mountParams(host)   host = { root, part(), commit(label, fn) (one undo step + rebuild + render),
 *                                          status(msg, keep?), ask({ title, text, buttons }), download(text, name, type),
 *                                          openText(text, name), mode(), fileBase() }
 *   pp.render()                     the panel (call from renderAll); also drops equations whose numbers were deleted; under
 *                                   each parameter, where it is used (params-uses.js; 0.5 WL.30): a feature's use selects it
 *                                   through host.selectFeature(id) when the host has one
 *   pp.numInput(value, onchange, { min, max, step }, key)
 *                                   a number field for target `key` (params-part.js): a plain number in an unlinked field
 *                                   calls onchange(v) as before; "=expr" (or any expression) links it; a plain number in
 *                                   a linked field solves the variable behind it (driveBack, a dialog when several);
 *                                   the "ƒ" button after a driven field shows its equation and unlinks it
 *   pp.dimTyped(sketchId, constraintId, text) → true when it handled the text typed in the sketch's dimension box
 *   pp.key(e) → true for the rollback keys ([ back one feature, ] forward one, End to the end; model mode only)
 *   pp.roll(delta | 'end')
 */
import { el, swapChildren } from './ui-util.js';
import * as PR from './params.js';
import * as PP from './params-part.js';
import { literal, formatNumber } from './expr.js';
import { partToScript, scriptToPart, ScriptError } from './script.js';
import * as CF from './configs.js';
import { paramUses, usesCount } from './params-uses.js';
import { t } from './i18n.js';

const fmt = (v) => (v === null || v === undefined ? '' : formatNumber(v));
let uid = 0;

export function mountParams(host) {
  const panel = host.root.querySelector('[data-params]');
  // the tabs are read live: an add-on may add its own (ui.panelTab, 0.5 AO.7)
  // the tab strip kept at start: it travels with the right panel into the pop-out panels window (another document)
  const strip = host.root.querySelector('[data-right-tabs]');
  const allTabs = () => (strip ? [...strip.querySelectorAll('[role="tab"]')] : []);
  const tabs = allTabs();
  let lastLabels = new Map(); // key → label, for saying which equations went with deleted numbers

  // ---------------------------------------------------------------- tabs (Properties | Parameters)
  function showTab(name, focus = false) {
    for (const tb of allTabs()) {
      const on = tb.dataset.tab === name;
      tb.setAttribute('aria-selected', String(on));
      tb.tabIndex = on ? 0 : -1;
      const sec = tb.ownerDocument.getElementById(tb.getAttribute('aria-controls')) || host.root.querySelector('#' + tb.getAttribute('aria-controls'));
      if (sec) { const was = sec.hidden; sec.hidden = !on; if (on && was && sec.dataset.addon !== undefined) sec.dispatchEvent(new CustomEvent('cc-tab-shown')); }
      if (on && focus) tb.focus();
    }
    if (name === 'params') render();
  }
  for (const tb of tabs) {
    tb.addEventListener('click', () => showTab(tb.dataset.tab));
    tb.addEventListener('keydown', (e) => {
      const vis = allTabs().filter((x) => !x.hidden), i = vis.indexOf(tb);   // a hidden tab (Script outside Design) is skipped
      const j = e.key === 'ArrowRight' ? (i + 1) % vis.length : e.key === 'ArrowLeft' ? (i + vis.length - 1) % vis.length : e.key === 'Home' ? 0 : e.key === 'End' ? vis.length - 1 : -1;
      if (j >= 0) { e.preventDefault(); e.stopPropagation(); showTab(vis[j].dataset.tab, true); }
    });
  }
  const visible = () => panel && !panel.closest('[role="tabpanel"]')?.hidden;

  // ---------------------------------------------------------------- edits: always one undo step, values re-resolved
  /** Try `op(params)` on a copy; when it works, commit it (params replaced, equations applied) as one step. */
  function edit(label, op) {
    const part = host.part();
    const trial = part.params ? PR.cloneParams(part.params) : PR.emptyParams();
    let r;
    try { r = op(trial, part); } catch (e) { r = { ok: false, error: e.message }; }
    if (r && r.ok === false) return r;
    const before = part.params;
    const res = host.commit(label, () => {
      const p = host.part();
      // configurations (configs.js): the op's new list, else the old one, following renamed and deleted parameters
      const cfg = CF.followParams(r && r.configs !== undefined ? r.configs : p.configs, before, trial);
      if (cfg && cfg.rows.length) p.configs = cfg; else delete p.configs;
      // 0.6 LC.14: a configuration that controls features turns its own off and every other one on, in the same step
      if (r && r.off) for (const f of p.features) { if (r.off.has(f.id)) f.suppressed = true; else delete f.suppressed; }
      p.params = trial;
      PP.tidyParams(p);
      return PP.applyPartParams(p);
    });
    if (res && res.errors && res.errors.length) host.status(problemText(res.errors), true);
    return { ok: true, ...r, applied: res };
  }
  function problemText(errors) {
    const tg = PP.partAdapter.targets(host.part());
    return errors.map((e) => t('ui.params.target_error', { label: tg.get(e.where)?.label || e.where, error: e.message })).join(' ');
  }
  /** driveBack / driveVar, asking which variable when several drive the value. */
  async function solveBack(label, run) {
    let r = run(null, true);
    if (!r.ok && r.choices && r.choices.length > 1) {
      const pick = await host.ask({
        title: t('ui.params.solve.title'),
        text: t('ui.params.solve.text', { error: r.error }),
        buttons: [['cancel', t('ui.params.cancel'), 'pc-btn'], ...r.choices.map((c) => [c, c, 'pc-btn is-primary'])],
      });
      if (pick === 'cancel' || !r.choices.includes(pick)) { host.status(t('ui.params.solve.nothing')); return false; }
      r = run(pick, true);
    }
    if (!r.ok) { host.status(r.error, true); return false; }
    const done = edit(label, (p) => run(r.var || null, false, p));
    if (done.ok === false) { host.status(done.error, true); return false; }
    host.status(r.direct ? '' : r.var ? t('ui.params.solve.done', { name: r.var, from: formatNumber(r.from), to: formatNumber(r.to) }) : t('ui.params.solve.gives', { value: r.to }));
    return true;
  }

  // ---------------------------------------------------------------- number fields (feature panels, sketch dimensions)
  function numInput(value, onchange, { min = null, max = null } = {}, key) {
    const part = host.part();
    const link = PP.linkOf(part, key);
    const tg = PP.partAdapter.targets(part).get(key);
    const show = (v) => (Number.isFinite(v) ? String(Number(v.toFixed(6))) : '');   // as partcraft.js numInput shows numbers
    const inp = el('input', { type: 'text', className: 'pc-input pc-pnum' + (link ? ' is-driven' : ''), id: 'pc-p' + (++uid), value: show(value), inputMode: 'decimal', autocomplete: 'off', spellcheck: false, dataset: { paramKey: key } });
    inp.title = link ? t('ui.params.field.driven', { expr: link.expr }) : t('ui.params.field.plain');
    // The input is returned bare, so panels keep <label> immediately followed by its <input> (tests and layouts rely on
    // it). The ƒ marker goes inside that label once the panel has placed both.
    if (link) {
      const fx = el('button', {
        type: 'button', className: 'pc-fx', title: t('ui.params.fx.title', { expr: link.expr }), 'aria-label': t('ui.params.fx.label', { label: tg?.label || key, expr: link.expr }),
        onclick: (e) => { e.preventDefault(); unlink(key); },
      }, 'ƒ');
      queueMicrotask(() => {
        if (!inp.isConnected) return;
        const prev = inp.previousElementSibling;
        const lab = prev?.tagName === 'LABEL' ? prev : document.querySelector(`label[for="${inp.id}"]`);
        if (lab) lab.append(' ', fx);
      });
    }
    // Esc keeps the old number; Enter sets the typed one (leaving the box fires its change)
    // Applied once per new text, on Enter, change or leaving the box: a value set by script (the first digit typed with a
    // feature selected, partcraft.js) fires no change event when the box loses focus (0.6, found by PU.3's test)
    let last = show(value);
    const apply = () => { if (inp.value === last) return; last = inp.value; typed(key, inp.value, value, onchange, { min, max }).then((ok) => { if (!ok && inp.isConnected) inp.value = last = show(value); }); };
    inp.addEventListener('keydown', (e) => { if (e.key === 'Escape') { inp.value = show(value); inp.blur(); } else if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); apply(); inp.blur(); } });
    inp.addEventListener('change', apply);
    inp.addEventListener('blur', apply);
    return inp;
  }

  /** Text typed into the field of target `key`. → true when something changed. */
  async function typed(key, raw, old, onchange, { min = null, max = null } = {}) {
    const s = String(raw).trim();
    if (!s) return false;
    const part = host.part();
    const tg = PP.partAdapter.targets(part).get(key);
    if (!tg) return false;
    const link = PP.linkOf(part, key);
    const lit = s.startsWith('=') ? null : literal(s);
    if (lit === null) {
      const expr = s.replace(/^=\s*/, '');
      if (!expr) { host.status(t('ui.params.need_expr')); return false; }
      const r = edit(link ? t('ui.params.undo.change_equation') : t('ui.params.undo.link'), (p, pt) => PR.setLink(p, PP.partAdapter, pt, key, expr));
      if (r.ok === false) { host.status(t('ui.params.target_error', { label: tg.label, error: r.error }), true); return false; }
      host.status(t('ui.params.linked', { label: tg.label, expr }));
      return true;
    }
    if (link) return solveBack(t('ui.params.undo.change', { name: tg.label }), (prefer, dry, p) => {
      const pp = p || PR.cloneParams(host.part().params);
      return PR.driveBack(pp, PP.partAdapter, host.part(), key, lit, { prefer });
    });
    const vp = PR.valueProblem({ ...tg, min: min ?? tg.min, max: max ?? tg.max }, lit);
    if (vp) { host.status(vp); return false; }
    if (onchange) onchange(lit);
    return true;
  }

  async function unlink(key) {
    const part = host.part();
    const tg = PP.partAdapter.targets(part).get(key);
    const link = PP.linkOf(part, key);
    if (!link) return;
    const ch = await host.ask({ title: t('ui.params.unlink.title', { label: tg?.label || key }), text: t('ui.params.unlink.text', { expr: link.expr, value: fmt(tg?.get()) }), buttons: [['cancel', t('ui.params.cancel'), 'pc-btn'], ['unlink', t('ui.params.unlink'), 'pc-btn is-primary']] });
    if (ch !== 'unlink') return;
    edit(t('ui.params.unlink'), (p) => ({ ok: PR.removeLink(p, key) }));
    host.status(t('ui.params.unlink.done', { label: tg?.label || key }));
  }

  /** The sketch editor's dimension box: "=expr" links; a number on a driven dimension solves backward. */
  function dimTyped(sketchId, cid, raw) {
    const key = sketchId + '.' + cid;
    const s = String(raw).trim();
    const linked = !!PP.linkOf(host.part(), key);
    if (!s.startsWith('=') && literal(s) !== null && !linked) return false;   // a plain number: the editor sets it
    if (!s.startsWith('=') && literal(s) === null && !/[A-Za-z_]/.test(s)) return false;   // not an expression either: the editor says so
    typed(key, s, null, null).then(() => render());
    return true;
  }

  // ---------------------------------------------------------------- variables
  function setVarFrom(name, fields) {
    const part = host.part();
    const v = part.params && PR.varByName(part.params, name);
    if (!v) return;
    const r = edit(fields.rename !== undefined ? t('ui.params.undo.rename') : fields.note !== undefined ? t('ui.params.undo.note') : t('ui.params.undo.change_param'), (p) =>
      fields.rename !== undefined ? PR.setVar(p, fields.rename, v.expr, { rename: name }) : PR.setVar(p, name, fields.expr ?? v.expr, fields.note !== undefined ? { note: fields.note } : {}));
    if (r.ok === false) { host.status(r.error, true); render(); }
  }
  async function deleteVar(name) {
    const part = host.part();
    const u = PR.usesOf(part.params, name);
    if (u.vars.length || u.links.length) {
      const tg = PP.partAdapter.targets(part);
      const users = [...u.vars, ...u.links.map((k) => tg.get(k)?.label || k)];
      const val = PR.evaluateVars(part.params).values.get(name);
      const ch = await host.ask({ title: t('ui.params.delete.title', { name }), text: t('ui.params.delete.text', { name, users: users.join(', '), value: fmt(val), n: users.length }), buttons: [['cancel', t('ui.params.cancel'), 'pc-btn'], ['inline', t('ui.params.delete.inline'), 'pc-btn is-danger']] });
      if (ch !== 'inline') return;
      const r = edit(t('ui.params.undo.delete'), (p) => PR.removeVar(p, name, { inline: true }));
      if (r.ok === false) host.status(r.error, true); else host.status(t('ui.params.delete.done_inline', { name, users: users.join(', ') }));
      return;
    }
    const r = edit(t('ui.params.undo.delete'), (p) => PR.removeVar(p, name));
    if (r.ok === false) host.status(r.error, true); else host.status(t('ui.params.delete.done', { name }));
  }
  function addVar(nameIn, exprIn) {
    const name = nameIn.value.trim(), expr = exprIn.value.trim() || '0';
    if (!name) { host.status(t('ui.params.need_name')); nameIn.focus(); return; }
    const r = edit(t('ui.params.undo.add'), (p) => PR.setVar(p, name, expr));
    if (r.ok === false) { host.status(r.error, true); return; }
    host.status(t('ui.params.added', { name, expr }));
    setTimeout(() => panel.querySelector('[data-new-name]')?.focus(), 0);
  }

  // ---------------------------------------------------------------- configurations (design-table rows saved in the part)
  const cfgOf = () => host.part().configs || null;
  const valuesText = (row) => Object.entries(row.values).map(([k, v]) => `${k} ${fmt(v)}`).join(', ');
  /** The names of the features a row turns off (0.6 LC.14), in the part's order. */
  const offNames = (row) => { const off = new Set(row.off || []); return host.part().features.filter((f) => off.has(f.id)).map((f) => f.name); };
  const rowText = (row) => { const off = offNames(row); return off.length ? t('configs.values_off', { values: valuesText(row), off: off.join(', ') }) : valuesText(row); };
  function importTable(file) {
    const rd = new FileReader();
    rd.onload = () => {
      const part = host.part();
      if (!part.params || !part.params.vars.length) { host.status(t('configs.need_params'), true); return; }
      let rows;
      try { rows = CF.rowsFromTable(String(rd.result).slice(0, 4 * 1024 * 1024), part.params); } catch (e) { host.status(e.message, true); return; }
      // a design table carries values only: a row it replaces keeps the features it turns off (0.6 LC.14)
      const r = edit(t('configs.undo.import'), () => { let cfg = cfgOf(); for (const row of rows) cfg = CF.saveRow(cfg, row, { keepOff: true }); return { ok: true, configs: cfg }; });
      if (r.ok === false) host.status(r.error, true);
      else host.status(t('configs.imported', { n: rows.length, file: file.name.slice(0, 120) }));
    };
    rd.readAsText(file);
  }
  function applyRow(row) {
    const off = CF.featuresOff(cfgOf(), row);
    const r = edit(t('configs.undo.apply', { name: row.name }), (p) => { CF.applyRow(p, row); return { ok: true, configs: { ...cfgOf(), active: row.name }, off }; });
    if (r.ok === false) host.status(r.error, true);
    else if (!r.applied?.errors?.length) host.status(t('configs.applied', { name: row.name, values: rowText(row) }));
  }
  function saveCurrent(name, label) {
    const part = host.part();
    const clean = CF.cleanName(name);
    if (!clean) { host.status(t('configs.need_name'), true); return false; }
    if (!part.params || !part.params.vars.some(PR.isDriving)) { host.status(t('configs.need_params'), true); return false; }
    const row = CF.rowFromCurrent(part.params, clean, part.features);
    const r = edit(label || t('configs.undo.save', { name: clean }), () => ({ ok: true, configs: { ...CF.saveRow(cfgOf(), row), active: row.name } }));
    if (r.ok === false) { host.status(r.error, true); return false; }
    host.status(t('configs.saved', { name: clean, values: rowText(row) }));
    return true;
  }
  function renameRow(row, to) {
    const r = edit(t('configs.undo.rename', { name: row.name }), () => ({ ok: true, configs: CF.renameRow(cfgOf(), row.name, to) }));
    if (r.ok === false) { host.status(r.error, true); render(); }
  }
  function deleteRow(row) {
    const r = edit(t('configs.undo.delete', { name: row.name }), () => ({ ok: true, configs: CF.deleteRow(cfgOf(), row.name) }));
    if (r.ok === false) host.status(r.error, true); else host.status(t('configs.deleted', { name: row.name }));
  }
  function exportTable() {
    const part = host.part();
    const p = part.params;
    if (!p || !p.vars.length) { host.status(t('configs.nothing')); return; }
    const cfg = cfgOf() || { rows: [CF.rowFromCurrent(p, t('configs.current'))] };
    host.download(CF.configsCsv(cfg), host.fileBase() + ' design table.csv', 'text/csv');   // i18n-ignore: download file name
    host.status(cfgOf() ? t('configs.exported', { n: cfg.rows.length }) : t('configs.exported_current'));
  }

  // ---------------------------------------------------------------- scripts
  function saveScript() {
    const s = partToScript(host.part(), { inlineStep: true });
    host.download(s.text, host.fileBase() + '.pcscript', 'text/plain');
    host.status(t('ui.params.script.saved', { file: host.fileBase() + '.pcscript' }));
  }
  function openScript(file) {
    const rd = new FileReader();
    rd.onload = async () => {
      let r;
      try { r = scriptToPart(String(rd.result)); } catch (e) {
        const msg = e instanceof ScriptError ? e.errors.slice(0, 3).map((x) => (x.line ? t('ui.params.script.line', { line: x.line, message: x.message }) : x.message)).join(' ') : e.message;
        host.status(t('ui.params.script.cannot', { file: file.name, error: msg }), true);
        await host.ask({ title: t('ui.params.script.cannot_title', { file: file.name }), text: msg, buttons: [['cancel', t('ui.params.ok'), 'pc-btn is-primary']] });
        return;
      }
      await host.openText(JSON.stringify(r.part), file.name);
      if (r.warnings.length) host.status(r.warnings.map((w) => (w.line ? t('ui.params.script.line', { line: w.line, message: w.message }) : w.message)).join(' '), true);
    };
    rd.readAsText(file);
  }

  // ---------------------------------------------------------------- rollback both ways
  function roll(delta) {
    if (host.mode() !== 'model') { host.status(t('ui.params.roll.mode')); return false; }
    const part = host.part();
    const probe = { features: part.features, rollback: part.rollback };
    const r = delta === 'end' ? PP.rollTo(probe, null) : PP.stepRollback(probe, delta);
    if (!r.ok || (delta === 'end' && r.from === r.to)) { host.status(r.ok ? t('ui.params.roll.at_end') : r.message); return false; }
    host.commit(delta === 'end' ? t('ui.params.undo.roll_end') : delta < 0 ? t('ui.params.undo.roll_back') : t('ui.params.undo.roll_forward'), () => { host.part().rollback = probe.rollback; });
    host.status(r.message);
    return true;
  }
  function key(e) {
    if (e.ctrlKey || e.metaKey || e.altKey || host.mode() !== 'model') return false;
    if (e.key === '[') { roll(-1); return true; }
    if (e.key === ']') { roll(1); return true; }
    if (e.key === 'End') { roll('end'); return true; }
    return false;
  }
  for (const b of host.root.querySelectorAll('[data-roll]')) b.addEventListener('click', () => roll(b.dataset.roll === 'end' ? 'end' : b.dataset.roll === 'back' ? -1 : 1));

  // ---------------------------------------------------------------- render
  function pruneGone() {
    const part = host.part();
    if (!part.params?.links?.length) { lastLabels = labelsOf(part); return; }
    const keys = PP.paramTargetKeys(part);
    const gone = part.params.links.filter((l) => !keys.has(l.target));
    if (gone.length) {
      part.params.links = part.params.links.filter((l) => keys.has(l.target));
      PP.tidyParams(part);
      host.status(t('ui.params.dropped', { n: gone.length, list: gone.map((l) => lastLabels.get(l.target) || l.target).join(', ') }), true);
    }
    lastLabels = labelsOf(part);
  }
  const labelsOf = (part) => new Map([...PP.partAdapter.targets(part)].map(([k, tg]) => [k, tg.label]));

  function render() {
    pruneGone();
    updateRollButtons();
    if (!panel || !visible()) return;
    const part = host.part();
    const rep = PP.paramsReport(part);
    const out = [];
    out.push(el('p', { className: 'pc-note', style: 'margin-top:0' }, t('ui.params.intro')));

    // variables, each with where it is used
    const uses = paramUses(part);
    const usedRow = (name) => {
      const u = uses.get(name), items = [];
      const featureBtn = (x, text) => (x.feature && host.selectFeature
        ? el('button', { type: 'button', className: 'pc-linkbtn', onclick: () => host.selectFeature(x.feature), dataset: { useTarget: x.target } }, text)
        : el('span', { dataset: { useTarget: x.target } }, text));
      for (const x of u?.direct || []) items.push(featureBtn(x, x.label));
      for (const x of u?.via || []) items.push(featureBtn(x, t('ui.params.uses.via', { label: x.label, through: x.through.join(', ') })));
      for (const n of u?.vars || []) items.push(el('span', { dataset: { useVar: n } }, t('ui.params.uses.var', { name: n })));
      for (const c of u?.configs || []) items.push(el('span', { dataset: { useConfig: c } }, t('ui.params.uses.config', { name: c })));
      for (const sc of u?.scripts || []) items.push(el('span', { dataset: { useScript: sc.name } }, t(sc.all ? 'ui.params.uses.script_all' : 'ui.params.uses.script', { name: sc.name })));
      const list = [];
      items.forEach((it, i) => { if (i) list.push('; '); list.push(it); });
      return el('tr', { className: 'pc-puses', dataset: { usesOf: name, uses: String(usesCount(u)) } },
        el('td', { colSpan: 5 }, el('span', { className: 'pc-muted' }, usesCount(u) ? t('ui.params.uses.by') + ' ' : t('ui.params.uses.none')), ...list));
    };
    const vrows = rep.vars.flatMap((v) => {
      const name = el('input', { type: 'text', className: 'pc-input', value: v.name, maxLength: 40, 'aria-label': t('ui.params.var.name_of', { name: v.name }), spellcheck: false });
      name.addEventListener('change', () => { const n = name.value.trim(); if (n && n !== v.name) setVarFrom(v.name, { rename: n }); else name.value = v.name; });
      const expr = el('input', { type: 'text', className: 'pc-input', value: v.expr, 'aria-label': t('ui.params.var.expr_of', { name: v.name }), spellcheck: false });
      expr.addEventListener('change', () => { const x = expr.value.trim(); if (x && x !== v.expr) setVarFrom(v.name, { expr: x }); else expr.value = v.expr; });
      const val = el('input', { type: 'text', className: 'pc-input pc-pval', value: fmt(v.value), inputMode: 'decimal', 'aria-label': t('ui.params.var.value_of', { name: v.name }), title: PR.isDriving(v) ? t('ui.params.var.value_title') : t('ui.params.var.driven_title') });
      val.addEventListener('change', () => {
        const n = literal(val.value.trim());
        if (n === null) { host.status(t('ui.params.need_number')); val.value = fmt(v.value); return; }
        solveBack(t('ui.params.undo.change', { name: v.name }), (prefer, dry, p) => PR.driveVar(p || PR.cloneParams(host.part().params), v.name, n, { prefer })).then((ok) => { if (!ok) val.value = fmt(v.value); });
      });
      const note = el('input', { type: 'text', className: 'pc-input', value: v.note, maxLength: 200, 'aria-label': t('ui.params.var.note_on', { name: v.name }), placeholder: t('ui.params.col.note') });
      note.addEventListener('change', () => setVarFrom(v.name, { note: note.value }));
      return [el('tr', { className: v.error ? 'is-error' : '', dataset: { var: v.name } },
        el('td', {}, name), el('td', {}, expr), el('td', {}, val, v.error ? el('div', { className: 'pc-perr' }, v.error) : null), el('td', {}, note),
        el('td', {}, el('button', { type: 'button', className: 'pc-btn pc-btn-sm is-danger', title: t('ui.params.var.delete', { name: v.name }), 'aria-label': t('ui.params.var.delete', { name: v.name }), onclick: () => deleteVar(v.name) }, '×'))),
      usedRow(v.name)];
    });
    const newName = el('input', { type: 'text', className: 'pc-input', placeholder: t('ui.params.new.name_ph'), maxLength: 40, 'aria-label': t('ui.params.new.name'), spellcheck: false, dataset: { newName: '' } });
    const newExpr = el('input', { type: 'text', className: 'pc-input', placeholder: t('ui.params.new.value_ph'), 'aria-label': t('ui.params.new.value'), spellcheck: false, dataset: { newExpr: '' } });
    const onEnter = (e) => { if (e.key === 'Enter') { e.preventDefault(); addVar(newName, newExpr); } };
    newName.addEventListener('keydown', onEnter); newExpr.addEventListener('keydown', onEnter);
    out.push(el('div', { className: 'pc-block' },
      el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('ui.params.vars')),
      el('table', { className: 'pc-ptable', dataset: { vars: '' } },
        el('thead', {}, el('tr', {}, el('th', {}, t('ui.params.col.name')), el('th', {}, t('ui.params.col.expr')), el('th', {}, t('ui.params.col.value')), el('th', {}, t('ui.params.col.note')), el('th', {}, el('span', { className: 'visually-hidden' }, t('configs.delete'))))),
        el('tbody', {}, ...vrows),
        el('tfoot', {}, el('tr', {}, el('td', {}, newName), el('td', { colSpan: 3 }, newExpr), el('td', {}, el('button', { type: 'button', className: 'pc-btn pc-btn-sm is-primary', onclick: () => addVar(newName, newExpr), dataset: { addVar: '' } }, t('touch.add')))))),
    ));

    // equations
    const lrows = rep.links.map((l) => {
      const expr = el('input', { type: 'text', className: 'pc-input', value: l.expr, 'aria-label': t('ui.params.eq.of', { label: l.label }), spellcheck: false });
      expr.addEventListener('change', () => { const x = expr.value.trim(); if (!x || x === l.expr) { expr.value = l.expr; return; } typed(l.target, '=' + x.replace(/^=\s*/, ''), l.value, null); });
      return el('li', { className: 'pc-peq' + (l.error ? ' is-error' : ''), dataset: { target: l.target } },
        el('span', { className: 'pc-peq-label' }, l.label), el('span', { className: 'pc-peq-eq' }, '='), expr,
        el('span', { className: 'pc-peq-val' }, l.error ? '' : '→ ' + fmt(l.result)),
        el('button', { type: 'button', className: 'pc-btn pc-btn-sm', title: t('ui.params.eq.unlink_title', { label: l.label }), onclick: () => unlink(l.target) }, t('ui.params.unlink')),
        l.error ? el('div', { className: 'pc-perr' }, l.error) : null);
    });
    out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('ui.params.eqs')),
      lrows.length ? el('ul', { className: 'pc-peqs', dataset: { links: '' } }, ...lrows) : el('p', { className: 'pc-muted' }, t('ui.params.eqs.empty'))));

    // configurations
    const csvIn = el('input', { type: 'file', className: 'visually-hidden', accept: '.csv,text/csv', tabIndex: -1, 'aria-hidden': 'true', dataset: { tableFile: '' } });
    csvIn.addEventListener('change', () => { const f = csvIn.files[0]; csvIn.value = ''; if (f) importTable(f); });
    const cfg = cfgOf(), params = host.part().params, feats = host.part().features;
    const crows = (cfg?.rows || []).map((r, i) => {
      const active = cfg.active === r.name, same = active && params && CF.rowMatches(params, r, feats, cfg);
      const nameIn = el('input', { type: 'text', className: 'pc-input pc-config-name', value: r.name, maxLength: CF.CONFIG_NAME_MAX, 'aria-label': t('configs.name_label'), dataset: { configName: r.name } });
      nameIn.addEventListener('change', () => { if (CF.cleanName(nameIn.value) !== r.name) renameRow(r, nameIn.value); });
      nameIn.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); nameIn.blur(); } e.stopPropagation(); });
      return el('li', { className: 'pc-prow' + (active ? ' is-active' : ''), dataset: { row: String(i), config: r.name } },
        nameIn,
        active ? el('span', { className: 'pc-config-state', dataset: { configState: same ? 'active' : 'changed' } }, t(same ? 'configs.active' : 'configs.active_changed')) : null,
        el('span', { className: 'pc-muted pc-prow-vals', dataset: { configOff: (r.off || []).length ? offNames(r).join(', ') : '' } }, rowText(r)),
        el('span', { className: 'pc-actions' },
          el('button', { type: 'button', className: 'pc-btn pc-btn-sm', onclick: () => applyRow(r), dataset: { configApply: r.name }, title: t('configs.apply_title') }, t('configs.apply')),
          el('button', { type: 'button', className: 'pc-btn pc-btn-sm', onclick: () => saveCurrent(r.name, t('configs.undo.update', { name: r.name })), dataset: { configUpdate: r.name }, title: t('configs.update_title') }, t('configs.update')),
          el('button', { type: 'button', className: 'pc-btn pc-btn-sm', onclick: () => deleteRow(r), dataset: { configDelete: r.name }, title: t('configs.delete_title') }, t('configs.delete'))));
    });
    const cfgName = el('input', { type: 'text', className: 'pc-input', maxLength: CF.CONFIG_NAME_MAX, placeholder: t('configs.new_placeholder'), 'aria-label': t('configs.new_label'), dataset: { configNew: '' } });
    const saveNew = () => { if (saveCurrent(cfgName.value)) cfgName.value = ''; };
    cfgName.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); saveNew(); } e.stopPropagation(); });
    out.push(el('div', { className: 'pc-block', dataset: { configs: '' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('configs.title')),
      crows.length ? el('ul', { className: 'pc-prows', dataset: { rows: '' } }, ...crows) : el('p', { className: 'pc-muted' }, t('configs.empty')),
      el('p', { className: 'pc-muted', dataset: { configsHint: '' } }, t('configs.features_hint')),
      el('div', { className: 'pc-config-new' }, cfgName, el('button', { type: 'button', className: 'pc-btn', onclick: saveNew, dataset: { configSave: '' } }, t('configs.save'))),
      el('div', { className: 'pc-actions' }, el('button', { type: 'button', className: 'pc-btn', onclick: () => csvIn.click(), dataset: { tableImport: '' }, title: t('configs.import_title') }, t('configs.import')), el('button', { type: 'button', className: 'pc-btn', onclick: exportTable, dataset: { tableExport: '' } }, t('configs.export'))),
      csvIn));

    // script
    const scIn = el('input', { type: 'file', className: 'visually-hidden', accept: '.pcscript,text/plain', tabIndex: -1, 'aria-hidden': 'true', dataset: { scriptFile: '' } });
    scIn.addEventListener('change', () => { const f = scIn.files[0]; scIn.value = ''; if (f) openScript(f); });
    out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('ui.params.script')),
      el('p', { className: 'pc-muted' }, t('ui.params.script.note')),
      el('div', { className: 'pc-actions' }, el('button', { type: 'button', className: 'pc-btn', onclick: saveScript, dataset: { scriptSave: '' } }, t('ui.params.script.save')), el('button', { type: 'button', className: 'pc-btn', onclick: () => scIn.click(), dataset: { scriptOpen: '' } }, t('ui.params.script.open'))),
      scIn));

    // keep focus where it was (the panel re-renders after every edit); its own document: it may be in the panels window
    const a = panel.ownerDocument.activeElement;
    const all = a && panel.contains(a) ? [...panel.querySelectorAll('input, button')] : [];
    const i = all.indexOf(a);
    swapChildren(panel, out);
    if (i >= 0) [...panel.querySelectorAll('input, button')][i]?.focus({ preventScroll: true });
  }

  function updateRollButtons() {
    const part = host.part();
    const n = part.features.length, b = part.rollback === null || part.rollback === undefined ? n : Math.min(part.rollback, n);
    const model = host.mode() === 'model';
    for (const btn of host.root.querySelectorAll('[data-roll]')) {
      const r = btn.dataset.roll;
      btn.disabled = !model || (r === 'back' ? b === 0 : b >= n);
    }
  }

  return { render, numInput, dimTyped, key, roll, showTab, get table() { return cfgOf(); } };
}
