---
title: Eine Form aus Lasten wachsen lassen (Generativ)
summary: Die Flächen wählen, die gehalten und belastet werden, Bereiche, die erhalten bleiben und frei bleiben sollen, Zielvolumen und Materialien, dann Ergebnisse erzeugen: die steifsten Formen für jedes Volumen, erneut als Volumenkörper geprüft, in einer Tabelle verglichen und als STL, STEP oder neues Bauteil heruntergeladen.
keywords: generatives Design, Topologieoptimierung, SIMP, Leichtbau, Gitter, organische Form, Ergebnisse, vergleichen, Masse, Volumenanteil, Erhalten, Einschluss, Hindernis, Ausschluss, Bauraum, minimale Stabgröße, STL, 3D-Druck
from: 5b91fa8e
---

Der Arbeitsbereich **Generativ** entfernt Material, das die Lasten nicht brauchen. Sie legen fest, wo das Bauteil gehalten und belastet wird, was bleiben muss und was frei bleiben muss; PartCraft findet die steifste Form für jedes Zielvolumen (**Topologieoptimierung**), prüft jede erneut als Volumenkörper mit dem echten Material und zeigt die Ergebnisse nebeneinander. Es arbeitet auf den benannten Flächen, die der Mesh-Kernel dem Bauteil gibt (siehe [Der Mesh-Kernel](topic:solid-kernels)).

Wählen Sie **Generativ** im Feld **Arbeitsbereich**. Ihr Bauteil wird nicht verändert; die Studie wird in der Bauteildatei gespeichert.

## Studie einrichten

1. Drücken Sie **Neue Studie** im rechten Panel.
2. **Raum**: *Das Bauteil wie es ist* entfernt Material aus Ihrem Bauteil; *Ein Quader um das Bauteil* lässt eine Form in einem Quader wachsen, der um den **Quaderabstand** größer ist als das Bauteil.
3. **Elementgröße**: leer lassen für eine automatische Größe (etwa 8,000 Würfel) oder einen Wert eingeben. Feinere Größen ergeben feinere Formen und dauern länger.
4. **Minimales Element**: Stäbe, die dünner als etwa das Doppelte davon sind, bilden sich nicht. Leer bedeutet eineinhalb Würfel.
5. Markieren Sie ein bis sechs **Zielvolumen** (den Anteil des Bauraums, den die Form füllen darf) und ein bis vier **Materialien**. Jedes Volumen wird einmal erzeugt; jedes Material wird an dieser Form geprüft (die steifste Form hängt nicht vom Material ab, wohl aber ihre Masse, Spannung und Sicherheitszahl).

## Ziele

- {{ui:Fixed}}: Klicken Sie die Flächen an, die gehalten werden. Eine **Reibungslose Fläche** aus der Liste **Hinzufügen** im Panel hält eine Fläche nur quer zu sich selbst (verwenden Sie sie für Symmetrieebenen).
- {{ui:Force}}: Klicken Sie die belasteten Flächen an, geben Sie dann die Gesamtkraft ein und wählen Sie ihre Richtung im Panel. **Druck** steht in der Liste **Hinzufügen**.
- {{ui:Preserve}}: Klicken Sie Flächen an, deren Umgebung massiv bleiben muss, und stellen Sie ein, wie tief (**Massiv halten innerhalb**) — zum Beispiel um Schraubenbohrungen. Die Flächen, die Sie halten oder belasten, bleiben immer erhalten.
- {{ui:Obstacle}}: Klicken Sie Flächen an, deren Umgebung leer bleiben muss, und stellen Sie ein, wie weit (**Frei halten innerhalb**) — Platz für eine Welle oder ein Werkzeug.

Drücken Sie **Auswahl fertig** oder {{key:Esc}}, nachdem Sie Flächen angeklickt haben. Grüne und rote Tönungen zeigen die Bereiche.

## Erzeugen und vergleichen

Drücken Sie {{ui:Generate}}. Das Panel zeigt Fortschritt und verbleibende Zeit; **Stopp** bricht ab. Jedes Ergebnis erscheint in der Tabelle **Ergebnisse**: Zielvolumen, Material, **Masse**, **größte Spannung**, **größte Verschiebung** und **Sicherheitsfaktor** (Streckgrenze ÷ Spannung), alles aus der erneuten Berechnung der fertigen Form als Volumenwürfel mit dem echten Material.

Wählen Sie ein Ergebnis, um es in der Ansicht zu sehen (das Bauteil ist ausgeblendet; markieren Sie **Bauteil durch es hindurch zeigen**, um beides zu sehen). Unter der Tabelle stehen: wie viele Iterationen es brauchte und ob es sich eingependelt hat, seine Steifigkeit als Volumenkörper im Vergleich zum eigenen Wert des Optimierers und seine Oberfläche.

## Ein Ergebnis verwenden

- **STL**: ein geschlossenes Dreiecksnetz, bereit für den 3D-Druck.
- **STEP (facettiert)**: dieselbe Oberfläche als STEP-Körper aus ebenen Flächen.
- **Neue Bauteildatei**: eine PartCraft-Bauteildatei, deren einziges Merkmal das Ergebnis als importierter Körper ist. Öffnen Sie sie, um darauf zu skizzieren, Löcher zu schneiden oder sie in der Simulation zu prüfen. Sie ist facettiert (tausende ebene Flächen), keine bearbeitbare Form.
- **Zu diesem Bauteil hinzufügen** verbindet das Ergebnis mit dem Bauteil; es ist nur bei einem Quader als Bauraum aktiv (mit dem Bauteil selbst als Raum liegt das Ergebnis innerhalb des Bauteils).

**Neue Bauteildatei** und **Zu diesem Bauteil hinzufügen** sind in dieser Version noch nicht umgesetzt: Das Ergebnis wird zu einem importierten Körper, was einen exakten Kernel braucht. Die Downloads STL und STEP (facettiert) funktionieren.

## Wie weit man ihm trauen kann

- Es optimiert die **Steifigkeit** für das vorgegebene Volumen. Es gibt noch keine Spannungsgrenzen und keine Fertigungsregeln (Überhänge, Fräsrichtungen, minimale Lochgrößen): Prüfen Sie ein gewähltes Ergebnis in [Simulation](topic:simulation) und passen Sie es an.
- Dünne Stäbe, ein oder zwei Würfel breit, sind Näherungen: Verwenden Sie eine kleinere Elementgröße für schlanke Bauteile.
- Die Methode ist SIMP mit einem Dichtefilter, einer Schwellenprojektion und Optimalitätskriterien-Updates; die gemeldete Spannung und Durchbiegung gelten für das Ergebnis als Würfel, was ehrlich, aber an scharfen Ecken grob ist.

## Verwandt

- [Spannung und Durchbiegung prüfen (Simulation)](topic:simulation)
- [Export zum Drucken, STEP und DXF](topic:export-files)
- [Was noch nicht umgesetzt ist](topic:not-built-yet)
