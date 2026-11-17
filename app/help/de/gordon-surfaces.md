---
title: Flächen über ein Kurvennetz (Gordon-Fläche)
summary: Eine glatte Fläche durch ein Raster aus Profil- und Führungskurven, die in Skizzen gezeichnet oder aus Modellkanten übernommen werden. Zu einem Volumenkörper schließen, wenn die Profile geschlossen sind. Was exakt ist, was angepasst wird und welche Meldungen erscheinen, wenn ein Netz nicht passt.
keywords: Tangente, G1, Tangentenstetigkeit, Spiegelebene, Gordon-Fläche, Kurvennetz, Randfläche, Netzfläche, Profile, Führungen, Führungskurven, Loft mit Führungen, Führungsschienen, Haut, transfinit, Coons, B-Spline-Fläche, Freiformfläche
from: ada3cb8b
---

:::note
**Noch nicht umgesetzt in dieser Version.** Die Gordon-Fläche braucht einen exakten Geometrie-Kernel, den diese Version von PartCraft nicht hat: Sie baut jedes Bauteil mit dem Mesh-Kernel. [Was noch nicht umgesetzt ist](topic:not-built-yet) sagt, was stattdessen zu tun ist. Der Rest dieser Seite beschreibt sie so, wie sie mit einem exakten Kernel arbeitet.
:::

Eine **Gordon-Fläche** ist eine Fläche, die durch jede Kurve eines Netzes verläuft: eine Reihe von **Profilen** in einer Richtung und eine Reihe von **Führungen** in der anderen, die sich wie die Fäden eines Netzes kreuzen. So formen Sie einen Rumpf, einen Kotflügel oder einen Griff aus wenigen Schnittkurven, die Sie direkt steuern. Sie braucht den **exakten Kernel** (siehe [Der Mesh-Kernel](topic:solid-kernels)).

## Das Netz zeichnen

1. Zeichnen Sie die **Profile**: zwei oder mehr Kurven, die nebeneinander verlaufen, zum Beispiel Schnitte auf parallelen Ebenen. Linien, Bögen, Kreise und Splines funktionieren alle, und eine Kette von Kurven, die Ende an Ende verbunden sind, zählt als eine Kurve.
2. Zeichnen Sie die **Führungen**: zwei oder mehr Kurven, die quer über die Profile laufen. Jede Führung muss jedes Profil einmal kreuzen, und jedes Profil jede Führung einmal.
3. Lassen Sie die Kurven wirklich zusammentreffen. Zeichnen Sie die Skizze einer Führung so, dass ihre Kurve durch die Punkte der Profile läuft (auf projizierte Punkte einrasten oder die Koordinaten eingeben). Das Netz akzeptiert Lücken bis zur **Toleranz** (zu Beginn 0.01 mm).

Eine Skizze kann mehrere Kurven enthalten: Jede getrennte Kette darin ist eine eigene Kurve. Sie können also zum Beispiel alle Führungen in einer Skizze auf der Draufsichtebene zeichnen.

## Die Fläche erzeugen

1. Wählen Sie {{ui:More}} in der Gruppe Merkmale, dann {{ui:Gordon surface}}.
2. PartCraft übernimmt die Skizzen, die noch niemand verwendet: Die in Ebenen parallel zur ersten werden **Profile**, die anderen **Führungen**. Prüfen Sie die Liste rechts und setzen Sie jede Skizze auf **Profile**, **Führungen** oder **Nicht verwendet**.
3. Um Kanten des Bauteils zu verwenden, klicken Sie **Kanten als Profile wählen** (oder **als Führungen**), klicken die Kanten in der Ansicht an und drücken dann {{key:Esc}}.

Das Ergebnis ist ein **Flächenkörper**. {{ui:Thicken}} macht daraus einen Volumenkörper, {{ui:Stitch}} näht ihn an andere Flächen, und {{ui:Trim surface}} schneidet ihn.

### Zu einem Volumenkörper schließen

Wenn die Profile geschlossene Kurven sind (Kreise, geschlossene Splines, geschlossene Ketten) und das erste und das letzte Profil jeweils flach in einer Ebene liegen, setzen Sie den Haken bei **Zu Volumenkörper schließen**. Die Enden werden mit ebenen Flächen verschlossen, und die geschlossene Form verbindet sich, schneidet, schneidet sich mit anderen oder wird ein neuer Körper wie jedes andere Merkmal. So erstellen Sie einen Loft, der Führungskurven folgt. Dasselbe funktioniert mit geschlossenen Führungen.

## Tangential zu einer Ebene entlang einer Kante

Eine Gordon-Fläche verläuft durch ihre Kurven, passt aber allein nicht zur Steigung dessen, worauf sie trifft. Damit sie eine Kante **tangential** zu einer Ebene verlässt (G1), etwa einer Spiegelebene, sodass die gespiegelte Kopie ohne Knick anschließt, oder einer ebenen Fläche, aus der sie wächst:

1. Wählen Sie das Gordon-Merkmal. Wählen Sie unter **Tangential zu** eine Ebene in {{ui:Ebene hinzufügen …}} (Frontebene, Draufsicht, Seitenebene oder eine Bezugsebene), oder klicken Sie eine ebene Fläche in der Ansicht an und drücken Sie {{ui:Gewählte ebene Fläche hinzufügen}}.
2. PartCraft findet die Randkurve des Netzes, die in dieser Ebene liegt, und die Fläche verlässt sie tangential zur Ebene.

Wenn eine Ebene zwei Randkurven hält (ein Boden unter beiden Enden), fügen Sie sie zweimal hinzu: Jede Kopie nimmt die nächste. Bis zu vier Ebenen, eine pro Kante.

Der Bericht sagt, entlang welcher Kurve jede Ebene tangential gemacht wurde, und den steilsten Winkel, den die Fläche vorher an dieser Ebene hatte. Führungen, die diese Kurve bereits tangential zur Ebene verlassen, werden genau befolgt. Führungen, die von ihr wegsteigen, werden in einem schmalen Band nahe der Kante gebogen; die Angabe „folgt jeder Kurve innerhalb“ im Bericht sagt, um wie viel. Zeichnen Sie die Führungen flach von der Kante weg für eine exakte Anpassung.

## Was exakt ist und was angepasst wird

Das Panel sagt, welches davon zutrifft und wie weit die Fläche von Ihren Kurven abweicht.

- **Exakt**: Wenn jede Kurve polynomial ist (Linien, Splines und Ketten davon) und die Führungen alle Profile bei denselben Parametern kreuzen, ist die Fläche exakt die Gordon-Fläche dieser Kurven. Ein Netz aus Isokurven, aus einer bikubischen Fläche geschnitten, ergibt wieder diese Fläche, und vier gerade Linien ergeben einen ebenen oder verdrehten (bilinearen) Flicken.
- **Angepasst**: Bögen, Kreise und Kanten des Bauteils sind nicht polynomial, und Kurven, die bei verschiedenen Parametern kreuzen, müssen neu zeitlich angeglichen werden, damit die Kreuzungen passen. Diese Kurven werden durch kubische B-Splines innerhalb eines zehnmillionstel der Netzgröße angepasst (etwa 0.00001 mm bei einem 100 mm Bauteil). Ein Zylinderflicken aus Bögen und Linien bleibt innerhalb 0.00001 mm des echten Zylinders.

Zwischen den Kurven ist die Fläche, was das Verfahren ergibt: die Profile über die Breite gemischt, plus die Führungen über die Breite gemischt, minus die Mischung ihrer Kreuzungspunkte. Sie ist überall glatt, außer dort, wo eine Kurve eine scharfe Ecke hat. Wo sich zwei Gordon-Flächen eine Randkurve teilen, treffen sie Kante an Kante (G0), nicht tangential.

## Wenn ein Netz nicht passt

| Meldung | Was zu tun ist |
|---|---|
| „… treffen sich nicht: sie liegen 0.4 mm auseinander“ | Lassen Sie dieses Profil und diese Führung sich kreuzen oder erhöhen Sie die Toleranz |
| „… trifft … 2 Mal“ | Eine Führung darf jedes Profil nur einmal kreuzen: teilen Sie eine sich schlingende Kurve oder verwenden Sie weniger Profile |
| „… in anderer Reihenfolge“ oder „faltet sich über sich selbst“ | Zwei Führungen kreuzen sich (oder zwei Profile). Die Familien müssen nebeneinander verlaufen |
| „mindestens zwei Profile und zwei Führungen“ | Fügen Sie Kurven hinzu oder setzen Sie mehr Skizzen auf Profile oder Führungen |
| „offene und geschlossene Kurven gemischt“ | Machen Sie alle Profile offen oder alle geschlossen (ebenso für die Führungen) |
| „Ein Ende … ist nicht flach, daher kann es nicht verschlossen werden“ | Zeichnen Sie das erste und das letzte geschlossene Profil jeweils in eine Ebene, oder lassen Sie Zu Volumenkörper schließen aus |

## Grenzen

- Eine B-Spline-Fläche pro Netz: keine G1- oder G2-Tangentialität zu benachbarten Flächen.
- Die Naht eines geschlossenen Netzes an der ersten Führung ist Kante an Kante verbunden, aber nicht tangential.
- Das Loft-Merkmal selbst hat keine Führungsschienen; verwenden Sie stattdessen eine Gordon-Fläche, die zu einem Volumenkörper geschlossen wird.
- Sehr gewundene Kurven, oder Kreuzungen, die entlang einer Kurve im Vergleich zu einer anderen sehr ungleichmäßig verteilt sind, können zu viele Punkte für die Anpassung brauchen; das Merkmal meldet das dann.
