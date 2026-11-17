---
title: Åbn en .3dm-model som massivt legeme
summary: Hent net, polyflader og blokke fra en .3dm-fil ind i PartCraft som ét massivt legeme, du kan skære i, tilføje til og skitsere på; hvor trekanterne kommer fra, og hvad der udelades.
keywords: 3dm, nurbs, polyflade, brep, flader, render-net, ekstrudering, blokke, import, net til massivt legeme, enheder, importeret legeme
from: 8ae9571b
---

PartCraft åbner `.3dm`-filer som **massive legemer**, på samme måde som den åbner et [STL-, OBJ- eller 3MF-net](topic:open-meshes). Legemet virker som ethvert andet massivt legeme: skær i det, tilføj til det, bor i det, lav mønstre af det, og skitsér på dets flade flader. Det har ingen historik af sin egen.

## Åbn filen

1. Vælg {{ui:Åbn}} eller tryk {{key:Mod+O}}, og vælg `.3dm`-filen. Eller slip den på 3D-visningen.
2. PartCraft læser den og viser, hvad den fandt: hvor mange objekter med flader der kommer ind, hvor mange flader der stammer fra nettene gemt i filen, og hvor mange PartCraft selv tessellerede, hver reparation, og om resultatet **lukker**.
3. Kontrollér **Enheder i filen** (filen angiver sine egne; en enhed PartCraft ikke har på listen, såsom yards, omregnes til millimeter) og **Op i filen**.
4. Vælg {{ui:Åbn som legeme}}, eller **Brug til** og {{ui:Føj til denne del}}, når delen allerede har features.

## Hvor trekanterne kommer fra

PartCraft bygger legemer ud fra trekanter i denne version, så hver flade i filen bliver til små flade flader. For hver flade af en polyflade (og hver ekstrudering) tager den **render-nettet gemt i filen**, når der er et, ellers **tessellerer den selv** (planer, NURBS-flader, drejningsflader, ekstruderede kurver og ekstruderinger, beskåret af deres kanter). Flader i én polyflade deler deres kantpunkter, så en lukket polyflade kommer ind lukket. En flade af en slags, PartCraft endnu ikke læser, udelades, og dialogen siger, hvor mange og af hvilken slags; resultatet lukker så normalt ikke.

## Alt i filen bliver til ét legeme

Hvert synligt net, hver polyflade og ekstrudering og hver placering af en blok går ind i **ét** legeme, der hvor filen placerer det. Objekter, der er skjult, eller på et lag, der er slukket, udelades. Når filen indeholder flere adskilte massive legemer, får legemet flere stykker: åbn hvert fra sin egen fil, hvis du vil have dem som adskilte legemer.

## Hvad der udelades (og siges)

Kurver, punkter, punktskyer, tekst, målsætninger, skraveringer og lys udelades: et legeme tager kun flader. Det samme gælder SubD-objekter (omdan dem til net eller polyflader i det program, der lavede filen, først), blokke, der er linket fra andre filer, og farver, lag og navne (PartCraft-legemer har ingen egne her).

## Når den ikke lukker

Åbne polyflader og flader (en enkelt beskåret flade, en figur med en manglende flade) har ingen inderside, så de kan ikke være et massivt legeme. Dialogen siger, hvor mange åbninger der er tilbage, og tilføjer intet. Forbind eller luk figuren i det program, der lavede den, gem, og åbn den igen. Se [Når et net ikke lukker](topic:open-meshes#when-a-mesh-does-not-close).
