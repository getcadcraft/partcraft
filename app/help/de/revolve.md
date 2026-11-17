---
title: Ein gedrehtes Bauteil per Drehung erstellen
summary: Skizzieren Sie ein halbes Profil neben einer Mittellinie, drehen Sie es zu einem runden Bauteil, wählen Sie Achse und Winkel und verwenden Sie einen Dreh-Schnitt für Nuten.
keywords: Drehung, gedrehter Aufsatz, Dreh-Schnitt, gedrehtes Bauteil, Drehbank, Welle, Achse, Mittellinie, Nut, Winkel, Dreh-Schnitt
from: 593b6929
---

{{ui:Drehung}} dreht ein Profil um eine Achse, wie ein Teil auf einer Drehbank: Wellen, Riemenscheiben, Flansche, Knöpfe. {{ui:Dreh-Schnitt}} (im Menü {{ui:Mehr}} der Gruppe Features) dreht ein Profil, um Material zu entfernen, für Nuten und Vertiefungen.

## Eine gestufte Welle drehen

1. Skizzieren Sie auf der **Vorderen Ebene**.
2. Drücken Sie {{key:N}} für {{ui:Mittellinie}}. Beginnen Sie am Ursprung und klicken Sie einen Punkt gerade nach rechts, zum Beispiel 100 mm entfernt. Dies ist die Achse. Sie ist gestrichelt: Konstruktionsgeometrie ist kein Teil des Profils.
3. Drücken Sie {{key:L}} für Linie. Zeichnen Sie das **halbe** Profil oberhalb der Mittellinie als eine geschlossene Schleife: Beginnen Sie auf der Mittellinie, gehen Sie nach oben, dann entlang, und kehren Sie zur Mittellinie zurück, dann entlang ihr zum Start. Die Enden müssen sich treffen: Die Schleife muss geschlossen sein.
4. Bemaßen Sie die Radien (Höhen über der Mittellinie) und die Längen. Eine Höhe von 10 über der Mittellinie ergibt einen Durchmesser von 20.
5. Wählen Sie {{ui:Beenden}}.
6. Wählen Sie {{ui:Drehung}}. Die Welle erscheint als volle Umdrehung.

Das Profil muss auf einer Seite der Achse bleiben. Kreuzt es sie, erscheint: „Das Profil kreuzt die Achse. Halten Sie es auf einer Seite der Mittellinie.“ Eine Profilkante darf auf der Achse liegen.

## Einstellungen

| Einstellung | Wirkung | Standard |
|---|---|---|
| **Operation** | Aufsatz (Material hinzufügen), Schnitt (Material entfernen), Schnittmenge (nur die Überlappung behalten) oder Neuer Körper | Aufsatz für {{ui:Drehung}}, Schnitt für {{ui:Mehr}} › {{ui:Dreh-Schnitt}} |
| **Winkel (°)** | Wie weit gedreht wird, von knapp über 0 bis 360 | 360 |
| **Achse** | Erste Mittellinie oder eine Linie bzw. Mittellinie der Skizze, aufgelistet als „Mittellinie 1 (l1)“ oder „Linie 3 (l3)“ | Erste Mittellinie |

Ein Teilwinkel ergibt einen Keil, der von der Skizzenebene in eine Richtung gedreht wird.

Hat die Skizze keine Mittellinie und lassen Sie **Achse** auf Erste Mittellinie, erscheint: „Zeichnen Sie in der Skizze eine Mittellinie (eine Konstruktionslinie), um darum zu drehen.“ Sie können auch eine volle Linie des Profils als Achse wählen.

## Eine Nut schneiden

1. Öffnen Sie bei der gebauten Welle eine neue Skizze auf der **Vorderen Ebene** (dieselbe Ebene wie die Skizze der Welle).
2. Zeichnen Sie eine Mittellinie auf derselben Achse: Beginnen Sie am Ursprung und halten Sie sie waagerecht, damit sie ein H erhält, oder geben Sie sie mit **Nach Koordinaten hinzufügen** ein (zum Beispiel von `0, 0` bis `100, 0`). Eine neue Skizze kann nicht an Linien einer anderen Skizze einrasten.
3. Zeichnen Sie ein kleines geschlossenes Rechteck, das die Kante der Welle dort überlappt, wo die Nut verlaufen soll.
4. Wählen Sie {{ui:Beenden}}, dann {{ui:Mehr}} › {{ui:Dreh-Schnitt}}.

## Gedrehte Flächen in Baugruppen

Eine Drehung hat eine Achse, die andere Features und Baugruppen nutzen können:

- Ein **kreisförmiges** Muster verwendet standardmäßig die Achse der letzten Drehung (siehe [Muster- und Spiegel-Features](topic:patterns-mirror));
- In einer Baugruppe beginnt eine Verbindung zwischen Flächen, die durch Drehungen entstanden sind, als **Drehgelenk**, und **Zentrieren auf** bietet „Achse von Revolve1“ an (siehe [Eine Baugruppe erstellen](topic:build-assembly)).

## Echte Kurven und Facetten

PartCraft erstellt eine Drehung mit dem Mesh-Kernel (die Statusleisten-Anzeige lautet „Mesh-Kernel“): Runde Formen sind flache Facetten, standardmäßig 64 pro Umdrehung, und Volumen liegen etwas unter dem wahren Wert (etwa 0.16 % bei 64). Ansicht sowie STL-, 3MF- und STEP-Exporte bestehen aus diesen Facetten. Stellen Sie **Kurven** (auf leeren Raum klicken, dann im rechten Bereich) auf Fein (128) oder Sehr fein (256) für glattere Formen. Echte Zylinder, Kegel und Tori brauchen einen exakten Kernel: in dieser Version noch nicht umgesetzt. Siehe [Der Mesh-Kernel](topic:solid-kernels).
