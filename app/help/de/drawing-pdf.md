---
title: Zeichnung mit Ansichten, Schnitt und GD&T erstellen
summary: Das Zeichnungsblatt öffnen, einen Schnitt und eine Detailansicht hinzufügen, Bezüge, Toleranzrahmen und Oberflächensymbole setzen, das Blattformat wählen, das Schriftfeld und die Revisionen ausfüllen und das Blatt als PDF exportieren.
keywords: Lochtabelle, Lochliste, Lochpositionen, Kennzeichnungen, Zeichnung, 2D-Zeichnung, Blatt, Blattformat, A4, A3, A2, A1, A0, ANSI, Schriftfeld, Revision, Revisionsblock, Zeichnungsnummer, Werkstoff, PDF, Ansichten, orthografisch, Dritter Projektionswinkel, isometrisch, Schnittansicht, Detailansicht, GD&T, Bezug, Toleranzrahmen, Toleranz, Position, Ebenheit, Oberfläche, Rauheit, drucken
from: 39e944c0
---

PartCraft erstellt aus dem Bauteil ein Zeichnungsblatt: Vorder-, Draufsicht und rechte Seitenansicht im Dritten Projektionswinkel, eine isometrische Ansicht, Gesamtmaße und ein Schriftfeld auf einem Blatt von A4 bis A0 oder ANSI A bis E. Darüber hinaus können Sie einen Schnitt, eine Detailansicht und GD&T-Symbole hinzufügen. Das Blatt aktualisiert sich, wenn sich das Bauteil ändert, und seine Einstellungen werden in der Bauteildatei gespeichert.

## Zeichnungsblatt öffnen

1. Bauen Sie das Bauteil. (Ohne Ergebnis: „Zuerst einen Volumenkörper bauen, dann seine Zeichnung erstellen.“)
2. Wählen Sie {{ui:Zeichnung}} in der Symbolleiste.

Die 3D-Ansicht wird durch das Blatt ersetzt. Die Symbolleiste zeigt {{ui:Bezug}}, {{ui:Rahmen}}, {{ui:Oberfläche}}, {{ui:Detail}}, {{ui:PDF}} und {{ui:Zurück}}, und das rechte Panel trägt die Überschrift **Zeichnung**. Die Statusleiste sagt, wie die Ansichten erzeugt wurden: „Zeichnung (Kurven werden als Facetten gezeichnet). Bezug, Rahmen und Oberfläche setzen GD&T auf eine Ansicht; das Panel legt einen Schnitt und eine Detailansicht fest.“ Die Ansichten werden aus den Facetten des Mesh-Kerns gezeichnet, daher sind runde Kanten kurze gerade Stücke. Echte Bögen brauchen einen exakten Kern, den diese Version nicht hat.

Bewegen Sie sich auf dem Blatt: Mit dem Rad zoomen Sie, mit der rechten oder mittleren Taste ziehen Sie zum Verschieben, und {{key:F}} passt das Blatt ein. Wenn das Blatt den Fokus hat, zoomen {{key:Plus}} und {{key:Minus}}, und {{key:Shift}} mit den Pfeiltasten verschiebt.

Wählen Sie {{ui:Zurück}}, {{ui:Zurück zum Modell}} oder drücken Sie {{key:Esc}} (wenn nichts ausgewählt ist und kein Werkzeug aktiv ist), um zum 3D-Modell zurückzukehren.

## Was auf dem Blatt ist

- **Das gewählte Blatt**, quer (standardmäßig A3, wenn Sie nichts anderes wählen), mit Rahmen und einem **Schriftfeld**: Titel, Firma, Zeichnungsnummer, Revision, Werkstoff, gezeichnet / geprüft / freigegeben von, Datum, Maßstab, Blattformat, „Einheiten: Millimeter · Dritter Projektionswinkel“ und ob die Ansichten exakt oder facettiert sind.
- Ein **Revisionsblock** oben rechts, sobald Sie eine Revision hinzufügen.
- **Vorder-, Draufsicht und rechte Seitenansicht**: die Draufsicht über der Vorderansicht, die rechte Seitenansicht rechts daneben. Verdeckte Kanten sind gestrichelt.
- Eine **isometrische Ansicht**, wo Platz ist.
- **Gesamtmaße**: Breite und Höhe an der Vorderansicht, Tiefe an der Draufsicht.
- Ein **Maßstab** für die Hauptansichten aus der ISO-Reihe (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), so gewählt, dass sie passen.

## Blattformat wählen

Wählen Sie im Zeichnungsblatt, bei nichts Ausgewähltem, im rechten Panel {{ui:Blatt}}: **A4, A3, A2, A1, A0** (ISO 216) oder **ANSI A, B, C, D, E** (11 × 8.5 bis 44 × 34 in). Die Ansichten werden mit dem größten ISO-Maßstab neu angeordnet, der passt. Ein größeres Blatt kann das Bauteil daher größer zeigen.

## Schriftfeld ausfüllen

