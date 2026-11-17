---
title: Features und ihre Optionen
summary: Jedes Feature der Symbolleiste mit seinen Einstellungen, Standardwerten und Grenzen, von Extrusion über Verrundung, Schale und importierte STEP-Volumenkörper, die Aktionen, die alle Features gemeinsam haben, und die Bauteileinstellungen.
keywords: features, noch nicht umgesetzt, extrusion, ausschneiden, drehung, dreh-schnitt, bohrung, senkung, lineares muster, kreismuster, spiegeln, verrundung, fase, schale, importieren, optionen, standardwerte, einstellungen, auflösung, kurven, facetten, unterdrücken, zurückrollen
from: ab3a598e
---

Features werden im Verlauf in der Reihenfolge aufgeführt, in der sie erstellt wurden, und von oben nach unten neu aufgebaut. Jedes ist nach seiner Art mit einer Nummer benannt: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft erstellt jedes Feature mit dem Mesh-Kernel. Verrundung und Fase funktionieren an geraden Kanten zwischen zwei ebenen Flächen, und Schale öffnet ebene Flächen. Importierte Volumenkörper brauchen einen exakten Kernel, den diese Version nicht hat: Sie sind noch nicht umgesetzt, und ihr Abschnitt unten beschreibt sie als Bauteil, das ein früherer Build erstellt hat und das sie behält. Siehe [Der Mesh-Kernel](topic:solid-kernels) und [Was noch nicht umgesetzt ist](topic:not-built-yet).

## Skizze

| Einstellung | Hinweise |
|---|---|
| Ebene | Ebene Vorne, Oben oder Rechts oder eine ebene Fläche. Nur angezeigt, nicht änderbar: Um eine Skizze zu verschieben, erstellen Sie eine neue |
| Zustand | Vollständig bestimmt, Unterbestimmt (mit den Freiheitsgraden), Überbestimmt oder Leer |
| Geometrie, Abhängigkeiten | Wie viele Kurven, Punkte und Abhängigkeiten |
| Bemaßende Maße | Jedes Maß der Skizze, bearbeitbar |

Schaltflächen: {{ui:Skizze bearbeiten}}, {{ui:Als DXF exportieren}}.

## Extrusion und Ausschneiden

{{ui:Extrusion}} und {{ui:Ausschneiden}} erstellen dasselbe Feature, beginnend mit unterschiedlichen Einstellungen.

| Einstellung | Auswahl | Extrusion beginnt bei | Ausschneiden beginnt bei |
|---|---|---|---|
| **Operation** | Aufsatz (Material hinzufügen), Ausschneiden (Material entfernen), Schnittmenge (Überlappung behalten), Neuer Körper (in dieser Version noch nicht umgesetzt) | Aufsatz | Ausschneiden |
| **Ende** | Abstand (eine Tiefe), Mittelebene (in beide Richtungen), Durch alle | Abstand | Durch alle |
| **Tiefe (mm)** | Über 0, bis 1,000,000 | 10 | 10 |
| **Richtung umkehren** | Aus / An | Aus | Aus |

- Profil: jede geschlossene Kontur aus durchgezogenen Linien, Kreisen und Bögen in der Skizze. Konturen innerhalb von Konturen sind Bohrungen.
- Durch alle funktioniert nur für Ausschnitte. Es reicht auf der gewählten Seite ganz durch das Bauteil.
- Ein Ausschnitt geht ins Material, weg von der nach außen zeigenden Seite der Skizzenebene; Richtung umkehren dreht es um.

## Drehung und Dreh-Schnitt

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Operation** | Aufsatz, Ausschneiden | Aufsatz ({{ui:Drehung}}), Ausschneiden ({{ui:Mehr}} › {{ui:Dreh-Schnitt}}) |
| **Winkel (°)** | Über 0, bis 360 | 360 |
| **Achse** | Erste Mittellinie, jede Linie oder Mittellinie der Skizze, oder ein Achsenelement in der Ebene der Skizze | Erste Mittellinie |

- Das Profil muss auf einer Seite der Achse bleiben. Es darf sie berühren.
- Die Achse einer Drehung kann für Kreismuster und Baugruppenverbindungen verwendet werden.

## Bohrung

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Typ** | Einfach, Senkung | Einfach |
| **Durchmesser (mm)** | Über 0 | 6 |
| **Durch alle** | Ein / Aus | Ein |
| **Tiefe (mm)** | Wenn Durch alle aus ist | 10 |
| **Senkung ⌀** | Breiter als die Bohrung | 11 |
| **Senkungstiefe** | Flacher als eine Sacklochbohrung | 6 |
| **Richtung umkehren** | Aus / An | Aus |

