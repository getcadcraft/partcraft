---
title: PartCraft-skjermen
summary: En omvisning i hver linje og hvert panel: verktøylinjen og hvordan den endrer seg, historikken, fakta om delen, 3D-visningen, egenskapspanelet og statuslinjen.
keywords: skjerm, layout, verktøylinje, historikk, funksjonstre, egenskaper, panel, statuslinje, grensesnitt, ui, omvisning, fullskjerm
from: 5b5bb843
---

Skjermen har fem deler: verktøylinjen øverst, historikken til venstre, 3D-visningen i midten, egenskapspanelet til høyre og statuslinjen langs bunnen. Over dem alle ligger CadCraft-appfeltet.

## Appfeltet

Den tynne linjen helt øverst hører til CadCraft-nettstedet, ikke til PartCraft selv. Den viser appnavnet og hvor den kjører, en versjonsmeny, **Om PartCraft**, knappen for skjermmodus og bryteren for Papir / Modell-tema.

- **Papir** er mørke linjer på et lyst ark. **Modell** er lyse linjer på en mørk bakgrunn. Skissefarger følger temaet.
- {{ui:Innstillinger}} (tannhjulet, eller {{key:Mod+,}}) har en fane {{ui:PartCraft}}: hvilken musknapp som dreier visningen, musehjul eller styreplate, og relasjoner under skissering. Se [Innstillinger for PartCraft](topic:settings).
- Knappen for skjermmodus, eller {{key:Ctrl+Shift+F}}, går gjennom normal, fullskjerm og fullskjerm med linjene skjult. Med linjene skjult flytter du pekeren til toppkanten (eller trykker der) for å hente dem frem igjen. {{key:Esc}} går tilbake til normal. Tasten er {{key:Ctrl+Shift+F}} også på en Mac, ikke ⌘.

## Verktøylinjen

Verktøylinjen er gruppert. Den endrer seg med det du gjør, slik at den får plass på én rad:

| Gruppe | Knapper | Vises |
|---|---|---|
| Fil | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Lagre}}, {{ui:Eksporter}} (en meny) | Alltid |
| Skisse | {{ui:Skisse}} | Når ingen skisse er åpen |
| Skisse | {{ui:Avslutt}}, {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Sirkel}}, {{ui:Bue}}, {{ui:Punkt}}, {{ui:Midtlinje}}, {{ui:Avrunding}}, {{ui:Mål}}, {{ui:Konstruksjon}} | Bare mens en skisse er åpen |
| Funksjoner | {{ui:Ekstruder}}, {{ui:Klipp ut}}, {{ui:Roter}}, {{ui:Hull}}, {{ui:Lineært}}, {{ui:Sirkulært}}, {{ui:Speil}}, {{ui:Avrunding}}, {{ui:Fasing}}, {{ui:Skall}}, {{ui:Mer}} (en meny: Rotert kutt, Plan, Akse, Punkt, Sveip, Loft, Trekkvinkel) | På delen, ikke mens en skisse eller tegningen er åpen. Avrunding og Fasing fungerer på rette kanter mellom to plane flater; Skall og Trekkvinkel på plane flater. Sveip og Loft er ikke bygget i denne versjonen ennå (de krever en eksakt kjerne). Et klikk på en av dem sier det |
| Funksjoner | {{ui:Ferdig}} | Bare mens du velger kanter eller flater for en avrunding, fasing, skall eller trekkvinkel |
| Tegning | {{ui:Tegning}} | På delen (kan brukes når delen har et volumlegeme) |
| Tegning | {{ui:Datum}}, {{ui:Ramme}}, {{ui:Overflate}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Tilbake}} | Bare på tegningsarket |
| Sammenstilling | {{ui:Sammenstilling}} | På delen (kan brukes når delen har et volumlegeme) |
| Sammenstilling | {{ui:Legg til kopi}}, {{ui:Sett inn}}, {{ui:Ledd}}, {{ui:Kollisjon}}, {{ui:Rediger del}}, {{ui:Lukk}} | Bare i en sammenstilling |
| Sammenstilling | {{ui:Tilbake}} | Mens du redigerer en del fra en sammenstilling |
| Rediger | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Mer}} (en meny: Klipp ut, Kopier, Lim inn, Lim inn på samme sted, Dupliser, Slett, Velg alle, Fjern utvalg) | Alltid. Hver post virker på skissen, historikken eller sammenstillingen du er i |
| Vis | {{ui:Tilpass}}, {{ui:Normalt til}}, {{ui:Visninger}} (en meny: Mål, Massegenskaper, Snitt, Utkast, Zebra, Krumning, {{ui:Grunnplan}}, deretter Isometrisk, Front, Bakfra, Topp, Bunn, Høyre, Venstre) | Alltid |

Hold pekeren over en knapp for å se hva den gjør og tasten den har. En nedtonet knapp kan ikke brukes akkurat nå: for eksempel funksjonsknappene mens en skisse er åpen, eller {{ui:Ledd}} før sammenstillingen har to deler.

