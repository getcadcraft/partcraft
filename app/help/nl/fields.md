---
title: Velden: vormen als afstanden
summary: Wat een veld is (een vorm opgeslagen als de afstand tot zijn oppervlak), hoe u er een bouwt uit primitieven, booleaanse bewerkingen, roosters en minimale oppervlakken in een script, hoe het een lichaam wordt, en waarom hetzelfde script altijd dezelfde bytes geeft.
keywords: veld, gesigneerde afstand, sdf, voxel, gyroid, tpms, rooster, booleaans, offset, uitholling, mengen, dual contouring, deterministisch, waterdicht, manifold, blok
from: faab7480
---

Een **veld** beschrijft een vorm door de afstand van elk punt tot zijn oppervlak: negatief binnenin, nul op het oppervlak, positief erbuiten. Een bol met straal 5 is "de afstand tot het middelpunt min 5". Vormen combineren is rekenen met afstanden: de vereniging is de kleinste van twee, de doorsnede de grootste, en een vorm van een andere aftrekken is het grootste van de eerste en min de tweede. Een vorm 1 mm laten groeien trekt 1 af van de afstand; een holle wand is de afstand, dubbelgevouwen.

Daarom zijn velden goed voor roosters, kanalen en wanden met verloop: het oppervlak van een gyroid is "de som van sinussen is nul", en een wand die over het onderdeel van 1 naar 3 mm dikker wordt, is een getal dat over het onderdeel verandert.

## Van veld naar lichaam

`to_body(field, h)` bemonstert het veld op een raster van punten `h` millimeter uit elkaar, en houdt alleen de punten nabij het oppervlak (een ijl raster van 8 × 8 × 8 blokken), en bouwt het oppervlak met **dual contouring**: één hoekpunt per oppervlaktecel, geplaatst waar de oppervlakvlakken samenkomen, zodat een scherpe rand scherp blijft binnen één voxel. Het oppervlak is gesloten en elke rand wordt door precies twee driehoeken gedeeld; het rapport zegt dat. Een feature dunner dan ongeveer drie voxels kan dichtknijpen, en dan zegt het rapport dat het lichaam geen gesloten volume is in plaats van dat te verbergen.

De voxelgrootte is de nauwkeurigheid: het volume van een bol van 25 voxels breed ligt binnen enkele honderdsten van een procent, en een wand is maar zo juist als zijn voxels. Hoe grover het raster, hoe sneller het gaat.

## Altijd dezelfde bytes

Een veld heeft geen klok en geen willekeurig getal. De sinus en cosinus van een gyroid, en elke exponentiële, logaritmische en machtsfunctie in de bibliotheek, worden berekend met gewone rekenkunde, zodat Node, Chrome, Firefox en Safari dezelfde bits geven; het raster wordt in een vaste volgorde doorlopen, dus hetzelfde script met dezelfde invoer geeft byte-identieke meshes en datasheets, op elke computer en over elk aantal workerthreads. Dat is getest, ook een browser tegen Node.

## Waar nu verder

[Een generator schrijven](topic:write-a-generator) bouwt een onderdeel met velden; [De engineeringbibliotheek](topic:engineering-library) bepaalt de maten ervan.
