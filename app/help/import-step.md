---
title: Open a STEP file and build on it
summary: Bring a supplier's or another CAD program's STEP model into PartCraft as a solid body, as a new part or added to the current one, set which way is up, and add sketches and features to it.
section: tasks
order: 87
keywords: step, stp, import, open step, ap203, ap214, ap242, supplier model, dumb solid, imported solid, up axis, z up, y up, triangles, faceted, assembly step
---

PartCraft opens STEP files (`.step` or `.stp`, AP203, AP214 and AP242) as **solid bodies** you can sketch on, cut, drill and combine with your own features. The body has no history of its own: you cannot change the dimensions it was made with, only add to it or cut from it.

This version builds every part with the mesh kernel, so a STEP file is **read as triangles**: flat faces stay flat, and curved faces (cylinders, cones, spheres, tori, B-spline surfaces) become many small flat ones. Its volume comes within a fraction of a percent of the exact one. Keeping curved faces exactly needs an exact kernel, which is not in this version.

## Open a STEP file

1. Choose {{ui:Open}} or press {{key:Mod+O}}, and pick the `.step` or `.stp` file. Or drop it on the 3D view.
2. PartCraft reads the file and shows what it found, for example: "AP214 file: 1 solid, 10 faces, read as triangles." Below are the triangle count, anything it had to leave out or join, and whether the result closes.
3. Check **Up in the file**. A STEP file says its own unit (millimetres, inches, metres…); PartCraft converts it to millimetres, so **Units in the file** shows Millimetres, "the file says so". **Size here** shows how big it will be.
4. Choose {{ui:Open as a body}} for an empty part, or {{ui:Add to this part}} / {{ui:New part}} when the part already has features. Adding asks what to **Use it to** do: add, cut or keep only the overlap.

An **Imported1** feature appears in the history, and the status bar says, for example, "plate.step is a solid body: 57995.937 mm³, 6 flat faces to sketch on."

## An assembly STEP

An assembly comes in as **one body** with every part where the file places it ("3 parts placed in the file come in where they stand"). A part used twice comes in twice. The names of the parts and the assembly tree are not kept.

## Set which way is up

Most CAD programs use Z up; PartCraft uses Y up. By default PartCraft turns the file so its Z points up here. If the part arrives lying on its side, select **Imported1** and set **Up in the file** to **Y up**. **Units in the file** and **Use it to** can be changed there too; each change is one undo step.

## Build on it

- Click a flat face of the body and choose {{ui:Sketch on this face}}. The flat faces of the STEP model keep their place when the body is rebuilt.
- Add cuts, holes, bosses, patterns and mirrors as on any part.
- Check its size in the **Part** box: volume, surface area, size.

Fillets, chamfers and shells need the exact kernel, as on any part in this version ([The mesh kernel](topic:solid-kernels)).

## Where it is kept

The triangles are stored **inside** the `.partcraft.json` file, so the part file is self-contained: you do not need the STEP file again.

## Messages

| Message | What it means |
|---|---|
| '"part.stp" is not a STEP file (it does not start with ISO-10303-21).' | The file is not plain STEP text. Ask the sender for an AP203, AP214 or AP242 STEP file |
| "The STEP file could not be read: its data section is missing or damaged." | The file is cut off or damaged. Copy it again |
| "The STEP file holds no solid or surface body: there is nothing to bring in." | The file holds only drawings, points or data. Ask for a solid |
| "That STEP file is too big (over 60 MB) to import here." and the reader's other limits (entries, faces, triangles) | Simplify the model at the source, or send parts one by one |
| "… damaged lines in the file were skipped." | Some lines could not be read; the rest came in. Check the body |
| "… faces could not be made into triangles and were left out." | Those faces leave holes, which PartCraft tries to fill; if the body does not close, it is not added |
| "… faces of a kind that is not read (…) were skipped." | A rare surface type. Ask for the model with plain or B-spline surfaces |
| "It does not close …" | The faces do not make a closed solid (a surface model, or faces left out). PartCraft shows the openings and adds nothing |

## Limits

- Curved faces are flat facets, as in every part this version builds. Exported STEP from such a part is faceted too.
- Colors, names of bodies, assembly structure and PMI (tolerances in the file) are not read.
- Besides STEP, PartCraft opens STL, OBJ and 3MF meshes ([Open an STL, OBJ or 3MF](topic:open-meshes)) and `.3dm` files ([Open a .3dm model](topic:open-3dm-files)) as solid bodies. IGES and other programs' native files are not supported.
- A part with a STEP solid imported by a build that had the exact kernel keeps the STEP text; this version skips that feature ("not built"). Open the STEP file again to bring it in as triangles.
