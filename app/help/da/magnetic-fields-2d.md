---
title: Magnetiske felter i 2D (vejledning)
summary: Beregn det magnetiske felt fra en elektromagnet eller en permanentmagnet med analysebiblioteket. Kør eksemplerne, læs fluxtætheden, spaltefeltet, induktansen og trækkraften, ændr designet, og byg din egen model af spoler, magneter og jern.
keywords: magnetisk, magnetostatik, magnetfelt, fluxtæthed, tesla, elektromagnet, solenoide, spole, ampere-vindinger, jernkerne, luftspalte, permeabilitet, induktans, magnetisk kraft, reluktans, magnetisk kreds, vektorpotentiale, elektromagnetik, finite element, fem, motor, aktuator, transformer, magnetostatic2d, permanentmagnet, neodym, ndfeb, ferrit, remanens, arbejdspunkt, rekyl, lækage, holdemagnet
from: 215f6601
---

PartCraft's analysebibliotek kan beregne det magnetiske felt fra spoler og jern i 2D: et tværsnit af noget langt og ens over hele sin længde, som en elektromagnet, en transformerkerne, en samleskinne eller en motors tværsnit. Denne vejledning kører bibliotekets elektromagnet-eksempel, læser, hvad det siger, ændrer det, viser hvordan du modellerer din egen form, og tilføjer derefter en permanentmagnet.

Den bruger Script-arbejdsområdet og [analysebiblioteket](topic:craftscript-library). Du behøver ikke kende CraftScript-sproget for at følge den; eksemplet siger, hvad hver linje gør.

## Hvad der modelleres

En C-formet jernkerne, 100 × 80 mm udvendig og 20 mm tyk, med en luftspalte på 2 mm i sit højre ben. En spole med 100 vindinger, der fører 10 A (1000 ampere-vindinger), er viklet om dens venstre ben. Alt er langt i retningen ud af skærmen, så svarene er **pr. meter dybde**: gang med den rigtige dybde for en rigtig magnet.

Bibliotekets `magnetostatic2d` løser for det magnetiske vektorpotentiale på et gitter af 1 mm kvadrater i en boks af luft omkring magneten og beregner derefter fluxtætheden **B** (i tesla) ud fra det.

## Kør eksemplet

1. Vælg **Script** i feltet **Arbejdsområde** til venstre i værktøjslinjen.
2. Åbn fanen **Bibliotek** i scriptpanelet, derefter **Eksempler** › **Elektromagnet: felt, spalte, induktans**.
3. Klik på {{ui:Åbn (skrivebeskyttet)}}, og tryk derefter på {{key:F5}}.

Om et sekund eller to viser lærredet fluxtætheden, og konsollen udskriver:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Grafen under lærredet er den lodrette fluxtæthed B_y langs kernens midterlinje, fra venstre mod højre: cirka −0.55 T i det venstre ben (fluxen løber ned ad det), næsten intet i vinduet, og +0.55 T i det højre ben og over spalten (fluxen løber op igen). Den samme flux går gennem jernet og spalten, så de to ben og spalten viser næsten den samme værdi.

## Læs resultaterne

- **Feltet i spalten** er 0.543 T. Et håndregnet overslag behandler kernen som ét magnetisk kredsløb, B = μ0 N I / (g + l / μr), hvor g er spalten, l længden af stien gennem jernet og μr jernets relative permeabilitet; det giver 0.552 T. Feltet er en smule lavere end håndregningen, fordi fluxen buler ud rundt om spalten (udbuling) og noget af fluxen tager en kort vej over vinduet (lækage). Med en mindre spalte eller et finere gitter kommer de to tættere på hinanden.
- **Induktansen** af spolen med 100 vindinger er 0.154 H pr. meter dybde, fra energien lagret i feltet. Kredsløbsformlen giver mindre (0.110 H/m), fordi den kun tæller fluxen gennem spalten, ikke fluxen, der lækker forbi den.
- **Trækkraften**, der lukker spalten, er B² w / (2 μ0) for en spaltflade w bred: cirka 2300 N pr. meter, eller 117 N for en magnet 50 mm dyb.
- **Toppen** på 1.97 T ligger i vinduets indre hjørner, hvor fluxen drejer skarpt. Modellen behandler jernet som lineært; rigtigt elektrisk stål mætter ved cirka 1.5 til 2 T, så behandl værdier over det som en advarsel, ikke som et svar.

:::note
Bibliotekets egne tests kører dette eksempel og kontrollerer spaltefeltet mod formlen for det magnetiske kredsløb ved hver ændring i PartCraft. Metoden, dens referencer og dens andre kontroller (en lang solenoide, en solenoide med jernkerne) står i headeren til `magnetostatic2d`: klik på den i biblioteket.
:::

## Ændr designet

1. Klik på {{ui:Lav en kopi}} over det skrivebeskyttede script. Kopien gemmes sammen med din del.
2. Ændr en værdi nær toppen, og tryk på {{key:F5}} igen. Prøv:
   - `g = 0.001;` — halv spalte: spaltefeltet næsten fordobles, og det samme gør trækkraften (den følger B²).
   - `mur = 200;` — en dårligere kerne: flere af ampere-vindingerne bruges i jernet.
   - `N = 200;` — dobbelt så mange vindinger: dobbelt så stort felt, fire gange så stor induktans.
   - `h = 0.0005;` — et finere gitter: tættere svar, cirka fire gange så lang tid.

