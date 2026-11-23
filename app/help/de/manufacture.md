---
title: Werkzeugwege und G-Code erstellen (Fertigung)
summary: Rohteil und Werkstücknullpunkt festlegen, Werkzeuge wählen, Operationen Fläche, Tasche, Kontur, Bohren und Fase durch Auswahl von Flächen hinzufügen, das ganze Modell in 3D schlichten (Parallel, Scallop), das Rohteil gegen das Modell auf Gouges und Zykluszeit simulieren und G-Code von einem der drei eingebauten Posts oder einem eigenen herunterladen.
keywords: exakt STEP, STEP für die Werkstatt, Werkstückkoordinaten, CAM-Übergabe, Parallel, Scallop, 3D-Schlichten, Schlichten, Kugelfräser, Werkzeugbibliothek, Post bearbeiten, eigener Post, Post-Editor, Adaptiv, adaptives Schruppen, konstanter Eingriff, trochoidal, HSM, Hochgeschwindigkeitsbearbeitung, Fertigung, CAM, Werkzeugweg, G-Code, NC, CNC, Fräser, Fräsen, Tasche, Kontur, Profil, Planfräsen, Bohren, Pecken, G83, G81, G73, Fase, Rohteil, Werkstücknullpunkt, G54, Postprozessor, GRBL, LinuxCNC, Vorschub und Drehzahl, Simulation, Gouge, Zykluszeit
from: f8a03be8
---

Der Arbeitsbereich Fertigung macht aus dem Bauteil Werkzeugwege und schreibt sie als G-Code. Die meisten Operationen sind **2.5-Achs**-Fräsen: Das Werkzeug steht senkrecht, Wände werden senkrecht nach unten und Böden eben geschnitten. **3D-Schruppen** und **Restbearbeitung** räumen gekrümmte Bauteile in 3D aus ([3D-Schruppen und Restbearbeitung](topic:rough-3d)); **Parallel** und **Scallop** schlichten sie ([3D-Schlichten](topic:finish-3d)). Auf einer Maschine mit Drehachsen kann jede Operation ein geneigtes Werkzeug haben, und zwei Operationen bewegen die Drehachsen während des Schneidens ([4- und 5-Achs-Bearbeitung](topic:multi-axis)). Für eine Drehmaschine gibt es Operationen ([Drehen](topic:turning)), und für einen Messtaster ([Antasten](topic:probing)). Sie arbeitet auf den benannten Flächen, die der Netzkern dem Bauteil gibt (siehe [Der Netzkern](topic:solid-kernels)).

Laborversion: Prüfen Sie jedes Programm im Simulator der eigenen Steuerung und lassen Sie es zuerst in der Luft über dem Rohteil laufen.

## Aufspannung einrichten

1. Wählen Sie **Fertigung** im Umschalter für den Arbeitsbereich und dann {{ui:New setup}}.
2. Auf der Registerkarte **Aufspannung** wählen Sie:
   - **Werkzeugachse (+Z)**: in welche Richtung das Werkzeug ins Bauteil zeigt. Welt +Y (das Oben von PartCraft) ist der Standard; dann ist die Maschinen-X die Welt-X und die Maschinen-Y die Welt −Z.
   - **Werkstücknullpunkt (G54)**: eine Ecke oder Mitte des Rohteils, Oberseite oder Unterseite, die Mitte der Oberseite des Modells oder der Modellnullpunkt.
   - **Rohteil**: ein Quader oder Zylinder, entweder das Modell plus Aufmaße (Seiten, Oberseite, Unterseite) oder eine feste Größe.
   - **Material** (legt die Start-Vorschübe und Drehzahlen fest), der **Post** (Steuerung), die maximale Spindeldrehzahl der Maschine, die Eilganggeschwindigkeit und die Werkzeugwechselzeit, Kühlmittel und die Programmnummer.

## Werkzeuge

Die Registerkarte **Werkzeuge** enthält die Bibliothek: Schaftfräser, Kugelfräser und Eckradiusfräser, Bohrer, Fasfräser und Planfräser, jeweils mit einer T-Nummer, Durchmesser, Schneidenzahl und Schneidenlänge (plus Eckradius, Spitzen- oder Fasenwinkel, wo sie zutreffen).

