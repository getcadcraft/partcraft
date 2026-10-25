---
title: 3D finishing: parallel and scallop
summary: Finish the whole model's curved surface with a ball, bull-nose or flat end mill, in parallel lines at any angle or in passes a set distance apart so the ridges between them keep the height you ask for. What the paths guarantee, and what they do not.
section: tasks
order: 142
keywords: 3d finishing, finishing, parallel, raster, scallop, constant scallop, cusp, ball nose, bull nose, surface, tolerance, stepover, slope, stock to leave, drop cutter, gouge
---

Two operations in Manufacture cut the **whole model's surface** with the tool kept vertical (three axes). They take no picks: they work on all of the model that can be seen from above. Rough the part first (adaptive or pocket); a finishing pass over uncut stock warns that it would cut deep.

## Parallel

Straight lines across the model at the **angle** you set, **stepover** apart (a fraction of the tool diameter). Each line follows the surface: the tool tip is as high as it must be so that no part of the cutter goes below the model, and the line is cut finer wherever the surface bends. With **Zig-zag** on, the tool stays down between lines where it can do so safely (checked along the move); otherwise it lifts.

- **Tolerance**: how far a straight piece of a line may be from the true tip height (half of it is used as the limit at the middle of each piece). Default 0.01 mm.
- **Only where the surface is at least … and at most … (°)**: finish only shallow areas or only steep ones. Where the surface is outside the range the line is left out and the tool lifts.
- **Stock to leave**: the model offset by that distance (the cutter grown by it: exact for ball and bull-nose tools; a flat tool leaves at least that much).
- **Bottom**: nothing is cut below this z.

## Scallop

Passes that keep a constant distance over the surface from each other, so the ridge (the scallop) left between two neighbouring passes has the **height** you ask for. The distance follows from the height and the ball's radius: s = 2·√(2·R·h − h²), for example about 0.69 mm between passes for a Ø6 ball and a 0.02 mm ridge. A bull-nose tool uses its corner radius. A flat end mill is refused: it has no ridge to size.

The passes start **from the model's edge, going in** or **from its top, going down**. They are contours of the distance over the surface (not of height), so on a slope they are close in plan and on a flat they are wide apart. The distance is measured on a grid over the surface and is good to about 1 %; the ridge height is exact where the surface is flat or gently curved and approximate where it curves quickly. **Climb** keeps the higher side of the surface on the cutter's right.

## How good the paths are

What the tests check, with closed forms or an independent brute-force search of the cutter's footprint:

- The tip height under the tool is exact for a ball, bull-nose and flat tool on faces, edges and corners of the mesh, and never above the true height; for parallel lines the path stays within the tolerance of it, with no gouge deeper than that.
- Path lengths on a tilted plane agree with the closed form; scallop passes on a plane are the asked distance apart and the ridge between them comes out at the height asked.
- The stock simulation shows no gouge after a pass and shows the ridges that remain.

What these paths are not: they are basic finishing passes, not the whole of what a production system offers.

- Not built: waterline (constant z), pencil and corner clean-up, radial and spiral passes, projecting a curve onto the surface, flat-area detection, rest machining, holder and shank collision checks, and any tilting of the tool.
- The tool centre stays over the model: the paths stop at the model's edge instead of running off it, so a vertical wall right at the edge is not finished to its foot.
- Undercuts are not seen (the surface is what the tool meets from above).
- The model is the mesh from the kernel, so the paths follow the mesh (its chord tolerance is about 0.0002 of the part's diagonal), not the exact surface.
- Finishing a large model at a fine tolerance makes a long program with many short moves. Check the output in your machine's own simulator before cutting.
