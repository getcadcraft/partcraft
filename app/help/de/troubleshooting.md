---
title: Fehlerbehebung
summary: Probleme, die Ihnen in PartCraft begegnen können, vom Start der App bis zu fehlschlagenden Features, Skizzen, die sich nicht lösen, Dateien, die sich nicht öffnen, und Verbindungen, die sich falsch verhalten, mit der Meldung, die Sie sehen, und der Lösung.
keywords: Problem, Fehler, Hilfe, funktioniert nicht, schlägt fehl, fehlschlagend, Absturz, leer, WebGL, WebAssembly, Kernel, noch nicht umgesetzt, überbestimmt, offenes Profil, kann nicht öffnen, nichts passiert, falsche Richtung, langsam
from: 7728542c
---

Wenn etwas nicht funktioniert, lesen Sie zuerst die **Statusleiste** unten: PartCraft sagt dort, warum es etwas abgelehnt hat oder was es als Nächstes erwartet. Ein fehlschlagendes Feature zeigt seine Meldung außerdem oben im rechten Bereich und wenn Sie über seine Zeile im Verlauf fahren.

## Die App startet nicht

### „Dieser Browser kann kein 3D anzeigen (WebGL ist aus oder fehlt), daher kann PartCraft hier nicht laufen.“

**Ursache:** Im Browser sind 3D-Grafiken (WebGL) ausgeschaltet, blockiert oder vom Grafiktreiber nicht unterstützt.

**Lösung:**

:::chromium
Öffnen Sie `chrome://settings/system` (oder `edge://settings/system` in Edge) und schalten Sie „Hardwarebeschleunigung verwenden, wenn verfügbar“ ein, dann starten Sie den Browser neu. Ist sie bereits an, prüfen Sie `chrome://gpu` auf den WebGL-Status, und aktualisieren Sie Ihren Grafiktreiber.
:::

:::firefox
Öffnen Sie `about:support` und sehen Sie unter Grafik, WebGL nach. Ist es blockiert, aktualisieren Sie den Grafiktreiber. In `about:config` muss `webgl.disabled` auf `false` stehen.
:::

:::safari
WebGL ist im aktuellen Safari immer an. Aktualisieren Sie macOS (Safari wird damit aktualisiert). Schlägt es weiterhin fehl, versuchen Sie Chrome oder Firefox auf demselben Mac, um die Grafikhardware auszuschließen.
:::

Remote-Desktops und einige virtuelle Maschinen haben kein WebGL. Versuchen Sie es auf dem Computer selbst.

### „Der Volumenkörper-Kernel konnte nicht geladen werden: …“

**Ursache:** Der Volumenkörper-Kernel (ein WebAssembly-Programm) konnte nicht geladen oder gestartet werden. Meist ist die Verbindung abgebrochen, während die App lädt, WebAssembly ist durch eine Unternehmensrichtlinie oder eine Sicherheitseinstellung des Browsers ausgeschaltet, oder der Browser ist sehr alt.

**Lösung:** Laden Sie die Seite neu, während Sie online sind. Schlägt es weiterhin fehl, probieren Sie einen anderen aktuellen Browser. In Firefox muss `javascript.options.wasm` in `about:config` auf `true` stehen. Offline laden die App und ihr Kernel nur, wenn die App-Leiste **Offline bereit** anzeigte, bevor Sie die Verbindung verloren haben ({{ui:Für Offline speichern}} während Sie online sind; siehe [Offline arbeiten](common:offline)).

### Die Offline-Schaltfläche sagt „Konnte nicht speichern“ oder „Offline nicht verfügbar“

**Konnte nicht speichern**: Einige Dateien wurden nicht heruntergeladen. Klicken Sie darauf, um es online erneut zu versuchen; eine langsame oder getaktete Verbindung braucht vielleicht einen zweiten Versuch. **Offline nicht verfügbar**: Dieses Browserfenster kann keine Offline-Kopie speichern (private Fenster und einige verwaltete Computer blockieren es). Verwenden Sie ein normales Fenster, oder lassen Sie den Tab offen.

### PartCraft ist offline, aber veraltet

