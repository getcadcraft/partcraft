---
title: Löcher und Senkungen an Skizzenpunkten bohren
summary: Punkte in einer Skizze auf einer Fläche setzen, einfache Bohrungen, Senkungen, Kegelsenkungen oder Gewindebohrungen (ISO metrisch) an jedem Punkt erzeugen, Durchmesser und Tiefe festlegen und Bohrungen korrigieren, die in die falsche Richtung gehen.
keywords: Bohrung, Bohrassistent, Bohrer, modelliertes Gewinde, 3D-Druck, Senkung, cbore, Kegelsenkung, csink, Gewindebohrung, Gewinde, Kernlochbohrer, metrisches Gewinde, M6, durchgehend, Sackloch, Schraubenloch, Punkte, Lochmittelpunkte
from: 8e1eef83
---

{{ui:Hole}} bohrt eine Bohrung an jedem losen Punkt einer Skizze. Ein loser Punkt ist einer, der mit dem Punktwerkzeug erstellt wurde, nicht das Ende einer Linie oder der Mittelpunkt eines Kreises.

## Bohrungen in einer Fläche

1. Klicken Sie die ebene Fläche an, in die gebohrt werden soll, und wählen Sie {{ui:Sketch on this face}}.
2. Drücken Sie {{key:P}} und klicken Sie dorthin, wo jede Bohrung hin soll. Bemaßen Sie die Punkte von den Kanten oder dem Ursprung aus, wenn ihre Position wichtig ist (siehe [Eine Skizze vollständig bestimmen](topic:relations-dimensions)).
3. Wählen Sie {{ui:Exit}}.
4. Wählen Sie {{ui:Hole}}.

Bohrungen gehen durch das Bauteil, 6 mm im Durchmesser. Das rechte Panel zeigt **Bohrungen**: wie viele erstellt wurden, „eine pro Skizzenpunkt“.

**Eine Bohrung, schnell:** Klicken Sie die ebene Fläche an, wo die Bohrung hin soll, und wählen Sie {{ui:Hole here}} im rechten Panel. PartCraft fügt eine Skizze auf der Fläche mit einem Punkt an der Klickstelle hinzu und eine Bohrung durch das Bauteil, in einem Schritt. Tippen Sie sofort eine Zahl und drücken Sie {{key:Enter}} für ihren Durchmesser. Um sie genau zu platzieren, öffnen Sie die neue Skizze und bemaßen Sie den Punkt.

**Welche Skizze verwendet wird:** Die Skizze, die Sie gerade geschlossen haben, oder die ausgewählte; sonst die jüngste unbenutzte Skizze mit losen Punkten. Gibt es keine: „Zuerst eine Skizze mit Punkten erstellen, wo die Bohrungen hin sollen (Skizze auf einer Fläche, dann Punkt).“

## Einstellungen

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Typ** | Einfach, Senkung, Kegelsenkung, Gewinde (ISO metrisch) | Einfach |
| **Durchmesser (mm)** | Der Durchmesser der Bohrung | 6 |
| **Durchgehend** | Angehakt: ganz durch das Bauteil. Abwählen für ein Sackloch | Angehakt |
| **Tiefe (mm)** | Angezeigt, wenn Durchgehend abgewählt ist | 10 |
| **Senkungs-⌀** | Angezeigt bei Senkung: der Durchmesser der breiteren Vertiefung | 11 |
| **Senkungstiefe** | Angezeigt bei Senkung | 6 |
| **Richtung umkehren** | Bohrt zur anderen Seite der Skizzenebene | Aus |

Bohrungen gehen senkrecht zur Skizzenebene in das Material. Die Tiefe eines Sacklochs wird von der Skizzenebene aus gemessen; sein Boden ist eben.

## Eine Senkschraubenbohrung

1. Erstellen Sie die Bohrungen wie oben.
2. Setzen Sie **Typ** auf **Senkung**.
3. Setzen Sie **Durchmesser (mm)** auf `6.6` (Spiel für eine M6-Schraube), **Senkungs-⌀** auf `11` und **Senkungstiefe** auf `6.5`.