Die Felder **Schriftfeld** im rechten Panel gehen direkt auf das Blatt: {{ui:Titel}}, {{ui:Zeichnungsnr.}}, {{ui:Revision}}, {{ui:Firma}}, {{ui:Gezeichnet von}}, {{ui:Geprüft von}}, {{ui:Freigegeben von}}, {{ui:Datum}} (Jahr-Monat-Tag), {{ui:Allgemeintoleranz}} und {{ui:Oberfläche}} (die beiden letzten erscheinen direkt über dem Schriftfeld). Tippen Sie in ein Feld und drücken Sie {{key:Enter}} oder klicken Sie woanders hin. Ein leeres Feld lässt seine Zelle leer, außer:

- **Titel** zeigt den Namen des Bauteils, bis Sie einen Titel eingeben.
- **Datum** zeigt das heutige Datum, bis Sie eines eingeben.
- **Revision** zeigt die neueste Revision der Liste, bis Sie eine eingeben.

**Werkstoff** kommt vom Bauteil: Klicken Sie auf eine leere Stelle im Modell und wählen Sie dann {{ui:Werkstoff}} im Panel Bauteil. Derselbe Werkstoff liefert den Massenkenngrößen in Measure ihre Dichte.

## Revisionen hinzufügen

Klicken Sie unter **Revisionen** auf {{ui:Revision hinzufügen}}. Jede neue Zeile erhält den nächsten Buchstaben (A, B, C …; nach Z kommt AA) und das heutige Datum. Tippen Sie ein, was sich geändert hat, und wer die Änderung gemacht hat. {{ui:Löschen}} entfernt eine Zeile. Der Revisionsblock oben rechts auf dem Blatt listet sie, älteste zuerst, bis zu 20.

Blattformat, Schriftfeld, Revisionen und Werkstoff werden in der Bauteildatei gespeichert, und jede Änderung ist ein Schritt von {{ui:Rückgängig}}.

## Schnittansicht hinzufügen

Das Bauteil wird von einer Ebene geschnitten, und die Schnittfläche wird schraffiert. Wie die anderen Ansichten wird der Schnitt aus Facetten gezeichnet, daher sind runde Kanten kurze gerade Stücke.

1. Setzen Sie im rechten Panel **Schnitt A-A** auf **Von der Vorderansicht**, **Von der Draufsicht** oder **Von der rechten Ansicht**.
2. Der Schnitt erscheint auf dem Blatt, schraffiert, wo die Schnittebene durch Material geht. Die Schnittlinie und ihre Pfeile „A“ stehen an der Ansicht, von der er genommen wird.
3. Setzen Sie **Schnitt bei (mm)**, um die Schnittebene zu verschieben. Sie beginnt durch die Mitte des Bauteils.

Setzen Sie **Schnitt A-A** wieder auf **Keine**, um ihn zu entfernen.

## Detailansicht hinzufügen

1. Setzen Sie **Detail B** auf die Ansicht, die vergrößert werden soll (oder wählen Sie {{ui:Detail}} in der Symbolleiste).
2. Klicken Sie in dieser Ansicht auf die Mitte des Bereichs, der vergrößert werden soll. Ein mit „B“ beschrifteter Kreis markiert ihn, und die vergrößerte **Detail B** erscheint auf dem Blatt mit eigenem Maßstab, zum Beispiel „Detail B (2:1)“.
3. Setzen Sie **Detailradius (mm)** für die Größe des Kreises und **Detailmaßstab** für die Vergrößerung: 2-, 4-, 5- oder 10-fach zum Blatt.

Eine Detailansicht kann von der Vorder-, Draufsicht, rechten Ansicht oder Schnittansicht genommen werden, nicht von der isometrischen Ansicht. Wenn nicht genug Platz für alle Ansichten ist, sagt das Panel „Kein Platz auf dem Blatt für: Detail. Machen Sie das Detail kleiner oder lassen Sie eine Ansicht weg.“

## Lochtabelle hinzufügen

Eine Lochtabelle listet die Bohrungen des Bauteils mit ihren Positionen, zum Bohren oder für CNC. Wählen Sie im Panel **Lochtabelle** › **Von der Draufsicht** (oder Vorder- bzw. rechter Ansicht).

- Jede Bohrung, die in dieser Ansicht von vorne zu sehen ist, erhält daneben eine Kennzeichnung: **A1**, **A2** … für die erste Größe, **B1** … für die nächste.
- Die Tabelle listet jede Kennzeichnung, ihr **X** und **Y** in Millimetern und ihre Größe: "Ø14 THRU", "Ø6.6 × 10 DEEP", eine Senkung oder Kegelsenkung, oder die Gewindeangabe einer Gewindebohrung.
- X und Y werden vom unteren linken Eck des Umrisses der Ansicht gemessen, auf dem Blatt mit **X0 Y0** markiert.
- Bohrungen aus Mustern sind enthalten. Bohrungen, die nicht rechtwinklig zur Ansicht stehen, zählt das Panel und lässt sie aus der Tabelle weg.

Die Tabelle kommt in einen freien Bereich des Blatts und in das PDF.

## GD&T- und Oberflächensymbole setzen

