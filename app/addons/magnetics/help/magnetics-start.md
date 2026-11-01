---
title: Magnetics: getting started
summary: Set up a flat magnet study in PartCraft (iron, permanent magnets, coils and the air round them), solve it, and read the flux density and the force on a body.
section: start
order: 1
keywords: magnet, magnetics, magnetostatic, electromagnet, solenoid, coil, permanent magnet, flux, flux density, tesla, force, air gap, b-h curve, add-on
---

## What you'll do

1. Switch the add-on on in {{ui:Settings}} › {{ui:Add-ons}}.
2. Open the **Magnetics** tab in the right panel.
3. Under {{ui:Model}} choose {{ui:An example device}} to start from a ready-made cross-section, or {{ui:This part's sketches}} to use your own drawing. With your sketches, each closed profile is one body; bodies that touch go in different sketches, and all the sketches must lie on one plane.
4. Under {{ui:Bodies}} say what each body is: air, iron (a relative permeability μr, or your own B–H curve), a permanent magnet (Br in tesla and the direction it points, in degrees from +x) or a coil (the total current through its cross-section: turns × amperes; the sign says which way it runs). Tick {{ui:Force on it}} for each body whose force you want.
5. Under {{ui:Air box and depth}} choose how much air goes round the bodies, the depth of the device out of the section (forces are scaled by it) and the mesh.
6. Click {{ui:Solve}}. The field picture, the largest |B|, each body's mean and largest |B|, the forces and the flux lines appear under {{ui:Results}}.
7. Under {{ui:On the part}} click {{ui:Show on the part}}: the result goes into the 3D view as display bodies. Under {{ui:Save the results}} choose a file.

## The examples

Five devices you can change by size:

- **C-core electromagnet**: an iron C with an air gap and a coil round its back leg. The gap field is compared with the magnetic circuit, μ0·NI / (gap + iron path / μr).
- **Magnet in a closed iron frame**: compared with the magnetic circuit, Br·(lm/μrm) / (lm/μrm + L/μr).
- **Holding magnet with a keeper**: the pull on the keeper. There is no hand formula for this one.
- **One round conductor**: compared with B = μ0·I / 2πr.
- **Two parallel conductors**: the force between them, compared with μ0·I² / 2πd per metre.

Where an example has a hand formula, the result line says the hand value, the computed value and how far apart they are.

## Your sketches

Draw each body as a closed profile: a rectangle, a circle, any closed outline. A magnet inside an iron yoke can share a sketch with the yoke when it sits inside it; a body that only touches another goes in a sketch of its own. Profiles that cross are refused, with the reason.
