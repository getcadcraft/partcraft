---
title: Körper kombinieren, verschieben und skalieren; Pfadmuster
summary: Erstellen Sie getrennte Körper und verbinden, schneiden oder bilden Sie nachträglich deren Schnittmenge, verschieben, drehen, ausrichten oder kopieren Sie sie, skalieren Sie sie gleichmäßig oder nach X, Y und Z, und kopieren Sie Features oder Körper entlang einer Kurve.
keywords: Körper, Mehrkörper, neuer Körper, kombinieren, boolesch, verbinden, abziehen, Schnittmenge, subtrahieren, Vereinigung, Werkzeuge behalten, Körper bewegen, Körper kopieren, Körper drehen, ausrichten, verschieben, skalieren, ungleichmäßige Skalierung, Strecken, affin, Pfadmuster, Muster entlang Kurve, Anordnung entlang Pfad, kurvengesteuertes Muster
from: 6b1ea820
---

:::note
**Noch nicht umgesetzt in dieser Version.** Die Arbeit mit mehreren Körpern erfordert einen exakten Geometrie-Kernel, den diese Version von PartCraft nicht hat: Sie erstellt jedes Bauteil mit dem Netz-Kernel. [Was noch nicht umgesetzt ist](topic:not-built-yet) beschreibt, was Sie stattdessen tun können. Der Rest dieser Seite beschreibt die Funktionsweise mit einem exakten Kernel.
:::

Ein Bauteil kann mehr als einen Volumenkörper enthalten. Jeder einzelne Volumenkörper ist ein **Körper**. Die meisten Features fügen zu jedem berührten Körper etwas hinzu oder schneiden davon ab. Die Werkzeuge auf dieser Seite arbeiten mit ganzen Körpern, die Sie auswählen. Sie befinden sich im Menü {{ui:Mehr}} der Gruppe Features: {{ui:Kombinieren}}, {{ui:Körper bewegen}}, {{ui:Körper skalieren}} und {{ui:Pfadmuster}}. Alle benötigen den exakten Kernel (OpenCascade).

## Einen separaten Körper erstellen

Setzen Sie im rechten Bereich einer Extrusion oder einer Drehung die **Operation** auf **Neuer Körper** (Sweeps und Lofts haben sie ebenfalls). Der neue Volumenkörper bleibt getrennt, auch dort, wo er sich mit den anderen überschneidet. **Schnittmenge** behält nur die Überlappung der neuen Form mit dem, was bereits vorhanden ist.

Körper werden nach dem Feature benannt, das sie begonnen hat: „Extrude2“. Eine Kopie wird nach ihrem Original und dem Feature benannt, das sie kopiert hat: „Extrude2, Kopie 1 von Move1“. Die Namen bleiben gleich, wenn Sie Maße weiter oben ändern, sodass die Features, die einen Körper verwenden, ihn weiterhin finden. Bei zwei oder mehr Körpern listet das Bauteilfeld (klicken Sie auf eine leere Stelle) sie mit ihren Volumina auf.

## Körper umbenennen oder ausblenden

Klicken Sie in der Ansicht auf eine leere Stelle, um das Bauteilfeld anzuzeigen. Dessen Körperliste (sichtbar, wenn das Bauteil zwei oder mehr Körper hat) enthält in jeder Zeile ein Namensfeld und eine Schaltfläche {{ui:Ausblenden}}.

- **Umbenennen:** Geben Sie im Feld einen neuen Namen ein und drücken Sie {{key:Enter}} oder klicken Sie daneben. Jedes Panel verwendet ihn dann: Kombinieren, Körper bewegen, die Muster. Leeren Sie das Feld, um zum Namen des Features zurückzukehren, das den Körper erstellt hat.
- **Ausblenden:** Klicken Sie in seiner Zeile auf {{ui:Ausblenden}}. Der Körper verschwindet aus der Ansicht, und Klicks gehen durch ihn hindurch, sodass Sie Flächen dahinter wählen können. {{ui:Einblenden}} holt ihn zurück. {{ui:Alle einblenden}} holt jeden ausgeblendeten Körper zurück.

Ausblenden ändert nur die Ansicht. Ein ausgeblendeter Körper wird weiterhin erstellt, im Volumen und in den Messungen gezählt und in STL-, 3MF- und STEP-Exporten gespeichert. Namen und ausgeblendete Körper werden in der Bauteildatei gespeichert, und jede Änderung ist ein Schritt von {{ui:Rückgängig}}.

## Körper kombinieren

1. Klicken Sie mit Shift+Klick auf eine Fläche des **Zielkörpers** und dann auf eine Fläche jedes **Werkzeugkörpers**.
2. Wählen Sie {{ui:Mehr}}, dann {{ui:Kombinieren}}.
3. Wählen Sie im rechten Bereich die **Operation**:

| Operation | Ergebnis |
|---|---|
| Verbinden | Ziel und Werkzeuge werden zu einem Körper |
| Abziehen | Die Werkzeuge werden vom Ziel abgezogen |
| Schnittmenge | Nur was Ziel und alle Werkzeuge gemeinsam haben, bleibt erhalten |

