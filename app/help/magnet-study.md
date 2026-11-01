---
title: Magnet study of a sketch
summary: Turn the closed profiles of your sketches into a flat magnetic model (iron, magnets, coils), see the field, and read the force and torque on a body.
section: tasks
order: 71
keywords: magnet, magnetic, magnetostatic, field, flux density, force, torque, coil, yoke, iron, B-H curve, permanent magnet, actuator, motor, solenoid, maxwell
---

Use {{ui:More}} in the Features toolbar › {{ui:Magnet study of sketches…}} on a part that has sketches. Each closed shape in the sketches you tick is one region of a flat model; the study works out the magnetic field B, the force and the torque on a body you choose.

## Steps

1. Draw the bodies as closed shapes in sketches: an iron yoke, a magnet, a coil. Bodies that touch share an edge, so put them in different sketches; bodies that stand apart, or sit inside one another (a window in a yoke), can share one. Keep the sketches on the same plane.
2. Open the study and tick the sketches to use. Every closed profile gets a row, numbered. Say what it is: {{ui:Air}}, {{ui:Iron}} (a permeability, or a B–H curve typed as pairs of B in tesla and H in A/m), a {{ui:Permanent magnet}} (Br in tesla, its direction as an angle from the sketch's x axis, and its recoil permeability) or a {{ui:Coil}} (the total current through its profile, turns times amperes; the sign says which way it runs).
3. Tick {{ui:Force and torque on this body}} for the bodies you want them on. Give the depth of the part out of the sketch.
4. Choose the mesh and the air around the model, then {{ui:Run}}.

## What you should see

- The flux density |B| over the model, dark blue low to red high, with the profiles numbered.
- The strongest field and where it is, the number of triangles, and for each body you ticked the force along x and y and the torque about its middle, for the depth you gave.
- {{ui:Save results (CSV)}} writes the numbers.

## Good to know

- It is a flat, steady model: everything is per metre of depth, with no eddy currents and no hysteresis, and a magnet is a straight recoil line (it cannot be demagnetised).
- The model sits in a box of air whose edge is a wall. Compare two sizes of the air box, and the Normal and Fine meshes: a force taken from the field round a body is only as good as the mesh there.
- Iron with only a permeability never saturates. When the field passes 2 T the study raises a ⚠ in the Problems list: give the iron a B–H curve. The numbers in a new row are examples (iron μr 2000, a magnet of 1.2 T), not a material's data sheet.
- A body needs room round it to take the force: if another body is too close, the study says so.
- A drafting aid, not an engineering approval.

## Next

- [Magnetic fields in 2-D (tutorial)](topic:magnetic-fields-2d)
