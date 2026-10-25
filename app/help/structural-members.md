---
title: Frames from steel sections
summary: Put steel sections along the lines of one or more sketches to make a welded frame: mitred or butt corners, members cut to fit where they meet, end caps, gussets and a cut list with lengths and end angles.
section: tasks
order: 93
keywords: weldment, structural member, frame, steel frame, tube, square tube, hss, rhs, shs, pipe, chs, wide flange, i-beam, w beam, ipe, hea, heb, channel, upn, angle, miter, mitre, butt joint, cope, end cap, gusset, cut list
---

A **Structural member** puts a steel section along every line of the sketches you choose. Draw the frame as lines (each line is one member), then choose the section: the members are built, their corners trimmed and extended, and a cut list says how long to cut each piece and at what angle.

## Make a frame

1. Draw the frame as lines in a sketch, for example a rectangle on the top plane. Lines marked as construction are left out.
2. With the sketch selected, choose {{ui:More}} › {{ui:Structural member}}. Every line of the sketch gets a member.
3. In the panel, pick the **Family** and **Size** of the section. The families are the AISC tables (W, S, C, L, HSS tubes, Pipe) and EN 10365 (IPE, HEA, HEB, UPN).

### A frame in 3D

Lines from several sketches make one frame: a top rectangle sketched on a plane above, and the legs sketched on planes that stand upright, meet at their ends in 3D. Under **Along the lines of** in the panel, tick each sketch whose lines the members follow. Ends that meet within a micrometre are joined.

## Set the section on its line

- **Rotate (°)** turns the section about its line. A beam stands with its depth upright (on a vertical member, its depth points toward the front).
- **On the line** chooses which point of the section sits on the line: the centre, or a corner or the middle of a side of the section's outline. "Bottom middle" puts a frame on top of the sketch plane instead of through it.

## Corners and joints

| Where members meet | What happens |
|---|---|
| Two members end to end, **Corners: Mitred** | Both are cut on the plane halfway between them, like a picture frame |
| Two members end to end, **Corners: Butt** | The first member runs on to the far face of the second; the second is cut square at the first's near face |
| A member ends on the middle of another (a T) | It is cut to fit against the other member's outside |
| Three or more end at one point | The first runs on square past the others; the others are cut to fit against it |

The first member is the one whose line comes first: lines keep the order they were drawn in, sketch by sketch in the order the sketches were ticked.

## End caps and gussets

- **End caps** close every free end with a plate of the section's outline, the thickness you set, outside the end.
- **Gussets** put a triangular plate in every corner where two members meet at an angle: **Gusset size** along each member from the corner, **Gusset thickness** across, centred on the corner's plane.

## The cut list

The panel lists every piece, with identical pieces grouped: the section, the length (long point to long point, as you would mark it for the saw), how each end is cut (square, an angle from square, or cut to fit), and which members they are. End caps and gussets are listed with their sizes. {{ui:Save the cut list (CSV)}} saves it for a spreadsheet.

A member cut to fit against a round-cornered tube reaches a little into that tube's corner radius, so its long-point length is a few millimetres more than the gap between the faces.

## Limits

- Members follow straight lines only; arcs and splines in the sketch are left out.
- The joints are cut, not welded: no weld beads are drawn, and the frame is one solid.
- The sections are drawn from the table's dimensions: W shapes with their root fillet, S and channels with parallel flanges, tubes with corner radii; holes, end preparations and weld gaps are not made for you.
- Structural members are built by the mesh kernel. With the exact kernel on (developers only), they say so and are not built.
