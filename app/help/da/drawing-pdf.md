---
title: Lav en tegning med visninger, snit og GD&T
summary: Åbn tegningsarket, tilføj et snit og en detaljevisning, placér datum, tolerancefeltrammer og symboler for overfladebehandling, vælg arkstørrelse, udfyld tegningshovedet og revisionerne, og eksportér arket som PDF.
keywords: hulliste, hultabel, hulpositioner, tags, tegning, 2D-tegning, ark, arkstørrelse, a4, a3, a2, a1, a0, ansi, tegningshoved, revision, revisionsblok, tegningsnummer, materiale, pdf, visninger, ortografisk, tredjevinkel, isometrisk, snitvisning, detaljevisning, gd&t, datum, tolerancefeltramme, tolerance, position, planhed, overfladebehandling, ruhed, udskriv
from: 39e944c0
---

PartCraft laver et tegningsark ud fra delen: set forfra, set oppefra og set fra højre i tredjevinkelprojektion, en isometrisk visning, samlede mål og et tegningshoved på et ark fra A4 til A0 eller ANSI A til E. Oven på det kan du tilføje et snit, en detaljevisning og GD&T-symboler. Arket opdateres, når delen ændres, og dets indstillinger gemmes i delfilen.

## Åbn tegningsarket

1. Byg delen. (Hvis intet er bygget: »Byg først et solid, og lav derefter tegningen.«)
2. Vælg {{ui:Drawing}} på værktøjslinjen.

3D-visningen erstattes af arket. Værktøjslinjen viser {{ui:Datum}}, {{ui:Frame}}, {{ui:Finish}}, {{ui:Detail}}, {{ui:PDF}} og {{ui:Back}}, og højre panel har overskriften **Tegning**. Statuslinjen siger, hvordan visningerne blev lavet: » Tegning (kurver tegnes som facetter). Datum, Ramme og Overfladebehandling placerer GD&T på en visning; panelet angiver et snit og en detaljevisning. «
Visningerne tegnes ud fra mesh-kernens facetter, så runde kanter er korte rette stykker; rigtige buer kræver en eksakt kerne, som denne version ikke har.

Bevæg dig rundt på arket: drej hjulet for at zoome, træk med højre eller midterste knap for at panorere, og tryk {{key:F}} for at tilpasse arket til skærmen. Når arket har fokus, zoomer {{key:Plus}} og {{key:Minus}}, og {{key:Shift}} sammen med piletasterne panorerer.

Vælg {{ui:Back}}, {{ui:Back to the model}} eller tryk {{key:Esc}} (når intet er valgt, og intet værktøj er aktivt) for at vende tilbage til 3D-modellen.

## Hvad der er på arket

- **Det ark, du vælger**, liggende (A3, hvis du ikke vælger andet), med en kant og et **tegningshoved**: titel, virksomhed, tegningsnummer, revision, materiale, tegnet, kontrolleret og godkendt af, dato, målestok, arkstørrelse, »Enheder: millimeter · Tredjevinkelprojektion« og om visningerne er eksakte eller facetterede.
- En **revisionsblok** i det øverste højre hjørne, når du tilføjer en revision.
- **Set forfra, set oppefra og set fra højre**: oppefra-visningen over forsiden, højre visning til højre for den. Skjulte kanter er stiplet.
- En **isometrisk visning**, hvor der er plads.
- **Samlede mål**: bredde og højde på forsidevisningen, dybde på oppefra-visningen.
- Én **målestok** for hovedvisningerne fra ISO-serien (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), valgt så de passer.

## Vælg arkstørrelse

På tegningsarket, uden noget valgt, vælg {{ui:Sheet}} i højre panel: **A4, A3, A2, A1, A0** (ISO 216) eller **ANSI A, B, C, D, E** (11 × 8.5 til 44 × 34 in). Visningerne lægges ud igen i den største ISO-målestok, der passer, så et større ark kan vise delen større.

## Udfyld tegningshovedet

