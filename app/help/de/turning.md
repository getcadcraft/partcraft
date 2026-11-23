---
title: Drehen auf der Drehmaschine
summary: Plandrehen, Schruppen, Schlichten, Stechen, Abstechen, Gewinde und Bohren eines gedrehten Teils, ausgehend von der Kontur, die das Teil beim Drehen ergibt. Drehwerkzeuge, Vorschübe pro Umdrehung, Postprozessoren für Drehmaschinen und was nicht nachgewiesen ist.
keywords: Drehen, Drehmaschine, Plandrehen, Schruppen, Schlichten, Stechen, Abstechen, Gewinde, Gewindedrehen, G32, G33, G96, konstante Schnittgeschwindigkeit, CSS, Schneidenradius, Wendeschneidplatte, Stange, Spannfutter, Durchmesser, Vorschub pro Umdrehung, G71, G76
from: d8cc53b0
---

Die Fertigung hat sieben Vorgänge für eine Drehmaschine. Sie arbeiten an jedem Teil: Geschnitten wird die **Kontur, die das Teil beim Drehen um die Mitte des Rohteils ergibt**. Ein nicht runder Teil wird daher auf die runde Form heruntergedreht, die es hält.

**Hier ist nichts auf einer Drehmaschine gelaufen.** Die Bahnen werden durch die Tests gegen die Geometrie geprüft; die beiden Postprozessoren für Drehmaschinen folgen den dokumentierten Codes der Steuerungen. Prüfen Sie ein Programm zuerst in der Simulation Ihrer Steuerung und in der Luft.

## Einrichten

Auf der Registerkarte **Einrichtung**:

- **Werkzeugachse** ist die Achse der Spindel, das Z der Drehmaschine. Die Vorderseite des Teils liegt bei +Z; das Spannfutter hält das andere Ende.
- **Rohteil**: Wählen Sie {{ui:Zylinder}}, die Stange. Ihr oberer Versatz ist das, was der Plandrehschnitt entfernt.
- **Werkstückursprung**: Eine Mitte an der Oberseite des Rohteils oder des Modells legt Z0 auf die Vorderseite, den üblichen Ort.
- **Steuerung**: {{ui:Drehmaschine im Fanuc-Stil (.nc)}} oder {{ui:LinuxCNC-Drehmaschine (.ngc)}}. Ein Fräs-Postprozessor lehnt ein Drehprogramm ab und sagt das.
- **Maximale Spindeldrehzahl**: die Grenze, unter der die Schnittgeschwindigkeit gehalten wird.

{{ui:Mehr}} in der Symbolleiste Fertigung listet die sieben Drehvorgänge oben auf der Registerkarte **Vorgänge** auf. Der erste, den Sie hinzufügen, bringt sein eigenes Werkzeug mit: eine **Wendeschneidplatte** (Schneidenradius, Plattenwinkel, Schneidenwinkel) oder eine **Stechklinge** (Breite, Eckenradius, wie tief sie reicht). Ändern Sie sie auf der Registerkarte **Werkzeuge**. Vorschübe sind pro Umdrehung, und die Geschwindigkeit ist eine Schnittgeschwindigkeit in m/min, die die Steuerung bei sich ändernden Durchmessern hält. Geben Sie einem Werkzeug eine eigene Drehzahl in rpm, um die Geschwindigkeit stattdessen festzulegen.

## Die Vorgänge

| Vorgang | Was er tut |
|---|---|
| {{ui:Fläche}} | Plant die Vorderseite des Stabs bis zum Teil, eine Zustellung nach der anderen, von außen bis knapp über die Mitte. |
| {{ui:Schruppen}} | Gänge entlang Z im Abstand einer **Schnitttiefe**, bis zur Kontur plus dem **Aufmaß**; danach einmal entlang der Kontur, um die Stufen abzunehmen. Ein Tal zwischen zwei Absätzen wird mit einem Eintauchen von einer Schnitttiefe betreten. |
| {{ui:Oberfläche}} | Ein Gang entlang der Kontur mit einem Bruchteil des Werkzeugvorschubs. |
| {{ui:Stechen}} | Taucht die Klinge nebeneinander dort ein, wo sie mehr nehmen kann als die Grenze des noch vorhandenen Aufmaßes: die Nuten, die die Wendeschneidplatte nicht erreichen konnte. **Von / Bis Z** engt sie ein. |
| {{ui:Abstechen}} | Schneidet das Teil knapp hinter seiner Rückseite ab, bis knapp über die Mitte, mit Spanbrechhüben, falls Sie einen festlegen. |
| {{ui:Gewinde}} | Ein Außengewinde: Außendurchmesser, Steigung, Länge, Anzahl der Gänge. Tiefe 0 bedeutet 0.6134 × Steigung (ein 60°-Gewinde). Jeder Gang nimmt dieselbe Spanfläche; Federgänge wiederholen den letzten. |
| {{ui:Bohren}} | Ein Bohrer auf der Mittellinie bis zu einer Tiefe, mit Spanbrechhüben. |

## Wie das Werkzeug vom Teil fern gehalten wird

Die Wendeschneidplatte wird als das behandelt, was sie ist: ihr Schneidenkreis und dahinter die Nachlaufkante, eine gerade Linie, deren Winkel 180° minus Schneidenwinkel und Plattenwinkel beträgt. Diese Form wird an jedem Punkt entlang Z auf die Kontur abgesenkt, und der Weg ist dort, wo sie zur Ruhe kommt. Also:

- **Der Schneidenradius ist bereits im Weg berücksichtigt.** Die Postprozessoren schreiben kein `G41` oder `G42`; die Koordinaten sind der programmierte Punkt des Werkzeugs (die Ecke des Quadrats um die Schneide).
- Die Wendeschneidplatte **kann keiner Wand folgen, die steiler ist als ihre Nachlaufkante**. Eine Nut hinter einem Absatz bleibt unberührt, und der Schlichtvorgang sagt, wie viel der Kontur er nicht erreichen konnte. Ein Vorgang {{ui:Stechen}} übernimmt sie.
- Das Rohteil wird nach jedem Schnitt entlang Z verfolgt, damit das Schruppen keine Luft schneidet, das Stechen findet, was übrig ist, und jeder Vorgang das Volumen zeigt, das er entfernt hat, sowie, ob er in das Teil geschnitten hat.

## Grenzen

- **Nur Außendrehen**: keine Bohrstange, keine Innennuten oder Innengewinde, keine Planstechnuten.
- Eine Spindel, das Teil bei −Z gehalten. Keine Gegenspindel, keine angetriebenen Werkzeuge, keine C- oder Y-Achse, keine Bewegungen von Lünette oder Reitstock.
- Bahnen sind gerade Bewegungen: Kurven sind kurze Linien innerhalb der Toleranz (kein `G2`/`G3`), und Schruppen und Gewindedrehen werden Gang für Gang geschrieben (keine `G71`- oder `G76`-Zyklen).
- Gewindedrehen sind gerade Gänge mit einem geraden Auslauf am Ende; geben Sie dem Gewinde eine Freistichnut. Das Gewinde wird nicht im Rohteil angezeigt.
- Bohren auf der Mitte ändert das Rohteilmodell nicht.
- Aufnahme, Revolver und Spannfutter werden nicht geprüft. Legen Sie **Halt bei Z** fest, um das Werkzeug von den Backen fernzuhalten.
- Vorschübe und Drehzahlen sind Startwerte, wie beim Fräsen.
