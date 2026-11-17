---
title: What's new in 0.9 (earlier)
summary: PartCraft 0.9 adds fillets between faces and thickening into solids, assemblies of thousands of parts, a Documents vault with revisions, a Solid FEM stress add-on, ten arc methods, UK steel sizes, a Print stage and resin printing add-ons.
section: start
order: 6
keywords: whats new 0.9, earlier release, whats new, what's new, release notes, changelog, 0.9, fillet between faces, rolling ball, fillet several edges, thicken, solid from surfaces, step shell, iges solid, scan fillets, large assembly, lightweight display, 20000 parts, documents, vault, check out, revision, release, where used, rhino link, grasshopper, 3dm, cursors, factory floor, job queue, solid fem, finite element, von mises, natural frequency, arc methods, 3-point arc, uk steel sections, blue book, print stage, resin, goo, ctb, bed, lay flat, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
---

This is what changed in PartCraft 0.9, compared with 0.8.1. Freeform surfaces now close up into solids, assemblies of thousands of parts stay usable, a Documents vault keeps revisions, and a Solid FEM add-on checks stress in a part. Each item says where to find it.

## New in 0.9.1

- **Exact STEP export.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} and {{ui:STEP AP214 (exact solid)}} now work. Holes, bosses, fillets, cones, spheres and tori are written on their true surfaces with true circles as edges, so another CAD or CAM program can pick a hole as a hole. Spline sides, modelled threads and imported meshes stay flat facets in the same solid. See [Export for printing, STEP and DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exact STEP out.** A STEP file you open keeps its own flat faces, cylinders, cones, spheres and tori, so {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} writes them back as true surfaces instead of facets: a supplier's beam with bolt holes goes out with the same faces it came in with, plus whatever you cut into it. Spline, swept and revolved faces of the file stay facets, and so do bodies from STL, OBJ and 3MF. Open the STEP file again for a part saved earlier. See [Open a STEP file and build on it](topic:import-step).
- **True circles in the face DXF.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} with a flat face picked now writes round holes as circles, with the hole's own center and radius, for a laser, plasma or waterjet table. Other round edges are still facets.
- **Exact STEP for the shop.** In {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} writes the part with its origin at the setup's work origin and Z along the tool axis, the coordinates the G-code uses. See [Make toolpaths and G-code](topic:manufacture#exact-step-for-the-shop).

## New

### Surfaces and solids

- **Fillet between faces.** Choose {{ui:Surfaces}} in the {{ui:Workspace}} box, then {{ui:Fillet between faces}}. Pick the two faces of one solid, type the radius (and {{ui:Radius at the end (mm, 0 = the same)}} for a radius that changes along the edge). The result line says how far the fillet is from the ideal rolling ball, and a radius that does not fit is refused with the face named. {{ui:Fillet several edges}} rounds many edges in one step; tick {{ui:Corners (sphere patch where three meet)}} for a sphere corner where three rounded edges of flat faces meet. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **Thicken into a solid.** {{ui:Thicken into a solid}} in the same workspace gives a surface a thickness; {{ui:Other side}} grows it the other way. A fold or self-crossing is refused with the surface and the place named.
- **Solids from surfaces.** Trimmed surfaces can be joined with union, subtract and intersect and baked into the part as one undo step. STEP writes a solid as one closed shell and IGES as one solid; both read back as a solid. If the faces do not pair up edge for edge, the file gets separate faces and the status line says so. Solids can also be made in the node editor; see [Node editor](topic:nodes).
- **Rim and variable fillets in scans.** When you fit surfaces to a scan, rim fillets (tori) and variable-radius fillets along a fairly straight edge are looked for too and listed with their radius. It is tested on made-up scans only.

### Assemblies, documents and links

- **Large assemblies.** Parts that are copies share one mesh, and {{ui:Views}} › {{ui:Lightweight display}} draws boxes so the view keeps moving (it switches on by itself for very large assemblies; picking and joints still use the real parts). The part tree shows its first rows and a {{ui:Show 700 more}} button for the rest. Assembly files may hold up to 50,000 instances and 100,000 joints. See [Build an assembly](topic:build-assembly).
- **Documents.** {{ui:Documents…}} in the **File** group opens a dialog over a project folder: check out and check in, revision letters, states (work in progress, for review, released, obsolete), history, where-used and bill of materials. See [Documents and revisions (the vault)](topic:documents-walkthrough).
- **Live Rhino link.** One script, `cadcraft_link.py`, watches a Rhino or Grasshopper document and pushes only what changed into PartCraft, where an imported feature rebuilds on the new shape. It is one way and needs Studio. See [Live .3dm link](topic:live-3dm-link).
- **See each other's cursors.** In a shared session each person's cursor shows with their name and the feature they have selected. See [Work live with others](topic:work-live).
- **Factory floor.** Switch on the Factory floor add-on in {{ui:Settings}} › {{ui:Add-ons}}. After you post a program in {{ui:Manufacture}}, its tab can {{ui:Add to the factory job queue}} or {{ui:Save as a job file}}. It never sends or starts a machine.

