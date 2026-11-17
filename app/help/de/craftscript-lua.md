---
title: Skripte in Lua
summary: Skripte des Skript-Arbeitsbereichs in Lua 5.4 schreiben: die cs-Tabelle eingebauter Funktionen, Arrays als Werte mit Indizierung und Arithmetik, der gemeinsame Arbeitsbereich ws, Ausgabe und Anzeige von Ergebnissen sowie was abgeschaltet ist.
keywords: Lua, Lua 5.4, Skript, Sprache, cs-Tabelle, ws, Arbeitsbereich, Userdata, Tensor, Array, Matrix, print, Anzeige, Sandbox
from: 82c668b3
---

Lua ist die zweite Sprache des [Skript-Arbeitsbereichs](topic:craftscript). Wählen Sie **Lua** im Sprachfeld über dem Editor (eine `.lua`-Datei öffnet sich von selbst in Lua). Lua und CraftScript teilen sich dieselben Variablen und dieselben eingebauten Funktionen, sodass ein Lua-Skript nutzen kann, was ein CraftScript-Skript erzeugt hat, und umgekehrt.

## Die Grundlagen

```
-- jede eingebaute Funktion steht in der cs-Tabelle
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-basiert, wie in CraftScript
print(K(1, 1), #K)             -- ein Element; die Anzahl der Elemente

-- der Arbeitsbereich: dieselben Variablen, die jedes Skript sieht
ws.total = K(1, 1) * 2
print(ws.total)

-- mehrere Ergebnisse aus einer Funktion
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` ruft eine beliebige eingebaute Funktion auf und gibt ihr erstes Ergebnis zurück; `cs.call(name, n, …)` gibt `n` Ergebnisse zurück.
- `cs.tensor({1, 2, 3})` erzeugt eine Zeile, `cs.tensor({{1, 2}, {3, 4}})` eine Matrix.
- Arrays, dünnbesetzte Matrizen, Netze und Felder sind Werte mit Methoden: `t(i, j)` oder `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (Transposition), `t:totable()`. `+ - * / ^` bedeuten dasselbe wie in CraftScript (`*` ist das Matrixprodukt); `t:times(u)` multipliziert elementweise.
- Eine Zahl, die ein 1×1-Array ist, kommt als einfache Lua-Zahl an.
- `ws.name` liest und schreibt den gemeinsamen Arbeitsbereich. Globale Variablen, die Ihr Skript zurücklässt, landen am Ende ebenfalls dort.
- `print(…)` schreibt in die Konsole; `cs.show(f)`, `cs.plot(y)` und die anderen Anzeigefunktionen funktionieren wie in CraftScript.

## Die Analysebibliothek aufrufen

Die Funktionen der Analysebibliothek (Registerkarte Bibliothek) und die CraftScript-Funktionen, die die eigenen Skripte Ihres Bauteils definieren, erreichen Sie ebenfalls über `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- zwei Ausgaben
```

Sie werden vor dem Start des Skripts gefunden; schreiben Sie den Namen daher im Skript aus: `cs.static_tet(` oder `cs.call('static_tet', …)`. Ein Name, der erst während des Laufs zusammengesetzt wird, erreicht nur die eingebauten Funktionen. Ein mit `cs.struct({ … })` gebauter Struct ist ein CraftScript-Struct, und eine Lua-Liste aus ihnen (`{ cs.struct(…), … }`) ist eine Zelle, wie sie die Einstellungen der Bibliothek erwarten. Geht etwas in einer Bibliotheksfunktion schief, nennt die Meldung die Funktion und ihre Zeile und verweist auf Ihre Zeile, die sie aufgerufen hat.

## Abgeschaltet

Skripte können weder auf Dateien, das Netzwerk noch auf die Seite zugreifen: `io`, `os` (außer der Uhr), `require`, `dofile`, `loadfile` und `debug` sind entfernt. Verwenden Sie zum Einlesen von Daten die Funktion Öffnen des Skript-Arbeitsbereichs und die Variablen. Das Schrittbudget und Stopp funktionieren wie bei CraftScript.
