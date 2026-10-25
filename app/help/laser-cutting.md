---
title: Send a drawing to a laser
summary: Choose what each layer does (cut, score, engrave, fill, picture), preview the head's moves, save GRBL laser-mode G-code, or send it from the browser after framing the job.
section: tasks
order: 60
keywords: laser, laser cutter, laser engraver, GRBL, G-code, engrave, fill, dither, picture engraving, score, cut, Web Serial, Linux, frame the job, power, speed, passes
---

The {{ui:Laser}} panel turns the layers of a drawing into a program for a laser that runs GRBL (most hobby and small-shop diode and CO2 controllers). In PartCraft, choose {{ui:Export}} › {{ui:Laser program…}}, then {{ui:Add outlines from a DXF…}}: the outlines and holes come in on the layer CUT. The flat patterns of sheet metal parts (with their bend lines on the layer BEND) need the exact kernel, which this version does not have. The settings are saved in the part or assembly file.

:::warning
Test every setting on scrap first, wear eye protection that fits your laser, keep the lid closed where there is one, and never leave a running laser alone. The numbers a layer starts with are placeholders, not recommendations for any material.
:::

## Choose what each layer does

Every layer of the drawing is a row. {{ui:Does}} sets it to **Cut**, **Score**, **Engrave lines**, **Fill shapes**, **Engrave picture** or **Not sent**, with a {{ui:Power %}}, a {{ui:Speed mm/min}} and a number of {{ui:Passes}}.

- **Fill** burns the inside of closed shapes in lines, {{ui:Line spacing}} apart, at an {{ui:Angle}}, both directions or one, with an overscan so the head is at speed when the laser comes on; cross-hatch adds a second pass at 90°. A shape with a hole stays open at the hole.
- **Engrave picture** turns a picture into dots (Floyd–Steinberg, Atkinson, ordered, or plain black and white at a threshold) or, with *Grey levels*, into variable power.
- Order: pictures and fills first, then line engraving, then scores, then cuts, so a cut-out part does not move while it is engraved. Within one layer the paths run **inside-first** (a hole before the plate it is in), nearest next.

## Preview, then save

The preview draws what the head does: burning lines in colour, fast moves in grey, and a green box round everything that burns. Below it are the size, the length of burn and a time estimate (without acceleration; a real machine takes longer). {{ui:Save G-code…}} writes GRBL laser-mode G-code: `$32=1`, `M4` (or `M3`) with S values, `G0` and `G1` moves, `M5` at the end. X0 Y0 is the job's lower left corner unless you choose the drawing's origin: set your machine's work zero there. The G-code follows GRBL's documented laser mode; it has not been tried on a real laser yet.

## Send from the browser

In Chrome and Edge, {{ui:Connect…}} asks you to choose the laser's USB port. Nothing connects or sends until you press a button. Press {{ui:Frame the job}} first: the head traces the box of the job with the laser **off** (or at the low power you set for a pointer) so you can see where it will burn. Only then does {{ui:Send job}} come on, and it goes off again if you change anything. {{ui:Pause}} holds the head, {{ui:Stop}} holds it, resets the controller (the laser goes off) and sends `M5`. Where Web Serial is missing (Firefox, Safari, and CadCraft Studio, whose web view has none yet) save the G-code and send it with your laser's own program.

## Not built yet

Other controllers' formats (Ruida, Marlin lasers, vendor files), tabs and lead-ins, kerf offset, material libraries, rotary and Z axes, camera alignment.
