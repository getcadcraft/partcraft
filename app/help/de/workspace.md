---
title: Der PartCraft-Bildschirm
summary: Eine Tour durch jede Leiste und jeden Bereich: die Symbolleiste und wie sie sich ändert, der Verlauf, die Bauteilangaben, die 3D-Ansicht, der Eigenschaftsbereich und die Statusleiste.
from: 7394fc49
keywords: Bildschirm, Layout, Symbolleiste, Verlauf, Feature-Baum, Eigenschaften, Bereich, Statusleiste, Oberfläche, UI, Tour, Vollbild
---

Der Bildschirm hat fünf Teile: die Symbolleiste oben, den Verlauf links, die 3D-Ansicht in der Mitte, den Eigenschaftsbereich rechts und die Statusleiste unten. Über allen sitzt die CadCraft-Anwendungsleiste.

## Die Anwendungsleiste

Die dünne Leiste ganz oben gehört zur CadCraft-Website, nicht zu PartCraft selbst. Sie zeigt den Namen der Anwendung und wo sie läuft, ein Versionsmenü, **Über PartCraft**, die Schaltfläche für den Bildschirmmodus und den Designschalter Papier / Modell.

- **Papier** sind dunkle Linien auf hellem Blatt. **Modell** sind helle Linien auf dunklem Hintergrund. Die Skizzenfarben folgen dem Design.
- {{ui:Einstellungen}} (das Zahnrad oder {{key:Mod+,}}) hat eine Registerkarte {{ui:PartCraft}}: welche Maustaste die Ansicht dreht, Mausrad oder Trackpad und Abhängigkeiten beim Skizzieren. Siehe [PartCraft-Einstellungen](topic:settings).
- Die Schaltfläche für den Bildschirmmodus oder {{key:Ctrl+Shift+F}} schaltet durch normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten bewegen Sie den Zeiger an den oberen Rand (oder tippen dort), um sie zurückzuholen. {{key:Esc}} kehrt zum Normalzustand zurück. Diese Taste ist auch auf einem Mac {{key:Ctrl+Shift+F}}, nicht ⌘.

## Die Symbolleiste

Die Symbolleiste ist gruppiert. Sie ändert sich mit dem, was Sie gerade tun, sodass sie in eine Zeile passt:

| Gruppe | Schaltflächen | Angezeigt |
|---|---|---|
| Datei | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:Speichern}}, {{ui:Exportieren}} (ein Menü) | Immer |
| Skizze | {{ui:Skizze}} | Wenn keine Skizze geöffnet ist |
| Skizze | {{ui:Beenden}}, {{ui:Linie}}, {{ui:Rechteck}}, {{ui:Kreis}}, {{ui:Bogen}}, {{ui:Punkt}}, {{ui:Mittellinie}}, {{ui:Abrunden}}, {{ui:Bemaßung}}, {{ui:Konstruktion}} | Nur solange eine Skizze geöffnet ist |
| Features | {{ui:Extrudieren}}, {{ui:Schnitt}}, {{ui:Drehung}}, {{ui:Bohrung}}, {{ui:Linear}}, {{ui:Kreisförmig}}, {{ui:Spiegeln}}, {{ui:Verrundung}}, {{ui:Fase}}, {{ui:Schale}}, {{ui:Mehr}} (ein Menü: Drehausschnitt, Ebene, Achse, Punkt, Sweep, Loft, Formschräge) | Am Bauteil, nicht solange eine Skizze oder die Zeichnung geöffnet ist. Verrundung und Fase wirken auf gerade Kanten zwischen zwei ebenen Flächen; Schale und Formschräge auf ebene Flächen. Sweep und Loft sind in dieser Version noch nicht vorhanden (sie brauchen einen exakten Kernel); ein Klick darauf sagt das |
| Features | {{ui:Fertig}} | Nur solange Sie Kanten oder Flächen für eine Verrundung, Fase, Schale oder Formschräge wählen |
| Zeichnung | {{ui:Zeichnung}} | Am Bauteil (nutzbar, sobald das Bauteil einen Volumenkörper hat) |
| Zeichnung | {{ui:Bezug}}, {{ui:Rahmen}}, {{ui:Oberfläche}}, {{ui:Detail}}, {{ui:PDF}}, {{ui:Zurück}} | Nur auf dem Zeichenblatt |
| Baugruppe | {{ui:Baugruppe}} | Am Bauteil (nutzbar, sobald das Bauteil einen Volumenkörper hat) |
| Baugruppe | {{ui:Kopie}}, {{ui:Einfügen}}, {{ui:Verbindung}}, {{ui:Kollision}}, {{ui:Bauteil}}, {{ui:Schließen}} | Nur in einer Baugruppe |
| Baugruppe | {{ui:Zurück}} | Solange Sie ein Bauteil aus einer Baugruppe heraus bearbeiten |
| Bearbeiten | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:Mehr}} (ein Menü: Ausschneiden, Kopieren, Einfügen, An gleicher Position einfügen, Duplizieren, Löschen, Alles auswählen, Auswahl aufheben) | Immer; jeder Eintrag wirkt auf die Skizze, den Verlauf oder die Baugruppe, in der Sie sind |
| Ansicht | {{ui:Einpassen}}, {{ui:Senkrecht}}, {{ui:Ansichten}} (ein Menü: Messen, Masseeigenschaften, Schnitt, Formschräge, Zebra, Krümmung, {{ui:Basisebenen}}, dann Isometrisch, Vorne, Hinten, Oben, Unten, Rechts, Links) | Immer |