1. Wählen Sie {{ui:Bezug}}, {{ui:Rahmen}} (einen Toleranzrahmen) oder {{ui:Oberfläche}} (ein Oberflächensymbol).
2. Klicken Sie auf den Punkt einer Ansicht, an dem es ansetzt. Es rastet auf die nächstgelegene gezeichnete Linie innerhalb von 2.5 mm ein.
3. Das Symbol erscheint mit einer Führungslinie, ausgewählt, und das rechte Panel zeigt seine Einstellungen.

Ziehen Sie ein Symbol, um es zu verschieben; seine Führungslinie bleibt am Punkt. Bei ausgewähltem Symbol verschieben die Pfeiltasten es um 1 mm. {{key:Delete}} oder {{key:Backspace}} (oder {{ui:Löschen}} im Panel) entfernt es; {{ui:Fertig}} oder {{key:Esc}} hebt die Auswahl auf. Jede Änderung steht in der Liste für {{ui:Rückgängig}}.

### Bezug

**Buchstabe**: A bis Z, ohne I, O und Q (sie wirken wie 1, 0 und O). Jeder neue Bezug erhält den nächsten freien Buchstaben.

### Toleranzrahmen

| Einstellung | Auswahl |
|---|---|
| **Toleranz** | Geradheit, Ebenheit, Rundheit, Zylinderform, Linienform, Flächenform, Rechtwinkligkeit, Neigung, Parallelität, Position, Koaxialität und Symmetrie (beide in Y14.5-2018 entfallen, und so markiert), Rundlauf, Gesamtrundlauf |
| **Zone (mm)** | Der Toleranzwert, Standard 0.1 |
| **Durchmesserzone (⌀)** | Für Merkmale mit zylindrischer Zone; bei Position standardmäßig aktiv |
| **Werkstoffbedingung** | RFS (keine), MMC (Ⓜ), LMC (Ⓛ), wo das Merkmal es zulässt |
| **Primärer / Sekundärer / Tertiärer Bezug** | Bis zu drei Bezugsbuchstaben, jeweils mit einem **… Zusatz** (MMB, LMB), wo erlaubt |

PartCraft prüft den Rahmen gegen die Regeln von ASME Y14.5 und sagt oben im Panel, was falsch ist, zum Beispiel „Ebenheit ist eine Formtoleranz: Sie nimmt keine Bezugsangaben auf.“ oder „Position braucht mindestens eine Bezugsangabe.“ Die Zeile **Lesart** schreibt den Rahmen aus.

### Oberfläche

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Ra (µm)** | Mittlere Rauheit | 1.6 |
| **Verfahren** | beliebiges Verfahren, spanend, ohne Materialabtrag | spanend |
| **Hinweis** | Bis zu 40 Zeichen, zum Beispiel eine Riefenrichtung oder ein Verfahren | |

Ohne Auswahl listet das Panel **Hinweise auf dem Blatt**, jeweils mit **Auswählen**.

## PDF exportieren

Wählen Sie {{ui:PDF}} in der Symbolleiste, {{ui:PDF exportieren}} im Panel oder {{ui:Exportieren}} und dann {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}} am Modell. Das PDF wird als `<part name> - drawing.pdf` heruntergeladen, und die Statusleiste listet, was darauf ist.

Drucken Sie es mit „Tatsächliche Größe“ auf Papier in der Größe des Blatts, damit der Maßstab stimmt.

## Grenzen

| Noch nicht umgesetzt | Heute so lösen |
|---|---|
| Bemaßungen außer den drei Gesamtmaßen | Im PDF mit einem Markierungsprogramm ergänzen, oder eine Skizze oder Fläche als DXF exportieren und in einem 2D-CAD-Programm bemaßen |
| Mehr als ein Schnitt oder eine Detailansicht; ausgebrochene, Hilfs- und projizierte Ansichten | Nicht verfügbar |
| Erster Projektionswinkel, bewegliche Ansichten, Hochformat-Blätter | Dritter Projektionswinkel, automatische Anordnung, Querformat |
| Freie Textnotizen und Tabellen auf dem Blatt (außer Schriftfeld und Revisionsblock) | Die Oberflächennotiz verwenden oder Text im PDF hinzufügen |
| Zeichnungen von Baugruppen | Nicht verfügbar |

Zeichen außerhalb des westeuropäischen Zeichensatzes werden als „?“ gedruckt (das PDF nutzt die eingebaute Helvetica-Schrift des Readers). Die GD&T-Symbole sind als Linien gezeichnet, sodass sie in jedem Reader gedruckt werden.

## Das Blatt übernehmen lassen

- **Blatt › Automatisch** wählt das Papier für Sie: den größten Standardmaßstab bis 1:1, auf dem kleinsten A-Format, das die Ansichten in diesem Maßstab aufnimmt (die Liste zeigt, welches gewählt wurde).
- **Bohrungen bemaßen** bemaßt die Bohrungen auf der Ansicht, die die meisten davon von vorne sieht: eine Mittelmarkierung an jeder, eine Hinweisbeschriftung je Größe („2× Ø6 THRU“ mit Führungslinie), und ihre Positionen, gemessen vom unteren linken Eck der Ansicht. Gesamtbreite, -höhe und -tiefe sind immer dabei.
