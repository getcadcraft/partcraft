---
title: 4- and 5-axis machining
summary: Tell PartCraft which rotary axes the machine has, tilt the tool for any ordinary operation, finish a surface with a ball end mill that leans as it cuts, or turn the part under the tool on a 4th axis. What is written to the G-code, and what has not been proven.
section: tasks
order: 148
keywords: 5 axis, five axis, 4 axis, fourth axis, multi axis, multiaxis, 3+2, indexed, positional, tilt, tilted tool, rotary, trunnion, table, head, a axis, b axis, c axis, tcp, rtcp, tool centre point, g43.4, inverse time, g93, kinematics, pivot, swarf, lead angle
---

Manufacture can hold the tool at an angle, and it can move the rotary axes while cutting. Three things do it, from the simplest up.

**Nothing here has been run on a machine.** The paths are checked against the geometry by the tests and the G-code is read back, but the built-in posts follow the controls' documented codes, not any machine in front of us. Prove a program in your control's own simulator and in the air before it meets metal.

## The machine's rotary axes

On the **Setup** tab, {{ui:Rotary axes}} says what the machine has:

| Choice | The machine |
|---|---|
| None (3 axes) | A plain mill. Any operation that needs the tool tilted warns, and the post refuses to write it. |
| A (turns about X) | One rotary axis along X: a 4th-axis table or indexer. The tool can lean in the Y–Z plane only. |
| B (turns about Y) | One rotary axis along Y. The tool can lean in the X–Z plane only. |
| A and C | A tilting axis about X carried by, or carrying, a turn about Z: a trunnion table, or a head. |
| B and C | The same with the tilt about Y. |

Then:

- **Carried by**: {{ui:The table (the part turns)}} or {{ui:The head (the tool turns)}}. A table turns the opposite way to bring the same face under the tool, so the sign of every angle follows from this.
- **The control keeps the tool tip on the path (TCP)**: on, X Y Z in the program are the tool tip in the part's own coordinates and the control does the rest (the built-in Fanuc-style and LinuxCNC posts write `G43.4` for the tool length). Off, on a table machine, PartCraft writes X Y Z as the turned table carries the part, about the **rotary centre** you give (in work coordinates; 0, 0, 0 when the work origin is on the centre). A head machine needs TCP on: without it the program would need the machine's pivot length, which PartCraft does not know.
- **Tilt limit**: how far the tilting axis goes.

Machines differ in which way they count as positive. If an axis turns the wrong way on yours, change the sign in a copy of the post ([Post processors you can edit](topic:post-processors)).

## A tilted tool for an ordinary operation

Every milling operation (face, pocket, adaptive, contour, drill, chamfer, parallel, scallop, 3D rough, rest) has a **Tool tilt** and **Tilt towards**: the tool's direction for that operation alone, measured from the setup's tool axis. This is 3+2 machining: the rotary axes go to a position and stay there while three axes cut.

- Type the two angles, or press {{ui:Tool square to a face}} and click a flat face: the tool will point straight at it.
- Pick the operation's faces and edges as usual. What counts as a floor or a hole is judged along the tilted tool.
- The stock for that direction is the box that holds the turned stock, so heights and clearances are safe from that side.

In the G-code, before the operation the tool goes up, the rotary axes turn, and the tool comes down over its first point. On a table machine without TCP, arcs stay arcs and canned drilling cycles stay cycles (the written frame is only turned about Z). With TCP in a tilted plane, arcs become short lines and cycles the moves they stand for.

The stock simulation runs a tilted direction **on its own**: it shows what that operation cuts from the whole stock seen from its side, and finds gouges there, but cuts made from other directions are not carried over.

## 5-axis finishing

{{ui:More}} in the Manufacture toolbar lists this operation and the next at the top of the **Operations** tab.

{{ui:5-axis}} is the [parallel finishing pass](topic:finish-3d) with a **ball end mill that leans as it goes**. A ball cuts with a sphere, and the sphere is the same whichever way the tool leans about its centre, so the ball follows exactly the path the 3-axis pass would give and only the direction of the tool changes:

- **Towards the surface**: 1 = square to the surface, 0 = upright, anything between.
- **Lean forward**: degrees along the direction of the cut, so that the still centre of the ball is not what does the cutting.
- **Most tilt**: the tool never leans further than this from the setup's axis.

Where the shank would touch the model the lean is cut back until it clears, and the operation says at how many points. Each pass is entered and left by a straight lift.

## Rotary finishing (4th axis)

{{ui:Rotary}} is for a part held along **work X** on a rotary axis. The part turns and a ball end mill, always pointing at the axis, follows its surface:

- **Passes**: {{ui:Along the axis}} (lines along X, one stepover of turn apart) or {{ui:Round the part}} (rings, one stepover of X apart).
- **Axis at Y / Z**: where the axis is. Empty means the middle of the stock. On a table machine without TCP this must be the rotary centre in Setup; the operation warns when it is not.
- **From / To X** and **From / To angle**: the part of the length and of the turn to cut.

The height of the ball above the axis at every point is the exact drop of a sphere on the part's mesh, from that side.

## Limits

- 5-axis and rotary finishing take a **ball end mill** only. There is no swarf cutting (the side of the tool on a ruled wall), no flow lines along a surface's own directions, no multi-axis roughing and no automatic choice of the tilt to avoid a collision.
- 5-axis and rotary paths are **not run through the stock simulation**, which is a height map and cannot hold a leaning cut.
- The shank is checked in 5-axis finishing against the model seen from above; the holder, the spindle and the machine itself are not checked anywhere.
- Rotary finishing cuts only what the tool can see looking at the axis.
- 5-axis finishing takes a minute or more to work out on a large part: the shank is checked at every point of every pass.
- When the rotary axes move with the linear ones and TCP is off, the built-in posts write the feed as inverse time (`G93`), then go back to `G94`.
- No tilted work plane code (`G68.2` and the like) is written, and no machine-specific limits, unwinding or collision zones are known.
