---
title: Schroefdraad op assen en gaten, getekend of gemodelleerd
summary: Plaats een ISO-metrische of trapeziumvormige schroefdraad op elk rond vlak, een as of een boring. Houd hem decoratief voor tekeningen, of modelleer de echte helixschroefdraad voor 3D-printen, met speling zodat geprinte onderdelen passen.
keywords: schroefdraad, schroefdraden, gemodelleerde schroefdraad, helix, helixvormig, schroef, bout, moer, as, boring, uitwendige schroefdraad, inwendige schroefdraad, decoratieve schroefdraad, metrische schroefdraad, trapeziumvormig, acme, leischroef, Tr16x4, M10, 3D-printen, printen, speling, passing, linkse draai, getapt
from: 4f6401cc
---

{{ui:Schroefdraad}} zet schroefdraad op ronde vlakken: de buitenkant van een as (een uitwendige schroefdraad) of de binnenkant van een boring (een inwendige schroefdraad). PartCraft ziet aan het vlak welke van de twee het is.

Een schroefdraad is eerst **decoratief**: het vlak blijft glad, de weergave tekent de schroefdraad als stippellijncirkels en het tekenblad vermeldt die, zoals "M10×1.5 - 6g, draad 20 lang". Vink **Gemodelleerd** aan om de echte helixschroefdraad in het onderdeel te snijden, voor 3D-printen of een model dat er goed uit moet zien.

## Een as of boring van schroefdraad voorzien

1. Maak de as of de boring op de maat van de schroefdraad: een as van Ø10 voor een M10-bout, of een boring van Ø8.5 (de tapboor) voor een M10-moer.
2. Klik op het ronde vlak en kies daarna {{ui:Meer}} › {{ui:Schroefdraad}}. Als er geen rond vlak is geselecteerd, vraagt PartCraft u om de vlakken aan te klikken en daarna {{ui:Gereed}} te kiezen.
3. Controleer in het rechterpaneel de **Maat**. **Passend op het vlak** kiest de maat zelf: voor een as de maat waarvan de buitendiameter gelijk is aan die van de as; voor een boring de maat waarvan de kerndiameter erin past.

De schroefdraad begint aan het open einde van het vlak, waar het onderdeel niet verder loopt langs de as: het vrije uiteinde van een as, de opening van een boring. **Aan het andere einde beginnen** draait dat om.

## Instellingen

| Instelling | Keuzes | Standaard |
|---|---|---|
| **Vorm** | ISO-metrisch (60°), M1.6 tot M64 grof; trapeziumvormig (Tr, 30°), Tr8×1.5 tot Tr60×9 | ISO-metrisch |
| **Maat** | Passend op het vlak, of één maat uit de lijst | Passend op het vlak |
| **Het hele vlak** | Haal het vinkje weg om een **Lengte (mm)** op te geven, gemeten vanaf het begin | Aangevinkt |
| **Aan het andere einde beginnen** | De schroefdraad loopt vanaf het andere einde van het vlak | Uit |
| **Draairichting** | Rechtse of linkse draai | Rechtse draai |
| **Gemodelleerd** | Snij de echte helixschroefdraad | Uit |
| **Speling (mm)** | Getoond als Gemodelleerd is aangevinkt: hoeveel kleiner de schroefdraad van een as is, en hoeveel groter die van een boring, rondom | 0.1 |

Een maat die niet bij het vlak past, wordt toch gebouwd, op het vlak bijgesneden, en het paneel meldt dat, zoals "Een as van Ø12 mm is niet de Ø10 mm van M10". Meerdere vlakken kunnen één schroefdraadfeature delen; met **Passend op het vlak** krijgt elk zijn eigen maat.

## Gemodelleerde schroefdraad voor 3D-printen

Een gemodelleerde schroefdraad volgt het standaard basisprofiel: ISO 68-1 voor metrische schroefdraad (vlakke toppen en wortels, flanken van 60°), ISO 2901 voor trapeziumvormige (flanken van 30°). De **Speling** verschuift het hele profiel naar binnen (een as) of naar buiten (een boring), zodat geprinte onderdelen in elkaar schroeven:

- **0.1 tot 0.2 mm** past bij de meeste printers. Print eerst een proefbout en -moer.
- **0** is het standaardprofiel, voor onderdelen die gefreesd zijn of om een passing te controleren.

Een bout en een moer met dezelfde speling raken elkaar nooit langs hun flanken: de opening ertussen is rondom twee keer de speling.

:::tip
Fijne steken printen slecht: M3 en kleiner, of een steek onder 0.5 mm, ligt dicht bij wat een mondstuk van 0.4 mm kan opbouwen. Modelleer grotere schroefdraden, en gebruik voor kleine een inbrandmoer of een getapt gat.
:::

Een gemodelleerde schroefdraad is onderdeel van het volume: STL-, 3MF- en STEP-exports bevatten hem, en Meten meet hem. Hij maakt het onderdeel zwaarder om opnieuw op te bouwen: een M10-draad van 20 lang is ongeveer 150,000 driehoeken.

## Getapte gaten

Een **Getapt gat (ISO-metrisch)** heeft ook een schakelaar **Gemodelleerd**, met dezelfde **Speling**. Zie [Gaten en verzinkingen boren op schetspunten](topic:holes).

## Wanneer een schroefdraad niet wordt gebouwd

- "Een schroefdraad hoort op een rond vlak (een cilinder): een as of een boring." Het gekozen vlak is vlak of op een andere manier gekromd.
- "Geen standaardmaat past bij een rond vlak van Ø0.6 mm: kies een maat." Passend op het vlak vond niets binnen 12 % van het vlak. Kies een **Maat**, of wijzig het vlak.
- "Een vlak waarop deze schroefdraad zat is weg (…). Kies het opnieuw." Een eerdere wijziging heeft het vlak verwijderd. Klik op {{ui:Vlakken kiezen}} en klik nogmaals op het vlak.

:::note
Inch-schroefdraad (UNC, UNF), pijpdraad, conische schroefdraad, uitlopen van schroefdraad en afgeschuinde beginnen van schroefdraad zijn nog niet beschikbaar. De exacte kernel toont een gemodelleerde schroefdraad als decoratief.
:::
