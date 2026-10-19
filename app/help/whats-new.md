---
title: What's new in 0.6
summary: PartCraft 0.6 adds sizes typed as you draw, drag handles, one click from a face to a feature, values in the history, base planes that step back, nesting flat parts on sheets, tolerance stack-ups, configurations that turn features off, and permanent magnets in 2-D magnetics.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.6, version, new features, dimension as you draw, typed size, drag handle, extrude from face, cut into, hole here, base planes, history values, relations, nest, nesting, sheet, plate, dxf, laser, waterjet, tolerance, stack-up, stackup, rss, worst case, iso 2768, gd&t, frame analysis, frame3d, configuration, suppress, magnet, permanent magnet, magnetics, interface size, toolbar, pen, touch, indonesian
---

This is what changed in PartCraft 0.6, compared with 0.5. Sketching and changing a part take fewer clicks, and flat parts and assemblies get new checks.

## New

### Sketching and changing parts

- **Dimension as you draw.** While drawing a line, rectangle, circle or arc, type its size ({{key:Tab}} for the next one: angle, height, arc angle) and press {{key:Enter}}. The shape is drawn at that size and each typed size becomes a dimension, so sketches come out sized. {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Dimension as you draw}} turns it off. See [Type the size as you draw](topic:sketch-basics#type-the-size-as-you-draw).
- **Drag handles.** Select an Extrude and drag the arrow on its end face to change the depth, or a Revolve's curved arrow to change its angle. The part follows as you drag, letting go is one undo step, and {{key:Esc}} goes back. Type in the box beside the arrow to set the value exactly. See [Drag it in the view](topic:change-sizes#drag-it-in-the-view).
- **One click from a face to a feature.** Pick a flat face and choose {{ui:Extrude from it}} (pulls the whole face out), {{ui:Cut into it}} (pushes it in) or {{ui:Hole here}} (a hole through where you clicked). Each is one undo step; type a number straight after for the depth or the diameter. See [Pull or push a whole face](topic:extrude-and-cut#pull-or-push-a-whole-face) and [Drill holes](topic:holes).
- **Values in the history.** Each feature's row shows its main number, such as "Extrude1 25 mm" or "Hole1 Ø6.6 thru". Double-click it, or press {{key:F2}}, to change it right there, with equations and undo included. See [Change the number in the history](topic:change-sizes#change-the-number-in-the-history).
- **The base planes step back.** Once a part has a solid, the Front, Top and Right planes are drawn faint and clicks go through them to the part. They come back in full while you choose where to sketch or when you select one in the history. {{ui:Views}} › {{ui:Base planes}} hides them altogether. See [The 3D view](topic:workspace#the-3d-view-middle).
- **Repeated relations in one row.** The sketch panel lists "Coincident × 5" instead of five rows. Open the row to see each one, or {{ui:Select}} or {{ui:Delete}} all of them at once. See [The relations list](topic:relations-dimensions#the-relations-list).
- **Configurations can turn features off.** Save a configuration with a feature suppressed, such as no holes or no chamfer. Applying it turns that feature off and the others back on, with its sizes, in one step: one part, with and without. See [Turn features on and off in a configuration](topic:design-tables#turn-features-on-and-off-in-a-configuration).

### Making and checking

- **Nest flat parts on sheets.** {{ui:Export}} › {{ui:Nest flat parts on sheets…}}, or {{ui:Nest on sheets…}} under a sheet metal flat pattern, lays flat parts on plates or a roll with edge margins, a space between parts, turns and grain. It shows how many plates and how much material it takes, and saves the layout as a DXF for the laser or waterjet. Parts come from the flat pattern, from every sheet metal part of an assembly, or from any DXF file; small parts are placed inside big parts' holes. See [Nest flat parts on sheets](topic:nest-flat-parts).
- **Tolerance stack-ups.** In an assembly, {{ui:Stack-up}} lets you click a chain of faces through the parts and see how much the gap at its end can vary: worst case and RSS (root sum square), how many assemblies in a million fall outside your limits, and the dimensions that matter most, ranked first. Tolerances come from each part's general tolerance (±, +/−, ISO 2768), from the GD&T frames on its drawing, or typed. It is saved with the assembly, and exports as CSV. See [Tolerance stack-ups](topic:tolerance-stackup).

### Scripts and analysis

- **Frame analysis in the analysis library.** `frame3d` is frame analysis written out as a script you can read, run and change. DetailCraft and BimCraft export a whole model for it. See [The analysis library](topic:craftscript-library#groups).
- **Permanent magnets in 2-D magnetics.** `magnetostatic2d` takes permanent magnets, with a remanence and direction for each region. A new example puts a magnet in an iron core with an air gap and works out the magnet's working point, how much flux leaks, the field in the gap and the pull. See [Permanent magnets](topic:magnetic-fields-2d#permanent-magnets).

## Changed

- **Newer file versions, only when needed.** An assembly with a stack-up is saved as assembly version 5, and a part with a configuration that turns features off is saved as part version 4. PartCraft 0.5 refuses both with its "newer version" message instead of opening them wrong. Assemblies without a stack-up, and parts without such a configuration, are saved as before. See [Save and reopen](topic:save-reopen).
- The toolbar stays one row on a 1440 px window.

## Fixed

- Typing a single digit after selecting a feature, then {{key:Enter}}, did nothing. Two or more digits worked; one digit works now.

## In every app

- **The toolbar can't get lost.** While full screen hides the bars, a small {{ui:Show bars}} tab stays at the top of the window. {{ui:Settings}} › {{ui:General}} › {{ui:Reset the layout}} puts the toolbar, panels, screen mode and menu style back to how the app starts (your interface size and panel text size stay). In CadCraft Studio, its own {{ui:Settings}} has {{ui:Reset the layout in every app}}. See [Where did my toolbar go?](common:lost-toolbar).
- **A menu on the toolbar.** Right-click the toolbar, or press and hold it, to arrange it, lock it so nothing moves by accident, or reset it. Ribbon menu styles collapse to their tab names: a tab opens its tools for one command; double-click a tab or use the pin to keep the ribbon open. See [The toolbar's own menu](common:lost-toolbar#the-toolbars-own-menu).
- **Interface size.** {{ui:Settings}} › {{ui:General}} › {{ui:Interface size}} makes the bars, toolbars, panels and dialogs 80 % to 140 % of normal, for this app only, so two apps side by side on one monitor both fit. The drawing keeps its own zoom. See [Everything is too big or too small](common:lost-toolbar#everything-is-too-big-or-too-small).
- **Pen and touch.** On a tablet or a touch-screen laptop with a pen, your palm is ignored while you draw, fingers can be left to moving the view, a two-finger tap undoes and a three-finger tap redoes, and the pen's side button and eraser end can undo or redo. {{ui:Settings}} › {{ui:General}} › {{ui:Pen and touch}}. See [Draw with a pen on a tablet](common:pen-and-touch).
- **Live sessions can grow past 20 people.** In CadCraft Studio, when more people knock than the usual 20, Studio tells you what to expect and you choose {{ui:Allow anyway}} for this session or {{ui:Keep it at 20}}. {{ui:Recent edits}} in the Live panel shows who changed what. See [Work together live](common:work-together-live#when-many-people-join).
- **Bahasa Indonesia** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}: a machine-made draft of every word, not yet reviewed by a native speaker. **Spanish (Mexico)** is still a draft too. Help topics are in English.
- **Installers are still not signed** (signing comes next, in 0.7), and CadCraft Studio is not in an app store yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. There is no iPad or iPhone build yet.
- **Fixed:** with the bars hidden, {{ui:Arrange the toolbar…}} in Settings was grayed out, and from the keyboard it lost its place after the first move.

## Not in this version yet

- Stack-ups run in one direction only. GD&T frames give ± half the zone, a material-condition bonus isn't counted, and RSS assumes ±3σ normal.
- Faint base planes can't be clicked. A typed line angle other than 0°, 90°, 180° or 270° isn't dimensioned. There's no drag handle on Through all or up-to ends, or on values set by an equation.
- A big nest runs for a few seconds and the page waits.
- Magnetics: permanent magnets are in 2-D only. A mesher for curved parts, saturating steel and motor parts aren't built yet.
- Configurations: variant packs, library variants, a configurator page and picking variants in BimCraft aren't built yet. More machining strategies (3-D finishing, rest machining, posts, turning) aren't built yet.

Everything else is in [What is not built yet](topic:not-built-yet).
