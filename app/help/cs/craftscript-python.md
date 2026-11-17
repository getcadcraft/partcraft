---
title: Skripty v Pythonu
summary: Psaní skriptů pracovního prostoru Skript v Pythonu 3: objekt cs s vestavěnými funkcemi, pole jako hodnoty podobné numpy s indexováním od 0, sdílený pracovní prostor, tisk, co zatím není, a jak je Python izolován jako CraftScript a Lua.
keywords: Python, Python 3, CPython, WebAssembly, izolovaný, bezpečný, skript, jazyk, cs, ws, pracovní prostor, numpy, pole, matice, indexování, tisk, zobrazení, důvěra
from: 66eab56d
---

Python je třetí jazyk [pracovního prostoru Skript](topic:craftscript). Zvolte **Python** v poli jazyka nad editorem (soubor `.py` se otevře v Pythonu sám). Python, Lua a CraftScript sdílejí tytéž proměnné a tytéž vestavěné funkce, takže skript v Pythonu může použít to, co vytvořil skript CraftScript, a naopak.

První spuštění Pythonu během návštěvy načte samotný Python (CPython 3.14, asi 7 MB) z tohoto webu, což trvá několik sekund. Python zatím není součástí {{ui:Uložit pro offline}}: nejprve spusťte jeden skript v Pythonu online.

## Python je izolován

Skripty v Pythonu jsou izolované jako skripty CraftScript a Lua: dosáhnou na díl, proměnné a vestavěné funkce, a na nic jiného. Každé spuštění je nový Python ve vlastním sandboxu s malým souborovým stromem v paměti (jeho standardní knihovna a složka `/tmp`, která po běhu zmizí). Nedosáhne na síť, na vaše soubory ani na zbytek stránky, ať už v prohlížeči, nebo na příkazovém řádku. Skript od někoho jiného může stále spotřebovat hodně času nebo paměti: {{ui:Zastavit}} jej ukončí.

## Základy

```
A = cs.magic(3)              # každá vestavěná funkce je cs.<name>
B = A @ A.T                  # @ je maticový součin, .T transpozice
C = A * 2 + 1                # + - * / ** jsou po prvcích, jako v numpy
print(A[0, 1], A[-1, -1])    # od 0; záporné počítá od konce
row = A[1]                   # jeden index u matice: řádek
big = A[A > 4]               # logická maska vybere prvky
A[0, 0] = -5                 # zápis do pole
V, D = cs.call('eig', 2, A)  # více výsledků: cs.call(jméno, kolik, …)
```

- Pole 1 × 1 přijde jako prosté číslo; ostatní pole, řídké matice, sítě, pole veličin a modely jsou **Hodnoty**.
- Hodnota má `shape` (n-tici), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (její řádky), a `float()`, `int()` a `bool()` pro jeden prvek.
- Porovnání (`<`, `==`, …) jsou po prvcích, jako v numpy: dávají logickou hodnotu.
- Seznamy čísel předané vestavěné funkci se změní na pole: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` udělá matici.
- Slovník se změní na strukturu a seznam smíšených věcí na buňku, a zase zpět.

Každá globální proměnná vašeho skriptu (číslo, Hodnota, slovník, seznam…) se objeví na kartě **Proměnné** po skončení běhu, i po chybě. Jména začínající na `_`, funkce, třídy a moduly zůstanou v Pythonu. `ws.name` čte nebo nastavuje proměnnou přímo a `ws_names()` je vypíše.

`print(…)` píše do konzole. `display(…)` (nebo `cs.display`) zobrazí síť, pole veličin nebo graf, jako v CraftScriptu.

## Volání knihovny analýz

Funkce knihovny se volají jako vestavěné: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Jméno napište do skriptu tak, jak je: PartCraft najde funkce knihovny, které skript používá, dřív než běží.

## Zatím tu není

- numpy, scipy a jiné balíčky: je tu jen standardní knihovna Pythonu (`math`, `json`, `itertools`, `decimal`, `statistics`…) bez jejích částí pro okna, terminál a databáze (`tkinter`, `curses`, `sqlite3`).
- Sokety a cokoli jiného, co by vedlo ven: Python tu nemá síť.
- `time.sleep` se vrátí hned.
- Sbalování v editoru a volání funkce Pythonu ze skriptu CraftScript.
- Běh kontroluje rozpočet instrukcí a tlačítko Zastavit každých 1000 řádků; dlouhý výpočet uvnitř jedné vestavěné funkce doběhne dřív.
