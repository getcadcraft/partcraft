---
title: 3D-Schlichten: parallel und Rauhtiefe
summary: Schlichten Sie die gesamte gekrümmte Oberfläche des Modells mit einem Kugel-, Torus- oder Schaftfräser, in parallelen Linien in beliebigem Winkel oder in Durchgängen mit festem Abstand, damit die Grate dazwischen die gewünschte Höhe behalten. Was die Bahnen garantieren und was nicht.
keywords: 3d-schlichten, schlichten, parallel, raster, rauhtiefe, konstante rauhtiefe, rillenhöhe, kugelfräser, torusfräser, oberfläche, toleranz, zustellung, neigung, aufmaß, drop cutter, überschnitt
from: e1587d0a
---

Zwei Vorgänge in der Fertigung schneiden die **gesamte Oberfläche des Modells**, wobei das Werkzeug senkrecht gehalten wird (drei Achsen). Sie brauchen keine Auswahl: Sie arbeiten an allem Modell, das von oben sichtbar ist. Schruppen Sie das Bauteil zuerst (adaptiv oder Tasche); ein Schlichtdurchgang über unbearbeitetem Rohteil warnt, dass er zu tief schneiden würde.

## Parallel

Gerade Linien quer über das Modell im eingestellten **Winkel**, im Abstand **Zustellung** (ein Bruchteil des Werkzeugdurchmessers). Jede Linie folgt der Oberfläche: Die Werkzeugspitze steht so hoch, dass kein Teil des Fräsers unter das Modell gelangt, und die Linie wird dort feiner geschnitten, wo sich die Oberfläche krümmt. Mit eingeschaltetem **Zick-Zack** bleibt das Werkzeug zwischen den Linien unten, wo es das sicher kann (entlang der Bewegung geprüft); sonst hebt es ab.

- **Toleranz**: wie weit ein gerades Stück einer Linie von der wahren Spitzenhöhe abweichen darf (die Hälfte davon gilt als Grenze in der Mitte jedes Stücks). Standard 0.01 mm.
- **Nur wo die Oberfläche mindestens … und höchstens … (°) ist**: nur flache oder nur steile Bereiche schlichten. Wo die Oberfläche außerhalb des Bereichs liegt, wird die Linie ausgelassen und das Werkzeug hebt ab.
- **Aufmaß**: das Modell um diesen Abstand versetzt (der Fräser um ihn vergrößert: exakt für Kugel- und Torusfräser; ein Schaftfräser lässt mindestens so viel stehen).
- **Boden**: unterhalb dieser z-Höhe wird nichts geschnitten.

## Rauhtiefe

Durchgänge, die über die Oberfläche einen konstanten Abstand zueinander halten, damit der Grat (die Rauhtiefe), der zwischen zwei benachbarten Durchgängen stehen bleibt, die **Höhe** hat, die Sie verlangen. Der Abstand ergibt sich aus der Höhe und dem Radius der Kugel: s = 2·√(2·R·h − h²), zum Beispiel etwa 0.69 mm zwischen den Durchgängen für eine Ø6-Kugel und einen Grat von 0.02 mm. Ein Torusfräser verwendet seinen Eckradius. Ein Schaftfräser wird abgelehnt: Er hat keinen Grat, den man bemessen könnte.

Die Durchgänge beginnen **am Rand des Modells und gehen nach innen** oder **von der Oberseite und gehen nach unten**. Sie sind Höhenlinien des Abstands über die Oberfläche (nicht der Höhe), daher liegen sie auf einer Schräge im Grundriss eng beieinander und auf einer Ebene weit auseinander. Der Abstand wird auf einem Raster über der Oberfläche gemessen und ist auf etwa 1 % genau; die Höhe des Grats ist auf flachen oder sanft gekrümmten Flächen exakt und dort, wo sich die Fläche schnell krümmt, nur angenähert. **Gleichlauf** hält die höhere Seite der Oberfläche auf der rechten Seite des Fräsers.

## Wie gut die Bahnen sind

Was die Tests prüfen, mit geschlossenen Formeln oder einer unabhängigen Brute-Force-Suche der Werkzeugfläche:

- Die Spitzenhöhe unter dem Werkzeug ist exakt für einen Kugel-, Torus- und Schaftfräser auf Flächen, Kanten und Ecken des Netzes und nie über der wahren Höhe; bei parallelen Linien bleibt die Bahn innerhalb der Toleranz davon, ohne Überschnitt, der tiefer als das wäre.
- Bahnlängen auf einer geneigten Ebene stimmen mit der geschlossenen Formel überein; Rauhtiefen-Durchgänge auf einer Ebene liegen im verlangten Abstand, und der Grat zwischen ihnen hat die verlangte Höhe.
- Die Materialsimulation zeigt nach einem Durchgang keinen Überschnitt und zeigt die verbleibenden Grate.

Was diese Bahnen nicht sind: Sie sind grundlegende Schlichtdurchgänge, nicht der ganze Umfang dessen, was ein Produktionssystem bietet.

- Noch nicht umgesetzt: Wasserlinie (konstantes z), Eckenreinigung und Nachräumen, radiale und spiralförmige Durchgänge, Projektion einer Kurve auf die Oberfläche, Erkennung flacher Bereiche, Restbearbeitung, Kollisionsprüfungen für Halter und Schaft sowie jede Neigung des Werkzeugs.
- Das Werkzeugzentrum bleibt über dem Modell: Die Bahnen enden am Rand des Modells, statt darüber hinauszulaufen, daher wird eine senkrechte Wand direkt am Rand nicht bis zu ihrem Fuß geschlichtet.
- Unterschnitte werden nicht erkannt (es zählt die Oberfläche, auf die das Werkzeug von oben trifft).
- Das Modell ist das Netz des Kernels, daher folgen die Bahnen dem Netz (dessen Sehnentoleranz etwa 0.0002 der Diagonale des Bauteils beträgt), nicht der exakten Oberfläche.
- Das Schlichten eines großen Modells mit feiner Toleranz ergibt ein langes Programm mit vielen kurzen Bewegungen. Prüfen Sie die Ausgabe im Simulator Ihrer Maschine, bevor Sie schneiden.
