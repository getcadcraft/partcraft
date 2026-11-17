---
title: Splines, Stutzen, Versetzen und weitere Skizzenwerkzeuge
summary: Splines mit Anpassungspunkten und mit Kontrollpunkten zeichnen, Kurven stutzen und dehnen, eine Kette versetzen, an einer Mittellinie spiegeln, Polygone und Langlöcher hinzufügen, Skizzengeometrie mustern und Kanten des Modells projizieren.
keywords: Spline, Anpassungspunkt, Kontrollpunkt, B-Spline, NURBS, Kurve, Stutzen, Dehnen, Versetzen, Spiegeln, symmetrisch, Polygon, Sechseck, Langloch, Muster, lineares Muster, Kreismuster, projizieren, Kante projizieren, einbeziehen, Elemente umwandeln
from: 3ecb166a
---

Diese Werkzeuge arbeiten in einer offenen Skizze. {{ui:Spline}} und {{ui:Stutzen}} sind in der Symbolleiste. Die anderen liegen unter {{ui:Mehr}} am Ende der Skizzenwerkzeuge. Jedes Werkzeug ist ein Rückgängig-Schritt, und {{key:Esc}} beendet es. Zu den Grundzeichenwerkzeugen siehe [Ihre erste Skizze zeichnen](topic:sketch-basics).

## Splines

Ein Spline ist eine glatte Kurve. Es gibt zwei Arten.

| Werkzeug | Taste | So zeichnen Sie |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klicken Sie die Punkte an, die die Kurve durchläuft. Beenden Sie mit {{key:Enter}}, {{key:Esc}}, einem Rechtsklick oder einem Doppelklick. Klicken Sie den ersten Punkt erneut an, um den Spline zu schließen |
| {{ui:Spline mit Kontrollpunkten}} (unter {{ui:Mehr}}) | | Klicken Sie die Kontrollpunkte an. Die Kurve wird zu ihnen hingezogen, berührt aber nur den ersten und den letzten. Das gestrichelte Kontrollpolygon wird beim Zeichnen und danach angezeigt |

- **Die Punkte sind Skizzenpunkte.** Ziehen Sie sie, oder geben Sie ihnen Abhängigkeiten und Bemaßungen wie jedem anderen Punkt. Der erste Punkt eines Splines kann auf ein Linienende einrasten, was beide mit einer deckungsgleichen Abhängigkeit verbindet.
- **Tangential an einem Ende.** Wählen Sie eine Linie, einen Bogen oder einen Spline aus, der an einem Ende des Splines ansetzt, dann zusätzlich den Spline, und wählen Sie {{ui:T Tangential}}. Die Endrichtung des Splines folgt dann der Linie. Eine Tangentialität abseits der Splineenden wird abgelehnt: „Eine Tangente an einen Spline braucht die Linie, den Bogen oder den Spline an einem seiner Enden.“
- **Enden.** Ohne Tangentenabhängigkeit sind die Enden eines Anpassungspunkt-Splines natürlich (keine Krümmung am äußersten Ende). Die Kurve ist kubisch und läuft durch jeden Punkt; ihr Abstand ergibt sich aus den Abständen zwischen den Punkten.
- **Geschlossene Splines** bilden für sich ein Profil. Offene Splines verbinden Linien und Bögen zu einer geschlossenen Schleife wie jede andere Kurve.
- Wenn Sie einen Punkt innerhalb eines Splines löschen, wird dieser Punkt entfernt und der Spline bleibt erhalten, solange er mindestens zwei Punkte hat (drei, wenn er geschlossen ist).

Extrusion und Drehung erstellen den Spline mit dem Netzkernel aus kurzen geraden Stücken (echte Kurven brauchen einen exakten Kernel: in dieser Version noch nicht umgesetzt). Der DXF-Export schreibt einen Spline als Polylinie, die innerhalb von 0.01 mm an der Kurve bleibt, weil DXF R12 keine Spline-Entität kennt.

## Stutzen und Dehnen

| Werkzeug | Taste | So |
|---|---|---|
| {{ui:Stutzen}} | {{key:T}} | Zeigen Sie auf eine Kurve: Das Stück, das entfallen würde, wird bis zu den nächsten Kreuzungen rot angezeigt. Klicken Sie, um es zu entfernen. Eine Kurve, die nichts kreuzt, wird ganz entfernt |
| {{ui:Dehnen}} (unter {{ui:Mehr}}) | {{key:E}} | Klicken Sie nahe am Ende auf eine Linie oder einen Bogen, um ihn zu verlängern. Er wächst bis zur nächsten Kurve, die er trifft. „Für dieses Ende gibt es nichts, was es erreichen kann.“ erscheint, wenn nichts im Weg ist |

Stutzen und Dehnen arbeiten an Linien, Bögen, Kreisen und Splines (Dehnen: Linien und Bögen).

- Ein gestutzter **Kreis** wird zu einem Bogen. Seine Radius- oder Durchmesserbemaßung wandert auf den Bogen.
- Wenn Sie die Mitte einer Linie stutzen, bleiben zwei Linien auf derselben geraden Linie. Wenn Sie die Mitte eines Bogens stutzen, bleiben zwei Bögen mit gleichem Mittelpunkt und einer Gleich-Abhängigkeit.
- Ein gestutzter **Spline** wird zu einem Kontrollpunkt-Spline, der der alten Kurve genau folgt. Eine Tangentenabhängigkeit an einem erhaltenen Ende bleibt bestehen.
- Das neue Ende wird auf die Kurve gesetzt, die es abgeschnitten hat (auf die Linie, den Bogen oder den Kreis, oder deckungsgleich mit deren Ende). Splines können keinen Punkt halten, daher fügt ein schneidender Spline keine Abhängigkeit hinzu.

