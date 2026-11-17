---
title: Skizzenabhängigkeiten und Bemaßungen
summary: Jede Abhängigkeit und Bemaßung, die eine PartCraft-Skizze haben kann, welche Elemente Sie dafür auswählen, ihr Symbol und wie sie beim Lösen wirkt.
keywords: Abhängigkeiten, Bedingungen, deckungsgleich, horizontal, vertikal, parallel, senkrecht, tangential, gleich, konzentrisch, Mittelpunkt, fixieren, Abstand, horizontaler Abstand, vertikaler Abstand, Radius, Durchmesser, Winkel, Symbole, Glyphen
from: 9831e7be
---

Abhängigkeiten legen fest, wie Geometrie relativ zu anderer Geometrie liegt. Bemaßungen legen Größen fest. Um eine Abhängigkeit hinzuzufügen, wählen Sie Elemente mit dem Auswahlwerkzeug ({{key:S}}) und klicken Sie deren Schaltfläche im rechten Bereich an; um eine Bemaßung hinzuzufügen, verwenden Sie das Werkzeug Bemaßung ({{key:D}}) oder die Bemaßungsschaltflächen im rechten Bereich. Wie Sie damit arbeiten: [Skizze vollständig definieren](topic:relations-dimensions).

„Kurve“ bedeutet unten einen Kreis oder einen Bogen. Der Ursprung zählt als Punkt.

## Abhängigkeiten

| Schaltfläche | Symbol | Auswahl | Wirkung |
|---|---|---|---|
| {{ui:• Deckungsgleich}} | • (nur angezeigt, wenn ausgewählt oder bei Problemen) | Zwei Punkte | Die Punkte fallen zusammen |
| {{ui:• Deckungsgleich}} | • | Ein Punkt und eine Linie | Der Punkt liegt auf der Linie (oder ihrer Verlängerung) |
| {{ui:• Deckungsgleich}} | • | Ein Punkt und eine Kurve | Der Punkt liegt auf dem Kreis oder Bogen |
| {{ui:H Horizontal}} | H | Eine Linie oder zwei Punkte | Die Linie liegt waagerecht, oder die beiden Punkte liegen auf gleicher Höhe |
| {{ui:V Vertikal}} | V | Eine Linie oder zwei Punkte | Die Linie steht senkrecht, oder die Punkte liegen übereinander |
| {{ui:∥ Parallel}} | ∥ | Zwei Linien | Die Linien verlaufen in dieselbe Richtung |
| {{ui:⊥ Senkrecht}} | ⊥ | Zwei Linien | Die Linien treffen sich im rechten Winkel |
| {{ui:T Tangential}} | T | Eine Linie und eine Kurve | Die Linie berührt die Kurve, ohne sie zu kreuzen |
| {{ui:T Tangential}} | T | Zwei Kurven | Sie berühren sich, außen oder innen, wie gezeichnet |
| {{ui:T Tangential}} | T | Ein Spline und eine Linie, ein Bogen oder ein Spline, der an einem seiner Enden ansetzt | Der Spline verlässt dieses Ende in der Richtung der anderen Kurve |
| {{ui:= Gleich}} | = | Zwei Linien | Gleiche Länge |
| {{ui:= Gleich}} | = | Zwei Kurven | Gleicher Radius |
| {{ui:◎ Konzentrisch}} | ◎ | Zwei Kurven | Gleicher Mittelpunkt |
| {{ui:◎ Konzentrisch}} | ◎ | Ein Punkt und eine Kurve | Der Punkt sitzt im Mittelpunkt der Kurve |
| {{ui:M Mittelpunkt}} | M | Ein Punkt und eine Linie | Der Punkt sitzt in der Mitte der Linie |
| {{ui:↔ Symmetrisch}} | ↔ | Zwei Punkte und eine Linie | Die Punkte sind Spiegelbilder an der Linie (Spiegeln erzeugt diese) |
| {{ui:⚓ Fixieren}} | ⚓ | Ein Punkt, eine Linie, eine Kurve oder ein Spline | Hält es genau dort, wo es jetzt liegt (bei einem Spline: seine Punkte) |

Linien schließen hier Mittellinien ein. Beim Zeichnen werden einige Abhängigkeiten für Sie hinzugefügt: Das Einrasten an einem Punkt macht ihn deckungsgleich, das Einrasten an einer Kurve setzt den Punkt auf sie, nahezu waagerechte oder senkrechte Linien erhalten H oder V, und ein Rechteck kommt mit seinen vier verbundenen Ecken, zwei H und zwei V.

**Fixieren** ist eine schnelle Art, etwas am Bewegen zu hindern, aber das Bauteil kann dann einer Maßänderung an anderer Stelle nicht folgen. Bemaßen Sie besser zum Ursprung.

