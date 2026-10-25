---
title: Technical illustrations: line art, pictures and sheets
summary: Export any view as vector line art (SVG or PDF) with three line weights, hidden lines dashed or left out, hatched cut faces and optional fills, or as a PNG; put several views on one sheet.
section: tasks
order: 164
keywords: illustrate, line art, technical illustration, svg, pdf, png, hidden lines, silhouette, hatch, sheet, export
---

{{ui:Export}} in the {{ui:Out}} group opens the export dialog:

- {{ui:What}}: the scene as it is now, one view, or every view.
- {{ui:As}}: **PDF** or **SVG** (vector line art; both are written from the same drawing), **PNG of the line art**, or a **PNG picture of the 3D view** (up to 4096 pixels wide), and the [interactive 3D file](topic:illustrate-interactive).
- {{ui:Pages}}: one view per page, or every view on one sheet with its name under it. {{ui:Paper}}: A4, A3, Letter or Tabloid.
- {{ui:Hidden lines}}: dashed or left out. {{ui:Fills}}: as the view looks, none, flat colours or shaded. {{ui:Also draw soft edges}} adds detail lines.

The line art has three weights: outlines (silhouettes and open edges, and cut outlines), sharp edges, and detail lines. Cut faces of a section or box cut-away are hatched. Exploded views get chain-line trails from where each part sits; balloons, annotations, the parts list and the magnifier are drawn too.

Line art is worked out from the parts' shapes by the mesh method (the same one PartCraft's drawing sheet uses without the exact kernel), so curved faces are drawn by their facets, as the model holds them.

## Not built yet

- Pictures at the path tracer's quality (ModelCraft's renderer) are not offered here; PNG pictures are the 3D view's own look.
