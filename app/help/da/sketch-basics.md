---
title: Tegn din første skitse
summary: Åbn en skitse på et plan eller en plan flade, tegn linjer, rektangler, cirkler, buer, punkter og midterlinjer, afrund et hjørne, vælg, træk og slet.
keywords: skitse, tegn, linje, rektangel, cirkel, bue, punkt, midterlinje, konstruktion, afrund, skitseafrunding, afrund hjørne, fang, vælg, vindue, træk, profil
from: 28be7436
---

Alle legemer starter som en skitse: en flad tegning på et plan. Denne gennemgang dækker tegneværktøjerne. Hvordan skitsen fastlægges med relationer og mål, står i [Fastlæg en skitse fuldt](topic:relations-dimensions).

## Start en skitse

Du kan skitsere på et grundplan eller på enhver plan flade på delen.

1. Vælg, hvor skitsen skal laves:
   - et grundplan: klik på **Forplan**, **Topplan** eller **Højreplan** i historikken, eller klik på planet i visningen;
   - en plan flade: klik på fladen i visningen. Hele fladen fremhæves.
2. Vælg {{ui:Skitse}} i værktøjslinjen eller tryk {{key:S}}. (Med en flade valgt kan du også vælge {{ui:Skitsér på denne flade}} i højre panel; med et plan {{ui:Skitsér på det}}.)

Visningen drejer, så den står vinkelret på planet, skitseværktøjerne vises i værktøjslinjen, og Linje-værktøjet er klar. Hvis du trykker på {{ui:Skitse}}, uden at noget er valgt, vises grundplanerne, og statuslinjen siger »Klik på et plan eller en plan flade for at skitsere på. Esc stopper.«

:::note
En buet flade kan ikke bære en skitse: »Fladen er buet. Vælg en plan flade eller et plan at skitsere på.«
:::

**En skitse på en flade følger fladen.** Hvis fladen er lavet af en skitsekant eller slutfladen på en ekstrudering, flytter den nye skitse sig, når featuren ændres (en dybere lomme tager skitsen på dens bund med sig). Hvis panelet siger, at fladen er »Fastlåst hvor valgt«, bliver skitsen, hvor fladen er nu.

## Tegneværktøjerne

Hvert værktøj har en knap i værktøjslinjen og en tast. Vælg den samme knap igen, tryk {{key:S}}, eller tryk {{key:Esc}} for at vende tilbage til {{ui:Vælg}}.

