---
title: Open solver cases: set up here, run in an outside solver
summary: Add the Open solver cases add-on, pick faces, export a ready-to-run case folder for OpenFOAM, code_aster or OpenRadioss, run it on your own computer, and bring the results back onto the model.
section: start
order: 1
keywords: open solver cases, openfoam, code_aster, openradioss, cfd, flow, snappyhexmesh, case folder, export, zip, vtk, drop test, crash, explicit, modal, thermal, add-on, simulation
---

## What it is

Open solver cases is a PartCraft add-on. It comes with PartCraft, is free, and is off until you add it in {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}} › {{ui:Open solver cases}}. Its tab, {{ui:Solver cases}}, is then in the right panel.

It does three things: you set a study up on the part by picking faces, it writes a complete case folder as a .zip for an outside solver, and it reads the solver's result files back and draws them on the model. Three kinds of case:

- {{ui:Flow (for OpenFOAM)}}: air or water around the model, or through it.
- {{ui:Stress, frequencies or heat (for code_aster)}}: linear static, natural frequencies, steady heat.
- {{ui:Drop or impact (for OpenRadioss)}}: a drop onto a rigid floor, an impact, faces pushed at a speed. PartCraft does not solve this kind itself.

The solvers are separate programs. They are not part of CadCraft and nothing of them is included: you add them to your own computer yourself, from each project's own page (the panel lists them under {{ui:What you need on your computer}}, with each licence). CadCraft cannot start a program on your computer, so you run the solver yourself with the commands in the README of each case.

No case from this add-on has yet been run in the real solvers. The files are written to each project's published formats and checked for structure and units, but check a case before you rely on it. An analysis aid, not a design approval; your engineer reviews the results.

## The steps, for every kind

1. Open the part and the {{ui:Solver cases}} tab. Choose the {{ui:Kind of case}}.
2. Under {{ui:Faces}}, press an Add button (for example {{ui:Add fixed faces}} or {{ui:Add inlet}}), then click the faces in the 3D view. The face under the pointer lights up; click again to take one off. Press {{ui:Done picking}}. Type the value that goes with it. The small × removes an item.
3. Press {{ui:Export case (.zip)}}. The panel lists the files it wrote. If something is missing (no inlet, nothing holds the part) it says so and writes nothing.
4. Unzip the folder on the computer that has the solver and follow its README: it gives the exact commands and the units.
5. Back in PartCraft press {{ui:Import results}}, choose the result files, choose what to plot, and press {{ui:Show on the model}}. Blue is the lowest value, red the highest.

Every change is one undo step and the settings are saved with the part.

## A flow case

Choose which OpenFOAM the case is {{ui:Written for}}: the two lines of the program use a few different file names and keywords, and each file says which version it was matched to.

- {{ui:Around the model (wind tunnel)}}: the model is a body in a box of fluid. Set the speed, the flow direction and how far the box reaches upstream, downstream and to the sides (in model sizes). The box faces are the inlet, the outlet and slip sides. You need not pick anything; a {{ui:Named wall}} only gives some faces their own patch.
- {{ui:Inside: the model is the fluid space}}: model the fluid itself as a solid (the inside of the duct, not its walls). Add an inlet and an outlet and pick their faces; faces you do not pick are walls.

{{ui:What will be written}} shows the Reynolds number, the size of the fluid box, the number of background cells, the smallest cell, the point in the fluid the mesher needs (found and checked by PartCraft) and, for the turbulent model, the inlet values worked out from the intensity I and the length scale L: k = 1.5 (U I)² and ω = √k / (0.09^¼ L).

Run it: unzip, open a terminal where OpenFOAM is loaded, go into the folder, then `chmod +x Allrun` and `./Allrun`. The README lists the same commands one at a time (features, blockMesh, snappyHexMesh, checkMesh, the solver, foamToVTK). Results: choose the .vtk files of the wall patches from the VTK folder, and the forces text file under postProcessing/forces.

## A stress, frequency or heat study

Choose the study, the material (for heat, the thermal conductivity) and the faces: fixed faces, forces (a total in newtons spread over the faces), pressures (MPa, positive pushes in), or temperatures, heat fluxes and convection. {{ui:Copy from this part's study}} brings in the fixtures and loads of the part's Simulation study or Solid FEM settings. {{ui:Mesh the part}} makes the tetrahedral mesh (the export does it if you have not).

Run it: unzip, then `run_aster name.export` in the folder (`as_run name.export` with version 14 or older). Results: choose the .resu file. Keep the element size as it was when the case was written: the result is matched to the mesh by node number.

## A drop or impact run

Choose the elements, the material law (elastic, or Johnson-Cook with your own numbers: none are preset), the starting speed of the whole part, the rigid floor (which side it is on and the gap to it), gravity, self-contact, the run time and the number of result frames. A 1 m fall arrives at about 4.43 m/s.

Run it: unzip, then `starter_linux64_gf -i name_0000.rad -np 1` and `engine_linux64_gf -i name_0001.rad`. Turn each animation file into VTK with the solver's own tool, `anim_to_vtk_linux64_gf nameA001 > name_001.vtk`, then choose the .vtk files; several at once gives the frames.