Klicken Sie auf **Offline bereit**, während Sie online sind, und wählen Sie {{ui:Erneut speichern (neueste Version holen)}}.

### „Sweep: noch nicht umgesetzt. Dafür ist ein exakter Kernel nötig, …“

Die vollständige Meldung lautet „<Name>: noch nicht umgesetzt. Dafür ist ein exakter Kernel nötig, den diese Version von PartCraft nicht hat. Hilfe › Was noch nicht umgesetzt ist beschreibt, was Sie stattdessen tun können.“ Sie sehen sie, wenn Sie Sweep, Loft, Rippe, einen Blechflansch, ein Flächen-Feature, Vereinigen, Körper verschieben, Körper skalieren oder Pfadmuster wählen, und bei den anderen Dingen, die nur ein exakter Kernel kann. Ihr Browser oder Ihr Bauteil ist nicht fehlerhaft: Diese Version von PartCraft erstellt jedes Bauteil mit dem Netzkernel. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet), was Sie stattdessen tun können, und [Der Netzkernel](topic:solid-kernels).

### „Volumenkörper-Kernel wird geladen…“ verschwindet nie

Warten Sie bei einer langsamen Verbindung ein wenig: Der Kernel und die 3D-Bibliothek werden beim ersten Mal heruntergeladen. Laden Sie danach die Seite neu. Zeigt die Seite selbst einen Fehler, siehe oben.

## Ich drücke eine Taste, und nichts passiert

- Tasten funktionieren nicht, solange der Cursor in einem Feld im Bereich steht. Klicken Sie in die 3D-Ansicht, oder drücken Sie nach der Eingabe {{key:Esc}} (oder {{key:Tab}}, um das Feld zu verlassen).
- Die Pfeiltasten sowie {{key:Plus}} und {{key:Minus}} drehen und zoomen die Ansicht erst, nachdem Sie in die Ansicht geklickt haben.
- Ein Dialog ist offen: Beantworten Sie ihn zuerst.
- In einer Skizze ist {{key:F}} das Abrunden-Werkzeug, nicht Einpassen. Verwenden Sie die Schaltfläche {{ui:Einpassen}}.

## Eine Symbolleisten-Schaltfläche ist ausgegraut

- Feature-Schaltflächen sind ausgegraut, solange eine Skizze offen ist. Schließen Sie zuerst die Skizze.
- Skizzenwerkzeuge funktionieren nur in einer Skizze.
- {{ui:Rückgängig}} und {{ui:Wiederholen}} sind ausgegraut, wenn es nichts zurückzunehmen oder zu wiederholen gibt.
- {{ui:Baugruppe}} braucht ein Bauteil mit einem Volumenkörper. {{ui:Verbindung}} braucht zwei Bauteile in der Baugruppe. {{ui:Bauteil}} braucht ein ausgewähltes Bauteil.
- {{ui:STEP AP242 (exakter Volumenkörper)}} und {{ui:STEP AP214 (exakter Volumenkörper)}} sind in einer Baugruppe ausgegraut: Exportieren Sie jedes Bauteil einzeln. Lehnt ein anderes Programm die exakte Datei ab, versuchen Sie {{ui:STEP AP214 (exakter Volumenkörper)}}, dann {{ui:STEP (facettiert, Netzkernel)}}, und melden Sie es über {{ui:Hilfe}} › {{ui:Problem melden}}.
- {{ui:Sweep}}, {{ui:Loft}} und die anderen Features, die einen exakten Kernel brauchen, sind nicht ausgegraut: Sie bleiben anklickbar, ihre QuickInfos enden mit „noch nicht umgesetzt (braucht einen exakten Kernel)“, und ein Klick darauf sagt es in der Statusleiste. Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
- {{ui:Zeichnung}} braucht ein Bauteil mit einem Volumenkörper und ist ausgegraut, solange eine Skizze offen ist.
- Die Einträge von {{ui:Exportieren}} sind in einer Baugruppe ausgegraut: Baugruppen können noch nicht exportiert werden. Schließen Sie sie, oder bearbeiten Sie ein Bauteil, um zu exportieren.

## Skizzenprobleme

### Die Skizze lässt mich keine Beziehung hinzufügen

