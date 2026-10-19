/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-partcraft.js — PartCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-partcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc's groups File, Sketch, Features, Drawing, Assembly, Edit, View with their menus; the
 * other workspaces' groups that partcraft.js adds from ws-*.js), plus one command per workspace (the switcher is a <select>:
 * hooks() puts a hidden button per workspace beside it, so a menu style can switch workspaces too).
 *   id     stable id (people's own styles and .ccinput.json files name it — never rename one)
 *   sel    the app's own button the shell clicks (one code path for every style; partcraft.js runs `data-cmd` clicks)
 *   ws     the workspace whose toolbar shows it: hooks().prepare switches there first
 *   mode   the button only works in that mode (sketch, drawing, assembly, pick): hooks().why says what to do first
 *   defKeys  PartCraft's own keys in Design (partcraft.js keydown): the PartCraft style. The sketch editor's letter keys
 *          (L, R, C, A …) are the sketch's own and stay so in every style (hooks().keepKey).
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: PartCraft (today's toolbar) and Feature tree (a ribbon of feature-based mechanical CAD programs: tabs per task,
 * the feature commands first, view keys as two-letter sequences, the middle button orbits and Shift + middle pans).
 * Named for a way of working, never for a product.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, cmd, more = {}) => ({ id, group, icon, sel: cmd.startsWith('[') ? cmd : `[data-cmd="${cmd}"]`, label: 'input.cmd.' + id, defKeys: [], ...more });
const D = { ws: 'design' };
const SK = { ws: 'design', mode: 'sketch' };

