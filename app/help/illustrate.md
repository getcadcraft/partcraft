---
title: Start a manual in Illustrate
summary: The Illustrate workspace makes manuals from your design: views, exploded line art with balloons and a parts list, step-by-step instructions, animations and an interactive 3D file. A manual is a file of its own.
section: tasks
order: 160
keywords: illustrate, manual, technical illustration, documentation, exploded view, parts list, instructions, partcraft-manual
---

**Illustrate** is the workspace for the documents people need around a design: exploded views with balloons and a parts list, line-art illustrations for manuals, step-by-step instructions, animations and a 3D file a customer can open without CAD. Choose {{ui:Illustrate}} in the {{ui:Workspace}} switcher at the start of the toolbar.

A **manual** is a file of its own (`<name>.partcraft-manual.json`). It keeps a copy of every part's shape, the product tree and the parts' properties, and a link back to where they came from, so you can work on the manual while the design goes on. When the design changes, [Update from the design](topic:illustrate-update) brings the changes in.

## Start one

Click {{ui:New}} in the {{ui:Manual}} group, then:

- {{ui:From the open part}}: the part open in Design.
- {{ui:From the open assembly}}: shown instead when an assembly is open; its parts, their places, part numbers, materials and exploded views come along.
- {{ui:From an assembly file…}}: a saved `.partcraft-asm.json`; PartCraft builds its parts first.
- {{ui:From another file…}}: glTF (.glb, .gltf), OBJ, STL or 3MF. The file's tree and names are kept, and copies of one part (the same shape placed twice) become one part with a quantity. STL and OBJ files do not say their unit, so you are asked. STL files are read Z up; glTF and 3MF say their own.

While a manual is open, Illustrate shows the manual's own copy of the parts; the part or assembly open in Design is hidden until you go back to Design.

## Save and open

{{ui:Save}} in the {{ui:Manual}} group (or {{key:Mod+S}}) saves the manual; {{ui:Open}} opens one. Every change in Illustrate is one step of the manual's own history: {{ui:Undo}} and {{ui:Redo}} act on the manual while Illustrate is open.

## Not built yet

- STEP files do not open in {{ui:From another file…}} yet. Open the STEP in Design instead (it comes in as a solid body: see [Open a STEP file](topic:import-step)) and start the manual {{ui:From the open part}}, or save it as glTF, 3MF, OBJ or STL.
- ModelCraft and BimCraft cannot yet hand a model straight to Illustrate: save it as glTF (.glb) and use {{ui:From another file…}}.

Next: [Views and looks](topic:illustrate-views).
