---
title: Skripte schreiben und ausführen (Skript-Arbeitsbereich)
summary: Der Skript-Arbeitsbereich Schritt für Schritt: ein CraftScript- oder Lua-Skript schreiben, mit F5 ausführen, die Konsole lesen, Ergebnisse in den Variablen für das nächste Skript behalten, Netze, Felder und Plots zeigen, einen Lauf stoppen und Skripte mit dem Bauteil speichern.
keywords: Skript, Skripting, Skript beim Modellieren, auslagern, zweiter Bildschirm, zweiter Monitor, param, params, Parameter in Skripten, CraftScript, Lua, Code, Programm, Editor, Konsole, REPL, Befehlszeile, ausführen, F5, Auswahl ausführen, stoppen, Variablen, Arbeitsbereich, Plot, Feld, Netz, Legende, Nebenanzeige, Analyse, Automatisierung, Matrix, numerisch
from: d0003e89
---

**Vorschau.** Skripting ist neu in PartCraft 0.3 und befindet sich in der Vorschau: Sprache, Bibliothek und die Art, wie Skripte gespeichert werden, können sich noch ändern, und heute geschriebene Skripte brauchen später vielleicht kleine Anpassungen. Teilen Sie uns mit, was nicht mehr funktioniert.

Der Skript-Arbeitsbereich führt Ihre eigenen Berechnungen neben dem Bauteil aus: kleine Summen, ganze Analysen oder die Skripte der [Analysebibliothek](topic:craftscript-library). Skripte werden in **CraftScript** geschrieben (eine Matrixsprache, MATLAB sehr ähnlich, siehe [Die CraftScript-Sprache](topic:craftscript-language)), in **Lua** (siehe [Skripte in Lua](topic:craftscript-lua)) oder in **Python** (siehe [Skripte in Python](topic:craftscript-python)).

Wählen Sie **Skript** im Feld **Arbeitsbereich** links in der Symbolleiste. Das Bauteil wird nicht verändert. Das rechte Bedienfeld wird zum Skript-Bedienfeld (breiter als üblich; ziehen Sie an seinem Rand, um es zu ändern, oder verschieben Sie es mit seinem Menü {{ui:⋯}} auf einen zweiten Bildschirm, siehe [Panels anordnen](common:arrange-panels)).

## Skripten während des Modellierens

Sie müssen den Design-Arbeitsbereich nicht verlassen, um ein Skript zu schreiben. Im Design-Arbeitsbereich enthält die Registerkarte {{ui:Skript}} im rechten Bereich denselben Editor, dieselbe Konsole, dieselben Variablen und dieselbe Bibliothek mit denselben Skripten. Der Feature-Baum und die Ansicht arbeiten weiter: Klicken Sie ein Feature an, um es auszuwählen, doppelklicken Sie eine Skizze, um sie zu bearbeiten, drehen Sie die Ansicht, dann kehren Sie zur Registerkarte {{ui:Skript}} zurück und drücken {{key:F5}}.

Was ein Skript **zeigt** (Netze, Felder, Plots, Tabellen), wird im Design nicht über Ihr Modell gezeichnet: Die Konsole sagt das, und der Skript-Arbeitsbereich zeigt alles, sobald Sie dorthin wechseln.

{{ui:Auslagern}} neben {{ui:Ausführen}} verschiebt das ganze Bedienfeld in ein eigenes Fenster, zum Beispiel auf einen zweiten Bildschirm, sodass Editor und volle Ansicht nebeneinander stehen. {{ui:Zurücklegen}} dockt es wieder an. Siehe [Panels anordnen](common:arrange-panels).

## Das erste Skript ausführen

