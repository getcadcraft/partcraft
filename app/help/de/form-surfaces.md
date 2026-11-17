---
title: Freiformkörper mit Form und Flächenmerkmale
summary: Eine glatte Steuerhülle im Arbeitsbereich Form verschieben und ziehen, Kanten knicken, Symmetrie nutzen, prüfen und zu einem exakten Körper oder einer exakten Fläche fertig stellen, dann Flächen in Design flicken, lofteten, vernähen, verdicken, versetzen, verlängern und stutzen. Was exakt ist und was angenähert wird.
keywords: Form, Freiform, T-Spline, Unterteilung, Catmull-Clark, Käfig, Quadball, Knick, Symmetrie, Zebra, Krümmung, Fläche, Flicken, Füllen, Loft-Fläche, vernähen, nähen, verdicken, Versatzfläche, verlängern, stutzen
from: 0d326ef4
---

:::note
**Noch nicht umgesetzt in dieser Version.** Das Fertigstellen einer Form im Bauteil und die Flächenmerkmale brauchen einen exakten Geometrie-Kernel, den diese Version von PartCraft nicht hat: Sie baut jedes Bauteil mit dem Mesh-Kernel. [Was noch nicht umgesetzt ist](topic:not-built-yet) sagt, was stattdessen zu tun ist. Der Rest dieser Seite beschreibt sie so, wie sie mit einem exakten Kernel arbeiten.
:::

Der Arbeitsbereich **Form** erzeugt organische Formen. Sie bearbeiten einen **Käfig**, ein grobes Netz aus Ecken, Kanten und Flächen. Die Form ist die glatte Fläche, die der Käfig steuert (ihre Catmull–Clark-Grenzfläche), sodass das Verschieben einer Ecke die Fläche sanft um sie herum biegt. Ist es richtig, fügt **Oberfläche** es als *Form*-Merkmal zur Historie hinzu, und der exakte Kernel macht daraus echte B-Spline-Flächen. Danach können Sie es verrunden, schneiden, mit anderen Merkmalen verbinden und als STEP exportieren.

Wählen Sie **Form** in der Liste **Arbeitsbereich** links in der Werkzeugleiste.

## Käfig starten

1. Setzen Sie **Größe** und **Unterteilungen** im rechten Panel. Unterteilungen ist die Anzahl der Flächen pro Seite.
2. Klicken Sie {{ui:Box}}, {{ui:Quadball}} oder {{ui:Plane}} in der Werkzeugleiste. Das Panel hat außerdem **Zylinder**, **Torus** und **Flächen per Klick**.

- Ein **Quadball** ist ein Quaderkäfig, dessen Eckpunkte auf einer Kugel liegen. Zwischen diesen Punkten liegt die Fläche etwas innerhalb der Kugel: etwa 0.4 % weniger Volumen bei 2 Unterteilungen.
- Eine **Ebene** ist offen, daher wird sie zu einem Flächenkörper (siehe „Flächenmerkmale in Design“ unten).
- **Flächen per Klick**: Klicken Sie 4 Punkte auf der oberen (Boden-)Ebene oder auf Ecken des Käfigs, um eine Fläche zu erzeugen. Flächen, die Ecken teilen, verbinden sich. Drücken Sie {{key:Enter}} nach 3 Punkten für ein Dreieck oder {{key:Esc}}, um zu beenden.

Ihr unvollendeter Käfig wird mit der Bauteildatei gespeichert, sodass Sie die Datei schließen und später weitermachen können.

## Auswählen und verschieben

- Klicken Sie eine Ecke, eine Kante oder eine Fläche des Käfigs an. {{key:Shift}}+Klick fügt Elemente hinzu oder nimmt sie weg. {{key:Esc}} hebt die Auswahl auf.
- Ein Gizmo erscheint in der Mitte der Auswahl. Ziehen Sie einen Pfeil, um entlang ihm zu verschieben, oder ein Quadrat, um in dieser Ebene zu verschieben. Drücken Sie {{key:W}} zum Verschieben, {{key:E}} zum Drehen und {{key:R}} zum Skalieren, oder verwenden Sie die Schaltflächen im Panel. {{ui:Gizmo}} in der Werkzeugleiste schaltet zwischen ihnen um.
- **Weiche Abschwächung** (mm) zieht auch die Ecken innerhalb dieses Abstands mit, die bis zum Rand dieses Abstands sanft auslaufen.
- Jedes Ziehen ist ein Rückgängig-Schritt: {{key:Ctrl+Z}} und {{key:Ctrl+Y}} funktionieren wie gewohnt.

