---
title: Bezugsebenen, Achsen und Punkte
summary: Ebenen versetzt zu einer Fläche, im Winkel, durch drei Punkte, mittig, tangential zu einem Zylinder, rechtwinklig zu einer Kante oder durch eine Kante und einen Punkt erzeugen; Achsen; Punkte an Kantenmitten, Schnittpunkten und Ebenenecken; auf ihnen skizzieren und sie als Drehachsen, Musterrichtungen und Spiegelebenen verwenden.
keywords: Bezug, zwischen Objekten, Mittelpunkt, Schnittpunkt, Ebene durch Kante und Punkt, Bezugsebene, Arbeitsebene, Konstruktionsebene, versetzte Ebene, Ebene im Winkel, Mittelebene, Tangentialebene, Bezugsachse, Konstruktionsachse, Bezugspunkt, Arbeitspunkt, auf Ebene skizzieren
from: e7eb6fc1
---

Bezugsgeometrie ist das Gerüst, auf dem Sie Features aufbauen: eine **Ebene**, auf die Sie skizzieren, wo keine Fläche vorhanden ist, eine **Achse**, um die Sie drehen oder ein Muster erzeugen, ein **Punkt**, an dem eine Extrusion endet. Sie hat kein eigenes Material. Ebenen werden in der Ansicht als helle Quadrate angezeigt, Achsen als gestrichelte Linien, Punkte als kleine Kreuze. Alle drei erscheinen im Verlauf und folgen dem, woraus sie erzeugt wurden, wenn Sie ein Maß weiter oben ändern.

Sie befinden sich im Menü {{ui:Mehr}} der Features-Gruppe: {{ui:Ebene}}, {{ui:Achse}}, {{ui:Punkt}}.

## Eine Ebene erzeugen

1. Klicken Sie auf eine ebene Fläche oder eine Grundebene im Verlauf, um davon auszugehen (optional).
2. Klicken Sie auf {{ui:Mehr}} und dann auf {{ui:Ebene}}. Sie beginnt als versetzte Ebene, 20 % der Bauteilgröße von dem entfernt, was Sie gewählt haben (oder von der Top-Ebene).
3. Wählen Sie im rechten Bereich den **Typ** und seine Bezüge:

| Typ | Bezüge | Werte |
|---|---|---|
| Versetzt zu einer Ebene oder Fläche | **Von Ebene** | **Abstand (mm)**, negativ für die andere Seite |
| Im Winkel, durch eine Kante oder Achse | **Von Ebene**, **Drehen um** (eine Weltachse, ein Achsenfeature oder eine gewählte gerade Kante) | **Winkel (°)** |
| Durch drei Punkte | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Mittelebene zwischen zwei | **Erste Ebene**, **Zweite Ebene** (parallel: auf halbem Weg; sich schneidend: die Ebene, die den Winkel halbiert) | — |
| Tangential zu einem Zylinder | **Zylinder** (eine zylindrische Fläche), **Nächster Punkt** (welche Seite) | — |
| Rechtwinklig zu einer Kante, an einem Punkt | **Kante**, **Am Punkt** (die Ebene geht durch den Kantenpunkt, der ihr am nächsten liegt, und ebenfalls durch den Punkt) | — |
| Durch eine Kante und einen Punkt | **Gerade Kante** (oder eine Achse), **Durch Punkt** | — |
| Rechtwinklig zu einer Kante in ihrer Mitte | **Kante** (auf halber Länge, dort rechtwinklig zu ihr), oder ohne Kante **Punkt 1** und **Punkt 2** (die Ebene auf halbem Weg zwischen ihnen) | — |

Jeder Bezug hat eine Schaltfläche **Wählen**: Klicken Sie sie an und dann in die Ansicht. Ein Ebenenfeld nimmt eine Grundebene, eine Bezugsebene oder eine ebene Fläche auf. Ein Punktfeld nimmt das Ende einer Kante (klicken Sie nahe an diesem Ende), ein Punkt-Feature oder eine Stelle auf einer Fläche. Ein Kantenfeld nimmt eine Kante. {{key:Esc}} bricht eine Auswahl ab. **Normale umkehren** dreht die Ebene um (in welche Richtung eine Skizze auf ihr zeigt).