Zeigen Sie auf eine Schaltfläche, um zu sehen, was sie tut und welche Taste sie hat. Eine ausgegraute Schaltfläche lässt sich gerade nicht verwenden: zum Beispiel die Feature-Schaltflächen, solange eine Skizze geöffnet ist, oder {{ui:Verbindung}}, bevor die Baugruppe zwei Bauteile hat.

Das Menü {{ui:Mehr}} in der Gruppe Bearbeiten listet jede Bearbeitungsaktion mit ihrer Taste auf. Worauf Kopieren und Einfügen wirken, richtet sich danach, wo Sie sind; siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste). Die Kurzinfo eines ausgegrauten Eintrags sagt, warum er gerade nicht wirken kann.

Das Menü {{ui:Exportieren}} enthält {{ui:STL, für den 3D-Druck}}, {{ui:3MF, für den 3D-Druck}}, {{ui:STEP AP242 (exakter Volumenkörper)}}, {{ui:STEP AP214 (exakter Volumenkörper)}}, {{ui:STEP (facettiert, Netzkernel)}}, {{ui:STEP AP214 (facettiert, Netzkernel)}}, {{ui:DXF der Skizze oder ebenen Fläche}} und {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}}. Die beiden exakten STEP-Einträge sind ausgegraut: Sie sind in dieser Version noch nicht vorhanden, verwenden Sie also {{ui:STEP (facettiert, Netzkernel)}}.

## Der Verlauf (links)

Der Bereich links ist der Feature-Verlauf des Bauteils, die Liste, aus der PartCraft von oben nach unten neu aufbaut.

- Die Überschrift ist der Name des Bauteils („Part1“, bis Sie es umbenennen).
- **Vorderebene**, **Draufsichtebene** und **Rechtsebene** stehen zuerst. Klicken Sie eine an, um sie auszuwählen; sie wird in der Ansicht hervorgehoben.
- Darunter stehen Ihre Features in der Reihenfolge, in der sie erstellt wurden. Eine Skizze, die ein Feature verwendet, ist unter diesem Feature eingerückt.
- Eine Markierung am rechten Ende einer Zeile zeigt ihren Zustand:

| Markierung | Bedeutung |
|---|---|
| (keine) | Aufgebaut, und eine Skizze ist vollständig bestimmt |
| − | Eine unterbestimmte Skizze (sie kann sich noch bewegen) |
| + | Eine überbestimmte Skizze |
| ⚠ | Aufgebaut, mit einer Warnung (zum Lesen darauf zeigen) |
| ⚠ Fehler | Das Feature ist fehlgeschlagen. Zeigen Sie darauf, um den Grund zu lesen, oder klicken Sie darauf |
| ⚠ nicht aufgebaut | Das Feature braucht ein anderes, das fehlgeschlagen oder aus ist |
| aus | Unterdrückt |

- Jedes Feature zeigt hinter seinem Namen seine wichtigste Zahl, etwa „25 mm“ bei einer Extrusion oder „Ø6.6 durch“ bei einer Bohrung. Doppelklicken Sie auf die Zahl oder drücken Sie {{key:F2}} auf der Zeile, um sie direkt dort zu ändern. Siehe [Maße ändern](topic:change-sizes).
- Klicken Sie ein Feature an, um es rechts zu bearbeiten. Doppelklicken Sie eine Skizze, um sie zu öffnen.
- Wenn Sie zurückrollen, steht in der Liste eine Zeile **Rollback-Leiste · vorwärts rollen**. Features darunter sind ausgegraut und nicht aufgebaut.
- Bei fokussierter Zeile wechseln {{key:Up}} und {{key:Down}} zwischen Zeilen, und {{key:Alt+Up}} / {{key:Alt+Down}} verschieben das Feature selbst, soweit der Verlauf es zulässt.

