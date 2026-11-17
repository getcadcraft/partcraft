---
title: Magnetiese velde in 2-D (handleiding)
summary: Bereken die magnetiese veld van 'n elektromagneet of 'n permanente magneet met die analise-biblioteek: loop die voorbeelde, lees die vloeddigtheid, die spleetveld, die induktansie en die trekking, verander die ontwerp, en bou jou eie model van spoele, magnete en yster.
keywords: magneties, magnetostatika, magnetiese veld, vloeddigtheid, tesla, elektromagneet, solenoïed, spoel, ampère-windings, ysterkern, luggaping, deurlaatbaarheid, induktansie, magnetiese krag, reluktansie, magnetiese kring, vektorpotensiaal, elektromagnetisme, eindige element, fem, motor, aktuator, transformator, magnetostatic2d, permanente magneet, neodium, ndfeb, ferriet, remanensie, werkspunt, terugslag, lekkasie, houermagneet
from: 215f6601
---

PartCraft se analise-biblioteek kan die magnetiese veld van spoele en yster in 2-D bereken: 'n dwarsdeursnee van iets wat lank is en langs sy lengte dieselfde is, soos 'n elektromagneet, 'n transformatorkern, 'n busstaaf of 'n motor se dwarsdeursnee. Hierdie handleiding loop die biblioteek se elektromagneet-voorbeeld, lees wat dit sê, verander dit, wys hoe jy jou eie vorm modelleer, en voeg dan 'n permanente magneet by.

Dit gebruik die Skrip-werkruimte en die [analise-biblioteek](topic:craftscript-library). Jy hoef nie die CraftScript-taal te ken om dit te volg nie; die voorbeeld sê wat elke reël doen.

## Wat gemodelleer word

'n C-vormige ysterkern, 100 × 80 mm buite en 20 mm dik, met 'n luggaping van 2 mm in sy regterpoot. 'n Spoel van 100 windings wat 10 A dra (1000 ampère-windings) is om sy linkerpoot gewikkel. Alles is lank in die rigting uit die skerm, so die antwoorde is **per meter diepte**: vermenigvuldig met die werklike diepte vir 'n werklike magneet.

Die biblioteek se `magnetostatic2d` los die magnetiese vektorpotensiaal op 'n rooster van 1 mm-vierkante op in 'n boks lug rondom die magneet, en bereken dan die vloeddigtheid **B** (in tesla) daaruit.

## Loop die voorbeeld

1. Kies **Skrip** in die **Werkruimte**-kassie links op die gereedskapbalk.
2. Maak die **Biblioteek**-oortjie van die skrip-paneel oop, dan **Voorbeelde** › **Elektromagneet: veld, gaping, induktansie**.
3. Klik {{ui:Maak oop (leesalleen)}}, en druk dan {{key:F5}}.

Binne 'n sekonde of twee wys die doek die vloeddigtheid, en die konsole druk die volgende uit:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Die grafiek onder die doek is die vertikale vloeddigtheid B_y langs die kern se middellyn, van links na regs: ongeveer −0,55 T in die linkerpoot (die vloed loop daaraf), amper niks in die venster nie, en +0,55 T in die regterpoot en oor die spleet (die vloed kom terug op). Dieselfde vloed gaan deur die yster en die spleet, so die twee pote en die spleet wys byna dieselfde waarde.

## Lees die resultate

- **Die veld in die spleet** is 0,543 T. 'n Handberekening behandel die kern as een magnetiese kring, B = μ0 N I / (g + l / μr), waar g die spleet is, l die lengte van die pad deur die yster en μr die yster se relatiewe deurlaatbaarheid; dit gee 0,552 T. Die veld is 'n bietjie laer as die handberekening omdat die vloed om die spleet uitbuig (randuitbuiging) en 'n deel van die vloed 'n kort pad oor die venster neem (lekkasie). Met 'n kleiner spleet of 'n fyner rooster kom die twee nader aanmekaar.
- **Die induktansie** van die 100-windingspoel is 0,154 H per meter diepte, uit die energie wat in die veld gestoor is. Die kringformule gee minder (0,110 H/m) omdat dit net die vloed deur die spleet tel, nie die vloed wat langs hom lek nie.
- **Die trekking** wat die spleet sluit, is B² w / (2 μ0) vir 'n spleetvlak w breed: ongeveer 2300 N per meter, of 117 N vir 'n magneet 50 mm diep.
- **Die piek** van 1,97 T sit in die binnehoeke van die venster, waar die vloed skerp draai. Die model behandel die yster as lineêr; werklike elektriese staal versadig by ongeveer 1,5 tot 2 T, so behandel waardes bo dit as 'n waarskuwing, nie 'n antwoord nie.

:::note
Die biblioteek se eie toetse loop hierdie voorbeeld en kontroleer die spleetveld teen die magnetiese-kringformule elke keer as PartCraft verander word. Die metode, sy verwysings en sy ander kontroles ('n lang solenoïed, 'n yskern-solenoïed) is in die kop van `magnetostatic2d`: klik daarop in die biblioteek.
:::

## Verander die ontwerp

