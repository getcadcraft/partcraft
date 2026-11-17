---
title: Im Verlauf zurück- und vorwärts rollen
summary: Bewegen Sie die Rollback-Leiste Schritt für Schritt nach oben und unten, um das Bauteil beim Aufbau zu verfolgen, Features in der Mitte einzufügen und zum Ende zurückzukehren.
keywords: Rollback, zurückrollen, vorwärtsrollen, Rollback-Leiste, Verlauf durchgehen, Feature einfügen, einfrieren, Verlauf
from: 9a366cae
---

Die Rollback-Leiste bestimmt, wie viel vom Verlauf erstellt wird. Features unterhalb der Leiste sind ausgegraut und nicht erstellt; neue Features werden an der Leiste eingefügt.

## Ein Feature nach dem anderen durchgehen

Mit dem Bauteil auf dem Bildschirm (keine Skizze und keine Zeichnung offen):

| Aktion | Ergebnis |
|---|---|
| {{key:[}} oder die Pfeil-nach-oben-Schaltfläche neben dem Bauteilnamen | Die Leiste bewegt sich um ein Feature nach oben |
| {{key:]}} oder die Pfeil-nach-unten-Schaltfläche | Die Leiste bewegt sich um ein Feature nach unten |
| {{key:End}} oder die Schaltfläche, die die Leiste ans Ende setzt | Alle Features werden wieder erstellt |

Die Statusleiste zeigt, wo die Leiste steht, zum Beispiel „Rollback-Leiste nach Sketch1: 1 von 2 Features erstellt“. Die Schaltflächen sind deaktiviert, wenn sich die Leiste in diese Richtung nicht weiter bewegen kann.

Sie können auch {{ui:Bis hierhin zurückrollen}} an einem beliebigen Feature wählen oder im Verlauf auf **Rollback-Leiste · vorwärts rollen** klicken.

## Ein Feature in der Mitte einfügen

1. Bewegen Sie die Leiste zurück, bis sie dort steht, wo das neue Feature hingehört.
2. Fügen Sie das Feature hinzu: Es wird an der Leiste eingefügt.
3. Drücken Sie {{key:End}}, um den Rest des Verlaufs auf dem neuen Feature aufzubauen.

Jeder Schritt der Leiste ist ein Schritt, den Sie mit {{key:Mod+Z}} rückgängig machen können. Die Position der Leiste wird in der Datei gespeichert, sodass ein Bauteil zurückgerollt verschickt werden kann. Auch das Befehlszeilenwerkzeug bewegt sie: `partcraft rollback part.json` und `partcraft forward part.json --end`.
