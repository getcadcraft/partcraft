/* SPDX-License-Identifier: Apache-2.0 */
/**
 * print-host.js — PartCraft as a host of the print stage (roadmap PS.7; docs/PRINTSTAGE-HOST-CONTRACT.md; lib/printstage's copy in printstage/).
 * The stage is a print LAYOUT beside the part: the part's bodies (or an assembly's parts) lie on the printer's bed as copies, are laid flat, turned,
 * arranged and sent. Nothing here changes the part. The layout has its own undo (Undo layout / Redo layout in the card).
 * A body that is not a closed solid is left off the bed and named, with the reason (bodies.js).
 *
 *   mountPrintStage({ pane, pc, THREE, t, el, print, fileName, load, save, moreSlicers, moreLinks }) → { open(), close(), stage, host, draw(), sync(), addItem() , dispose() }
 *   pc = window.partcraft
 */
import { printStagePanel } from './printstage/ps-panel.js';
import { createStage, hostOf } from './printstage/ps-stage.js';
import { arrange } from './printstage/ps-arrange.js';
import { bodiesOf, centred } from './bodies.js';
import { applyMat } from '../../vec.js';

const MM = 1;
const ZUP = (p) => [p[0], p[2], -p[1]];   // a bed point → PartCraft's world (Y up): the inverse of bodies.js toPrinter