| Værktøj | Tast | Sådan tegner du |
|---|---|---|
| {{ui:Linje}} | {{key:L}} | Klik på start, klik derefter på hvert næste punkt. Linjer hænger sammen ende til ende. Afslut kæden med {{key:Esc}}, {{key:Enter}}, højreklik eller dobbeltklik. Klik på et eksisterende punkt afslutter den også |
| {{ui:Rektangel}} | {{key:R}} | Klik på ét hjørne, derefter på det modsatte hjørne. Du får fire linjer, samlet i hjørnerne, to vandrette og to lodrette |
| {{ui:Cirkel}} | {{key:C}} | Klik på centrum, derefter på et punkt på cirklen |
| {{ui:Bue}} | {{key:A}} | Klik på centrum, derefter på start, derefter på slut. Buen løber den vej, du flytter markøren rundt om centrum |
| {{ui:Punkt}} | {{key:P}} | Klik. Et enkelt punkt markerer et hulcentrum for {{ui:Hul}} |
| {{ui:Midterlinje}} | {{key:N}} | Som en linje, ét segment ad gangen. Tegnes stiplet; det er konstruktionsgeometri, bruges som drejningsakse eller reference |
| {{ui:Afrund}} | {{key:F}} | Klik på et hjørne, hvor to linjer mødes, skriv radius, tryk {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klik på de punkter, kurven går igennem; {{key:Enter}} afslutter, et klik på første punkt lukker den. Se [Splines, beskær, forskyd og andre skitseværktøjer](topic:sketch-tools) |
| {{ui:Beskær}} | {{key:T}} | Klik på det stykke af en kurve, der skal fjernes, op til de nærmeste skæringspunkter |
| {{ui:Mål}} | {{key:D}} | Se [Fastlæg en skitse fuldt](topic:relations-dimensions) |

Mens du tegner, viser en lille boks ved markøren længden, størrelsen, diameteren eller radius.

### Skriv målet, mens du tegner

Efter første klik på en linje, et rektangel, en cirkel eller en bue kan du skrive målet i stedet for at klikke det. Når du skriver et tal, åbnes boksen ved markøren med tallet i:

| Værktøj | Felter ({{key:Tab}} flytter til det næste) | Hvad sker der ved {{key:Enter}} |
|---|---|---|
| {{ui:Linje}}, {{ui:Midterlinje}} | Længde, derefter Vinkel (°) fra skitsens X-akse | Linjen tegnes så lang, mod markøren eller i den skrevne vinkel; kæden fortsætter fra dens ende |
| {{ui:Rektangel}} | Bredde, derefter Højde | Rektanglet tegnes fra første hjørne mod markøren; et mål, du ikke skrev, kommer fra markøren |
| {{ui:Cirkel}} | Diameter | Cirklen tegnes med den diameter |
| {{ui:Bue}} | Radius efter centrum, derefter Buevinkel (°) efter start | Start ligger så langt fra centrum; derefter løber buen så langt rundt, den vej du flyttede markøren |

Hvert mål, du skriver, bliver til et **styrende mål** i samme trin, så skitsen får sine mål: {{key:Mod+Z}} fjerner formen og dens mål sammen. Klik i stedet for at trykke {{key:Enter}} beholder det, du skrev, og tager resten fra klikket. {{key:Esc}} lukker boksen og vender tilbage til markøren.

Slå dette fra under {{ui:Indstillinger}} › {{ui:PartCraft}} › **Mål mens du tegner**, hvis du kun vil tegne med klik. Se [PartCraft-indstillinger](topic:settings).

{{ui:Mere}}, i slutningen af skitseværktøjerne, indeholder kontrolpunktsspline, {{ui:Forlæng}}, {{ui:Forskyd}}, {{ui:Spejl}}, {{ui:Polygon}}, {{ui:Slids}}, skitsemønstrene og {{ui:Projicér kant}}: se [Splines, beskær, forskyd og andre skitseværktøjer](topic:sketch-tools).

### Fangning

Fangning tilføjer relationer for dig, så skitsen forbliver samlet, når den flyttes:

- Ved et **endepunkt eller origo** vises et lille kvadrat. Det nye punkt bliver sammenfaldende med det.
- På en **linje, cirkel eller bue** vises et lille kryds. Det nye punkt placeres på kurven.
- En linje inden for 3 grader af vandret eller lodret fanger til den og får en vandret eller lodret relation. Etiketten viser »H« eller »V«.

For at undgå en fangning zoomer du ind, så du klikker længere fra punktet eller kurven.

## Afrund et hjørne

1. Tryk {{key:F}} eller vælg {{ui:Afrund}}.
2. Klik på hjørnepunktet, hvor to linjer mødes.
3. En boks åbnes med en foreslået radius. Skriv radius og tryk {{key:Enter}}.

Begge linjer beskæres og forbindes med en tangentbue med et radiusmål. Meddelelser, du kan se: »En afrunding kræver et hjørne, hvor præcis to linjer mødes.« og »Den radius er for stor til disse linjer.«

:::tip
En skitseafrunding runder et hjørne af profilet, så ekstruderingen får afrundede lodrette kanter. Vil du runde kanterne på selve legemet (for eksempel pladens øverste kanter), brug i stedet featuren {{ui:Afrund}} på delen: se [Afrund, affas og skal](topic:fillet-chamfer-shell). I en skitse er værktøjslinjens {{ui:Afrund}} skitseværktøjet; på delen er det featuren.
:::

## Konstruktionsgeometri

Konstruktionslinjer, cirkler og buer er stiplede og grå. De styrer skitsen, men er ikke en del af den profil, der ekstruderes eller drejes.

1. Vælg linjerne, cirklerne eller buerne.
2. Tryk {{key:Q}} eller vælg {{ui:Konstruktion}}. Tryk igen for at skifte dem tilbage.

## Vælg, træk og slet

Tryk {{key:S}} (eller {{key:Esc}}, indtil intet værktøj er aktivt) for {{ui:Vælg}}.

- Klik på et punkt, en linje, cirkel, bue, relationssymbol eller mål for at vælge det. {{key:Shift}}+klik føjer til valget eller fjerner fra det. På Windows og Linux gør {{key:Ctrl}}+klik det samme; på en Mac ⌘+klik.
- Træk i tomt rum for at tegne et vindue: alt, der ligger helt inden i det, bliver valgt.
- Træk et punkt eller en linje for at flytte det. Løseren beholder alle relationer og mål, mens den flytter, så kun fri geometri flytter sig. Træk i en cirkels kant for at ændre dens radius.
- Træk i et måls tal for at flytte etiketten.
- Tryk {{key:Delete}} eller {{key:Backspace}}, eller vælg {{ui:Slet}} i højre panel, for at slette valget. Sletning af geometri sletter også relationerne på den.

## Zoom og panorér i skitsen

- Rul med hjulet for at zoome ved markøren.
- Træk med midterknappen eller højreknappen for at panorere.
- {{ui:Tilpas}} i værktøjslinjen eller i højre panel tilpasser skitsen til visningen. I en skitse er {{key:F}}-tasten Afrund-værktøjet, ikke Tilpas.

## Luk skitsen

Vælg {{ui:Afslut}} i værktøjslinjen eller {{ui:Afslut skitse}} i højre panel, eller tryk {{key:Esc}}, indtil skitsen lukkes. Hvert {{key:Esc}} annullerer først det, der er i gang, derefter vender det tilbage til {{ui:Vælg}}, derefter fjerner det valget, og det næste lukker skitsen.

Skitsen forbliver valgt, så den næste {{ui:Ekstruder}} eller {{ui:Drej}} bruger den.

## Hvad der gør en god profil

{{ui:Ekstruder}} og {{ui:Drej}} bruger **hver lukket sløjfe** af skitsens massive (ikke-konstruktions-) linjer, cirkler, buer og splines. Sløjfer inde i sløjfer bliver til huller.

- Hver ende skal mødes med præcis én anden ende. »Profilet er åbent: en ende ved (12.5, 40) er ikke forbundet med noget.« angiver stedet.
- Ingen tre ender må mødes i ét punkt: »Profilet forgrener sig ved (0, 20): mere end to ender mødes der.«
- Punkter og konstruktionsgeometri ignoreres af profilet.

Næste: [Fastlæg en skitse fuldt med relationer og mål](topic:relations-dimensions).

## En skitse ud fra et foto

**Feature › Mere › Skitse fra et foto…** (eller skitsegruppen i feature-træets bånd) sporer et billede af en plan del på et jævnt underlag — dens kontur og dens huller — eller en pennetegning til en skitse af linjer, buer og cirkler. Angiv én længde (bredden, højden eller den længste side), så skitsen får den rigtige størrelse, kontrollér hvad den fandt i forhåndsvisningen, og vælg **Lav skitsen**; den kan også ekstrudere den i samme fortrydelsestrin. Det sker på denne computer. Hjørneradier kommer tilbage inden for ca. 5 %, detaljer på et eller to pixels går tabt, og et foto taget på skrå eller med skygger hen over delen rettes ikke: fotografér delen lige forfra med jævnt lys.