„Keine Beziehung passt zu dieser Auswahl. Wählen Sie ein oder zwei Elemente (Shift+Klick fügt hinzu).“ Die Beziehung braucht eine andere Auswahl. Siehe [Skizzenbeziehungen und Bemaßungen](topic:sketch-relations) für das, was jede braucht.

### „Überbestimmt: … können nicht alle erfüllt werden. Rückgängig machen oder eines davon löschen.“

**Ursache:** Die neue Beziehung oder Bemaßung widerspricht den bereits vorhandenen. Die Skizze hat sich nicht bewegt.

**Lösung:** {{key:Mod+Z}}, oder löschen Sie eines der roten Elemente in der Liste des rechten Bereichs (wählen Sie **Löschen** daneben).

### „Überbestimmt: … ist bereits impliziert. Löschen Sie es.“

**Ursache:** Die Beziehung fügt nichts hinzu: Andere erzwingen sie bereits (zum Beispiel Parallel auf zwei Seiten eines Rechtecks, oder eine Bemaßung, die bereits festgelegt ist). In diesem Build gibt es keine getriebenen Bemaßungen.

**Lösung:** Löschen Sie sie. Das Feature wird trotzdem erstellt, mit einer Warnung.

### „Diese Elemente lassen sich nicht zusammen bemaßen.“

Sie haben zum Beispiel einen Punkt und einen Kreis angeklickt. Bemaßen Sie stattdessen zum Mittelpunkt des Kreises.

### „Eine Abrundung braucht eine Ecke, an der genau zwei Linien zusammentreffen.“ / „Dieser Radius ist für diese Linien zu groß.“

Klicken Sie genau auf den Eckpunkt zweier voller Linien. Verwenden Sie einen kleineren Radius, als die kürzere Linie zulässt.

### Die Geometrie springt zurück, wenn ich sie ziehe

Das Ziehen würde eine Beziehung oder eine Bemaßung brechen, daher setzt PartCraft sie zurück. Nur blaue (unterbestimmte) Geometrie kann sich bewegen.

### „Diese Skizze kann nicht geöffnet werden: Braucht Extrude2, das fehlschlägt.“

Die Skizze liegt auf einer Fläche eines Features, das nicht erstellt ist. Beheben Sie zuerst dieses Feature, oder heben Sie seine Unterdrückung auf, oder gehen Sie den Verlauf vorwärts.

## Feature-Probleme

