---
title: Datenausgabe: Datenblatt, Felder und Netze
summary: Das Datenblatt eines erzeugten Körpers als JSON oder PDF speichern, sein Feld als VTK-Bild (.vti) oder OpenVDB-Level-Set (.vdb) und seine Oberfläche als VTK-Netz (.vtu) für ParaView und andere Analysewerkzeuge, sowie das Netz als 3MF mit den Daten des Generators. Dasselbe Bauteil schreibt immer dieselben Dateien.
keywords: Export, Datenblatt, json, pdf, vti, vtu, vtk, paraview, 3mf, Feld, vorzeichenbehafteter Abstand, fea, cfd, Metadaten, OpenVDB
from: 817b4579
---

Öffnen Sie im {{ui:Ingenieur}}-Arbeitsbereich oder in den {{ui:Eigenschaften}} eines generierten Körpers die **Datenausgabe**:

| Schaltfläche | Datei | Zweck |
|---|---|---|
| Datenblatt (JSON) | `.json` | Jede Eingabe, jede Zahl mit Einheit und Quelle, die Prüfungen, der Netz-Fingerabdruck. Sortiert, ohne Zeitangaben: Dasselbe Bauteil ergibt dieselbe Datei. |
| Datenblatt (PDF) | `.pdf` | Dasselbe auf Papier, über so viele Seiten wie nötig. |
| Feld (.vti) | `.vti` | Das Bauteil als vorzeichenbehafteter Abstand (innen negativ) und als Innenmaske auf einem Punktgitter: eine VTK-Bilddatei für ParaView und auf VTK aufbauende Werkzeuge. Sie wird aus der Oberfläche des Körpers mit der Voxelgröße der Eingaben des Generators erstellt, dauert daher einen Moment, und ein Körper mit mehr als 400 000 Dreiecken ist für die Seite zu groß: Speichern Sie das Feld stattdessen aus einem Skript (`field_bake`). |
| Level-Set (.vdb) | `.vdb` | Dasselbe Feld als OpenVDB-Level-Set: ein dünnbesetzter Baum, der nur das schmale Band von Voxeln um die Oberfläche behält, für Werkzeuge, die OpenVDB lesen (Renderer, Simulations- und 3D-Programme). Voxelgröße und Einheiten stammen vom Generator (Millimeter), das schmale Band ist der aktive Teil, innen ist negativ. Aus der Oberfläche erstellt wie die `.vti`, mit derselben Grenze von 400 000 Dreiecken; eine Datei, die größer als 1.5 GB wäre, wird abgelehnt (verwenden Sie dann eine größere Voxelgröße). Die Datei ist im OpenVDB-Format 224, unkomprimiert bis auf die eigene Packung aktiver Werte von OpenVDB, sodass jeder OpenVDB-Leser sie öffnet. |
| Oberfläche (.vtu) | `.vtu` | Die Dreiecke, mit der Fläche und Normale jedes Dreiecks. |
| 3MF mit Generatordaten | `.3mf` | Das Netz in Millimetern für einen Slicer, mit dem Generator, seinen Eingaben und (bei einem abgestuften Gitter) seinem Wandbereich als Metadaten in der Datei. |

Nichts in diesen Dateien stammt von der Uhr oder dem Rechner, daher können Sie zwei Dateien Byte für Byte vergleichen: Ein geändertes Byte bedeutet ein geändertes Bauteil.

## Noch nicht umgesetzt

- Eine `.vti` oder `.vdb` des Feldes mit einer anderen Voxelgröße als der des Generators selbst.
- Das Einlesen von `.vdb`-Dateien (nur das Schreiben ist umgesetzt).
