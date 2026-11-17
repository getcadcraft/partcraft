---
title: Ebene Bauteile auf Tafeln verschachteln
summary: Ebene Bauteile auf Platten oder einer Rolle mit möglichst wenig Abfall anordnen, den PartCraft findet, nie näher als der angegebene Abstand, und die Anordnung als DXF für Laser, Plasma, Wasserstrahl oder Fräse speichern.
keywords: Verschachtelung, verschachteln, Tafel, Platte, Rolle, Laser, Plasma, Wasserstrahl, Fräse, Schneiden, Ausbeute, Materialnutzung, Verschnitt, Abfall, Abstand, Schnittbreite, Faserrichtung, Walzrichtung, DXF, Abwicklung, Konturen
from: 8dcce1a6
---

**Verschachtelung** (Nesting) legt viele ebene Bauteile so auf eine Tafel, dass möglichst wenig Material übrig bleibt. PartCraft setzt die Teile einzeln, jeweils dort, wo die benutzte Länge der Tafel am kürzesten bleibt, probiert in wenigen Sekunden mehrere Reihenfolgen aus und behält das beste Ergebnis. Teile dürfen in den Löchern anderer Teile liegen und in der Mulde eines L oder U.

## Öffnen

- {{ui:Exportieren}} › {{ui:Ebene Bauteile auf Tafeln verschachteln …}} öffnet sie mit der Abwicklung des Bauteils oder – in einer Baugruppe – mit den Abwicklungen aller Blech-Bauteile, so oft wie Exemplare vorhanden sind.
- Bei einem Blech-Bauteil {{ui:Abwickeln}} und danach unter der Abwicklung {{ui:Auf Tafeln verschachteln …}}.
- {{ui:Konturen aus einer DXF hinzufügen …}} fügt jede geschlossene Kontur in einer DXF-Datei als Bauteil hinzu: eine Zeichnung aus CadCraft, als DXF gespeichert, oder eine Datei aus der eigenen Software Ihrer Schneidmaschine. Eine Kontur innerhalb einer anderen ist darin ein Loch. Linien und Bögen, die Ende an Ende anschließen, zählen als eine Kontur. Dateien in Zoll, Zentimetern oder Metern werden in Millimeter umgerechnet.

:::note
Das Abwickeln von Blech braucht einen exakten Geometriekern (siehe [Blech](topic:sheet-metal)). Konturen aus einer DXF-Datei funktionieren immer.
:::

## Einrichten

Geben Sie für jedes Bauteil die **Anzahl** und seine **Faserrichtung** an: {{ui:Beliebige Richtung}}, {{ui:Entlang der Tafel (wie gezeichnet)}} für gewalztes oder gebürstetes Blech, das in eine Richtung laufen muss, oder {{ui:Quer zur Tafel}}.

Unter **Tafeln**:

- **Bestand**: {{ui:Tafeln}} mit einer gegebenen Länge und Breite (und wie viele Sie haben; 0 = so viele wie nötig) oder {{ui:Eine Rolle}} mit einer gegebenen Breite, so lang wie nötig.
- **Randabstand** bleibt an jeder Kante der Tafel frei (für Spannvorrichtungen oder eine unsaubere Kante).
- **Abstand zwischen Teilen** ist der kleinste Abstand zwischen zwei Schnittlinien: mindestens die Schnittbreite Ihrer Schneidmaschine plus das, was das Material braucht.
- **Drehungen**: die Winkel, um die ein Teil gedreht werden darf, standardmäßig alle 90°. Weniger Drehungen laufen schneller; mehr können die Tafel besser nutzen.
- **Teile dürfen gewendet werden** erlaubt, ein Teil umgedreht zu legen. Lassen Sie es für Blech ausgeschaltet: eine umgedreht gelegte Abwicklung biegt sich in die andere Richtung.

Drücken Sie {{ui:Verschachteln}}. Die Vorschau zeigt jede Tafel; die Kennzahlen nennen, wie viele Platten (oder wie viel von der Rolle) benutzt wurden und wie viel Material die Teile belegen. Alles, was nicht passt, wird genannt.

## Speichern

{{ui:DXF speichern}} schreibt die Anordnung als DXF (R12, Millimeter), eine Tafel unter der nächsten: die Konturen der Tafeln auf dem Layer SHEET, die Teile auf PARTS (Bögen bleiben Bögen), der Name jedes Teils auf LABELS.

:::tip
Verschiedene Teile zu mischen verschachtelt meist besser als viele Exemplare eines Teils: kleine Teile füllen die Lücken zwischen großen.
:::

## Tafeln schneiden (G-code)

**Exportieren › Verschachtelte Tafeln nach G-code** liest eine verschachtelte DXF (diese oder die Tafeln des Cabinets-Add-ons in CadCraft) und erstellt über den Postprozessor Ihrer Wahl ein Programm pro Tafel: zuerst Löcher und Ausschnitte, dann die Konturen; jeder Schnitt liegt um den Radius des Werkzeugs außerhalb des Teils, geht durch die Tafel und 1 mm weiter, mit Haltestegen, wenn Sie welche anfordern. Die Postprozessor-Liste enthält die eingebauten sowie die Ihrer Manufacture-Studie. Prüfen Sie jedes Programm in einem Simulator, bevor Sie es ausführen: Bohrungen und Taschen werden nicht erzeugt.

## Was zu prüfen ist

PartCraft prüft jede Anordnung noch einmal an den echten Formen (nicht am Raster, mit dem es gesucht hat): kein Teil näher als der Abstand, nichts in den Randabständen. Den Schnitt selbst plant es nicht: Anfahrten, Schnittreihenfolge, gemeinsame Kanten nur einmal schneiden und die Restplatte behalten ist Aufgabe der Software Ihrer Schneidmaschine. Prüfen Sie die DXF dort, bevor Sie schneiden.
