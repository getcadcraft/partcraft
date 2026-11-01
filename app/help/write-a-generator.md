---
title: Write a generator
summary: A generator is a CraftScript, Lua or Python script with comment lines that declare its inputs. How the inputs become a form, what the script must leave behind (body, sheet, problems), a small complete example, and how to open your script as a generator.
section: tasks
order: 151
keywords: generator, write, script, craftscript, header, input, @input, @generator, body, sheet, problems, to_body, mfg_check, data sheet, example, lattice, field
---

A generator is an ordinary script ([CraftScript](topic:craftscript), Lua or Python) with a few comment lines at the top. PartCraft reads the comments and makes the form; your script reads the inputs as variables that are already set.

## The header

Put these in comment lines (`%` in CraftScript, `--` in Lua, `#` in Python):

```
% @generator Heat exchanger
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Mass flow"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Surface"
% @input solid: = true
% @input note: = "text"
```

An input is `name: unit = default`, then optionally a range `[min .. max]` (numbers are held inside it), a list of choices `{a, b, c}` and a label in quotes. The unit is only a label for the form: **the value arrives in that unit**, so a script that wants SI converts it, and `to_si(value, 'kg/s', 'kg/s')` also checks that the unit means what you think. A name is letters, digits and underscore; `body`, `sheet` and `problems` are taken.

## What the script leaves

| Variable | What |
|---|---|
| `body` | **Required.** A surface mesh, usually from `[body, info] = to_body(field, h)`. It is repaired and checked when the run ends. |
| `sheet` | Optional. A struct: each field a number or text, or a struct with `value`, `unit`, `ref` and `note`. It becomes the data sheet. |
| `problems` | Optional. The `problems` cell from `mfg_check(field, 'sls', struct(), h)`, or your own entries. They go to the checks and to the Problems list. |

## A complete small example

```
% A hollow cube with a wall.
% @generator Hollow cube
% @input side: mm = 12 [4 .. 40] "Side"
% @input wall: mm = 1.5 [0.5 .. 5] "Wall"
% @input h: mm = 0.5 [0.25 .. 2] "Voxel size"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'of the mesh');
```

It makes a closed box, and the check reports its sealed inside as an error for a powder process. Make the voxel size `h` at most a third of the thinnest wall you want: below about three voxels a wall is not reliable.

## Fields

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (a solid of revolution from a profile), `tpms` (gyroid, Schwarz P and diamond surfaces, with a cell size and wall that can change across the part), `lattice` and `lattice_beams`, `along` (a round channel along a path), the booleans `field_union`, `field_intersect`, `field_subtract`, the smooth `field_blend`, and `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` gives the signed distance at points (negative inside), `field_voxel` gives voxels for the solvers. [Fields](topic:fields) explains what they are.

Limits worth knowing: a sheet wall thicker than about a quarter of the cell closes the channels; a feature thinner than about three voxels can pinch; `along` joins round cones, so a radius that changes fast leaves a bulge (use `field_revolve` for a profile).

## Open your script as a generator

In the {{ui:Engineer}} workspace click {{ui:Open}} and pick the file. A script with no `@generator` or `@input` line is refused: there would be nothing to set. The generator is kept in this browser (up to 20) and {{ui:Remove}} deletes it. A body started from it carries a copy of the script, so the part does not depend on it.

A file can also hold several generators: a JSON bundle `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
