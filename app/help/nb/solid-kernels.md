---
title: Nettkjernen
summary: Denne versjonen av PartCraft bygger hver del med en nettkjerne som kjører i nettleseren. Hva dette betyr for runde flater, volumer og filer, hvordan det sees at den fungerer, og hvilke funksjoner som venter på en eksakt kjerne.
keywords: kjerne, nett, manifold, eksakt, b-rep, fasettert, kurver, opencascade, occt, avrunding krever eksakt, ikke bygget, frakoblet, webassembly
from: f931645c
---

En geometrikjerne er motoren som gjør historikken om til et volumlegeme. Denne versjonen av PartCraft har én: **nettkjernen** (manifold-3d). Den kjører på datamaskinen som et lite WebAssembly-program og er klar et øyeblikk etter at appen åpnes. Ingen data om delen sendes noe sted.

| | Nettkjerne |
|---|---|
| Runde former | Flate fasetter. **Kurver** i delpanelet bestemmer hvor fine de er |
| Volumer og arealer | Av det fasetterte volumlegemet, litt lavt på runde deler |
| Skisser, ekstruder, kutt, roter, hull, mønstre, speil, referanseplan | Ja |
| Avrunding og fasing | På rette kanter mellom flate flater; avrundinger som møtes, blir geret |
| Skall og trekk | Skall åpner flate flater (eksakt veggtykkelse); trekkvinkel vipper flate flater |
| Eksport | STL, 3MF, STEP (eksakt: runde flater skrives på sine sanne overflater; eller fasettert), tegning som PDF og DXF |
| Tegningsvisninger | Tegnet fra fasettene, også snittvisninger |
| Flater og kanter | Navngitt og kjent etter type (flat, sylinder, kjegle, kule, torus; rett, sirkel), hentet fra skissene: arbeidsområdene Simulering, Generativ og Produksjon, Mål, valg og hulltabellen bruker dem |

Brikken nær høyre ende av statuslinjen sier **Nettkjerne** mens delen bygges.

## Hva som venter på en eksakt kjerne

En eksakt (B-rep)-kjerne beholder ekte sirkler, sylindre og kjegler, og glatte avrundinger på hvilken som helst kant. Sveip, lofter, overflater, plateverk, ribber, flere legemer og STEP-import med buede flater som beholdes eksakt, bygges på en slik. (Eksakt STEP-eksport venter ikke på den: nettkjernen kjenner hver flates sanne overflate fra skissen, og eksporten skriver dem.) Tidligere labbversjoner av PartCraft brukte OpenCascade til dette. Lisensen (LGPL) passer ikke til denne utgivelsen, der hver app er Apache-2.0 og bare bruker tillatt lisensierte biblioteker, så den er ikke med. Ingenting her har en dato.

Inntil da sier disse funksjonene **Ikke bygget ennå** når de velges: statuslinjen gir årsaken, og knappenes verktøytips ender med «ikke bygget ennå (krever en eksakt kjerne)». [Hva som ikke er bygget ennå](topic:not-built-yet) lister opp hver enkelt med hva som kan gjøres i stedet.

En del laget med dem i en tidligere versjon åpnes fortsatt. Disse funksjonene blir stående i historikken merket som ikke bygget (hold musepekeren over en for årsaken), resten av delen bygges, og lagring beholder dem uendret.

## Runde flater og kurver

Nettkjernen tegner en sirkel som en mangekant. **Kurver** i delpanelet bestemmer hvor mange sider en full sirkel får; flere sider ser glattere ut og måler nærmere den sanne verdien, og tar lengre tid å bygge. Volumer, arealer og avstander fra {{ui:Mål}} er av det fasetterte volumlegemet: for et hull eller en opphøyning er de litt mindre enn for den runde formen.

## Tilkoblet og frakoblet

Nettkjernen er en del av appens egen nedlasting. For å arbeide uten forbindelse lagres PartCraft for frakoblet bruk mens det er tilkoblet: velg {{ui:Lagre for frakoblet bruk}} i appfeltet og vent til det står **Frakoblet klar**. Detaljer: [Arbeid frakoblet](common:offline).
