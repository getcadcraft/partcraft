---
title: Antasten: Werkstück finden und Werkstücknullpunkt setzen
summary: Berühren Sie eine Oberseite, eine Seite, eine Bohrung oder einen Zapfen mit einem Taster, und lassen Sie die Steuerung den Werkstücknullpunkt dorthin verschieben, wo das Werkstück tatsächlich liegt, oder messen Sie nur. Was jede Steuerung kann und was nicht nachgewiesen ist.
keywords: Antasten, Taster, Tastkopf, Werkstücknullpunkt, G54, G31, G38.2, Skip, Bezug, Mitte finden, Bohrung, Zapfen, Kante, Null setzen, messen, Prüfung, G10
from: 1f718b82
---

{{ui:Antasten}} in der Fertigung schreibt einen Tastzyklus in das Programm: Der Taster berührt das Werkstück, und die Steuerung verschiebt den Werkstücknullpunkt (G54) um die Differenz zwischen der gefundenen Position der Fläche und der Position, die das Modell angibt. Spätere Vorgänge schneiden dann dort, wo das Werkstück tatsächlich liegt.

**Hier ist nichts auf einer Maschine gelaufen.** Die Bewegungen vor einer Berührung sind gewöhnliche Bewegungen: Der Taster wird erst bei der Tastbewegung selbst beobachtet. Fahren Sie langsam, zuerst in der Luft, mit der Hand am Vorschubhalt.

## Verwendung

1. Auf der Registerkarte **Werkzeuge** fügt der erste Tastvorgang einen **Tastkopf** hinzu: seinen Kugeldurchmesser und den Tastvorschub (100 mm/min, sofern Sie keinen anderen festlegen).
2. Drücken Sie {{ui:Mehr}} in der Symbolleiste Fertigung, dann {{ui:Antasten}}, und klicken Sie auf das, was berührt werden soll. Jede Auswahl ist ein Zyklus, in der Reihenfolge Ihrer Klicks:

| Auswahl | Der Zyklus | Was festgelegt wird |
|---|---|---|
| Eine ebene Fläche, die entlang der Werkzeugachse nach oben zeigt | Eine Berührung von oben nach unten | Z |
| Eine ebene Seitenfläche senkrecht zu X oder Y | Eine Berührung auf die Fläche zu, etwas unterhalb ihrer Oberkante | X oder Y |
| Eine Bohrung oder ein Zapfen entlang der Werkzeugachse | Vier Berührungen (+X, −X, +Y, −Y) | X und Y ihres Mittelpunkts |

3. **Mit dem Ergebnis**: {{ui:Werkstücknullpunkt setzen}} oder {{ui:Nur messen}}.
4. **Startabstand** und **Suchweg** bestimmen, wie weit von der erwarteten Fläche die Tastbewegung beginnt und wie weit darüber hinaus der Taster fahren darf, bevor die Steuerung aufgibt. **Tiefe** ist, wie weit unter die Oberkante einer Bohrung, eines Zapfens oder einer Seitenfläche die Kugel fährt.

Setzen Sie den Tastvorgang an den Anfang, vor jeden Schnitt.

## Was jede Steuerung schreibt

| Steuerung | Berührung | Ergebnis |
|---|---|---|
| Im Stil von Fanuc | `G31`, die Position wird in `#101` bis `#104` gespeichert | Die Nullpunktvariablen (`#5221` bis `#5223`) werden um gefunden − erwartet verschoben. Nur messen: Die Differenz bleibt in `#110` (und `#111`). |
| LinuxCNC | `G38.2`, die Position wird in benannten Parametern gespeichert | `G10 L2 P1` mit dem neuen Nullpunkt. Nur messen: eine Meldung `(DEBUG, …)`. |
| GRBL | `G38.2` | Eine Berührung setzt die Achse mit `G10 L20 P1`. GRBL hat keine Variablen und kann daher **keine Mitte berechnen**: Die Datei sagt dies in einem Kommentar und setzt nichts. |

Die Rechnung liegt im Postprozessor, Sie können sie also ändern: Die Ereignisse sind `probe-move` und `probe-set` ([Bearbeitbare Postprozessoren](topic:post-processors)).

## Grenzen

- Ein Werkstücknullpunkt (G54). Nur Flächen senkrecht zu den Achsen: kein Winkel, kein Eckzyklus, keine Drehung des Werkstücks.
- Kein Werkzeugvoreinstellgerät, keine Bruchprüfung des Werkzeugs, keine Prüfung eines Maßes gegen eine Toleranz, kein Bericht.
- Die Spindel wird für einen Taster nicht gestartet, und das Kühlmittel bleibt aus. Nichts prüft, ob das Werkzeug in der Spindel ein Taster ist.
- Die Rohteilsimulation führt keinen Tastweg aus.
- Die Kalibrierung des Tasters selbst (Kugelversatz, Auslenkung der Tastnadel, Auslöserichtung) liegt bei der Steuerung.
