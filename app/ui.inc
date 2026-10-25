<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * PartCraft part-modeling UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered: toolbar, feature tree, properties and status bar. partcraft.js runs the model.
 * Parts open and save on this computer; nothing here posts anywhere.
 *
 *   top     toolbar (role="toolbar", a direct child of <main>): workspace · file · sketch · features · drawing · assembly · edit · view —
 *           workspace = the switcher (workspaces.js fills it; Design is these groups, the other workspaces' groups are
 *           added by partcraft.js before Edit and shown only in their workspace);
 *           edit = Undo, Redo, Copy, Paste + "More" (cut, copy, paste, paste in place, duplicate, delete, select all / none);
 *           partcraft.js enables each by context (sketch / history / assembly) and says why one is off in its title
 *           contextual: the sketch tools show while a sketch is open (features hide), the drawing tools on the
 *           drawing sheet, the assembly tools in an assembly
 *   stage   … plus the drawing sheet (SVG, sheetview.js) in drawing mode
 *   left    feature history (planes, sketches, features, rollback bar) · part facts
 *   stage   the 3D view (WebGL canvas) with the sketch editor's 2D canvas over it
 *   right   properties of the selected feature / sketch geometry / picked face
 *   bottom  status bar (coordinates, messages, sketch state)
 */
