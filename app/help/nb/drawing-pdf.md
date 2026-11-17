---
title: Lag en tegning med visninger, snitt og GD&T
summary: Åpne tegningsarket, legg til et snitt og en detaljvisning, plasser datum, rammer for toleranser og symboler for overflatebehandling, velg arkstørrelse, fyll ut tegningshodet og revisjonene, og eksporter arket som PDF.
keywords: hulltabell, hulldiagram, hullposisjoner, merker, tegning, 2D-tegning, ark, arkstørrelse, a4, a3, a2, a1, a0, ansi, tegningshode, revisjon, revisjonsblokk, tegningsnummer, materiale, pdf, visninger, ortografisk, tredjevinkelprojeksjon, isometrisk, snittvisning, detaljvisning, gd&t, datum, ramme for toleranse, toleranse, posisjon, flathet, overflatebehandling, ruhet, skriv ut
from: 39e944c0
---

PartCraft lager et tegningsark av delen: visninger forfra, ovenfra og fra høyre i tredjevinkelprojeksjon, en isometrisk visning, totalmål og et tegningshode på et ark fra A4 til A0 eller ANSI A til E. I tillegg kan du legge til et snitt, en detaljvisning og GD&T-symboler. Arket oppdateres når delen endres, og innstillingene lagres i delfilen.

## Åpne tegningsarket

1. Bygg delen. (Uten noe bygget: "Bygg et legeme først, og lag deretter tegningen.")
2. Velg {{ui:Tegning}} på verktøylinjen.

3D-visningen erstattes av arket. Verktøylinjen viser {{ui:Datum}}, {{ui:Ramme}}, {{ui:Overflate}}, {{ui:Detalj}}, {{ui:PDF}} og {{ui:Tilbake}}, og høyre panel har overskriften **Tegning**. Statuslinjen sier hvordan visningene ble laget: "Tegning (kurver tegnes som facetter). Datum, Ramme og Overflate plasserer GD&T på en visning; panelet setter et snitt og en detaljvisning." Visningene tegnes fra facettene i nettkjernen, så runde kanter er korte rette stykker; ekte buer krever en eksakt kjerne, som denne versjonen ikke har.

Flytt rundt på arket: rull hjulet for å zoome, dra med høyre eller midterste knapp for å panorere, og trykk {{key:F}} for å tilpasse arket. Når arket har fokus, zoomer {{key:Plus}} og {{key:Minus}}, og {{key:Shift}} med piltastene panorerer.

Velg {{ui:Tilbake}}, {{ui:Tilbake til modellen}} eller trykk {{key:Esc}} (med ingenting valgt og ingen aktivt verktøy) for å gå tilbake til 3D-modellen.

## Hva som er på arket

- **Arket du velger**, liggende (A3 hvis du ikke velger noe annet), med ramme og et **tegningshode**: tittel, firma, tegningsnummer, revisjon, materiale, tegnet / kontrollert / godkjent av, dato, målestokk, arkstørrelse, "Enheter: millimeter · Tredjevinkelprojeksjon", og om visningene er eksakte eller facetterte.
- En **revisjonsblokk** øverst til høyre når du har lagt til en revisjon.
- **Visninger forfra, ovenfra og fra høyre**: ovenfra over forfra-visningen, høyre visning til høyre for den. Skjulte kanter er stiplet.
- En **isometrisk visning** der det er plass.
- **Totalmål**: bredde og høyde på forfra-visningen, dybde på ovenfra-visningen.
- Én **målestokk** for hovedvisningene fra ISO-serien (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), valgt slik at de får plass.

## Velg arkstørrelse

På tegningsarket, med ingenting valgt, velg {{ui:Ark}} i høyre panel: **A4, A3, A2, A1, A0** (ISO 216) eller **ANSI A, B, C, D, E** (11 × 8.5 til 44 × 34 in). Visningene legges ut på nytt i den største ISO-målestokken som får plass, så et større ark kan vise delen større.

## Fyll ut tegningshodet

