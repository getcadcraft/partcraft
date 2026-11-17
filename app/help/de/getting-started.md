---
title: Einstieg in PartCraft
summary: Was PartCraft heute kann, was Ihr Browser braucht und ein erstes Bauteil in zehn Minuten, von der Skizze bis zur gespeicherten Datei.
keywords: Einstieg, erster Start, Schnellstart, Einführung, Anleitung, erstes Bauteil, Platte, parametrisch, Bauteilmodellierer
from: 7d43283f
---

PartCraft ist die parametrische Bauteil- und Baugruppen-App der CadCraft-Familie. Sie zeichnen eine 2D-Skizze, legen sie mit Beziehungen und Bemaßungen fest, machen daraus mit Merkmalen wie Extrusion, Drehung und Bohrung einen Volumenkörper und ändern später jede Zahl: Das Bauteil wird aus seiner Historie neu aufgebaut. Bauteile kommen dann in Baugruppen, in denen Gelenke sie platzieren und Sie die Bewegung prüfen können.

Was diese Version kann:

| Aufgabe | Was Sie bekommen |
|---|---|
| Skizzen | Linien, Rechtecke, Kreise, Bögen, Punkte und Mittellinien, mit Beziehungen und Bemaßungen und einem Live-Status: unter-, voll- oder überbestimmt |
| Volumenmerkmale | Extrusion, Ausschnitt, Drehung, Drehausschnitt, einfache Bohrungen und Senkungsbohrungen, lineare und kreisförmige Muster, Spiegeln, Verrundungen und Fasen an geraden Kanten zwischen ebenen Flächen, sowie Schalen und Formschrägen an ebenen Flächen. Sweeps, Lofts und die anderen Merkmale, die einen exakten Kernel brauchen, sind in dieser Version noch nicht umgesetzt: siehe [Was noch nicht umgesetzt ist](topic:not-built-yet) |
| Historie | Jedes Merkmalsmaß bearbeiten, unterdrücken, zurücksetzen, neu ordnen und löschen, mit Rückgängig |
| Baugruppen | Bauteile, verbunden durch starre, Dreh- und Schubgelenke, mit einer Kollisionsprüfung und einer Bewegungsprüfung |
| Zeichnungen | Ein A3-Blatt mit drei Ansichten, einer Isometrie, einem Schnitt, einer Detailansicht, Gesamtmaßen, Bezügen, Toleranzrahmen und Oberflächensymbolen, als PDF exportiert |
| Dateien | Eigene Bauteil- und Baugruppendateien; Ausgabe als STL, 3MF, exaktes STEP, DXF und PDF |

Alles läuft in Ihrem Browser, auf Ihrem Computer. **Es wird nichts hochgeladen.** Wohin die Dateien gehen, steht unter [Dateien: öffnen, speichern und exportieren](topic:files).

## Was Sie brauchen

- Einen aktuellen Chrome, Edge, Firefox oder Safari mit **WebGL** (3D-Grafik) und **WebAssembly** eingeschaltet. Beides ist standardmäßig an. Die Volumengeometrie wird von einem WebAssembly-Mesh-Kernel gebaut, der mit der App geladen wird: siehe [Der Mesh-Kernel](topic:solid-kernels).
- Eine Maus ist am einfachsten. Ein Trackpad funktioniert, und Touchscreens eignen sich zum Betrachten und für einfaches Skizzieren: siehe [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).
- Ein Bildschirm mit mindestens 1280 Pixeln Breite zeigt die ganze Werkzeugleiste in einer Zeile. Schmalere Fenster scrollen die Werkzeugleiste seitlich; auf einem Telefon öffnen sich die Panels als Blätter aus einer Leiste am unteren Rand.

Mehr über Browser: [Browser und Computer](common:browsers).

:::note
PartCraft läuft im Browser und auf dem Desktop innerhalb von CadCraft Studio. Cloud-Speicherung ist noch nicht verfügbar: Sie öffnen Bauteile von Ihrem Computer und speichern sie als Dateien dorthin zurück.
:::

## PartCraft öffnen

1. Öffnen Sie PartCraft.
2. Warten Sie, während der Bildschirm „Der Solid-Kernel wird geladen…“ anzeigt. Das dauert beim ersten Mal einen Moment.
3. Sie sehen eine leere 3D-Ansicht mit drei Grundebenen, die Historie links („Part1“, dann Frontebene, Draufsicht, Seitenebene) und einen Kasten in der Ansicht mit der Überschrift „Bauteil starten“.
4. Das Chip am rechten Ende der Statusleiste sagt „Mesh-Kernel“: PartCraft baut in dieser Version jedes Bauteil mit dem Mesh-Kernel, sodass runde Flächen aus ebenen Facetten bestehen. Sie können sofort mit der Modellierung beginnen.

