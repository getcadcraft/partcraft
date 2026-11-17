---
title: Kopieren, Einfügen und Duplizieren
summary: Kopieren Sie Skizzengeometrie, Features und Baugruppenbauteile. Fügen Sie dort ein, wo Sie klicken, oder an gleicher Position. Duplizieren Sie in einem Schritt. Außerdem erfahren Sie, was mit einer Kopie mitkommt und was nicht.
keywords: kopieren, einfügen, ausschneiden, duplizieren, Zwischenablage, an gleicher Position einfügen, alles auswählen, Auswahl aufheben, löschen, ctrl c, ctrl v, ctrl d, Instanz, Komponente, Skizze kopieren, Feature kopieren, Bauteil kopieren
from: 611307d7
---

Die Gruppe {{ui:Bearbeiten}} in der Symbolleiste enthält {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}}, {{ui:Einfügen}} und ein Menü {{ui:Mehr}} mit {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren}}, {{ui:Löschen}}, {{ui:Alles auswählen}} und {{ui:Auswahl aufheben}}, jeweils mit ihrer Taste. Was kopiert wird, hängt davon ab, wo Sie sich befinden: Geometrie in einer geöffneten Skizze, ein Feature im Verlauf oder ein Bauteil in einer Baugruppe.

Ein ausgegrauter Eintrag kann im Moment nicht ausgeführt werden. Fahren Sie mit dem Zeiger darüber: Der Tooltip sagt, warum, zum Beispiel „Wählen Sie zuerst Skizzengeometrie aus“ oder „Die Zwischenablage enthält Sketch2 und Extrude2: Features werden in den Verlauf eingefügt, also beenden Sie zuerst die Skizze“.

| Aktion | Taste | In einer Skizze | Im Verlauf | In einer Baugruppe |
|---|---|---|---|---|
| Kopieren | {{key:Mod+C}} | Die gewählten Punkte und Kurven | Die gewählte Skizze, Extrusion, Drehung oder Bohrung (mit ihrer Skizze) | Das gewählte Bauteil |
| Ausschneiden | {{key:Mod+X}} | Kopieren, dann löschen | Kopieren, dann das Feature löschen | Kopieren, dann das Bauteil entfernen |
| Einfügen | {{key:Mod+V}} | Die Kopie folgt dem Zeiger. Klicken Sie, wohin sie soll | Fügt die Kopie am Ende des Verlaufs hinzu | Eine neue Kopie neben den anderen Bauteilen |
| An gleicher Position einfügen | {{key:Mod+Shift+V}} | An denselben Koordinaten | Wie Einfügen | An derselben Stelle wie das kopierte Bauteil |
| Duplizieren | {{key:Mod+D}} | Kopieren und in einem Zug verschieben. Die Zwischenablage bleibt unberührt | Eine zweite Kopie direkt nach Ihrer Auswahl | Eine zweite Kopie neben den anderen Bauteilen |
| Löschen | {{key:Delete}} | Die Auswahl | Das Feature (fragt nach, wenn andere es verwenden) | Das Bauteil oder die Verbindung |
| Alles auswählen | {{key:Mod+A}} | Alles in der Skizze | Nicht verfügbar | Nicht verfügbar |
| Auswahl aufheben | {{key:Esc}} | Hebt die Auswahl auf | Hebt die Auswahl und die Wahl auf | Hebt die Auswahl auf |

Jedes Einfügen, Duplizieren und Ausschneiden ist ein Schritt in der Rückgängig-Liste: {{key:Mod+Z}} nimmt ihn zurück, {{key:Mod+Y}} stellt ihn wieder her.

## In einer Skizze

1. Wählen Sie aus, was kopiert werden soll: Klicken Sie darauf, {{key:Shift}}+Klick für mehr, ziehen Sie ein Fenster auf, oder drücken Sie {{key:Mod+A}} für alles.
2. Drücken Sie {{key:Mod+C}} oder wählen Sie {{ui:Kopieren}}. Die Statusleiste sagt, was kopiert wurde.
3. Drücken Sie {{key:Mod+V}} oder wählen Sie {{ui:Einfügen}}. Eine gestrichelte Kopie folgt dem Zeiger und wird an ihrer Mitte gehalten. Sie rastet auf Punkte ein: Legen Sie den Mittelpunkt eines kopierten Kreises auf einen Punkt, indem Sie auf diesen Punkt klicken.
4. Klicken Sie, wo sie hinsoll. Die eingefügte Geometrie bleibt ausgewählt, sodass Sie sie sofort ziehen oder Abhängigkeiten hinzufügen können. {{key:Esc}} bricht das Einfügen ab.

Was mitkommt:

- Eine kopierte Linie, ein Kreis oder ein Bogen bringt seine eigenen Endpunkte und seinen Mittelpunkt mit.
- Abhängigkeiten und Bemaßungen **zwischen kopierten Elementen** kommen mit. Ein kopiertes Rechteck bleibt ein Rechteck, mit seinen Maßen.
- Abhängigkeiten **zu nicht kopierter Geometrie** und zum Ursprung entfallen. Die Statusleiste zählt sie: „2 Abhängigkeiten zu Geometrie außerhalb der Kopie werden nicht übernommen“. Eine eingefügte Kopie lässt sich daher frei verschieben, bis Sie sie mit Abhängigkeiten oder Bemaßungen einbinden.
- Ein fester Punkt bleibt fest, an seiner neuen Position.

