---
title: 3D-afwerking: evenwijdig en scallop
summary: Werk het hele gebogen oppervlak van het model af met een bol-, radius- of vlakfrees, in evenwijdige lijnen onder elke hoek of in banen op een vaste afstand, zodat de kammen ertussen de hoogte houden die u vraagt. Wat de paden garanderen en wat niet.
keywords: 3d-afwerking, afwerking, evenwijdig, raster, scallop, constante scallop, kam, bolfrees, radiusfrees, oppervlak, tolerantie, stapafstand, helling, over te laten materiaal, afdaalfrees, inkeping
from: 942d2341
---

Twee bewerkingen in **Fabricage** frezen het **hele oppervlak van het model**, met het gereedschap verticaal gehouden (drie assen). Ze vragen geen selectie: ze werken op al het deel van het model dat van bovenaf zichtbaar is. Ruw het onderdeel eerst voor (adaptief of holte); een afwerkingsgang over onbewerkt ruwdeel waarschuwt dat er diep gesneden zou worden.

## Evenwijdig

Rechte lijnen over het model onder de **hoek** die u instelt, op een **stapafstand** van elkaar (een deel van de gereedschapsdiameter). Elke lijn volgt het oppervlak: de punt van het gereedschap staat zo hoog als nodig is, zodat geen deel van de frees onder het model komt, en de lijn wordt fijner gefreesd waar het oppervlak buigt. Met **Zigzag** aan blijft het gereedschap tussen de lijnen neergelaten waar dat veilig kan (gecontroleerd langs de beweging); anders komt het omhoog.

- **Tolerantie**: hoe ver een recht stuk van een lijn mag afwijken van de echte hoogte van de gereedschapspunt (de helft ervan wordt als grens gebruikt in het midden van elk stuk). Standaard 0.01 mm.
- **Alleen waar het oppervlak minstens … en hoogstens … (°) is**: alleen vlakke of alleen steile gebieden afwerken. Waar het oppervlak buiten het bereik valt, wordt de lijn overgeslagen en komt het gereedschap omhoog.
- **Over te laten materiaal**: het model verschoven over die afstand (de frees vergroot met die afstand: exact voor bol- en radiusgereedschappen; een vlakfrees laat ten minste zoveel over).
- **Onderkant**: er wordt niet onder deze z gefreesd.

## Scallop

Banen die overal op het oppervlak op een constante afstand van elkaar liggen, zodat de kam (de scallop) die tussen twee naburige banen overblijft de **hoogte** heeft die u vraagt. De afstand volgt uit de hoogte en de straal van de bol: s = 2·√(2·R·h − h²), bijvoorbeeld ongeveer 0.69 mm tussen banen voor een Ø6-bol en een kam van 0.02 mm. Een radiusfrees gebruikt zijn hoekradius. Een vlakfrees wordt geweigerd: die heeft geen kam om op te meten.

De banen beginnen **bij de rand van het model, naar binnen** of **bij de bovenkant van het model, naar beneden**. Het zijn contourlijnen van de afstand over het oppervlak (niet van de hoogte), dus op een helling liggen ze in grondplan dicht op elkaar en op een vlak ver uit elkaar. De afstand wordt gemeten op een raster over het oppervlak en is tot ongeveer 1 % nauwkeurig; de kamhoogte is exact waar het oppervlak vlak of licht gekromd is en benaderend waar het snel buigt. **Meefrezen** houdt de hogere zijde van het oppervlak rechts van de frees.

## Hoe goed de paden zijn

Wat de tests controleren, met gesloten formules of met een onafhankelijke brute-force-zoektocht naar de voetafdruk van de frees:

- De hoogte van de gereedschapspunt is exact voor een bol-, radius- en vlakgereedschap op vlakken, randen en hoeken van het mesh, en nooit hoger dan de echte hoogte; voor evenwijdige lijnen blijft het pad binnen de tolerantie daarvan, zonder inkeping dieper dan dat.
- Padlengtes op een gekanteld vlak komen overeen met de gesloten formule; scallop-banen op een vlak liggen op de gevraagde afstand en de kam ertussen komt op de gevraagde hoogte uit.
- De ruwdeelsimulatie toont na een gang geen inkeping en toont de kammen die overblijven.

Wat deze paden niet zijn: het zijn eenvoudige afwerkingsgangen, niet alles wat een productiesysteem biedt.

- **Nog niet beschikbaar**: waterlijn-afwerking (constante z), potlood- en hoekopschoning, radiale en spiraalbanen, een curve op het oppervlak projecteren, detectie van vlakke gebieden, botsingscontroles van houder en schacht. Ruwen en restbewerking zijn eigen bewerkingen ([3D ruwen en restbewerking](topic:rough-3d)); een gereedschap dat kantelt is [5-assige afwerking](topic:multi-axis#5-axis-finishing).
- Het midden van het gereedschap blijft boven het model: de paden stoppen bij de rand van het model in plaats van er af te lopen, dus een verticale wand precies aan de rand wordt niet tot aan de voet afgewerkt.
- Ondersnijdingen worden niet gezien (het oppervlak is wat het gereedschap van bovenaf raakt).
- Het model is het mesh van de kernel, dus de paden volgen het mesh (de koordetolerantie is ongeveer 0.0002 van de diagonaal van het onderdeel), niet het exacte oppervlak.
- Het afwerken van een groot model met een fijne tolerantie geeft een lang programma met veel korte bewegingen. Controleer de uitvoer in de eigen simulator van uw machine voordat u snijdt.
