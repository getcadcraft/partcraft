---
title: Eksport til print, STEP og DXF
summary: Eksportér delen som STL eller 3MF til 3D-print, som et eksakt STEP-massivt legeme til andre CAD- og CAM-programmer, og en skitse eller en plan flade som DXF til laser- og vandskæring.
keywords: eksportér, gem som, ifc, bim, egenskabssæt, stl, 3mf, 3d-print, slicer, step, stp, eksakt step, b-rep, ap242, ap214, cam, værksted, fræsning, dxf, laser, vandskæring, cnc, fladt mønster, profil, mesh, facetteret
from: e1de71d5
---

Eksporter er kopier i andre formater. Behold også `.partcraft.json`-filen: det er den eneste fil PartCraft kan åbne igen og redigere.

Alle eksporter gælder for delen på skærmen, i millimeter. I en samling eksporterer STL, 3MF, STEP og Tegning (PDF) i stedet hele samlingen: se [Stykliste, eksploderede visninger og bevægelige dele](topic:assembly-bom-explode). Hvis der endnu ikke er noget massivt legeme: »Der er endnu intet massivt legeme at eksportere.«

## Til 3D-print: STL eller 3MF

1. Valgfrit: for glatte runde flader klik på tomt rum, så intet er valgt, og sæt **Kurver** til **Fin (128 pr. omdrejning)** eller **Meget fin (256 pr. omdrejning)** i højre panel. STL og 3MF består altid af trekanter.
2. Vælg {{ui:Eksportér}}, og vælg derefter {{ui:STL, til 3D-print}} eller {{ui:3MF, til 3D-print}}.
3. Filen downloades. Statuslinjen siger for eksempel »Eksporteret Part1.stl (binær, mm, Z op, 1536 trekanter).«

Begge formater er **Z op**, som printere og slicere forventer. PartCraft's egen verden er Y op, så eksporten drejer delen: det der peger opad i PartCraft (vinkelret på planet Top) peger opad i slicer'en, og en del skitseret på planet Top ligger fladt på printerens bord. Angiv den endelige orientering i din slicer, hvis det er nødvendigt.

3MF er et nyere, mindre format, som slicere læser med enheder medregnet. Brug STL, hvis et program ikke kan læse 3MF.

For at kontrollere først, at delen er lukket, passer på din printers bord og står på en plan flade, brug {{ui:Eksportér}} › {{ui:Kontrol til 3D-print (STL eller 3MF)…}}: se [Gør en del klar til 3D-print](topic:print-3d).

## Til andre CAD-programmer: STEP

Vælg {{ui:Eksportér}}, og vælg derefter {{ui:STEP AP242 (eksakt massivt legeme)}}. Det skriver delen som ét eksakt massivt legeme i millimeter, drejet til Z op. Runde flader skrives som sande cylindre, kegler, kugler og tori, med sande cirkler som kanter, så det andet program kan vælge et hul som et hul. Et legeme åbnet fra en STEP-fil beholder den fils plane flader, cylindre, kegler, kugler og tori, så de også eksporteres eksakt. Flader uden en sådan overflade (siden af en spline, et modelleret gevind, et legeme fra en STL-, OBJ- eller 3MF-mesh, en STEP-fils spline-flade, samt fejede og drejede flader) forbliver plane facetter i samme massive legeme, og statuslinjen siger hvor mange. Statuslinjen siger for eksempel »Eksporteret Flange.step (AP242, eksakt massivt legeme, mm, Z op): 14 flader på deres sande overflader (10 cylindriske, 1 konisk, 0 sfæriske, 0 toroidale), 0 tilpassede kantkurver.« Den indeholder kun det massive legeme: ingen historik, ingen skitser, ingen tegning. Hvis det andet program kun læser AP214, vælg {{ui:STEP AP214 (eksakt massivt legeme)}}: samme massive legeme i det ældre skema.

Hvad der er eksakt, og hvad der ikke er:

- Plane flader, cylindre (huller, ophøjninger, afrundinger på rette kanter), kegler (forsænkninger, skrå flader), kugler og tori er eksakte, og det samme gælder deres rette, cirkulære og elliptiske kanter. Indstillingen **Kurver** ændrer dem ikke.
- Hvor to runde flader skærer hinanden (et hul boret tværs gennem en aksel), er kanten en glat kurve tilpasset begge overflader inden for 0.00001 mm; »tilpassede kantkurver« tæller dem.
- Et lukket hulrum inde i delen skrives som et tomrum i det massive legeme. Flere adskilte legemer skrives som flere massive legemer.
- En samling skrives ikke som eksakt STEP endnu: eksportér hver del.

