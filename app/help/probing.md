---
title: Probing: find the part and set the work offset
summary: Touch a top face, a side, a hole or a boss with a probe and let the control move the work offset to where the part really is, or only measure. What each control can do, and what has not been proven.
section: tasks
order: 150
keywords: probe, probing, touch probe, touch off, work offset, g54, g31, g38.2, skip, datum, find centre, bore, boss, edge, set zero, measure, inspection, g10
---

{{ui:Probe}} in Manufacture writes a probing cycle into the program: the probe touches the part, and the control moves the work offset (G54) by the difference between where the surface was found and where the model says it is. Later operations then cut where the part really is.

**Nothing here has been run on a machine.** The moves before a touch are ordinary moves: the probe is not watched until the probing move itself. Run it slowly, in the air first, with your hand on feed hold.

## Use it

1. On the **Tools** tab the first probe operation adds a **touch probe**: its ball diameter, and the probing feed (100 mm/min unless you set one).
2. Press {{ui:More}} in the Manufacture toolbar, then {{ui:Probe}}, and click what to touch. Each pick is one cycle, in the order you click:

| Pick | The cycle | What is set |
|---|---|---|
| A flat face that looks up the tool axis | One touch going down | Z |
| A flat side face square to X or to Y | One touch going at the face, a little below its top | X or Y |
| A hole or a boss along the tool axis | Four touches (+X, −X, +Y, −Y) | X and Y of its centre |

3. **With the result**: {{ui:Set the work offset}} or {{ui:Measure only}}.
4. **Start this far away** and **Search this far past** are how far from the expected surface the probing move begins and how far beyond it the probe may travel before the control gives up. **Depth** is how far below the top of a hole, boss or side face the ball goes.

Put the probe operation first, before anything cuts.

## What each control writes

| Control | Touch | Result |
|---|---|---|
| Fanuc-style | `G31`, the position kept in `#101` to `#104` | The offset variables (`#5221` to `#5223`) are moved by found − expected. Measure only: the difference is left in `#110` (and `#111`). |
| LinuxCNC | `G38.2`, the position kept in named parameters | `G10 L2 P1` with the new offset. Measure only: a `(DEBUG, …)` message. |
| GRBL | `G38.2` | One touch sets the axis with `G10 L20 P1`. GRBL has no variables, so it **cannot work out a centre**: the file says so in a comment and sets nothing. |

The arithmetic is the post's, so you can change it: the events are `probe-move` and `probe-set` ([Post processors you can edit](topic:post-processors)).

## Limits

- One work offset (G54). Faces square to the axes only: no angle, no corner cycle, no rotation of the work.
- No tool setter, no broken-tool check, no measuring a size against a tolerance, no report.
- The spindle is not started for a probe and coolant stays off; nothing checks that the tool in the spindle is a probe.
- The stock simulation does not run a probing path.
- The probe's own calibration (ball offset, stylus deflection, trigger direction) is the control's.
