---
title: Magnetische velden in 2D (zelfstudie)
summary: Bereken het magnetisch veld van een elektromagneet of een permanente magneet met de analysebibliotheek: voer de voorbeelden uit, lees de fluxdichtheid, het veld in de luchtspleet, de inductantie en de trekkracht, wijzig het ontwerp, en bouw uw eigen model van spoelen, magneten en ijzer.
keywords: magnetisch, magnetostatica, magnetisch veld, fluxdichtheid, tesla, elektromagneet, solenoïde, spoel, ampèrewindingen, ijzeren kern, luchtspleet, permeabiliteit, inductantie, magnetische kracht, reluctantie, magnetisch circuit, vectorpotentiaal, elektromagnetisme, eindige elementen, fem, motor, actuator, transformator, magnetostatic2d, permanente magneet, neodymium, ndfeb, ferriet, remanentie, werkpunt, terugkeer, lekkage, houdmagneet
from: 215f6601
---

De analysebibliotheek van PartCraft kan het magnetisch veld van spoelen en ijzer in 2D berekenen: een doorsnede van iets dat lang is en overal gelijk in de lengte, zoals een elektromagneet, een transformatorkern, een railstaaf of een doorsnede van een motor. Deze zelfstudie voert het elektromagneetvoorbeeld van de bibliotheek uit, leest wat het zegt, past het aan, laat zien hoe u uw eigen vorm modelleert, en voegt dan een permanente magneet toe.

Ze gebruikt de werkomgeving Script en de [analysebibliotheek](topic:craftscript-library). U hoeft de CraftScript-taal niet te kennen om te volgen; het voorbeeld zegt wat elke regel doet.

## Wat er gemodelleerd wordt

Een C-vormige ijzeren kern, 100 × 80 mm buiten en 20 mm dik, met een luchtspleet van 2 mm in het rechterbeen. Een spoel van 100 windingen die 10 A voert (1000 ampèrewindingen) is om het linkerbeen gewikkeld. Alles is lang in de richting uit het scherm, dus de antwoorden zijn **per meter diepte**: vermenigvuldig met de echte diepte voor een echte magneet.

De `magnetostatic2d` van de bibliotheek lost de magnetische vectorpotentiaal op een raster van vierkanten van 1 mm op in een doos lucht rond de magneet, en berekent daaruit de fluxdichtheid **B** (in tesla).

## Het voorbeeld uitvoeren

1. Kies **Script** in het vak **Werkomgeving** links op de werkbalk.
2. Open het tabblad **Bibliotheek** van het scriptpaneel, dan **Voorbeelden** › **Elektromagneet: veld, luchtspleet, inductantie**.
3. Klik op {{ui:Openen (alleen-lezen)}}, en druk dan op {{key:F5}}.

Na een seconde of twee toont het canvas de fluxdichtheid, en de console drukt af:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

De grafiek onder het canvas is de verticale fluxdichtheid B_y langs de middellijn van de kern, van links naar rechts: ongeveer −0.55 T in het linkerbeen (de flux loopt er omlaag), bijna niets in het venster, en +0.55 T in het rechterbeen en over de luchtspleet (de flux keert omhoog terug). Dezelfde flux gaat door het ijzer en door de luchtspleet, dus de twee benen en de spleet tonen bijna dezelfde waarde.

## De resultaten lezen

- **Het veld in de luchtspleet** is 0.543 T. Een handberekening behandelt de kern als één magnetisch circuit, B = μ0 N I / (g + l / μr), waarin g de luchtspleet is, l de lengte van het pad door het ijzer en μr de relatieve permeabiliteit van het ijzer; die geeft 0.552 T. Het veld is iets lager dan de handberekening omdat de flux zich bolt rond de luchtspleet (randeffect) en een deel van de flux een kortere weg door het venster neemt (lekkage). Bij een kleinere luchtspleet of een fijner raster komen beide dichter bij elkaar.
- **De inductantie** van de spoel van 100 windingen is 0.154 H per meter diepte, uit de energie in het veld. De circuitformule geeft minder (0.110 H/m) omdat die alleen de flux door de luchtspleet telt, niet de flux die er langs lekt.
- **De trekkracht** die de luchtspleet sluit is B² w / (2 μ0) voor een spleetvlak van breedte w: ongeveer 2300 N per meter, of 117 N voor een magneet van 50 mm diep.
- **De piek** van 1.97 T zit in de binnenhoeken van het venster, waar de flux scherp draait. Het model behandelt het ijzer als lineair; echt elektrostaal verzadigt bij ongeveer 1.5 tot 2 T, dus behandel waarden daarboven als waarschuwing, niet als antwoord.

:::note
De eigen tests van de bibliotheek draaien dit voorbeeld en controleren het veld in de luchtspleet tegen de formule van het magnetisch circuit bij elke wijziging in PartCraft. De methode, de referenties en de andere controles (een lange solenoïde, een solenoïde met een ijzeren kern) staan in de kop van `magnetostatic2d`: klik erop in de bibliotheek.
:::

## Het ontwerp wijzigen

1. Klik op {{ui:Een kopie maken}} boven het alleen-lezen script. De kopie wordt met uw onderdeel opgeslagen.
2. Wijzig een waarde bovenaan en druk opnieuw op {{key:F5}}. Probeer:
   - `g = 0.001;` — half zo grote luchtspleet: het veld in de spleet bijna verdubbelt, en de trekkracht ook (die volgt B²).
   - `mur = 200;` — een slechtere kern: meer van de ampèrewindingen gaan verloren in het ijzer.
   - `N = 200;` — twee keer zoveel windingen: twee keer het veld, vier keer de inductantie.
   - `h = 0.0005;` — een fijner raster: nauwkeurigere antwoorden, ongeveer vier keer zo lang.

