---
title: Ein .3dm-Modell als Volumenkörper öffnen
summary: Die Netze, Polyflächen und Blöcke einer .3dm-Datei als einen Volumenkörper in PartCraft übernehmen, den Sie schneiden, ergänzen und skizzieren können; woher die Dreiecke kommen und was ausgelassen wird.
keywords: 3dm, NURBS, Polyfläche, BRep, Flächen, Darstellungsnetz, Extrusion, Blöcke, Import, Netz zu Volumenkörper, Einheiten, importierter Körper
from: 8ae9571b
---

PartCraft öffnet `.3dm`-Dateien als **Volumenkörper**, auf dieselbe Weise wie ein [STL-, OBJ- oder 3MF-Netz](topic:open-meshes). Der Körper verhält sich wie jeder andere Volumenkörper: Sie können ihn schneiden, ergänzen, bohren, mustern und auf seinen ebenen Flächen skizzieren. Er hat keinen eigenen Verlauf.

## Datei öffnen

1. Wählen Sie {{ui:Öffnen}} oder drücken Sie {{key:Mod+O}} und wählen Sie die `.3dm`-Datei. Oder ziehen Sie sie in die 3D-Ansicht.
2. PartCraft liest sie und zeigt, was es gefunden hat: wie viele Objekte mit Flächen hereinkommen, wie viele Flächen aus den in der Datei gespeicherten Netzen stammen und wie viele PartCraft selbst tesseliert hat, jede Reparatur und ob das Ergebnis **geschlossen** ist.
3. Prüfen Sie **Einheiten in der Datei** (die Datei gibt ihre eigenen an; eine Einheit, die PartCraft nicht kennt, etwa Yards, wird in Millimeter umgerechnet) und **Oben in der Datei**.
4. Wählen Sie {{ui:Als Körper öffnen}} oder **Verwenden für** und {{ui:Zu diesem Bauteil hinzufügen}}, wenn das Bauteil bereits Features hat.

## Woher die Dreiecke kommen

In dieser Version baut PartCraft Körper aus Dreiecken, daher wird jede Fläche in der Datei zu kleinen ebenen Flächen. Für jede Fläche einer Polyfläche (und jede Extrusion) nimmt es das **in der Datei gespeicherte Darstellungsnetz**, wenn es eines gibt, sonst **tesseliert es selbst** (Ebenen, NURBS-Flächen, Rotationsflächen, extrudierte Kurven und Extrusionen, begrenzt durch ihre Kanten). Flächen einer Polyfläche teilen ihre Kantenpunkte, daher kommt eine geschlossene Polyfläche geschlossen herein. Eine Fläche einer Art, die PartCraft noch nicht liest, wird ausgelassen, und der Dialog sagt, wie viele und welcher Art; das Ergebnis schließt dann meist nicht.

## Alles in der Datei wird ein Körper

Jedes sichtbare Netz, jede Polyfläche und Extrusion sowie jede Platzierung eines Blocks gehen in **einen** Körper an die Stelle, an die die Datei sie setzt. Ausgeblendete Objekte oder Objekte auf einem ausgeschalteten Layer werden ausgelassen. Enthält die Datei mehrere getrennte Volumenkörper, hat der Körper mehrere Teile: Öffnen Sie jeden aus seiner eigenen Datei, wenn Sie sie als getrennte Körper möchten.

## Was ausgelassen wird (und gemeldet wird)

Kurven, Punkte, Punktwolken, Text, Bemaßungen, Schraffuren und Lichter werden ausgelassen: ein Körper nimmt nur Flächen auf. Ebenso SubD-Objekte (wandeln Sie sie zuerst im Programm, das die Datei erstellt hat, in Netze oder Polyflächen um), Blöcke aus anderen Dateien sowie Farben, Layer und Namen (PartCraft-Körper haben hier keine eigenen).

## Wenn er nicht schließt

Offene Polyflächen und Flächen (eine einzelne beschnittene Fläche, eine Form mit fehlender Fläche) haben kein Innen und können daher kein Volumenkörper sein. Der Dialog sagt, wie viele Öffnungen übrig sind, und fügt nichts hinzu. Verbinden oder verschließen Sie die Form im Programm, das sie erstellt hat, speichern Sie und öffnen Sie sie erneut. Siehe [Wenn ein Netz nicht schließt](topic:open-meshes#when-a-mesh-does-not-close).