1. Klik {{ui:Maak 'n kopie}} bo die leesalleen-skrip. Die kopie word saam met jou onderdeel gestoor.
2. Verander 'n waarde naby die bokant en druk {{key:F5}} weer. Probeer:
   - `g = 0.001;` — die helfte van die spleet: die spleetveld verdubbel byna, en so ook die trekking (dit volg B²).
   - `mur = 200;` — 'n swakker kern: meer van die ampère-windings word in die yster bestee.
   - `N = 200;` — dubbel die windings: dubbel die veld, vier keer die induktansie.
   - `h = 0.0005;` — 'n fyner rooster: nader antwoorde, ongeveer vier keer die tyd.

Elke lopie vervang die doek. Die veranderlikes wat die skrip gemaak het (soos `Bgap`, `L`, `F`) bly in die **Veranderlikes**-lys vir jou eie somme.

## Modelleer jou eie vorm

Die voorbeeld bou alles uit drie lyste, een waarde per roostervierkant, wat jy vir enige vorm kan maak wat met reguit lyne langs die rooster getrek is:

- **Waar die yster is:** `iron` is waar vir die vierkante binne die kern. Die voorbeeld bou dit uit reghoeke: `frame & ~window & ~gap` beteken "in die raam, nie in die venster nie, nie in die spleet nie".
- **Die deurlaatbaarheid:** `1 + (mur - 1) * iron` is 1 in lug en `mur` in die yster. Gee verskeie materiale hul eie waardes op dieselfde manier.
- **Die stroom:** `J` is die stroomdigtheid in ampère per vierkante meter, positief uit die skerm, negatief in die skerm in. 'n Spoel het twee kante met teenoorgestelde tekens; die voorbeeld bereken `J0` sodat een kant N I dra.

Dan los `r = magnetostatic2d(m, permeability, J)` dit op. `r.B` is die vloeddigtheid in elke vierkant (twee kolomme, x en y), `r.Bmag` die grootte daarvan, `r.energy` die gestoorde energie per meter. `plot(x, y)` teken 'n lyn.

Die biblioteek werk in meter, en die aansig in millimeter, so 'n veld wat soos dit is gewys word, sou duisend keer te klein geteken word. Die voorbeeld wys dit op 'n kopie van die rooster in millimeter (`mm = quadGrid(…)`, dan `show(field(mm, …))`): kopieer daardie twee reëls.

By verstek hou die rand van die boks die veld binne: geen vloed verlaat dit nie. Maak die boks ten minste twee of drie keer die grootte van die magneet, sodat dit die veld nie saampers nie. Vir 'n simmetriese magneet kan jy die helfte daarvan modelleer: die kop van `magnetostatic2d` sê watter randvoorwaarde op 'n simmetrielyn gebruik moet word.

## Permanente magnete

Die tweede voorbeeld, **Voorbeelde** › **Permanente magneet in 'n ysterkern: werkspunt, lekkasie, trekking**, is dieselfde kern met die spoel weggeneem en 'n 10 mm skyfie van die linkerpoot vervang deur 'n magneet, opwaarts gemagnetiseer. Loop dit met {{key:F5}}. Dit druk uit:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Die werkspunt.** 'n Magneet word beskryf deur sy **remanensie** Br (die veld wat hy behou wanneer hy deur yster kortgesluit word: ongeveer 1,2 T vir 'n gesinterde NdFeB-magneet, 0,4 T vir ferriet) en sy terugslag-deurlaatbaarheid (ongeveer 1,05 en 1,1). Die oopmaak van 'n spleet stoot hom af sy terugslaglyn: hier tot 1,04 T, met H teen B binne-in hom gerig.
- **Lekkasie.** Die handberekening sonder lekkasie gee 0,97 T in die spleet; die model gee 0,68 T. 'n Magneet dryf sy vloed met 'n sterk stoot oor 'n kort lengte, so baie daarvan gaan reguit terug oor die venster in plaas van deur die spleet. Die lekkasiefaktor sê hoeveel: 1,53 hier. Stel `g = 0;` vir 'n geslote houer: die magneet werk dan binne 'n half persent van die handberekening.
- **Magnete in jou eie model.** Gee `magnetostatic2d` die magnete as `struct('Br', Br)`, waar `Br` een ry per roostervierkant het met die remanensie langs x en y in tesla (nul buite die magnete), en gee die magneetvierkante hul terugslag-deurlaatbaarheid in die deurlaatbaarheidslys:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T opwaarts in die vierkante waar mag waar is
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  Vir 'n magneet wat onder 'n hoek gemagnetiseer is, sit `Br·cos(angle)` en `Br·sin(angle)` in die twee kolomme; vir 'n ring wat uitwaarts gemagnetiseer is, bereken die rigting van elke vierkant uit sy posisie. `r.H` gee die veldsterkte H in elke vierkant.

Die model hou 'n magneet op sy reguit terugslaglyn, hoe hard hy ook gedryf word. 'n Werklike magneet wat verder as sy knie gedryf word (deur 'n groot spleet, 'n sterk spoel of hitte) verloor 'n deel van sy sterkte vir altyd; kontroleer die werkspunt teen die vervaardiger se kurwe vir die graad en temperatuur.

Die biblioteek se toetse kontroleer magnete teen twee handresultate: 'n ronde magneet in oop lug (binne-in is B = Br / (1 + μr)) en 'n magneet wat deur 'n ysterhouer gesluit is (die magnetiese kring), albei binne 1 %.

## Wat dit nog nie doen nie

- **Versadiging.** Die yster is lineêr: dubbel die stroom, dubbel die veld, sonder limiet.
- **Ontmagnetisering.** Magnete bly op hul reguit terugslaglyn (sien hierbo).
- **Werwelstrome** en **verliese** (ysterverlies, koperverlies).
- **Bewegende dele en wringkrag.** Geen rotor wat in 'n stator draai nie, geen wringkrag teen hoek nie.
- **Ronde vorme.** Die rooster bestaan uit gelyke vierkante, so geboë omtrekke kom getrap uit.
- **3-D.** Alles is 'n dwarsdeursnee van iets lank.

Motorontwerp ('n draaiende rotor, wringkrag en verliese in 2-D) word vir 'n latere weergawe oorweeg. Sien [Nog nie gebou nie](topic:not-built-yet).
