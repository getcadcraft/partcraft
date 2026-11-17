---
title: Dateien: öffnen, speichern und exportieren
summary: Die Bauteil- und Baugruppendateien, die PartCraft öffnet und speichert, jedes Exportformat mit dem, was es behält, wohin Dateien gehen und was offline oder zwischen Browsern anders ist.
keywords: öffnen, speichern, exportieren, herunterladen, datei, partcraft.json, baugruppendatei, stl, 3mf, step, dxf, pdf, wo sind meine dateien, offline, speichern unter
from: e5fbc7e3
---

PartCraft arbeitet mit Dateien auf Ihrem Computer. Es lädt niemals ein Bauteil hoch, und es sind weder ein Konto noch Cloud-Speicher beteiligt. Cloud-Speicherung ist noch nicht verfügbar.

## Was PartCraft öffnet

| Datei | Erweiterung | Wie |
|---|---|---|
| Ein PartCraft-Bauteil | `.partcraft.json` | {{ui:Öffnen}}, {{key:Mod+O}} oder auf die 3D-Ansicht ziehen |
| Eine PartCraft-Baugruppe | `.partcraft-asm.json` | Ebenso: PartCraft erkennt, welche Art es ist |
| Ein STEP-Volumenkörper | `.step`, `.stp` | Ein Volumenkörper, gelesen als Dreiecke: [STEP-Datei öffnen und darauf aufbauen](topic:import-step) |

STL-, OBJ- und 3MF-Netze werden ebenfalls als Volumenkörper geöffnet ([STL, OBJ oder 3MF öffnen](topic:open-meshes)), und `.3dm`-Dateien ebenso ([Ein .3dm-Modell öffnen](topic:open-3dm-files)). DXF, IGES und eigene Bauteildateien anderer Programme lassen sich nicht öffnen (siehe [Was noch nicht umgesetzt ist](topic:not-built-yet)).

Regeln beim Öffnen:

- Der Dateiname eines Bauteils oder einer Baugruppe muss auf `.json` enden, und die Datei muss kleiner als 50 MB sein.
- Dateien werden geprüft, bevor etwas angezeigt wird. Eine beschädigte oder bearbeitete Datei wird mit einem klaren Grund abgelehnt, zum Beispiel „Dies ist keine PartCraft-Datei.“
- Eine Datei, die von einem neueren PartCraft gespeichert wurde, wird abgelehnt: „Diese Datei wurde von einem neueren PartCraft gespeichert (Dateiversion 3); diese hier liest Version 2.“ Ältere Dateien öffnen sich.
- Hat das Bauteil auf dem Bildschirm nicht gespeicherte Änderungen, fragt PartCraft zuerst nach: {{ui:Abbrechen}}, {{ui:Änderungen verwerfen}} oder {{ui:Zuerst speichern}}.

## Speichern

{{ui:Speichern}} oder {{key:Mod+S}} speichert, was auf dem Bildschirm ist:

- Bei einem Bauteil: `<Bauteilname>.partcraft.json`, der vollständige Verlauf (Skizzen, Abhängigkeiten, Maße, Features, die Position der Zurückrollung), der Abschnitt, die Detail- und GD&T-Notizen des Zeichnungsblatts und der vollständige Text jedes STEP-Volumenkörpers, der in einem früheren Build importiert wurde. Features, die diese Version nicht erstellen kann, werden unverändert zurückgeschrieben. Der Volumenkörper selbst wird nicht gespeichert; PartCraft baut ihn beim Öffnen der Datei aus dem Verlauf neu auf.
- In einer Baugruppe: `<Baugruppenname>.partcraft-asm.json`, mit **jedem Bauteil darin**. Eine Datei enthält die ganze Baugruppe, sodass Sie sie allein verschicken können.

Speichern ist ein **Download**. Ihr Browser legt die Datei im Downloads-Ordner ab oder fragt, wohin, wenn Sie es so eingestellt haben. Erneutes Speichern erzeugt einen neuen Download; der Browser benennt ihn möglicherweise `Part1 (1).partcraft.json`, statt die alte Datei zu ersetzen. Benennen Sie Dateien um oder verschieben Sie sie im {{pick:mac=Finder|windows=Datei-Explorer|linux=Ihrem Dateimanager}}, wie Sie möchten.

