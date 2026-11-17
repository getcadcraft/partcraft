---
title: Ein Bauteil über seinen Verlauf ändern
summary: Features und Skizzen nachträglich bearbeiten, unterdrücken, zurückrollen, Features früher einfügen, neu ordnen, umbenennen und löschen sowie alles davon rückgängig machen.
keywords: Verlauf, Feature-Baum, Konstruktionsbaum, Feature bearbeiten, Skizze bearbeiten, unterdrücken, Unterdrückung aufheben, zurückrollen, Rollback, vorwärtsrollen, neu ordnen, Feature verschieben, löschen, umbenennen, rückgängig, wiederholen, neu aufbauen, neu erzeugen, Eltern-Kind, großes Bauteil, viele Features, langsames Neuaufbauen, 750 Features
from: 6f75aef4
---

Ein PartCraft-Bauteil ist sein Verlauf: die Liste der Ebenen, Skizzen und Features links. PartCraft baut den Volumenkörper bei jeder Änderung neu auf, beginnend oben in dieser Liste. Eine Änderung einer Zahl weiter oben in der Liste verändert alles, was darauf aufbaut.

## Ein Feature bearbeiten

1. Klicken Sie im Verlauf auf das Feature (oder auf die darunter eingerückte Skizze).
2. Ändern Sie seine Einstellungen im rechten Bereich. Jede Änderung baut sofort neu auf.

Es gibt kein OK und kein Abbrechen: Jede Änderung wird sofort übernommen. Gefällt Ihnen das Ergebnis nicht, drücken Sie {{key:Mod+Z}}.

## Festlegen, welche Kanten oder Flächen eine Verrundung, Fase oder Schale verwendet

Doppelklicken Sie im Verlauf auf das Feature, oder wählen Sie es aus und klicken Sie auf {{ui:Kanten wählen}} (oder {{ui:Flächen wählen}}). Klicken Sie auf Kanten oder Flächen, um sie hinzuzufügen oder zu entfernen, und dann auf {{ui:Fertig}} oder {{key:Esc}}. Siehe [Verrunden, Fasen und Aushöhlen](topic:fillet-chamfer-shell).

## Eine Skizze bearbeiten

1. Doppelklicken Sie im Verlauf auf die Skizze, oder wählen Sie sie aus und klicken Sie im rechten Bereich auf {{ui:Skizze bearbeiten}} (oder in der Symbolleiste auf {{ui:Skizze}}).
2. Das Bauteil wird in den Zustand zurückversetzt, in dem es bei der Erstellung der Skizze war: Features danach sind während der Bearbeitung ausgeblendet.
3. Ändern Sie die Geometrie, Abhängigkeiten oder Bemaßungen.
4. Schließen Sie die Skizze. Das gesamte Bauteil wird mit der Änderung neu aufgebaut.

Um nur ein Maß zu ändern, müssen Sie die Skizze nicht öffnen. Wählen Sie das Feature oder die Skizze aus und ändern Sie die Zahl unter **Skizzenbemaßungen** (oder **Treibende Bemaßungen**) im rechten Bereich. Siehe [Maße ändern, ohne die Skizze zu öffnen](topic:change-sizes).

## Wenn ein Feature fehlschlägt

Macht eine Änderung ein Feature unmöglich, baut PartCraft alles Übrige weiter und markiert das Problem:

- Das Feature zeigt im Verlauf **⚠ Fehler**, und seine Meldung steht oben im rechten Bereich (beim Darüberfahren mit der Zeile ist sie ebenfalls lesbar);
- Features, die es benötigen, zeigen **⚠ noch nicht vorhanden**, mit „Benötigt Extrude2, das fehlschlägt.“;
- der Chip in der Statusleiste zeigt „1 Feature fehlerhaft“.

Beheben Sie die Ursache (oder machen Sie die Änderung rückgängig), dann wird das Bauteil wieder aufgebaut. Häufige Meldungen und was zu tun ist, finden Sie unter [Fehlerbehebung](topic:troubleshooting).

## Ein Feature unterdrücken

Unterdrücken schaltet ein Feature aus, ohne es zu löschen. Das ist nützlich, um ein Bauteil ohne Bohrung oder Muster auszuprobieren.

1. Wählen Sie das Feature aus.
2. Klicken Sie auf {{ui:Unterdrücken}}. Die Zeile zeigt **aus**. Features, die es benötigen, sind ebenfalls noch nicht vorhanden.
3. Klicken Sie auf {{ui:Unterdrückung aufheben}}, um es wieder einzuschalten.

## Zurückrollen

Beim Zurückrollen wird das Bauteil nur bis zu einer bestimmten Stelle aufgebaut. So sehen Sie es in seinem früheren Zustand, oder Sie können ein Feature früher im Verlauf hinzufügen.

