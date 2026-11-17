---
title: Design et BimCraft-element og gem det tilbage
summary: En del sendt fra BimCraft åbnes med bygningen omkring sig, grå og skrivebeskyttet. Ændr den, og gem den derefter tilbage, så BimCraft kan acceptere den nye form.
keywords: bimcraft, bim, element, send, gem tilbage, link, bygning, kontekst, naboer, understøtning, konsol, ifc, accepter
from: 0978fe53
---

## Hvad du skal gøre

Arbejd på en del, der kom fra en BimCraft-model, på dens plads i bygningen, og send den nye form hjem.

## Trin

1. I BimCraft vælger du et element og vælger {{ui:Dellinks}} › {{ui:Send til PartCraft}}. PartCraft åbner det som en ny del. Statuslinjen siger, at det er et BIM-element.
2. Elementerne omkring det (inden for 3 m) tegnes grå. De er der for at designe imod. Du kan ikke vælge eller ændre dem, og de gemmes ikke i delens fil.
3. Ændr delen ligesom alt andet: skær, tilføj, bor, spejl. Dens origo og akser er elementets egne, så delen går tilbage til, hvor den stod.
4. Vælg {{ui:Fil}} › {{ui:Eksportér}} › {{ui:Gem tilbage til BimCraft}}. Statuslinjen siger, hvilken revision du sendte.
5. I BimCraft vises elementet som ændret, indtil personen dér accepterer det.

## Hvad du bør se

- Delen beholder sin forbindelse i filen. Åbner du den senere, siger statuslinjen stadig, at det er et BIM-element. Den grå bygning kommer tilbage, mens browseren stadig har den pakke, delen blev sendt med.
- Gemmer du tilbage igen, sendes revision 2, 3 og så videre. BimCraft beholder den nyeste.

## Godt at vide

- Formen sendes tilbage som et mesh i millimeter, i elementets egne akser. Features bliver i PartCraft.
- {{ui:Gem tilbage til BimCraft}} gør intet for en del, der ikke kom fra BimCraft.
- En del uden et massivt legeme endnu har intet at sende.
- Begge apps skal være åbne i samme browser: intet uploades, de to sider sender elementet mellem sig.
