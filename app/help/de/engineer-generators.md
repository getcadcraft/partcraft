---
title: Bauteile aus der Physik: Generatoren
summary: Der Arbeitsbereich Engineer und das Feature Generierter Körper: einen Generator wählen, seine Eingaben festlegen (Durchfluss, Druck, Temperaturen, Werkstoff, Drucker) und ein Bauteil erhalten, das aus Lehrbuchformeln dimensioniert ist, mit seinem Datenblatt, seinen Fertigungsprüfungen und Dateien für Analysewerkzeuge. Gleiche Eingaben ergeben immer dasselbe Bauteil.
keywords: Engineer, Generator, Generierter Körper, Physik, Regeln, Wärmetauscher, Verteilerrohr, Stutzen, Gitterstruktur, Gyroid, Datenblatt, Eingaben, deterministisch, gleiche Eingaben gleiches Bauteil, Fertigungsprüfungen, 3D-Druck, Pulverbett
from: 5a387dc0
---

Ein **Generator** ist ein Skript, das ein Bauteil aus Ihren Anforderungen dimensioniert und es baut. Ein Generator für Wärmetauscher nimmt die zu übertragende Wärme, die beiden Ströme und ihre Temperaturen, den Druck und den Werkstoff. Er berechnet, wie groß der Kern sein muss und wie dick seine Wand, baut ihn und nennt Ihnen die Zahlen, die er verwendet hat, und woher jede stammt. Ändern Sie eine Eingabe, und das Bauteil folgt.

Das Ergebnis ist ein normaler Körper im Bauteil: Er steht in der Feature-Liste, lässt sich drucken und exportieren. Der Generator selbst wird ebenfalls im Bauteil gespeichert. So lässt sich eine Datei auf jedem Computer öffnen, ohne dass der Generator installiert ist. **Das Öffnen eines Bauteils führt nie ein Skript aus.**

## Einen Körper erzeugen

1. Wählen Sie im Umschalter den Arbeitsbereich {{ui:Engineer}}.
2. Wählen Sie in der Liste einen Generator (zuerst die, die mit PartCraft ausgeliefert werden, dann alle, die Sie aus einer Datei geöffnet haben) und klicken Sie auf {{ui:Neu}}.
3. Das Skript läuft. Wenn es fertig ist, ist der Körper in der Ansicht, und das Panel zeigt seine Eingaben, sein **Datenblatt** und seine **Prüfungen**.

Sie können auch einen aus Design hinzufügen: {{ui:Features}} › {{ui:Mehr}} › {{ui:Generierter Körper}}.

## Ändern

Ändern Sie eine Eingabe, und der Körper wird kurz nach Ihrer letzten Eingabe neu erstellt. Das Panel sagt, welche von drei Aussagen zutrifft:

- **Auf dem neuesten Stand**: Der Körper entspricht dem Skript und seinen Eingaben.
- **Die Eingaben haben sich geändert**: Der Körper im Bauteil stammt von den früheren Eingaben. Er wird neu erstellt, oder Sie drücken {{ui:Ausführen}}.
- **Noch nicht ausgeführt** oder **Der letzte Lauf ist fehlgeschlagen**: Ein Skriptfehler wird mit seiner Zeile angezeigt.

{{ui:Stopp}} beendet einen Lauf, der zu lange dauert. Rückgängig geht jeweils einen Schritt zurück: Ein Lauf ist ein Schritt, eine Eingabe ist ein Schritt.

## Das Datenblatt

Jede Zahl, die der Generator berechnet hat, ist mit ihrer **Einheit** und **Herkunft** aufgeführt (eine Lehrbuchgleichung, eine Norm, ein Datenblatt). Nichts ist eine verborgene Konstante. Das Datenblatt ist Teil der Datei, sodass es auf dem nächsten Computer gleich ist. [Datenausgabe](topic:data-out) beschreibt, wie Sie es als JSON oder PDF speichern.

## Die Prüfungen

Ein Generator kann sein eigenes Bauteil gegen ein Druckverfahren prüfen: Wände und Spalte, die dünner sind, als das Verfahren hält, lose Teile, Hohlräume, die Pulver oder Harz einschließen, Löcher, die zu eng zum Ausräumen sind, und Überhänge, die Stützen brauchen. Die Befunde stehen im Panel und in der Liste {{ui:Probleme}} (der ⚠-Schaltfläche) und werden mit dem Bauteil gespeichert.

Die Verfahrenswerte sind die runden Zahlen, die öffentliche Konstruktionsleitfäden für das Verfahren allgemein angeben (FDM, SLA, SLS, Metall-Pulverbett). Sie sind **nicht die Spezifikation Ihrer Maschine**. Ersetzen Sie sie durch die Werte Ihrer Werkstatt, bevor Sie sich auf eine Prüfung verlassen. Die Prüfung arbeitet auf einem Raster aus Voxeln und ist daher auf etwa ein Voxel genau: Eine Wand wird nur gemeldet, wenn sie um mehr als ein Voxel dünner ist als der Grenzwert.

## Lieferumfang

| Generator | Was er erzeugt |
|---|---|
| Gyroid-Block | Ein Block, gefüllt mit einem Gyroid, Schwarz-P- oder Diamant-Fläche: die einfachste Gitterstruktur |
| Gyroid-Wärmetauscher | Der Kern eines Wärmetauschers mit zwei Fluiden, dimensioniert aus der Last nach der Effektivität-NTU-Methode, seine Wand aus dem Druck; kann den Druckverlust mit einer Strömungsstudie an einer Zelle prüfen |
| Verteilerrohr | Ein Sammler mit Abzweigen, jedes Rohr dimensioniert nach dem Durchfluss, den es führt |
| Gitterträger mit Gradient | Eine Gitterstruktur, deren Wand dort dicker wird, wo eine Topologieoptimierung Material fordert |

Alle sind erste Abschätzungen auf Basis von Lehrbuchformeln. [Die Ingenieurbibliothek](topic:engineering-library) listet die Formeln und ihre Grenzen. Führen Sie Simulation, Thermal oder Flow auf dem Ergebnis aus, bevor Sie sich darauf verlassen.

## Exportkontrollen

Die Generatoren und Datenblätter von Engineer tragen einen Hinweis zu Exportkontrollen und Sanktionen. Lesen Sie ihn unter [Engineer und Exportkontrollen](topic:engineer-export-notice). Er steht auch am Ende jedes Datenblatts.

## Noch nicht umgesetzt

- Köpfe, Anschlüsse und Fittings am Kern des Wärmetauschers: Es ist nur der Kern.
- Temperaturkurven für die Werkstofffestigkeit: Die Werkstoffe gelten bei Raumtemperatur.
- Abzweigverluste und die Aufteilung des Durchflusses auf die Ausgänge im Verteilerrohr.
- Generatoren mit einem Klick aus dem Add-on-Verzeichnis hinzufügen. Beim Öffnen einer Datei wird der Generator diesem Browser hinzugefügt.
- Generatoren für die anderen Apps.
