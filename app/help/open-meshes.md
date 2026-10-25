---
title: Open an STL, OBJ or 3MF as a solid body
summary: Turn a mesh from a scanner, a 3D-printing site or another program into a solid you can cut, add to and sketch on; what PartCraft repairs on the way, and what it cannot.
section: tasks
order: 88
keywords: stl, obj, 3mf, mesh, mesh to solid, convert mesh, scan, watertight, repair, holes, gaps, units, up axis, imported body, flat faces
---

PartCraft opens STL, OBJ and 3MF meshes as **solid bodies**. The body works like any other solid: cut it, add to it, drill it, pattern it, use it in an assembly or for machining, and sketch on its flat faces. It has no history of its own: a mesh is only triangles, so its sizes cannot be changed, only added to or cut from.

## Open a mesh

1. Choose {{ui:Open}} or press {{key:Mod+O}}, and pick the `.stl`, `.obj` or `.3mf` file. Or drop it on the 3D view.
2. PartCraft reads it, repairs what it safely can and shows what it found: how many triangles and points, each repair, and whether the mesh now **closes**.
3. Check **Units in the file** and **Up in the file**. STL and OBJ do not say their units, so millimetres is the guess; a 3MF file says its own. The **Size here** line shows the body's size with your choice, so a part that comes in 25.4 times too small is easy to spot (it was in inches).
4. If the part on screen is empty, choose {{ui:Open as a body}}. If it already has features, choose **Use it to** (add to the part, cut from it, or keep only the overlap), then {{ui:Add to this part}}, or {{ui:New part}} to start again with the mesh.

An **Imported1** feature appears in the history. The status bar says, for example, "bracket.stl is a solid body: 15200.512 mm³, 14 flat faces to sketch on."

## What PartCraft repairs

| Repair | What it means |
|---|---|
| Doubled corners joined | An STL repeats every corner for each of its triangles; they are joined into one point |
| Triangles with no area removed | Slivers whose corners lie on one line |
| Doubled triangles removed | A triangle written twice is kept once; two facing opposite ways (an inner wall) are both removed |
| Small gaps closed | Edges that almost meet (within a thousandth of the part's size) are joined |
| Holes filled | An opening whose border lies flat is filled whatever its size; a warped one only when it is small |
| Triangles turned to face outward | Triangles facing the wrong way are turned to agree with their neighbours, and the whole surface to face out |

## When a mesh does not close

A solid needs a surface with no openings. When PartCraft cannot close one, the dialog says how many openings and open edges are left, and there is no body to add. Close the openings in the program that made the mesh, or export it again as a closed (watertight) mesh, and open it again.

PartCraft leaves an opening alone when filling it could guess wrong: a large warped hole, or two openings in the same plane (a ring-shaped face that is missing, where filling each border would cover the hole in the middle). An edge shared by more than two triangles is also reported: such a surface does not have one clear inside.

## Sketch on its flat faces

Flat areas made of many triangles are merged into one **flat face** each, so a sketch can sit on them: click the face and choose {{ui:Sketch on this face}}. A face that is cut or added to later stays a face. Round areas (a hole, a fillet) stay triangles: they are not faces you can pick, and the view draws their outline from the angle between triangles.

## Change it later

Select **Imported1** to see the file it came from, how many triangles it has and what was repaired. **Units in the file**, **Up in the file** and **Use it to** can be changed there; each change is one undo step.

## Where it is kept

The repaired mesh is stored **inside** the `.partcraft.json` file, so you do not need the mesh file again. A part file with a mesh body is version 5: an older PartCraft refuses it by its version. A 200,000-triangle mesh adds about 1.2 MB.

## Limits

- At most 3 million triangles and 200 MB in one file.
- A body made from a mesh is built by the mesh kernel. With the exact kernel on (developers only), it says so and is not built.
- OBJ materials, texture coordinates and free-form curves are left out; 3MF colours, materials and support objects are left out (the dialog says how many objects were skipped).
- The body is as fine as the mesh: a coarse STL gives coarse round faces. Holes you drill into it are as round as your own features.
