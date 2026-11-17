---
title: Umstieg von einem anderen parametrischen Modellierer
summary: Wie die Gewohnheiten von parametrischen Bauteil-Modellierern für den Desktop auf PartCraft abgebildet werden und welche Unterschiede erfahrene Nutzer in der ersten Stunde stolpern lassen.
keywords: Umstieg, migrieren, vertraut, Feature-Manager, Konstruktionsbaum, intelligente Bemaßung, Aufsatz-Extrusion, Abzug-Extrusion, Bohrungsassistent, Verbindungen, Interferenzerkennung, Rollback-Leiste, Eigenschaften-Manager, Maus, Unterschiede
from: fbacaee1
---

Wenn Sie Bauteile in SolidWorks konstruieren, werden Ihnen die meisten Ideen von PartCraft vertraut sein: Skizzen auf den Ebenen Vorne, Oben und Rechts, Abhängigkeiten und intelligente Bemaßungen, ein Feature-Verlauf mit einer Rollback-Leiste und Baugruppen, die über Verbindungen platziert werden. An einigen Stellen ist der Weg dorthin anders, und dieser erste Build kann weniger. Diese Seite bildet Ihre Gewohnheiten ab und listet die Überraschungen auf.

## Gewohnheiten, abgebildet

| Sie sind gewohnt | In PartCraft |
|---|---|
| Der Konstruktionsbaum links | Der Verlauf links: Ebenen, dann Features, Skizzen eingerückt unter dem Feature, das sie verwendet |
| Vorne-, Oben- und Rechtsebene | Dieselben drei, durch den Ursprung. Vorne ist die XY-Ebene, Oben ist XZ, Rechts ist YZ. Y zeigt nach oben. |
| Skizze auf einer Ebene oder Fläche, dann die Bestätigungsecke zum Verlassen | {{ui:Skizze}} ({{key:S}}) auf einer gewählten Ebene oder ebenen Fläche. {{ui:Beenden}} oder {{key:Esc}}, bis sie schließt |
| Intelligente Bemaßung | {{ui:Bemaßung}} ({{key:D}}). Klicken Sie auf ein oder zwei Elemente und dann auf die Stelle, an der die Zahl stehen soll. Wo Sie sie platzieren, bestimmt, ob sie horizontal, vertikal oder ausgerichtet ist |
| Abhängigkeiten im Eigenschaften-Manager hinzufügen | Elemente wählen, dann die Abhängigkeitsschaltflächen im rechten Bereich (Deckungsgleich, Horizontal, Parallel, Tangential, Gleich usw.) |
| Automatische Abhängigkeiten beim Skizzieren | Einrasten fügt Deckungsgleich-, Punkt-auf-Kurve-, Horizontal- und Vertikal-Abhängigkeiten hinzu |
| Blaue, schwarze und rote Skizzenfarben | Dieselbe Idee: blau unterbestimmt, schwarz vollständig bestimmt, rot überbestimmt. Der Chip zeigt die verbleibenden Freiheitsgrade |
| Mittellinie für Drehungen | {{ui:Mittellinie}} ({{key:N}}). {{ui:Drehung}} verwendet die erste Mittellinie, sofern Sie keine andere Achse wählen |
| Skizzenverrundung | {{ui:Verrundung}} ({{key:F}}) in einer Skizze: auf die Ecke klicken, Radius eingeben |
| Umschalter für Konstruktionsgeometrie | {{ui:Konstruktion}} ({{key:Q}}) |
| Extrudierter Aufsatz | {{ui:Extrusion}}: Blind, Mittelebene, Bis zu Fläche / nächster / Eckpunkt, Versatz von Fläche, zweite Richtung, Schräge, eine Kontur (Bereiche wählen) |
| Extrudierter Ausschnitt | {{ui:Ausschneiden}}: beginnt als Durch alle. Auf Blind umschalten für eine Tasche |
| Gedrehter Aufsatz oder Ausschnitt | {{ui:Drehung}} / {{ui:Mehr}} › {{ui:Dreh-Schnitt}} |
| Referenzebene, Achse, Punkt | {{ui:Mehr}} › {{ui:Ebene}}, {{ui:Achse}}, {{ui:Punkt}} (siehe [Referenzebenen, Achsen und Punkte](topic:reference-geometry)) |
| Sweep- oder Loft-Aufsatz oder -Ausschnitt, Formschräge | {{ui:Mehr}} › {{ui:Formschräge}} auf ebenen Flächen (siehe [Sweep, Loft und Formschräge](topic:sweep-loft-draft)). {{ui:Sweep}} und {{ui:Loft}} sind in dieser Version noch nicht umgesetzt, da sie einen exakten Kernel benötigen |
| Bohrungsassistent | {{ui:Bohrung}} an jedem losen Skizzenpunkt: einfach, Senkung, Kegelsenkung (90° / 82°) oder Gewinde nach ISO metrisch M2–M24, durchgehend oder als Sackloch |
| Lineares oder kreisförmiges Muster, Spiegeln | {{ui:Linear}}, {{ui:Kreisförmig}}, {{ui:Spiegeln}} (Features oder der gesamte Körper) |
| Verrundung und Fase an Kanten | {{ui:Verrundung}} / {{ui:Fase}}: auf eine Kante klicken, {{key:Shift}}+Klick für weitere, dann die Schaltfläche. Ein Radius; gleiche, Zwei-Abstands- oder Abstand-Winkel-Fasen. In dieser Version nur gerade Kanten zwischen zwei ebenen Flächen. Verrundungen, die an einer Ecke zusammentreffen, werden auf Gehrung geschnitten. Gekrümmte Kanten in der Skizze verrunden oder abschrägen ({{ui:Verrundung}} in einer Skizze, {{key:F}}) |
| Schale | {{ui:Schale}}: auf die ebenen Flächen klicken, die geöffnet werden sollen, dann die Schaltfläche. Eine Wandstärke |
| Eine STEP-Datei öffnen | {{ui:Öffnen}}: wird als Dreiecke gelesen, ein Volumenkörper zum Weiterbauen ([Eine STEP-Datei öffnen](topic:import-step)) |
| Feature bearbeiten, dann OK | Auf das Feature klicken, Zahlen rechts ändern. Es baut sich beim Tippen neu auf. Kein OK, kein Abbrechen: {{key:Mod+Z}} verwenden |
| Skizze bearbeiten | Doppelklick auf die Skizze im Verlauf |
| Neu berechnen | Automatisch nach jeder Änderung. Es gibt keine Taste zum Neuberechnen |
| Unterdrücken / Unterdrückung aufheben | {{ui:Unterdrücken}} / {{ui:Unterdrückung aufheben}} im rechten Bereich |
| Rollback-Leiste ziehen | {{ui:Bis hierhin zurückrollen}} an einem Feature. Klicken Sie auf „Rollback-Leiste · vorwärts rollen“, um zurückzukehren |
| Feature im Baum ziehen, um es neu anzuordnen | {{ui:Nach oben}} / {{ui:Nach unten}} oder {{key:Alt+Up}} / {{key:Alt+Down}}. Wird mit Begründung abgelehnt, wenn eine Abhängigkeit brechen würde |
| Bemaßungen durch Doppelklick am Modell bearbeiten | Feature wählen: Die Bemaßungen seiner Skizze werden im rechten Bereich aufgelistet |
| Verbindungen: deckungsgleich, konzentrisch, Abstand, Winkel | {{ui:Verbindung}} ({{key:J}}): auf jedem Bauteil eine ebene Fläche wählen. Die Verbindung legt sie Fläche auf Fläche. **Zentrieren auf** an einer Achse wirkt wie konzentrisch, **Versatz** wie Abstand, **Winkel** wie Winkel |
| Festes Bauteil | Das erste Bauteil ist fixiert. {{ui:Zum festen Bauteil machen}} ändert es |
| Bauteil einfügen | {{ui:Kopie}} oder {{ui:Duplizieren}} (eine weitere Kopie) oder {{ui:Einfügen}} (aus einer Bauteildatei) |
| Bauteil in der Baugruppe bearbeiten | {{ui:Bauteil}}, dann {{ui:Zurück}} |
| Interferenzerkennung | {{ui:Kollision}} |
| Komponente bewegen, um die Bewegung zu sehen | Den Winkel- oder Versatzregler eines Dreh- oder Schubgelenks ziehen. {{ui:Die Bewegung auf Kollisionen prüfen}} fährt es ab. Ein Bauteil ohne Verbindung: **Von Hand verschieben** (Pfeile zum Ziehen oder eingegebene Werte) |
| Messen / Prüfen | {{ui:Ansichten}}, dann {{ui:Messen}} ({{key:M}}): Abstände, Winkel, Radien, Flächen. {{ui:Masseneigenschaften}} |
| Explosionsansicht, Stückliste | In einer Baugruppe ohne Auswahl: **Explosionsansichten** und **Stückliste** im rechten Bereich |
| Masseneigenschaften | Das Feld **Bauteil**: Volumen, Oberfläche und Größe des facettierten Volumenkörpers (bei runden Bauteilen etwas zu niedrig). Keine Masse: Es gibt noch keine Materialien |
| Speichern, Speichern unter STEP | {{ui:Speichern}} lädt eine `.partcraft.json` herunter. {{ui:Exportieren}} bietet STL, 3MF, exaktes STEP (AP242 oder AP214), facettiertes STEP, DXF und eine PDF-Zeichnung |
| Aus dem Bauteil eine Zeichnung erstellen | {{ui:Zeichnung}}: ein automatisches A3-Blatt mit drei Ansichten, isometrisch, einem Schnitt, einem Detail, Bezugsebenen, Toleranzrahmen und Oberflächensymbolen. Nur Gesamtmaße werden bemaßt |
| Mittlere Maustaste zum Drehen | **Linksziehen** dreht hier. Mittel- oder Rechtsziehen verschiebt die Ansicht. Das Mausrad zoomt am Zeiger |
| Ansichtsausrichtung, Senkrecht ansehen | Menü {{ui:Ansichten}}. {{ui:Senkrecht ansehen}} für eine gewählte Fläche, Ebene oder Skizze |
| Auf Ansicht zoomen (F) | {{key:F}}, oder {{ui:Einpassen}} (in einer Skizze ist {{key:F}} das Verrundungswerkzeug) |
| Rechtsklickmenüs | Keine. Rechtsziehen verschiebt die Ansicht. In einer Skizze beendet ein Rechtsklick eine Linienkette |

