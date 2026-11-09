---
title: Factory floor: send CAM programs to the job queue
summary: Hand a program posted in Manufacture to the factory job queue in ModelCraft, or save it as a job file.
section: tasks
order: 10
keywords: factory, job queue, cam, post, g-code, nc program, send to machine
---

## Hand a program to the factory

1. Open {{ui:Settings}}, then {{ui:Add-ons}}, and switch on {{ui:Factory floor}}. A {{ui:Factory floor}} tab appears in the right panel.
2. In {{ui:Manufacture}}, post the program as usual ({{ui:Post…}} or {{ui:Send to a machine…}}). The tab shows the last program posted, and for which control.
3. Choose {{ui:Add to the factory job queue}}. In ModelCraft's {{ui:Factory floor}} panel, {{ui:Take jobs from PartCraft}} brings it into the queue, where you pick the machine and send it.

The hand-over works between apps open in the same browser. Otherwise use {{ui:Save as a job file}} and, in ModelCraft, {{ui:Open a job file…}}.

This tab never sends a program or starts a machine. Sending is done from the queue through CadCraft Studio's Send to a machine, which uploads the file; you start it at the machine. Not a safety system.
