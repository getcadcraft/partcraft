---
title: Zebrastreifen und Krümmung
summary: Prüfen Sie, wie glatt die Flächen eines Bauteils ineinander übergehen, mit Zebrastreifen, die der Ansicht folgen, oder einer Farbkarte der mittleren Krümmung, über das Menü Ansichten.
keywords: Zebra, Zebrastreifen, Reflexionslinien, Krümmung, Krümmungskarte, mittlere Krümmung, Oberflächenqualität, Kontinuität, tangential, G1, G2, glatt, Knick, Hervorhebungslinien
from: 78fed4c3
---

Zwei schnelle Ansichten, wie glatt die Flächen eines Bauteils sind, an jedem Bauteil im Arbeitsbereich Design. (Der Arbeitsbereich Form hat eigene Werkzeuge für die gerade bearbeitete Form: siehe [Freiformkörper mit Form](topic:form-surfaces).)

## Zebrastreifen

Öffnen Sie {{ui:Ansichten}} und wählen Sie {{ui:Zebrastreifen}}. Das Bauteil zeigt die Spiegelung eines gestreiften Lichts, so wie eine polierte Oberfläche es täte:

- Wo zwei Flächen **tangential** ineinander übergehen (eine Verrundung auf einer Ebene, eine glatte Gordon-Fläche), laufen die Streifen über die Übergangsstelle hinweg, mit einem Knick.
- Wo sie an einem **Knick** aufeinandertreffen, brechen die Streifen ab und springen.
- Wo auch die Krümmung übereinstimmt (G2), laufen die Streifen ohne jeden Knick durch.

Drehen Sie die Ansicht (ziehen oder eine Seite des ViewCube): Die Streifen werden aus der neuen Blickrichtung neu gezeichnet. **Streifen** legt fest, wie viele es sind.

## Krümmung

Wählen Sie im selben Menü {{ui:Krümmung}}. Das Bauteil wird nach seiner **mittleren Krümmung** eingefärbt: blau, wo es hohl ist (konkav), hell, wo es eben ist, rot, wo es sich wölbt (konvex). Die Karte zeigt an, bei welcher Krümmung die Farben volle Stärke erreichen, in 1/mm und als Radius. Scharfe Kanten gelten als stark gekrümmt und werden deshalb kräftig angezeigt; betrachten Sie die Flächen zwischen ihnen.

## Die Karte

Beide öffnen die Analysekarte unten links in der Ansicht, die auch die [Formschräge-Analyse](topic:draft-analysis) enthält. Wechseln Sie mit **Anzeigen** zwischen ihnen. Wenn Sie die geöffnete Option erneut in {{ui:Ansichten}} wählen, {{ui:Schließen}} wählen oder {{key:Esc}} drücken, wird sie ausgeschaltet. Die Farben folgen dem Bauteil, während Sie es ändern; im Bauteil wird nichts gespeichert.