:::tip
Wenn Ihre Hände SolidWorks kennen, wählen Sie in {{ui:Einstellungen}} › {{ui:PartCraft}} › {{ui:Menüs, Tasten und Maus}} den Menüstil {{ui:Feature-Baum}}: ein Menüband mit den Registerkarten Features, Skizze, Flächen, Auswerten, Zeichnung, Baugruppe und Ansicht. Die mittlere Taste umkreist, {{key:Shift}} und die mittlere Taste verschieben, und die linke Taste wählt nur aus. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).
:::

## Unterschiede, über die Menschen stolpern

**Das ganze Skizzenbild ist das Profil.** Extrusion und Drehung verwenden jede geschlossene Schleife in der Skizze. Sie können für ein Feature nicht eine einzelne Region oder eine Kontur einer Skizze wählen. Verwenden Sie eine Skizze pro Feature.

**Welche Skizze ein Feature übernimmt.** Ein Feature verwendet die Skizze, die Sie gerade geschlossen haben, oder die im Verlauf ausgewählte. Ohne Auswahl nimmt es die neueste Skizze, die noch kein Feature verwendet. Wenn Sie die falsche erhalten, wählen Sie die richtige Skizze und dann das Feature erneut.

**Änderungen gelten beim Tippen.** Es gibt keinen Feature-Dialog mit OK und Abbrechen. Jede Zahl baut sofort neu auf, und {{key:Mod+Z}} ist der Weg zurück. Die Rückgängig-Liste umfasst Skizzenbearbeitungen, Features und Einstellungen gleichermaßen.

