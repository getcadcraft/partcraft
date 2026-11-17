---
title: Restanten bewaren en opnieuw gebruiken
summary: Na een nesting wordt wat er van elke plaat overblijft een genummerd restant in een voorraadlijst; de volgende nesting gebruikt eerst de restanten en daarna hele platen.
keywords: nesten, restant, restanten, voorraad, overschot, plaat, platen, opnieuw gebruiken, materiaal, dikte, CSV
from: 7a68d4b8
---

Wanneer u onderdelen op platen nest, kan het bruikbare overschot van elke plaat (geen smalle stroken) worden bewaard als **restant**: een genummerde contour (R-0001, R-0002 …) met het materiaal, de dikte, het formaat en de opdracht waaruit het kwam. De lijst wordt met het bestand opgeslagen en kan als CSV worden opgeslagen.

## Opnieuw gebruiken

Vul het **materiaal** en de **dikte** in, laat {{ui:Eerst restanten gebruiken}} aan staan en nest. Restanten van hetzelfde materiaal en dezelfde dikte worden eerst geprobeerd, het kleinste eerst; de onderdelen die erin passen, komen erop, binnen de eigen contour van het restant en op afstand van de rand; wat niet past, komt op nieuwe platen. Het opdrachtrapport zegt welke restanten zijn gebruikt en wat er is overgebleven. Met {{ui:De overblijfselen als restanten bewaren}} aan, schrijft {{ui:Deze opdracht aan de voorraad toevoegen}} het daarna naar de voorraadlijst: een gebruikt restant krijgt de markering **Gebruikt** (met de opdracht) en wordt niet opnieuw aangeboden; wat ervan over is, wordt een nieuw restant dat het oorspronkelijke restant onthoudt.

## Wat als restant telt

Het overschot wordt gemeten met de afstand die u instelt (geen onderdeel komt dichter bij een snede dan die afstand). Stroken die smaller zijn dan een twintigste van de plaat, en stukken kleiner dan 2 % ervan, zijn schroot; wijzig beide grenzen als uw werkplaats kleinere stukken bewaart. Gaten in onderdelen horen bij de onderdelen zelf en worden niet bewaard. Een rol heeft geen restanten.

## In de tekening

Het DXF-bestand van een nesting tekent de contour van elk restant op de laag REMNANTS, met het nummer in het midden, zodat de stukken kunnen worden gemarkeerd wanneer ze worden gesneden.

Nog niet beschikbaar: korrelrichting van een restant, een barcode- of labelblad, restanten van rollen, voorraad die tussen projecten wordt gedeeld.
