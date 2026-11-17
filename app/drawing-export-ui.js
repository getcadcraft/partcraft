/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawing-export-ui.js: partcraft.js's 31 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountDrawingExport(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { partHoles, meshViews, composeSheet, sheetLabel, nextRevision, toPdf as drawingPdf, scaleLabel } from './drawing.js';
import { t, locale } from './i18n.js';
import { SheetView } from './sheetview.js';
import { threadNotes } from './threads.js';
import * as G from './gdt.js';
import { el, fillDl, swapChildren } from './ui-util.js';
import * as P from './part.js';
import * as V from './vec.js';
import * as X from './export.js';
import { partIfc } from './ifc-export.js';
import { evaluateVars } from './params.js';
import { faceLoops2D, loopCircles } from './faces.js';
import * as MI from './meshimport.js';

export function mountDrawingExport(ctx) {
  const { ui, hist, settings, looksLikePad, status, exact, exactOff, named, exactWhy, editingFeature, built, keepFocus, commit, endPick, exitSketch, field, numInput, textInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, openText, confirmDiscard, ask, focusStage, notInDesign } = ctx;

  const drawingOf =(p = ctx.part) => p.drawing || { section: null, detail: null, notes: [] };

  /** The part's holes for the drawing's hole table (drawing.js partHoles; 0.4 P23); null with the mesh kernel. */
  const drawingHoles = () => partHoles(ctx.part, ctx.regen);
  /** A sheet view's name in words (front, top, right, section, iso, detail). */
  const viewWord = (k) => (['front', 'top', 'right'].includes(k) ? t('drawing.view.' + k) : ['section', 'iso', 'detail'].includes(k) ? t('app.drawing.view_' + k) : k);

  async function enterDrawing() {
    if (notInDesign()) return;
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    if (ctx.mode === 'assembly') return;
    await built();
    if (!ctx.regen?.mesh) { status(t('app.drawing.build_first')); return; }
    ctx.section?.stop();
    ctx.mode = 'drawing';
    ctx.drawingState = { data: null, key: null, sheet: null, tool: null, sel: null, drag: null };
    ctx.pick = null; ctx.multi = []; ctx.view.setHighlight(null); ctx.view.setMarks(null);
    if (!ctx.sheetView) ctx.sheetView = new SheetView(ui.sheet, {
      isPad: (e) => looksLikePad(e),   // 0.8 D7.56: a trackpad swipe pans the sheet
      onClick: (x, y) => drawingClick(x, y),
      onNoteDown: (id) => { ctx.drawingState.sel = id; ctx.drawingState.tool = null; composeShow(); renderAll(); },
      onNoteDrag: (id, dx, dy) => { ctx.drawingState.drag = { id, dx, dy }; composeShow(); },
      onNoteDrop: (id, dx, dy) => { ctx.drawingState.drag = null; commitDrawing(t('app.undo.move_note'), (d) => { const n = d.notes.find((q) => q.id === id); if (n) n.off = [+(n.off[0] + dx).toFixed(2), +(n.off[1] + dy).toFixed(2)]; }); },
      onHover: (id) => { if (ctx.drawingState && ctx.drawingState.hover !== id) { ctx.drawingState.hover = id; composeShow(); } },
    });
    ui.sheet.hidden = false;
    renderAll();
    status(t('app.drawing.making_views'), true);
    await drawingRefresh();
    if (ctx.mode !== 'drawing') return;
    status(ctx.useExact ? t('app.drawing.status_exact') : exactOff() ? t('kernel.drawing.status') : t('app.drawing.status_mesh'), true);
    ctx.sheetView.svg.focus({ preventScroll: true });
  }

  function leaveDrawing() {
    if (ctx.mode !== 'drawing') return;
    ctx.mode = 'model'; ctx.drawingState = null;
    ui.sheet.hidden = true;
    renderAll(); status('');
    focusStage();
  }

  async function drawingViewsNow(d) {
    if (ctx.useExact) return exact.call('drawing', { part: ctx.part, drawing: { section: d.section } });
    await built();
    return { ...meshViews(ctx.regen.mesh, { M: ctx.M, section: d.section }), threads: threadNotes(ctx.regen.threads) };   // the mesh kernel's own section view (0.4 K.3); thread callouts (0.5 WL.29)
  }

  async function drawingRefresh() {
    if (ctx.mode !== 'drawing' || !ctx.drawingState) return;
    const d = drawingOf();
    const key = (ctx.useExact ? 'x' : 'm') + JSON.stringify(ctx.part.features) + '|' + JSON.stringify(d.section) + '|' + ctx.part.resolution;
    if (ctx.drawingState.key !== key) {
      ctx.drawingState.key = key;
      try { ctx.drawingState.data = await drawingViewsNow(d); } catch (err) { status(t('app.drawing.views_failed', { error: err.message }), true); ctx.drawingState.data = null; }
      if (ctx.mode !== 'drawing' || ctx.drawingState.key !== key) return;
    }
    composeShow();
    renderProps();
  }

  function composeShow() {
    if (!ctx.drawingState?.data) return;
    const d = drawingOf();
    let notes = d.notes;
    const dr = ctx.drawingState.drag;
    if (dr) notes = notes.map((n) => (n.id === dr.id ? { ...n, off: [n.off[0] + dr.dx, n.off[1] + dr.dy] } : n));
    ctx.drawingState.sheet = composeSheet(ctx.drawingState.data, { name: ctx.part.name, drawing: { ...d, notes }, annotate: G.annotationGeometry, material: ctx.part.material?.name, holes: drawingHoles() });
    ctx.sheetView.show(ctx.drawingState.sheet, { selected: ctx.drawingState.sel, hover: ctx.drawingState.hover });
  }

  function commitDrawing(label, fn, { refetch = false } = {}) {
    hist.push(ctx.part, label);
    if (!ctx.part.drawing) ctx.part.drawing = { section: null, detail: null, notes: [] };
    fn(ctx.part.drawing);
    ctx.dirty = true;
    updateTools();
    if (refetch) drawingRefresh(); else { composeShow(); keepFocus(() => renderProps()); }
  }

  function drawingTool(tool) {
    if (ctx.mode !== 'drawing') return;
    ctx.drawingState.tool = ctx.drawingState.tool === tool ? null : tool;
    ctx.drawingState.sel = null;
    composeShow(); updateTools(); renderProps();
    status(ctx.drawingState.tool ? { datum: () => t('app.drawing.click_datum'), fcf: () => t('app.drawing.click_fcf'), finish: () => t('app.drawing.click_finish'), detail: () => t('app.drawing.click_detail') }[tool]() : '', true);
    ctx.sheetView.svg.focus({ preventScroll: true });
  }

  /** Which view a sheet point is on, and its view coordinates (snapped to the nearest drawn line within 2.5 mm). */
  function viewAt(x, y) {
    const sh = ctx.drawingState.sheet;
    for (const [k, p] of Object.entries(sh.place)) {
      const w = (p.box.u1 - p.box.u0) * p.s, h = (p.box.v1 - p.box.v0) * p.s;
      if (x < p.x - 3 || x > p.x + w + 3 || y < p.y - 3 || y > p.y + h + 3) continue;
      let u = p.box.u0 + (x - p.x) / p.s, v = p.box.v0 + (y - p.y) / p.s;
      const src = k === 'detail' ? null : ctx.drawingState.data.views[k];
      if (src) {
        let best = 2.5 / p.s, at = null;
        for (const g of [...src.visible, ...(src.cut || [])]) {
          const dx = g[2] - g[0], dy = g[3] - g[1], L = dx * dx + dy * dy;
          const t = L > 0 ? Math.max(0, Math.min(1, ((u - g[0]) * dx + (v - g[1]) * dy) / L)) : 0;
          const qx = g[0] + dx * t, qy = g[1] + dy * t, dd = Math.hypot(u - qx, v - qy);
          if (dd < best) { best = dd; at = [qx, qy]; }
        }
        if (at) [u, v] = at;
      }
      return { view: k, at: [+u.toFixed(4), +v.toFixed(4)] };
    }
    return null;
  }

  function drawingClick(x, y) {
    const tool = ctx.drawingState.tool;
    if (!tool) { if (ctx.drawingState.sel) { ctx.drawingState.sel = null; composeShow(); renderProps(); } return; }
    const hit = viewAt(x, y);
    if (!hit) { status(t('app.drawing.click_on_view'), true); return; }
    if (tool === 'detail') {
      if (hit.view === 'detail' || hit.view === 'iso') { status(t('app.drawing.detail_from'), true); return; }
      const b = ctx.drawingState.sheet.place[hit.view].box;
      const r = +(Math.max(b.u1 - b.u0, b.v1 - b.v0) / 8).toFixed(2);
      commitDrawing(t('app.undo.detail_view'), (d) => { d.detail = { of: hit.view, at: hit.at, r, scale: 2 }; });
      ctx.drawingState.tool = null; updateTools();
      status(t('app.drawing.detail_taken', { view: viewWord(hit.view) }));
      return;
    }
    const used = new Set(drawingOf().notes.map((n) => n.id));
    let k = 1; while (used.has('g' + k)) k++;
    const letters = drawingOf().notes.filter((n) => n.kind === 'datum').map((n) => n.letter);
    const props = { id: 'g' + k, view: hit.view, at: hit.at };
    if (tool === 'datum') props.letter = G.DATUM_LETTERS.find((L) => !letters.includes(L)) || 'A';
    const note = G.newAnnotation(tool, props);
    commitDrawing({ datum: () => t('app.undo.add_datum'), fcf: () => t('app.undo.add_fcf'), finish: () => t('app.undo.add_finish') }[tool](), (d) => { d.notes.push(note); });
    ctx.drawingState.sel = note.id; ctx.drawingState.tool = null;
    composeShow(); updateTools(); renderProps();
    status({ datum: () => t('app.drawing.placed_datum'), fcf: () => t('app.drawing.placed_fcf'), finish: () => t('app.drawing.placed_finish') }[tool]());
  }

  function renderDrawingProps() {
    const out = [];
    let head = t('app.drawing.head');
    const d = drawingOf();
    const n = ctx.drawingState?.sel ? d.notes.find((q) => q.id === ctx.drawingState.sel) : null;
    const setN = (label, fn) => commitDrawing(label, (dd) => { const q = dd.notes.find((x) => x.id === n.id); if (q) fn(q); });
    if (n) {
      head = n.kind === 'datum' ? t('app.gdt.datum_head', { letter: n.letter }) : n.kind === 'fcf' ? t('app.gdt.fcf_head') : t('app.gdt.finish_head');
      const bad = G.validate(n);
      if (bad) out.push(msg(bad, 'is-error'));
      const grid = [];
      if (n.kind === 'datum') grid.push(...field(t('app.gdt.letter'), selectInput(G.DATUM_LETTERS.map((L) => [L, L]), n.letter, (v) => setN(t('app.undo.datum_letter'), (q) => { q.letter = v; }))));
      if (n.kind === 'fcf') {
        const C = G.CHARACTERISTICS[n.char];
        grid.push(...field(t('app.gdt.tolerance'), selectInput(Object.entries(G.CHARACTERISTICS).map(([k2, c]) => [k2, c.label]), n.char, (v) => setN(t('app.undo.characteristic'), (q) => {
          q.char = v; const c = G.CHARACTERISTICS[v];
          if (!c.dia) q.dia = false; if (!c.mod) { q.mod = ''; q.datums = q.datums.map((x) => ({ ...x, mod: '' })); }
          if (c.datums === 'none') q.datums = []; else if (c.datums === 'required' && !q.datums.length) q.datums = [{ letter: 'A', mod: '' }];
        }))));
        grid.push(...field(t('app.gdt.zone_mm'), numInput(n.tol, (v) => setN(t('app.undo.tolerance_value'), (q) => { q.tol = v; }), { min: 0.000001 })));
        if (C.dia) grid.push(check(t('app.gdt.dia_zone'), n.dia, (v) => setN(t('app.undo.dia_zone'), (q) => { q.dia = v; })));
        if (C.mod) grid.push(...field(t('app.gdt.material'), selectInput([['', t('app.gdt.rfs')], ['M', 'MMC (Ⓜ)'], ['L', 'LMC (Ⓛ)']], n.mod, (v) => setN(t('app.undo.material_condition'), (q) => { q.mod = v; }))));
        if (C.datums !== 'none') {
          for (let i = 0; i < 3; i++) {
            const dt = n.datums[i];
            grid.push(...field([t('app.gdt.primary'), t('app.gdt.secondary'), t('app.gdt.tertiary')][i], selectInput([['', '—'], ...G.DATUM_LETTERS.map((L) => [L, L])], dt ? dt.letter : '', (v) => setN(t('app.undo.datum_reference'), (q) => {
              const list = q.datums.slice(0, 3);
              if (!v) list.splice(i); else if (list[i]) list[i] = { ...list[i], letter: v }; else if (i === list.length) list.push({ letter: v, mod: '' });
              q.datums = list;
            }))));
            if (dt && C.mod) grid.push(...field(t('app.gdt.modifier'), selectInput([['', t('app.gdt.mod_none')], ['M', 'MMB (Ⓜ)'], ['L', 'LMB (Ⓛ)']], dt.mod, (v) => setN(t('app.undo.datum_modifier'), (q) => { q.datums[i].mod = v; }))));
          }
        }
        if (C.legacy) out.push(el('p', { className: 'pc-note' }, t('app.gdt.legacy')));
      }
      if (n.kind === 'finish') {
        grid.push(...field(t('app.gdt.ra'), numInput(n.ra, (v) => setN(t('app.undo.roughness'), (q) => { q.ra = v; }), { min: 0.000001 })));
        grid.push(...field(t('app.gdt.process'), selectInput(Object.entries(G.PROCESSES), n.process, (v) => setN(t('app.undo.finish_process'), (q) => { q.process = v; }))));
        const note = el('input', { type: 'text', className: 'pc-input', id: 'pc-finish-note', value: n.note || '', maxLength: 40 });
        note.addEventListener('change', () => setN(t('app.undo.finish_note'), (q) => { q.note = note.value.replace(/[\u0000-\u001f]/g, '').slice(0, 40); }));
        grid.push(...field(t('app.gdt.note'), note));
      }
      out.push(el('div', { className: 'pc-props' }, ...grid));
      const dl = el('dl', { className: 'pc-dl' });
      fillDl(dl, [[t('app.gdt.reads'), G.describe(n)], [t('app.gdt.on'), t('app.gdt.on_view', { view: viewWord(n.view) })]]);
      out.push(el('div', { className: 'pc-block' }, dl));
      out.push(el('p', { className: 'pc-note' }, t('app.gdt.drag_note')));
      out.push(el('div', { className: 'pc-block pc-actions' }, btn(t('app.btn.delete'), () => deleteNote(), 'pc-btn is-danger'), btn(t('app.btn.done'), () => { ctx.drawingState.sel = null; composeShow(); renderProps(); })));
    } else {
      const grid = [];
      grid.push(...field(t('drawing.panel.sheet'), selectInput([P.SHEET_AUTO, ...P.SHEET_KEYS].map((k) => [k, k === 'auto' ? t('drawing.sheet.auto', { size: ctx.drawingState?.sheet && d.sheet === 'auto' ? sheetLabel(ctx.drawingState.sheet.paper) : '' }) : sheetLabel(k)]), d.sheet || 'a3', (v) => commitDrawing(t('drawing.undo.sheet'), (dd) => { if (v === 'a3') delete dd.sheet; else dd.sheet = v; }))));
      grid.push(...field(t('app.drawing.section_aa'), selectInput([['', t('app.drawing.none')], ['front', t('app.drawing.of_front')], ['top', t('app.drawing.of_top')], ['right', t('app.drawing.of_right')]], d.section ? d.section.of : '', (v) => {
        commitDrawing(t('app.undo.section_view'), (dd) => { dd.section = v ? { of: v } : null; if (!v && dd.detail?.of === 'section') dd.detail = null; }, { refetch: true });
      })));
      if (d.section) grid.push(...field(t('app.drawing.cut_at'), numInput(d.section.at ?? sectionCentre(d.section.of), (v) => commitDrawing(t('app.undo.section_position'), (dd) => { dd.section.at = v; }, { refetch: true }))));
      grid.push(...field(t('app.drawing.detail_b'), selectInput([['', t('app.drawing.none')], ['front', t('app.drawing.from_front')], ['top', t('app.drawing.from_top')], ['right', t('app.drawing.from_right')], ...(d.section ? [['section', t('app.drawing.from_section')]] : [])], d.detail ? d.detail.of : '', (v) => {
        if (!v) { commitDrawing(t('app.undo.detail_view'), (dd) => { dd.detail = null; }); return; }
        drawingTool('detail'); status(t('app.drawing.click_detail_centre', { view: viewWord(v) }), true);
      })));
      if (d.detail) {
        grid.push(...field(t('app.drawing.detail_radius'), numInput(d.detail.r, (v) => commitDrawing(t('app.undo.detail_size'), (dd) => { dd.detail.r = v; }), { min: 0.001 })));
        grid.push(...field(t('app.drawing.detail_scale'), selectInput(P.DETAIL_SCALES.map((k) => [String(k), t('app.drawing.times_sheet', { k })]), String(d.detail.scale), (v) => commitDrawing(t('app.drawing.detail_scale'), (dd) => { dd.detail.scale = Number(v); }))));
      }
      { const cb = check(t('drawing.holedims.panel'), !!d.holeDims, (v) => commitDrawing(t('drawing.holedims.undo'), (dd) => { if (v) dd.holeDims = true; else delete dd.holeDims; })); cb.dataset.holeDims = '1'; grid.push(cb); }   // 0.8 EG.20
      if (d.holeDims && ctx.drawingState?.sheet?.holeDims) { const hd = ctx.drawingState.sheet.holeDims; grid.push(el('span', { className: 'k' }, ''), el('span', { className: 'v pc-muted', dataset: { holeDimsCount: String(hd.holes) } }, t('drawing.holedims.count', { n: hd.holes, sizes: hd.sizes, view: t('drawing.view.' + hd.view) }))); }
      grid.push(...field(t('drawing.holes.panel'), selectInput([['', t('drawing.holes.none')], ...['front', 'top', 'right'].map((k) => [k, t('drawing.holes.of', { view: t('drawing.view.' + k) })])], d.holeTable ? d.holeTable.view : '', (v) => commitDrawing(t('drawing.holes.undo'), (dd) => { if (v) dd.holeTable = { view: v }; else delete dd.holeTable; }))));
      if (d.holeTable && ctx.drawingState?.sheet?.holeTable) { const ht = ctx.drawingState.sheet.holeTable; grid.push(el('span', { className: 'k' }, ''), el('span', { className: 'v pc-muted', dataset: { holeCount: String(ht.rows.length) } }, t('drawing.holes.count', { n: ht.rows.length }) + (ht.skipped ? ' ' + t('drawing.holes.skipped', { n: ht.skipped }) : ''))); }
      else if (d.holeTable && !named()) grid.push(el('span', { className: 'k' }, ''), el('span', { className: 'v pc-muted' }, t('drawing.holes.exact')));
      out.push(el('div', { className: 'pc-props' }, ...grid));
      out.push(titleBlockPanel(d), revisionsPanel(d));
      const sh = ctx.drawingState?.sheet;
      if (sh?.omitted?.length) out.push(msg(t('app.drawing.no_room', { list: sh.omitted.join(', ') })));
      if (sh && !sh.exact) out.push(el('p', { className: 'pc-note' }, exactOff() ? t('kernel.drawing.note') : exact.state === 'loading' ? t('app.drawing.mesh_note_loading') : t('app.drawing.mesh_note_failed')));
      if (d.notes.length) out.push(el('div', { className: 'pc-block' }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('app.drawing.notes_on_sheet')),
        el('ul', { className: 'pc-list' }, ...d.notes.map((q) => el('li', {}, el('span', { className: 'grow' + (G.validate(q) ? ' is-bad' : '') }, G.describe(q)), btn(t('app.btn.select'), () => { ctx.drawingState.sel = q.id; composeShow(); renderProps(); }, 'pc-linkbtn'))))));
      out.push(el('p', { className: 'pc-note' }, t('app.drawing.notes_help')));
      out.push(el('div', { className: 'pc-block pc-actions' }, btn(t('app.drawing.export_pdf'), () => exportDrawing(), 'pc-btn is-primary'), btn(t('app.drawing.back'), () => leaveDrawing())));
    }
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }

  /** The title block's fields (part.drawing.title; empty = left out, Title falls back to the part's name, Date to today). */
  function titleBlockPanel(d) {
    const tt = d.title || {};
    const setT = (k, v) => commitDrawing(t('drawing.undo.title'), (dd) => { const n = { ...(dd.title || {}) }; if (v) n[k] = v; else delete n[k]; if (Object.keys(n).length) dd.title = n; else delete dd.title; });
    const rows = [['title', { placeholder: ctx.part.name }], ['number', {}], ['rev', { placeholder: d.revisions?.length ? d.revisions[d.revisions.length - 1].rev : '' }], ['company', {}], ['drawnBy', {}], ['checkedBy', {}], ['approvedBy', {}],
      ['date', { placeholder: new Date().toISOString().slice(0, 10) }], ['tolerance', { placeholder: t('drawing.panel.tolerance_ph') }], ['finish', {}]];
    const grid = [];
    for (const [k, o] of rows) {
      const inp = textInput(tt[k], (v) => {
        if (k === 'date' && v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) { status(t('drawing.panel.date_bad')); renderProps(); return; }
        setT(k, v);
      }, { max: P.TITLE_FIELDS[k], placeholder: o.placeholder || '', attrs: { 'data-title-field': k } });
      grid.push(...field(t('drawing.panel.' + k.replace(/[A-Z]/g, (c) => '_' + c.toLowerCase())), inp));
    }
    const mat = el('p', { className: 'pc-note' }, ctx.part.material ? t('drawing.panel.material_is', { name: ctx.part.material.name }) : t('drawing.panel.material_none'));
    return el('div', { className: 'pc-block', dataset: { titleBlock: '1' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('drawing.panel.title_block')), el('div', { className: 'pc-props' }, ...grid), mat);
  }
  /** The revision list (part.drawing.revisions, oldest first): add one with the next letter and today's date, edit, delete. */
  function revisionsPanel(d) {
    const revs = d.revisions || [];
    const setR = (i, k, v) => commitDrawing(t('drawing.undo.revision'), (dd) => { if (dd.revisions?.[i]) dd.revisions[i] = { ...dd.revisions[i], [k]: v }; });
    const items = revs.map((r, i) => el('li', { dataset: { revRow: String(i) } },
      textInput(r.rev, (v) => setR(i, 'rev', v), { max: 8, attrs: { 'aria-label': t('drawing.panel.rev_rev'), 'data-rev-field': 'rev', style: 'width:3.5rem;flex:0 0 auto' } }),
      textInput(r.desc, (v) => setR(i, 'desc', v), { max: 120, attrs: { 'aria-label': t('drawing.panel.rev_desc'), 'data-rev-field': 'desc', className: 'pc-input grow' } }),
      textInput(r.date, (v) => { if (v && !/^\d{4}-\d{2}-\d{2}$/.test(v)) { status(t('drawing.panel.date_bad')); renderProps(); return; } setR(i, 'date', v); }, { max: 10, attrs: { 'aria-label': t('drawing.panel.rev_date'), 'data-rev-field': 'date', style: 'width:6.5rem;flex:0 0 auto' } }),
      textInput(r.by, (v) => setR(i, 'by', v), { max: 40, attrs: { 'aria-label': t('drawing.panel.rev_by'), 'data-rev-field': 'by', style: 'width:4rem;flex:0 0 auto' } }),
      btn(t('drawing.panel.rev_delete'), () => commitDrawing(t('drawing.undo.revision_delete'), (dd) => { dd.revisions.splice(i, 1); if (!dd.revisions.length) delete dd.revisions; }), 'pc-linkbtn', { dataset: { revDelete: String(i) } })));
    const full = revs.length >= P.MAX_REVISIONS;
    return el('div', { className: 'pc-block', dataset: { revisions: '1' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('drawing.panel.revisions')),
      revs.length ? el('ul', { className: 'pc-list pc-revs' }, ...items) : el('p', { className: 'pc-note' }, t('drawing.panel.no_revisions')),
      el('div', { className: 'pc-actions' }, btn(t('drawing.panel.rev_add'), () => commitDrawing(t('drawing.undo.revision_add'), (dd) => { dd.revisions = [...(dd.revisions || []), { rev: nextRevision(dd.revisions), desc: '', date: new Date().toISOString().slice(0, 10), by: '' }]; }), 'pc-btn', { disabled: full, title: full ? t('drawing.panel.rev_full', { n: P.MAX_REVISIONS }) : '', dataset: { revAdd: '1' } })));
  }

  function sectionCentre(of) {
    const b = ctx.regen?.stats?.bbox; if (!b) return 0;
    const dir = { front: [0, 0, 1], top: [0, 1, 0], right: [1, 0, 0] }[of];
    return +V.dot(dir, b.min.map((v, i) => (v + b.max[i]) / 2)).toFixed(4);
  }

  function deleteNote() {
    const id = ctx.drawingState?.sel;
    if (!id) return;
    commitDrawing(t('app.undo.delete_note'), (d) => { d.notes = d.notes.filter((q) => q.id !== id); });
    ctx.drawingState.sel = null; composeShow(); renderProps();
    status(t('app.drawing.note_deleted'));
  }

  function exportMesh(kind) {
    if (ctx.mode === 'sketch') exitSketch();
    if (!ctx.regen?.mesh) { status(t('app.export.no_solid')); return; }
    const name = ctx.fileBase();
    if (kind === 'stl') { download(X.stlBinary(ctx.regen.mesh, name), name + '.stl', 'model/stl'); status(t('app.export.stl', { file: name + '.stl', n: ctx.regen.mesh.indices.length / 3 })); }
    else if (kind === '3mf') { download(X.threeMf(ctx.regen.mesh, name), name + '.3mf', 'model/3mf'); status(t('app.export.3mf', { file: name + '.3mf' })); }
    else { const s = X.stepFaceted(ctx.regen.mesh, name, { schema: kind === 'step214' ? 'AP214' : 'AP242' }); download(s.text, name + '.step', 'model/step'); status(t('app.export.step_faceted', { file: name + '.step', n: s.counts.faces })); }
  }

  /**
   * Check for 3D printing (0.5 SG.4, #531): the part (or the whole assembly) as a printer mesh — Z up, mm, as the STL and
   * 3MF exports write it — through print3d.js: closed, faces the right way, not passing through itself; size against
   * the bed in Settings, volume, base, overhangs. Then the usual STL or 3MF export.
   */
  async function checkPrint() {
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    const asmMode = ctx.mode === 'assembly';
    if (!asmMode) await built();
    const src = asmMode ? ctx.asmTools.printMesh() : ctx.regen?.mesh;
    if (!src) { status(asmMode ? t('ui.asm.export.building') : t('app.export.no_solid')); return; }
    const PR = await import('./print3d.js');
    status(t('app.print3d.checking'), true);
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
    const S = src.positions, n = S.length / 3, pos = new Float64Array(S.length);
    for (let i = 0; i < n; i++) { pos[i * 3] = S[i * 3]; pos[i * 3 + 1] = -S[i * 3 + 2]; pos[i * 3 + 2] = S[i * 3 + 1]; }   // Y up → Z up, as the exports
    const rep = PR.printCheck({ positions: pos, indices: src.indices, colors: null }, { bed: settings.bed });
    const mm = (v) => (Math.round(v * 10) / 10).toLocaleString(locale() === 'en-XA' ? 'en' : locale());
    const line = (k, x) => el('li', {}, t(k, x));
    const problems = rep.problems.map((p) => line('app.print3d.p.' + p.kind, { n: p.n }));
    const warnings = rep.warnings.map((w) => line('app.print3d.w.' + w.kind, { n: w.n || 0, share: Math.max(1, Math.round((w.share || 0) * 100)), angle: w.angle || 45, x: mm(w.bed?.[0] || 0), y: mm(w.bed?.[1] || 0), z: mm(w.bed?.[2] || 0) }));
    const body = el('div', { className: 'pc-print' },
      el('p', { className: 'pc-print-verdict', dataset: { printOk: rep.ok ? '1' : '0' } }, t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready')),
      problems.length ? el('ul', { className: 'pc-print-problems', dataset: { printProblems: '' } }, ...problems) : null,
      warnings.length ? el('ul', { className: 'pc-print-warnings', dataset: { printWarnings: '' } }, ...warnings) : null,
      el('ul', { className: 'pc-print-facts' },
        el('li', {}, t(asmMode ? 'app.print3d.what.asm' : 'app.print3d.what.part')),
        rep.size ? el('li', {}, t('app.print3d.size', { w: mm(rep.size[0]), d: mm(rep.size[1]), h: mm(rep.size[2]) })) : null,
        rep.volume != null ? el('li', {}, t('app.print3d.volume', { v: mm(rep.volume / 1000) })) : null,
        el('li', {}, t('app.print3d.tris', { n: rep.triangles })),
        settings.bed ? null : el('li', {}, t('app.print3d.nobed'))));
    status(t(rep.ok ? 'app.print3d.ready' : 'app.print3d.notready'));
    if (!rep.triangles) { await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.close'), 'pc-btn is-primary']] }); return; }
    const key = await ask({ title: t('app.print3d.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['stl', t('app.print3d.stl'), 'pc-btn'], ['3mf', t('app.print3d.3mf'), 'pc-btn is-primary']] });
    if (key === 'stl' || key === '3mf') return asmMode ? ctx.asmTools.exportCmd('export-' + key) : exportMesh(key);
  }

  /** IFC4 with every property: geometry, part properties, parameters, title block, quantities (ifc-export.js; 0.5 WL.32). */
  function exportIfc() {
    if (ctx.mode === 'sketch') exitSketch();
    if (!ctx.regen?.mesh) { status(t('app.export.no_solid')); return; }
    const name = ctx.fileBase(), r = partIfc(ctx.part, ctx.regen, { evaluate: evaluateVars, fileName: name + '.ifc' });
    download(r.text, name + '.ifc', 'application/x-step');
    status(t('app.export.ifc', { file: name + '.ifc', psets: r.counts.psets, n: r.counts.properties }));
  }

  /** USD package (.usdz) of the part (usd-partcraft.js on cc-usd, ./usd/; 0.7 XF.8). */
  async function exportUsd() {
    if (ctx.mode === 'sketch') exitSketch();
    if (!ctx.regen?.mesh) { status(t('app.export.no_solid')); return; }
    const name = ctx.fileBase();
    const { partUsd } = await import('./usd-partcraft.js');
    const r = partUsd(ctx.part, ctx.regen, { format: 'usdz', name: name + '.usdz' });
    download(new Blob([r.data], { type: 'model/vnd.usdz+zip' }), name + '.usdz', 'model/vnd.usdz+zip');
    status(t('usd.done', { name: name + '.usdz', n: 1 }));
  }

  /** The drawing with the project's title block laid over its own (SC.7; `tb` = { use, project, client, drawnBy, revision, date, labels }): with `use` the project's values take the
   *  place of what was typed in the title block; without it they only fill the cells left empty. The part itself is not changed. */
  const drawingWith = (d, tb) => { if (!tb) return d; const tt = d.title || {}, pick = (own, theirs) => (tb.use ? theirs || own : own || theirs) || '';
    return { ...d, title: { ...tt, rev: pick(tt.rev, tb.revision), drawnBy: pick(tt.drawnBy, tb.drawnBy), date: pick(tt.date, tb.date),
      projectLine: [tb.project && `${tb.labels?.project || ''}: ${tb.project}`, tb.client && `${tb.labels?.client || ''}: ${tb.client}`].filter(Boolean).join('   ') } }; };
  async function exportDrawing(tb = null) {
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    await built();
    if (!ctx.regen?.mesh) { status(t('app.drawing.no_solid')); return; }
    status(t('app.drawing.making'), true);
    let sheet;
    if (ctx.mode === 'drawing' && ctx.drawingState?.sheet && !ctx.drawingState.drag) sheet = composeSheet(ctx.drawingState.data, { name: ctx.part.name, drawing: drawingWith(drawingOf(), tb), annotate: G.annotationGeometry, material: ctx.part.material?.name, holes: drawingHoles() });
    else {
      let data;
      try { data = await drawingViewsNow(drawingOf()); } catch (err) { status(t('app.drawing.failed', { error: err.message })); return; }
      sheet = composeSheet(data, { name: ctx.part.name, drawing: drawingWith(drawingOf(), tb), annotate: G.annotationGeometry, material: ctx.part.material?.name, holes: drawingHoles() });
    }
    const pdf = await drawingPdf(sheet);
    download(pdf.bytes, ctx.fileBase() + ' - drawing.pdf', 'application/pdf');   // i18n-ignore: a file name
    const extras = Object.keys(sheet.views).filter((k) => ['section', 'detail', 'iso'].includes(k)).map((k) => ({ section: () => t('app.drawing.v_section'), detail: () => t('app.drawing.v_detail'), iso: () => t('app.drawing.v_iso') }[k]()));
    const nn = sheet.notes.filter((q) => q.box).length;
    status(t('app.drawing.exported', { scale: scaleLabel(sheet.scale), views: [t('app.drawing.v_front'), t('app.drawing.v_top'), t('app.drawing.v_right'), ...extras].join(', '), notes: nn ? t('app.drawing.gdt_notes', { n: nn }) : '', exact: sheet.exact ? t('app.drawing.exact_views') : '' }));
  }

  /**
   * SolidWorks exchange (swmacro.js, brep-xcaf.js): the named, coloured STEP, or the macro that builds the part natively
   * (+ that STEP on a second click). Built in the exact kernel's worker; without it the macro covers what needs no
   * face/edge picks and says what it left out. Not yet tested in SolidWorks — every message says so.
   */
  async function exportForSw(macro) {
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    await built();
    const name = ctx.fileBase();
    const SWM = await import('./swmacro.js');
    let res = null;
    if (ctx.useExact) {
      status(macro ? t('app.sw.writing_macro') : t('app.export.writing_step'), true);
      try { res = await exact.call('swExport', { part: ctx.part, name: ctx.part.name || name }); } catch (err) { status(t('app.export.failed', { error: err.message })); return; }
    } else if (!macro) { status(exactWhy(t('kernel.what.sw_step'), exact.state === 'loading' ? t('app.sw.step_needs_exact_loading') : t('app.sw.step_needs_exact_off'))); return; }
    const getStep = () => { if (res?.step) { download(res.step.text, name + '.step', 'model/step'); return true; } return false; };
    if (!macro) {
      if (!getStep()) { status(t('app.sw.step_failed', { reason: res?.stepError || t('app.sw.no_solid') })); return; }
      status(t('app.sw.step_done', { file: name + '.step', name: ctx.part.name }));
      return;
    }
    const swb = res ? res.swb : SWM.partToSwb(ctx.part, { name: ctx.part.name || name });
    download(SWM.toCp1252(swb.text), name + '.swb', 'application/octet-stream');
    const left = swb.notes.length;
    status(t('app.sw.macro_done', { file: name + '.swb', carried: swb.stats.carried, features: swb.stats.features, noexact: res ? '' : t('app.sw.without_exact'), notes: left ? t('app.sw.notes', { n: left }) : '' }));
    const text = [t('app.sw.macro_text', { carried: swb.stats.carried, features: swb.stats.features, vars: t('app.sw.vars', { n: swb.stats.vars }), equations: t('app.sw.equations', { n: swb.stats.equations }) }), ...swb.notes].join(' ');
    const buttons = [['close', t('app.btn.close'), 'pc-btn']];
    if (res?.step) buttons.push(['step', t('app.sw.download_step'), 'pc-btn is-primary']);
    const pickd = await ask({ title: t('app.sw.macro_title'), text: text + ' ' + (res?.step ? t('app.sw.step_beside') : res?.stepError ? t('app.sw.no_step', { error: res.stepError }) : t('app.sw.step_needs_exact')), buttons });
    if (pickd === 'step') getStep();
  }

  async function exportStep(schema) {
    if (ctx.mode === 'sketch') exitSketch();
    await built();
    if (!ctx.regen?.mesh) { status(t('app.export.no_solid')); return; }
    status(t('app.export.writing_step'), true);
    if (!ctx.useExact) {
      // 0.9.1 FIX-091-EXACT-STEP: the mesh kernel knows each face's exact surface, so step-exact.js writes a true B-rep from it
      try {
        const SE = await import('./step-exact.js');
        const name = ctx.fileBase();
        const out = SE.stepExact(ctx.regen, ctx.part.name || name, { schema, segments: ctx.part.resolution || 64 });
        download(out.text, name + '.step', 'model/step');
        const c = out.counts;
        status(t(c.faceted ? 'app.export.step_exact_part' : 'app.export.step_exact_mesh', { file: name + '.step', schema, faces: c.faces, exact: c.exact, faceted: c.faceted, cyl: c.cylinder, cone: c.cone, sphere: c.sphere, torus: c.torus, curves: c.spline }));
      } catch (err) { status(t('app.export.step_failed', { error: err.code === 'open' ? t('app.export.step_open') : err.code === 'no_solid' ? t('app.export.no_solid') : err.message })); }
      return;
    }
    try {
      const { text } = await exact.call('step', { part: ctx.part, schema });
      const name = ctx.fileBase();
      download(text, name + '.step', 'model/step');
      const c = (re) => (text.match(re) || []).length;
      status(t('app.export.step_exact', { file: name + '.step', schema, faces: c(/ADVANCED_FACE\(/g), cyl: c(/CYLINDRICAL_SURFACE\(/g), cone: c(/CONICAL_SURFACE\(/g), torus: c(/TOROIDAL_SURFACE\(/g), spline: c(/B_SPLINE_SURFACE/g) }));
    } catch (err) { status(t('app.export.step_failed', { error: err.message })); }
  }

  function exportDxf(sf) {
    let f = sf || editingFeature() || (ctx.sel?.kind === 'feature' && P.featureById(ctx.part, ctx.sel.id)?.type === 'sketch' ? P.featureById(ctx.part, ctx.sel.id) : null);
    if (f && f.type === 'sketch') {
      const d = X.dxfSketch(f.sketch);
      const name = ctx.fileBase() + ' - ' + f.name.replace(/[^A-Za-z0-9 _.-]+/g, '_');
      download(d.text, name + '.dxf', 'image/vnd.dxf');
      status(t('app.export.dxf_sketch', { file: name + '.dxf', lines: d.counts.line, arcs: d.counts.arc, circles: d.counts.circle, points: d.counts.point }));
      return;
    }
    if (ctx.pick?.kind === 'face' && ctx.pick.flat && ctx.regen?.mesh) {
      const grp = ctx.view.planarGroups();
      const fl = faceLoops2D(ctx.regen.mesh, grp.groups[ctx.pick.group]);
      const d = X.dxfLoops(fl.loops, loopCircles(fl.frame, fl.loops, ctx.regen.faces));   // 0.9.1: round holes as true circles
      download(d.text, ctx.fileBase() + ' - face.dxf', 'image/vnd.dxf');   // i18n-ignore: a file name
      status(t(d.counts.circle ? 'app.export.dxf_face_circles' : 'app.export.dxf_face', { n: fl.loops.length, area: ctx.f3(Math.abs(fl.area)), circles: d.counts.circle }));
      return;
    }
    status(t('app.export.dxf_nothing'));
  }
  /**
   * The export set's entry (SuperCad Studio's Finalize and export, SC.7): the Export menu's own writers, run with no question; the files leave through the same
   * download. The DXF is the sketch being edited or picked, the picked flat face, and when nothing is picked the part's first sketch (the menu's button asks the
   * person to pick). sheets() → the part's drawing; can(kind) → null | 'empty' | 'unknown'; run(kind) → [{ sheets }] for the drawing PDF, else nothing.
   */
  const drawingRow = () => { const d = ctx.part.drawing || {}, tt = d.title || {}; return { id: 'drawing', number: tt.number || '', title: tt.title || ctx.part.name || ctx.fileBase(), scale: '', revision: tt.rev || (d.revisions || []).at(-1)?.rev || '', paper: d.sheet && d.sheet !== 'auto' ? d.sheet : '' }; };
  const exportSet = {
    kinds: ['pdf', 'step', 'dxf', 'ifc'],
    sheets: () => (ctx.mode !== 'assembly' && ctx.regen?.mesh ? [drawingRow()] : []),
    can: (kind) => (!exportSet.kinds.includes(kind) ? 'unknown' : ctx.mode === 'assembly' || !ctx.regen?.mesh || (kind === 'dxf' && !ctx.part.features.some((f) => f.type === 'sketch') && !(ctx.pick?.kind === 'face' && ctx.pick.flat)) ? 'empty' : null),
    async run(kind, o = {}) {
      if (kind === 'pdf') { await exportDrawing(o.titleBlock || null); return [{ sheets: [{ ...drawingRow(), block: !!o.titleBlock }] }]; }
      if (kind === 'step') await exportStep('AP242');
      else if (kind === 'ifc') await exportIfc();
      else if (kind === 'dxf') exportDxf(editingFeature() || (ctx.sel?.kind === 'feature' && P.featureById(ctx.part, ctx.sel.id)?.type === 'sketch') || (ctx.pick?.kind === 'face' && ctx.pick.flat) ? undefined : ctx.part.features.find((f) => f.type === 'sketch'));
      return [];
    },
  };

  /** A STEP file becomes an imported solid: the first feature of a new part, or added to this one. */
  async function importStep(f) {
    if (f.size > 60 * 1024 * 1024) { status(t('app.step.too_big')); return; }
    const text = await f.text();
    if (!/^\s*ISO-10303-21;/.test(text)) { status(t('app.step.not_step', { name: f.name })); return; }
    if (exactOff()) { await importMesh(f, { step: true }); return; }   // no exact kernel in this build: read as triangles (D7.26)
    if (exact.state !== 'ready') {
      ui.busy.hidden = false; ui.busyText.textContent = t('app.step.loading_exact');
      try { await exact.start(); } catch { ui.busy.hidden = true; await importMesh(f, { step: true }); return; } finally { ui.busy.hidden = true; }
    }
    let info;
    try { info = await exact.call('stepInfo', { text }); } catch (err) { await ask({ title: t('app.step.cannot_import', { name: f.name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    let into = 'new';
    if (ctx.part.features.length) {
      into = await ask({ title: t('app.step.import_title', { name: f.name }), text: t('app.step.import_text', { n: info.solids, faces: info.faces, part: ctx.part.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['add', t('app.step.add_to_part'), 'pc-btn'], ['new', t('app.step.new_part'), 'pc-btn is-primary']] });
      if (into === 'cancel') return;
      if (into === 'new' && !(await confirmDiscard())) return;
    }
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    if (ctx.mode === 'drawing') leaveDrawing();
    if (into === 'new') {
      ctx.part = P.newPart(f.name.replace(/\.(step|stp)$/i, '').replace(/[\u0000-\u001f]/g, '').slice(0, 120) || 'Imported');   // i18n-ignore: a default part name saved in the file (data)
      hist.clear(); ctx.dirty = false; ctx.sel = null; ctx.pick = null;
    }
    const g = commit(t('app.undo.import_step'), () => P.addFeature(ctx.part, 'import', { file: f.name.slice(0, 200), step: text, up: 'z' }));
    ctx.sel = { kind: 'feature', id: g.id };
    ctx.view.setPlanesVisible(false);
    await built();
    renderAll(); ctx.view.view('iso');
    const r = ctx.regen.results.get(g.id);
    status(r?.status === 'ok' ? t('app.step.imported', { name: f.name, n: info.solids, faces: info.faces, vol: ctx.f3(info.volume) }) : t('app.feature.error', { name: g.name, error: r?.message || t('app.step.not_built') }), true);
  }

  /** An STL / OBJ / 3MF mesh becomes a solid body (D7.49): read, repaired (meshimport.js), shown with what was repaired and what
   *  stays open, then the first feature of a new part or a body added to (cut from, intersected with) this one. `step`: a STEP
   *  file read as triangles by cc-step (step/read.js, D7.26) when there is no exact kernel; its solids become one mesh in mm. */
  /** File › Open a .kicad_pcb (0.8 SU.897): the board and its parts as boxes with a height each (Parameters › h_<reference>). */
  async function importKicadBoard(f) {
    let made;
    try {
      const text = f.text ? await f.text() : await f.arrayBuffer().then((b) => new TextDecoder().decode(b));
      made = (await import('./kicad.js')).importKicad(text, f.name);
    } catch (err) {
      await ask({ title: t('app.kicad.cannot_open', { name: f.name }), text: String(err && err.message ? err.message : err), buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
      return;
    }
    await openText(P.toJSON(made.part), made.part.name);
    ctx.dirty = true;   // a new part made from the board, not a file on disk yet
    status(t('app.kicad.opened', { name: f.name, parts: made.board.parts.length }));
    await ask({ title: t('app.kicad.report', { name: f.name }), text: made.report.join(' '), buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
  }

  async function importMesh(f, { step = false, threedm = false } = {}) {
    if (!step && f.size > MI.MAX_BYTES) { status(t('mesh.err.too_big', { mb: Math.round(MI.MAX_BYTES / 1048576) }), true); return; }
    ui.busy.hidden = false; ui.busyText.textContent = t(step ? 'app.step.reading' : threedm ? 'ccdm.part.reading' : 'app.mesh.reading', { name: f.name });
    let read, fixed;
    try {
      await new Promise((r) => setTimeout(r, 30));   // let the busy note paint
      const bytes = f.bytes ? await f.bytes() : new Uint8Array(await f.arrayBuffer());   // a host file (host.js) or a File
      read = step ? MI.meshFromStep((await import('./step/read.js')).readStep(bytes)) : threedm ? (await import('./mesh3dm.js')).meshFrom3dm(bytes) : await MI.readMeshFile(bytes, f.name);
      fixed = MI.repairMesh(read);
    } catch (err) {
      ui.busy.hidden = true;
      const why = err && err.code ? t(err.code, err.vars) : String(err && err.message ? err.message : err);
      await ask({ title: t('app.mesh.cannot_open', { name: f.name }), text: why, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] });
      return;
    } finally { ui.busy.hidden = true; }
    const rep = fixed.report, fmt = read.format.toUpperCase();
    const lines = MI.reportLines(rep, read.notes).filter((l) => !(step && l.key === 'mesh.rep.welded')).map((l) => t(l.key, l.vars));   // a STEP's faces always share their edge points: joining them is no repair
    // the size here, with the units and up axis picked below
    let lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < fixed.positions.length; i += 3) for (let k = 0; k < 3; k++) { lo[k] = Math.min(lo[k], fixed.positions[i + k]); hi[k] = Math.max(hi[k], fixed.positions[i + k]); }
    const choice = { units: read.unit || 'mm', up: 'z', op: 'add' };
    const sizeLine = el('li', { dataset: { meshSize: '' } });
    const showSize = () => {
      const s = MI.UNITS[choice.units], d = [0, 1, 2].map((k) => (hi[k] - lo[k]) * s);
      const [x, y, z] = choice.up === 'z' ? [d[0], d[2], d[1]] : d;
      sizeLine.textContent = t('app.mesh.size', { x: ctx.f3(x), y: ctx.f3(y), z: ctx.f3(z) });
    };
    showSize();
    const pickRow = (label, options, key, extra) => {
      const sel = el('select', { className: 'pc-input', 'aria-label': label, dataset: { meshPick: key } }, ...options.map(([v, l]) => el('option', { value: v, selected: v === choice[key] }, l)));
      sel.addEventListener('change', () => { choice[key] = sel.value; showSize(); });
      return el('label', { className: 'pc-mesh-row' }, el('span', {}, label), sel, extra || null);
    };
    const adding = ctx.part.features.length > 0;
    const st = read.step;
    const body = el('div', { className: 'pc-mesh', dataset: { meshImport: '' } },
      st ? el('p', { dataset: { stepFacts: '' } }, t('app.step.read_facts', { n: st.counts.solids, solids: st.counts.solids, faces: st.counts.faces, schema: st.schema === 'other' ? 'STEP' : st.schema })) : null,
      read.threedm ? el('p', { dataset: { threedmFacts: '' } }, t('ccdm.part.facts', { n: read.threedm.objects, cached: read.threedm.cached, ours: read.threedm.ours })) : null,
      st && st.counts.instances > st.counts.solids ? el('p', {}, t('app.step.read_placed', { n: st.counts.instances })) : null,
      el('p', {}, t('app.mesh.facts', { n: rep.triangles, pts: rep.vertices, fmt })),
      el('ul', { className: 'pc-mesh-report', dataset: { meshReport: '' } }, ...(lines.length ? lines : [t('app.mesh.nothing_fixed')]).map((s) => el('li', {}, s))),
      el('p', { className: 'pc-mesh-verdict', dataset: { meshClosed: rep.closed ? '1' : '0' } }, t(rep.closed ? 'app.mesh.closed' : 'app.mesh.not_closed')),
      rep.closed ? el('div', { className: 'pc-mesh-picks' },
        pickRow(t('app.mesh.units'), Object.keys(MI.UNITS).map((u) => [u, t('app.mesh.unit.' + u)]), 'units', read.unit ? el('small', {}, t('app.mesh.units_from_file')) : null),
        pickRow(t('app.import.up_in_file'), [['z', t('app.import.z_up')], ['y', t('app.import.y_up')]], 'up'),
        adding ? pickRow(t('app.mesh.op'), ['add', 'cut', 'intersect'].map((o) => [o, t('app.mesh.op.' + o)]), 'op') : null,
        el('ul', { className: 'pc-mesh-size' }, sizeLine)) : null);
    if (!rep.closed) { await ask({ title: t('app.mesh.title', { name: f.name }), body, buttons: [['cancel', t('app.btn.close'), 'pc-btn is-primary']] }); return; }
    const into = await ask({ title: t('app.mesh.title', { name: f.name }), body, buttons: adding
      ? [['cancel', t('app.btn.cancel'), 'pc-btn'], ['new', t('app.step.new_part'), 'pc-btn'], ['add', t('app.step.add_to_part'), 'pc-btn is-primary']]
      : [['cancel', t('app.btn.cancel'), 'pc-btn'], ['new', t('app.mesh.open'), 'pc-btn is-primary']] });
    if (into === 'cancel') return;
    if (into === 'new' && adding && !(await confirmDiscard())) return;
    if (ctx.mode === 'sketch') exitSketch();
    if (ctx.mode === 'pick') endPick();
    if (ctx.mode === 'drawing') leaveDrawing();
    if (into === 'new') {
      ctx.part = P.newPart(f.name.replace(/\.(stl|obj|3mf|step|stp|3dm)$/i, '').replace(/[\u0000-\u001f]/g, '').slice(0, 120) || 'Imported');   // i18n-ignore: a default part name saved in the file (data)
      hist.clear(); ctx.dirty = false; ctx.sel = null; ctx.pick = null;
      choice.op = 'add';
    }
    const g = commit(t('app.undo.import_mesh'), () => P.addFeature(ctx.part, 'import', { file: f.name.slice(0, 200), mesh: MI.encodeMesh(fixed), units: choice.units, up: choice.up, op: choice.op, report: rep }));
    ctx.sel = { kind: 'feature', id: g.id };
    ctx.view.setPlanesVisible(false);
    await built();
    renderAll(); ctx.view.view('iso');
    const r = ctx.regen.results.get(g.id);
    const flats = ctx.regen.faces ? new Set(ctx.regen.faces.filter((x) => (x.name || '').startsWith(g.id + '.flat:')).map((x) => x.name)).size : 0;
    status(r?.status === 'ok' ? t('app.mesh.done', { name: f.name, vol: ctx.f3(ctx.regen.stats?.volume || 0), n: flats }) : t('app.feature.error', { name: g.name, error: r?.message || t('app.step.not_built') }), true);
  }

  return { enterDrawing, leaveDrawing, drawingRefresh, composeShow, commitDrawing, drawingTool, drawingClick, renderDrawingProps, deleteNote, exportMesh, checkPrint, exportIfc, exportUsd, exportDrawing, exportForSw, exportStep, exportDxf, exportSet, importStep, importKicadBoard, importMesh };
}