- Eine Bohrung an jedem losen Punkt der Skizze (Punkte, die mit dem Werkzeug Punkt erstellt wurden). Der Bereich zeigt, wie viele es sind.
- Bohrungen werden senkrecht zur Skizzenebene ins Material gebohrt.
- Die Achse jeder Bohrung kann für Baugruppenverbindungen verwendet werden („Hole1, Bohrung 2“).

## Lineares Muster

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Features zum Kopieren** | Alle Volumenkörper-Features darüber | Das ausgewählte Feature, sonst das letzte Volumenkörper-Feature |
| **Richtung** | X-Achse, Y-Achse, Z-Achse; eine Linie einer früheren Skizze; die Achse einer Drehung; eine gewählte Kante | X-Achse (oder die Kante, die beim Hinzufügen gewählt wurde) |
| **Abstand (mm)** | Jede Zahl | 20 |
| **Anzahl** | 1 bis 1000, einschließlich des Originals | 3 |
| **Richtung umkehren** | Aus / An | Aus |

## Kreismuster

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Features zum Kopieren** | Wie bei Linear | Wie bei Linear |
| **Achse** | Wie bei Richtung oben | Die Achse der letzten Drehung, sonst die Y-Achse (oder die gewählte Kante) |
| **Winkel (°)** | Über 0, bis 360. 360 verteilt die Kopien gleichmäßig rundherum; weniger verteilt sie über den Winkel | 360 |
| **Anzahl** | 1 bis 1000, einschließlich des Originals | 6 |
| **Richtung umkehren** | Aus / An | Aus |

## Spiegeln

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Spiegeln** | Der ganze Körper (wie bisher erstellt) oder gewählte Features | Das ausgewählte Feature, sonst der ganze Körper |
| **Spiegelebene** | Ebene Vorne, Oben oder Rechts; eine ebene Fläche | Ebene Rechts oder die ebene Fläche, die beim Hinzufügen gewählt wurde |

## Verrundung und Fase

In dieser Version erstellt der Mesh-Kernel sie an geraden Kanten zwischen zwei ebenen Flächen (äußere oder innere Ecken) mit einem Radius. Eine runde Kante meldet: „Verrundung: in dieser Version nur gerade Kanten zwischen zwei ebenen Flächen (der Mesh-Kernel erstellt sie). Runde oder schräge gekrümmte Kanten in der Skizze.“ Wo gerundete Kanten an einer Ecke zusammentreffen, werden sie auf Gehrung geschnitten, und das Feature warnt: „Verrundung durch den Mesh-Kernel: Wo gerundete Kanten zusammentreffen, werden sie auf Gehrung geschnitten, nicht verschliffen.“ Alle Fasentypen (gleiche Strecke, zwei Strecken, Strecke und Winkel, mit **Seiten tauschen**) funktionieren. Siehe [Runden, Abschrägen und Aushöhlen](topic:fillet-chamfer-shell).

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Radius (mm)** (Verrundung) | Über 0 | 2 |
| **Strecke (mm)** (Fase) | Über 0, auf beiden Flächen gleich | 1 |
| **Kanten** | Die gewählten Kanten, jede mit den zwei Flächen aufgelistet, die sie verbinden („Extrude1 Stirnfläche × Extrude1 Seite“), mit **Entfernen** | Die Kanten, die beim Hinzufügen gewählt wurden |

- Wählen Sie Kanten, bevor Sie die Schaltfläche wählen ({{key:Shift}}+Klick für mehrere), oder wählen Sie die Schaltfläche ohne Auswahl und klicken danach auf Kanten.
- {{ui:Kanten wählen}} (oder Doppelklick auf das Feature) ändert die Kanten.
- Kanten werden über die zwei Flächen gehalten, die sie verbinden, daher überstehen sie Größenänderungen weiter oben im Verlauf.

## Schale

Der Mesh-Kernel erstellt sie. Nur ebene Flächen können geöffnet werden („Schale: in dieser Version werden nur ebene Flächen geöffnet (der Mesh-Kernel erstellt sie).“). Wände unterschiedlicher Dicke sind noch nicht umgesetzt. Siehe [Runden, Abschrägen und Aushöhlen](topic:fillet-chamfer-shell).

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Wand (mm)** | Über 0 | 2 |
| **Wände wachsen nach außen (die Flächen bleiben innen)** | Aus: Wände gehen nach innen. An: Wände gehen nach außen | Aus |
| **Offene Flächen** | Die entfernten Flächen, mindestens eine, mit **Entfernen** | Die Flächen, die beim Hinzufügen gewählt wurden |

{{ui:Flächen wählen}} ändert die offenen Flächen.

## Importierter Volumenkörper

