---
title: Solid FEM: what the numbers mean and where they stop
summary: How the stresses are smoothed, what the warnings say, what has been checked against closed-form answers and against PartCraft's own solver, and what the add-on does not do.
section: trouble
order: 2
keywords: solid fem, limits, accuracy, singular, stress concentration, mesh refinement, yield, linear, warnings, checked
---

## What it solves

Linear elastic, isotropic material, small displacements, static or natural frequencies. It does not do contact, yielding, large deformation, buckling, heat or flow. For yielding and contact use the Advanced simulation add-on.

## Reading the stress

The stress is computed in each element and the stress tensors are averaged at the nodes they share; the plot and the first number use that average. The second number, unsmoothed, is the largest value found at an element node before averaging. When they differ a lot, the peak is sharp or the mesh is coarse there.

Stress at a fixed face, at a point load and at a sharp inside corner grows as the mesh is refined, because the model has a singularity there. Refine the mesh (a smaller element size) and compare; do not read a single peak as the stress in the part. A pressure or force spread over a face is smoother than a fixed edge.

## The warnings

- Nothing holds the part, or it can still move or turn: it will not solve; add fixed faces.
- A coarse mesh (under 200 elements), stress above the yield stress, a displacement over 5 % of the part's size, or reactions that do not balance the loads: the result is shown with a warning that says what to do.
- The list also goes to the Problems panel.

## What it has been checked against

Closed-form answers, with the sources in the test file tools/fem/test-solid.mjs: a cantilever against Timoshenko beam theory, self weight, a uniaxial patch test on a distorted mesh, Lame's thick-walled cylinder, mesh refinement, and the first bending frequency against Euler-Bernoulli. It was also run on the same mesh as PartCraft's own Simulation study and the two answers compared; the difference is written in the session log (docs/0.9-sessions/fem-09.md). It has not been compared with any other program, and no claim is made that it gives the same numbers as one.

Not a code check; your engineer reviews the results.