Der **Zielkörper** ist derjenige, der seinen Namen behält. Setzen oder entfernen Sie das Häkchen bei **Werkzeugkörper**, oder verwenden Sie **In der Ansicht wählen** und klicken Sie auf deren Flächen. **Werkzeugkörper behalten** lässt die Werkzeuge ebenfalls an ihrem Platz (praktisch für eine Form und ihren Kern). Wenn ein Werkzeugkörper bereits durch eine frühere Kombination verbraucht wurde, sagt das Feld dies, anstatt einen anderen Körper zu wählen.

## Körper verschieben oder kopieren

1. Wählen Sie {{ui:Mehr}}, dann {{ui:Körper bewegen}}. Der neueste Körper ist angehakt. Haken Sie die an, die Sie bewegen möchten.
2. Wählen Sie den **Typ** der Bewegung:

| Bewegung | Was Sie festlegen |
|---|---|
| Verschieben | **ΔX**, **ΔY**, **ΔZ** in Millimetern |
| Punkt zu Punkt | **Von** und **Bis**: Klicken Sie nahe dem Ende einer Kante, auf ein Punkt-Feature oder eine Stelle auf einer Fläche |
| Drehen um eine Achse | **Achse** (X, Y, Z, ein Achsen-Feature oder **Wählen**: eine gerade Kante, ein Kreis oder ein Zylinder) und **Winkel (°)** |
| Fläche auf Fläche oder Ebene ausrichten | **Zu bewegende Fläche** (eine ebene Fläche des Körpers), **Auf** (eine ebene Fläche oder eine Ebene) |

Ausrichten dreht den Körper so, dass seine Fläche auf der anderen Fläche liegt, Fläche auf Fläche. Danach schiebt es ihn nur entlang der Normalen dieser Fläche. **Gleiche Richtung** dreht ihn in die andere Richtung. **Kopieren** behält das Original bei und fügt den verschobenen Körper als neuen Körper hinzu.

## Körper skalieren

1. Wählen Sie {{ui:Mehr}}, dann {{ui:Körper skalieren}}, und haken Sie die Körper an.
2. Geben Sie eine **Skalierung** ein, oder entfernen Sie das Häkchen bei **Gleichmäßig** und geben Sie **Skalierung X**, **Skalierung Y** und **Skalierung Z** ein (entlang der Weltachsen).
3. **Bezugspunkt** ist der Punkt, der an seiner Stelle bleibt: der Mittelpunkt des Quaders der Körper oder ein Punkt, den Sie wählen.

Eine gleichmäßige Skalierung ist exakt. Eine ungleichmäßige Skalierung macht Kreise zu Ellipsen: Ein Zylinder wird zu einem elliptischen Zylinder, den keine analytische Fläche beschreibt. Daher werden gekrümmte Flächen zu B-Spline-Flächen, die innerhalb von 0.0000004 mm der exakten Form bleiben. Ebene Flächen und gerade Kanten bleiben exakt. Das Feld zeigt, was passiert ist. Skalierungsfaktoren müssen größer als null sein (spiegeln Sie stattdessen mit {{ui:Spiegeln}}).

## Entlang eines Pfads kopieren

1. Wählen Sie im Verlauf das Feature zum Kopieren aus, oder wählen Sie nichts aus, um den neuesten Körper zu kopieren.
2. Wählen Sie {{ui:Mehr}}, dann {{ui:Pfadmuster}}. Die neueste ungenutzte Skizze wird als Pfad verwendet.
3. Legen Sie im rechten Bereich fest:

| Einstellung | Was sie bewirkt |
|---|---|
| **Kopieren** | Körper (jede Kopie ein neuer Körper) oder Features (verbunden oder abgezogen wie das Original) |
| **Pfad** | Skizzen anhaken oder **Modellkanten wählen**; die Teile müssen Ende an Ende anschließen |
| **Anzahl** | Gesamtzahl einschließlich des Originals |
| **Abstand** | Gleich (verteilt bis zum Ende eines offenen Pfads oder rund um einen geschlossenen) oder ein festgelegter Abstand |
| **Ausrichtung** | Dem Pfad folgen (jede Kopie dreht sich mit ihm) oder Fest (Kopien bleiben parallel) |
| **Richtung umkehren** | In die andere Richtung entlang des Pfads gehen |

Die Kopien beginnen dort, wo der Pfad dem Original am nächsten liegt, und sind entlang der Kurve nach ihrer Länge verteilt.

Lineare und kreisförmige Muster können ebenfalls Körper kopieren: Haken Sie im jeweiligen Feld **Körper kopieren** an und wählen Sie die Körper aus. Jede Kopie ist ein neuer Körper.

## Einschränkungen

- Körper benötigen den exakten Kernel. Der Netz-Kernel behält einen einzelnen Volumenkörper und weist darauf hin.
- Eine ungleichmäßige Skalierung macht gekrümmte Flächen zu engen B-Spline-Annäherungen (siehe oben), nicht zu exakten Zylindern oder Kegeln. Offset-Flächen lassen sich so noch nicht skalieren.
- Wenn dem Pfad eine sich windende 3D-Kurve folgt, wird die Kopie mitgeführt, ohne sich zu verdrehen. Bei ebenen Pfaden ist die Drehung exakt.
- Kombinieren funktioniert nur mit Volumenkörpern. Flächenkörper werden mit {{ui:Vernähen}} verbunden.

Siehe auch [Referenzebenen, Achsen und Punkte](topic:reference-geometry) für Punkte und Ebenen „zwischen Objekten“ sowie [Muster- und Spiegel-Features](topic:patterns-mirror).
