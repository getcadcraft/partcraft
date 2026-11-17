---
title: Skriv en egen analys
summary: Bygg en analys som skript i skriptarbetsytan: nätgenerera delen, sätt ihop och lös, visa fältet och en konvergensgraf, kontrollera resultatet mot en handberäkning och behåll stegen som separata skript som delar variabler.
keywords: egen analys, anpassad analys, FEA-skript, finit element, sammansätt, styvhet, randvillkor, lös, pcg, gles, fält, efterbearbetning, konvergens, verifiering, handberäkning, kontroll, arbetsflöde
from: 0f471a8e
---

En analys i skriptarbetsytan är några korta skript som skickar variabler till varandra. Börja från en funktion i [analysbiblioteket](topic:craftscript-library) som ligger nära vad du behöver, gör en kopia och ändra den; eller bygg upp en enligt nedan.

## 1. Ett nät

```
model = part();                  % delen du modellerar, som en modell
m = tetmesh(model, 4);           % tetraedrar ungefär 4 mm över
show(m)
```

Kontrollera nätet i vyn innan du går vidare: {{key:F}} anpassar det, och {{ui:eye}} i **Visade** döljer delen.

## 2. Sätt ihop och lös

Skriv elementloopen i skriptet (den läses som i läroboken) och lämna de tunga delarna till de inbyggda funktionerna: elementmatriser, glesa sammansättningar från tripplar och den konjugerade gradientlösaren med en förkonditionerare. En biblioteksfunktion som `static_tet` (när biblioteket har den) är ett komplett exempel att kopiera från.

## 3. Visa resultatet

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % ett värde per nod
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Solver residual', 'id', 'conv')
```

- Teckenförklaringens intervall kan skrivas in eller återställas till {{ui:Auto}}.
- Klicka på nätet för att läsa värdena i en nod.
- En graf som behåller samma `'id'` uppdateras på plats, så skriv ut och plotta inne i din loop för att följa konvergensen.

## 4. Kontrollera det

Jämför med något du känner till: en konsolbalks spetsnedböjning mot PL³/3EI, en platta med hål mot dess spänningskoncentrationsfaktor, reaktionerna mot lasterna. Skriv kontrollen som ett eget skript så att den körs om efter varje ändring:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Spara det

- Varje steg kan vara en egen skriptflik: de delar variabler, så kör dem i tur och ordning.
- Skript sparas i delen. Bocka för **Spara variablerna med delen** på fliken Variabler för att behålla resultaten också (upp till 32 MB).
- {{ui:Spara}} i gruppen Skript laddar ner ett skript för att dela det; {{ui:Öppna}} hämtar in ett.
