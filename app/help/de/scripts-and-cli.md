---
title: Skripte und die Kommandozeile
summary: Das PartCraft-Skriptformat (.pcscript), das ein ganzes Bauteil als lesbaren Text schreibt, und das Kommandozeilenwerkzeug partcraft, das Bauteile ohne Bildschirm erstellt, ändert, zurücksetzt und prüft.
keywords: Skript, pcscript, Text, Kommandozeile, cli, Terminal, Stapel, automatisieren, prüfen, lint, erstellen, exportieren, Versionskontrolle, diff, parametrisches Skript
from: c56df222
---

Sorgfältiges Modellieren ist mehr eine Frage der Disziplin als der Schaltflächen. Ein als Text geschriebenes Bauteil lässt sich lesen, prüfen, Zeile für Zeile vergleichen und durch ein Skript neu erstellen. PartCraft funktioniert in beide Richtungen: Jedes Bauteil kann als Skript geschrieben werden, und ein Skript erstellt das Bauteil.

## In der App

Im Reiter {{ui:Parameter}} unter **Skript**:

- {{ui:Als Skript speichern}} lädt das geöffnete Bauteil als `<name>.pcscript` herunter.
- {{ui:Skript öffnen}} erstellt ein Bauteil aus einer `.pcscript`-Datei. Ein Fehler wird mit seiner Zeilennummer gemeldet, und nichts wird ersetzt.

## Das Skriptformat

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Die Regeln:

- Eine Zeile am linken Rand beginnt eine Anweisung: `pcscript`, `part`, `param`, ein Feature-Typ (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` und die neueren Typen), gefolgt von seinem Namen, oder `rollback <feature>`.
- Eingerückte Zeilen sind die Einstellungen der Anweisung darüber. Eine Einstellung allein (`through`, `reverse`, `suppressed`) bedeutet ja.
- Eine Zahleneinstellung ist eine Zahl oder `=` mit einem Ausdruck, der eine Gleichung ergibt: `depth = thick`.
- In einer Skizze benennt `on` die Ebene (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`). Geometrie wird geschrieben als `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (gegen den Uhrzeigersinn) oder `spline <name> fit|control <points>`. Abhängigkeiten bestehen aus ihrem Typ und den Namen, die sie verbinden (`O` ist der Ursprung). Eine Bemaßung endet mit ihrem Wert oder `= expression`.
- Optionale Einstellungen einer Geometrie- oder Abhängigkeitszeile stehen am Ende in eckigen Klammern, getrennt durch `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` beginnt einen Kommentar (am Zeilenanfang oder nach einem Leerzeichen). Namen mit Leerzeichen stehen in "doppelten Anführungszeichen".
- Feature-IDs zählen ab f1 in der geschriebenen Reihenfolge. Kanten- und Flächenverweise verwenden sie, zum Beispiel `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Einstellungen, für die das Format keine Wörter hat, werden als `json` und ein Wert geschrieben; sie werden unverändert zurückgelesen.

Aus der App gespeichert enthält das Skript jede Einstellung, sodass es als dasselbe Bauteil geöffnet wird. Ein importierter STEP-Volumenkörper wird aus der App im Skript geschrieben und über die Kommandozeile als eigene `.step`-Datei, benannt durch `step-file`.

## Das Kommandozeilenwerkzeug

Das Werkzeug läuft auf einem Computer mit Node.js 24, aus einer Kopie des CadCraft-Quellcodes: `node tools/partcraft-cli/partcraft.mjs <command>`. Es ist ein Entwicklerwerkzeug und nutzt dieselben Module wie die App. Bauteile sind `.partcraft.json`-Dateien oder `.pcscript`-Skripte.

| Befehl | Was er tut |
|---|---|
| `info <part>` | Features, Parameter, Rücksetzleiste, Volumen und Größe des erzeugten Volumenkörpers |
| `params <part>` | Jeder Parameter und jede Gleichung mit ihrem Wert |
| `set <part> width=150 Base.depth==thick` | Vorwärts: Parameter ändern, Zahlen verknüpfen (`==` oder ein Ausdruck), einfache Zahlen setzen |
| `drive <part> Base.depth=12` | Rückwärts: den Parameter lösen, der hinter einer angetriebenen Zahl steht (`--prefer width` wählt einen aus) |
| `build <part> --out x.step` | Schreibt `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` oder ein Makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Eine Datei pro Zeile der Konstruktionstabelle |
| `variants <part> --out-dir d` oder `--zip f.zip` | Jede Konfiguration als STEP, IFC, DWG und Vorschau, eine Variantentabelle und ein Bibliothekselement (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); siehe [Variantenpaket erstellen](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript zu Bauteil |
| `to-script <part> -o part.pcscript` | Bauteil zu Skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Die Rücksetzleiste in der Datei verschieben |
| `check <part> [--strict]` | Die Disziplinprüfung (unten) |

`build` nimmt außerdem `--set name=value` (nur für diesen Build) und `--upto <feature>` entgegen. Jeder Befehl akzeptiert `--json`. Rückgabecodes: 0 in Ordnung, 1 ein Problem wurde gefunden, 2 der Befehl wurde falsch getippt. Ein Skript wird nie an Ort und Stelle umgeschrieben: Geben Sie `-o` an, um eine geänderte Kopie zu speichern.

## Die Prüfung

`check` meldet, was ein Bauteil später schwer änderbar macht:

| Befund | Zählt als |
|---|---|
| Eine Skizze, die überbestimmt ist (widersprüchliche oder doppelte Abhängigkeiten) | Fehler |
| Ein Feature, das sich nicht erstellen lässt | Fehler |
| Ein Parameter oder eine Gleichung mit einem Fehler, oder Parameter, die sich gegenseitig verwenden | Fehler |
| Eine Skizze, die unterbestimmt ist, mit ihren Freiheitsgraden | Warnung |
| In Features und Bemaßungen eingetippte Zahlen, die kein Parameter steuert | Warnung |
| Ein Parameter, den nichts verwendet | Warnung |
| Ein unterdrücktes Feature; die Rücksetzleiste nicht am Ende | Warnung |

`--strict` macht jede Warnung zu einem Fehler, sodass ein Build-Skript ein Bauteil ablehnen kann, das nicht vollständig gesteuert ist.

:::note
Die `.swb`-Makroausgabe ist für das Modellierungsprogramm gedacht, das die meisten Werkstätten nutzen: Innerhalb dieses Programms ausgeführt, erstellt sie dort das Bauteil. Sie wurde hier nicht in diesem Programm ausgeführt (es ist auf unseren Servern nicht verfügbar), behandeln Sie sie daher als ungetestet.
:::