In dieser Version antwortet ein Feld, das eine Kante oder eine Zylinderfläche braucht (Tangential zu einem Zylinder und die Kantenfelder), mit „noch nicht umgesetzt“. Verwenden Sie stattdessen Punkte oder eine Achse.

## Auf einer Ebene skizzieren

Wählen Sie die Ebene aus (im Verlauf oder durch Klicken auf ihr Quadrat in der Ansicht) und klicken Sie auf {{ui:Skizze}} oder auf **Darauf skizzieren** in ihrem Bereich. Die Skizze folgt der Ebene: Ändern Sie den Abstand der Ebene, bewegen sich auch die Skizze und jedes Feature darauf mit.

## Achsen und Punkte

- {{ui:Achse}}: durch zwei Punkte, die Achse eines Zylinders oder Kegels, dort, wo sich zwei Ebenen schneiden, entlang einer geraden Kante (oder der Achse einer kreisförmigen Kante) oder rechtwinklig zu einer Fläche durch einen Punkt.
- {{ui:Punkt}}: an Koordinaten, an einem Eckpunkt oder Skizzenpunkt oder im Zentrum einer kreisförmigen Kante, dazu die Punkte „zwischen Objekten“:

| Punkttyp | Bezüge |
|---|---|
| Mitte einer Kante (oder zwischen zwei Punkten) | **Kante** (auf halber Länge, auch für Bögen und Kurven), oder ohne Kante **Punkt 1** und **Punkt 2** |
| Wo eine Kante oder Achse eine Fläche oder Ebene trifft | **Kante** (gerade oder gekrümmt) oder eine Achse, und **Trifft Ebene** (eine Ebene oder ebene Fläche) oder **Oder eine Fläche** (eine ebene Fläche oder ein Zylinder). Ein Kreis schneidet eine Ebene zweimal, und eine Linie geht zweimal durch einen Zylinder: **Der andere Schnittpunkt** nimmt den zweiten |
| Wo sich drei Ebenen treffen | **Erste**, **Zweite** und **Dritte Ebene** (Ebenen oder ebene Flächen) |

Jede dieser Optionen schlägt mit einer einfachen Meldung fehl, wenn ihre Bezüge nicht passen: eine Linie parallel zur Ebene, eine Linie, die den Zylinder verfehlt, eine Kante, die die Ebene nicht erreicht, drei Ebenen, die sich nicht in einem Punkt treffen, ein Punkt auf der Linie, mit der eine Ebene festgelegt werden soll.

Verwenden Sie sie in anderen Features:

| Wo | Wie |
|---|---|
| Drehung | **Achse**: Wählen Sie das Achsenfeature aus der Liste (es muss in der Ebene der Skizze liegen) |
| Kreismuster | **Achse**: das Achsenfeature |
| Lineares Muster | **Richtung**: ein Achsenfeature oder eine Ebene (ihre Normale) |
| Spiegeln | **Spiegelebene**: eine Bezugsebene |
| Extrusion | **Ende**: Bis zu Fläche oder Ebene, Bis zu Eckpunkt (ein Punkt-Feature). In dieser Version noch nicht umgesetzt (sie benötigt einen exakten Kernel) |
| Formschräge | **Neutrale Ebene** |

## Wenn ein Bezug verschwunden ist

Eine Ebene, die aus einer Fläche erzeugt wurde, die nicht mehr existiert, schlägt mit einer Meldung fehl, die sie nennt, zum Beispiel „Die Fläche, auf der sie liegt, ist aus Extrude1 verschwunden.“ Sie wird nie auf eine andere Fläche verschoben. Die Skizzen und Features darauf werden als „noch nicht vorhanden“ markiert, bis Sie einen neuen Bezug wählen. Der Rest des Bauteils bleibt unverändert.

:::note
In dieser Version wird jedes Bauteil mit dem Mesh-Kernel aufgebaut. Er erzeugt Ebenen, Achsen und Punkte aus Grundebenen, ebenen Flächen aus einer Extrusion oder Drehung, Skizzenpunkten, Koordinaten und anderen Bezugsfeatures. Alles, was eine Kante, das Ende einer Kante oder eine gekrümmte Fläche braucht, benötigt einen exakten Kernel: in dieser Version noch nicht umgesetzt („Es verwendet eine Fläche oder Kante des Volumenkörpers, die nur ein exakter Kernel finden kann: in dieser Version noch nicht umgesetzt.“).
:::
