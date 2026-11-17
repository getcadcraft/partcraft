---
title: Sweep, Loft und Formschräge
summary: Führen Sie ein geschlossenes Profil entlang eines Pfads aus Skizzenkurven oder Modellkanten (Sweep), erzeugen Sie einen Loft über Querschnitte auf verschiedenen Ebenen und versehen Sie Flächen mit Formschräge; mit den Optionen, den exakten Ergebnissen und den Meldungen.
keywords: Sweep, Sweep-Aufsatz, Sweep-Ausschnitt, Rohr, Pfad, Loft, Loft-Aufsatz, Abschnitte verbinden, geradlinig, Formschräge, Formschrägenwinkel, Schrägflächen, neutrale Ebene, Ziehrichtung, Formgebung
from: 9d637981
---

:::note
**In dieser Version** sind Sweep und Loft noch nicht umgesetzt: Dafür ist ein exakter Kernel nötig, den diese Version von PartCraft nicht hat. [Was noch nicht umgesetzt ist](topic:not-built-yet) erklärt, was Sie stattdessen tun können; die Abschnitte Sweep und Loft beschreiben beide so, wie sie mit einem exakten Kernel arbeiten. **Formschräge funktioniert** an ebenen Flächen: Der Netzkernel erstellt sie mit demselben Ergebnis, das ein exakter Kernel liefert.
:::

Alle drei finden Sie im Menü {{ui:Mehr}} der Gruppe Features (siehe [Der Netzkernel](topic:solid-kernels)). Jede kann Material hinzufügen, es ausschneiden, nur die Überlappung behalten (**Schnittmenge**) oder einen **Neuen Körper** erzeugen (bei Sweep und Loft: **Operation** im Bereich).

## Sweep

Ein Sweep führt ein geschlossenes Profil entlang eines Pfads: Rohre, Griffe, Drahtfedern, Schienen.

1. Zeichnen Sie den **Pfad** in einer Skizze: Linien und Bögen, Ende an Ende verbunden (oder nutzen Sie Modellkanten, siehe unten).
2. Zeichnen Sie das **Profil** in einer anderen Skizze, deren Ebene durch ein Ende des Pfads verläuft, zum Beispiel einen Kreis auf der Ebene Oben am Anfang eines Pfads, der auf der Ebene Vorne gezeichnet ist.
3. Wählen Sie die Profilskizze, dann {{ui:Mehr}} und {{ui:Sweep}}. Die neueste andere Skizze wird zum Pfad.

Im Bereich:

| Einstellung | Wirkung |
|---|---|
| **Pfad** | Haken Sie die Skizzen an, die den Pfad bilden (mehrere Skizzen werden Ende an Ende zu einem 3D-Pfad verbunden); **Modellkanten wählen** fügt Kanten des Bauteils hinzu |
| **Ausrichtung** | Dem Pfad folgen (Standard), Frenet, Fest (Querschnitte bleiben parallel zum Profil), Richtung beibehalten, Entlang einer Führungskurve |
| **Endskalierung** | Das Profil wächst oder schrumpft am Ende linear auf diese Größe (1 = gleichbleibend) |

Scharfe Ecken im Pfad werden auf Gehrung geschnitten. Ein Kreis mit Radius 5, entlang einer 100 mm langen Linie geführt, ist ein Zylinder von genau 2500π mm³; entlang eines Viertelbogens mit Radius 50 ein Viertel-Torus von 625π² mm³.

## Loft

Ein Loft verbindet zwei oder mehr Querschnitte auf verschiedenen Ebenen.

1. Zeichnen Sie jeden Querschnitt in einer eigenen Skizze (jeweils eine geschlossene Schleife), auf Grundebenen, Bezugsebenen (siehe [Bezugsebenen, Achsen und Punkte](topic:reference-geometry)) oder Flächen.
2. Wählen Sie {{ui:Mehr}}, dann {{ui:Loft}}. Jede unbenutzte Skizze mit einer Schleife wird zu einem Querschnitt, in der Reihenfolge des Verlaufs.

Der Bereich listet die Querschnitte in Reihenfolge auf (**Nach oben** ordnet um, **Entfernen** löscht einen); **Skizze hinzufügen** fügt eine weitere hinzu, **Fläche wählen** fügt eine ebene Fläche des Bauteils hinzu. **Geradlinig** erzeugt ebene Flächen zwischen den Querschnitten statt eines glatten Übergangs. Zwischen zwei Quadraten sind beide derselbe Pyramidenstumpf (ein Quadrat mit 40 mm zu einem mit 20 mm über 30 mm Höhe: genau 28000 mm³).

Querschnitte mit unterschiedlicher Eckenzahl (ein Quadrat zu einem Dreieck) werden von OpenCascade einander zugeordnet, was die Seitenflächen verdrehen kann; das Bauteil warnt Sie davon. Zeichnen Sie Querschnitte mit gleicher Eckenzahl, beginnend an einander entsprechenden Ecken, für das sauberste Ergebnis.

