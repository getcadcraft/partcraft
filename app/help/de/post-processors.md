---
title: Postprozessoren, die Sie bearbeiten können
summary: Ein Post ist eine kurze Textdatei, die die Werkzeugwege in G-Code für Ihre Steuerung umwandelt. Kopieren Sie einen der eingebauten Posts, ändern Sie die Zeilen, die Sie brauchen (Zeilennummern, Werkzeugwechsel, Referenzfahrten, Programmende), sehen Sie beim Tippen den G-Code, den er schreibt, und bewahren Sie ihn beim Bauteil auf.
keywords: Post, Postprozessor, G-Code, NC, GRBL, LinuxCNC, Post bearbeiten, eigener Post, cpost, Werkzeugwechsel, M6, G43, Festzyklus, Zeilennummern, modal, Ereignis, Variable
from: c78d0cae
---

Derselbe Werkzeugweg muss für verschiedene Steuerungen unterschiedlich geschrieben werden: mit oder ohne Zeilennummern, `M6` oder eine Pause, `G28` oder `G53`, `M30` oder `M2`. Ein **Post** ist der kurze Text, der festlegt, wie. Die drei eingebauten Posts von PartCraft (Fanuc-artig, GRBL und LinuxCNC) sind in diesem Format geschrieben, sodass ein eigener Post als Kopie eines dieser Posts beginnen kann.

Prüfen Sie die Ausgabe im Simulator Ihrer Maschine, bevor Sie schneiden, und lassen Sie das Programm zuerst in der Luft über dem Rohteil laufen. Die eingebauten Posts schreiben genau das, was sie vor dem Entstehen dieses Formats geschrieben haben (die Tests vergleichen ihre Ausgabe Byte für Byte bei Hunderten Programmen), aber nichts hier wurde auf Ihrer Maschine nachgewiesen, und einen Post, den Sie ändern, müssen Sie selbst nachweisen.

## Einen Post erstellen

In Fertigung, unter **Post**:

- {{ui:Edit post…}} auf einer eingebauten Steuerung öffnet **Ihre eigene Kopie** davon. Auf einem Ihrer eigenen Posts öffnet es diesen Post.
- {{ui:New post…}} beginnt mit einem kleinen leeren Post, der jedes Ereignis enthält.
- {{ui:Import post file…}} liest eine `.cpost`-Textdatei (die Datei, die Sie über **Als Datei speichern…** im Editor erhalten).

Der Editor zeigt den Text, eine Zeile, die sagt, ob er gelesen werden kann (und welche Zeile falsch ist), und den G-Code, den der Post schreibt, während Sie tippen. **Vorschau mit** wählt ein kleines Beispielprogramm, das jedes Ereignis durchläuft, oder das eigene Programm dieses Bauteils. {{ui:Save}} behält den Post in der Datei des Bauteils (bis zu 20 Posts) und wählt ihn als Steuerung. Posts reisen mit dem Bauteil; um einen in einem anderen Bauteil zu verwenden, speichern Sie ihn als Datei und importieren Sie sie dort.

## So sieht ein Post aus

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

Zeilen, die mit `//` beginnen, und leere Zeilen werden ignoriert. Oben stehen die Einstellungen; danach folgt für jedes Ereignis ein Block `on <event>`, der mit `end` abgeschlossen wird. Ein Ereignis, das Sie weglassen, schreibt nichts.

| Einstellung | Bedeutung |
|---|---|
| `post <id>` | Die Kennung des Posts: Buchstaben, Ziffern, `-` und `_` |
| `name <text>` | Was die Steuerungsliste zeigt |
| `extension <ext>` | Die Dateiendung: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … in jeder `emit`-Zeile, oder keine |
| `decimal-point yes` / `no` | `10.` statt `10` (Kommentare tragen nie den Punkt) |
| `canned-cycles yes` / `no` | `no`: Löcher werden als die G0/G1-Bewegungen geschrieben, für die sie stehen |
| `modal <group> <words>` | Wörter einer Gruppe (`modal motion G0 G1 G2 G3`), die nur geschrieben werden, wenn sie sich ändern |

## Ereignisse

Sie laufen für ein Programm in dieser Reihenfolge ab: `start`; dann für jede Operation `operation`, `tool-change` (wenn sich das Werkzeug ändert), `spindle` (wenn sich die Drehzahl ändert), `approach` (die Bewegung zum ersten Punkt, vor dem ersten Eilgang), `coolant-on`, dann ihre Bewegungen als `rapid`, `feed` und `arc`, und jeder Festzyklus als `cycle-start`, ein `cycle-hole` je Loch und `cycle-end`; zuletzt `end`.

Weitere Ereignisse, für alles, was über drei Achsen hinausgeht (ein Post ohne das Ereignis lehnt ein solches Programm ab und nennt das Ereignis, das ihm fehlt):

