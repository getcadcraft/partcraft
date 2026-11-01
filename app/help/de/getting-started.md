---
title: Erste Schritte mit PartCraft
summary: Was PartCraft heute kann, was Ihr Browser braucht und ein erstes Bauteil in zehn Minuten, von der Skizze bis zur gespeicherten Datei.
from: 5f0a668d
keywords: Start, erster Start, Schnellstart, Einführung, Tutorial, erstes Bauteil, Platte, parametrisch, Bauteilmodellierer
---

PartCraft ist die parametrische Bauteil- und Baugruppen-Anwendung der CadCraft-Familie. Sie zeichnen eine 2D-Skizze, legen sie mit Abhängigkeiten und Bemaßungen fest, machen daraus mit Features wie Extrusion, Drehung und Bohrung einen Volumenkörper und ändern später jede Zahl: Das Bauteil wird aus seinem Verlauf neu aufgebaut. Bauteile kommen dann in Baugruppen, wo Verbindungen sie platzieren und Sie die Bewegung prüfen können.

Was dieser Stand leistet:

| Aufgabe | Was Sie erhalten |
|---|---|
| Skizzen | Linien, Rechtecke, Kreise, Bögen, Punkte und Mittellinien, mit Abhängigkeiten und Bemaßungen, und einem Live-Status: unter-, voll- oder überbestimmt |
| Volumen-Features | Extrusion, Ausschnitt, Drehung, Drehausschnitt, einfache Bohrungen und Bohrungen mit Senkung, lineare und kreisförmige Muster, Spiegeln, Verrundungen und Fasen an geraden Kanten zwischen ebenen Flächen sowie Schalen und Formschrägen an ebenen Flächen. Sweeps, Lofts und die anderen Features, die einen exakten Kernel brauchen, sind in dieser Version noch nicht vorhanden: siehe [Was noch nicht vorhanden ist](topic:not-built-yet) |
| Verlauf | Die Zahlen jedes Features bearbeiten, unterdrücken, zurückrollen, umordnen und löschen, mit Rückgängig |
| Baugruppen | Bauteile, verbunden durch starre, Dreh- und Schubgelenke, eine Kollisionsprüfung und eine Bewegungsprüfung |
| Zeichnungen | Ein A3-Blatt mit drei Ansichten, einer Isometrie, einem Schnitt, einer Detailansicht, Gesamtmaßen, Bezügen, Toleranzrahmen und Oberflächensymbolen, als PDF exportiert |
| Dateien | Eigene Bauteil- und Baugruppendateien; Ausgabe als STL, 3MF, facettiertes STEP, DXF und PDF |

Alles läuft in Ihrem Browser, auf Ihrem Computer. **Nichts wird hochgeladen.** Siehe [Dateien: öffnen, speichern und exportieren](topic:files), wohin Dateien gehen.

## Was Sie brauchen

- Ein aktueller Chrome, Edge, Firefox oder Safari mit eingeschaltetem **WebGL** (3D-Grafik) und **WebAssembly**. Beides ist standardmäßig an. Die Volumengeometrie baut ein WebAssembly-Netzkernel, das mit der Anwendung lädt: siehe [Der Netzkernel](topic:solid-kernels).
- Eine Maus ist am einfachsten. Ein Trackpad funktioniert, und Touchscreens funktionieren zum Ansehen und für einfache Skizzen: siehe [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).
- Ein Bildschirm von mindestens 1280 Pixeln Breite zeigt die ganze Symbolleiste in einer Zeile. Schmalere Fenster scrollen die Symbolleiste seitwärts; auf einem Telefon öffnen sich die Bereiche als Blätter aus einer Leiste am unteren Rand.

Mehr zu Browsern: [Browser und Computer](common:browsers).

:::note
PartCraft läuft im Browser und auf dem Desktop in CadCraft Studio. Cloud-Speicherung ist noch nicht vorhanden: Sie öffnen Bauteile von Ihrem Computer und speichern sie als Dateien dorthin zurück.
:::

## PartCraft öffnen

1. Öffnen Sie PartCraft.
2. Warten Sie, während der Bildschirm „Volumenkernel wird geladen …“ anzeigt. Das dauert beim ersten Mal einen Moment.
3. Sie sehen eine leere 3D-Ansicht mit drei Grundebenen, links den Verlauf („Part1“, dann Vorderebene, Draufsichtebene, Rechtsebene) und in der Ansicht ein Feld mit der Überschrift „Ein Bauteil beginnen“.
4. Das Kürzel nahe dem rechten Ende der Statusleiste lautet „Netzkernel“: PartCraft baut in dieser Version jedes Bauteil mit dem Netzkernel, runde Flächen sind also ebene Facetten. Sie können sofort mit dem Modellieren beginnen.

