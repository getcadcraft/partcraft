---
title: Neuerungen in 0.9
summary: PartCraft 0.9 bringt Verrundungen zwischen Flächen und das Verdicken zu Volumenkörpern, Baugruppen mit Tausenden Bauteilen, einen Dokumente-Tresor mit Revisionen, das Add-on Solid FEM für Spannungsprüfungen, zehn Bogenmethoden, britische Stahlprofile, einen Druckbereich und Add-ons für Harzdruck.
keywords: neuerungen, was ist neu, versionshinweise, changelog, 0.9, verrundung zwischen flächen, rollende kugel, mehrere kanten verrunden, verdicken, volumenkörper aus flächen, step shell, iges-volumenkörper, scan-verrundungen, große baugruppe, vereinfachte anzeige, 20000 bauteile, dokumente, tresor, auschecken, revision, release, verwendungsnachweis, rhino-link, grasshopper, 3dm, cursor, fertigungshalle, auftragswarteschlange, solid fem, finite elemente, von Mises, eigenfrequenz, bogenmethoden, 3-punkt-bogen, britische stahlprofile, blue book, druckbereich, harz, goo, ctb, druckbett, flach legen, änderungen, 0.8, 0.8.1, version, neue funktionen, live-analyse, beim bearbeiten aktualisieren, kaputt machen, was versagt zuerst, lastfaktor, nichtlinear, fließgrenze, plastische dehnung, kontakt, calculix, bewegungsstudie, spiel, flächen, nurbs, fair, rumpf, zebra, ingenieur, generator, erzeugter körper, skizze aus foto, skalieren zum drucken, teilen zum drucken, schwindung, verschachtelte tafeln, g-code, zeichnung, löcher bemaßen, assistent, mcp, sprachen, symbolleistenzeilen
from: 96d9fbfa
---

Das hat sich in PartCraft 0.9 gegenüber 0.8.1 geändert. Freiformflächen schließen sich nun zu Volumenkörpern, Baugruppen mit Tausenden Bauteilen bleiben nutzbar, ein Dokumente-Tresor behält Revisionen, und ein Add-on Solid FEM prüft die Spannung in einem Bauteil. Jeder Punkt sagt, wo Sie ihn finden.

## Neu in 0.9.1

