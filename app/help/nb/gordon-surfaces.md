---
title: Overflater gjennom et kurvenett (Gordon-overflate)
summary: Lag én glatt overflate gjennom et rutenett av profil- og styrekurver tegnet i skisser eller hentet fra modellkanter, lukk den til et volumlegeme når profilene er lukkede, og hva som er eksakt, hva som er tilpasset, og meldingene når et nett ikke passer.
keywords: tangent, g1, tangens, tangentkontinuitet, speilplan, gordon-overflate, kurvenett, grensoverflate, nettoverflate, profiler, styrer, styrekurver, loft med styrer, styreskinner, skall, transfinit, coons, b-spline-overflate, fri overflate
from: ada3cb8b
---

:::note
**Ikke bygget ennå i denne versjonen.** Gordon-overflaten krever en eksakt geometrikjerne, som denne versjonen av PartCraft ikke har: den bygger alle deler med nettkjernen. [Hva som ikke er bygget ennå](topic:not-built-yet) forklarer hva du skal gjøre i stedet. Resten av siden beskriver den slik den fungerer med en eksakt kjerne.
:::

En **Gordon-overflate** er én overflate som går gjennom hver kurve i et nett: et sett med **profiler** som går den ene veien og et sett med **styrer** som går den andre, og krysser hverandre som trådene i et nett. Det er slik du former et skrog, et skjermbrett eller et håndtak ut fra noen få tverrsnittskurver du styrer direkte. Den krever den **eksakte kjernen** (se [Nettkjernen](topic:solid-kernels)).

## Tegn nettet

1. Tegn **profilene**: to eller flere kurver som går side om side, for eksempel snitt på parallelle plan. Linjer, buer, sirkler og splines fungerer alle, og en kjede av kurver som er koblet ende til ende, teller som én kurve.
2. Tegn **styrene**: to eller flere kurver som går på tvers av profilene. Hver styrekurve må krysse hver profil én gang, og hver profil hver styrekurve én gang.
3. Gjør at kurvene virkelig møtes. Tegn en styrekurves skisse slik at kurven går gjennom profilenes punkter (fest til projiserte punkter, eller skriv inn koordinatene). Nettet godtar avstander opp til **Toleransen** (0,01 mm til å begynne med).

En skisse kan inneholde flere kurver: hver separat kjede i den er sin egen kurve. Så du kan tegne alle styrene i én skisse på toppplanet, for eksempel.

## Lag overflaten

1. Velg {{ui:Mer}} i gruppen Funksjoner, og deretter {{ui:Gordon-overflate}}.
2. PartCraft tar skissene ingen bruker ennå: de som ligger i plan parallelle med det første, blir **profiler**, de andre **styrer**. Sjekk listen til høyre og sett hver skisse til **Profiler**, **Styrer** eller **Ikke brukt**.
3. For å bruke kanter fra delen, klikk **Velg kanter som profiler** (eller **som styrer**), klikk på kantene i visningen, og trykk Esc.

Resultatet er et **overflatelegeme**. {{ui:Gi tykkelse}} gjør det om til et volumlegeme, {{ui:Sy sammen}} syr det til andre overflater, og {{ui:Trim overflate}} kutter det.

### Lukk den til et volumlegeme

Når profilene er lukkede kurver (sirkler, lukkede splines, lukkede kjeder) og den første og den siste profilen hver ligger flatt i et plan, huk av for **Lukk til et volumlegeme**. Endene dekkes med flate flater, og den lukkede formen kobles, kuttes, snittes eller blir en ny kropp som alle andre funksjoner. Slik lager du en loft som følger styrekurver. Det samme fungerer med lukkede styrer.

## Tangent til et plan langs en kant

En Gordon-overflate går gjennom kurvene sine, men alene passer den ikke til stigningen på det den møter. For å få den til å forlate en kant **tangent** til et plan (G1), for eksempel et speilplan, slik at den speilede kopien henger sammen uten knekk, eller en flat flate den vokser fra:

1. Velg Gordon-funksjonen. Under **Tangent til**, velg et plan i {{ui:Legg til et plan…}} (Front, Topp, Høyre eller et referanseplan), eller velg en flat flate i visningen og trykk {{ui:Legg til den valgte plane flaten}}.
2. PartCraft finner randkurven i nettet som ligger i planet, og overflaten forlater den tangent til planet.

Hvis et plan inneholder to randkurver (et gulv under begge ender), legg det til to ganger: hver kopi tar den neste. Opptil fire plan, ett per kant.

Rapporten sier langs hvilken kurve hvert plan gjorde den tangent, og den brattaste vinkelen overflaten møtte planet i før. Styrer som allerede forlater den kurven tangent til planet, følges nøyaktig. Styrer som stiger bort fra den, bøyes i et smalt bånd nær kanten, og rapportens tall «følger hver kurve innenfor» sier hvor mye: tegn styrene som forlater kanten flatt, for en eksakt passform.

## Hva som er eksakt og hva som er tilpasset

Panelet sier hvilken av disse som gjelder, og hvor langt overflaten avviker fra kurvene dine.

- **Eksakt**: når hver kurve er polynomisk (linjer, splines og kjeder av dem) og styrene krysser alle profilene ved de samme parameterne, er overflaten nøyaktig Gordon-overflaten til disse kurvene. Et nett av isokurver kuttet fra en bikubisk overflate gir den overflaten tilbake, og fire rette linjer gir en flat eller vridd (bilineær) lapp.
- **Tilpasset**: buer, sirkler og kanter på delen er ikke polynomiske, og kurver som krysser ved forskjellige parametere må tidsjusteres slik at kryssene stemmer. Disse kurvene tilpasses med kubiske B-splines innenfor én ti-millionendel av nettets størrelse (omtrent 0,00001 mm for en 100 mm del). En sylinderlapp laget av buer og linjer holder seg innenfor 0,00001 mm av den virkelige sylinderen.

Mellom kurvene er overflaten det metoden gir: profilene blandet over, pluss styrene blandet over, minus blandingen av kryssepunktene. Den er glatt overalt unntatt der en kurve har et skarpt hjørne. Der to Gordon-overflater deler en randkurve, møter de hverandre kant mot kant (G0), ikke tangent.

## Når et nett ikke passer

| Melding | Hva du gjør |
|---|---|
| «… møter ikke: de går 0,4 mm fra hverandre» | Få den profilen og styreren til å krysse, eller øk **Toleransen** |
| «… møter … 2 ganger» | En styrekurve kan krysse hver profil bare én gang: del en kurve som går i løkke, eller bruk færre profiler |
| «… i en annen rekkefølge» eller «brettes over seg selv» | To styrere krysser hverandre (eller to profiler gjør det). Familiene må gå side om side |
| «minst to profiler og to styrer» | Legg til kurver, eller sett flere skisser til Profiler eller Styrer |
| «blander åpne og lukkede kurver» | Gjør alle profilene åpne eller alle lukkede (det samme gjelder styrene) |
| «En ende … er ikke flat, så den kan ikke dekkes» | Tegn den første og den siste lukkede profilen i ett plan hver, eller la Lukk til et volumlegeme være av |

## Begrensninger

- Én B-spline-flate per nett: ingen G1- eller G2-tangens til naboflater.
- Et lukket netts søm, ved den første styreren, er koblet kant mot kant, men ikke tangent.
- Lofte-funksjonen selv har ingen styreskinner; bruk en Gordon-overflate lukket til et volumlegeme i stedet.
- Svært kronglete kurver, eller kryssinger som er svært ujevnt fordelt langs én kurve sammenlignet med en annen, kan kreve for mange punkter for å passe; funksjonen sier da fra.