Wenn die Ansicht sagt, dass der Browser 3D nicht anzeigen kann, oder der Kernel nicht geladen wurde, siehe [Fehlerbehebung](topic:troubleshooting#the-app-does-not-start).

## Ihr erstes Bauteil: eine Platte mit Loch

Sie machen eine Platte von 60 × 40 mm, 10 mm dick, mit einem 6 mm Loch hindurch. Die Einheit ist Millimeter.

### Die Kontur skizzieren

1. Klicken Sie **Frontebene** in der Historie links. Die Ebene wird in der Ansicht hervorgehoben.
2. Wählen Sie {{ui:Sketch}} in der Werkzeugleiste oder drücken Sie {{key:S}}. Die Ansicht schaut direkt auf die Ebene, und das Linienwerkzeug ist aktiv.
3. Drücken Sie {{key:R}} für das Rechteckwerkzeug.
4. Bewegen Sie den Zeiger auf den Ursprung (der kleine rote Kreis mit einem Kreuz). Ein kleines Quadrat zeigt, dass er einrastet. Klicken Sie.
5. Bewegen Sie sich nach oben rechts und klicken Sie erneut. Sie haben ein Rechteck. Seine Linien sind blau: Blau bedeutet, dass sie sich noch bewegen können.

### Maße geben

1. Drücken Sie {{key:D}} für das Bemaßungswerkzeug.
2. Klicken Sie die obere Linie und dann ein kleines Stück darüber. Ein Zahlenfeld öffnet sich mit der aktuellen Länge.
3. Tippen Sie `60` und drücken Sie {{key:Enter}}. Das Rechteck wird 60 mm breit.
4. Klicken Sie die linke Linie und dann ein Stück links davon. Tippen Sie `40` und drücken Sie {{key:Enter}}.

Das Chip oben links in der Ansicht sagt jetzt **Vollständig bestimmt**, und die Linien werden tintenfarben (schwarz im Papier-Design, hell im Modell-Design). Jeder Punkt und jede Größe ist festgelegt.

:::tip
Wenn Sie das Rechteck abseits des Ursprungs begonnen haben, sagt das Chip trotzdem „Unterbestimmt · 2 Freiheitsgrade“. Drücken Sie {{key:S}} für Auswählen, klicken Sie eine Ecke, {{key:Shift}}+Klick auf den Ursprung und wählen Sie dann {{ui:• Deckungsgleich}} im rechten Panel.
:::

### Extrudieren

1. Wählen Sie {{ui:Exit}} in der Werkzeugleiste oder drücken Sie {{key:Esc}}, bis die Skizze schließt (meist zweimal).
2. Wählen Sie {{ui:Extrude}}. Ein 10 mm dicker Volumenkörper erscheint. „Extrude1“ wird der Historie hinzugefügt, mit „Sketch1“ eingerückt darunter.
3. Das rechte Panel zeigt die Einstellungen der Extrusion. Um die Dicke zu ändern, tippen Sie eine neue Zahl in **Tiefe (mm)** und drücken {{key:Enter}} oder {{key:Tab}}. Das Bauteil wird sofort neu aufgebaut.

### Das Loch hinzufügen

1. Klicken Sie die große ebene Fläche vorne an der Platte (das Ende der Extrusion). Die ganze Fläche wird hervorgehoben, und das rechte Panel sagt **Fläche**.
2. Wählen Sie {{ui:Sketch on this face}} im rechten Panel.
3. Drücken Sie {{key:P}} für das Punktwerkzeug und klicken Sie nahe der Mitte der Fläche.
4. Wählen Sie {{ui:Exit}}.
5. Wählen Sie {{ui:Hole}}. Ein 6 mm Loch geht durch die Platte. Ändern Sie **Durchmesser (mm)** im rechten Panel, falls gewünscht.

Das Feld **Bauteil** unten links zeigt jetzt ein Volumen, eine Oberfläche, die Größe (60 × 40 × 10 mm) und „Durchgangsbohrungen: 1“.

### Speichern

1. Drücken Sie {{key:Mod+S}} oder wählen Sie {{ui:Save}}.
2. Ihr Browser lädt `Part1.partcraft.json` in seinen Downloadordner. Die Datei enthält die ganze Historie: Öffnen Sie sie erneut mit {{ui:Open}}, um weiter zu bearbeiten.

Um das Bauteil zuerst umzubenennen, klicken Sie auf leeren Raum in der Ansicht, sodass nichts ausgewählt ist, und tippen Sie einen neuen **Namen** im rechten Panel.

## Wohin als Nächstes

- [Ihre erste Skizze zeichnen](topic:sketch-basics) und [Eine Skizze vollständig bestimmen](topic:relations-dimensions) erklären den Skizzierer ausführlich.
- [Ein Bauteil über seine Historie ändern](topic:edit-history) zeigt, wie Sie das Gebaute bearbeiten.
- [Verrunden, abschrägen und aushöhlen](topic:fillet-chamfer-shell) und [Eine Zeichnung erstellen](topic:drawing-pdf) vollenden das Bauteil. [Was noch nicht umgesetzt ist](topic:not-built-yet) listet auf, was diese Version nicht kann, etwa Sweeps und Lofts.
- [Von einem anderen parametrischen Modellierer kommend](topic:coming-from) listet die Gewohnheiten, die hier anders funktionieren.
- [Tastatur und Maus](topic:keyboard) ist die vollständige Liste der Tastenkürzel.
- [Diese Hilfe verwenden](common:help).
