---
title: Blech: Flansche und die Abwicklung
summary: Ein Blechbauteil aus einer Skizze starten (eine ebene Platte oder ein gebogenes Profil), Dicke, Biegeradius und K-Faktor einmal festlegen, Flansche an seinen Kanten mit Biegeentlastungen hochbiegen und es als DXF zum Schneiden abwickeln.
keywords: Abwicklung, abwickeln, Abwicklungslänge, Biegezugabe, Biegelinie, DXF für Laser, Laserschneiden, Blech, Basisflansch, Kantenflansch, Flansch, biegen, Biegeradius, K-Faktor, K Faktor, Dicke, Blechstärke, Entlastung, Biegeentlastung, Kanal, Winkel, Gehäuse, gebogenes Blech
from: 144bd0f6
---

:::note
**In dieser Version noch nicht umgesetzt.** Blech braucht einen exakten Geometriekern, den diese Version von PartCraft nicht hat: Sie erstellt jedes Bauteil mit dem Netzkern. [Was noch nicht umgesetzt ist](topic:not-built-yet) beschreibt, was Sie stattdessen tun können. Der Rest dieser Seite beschreibt die Funktion so, wie sie mit einem exakten Kern arbeitet.
:::

Blechbauteile beginnen mit einem **Basisflansch**. Er legt das Blech für das ganze Bauteil fest: seine **Dicke**, den **inneren Biegeradius** und den **K-Faktor**. Jeder **Kantenflansch** danach biegt sich mit genau diesen Werten, sodass das Bauteil ein einziges Blech bleibt, das sich abwickeln lässt. Beide benötigen den **exakten Kern** (siehe [Der Netzkern](topic:solid-kernels)).

## Mit einem Basisflansch beginnen

1. Zeichnen Sie eine Skizze. Verwenden Sie ein **geschlossenes Profil** für eine ebene Platte (ein Rechteck oder eine beliebige geschlossene Umrisslinie mit Löchern). Verwenden Sie **eine offene Kette aus Linien** für ein gebogenes Blech, etwa ein L, ein U oder ein Z, gezeichnet als Seitenansicht der Blechkante.
2. Wählen Sie die Skizze im Feature-Verlauf aus.
3. Öffnen Sie {{ui:Mehr}} in der Gruppe Features und wählen Sie {{ui:Basisflansch}}.

Im Bereich rechts gilt:

- **Dicke (mm)** ist die Blechstärke.
- **Biegeradius (mm)** ist der innere Radius jeder Biegung. 0 ergibt eine scharfe Innenecke; die Außenseite biegt sich trotzdem mit einem Radius von einer Dicke.
- **K-Faktor** gibt an, wo die neutrale Schicht im Blech liegt, von 0 (die Innenfläche) bis 0.5 (die Mitte). Er bestimmt, wie lang das Blech im flachen Zustand ist. 0.44 ist der Standardwert; Ihre Werkstatt oder Ihr Materiallieferant kann Ihnen einen eigenen Wert nennen.
- **Tiefe (mm)** ist, wie weit ein gebogenes Profil aus der Skizzenebene herausläuft. Eine Platte ignoriert sie.
- **Dicke außerhalb der Biegungen**: Ein offenes Profil ist eine Fläche des Blechs. Standardmäßig liegt die Dicke auf der Innenseite der ersten Biegung, sodass die gezeichneten Linien die Außenseite des Kanals sind. Setzen Sie den Haken, um die Linien stattdessen auf die Innenseite zu legen. Das Ergebnis ist dasselbe, egal von welchem Ende Sie gezeichnet haben.

Jede Ecke einer offenen Kette wird zu einer Biegung. Eine Linie, die für ihre Biegungen zu kurz ist, meldet das und nennt die benötigte Länge.

## Einen Kantenflansch biegen

1. Klicken Sie auf eine gerade Kante der Ober- oder Unterseite des Blechs (die langen Kanten, nicht die dünnen).
2. Wählen Sie {{ui:Mehr}} › {{ui:Kantenflansch}}. Ist keine Kante gewählt, wartet PartCraft darauf, dass Sie eine anklicken; Esc bricht ab.

Der Flansch biegt sich von der Fläche dieser Kante um den inneren Blechradius nach oben und läuft dann gerade weiter. Im Bereich:

