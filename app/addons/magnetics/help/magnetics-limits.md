---
title: Magnetics: limits and what is not built yet
summary: What the magnet solver does and does not do, how it was checked, and what to use it for.
section: reference
order: 90
keywords: limits, accuracy, 2-d, 3-d, axisymmetric, eddy currents, hysteresis, demagnetization, saturation, closed-form, verification, not built
---

## What it is

A flat (2-D) magnetostatic solver for long devices: the cross-section is solved with the current running in and out of the section, and the answer is per metre of depth. It uses linear triangles for the vector potential and Newton's method for iron that saturates. The force comes from the Maxwell stress. It is PartCraft's own solver, the same one as Sketch › Magnet study; this add-on gives it a panel, examples, the result on the part and files.

## How it was checked

Against closed-form answers, in the add-on's own tests:

- the field of a round conductor at twice its radius, within 1 percent of μ0·I / 2πr, and inside the conductor within 5 percent;
- the flux between two flux lines of that conductor, within 5 percent of μ0·I/2π · ln(r2/r1);
- a magnet in a closed iron frame, within 1 percent of the magnetic circuit;
- the force between two parallel conductors, within 4 percent of μ0·I² / 2πd with a box four sizes wide. With a box one size wide it is about 38 percent low, because the box edge acts as a wall, and the result line flags it;
- the gap field of the C-core example, within 5 percent of the magnetic circuit. The circuit leaves out fringing.

The solver itself is also tested in PartCraft's own suite against a line current, a saturating slab and a magnet across its axis.

## Not built yet

- No axisymmetric (round) models and no 3-D. A short device, or one with ends that matter, is not modelled well.
- Steady fields only: no eddy currents, no AC, no hysteresis, no motion.
- A magnet follows a straight recoil line. There is no demagnetization knee, so a magnet driven past its knee is not caught.
- Iron is linear unless you give a B–H curve. The study warns when linear iron goes past 2.1 T.
- No material library: every number is yours or an example (iron μr 2000, magnet 1.2 T), not a data sheet.
- The solve runs in a background worker on the page. A Fine mesh of a detailed model can take a minute.

This is an analysis aid for a first estimate. It is not a design approval.
