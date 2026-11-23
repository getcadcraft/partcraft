---
title: Neuerungen in 0.9 (früher)
summary: PartCraft 0.9 bringt Verrundungen zwischen Flächen und das Verdicken zu Volumenkörpern, Baugruppen mit Tausenden Teilen, einen Dokumenten-Tresor mit Revisionen, ein Add-on für Spannungsanalyse mit FEM, zehn Bogenmethoden, britische Stahlprofile sowie eine Druckphase und Harzdruck-Add-ons.
keywords: Neuerungen 0.9, früher veröffentlicht, Neuerungen, Versionshinweise, Änderungsprotokoll, 0.9, Verrundung zwischen Flächen, Rollkugel, mehrere Kanten verrunden, verdicken, Volumenkörper aus Flächen, STEP-Schale, IGES-Volumenkörper, Scan-Verrundungen, große Baugruppe, vereinfachte Anzeige, 20000 Teile, Dokumente, Tresor, Auschecken, Revision, Freigabe, Verwendungsnachweis, Rhino-Verbindung, Grasshopper, 3dm, Cursor, Fertigungshalle, Auftragswarteschlange, Solid FEM, Finite Elemente, von Mises, Eigenfrequenz, Bogenmethoden, 3-Punkt-Bogen, britische Stahlprofile, Blue Book, Druckphase, Harz, GOO, CTB, Druckbett, flach legen, Neuerungen, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Live-Analyse, beim Bearbeiten aktualisieren, Bruch, was versagt zuerst, Lastfaktor, nichtlinear, Fließen, plastische Dehnung, Kontakt, CalculiX, Bewegungsstudie, Freiraum, Flächen, NURBS, Glätten, Rumpf, Zebra, Engineer, Generator, erzeugter Körper, Skizze aus Foto, Maßstab für den Druck, Teilen für den Druck, Schrumpfung, verschachtelte Tafeln, G-Code, Zeichnung, Löcher bemaßen, Assistent, MCP, Sprachen, Symbolleistenzeilen
from: 1dafd7c8
---

Das ist, was sich in PartCraft 0.9 gegenüber 0.8.1 geändert hat. Freiformflächen schließen sich jetzt zu Volumenkörpern, Baugruppen mit Tausenden Teilen bleiben bedienbar, ein Dokumenten-Tresor bewahrt Revisionen, und ein Solid-FEM-Add-on prüft die Spannung in einem Bauteil. Jeder Punkt sagt, wo Sie ihn finden.

## Neu in 0.9.1