Meine Werkzeuge können im Browser gespeichert und als Datei zwischen Computern verschoben werden: siehe [Die Werkzeugbibliothek](topic:tool-library).

Spindeldrehzahl und Vorschub kommen aus dem Material: n = 1000 × Schnittgeschwindigkeit / (π × Durchmesser), Vorschub = n × Schneidenzahl × Spandicke (Bohrer: n × Vorschub pro Umdrehung). Die Werte sind vorsichtige Startwerte aus veröffentlichten Bereichen und nicht auf Ihre Maschine abgestimmt; geben Sie Schnittgeschwindigkeit, Spandicke, U/min oder Vorschub Ihres Werkzeugherstellers ein, um sie zu überschreiben. Überschreitet die Drehzahl das Maximum der Maschine, wird sie dort gehalten und der Vorschub folgt, damit die Spanabnahme gleich bleibt.

## Operationen hinzufügen

Jede Schaltfläche der Symbolleiste fügt eine Operation hinzu; wo sie Geometrie braucht, beginnt sie mit der Auswahl: Klicken Sie Flächen oder Kanten in der Ansicht an (nochmals klicken, um eine zu entfernen), dann {{ui:Done picking}} oder {{key:Esc}}.

| Operation | Auswahl | Was sie bewirkt |
|---|---|---|
| {{ui:Face}} | nichts | Zickzack-Bahnen über das gesamte Rohteil, über seine Kanten hinaus, bis hinunter zur Oberseite des Modells |
| {{ui:Pocket}} | eine ebene Bodenfläche, ein rundes Loch oder eine geschlossene Kantenkette | Räumt den Bereich in versetzten Bahnen von innen nach außen aus, bei jeder Zustellung; Inseln (Flächen, die im Boden aufstehen) bleiben stehen; ein Boden, der ringsum offen ist (nichts höher außerhalb), wird bis zur Kante des Rohteils ausgeräumt |
| {{ui:Adaptive}} | wie bei {{ui:Pocket}} | Räumt denselben Bereich in Bahnen aus, die jeweils eine festgelegte Breite schneiden (**Eingriff**, ein Bruchteil des Durchmessers), sodass der Fräser nie einen vollbreiten Schlitz nimmt, auch nicht in Ecken; er setzt über eine Helix ein und schlichtet die Wände auf jeder Ebene. Schmale Schnitte erlauben eine tiefere Zustellung und einen höheren Vorschub |
| {{ui:Contour}} | eine ebene Fläche (ihr Umriss), eine runde Fläche oder Kanten | Folgt dem um den Werkzeugradius versetzten Umriss, außen oder innen, mit An- und Abfahrbögen und optionalen Haltestegen |
| {{ui:Drill}} | Löcher (Wand oder Rand eines Lochs anklicken) | Bohrt jedes Loch mit einem Festzyklus: Pecken (G83), Bohren (G81) oder Spanbrechen (G73); oder geben Sie einen Durchmesser an, um jedes Loch dieser Größe zu bohren |
| {{ui:Chamfer}} | Umriss oder Kanten einer Fläche | Fährt mit einem Fasfräser entlang der Kante, sodass er die von Ihnen eingestellte Breite schneidet |
| {{ui:Parallel}} | nichts (das ganze Modell) | 3D-Schlichten in parallelen Linien in jedem Winkel, der Oberfläche folgend mit einem Kugel-, Eckradius- oder Schaftfräser. Siehe [3D-Schlichten](topic:finish-3d) |
| {{ui:Scallop}} | nichts (das ganze Modell) | 3D-Schlichten in Bahnen mit festem Abstand über die Oberfläche, sodass der Restkamm dazwischen die gewünschte Höhe hat |

Wählen Sie eine Operation in der Liste, um ihr Werkzeug, ihre Höhen (Freigabe, Rückzug, Vorschubhöhe, Oberseite, Unterseite), Zustellung, Seitenzustellung, Aufmaß, Schlichtdurchgang, Eintauchen (Helix, Rampe oder Senkrechteintauchen), Gleichlauffräsen, Haltestege oder Zyklus zu ändern. {{ui:Up}} und {{ui:Down}} ordnen um, {{ui:Suppress}} lässt sie weg, {{ui:Delete}} entfernt sie. Alles steht in der Rückgängig-Historie und wird in der Teiledatei gespeichert.

