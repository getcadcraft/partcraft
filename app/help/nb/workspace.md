---
title: PartCraft-skjermen
summary: En omvisning i hver linje og hvert panel: verktøylinjen og hvordan den endres, historikken, delfaktaene, 3D-visningen, egenskapspanelet og statuslinjen.
keywords: skjerm, oppsett, verktøylinje, historikk, funksjonstre, egenskaper, panel, statuslinje, grensesnitt, brukergrensesnitt, omvisning, fullskjerm
from: 7394fc49
---

Skjermen har fem deler: verktøylinjen over alt, historikken til venstre, 3D-visningen i midten, egenskapspanelet til høyre og statuslinjen langs bunnen. Over dem alle ligger CadCrafts applinje.

## Applinjen

Den tynne linjen helt øverst tilhører CadCraft-nettstedet, ikke PartCraft selv. Den viser appnavnet og hvor den kjører, en versjonsmeny, **Om PartCraft**, skjermmodusknappen og temabryteren Papir / Modell.

- **Papir** er mørke linjer på et lyst ark. **Modell** er lyse linjer på mørk bakgrunn. Skissefargene følger temaet.
- {{ui:Innstillinger}} (tannhjulet, eller {{key:Mod+,}}) har en fane {{ui:PartCraft}}: hvilken museknapp som dreier visningen, musehjul eller pekeplate, og betingelser under skissing. Se [PartCraft-innstillinger](topic:settings).
- Skjermmodusknappen, eller {{key:Ctrl+Shift+F}}, går gjennom normal, fullskjerm, og fullskjerm med linjene skjult. Med linjene skjult flytter du pekeren til øverste kant (eller trykker der) for å få dem tilbake. {{key:Esc}} går tilbake til normal. Denne tasten er {{key:Ctrl+Shift+F}} også på en Mac, ikke ⌘.

## Verktøylinjen

Verktøylinjen er gruppert. Den endres med det du gjør, slik at den får plass på én rad:

| Gruppe | Knapper | Vises |
|---|---|---|
| Fil | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Lagre}}, {{ui:Eksporter}} (en meny) | Alltid |
| Skisse | {{ui:Skisse}} | Når ingen skisse er åpen |
| Skisse | {{ui:Avslutt}}, {{ui:Linje}}, {{ui:Rektangel}}, {{ui:Sirkel}}, {{ui:Bue}}, {{ui:Punkt}}, {{ui:Midtlinje}}, {{ui:Avrund}}, {{ui:Mål}}, {{ui:Konstruksjon}} | Bare mens en skisse er åpen |
| Funksjoner | {{ui:Ekstruder}}, {{ui:Skjær}}, {{ui:Roter}}, {{ui:Hull}}, {{ui:Lineært}}, {{ui:Sirkulært}}, {{ui:Speil}}, {{ui:Avrunding}}, {{ui:Fasing}}, {{ui:Skall}}, {{ui:Mer}} (en meny: Rotert utskjæring, Plan, Akse, Punkt, Sveip, Loft, Trekkvinkel) | På delen, ikke mens en skisse eller tegningen er åpen. Avrunding og Fasing fungerer på rette kanter mellom to plane flater; Skall og Trekkvinkel på plane flater. Sveip og Loft er ikke bygget ennå i denne versjonen (de trenger en eksakt kjerne); et klikk sier det |
| Funksjoner | {{ui:Ferdig}} | Bare mens du velger kanter eller flater for en avrunding, fasing, skall eller trekkvinkel |
| Tegning | {{ui:Tegning}} | På delen (kan brukes når delen har et volumlegeme) |
| Tegning | {{ui:Datum}}, {{ui:Ramme}}, {{ui:Overflate}}, {{ui:Detalj}}, {{ui:PDF}}, {{ui:Tilbake}} | Bare på tegningsarket |
| Sammenstilling | {{ui:Sammenstilling}} | På delen (kan brukes når delen har et volumlegeme) |
| Sammenstilling | {{ui:Legg til kopi}}, {{ui:Sett inn}}, {{ui:Ledd}}, {{ui:Kollisjon}}, {{ui:Rediger del}}, {{ui:Lukk}} | Bare i en sammenstilling |
| Sammenstilling | {{ui:Tilbake}} | Mens du redigerer en del fra en sammenstilling |
| Rediger | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Mer}} (en meny: Klipp ut, Kopier, Lim inn, Lim inn på samme sted, Dupliser, Slett, Velg alle, Fjern utvalg) | Alltid; hvert valg virker på skissen, historikken eller sammenstillingen du er i |
| Visning | {{ui:Tilpass}}, {{ui:Normalt til}}, {{ui:Visninger}} (en meny: Mål, Massegenskaper, Snitt, Trekkvinkel, Zebrastriper, Krumning, {{ui:Grunnplan}}, deretter Isometrisk, Front, Bak, Topp, Bunn, Høyre, Venstre) | Alltid |

Hold pekeren over en knapp for å se hva den gjør og tasten den har. En nedtonet knapp kan ikke brukes akkurat nå: for eksempel funksjonsknappene mens en skisse er åpen, eller {{ui:Ledd}} før sammenstillingen har to deler.

