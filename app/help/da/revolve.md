---
title: Drej en drejet del
summary: Skitsér en halv profil ved siden af en midterlinje, drej den til en rund del, vælg akse og vinkel, og brug drejet skær til riller.
keywords: drej, drejet tilføjelse, drejet skær, drejet del, drejebænk, aksel, akse, midterlinje, rille, vinkel, drejeskær
from: 593b6929
---

{{ui:Drej}} spinder en profil om en akse, som en del lavet på en drejebænk: aksler, remskiver, flanger, knopper. Drejet skær (under menuen {{ui:Mere}} i gruppen Features) spinder en profil for at fjerne materiale, til riller og udsparinger.

## Drej en trinvis aksel

1. Skitsér på **Forplan**.
2. Tryk {{key:N}} for {{ui:Midterlinje}}. Start i origo, og klik et punkt lige til højre, fx 100 mm ude. Dette er aksen. Den er stiplet: konstruktionsgeometri er ikke en del af profilen.
3. Tryk {{key:L}} for Linje. Tegn den **halve** profil over midterlinjen som én lukket løkke: start på midterlinjen, gå op, gå et trin til siden, og gå tilbage ned til midterlinjen og derefter langs den til start. Enderne skal mødes: løkken skal være lukket.
4. Mål radierne (højder over midterlinjen) og længderne. En højde på 10 over midterlinjen giver en diameter på 20.
5. Vælg {{ui:Afslut}}.
6. Vælg {{ui:Drej}}. Akslen vises, en fuld omgang.

Profilen skal blive på den ene side af aksen. Hvis den krydser: »Profilen krydser aksen. Hold den på én side af midterlinjen.« En profilkant må ligge på aksen.

## Indstillinger

| Indstilling | Hvad den gør | Standard |
|---|---|---|
| **Operation** | Tilføj (tilføj materiale), Skær (fjern materiale), Skæring (behold overlappet) eller Nyt legeme | Tilføj for {{ui:Drej}}, Skær for {{ui:Mere}} › {{ui:Drejet skær}} |
| **Vinkel (°)** | Hvor langt der spinder, fra lige over 0 op til 360 | 360 |
| **Akse** | Første midterlinje, eller en hvilken som helst linje eller midterlinje i skitsen, opført som »Midterlinje 1 (l1)« eller »Linje 3 (l3)« | Første midterlinje |

En delvis vinkel giver en kile, der spinder fra skitsens plan i én retning.

Hvis skitsen ikke har en midterlinje, og du lader **Akse** stå på Første midterlinje: »Tegn en midterlinje (en konstruktionslinje) i skitsen at dreje om.« Du kan også vælge en massiv linje i profilen som akse.

## Skær en rille

1. Når akslen er bygget, åbn en ny skitse på **Forplan** (samme plan som akslens skitse).
2. Tegn en midterlinje langs samme akse: start den i origo, og hold den vandret, så den får en H, eller skriv den med **Tilføj efter koordinater** (fx fra `0, 0` til `100, 0`). En ny skitse kan ikke snappe til en anden skitses linjer.
3. Tegn et lille lukket rektangel, der overlapper akslens kant, der hvor rillen skal gå.
4. Vælg {{ui:Afslut}}, og derefter {{ui:Mere}} › {{ui:Drejet skær}}.

## Drejede flader i samlinger

En drejning har en akse, som andre features og samlinger kan bruge:

- et **Cirkulært** mønster bruger som standard sidste drejnings akse (se [Mønstre og spejlinger](topic:patterns-mirror));
- i en samling starter en led mellem flader lavet af drejninger som et drejeled (revolute), og **Centrér på** tilbyder »Akse for Revolve1« (se [Byg en samling](topic:build-assembly)).

## Ægte kurver og facetter

PartCraft bygger en drejning med mesh-kernen (statuslinjens chip siger »Mesh-kerne«): runde former er flade facetter, 64 pr. omgang som standard, og rumfanget er lidt under den sande værdi (ca. 0.16 % ved 64). Visningen og eksporterne STL, 3MF og STEP består af disse facetter: sæt **Kurver** (klik i tomt rum, og derefter i højre panel) til Fin (128) eller Meget fin (256) for glattere. Ægte cylindre, kegler og tori kræver en eksakt kerne: ikke bygget endnu i denne version. Se [Mesh-kernen](topic:solid-kernels).