Die Senkung muss breiter sein als die Bohrung („Die Senkung muss breiter sein als die Bohrung.“) und, bei einem Sackloch, flacher als dieses („Die Senkung muss flacher sein als die Bohrung.“).

## Ein Lochkreis

Für Bohrungen, die gleichmäßig um einen Mittelpunkt verteilt sind, erstellen Sie **eine** Bohrung und machen daraus ein Muster: Wählen Sie das Bohrungsmerkmal und dann {{ui:Circular}} (siehe [Muster- und Spiegelmerkmale](topic:patterns-mirror)). Das Muster folgt, wenn Sie die Größe der Bohrung ändern.

## Wenn Bohrungen in die falsche Richtung gehen

- „Auf dieser Seite der Skizze gibt es nichts zu bohren. Versuchen Sie, die Richtung umzukehren.“ Die Skizze liegt auf der fernen Seite des Materials. Haken Sie **Richtung umkehren** an.
- „Setzen Sie Skizzenpunkte, wo die Bohrungen hin sollen (Punktwerkzeug), dann erstellen Sie die Bohrung.“ Die Skizze hat keine losen Punkte. Linienenden und Kreismittelpunkte zählen nicht.
- „Es gibt noch nichts zu bohren.“ Eine Bohrung braucht einen Volumenkörper. Erstellen Sie zuerst einen Aufsatz.

## Bohrungen in Baugruppen

Jede Bohrung hat eine Achse. In einer Baugruppe kann **Zentrieren auf** ein Gelenk auf die Achse einer Bohrung setzen, aufgeführt als „Bohrung1, Bohrung 2“, sodass ein Stift- oder Schraubenteil damit fluchtet. Siehe [Eine Baugruppe bauen](topic:build-assembly).

## Kegelsenkungen

Setzen Sie **Typ** auf **Kegelsenkung**, dann **Kegelsenkungs-⌀** (an der Oberfläche) und **Kegelsenkungswinkel**: 90° (ISO-metrische Flachkopfschrauben) oder 82° (Zollschrauben). Nehmen Sie den Kegelsenkungsdurchmesser aus den Daten des Schraubenherstellers (etwas mehr als der Durchmesser des Schraubenkopfs). Die Fläche des Kegels heißt in den Panels „Kegelsenkung“.

## Gewindebohrungen

Setzen Sie **Typ** auf **Gewinde (ISO metrisch)** und wählen Sie das **Gewinde**, M2 bis M24 grob. Die Bohrung wird mit der Kernlochgröße aus der Tabelle unten gebohrt (Nenndurchmesser minus Steigung, auf die Bohrerreihe, wie ISO 2306 sie für ein 6H-Gewinde auflistet); das Feld **Durchmesser (mm)** wird nicht verwendet. Bei einem Sackloch legt **Gewindetiefe (mm)** fest, wie tief das Gewinde geht.

| Gewinde | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Steigung | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Kernlochbohrer-⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Das Gewinde ist zunächst **kosmetisch**: Das Modell hat die gebohrte Bohrung, die Ansicht zeichnet den Nenndurchmesser des Gewindes als gestrichelte Kreise, und das Zeichnungsblatt trägt die Beschriftung als Notiz, etwa „4× M8×1.25 - 6H, Gewinde durchgehend“. STEP exportiert nur die gebohrte Bohrung.

Setzen Sie den Haken bei **Modelliert**, um das echte Schraubengewinde in die Bohrung zu schneiden, für den 3D-Druck. **Spiel (mm)** macht sie ringsum entsprechend größer, damit eine gedruckte Schraube passt: 0.1 bis 0.2 mm passt für die meisten Drucker. Die Beschriftung endet dann mit „(modelliert)“. Siehe [Gewinde an Wellen und Bohrungen, gezeichnet oder modelliert](topic:threads), das auch Gewinde an Wellen setzt.

:::note
Gegenbohrungen, Zollgewinde und Rohrgewinde sind noch nicht umgesetzt.
:::