Felterne i **Tegningshoved** i højre panel går direkte op på arket: {{ui:Title}}, {{ui:Drawing no.}}, {{ui:Revision}}, {{ui:Company}}, {{ui:Drawn by}}, {{ui:Checked by}}, {{ui:Approved by}}, {{ui:Date}} (år-måned-dag), {{ui:General tolerance}} og {{ui:Finish}} (de to sidste udskrives lige over tegningshovedet). Skriv i en boks og tryk {{key:Enter}} eller klik et andet sted. En tom boks lader sin celle være tom, undtagen:

- **Titel** viser delens navn, indtil du skriver en titel.
- **Dato** viser i dag, indtil du skriver en dato.
- **Revision** viser den nyeste revision på listen, indtil du skriver en.

**Materiale** kommer fra delen: klik på tomt rum i modellen, og vælg derefter {{ui:Material}} i delpanelet. Det samme materiale giver Measures masseegenskaber deres densitet.

## Tilføj revisioner

Under **Revisioner** klikker du på {{ui:Add revision}}. Hver ny række tager det næste bogstav (A, B, C …, og efter Z kommer AA) og dagens dato. Skriv, hvad der er ændret, og hvem der ændrede det. {{ui:Delete}} fjerner en række. Revisionsblokken i det øverste højre hjørne af arket lister dem, ældste først, op til 20.

Arkstørrelse, tegningshoved, revisioner og materiale gemmes i delfilen, og hver ændring er ét trin i {{ui:Undo}}.

## Tilføj en snitvisning

Delen skæres af et plan, og snittet skraveres. Ligesom de andre visninger tegnes snittet ud fra facetter, så runde kanter er korte rette stykker.

1. I højre panel sættes **Section A-A** til **Af forsidevisningen**, **Af oppefra-visningen** eller **Af højre visning**.
2. Snittet vises på arket, skraveret hvor skæret går gennem materiale, med skærelinjen og dens »A«-pile på den visning, det tages fra.
3. Sæt **Cut at (mm)** for at flytte skæreplanet. Det starter midt i delen.

Sæt **Section A-A** tilbage til **None** for at fjerne snittet.

## Tilføj en detaljevisning

1. Sæt **Detail B** til den visning, der skal forstørres (eller vælg {{ui:Detail}} på værktøjslinjen).
2. Klik på midten af det område, der skal forstørres, på den visning. En cirkel mærket »B« markerer det, og den forstørrede »Detail B« vises på arket med sin egen målestok, fx »Detail B (2:1)«.
3. Sæt **Detail radius (mm)** for cirklens størrelse og **Detail scale** for forstørrelsen: 2, 4, 5 eller 10 gange arket.

En detalje kan tages fra forside-, oppefra-, højre- eller snitvisningen, ikke fra den isometriske. Hvis der ikke er plads til alle visninger, siger panelet: »Der er ikke plads på arket til: detail. Gør detaljen mindre, eller fjern en visning.«

## Tilføj en hultabel

En hultabel lister delens huller med deres positioner, til boring eller CNC: vælg **Hultabel** › **Af oppefra-visningen** (eller forside, eller højre) i panelet.

- Hvert hul, der ses ende-på i den visning, får et tag ved siden af sig: **A1**, **A2** … for den første størrelse, **B1** … for den næste.
- Tabellen lister hvert tag, dets **X** og **Y** i millimeter og dets størrelse: »Ø14 THRU«, »Ø6.6 × 10 DEEP«, en cylindrisk forsænkning eller en konisk forsænkning, eller en gevindangivelse for et gevindhul.
- X og Y måles fra det nederste venstre hjørne af visningens kontur, markeret **X0 Y0** på arket.
- Huller lavet af mønstre er med. Huller, der ikke står vinkelret på visningen, tælles i panelet og udelades af tabellen.

Tabellen placeres på et ledigt område på arket og i PDF'en.

## Placér GD&T- og overfladebehandlingssymboler

1. Vælg {{ui:Datum}}, {{ui:Frame}} (en tolerancefeltramme) eller {{ui:Finish}} (et symbol for overfladebehandling).
2. Klik på det punkt på en visning, hvor det sætter sig fast. Det hægter sig på den nærmeste tegnede linje inden for 2.5 mm.
3. Symbolet vises med en henvisningslinje, valgt, og højre panel viser dets indstillinger.

