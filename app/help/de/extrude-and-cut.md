---
title: Einen Aufsatz extrudieren und hindurch ausschneiden
summary: Machen Sie mit Extrusion aus einer Skizze einen Volumenkörper, und legen Sie Abstand, Mittelebene, Bis-Ende, zwei Richtungen, eine Verjüngung oder eine Kontur der Skizze fest. Skizzieren Sie dann auf einer Fläche und schneiden Sie eine Tasche oder einen durchgehenden Schlitz aus.
keywords: extrudieren, aufsatz, extrudierter aufsatz, ausschneiden, extrudierter ausschnitt, tasche, durch alle, abstand, mittelebene, umkehren, tiefe, ausschnitt-extrusion, aufsatz-extrusion, pad, bis fläche, bis nächste fläche, bis eckpunkt, versatz von fläche, richtung 2, zwei richtungen, schräge beim extrudieren, verjüngung, kontur, bereich, gewählte konturen
from: 3b13ff10
---

{{ui:Extrusion}} schiebt das geschlossene Profil einer Skizze gerade aus ihrer Ebene heraus und erzeugt Material. {{ui:Ausschneiden}} tut dasselbe, entfernt aber Material. Beide sind darunter dasselbe Feature; Sie können später das eine in das andere umschalten.

## Einen Aufsatz extrudieren

1. Zeichnen Sie ein geschlossenes Profil und schließen Sie die Skizze (siehe [Ihre erste Skizze zeichnen](topic:sketch-basics)). Sie bleibt ausgewählt.
2. Wählen Sie {{ui:Extrusion}}.

Ein Volumenkörper mit 10 mm erscheint, „Extrude1“ wird in den Verlauf aufgenommen, mit ihrer Skizze eingerückt darunter, und die Statusleiste sagt „Extrude1 hinzugefügt. Ändern Sie die Zahlen rechts.“

**Welche Skizze verwendet wird:** die Skizze, die Sie gerade geschlossen haben, oder die im Verlauf ausgewählte Skizze. Ohne Auswahl nimmt PartCraft die neueste Skizze, die noch kein Feature verwendet. Gibt es keine, lautet die Meldung: „Erstellen Sie zuerst eine Skizze: Ebene wählen, Skizze, geschlossenes Profil zeichnen, Beenden.“

### Tiefe und Richtung festlegen

Im rechten Bereich:

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Operation** | Aufsatz (Material hinzufügen), Ausschneiden (Material entfernen), Schnittmenge (Überlappung behalten), Neuer Körper (in dieser Version noch nicht umgesetzt: er braucht einen exakten Kernel) | Aufsatz |
| **Ende** | Abstand (eine Tiefe), Mittelebene (in beide Richtungen), Durch alle, Bis Fläche oder Ebene, Bis nächste Fläche, Bis Eckpunkt, Versatz von Fläche | Abstand |
| **Tiefe (mm)** | Jede Größe über null (angezeigt für Abstand und Mittelebene) | 10 |
| **Richtung umkehren** | Wächst auf die andere Seite der Skizzenebene (bei Mittelebene nicht angezeigt) | Aus |

Geben Sie eine Zahl ein und drücken Sie {{key:Enter}} oder {{key:Tab}}: das Bauteil wird sofort neu aufgebaut. **Mittelebene** verteilt die halbe Tiefe auf jede Seite der Skizze.

### Bis zu einer Fläche, der nächsten Fläche oder einem Eckpunkt

Noch nicht umgesetzt in dieser Version: Jedes „Bis“-Ende braucht einen exakten Kernel, und das Feature meldet: „Extrusion bis zu einer Fläche, der nächsten Fläche oder einem Eckpunkt: noch nicht umgesetzt (sie braucht einen exakten Kernel).“ Verwenden Sie stattdessen eine Tiefe im Abstand, die Sie messen. Mit einem exakten Kernel funktionieren die Enden so:

- **Bis Fläche oder Ebene**: **Bis** nimmt eine ebene Fläche (wählen, dann darauf klicken) oder eine Bezugsebene. Eine Fläche parallel zur Skizze ergibt eine exakte Tiefe; eine schräge Fläche schneidet das Ende an der Schräge. Liegt die Fläche hinter der Skizze: „… Versuchen Sie Richtung umkehren.“
- **Bis nächste Fläche**: stoppt an der ersten ebenen Fläche des Körpers, auf die die Extrusion trifft (gekrümmte Flächen werden hier nicht unterstützt; das wird gemeldet).
- **Bis Eckpunkt**: stoppt auf gleicher Höhe wie ein Eckpunkt (klicken Sie nahe am Ende einer Kante) oder ein Punktelement.
- **Versatz von Fläche**: wie Bis Fläche, wobei es **Versatz (mm)** davor stoppt (senkrecht zur Fläche gemessen).

### Zwei Richtungen, Verjüngung, eine Kontur

- **Zweite Richtung** (Abstand): extrudiert zusätzlich **Zweite Tiefe (mm)** auf die andere Seite der Skizze.
- **Verjüngung (°)**: die Seiten neigen sich mit dem Verlauf (negativ: nach außen), wie eine Formschräge; nur eine Richtung. In dieser Version noch nicht umgesetzt (sie braucht einen exakten Kernel): lassen Sie den Wert bei 0.
- **Bereiche**: **Bereiche wählen**, dann in die Konturen klicken, die extrudiert werden sollen; nur diese Bereiche werden verwendet (ein Kreis innerhalb eines Quadrats: in den Kreis klicken für einen Zylinder, zwischen beide für eine Platte mit Bohrung). **Alle** setzt jede Kontur wieder ein.

