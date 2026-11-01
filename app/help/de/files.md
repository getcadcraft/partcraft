---
title: Dateien: öffnen, speichern und exportieren
summary: Die Bauteil- und Baugruppendateien, die PartCraft öffnet und speichert, jedes Exportformat und was es behält, wohin Dateien gehen und was sich offline oder zwischen Browsern ändert.
from: c15c2c48
keywords: öffnen, speichern, exportieren, Download, Datei, partcraft.json, Baugruppendatei, stl, 3mf, step, dxf, pdf, wo sind meine Dateien, offline, speichern unter
---

PartCraft arbeitet mit Dateien auf Ihrem Computer. Es lädt nie ein Bauteil hoch, und es gibt weder ein Konto noch Cloud-Speicher. Cloud-Speicherung ist noch nicht vorhanden.

## Was PartCraft öffnet

| Datei | Endung | Wie |
|---|---|---|
| Ein PartCraft-Bauteil | `.partcraft.json` | {{ui:Öffnen}}, {{key:Mod+O}} oder auf die 3D-Ansicht ziehen |
| Eine PartCraft-Baugruppe | `.partcraft-asm.json` | Genauso: PartCraft erkennt, um welche Art es sich handelt |
| Ein STEP-Volumenkörper | `.step`, `.stp` | Ein als Dreiecke gelesener Volumenkörper: [Eine STEP-Datei öffnen und darauf aufbauen](topic:import-step) |

STL-, OBJ- und 3MF-Netze öffnen sich ebenfalls als Volumenkörper ([Eine STL-, OBJ- oder 3MF-Datei öffnen](topic:open-meshes)), ebenso `.3dm`-Dateien ([Ein .3dm-Modell öffnen](topic:open-3dm-files)). DXF, IGES und die eigenen Bauteildateien anderer Programme lassen sich nicht öffnen (siehe [Was noch nicht vorhanden ist](topic:not-built-yet)).

Regeln beim Öffnen:

- Der Name einer Bauteil- oder Baugruppendatei muss auf `.json` enden, und die Datei muss kleiner als 50 MB sein.
- Dateien werden geprüft, bevor etwas angezeigt wird. Eine beschädigte oder bearbeitete Datei wird mit einer klaren Begründung abgelehnt, zum Beispiel „Das ist keine PartCraft-Datei.“
- Eine Datei, die ein neueres PartCraft gespeichert hat, wird abgelehnt: „Diese Datei wurde von einem neueren PartCraft gespeichert (Dateiversion 3); dieses liest Version 2.“ Ältere Dateien öffnen sich.
- Hat das Bauteil auf dem Bildschirm nicht gespeicherte Änderungen, fragt PartCraft zuerst: {{ui:Abbrechen}}, {{ui:Änderungen verwerfen}} oder {{ui:Zuerst speichern}}.

## Speichern

{{ui:Speichern}} oder {{key:Mod+S}} speichert, was auf dem Bildschirm ist:

- Bei einem Bauteil: `<Bauteilname>.partcraft.json`, der vollständige Verlauf (Skizzen, Abhängigkeiten, Bemaßungen, Features, die Rollback-Position), Schnitt, Detail und GD&T-Notizen des Zeichenblatts sowie der volle Text jedes in einem früheren Stand importierten STEP-Volumenkörpers. Features, die diese Version nicht aufbauen kann, werden unverändert zurückgespeichert. Der Volumenkörper selbst wird nicht gespeichert; PartCraft baut ihn aus dem Verlauf neu auf, wenn die Datei geöffnet wird.
- Bei einer Baugruppe: `<Baugruppenname>.partcraft-asm.json`, mit **allen Bauteilen darin**. Eine Datei trägt die ganze Baugruppe, Sie können sie also allein weitergeben.

Speichern ist ein **Download**. Ihr Browser legt die Datei in seinem Download-Ordner ab oder fragt nach dem Ort, wenn Sie ihn so eingestellt haben. Erneutes Speichern erzeugt einen neuen Download; der Browser kann ihn `Part1 (1).partcraft.json` nennen, statt die alte Datei zu ersetzen. Benennen Sie Dateien in {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}} nach Belieben um oder verschieben Sie sie.

