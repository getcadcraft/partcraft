---
title: Taster og mus
summary: Alle tastaturgenveje og musehandlinger i PartCraft, grupperet efter hvor de virker: overalt, kopiér og sæt ind, på delen, i 3D-visningen, i en skitse, i historikken og i en samling.
keywords: tastatur, genveje, hurtigtaster, taster, mus, kredsbevægelse, drej, panorér, zoom, hjul, højreklik, fortryd, gentag, gem, åbn, escape, slet, alt-pil, kopiér, klip, sæt ind, duplikér, vælg alle, midterknap
from: 3a59c3a3
---

Taster gør ikke noget, mens du skriver i et felt i et panel, undtagen {{key:Mod+S}} og {{key:Mod+O}}, som altid virker. Bogstavtaster virker uden modifikationstast.

Generelle noter om taster i browseren og på tastaturer uden funktionstaster: [Taster, mus og trackpads](common:keys).

## Overalt

| Tast | Handling |
|---|---|
| {{key:Mod+S}} | Gem delen (i en samling: samlingen). Lukker først en åben skitse |
| {{key:Mod+O}} | Åbn en del- eller samlingsfil (spørger først, hvis der er ikke-gemte ændringer) |
| {{key:Mod+Z}} | Fortryd |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentag |
| {{key:F1}} | Åbn eller luk denne hjælp (også {{ui:Hjælp}} i appens bjælke). {{key:Esc}} lukker den også. På mange bærbare og Mac-tastaturer skal du holde Fn nede |
| {{key:Ctrl+Shift+F}} | Skærmtilstand: normal, fuld skærm, fuld skærm med bjælkerne skjult. Ctrl også på en Mac, ikke ⌘ |
| {{key:Esc}} | Forlad fuld skærm (når du er i fuld skærm) |
| {{key:Mod+,}} | Indstillinger, inklusive fanen PartCraft (se [PartCraft-indstillinger](topic:settings)) |

I et talfelt i et panel er {{key:Mod+Z}} browserens egen fortrydelse af tekst. I talfeltet over en skitsemålsætning fortryder den i PartCraft.

## Kopiér, sæt ind og duplikér

De virker på det, du arbejder i: den valgte geometri i en åben skitse, det valgte feature i historikken eller den valgte del i en samling. Detaljer i [Kopiér, sæt ind og duplikér](topic:copy-paste).

| Tast | Handling |
|---|---|
| {{key:Mod+C}} | Kopiér markeringen |
| {{key:Mod+X}} | Klip: kopiér, og slet derefter |
| {{key:Mod+V}} | Sæt ind. I en skitse følger kopien markøren: klik, hvor den skal være |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted: samme koordinater (i en samling, samme sted) |
| {{key:Mod+D}} | Duplikér: kopiér og sæt ind i ét trin, uden at udklipsholderen ændres |
| {{key:Mod+A}} | Vælg alle (i en skitse) |
| {{key:Esc}} | Fravælg alle (og annuller en indsættelse, der følger markøren) |

I et talfelt kopierer og indsætter disse taster tekst som normalt. Markeret tekst i et panel kopieres af browseren.

## På delen (ingen skitse åben)

| Tast | Handling |
|---|---|
| {{key:S}} | Skitse på det valgte plan eller den plane flade; uden valg, vælg hvor ved at klikke |
| {{key:F}} | Tilpas delen i visningen |
| {{key:M}} | Mål i alle arbejdsområder og i en samling; {{key:Esc}} rydder valgene, og {{key:Esc}} igen lukker det (se [Mål afstande, vinkler og masse](topic:measure)) |
| {{key:X}} | Snitvisning til eller fra, i alle arbejdsområder og i en samling; {{key:Esc}} lukker den (se [Kig ind med en snitvisning](topic:section-view)) |
| {{key:Delete}} | Slet det valgte feature (spørger, hvis andre bruger det) |
| {{key:0}} … {{key:9}}, {{key:.}} | Med et feature valgt: skriv dets hovedtal (dybden på en ekstrudering, diameteren på et hul, antallet i et mønster, radius på en afrunding …), og tryk derefter på {{key:Enter}}. {{key:Esc}} beholder det gamle |
| {{key:Backspace}} | Slet det valgte feature, når et er valgt |
| {{key:Esc}} | Stop med at vælge et skitseplan, eller fravælg (inklusive kanter eller flader valgt med {{key:Shift}}) |

## I 3D-visningen

Klik først i visningen, så den har tastaturfokus.

| Tast | Handling |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Drej visningen 15 grader |
| {{key:Shift+Left}} og de andre piletaster | Panorér |
| {{key:Plus}} eller {{key:=}} | Zoom ind |
| {{key:Minus}} | Zoom ud |

