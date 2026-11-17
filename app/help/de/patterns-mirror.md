---
title: Muster- und Spiegel-Features
summary: Features mit Linear in einer Reihe wiederholen, mit Kreisförmig um eine Achse anordnen und Features oder den ganzen Körper mit Spiegeln über eine Ebene kopieren.
keywords: Muster, lineares Muster, Kreismuster, Polaranordnung, Anordnung, Spiegeln, symmetrisch, Features kopieren, Lochkreis, Ausgangselement, Körper spiegeln
from: 702e9edb
---

Muster und Spiegelungen kopieren Features, die Sie bereits erstellt haben. Die Kopien sind Teil des Verlaufs: Ändern Sie das Original, folgen die Kopien.

Kopiert wird, was das Feature bewirkt: Ein Aufsatz-Muster fügt Material hinzu, ein Schnitt- oder Bohrungsmuster entfernt es. Muster können erneut gemustert und gespiegelt werden. Ein importierter STEP-Volumenkörper kann ebenfalls kopiert werden; Verrundungen, Fasen und Schalen nicht.

## Lineares Muster

1. Wählen Sie das zu kopierende Feature im Verlauf (zum Beispiel eine Bohrung oder einen Schnitt). Ist nichts ausgewählt, wird das letzte Volumenkörper-Feature verwendet.
2. Wählen Sie {{ui:Linear}}. Drei Kopien erscheinen im Abstand von 20 mm entlang X.
3. Stellen Sie im rechten Bereich ein:

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Features zum Kopieren** | Markieren Sie jedes zu kopierende Feature. Nur Features oberhalb des Musters werden aufgelistet | Das gewählte Feature |
| **Richtung** | X-Achse, Y-Achse, Z-Achse, eine Linie oder Mittellinie aus einer früheren Skizze, die Achse einer Drehung oder eine gewählte Kante | X-Achse |
| **Abstand (mm)** | Abstand zwischen Nachbarn | 20 |
| **Anzahl** | Gesamtzahl, **einschließlich des Originals** (1 bis 1000) | 3 |
| **Richtung umkehren** | Die Kopien laufen in die andere Richtung | Aus |

### Eine Kante als Richtung verwenden

1. Klicken Sie in der Ansicht auf eine gerade Kante des Bauteils. Im rechten Bereich steht **Kante** und die Länge wird angezeigt.
2. Wählen Sie {{ui:Linear}}: Das Muster verläuft entlang dieser Kante.

Oder wählen Sie das Muster, klicken Sie eine Kante an und wählen Sie unter **Richtung** „Gewählte Kante (die jetzt gewählte verwenden)“. Eine gewählte Kante ist im Raum fixiert und folgt späteren Änderungen nicht. Eine Skizzenlinie folgt ihrer Skizze.

## Kreisförmiges Muster

1. Wählen Sie das zu kopierende Feature (zum Beispiel eine Bohrung nahe dem Rand einer Scheibe).
2. Wählen Sie {{ui:Kreisförmig}}. Sechs Kopien erscheinen gleichmäßig verteilt rundherum.
3. Stellen Sie ein:

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Features zum Kopieren** | Wie beim linearen Muster | Das gewählte Feature |
| **Achse** | X-, Y- oder Z-Achse, eine Skizzenlinie, die Achse einer Drehung oder eine gewählte Kante | Die Achse der letzten Drehung, falls vorhanden, sonst die Y-Achse |
| **Winkel (°)** | 360 verteilt die Kopien gleichmäßig rundherum. Ein kleinerer Winkel verteilt sie über diesen Winkel, die erste und die letzte an den Enden | 360 |
| **Anzahl** | Gesamtzahl, einschließlich des Originals | 6 |
| **Richtung umkehren** | Dreht in die andere Richtung | Aus |

Die Weltachsen verlaufen durch den Ursprung. Liegt eine Scheibe nicht im Ursprung, verwenden Sie eine Skizzen-Mittellinie oder die Achse einer Drehung.

### Beispiel: die acht Schraubenbohrungen eines Flansches

1. Drehen Sie den Flansch (siehe [Ein gedrehtes Bauteil per Drehung erstellen](topic:revolve)) um die Y-Achse.
2. Skizzieren Sie auf der flachen Oberseite des Flansches, setzen Sie einen Punkt auf den Lochkreis und erstellen Sie eine Bohrung.
3. Wählen Sie bei gewählter Bohrung {{ui:Kreisförmig}}. Die Achse ist bereits „Achse von Revolve1“.
4. Setzen Sie **Anzahl** auf `8`.

## Spiegeln

1. Wählen Sie das zu spiegelnde Feature im Verlauf oder wählen Sie nichts, um **den ganzen bisher erstellten Körper** zu spiegeln.
2. Wählen Sie {{ui:Spiegeln}}. Gespiegelt wird über die **Rechte Ebene**.

Um stattdessen den ganzen Körper über eine Fläche des Bauteils zu spiegeln, klicken Sie zuerst auf diese ebene Fläche und wählen Sie dann {{ui:Spiegeln}}. (Ein Klick auf eine Fläche hebt die Auswahl im Verlauf auf, daher wird immer der ganze Körper gespiegelt.)

Einstellungen im rechten Bereich:

- **Spiegeln**: Markieren Sie **Der ganze Körper (bisher erstellt)** oder heben Sie die Markierung auf und markieren Sie die zu kopierenden Features.
- **Spiegelebene**: Vordere Ebene, Obere Ebene, Rechte Ebene, die aktuell verwendete Fläche („Eine Fläche von Extrude1“ oder „Eine feste Ebene“) oder „Jetzt gewählte Fläche“. Um ausgewählte Features über eine Fläche zu spiegeln: Wählen Sie das Spiegeln im Verlauf, klicken Sie in der Ansicht auf die Fläche und wählen Sie „Jetzt gewählte Fläche“.

Das Spiegeln des ganzen Körpers über eine Fläche verdoppelt das Bauteil, zum Beispiel aus einer halben Halterung wird eine ganze.

## Meldungen

- „Zuerst ein Feature zum Kopieren erstellen.“ oder „Zuerst einen Volumenkörper erstellen.“ Es gibt noch keinen Volumenkörper zum Kopieren.
- „Features zum Kopieren wählen.“ Alle Felder **Features zum Kopieren** sind leer.
- „Extrude2 hat keinen Volumenkörper zum Kopieren.“ Dieses Feature ist fehlgeschlagen oder unterdrückt.
- „Fillet1 ändert die Kanten oder Wände des Körpers; es kann nicht kopiert werden. Kopieren Sie die Features, die Volumenkörper erzeugen (Extrusionen, Drehungen, Bohrungen, Importe).“ Verrundungen, Fasen und Schalen können nicht gemustert oder gespiegelt werden; mustern Sie zuerst, verrunden Sie danach.
- „Es gibt noch keinen Körper zum Spiegeln.“

:::note
Musterkopien können nicht einzeln übersprungen werden, und ein Muster kann keiner Skizzenkurve folgen. Skizzenmuster und Skizzenspiegelungen sind ebenfalls noch nicht umgesetzt: Zeichnen Sie wiederholte Skizzengeometrie von Hand oder mit **Nach Koordinaten hinzufügen**.
:::