Die Seitenzustellung einer Tasche beträgt höchstens die Hälfte des Werkzeugdurchmessers, sodass jeder Punkt ihres Bodens innerhalb eines Werkzeugradius von einer Bahn liegt. Innenecken behalten den Radius des Werkzeugs.

**Adaptives Schruppen** hält den Eingriff des Fräsers nahe an einem Wert. Ein Eingriff von 0.15 des Durchmessers entspricht einem Eingriffswinkel von etwa 46°: dem Bogen der Fräserschneide im Material. Eine versetzte Tasche dagegen schneidet auf ihrer ersten Bahn volle Breite und umläuft in jeder Innenecke weiter. Zwischen den Bahnen bleibt das Werkzeug unten, wo es durch geschnittene Luft fährt, und hebt sowie senkt sich sonst in geschnittener Luft. Die Bahnen werden auf einem feinen Raster über der Region berechnet (Zellen etwa ein Zwölftel des Werkzeugradius), daher kann der Eingriff um etwa eine Zelle breiter werden als eingestellt; die Wände werden exakt geschlichtet. Ein großer offener Bereich ergibt ein langes Programm mit vielen kurzen Bewegungen.

## Simulieren

Werkzeugwege werden nach jeder Änderung neu berechnet (auch die des Bauteils). {{ui:Simulate}} zeigt außerdem das Rohteil, das nach dem ganzen Programm übrig bleibt. Das Panel zeigt:

- **Zykluszeit**: Vorschubbewegungen mit ihrem Vorschub, Eilgänge als gerade Linien mit der Eilganggeschwindigkeit der Aufspannung, plus die Werkzeugwechselzeit. Echte Maschinen beschleunigen, daher brauchen sie länger.
- **Gouges**: Stellen, an denen das Werkzeug mehr als 0.02 mm unter die Oberfläche des Bauteils gefahren ist. Rote Markierungen zeigen sie in der Ansicht.
- **Verbleibendes Rohteil am Bauteil**.

Das Rohteil ist eine Höhenkarte der Oberseite (eine Z-Karte), daher kann es keine Hinterschneidungen zeigen. Ziehen Sie **Wiedergabe**, um das Werkzeug entlang des Programms zu bewegen. In der Ansicht sind Vorschubbewegungen durchgezogen und Eilgänge gestrichelt, eine Farbe je Operation.

Mit eingeschaltetem **Simuliertes Rohteil anzeigen** wird das Rohteil zellenweise gegen das Modell gefärbt: **Grün**, wo es auf dem Modell liegt (innerhalb von 0.02 mm), **Rot**, wo das Werkzeug ins Modell geschnitten hat, und **Gelb** für eine dünne Restschicht des Rohteils auf dem Modell, **Orange** für mehr, und ein Übergang zum **Grau** des unbearbeiteten Rohteils ab 1 mm oder mehr. Die Farben werden bei jeder Änderung neu berechnet, aus derselben Höhenkarte wie die Zahlen im Panel, sodass Grün und Rot mit der Zeile Gouges übereinstimmen. Eine Fase schneidet absichtlich in das Modell und zeigt entlang ihrer Kante Rot.

## G-Code ausgeben

Wählen Sie die Steuerung unter **Post** und drücken Sie {{ui:Download G-code}} (oder {{ui:Post}} in der Symbolleiste):

