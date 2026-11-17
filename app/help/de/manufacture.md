---
title: Werkzeugwege und G-Code erstellen (Manufacture)
summary: Rohteil und Werkstücknullpunkt einrichten, Werkzeuge wählen, Fläche-, Tasche-, Kontur-, Bohren- und Fase-Operationen durch Wählen von Flächen hinzufügen, das ganze Modell in 3D fertig bearbeiten (Parallel, Scallop), das Rohteil gegen das Modell auf Überschnitte und Zykluszeit simulieren und G-Code aus einem der drei eingebauten Postprozessoren oder einem selbst bearbeiteten herunterladen.
keywords: exakt STEP, STEP für die Werkstatt, Werkstückkoordinaten, CAM-Übergabe, Parallel, Scallop, 3D-Schlichten, Schlichten, Kugelfräser, Werkzeugbibliothek, Postprozessor bearbeiten, eigener Postprozessor, Postprozessor-Editor, Adaptiv, adaptives Schruppen, konstanter Eingriff, trochoidal, HSM, Hochgeschwindigkeitsbearbeitung, Manufacture, CAM, Werkzeugweg, G-Code, NC, CNC, Fräsen, Tasche, Kontur, Profil, Planen, Bohren, Peck, G83, G81, G73, Fase, Rohteil, Werkstückversatz, G54, Postprozessor, GRBL, LinuxCNC, Vorschub und Drehzahl, Simulation, Überschnitt, Zykluszeit
from: beeb29aa
---

Der Arbeitsbereich Manufacture macht aus dem Bauteil Werkzeugwege für eine 3-Achsen-Fräsmaschine und schreibt sie als G-Code. Die meisten Operationen sind **2.5-Achsen**: Das Werkzeug bleibt senkrecht, Wände werden gerade nach unten und Böden flach geschnitten. **Parallel** und **Scallop** schlichten gekrümmte Flächen in 3D (siehe [3D-Schlichten](topic:finish-3d)); das Werkzeug bleibt senkrecht (drei Achsen, kein Kippen). Es arbeitet auf den benannten Flächen, die der Mesh-Kern dem Bauteil gibt (siehe [Der Mesh-Kern](topic:solid-kernels)).

Laborversion: Prüfen Sie jedes Programm im eigenen Simulator Ihrer Steuerung und lassen Sie es zuerst in der Luft über dem Rohteil laufen.

## Einrichten

1. Wählen Sie **Manufacture** im Arbeitsbereich-Umschalter, dann {{ui:Neue Aufspannung}}.
2. Wählen Sie auf der Registerkarte **Aufspannung**:
   - **Werkzeugachse (+Z)**: in welche Richtung das Werkzeug in das Bauteil zeigt. Welt +Y (oben in PartCraft) ist der Standard; dann ist die X-Achse der Maschine die Welt-X und die Y-Achse der Maschine die Welt −Z.
   - **Werkstücknullpunkt (G54)**: eine Ecke oder die Mitte des Rohteils, oben oder unten, die Mitte oben am Modell oder der Ursprung des Modells.
   - **Rohteil**: ein Quader oder ein Zylinder, entweder das Modell plus Aufmaße (seitlich, oben, unten) oder eine feste Größe.
   - **Material** (setzt die Start-Vorschübe und Drehzahlen), der **Postprozessor** (Steuerung), die maximale Spindeldrehzahl der Maschine, die Eilgangrate und die Werkzeugwechselzeit, Kühlmittel und die Programmnummer.

## Werkzeuge

Die Registerkarte **Werkzeuge** enthält die Bibliothek: Schaftfräser, Kugelfräser und Eckradiusfräser, Bohrer, Fasenfräser und Planfräser, jeweils mit einer T-Nummer, Durchmesser, Schneidenzahl und Schneidenlänge (plus Eckenradius, Spitz- oder Fasenwinkel, wo zutreffend).

Meine Werkzeuge lassen sich im Browser speichern und als Datei zwischen Computern verschieben: siehe [Die Werkzeugbibliothek](topic:tool-library).

