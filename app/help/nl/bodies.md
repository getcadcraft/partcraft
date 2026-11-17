---
title: Lichamen combineren, verplaatsen en schalen; padpatronen
summary: Maak losse lichamen en voeg ze achteraf samen, snijd ze af of doorsnijd ze, verplaats, draai, lijn uit of kopieer ze, schaal ze gelijkmatig of per X, Y en Z, en kopieer features of lichamen langs een curve.
keywords: lichaam, lichamen, meerdere lichamen, nieuw lichaam, combineren, booleaans, samenvoegen, snijden, doorsnijden, aftrekken, vereniging, gereedschappen behouden, lichaam verplaatsen, lichaam kopiëren, lichaam roteren, uitlijnen, verschuiven, schalen, niet-uniforme schaal, uitrekken, affine, padpatroon, patroon langs curve, array langs pad, door curve aangestuurd patroon
from: 6b1ea820
---

:::note
**Nog niet beschikbaar in deze versie.** Met meerdere lichamen werken vereist een exacte geometriekernel, die deze versie van PartCraft niet heeft: alle onderdelen worden met de mesh-kernel gebouwd. [Wat nog niet beschikbaar is](topic:not-built-yet) beschrijft wat u in plaats daarvan kunt doen. De rest van deze pagina beschrijft hoe het werkt met een exacte kernel.
:::

Een onderdeel kan meer dan één volume bevatten. Elk afzonderlijk volume is een **lichaam**. De meeste features voegen toe aan of snijden af van elk lichaam dat ze raken; de gereedschappen op deze pagina werken op hele lichamen die u kiest. Ze staan in het menu {{ui:Meer}} van de groep Features: {{ui:Combineren}}, {{ui:Lichaam verplaatsen}}, {{ui:Lichaam schalen}} en {{ui:Padpatroon}}. Alle hebben de exacte kernel (OpenCascade) nodig.

## Een apart lichaam maken

Zet de **Bewerking** van een extrusie of een omwenteling in het rechterpaneel op **Nieuw lichaam** (uitvegen en loft hebben die ook). Het nieuwe volume blijft apart, ook waar het de andere overlapt. **Doorsnede** houdt alleen de overlap van de nieuwe vorm met wat er al is.

Lichamen krijgen de naam van de feature die ze begon: "Extrude2". Een kopie krijgt de naam van het origineel en de feature die haar kopieerde: "Extrude2, kopie 1 van Move1". De namen blijven gelijk als u maten stroomopwaarts wijzigt, zodat de features die een lichaam gebruiken het blijven vinden. Bij twee of meer lichamen toont het onderdeelpaneel (klik op lege ruimte) ze met hun volumes.

## Een lichaam hernoemen of verbergen

Klik op lege ruimte in de weergave om het onderdeelpaneel te zien. De lichaamlijst (getoond bij twee of meer lichamen) heeft per rij een naamveld en een knop {{ui:Verbergen}}.

- **Hernoemen:** typ een nieuwe naam in het veld en druk op {{key:Enter}} of klik ernaast. Elk paneel gebruikt die dan: Combineren, Lichaam verplaatsen, de patronen. Wis het veld om terug te gaan naar de naam van de feature die het lichaam maakte.
- **Verbergen:** klik op {{ui:Verbergen}} in de rij. Het lichaam verdwijnt uit de weergave en klikken gaan er doorheen, zodat u vlakken erachter kunt kiezen. {{ui:Tonen}} brengt het terug; {{ui:Alles tonen}} brengt elk verborgen lichaam terug.

Verbergen verandert alleen de weergave. Een verborgen lichaam wordt nog steeds gebouwd, meegeteld in het volume en de metingen, en opgeslagen in de STL-, 3MF- en STEP-exports. Namen en verborgen lichamen worden in het onderdeelbestand opgeslagen, en elke wijziging is één stap van {{ui:Ongedaan maken}}.

## Lichamen combineren

1. Shift+klik op een vlak van het **doellichaam**, en daarna op een vlak van elk **gereedschapslichaam**.
2. Kies {{ui:Meer}}, en daarna {{ui:Combineren}}.
3. Kies in het rechterpaneel de **Bewerking**:

| Bewerking | Resultaat |
|---|---|
| Samenvoegen | Het doel en de gereedschappen worden één lichaam |
| Uitsnijden | De gereedschappen worden van het doel afgehaald |
| Doorsnede | Alleen wat het doel en elk gereedschap delen, blijft behouden |

