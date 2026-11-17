---
title: Frie former med Form, og overflatefunksjoner
summary: Dytt og dra et glatt kontrollbur i arbeidsområdet Form, knekk kanter, bruk symmetri, kontroller og fullfør det til en eksakt volumdel eller overflate, og deretter fyll, lofte, sy sammen, gi tykkelse, forskyv, forleng og trim overflater i Design. Hva som er eksakt og hva som er tilnærmet.
keywords: form, fri form, t-spline, underinndeling, catmull-clark, bur, quadball, knekk, symmetri, sebra, krumning, overflate, lapp, fyll, lofteoverflate, sy sammen, gi tykkelse, forskyv overflate, forleng, trim
from: 0d326ef4
---

:::note
**Ikke bygget ennå i denne versjonen.** Å fullføre en form inn i delen, og overflatefunksjonene, krever en eksakt geometrikjerne, som denne versjonen av PartCraft ikke har: den bygger alle deler med nettkjernen. [Hva som ikke er bygget ennå](topic:not-built-yet) forklarer hva du skal gjøre i stedet. Resten av siden beskriver dem slik de fungerer med en eksakt kjerne.
:::

Arbeidsområdet **Form** lager organiske former. Du redigerer et **bur**, et grovt nett av hjørner, kanter og flater. Formen er den glatte overflaten buret styrer (dens Catmull–Clark-grensoverflate), så når du flytter ett hjørne, bøyer det overflaten mykt rundt seg. Når den ser riktig ut, legger **Fullfør** den til i delens historikk som en *Form*-funksjon, og den eksakte kjernen gjør den om til ekte B-spline-overflater. Deretter kan du runde den av, kutte den, koble den til andre funksjoner og eksportere den som STEP.

Velg **Form** i **Arbeidsområde**-listen til venstre i verktøylinjen.

## Start et bur

1. Sett **Størrelse** og **Inndelinger** i panelet til høyre. Inndelinger er hvor mange flater hver side får.
2. Klikk {{ui:Boks}}, {{ui:Quadball}} eller {{ui:Plan}} i verktøylinjen. Panelet har også **Sylinder**, **Torus** og **Flater ved klikk**.

- En **quadball** er et boksbur tilpasset slik at hjørnepunktene ligger på en kule. Mellom disse punktene ligger overflaten litt innenfor kulen: omtrent 0,4 % mindre volum med 2 inndelinger.
- Et **plan** er åpent, så det blir et overflatelegeme (se «Overflatefunksjoner i Design» nedenfor).
- **Flater ved klikk**: klikk 4 punkter på toppplanet (bakken) eller på hjørner av buret for å lage én flate. Flater som deler hjørner, henger sammen. Trykk {{key:Enter}} etter 3 punkter for en trekant, eller {{key:Esc}} for å stoppe.

Det ufullførte buret lagres sammen med delfilen, så du kan lukke filen og fortsette senere.

## Velg og flytt

- Klikk et hjørne, en kant eller en flate på buret. {{key:Shift}}+klikk legger til eller fjerner elementer. {{key:Esc}} fjerner markeringen.
- Et gizmo vises midt i markeringen. Dra en pil for å flytte langs den, eller en firkant for å flytte i planet. Trykk {{key:W}} for å flytte, {{key:E}} for å rotere og {{key:R}} for å skalere, eller bruk knappene i panelet. {{ui:Gizmo}} i verktøylinjen går gjennom dem.
- **Myk avtakning** (mm) trekker også hjørnene innenfor den avstanden, og de blekner jevnt til ingenting ved kanten av avstanden.
- Hvert dra er ett angrertrinn: {{key:Ctrl+Z}} og {{key:Ctrl+Y}} virker som vanlig.

## Endre buret

Knappene **Endre** i panelet virker på markeringen:

| Knapp | Hva den gjør |
|---|---|
| {{ui:Ekstruder}} | Valgte flater flyttes ut med **Ekstruderingsavstand**, langs normalene, med nye sideflater. Valgte åpne kanter lager nye flater utover. |
| {{ui:Kantsløyfe}} / Sett inn kantsløyfe | Deler ringen av firesidede flater som krysser den valgte kanten, halvveis langs. Flere sløyfer gir strammere kurver. |
| Sett inn punkt | Legger til et hjørne midt på den valgte kanten. |
| Underinndel | Deler hver valgt flate i firesidede flater rundt midten. |
| Bro | Kobler to valgte flater, eller to åpninger (velg én åpen kant på hver), med et rør av flater. Begge må ha samme antall kanter. |
| Fyll hull | Lukker åpningen gjennom den valgte åpne kanten med én flate. |
| Sveis | Slår sammen de valgte hjørnene til ett, midt imellom. |
| Flat ut | Flytter de valgte hjørnene til planet som passer dem best. |
| Slett | Fjerner de valgte flatene, kantene (to flater slås sammen) eller hjørnene. |

## Skarpe kanter, symmetri og visning

