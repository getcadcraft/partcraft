---
title: Advanced simulation: limits and troubleshooting
summary: What the nonlinear and contact studies do not solve, and what to do when a study stops or the pieces sink into each other.
section: trouble
order: 4
keywords: limits, not converged, penetration, friction, large deformation, slow, mesh
---

## What it does not solve

- Large rotations and large strains: the studies are small-strain and small-displacement.
- Friction, preload and large sliding: contact is frictionless or bonded only.
- Other plasticity models: only the bilinear material (yield stress and one slope after it), isotropic hardening, no unloading history.
- Contact between parts of an assembly: the pieces must be in one part.

## A step did not converge

The result says at what share of the load it stopped, and a Problem says the same. Common causes: the load is above what the part can carry with a perfectly plastic material (slope 0), too few load steps, or a piece that is not held. Use more load steps, a slope after yield above 0, or check the supports.

## The pieces sink into each other

Penetration over 1 % of the element size is a Problem. Raise the pair's penalty factor (10 times is a good step) and run again.

## Slow studies

Each load step is a full solve, and contact adds passes that pair the faces again. Keep the element size as large as the question allows. A large mesh is a job for a workstation.

## Find touching faces finds nothing

It looks only at flat faces of different pieces that face each other within the distance you give. Raise the distance, or pair curved faces by hand in the Simulation workspace.