Træk et symbol for at flytte det; henvisningslinjen bliver på punktet. Når et symbol er valgt, flytter piletasterne det 1 mm. {{key:Delete}} eller {{key:Backspace}} (eller {{ui:Delete}} i panelet) fjerner det; {{ui:Done}} eller {{key:Esc}} fravælger det. Hver ændring er på fortrydelseslisten.

### Datum

**Bogstav**: A til Z, uden I, O og Q (de læses som 1, 0 og O). Hvert nyt datum tager det næste ledige bogstav.

### Tolerancefeltramme

| Indstilling | Valg |
|---|---|
| **Tolerance** | Retlinethed, Planhed, Rundhed, Cylindricitet, Profil af en linje, Profil af en flade, Vinkelret, Vinkelhed, Parallelitet, Position, Koncentricitet og Symmetri (begge fjernet i Y14.5-2018, og markeret som sådan), Rundløb, Totalt rundløb |
| **Zone (mm)** | Tolerancens værdi, standard 0.1 |
| **Diameterzone (⌀)** | For karakteristika med en cylindrisk zone; til som standard for Position |
| **Materiale** | RFS (ingen), MMC (Ⓜ), LMC (Ⓛ), hvor karakteristikken tillader det |
| **Primær / sekundær / tertiær datum** | Op til tre datumbogstaver, hver med en **… modifikator** (MMB, LMB), hvor det er tilladt |

PartCraft kontrollerer rammen mod reglerne i ASME Y14.5 og siger, hvad der er galt, øverst i panelet, fx »Planhed er en formtolerance: den tager ingen datumreferencer.« eller »Position kræver mindst én datumreference.« Linjen **Læses** staver rammen ud.

### Overfladebehandling

| Indstilling | Valg | Standard |
|---|---|---|
| **Ra (µm)** | Gennemsnitlig ruhed | 1.6 |
| **Proces** | vilkårlig proces, bearbejdet, intet materiale fjernet | bearbejdet |
| **Note** | Op til 40 tegn, fx en lægningsretning eller en proces | |

Når intet er valgt, lister panelet **Noter på arket**, hver med **Vælg**.

## Eksportér PDF'en

Vælg {{ui:PDF}} på værktøjslinjen, {{ui:Export PDF}} i panelet, eller {{ui:Export}}, og derefter {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}} fra modellen. PDF'en downloades som `<part name> - drawing.pdf`, og statuslinjen lister, hvad der er på den.

Udskriv den med »Faktisk størrelse« på papir i arkets størrelse for at holde målestoken rigtig.

## Begrænsninger

| Ikke lavet endnu | Gør dette i dag |
|---|---|
| Målsætninger ud over de tre samlede mål | Tilføj dem på PDF'en med et markup-program, eller eksportér en skitse eller flade som DXF og målsæt den i et 2D-CAD-program |
| Mere end ét snit eller én detalje; brudte, hjælpe- og projicerede visninger | Ikke tilgængeligt |
| Førsteviniklet projektion, flytbare visninger, stående ark | Tredjevinkel, automatisk layout, liggende |
| Frie tekstnoter og tabeller på arket (ud over tegningshoved og revisionsblokke) | Brug overfladebehandlingsnoten, eller tilføj tekst på PDF'en |
| Tegninger af samlinger | Ikke tilgængeligt |

Tegn uden for det vesteuropæiske tegnsæt udskrives som »?« (PDF'en bruger læserens indbyggede Helvetica). GD&T-symbolerne tegnes som linjer, så de udskrives i enhver læser.

## Lad arket gøre det

- **Ark › Automatisk** vælger papiret for dig: den største standardmålestok op til 1:1, på det mindste A-ark, der rummer visningerne i den målestok (listen viser, hvilket den valgte).
- **Målsæt hullerne** målsætter hullerne på den visning, der ser flest af dem ende-på: et centermærke på hvert, én henvisning pr. størrelse (»2× Ø6 THRU« med en henvisningslinje), og deres positioner målt fra visningens nederste venstre hjørne. Den samlede bredde, højde og dybde er altid med.
