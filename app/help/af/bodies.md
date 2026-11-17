---
title: Kombineer, skuif en skaal liggame; padpatrone
summary: Maak aparte liggame, en voeg dan, sny of kruis hulle na die feit, skuif, draai, belyn of kopieer hulle, skaal hulle eweredig of volgens X, Y en Z, en kopieer kenmerke of liggame langs 'n kromme.
keywords: liggaam, liggame, multi-liggaam, nuwe liggaam, kombineer, boolese, voeg saam, sny, kruis, aftrek, unie, hou gereedskap, skuif liggaam, kopieer liggaam, draai liggaam, belyn, translasie, skaal, nie-eenvormige skaal, rek, affiene, padpatroon, patroon langs kromme, skikking langs pad, kromme-gedrewe patroon
from: 6b1ea820
---

:::note
**Nog nie gebou in hierdie weergawe nie.** Om met verskeie liggame te werk, benodig 'n presiese geometriekern, wat hierdie weergawe van PartCraft nie het nie: dit bou elke onderdeel met die maaskern. [Wat nog nie gebou is](topic:not-built-yet) sê wat om eerder te doen. Die res van hierdie bladsy beskryf dit soos dit met 'n presiese kern werk.
:::

'n Onderdeel kan meer as een soliede liggaam hou. Elke afsonderlike soliede is 'n **liggaam**. Die meeste kenmerke voeg by of sny van elke liggaam wat hulle raak; die gereedskap op hierdie bladsy werk op hele liggame wat jy kies. Hulle is in die Kenmerke-groep se {{ui:Meer}}-kieslys: {{ui:Kombineer}}, {{ui:Skuif liggaam}}, {{ui:Skaal liggaam}} en {{ui:Padpatroon}}. Almal benodig die presiese kern (OpenCascade).

## Maak 'n aparte liggaam

Stel 'n ekstrusie of 'n omwenteling se **Bewerking** op **Nuwe liggaam** in sy regterpaneel (**Sweep** en **Loft** het dit ook). Die nuwe soliede bly apart selfs waar dit die ander oorvleuel. **Kruising** hou net die oorvleueling van die nuwe vorm met wat daar is.

Liggame word vernoem na die kenmerk wat hulle begin het: "Extrude2". 'n Kopie word vernoem na sy oorspronklike en die kenmerk wat dit gekopieer het: "Extrude2, kopie 1 van Move1". Die name bly dieselfde wanneer jy groottes stroomop verander, sodat die kenmerke wat 'n liggaam gebruik, dit steeds vind. Met twee of meer liggame wys die onderdeelpaneel (klik op leë ruimte) hulle met hul volumes.

## Hernoem of versteek 'n liggaam

Klik op leë ruimte in die aansig om die onderdeelpaneel te sien. Die liggaamlys (wat wys as die onderdeel twee of meer liggame het) het 'n naamblokkie en 'n {{ui:Versteek}}-knoppie op elke ry.

- **Hernoem:** tik 'n nuwe naam in die blokkie en druk {{key:Enter}} of klik weg. Elke paneel gebruik dit dan: Kombineer, Skuif liggaam, die patrone. Maak die blokkie leeg om terug te gaan na die naam van die kenmerk wat die liggaam gemaak het.
- **Versteek:** klik {{ui:Versteek}} op sy ry. Die liggaam verlaat die aansig en klikke gaan deur dit, so jy kan vlakke agter dit kies. {{ui:Wys}} bring dit terug; {{ui:Wys alles}} bring elke versteekte liggaam terug.

Versteek verander net die aansig. 'n Versteekte liggaam word steeds gebou, tel mee in die volume en die metings, en word in STL-, 3MF- en STEP-uitvoere gestoor. Name en versteekte liggame word in die onderdeellêer gestoor, en elke verandering is een stap van {{ui:Ontdoen}}.

## Kombineer liggame

1. Shift+klik 'n vlak van die **teiken**-liggaam, dan 'n vlak van elke **gereedskap**-liggaam.
2. Kies {{ui:Meer}}, dan {{ui:Kombineer}}.
3. In die regterpaneel kies die **Bewerking**:

| Bewerking | Resultaat |
|---|---|
| Voeg saam | Die teiken en die gereedskap word een liggaam |
| Sny | Die gereedskap word van die teiken weggeneem |
| Kruising | Net wat die teiken en elke gereedskap deel, word behou |

