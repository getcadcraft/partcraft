---
title: Magnetics: reading and saving the results
summary: What the field picture, the flux lines, the forces and the hand comparison mean, how the result is shown on the part, and the files you can save.
section: tasks
order: 2
keywords: flux lines, flux density, maxwell stress, force, torque, vtk, paraview, csv, svg, display bodies, results, export
---

## The field and the flux lines

The picture colors each triangle by |B|, from dark blue (0) to red. Red means the top of the scale or more: the top is the |B| that 99 percent of the triangles stay under, so one sharp iron corner does not paint the rest of the model dark. The largest |B| is given in words beside it. The white lines are flux lines: in a flat model they are the lines of equal vector potential A, and between two neighboring lines the same flux flows. The results say how much, for the depth you gave.

## Forces and torque

The force on a body is the Maxwell stress added up round a box in the air around it. The box sits in the middle of the nearest air gap. The torque is about the body's middle. The result is per metre of depth times the depth you gave.

The force depends on the mesh near the body, most of all through a thin gap. Run the study with the Normal mesh and again with Fine. If the two forces differ a lot, the force is not settled. The study warns when a force box runs within three triangles of its body.

## On the part

{{ui:Show on the part}} puts the result in the 3D view, in the study's plane: the bodies as see-through blocks out to the depth, the field and the flux lines near them (half the model's size round them) on their far face, and a green arrow for each force. Tick {{ui:Air box}} to also draw the outline of the whole air box. Tick what you want shown. The result is placed in one undo step, saved with the part and taken off with {{ui:Take off the part}} or Undo. These are display bodies only: they have no mass and are not in STL or STEP. When a fine mesh would need more triangles than the viewport allows, the bodies are left out and the message says so.

A sketch on a face or a reference plane is shown on the front plane, at the sketch's own coordinates. The panel says when this happens.

## Files

- **Summary (CSV)**: the largest |B|, each body's area, mean and largest |B|, the forces and torques, and the hand comparison.
- **Field per triangle (CSV)**: position, body, Bx, By and |B| of every triangle.
- **Field (VTK)**: the mesh with B per triangle and A per point, for ParaView or VisIt.
- **Picture (SVG)**: the field, the flux lines and the outlines.
- **The study (JSON)**: what you set up, to keep or share.

The summary and the VTK file are also in File › Export once the study is solved.