Spindeldrehzahl und Vorschub kommen aus dem Material: n = 1000 × Schnittgeschwindigkeit / (π × Durchmesser), Vorschub = n × Schneiden × Vorschub pro Zahn (Bohrer: n × Vorschub pro Umdrehung). Die Werte sind vorsichtige Startwerte aus veröffentlichten Bereichen, nicht auf Ihre Maschine abgestimmt; geben Sie Schnittgeschwindigkeit, Vorschub pro Zahn, U/min oder Vorschub Ihres Werkzeugherstellers ein, um sie zu überschreiben. Übersteigt die Drehzahl das Maximum der Maschine, wird sie dort gehalten und der Vorschub folgt, sodass der Vorschub pro Zahn erhalten bleibt.

## Operationen hinzufügen

Jede Schaltfläche der Symbolleiste fügt eine Operation hinzu und beginnt, wo Geometrie nötig ist, mit dem Wählen: Klicken Sie Flächen oder Kanten in der Ansicht an (ein erneuter Klick nimmt eine wieder weg), dann {{ui:Wählen beenden}} oder {{key:Esc}}.

| Operation | Wahl | Was sie tut |
|---|---|---|
| {{ui:Fläche}} | nichts | Zickzack-Bahnen über das ganze Rohteil, über seine Ränder hinaus, bis zur Oberseite des Modells |
| {{ui:Tasche}} | eine ebene Bodenfläche, ein rundes Loch oder eine geschlossene Kette von Kanten | Räumt den Bereich in Offset-Bahnen von innen nach außen, bei jeder Tiefenzustellung; Inseln (Flächen, die im Boden aufstehen) bleiben stehen; ein Boden, der ringsum offen ist (außen liegt nichts höher), wird bis zur Rohteilkante ausgeräumt |
| {{ui:Adaptiv}} | wie Tasche | Räumt denselben Bereich in Bahnen, die jeweils eine festgelegte Breite schneiden (**Eingriff**, ein Bruchteil des Durchmessers), sodass der Fräser nie einen vollbreiten Schlitz nimmt, auch nicht in Ecken; er fährt über eine Helix ein und schlichtet die Wände auf jeder Ebene. Schmale Schnitte erlauben eine tiefere Zustellung und einen höheren Vorschub |
| {{ui:Kontur}} | eine ebene Fläche (ihre Kontur), eine runde Fläche oder Kanten | Folgt der Kontur, versetzt um den Werkzeugradius, außen oder innen, mit An- und Abfahrbögen und optionalen Haltestegen |
| {{ui:Bohren}} | Löcher (klicken Sie auf die Wand oder den Rand eines Lochs) | Bohrt jedes Loch mit einem Festzyklus: Peck (G83), Bohren (G81) oder Spanbruch (G73); oder geben Sie einen Durchmesser an, um jedes Loch dieser Größe zu bohren |
| {{ui:Fase}} | die Kontur einer Fläche oder Kanten | Fährt einen Fasenfräser entlang der Kante, sodass er die eingestellte Breite schneidet |
| {{ui:Parallel}} | nichts (das ganze Modell) | 3D-Schlichten in Parallellinien unter beliebigem Winkel, folgt der Oberfläche mit einem Kugel-, Eckradius- oder Schaftfräser. Siehe [3D-Schlichten](topic:finish-3d) |
| {{ui:Scallop}} | nichts (das ganze Modell) | 3D-Schlichten in Bahnen mit festem Abstand über die Oberfläche, damit der Grat zwischen ihnen die gewünschte Höhe hat |

Wählen Sie eine Operation in der Liste, um Werkzeug, Höhen (Freifahrt, Rückzug, Vorschubhöhe, oben, unten), Tiefenzustellung, Seitenzustellung, Aufmaß, Schlichtdurchgang, Eintritt (Helix, Rampe oder Eintauchen), Gleichlauffräsen, Haltestege oder Zyklus zu ändern. {{ui:Hoch}} und {{ui:Runter}} ordnen um, {{ui:Unterdrücken}} lässt sie aus, {{ui:Löschen}} entfernt sie. Alles ist im Verlauf für Rückgängig gespeichert und in der Bauteildatei.

