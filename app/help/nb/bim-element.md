---
title: Tegn et BimCraft-element og lagre det tilbake
summary: En del sendt fra BimCraft åpnes med bygningen rundt seg, grå og skrivebeskyttet. Endre den, og lagre den tilbake slik at BimCraft kan godta den nye formen.
keywords: bimcraft, bim, element, send, lagre tilbake, lenke, bygning, kontekst, naboer, støtte, konsoll, ifc, godta
from: 0978fe53
---

## Hva du gjør

Arbeid med en del som kom fra en BimCraft-modell, på plassen sin i bygningen, og send den nye formen tilbake.

## Fremgangsmåte

1. Velg et element i BimCraft og velg {{ui:Delelenker}} › {{ui:Send til PartCraft}}. PartCraft åpner det som en ny del. Statuslinjen sier at det er et BIM-element.
2. Elementene rundt (innenfor 3 m) tegnes grå. De er der for å designe mot. Du kan ikke velge eller endre dem, og de lagres ikke i delfilen.
3. Endre delen som vanlig: kutt, legg til, bor, speil. Origo og akser er elementets egne, så delen går tilbake dit den sto.
4. Velg {{ui:Fil}} › {{ui:Eksporter}} › {{ui:Lagre tilbake til BimCraft}}. Statuslinjen sier hvilken revisjon som ble sendt.
5. I BimCraft vises elementet som endret, til den som godtar det der.

## Hva du ser

- Delen beholder lenken i filen. Åpnes den senere, sier statuslinjen fortsatt at det er et BIM-element. Den grå bygningen kommer tilbake så lenge nettleseren fortsatt har pakken den ble sendt med.
- Lagrer du tilbake igjen, sendes revisjon 2, 3 og så videre. BimCraft beholder den nyeste.

## Bra å vite

- Formen sendes tilbake som et nett i millimeter, i elementets egne akser. Funksjonene blir i PartCraft.
- {{ui:Lagre tilbake til BimCraft}} gjør ingenting for en del som ikke kom fra BimCraft.
- En del uten volumlegeme har ingenting å sende.
- Begge programmene må være åpne i samme nettleser: Ingenting lastes opp. De to sidene sender elementet mellom seg.