Zeichen im Bauteilnamen, die keine Buchstaben, Ziffern, Leerzeichen, `_`, `.` oder `-` sind, werden im Dateinamen zu `_`.

:::tip
Die meisten Browser haben eine Einstellung, bei jedem Download nachzufragen, wo er gespeichert werden soll. Schalten Sie sie ein, wenn Sie bei jedem Mal eine Auswahl „Speichern unter“ möchten: in Chrome und Edge finden Sie sie unter Downloads in den Einstellungen; in Firefox unter Allgemein, Dateien und Anwendungen; in Safari unter Allgemein, Speicherort für Dateidownloads.
:::

Mehr darüber, wohin Downloads gehen und wie Sie Dateien sicher aufbewahren: [Wo Ihre Dateien liegen](common:your-files).

## Exportieren

Das Menü {{ui:Exportieren}} schreibt andere Formate. Jeder Export ist ein Download, benannt nach dem Bauteil.

| Menüeintrag | Datei | Inhalt |
|---|---|---|
| {{ui:STL, für den 3D-Druck}} | `<Name>.stl` | Binäres STL der Dreiecke des Volumenkörpers, Millimeter, **Z oben** |
| {{ui:3MF, für den 3D-Druck}} | `<Name>.3mf` | 3MF mit dem Volumenkörper als ein Objekt, Millimeter, **Z oben** |
| {{ui:STEP AP242 (exakter Volumenkörper)}} | `<Name>.step` | Ein exakter Volumenkörper, Millimeter, Z oben: runde Flächen als echte Zylinder, Kegel, Kugeln und Tori. Das STEP für andere CAD- und CAM-Programme |
| {{ui:STEP AP214 (exakter Volumenkörper)}} | `<Name>.step` | Derselbe exakte Volumenkörper im älteren Schema AP214 |
| {{ui:STEP (facettiert, Netzkernel)}} | `<Name>.step` | Ein Volumenkörper aus ebenen Flächen aus dem Netz: **runde Flächen sind viele kleine ebene Facetten**. Millimeter, in den eigenen Achsen von PartCraft (Y oben). Für ein Programm, das die exakte Datei ablehnt |
| {{ui:DXF der Skizze oder ebenen Fläche}} | `<Name> - <Skizze>.dxf` oder `<Name> - face.dxf` | DXF R12. Eine Skizze: Linien, Bögen, Kreise und Punkte in den Koordinaten der Skizze, auf den Layern PROFILE, CONSTRUCTION und POINTS. Eine gewählte ebene Fläche: ihre Umrisse als geschlossene Polylinien (runde Kanten als Facetten) |
| {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}} | `<Name> - drawing.pdf` | Das A3-Zeichnungsblatt: drei Ansichten, Isometrie, Schnitt und Detail, falls gesetzt, Gesamtabmessungen, GD&T-Symbole, Schriftfeld |

:::note
{{ui:STEP AP242 (exakter Volumenkörper)}} schreibt Bohrungen, Aufsätze, Verrundungen, Kegel, Kugeln und Tori auf ihre echten Oberflächen, sodass ein anderes Programm eine Bohrung als Zylinder auswählen kann; **Kurven** ändert daran nichts. Spline-Seiten, modellierte Gewinde und importierte Netze haben keine exakte Oberfläche und bleiben ebene Facetten im selben Volumenkörper; die Statusleiste nennt die Anzahl. {{ui:STEP (facettiert, Netzkernel)}} schreibt jede runde Fläche als Facetten.
:::

- Exporte beziehen sich auf das Bauteil auf dem Bildschirm. Der Export ist in einer Baugruppe ausgeschaltet; einen Baugruppenexport gibt es noch nicht.
- STL, 3MF, das facettierte STEP und die DXF einer Fläche bestehen immer aus Facetten. Die Einstellung **Kurven** (im rechten Bereich, wenn nichts ausgewählt ist) legt fest, wie fein sie sind, von 32 bis 256 Facetten pro Umdrehung. Wählen Sie Fein oder Sehr fein, bevor Sie STL oder 3MF für einen glatten Druck exportieren.
- Die PDF-Zeichnung verwendet die eingebaute Schrift Helvetica des Lesers. Zeichen, die sie nicht darstellen kann, werden als „?“ gedruckt.

