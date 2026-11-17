---
title: Exporteren voor printen, STEP en DXF
summary: Exporteer het onderdeel als STL of 3MF voor 3D-printen, als exact STEP-volume voor andere CAD- en CAM-programma's, en een schets of plat vlak als DXF voor laser- en waterstraalsnijden.
keywords: exporteren, opslaan als, ifc, bim, eigenschapssets, stl, 3mf, 3D-printen, slicer, step, stp, exacte step, b-rep, ap242, ap214, cam, werkplaats, frezen, dxf, laser, waterstraal, cnc, uitslag, profiel, mesh, gefacetteerd
from: e1de71d5
---

Exports zijn kopieën in andere formaten. Bewaar het bestand `.partcraft.json` ook: het is het enige bestand dat PartCraft opnieuw kan openen en bewerken.

Alle exports werken op het onderdeel op het scherm, in millimeter. In een samenstelling exporteren STL, 3MF, STEP en Tekening (PDF) in plaats daarvan de hele samenstelling: zie [Stuklijst, explosietekeningen en bewegende onderdelen](topic:assembly-bom-explode). Als er nog geen volume is: "Er is nog geen volume om te exporteren."

## Voor 3D-printen: STL of 3MF

1. Optioneel: voor gladde ronde vlakken klikt u op lege ruimte zodat niets is geselecteerd, en zet u **Rondingen** op **Fijn (128 per omwenteling)** of **Zeer fijn (256 per omwenteling)** in het rechterpaneel. STL en 3MF bestaan altijd uit driehoeken.
2. Kies {{ui:Exporteren}}, dan {{ui:STL, voor 3D-printen}} of {{ui:3MF, voor 3D-printen}}.
3. Het bestand wordt gedownload. De statusbalk toont bijvoorbeeld: "Geëxporteerd Part1.stl (binair, mm, Z omhoog, 1536 driehoeken)."

Beide formaten zijn **Z omhoog**, zoals printers en slicers verwachten. De eigen wereld van PartCraft is Y omhoog, dus de export draait het onderdeel: wat in PartCraft omhoog wijst (loodrecht op het Bovenvlak) wijst in de slicer omhoog, en een onderdeel dat op het Bovenvlak is geschetst ligt plat op het bed. Stel de definitieve oriëntatie zo nodig in uw slicer in.

3MF is een nieuwer, kleiner formaat dat slicers lezen met de eenheden erbij. Gebruik STL als een programma geen 3MF accepteert.

Om eerst te controleren of het onderdeel gesloten is, op de printplaat past en op een plat vlak staat, gebruikt u {{ui:Exporteren}} › {{ui:Controleren op 3D-printen (STL of 3MF)…}}: zie [Een onderdeel klaarmaken voor 3D-printen](topic:print-3d).

## Voor andere CAD-programma's: STEP

Kies {{ui:Exporteren}}, dan {{ui:STEP AP242 (exact volume)}}. Het schrijft het onderdeel als één exact volume, in millimeter, gedraaid naar Z omhoog. Ronde vlakken worden geschreven als echte cilinders, kegels, bollen en torussen, met echte cirkels als randen, zodat het andere programma een gat als gat kan herkennen. Een lichaam dat uit een STEP-bestand is geopend, behoudt de vlakke vlakken, cilinders, kegels, bollen en torussen van dat bestand, dus die gaan ook exact mee. Vlakken zonder zo'n oppervlak (de zijkant van een spline, een gemodelleerde schroefdraad, een lichaam uit een STL-, OBJ- of 3MF-mesh, de spline van een STEP-bestand, uitgeveegde en omgewentelde vlakken) blijven vlakke facetten in hetzelfde volume, en de statusbalk zegt hoeveel. De statusbalk toont bijvoorbeeld: "Geëxporteerd Flange.step (AP242, exact volume, mm, Z omhoog): 14 vlakken op hun echte oppervlakken (10 cilindrisch, 1 conisch, 0 bolvormig, 0 torusvormig), 0 gepaste randcurven." Het bevat alleen het volume: geen geschiedenis, geen schetsen, geen tekening. Leest het andere programma alleen AP214, kies dan {{ui:STEP AP214 (exact volume)}}: hetzelfde volume in dat oudere schema.

Wat exact is en wat niet:

- Vlakke vlakken, cilinders (gaten, bossen, afrondingen op rechte randen), kegels (verzinkingen, taps), bollen en torussen zijn exact, en dat geldt ook voor hun rechte, cirkelvormige en elliptische randen. De instelling **Rondingen** verandert ze niet.
- Waar twee ronde vlakken elkaar kruisen (een gat dwars door een as), is de rand een gladde curve die binnen 0.00001 mm op beide oppervlakken past; "gepaste randcurven" telt ze.
- Een gesloten holte in het onderdeel wordt geschreven als een leegte in het volume. Meerdere losse lichamen worden geschreven als meerdere volumes.
- Een samenstelling wordt nog niet als exacte STEP geschreven: exporteer elk onderdeel afzonderlijk.

