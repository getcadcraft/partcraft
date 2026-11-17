---
title: Maße ohne Öffnen der Skizze ändern
summary: Steuern Sie ein Bauteil über die Zahlen im rechten Feld, also Skizzenbemaßungen, Tiefen, Anzahlen und Winkel. Außerdem erfahren Sie, wie Sie ein Bauteil so planen, dass die richtigen Zahlen es steuern, und wo Parameter und Gleichungen übernehmen.
keywords: Parameter, treibende Bemaßungen, Konstruktionsabsicht, Maß ändern, Gleichungen, globale Variablen, Konstruktionstabelle, Konfigurationen, Größe ändern, Bemaßung ändern
from: c2ae1a32
---

Jedes Maß in einem PartCraft-Bauteil ist eine Zahl, die Sie später ändern können: die Bemaßungen in seinen Skizzen und die Einstellungen seiner Features. Sie müssen keine Skizze öffnen, um deren Bemaßungen zu ändern.

## Eine Skizzenbemaßung über das Feld ändern

1. Klicken Sie im Verlauf auf ein Feature, zum Beispiel „Extrude1“.
2. Unter den eigenen Einstellungen der Extrusion listet **Skizzenbemaßungen (Sketch1)** jede Bemaßung ihrer Skizze auf: „Abstand“, „Durchmesser“, „Winkel (°)“ und so weiter.
3. Geben Sie in einem Feld einen neuen Wert ein und drücken Sie {{key:Enter}} oder {{key:Tab}}.

Die Skizze wird mit dem neuen Wert gelöst, und das gesamte Bauteil wird neu aufgebaut. Wenn Sie die Skizze selbst auswählen, zeigt sich dieselbe Liste als **Treibende Bemaßungen**.

Radius und Durchmesser müssen größer als null sein, und ein Winkel liegt zwischen 0 und 180 Grad. Die Statusleiste weist darauf hin, falls nicht.

:::tip
Welches Feld gehört wozu? Die Felder sind in der Reihenfolge aufgelistet, in der die Bemaßungen erstellt wurden. Wenn Sie unsicher sind, öffnen Sie die Skizze (Doppelklick darauf), doppelklicken Sie die Bemaßung auf der Zeichenfläche und ändern Sie sie dort.
:::

## Die Hauptzahl sofort eingeben

Wählen Sie ein Feature im Verlauf aus (oder fügen Sie es gerade hinzu) und geben Sie eine Zahl ein. Sie landet im Hauptfeld des Features, dem Feld, das Sie am häufigsten ändern: die **Tiefe** einer Extrusion, der **Winkel** einer Drehung, der **Durchmesser** einer Bohrung, die **Anzahl** eines Musters, der **Radius** einer Verrundung oder die Wand einer Schale. Drücken Sie {{key:Enter}}, um sie zu setzen, oder {{key:Esc}}, um die alte beizubehalten. Das Hinzufügen einer Extrusion meldet dies in der Statusleiste: „Extrude1 hinzugefügt. Ändern Sie die Zahlen rechts oder geben Sie jetzt eine Zahl für ihre Tiefe ein.“

## Die Zahl im Verlauf ändern

Die Zeile jedes Features im Verlauf zeigt seine Hauptzahl neben dem Namen: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Doppelklicken Sie auf die Zahl (oder wählen Sie die Zeile aus und drücken Sie {{key:F2}}). Dort öffnet sich ein Feld. Geben Sie den neuen Wert ein und drücken Sie {{key:Enter}}. {{key:Esc}} behält den alten. Es funktioniert genau wie das Feld des Features rechts: dieselben Grenzen, `=` für eine Gleichung wie `=width/2` und ein Schritt zum Rückgängigmachen.

Bei einer Extrusion, einer Bohrung oder einem Muster öffnet ein Doppelklick irgendwo in der Zeile das Feld. Bei einer Verrundung, Fase, Schale, Formschräge oder einem Gewinde führt ein Doppelklick auf den Namen weiterhin zur Auswahl der Kanten oder Flächen. Doppelklicken Sie daher auf die Zahl selbst. Skizzen haben keine Zahl in der Zeile: Ein Doppelklick öffnet die Skizze.

## In der Ansicht ziehen