Feltene under **Tegningshode** i høyre panel går rett inn på arket: {{ui:Tittel}}, {{ui:Tegn.nr.}}, {{ui:Revisjon}}, {{ui:Firma}}, {{ui:Tegnet av}}, {{ui:Kontrollert av}}, {{ui:Godkjent av}}, {{ui:Dato}} (år-måned-dag), {{ui:Generell toleranse}} og {{ui:Overflate}} (de to siste skrives rett over tegningshodet). Skriv i en boks og trykk {{key:Enter}} eller klikk utenfor. En tom boks lar cellen stå tom, unntatt:

- **Tittel** viser delens navn til du skriver en.
- **Dato** viser dagens dato til du skriver en.
- **Revisjon** viser den nyeste revisjonen i listen til du skriver en.

**Materiale** kommer fra delen: klikk på et tomt område i modellen, og velg så {{ui:Materiale}} i Del-panelet. Samme materiale gir Måling tettheten i massegenskapene.

## Legg til revisjoner

Under **Revisjoner** klikk {{ui:Legg til revisjon}}. Hver ny rad tar neste bokstav (A, B, C …, etter Z kommer AA) og dagens dato. Skriv hva som ble endret og hvem som gjorde endringen. {{ui:Slett}} fjerner en rad. Revisjonsblokken øverst til høyre på arket lister dem, eldste først, opptil 20.

Arkstørrelse, tegningshode, revisjoner og materiale lagres i delfilen, og hver endring er ett steg i {{ui:Angre}}.

## Legg til et snitt

Delen kuttes av et plan, og snittet skraveres. Som de andre visningene tegnes snittet fra facetter, så runde kanter er korte rette stykker.

1. I høyre panel, sett **Snitt A-A** til **Av forfra-visningen**, **Av ovenfra-visningen** eller **Av høyre visning**.
2. Snittet vises på arket, skravert der kuttet går gjennom materiale, med snittlinjen og dens "A"-piler på visningen det tas fra.
3. Sett **Kutt ved (mm)** for å flytte snittplanet. Det starter gjennom midten av delen.

Sett **Snitt A-A** tilbake til **Ingen** for å fjerne det.

## Legg til en detaljvisning

1. Sett **Detalj B** til visningen som skal forstørres (eller velg {{ui:Detalj}} på verktøylinjen).
2. Klikk på midten av området som skal forstørres, på den visningen. En sirkel merket "B" markerer det, og den forstørrede "Detalj B" vises på arket med egen målestokk, for eksempel "Detalj B (2:1)".
3. Sett **Detaljradius (mm)** for størrelsen på sirkelen og **Detaljmålestokk** for forstørrelsen: 2, 4, 5 eller 10 × arket.

En detalj kan tas fra forfra-, ovenfra-, høyre- eller snittvisningen, ikke fra den isometriske. Hvis det ikke er plass til alle visningene, sier panelet "Ingen plass på arket til: detalj. Gjør detaljen mindre eller fjern en visning."

## Legg til en hulltabell

En hulltabell lister delens hull med posisjonene deres, for boring eller CNC: velg **Hulltabell** › **Av ovenfra-visningen** (eller forfra, eller høyre) i panelet.

- Hvert hull som sees rett forfra i den visningen, får en merkelapp ved siden av seg: **A1**, **A2** … for første størrelse, **B1** … for neste.
- Tabellen lister hver merkelapp, dens **X** og **Y** i millimeter, og størrelsen: "Ø14 THRU", "Ø6.6 × 10 DEEP", en forsenkning, eller et gjengehull med gjengeangivelse.
- X og Y måles fra nedre venstre hjørne av visningens omriss, merket **X0 Y0** på arket.
- Hull laget av mønstre er med. Hull som ikke står vinkelrett på visningen telles i panelet og utelates fra tabellen.

Tabellen legges i et ledig område på arket og i PDF-en.

## Plasser GD&T- og overflatesymboler

1. Velg {{ui:Datum}}, {{ui:Ramme}} (en ramme for toleranser) eller {{ui:Overflate}} (et symbol for overflatebehandling).
2. Klikk på punktet på en visning der det festes. Det fester seg til nærmeste tegnede linje innen 2.5 mm.
3. Symbolet vises med en hjelpelinje, valgt, og høyre panel viser innstillingene.

