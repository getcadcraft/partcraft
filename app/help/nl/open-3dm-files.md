---
title: Een .3dm-model openen als volumelichaam
summary: Breng de meshes, polyvlakken en blokken van een .3dm-bestand als één volumelichaam in PartCraft, dat u kunt snijden, waaraan u kunt toevoegen en waarop u kunt schetsen; waar de driehoeken vandaan komen en wat wordt weggelaten.
keywords: 3dm, nurbs, polyvlak, brep, vlakken, rendermesh, extrusie, blokken, import, mesh naar volume, eenheden, geïmporteerd lichaam
from: 8ae9571b
---

PartCraft opent `.3dm`-bestanden als **volumelichamen**, op dezelfde manier als het een [STL-, OBJ- of 3MF-mesh](topic:open-meshes) opent. Het lichaam werkt als elk ander volume: snijden, toevoegen, boren, patroon maken en op de platte vlakken schetsen. Het heeft geen eigen geschiedenis.

## Het bestand openen

1. Kies {{ui:Openen}} of druk op {{key:Mod+O}}, en kies het `.3dm`-bestand. Of zet het op de 3D-weergave.
2. PartCraft leest het en toont wat het vond: hoeveel objecten met vlakken binnenkomen, hoeveel vlakken uit de in het bestand opgeslagen meshes komen en hoeveel PartCraft zelf heeft getessellateerd, elke reparatie, en of het resultaat **sluit**.
3. Controleer **Eenheden in het bestand** (het bestand zegt zelf welke; een eenheid die PartCraft niet kent, zoals yards, wordt omgezet naar millimeter) en **Omhoog in het bestand**.
4. Kies {{ui:Openen als lichaam}}, of **Gebruiken voor** en {{ui:Aan dit onderdeel toevoegen}} wanneer het onderdeel al features heeft.

## Waar de driehoeken vandaan komen

PartCraft bouwt lichamen in deze versie uit driehoeken, dus elk vlak in het bestand wordt kleine platte vlakjes. Voor elk vlak van een polyvlak (en elke extrusie) neemt het de **in het bestand opgeslagen rendermesh** wanneer die er is; anders **tessellateert het het zelf** (vlakken, NURBS-vlakken, omwentelingsvlakken, geëxtrudeerde krommen en extrusies, bijgesneden door hun randen). Vlakken van één polyvlak delen hun randpunten, dus een gesloten polyvlak komt gesloten binnen. Een vlak van een soort dat PartCraft nog niet leest, wordt weggelaten, en het dialoogvenster zegt hoeveel en van welk soort; het resultaat sluit dan meestal niet.

## Alles in het bestand wordt één lichaam

Elk zichtbaar mesh, polyvlak en extrusie, en elke plaatsing van een blok, gaat in **één** lichaam op de plek waar het bestand het zet. Objecten die verborgen zijn, of op een laag die uit staat, worden weggelaten. Wanneer het bestand meerdere losse volumes bevat, heeft het lichaam meerdere stukken: open elk uit het eigen bestand als u ze als aparte lichamen wilt.

## Wat wordt weggelaten (en gemeld)

Krommen, punten, puntenwolken, tekst, maatvoering, arceringen en lichtbronnen worden weggelaten: een lichaam neemt alleen vlakken. Ook SubD-objecten (zet ze eerst om in meshes of polyvlakken in het programma dat het bestand maakte), blokken die uit andere bestanden zijn gekoppeld, en kleuren, lagen en namen (PartCraft-lichamen hebben hier geen eigen) vallen weg.

## Wanneer het niet sluit

Open polyvlakken en vlakken (een enkel bijgesneden vlak, een vorm met een ontbrekend vlak) hebben geen binnenkant en kunnen dus geen volume zijn. Het dialoogvenster zegt hoeveel openingen er overblijven en voegt niets toe. Verbind of sluit de vorm in het programma dat hem maakte, sla op en open opnieuw. Zie [Wanneer een mesh niet sluit](topic:open-meshes#when-a-mesh-does-not-close).
