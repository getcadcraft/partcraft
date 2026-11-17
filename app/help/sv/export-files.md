---
title: Export för utskrift, STEP och DXF
summary: Exportera delen som STL eller 3MF för 3D-utskrift, som en exakt STEP-solid för andra CAD- och CAM-program, och en skiss eller en plan yta som DXF för laser- och vattenskärning.
keywords: exportera, spara som, ifc, bim, egenskapsuppsättningar, stl, 3mf, 3d-utskrift, skivningsprogram, step, stp, exakt step, b-rep, ap242, ap214, cam, verkstad, fräsning, dxf, laser, vattenskärning, cnc, plant mönster, profil, nät, fasetterad
from: e1de71d5
---

Exporter är kopior i andra format. Behåll även filen `.partcraft.json`: det är den enda fil PartCraft kan öppna igen och redigera.

Alla exporter gäller delen på skärmen, i millimeter. I en sammanställning exporterar STL, 3MF, STEP och Ritning (PDF) i stället hela sammanställningen: se [Stycklista, sprängvyer och rörliga delar](topic:assembly-bom-explode). Om det inte finns någon solid ännu: "Det finns ingen solid att exportera ännu."

## För 3D-utskrift: STL eller 3MF

1. Valfritt: klicka i tomt utrymme så att inget är markerat, och ställ in **Kurvor** till **Fin (128 per varv)** eller **Mycket fin (256 per varv)** i högra panelen. STL och 3MF består alltid av trianglar.
2. Välj {{ui:Exportera}} och sedan {{ui:STL, för 3D-utskrift}} eller {{ui:3MF, för 3D-utskrift}}.
3. Filen laddas ner. Statusfältet visar till exempel "Exporterade Part1.stl (binär, mm, Z upp, 1536 trianglar)."

Båda formaten är **Z upp**, eftersom skrivare och skivningsprogram förväntar sig det. PartCraft:s egen värld är Y upp, så exporten vrider delen: det som pekar uppåt i PartCraft (vinkelrätt mot planet Top) pekar uppåt i skivningsprogrammet, och en del skissad på planet Top ligger plant på bädden. Ställ in den slutliga orienteringen i skivningsprogrammet vid behov.

3MF är ett nyare och mindre format som skivningsprogram läser med enheterna inkluderade. Använd STL om ett program inte tar emot 3MF.

För att först kontrollera att delen är sluten, får plats på skrivarens bädd och står på en plan yta, använd {{ui:Exportera}} › {{ui:Kontrollera för 3D-utskrift (STL eller 3MF)…}}: se [Gör en del redo för 3D-utskrift](topic:print-3d).

## För andra CAD-program: STEP

Välj {{ui:Exportera}} och sedan {{ui:STEP AP242 (exakt solid)}}. Den skriver delen som en exakt solid, i millimeter, vriden till Z upp. Runda ytor skrivs som sanna cylindrar, koner, sfärer och torusar, med sanna cirklar som kanter, så att det andra programmet kan välja ett hål som ett hål. En kropp som öppnats från en STEP-fil behåller den filens plana ytor, cylindrar, koner, sfärer och torusar, så de går ut exakta också. Ytor utan sådan yta (sidan på en spline, en modellerad gänga, en kropp från en STL-, OBJ- eller 3MF-nätfil, en spline i en STEP-fil, svepta och revolverade ytor) förblir plana facetter i samma solid, och statusfältet säger hur många. Statusfältet visar till exempel "Exporterade Flange.step (AP242, exakt solid, mm, Z upp): 14 ytor på sina sanna ytor (10 cylindriska, 1 konisk, 0 sfäriska, 0 toroidala), 0 anpassade kantkurvor." Den innehåller endast solidet: ingen historik, inga skisser, ingen ritning. Om det andra programmet bara läser AP214 väljer du {{ui:STEP AP214 (exakt solid)}}: samma solid i det äldre schemat.

Vad som är exakt och vad som inte är det:

- Plana ytor, cylindrar (hål, upphöjningar, rundningar på raka kanter), koner (försänkningar, avsmalningar), sfärer och torusar är exakta, liksom deras räta, cirkulära och elliptiska kanter. Inställningen **Kurvor** ändrar dem inte.
- Där två runda ytor korsas (ett hål borrat tvärs genom en axel) är kanten en jämn kurva anpassad till båda ytorna inom 0.00001 mm; "anpassade kantkurvor" räknar dem.
- En sluten hålighet inne i delen skrivs som ett hålrum i solidet. Flera separata kroppar skrivs som flera solider.
- En sammanställning skrivs ännu inte som exakt STEP: exportera varje del.