Entsteht durch das Öffnen einer STEP-, STL-, OBJ- oder 3MF-Datei: ein Volumenkörper aus Dreiecken ohne eigenen Verlauf ([STEP-Datei öffnen](topic:import-step), [STL, OBJ oder 3MF öffnen](topic:open-meshes)). Er zeigt die Datei, aus der er stammt, und was der Import repariert hat; **Einheiten in der Datei**, **Oben in der Datei** und **Verwenden für** bleiben bearbeitbar. Ein STEP-Volumenkörper, den ein älterer Build mit exaktem Kernel importiert hat, bleibt im Verlauf als noch nicht vorhanden markiert; öffnen Sie die STEP-Datei erneut, um ihn als Dreiecke zu übernehmen.

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Oben in der Datei** | Z oben (die meisten CAD-Programme), Y oben | Z oben |

Muster und Spiegelungen können einen importierten Volumenkörper kopieren, aber keine Verrundung, Fase oder Schale.

## Was jedes Feature hat

Unten im Bereich jedes Features:

| Schaltfläche | Funktion |
|---|---|
| {{ui:Unterdrücken}} / {{ui:Unterdrückung aufheben}} | Schaltet es aus oder ein. Features, die es brauchen, werden bei ausgeschaltetem Zustand nicht erstellt |
| {{ui:Bis hierhin zurückrollen}} | Erstellt nur die Features über diesem. Neue Features werden an der Rückrollleiste eingefügt |
| {{ui:Nach oben}} / {{ui:Nach unten}} | Umordnen, wenn nichts, was es verwendet, darunter landen würde. Sonst ausgegraut, mit Grund |
| {{ui:Löschen}} | Löscht es und (nach Rückfrage) jedes Feature, das es verwendet |
| Name | Umbenennen (bis zu 60 Zeichen) |

Features mit einer Skizze listen außerdem **Skizzenbemaßungen**, direkt bearbeitbar.

## Zustände im Verlauf

| Zustand | Angezeigt als | Bedeutung |
|---|---|---|
| Erstellt | Normal | Alles in Ordnung |
| Warnung | ⚠ | Erstellt, mit etwas zu prüfen: „Überbestimmt: 1 Abhängigkeit wird nicht benötigt.“ oder „Danach ist vom Bauteil nichts mehr übrig.“ |
| Fehler | ⚠ Fehler, rot | Konnte nicht erstellt werden; die Meldung sagt, warum |
| Noch nicht vorhanden | ⚠ noch nicht vorhanden | Braucht ein Feature, das fehlgeschlagen, unterdrückt oder zurückgerollt ist, oder braucht einen exakten Kernel, den diese Version nicht hat („Sweep: noch nicht umgesetzt. …“) |
| Unterdrückt | aus | Ausgeschaltet |
| Zurückgerollt | ausgegraut, unter der Rückrollleiste | Wird nicht erstellt, bis Sie vorwärts rollen |

## Teileinstellungen

Klicken Sie auf leeren Raum, damit nichts ausgewählt ist. Der rechte Bereich zeigt **Bauteil**:

- **Name**: der Name des Bauteils, für Dateinamen und das Schriftfeld der Zeichnung (bis zu 120 Zeichen).
- **Kurven**: siehe unten.

### Auflösung der Kurven

Der Mesh-Kernel erstellt den Volumenkörper selbst aus ebenen Facetten, daher folgen Ansicht, STL, 3MF, facettiertes STEP, Volumen und die Zeichnungsansichten alle **Kurven**: wie viele Facetten pro vollständiger Umdrehung.

| Einstellung | Facetten pro Umdrehung | Volumen einer runden Form |
|---|---|---|
| Grob (32 pro Umdrehung) | 32 | Etwa 0.64 % unter dem wahren Wert |
| Normal (64 pro Umdrehung) | 64 | Etwa 0.16 % darunter (der Standard) |
| Fein (128 pro Umdrehung) | 128 | Etwa 0.04 % darunter |
| Sehr fein (256 pro Umdrehung) | 256 | Etwa 0.01 % darunter |

Feinere Kurven ergeben glattere Exporte und Ansichten, aber langsamere Neuaufbauten. Die Einstellung wird in der Bauteildatei gespeichert.

## Noch nicht umgesetzt

Variable Verrundungen, Verrundungen und Fasen an runden Kanten, Schalen, die gekrümmte Flächen öffnen, Formschräge auf gekrümmten Flächen, Sweep, Loft, Rippe, STEP-Volumenkörper mit exakten gekrümmten Flächen, neue Körper, Verjüngungen, „Bis“ zu einer Fläche oder einem Eckpunkt und Bezüge auf Flächen und Kanten des Volumenkörpers brauchen einen exakten Kernel, den diese Version nicht hat. Außerdem noch nicht umgesetzt: Gewindebohrungen und Kegelsenkungen. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
