---
title: Export zum Drucken, STEP und DXF
summary: Exportieren Sie das Bauteil als STL oder 3MF für den 3D-Druck, als exakten STEP-Volumenkörper für andere CAD- und CAM-Programme sowie eine Skizze oder ebene Fläche als DXF für das Laser- und Wasserstrahlschneiden.
keywords: exportieren, speichern unter, ifc, bim, eigenschaftssätze, stl, 3mf, 3D-Druck, slicer, step, stp, exaktes step, b-rep, ap242, ap214, cam, werkstatt, fräsen, dxf, laser, wasserstrahl, cnc, flachmuster, profil, netz, facettiert
from: e1de71d5
---

Exporte sind Kopien in anderen Formaten. Behalten Sie auch die Datei `.partcraft.json`: Sie ist die einzige Datei, die PartCraft wieder öffnen und bearbeiten kann.

Alle Exporte beziehen sich auf das Bauteil auf dem Bildschirm, in Millimetern. In einer Baugruppe exportieren STL, 3MF, STEP und Zeichnung (PDF) stattdessen die ganze Baugruppe: siehe [Stückliste, Explosionsdarstellungen und bewegliche Teile](topic:assembly-bom-explode). Gibt es noch keinen Volumenkörper: „Es gibt noch keinen Volumenkörper zum Exportieren.“

## Für den 3D-Druck: STL oder 3MF

1. Optional: Klicken Sie für glatte runde Flächen auf leeren Raum, damit nichts ausgewählt ist, und stellen Sie im rechten Bereich **Kurven** auf **Fein (128 pro Umdrehung)** oder **Sehr fein (256 pro Umdrehung)**. STL und 3MF bestehen immer aus Dreiecken.
2. Wählen Sie {{ui:Exportieren}} und dann {{ui:STL, für den 3D-Druck}} oder {{ui:3MF, für den 3D-Druck}}.
3. Die Datei wird heruntergeladen. In der Statusleiste steht zum Beispiel „Part1.stl exportiert (binär, mm, Z oben, 1536 Dreiecke).“

Beide Formate verwenden **Z oben**, wie Drucker und Slicer es erwarten. Die eigene Welt von PartCraft ist Y oben, daher dreht der Export das Bauteil: Was in PartCraft nach oben zeigt (senkrecht zur Ebene Oben), zeigt im Slicer nach oben, und ein auf der Ebene Oben skizziertes Bauteil liegt flach auf dem Druckbett. Legen Sie bei Bedarf die endgültige Ausrichtung im Slicer fest.

3MF ist ein neueres, kleineres Format, das Slicer mit Einheiten einlesen. Verwenden Sie STL, wenn ein Programm 3MF nicht annimmt.

Um vorab zu prüfen, ob das Bauteil geschlossen ist, auf das Druckbett passt und auf einer ebenen Fläche steht, verwenden Sie {{ui:Exportieren}} › {{ui:Auf 3D-Druck prüfen (STL oder 3MF) …}}: siehe [Bauteil für den 3D-Druck vorbereiten](topic:print-3d).

## Für andere CAD-Programme: STEP

Wählen Sie {{ui:Exportieren}} und dann {{ui:STEP AP242 (exakter Volumenkörper)}}. Es schreibt das Bauteil als einen exakten Volumenkörper in Millimetern, mit Z oben. Runde Flächen werden als echte Zylinder, Kegel, Kugeln und Tori geschrieben, mit echten Kreisen als Kanten, damit das andere Programm eine Bohrung als Bohrung auswählen kann. Ein aus einer STEP-Datei geöffneter Körper behält die ebenen Flächen, Zylinder, Kegel, Kugeln und Tori dieser Datei, sodass auch sie exakt exportiert werden. Flächen ohne eine solche Oberfläche (die Seite einer Spline, ein modelliertes Gewinde, ein Körper aus einem STL-, OBJ- oder 3MF-Netz, die Spline-Fläche einer STEP-Datei, gezogene und gedrehte Flächen) bleiben als ebene Facetten im selben Volumenkörper, und die Statusleiste nennt ihre Anzahl. Die Statusleiste zeigt zum Beispiel „Flange.step (AP242, exakter Volumenkörper, mm, Z oben) exportiert: 14 Flächen auf ihren echten Oberflächen (10 zylindrisch, 1 konisch, 0 kugelförmig, 0 torisch), 0 angepasste Kantenkurven.“ Die Datei enthält nur den Volumenkörper: keinen Verlauf, keine Skizzen, keine Zeichnung. Liest das andere Programm nur AP214, wählen Sie {{ui:STEP AP214 (exakter Volumenkörper)}}: derselbe Volumenkörper im älteren Schema.

Was exakt ist und was nicht:

- Ebene Flächen, Zylinder (Bohrungen, Aufsätze, Verrundungen an geraden Kanten), Kegel (Senkungen, Verjüngungen), Kugeln und Tori sind exakt, ebenso ihre geraden, kreisförmigen und elliptischen Kanten. Die Einstellung **Kurven** ändert sie nicht.
- Wo sich zwei runde Flächen schneiden (eine Bohrung quer durch eine Welle), ist die Kante eine glatte Kurve, die auf beide Flächen innerhalb von 0.00001 mm angepasst ist; „angepasste Kantenkurven“ zählt sie.
- Ein geschlossener Hohlraum im Bauteil wird als Lücke des Volumenkörpers geschrieben. Mehrere getrennte Körper werden als mehrere Volumenkörper geschrieben.
- Eine Baugruppe wird noch nicht als exaktes STEP geschrieben: Exportieren Sie jedes Bauteil einzeln.