export const COMMANDS = [
  C('ws.design', 'workspace', 'bi-box', '[data-input-ws="design"]', { wsSwitch: 'design' }),
  C('ws.form', 'workspace', 'bi-diamond', '[data-input-ws="form"]', { wsSwitch: 'form' }),
  C('ws.simulation', 'workspace', 'bi-activity', '[data-input-ws="simulation"]', { wsSwitch: 'simulation' }),
  C('ws.generative', 'workspace', 'bi-tree', '[data-input-ws="generative"]', { wsSwitch: 'generative' }),
  C('ws.manufacture', 'workspace', 'bi-gear-wide-connected', '[data-input-ws="manufacture"]', { wsSwitch: 'manufacture' }),
  C('ws.script', 'workspace', 'bi-code-slash', '[data-input-ws="script"]', { wsSwitch: 'script' }),

  C('file.new', 'file', 'bi-file-earmark-plus', 'new'),
  C('file.open', 'file', 'bi-folder2-open', 'open', { defKeys: ['Ctrl+O'] }),
  C('file.save', 'file', 'bi-download', 'save', { defKeys: ['Ctrl+S'] }),
  C('file.std-part', 'file', 'bi-nut', 'std-part'),
  C('export.print', 'export', 'bi-printer', 'export-print'),
  C('export.stl', 'export', 'bi-box-arrow-up-right', 'export-stl'),
  C('export.3mf', 'export', 'bi-box-arrow-up-right', 'export-3mf'),
  C('export.step', 'export', 'bi-box-arrow-up-right', 'export-step'),
  C('export.step214', 'export', 'bi-box-arrow-up-right', 'export-step214'),
  C('export.step-faceted', 'export', 'bi-box-arrow-up-right', 'export-step-faceted'),
  C('export.step214-faceted', 'export', 'bi-box-arrow-up-right', 'export-step214-faceted'),
  C('export.ifc', 'export', 'bi-building', 'export-ifc'),
  C('export.sw-step', 'export', 'bi-box-arrow-up-right', 'export-sw-step'),
  C('export.sw-macro', 'export', 'bi-file-earmark-code', 'export-sw-macro'),
  C('export.sw-back', 'export', 'bi-file-earmark-arrow-down', '[data-sw-back]'),
  C('export.dxf', 'export', 'bi-file-earmark', 'export-dxf'),
  C('export.nest', 'export', 'bi-grid-3x3', 'export-nest'),   // 0.6 LC.17 (closing: registry gap)
  C('export.drawing', 'export', 'bi-file-earmark-pdf', 'export-drawing'),
  C('export.bom', 'export', 'bi-list-ol', 'export-bom', { mode: 'assembly' }),

  C('sketch.new', 'sketch', 'bi-pencil-square', 'sketch', { ...D, defKeys: ['S'] }),
  C('sketch.exit', 'sketch', 'bi-box-arrow-right', 'exit-sketch', SK),
  C('sketch.line', 'sketch', 'bi-slash-lg', 'tool-line', SK),
  C('sketch.rect', 'sketch', 'bi-square', 'tool-rect', SK),
  C('sketch.circle', 'sketch', 'bi-circle', 'tool-circle', SK),
  C('sketch.arc', 'sketch', 'bi-bezier2', 'tool-arc', SK),
  C('sketch.point', 'sketch', 'bi-dot', 'tool-point', SK),
  C('sketch.centerline', 'sketch', 'bi-dash-lg', 'tool-centerline', SK),
  C('sketch.fillet', 'sketch', 'bi-bezier', 'tool-fillet', SK),
  C('sketch.spline', 'sketch', 'bi-activity', 'tool-spline', SK),
  C('sketch.trim', 'sketch', 'bi-scissors', 'tool-trim', SK),
  C('sketch.dimension', 'sketch', 'bi-rulers', 'tool-dimension', SK),
  C('sketch.construction', 'sketch', 'bi-distribute-horizontal', 'construction', SK),
  C('sketch.cspline', 'sketch', 'bi-activity', 'tool-cspline', SK),
  C('sketch.extend', 'sketch', 'bi-arrow-up-right', 'tool-extend', SK),
  C('sketch.offset', 'sketch', 'bi-distribute-vertical', 'tool-offset', SK),
  C('sketch.mirror', 'sketch', 'bi-symmetry-vertical', 'tool-mirror', SK),
  C('sketch.polygon', 'sketch', 'bi-hexagon', 'tool-polygon', SK),
  C('sketch.slot', 'sketch', 'bi-capsule', 'tool-slot', SK),
  C('sketch.lpattern', 'sketch', 'bi-grid-3x2-gap', 'tool-lpattern', SK),
  C('sketch.cpattern', 'sketch', 'bi-arrow-clockwise', 'tool-cpattern', SK),
  C('sketch.project', 'sketch', 'bi-box-arrow-in-down', 'tool-project', SK),

  C('feature.extrude', 'features', 'bi-box-arrow-up', 'extrude', D),
  C('feature.cut', 'features', 'bi-box-arrow-in-down', 'cut-extrude', D),
  C('feature.revolve', 'features', 'bi-arrow-repeat', 'revolve', D),
  C('feature.hole', 'features', 'bi-record-circle', 'hole', D),
  C('feature.lpattern', 'features', 'bi-grid-3x2-gap', 'lpattern', D),
  C('feature.cpattern', 'features', 'bi-arrow-clockwise', 'cpattern', D),
  C('feature.mirror', 'features', 'bi-symmetry-vertical', 'mirror', D),
  C('feature.fillet', 'features', 'bi-app', 'fillet', D),
  C('feature.chamfer', 'features', 'bi-hexagon', 'chamfer', D),
  C('feature.shell', 'features', 'bi-box2', 'shell', D),
  C('feature.pick-done', 'features', 'bi-check2-square', 'pick-done', { ws: 'design', mode: 'pick' }),
  C('feature.revolve-cut', 'features', 'bi-arrow-clockwise', 'revolve-cut', D),
  C('feature.plane', 'features', 'bi-square-half', 'plane', D),
  C('feature.axis', 'features', 'bi-arrows-vertical', 'axis', D),
  C('feature.point', 'features', 'bi-crosshair', 'point', D),
  C('feature.sweep', 'features', 'bi-bezier2', 'sweep', D),
  C('feature.loft', 'features', 'bi-layers', 'loft', D),
  C('feature.draft', 'features', 'bi-triangle-half', 'draft', D),
  C('feature.combine', 'features', 'bi-union', 'combine', D),
  C('feature.movebody', 'features', 'bi-arrows-move', 'movebody', D),
  C('feature.scalebody', 'features', 'bi-aspect-ratio', 'scalebody', D),
  C('feature.pathpattern', 'features', 'bi-bezier', 'pathpattern', D),
  C('feature.patch', 'features', 'bi-bandaid', 'patch', D),
  C('feature.surfloft', 'features', 'bi-layers-half', 'surfloft', D),
  C('feature.gordon', 'features', 'bi-grid-3x3', 'gordon', D),
  C('feature.stitch', 'features', 'bi-link-45deg', 'stitch', D),
  C('feature.thicken', 'features', 'bi-layers-fill', 'thicken', D),
  C('feature.offsetsurf', 'features', 'bi-distribute-vertical', 'offsetsurf', D),
  C('feature.extendsurf', 'features', 'bi-arrows-angle-expand', 'extendsurf', D),
  C('feature.trimsurf', 'features', 'bi-scissors', 'trimsurf', D),
  C('feature.rib', 'features', 'bi-triangle', 'rib', D),
  C('feature.thread', 'features', 'bi-nut', 'thread', D),
  C('feature.sheetbase', 'features', 'bi-file-earmark', 'sheetbase', D),
  C('feature.sheetflange', 'features', 'bi-arrow-90deg-up', 'sheetflange', D),

  C('drawing.open', 'drawing', 'bi-easel', 'drawing', D),
  C('drawing.datum', 'drawing', 'bi-triangle', 'dr-datum', { ws: 'design', mode: 'drawing' }),
  C('drawing.fcf', 'drawing', 'bi-border-outer', 'dr-fcf', { ws: 'design', mode: 'drawing' }),
  C('drawing.finish', 'drawing', 'bi-check2', 'dr-finish', { ws: 'design', mode: 'drawing' }),
  C('drawing.detail', 'drawing', 'bi-zoom-in', 'dr-detail', { ws: 'design', mode: 'drawing' }),
  C('drawing.pdf', 'drawing', 'bi-file-earmark-pdf', 'dr-pdf', { ws: 'design', mode: 'drawing' }),
  C('drawing.back', 'drawing', 'bi-box-arrow-left', 'dr-back', { ws: 'design', mode: 'drawing' }),

  C('asm.new', 'assembly', 'bi-boxes', 'asm-new', D),
  C('asm.back', 'assembly', 'bi-box-arrow-in-left', 'asm-back', D),
  C('asm.insert-copy', 'assembly', 'bi-plus-square', 'asm-insert-copy', { ws: 'design', mode: 'assembly' }),
  C('asm.insert-file', 'assembly', 'bi-box-arrow-in-down', 'asm-insert-file', { ws: 'design', mode: 'assembly' }),
  C('asm.joint', 'assembly', 'bi-link-45deg', 'asm-joint', { ws: 'design', mode: 'assembly' }),
  C('asm.check', 'assembly', 'bi-exclamation-diamond', 'asm-check', { ws: 'design', mode: 'assembly' }),
  C('asm.stackup', 'assembly', 'bi-rulers', 'asm-stackup', { ws: 'design', mode: 'assembly' }),   // 0.6 LC.18
  C('asm.edit', 'assembly', 'bi-pencil', 'asm-edit', { ws: 'design', mode: 'assembly' }),
  C('asm.close', 'assembly', 'bi-x-square', 'asm-close', { ws: 'design', mode: 'assembly' }),

  C('form.box', 'form', 'bi-box', 'form-box', { ws: 'form' }),
  C('form.sphere', 'form', 'bi-circle', 'form-sphere', { ws: 'form' }),
  C('form.plane', 'form', 'bi-square', 'form-plane', { ws: 'form' }),
  C('form.edit', 'form', 'bi-arrows-move', 'form-edit', { ws: 'form' }),
  C('form.extrude', 'form', 'bi-box-arrow-up', 'form-extrude', { ws: 'form' }),
  C('form.loop', 'form', 'bi-distribute-horizontal', 'form-loop', { ws: 'form' }),
  C('form.crease', 'form', 'bi-slash-lg', 'form-crease', { ws: 'form' }),
  C('form.display', 'form', 'bi-eye', 'form-display', { ws: 'form' }),
  C('form.finish', 'form', 'bi-check2-circle', 'form-finish', { ws: 'form' }),

  C('sim.fixed', 'simulation', 'bi-pin-angle', 'simulation-fixed', { ws: 'simulation' }),
  C('sim.force', 'simulation', 'bi-arrow-down', 'simulation-force', { ws: 'simulation' }),
  C('sim.pressure', 'simulation', 'bi-arrows-collapse', 'simulation-pressure', { ws: 'simulation' }),
  C('sim.solve', 'simulation', 'bi-play-fill', 'simulation-solve', { ws: 'simulation' }),

  C('gen.fixed', 'generative', 'bi-pin-angle', 'generative-fixed', { ws: 'generative' }),
  C('gen.force', 'generative', 'bi-arrow-down', 'generative-force', { ws: 'generative' }),
  C('gen.preserve', 'generative', 'bi-shield-check', 'generative-preserve', { ws: 'generative' }),
  C('gen.obstacle', 'generative', 'bi-slash-circle', 'generative-obstacle', { ws: 'generative' }),
  C('gen.generate', 'generative', 'bi-play-fill', 'generative-generate', { ws: 'generative' }),

  C('cam.face', 'manufacture', 'bi-border-top', 'manufacture-face', { ws: 'manufacture' }),
  C('cam.pocket', 'manufacture', 'bi-bounding-box-circles', 'manufacture-pocket', { ws: 'manufacture' }),
  C('cam.adaptive', 'manufacture', 'bi-tornado', 'manufacture-adaptive', { ws: 'manufacture' }),
  C('cam.contour', 'manufacture', 'bi-bezier2', 'manufacture-contour', { ws: 'manufacture' }),
  C('cam.drill', 'manufacture', 'bi-record-circle', 'manufacture-drill', { ws: 'manufacture' }),
  C('cam.chamfer', 'manufacture', 'bi-triangle', 'manufacture-chamfer', { ws: 'manufacture' }),
  C('cam.simulate', 'manufacture', 'bi-play-circle', 'manufacture-simulate', { ws: 'manufacture' }),
  C('cam.post', 'manufacture', 'bi-file-earmark-code', 'manufacture-post', { ws: 'manufacture' }),

  C('script.new', 'script', 'bi-file-earmark-plus', 'script-new', { ws: 'script' }),
  C('script.open', 'script', 'bi-folder2-open', 'script-open', { ws: 'script' }),
  C('script.save', 'script', 'bi-download', 'script-save', { ws: 'script' }),
  C('script.run', 'script', 'bi-play-fill', 'script-run', { ws: 'script' }),
  C('script.run-sel', 'script', 'bi-play', 'script-run-sel', { ws: 'script' }),
  C('script.stop', 'script', 'bi-stop-fill', 'script-stop', { ws: 'script' }),

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', 'undo', { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', 'redo', { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-copy', 'copy', { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', 'paste', { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', 'cut', { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', 'paste-in-place', { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.duplicate', 'edit', 'bi-files', 'duplicate', { defKeys: ['Ctrl+D'] }),
  C('edit.delete', 'edit', 'bi-trash', 'delete', { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', 'select-all', { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', 'select-none', { defKeys: ['Escape'], fixed: true }),

  C('view.fit', 'view', 'bi-arrows-fullscreen', 'view-fit', { defKeys: ['F'] }),
  C('view.normal', 'view', 'bi-bullseye', 'view-normal'),
  C('view.measure', 'view', 'bi-rulers', 'view-measure', { defKeys: ['M'] }),
  C('view.mass', 'view', 'bi-speedometer2', 'view-mass'),
  C('view.section', 'view', 'bi-scissors', 'view-section', { defKeys: ['X'] }),
  C('view.draft', 'view', 'bi-triangle-half', 'view-draft'),
  C('view.zebra', 'view', 'bi-distribute-horizontal', 'view-zebra'),
  C('view.curvature', 'view', 'bi-bezier', 'view-curvature'),
  C('view.planes', 'view', 'bi-layers', 'view-planes'),   // 0.6 PU (base planes on/off)
  C('view.iso', 'view', 'bi-box', 'view-iso'),
  C('view.front', 'view', 'bi-square', 'view-front'),
  C('view.back', 'view', 'bi-square', 'view-back'),
  C('view.top', 'view', 'bi-square', 'view-top'),
  C('view.bottom', 'view', 'bi-square', 'view-bottom'),
  C('view.right', 'view', 'bi-square', 'view-right'),
  C('view.left', 'view', 'bi-square', 'view-left'),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['workspace', 'file', 'export', 'sketch', 'features', 'drawing', 'assembly', 'form', 'simulation', 'generative', 'manufacture', 'script', 'edit', 'view', 'app'];
export const WORKSPACES = ['design', 'form', 'simulation', 'generative', 'manufacture', 'script'];

// PartCraft's own keys = the registry's (what the app does with no profile at all)
const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));

const m = (label, items) => ({ label: 'input.m.' + label, items });
const rtab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items]) => ({ label: 'input.m.' + l, items })) });
const ids = (pre) => COMMANDS.filter((c) => c.id.startsWith(pre)).map((c) => c.id);