{{ui:An gleicher Position einfügen}} setzt die Kopie genau auf die Koordinaten des Originals, in dieser oder in einer anderen Skizze. Das ist praktisch, um ein Profil von einer Skizze in eine andere zu bringen. In derselben Skizze liegt die Kopie über dem Original. Ziehen Sie sie weg.

{{ui:Duplizieren}} ({{key:Mod+D}}) kopiert die Auswahl und beginnt sofort, sie zu platzieren, ohne die Zwischenablage zu verändern.

:::tip
Um eine Bohrungsmitte oder einen Langloch-Umriss mehrmals zu wiederholen, kopieren Sie ihn einmal und fügen Sie ihn mehrmals ein. Jedes {{key:Mod+V}} startet eine neue Kopie, die dem Zeiger folgt.
:::

## Im Verlauf

1. Klicken Sie im Verlauf auf eine Skizze, eine Extrusion, eine Drehung oder eine Bohrung.
2. {{key:Mod+C}} kopiert sie. Ein skizzenbasiertes Feature wird zusammen mit seiner Skizze kopiert.
3. {{key:Mod+V}} fügt die Kopie am Ende des Verlaufs hinzu (an der Rollback-Leiste, wenn Sie zurückgerollt haben), mit neuen Namen wie Sketch3 und Extrude2.

Die Kopie liegt auf derselben Ebene oder Fläche wie das Original. Sie baut also darauf auf, und das Bauteil sieht gleich aus. Wählen Sie die neue Skizze aus und ändern Sie ihre Ebene im rechten Bereich, oder öffnen Sie sie und ziehen oder bemaßen Sie das Profil neu, um die Kopie zu verschieben.

- Einfügen in **ein anderes Bauteil**: Öffnen Sie dieses Bauteil und drücken Sie {{key:Mod+V}}. Lag die Skizze der Kopie auf einer Fläche, die dieses Bauteil nicht hat, kommt sie auf die Vorderebene. Die Statusleiste sagt es.
- {{ui:Duplizieren}} kopiert und fügt in einem Schritt ein, innerhalb desselben Bauteils.
- {{ui:Ausschneiden}} kopiert das Feature und löscht es dann (fragt vorher nach, wenn andere Features es verwenden).

Muster, Spiegelungen, Verrundungen, Fasen, Schalen und importierte Volumenkörper können nicht kopiert werden. Sie hängen an Kanten, Flächen oder Features, die in diesem Bauteil gewählt wurden. Kopieren Sie stattdessen die Skizze oder das Feature, auf dem sie aufbauen, oder mustern Sie es mit {{ui:Linear}} oder {{ui:Kreisförmig}}.

## In einer Baugruppe

1. Klicken Sie in der Ansicht oder in der Liste links auf ein Bauteil.
2. Wählen Sie {{ui:Duplizieren}} ({{key:Mod+D}}) oder {{key:Mod+C}} und dann {{key:Mod+V}}.

Die neue Kopie ist dasselbe Bauteil: Bearbeiten Sie eine, und jede Kopie ändert sich. Sie erscheint 20 mm rechts von allem, was bereits in der Baugruppe ist, genauso gedreht wie das Original, und bleibt dort, bis eine Verbindung sie platziert. {{ui:An gleicher Position einfügen}} ({{key:Mod+Shift+V}}) setzt sie genau dorthin, wo das kopierte Bauteil liegt. Verbinden Sie sie, um sie zu verschieben. Der Versatz eines Schubgelenks schiebt sie entlang.

Ein Bauteil aus einer anderen Baugruppe einzufügen bringt das Bauteil mit, genauso wie {{ui:Einfügen}} aus seiner Datei. {{ui:Kopie}} in der Gruppe Baugruppe macht dasselbe wie {{ui:Duplizieren}} und funktioniert auch ohne Auswahl. Dabei wird das zuletzt verwendete Bauteil kopiert.

## Die Zwischenablage

- Es ist die eigene Zwischenablage von PartCraft, nicht die des Computers. Sie können PartCraft-Geometrie nicht in ein anderes Programm einfügen, und Text nicht in die Ansichten von PartCraft.
- Sie wird in diesem Browser gehalten, sodass ein anderer PartCraft-Tab einfügen kann, was Sie kopiert haben. Sie wird wie eine geöffnete Datei gelesen und geprüft. Beschädigte oder aus einer anderen Version stammende Inhalte werden abgelehnt.
- Ein Bauteil mit einer großen importierten STEP-Datei ist möglicherweise zu groß für den Browser. Es wird dann nur in diesem Tab eingefügt.
- In einem Zahlenfeld oder der Hilfesuche kopieren und fügen {{key:Mod+C}} und {{key:Mod+V}} Text wie gewohnt ein.

Auf dem Zeichnungsblatt sind Kopieren und Einfügen noch nicht verfügbar. {{ui:Löschen}} und {{ui:Auswahl aufheben}} funktionieren mit dem gewählten Symbol. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
