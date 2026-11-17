---
title: Maak 'n onderdeel gereed vir 3D-druk
summary: Kontroleer dat 'n onderdeel of samestelling toe is, by jou drukker pas en op 'n basis staan, en laai dit dan af as STL of 3MF vir jou snyprogram.
keywords: 3D-druk, 3D-druk, drukker, druk, snyprogram, stl, 3mf, waterdig, toe, manifold, drukbed, bedgrootte, bouplaat, oorhang, ondersteuning, basis, millimeter, uitvoer, drade, speling
from: 90d81dff
---

'n Snyprogram het 'n toe vorm nodig: geen gate nie, elke vlak wys na buite, en niks gaan deur homself nie. Onderdele wat PartCraft bou, is by konstruksie toe, so die toets vertel meestal jou die grootte, of die onderdeel by die drukker se bed pas, of dit op 'n plat vlak staan, en hoeveel daarvan oorhang.

## Kontroleer en laai af

1. Opsioneel, eenmalig: stel jou drukker se bed in {{ui:Instellings}} › PartCraft › **3D-drukker**: breedte, diepte en hoogte in millimeter. Laat hulle leeg om daardie toets oor te slaan.
2. Kies {{ui:Uitvoer}}, dan {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}.

   Die dialoog sê "Gereed om te druk" of "Nie gereed om te druk nie", lys enigiets wat verkeerd is, en gee die grootte op die bed (X × Y × Z, in millimeter), die volume en die getal driehoeke.

3. Klik {{ui:Laai 3MF af}} of {{ui:Laai STL af}}. Die lêer is dieselfde as {{ui:Uitvoer}} › {{ui:3MF, vir 3D-druk}} of {{ui:STL, vir 3D-druk}}.

In 'n samestelling neem die toets en die lêers die hele samestelling, elke kopie waar dit geplaas is.

Die onderdeel word gekontroleer soos die uitvoer dit skryf: wat in PartCraft na bo wys (haaks op die Bovlak), wys op die bed na bo. 'n Onderdeel wat op die Bovlak geskets is, lê plat.

## Wat die dialoog kan sê

**Nie gereed om te druk nie** ('n snyprogram mag dit weier of verkeerd druk): gate (kante met 'n vlak aan net een kant), kante wat deur drie of meer vlakke gedeel word, vlakke wat in teenoorgestelde rigtings wys, 'n liggaam binnste-buite, of 'n liggaam wat deur homself gaan. 'n Onderdeel wat in PartCraft gebou is, behoort nooit hierdie te wys nie; as een wel, sien [Probleemoplossing](topic:troubleshooting).

**Waarskuwings** (dit druk, maar kyk eers):

- **Groter as jou drukker se bed**, selfs gedraai 90° daarop.
- **Niks lê plat aan die onderkant nie**: draai die onderdeel in jou snyprogram sodat 'n vlak op die bed rus, anders sal dit ondersteuning of 'n vlot nodig hê.
- **Leun meer as 45° weg van regop**: daardie vlakke benodig ondersteuning, soos dit staan. 'n Ander kant bo kan minder nodig hê.
- **Afsonderlike liggame oorvleuel** of **raak vlak-aan-vlak**: snyprogramme voeg hulle gewoonlik saam. {{ui:Kombineer}} in Kenmerke › Meer voeg hulle in een liggaam saam. Sien [Liggame](topic:bodies).
- **Onder 1 mm oor**: kontroleer die onderdeel se groottes.

## Drade wat druk

'n Gemodelleerde draad druk as 'n ware draad. Gee dit 'n bietjie **Speling** sodat 'n gedrukte bout in 'n gedrukte moer pas: sien [Drade](topic:threads).

## Gladde ronde vlakke

STL en 3MF bestaan uit driehoeke. Vir gladder ronde vlakke, klik op leë ruimte sodat niks gekies is nie, en stel **Krommes** op **Fyn (128 per omwenteling)** of **Baie fyn (256 per omwenteling)** in die regterpaneel voordat jy uitvoer. Meer driehoeke maak groter lêers.

## Groter, kleiner, of in stukke

- **Uitvoer › Skaal vir druk (STL of 3MF)…** stoor die onderdeel per as geskaal sonder om dit te verander: 'n **krimptoelaag** in persentasie (grootte × (1 + s), of die presiese grootte ÷ (1 − s)) vir 'n gietpatroon, of gewone faktore, rondom die middel, die laagste hoek, die middel van die onderkant of die oorsprong.
- **Uitvoer › Verdeel vir druk (ʼn zip van stukke)…** sny 'n onderdeel wat te groot is vir jou drukker in stukke wat elk by die bed pas wat jy gee, saam verbind deur penne, sleutels, swaelstertverbindings, penngate of magneetsakkies (met die speling wat jy stel). Elke stuk en verbinding is genommer, en die stukke word as STL of 3MF in 'n zip gestoor, met 'n samestellingsblad. Die onderdeel self verander nie.

## Nie nagegaan nie

Wanddikte, besonderhede kleiner as wat jou spuitkop kan teken, en hoe die snyprogram ondersteuning sal plaas. Jou snyprogram wys dit.
