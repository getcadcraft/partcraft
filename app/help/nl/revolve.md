---
title: Een gedraaid onderdeel omwentelen
summary: Schets de halve doorsnede naast een hartlijn, draai die om tot een rond onderdeel, kies de as en hoek, en gebruik een omwentelingsuitsnijding voor groeven.
keywords: omwentelen, omwentelingsboss, omwentelingsuitsnijding, gedraaid onderdeel, draaibank, as, hartlijn, groef, hoek, omwenteling uitsnijden
from: 593b6929
---

{{ui:Omwentelen}} draait een profiel om een as, zoals een onderdeel dat op een draaibank is gemaakt: assen, katrollen, flenzen, knoppen. {{ui:Omwentelend uitsnijden}} (in het menu {{ui:Meer}} van de groep Kenmerken) draait een profiel om materiaal te verwijderen, voor groeven en uitsparingen.

## Een getrapte as omwentelen

1. Schets op het **Voorvlak**.
2. Druk op {{key:N}} voor {{ui:Hartlijn}}. Begin op de oorsprong en klik op een punt recht naar rechts, bijvoorbeeld 100 mm verder. Dit is de as. Hij is gestippeld: constructiegeometrie hoort niet bij het profiel.
3. Druk op {{key:L}} voor Lijn. Teken het **halve** profiel boven de hartlijn als één gesloten lus: begin op de hartlijn, ga omhoog, stap verder, keer terug naar de hartlijn en loop dan langs haar naar het begin. De uiteinden moeten samenkomen: de lus moet gesloten zijn.
4. Maat de stralen (hoogten boven de hartlijn) en de lengtes. Een hoogte van 10 boven de hartlijn maakt een diameter van 20.
5. Kies {{ui:Afsluiten}}.
6. Kies {{ui:Omwentelen}}. De as verschijnt, een volledige draai.

Het profiel moet aan één kant van de as blijven. Als het kruist: "Het profiel kruist de as. Houd het aan één kant van de hartlijn." Een rand van het profiel mag op de as liggen.

## Instellingen

| Instelling | Wat het doet | Standaard |
|---|---|---|
| **Bewerking** | Boss (materiaal toevoegen), Uitsnijden (materiaal verwijderen), Doorsnede (het overlap behouden) of Nieuw lichaam | Boss voor {{ui:Omwentelen}}, Uitsnijden voor {{ui:Meer}} › {{ui:Omwentelend uitsnijden}} |
| **Hoek (°)** | Hoe ver er gedraaid wordt, van net boven 0 tot 360 | 360 |
| **As** | De eerste hartlijn, of een lijn of hartlijn in de schets, vermeld als "Hartlijn 1 (l1)" of "Lijn 3 (l3)" | Eerste hartlijn |

Een gedeeltelijke hoek maakt een wig, gedraaid vanaf het schetsvlak in één richting.

Als de schets geen hartlijn heeft en u **As** op Eerste hartlijn laat staan: "Teken een hartlijn (een constructielijn) in de schets om omheen te omwentelen." U kunt ook een volle lijn van het profiel als as kiezen.

## Een groef snijden

1. Met de as al gebouwd, opent u een nieuwe schets op het **Voorvlak** (hetzelfde vlak als de schets van de as).
2. Teken een hartlijn langs dezelfde as: begin op de oorsprong en houd hem horizontaal zodat hij een H krijgt, of typ hem met **Toevoegen op coördinaten** (bijvoorbeeld van `0, 0` tot `100, 0`). Een nieuwe schets kan niet vastklikken aan de lijnen van een andere schets.
3. Teken een kleine gesloten rechthoek die de rand van de as overlapt waar de groef komt.
4. Kies {{ui:Afsluiten}}, en dan {{ui:Meer}} › {{ui:Omwentelend uitsnijden}}.

## Omwentelde vlakken in samenstellingen

Een omwenteling heeft een as die andere kenmerken en samenstellingen kunnen gebruiken:

- een **Cirkelvormig** patroon gebruikt standaard de as van de laatste omwenteling (zie [Patroon- en spiegelkenmerken](topic:patterns-mirror));
- in een samenstelling begint een verbinding tussen vlakken die door omwentelingen zijn gemaakt als een draaiende verbinding, en **Centreren op** biedt "As van Revolve1" aan (zie [Een samenstelling bouwen](topic:build-assembly)).

## Echte krommen en facetten

PartCraft bouwt een omwenteling met de mesh-kernel (de chip in de statusbalk zegt "Mesh-kernel"): ronde vormen zijn platte facetten, standaard 64 per omwenteling, en volumes zijn iets kleiner dan de echte waarde (ongeveer 0.16 % bij 64). Het aanzicht en de STL-, 3MF- en STEP-exports bestaan uit die facetten: zet **Krommen** (klik op lege ruimte, dan het rechterpaneel) op Fijn (128) of Zeer fijn (256) voor gladdere vormen. Echte cilinders, kegels en torussen hebben een exacte kernel nodig: nog niet beschikbaar in deze versie. Zie [De mesh-kernel](topic:solid-kernels).
