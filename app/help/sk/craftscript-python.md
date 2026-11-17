---
title: Skripty v Pythone
summary: Píšte skripty pracovného priestoru Skript v Pythone 3: objekt cs vstavaných funkcií, polia ako hodnoty podobné numpy s indexovaním od 0, zdieľaný pracovný priestor, výpis, čo ešte nie je k dispozícii a ako je Python izolovaný rovnako ako CraftScript a Lua.
keywords: Python, Python 3, CPython, WebAssembly, izolovaný, bezpečný, skript, jazyk, cs, ws, pracovný priestor, numpy, pole, matica, indexovanie, print, display, dôvera
from: 66eab56d
---

Python je tretí jazyk [pracovného priestoru Skript](topic:craftscript). Vyberte **Python** v poli jazyka nad editorom (súbor `.py` sa otvorí v Pythone sám od seba). Python, Lua a CraftScript zdieľajú tie isté premenné a tie isté vstavané funkcie, takže skript v Pythone môže použiť to, čo vytvoril skript CraftScript, a naopak.

Prvé spustenie Pythonu v návšteve načíta samotný Python (CPython 3.14, asi 7 MB) z tejto stránky, čo trvá niekoľko sekúnd. Python ešte nie je súčasťou {{ui:Uložiť na offline použitie}}: najprv spustite jeden skript v Pythone, keď ste online.

## Python je izolovaný

Skripty v Pythone sú izolované rovnako ako skripty CraftScript a Lua: dostanú sa k časti, premenným a vstavaným funkciám a nič iné. Každé spustenie je nový Python vo vlastnom sandboxe s malým súborovým stromom v pamäti (jeho štandardná knižnica a priečinok `/tmp`, ktorý po behu zmizne). Nemá prístup na sieť, k vašim súborom ani k zvyšku stránky, a to v prehliadači aj na príkazovom riadku. Skript od niekoho iného môže stále spotrebovať veľa času alebo pamäte: {{ui:Zastaviť}} ho ukončí.

## Základy

```
A = cs.magic(3)              # každá vstavaná funkcia je cs.<name>
B = A @ A.T                  # @ je maticový súčin, .T transpozícia
C = A * 2 + 1                # + - * / ** sú po prvkoch, ako v numpy
print(A[0, 1], A[-1, -1])    # od 0; záporné počíta od konca
row = A[1]                   # jeden index na matici: riadok
big = A[A > 4]               # logická maska vyberie prvky
A[0, 0] = -5                 # priradenie do poľa
V, D = cs.call('eig', 2, A)  # viac výsledkov: cs.call(name, koľko, …)
```

- Pole 1 × 1 príde ako obyčajné číslo; ostatné polia, riedke matice, siete, polia a modely sú **hodnoty**.
- Hodnota má `shape` (n-ticu), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (jej riadky) a `float()`, `int()` a `bool()` pre jeden prvok.
- Porovnania (`<`, `==`, …) sú po prvkoch, ako v numpy: dajú logickú hodnotu.
- Zoznamy čísel odovzdané vstavanej funkcii sa zmenia na polia: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` vytvorí maticu.
- Slovník sa zmení na štruktúru a zoznam zmiešaných vecí na bunku, a naopak.

Každá globálna premenná vášho skriptu (číslo, hodnota, slovník, zoznam…) sa objaví na karte {{ui:Premenné}}, keď beh skončí, aj po chybe. Názvy začínajúce na `_`, funkcie, triedy a moduly zostanú v Pythone. `ws.name` číta alebo nastavuje premennú priamo a `ws_names()` ich vypíše.

`print(…)` píše do konzoly. `display(…)` (alebo `cs.display`) zobrazí sieť, pole alebo graf, ako v CraftScripte.

## Volanie knižnice analýz

Funkcie knižnice sa volajú ako vstavané: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Názov napíšte do skriptu presne tak, ako je: PartCraft nájde funkcie knižnice, ktoré skript používa, ešte pred spustením.

## Zatiaľ nie je k dispozícii

- numpy, scipy a ďalšie balíky: je tu len vlastná štandardná knižnica Pythonu (`math`, `json`, `itertools`, `decimal`, `statistics`…), bez jej okenných, terminálových a databázových častí (`tkinter`, `curses`, `sqlite3`).
- Sockety a čokoľvek, čo by siahlo von: Python tu nemá sieť.
- `time.sleep` sa vráti hneď.
- Zbaľovanie v editore a volanie funkcie Python zo skriptu CraftScript.
- Beh kontroluje rozpočet inštrukcií a {{ui:Zastaviť}} každých 1000 riadkov; dlhý výpočet vo vnútri jednej vstavanej funkcie najprv dokončí.
