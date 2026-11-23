---
title: 3D roughing and rest machining
summary: Clear the stock round the whole model level by level with a flat, bull-nose or ball end mill, leaving stock for finishing, then let a smaller tool cut only where the first one left material. What the paths guarantee, and what they do not.
section: tasks
order: 147
keywords: 3d roughing, roughing, rough, rest machining, rest roughing, remaining stock, stock to leave, stepdown, levels, z level, waterline, ramp, plunge, gouge, smaller tool
---

Two operations in Manufacture, under {{ui:More}} in its toolbar, clear stock from the **whole model** in 3D, with the tool kept vertical (or along the operation's own [tool direction](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). They take no picks.

## 3D roughing

{{ui:3D rough}} works down from the top of the stock one **stepdown** at a time. At each level it clears everything the tool can reach without touching the model: straight rows a **stepover** apart (a fraction of the tool diameter), then once round the edge of what it may reach, so walls are followed and not left as a row of steps in plan.

- **Stock to leave**: how far the tool stays from the model everywhere, for the finishing pass (default 0.5 mm).
- **A level at each flat face**: an extra level at the height of every flat face of the model (plus the stock to leave), so a floor is not left almost a whole stepdown high.
- **Ignore stock thinner than**: material thinner than this, upwards or sideways, is not worth a pass (0.05 mm for roughing, 0.5 mm for rest machining, so that a hair left along a wall does not send the smaller tool round every wall).
- **Bottom**: nothing is cut below this height. Empty means the bottom of the model.

It starts from the stock **as the operations before it left it**: after a face pass it does not cut the air where the face mill has been.

Getting down: where the tool would meet stock on the way down it ramps along its own pass at the **ramp angle**, back and forth over at most two tool diameters. A pass too short for that is plunged straight down at the plunge feed; the operation counts those and warns, because a tool that does not cut on its centre should not do it.

## Rest machining

{{ui:Rest}} is the same strategy for a **smaller tool after a bigger one**. It reads the stock simulation and cuts only where material is still standing: inside corners the bigger tool could not turn in, slots it did not fit, the steps it left on slopes. Everywhere else it does nothing, so its path is a small part of what the same tool would take on fresh stock.

Put it after the roughing operation and choose the smaller tool. It needs the stock simulation of the operations before it, which the workspace always runs.

## How good the paths are

- **No gouge.** The tool's positions are worked out on a grid, with the cutter taken a little bigger than it is (by 1.4 grid cells sideways, and by the stock to leave), so that anywhere it stands it is clear of the model. The tests check every cutting point against the exact tool on the exact mesh, and the stock simulation after each run: no gouge, no rapid move through stock.
- **The price of that**: walls keep a little more than the stock to leave, up to the amount shown as "Extra stock on walls" on the operation (about 0.5 mm for a Ø6 tool, less for a smaller one). The finishing pass takes it.

What these paths are not:

- Rows are straight lines, not offsets of the part's shape or constant-engagement curves. They make more lifts and air moves than an offset or adaptive strategy would, and the first row at each level cuts the tool's full width. For flat-floored pockets, [Adaptive](topic:manufacture) is the better roughing.
- The tool's shank and holder are not checked. A warning says when the cut is deeper than the flute length.
- Undercuts are not seen: the model is what the tool meets coming down its axis. To rough a side, give a second operation a [tilted tool direction](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Rest machining knows the stock only as well as the simulation's grid (0.1 to 2 mm cells, by part size).
- On a large part the program is long (over 100,000 moves for a 200 mm flange with a Ø6 tool) and takes about a minute to work out, and every change in the workspace works the whole program out again. Use the biggest tool that fits for the roughing.
- Check the output in your machine's own simulator before cutting.