Hver kørsel erstatter lærredet. Variablerne, scriptet laver (som `Bgap`, `L`, `F`), bliver i listen **Variable** til dine egne beregninger.

## Modellér din egen form

Eksemplet bygger alt op af tre lister med én værdi pr. gitterkvadrat, som du kan lave for enhver form tegnet med rette linjer langs gitteret:

- **Hvor jernet er:** `iron` er sand for kvadraterne inde i kernen. Eksemplet bygger den af rektangler: `frame & ~window & ~gap` betyder »i rammen, ikke i vinduet, ikke i spalten«.
- **Permeabiliteten:** `1 + (mur - 1) * iron` er 1 i luft og `mur` i jernet. Giv flere materialer deres egne værdier på samme måde.
- **Strømmen:** `J` er strømtætheden i ampere pr. kvadratmeter, positiv ud af skærmen og negativ ind i den. En spole har to sider med modsatte fortegn; eksemplet beregner `J0`, så den ene side fører N I.

Derefter løser `r = magnetostatic2d(m, permeability, J)` den. `r.B` er fluxtætheden i hvert kvadrat (to kolonner, x og y), `r.Bmag` dens størrelse, `r.energy` den lagrede energi pr. meter. `plot(x, y)` tegner en linje.

Biblioteket arbejder i meter, og visningen i millimeter, så et felt vist som det er, ville blive tegnet tusind gange for lille. Eksemplet viser det på en kopi af gitteret i millimeter (`mm = quadGrid(…)`, derefter `show(field(mm, …))`): kopiér de to linjer.

Som standard holder kanten af boksen feltet inde: ingen flux forlader den. Lav boksen mindst to eller tre gange så stor som magneten, så den ikke klemmer feltet. For en symmetrisk magnet kan du modellere den halve: headeren til `magnetostatic2d` siger, hvilken kantbetingelse der skal bruges på en symmetrilinje.

## Permanentmagneter

Det andet eksempel, **Eksempler** › **Permanentmagnet i en jernkerne: arbejdspunkt, lækage, trækkraft**, er den samme kerne, men uden spolen, og et 10 mm stykke af det venstre ben er erstattet af en magnet, magnetiseret opad. Kør det med {{key:F5}}. Det udskriver:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Arbejdspunktet.** En magnet beskrives ved sin **remanens** Br (det felt, den beholder, når den er kortsluttet af jern: cirka 1.2 T for en sintret NdFeB-magnet, 0.4 T for ferrit) og sin rekylpermeabilitet (cirka 1.05 og 1.1). Når du åbner en spalte, skubbes den ned ad sin rekylinje: her til 1.04 T, med H pegende mod B inde i den.
- **Lækage.** Håndregningen uden lækage giver 0.97 T i spalten; modellen giver 0.68 T. En magnet driver sin flux med et kraftigt skub over en kort længde, så meget af den går lige tilbage over vinduet i stedet for gennem spalten. Lækagefaktoren siger, hvor meget: 1.53 her. Sæt `g = 0;` for et lukket holdejern: magneten arbejder så inden for en halv procent af håndregningen.
- **Magneter i din egen model.** Giv `magnetostatic2d` magneterne som `struct('Br', Br)`, hvor `Br` har én række pr. gitterkvadrat med remanensen langs x og y i tesla (nul uden for magneterne), og giv magnetkvadraterne deres rekylpermeabilitet i permeabilitetslisten:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  For en magnet, der er magnetiseret i en vinkel, skal du sætte `Br·cos(angle)` og `Br·sin(angle)` i de to kolonner; for en ringmagnet magnetiseret udad beregner du hvert kvadrats retning ud fra dets position. `r.H` giver feltstyrken H i hvert kvadrat.

Modellen holder en magnet på sin rette rekylinje, uanset hvor hårdt den drives. En rigtig magnet, der drives forbi sit knæ (af en stor spalte, en stærk spole eller varme), mister en del af sin styrke for altid; kontrollér arbejdspunktet mod producentens kurve for kvaliteten og temperaturen.

Bibliotekets tests kontrollerer magneter mod to håndregninger: en rund magnet i fri luft (inde i den, B = Br / (1 + μr)) og en magnet lukket af et jernholdejern (det magnetiske kredsløb), begge inden for 1 %.

## Det den endnu ikke gør

- **Mætning.** Jernet er lineært: dobbelt strøm, dobbelt felt, uden grænse.
- **Afmagnetisering.** Magneter bliver på deres rette rekylinje (se ovenfor).
- **Hvirvelstrømme** og **tab** (jerntab, kobbertab).
- **Bevægelige dele og moment.** Ingen rotor, der drejer i en stator, intet moment mod vinkel.
- **Runde former.** Gitteret er lavet af lige store kvadrater, så buede konturer bliver trinvise.
- **3D.** Alt er et tværsnit af noget langt.

Motordesign (en roterende rotor, moment og tab i 2D) undersøges til en senere version. Se [Ikke lavet endnu](topic:not-built-yet).