**Abhängigkeiten, die nicht mehr passen, werden entfernt**, und die Statusleiste sagt, wie viele. Zum Beispiel wird eine Längenbemaßung auf einer gestutzten Linie entfernt, waagerechte oder parallele Abhängigkeiten bleiben aber bestehen.

## Versetzen

1. Wählen Sie {{ui:Versetzen}} unter {{ui:Mehr}} oder drücken Sie {{key:O}}.
2. Klicken Sie eine Linie, einen Bogen, einen Kreis oder einen Spline an. Ihre ganze Kette wird hervorgehoben: alle Kurven, Ende an Ende verbunden, bis zu einem Punkt, an dem drei oder mehr zusammentreffen. Um nur einen Teil einer Kette zu versetzen, wählen Sie zuerst diese Kurven aus, dann Versetzen, und klicken Sie eine davon an.
3. Bewegen Sie den Zeiger auf die Seite, wohin die Kopie kommt. Eine gestrichelte Vorschau folgt. Drücken Sie {{key:B}} für beide Seiten.
4. Klicken Sie, geben Sie den Abstand ein und drücken Sie {{key:Enter}}.

Linien und Bögen werden genau versetzt. Ecken werden verlängert oder gestutzt, bis sie sich treffen. Die Kopie hat eine **Versatz**-Bemaßung, und die anderen Teile folgen ihr: Doppelklicken Sie auf die Bemaßung, um die ganze Kopie zu ändern. Ein Abstand, der für die Kette zu groß ist, wird abgelehnt, zum Beispiel: „Dieser Abstand ist für diese Kette zu groß: Eine Seite würde sich nach innen stülpen.“

Ein **Spline** wird durch einen neuen Anpassungspunkt-Spline innerhalb von 0.001 mm vom echten Versatz versetzt. Diese Kopie ist festgelegt: Sie folgt späteren Änderungen nicht und hat keine Versatz-Bemaßung. Ein Spline in einer Kette braucht glatte (tangentiale) Übergänge an seinen Enden.

## Spiegeln

1. Wählen Sie mit der Auswahl, was gespiegelt werden soll.
2. Wählen Sie {{ui:Spiegeln}} unter {{ui:Mehr}} oder drücken Sie {{key:M}}.
3. Klicken Sie die Linie oder Mittellinie an, an der gespiegelt wird.

Jeder gespiegelte Punkt erhält eine **Symmetrisch**-Abhängigkeit zu seinem Original, sodass die Kopie folgt, wenn sich das Original ändert. Punkte auf der Spiegellinie werden gemeinsam genutzt, und gespiegelte Kreise erhalten eine Gleich-Abhängigkeit. Wenn nichts ausgewählt war, klicken Sie die zu spiegelnden Elemente an, drücken {{key:Enter}} und klicken dann die Spiegellinie an.

## Polygone und Langlöcher

| Werkzeug | So |
|---|---|
| {{ui:Polygon}} | Klicken Sie den Mittelpunkt an, dann eine Ecke, dann geben Sie die Anzahl der Seiten ein (3 bis 64). Die Seiten sind gleich lang, und die Ecken liegen auf einem Konstruktionskreis. Bemaßen Sie den Kreis, um das Polygon in der Größe festzulegen |
| {{ui:Langloch}} | Klicken Sie den Mittelpunkt des einen Endes an, dann den des anderen Endes, dann klicken Sie, um die Breite festzulegen. Zwei Linien, tangential an zwei gleich große Halbkreise |

## Skizzenmuster

Wählen Sie zuerst die Geometrie aus, dann:

- {{ui:Lineares Muster}}: Klicken Sie einen Startpunkt an, dann, wohin die erste Kopie kommt, dann geben Sie die Anzahl der Kopien ein (einschließlich des Originals).
- {{ui:Kreismuster}}: Klicken Sie den Mittelpunkt an, dann geben Sie die Anzahl der Kopien ein, gleichmäßig über eine volle Drehung verteilt.

Die Kopien bringen die Abhängigkeiten zwischen den ausgewählten Elementen mit (ein Kreismuster lässt waagerechte und senkrechte aus). Die Kopien sind nicht mit dem Original verbunden: Ändern Sie eine, bleiben die anderen, wie sie sind.

## Kanten des Bauteils projizieren

1. Wählen Sie {{ui:Kante projizieren}} unter {{ui:Mehr}}.
2. Klicken Sie eine gerade oder kreisförmige Kante des Bauteils hinter der Skizze an.

Die Kante wird genau auf die Skizzenebene kopiert und festgelegt (Fixieren-Abhängigkeit). Sie folgt späteren Änderungen am Bauteil nicht. Drücken Sie {{key:Q}}, um sie zur Konstruktionsgeometrie zu machen. Ein zur Skizzenebene geneigter Kreis würde sich als Ellipse projizieren, daher wird er abgelehnt. Ebenso Freiformkanten und Kanten, die senkrecht aus der Skizze zeigen. Das Projizieren braucht einen exakten Kernel: in dieser Version noch nicht umgesetzt.
