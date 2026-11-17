---
title: Frie former med Form og overfladefunktioner
summary: Skub og træk i et glat kontrolnet i arbejdsområdet Form, knæk kanter, brug symmetri, kontrollér og færdiggør det til et eksakt legeme eller en eksakt overflade, og lap, loft, sy sammen, gør tyk, forskyd, forlæng og beskær overflader i Design. Hvad der er eksakt, og hvad der er tilnærmet.
keywords: form, fri form, T-spline, underinddeling, Catmull-Clark, kontrolnet, quadball, knæk, symmetri, zebra, krumning, overflade, lapning, udfyld, loft-overflade, sy sammen, gør tyk, forskyd overflade, forlæng, beskær
from: 0d326ef4
---

:::note
**Ikke lavet endnu i denne version.** At færdiggøre en form i delen og overfladefunktionerne kræver den eksakte kerne, som denne version af PartCraft ikke har: den bygger hver del med mesh-kernen. [Hvad der ikke er lavet endnu](topic:not-built-yet) siger, hvad du skal gøre i stedet. Resten af siden beskriver dem, sådan de virker med en eksakt kerne.
:::

Arbejdsområdet **Form** laver organiske former. Du redigerer et **kontrolnet**, et groft net af hjørner, kanter og flader. Formen er den glatte overflade, som kontrolnettet styrer (dens Catmull–Clark-grænseflade), så et enkelt hjørne bøjer overfladen blidt omkring sig. Når den ser rigtig ud, føjer **Overfladebehandling** en *Form*-funktion til delens historik, og den eksakte kerne gør den til ægte B-spline-overflader. Derefter kan du afrunde den, skære i den, forbinde den med andre funktioner og eksportere den som STEP.

Vælg **Form** i listen **Arbejdsområde** til venstre på værktøjslinjen.

## Start et kontrolnet

1. Sæt **Størrelse** og **Underinddelinger** i det højre panel. Underinddelinger er, hvor mange flader hver side får.
2. Klik på {{ui:Kasse}}, {{ui:Quadball}} eller {{ui:Plan}} i værktøjslinjen. Panelet har også **Cylinder**, **Torus** og **Flader med klik**.

- En **quadball** er et kassekontrolnet, tilpasset så dets hjørnepunkter ligger på en kugle. Mellem disse punkter ligger overfladen en smule inde i kuglen: cirka 0.4 % mindre volumen ved 2 underinddelinger.
- Et **plan** er åbent, så det bliver til en overfladekrop (se "Overfladefunktioner i Design" nedenfor).
- **Flader med klik**: klik på 4 punkter på det vandrette grundplan eller på hjørner i kontrolnettet for at lave én flade. Flader, der deler hjørner, hænger sammen. Tryk {{key:Enter}} efter 3 punkter for en trekant, eller {{key:Esc}} for at stoppe.

Dit ufærdige kontrolnet gemmes med delfilen, så du kan lukke filen og fortsætte senere.

## Vælg og flyt

- Klik på et hjørne, en kant eller en flade i kontrolnettet. {{key:Shift}}+klik tilføjer eller fjerner elementer. {{key:Esc}} rydder valget.
- Et gizmo vises midt i valget. Træk en pil for at flytte langs den, eller en firkant for at flytte i det plan. Tryk {{key:W}} for at flytte, {{key:E}} for at rotere og {{key:R}} for at skalere, eller brug knapperne i panelet. {{ui:Gizmo}} i værktøjslinjen skifter mellem dem.
- **Blød falloff** (mm) trækker også hjørnerne inden for den afstand, og de falmer jævnt ud til ingenting ved kanten af den afstand.
- Hvert træk er ét fortrydelsestrin: {{key:Ctrl+Z}} og {{key:Ctrl+Y}} virker som sædvanligt.

## Ændr kontrolnettet

Knapperne **Ændr** i panelet virker på valget:

| Knap | Hvad den gør |
|---|---|
| {{ui:Ekstruder}} | Valgte flader flyttes ud med **Ekstruderingsafstand**, langs deres normaler, med nye sideflader. Valgte åbne kanter danner nye flader udad. |
| {{ui:Kantsløjfe}} / Indsæt kantsløjfe | Deler ringen af firkantede flader, der krydser den valgte kant, halvvejs. Flere sløjfer giver strammere kurver. |
| Indsæt punkt | Tilføjer et hjørne midt på den valgte kant. |
| Underinddel | Deler hver valgt flade i firkantede flader omkring dens midte. |
| Bro | Forbinder to valgte flader, eller to åbninger (vælg én åben kant på hver), med et rør af flader. Begge skal have samme antal kanter. |
| Udfyld hul | Lukker åbningen gennem den valgte åbne kant med én flade. |
| Svejs | Flet de valgte hjørner til ét, midt imellem dem. |
| Fladgør | Flytter de valgte hjørner op på det plan, der passer bedst til dem. |
| {{ui:Slet}} | Fjerner de valgte flader, kanter (to flader flettes) eller hjørner. |

## Skarpe kanter, symmetri og visning