Andere Zeichen als Buchstaben, Ziffern, Leerzeichen, `_`, `.` und `-` im Bauteilnamen werden im Dateinamen zu `_`.

:::tip
Die meisten Browser haben eine Einstellung, bei jedem Download nach dem Speicherort zu fragen. Schalten Sie sie ein, wenn Sie jedes Mal eine Auswahl „Speichern unter“ möchten: in Chrome und Edge steht sie in den Einstellungen unter Downloads, in Firefox unter Allgemein, Dateien und Anwendungen, in Safari unter Allgemein, Speicherort für geladene Dateien.
:::

Mehr dazu, wohin Downloads gehen und wie Sie Dateien sicher aufbewahren: [Wohin Ihre Dateien gehen](common:your-files).

## Exportieren

Das Menü {{ui:Exportieren}} schreibt andere Formate. Jedes ist ein Download, benannt nach dem Bauteil.

| Menüeintrag | Datei | Was enthalten ist |
|---|---|---|
| {{ui:STL, für den 3D-Druck}} | `<Name>.stl` | Binäres STL der Dreiecke des Volumenkörpers, Millimeter, **Z nach oben** |
| {{ui:3MF, für den 3D-Druck}} | `<Name>.3mf` | 3MF mit dem Volumenkörper als ein Objekt, Millimeter, **Z nach oben** |
| {{ui:STEP AP242 (exakter Volumenkörper)}} | `<Name>.step` | In dieser Version noch nicht vorhanden (ausgegraut): Er braucht einen exakten Kernel |
| {{ui:STEP AP214 (exakter Volumenkörper)}} | `<Name>.step` | In dieser Version noch nicht vorhanden (ausgegraut) |
| {{ui:STEP (facettiert, Netzkernel)}} | `<Name>.step` | Ein aus ebenen Flächen des Netzes bestehender Volumenkörper: **runde Oberflächen sind viele kleine ebene Facetten**. Millimeter, in den eigenen Achsen von PartCraft (Y nach oben). Das STEP für andere CAD-Programme in dieser Version |
| {{ui:DXF der Skizze oder ebenen Fläche}} | `<Name> - <Skizze>.dxf` oder `<Name> - face.dxf` | DXF R12. Eine Skizze: Linien, Bögen, Kreise und Punkte in den eigenen Koordinaten der Skizze, auf den Layern PROFILE, CONSTRUCTION und POINTS. Eine gewählte ebene Fläche: ihre Umrisse als geschlossene Polylinien (runde Kanten als ihre Facetten) |
| {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}} | `<Name> - drawing.pdf` | Das A3-Zeichenblatt: drei Ansichten, Isometrie, Schnitt und Detail, falls eingestellt, Gesamtmaße, GD&T-Symbole, Schriftfeld |

:::note
{{ui:STEP AP242 (exakter Volumenkörper)}} und {{ui:STEP AP214 (exakter Volumenkörper)}} sind in dieser Version noch nicht vorhanden: Verwenden Sie {{ui:STEP (facettiert, Netzkernel)}}. Es hat die richtige Form und das richtige Volumen, aber jede runde Fläche besteht aus vielen ebenen Facetten, sodass andere Programme eine Bohrung nicht als Zylinder wählen können. Stellen Sie zuvor **Kurven** feiner ein, wenn das wichtig ist.
:::

- Exportiert wird das Bauteil auf dem Bildschirm. In einer Baugruppe ist der Export abgeschaltet; es gibt noch keinen Baugruppenexport.
- STL, 3MF, das facettierte STEP und das Flächen-DXF bestehen immer aus Facetten. Die Einstellung **Kurven** (im rechten Bereich, wenn nichts ausgewählt ist) legt fest, wie fein sie sind, von 32 bis 256 Facetten pro Umdrehung. Wählen Sie Fein oder Sehr fein, bevor Sie STL oder 3MF für einen glatten Druck exportieren.
- Die PDF-Zeichnung verwendet die eingebaute Schrift Helvetica des Lesers. Zeichen, die sie nicht darstellen kann, werden als „?“ gedruckt.

