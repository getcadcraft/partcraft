---
title: What's new in 0.8 and 0.8.1
summary: PartCraft 0.8 adds live analysis while you edit, a What breaks first check, yielding and contact studies with deck files for an outside solver, motion studies for assemblies, a Surfaces workspace for freeform surfaces, parts sized from physics in the Engineer workspace, photo-to-sketch, printing exports, nested sheets to G-code and drawings that dimension their holes. 0.8.1 fixes a full-screen cursor freeze.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, yield, plastic strain, contact, calculix, motion study, clearance, surfaces, nurbs, fair, hull, zebra, engineer, generator, generated body, sketch from a photo, scale for printing, split for printing, shrinkage, nested sheets, g-code, drawing, dimension holes, assistant, mcp, languages, toolbar rows
---

This is what changed in PartCraft 0.8 and 0.8.1, compared with 0.7. The simulation answers while you edit and tells you what breaks first, assemblies get motion studies, and new workspaces make freeform surfaces and parts sized from physics. 0.8.1 is a small fix release.

## New

### Simulation

- **Update while I edit.** Tick {{ui:Update while I edit}} in the Solve block and the answers follow your edits. Change a dimension, a load or the material and a quick answer, made with elements four times larger, appears at once; when you stop for about a second, the study's own refined answer replaces it. The results say which one you are looking at. On a steel cantilever the quick answer was within 1 % on deflection and about 4 % on stress of the refined one. See [Check stress and deflection](topic:simulation#update-while-you-edit-live).
- **What breaks first.** For a static or buckling study, {{ui:What breaks first?}} in the **Break it** block scales the loads until the part gives way. It lists, worst first, the load factor to first yield (with a red marker where the stress peaks) and the load factor to buckling. A factor under 1 means the part already gives way as loaded, and Problems shows an error. The factors come from a linear study, so they are only as good as it is. See [Check stress and deflection](topic:simulation#find-out-what-breaks-first-break-it).
- **Yielding and contact.** Two more study types: a nonlinear one where the material follows its straight line to the yield stress and then a flatter slope, with plastic strain plotted, and a contact one where separate pieces push on each other (frictionless) or stay stuck (bonded). A load step that cannot settle, or pieces that sink too far into each other, show in the Problems panel. Friction, large sliding, large rotations, large deflections and fatigue are not solved. See [Check stress and deflection](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks for CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} saves the study for CalculiX, a separate program you install and run yourself; {{ui:Export}} › {{ui:CalculiX results (.frd)}} reads its result file back onto the same mesh. PartCraft never starts that program, and it says so if the part changed since the deck was saved.

### Assemblies

- **Motion studies.** {{ui:Assembly}} › {{ui:Motion}} drives one joint's value over a time you give (constant speed, eased, sine, or out and back), places the assembly at each step with its joints and closed loops, and reports what clashes and how close parts come. {{ui:Add a point}} plots a point's position, speed and acceleration, the joint's value and the clearance against time; {{ui:Save CSV}} and {{ui:Save plot}} write them out. After {{ui:Run}}, the Step through the run bar moves the assembly to any step. The study's settings are saved in the assembly file. Speed and acceleration come from the recorded positions, so use more steps if a sharp peak reads low. See [Check an assembly for clashes and motion](topic:check-assembly#a-motion-study).

### Surfaces and parts from physics

- **A Surfaces workspace.** Choose {{ui:Surfaces}} in the {{ui:Workspace}} box for NURBS curves and surfaces beside the part: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} and {{ui:Zebra}}, with continuity (G0, G1 or G2) measured on the exact surfaces and an edge that is worse than you asked for listed in Problems with a Match fix. {{ui:Fair}} measures hull lines for inflections and curvature jumps and rebuilds the unfair ones within your tolerance. Surfaces are saved in the part file and do not change the part's features. See [Freeform surfaces (NURBS)](topic:nurbs-surfaces).
- **The Engineer workspace.** Choose {{ui:Engineer}} in the workspace switcher, pick a generator and click {{ui:New}}: a script sizes a part from what it must do (heat to move, flows, pressure, material, printing process) with textbook formulas and builds it, then gives back the numbers it used with their sources, its manufacturing checks and files for analysis tools. The same inputs give the same part on any computer. The generator is kept in the part, and opening a part never runs a script. See [Parts from physics: generators](topic:engineer-generators) and [Write a generator](topic:write-a-generator).

### Sketching, drawings and making

- **A sketch from a photo.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} traces a picture of a flat part on a plain ground (outline and holes) or a pen drawing into lines, arcs and circles. You give one length, check the preview and make the sketch. See [Sketching basics](topic:sketch-basics#a-sketch-from-a-photo).
- **Scale and split for printing.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} scales per axis without changing the part, for example by a shrinkage allowance. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} cuts a part too big for your bed into numbered pieces joined by pegs, keys, dovetails, dowel holes or magnet pockets. See [Print in 3D](topic:print-3d).
- **Nested sheets to G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} reads a nested DXF and makes one program per sheet through the post you choose: holes and cut-outs first, then the outlines. It does not plan lead-ins, the cutting order or shared edges. See [Nest flat parts on sheets](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Drawings that do more themselves.** {{ui:Sheet}} › {{ui:Automatic}} picks the smallest A-size sheet that holds the views at the largest standard scale up to 1:1. {{ui:Dimension the holes}} puts a centre mark on each hole, one callout per size and the positions from the view's lower-left corner. See [Make a drawing](topic:drawing-pdf).

### In every app

- **Languages.** The apps come in 54 languages. Those beyond English are machine drafts until a native speaker reads them.
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} chooses Wrap (as before), 2 rows or 1 row; a bar that does not fit scrolls sideways. PartCraft's Feature ribbon shows the most used tool large and tucks variants behind a split button.
- **Connect your AI.** Studio is the hub for connecting an assistant of your own to all eight apps, with read only, suggest or edit permission per app. A connected assistant can size a part from a sentence such as a bracket for a load, show its working and every check, and build it; it reports what it did not check (stress concentration, fatigue, creep in plastics). See [Use PartCraft with an AI assistant](topic:use-with-ai-assistants).

## Fixed in 0.8.1

- **Full-screen cursor freeze.** The hover pick is throttled now. The cause is our best reading and was not confirmed with the person who reported it.
- **Language at run time.** Studio and the packed editions can switch language while running; before, they were English only. This is not yet tested on every platform: tell us if the language does not change.

## Not in this version yet

- Connect your AI is not finished: one-click connect inside Studio, the hosted connector for browser AI, your own API key inside Studio and the published MCP package are not promised. Studio has no AI of its own.
- Studio is not code-signed: Windows may warn, and macOS asks for right-click then Open. See [Troubleshooting](topic:troubleshooting).
- Stack-ups are still one direction: see [Tolerance stack-ups](topic:tolerance-stackup).
- The rest is listed in [What is not built yet](topic:not-built-yet).

Earlier changes are in [What's new in 0.7](topic:whats-new-0-7).