Det kontrollerades genom att läsa tillbaka filerna i OpenCascade, som rapporterar giltiga solider med volymer beräknade för hand. Den har ännu inte öppnats i varje CAD- eller CAM-program. Om ett program vägrar en fil skriver {{ui:STEP (fasetterad, nätkärna)}} samma form som plana ytor (på PartCraft:s egna axlar, Y upp). Berätta gärna via {{ui:Hjälp}} › {{ui:Rapportera ett problem}}.

För bearbetning skriver även arbetsytan Manufacture den exakta soliden i inställningens egna arbetskoordinater: se [Gör verktygsbanor och G-kod](topic:manufacture#exact-step-for-the-shop).

## För BIM-program: IFC med alla egenskaper

Välj {{ui:Exportera}} och sedan {{ui:IFC 4 (med alla egenskaper)}}. Den skriver delen som ett IFC 4-element för bygg- och anläggningsmodeller, med formen som trianglar (Z upp, millimeter), och med det PartCraft känner till om den som egenskapsuppsättningar:

| Egenskapsuppsättning | Innehåller |
|---|---|
| **PartCraft_Part** | Namn, material och dess densitet, den aktiva konfigurationen, antal kroppar; i en sammanställning även artikelnummer och beskrivning |
| **PartCraft_Parameters** | Varje parameter i delen med dess värde; ett uttryck för en formel och en anteckning finns i egenskapens beskrivning |
| **PartCraft_TitleBlock** | De fält i ritningshuvudet du fyllt i (titel, ritningsnummer, revision, företag, ritad, kontrollerad och godkänd av, datum, ytbehandling, allmän tolerans) samt arkstorleken |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volym, ytarea, massa (med ett material) och den totala storleken |

Materialet bifogas som ett IFC-material, och ritningsnumret är elementets tagg. I en sammanställning skrivs varje del en gång som en typ med sina egenskaper, och varje kopia placeras där sammanställningen placerar den, med sina egna värden i **PartCraft_Instance**: dess namn, dess positionsnummer i stycklistan och om den är den förankrade delen.

## För lasrar, vattenskärning eller CNC-profiler: DXF

Två slags DXF, båda version R12, som alla CAD- och CAM-program öppnar:

### En skiss

1. Markera skissen i historiken (eller ha den öppen).
2. Välj {{ui:Exportera}} och sedan {{ui:DXF av skissen eller den plana ytan}}. (Skissens högra panel har också {{ui:Exportera som DXF}}.)

Du får `<del> - <skiss>.dxf` i skissens egna koordinater: linjer, sanna bågar och cirklar på lagret **PROFILE**, konstruktionsgeometri på **CONSTRUCTION** och lösa punkter på **POINTS**.

### En plan yta på solidet

1. Klicka på en plan yta i vyn (till exempel ovansidan på en plåt med hål).
2. Välj {{ui:Exportera yta som DXF}} i högra panelen, eller {{ui:Exportera}} och sedan {{ui:DXF av skissen eller den plana ytan}}.

Du får `<del> - face.dxf`: ytans kontur och varje hål i den. Ett runt hål (en hel cirkel där en cylinder möter ytan: ett borrat hål, eller ett hål i en öppnad STEP-fil) skrivs som en sann cirkel med hålets egen mittpunkt och radie. Varje annan kontur är en sluten polylinje, och dess runda kanter (rundade hörn, spår, bågar) är deras facetter. Ställ därför först in **Kurvor** på Fin om fräsen ska följa dem noga. Statusfältet visar hur många konturer det finns, hur många av dem som är sanna cirklar, och ytans area.

Om varken en skiss eller en plan yta är markerad: "Öppna eller markera en skiss, eller välj en plan yta, för att exportera DXF."

## En ritning

Den PDF-ritningen har en egen genomgång: [Gör ett ritningsblad](topic:drawing-pdf).

## Format som inte finns

glTF, OBJ, IGES och Parasolid exporteras inte i den här versionen. DWG skrivs endast av variantpaketet, som ritningsblad för varje konfiguration: se [Gör ett variantpaket av dina konfigurationer](topic:variant-pack). Se [Filformat](topic:file-formats).
