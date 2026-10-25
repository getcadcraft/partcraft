---
title: What's new in 0.7
summary: PartCraft 0.7 adds the Illustrate workspace for manuals, STEP, STL, OBJ, 3MF and .3dm files opened as solid bodies, welded frames from steel sections, closed-loop linkages, parts with hundreds of features, a variant pack from your configurations, posts you can edit with 3D finishing and a tool library, offcuts kept between nests, laser programs, USD export and tools for your own AI assistant.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, illustrate, manual, technical illustration, exploded view, balloons, parts list, instructions, interactive 3d, animation, step, stp, stl, obj, 3mf, 3dm, mesh to solid, open mesh, weldment, structural member, frame, cut list, closed loop, linkage, four-bar, large part, many features, variant pack, variants, configurator, post processor, edit post, cpost, parallel, scallop, 3d finishing, tool library, stock colours, offcut, remnant, laser, usd, usdz, assistant, mcp, compact, units, portuguese
---

This is what changed in PartCraft 0.7, compared with 0.6. Parts come in from more files, and a new workspace makes manuals from your design.

## New

### Manuals from your design

- **The Illustrate workspace.** Choose {{ui:Illustrate}} in the {{ui:Workspace}} switcher, then {{ui:New}} in the {{ui:Manual}} group: a manual starts from the open part or assembly, a saved assembly, or a glTF, OBJ, STL or 3MF file (its tree and names kept; copies of one part become one part with a quantity). A manual is a file of its own (`.partcraft-manual.json`) with a copy of the parts, so the documentation goes on while the design does. See [Start a manual in Illustrate](topic:illustrate).
- **Views and looks.** Hide, ghost, isolate or recolour parts, play an exploded view, cut a section or a box out of the model, add a magnifier, and save it all as a view. See [Views, looks, sections and the magnifier](topic:illustrate-views).
- **Balloons and a parts list.** One click balloons every part a view shows; numbers stay with their parts and are never reused. The list can sit in the view and saves as CSV. See [The parts list and balloons](topic:illustrate-parts-list).
- **Annotations that stay attached:** labels and callouts that fill in a part's number, name, material or quantity, arrows, distances, angles and radii measured from the parts, shapes and pictures. They move with their part when it explodes. See [Annotations that stay attached](topic:illustrate-annotations).
- **Line art, instructions and a 3D file.** Export any view as vector line art (SVG or PDF) with hidden lines and hatched cuts, or as a PNG; turn the views into step-by-step instructions as PDF or one HTML page; or save one HTML file that opens offline in any browser with the views, the parts list and the animation. See [Technical illustrations](topic:illustrate-line-art), [Instructions documents](topic:illustrate-instructions) and [The interactive 3D file](topic:illustrate-interactive).
- **Animation and updates.** Key parts and the camera, record an exploded view step by step, and save a video. When the design changes, {{ui:Update from the design…}} shows what moved, changed, arrived or left before anything changes, and keeps views, annotations, balloons and keys with their parts. See [Animate a manual](topic:illustrate-animation) and [Update a manual from the design](topic:illustrate-update).

### Opening other files

- **STEP files open as solid bodies.** {{ui:Open}} reads AP203, AP214 and AP242 STEP without the exact kernel. Flat faces stay flat, curved faces become many small flat ones, and an assembly comes in as one body with every part where the file places it. Sketch on its flat faces, cut it and add to it. See [Open a STEP file and build on it](topic:import-step).
- **STL, OBJ and 3MF meshes become solids.** Open or drop the file: PartCraft joins doubled corners, closes small gaps, fills holes and turns triangles that face the wrong way, then says what it did and whether the mesh now closes. Choose the units and which way is up, and the body arrives as **Imported1**, with its flat areas as faces to sketch on. A mesh that cannot close says how many openings are left and adds nothing. See [Open an STL, OBJ or 3MF as a solid body](topic:open-meshes).
- **.3dm files open as one body.** The meshes, polysurfaces, extrusions and block placements of a `.3dm` file come in as one solid body, from the meshes saved in the file or tessellated by PartCraft, through the same repair and "closes?" check as a mesh. Curves, text, SubD objects, layers and colours are left out, and the dialog says so. See [Open a .3dm model as a solid body](topic:open-3dm-files).

### Parts and assemblies

