---
title: Vraćanje unatrag i naprijed kroz povijest
summary: Pomičite traku vraćanja unatrag gore i dolje za jednu značajku da pratite kako se dio gradi, umećite značajke usred povijesti i vratite se na kraj.
keywords: vraćanje unatrag, vrati unatrag, napređivanje, traka vraćanja unatrag, korak kroz povijest, umetni značajku, zamrzni, povijest
from: 9a366cae
---

Traka vraćanja unatrag određuje koliko se povijesti izgrađuje. Značajke ispod nje su sive i nisu izgrađene; nove značajke ulaze na traku.

## Korak po jednu značajku

S dijelom na zaslonu (bez otvorene skice ili crteža):

| Radnja | Rezultat |
|---|---|
| {{key:[}} ili gumb strelice prema gore pored naziva dijela | Traka se pomakne gore za jednu značajku |
| {{key:]}} ili gumb strelice prema dolje | Traka se pomakne dolje za jednu značajku |
| {{key:End}} ili gumb trake na kraj | Svaka značajka se ponovno izgradi |

Statusna traka kaže gdje je traka, npr. „Traka vraćanja unatrag nakon Sketch1: izgrađeno 1 od 2 značajke“. Gumbi su isključeni kad se traka ne može više micati u tom smjeru.

Također možete odabrati {{ui:Vrati unatrag do ovdje}} na bilo kojoj značajki, ili kliknuti **Traka vraćanja unatrag · napređivanje** u povijesti.

## Umetnite značajku usred povijesti

1. Vratite traku unatrag dok ne stane tamo gdje pripada nova značajka.
2. Dodajte značajku: ulazi na traku.
3. Pritisnite {{key:End}} da izgradite ostatak povijesti na njoj.

Svaki pomak trake je korak koji možete poništiti s {{key:Mod+Z}}. Mjesto trake sprema se u datoteku, pa se dio može poslati vraćen unatrag. Alat naredbenog retka također je pomiče: `partcraft rollback part.json` i `partcraft forward part.json --end`.
