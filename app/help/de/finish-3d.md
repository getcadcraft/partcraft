---
title: 3D-Schlichten: Parallel und Scallop
summary: Schlichten Sie die gekrümmte Oberfläche des ganzen Modells mit einem Kugelfräser, Eckradiusfräser oder Schaftfräser, in parallelen Linien in jedem Winkel oder in Bahnen mit festem Abstand, sodass die Restkämme dazwischen die verlangte Höhe behalten. Was die Bahnen garantieren und was nicht.
keywords: 3D-Schlichten, Schlichten, Parallel, Raster, Scallop, konstanter Scallop, Restkamm, Kugelfräser, Eckradiusfräser, Fläche, Toleranz, Seitenzustellung, Neigung, Aufmaß, Drop-Cutter, Gouge
from: 942d2341
---

Zwei Operationen in Fertigung fräsen die **gesamte Modelloberfläche** mit senkrecht gehaltenem Werkzeug (drei Achsen). Sie brauchen keine Auswahl: Sie arbeiten an allem Modell, das von oben sichtbar ist. Schruppen Sie das Bauteil zuerst (Adaptiv oder Tasche); ein Schlichtgang über unbearbeitetes Rohteil warnt, dass er zu tief schneiden würde.

## Parallel

Gerade Linien über das Modell im **Winkel**, den Sie einstellen, mit **Seitenzustellung** Abstand (ein Bruchteil des Werkzeugdurchmessers). Jede Linie folgt der Oberfläche: Die Werkzeugspitze steht so hoch, dass kein Teil des Fräsers unter das Modell geht, und die Linie wird dort feiner geschnitten, wo sich die Oberfläche krümmt. Mit eingeschalteter **Zickzack**-Option bleibt das Werkzeug zwischen den Linien unten, wo das sicher möglich ist (entlang der Bewegung geprüft); sonst hebt es ab.

- **Toleranz**: wie weit ein gerades Stück einer Linie von der richtigen Spitzenhöhe abweichen darf (die Hälfte davon gilt als Grenze in der Mitte jedes Stücks). Standard 0.01 mm.
- **Nur wo die Oberfläche mindestens … und höchstens … (°) geneigt ist**: Schlichten Sie nur flache oder nur steile Bereiche. Liegt die Oberfläche außerhalb des Bereichs, wird die Linie ausgelassen und das Werkzeug hebt ab.
- **Aufmaß**: das Modell, um diesen Abstand versetzt (der Fräser wird um ihn vergrößert: genau für Kugel- und Eckradiusfräser; ein Schaftfräser lässt mindestens so viel stehen).
- **Unten**: unterhalb dieser z-Höhe wird nichts geschnitten.

## Scallop

Bahnen, die über die Oberfläche einen konstanten Abstand zueinander halten, sodass der Restkamm (der Scallop) zwischen zwei benachbarten Bahnen die von Ihnen verlangte **Höhe** hat. Der Abstand ergibt sich aus der Höhe und dem Radius der Kugel: s = 2·√(2·R·h − h²), zum Beispiel etwa 0.69 mm zwischen den Bahnen für eine Ø6-Kugel und einen Restkamm von 0.02 mm. Ein Eckradiusfräser verwendet seinen Eckradius. Ein Schaftfräser wird abgelehnt: Er hat keinen Kamm, dessen Höhe sich einstellen ließe.

Die Bahnen beginnen am **Rand des Modells und gehen nach innen** oder **an dessen Oberseite und gehen nach unten**. Es sind Linien gleichen Abstands über die Oberfläche (nicht gleicher Höhe): Deshalb liegen sie an einer Neigung im Grundriss dicht beieinander und auf einer Ebene weit auseinander. Der Abstand wird auf einem Raster über der Oberfläche gemessen und ist auf etwa 1 % genau; die Höhe des Restkamms ist dort exakt, wo die Oberfläche eben oder sanft gekrümmt ist, und dort nur angenähert, wo sie schnell gekrümmt ist. **Gleichlauffräsen** hält die höhere Seite der Oberfläche rechts vom Fräser.

## Wie gut die Bahnen sind

Was die Prüfungen kontrollieren, mit geschlossenen Formeln oder mit einer unabhängigen Vollsuche der Fräserfläche:

- Die Spitzenhöhe unter dem Werkzeug ist für Kugel-, Eckradius- und Schaftfräser an Flächen, Kanten und Ecken des Netzes exakt und liegt nie über der wahren Höhe. Bei Parallel-Linien bleibt die Bahn innerhalb der Toleranz davon, ohne Gouge, die tiefer geht als diese.
- Bahnlängen auf einer geneigten Ebene stimmen mit der geschlossenen Formel überein. Scallop-Bahnen auf einer Ebene liegen im verlangten Abstand, und der Restkamm dazwischen hat die verlangte Höhe.
- Die Rohteilsimulation zeigt nach einem Durchgang keine Gouges und zeigt die verbleibenden Kämme.

Was diese Bahnen nicht sind: Sie sind einfache Schlichtdurchgänge, nicht das gesamte Angebot eines Produktionssystems.

- Noch nicht umgesetzt: Waterline-Schlichten (konstantes z), Pencil- und Eckennachbearbeitung, radiale und spiralförmige Bahnen, das Projizieren einer Kurve auf die Oberfläche, die Erkennung ebener Bereiche, Kollisionsprüfungen von Halter und Schaft. Schruppen und Restbearbeitung sind eigene Operationen ([3D-Schruppen und Restbearbeitung](topic:rough-3d)); ein geneigtes Werkzeug ist [5-Achs-Schlichten](topic:multi-axis#5-axis-finishing).
- Der Werkzeugmittelpunkt bleibt über dem Modell: Die Bahnen enden am Rand des Modells, statt darüber hinauszulaufen. Deshalb wird eine senkrechte Wand direkt am Rand nicht bis zu ihrem Fuß geschlichtet.
- Hinterschneidungen werden nicht erkannt (die Oberfläche ist das, was das Werkzeug von oben trifft).
- Das Modell ist das Netz aus dem Kern, daher folgen die Bahnen dem Netz (dessen Sehnentoleranz etwa 0.0002 der Bauteildiagonale beträgt) und nicht der exakten Oberfläche.
- Das Schlichten eines großen Modells mit feiner Toleranz ergibt ein langes Programm mit vielen kurzen Bewegungen. Prüfen Sie die Ausgabe im Simulator Ihrer Maschine, bevor Sie schneiden.
