---
title: Baugruppe mit Verbindungen erstellen
summary: Starten Sie eine Baugruppe aus einem Bauteil, fügen Sie Kopien und andere Bauteildateien ein, verbinden Sie sie mit starren, Dreh-, Schub-, Zylinder-, Ebenen-, Kugel- und Stift-im-Schlitz-Verbindungen auf ebenen Flächen, zentrieren Sie Verbindungen auf Achsen, bearbeiten Sie ein Bauteil direkt und speichern Sie die Baugruppe.
keywords: Baugruppe, Verbindung, Verbindungen, Gelenk, Schleife, geschlossene Schleife, Gestänge, Viergelenk, Mechanismus, starr, Drehgelenk, Schubgelenk, Zylindergelenk, Ebenengelenk, Kugelgelenk, sphärisch, Stift im Schlitz, Komponente einfügen, festes Bauteil, konzentrisch, deckungsgleich, Bauteil bearbeiten, im Kontext, partcraft-asm
from: a53bbfef
---

Eine Baugruppe fügt Bauteile zusammen. In PartCraft platzieren **Verbindungen** die Bauteile: Jede Verbindung sitzt auf einer ebenen Fläche von jedem von zwei Bauteilen und bringt sie Fläche auf Fläche. Ein Drehgelenk lässt ein Bauteil drehen, ein Schubgelenk lässt es gleiten, eine starre Verbindung hält es fest.

## Eine Baugruppe starten

1. Erstellen Sie ein Bauteil mit einem Volumenkörper. Ein leeres Bauteil kann nicht in eine Baugruppe: „Erstellen Sie zuerst einen Volumenkörper und fügen Sie ihn dann in eine Baugruppe ein.“
2. Wählen Sie {{ui:Baugruppe}} in der Symbolleiste.

Die Statusleiste zeigt „Baugruppe gestartet, Part1 als festes Bauteil. Fügen Sie weitere Bauteile hinzu ({{ui:Kopie}}, {{ui:Einfügen}} oder Bearbeiten › {{ui:Duplizieren}}) und verbinden Sie sie dann.“ Die linke Leiste listet jetzt **Bauteile** und **Verbindungen**, und die Symbolleiste zeigt die Werkzeuge der Baugruppe. Die Skizzen- und Feature-Werkzeuge werden ausgeblendet.

Das erste Bauteil ist das **feste Bauteil**: Es bewegt sich nie, und alles andere wird relativ dazu platziert.

## Bauteile einfügen

- {{ui:Kopie}} fügt eine weitere Kopie des ausgewählten Bauteils (oder des zuletzt verwendeten) ein. Kopien teilen sich ein Bauteil: Bearbeiten Sie es, und jede Kopie ändert sich.
- {{ui:Duplizieren}} ({{key:Mod+D}}) in der Gruppe Bearbeiten macht dasselbe für das ausgewählte Bauteil. {{key:Mod+C}} und {{key:Mod+V}} kopieren ein Bauteil und fügen es neben den anderen ein, in dieser oder einer anderen Baugruppe. {{key:Mod+Shift+V}} fügt es an derselben Stelle ein. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).
- {{ui:Einfügen}} fügt ein Bauteil aus einer `.partcraft.json`-Datei auf Ihrem Computer ein. Das Bauteil wird in die Baugruppe kopiert.

Neue Bauteile erscheinen 20 mm rechts von allem, was bereits da ist, und bleiben dort, bis eine Verbindung sie platziert. Ein Bauteil ohne Verbindung lässt sich auch von Hand verschieben: mit eingegebenen Werten oder mit Pfeilen, die Sie ziehen (siehe [Stückliste, Explosionsansichten und bewegliche Bauteile](topic:assembly-bom-explode)).

## Zwei Bauteile verbinden

