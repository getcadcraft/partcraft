---
title: Der PartCraft-Bildschirm
summary: Ein Rundgang durch jede Leiste und jeden Bereich: die Symbolleiste und wie sie sich ändert, die Historie, die Bauteildaten, die 3D-Ansicht, der Eigenschaftenbereich und die Statusleiste.
keywords: bildschirm, layout, symbolleiste, historie, feature-baum, eigenschaften, bereich, statusleiste, oberfläche, ui, rundgang, vollbild
from: 5b5bb843
---

Der Bildschirm hat fünf Teile: die Symbolleiste oben, die Historie links, die 3D-Ansicht in der Mitte, den Eigenschaftenbereich rechts und die Statusleiste unten. Darüber liegt die CadCraft-App-Leiste.

## Die App-Leiste

Die schmale Leiste ganz oben gehört zur CadCraft-Website, nicht zu PartCraft selbst. Sie zeigt den Namen der App und wo sie läuft, ein Versionsmenü, **Info zu PartCraft**, die Schaltfläche für den Bildschirmmodus und den Umschalter Papier / Modell.

- **Papier** sind dunkle Linien auf einem hellen Blatt. **Modell** sind helle Linien auf dunklem Hintergrund. Skizzenfarben folgen dem Design.
- {{ui:Einstellungen}} (das Zahnrad oder {{key:Mod+,}}) hat eine Registerkarte {{ui:PartCraft}}: welche Maustaste die Ansicht dreht, Mausrad oder Trackpad und Abhängigkeiten beim Skizzieren. Siehe [PartCraft-Einstellungen](topic:settings).
- Die Schaltfläche für den Bildschirmmodus oder {{key:Ctrl+Shift+F}} wechselt zwischen normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten bewegen Sie den Zeiger an den oberen Rand (oder tippen dort), um sie zurückzuholen. {{key:Esc}} kehrt zu normal zurück. Diese Taste ist auch auf dem Mac {{key:Ctrl+Shift+F}}, nicht ⌘.

## Die Symbolleiste

Die Symbolleiste ist gruppiert. Sie ändert sich mit dem, was Sie gerade tun, damit sie in eine Zeile passt:

| Gruppe | Schaltflächen | Angezeigt |
|---|---|---|
| Datei | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:Speichern}}, {{ui:Exportieren}} (ein Menü) | Immer |
| Skizze | {{ui:Skizze}} | Wenn keine Skizze geöffnet ist |
| Skizze | {{ui:Beenden}}, {{ui:Linie}}, {{ui:Rechteck}}, {{ui:Kreis}}, {{ui:Bogen}}, {{ui:Punkt}}, {{ui:Mittellinie}}, {{ui:Verrundung}}, {{ui:Bemaßung}}, {{ui:Konstruktion}} | Nur, während eine Skizze geöffnet ist |
| Features | {{ui:Extrusion}}, {{ui:Ausschneiden}}, {{ui:Drehung}}, {{ui:Bohrung}}, {{ui:Linear}}, {{ui:Kreisförmig}}, {{ui:Spiegeln}}, {{ui:Verrundung}}, {{ui:Fase}}, {{ui:Schale}}, {{ui:Mehr}} (ein Menü: Drehschnitt, Ebene, Achse, Punkt, Sweep, Loft, Formschräge) | Am Bauteil, nicht während eine Skizze oder die Zeichnung geöffnet ist. Verrundung und Fase wirken auf gerade Kanten zwischen zwei ebenen Flächen; Schale und Formschräge auf ebenen Flächen. Sweep und Loft sind in dieser Version noch nicht umgesetzt (sie brauchen einen exakten Kernel); ein Klick darauf sagt das |
| Features | {{ui:Fertig}} | Nur, während Sie Kanten oder Flächen für eine Verrundung, Fase, Schale oder Formschräge wählen |
| Zeichnung | {{ui:Zeichnung}} | Am Bauteil (nutzbar, sobald das Bauteil einen Volumenkörper hat) |
| Zeichnung | {{ui:Bezug}}, {{ui:Rahmen}}, {{ui:Oberfläche}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Zurück}} | Nur auf dem Zeichnungsblatt |
| Baugruppe | {{ui:Baugruppe}} | Am Bauteil (nutzbar, sobald das Bauteil einen Volumenkörper hat) |
| Baugruppe | {{ui:Kopie}}, {{ui:Einfügen}}, {{ui:Verbindung}}, {{ui:Kollision}}, {{ui:Bauteil}}, {{ui:Schließen}} | Nur in einer Baugruppe |
| Baugruppe | {{ui:Zurück}} | Während Sie ein Bauteil aus einer Baugruppe bearbeiten |
| Bearbeiten | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:Mehr}} (ein Menü: Ausschneiden, Kopieren, Einfügen, An gleicher Position einfügen, Duplizieren, Löschen, Alles auswählen, Auswahl aufheben) | Immer; jeder Eintrag wirkt auf die Skizze, die Historie oder die Baugruppe, in der Sie sich befinden |
| Ansicht | {{ui:Einpassen}}, {{ui:Senkrecht ansehen}}, {{ui:Ansichten}} (ein Menü: Messen, Masseneigenschaften, Schnitt, Formschräge, Zebra, Krümmung, {{ui:Basisebenen}}, dann Isometrisch, Vorne, Zurück, Oben, Unten, Rechts, Links) | Immer |

