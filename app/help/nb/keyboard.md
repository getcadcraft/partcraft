---
title: Taster og mus
summary: Alle tastatursnarveier og musehandlinger i PartCraft, gruppert etter hvor de virker: overalt, kopiering og liming, på delen, i 3D-visningen, i en skisse, i historikken og i en sammenstilling.
keywords: taster, snarveier, hurtigtaster, tastatur, mus, kretse, rotere, panorere, zoom, hjul, høyreklikk, angre, gjør om, lagre, åpne, escape, slett, alt piltast, kopier, lim inn, klipp ut, dupliser, velg alle, midtknapp
from: 3a59c3a3
---

Taster virker ikke mens du skriver i en boks i et panel, bortsett fra {{key:Mod+S}} og {{key:Mod+O}}, som alltid virker. Bokstavtaster virker uten modifikator.

Generelle merknader om taster i nettleseren, og på tastaturer uten funksjonstaster: [Taster, mus og styreplater](common:keys).

## Overalt

| Tast | Handling |
|---|---|
| {{key:Mod+S}} | Lagre delen (i en sammenstilling: sammenstillingen). Lukker først en åpen skisse |
| {{key:Mod+O}} | Åpne en del- eller sammenstillingsfil (spør først hvis det finnes ulagrede endringer) |
| {{key:Mod+Z}} | {{ui:Angre}} |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | {{ui:Gjør om}} |
| {{key:F1}} | Åpne eller lukk denne hjelpen (også {{ui:Hjelp}} i appfeltet). {{key:Esc}} lukker den også. På mange bærbare og Mac-tastaturer, hold Fn |
| {{key:Ctrl+Shift+F}} | Skjermmodus: normal, fullskjerm, fullskjerm med linjene skjult. Control også på Mac, ikke ⌘ |
| {{key:Esc}} | Avslutt fullskjerm (når i fullskjerm) |
| {{key:Mod+,}} | {{ui:Innstillinger}}, inkludert fanen PartCraft (se [PartCraft-innstillinger](topic:settings)) |

I tallboksen i et panel er {{key:Mod+Z}} nettleserens egen tekstangring. I tallboksen over et skissemål angrer den i PartCraft.

## Kopier, lim inn og dupliser

De virker på det du arbeider med: den valgte geometrien i en åpen skisse, den valgte funksjonen i historikken, eller den valgte delen i en sammenstilling. Detaljer i [Kopier, lim inn og dupliser](topic:copy-paste).

| Tast | Handling |
|---|---|
| {{key:Mod+C}} | Kopier utvalget |
| {{key:Mod+X}} | Klipp ut: kopier, og slett deretter |
| {{key:Mod+V}} | Lim inn. I en skisse følger kopien pekeren: klikk der den skal settes |
| {{key:Mod+Shift+V}} | Lim inn på samme sted: samme koordinater (i en sammenstilling, samme plass) |
| {{key:Mod+D}} | Dupliser: kopier og lim inn i ett trinn, uten å endre utklippstavlen |
| {{key:Mod+A}} | Velg alle (i en skisse) |
| {{key:Esc}} | Fjern utvalg (og avbryt en liming som følger pekeren) |

I en tallboks kopierer og limer disse tastene tekst som vanlig. Markert tekst i et panel kopieres av nettleseren.

## På delen (ingen skisse åpen)

| Tast | Handling |
|---|---|
| {{key:S}} | Skisse på valgt plan eller flat flate; uten noe valgt, velg sted ved å klikke |
| {{key:F}} | Tilpass delen i visningen |
| {{key:M}} | {{ui:Mål}}, i alle arbeidsområder og i en sammenstilling; {{key:Esc}} fjerner valgene, og {{key:Esc}} igjen lukker det (se [Mål avstander, vinkler og masse](topic:measure)) |
| {{key:X}} | Snittvisning på eller av, i alle arbeidsområder og i en sammenstilling; {{key:Esc}} lukker den (se [Se inn med en snittvisning](topic:section-view)) |
| {{key:Delete}} | Slett den valgte funksjonen (spør hvis andre bruker den) |
| {{key:0}} … {{key:9}}, {{key:.}} | Med en funksjon valgt: skriv inn hovedtallet (en ekstrudering sin dybde, et hulls diameter, et mønsters antall, en avrundings radius …), og trykk deretter {{key:Enter}}. {{key:Esc}} beholder den gamle verdien |
| {{key:Backspace}} | Slett den valgte funksjonen, når en er valgt |
| {{key:Esc}} | Avslutt valg av skisseplan, eller fjern utvalget (inkludert kanter eller flater valgt med {{key:Shift}}) |

## I 3D-visningen

Klikk først i visningen, slik at den får tastaturfokus.

