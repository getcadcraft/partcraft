---
title: Een tekening maken met aanzichten, een doorsnede en GD&T
summary: Open het tekenblad, voeg een doorsnede en een detailaanzicht toe, plaats referentievlakken, tolerantiekaders en symbolen voor oppervlakteafwerking, kies het bladformaat, vul het titelblok en de revisies in, en exporteer het blad als PDF.
keywords: gatentabel, gatposities, tags, tekening, 2D-tekening, blad, bladformaat, a4, a3, a2, a1, a0, ansi, titelblok, revisie, revisieblok, tekeningnummer, materiaal, pdf, aanzichten, orthografisch, derde hoek, isometrisch, doorsnedeaanzicht, detailaanzicht, gd&t, referentievlak, tolerantiekader, tolerantie, positie, vlakheid, oppervlakteafwerking, ruwheid, afdrukken
from: 39e944c0
---

PartCraft maakt van het onderdeel een tekenblad: voor-, boven- en rechteraanzicht in derdehoekprojectie, een isometrisch aanzicht, totaalmaten en een titelblok op een blad van A4 tot A0 of ANSI A tot E. Daarbovenop kunt u een doorsnede, een detailaanzicht en GD&T-symbolen toevoegen. Het blad wordt bijgewerkt als het onderdeel verandert, en de instellingen ervan worden in het onderdeelbestand opgeslagen.

## Het tekenblad openen

1. Bouw het onderdeel. (Als er niets is gebouwd: "Bouw eerst een volume, en maak daarna de tekening ervan.")
2. Kies {{ui:Tekening}} in de werkbalk.

Het 3D-beeld wordt vervangen door het blad. De werkbalk toont {{ui:Datum}}, {{ui:Tolerantie}}, {{ui:Afwerking}}, {{ui:Detail}}, {{ui:PDF}} en {{ui:Terug}}, en het rechterpaneel heeft als kop **Tekening**. De statusbalk zegt hoe de aanzichten zijn gemaakt: "Tekening (krommen worden als facetten getekend). Datum, Tolerantie en Afwerking plaatsen GD&T op een aanzicht; het paneel stelt een doorsnede en een detailaanzicht in." De aanzichten worden getekend uit de facetten van de meshkern, dus ronde randen zijn korte rechte stukken; echte bogen vereisen een exacte kern, die deze versie niet heeft.

Beweeg over het blad: rol het wiel om te zoomen, sleep met de rechter- of middelste knop om te verschuiven, en druk op {{key:F}} om het blad in beeld te brengen. Als het blad de focus heeft, zoomen {{key:Plus}} en {{key:Minus}}, en verschuift {{key:Shift}} met de pijltoetsen.

Kies {{ui:Terug}}, {{ui:Terug naar het model}} of druk op {{key:Esc}} (met niets geselecteerd en geen gereedschap actief) om terug te keren naar het 3D-model.

## Wat op het blad staat

- **Het blad dat u kiest**, liggend (A3 tenzij u iets anders kiest), met een rand en een **titelblok**: titel, bedrijf, tekeningnummer, revisie, materiaal, getekend, gecontroleerd en goedgekeurd door, datum, schaal, bladformaat, "Eenheden: millimeter · Derdehoekprojectie", en of de aanzichten exact of gefacetteerd zijn.
- Een **revisieblok** rechtsboven zodra u een revisie toevoegt.
- **Voor-, boven- en rechteraanzicht**: het bovenaanzicht boven het vooraanzicht, het rechteraanzicht ernaast. Verborgen randen gestippeld.
- Een **isometrisch aanzicht** waar ruimte voor is.
- **Totaalmaten**: breedte en hoogte op het vooraanzicht, diepte op het bovenaanzicht.
- Eén **schaal** voor de hoofdaanzichten uit de ISO-reeks (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), gekozen zodat ze passen.

## Het bladformaat kiezen

Kies op het tekenblad, met niets geselecteerd, {{ui:Blad}} in het rechterpaneel: **A4, A3, A2, A1, A0** (ISO 216) of **ANSI A, B, C, D, E** (11 × 8.5 tot 44 × 34 in). De aanzichten worden opnieuw ingedeeld op de grootste ISO-schaal die past, dus een groter blad kan het onderdeel groter tonen.

## Het titelblok invullen

