---
title: Scripts i Python
summary: Skriv Script-arbejdsområdets scripts i Python 3: cs-objektet med indbyggede funktioner, arrays som numpy-lignende værdier med 0-baseret indeksering, det delte arbejdsområde, udskrivning, hvad der endnu ikke findes, og hvordan Python er afskærmet ligesom CraftScript og Lua.
keywords: Python, Python 3, CPython, WebAssembly, afskærmet, sikker, script, sprog, cs, ws, arbejdsområde, numpy, array, matrix, indeksering, print, display, tillid
from: 66eab56d
---

Python er det tredje sprog i [Script-arbejdsområdet](topic:craftscript). Vælg **Python** i sprogfeltet over editoren (en `.py`-fil åbnes i Python af sig selv). Python, Lua og CraftScript deler de samme variabler og de samme indbyggede funktioner, så et Python-script kan bruge det, et CraftScript-script har lavet, og omvendt.

Den første Python-kørsel i et besøg henter selve Python (CPython 3.14, ca. 7 MB) fra dette websted, hvilket tager nogle sekunder. Python er endnu ikke en del af {{ui:Gem til offline brug}}: kør et Python-script, mens du er online, først.

## Python er afskærmet

Python-scripts er afskærmet ligesom CraftScript- og Lua-scripts: de når delen, variablerne og de indbyggede funktioner og intet andet. Hver kørsel er en frisk Python i sin egen sandkasse med et lille filtræ i hukommelsen (dets standardbibliotek og en `/tmp`-mappe, som er væk efter kørslen). Den kan ikke nå netværket, dine filer eller resten af siden, hverken i browseren eller på kommandolinjen. Et script fra andre kan stadig bruge meget tid eller hukommelse: {{ui:Stop}} afslutter det.

## Det vigtigste

```
A = cs.magic(3)              # alle indbyggede funktioner er cs.<navn>
B = A @ A.T                  # @ er matrixproduktet, .T transponeringen
C = A * 2 + 1                # + - * / ** virker elementvis, som i numpy
print(A[0, 1], A[-1, -1])    # 0-baseret; negative tal tæller fra enden
row = A[1]                   # ét indeks på en matrix: en række
big = A[A > 4]               # en logisk maske vælger elementer
A[0, 0] = -5                 # tildeling til et array
V, D = cs.call('eig', 2, A)  # flere resultater: cs.call(navn, hvor mange, …)
```

- Et 1 × 1-array kommer ind som et almindeligt tal; andre arrays, sparsomme matricer, meshes, felter og modeller er **Values**.
- En Value har `shape` (en tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (dens rækker) og `float()`, `int()` og `bool()` for ét element.
- Sammenligninger (`<`, `==`, …) er elementvise, som i numpy: de giver en logisk Value.
- Lister af tal, der sendes til en indbygget funktion, bliver til arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` laver en matrix.
- En dict bliver til en struct, og en liste med blandede ting til en celle, og tilbage igen.

Hver global, dit script laver (et tal, en Value, en dict, en liste …), havner på fanen **Variabler**, når kørslen slutter, også efter en fejl. Navne, der begynder med `_`, funktioner, klasser og moduler bliver i Python. `ws.name` læser eller sætter en variabel direkte, og `ws_names()` lister dem.

`print(…)` skriver til konsollen. `display(…)` (eller `cs.display`) viser et mesh, et felt eller en graf, som i CraftScript.

## Kald analysebiblioteket

Biblioteksfunktioner kaldes ligesom de indbyggede: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Skriv navnet i scriptet, som det er: PartCraft finder de biblioteksfunktioner, et script bruger, før det kører.

## Ikke klar endnu

- numpy, scipy og andre pakker: kun Pythons eget standardbibliotek (`math`, `json`, `itertools`, `decimal`, `statistics` …) er her, uden dets vindue-, terminal- og databasedele (`tkinter`, `curses`, `sqlite3`).
- Sockets og alt andet, der ville nå udenfor: Python har ingen netværk her.
- `time.sleep` returnerer straks.
- Sammenfoldning i editoren og kald af en Python-funktion fra et CraftScript-script.
- En kørsel tjekker instruktionsbudgettet og Stop hver 1000. linje; en lang beregning inde i én indbygget funktion bliver færdig først.
