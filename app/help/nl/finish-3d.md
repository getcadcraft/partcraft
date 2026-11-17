---
title: "3D-afwerking: evenwijdig en scallop"
summary: Werk het hele gebogen oppervlak van het model af met een kogel-, bullnose- of vlakke freesbeitel, in evenwijdige lijnen onder elke hoek of in banen op een ingestelde afstand, zodat de richels ertussen de hoogte houden die u vraagt. Wat de paden garanderen, en wat niet.
keywords: 3d-afwerking, afwerking, evenwijdig, raster, scallop, constante scallop, richel, kogelfrees, bullnose, oppervlak, tolerantie, stapafstand, helling, materiaal achterlaten, drop cutter, inkerving
from: e1587d0a
---

Twee bewerkingen in Fabricage snijden het **hele oppervlak van het model** met de beitel verticaal gehouden (drie assen). Ze hebben geen keuze nodig: ze werken op alles van het model dat van bovenaf zichtbaar is. Ruw het onderdeel eerst voor (adaptief of holte); een afwerkgang over onbewerkt materiaal waarschuwt dat die diep zou snijden.

## Evenwijdig

Rechte lijnen over het model onder de **hoek** die u instelt, **stapafstand** uit elkaar (een deel van de diameter van de beitel). Elke lijn volgt het oppervlak: het beitelpunt staat zo hoog als nodig is zodat geen deel van de beitel onder het model komt, en de lijn wordt fijner gesneden waar het oppervlak buigt. Met **Zigzag** aan blijft het gereedschap tussen lijnen neergelaten waar dat veilig kan (gecontroleerd langs de beweging); anders komt het omhoog.

- **Tolerantie**: hoe ver een rechte stuk van een lijn mag afwijken van de echte puntshoogte (de helft ervan wordt als grens gebruikt in het midden van elk stuk). Standaard 0.01 mm.
- **Alleen waar het oppervlak minstens … en hoogstens … (°) is**: werk alleen ondiepe of alleen steile delen af. Waar het oppervlak buiten het bereik ligt, wordt de lijn weggelaten en komt het gereedschap omhoog.
- **Materiaal achterlaten**: het model verschoven over die afstand (de beitel wordt er groter door: exact voor kogel- en bullnose-gereedschap; een vlak gereedschap laat minstens zoveel achter).
- **Bodem**: er wordt niets onder deze z gesneden.

## Scallop

Banen die over het oppervlak op een constante afstand van elkaar blijven, zodat de richel (de scallop) die tussen twee naburige banen overblijft de **hoogte** heeft die u vraagt. De afstand volgt uit de hoogte en de straal van de kogel: s = 2·√(2·R·h − h²), bijvoorbeeld ongeveer 0.69 mm tussen banen voor een Ø6-kogel en een richel van 0.02 mm. Een bullnose-gereedschap gebruikt zijn hoekstraal. Een vlakke vingerfrees wordt geweigerd: die heeft geen richel om te dimensioneren.

De banen beginnen **vanaf de rand van het model, naar binnen** of **vanaf de bovenkant, naar beneden**. Het zijn contouren van de afstand over het oppervlak (niet van de hoogte), dus op een helling liggen ze dicht op elkaar in het grondplan en op een vlak ver uit elkaar. De afstand wordt gemeten op een raster over het oppervlak en is goed tot ongeveer 1 %; de richelhoogte is exact waar het oppervlak vlak of zacht gebogen is, en benaderend waar het snel buigt. **Meefrezen** houdt de hogere kant van het oppervlak rechts van de beitel.

## Hoe goed de paden zijn

Wat de tests controleren, met gesloten formules of een onafhankelijke brute-force zoektocht naar het voetprint van de beitel:

- De puntshoogte onder het gereedschap is exact voor een kogel-, bullnose- en vlak gereedschap op vlakken, randen en hoeken van de mesh, en nooit boven de echte hoogte; voor evenwijdige lijnen blijft het pad binnen de tolerantie ervan, zonder inkerving dieper dan dat.
- Padlengtes op een gekantelde vlak komen overeen met de gesloten formule; scallopbanen op een vlak liggen op de gevraagde afstand en de richel ertussen komt uit op de gevraagde hoogte.
- De materiaalsimulatie toont geen inkerving na een gang en toont de richels die overblijven.

Wat deze paden niet zijn: het zijn basale afwerkbanen, niet alles wat een productiesysteem biedt.

- Nog niet beschikbaar: waterlijn (constante z), potloodpas en hoekafwerking, radiale en spiraalbanen, een curve op het oppervlak projecteren, detectie van vlakke gebieden, restbewerking, controles op houder- en schachtbotsing, en elk kantelen van de beitel.
- Het middelpunt van de beitel blijft boven het model: de paden stoppen aan de rand van het model in plaats van er overheen te lopen, dus een verticale wand precies aan de rand wordt niet tot de voet afgewerkt.
- Ondersnijdingen worden niet gezien (het oppervlak is wat de beitel van bovenaf tegenkomt).
- Het model is de mesh uit de kernel, dus de paden volgen de mesh (de koordtolerantie ervan is ongeveer 0.0002 van de diagonaal van het onderdeel), niet het exacte oppervlak.
- Afwerken van een groot model met een fijne tolerantie geeft een lang programma met veel korte bewegingen. Controleer de uitvoer in de eigen simulator van uw machine voordat u gaat snijden.