Den er kontrolleret ved at læse filerne tilbage i OpenCascade, som rapporterer gyldige massive legemer med volumener regnet ud i hånden. Den er endnu ikke åbnet i alle CAD- eller CAM-programmer; hvis et program afviser en fil, skriver {{ui:STEP (facetteret, netkerne)}} samme form som plane flader (i PartCraft's egne akser, Y op), og giv os besked via {{ui:Hjælp}} › {{ui:Rapportér et problem}}.

Til bearbejdning skriver Manufacture-arbejdsområdet også det eksakte massive legeme i opsætningens egne arbejdskoordinater: se [Lav værktøjsbaner og G-kode](topic:manufacture#exact-step-for-the-shop).

## Til BIM-programmer: IFC med alle egenskaber

Vælg {{ui:Eksportér}}, og vælg derefter {{ui:IFC 4 (med alle egenskaber)}}. Det skriver delen som et IFC 4-element til bygnings- og anlægsmodeller, med dens form som trekanter (Z op, millimeter) og det PartCraft ved om den, som egenskabssæt:

| Egenskabssæt | Indeholder |
|---|---|
| **PartCraft_Part** | Navn, materiale og dets tæthed, den aktive konfiguration, antal legemer; i en samling også delnummer og beskrivelse |
| **PartCraft_Parameters** | Hver parameter for delen med dens værdi; en formels udtryk og en note står i egenskabens beskrivelse |
| **PartCraft_TitleBlock** | De tegningshoved-felter du har udfyldt (titel, tegningsnummer, revision, firma, tegnet, kontrolleret og godkendt af, dato, overfladebehandling, generel tolerance) og arkstørrelsen |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volumen, overfladeareal, masse (med et materiale) og den samlede størrelse |

Materialet vedhæftes som et IFC-materiale, og tegningsnummeret er elementets tag. I en samling skrives hver del én gang som en type med sine egenskaber, og hver kopi placeres, hvor samlingen placerer den, med sine egne værdier i **PartCraft_Instance**: navn, dens positionsnummer i stykliste, og om det er den fastholdte del.

## Til laser-, vandskære- eller CNC-profiler: DXF

To slags DXF, begge version R12, som alle CAD- og CAM-programmer åbner:

### En skitse

1. Vælg skitsen i historikken (eller få den åben).
2. Vælg {{ui:Eksportér}}, og vælg derefter {{ui:DXF af skitsen eller den plane flade}}. (Skitsens højre panel har også {{ui:Eksportér som DXF}}.)

Du får `<part> - <sketch>.dxf` i skitsens egne koordinater: linjer, sande buer og cirkler på laget **PROFILE**, konstruktionsgeometri på **CONSTRUCTION**, løse punkter på **POINTS**.

### En plan flade på legemet

1. Klik på en plan flade i visningen (for eksempel toppen af en plade med huller).
2. Vælg {{ui:Eksportér flade som DXF}} i højre panel, eller {{ui:Eksportér}}, og vælg derefter {{ui:DXF af skitsen eller den plane flade}}.

Du får `<part> - face.dxf`: fladens kontur og hvert hul i den. Et rundt hul (en hel cirkel, hvor en cylinder møder fladen: et boret hul, eller et hul i en åbnet STEP-fil) skrives som en sand cirkel med hullets eget centrum og radius. Alle andre konturer er en lukket polylinje, og deres runde kanter (afrundede hjørner, spor, buer) er facetter, så sæt **Kurver** til Fin først, hvis skæreværktøjet følger dem tæt. Statuslinjen siger hvor mange konturer, hvor mange af dem der er sande cirkler, og fladens areal.

Hvis hverken en skitse eller en plan flade er valgt: »Åbn eller vælg en skitse, eller vælg en plan flade, for at eksportere DXF.«

## En tegning

Tegning (PDF) har sin egen gennemgang: [Lav et tegningsark](topic:drawing-pdf).

## Formater der ikke er tilgængelige

glTF, OBJ, IGES og Parasolid eksporteres ikke i denne build. DWG skrives kun af variantpakken, som tegningsark: se [Lav en variantpakke fra dine konfigurationer](topic:variant-pack). Se [Filformater](topic:file-formats).