Meldet die Ansicht, dass der Browser kein 3D anzeigen kann oder dass der Kernel nicht geladen wurde, siehe [Fehlerbehebung](topic:troubleshooting#the-app-does-not-start).

## Ihr erstes Bauteil: eine Platte mit Bohrung

Sie erstellen eine Platte von 60 × 40 mm, 10 mm dick, mit einer 6-mm-Bohrung. Die Einheiten sind Millimeter.

### Den Umriss skizzieren

1. Klicken Sie links im Verlauf auf **Vorderebene**. Die Ebene wird in der Ansicht hervorgehoben.
2. Wählen Sie in der Symbolleiste {{ui:Skizze}} oder drücken Sie {{key:S}}. Die Ansicht dreht sich so, dass sie senkrecht auf die Ebene blickt, und das Werkzeug Linie ist aktiv.
3. Drücken Sie {{key:R}} für das Werkzeug Rechteck.
4. Bewegen Sie den Zeiger auf den Ursprung (der kleine rote Kreis mit einem Kreuz). Ein kleines Quadrat zeigt, dass er einrastet. Klicken Sie.
5. Bewegen Sie sich nach oben rechts und klicken Sie erneut. Sie haben ein Rechteck. Seine Linien sind blau: Blau bedeutet, dass sie sich noch bewegen können.

### Maße vergeben

1. Drücken Sie {{key:D}} für das Werkzeug Bemaßung.
2. Klicken Sie auf die obere Linie und dann etwas oberhalb davon. Ein Zahlenfeld öffnet sich mit der aktuellen Länge.
3. Geben Sie `60` ein und drücken Sie {{key:Enter}}. Das Rechteck wird 60 mm breit.
4. Klicken Sie auf die linke Linie und dann etwas links davon. Geben Sie `40` ein und drücken Sie {{key:Enter}}.

Das Kürzel oben links in der Ansicht lautet jetzt **Vollständig bestimmt**, und die Linien werden zu Tinte (schwarz im Design Papier, hell im Design Modell). Jeder Punkt und jedes Maß ist festgelegt.

:::tip
Haben Sie das Rechteck abseits des Ursprungs begonnen, lautet das Kürzel weiterhin „Unterbestimmt · 2 Freiheitsgrade“. Drücken Sie {{key:S}} für Auswahl, klicken Sie eine Ecke an, {{key:Shift}}+klicken Sie den Ursprung und wählen Sie dann im rechten Bereich {{ui:• Deckungsgleich}}.
:::

### Extrudieren

1. Wählen Sie in der Symbolleiste {{ui:Beenden}} oder drücken Sie {{key:Esc}}, bis die Skizze schließt (meist zweimal).
2. Wählen Sie {{ui:Extrudieren}}. Ein 10 mm dicker Körper erscheint. „Extrude1“ wird zum Verlauf hinzugefügt, mit „Sketch1“ eingerückt darunter.
3. Der rechte Bereich zeigt die Einstellungen der Extrusion. Um die Dicke zu ändern, geben Sie unter **Tiefe (mm)** eine neue Zahl ein und drücken {{key:Enter}} oder {{key:Tab}}. Das Bauteil wird sofort neu aufgebaut.

### Die Bohrung hinzufügen

1. Klicken Sie auf die große ebene Fläche an der Vorderseite der Platte (das Ende der Extrusion). Die ganze Fläche wird hervorgehoben, und der rechte Bereich zeigt **Fläche**.
2. Wählen Sie im rechten Bereich {{ui:Auf dieser Fläche skizzieren}}.
3. Drücken Sie {{key:P}} für das Werkzeug Punkt und klicken Sie nahe der Mitte der Fläche.
4. Wählen Sie {{ui:Beenden}}.
5. Wählen Sie {{ui:Bohrung}}. Eine 6-mm-Bohrung geht durch die Platte. Ändern Sie nach Wunsch **Durchmesser (mm)** im rechten Bereich.

Das Feld **Bauteil** unten links zeigt jetzt ein Volumen, einen Flächeninhalt, die Größe (60 × 40 × 10 mm) und „Durchgangsbohrungen: 1“.

### Speichern

1. Drücken Sie {{key:Mod+S}} oder wählen Sie {{ui:Speichern}}.
2. Ihr Browser lädt `Part1.partcraft.json` in seinen Download-Ordner herunter. Die Datei enthält den ganzen Verlauf: Öffnen Sie sie mit {{ui:Öffnen}} erneut, um weiterzuarbeiten.

Um das Bauteil zuerst umzubenennen, klicken Sie auf leeren Raum in der Ansicht, sodass nichts ausgewählt ist, und tippen Sie im rechten Bereich einen neuen **Namen**.

## Wie es weitergeht

- [Ihre erste Skizze zeichnen](topic:sketch-basics) und [Eine Skizze vollständig bestimmen](topic:relations-dimensions) erklären den Skizzierer ausführlich.
- [Ein Bauteil über seinen Verlauf ändern](topic:edit-history) zeigt, wie Sie Gebautes bearbeiten.
- [Verrunden, Fasen und Aushöhlen](topic:fillet-chamfer-shell) und [Eine Zeichnung erstellen](topic:drawing-pdf) vollenden das Bauteil. [Was noch nicht vorhanden ist](topic:not-built-yet) listet auf, was diese Version nicht kann, etwa Sweeps und Lofts.
- [Wechsel von einem anderen parametrischen Modellierer](topic:coming-from) listet die Gewohnheiten auf, die hier anders funktionieren.
- [Tasten und Maus](topic:keyboard) ist die vollständige Liste der Tastenkürzel.
- [Diese Hilfe verwenden](common:help).