1. Wählen Sie {{ui:Verbindung}} oder drücken Sie {{key:J}}. Das rechte Feld zeigt **Neue Verbindung**.
2. Klicken Sie auf eine ebene Fläche des ersten Bauteils. Sie wird hervorgehoben.
3. Klicken Sie auf eine ebene Fläche des zweiten Bauteils.

Das zweite Bauteil springt, sodass seine Fläche an der Fläche des ersten anliegt und ihr zugewandt ist. Die Verbindung erscheint unter **Verbindungen**, zum Beispiel „Revolute1“, und das rechte Feld zeigt ihre Einstellungen.

- Wenn beide Flächen durch Drehungen entstanden sind, beginnt die Verbindung als **Drehgelenk**, andernfalls als **starr**. Ändern Sie sie danach.
- Gekrümmte Flächen können nicht gewählt werden: „Diese Fläche ist gekrümmt. Wählen Sie eine ebene Fläche (um um eine Bohrung oder die Achse einer Drehung zu drehen, wählen Sie sie danach in der Verbindung).“
- {{key:Esc}} bricht eine begonnene Verbindung ab (oder klicken Sie links in der Liste auf ein Bauteil).

### Verbindungseinstellungen

| Einstellung | Was sie bewirkt |
|---|---|
| **Typ** | Eine der Verbindungen in der Tabelle unten |
| **Winkel (°)** | Dreht das zweite Bauteil um die Achse der Verbindung (rechtwinklig zu den Flächen) |
| **Versatz (mm)** | Verschiebt das zweite Bauteil entlang der Achse, weg von der Fläche (negative Werte drücken hinein) |
| **Entlang X**, **Entlang Y**, **Neigung um X**, **Neigung um Y**, **Entlang des Schlitzes**, **Schlitzrichtung** | Die übrigen Werte, angezeigt für die Verbindungen, die sie verwenden |
| **Zentrieren auf** (für jede Seite) | Wo die Achse der Verbindung die Fläche kreuzt: „Der eigene Ursprung der Fläche“, die Achse einer Drehung („Achse von Revolve1“) oder die Achse einer Bohrung („Hole1, Bohrung 2“) |

Jeder Wert, den eine Verbindung bewegen lässt, hat einen Ziehregler unter seinem Feld. Die anderen werden einmal eingestellt.

| Verbindung | Was sich bewegt | Einmal einstellen |
|---|---|---|
| **Starr** | nichts | Winkel, Versatz |
| **Drehgelenk** | Winkel (ein Scharnier) | Versatz |
| **Schubgelenk** | Versatz (eine Schublade) | Winkel |
| **Zylindergelenk** | Winkel und Versatz (eine Welle in einem Gleitlager) | |
| **Ebenengelenk** | Entlang X, Entlang Y quer über die Fläche und Winkel (ein Bauteil, das auf einem Tisch gleitet) | |
| **Kugelgelenk** | Winkel (Drehung) und Neigung um X und Y, um den Mittelpunkt der Verbindung (ein Kugelgelenk) | |
| **Stift im Schlitz** | Entlang des Schlitzes und Winkel (ein Stift in einem geraden Schlitz) | Schlitzrichtung: der Winkel des Schlitzes zur X-Achse der Fläche |

Die X- und Y-Achse einer Fläche sind die des Bauteils, dem die erste Fläche gehört. Der Mittelpunkt der Verbindung wird über **Zentrieren auf** festgelegt.

„Der eigene Ursprung der Fläche“ ist der Ursprung des Bauteils, auf die Fläche projiziert. Das ist oft nicht dort, wo Sie die Bauteile ausrichten möchten. Für runde Bauteile und Stifte stellen Sie **Zentrieren auf** auf beiden Seiten auf die Drehachse oder Bohrungsachse ein. Die Achsen liegen dann übereinander, wie bei einer konzentrischen Verbindung.

### Beispiel: zwei Flansche, Fläche auf Fläche verschraubt

