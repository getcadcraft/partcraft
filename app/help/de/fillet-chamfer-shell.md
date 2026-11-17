---
title: Runden, Abschrägen und Aushöhlen mit Verrundung, Fase und Schale
summary: Wählen Sie Kanten und fügen Sie Verrundungen mit konstantem oder variablem Radius sowie Fasen mit gleicher Strecke, zwei Strecken oder Strecke und Winkel hinzu. Höhlen Sie ein Bauteil mit Schale aus, indem Sie die zu öffnenden Flächen wählen, ändern Sie, welche Kanten oder Flächen ein Feature verwendet, und beheben Sie die üblichen Fehler.
keywords: verrundung, runden, verschmelzen, fase, abschrägen, schale, aushöhlen, wanddicke, kanten, flächen, kanten wählen, umschalt-klick, offene fläche, exakter kernel, mesh-kernel, noch nicht umgesetzt
from: e41c1c12
---

:::note
**In dieser Version** erstellt PartCraft Verrundungen und Fasen mit dem Mesh-Kernel, nur an **geraden Kanten zwischen zwei ebenen Flächen**: Kanten eines Quaders und die geraden Kanten von Extrusionen und Ausschnitten, äußere oder innere Ecken (eine innere Ecke bekommt Material hinzugefügt). Runde Kanten wie Bohrungsränder und ein Radius, der sich entlang der Kante ändert, sind noch nicht umgesetzt. Wo sich zwei gerundete Kanten an einer Ecke treffen, werden die Rundungen auf Gehrung geschnitten (sie treffen sich in einer scharfen Falte), nicht verschliffen. **Schale** funktioniert ebenfalls, vom Mesh-Kernel erstellt: Sie öffnet nur ebene Flächen, Schalen mit unterschiedlichen Wanddicken sind noch nicht umgesetzt, und sie ist bei Bauteilen mit vielen runden Flächen langsam. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
:::

{{ui:Verrundung}} rundet Kanten ab, {{ui:Fase}} schrägt sie ab, und {{ui:Schale}} höhlt das Bauteil aus. Alle drei wirken auf die Kanten und Flächen des Volumenkörpers und werden vom Mesh-Kernel erstellt. Ihre Rundungen sind wie jede runde Fläche facettiert (**Kurven** legt fest, wie fein); die runden Flächen sind Zylinder, die Sie wählen und messen können (siehe [Der Mesh-Kernel](topic:solid-kernels)).

## Kanten verrunden oder fasen

### Zuerst die Kanten wählen

1. Klicken Sie auf eine Kante des Bauteils. Die ganze Kante wird hervorgehoben, und der rechte Bereich zeigt **Kante**: ihre Art (Gerade, Kreis oder Bogen, Kurve), Länge und die Flächen, zwischen denen sie liegt.
2. Um weitere Kanten hinzuzufügen, {{key:Shift}}+Klick darauf. Jede wird markiert; {{key:Shift}}+Klick auf eine markierte Kante nimmt sie wieder weg. Die Überschrift des Bereichs zählt sie („4 Kanten“), und die Statusleiste sagt „4 Kanten gewählt. Verrundung oder Fase rundet sie; Shift+Klick wählt weitere, Esc hebt die Auswahl auf.“
3. Wählen Sie {{ui:Verrundung}} oder {{ui:Fase}} in der Symbolleiste oder dieselben Schaltflächen im rechten Bereich.

Das Feature wird mit allen gewählten Kanten hinzugefügt: eine Verrundung mit 2 mm oder eine Fase mit 1 mm. Die Statusleiste sagt zum Beispiel „Fillet1 hinzugefügt (4 Kanten). Ändern Sie die Größe rechts; Kanten wählen ändert, welche.“

### Oder zuerst das Feature hinzufügen

1. Wählen Sie ohne Auswahl {{ui:Verrundung}} oder {{ui:Fase}}.
2. PartCraft geht in den Auswahlmodus: Die Überschrift des rechten Bereichs sagt „Fillet1: wählen“, das Bauteil wird so gezeigt, wie es vor der Verrundung war (der Bereich sagt das), und die Symbolleiste zeigt {{ui:Fertig}}.
3. Klicken Sie auf jede Kante, um sie hinzuzufügen; klicken Sie erneut, um sie zu entfernen. Die Statusleiste zählt sie.
4. Wählen Sie {{ui:Fertig}} (oder {{ui:Wählen beenden}} im Bereich), oder drücken Sie {{key:Esc}} oder {{key:Enter}}.