- {{ui:Knæk}} gør de valgte kanter skarpe. **Knækvægt** 10 er fuldt skarp. En mindre vægt forbliver skarp i så mange forfiningstrin og blødgøres derefter, hvilket giver en stram rundning i stedet for en hård fold. **Fjern knæk** gør dem glatte igen. **Skarpt hjørne** fastlåser et hjørne, så overfladen går gennem det med et punkt.
- **Symmetri** spejler kontrolnettet over X, Y eller Z = 0. Den beholder den positive side, spejler den og sammenføjer de to halvdele. Derefter sker en redigering på den ene side på begge. Hjørner på spejlplanet bliver på det.
- {{ui:Visning}} skifter mellem **Glat** (den overflade, funktionen bliver) og **Kasse** (selve kontrolnettets flader).
- **Analyse**: **Zebrastriber** spejler en stribet lyskilde fra den aktuelle visning. De bøjer jævnt hen over en glat overflade og brydes ved et knæk. **Middelkrumning** farvelægger konvekse områder røde, konkave blå og flade hvide. Den måles på det viste mesh med cotangensformlen, så den er en vejledning, ikke en måling.

## Kontrollér og færdiggør

- **Kontrollér eksakt** konverterer kontrolnettet i den eksakte kerne uden at ændre din del. Den rapporterer, hvor mange B-spline-lapper kontrolnettet giver, hvor mange der er eksakte, og om resultatet er et lukket, gyldigt legeme, samt dets volumen.
- {{ui:Overfladebehandling}} føjer en *Form*-funktion til historikken eller opdaterer den form, du redigerede, og fører dig tilbage til Design. Et lukket kontrolnet bliver til et legeme. Dets **Handling** i Design-panelet kan være Nyt legeme, Forbind, Skær eller Skæring. Et åbent kontrolnet bliver til en overfladekrop.
- For at ændre en form senere vælger du den i historikken og klikker på **Rediger i Form**. Den byggede krop skjules, mens du redigerer dens kontrolnet.
- **Kassér** kaster kontrolnettet væk uden at røre historikken.

## Hvad der er eksakt, og hvad der er tilnærmet

Hver firkantede flade af kontrolnettet, forfinet når det er nødvendigt, bliver til ét bikubisk B-spline-lap.

- Hvor alle hjørner på en flade er *regulære* (fire kanter mødes inde i overfladen, eller tre på en åben kant eller langs et knæk), er lappet **eksakt** underinddelingsoverfladen. Testene kontrollerer dette til 1e-9 mm.
- Omkring et **ekstraordinært punkt** (tre, fem eller flere kanter mødes, et hjørne af en trekantet eller femkantet flade, eller enden af et knæk) findes der intet eksakt polynomielt lap. Der tager lappet det eksakte punkt og tangentplanet i det hjørne og naboernes kantkurver, så lapperne stadig mødes uden hul. Tangentkontinuitet over kanterne, der mødes i punktet, er tilnærmet. Form-panelet og funktionens panel viser den største vinkel, typisk under 2°. Et højere **Niveau** i funktionens panel gør disse lapper mindre og tættere.
- Skarpe knæk er ægte kanter af legemet, så du kan afrunde dem.
- Hvert lap er sin egen flade, så en form har mange flader, og der tegnes linjer mellem dem.

## Overfladefunktioner i Design

Overfladekommandoerne ligger i Designs menu {{ui:Mere}} under funktionerne. De kræver den eksakte kerne. Overfladekroppe tegnes gennemsigtigt i blåt. De er ikke en del af legemet, før du gør dem tykke eller syr dem sammen.

| Kommando | Hvad den gør |
|---|---|
| Lap | Udfylder en lukket løkke af kanter. Hold {{key:Shift}} nede og klik på kanterne af legemet først, eller vælg en overfladekrop for at udfylde dens åbning. **Tangent (G1)** får lappet til at mødes med den overflade glat. |
| Loft-overflade | En overflade gennem én kæde af kurver pr. skitse (åben eller lukket), i historikkens rækkefølge. |
| {{ui:Sy sammen}} | Syr overfladekroppe sammen langs deres fælles kanter. Hvis de lukker, bliver resultatet et legeme med en Handling som andre funktioner. |
| {{ui:Gør tyk}} | Giver en overfladekrop en tykkelse: langs dens normal, mod den eller halvt til hver side. Resultatet er et legeme. |
| Forskyd overflade | En kopi af en overfladekrop flyttet langs dens normaler. Originalen forbliver. |
| Forlæng overflade | Forlænger en enkeltflade-overflade ud over de kanter, du vælger. |
| {{ui:Beskær overflade}} | Skærer en overfladekrop, hvor en anden overfladekrop eller legemet krydser den. Klik på **Vælg et punkt på stykket** for at vælge, hvilket stykke der skal beholdes, eller behold alt andet. |

Sy sammen, Gør tyk, Forlæng og Beskær overflade bruger den overfladekrop, de starter fra. Senere funktioner bruger den nye.

Begrænsninger i dag: former med flere adskilte lukkede stykker konverteres ikke til ét legeme; regulære områder flettes ikke til større overflader; og se [Hvad der ikke er lavet endnu](topic:not-built-yet).