Schritt für Schritt: [Für Druck, STEP und DXF exportieren](topic:export-files) und [Ein Zeichenblatt erstellen](topic:drawing-pdf).

## Nicht gespeicherte Arbeit

- PartCraft hält kurz nach jeder Änderung eine Wiederherstellungskopie des geöffneten Bauteils oder der Baugruppe in diesem Browser vor, damit ein Absturz oder ein geschlossener Tab sie nicht verliert: Beim nächsten Öffnen von PartCraft fragt es „Ihre Arbeit wiederherstellen?“. Das ist kein Speichern: Speichern Sie in eine Datei, um Ihre Arbeit zu behalten. Siehe [Nicht gespeicherte Arbeit wiederherstellen](common:recover).
- Versuchen Sie, den Tab zu schließen oder neu zu laden, obwohl es nicht gespeicherte Änderungen gibt, fragt der Browser „Seite verlassen?“. Das ist das eigene Feld des Browsers; PartCraft kann dessen Wortlaut nicht ändern.
- {{ui:Neu}}, {{ui:Öffnen}} und das Schließen einer Baugruppe fragen nach, bevor nicht gespeicherte Änderungen verworfen werden.

## Online und offline

Alles geschieht auf Ihrem Computer: Der Netzkernel (ein WebAssembly-Programm) wird mit der Anwendung heruntergeladen und baut die Geometrie lokal auf, und Dateien werden von Ihrer Festplatte gelesen und dorthin geschrieben. Es laufen keine Bauteildaten über das Netz. Siehe [Der Netzkernel](topic:solid-kernels).

Um ganz ohne Verbindung zu arbeiten, speichern Sie PartCraft für die Offline-Nutzung, solange Sie online sind: Wählen Sie in der Anwendungsleiste {{ui:Für Offline speichern}} und warten Sie, während es zählt („Speichere 40 von 212“), bis **Offline bereit** erscheint. Die gespeicherte Kopie enthält die 3D-Bibliothek und den Netzkernel, sodass danach Modellieren, Speichern, jeder Export und Zeichnungen offline funktionieren. Steht dort **Speichern nicht möglich**, klicken Sie darauf, um es online erneut zu versuchen; **Offline nicht verfügbar** bedeutet, dass dieses Browserfenster keine Kopie vorhalten kann (private Fenster und einige verwaltete Computer). Ist die Kopie gespeichert, bietet ein Klick auf **Offline bereit** {{ui:Erneut speichern (neueste Version holen)}} und {{ui:Offline-Kopie entfernen}} an. Einzelheiten: [Offline arbeiten](common:offline).

:::online
Sie sind online. Auch ohne Speichern für die Offline-Nutzung können Sie weiterarbeiten, wenn die Verbindung abbricht, sobald PartCraft geladen ist und das Kürzel in der Statusleiste „Netzkernel“ lautet. Laden Sie die Seite nur nicht neu, bevor Sie wieder online sind.
:::

:::offline
Sie sind offline. Ist PartCraft bereits geöffnet, arbeiten Sie weiter; Speichern und Exportieren funktionieren weiterhin. Steht in der Anwendungsleiste **Offline bereit**, öffnet sich PartCraft auch ganz neu ohne Verbindung; andernfalls laden Sie diesen Tab nicht neu.
:::

## Unterschiede zwischen Browsern

- **Downloads.** Jeder Browser hat seinen eigenen Download-Ordner und seine eigene Art zu fragen. Fragt ein Browser, ob diese Website Dateien herunterladen darf, erlauben Sie es, sonst können Speichern und Exportieren nicht funktionieren.
- **Ziehen und Ablegen** einer Datei auf die Ansicht funktioniert in Chrome, Edge, Firefox und Safari.
- **Dateien von einem Telefon oder Tablet.** Auf iPhone und iPad zeigt Öffnen die Dateien-App; gespeicherte Dateien gehen nach Dateien, Downloads. Auf Android gehen sie in den Ordner Downloads.

Was die Dateien enthalten, unterscheidet sich zwischen Browsern oder Betriebssystemen nicht.