- **Winkel (°)** ist, wie stark er sich biegt, von 1 bis 180. 90 ist ein rechtwinkliger Flansch.
- **Länge (mm)** ist der gerade Schenkel nach der Biegung.
- **Andersherum biegen** biegt ihn von der anderen Fläche (nach unten statt nach oben).
- **Versatz am Anfang** und **Versatz am Ende** kürzen den Flansch von jedem Ende der Kante.
- **Biegeentlastung**: Ist ein Ende versetzt, wird neben ihm ein Schlitz in das Blech geschnitten, damit die Biegung das Metall dort nicht reißt. **Entlastungsbreite** legt die Breite des Schlitzes fest; seine Tiefe ist der Biegeradius plus die Dicke. Wählen Sie **Keine**, um die Ecke ungeschnitten zu lassen.

Um die Kante später zu ändern, drücken Sie im Bereich {{ui:Wählen}} und klicken Sie auf eine andere.

:::tip
Verwenden Sie Parameter für Dicke und Radius (siehe [Parameter und Gleichungen](topic:parameters)), damit eine Änderung der Blechstärke alle Flansche auf einmal aktualisiert.
:::

## Abwickeln

Beide Bereiche enden mit **Abwicklung**. Drücken Sie {{ui:Abwickeln}}:

- Eine Vorschau zeigt das Blech entfaltet, wobei die Mittellinie jeder Biegung gestrichelt ist.
- **Größe** und **Fläche** sind die des flachen Zuschnitts.
- Jede Biegung wird mit ihrer Richtung aufgeführt (**oben** oder **unten**, von der Skizzenseite des Basisflansches aus gesehen), mit Winkel und innerem Radius.

Jede Biegung nimmt die Länge der neutralen Schicht des Blechs durch sie hindurch an, die **Biegezugabe**: Winkel (in Radiant) × (innerer Radius + K-Faktor × Dicke). Eine 90°-Biegung eines 2 mm dicken Blechs mit 2 mm Radius und K-Faktor 0.44 fügt also 4.52 mm flaches Blech hinzu.

Bei einer ebenen Platte erscheinen Löcher, Ausschnitte und Biegeentlastungen in der Abwicklung dort, wo sie wirklich liegen, auch Löcher durch einen Flansch.

Um viele Teile zu schneiden, drücken Sie unter der Abwicklung {{ui:Auf Tafeln verschachteln …}}: siehe [Flache Teile auf Tafeln verschachteln](topic:nest-flat-parts). Ein gebogener Basisflansch legt sich als ein Rechteck an: seine abgewickelte Länge × seine Tiefe, mit einer Biegelinie pro Ecke.

{{ui:DXF speichern}} speichert die Abwicklung für einen Laser, eine Stanze oder einen Wasserstrahl, in Millimetern:

- den Umriss auf dem Layer **OUTLINE** als Linien, Bögen und Kreise;
- die Biegelinien auf dem Layer **BEND**, gestrichelt;
- eine Notiz zu jeder Biegung auf dem Layer **BEND_NOTES**, etwa „UP 90° R2“.

Ändern Sie etwas, und die Abwicklung verschwindet; drücken Sie {{ui:Abwickeln}} erneut für die neue.

:::note
Prüfen Sie den K-Faktor mit Ihrer Werkstatt, bevor Sie schneiden: Die Länge der Abwicklung hängt davon ab, und er variiert mit Material, Dicke und Werkzeug.
:::

## Meldungen

- **Blech braucht vorher einen Basisflansch**: Ein Kantenflansch wurde vor jedem Basisflansch hinzugefügt. Verschieben Sie ihn unter einen Basisflansch oder fügen Sie zuerst einen Basisflansch hinzu.
- **Ein Kantenflansch braucht eine gerade Kante**: Flansche biegen sich nur entlang von Linien; gekrümmte Kanten können noch keinen aufnehmen.
- **Diese Kante liegt nicht auf einer Fläche der Blechdicke**: Die Kante gehört zu einer Fläche, die nicht die Ober- oder Unterseite des Blechs ist (zum Beispiel die Wand eines Lochs). Wählen Sie eine Kante der Ober- oder Unterseite.
- **Die Versätze lassen nichts von der Kante übrig**: Die beiden Versätze ergeben zusammen die ganze Kante oder mehr.
- **Kantenflansche an einem gebogenen Basisflansch können noch nicht abgewickelt werden**: Beginnen Sie mit einer ebenen Platte und biegen Sie alles mit Kantenflanschen hoch, die sich abwickeln lassen.
- **Ausschnitte und Löcher, die nach einem gebogenen Basisflansch erstellt werden, erscheinen in seiner Abwicklung noch nicht**: Die Abwicklung eines gebogenen Profils ist nur sein abgewickeltes Rechteck.
