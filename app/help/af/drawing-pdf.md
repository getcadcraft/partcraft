---
title: Maak 'n tekening met aansigte, 'n snit en GD&T
summary: Maak die tekeningblad oop, voeg 'n snit en 'n detailaansig by, plaas datums, kenraamwerke en oppervlakafwerkingsimbole, kies die bladgrootte, vul die titelblok en die hersienings in, en voer die blad as 'n PDF uit.
keywords: gatetabel, gatekaart, gatposisies, merkers, tekening, 2D-tekening, blad, bladgrootte, a4, a3, a2, a1, a0, ansi, titelblok, hersiening, hersieningsblok, tekeningnommer, materiaal, pdf, aansigte, ortografies, derde hoek, isometries, snitaansig, detailaansig, gd&t, datum, kenraamwerk, toleransie, posisie, platheid, oppervlakafwerking, ruheid, druk
from: 39e944c0
---

PartCraft maak 'n tekeningblad van die onderdeel: voor-, bo- en regteraansig in derdehoekprojeksie, 'n isometriese aansig, algehele maatvoering en 'n titelblok op 'n blad van A4 tot A0 of ANSI A tot E. Daarbo kan jy 'n snit, 'n detailaansig en GD&T-simbole byvoeg. Die blad werk by wanneer die onderdeel verander, en sy instellings word in die onderdeellêer gestoor.

## Maak die tekeningblad oop

1. Bou die onderdeel. (Met niks gebou nie: "Bou eers 'n soliede liggaam, maak dan die tekening daarvan.")
2. Kies {{ui:Tekening}} in die nutsbalk.

Die 3D-aansig word deur die blad vervang. Die nutsbalk wys {{ui:Datum}}, {{ui:Raam}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}} en {{ui:Terug}}, en die regterpaneel het as opskrif **Tekening**. Die statusbalk sê hoe die aansigte gemaak is: "Tekening (krommes word as fasette geteken). Datum, Raam en Afwerking plaas GD&T op 'n aansig; die paneel stel 'n snit en 'n detailaansig." Die aansigte word uit die netwerkkern se fasette geteken, so ronde rande is kort reguit stukkies. Ware boë benodig 'n presiese kern, wat hierdie weergawe nie het nie.

Beweeg rondom die blad: rol die wiel om te zoem, sleep met die regter- of middelknoppie om te pan, en druk {{key:F}} om die blad te pas. Met die blad gefokus, zoem {{key:Plus}} en {{key:Minus}}, en {{key:Shift}} met die pyltjiesleutels pan.

Kies {{ui:Terug}}, {{ui:Terug na die model}} of druk {{key:Esc}} (met niks gekies en geen gereedskap aktief nie) om na die 3D-model terug te keer.

## Wat op die blad is

- **Die blad wat jy kies**, liggend (A3 tensy jy iets anders kies), met 'n rand en 'n **titelblok**: titel, maatskappy, tekeningnommer, hersiening, materiaal, getek / nagegaan / goedgekeur deur, datum, skaal, bladgrootte, "Eenhede: millimeter · Derdehoekprojeksie", en of die aansigte presies of gefasetteer is.
- 'n **hersieningsblok** in die boonste regterhoek sodra jy 'n hersiening byvoeg.
- **Voor-, bo- en regteraansigte**: die boonaansig bo die voor-aansig, die regteraansig regs daarvan. Versteekte rande word gestippel.
- 'n **isometriese aansig** waar daar ruimte is.
- **Algehele maatvoering**: wydte en hoogte op die voor-aansig, diepte op die boonaansig.
- Een **skaal** vir die hoofaansigte uit die ISO-reeks (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), gekies sodat hulle pas.

## Kies die bladgrootte

Op die tekeningblad, met niks gekies nie, kies {{ui:Blad}} in die regterpaneel: **A4, A3, A2, A1, A0** (ISO 216) of **ANSI A, B, C, D, E** (11 × 8.5 tot 44 × 34 duim). Die aansigte word weer uitgelê by die grootste ISO-skaal wat pas, so 'n groter blad kan die onderdeel groter wys.

## Vul die titelblok in

