---
title: Keep and reuse offcuts
summary: After a nest, what is left of each plate becomes a numbered remnant in a stock list; the next nest uses the remnants first, then full plates.
section: tasks
order: 52
keywords: nesting, offcut, remnant, stock, leftover, plate, sheet, reuse, material, thickness, CSV
---

When you nest parts on plates, each plate's usable leftover (not slivers) can be kept as a **remnant**: a numbered outline (R-0001, R-0002 …) with the material, the thickness, its size and the job it came from. The list is saved with the file and can be saved as a CSV.

## Use them again

Enter the **material** and **thickness**, leave {{ui:Use remnants first}} on, and nest. Remnants of the same material and thickness are tried smallest first; the parts that fit go on them, inside the remnant's own outline and clear of its edge; what does not fit goes on new plates. The job report says which remnants were used and what was left. With {{ui:Save the leftovers as remnants}} on, {{ui:Add this job to the stock}} then writes it into the stock list: a remnant that was used is marked **Used** (with the job) and not offered again; what is left of it becomes a new remnant that remembers its parent.

## What counts as a remnant

The leftover is measured with the spacing you set (no part is closer than that to a cut). Strips narrower than a twentieth of the plate and pieces smaller than 2 % of it are scrap; change both limits if your shop keeps smaller pieces. Holes inside parts are the parts' own and are not kept. A roll has no remnants.

## In the drawing

The DXF of a nest draws each remnant's outline on the layer REMNANTS with its number in the middle, so the pieces can be marked when they are cut.

Not built yet: grain direction of a remnant, a bar-code or label sheet, remnants of rolls, stock shared between projects.