const FILE_MENU = ['file.new', 'file.open', 'file.save', 'file.std-part', '-', ...ids('export.'), '-', 'app.settings', 'app.palette', 'app.help'];

export const STYLES = {
  partcraft: {
    format: 'cadcraft-input', version: 1, id: 'partcraft', name: 'input.style.partcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: the 3D view's own buttons (Settings › PartCraft › orbit)
  },
  feature: {
    format: 'cadcraft-input', version: 1, id: 'feature', name: 'input.style.feature', builtin: true, layout: 'ribbon',
    menus: [m('file', FILE_MENU)],
    quick: ['file.new', 'file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [
      rtab('features', [
        ['boss', ['feature.extrude', 'feature.revolve', 'feature.sweep', 'feature.loft', 'feature.rib', 'feature.thread']],
        ['cutting', ['feature.cut', 'feature.revolve-cut', 'feature.hole']],
        ['dress', ['feature.fillet', 'feature.chamfer', 'feature.shell', 'feature.draft', 'feature.pick-done']],
        ['pattern', ['feature.lpattern', 'feature.cpattern', 'feature.mirror', 'feature.pathpattern']],
        ['reference', ['feature.plane', 'feature.axis', 'feature.point']],
        ['bodies', ['feature.combine', 'feature.movebody', 'feature.scalebody']],
      ]),
      rtab('sketch', [
        ['sketch', ['sketch.new', 'sketch.exit', 'sketch.dimension', 'sketch.construction']],
        ['entities', ['sketch.line', 'sketch.centerline', 'sketch.rect', 'sketch.circle', 'sketch.arc', 'sketch.polygon', 'sketch.slot', 'sketch.point', 'sketch.spline', 'sketch.cspline']],
        ['sketchedit', ['sketch.trim', 'sketch.extend', 'sketch.offset', 'sketch.fillet', 'sketch.mirror', 'sketch.lpattern', 'sketch.cpattern', 'sketch.project']],
      ]),
      rtab('surfaces', [['surfaces', ['feature.patch', 'feature.surfloft', 'feature.gordon', 'feature.stitch', 'feature.thicken', 'feature.offsetsurf', 'feature.extendsurf', 'feature.trimsurf']], ['sheetmetal', ['feature.sheetbase', 'feature.sheetflange']]]),
      rtab('evaluate', [['measure', ['view.measure', 'view.mass']], ['inspect', ['view.section', 'view.draft', 'view.zebra', 'view.curvature', 'view.planes']]]),
      rtab('drawing', [['drawing', ['drawing.open', 'drawing.back', 'drawing.pdf']], ['annotation', ['drawing.datum', 'drawing.fcf', 'drawing.finish', 'drawing.detail']]]),
      rtab('assembly', [['assembly', ['asm.new', 'asm.back', 'asm.close']], ['components', ['asm.insert-copy', 'asm.insert-file', 'asm.edit']], ['mates', ['asm.joint', 'asm.check', 'asm.stackup']]]),
      rtab('studies', [['workspaces', ids('ws.')], ['simulation', ids('sim.')], ['generative', ids('gen.')], ['manufacture', ids('cam.')], ['form', ids('form.')], ['script', ids('script.')]]),
      rtab('view', [['orient', ['view.fit', 'view.normal', 'view.iso', 'view.front', 'view.back', 'view.top', 'view.bottom', 'view.right', 'view.left']], ['clipboard', ['edit.cut', 'edit.copy', 'edit.paste', 'edit.paste-in-place', 'edit.duplicate', 'edit.delete', 'edit.select-all', 'edit.select-none']]]),
    ],
    keys: {
      ...DEFAULT_KEYS,
      'feature.extrude': ['E'], 'feature.hole': ['H'],
      'view.iso': ['V I'], 'view.front': ['V F'], 'view.back': ['V B'], 'view.top': ['V T'], 'view.bottom': ['V O'],
      'view.right': ['V R'], 'view.left': ['V L'], 'view.normal': ['V N'],
    },
    // feature-based mechanical CAD: the middle button orbits, Shift + middle pans, the left button picks
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: { left: 'none', middle: 'orbit', right: 'pan' } },
  },
};
export const STYLE_ORDER = ['partcraft', 'feature'];
/** IP.4: each style's family ("use this style in every app"). */
export const FAMILY = { partcraft: 'own', feature: 'ribbon' };
export const STORE = 'partcraft.input';

