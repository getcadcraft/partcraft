---
title: Design a BimCraft element and save it back
summary: A part sent from BimCraft opens with the building around it, grey and read-only. Change it, then save it back so BimCraft can accept the new shape.
section: tasks
order: 91
keywords: bimcraft, bim, element, send, save back, link, building, context, neighbours, support, bracket, ifc, accept
---

## What you'll do

Work on a part that came from a BimCraft model, in its place in the building, and send the new shape home.

## Steps

1. In BimCraft pick an element and choose {{ui:Part links}} › {{ui:Send to PartCraft}}. PartCraft opens it as a new part. The status bar says it is a BIM element.
2. The elements around it (within 3 m) are drawn grey. They are there to design against. You cannot pick or change them, and they are not saved in the part file.
3. Change the part like any other: cut, add, drill, mirror. Its origin and axes are the element's own, so the part goes back to where it stood.
4. Choose {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. The status bar says which revision you sent.
5. In BimCraft the element shows as changed until the person there accepts it.

## What you should see

- The part keeps its link in the file. Open it later and the status bar still says it is a BIM element. The grey building comes back while the browser still holds the package it was sent with.
- Saving back again sends revision 2, 3 and so on. BimCraft keeps the newest.

## Good to know

- The shape goes back as a mesh in millimetres, in the element's own axes. The features stay in PartCraft.
- {{ui:Save back to BimCraft}} does nothing for a part that did not come from BimCraft.
- A part with no solid yet has nothing to send.
- Both apps must be open in the same browser: nothing is uploaded, the two pages pass the element between them.