## Bemaßungen

| Schaltfläche | Auswahl | Misst | Angezeigt als |
|---|---|---|---|
| {{ui:Abstand}} | Eine Linie | Ihre Länge | Abstand 40 |
| {{ui:Abstand}} | Zwei Punkte | Der geradlinige Abstand zwischen ihnen | Abstand 40 |
| {{ui:Abstand}} | Ein Punkt und eine Linie | Der Abstand vom Punkt zur Linie, rechtwinklig dazu | Abstand 40 |
| {{ui:Abstand}} | Zwei parallele Linien | Der Spalt zwischen ihnen | Abstand 40 |
| {{ui:Horizontaler Abstand}} | Zwei Punkte oder eine Linie | Nur der Abstand links–rechts | Horizontaler Abstand 40 |
| {{ui:Vertikaler Abstand}} | Zwei Punkte oder eine Linie | Nur der Abstand oben–unten | Vertikaler Abstand 40 |
| {{ui:Radius}} | Ein Kreis oder Bogen | Sein Radius | Radius R10 |
| {{ui:Durchmesser}} | Ein Kreis oder Bogen | Sein Durchmesser | Durchmesser ⌀20 |
| {{ui:Winkel}} | Zwei Linien, die nicht parallel sind | Der Winkel zwischen ihnen, 0 bis 180 Grad | Winkel 30° |

Mit dem Werkzeug Bemaßung wählt PartCraft die Art aus dem, was Sie anklicken, und danach, wo Sie die Zahl platzieren:

| Sie klicken | Sie erhalten |
|---|---|
| Eine Linie | Ihre Länge; bei einer schrägen Linie waagerecht, wenn die Zahl darüber oder darunter steht, senkrecht, wenn sie seitlich steht |
| Ein Kreis | Durchmesser |
| Ein Bogen | Radius |
| Zwei Punkte | Abstand; waagerecht oder senkrecht wie bei einer schrägen Linie |
| Ein Punkt und eine Linie | Abstand vom Punkt zur Linie |
| Zwei Linien | Winkel, oder der Abstand, wenn sie parallel sind |
| Ein Punkt und ein Kreis | Nichts: „Diese Elemente können nicht zusammen bemaßt werden.“ Bemaßen Sie stattdessen zum Mittelpunkt des Kreises |

**Versatz** (angezeigt als Abstand) entsteht mit dem Werkzeug {{ui:Versetzen}}: Es hält eine kopierte Linie im Abstand parallel oder einen kopierten Bogen bzw. Kreis konzentrisch mit einem Radius, der um diesen Betrag größer oder kleiner ist. Die übrigen Teile desselben Versatzes tragen eine **O**-Abhängigkeit und folgen der einen Versatz-Bemaßung. Siehe [Splines, Stutzen, Versetzen und weitere Skizzenwerkzeuge](topic:sketch-tools).

Bemaßungswerte sind Millimeter (oder Grad) und nie negativ. Radius und Durchmesser müssen größer als null sein. Ein Wert von 0 ist für Abstände erlaubt: Zwei Punkte im Abstand 0 sind deckungsgleich.

## Wie das Lösen wirkt

- **Geringste Bewegung.** Wenn ein Wert sich ändert, bewegt der Löser die Geometrie so wenig wie möglich. Eine Linie, deren Länge sich ändert, wächst an beiden Enden gleichmäßig, wenn kein Ende festgehalten wird.
- **Kein Umklappen.** Abstände von einem Punkt zu einer Linie, waagerechte und senkrechte Abstände, Winkel und Tangentialität merken sich, auf welcher Seite sie erstellt wurden. Eine Wertänderung klappt die Geometrie nie auf die andere Seite.
- **Konflikte lassen alles unverändert.** Wenn sich Abhängigkeiten widersprechen, bleibt die Skizze genau so, wie sie war, und die widersprüchlichen werden rot.
- **Überflüssige Abhängigkeiten** (bereits durch andere impliziert) werden in der Statusleiste genannt („ist bereits impliziert. Löschen Sie sie.“), und das Feature wird trotzdem erstellt, mit einer Warnung.
- **Tangentiale Übergänge.** Wo ein Verrundungsbogen an einem gemeinsamen Endpunkt auf seine Linien trifft, wird die Tangentialität in einer Form gelöst, die dort eindeutig bleibt, sodass Skizzenverrundungen nicht als überbestimmt gelten.

## Noch nicht umgesetzt

Kollineare, koradiale und Durchstoßabhängigkeiten; ein Punkt auf einem Spline; treibende (Referenz-)Bemaßungen; Ordinaten- und Bogenlängenbemaßungen; Gleichungen zwischen Bemaßungen. Verwenden Sie Parallel plus einen Abstand von 0 für kollineare Linien.
