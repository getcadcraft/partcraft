---
title: Annotations that stay attached
summary: Labels, callouts, arrows, measurements, shapes and pictures. Annotations on a part are pinned to a point on it and move with the part when it explodes; their text can fill in the part's number, name, material and quantity.
section: tasks
order: 162
keywords: illustrate, annotation, label, callout, leader, arrow, turn arrow, measure, dimension, radius, angle, shape, picture, fields
---

Pick a tool in the {{ui:Annotate}} section of the panel, then click:

- **Label** and **callout**: click a point on a part. The text sits beside it with a leader to that point; drag the text to place it. Its text is edited in the panel and may use fields: `{number}`, `{name}`, `{material}`, `{description}`, `{qty}` and `{item}` (the balloon number) fill in from the part.
- **Arrows**: click a face; the arrow starts there and points out of the face. Straight, curved, or a **turn arrow** round the face's normal ("turn here"). Its length, style and direction are in the panel.
- **Measurements**: a distance (two points), an angle (three points, the corner second) or a radius (three points on a round edge). The value is taken from where the parts are assembled, so an explode does not change it.
- **Shapes and pictures**: a rectangle, ellipse, line or arrow pinned to the picture (two clicks), or a PNG or JPEG picture.

Annotations on a part move with it when it explodes or is moved in a view, and are not drawn while it is hidden. Each view shows the annotations in its list: the eye button in the panel shows or hides one in this view; the bin deletes it from the manual.