Menyen {{ui:Mer}} i gruppen Rediger lister hver redigeringshandling med tasten sin. Hva kopier og lim inn virker på, følger hvor du er; se [Kopier, lim inn og dupliser](topic:copy-paste). Verktøytipset til et nedtonet valg sier hvorfor det ikke kan virke nå.

Menyen {{ui:Eksporter}} har {{ui:STL, for 3D-utskrift}}, {{ui:3MF, for 3D-utskrift}}, {{ui:STEP AP242 (eksakt volumlegeme)}}, {{ui:STEP AP214 (eksakt volumlegeme)}}, {{ui:STEP (fasettert, nettkjerne)}}, {{ui:STEP AP214 (fasettert, nettkjerne)}}, {{ui:DXF av skissen eller den plane flaten}} og {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}}. De to eksakte STEP-valgene er nedtonet: de er ikke bygget ennå i denne versjonen, så bruk {{ui:STEP (fasettert, nettkjerne)}}.

## Historikken (til venstre)

Panelet til venstre er delens funksjonshistorikk, listen PartCraft bygger på nytt ovenfra og ned.

- Overskriften er delens navn («Del1» til du gir den nytt navn).
- **Frontplan**, **Toppplan** og **Høyreplan** kommer først. Klikk på ett for å velge det; det utheves i visningen.
- Under dem er funksjonene dine i den rekkefølgen de ble laget. En skisse som en funksjon bruker, står innrykket under den funksjonen.
- Et flagg ytterst til høyre på en rad forteller tilstanden:

| Flagg | Betydning |
|---|---|
| (ingen) | Bygget, og en skisse er fullt bestemt |
| − | En skisse som er underbestemt (den kan fortsatt flyttes) |
| + | En skisse som er overbestemt |
| ⚠ | Bygget, med en advarsel (hold pekeren over for å lese den) |
| ⚠ feil | Funksjonen mislyktes. Hold pekeren over for å lese hvorfor, eller klikk på den |
| ⚠ ikke bygget | Funksjonen trenger en annen som mislyktes eller er av |
| av | Undertrykt |

- Hver funksjon viser hovedtallet sitt etter navnet, for eksempel «25 mm» for en Ekstruder eller «Ø6.6 gjennom» for et hull. Dobbeltklikk på tallet, eller trykk {{key:F2}} på raden, for å endre det der. Se [Endre størrelser](topic:change-sizes).
- Klikk på en funksjon for å redigere den til høyre. Dobbeltklikk på en skisse for å åpne den.
- Når du ruller tilbake, står en rad **Tilbakerullingslinje · rull fremover** i listen. Funksjoner under den er nedtonet og ikke bygget.
- Med en rad i fokus flytter {{key:Up}} og {{key:Down}} mellom radene, og {{key:Alt+Up}} / {{key:Alt+Down}} flytter selve funksjonen, der historikken tillater det.

I en sammenstilling lister det samme panelet **Deler** (den første er merket «forankret») og **Ledd** i stedet.

### Delfakta

