---
title: Skript i Python
summary: Skriv skriptarbetsytans skript i Python 3: objektet cs med inbyggda funktioner, arrayer som numpy-liknande värden med 0-baserad indexering, den delade arbetsytan, utskrift, det som inte finns än och hur Python är inlåst på samma sätt som CraftScript och Lua.
keywords: Python, Python 3, CPython, WebAssembly, inlåst, säker, skript, språk, cs, ws, arbetsyta, numpy, array, matris, indexering, utskrift, visa, förtroende
from: 66eab56d
---

Python är det tredje språket i [Skriptarbetsytan](topic:craftscript). Välj **Python** i språkrutan ovanför redigeraren (en `.py`-fil öppnas i Python av sig själv). Python, Lua och CraftScript delar samma variabler och samma inbyggda funktioner, så ett Python-skript kan använda det ett CraftScript-skript har skapat, och tvärtom.

Den första Python-körningen under ett besök laddar Python självt (CPython 3.14, cirka 7 MB) från den här webbplatsen, vilket tar några sekunder. Python ingår inte i {{ui:Spara för offline}} ännu: kör ett Python-skript när du är online först.

## Python är inlåst

Python-skript är inlåsta precis som CraftScript- och Lua-skript: de når delen, variablerna och de inbyggda funktionerna, och inget annat. Varje körning är en ny Python i sin egen sandlåda med ett litet filträd i minnet (sitt standardbibliotek och en mapp `/tmp` som är borta efter körningen). Den kan inte nå nätverket, dina filer eller resten av sidan, varken i webbläsaren eller på kommandoraden. Ett skript från någon annan kan ändå använda mycket tid eller minne: {{ui:Stopp}} avslutar det.

## Grunderna

```
A = cs.magic(3)              # alla inbyggda funktioner är cs.<namn>
B = A @ A.T                  # @ är matrisprodukten, .T transponatet
C = A * 2 + 1                # + - * / ** arbetar element för element, som i numpy
print(A[0, 1], A[-1, -1])    # 0-baserat; negativa räknas från slutet
row = A[1]                   # ett index på en matris: en rad
big = A[A > 4]               # en logisk mask väljer element
A[0, 0] = -5                 # tilldelning till en array
V, D = cs.call('eig', 2, A)  # flera resultat: cs.call(namn, hur många, …)
```

- En 1 × 1-array kommer som ett vanligt tal; andra arrayer, glesa matriser, nät, fält och modeller är **värden**.
- Ett värde har `shape` (en tuple), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (dess rader), samt `float()`, `int()` och `bool()` för ett enda element.
- Jämförelser (`<`, `==`, …) är elementvisa, som i numpy: de ger ett logiskt värde.
- Listor med tal som skickas till en inbyggd funktion blir arrayer: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` gör en matris.
- En dict blir en struktur och en lista med blandade saker en cell, och tvärtom.

Varje global ditt skript skapar (ett tal, ett värde, en dict, en lista…) hamnar i fliken **Variabler** när körningen slutar, även efter ett fel. Namn som börjar med `_`, funktioner, klasser och moduler stannar i Python. `ws.name` läser eller sätter en variabel direkt, och `ws_names()` listar dem.

`print(…)` skriver till konsolen. `display(…)` (eller `cs.display`) visar ett nät, ett fält eller en graf, som i CraftScript.

## Anropa analysbiblioteket

Biblioteksfunktioner anropas som de inbyggda: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Skriv namnet i skriptet precis så det är: PartCraft hittar de biblioteksfunktioner ett skript använder innan det körs.

## Finns inte ännu

- numpy, scipy och andra paket: bara Pythons eget standardbibliotek (`math`, `json`, `itertools`, `decimal`, `statistics`…) finns här, utan dess fönster-, terminal- och databasdelar (`tkinter`, `curses`, `sqlite3`).
- Socket-anslutningar och allt annat som skulle nå utanför: Python har inget nätverk här.
- `time.sleep` returnerar direkt.
- Hopfällning i redigeraren, och att anropa en Python-funktion från ett CraftScript-skript.
- En körning kontrollerar instruktionsbudgeten och Stopp var 1000:e rad; en lång beräkning inne i en inbyggd funktion blir klar först.
