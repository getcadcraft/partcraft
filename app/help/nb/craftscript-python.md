---
title: Skript i Python
summary: Skriv Skript-arbeidsområdets skript i Python 3: cs-objektet med innebygde funksjoner, matriser som numpy-liknende verdier med 0-basert indeksering, det delte arbeidsområdet, utskrift, hva som ikke finnes ennå, og hvordan Python er isolert på samme måte som CraftScript og Lua.
keywords: Python, Python 3, CPython, WebAssembly, isolert, trygg, skript, språk, cs, ws, arbeidsområde, numpy, array, matrise, indeksering, print, display, tillit
from: 66eab56d
---

Python er det tredje språket i [Skript-arbeidsområdet](topic:craftscript). Velg **Python** i språkboksen over redigeringsverktøyet (en `.py`-fil åpnes i Python av seg selv). Python, Lua og CraftScript deler de samme variablene og de samme innebygde funksjonene, så et Python-skript kan bruke det et CraftScript-skript laget, og omvendt.

Første Python-kjøring i et besøk laster inn Python selv (CPython 3.14, ca. 7 MB) fra denne siden, noe som tar noen sekunder. Python er ikke en del av {{ui:Lagre for frakoblet bruk}} ennå: kjør ett Python-skript mens du er tilkoblet først.

## Python er isolert

Python-skript er isolert på samme måte som CraftScript- og Lua-skript: de når delen, variablene og de innebygde funksjonene, og ikke noe annet. Hver kjøring er en ny Python i sin egen sandkasse, med et lite filsystem i minnet (standardbiblioteket og en mappe `/tmp` som er borte etter kjøringen). Det kan ikke nå nettverket, filene dine eller resten av siden, verken i nettleseren eller på kommandolinjen. Et skript fra noen andre kan likevel bruke mye tid eller minne: {{ui:Stopp}} avslutter det.

## Det viktigste

```
A = cs.magic(3)              # hver innebygd funksjon er cs.<name>
B = A @ A.T                  # @ er matriseproduktet, .T er transponeringen
C = A * 2 + 1                # + - * / ** virker elementvis, som i numpy
print(A[0, 1], A[-1, -1])    # 0-basert; negative tall teller fra enden
row = A[1]                   # én indeks på en matrise: en rad
big = A[A > 4]               # en logisk maske velger elementer
A[0, 0] = -5                 # tilordning inn i en matrise
V, D = cs.call('eig', 2, A)  # flere resultater: cs.call(navn, hvor mange, …)
```

- En 1 × 1-matrise kommer som et vanlig tall; andre matriser, sparsomme matriser, nett, felt og modeller er **verdier**.
- En verdi har `shape` (en tuppel), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (radene), og `float()`, `int()` og `bool()` for ett element.
- Sammenligninger (`<`, `==`, …) er elementvise, som i numpy: de gir en logisk verdi.
- Lister med tall som sendes til en innebygd funksjon, blir matriser: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` lager en matrise.
- En dict blir en struct, og en liste med blandede ting en celle, og tilbake igjen.

Hver global variabel skriptet lager (et tall, en verdi, en dict, en liste …) havner i fanen **Variabler** når kjøringen avsluttes, også etter en feil. Navn som begynner med `_`, funksjoner, klasser og moduler blir i Python. `ws.name` leser eller setter en variabel direkte, og `ws_names()` lister dem.

`print(…)` skriver til konsollen. `display(…)` (eller `cs.display`) viser et nett, et felt eller et plott, som i CraftScript.

## Kall analysebiblioteket

Bibliotekfunksjoner kalles som de innebygde: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Skriv navnet i skriptet slik det er: PartCraft finner bibliotekfunksjonene et skript bruker før det kjører.

## Ikke der ennå

- numpy, scipy og andre pakker: bare Pythons eget standardbibliotek (`math`, `json`, `itertools`, `decimal`, `statistics` …) finnes her, uten vindu-, terminal- og databasedelene (`tkinter`, `curses`, `sqlite3`).
- Sockets og alt annet som ville nå utenfor: Python har ingen nettverkstilgang her.
- `time.sleep` returnerer med en gang.
- Sammenfolding i redigeringsverktøyet, og å kalle en Python-funksjon fra et CraftScript-skript.
- En kjøring sjekker instruksjonsbudsjettet og stopp hver 1000. linje; en lang beregning inne i én innebygd funksjon fullføres først.
