---
title: 3D-Schruppen und Restbearbeitung
summary: Räumen Sie das Rohteil rund um das ganze Modell Ebene für Ebene mit einem Planfräser, Eckradiusfräser oder Kugelfräser aus, und lassen Sie dann einen kleineren Fräser nur dort schneiden, wo der erste Material übrig gelassen hat. Was die Bahnen garantieren und was nicht.
keywords: 3D-Fräsen, Schruppen, Restbearbeitung, Restmaterial, Aufmaß, Zustellung, Ebenen, Z-Ebene, Wasserlinie, Rampe, Eintauchen, Beschädigung, kleineres Werkzeug
from: 29ddc266
---

Zwei Vorgänge in der Fertigung, unter {{ui:Mehr}} in deren Symbolleiste, räumen Rohteil im **ganzen Modell** in 3D aus, mit senkrecht gehaltenem Werkzeug (oder entlang der eigenen [Werkzeugrichtung](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) des Vorgangs). Sie brauchen keine Auswahl.

## 3D-Schruppen

{{ui:3D-Schruppen}} arbeitet sich von der Oberseite des Rohteils in einer **Zustellung** nach der anderen nach unten. Auf jeder Ebene räumt es alles aus, was das Werkzeug erreichen kann, ohne das Modell zu berühren: gerade Reihen im Abstand einer **Seitenzustellung** (ein Bruchteil des Werkzeugdurchmessers), dann einmal um den Rand des Erreichbaren herum, damit Wände nachgefahren werden und nicht als Treppe im Grundriss stehen bleiben.

- **Aufmaß**: wie weit das Werkzeug überall vom Modell bleibt, für den Schlichtgang (Standard 0.5 mm).
- **Eine Ebene an jeder ebenen Fläche**: eine zusätzliche Ebene auf der Höhe jeder ebenen Fläche des Modells (plus das Aufmaß), damit ein Boden nicht fast eine ganze Zustellung hoch stehen bleibt.
- **Rohteil dünner als ignorieren**: Material, das dünner ist als dieser Wert, nach oben oder seitlich, lohnt keinen Gang (0.05 mm beim Schruppen, 0.5 mm bei der Restbearbeitung, damit ein dünner Rest entlang einer Wand den kleineren Fräser nicht um jede Wand schickt).
- **Unten**: Nichts wird unter dieser Höhe geschnitten. Leer bedeutet die Unterkante des Modells.

Es beginnt mit dem Rohteil **so, wie die vorherigen Vorgänge es hinterlassen haben**: Nach einem Planvorgang schneidet es nicht die Luft dort, wo der Planfräser war.

Abwärts: Trifft das Werkzeug beim Absenken auf Material, fährt es mit dem **Rampenwinkel** schräg entlang seines eigenen Wegs hinein, hin und her über höchstens zwei Werkzeugdurchmesser. Ein Weg, der dafür zu kurz ist, wird mit dem Eintauchvorschub senkrecht eingetaucht. Der Vorgang zählt diese und warnt, denn ein Werkzeug, das nicht auf seiner Mitte schneidet, sollte das nicht tun.

## Restbearbeitung

{{ui:Restbearbeitung}} folgt derselben Strategie für einen **kleineren Fräser nach einem größeren**. Sie liest die Rohteilsimulation und schneidet nur dort, wo noch Material steht: in Innenecken, in die der größere Fräser nicht hineinkam, in Schlitze, die er nicht passte, und die Stufen, die er an Schrägen hinterließ. Überall sonst tut sie nichts, daher ist ihr Weg nur ein kleiner Teil dessen, was derselbe Fräser auf frischem Rohteil nehmen würde.

Setzen Sie sie hinter den Schruppvorgang und wählen Sie den kleineren Fräser. Sie braucht die Rohteilsimulation der vorherigen Vorgänge, die der Arbeitsbereich immer ausführt.

## Wie gut die Bahnen sind

- **Keine Beschädigung.** Die Werkzeugpositionen werden auf einem Raster berechnet, wobei der Fräser etwas größer angesetzt wird, als er ist (seitlich um 1.4 Rasterzellen und um das Aufmaß), damit er überall, wo er steht, frei vom Modell ist. Die Tests prüfen jeden Schneidpunkt gegen das genaue Werkzeug auf dem genauen Netz, und die Rohteilsimulation nach jedem Lauf: keine Beschädigung, keine Eilbewegung durch Rohteil.
- **Der Preis dafür**: Wände behalten etwas mehr als das Aufmaß, bis zu dem Betrag, der beim Vorgang als „Zusätzliches Aufmaß an Wänden“ angezeigt wird (etwa 0.5 mm bei einem Ø6-Werkzeug, weniger bei einem kleineren). Der Schlichtgang nimmt es weg.

Was diese Bahnen nicht sind:

- Die Reihen sind gerade Linien, keine Versätze der Form des Teils und keine Kurven mit konstantem Eingriff. Sie machen mehr Hübe und Leerfahrten als eine Versatz- oder Adaptivstrategie, und die erste Reihe auf jeder Ebene schneidet die volle Werkzeugbreite. Für Taschen mit ebenem Boden ist [Adaptiv](topic:manufacture) das bessere Schruppen.
- Schaft und Aufnahme des Werkzeugs werden nicht geprüft. Eine Warnung meldet, wenn der Schnitt tiefer ist als die Schneidenlänge.
- Hinterschnitte werden nicht erkannt: Das Modell ist das, was das Werkzeug beim Absenken entlang seiner Achse trifft. Um eine Seite zu schruppen, geben Sie einem zweiten Vorgang eine [geneigte Werkzeugrichtung](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Die Restbearbeitung kennt das Rohteil nur so genau wie das Raster der Simulation (Zellen von 0.1 bis 2 mm, je nach Teilgröße).
- Bei einem großen Werkstück ist das Programm lang (über 100,000 Bewegungen für einen 200-mm-Flansch mit einem Ø6-Werkzeug) und braucht etwa eine Minute zur Berechnung. Jede Änderung im Arbeitsbereich berechnet das ganze Programm neu. Verwenden Sie für das Schruppen den größten Fräser, der passt.
- Prüfen Sie die Ausgabe vor dem Schneiden in der Simulation Ihrer Maschine.
