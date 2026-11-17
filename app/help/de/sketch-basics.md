---
title: Ihre erste Skizze zeichnen
summary: Eine Skizze auf einer Ebene oder einer ebenen Fläche öffnen, Linien, Rechtecke, Kreise, Bögen, Punkte und Mittellinien zeichnen, eine Ecke verrunden, auswählen, ziehen und löschen.
keywords: Skizze, zeichnen, Linie, Rechteck, Kreis, Bogen, Punkt, Mittellinie, Konstruktion, Verrundung, Skizzenverrundung, Ecke runden, Fang, auswählen, Fenster, ziehen, Profil
from: 28be7436
---

Jeder Volumenkörper beginnt als Skizze: eine ebene Zeichnung auf einer Ebene. Diese Anleitung behandelt die Zeichenwerkzeuge. Wie Sie die Skizze mit Abhängigkeiten und Bemaßungen festlegen, steht unter [Skizze vollständig definieren](topic:relations-dimensions).

## Eine Skizze beginnen

Sie können auf einer Grundebene oder auf jeder ebenen Fläche des Bauteils skizzieren.

1. Wählen Sie, wo skizziert werden soll:
   - eine Grundebene: klicken Sie im Verlauf auf **Vorderebene**, **Draufsichtebene** oder **Rechte Ebene**, oder klicken Sie die Ebene in der Ansicht an;
   - eine ebene Fläche: klicken Sie die Fläche in der Ansicht an. Die ganze Fläche wird hervorgehoben.
2. Wählen Sie {{ui:Skizze}} in der Symbolleiste oder drücken Sie {{key:S}}. (Bei gewählter Fläche können Sie auch {{ui:Auf dieser Fläche skizzieren}} im rechten Bereich wählen; bei einer Ebene {{ui:Darauf skizzieren}}.)

Die Ansicht dreht sich senkrecht zur Ebene, die Skizzenwerkzeuge erscheinen in der Symbolleiste, und das Werkzeug Linie ist bereit. Wenn Sie {{ui:Skizze}} ohne Auswahl drücken, werden die Grundebenen angezeigt, und die Statusleiste sagt: „Auf eine Ebene oder ebene Fläche klicken, um darauf zu skizzieren. Esc beendet.“

:::note
Eine gekrümmte Fläche kann keine Skizze tragen: „Diese Fläche ist gekrümmt. Wählen Sie eine ebene Fläche oder eine Ebene zum Skizzieren.“
:::

**Eine Skizze auf einer Fläche folgt dieser Fläche.** Wenn die Fläche durch eine Skizzenkante oder das Ende einer Extrusion entstanden ist, wandert die neue Skizze mit, wenn sich das Feature ändert (eine tiefere Tasche nimmt die Skizze auf ihrem Boden mit). Steht im Bereich „An der gewählten Stelle fixiert“, bleibt die Skizze dort, wo die Fläche jetzt liegt.

## Die Zeichenwerkzeuge

Jedes Werkzeug hat eine Schaltfläche in der Symbolleiste und eine Taste. Wählen Sie dieselbe Schaltfläche erneut, drücken Sie {{key:S}} oder drücken Sie {{key:Esc}}, um zur Auswahl zurückzukehren.