| Mus | Handling |
|---|---|
| Træk med venstre knap | Drej visningen (orbit) |
| Træk med højre eller midterknap | Panorér |
| {{key:Shift}}, {{key:Ctrl}} eller ⌘ holdt nede, mens du trækker med venstre knap | Panorér |
| Rul med hjulet | Zoom ved markøren (væk fra dig zoomer ind) |
| Tofingers-swipe på en trackpad | Drej visningen; med {{key:Shift}}, panorér. Knib zoomer. Indstilles under **Rulning** i [PartCraft-indstillinger](topic:settings) |

Med **Drejning af visningen: Midterknap** i [PartCraft-indstillinger](topic:settings) drejer midterknappen visningen, {{key:Shift}} med midterknappen eller højreknappen panorerer, og venstreknappen vælger kun.
| Klik | Vælg en flade (den fremhæves hel), en kant eller et plan |
| {{key:Shift}}+klik på en kant eller flade | Saml flere kanter eller flader |
| Klik i tomt rum | Ryd valget |

## Mens du vælger kanter eller flader til en afrunding, affasning eller skal


| Tast eller mus | Handling |
|---|---|
| Klik på en kant eller flade | Tilføj den, eller fjern den, hvis den allerede er med |
| {{key:Esc}} eller {{key:Enter}} | Afslut valget (samme som {{ui:Færdig}}) |
| {{key:F}} | Tilpas |
| Piletaster, når visningen har fokus | Drej; med {{key:Shift}}, panorér |

## På tegningsarket