| Tast | Handling |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Roter visningen 15 grader |
| {{key:Shift+Left}} og de andre piltastene | Panorer |
| {{key:Plus}} eller {{key:=}} | Zoom inn |
| {{key:Minus}} | Zoom ut |

| Mus | Handling |
|---|---|
| Dra med venstre knapp | Roter (kretse) visningen |
| Dra med høyre eller midtre knapp | Panorer |
| {{key:Shift}}, {{key:Ctrl}} eller ⌘ holdt mens du drar med venstre knapp | Panorer |
| Rull hjulet | Zoom ved pekeren (bort fra deg zoomer inn) |
| Tofingersveip på en styreplate | Roter visningen; med {{key:Shift}}, panorer. Klyp zoomer. Settes med **Rulling** i [PartCraft-innstillinger](topic:settings) |

Med **Rotering av visning: Midtknapp** i [PartCraft-innstillinger](topic:settings) roterer midtknappen visningen, {{key:Shift}} med midtknappen eller høyreknappen panorerer, og venstreknappen velger bare.
| Klikk | Velg en flate (den markeres hel), en kant eller et plan |
| {{key:Shift}}+klikk på en kant eller flate | Samle flere kanter eller flater |
| Klikk på tomt rom | Fjern valget |

## Mens du velger kanter eller flater for en avrunding, fasing eller et skall


| Tast eller mus | Handling |
|---|---|
| Klikk på en kant eller flate | Legg den til, eller fjern den hvis den allerede er med |
| {{key:Esc}} eller {{key:Enter}} | Fullfør valget (samme som {{ui:Ferdig}}) |
| {{key:F}} | Tilpass |
| Piltaster, med visningen i fokus | Roter; med {{key:Shift}}, panorer |

## På tegningsarket