1. Tippen Sie im Editor zum Beispiel:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Eine Sinuskurve')
   disp(max(y))
   ```

2. Drücken Sie {{key:F5}} (oder {{ui:Ausführen}}). Die Konsole unter dem Editor zeigt, was das Skript ausgegeben hat, und „Fertig in … s“. Der Plot erscheint in den **Nebenanzeigen** unten entlang der 3D-Ansicht.
3. Eine Zeile ohne Semikolon gibt ihren Wert aus, wie in MATLAB: `a = 3` gibt `a = 3` aus; `a = 3;` gibt nichts aus.
4. Um nur einen Teil eines Skripts auszuführen, wählen Sie die Zeilen aus und drücken {{key:Mod+Enter}} ({{ui:Auswahl}}). Ist nichts ausgewählt, läuft die Zeile, auf der der Cursor steht.
5. Die Zeile unten in der Konsole (nach `>>`) führt eine Anweisung aus, sobald Sie {{key:Enter}} drücken. {{key:Up}} und {{key:Down}} holen frühere Zeilen zurück.

## Suchen, einklappen und ergänzen

- **Suchen und ersetzen.** Drücken Sie {{key:Mod+F}} (oder {{key:Mod+H}}, um auch zu ersetzen). Über dem Code öffnet sich eine Leiste: Geben Sie ein, was gesucht werden soll; die Treffer leuchten auf, und die Anzahl zeigt Ihre Position an. Die Schaltflächen neben dem Feld beachten Groß- und Kleinschreibung (**Aa**), finden nur ganze Wörter (**W**) und nutzen einen regulären Ausdruck (**.\***; im Ersetzungstext stellt `$1` wieder her, was die erste Gruppe erfasst hat). {{ui:Ersetzen}} ersetzt den aktuellen Treffer, {{ui:Alle}} ersetzt alle Treffer als einen Schritt von {{key:Mod+Z}}.
- **Einklappen.** Klicken Sie auf das ▾ neben einer Zeilennummer oder drücken Sie {{key:Mod+Shift+[}}, wenn der Cursor auf einer Zeile `function`, `if`, `for`, `while`, `switch` oder `try` steht (Lua: `function`, `do`, `if`, `repeat`), um deren innere Zeilen einzuklappen; die Zeile zeigt an, wie viele es sind. ▸ oder {{key:Mod+Shift+]}} klappt sie wieder auf. Einklappen blendet nur Zeilen aus: Ausführen, Speichern, Kopieren und die Zeilennummern zählen weiterhin jede Zeile, und Tippen in einer eingeklappten Zeile klappt sie zuerst auf.
- **Vervollständigung.** Tippen Sie zwei Buchstaben eines Namens oder drücken Sie {{key:Mod+Space}}: Eine Liste zeigt Ihre Variablen, die Funktionen der Sprache (mit ihren Argumenten), Schlüsselwörter und bereits im Skript vorkommende Namen. Wählen Sie mit den Pfeiltasten und drücken Sie {{key:Enter}} oder {{key:Tab}}.

## Wenn etwas schiefgeht

- Ein Fehler nennt das Problem und seine Zeile: Die Zeile ist im Editor rot markiert, und **Zeile n** in der Konsole bringt Sie dorthin.
- Eine Schleife, die nie endet: Drücken Sie {{ui:Stopp}} (Symbolleiste oder Bedienfeld). Das Skript hält sofort an; die Variablen behalten die Werte, die sie vor diesem Lauf hatten.
- Jeder Lauf hat außerdem ein Schrittbudget (standardmäßig 2 Milliarden Schritte; ändern Sie es unter **Ausführungsoptionen** im Bedienfeld). Ein Lauf, der es überschreitet, bricht mit einer Meldung ab.

## Variablen bleiben von Skript zu Skript erhalten

Jede Variable auf oberster Ebene, die ein Skript erzeugt, landet in der Registerkarte **Variablen** (Name, Typ, Größe, kleinster und größter Wert) und bleibt dort für das nächste Skript, in beiden Sprachen. So vernetzt das eine Skript, das nächste löst, und ein drittes stellt Plots dar.

- Klicken Sie eine Variable an, um sie anzuzeigen: Netze, Felder und Modelle in der 3D-Ansicht, Arrays als Tabelle (dazu ein Liniendiagramm für einen Vektor oder eine Farbkarte für eine Matrix) in den Nebenanzeigen.
- {{ui:Als JSON speichern}}, {{ui:Als CSV speichern}} (eine Zahlentabelle) und {{ui:Als HDF5 speichern}} laden sie herunter; {{ui:Löschen}} entfernt sie; {{ui:Alles leeren}} leert den Arbeitsbereich.
- Setzen Sie den Haken bei **Variablen mit dem Bauteil speichern**, um sie in der Bauteildatei zu behalten (bis zu 32 MB; größere bleiben nur für diesen Besuch erhalten). Wenn Sie ein solches Bauteil öffnen, bietet das Bedienfeld an, sie zu laden.

## Netze, Felder und Plots

- `show(m)` zeichnet ein Netz; `show(f)` färbt ein Feld auf seinem Netz mit einer Legende ein. Die Liste **Angezeigt** oben links in der Ansicht blendet jedes Element aus ({{ui:Auge}}) oder entfernt es, und blendet das Bauteil selbst ein oder aus. Unter der Legende geben Sie einen Bereich ein (**Von**, **bis**) oder drücken {{ui:Auto}}; ein Vektor- oder Spannungsfeld bietet außerdem an, welche Komponente angezeigt wird.
- `show(f, 'deform', u, 'scale', 50)` zeichnet das Netz, verschoben um ein Verschiebungsfeld `u` und 50-fach vergrößert (ohne `scale` etwa 8 % der Modellgröße).
- Klicken Sie auf ein angezeigtes Netz: der nächste Knoten, das Element und die Feldwerte dort erscheinen in den Nebenanzeigen (**Gewählt**).
- `plot`, `imagesc` und `table` stellen ein Liniendiagramm, eine Farbkarte eines 2-D-Arrays oder eine Tabelle in den Nebenanzeigen dar. Ein Plot mit demselben `'id'` (oder Titel) wie ein früherer ersetzt ihn, sodass eine Schleife einen Konvergenzplot aktualisieren kann; `'append', true` fügt ihm eine Kurve hinzu. {{ui:Leeren}} leert die Nebenanzeigen; der Pfeil klappt sie ein.
- Bei zwei oder mehr Plots zeigt {{ui:Nebeneinander}} alle gleichzeitig (die neuesten sechs); ein Klick auf die Registerkarte einer Tabelle oder eines Bildes zeigt wieder nur diese eine an.
- Unter jedem Plot stehen {{ui:PNG}}, {{ui:SVG}} und {{ui:CSV}}. PNG und SVG erzeugen ihn auf Weiß in den Papierfarben, unabhängig vom Farbschema (PNG 1600 × 1000 Pixel; SVG skaliert ohne Unschärfe); CSV enthält seine Zahlen mit allen Stellen: eine Spalte für x und eine Spalte je Kurve, wenn die Kurven dasselbe x teilen, sonst eine Zeile je Punkt mit dem Namen der Kurve.
- {{key:F}} oder {{ui:Einpassen}} passt die Ansicht an das an, was angezeigt wird.

## Dateien

- {{ui:Öffnen}} in der Gruppe Skript (oder Dateien auf die Ansicht oder das Bedienfeld ziehen): Dateien `.craft`, `.lua` und `.py` öffnen sich als neue Skripte (sie laufen nicht); Datendateien (STL, OBJ, CSV, JSON, NPY, HDF5) werden unter ihrem Dateinamen in die Variablen geladen.
- {{ui:Speichern}} in der Gruppe Skript lädt das aktuelle Skript als Datei herunter.
- {{ui:Neu}} in der Gruppe Skript (oder {{ui:+}} neben den Registerkarten) startet ein weiteres Skript. Doppelklicken Sie auf eine Registerkarte, um sie umzubenennen; ihr {{ui:×}} entfernt sie (das können Sie rückgängig machen).

## Die Parameter des Bauteils lesen

Ein Skript liest die Parameter des Bauteils (siehe [Ein Bauteil über Parameter steuern](topic:parameters)) über ihren Namen:

```
w = param('width');     % der Wert eines Parameters, in mm (oder Grad oder eine einfache Zahl)
p = params();           % alle, als Struct: p.width, p.height
```

In Lua und Python heißen sie `cs.param('width')` und `cs.params()`. Skripte lesen Parameter nur: Ändern Sie sie auf der Registerkarte {{ui:Parameter}}. Unter der Registerkarte des Skripts listet eine Zeile die Parameter auf, die es mit `param('…')` liest, und markiert alle, die das Bauteil nicht hat; die Registerkarte {{ui:Parameter}} listet das Skript unter jedem davon auf. Ein Name, der erst während des Laufs gebildet wird, etwa `param(name)`, wird nicht aufgelistet.

## Skripte werden im Bauteil gespeichert

Jedes Skript in den Registerkarten wird im Bauteil gehalten, daher speichert {{ui:Speichern}} in der Gruppe Datei sie mit dem Bauteil, und Änderungen daran lassen sich rückgängig machen. Das Öffnen eines Bauteils **führt seine Skripte nie aus**: Die Konsole sagt, wie viele es enthält, und sie laufen nur, wenn Sie Ausführen drücken. Ein Bauteil von jemand anderem kann beliebige Skripte enthalten: Lesen Sie es, bevor Sie es ausführen. Skripte laufen im Hintergrund auf diesem Computer ohne Netzzugang und können die Seite nicht berühren.

## Verwandte Themen

- [Die CraftScript-Sprache](topic:craftscript-language)
- [Skripte in Lua](topic:craftscript-lua)
- [Skripte in Python](topic:craftscript-python)
- [Die Analysebibliothek](topic:craftscript-library)
- [Eine eigene Analyse schreiben](topic:craftscript-own-analysis)