### Einstellungen

| Einstellung | Verrundung | Fase |
|---|---|---|
| Größe | **Radius (mm)**, Standard 2 | **Strecke (mm)** vom Rand auf beiden Flächen zurück, Standard 1 |
| **Kanten** | Wie viele | Wie viele |

Die Liste unten benennt jede Kante nach den zwei Flächen, die sie verbinden, etwa „Kante 1: Extrude1 Stirnfläche × Extrude1 Seite“. **Entfernen** nimmt eine weg. {{ui:Kanten wählen}} geht zurück zur Auswahl. Ein Doppelklick auf das Feature im Verlauf macht dasselbe.

Kanten werden über die zwei Flächen gemerkt, die sie verbinden, daher bleiben sie an der richtigen Kante, wenn Sie weiter oben im Verlauf ein Maß ändern.

### Variable Verrundungen und Fasentypen

- **Variabler Radius** (Verrundung): in dieser Version noch nicht umgesetzt („Eine Verrundung, deren Radius sich entlang der Kante ändert: noch nicht umgesetzt (sie braucht einen exakten Kernel). Geben Sie ihr einen Radius.“). Mit einem exakten Kernel: Setzen Sie den Haken und stellen Sie **Endradius (mm)** ein. Der Radius ändert sich linear von **Radius** am einen Ende jeder Kante zum **Endradius** am anderen; **Enden tauschen** dreht es um.
- **Typ** (Fase): **Gleiche Strecke**, **Zwei Strecken** (eine **zweite Strecke** auf der anderen Fläche) oder **Strecke und Winkel** (die Strecke auf einer Fläche, die Schräge im **Winkel (°)** zu dieser Fläche). **Seiten tauschen** legt die erste Strecke auf die andere Fläche.

## Ein Bauteil aushöhlen

1. Klicken Sie auf die ebene Fläche, die offen bleiben soll, zum Beispiel die Oberseite eines Quaders. Oder {{key:Shift}}+Klick auf mehrere Flächen.
2. Wählen Sie {{ui:Schale}} in der Symbolleiste oder {{ui:Schale, öffnet diese Fläche}} im Bereich der Fläche.

Das Bauteil wird zu einer 2-mm-Wand mit den gewählten offenen Flächen. Einstellungen:

| Einstellung | Was sie tut | Standard |
|---|---|---|
| **Wand (mm)** | Die Wanddicke | 2 |
| **Wände wachsen nach außen (die Flächen bleiben innen)** | Gesetzt: Die Wände werden außen hinzugefügt, sodass das Innere die Größe des Bauteils behält | Aus: Die Wände gehen nach innen, und das Äußere behält seine Größe |
| **Offene Flächen** | Wie viele Flächen entfernt werden | |

Nach innen sind die Wände genau so dick wie die Wanddicke: Äußere Ecken bleiben scharf, innere Ecken werden gerundet (Radius = Wand), und eine Bohrung durch das Bauteil erhält eine Röhre aus Wand darum. Nach außen werden die Wände außerhalb der ursprünglichen Oberfläche hinzugefügt, die zum Hohlraum wird, und die äußeren Kanten werden gerundet. Die inneren Flächen werden nach den Flächen benannt, die sie versetzen, sodass Sie sie wählen können.

Nur ebene Flächen können geöffnet werden: Wählen Sie eine gekrümmte, heißt es „Schale: in dieser Version werden nur ebene Flächen geöffnet (der Mesh-Kernel erstellt sie).“ Eine Schale ist bei Bauteilen mit vielen runden Flächen langsam (mehrere Sekunden pro tausend Dreiecke): Verwenden Sie beim Entwerfen eine gröbere Einstellung **Kurven**.

{{ui:Flächen wählen}} ändert, welche Flächen offen sind, auf dieselbe Weise wie das Wählen von Kanten. Die Liste benennt jede, etwa „Fläche 1: Extrude1 Stirnfläche“. Eine Schale ohne offene Flächen ist nicht erlaubt: „Wählen Sie die zu entfernenden Flächen (offen), dann Schale erstellen.“

## Die Reihenfolge zählt