| Ereignis | Wann | Seine Variablen |
|---|---|---|
| `index` | Vor einer Operation, deren Werkzeugrichtung sich von der letzten unterscheidet, und vor der ersten Operation auf einer Maschine mit Drehachsen | `rot.a`, `rot.b`, `rot.c` (die Positionen, zu denen gefahren wird; leer für eine Achse, die die Maschine nicht hat), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Die Bewegungen einer Operation, deren Drehachsen sich beim Schneiden bewegen | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ja, wenn der Vorschub invers zur Zeit sein muss), `invf` (1/Minuten) |
| `rotary-end` | Nach einer solchen Operation | |
| `probe-move` | Eine Bewegung, die anhält, wenn der Messtaster auslöst | `x`, `y`, `z`, `f`, `probe.n` (1 bis 4), `probe.axis` (x, y oder z), `probe.k` (1, 2 oder 3) |
| `probe-set` | Nach den Antastungen eines Messzyklus | `probe.kind` (`"z"`, `"x"`, `"y"` oder `centre`), `probe.action` (`set` oder `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Eine Gewindebewegung auf einer Drehmaschine | `x`, `z`, `thread.lead` |

Ebenfalls für jedes Ereignis: `kin` (none, a, b, ac, bc), `rotary` und `tcp` (yes oder no, von der Maschine in der Aufspannung), `pivot.x`, `pivot.y`, `pivot.z`, die `op.tilt` und `op.turn` der Operation, und auf einer Drehmaschine `spin.mode` (css oder rpm), `spin.css`, `spin.max` und `tool.nose`. Ein Buchstabenwort, dessen Wert leer ist, etwa `A{rot.a}` auf einer Maschine ohne A-Achse, wird aus der Zeile weggelassen. Vergleichen Sie x, y und z als Text in Anführungszeichen (`if probe.kind == "z"`): Ohne sie sind es die Koordinaten der Bewegung.

Zwei weitere Zeilen oben im Post machen ihn zu einem Drehmaschinen-Post: `machine lathe` (er schreibt dann nur X und Z und lehnt Fräswege ab, wie ein Fräs-Post Drehwege ablehnt) und `lathe-x diameter` oder `lathe-x radius`.

Jedes Ereignis kann die Variablen seiner eigenen Art von Bewegung verwenden, geschrieben `{name}`: das Programm (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), das Rohteil (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), das Werkzeug (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), die Operation (`op.name`, `op.type`), `rpm`, der Punkt einer Bewegung (`x`, `y`, `z`, `f`, und `moved`: wahr, wenn sich eine Achse geändert hat), Bögen (`arc.g` 2 oder 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) und Löcher (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Die Liste **Ereignisse und Variablen** des Editors zeigt, welches Ereignis was sieht. Zustände, die Sie lesen und setzen können: `cool`, `offset`, sowie `at.x`, `at.y`, `at.z`, `at.f` (die zuletzt geschriebenen Werte).

## Anweisungen

| Anweisung | Was sie tut |
|---|---|
| `raw TEXT` | Eine Zeile genau wie geschrieben (ohne Zeilennummer) |
| `comment TEXT` | `(TEXT)`, wobei Nicht-ASCII-Zeichen und Klammern entfernt werden |
| `emit WORD WORD …` | Eine Zeile aus Wörtern; Wörter, die leer werden, werden weggelassen; keine Wörter, keine Zeile |
| `word WORD …` | Wörter zur gerade aufgebauten Zeile hinzufügen; ein blankes `emit` beendet sie |
| `if EXPR` … `else` … `end` | Bedingungen: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sonst b) |
| `for tool in tools` … `end` | Einmal für jedes Werkzeug, das das Programm verwendet |
| `set NAME EXPR` | Einen Wert merken (`set offset tool.number`) |
| `reset NAME …` | Modale Wörter vergessen (eine Gruppe, einen Adressbuchstaben wie `Z`, oder `at.z`) |
| `do rapid X Y Z` | Das `rapid`-Ereignis für einen Punkt ausführen |

Ein Wort ist getippter Text mit `{variable|filter}`-Lücken. Die Filter sind `upper`, `lower`, `pad:N` (mit Nullen auffüllen), `cut:N` (die ersten N Zeichen), `safe` (kommentarsicheres ASCII) und `int`. Ein Wort, das mit `~` endet, ist **modal**: Es wird nur geschrieben, wenn es sich von dem unterscheidet, was zuletzt geschrieben wurde (`G1~`, `X{x}~`). Ein Wort, das mit `~!` endet, wird jedes Mal geschrieben und trotzdem gemerkt. Ein Name, der keine Variable ist, ist einfacher Text (`G81`, `mist`). Zahlen werden auf 0.001 mm gerundet und ohne nachgestellte Nullen geschrieben.

## Was ein Post nicht kann

Er entscheidet nur, wie die Bewegungen geschrieben werden, nichts weiter. Er kann keinen Werkzeugweg ändern, Operationen umordnen, einen Bogen teilen, eine Achse hinzufügen, den Verfahrweg oder die Kinematik Ihrer Maschine kennen oder Rechnungen mit Koordinaten machen (es gibt kein `+`). Die Drehpositionen selbst kommen von der Maschine, die in der Aufspannung beschrieben ist, nicht vom Post: Ein Post kann deren Vorzeichen oder Buchstaben ändern, nicht die Kinematik. Standzeit- und Unterprogrammzyklen sind nicht umgesetzt. Eine `.cps`-artige Postdatei eines anderen Programms kann nicht geladen werden: Dies ist ein anderes, einfacheres Format.