| Steuerung | Datei | Hinweise |
|---|---|---|
| Fanuc-artig ISO | .nc | %, O-Nummer, Zeilennummern, T M6 mit G43 H, Festzyklen |
| GRBL | .nc | Kein Werkzeugwechsler und keine Festzyklen: ein Werkzeugwechsel hält mit M0 an, Bohren wird als einfache Bewegungen geschrieben |
| LinuxCNC | .ngc | T M6 mit G43 H, Festzyklen, M2 |
| Fanuc-artige Drehmaschine | .nc | Für Drehprogramme: X als Durchmesser, Vorschub pro Umdrehung, G96 unter einer G50-Begrenzung, G32-Gewinden |
| LinuxCNC-Drehmaschine | .ngc | Für Drehprogramme: G7-Durchmesser, G95, G96, G33-Gewinden; schreibt keine Referenzfahrt |
| Eigener Post | beliebig | Ein Post, den Sie geschrieben oder geändert haben: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Jede Datei beginnt mit Kommentaren zu Programm, Rohteil, Werkstücknullpunkt und Werkzeugen. Koordinaten sind in Millimetern mit 3 Nachkommastellen. {{ui:Toolpath CSV}} und {{ui:Toolpath JSON}} exportieren die Bewegungen selbst.

**Prüfen Sie die Ausgabe im Simulator Ihrer Maschine, bevor Sie schneiden, und lassen Sie das Programm zuerst in der Luft über dem Rohteil laufen.** Die drei eingebauten Posts sind Ausgangspunkte, die dem dokumentierten Verhalten der Steuerungen folgen; sie wurden auf keiner bestimmten Maschine geprüft. Einen Post, den Sie ändern, müssen Sie selbst nachweisen. Wie man einen schreibt: [Postprozessoren, die Sie bearbeiten können](topic:post-processors).

## Exaktes STEP für die Werkstatt

Unter den G-Code-Schaltflächen auf der Registerkarte **Operationen** lädt {{ui:Exact STEP (work coordinates)}} `<part>-work.step` herunter: das Bauteil als exakter Volumenkörper (echte Zylinder für Löcher und Ansätze, echte Kreise für ihre Kanten) mit seinem Ursprung am Werkstücknullpunkt dieser Aufspannung und Z entlang der Werkzeugachse. Das sind die Koordinaten, die der G-Code verwendet, sodass das CAM-Programm oder der Prüfer einer Werkstatt das Modell ohne Verschieben am Programm ausrichtet. Die Datei enthält nur das Bauteil, nicht das Rohteil oder die Werkzeugwege.

{{ui:Export}} › {{ui:STEP AP242 (exact solid)}} schreibt denselben Volumenkörper in der eigenen Lage des Bauteils (Z nach oben): siehe [Exportieren für den Druck, STEP und DXF](topic:export-files#for-other-cad-programs-step).

## Grenzen

- Taschen, Konturen, Bohren und Fasen sind 2.5-Achs. Gekrümmte Bauteile werden durch ihre eigenen Operationen in 3D geschruppt und geschlichtet ([3D-Schruppen und Restbearbeitung](topic:rough-3d), [3D-Schlichten](topic:finish-3d)). Adaptives Schruppen ist 2D (ebene Böden).
- Geneigte Werkzeuge, 5-Achs- und 4.-Achs-Schlichten, Drehen und Antasten sind vorhanden, jeweils mit eigenen Grenzen, und **keines davon wurde auf einer Maschine ausgeführt**: siehe [4- und 5-Achs-Bearbeitung](topic:multi-axis), [Drehen](topic:turning) und [Antasten](topic:probing).
- Halter und Schäfte werden nicht auf Kollisionen geprüft; eine Warnung erscheint, wenn ein Schnitt tiefer ist als die Schneidenlänge.
- Vorschübe und Drehzahlen sind Startwerte. Ein Post ist Text, den Sie bearbeiten können, er legt aber nur fest, wie die Bewegungen geschrieben werden; er kann den Werkzeugweg nicht ändern, keine Achsen hinzufügen und Ihre Maschine nicht kennen ([Postprozessoren](topic:post-processors) listet auf, was er nicht kann).

## Das Programm an eine Maschine senden

In CadCraft Studio auf dem Desktop erscheint, wenn eine Maschine in Studio eingerichtet ist, **An eine Maschine senden…** neben **G-Code herunterladen** und lädt dasselbe Programm auf die Maschine in Ihrem Netzwerk hoch. Es wird nie aus PartCraft gestartet: Starten Sie es an der Maschine, wenn alles klar ist. Im Browser wird die Schaltfläche nicht angezeigt (eine Webseite kann keine Maschine in Ihrem Netzwerk erreichen): Laden Sie stattdessen das Programm herunter.