| Meldung | Ursache | Lösung |
|---|---|---|
| „Erst eine Skizze erstellen: Ebene wählen, Skizze, geschlossenes Profil zeichnen, Beenden.“ | Keine unbenutzte Skizze mit Kurven, und keine ausgewählt | Zeichnen Sie eine Skizze, oder wählen Sie im Verlauf die Skizze, die verwendet werden soll |
| „Die Skizze hat kein geschlossenes Profil zum Extrudieren.“ (oder „zum Drehen“) | Keine geschlossene Schleife aus vollen Linien | Schließen Sie die Lücken; schalten Sie Konstruktionslinien mit {{key:Q}} zurück |
| „Das Profil ist offen: Ein Ende bei (x, y) ist mit nichts verbunden.“ | Eine Lücke an diesem Punkt | Öffnen Sie die Skizze, ziehen Sie das Ende auf seinen Nachbarn, damit es einrastet |
| „Das Profil verzweigt sich bei (x, y): Dort treffen mehr als zwei Enden zusammen.“ | Drei oder mehr Linien treffen in einem Punkt zusammen | Löschen Sie die überzählige Linie, oder machen Sie sie zur Konstruktionslinie |
| „Eine geschlossene Schleife braucht mindestens drei Seiten oder eine Kurve.“ | Zwei Linien hin und her | Zeichnen Sie die Schleife neu |
| „Durch alles gilt nur für Ausschnitte. Verwenden Sie für einen Aufsatz eine Tiefe.“ | Ein Aufsatz steht auf Durch alles | Setzen Sie Ende auf Blind oder Mittelebene |
| „Auf dieser Seite der Skizze gibt es nichts zu schneiden. Versuchen Sie die andere Richtung.“ | Der Ausschnitt zeigt vom Material weg | Haken Sie Richtung umkehren an |
| „Es gibt noch nichts zu schneiden.“ / „Es gibt noch nichts zu bohren.“ | Kein Volumenkörper vor diesem Feature | Erstellen Sie zuerst einen Aufsatz, oder verschieben Sie das Feature nach unten |
| „Zeichnen Sie eine Mittellinie (eine Konstruktionslinie) in die Skizze, um die gedreht wird.“ | Drehen ohne Achse | Fügen Sie eine Mittellinie hinzu, oder wählen Sie unter Achse eine Linie |
| „Das Profil kreuzt die Achse. Halten Sie es auf einer Seite der Mittellinie.“ | Profil auf beiden Seiten der Achse | Zeichnen Sie die Hälfte des Profils neu |
| „Setzen Sie Skizzenpunkte dorthin, wo die Löcher hinkommen (Punktwerkzeug), dann erstellen Sie die Bohrung.“ | Keine losen Punkte in der Skizze | Fügen Sie Punkte mit {{key:P}} hinzu |
| „Die Senkbohrung muss breiter sein als die Bohrung.“ | Senkbohrung-⌀ nicht größer als Durchmesser | Machen Sie die Senkbohrung breiter |
| „Die Senkbohrung muss flacher sein als die Bohrung.“ | Senkbohrung tiefer als eine Sackbohrung | Machen Sie sie flacher, oder die Bohrung tiefer |
| „Wählen Sie die Features zum Kopieren.“ | Ein Muster oder eine Spiegelung ohne angehakte Auswahl | Haken Sie ein Feature unter Features zum Kopieren an |
| „Extrude2 hat keinen Volumenkörper zum Kopieren.“ | Das kopierte Feature ist fehlgeschlagen oder ausgeschaltet | Beheben oder unterdrücken Sie es, oder heben Sie die Unterdrückung auf |
| „Braucht Sketch3, das fehlschlägt.“ | Ein Feature, von dem es abhängt, ist nicht erstellt | Beheben Sie das Feature, das genannt wird |
| „Die Fläche, auf der es liegt, ist weg (Extrude1 ist nicht erstellt).“ | Die Fläche der Skizze existiert nicht mehr | Beheben Sie dieses Feature, oder löschen Sie die Skizze und skizzieren Sie neu |
| „Nach diesem bleibt nichts vom Bauteil übrig.“ | Ein Ausschnitt hat alles Material entfernt | Prüfen Sie Größe und Richtung des Ausschnitts |
| „Der Volumenkörper-Kernel konnte das nicht erstellen (…).“ oder „Der Volumenkörper-Kernel konnte das nicht mit dem Körper vereinigen.“ | Der Kernel hat die Geometrie abgelehnt | Rückgängig, oder ändern Sie die Maße leicht; genau aneinanderstoßende Flächen können es verursachen |
| „Sweep: noch nicht umgesetzt. Dafür ist ein exakter Kernel nötig, den diese Version von PartCraft nicht hat.“ (ebenso Loft, Rippe und die anderen) | Ein Feature aus einem früheren Build, das nur ein exakter Kernel erstellen kann. Es bleibt im Verlauf und wird unverändert zurückgespeichert | Unterdrücken oder löschen Sie es; siehe [Was noch nicht umgesetzt ist](topic:not-built-yet), was Sie stattdessen tun können |
| „Eine Verrundung von 5 mm passt hier nicht (…).“ / „Eine Fase von 2 mm …“ | Das Maß ist zu groß für eine Fläche neben der Kante, oder die Ecke kann nicht verrundet werden | Kleineres Maß, oder weniger Kanten je Feature |
| „Verrundung: In dieser Version nur gerade Kanten zwischen zwei ebenen Flächen (der Netzkernel erstellt sie). Runden oder fasen Sie gekrümmte Kanten in der Skizze.“ (ebenso Fase) | Eine gewählte Kante ist rund, etwa der Rand einer Bohrung, oder liegt auf einer gekrümmten Fläche | {{ui:Kanten wählen}} und entfernen Sie sie; runden oder fasen Sie stattdessen diese Ecke in der Skizze |
| „Eine Verrundung, deren Radius sich entlang der Kante ändert: noch nicht umgesetzt (dafür braucht sie einen exakten Kernel). Geben Sie einen Radius an.“ | **Variabler Radius** ist angehakt | Entfernen Sie den Haken, und geben Sie einen Radius an |
| „Verrundung durch den Netzkernel: Wo gerundete Kanten zusammentreffen, werden sie auf Gehrung geschnitten, nicht verschmolzen.“ (⚠, eine Warnung) | Gewählte Kanten treffen sich an einer Ecke; die Rundungen treffen dort in einem scharfen Knick aufeinander | Nichts zu beheben: Das Bauteil ist erstellt. Verrunden Sie weniger Kanten, wenn der Knick wichtig ist |
| „Eine Kante, die sie rundet, ist weg: die Kante zwischen Extrude1 und Cut2.“ | Eine frühere Änderung hat die Kante entfernt | {{ui:Kanten wählen}}, entfernen Sie die rote Kante, und wählen Sie die neue |
| „Wählen Sie die Kanten in der Ansicht und fügen Sie sie dann hinzu.“ | Verrundung oder Fase hat keine Kanten | {{ui:Kanten wählen}} |
| „Wählen Sie die Flächen zum Entfernen (öffnen), dann Schale.“ | Die Schale hat keine offenen Flächen | {{ui:Flächen wählen}} |
| „Die Schale konnte mit dieser Dicke nicht erstellt werden (…).“ | Die Wand ist dicker als ein dünner Teil des Modells oder ein Verrundungsradius | Eine dünnere Wand, oder größere Verrundungen |
| „Schale: In dieser Version werden nur ebene Flächen geöffnet (der Netzkernel erstellt sie).“ | Eine zu öffnende Fläche ist gekrümmt | {{ui:Flächen wählen}} und entfernen Sie sie; öffnen Sie nur ebene Flächen |
| „Formschräge: In dieser Version nur ebene Flächen (der Netzkernel erstellt sie).“ | Eine Fläche mit Formschräge ist ein Zylinder, ein Kegel oder eine Freiformfläche | Entfernen Sie sie; versehen Sie nur ebene Flächen mit Formschräge |
| „Eine Fläche, die es öffnet, ist weg (…).“ | Eine frühere Änderung hat die Fläche entfernt | {{ui:Flächen wählen}} erneut |
| „Fillet1 ändert die Kanten oder Wände des Körpers; es kann nicht kopiert werden. …“ | Ein Muster oder eine Spiegelung kopiert eine Verrundung, Fase oder Schale | Haken Sie sie ab; erstellen Sie zuerst das Muster der Ausschnitte, dann die Verrundung |
| „Es liegt auf einer Fläche, die nur ein exakter Kernel finden kann: in dieser Version noch nicht umgesetzt.“ | Eine Skizze auf einer Fläche, die der Netzkernel nicht findet, etwa eine aus einem früheren Build | Skizzieren Sie auf einer Grundebene oder einer ebenen Fläche einer Extrusion, und positionieren Sie die Skizze mit Bemaßungen |
| „Es verwendet eine Fläche oder Kante des Volumenkörpers, die nur ein exakter Kernel finden kann: in dieser Version noch nicht umgesetzt.“ | Eine Bezugsebene, Achse oder ein Punkt auf einer Fläche oder Kante des Volumenkörpers | Erstellen Sie sie aus Grundebenen, Skizzenpunkten oder Koordinaten |
| „Extrudieren bis zu einer Fläche, der nächsten Fläche oder einem Eckpunkt: noch nicht umgesetzt (dafür braucht es einen exakten Kernel).“ / „Eine Verjüngung: noch nicht umgesetzt (dafür braucht es einen exakten Kernel).“ | Eine Endbedingung oder Verjüngung, die nur ein exakter Kernel erstellt | Verwenden Sie eine Tiefe Blind oder Mittelebene, die Sie messen; lassen Sie Verjüngung bei 0 |

