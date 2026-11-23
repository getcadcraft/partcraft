---
title: Turning on a lathe
summary: Face, rough, finish, groove, part off, thread and drill a turned part, from the outline the part makes when it spins. Lathe tools, feeds per revolution, lathe posts, and what has not been proven.
section: tasks
order: 149
keywords: turning, lathe, turn, facing, roughing, finishing, groove, grooving, part off, parting, cut off, thread, threading, g32, g33, g96, constant surface speed, css, nose radius, insert, bar, chuck, diameter, feed per revolution, g71, g76
---

Manufacture has seven operations for a lathe. They work on any part: what is cut is the **outline the part makes when it spins** about the middle of the stock, so a part that is not round is turned down to the round shape that holds it.

**Nothing here has been run on a lathe.** The paths are checked against the geometry by the tests; the two lathe posts follow the controls' documented codes. Prove a program in your control's own simulator and in the air first.

## Set up

On the **Setup** tab:

- **Tool axis** is the spindle's axis, the lathe's Z. The front of the part is at +Z; the chuck holds the other end.
- **Stock**: choose {{ui:Cylinder}}, the bar. Its top offset is what the facing cut removes.
- **Work origin**: a stock-top or model-top centre puts Z0 on the front face, the usual place.
- **Control**: {{ui:Fanuc-style lathe (.nc)}} or {{ui:LinuxCNC lathe (.ngc)}}. A milling post refuses a turning program and says so.
- **Max spindle speed**: the limit the surface speed is held under.

{{ui:More}} in the Manufacture toolbar lists the seven turning operations at the top of the **Operations** tab. The first one you add brings its own tool: a **turning insert** (nose radius, insert angle, cutting edge angle) or a **grooving blade** (width, corner radius, how deep it reaches). Change them on the **Tools** tab. Feeds are per revolution, and the speed is a surface speed in m/min that the control holds as the diameter changes; give a tool an rpm of its own to fix the speed instead.

## The operations

| Operation | What it does |
|---|---|
| {{ui:Face}} | Faces the front of the bar down to the part, a stepdown at a time, from outside to just past centre. |
| {{ui:Rough}} | Passes along Z a **depth of cut** apart, down to the outline plus the **stock to leave**; then once along the outline to take the steps off. A valley between two shoulders is entered by a plunge of one depth of cut. |
| {{ui:Finish}} | One pass along the outline at a fraction of the tool's feed. |
| {{ui:Groove}} | Plunges the blade side by side wherever it can take more than the limit of stock that is still there: the grooves the turning insert could not reach. **From / To Z** narrow it. |
| {{ui:Part off}} | Cuts the part off just behind its back face, to a little past centre, with pecks if you set one. |
| {{ui:Thread}} | An outside thread: major diameter, pitch, length, number of passes. Depth 0 means 0.6134 × pitch (a 60° thread). Each pass takes the same area of chip; spring passes repeat the last one. |
| {{ui:Drill}} | A drill on the centre line to a depth, with pecks. |

## How the tool is kept off the part

The insert is treated as what it is: its nose circle, and behind it the trailing edge, a straight line whose angle is 180° less the cutting edge angle and the insert angle. That shape is lowered onto the outline at every point along Z, and the path is where it comes to rest. So:

- **The nose radius is already in the path.** The posts write no `G41` or `G42`; the coordinates are the tool's programmed point (the corner of the square round the nose).
- The insert **cannot follow a wall steeper than its trailing edge**. A groove behind a shoulder is left alone, and the finishing operation says how much of the outline it could not reach. A {{ui:Groove}} operation takes it.
- The stock is tracked along Z after every cut, so roughing does not cut air, grooving finds what is left, and each operation shows the volume it removed and whether it cut into the part.

## Limits

- **Outside turning only**: no boring bar, no inside grooves or threads, no face grooves.
- One spindle, the part held at −Z. No sub-spindle, no live tools, no C or Y axis, no steady rest or tailstock moves.
- Paths are straight moves: curves are short lines within the tolerance (no `G2`/`G3`), and roughing and threading are written pass by pass (no `G71` or `G76` cycles).
- Threading is straight passes with a straight pull-out at the end; give the thread a relief groove. The thread is not shown in the stock.
- Drilling on centre does not change the stock model.
- The holder, the turret and the chuck are not checked. Set **Stop at Z** to keep the tool away from the jaws.
- Feeds and speeds are starting values, as for milling.
