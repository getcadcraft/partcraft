---
title: 4- und 5-Achsen-Bearbeitung
summary: Teilen Sie PartCraft mit, welche Drehachsen die Maschine hat, neigen Sie das Werkzeug für jeden gewöhnlichen Vorgang, schlichten Sie eine Fläche mit einem Kugelfräser, der sich beim Schneiden neigt, oder drehen Sie das Werkstück unter dem Werkzeug auf einer vierten Achse. Was in den G-Code geschrieben wird und was nicht nachgewiesen ist.
keywords: 5-Achsen, fünf Achsen, 4-Achsen, vierte Achse, Mehrachs, Mehrachsen, 3+2, indiziert, positionierend, neigen, geneigtes Werkzeug, Drehachse, Rundtisch, Tisch, Kopf, A-Achse, B-Achse, C-Achse, TCP, RTCP, Werkzeugspitze, G43.4, inverse Zeit, G93, Kinematik, Drehpunkt, Swarf, Vorwinkel
from: c4f1c491
---

Die Fertigung kann das Werkzeug in einem Winkel halten und die Drehachsen beim Schneiden bewegen. Drei Verfahren leisten das, vom einfachsten zum anspruchsvollsten.

**Hier ist nichts auf einer Maschine gelaufen.** Die Bahnen werden durch die Tests gegen die Geometrie geprüft, und der G-Code wird zurückgelesen. Die eingebauten Postprozessoren folgen aber den dokumentierten Codes der Steuerungen, nicht einer Maschine, die uns vorliegt. Prüfen Sie ein Programm in der Simulation Ihrer Steuerung und in der Luft, bevor es Metall berührt.

## Die Drehachsen der Maschine

Auf der Registerkarte **Einrichtung** legt {{ui:Drehachsen}} fest, was die Maschine hat:

| Auswahl | Die Maschine |
|---|---|
| Keine (3 Achsen) | Eine einfache Fräse. Jeder Vorgang, der ein geneigtes Werkzeug braucht, meldet eine Warnung, und der Postprozessor schreibt ihn nicht. |
| A (dreht um X) | Eine Drehachse entlang X: ein Rundtisch oder ein Teilkopf. Das Werkzeug kann nur in der Y–Z-Ebene geneigt werden. |
| B (dreht um Y) | Eine Drehachse entlang Y. Das Werkzeug kann nur in der X–Z-Ebene geneigt werden. |
| A und C | Eine Schwenkachse um X, getragen von einer Drehung um Z oder sie tragend: ein Schwenktisch oder ein Kopf. |
| B und C | Dasselbe mit der Schwenkung um Y. |

Dann:

- **Getragen von**: {{ui:Der Tisch (das Werkstück dreht sich)}} oder {{ui:Der Kopf (das Werkzeug dreht sich)}}. Ein Tisch dreht in die entgegengesetzte Richtung, um dieselbe Fläche unter das Werkzeug zu bringen; daher folgt das Vorzeichen jedes Winkels hieraus.
- **Die Steuerung hält die Werkzeugspitze auf der Bahn (TCP)**: Ein, dann sind X Y Z im Programm die Werkzeugspitze in den eigenen Koordinaten des Werkstücks, und die Steuerung erledigt den Rest (die eingebauten Postprozessoren im Stil von Fanuc und LinuxCNC schreiben `G43.4` für die Werkzeuglänge). Aus, dann schreibt PartCraft bei einer Tischmaschine X Y Z, wie der gedrehte Tisch das Werkstück trägt, um die **Drehmitte**, die Sie angeben (in Werkstückkoordinaten; 0, 0, 0, wenn der Werkstücknullpunkt in der Mitte liegt). Eine Kopfmaschine braucht TCP ein: ohne TCP müsste das Programm die Schwenklänge der Maschine kennen, und PartCraft kennt sie nicht.
- **Neigungsgrenze**: wie weit die Schwenkachse geht.

Maschinen unterscheiden sich darin, welche Richtung sie als positiv zählen. Dreht eine Achse bei Ihnen in die falsche Richtung, ändern Sie das Vorzeichen in einer Kopie des Postprozessors ([Bearbeitbare Postprozessoren](topic:post-processors)).

## Ein geneigtes Werkzeug für einen gewöhnlichen Vorgang

Jeder Fräsvorgang (Planen, Tasche, Adaptiv, Kontur, Bohren, Fase, Parallel, Scallop, 3D-Schruppen, Restbearbeitung) hat eine **Werkzeugneigung** und **Neigung zu**: die Werkzeugrichtung nur für diesen Vorgang, gemessen von der Werkzeugachse der Einrichtung. Das ist 3+2-Bearbeitung: Die Drehachsen fahren in eine Position und bleiben dort, während drei Achsen schneiden.

