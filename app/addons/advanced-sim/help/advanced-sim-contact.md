---
title: Advanced simulation: contact between pieces
summary: Run a study in which separate pieces of a part press on each other, find the touching faces and read the contact force and penetration.
section: tasks
order: 2
keywords: contact, frictionless, bonded, penalty, touching faces, pieces, gap, penetration
---

## When to use it

A part can hold several separate pieces: for example two rectangles in one sketch, extruded, are two bars. A contact study lets the load go from one piece to the other through the faces where they meet, instead of treating them as one solid.

## Steps

1. Set the material, supports and loads in the Simulation workspace. Each piece must be held well enough that it cannot fly away sideways: contact pushes only across the joint.
2. In the {{ui:Advanced sim}} tab press {{ui:Contact}}.
3. Press {{ui:Find touching faces}}. It lists flat faces of different pieces that face each other no more than the distance in {{ui:Look for faces up to (mm) apart}} (0.5 mm to start). Check the list, then press {{ui:Add}}.
4. For each pair choose {{ui:Frictionless}} (the faces may open and slide, they cannot pass through each other) or {{ui:Bonded}} (glued). {{ui:Penalty factor}} sets how stiff the contact is (20 to start).
5. Press {{ui:Run study}}. The result adds the number of points touching, the contact force, and the penetration: how far the pieces sank into each other.

Curved faces, or faces the finder does not see, can be paired by hand in the Simulation workspace: add a contact pair there and pick its two sides.

## Reading the result

Contact is frictionless or bonded; results of a penalty method carry the stated penetration; use CalculiX for friction and large sliding.

The penalty method lets the pieces sink a little into each other. When the penetration is more than 1 % of the element size the result says so and a Problem appears: raise the pair's penalty factor and run again. A bonded joint is a little soft for the same reason; raise the factor, not the mesh.

Side A of a pair is the side that presses; side B the side it presses on. Side B should not have much finer elements than side A. {{ui:Swap sides}} turns a pair round.
