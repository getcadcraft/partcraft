---
title: Nettkjernen
summary: Denne versjonen av PartCraft bygger hver del med en nettkjerne som kjører i nettleseren din. Hva det betyr for runde flater, volumer og filer, hvordan du ser at den virker, og hvilke funksjoner som venter på en eksakt kjerne.
keywords: kjerne, nett, manifold, eksakt, b-rep, fasettert, kurver, opencascade, occt, avrunding trenger eksakt, ikke bygget, frakoblet, webassembly
from: 68d32d16
---

En geometrikjerne er motoren som gjør historikken din om til et volumlegeme. Denne versjonen av PartCraft har én: **nettkjernen** (manifold-3d). Den kjører på datamaskinen din som et lite WebAssembly-program og er klar et øyeblikk etter at appen åpnes. Ingenting om delen din sendes noe sted.

| | Nettkjerne |
|---|---|
| Runde former | Plane fasetter. **Kurver** i delpanelet angir hvor fine |
| Volumer og areal | Av det fasetterte volumlegemet, litt lave på runde deler |
| Skisser, ekstruder, skjær, roter, hull, mønstre, speil, referanseplan | Ja |
| Avrunding og fasing | På rette kanter mellom plane flater; avrundinger som møtes, gjæres |
| Skall og trekkvinkel | Skall åpner plane flater (eksakt veggtykkelse); trekkvinkel heller plane flater |
| Eksport | STL, 3MF, STEP (fasettert), tegnings-PDF og DXF |
| Tegningsvisninger | Tegnet fra fasettene, snittvisninger inkludert |
| Flater og kanter | Navngitt og kjent etter type (plan, sylinder, kjegle, kule, torus; rett, sirkel), hentet fra skissene: arbeidsområdene Simulering, Generativ og Produksjon, Mål, valg og hulltabellen bruker dem |

Brikken nær høyre ende av statuslinjen sier **Nettkjerne** mens den bygger delen din.

## Hva som venter på en eksakt kjerne

En eksakt (B-rep) kjerne beholder ekte sirkler, sylindre og kjegler, og glatte avrundinger på en hvilken som helst kant; sveip, loft, overflater, plateverk, ribber, flere legemer, STEP-import og eksakt STEP-eksport bygger alle på en slik. Tidligere lab-versjoner av PartCraft brukte OpenCascade til det. Lisensen (LGPL) passer ikke til denne utgivelsen, der hver app er Apache-2.0 og bruker bare bibliotek med tillatende lisens, så den er ikke med. Ingenting her har en dato.

Inntil videre sier disse funksjonene **Ikke bygget ennå** når du velger dem: statuslinjen gir grunnen, og verktøytipsene til knappene deres slutter med «ikke bygget ennå (trenger en eksakt kjerne)». [Hva som ikke er bygget ennå](topic:not-built-yet) lister hver av dem med hva du kan gjøre i stedet.

En del laget med dem i en tidligere versjon åpnes fortsatt. Disse funksjonene blir stående i historikken merket som ikke bygget (hold pekeren over en for å se grunnen), resten av delen bygges, og lagring beholder dem uendret.

## Runde flater og Kurver

Nettkjernen tegner en sirkel som en mangekant. **Kurver** i delpanelet angir hvor mange sider en hel sirkel får; flere sider ser glattere ut og måler nærmere den sanne verdien, og tar lengre tid å bygge. Volumer, areal og avstander fra {{ui:Mål}} er av dette fasetterte volumlegemet: for et hull eller en tapp er de litt mindre enn for den runde formen.

## Tilkoblet og frakoblet

Nettkjernen er en del av appens egen nedlasting. For å arbeide uten tilkobling lagrer du PartCraft for frakoblet bruk mens du er tilkoblet: velg {{ui:Lagre for frakoblet bruk}} i applinjen og vent til den sier **Klar frakoblet**. Detaljer: [Arbeide frakoblet](common:offline).
