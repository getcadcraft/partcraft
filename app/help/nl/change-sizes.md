---
title: Maten wijzigen zonder de schets te openen
summary: Stuur een onderdeel aan met de getallen in het rechterpaneel: schetsmaten, dieptes, aantallen en hoeken, hoe u een onderdeel zo plant dat de juiste getallen het aansturen, en waar parameters en vergelijkingen het overnemen.
keywords: parameters, aansturende maten, ontwerpintentie, maat wijzigen, vergelijkingen, globale variabelen, ontwerptabel, configuraties, formaat wijzigen, maatvoering wijzigen
from: c2ae1a32
---

Elke maat in een PartCraft-onderdeel is een getal dat u later kunt wijzigen: de maten in zijn schetsen en de instellingen van zijn features. U hoeft een schets niet te openen om de maten ervan te wijzigen.

## Een schetsmaat wijzigen vanuit het paneel

1. Klik in de geschiedenis op een feature, bijvoorbeeld "Extrude1".
2. Onder de eigen instellingen van de extrusie toont **Schetsmaten (Sketch1)** elke maat van de schets: "Afstand", "Diameter", "Hoek (°)" enzovoort.
3. Typ een nieuwe waarde in één veld en druk op {{key:Enter}} of {{key:Tab}}.

De schets wordt opgelost met de nieuwe waarde, en het hele onderdeel wordt opnieuw opgebouwd. Als u de schets zelf selecteert, toont dezelfde lijst zich als **Aansturende maten**.

Een straal of diameter moet groter zijn dan nul, en een hoek ligt tussen 0 en 180 graden; de statusbalk meldt dat als het niet zo is.

:::tip
Welk veld is welk? De velden staan in de volgorde waarin de maten zijn gemaakt. Weet u het niet zeker, open dan de schets (dubbelklik erop), dubbelklik de maat op het tekenvlak en wijzig die daar.
:::

## Het hoofdgetal meteen typen

Selecteer een feature in de geschiedenis (of voeg er gewoon een toe) en typ een getal: het gaat in het hoofdveld van de feature, het veld dat u het meest wijzigt (de **Diepte** van een extrusie, de **Hoek** van een omwenteling, de **Diameter** van een gat, het **Aantal** van een patroon, de **Straal** van een afronding, de wanddikte van een uitholling). Druk op {{key:Enter}} om het in te stellen, of op {{key:Esc}} om het oude te houden. Een extrusie toevoegen meldt dat in de statusbalk: "Extrude1 toegevoegd. Wijzig de getallen rechts, of typ nu een getal voor de diepte."

## Het getal in de geschiedenis wijzigen

Elke rij van een feature in de geschiedenis toont het hoofdgetal naast de naam: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dubbelklik op het getal (of selecteer de rij en druk op {{key:F2}}) en er opent direct een veld. Typ de nieuwe waarde en druk op {{key:Enter}}; {{key:Esc}} houdt de oude. Het werkt precies als het veld van de feature rechts: dezelfde grenzen, `=` om een vergelijking te typen zoals `=width/2`, en één stap om ongedaan te maken.

Bij een extrusie, een gat of een patroon opent dubbelklikken overal op de rij het veld. Bij een afronding, afschuining, uitholling, trekhoek of schroefdraad gaat dubbelklikken op de naam nog naar het kiezen van randen of vlakken, dus dubbelklik op het getal zelf. Schetsen hebben geen getal in de rij: dubbelklikken opent de schets.

## Slepen in de weergave

Selecteer een extrusie in de geschiedenis (of klik erop in de weergave, en dan op de rij) en een oranje pijl staat op zijn eindvlak, met de diepte in een veld ernaast. Sleep de pijl: het onderdeel volgt terwijl u sleept, en bij loslaten wordt de nieuwe diepte in één stap ingesteld ({{key:Mod+Z}} zet hem terug). Druk tijdens het slepen op {{key:Esc}} om terug te gaan naar het beginpunt. De diepte beweegt in stappen van een tiende van de grootte: 1 mm bij een extrusie van 25 mm, 0.1 mm bij een van 3 mm.

Een omwenteling krijgt een gebogen pijl aan het einde van zijn draaiing: sleep hem rond de as om de hoek te wijzigen, in hele graden van 1° tot 360°.

Of klik in het veld naast de pijl, typ een waarde (of `=` en een vergelijking) en druk op {{key:Enter}}. Er is geen pijl bij een extrusie die **Door alles** gaat of tot een vlak loopt, of bij een waarde die door een vergelijking wordt aangestuurd: wijzig die rechts.

## De getallen die een onderdeel aansturen

| Waar | Wat u kunt wijzigen |
|---|---|
| Schets | Elke maat: lengten, afstanden, stralen, diameters, hoeken |
| Extrusie en uitsnijding | Diepte, eindconditie, richting, toevoegen of uitsnijden |
| Omwenteling en omwentelend uitsnijden | Hoek, as, toevoegen of uitsnijden |
| Gat | Diameter, diepte, door alles, diameter en diepte van de verzonken boring |
| Afronding, afschuining, uitholling | Straal, afstand, wanddikte en richting, en welke randen of vlakken |
| Lineair en cirkelvormig | Aantal, verdeling of hoek, richting of as |
| Onderdeel | Curven (hoe fijn ronde vormen worden gefacetteerd) |
| Tekening | Waar de doorsnede snijdt, de grootte en schaal van het detail, GD&T-waarden |

## Plan het onderdeel zo dat de juiste getallen het aansturen

De getallen die u geeft, zijn de getallen die u later kunt wijzigen. Een paar gewoonten zorgen dat latere wijzigingen zich goed gedragen:

- **Geef maat aan wat voor het werk telt.** Als een gat 15 mm van een rand moet blijven, geef het dan een maat vanaf die rand, niet vanaf de oorsprong.
- **Bepaal schetsen volledig.** Dan beweegt een wijziging alleen wat het moet (zie [Schets volledig bepalen](topic:relations-dimensions)).
- **Gebruik relaties voor de intentie.** Gelijk op twee gaten betekent dat één diameter beide aanstuurt. Symmetrische vormen: zet de oorsprong op de middellijn, of gebruik het middelpunt van lijn.
- **Schets op vlakken die door features zijn gemaakt.** Een schets op het eindvlak van een extrusie verplaatst zich als de diepte verandert.
- **Gebruik een patroon in plaats van kopiëren.** Eén gat dat achtmaal als patroon is herhaald, heeft één diameter om te wijzigen.

## Verder dan losse getallen

- **Eén getal dat meerdere aanstuurt:** gebruik parameters en vergelijkingen: [Een onderdeel aansturen met parameters](topic:parameters).
- **Meerdere maten van één onderdeel:** sla elk op als [configuratie](topic:design-tables); ze worden in het onderdeelbestand bewaard.
- **Rekenen in een getalveld:** typ `=40/2` of `=width / 2`. Dat maakt een vergelijking; zie [Vergelijkingen in beide richtingen](topic:equations-two-way).
- **Inch-eenheden:** het onderdeel toont millimeters. In een getalveld met `=`, of in een parameter, wordt `2in` omgezet in 50.8.

Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