## Auswahlprobleme

- „Diese Fläche ist gekrümmt. Wählen Sie eine ebene Fläche oder eine Ebene zum Skizzieren.“ Skizzen brauchen eine ebene Fläche. Skizzieren Sie auf einer Grundebene, und positionieren Sie die Skizze stattdessen mit Bemaßungen.
- Eine Fläche zeigt „Fest, wo gewählt“: Sie wurde nicht durch eine Skizzenkante erstellt (zum Beispiel eine Fläche einer Musterkopie), daher bleibt eine Skizze darauf stehen, wenn sich das Bauteil ändert.
- Kanten sind schwer zu treffen: Zoomen Sie hinein. Eine Kante gewinnt gegenüber der Fläche daneben, wenn der Zeiger genau auf ihr liegt.

## Dateiprobleme

| Meldung | Lösung |
|---|---|
| 'PartCraft öffnet seine eigenen .partcraft.json-Dateien, Exporte aus dem CadCraft-Makro für SolidWorks (.cadcraft-sw.json) und STEP-Dateien. "bracket.igs" ist keine davon.' | Nur diese Dateien werden erkannt (sowie STL-, OBJ- und 3MF-Netze und `.3dm`-Dateien) |
| '"part.stp" ist keine STEP-Datei (sie beginnt nicht mit ISO-10303-21).' | Die Datei ist kein STEP-Text |
| „Diese STEP-Datei ist zu groß (über 60 MB), um sie hier zu importieren.“ | Vereinfachen Sie sie an der Quelle |
| „Diese Datei ist zu groß für ein PartCraft-Bauteil.“ bei Ihrem eigenen gespeicherten Bauteil | Ein großer STEP-Volumenkörper, den ein früherer Build importiert hat, machte die Bauteildatei größer als 50 MB. Verwenden Sie eine frühere Kopie ohne ihn |
| „Diese Datei ist zu groß für ein PartCraft-Bauteil.“ | Die Datei ist größer als 50 MB; sie ist keine PartCraft-Datei |
| „Dies ist keine PartCraft-Datei (sie ist kein JSON).“ / „Dies ist keine PartCraft-Datei.“ | Die Datei ist beschädigt oder gehört einem anderen Programm |
| „Diese Datei wurde von einer neueren PartCraft-Version gespeichert (Dateiversion …); diese liest Version …“ | Öffnen Sie sie in der neueren PartCraft |
| „Extrude2: Die Tiefe ist ungültig.“ (oder ein anderer Wert) | Die Datei wurde von Hand bearbeitet oder beschädigt. Verwenden Sie eine frühere Kopie |
| Einfügen in einer Baugruppe meldet „Part1.partcraft.json hat keinen Volumenkörper zum Einfügen.“ | Die Bauteildatei hat keinen Volumenkörper. Öffnen Sie sie, erstellen Sie einen Volumenkörper, speichern Sie und fügen Sie erneut ein |

