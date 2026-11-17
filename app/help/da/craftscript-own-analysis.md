---
title: Skriv din egen analyse
summary: Byg en analyse som scripts i Script-arbejdsområdet: mesh delen, saml og løs, vis feltet og en konvergensgraf, kontrollér resultatet mod en håndberegning, og behold trinene som separate scripts, der deler variabler.
keywords: egen analyse, tilpasset analyse, FEA-script, finit element, samling, stivhed, randbetingelser, løs, pcg, sparsom, felt, efterbehandling, konvergens, verifikation, håndberegning, kontrol, arbejdsgang
from: 0f471a8e
---

En analyse i Script-arbejdsområdet er nogle få korte scripts, der giver variabler videre til hinanden. Start fra en [biblioteks](topic:craftscript-library)-funktion, der ligner det, du har brug for, lav en kopi og ændr den; eller byg en op som nedenfor.

## 1. Et mesh

```
model = part();                  % den del du modellerer, som en model
m = tetmesh(model, 4);           % tetraedre på ca. 4 mm på tværs
show(m)
```

Tjek mesh'et i visningen, før du går videre: {{key:F}} tilpasser det, øjet i **Vist** skjuler delen.

## 2. Saml og løs

Skriv elementløkken i scriptet (den læses som i lærebogen), og overlad de tunge dele til de indbyggede funktioner: elementmatricer, sparsom samling fra tripler og den konjugerede gradient-løser med en præbetingelse. En biblioteksfunktion som `static_tet` (når biblioteket har den) er et komplet eksempel at kopiere fra.

## 3. Vis resultatet

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % én værdi per knude
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Tegnforklaringens interval kan skrives ind eller sættes tilbage til {{ui:Auto}}.
- Klik på mesh'et for at læse værdierne i en knude.
- En graf, der beholder samme `'id'`, opdateres på stedet, så udskriv og plot inde i din løkke for at følge konvergensen.

## 4. Kontrollér det

Sammenlign med noget, du kender: en udkrageres spidsnedbøjning mod PL³/3EI, en plade med hul mod dens spændingskoncentrationsfaktor, reaktionerne mod lasterne. Skriv kontrollen som sit eget script, så den kører igen efter hver ændring:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Gem det

- Hvert trin kan have sin egen script-fane: de deler variablerne, så kør dem den ene efter den anden.
- Scripts gemmes i delen. Sæt kryds i **Gem variablerne sammen med delen** på fanen Variabler for også at beholde resultaterne (op til 32 MB).
- {{ui:Gem}} i Script-gruppen downloader et script for at dele det; {{ui:Åbn}} henter et ind.
