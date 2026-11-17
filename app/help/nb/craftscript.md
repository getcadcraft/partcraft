---
title: Skriv og kjør skript (Skript-arbeidsområdet)
summary: Skript-arbeidsområdet steg for steg: skriv et CraftScript- eller Lua-skript, kjør det med F5, les konsollen, behold resultater i variablene til neste skript, vis nett, felt og plott, stopp en kjøring, og lagre skript sammen med delen.
keywords: skript, skripting, skripting mens du modellerer, frigjør, annen skjerm, param, params, parametere i skript, CraftScript, Lua, kode, program, redigeringsverktøy, konsoll, REPL, kommandolinje, kjør, F5, kjør utvalg, stopp, variabler, arbeidsområde, plott, felt, nett, tegnforklaring, delvisning, analyse, automatisering, matrise, numerisk
from: d0003e89
---

**Forhåndsvisning.** Skripting er nytt i PartCraft 0.3 og er en forhåndsvisning: språket, biblioteket og måten skript lagres på kan fortsatt endres, og skript skrevet nå kan trenge små endringer senere. Si fra om det som ikke virker.

Skript-arbeidsområdet kjører dine egne beregninger ved siden av delen: små summer, hele analyser, eller skriptene i [analysebiblioteket](topic:craftscript-library). Skript skrives i **CraftScript** (et matriseprogrammeringsspråk som ligner MATLAB, se [CraftScript-språket](topic:craftscript-language)), i **Lua** (se [Skript i Lua](topic:craftscript-lua)) eller i **Python** (se [Skript i Python](topic:craftscript-python)).

Velg {{ui:Skript}} i boksen **Arbeidsområde** til venstre i verktøylinjen. Delen endres ikke. Høyre panel blir skriptpanelet (bredere enn vanlig; dra kanten for å endre størrelse, eller flytt det til en annen skjerm med menyen {{ui:⋯}}, se [Ordne panelene](common:arrange-panels)).

## Skript mens du modellerer

Du må ikke forlate Design-arbeidsområdet for å skrive et skript. I Design har høyre panels fane {{ui:Skript}} det samme redigeringsverktøyet, konsollen, variablene og biblioteket, med de samme skriptene. Funksjonstreet og visningen fungerer fortsatt: klikk på en funksjon for å velge den, dobbeltklikk på en skisse for å redigere den, roter visningen, gå deretter tilbake til fanen {{ui:Skript}} og trykk {{key:F5}}.

Hva et skript **viser** (nett, felt, plott, tabeller) tegnes ikke over modellen din i Design: konsollen sier det, og Skript-arbeidsområdet har alt når du bytter dit.

{{ui:Frigjør}}, ved siden av {{ui:Kjør}}, flytter hele panelet til et eget vindu, for eksempel på en andre skjerm, slik at redigeringen og hele visningen står side om side. {{ui:Sett tilbake}} fester det igjen. Se [Ordne panelene](common:arrange-panels).

## Kjør ditt første skript