Het is gecontroleerd door de bestanden terug te lezen in OpenCascade, dat geldige volumes meldt met de volumes die met de hand zijn berekend. Het is nog niet in elk CAD- of CAM-programma geopend; weigert een programma een bestand, dan schrijft {{ui:STEP (gefacetteerd, meshkernel)}} dezelfde vorm als vlakke vlakken (in de eigen assen van PartCraft, Y omhoog). Laat ons dit weten via {{ui:Help}} › {{ui:Een probleem melden}}.

Voor bewerking schrijft de werkomgeving Fabricage ook het exacte volume in de eigen werkcoördinaten van de opspanning: zie [Gereedschapsbanen en G-code maken](topic:manufacture#exact-step-for-the-shop).

## Voor BIM-programma's: IFC met elke eigenschap

Kies {{ui:Exporteren}}, dan {{ui:IFC 4 (met elke eigenschap)}}. Het schrijft het onderdeel als IFC 4-element voor gebouw- en installatiemodellen, de vorm als driehoeken (Z omhoog, millimeter), met wat PartCraft ervan weet als eigenschapssets:

| Eigenschapsset | Bevat |
|---|---|
| **PartCraft_Part** | Naam, materiaal en de dichtheid ervan, de actieve configuratie, het aantal lichamen; in een samenstelling ook het onderdeelnummer en de omschrijving |
| **PartCraft_Parameters** | Elke parameter van het onderdeel met zijn waarde; de expressie van een formule en een notitie staan in de beschrijving van de eigenschap |
| **PartCraft_TitleBlock** | De velden van het titelblok van de tekening die u hebt ingevuld (titel, tekeningnummer, revisie, bedrijf, getekend, gecontroleerd en goedgekeurd door, datum, afwerking, algemene tolerantie) en het bladformaat |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, oppervlakte, massa (met een materiaal) en de totale afmeting |

Het materiaal wordt als IFC-materiaal toegevoegd, en het tekeningnummer is de tag van het element. In een samenstelling wordt elk onderdeel één keer geschreven als type met zijn eigenschappen, en elke kopie wordt geplaatst waar de samenstelling haar zet, met eigen waarden in **PartCraft_Instance**: haar naam, haar positienummer in de stuklijst, en of het het vastgezette onderdeel is.

## Voor laser-, waterstraal- of CNC-profielen: DXF

Twee soorten DXF, beide versie R12, die elk CAD- en CAM-programma opent:

### Een schets

1. Selecteer de schets in de geschiedenis (of open haar).
2. Kies {{ui:Exporteren}}, dan {{ui:DXF van de schets of het platte vlak}}. (Het rechterpaneel van de schets heeft ook {{ui:Exporteren als DXF}}.)

U krijgt `<part> - <sketch>.dxf` in de eigen coördinaten van de schets: lijnen, echte bogen en cirkels op laag **PROFILE**, constructiegeometrie op **CONSTRUCTION**, losse punten op **POINTS**.

### Een plat vlak van het volume

1. Klik op een plat vlak in de weergave (bijvoorbeeld de bovenkant van een plaat met gaten).
2. Kies {{ui:Vlak exporteren als DXF}} in het rechterpaneel, of {{ui:Exporteren}}, dan {{ui:DXF van de schets of het platte vlak}}.

U krijgt `<part> - face.dxf`: de omtrek van het vlak en elk gat erin. Een rond gat (een volledige cirkel waar een cilinder het vlak raakt: een geboord gat, of een gat van een geopend STEP-bestand) wordt geschreven als echte cirkel met het eigen middelpunt en de eigen straal van het gat. Elke andere omtrek is een gesloten polylijn, en de ronde randen (afrondingshoeken, sleuven, bogen) zijn daarin facetten; zet daarom eerst **Rondingen** op Fijn als de snijkop ze nauwkeurig volgt. De statusbalk zegt hoeveel omtrekken er zijn, hoeveel daarvan echte cirkels zijn, en de oppervlakte van het vlak.

Als er geen schets en geen plat vlak is geselecteerd: "Open of selecteer een schets, of kies een plat vlak, om DXF te exporteren."

## Een tekening

De PDF-tekening heeft een eigen stappenplan: [Een tekenblad maken](topic:drawing-pdf).

## Formaten die niet beschikbaar zijn

glTF, OBJ, IGES en Parasolid worden in deze build niet geëxporteerd. DWG wordt alleen geschreven door het variantenpakket, als tekenblad: zie [Een variantenpakket maken van uw configuraties](topic:variant-pack). Zie [Bestandsformaten](topic:file-formats).
