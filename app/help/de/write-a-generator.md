---
title: Generator schreiben
summary: Ein Generator ist ein CraftScript-, Lua- oder Python-Skript mit Kommentarzeilen, die seine Eingaben festlegen. Wie die Eingaben zu einem Formular werden, was das Skript am Ende hinterlassen muss (body, sheet, problems), ein kleines vollständiges Beispiel und wie Sie Ihr Skript als Generator öffnen.
keywords: Generator, schreiben, Skript, CraftScript, Kopfzeile, Eingabe, @input, @generator, body, sheet, problems, to_body, mfg_check, Datenblatt, Beispiel, Gitter, Feld
from: ed8a5ed8
---

Ein Generator ist ein gewöhnliches Skript ([CraftScript](topic:craftscript), Lua oder Python) mit einigen Kommentarzeilen am Anfang. PartCraft liest die Kommentare und erstellt daraus das Formular; Ihr Skript liest die Eingaben als Variablen, die bereits gesetzt sind.

## Die Kopfzeile

Setzen Sie diese Zeilen als Kommentare (`%` in CraftScript, `--` in Lua, `#` in Python):

```
% @generator Wärmetauscher
% @input mdot: kg/s = 0.2 [0.01 .. 10] "Massenstrom"
% @input kind: = gyroid {gyroid, schwarzp, diamond} "Oberfläche"
% @input solid: = true
% @input note: = "text"
```

Eine Eingabe besteht aus `Name: Einheit = Vorgabe`, optional gefolgt von einem Bereich `[min .. max]` (Zahlen werden darin gehalten), einer Auswahlliste `{a, b, c}` und einer Bezeichnung in Anführungszeichen. Die Einheit dient nur als Anzeige im Formular: **der Wert kommt in dieser Einheit an**, daher rechnet ein Skript, das SI-Einheiten braucht, selbst um. `to_si(value, 'kg/s', 'kg/s')` prüft außerdem, ob die Einheit tatsächlich das bedeutet, was Sie annehmen. Ein Name besteht aus Buchstaben, Ziffern und Unterstrich; `body`, `sheet` und `problems` sind reserviert.

## Was das Skript hinterlässt

| Variable | Inhalt |
|---|---|
| `body` | **Erforderlich.** Ein Oberflächennetz, meist aus `[body, info] = to_body(field, h)`. Es wird am Ende des Laufs repariert und geprüft. |
| `sheet` | Optional. Eine Struktur: jedes Feld ist eine Zahl oder ein Text oder eine Struktur mit `value`, `unit`, `ref` und `note`. Sie wird zum Datenblatt. |
| `problems` | Optional. Die Zelle `problems` aus `mfg_check(field, 'sls', struct(), h)` oder Ihre eigenen Einträge. Sie gehen an die Prüfungen und in die Problemliste. |

## Ein vollständiges kleines Beispiel

```
% Ein hohler Würfel mit einer Wand.
% @generator Hohler Würfel
% @input side: mm = 12 [4 .. 40] "Seite"
% @input wall: mm = 1.5 [0.5 .. 5] "Wand"
% @input h: mm = 0.5 [0.25 .. 2] "Voxelgröße"
f = field_subtract(field_box([0 0 0], [side/2 side/2 side/2]), ...
                   field_box([0 0 0], [side/2-wall side/2-wall side/2-wall]));
fb = field_bake(f, h);
[body, info] = to_body(fb, h);
chk = mfg_check(fb, 'sls', struct(), h);
problems = chk.problems;
sheet = struct();
sheet.volume = struct('value', info.volume, 'unit', 'mm3', 'ref', 'des Netzes');
```

Es entsteht ein geschlossener Würfel, und die Prüfung meldet seinen abgeschlossenen Innenraum als Fehler für ein Pulververfahren. Machen Sie die Voxelgröße `h` höchstens ein Drittel der dünnsten Wand, die Sie vorsehen: Unterhalb von etwa drei Voxeln ist eine Wand nicht zuverlässig.

## Felder

`field_sphere`, `field_box`, `field_capsule`, `field_cylinder`, `field_torus`, `field_revolve` (ein Rotationskörper aus einem Profil), `tpms` (Gyroid-, Schwarz-P- und Diamantflächen, mit einer Zellgröße und einer Wandstärke, die sich über das Bauteil ändern können), `lattice` und `lattice_beams`, `along` (ein runder Kanal entlang eines Pfads), die booleschen Operationen `field_union`, `field_intersect`, `field_subtract`, das glatte `field_blend` sowie `field_offset`, `field_shell`, `field_move`, `field_rotate`, `field_scale`. `sample(f, points)` liefert den vorzeichenbehafteten Abstand an Punkten (negativ innen), `field_voxel` liefert Voxel für die Löser. [Felder](topic:fields) erklärt, was sie sind.

Grenzen, die Sie kennen sollten: Eine Schalenwand, die dicker als etwa ein Viertel der Zelle ist, verschließt die Kanäle; ein Merkmal, das dünner als etwa drei Voxel ist, kann sich verengen; `along` verbindet runde Kegel, daher hinterlässt ein sich schnell änderndes Radius eine Ausbuchtung (verwenden Sie für ein Profil `field_revolve`).

## Ihr Skript als Generator öffnen

Klicken Sie im Arbeitsbereich {{ui:Engineer}} auf {{ui:Open}} und wählen Sie die Datei. Ein Skript ohne Zeile `@generator` oder `@input` wird abgelehnt: Es gäbe dann nichts einzustellen. Der Generator wird in diesem Browser gespeichert (bis zu 20), und {{ui:Remove}} löscht ihn. Ein daraus gestarteter Körper enthält eine Kopie des Skripts, sodass das Bauteil nicht von der Datei abhängt.

Eine Datei kann auch mehrere Generatoren enthalten: ein JSON-Bündel `{"format": "cadcraft-generators", "version": 1, "generators": [{"title": "…", "text": "…"}]}`.
