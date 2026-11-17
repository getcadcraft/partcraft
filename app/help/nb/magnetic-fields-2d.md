---
title: Magnetiske felt i 2D (veiledning)
summary: Regn ut det magnetiske feltet til en elektromagnet eller en permanentmagnet med analysebiblioteket: kjør eksemplene, les fluxtettheten, luftgapfeltet, induktansen og trekkraften, endre designet, og bygg din egen modell av spoler, magneter og jern.
keywords: magnetisk, magnetostatikk, magnetfelt, fluxtetthet, tesla, elektromagnet, solenoide, spole, ampèrevindinger, jernkjerne, luftgap, permeabilitet, induktans, magnetisk kraft, reluktans, magnetisk krets, vektorpotensial, elektromagnetisme, FEM, motor, aktuator, transformator, magnetostatic2d, permanentmagnet, neodym, ndfeb, ferritt, remanens, arbeidspunkt, tilbakegang, lekkasje, holdemagnet
from: 215f6601
---

PartCraft sitt analysebibliotek kan regne ut det magnetiske feltet til spoler og jern i 2D: et tverrsnitt av noe som er langt og likt langs hele lengden, som en elektromagnet, en transformatorkjerne, en samleskinne eller tverrsnittet av en motor. Denne veiledningen kjører bibliotekets elektromagnet-eksempel, leser hva det sier, endrer det, viser hvordan du modellerer din egen form, og legger deretter til en permanentmagnet.

Den bruker skriptarbeidsområdet og [analysebiblioteket](topic:craftscript-library). Du trenger ikke å kunne CraftScript-språket for å følge med; eksemplet sier hva hver linje gjør.

## Hva som modelleres

En C-formet jernkjerne, 100 × 80 mm utvendig og 20 mm tykk, med et 2 mm luftgap i høyre ben. En spole med 100 vindinger som fører 10 A (1000 ampèrevindinger) er viklet rundt venstre ben. Alt er langt i retningen ut av skjermen, så svarene er **per meter dybde**: multipliser med den virkelige dybden for en ekte magnet.

Bibliotekets `magnetostatic2d` løser for det magnetiske vektorpotensialet på et rutenett av 1 mm-kvadrater i en boks med luft rundt magneten, og regner deretter ut fluxtettheten **B** (i tesla) fra det.

## Kjør eksemplet

1. Velg **Skript** i boksen **Arbeidsområde** til venstre på verktøylinjen.
2. Åpne fanen **Bibliotek** i skriptpanelet, deretter **Eksempler** › **Elektromagnet: felt, gap, induktans**.
3. Klikk {{ui:Åpne (skrivebeskyttet)}}, og trykk deretter {{key:F5}}.

Etter et sekund eller to viser lerretet fluxtettheten, og konsollen skriver ut:

```
B in the gap 0.5427 T; magnetic circuit 0.5516 T (-1.6 %: fringing and leakage)
inductance 0.1539 H per metre of depth; the circuit gives 0.1103 H/m, missing the flux that leaks past the gap
stored energy 7.694 J/m; |B| peaks at 1.97 T in the window's inner corners (real steel would saturate there)
pull across the gap about 2343 N per metre of depth (117.2 N for 50 mm deep)
```

Plottet under lerretet er den vertikale fluxtettheten B_y langs kjernens midtlinje, fra venstre til høyre: omtrent −0.55 T i venstre ben (fluxen går nedover), nesten ingenting i vinduet, og +0.55 T i høyre ben og over gapet (fluxen går tilbake opp). Den samme fluxen passerer gjennom jernet og gapet, så de to beina og gapet viser nesten samme verdi.

## Les resultatene