Fahren Sie mit dem Zeiger über eine Schaltfläche, um zu sehen, was sie tut und welche Taste dazugehört. Eine ausgegraute Schaltfläche können Sie gerade nicht verwenden: zum Beispiel die Feature-Schaltflächen, während eine Skizze geöffnet ist, oder {{ui:Verbindung}}, bevor die Baugruppe zwei Bauteile hat.

Das Menü {{ui:Mehr}} in der Gruppe Bearbeiten listet jede Bearbeitungsaktion mit ihrer Taste auf. Worauf Kopieren und Einfügen wirken, richtet sich danach, wo Sie sich befinden; siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste). Der Tooltip eines ausgegrauten Eintrags sagt, warum er gerade nicht wirken kann.

Das Menü {{ui:Exportieren}} enthält {{ui:STL, für den 3D-Druck}}, {{ui:3MF, für den 3D-Druck}}, {{ui:STEP AP242 (exakter Volumenkörper)}}, {{ui:STEP AP214 (exakter Volumenkörper)}}, {{ui:STEP (facettiert, Netzkernel)}}, {{ui:STEP AP214 (facettiert, Netzkernel)}}, {{ui:DXF der Skizze oder ebenen Fläche}} und {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}}. Die exakten STEP-Einträge schreiben runde Flächen auf ihren echten Flächen; die facettierten schreiben sie als ebene Facetten.

## Die Historie (links)

Der Bereich links ist die Feature-Historie des Bauteils, die Liste, die PartCraft von oben nach unten neu aufbaut.

- Die Überschrift ist der Name des Bauteils („Part1“, bis Sie es umbenennen).
- **Ebene Vorne**, **Ebene Oben** und **Ebene Rechts** stehen zuerst. Klicken Sie auf eine, um sie auszuwählen; sie wird in der Ansicht hervorgehoben.
- Darunter stehen Ihre Features in der Reihenfolge, in der Sie sie erstellt haben. Eine Skizze, die ein Feature verwendet, ist unter diesem Feature eingerückt.
- Eine Markierung am rechten Ende einer Zeile zeigt den Zustand an:

| Markierung | Bedeutung |
|---|---|
| (keine) | Erstellt, und die Skizze ist vollständig bestimmt |
| − | Eine Skizze, die unterbestimmt ist (sie kann sich noch bewegen) |
| + | Eine Skizze, die überbestimmt ist |
| ⚠ | Erstellt, mit einer Warnung (Zeiger darauf, um sie zu lesen) |
| ⚠ Fehler | Das Feature ist fehlgeschlagen. Zeiger darauf, um den Grund zu lesen, oder klicken Sie darauf |
| ⚠ nicht erstellt | Das Feature braucht ein anderes, das fehlgeschlagen oder ausgeschaltet ist |
| aus | Unterdrückt |

- Jedes Feature zeigt seine Hauptzahl nach seinem Namen, etwa „25 mm“ bei einer Extrusion oder „Ø6.6 thru“ bei einer Bohrung. Doppelklicken Sie auf die Zahl oder drücken Sie in der Zeile {{key:F2}}, um sie direkt dort zu ändern. Siehe [Maße ändern](topic:change-sizes).
- Klicken Sie auf ein Feature, um es rechts zu bearbeiten. Doppelklicken Sie auf eine Skizze, um sie zu öffnen.
- Wenn Sie zurückrollen, steht eine Zeile **Rückrollleiste · vorwärts rollen** in der Liste. Features darunter sind ausgegraut und nicht erstellt.
- Wenn eine Zeile den Fokus hat, wechseln {{key:Up}} und {{key:Down}} zwischen den Zeilen, und {{key:Alt+Up}} / {{key:Alt+Down}} verschieben das Feature selbst, soweit die Historie es erlaubt.

