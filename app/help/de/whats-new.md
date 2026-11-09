---
title: Neuerungen in 0.8 und 0.8.1
summary: PartCraft 0.8 bringt Live-Analyse beim Bearbeiten, die Prüfung „Was versagt zuerst?“, Fließ- und Kontaktstudien mit Dateien für einen externen Löser, Bewegungsstudien für Baugruppen, einen Arbeitsbereich Flächen für Freiformflächen, nach Physik dimensionierte Bauteile im Arbeitsbereich Engineer, Foto-zu-Skizze, Exporte für den Druck, verschachtelte Tafeln zu G-Code und Zeichnungen, die ihre Bohrungen bemaßen. 0.8.1 behebt ein Einfrieren des Cursors im Vollbild.
keywords: Neuerungen, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Live-Analyse, beim Bearbeiten aktualisieren, Änderungen bearbeiten, Break it, was versagt zuerst, Lastfaktor, nichtlinear, Fließen, plastische Dehnung, Kontakt, CalculiX, Bewegungsstudie, Freigang, Flächen, NURBS, Straken, Rumpf, Zebra, Engineer, Generator, generiertes Bauteil, Skizze aus Foto, Maßstab für den Druck, Teilen für den Druck, Schwindung, verschachtelte Tafeln, G-Code, Zeichnung, Bohrungen bemaßen, Assistent, MCP, Sprachen, Symbolleistenzeilen
from: 62e4dce2
---

Das hat sich in PartCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. Die Simulation antwortet, während Sie bearbeiten, und zeigt, was zuerst versagt. Baugruppen erhalten Bewegungsstudien, und neue Arbeitsbereiche erstellen Freiformflächen und Bauteile, die aus physikalischen Größen bemessen werden. 0.8.1 ist eine kleine Fehlerbehebungsversion.

## Neu

### Simulation

