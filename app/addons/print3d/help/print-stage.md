---
title: Print stage: put your part on the printer's bed
summary: Lay the bodies of your part on a printer bed, lay them flat, arrange them and send them to the printer without exporting.
section: tasks
order: 10
keywords: 3d print, printer, bed, stage, slicer, g-code, send to printer, orientation, lay flat, arrange
---

## Print your part from here

1. Press {{ui:Print stage}} in the toolbar, or open the {{ui:Print stage}} tab in the right panel. The part steps aside and its bodies lie on a dashed bed. In an assembly, each part lies on the bed on its own.
2. Choose a body in the list, then {{ui:Lay flat}} puts the largest flat face that can carry it on the bed, {{ui:Turn 90°}} turns it a quarter turn and {{ui:As designed}} puts it back the way the part is drawn. {{ui:Undo layout}} takes the last change back.
3. {{ui:Arrange on the bed}} spreads everything out; {{ui:Fit all on the bed}} scales down what is too big. You can also add things from the Library.
4. Choose material and quality, connect the printer once, and press {{ui:Send to 3D printer}}. A box says the time, material and temperatures first; nothing is sent until you say yes.

The layout is a copy: moving things on the bed never changes your part. If you change the part, press {{ui:Take the part again}} and the bodies follow, keeping their places.

A body that is not a closed solid (it has holes in its skin, or passes through itself) is left off the bed and named with the reason, because a slicer would print it wrongly or not at all.

New in this build, and nothing has yet been printed on a real printer from PartCraft: watch the first prints.