- **Feltet i gapet** er 0.543 T. En håndberegning behandler kjernen som én magnetisk krets, B = μ0 N I / (g + l / μr), der g er gapet, l er lengden på banen gjennom jernet og μr jernets relative permeabilitet. Den gir 0.552 T. Feltet er litt lavere enn håndberegningen fordi fluxen buler ut rundt gapet (randfelt), og noe av fluxen tar en snarvei over vinduet (lekkasje). Med et mindre gap eller et finere rutenett kommer de to nærmere hverandre.
- **Induktansen** til spolen med 100 vindinger er 0.154 H per meter dybde, fra energien som er lagret i feltet. Kretsformelen gir mindre (0.110 H/m), fordi den bare teller fluxen gjennom gapet, ikke fluxen som lekker forbi det.
- **Trekkraften** som lukker gapet er B² w / (2 μ0) for en gapflate w bred: omtrent 2300 N per meter, eller 117 N for en magnet 50 mm dyp.
- **Toppen** på 1.97 T ligger i de indre hjørnene av vinduet, der fluxen snur brått. Modellen behandler jernet som lineært. Ekte elektrisk stål metter seg ved omtrent 1.5 til 2 T, så behandle verdier over det som en advarsel, ikke et svar.

:::note
Bibliotekets egne tester kjører dette eksemplet og sjekker gapfeltet mot formelen for magnetisk krets ved hver endring i PartCraft. Metoden, dens referanser og de andre kontrollene (et langt solenoid, et solenoid med jernkjerne) står i hodet på `magnetostatic2d`: klikk på den i biblioteket.
:::

## Endre designet

1. Klikk {{ui:Lag en kopi}} over det skrivebeskyttede skriptet. Kopien lagres sammen med delen.
2. Endre en verdi nær toppen og trykk {{key:F5}} igjen. Prøv:
   - `g = 0.001;`: halvparten av gapet. Gapfeltet nesten dobles, og det samme gjør trekkraften (den følger B²).
   - `mur = 200;`: en dårligere kjerne. Mer av ampèrevindingene brukes opp i jernet.
   - `N = 200;`: dobbelt så mange vindinger. Dobbelt så stort felt, fire ganger så stor induktans.
   - `h = 0.0005;`: et finere rutenett. Nærmere svar, omtrent fire ganger så lang tid.

Hver kjøring erstatter lerretet. Variablene skriptet lager (som `Bgap`, `L`, `F`) blir i **Variabler**-listen for dine egne beregninger.

## Modeller din egen form

Eksemplet bygger alt fra tre lister, med én verdi per rutenettkvadrat. Du kan lage dem for hvilken som helst form tegnet med rette linjer langs rutenettet:

- **Hvor jernet er:** `iron` er sann for kvadratene inne i kjernen. Eksemplet bygger den av rektangler: `frame & ~window & ~gap` betyr «i rammen, ikke i vinduet, ikke i gapet».
- **Permeabiliteten:** `1 + (mur - 1) * iron` er 1 i luft og `mur` i jernet. Gi flere materialer egne verdier på samme måte.
- **Strømmen:** `J` er strømtettheten i ampere per kvadratmeter, positiv ut av skjermen og negativ inn i den. En spole har to sider med motsatte fortegn. Eksemplet regner ut `J0` slik at den ene siden fører N I.

Deretter løser `r = magnetostatic2d(m, permeability, J)` den. `r.B` er fluxtettheten i hvert kvadrat (to kolonner, x og y), `r.Bmag` er størrelsen, og `r.energy` er den lagrede energien per meter. `plot(x, y)` tegner en linje.

Biblioteket jobber i meter og visningen i millimeter, så et felt vist slik det er, ville blitt tegnet tusen ganger for lite. Eksemplet viser det på en kopi av rutenettet i millimeter (`mm = quadGrid(…)`, deretter `show(field(mm, …))`). Kopier de to linjene.

Som standard holder kanten av boksen feltet inne: ingen flux forlater den. Lag boksen minst to eller tre ganger så stor som magneten, slik at dette ikke klemmer feltet. For en symmetrisk magnet kan du modellere halvparten av den. Hodet til `magnetostatic2d` sier hvilken kantbetingelse du skal bruke på en symmetrilinje.

