---
title: Ein Bauteil mit Parametern steuern
summary: Die wichtigen Maße benennen (Breite, Dicke, Schraubengröße), jede Feature-Nummer oder Skizzenbemaßung mit = an sie binden und das ganze Bauteil aus einer Tabelle ändern.
keywords: Parameter, Wo verwendet, verwendet von, globale Variablen, Variablen, Gleichungen, Konstruktionsabsicht, treibende Bemaßungen, verknüpfen, Ausdruck, Formel, Bemaßung benennen, verknüpfte Werte
from: 58c646ea
---

Ein Parameter ist eine benannte Zahl, zum Beispiel `width = 120` oder `margin = bolt * 1.5`. Verknüpfen Sie eine Tiefe, einen Lochdurchmesser, eine Musteranzahl oder eine Skizzenbemaßung damit: Wenn Sie den Parameter ändern, ändern sich alle in einem Schritt. So halten Sie die Konstruktionsabsicht im Bauteil statt im Kopf.

## Parameter hinzufügen

1. Klicken Sie im rechten Panel auf die Registerkarte {{ui:Parameter}}.
2. Geben Sie unter **Variablen** in das Feld „Name“ einen Namen ein, zum Beispiel `width`.
3. Geben Sie im nächsten Feld den Wert ein, zum Beispiel `120`, und drücken Sie {{key:Enter}} (oder klicken Sie auf {{ui:Hinzufügen}}).

Ein Wert kann eine Zahl oder ein Ausdruck aus anderen Parametern sein: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Die Spalte **Wert** zeigt, was sich ergibt. Ein Name beginnt mit einem Buchstaben oder `_` und enthält nur Buchstaben, Ziffern und `_`; Namen von Funktionen und Einheiten (`sin`, `mm`, `pi`) werden abgelehnt, ebenso eine Schleife wie `a = b` mit `b = a`.

## Eine Zahl mit einem Parameter verknüpfen

1. Klicken Sie im Verlauf auf ein Feature, zum Beispiel „Extrude1“. Seine Einstellungen werden auf der Registerkarte {{ui:Eigenschaften}} angezeigt.
2. Geben Sie in einem Zahlenfeld, etwa **Tiefe (mm)**, `=` und einen Ausdruck ein: `=thick` oder `=width / 4`.
3. Drücken Sie {{key:Enter}}.

Das Feld zeigt jetzt das Ergebnis, und neben seiner Beschriftung erscheint eine Schaltfläche **ƒ**. Zeigen Sie darauf, um die Gleichung zu sehen. Skizzenbemaßungen funktionieren genauso, sowohl in der Liste **Skizzenbemaßungen** eines Features als auch im Bemaßungsfeld einer geöffneten Skizze (Doppelklick auf eine Bemaßung, `=width` eingeben, Enter drücken).

Zahlen, die Sie verknüpfen können: Extrusionstiefe, Drehwinkel, Lochdurchmesser, Tiefe und Größen von Senkungen, Musteranzahl, Abstand und Winkel, Verrundungsradius, Fasenabstand, Wandstärke der Schale, jede Skizzenbemaßung und die Größen der neueren Features (zweite Tiefe, Verjüngung, Kegelsenkung, Abstand der Bezugsebene, Formschrägenwinkel und andere).

## Einen Parameter ändern

Geben Sie auf der Registerkarte {{ui:Parameter}} in der Spalte **Ausdruck** einen neuen Wert oder Ausdruck ein und drücken Sie {{key:Enter}}. Alles, was damit verknüpft ist, ändert sich, und das Bauteil wird in einem Schritt neu aufgebaut: {{key:Mod+Z}} macht es rückgängig.

Um eine Zahl vom anderen Ende aus zu ändern, siehe [Gleichungen in beide Richtungen](topic:equations-two-way).

## Sehen, wo ein Parameter verwendet wird

Unter jedem Parameter auf der Registerkarte {{ui:Parameter}} zeigt eine Zeile, was ihn verwendet:

- die Zahlen, die er steuert, etwa **Extrude1-Tiefe** oder **Sketch1 D2 (Abstand)**. Klicken Sie eine an, um ihr Feature auszuwählen und seine Eigenschaften zu zeigen;
- die Zahlen, die er **über** andere Parameter steuert, etwa **Hole1-Durchmesser (über h, d)**, wenn `d = h + 2` und `h = w / 2` ist;
- die **Parameter**, deren Ausdrücke ihn verwenden, die **Konfigurationen**, die ihn setzen, und die **Skripte**, die ihn lesen (siehe [Skripte schreiben und ausführen](topic:craftscript)).

„Noch nicht verwendet.“ bedeutet, dass ihn nichts verwendet: Sie können ihn ohne Rückfrage löschen.

## Lösen, umbenennen, löschen

- **Eine Zahl lösen:** klicken Sie auf deren Schaltfläche **ƒ** oder auf {{ui:Lösen}} in der Liste **Gleichungen**. Sie behält ihren aktuellen Wert, und kein Parameter ändert sie mehr.
- **Einen Parameter umbenennen:** geben Sie einen neuen Namen in sein Feld **Name** ein. Jeder Ausdruck, der ihn verwendet, wird umgeschrieben.
- **Einen Parameter löschen:** klicken Sie auf × in seiner Zeile. Wird er verwendet, fragt PartCraft, ob zuerst sein aktueller Wert in diese Ausdrücke geschrieben werden soll.
- **Ein Feature löschen** entfernt die Gleichungen seiner Zahlen; die Statusleiste nennt, welche.

:::note
Parameter werden in der Datei `.partcraft.json` gespeichert (als Dateiversion 3). Ein Bauteil ohne Parameter wird genau wie bisher gespeichert.
:::

## Ausdrücke

| Schreibweise | Bedeutung |
|---|---|
| `120`, `12.5`, `1e3` | eine Zahl (Millimeter oder Grad für einen Winkel) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | eine Länge in anderen Einheiten, umgerechnet in Millimeter |
| `30deg`, `0.5rad` | ein Winkel, umgerechnet in Grad |
| `+ - * / %` und `^` | Rechenarten; `^` ist eine Potenz, `-2^2` ergibt −4 |
| `sin cos tan asin acos atan atan2` | Trigonometrie in Grad |
| `sqrt pow exp ln log abs sign` | weitere Funktionen |
| `ceil floor int round(x, digits) min max` | Runden und Grenzen |
| `if(test, a, b)` mit `< <= > >= == !=` | eine Auswahl: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Namen unterscheiden Groß- und Kleinschreibung: `Width` und `width` sind zwei Parameter.

Siehe auch [Konfigurationen und Konstruktionstabellen](topic:design-tables) und [Skripte und Befehlszeile](topic:scripts-and-cli).