Darunter listet **Skizzenbemaßungen** die bemaßenden Maße der Skizze, sodass Sie die Größen des Profils ändern können, ohne die Skizze zu öffnen.

:::note
**Durch alle ist nur für Ausschnitte gedacht.** Ein Aufsatz, der auf Durch alle gesetzt ist, schlägt fehl mit „Durch alle ist für Ausschnitte. Verwenden Sie für einen Aufsatz eine Tiefe.“ Wechseln Sie ein Feature von Ausschneiden zurück zu Aufsatz, wird Durch alle für Sie in Abstand geändert.
:::

## Eine Tasche ausschneiden

1. Klicken Sie auf die ebene Fläche, in die Sie schneiden möchten. Sie wird hervorgehoben, und der rechte Bereich zeigt **Fläche**.
2. Wählen Sie {{ui:Skizze auf dieser Fläche}} (oder {{ui:Skizze}} in der Symbolleiste).
3. Zeichnen Sie den Umriss der Tasche, zum Beispiel ein Rechteck, und bemaßen Sie ihn.
4. Wählen Sie {{ui:Beenden}}.
5. Wählen Sie {{ui:Ausschneiden}}. Es beginnt mit **Durch alle**: Es entfernt Material durch das ganze Bauteil.
6. Für eine Tasche setzen Sie **Ende** auf **Abstand (eine Tiefe)** und geben die **Tiefe (mm)** ein.

Ein Ausschnitt geht ins Material, weg von der Fläche, auf der Sie skizziert haben. Meldet die Statusleiste „Auf dieser Seite der Skizze ist nichts zum Ausschneiden. Versuchen Sie die andere Richtung.“, setzen Sie das Häkchen bei **Richtung umkehren**.

Eine Skizze auf dem Boden der Tasche folgt dem Boden: Ändern Sie die Taschentiefe, dann bewegt sich die Skizze mit.

## Eine ganze Fläche ziehen oder drücken

Um eine Fläche weiter herauszuheben oder einzusenken, müssen Sie ihren Umriss nicht zeichnen. Klicken Sie auf die ebene Fläche und wählen Sie dann im rechten Bereich:

- {{ui:Davon extrudieren}} zieht die Fläche heraus: PartCraft fügt eine Skizze auf der Fläche mit ihrem Umriss hinzu (Bohrungen in der Fläche bleiben Bohrungen) und eine Extrusion von 10 mm.
- {{ui:Hineinschneiden}} drückt die Fläche hinein: dieselbe Skizze und ein Ausschnitt bis zur Hälfte in das Bauteil.

Beides ist ein Schritt: {{key:Mod+Z}} nimmt die Skizze und das Feature zusammen weg. Das neue Feature ist ausgewählt, daher geben Sie sofort eine Zahl ein und drücken {{key:Enter}} für seine Tiefe. Der Umriss wird als feste Linien und Bögen kopiert: Er folgt späteren Änderungen der Fläche nicht. Kann ein Teil des Umrisses nicht kopiert werden (eine freie Kurve), öffnet sich stattdessen die Skizze mit dem, was kopiert werden konnte; vervollständigen Sie sie, wählen Sie dann {{ui:Beenden}} und {{ui:Extrusion}} oder {{ui:Ausschneiden}}.

## Profile mit Inseln

Eine Skizze kann mehrere geschlossene Konturen enthalten. Nebeneinanderliegende Konturen werden zu getrennten Aufsätzen (oder Ausschnitten); eine Kontur innerhalb einer anderen wird zu einer Bohrung durch den Aufsatz. Zum Beispiel wird ein Rechteck mit zwei Kreisen darin als Platte mit zwei Bohrungen extrudiert.

Um nur einige Konturen zu verwenden, wählen Sie sie mit **Bereichen** (siehe oben); ein anderes Feature kann die übrigen Konturen derselben Skizze verwenden.

## Später bearbeiten

- Klicken Sie im Verlauf auf „Extrude1“, um ihre Einstellungen zurückzuholen.
- Doppelklicken Sie auf ihre Skizze (eingerückt darunter), um die Skizze zu öffnen; schließen Sie sie, um neu aufzubauen.
- Siehe [Ein Bauteil über seinen Verlauf ändern](topic:edit-history) für Unterdrücken, Zurückrollen, Umordnen und Löschen.

## Häufige Meldungen

| Meldung | Was zu tun ist |
|---|---|
| „Die Skizze hat kein geschlossenes Profil zum Extrudieren.“ | Die Skizze hat keine geschlossene Kontur aus durchgezogenen Linien. Schließen Sie die Lücken, oder schalten Sie Konstruktionslinien mit {{key:Q}} zurück. |
| „Das Profil ist offen: ein Ende bei (x, y) ist mit nichts verbunden.“ | Öffnen Sie die Skizze und verbinden Sie dieses Ende mit der nächsten Linie. |
| „Es gibt noch nichts zum Ausschneiden.“ | Ein Ausschnitt braucht einen Volumenkörper zum Ausschneiden. Erstellen Sie zuerst einen Aufsatz. |
| „Danach ist vom Bauteil nichts mehr übrig.“ | Der Ausschnitt hat alles entfernt. Prüfen Sie seine Größe und Richtung. |

Mehr unter [Fehlerbehebung](topic:troubleshooting).
