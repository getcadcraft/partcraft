---
title: Parts from physics: generators
summary: The Engineer workspace and the Generated body feature: pick a generator, set its inputs (flow, pressure, temperatures, material, printer), and get a part sized from textbook formulas, with its data sheet, its manufacturing checks and files for analysis tools. The same inputs always give the same part.
section: tasks
order: 150
keywords: engineer, generator, generated body, physics, rules, heat exchanger, manifold, nozzle, lattice, gyroid, data sheet, inputs, deterministic, same inputs same part, manufacturing checks, 3d printing, powder bed
---

A **generator** is a script that sizes a part from your requirements and builds it. A heat exchanger generator takes the heat to move, the two flows and their temperatures, the pressure and the material; it works out how big the core must be and how thick its wall, builds it, and tells you the numbers it used and where each came from. Change an input and the part follows.

The result is a normal body in the part: it is in the feature list, it prints, it exports. The generator itself is kept in the part too, so a file opens on any computer without the generator being installed, and **opening a part never runs a script**.

## Make a body

1. Choose the {{ui:Engineer}} workspace in the switcher.
2. Pick a generator in the list (the ones that ship with PartCraft, then any you opened from a file) and click {{ui:New}}.
3. The script runs. When it finishes the body is in the view and the panel shows its inputs, its **data sheet** and its **checks**.

You can also add one from Design: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Change it

Change any input and the body is made again a moment after you stop typing. The panel says which of three things is true:

- **Up to date**: the body matches the script and its inputs.
- **The inputs changed**: the body in the part is from the earlier inputs; it is being made again, or press {{ui:Run}}.
- **Not run yet** or **The last run failed**: a script error is shown with its line.

{{ui:Stop}} ends a run that is taking too long. Undo goes back one step at a time: a run is one step, an input is one step.

## The data sheet

Every number the generator worked out is listed with its **unit** and **where it comes from** (a textbook equation, a standard, a data sheet). Nothing is a hidden constant. The sheet is part of the file, so it is the same on the next computer. [Data out](topic:data-out) says how to save it as JSON or PDF.

## The checks

A generator can check its own part against a printing process: walls and gaps thinner than the process holds, loose pieces, cavities that trap powder or resin, holes too narrow to clear them, and overhangs that need support. The findings are in the panel and in the {{ui:Problems}} list (the ⚠ button), and they are saved with the part.

The process figures are the round numbers public design guides give for the process in general (FDM, SLA, SLS, metal powder bed). They are **not your machine's specification**: replace them with your shop's figures before relying on a check. The check works on a grid of voxels, so it is accurate to about one voxel: a wall is reported only when it is thinner than the limit by more than a voxel.

## What ships

| Generator | What it makes |
|---|---|
| Gyroid block | A block filled with a gyroid, Schwarz P or diamond sheet: the simplest lattice |
| Gyroid heat exchanger | The core of a two-fluid exchanger, sized from the duty by the effectiveness-NTU method, its wall from the pressure; can check the pressure drop with a flow study on one cell |
| Distribution manifold | A header and branches, every tube sized from the flow it carries |
| Graded lattice beam | A lattice whose wall thickens where a topology optimisation says material is needed |

All of them are first estimates built on textbook formulas. [The engineering library](topic:engineering-library) lists the formulas and their limits. Run Simulation, Thermal or Flow on the result before you rely on it.

## Export controls

Engineer's generators and data sheets carry a notice about export controls and sanctions. Read it in [Engineer and export controls](topic:engineer-export-notice); it is also at the foot of every data sheet.

## Not built yet

- Headers, ports and fittings on the heat exchanger core: it is the core only.
- Temperature curves for material strength: the materials are at room temperature.
- Tee losses and the sharing of flow between outlets in the manifold.
- Installing generators from the add-on directory with one click; opening a file adds one to this browser.
- Generators for the other apps.
