---
title: Drade op asse en borings, geteken of gemodelleer
summary: Plaas 'n ISO-metriese of trapesvormige draad op enige ronde vlak, 'n as of 'n boring. Hou dit kosmeties vir tekeninge, of modelleer die werklike heliese draad vir 3D-drukwerk, met 'n speling sodat gedrukte onderdele pas.
keywords: draad, drade, gemodelleerde draad, heliks, helix, skroef, bout, moer, as, boring, buitedraad, binnedraad, kosmetiese draad, metriese draad, trapesvormig, acme, leidskroef, Tr16x4, M10, 3D-drukwerk, druk, speling, pas, linkerhand, getap
from: 4f6401cc
---

{{ui:Draad}} plaas drade op ronde vlakke: die buitekant van 'n as (buitedraad) of die binnekant van 'n boring (binnedraad). PartCraft sê watter een uit die vlak.

'n Draad is aanvanklik **kosmeties**: die vlak bly glad, die aansig teken die draad as stippellyn-sirkels, en die tekeningblad noem dit, soos "M10×1.5 - 6g, draad 20 lank". Merk **Gemodelleer** om die werklike heliese draad in die onderdeel te sny, vir 3D-drukwerk of 'n model wat reg moet lyk.

## Draad op 'n as of boring

1. Bou die as of boring op die draad se grootte: 'n Ø10-as vir 'n M10-bout, of 'n Ø8.5-boring (die tapboor) vir 'n M10-moer.
2. Klik op die ronde vlak, kies dan {{ui:Meer}} › {{ui:Draad}}. Sonder 'n ronde vlak gekies, vra PartCraft jou om die vlakke te klik, dan {{ui:Klaar}}.
3. Kontroleer in die regterpaneel die **Grootte**. **Pas by die vlak** kies die grootte self: vir 'n as, die grootte waarvan die hoofdeursnee die as s'n is; vir 'n boring, die grootte waarvan die kleindeursnee dit pas.

Die draad begin aan die vlak se oop einde, waar die onderdeel nie langs die as verder gaan nie: die vrye einde van 'n as, die mond van 'n boring. **Begin aan die ander kant** draai dit om.

## Instellings

| Instelling | Keuses | Verstek |
|---|---|---|
| **Vorm** | ISO-metries (60°), M1.6 tot M64 growwe; trapesvormig (Tr, 30°), Tr8×1.5 tot Tr60×9 | ISO-metries |
| **Grootte** | Pas by die vlak, of een grootte uit die lys | Pas by die vlak |
| **Die hele vlak** | Ontmerk dit om 'n **Lengte (mm)** te gee, gemeet vanaf die begin | Gemerk |
| **Begin aan die ander kant** | Die draad loop vanaf die ander kant van die vlak | Af |
| **Hand** | Regterhand of linkerhand | Regterhand |
| **Gemodelleer** | Sny die werklike heliese draad | Af |
| **Speling (mm)** | Gewys as Gemodelleer gemerk is: hoeveel kleiner 'n as se draad is, en hoeveel groter 'n boring s'n is, rondom | 0.1 |

'n Grootte wat nie by die vlak pas nie, word tog gebou, by die vlak gesny, en die paneel sê so, soos "'n Ø12 mm-as is nie M10 se Ø10 mm nie". Verskeie vlakke kan een Draad-kenmerk deel; met **Pas by die vlak** kry elkeen sy eie grootte.

## Gemodelleerde drade vir 3D-drukwerk

'n Gemodelleerde draad volg die standaard basisprofiel: ISO 68-1 vir metriese drade (plat kruine en wortels, 60°-flanke), ISO 2901 vir trapesvormige (30°-flanke). Die **Speling** skuif die hele profiel in (vir 'n as) of uit (vir 'n boring) sodat gedrukte onderdele aan mekaar skroef:

- **0.1 tot 0.2 mm** pas by die meeste drukkers. Druk eers 'n toetsbout en -moer.
- **0** is die standaardprofiel, vir onderdele wat gemasjineer word of om 'n pasvorm te kontroleer.

'n Bout en moer met dieselfde speling raak nooit langs hul flanke aan mekaar nie: die gaping tussen hulle is twee keer die speling, rondom.

:::tip
Fyn steke druk swak: M3 en kleiner, of 'n steek onder 0.5 mm, is naby aan wat 'n 0.4 mm-spuitmond kan teken. Modelleer groter drade, en gebruik 'n hitte-set-invoegstuk of 'n getapte gat vir klein drade.
:::

'n Gemodelleerde draad is deel van die soliede stuk: STL-, 3MF- en STEP-uitvoere dra dit, en Meet meet dit. Dit maak die onderdeel swaarder om te herbou: 'n M10-draad 20 lank is ongeveer 150,000 driehoeke.

## Getapte gate

'n **Getap (ISO-metries)**-gat het ook 'n **Gemodelleer**-skakelaar, met dieselfde **Speling**. Sien [Boor gate en teltergate by skets-punte](topic:holes).

## Wanneer 'n draad nie bou nie

- "'n Draad gaan op 'n ronde vlak (een silinder): 'n as of 'n boring." Die gekose vlak is plat of op 'n ander manier gebuig.
- "Geen standaardgrootte pas by 'n ronde vlak van Ø0.6 mm nie: kies 'n grootte." Pas by die vlak het niks binne 12 % van die vlak gevind nie. Kies 'n **Grootte**, of verander die vlak.
- "'n Vlak waarop hierdie draad was, is weg (…). Kies dit weer." 'n Vroeëre verandering het die vlak verwyder. Klik {{ui:Kies vlakke}} en klik die vlak weer.

:::note
Duim-drade (UNC, UNF), pyp-drade, konusdrade, draad-uitlope en afgeskuinsde drabegin is nog nie gebou nie. Die presiese kern wys 'n gemodelleerde draad as kosmeties.
:::