| Tast | Handling |
|---|---|
| {{key:F}} | Tilpass arket |
| {{key:Plus}} / {{key:Minus}} | Zoom (når arket har fokus) |
| {{key:Shift+Left}} og de andre piltastene | Panorer (når arket har fokus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Flytt det valgte GD&T-symbolet 1 mm |
| {{key:Delete}} eller {{key:Backspace}} | Slett det valgte symbolet |
| {{key:Esc}} | Avslutt plassering av et symbol; ellers fjern valget; ellers tilbake til modellen |

| Mus | Handling |
|---|---|
| Klikk på en visning, med Datum, Ramme, Finish eller Detalj valgt | Plasser den der (fester seg til nærmeste linje) |
| Klikk på et symbol | Velg det |
| Dra et symbol | Flytt det (ledelinjen står på sitt punkt) |
| Rull hjulet | Zoom ved pekeren |
| Dra med høyre eller midtre knapp | Panorer |

## I en skisse

| Tast | Handling |
|---|---|
| {{key:L}} | Linje |
| {{key:R}} | Rektangel |
| {{key:C}} | Sirkel |
| {{key:A}} | Bue (senter, start, slutt) |
| {{key:P}} | Punkt |
| {{key:N}} | Senterlinje |
| {{key:F}} | Avrund et hjørne |
| {{key:D}} | Mål |
| {{key:B}} | Spline (tilpass punkter) |
| {{key:T}} | Trim |
| {{key:E}} | Forleng |
| {{key:O}} | Forskyv ({{key:B}} mens du forskyver: begge sider) |
| {{key:M}} | Speil |
| {{key:S}} | Velg |
| {{key:Q}} | Bytt de valgte kurvene til konstruksjon, og tilbake |
| {{key:Enter}} | Avslutt en linjekjede eller en spline |
| {{key:Delete}} eller {{key:Backspace}} | Slett utvalget |
| {{key:Mod+A}} | Velg alt i skissen |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopier, klipp ut, lim inn geometri (innliming følger pekeren) |
| {{key:Mod+Shift+V}} | Lim inn på samme koordinater |
| {{key:Mod+D}} | Dupliser utvalget og plasser det med et klikk |
| {{key:Esc}} | Ett steg tilbake: avbryt tallboksen eller en liming, avslutt linjekjeden, tilbake til Velg, fjern utvalget, og lukk deretter skissen |

| Mus | Handling |
|---|---|
| Klikk | Plasser punkter med et tegneverktøy; velg med Velg |
| {{key:Shift}}+klikk | Legg til i eller ta bort fra utvalget ({{key:Ctrl}}+klikk på Windows og Linux, ⌘+klikk på Mac, gjør det samme) |
| Dra på tomt rom (Velg) | Vindu: velger alt som ligger helt inni |
| Dra et punkt, en linje eller en sirkelkant (Velg) | Flytt det; relasjonene holder |
| Dra et måls tall (Velg) | Flytt teksten |
| Dobbeltklikk på et mål | Endre verdien |
| Dobbeltklikk eller høyreklikk mens du tegner linjer | Avslutt kjeden |
| Dra med høyre eller midtre knapp | Panorer |
| Rull hjulet | Zoom ved pekeren |

### I tallboksen

| Tast | Handling |
|---|---|
| {{key:Enter}} | Bruk verdien |
| {{key:Esc}} | Lukk uten å endre |

Å klikke utenfor bruker også verdien.

## I historikklisten

| Tast | Handling |
|---|---|
| {{key:Tab}} | Gå til listen |
| {{key:Up}} / {{key:Down}} | Flytt mellom radene |
| {{key:Enter}} eller {{key:Space}} | Velg raden |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Flytt den valgte funksjonen opp eller ned, der historikken tillater det |
| {{key:F2}} | Endre funksjonens hovedtall på raden; {{key:Enter}} setter det, {{key:Esc}} beholder den gamle verdien |

| Mus | Handling |
|---|---|
| Klikk | Velg et plan eller en funksjon |
| Dobbeltklikk på en skisse | Åpne den |
| Dobbeltklikk på en funksjons tall | Endre det på raden |

## I en sammenstilling

| Tast | Handling |
|---|---|
| {{key:J}} | Start en forbindelse: klikk deretter på en flat flate på hver av to deler |
| {{key:F}} | Tilpass |
| {{key:Esc}} | Avbryt forbindelsen du startet, eller fjern utvalget |
| {{key:Delete}} | Fjern den valgte delen eller forbindelsen |
| {{key:Backspace}} | Fjern den valgte delen eller forbindelsen |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Angre og gjør om i sammenstillingens egen liste |
| {{key:Mod+D}} | Dupliser den valgte delen (samme del, ved siden av de andre) |
| {{key:Mod+C}}, deretter {{key:Mod+V}} eller {{key:Mod+Shift+V}} | Kopier en del, lim den inn ved siden av de andre eller på samme sted |

Mus i visningen: som i 3D-visningen over. Klikk på en del for å velge den. Dobbeltklikk på en del i listen for å redigere den.

## I skriptarbeidsområdet

| Tast | Handling |
|---|---|
| {{key:F5}} | Kjør skriptet (i editoren, panelet eller visningen) |
| {{key:Mod+Enter}} | Kjør de valgte linjene, eller linjen markøren står på |
| {{key:Tab}} / {{key:Shift+Tab}} | Rykk inn / rykk ut de valgte linjene. For å forlate editoren med tastaturet, trykk {{key:Esc}}, deretter {{key:Tab}} |
| {{key:Mod+/}} | Kommenter de valgte linjene ut, eller inn igjen |
| {{key:Mod+F}} / {{key:Mod+H}} | Finn / finn og erstatt i skriptet; {{key:Enter}} eller {{key:F3}} neste treff, {{key:Shift+Enter}} eller {{key:Shift+F3}} forrige, {{key:Esc}} lukker |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Brett sammen / brett ut blokken markøren står i (en funksjon, if, for, while … end) |
| {{key:Mod+Space}} | Vis forslag for navnet du skriver (det åpnes også etter to bokstaver); {{key:Up}} / {{key:Down}} velger, {{key:Enter}} eller {{key:Tab}} tar ett, {{key:Esc}} lukker |
| {{key:Enter}} i linjen under konsollen | Kjør den ene setningen; {{key:Up}} og {{key:Down}} henter frem tidligere |
| {{key:F}} | Tilpass visningen til det skriptene viser |

Se [Skriv og kjør skript](topic:craftscript).

## Snarveier nettleseren kan ta

- {{key:Mod+Y}} i Safari kan åpne historikken: bruk {{key:Mod+Shift+Z}} for å gjøre om.
- {{key:Mod+D}} er nettleserens bokmerketast: PartCraft tar den mens appen har fokus, og lar den være mens du skriver i en boks.
- {{key:F11}} og {{key:Mod+Plus}} / {{key:Mod+Minus}} er nettleserens fullskjerm og sidezoom, ikke PartCraft sine. Bruk {{key:Ctrl+Shift+F}} for fullskjerm og hjulet for modellen.
- Funksjonstaster på mange bærbare og Mac-maskiner krever Fn-tasten: trykk Fn+{{key:F1}} for hjelp, eller bruk {{ui:Hjelp}}-knappen.

Berørings- og styreplategester: [Styreplate, berøring og små skjermer](topic:trackpad-and-touch).

## Hvor Flytt finnes

I gruppen Funksjoner, i menyen {{ui:Mer}}, finnes {{ui:Flytt legeme}}. I {{ui:Flytt}}-boksen skriver du ΔX, ΔY og ΔZ, og på delen finnes {{ui:Dra for å flytte}}-piler.