Elke run vervangt het canvas. De variabelen die het script maakte (zoals `Bgap`, `L`, `F`) blijven in de lijst **Variabelen** staan voor uw eigen berekeningen.

## Uw eigen vorm modelleren

Het voorbeeld bouwt alles op uit drie lijsten, met één waarde per rastercel. U kunt die maken voor elke vorm die met rechte lijnen langs het raster is getekend:

- **Waar het ijzer is:** `iron` is waar voor de cellen binnen de kern. Het voorbeeld bouwt het op uit rechthoeken: `frame & ~window & ~gap` betekent "in het kader, niet in het venster, niet in de luchtspleet".
- **De permeabiliteit:** `1 + (mur - 1) * iron` is 1 in lucht en `mur` in het ijzer. Geef meerdere materialen op dezelfde manier hun eigen waarden.
- **De stroom:** `J` is de stroomdichtheid in ampère per vierkante meter, positief uit het scherm, negatief het scherm in. Een spoel heeft twee zijden met tegengestelde tekens; het voorbeeld berekent `J0` zodat de ene zijde N I voert.

Dan lost `r = magnetostatic2d(m, permeability, J)` het op. `r.B` is de fluxdichtheid in elke cel (twee kolommen, x en y), `r.Bmag` de grootte ervan, `r.energy` de opgeslagen energie per meter. `plot(x, y)` tekent een lijn.

De bibliotheek werkt in meters en de weergave in millimeters, dus een veld dat zonder omrekening wordt getoond, zou duizend keer te klein worden getekend. Het voorbeeld toont het op een kopie van het raster in millimeters (`mm = quadGrid(…)`, daarna `show(field(mm, …))`): kopieer die twee regels.

Standaard houdt de rand van de doos het veld binnen: er verlaat geen flux de doos. Maak de doos minstens twee of drie keer zo groot als de magneet, zodat dit het veld niet samendrukt. Voor een symmetrische magneet kunt u de helft ervan modelleren: de kop van `magnetostatic2d` zegt welke randvoorwaarde u op een symmetrielijn moet gebruiken.

## Permanente magneten

Het tweede voorbeeld, **Voorbeelden** › **Permanente magneet in een ijzeren kern: werkpunt, lekkage, trekkracht**, is dezelfde kern zonder de spoel, en met een plak van 10 mm van het linkerbeen vervangen door een magneet die omhoog is gemagnetiseerd. Voer het uit met {{key:F5}}. Het drukt af:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Het werkpunt.** Een magneet wordt beschreven door zijn **remanentie** Br (het veld dat hij behoudt als hij door ijzer wordt kortgesloten: ongeveer 1.2 T voor een gesinterde NdFeB-magneet, 0.4 T voor ferriet) en zijn terugkeer-permeabiliteit (ongeveer 1.05 en 1.1). Een luchtspleet duwt hem omlaag over zijn terugkeerlijn: hier naar 1.04 T, met H tegen B in hem in.
- **Lekkage.** De handberekening zonder lekkage geeft 0.97 T in de spleet; het model geeft 0.68 T. Een magneet drijft zijn flux met een sterke push over een korte lengte, dus veel ervan gaat rechtstreeks terug over het venster in plaats van door de luchtspleet. De lekkagefactor geeft aan hoeveel: hier 1.53. Stel `g = 0;` in voor een gesloten keerplaat: de magneet werkt dan binnen een half procent van de handberekening.
- **Magneten in uw eigen model.** Geef `magnetostatic2d` de magneten als `struct('Br', Br)`, waarin `Br` één rij per rastercel heeft met de remanentie langs x en y in tesla (nul buiten de magneten), en geef de magneetcellen hun terugkeer-permeabiliteit in de lijst met permeabiliteiten:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Voor een magneet die onder een hoek is gemagnetiseerd, zet u `Br·cos(hoek)` en `Br·sin(hoek)` in de twee kolommen; voor een ring die naar buiten is gemagnetiseerd, berekent u de richting van elke cel uit zijn positie. `r.H` geeft de veldsterkte H in elke cel.

Het model houdt een magneet op zijn rechte terugkeerlijn, hoe hard hij ook wordt aangedreven. Een echte magneet die voorbij zijn knik wordt aangedreven (door een grote luchtspleet, een sterke spoel of hitte), verliest een deel van zijn sterkte voorgoed; controleer het werkpunt tegen de curve van de fabrikant voor de kwaliteit en temperatuur.

De tests van de bibliotheek controleren magneten tegen twee handresultaten: een ronde magneet in open lucht (erin is B = Br / (1 + μr)) en een magneet die door een ijzeren keerplaat is gesloten (het magnetisch circuit), beide binnen 1 %.

## Wat het nog niet doet

- **Verzadiging.** Het ijzer is lineair: dubbele stroom, dubbel veld, zonder grens.
- **Ontmagnetisering.** Magneten blijven op hun rechte terugkeerlijn (zie hierboven).
- **Wervelstromen** en **verliezen** (ijzerverlies, koperverlies).
- **Bewegende delen en koppel.** Geen rotor die in een stator draait, geen koppel tegen hoek.
- **Ronde vormen.** Het raster bestaat uit gelijke vierkanten, dus gebogen contouren komen getrapt uit.
- **3D.** Alles is een doorsnede van iets dat lang is.

Motorontwerp (een draaiende rotor, koppel en verliezen in 2D) wordt voor een latere versie bekeken. Zie [Nog niet beschikbaar](topic:not-built-yet).
