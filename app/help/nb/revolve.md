---
title: Roter et dreid emne
summary: Skisser en halv profil ved siden av en midtlinje, roter den til et rundt emne, velg akse og vinkel, og bruk en rotert utskjæring til riller.
keywords: roter, rotert tapp, rotert utskjæring, dreid emne, dreiebenk, aksel, akse, midtlinje, rille, vinkel, rotasjonskutt
from: 593b6929
---

{{ui:Roter}} snur en profil rundt en akse, som et emne laget i en dreiebenk: aksler, remskiver, flenser, knotter. Rotert utskjæring (i menyen {{ui:Mer}} i gruppen Funksjoner) snurrer en profil for å fjerne materiale, til riller og utsparinger.

## Roter en trinnet aksel

1. Skisser på **Frontplan**.
2. Trykk {{key:N}} for {{ui:Midtlinje}}. Start på origo og klikk et punkt rett til høyre, for eksempel 100 mm unna. Dette er aksen. Den er stiplet: konstruksjonsgeometri er ikke en del av profilen.
3. Trykk {{key:L}} for Linje. Tegn **halve** profilen over midtlinjen som én lukket sløyfe: start på midtlinjen, gå opp, ta et steg til siden, og gå tilbake ned til midtlinjen, og deretter langs den til start. Endene må møtes: sløyfen må være lukket.
4. Mål radiene (høyder over midtlinjen) og lengdene. En høyde på 10 over midtlinjen gir en diameter på 20.
5. Velg {{ui:Avslutt}}.
6. Velg {{ui:Roter}}. Akselen vises, en full omdreining.

Profilen må ligge på én side av aksen. Hvis den krysser: «Profilen krysser aksen. Hold den på én side av midtlinjen.» En profilkant kan ligge på aksen.

## Innstillinger

| Innstilling | Hva den gjør | Standard |
|---|---|---|
| **Operasjon** | Tapp (legg til materiale), Kutt (fjern materiale), Skjæring (behold overlappen) eller Nytt legeme | Tapp for {{ui:Roter}}, Kutt for {{ui:Mer}} › {{ui:Rotert utskjæring}} |
| **Vinkel (°)** | Hvor langt det skal snurre, fra like over 0 opp til 360 | 360 |
| **Akse** | Første midtlinje, eller en hvilken som helst linje eller midtlinje i skissen, listet som «Midtlinje 1 (l1)» eller «Linje 3 (l3)» | Første midtlinje |

En delvis vinkel gir en kile, som snurres fra skissplanet i én retning.

Hvis skissen ikke har en midtlinje og du lar **Akse** stå på Første midtlinje: «Tegn en midtlinje (en konstruksjonslinje) i skissen å rotere om.» Du kan også velge en vanlig linje i profilen som akse.

## Kutt en rille

1. Når akselen er bygget, åpne en ny skisse på **Frontplan** (samme plan som akselens skisse).
2. Tegn en midtlinje langs samme akse: start den på origo og hold den vannrett, slik at den får en H, eller skriv den med **Legg til etter koordinater** (for eksempel fra `0, 0` til `100, 0`). En ny skisse kan ikke feste seg til en annen skisses linjer.
3. Tegn en liten lukket rektangel som overlapper akselens kant der rillen skal være.
4. Velg {{ui:Avslutt}}, og deretter {{ui:Mer}} › {{ui:Rotert utskjæring}}.

## Roterte flater i sammenstillinger

En rotasjon har en akse som andre funksjoner og sammenstillinger kan bruke:

- et **Sirkulært** mønster bruker som standard den siste rotasjonens akse (se [Mønster- og speilfunksjoner](topic:patterns-mirror));
- i en sammenstilling starter et ledd mellom flater laget av rotasjoner som et rotasjonsledd, og **Sentrer på** tilbyr «Akse for Revolve1» (se [Bygg en sammenstilling](topic:build-assembly)).

## Ekte kurver og fasetter

PartCraft bygger en rotasjon med mesh-kjernen (statuslinjens merke sier «Mesh-kjerne»): runde former er flate fasetter, 64 per omdreining som standard, og volumene er litt under den sanne verdien (omtrent 0.16 % ved 64). Visningen og eksportene til STL, 3MF og STEP lages av de fasettene. Sett **Kurver** (klikk på tomt rom, og deretter i høyre panel) til Fin (128) eller Veldig fin (256) for jevnere flater. Ekte sylindre, kjegler og torus trenger en eksakt kjerne: ikke bygget ennå i denne versjonen. Se [Mesh-kjernen](topic:solid-kernels).