**Teikenliggaam** is die een wat sy naam behou. Merk of ontmerk **Gereedskapliggame**, of gebruik **Kies in die aansig** en klik op hulle vlakke. **Hou die gereedskapliggame** laat die gereedskap ook op sy plek (handig vir 'n vorm en sy kern). As 'n gereedskapliggaam reeds deur 'n vroeëre Kombineer gebruik is, sê die paneel dit in plaas van om 'n ander liggaam te kies.

## Skuif of kopieer 'n liggaam

1. Kies {{ui:Meer}}, dan {{ui:Skuif liggaam}}. Die nuutste liggaam is gemerk; merk die wat jy wil skuif.
2. Kies die **Beweging**-tipe:

| Beweging | Wat jy stel |
|---|---|
| Translasie | **ΔX**, **ΔY**, **ΔZ** in millimeter |
| Punt tot punt | **Van** en **Na**: klik naby die einde van 'n rand, 'n puntkenmerk, of 'n plek op 'n vlak |
| Draai om 'n as | **As** (X, Y, Z, 'n asfunksie, of **Kies**: 'n reguit rand, 'n sirkel of 'n silinder) en **Hoek (°)** |
| Belyn 'n vlak op 'n vlak of vlak | **Vlak om te skuif** ('n plat vlak van die liggaam), **Op** ('n plat vlak of 'n vlak) |

**Belyn** draai die liggaam sodat sy vlak op die ander vlak lê, vlak teen vlak, en skuif dit dan net langs daardie vlak se normaal. **Dieselfde rigting** draai dit die ander kant toe. **Kopieer** hou die oorspronklike en voeg die geskuifde kopie as 'n nuwe liggaam by.

## Skaal 'n liggaam

1. Kies {{ui:Meer}}, dan {{ui:Skaal liggaam}}, en merk die liggame.
2. Tik 'n **Skaal**, of ontmerk **Eenvormig** en tik **Skaal X**, **Skaal Y** en **Skaal Z** (langs die wêreld se asse).
3. **Om** is die punt wat staan: die middelpunt van die liggame se boks, of 'n punt wat jy kies.

'n Eenvormige skaal is presies. 'n Nie-eenvormige skaal maak sirkels elliptiese: 'n silinder word 'n elliptiese silinder, wat geen analitiese oppervlak hou nie. Krom vlakke word dus B-spline-oppervlakke wat binne 0.0000004 mm van die presiese vorm bly; plat vlakke en reguit rande bly presies. Die paneel sê watter een gebeur het. Skaalfaktore moet groter as nul wees (spieël met {{ui:Spieël}} in plaas daarvan).

## Kopieer langs 'n pad

1. Kies die kenmerk om te kopieer in die geskiedenis, of los niks gekies om die nuutste liggaam te kopieer nie.
2. Kies {{ui:Meer}}, dan {{ui:Padpatroon}}. Die nuutste ongebruikte skets word as die pad geneem.
3. In die regterpaneel stel:

| Instelling | Wat dit doen |
|---|---|
| **Kopieer** | Liggame (elke kopie 'n nuwe liggaam) of Kenmerke (saamgevoeg of gesny soos die oorspronklike) |
| **Pad** | Merk skets, of **Kies modelrande**; die stukke moet end tot end aansluit |
| **Telling** | Totale getal, insluitend die oorspronklike |
| **Spasiëring** | Gelyk (versprei tot aan die einde van 'n oop pad, of rondom 'n geslote een) of 'n vaste afstand |
| **Oriëntasie** | Volg die pad (elke kopie draai daarmee) of Vas (kopieë bly parallel) |
| **Keer rigting om** | Gaan die ander kant langs die pad |

Die kopieë begin waar die pad die naaste aan die oorspronklike loop, en is volgens lengte langs die kromme gespasieer.

Lineêre en sirkulêre patrone kan ook liggame kopieer: merk **Kopieer liggame** in hul paneel en kies die liggame; elke kopie is 'n nuwe liggaam.

## Perke

- Liggame benodig die presiese kern; die maaskern hou een soliede en sê so.
- 'n Nie-eenvormige skaal maak krom vlakke tot nabye B-spline-benaderings (sien hierbo), nie presiese silinders of keëls nie; afsetoppervlaktes kan nog nie so geskaal word nie.
- Die pad volg op 'n draaiende 3D-kromme dra die kopie sonder om dit te draai; op plat paaie is die draai presies.
- Kombineer werk net op soliede. Oppervlakliggame word met {{ui:Steek}} saamgevoeg.

Sien ook [Verwysingsvlakke, asse en punte](topic:reference-geometry) vir punte en vlakke "tussen voorwerpe", en [Patroon- en spieëlkenmerke](topic:patterns-mirror).
