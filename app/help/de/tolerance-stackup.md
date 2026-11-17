---
title: Toleranzketten
summary: Wählen Sie eine Kette aus Flächen durch die Teile einer Baugruppe und sehen Sie, wie stark der Spalt an ihrem Ende schwanken kann, im ungünstigsten Fall und nach RSS, mit den Maßen, die am meisten zählen, an erster Stelle gereiht.
keywords: Toleranzkette, Toleranzanalyse, Maßkette, Schleife, Spalt, Spiel, ungünstigster Fall, RSS, Wurzel aus der Summe der Quadrate, statistische Tolerierung, Beiträge, Sensitivität, GD&T, Allgemeintoleranz, ISO 2768
from: cbdb3159
---

Eine **Toleranzkette** addiert die Maße entlang einer Kette durch mehrere Teile, um zu sehen, wie stark ein Ergebnis, meist ein Spalt, schwanken kann, wenn jedes Teil innerhalb seiner Toleranzen gefertigt wird.

## Die Kette wählen

1. Öffnen Sie eine Baugruppe und wählen Sie {{ui:Toleranzkette}} in der Gruppe Baugruppe. Eine Karte öffnet sich über der Ansicht.
2. Wählen Sie, entlang von was die Kette gemessen wird: X, Y oder Z der Baugruppe, oder {{ui:Die Normale der ersten Fläche}}.
3. Drücken Sie {{ui:Die Kette wählen}} und klicken Sie die Flächen an, durch die die Kette verläuft, **in Reihenfolge**: Beginnen Sie an einer Seite des Spalts, gehen Sie durch die Teile und enden Sie an der anderen Seite des Spalts.
4. Drücken Sie {{ui:Fertig}} oder Enter. Backspace nimmt den letzten Klick zurück; {{key:Esc}} bricht ab.

Zwei Klicks auf dasselbe Teil ergeben das Maß dieses Teils (seine Entfernung entlang der Kette). Ein Klick auf ein anderes Teil erzeugt eine **Schnittstelle** zwischen ihnen, dort, wo die Teile sich berühren; sie hat keine Toleranz, außer Sie geben eine ein. Die Glieder addieren oder subtrahieren je nach Verlauf der Kette, und sie schließen die Schleife: Der Nennspalt ist das, was das Modell zeigt.

Ein Glied können Sie auch von Hand mit {{ui:Ein Glied hinzufügen}} anlegen und sein Nennmaß, seine Toleranz und ob es addiert (+) oder subtrahiert (−) eingeben.

## Jedem Glied seine Toleranz geben

Jedes Glied hat ein **oberes** und ein **unteres** Abmaß (zum Beispiel +0.1 und −0.05). **Toleranz aus** füllt sie aus dem Teil:

- **Allgemeintoleranz**: das Feld Toleranz im Schriftfeld des Teils (siehe [Zeichnung als PDF](topic:drawing-pdf)), wenn es ±0.1, +0.2/-0.1 oder ISO 2768-f, -m, -c oder -v zeigt (ISO 2768-1 Längenmaße, je nach Größe des Glieds). Die Allgemeintoleranz eines Teils wird sofort verwendet, wenn die Kette gewählt wird.
- **GD&T**: jeder Toleranzrahmen auf der Zeichnung des Teils. Lage-, Profil- und Lauftoleranzzonen ergeben ± die halbe Toleranz. Eine Form- oder Richtungstoleranz liegt meist bereits innerhalb der Maßtoleranz: Fügen Sie sie nur dort hinzu, wo die Kette die kontrollierte Fläche trifft. Mit Ⓜ oder Ⓛ wird die Zone mit ihrem angegebenen Maß genommen; die Bonustoleranz wird nicht gezählt.
- **Eingegeben**: beliebige Zahlen, die Sie eingeben.

## Die Ergebnisse lesen

- **Spalt, Nennmaß** und, wenn die Toleranzen ungleich sind, **Spalt, Mittelwert**: +0.2/−0 und +0/−0.1 verschieben die Mitte des Bereichs.
- **Ungünstigster Fall**: jede Toleranz gleichzeitig an ihrer Grenze. Der Spalt kann nie außerhalb davon liegen.
- **RSS** (Wurzel aus der Summe der Quadrate): Jede Toleranz wird als drei Standardabweichungen einer Normalverteilung genommen und als Quadratwurzel der Summe ihrer Quadrate addiert. Die meisten Baugruppen liegen deutlich innerhalb des ungünstigsten Falls; dies ist die übliche Schätzung für in Serie gefertigte Teile.
- Geben Sie **Spalt mindestens** und **Spalt höchstens** an, um zu sehen, ob der ungünstigste Fall immer innerhalb bleibt, und wie viele von einer Million Baugruppen nach RSS außerhalb erwartet werden.
- Die Spalte **#** reiht die Glieder nach ihrem **Anteil** am RSS: Ziehen Sie die ersten enger an, um den größten Unterschied zu machen.

{{ui:Save CSV}} schreibt die Glieder, ihre Anteile und die Ergebnisse. Die Toleranzketten werden in der Baugruppendatei gespeichert, und jede Änderung ist ein Schritt für {{key:Mod+Z}}.

:::note
Eine Toleranzkette verläuft in eine Richtung. Sie folgt keinen Winkeln oder Wendungen entlang der Kette, und sie liest keine Maßtoleranzen aus den Skizzen: Geben Sie diese als eingegebene Toleranzen oder über das Schriftfeld an.
:::
