---
title: Knoten: ein Modell durch Verdrahten aufbauen
summary: Zahlen zu Punkten, Punkte zu Kurven und Kurven zu Flächen verbinden. Ändern Sie eine Zahl, und alles Nachgeordnete wird neu aufgebaut. Jeder Knoten ist auch eine Zeile CraftScript, und der Graph wird in der Datei gespeichert.
keywords: Knoten, Knoteneditor, visuelle Programmierung, parametrisch, Graph, Verbindungen, Anschlüsse, Freiform, NURBS, Loft, Extrusion, Drehung, Kreis, Kurve, Fläche, Serie, Bereich, Zufall, Liste, Skript, CraftScript, Grasshopper
from: 3a4625de
---

Der Editor **Knoten** baut Geometrie, indem er Kästchen miteinander verdrahtet. Jedes Kästchen (ein Knoten) erledigt eine kleine Aufgabe: eine Zahl erzeugen, einen Punkt, einen Kreis, einen Loft. Sie verbinden das Ergebnis des einen mit dem Eingang des nächsten, und das Modell folgt, wenn Sie eine Zahl am Anfang ändern.

Öffnen Sie ihn über die Liste der Arbeitsbereiche: {{ui:Knoten}}. Er öffnet das Editorfenster. Ein Bauteil, das schon einen Graphen hat, zeigt ihn beim Öffnen des Arbeitsbereichs. Es ist ein Fenster über der 3D-Ansicht: Ziehen Sie an der Titelleiste, um es zu verschieben, und an der Ecke, um es zu vergrößern.

## Verdrahten

1. Wählen Sie links in der Liste einen Knoten (tippen Sie ins Suchfeld, um die Liste einzugrenzen; <kbd>Enter</kbd> fügt den ersten Treffer hinzu). Er erscheint in der Mitte der Fläche.
2. Ziehen Sie von einem runden **Ausgang**-Punkt rechts an einem Knoten zu einem runden **Eingang**-Punkt links an einem anderen. Der Punkt wird grün, wenn es passt, und rot, wenn nicht; zeigen Sie darauf, um den Grund zu sehen.
3. Ein Eingang ohne Verbindung zeigt ein Feld für einen eingegebenen Wert. Geben Sie eine Zahl ein und drücken Sie <kbd>Tab</kbd>: das Ergebnis wird neu aufgebaut.
4. Der kleine Kreis in der Titelleiste eines Knotens ist sein **Auge**. Ein Knoten mit eingeschaltetem Auge wird in der 3D-Ansicht gezeichnet: als Linien für Kurven, schattiert für Flächen, als Punkte für Punkte.

Ziehen Sie einen Knoten an seiner Titelleiste. Ziehen Sie den Hintergrund, um zu verschieben, und drehen Sie am Mausrad, um zu zoomen. <kbd>Delete</kbd> entfernt den gewählten Knoten. {{ui:Aufräumen}} ordnet die Knoten in Spalten an, {{ui:Einpassen}} holt alle ins Bild, {{ui:Rückgängig}} und {{ui:Wiederholen}} gehen Ihre Änderungen schrittweise durch.

## Typen und Einheiten

Anschlüsse haben einen Typ: Zahl, Ja/Nein, Punkt, Vektor, Kurve, Fläche, Netz, Volumenkörper oder „Geometrie“ für eine dieser Angaben. Ein Punkt kann einen Vektoreingang speisen und umgekehrt. Zahlen tragen eine Einheit: eine **Länge** ist in Millimeter und ein **Winkel** in Grad. Eine Länge kann keinen Winkel speisen, und eine Länge mal Länge (eine Fläche) wird abgelehnt, sodass eine falsche Verbindung schon beim Ziehen gestoppt wird.

Ein quadratischer Punkt ist eine **Liste**. Wenn eine Liste in einen Einzelwert-Eingang läuft, führt der Knoten für jedes Element einmal aus, und sein Ergebnis wird zu einer Liste. Die kürzere Liste wiederholt ihr letztes Element. Zum Beispiel macht eine **Serie** von Höhen, in **Verschieben** geführt, einen Stapel von Kopien.

## Volumenkörper und Boolesche Operationen als Knoten

Die Gruppe **Volumenkörper** erzeugt geschlossene Körper aus denselben exakten Flächen wie das Flächen-Panel: **Quader-Volumenkörper**, **Zylinder-Volumenkörper** und **Kugel-Volumenkörper** (Maße in mm), **Vereinigung**, **Subtrahieren** und **Schnittmenge** (der zweite Volumenkörper wird vom ersten genommen; die Toleranz gibt an, wie weit die Dreiecke der Volumenkörper-Engine von den exakten Flächen abweichen dürfen), **Verrundung zwischen Flächen** (die Flächen über ihre Nummer im Volumenkörper, 1 für die erste; ein Radius und, über 0, ein Radius am Ende), **Volumen des Volumenkörpers** (mm³) und **Volumenkörper in Netz** (zum Anzeigen oder Übernehmen). Ein Volumenkörper hat seinen eigenen Anschlusstyp: ein Punkt oder eine Zahl kann nicht in einen Volumenkörper-Eingang verdrahtet werden, und der Punkt bleibt rot. Die Knoten für Boolesche Operationen und Verrundung nutzen die eigene Volumenkörper-Engine des Programms, die beim ersten Öffnen des Editors geladen wird.

## Fehler

Ein Knoten, der seine Aufgabe nicht erledigen kann, sagt unter seinem Namen in Rot, warum („Der Radius muss größer als null sein.“), und die nachfolgenden Knoten warten. Dieselbe Meldung erscheint als Problem in der Liste Probleme, sodass Sie sie von dort aus finden.

## Jeder Knoten ist eine Zeile Skript

Drücken Sie {{ui:Skript}}, um den Graphen als CraftScript zu sehen: eine Zeile pro Knoten, zum Beispiel `n3 = nd_circle(n2, n1, [0 0 1]);`. Bearbeiten Sie den Text und drücken Sie {{ui:Den Graphen aus diesem Skript erzeugen}}, um ihn wieder als Graph zu erhalten. Dieselben `nd_`-Funktionen funktionieren in einem CraftScript in PartCraft, sodass ein Graph dort ausgeführt, in einer Schleife abgelaufen oder getestet werden kann. Zufallszahlen erhalten immer einen **Seed**, damit derselbe Graph auf jedem Computer dasselbe Ergebnis liefert.

## Mit der Datei gespeichert

Der Graph wird in der Bauteildatei gespeichert (nicht im Verlauf, daher hat Rückgängig im Editor einen eigenen Verlauf). Die Knoten erzeugen Kurven, Flächen und Netze neben dem Volumenkörper: sie ändern die Features des Bauteils nicht.