{{ui:Mer}}-menyen i gruppen Rediger lister hver redigeringshandling med tasten sin. Hva kopier og lim inn virker på, avhenger av hvor du er; se [Kopier, lim inn og dupliser](topic:copy-paste). Verktøytipset til en nedtonet post sier hvorfor den ikke kan virke nå.

{{ui:Eksporter}}-menyen har {{ui:STL, for 3D-utskrift}}, {{ui:3MF, for 3D-utskrift}}, {{ui:STEP AP242 (eksakt volumlegeme)}}, {{ui:STEP AP214 (eksakt volumlegeme)}}, {{ui:STEP (fasettert, nettkjerne)}}, {{ui:STEP AP214 (fasettert, nettkjerne)}}, {{ui:DXF av skissen eller den plane flaten}} og {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}}. De eksakte STEP-postene skriver runde flater på sine ekte flater; de fasetterte skriver dem som flate fasetter.

## Historikken (venstre)

Panelet til venstre er delens funksjonshistorikk, listen PartCraft bygger på nytt fra topp til bunn.

- Overskriften er delens navn («Part1» til du gir den nytt navn).
- **Frontplan**, **Topplan** og **Høyreplan** kommer først. Klikk på en for å velge den; den markeres i visningen.
- Under dem står funksjonene dine i den rekkefølgen de ble laget. En skisse som en funksjon bruker, er innrykket under den funksjonen.
- Et flagg til høyre på en rad forteller tilstanden:

| Flagg | Betydning |
|---|---|
| (ingen) | Bygget, og en skisse er fullt definert |
| − | En skisse som er underdefinert (den kan fortsatt flytte seg) |
| + | En skisse som er overdefinert |
| ⚠ | Bygget, med en advarsel (hold pekeren for å lese) |
| ⚠ feil | Funksjonen feilet. Hold pekeren over eller klikk for å se hvorfor |
| ⚠ ikke bygget | Funksjonen trenger en annen som feilet eller er av |
| av | Undertrykt |

- Hver funksjon viser sitt hovedtall etter navnet, for eksempel «25 mm» for en Ekstruder eller «Ø6.6 gjennom» for et hull. Dobbeltklikk på tallet, eller trykk {{key:F2}} på raden, for å endre det der. Se [Endre størrelser](topic:change-sizes).
- Klikk på en funksjon for å redigere den til høyre. Dobbeltklikk på en skisse for å åpne den.
- Når du ruller tilbake, står en rad **Tilbakerullingslinje · rull fremover** i listen. Funksjoner under den er nedtonet og ikke bygget.
- Med en rad i fokus flytter {{key:Up}} og {{key:Down}} mellom radene, og {{key:Alt+Up}} / {{key:Alt+Down}} flytter selve funksjonen, der historikken tillater det.

I en sammenstilling viser det samme panelet i stedet **Deler** (den første er merket «forankret») og **Ledd**.

### Fakta om delen

