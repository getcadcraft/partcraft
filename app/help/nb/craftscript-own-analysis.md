---
title: Skriv din egen analyse
summary: Bygg en analyse som skript i Skript-arbeidsområdet: lag nett av delen, sett sammen og løs, vis feltet og en konvergensgraf, kontroller resultatet mot en håndberegning, og behold stegene som separate skript som deler variabler.
keywords: egen analyse, tilpasset analyse, FEA-skript, elementmetoden, sett sammen, stivhet, randbetingelser, løs, pcg, sparsom, felt, etterbehandling, konvergens, verifisering, håndberegning, kontroll, arbeidsflyt
from: 0f471a8e
---

En analyse i Skript-arbeidsområdet er noen få korte skript som gir variabler videre til hverandre. Start fra en [bibliotek](topic:craftscript-library)-funksjon som ligner det du trenger, lag en kopi og endre den; eller bygg en opp slik som nedenfor.

## 1. Et nett

```
model = part();                  % delen du modellerer, som en modell
m = tetmesh(model, 4);           % tetraedre på ca. 4 mm
show(m)
```

Sjekk nettet i visningen før du går videre: {{key:F}} tilpasser det, og {{ui:Øye}}-ikonet i **Vist** skjuler delen.

## 2. Sett sammen og løs

Skriv elementløkken i skriptet (den leser seg som læreboka), og overlat de tunge delene til de innebygde funksjonene: elementmatriser, sparsom sammensetting fra tripler, og den konjugerte gradientløseren med en forkondisjonerer. En bibliotekfunksjon som `static_tet` (når biblioteket har den) er et komplett eksempel å kopiere fra.

## 3. Vis resultatet

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % én verdi per node
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Området på tegnforklaringen kan skrives inn, eller settes tilbake til {{ui:Auto}}.
- Klikk på nettet for å lese verdiene i en node.
- Et plott som beholder samme `'id'` oppdateres på stedet, så skriv ut og plott inne i løkken for å følge konvergensen.

## 4. Kontroller det

Sammenlign med noe du kjenner: en utkragd bjelkes spissnedbøyning mot PL³/3EI, en plate med hull mot dens spenningskonsentrasjonsfaktor, reaksjonene mot lastene. Skriv kontrollen som eget skript, slik at den kjører på nytt etter hver endring:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Behold det

- Hvert steg kan være sin egen skriptfane: de deler variablene, så kjør dem etter hverandre.
- Skript lagres i delen. Kryss av for **Lagre variablene sammen med delen** på fanen Variabler for å beholde resultatene også (opptil 32 MB).
- {{ui:Lagre}} i gruppen Skript laster ned et skript for å dele det; {{ui:Åpne}} henter et inn.
