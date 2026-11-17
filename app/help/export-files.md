---
title: Export for printing, STEP and DXF
summary: Export the part as STL or 3MF for 3D printing, as an exact STEP solid for other CAD and CAM programs, and a sketch or a flat face as DXF for laser and waterjet cutting.
section: tasks
order: 130
keywords: export, save as, ifc, bim, property sets, stl, 3mf, 3d print, slicer, step, stp, exact step, b-rep, ap242, ap214, cam, machine shop, milling, dxf, laser, waterjet, cnc, flat pattern, profile, mesh, faceted
---

Exports are copies in other formats. Keep the `.partcraft.json` file too: it is the only file PartCraft can open again and edit.

All exports work on the part on screen, in millimeters. In an assembly, STL, 3MF, STEP and Drawing (PDF) export the whole assembly instead: see [Parts list, exploded views and moving parts](topic:assembly-bom-explode). If there is no solid yet: "There is no solid to export yet."

## For 3D printing: STL or 3MF

1. Optional: for smooth round surfaces, click empty space so nothing is selected and set **Curves** to **Fine (128 per turn)** or **Very fine (256 per turn)** in the right panel. STL and 3MF are always made of triangles.
2. Choose {{ui:Export}}, then {{ui:STL, for 3D printing}} or {{ui:3MF, for 3D printing}}.
3. The file downloads. The status bar says, for example, "Exported Part1.stl (binary, mm, Z up, 1536 triangles)."

Both formats are **Z up**, as printers and slicers expect. PartCraft's own world is Y up, so the export turns the part: what points up in PartCraft (square to the Top plane) points up in the slicer, and a part sketched on the Top plane lies flat on the bed. Set the final orientation in your slicer if needed.

3MF is a newer, smaller format that slicers read with units included. Use STL if a program does not take 3MF.

To check first that the part is closed, fits your printer's bed and stands on a flat face, use {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}}: see [Get a part ready for 3D printing](topic:print-3d).

## For other CAD programs: STEP

Choose {{ui:Export}}, then {{ui:STEP AP242 (exact solid)}}. It writes the part as one exact solid, in millimeters, turned to Z up. Round faces are written as true cylinders, cones, spheres and tori, with true circles for their edges, so the other program can pick a hole as a hole. A body opened from a STEP file keeps that file's flat faces, cylinders, cones, spheres and tori, so they go out exact too. Faces with no such surface (the side of a spline, a modelled thread, a body from an STL, OBJ or 3MF mesh, a STEP file's spline, swept and revolved faces) stay flat facets in the same solid, and the status bar says how many. The status bar says, for example, "Exported Flange.step (AP242, exact solid, mm, Z up): 14 faces on their true surfaces (10 cylindrical, 1 conical, 0 spherical, 0 toroidal), 0 fitted edge curves." It holds the solid only: no history, no sketches, no drawing. If the other program reads only AP214, choose {{ui:STEP AP214 (exact solid)}}: the same solid in that older schema.

What is exact and what is not:

- Flat faces, cylinders (holes, bosses, fillets on straight edges), cones (countersinks, tapers), spheres and tori are exact, and so are their straight, circular and elliptical edges. The **Curves** setting does not change them.
- Where two round faces cross (a hole drilled across a shaft), the edge is a smooth curve fitted to both surfaces to within 0.00001 mm; "fitted edge curves" counts them.
- A closed cavity inside the part is written as a void of the solid. Several separate bodies are written as several solids.
- An assembly is not written as exact STEP yet: export each part.

It was checked by reading the files back in OpenCascade, which reports valid solids with the volumes worked out by hand. It has not been opened yet in every CAD or CAM program; if one refuses a file, {{ui:STEP (faceted, mesh kernel)}} writes the same shape as flat faces (in PartCraft's own axes, Y up), and please tell us through {{ui:Help}} › {{ui:Report a problem}}.

For machining, the Manufacture workspace also writes the exact solid in the setup's own work coordinates: see [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## For BIM programs: IFC with every property

Choose {{ui:Export}}, then {{ui:IFC 4 (with every property)}}. It writes the part as an IFC 4 element for building and plant models, its shape as triangles (Z up, millimetres), with what PartCraft knows about it as property sets:

| Property set | Holds |
|---|---|
| **PartCraft_Part** | Name, material and its density, the active configuration, how many bodies; in an assembly also the part number and description |
| **PartCraft_Parameters** | Every parameter of the part with its value; a formula's expression and a note are in the property's description |
| **PartCraft_TitleBlock** | The drawing's title block fields you filled in (title, drawing number, revision, company, drawn, checked and approved by, date, finish, general tolerance) and the sheet size |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, surface area, mass (with a material) and the overall size |

The material is attached as an IFC material, and the drawing number is the element's tag. In an assembly, each part is written once as a type holding its properties, and each copy is placed where the assembly puts it with its own values in **PartCraft_Instance**: its name, its item number in the bill of materials, and whether it is the grounded part.

## For laser, waterjet or CNC profiles: DXF

Two kinds of DXF, both version R12, which every CAD and CAM program opens:

### A sketch

1. Select the sketch in the history (or have it open).
2. Choose {{ui:Export}}, then {{ui:DXF of the sketch or flat face}}. (The sketch's right panel also has {{ui:Export as DXF}}.)

You get `<part> - <sketch>.dxf` in the sketch's own coordinates: lines, true arcs and circles on layer **PROFILE**, construction geometry on **CONSTRUCTION**, loose points on **POINTS**.

### A flat face of the solid

1. Click a flat face in the view (for example the top of a plate with holes).
2. Choose {{ui:Export face as DXF}} in the right panel, or {{ui:Export}}, then {{ui:DXF of the sketch or flat face}}.

You get `<part> - face.dxf`: the face's outline and every hole in it. A round hole (a whole circle where a cylinder meets the face: a drilled hole, or a hole of an opened STEP file) is written as a true circle with the hole's own center and radius. Every other outline is a closed polyline, and its round edges (fillet corners, slots, arcs) are their facets, so set **Curves** to Fine first if the cutter follows them closely. The status bar says how many outlines, how many of them are true circles, and the face's area.

If neither a sketch nor a flat face is selected: "Open or select a sketch, or pick a flat face, to export DXF."

## A drawing

The PDF drawing has its own walkthrough: [Make a drawing sheet](topic:drawing-pdf).

## Formats not available

glTF, OBJ, IGES and Parasolid are not exported in this build. DWG is written only by the variant pack, as a drawing sheet: see [Make a variant pack from your configurations](topic:variant-pack). See [File formats](topic:file-formats).
