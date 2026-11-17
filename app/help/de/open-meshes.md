---
title: STL, OBJ oder 3MF als Volumenkörper öffnen
summary: Ein Netz von einem Scanner, einer Plattform für den 3D-Druck oder einem anderen Programm in einen Volumenkörper verwandeln, den Sie schneiden, ergänzen und skizzieren können; was PartCraft unterwegs repariert und was nicht.
keywords: STL, OBJ, 3MF, Netz, Netz zu Volumenkörper, Netz umwandeln, Scan, wasserdicht, reparieren, Löcher, Lücken, Einheiten, Oben-Achse, importierter Körper, ebene Flächen
from: 7b948471
---

PartCraft öffnet STL-, OBJ- und 3MF-Netze als **Volumenkörper**. Der Körper verhält sich wie jeder andere Volumenkörper: Sie können ihn schneiden, ergänzen, bohren, mustern, in einer Baugruppe oder für die Bearbeitung verwenden und auf seinen ebenen Flächen skizzieren. Er hat keinen eigenen Verlauf: ein Netz besteht nur aus Dreiecken, seine Maße lassen sich nicht ändern, sondern nur etwas hinzufügen oder abziehen.

## Netz öffnen

1. Wählen Sie {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}} und wählen Sie die Datei `.stl`, `.obj` oder `.3mf`. Oder ziehen Sie sie in die 3D-Ansicht.
2. PartCraft liest sie, repariert, was es sicher reparieren kann, und zeigt, was es gefunden hat: wie viele Dreiecke und Punkte, jede Reparatur und ob das Netz jetzt **geschlossen** ist.
3. Prüfen Sie **Einheiten in der Datei** und **Oben in der Datei**. STL und OBJ nennen ihre Einheiten nicht, daher ist Millimeter eine Vermutung; eine 3MF-Datei nennt ihre eigene. Die Zeile **Größe hier** zeigt die Größe des Körpers mit Ihrer Wahl, sodass ein Teil, das 25,4-mal zu klein ankommt, leicht zu erkennen ist (es war in Zoll).
4. Wenn das Teil auf dem Bildschirm leer ist, wählen Sie {{ui:Als Körper öffnen}}. Hat das Bauteil schon Features, wählen Sie **Verwenden für** (zum Bauteil hinzufügen, davon abziehen oder nur die Überschneidung behalten) und dann {{ui:Zu diesem Bauteil hinzufügen}}, oder {{ui:Neues Bauteil}}, um mit dem Netz neu zu beginnen.

Im Verlauf erscheint ein Feature **Imported1**. Die Statusleiste sagt zum Beispiel: „bracket.stl ist ein Volumenkörper: 15200.512 mm³, 14 ebene Flächen zum Skizzieren.“

## Was PartCraft repariert

| Reparatur | Bedeutung |
|---|---|
| Doppelte Ecken zusammengeführt | Eine STL wiederholt jede Ecke für jedes ihrer Dreiecke; sie werden zu einem Punkt zusammengeführt |
| Dreiecke ohne Fläche entfernt | Splitter, deren Ecken auf einer Linie liegen |
| Doppelte Dreiecke entfernt | Ein zweimal geschriebenes Dreieck bleibt einmal erhalten; zwei, die in entgegengesetzte Richtungen zeigen (eine innere Wand), werden beide entfernt |
| Kleine Lücken geschlossen | Kanten, die sich fast berühren (innerhalb eines Tausendstels der Größe des Teils), werden verbunden |
| Löcher gefüllt | Eine Öffnung, deren Rand flach liegt, wird unabhängig von ihrer Größe gefüllt; eine verzogene nur, wenn sie klein ist |
| Dreiecke nach außen gedreht | Dreiecke mit falscher Richtung werden passend zu ihren Nachbarn gedreht, und die ganze Fläche zeigt nach außen |

## Wenn ein Netz nicht schließt

Ein Volumenkörper braucht eine Oberfläche ohne Öffnungen. Kann PartCraft keine schließen, nennt der Dialog, wie viele Öffnungen und offene Kanten übrig sind, und es gibt keinen Körper zum Hinzufügen. Schließen Sie die Öffnungen im Programm, das das Netz erstellt hat, oder exportieren Sie es als geschlossenes (wasserdichtes) Netz neu, und öffnen Sie es erneut.

PartCraft lässt eine Öffnung in Ruhe, wenn das Füllen falsch raten könnte: ein großes verzogenes Loch oder zwei Öffnungen in derselben Ebene (eine fehlende ringförmige Fläche, bei der das Füllen jedes Randes das Loch in der Mitte überdecken würde). Eine Kante, die von mehr als zwei Dreiecken geteilt wird, wird ebenfalls gemeldet: eine solche Oberfläche hat kein eindeutiges Innen.

## Auf ebenen Flächen skizzieren

Ebene Bereiche aus vielen Dreiecken werden jeweils zu einer **ebenen Fläche** zusammengefasst, damit eine Skizze darauf liegen kann: Klicken Sie die Fläche an und wählen Sie {{ui:Auf dieser Fläche skizzieren}}. Eine Fläche, die später geschnitten oder ergänzt wird, bleibt eine Fläche. Runde Bereiche (eine Bohrung, eine Verrundung) bleiben Dreiecke: sie sind keine Flächen, die Sie wählen können, und die Ansicht zeichnet ihre Kontur aus dem Winkel zwischen den Dreiecken.

## Später ändern

Wählen Sie **Imported1**, um die Datei zu sehen, aus der es stammt, wie viele Dreiecke es hat und was repariert wurde. **Einheiten in der Datei**, **Oben in der Datei** und **Verwenden für** lassen sich dort ändern; jede Änderung ist ein Rückgängig-Schritt.

## Wo es gespeichert wird

Das reparierte Netz wird **innerhalb** der Datei `.partcraft.json` gespeichert, daher brauchen Sie die Netzdatei nicht noch einmal. Eine Bauteildatei mit einem Netzkörper ist Version 5: ein älteres PartCraft lehnt sie anhand der Version ab. Ein Netz mit 200,000 Dreiecken fügt etwa 1.2 MB hinzu.

## Grenzen

- Höchstens 3 Millionen Dreiecke und 200 MB in einer Datei.
- Ein Körper aus einem Netz wird vom Netz-Geometriekern erstellt. Mit eingeschaltetem exakten Kernel (nur für Entwickler) wird das gemeldet, und der Körper wird nicht erstellt.
- OBJ-Materialien, Texturkoordinaten und Freiformkurven werden ausgelassen; 3MF-Farben, Materialien und Stützobjekte werden ausgelassen (der Dialog sagt, wie viele Objekte übersprungen wurden).
- Der Körper ist so fein wie das Netz: eine grobe STL ergibt grobe runde Flächen. Bohrungen, die Sie hineinbohren, sind so rund wie Ihre eigenen Features.
