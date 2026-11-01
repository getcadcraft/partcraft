---
title: Data out: data sheet, fields and meshes
summary: Save a generated body's data sheet as JSON or PDF, its field as a VTK image (.vti) or an OpenVDB level set (.vdb) and its surface as a VTK mesh (.vtu) for ParaView and other analysis tools, and the mesh as a 3MF carrying the generator's data. The same part always writes the same files.
section: tasks
order: 153
keywords: export, data sheet, json, pdf, vti, vtu, vtk, paraview, 3mf, field, signed distance, fea, cfd, metadata, openvdb
---

In the {{ui:Engineer}} workspace, or in the properties of a Generated body, open **Data out**:

| Button | File | For |
|---|---|---|
| Data sheet (JSON) | `.json` | Every input, every number with its unit and source, the checks, the mesh fingerprint. Sorted, no times: the same part gives the same file. |
| Data sheet (PDF) | `.pdf` | The same on paper, over as many pages as it needs. |
| Field (.vti) | `.vti` | The part as a signed distance (negative inside) and an inside mask on a grid of points: a VTK image file for ParaView and tools built on VTK. It is built from the body's surface at the voxel size of the generator's inputs, so it takes a moment, and a body over 400 000 triangles is too big for the page: save the field from a script (`field_bake`) instead. |
| Level set (.vdb) | `.vdb` | The same field as an OpenVDB level set: a sparse tree that keeps only the thin band of voxels around the surface, for tools that read OpenVDB (renderers, simulation and 3D programs). Voxel size and units are the generator's (millimetres), the narrow band is the active part, inside is negative. Built from the surface like the `.vti`, with the same 400 000-triangle limit; a file that would be over 1.5 GB is refused (use a larger voxel size). The file is OpenVDB format 224, uncompressed apart from OpenVDB's own active-value packing, so any OpenVDB reader opens it. |
| Surface (.vtu) | `.vtu` | The triangles, with each one's area and normal. |
| 3MF with generator data | `.3mf` | The mesh in millimetres for a slicer, with the generator, its inputs and (for a graded lattice) its wall range as metadata in the file. |

Nothing in these files comes from the clock or the machine, so you can compare two files byte for byte: a changed byte means a changed part.

## Not built yet

- A `.vti` or `.vdb` of the field at a voxel size other than the generator's own.
- Reading `.vdb` files in (only writing is built).