1. Öffnen Sie das Flanschbauteil (eine Drehung mit einem kreisförmigen Muster von Bohrungen) und wählen Sie {{ui:Baugruppe}}.
2. Wählen Sie {{ui:Kopie}}.
3. Drücken Sie {{key:J}}, klicken Sie auf die ebene Fläche der Scheibe des ersten Flansches (die Fläche, von der die Schraubenlöcher ausgehen) und dann auf dieselbe Fläche des zweiten Flansches. Die Flächen entstanden durch die Drehung, daher ist die Verbindung ein Drehgelenk.
4. Stellen Sie **Zentrieren auf** für beide Seiten auf „Achse von Revolve1“. Die Flansche teilen sich nun eine Achse.
5. Geben Sie `22.5` in **Winkel (°)** ein, um die Schraubenlöcher auszurichten, oder ziehen Sie den Regler.

## Geschlossene Schleifen: Getriebe

Bauteile, die zu einem Ring verbunden sind (ein Viergelenk-Getriebe, eine Kurbel mit Schieber, ein beidseitig versteifter Rahmen), bilden eine **Schleife**. PartCraft löst jede Schleife so, dass sie sich schließt: Die Verbindungen darin nehmen die Werte an, die den Ring schließen, und bewegen sich dabei so wenig wie möglich von ihrer bisherigen Position.

- **Setzen oder ziehen** Sie einen Wert einer Verbindung in einer Schleife, und der Rest der Schleife folgt. Bei einem Viergelenk-Getriebe ziehen Sie den **Winkel** der Kurbel, und Koppel und Schwinge bewegen sich mit. Der Wert, den Sie setzen, bleibt erhalten. Die übrigen werden daraus berechnet.
- In der Liste ist eine Verbindung auf einer Schleife, die sich noch bewegen kann, **blau**: Ein anderer Wert könnte noch gesetzt werden. Eine Schleife, die sich nicht bewegen kann (ein versteifter Rahmen), bleibt schwarz. Eine Schleife, die sich nicht schließen kann, ist **rot**.
- Das Feld **Bauteil** zeigt **Schleifen**: wie viele geschlossen sind und wie viele Werte sich noch bewegen können, zum Beispiel „1 geschlossen; 1 Wert kann sich noch bewegen“.
- {{ui:Die Bewegung auf Kollisionen prüfen}} fährt eine Verbindung auf einer Schleife ab, wobei die Schleife ihr folgt, Schritt für Schritt (siehe [Baugruppe auf Kollisionen und Bewegung prüfen](topic:check-assembly)).

Ein flaches Getriebe aus flachen Stangen muss in der Tiefe übereinstimmen: Zwei Bauteile, die auf beiden Seiten eines Rings Fläche auf Fläche verbunden sind, brauchen in beide Richtungen dieselbe Stapelhöhe. Verwenden Sie den **Versatz** einer Verbindung, um ein Bauteil anzuheben, wenn der Stapel nicht aufgeht. Sonst kann sich die Schleife nicht schließen.

## Mit den Bauteilen arbeiten

Klicken Sie in der Ansicht oder in der Liste auf ein Bauteil, um es auszuwählen. Das rechte Feld zeigt seinen Namen, wie viele Kopien es gibt, sein Volumen, seine Verbindungen und ob es das feste Bauteil ist, durch seine Verbindungen bestimmt ist oder „Nicht verbunden: bleibt, wo es platziert wurde“. Schaltflächen:

- {{ui:Bauteil bearbeiten}} (oder {{ui:Bauteil}} in der Symbolleiste, oder Doppelklick auf das Bauteil in der Liste): öffnet das Bauteil zum Bearbeiten;
- {{ui:Eine Kopie einfügen}};
- {{ui:Zum festen Bauteil machen}};
- {{ui:Entfernen}}: entfernt auch seine Verbindungen, nach Rückfrage.

Eine Baugruppe behält mindestens ein Bauteil: „Eine Baugruppe behält mindestens ein Bauteil. Schließen Sie sie stattdessen.“

