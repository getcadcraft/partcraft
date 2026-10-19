---
title: Nest flat parts on sheets
summary: Lay flat parts on plates or a roll with as little waste as PartCraft can find, never closer than the spacing you give, and save the layout as a DXF for the laser, plasma, waterjet or router.
section: tasks
order: 95
keywords: nesting, nest, sheet, plate, roll, laser, plasma, waterjet, router, cutting, yield, material use, scrap, waste, spacing, kerf, grain, rolling direction, dxf, flat pattern, outlines
---

**Nesting** places many flat parts on a sheet so that as little material as possible is left over. PartCraft lays the parts one by one, each where it keeps the used length of the sheet shortest, tries several orders and turns in a few seconds, and keeps the best. Parts can sit in each other's holes and in the hollow of an L or a U.

## Open it

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} opens it with the part's flat pattern, or — in an assembly — with the flat pattern of every sheet metal part, as many as there are copies.
- On a sheet metal part, {{ui:Lay flat}} and then {{ui:Nest on sheets…}} under the flat pattern.
- {{ui:Add outlines from a DXF…}} adds every closed outline in a DXF file as a part: a drawing from CadCraft saved as DXF, or a file from your cutter's own software. An outline inside another one is a hole in it. Lines and arcs that join end to end count as one outline. Files in inches, centimetres or metres are changed to millimetres.

:::note
Laying sheet metal flat needs an exact geometry kernel (see [Sheet metal](topic:sheet-metal)). Outlines from a DXF file always work.
:::

## Set it up

For each part give **how many** you need and its **grain**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} for brushed or rolled sheet that must run one way, or {{ui:Across the sheet}}.

Under **Sheets**:

- **Stock**: {{ui:Plates}} of a given length and width (and how many you have; 0 = as many as needed), or {{ui:A roll}} of a given width, as long as needed.
- **Edge margin** is kept clear at every edge of the sheet (for clamps, or a ragged edge).
- **Space between parts** is the least distance between two cut lines: at least your cutter's kerf, plus what the material needs.
- **Turns**: the angles a part may be turned to, every 90° by default. Fewer turns run faster; more can use the sheet better.
- **Parts may be flipped** lets a part be laid upside down. Leave it off for sheet metal: a flat pattern laid flipped bends the other way.

Press {{ui:Nest}}. The preview shows every sheet; the facts say how many plates (or how much of the roll) it used and how much of the material the parts take up. Anything that did not fit is named.

## Save it

{{ui:Save DXF}} writes the layout as a DXF (R12, millimetres), one sheet under the next: the sheets' outlines on the layer SHEET, the parts on PARTS (arcs kept as arcs), each part's name on LABELS.

:::tip
Mixing several parts usually nests better than many copies of one: small parts fill the gaps between big ones.
:::

## What to check

PartCraft checks every layout again on the true shapes (not the grid it searched with): no two parts closer than the spacing, nothing in the margins. It does not plan the cut: lead-ins, the cutting order, cutting shared edges once and keeping the leftover sheet are your cutter's software's job. Check the DXF there before cutting.