### Führungskurven

Führungskurven sind Kurven, denen die Seiten des Lofts vom ersten bis zum letzten Querschnitt folgen müssen, für eine Ausbauchung, eine Taille oder eine Aufweitung, die Sie selbst zeichnen.

1. Zeichnen Sie zwei oder mehr Führungskurven: offene Kurven (Linien, Bögen, Splines), die vom ersten bis zum letzten Querschnitt verlaufen und jeden Querschnitt einmal kreuzen. Eine Skizze kann mehrere Führungskurven enthalten: Jede getrennte Kette darin ist eine eigene Führungskurve. Zeichnen Sie eine Führungskurve so, dass sie jeden Querschnitt wirklich trifft: Rasten Sie ihre Enden an den Punkten der Querschnitte ein.
2. Im Loft-Bereich unter **Führungskurven** haken Sie die Skizzen an, die sie enthalten, oder klicken auf {{ui:Modellkanten als Führungskurven wählen}} und klicken Kanten des Bauteils an ({{key:Esc}} beendet).

Mit Führungskurven ist der Loft eine Gordon-Fläche durch die Querschnitte und die Führungskurven (siehe [Flächen durch ein Kurvennetz](topic:gordon-surfaces)), an beiden Enden eben verschlossen zu einem Volumenkörper. Der Bereich zeigt, wie genau er ihnen folgt. Jeder Querschnitt muss dann eine Skizze sein (ein Punkt oder eine Fläche kann keine Führungskurve aufnehmen), und **Geradlinig** gilt nicht. Eine Führungskurve, die einen Querschnitt um mehr als 0.01 mm verfehlt, wird mit dem Abstand abgelehnt.

Geprüft: Zwei Kreise (20 mm und 10 mm Durchmesser, 40 mm auseinander) mit vier geraden Führungskurven ergeben das Volumen des Kegelstumpfs auf 0.000002 % genau; Bögen, die 5 mm nach außen wölben, ergeben ein Fass, das jeder Führungskurve auf 0.00001 mm folgt.

## Formschräge

Formschräge neigt Flächen, damit ein Bauteil aus einer Form kommt.

1. Wählen Sie {{ui:Mehr}}, dann {{ui:Formschräge}} (oder wählen Sie zuerst Flächen mit {{key:Shift}}+Klick). Ohne Auswahl sind Sie im Wählmodus: Klicken Sie jede Fläche zum Neigen an, dann {{ui:Fertig}}.
2. Legen Sie **Winkel (°)**, die **Neutrale Ebene** (wo die Flächen ihre Größe behalten) und die **Ziehrichtung** fest (standardmäßig die Normale der neutralen Ebene).

Ein positiver Winkel neigt die Fläche entlang der Ziehrichtung nach innen und entfernt Material; ein negativer fügt es hinzu. Die neutrale Ebene beginnt als Ebene Oben. In dieser Version lassen sich nur ebene Flächen mit Formschräge versehen: Ein Zylinder, ein Kegel oder eine Freiformfläche meldet „Formschräge: in dieser Version nur ebene Flächen (der Netzkernel erstellt sie).“ Die vier Seiten eines 100 × 100 × 50 großen Blocks, um 5° über seine Unterseite geneigt, werden zu einem Pyramidenstumpf von genau h/3·(a² + b² + ab), mit b = a − 2h·tan 5°.

## Meldungen

| Meldung | Was zu tun ist |
|---|---|
| „Die Ebene des Profils muss durch ein Ende des Pfads verlaufen …“ | Verschieben Sie die Profilskizze an den Anfang (oder das Ende) des Pfads |
| „Der Pfad hat eine Lücke: Seine Kurven schließen nicht Ende an Ende …“ | Verbinden Sie die Kurven des Pfads; in getrennten Skizzen müssen ihre Enden genau aufeinandertreffen |
| „Ein Loft-Querschnitt braucht genau eine geschlossene Schleife“ | Teilen Sie die Skizze, oder entfernen Sie die überzählige Schleife |
| „… kann bezüglich dieser neutralen Ebene nicht mit Formschräge versehen werden …“ | Die Fläche ist parallel zur neutralen Ebene oder trifft sie nicht |
| „Formschräge: in dieser Version nur ebene Flächen (der Netzkernel erstellt sie).“ | Eine gewählte Fläche ist gekrümmt. Entfernen Sie sie; versehen Sie nur ebene Flächen mit Formschräge |

:::note
Noch nicht umgesetzt: verdrehende Sweeps, Dünnwand- und Flächen-Sweeps, Loft-Führungskurven und Endtangentialität, Formschräge an Zylindern, Kegeln und Freiformflächen.
:::
