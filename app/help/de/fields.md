---
title: Felder: Formen als Abstände
summary: Was ein Feld ist (eine Form, gespeichert als Abstand zu ihrer Oberfläche), wie man eines aus Grundkörpern, booleschen Operationen, Gittern und Minimalflächen in einem Skript baut, wie es zu einem Körper wird und warum dasselbe Skript immer dieselben Bytes ergibt.
keywords: feld, vorzeichenbehafteter abstand, sdf, voxel, gyroid, tpms, gitter, boolesch, versatz, schale, verschmelzen, dual contouring, deterministisch, wasserdicht, mannigfaltig, brick
from: faab7480
---

Ein **Feld** beschreibt eine Form über den Abstand jedes Punkts zu ihrer Oberfläche: negativ innen, null auf der Oberfläche, positiv außen. Eine Kugel mit Radius 5 ist „der Abstand zum Mittelpunkt minus 5“. Formen werden kombiniert, indem man mit Abständen rechnet: Die Vereinigung ist der kleinere von beiden Werten, die Schnittmenge der größere, und das Abziehen einer Form von einer anderen ist der größere Wert aus der ersten und dem negierten Wert der zweiten. Eine Form um 1 mm zu vergrößern heißt, 1 vom Abstand abzuziehen; eine hohle Wand ist der Abstand, umgeklappt.

Darum eignen sich Felder gut für Gitter, Kanäle und abgestufte Wände: Die Oberfläche eines Gyroids ist „die Summe der Sinusse ist null“, und eine Wand, die sich über das Bauteil von 1 auf 3 mm verdickt, ist eine Zahl, die sich über das Bauteil hinweg ändert.

## Vom Feld zum Körper

`to_body(field, h)` tastet das Feld auf einem Raster von Punkten ab, die `h` Millimeter auseinanderliegen, behält nur die Punkte nahe der Oberfläche (ein dünnes Raster aus 8 × 8 × 8 Bricks) und baut die Oberfläche per **Dual Contouring**: ein Eckpunkt pro Oberflächenzelle, dort platziert, wo sich die Oberflächenebenen schneiden, sodass eine scharfe Kante bis auf ein Voxel scharf bleibt. Die Oberfläche ist geschlossen, und jede Kante wird von genau zwei Dreiecken geteilt; der Bericht sagt das. Ein Merkmal, das dünner als etwa drei Voxel ist, kann sich abschnüren; dann meldet der Bericht, dass der Körper kein geschlossener Volumenkörper ist, statt es zu verbergen.

Die Voxelgröße bestimmt die Genauigkeit: Das Volumen einer Kugel mit 25 Voxeln Durchmesser liegt innerhalb weniger Hundertstel Prozent, und eine Wand ist nur so genau wie ihre Voxel. Je gröber das Raster, desto schneller läuft es.

## Immer dieselben Bytes

Ein Feld hat keine Uhr und keine Zufallszahl. Sinus und Kosinus eines Gyroids sowie jede Exponential-, Logarithmus- und Potenzfunktion der Bibliothek werden aus einfacher Arithmetik berechnet, damit Node, Chrome, Firefox und Safari dieselben Bits liefern. Das Raster wird in fester Reihenfolge durchlaufen, daher ergibt dasselbe Skript mit denselben Eingaben byte-identische Netze und Datenblätter, auf jedem Computer und bei jeder Anzahl von Worker-Threads. Das ist getestet, einschließlich eines Vergleichs zwischen Browser und Node.

## Wie es weitergeht

[Einen Generator schreiben](topic:write-a-generator) baut ein Bauteil mit Feldern; [Die Ingenieurbibliothek](topic:engineering-library) dimensioniert es.
