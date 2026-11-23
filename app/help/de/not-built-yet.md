---
title: Was noch nicht umgesetzt ist
summary: Alles, was dieser PartCraft-Build noch nicht kann, von verdrehenden Sweeps bis zur Zollanzeige, Bemaßung in Zeichnungen und Unterbaugruppen, mit dem, was Sie heute stattdessen tun können.
keywords: fehlend, noch nicht, Grenzen, Einschränkungen, Roadmap, exakter Kern, Verrundung, Fase, Schale, Sweep, Loft, STEP-Import, Simulation, Fertigung, verdrehender Sweep, Loft-Endtangente, Flächenverrundung, Gleichungen, Zoll, Bemaßung in Zeichnungen, Unterbaugruppen, Cloud, Tablet, Smartphone
from: 97b10a29
---

PartCraft ist eine frühe Version. Diese Seite listet auf, was sie noch nicht kann, damit Sie nicht danach suchen, und was Sie heute stattdessen tun können. Nichts hier hat ein Datum.

## Braucht einen exakten Kern

Diese Version erstellt jedes Bauteil mit dem Netzkern (siehe [Der Netzkern](topic:solid-kernels)). Alles Folgende braucht einen exakten Geometriekern, den diese Version noch nicht hat. Teile, die mit diesen Funktionen gespeichert wurden, öffnen sich weiterhin: Die Funktionen bleiben im Verlauf, als nicht umgesetzt markiert, und werden beim Speichern beibehalten.

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| {{ui:Fillet}} und {{ui:Chamfer}} an runden Kanten; Verrundungen, deren Radius sich entlang der Kante ändert; Verrundungen, die dort, wo sie zusammentreffen, sanft ineinander übergehen (der Netzkern schneidet sie auf Gehrung) | {{ui:Fillet}} und {{ui:Chamfer}} funktionieren an geraden Kanten zwischen ebenen Flächen; runden Sie andere Ecken in der Skizze ab, bevor Sie extrudieren ({{ui:Fillet}} in einer Skizze, {{key:F}}) |
| {{ui:Shell}} beim Öffnen gekrümmter Flächen; Wände unterschiedlicher Dicke | Ebene Flächen öffnen; Material mit Extrusionen hinzufügen, wo eine Wand dicker sein muss |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} auf gekrümmten Flächen; Extrusion bis zu einer Fläche, zur nächsten Fläche oder bis zu einem Eckpunkt; konische Extrusionen | Extrudieren oder drehen, bei Bedarf in Schritten; auf eine Tiefe extrudieren, die Sie vorher gemessen haben |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} und Abwicklungen | Die Platte oder das Profil der Rippe extrudieren |
| Flächen: ein {{ui:Form}} in das Bauteil übernehmen, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Nicht verfügbar |
| Mehrere Körper: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, Features, die einen neuen Körper erzeugen | Ein Volumenkörper; Muster und Spiegeln kopieren Features |
| Skizzen, Ebenen, Achsen und Punkte auf Flächen, die nur ein exakter Kern finden kann (eine Fläche aus einer Verrundung, eine Lochwand, eine Fläche eines importierten Volumenkörpers) | Auf Grundebenen, Bezugsebenen und den ebenen Flächen von Extrusionen und Drehungen skizzieren |
| Ein Ergebnis des generativen Designs, das als Bauteil geöffnet oder ihm hinzugefügt wird (es wird zu einem importierten Volumenkörper) | Ergebnis als STL oder STEP herunterladen |
| Gekrümmte Flächen einer geöffneten STEP-Datei als exakte Flächen bearbeiten; exaktes STEP von Spline-, Sweep- und Drehflächen aus einer STEP-Datei, Spline-Seiten, modellierte Gewinde, STL-, OBJ- und 3MF-Körper sowie Baugruppen; STEP für andere Teilemodellierer | {{ui:Open}} liest STEP als Dreiecke und behält die ebenen Flächen, Zylinder, Kegel, Kugeln und Tori der Datei für den Export ([Eine STEP-Datei öffnen](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} schreibt jede analytische Fläche exakt, die übrigen als Facetten ([Exportieren](topic:export-files#for-other-cad-programs-step)); das Makro für einen anderen Teilemodellierer schreibt weiterhin |
| Echte Bögen in Zeichnungsansichten | Ansichten und Schnittansichten werden aus den Facetten gezeichnet |
| Exakte Volumen, Flächen und Abstände | {{ui:Measure}} gibt die Zahlen des facettierten Volumenkörpers aus, bei runden Teilen etwas zu niedrig; eine feinere Einstellung **Kurven** bringt sie näher heran |

Einige Zeilen in den Tabellen unten schlagen eine dieser Funktionen als Umweg für etwas anderes vor. Diese Vorschläge gelten, sobald ein exakter Kern verfügbar ist.

## Features

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Flächenverrundungen, vollrunde Verrundungen, Verrundungen mit an Punkten entlang einer Kante festgelegten Radien | Konstante oder lineare variable {{ui:Fillet}}; mehrere Verrundungs-Features |
| Schalen mit unterschiedlichen Wanddicken | Eine {{ui:Shell}}-Dicke; Material mit Extrusionen hinzufügen, wo eine Wand dicker sein muss |
| Formschräge auf Freiformflächen (Spline) | {{ui:Draft}} funktioniert auf ebenen, zylindrischen und konischen Flächen |
| Verdrehende Sweeps, Dünnwand- und Flächen-Sweeps; Endtangentialität am Loft-Feature; ein Loft mit einer Führungsschiene; Spline-Pfade | {{ui:Sweep}} mit fester Ausrichtung oder einer Endskalierung; ein Loft mit zwei oder mehr Führungsschienen: siehe [Sweep, Loft und Formschräge](topic:sweep-loft-draft) |
| Rippen aus Bögen oder Splines; Rippen, die rechtwinklig zur Skizze wachsen (aus einer Draufsicht); Formschräge an Rippen; mehrere Rippen aus einer Skizze | {{ui:Rib}} aus einer Kette von Linien in der eigenen Ebene der Rippe: siehe [Rippen und Knotenbleche](topic:rib) |
| „Bis“ zu einer gekrümmten Fläche, „Bis nächste“ mit Halt an einer gekrümmten Fläche | Bis zu einer ebenen Fläche oder einer Bezugsebene |
| Gegenbohrungen, Zoll- und Rohrgewinde, kegelige Gewinde, Gewindeausläufe und gefaste Gewindeanfänge | Senkung mit geringer Tiefe; metrische ISO- und Trapezgewinde, gezeichnet oder modelliert: siehe [Gewinde an Wellen und Bohrungen, gezeichnet oder modelliert](topic:threads) |
| Dünne Feature-Extrusionen | Beide Wände des Profils zeichnen |
| Einzeln übersprungene Musterkopien, Füllmuster | Separate Features verwenden; Muster entlang einer Kurve: {{ui:Path pattern}} |
| Kopieren von Mustern, Spiegelungen, Verrundungen, Fasen, Schalen und importierten Volumenkörpern | Die Skizze oder das Feature kopieren, auf dem sie aufbauen, oder es mustern |
| Exakte (G1-)Tangentialität an den Sonderpunkten einer Form; Zusammenführen der Flicken einer Form zu größeren Flächen | Die Stufe der Form erhöhen: die angenäherten Flicken werden kleiner; siehe [Freiformen mit Form](topic:form-surfaces) |
| Eine Form aus mehreren getrennten geschlossenen Teilen in einem Feature; Brücken zwischen Formen | Je Form-Feature ein geschlossenes Teil; sie mit **Verbinden** zusammenfügen |
| Flächenkörper in der Ansicht anklicken (außer Trimm- und Flickpunkten); Flächenverrundungen; Trimmung aufheben; G2-Flicken; Gordon-Flächen, die gekrümmte Nachbarn tangieren (Tangentialität zu Ebenen und ebenen Flächen ist umgesetzt) | Im Panel des Features nach Namen wählen; zuerst verdicken, dann den Volumenkörper verrunden |
| Eine Körperliste im Verlauf; ausgeblendete Körper aus Exporten weglassen | Körper in der Körperliste des Bauteil-Panels umbenennen und ausblenden; das Feature löschen oder unterdrücken, das einen Körper erzeugt hat, um ihn wegzulassen |
| Eine ungleichmäßige Skalierung, die Zylinder und Kegel analytisch hält; ungleichmäßige Skalierung versetzter Flächen | {{ui:Scale body}} macht gekrümmte Flächen zu geschlossenen B-Splines (innerhalb von 0.0000004 mm); eine gleichmäßige Skalierung bleibt exakt |
| Flächenkörper kombinieren; Minkowski-Summen | {{ui:Stitch}} oder {{ui:Thicken}} zuerst, dann {{ui:Combine}} |
| Toleranzanalyse: Toleranzketten, die Ecken abbiegen (2D- und 3D-Vektorschleifen), aus der Geometrie berechnete Empfindlichkeiten, Monte-Carlo mit anderen Verteilungen, Maßtoleranzen an Skizzenbemaßungen, Bonustoleranz aus dem Materialzustand | {{ui:Stack-up}} in einer Baugruppe: eine Richtung, Worst Case und RSS, eingegebene Toleranzen, aus der Allgemeintoleranz des Schriftfelds oder aus GD&T-Rahmen: siehe [Toleranzketten](topic:tolerance-stackup) |
| Verschachtelung: Schnittreihenfolge und Anfahrten, gemeinsame Kanten nur einmal schneiden, Teile, die zusammenbleiben müssen; Reststücke von Rollen, Rohmaterial, das Projekte teilen | {{ui:Nest flat parts on sheets…}} mit Abstand, Rändern, Drehungen und Faserrichtung: siehe [Ebene Bauteile auf Tafeln verschachteln](topic:nest-flat-parts); übrige Platten werden aufbewahrt und zuerst verwendet: siehe [Reste aufbewahren und wiederverwenden](topic:nest-offcuts); planen Sie den Schnitt in der Software Ihrer Schneidemaschine |
| Blech: Umkantungen, Kröpfungen, Gehrungs- und Konturflansche; Flansche an gekrümmten Kanten oder an den Flächen eines gebogenen Basisflansches; skizzierte Biegungen; Eckabschlüsse; Umformwerkzeuge; Umwandlung eines Volumenkörpers in Blech; die Abwicklung eines gebogenen Basisflansches mit Ausschnitten; Biegetabellen | {{ui:Base flange}} (eine Platte oder ein gebogenes Profil), {{ui:Edge flange}} an geraden Kanten einer Platte mit Biegeentlastungen und die Abwicklung mit K-Faktor: siehe [Blech](topic:sheet-metal) |
| {{ui:Draft analysis}} an Baugruppen; Auffinden der Trennlinie; Wanddickenanalyse | {{ui:Draft analysis}} am Bauteil im Design: siehe [Formschräge für Spritzguss und Guss prüfen](topic:draft-analysis); jedes Teil einer Baugruppe öffnen und prüfen |

## Skizzen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Ellipsen, tangentiale Bögen, Kegelschnitte, Splines mit festem Grad oder Gewichten (NURBS) | Splines (kubisch), Bögen und Kreise mit Tangential-Abhängigkeiten |
| Ein Punkt auf einem Spline (eine Abhängigkeit), Krümmungs-(G2-)Abhängigkeiten | Den eigenen Punkt des Splines dort setzen, wo er verlaufen muss |
| Versetzte Kopien von Splines, die spätere Änderungen mitführen; Versätze von Ketten mit scharfen Spline-Ecken | Nach der Änderung erneut versetzen; die Ecke zuerst abrunden |
| Musterkopien, die mit dem Original verknüpft bleiben; Muster entlang einer Kurve | Nach einer Änderung neu mustern |
| Projizieren von Freiform- oder geneigten Kreiskanten; projizierte Geometrie, die dem Bauteil folgt | Gerade und parallele Kreiskanten projizieren, dann bemaßen |
| Getriebene (Referenz-)Bemaßungen | Größen aus dem Panel oder den Bauteildaten ablesen |
| Kollineare Abhängigkeiten | Parallel mit Abstand 0 |
| Einfügen in ein anderes Programm (über die Zwischenablage des Systems) | DXF, STEP, STL oder 3MF exportieren |
| Bögen, relative oder Polarkoordinaten eingeben | Linien und Kreise eingeben; Bögen mit dem Bogen-Werkzeug zeichnen |
| Geometrie ohne Zeiger auswählen | Ein Klick oder Tippen ist nötig |

## Parameter und Einheiten

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Konfigurationen, die Materialien ändern; eine CSV-Konstruktionstabelle, die Features ausschaltet | Konfigurationen setzen Parameter und schalten Features ein und aus: siehe [Konfigurationen und Konstruktionstabellen](topic:design-tables); `partcraft variants` erstellt gespeicherte Konfigurationen nach Namen, auch mit ausgeschalteten Features: siehe [Eine Variantenmappe aus Ihren Konfigurationen erstellen](topic:variant-pack) |
| Gleichungen für die Zahlen in den eigenen Panels der neuesten Features (Ebene, Sweep, Formschräge und ähnliche) | In einem Skript oder mit `partcraft set` schreiben ([Skripte und Befehlszeile](topic:scripts-and-cli)) |
| Ein Bauteil in Zoll angezeigt | Größen werden in Millimetern angezeigt; tippen Sie `2in` in ein Zahlenfeld oder einen Ausdruck, und es wird 50.8 |

## Dateien

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Die eigenen Features eines importierten STEP-Volumenkörpers bearbeiten (er kommt ohne Verlauf an) | Material mit eigenen Features hinzufügen oder abtragen |
| Farben, Namen, Baugruppenstruktur und PMI aus STEP lesen | Nicht verfügbar |
| glTF-, OBJ-, IGES- und Parasolid-Export; DWG eines 3D-Bauteils (nur die Variantenmappe schreibt eine DWG: das Zeichnungsblatt) | STL oder 3MF für Netze; STEP für Volumenkörper; DXF für 2D |
| IGES-, DXF- oder eigene Dateien anderer Programme öffnen (`.3dm`-Dateien öffnen als ein Körper: [Ein .3dm-Modell als Volumenkörper öffnen](topic:open-3dm-files)) | Fragen Sie nach STEP oder einem geschlossenen STL-, OBJ- oder 3MF-Netz: [Ein STL, OBJ oder 3MF öffnen](topic:open-meshes) |
| Baugruppenstruktur (ein Baum mit Bauteilnamen) im exportierten STEP | Baugruppen-STEP ist ein Verbund der platzierten Volumenkörper |
| Speichern in einem Ordner Ihrer Wahl ohne Browser-Download | „Vor dem Speichern nach dem Speicherort fragen“ in den Download-Einstellungen des Browsers einschalten |

## Zeichnungen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Bemaßungen über die drei Gesamtmaße hinaus (Lochgrößen, Positionen, Maßtoleranzen) | Das PDF markieren oder als DXF exportieren und in einem 2D-CAD-Programm bemaßen |
| Mehr als ein Schnitt oder Detail; ausgerichtete, Ausbruch- und Hilfsansichten | Ein Schnitt und ein Detail je Zeichnung |
| Freier Text, Notizen und Tabellen auf dem Blatt (außer dem Schriftfeld und den Revisionsblöcken) | Der Oberflächenhinweis oder Text, der im PDF ergänzt wird |
| Projektion nach Erstem Winkel, bewegliche Ansichten, Hochformat-Blätter | Dritter Winkel, automatische Anordnung, Querformat-Blätter A4–A0 und ANSI A–E |
| Live-Schnittansicht: mehrere Ebenen oder eine Schnittbox gleichzeitig, eine Umrandung um den Schnitt, Speichern des Schnitts in der Datei | Eine Ebene zur Zeit über {{ui:Views}} › {{ui:Section view}}; siehe [In eine Schnittansicht hineinsehen](topic:section-view) |
| Baugruppenzeichnungen mit mehr Ansichten, Bemaßungen oder verschiebbaren Positionsballons | Eine isometrische (oder explodierte) Ansicht mit automatischen Positionsballons und der Teileliste |
| Kopieren und Einfügen von GD&T- und Oberflächensymbolen | Jedes mit Bezug, Rahmen oder Oberfläche platzieren |
| Handbücher: STEP-Dateien unter {{ui:From another file…}} in Illustrate, ein Modell, das direkt aus ModelCraft oder BimCraft übergeben wird, Bilder in der Qualität des Pfadverfolgers, interaktive 3D in einem PDF | Das STEP im Design öffnen und das Handbuch über {{ui:From the open part}} starten; das Modell als glTF (.glb) speichern; PNG-Bilder der 3D-Ansicht; die interaktive 3D-Datei: siehe [Ein Handbuch in Illustrate starten](topic:illustrate) |

## Baugruppen

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Zahnrad-, Zahnstangen-, Nocken- und Schraubengelenke; ein Kugelgelenk, auf einen Kegel begrenzt; Gelenke auf gekrümmten Flächen oder zwischen Punkten | Starr-, Dreh-, Schub-, Zylinder-, Ebenen-, Kugel- und Bolzen-in-Nut-Gelenke auf ebenen Flächen, jeder Wert mit eigenen Grenzen: siehe [Eine Baugruppe bauen](topic:build-assembly) |
| Explosionsschritte, die Teile drehen, und das Ziehen von Teilen, die Gelenke platzieren | Gerade Explosionsschritte; ein Gelenk entfernen, um ein Teil von Hand zu bewegen |
| Unterbaugruppen | Nur eine Ebene von Teilen |
| Zahnräder, Nocken, Kontakt | Nicht verfügbar |

## Fertigung

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| 3D-adaptives Schruppen und versetztes Schruppen in 3D; Waterline-, Pencil-, radiales und spiralförmiges Schlichten; adaptive Bahnen als Bögen geschrieben | 3D-Schruppen in geraden Reihen und Restbearbeitung: siehe [3D-Schruppen und Restbearbeitung](topic:rough-3d); Parallel- und Scallop-Schlichten: siehe [3D-Schlichten](topic:finish-3d); 2.5-Achs-Operationen {{ui:Face}}, {{ui:Pocket}}, 2D-{{ui:Adaptive}}, {{ui:Contour}}, {{ui:Drill}} und {{ui:Chamfer}}: siehe [Werkzeugwege und G-Code erstellen](topic:manufacture) |
| Mantelfräsen (Swarf), Flusslinien- und Mehrachs-Schruppbahnen, Codes für geneigte Arbeitsebenen (G68.2), Kollisionsprüfungen von Halter und Maschine; eine Simulation von 5-Achs- und Rundachsschnitten | Ein geneigtes Werkzeug für jede Operation, 5-Achs-Schlichten mit einem Kugelfräser und Schlichten mit der 4. Achse (Rundachse): siehe [4- und 5-Achs-Bearbeitung](topic:multi-axis) |
| Ausdrehen und Innengewinde auf einer Drehmaschine, G71/G76-Zyklen, Bögen in Drehbahnen, angetriebene Werkzeuge, eine Gegenspindel | Außendrehen: Planen, Schruppen, Schlichten, Stechen, Abstechen, Gewinde, Anbohren: siehe [Drehen auf einer Drehmaschine](topic:turning) |
| Antasten eines Winkels oder einer Ecke, ein Werkzeugmesstaster, Messen eines Maßes gegen eine Toleranz | Antasten einer Fläche, einer Seite, eines Lochs oder eines Ansatzes, um den Werkstücknullpunkt festzulegen: siehe [Antasten](topic:probing) |
| Kollisionsprüfungen von Halter und Schaft | Auf Warnungen zur Schneidenlänge achten und in der Simulation Ihrer Steuerung prüfen |
| Standzeit- und Unterprogrammzyklen in einem Post; das Laden von Postdateien anderer Programme | Einen Post im eigenen Format von PartCraft schreiben oder ändern: siehe [Postprozessoren, die Sie bearbeiten können](topic:post-processors) |
| G-Code in Zoll (G20) | Nur Millimeter (G21) |

## Simulation und generatives Design

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Nichtlineare Studien: Fließen, große Verformungen, Kontakt zwischen Teilen, Ermüdung | Lineare Statik und Eigenfrequenzen: siehe [Spannung und Durchbiegung prüfen](topic:simulation); halten Sie den Sicherheitsfaktor deutlich über 1 |
| Nichtlineares Knicken (Imperfektionen, Nachknicken, Durchschlagen) | Lineare Knicklastfaktoren mit großzügigem Abstand: siehe [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling) |
| Strahlung zwischen Flächen (Sichtfaktoren), Kontaktwiderstand, temperaturabhängige Werkstoffe, Trägheit bei thermischer Spannung (thermische Stoßwellen) | Strahlung an die Umgebung, stationäre oder quasistatische thermische Spannung über die Zeit, konstante Eigenschaften: siehe [Wärme, thermische Spannung und Knicken](topic:thermal-and-buckling) |
| Automatische Verfeinerung für instationäre Wärme und Studien mit thermischer Last; ein gröberes Netz, wo der Fehler klein ist; ein Ziel auf einer lokalen Größe (die Spitzenspannung an einer Stelle) | **Automatisch verfeinern** für statische, Knick-, Eigenfrequenz- und stationäre thermische Studien, auf den Fehler über das ganze Bauteil: siehe [Spannung und Durchbiegung prüfen](topic:simulation); andernfalls die Elementgröße verkleinern |
| Lager- und Schraubenlasten, entfernte Kräfte, Momente, Federn, vorgegebene Verschiebungen | Kräfte und Drücke auf Flächen, Schwerkraft; feste und reibungsfreie Flächen |
| Simulation von Baugruppen; Werkstoffe, die sich je nach Richtung unterscheiden (gedruckte Schichten, Verbundwerkstoffe) | Ein Teil, ein isotroper Werkstoff |
| Mehrere Löser-Threads für Tetraeder-Studien, Wärmeübertragung und generatives Design; Threads auf einer Seite, die nicht cross-origin-isoliert ist | Voxel-Studien, Knicken, Spannung über die Zeit und laminare Strömung nutzen die Threads, wo die Seite es erlaubt: siehe [PartCraft-Einstellungen](topic:settings) |
| Turbulente Strömung mit Entwurfsgenauigkeit (das Spalart–Allmaras-Modell ist als experimentell enthalten: Rohrreibung 30 bis 34 % zu hoch, Wiederanlegen nach einer Rückwärtsstufe 21 bis 39 % zu kurz; geplant: feinere Zellen nahe den Wänden), Wärme in der Strömung, instationäre (zeitgenaue) Strömung, freie Oberflächen, nicht-newtonsche Fluide, rotierende Teile | Laminare, stationäre, isotherme Strömung eines newtonschen Fluids oder das experimentelle Turbulenzmodell für qualitative Muster: siehe [Strömung simulieren](topic:flow-simulation); das Panel warnt, wenn die Reynolds-Zahl über den laminaren Bereich hinausgeht |
| Spannungsgrenzen und Fertigungsregeln (Überhänge, Frässrichtungen) im generativen Design; mehrere Werkstoffe in einer Form | Steifste Form für ein Volumen; das Ergebnis in der Simulation prüfen: siehe [Eine Form aus Lasten wachsen lassen](topic:generative-design) |
| Ein Ergebnis als bearbeitbarer (glatter, parametrischer) Volumenkörper | STL, facettiertes STEP oder ein Bauteil mit dem Ergebnis als importierter facettierter Volumenkörper |
| Entwurf elektrischer Maschinen: ein Rotor, der sich im Stator dreht, Drehmoment über dem Winkel, sättigender Stahl, Magnete, die jenseits ihres Knickpunkts an Stärke verlieren, Wirbelströme sowie Eisen- und Kupferverluste; Magnetfelder in 3D oder auf gekrümmten Netzen | Lineare 2D-Magnetostatik auf einem Gitter in der Analysebibliothek: Spulen, Eisen, Permanentmagnete auf ihrer Rückstelllinie, Spalte, Induktivität und Zugkraft: siehe [Magnetfelder in 2D](topic:magnetic-fields-2d) |

## Skripte

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Hilfe beim Darüberfahren, Haltepunkte und schrittweises Ausführen im Skript-Editor | Suchen, Einklappen und Vervollständigen sind vorhanden (siehe [Skripte schreiben und ausführen](topic:craftscript)); für den Rest Ihr eigener Editor: {{ui:Save}} und {{ui:Open}} in der Gruppe Skript verschieben Skripte hinein und heraus; eingebaute Funktionen stehen in [Die CraftScript-Sprache](topic:craftscript-language) |
| Haltepunkte und schrittweises Durchlaufen eines Skripts | `disp` und `fprintf` unterwegs; {{key:Mod+Enter}} führt einige markierte Zeilen auf einmal aus |
| Felder und Diagramme, die ein Skript zeigt, im Arbeitsbereich Design gezeichnet; Skripte, die die Parameter des Bauteils ändern | Sie erscheinen im Arbeitsbereich Skript; Skripte lesen Parameter mit `param` (siehe [Skripte schreiben und ausführen](topic:craftscript)) und ändern sie auf der Registerkarte {{ui:Parameters}} |
| Bilder und Tabellen neben Diagrammen; Bearbeiten eines Diagramms (Zoom, Achsengrenzen) vor dem Speichern | Nebeneinander zeigt die Diagramme; speichern Sie ein Diagramm als PNG, SVG oder CSV und bearbeiten Sie es anderswo fertig |
| numpy und andere Python-Pakete; Python offline; Einklappen von Python im Editor; Pascal Script | Die Standardbibliothek von Python, CraftScript und Lua: siehe [Skripte in Python](topic:craftscript-python) |
| Lua-Funktionen an eingebaute Funktionen übergeben; eine Bibliotheksfunktion aus Lua über einen Namen aufrufen, der erst während des Skriptlaufs entsteht | Den Namen der Bibliotheksfunktion ins Skript schreiben (`cs.static_tet(…)`) oder sie aus einem CraftScript-Skript aufrufen |

## Die App

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Cloud-Speichern, Teilen und Versionsverlauf | Noch nicht verfügbar. Speichern Sie Dateien auf Ihrem Computer und führen Sie Versionen nach Namen |
| PartCraft als installierte App auf iPad und iPhone | Verwenden Sie PartCraft im Browser des Geräts; auf Android und dem Desktop läuft es auch in CadCraft Studio (getcadcraft.com/download) |
| Kontextmenüs (Rechtsklick) | Symbolleiste und rechtes Panel |
| Vollständig offline von einem frischen Start aus arbeiten | Nur wenn die App für die Offline-Nutzung gespeichert wurde: siehe [Offline arbeiten](common:offline) |

Melden Sie, was Sie am meisten vermissen, über die Support-Seite der Website: Sie bestimmt, was als Nächstes kommt.

## Engineer (Generatoren und Felder)

| Noch nicht umgesetzt | Stattdessen heute |
|---|---|
| Sammler, Anschlüsse und Fittings am erzeugten Wärmetauscher; Temperaturkurven für die Werkstofffestigkeit; T-Stück-Verluste im Verteiler | Die Generatoren bauen den Kern und die Rohre; Fittings in Design hinzufügen; die Kennwerte des Werkstoffs bei Raumtemperatur mit einem Sicherheitsfaktor verwenden |
| Generatoren mit einem Klick aus dem Add-on-Verzeichnis hinzufügen | {{ui:Open}} im Arbeitsbereich Engineer fügt einen Generator aus einer Datei hinzu |
| Eine Felddatei feiner als die eigene Voxelgröße des Generators; das Lesen von `.vdb`-Dateien | Ein feineres Feld aus einem Skript speichern; `.vdb` wird geschrieben, nicht gelesen |
| Berechnungen nach Druckbehälternorm | Die Lehrbuchformeln für dünne und dicke Wand mit dem von Ihnen gewählten Sicherheitsfaktor; keine Normreserve |
| Generatoren für die anderen Apps | Nur PartCraft in dieser Version |
