---
title: Oppervlakke deur 'n kromme-netwerk (Gordon-oppervlak)
summary: Maak een gladde oppervlak deur 'n rooster van profiel- en leidkrommes wat in skette geteken of uit modelrande geneem is, sluit dit tot 'n soliede wanneer die profiele geslote is, en wat presies is, wat gepas is, en die boodskappe wanneer 'n netwerk nie pas nie.
keywords: raaklyn, g1, raaklynigheid, spieëlvlak, gordon-oppervlak, kromme-netwerk, grensoppervlak, netoppervlak, netwerkoppervlak, profiele, leidrame, leidkrommes, lofting met leidrame, leirails, huid, transfinite, coons, b-spline-oppervlak, vormvry oppervlak
from: ada3cb8b
---

:::note
**Nog nie in hierdie weergawe gebou nie.** Die Gordon-oppervlak benodig 'n presiese geometriekern, wat hierdie weergawe van PartCraft nie het nie: dit bou elke onderdeel met die maaskern. [Wat nog nie gebou is nie](topic:not-built-yet) sê wat om in plaas daarvan te doen. Die res van hierdie bladsy beskryf dit soos dit met 'n presiese kern werk.
:::

'n **Gordon-oppervlak** is een oppervlak wat deur elke kromme van 'n netwerk gaan: 'n stel **profiele** wat een kant toe loop en 'n stel **leidrame** wat die ander kant toe loop, wat soos die drade van 'n net kruis. Só vorm jy 'n romp, 'n vlerk of 'n handvatsel uit 'n paar snitkrommes wat jy direk beheer. Dit benodig die **presiese kern** (sien [Die maaskern](topic:solid-kernels)).

## Teken die netwerk

1. Teken die **profiele**: twee of meer krommes wat langs mekaar loop, byvoorbeeld snitte op parallelle vlakke. Lyne, boë, sirkels en splines werk almal, en 'n ketting krommes wat end-tot-end verbind is, tel as een kromme.
2. Teken die **leidrame**: twee of meer krommes wat oor die profiele loop. Elke leidraam moet elke profiel een keer kruis, en elke profiel elke leidraam een keer.
3. Maak seker die krommes ontmoet werklik. Teken 'n leidraam se skets so dat sy kromme deur die profiele se punte gaan (snap na geprojekteerde punte, of tik die koördinate in). Die netwerk aanvaar gapings tot by die **Toleransie** (0.01 mm om mee te begin).

'n Enkele skets kan verskeie krommes hou: elke afsonderlike ketting daarin is sy eie kromme. Jy kan dus byvoorbeeld al die leidrame in een skets op die boonste vlak teken.

## Maak die oppervlak

1. Kies {{ui:Meer}} in die Kenmerke-groep, en dan {{ui:Gordon-oppervlak}}.
2. PartCraft neem die skette wat niemand nog gebruik nie: dié in vlakke parallel aan die eerste word **profiele**, die ander **leidrame**. Kontroleer die lys aan die regterkant en stel elke skets op **Profiele**, **Leidrame** of **Nie gebruik nie**.
3. Om rande van die onderdeel te gebruik, klik **Kies rande as profiele** (of **as leidrame**), klik die rande in die aansig, en druk dan Esc.

Die resultaat is 'n **oppervlakliggaam**. {{ui:Verdik}} maak dit 'n soliede, {{ui:Steek}} naai dit aan ander oppervlaktes, en {{ui:Trim oppervlak}} sny dit.

### Sluit dit tot 'n soliede

Wanneer die profiele geslote krommes is (sirkels, geslote splines, geslote kettings) en die eerste en laaste profiel elk plat in 'n vlak lê, merk **Sluit tot 'n soliede**. Die punte word met plat vlakke toegemaak, en die geslote vorm voeg saam, sny, of word 'n nuwe liggaam soos enige ander kenmerk. Só maak jy 'n lofting wat leidkrommes volg. Dit werk ook met geslote leidrame.

## Raak 'n vlak langs 'n rand

'n Gordon-oppervlak gaan deur sy krommes, maar op sy eie pas dit nie die helling van wat dit ontmoet nie. Om dit 'n rand **raak** aan 'n vlak te laat verlaat (G1), soos 'n spieëlvlak, sodat die gespieëlde kopie sonder 'n vou aansluit, of 'n plat vlak waaruit dit groei:

1. Kies die Gordon-kenmerk. Onder **Raak aan** kies 'n vlak in {{ui:Voeg 'n vlak by…}} (Voor, Bo, Regs of 'n verwysingsvlak), of kies 'n plat vlak in die aansig en druk {{ui:Voeg die gekose plat vlak by}}.
2. PartCraft vind die grenskromme van die netwerk wat in daardie vlak lê, en die oppervlak verlaat dit raak aan die vlak.

As 'n vlak twee grenskrommes hou ('n vloer onder albei punte), voeg dit twee keer by: elke kopie neem die volgende een. Tot vier vlakke, een per rand.

Die verslag sê langs watter kromme elke vlak raak gemaak is, en die steilste hoek waarteen die oppervlak daardie vlak vantevore ontmoet het. Leidrame wat reeds daardie kromme raak aan die vlak verlaat, word presies gevolg. Leidrame wat weg van dit klim, word in 'n smal band naby die rand gebuig, en die verslag se "volg elke kromme binne"-syfer sê hoeveel: teken die leidrame wat die rand plat verlaat vir 'n presiese pas.

## Wat presies is en wat gepas is

Die paneel sê watter van hierdie van toepassing is, en hoe ver die oppervlak van jou krommes afwyk.

- **Presies**: wanneer elke kromme polinomiaal is (lyne, splines en kettings daarvan) en die leidrame al die profiele by dieselfde parameters kruis, is die oppervlak presies die Gordon-oppervlak van daardie krommes. 'n Netwerk van isokrommes wat uit 'n bikubiese oppervlak gesny is, gee daardie oppervlak terug, en vier reguit lyne gee 'n plat of gedraaide (bilineêre) lap.
- **Gepas**: boë, sirkels en rande van die onderdeel is nie polinomiaal nie, en krommes wat by verskillende parameters kruis, moet herberekend word sodat die kruisings in lyn is. Daardie krommes word gepas deur kubieke B-splines binne een tien-miljoenste van die netwerk se grootte (ongeveer 0.00001 mm vir 'n 100 mm onderdeel). 'n Silinderlap gemaak uit boë en lyne bly binne 0.00001 mm van die ware silinder.

Tussen die krommes is die oppervlak wat die metode gee: die profiele oor die breedte gemeng, plus die leidrame oor die breedte gemeng, minus die menging van hul kruispunte. Dit is oral glad behalwe waar 'n kromme 'n skerp hoek het. Waar twee Gordon-oppervlaktes 'n grenskromme deel, ontmoet hulle rand-tot-rand (G0), nie raak nie.

## Wanneer 'n netwerk nie pas nie

| Boodskap | Wat om te doen |
|---|---|
| "… ontmoet nie: hulle lê 0.4 mm uitmekaar" | Laat daardie profiel en leidraam kruis, of verhoog die Toleransie |
| "… ontmoet … 2 keer" | 'n Leidraam mag elke profiel net een keer kruis: verdeel 'n lussende kromme, of gebruik minder profiele |
| "… in 'n ander volgorde" of "vou oor homself" | Twee leidrame kruis mekaar (of twee profiele doen). Die families moet langs mekaar loop |
| "minstens twee profiele en twee leidrame" | Voeg krommes by, of stel meer skette op Profiele of Leidrame |
| "meng oop en geslote krommes" | Maak alle profiele oop of almal geslote (dieselfde vir die leidrame) |
| "'n Einde … is nie plat nie, so dit kan nie toegemaak word nie" | Teken die eerste en laaste geslote profiel elk in een vlak, of laat Sluit tot 'n soliede af |

## Beperkings

- Een B-spline-vlak per netwerk: geen G1- of G2-raakheid aan naburige oppervlaktes nie.
- 'n Geslote netwerk se naat, by die eerste leidraam, is rand-tot-rand gevoeg maar nie raak nie.
- Die Lofting-kenmerk self het geen leidrails nie; gebruik eerder 'n Gordon-oppervlak wat tot 'n soliede gesluit is.
- Baie kronkelende krommes, of kruisings wat baie ongelyk langs een kromme in vergelyking met 'n ander geplaas is, kan te veel punte benodig om te pas; die kenmerk sê dit dan.
