---
title: Skripte in Python
summary: Skripte des Skript-Arbeitsbereichs in Python 3 schreiben: das cs-Objekt eingebauter Funktionen, Arrays als numpy-ähnliche Werte mit nullbasierter Indizierung, der gemeinsame Arbeitsbereich, Ausgabe, was noch fehlt und wie Python wie CraftScript und Lua abgeschottet ist.
keywords: Python, Python 3, CPython, WebAssembly, abgeschottet, sicher, Skript, Sprache, cs, ws, Arbeitsbereich, numpy, Array, Matrix, Indizierung, print, Anzeige, Vertrauen
from: 66eab56d
---

Python ist die dritte Sprache des [Skript-Arbeitsbereichs](topic:craftscript). Wählen Sie **Python** im Sprachfeld über dem Editor (eine `.py`-Datei öffnet sich von selbst in Python). Python, Lua und CraftScript teilen sich dieselben Variablen und dieselben eingebauten Funktionen, sodass ein Python-Skript nutzen kann, was ein CraftScript-Skript erzeugt hat, und umgekehrt.

Der erste Python-Lauf bei einem Besuch lädt Python selbst (CPython 3.14, etwa 7 MB) von dieser Seite, das dauert einige Sekunden. Python ist noch nicht Teil von {{ui:Für Offline speichern}}: Führen Sie vorher ein Python-Skript aus, solange Sie online sind.

## Python ist abgeschottet

Python-Skripte sind wie CraftScript- und Lua-Skripte abgeschottet: Sie erreichen das Bauteil, die Variablen und die eingebauten Funktionen und sonst nichts. Jeder Lauf ist ein frisches Python in seiner eigenen Sandbox mit einem kleinen Dateibaum im Speicher (seiner Standardbibliothek und einem Ordner `/tmp`, der nach dem Lauf verschwunden ist). Es kann weder das Netzwerk, Ihre Dateien noch den Rest der Seite erreichen, sei es im Browser oder in der Befehlszeile. Ein Skript von anderen kann dennoch viel Zeit oder Speicher verbrauchen: {{ui:Stopp}} beendet es.

## Die Grundlagen

```
A = cs.magic(3)              # jede eingebaute Funktion ist cs.<name>
B = A @ A.T                  # @ ist das Matrixprodukt, .T die Transposition
C = A * 2 + 1                # + - * / ** sind elementweise, wie in numpy
print(A[0, 1], A[-1, -1])    # nullbasiert; negativ zählt vom Ende
row = A[1]                   # ein Index auf einer Matrix: eine Zeile
big = A[A > 4]               # eine logische Maske wählt Elemente aus
A[0, 0] = -5                 # Zuweisung in ein Array
V, D = cs.call('eig', 2, A)  # mehrere Ergebnisse: cs.call(name, Anzahl, …)
```

- Ein 1 × 1-Array kommt als einfache Zahl an; andere Arrays, dünnbesetzte Matrizen, Netze, Felder und Modelle sind **Werte**.
- Ein Wert hat `shape` (ein Tupel), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (seine Zeilen) sowie `float()`, `int()` und `bool()` für ein einzelnes Element.
- Vergleiche (`<`, `==`, …) sind elementweise, wie in numpy: Sie ergeben einen logischen Wert.
- Zahlenlisten, die an eine eingebaute Funktion übergeben werden, werden zu Arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` erzeugt eine Matrix.
- Ein Dict wird zu einem Struct und eine Liste gemischter Dinge zu einer Zelle, und zurück.

Jede globale Variable, die Ihr Skript erzeugt (eine Zahl, ein Wert, ein Dict, eine Liste …), landet am Ende des Laufs in der Registerkarte **Variablen**, auch nach einem Fehler. Namen, die mit `_` beginnen, sowie Funktionen, Klassen und Module bleiben in Python. `ws.name` liest oder setzt eine Variable direkt, und `ws_names()` listet sie auf.

`print(…)` schreibt in die Konsole. `display(…)` (oder `cs.display`) zeigt ein Netz, ein Feld oder einen Plot, wie in CraftScript.

## Die Analysebibliothek aufrufen

Bibliotheksfunktionen werden wie eingebaute aufgerufen: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Schreiben Sie den Namen im Skript genau so aus: PartCraft findet die Bibliotheksfunktionen, die ein Skript verwendet, bevor es läuft.

## Noch nicht vorhanden

- numpy, scipy und andere Pakete: Hier ist nur die eigene Standardbibliothek von Python vorhanden (`math`, `json`, `itertools`, `decimal`, `statistics` …), ohne ihre Fenster-, Terminal- und Datenbankteile (`tkinter`, `curses`, `sqlite3`).
- Sockets und alles andere, was nach außen reichen würde: Python hat hier kein Netzwerk.
- `time.sleep` kehrt sofort zurück.
- Einklappen im Editor und der Aufruf einer Python-Funktion aus einem CraftScript-Skript.
- Ein Lauf prüft das Befehlsbudget und Stopp alle 1000 Zeilen; eine lange Berechnung innerhalb einer eingebauten Funktion wird zuerst zu Ende geführt.