/**
 * The page side the shell asks for (app-input-ui.js): a hidden button per workspace beside the switcher (so menus can
 * switch workspaces), why a command can't run yet (sketch, drawing, assembly or pick mode), the workspace switched first,
 * the keys the sketch editor and the other workspaces keep, and the mouse handed to the views (input-mouse.js).
 */
export function hooks({ root, t }) {
  const pc = () => window.partcraft;
  const sw = root.querySelector('[data-workspace]');
  // in a hidden box of their own in the switcher's group, outside its tool row (the toolbar's layout and Arrange never see them)
  const grp = sw?.closest('[role="group"]');
  if (sw && grp && !grp.querySelector('[data-input-ws]')) {
    const box = document.createElement('span');
    box.hidden = true;
    for (const id of WORKSPACES) {   // the switcher may still be filling in: one button per workspace PartCraft has
      const b = document.createElement('button');
      b.type = 'button'; b.dataset.inputWs = id; b.textContent = t('input.cmd.ws.' + id);
      b.addEventListener('click', () => pc()?.setWorkspace(id));
      box.append(b);
    }
    grp.append(box);
  }
  const until = async (f) => { for (let i = 0; i < 60 && !f(); i++) await new Promise((r) => setTimeout(r, 50)); return f(); };
  const groupHidden = (b) => !!b?.closest('[role="group"][hidden]');
  return {
    why(c, b, generic) {
      const p = pc();
      if (!p) return generic(c, b);
      if (c.wsSwitch) {
        const o = sw && [...sw.options].find((x) => x.value === c.wsSwitch);
        if (!o) return t('shell.input.why.nothere');
        return o.disabled ? (o.title || t('shell.input.why.off')) : '';
      }
      if (c.mode && p.mode !== c.mode) return t('input.why.' + c.mode);
      if (c.ws && p.workspace !== c.ws && groupHidden(b)) return '';   // prepare() switches workspace first
      return generic(c, b);
    },
    async prepare(c) {
      const p = pc();
      if (!p || !c.ws || p.workspace === c.ws) return '';
      if (!p.setWorkspace(c.ws)) return t('input.why.ws');
      return (await until(() => pc().workspace === c.ws)) ? '' : t('input.why.ws');
    },
    // the sketch editor, the drawing sheet, an assembly, picking, and the other workspaces have their own letter keys
    keepKey(combo, plain) {
      const p = pc();
      return plain && !!p && (p.mode !== 'model' || p.workspace !== 'design');
    },
    mouse: (mm) => setMouse(mm),
  };
}