Die Datei wurde durch Zurücklesen in OpenCascade geprüft, das gültige Volumenkörper mit Volumina meldet, die von Hand nachgerechnet wurden. Sie wurde noch nicht in jedem CAD- oder CAM-Programm geöffnet. Lehnt ein Programm eine Datei ab, schreibt {{ui:STEP (facettiert, Netzkernel)}} dieselbe Form als ebene Flächen (in den eigenen Achsen von PartCraft, Y oben). Bitte melden Sie es über {{ui:Hilfe}} › {{ui:Problem melden}}.

Für die Bearbeitung schreibt der Arbeitsbereich Fertigung den exakten Volumenkörper außerdem in den Werkstückkoordinaten der Aufspannung: siehe [Werkzeugwege und G-Code erzeugen](topic:manufacture#exact-step-for-the-shop).

## Für BIM-Programme: IFC mit allen Eigenschaften

Wählen Sie {{ui:Exportieren}} und dann {{ui:IFC 4 (mit allen Eigenschaften)}}. Es schreibt das Bauteil als IFC-4-Element für Gebäude- und Anlagenmodelle, seine Form als Dreiecke (Z oben, Millimeter), mit dem, was PartCraft darüber weiß, als Eigenschaftssätze:

| Eigenschaftssatz | Enthält |
|---|---|
| **PartCraft_Part** | Name, Material und seine Dichte, die aktive Konfiguration, die Anzahl der Körper; in einer Baugruppe außerdem Teilenummer und Beschreibung |
| **PartCraft_Parameters** | Jeden Parameter des Bauteils mit seinem Wert; Ausdruck und Notiz einer Formel stehen in der Beschreibung der Eigenschaft |
| **PartCraft_TitleBlock** | Die ausgefüllten Felder des Schriftfelds der Zeichnung (Titel, Zeichnungsnummer, Revision, Firma, gezeichnet, geprüft und genehmigt von, Datum, Oberflächengüte, Allgemeintoleranz) und die Blattgröße |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, Oberfläche, Masse (mit einem Material) und die Gesamtabmessungen |

Das Material wird als IFC-Material angehängt, und die Zeichnungsnummer ist die Kennzeichnung (Tag) des Elements. In einer Baugruppe wird jedes Bauteil einmal als Typ mit seinen Eigenschaften geschrieben, und jede Kopie wird dort platziert, wo die Baugruppe sie setzt, mit eigenen Werten in **PartCraft_Instance**: Name, Positionsnummer in der Stückliste und ob es das festgesetzte Bauteil ist.

## Für Laser-, Wasserstrahl- oder CNC-Profile: DXF

Zwei Arten von DXF, beide in Version R12, die jedes CAD- und CAM-Programm öffnet:

### Eine Skizze

1. Wählen Sie die Skizze im Verlauf aus (oder öffnen Sie sie).
2. Wählen Sie {{ui:Exportieren}} und dann {{ui:DXF der Skizze oder ebenen Fläche}}. (Der rechte Bereich der Skizze hat außerdem {{ui:Als DXF exportieren}}.)

Sie erhalten `<Bauteil> - <Skizze>.dxf` in den eigenen Koordinaten der Skizze: Linien, echte Bögen und Kreise auf dem Layer **PROFILE**, Konstruktionsgeometrie auf **CONSTRUCTION**, lose Punkte auf **POINTS**.

### Eine ebene Fläche des Volumenkörpers

1. Klicken Sie im Ansichtsfenster auf eine ebene Fläche (zum Beispiel die Oberseite einer Platte mit Bohrungen).
2. Wählen Sie im rechten Bereich {{ui:Fläche als DXF exportieren}} oder {{ui:Exportieren}} und dann {{ui:DXF der Skizze oder ebenen Fläche}}.

Sie erhalten `<Bauteil> - face.dxf`: den Umriss der Fläche und jede Bohrung darin. Eine runde Bohrung (ein ganzer Kreis, wo ein Zylinder auf die Fläche trifft: eine gebohrte Bohrung oder eine Bohrung einer geöffneten STEP-Datei) wird als echter Kreis mit dem eigenen Mittelpunkt und Radius der Bohrung geschrieben. Jeder andere Umriss ist eine geschlossene Polylinie, und seine runden Kanten (Verrundungsecken, Nuten, Bögen) sind als Facetten dargestellt. Stellen Sie deshalb zuerst **Kurven** auf Fein, wenn das Werkzeug ihnen eng folgen soll. Die Statusleiste nennt die Anzahl der Umrisse, wie viele davon echte Kreise sind, und die Fläche.

Ist weder eine Skizze noch eine ebene Fläche ausgewählt: „Öffnen oder wählen Sie eine Skizze, oder klicken Sie auf eine ebene Fläche, um DXF zu exportieren.“

## Eine Zeichnung

Die PDF-Zeichnung hat eine eigene Anleitung: [Ein Zeichnungsblatt erstellen](topic:drawing-pdf).

## Nicht verfügbare Formate

glTF, OBJ, IGES und Parasolid werden in diesem Build nicht exportiert. DWG schreibt nur das Varianten-Paket, als Zeichnungsblatt: siehe [Ein Varianten-Paket aus Ihren Konfigurationen erstellen](topic:variant-pack). Siehe [Dateiformate](topic:file-formats).
