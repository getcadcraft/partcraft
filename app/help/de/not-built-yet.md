---
title: Was noch nicht umgesetzt ist
summary: Alles, was diese PartCraft-Version noch nicht kann, von verdrehten Sweeps bis zur Zoll-Anzeige, Zeichnungsbemaßungen und Unterbaugruppen, mit dem, was Sie heute stattdessen tun können.
keywords: fehlend, noch nicht, Grenzen, Einschränkungen, Fahrplan, exakter Geometriekern, Verrundung, Fase, Schale, Sweep, Loft, STEP-Import, Simulation, Fertigung, verdrehter Sweep, Loft-Endtangente, Flächenverrundung, Gleichungen, Zoll, Zeichnungsbemaßung, Unterbaugruppen, Cloud, Tablet, Telefon
from: 9b868162
---

PartCraft ist eine frühe Version. Diese Seite listet auf, was sie noch nicht kann, damit Sie nicht danach suchen, und was Sie heute stattdessen tun können. Nichts hier hat ein Datum.

## Benötigt einen exakten Geometriekern

Diese Version baut jedes Bauteil mit dem Netz-Geometriekern (siehe [Der Netz-Geometriekern](topic:solid-kernels)). Alles Folgende braucht einen exakten Geometriekern, den diese Version noch nicht hat. Bauteile, die mit diesen Features gespeichert wurden, öffnen sich weiterhin: die Features bleiben im Verlauf, als noch nicht umgesetzt markiert, und werden beim Speichern beibehalten.

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| {{ui:Verrundung}} und {{ui:Fase}} an runden Kanten; Verrundungen, deren Radius sich entlang der Kante ändert; Rundungen, die dort, wo sie zusammentreffen, weich ineinander übergehen (der Netz-Geometriekern schneidet sie auf Gehrung) | Verrundung und Fase funktionieren an geraden Kanten zwischen ebenen Flächen; andere Ecken vor dem Extrudieren in der Skizze abrunden ({{ui:Verrundung}} in einer Skizze, {{key:F}}) |
| {{ui:Schale}}, die gekrümmte Flächen öffnet; Wände mit unterschiedlicher Dicke | Ebene Flächen öffnen; Material mit Extrusionen hinzufügen, wo eine Wand dicker sein muss |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Formschräge}} auf gekrümmten Flächen; Extrusion bis zu einer Fläche, der nächsten Fläche oder einem Eckpunkt; verjüngte Extrusionen | Extrudieren oder drehen, wo nötig in Schritten; auf eine Tiefe extrudieren, die Sie messen |
| {{ui:Rippe}}, {{ui:Basisflansch}}, {{ui:Kantenflansch}} und Abwicklungen | Die Platte oder das Profil der Rippe extrudieren |
| Flächen: Eine {{ui:Form}} in das Bauteil übernehmen, {{ui:Flicken}}, {{ui:Loft-Fläche}}, {{ui:Gordon-Fläche}}, {{ui:Vernähen}}, {{ui:Verdicken}}, {{ui:Fläche versetzen}}, {{ui:Fläche verlängern}}, {{ui:Fläche stutzen}} | Nicht verfügbar |
| Mehrere Körper: {{ui:Kombinieren}}, {{ui:Körper bewegen}}, {{ui:Körper skalieren}}, {{ui:Pfadmuster}}, Features, die einen neuen Körper erzeugen | Ein Volumenkörper; Muster und Spiegelungen kopieren Features |
| Skizzen, Ebenen, Achsen und Punkte auf Flächen, die nur ein exakter Geometriekern finden kann (eine Fläche aus einer Verrundung, eine Bohrungswand, eine Fläche eines importierten Volumenkörpers) | Auf Grundebenen, Bezugsebenen und den ebenen Flächen von Extrusionen und Drehungen skizzieren |
| Ein Ergebnis des generativen Designs, das als Bauteil geöffnet oder hinzugefügt wird (es wird ein importierter Volumenkörper) | Das Ergebnis als STL oder STEP herunterladen |
| Bearbeiten der gekrümmten Flächen einer geöffneten STEP-Datei als exakte Flächen; exaktes STEP von Spline-, Sweep- und Drehflächen aus einer STEP-Datei, Spline-Seiten, modellierte Gewinde, STL-, OBJ- und 3MF-Körper sowie Baugruppen; STEP für andere Teilemodellierer | {{ui:Öffnen}} liest STEP als Dreiecke und behält für den Export die ebenen Flächen, Zylinder, Kegel, Kugeln und Tori der Datei ([STEP-Datei öffnen](topic:import-step)); {{ui:Exportieren}} › {{ui:STEP AP242 (exakter Volumenkörper)}} schreibt jede analytische Fläche exakt und behält diese als Facetten ([Exportieren](topic:export-files#for-other-cad-programs-step)); das Makro für ein anderes Teilemodellierprogramm schreibt weiterhin |
| Echte Bögen in Zeichnungsansichten | Ansichten und Schnittansichten werden aus den Facetten gezeichnet |
| Exakte Volumen, Flächen und Abstände | {{ui:Messen}} gibt die Zahlen des facettierten Volumenkörpers aus, bei runden Teilen etwas zu niedrig; eine feinere Einstellung **Kurven** bringt sie näher heran |

Einige Zeilen in den Tabellen unten schlagen eine dieser Funktionen als Umweg für etwas anderes vor. Diese Vorschläge gelten, sobald der exakte Geometriekern zurück ist.

## Features

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Flächenverrundungen, vollständige Rundungen, Verrundungen mit Radien, die an Punkten entlang einer Kante festgelegt werden | Konstante oder linear veränderliche {{ui:Verrundung}}; mehrere Verrundungs-Features |
| Schalen mit unterschiedlichen Wanddicken | Eine {{ui:Schale}}-Dicke; Material mit Extrusionen hinzufügen, wo eine Wand dicker sein muss |
| Formschräge an Freiform-Flächen (Spline) | {{ui:Formschräge}} funktioniert an ebenen, zylindrischen und konischen Flächen |
| Verdrehte Sweeps, Dünnwand- und Flächen-Sweeps; Endtangentialität beim Loft-Feature; ein Loft mit einer Führungsschiene; Spline-Pfade | {{ui:Sweep}} mit fester Ausrichtung oder einer Endskalierung; ein Loft mit zwei oder mehr Führungsschienen: siehe [Sweep, Loft und Formschräge](topic:sweep-loft-draft) |
| Rippen aus Bögen oder Splines; Rippen, die quadratisch zur Skizze wachsen (aus einer Draufsicht); Formschräge an Rippen; mehrere Rippen aus einer Skizze | {{ui:Rippe}} aus einer Linienkette in der eigenen Ebene der Rippe: siehe [Rippen und Knotenbleche](topic:rib) |
| „Bis zu“ einer gekrümmten Fläche, „bis zur nächsten“ mit Halt an einer gekrümmten Fläche | Bis zu einer ebenen Fläche oder einer Bezugsebene |
| Gegenbohrungen, Zoll- und Rohrgewinde, konische Gewinde, Gewindeauslauf und angefaste Gewindeanfänge | Senkung mit kleiner Tiefe; metrische ISO- und Trapezgewinde, kosmetisch oder modelliert: siehe [Gewinde an Wellen und Bohrungen, gezeichnet oder modelliert](topic:threads) |
| Extrusionen dünner Features | Beide Wände des Profils zeichnen |
| Musterkopien einzeln überspringen, Füllmuster | Getrennte Features verwenden; Muster entlang einer Kurve: {{ui:Pfadmuster}} |
| Kopierte Muster, Spiegelungen, Verrundungen, Fasen, Schalen und importierte Volumenkörper | Die Skizze oder das Feature kopieren, auf dem sie aufbauen, oder dieses mustern |
| Exakte (G1-)Tangentialität an den Ausnahmepunkten einer Form; Zusammenführen der Flächen einer Form zu größeren Flächen | Den Level der Form erhöhen: die angenäherten Flächen werden kleiner; siehe [Freiformen mit Form](topic:form-surfaces) |
| Eine Form aus mehreren getrennten geschlossenen Teilen in einem Feature; Brücken zwischen Formen | Ein geschlossenes Teil pro Form-Feature; mit Verbinden zusammenfügen |
| Flächenkörper in der Ansicht auswählen (außer Beschnitt- und Flickenpunkte); Flächenverrundungen; Beschnitt aufheben; G2-Flicken; Gordon-Flächen, die gekrümmte Nachbarn tangieren (Tangente an Ebenen und ebene Flächen ist umgesetzt) | Sie nach Namen im Panel des Features wählen; zuerst verdicken, dann den Volumenkörper verrunden |
| Eine Körperliste im Verlauf; ausgeblendete Körper aus Exporten weglassen | Körper in der Körperliste des Bauteil-Panels umbenennen und ausblenden; das Feature löschen oder unterdrücken, das einen Körper erzeugt, um ihn wegzulassen |
| Eine nicht gleichmäßige Skalierung, die Zylinder und Kegel analytisch hält; nicht gleichmäßige Skalierung von versetzten Flächen | {{ui:Körper skalieren}} macht gekrümmte Flächen zu geschlossenen B-Splines (innerhalb von 0.0000004 mm); eine gleichmäßige Skalierung bleibt exakt |
| Kombination von Flächenkörpern; Minkowski-Summen | {{ui:Vernähen}} oder {{ui:Verdicken}} zuerst, dann {{ui:Kombinieren}} |
| Toleranzanalyse: Toleranzketten mit Ecken (2D- und 3D-Vektorschleifen), aus der Geometrie berechnete Empfindlichkeiten, Monte-Carlo mit anderen Verteilungen, Maßtoleranzen an Skizzenbemaßungen, Bonustoleranz aus der Materialbedingung | {{ui:Toleranzkette}} in einer Baugruppe: eine Richtung, Worst Case und RSS, Toleranzen eingetippt, aus der Allgemeintoleranz des Schriftfelds oder aus GD&T-Rahmen: siehe [Toleranzketten](topic:tolerance-stackup) |
| Verschachtelung: Schnittreihenfolge und Anfahrten, gemeinsame Kanten einmal schneiden, Teile, die zusammenbleiben müssen; Reststücke von Rollen, Bestand, der zwischen Projekten geteilt wird | {{ui:Ebene Bauteile auf Tafeln verschachteln …}} mit Abstand, Randabständen, Drehungen und Faserrichtung: siehe [Ebene Bauteile auf Tafeln verschachteln](topic:nest-flat-parts); übrig gebliebene Platten werden aufbewahrt und zuerst verwendet: siehe [Verschnitt aufbewahren und wiederverwenden](topic:nest-offcuts); den Schnitt in der eigenen Software der Schneidmaschine planen |
| Blech: Säume, Versätze, Gehrungs- und Konturflansche; Flansche an gekrümmten Kanten oder an den Flächen eines gebogenen Basisflanschs; skizzierte Biegungen; Eckverschlüsse; Umformwerkzeuge; Umwandlung eines Volumenkörpers in Blech; die Abwicklung eines gebogenen Basisflanschs mit Ausschnitten; Biegetabellen | {{ui:Basisflansch}} (eine Platte oder ein gebogenes Profil), {{ui:Kantenflansch}} an geraden Kanten einer Platte mit Biegeentlastungen und die Abwicklung mit K-Faktor: siehe [Blech](topic:sheet-metal) |
| Formschrägenanalyse an Baugruppen; Trennlinie finden; Wanddickenanalyse | {{ui:Formschrägenanalyse}} am Bauteil im Arbeitsbereich Design: siehe [Formschräge für Formen und Guss prüfen](topic:draft-analysis); jedes Bauteil einer Baugruppe einzeln öffnen, um es zu prüfen |

## Skizzen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Ellipsen, tangentiale Bögen, Kegelschnitte, Splines mit festgelegtem Grad oder Gewichten (NURBS) | Splines (kubisch), Bögen und Kreise mit Tangentialbeziehungen |
| Ein Punkt auf einem Spline (eine Beziehung), Krümmungsbeziehungen (G2) | Den eigenen Punkt des Splines dort setzen, wo er durch muss |
| Versatz-Kopien von Splines, die spätere Änderungen mitführen; Versätze von Ketten mit scharfen Spline-Ecken | Nach der Änderung erneut versetzen; zuerst die Ecke abrunden |
| Musterkopien, die mit dem Original verbunden bleiben; Muster entlang einer Kurve | Nach einer Änderung erneut mustern |
| Projizieren von Freiform- oder schrägen Kreiskanten; projizierte Geometrie, die dem Bauteil folgt | Gerade und parallele Kreiskanten projizieren, dann bemaßen |
| Referenzbemaßungen (angetrieben) | Größen aus dem Panel oder den Bauteildaten ablesen |
| Kollineare Beziehungen | Parallel mit Abstand 0 |
| Einfügen in ein anderes Programm (die Zwischenablage des Systems) | DXF, STEP, STL oder 3MF exportieren |
| Bögen, relative oder polare Koordinaten eintippen | Linien und Kreise eintippen; Bögen mit dem Bogenwerkzeug zeichnen |
| Geometrie ohne Zeigegerät auswählen | Ein Klick oder Tipp ist nötig |

## Parameter und Einheiten

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Konfigurationen, die Materialien ändern; eine CSV-Konstruktionstabelle, die Features ausschaltet | Konfigurationen setzen Parameter und schalten Features ein und aus: siehe [Konfigurationen und Konstruktionstabellen](topic:design-tables); `partcraft variants` erstellt gespeicherte Konfigurationen nach Namen, auch mit ausgeschalteten Features: siehe [Varianten-Paket aus Ihren Konfigurationen erstellen](topic:variant-pack) |
| Gleichungen an den Zahlen der Feature-Panels der neuesten Features (Ebene, Sweep, Formschräge und ähnliche) | In einem Skript oder mit `partcraft set` schreiben ([Skripte und Befehlszeile](topic:scripts-and-cli)) |
| Ein Bauteil in Zoll angezeigt | Größen werden in Millimetern angezeigt; tippen Sie `2in` in ein Zahlenfeld oder einen Ausdruck, und es wird 50.8 |

## Dateien

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Bearbeiten der eigenen Features eines importierten STEP-Volumenkörpers (er kommt ohne Verlauf) | Material mit eigenen Features hinzufügen oder abtragen |
| Lesen von Farben, Namen, Baugruppenstruktur und PMI aus STEP | Nicht verfügbar |
| glTF-, OBJ-, IGES- und Parasolid-Export; DWG eines 3D-Bauteils (nur das Varianten-Paket schreibt eine DWG: das Zeichnungsblatt) | STL oder 3MF für Netze; STEP für Volumenkörper; DXF für 2D |
| Öffnen von IGES-, DXF- oder fremden Programmdateien (`.3dm`-Dateien öffnen sich als ein Körper: [Ein .3dm-Modell als Volumenkörper öffnen](topic:open-3dm-files)) | STEP anfragen oder eine geschlossene STL-, OBJ- oder 3MF-Datei: [STL, OBJ oder 3MF öffnen](topic:open-meshes) |
| Baugruppenstruktur (ein Baum mit Bauteilnamen) im exportierten STEP | Baugruppen-STEP ist ein Verbund der platzierten Volumenkörper |
| Speichern in einen Ordner Ihrer Wahl ohne den Browser-Download | „Nachfragen, wo gespeichert wird“ in den Download-Einstellungen des Browsers einschalten |

## Zeichnungen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Bemaßungen über die drei Gesamtmaße hinaus (Lochmaße, Positionen, Toleranzen an Maßen) | Das PDF markieren oder DXF exportieren und in einem 2D-CAD-Programm bemaßen |
| Mehr als ein Schnitt oder Detail; ausgerichtete, ausgebrochene und Hilfsansichten | Ein Schnitt und ein Detail pro Zeichnung |
| Freitext, Notizen und Tabellen auf dem Blatt (außer Schriftfeld und Änderungsblöcken) | Die Oberflächennotiz oder Text, der im PDF hinzugefügt wird |
| Projektion nach erstem Winkel, bewegliche Ansichten, Hochformat-Blätter | Dritter Winkel, automatische Anordnung, Querformat-Blätter A4–A0 und ANSI A–E |
| Live-Schnittansicht: mehrere Ebenen oder ein Schnittkasten gleichzeitig, eine Umrandung um den Schnitt, Speichern des Schnitts in der Datei | Eine Ebene zur Zeit über {{ui:Ansichten}} › {{ui:Schnittansicht}}; siehe [Mit einer Schnittansicht ins Innere sehen](topic:section-view) |
| Baugruppenzeichnungen mit mehr Ansichten, Bemaßungen oder verschiebbaren Positionsnummern | Eine isometrische (oder aufgelöste) Ansicht mit automatischen Positionsnummern und der Teileliste |
| Kopieren und Einfügen von GD&T- und Oberflächensymbolen | Jedes einzeln mit Bezug, Toleranzrahmen oder Oberfläche platzieren |
| Anleitungen: STEP-Dateien über {{ui:Aus einer anderen Datei…}} in Illustrate, ein Modell direkt aus ModelCraft oder BimCraft übergeben, Bilder in der Qualität des Pfadtracers, interaktive 3D-Ansicht in einem PDF | Das STEP im Arbeitsbereich Design öffnen und die Anleitung mit {{ui:Aus dem geöffneten Bauteil}} starten; das Modell als glTF (.glb) speichern; PNG-Bilder der 3D-Ansicht; die interaktive 3D-Datei: siehe [Eine Anleitung in Illustrate starten](topic:illustrate) |

## Baugruppen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Zahnrad-, Zahnstangen-, Nocken- und Schraubengelenke; ein Kugelgelenk, das auf einen Kegel begrenzt ist; Gelenke auf gekrümmten Flächen oder zwischen Punkten | Starre, Dreh-, Schieber-, Zylinder-, Ebenen-, Kugel- und Bolzen-in-Nut-Gelenke auf ebenen Flächen, jeder Wert mit eigenen Grenzen: siehe [Eine Baugruppe bauen](topic:build-assembly) |
| Aufgelöste Schritte, die Teile drehen, und das Ziehen von Teilen, die Gelenke platzieren | Gerade Zerlegungsschritte; ein Gelenk entfernen, um ein Teil von Hand zu verschieben |
| Unterbaugruppen | Nur eine Ebene von Teilen |
| Zahnräder, Nocken, Kontakt | Nicht verfügbar |

## Fertigung

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| 3D-Schruppen gekrümmter Flächen, adaptives 3D-Räumen, Restbearbeitung; Wasserlinien-, Bleistift-, radiale und spiralförmige Schlichtung; adaptive Durchgänge als Bögen geschrieben | 2.5-Achs-Fläche, Tasche, 2D-adaptiv, Kontur, Bohrung und Fase: siehe [Werkzeugwege und G-code erstellen](topic:manufacture); Parallel- und Scallop-Schlichtung des ganzen Modells: siehe [3D-Schlichten](topic:finish-3d) |
| 4- und 5-Achs-Werkzeugwege, Drehen, Antasten | Eine Seite nach der anderen einrichten, mit der Werkzeugachse auf der Registerkarte Aufspannung |
| Kollisionsprüfung von Halter und Schaft | Auf die Warnungen zur Schneidenlänge achten und in der Simulation Ihrer Steuerung prüfen |
| Antasten, Zyklen für Werkzeugstandzeit und Unterprogramme, 4. und 5. Achse sowie Drehcodes in einem Postprozessor; Laden fremder Postprozessor-Dateien | Einen Postprozessor im eigenen Format von PartCraft schreiben oder ändern: siehe [Postprozessoren, die Sie bearbeiten können](topic:post-processors) |
| Zoll-G-code (G20) | Nur Millimeter (G21) |

## Simulation und generatives Design

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Nichtlineare Untersuchungen: Fließen, große Verformungen, Kontakt zwischen Teilen, Ermüdung | Lineare Statik und Eigenfrequenzen: siehe [Spannung und Verformung prüfen](topic:simulation); den Sicherheitsfaktor deutlich über 1 halten |
| Nichtlineares Knicken (Imperfektionen, Nachknicken, Durchschnappen) | Lineare Knicklastfaktoren mit großzügiger Reserve: siehe [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling) |
| Strahlung zwischen Flächen (Sichtfaktoren), Kontaktwiderstand, temperaturabhängige Materialien, Trägheit bei thermischer Spannung (thermische Stoßwellen) | Strahlung an die Umgebung, stationäre oder quasi-statische thermische Spannung über die Zeit, konstante Eigenschaften: siehe [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling) |
| Automatische Verfeinerung für instationäre Wärme und Untersuchungen mit thermischer Last; das Netz dort gröber machen, wo der Fehler klein ist; ein Ziel an einer lokalen Größe (die Spitzenspannung an einer Stelle) | **Automatisch verfeinern** für statische, Knick-, Eigenfrequenz- und stationäre thermische Untersuchungen, anhand des Fehlers über das ganze Bauteil: siehe [Spannung und Verformung prüfen](topic:simulation); sonst die Elementgröße verkleinern |
| Lager- und Schraubenlasten, Fernkräfte, Momente, Federn, vorgeschriebene Verschiebungen | Kräfte und Drücke auf Flächen, Schwerkraft; feste und reibungsfreie Flächen |
| Simulation von Baugruppen; Materialien, die sich je nach Richtung unterscheiden (gedruckte Schichten, Verbundwerkstoffe) | Ein Teil, ein isotropes Material |
| Mehrere Löser-Threads für Tetraeder-Untersuchungen, Wärmeübertragung und generatives Design; beliebige Threads auf einer Seite, die nicht cross-origin-isoliert ist | Voxel-Untersuchungen, Knicken, Spannung über die Zeit und laminare Strömung nutzen die Threads, wo die Seite es erlaubt: siehe [PartCraft-Einstellungen](topic:settings) |
| Turbulente Strömung mit Konstruktionsgenauigkeit (das Spalart-Allmaras-Modell ist als experimentell enthalten: Rohrreibung 30 bis 34 % zu hoch, Wiederanlegen nach einer Rückwärtsstufe 21 bis 39 % zu kurz; geplant: feinere Zellen an den Wänden), Wärme in der Strömung, instationäre (zeitgenaue) Strömung, freie Oberflächen, nicht-newtonsche Fluide, rotierende Teile | Laminare, stationäre, isotherme Strömung eines newtonschen Fluids oder das experimentelle Turbulenzmodell für qualitative Muster: siehe [Strömung simulieren](topic:flow-simulation); das Panel warnt, wenn die Reynolds-Zahl über den laminaren Bereich hinausgeht |
| Spannungsgrenzen und Fertigungsregeln (Überhänge, Frässrichtungen) im generativen Design; mehrere Materialien in einer Form | Steifste Form für ein Volumen; das Ergebnis in Simulation prüfen: siehe [Eine Form aus Lasten wachsen lassen](topic:generative-design) |
| Ein Ergebnis als bearbeitbarer (glatter, parametrischer) Volumenkörper | STL, facettiertes STEP oder ein Bauteil mit dem Ergebnis als importiertem facettiertem Volumenkörper |
| Auslegung elektrischer Maschinen: ein Rotor, der sich in einem Stator dreht, Drehmoment über dem Winkel, sättigender Stahl, Magnete, die jenseits ihres Knickpunkts an Stärke verlieren, Wirbelströme sowie Eisen- und Kupferverluste; Magnetfelder in 3D oder auf gekrümmten Netzen | Lineare 2D-Magnetostatik auf einem Raster in der Analysebibliothek: Spulen, Eisen, Dauermagnete auf ihrer Rücklinie, Spalte, Induktivität und Zugkraft: siehe [Magnetfelder in 2D](topic:magnetic-fields-2d) |

## Skripte

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Hilfe beim Darüberfahren, Haltepunkte und schrittweises Ausführen im Skripteditor | Suchen, Einklappen und Vervollständigen sind vorhanden (siehe [Skripte schreiben und ausführen](topic:craftscript)); für den Rest Ihr eigener Editor: {{ui:Speichern}} und {{ui:Öffnen}} in der Gruppe Skript bringen Skripte hinein und heraus; eingebaute Funktionen sind aufgelistet in [Die CraftScript-Sprache](topic:craftscript-language) |
| Haltepunkte und schrittweises Durchlaufen eines Skripts | `disp` und `fprintf` unterwegs; {{key:Mod+Enter}} führt einige markierte Zeilen auf einmal aus |
| Felder und Diagramme, die ein Skript zeigt, werden im Arbeitsbereich Design gezeichnet; Skripte, die Parameter des Bauteils ändern | Sie erscheinen im Arbeitsbereich Script; Skripte lesen Parameter mit `param` (siehe [Skripte schreiben und ausführen](topic:craftscript)) und ändern sie auf der Registerkarte {{ui:Parameter}} |
| Bilder und Tabellen neben Diagrammen; Bearbeiten eines Diagramms (Zoom, Achsengrenzen) vor dem Speichern | Nebeneinander zeigt die Diagramme; ein Diagramm als PNG, SVG oder CSV speichern und anderswo fertigstellen |
| numpy und andere Python-Pakete; Python offline; Python im Editor einklappen; Pascal Script | Die Standardbibliothek von Python, CraftScript und Lua: siehe [Skripte in Python](topic:craftscript-python) |
| Lua-Funktionen an eingebaute Funktionen übergeben; eine Bibliotheksfunktion aus Lua über einen Namen aufrufen, der erst beim Ausführen des Skripts entsteht | Den Namen der Bibliotheksfunktion im Skript schreiben (`cs.static_tet(…)`) oder sie aus einem CraftScript-Skript aufrufen |

## Die App

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Cloud-Speicherung, Teilen und Versionsverlauf | Noch nicht verfügbar. Dateien auf Ihrem Computer speichern und Versionen nach Namen behalten |
| PartCraft als installierte App auf iPad und iPhone | PartCraft im Browser des Geräts verwenden; auf Android und auf dem Desktop läuft es auch in CadCraft Studio (getcadcraft.com/download) |
| Kontextmenüs (Rechtsklick) | Symbolleiste und rechtes Panel |
| Vollständig offline arbeiten ab einem frischen Start | Nur wenn die App für die Offline-Nutzung gespeichert wurde: siehe [Offline arbeiten](common:offline) |

Melden Sie, was Sie am meisten vermissen, über die Support-Seite der Website: Das bestimmt, was als Nächstes kommt.

## Engineer (Generatoren und Felder)

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Anschlüsse, Armaturen und Fittings am erzeugten Wärmetauscher; Temperaturkurven für die Materialfestigkeit; Verluste an T-Stücken im Verteiler | Die Generatoren erstellen den Kern und die Rohre; Fittings im Arbeitsbereich Design ergänzen; die Raumtemperaturwerte des Materials mit einem Sicherheitsfaktor verwenden |
| Generatoren mit einem Klick aus dem Add-on-Verzeichnis hinzufügen | {{ui:Öffnen}} im Arbeitsbereich Engineer fügt einen Generator aus einer Datei hinzu |
| Eine Feldatei, die feiner ist als die Voxelgröße des Generators; das Einlesen von `.vdb`-Dateien | Ein feineres Feld aus einem Skript speichern; `.vdb` wird geschrieben, nicht gelesen |
| Berechnungen nach Druckbehälter-Normen | Die Lehrbuchformeln für dünne und dicke Wände mit dem Sicherheitsfaktor, den Sie wählen; keine Normmarge |
| Generatoren für die anderen Apps | Nur PartCraft in dieser Version |