1. Wählen Sie ein Feature aus und klicken Sie auf {{ui:Bis hierhin zurückrollen}}. Dieses Feature und alle darunter liegenden werden ausgegraut und noch nicht aufgebaut. Eine Zeile **Rollback-Leiste · vorwärtsrollen** markiert die Stelle.
2. Jedes Feature, das Sie jetzt hinzufügen, kommt **an die Leiste**, vor die ausgegrauten.
3. Klicken Sie auf **Rollback-Leiste · vorwärtsrollen**, um alles wieder aufzubauen.

Die Rollback-Position wird in der Datei gespeichert.

## Features neu ordnen

1. Wählen Sie das Feature aus.
2. Klicken Sie auf {{ui:Nach oben}} oder {{ui:Nach unten}}, oder drücken Sie bei ausgewählter Zeile im Verlauf {{key:Alt+Up}} oder {{key:Alt+Down}}.

Ein Feature kann nie über etwas verschoben werden, das es verwendet. Die Schaltfläche ist ausgegraut, und wenn Sie mit der Maus darüberfahren (oder die Taste ausprobieren), erscheint der Grund, zum Beispiel „Extrude2 verwendet Sketch2, daher muss Sketch2 zuerst kommen.“

Was ein Feature verwendet: seine Skizze; die Fläche, auf der seine Skizze liegt; die Features, die ein Muster oder eine Spiegelung kopiert; eine Skizzenlinie oder Drehung, die als Richtung oder Achse dient.

## Ein Feature löschen

1. Wählen Sie das Feature aus und klicken Sie im rechten Bereich oder in der Symbolleiste auf {{ui:Löschen}}, oder drücken Sie {{key:Delete}}.
2. Verwenden andere Features es, fragt PartCraft: „Extrude3, Hole1 verwenden Extrude1 und werden ebenfalls gelöscht.“ Klicken Sie auf {{ui:Alle löschen}} oder {{ui:Abbrechen}}.

Beim Löschen eines Features wird seine Skizze nicht mitgelöscht: Die Skizze erscheint in der Ansicht wieder als nicht verwendete Skizze, bereit für ein weiteres Feature. Löschen Sie die Skizze separat, wenn Sie sie nicht mehr brauchen.

## Umbenennen

Wählen Sie das Feature aus und geben Sie unten im rechten Bereich einen neuen **Namen** ein (bis zu 60 Zeichen). Der eigene Name des Bauteils steht im rechten Bereich, wenn nichts ausgewählt ist.

## Bauteile mit Hunderten Features

Ein Bauteil mit Hunderten Features wird bei 750 Features getestet. PartCraft behält den Volumenkörper bei, den es an einer Zwischenstufe des Verlaufs hatte. Eine Änderung weit unten im Verlauf baut daher nur die Features danach neu auf. Eine Änderung weiter oben baut alles neu auf, was darauf aufbaut, und dauert am längsten. Rückgängig und Wiederholen bauen nur ab der Stelle neu auf, an der sich beide Zustände unterscheiden. Um an einem großen Bauteil schneller zu arbeiten, rollen Sie bis zu der Stelle zurück, an der Sie arbeiten (siehe oben unter Zurückrollen), oder unterdrücken Sie, was Sie im Moment nicht brauchen. Mehrere Ausschnitte und Aufsätze, die sich nicht berühren, werden gemeinsam angewendet. Ein Bauteil aus vielen einzelnen Bohrungen und Aufsätzen baut daher schneller, als die Anzahl der Features vermuten lässt.

Ein großes Bauteil wird im Hintergrund neu aufgebaut: Der Chip unten zeigt **Wird neu aufgebaut…** mit dem Fortschritt an, und Ansicht, Bereiche und Menüs bleiben während des Vorgangs bedienbar. Das Bauteil auf dem Bildschirm ist der zuletzt fertig aufgebaute Stand, bis der neue fertig ist. Ändern Sie während des Neuaufbaus erneut etwas, baut PartCraft die neueste Version und verwirft die laufende. Ein kleines Bauteil wird weiterhin sofort neu aufgebaut.

## Rückgängig und Wiederholen

- {{key:Mod+Z}} oder {{ui:Rückgängig}} macht die letzte Änderung rückgängig: ein Feature, eine Einstellung, eine Skizzenbearbeitung, ein Ziehen. Die Statusleiste nennt sie, zum Beispiel „Bemaßung ändern rückgängig gemacht.“
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} oder {{ui:Wiederholen}} stellt sie wieder her.
- PartCraft speichert die letzten 200 Schritte. Bei einem so großen Bauteil, dass 200 Kopien viel Speicher brauchen, werden weniger gespeichert, aber nie weniger als die neuesten 20. Änderungen auf dem Zeichnungsblatt (ein Schnitt, ein verschobenes GD&T-Symbol) stehen in derselben Liste. Das Öffnen einer Datei oder das Beginnen eines neuen Bauteils leert sie.

:::mac
Auf dem Mac verwenden Sie ⇧⌘Z zum Wiederholen. In Safari öffnet ⌘Y eventuell stattdessen den Browser-Verlauf.
:::
