---
title: Dateiformate
summary: Jede Datei, die PartCraft liest und schreibt, mit Erweiterungen, Einheiten, Achsen und dem, was jedes Format behält oder verliert.
keywords: formate, dateitypen, erweiterungen, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, netz, step, stp, ap242, dxf, r12, pdf, gltf, iges, einheiten, z oben
from: 4d0ecbee
---

| Format | Erweiterung | Öffnen | Speichern oder exportieren | Einheiten | Achse oben | Behält |
|---|---|---|---|---|---|---|
| PartCraft-Bauteil | `.partcraft.json` | Ja | {{ui:Speichern}} | mm | Y | Den vollständigen Verlauf: Skizzen, Abhängigkeiten, Maße, Features, Unterdrückung, Zurückrollposition, Einstellung der Kurven, Einstellungen der Zeichnung und GD&T, STEP-Text, der in einem früheren Build importiert wurde |
| PartCraft-Baugruppe | `.partcraft-asm.json` | Ja | {{ui:Speichern}} in einer Baugruppe | mm | Y | Jedes Bauteil (eingebettet), die Kopien und ihre Positionen, die Verbindungen |
| STL (binär oder Text) | `.stl` | Ja, als Volumenkörper: [STL, OBJ oder 3MF öffnen](topic:open-meshes) | {{ui:STL, für den 3D-Druck}} | mm (wird beim Öffnen abgefragt) | Z | Nur die Dreiecke des Volumenkörpers |
| 3MF | `.3mf` | Ja, als Volumenkörper | {{ui:3MF, für den 3D-Druck}} | mm (steht in der Datei) | Z | Der Volumenkörper als ein Netzobjekt |
| OBJ | `.obj` | Ja, als Volumenkörper (nur Flächen) | Nein | Beim Öffnen abgefragt | Z oder Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, als Volumenkörper, gelesen als Dreiecke (gekrümmte Flächen als Facetten gezeichnet; die ebenen Flächen, Zylinder, Kegel, Kugeln und Tori der Datei bleiben für den exakten Export erhalten): [STEP-Datei öffnen](topic:import-step) | | mm (aus der Einheit der Datei) | Z, oder Y, wenn Sie es angeben | Die Volumenkörper und Oberflächenkörper, Baugruppen mit allen Bauteilen an ihrem Platz; keine Farben, Namen, kein Baugruppenbaum und keine PMI |
| `.3dm` | `.3dm` | Ja, als ein Volumenkörper aus seinen Netzen und Flächen (gespeicherte Render-Netze, sonst tesseliert): [Ein .3dm-Modell öffnen](topic:open-3dm-files) | | Aus der Einheit der Datei | Z, oder Y, wenn Sie es angeben | Netze, Polyflächen, Extrusionen und Blockplatzierungen als ein Körper; keine Kurven, Farben, Layer oder Namen |
| STEP AP242, exakt | `.step` | | {{ui:STEP AP242 (exakter Volumenkörper)}} | mm | Z | Ein exakter Volumenkörper: ebene Flächen, Zylinder, Kegel, Kugeln und Tori auf ihren echten Oberflächen, echte Kreise und Linien als Kanten; Spline-Seiten, modellierte Gewinde, Körper aus Netzdateien und Spline-Flächen einer STEP-Datei bleiben Facetten. Das STEP für andere CAD- und CAM-Programme |
| STEP AP214, exakt | `.step` | | {{ui:STEP AP214 (exakter Volumenkörper)}} | mm | Z | Derselbe exakte Volumenkörper im älteren Schema AP214, für Programme, die nur dieses lesen |
| STEP AP242, facettiert | `.step` | | {{ui:STEP (facettiert, Netzkernel)}} | mm | Y | Ein geschlossener Volumenkörper aus ebenen Flächen: runde Flächen als Facetten. Für ein Programm, das die exakte Datei ablehnt |
| STEP AP214, facettiert | `.step` | | {{ui:STEP AP214 (facettiert, Netzkernel)}} | mm | Y | Derselbe Volumenkörper im älteren Schema AP214, für Programme, die nur dieses lesen |
| USD-Paket | `.usdz` | Nein | {{ui:USD-Paket (.usdz)}} | m | Z | Der Volumenkörper mit seinem Material, Volumen und Masse; eine Baugruppe mit jedem Bauteil einmal und jeder Kopie platziert: [Als USD exportieren](topic:usd) |
| IFC 4 | `.ifc` | Nein | {{ui:IFC 4 (mit allen Eigenschaften)}} | mm | Z | Die Form als Dreiecke, das Material, jeder Parameter, das Schriftfeld, die Mengen; die Bauteile einer Baugruppe als Typen und ihre Kopien platziert |
| DXF R12, Skizze | `.dxf` | Nein | {{ui:DXF der Skizze oder ebenen Fläche}} bei ausgewählter Skizze | mm | Eigene x- und y-Achse der Skizze | Linien, echte Bögen und Kreise, Punkte; Layer PROFILE, CONSTRUCTION, POINTS |
| DXF R12, Fläche | `.dxf` | Nein | {{ui:DXF der Skizze oder ebenen Fläche}} bei gewählter ebener Fläche | mm | Eigene x- und y-Achse der Fläche | Die Umrisse der Fläche: runde Bohrungen als echte Kreise, der Rest als geschlossene Polylinien (runde Kanten als Facetten) |
| PDF-Zeichnung | `.pdf` | Nein | {{ui:Zeichnung (PDF): Ansichten, Schnitt, Detail, GD&T}} | mm auf einem A3-Blatt | | Vorder-, Drauf-, Rechts-, isometrische, Schnitt- und Detailansichten aus Facetten gezeichnet, verdeckte Linien, Gesamtabmessungen, GD&T-Symbole, Schriftfeld |

