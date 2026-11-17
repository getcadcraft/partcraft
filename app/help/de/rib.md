---
title: Rippen und Knotenbleche
summary: Versteifen Sie ein Bauteil mit einer Rippe, die als eine Linie gezeichnet wird: Sie füllt von der Linie bis zu den Wänden, mit einer festen Dicke quer zur Skizzenebene, auf der Seite, die Sie wählen.
keywords: Rippe, Knotenblech, Steg, Versteifung, Strebe, Halterung, Eckstütze, dünne Wand, verstärken
from: 5c218881
---

:::note
**Noch nicht umgesetzt in dieser Version.** Die Rippe braucht einen exakten Geometrie-Kernel, den diese Version von PartCraft nicht hat: Sie erstellt jedes Bauteil mit dem Mesh-Kernel. [Was noch nicht umgesetzt ist](topic:not-built-yet) sagt, was stattdessen zu tun ist. Der Rest dieser Seite beschreibt die Rippe so, wie sie mit einem exakten Kernel funktioniert.
:::

Eine **Rippe** (oder ein Knotenblech) ist eine dünne Wand, die ein Bauteil versteift, etwa das Dreieck in der Ecke einer L-Halterung. Sie zeichnen nur ihre freie Kante: PartCraft füllt den Raum zwischen dieser Linie und den Wänden. Dafür braucht sie den **exakten Kernel** (siehe [Der Mesh-Kernel](topic:solid-kernels)).

## Eine Rippe hinzufügen

1. Erstellen Sie eine Ebene durch die Mitte der Stelle, an der die Rippe hinkommt (bei einer L-Halterung mit 40 Tiefe eine Ebene 20 vor ihrer Skizze: siehe [Bezugsebenen, Achsen und Punkte](topic:reference-geometry)).
2. Skizzieren Sie darauf **eine Linie** von Wand zu Wand — oder einige Linien Ende an Ende für eine gebogene Rippenkante. Die Linie darf kurz vor den Wänden enden: Ihre Enden werden verlängert, bis sie auf sie treffen.
3. Wählen Sie die Skizze und wählen Sie {{ui:Mehr}} › {{ui:Rippe}}.

Die Rippe füllt von der Linie zu den Wänden auf der Seite zur Mitte des Bauteils, sodass ein Knotenblech in der inneren Ecke landet. Ist diese Seite offen und die andere geschlossen, dreht PartCraft sie um und sagt es Ihnen.

## Einstellungen

- **Dicke (mm)** ist die Dicke der Rippe quer zur Skizzenebene. Sie kann von einem Parameter gesteuert werden.
- **Dicke** (die Auswahl darunter): **Auf der Skizzenebene zentriert**, **Vor der Ebene** (entlang ihrer Normalen) oder **Hinter der Ebene**.
- **Umkehren** füllt die andere Seite der Linie.

## Meldungen

- **Auf dieser Seite trifft die Kante der Rippe nie auf den Körper** — auf dieser Seite schließt sich nichts: Markieren oder entfernen Sie die Markierung bei **Umkehren**, oder verschieben Sie die Linie, sodass Wände sie begrenzen.
- **Eine Rippe braucht eine offene Kette aus Linien in ihrer Skizze** — die Skizze hat eine geschlossene Form, einen Bogen oder eine Spline oder Linien, die nicht Ende an Ende verbunden sind.
- **Die Kante der Rippe verläuft dort im Körper** — die Linie liegt im Volumenkörper; zeichnen Sie sie im offenen Raum zwischen den Wänden.