Under historikken lister **Del**-boksen volumet til volumlegemet som **Volum**, **Overflateareal**, **Størrelse (X × Y × Z)**, **Gjennomgående hull**, **Legemer**, **Trekanter**, antall **Funksjoner** og hvor mange som **Feiler**. Volumer og arealer gjelder for det fasetterte volumlegemet bygget av mesh-kjernen, litt under den sanne verdien for runde former (se [Funksjoner og deres valg](topic:features#curves-resolution)).

I en sammenstilling har boksen overskriften **Sammenstilling**: Deler, Forekomster, Ledd, Ikke koblet og Interferens.

## 3D-visningen (midten)

Visningen viser volumlegemet, grunnplanene og enhver skisse som ikke er brukt av en funksjon ennå.

Grunnplanene tegnes helt opp mens delen er tom. Når den har et volumlegeme, trer de tilbake: tegnet svakt, så de ikke dekker delen, og klikk går gjennom dem til delen. De kommer tilbake helt opp mens du velger hvor du vil skissere ({{ui:Skisse}} uten noe valgt), og når du velger ett i historikken. {{ui:Visninger}} › {{ui:Grunnplan}} skjuler dem helt; de vises fortsatt mens du velger hvor du vil skissere. PartCraft husker det valget.

- Dra for å dreie delen, høyre- eller midtklikkdra for å panorere, rull hjulet for å zoome ved pekeren. Detaljer i [Taster og mus](topic:keyboard).
- Hold pekeren over en flate, kant eller et plan for å se den lyse opp. Klikk for å velge den. Flater markeres hele, og kanter tegnes og velges hele. {{key:Shift}}+klikk samler flere kanter eller flater. De forblir markert.
- ViewCube øverst til høyre dreier med delen: klikk på en flate, kant eller et hjørne for å se derfra, dra den for å dreie, og hus-knappen går tilbake til startvisningen. Se [ViewCube](topic:view-cube).
- En valgt Ekstruder viser en oransje pil på sin endeflate, og en Roter viser en buet pil ved enden av dreiningen. Dra for å endre dybden eller vinkelen, eller skriv inn i boksen ved siden av. Se [Endre størrelser](topic:change-sizes#drag-it-in-the-view).
- Når en del er tom, vises en boks med overskriften **Start en del** som lister de første stegene.
- Slipp en `.partcraft.json`- eller `.partcraft-asm.json`-fil hvor som helst på visningen for å åpne den. En `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- eller `.3dm`-fil som slippes der, åpnes som et volumlegeme.

### Mens du velger kanter eller flater

Etter {{ui:Avrunding}}, {{ui:Fasing}} eller {{ui:Skall}} uten noe valgt (eller {{ui:Velg kanter}} på en slik funksjon), viser delen seg slik den var før den funksjonen. Klikk på kanter eller flater for å legge dem til eller fjerne dem. Merkene deres viser hva som er med. {{ui:Ferdig}} eller {{key:Esc}} avslutter. Se [Avrund, skrå og hul ut](topic:fillet-chamfer-shell).

### På tegningsarket

{{ui:Tegning}} erstatter 3D-visningen med A3-tegningsarket. Hjulet zoomer, høyre- eller midtklikkdra panorerer, og {{key:F}} tilpasser. Se [Lag en tegning](topic:drawing-pdf).

### Mens en skisse er åpen

Visningen dreier for å se rett mot skisseplanet, og et 2D-skisselag vises over. Delen viser bare funksjonene laget før denne skissen. En stripe øverst til venstre viser skissens tilstandsbrikke («Fullt definert», «Underdefinert · 3 frihetsgrader» og så videre) og navnet, for eksempel «Sketch2 på en flate av Extrude1».

## Egenskapspanelet (høyre)

Panelet til høyre viser det som er valgt, og overskriften navngir det:

- **Del** (ingenting valgt): delens **Navn** og innstillingen **Kurver**.
- Et plan: en knapp {{ui:Skisse på det}}.
- En **Flate**: hva slags den er (Plan flate, Sylinder med sin radius og akse, Kjegle, Kule eller Torus), arealet, hvilken funksjon som laget den, og for en plan flate {{ui:Skisse på denne flaten}}, {{ui:Normalt til}}, {{ui:Eksporter flate som DXF}}, {{ui:Ekstruder fra den}}, {{ui:Skjær inn i den}} og {{ui:Hull her}} (se [Trekk eller skyv en hel flate](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- En **Kant**: hva slags den er (rett, en sirkel med sitt senter og radius, eller en kurve), lengden og de to flatene den ligger mellom (for eksempel «Extrude1 endeflate og Extrude1-side»), med knappene {{ui:Avrunding}} og {{ui:Fasing}}.
- Flere kanter eller flater valgt med {{key:Shift}}: hvor mange, med {{ui:Avrunding}} og {{ui:Fasing}} for kanter, og {{ui:Tøm}}.
- En funksjon: dens tall og valg, dimensjonene til skissen, deretter {{ui:Undertrykk}}, {{ui:Rull tilbake til hit}}, {{ui:Flytt opp}}, {{ui:Flytt ned}}, {{ui:Slett}} og dens **Navn**.
- En åpen skisse: dens tilstand, relasjonene du kan legge til utvalget, listen over relasjoner og dimensjoner, **Legg til etter koordinater**, og {{ui:Avslutt skisse}}, {{ui:Tilpass}} og {{ui:Eksporter som DXF}}.
- På tegningsarket: snitt- og detaljinnstillingene, eller det valgte GD&T-symbolet.
- I en sammenstilling: sammenstillingen, den valgte delen, eller det valgte leddet.

Hver tallboks tar effekt når du trykker {{key:Enter}} eller {{key:Tab}}, eller klikker utenfor. Delen bygges om med en gang; det finnes ingen OK-knapp. Bruk {{key:Mod+Z}} for å gå tilbake.

## Statuslinjen (nederst)

- Til venstre: pekerens koordinater i skissen (bare mens en skisse er åpen).
- I midten: meldinger om hva du skal gjøre neste, og hvorfor noe ble avvist. Les den når ingenting ser ut til å skje.
- Nær høyre: kjernebrikken, alltid «Mesh kernel» i denne versjonen. Hold pekeren over den for å se hva det betyr. Se [Mesh-kjernen](topic:solid-kernels).
- Helt til høyre en brikke: «Bygger på nytt …» mens delen bygges om, deretter «Bygget på nytt på … ms» når alt er i orden, eller «1 funksjon feiler». I en sammenstilling står det «Plassert på … ms», eller det teller leddproblemer.

Se også [Start en manual i Illustrate](topic:illustrate): arbeidsområdet som lager sammenstillingsmanualer fra delene og sammenstillingene dine.

## På en smal skjerm

Opptil 760 piksler bred, for eksempel på en telefon, beholder visningen skjermen: verktøylinjen er én rad som ruller sidelengs, og panelene åpnes som ark fra en linje nederst. {{ui:Verktøy}} skjuler verktøylinjen, og {{ui:Flytt}} plasserer den nederst. Se [Styreplate, berøring og små skjermer](topic:trackpad-and-touch).
