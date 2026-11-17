---
title: Schetsrelaties en maten
summary: Elke relatie en maat die een PartCraft-schets heeft, wat u voor elk moet selecteren, het symbool ervan, en hoe het zich gedraagt bij het oplossen.
keywords: relaties, beperkingen, samenvallend, horizontaal, verticaal, evenwijdig, loodrecht, raaklijn, gelijk, concentrisch, middelpunt, vastzetten, afstand, horizontale afstand, verticale afstand, straal, diameter, hoek, symbolen, tekens
from: 9831e7be
---

Relaties leggen vast hoe geometrie ten opzichte van andere geometrie ligt. Maten leggen afmetingen vast. Om een relatie toe te voegen, selecteert u items met het gereedschap Selecteren ({{key:S}}) en kiest u de knop ervan in het rechterpaneel; om een maat toe te voegen, gebruikt u het gereedschap Maatvoering ({{key:D}}) of de maatknoppen in het rechterpaneel. Hoe u ermee werkt: [Een schets volledig vastleggen](topic:relations-dimensions).

"Kromme" hieronder betekent een cirkel of een boog. De oorsprong telt als een punt.

## Relaties

| Knop | Symbool | Selecteer | Effect |
|---|---|---|---|
| {{ui:• Samenvallend}} | • (alleen getoond bij selectie of bij problemen) | Twee punten | De punten komen samen |
| {{ui:• Samenvallend}} | • | Een punt en een lijn | Het punt ligt op de lijn (of op haar verlenging) |
| {{ui:• Samenvallend}} | • | Een punt en een kromme | Het punt ligt op de cirkel of boog |
| {{ui:H Horizontaal}} | H | Een lijn, of twee punten | De lijn ligt waterpas, of de twee punten liggen even hoog |
| {{ui:V Verticaal}} | V | Een lijn, of twee punten | De lijn staat rechtop, of de punten liggen de een boven de ander |
| {{ui:∥ Evenwijdig}} | ∥ | Twee lijnen | De lijnen lopen dezelfde kant op |
| {{ui:⊥ Loodrecht}} | ⊥ | Twee lijnen | De lijnen komen samen in een rechte hoek |
| {{ui:T Raaklijn}} | T | Een lijn en een kromme | De lijn raakt de kromme zonder erdoor te gaan |
| {{ui:T Raaklijn}} | T | Twee krommen | Ze raken elkaar, van buiten of van binnen, zoals getekend |
| {{ui:T Raaklijn}} | T | Een spline en een lijn, boog of spline die aansluit op een van zijn einden | De spline verlaat dat einde in de richting van de andere kromme |
| {{ui:= Gelijk}} | = | Twee lijnen | Even lang |
| {{ui:= Gelijk}} | = | Twee krommen | Dezelfde straal |
| {{ui:◎ Concentrisch}} | ◎ | Twee krommen | Hetzelfde middelpunt |
| {{ui:◎ Concentrisch}} | ◎ | Een punt en een kromme | Het punt zit in het middelpunt van de kromme |
| {{ui:M Middelpunt van lijn}} | M | Een punt en een lijn | Het punt zit in het midden van de lijn |
| {{ui:↔ Symmetrisch}} | ↔ | Twee punten en een lijn | De punten zijn spiegelbeelden ten opzichte van de lijn (Spiegelen voegt deze toe) |
| {{ui:⚓ Vastzetten}} | ⚓ | Een punt, een lijn, een kromme of een spline | Houdt het precies vast waar het nu ligt (bij een spline: de punten ervan) |

Lijnen omvatten hier ook hartlijnen. Tekenen voegt sommige relaties voor u toe: snappen op een punt maakt het samenvallend, snappen op een kromme zet het punt erop, bijna horizontale of verticale lijnen krijgen H of V, en een rechthoek komt met zijn vier hoeken verbonden, twee H en twee V.

**Vastzetten** is een snelle manier om iets te laten stilstaan, maar het onderdeel kan dan geen maatwijziging elders volgen. Geef de voorkeur aan maten ten opzichte van de oorsprong.

## Maten

