/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assembly-ui.js: partcraft.js's 30 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountAssembly(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t } from './i18n.js';
import * as A from './assembly.js';
import { regenerate, faceRefAt } from './kernel.js';
import * as WS from './workspaces.js';
import { refForName } from './brep.js';
import * as V from './vec.js';
import * as P from './part.js';
import { el, swapChildren, fillDl } from './ui-util.js';

export function mountAssembly(ctx) {
  const { ST, ui, hist, asmHist, status, exact, rebuild, keepFocus, endPick, exitSketch, field, numInput, selectInput, check, btn, msg, renderProps, renderAll, updateTools, download, ask, notInDesign, f3 } = ctx;

  // ---------------------------------------------------------------- assembly
  function enterAssembly() {
    if ((!ST.M && !ST.useExact) || notInDesign()) return;
    if (ST.mode === 'sketch') exitSketch();
    if (ST.mode === 'pick') endPick();
    if (ST.mode === 'drawing') return;
    if (!ST.asm) {
      if (!ST.regen?.mesh) { status(t('app.asm.build_first')); return; }
      ST.asm = A.newAssembly((ST.part.name || 'Part') + ' assembly');   // i18n-ignore: a default name saved in the file (data)
      A.insertPart(ST.asm, ST.part);
      asmHist.clear(); ST.asmDirty = true;
      status(t('app.asm.started', { name: ST.part.name }));
    } else status(t('app.asm.back_in', { name: ST.asm.name }));
    ST.mode = 'assembly';
    ST.sel = null; ST.pick = null; ST.asmSel = null; ST.jointPick = null; ST.clashes = null;
    ST.view.setPlanesVisible(false);
    rebuildAsm(); renderAll(); ST.view.view('iso');
  }

  /** One part built by whichever kernel is in use (a promise either way). */
  function buildPart(p) { return ST.useExact ? exact.call('regen', { part: p }) : Promise.resolve(regenerate(p, ST.M, { checkpoints: false })); }   // an assembly rebuilds many parts in turn: no checkpoints (kernel.js, 0.7 D7.51) to throw away each time

  ST.asmSeq = 0; ST.asmFit = false;
  ST.asmTreeLimit = 300;
  const asmTreeStep = 700;   // 0.9 SU.749: rows listed in the assembly tree before 'Show more'
  async function rebuildAsm() {
    if ((!ST.M && !ST.useExact) || !ST.asm) return;
    const t0 = performance.now();
    const seq = ++ST.asmSeq;
    for (const [pid, p] of Object.entries(ST.asm.parts)) {
      const have = ST.asmBuilds.get(pid);
      if (!have || have.src !== p.part) {
        const src = p.part;
        const r = await buildPart(src);
        if (seq !== ST.asmSeq || !ST.asm) return;
        r.src = src; ST.asmBuilds.set(pid, r);
      }
    }
    for (const pid of [...ST.asmBuilds.keys()]) if (!ST.asm.parts[pid]) ST.asmBuilds.delete(pid);
    ST.asmPlace = A.placeAll(ST.asm, ST.asmBuilds, { prev: ST.asmPlace });   // only what moved is placed again (0.9 SU.749)
    ST.view.setSketchLines([]);
    showInstances();
    if (ST.asmFit) { ST.asmFit = false; ST.view.view('iso'); }
    const bad = ST.asmPlace.problems.filter((x) => !x.free).length;
    ui.build.textContent = bad ? t('app.asm.joint_problems', { n: bad }) : t('app.asm.placed', { ms: Math.round(performance.now() - t0) });
    ui.build.className = 'pc-chip ' + (bad ? 'is-error' : 'is-ok');
    if (ST.mode === 'assembly') { renderAsmTree(); renderAsmFacts(); keepFocus(() => renderProps()); }
    for (const w of asmWaiters.splice(0)) w();
  }
  const asmWaiters = [];
  const asmBuilt = () => new Promise((res) => { if (ST.asm && ST.asmPlace && Object.keys(ST.asm.parts).every((pid) => ST.asmBuilds.get(pid)?.src === ST.asm.parts[pid].part)) res(); else asmWaiters.push(res); });

  function showInstances() {
    const shown = ST.asmTools ? ST.asmTools.displayWorld(ST.asmPlace.world) : ST.asmPlace.world;   // an exploded view moves what is drawn only
    ST.view.setInstances(ST.asm.instances.filter((i) => ST.asmBuilds.get(i.part)?.mesh).map((i) => ({ id: i.id, data: ST.asmBuilds.get(i.part).mesh, matrix: shown.get(i.id) })));
    highlightAsm();
    ST.asmTools?.afterShow(); ST.measure?.refresh(); ST.section?.refresh(); ST.draft?.refresh(); ST.stackup?.refresh(); ST.motion?.refresh();
    if (ST.ws !== WS.DESIGN) ctx.wsCall('rebuilt', ctx.host);   // a workspace that owns the screen in an assembly hides them again (illustrate)
  }

  function highlightAsm() {
    const inst = ST.asmSel?.kind === 'inst' ? ST.asmSel.id : null;
    const it = inst && ST.view.instances.find((o) => o.id === inst);
    if (it) ST.view.setHighlight({ tris: [...Array(it.data.indices.length / 3).keys()], data: it.data, matrix: it.matrix });
    else if (ST.jointPick?.a?.hit) { const h = ST.jointPick.a.hit; const o = ST.view.instances.find((x) => x.id === h.inst); ST.view.setHighlight({ tris: h.tris, data: h.data, matrix: o ? o.matrix : h.matrix }); }
    else ST.view.setHighlight(null);
  }

  function commitAsm(label, fn) {
    asmHist.push(ST.asm, label);
    const r = fn();
    ST.asmDirty = true; ST.clashes = null;
    rebuildAsm(); renderAll();
    return r;
  }

  const instById = (id) => ST.asm.instances.find((i) => i.id === id);
  const jointById = (id) => ST.asm.joints.find((j) => j.id === id);

  /** A flat face picked on an instance → its mate plane in the part (stable when the face was made by a sketch edge). */
  function mateFromHit(h) {
    const inst = instById(h.inst), build = ST.asmBuilds.get(inst.part);
    if ((build?.exact || build?.named) && h.face !== undefined) {
      const f = build.faces[h.face];
      if (!f || f.type !== 'plane') return null;
      return { inst: h.inst, plane: f.name ? refForName(f.name) : { kind: 'fixed', o: f.o.map((v) => +v.toFixed(9)), n: f.n.map((v) => +v.toFixed(12)) } };
    }
    const grp = ST.view.instances.find((o) => o.id === h.inst).groups;
    const g = grp.groups[h.group];
    const I = h.data.indices;
    const key = (a, b) => (a < b ? a + ',' + b : b + ',' + a);
    const inG = new Set(g.tris);
    const edgeTri = new Map();
    for (let t = 0; t < I.length / 3; t++) for (let k = 0; k < 3; k++) { const kk = key(I[t * 3 + k], I[t * 3 + (k + 1) % 3]); if (!edgeTri.has(kk)) edgeTri.set(kk, []); edgeTri.get(kk).push(t); }
    let flat = true;
    for (const t of g.tris) for (let k = 0; k < 3 && flat; k++) for (const o of edgeTri.get(key(I[t * 3 + k], I[t * 3 + (k + 1) % 3])) || []) {
      if (!inG.has(o) && V.dot(grp.groups[grp.faceOf[o]].n, g.n) > Math.cos(20 * Math.PI / 180)) flat = false;
    }
    if (!flat) return null;
    const plane = h.feature ? faceRefAt(build, h.feature, g.n, h.point) : { kind: 'fixed', o: h.point, n: g.n };
    return { inst: h.inst, plane };
  }

  function asmPick(h) {
    if (ST.jointPick) {
      if (!h || h.kind !== 'face' || !h.inst) { status(t('app.joint.pick_flat'), true); return; }
      const end = mateFromHit(h);
      if (!end) { status(t('app.joint.face_curved'), true); return; }
      if (!ST.jointPick.a) {
        ST.jointPick.a = { ...end, hit: h };
        highlightAsm(); renderAsmProps();
        status(t('app.joint.pick_second', { name: instById(h.inst).name }), true);
        return;
      }
      if (end.inst === ST.jointPick.a.inst) { status(t('app.joint.different_part'), true); return; }
      const a = { inst: ST.jointPick.a.inst, plane: ST.jointPick.a.plane }, b = end;
      const revolveFace = (e) => { const pr = ST.asm.parts[instById(e.inst).part].part; return e.plane.kind === 'face' && pr.features.find((f) => f.id === e.plane.feature)?.type === 'revolve'; };
      const type = revolveFace(a) && revolveFace(b) ? 'revolute' : 'rigid';
      ST.jointPick = null;
      const j = commitAsm(t('app.undo.joint'), () => A.addJoint(ST.asm, type, a, b));
      ST.asmSel = { kind: 'joint', id: j.id };
      renderAll(); highlightAsm();
      const pr = ST.asmPlace.problems.find((x) => x.joint === j.id);
      status(pr ? pr.message : t('app.joint.joins', { joint: j.name, a: instById(a.inst).name, b: instById(b.inst).name }));
      return;
    }
    ST.asmSel = h && h.kind === 'face' && h.inst ? { kind: 'inst', id: h.inst } : null;
    renderAll(); highlightAsm();
  }

  function asmStartJoint() {
    if (ST.mode !== 'assembly') return;
    if (ST.asm.instances.length < 2) { status(t('app.joint.need_two')); return; }
    ST.jointPick = { a: null };
    ST.asmSel = null;
    highlightAsm(); updateTools(); renderAsmProps();
    status(t('app.joint.start'), true);
  }

  function placeBeside() {
    let maxX = -Infinity;
    for (const i of ST.asm.instances) {
      const b = ST.asmBuilds.get(i.part)?.stats;
      if (!b) continue;
      const W = ST.asmPlace.world.get(i.id);
      for (const x of [b.bbox.min[0], b.bbox.max[0]]) for (const y of [b.bbox.min[1], b.bbox.max[1]]) for (const z of [b.bbox.min[2], b.bbox.max[2]]) maxX = Math.max(maxX, V.applyMat(W, [x, y, z])[0]);
    }
    return maxX === -Infinity ? 0 : maxX;
  }

  function asmInsertCopy() {
    const src = ST.asmSel?.kind === 'inst' ? instById(ST.asmSel.id) : ST.asm.instances[ST.asm.instances.length - 1];
    if (!src) return;
    const b = ST.asmBuilds.get(src.part)?.stats;
    const dx = placeBeside() + 20 - (b ? b.bbox.min[0] : 0);
    const inst = commitAsm(t('app.undo.insert_copy'), () => A.insertPart(ST.asm, null, { pid: src.part, place: V.translation([dx, 0, 0]) }));
    ST.asmSel = { kind: 'inst', id: inst.id };
    renderAll(); highlightAsm();
    status(t('app.asm.inserted', { name: inst.name }));
  }

  ui.insertFile.addEventListener('change', async () => {
    const f = ui.insertFile.files[0]; ui.insertFile.value = '';
    if (!f || !ST.asm) return;
    let p;
    try { p = P.readPart(await f.text()); } catch (err) { status(err.message); return; }
    const r = await buildPart(p);
    if (!r.mesh) { status(t('app.asm.no_solid', { file: f.name })); return; }
    const dx = placeBeside() + 20 - r.stats.bbox.min[0];
    const inst = commitAsm(t('app.undo.insert_part'), () => A.insertPart(ST.asm, p, { place: V.translation([dx, 0, 0]) }));
    ST.asmSel = { kind: 'inst', id: inst.id };
    renderAll(); highlightAsm();
    status(t('app.asm.inserted_from', { name: inst.name, file: f.name }));
  });

  async function asmDelete() {
    if (!ST.asmSel) { status(t('app.asm.select_to_remove')); return; }
    if (ST.asmSel.kind === 'joint') { const j = jointById(ST.asmSel.id); commitAsm(t('app.undo.remove_joint'), () => { ST.asm.joints = ST.asm.joints.filter((x) => x.id !== j.id); }); ST.asmSel = null; renderAll(); highlightAsm(); status(t('app.asm.removed', { name: j.name })); return; }
    const inst = instById(ST.asmSel.id);
    if (ST.asm.instances.length === 1) { status(t('app.asm.keep_one')); return; }
    const nj = ST.asm.joints.filter((j) => j.a.inst === inst.id || j.b.inst === inst.id).length;
    if (nj) {
      const ch = await ask({ title: t('app.asm.remove_title', { name: inst.name }), text: t('app.asm.remove_joints', { n: nj }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['remove', t('app.btn.remove'), 'pc-btn is-primary']] });
      if (ch !== 'remove') return;
    }
    commitAsm(t('app.undo.remove_part'), () => A.removeInstance(ST.asm, inst.id));
    ST.asmSel = null; renderAll(); highlightAsm();
    status(t('app.asm.removed', { name: inst.name }));
  }

  function asmCheck() {
    const t0 = performance.now();
    ST.clashes = A.interference(ST.asm, ST.asmBuilds, ST.asmPlace.world, ST.M, { touch: true });   // with kinds and touching faces (0.5 WL.33)
    renderAll();
    const name = (id) => instById(id)?.name || id;
    const { shown, hidden } = A.filterClashes(ST.asm, ST.clashes);
    const more = hidden.length ? t('asm.clash.hidden_note', { n: hidden.length }) : '';
    status(shown.length ? t('app.asm.interference', { list: shown.map((c) => clashWords(c, name)).join('; ') }) + more : t('app.asm.no_interference', { n: ST.asm.instances.length, ms: Math.round(performance.now() - t0) }) + more, true);
  }
  /** One interference result in words: "Flange1 and Bolt1: thread depth mismatch, 12.3 mm³". */
  const clashWords = (c, name) => (c.kind === 'touch' ? t('asm.clash.row_touch', { a: name(c.a), b: name(c.b) }) : t('asm.clash.row', { a: name(c.a), b: name(c.b), kind: t('asm.clash.kind.' + c.kind), vol: f3(c.volume) }));
  /** A filter change: one undo step, saved with the assembly; the results stay (only what is shown changes). */
  function setClashFilter(label, fn) {
    asmHist.push(ST.asm, label);
    fn();
    ST.asmDirty = true;
    renderAll();
  }
  /** The interference results under the assembly's name: shown ones with "Hide this pair", the kinds to show, hidden counts. */
  function clashBlock() {
    const name = (id) => instById(id)?.name || id;
    const { shown, hidden } = A.filterClashes(ST.asm, ST.clashes || []);
    const hide = new Set(ST.asm.clashFilter?.hide || []), pairs = ST.asm.clashFilter?.pairs || [];
    const out = [];
    if (shown.length) out.push(el('ul', { className: 'pc-list', dataset: { clashes: '' } }, ...shown.map((c) => el('li', { dataset: { clashKind: c.kind, clashPair: c.a + '|' + c.b } },
      el('span', { className: 'grow' + (c.kind === 'overlap' || c.kind === 'thread-depth' ? ' is-bad' : '') }, clashWords(c, name)),
      btn(t('asm.clash.hide_pair'), () => setClashFilter(t('asm.clash.undo.hide_pair'), () => A.setPairHidden(ST.asm, c.a, c.b, true)), 'pc-linkbtn', { dataset: { clashHide: '' } })))));
    const kinds = el('div', { className: 'pc-props', dataset: { clashKinds: '' } }, el('span', { className: 'span pc-props-sub' }, t('asm.clash.show')),
      ...A.CLASH_KINDS.map((k) => { const c = check(t('asm.clash.kind.' + k), !hide.has(k), (v) => setClashFilter(t('asm.clash.undo.kind'), () => A.setKindHidden(ST.asm, k, !v))); c.dataset.clashKindToggle = k; return c; }));
    out.push(kinds);
    if (hidden.length || pairs.length) out.push(el('p', { className: 'pc-note', dataset: { clashHidden: String(hidden.length) } }, hidden.length ? t('asm.clash.hidden', { n: hidden.length }) + ' ' : '',
      pairs.length ? btn(t('asm.clash.show_pairs', { n: pairs.length }), () => setClashFilter(t('asm.clash.undo.show_pairs'), () => { for (const [a, b] of [...pairs]) A.setPairHidden(ST.asm, a, b, false); }), 'pc-linkbtn', { dataset: { clashShowPairs: '' } }) : null));
    return el('div', { className: 'pc-block', dataset: { clashBlock: '' } }, el('p', { className: 'pc-props-sub', style: 'margin-top:0' }, t('asm.clash.title')), ...out);
  }

  function asmEditPart() {
    if (ST.asmSel?.kind !== 'inst') { status(t('app.asm.select_to_edit')); return; }
    const inst = instById(ST.asmSel.id);
    ST.asmTools.reset(); ST.measure.stop(); ST.stackup?.stop(); ST.motion?.stop();
    ST.editPartOf = { pid: inst.part, stash: { part: ST.part, dirty: ST.dirty, undo: hist.undoStack, redo: hist.redoStack }, before: JSON.stringify(ST.asm.parts[inst.part].part) };
    ST.part = JSON.parse(JSON.stringify(ST.asm.parts[inst.part].part));
    hist.undoStack = []; hist.redoStack = []; ST.dirty = false;
    ST.mode = 'model'; ST.sel = null; ST.pick = null;
    ST.view.setPlanesVisible(false);
    rebuild(); renderAll(); ST.view.view('iso');
    status(t('app.asm.editing_part', { part: ST.asm.parts[inst.part].name, asm: ST.asm.name }), true);
  }

  function backToAssembly() {
    if (!ST.editPartOf) return;
    if (ST.mode === 'sketch') exitSketch();
    const { pid, stash, before } = ST.editPartOf;
    if (JSON.stringify(ST.part) !== before) {
      asmHist.push(ST.asm, t('app.undo.edit_part', { name: ST.asm.parts[pid].name }));
      ST.asm.parts[pid].part = JSON.parse(JSON.stringify(ST.part));
      ST.asm.parts[pid].name = ST.part.name;
      ST.asmDirty = true; ST.clashes = null;
    }
    ST.part = stash.part; ST.dirty = stash.dirty; hist.undoStack = stash.undo; hist.redoStack = stash.redo;
    ST.editPartOf = null;
    ST.regen = null;
    ST.mode = 'assembly';
    rebuildAsm(); renderAll();
    status(t('app.asm.back_in', { name: ST.asm.name }));
  }

  async function closeAssembly() {
    if (ST.editPartOf) backToAssembly();
    if (!ST.asm) return true;
    if (ST.asmDirty) {
      const ch = await ask({ title: t('app.asm.unsaved_title'), text: t('app.asm.unsaved_text', { name: ST.asm.name }), buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['discard', t('app.asm.discard'), 'pc-btn'], ['save', t('app.btn.save_first'), 'pc-btn is-primary']] });
      if (ch === 'cancel') return false;
      if (ch === 'save') saveAssembly();
    }
    ST.asmTools.reset(); ST.measure.stop(); ST.stackup?.stop(); ST.motion?.stop();
    ST.asm = null; ST.asmBuilds = new Map(); ST.asmSel = null; ST.jointPick = null; ST.asmDirty = false; ST.clashes = null; asmHist.clear();
    ST.mode = 'model';
    rebuild(); renderAll(); ST.view.view('iso');
    status(t('app.asm.closed'));
    return true;
  }

  function saveAssembly() {
    const name = (ST.asm.name || 'assembly').replace(/[^A-Za-z0-9 _.-]+/g, '_').trim().slice(0, 80) || 'assembly';
    download(A.toJSON(ST.asm), name + '.partcraft-asm.json', 'application/json');
    ST.asmDirty = false;
    status(t('app.asm.saved', { file: name + '.partcraft-asm.json' }));
  }

  async function openAssemblyText(text, name) {
    let a;
    try { a = A.readAssembly(text); } catch (err) { status(err.message); await ask({ title: t('app.file.cannot_open', { name }), text: err.message, buttons: [['cancel', t('app.btn.ok'), 'pc-btn is-primary']] }); return; }
    if (ST.mode === 'sketch') exitSketch();
    if (ST.editPartOf) backToAssembly();
    ST.asmTools.reset(); ST.measure.stop(); ST.stackup?.stop(); ST.motion?.stop();
    ST.asm = a; ST.asmBuilds = new Map(); asmHist.clear(); ST.asmDirty = false; ST.asmSel = null; ST.jointPick = null; ST.clashes = null;
    ST.asmTreeLimit = 300; ST.asmFit = true;   // the view fits the parts once they are placed
    ST.mode = 'assembly';
    ST.view.setPlanesVisible(false);
    rebuildAsm(); renderAll(); ST.view.view('iso');
    status(t('app.asm.opened', { name, parts: ST.asm.instances.length, joints: ST.asm.joints.length }));
  }

  // ---- assembly panels
  function renderAsmTree() {
    ui.partName.textContent = ST.asm.name;
    const probs = { inst: new Map(), joint: new Map() };   // one pass, so a long list does not search the problems per row
    for (const x of ST.asmPlace?.problems || []) for (const k of ['inst', 'joint']) if (x[k] && !probs[k].has(x[k])) probs[k].set(x[k], x);
    const problem = (kind, id) => probs[kind].get(id);
    // a long assembly lists its first rows (and the selected one) and says so (0.9 SU.749): 20,000 rows made every click take seconds
    const limit = ST.asmTreeLimit;
    const moreBtn = (shown, total, grow) => (shown < total ? el('li', { role: 'none', className: 'pc-muted' }, t('app.asm.tree_shown', { shown, total }) + ' ', btn(t('app.asm.tree_more', { n: Math.min(asmTreeStep, total - shown) }), () => { ST.asmTreeLimit += asmTreeStep; renderAsmTree(); }, 'pc-linkbtn', { dataset: { treeMore: grow } })) : null);
    const items = [el('li', { role: 'none', className: 'pc-props-sub' }, t('app.asm.tree_parts'))];
    const selIdx = ST.asmSel?.kind === 'inst' ? ST.asm.instances.findIndex((i) => i.id === ST.asmSel.id) : -1;
    const rows = ST.asm.instances.map((i, n) => [i, n]).filter(([, n]) => n < limit || n === selIdx);
    rows.forEach(([i, n]) => {
      const pr = problem('inst', i.id);
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node' + (pr ? ' is-warn' : ''), dataset: { inst: i.id }, 'aria-selected': String(ST.asmSel?.kind === 'inst' && ST.asmSel.id === i.id), title: pr ? pr.message : '',
        onclick: () => { ST.asmSel = { kind: 'inst', id: i.id }; ST.jointPick = null; renderAll(); highlightAsm(); },
        ondblclick: () => { ST.asmSel = { kind: 'inst', id: i.id }; asmEditPart(); },
      }, el('i', { className: 'bi bi-box', 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, i.name), el('span', { className: 'pc-node-flag' }, n === 0 ? t('app.asm.flag_grounded') : pr ? t('app.asm.flag_free') : ''))));
    });
    const more1 = moreBtn(Math.min(limit, ST.asm.instances.length), ST.asm.instances.length, 'parts');
    if (more1) items.push(more1);
    items.push(el('li', { role: 'none', className: 'pc-props-sub' }, t('app.asm.tree_joints')));
    const selJ = ST.asmSel?.kind === 'joint' ? ST.asm.joints.findIndex((j) => j.id === ST.asmSel.id) : -1;
    for (const j of ST.asm.joints.filter((_, n) => n < limit || n === selJ)) {
      const pr = problem('joint', j.id);
      const ls = ST.asmPlace?.loops?.joints.get(j.id);   // on a loop (0.7 D7.40): under (can still move) / full / over (does not close)
      items.push(el('li', { role: 'none' }, el('button', {
        type: 'button', role: 'treeitem', className: 'pc-node' + (pr ? ' is-error' : ''), dataset: { joint: j.id, ...(ls ? { loopState: ls } : {}) }, 'aria-selected': String(ST.asmSel?.kind === 'joint' && ST.asmSel.id === j.id), title: pr ? pr.message : ls ? t('asm.joint.type.' + j.type) + ' — ' + t('asm.loop.' + ls) : t('asm.joint.type.' + j.type),
        onclick: () => { ST.asmSel = { kind: 'joint', id: j.id }; ST.jointPick = null; renderAll(); highlightAsm(); },
      }, el('i', { className: 'bi bi-' + (pr ? 'exclamation-triangle-fill' : 'link-45deg'), 'aria-hidden': 'true' }), el('span', { className: 'pc-node-name' }, j.name), el('span', { className: 'pc-node-flag' }, pr ? '⚠' : t('asm.joint.type.' + j.type).toLowerCase()))));   // i18n-ignore: icon class names
    }
    if (!ST.asm.joints.length) items.push(el('li', { role: 'none', className: 'pc-muted' }, t('app.asm.no_joints')));
    const more2 = moreBtn(Math.min(limit, ST.asm.joints.length), ST.asm.joints.length, 'joints');
    if (more2) items.push(more2);
    swapChildren(ui.tree, items);
  }

  function renderAsmFacts() {
    const free = ST.asmPlace ? ST.asmPlace.problems.filter((x) => x.free).length : 0;
    const L = ST.asmPlace?.loops, nLoops = L ? L.equations / 6 : 0;
    const loops = !L || L.status === 'none' ? '' : L.status === 'over' ? t('app.asm.loops_over', { loops: nLoops, n: L.conflicts.length }) : L.status === 'under' ? t('app.asm.loops_under', { loops: nLoops, n: L.mobility }) : t('app.asm.loops_full', { loops: nLoops });
    fillDl(ui.facts, [[t('app.asm.tree_parts'), Object.keys(ST.asm.parts).length], [t('app.asm.facts_instances'), ST.asm.instances.length], [t('app.asm.tree_joints'), ST.asm.joints.length], [t('app.asm.facts_not_joined'), free || ''], [t('app.asm.facts_loops'), loops],
      [t('app.asm.facts_interference'), ST.clashes === null ? t('app.asm.not_checked') : ((n) => (n ? t('asm.clash.facts', { n }) : t('app.asm.none')))(A.filterClashes(ST.asm, ST.clashes).shown.length)]]);
  }

  function endLabel(e) {
    const inst = instById(e.inst);
    const pr = ST.asm.parts[inst.part].part;
    const f = e.plane.kind === 'face' ? pr.features.find((x) => x.id === e.plane.feature) : null;
    return t('app.joint.end_label', { name: inst.name, plane: e.plane.kind === 'base' ? V.PLANE_NAMES[e.plane.name] : f ? t('app.plane.face_of', { name: f.name }) : t('app.plane.fixed') });
  }

  function renderAsmProps() {
    const out = [];
    let head = t('app.facts.h_assembly');
    if (ST.jointPick) {
      head = t('app.joint.new');
      out.push(msg(ST.jointPick.a ? t('app.joint.pick_second_face') : t('app.joint.pick_first_face')), el('p', { className: 'pc-note' }, t('app.joint.new_note')));
    } else if (ST.asmSel?.kind === 'joint' && jointById(ST.asmSel.id)) {
      const j = jointById(ST.asmSel.id);
      head = j.name;
      const pr = ST.asmPlace?.problems.find((x) => x.joint === j.id);
      if (pr) out.push(msg(pr.message, 'is-error'));
      const ls = ST.asmPlace?.loops?.joints.get(j.id);
      if (ls && ls !== 'over') out.push(el('p', { className: 'pc-note', dataset: { loopNote: ls } }, t('asm.loop.' + ls)));
      const setJ = (label, fn) => { commitAsm(label, () => fn(jointById(j.id))); };
      // a value that moves (0.7 D7.40): held while the loop it is on follows, and the loop's answer kept in the same undo step
      const hold = (key) => new Set([j.id + '.' + key]);
      const setValue = (label, key, v) => setJ(label, (x) => { x[key] = v; A.applySolved(ST.asm, A.placeAll(ST.asm, ST.asmBuilds, { hold: hold(key) }).loops); });
      const grid = [];
      grid.push(...field(t('asm.joint.type'), selectInput(Object.keys(A.JOINT_TYPES).map((k) => [k, t('asm.joint.type.' + k)]), j.type, (v) => setJ(t('asm.joint.undo.type'), (x) => { x.type = v; if (x.limits && !A.readLimitsSafe(x.limits, v)) delete x.limits; }))));
      const rangeRow = (label, key, min, max, step) => {
        const start = j[key] || 0;
        const n = numInput(j[key] || 0, (v) => setValue(label, key, v));
        const r = el('input', { type: 'range', className: 'span pc-range', min: String(min), max: String(max), step: String(step), value: String(j[key] || 0), 'aria-label': t('asm.joint.drag', { label }), dataset: { jointRange: key } });
        r.addEventListener('input', () => { const x = jointById(j.id); x[key] = Number(r.value); ST.asmPlace = A.placeAll(ST.asm, ST.asmBuilds, { hold: hold(key), start: ST.asmPlace?.loops?.values, prev: ST.asmPlace }); showInstances(); n.value = r.value; });
        r.addEventListener('change', () => { const v = Number(r.value); jointById(j.id)[key] = start; setValue(label, key, v); });
        n.dataset.jointValue = key;
        return [...field(label, n), r];
      };
      const size = Math.max(10, ...ST.asm.instances.map((i) => { const b = ST.asmBuilds.get(i.part)?.stats?.bbox; return b ? Math.max(...b.max.map((v, k) => v - b.min[k])) : 10; }));
      const valueLabel = (k) => t('asm.joint.value.' + k.toLowerCase());
      const span = (k) => { const L = A.limitOf(j, k); return L ? [L.min, L.max] : A.VALUE_UNIT[k] === 'deg' ? (k === 'angle' ? [-180, 180] : [-90, 90]) : [-Math.round(size), Math.round(size)]; };
      // the values the joint lets move: a number and a slider each; the values set once: a number
      for (const k of A.JOINT_DOF[j.type]) { const [lo, hi] = span(k); grid.push(...rangeRow(valueLabel(k), k, lo, hi, A.VALUE_UNIT[k] === 'deg' ? 1 : 0.5)); }
      for (const k of A.JOINT_SETUP[j.type]) { const n = numInput(j[k] || 0, (v) => setJ(valueLabel(k), (x) => { x[k] = v; })); n.dataset.jointValue = k; grid.push(...field(valueLabel(k), n)); }
      for (const [side, e] of [['a', j.a], ['b', j.b]]) {
        const inst = instById(e.inst), build = ST.asmBuilds.get(inst.part), prt = ST.asm.parts[inst.part].part;
        grid.push(el('span', { className: 'pc-props-sub' }, t(side === 'a' ? 'app.joint.first' : 'app.joint.second', { end: endLabel(e) })));
        const axes = A.axesOf(build, prt);
        const cur = e.axis ? e.axis.feature + (e.axis.index !== undefined ? ':' + e.axis.index : '') : '';
        grid.push(...field(t('app.joint.centre_on'), selectInput([['', t('app.joint.face_origin')], ...axes.map((a) => [a.key, a.label])], cur, (v) => setJ(t('app.undo.joint_centre'), (x) => {
          const en = x[side];
          if (!v) delete en.axis; else { const [fid, idx] = v.split(':'); en.axis = { feature: fid, ...(idx !== undefined ? { index: Number(idx) } : {}) }; }
        }))));
      }
      out.push(el('div', { className: 'pc-props' }, ...grid));
      out.push(...ST.asmTools.jointSections(j));
      out.push(el('p', { className: 'pc-note', dataset: { jointNote: j.type } }, t('asm.joint.note.' + j.type)));
      // the clash check sweeps one value (a choice when the joint has several) across its limits, or a default span
      const dof = A.JOINT_DOF[j.type];
      if (!dof.includes(ST.asmSweep)) ST.asmSweep = dof[0] || null;
      const sweepSel = dof.length > 1 ? selectInput(dof.map((k) => [k, valueLabel(k)]), ST.asmSweep, (v) => { ST.asmSweep = v; }) : null;
      if (sweepSel) sweepSel.dataset.jointSweep = '';
      const motion = btn(t('asm.joint.check'), () => {
        const key = ST.asmSweep || dof[0];
        const [from, to] = span(key);
        const res = A.motionCheck(ST.asm, ST.asmBuilds, ST.M, j.id, from, to, 24, key).map((x) => ({ ...x, pairs: A.filterClashes(ST.asm, x.pairs).shown }));   // the filters apply (0.5 WL.33)
        const bad = res.filter((x) => x.pairs.length);
        const open = res.filter((x) => x.closed === false);   // a loop that cannot follow there (0.7 D7.40)
        status((bad.length ? t('asm.joint.check_bad', { n: bad.length, of: res.length, value: valueLabel(key), at: f3(bad[0].value), vol: f3(bad[0].pairs[0].volume) }) : t('asm.joint.check_ok', { value: valueLabel(key), from: f3(from), to: f3(to), n: res.length }))
          + (open.length ? ' ' + t('asm.joint.check_open', { n: open.length, of: res.length, at: f3(open[0].value) }) : ''), true);
      }, 'pc-btn', { disabled: !dof.length, dataset: { jointCheck: '' } });
      if (sweepSel) out.push(el('div', { className: 'pc-props' }, ...field(t('asm.joint.sweep'), sweepSel)));
      out.push(el('div', { className: 'pc-block pc-actions' }, motion, btn(t('app.undo.remove_joint'), () => asmDelete(), 'pc-btn is-danger')));
    } else if (ST.asmSel?.kind === 'inst' && instById(ST.asmSel.id)) {
      const i = instById(ST.asmSel.id);
      head = i.name;
      const n = ST.asm.instances.indexOf(i);
      const dl = el('dl', { className: 'pc-dl' });
      const b = ST.asmBuilds.get(i.part)?.stats;
      fillDl(dl, [[t('app.props.part'), ST.asm.parts[i.part].name], [t('app.inst.copies'), ST.asm.instances.filter((x) => x.part === i.part).length], [t('app.facts.volume'), b ? f3(b.volume) + ' mm³' : ''], [t('app.asm.tree_joints'), ST.asm.joints.filter((j) => j.a.inst === i.id || j.b.inst === i.id).length], [t('app.inst.position'), n === 0 ? t('app.inst.grounded') : ST.asmPlace?.problems.some((x) => x.inst === i.id) ? t('app.inst.not_joined') : t('app.inst.by_joints')]]);
      out.push(dl);
      const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-inst-name', value: i.name, maxLength: 80 });
      nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 80); if (v) commitAsm(t('app.undo.rename'), () => { instById(i.id).name = v; }); });
      out.push(el('div', { className: 'pc-block pc-props' }, ...field(t('app.props.name'), nameIn)));
      out.push(...ST.asmTools.instSections(i));
      out.push(el('div', { className: 'pc-block pc-actions' },
        btn(t('app.inst.edit'), () => asmEditPart(), 'pc-btn is-primary'),
        btn(t('app.inst.insert_copy'), () => asmInsertCopy()),
        n > 0 ? btn(t('app.inst.make_grounded'), () => commitAsm(t('app.undo.ground'), () => { ST.asm.instances.splice(n, 1); ST.asm.instances.unshift(i); })) : null,
        btn(t('app.btn.remove'), () => asmDelete(), 'pc-btn is-danger')));
    } else {
      const nameIn = el('input', { type: 'text', className: 'pc-input', id: 'pc-asm-name', value: ST.asm.name, maxLength: 120 });
      nameIn.addEventListener('change', () => { const v = nameIn.value.replace(/[\u0000-\u001f]/g, '').trim().slice(0, 120); if (v) commitAsm(t('app.undo.rename_assembly'), () => { ST.asm.name = v; }); });
      out.push(el('div', { className: 'pc-props' }, ...field(t('app.props.name'), nameIn)));
      out.push(el('p', { className: 'pc-note' }, t('app.asm.note')));
      for (const pr of ST.asmPlace?.problems || []) out.push(msg(pr.message, pr.free ? '' : 'is-error'));
      if (ST.clashes || ST.asm.clashFilter) out.push(clashBlock());
      if (ST.asmPlace) out.push(...ST.asmTools.rootSections());
    }
    ui.propsH.textContent = head;
    swapChildren(ui.props, out);
  }

  return { enterAssembly, buildPart, rebuildAsm, asmBuilt, showInstances, highlightAsm, commitAsm, instById, jointById, asmPick, asmStartJoint, placeBeside, asmInsertCopy, asmDelete, asmCheck, asmEditPart, backToAssembly, closeAssembly, saveAssembly, openAssemblyText, renderAsmTree, renderAsmFacts, renderAsmProps };
}
