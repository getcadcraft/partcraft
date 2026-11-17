---
title: Ribben en knoopplaten
summary: Verstevig een onderdeel met een rib die als één lijn wordt getekend: hij vult van de lijn tot de wanden, met een vaste dikte dwars op het schetsvlak, aan de kant die u kiest.
keywords: rib, knoopplaat, lijf, versteviging, verband, beugel, hoeksteun, dunne wand, versterken
from: 5c218881
---

:::note
**Nog niet beschikbaar in deze versie.** De rib heeft een exacte geometriekernel nodig, die deze versie van PartCraft niet heeft: ze bouwt elk onderdeel met de mesh-kernel. [Wat nog niet beschikbaar is](topic:not-built-yet) zegt wat u in plaats daarvan kunt doen. De rest van deze pagina beschrijft de rib zoals die werkt met een exacte kernel.
:::

Een **rib** (of knoopplaat) is een dunne wand die een onderdeel verstevigt, zoals de driehoek in de hoek van een L-beugel. U tekent alleen de vrije rand: PartCraft vult de ruimte tussen die lijn en de wanden. Het heeft de **exacte kernel** nodig (zie [De mesh-kernel](topic:solid-kernels)).

## Een rib toevoegen

1. Maak een vlak door het midden van waar de rib komt (voor een L-beugel van 40 diep, een vlak 20 voor zijn schets: zie [Referentievlakken, assen en punten](topic:reference-geometry)).
2. Schets erop **één lijn** van wand tot wand — of enkele lijnen uiteinde-aan-uiteinde voor een gebogen ribrand. De lijn mag vóór de wanden eindigen: zijn uiteinden worden doorgetrokken tot ze ze raken.
3. Selecteer de schets en kies {{ui:Meer}} › {{ui:Rib}}.

De rib vult van de lijn tot de wanden aan de kant naar het midden van het onderdeel, zodat een knoopplaat in de binnenhoek terechtkomt. Als die kant open is en de andere gesloten, draait PartCraft hem om en zegt dat.

## Instellingen

- **Dikte (mm)** is de dikte van de rib dwars op het schetsvlak. Die kan door een parameter worden aangestuurd.
- **Dikte** (de keuze eronder): **Gecentreerd op het schetsvlak**, **Voor het vlak** (langs de normaal) of **Achter het vlak**.
- **Omkeren** vult de andere kant van de lijn.

## Meldingen

- **Aan deze kant raakt de rand van de rib het lichaam nooit** — er sluit niets aan in de ruimte aan die kant: vink **Omkeren** aan of uit, of verplaats de lijn zodat wanden hem begrenzen.
- **Een rib heeft één open keten van lijnen nodig in zijn schets** — de schets heeft een gesloten vorm, een boog of een spline, of lijnen die niet uiteinde-aan-uiteinde aansluiten.
- **De rand van de rib loopt daar binnen het lichaam** — de lijn ligt binnen het volume; teken hem in de open ruimte tussen de wanden.