Under historikken lister boksen **Del** volumlegemets **Volum**, **Overflateareal**, **Størrelse (X × Y × Z)**, **Gjennomgående hull**, **Legemer**, **Trekanter**, antall **Funksjoner** og hvor mange som **Feiler**. Volumer og areal er av det fasetterte volumlegemet bygget av nettkjernen, litt under den sanne verdien for runde former (se [Funksjoner og alternativene deres](topic:features#curves-resolution)).

I en sammenstilling har boksen overskriften **Sammenstilling**: Deler, Forekomster, Ledd, Ikke forbundet og Interferens.

## 3D-visningen (midten)

Visningen viser volumlegemet, grunnplanene og enhver skisse som ennå ikke er brukt av en funksjon.

Grunnplanene tegnes fullt ut mens delen er tom. Når den har et volumlegeme, trer de tilbake: tegnet svakt, slik at de ikke dekker delen, og klikk går gjennom dem til delen. De kommer tilbake fullt ut mens du velger hvor du skal skissere ({{ui:Skisse}} uten noe valgt) og når du velger ett i historikken. {{ui:Visninger}} › {{ui:Grunnplan}} skjuler dem helt; de vises likevel mens du velger hvor du skal skissere. PartCraft husker det valget.

- Dra for å dreie delen, høyredra eller midtdra for å panorere, drei hjulet for å zoome ved pekeren. Detaljer i [Taster og mus](topic:keyboard).
- Hold pekeren over en flate, kant eller plan for å se den lyse opp. Klikk for å velge den. Flater utheves hele og kanter tegnes og velges hele. {{key:Shift}}+klikk samler flere kanter eller flater. De forblir markert.
- Visningskuben øverst til høyre dreier med delen: klikk på en flate, kant eller hjørne for å se derfra, dra i den for å dreie, hus-knappen går tilbake til starten. Se [Visningskuben](topic:view-cube).
- En valgt Ekstruder viser en oransje pil på endeflaten, en Roter en buet pil ved slutten av svingen: dra i den for å endre dybden eller vinkelen, eller skriv i boksen ved siden av. Se [Endre størrelser](topic:change-sizes#drag-it-in-the-view).
- Når en del er tom, lister en boks med overskriften **Start en del** de første stegene.
- Slipp en `.partcraft.json`- eller `.partcraft-asm.json`-fil hvor som helst på visningen for å åpne den. En `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- eller `.3dm`-fil som slippes der, åpnes som et volumlegeme.

### Mens du velger kanter eller flater

Etter {{ui:Avrunding}}, {{ui:Fasing}} eller {{ui:Skall}} uten noe valgt (eller {{ui:Velg kanter}} på en slik funksjon) vises delen slik den var før den funksjonen. Klikk på kanter eller flater for å legge dem til eller droppe dem; markeringene viser hva som er med. {{ui:Ferdig}} eller {{key:Esc}} avslutter. Se [Avrund, fas og hul ut](topic:fillet-chamfer-shell).

### På tegningsarket

{{ui:Tegning}} erstatter 3D-visningen med A3-tegningsarket. Hjulet zoomer, høyre- eller midtdrag panorerer, {{key:F}} tilpasser. Se [Lag en tegning](topic:drawing-pdf).

### Mens en skisse er åpen

Visningen dreier seg for å se rett på skisseplanet, og et 2D-skisselag vises øverst. Delen viser bare funksjonene laget før denne skissen. En stripe øverst til venstre viser skissens tilstandsbrikke («Fullt bestemt», «Underbestemt · 3 frihetsgrader» og så videre) og navnet, for eksempel «Skisse2 på en flate av Ekstruder1».

## Egenskapspanelet (til høyre)

Panelet til høyre viser det som er valgt, og overskriften navngir det:

- **Del** (ingenting valgt): delens **Navn** og innstillingen **Kurver**.
- Et plan: en knapp {{ui:Skisse på det}}.
- En **Flate**: hva slags den er (Plan flate, Sylinder med radius og akse, Kjegle, Kule eller Torus), arealet, hvilken funksjon som laget den, og for en plan flate {{ui:Skisse på denne flaten}}, {{ui:Normalt til}}, {{ui:Eksporter flate som DXF}}, {{ui:Ekstruder fra den}}, {{ui:Skjær inn i den}} og {{ui:Hull her}} (se [Trekk eller trykk en hel flate](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- En **Kant**: hva slags den er (rett, en sirkel med senter og radius, eller en kurve), lengden og de to flatene den ligger mellom (for eksempel «Ekstruder1 endeflate og Ekstruder1 side»), med knappene {{ui:Avrunding}} og {{ui:Fasing}}.
- Flere kanter eller flater valgt med {{key:Shift}}: hvor mange, med {{ui:Avrunding}} og {{ui:Fasing}} for kanter, og {{ui:Tøm}}.
- En funksjon: tallene og alternativene, målene til skissen, deretter {{ui:Undertrykk}}, {{ui:Rull tilbake til hit}}, {{ui:Flytt opp}}, {{ui:Flytt ned}}, {{ui:Slett}} og **Navn**.
- En åpen skisse: tilstanden, betingelsene du kan legge til på utvalget, listen over betingelser og mål, **Legg til med koordinater**, og {{ui:Avslutt skisse}}, {{ui:Tilpass}} og {{ui:Eksporter som DXF}}.
- På tegningsarket: snitt- og detaljinnstillingene, eller det valgte GD&T-symbolet.
- I en sammenstilling: sammenstillingen, den valgte delen eller det valgte leddet.

Hver tallboks trer i kraft når du trykker {{key:Enter}} eller {{key:Tab}}, eller klikker bort. Delen bygges på nytt med en gang; det finnes ingen OK-knapp. Bruk {{key:Mod+Z}} for å gå tilbake.

## Statuslinjen (nederst)

- Til venstre, pekerens koordinater i skissen (bare mens en skisse er åpen).
- I midten, meldinger: hva du skal gjøre videre, og hvorfor noe ble avvist. Les den når det ikke ser ut til at noe skjer.
- Nær høyre, kjernebrikken: alltid «Nettkjerne» i denne versjonen. Hold pekeren over den for å se hva det betyr. Se [Nettkjernen](topic:solid-kernels).
- Helt til høyre, en brikke: «Bygger på nytt…» mens delen bygges på nytt, deretter «Bygget på nytt på … ms» når alt er bra, eller «1 funksjon feiler». I en sammenstilling står det «Plassert på … ms», eller den teller leddproblemer.

Se også [Start en manual i Illustrate](topic:illustrate): arbeidsområdet som lager sammenstillingsmanualer av delene og sammenstillingene dine.

## På en smal skjerm

Opp til 760 piksler bredde, for eksempel på en telefon, beholder visningen skjermen: verktøylinjen er én rad som ruller sidelengs, og panelene åpnes som ark fra en linje nederst. {{ui:Verktøy}} skjuler verktøylinjen og {{ui:Flytt}} legger den nederst. Se [Pekeplate, berøring og små skjermer](topic:trackpad-and-touch).