Het **doellichaam** is het lichaam dat zijn naam behoudt. Vink **Gereedschapslichamen** aan of uit, of gebruik **Kies in de weergave** en klik op hun vlakken. **Gereedschapslichamen behouden** laat de gereedschappen ook op hun plaats staan (handig voor een matrijs en zijn kern). Als een gereedschapslichaam al is opgebruikt door een eerdere combinatie, meldt het paneel dat, in plaats van een ander lichaam te kiezen.

## Een lichaam verplaatsen of kopiëren

1. Kies {{ui:Meer}}, en daarna {{ui:Lichaam verplaatsen}}. Het nieuwste lichaam is aangevinkt; vink de lichamen aan die u wilt verplaatsen.
2. Kies het type **Verplaatsen**:

| Verplaatsen | Wat u instelt |
|---|---|
| Verschuiven | **ΔX**, **ΔY**, **ΔZ** in millimeters |
| Punt naar punt | **Van** en **Naar**: klik dicht bij het einde van een rand, een puntfeature, of een plek op een vlak |
| Roteren om een as | **As** (X, Y, Z, een asfeature, of **Kies**: een rechte rand, een cirkel of een cilinder) en **Hoek (°)** |
| Een vlak uitlijnen op een vlak | **Te verplaatsen vlak** (een plat vlak van het lichaam), **Op** (een plat vlak of een vlak) |

Uitlijnen draait het lichaam zodat zijn vlak op het andere vlak ligt, vlak tegen vlak, en schuift het daarna alleen langs de normaal van dat vlak. **Zelfde richting** draait het de andere kant op. **Kopiëren** behoudt het origineel en voegt de verplaatste kopie toe als nieuw lichaam.

## Een lichaam schalen

1. Kies {{ui:Meer}}, en daarna {{ui:Lichaam schalen}}, en vink de lichamen aan.
2. Typ een **Schaal**, of vink **Uniform** uit en typ **Schaal X**, **Schaal Y** en **Schaal Z** (langs de wereldassen).
3. **Rond** is het punt dat op zijn plaats blijft: het middelpunt van de doos om de lichamen, of een punt dat u kiest.

Een uniforme schaal is exact. Een niet-uniforme schaal maakt van cirkels ellipsen: een cilinder wordt een elliptische cilinder, wat geen analytisch oppervlak kan bevatten. Gekromde vlakken worden daardoor B-spline-oppervlakken die binnen 0.0000004 mm van de exacte vorm blijven; platte vlakken en rechte randen blijven exact. Het paneel meldt welke van beide is gebeurd. Schaalfactoren moeten groter zijn dan nul (spiegel in plaats daarvan met {{ui:Spiegelen}}).

## Langs een pad kopiëren

1. Selecteer de feature om te kopiëren in de geschiedenis, of laat niets geselecteerd om het nieuwste lichaam te kopiëren.
2. Kies {{ui:Meer}}, en daarna {{ui:Padpatroon}}. De nieuwste ongebruikte schets wordt als pad gebruikt.
3. Stel in het rechterpaneel in:

| Instelling | Wat het doet |
|---|---|
| **Kopiëren** | Lichamen (elke kopie wordt een nieuw lichaam) of Features (samengevoegd of uitgesneden zoals het origineel) |
| **Pad** | Vink schetsen aan, of **Modelranden kiezen**; de delen moeten van begin tot eind op elkaar aansluiten |
| **Aantal** | Totaal aantal, inclusief het origineel |
| **Verdeling** | Gelijk (verspreid tot het einde van een open pad, of rondom een gesloten pad) of een vaste afstand |
| **Oriëntatie** | Volg het pad (elke kopie draait mee) of Vast (kopieën blijven evenwijdig) |
| **Richting omkeren** | Loop de andere kant op langs het pad |

De kopieën beginnen waar het pad het dichtst bij het origineel komt en worden op lengte langs de curve verdeeld.

Lineaire en cirkelvormige patronen kunnen ook lichamen kopiëren: vink **Lichamen kopiëren** aan in hun paneel en kies de lichamen. Elke kopie is een nieuw lichaam.

## Beperkingen

- Lichamen hebben de exacte kernel nodig; de mesh-kernel houdt één volume en meldt dat.
- Een niet-uniforme schaal maakt gekromde vlakken tot nauwe B-spline-benaderingen (zie hierboven), niet tot exacte cilinders of kegels; offsetvlakken kunnen zo nog niet worden geschaald.
- Het volgen van het pad op een gedraaide 3D-curve voert de kopie mee zonder haar te draaien; op vlakke paden is de draai exact.
- Combineren werkt alleen op volumes. Oppervlaktelichamen worden samengevoegd met {{ui:Hechten}}.

Zie ook [Referentievlakken, assen en punten](topic:reference-geometry) voor punten en vlakken "tussen objecten", en [Patroon- en spiegelfeatures](topic:patterns-mirror).