## Permanentmagneter

Det andre eksemplet, **Eksempler** › **Permanentmagnet i jernkjerne: arbeidspunkt, lekkasje, trekkraft**, er den samme kjernen uten spolen. En 10 mm skive av venstre ben er erstattet med en magnet, magnetisert oppover. Kjør det med {{key:F5}}. Det skriver ut:

```
the magnet works at B = 1.036 T, H = -124 kA/m (on its recoil line B = Br + μ0 μr H)
B in the gap 0.6778 T; the magnetic circuit without leakage 0.9692 T (-30.1 %)
leakage factor 1.53: of the flux leaving the magnet, 65 % crosses the gap between the pole faces
pull across the gap about 3656 N per metre of depth (182.8 N for 50 mm deep)
```

- **Arbeidspunktet.** En magnet beskrives ved sin **remanens** Br (feltet den beholder når den kortsluttes av jern: omtrent 1.2 T for en sintret NdFeB-magnet, 0.4 T for ferritt) og dens tilbakegangspermeabilitet (omtrent 1.05 og 1.1). Å åpne et gap presser den ned sin tilbakegangslinje: her til 1.04 T, med H som peker mot B inni den.
- **Lekkasje.** Håndberegningen uten lekkasje gir 0.97 T i gapet. Modellen gir 0.68 T. En magnet driver fluxen sin med et sterkt trykk over en kort lengde, så mye av den går rett tilbake over vinduet i stedet for gjennom gapet. Lekkasjefaktoren sier hvor mye: 1.53 her. Sett `g = 0;` for et lukket ankerjern: magneten virker da innenfor en halv prosent av håndberegningen.
- **Magneter i din egen modell.** Gi `magnetostatic2d` magnetene som `struct('Br', Br)`, der `Br` har én rad per rutenettkvadrat med remanensen langs x og y i tesla (null utenfor magnetene). Gi magnetkvadratene deres tilbakegangspermeabilitet i permeabilitetslisten:

  ```
  Brem = [zeros(numel(mag), 1), 1.2 * mag];     % 1.2 T upward in the squares where mag is true
  r = magnetostatic2d(m, 1 + (mur - 1) * iron + 0.05 * mag, 0, struct(), struct('Br', Brem));
  ```

  For en magnet magnetisert i en vinkel legger du `Br·cos(angle)` og `Br·sin(angle)` i de to kolonnene. For en ringmagnet magnetisert utover regner du ut retningen i hvert kvadrat ut fra posisjonen. `r.H` gir feltstyrken H i hvert kvadrat.

Modellen holder en magnet på sin rette tilbakegangslinje uansett hvor hardt den drives. En ekte magnet som drives forbi knekkpunktet sitt (av et stort gap, en sterk spole eller varme), mister en del av styrken for godt. Sjekk arbeidspunktet mot produsentens kurve for kvaliteten og temperaturen.

Bibliotekets tester sjekker magneter mot to håndresultater: en rund magnet i åpen luft (inni den er B = Br / (1 + μr)) og en magnet lukket av et jernanker (den magnetiske kretsen). Begge er innen 1 %.

## Det den ikke gjør ennå

- **Metning.** Jernet er lineært: dobbel strøm gir dobbelt felt, uten grense.
- **Avmagnetisering.** Magneter holder seg på sin rette tilbakegangslinje (se ovenfor).
- **Virvelstrømmer** og **tap** (jerntap, kobbertap).
- **Bevegelige deler og dreiemoment.** Ingen rotor som snurrer i en stator, ingen dreiemoment mot vinkel.
- **Runde former.** Rutenettet er laget av like kvadrater, så buede omriss blir trinnete.
- **3D.** Alt er et tverrsnitt av noe langt.

Motordesign (en roterende rotor, dreiemoment og tap i 2D) vurderes for en senere versjon. Se [Ikke bygget ennå](topic:not-built-yet).