**Überbestimmung wird nie stillschweigend geduldet.** Es gibt keine treibenden (Referenz-)Bemaßungen. Eine Bemaßung, die die anderen Abhängigkeiten bereits festlegen, wird als überbestimmt gemeldet („ist bereits impliziert. Löschen Sie sie.“). Eine widersprüchliche Bemaßung lässt die Geometrie unverändert und wird rot. Löschen Sie eine oder machen Sie es rückgängig.

**Sweeps und Lofts sind noch nicht umgesetzt. Verrundungen, Fasen, Schalen und Formschrägen haben Grenzen.** Diese Version von PartCraft baut jedes Bauteil mit einem Netz-Kernel. Der Chip in der Statusleiste zeigt immer „Netz-Kernel“. Verrundungen und Fasen funktionieren an geraden Kanten zwischen zwei ebenen Flächen. Wo Rundungen an einer Ecke zusammentreffen, werden sie auf Gehrung geschnitten, nicht verschmolzen. Schalen öffnen sich, und Formschrägen neigen nur ebene Flächen. Features, die einen exakten Kernel benötigen, bleiben anklickbar, sagen aber „noch nicht umgesetzt“, wenn sie gewählt werden. Siehe [Der Netz-Kernel](topic:solid-kernels) und [Was noch nicht umgesetzt ist](topic:not-built-yet).