De velden **Titelblok** in het rechterpaneel gaan rechtstreeks naar het blad: {{ui:Titel}}, {{ui:Tekeningnr.}}, {{ui:Revisie}}, {{ui:Bedrijf}}, {{ui:Getekend door}}, {{ui:Gecontroleerd door}}, {{ui:Goedgekeurd door}}, {{ui:Datum}} (jaar-maand-dag), {{ui:Algemene tolerantie}} en {{ui:Afwerking}} (de laatste twee worden net boven het titelblok afgedrukt). Typ in een vak en druk op {{key:Enter}} of klik ergens anders. Een leeg vak laat de cel leeg, behalve:

- **Titel** toont de naam van het onderdeel tot u er zelf een typt.
- **Datum** toont vandaag tot u er zelf een typt.
- **Revisie** toont de nieuwste revisie in de lijst tot u er zelf een typt.

**Materiaal** komt van het onderdeel: klik op een lege plek in het model en kies dan {{ui:Materiaal}} in het paneel Onderdeel. Hetzelfde materiaal geeft de massa-eigenschappen van Meten hun dichtheid.

## Revisies toevoegen

Klik onder **Revisies** op {{ui:Revisie toevoegen}}. Elke nieuwe rij krijgt de volgende letter (A, B, C …; na Z komt AA) en de datum van vandaag. Typ wat er is veranderd en wie de wijziging heeft gemaakt. {{ui:Verwijderen}} verwijdert een rij. Het revisieblok rechtsboven op het blad toont ze, oudste eerst, tot 20.

Bladformaat, titelblok, revisies en materiaal worden in het onderdeelbestand opgeslagen, en elke wijziging is één stap van {{ui:Ongedaan maken}}.

## Een doorsnedeaanzicht toevoegen

Het onderdeel wordt door een vlak gesneden en de snede is gearceerd. Net als de andere aanzichten wordt de doorsnede uit facetten getekend, dus ronde randen zijn korte rechte stukken.

1. Stel in het rechterpaneel **Doorsnede A-A** in op **Van het vooraanzicht**, **Van het bovenaanzicht** of **Van het rechteraanzicht**.
2. De doorsnede verschijnt op het blad, gearceerd waar de snede door materiaal gaat, met de snijlijn en de "A"-pijlen op het aanzicht waarvan hij wordt genomen.
3. Stel **Snede bij (mm)** in om het snijvlak te verplaatsen. Het begint door het midden van het onderdeel.

Stel **Doorsnede A-A** terug op **Geen** om hem te verwijderen.

## Een detailaanzicht toevoegen

1. Stel **Detail B** in op het aanzicht dat u wilt vergroten (of kies {{ui:Detail}} in de werkbalk).
2. Klik op het midden van het gebied dat u wilt vergroten, op dat aanzicht. Een cirkel met de letter "B" markeert het, en het vergrote "Detail B" verschijnt op het blad met zijn eigen schaal, bijvoorbeeld "Detail B (2:1)".
3. Stel **Detailstraal (mm)** in voor de grootte van de cirkel, en **Detailschaal** voor de vergroting: 2, 4, 5 of 10 × het blad.

Een detail kan worden genomen van het voor-, boven-, rechter- of doorsnedeaanzicht, niet van het isometrische aanzicht. Als er geen ruimte is voor elk aanzicht, zegt het paneel "Geen ruimte op het blad voor: detail. Maak het detail kleiner of laat een aanzicht weg."

## Een gatentabel toevoegen

Een gatentabel somt de gaten van het onderdeel op met hun posities, voor boren of CNC: kies in het paneel **Gatentabel** › **Van het bovenaanzicht** (of voor- of rechteraanzicht).

- Elk gat dat in dat aanzicht van opzij zichtbaar is, krijgt een tag ernaast: **A1**, **A2** … voor de eerste maat, **B1** … voor de volgende.
- De tabel toont elke tag, zijn **X** en **Y** in millimeter, en zijn maat: "Ø14 THRU", "Ø6.6 × 10 DEEP", een verzinking of een tegenboring, of de schroefdraadaanduiding van een getapt gat.
- X en Y worden gemeten vanaf de linkerondergrens van de omtrek van het aanzicht, aangegeven met **X0 Y0** op het blad.
- Gaten die door patronen zijn gemaakt, zijn meegeteld. Gaten die niet loodrecht op het aanzicht staan, worden in het paneel geteld en uit de tabel gelaten.

De tabel komt in een vrij gebied van het blad en in de PDF.

## GD&T- en oppervlakteafwerkingssymbolen plaatsen