1. Skriv i redigeringsverktøyet, for eksempel:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'A sine')
   disp(max(y))
   ```

2. Trykk {{key:F5}} (eller {{ui:Kjør}}). Konsollen under redigeringsverktøyet viser det skriptet skrev ut, og «Ferdig på … s». Plottet vises i **delvisningene** langs bunnen av 3D-visningen.
3. En linje uten semikolon skriver ut verdien sin, som i MATLAB: `a = 3` skriver ut `a = 3`; `a = 3;` skriver ut ingenting.
4. For å kjøre bare en del av et skript, velg linjene og trykk {{key:Mod+Enter}} ({{ui:Utvalg}}). Uten noe valgt kjøres linjen markøren står på.
5. Linjen nederst i konsollen (etter `>>`) kjører én setning når du trykker {{key:Enter}}. {{key:Up}} og {{key:Down}} henter tidligere linjer tilbake.

## Finn, slå sammen og fullfør

- **Finn og erstatt.** Trykk {{key:Mod+F}} (eller {{key:Mod+H}} for å erstatte også). En linje åpnes over koden: skriv det du vil finne; treffene lyser opp, og antallet sier hvor du er. Knappene ved siden av boksen matcher store og små bokstaver (**Aa**), finner bare hele ord (**W**) og bruker regulære uttrykk (**.\***; i erstatningen setter `$1` tilbake det den første gruppen fanget). {{ui:Erstatt}} erstatter det gjeldende treffet, og {{ui:Alle}} erstatter alle treffene som ett steg i {{key:Mod+Z}}.
- **Sammenfolding.** Klikk på ▾ ved siden av et linjenummer, eller trykk {{key:Mod+Shift+[}} med markøren på en linje med `function`, `if`, `for`, `while`, `switch` eller `try` (Lua: `function`, `do`, `if`, `repeat`), for å skjule de indre linjene; linjen sier hvor mange det er. ▸ eller {{key:Mod+Shift+]}} åpner dem igjen. Sammenfolding skjuler bare linjer: kjøring, lagring, kopiering og linjenumrene teller fortsatt alle linjene, og skriving på en sammenfoldet linje åpner den først.
- **Fullføring.** Skriv to bokstaver av et navn, eller trykk {{key:Mod+Space}}: en liste viser variablene du har, språkets funksjoner (med argumentene deres), nøkkelord og navn som allerede finnes i skriptet. Velg med piltastene, og trykk {{key:Enter}} eller {{key:Tab}}.

## Når noe går galt

- En feil sier hva problemet er og hvilken linje det gjelder: linjen markeres rødt i redigeringsverktøyet, og **Linje n** i konsollen tar deg dit.
- En løkke som aldri tar slutt: trykk {{ui:Stopp}} (verktøylinje eller panel). Skriptet stopper med en gang; variablene beholder verdiene de hadde før den kjøringen.
- Hver kjøring har også et stegbudsjett (2 milliarder steg som standard; endre det under **Kjøreinnstillinger** i panelet). En kjøring som går over det, stopper med en melding.

## Variabler følger med fra skript til skript

Hver variabel på toppnivå et skript lager havner i fanen **Variabler** (navn, type, størrelse, minste og største verdi) og blir der til neste skript, på begge språk. Slik beregner ett skript nettet, det neste løser, og et tredje plotter.

- Klikk på en variabel for å vise den: nett, felt og modeller i 3D-visningen, matriser som tabell (og et linjeplott for en vektor eller et fargekart for en matrise) i delvisningene.
- {{ui:Lagre som JSON}}, {{ui:Lagre som CSV}} (en tabell med tall) og {{ui:Lagre som HDF5}} laster den ned; {{ui:Slett}} fjerner den; {{ui:Tøm alle}} tømmer arbeidsområdet.
- Kryss av for **Lagre variablene sammen med delen** for å beholde dem i delfilen (opptil 32 MB; større ligger bare for dette besøket). Når du åpner en slik del, tilbyr panelet å laste dem inn.

## Nett, felt og plott

- `show(m)` tegner et nett; `show(f)` fargelegger et felt på nettet med en tegnforklaring. Listen **Vist** øverst til venstre i visningen skjuler ({{ui:Øye}}) eller fjerner hvert element, og skjuler eller viser selve delen. Under tegnforklaringen skriver du inn et område (**Fra**, **til**) eller trykker {{ui:Auto}}; et vektor- eller spenningsfelt tilbyr også hvilken komponent som skal vises.
- `show(f, 'deform', u, 'scale', 50)` tegner nettet flyttet av et forskyvningsfelt `u`, forstørret 50 ganger (uten `scale` er det ca. 8 % av modellens størrelse).
- Klikk på et vist nett: nærmeste node, elementet og feltverdiene der vises i delvisningene (**Valgt**).
- `plot`, `imagesc` og `table` setter et linjeplott, et fargekart over en 2-D-matrise eller en tabell i delvisningene. Et plott med samme `'id'` (eller tittel) som et tidligere, erstatter det, slik at en løkke kan oppdatere én konvergensgraf; `'append', true` legger til en kurve i den. {{ui:Tøm}} tømmer delvisningene; pilen folder dem bort.
- Med to eller flere plott viser {{ui:Side ved side}} dem alle samtidig (de nyeste seks); klikk på fanen til en tabell eller et bilde for å vise bare den igjen.
- Hvert plott har {{ui:PNG}}, {{ui:SVG}} og {{ui:CSV}} under seg. PNG og SVG skriver det ut på hvitt i papirfargene, uansett tema (PNG 1600 × 1000 piksler; SVG skaleres uten å bli uskarp). CSV beholder tallene med alle sifre: én kolonne med x og én kolonne per kurve når kurvene deler x, ellers én rad per punkt med kurvens navn.
- {{key:F}} eller {{ui:Tilpass}} tilpasser visningen til det som vises.

## Filer

- {{ui:Åpne}} i gruppen Skript (eller slipp filer på visningen eller panelet): `.craft`-, `.lua`- og `.py`-filer åpnes som nye skript (de kjøres ikke); datafiler (STL, OBJ, CSV, JSON, NPY, HDF5) lastes inn i variablene under filnavnet sitt.
- {{ui:Lagre}} i gruppen Skript laster ned det gjeldende skriptet som en fil.
- {{ui:Ny}} i gruppen Skript (eller {{ui:+}} ved fanene) starter et nytt skript. Dobbeltklikk på en fane for å gi den nytt navn; {{ui:×}} fjerner den (du kan angre det).

## Les delens parametere

Et skript leser delens parametere (se [Styr en del med parametere](topic:parameters)) med navn:

```
w = param('width');     % én parameters verdi, i mm (eller grader, eller et vanlig tall)
p = params();           % alle, som en struct: p.width, p.height
```

I Lua og Python er de `cs.param('width')` og `cs.params()`. Skript leser bare parametere: endre dem på fanen {{ui:Parametere}}. Under skriptets fane lister en linje hvilke parametere den leser med `param('…')`, og merker de delen ikke har; fanen {{ui:Parametere}} lister skriptet under hver av dem. Et navn som settes sammen mens skriptet kjører, for eksempel `param(name)`, listes ikke.

## Skript lagres i delen

Hvert skript i fanene lagres i delen, så {{ui:Lagre}} i gruppen Fil lagrer dem sammen med den, og endringer i dem kan angres. Å åpne en del **kjører aldri skriptene**: konsollen sier hvor mange den har, og de kjøres bare når du trykker {{ui:Kjør}}. En del fra noen andre kan inneholde hvilket som helst skript, så les det før du kjører det. Skript kjører i bakgrunnen på denne datamaskinen uten nettverkstilgang og kan ikke røre siden.

## Relatert

- [CraftScript-språket](topic:craftscript-language)
- [Skript i Lua](topic:craftscript-lua)
- [Skript i Python](topic:craftscript-python)
- [Analysebiblioteket](topic:craftscript-library)
- [Skriv din egen analyse](topic:craftscript-own-analysis)