## Käfig ändern

Die Schaltflächen **Ändern** im Panel wirken auf die Auswahl:

| Schaltfläche | Wirkung |
|---|---|
| {{ui:Extrude}} | Gewählte Flächen werden um den **Extrusionsabstand** entlang ihrer Normalen herausgeschoben, mit neuen Seitenflächen. Gewählte offene Kanten bilden nach außen neue Flächen. |
| {{ui:Edge loop}} / Kantenschleife einfügen | Teilt den Ring vierseitiger Flächen, der die gewählte Kante kreuzt, auf halber Strecke. Mehr Schleifen ergeben engere Kurven. |
| Punkt einfügen | Fügt eine Ecke in der Mitte der gewählten Kante hinzu. |
| Unterteilen | Teilt jede gewählte Fläche um ihre Mitte in vierseitige Flächen. |
| Überbrücken | Verbindet zwei gewählte Flächen oder zwei Öffnungen (je eine offene Kante wählen) mit einer Röhre aus Flächen. Beide brauchen die gleiche Anzahl Kanten. |
| Loch füllen | Schließt die Öffnung über die gewählte offene Kante mit einer Fläche. |
| Verschweißen | Führt die gewählten Ecken in ihrer Mitte zu einer zusammen. |
| Abflachen | Verschiebt die gewählten Ecken auf die Ebene, die am besten zu ihnen passt. |
| Löschen | Entfernt die gewählten Flächen, Kanten (zwei Flächen verschmelzen) oder Ecken. |

## Scharfe Kanten, Symmetrie und Anzeige

- {{ui:Crease}} macht die gewählten Kanten scharf. **Knickgewicht** 10 ist voll scharf. Ein kleineres Gewicht bleibt für so viele Verfeinerungsschritte scharf und wird dann weich, was eine enge Rundung statt einer harten Faltung ergibt. **Entknicken** macht sie wieder glatt. **Scharfe Ecke** fixiert eine Ecke, sodass die Fläche dort mit einer Spitze hindurchgeht.
- **Symmetrie** spiegelt den Käfig über X, Y oder Z = 0. Sie behält die positive Seite, spiegelt sie und verbindet beide Hälften. Danach geschieht eine Änderung auf einer Seite auf beiden. Ecken auf der Spiegelebene bleiben darauf.
- {{ui:Display}} wechselt zwischen **Glatt** (die Fläche, die das Merkmal wird) und **Quader** (die Käfigflächen selbst).
- **Analyse**: **Zebrastreifen** spiegeln einen gestreiften Lichtschein aus der aktuellen Ansicht. Sie biegen sich auf einer glatten Fläche sanft und brechen an einer Knickkante. **Mittlere Krümmung** färbt konvexe Bereiche rot, konkave blau und ebene weiß. Sie wird am angezeigten Netz mit der Kotangensformel gemessen, ist also eine Orientierung und keine Messung.

## Prüfen und fertig stellen

- **Exakt prüfen** wandelt den Käfig im exakten Kernel um, ohne Ihr Bauteil zu ändern. Es meldet, wie viele B-Spline-Flicken der Käfig ergibt, wie viele davon exakt sind und ob das Ergebnis ein geschlossener, gültiger Körper ist, sowie sein Volumen.
- {{ui:Finish}} fügt der Historie ein *Form*-Merkmal hinzu oder aktualisiert die Form, die Sie bearbeiten, und bringt Sie zurück zu Design. Ein geschlossener Käfig wird ein Volumenkörper. Seine **Operation** im Design-Panel kann Neuer Körper, Verbinden, Schneiden oder Schnittmenge sein. Ein offener Käfig wird ein Flächenkörper.
- Um eine Form später zu ändern, wählen Sie sie in der Historie und klicken **In Form bearbeiten**. Der gebaute Körper wird ausgeblendet, während Sie seinen Käfig bearbeiten.
- **Verwerfen** wirft den Käfig weg, ohne die Historie zu berühren.