Schritt für Schritt: [Export zum Drucken, STEP und DXF](topic:export-files) und [Ein Zeichnungsblatt erstellen](topic:drawing-pdf).

## Nicht gespeicherte Arbeit

- PartCraft behält eine Wiederherstellungskopie des geöffneten Bauteils oder der Baugruppe in diesem Browser, kurz nach jeder Änderung, damit ein Absturz oder ein geschlossener Tab nichts verliert: Beim nächsten Öffnen von PartCraft fragt es „Ihre Arbeit wiederherstellen?“. Das ist kein Speichern: Speichern Sie in einer Datei, um Ihre Arbeit zu behalten. Siehe [Nicht gespeicherte Arbeit wiederherstellen](common:recover).
- Wenn Sie den Tab mit nicht gespeicherten Änderungen schließen oder neu laden, fragt der Browser „Seite verlassen?“. Das ist das eigene Fenster des Browsers; PartCraft kann dessen Wortlaut nicht ändern.
- {{ui:Neu}}, {{ui:Öffnen}} und das Schließen einer Baugruppe fragen vor dem Verwerfen nach, wenn Änderungen nicht gespeichert sind.

## Online und offline

Alles geschieht auf Ihrem Computer: Der Mesh-Kernel (ein WebAssembly-Programm) wird mit der App heruntergeladen und erstellt die Geometrie lokal, und Dateien werden von Ihrer Festplatte gelesen und dorthin geschrieben. Keine Bauteildaten gehen über das Netzwerk. Siehe [Der Mesh-Kernel](topic:solid-kernels).

Um ganz ohne Verbindung zu arbeiten, speichern Sie PartCraft für die Offline-Nutzung, während Sie online sind: Wählen Sie {{ui:Für Offline speichern}} in der App-Leiste und warten Sie, während es zählt („Speichern 40 von 212“), bis **Offline bereit** erscheint. Die gespeicherte Kopie enthält die 3D-Bibliothek und den Mesh-Kernel; danach funktionieren Modellieren, Speichern, jeder Export und Zeichnungen offline. Steht dort **Speichern fehlgeschlagen**, klicken Sie darauf, um es erneut zu versuchen, während Sie online sind. **Offline nicht verfügbar** bedeutet, dass dieses Browserfenster keine Kopie behalten kann (private Fenster und einige verwaltete Computer). Mit gespeicherter Kopie bietet ein Klick auf **Offline bereit** {{ui:Erneut speichern (neueste Version holen)}} und {{ui:Offline-Kopie entfernen}} an. Details: [Offline arbeiten](common:offline).

:::online
Sie sind online. Auch ohne Offline-Speicherung können Sie weiterarbeiten, sobald PartCraft geladen ist und der Chip in der Statusleiste „Mesh-Kernel“ anzeigt, falls die Verbindung abbricht. Laden Sie die Seite erst neu, wenn Sie wieder online sind.
:::

:::offline
Sie sind offline. Ist PartCraft schon geöffnet, arbeiten Sie einfach weiter; Speichern und Exportieren funktionieren weiterhin. Zeigt die App-Leiste **Offline bereit**, öffnet sich PartCraft auch ohne Verbindung neu; andernfalls laden Sie diesen Tab nicht neu.
:::

## Unterschiede zwischen Browsern

- **Downloads.** Jeder Browser hat seinen eigenen Downloads-Ordner und seine eigene Art zu fragen. Fragt ein Browser, ob diese Seite Dateien herunterladen darf, erlauben Sie es, sonst können Speichern und Exportieren nicht funktionieren.
- **Ziehen und Ablegen** einer Datei auf die Ansicht funktioniert in Chrome, Edge, Firefox und Safari.
- **Dateien von einem Telefon oder Tablet.** Auf iPhone und iPad zeigt Öffnen die Dateien-App; gespeicherte Dateien landen in der Dateien-App unter Downloads. Auf Android landen sie im Downloads-Ordner.

Der Inhalt der Dateien ist zwischen Browsern und Betriebssystemen identisch.
