---
title: Advanced simulation: CalculiX files
summary: Save a CalculiX input deck of the study, run it in CalculiX yourself, and read its results back. The decks have never been run in CalculiX.
section: reference
order: 3
keywords: calculix, ccx, inp, frd, input deck, export, results, check
---

## Not checked in CalculiX yet

The CalculiX decks are written to CalculiX's manual and have never been run in CalculiX. Every deck starts with a comment that says so. Expect to fix the first deck by hand; if CalculiX refuses one, send its .log to CadCraft so the writer can be fixed.

CalculiX is a separate program you install and run yourself. Nothing in PartCraft runs it, ships it or links to it: PartCraft writes a text file for it and reads a text file from it.

## Save a deck

With a nonlinear or contact study set up, press {{ui:Save CalculiX deck (.inp)}}. The deck has the same mesh as the study (quadratic tetrahedra, C3D10), the material (elastic, density, and the yield stress with the slope after yield as a plastic curve), the supports, the loads as nodal forces, each contact pair as surfaces with a linear penalty (frictionless) or a tie (bonded), and one static step with the load steps as increments. Units are mm, N, MPa and tonnes. It asks CalculiX for displacements, stresses, strains and plastic strain.

## Read results back

Run the deck in CalculiX. Then, without changing the part or the study, press {{ui:Read CalculiX results (.frd)}} and pick the .frd file CalculiX wrote. The result shows the displacement (and stresses, when the file has them) on the same mesh; the plots work as for PartCraft's own result. A file from another mesh is refused: write the deck again and rerun CalculiX.