## Was exakt ist und was angenähert wird

Jede vierseitige Fläche des Käfigs wird bei Bedarf verfeinert und zu einem bikubischen B-Spline-Flicken.

- Wo jede Ecke einer Fläche *regulär* ist (vier Kanten treffen sich innerhalb der Fläche oder drei an einer offenen Kante oder entlang einer Knickkante), ist der Flicken **exakt** die Unterteilungsfläche. Die Tests prüfen das auf 1e-9 mm.
- Um einen **außergewöhnlichen Punkt** (drei, fünf oder mehr Kanten treffen sich, eine Ecke einer drei- oder fünfseitigen Fläche oder das Ende einer Knickkante) gibt es keinen exakten polynomialen Flicken. Dort übernimmt der Flicken den exakten Punkt und die Tangentialebene an dieser Ecke sowie die Randkurven der Nachbarn, sodass die Flicken ohne Lücke aneinander stoßen. Die Tangentenstetigkeit über die Kanten, die sich am Punkt treffen, ist angenähert. Das Form-Panel und das Panel des Merkmals geben den größten Winkel an, typischerweise unter 2°. Eine höhere **Stufe** im Panel des Merkmals macht diese Flicken kleiner und näher.
- Scharfe Knickkanten sind echte Kanten des Körpers, Sie können sie also verrunden.
- Jeder Flicken ist seine eigene Fläche, daher hat eine Form viele Flächen, und zwischen ihnen werden Linien gezeichnet.

## Flächenmerkmale in Design

Die Flächenbefehle sind im Menü {{ui:More}} von Design unter den Merkmalen. Sie brauchen den exakten Kernel. Flächenkörper werden blau und durchsichtig gezeichnet. Sie sind nicht Teil des Volumenkörpers, bis Sie sie verdicken oder vernähen.

| Befehl | Wirkung |
|---|---|
| Flicken | Füllt eine geschlossene Kantenschleife. Zuerst {{key:Shift}}+Klick auf die Kanten des Körpers, oder wählen Sie einen Flächenkörper, um seine Öffnung zu füllen. **Tangential (G1)** lässt den Flicken glatt an diese Fläche anschließen. |
| Loft-Fläche | Eine Fläche durch eine Kette von Kurven pro Skizze (offen oder geschlossen), in der Reihenfolge der Historie. |
| Vernähen | Näht Flächenkörper entlang ihrer gemeinsamen Kanten. Schließen sie sich, ist das Ergebnis ein Volumenkörper, mit einer Operation wie bei anderen Merkmalen. |
| Verdicken | Gibt einem Flächenkörper eine Dicke: entlang seiner Normalen, gegen sie oder je zur Hälfte in beide Richtungen. Das Ergebnis ist ein Volumenkörper. |
| Versatzfläche | Eine Kopie eines Flächenkörpers, entlang seiner Normalen verschoben. Das Original bleibt. |
| Fläche verlängern | Verlängert eine einflächige Fläche über die gewählten Kanten hinaus. |
| Fläche stutzen | Schneidet einen Flächenkörper, wo ein anderer Flächenkörper oder der Volumenkörper ihn kreuzt. Klicken Sie **Punkt auf dem Teilstück wählen**, um zu bestimmen, welches Stück bleibt, oder behalten Sie alles andere. |

Vernähen, Verdicken, Verlängern und Stutzen verbrauchen den Flächenkörper, von dem sie ausgehen. Spätere Merkmale verwenden den neuen.

Aktuelle Grenzen: Formen mit mehreren getrennten geschlossenen Teilen werden nicht zu einem Volumenkörper; regelmäßige Bereiche werden nicht zu größeren Flächen zusammengefasst; und siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