- **Frames from steel sections.** Draw a frame as lines, in one sketch or in several for a frame in 3D, then {{ui:More}} › {{ui:Structural member}}: a section from the AISC or EN 10365 tables runs along every line. Corners are mitred or butted, members that meet in a T or three at a corner are cut to fit, free ends can get caps and corners gussets, and a cut list gives each piece's length and end angles ({{ui:Save the cut list (CSV)}}). See [Frames from steel sections](topic:structural-members).
- **Closed loops in assemblies.** Parts joined in a ring (a four-bar linkage, a crank and slider, a braced frame) now close: drag or type a value on the loop and the rest follows, and the motion check sweeps the loop the same way. A joint that can still move is blue, a loop that cannot close turns red and says how far off it is. See [Closed loops: linkages](topic:build-assembly#closed-loops-linkages).
- **Parts with hundreds of features.** PartCraft keeps the solid it had part-way through the history, so a change late in the history rebuilds only the features after it, and cuts and bosses that don't touch are applied together. It is tested on a part with 750 features. The Parameters window keeps up with hundreds of equations, and undo keeps 200 steps unless they would use a lot of memory (never fewer than 20). See [Parts with hundreds of features](topic:edit-history#parts-with-hundreds-of-features).
- **A variant pack from your configurations.** {{ui:Variant pack…}} under **Configurations** on the {{ui:Parameters}} tab builds every configuration, or the ones you tick, in one zip: a STEP, an IFC, a DWG drawing sheet and a preview each, a table of their parameters (CSV and JSON), and the part as one library item with its variants. A configuration that cannot be built is listed and left out. The command line does the same with `partcraft variants`. See [Make a variant pack from your configurations](topic:variant-pack).

### Making

- **Post processors you can edit.** The Fanuc-style, GRBL and LinuxCNC posts in Manufacture are now short text files in PartCraft's own post format, and still write exactly what they wrote before. {{ui:Edit post…}} opens your own copy of one ({{ui:New post…}} and {{ui:Import post file…}} too), says which line is wrong, and shows the G-code it writes as you type. Posts are saved in the part and as `.cpost` files. See [Post processors you can edit](topic:post-processors).
- **3D finishing: Parallel and Scallop.** Finish the whole model's surface with a ball, bull-nose or flat end mill, in parallel lines at any angle, or in passes a set distance apart so the ridge between them has the height you ask for (not with a flat end mill). See [3D finishing: parallel and scallop](topic:finish-3d).
- **A tool library.** Save tools in this browser for every part, and export or import them as a JSON file to move them to another computer. See [The tool library](topic:tool-library).
- **The stock against the model in colour.** With **Show the simulated stock** on, the stock is green on the model, red where the tool cut into it, and yellow to grey where stock is left, with a key in the panel. See [Simulate](topic:manufacture#simulate).
- **Offcuts kept between nests.** After a nest, what is left of each plate can become a numbered remnant with its material and thickness. The next nest of the same material and thickness uses the remnants first, then full plates; the stock list is saved in the file and as CSV, and the DXF marks each remnant. See [Keep and reuse offcuts](topic:nest-offcuts).
- **Laser programs.** {{ui:Export}} › {{ui:Laser program…}} takes outlines from a DXF file and sets what each layer does (cut, score, engrave, fill), previews the head's moves and saves GRBL laser-mode G-code. In Chrome and Edge it can also frame the job with the laser off, then send it over USB. The settings are saved in the file. See [Send a drawing to a laser](topic:laser-cutting).
- **USD export.** {{ui:Export}} › {{ui:USD package (.usdz)}} writes the part with its material, volume and mass, or an assembly with each part once and every copy placed, in metres with Z up. See [Export a part or an assembly as USD](topic:usd).

### Assistants

- **Tools for your own AI assistant.** Turned on in {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}}, an assistant connected through CadCraft Studio can read the features, parameters and mass properties, set a parameter and rebuild (one undo step), run a CraftScript, Lua or Python script the way the Script workspace does, export STL, 3MF, faceted STEP or USD, save, and export a manual as PDF, SVG, instructions or the interactive 3D file. The file server and the `cadcraft` command line do the same on saved parts and manuals. PartCraft contains no AI. See [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

## Changed

- **A part with a body from a file is saved as part version 5.** A part with a STEP, STL, OBJ, 3MF or `.3dm` body keeps the repaired triangles inside the `.partcraft.json` file, so you don't need the original file again. PartCraft 0.6 refuses version 5 with its "newer version" message instead of opening it wrong. Other parts are saved as before. See [The PartCraft files](topic:file-formats#the-partcraft-files).
- Posts you write are saved in the part. An older PartCraft that opens such a part drops the posts when it saves it again.

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. PartCraft's own boxes don't follow the lists or the star yet: parts still show in millimetres. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English, with one in Spanish.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- Bodies from STEP, mesh and `.3dm` files have no history and their curved faces are flat facets. Colours, part names and the assembly tree are not read from STEP; curves, SubD objects, text, layers and colours are not read from `.3dm`. The `.3dm` reader is checked on files written by the format's own toolkit, not yet on files saved by the modelling program itself.
- Illustrate doesn't open STEP files in {{ui:From another file…}} yet (open the STEP in Design and start {{ui:From the open part}}), ModelCraft and BimCraft can't hand a model straight to it, and pictures at the path tracer's quality aren't offered. Video export and the interactive file have not been checked on real phones and tablets yet.
- Laser programs take outlines from DXF files only: the flat patterns of sheet metal parts need the exact kernel. CadCraft Studio has no Web Serial yet, so there save the G-code and send it with your laser's own program. The laser G-code and the three built-in posts have not been proven on a real machine: check every program in your control's own simulator first.
- 3D finishing is Parallel and Scallop only: no 3D roughing, waterline, pencil or rest machining, no turning. The tool library is kept in this browser, not synced.
- The configurator page, where visitors choose a variant on the site and download it, is open to staff only until the site's switch is turned on. Ports (connection points) are not set from PartCraft.
- Structural members follow straight lines only and are one solid with no weld beads.
- PartCraft's ribbon menu styles still draw every button at full size.
- Magnetics: permanent magnets are in 2-D only; motors, saturating steel and a mesher for curved parts aren't built yet.

Everything else is in [What is not built yet](topic:not-built-yet).
