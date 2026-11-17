---
title: Eine Zeichnung an einen Laser senden
summary: Legen Sie fest, was jeder Layer tut (schneiden, ritzen, gravieren, füllen, Bild), prüfen Sie die Bewegungen des Kopfs in der Vorschau, speichern Sie GRBL-G-Code im Laserbetrieb oder senden Sie ihn aus dem Browser, nachdem Sie den Auftragsrahmen abgefahren haben.
keywords: Laser, Laserschneider, Lasergravierer, GRBL, G-Code, gravieren, füllen, Dithering, Bildgravur, ritzen, schneiden, Web Serial, Linux, Auftragsrahmen abfahren, Leistung, Geschwindigkeit, Durchgänge
from: 327b3c46
---

Das Panel {{ui:Laser}} verwandelt die Layer einer Zeichnung in ein Programm für einen Laser, der GRBL ausführt (die meisten Hobby- und Kleinwerkstatt-Diodenlaser und CO2-Steuerungen). Wählen Sie in PartCraft {{ui:Exportieren}} › {{ui:Laserprogramm…}}, dann {{ui:Konturen aus einer DXF hinzufügen …}}: Die Konturen und Löcher kommen auf den Layer CUT. Die Abwicklungen von Blechteilen (mit ihren Biegelinien auf dem Layer BEND) benötigen den exakten Kern, den diese Version nicht hat. Die Einstellungen werden in der Bauteil- oder Baugruppendatei gespeichert.

:::warning
Testen Sie jede Einstellung zuerst an Ausschussmaterial, tragen Sie Laserschutzbrillen, die zu Ihrem Laser passen, lassen Sie den Deckel geschlossen, wo einer vorhanden ist, und lassen Sie einen laufenden Laser nie allein. Die Werte, mit denen ein Layer beginnt, sind Platzhalter und keine Empfehlungen für ein Material.
:::

## Festlegen, was jeder Layer tut

Jeder Layer der Zeichnung ist eine Zeile. {{ui:Aktion}} stellt ihn auf **Schneiden**, **Ritzen**, **Linien gravieren**, **Formen füllen**, **Bild gravieren** oder **Nicht gesendet**, mit einer {{ui:Leistung %}}, einer {{ui:Geschwindigkeit mm/min}} und einer Anzahl {{ui:Durchgänge}}.

- **Formen füllen** brennt das Innere geschlossener Formen in Linien, im Abstand von {{ui:Line spacing}}, unter einem {{ui:Winkel}}, in beide Richtungen oder in eine, mit einem Überfahrweg, damit der Kopf auf Geschwindigkeit ist, wenn der Laser einschaltet. Kreuzschraffur fügt einen zweiten Durchgang unter 90° hinzu. Eine Form mit einem Loch bleibt an dem Loch offen.
- **Bild gravieren** wandelt ein Bild in Punkte um (Floyd–Steinberg, Atkinson, geordnet oder einfaches Schwarzweiß mit einem Schwellwert) oder, mit *Graustufen*, in eine variable Leistung.
- Reihenfolge: zuerst Bilder und Füllungen, dann Linien gravieren, dann Ritzen, dann Schneiden, damit sich ein ausgeschnittenes Teil nicht bewegt, während es graviert wird. Innerhalb eines Layers verlaufen die Bahnen **innen zuerst** (ein Loch vor der Platte, in der es liegt), jeweils zum nächsten Punkt.

## Vorschau, dann speichern

Die Vorschau zeigt, was der Kopf tut: brennende Linien in Farbe, schnelle Bewegungen in Grau und ein grünes Rechteck um alles, was brennt. Darunter stehen Größe, Brennlänge und eine Zeitschätzung (ohne Beschleunigung; eine echte Maschine braucht länger). {{ui:G-Code speichern…}} schreibt GRBL-G-Code im Laserbetrieb: `$32=1`, `M4` (oder `M3`) mit S-Werten, `G0`- und `G1`-Bewegungen, `M5` am Ende. X0 Y0 ist die untere linke Ecke des Auftrags, außer Sie wählen den Ursprung der Zeichnung: Legen Sie dort den Werkstücknullpunkt Ihrer Maschine fest. Der G-Code folgt dem dokumentierten Laserbetrieb von GRBL; er wurde auf einem echten Laser noch nicht ausprobiert.

## Aus dem Browser senden

In Chrome und Edge fragt {{ui:Verbinden…}} nach dem USB-Anschluss des Lasers. Nichts verbindet sich oder sendet, bis Sie eine Schaltfläche drücken. Drücken Sie zuerst {{ui:Auftragsrahmen abfahren}}: Der Kopf fährt die Box des Auftrags ab, mit ausgeschaltetem Laser (oder mit der niedrigen Leistung, die Sie für einen Zeiger eingestellt haben), damit Sie sehen, wo gebrannt wird. Erst dann wird {{ui:Auftrag senden}} aktiv, und er wird wieder deaktiviert, wenn Sie etwas ändern. {{ui:Pause}} hält den Kopf an, {{ui:Stopp}} hält ihn ebenfalls an, setzt die Steuerung zurück (der Laser geht aus) und sendet `M5`. Wo Web Serial fehlt (Firefox, Safari und CadCraft Studio, dessen Webansicht es noch nicht hat), speichern Sie den G-Code und senden ihn mit dem eigenen Programm Ihres Lasers.

## Noch nicht umgesetzt

Andere Formate von Steuerungen (Ruida, Marlin-Laser, Herstellerdateien), Haltestege und Anfahrbögen, Schnittfugen-Versatz, Materialbibliotheken, Dreh- und Z-Achsen, Kameraausrichtung.