| Knop | Selecteer | Meet | Getoond als |
|---|---|---|---|
| {{ui:Afstand}} | Een lijn | De lengte ervan | Afstand 40 |
| {{ui:Afstand}} | Twee punten | De rechte afstand ertussen | Afstand 40 |
| {{ui:Afstand}} | Een punt en een lijn | De afstand van het punt tot de lijn, loodrecht erop | Afstand 40 |
| {{ui:Afstand}} | Twee evenwijdige lijnen | De tussenruimte ertussen | Afstand 40 |
| {{ui:Horizontale afstand}} | Twee punten, of een lijn | Alleen de afstand links-rechts | Horizontale afstand 40 |
| {{ui:Verticale afstand}} | Twee punten, of een lijn | Alleen de afstand boven-onder | Verticale afstand 40 |
| {{ui:Radius}} | Een cirkel of boog | Zijn straal | Radius R10 |
| {{ui:Diameter}} | Een cirkel of boog | Zijn diameter | Diameter ⌀20 |
| {{ui:Hoek}} | Twee lijnen die niet evenwijdig zijn | De hoek ertussen, 0 tot 180 graden | Hoek 30° |

Met het gereedschap Maatvoering kiest PartCraft het soort op basis van wat u aanklikt en waar u het getal plaatst:

| U klikt | U krijgt |
|---|---|
| Een lijn | De lengte; bij een schuine lijn horizontaal als het getal boven of onder de lijn staat, verticaal als het ernaast staat |
| Een cirkel | Diameter |
| Een boog | Radius |
| Twee punten | Afstand; horizontaal of verticaal zoals bij een schuine lijn |
| Een punt en een lijn | Afstand van het punt tot de lijn |
| Twee lijnen | Hoek, of de afstand als ze evenwijdig zijn |
| Een punt en een cirkel | Niets: "Deze items kunnen niet samen gemaatvoerd worden." Maatvoer in plaats daarvan naar het middelpunt van de cirkel |

**Offset** (getoond als de afstand) wordt gemaakt door het gereedschap Offset: het houdt een gekopieerde lijn evenwijdig op die afstand, of een gekopieerde boog of cirkel concentrisch met een straal die zoveel groter of kleiner is. De overige delen van dezelfde offset krijgen een **O**-relatie en volgen de ene offsetmaat. Zie [Splines, bijsnijden, offset en andere schetsgereedschappen](topic:sketch-tools).

Maatwaarden zijn millimeters (of graden), nooit negatief. Straal en diameter moeten groter zijn dan nul. Een waarde van 0 is toegestaan voor afstanden: twee punten op 0 afstand van elkaar zijn samenvallend.

## Hoe oplossen zich gedraagt

- **Minste verplaatsing.** Wanneer een waarde verandert, verplaatst de oplosser de geometrie zo weinig mogelijk. Een lijn waarvan de lengte verandert, groeit even veel aan beide kanten als er geen van beide einden is vastgehouden.
- **Geen omklappen.** Afstanden van een punt tot een lijn, horizontale en verticale afstanden, hoeken en raaklijnen onthouden aan welke kant ze zijn gemaakt. Het wijzigen van een waarde klapt de geometrie nooit naar de andere kant.
- **Conflicten laten dingen ongemoeid.** Als relaties elkaar tegenspreken, blijft de schets precies zoals hij was en worden de tegenstrijdige rood.
- **Overbodige relaties** (al geïmpliceerd door andere) worden in de statusbalk genoemd ("is al geïmpliceerd. Verwijder hem.") en het element wordt nog steeds gebouwd, met een waarschuwing.
- **Raakverbindingen.** Waar een afrondingsboog op een gedeeld eindpunt op zijn lijnen aansluit, wordt de raaklijn opgelost in een vorm die daar goed gedefinieerd blijft, zodat schetsafrondingen niet als overbepaald gelezen worden.

## Nog niet beschikbaar

Collineaire, coradiale en doorprik-relaties; een punt op een spline; aangedreven (referentie)maten; ordinaat- en booglengtematen; vergelijkingen tussen maten. Gebruik Evenwijdig plus een afstand van 0 voor collineaire lijnen.