Die Seitenzustellung einer Tasche beträgt höchstens die Hälfte des Werkzeugdurchmessers, damit jeder Punkt ihres Bodens innerhalb eines Werkzeugradius von einer Bahn liegt. Innere Ecken behalten den Radius des Werkzeugs.

**Adaptives Schruppen** hält den Eingriff des Fräsers nahe an einem Wert. Ein Eingriff von 0.15 des Durchmessers entspricht einem Eingriffswinkel von etwa 46°: dem Bogen der Schneidenkante im Material. Ein Taschenfräsen mit Versatz dagegen schneidet beim ersten Durchgang die volle Breite und umschlingt in jeder Innenecke weiter. Zwischen den Durchgängen bleibt das Werkzeug unten, wo es durch geschnittene Luft fährt, und hebt und senkt sich sonst in geschnittener Luft. Die Durchgänge werden auf einem feinen Raster über dem Bereich berechnet (Zellen etwa ein Zwölftel des Werkzeugradius), daher kann der Eingriff bis zu etwa eine Zelle breiter werden als eingestellt; die Wände werden exakt geschlichtet. Ein großer offener Bereich ergibt ein langes Programm mit vielen kurzen Bewegungen.

## Simulieren

Werkzeugwege werden nach jeder Änderung neu erstellt (das Bauteil auch). {{ui:Simulieren}} zeigt außerdem das Rohteil, das nach dem ganzen Programm übrig bleibt. Das Panel zeigt:

- **Zykluszeit**: Vorschubbewegungen mit ihrem Vorschub, Eilgänge als gerade Linien mit der Eilgangrate der Aufspannung, plus die Werkzeugwechselzeit. Echte Maschinen beschleunigen, daher brauchen sie länger.
- **Überschnitte**: Stellen, an denen das Werkzeug mehr als 0.02 mm unter die Oberfläche des Bauteils gefahren ist. Rote Markierungen zeigen sie in der Ansicht.
- **Verbleibendes Rohteil** am Bauteil.

Das Rohteil ist eine Höhenkarte der Oberseite (eine Z-Map) und kann daher keine Hinterschneidungen zeigen. Ziehen Sie **Wiedergabe**, um das Werkzeug entlang des Programms zu bewegen. In der Ansicht sind Vorschubbewegungen durchgezogen und Eilgänge gestrichelt, mit einer Farbe pro Operation.

Ist **Simuliertes Rohteil anzeigen** aktiviert, wird das Rohteil Zelle für Zelle gegen das Modell eingefärbt: **grün**, wo es auf dem Modell liegt (innerhalb von 0.02 mm), **rot**, wo das Werkzeug in das Modell geschnitten hat, und **gelb** für eine dünne Restschicht, **orange** für mehr, verblassend zum **Grau** des ungeschnittenen Rohteils ab 1 mm oder mehr. Die Farben werden bei jeder Änderung aus derselben Höhenkarte neu berechnet wie die Zahlen im Panel, daher stimmen Grün und Rot mit der Zeile Überschnitte überein. Eine Fase schneidet absichtlich in das Modell und zeigt entlang ihrer Kante Rot.

## G-Code ausgeben

Wählen Sie die Steuerung unter **Postprozessor** und drücken Sie {{ui:G-Code herunterladen}} (oder {{ui:Postprozessor}} in der Symbolleiste):