**Meine gespeicherte Datei ist nicht dort, wo ich sie erwartet habe.** Speichern ist ein Download: Sehen Sie im Downloads-Ordner Ihres Browsers nach, oder öffnen Sie die Downloadliste über die Symbolleiste des Browsers. Siehe [Wo Ihre Dateien landen](common:your-files).

**Ich habe ein Bauteil geöffnet, aber die Baugruppe ist noch auf dem Bildschirm.** Das Bauteil wurde hinter der Baugruppe geladen. Wählen Sie {{ui:Schließen}}, um die Baugruppe zu schließen und das Bauteil zu sehen. Schließen Sie Baugruppen, bevor Sie Bauteildateien öffnen.

## Zeichnungsprobleme

| Meldung | Lösung |
|---|---|
| „Erstellen Sie zuerst einen Volumenkörper, dann seine Zeichnung.“ | Bauen Sie zuerst das Bauteil |
| „Kein Platz auf dem Blatt für: Detail. Machen Sie das Detail kleiner, oder lassen Sie eine Ansicht weg.“ | Kleinerer **Detailradius** oder **Detailmaßstab**, oder entfernen Sie den Schnitt |
| „Ein Detail wird aus der Ansicht Vorne, Oben, Rechts oder Schnitt genommen.“ | Klicken Sie auf eine dieser Ansichten |
| „Klicken Sie auf eine der Ansichten.“ | Der Klick war auf leerem Papier |
| „Position braucht mindestens einen Bezug.“ und andere Rahmenmeldungen | Legen Sie die Bezüge fest, die der Bereich verlangt, oder wählen Sie ein anderes Merkmal |
| „Die Zeichnungsansichten konnten nicht erstellt werden: …“ | Machen Sie die letzte Änderung rückgängig. Tritt es weiter auf, speichern Sie, laden Sie neu und öffnen Sie das Bauteil erneut |

