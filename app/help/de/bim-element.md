---
title: Ein BimCraft-Bauteil entwerfen und zurückspeichern
summary: Ein Bauteil aus BimCraft öffnet sich mit dem umgebenden Gebäude, grau und nur lesbar. Ändern Sie es und speichern Sie es zurück, damit BimCraft die neue Form übernehmen kann.
keywords: bimcraft, bim, Element, senden, zurückspeichern, Verknüpfung, Gebäude, Kontext, Nachbarn, Auflager, Konsole, ifc, übernehmen
from: 0978fe53
---

## Was Sie tun

Arbeiten Sie an einem Bauteil aus einem BimCraft-Modell an seinem Platz im Gebäude, und schicken Sie die neue Form zurück.

## Schritte

1. Wählen Sie in BimCraft ein Element aus und klicken Sie auf {{ui:Bauteil-Verknüpfungen}} › {{ui:An PartCraft senden}}. PartCraft öffnet es als neues Bauteil. Die Statusleiste zeigt an, dass es ein BIM-Element ist.
2. Die Elemente um es herum (innerhalb von 3 m) werden grau gezeichnet. Sie dienen als Bezug für den Entwurf. Sie können sie nicht wählen oder ändern, und sie werden nicht in der Bauteildatei gespeichert.
3. Ändern Sie das Bauteil wie jedes andere: schneiden, hinzufügen, bohren, spiegeln. Sein Ursprung und seine Achsen sind die des Elements, daher kehrt das Bauteil an seinen ursprünglichen Platz zurück.
4. Klicken Sie auf {{ui:Datei}} › {{ui:Exportieren}} › {{ui:Zurück an BimCraft speichern}}. Die Statusleiste zeigt an, welche Revision Sie gesendet haben.
5. In BimCraft wird das Element als geändert angezeigt, bis die Person dort es übernimmt.

## Was Sie sehen sollten

- Das Bauteil behält seine Verknüpfung in der Datei. Öffnen Sie es später, zeigt die Statusleiste weiterhin, dass es ein BIM-Element ist. Das graue Gebäude erscheint wieder, solange der Browser das Paket noch hat, mit dem es gesendet wurde.
- Erneutes Zurückspeichern sendet Revision 2, 3 und so weiter. BimCraft behält die neueste.

## Gut zu wissen

- Die Form wird als Mesh in Millimetern zurückgesendet, in den eigenen Achsen des Elements. Die Features bleiben in PartCraft.
- {{ui:Zurück an BimCraft speichern}} bewirkt nichts bei einem Bauteil, das nicht aus BimCraft stammt.
- Ein Bauteil ohne Volumenkörper hat noch nichts zum Senden.
- Beide Anwendungen müssen im selben Browser geöffnet sein: Es wird nichts hochgeladen, die beiden Seiten übergeben das Element untereinander.
