---
title: Overflader gennem et kurvenet (Gordon-overflade)
summary: Lav én glat overflade gennem et gitter af profil- og styrekurver tegnet i skitser eller hentet fra modelkanter, luk den til et legeme, når profilerne er lukkede, og se hvad der er eksakt, hvad der er tilpasset, og meddelelserne når et net ikke passer.
keywords: tangent, g1, tangens, tangentkontinuitet, spejlplan, Gordon-overflade, kurvenet, randoverflade, netoverflade, netværksoverflade, profiler, styrer, styrekurver, loft med styrer, styreskinner, skin, transfinit, coons, B-spline-overflade, fri overflade
from: ada3cb8b
---

:::note
**Ikke lavet endnu i denne version.** Gordon-overfladen kræver den eksakte kerne, som denne version af PartCraft ikke har: den bygger hver del med mesh-kernen. [Hvad der ikke er lavet endnu](topic:not-built-yet) siger, hvad du skal gøre i stedet. Resten af siden beskriver den, sådan den virker med en eksakt kerne.
:::

En **Gordon-overflade** er én overflade, der går gennem hver kurve i et net: et sæt **profiler**, der løber den ene vej, og et sæt **styrer**, der løber den anden, og som krydser hinanden ligesom trådene i et net. Sådan former du et skrog, et skærm eller et håndtag ud fra få sektionskurver, som du styrer direkte. Den kræver den **eksakte kerne** (se [Mesh-kernen](topic:solid-kernels)).

## Tegn netværket

1. Tegn **profilerne**: to eller flere kurver, der løber side om side, fx snit på parallelle planer. Linjer, buer, cirkler og splines virker alle, og en kæde af kurver, der er forbundet ende til ende, tæller som én kurve.
2. Tegn **styrerne**: to eller flere kurver, der løber på tværs af profilerne. Hver styrer skal krydse hver profil én gang, og hver profil hver styrer én gang.
3. Gør så kurverne virkelig mødes. Tegn en styrers skitse, så dens kurve går gennem profilernes punkter (fang de projicerede punkter, eller skriv koordinaterne). Netværket accepterer huller op til **Tolerance** (0.01 mm til at starte med).

En skitse kan rumme flere kurver: hver adskilt kæde i den er sin egen kurve. Du kan altså tegne alle styrerne i én skitse på fx topplanet.

## Lav overfladen

1. Vælg {{ui:Mere}} i gruppen Funktioner, og derefter {{ui:Gordon-overflade}}.
2. PartCraft tager de skitser, ingen bruger endnu: dem i planer parallelle med den første bliver til **profiler**, de andre til **styrer**. Tjek listen til højre, og sæt hver skitse til **Profiler**, **Styrer** eller **Ikke brugt**.
3. For at bruge kanter af delen: klik på **Vælg kanter som profiler** (eller **som styrer**), klik på kanterne i visningen, og tryk derefter {{key:Esc}}.

Resultatet er en **overfladekrop**. {{ui:Gør tyk}} gør den til et legeme, {{ui:Sy sammen}} syr den til andre overflader, og {{ui:Beskær overflade}} skærer den.

### Luk den til et legeme

Når profilerne er lukkede kurver (cirkler, lukkede splines, lukkede kæder), og den første og sidste profil hver ligger fladt i et plan, sæt kryds ved **Luk til et legeme**. Enderne lukkes med flade flader, og den lukkede form sammenføjes, skæres, skæres med eller bliver til et nyt legeme som enhver anden funktion. Sådan laver du et loft, der følger styrekurver. Det samme virker med lukkede styrer.

## Tangent til et plan langs en kant

En Gordon-overflade går gennem sine kurver, men alene matcher den ikke hældningen af det, den møder. For at få den til at forlade en kant **tangent** til et plan (G1), fx et spejlplan, så den spejlede kopi forbindes uden knæk, eller en flad flade den vokser ud fra:

1. Vælg Gordon-funktionen. Under **Tangent til** vælger du et plan i {{ui:Tilføj et plan…}} (Forplan, Topplan, Højreplan eller et referenceplan), eller du vælger en flad flade i visningen og trykker {{ui:Tilføj den valgte plane flade}}.
2. PartCraft finder netværkets randkurve, der ligger i det plan, og overfladen forlader den tangent til planet.

Hvis et plan indeholder to randkurver (et gulv under begge ender), tilføjer du det to gange: hver kopi tager den næste. Op til fire planer, ét pr. kant.

Rapporten siger, langs hvilken kurve hvert plan gjorde den tangent, og den stejleste vinkel, overfladen mødte planet i før. Styrere, der allerede forlader den kurve tangent til planet, følges eksakt. Styrere, der klatrer væk fra den, bøjes i et smalt bånd nær kanten, og rapportens figur »følger hver kurve inden for« siger, hvor meget: tegn styrerne, der forlader kanten fladt, for en eksakt pasform.

## Hvad der er eksakt, og hvad der er tilpasset

Panelet siger, hvilken af disse der gælder, og hvor langt overfladen afviger fra dine kurver.

- **Eksakt**: når hver kurve er polynomisk (linjer, splines og kæder af dem), og styrerne krydser alle profilerne ved de samme parametre, er overfladen præcis Gordon-overfladen af disse kurver. Et net af isokurver skåret fra en bikubisk overflade giver den overflade tilbage, og fire rette linjer giver et fladt eller snoet (bilineært) lap.
- **Tilpasset**: buer, cirkler og kanter af delen er ikke polynomiske, og kurver, der krydser ved forskellige parametre, skal tidsjusteres, så krydsningerne flugter. Disse kurver tilpasses med kubiske B-splines inden for en ti-milliondel af netværkets størrelse (cirka 0.00001 mm for en 100 mm del). Et cylinderlap lavet af buer og linjer bliver inden for 0.00001 mm af den sande cylinder.

Mellem kurverne er overfladen det, metoden giver: profilerne blandet på tværs, plus styrerne blandet på tværs, minus blandingen af deres krydspunkter. Den er glat overalt undtagen hvor en kurve har et skarpt hjørne. Hvor to Gordon-overflader deler en randkurve, mødes de kant mod kant (G0), ikke tangent.

## Når et netværk ikke passer

| Besked | Hvad du gør |
|---|---|
| »… mødes ikke: de går 0.4 mm fra hinanden« | Få den profil og styrer til at krydse, eller hæv Tolerance |
| »… mødes … 2 gange« | En styrer må kun krydse hver profil én gang: del en løkkende kurve, eller brug færre profiler |
| »… i en anden rækkefølge« eller »folder sig over sig selv« | To styrere krydser hinanden (eller to profiler). Familierne skal løbe side om side |
| »mindst to profiler og to styrer« | Tilføj kurver, eller sæt flere skitser til Profiler eller Styrer |
| »blander åbne og lukkede kurver« | Gør alle profilerne åbne eller alle lukkede (det samme for styrerne) |
| »En ende … er ikke flad, så den kan ikke lukkes« | Tegn den første og sidste lukkede profil i ét plan hver, eller lad Luk til et legeme være fra |

## Begrænsninger

- Én B-spline-flade pr. netværk: ingen G1- eller G2-tangens til nabooverflader.
- Et lukket netværks søm ved den første styrer er forbundet kant mod kant, men ikke tangent.
- Funktionen Loft selv har ingen styreskinner; brug i stedet en Gordon-overflade lukket til et legeme.
- Meget bugtede kurver, eller krydsninger der er meget ujævnt fordelt langs én kurve i forhold til en anden, kan kræve for mange punkter for at passe; funktionen siger så det.
