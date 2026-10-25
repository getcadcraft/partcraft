---
title: File formats
summary: Every file PartCraft reads and writes, with extensions, units, axes and what each one keeps or loses.
section: reference
order: 40
keywords: formats, file types, extensions, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, units, z up
---

| Format | Extension | Open | Save or export | Units | Up axis | Keeps |
|---|---|---|---|---|---|---|
| PartCraft part | `.partcraft.json` | Yes | {{ui:Save}} | mm | Y | The full history: sketches, relations, dimensions, features, suppression, rollback, curves setting, drawing settings and GD&T, STEP text imported in an earlier build |
| PartCraft assembly | `.partcraft-asm.json` | Yes | {{ui:Save}} in an assembly | mm | Y | Every part (embedded), the copies and their positions, the joints |
| STL (binary or text) | `.stl` | Yes, as a solid body: [Open an STL, OBJ or 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (asked when opened) | Z | The solid's triangles only |
| 3MF | `.3mf` | Yes, as a solid body | {{ui:3MF, for 3D printing}} | mm (stated in the file) | Z | The solid as one mesh object |
| OBJ | `.obj` | Yes, as a solid body (faces only) | No | asked when opened | Z or Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Yes, as a solid body read as triangles (curved faces as facets): [Open a STEP file](topic:import-step) | | mm (from the file's unit) | Z, or Y if you say so | The solids and surface bodies, assemblies with every part in place; no colors, names, assembly tree or PMI |
| `.3dm` | `.3dm` | Yes, as one solid body from its meshes and surfaces (saved render meshes, else tessellated): [Open a .3dm model](topic:open-3dm-files) | | From the file's unit | Z, or Y if you say so | Meshes, polysurfaces, extrusions and block placements as one body; no curves, colors, layers or names |
| STEP AP242, exact | `.step` | | {{ui:STEP AP242 (exact solid)}} | mm | Z | Not built yet in this version (needs an exact kernel) |
| STEP AP214, exact | `.step` | | {{ui:STEP AP214 (exact solid)}} | mm | Z | Not built yet in this version (needs an exact kernel) |
| STEP AP242, faceted | `.step` | | {{ui:STEP (faceted, mesh kernel)}} | mm | Y | A closed solid of flat faces: round surfaces as facets. The STEP to use in this version |
| STEP AP214, faceted | `.step` | | {{ui:STEP AP214 (faceted, mesh kernel)}} | mm | Y | The same solid in the older AP214 schema, for programs that read only that |
| USD package | `.usdz` | No | {{ui:USD package (.usdz)}} | m | Z | The solid with its material, volume and mass; an assembly with each part once and every copy placed: [Export as USD](topic:usd) |
| IFC 4 | `.ifc` | No | {{ui:IFC 4 (with every property)}} | mm | Z | The shape as triangles, the material, every parameter, the title block, quantities; an assembly's parts as types and its copies placed |
| DXF R12, sketch | `.dxf` | No | {{ui:DXF of the sketch or flat face}} with a sketch selected | mm | Sketch's own x, y | Lines, true arcs and circles, points; layers PROFILE, CONSTRUCTION, POINTS |
| DXF R12, face | `.dxf` | No | {{ui:DXF of the sketch or flat face}} with a flat face picked | mm | Face's own x, y | The face's outlines as closed polylines (round edges as facets) |
| PDF drawing | `.pdf` | No | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm on an A3 sheet | | Front, top, right, isometric, section and detail views drawn from facets, hidden lines, overall sizes, GD&T symbols, title block |

## The PartCraft files

Both are plain text (JSON). The solid is never stored: PartCraft rebuilds it from the history, so files stay small and always match the history.

- Each file has a version number. This build writes each part file with the lowest version that holds what it uses (2 to 5; a body made from a mesh needs 5) and opens every older version. A file from a newer PartCraft is refused with a message naming both versions.
- Every value is checked when a file opens. Names lose control characters; numbers out of range, references to missing features and unknown feature kinds are refused with a plain reason.
- Do not edit these files by hand unless you know the format. A file that does not pass the checks will not open.
- A part with a large STEP solid imported in an earlier build can pass 50 MB, the most PartCraft opens as a part file (see [Troubleshooting](topic:troubleshooting#file-problems)).

## Facets and exactness

STL, 3MF and the face DXF are always made of facets, at the **Curves** setting. The sketch DXF has true arcs and circles, because it comes straight from the sketch. This version builds every part with the mesh kernel, so the STEP export and the drawing's views (sections included) are faceted too. Exact STEP and true curves need an exact kernel: not built yet in this version.

## Not supported in this build

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (in or out); OBJ export | Not built |
| DWG | Written only by [the variant pack](topic:variant-pack), as the drawing sheet of each configuration. Not read, and no other export. Export DXF; every CAD program opens R12 DXF |
| Assembly STEP and the drawing of an assembly | Not built yet (needs an exact kernel). STL, 3MF and the bill of materials export from an assembly |
| Other programs' native part and assembly files (except `.3dm`, which opens as one body) | Not built |

See [What is not built yet](topic:not-built-yet).
