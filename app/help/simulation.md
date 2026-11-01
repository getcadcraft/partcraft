---
title: Check stress and deflection (Simulation)
summary: Pick a material, fix faces, add forces, pressures or the part's own weight, solve, and read von Mises stress, displacement, safety factor, reactions and natural frequencies on the model, with what the method can and cannot tell you.
section: tasks
order: 142
keywords: simulation, FEA, live analysis, update while editing, break it, what breaks first, load factor, nonlinear, plasticity, yielding, plastic strain, bilinear, contact, contact pair, penalty, bonded, frictionless contact, CalculiX, .inp, .frd, finite element, stress, strain, von Mises, displacement, deflection, safety factor, factor of safety, yield, reaction, load, force, pressure, gravity, self weight, fixed, frictionless, support, constraint, material, steel, aluminum, titanium, ABS, PLA, nylon, natural frequency, modal, vibration, mesh, element size, tetrahedral, tetrahedra, tet mesh, voxel, mesh quality, principal stress, equivalent strain, error estimate, curved faces, holes, fillets, adaptive, adaptive refinement, automatic refinement, h-adaptive, convergence, mesh convergence, exact surface, sphere, cone, torus, spline, freeform
---

The Simulation workspace answers "will it bend or break under this load?" for the part you are modelling. It is a **linear static** study (small deflections, the material stays elastic) or a **natural frequency** study, solved on a mesh of quadratic tetrahedra that follows the part's faces (or, if you choose, of small equal cubes). It works on the named faces the mesh kernel gives the part (see [The mesh kernel](topic:solid-kernels)).

Choose **Simulation** in the **Workspace** box at the left of the toolbar. Your part is not changed; the study is saved inside the part file and every change to it can be undone.

## Set up a study

1. Press **New study** in the right panel.
2. Choose the **Material**. The panel shows its stiffness (E), Poisson's ratio, density and yield strength. The values are typical handbook figures; your supplier's certified values may differ.
3. Choose the **Mesh**:
   - **Tetrahedral (accurate)**, the default: 10-node tetrahedra whose outer faces lie on the part's faces, with curved edges on holes, fillets and other round faces. The nodes on flat, cylindrical, conical, spherical and toroidal faces, revolved and extruded faces and freeform (B-spline) faces sit on the exact surface; any other kind of face follows its display mesh, and the results table says how many faces did. The mesh is made finer by itself near curved faces, thin walls and sharp edges.
   - **Voxel cubes (fast)**: the part filled with equal cubes. Quick, but curved faces become steps. Studies saved before the tetrahedral mesh existed keep this.
4. Leave **Element size** empty for an automatic size (about 12,000 tetrahedra, or 20,000 cubes), or type one in millimetres. The panel shows about how many elements that makes before the finer spots are added. With tetrahedra, **Smaller elements on curved faces** (on by default) refines holes and fillets, where stress usually peaks.

### Refine automatically

With tetrahedra, a static or buckling study (without a thermal load), a natural-frequency study and a steady thermal study offer **Refine automatically (adaptive)**. Tick it and set:

- **Target error (%)**: solving stops when the estimated error is below it (1 % to start with).
- **Most passes**: the most solves it may run (5 to start with, at most 10).

Each pass solves, finds the elements with the largest estimated error, splits them (and as few neighbours as needed to keep the mesh whole), and solves again. New nodes on curved faces go onto the exact surface. The results then show a table and a chart with, for each pass, the elements, the unknowns, the estimated error and the peak stress (or temperature) and displacement (or heat flux), and a line saying why it stopped: the target was met, the passes ran out, the next mesh would be too big, or a pass failed (you then see the last good pass).

Read the estimate as an estimate. It (Zienkiewicz–Zhu, compared with exact answers it reads about 0.6 to 0.95 of the true error) measures the error over the **whole part**, so a peak stress at a hole or a fillet is usually still a little off when the estimate looks small: for a stress concentration, set the target under 1 % and watch the peak settle from pass to pass. At a sharp inside corner or the edge of a fixed face the true stress is infinite, so the estimate never gets there: the passes run out instead.