- **Beim Bearbeiten aktualisieren.** Aktivieren Sie {{ui:Update while I edit}} im Solve-Block, dann folgen die Ergebnisse Ihren Änderungen. Ändern Sie eine Bemaßung, eine Last oder das Material, erscheint sofort eine Schnellberechnung mit Elementen, die viermal so groß sind; wenn Sie etwa eine Sekunde anhalten, ersetzt die eigene verfeinerte Berechnung der Studie sie. Die Ergebnisse zeigen, welche der beiden Sie gerade sehen. Bei einem Stahlkragbalken lag die Schnellberechnung bei der Durchbiegung innerhalb von 1 % und bei der Spannung etwa 4 % neben der verfeinerten Berechnung. Siehe [Spannung und Verformung prüfen](topic:simulation#update-while-you-edit-live).
- **Was versagt zuerst?** Bei einer statischen oder Knickstudie skaliert {{ui:What breaks first?}} im Block **Break it** die Lasten, bis das Bauteil nachgibt. Es listet, vom schlimmsten zum harmlosesten, den Lastfaktor bis zum ersten Fließen (mit einer roten Markierung, wo die Spannung ihr Maximum erreicht) und den Lastfaktor bis zum Knicken auf. Ein Faktor unter 1 bedeutet, dass das Bauteil bereits unter der angesetzten Last nachgibt; dann zeigt der Bereich Probleme einen Fehler. Die Faktoren stammen aus einer linearen Studie und sind nur so gut wie diese. Siehe [Spannung und Verformung prüfen](topic:simulation#find-out-what-breaks-first-break-it).
- **Fließen und Kontakt.** Zwei weitere Studientypen: eine nichtlineare, bei der das Material bis zur Fließspannung seiner Geraden folgt und danach einer flacheren Steigung, wobei die plastische Dehnung aufgetragen wird; und eine Kontaktstudie, bei der sich getrennte Teile gegenseitig drücken (reibungsfrei) oder fest verbunden bleiben (verklebt). Ein Lastschritt, der sich nicht stabilisieren kann, oder Teile, die zu tief ineinander einsinken, werden im Bereich Probleme angezeigt. Reibung, große Gleitbewegungen, große Drehungen, große Verformungen und Ermüdung werden nicht gelöst. Siehe [Spannung und Verformung prüfen](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Dateien für CalculiX.** {{ui:Export}} › {{ui:CalculiX-Datei (.inp)}} speichert die Studie für CalculiX, ein separates Programm, das Sie selbst installieren und ausführen. {{ui:Export}} › {{ui:CalculiX-Ergebnisse (.frd)}} liest dessen Ergebnisdatei auf dasselbe Netz zurück. PartCraft startet dieses Programm nie und weist darauf hin, wenn sich das Bauteil seit dem Speichern der Datei geändert hat.

### Baugruppen

- **Bewegungsstudien.** {{ui:Assembly}} › {{ui:Motion}} steuert den Wert eines Gelenks über eine von Ihnen festgelegte Zeit (konstante Geschwindigkeit, weich, Sinus oder hin und zurück), platziert die Baugruppe bei jedem Schritt mit ihren Gelenken und geschlossenen Schleifen und meldet, welche Teile kollidieren und wie nahe sie sich kommen. {{ui:Add a point}} zeichnet Position, Geschwindigkeit und Beschleunigung eines Punkts sowie den Wert des Gelenks und den Abstand über die Zeit auf; {{ui:Save CSV}} und {{ui:Save plot}} speichern sie. Nach {{ui:Run}} bewegt die Schrittleiste der Ausführung die Baugruppe zu jedem beliebigen Schritt. Die Einstellungen der Studie werden in der Baugruppendatei gespeichert. Geschwindigkeit und Beschleunigung ergeben sich aus den aufgezeichneten Positionen; verwenden Sie daher mehr Schritte, wenn ein scharfer Spitzenwert zu niedrig angezeigt wird. Siehe [Baugruppe auf Kollisionen und Bewegung prüfen](topic:check-assembly#a-motion-study).

### Flächen und Bauteile aus der Physik

- **Ein Arbeitsbereich Flächen.** Wählen Sie {{ui:Surfaces}} im Feld {{ui:Workspace}} für NURBS-Kurven und -Flächen neben dem Bauteil: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} und {{ui:Zebra}}, mit einer Stetigkeit (G0, G1 oder G2), die an den exakten Flächen gemessen wird. Eine Kante, die schlechter ist als gewünscht, wird im Bereich Probleme mit einer Korrektur über {{ui:Match}} aufgelistet. {{ui:Fair}} misst Rumpflinien auf Wendepunkte und Krümmungssprünge und baut die unglatten innerhalb Ihrer Toleranz neu auf. Flächen werden in der Bauteildatei gespeichert und ändern die Features des Bauteils nicht. Siehe [Freiformflächen (NURBS)](topic:nurbs-surfaces).
- **Der Arbeitsbereich Engineer.** Wählen Sie {{ui:Engineer}} im Arbeitsbereich-Umschalter, wählen Sie einen Generator und klicken Sie auf {{ui:New}}. Ein Skript dimensioniert ein Bauteil anhand dessen, was es leisten muss (Wärme bewegen, Strömungen, Druck, Material, Druckverfahren), mit Standardformeln aus der Fachliteratur, und baut es. Danach gibt es die verwendeten Werte mit deren Quellen, seine Fertigungsprüfungen und Dateien für Analysewerkzeuge zurück. Dieselben Eingaben ergeben dasselbe Bauteil auf jedem Computer. Der Generator wird im Bauteil gespeichert, und das Öffnen eines Bauteils startet nie ein Skript. Siehe [Bauteile aus der Physik: Generatoren](topic:engineer-generators) und [Einen Generator schreiben](topic:write-a-generator).

### Skizzieren, Zeichnungen und Fertigung

- **Eine Skizze aus einem Foto.** {{ui:Features}} › {{ui:More}} › {{ui:Skizze aus Foto…}} überträgt ein Bild eines flachen Bauteils auf einem einfachen Untergrund (Umriss und Bohrungen) oder eine Federzeichnung in Linien, Bögen und Kreise. Sie geben eine Länge an, prüfen die Vorschau und erstellen die Skizze. Siehe [Grundlagen des Skizzierens](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalieren und Teilen für den Druck.** {{ui:Export}} › {{ui:Für den Druck skalieren (STL oder 3MF)…}} skaliert pro Achse, ohne das Bauteil zu verändern, z. B. um eine Schwindungszugabe. {{ui:Export}} › {{ui:Für den Druck teilen (ein Zip aus Teilen)…}} teilt ein Bauteil, das für Ihr Druckbett zu groß ist, in nummerierte Teile, die mit Stiften, Keilen, Schwalbenschwänzen, Dübelbohrungen oder Magnettaschen verbunden werden. Siehe [3D drucken](topic:print-3d).
- **Verschachtelte Tafeln zu G-Code.** {{ui:Export}} › {{ui:Verschachtelte Tafeln nach G-Code}} liest eine verschachtelte DXF-Datei und erstellt pro Tafel ein Programm über den Postprozessor Ihrer Wahl: zuerst Bohrungen und Ausschnitte, danach die Konturen. Es plant keine Einfahrten, keine Schnittreihenfolge und keine gemeinsamen Kanten. Siehe [Flachteile auf Tafeln verschachteln](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Zeichnungen, die mehr selbst erledigen.** {{ui:Sheet}} › {{ui:Automatic}} wählt das kleinste A-Format-Blatt, das die Ansichten im größten Standardmaßstab bis 1:1 aufnimmt. {{ui:Dimension the holes}} setzt auf jede Bohrung eine Mittenmarkierung, eine Beschriftung pro Größe und die Positionen ab der unteren linken Ecke der Ansicht. Siehe [Eine Zeichnung erstellen](topic:drawing-pdf).

### In allen Apps

- **Sprachen.** Die Apps gibt es in 54 Sprachen. Alle außer Englisch sind maschinelle Entwürfe, bis eine Person mit dieser Muttersprache sie gelesen hat.
- **Symbolleistenzeilen.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} wählt Umbrechen (wie bisher), 2 Zeilen oder 1 Zeile. Eine Leiste, die nicht passt, scrollt seitlich. Das Feature-Menüband von PartCraft zeigt das am meisten genutzte Werkzeug groß und verbirgt Varianten hinter einer geteilten Schaltfläche.
- **KI anbinden.** Studio ist die Zentrale, um einen eigenen Assistenten mit allen acht Apps zu verbinden, mit Berechtigung je App für nur lesen, Vorschläge oder Bearbeiten. Ein angebundener Assistent kann ein Bauteil aus einem Satz dimensionieren, etwa eine Halterung für eine Last, zeigt seinen Rechenweg und jede Prüfung und baut es. Er meldet, was er nicht geprüft hat (Spannungskonzentration, Ermüdung, Kriechen bei Kunststoffen). Siehe [PartCraft mit einem KI-Assistenten verwenden](topic:use-with-ai-assistants).

## Behoben in 0.8.1

- **Vollbild-Cursor friert ein.** Die Auswahl beim Überfahren mit der Maus wird jetzt gedrosselt. Die Ursache ist unsere beste Deutung und wurde mit der Person, die es gemeldet hat, nicht bestätigt.
- **Sprache zur Laufzeit.** Studio und die gepackten Ausgaben können die Sprache während des Betriebs umschalten; zuvor gab es nur Englisch. Das ist noch nicht auf allen Plattformen getestet: Teilen Sie uns mit, wenn sich die Sprache nicht ändert.

## Noch nicht in dieser Version

- KI anbinden ist noch nicht fertig: die Verbindung mit einem Klick in Studio, der gehostete Konnektor für KI im Browser, ein eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind nicht zugesagt. Studio hat keine eigene KI.
- Studio ist nicht code-signiert: Windows warnt eventuell, macOS verlangt Rechtsklick und dann Öffnen. Siehe [Fehlerbehebung](topic:troubleshooting).
- Toleranzketten laufen weiterhin nur in eine Richtung: siehe [Toleranzketten](topic:tolerance-stackup).
- Der Rest steht in [Was noch nicht umgesetzt ist](topic:not-built-yet).

Frühere Änderungen stehen in [Neuerungen in 0.7](topic:whats-new-0-7).
