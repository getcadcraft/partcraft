---
title: Ein .3dm-Modell live halten
summary: Ändern Sie ein Modell in dem Programm, das es erstellt hat, und sehen Sie, wie der Körper in PartCraft mitgeht, aus Rhino 8 oder einer Grasshopper-Definition, wobei Ihre Features auf der neuen Form neu aufgebaut werden.
keywords: rhino, grasshopper, Live-Link, Live-Verbindung, 3dm, NURBS, parametrisch, Verknüpfung, synchronisieren, Skript, senden, importierter Körper
from: cf4dc9b2
---

Bearbeiten Sie das Modell weiter dort, wo Sie es modellieren, und fertigen, prüfen und dokumentieren Sie es hier. Jede Änderung im anderen Programm ersetzt einen importierten Körper in PartCraft, und die Features danach werden auf der neuen Form neu aufgebaut.

:::note
Die Verknüpfung braucht **CadCraft Studio** auf demselben Computer. Ein Browser-Tab kann die Verbindung nicht herstellen. Nichts geht über das Internet: Das Skript spricht mit Studio über die eigene Adresse dieses Computers, mit einem Token.
:::

:::warning
Diese Verknüpfung wurde mit dem Dateischreiber des Skripts und einem Ersatz für das andere Programm getestet, noch nicht in Rhino oder Grasshopper selbst. Wenn dort etwas fehlschlägt, sagen Sie uns, was gemeldet wurde.
:::

## Einrichten

1. Öffnen Sie in Studio PartCraft. Setzen Sie unter {{ui:Einstellungen}} › {{ui:PartCraft}} › {{ui:Assistenten}} den Haken bei **KI-Assistenten und Skripte dürfen PartCraft verwenden**, dann **Bearbeiten**.
2. Wählen Sie in Studio {{ui:Assistent verbinden}}. Es zeigt die Adresse und das Token, die Sie unten einfügen.
3. Laden Sie das Skript herunter: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Aus Rhino

1. Führen Sie `cadcraft_link.py` im Skripteditor von Rhino aus (Python 3 in Rhino 8).
2. Beim ersten Mal fügen Sie Adresse und Token ein. Sie werden in `.cadcraft-link.json` in Ihrem Benutzerordner gespeichert, nie im Modell. Studio erstellt bei jedem Start ein neues Token, daher fragt das Skript dann erneut.

Führen Sie das Skript erneut aus, um es zu beenden.

## Aus Grasshopper

Führen Sie das Skript einmal zuerst in Rhino aus, damit Adresse und Token gespeichert werden.

1. Fügen Sie eine Skript-Komponente (Python 3) hinzu und fügen Sie den gesamten Inhalt von `cadcraft_link.py` ein.
2. Geben Sie ihr diese Eingänge: `G` (die Geometrie, mit Listenzugriff), `N` (ein Name, optional), `On` (ein Schalter mit Wahr/Falsch) und `Target` (optional: `model` oder `part`, wenn beide Apps offen sind).
3. Setzen Sie `On` auf true.

Jede Berechnung sendet `G` und ersetzt, was die Komponente beim letzten Mal gesendet hat.

## So funktioniert es hier

- **Ein Körper.** Alles Sichtbare im Modell wird zu einem importierten Feature, so wie beim [Öffnen einer .3dm-Datei](topic:open-3dm-files).
- **Es muss geschlossen sein.** PartCraft füllt kleine Löcher und flache Öffnungen, und dem anderen Programm wird mitgeteilt, wie viele. Schließt sich das Modell noch nicht, behält PartCraft den Körper, den es hatte, und die Statusleiste meldet das. Die nächste Änderung, die sich schließt, aktualisiert ihn.
- **Beenden Sie, was Sie gerade tun.** In einer Skizze oder einer Zeichnung werden Aktualisierungen abgelehnt und später erneut versucht; sie kommen an, sobald Sie wieder im Modell sind.
- **Rückgängig.** Aktualisierungen, die innerhalb von zwei Sekunden aufeinander folgen, teilen sich einen Rückgängig-Schritt.
- **Speichern.** Die Bauteildatei behält die Verknüpfung. Führen Sie das Skript nach dem erneuten Öffnen erneut aus; dann aktualisiert sich dasselbe Feature.

**Nur eine Richtung.** Änderungen hier gehen nicht zurück an das andere Programm.

## Wenn etwas schiefgeht

- **„Kein ModelCraft- oder PartCraft-Fenster erlaubt das“:** Führen Sie Schritt 1 der Einrichtung aus.
- **„Studio hat das Token abgelehnt“:** Studio wurde neu gestartet. Kopieren Sie das neue Token und führen Sie das Skript erneut aus. Für Grasshopper führen Sie es zuerst in Rhino aus.
- **„Keine Verbindung zu CadCraft Studio möglich“:** Studio läuft nicht, oder die Adresse hat sich geändert.
