---
title: Abstände, Winkel und Masse messen
summary: Klicken Sie zwei Dinge in der Ansicht an für den minimalen Abstand, den Winkel und ΔX ΔY ΔZ; lesen Sie die Länge einer Kante, den Durchmesser eines Lochs, die Fläche einer Fläche oder die Koordinaten eines Punkts ab; erhalten Sie Volumen, Masse, Schwerpunkt und Trägheit eines Bauteils oder einer Baugruppe.
keywords: messen, Abstand, minimaler Abstand, Winkel, Länge, Radius, Durchmesser, Fläche, Koordinaten, Delta, prüfen, Masseneigenschaften, Masse, Gewicht, Schwerpunkt, Trägheit, Trägheitsmoment, Dichte, Material
from: 20bda0b7
---

**Messen** arbeitet am Modell in jedem Arbeitsbereich (Design, Form, Simulation, Generative, Manufacture) und in einer Baugruppe. Es ist im Menü {{ui:Ansichten}} der Gruppe **Ansicht** zu finden, oder drücken Sie {{key:M}}. Eine Karte öffnet sich oben links in der Ansicht.

## Eines messen

Klicken Sie einen Eckpunkt, eine Kante oder eine Fläche an. Die Karte zeigt:

- **Einen Punkt** (ein Eckpunkt, ein Kantenmittelpunkt oder ein Kreismittelpunkt): seine X, Y, Z.
- **Eine Kante**: gerade, Kreis oder Kurve, und ihre Länge; bei einem Kreis außerdem den Radius, den Durchmesser und den Mittelpunkt.
- **Eine Fläche**: eben, Zylinder, Kegel usw., und ihre Fläche; bei einer ebenen Fläche die Normale; bei einem Zylinder Radius und Durchmesser (die Größe eines Lochs). Flächen sind die der Facetten, die der Mesh-Kern erstellt.
- **Der ganze Körper**: Halten Sie {{key:Shift}} gedrückt und klicken Sie das Bauteil an. Sie erhalten sein Volumen, seine Fläche, Masse und Trägheit (siehe unten).

Der Zeiger rastet innerhalb von 10 Pixeln auf Eckpunkte, Kantenmittelpunkte und Kreismittelpunkte ein; ein kleiner blauer Punkt zeigt den Fang, bevor Sie klicken. Um den Mittelpunkt eines Lochs zu wählen, zeigen Sie auf die Mitte des Lochs; um seinen Rand (den Kreis) zu wählen, zeigen Sie auf den Rand.

## Zwischen zwei Dingen messen

Klicken Sie ein zweites Element an. Die Karte ergänzt:

- **Minimaler Abstand** und die beiden nächsten Punkte, in der Ansicht mit einer Linie zwischen ihnen gezeigt.
- **ΔX, ΔY, ΔZ** vom ersten nächsten Punkt zum zweiten.
- **Winkel** zwischen zwei ebenen Flächen (zwischen ihren Normalen, 0–180°), zwischen zwei geraden Kanten oder Achsen (0–90°) oder zwischen einer Kante und einer Fläche.
- **Abstand der Ebenen** für zwei parallele ebene Flächen, **Mittelpunkt zu Mittelpunkt** für zwei Kreise oder Löcher, **Achse zu Achse** für zwei parallele Löcher oder Zylinder.

Ein dritter Klick beginnt ein neues Paar. {{key:Esc}} hebt die Wahl auf; {{key:Esc}} erneut (oder {{ui:Schließen}}) schließt Messen. {{ui:Kopieren}} legt die Ergebnisse als tabulatorgetrennten Text in die Zwischenablage, bereit zum Einfügen in eine Tabelle.

### Wie genau es ist

PartCraft erstellt das Bauteil mit dem Mesh-Kern, daher werden Abstände auf den Facetten des Netzes berechnet, und die Karte sagt **ungefähr: aus den Facetten**. Das ist richtig für ebene Flächen und zwischen Eckpunkten, leicht abweichend bei gekrümmten. Eine feinere Einstellung **Kurven** bringt sie näher. Exakte Messung auf den echten Oberflächen braucht einen exakten Kern: in dieser Version noch nicht umgesetzt.

## Masseneigenschaften

Wählen Sie {{ui:Masseneigenschaften}} in der Karte oder im Menü {{ui:Ansichten}}. Bei einem Bauteil wählen Sie in der Karte ein **Material** (Stahl, Aluminium, Kunststoffe und andere mit ihren üblichen Dichten). In einer Baugruppe verwendet jedes Bauteil das Material, das in seinen Eigenschaften eingestellt ist (Bauteil wählen, dann **Material**), und das Ergebnis gilt für alle Bauteile zusammen.

Die Karte zeigt Masse, Volumen, Fläche, Schwerpunkt, den Trägheitstensor (Ixx, Iyy, Izz und die Produkte Ixy, Iyz, Ixz, in kg·mm², um den Schwerpunkt entlang der Weltachsen) und die Hauptmomente. Ohne Material zeigt sie dieselben Werte pro Einheitsdichte (mm⁵) und keine Masse.

Die Zahlen sind exakt für den tesselierten Volumenkörper, den der Mesh-Kern erstellt (gekrümmte Flächen als Facetten). Daher kommt ein rundes Bauteil etwas zu niedrig heraus, und die Karte sagt das. Die Dichten der Materialien sind übliche Tabellenwerte; eine echte Legierung oder Sorte kann um einige Prozent abweichen.

## Grenzen

- Fänge können einen Punkt finden, der hinter anderer Geometrie verborgen ist; prüfen Sie, ob die Karte zeigt, was Sie meinten.
- Messen wird geschlossen, wenn Sie eine Skizze oder das Zeichnungsblatt öffnen oder den Arbeitsbereich wechseln.
