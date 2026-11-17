---
title: Boor gate en tellerboorings by skets-punte
summary: Plaas punte in 'n skets op 'n vlak, maak eenvoudige, tellerboorde, verseenkte of getapte (ISO metriese) gate by elke punt, stel deursnee en diepte, en herstel gate wat die verkeerde kant toe geboor word.
keywords: gat, gatwizard, boor, gemodelleerde draad, 3D-druk, tellerboor, cbore, verseenk, csink, getapte gat, draad, tapboor, metriese draad, M6, deur alles, blinde gat, boutgat, punte, gatmiddelpunte
from: 8e1eef83
---

{{ui:Gat}} boor een gat by elke los punt van 'n skets. 'n Los punt is een wat met die Punt-gereedskap gemaak is, nie die einde van 'n lyn of die middelpunt van 'n sirkel nie.

## Boor gate in 'n vlak

1. Klik die plat vlak waarin geboor moet word, en kies dan {{ui:Skets op hierdie vlak}}.
2. Druk {{key:P}} en klik waar elke gat moet wees. Dimensioneer die punte vanaf die rande of die oorsprong as hul posisie saak maak (sien [Heeltemal definieer 'n skets](topic:relations-dimensions)).
3. Kies {{ui:Verlaat}}.
4. Kies {{ui:Gat}}.

Gate gaan deur die onderdeel, 6 mm breed. Die regterpaneel wys **Gate**: hoeveel gemaak is, "een per skets-punt".

**Een gat, vinnig:** klik die plat vlak waar die gat moet wees en kies {{ui:Gat hier}} in die regterpaneel. PartCraft voeg 'n skets op die vlak by met een punt waar jy geklik het, en 'n Gat deur die onderdeel, in een stap. Tik dadelik 'n getal en druk {{key:Enter}} vir sy deursnee. Om dit presies te plaas, maak die nuwe skets oop en dimensioneer die punt.

**Watter skets gebruik word:** die skets wat jy net toegemaak het of die geselekteerde een; anders die jongste ongebruikte skets wat los punte het. As daar geen is nie: "Maak eers 'n skets met punte waar die gate moet wees (Skets op 'n vlak, dan Punt)."

## Instellings

| Instelling | Keuses | Verstek |
|---|---|---|
| **Tipe** | Eenvoudig, Tellerboor, Verseenk, Getap (ISO metries) | Eenvoudig |
| **Deursnee (mm)** | Die gat se deursnee | 6 |
| **Deur alles** | Gemerk: heeltemal deur die onderdeel. Maak dit leeg vir 'n blinde gat | Gemerk |
| **Diepte (mm)** | Wys wanneer Deur alles leeg is | 10 |
| **Tellerboor ⌀** | Wys vir Tellerboor: die breër holte se deursnee | 11 |
| **Tellerboordiepte** | Wys vir Tellerboor | 6 |
| **Omgekeerde rigting** | Boor na die ander kant van die skets-vlak | Af |

Gate boor in die materiaal, reg op die skets-vlak. Die diepte van 'n blinde gat word vanaf die skets-vlak gemeet; die onderkant is plat.

## 'n Tellerboorde boutgat

1. Maak die gate soos hierbo.
2. Stel **Tipe** op **Tellerboor**.
3. Stel **Deursnee (mm)** op `6.6` (speling vir 'n M6-bout), **Tellerboor ⌀** op `11` en **Tellerboordiepte** op `6.5`.

Die tellerboor moet wyer as die gat wees ("The counterbore must be wider than the hole." — "Die tellerboor moet wyer as die gat wees.") en, vir 'n blinde gat, vlakker as dit ("Die tellerboor moet vlakker as die gat wees.").

## 'n Boutsirkel

Vir gate wat gelyk rondom 'n middelpunt versprei is, maak **een** gat en patroon dit: kies die Gat-kenmerk, en kies dan {{ui:Sirkulêr}} (sien [Patroon- en spieëlkenmerke](topic:patterns-mirror)). Die patroon volg wanneer jy die gat se grootte verander.

## Wanneer gate die verkeerde kant toe gaan

- "Daar is niks om aan daardie kant van die skets te boor nie. Probeer die rigting omkeer." Die skets sit aan die verre kant van die materiaal. Merk **Omgekeerde rigting**.
- "Plaas skets-punte waar die gate moet wees (Punt-gereedskap), maak dan die gat." Die skets het geen los punte nie. Lyn-punte en sirkelmiddelpunte tel nie.
- "Daar is nog niks om te boor nie." 'n Gat benodig 'n soliede. Maak eers 'n verhewing.

## Gate in samestellings

Elke gat het 'n as. In 'n samestelling kan **Sentreer op** 'n verbinding op 'n gat se as plaas, gelys as "Gat1, gat 2", sodat 'n pen- of boutonderdeel daarmee lyn. Sien [Bou 'n samestelling](topic:build-assembly).

## Verseenkte gate

Stel **Tipe** op **Verseenk**, dan **Verseenk ⌀** (by die oppervlak) en **Verseenkhoek**: 90° (ISO metriese platkop-skroewe) of 82° (duim-skroewe). Neem die verseenk-deursnee uit die skroefvervaardiger se data ('n bietjie meer as die skroefkop se deursnee). Die kegel se vlak word in die paneels "verseenk" genoem.

## Getapte gate

Stel **Tipe** op **Getap (ISO metries)** en kies die **Draad**, M2 tot M24 growwe. Die gat word geboor op die tapboorgrootte uit die tabel hieronder (nominale deursnee minus steek, tot die boorreeks, soos ISO 2306 vir 'n 6H-draad lys); die **Deursnee (mm)**-blokkie word nie gebruik nie. Vir 'n blinde gat stel **Draaddiepte (mm)** hoe diep die draad gaan.

| Draad | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Steek | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tapboor ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Die draad is aanvanklik **kosmeties**: die model het die geboorde gat, die aansig teken die draad se hoofdeursnee as gestreepte sirkels, en die tekenblad dra die aanwysing as 'n nota, soos "4× M8×1.25 - 6H, draad deur". STEP voer slegs die geboorde gat uit.

Merk **Gemodelleer** om die werklike skroefdraad in die gat te sny, vir 3D-druk. **Speling (mm)** maak dit so veel groter rondom, sodat 'n gedrukte bout pas: 0.1 tot 0.2 mm pas by die meeste drukkers. Die aanwysing eindig dan met "(gemodelleer)". Sien [Drade op asse en boorings, geteken of gemodelleer](topic:threads), wat ook drade op asse plaas.

:::note
Dubbelkant-geboorde gate, duimdrade en pyp-drade is nog nie gebou nie.
:::