1. Kies {{ui:Datum}}, {{ui:Tolerantie}} (een tolerantiekader) of {{ui:Afwerking}} (een symbool voor oppervlakteafwerking).
2. Klik op het punt op een aanzicht waar het aansluit. Het springt naar de dichtstbijzijnde getekende lijn binnen 2.5 mm.
3. Het symbool verschijnt met een leider, geselecteerd, en het rechterpaneel toont de instellingen.

Sleep een symbool om het te verplaatsen; de leider blijft op het punt. Met een symbool geselecteerd verschuiven de pijltoetsen het 1 mm. {{key:Delete}} of {{key:Backspace}} (of {{ui:Verwijderen}} in het paneel) verwijdert het; {{ui:Gereed}} of {{key:Esc}} heft de selectie op. Elke wijziging staat in de lijst van ongedaan maken.

### Referentievlak

**Letter**: A tot Z, zonder I, O en Q (die lijken op 1, 0 en O). Elk nieuw referentievlak krijgt de volgende vrije letter.

### Tolerantiekader

| Instelling | Keuzes |
|---|---|
| **Tolerantie** | Rechtheid, Vlakheid, Rondheid, Cilindriciteit, Profiel van een lijn, Profiel van een oppervlak, Haaksheid, Hoekigheid, Evenwijdigheid, Positie, Concentriciteit en Symmetrie (beide verwijderd in Y14.5-2018, en zo gemarkeerd), Radiale slag, Totale slag |
| **Zone (mm)** | De tolerantiewaarde, standaard 0.1 |
| **Diameterzone (⌀)** | Voor kenmerken met een cilindrische zone; standaard aan voor Positie |
| **Materiaal** | RFS (geen), MMC (Ⓜ), LMC (Ⓛ), waar het kenmerk dat toestaat |
| **Primair / Secundair / Tertiair referentievlak** | Tot drie referentieletters, elk met een **… modifier** (MMB, LMB) waar toegestaan |

PartCraft controleert het kader aan de regels van ASME Y14.5 en zegt bovenaan het paneel wat er niet klopt, bijvoorbeeld "Vlakheid is een vormtolerantie: er zijn geen referentievlakken." of "Positie heeft minstens één referentievlak nodig." De regel **Leest** beschrijft het kader in woorden.

### Oppervlakteafwerking

| Instelling | Keuzes | Standaard |
|---|---|---|
| **Ra (µm)** | Gemiddelde ruwheid | 1.6 |
| **Proces** | elk proces, bewerkt, geen materiaal verwijderd | bewerkt |
| **Notitie** | Tot 40 tekens, zoals een strijkrichting of een proces | |

Zonder selectie toont het paneel **Notities op het blad**, elk met **Selecteren**.

## De PDF exporteren

Kies {{ui:PDF}} in de werkbalk, {{ui:PDF exporteren}} in het paneel, of {{ui:Exporteren}}, en daarna {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}} vanuit het model. De PDF wordt gedownload als `<part name> - drawing.pdf`, en de statusbalk somt op wat erop staat.

Druk af op "Werkelijke grootte" op papier van het formaat van het blad om de schaal juist te houden.

## Beperkingen

| Nog niet beschikbaar | Nu doen |
|---|---|
| Maten anders dan de drie totaalmaten | Voeg ze toe op de PDF met een markup-app, of exporteer een schets of vlak als DXF en bemaat het in een 2D-CAD-programma |
| Meer dan één doorsnede of detail; uitgebroken, hulp- en geprojecteerde aanzichten | Niet beschikbaar |
| Eerstehoekprojectie, verplaatsbare aanzichten, staande bladen | Derdehoek, automatische indeling, liggend |
| Vrije tekstnotities en tabellen op het blad (behalve de titel- en revisieblokken) | Gebruik de afwerkingsnotitie, of voeg tekst toe op de PDF |
| Tekeningen van samenstellingen | Niet beschikbaar |

Tekens buiten de West-Europese set worden afgedrukt als "?" (de PDF gebruikt het ingebouwde lettertype Helvetica van de lezer). De GD&T-symbolen worden als lijnen getekend, dus ze worden in elke lezer afgedrukt.

## Laat het blad het werk doen

- **Blad › Automatisch** kiest het papier voor u: de grootste standaardschaal tot 1:1, op het kleinste A-formaat dat de aanzichten bij die schaal bevat (de lijst toont welk formaat is gekozen).
- **Gaten bematen** bemaat de gaten op het aanzicht dat de meeste ervan van opzij ziet: een middelpuntmarkering op elk, één aanduiding per maat ("2× Ø6 THRU" met een leider), en hun posities gemeten vanaf de linkerondergrens van het aanzicht. De totale breedte, hoogte en diepte zijn er altijd.
