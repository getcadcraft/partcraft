---
title: Views, looks, sections and the magnifier
summary: A manual keeps an ordered list of views. Each stores the camera, the exploded state, and for every part whether it is shown, ghosted, its opacity and colour, plus a style, a section or box cut-away and a magnifier.
section: tasks
order: 161
keywords: illustrate, view, camera, hide, ghost, isolate, opacity, colour, section, cut-away, magnifier, x-ray, line art style
---

## The scene and its views

What you see is the **scene**. Turn the model as in Design, then change how the parts look:

- Click a part to select it; {{key:Shift}}+click adds or drops one. Rows of the {{ui:Parts}} tree select too (a group row selects everything in it). {{ui:Select same part}} adds every copy of the part.
- {{ui:Hide}} ({{key:H}}), {{ui:Ghost}} ({{key:G}}: see-through and grey) and {{ui:Isolate}} ({{key:I}}: only these) act on the selection; {{ui:Show all}} brings everything back. The panel sets a part's opacity and colour.
- {{ui:Exploded view}} in the panel picks one of the design's exploded views and how far it is played.

{{ui:Add view}} saves the scene as a new view with a small picture. Click a view in the {{ui:Views}} list to go back to it; {{ui:Update view}} stores the scene in the view you went to. Views can be renamed (double-click), moved up and down, duplicated and deleted.

## Looks

The {{ui:Look}} section sets, for the scene and so for each view you save:

- {{ui:Style}}: shaded, shaded with outlines, flat colours, line art only, or x-ray.
- {{ui:Section plane}}: cuts away one side across X, Y or Z; the cut faces are filled. {{ui:Keep the other side}} flips it.
- {{ui:Box cut-away}}: cuts a corner out of the model to show inside. In the 3D view its cut faces are left open; in line art (Export) they are hatched.
- {{ui:Magnifier}}: a round lens that shows a zoomed detail, or the inside with every edge. Drag the lens to move it; {{ui:Aim the lens}} and click the point it should look at.

The live view always shows the camera straight on (orthographic). A view can still be saved as perspective; its pictures and line art use it.