Die regterpaneel se **Titelblok**-velde gaan reguit op die blad: {{ui:Titel}}, {{ui:Tekening nr.}}, {{ui:Hersiening}}, {{ui:Maatskappy}}, {{ui:Geteken deur}}, {{ui:Nagegaan deur}}, {{ui:Goedgekeur deur}}, {{ui:Datum}} (jaar-maand-dag), {{ui:Algemene toleransie}} en {{ui:Afwerking}} (die laaste twee druk net bo die titelblok). Tik in 'n blokkie en druk {{key:Enter}} of klik weg. 'n Leë blokkie laat sy sel leeg, behalwe:

- **Titel** wys die onderdeel se naam totdat jy een tik.
- **Datum** wys vandag totdat jy een tik.
- **Hersiening** wys die nuutste hersiening in die lys totdat jy een tik.

**Materiaal** kom van die onderdeel: klik op leë ruimte in die model en kies dan {{ui:Materiaal}} in die Onderdeelpaneel. Dieselfde materiaal gee Meet se massa-eienskappe hul digtheid.

## Voeg hersienings by

Onder **Hersienings** klik {{ui:Voeg hersiening by}}. Elke nuwe ry neem die volgende letter (A, B, C …, na Z kom AA) en vandag se datum. Tik wat verander het en wie die verandering gemaak het. {{ui:Skrap}} verwyder 'n ry. Die hersieningsblok in die boonste regterhoek van die blad lys hulle, oudste eerste, tot 20.

Bladgrootte, titelblok, hersienings en materiaal word in die onderdeellêer gestoor, en elke verandering is een stap van {{ui:Ontdoen}}.

## Voeg 'n snitaansig by

Die onderdeel word deur 'n vlak gesny en die snit word gearsceer. Soos die ander aansigte, word die snit uit fasette geteken, so ronde rande is kort reguit stukkies.

1. Stel in die regterpaneel **Snit A-A** op **Van die voor-aansig**, **Van die boonaansig** of **Van die regteraansig**.
2. Die snit verskyn op die blad, gearsceer waar die snit deur materiaal gaan, met die snylyn en sy "A"-pyltjies op die aansig waaruit dit geneem is.
3. Stel **Snit by (mm)** om die snyvlak te skuif. Dit begin deur die middel van die onderdeel.

Stel **Snit A-A** terug op **Geen** om dit te verwyder.

## Voeg 'n detailaansig by

1. Stel **Detail B** op die aansig om te vergroot (of kies {{ui:Detail}} in die nutsbalk).
2. Klik op die middel van die gebied om te vergroot, op daardie aansig. 'n Sirkel met die etiket "B" merk dit, en die vergrote "Detail B" verskyn op die blad met sy eie skaal, byvoorbeeld "Detail B (2:1)".
3. Stel **Detailradius (mm)** vir die grootte van die sirkel en **Detailskaal** vir die vergroting: 2, 4, 5 of 10 × die blad.

'n Detail kan van die voor-, bo-, regter- of snitaansig geneem word, nie van die isometriese nie. As daar nie plek is vir elke aansig nie, sê die paneel "Geen plek op die blad vir: detail. Maak die detail kleiner of laat 'n aansig weg."

## Voeg 'n gatetabel by

'n Gatetabel lys die onderdeel se gate met hul posisies, vir boor of CNC. Kies **Gatetabel** › **Van die boonaansig** (of voor, of regs) in die paneel.

- Elke gat wat loodreg in daardie aansig gesien word, kry 'n merker daarlangs: **A1**, **A2** … vir die eerste grootte, **B1** … vir die volgende.
- Die tabel lys elke merker, sy **X** en **Y** in millimeter, en sy grootte: "Ø14 THRU", "Ø6.6 × 10 DEEP", 'n tegeboring of verstekboring, of 'n getapte gat se draadaanduiding.
- X en Y word gemeet vanaf die linkeronderhoek van die aansig se omtrek, gemerk **X0 Y0** op die blad.
- Gate wat deur patrone gemaak word, is ingesluit. Gate wat nie loodreg op die aansig staan nie, word in die paneel getel en uit die tabel gelaat.

Die tabel gaan in 'n vrye area van die blad en in die PDF.

## Plaas GD&T- en oppervlakafwerkingsimbole

1. Kies {{ui:Datum}}, {{ui:Raam}} ('n kenraamwerk) of {{ui:Afwerking}} ('n oppervlakafwerkingsimbool).
2. Klik op die punt op 'n aansig waar dit vasmaak. Dit snap na die naaste getekende lyn binne 2.5 mm.
3. Die simbool verskyn met 'n lei, gekies, en die regterpaneel wys sy instellings.

