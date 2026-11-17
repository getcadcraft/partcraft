---
title: Solid FEM: a stress check of one part
summary: Switch on the Solid FEM add-on, mesh a part, pick fixed faces and a load in the 3D view, solve, and read displacement and von Mises stress on the model.
section: tasks
order: 132
keywords: solid fem, finite element, fea, stress, von mises, displacement, fixed face, load, pressure, gravity, natural frequency, mode shape, mesh, add-on
---

## What you'll do

Check one solid part under a load: where it moves and where the stress is highest. The study is linear and elastic, so it is a checking aid; your engineer reviews the results.

## Steps

1. Choose {{ui:Settings}} › {{ui:Add-ons}} and switch on {{ui:Solid FEM}} (it is off until you do). Open the {{ui:Solid FEM}} tab in the right panel.
2. Under {{ui:Material}} choose one, or {{ui:Custom}} and type Poisson ratio, density and yield stress.
3. Press {{ui:Add fixed faces}}, click the faces that are held in the 3D view, then press {{ui:Done picking}}.
4. Add a load with {{ui:Add force}}, {{ui:Add pressure}} or {{ui:Add gravity}} and pick its faces the same way.
5. Press {{ui:Mesh the part}}, then {{ui:Solve}}. Choose {{ui:Natural frequencies}} under {{ui:Study}} first if you want frequencies.
6. Read {{ui:Results}} and {{ui:Warnings}}, then press {{ui:Show on the model}} to draw von Mises stress, displacement or a mode shape; {{ui:Remove the plot}} takes it away.

## Notes

- The page solves up to a fixed number of elements; the status line says when your element size is too fine.
- Stress at fixed faces, load points and sharp corners grows as the mesh is refined. Refine and compare before relying on a peak.
- Every change is one undo step, and the settings are saved in the part file.
- For yielding and contact studies see [Check stress and deflection](topic:simulation).