Dra et symbol for å flytte det; hjelpelinjen blir på punktet. Med et symbol valgt flytter piltastene det 1 mm. {{key:Delete}} eller {{key:Backspace}} (eller {{ui:Slett}} i panelet) fjerner det; {{ui:Ferdig}} eller {{key:Esc}} fjerner markeringen. Hver endring finnes i angrelisten.

### Datum

**Bokstav**: A til Z, uten I, O og Q (de leses som 1, 0 og O). Hvert nytt datum tar neste ledige bokstav.

### Ramme for toleranser

| Innstilling | Valg |
|---|---|
| **Toleranse** | Rettlinjethet, Flathet, Rundhet, Sylinderhet, Profil av linje, Profil av flate, Vinkelrett, Vinkelhet, Parallellitet, Posisjon, Konsentrisitet og Symmetri (begge fjernet i Y14.5-2018, og merket som det), Rundlaup, Totalt rundlaup |
| **Sone (mm)** | Toleranseverdien, standard 0.1 |
| **Diametersone (⌀)** | For egenskaper med en sylindrisk sone; på som standard for Posisjon |
| **Materiale** | RFS (ingen), MMC (Ⓜ), LMC (Ⓛ), der egenskapen tillater det |
| **Primært / Sekundært / Tertiært datum** | Opptil tre datumbokstaver, hver med en **… modifikator** (MMB, LMB) der det er tillatt |

PartCraft kontrollerer rammen mot reglene i ASME Y14.5 og sier hva som er feil øverst i panelet, for eksempel "Flathet er en formtoleranse: den tar ingen datumreferanser." eller "Posisjon trenger minst én datumreferanse." Linjen **Leses** forklarer rammen med ord.

### Overflatebehandling

| Innstilling | Valg | Standard |
|---|---|---|
| **Ra (µm)** | Gjennomsnittlig ruhet | 1.6 |
| **Prosess** | hvilken som helst prosess, maskinert, ingen materiale fjernet | maskinert |
| **Merknad** | Opptil 40 tegn, for eksempel en strukturretning eller en prosess | |

Med ingenting valgt lister panelet **Merknader på arket**, hver med **Velg**.

## Eksporter PDF

Velg {{ui:PDF}} på verktøylinjen, {{ui:Eksporter PDF}} i panelet, eller {{ui:Eksporter}}, og deretter {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}} fra modellen. PDF-en lastes ned som `<part name> - drawing.pdf`, og statuslinjen lister hva som er på den.

Skriv den ut med "Faktisk størrelse" på papir i arkets størrelse for å beholde målestokken.

## Begrensninger

| Ikke bygget ennå | Gjør dette i dag |
|---|---|
| Mål utover de tre totalmålene | Legg dem til i PDF-en med et markeringsprogram, eller eksporter en skisse eller flate som DXF og mål den i et 2D-CAD-program |
| Mer enn ett snitt eller én detalj; brutte, hjelpe- og projiserte visninger | Ikke tilgjengelig |
| Førstevinkelprojeksjon, flyttbare visninger, stående ark | Tredjevinkel, automatisk layout, liggende |
| Fritekstmerknader og tabeller på arket (utover tegningshodet og revisjonsblokkene) | Bruk merknadsfeltet for overflate, eller legg til tekst i PDF-en |
| Tegninger av sammenstillinger | Ikke tilgjengelig |

Tegn utenfor det vesteuropeiske tegnsettet skrives ut som "?" (PDF-en bruker leserens innebygde Helvetica). GD&T-symbolene tegnes som linjer, så de skrives ut i enhver leser.

## La arket gjøre det

- **Ark › Automatisk** velger papiret for deg: den største standardmålestokken opp til 1:1, på det minste A-arket som holder visningene i den målestokken (listen viser hvilket som ble valgt).
- **Mål hullene** setter mål på hullene på visningen som ser flest av dem rett forfra: et senterstrek på hvert, én angivelse per størrelse ("2× Ø6 THRU" med en hjelpelinje), og posisjonene målt fra visningens nedre venstre hjørne. Totalbredde, -høyde og -dybde er alltid med.