Sleep 'n simbool om dit te skuif. Sy lei bly op die punt. Met 'n simbool gekies, skuif die pyltjiesleutels dit 1 mm. {{key:Delete}} of {{key:Backspace}} (of {{ui:Skrap}} in die paneel) verwyder dit. {{ui:Klaar}} of {{key:Esc}} ontkies dit. Elke verandering is in die ontdoenlys.

### Datum

**Letter**: A tot Z, sonder I, O en Q (hulle lyk soos 1, 0 en O). Elke nuwe datum neem die volgende vrye letter.

### Kenraamwerk

| Instelling | Keuses |
|---|---|
| **Toleransie** | Reguitheid, Platheid, Sirkelrondheid, Silindriesheid, Profiel van 'n lyn, Profiel van 'n oppervlak, Loodregtheid, Hoekigheid, Parallelisme, Posisie, Konsentrisiteit en Simmetrie (albei verwyder in Y14.5-2018, en só gemerk), Sirkelloop, Totale loop |
| **Sone (mm)** | Die toleransiewaarde, standaard 0.1 |
| **Deursnee-sone (⌀)** | Vir eienskappe met 'n silindriese sone; standaard aan vir Posisie |
| **Materiaal** | RFS (geen), MMC (Ⓜ), LMC (Ⓛ), waar die eienskap dit toelaat |
| **Primêre / Sekondêre / Tersiêre datum** | Tot drie datumletters, elk met 'n **… wysiger** (MMB, LMB) waar toegelaat |

PartCraft toets die raamwerk teen die reëls van ASME Y14.5 en sê bo-aan die paneel wat verkeerd is, byvoorbeeld "Platheid is 'n vormtoleransie: dit neem geen datumverwysings nie." of "Posisie benodig ten minste een datumverwysing." Die reël **Lees** spel die raamwerk uit.

### Oppervlakafwerking

| Instelling | Keuses | Standaard |
|---|---|---|
| **Ra (µm)** | Gemiddelde ruheid | 1.6 |
| **Proses** | enige proses, gemasjineer, geen materiaal verwyder nie | gemasjineer |
| **Nota** | Tot 40 karakters, soos 'n lyn of 'n proses | |

Met niks gekies nie, lys die paneel **Notas op die blad**, elk met **Kies**.

## Voer die PDF uit

Kies {{ui:PDF}} in die nutsbalk, {{ui:Voer PDF uit}} in die paneel, of {{ui:Uitvoer}} en dan {{ui:Tekening (PDF): aansigte, snit, detail, GD&T}} vanaf die model. Die PDF laai af as `<part name> - drawing.pdf`, en die statusbalk lys wat op die PDF is.

Druk dit op "Werklike grootte" op papier van die blad se grootte om die skaal korrek te hou.

## Beperkings

| Nog nie gebou nie | Doen dit vandag |
|---|---|
| Maatvoering behalwe die drie algehele maate | Voeg hulle op die PDF by met 'n merkprogram, of voer 'n skets of vlak as DXF uit en dimensioneer dit in 'n 2D-CAD-program |
| Meer as een snit of detail; uitgebreekte, hulp- en geprojekteerde aansigte | Nie beskikbaar nie |
| Eerste-hoekprojeksie, bewegende aansigte, staande blaaie | Derde hoek, outomatiese uitleg, liggend |
| Vrye teks-notas en tabelle op die blad (behalwe die titel- en hersieningsblokke) | Gebruik die afwerkingsnota, of voeg teks op die PDF by |
| Tekeninge van samestellings | Nie beskikbaar nie |

Karakters buite die Wes-Europese stel druk as "?" (die PDF gebruik die leser se ingeboude Helvetica). Die GD&T-simbole word as lyne geteken, so hulle druk in enige leser.

## Laat die blad dit doen

- **Blad › Outomaties** kies die papier vir jou: die grootste standaardskaal tot 1:1, op die kleinste A-grootte blad wat die aansigte by daardie skaal hou. Die lys wys watter een dit gekies het.
- **Dimensioneer die gate** dimensioneer die gate op die aansig wat die meeste daarvan loodreg sien: 'n middelmerk op elk, een aanduiding per grootte ("2× Ø6 THRU" met 'n lei), en hul posisies gemeet vanaf die aansig se linkeronderhoek. Die algehele wydte, hoogte en diepte is altyd daar.