### Analysis and parts

- **Solid FEM add-on.** Switch on {{ui:Solid FEM}} in {{ui:Settings}} › {{ui:Add-ons}} (it is off until you do) and a {{ui:Solid FEM}} tab appears in the right panel. {{ui:Mesh the part}}, pick fixed faces and loads in the 3D view, {{ui:Solve}}, and draw displacement, von Mises stress or a mode shape with {{ui:Show on the model}}. See [Solid FEM: a stress check](topic:solid-fem-check).
- **Arc in sketches, ten ways.** The arrow beside {{ui:Arc}} in the sketch toolbar lists 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length and Continue. See [Draw an arc by ten methods](topic:sketch-arc-methods).
- **UK steel sizes.** Weldments can use 976 UK sections (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); type a size such as `305x165x40 UB`. See [Structural members](topic:structural-members).

### Printing

- **Print stage.** The {{ui:Print stage}} button in the toolbar (add-on 3D Print, on by default) puts your part's bodies on a dashed bed: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, then {{ui:Send to 3D printer}} over USB, Klipper (Moonraker), OctoPrint or PrusaLink. Nothing is sent until you confirm, and your part is never changed. For an STL or 3MF file instead, see [Get a part ready for 3D printing](topic:print-3d).
- **Resin printing.** Add-ons in {{ui:Settings}} › {{ui:Add-ons}}, all off until you switch them on: a resin slicer, an exposure test, and file formats Elegoo GOO, SL1, Chitubox CBDDLP/CTB and Anycubic. Slicing runs on a worker thread, so the page stays responsive.

## In every app

- Every hover hint is a Bootstrap tooltip.
- The start tip has a close button; it stays closed.
- A panel's row of tabs that does not fit scrolls sideways instead of being cut off.
- The browser tab shows the open document's name before PartCraft | CadCraft.
- {{ui:Settings}} shows the workspace {{ui:Layout}} as a drop-down of choices, and the language box lists every language the build has.
- Weight and Temperature are unit kinds in the Units settings.

## Fixed

- The sketch Arc menu now lists every method.
- The add-on toolbar and the browser tab title were corrected on 2026-11-09.

## Honest limits

- Exact STEP was read back in OpenCascade (valid solids, volumes equal to the ones worked out by hand). It has not been opened yet in every CAD or CAM program, and an assembly is not written as exact STEP.
- Nothing has been printed on a real printer. Slicing, G-code and resin files were read back by our own programs or a stand-in printer; none of the resin formats was loaded on a printer, and printer sizes and exposures are starting points.
- Solid FEM is linear, isotropic and elastic, one material per part, with no contact, yielding or buckling. Stress at fixed faces and sharp corners depends on the mesh. It is a checking aid, not reviewed by an engineer.
- Large-assembly timings come from a server without a GPU; a full-detail frame of 20,000 parts still takes seconds there.
- Fillets work on pairs of faces; there is no general vertex blend and no fillet between faces that do not meet.
- The Rhino link has never run inside real Rhino or Grasshopper. Documents was tried by two programs on one folder, not by two people on a network share.
- Fitting surfaces to a real scan has not had its hand check. Languages other than English are machine drafts.
- Windows installers are not code-signed, and the macOS disk image is not notarized. See [Troubleshooting](topic:troubleshooting).