- Geben Sie die zwei Winkel ein, oder drücken Sie {{ui:Werkzeug senkrecht zu einer Fläche}} und klicken Sie auf eine ebene Fläche: Das Werkzeug zeigt dann direkt darauf.
- Wählen Sie die Flächen und Kanten des Vorgangs wie üblich. Was als Boden oder Loch gilt, wird entlang des geneigten Werkzeugs beurteilt.
- Das Rohteil für diese Richtung ist der Quader, der das gedrehte Rohteil enthält. Höhen und Freiräume sind so von dieser Seite sicher.

Im G-Code fährt das Werkzeug vor dem Vorgang nach oben, die Drehachsen drehen sich, und das Werkzeug fährt über seinem ersten Punkt nach unten. Bei einer Tischmaschine ohne TCP bleiben Bögen Bögen und Bohrzyklen Zyklen (das geschriebene Koordinatensystem wird nur um Z gedreht). Mit TCP in einer geneigten Ebene werden Bögen zu kurzen Linien und Zyklen zu den Bewegungen, die sie darstellen.

Die Rohteilsimulation führt eine geneigte Richtung **für sich allein** aus: Sie zeigt, was dieser Vorgang vom ganzen Rohteil aus seiner Seite schneidet, und findet dort Beschädigungen. Schnitte aus anderen Richtungen werden nicht übernommen.

## 5-Achsen-Schlichten

{{ui:Mehr}} in der Symbolleiste Fertigung listet diesen Vorgang und den nächsten oben auf der Registerkarte **Vorgänge** auf.

{{ui:5-Achsen}} ist der [Parallel-Schlichtgang](topic:finish-3d) mit einem **Kugelfräser, der sich beim Schneiden neigt**. Eine Kugel schneidet mit ihrer Kugelfläche, und diese ist dieselbe, in welche Richtung das Werkzeug auch um ihren Mittelpunkt geneigt ist. Daher folgt die Kugel genau der Bahn, die der 3-Achsen-Schlichtgang liefern würde, und nur die Richtung des Werkzeugs ändert sich:

- **Zur Fläche hin**: 1 = senkrecht zur Fläche, 0 = aufrecht, dazwischen beliebig.
- **Vorneigung**: Grad in Schnittrichtung, damit nicht der ruhende Mittelpunkt der Kugel schneidet.
- **Größte Neigung**: Das Werkzeug neigt sich nie weiter als dies von der Achse der Einrichtung.

Wo der Schaft das Modell berühren würde, wird die Neigung zurückgenommen, bis er frei ist, und der Vorgang sagt, an wie vielen Stellen das geschah. Jeder Gang wird mit einer geraden Hubbewegung begonnen und verlassen.

## Schlichten mit Drehachse (4. Achse)

{{ui:Rund}} ist für ein Werkstück, das entlang der **Werkstück-X** auf einer Drehachse gehalten wird. Das Werkstück dreht sich, und ein Kugelfräser, der stets auf die Achse zeigt, folgt seiner Oberfläche:

- **Gänge**: {{ui:Along the axis}} (Linien entlang X, im Abstand einer Seitenzustellung in der Drehung) oder {{ui:Round the part}} (Ringe, im Abstand einer Seitenzustellung in X).
- **Achse bei Y / Z**: wo die Achse liegt. Leer bedeutet die Mitte des Rohteils. Bei einer Tischmaschine ohne TCP muss dies die Drehmitte in der Einrichtung sein; der Vorgang warnt, wenn sie es nicht ist.
- **Von / Bis X** und **Von / Bis Winkel**: der Teil der Länge und der Drehung, der geschnitten wird.

Die Höhe der Kugel über der Achse ist an jedem Punkt das genaue Absenken einer Kugel auf das Netz des Werkstücks, von dieser Seite.

## Grenzen

- Das 5-Achsen- und Drehschlichten nimmt nur einen **Kugelfräser**. Es gibt kein Swarf-Schneiden (die Seite des Werkzeugs an einer geradlinigen Wand), keine Fließlinien entlang der eigenen Richtungen einer Fläche, kein Mehrachs-Schruppen und keine automatische Wahl der Neigung zur Vermeidung einer Kollision.
- 5-Achsen- und Drehbahnen werden **nicht durch die Rohteilsimulation geführt**, die eine Höhenkarte ist und keinen geneigten Schnitt abbilden kann.
- Der Schaft wird beim 5-Achsen-Schlichten gegen das Modell aus der Draufsicht geprüft. Die Aufnahme, die Spindel und die Maschine selbst werden nirgends geprüft.
- Das Drehschlichten schneidet nur, was das Werkzeug beim Blick auf die Achse sehen kann.
- Das 5-Achsen-Schlichten braucht bei einem großen Werkstück eine Minute oder mehr zur Berechnung: Der Schaft wird an jedem Punkt jedes Gangs geprüft.
- Bewegen sich die Drehachsen mit den Linearachsen und ist TCP aus, schreiben die eingebauten Postprozessoren den Vorschub als inverse Zeit (`G93`) und kehren danach zu `G94` zurück.
- Es wird kein Code für eine geneigte Arbeitsebene (`G68.2` und ähnliche) geschrieben, und es sind keine maschinenspezifischen Grenzen, kein Abwickeln und keine Kollisionsbereiche bekannt.
