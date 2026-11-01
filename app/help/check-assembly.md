---
title: Check an assembly for clashes and motion
summary: Find parts that overlap with Clash, drag any joint's values to watch the motion, and sweep a joint through its range to find where parts collide.
section: tasks
order: 120
keywords: interference, interference detection, clash, collision, overlap, thread fit, thread depth mismatch, touching faces, hide, filter, motion, motion study, sweep, range of motion, check
---

Two checks run on the parts as they are placed: **Clash** looks for overlapping material right now, and the **motion check** moves one joint through its range and looks for overlaps along the way.

## Check for interference

1. Open or build an assembly (see [Build an assembly](topic:build-assembly)).
2. Choose {{ui:Clash}}.

The status bar reports the result:

- "No interference between 3 parts (… ms)." Nothing overlaps.
- "Interference: Flange1 and Flange2: Overlap, 2.5 mm³." Each pair, what kind of result it is and the volume they share.

The **Assembly** box on the left shows **Interference**: "None", "2 results" (the ones shown), or "Not checked". With nothing selected, the right panel lists each result under **Interference**.

The result is cleared whenever the assembly changes. Run {{ui:Clash}} again after moving a joint. Every pair of parts is checked against every other, so large assemblies take longer.

### Kinds of results

| Kind | Means |
|---|---|
| **Overlap** | The parts share volume: a real clash. |
| **Thread depth mismatch** | The shared volume is inside one part's thread but beyond the other's: a bolt threaded deeper than its hole, or a plain shank in a tapped hole. |
| **Thread fit (cosmetic threads)** | The shared volume is inside both parts' threads: a bolt in a tapped hole. Cosmetic threads are drawn at the thread's full size, so they always overlap a little. |
| **Touching faces** | No shared volume, but faces in contact (within 0.001 mm). |

Modelled threads (see [Threads on shafts and bores, drawn or modelled](topic:threads)) are real geometry: what they share is an **Overlap**.

### Hide what you do not need to see

Under **Interference**, **Show** has a box for each kind: clear **Thread fit** and **Touching faces** to see only the clashes that matter. **Hide this pair** beside a result hides that pair of parts whatever kind it is. Hidden results are counted ("2 results hidden by these filters"), and **Show the hidden pairs again** brings the pairs back. The status bar counts hidden results too.

The filters are saved with the assembly, and each change is one {{key:Mod+Z}} step. **Sweep a joint for clashes** (below) uses them too. An assembly with filters is saved as version 4, which earlier PartCraft versions refuse to open instead of losing the filters.

## Watch the motion

1. Select a joint that moves (any but rigid) in the list on the left.
2. Drag the slider under one of its values, such as **Angle (°)** or **Offset (mm)**. The part moves as you drag.
3. Let go. The new position is kept and can be undone with {{key:Mod+Z}}.

You can also type an angle or offset in the box and press {{key:Enter}}.

A joint on a closed loop (a linkage) moves the whole loop: the value you drag is kept and the other joints of the loop follow
(see [Closed loops](topic:build-assembly#closed-loops-linkages)).

## Sweep a joint for clashes

1. Select a joint that moves.
2. For a joint with several values (cylindrical, planar, ball, pin in slot), choose which one to sweep in **Check moves**.
3. Choose {{ui:Check the motion for clashes}}.

PartCraft moves that value through 25 positions in 24 equal steps, the others staying as they are: an angle from −180° to 180° (a tilt from −90° to 90°), a length from minus to plus the size of the biggest part. It reports:

- "No clash anywhere for Angle (°) from -180 to 180 (25 positions checked)."
- "6 of 25 positions clash, first at Angle (°) 45 (12.4 mm³)." The first position that clashes and the overlap there.

The button is grayed for rigid joints, which do not move. The sweep checks the positions only, not the path between them: a thin part could pass through another between two steps.

:::note
Contact and gravity are not built. Without limits the sweep covers the whole range; give the value **Limits** (see [Parts list, exploded views and moving parts](topic:assembly-bom-explode)) and the sweep covers only those, so a hinge that opens 90° is checked over 90°.
:::

## A motion study

**Assembly › Motion** drives one joint's value from a start to an end over a time you give (constant speed, eased, sine, or out and back), places the assembly at each step with its joints and closed loops, and reports what clashes and how close the parts come. **Add a point** follows the middle of a part or a point you click on it, and the card plots its position, speed and acceleration, the joint's value and the clearance against time; **Save CSV** and **Save plot** write them out. Speed and acceleration come from the recorded positions, so a sharp peak between steps reads low: use more steps.

After **Run**, the **Step through the run** bar moves the assembly to any step (the time, the value and whether parts clash there are shown beside it); the joint keeps its own value, and **Back to the model** puts the assembly back. The study's settings are saved in the assembly file; its results are made again by **Run**.


## A contact study

**Assembly › Contact** shows how an assembly carries its loads where parts press on each other. Each part brings its own supports, loads and material from its own **Simulation** study (a fixed face on one part, a force on another); here you choose the pairs. **Add a pair**, then **Pick side A** and click faces of one part, **Pick side B** and click faces of a different part (a click on a chosen face takes it off; Esc or Done ends the picking). A pair is **Frictionless** (the parts press but slide) or **Bonded** (they stay together); the stiffness factor sets how hard the contact resists sinking in (20 is a fair start, 1000 for a stiff steel stack).

**Solve** runs the load in steps and shows the contact force, the deepest sinking in, the largest movement and the largest stress. A part with no pair is left out and the card says so. Frictionless contact does not hold a part sideways: give every part a support in its own Simulation study, or bond it, or the steps may not settle. The pairs and settings are saved in the assembly file.

**Export CalculiX deck** writes the same model as a CalculiX input file (.inp). CalculiX is a separate program you install and run yourself; **Read CalculiX results (.frd)** then reads the displacements back on this assembly's mesh and refuses a file made for another mesh. The solver here is plastic-capable but not explicit dynamics, and nothing here is a certified analysis: have an engineer check anything that matters.