| Steuerung | Datei | Hinweise |
|---|---|---|
| Fanuc-artiges ISO | .nc | %, O-Nummer, Zeilennummern, T M6 mit G43 H, Festzyklen |
| GRBL | .nc | Kein Werkzeugwechsler und keine Festzyklen: Ein Werkzeugwechsel hält mit M0 an, Bohren wird als einfache Bewegungen geschrieben |
| LinuxCNC | .ngc | T M6 mit G43 H, Festzyklen, M2 |
| Eigener | beliebig | Ein Postprozessor, den Sie geschrieben oder geändert haben: {{ui:Post bearbeiten…}}, {{ui:Neuer Post…}}, {{ui:Postdatei importieren…}} |

Jede Datei beginnt mit Kommentaren zu Programm, Rohteil, Werkstückversatz und Werkzeugen. Koordinaten stehen in Millimetern mit 3 Nachkommastellen. {{ui:Werkzeugweg-CSV}} und {{ui:Werkzeugweg-JSON}} exportieren die Bewegungen selbst.

**Prüfen Sie die Ausgabe im eigenen Simulator Ihrer Maschine, bevor Sie schneiden, und lassen Sie sie zuerst in der Luft über dem Rohteil laufen.** Die drei eingebauten Postprozessoren sind Ausgangspunkte, die dem dokumentierten Verhalten der Steuerungen folgen; sie wurden auf keiner bestimmten Maschine erprobt. Einen Postprozessor, den Sie ändern, müssen Sie selbst erproben. Wie man einen schreibt: [Postprozessoren](topic:post-processors).

## Exaktes STEP für die Werkstatt

Unter den G-Code-Schaltflächen auf der Registerkarte **Operationen** lädt {{ui:Exakt als STEP (Werkstückkoordinaten)}} `<part>-work.step` herunter: das Bauteil als exakter Volumenkörper (echte Zylinder für Löcher und Zapfen, echte Kreise für ihre Kanten), mit seinem Ursprung am Werkstücknullpunkt dieser Aufspannung und Z entlang der Werkzeugachse. Das sind die Koordinaten, die der G-Code verwendet, daher richtet sich das CAM-Programm oder Prüfwerkzeug einer Werkstatt auf das Programm aus, ohne das Modell zu verschieben. Die Datei enthält nur das Bauteil, nicht das Rohteil oder die Werkzeugwege.

{{ui:Export}} › {{ui:STEP AP242 (exakter Volumenkörper)}} schreibt denselben Volumenkörper in der eigenen Lage des Bauteils (Z oben): siehe [Export für den Druck, STEP und DXF](topic:export-files#for-other-cad-programs-step).

## Grenzen

- Taschen, Konturen, Bohrungen und Fasen sind 2.5-achsig. Gekrümmte Flächen können in 3D geschlichtet werden ([Parallel und Scallop](topic:finish-3d)), aber nicht in 3D vorgeschruppt (ein Kegel bleibt als Stufen, bis Sie ihn schlichten), und es gibt keine Restbearbeitung. Adaptives Schruppen ist 2D (ebene Böden).
- Nur drei Achsen: kein Kippen, kein Drehen, keine Prüfung.
- Halter und Schäfte werden nicht auf Kollisionen geprüft; eine Warnung erscheint, wenn ein Schnitt tiefer ist als die Schneidenlänge.
- Vorschübe und Drehzahlen sind Startwerte. Ein Postprozessor ist bearbeitbarer Text, bestimmt aber nur, wie die Bewegungen geschrieben werden; er kann den Werkzeugweg nicht ändern, keine Achsen hinzufügen und Ihre Maschine nicht kennen ([Postprozessoren](topic:post-processors) listet auf, was er nicht kann).

## Das Programm an eine Maschine senden

In CadCraft Studio auf dem Desktop erscheint, wenn eine Maschine in Studio eingerichtet ist, **An eine Maschine senden…** neben **G-Code herunterladen** und lädt dasselbe Programm auf die Maschine in Ihrem Netzwerk hoch. Es wird nie aus PartCraft gestartet: Starten Sie es an der Maschine, wenn alles klar ist. Im Browser wird die Schaltfläche nicht angezeigt (eine Webseite kann keine Maschine in Ihrem Netzwerk erreichen): Laden Sie das Programm stattdessen herunter.
