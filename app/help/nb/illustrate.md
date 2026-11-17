---
title: Start en manual i Illustrate
summary: Arbeidsområdet Illustrate lager manualer fra designet: visninger, eksplosjonsvisninger i linjetegning med posisjonsballonger og en stykkliste, trinnvise instruksjoner, animasjoner og en 3D-fil kunden kan åpne uten CAD. En manual er en egen fil.
keywords: illustrate, manual, teknisk illustrasjon, dokumentasjon, eksplosjonsvisning, stykkliste, instruksjoner, partcraft-manual
from: e447e0ab
---

**Illustrate** er arbeidsområdet for dokumentene rundt et design: eksplosjonsvisninger med posisjonsballonger og en stykkliste, linjetegninger til manualer, trinnvise instruksjoner, animasjoner og en 3D-fil kunden kan åpne uten CAD. Velg {{ui:Illustrate}} i {{ui:Arbeidsområde}}-bryteren i begynnelsen av verktøylinjen.

En **manual** er en egen fil (`<name>.partcraft-manual.json`). Den tar vare på en kopi av hver dels form, produkttreet og delenes egenskaper, pluss en kobling tilbake til der de kom fra, slik at manualen kan redigeres mens designet fortsetter. Når designet endres, henter [Oppdater fra designet](topic:illustrate-update) endringene inn.

## Start en

Klikk {{ui:Ny}} i gruppen {{ui:Manual}}, og velg så:

- {{ui:Fra den åpne delen}}: delen som er åpen i Design.
- {{ui:Fra den åpne sammenstillingen}}: vises i stedet når en sammenstilling er åpen; dens deler, plasseringer, delenummer, materialer og eksplosjonsvisninger følger med.
- {{ui:Fra en sammenstillingsfil…}}: en lagret `.partcraft-asm.json`; PartCraft bygger delene først.
- {{ui:Fra en annen fil…}}: glTF (.glb, .gltf), OBJ, STL eller 3MF. Filens tre og navn beholdes, og kopier av én del (samme form plassert to ganger) blir én del med et antall. STL- og OBJ-filer oppgir ikke sin enhet, så det spørres etter den. STL-filer leses med Z opp; glTF og 3MF oppgir sin egen.

Mens en manual er åpen, viser Illustrate manualens egen kopi av delene; delen eller sammenstillingen som er åpen i Design, skjules til man går tilbake til Design.

## Lagre og åpne

{{ui:Lagre}} i gruppen {{ui:Manual}} (eller {{key:Mod+S}}) lagrer manualen; {{ui:Åpne}} åpner en. Hver endring i Illustrate er ett steg i manualens egen historikk: {{ui:Angre}} og {{ui:Gjør om}} virker på manualen mens Illustrate er åpent.

## Ikke bygget ennå

- STEP-filer åpnes ikke i {{ui:Fra en annen fil…}} ennå. Åpne STEP-filen i Design i stedet (den kommer inn som et volumlegeme: se [Åpne en STEP-fil](topic:import-step)) og start manualen med {{ui:Fra den åpne delen}}, eller lagre den som glTF, 3MF, OBJ eller STL.
- ModelCraft og BimCraft kan ennå ikke sende en modell rett til Illustrate: lagre den som glTF (.glb) og bruk {{ui:Fra en annen fil…}}.

Neste: [Visninger og utseende](topic:illustrate-views).
