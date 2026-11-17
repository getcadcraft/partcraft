---
title: Posts bearbeiten, die Sie anpassen können
summary: Ein Post ist eine kurze Textdatei, die den Werkzeugweg in G-Code für Ihre Steuerung umwandelt. Kopieren Sie einen der eingebauten Posts, ändern Sie die benötigten Zeilen (Zeilennummern, Werkzeugwechsel, Referenzfahrten, Programmende), sehen Sie beim Tippen den geschriebenen G-Code und bewahren Sie den Post mit dem Bauteil auf.
keywords: Post, Post-Prozessor, Postprozessor, G-Code, NC, GRBL, LinuxCNC, Post bearbeiten, eigener Post, cpost, Werkzeugwechsel, M6, G43, Bearbeitungszyklus, Zeilennummern, modal, Ereignis, Variable
from: 36ab8a38
---

Derselbe Werkzeugweg muss für verschiedene Steuerungen unterschiedlich geschrieben werden: mit oder ohne Zeilennummern, `M6` oder eine Pause, `G28` oder `G53`, `M30` oder `M2`. Ein **Post** ist der kurze Text, der festlegt, wie. Die drei eingebauten Posts von PartCraft (im Fanuc-Stil, GRBL und LinuxCNC) sind in diesem Format geschrieben, daher kann ein eigener Post als Kopie eines dieser Posts beginnen.

Prüfen Sie die Ausgabe im Simulator Ihrer Maschine, bevor Sie schneiden, und fahren Sie das Programm zuerst in der Luft über dem Material ab. Die eingebauten Posts schreiben genau das, was sie vor Einführung dieses Formats geschrieben haben (die Tests vergleichen ihre Ausgabe Byte für Byte bei Hunderten von Programmen). Nichts davon ist jedoch auf Ihrer Maschine nachgewiesen, und einen geänderten Post müssen Sie selbst nachweisen.

## Einen Post erstellen

In der Fertigung unter **Post**:

- {{ui:Post bearbeiten…}} bei einer eingebauten Steuerung öffnet **Ihre eigene Kopie** davon. Bei einem Ihrer eigenen Posts öffnet er diesen Post.
- {{ui:Neuer Post…}} startet mit einem kleinen leeren Post, der jedes Ereignis enthält.
- {{ui:Postdatei importieren…}} liest eine `.cpost`-Textdatei (die Datei, die Sie im Editor über **Als Datei speichern…** erhalten).

Der Editor zeigt den Text, eine Zeile, die angibt, ob er gelesen werden kann (und welche Zeile fehlerhaft ist), sowie den G-Code, den der Post schreibt, während Sie tippen. **Vorschau mit** wählt ein kleines Beispielprogramm, das jedes Ereignis durchläuft, oder das eigene Programm dieses Bauteils. {{ui:Speichern}} bewahrt den Post in der Datei des Bauteils auf (bis zu 20 Posts) und wählt ihn als Steuerung aus. Posts reisen mit dem Bauteil; um einen Post in einem anderen Bauteil zu verwenden, speichern Sie ihn als Datei und importieren Sie ihn dort.

## Wie ein Post aussieht

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Zeilen, die mit `//` beginnen, und leere Zeilen werden ignoriert. Oben stehen die Einstellungen; danach folgt für jedes Ereignis ein Block `on <event>`, abgeschlossen mit `end`. Ein weggelassenes Ereignis schreibt nichts.

| Einstellung | Bedeutung |
|---|---|
| `post <id>` | Die ID des Posts: Buchstaben, Ziffern, `-` und `_` |
| `name <text>` | Was die Steuerungsliste anzeigt |
| `extension <ext>` | Die Dateiendung: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … in jeder `emit`-Zeile, oder keine |
| `decimal-point yes` / `no` | `10.` statt `10` (Kommentare tragen nie den Punkt) |
| `canned-cycles yes` / `no` | `no`: Bohrungen werden als G0/G1-Bewegungen geschrieben, für die sie stehen |
| `modal <group> <words>` | Wörter einer Gruppe (`modal motion G0 G1 G2 G3`), die nur geschrieben werden, wenn sie sich ändern |