| Werkzeug | Taste | So zeichnen Sie |
|---|---|---|
| {{ui:Linie}} | {{key:L}} | Klicken Sie den Anfang an, dann jeden nächsten Punkt. Linien reihen sich Ende an Ende. Die Kette beenden Sie mit {{key:Esc}}, {{key:Enter}}, einem Rechtsklick oder einem Doppelklick. Ein Klick auf einen vorhandenen Punkt beendet sie ebenfalls |
| {{ui:Rechteck}} | {{key:R}} | Klicken Sie eine Ecke an, dann die gegenüberliegende Ecke. Sie erhalten vier Linien, an den Ecken verbunden, zwei waagerechte und zwei senkrechte |
| {{ui:Kreis}} | {{key:C}} | Klicken Sie den Mittelpunkt an, dann einen Punkt auf dem Kreis |
| {{ui:Bogen}} | {{key:A}} | Klicken Sie den Mittelpunkt an, dann den Anfang, dann das Ende. Der Bogen verläuft in der Richtung, in der Sie den Zeiger um den Mittelpunkt bewegen |
| {{ui:Punkt}} | {{key:P}} | Klicken. Ein einzelner Punkt markiert einen Bohrungsmittelpunkt für {{ui:Bohrung}} |
| {{ui:Mittellinie}} | {{key:N}} | Wie eine Linie, jeweils ein Segment. Sie wird gestrichelt gezeichnet; sie ist Konstruktionsgeometrie und dient als Drehachse oder Bezug |
| {{ui:Verrundung}} | {{key:F}} | Klicken Sie eine Ecke an, an der sich zwei Linien treffen, geben Sie den Radius ein und drücken Sie {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klicken Sie die Punkte an, die die Kurve durchläuft; {{key:Enter}} beendet, ein Klick auf den ersten Punkt schließt sie. Siehe [Splines, Stutzen, Versetzen und weitere Skizzenwerkzeuge](topic:sketch-tools) |
| {{ui:Stutzen}} | {{key:T}} | Klicken Sie das Stück einer Kurve an, das entfernt werden soll, bis zu den nächsten Kreuzungen |
| {{ui:Bemaßung}} | {{key:D}} | Siehe [Skizze vollständig definieren](topic:relations-dimensions) |

Während Sie zeichnen, zeigt ein kleines Feld neben dem Zeiger die Länge, die Größe, den Durchmesser oder den Radius.

### Maß beim Zeichnen eingeben

Nach dem ersten Klick bei einer Linie, einem Rechteck, einem Kreis oder einem Bogen können Sie das Maß eingeben, statt es anzuklicken. Eine eingegebene Zahl öffnet das Feld neben dem Zeiger mit dieser Zahl:

| Werkzeug | Felder ({{key:Tab}} wechselt zum nächsten) | Was bei {{key:Enter}} geschieht |
|---|---|---|
| {{ui:Linie}}, {{ui:Mittellinie}} | Länge, dann Winkel (°) zur X-Achse der Skizze | Die Linie wird in dieser Länge gezeichnet, zum Zeiger hin oder im eingegebenen Winkel; die Kette geht vom Ende aus weiter |
| {{ui:Rechteck}} | Breite, dann Höhe | Das Rechteck wird vom ersten Eckpunkt zum Zeiger hin gezeichnet; ein Maß, das Sie nicht eingegeben haben, ergibt sich aus dem Zeiger |
| {{ui:Kreis}} | Durchmesser | Der Kreis wird mit diesem Durchmesser gezeichnet |
| {{ui:Bogen}} | Radius nach dem Mittelpunkt, dann Bogenwinkel (°) nach dem Anfang | Der Anfang liegt in diesem Abstand vom Mittelpunkt; dann verläuft der Bogen so weit herum, wie Sie den Zeiger bewegt haben |

Jedes eingegebene Maß wird im selben Schritt zu einer **steuernden Bemaßung**, sodass die Skizze bemaßt entsteht: {{key:Mod+Z}} nimmt Form und Bemaßungen zusammen weg. Wenn Sie statt {{key:Enter}} klicken, bleibt das Eingegebene erhalten, der Rest kommt aus dem Klick. {{key:Esc}} schließt das Feld und geht zurück zum Zeiger.

Schalten Sie dies in {{ui:Einstellungen}} › {{ui:PartCraft}} › **Beim Zeichnen bemaßen** aus, wenn Sie nur mit Klicks zeichnen möchten. Siehe [PartCraft-Einstellungen](topic:settings).

{{ui:Mehr}}, am Ende der Skizzenwerkzeuge, enthält den Spline mit Kontrollpunkten, {{ui:Dehnen}}, {{ui:Versetzen}}, {{ui:Spiegeln}}, {{ui:Polygon}}, {{ui:Langloch}}, die Skizzenmuster und {{ui:Kante projizieren}}: siehe [Splines, Stutzen, Versetzen und weitere Skizzenwerkzeuge](topic:sketch-tools).

### Fang

Der Fang fügt Abhängigkeiten für Sie hinzu, damit die Skizze beim Verschieben zusammenhängt:

- **Auf einem Endpunkt oder dem Ursprung** erscheint ein kleines Quadrat. Der neue Punkt wird mit ihm deckungsgleich gemacht.
- **Auf einer Linie, einem Kreis oder einem Bogen** erscheint ein kleines Kreuz. Der neue Punkt wird auf diese Kurve gesetzt.
- Eine Linie, die bis 3 Grad waagerecht oder senkrecht ist, rastet darin ein und erhält eine waagerechte oder senkrechte Abhängigkeit. Die Beschriftung zeigt „H“ oder „V“.

Um den Fang zu vermeiden, zoomen Sie hinein, damit Sie weiter vom Punkt oder der Kurve entfernt klicken.

## Eine Ecke verrunden

1. Drücken Sie {{key:F}} oder wählen Sie {{ui:Verrundung}}.
2. Klicken Sie den Eckpunkt an, an dem sich zwei Linien treffen.
3. Ein Feld öffnet sich mit einem vorgeschlagenen Radius. Geben Sie den Radius ein und drücken Sie {{key:Enter}}.

Beide Linien werden gestutzt und durch einen tangentialen Bogen mit einer Radiusbemaßung verbunden. Mögliche Meldungen: „Eine Skizzenverrundung braucht eine Ecke, an der genau zwei Linien zusammentreffen.“ und „Dieser Radius ist für diese Linien zu groß.“

:::tip
Eine Skizzenverrundung rundet eine Ecke des Profils, sodass die Extrusion gerundete senkrechte Kanten erhält. Um Kanten des Volumenkörpers selbst zu runden (zum Beispiel die oberen Kanten einer Platte), verwenden Sie stattdessen das Feature {{ui:Verrundung}} am Bauteil: siehe [Runden, Fasen und Aushöhlen](topic:fillet-chamfer-shell). In einer Skizze ist Verrundung in der Symbolleiste das Skizzenwerkzeug; am Bauteil ist sie das Feature.
:::

## Konstruktionsgeometrie

Konstruktionslinien, -kreise und -bögen sind gestrichelt und grau. Sie führen die Skizze, sind aber nicht Teil des Profils, das extrudiert oder gedreht wird.

1. Wählen Sie die Linien, Kreise oder Bögen aus.
2. Drücken Sie {{key:Q}} oder wählen Sie {{ui:Konstruktion}}. Drücken Sie es erneut, um sie zurückzuschalten.

## Auswählen, ziehen und löschen

Drücken Sie {{key:S}} (oder {{key:Esc}}, bis kein Werkzeug aktiv ist) für Auswahl.

- Klicken Sie einen Punkt, eine Linie, einen Kreis, einen Bogen, ein Abhängigkeitssymbol oder eine Bemaßung an, um sie auszuwählen. {{key:Shift}}+Klick fügt zur Auswahl hinzu oder entfernt daraus. Unter Windows und Linux macht {{key:Ctrl}}+Klick dasselbe; auf dem Mac ⌘+Klick.
- Ziehen Sie auf leerer Fläche, um ein Fenster aufzuziehen: alles, was vollständig darin liegt, wird ausgewählt.
- Ziehen Sie einen Punkt oder eine Linie, um sie zu verschieben. Der Löser behält jede Abhängigkeit und Bemaßung bei, sodass nur freie Geometrie sich bewegt. Ziehen Sie am Rand eines Kreises, um seinen Radius zu ändern.
- Ziehen Sie die Zahl einer Bemaßung, um die Beschriftung zu verschieben.
- Drücken Sie {{key:Delete}} oder {{key:Backspace}} oder wählen Sie {{ui:Löschen}} im rechten Bereich, um die Auswahl zu löschen. Beim Löschen von Geometrie werden die Abhängigkeiten daran ebenfalls gelöscht.

## Skizze zoomen und verschieben

- Drehen Sie das Rad, um am Zeiger zu zoomen.
- Ziehen Sie mit der mittleren oder rechten Taste, um zu verschieben.
- {{ui:Einpassen}} in der Symbolleiste oder im rechten Bereich passt die Skizze in die Ansicht ein. In einer Skizze ist die Taste {{key:F}} das Werkzeug Verrundung, nicht Einpassen.

## Skizze schließen

Wählen Sie {{ui:Beenden}} in der Symbolleiste oder {{ui:Skizze beenden}} im rechten Bereich, oder drücken Sie {{key:Esc}}, bis die Skizze schließt. Jeder Druck auf {{key:Esc}} bricht zuerst den laufenden Vorgang ab, dann geht er zur Auswahl zurück, dann hebt er die Auswahl auf, und der nächste schließt die Skizze.

Die Skizze bleibt ausgewählt, sodass die nächste {{ui:Extrusion}} oder {{ui:Drehung}} sie verwendet.

## Was ein gutes Profil ausmacht

{{ui:Extrusion}} und {{ui:Drehung}} verwenden **jede geschlossene Schleife** aus den Linien, Kreisen, Bögen und Splines der Skizze (ohne Konstruktionslinien). Schleifen innerhalb von Schleifen werden zu Löchern.

- Jedes Ende muss genau auf ein anderes Ende treffen. „Das Profil ist offen: Ein Ende bei (12.5, 40) ist mit nichts verbunden.“ nennt die Stelle.
- An einem Punkt dürfen nicht drei Enden zusammentreffen: „Das Profil verzweigt sich bei (0, 20): Dort treffen mehr als zwei Enden zusammen.“
- Punkte und Konstruktionsgeometrie werden vom Profil ignoriert.

Weiter: [Skizze mit Abhängigkeiten und Bemaßungen vollständig definieren](topic:relations-dimensions).

## Eine Skizze aus einem Foto

**Features › Mehr › Skizze aus einem Foto…** (oder die Gruppe Skizze im Menüband des Feature-Baums) zeichnet ein Bild eines flachen Bauteils auf einfachem Untergrund nach – seine Umrisse und Löcher – oder eine Strichzeichnung in eine Skizze aus Linien, Bögen und Kreisen. Geben Sie eine Länge an (die Breite, die Höhe oder die längste Seite), damit die Skizze die richtige Größe hat, prüfen Sie in der Vorschau, was gefunden wurde, und wählen Sie **Skizze erstellen**; sie kann auch extrudiert werden, im selben Rückgängig-Schritt. Die Nachzeichnung erfolgt auf diesem Computer. Eckenradien liegen innerhalb von etwa 5 %, Details von ein oder zwei Pixeln gehen verloren, und ein schräg oder mit Schatten aufgenommenes Foto wird nicht gerade gerichtet: Fotografieren Sie das Bauteil rechtwinklig mit gleichmäßigem Licht.