- {{ui:Knekk}} gjør de valgte kantene skarpe. **Knekkvekt** 10 er helt skarp. En mindre vekt forblir skarp i så mange forfiningssteg og mykner deretter, noe som gir en stram runding i stedet for en hard fold. **Fjern knekk** gjør dem glatte igjen. **Skarpt hjørne** låser et hjørne slik at overflaten går gjennom det med et punkt.
- **Symmetri** speiler buret over X, Y eller Z = 0. Den beholder den positive siden, speiler den og kobler de to halvdelene. Etter det skjer en endring på den ene siden på begge. Hjørner på speilplanet blir liggende på det.
- {{ui:Visning}} veksler mellom **Glatt** (overflaten funksjonen blir) og **Boks** (flatene på buret selv).
- **Analyse**: **Sebrastriper** speiler en stripete lyskilde fra gjeldende visning. De bøyer seg jevnt over en glatt overflate og brytes ved en knekk. **Gjennomsnittlig krumning** farger konvekse områder røde, konkave områder blå og flate områder hvite. Den måles på den viste masken med cotangens-formelen, så den er en veiledning, ikke en måling.

## Kontroller og fullfør

- **Sjekk eksakt** konverterer buret i den eksakte kjernen uten å endre delen. Den viser hvor mange B-spline-lapper buret lager, hvor mange som er eksakte, og om resultatet er et lukket, gyldig volumlegeme og dets volum.
- {{ui:Fullfør}} legger til en *Form*-funksjon i historikken, eller oppdaterer formen du redigerte, og tar deg tilbake til Design. Et lukket bur blir et volumlegeme. Dets **Operasjon** i Design-panelet kan være Ny kropp, Slå sammen, Kutt eller Snitt. Et åpent bur blir et overflatelegeme.
- For å endre en form senere, velg den i historikken og klikk **Rediger i Form**. Det bygde legemet er skjult mens du redigerer buret.
- **Forkast** kaster buret uten å røre historikken.

## Hva som er eksakt og hva som er tilnærmet

Hver firesidet flate på buret, forfinet ved behov, blir én bikubisk B-spline-lapp.

- Der hvert hjørne på en flate er *regulært* (fire kanter møtes inne i overflaten, eller tre på en åpen kant eller langs en knekk), er lappen **eksakt** undergrenseoverflaten. Testene kontrollerer dette til 1e-9 mm.
- Rundt et **ekstraordinært punkt** (tre, fem eller flere kanter som møtes, et hjørne på en tre- eller femsidet flate, eller enden av en knekk) finnes det ingen eksakt polynomlapp. Der tar lappen det eksakte punktet og tangentplanet i hjørnet og naboenes kantkurver, så lappene møter hverandre uten gap. Tangentkontinuiteten over kantene som møtes i punktet er tilnærmet. Form-panelet og funksjonens panel gir største vinkel, typisk under 2°. Et høyere **Nivå** i funksjonens panel gjør disse lappene mindre og tettere.
- Skarpe knekker er ekte kanter på volumlegemet, så du kan runde dem av.
- Hver lapp er sin egen flate, så en form har mange flater, og det tegnes linjer mellom dem.

## Overflatefunksjoner i Design

Overflatekommandoene finnes i Designs {{ui:Mer}}-meny, under funksjonene. De krever den eksakte kjernen. Overflatelegemer tegnes gjennomsiktige i blått. De er ikke en del av volumlegemet før du gir dem tykkelse eller syr dem sammen.

| Kommando | Hva den gjør |
|---|---|
| Lapp | Fyller en lukket sløyfe av kanter. {{key:Shift}}+klikk på kantene på volumlegemet først, eller velg et overflatelegeme for å fylle åpningen. **Tangent (G1)** gjør at lappen møter den overflaten jevnt. |
| Lofteoverflate | En overflate gjennom én kjede av kurver per skisse (åpen eller lukket), i historikkrekkefølge. |
| Sy sammen | Syr overflatelegemer langs deres felles kanter. Hvis de lukker seg, blir resultatet et volumlegeme, med en Operasjon som andre funksjoner. |
| Gi tykkelse | Gir et overflatelegeme en tykkelse: langs normalen, mot den, eller halvparten i hver retning. Resultatet er et volumlegeme. |
| Forskyv overflate | En kopi av et overflatelegeme flyttet langs normalene. Originalen beholdes. |
| Forleng overflate | Vokser en éndeflate-overflate forbi kantene du velger. |
| Trim overflate | Kutter et overflatelegeme der et annet overflatelegeme, eller volumlegemet, krysser det. Klikk **Velg et punkt på delen** for å velge hvilken del som skal beholdes, eller behold alt annet. |

Sy sammen, Gi tykkelse, Forleng og Trim bruker opp overflatelegemet de starter fra. Senere funksjoner bruker det nye.

Begrensninger i dag: former med flere separate lukkede deler gjøres ikke om til ett volumlegeme; regulære områder slås ikke sammen til større overflater; og se [Hva som ikke er bygget ennå](topic:not-built-yet).
