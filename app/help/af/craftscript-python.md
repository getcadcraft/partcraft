---
title: Skripte in Python
summary: Skryf Skrip-werkruimte-skripte in Python 3: die cs-objek van ingeboude funksies, skikkings as numpy-agtige waardes met 0-gebaseerde indeksering, die gedeelde werkruimte, druk, wat nog nie daar is nie, en hoe Python toegesluit is soos CraftScript en Lua.
keywords: Python, Python 3, CPython, WebAssembly, toegesluit, veilig, skrip, taal, cs, ws, werkruimte, numpy, skikking, matriks, indeksering, druk, vertoon, vertroue
from: 66eab56d
---

Python is die derde taal van die [Skrip-werkruimte](topic:craftscript). Kies **Python** in die taalkassie bo die redigeerder (`.py`-lêer open vanself in Python). Python, Lua en CraftScript deel dieselfde veranderlikes en dieselfde ingeboude funksies, so 'n Python-skrip kan gebruik wat 'n CraftScript-skrip gemaak het, en andersom.

Die eerste Python-lopie in 'n besoek laai Python self (CPython 3.14, ongeveer 7 MB) van hierdie webwerf af, wat 'n paar sekondes neem. Python is nog nie deel van {{ui:Stoor vir vanlyn}} nie: loop eers een Python-skrip terwyl jy aanlyn is.

## Python is toegesluit

Python-skripte is toegesluit soos CraftScript- en Lua-skripte: hulle bereik die onderdeel, die veranderlikes en die ingeboude funksies, en niks anders nie. Elke lopie is 'n vars Python in sy eie sandboks met 'n klein lêerboom in die geheue (sy standaardbiblioteek en 'n `/tmp`-vouer wat ná die lopie weg is). Dit kan nie die netwerk, jou lêers of die res van die bladsy bereik nie, in die blaaier sowel as op die opdraglyn. 'n Skrip van iemand anders kan steeds baie tyd of geheue gebruik: {{ui:Stop}} beëindig dit.

## Die belangrikste

```
A = cs.magic(3)              # elke ingeboude funksie is cs.<naam>
B = A @ A.T                  # @ is die matriksproduk, .T die transponeer
C = A * 2 + 1                # + - * / ** is element-gewys, soos in numpy
print(A[0, 1], A[-1, -1])    # 0-gebaseerd; negatief tel vanaf die einde
row = A[1]                   # een indeks op 'n matriks: 'n ry
big = A[A > 4]               # 'n logiese masker kies elemente
A[0, 0] = -5                 # toekenning aan 'n skikking
V, D = cs.call('eig', 2, A)  # verskeie resultate: cs.call(naam, hoeveel, …)
```

- 'n 1 × 1-skikking kom aan as 'n gewone getal; ander skikkings, yl matrikse, maas, velde en modelle is **Waardes**.
- 'n Waarde het `shape` (a tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (sy rye), en `float()`, `int()` en `bool()` vir 'n enkele element.
- Vergelykings (`<`, `==`, …) is element-gewys, soos in numpy: hulle gee 'n logiese Waarde.
- Lyste van getalle wat aan 'n ingeboude funksie gegee word, word skikkings: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` maak 'n matriks.
- 'n Dict word 'n struct en 'n lys van gemengde dinge 'n sel, en terug weer.

Elke globale wat jou skrip maak ('n getal, 'n Waarde, 'n dict, 'n lys…) beland op die **Veranderlikes**-blad wanneer die lopie eindig, selfs ná 'n fout. Name wat met `_` begin, funksies, klasse en modules bly in Python. `ws.name` lees of stel 'n veranderlike direk, en `ws_names()` lys hulle.

`print(…)` skryf na die konsole. `display(…)` (of `cs.display`) wys 'n maas, 'n veld of 'n grafiek, soos in CraftScript.

## Roep die analise-biblioteek aan

Biblioteekfunksies word soos ingeboude aangeroep: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Skryf die naam in die skrip soos dit is: PartCraft vind die biblioteekfunksies wat 'n skrip gebruik voordat dit loop.

## Nog nie daar nie

- numpy, scipy en ander pakkette: slegs Python se eie standaardbiblioteek (`math`, `json`, `itertools`, `decimal`, `statistics`…) is hier, sonder die venster-, terminaal- en databasedele daarvan (`tkinter`, `curses`, `sqlite3`).
- Sockets en enigiets anders wat buite sou bereik: Python het hier geen netwerk nie.
- `time.sleep` keer onmiddellik terug.
- Vou in die redigeerder, en die aanroep van 'n Python-funksie uit 'n CraftScript-skrip.
- 'n Lopie kontroleer die instruksiebegroting en Stop elke 1000 reëls; 'n lang berekening binne een ingeboude funksie eindig eers.