Lang::use($__build); echo Lang::bootTag();   // language files (docs/LANG.md); harmless once app-shell.inc does it
/** Lang::e() text whose fills are trusted markup (<kbd>, <code>, <strong>): the text is escaped, then each fill put in. */
$__lx = static function (string $key, array $html): string {
    $mark = [];
    foreach (array_keys($html) as $i => $k) $mark[$k] = "\u{E000}" . $i . "\u{E001}";
    return strtr(Lang::e($key, $mark), array_combine(array_values($mark), array_values($html)));
};
$__tools = [
    'File' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['new', 'file-earmark-plus', Lang::t('ui.tb.file.new'), Lang::t('ui.tb.file.new.title')],
        ['open', 'folder2-open', Lang::t('ui.tb.file.open'), Lang::t('ui.tb.file.open.title')],
        ['save', 'download', Lang::t('ui.tb.file.save'), Lang::t('ui.tb.file.save.title')],
        ['std-part', 'nut', Lang::t('ui.tb.file.std_part'), Lang::t('ui.tb.file.std_part.title')],
    ],
    'Sketch' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['sketch', 'pencil-square', Lang::t('ui.tb.sketch.sketch'), Lang::t('ui.tb.sketch.sketch.title')],
        ['exit-sketch', 'box-arrow-right', Lang::t('ui.tb.sketch.exit_sketch'), Lang::t('ui.tb.sketch.exit_sketch.title')],
        ['tool-line', 'slash-lg', Lang::t('ui.tb.sketch.tool_line'), Lang::t('ui.tb.sketch.tool_line.title')],
        ['tool-rect', 'square', Lang::t('ui.tb.sketch.tool_rect'), Lang::t('ui.tb.sketch.tool_rect.title')],
        ['tool-circle', 'circle', Lang::t('ui.tb.sketch.tool_circle'), Lang::t('ui.tb.sketch.tool_circle.title')],
        ['tool-arc', 'bezier2', Lang::t('ui.tb.sketch.tool_arc'), Lang::t('ui.tb.sketch.tool_arc.title')],
        ['tool-point', 'dot', Lang::t('ui.tb.sketch.tool_point'), Lang::t('ui.tb.sketch.tool_point.title')],
        ['tool-centerline', 'dash-lg', Lang::t('ui.tb.sketch.tool_centerline'), Lang::t('ui.tb.sketch.tool_centerline.title')],
        ['tool-fillet', 'bezier', Lang::t('ui.tb.sketch.tool_fillet'), Lang::t('ui.tb.sketch.tool_fillet.title')],
        ['tool-spline', 'activity', Lang::t('ui.tb.sketch.tool_spline'), Lang::t('ui.tb.sketch.tool_spline.title')],
        ['tool-trim', 'scissors', Lang::t('ui.tb.sketch.tool_trim'), Lang::t('ui.tb.sketch.tool_trim.title')],
        ['tool-dimension', 'rulers', Lang::t('ui.tb.sketch.tool_dimension'), Lang::t('ui.tb.sketch.tool_dimension.title')],
        ['construction', 'distribute-horizontal', Lang::t('ui.tb.sketch.construction'), Lang::t('ui.tb.sketch.construction.title')],
    ],
    'Features' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['extrude', 'box-arrow-up', Lang::t('ui.tb.features.extrude'), Lang::t('ui.tb.features.extrude.title')],
        ['cut-extrude', 'box-arrow-in-down', Lang::t('ui.tb.features.cut_extrude'), Lang::t('ui.tb.features.cut_extrude.title')],
        ['revolve', 'arrow-repeat', Lang::t('ui.tb.features.revolve'), Lang::t('ui.tb.features.revolve.title')],
        ['hole', 'record-circle', Lang::t('ui.tb.features.hole'), Lang::t('ui.tb.features.hole.title')],
        ['lpattern', 'grid-3x2-gap', Lang::t('ui.tb.features.lpattern'), Lang::t('ui.tb.features.lpattern.title')],
        ['cpattern', 'arrow-clockwise', Lang::t('ui.tb.features.cpattern'), Lang::t('ui.tb.features.cpattern.title')],
        ['mirror', 'symmetry-vertical', Lang::t('ui.tb.features.mirror'), Lang::t('ui.tb.features.mirror.title')],
        ['fillet', 'app', Lang::t('ui.tb.features.fillet'), Lang::t('ui.tb.features.fillet.title')],
        ['chamfer', 'hexagon', Lang::t('ui.tb.features.chamfer'), Lang::t('ui.tb.features.chamfer.title')],
        ['shell', 'box2', Lang::t('ui.tb.features.shell'), Lang::t('ui.tb.features.shell.title')],
        ['pick-done', 'check2-square', Lang::t('ui.tb.features.pick_done'), Lang::t('ui.tb.features.pick_done.title')],
    ],
    'Drawing' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['drawing', 'easel', Lang::t('ui.tb.drawing.drawing'), Lang::t('ui.tb.drawing.drawing.title')],
        ['dr-datum', 'triangle', Lang::t('ui.tb.drawing.dr_datum'), Lang::t('ui.tb.drawing.dr_datum.title')],
        ['dr-fcf', 'border-outer', Lang::t('ui.tb.drawing.dr_fcf'), Lang::t('ui.tb.drawing.dr_fcf.title')],
        ['dr-finish', 'check2', Lang::t('ui.tb.drawing.dr_finish'), Lang::t('ui.tb.drawing.dr_finish.title')],
        ['dr-detail', 'zoom-in', Lang::t('ui.tb.drawing.dr_detail'), Lang::t('ui.tb.drawing.dr_detail.title')],
        ['dr-pdf', 'file-earmark-pdf', Lang::t('ui.tb.drawing.dr_pdf'), Lang::t('ui.tb.drawing.dr_pdf.title')],
        ['dr-back', 'box-arrow-left', Lang::t('ui.tb.drawing.dr_back'), Lang::t('ui.tb.drawing.dr_back.title')],
    ],
    'Assembly' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['asm-new', 'boxes', Lang::t('ui.tb.assembly.asm_new'), Lang::t('ui.tb.assembly.asm_new.title')],
        ['asm-back', 'box-arrow-in-left', Lang::t('ui.tb.assembly.asm_back'), Lang::t('ui.tb.assembly.asm_back.title')],
        ['asm-insert-copy', 'plus-square', Lang::t('ui.tb.assembly.asm_insert_copy'), Lang::t('ui.tb.assembly.asm_insert_copy.title')],
        ['asm-insert-file', 'box-arrow-in-down', Lang::t('ui.tb.assembly.asm_insert_file'), Lang::t('ui.tb.assembly.asm_insert_file.title')],
        ['asm-joint', 'link-45deg', Lang::t('ui.tb.assembly.asm_joint'), Lang::t('ui.tb.assembly.asm_joint.title')],
        ['asm-check', 'exclamation-diamond', Lang::t('ui.tb.assembly.asm_check'), Lang::t('ui.tb.assembly.asm_check.title')],
        ['asm-stackup', 'rulers', Lang::t('ui.tb.assembly.asm_stackup'), Lang::t('ui.tb.assembly.asm_stackup.title')],
        ['asm-edit', 'pencil', Lang::t('ui.tb.assembly.asm_edit'), Lang::t('ui.tb.assembly.asm_edit.title')],
        ['asm-close', 'x-square', Lang::t('ui.tb.assembly.asm_close'), Lang::t('ui.tb.assembly.asm_close.title')],
    ],
    'Edit' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['undo', 'arrow-counterclockwise', Lang::t('ui.tb.edit.undo'), Lang::t('ui.tb.edit.undo.title')],
        ['redo', 'arrow-clockwise', Lang::t('ui.tb.edit.redo'), Lang::t('ui.tb.edit.redo.title')],
        ['copy', 'copy', Lang::t('ui.tb.edit.copy'), Lang::t('ui.tb.edit.copy.title')],
        ['paste', 'clipboard-plus', Lang::t('ui.tb.edit.paste'), Lang::t('ui.tb.edit.paste.title')],
    ],
    'View' => [   // i18n-ignore: the group's key (also its aria-label, which the shell's toolbar arrangement saves); the visible name is ui.tb.group.*
        ['view-fit', 'arrows-fullscreen', Lang::t('ui.tb.view.view_fit'), Lang::t('ui.tb.view.view_fit.title')],
        ['view-normal', 'bullseye', Lang::t('ui.tb.view.view_normal'), Lang::t('ui.tb.view.view_normal.title')],
    ],
];
?>
<main id="main" class="pc" data-partcraft>
  <h1 class="visually-hidden"><?= Lang::e('ui.page.h1', ['app' => $app['name']]) ?></h1>

  <div class="pc-tools" role="toolbar" aria-label="<?= Lang::e('ui.tb.aria') ?>">
    <div class="pc-tool-group pc-ws" role="group" aria-label="Workspace" data-group="workspace"><?php /* i18n-ignore: a group's aria-label is its key in the shell's saved toolbar arrangement (Settings › Arrange the toolbar); translating it would lose saved arrangements per language */ ?>
      <label class="pc-tool-label" for="pc-workspace"><?= Lang::e('ui.tb.group.workspace') ?></label>
      <div class="pc-tool-row">
        <select class="pc-select pc-ws-select" id="pc-workspace" data-workspace title="<?= Lang::e('ui.tb.workspace.title') ?>">
          <option value="design"><?= Lang::e('ui.tb.workspace.design') ?></option>
        </select>
      </div>
    </div>
    <?php foreach ($__tools as $__group => $__items): ?>
      <?php /* i18n-ignore: a group's aria-label is its key in the shell's saved toolbar arrangement; translating it would lose saved arrangements per language. The visible name below is translated. */ ?>
      <div class="pc-tool-group" role="group" aria-label="<?= e($__group) ?>" data-group="<?= e(strtolower($__group)) ?>">
        <span class="pc-tool-label" aria-hidden="true"><?= Lang::e('ui.tb.group.' . strtolower($__group)) ?></span>
        <div class="pc-tool-row">
          <?php foreach ($__items as [$__cmd, $__icon, $__label, $__title]): ?>
            <button type="button" class="pc-tool" data-cmd="<?= e($__cmd) ?>" title="<?= e($__title) ?>">
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= e($__label) ?></span>
            </button>
          <?php endforeach; ?>
          <?php if ($__group === 'Features'): ?><?php /* i18n-ignore: the group's key, not shown */ ?>
            <details class="pc-menu" data-features-menu>
              <summary class="pc-tool" title="<?= Lang::e('ui.tb.features.more.title') ?>"><i class="bi bi-plus-square-dotted" aria-hidden="true"></i><span><?= Lang::e('ui.tb.more') ?></span></summary>
              <div class="pc-menu-list" role="menu">
                <?php foreach ([
                    ['revolve-cut', 'arrow-clockwise', Lang::t('ui.tb.fmore.revolve_cut'), Lang::t('ui.tb.fmore.revolve_cut.title')],
                    'ui.tb.fmore.h.reference',
                    ['plane', 'square-half', Lang::t('ui.tb.fmore.plane'), Lang::t('ui.tb.fmore.plane.title')],
                    ['axis', 'arrows-vertical', Lang::t('ui.tb.fmore.axis'), Lang::t('ui.tb.fmore.axis.title')],
                    ['point', 'crosshair', Lang::t('ui.tb.fmore.point'), Lang::t('ui.tb.fmore.point.title')],
                    'ui.tb.fmore.h.sweep',
                    ['sweep', 'bezier2', Lang::t('ui.tb.fmore.sweep'), Lang::t('ui.tb.fmore.sweep.title')],
                    ['loft', 'layers', Lang::t('ui.tb.fmore.loft'), Lang::t('ui.tb.fmore.loft.title')],
                    ['draft', 'triangle-half', Lang::t('ui.tb.fmore.draft'), Lang::t('ui.tb.fmore.draft.title')],
                    'ui.tb.fmore.h.bodies',
                    ['combine', 'union', Lang::t('ui.tb.fmore.combine'), Lang::t('ui.tb.fmore.combine.title')],
                    ['movebody', 'arrows-move', Lang::t('ui.tb.fmore.movebody'), Lang::t('ui.tb.fmore.movebody.title')],
                    ['scalebody', 'aspect-ratio', Lang::t('ui.tb.fmore.scalebody'), Lang::t('ui.tb.fmore.scalebody.title')],
                    ['pathpattern', 'bezier', Lang::t('ui.tb.fmore.pathpattern'), Lang::t('ui.tb.fmore.pathpattern.title')],
                    'ui.tb.fmore.h.surfaces',
                    ['patch', 'bandaid', Lang::t('ui.tb.fmore.patch'), Lang::t('ui.tb.fmore.patch.title')],
                    ['surfloft', 'layers-half', Lang::t('ui.tb.fmore.surfloft'), Lang::t('ui.tb.fmore.surfloft.title')],
                    ['gordon', 'grid-3x3', Lang::t('ui.tb.fmore.gordon'), Lang::t('ui.tb.fmore.gordon.title')],
                    ['stitch', 'link-45deg', Lang::t('ui.tb.fmore.stitch'), Lang::t('ui.tb.fmore.stitch.title')],
                    ['thicken', 'layers-fill', Lang::t('ui.tb.fmore.thicken'), Lang::t('ui.tb.fmore.thicken.title')],
                    ['offsetsurf', 'distribute-vertical', Lang::t('ui.tb.fmore.offsetsurf'), Lang::t('ui.tb.fmore.offsetsurf.title')],
                    ['extendsurf', 'arrows-angle-expand', Lang::t('ui.tb.fmore.extendsurf'), Lang::t('ui.tb.fmore.extendsurf.title')],
                    ['trimsurf', 'scissors', Lang::t('ui.tb.fmore.trimsurf'), Lang::t('ui.tb.fmore.trimsurf.title')],
                ] as $__m): ?>
                  <?php if (is_string($__m)): ?><hr><div class="pc-menu-h" role="presentation"><?= Lang::e($__m) ?></div><?php continue; endif; ?>
                  <button type="button" role="menuitem" data-cmd="<?= e($__m[0]) ?>" title="<?= e($__m[3]) ?>"><i class="bi bi-<?= e($__m[1]) ?>" aria-hidden="true"></i> <?= e($__m[2]) ?></button><?php /* i18n-ignore: $__m holds Lang::t() texts */ ?>
                <?php endforeach; ?>
                <?php foreach (['ui.tb.fmore.h.details', ['rib', 'triangle', 'rib.menu'], ['thread', 'nut', 'thread.menu'], ['member', 'bounding-box', 'weld.menu'], 'ui.tb.fmore.h.sheet', ['sheetbase', 'file-earmark', 'sheet.menu.base'], ['sheetflange', 'arrow-90deg-up', 'sheet.menu.flange']] as $__m): ?>
                  <?php if (is_string($__m)): ?><hr><div class="pc-menu-h" role="presentation"><?= Lang::e($__m) ?></div><?php continue; endif; ?>
                  <button type="button" role="menuitem" data-cmd="<?= e($__m[0]) ?>" title="<?= Lang::e($__m[2] . '.title') ?>"><i class="bi bi-<?= e($__m[1]) ?>" aria-hidden="true"></i> <?= Lang::e($__m[2]) ?></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Edit'): ?><?php /* i18n-ignore: the group's key, not shown */ ?>
            <details class="pc-menu" data-edit-menu>
              <summary class="pc-tool" title="<?= Lang::e('ui.tb.edit.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.tb.more') ?></span></summary>
              <div class="pc-menu-list pc-menu-right" role="menu">
                <?php foreach ([
                    ['cut', Lang::t('ui.tb.editmenu.cut'), 'Ctrl+X'], ['copy', Lang::t('ui.tb.editmenu.copy'), 'Ctrl+C'], ['paste', Lang::t('ui.tb.editmenu.paste'), 'Ctrl+V'], ['paste-in-place', Lang::t('ui.tb.editmenu.paste_in_place'), 'Ctrl+Shift+V'],
                    ['duplicate', Lang::t('ui.tb.editmenu.duplicate'), 'Ctrl+D'], ['delete', Lang::t('ui.tb.editmenu.delete'), 'Delete'], null,
                    ['select-all', Lang::t('ui.tb.editmenu.select_all'), 'Ctrl+A'], ['select-none', Lang::t('ui.tb.editmenu.select_none'), 'Esc'],   // i18n-ignore: the third item of each is a key name (Ctrl+X, Delete, Esc) shown in <kbd>
                ] as $__m): ?>
                  <?php if ($__m === null): ?><hr><?php continue; endif; ?>
                  <button type="button" role="menuitem" data-cmd="<?= e($__m[0]) ?>"><?= e($__m[1]) ?> <kbd><?= e($__m[2]) ?></kbd></button><?php /* i18n-ignore: $__m[1] is a Lang::t() text, $__m[2] a key name */ ?>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'Sketch'): ?><?php /* i18n-ignore: the group's key, not shown */ ?>
            <details class="pc-menu" data-sketch-menu hidden>
              <summary class="pc-tool" title="<?= Lang::e('ui.tb.sketch.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('ui.tb.more') ?></span></summary>
              <div class="pc-menu-list" role="menu">
                <?php foreach ([
                    ['tool-cspline', Lang::t('ui.tb.sketchmenu.tool_cspline'), ''], ['tool-extend', Lang::t('ui.tb.sketchmenu.tool_extend'), 'E'], ['tool-offset', Lang::t('ui.tb.sketchmenu.tool_offset'), 'O'], ['tool-mirror', Lang::t('ui.tb.sketchmenu.tool_mirror'), 'M'], null,   // i18n-ignore: the third item is a shortcut key
                    ['tool-polygon', Lang::t('ui.tb.sketchmenu.tool_polygon'), ''], ['tool-slot', Lang::t('ui.tb.sketchmenu.tool_slot'), ''], null,
                    ['tool-lpattern', Lang::t('ui.tb.sketchmenu.tool_lpattern'), ''], ['tool-cpattern', Lang::t('ui.tb.sketchmenu.tool_cpattern'), ''], null,
                    ['tool-project', Lang::t('ui.tb.sketchmenu.tool_project'), ''],
                ] as $__m): ?>
                  <?php if ($__m === null): ?><hr><?php continue; endif; ?>
                  <button type="button" role="menuitem" data-cmd="<?= e($__m[0]) ?>"><?= e($__m[1]) ?><?php /* i18n-ignore: Lang::t() text and a shortcut key */ ?><?php if ($__m[2] !== ''): ?> <kbd><?= e($__m[2]) ?></kbd><?php endif; ?></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'View'): ?><?php /* i18n-ignore: the group's key, not shown */ ?>
            <details class="pc-menu" data-views-menu>
              <summary class="pc-tool" title="<?= Lang::e('views.menu.title') ?>"><i class="bi bi-box" aria-hidden="true"></i><span><?= Lang::e('ui.tb.views') ?></span></summary>
              <div class="pc-menu-list pc-menu-right" role="menu">
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-cmd="view-measure" title="<?= Lang::e('ui.tb.views.measure.title') ?>"><?= Lang::e('ui.tb.views.measure') ?> <kbd>M</kbd></button>
                <button type="button" role="menuitem" data-cmd="view-mass" title="<?= Lang::e('ui.tb.views.mass.title') ?>"><?= Lang::e('ui.tb.views.mass') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-cmd="view-section" title="<?= Lang::e('section.menu.title') ?>"><?= Lang::e('section.menu') ?> <kbd>X</kbd></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-cmd="view-draft" title="<?= Lang::e('draft.menu.title') ?>"><?= Lang::e('draft.menu') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-cmd="view-zebra" title="<?= Lang::e('analysis.menu.zebra.title') ?>"><?= Lang::e('analysis.menu.zebra') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="false" data-cmd="view-curvature" title="<?= Lang::e('analysis.menu.curvature.title') ?>"><?= Lang::e('analysis.menu.curvature') ?></button>
                <button type="button" role="menuitemcheckbox" aria-checked="true" data-cmd="view-planes" title="<?= Lang::e('ui.tb.views.planes.title') ?>"><?= Lang::e('ui.tb.views.planes') ?></button>
                <hr>
                <?php foreach (['iso', 'front', 'back', 'top', 'bottom', 'right', 'left'] as $__v): ?>
                  <button type="button" role="menuitem" data-cmd="view-<?= e($__v) ?>"><?= Lang::e('ui.tb.view.' . $__v) ?></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
          <?php if ($__group === 'File'): ?><?php /* i18n-ignore: the group's key, not shown */ ?>
            <details class="pc-menu" data-export-menu>
              <summary class="pc-tool" title="<?= Lang::e('ui.tb.export.title') ?>"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span><?= Lang::e('ui.tb.export') ?></span></summary>
              <div class="pc-menu-list" role="menu">
                <button type="button" role="menuitem" data-cmd="export-print"><?= Lang::e('ui.tb.export.print') ?></button>
                <button type="button" role="menuitem" data-cmd="export-stl"><?= Lang::e('ui.tb.export.stl') ?></button>
                <button type="button" role="menuitem" data-cmd="export-3mf"><?= Lang::e('ui.tb.export.3mf') ?></button>
                <button type="button" role="menuitem" data-cmd="export-step"><?= Lang::e('ui.tb.export.step') ?></button>
                <button type="button" role="menuitem" data-cmd="export-step214"><?= Lang::e('ui.tb.export.step214') ?></button>
                <button type="button" role="menuitem" data-cmd="export-step-faceted"><?= Lang::e('ui.tb.export.step_faceted') ?></button>
                <button type="button" role="menuitem" data-cmd="export-step214-faceted"><?= Lang::e('ui.tb.export.step214_faceted') ?></button>
                <button type="button" role="menuitem" data-cmd="export-ifc" title="<?= Lang::e('ui.tb.export.ifc.title') ?>"><?= Lang::e('ui.tb.export.ifc') ?></button>
                <button type="button" role="menuitem" data-cmd="export-usd" title="<?= Lang::e('usd.export.title') ?>"><?= Lang::e('usd.menu.usdz') ?></button><?php /* 0.7 XF.8 (session usd): usd-partcraft.js */ ?>
                <button type="button" role="menuitem" data-cmd="export-sw-step" title="<?= Lang::e('ui.tb.export.sw_step.title') ?>"><?= Lang::e('ui.tb.export.sw_step') ?></button>
                <button type="button" role="menuitem" data-cmd="export-sw-macro" title="<?= Lang::e('ui.tb.export.sw_macro.title') ?>"><?= Lang::e('ui.tb.export.sw_macro') ?></button>
                <a role="menuitem" class="pc-menu-link" data-sw-back href="<?= e($__build['url']) ?>CadCraftExport.swb" download="CadCraftExport.swb" title="<?= Lang::e('ui.tb.export.sw_back.title') ?>"><?= Lang::e('ui.tb.export.sw_back') ?></a>
                <button type="button" role="menuitem" data-cmd="export-dxf"><?= Lang::e('ui.tb.export.dxf') ?></button>
                <button type="button" role="menuitem" data-cmd="export-nest" title="<?= Lang::e('ui.tb.export.nest.title') ?>"><?= Lang::e('ui.tb.export.nest') ?></button>
                <button type="button" role="menuitem" data-cmd="export-laser" title="<?= Lang::e('ui.tb.export.laser.title') ?>"><?= Lang::e('ui.tb.export.laser') ?></button>
                <button type="button" role="menuitem" data-cmd="export-drawing"><?= Lang::e('ui.tb.export.drawing') ?></button>
                <button type="button" role="menuitem" data-cmd="export-bom" hidden><?= Lang::e('ui.tb.export.bom') ?></button>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".json,application/json,.step,.stp,.stl,.obj,.3mf,.3dm" tabindex="-1" aria-hidden="true" data-file>
    <input type="file" class="visually-hidden" accept=".json,application/json" tabindex="-1" aria-hidden="true" data-insert-file>
  </div>

  <aside class="pc-panel pc-left" aria-label="<?= Lang::e('ui.left.aria') ?>">
    <section class="pc-sec">
      <div class="pc-sec-head">
        <h2 class="pc-h" data-part-name><?= Lang::e('ui.left.part_name') ?></h2>
        <span class="pc-roll" role="group" aria-label="<?= Lang::e('ui.roll.aria') ?>">
          <button type="button" class="pc-btn pc-btn-sm" data-roll="back" title="<?= Lang::e('ui.roll.back.title') ?>" aria-label="<?= Lang::e('ui.roll.back') ?>"><i class="bi bi-chevron-up" aria-hidden="true"></i></button>
          <button type="button" class="pc-btn pc-btn-sm" data-roll="forward" title="<?= Lang::e('ui.roll.forward.title') ?>" aria-label="<?= Lang::e('ui.roll.forward') ?>"><i class="bi bi-chevron-down" aria-hidden="true"></i></button>
          <button type="button" class="pc-btn pc-btn-sm" data-roll="end" title="<?= Lang::e('ui.roll.end.title') ?>" aria-label="<?= Lang::e('ui.roll.end') ?>"><i class="bi bi-chevron-bar-down" aria-hidden="true"></i></button>
        </span>
      </div>
      <ul class="pc-tree" role="tree" aria-label="<?= Lang::e('ui.left.aria') ?>" data-tree></ul>
      <p class="pc-note" data-tree-note><?= Lang::e('ui.left.note.edit') ?> <?= $__lx('ui.left.note.move', ['keys' => '<kbd>Alt</kbd>+<kbd>↑</kbd>/<kbd>↓</kbd>']) ?> <?= $__lx('ui.left.note.roll', ['back' => '<kbd>[</kbd>', 'forward' => '<kbd>]</kbd>', 'end' => '<kbd>End</kbd>']) ?><?php /* i18n-ignore: key names */ ?></p>
      <p class="pc-note" data-asm-note hidden><?= $__lx('ui.left.asm_note', ['key' => '<kbd>J</kbd>']) ?></p>
    </section>
    <section class="pc-sec">
      <h2 class="pc-h" data-facts-h><?= Lang::e('ui.left.facts') ?></h2>
      <dl class="pc-dl" data-facts></dl>
    </section>
  </aside>

  <section class="pc-stage" aria-label="<?= Lang::e('ui.stage.aria') ?>" data-stage>
    <canvas class="pc-gl" data-gl aria-label="<?= Lang::e('ui.stage.gl') ?>"></canvas>
    <canvas class="pc-sketch" data-sketch-canvas aria-label="<?= Lang::e('ui.stage.sketch') ?>" hidden></canvas>
    <input type="text" class="pc-dim-input" data-dim-input inputmode="decimal" autocomplete="off" spellcheck="false" hidden>
    <div class="pc-hint" data-hint>
      <p class="pc-hint-h"><?= Lang::e('ui.hint.h') ?></p>
      <ol>
        <li><?= $__lx('ui.hint.1', ['sketch' => '<strong>' . Lang::e('ui.tb.sketch.sketch') . '</strong>']) ?></li>
        <li><?= $__lx('ui.hint.2', ['line' => '<kbd>L</kbd>', 'rect' => '<kbd>R</kbd>', 'circle' => '<kbd>C</kbd>', 'dim' => '<kbd>D</kbd>']) ?></li>
        <li><?= $__lx('ui.hint.3', ['exit' => '<strong>' . Lang::e('ui.tb.sketch.exit_sketch') . '</strong>', 'extrude' => '<strong>' . Lang::e('ui.tb.features.extrude') . '</strong>', 'revolve' => '<strong>' . Lang::e('ui.tb.features.revolve') . '</strong>']) ?></li>
        <li><?= $__lx('ui.hint.4', ['file' => '<code>.partcraft.json</code>']) ?></li>
      </ol>
      <div data-recent-files data-max="6"></div>
    </div>
    <div class="pc-sheet" data-sheet hidden></div>
    <div class="pc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down-right" aria-hidden="true"></i> <?= Lang::e('ui.stage.drop') ?></span></div>
    <div class="pc-busy" data-busy hidden><span data-busy-text><?= Lang::e('ui.stage.busy') ?></span></div>
    <div class="pc-sketch-bar" data-sketch-bar hidden>
      <span class="pc-chip" data-sketch-state><?= Lang::e('ui.stage.sketch_state') ?></span>
      <span class="pc-sketch-name" data-sketch-name></span>
    </div>
    <div class="pc-touchbar" role="toolbar" aria-label="<?= Lang::e('touch.bar') ?>" data-touchbar hidden>
      <button type="button" class="pc-touchbtn" data-touch="add" aria-pressed="false" title="<?= Lang::e('touch.add.title') ?>"><i class="bi bi-plus-square" aria-hidden="true"></i> <?= Lang::e('touch.add') ?></button>
      <button type="button" class="pc-touchbtn" data-touch="done" title="<?= Lang::e('touch.done.title') ?>" hidden><i class="bi bi-check2" aria-hidden="true"></i> <?= Lang::e('touch.done') ?></button>
      <button type="button" class="pc-touchbtn" data-touch="esc" title="<?= Lang::e('touch.esc.title') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i> <?= Lang::e('touch.esc') ?></button>
    </div>
  </section>

  <aside class="pc-panel pc-right" aria-label="<?= Lang::e('ui.right.props') ?>">
    <div class="pc-tabs" role="tablist" aria-label="<?= Lang::e('ui.right.aria') ?>" data-right-tabs>
      <button type="button" class="pc-tab" role="tab" id="pc-tab-props" aria-controls="pc-sec-props" aria-selected="true" data-tab="props"><?= Lang::e('ui.right.props') ?></button>
      <button type="button" class="pc-tab" role="tab" id="pc-tab-params" aria-controls="pc-sec-params" aria-selected="false" tabindex="-1" data-tab="params"><?= Lang::e('ui.right.params') ?></button>
      <button type="button" class="pc-tab" role="tab" id="pc-tab-script" aria-controls="pc-sec-script" aria-selected="false" tabindex="-1" data-tab="script" title="<?= Lang::e('ui.right.script.title') ?>"><?= Lang::e('ui.right.script') ?></button>
    </div>
    <section class="pc-sec" id="pc-sec-props" role="tabpanel" aria-labelledby="pc-tab-props">
      <h2 class="pc-h" data-props-h><?= Lang::e('ui.right.props') ?></h2>
      <div data-props></div>
    </section>
    <section class="pc-sec" id="pc-sec-params" role="tabpanel" aria-labelledby="pc-tab-params" hidden>
      <h2 class="pc-h"><?= Lang::e('ui.right.params') ?></h2>
      <div data-params></div>
    </section>
    <section class="pc-sec" id="pc-sec-script" role="tabpanel" aria-labelledby="pc-tab-script" hidden>
      <h2 class="pc-h"><?= Lang::e('ui.right.script') ?></h2>
      <p class="pc-note" data-script-tab-note><?= Lang::e('ui.right.script.note') ?></p>
      <div data-script-tab></div>
    </section>
  </aside>

  <footer class="pc-status" aria-label="<?= Lang::e('ui.status.aria') ?>">
    <output class="pc-coords" data-coords></output>
    <span class="pc-status-msg" data-status role="status" aria-live="polite"></span>
    <span class="pc-chip" data-kernel title="<?= Lang::e('ui.status.kernel.title') ?>"></span>
    <span class="pc-chip" data-build-state></span>
  </footer>
</main>
