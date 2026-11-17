---
title: Skizzengeometrie durch Eingabe von Koordinaten hinzufügen
summary: Mit Koordinaten hinzufügen im Bereich Skizze platzieren Sie Linien, Mittellinien, Rechtecke, Kreise und Punkte an exakten Positionen, nur mit der Tastatur.
keywords: Koordinaten, Texteingabe, Tastatureingabe, numerische Eingabe, exakte Position, x y, absolute Koordinaten, Barrierefreiheit, ohne Maus
from: 5e6c1656
---

Wenn Sie die Zahlen kennen, ist ihre Eingabe schneller als Klicken und Bemaßen. **Koordinaten hinzufügen** befindet sich im rechten Bereich, sobald eine Skizze geöffnet ist. Damit können Sie eine Skizze auch ganz ohne Zeigegerät aufbauen.

Koordinaten sind in Millimetern angegeben, in den eigenen Achsen der Skizze: x nach rechts und y nach oben, so wie Sie die Skizze sehen, mit (0, 0) am Ursprung (dem roten Kreis mit Kreuz).

## Eine Form hinzufügen

1. Öffnen Sie eine Skizze (siehe [Erste Skizze zeichnen](topic:sketch-basics)).
2. Scrollen Sie im rechten Bereich zu **Koordinaten hinzufügen**.
3. Wählen Sie die Form unter **Hinzufügen**: Linie, Mittellinie, Rechteck, Kreis oder Punkt.
4. Füllen Sie die Felder aus:

| Form | Felder |
|---|---|
| Linie | **Von x, y** und **Bis x, y** |
| Mittellinie | **Von x, y** und **Bis x, y** |
| Rechteck | **Ecke x, y** und **Gegenüberliegende Ecke x, y** |
| Kreis | **Mittelpunkt x, y** und **Radius** |
| Punkt | **Bei x, y** |

5. Wählen Sie {{ui:Hinzufügen}}, oder drücken Sie {{key:Enter}} in einem beliebigen Feld.

Die Form erscheint, und die Statusleiste zeigt zum Beispiel „Rechteck hinzugefügt.“ Die Felder leeren sich, bereit für die nächste Form. Jede Ergänzung ist ein einzelner Schritt für {{ui:Rückgängig}}.

Geben Sie ein Paar als zwei Zahlen ein, getrennt durch ein Komma oder ein Leerzeichen: `0, 0`, `25 -10` oder `12.5,40`. Negative Zahlen und Dezimalzahlen sind zulässig. Ein Radius muss größer als null sein. Wenn etwas nicht als Zahl gelesen werden kann, zeigt die Statusleiste: ‚Koordinaten als „x, y“ und einen Radius größer als null eingeben.‘

## Beispiel: Umriss einer geschlitzten Platte, eingegeben

1. Öffnen Sie eine Skizze auf der **Vorderebene**.
2. **Hinzufügen**: Rechteck. **Ecke x, y**: `-50, -30`. **Gegenüberliegende Ecke x, y**: `50, 30`. {{key:Enter}}.
3. **Hinzufügen**: Kreis. **Mittelpunkt x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Mittelpunkt x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Wählen Sie {{ui:Skizze beenden}}, dann {{ui:Extrusion}}: eine Platte von 100 × 60 mit zwei Bohrungen zu je 10 mm.

## Eingegebene Geometrie wird platziert, nicht fixiert

Eingegebene Koordinaten setzen die Geometrie an die richtige Stelle, sie sind aber **keine Abhängigkeiten**. Die Formen bleiben blau (unterbestimmt) und können sich bewegen, wenn Sie sie ziehen oder eine andere Bemaßung ändern:

- Ein eingegebenes Rechteck erhält eigene Eck-, Horizontal- und Vertikal-Abhängigkeiten wie ein gezeichnetes, aber nichts bindet es an den Ursprung;
- eine eingegebene Linie hat keine Horizontal- oder Vertikal-Abhängigkeit, auch wenn Sie eine waagerechte Linie eingegeben haben;
- der Mittelpunkt eines eingegebenen Kreises ist frei.

Um die Skizze vollständig zu bestimmen, fügen Sie danach Bemaßungen und Abhängigkeiten hinzu (siehe [Skizze vollständig bestimmen](topic:relations-dimensions)). Wählen Sie zum Beispiel eine Rechteckecke und den Ursprung und dann {{ui:• Deckungsgleich}}, oder bemaßen Sie die Kreismittelpunkte vom Ursprung aus.

:::note
Ohne Zeigegerät kommen Sie so weit: Wechseln Sie mit {{key:Tab}} und den Pfeiltasten zu einer Ebenenzeile im Verlauf, wählen Sie sie mit {{key:Enter}} aus, drücken Sie {{key:S}} zum Skizzieren, fügen Sie hier Formen hinzu und erreichen Sie mit {{key:Tab}} die Schaltfläche **Bearbeiten** neben jeder Bemaßung sowie {{ui:Skizze beenden}}. Das Auswählen von Geometrie und damit das Hinzufügen von Abhängigkeiten oder neuen Bemaßungen erfordert in dieser Version weiterhin einen Klick oder Tipp.
:::

## Einschränkungen

- Bögen können noch nicht eingegeben werden. Zeichnen Sie sie mit dem Bogenwerkzeug, oder geben Sie einen Kreis ein und verwenden Sie Abhängigkeiten.
- In diesem Feld gibt es keine relativen Koordinaten (vom letzten Punkt) und keine Polarkoordinaten (Länge und Winkel).
- Eingegebene Geometrie rastet nicht auf vorhandene Punkte ein. Geben Sie dieselben Koordinaten wie bei einem vorhandenen Punkt ein und fügen Sie danach eine Abhängigkeit {{ui:• Deckungsgleich}} zwischen ihnen hinzu, wenn sie verbunden bleiben müssen.
