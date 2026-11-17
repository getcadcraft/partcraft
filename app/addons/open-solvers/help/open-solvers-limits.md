---
title: Open solver cases: units, what was checked and what was not
summary: The unit set of each kind of case, what the written files were checked against, what has never been run, and what the add-on does not do.
section: trouble
order: 2
keywords: open solver cases, units, limits, checked, not run, licence, gpl, openfoam, code_aster, openradioss, vtk, symmetry
---

## Units

PartCraft models are in millimetres. Each case says its units in every file header and in its README.

- Flow: metres, kilograms, seconds. Coordinates are written × 0.001. Pressure in the files is kinematic (pressure ÷ density); the forces file is in newtons.
- Stress and frequencies: mm, tonne, s, so forces are N and stresses MPa. Density is written in t/mm³ (kg/m³ × 1e-12), gravity as 9810 mm/s². A force on faces is written as force ÷ area.
- Heat: mm, W, °C. Conductivity W/(m·K) × 0.001, heat flux and film coefficient × 1e-6.
- Drop and impact: tonne, mm, s. Speeds in mm/s (m/s × 1000); the run time you type in ms is written in s.

## What was checked

For each kind, a strict reader written for the tests reads every written file back: brackets and keywords, every patch or group named anywhere exists everywhere it must, node and element counts, node order and orientation of every element on the geometry, the fixed column widths of the impact decks, and the unit conversions against hand calculations. The keywords were compared with the tutorial and test cases of each project as read on 11 November 2026: OpenFOAM v2412 and OpenFOAM-13, code_aster 17, and OpenRadioss input version 2022.

## What was not

- No case from this add-on has yet been run in OpenFOAM, code_aster or OpenRadioss. A file can be well formed and still not converge, or need a setting changed for your version.
- The result readers were tested on small files written by hand in the documented layouts, not on real solver output. The code_aster listing layout is described by its manual as not fixed.
- The sign rule of an imposed heat flux in code_aster was not confirmed: check it before you rely on a flux face.
- Which way a tetrahedron must be ordered for OpenRadioss, and the side of its rigid floor that acts, were read from its source and guide, not seen in a run.

## What it does not do

- It does not add, download or start the solvers. They are separate programs under their own licences (OpenFOAM and code_aster: GNU GPL version 3 or later; OpenRadioss: GNU AGPL version 3 or later). CadCraft only writes text files for them and reads text files they write.
- Flow: steady turbulent (k-omega SST with wall functions) and transient laminar only; incompressible; one fluid; no heat, no moving parts. A face picked as symmetry is written as a slip patch, which is the same thing on a flat face.
- Stress: linear elastic, one material, fixed faces only (no sliding supports), no contact.
- Impact: one part, one material, tetrahedra only; Johnson-Cook numbers are yours to type.
- Results: surfaces only (no cut plane through a flow), read from legacy ASCII VTK files and the code_aster text listing. A big surface is thinned to fit the display.
- Assemblies: the part in the window only.
