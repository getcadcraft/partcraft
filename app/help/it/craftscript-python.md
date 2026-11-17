---
title: Script in Python
summary: Scrivere script dell'area di lavoro Script in Python 3: l'oggetto cs delle funzioni integrate, array come valori simili a numpy con indicizzazione da 0, l'area di lavoro condivisa, stampa, ciò che non c'è ancora, e come Python è isolato come CraftScript e Lua.
keywords: Python, Python 3, CPython, WebAssembly, isolato, sicuro, script, linguaggio, cs, ws, area di lavoro, numpy, array, matrice, indicizzazione, print, display, fiducia
from: 66eab56d
---

Python è il terzo linguaggio dell'[area di lavoro Script](topic:craftscript). Scegliere **Python** nella casella della lingua sopra l'editor (un file `.py` si apre in Python da solo). Python, Lua e CraftScript condividono le stesse variabili e le stesse funzioni integrate, quindi uno script Python può usare ciò che ha creato uno script CraftScript, e viceversa.

La prima esecuzione di Python in una visita carica Python stesso (CPython 3.14, circa 7 MB) da questo sito, cosa che richiede alcuni secondi. Python non fa ancora parte di {{ui:Salva per l'uso offline}}: eseguire prima uno script Python mentre si è online.

## Python è isolato

Gli script Python sono isolati come gli script CraftScript e Lua: raggiungono la parte, le variabili e le funzioni integrate, e nient'altro. Ogni esecuzione è un Python nuovo nella propria sandbox, con un piccolo albero di file in memoria (la sua libreria standard e una cartella `/tmp` che sparisce dopo l'esecuzione). Non può raggiungere la rete, i file né il resto della pagina, sia nel browser sia nella riga di comando. Uno script di altri può comunque consumare molto tempo o memoria: {{ui:Ferma}} lo termina.

## Le basi

```
A = cs.magic(3)              # ogni funzione integrata è cs.<nome>
B = A @ A.T                  # @ è il prodotto matriciale, .T la trasposta
C = A * 2 + 1                # + - * / ** sono elemento per elemento, come in numpy
print(A[0, 1], A[-1, -1])    # da 0; i negativi contano dalla fine
row = A[1]                   # un solo indice su una matrice: una riga
big = A[A > 4]               # una maschera logica sceglie gli elementi
A[0, 0] = -5                 # assegnazione dentro un array
V, D = cs.call('eig', 2, A)  # più risultati: cs.call(nome, quanti, …)
```

- Un array 1 × 1 arriva come semplice numero; gli altri array, matrici sparse, mesh, campi e modelli sono **Valori**.
- Un Valore ha `shape` (una tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (le sue righe), e `float()`, `int()` e `bool()` per un singolo elemento.
- I confronti (`<`, `==`, …) sono elemento per elemento, come in numpy: danno un Valore logico.
- Le liste di numeri passate a una funzione integrata diventano array: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` crea una matrice.
- Un dict diventa una struct e una lista di elementi misti una cella, e viceversa.

Ogni globale creato dallo script (un numero, un Valore, un dict, una lista…) finisce nella scheda **Variabili** quando l'esecuzione termina, anche dopo un errore. I nomi che iniziano con `_`, le funzioni, le classi e i moduli restano in Python. `ws.name` legge o imposta direttamente una variabile, e `ws_names()` le elenca.

`print(…)` scrive sulla console. `display(…)` (o `cs.display`) mostra una mesh, un campo o un grafico, come in CraftScript.

## Chiamare la libreria di analisi

Le funzioni della libreria si chiamano come quelle integrate: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Scrivere il nome nello script così com'è: PartCraft trova le funzioni della libreria usate da uno script prima di eseguirlo.

## Non ancora disponibile

- numpy, scipy e altri pacchetti: c'è solo la libreria standard di Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), senza le sue parti di finestre, terminale e database (`tkinter`, `curses`, `sqlite3`).
- Socket e tutto ciò che uscirebbe verso l'esterno: qui Python non ha rete.
- `time.sleep` ritorna subito.
- Il ripiegamento nell'editor, e chiamare una funzione Python da uno script CraftScript.
- Un'esecuzione controlla il limite di istruzioni e {{ui:Ferma}} ogni 1000 righe; un calcolo lungo dentro una singola funzione integrata finisce prima.
