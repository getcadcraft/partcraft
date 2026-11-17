---
title: Die CraftScript-Sprache
summary: CraftScript auf einer Seite: Matrizen, Bereiche und Indizierung, Operatoren, Ablaufsteuerung, Funktionen, Structs und Zellen, Kommentare, Echo, Fehler und das Schrittbudget sowie der Unterschied zu MATLAB.
keywords: CraftScript, Sprache, Syntax, Matrix, Array, Vektor, Tensor, Index, end, Doppelpunkt, Bereich, Operator, elementweise, Transposition, if, for, while, switch, try, catch, function, anonyme Funktion, Struct, Zelle, Kommentar, echo, Semikolon, MATLAB, Octave, Portierung
from: d072b7d5
---

CraftScript ist eine Matrixsprache, die sich wie MATLAB liest, sodass die meisten klassischen numerischen Codes (zum Beispiel der 88-Zeilen-Code zur Topologieoptimierung) mit nur kleinen Änderungen laufen. Sie läuft im [Skript-Arbeitsbereich](topic:craftscript) und über die Befehlszeile.

## Werte

| Typ | Beispiel | Hinweise |
|---|---|---|
| Zahl, Array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Jede Zahl ist ein Array (ein 1×1-Array). Arrays werden spaltenweise gespeichert, bis zu 8 Dimensionen |
| Logisch | `A > 2`, `true` | Arrays aus wahr/falsch; als Indizes verwendbar |
| Text | `'beam'`, `"beam"` | |
| Dünnbesetzte Matrix | `sparse(i, j, v, n, n)` | Für Steifigkeitsmatrizen |
| Netz, Feld, Modell | `hexGrid(…)`, `part()`, `load('part.stl')` | Was `show` zeichnet |
| Struct | `s.E = 210e3` | Benannte Felder |
| Zelle | `c = {1, 'two', [3 4]}` | Eine Liste beliebiger Werte |
| Funktionshandle | `f = @(x) x.^2` | |

## Arrays und Indizierung

- Bereiche: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Die Indizierung beginnt bei 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (eine ganze Spalte), `A(:)` (alles als eine Spalte), `v(v > 0)` (logische Indizierung).
- Eine Zuweisung hinter das Ende vergrößert das Array, wie in MATLAB: `v(10) = 1`.

## Operatoren

- `+ - * / \ ^` sind Matrixoperationen (`A \ b` löst); `.* ./ .^` arbeiten elementweise. `'` transponiert.
- Vergleiche `== ~= < <= > >=`; Logik `& | ~` (elementweise) und `&& ||` (mit Kurzschluss).

## Ablaufsteuerung und Funktionen

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Funktionen stehen in einem Skript nach seinen Befehlen oder in einer eigenen Registerkarte, die nach der Funktion benannt ist:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ein Name wird in dieser Reihenfolge gesucht: eine Variable, ein Skript in diesem Bauteil mit diesem Namen, eine Bibliotheksfunktion, eine eingebaute Funktion.

## Echo, Kommentare, Ausgabe

- Eine Anweisung ohne `;` gibt ihren Wert aus; `;` hält sie still.
- `%` beginnt einen Kommentar; `%{` und `%}` in eigenen Zeilen setzen die Zeilen dazwischen als Kommentar aus.
- `disp(x)`, `fprintf('%g\n', x)` und `display(x)` schreiben in die Konsole.

## Fehler und Grenzen

- Fehler nennen in einfachen Worten, was schiefging, und geben die Zeile an (und die Kette der Funktionsaufrufe).
- Jeder Lauf hat ein Schrittbudget (Ausführungsoptionen im Bedienfeld); eine endlose Schleife bricht mit einer Meldung ab, oder Sie drücken Stopp.
- Arrays enthalten jeweils bis zu 134 Millionen Werte.

## Anders als MATLAB

- Plot-Befehle übergeben ihre Optionen im Aufruf: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` und ähnliche werden akzeptiert und tun nichts.
- `input` und `keyboard` werden nicht unterstützt: Ein Skript kann nicht anhalten, um eine Frage zu stellen.
- Es gibt keine Toolboxes; vorhanden sind die [Analysebibliothek](topic:craftscript-library) und die eingebauten Funktionen.
