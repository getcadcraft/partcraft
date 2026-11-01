---
title: Fields: shapes as distances
summary: What a field is (a shape stored as the distance to its surface), how to build one from primitives, booleans, lattices and minimal surfaces in a script, how it becomes a body, and why the same script always gives the same bytes.
section: reference
order: 95
keywords: field, signed distance, sdf, voxel, gyroid, tpms, lattice, boolean, offset, shell, blend, dual contouring, deterministic, watertight, manifold, brick
---

A **field** describes a shape by the distance from any point to its surface: negative inside, zero on the surface, positive outside. A sphere of radius 5 is "the distance to the centre minus 5". Combining shapes is arithmetic on distances: the union is the smaller of two, the intersection the larger, subtracting one shape from another is the larger of the first and minus the second. Growing a shape by 1 mm subtracts 1 from the distance; a hollow wall is the distance, folded over.

That is why fields are good for lattices, channels and graded walls: the surface of a gyroid is "the sine sum is zero", and a wall that thickens from 1 to 3 mm across the part is a number that changes across the part.

## From field to body

`to_body(field, h)` samples the field on a grid of points `h` millimetres apart, keeping only the points near the surface (a sparse grid of 8 × 8 × 8 bricks), and builds the surface by **dual contouring**: one vertex per surface cell, placed where the surface planes meet, so a sharp edge stays sharp to within a voxel. The surface is closed and every edge is shared by exactly two triangles; the report says so. A feature thinner than about three voxels can pinch, and then the report says the body is not a closed solid rather than hiding it.

The voxel size is the accuracy: the volume of a sphere at 25 voxels across is within a few hundredths of a percent, a wall is only as true as its voxels. The coarser the grid the faster it goes.

## Always the same bytes

A field has no clock and no random number. The sine and cosine of a gyroid, and every exponential, logarithm and power in the library, are computed from plain arithmetic so that Node, Chrome, Firefox and Safari give the same bits; the grid is walked in a fixed order, so the same script with the same inputs gives byte-identical meshes and data sheets, on any computer and over any number of worker threads. That is tested, including a browser against Node.

## Where to go next

[Write a generator](topic:write-a-generator) builds a part with fields; [The engineering library](topic:engineering-library) sizes it.