| Tast | Handling |
|---|---|
| {{key:F}} | Tilpas arket |
| {{key:Plus}} / {{key:Minus}} | Zoom (når arket har fokus) |
| {{key:Shift+Left}} og de andre piletaster | Panorér (når arket har fokus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Flyt det valgte GD&T-symbol 1 mm |
| {{key:Delete}} eller {{key:Backspace}} | Slet det valgte symbol |
| {{key:Esc}} | Stop med at placere et symbol; ellers fravælg; ellers tilbage til modellen |

| Mus | Handling |
|---|---|
| Klik på en visning, når Datum, Ramme, Finish eller Detalje er valgt | Placér den der (fanger til den nærmeste linje) |
| Klik på et symbol | Vælg det |
| Træk et symbol | Flyt det (linjen bliver ved sit punkt) |
| Rul med hjulet | Zoom ved markøren |
| Træk med højre eller midterknap | Panorér |

## I en skitse

| Tast | Handling |
|---|---|
| {{key:L}} | Linje |
| {{key:R}} | Rektangel |
| {{key:C}} | Cirkel |
| {{key:A}} | Bue (centrum, start, slut) |
| {{key:P}} | Punkt |
| {{key:N}} | Midterlinje |
| {{key:F}} | Afrund et hjørne |
| {{key:D}} | Målsætning |
| {{key:B}} | Spline (tilpasningspunkter) |
| {{key:T}} | Beskær |
| {{key:E}} | Forlæng |
| {{key:O}} | Forskyd ({{key:B}} under forskydning: begge sider) |
| {{key:M}} | Spejl |
| {{key:S}} | Vælg |
| {{key:Q}} | Skift de valgte kurver til konstruktion og tilbage |
| {{key:Enter}} | Afslut en linjekæde eller en spline |
| {{key:Delete}} eller {{key:Backspace}} | Slet valget |
| {{key:Mod+A}} | Vælg alt i skitsen |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopiér, klip, sæt geometri ind (indsættelsen følger markøren) |
| {{key:Mod+Shift+V}} | Sæt ind på de samme koordinater |
| {{key:Mod+D}} | Duplikér valget og placér det med et klik |
| {{key:Esc}} | Ét trin tilbage: annuller talfeltet eller en indsættelse, afslut linjekæden, tilbage til Vælg, ryd valget, og luk derefter skitsen |

| Mus | Handling |
|---|---|
| Klik | Placér punkter med et tegneværktøj; vælg med Vælg |
| {{key:Shift}}+klik | Tilføj til eller fjern fra valget ({{key:Ctrl}}+klik på Windows og Linux, ⌘+klik på en Mac, gør det samme) |
| Træk på tomt rum (Vælg) | Vindue: vælger alt, der ligger helt inde i det |
| Træk et punkt, en linje eller en cirkelkant (Vælg) | Flyt den; relationer bevares |
| Træk i en målsætnings tal (Vælg) | Flyt teksten |
| Dobbeltklik på en målsætning | Skift dens værdi |
| Dobbeltklik eller højreklik, mens du tegner linjer | Afslut kæden |
| Træk med højre eller midterknap | Panorér |
| Rul med hjulet | Zoom ved markøren |

### I talfeltet

| Tast | Handling |
|---|---|
| {{key:Enter}} | Anvend værdien |
| {{key:Esc}} | Luk uden at ændre |

Klik et andet sted anvender også værdien.

## I historikken

| Tast | Handling |
|---|---|
| {{key:Tab}} | Gå til listen |
| {{key:Up}} / {{key:Down}} | Flyt mellem rækker |
| {{key:Enter}} eller {{key:Space}} | Vælg rækken |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Flyt det valgte feature op eller ned, hvor historikken tillader det |
| {{key:F2}} | Skift featurets hovedtal i dets række; {{key:Enter}} sætter det, {{key:Esc}} beholder det gamle |

| Mus | Handling |
|---|---|
| Klik | Vælg et plan eller et feature |
| Dobbeltklik på en skitse | Åbn den |
| Dobbeltklik på featurets tal | Skift det i rækken |

## I en samling

| Tast | Handling |
|---|---|
| {{key:J}} | Start en samling: klik derefter på en plan flade på hver af to dele |
| {{key:F}} | Tilpas |
| {{key:Esc}} | Annuller samlingen, du startede, eller fravælg |
| {{key:Delete}} | Fjern den valgte del eller samling |
| {{key:Backspace}} | Fjern den valgte del eller samling |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Fortryd og gentag i samlingens egen liste |
| {{key:Mod+D}} | Duplikér den valgte del (samme del, ved siden af de andre) |
| {{key:Mod+C}}, derefter {{key:Mod+V}} eller {{key:Mod+Shift+V}} | Kopiér en del, sæt den ind ved siden af de andre eller på samme sted |

Mus i visningen: som i 3D-visningen ovenfor. Klik på en del for at vælge den. Dobbeltklik på en del i listen for at redigere den.

## I Script-arbejdsområdet

| Tast | Handling |
|---|---|
| {{key:F5}} | Kør scriptet (i editoren, panelet eller visningen) |
| {{key:Mod+Enter}} | Kør de valgte linjer, eller linjen markøren står på |
| {{key:Tab}} / {{key:Shift+Tab}} | Indryk / fjern indrykning af de valgte linjer. For at forlade editoren med tastaturet trykker du på {{key:Esc}} og derefter {{key:Tab}} |
| {{key:Mod+/}} | Kommentér de valgte linjer ud, eller ind igen |
| {{key:Mod+F}} / {{key:Mod+H}} | Find / find og erstat i scriptet; {{key:Enter}} eller {{key:F3}} næste forekomst, {{key:Shift+Enter}} eller {{key:Shift+F3}} forrige, {{key:Esc}} lukker |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Fold / fold ud blokken, markøren står i (en funktion, if, for, while … end) |
| {{key:Mod+Space}} | Vis forslag til det navn, du skriver (den åbner også efter to bogstaver); {{key:Up}} / {{key:Down}} vælger, {{key:Enter}} eller {{key:Tab}} tager et, {{key:Esc}} lukker |
| {{key:Enter}} i linjen under konsollen | Kør den ene sætning; {{key:Up}} og {{key:Down}} henter tidligere sætninger frem igen |
| {{key:F}} | Tilpas visningen til det, scripts viser |

Se [Skriv og kør scripts](topic:craftscript).

## Genveje, som browseren kan tage

- {{key:Mod+Y}} i Safari kan åbne historikken: brug {{key:Mod+Shift+Z}} til at gentage.
- {{key:Mod+D}} er browserens bogmærkeknap: PartCraft tager den, mens appen har fokus, og lader den være, mens du skriver i et felt.
- {{key:F11}} og {{key:Mod+Plus}} / {{key:Mod+Minus}} er browserens fuld skærm og sidezoom, ikke PartCraft's. Brug {{key:Ctrl+Shift+F}} til fuld skærm og hjulet til modellen.
- Funktionstaster på mange bærbare og Mac'er kræver Fn-tasten: tryk Fn+{{key:F1}} for hjælp, eller brug knappen {{ui:Hjælp}}.

Gestus på berøring og trackpad: [Trackpad, berøring og små skærme](topic:trackpad-and-touch).

## Hvor Flyt findes

Flyt findes i menuen {{ui:Mere}} i Features-gruppen som {{ui:Flyt legeme}}, i feltet {{ui:Flyt}}, hvor du skriver ΔX, ΔY og ΔZ, og som {{ui:Træk for at flytte}}-pile på delen.