## Baugruppenprobleme

| Meldung | Lösung |
|---|---|
| „Erstellen Sie zuerst einen Volumenkörper, dann setzen Sie ihn in eine Baugruppe.“ | Das Bauteil hat noch keinen Volumenkörper |
| „Fügen Sie zuerst ein zweites Bauteil ein (Kopie hinzufügen, Einfügen oder Bearbeiten › Duplizieren).“ | Eine Verbindung braucht zwei Bauteile |
| „Wählen Sie eine Fläche an einem anderen Bauteil.“ | Beide Flächen einer Verbindung müssen an verschiedenen Bauteilen liegen |
| „Diese Fläche ist gekrümmt. Wählen Sie eine ebene Fläche …“ | Verbindungen beginnen an ebenen Flächen. Verwenden Sie danach **Zentrieren auf** für eine Bohrung oder Drehachse |
| „Bracket2 ist nicht mit dem festen Bauteil verbunden und bleibt daher, wo es abgesetzt wurde.“ | Fügen Sie eine Verbindung von ihm zu einem Bauteil hinzu, das platziert ist |
| „Revolute3 schließt eine Schleife, die sich nicht schließen kann: Sie ist um 2.000 mm daneben. Prüfen Sie die Flächen, Versätze und Grenzen der Verbindungen der Schleife.“ | Die Bauteile können sich nicht alle treffen: Prüfen Sie die Längen, die Flächen, die jede Verbindung verwendet, Versätze (Bauteile, die Fläche auf Fläche gestapelt sind, müssen in der Tiefe übereinstimmen) und Grenzen; oder entfernen Sie eine Verbindung der Schleife |
| „Die Fläche, die diese Verbindung verwendet, ist aus Bracket verschwunden.“ / „Die Achse, die diese Verbindung verwendet, ist aus Bracket verschwunden.“ | Das Bauteil wurde bearbeitet. Entfernen Sie die Verbindung, und erstellen Sie sie neu |
| „Die Achse verläuft entlang der Fläche, daher kann sie den Mittelpunkt der Verbindung nicht festlegen.“ | Wählen Sie eine Achse, die die Fläche kreuzt, oder „Der eigene Ursprung der Fläche“ |
| „Eine Baugruppe behält mindestens ein Bauteil. Schließen Sie sie stattdessen.“ | Verwenden Sie {{ui:Schließen}} |

**Die Bauteile sind verbunden, aber an der falschen Stelle.** Setzen Sie **Zentrieren auf** für beide Seiten der Verbindung auf die Bohrungen oder Drehachsen, die fluchten sollen, und passen Sie dann **Winkel (°)** und **Versatz (mm)** an.

## Es ist langsam

- Stellen Sie **Kurven** beim Modellieren auf Normal oder Grob; schalten Sie vor dem Exportieren auf Fein.
- Große Musteranzahlen (hunderte Kopien) brauchen bei jeder Änderung Zeit zum Neuaufbau. Unterdrücken Sie das Muster, während Sie an anderen Features arbeiten.
- Kollisionsprüfung und Bewegungsprüfung vergleichen jedes Paar von Bauteilen; große Baugruppen brauchen länger.
- Schließen Sie andere speicherintensive Tabs. PartCraft läuft auf dem Prozessor und der Grafik Ihres eigenen Computers.

## Noch immer hängen

Speichern Sie Ihre Datei zuerst ({{key:Mod+S}}), laden Sie die Seite neu und öffnen Sie die Datei erneut. Schlägt ein Feature weiterhin fehl, wählen Sie es aus, lesen Sie seine Meldung und probieren Sie {{key:Mod+Z}}, um zum letzten guten Zustand zurückzugehen.