## Ereignisse

Sie laufen für ein Programm in dieser Reihenfolge ab: `start`; dann für jede Operation `operation`, `tool-change` (wenn sich das Werkzeug ändert), `spindle` (wenn sich die Drehzahl ändert), `approach` (die Bewegung zum ersten Punkt, vor dem ersten Eilgang), `coolant-on`, danach ihre Bewegungen als `rapid`, `feed` und `arc`, und jeder Bearbeitungszyklus als `cycle-start`, ein `cycle-hole` je Bohrung und `cycle-end`; zuletzt `end`.

Jedes Ereignis kann die Variablen seiner eigenen Bewegungsart verwenden, geschrieben als `{name}`: das Programm (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), das Rohteil (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), das Werkzeug (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), die Operation (`op.name`, `op.type`), `rpm`, den Punkt einer Bewegung (`x`, `y`, `z`, `f` und `moved`: wahr, wenn sich eine Achse geändert hat), Bögen (`arc.g` 2 oder 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) und Bohrungen (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Die Liste **Ereignisse und Variablen** im Editor zeigt, welches Ereignis was sieht. Zustand, den Sie lesen und setzen können: `cool`, `offset` sowie `at.x`, `at.y`, `at.z`, `at.f` (die zuletzt geschriebenen Werte).

## Anweisungen

| Anweisung | Wirkung |
|---|---|
| `raw TEXT` | Eine Zeile genau wie eingegeben (ohne Zeilennummer) |
| `comment TEXT` | `(TEXT)`, wobei Nicht-ASCII-Zeichen und Klammern entfernt werden |
| `emit WORD WORD …` | Eine Zeile aus Wörtern; Wörter, die leer ausfallen, werden weggelassen; ohne Wörter keine Zeile |
| `word WORD …` | Wörter zur gerade aufgebauten Zeile hinzufügen; ein blankes `emit` beendet sie |
| `if EXPR` … `else` … `end` | Bedingungen: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sonst b) |
| `for tool in tools` … `end` | Einmal für jedes Werkzeug, das das Programm verwendet |
| `set NAME EXPR` | Einen Wert merken (`set offset tool.number`) |
| `reset NAME …` | Modale Wörter vergessen (eine Gruppe, ein Adressbuchstabe wie `Z` oder `at.z`) |
| `do rapid X Y Z` | Das Ereignis `rapid` für einen Punkt ausführen |

Ein Wort ist Text mit `{variable|filter}`-Platzhaltern. Die Filter sind `upper`, `lower`, `pad:N` (mit Nullen auffüllen), `cut:N` (die ersten N Zeichen), `safe` (kommentarsicheres ASCII) und `int`. Ein Wort, das auf `~` endet, ist **modal**: Es wird nur geschrieben, wenn es sich von dem zuletzt geschriebenen unterscheidet (`G1~`, `X{x}~`). Ein Wort, das auf `~!` endet, wird jedes Mal geschrieben und trotzdem gemerkt. Ein Name, der keine Variable ist, ist einfacher Text (`G81`, `mist`). Zahlen werden auf 0.001 mm gerundet und ohne nachgestellte Nullen geschrieben.

## Was ein Post nicht kann

Er bestimmt nur, wie die Bewegungen geschrieben werden, nichts weiter. Er kann keinen Werkzeugweg ändern, Operationen nicht umordnen, keinen Bogen teilen, keine Achse hinzufügen, die Verfahrwege oder die Kinematik Ihrer Maschine nicht kennen und keine Rechnung mit Koordinaten ausführen (es gibt kein `+`). Antasten, Zyklen für Werkzeugstandzeit und Unterprogramme, Ausgaben für die 4. und 5. Achse sowie Drehcodes sind nicht umgesetzt. Eine `.cps`-artige Postdatei eines anderen Programms lässt sich nicht laden: Dies ist ein anderes, einfacheres Format.
