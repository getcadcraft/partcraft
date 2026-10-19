<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * settings.inc — PartCraft's own panel of the Settings dialog (core/components/app-settings.inc includes it as the
 * "PartCraft" tab). partcraft.js reads and stores the fields (localStorage partcraft.settings), syncs them each time the
 * dialog opens and resets them on "cc-settings-reset".
 *   orbit     left (default: left-drag turns the view, right or middle drag pans) / middle (middle-drag turns,
 *             Shift + middle or right drag pans, the left button only picks)
 *   scroll    auto (default) / mouse (the wheel zooms) / trackpad (two fingers turn the view, Shift pans, pinch zooms;
 *             in a sketch two fingers pan)
 *   autorel   add relations while sketching (default on): coincident where a click snaps to a point or a curve,
 *             horizontal / vertical for nearly level lines
 *   dimdraw   dimension as you draw (default on; 0.6 PU.1): sizes typed while drawing a line, rectangle, circle or arc become
 *             driving dimensions (sketchview.js dimDraw)
 *   corner    corner indicator: view cube (default) / axis icon / none (viewcube.js)
 *   bed       the 3D printer's bed, width × depth × height in mm (empty = not checked; 0.5 SG.4): Check for 3D printing
 *             warns when a part is larger
 *   threads   solver threads: automatic (default: logical processors − 1, at most 16) or a count (pool.js; used only when the
 *             page is cross-origin isolated — partcraft.js fills in data-pc-threads-state)
 */
?>
<fieldset class="shell-set" data-pc-settings>
  <legend><?= Lang::e('ui.settings.orbit') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('ui.settings.orbit') ?>">
    <label><input type="radio" name="pcOrbit" value="left"> <i class="bi bi-mouse2" aria-hidden="true"></i> <?= Lang::e('ui.settings.orbit.left') ?></label>
    <label><input type="radio" name="pcOrbit" value="middle"> <i class="bi bi-mouse3" aria-hidden="true"></i> <?= Lang::e('ui.settings.orbit.middle') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.orbit.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('ui.settings.scroll') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('ui.settings.scroll') ?>">
    <label><input type="radio" name="pcScroll" value="auto"> <i class="bi bi-magic" aria-hidden="true"></i> <?= Lang::e('ui.settings.scroll.auto') ?></label>
    <label><input type="radio" name="pcScroll" value="mouse"> <i class="bi bi-mouse" aria-hidden="true"></i> <?= Lang::e('ui.settings.scroll.mouse') ?></label>
    <label><input type="radio" name="pcScroll" value="trackpad"> <i class="bi bi-hand-index" aria-hidden="true"></i> <?= Lang::e('ui.settings.scroll.trackpad') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.scroll.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('ui.settings.sketching') ?></legend>
  <label class="shell-check"><input type="checkbox" name="pcAutoRel"> <?= Lang::e('ui.settings.autorel') ?></label>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.autorel.hint') ?></p>
  <label class="shell-check"><input type="checkbox" name="pcDimDraw"> <?= Lang::e('ui.settings.dimdraw') ?></label>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.dimdraw.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('ui.settings.corner') ?></legend>
  <div class="shell-seg" role="radiogroup" aria-label="<?= Lang::e('ui.settings.corner') ?>">
    <label><input type="radio" name="pcCorner" value="cube"> <i class="bi bi-box" aria-hidden="true"></i> <?= Lang::e('ui.settings.corner.cube') ?></label>
    <label><input type="radio" name="pcCorner" value="axes"> <i class="bi bi-arrows-move" aria-hidden="true"></i> <?= Lang::e('ui.settings.corner.axes') ?></label>
    <label><input type="radio" name="pcCorner" value="none"> <i class="bi bi-slash-circle" aria-hidden="true"></i> <?= Lang::e('ui.settings.corner.none') ?></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.corner.hint') ?></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('ui.settings.threads') ?></legend>
  <div class="shell-row">
  <label for="pcThreads"><?= Lang::e('ui.settings.threads.label') ?></label>
  <select id="pcThreads" name="pcThreads" class="select-cc">
    <option value="auto"><?= Lang::e('ui.settings.threads.auto') ?></option>
    <option value="1"><?= Lang::e('ui.settings.threads.one') ?></option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="6">6</option>
    <option value="8">8</option>
    <option value="12">12</option>
    <option value="16">16</option>
  </select>
  </div>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.threads.hint') ?> <span data-pc-threads-state></span></p>
</fieldset>
<fieldset class="shell-set">
  <legend><?= Lang::e('ui.settings.bed') ?></legend>
  <div class="shell-row pc-bed" role="group" aria-label="<?= Lang::e('ui.settings.bed.label') ?>">
    <span><?= Lang::e('ui.settings.bed.label') ?></span>
    <label><?= Lang::e('ui.settings.bed.x') ?> <input type="number" name="pcBedX" min="10" max="5000" step="1" inputmode="numeric"></label>
    <label><?= Lang::e('ui.settings.bed.y') ?> <input type="number" name="pcBedY" min="10" max="5000" step="1" inputmode="numeric"></label>
    <label><?= Lang::e('ui.settings.bed.z') ?> <input type="number" name="pcBedZ" min="10" max="5000" step="1" inputmode="numeric"></label>
  </div>
  <p class="shell-hint-text"><?= Lang::e('ui.settings.bed.hint') ?></p>
</fieldset>