- **Exakter STEP-Export.** {{ui:Exportieren}} › {{ui:STEP AP242 (exakter Volumenkörper)}} und {{ui:STEP AP214 (exakter Volumenkörper)}} funktionieren nun. Bohrungen, Aufsätze, Verrundungen, Kegel, Kugeln und Tori werden auf ihren echten Flächen geschrieben, mit echten Kreisen als Kanten, sodass ein anderes CAD- oder CAM-Programm eine Bohrung als Bohrung erkennen kann. Splinekanten, modellierte Gewinde und importierte Netze bleiben im selben Volumenkörper ebene Facetten. Siehe [Export für den Druck, STEP und DXF](topic:export-files#for-other-cad-programs-step).
- **STEP hinein, exaktes STEP heraus.** Eine geöffnete STEP-Datei behält ihre eigenen ebenen Flächen, Zylinder, Kegel, Kugeln und Tori, sodass {{ui:Exportieren}} › {{ui:STEP AP242 (exakter Volumenkörper)}} sie wieder als echte Flächen statt als Facetten schreibt: Ein Träger eines Lieferanten mit Schraubenlöchern geht mit denselben Flächen hinaus, mit denen er kam, plus allem, was Sie hineingeschnitten haben. Spline-, per Sweep erzeugte und rotierte Flächen der Datei bleiben Facetten, ebenso Körper aus STL, OBJ und 3MF. Öffnen Sie die STEP-Datei erneut für ein Bauteil, das früher gespeichert wurde. Siehe [Eine STEP-Datei öffnen und darauf aufbauen](topic:import-step).
- **Echte Kreise in der DXF der Fläche.** {{ui:Exportieren}} › {{ui:DXF der Skizze oder ebenen Fläche}} schreibt bei gewählter ebener Fläche runde Löcher nun als Kreise mit dem eigenen Mittelpunkt und Radius des Lochs, für einen Laser-, Plasma- oder Wasserstrahltisch. Andere runde Kanten bleiben Facetten.
- **Exaktes STEP für die Werkstatt.** In {{ui:Fertigung}} schreibt {{ui:Exakt als STEP (Werkstückkoordinaten)}} das Bauteil mit seinem Ursprung am Werkstücknullpunkt der Aufspannung und Z entlang der Werkzeugachse, den Koordinaten, die der G-Code verwendet. Siehe [Werkzeugwege und G-Code erstellen](topic:manufacture#exact-step-for-the-shop).

## Neu

### Flächen und Volumenkörper

- **Verrundung zwischen Flächen.** Wählen Sie {{ui:Flächen}} im Feld {{ui:Arbeitsbereich}} und dann {{ui:Verrundung zwischen Flächen}}. Wählen Sie die zwei Flächen eines Volumenkörpers, geben Sie den Radius ein (und {{ui:Radius am Ende (mm, 0 = gleich)}} für einen Radius, der sich entlang der Kante ändert). Die Ergebniszeile sagt, wie weit die Verrundung von der idealen rollenden Kugel abweicht, und ein Radius, der nicht passt, wird mit der genannten Fläche abgelehnt. {{ui:Mehrere Kanten verrunden}} rundet viele Kanten in einem Schritt; setzen Sie ein Häkchen bei {{ui:Ecken (Kugelfläche, wo drei zusammentreffen)}} für eine Kugelecke, an der drei verrundete Kanten ebener Flächen zusammentreffen. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Zu einem Volumenkörper verdicken.** {{ui:Oberfläche zu Volumenkörper verdicken}} im selben Arbeitsbereich gibt einer Fläche eine Dicke; {{ui:Andere Seite}} wächst sie in die andere Richtung. Eine Falte oder Selbstdurchdringung wird mit genannter Fläche und Stelle abgelehnt.
- **Volumenkörper aus Flächen.** Getrimmte Flächen lassen sich mit Vereinigung, Subtraktion und Schnittmenge verbinden und als ein Rückgängig-Schritt in das Bauteil übernehmen. STEP schreibt einen Volumenkörper als eine geschlossene Schale und IGES als einen Volumenkörper; beide werden wieder als Volumenkörper gelesen. Passen die Flächen nicht kante für Kante zusammen, erhält die Datei getrennte Flächen, und die Statuszeile sagt es. Volumenkörper lassen sich auch im Knoteneditor erstellen; siehe [Knoteneditor](topic:nodes).
- **Randverrundungen und veränderliche Verrundungen in Scans.** Wenn Sie Flächen an einen Scan anpassen, werden Randverrundungen (Tori) und Verrundungen mit veränderlichem Radius entlang einer ziemlich geraden Kante ebenfalls gesucht und mit ihrem Radius aufgelistet. Getestet nur an erdachten Scans.

### Baugruppen, Dokumente und Verknüpfungen

- **Große Baugruppen.** Bauteile, die Kopien sind, teilen sich ein Netz, und {{ui:Ansichten}} › {{ui:Vereinfachte Anzeige}} zeichnet Quader, damit die Ansicht flüssig bleibt (sie schaltet sich bei sehr großen Baugruppen selbst ein; Auswählen und Verbindungen greifen weiterhin auf die echten Bauteile zu). Der Bauteilbaum zeigt seine ersten Zeilen und für den Rest eine Schaltfläche {{ui:700 weitere anzeigen}}. Baugruppendateien dürfen bis zu 50.000 Instanzen und 100.000 Verbindungen enthalten. Siehe [Eine Baugruppe erstellen](topic:build-assembly).
- **Dokumente.** {{ui:Dokumente…}} in der Gruppe {{ui:Datei}} öffnet ein Dialogfeld über einem Projektordner: Auschecken und Einchecken, Revisionsbuchstaben, Zustände (in Arbeit, zur Prüfung, freigegeben, veraltet), Verlauf, Verwendungsnachweis und Stückliste. Siehe [Dokumente und Revisionen (der Tresor)](topic:documents-walkthrough).
- **Live-Rhino-Verknüpfung.** Ein Skript, `cadcraft_link.py`, überwacht ein Rhino- oder Grasshopper-Dokument und überträgt nur das Geänderte nach PartCraft, wo ein importiertes Feature auf der neuen Form neu aufgebaut wird. Sie wirkt nur in eine Richtung und braucht Studio. Siehe [Live-.3dm-Verknüpfung](topic:live-3dm-link).
- **Die Cursor der anderen sehen.** In einer gemeinsamen Sitzung wird der Cursor jeder Person mit ihrem Namen und dem Feature angezeigt, das sie ausgewählt hat. Siehe [Live mit anderen arbeiten](topic:work-live).
- **Fertigungshalle.** Schalten Sie das Add-on Fertigungshalle unter {{ui:Einstellungen}} › {{ui:Add-ons}} ein. Nachdem Sie ein Programm in {{ui:Fertigung}} ausgegeben haben, kann sein Reiter {{ui:Zur Auftragswarteschlange der Fertigungshalle hinzufügen}} oder {{ui:Als Auftragsdatei speichern}}. Es sendet oder startet nie eine Maschine.

### Analyse und Bauteile

- **Add-on Solid FEM.** Schalten Sie {{ui:Solid FEM}} unter {{ui:Einstellungen}} › {{ui:Add-ons}} ein (es ist bis dahin aus), dann erscheint ein Reiter {{ui:Solid FEM}} im rechten Bereich. {{ui:Teil vernetzen}}, feste Flächen und Lasten in der 3D-Ansicht wählen, {{ui:Lösen}}, und Verschiebung, Vergleichsspannung nach von Mises oder eine Eigenform mit {{ui:Am Modell anzeigen}} zeichnen. Siehe [Solid FEM: eine Spannungsprüfung](topic:solid-fem-check).
- **Bogen in Skizzen, auf zehn Arten.** Der Pfeil neben {{ui:Bogen}} in der Skizzen-Symbolleiste listet 3-Punkt, Start Mittelpunkt Ende, Start Mittelpunkt Winkel, Start Mittelpunkt Länge, Start Ende Winkel, Start Ende Richtung, Start Ende Radius, Mittelpunkt Start Ende, Mittelpunkt Start Winkel, Mittelpunkt Start Länge und Fortsetzen auf. Siehe [Einen Bogen auf zehn Arten zeichnen](topic:sketch-arc-methods).
- **Britische Stahlprofile.** Schweißkonstruktionen können 976 britische Profile verwenden (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); geben Sie eine Größe wie `305x165x40 UB` ein. Siehe [Tragwerksstäbe](topic:structural-members).

### Drucken

- **Druckbereich.** Die Schaltfläche {{ui:Druckbereich}} in der Symbolleiste (Add-on 3D-Druck, standardmäßig an) legt die Körper Ihres Bauteils auf ein gestricheltes Druckbett: {{ui:Abwickeln}}, {{ui:90° drehen}}, {{ui:Auf dem Bett anordnen}}, {{ui:Alle auf dem Bett einpassen}}, {{ui:Schichten anzeigen}}, dann {{ui:An 3D-Drucker senden}} über USB, Klipper (Moonraker), OctoPrint oder PrusaLink. Nichts wird gesendet, bis Sie bestätigen, und Ihr Bauteil wird nie verändert. Für eine STL- oder 3MF-Datei lesen Sie stattdessen [Ein Bauteil für den 3D-Druck vorbereiten](topic:print-3d).
- **Harzdruck.** Add-ons unter {{ui:Einstellungen}} › {{ui:Add-ons}}, alle aus, bis Sie sie einschalten: ein Harz-Slicer, ein Belichtungstest und Dateiformate Elegoo GOO, SL1, Chitubox CBDDLP/CTB und Anycubic. Das Slicen läuft in einem Arbeitsthread, damit die Seite ansprechbar bleibt.

## In allen Apps

- Jeder Hinweis beim Darüberfahren ist ein Bootstrap-Tooltip.
- Der Starthinweis hat eine Schaltfläche zum Schließen; er bleibt geschlossen.
- Eine Reihe von Registerkarten eines Bereichs, die nicht passt, scrollt seitlich, statt abgeschnitten zu werden.
- Der Browser-Tab zeigt den Namen des geöffneten Dokuments vor PartCraft | CadCraft.
- {{ui:Einstellungen}} zeigt das {{ui:Layout}} des Arbeitsbereichs als Dropdown-Liste, und das Sprachfeld listet jede Sprache auf, die die Version hat.
- Gewicht und Temperatur sind Einheitenarten in den Einstellungen von {{ui:Einheiten}}.

## Behoben

- Das Bogenmenü der Skizze listet nun jede Methode auf.
- Die Add-on-Symbolleiste und der Titel des Browser-Tabs wurden am 2026-11-09 korrigiert.

## Ehrliche Grenzen

- Exakter STEP wurde in OpenCascade zurückgelesen (gültige Volumenkörper, Volumina gleich den von Hand berechneten). Er wurde noch nicht in jedem CAD- oder CAM-Programm geöffnet, und eine Baugruppe wird nicht als exakter STEP geschrieben.
- Noch nichts wurde auf einem echten Drucker gedruckt. Slicing, G-Code und Harzdateien wurden von unseren eigenen Programmen oder einem Ersatzdrucker zurückgelesen; keines der Harzformate wurde auf einen Drucker geladen, und Druckergrößen und Belichtungen sind Ausgangswerte.
- Solid FEM ist linear, isotrop und elastisch, ein Material pro Bauteil, ohne Kontakt, Fließen oder Knicken. Die Spannung an festen Flächen und scharfen Ecken hängt vom Netz ab. Es ist eine Prüfhilfe und wurde nicht von einem Ingenieur geprüft.
- Die Zeiten für große Baugruppen stammen von einem Server ohne GPU; ein Bild mit voller Detailtiefe von 20.000 Bauteilen braucht dort noch Sekunden.
- Verrundungen funktionieren an Flächenpaaren; es gibt keine allgemeine Eckenverrundung und keine Verrundung zwischen Flächen, die sich nicht treffen.
- Die Rhino-Verknüpfung ist nie in echtem Rhino oder Grasshopper gelaufen. Dokumente wurde von zwei Programmen auf einem Ordner getestet, nicht von zwei Personen auf einer Netzwerkfreigabe.
- Das Anpassen von Flächen an einen echten Scan wurde noch nicht von Hand geprüft. Sprachen außer Englisch sind maschinelle Entwürfe.
- Windows-Installationsprogramme sind nicht code-signiert, und das macOS-Festplattenabbild ist nicht notarisiert. Siehe [Fehlerbehebung](topic:troubleshooting).

Frühere Änderungen stehen in [Neuerungen in 0.7](topic:whats-new-0-7).

## Früher: 0.8 und 0.8.1

Das hat sich in PartCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. Die Simulation antwortet, während Sie bearbeiten, und sagt Ihnen, was zuerst versagt; Baugruppen bekommen Bewegungsstudien, und neue Arbeitsbereiche erstellen Freiformflächen und aus der Physik dimensionierte Bauteile. 0.8.1 ist eine kleine Korrekturversion.

### Neu

**Simulation**

- **Beim Bearbeiten aktualisieren.** Setzen Sie im Block {{ui:Lösen}} ein Häkchen bei {{ui:Beim Bearbeiten aktualisieren}}, dann folgen die Antworten Ihren Änderungen. Ändern Sie ein Maß, eine Last oder das Material, und eine schnelle Antwort, berechnet mit Elementen, die viermal größer sind, erscheint sofort; wenn Sie etwa eine Sekunde anhalten, ersetzt die eigene verfeinerte Antwort der Studie sie. Die Ergebnisse sagen, welche Sie gerade sehen. Bei einem Stahl-Kragträger lag die schnelle Antwort bei der Durchbiegung innerhalb von 1 % und bei der Spannung etwa 4 % von der verfeinerten. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#update-while-you-edit-live).
- **Was versagt zuerst.** Bei einer statischen Studie oder einer Knickstudie skaliert {{ui:Was versagt zuerst?}} im Block **Bruchtest** die Lasten, bis das Bauteil nachgibt. Es listet, das Schlimmste zuerst, den Lastfaktor bis zum ersten Fließen (mit einer roten Markierung, wo die Spannung am höchsten ist) und den Lastfaktor bis zum Knicken. Ein Faktor unter 1 heißt, das Bauteil gibt schon unter der angesetzten Last nach, und der Bereich Probleme zeigt einen Fehler. Die Faktoren stammen aus einer linearen Studie und sind nur so gut wie diese. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#find-out-what-breaks-first-break-it).
- **Fließen und Kontakt.** Zwei weitere Studientypen: eine nichtlineare, bei der das Material seiner geraden Linie bis zur Fließspannung folgt und dann einer flacheren Steigung, mit aufgetragener plastischer Dehnung, und eine Kontaktstudie, bei der sich getrennte Bauteile aneinander drücken (reibungsfrei) oder festhalten (verklebt). Ein Lastschritt, der sich nicht einpendelt, oder Bauteile, die zu tief ineinander sinken, erscheinen im Bereich Probleme. Reibung, große Gleitung, große Drehungen, große Verformungen und Ermüdung werden nicht gelöst. Siehe [Spannung und Durchbiegung prüfen](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Eingabedateien für CalculiX.** {{ui:Exportieren}} › {{ui:CalculiX-Eingabedatei (.inp)}} speichert die Studie für CalculiX, ein eigenes Programm, das Sie selbst installieren und ausführen; {{ui:Exportieren}} › {{ui:CalculiX-Ergebnisse (.frd)}} liest dessen Ergebnisdatei zurück auf dasselbe Netz. PartCraft startet dieses Programm nie, und es sagt Bescheid, wenn sich das Bauteil seit dem Speichern der Datei geändert hat.

**Baugruppen**

- **Bewegungsstudien.** {{ui:Baugruppe}} › {{ui:Bewegung}} steuert den Wert eines Gelenks über eine von Ihnen festgelegte Zeit (gleichmäßige Geschwindigkeit, weich, Sinus oder hin und zurück), setzt die Baugruppe in jedem Schritt mit ihren Verbindungen und geschlossenen Schleifen und meldet, was kollidiert und wie nah Bauteile kommen. {{ui:Punkt hinzufügen}} zeichnet Position, Geschwindigkeit und Beschleunigung eines Punkts, den Wert der Verbindung und den Abstand über der Zeit; {{ui:CSV speichern}} und {{ui:Diagramm speichern}} schreiben sie aus. Nach {{ui:Ausführen}} bewegt die Leiste „Durch den Lauf schreiten“ die Baugruppe zu jedem Schritt. Die Einstellungen der Studie werden in der Baugruppendatei gespeichert. Geschwindigkeit und Beschleunigung stammen aus den aufgezeichneten Positionen; verwenden Sie daher mehr Schritte, wenn eine scharfe Spitze zu niedrig angezeigt wird. Siehe [Eine Baugruppe auf Kollisionen und Bewegung prüfen](topic:check-assembly#a-motion-study).

**Flächen und Bauteile aus der Physik**

- **Ein Arbeitsbereich Flächen.** Wählen Sie {{ui:Flächen}} im Feld {{ui:Arbeitsbereich}} für NURBS-Kurven und -Flächen neben dem Bauteil: {{ui:Kurve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Anpassen}} und {{ui:Zebra}}, mit Stetigkeit (G0, G1 oder G2), gemessen an den exakten Flächen, und einer Kante, die schlechter ist als verlangt, wird unter Probleme mit einer Anpassungskorrektur aufgeführt. {{ui:Straken}} misst Rumpflinien auf Wendepunkte und Krümmungssprünge und baut die unfairen innerhalb Ihrer Toleranz neu auf. Flächen werden in der Bauteildatei gespeichert und ändern die Features des Bauteils nicht. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Der Arbeitsbereich Ingenieur.** Wählen Sie {{ui:Ingenieur}} im Umschalter des Arbeitsbereichs, wählen Sie einen Generator und klicken Sie auf {{ui:Neu}}: Ein Skript bemisst ein Bauteil nach dem, was es leisten muss (die Wärme, die bewegt werden muss, Strömungen, Druck, Material, Druckverfahren) mit Formeln aus dem Lehrbuch und baut es, dann gibt es die verwendeten Zahlen mit ihren Quellen, seine Fertigungsprüfungen und Dateien für Analysewerkzeuge zurück. Dieselben Eingaben ergeben dasselbe Bauteil auf jedem Computer. Der Generator wird im Bauteil gespeichert, und das Öffnen eines Bauteils führt nie ein Skript aus. Siehe [Bauteile aus der Physik: Generatoren](topic:engineer-generators) und [Einen Generator schreiben](topic:write-a-generator).

**Skizzen, Zeichnungen und Fertigung**

- **Eine Skizze aus einem Foto.** {{ui:Features}} › {{ui:Mehr}} › {{ui:Skizze aus Foto…}} zeichnet das Bild eines flachen Bauteils auf einem einfachen Untergrund (Kontur und Löcher) oder eine Federzeichnung in Linien, Bögen und Kreise nach. Sie geben eine Länge an, prüfen die Vorschau und erstellen die Skizze. Siehe [Grundlagen der Skizze](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalieren und Teilen für den Druck.** {{ui:Exportieren}} › {{ui:Für den Druck skalieren (STL oder 3MF)…}} skaliert pro Achse, ohne das Bauteil zu ändern, zum Beispiel mit einer Schwindungszugabe. {{ui:Exportieren}} › {{ui:Für den Druck teilen (ein Zip aus Teilen)…}} schneidet ein Bauteil, das zu groß für Ihr Druckbett ist, in nummerierte Stücke, die mit Stiften, Keilen, Schwalbenschwänzen, Dübellöchern oder Magnettaschen verbunden werden. Siehe [3D-Druck](topic:print-3d).
- **Verschachtelte Tafeln nach G-Code.** {{ui:Exportieren}} › {{ui:Verschachtelte Tafeln nach G-Code}} liest eine verschachtelte DXF und erstellt ein Programm je Tafel über den Post, den Sie wählen: zuerst Löcher und Aussparungen, dann die Konturen. Es plant keine Einfahrten, keine Schnittreihenfolge und keine gemeinsamen Kanten. Siehe [Flache Bauteile auf Tafeln verschachteln](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Zeichnungen, die mehr selbst erledigen.** {{ui:Blatt}} › {{ui:Automatisch}} wählt das kleinste A-Format-Blatt, das die Ansichten im größten Normmaßstab bis 1:1 aufnimmt. {{ui:Bohrungen bemaßen}} setzt auf jede Bohrung eine Mittelmarke, eine Hinweisbeschriftung je Größe und die Positionen ab der unteren linken Ecke der Ansicht. Siehe [Eine Zeichnung erstellen](topic:drawing-pdf).

**In allen Apps**

- **Sprachen.** Die Apps gibt es in 54 Sprachen. Alle außer Englisch sind maschinelle Entwürfe, bis eine Muttersprachlerin oder ein Muttersprachler sie liest.
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} wählt Umbruch (wie zuvor), 2 Zeilen oder 1 Zeile; eine Leiste, die nicht passt, scrollt seitlich. Das Feature-Menüband von PartCraft zeigt das meistgenutzte Werkzeug groß und verbirgt Varianten hinter einer geteilten Schaltfläche.
- **Assistenten verbinden.** Studio ist die Zentrale, um einen eigenen Assistenten mit allen acht Apps zu verbinden, mit einer Berechtigung je App: nur lesen, vorschlagen oder bearbeiten. Ein verbundener Assistent kann ein Bauteil aus einem Satz bemessen, etwa eine Halterung für eine Last, seinen Rechenweg und jede Prüfung zeigen und es bauen; er meldet, was er nicht geprüft hat (Spannungskonzentration, Ermüdung, Kriechen bei Kunststoffen). Siehe [PartCraft mit einem Assistenten verwenden](topic:use-with-ai-assistants).

### Behoben in 0.8.1

- **Cursor hängt im Vollbild.** Die Auswahl beim Darüberfahren wird nun gedrosselt. Die Ursache ist unsere beste Deutung und wurde mit der meldenden Person nicht bestätigt.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache während des Betriebs wechseln; zuvor waren sie nur auf Englisch. Das ist noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.

### Noch nicht in dieser Version

- Die Assistentenverbindung ist noch nicht fertig: Ein-Klick-Verbindung in Studio, der gehostete Connector für KI im Browser, ein eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind nicht zugesagt. Studio hat keine eigene KI.
- Studio ist nicht code-signiert: Windows warnt möglicherweise, und macOS verlangt Rechtsklick und dann Öffnen. Siehe [Fehlerbehebung](topic:troubleshooting).
- Toleranzketten gehen noch in eine Richtung: siehe [Toleranzketten](topic:tolerance-stackup).
- Das Übrige steht unter [Was noch nicht umgesetzt ist](topic:not-built-yet).

Frühere Änderungen stehen in [Neuerungen in 0.7](topic:whats-new-0-7).
