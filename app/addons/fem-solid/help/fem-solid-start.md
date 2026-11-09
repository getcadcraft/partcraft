---
title: Solid FEM: stress and displacement of a part
summary: Switch the Solid FEM add-on on, mesh the part, pick fixed faces and loads in the 3D view, solve, and read displacement, von Mises stress, reactions and natural frequencies drawn on the model.
section: start
order: 1
keywords: solid fem, finite element, fea, stress, von mises, displacement, reactions, natural frequency, modal, mesh, tetrahedron, add-on, simulation
---

## What it is

Solid FEM is a linear finite element study of a PartCraft part, with its own panel. It is an add-on: it comes with PartCraft, is free, and is off until you switch it on in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Solid FEM}}. Its tab, {{ui:Solid FEM}}, is then in the right panel. PartCraft's own Simulation workspace is not changed or replaced; Solid FEM is a second, separate way to look at the same part, with the CadCraft finite element library (quadratic tetrahedra).

It is an analysis aid for an engineer, not a design approval. Not a code check; your engineer reviews the results.

## Your first study

1. Build a solid part, for example a bar. Open the {{ui:Solid FEM}} tab.
2. Choose the {{ui:Material}}. Steel, stainless, aluminium, titanium and ABS are typical room-temperature values; pick {{ui:Custom}} and type your own E, Poisson ratio, density and yield stress.
3. Press {{ui:Add fixed faces}}, then click the faces of the part in the 3D view that are held (the face under the pointer lights up; click again to take one off). Press {{ui:Done picking}}. Fixed holds all three directions of every point on those faces.
4. Add a load: {{ui:Add force}} (a total force in newtons spread evenly over the picked faces, with X, Y and Z components), {{ui:Add pressure}} (MPa, positive pushes into the part) or {{ui:Add gravity}} (the part's own weight; it needs a density).
5. Press {{ui:Mesh the part}}. The element size is automatic unless you type one; the line under the buttons says how many elements and unknowns there are. Press {{ui:Solve}}.
6. Read the {{ui:Results}}: the largest displacement and von Mises stress, the support reactions with the applied load beside them (their difference is shown, and a warning appears if it is not tiny), and the {{ui:Warnings}} list.
7. Under {{ui:Plot on the model}} choose von Mises stress or displacement, a deformation scale (automatic draws the largest displacement as 5 % of the part's size) and whether to place the plot on the part or beside it, then press {{ui:Show on the model}}. Blue is the lowest value, red the highest; the legend gives the range. {{ui:Remove the plot}} takes it away.

Every change is one undo step, the settings are saved with the part, and the warnings also go to the Problems panel.

## Natural frequencies

Choose {{ui:Natural frequencies}} under {{ui:Study}}, set the number of modes, and press {{ui:Solve}}. The frequencies are listed in hertz and each mode shape can be drawn on the model. The material needs a density, and the part needs fixed faces.

## Big models

The page solves up to 8,000 elements. A bigger model should be run on a workstation; the community check SU.908c-HAND on the roadmap collects those runs.