**Natural frequencies and buckling.** For a natural-frequency study the estimate covers every mode you asked for, each counted alike; the table and chart follow the first two frequencies. On a part with only flat faces a frequency can only go down from pass to pass (each mesh holds the one before it); curved faces also get closer to their true shape, which can move a frequency a little either way. For buckling the estimate covers the pre-stress and the buckling modes, and the table follows the load factors. Checked on a 100 × 10 × 10 mm steel bar: the first frequency settles from 812.4 to 811.9 Hz over four passes, 0.4 % under Euler–Bernoulli (which ignores shear), and the column's load factor within 0.5 % of Euler.

## Hold it and load it

Every study needs at least one support and, for stress, one load.

1. Press {{ui:Fixed}} in the toolbar. The new support is selected and waiting for faces: click the faces that are held still (click a face again to drop it). Press **Done picking** or {{key:Esc}} when finished. Blue cones mark the held faces.
2. Press {{ui:Force}} and click the faces the force acts on. In the panel type the **Total force** in newtons and choose its **Direction**: into the face, or along an axis. The force is shared over the picked faces by area. Orange arrows show it.
3. Press {{ui:Pressure}} for a pressure in MPa (N/mm²) pushing into the picked faces; a negative pressure pulls.

More kinds are in the panel's **Add** list: a **Frictionless face** (the face may slide along itself but not move away from it — use it for symmetry planes and smooth supports) and **Gravity** (the part's own weight, 9.81 m/s², in the direction you choose).

A support that leaves the part free to slide or spin is refused, saying which motion is left free.

## Solve and read the results

Press {{ui:Solve}}. The work runs in the background; **Stop** cancels it. Then:

- The part is coloured by **von Mises stress**; choose **Displacement** or **Safety factor** in **Show**. The legend gives the scale.
- Point at the part to read the values under the pointer.
- Tick **Deformed shape** to see the part bent (the motion is enlarged by the **Scale**; the real one is the table's).
- The table lists the largest stress and where it is, the largest displacement, the smallest **safety factor** (yield strength ÷ von Mises stress; below 1 the material yields), the applied load and the **reactions** at the supports (they balance the load), and the mesh used.

For **natural frequencies**, choose that **Type**, set how many **Modes**, and solve. Each mode shows its frequency and shape (shapes are scaled to 1 at their largest motion).

If you change the part, the results are marked out of date: solve again.

## Yielding and contact (nonlinear studies)

Two more study types go past "the material stays elastic":

- **Nonlinear (material yields)** follows the material's straight line up to its yield stress, then a flatter slope (**Slope after yield**, 1 % of E when left blank). The load goes on in **Load steps**; a step that does not settle is halved on its own. The results add **Plastic strain** to the plots and say how much of the load was carried. If a step still cannot settle, the study stops at the last good step and the ⚠ Problems panel says where: the part has run out of strength there (a collapse), or the steps are too big.
- **Contact between pieces** lets separate pieces of the part push on each other. Add a **Contact pair**, pick the faces of side A (the faces that press) with {{ui:Pick faces}}, then side B with {{ui:Pick side B faces}}. **Frictionless** pieces push, slide and separate; **bonded** pieces stay stuck. Each piece is meshed on its own, so a small gap between them is fine. Contact is a penalty method: the pieces sink into each other a little (the **penalty factor** × E ÷ element size sets how stiff the contact is). The table shows the deepest sinking in, and the Problems panel warns when it is more than 1 % of the element size: raise the factor or use smaller elements.

Both use the tetrahedral mesh. Friction, large sliding and large rotations are not solved here.

## Run it in CalculiX

**Export › CalculiX deck (.inp)** (or {{ui:Save a CalculiX deck (.inp)}} in the panel) saves the study as an input deck for CalculiX, a separate program you install and run yourself: the same mesh, material, supports, loads and contact pairs, in mm, N and MPa. Run it, then **Export › CalculiX results (.frd)** reads its result file back onto the same mesh and shows the displacement (and von Mises stress when the file has stresses). If you changed the part or the element size in between, the mesh is not the same and PartCraft says so: save a new deck.

## How far to trust it

PartCraft checks its solver against hand formulas (a cantilever's tip deflection PL³/3EI within 1 %, a bar's stretch PL/AE exactly, a cantilever's first frequency within 3 %, the stress around a hole in a plate). Still, keep these limits in mind:

- **The mesh.** With tetrahedra, PartCraft checks a cantilever's deflection and bending stress (within 0.3 %), the stress at a hole in a plate (Kt, within about 1 %), a thick tube under pressure (Lamé, within 0.3 %) and the first frequency (within 0.4 %). The table shows the **mesh quality** (the smallest and largest angles between element faces; below about 10° an element is poor) and an **estimated stress error**: if it is more than a few percent, solve again with a smaller element size, or let **Refine automatically** do it. On a plate with a hole and a bar with two edge notches, automatic refinement got within 1 % of the textbook Kt with about a sixth of the unknowns that making the whole mesh finer needed. With voxel cubes, a hole or a fillet is a staircase at the cube size, so stress there is rough.
- **Sharp inside corners and the edges of fixed faces have no true peak stress.** The value there keeps growing as the elements get smaller. Read stresses a little away from such places, or round the corner in the model.
- **Results to read.** Besides von Mises stress, displacement and safety factor, a tetrahedral study shows the **maximum and minimum principal stress** (tension and compression) and the **equivalent strain**. Tick **Show mesh** to see the elements.
- **Static studies are linear and elastic.** For yielding and contact use the nonlinear study types above; large deflections and fatigue are not solved. Heat, thermal stress and linear buckling are their own study types: see [Heat, thermal stress and buckling](topic:thermal-and-buckling).
- **Every material is the same in all directions.** 3D-printed plastics are weaker across their layers, often by a third or more.
- This is a lab build: check parts that matter another way.

## Update while you edit (Live)

Tick **Update while I edit** in the Solve block and the Simulation answers follow your edits. Change a dimension, a load, the material or the environment and a **quick answer** appears at once, made with elements four times larger than the study's; when you stop for a moment (a second or so) the study's own **refined answer** replaces it. The results say which one you are looking at ("Quick answer" or "Refined answer") and the element size. The quick answer is good for direction and size: on a steel cantilever it was within 1 % on deflection and about 4 % on stress of the refined one. Trust the refined one for numbers you will use. Static, natural-frequency, thermal and buckling studies work this way; Live is a view setting and is not saved in the part. A Solve you press yourself stays as it is until the next edit.

## Find out what breaks first (Break it)

For a static or buckling study, press **What breaks first?** in the **Break it** block. PartCraft scales the study's loads (forces, pressures and weight together) until the part gives way and lists, worst first, **the load factor to first yield** (the factor on today's loads at which the highest von Mises stress reaches the material's yield, with a red marker where it happens) and **the load factor to buckling** for the same supports and loads. A factor of 4.3 means the part takes 4.3 times its load before it yields; **a factor under 1 means it already gives way as loaded**, and that appears in the Problems list as an error (the weakest finding is shown as a note even when everything holds). The factors come from a linear study on tetrahedra at your element size, so they are as good as that study is: the stress at a fixed face or a sharp corner has no true peak (see below), and the yield factor will be on the cautious side there. Your assistant can run the same check with the `break_run` tool.

## Related

- [Heat, thermal stress and buckling](topic:thermal-and-buckling)
- [Grow a shape from loads (Generative)](topic:generative-design)
- [Measure distances, angles and mass](topic:measure)
- [What is not built yet](topic:not-built-yet)