Features werden von oben nach unten erstellt. Eine Verrundung vor einer Schale wird mit dem Bauteil ausgehöhlt, sodass auch das Innere gerundete Ecken bekommt. Eine Verrundung nach einer Schale rundet nur die Kanten, die Sie wählen. Verschieben Sie Features mit {{ui:Nach oben}} und {{ui:Nach unten}} (siehe [Ein Bauteil über seinen Verlauf ändern](topic:edit-history)).

Muster und Spiegelungen können keine Verrundung, Fase oder Schale kopieren: „Fillet1 ändert die Kanten oder Wände des Körpers; es kann nicht kopiert werden. Kopieren Sie die Features, die Volumenkörper erstellen (Extrusionen, Drehungen, Bohrungen, Importe).“ Bemustern Sie zuerst die Bohrungen oder Ausschnitte, dann verrunden Sie alle Kanten der Kopien in einer einzigen Verrundung.

## Wenn es fehlschlägt

| Meldung | Was zu tun ist |
|---|---|
| „Eine Rundung von 5 mm passt hier nicht (sie ist für eine Fläche neben einer der Kanten zu groß, oder die Kanten treffen sich in einer Ecke, die der Kernel nicht verrunden kann).“ | Verwenden Sie einen kleineren Radius, oder verrunden Sie weniger Kanten auf einmal (mehrere Verrundungs-Features, das kleinste zuletzt) |
| „Eine Kante, die sie rundet, ist weg: die Kante zwischen Extrude1 und Cut2.“ | Eine frühere Änderung hat diese Kante entfernt. Wählen Sie {{ui:Kanten wählen}}, entfernen Sie die rote Kante und wählen Sie die neue |
| „Die Schale konnte mit dieser Dicke nicht erstellt werden (…).“ | Die Wand ist dicker als ein schmaler Teil des Modells oder dicker als der Radius einer Verrundung. Machen Sie die Wand dünner oder die Verrundungen größer als die Wand |
| „Diese Fläche hat keinen Namen, dem der Verlauf folgen kann; wählen Sie eine andere.“ | Wählen Sie eine Fläche, die ein Feature erzeugt hat (die meisten Flächen) |
| „Verrundung: in dieser Version nur gerade Kanten zwischen zwei ebenen Flächen (der Mesh-Kernel erstellt sie). Runde oder schräge gekrümmte Kanten in der Skizze.“ (auch Fase) | Eine gewählte Kante ist rund, etwa ein Bohrungsrand, oder liegt auf einer gekrümmten Fläche. Entfernen Sie sie mit {{ui:Kanten wählen}}, und runden oder schrägen Sie diese Ecke stattdessen in der Skizze ab |
| „Eine Verrundung, deren Radius sich entlang der Kante ändert: noch nicht umgesetzt (sie braucht einen exakten Kernel). Geben Sie ihr einen Radius.“ | Entfernen Sie den Haken bei **Variabler Radius** |
| „Verrundung durch den Mesh-Kernel: Wo gerundete Kanten zusammentreffen, werden sie auf Gehrung geschnitten, nicht verschliffen.“ (⚠ im Verlauf) | Eine Warnung, kein Fehler: Das Bauteil ist erstellt. Gewählte Kanten treffen sich an einer Ecke, und die Rundungen treffen sich dort in einer scharfen Falte. Verrunden Sie weniger Kanten, oder akzeptieren Sie die Falte |
| „Schale: in dieser Version werden nur ebene Flächen geöffnet (der Mesh-Kernel erstellt sie).“ | Eine offene Fläche ist gekrümmt. Wählen Sie {{ui:Flächen wählen}} und entfernen Sie sie; öffnen Sie nur ebene Flächen |

## Grenzen

In dieser Version funktionieren Verrundungen und Fasen nur an geraden Kanten zwischen zwei ebenen Flächen, mit einem Radius, und Rundungen, die sich an einer Ecke treffen, werden auf Gehrung geschnitten. Schalen öffnen nur ebene Flächen. Mit einem exakten Kernel verändert sich eine variable Verrundung linear entlang jeder Kante (ein Verlauf pro Feature; kein Radius an Punkten entlang der Kante). Flächenverrundungen, Vollrundungen und Schalen mit unterschiedlichen Wanddicken sind noch nicht umgesetzt.