Wählen Sie eine Extrusion im Verlauf aus (oder klicken Sie in der Ansicht darauf und dann auf ihre Zeile). Ein orangefarbener Pfeil steht dann auf ihrer Endfläche, mit der Tiefe in einem Feld daneben. Ziehen Sie den Pfeil: Das Bauteil folgt beim Ziehen, und beim Loslassen wird die neue Tiefe als ein Schritt gesetzt ({{key:Mod+Z}} stellt sie wieder her). Drücken Sie während des Ziehens {{key:Esc}}, um zu Ihrer Ausgangsposition zurückzukehren. Die Tiefe bewegt sich in Schritten von einem Zehntel ihrer Größe: 1 mm bei einer Extrusion von 25 mm, 0.1 mm bei einer von 3 mm.

Eine Drehung erhält einen gekrümmten Pfeil am Ende ihrer Drehung. Ziehen Sie ihn um die Achse, um den Winkel zu ändern, in ganzen Grad von 1° bis 360°.

Oder klicken Sie in das Feld neben dem Pfeil, geben Sie einen Wert ein (oder `=` und eine Gleichung) und drücken Sie {{key:Enter}}. Bei einer Extrusion, die **Durch alle** oder bis zu einer Fläche geht, gibt es keinen Pfeil, ebenso nicht bei einem Wert, den eine Gleichung steuert. Ändern Sie diese rechts.

## Die Zahlen, die ein Bauteil steuern

| Wo | Was Sie ändern können |
|---|---|
| Skizze | Jede Bemaßung: Längen, Abstände, Radien, Durchmesser, Winkel |
| Extrusion und Ausschneiden | Tiefe, Endbedingung, Richtung, Aufsatz oder Ausschnitt |
| Drehung und gedrehter Ausschnitt | Winkel, Achse, Aufsatz oder Ausschnitt |
| Bohrung | Durchmesser, Tiefe, durch alle, Senkdurchmesser und -tiefe |
| Verrundung, Fase, Schale | Radius, Abstand, Wandstärke und Richtung, sowie welche Kanten oder Flächen |
| Linear und Kreisförmig | Anzahl, Abstand oder Winkel, Richtung oder Achse |
| Bauteil | Kurven (wie fein runde Formen facettiert werden) |
| Zeichnung | Wo der Schnitt verläuft, Größe und Maßstab des Details, GD&T-Werte |

## Ein Bauteil so planen, dass die richtigen Zahlen es steuern

Die Zahlen, die Sie angeben, sind die, die Sie später ändern können. Einige Gewohnheiten sorgen dafür, dass spätere Änderungen sich richtig verhalten:

- **Bemaßen Sie, was für die Aufgabe wichtig ist.** Wenn eine Bohrung 15 mm von einer Kante entfernt bleiben muss, bemaßen Sie sie von dieser Kante aus, nicht vom Ursprung.
- **Skizzen vollständig bestimmen.** Dann bewegt eine Änderung nur das, was sie soll (siehe [Skizze vollständig bestimmen](topic:relations-dimensions)).
- **Abhängigkeiten für die Absicht verwenden.** Gleich bei zwei Bohrungen bedeutet, dass ein Durchmesser beide steuert. Bei symmetrischen Formen legen Sie den Ursprung auf die Mittellinie oder verwenden Sie Mittelpunkt.
- **Auf Flächen skizzieren, die durch Features entstanden sind.** Eine Skizze auf der Endfläche einer Extrusion verschiebt sich, wenn sich die Tiefe ändert.
- **Muster statt Kopieren.** Eine Bohrung, die achtmal gemustert wird, hat nur einen Durchmesser, den Sie ändern können.

## Über einzelne Zahlen hinaus

- **Eine Zahl steuert mehrere:** Verwenden Sie Parameter und Gleichungen: [Ein Bauteil mit Parametern steuern](topic:parameters).
- **Mehrere Größen eines Bauteils:** Speichern Sie jede als [Konfiguration](topic:design-tables). Sie werden in der Bauteildatei aufbewahrt.
- **Rechnen in einem Zahlenfeld:** Geben Sie `=40/2` oder `=width / 2` ein. Das wird zu einer Gleichung. Siehe [Gleichungen in beide Richtungen](topic:equations-two-way).
- **Zolleinheiten:** Das Bauteil zeigt Millimeter. In einem Zahlenfeld mit `=` oder in einem Parameter wird `2in` in 50.8 umgerechnet.

Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