In einer Baugruppe listet derselbe Bereich stattdessen **Bauteile** (das erste ist als „fixiert“ markiert) und **Verbindungen**.

### Bauteildaten

Unter der Historie listet das Feld **Bauteil** das **Volumen**, die **Oberfläche**, die **Größe (X × Y × Z)**, die **Durchgangslöcher**, die **Körper**, die **Dreiecke**, die Anzahl der **Features** und wie viele **fehlschlagen**. Volumen und Flächen gehören zum facettierten Volumenkörper, den der Netzkernel erstellt, bei runden Formen etwas unter dem wahren Wert (siehe [Features und ihre Optionen](topic:features#curves-resolution)).

In einer Baugruppe trägt das Feld die Überschrift **Baugruppe**: Bauteile, Instanzen, Verbindungen, Nicht verbunden und Überschneidung.

## Die 3D-Ansicht (Mitte)

Die Ansicht zeigt den Volumenkörper, die Basisebenen und jede Skizze, die noch von keinem Feature verwendet wird.

Die Basisebenen werden voll gezeichnet, solange das Bauteil leer ist. Sobald es einen Volumenkörper hat, treten sie zurück: blass gezeichnet, damit sie das Bauteil nicht verdecken, und Klicks gehen durch sie hindurch zum Bauteil. Sie erscheinen wieder voll, während Sie wählen, wo Sie skizzieren ({{ui:Skizze}} ohne Auswahl), und wenn Sie eine in der Historie auswählen. {{ui:Ansichten}} › {{ui:Basisebenen}} blendet sie ganz aus; sie erscheinen weiterhin, während Sie wählen, wo Sie skizzieren. PartCraft merkt sich diese Auswahl.

- Ziehen, um das Bauteil zu drehen, rechts oder mit der mittleren Taste ziehen, um zu verschieben, am Mausrad drehen, um am Zeiger zu zoomen. Details unter [Tasten und Maus](topic:keyboard).
- Fahren Sie mit dem Zeiger über eine Fläche, Kante oder Ebene, um sie aufleuchten zu sehen. Klicken Sie, um sie auszuwählen. Flächen werden als Ganzes hervorgehoben, Kanten werden als Ganzes gezeichnet und ausgewählt. {{key:Shift}}+Klick sammelt mehrere Kanten oder Flächen. Sie bleiben markiert.
- Der ViewCube oben rechts dreht sich mit dem Bauteil: Klicken Sie auf eine Fläche, Kante oder Ecke, um von dort zu schauen, ziehen Sie ihn zum Drehen, die Haus-Schaltfläche kehrt zum Start zurück. Siehe [Der ViewCube](topic:view-cube).
- Eine ausgewählte Extrusion zeigt einen orangefarbenen Pfeil auf ihrer Endfläche, eine Drehung einen gebogenen Pfeil am Ende ihrer Drehung: Ziehen Sie ihn, um die Tiefe oder den Winkel zu ändern, oder geben Sie einen Wert in das Feld daneben ein. Siehe [Maße ändern](topic:change-sizes#drag-it-in-the-view).
- Wenn ein Bauteil leer ist, listet ein Feld mit der Überschrift **Ein Bauteil beginnen** die ersten Schritte auf.
- Legen Sie eine Datei `.partcraft.json` oder `.partcraft-asm.json` irgendwo auf der Ansicht ab, um sie zu öffnen. Eine dorthin gelegte Datei `.step`, `.stp`, `.stl`, `.obj`, `.3mf` oder `.3dm` öffnet sich als Volumenkörper.

### Während Sie Kanten oder Flächen wählen

Nach {{ui:Verrundung}}, {{ui:Fase}} oder {{ui:Schale}} ohne Auswahl (oder {{ui:Kanten wählen}} bei einem solchen Feature) zeigt das Bauteil den Stand vor diesem Feature. Klicken Sie auf Kanten oder Flächen, um sie hinzuzufügen oder zu entfernen; ihre Markierungen zeigen, was enthalten ist. {{ui:Fertig}} oder {{key:Esc}} beendet. Siehe [Verrunden, Fasen und Aushöhlen](topic:fillet-chamfer-shell).

### Auf dem Zeichnungsblatt

{{ui:Zeichnung}} ersetzt die 3D-Ansicht durch das A3-Zeichnungsblatt. Mausrad zoomt, rechts oder mit der mittleren Taste ziehen verschiebt, {{key:F}} passt ein. Siehe [Eine Zeichnung erstellen](topic:drawing-pdf).

### Während eine Skizze geöffnet ist

Die Ansicht dreht sich, um direkt auf die Skizzenebene zu schauen, und eine 2D-Skizzenebene erscheint oben. Das Bauteil zeigt nur die Features, die vor dieser Skizze erstellt wurden. Ein Streifen oben links zeigt die Zustandsanzeige der Skizze („Vollständig bestimmt“, „Unterbestimmt · 3 Freiheitsgrade“ und so weiter) und ihren Namen, etwa „Sketch2 auf einer Fläche von Extrude1“.

## Der Eigenschaftenbereich (rechts)

Der Bereich rechts zeigt, was ausgewählt ist, und seine Überschrift nennt es:

- **Bauteil** (nichts ausgewählt): der **Name** des Bauteils und die Einstellung **Kurven**.
- Eine Ebene: eine Schaltfläche {{ui:Darauf skizzieren}}.
- Eine **Fläche**: welche Art sie ist (ebene Fläche, Zylinder mit seinem Radius und seiner Achse, Kegel, Kugel oder Torus), ihre Fläche, welches Feature sie erzeugt hat, und bei einer ebenen Fläche {{ui:Auf dieser Fläche skizzieren}}, {{ui:Senkrecht ansehen}}, {{ui:Fläche als DXF exportieren}}, {{ui:Davon extrudieren}}, {{ui:Hineinschneiden}} und {{ui:Bohrung hier}} (siehe [Eine ganze Fläche ziehen oder drücken](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Eine **Kante**: ihre Art (gerade, ein Kreis mit Mittelpunkt und Radius oder eine Kurve), ihre Länge und die zwei Flächen, zwischen denen sie liegt (etwa „Extrude1 Endfläche und Extrude1 Seite“), mit den Schaltflächen {{ui:Verrundung}} und {{ui:Fase}}.
- Mehrere mit {{key:Shift}} gewählte Kanten oder Flächen: wie viele, mit {{ui:Verrundung}} und {{ui:Fase}} für Kanten und {{ui:Leeren}}.
- Ein Feature: seine Zahlen und Optionen, die Maße seiner Skizze, dann {{ui:Unterdrücken}}, {{ui:Bis hierhin zurückrollen}}, {{ui:Nach oben}}, {{ui:Nach unten}}, {{ui:Löschen}} und seinen **Namen**.
- Eine geöffnete Skizze: ihr Zustand, die Abhängigkeiten, die Sie zur Auswahl hinzufügen können, die Liste der Abhängigkeiten und Bemaßungen, **Nach Koordinaten hinzufügen**, und {{ui:Skizze beenden}}, {{ui:Einpassen}} und {{ui:Als DXF exportieren}}.
- Auf dem Zeichnungsblatt: die Einstellungen für Schnitt und Detail oder das ausgewählte GD&T-Symbol.
- In einer Baugruppe: die Baugruppe, das ausgewählte Bauteil oder die ausgewählte Verbindung.

Jedes Zahlenfeld wirkt, wenn Sie {{key:Enter}} oder {{key:Tab}} drücken oder daneben klicken. Das Bauteil wird sofort neu aufgebaut; es gibt keine OK-Schaltfläche. Verwenden Sie {{key:Mod+Z}}, um zurückzugehen.

## Die Statusleiste (unten)

- Links die Koordinaten des Zeigers in der Skizze (nur, während eine Skizze geöffnet ist).
- In der Mitte Meldungen: was als Nächstes zu tun ist und warum etwas abgelehnt wurde. Lesen Sie sie, wenn scheinbar nichts geschieht.
- Rechts davon der Kernel-Chip: in dieser Version immer „Netzkernel“. Fahren Sie darüber, um zu sehen, was das bedeutet. Siehe [Der Netzkernel](topic:solid-kernels).
- Ganz rechts ein Chip: „Wird neu aufgebaut…“, während das Bauteil neu aufgebaut wird, dann „In … ms neu aufgebaut“, wenn alles in Ordnung ist, oder „1 Feature fehlgeschlagen“. In einer Baugruppe steht dort „In … ms platziert“ oder die Anzahl der Verbindungsprobleme.

Siehe auch [Eine Anleitung in Illustrate starten](topic:illustrate): den Arbeitsbereich, der Baugruppenanleitungen aus Ihren Bauteilen und Baugruppen erstellt.

## Auf einem schmalen Bildschirm

Bis 760 Pixel Breite, etwa auf einem Telefon, bleibt die Ansicht im Bildschirm: Die Symbolleiste ist eine Zeile, die seitlich scrollt, und die Bereiche öffnen sich als Blätter aus einer Leiste unten. {{ui:Werkzeuge}} blendet die Symbolleiste aus, und {{ui:Bewegen}} setzt sie nach unten. Siehe [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).