- **Exakter STEP-Export.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} und {{ui:STEP AP214 (exact solid)}} funktionieren jetzt. Löcher, Ansätze, Verrundungen, Kegel, Kugeln und Tori werden auf ihren echten Flächen geschrieben, mit echten Kreisen als Kanten, sodass ein anderes CAD- oder CAM-Programm ein Loch als Loch erkennt. Spline-Seiten, modellierte Gewinde und importierte Netze bleiben im selben Volumenkörper ebene Facetten. Siehe [Exportieren für den Druck, STEP und DXF](topic:export-files#for-other-cad-programs-step).
- **STEP hinein, exaktes STEP heraus.** Eine STEP-Datei, die Sie öffnen, behält ihre eigenen ebenen Flächen, Zylinder, Kegel, Kugeln und Tori, sodass {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} sie als echte Flächen zurückschreibt statt als Facetten: Der Träger eines Lieferanten mit Schraubenlöchern geht mit denselben Flächen hinaus, mit denen er kam, plus allem, was Sie hineingeschnitten haben. Spline-, Sweep- und Drehflächen der Datei bleiben Facetten, ebenso Volumenkörper aus STL, OBJ und 3MF. Öffnen Sie die STEP-Datei erneut für ein früher gespeichertes Bauteil. Siehe [Eine STEP-Datei öffnen und darauf aufbauen](topic:import-step).
- **Echte Kreise in der DXF der Fläche.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} mit einer gewählten ebenen Fläche schreibt jetzt runde Löcher als Kreise, mit dem eigenen Mittelpunkt und Radius des Lochs, für einen Laser-, Plasma- oder Wasserstrahltisch. Andere runde Kanten bleiben Facetten.
- **Exaktes STEP für die Werkstatt.** In {{ui:Manufacture}} schreibt {{ui:Exact STEP (work coordinates)}} das Bauteil mit seinem Ursprung am Werkstücknullpunkt der Aufspannung und Z entlang der Werkzeugachse, also in den Koordinaten, die der G-Code verwendet. Siehe [Werkzeugwege und G-Code erstellen](topic:manufacture#exact-step-for-the-shop).

## Neu

### Flächen und Volumenkörper

- **Verrundung zwischen Flächen.** Wählen Sie {{ui:Surfaces}} im Feld {{ui:Workspace}} und dann {{ui:Fillet between faces}}. Wählen Sie die zwei Flächen eines Volumenkörpers, tippen Sie den Radius ein (und {{ui:Radius at the end (mm, 0 = the same)}} für einen Radius, der sich entlang der Kante ändert). Die Ergebniszeile sagt, wie weit die Verrundung von der idealen Rollkugel abweicht; ein Radius, der nicht passt, wird mit der genannten Fläche abgelehnt. {{ui:Fillet several edges}} verrundet viele Kanten in einem Schritt; setzen Sie {{ui:Corners (sphere patch where three meet)}} für eine Kugelecke, wo drei verrundete Kanten ebener Flächen zusammentreffen. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Verdicken zu einem Volumenkörper.** {{ui:Thicken into a solid}} im selben Arbeitsbereich gibt einer Fläche eine Dicke; {{ui:Other side}} lässt sie in die andere Richtung wachsen. Eine Faltung oder Selbstkreuzung wird mit der Fläche und der genannten Stelle abgelehnt.
- **Volumenkörper aus Flächen.** Getrimmte Flächen können mit Vereinigung, Differenz und Schnittmenge verbunden und als ein Rückgängig-Schritt in das Bauteil übernommen werden. STEP schreibt einen Volumenkörper als eine geschlossene Schale und IGES als einen Volumenkörper; beide lesen als Volumenkörper zurück. Passen die Flächen nicht Kante für Kante zusammen, bekommt die Datei getrennte Flächen, und die Statuszeile sagt es. Volumenkörper lassen sich auch im Knoten-Editor erstellen; siehe [Knoten-Editor](topic:nodes).
- **Randverrundungen und variable Verrundungen in Scans.** Wenn Sie Flächen an einen Scan anpassen, werden auch Randverrundungen (Tori) und Verrundungen mit variablem Radius entlang einer ziemlich geraden Kante gesucht und mit ihrem Radius aufgelistet. Getestet wurde es nur an erfundenen Scans.

### Baugruppen, Dokumente und Verknüpfungen

- **Große Baugruppen.** Teile, die Kopien sind, teilen sich ein Netz, und {{ui:Views}} › {{ui:Lightweight display}} zeichnet Quader, sodass die Ansicht flüssig bleibt (es schaltet sich bei sehr großen Baugruppen selbst ein; Auswahl und Gelenke nutzen weiterhin die echten Teile). Die Teilestruktur zeigt ihre ersten Zeilen und eine Schaltfläche {{ui:Weitere 700 anzeigen}} für den Rest. Baugruppendateien dürfen bis zu 50,000 Instanzen und 100,000 Gelenke enthalten. Siehe [Eine Baugruppe bauen](topic:build-assembly).
- **Dokumente.** {{ui:Documents…}} in der Gruppe **Datei** öffnet ein Dialogfeld über einem Projektordner: Auschecken und Einchecken, Revisionsbuchstaben, Zustände (in Arbeit, zur Prüfung, freigegeben, veraltet), Verlauf, Verwendungsnachweis und Stückliste. Siehe [Dokumente und Revisionen (der Tresor)](topic:documents-walkthrough).
- **Live-Rhino-Verbindung.** Ein Skript, `cadcraft_link.py`, beobachtet ein Rhino- oder Grasshopper-Dokument und überträgt nur das Geänderte nach PartCraft, wo sich ein importiertes Feature auf die neue Form umbaut. Sie läuft nur in eine Richtung und braucht Studio. Siehe [Live-.3dm-Verbindung](topic:live-3dm-link).
- **Die Cursor der anderen sehen.** In einer gemeinsamen Sitzung wird der Cursor jeder Person mit ihrem Namen und dem Feature angezeigt, das sie gewählt hat. Siehe [Gemeinsam live arbeiten](topic:work-live).
- **Fertigungshalle.** Schalten Sie das Add-on Fertigungshalle in {{ui:Settings}} › {{ui:Add-ons}} ein. Nach dem Ausgeben eines Programms in {{ui:Manufacture}} bietet sein Reiter {{ui:Zur Auftragswarteschlange hinzufügen}} oder {{ui:Als Auftragsdatei speichern}} an. Es sendet oder startet nie eine Maschine.

### Analyse und Bauteile

- **Solid-FEM-Add-on.** Schalten Sie {{ui:Solid FEM}} in {{ui:Settings}} › {{ui:Add-ons}} ein (es ist aus, bis Sie es einschalten), dann erscheint in der rechten Leiste ein Reiter {{ui:Solid FEM}}. {{ui:Bauteil vernetzen}}, wählen Sie feste Flächen und Lasten in der 3D-Ansicht, {{ui:Solve}}, und zeichnen Sie Verschiebung, Vergleichsspannung nach von Mises oder eine Eigenform mit {{ui:Am Modell anzeigen}}. Siehe [Solid FEM: eine Spannungsprüfung](topic:solid-fem-check).
- **Bogen in Skizzen, auf zehn Arten.** Der Pfeil neben {{ui:Arc}} in der Skizzen-Symbolleiste listet 3-Punkt, Start-Mitte-Ende, Start-Mitte-Winkel, Start-Mitte-Länge, Start-Ende-Winkel, Start-Ende-Richtung, Start-Ende-Radius, Mitte-Start-Ende, Mitte-Start-Winkel, Mitte-Start-Länge und Fortsetzen. Siehe [Einen Bogen auf zehn Arten zeichnen](topic:sketch-arc-methods).
- **Britische Stahlprofile.** Schweißkonstruktionen können 976 britische Profile verwenden (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); tippen Sie eine Größe wie `305x165x40 UB` ein. Siehe [Stahlbauteile](topic:structural-members).

### Drucken

- **Druckphase.** Die Schaltfläche {{ui:Print stage}} in der Symbolleiste (Add-on 3D-Druck, standardmäßig an) legt die Körper Ihres Bauteils auf ein gestricheltes Druckbett: {{ui:Lay flat}}, 90° drehen, Auf dem Bett anordnen, Alle auf dem Bett einpassen, Schichten vorschauen, dann {{ui:An 3D-Drucker senden}} über USB, Klipper (Moonraker), OctoPrint oder PrusaLink. Nichts wird gesendet, bis Sie bestätigen, und Ihr Bauteil wird nie verändert. Für eine STL- oder 3MF-Datei stattdessen siehe [Ein Teil für den 3D-Druck vorbereiten](topic:print-3d).
- **Harzdruck.** Add-ons in {{ui:Settings}} › {{ui:Add-ons}}, alle aus, bis Sie sie einschalten: ein Harz-Slicer, ein Belichtungstest und Dateiformate Elegoo GOO, SL1, Chitubox CBDDLP/CTB und Anycubic. Das Slicing läuft auf einem Arbeitsthread, daher bleibt die Seite ansprechbar.

## In jeder App

- Jeder Hinweis beim Darüberfahren ist ein Bootstrap-Tooltip.
- Der Starttipp hat eine Schaltfläche zum Schließen; er bleibt geschlossen.
- Eine Reihe von Reitern in einem Panel, die nicht passt, scrollt seitlich, statt abgeschnitten zu werden.
- Der Browser-Reiter zeigt den Namen des geöffneten Dokuments vor PartCraft | CadCraft.
- {{ui:Settings}} zeigt das {{ui:Anordnung}} des Arbeitsbereichs als Auswahlliste, und das Sprachfeld listet jede Sprache, die der Build hat.
- Gewicht und Temperatur sind Einheitenarten in den Einstellungen für Einheiten.

## Behoben

- Das Menü Bogen der Skizze listet jetzt jede Methode.
- Die Symbolleiste der Add-ons und der Titel des Browser-Reiters wurden am 2026-11-09 korrigiert.

## Ehrliche Grenzen

- Exaktes STEP wurde in OpenCascade zurückgelesen (gültige Volumenkörper, Volumen gleich den von Hand berechneten). Es wurde noch nicht in jedem CAD- oder CAM-Programm geöffnet, und eine Baugruppe wird nicht als exaktes STEP geschrieben.
- Auf einem echten Drucker wurde nichts gedruckt. Slicing, G-Code und Harzdateien wurden von unseren eigenen Programmen oder einem Ersatzdrucker zurückgelesen; keines der Harzformate wurde auf einen Drucker geladen, und Druckergrößen und Belichtungen sind Startwerte.
- Solid FEM ist linear, isotrop und elastisch, mit einem Werkstoff je Bauteil, ohne Kontakt, Fließen oder Knicken. Die Spannung an festen Flächen und scharfen Ecken hängt vom Netz ab. Es ist eine Prüfhilfe und wurde von keiner Ingenieurin oder keinem Ingenieur geprüft.
- Die Zeiten für große Baugruppen stammen von einem Server ohne GPU; ein Bild mit voller Detailtiefe von 20,000 Teilen braucht dort immer noch Sekunden.
- Verrundungen funktionieren an Flächenpaaren; es gibt keinen allgemeinen Eckübergang und keine Verrundung zwischen Flächen, die sich nicht treffen.
- Die Rhino-Verbindung lief nie in echtem Rhino oder Grasshopper. Dokumente wurden von zwei Programmen auf einem Ordner getestet, nicht von zwei Personen auf einer Netzwerkfreigabe.
- Das Anpassen von Flächen an einen echten Scan wurde noch nicht von Hand geprüft. Andere Sprachen als Englisch sind maschinelle Entwürfe.
- Windows-Installationsprogramme sind nicht code-signiert, und das macOS-Disk-Image ist nicht notariell beglaubigt. Siehe [Fehlerbehebung](topic:troubleshooting).

Frühere Änderungen stehen in [Neuerungen in 0.7](topic:whats-new-0-7).

## Früher: 0.8 und 0.8.1

Das ist, was sich in PartCraft 0.8 und 0.8.1 gegenüber 0.7 geändert hat. Die Simulation antwortet, während Sie bearbeiten, und sagt Ihnen, was zuerst versagt; Baugruppen erhalten Bewegungsstudien, und neue Arbeitsbereiche machen Freiformflächen und Teile, die aus der Physik bemessen werden. 0.8.1 ist eine kleine Fehlerbehebung.

### Neu

**Simulation**

- **Beim Bearbeiten aktualisieren.** Setzen Sie den Haken bei {{ui:Update while I edit}} im Block {{ui:Solve}}, dann folgen die Antworten Ihren Änderungen. Ändern Sie eine Bemaßung, eine Last oder den Werkstoff, und sofort erscheint eine schnelle Antwort mit viermal größeren Elementen; wenn Sie etwa eine Sekunde anhalten, ersetzt die eigene verfeinerte Antwort der Studie sie. Die Ergebnisse sagen, welche Sie gerade sehen. Bei einem Stahl-Kragträger lag die schnelle Antwort bei der Durchbiegung innerhalb von 1 % und bei der Spannung bei etwa 4 % der verfeinerten. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#update-while-you-edit-live).
- **Was zuerst versagt.** Bei einer statischen oder Knickstudie skaliert {{ui:What breaks first?}} im Block **Bruch testen** die Lasten, bis das Bauteil nachgibt. Es listet, das Schlimmste zuerst, den Lastfaktor bis zum ersten Fließen (mit einer roten Markierung, wo die Spannung ihren Höchstwert hat) und den Lastfaktor bis zum Knicken. Ein Faktor unter 1 bedeutet, dass das Bauteil schon unter der aufgebrachten Last nachgibt, und das Probleme-Panel zeigt einen Fehler. Die Faktoren stammen aus einer linearen Studie und sind nur so gut wie sie. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#find-out-what-breaks-first-break-it).
- **Fließen und Kontakt.** Zwei weitere Studientypen: eine nichtlineare, bei der das Material seiner geraden Linie bis zur Streckgrenze folgt und dann einer flacheren Steigung, mit aufgetragener plastischer Dehnung; und eine Kontaktstudie, bei der getrennte Teile aufeinander drücken (reibungsfrei) oder festhaften (verklebt). Ein Lastschritt, der sich nicht einpendelt, oder Teile, die zu tief ineinander sinken, erscheinen im Probleme-Panel. Reibung, große Gleitungen, große Drehungen, große Verformungen und Ermüdung werden nicht gelöst. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Eingabedateien für CalculiX.** {{ui:Export}} › {{ui:CalculiX-Eingabedatei (.inp)}} speichert die Studie für CalculiX, ein separates Programm, das Sie selbst installieren und ausführen; {{ui:Export}} › {{ui:CalculiX-Ergebnisse (.frd)}} liest dessen Ergebnisdatei auf dasselbe Netz zurück. PartCraft startet dieses Programm nie, und es sagt Bescheid, wenn sich das Bauteil seit dem Speichern der Eingabedatei geändert hat.

**Baugruppen**

- **Bewegungsstudien.** {{ui:Assembly}} › {{ui:Motion}} steuert den Wert eines Gelenks über eine Zeit, die Sie angeben (konstante Geschwindigkeit, sanft, Sinus oder hin und zurück), stellt die Baugruppe bei jedem Schritt mit ihren Gelenken und geschlossenen Schleifen auf und meldet, was kollidiert und wie nah Teile kommen. {{ui:Punkt hinzufügen}} zeichnet Position, Geschwindigkeit und Beschleunigung eines Punktes sowie Gelenkwert und Abstand über der Zeit; {{ui:CSV speichern}} und {{ui:Diagramm speichern}} schreiben sie hinaus. Nach {{ui:Run}} verschiebt die Schrittleiste die Baugruppe auf jeden beliebigen Schritt des Laufs. Die Einstellungen der Studie werden in der Baugruppendatei gespeichert. Geschwindigkeit und Beschleunigung kommen aus den aufgezeichneten Positionen; nehmen Sie also mehr Schritte, wenn ein scharfer Spitzenwert zu niedrig erscheint. Siehe [Eine Baugruppe auf Kollisionen und Bewegung prüfen](topic:check-assembly#a-motion-study).

**Flächen und Bauteile aus der Physik**

- **Ein Arbeitsbereich Flächen.** Wählen Sie {{ui:Surfaces}} im Feld {{ui:Workspace}} für NURBS-Kurven und -Flächen neben dem Bauteil: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} und {{ui:Zebra}}, mit Stetigkeit (G0, G1 oder G2), gemessen an den exakten Flächen; eine Kante, die schlechter ist als verlangt, wird in den Problemen mit einer Korrektur über {{ui:Match}} aufgelistet. {{ui:Fair}} misst Rumpflinien auf Wendepunkte und Krümmungssprünge und baut die unglatten innerhalb Ihrer Toleranz neu auf. Flächen werden in der Teiledatei gespeichert und ändern nicht die Features des Bauteils. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Der Arbeitsbereich Engineer.** Wählen Sie {{ui:Engineer}} im Umschalter für den Arbeitsbereich, wählen Sie einen Generator und klicken Sie auf {{ui:New}}: Ein Skript bemisst ein Bauteil aus dem, was es leisten muss (Wärme bewegen, Strömungen, Druck, Werkstoff, Druckverfahren), mit Lehrbuchformeln, und baut es. Dann gibt es die verwendeten Zahlen mit ihren Quellen, seine Fertigungsprüfungen und Dateien für Analysewerkzeuge zurück. Dieselben Eingaben ergeben dasselbe Bauteil auf jedem Computer. Der Generator bleibt im Bauteil, und das Öffnen eines Bauteils führt nie ein Skript aus. Siehe [Bauteile aus Physik: Generatoren](topic:engineer-generators) und [Einen Generator schreiben](topic:write-a-generator).

**Skizzieren, Zeichnungen und Fertigung**

- **Eine Skizze aus einem Foto.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} zeichnet ein Bild eines flachen Teils auf einem einfachen Untergrund (Umriss und Löcher) oder eine Strichzeichnung als Linien, Bögen und Kreise nach. Sie geben eine Länge an, prüfen die Vorschau und erstellen die Skizze. Siehe [Grundlagen der Skizze](topic:sketch-basics#a-sketch-from-a-photo).
- **Maßstab und Teilen für den Druck.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} skaliert pro Achse, ohne das Bauteil zu verändern, zum Beispiel um ein Schrumpfmaß. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} schneidet ein Teil, das zu groß für Ihr Druckbett ist, in nummerierte Stücke, die mit Stiften, Keilen, Schwalbenschwänzen, Passstiftlöchern oder Magnettaschen verbunden werden. Siehe [In 3D drucken](topic:print-3d).
- **Verschachtelte Tafeln zu G-Code.** {{ui:Export}} › {{ui:Verschachtelte Tafeln nach G-Code}} liest eine verschachtelte DXF und erstellt über den Post Ihrer Wahl ein Programm je Tafel: zuerst Löcher und Ausschnitte, dann die Umrisse. Es plant keine Anfahrten, keine Schnittreihenfolge und keine gemeinsamen Kanten. Siehe [Ebene Bauteile auf Tafeln verschachteln](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Zeichnungen, die mehr selbst erledigen.** {{ui:Sheet}} › {{ui:Automatic}} wählt das kleinste A-Format, das die Ansichten im größten Standardmaßstab bis 1:1 aufnimmt. {{ui:Bohrungen bemaßen}} setzt eine Mittenmarke auf jedes Loch, einen Hinweis je Größe und die Positionen von der unteren linken Ecke der Ansicht. Siehe [Eine Zeichnung erstellen](topic:drawing-pdf).

**In jeder App**

- **Sprachen.** Die Apps gibt es in 54 Sprachen. Alle außer Englisch sind maschinelle Entwürfe, bis eine muttersprachliche Person sie liest.
- **Symbolleistenzeilen.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wählt Umbrechen (wie zuvor), 2 Zeilen oder 1 Zeile; eine Leiste, die nicht passt, scrollt seitlich. Das Feature-Menüband von PartCraft zeigt das meistgenutzte Werkzeug groß und verbirgt Varianten hinter einer geteilten Schaltfläche.
- **Verbinden Sie Ihre KI.** Studio ist die Zentrale, um einen eigenen Assistenten mit allen acht Apps zu verbinden, mit der Berechtigung Lesen, Vorschlagen oder Bearbeiten für jede App. Ein verbundener Assistent kann ein Bauteil aus einem Satz bemessen, etwa einer Konsole für eine Last, seinen Rechenweg und alle Prüfungen zeigen und es bauen; er meldet, was er nicht geprüft hat (Spannungskonzentration, Ermüdung, Kriechen bei Kunststoffen). Siehe [Eine KI-Assistenz mit PartCraft verwenden](topic:use-with-ai-assistants).

### In 0.8.1 behoben

- **Einfrieren des Cursors im Vollbild.** Die Auswahl beim Darüberfahren wird jetzt gedrosselt. Die Ursache ist unsere beste Deutung und wurde nicht mit der Person bestätigt, die es gemeldet hat.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache während des Laufs wechseln; zuvor waren sie nur Englisch. Das ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn die Sprache sich nicht ändert.

### Noch nicht in dieser Version

- Die Verbindung Ihrer KI ist nicht fertig: Eine Ein-Klick-Verbindung in Studio, der gehostete Connector für KI im Browser, Ihr eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind nicht zugesagt. Studio hat keine eigene KI.
- Studio ist nicht code-signiert: Windows kann warnen, und macOS verlangt Rechtsklick, dann Öffnen. Siehe [Fehlerbehebung](topic:troubleshooting).
- Toleranzketten gehen weiterhin nur in eine Richtung: siehe [Toleranzketten](topic:tolerance-stackup).
- Der Rest steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).

Frühere Änderungen stehen in [Neuerungen in 0.7](topic:whats-new-0-7).