export function mountPrintStage({ pane, pc, THREE, t, el, print, fileName, load, save, moreSlicers, moreLinks }) {
  const view = pc.view;
  let bed = null, open = false, small = false, selected = null, seen = null, lastNote = null, left = [], notBuilt = null, mfPromise = null;
  const pick = (id) => { selected = id; draw(); paint(); };
  const stage = createStage({ select: pick });
  const OVERLAY = 'print-stage';
  if (!document.querySelector('link[data-ps-css]')) document.head.append(el('link', { rel: 'stylesheet', href: new URL('./printstage/ps-panel.css', import.meta.url).href, dataset: { psCss: '' } }));

  // ---- drawing the bed and what lies on it in the view (scene = Y up)
  function paint() {
    if (!open || !bed) { view.setOverlay(OVERLAY, null); return; }
    const g = new THREE.Group();
    const [bx, by] = bed;
    const lines = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, bx, 0, 0, bx, 0, 0, bx, 0, -by, bx, 0, -by, 0, 0, -by, 0, 0, -by, 0, 0, 0], 3));
    g.add(new THREE.LineSegments(lines, new THREE.LineBasicMaterial({ color: 0x34404e })));
    for (const o of stage.objects()) {
      const tris = stage.tris(o.id), pos = new Float32Array(tris.length * 9);
      tris.forEach((tri, i) => tri.forEach((p, k) => { const q = ZUP(p); pos.set(q, i * 9 + k * 3); }));
      const geo = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.computeVertexNormals();
      const on = o.id === selected;
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: on ? 0xe0872b : 0x8fa3b8, roughness: 0.7, metalness: 0.05, side: THREE.DoubleSide }));
      mesh.userData.stageId = o.id;
      g.add(mesh);
    }
    view.setOverlay(OVERLAY, g);
  }
  function frame() {
    if (!bed) return;
    view.setExtraBounds({ min: [0, 0, -bed[1]], max: [bed[0], Math.min(bed[2], Math.max(bed[0], bed[1]) / 2), 0] });
    view.view('iso');
  }

  // ---- taking the part's bodies
  async function manifold() {
    if (!mfPromise) mfPromise = import('manifold-3d').then(async (m) => { const M = await m.default(); M.setup(); return M; });
    return mfPromise;
  }
  const bodiesNow = () => bodiesOf({ regen: pc.regen, part: pc.part, mode: pc.mode, asm: pc.asm, builds: pc.asmBuilds, world: pc.asmPlace?.world, applyMat });
  function sync(first = false) {
    const r = bodiesNow();
    left = r.left; notBuilt = r.notBuilt;
    if (r.notBuilt !== null && !r.bodies.length) {
      for (const o of stage.objects()) if (o.src?.kind === 'body') stage.forget(o.id);
      seen = pc.regen; paint(); draw(); return;
    }
    const have = new Map(stage.objects().filter((o) => o.src?.kind === 'body').map((o) => [o.src.id, o.id]));
    const want = new Set(r.bodies.map((b) => b.id));
    let fresh = 0;
    for (const [src, id] of have) if (!want.has(src)) stage.forget(id);
    for (const b of r.bodies) {
      const c = centred(b.tris);
      if (have.has(b.id)) { stage.replaceMesh(have.get(b.id), c.tris); stage.rename(have.get(b.id), b.name); }
      else { stage.place(b.name, c.tris, { scale: 1, at: [0, 0], src: { kind: 'body', id: b.id } }); fresh++; }
    }
    if (fresh) layoutNew();
    if (first) stage.resetHistory();
    seen = pc.regen;
    lastNote = fresh && !first ? t('ps.pc.changed', { n: r.bodies.length }) : null;
    paint(); draw();
  }
  /** Things that just arrived go onto free parts of the bed, without moving what was already placed. */
  function layoutNew() {
    const objs = stage.objects();
    const lay = arrange(objs.map((o) => [o.max[0] - o.min[0], o.max[1] - o.min[1], o.max[2] - o.min[2]]), bed || stage_bed());
    stage.batch(t('ps.pc.undo.layout'), () => objs.forEach((o, i) => { const a = lay.at[i]; if (a) stage.moveTo(o.id, a[0] + (o.max[0] - o.min[0]) / 2, a[1] + (o.max[1] - o.min[1]) / 2); stage.drop(o.id); }));
  }
  const stage_bed = () => (panel.job ? panel.job().bed : [220, 220, 250]);

  const host = hostOf(stage, {
    el, t,
    cls: { block: 'pc-block ps-block', note: 'pc-note ps-note', head: 'pc-props-sub ps-head', btn: 'pc-btn', primary: 'pc-btn is-primary', link: 'pc-linkbtn', select: 'pc-input', input: 'pc-input', error: 'ps-error', list: 'ps-list', row: 'ps-row', field: 'ps-field', check: 'ps-check', send: 'ps-send', steps: 'ps-steps' },
    showBed: (b) => { bed = b; paint(); frame(); },
    manifold,
    worker: (() => { try { const m = import.meta.resolve?.('manifold-3d'); return m ? { url: new URL('./printstage/ps-worker.js', import.meta.url).href, manifoldUrl: m } : null; } catch { return null; } })(),
    fetchFn: (...a) => fetch(...a),
    serial: navigator.serial || null,
    load, save, moreSlicers, moreLinks,
    studio: window.cadcraftStudio?.engines || null,
    download: (name, text, type) => { const a = el('a', { href: URL.createObjectURL(new Blob([text], { type })), download: name }); a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); },
    print, fileName,
    confirm: (paragraphs, opts = {}) => new Promise((done) => {
      let yes = false;
      const finish = (v) => { yes = v; dlg.close(); };
      const dlg = el('dialog', { className: 'pc-dialog', 'aria-labelledby': 'ps-ask-h', dataset: { psConfirm: '' } },
        el('div', { className: 'pc-dialog-head' }, el('h2', { className: 'pc-h', id: 'ps-ask-h' }, opts.title || t('ps.send.button'))),
        el('div', { className: 'pc-dialog-text' }, ...paragraphs.map((x) => el('p', {}, x))),
        el('div', { className: 'pc-dialog-foot' },
          el('button', { type: 'button', className: 'pc-btn is-primary', dataset: { psYes: '' }, onclick: () => finish(true) }, opts.yes || t('ps.send.button')),
          el('button', { type: 'button', className: 'pc-btn', dataset: { psNo: '' }, onclick: () => finish(false) }, t('ps.send.cancel'))));
      dlg.addEventListener('close', () => { dlg.remove(); done(yes); });
      document.body.append(dlg);
      dlg.showModal();
      dlg.querySelector('[data-ps-no]').focus();
    }),
    rerender: () => { if (open) draw(); },
  });
  const panel = printStagePanel(host);

  // ---- the card: the part's own controls above the shared panel
  const btn = (key, fn, extra = {}) => el('button', { type: 'button', className: 'pc-btn', title: extra.title ? t(extra.title) : undefined, disabled: !!extra.disabled, dataset: extra.data || {}, onclick: fn }, t(key));
  function say(text, error = false) { lastNote = text; pc.status?.(text); draw(); void error; }
  function ours() {
    const sel = stage.objects().find((o) => o.id === selected);
    const rows = [];
    rows.push(el('h3', { className: 'pc-props-sub ps-head' }, t('ps.pc.h')));
    rows.push(el('p', { className: 'pc-note ps-note' }, t(pc.mode === 'assembly' ? 'ps.pc.asm' : 'ps.pc.note')));
    if (notBuilt !== null && !stage.objects().length) rows.push(el('p', { className: 'ps-error', dataset: { psNotBuilt: '' } }, notBuilt ? t('ps.pc.notbuilt', { why: notBuilt }) : t('ps.pc.empty')));
    for (const l of left) rows.push(el('p', { className: 'ps-error', dataset: { psLeft: l.id } }, t('ps.pc.left', { name: l.name, why: t('ps.pc.why.' + l.why.kind, { n: l.why.n }) })));
    rows.push(el('p', { className: 'pc-note ps-note', dataset: { psSelected: sel ? sel.id : '' } }, sel ? t('ps.pc.selected', { name: sel.name }) : t('ps.pc.pick')));
    rows.push(el('div', { className: 'ps-row' },
      btn('ps.pc.flat', () => flat(), { title: 'ps.pc.flat.title', disabled: !sel, data: { psFlat: '' } }),
      btn('ps.pc.turn', () => { stage.rotate(selected, 90); paint(); draw(); }, { title: 'ps.pc.turn.title', disabled: !sel, data: { psTurn: '' } }),
      btn('ps.pc.asdesigned', () => { stage.orient(selected, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]); paint(); draw(); }, { title: 'ps.pc.asdesigned.title', disabled: !sel, data: { psAsDesigned: '' } })));
    rows.push(el('div', { className: 'ps-row' },
      btn('ps.pc.undo', () => { stage.undo(); paint(); draw(); }, { disabled: !stage.depth(), data: { psUndo: '' } }),
      btn('ps.pc.redo', () => { stage.redo(); paint(); draw(); }, { disabled: !stage.redoDepth(), data: { psRedo: '' } }),
      btn('ps.pc.refresh', () => sync(), { title: 'ps.pc.refresh.title', data: { psRefresh: '' } })));
    if (lastNote) rows.push(el('p', { className: 'pc-note ps-note', role: 'status', dataset: { psPcNote: '' } }, lastNote));
    return el('div', { className: 'pc-block ps-block', dataset: { psPartcraft: '' } }, ...rows);
  }
  function flat() {
    const o = stage.objects().find((x) => x.id === selected);
    if (!o) return;
    const faces = stage.baseFaces(selected);
    if (!faces.length) { say(t('ps.pc.flat.none', { name: o.name })); return; }
    const r = stage.layFlat(selected);
    paint();
    say(r ? t('ps.pc.flat.done', { name: o.name, area: Math.round(r.area) }) : t('ps.pc.flat.already', { name: o.name }));
  }
  function draw() {
    if (!open || !pane.isConnected) return;
    const scroll = pane.scrollTop;
    const card = el('div', { className: 'ps-card', dataset: { printStage: '' } },
      el('div', { className: 'ps-card-top' }, el('p', { className: 'pc-note ps-note' }, t('ps.eyebrow')),
        el('button', { type: 'button', className: 'pc-linkbtn', dataset: { psSmall: small ? '1' : '0' }, onclick: () => { small = !small; draw(); } }, t(small ? 'ps.show' : 'ps.hide')),
        el('button', { type: 'button', className: 'pc-linkbtn', dataset: { psClose: '' }, title: t('ps.close'), 'aria-label': t('ps.close'), onclick: close }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
      ...(small ? [] : [ours()]),
      ...panel.panel({ small }));
    pane.replaceChildren(card);
    pane.scrollTop = scroll;
  }
  function close() {
    open = false; bed = null;
    view.setOverlay(OVERLAY, null); view.setPartVisible(true); view.setExtraBounds(null);
    pane.replaceChildren();
  }
  addEventListener('cc-print-slicers', () => { if (open) draw(); });
  // the part is rebuilt or the assembly changes under the stage: the bodies follow, their places stay
  const watch = setInterval(() => {
    if (!open) return;
    if (!pane.isConnected || pane.hidden) { if (bed) { view.setOverlay(OVERLAY, null); view.setPartVisible(true); bed = null; } return; }
    if (pc.regen !== seen && pc.mode !== 'sketch') sync();
  }, 500);

  return {
    /** Called each time the tab is shown. */
    open() {
      const first = !open || !stage.objects().length;
      open = true;
      bed = panel.job().bed;
      view.setPartVisible(false);
      if (first) sync(true); else { paint(); draw(); }
      frame();
      draw();
    },
    close,
    sync,
    addItem: (uuid, version) => panel.addItem(uuid, version),
    stage, host, panel, draw,
    dispose() { clearInterval(watch); close(); panel.dispose?.(); },
  };
}