In einer Baugruppe listet derselbe Bereich stattdessen **Bauteile** (das erste ist als „fixiert“ markiert) und **Verbindungen**.

### Bauteilangaben

Unter dem Verlauf listet das Feld **Bauteil** **Volumen**, **Oberfläche**, **Größe (X × Y × Z)**, **Durchgangsbohrungen**, **Körper**, **Dreiecke**, die Zahl der **Features** und wie viele davon **Fehlerhaft** sind. Volumen und Flächeninhalte beziehen sich auf den vom Netzkernel aufgebauten facettierten Volumenkörper und liegen bei runden Formen etwas unter dem wahren Wert (siehe [Features und ihre Optionen](topic:features#curves-resolution)).

In einer Baugruppe trägt das Feld die Überschrift **Baugruppe**: Bauteile, Instanzen, Verbindungen, Nicht verbunden und Interferenz.

## Die 3D-Ansicht (Mitte)

Die Ansicht zeigt den Volumenkörper, die Grundebenen und jede Skizze, die noch von keinem Feature verwendet wird.

Die Grundebenen werden vollständig gezeichnet, solange das Bauteil leer ist. Sobald es einen Volumenkörper hat, treten sie zurück: schwach gezeichnet, damit sie das Bauteil nicht verdecken, und Klicks gehen durch sie hindurch zum Bauteil. Sie kommen vollständig zurück, während Sie wählen, wo Sie skizzieren ({{ui:Skizze}} ohne Auswahl), und wenn Sie eine im Verlauf auswählen. {{ui:Ansichten}} › {{ui:Basisebenen}} blendet sie ganz aus; sie werden trotzdem angezeigt, während Sie wählen, wo Sie skizzieren. PartCraft merkt sich diese Wahl.

- Ziehen Sie, um das Bauteil zu drehen, ziehen Sie mit rechter oder mittlerer Taste für Pan, drehen Sie das Rad, um am Zeiger zu zoomen. Einzelheiten unter [Tasten und Maus](topic:keyboard).
- Zeigen Sie auf eine Fläche, Kante oder Ebene, um sie aufleuchten zu sehen. Klicken Sie, um sie zu wählen. Flächen werden ganz hervorgehoben, und Kanten werden ganz gezeichnet und gewählt. {{key:Shift}}+Klick sammelt mehrere Kanten oder Flächen. Sie bleiben markiert.
- Der ViewCube oben rechts dreht sich mit dem Bauteil: Klicken Sie eine Fläche, Kante oder Ecke an, um von dort zu schauen, ziehen Sie ihn zum Drehen, die Haus-Schaltfläche geht zum Anfang zurück. Siehe [Der ViewCube](topic:view-cube).
- Eine ausgewählte Extrusion zeigt einen orangen Pfeil auf ihrer Endfläche, eine Drehung einen gebogenen Pfeil am Ende ihrer Drehung: Ziehen Sie ihn, um die Tiefe oder den Winkel zu ändern, oder tippen Sie in das Feld daneben. Siehe [Maße ändern](topic:change-sizes#drag-it-in-the-view).
- Ist ein Bauteil leer, listet ein Feld mit der Überschrift **Ein Bauteil beginnen** die ersten Schritte auf.
- Ziehen Sie eine `.partcraft.json`- oder `.partcraft-asm.json`-Datei irgendwo auf die Ansicht, um sie zu öffnen. Eine dort abgelegte `.step`-, `.stp`-, `.stl`-, `.obj`-, `.3mf`- oder `.3dm`-Datei öffnet sich als Volumenkörper.

### Während Sie Kanten oder Flächen wählen

Nach {{ui:Verrundung}}, {{ui:Fase}} oder {{ui:Schale}} ohne Auswahl (oder {{ui:Kanten wählen}} an einem solchen Feature) zeigt sich das Bauteil so, wie es vor diesem Feature war. Klicken Sie Kanten oder Flächen an, um sie hinzuzufügen oder zu entfernen; ihre Markierungen zeigen, was dabei ist. {{ui:Fertig}} oder {{key:Esc}} beendet. Siehe [Verrunden, Fasen und Aushöhlen](topic:fillet-chamfer-shell).

### Auf dem Zeichenblatt

{{ui:Zeichnung}} ersetzt die 3D-Ansicht durch das A3-Zeichenblatt. Das Rad zoomt, Ziehen mit rechter oder mittlerer Taste verschiebt (Pan), {{key:F}} passt ein. Siehe [Eine Zeichnung erstellen](topic:drawing-pdf).

### Solange eine Skizze geöffnet ist

Die Ansicht dreht sich senkrecht auf die Skizzenebene, und oben erscheint eine 2D-Skizzenebene. Das Bauteil zeigt nur die Features, die vor dieser Skizze erstellt wurden. Ein Streifen oben links zeigt das Statuskürzel der Skizze („Vollständig bestimmt“, „Unterbestimmt · 3 Freiheitsgrade“ und so weiter) und ihren Namen, etwa „Sketch2 auf einer Fläche von Extrude1“.

## Der Eigenschaftsbereich (rechts)

Der Bereich rechts zeigt, was gerade ausgewählt ist, und seine Überschrift benennt es:

- **Bauteil** (nichts ausgewählt): der **Name** des Bauteils und die Einstellung **Kurven**.
- Eine Ebene: eine Schaltfläche {{ui:Darauf skizzieren}}.
- Eine **Fläche**: welcher Art sie ist (Ebene Fläche, Zylinder mit Radius und Achse, Kegel, Kugel oder Torus), ihr Flächeninhalt, welches Feature sie erzeugt hat, und bei einer ebenen Fläche {{ui:Auf dieser Fläche skizzieren}}, {{ui:Senkrecht ansehen}}, {{ui:Fläche als DXF exportieren}}, {{ui:Davon extrudieren}}, {{ui:Hineinschneiden}} und {{ui:Bohrung hier}} (siehe [Eine ganze Fläche ziehen oder drücken](topic:extrude-and-cut#pull-or-push-a-whole-face)).
- Eine **Kante**: ihre Art (gerade, ein Kreis mit Mittelpunkt und Radius oder eine Kurve), ihre Länge und die beiden Flächen, zwischen denen sie liegt (etwa „Endfläche von Extrude1 und Seite von Extrude1“), mit den Schaltflächen {{ui:Verrundung}} und {{ui:Fase}}.
- Mehrere mit {{key:Shift}} gewählte Kanten oder Flächen: wie viele, mit {{ui:Verrundung}} und {{ui:Fase}} für Kanten sowie {{ui:Leeren}}.
- Ein Feature: seine Zahlen und Optionen, die Bemaßungen seiner Skizze, dann {{ui:Unterdrücken}}, {{ui:Bis hierhin zurückrollen}}, {{ui:Nach oben}}, {{ui:Nach unten}}, {{ui:Löschen}} und sein **Name**.
- Eine geöffnete Skizze: ihr Zustand, die Abhängigkeiten, die Sie zur Auswahl hinzufügen können, die Liste der Abhängigkeiten und Bemaßungen, **Über Koordinaten hinzufügen** sowie {{ui:Skizze beenden}}, {{ui:Einpassen}} und {{ui:Als DXF exportieren}}.
- Auf dem Zeichenblatt: die Einstellungen für Schnitt und Detail oder das ausgewählte GD&T-Symbol.
- In einer Baugruppe: die Baugruppe, das ausgewählte Bauteil oder die ausgewählte Verbindung.

Jedes Zahlenfeld wirkt, wenn Sie {{key:Enter}} oder {{key:Tab}} drücken oder woandershin klicken. Das Bauteil wird sofort neu aufgebaut; es gibt keine Schaltfläche OK. Mit {{key:Mod+Z}} gehen Sie zurück.

## Die Statusleiste (unten)

- Links die Koordinaten des Zeigers in der Skizze (nur solange eine Skizze geöffnet ist).
- In der Mitte Meldungen: was als Nächstes zu tun ist und warum etwas abgelehnt wurde. Lesen Sie sie, wenn nichts zu geschehen scheint.
- Nahe rechts das Kernel-Kürzel: in dieser Version immer „Netzkernel“. Zeigen Sie darauf, um zu sehen, was das bedeutet. Siehe [Der Netzkernel](topic:solid-kernels).
- Ganz rechts ein Kürzel: „Wird neu aufgebaut …“, während das Bauteil neu aufgebaut wird, dann „Neu aufgebaut in … ms“, wenn alles gut ist, oder „1 Feature fehlerhaft“. In einer Baugruppe lautet es „Platziert in … ms“ oder zählt Verbindungsprobleme.

Siehe auch [Ein Handbuch in Illustrate beginnen](topic:illustrate): der Arbeitsbereich, der aus Ihren Bauteilen und Baugruppen Montageanleitungen erstellt.

## Auf einem schmalen Bildschirm

Bis 760 Pixel Breite, etwa auf einem Telefon, behält die Ansicht den Bildschirm: Die Symbolleiste ist eine Zeile, die seitwärts scrollt, und die Bereiche öffnen sich als Blätter aus einer Leiste am unteren Rand. {{ui:Werkzeuge}} blendet die Symbolleiste aus, und {{ui:Bewegen}} setzt sie nach unten. Siehe [Trackpad, Touch und kleine Bildschirme](topic:trackpad-and-touch).