## Die PartCraft-Dateien

Beide sind reiner Text (JSON). Der Volumenkörper wird nie gespeichert: PartCraft baut ihn aus dem Verlauf neu auf, daher bleiben die Dateien klein und stimmen immer mit dem Verlauf überein.

- Jede Datei hat eine Versionsnummer. Dieser Build schreibt jede Bauteildatei mit der niedrigsten Version, die das Verwendete enthält (2 bis 5; ein Körper aus einem Netz braucht 5), und öffnet jede ältere Version. Eine Datei aus einem neueren PartCraft wird mit einer Meldung abgelehnt, die beide Versionen nennt.
- Jeder Wert wird beim Öffnen einer Datei geprüft. Namen verlieren Steuerzeichen; Zahlen außerhalb des Bereichs, Verweise auf fehlende Features und unbekannte Feature-Arten werden mit einem klaren Grund abgelehnt.
- Bearbeiten Sie diese Dateien nicht von Hand, außer Sie kennen das Format. Eine Datei, die die Prüfungen nicht besteht, lässt sich nicht öffnen.
- Ein Bauteil mit einem großen STEP-Volumenkörper, der in einem früheren Build importiert wurde, kann 50 MB überschreiten, das ist mehr, als PartCraft als Bauteildatei öffnet (siehe [Fehlerbehebung](topic:troubleshooting#file-problems)).

## Facetten und Exaktheit

STL und 3MF bestehen immer aus Facetten, entsprechend der Einstellung **Kurven**, und ebenso die DXF-Datei einer Fläche, außer bei runden Bohrungen, die echte Kreise sind. Die DXF-Datei einer Skizze hat echte Bögen und Kreise, da sie direkt aus der Skizze stammt. Diese Version erstellt jedes Bauteil mit dem Mesh-Kernel, daher sind auch die Ansichten der Zeichnung (einschließlich Schnitte) facettiert. Der exakte STEP-Export ist die Ausnahme: Der Kernel kennt die echte Oberfläche jeder Fläche aus der Skizze (oder aus der STEP-Datei, aus der ein Körper geöffnet wurde), daher werden runde Flächen als echte Zylinder, Kegel, Kugeln und Tori geschrieben, unabhängig von der Einstellung **Kurven** (siehe [Export zum Drucken, STEP und DXF](topic:export-files#for-other-cad-programs-step)).

## Nicht unterstützt in diesem Build

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (ein- oder ausgehend); OBJ-Export | Noch nicht umgesetzt |
| DWG | Nur vom [Varianten-Paket](topic:variant-pack) geschrieben, als Zeichnungsblatt jeder Konfiguration. Nicht gelesen, kein anderer Export. DXF exportieren; jedes CAD-Programm öffnet R12-DXF |
| STEP einer Baugruppe und die Zeichnung einer Baugruppe | Noch nicht umgesetzt. Exportieren Sie jedes Bauteil als exaktes STEP; STL, 3MF und die Stückliste werden aus einer Baugruppe exportiert |
| Eigene Bauteil- und Baugruppendateien anderer Programme (außer `.3dm`, das als ein Körper geöffnet wird) | Noch nicht umgesetzt |

Siehe [Was noch nicht umgesetzt ist](topic:not-built-yet).
