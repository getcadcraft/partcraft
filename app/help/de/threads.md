---
title: Gewinde an Wellen und Bohrungen, gezeichnet oder modelliert
summary: Setzen Sie ein metrisches ISO- oder Trapezgewinde auf jede runde Fläche, eine Welle oder eine Bohrung. Lassen Sie es kosmetisch für Zeichnungen, oder modellieren Sie das echte schraubenförmige Gewinde für den 3D-Druck, mit einem Spiel, damit gedruckte Teile passen.
keywords: Gewinde, modelliertes Gewinde, schraubenförmig, Helix, Schraube, Bolzen, Mutter, Welle, Bohrung, Außengewinde, Innengewinde, kosmetisches Gewinde, metrisches Gewinde, Trapez, Acme, Leitspindel, Tr16x4, M10, 3D-Druck, drucken, Spiel, Passung, Linksgewinde, Gewindebohrung
from: 4f6401cc
---

{{ui:Gewinde}} setzt ein Gewinde auf runde Flächen: die Außenseite einer Welle (ein Außengewinde) oder die Innenseite einer Bohrung (ein Innengewinde). PartCraft erkennt an der Fläche, welches es ist.

Ein Gewinde ist zunächst **kosmetisch**: Die Fläche bleibt glatt, die Ansicht zeichnet das Gewinde als gestrichelte Kreise, und das Zeichnungsblatt vermerkt es, etwa „M10×1.5 - 6g, Gewinde 20 lang“. Haken Sie **Modelliert** an, um das echte schraubenförmige Gewinde in das Bauteil zu schneiden, für den 3D-Druck oder ein Modell, das richtig aussehen muss.

## Eine Welle oder Bohrung mit Gewinde versehen

1. Bauen Sie die Welle oder die Bohrung in der Größe des Gewindes: eine Welle Ø10 für eine M10-Schraube, oder eine Bohrung Ø8.5 (der Kernlochbohrer) für eine M10-Mutter.
2. Klicken Sie die runde Fläche an und wählen Sie dann {{ui:Mehr}} › {{ui:Gewinde}}. Ist keine runde Fläche gewählt, bittet PartCraft Sie, die Flächen anzuklicken, dann {{ui:Fertig}}.
3. Prüfen Sie im rechten Bereich die **Größe**. **An die Fläche anpassen** wählt die Größe selbst: bei einer Welle die Größe, deren Außendurchmesser der Durchmesser der Welle ist; bei einer Bohrung die Größe, deren Kerndurchmesser passt.

Das Gewinde beginnt am offenen Ende der Fläche, wo das Bauteil nicht weiter entlang der Achse verläuft: am freien Ende einer Welle, an der Mündung einer Bohrung. **Am anderen Ende beginnen** dreht das um.

## Einstellungen

| Einstellung | Auswahl | Standard |
|---|---|---|
| **Form** | ISO-Metrisch (60°), M1.6 bis M64 grob; Trapez (Tr, 30°), Tr8×1.5 bis Tr60×9 | ISO-Metrisch |
| **Größe** | An die Fläche anpassen, oder eine Größe aus der Liste | An die Fläche anpassen |
| **Gesamte Fläche** | Abwählen, um eine **Länge (mm)** ab dem Beginn anzugeben | Aktiviert |
| **Am anderen Ende beginnen** | Das Gewinde läuft vom anderen Ende der Fläche | Aus |
| **Drehrichtung** | Rechtsgewinde oder Linksgewinde | Rechtsgewinde |
| **Modelliert** | Das echte schraubenförmige Gewinde schneiden | Aus |
| **Spiel (mm)** | Erscheint, wenn Modelliert aktiviert ist: wie viel kleiner das Gewinde einer Welle und wie viel größer das einer Bohrung ist, rundum | 0.1 |

Eine Größe, die nicht zur Fläche passt, wird trotzdem erstellt, auf die Fläche zugeschnitten, und der Bereich sagt es, etwa „Eine Welle mit Ø12 mm ist nicht das Ø10 mm von M10“. Mehrere Flächen können ein Gewinde-Feature teilen; mit **An die Fläche anpassen** erhält jede Fläche eine eigene Größe.

## Modellierte Gewinde für den 3D-Druck

Ein modelliertes Gewinde folgt dem Standard-Grundprofil: ISO 68-1 für metrische Gewinde (flache Kämme und Grund, 60°-Flanken), ISO 2901 für Trapezgewinde (30°-Flanken). Das **Spiel** verschiebt das ganze Profil nach innen (bei einer Welle) oder nach außen (bei einer Bohrung), damit gedruckte Teile ineinander passen:

- **0.1 bis 0.2 mm** passt zu den meisten Druckern. Drucken Sie zuerst eine Testschraube und eine Testmutter.
- **0** ist das Standardprofil, für gefräste Teile oder zum Prüfen einer Passung.

Eine Schraube und eine Mutter mit dem gleichen Spiel berühren sich an den Flanken nie: Der Spalt zwischen ihnen ist rundum das Doppelte des Spiels.

:::tip
Feine Steigungen drucken schlecht: M3 und kleiner oder eine Steigung unter 0.5 mm liegt an der Grenze dessen, was eine 0.4-mm-Düse ziehen kann. Modellieren Sie größere Gewinde, und verwenden Sie für kleine einen Einschmelzeinsatz oder eine Gewindebohrung.
:::

Ein modelliertes Gewinde ist Teil des Volumenkörpers: STL-, 3MF- und STEP-Exporte enthalten es, und Messen misst es. Es macht das Bauteil beim Neuaufbau langsamer: Ein M10-Gewinde mit 20 mm Länge hat etwa 150,000 Dreiecke.

## Gewindebohrungen

Eine **Gewindebohrung (ISO-Metrisch)** hat ebenfalls einen Schalter **Modelliert** mit dem gleichen **Spiel**. Siehe [Löcher und Senkbohrungen an Skizzenpunkten bohren](topic:holes).

## Wenn ein Gewinde nicht erstellt wird

- „Ein Gewinde kommt auf eine runde Fläche (einen Zylinder): eine Welle oder eine Bohrung.“ Die gewählte Fläche ist eben oder anderweitig gekrümmt.
- „Für eine runde Fläche von Ø0.6 mm gibt es keine Standardgröße: Wählen Sie eine Größe.“ An die Fläche anpassen hat nichts innerhalb von 12 % der Fläche gefunden. Wählen Sie eine **Größe** oder ändern Sie die Fläche.
- „Eine Fläche, auf der dieses Gewinde war, ist weg (…). Wählen Sie sie erneut.“ Eine frühere Änderung hat die Fläche entfernt. Klicken Sie {{ui:Flächen wählen}} und dann die Fläche erneut an.

:::note
Zollgewinde (UNC, UNF), Rohrgewinde, kegelige Gewinde, Gewindeausläufe und angefaste Gewindeanfänge sind noch nicht umgesetzt. Der exakte Kernel zeigt ein modelliertes Gewinde als kosmetisch.
:::