**Zwei Schaltflächen namens Verrundung.** In einer Skizze rundet {{ui:Verrundung}} ({{key:F}}) eine Skizzenecke. Am Bauteil rundet die {{ui:Verrundung}} in der Gruppe Features gerade Kanten von Volumenkörpern (in dieser Version gerade Kanten zwischen ebenen Flächen). Es gibt in dieser Version keinen Sweep und keinen Loft: siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).

**Bohrungen brauchen freie Punkte.** {{ui:Bohrung}} bohrt an Punkten, die mit dem Punktwerkzeug erstellt wurden. Mittelpunkte von Kreisen und Linienenden zählen nicht.

**Durch alle gilt nur für Ausschnitte.** Ein Aufsatz benötigt eine Tiefe. Es gibt noch keine Endbedingungen „bis Eckpunkt“, „bis Fläche“ oder „nächste“.

**Der Volumenkörper ist facettiert.** Der Netz-Kernel baut runde Flächen aus ebenen Facetten. Ansicht, Volumina sowie STL- und 3MF-Exporte bestehen daher aus diesen Facetten. **Kurven** im Bauteilfeld macht sie feiner. Der exakte STEP-Export ist davon nicht betroffen: Er schreibt runde Flächen auf ihren wahren Oberflächen.

**Nur Millimeter.** Es gibt noch keine Einstellung für Zoll. Multiplizieren Sie Zollmaße mit 25.4, wenn Sie sie eingeben.

**Y zeigt nach oben.** Die Ebene Vorne ist Ihnen zugewandt, und Oben blickt auf das Bauteil herab, wie Sie es erwarten. Die Hochachse der Welt ist aber Y. STL-, 3MF- und exakte STEP-Exporte werden auf Z nach oben gedreht. Das facettierte STEP behält Y nach oben.

**Verbindungen sind Flächen, keine Geometriepaare.** Eine Verbindung beginnt immer mit zwei ebenen Flächen, die Fläche auf Fläche gelegt werden. Für einen Stift in einer Bohrung wählen Sie die ebene Fläche um die Bohrung und die Schulter des Stifts. Stellen Sie dann **Zentrieren auf** auf die Bohrungsachse und die Drehachse des Stifts ein. Bauteile, die keine Verbindung erreicht, bleiben dort, wo sie eingefügt wurden. Sie können sie nicht ziehen. Verbindungen in einer Schleife werden nicht gelöst.

**Speichern ist ein Download.** Es gibt keine Datei, die Sie immer wieder überschreiben. Jedes Speichern ist eine neue Datei in Ihrem Downloads-Ordner. Benennen Sie das Bauteil zuerst, und bewahren Sie Ihre Dateien in einem Projektordner auf.

**Keine Kontextmenüs, keine Befehlsmanager-Registerkarten.** Alles ist in der Symbolleiste und im rechten Bereich. Die Symbolleiste ändert sich mit dem, was Sie gerade tun: Die Skizzenwerkzeuge erscheinen nur in einer Skizze, die Baugruppenwerkzeuge nur in einer Baugruppe.

**Tasten sind in einer Skizze Einzelbuchstaben.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} und {{key:S}} wählen Werkzeuge ohne Modifikator. Siehe [Tasten und Maus](topic:keyboard).
