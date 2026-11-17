---
title: Szkriptek Python nyelven
summary: Szkriptek írása a Szkript munkaterületen Python 3 nyelven: a beépített függvényeket tartalmazó `cs` objektum, a numpy-szerű értékek 0-alapú indexeléssel, a közös munkaterület, a kiírás, ami még nincs kész, és hogy a Python a CraftScripthez és a Luához hasonlóan elzárt.
keywords: Python, Python 3, CPython, WebAssembly, elzárt, biztonságos, szkript, nyelv, cs, ws, munkaterület, numpy, tömb, mátrix, indexelés, print, display, bizalom
from: 66eab56d
---

A Python a [Szkript munkaterület](topic:craftscript) harmadik nyelve. Válassza a **Python** elemet a szerkesztő fölötti nyelvdobozban (a `.py` fájl magától Pythonként nyílik meg). A Python, a Lua és a CraftScript ugyanazokat a változókat és ugyanazokat a beépített függvényeket használja, így egy Python-szkript használhatja azt, amit egy CraftScript-szkript készített, és fordítva.

A látogatás első Python-futtatása magát a Pythont tölti be (CPython 3.14, kb. 7 MB) ebről a webhelyről, ez néhány másodpercig tart. A Python még nem része a {{ui:Mentés offline használatra}} funkciónak: előbb futtasson egy Python-szkriptet online.

## A Python el van zárva

A Python-szkriptek a CraftScript- és Lua-szkriptekhez hasonlóan el vannak zárva: az alkatrészt, a változókat és a beépített függvényeket érik el, mást nem. Minden futtatás egy friss Python a saját homokozójában, a memóriában lévő kis fájlrendszerrel (a standard könyvtárával és egy `/tmp` mappával, amely a futás után megszűnik). Nem éri el a hálózatot, a fájljait vagy az oldal többi részét, sem a böngészőben, sem a parancssorban. Egy más által írt szkript így is sok időt vagy memóriát foglalhat le: a {{ui:Leállítás}} véget vet neki.

## Az alapok

```
A = cs.magic(3)              # minden beépített függvény cs.<name>
B = A @ A.T                  # @ a mátrixszorzat, .T a transzponált
C = A * 2 + 1                # + - * / ** elemenként, mint a numpyban
print(A[0, 1], A[-1, -1])    # 0-alapú; a negatív a végétől számol
row = A[1]                   # egy index egy mátrixon: egy sor
big = A[A > 4]               # logikai maszk választ ki elemeket
A[0, 0] = -5                 # írás egy tömbbe
V, D = cs.call('eig', 2, A)  # több eredmény: cs.call(név, hány, …)
```

- Az 1 × 1-es tömb egyszerű számként érkezik; a többi tömb, ritka mátrix, háló, mező és modell **Érték**.
- Egy Értéknek van `shape` (tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (a sorai), valamint `float()`, `int()` és `bool()` egyetlen elemre.
- Az összehasonlítások (`<`, `==`, …) elemenként működnek, mint a numpyban: logikai Értéket adnak.
- A beépített függvénynek átadott számlisták tömbbé válnak: `cs.sum([1, 2, 3])`. A `cs.tensor([[1, 2], [3, 4]])` mátrixot készít.
- A szótár struktúrává, a vegyes elemek listája cellává válik, és vissza.

A szkript minden globális változója (szám, Érték, szótár, lista…) a futás végén a **Változók** lapra kerül, hibát követően is. Az `_`-sal kezdődő nevek, a függvények, osztályok és modulok Pythonban maradnak. A `ws.name` közvetlenül olvas vagy állít be egy változót, a `ws_names()` pedig felsorolja őket.

A `print(…)` a konzolra ír. A `display(…)` (vagy a `cs.display`) hálót, mezőt vagy ábrát jelenít meg, ahogy a CraftScriptben.

## Az elemzőkönyvtár hívása

A könyvtári függvényeket úgy hívja, mint a beépítetteket: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. A nevet úgy írja le a szkriptben, ahogy van: a PartCraft a futás előtt megtalálja a szkript által használt könyvtári függvényeket.

## Még nincs kész

- numpy, scipy és más csomagok: csak a Python saját standard könyvtára (`math`, `json`, `itertools`, `decimal`, `statistics`…) érhető el, az ablak-, terminál- és adatbázis-részei nélkül (`tkinter`, `curses`, `sqlite3`).
- Socketek és minden más, ami kifelé nyúlna: a Pythonnak itt nincs hálózata.
- A `time.sleep` azonnal visszatér.
- Kódblokkok összecsukása a szerkesztőben, és Python-függvény hívása CraftScript-szkriptből.
- A futás 1000 sornyi végrehajtásonként ellenőrzi az utasításkeretet és a Leállítást; egy hosszú számítás egyetlen beépített függvényen belül előbb befejeződik.