### Ein Bauteil in der Baugruppe bearbeiten

1. Wählen Sie ein Bauteil aus und wählen Sie {{ui:Bauteil}}. Das Bauteil öffnet sich mit seinem Verlauf, und die Überschrift lautet „Bracket (in Baugruppe Bracket)“.
2. Ändern Sie es wie jedes andere Bauteil.
3. Wählen Sie {{ui:Zurück}} in der Symbolleiste. Die Baugruppe wird aktualisiert: Jede Kopie dieses Bauteils ändert sich, und Verbindungen auf Flächen, die aus Skizzenkanten entstanden sind, folgen.

Das Übernehmen der Änderung ist ein einzelner Schritt in der Rückgängig-Liste der Baugruppe.

## Rückgängig, Speichern und Schließen

- Die Baugruppe hat eine eigene Rückgängig-Liste: {{key:Mod+Z}} und {{key:Mod+Y}} wirken auf Verbindungen, Einfügungen und Einstellungen.
- {{ui:Speichern}} oder {{key:Mod+S}} lädt `<assembly name>.partcraft-asm.json` herunter, mit allen Bauteilen darin. Öffnen Sie sie später mit {{ui:Öffnen}}.
- {{ui:Schließen}} schließt die Baugruppe und kehrt zu dem Bauteil zurück, mit dem Sie begonnen haben. Ist die Baugruppe nicht gespeichert, wird nachgefragt: {{ui:Abbrechen}}, {{ui:Baugruppe verwerfen}} oder {{ui:Zuerst speichern}}.
- Um die Baugruppe umzubenennen, klicken Sie auf eine leere Stelle, sodass nichts ausgewählt ist, und ändern Sie **Name** im rechten Feld.

## Große Baugruppen

Eine Baugruppe kann Tausende Kopien weniger Bauteile enthalten. Kopien eines Bauteils werden gemeinsam gezeichnet. Eine Verbindung, die Sie drehen, bewegt nur die Bauteile dahinter. Die Bauteilliste zeigt ihre ersten Zeilen, darunter eine Schaltfläche „Mehr anzeigen“ (das ausgewählte Bauteil ist immer aufgelistet).

- Während Sie die Ansicht drehen oder zoomen, wird eine Baugruppe mit mehr als etwa 300.000 Dreiecken als ein Quader pro Bauteil gezeichnet und kurz nach dem Stoppen vollständig.
- {{ui:Ansichten}} › {{ui:Vereinfachte Anzeige}} behält die Quader dauerhaft bei. Die Auswahl von Bauteilen und Verbindungen verwendet weiterhin die echten Bauteile.
- Wie schnell sie sich dreht, hängt auch von Ihrer Grafikkarte ab. Die Messwerte von PartCraft stehen in den Versionshinweisen, zusammen mit dem Rechner, auf dem sie gemessen wurden.

## Probleme mit Verbindungen

- Ein Bauteil, das keine Verbindung erreicht, wird als **frei** aufgeführt, und das Feld sagt: „Bracket2 ist nicht mit dem festen Bauteil verbunden und bleibt daher dort, wo es platziert wurde.“
- Eine Schleife, die sich nicht schließen kann (die Längen reichen nicht, eine Grenze blockiert eine Verbindung, die Flächen stimmen in der Tiefe nicht überein): „Revolute3 schließt eine Schleife, die sich nicht schließen kann: Sie ist um 2.000 mm versetzt. Prüfen Sie Flächen, Versätze und Grenzen der Verbindungen der Schleife.“ Ihre Verbindungen werden rot.
- Wenn eine Fläche oder Achse, die eine Verbindung verwendet, nach dem Bearbeiten eines Bauteils verschwunden ist: „Die Fläche, die diese Verbindung verwendet, fehlt in Bracket.“ Entfernen Sie die Verbindung und erstellen Sie sie neu.

Weiter: [Baugruppe auf Kollisionen und Bewegung prüfen](topic:check-assembly).
