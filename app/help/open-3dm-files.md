---
title: Open a .3dm model as a solid body
summary: Bring the meshes, polysurfaces and blocks of a .3dm file into PartCraft as one solid body you can cut, add to and sketch on; where the triangles come from, and what is left out.
section: tasks
order: 89
keywords: 3dm, nurbs, polysurface, brep, surfaces, render mesh, extrusion, blocks, import, mesh to solid, units, imported body
---

PartCraft opens `.3dm` files as **solid bodies**, the same way it opens an [STL, OBJ or 3MF mesh](topic:open-meshes). The body works like any other solid: cut it, add to it, drill it, pattern it, and sketch on its flat faces. It has no history of its own.

## Open the file

1. Choose {{ui:Open}} or press {{key:Mod+O}}, and pick the `.3dm` file. Or drop it on the 3D view.
2. PartCraft reads it and shows what it found: how many objects with faces come in, how many faces came from the meshes saved in the file and how many PartCraft tessellated, each repair, and whether the result **closes**.
3. Check **Units in the file** (the file says its own; a unit PartCraft does not list, such as yards, is turned into millimeters) and **Up in the file**.
4. Choose {{ui:Open as a body}}, or **Use it to** and {{ui:Add to this part}} when the part already has features.

## Where the triangles come from

PartCraft builds bodies from triangles in this version, so every surface in the file becomes small flat faces. For each face of a polysurface (and each extrusion) it takes the **render mesh saved in the file** when there is one, else **tessellates it itself** (planes, NURBS surfaces, surfaces of revolution, extruded curves and extrusions, trimmed by their edges). Faces of one polysurface share their edge points, so a closed polysurface comes in closed. A face on a kind of surface PartCraft does not read yet is left out, and the dialog says how many and of what kind; the result then usually does not close.

## Everything in the file becomes one body

Every visible mesh, polysurface and extrusion, and every placement of a block, goes into **one** body where the file puts it. Objects that are hidden, or on a layer that is off, are left out. When the file holds several separate solids, the body has several pieces: open each one from its own file if you want them as separate bodies.

## What is left out (and said)

Curves, points, point clouds, text, dimensions, hatches and lights are left out: a body takes only faces. So are SubD objects (turn them into meshes or polysurfaces in the program that made the file first), blocks linked from other files, and colors, layers and names (PartCraft bodies have none of their own here).

## When it does not close

Open polysurfaces and surfaces (a single trimmed surface, a shape with a missing face) have no inside, so they cannot be a solid. The dialog says how many openings are left and adds nothing. Join or cap the shape in the program that made it, save, and open it again. See [When a mesh does not close](topic:open-meshes#when-a-mesh-does-not-close).
