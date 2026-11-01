---
title: Advanced simulation: getting started
summary: What the Advanced simulation add-on does in PartCraft, how to switch it on and how to run your first nonlinear study.
section: start
order: 1
keywords: advanced simulation, nonlinear, plasticity, yield, contact, calculix, add-on, simulation
---

## What it is

Advanced simulation goes past PartCraft's linear static study: material that yields, separate pieces of a part that press on each other, and files for CalculiX, a separate analysis program you install and run yourself. It is an add-on: it comes with PartCraft, is free, and is off until you switch it on in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Advanced simulation}}. Its tab, {{ui:Advanced sim}}, is then in the right panel.

It works on the part's own Simulation study: the material, the supports and the loads you set in the Simulation workspace stay as they are. The tab changes the study's type, its load steps and its contact pairs, runs it, and shows the result. Every change is one undo step.

It is an analysis aid for an engineer, not a design approval. Check the numbers against a hand calculation or another program before you rely on them.

## Your first nonlinear study

1. Set up a static study in the Simulation workspace first: pick a material that has a yield stress, add supports and loads on faces.
2. Open the {{ui:Advanced sim}} tab and press {{ui:Nonlinear}}. The study becomes a nonlinear study; its supports, loads and material are kept.
3. Set {{ui:Load steps}} (10 is a good start) and the {{ui:Slope after yield (MPa)}}. Leave the slope empty for 1 % of the material's E. A slope of 0 is perfectly plastic: past the load the part can carry, the steps stop converging and the result says so.
4. Press {{ui:Run study}}. The result lists the load carried, the largest displacement and von Mises stress, the largest plastic strain, and a table of the load steps (how many Newton iterations each took and how many points yielded).
5. Pick a {{ui:Plot}} (von Mises stress, plastic strain or displacement) and press {{ui:Show beside the part}}. The deformed shape is drawn beside the part in eight colour bands, blue for the lowest values and red for the highest, with the shape scaled so you can see it (the note says by how much). {{ui:Remove the plot}} takes it away.

The plot is made of display bodies: it has no mass, is not part of the solid and is not exported. For the full plot with probes, solve the same study in the Simulation workspace: it is the same study.

## What the material does

The material is bilinear: straight up to its yield stress with slope E, then straight on with the slope after yield. Plastic flow follows von Mises (J2) with isotropic hardening, at small strains. That is the model the results come from; it is not a curve fitted to a test.
