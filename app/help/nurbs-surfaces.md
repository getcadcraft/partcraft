---
title: Freeform surfaces (NURBS)
summary: Smooth curves and surfaces beside the part — loft, sweep, curve networks, four-edge patches, blends — with G0, G1 and G2 continuity measured on the exact surfaces, zebra and curvature views, and STEP or IGES files. Kept in the part file.
section: tasks
order: 94
keywords: nurbs, trim, trimmed, hole, cut, trim, trimmed, hole, cut, freeform, free-form, surface, surfaces, b-spline, bspline, curve, spline, loft, sweep, rail, network, coons, patch, blend, match, continuity, g0, g1, g2, tangent, curvature, zebra, control points, knots, degree, step, iges, class a, hull, fairing
---

The **Surfaces** workspace makes smooth curves and surfaces of the kind used for product shells, car bodies and boat hulls: NURBS, the same maths other surface modellers use. Everything is measured on the exact surfaces, never on the triangles you see. Sizes are in millimetres, as in the rest of PartCraft.

Choose **Surfaces** in the **Workspace** box. The toolbar has {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} and {{ui:Zebra}}; every command is in the panel on the right. A command says what it still needs: click curves or surfaces in the view (near an edge or an end when it asks for one) or pick them in the list; type points, or click them on the part's faces (off the part they land on the ground plane), then press Enter.

The curves and surfaces are saved in the part file beside the solid. They do not change the part's features: the panel has its own **Undo** and **Redo**, one step per command.

## Curves

- **Curve through points** passes through every point you click. **Curve by control points** follows a cage of points instead.
- **Insert knot**, **Raise degree** and **Lower degree** change how a curve is described without moving it (lowering refuses when the
  curve would move more than the tolerance). **Rebuild curve** gives it a new number of control points and says how far it moved.
- **Match curve** makes one curve's end meet another's with G0 (touching), G1 (same direction) or G2 (same curvature too).
  **Blend curve** adds a new curve between two ends, G1 or G2.

## Surfaces

- **Loft** through two or more curves, **Ruled surface** between two, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** carries a profile along a path without twisting it; **Sweep along two rails** keeps the profile's ends on
  both rails. Sweeps are fitted: the result says how close it stayed to the true sweep.
- **Surface from a curve network** passes through a grid of curves (each one crossing each of the others once).
  **Patch from four edges** fills four curves that meet at their corners.
- **Match surface** makes a surface edge meet a neighbour with G0, G1 or G2; **Blend surface** adds a surface between two edges.
- **Offset surface**, **Extend surface** (the surface carries on as it was going), **Rebuild surface**.

## Checking the quality

The **Shared edges** table lists every edge two surfaces share, with the gap (mm), the angle between them (°) and the curvature jump
(1/mm), and whether that makes it G0, G1 or G2. An edge that is worse than you asked for appears in **Problems** with a **Match** fix.
**Zebra** stripes and **curvature** colours come from the exact surface: stripes that run on unbroken across an edge mean G1; stripes
that also keep their width mean G2.

G0–G2 are measured, at 33 points per edge. **G3 and "class A" quality are not measured** and are not claimed.

## Trim a surface

The **Trim** group cuts a surface without changing its shape: the surface keeps all its control points, and only the part inside the outline is shown, counted and written. **Trim to a rectangle** and **Trim with a circle** work on a share (0 to 1) of the surface in each direction, so they need no picking in the view; **Trim by a curve** takes a closed curve that lies on the surface (it is projected into the surface, and refused in words when it is open or more than the tolerance away). Tick **Cut a hole** to remove the inside of the outline; leave it off to keep only the inside. A surface can have one kept outline and any number of holes; an outline that crosses another is refused. **Remove the trim** shows the whole surface again. The panel's Undo takes a trim back like any other step.

STEP carries the trim as the face's bounds and reads it back. IGES holds the whole patches only: it says so when you save trimmed surfaces.

## Files

Export **STEP** (AP242) or **IGES** with the curves and surfaces exactly as they are (B-spline curves and surfaces, nothing turned into
triangles). Each surface is its own face (with its trim, if it has one): surfaces are not stitched together yet.

## Fair hull lines

**Fair** (in the Surfaces toolbar) measures every curve on its exact shape — inflections (where it changes from bending one way to the other), the largest curvature, curvature jumps at its knots and its roughness — and rebuilds the ones with an inflection or a jump with the fewest control points that stay within the tolerance you give and add no inflection. Draw the stations, waterlines and buttocks as curves, fair them, then **Loft** the hull through the stations and check it with **Zebra**. Unfair curves also appear in **Problems** with a **Fair this curve** fix. A line that is meant to change direction (an S-shaped section) keeps that one inflection. The hull's displacement, centres and righting arms come from the solid part: see the hydrostatics tool.

## Not built yet

Trimming a surface by another surface, solid Booleans on trimmed surfaces, stitching surfaces into a closed body, thickening, fillets between surfaces, filling
holes with more than four sides, projecting curves onto surfaces.