Earlier changes are in [What's new in 0.7](topic:whats-new-0-7).

## Earlier: 0.8 and 0.8.1

This is what changed in PartCraft 0.8 and 0.8.1, compared with 0.7. The simulation answers while you edit and tells you what breaks first, assemblies get motion studies, and new workspaces make freeform surfaces and parts sized from physics. 0.8.1 is a small fix release.

### New

**Simulation**

- **Update while I edit.** Tick {{ui:Update while I edit}} in the Solve block and the answers follow your edits. Change a dimension, a load or the material and a quick answer, made with elements four times larger, appears at once; when you stop for about a second, the study's own refined answer replaces it. The results say which one you are looking at. On a steel cantilever the quick answer was within 1 % on deflection and about 4 % on stress of the refined one. See [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **What breaks first.** For a static or buckling study, {{ui:What breaks first?}} in the **Break it** block scales the loads until the part gives way. It lists, worst first, the load factor to first yield (with a red marker where the stress peaks) and the load factor to buckling. A factor under 1 means the part already gives way as loaded, and Problems shows an error. The factors come from a linear study, so they are only as good as it is. See [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding and contact.** Two more study types: a nonlinear one where the material follows its straight line to the yield stress and then a flatter slope, with plastic strain plotted, and a contact one where separate pieces push on each other (frictionless) or stay stuck (bonded). A load step that cannot settle, or pieces that sink too far into each other, show in the Problems panel. Friction, large sliding, large rotations, large deflections and fatigue are not solved. See [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks for CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} saves the study for CalculiX, a separate program you install and run yourself; {{ui:Export}} › {{ui:CalculiX results (.frd)}} reads its result file back onto the same mesh. PartCraft never starts that program, and it says so if the part changed since the deck was saved.

**Assemblies**

- **Motion studies.** {{ui:Assembly}} › {{ui:Motion}} drives one joint's value over a time you give (constant speed, eased, sine, or out and back), places the assembly at each step with its joints and closed loops, and reports what clashes and how close parts come. {{ui:Add a point}} plots a point's position, speed and acceleration, the joint's value and the clearance against time; {{ui:Save CSV}} and {{ui:Save plot}} write them out. After {{ui:Run}}, the Step through the run bar moves the assembly to any step. The study's settings are saved in the assembly file. Speed and acceleration come from the recorded positions, so use more steps if a sharp peak reads low. See [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

**Surfaces and parts from physics**

- **A Surfaces workspace.** Choose {{ui:Surfaces}} in the {{ui:Workspace}} box for NURBS curves and surfaces beside the part: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} and {{ui:Zebra}}, with continuity (G0, G1 or G2) measured on the exact surfaces and an edge that is worse than you asked for listed in Problems with a Match fix. {{ui:Fair}} measures hull lines for inflections and curvature jumps and rebuilds the unfair ones within your tolerance. Surfaces are saved in the part file and do not change the part's features. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **The Engineer workspace.** Choose {{ui:Engineer}} in the workspace switcher, pick a generator and click {{ui:New}}: a script sizes a part from what it must do (heat to move, flows, pressure, material, printing process) with textbook formulas and builds it, then gives back the numbers it used with their sources, its manufacturing checks and files for analysis tools. The same inputs give the same part on any computer. The generator is kept in the part, and opening a part never runs a script. See [Parts from physics: generators](topic:engineer-generators) and [Write a generator](topic:write-a-generator).

**Sketching, drawings and making**

- **A sketch from a photo.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} traces a picture of a flat part on a plain ground (outline and holes) or a pen drawing into lines, arcs and circles. You give one length, check the preview and make the sketch. See [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale and split for printing.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} scales per axis without changing the part, for example by a shrinkage allowance. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} cuts a part too big for your bed into numbered pieces joined by pegs, keys, dovetails, dowel holes or magnet pockets. See [Print in 3D](topic:print-3d).
- **Nested sheets to G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} reads a nested DXF and makes one program per sheet through the post you choose: holes and cut-outs first, then the outlines. It does not plan lead-ins, the cutting order or shared edges. See [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Drawings that do more themselves.** {{ui:Sheet}} › {{ui:Automatic}} picks the smallest A-size sheet that holds the views at the largest standard scale up to 1:1. {{ui:Dimension the holes}} puts a centre mark on each hole, one callout per size and the positions from the view's lower-left corner. See [Make a drawing](topic:drawing-pdf).

**In every app**

- **Languages.** The apps come in 54 languages. Those beyond English are machine drafts until a native speaker reads them.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} chooses Wrap (as before), 2 rows or 1 row; a bar that does not fit scrolls sideways. PartCraft's Feature ribbon shows the most used tool large and tucks variants behind a split button.
- **Connect your AI.** Studio is the hub for connecting an assistant of your own to all eight apps, with read only, suggest or edit permission per app. A connected assistant can size a part from a sentence such as a bracket for a load, show its working and every check, and build it; it reports what it did not check (stress concentration, fatigue, creep in plastics). See [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

### Fixed in 0.8.1

- **Full-screen cursor freeze.** The hover pick is throttled now. The cause is our best reading and was not confirmed with the person who reported it.
- **Language at run time.** Studio and the packed editions can switch language while running; before, they were English only. This is not yet tested on every platform: tell us if the language does not change.

### Not in this version yet

- Connect your AI is not finished: one-click connect inside Studio, the hosted connector for browser AI, your own API key inside Studio and the published MCP package are not promised. Studio has no AI of its own.
- Studio is not code-signed: Windows may warn, and macOS asks for right-click then Open. See [Troubleshooting](topic:troubleshooting).
- Stack-ups are still one direction: see [Tolerance stack-ups](topic:tolerance-stackup).
- The rest is listed in [What is not built yet](topic:not-built-yet).

Earlier changes are in [What's new in 0.7](topic:whats-new-0-7).
