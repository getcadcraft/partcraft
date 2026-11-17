---
title: Filformat
summary: Varje fil PartCraft läser och skriver, med filändelser, enheter, axlar och vad varje format behåller eller förlorar.
keywords: format, filtyper, filändelser, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, nät, step, stp, ap242, dxf, r12, pdf, gltf, iges, enheter, z upp
from: 4d0ecbee
---

| Format | Filändelse | Öppna | Spara eller exportera | Enheter | Upp-axel | Behåller |
|---|---|---|---|---|---|---|
| PartCraft-del | `.partcraft.json` | Ja | {{ui:Spara}} | mm | Y | Hela historiken: skisser, relationer, mått, funktioner, undertryckning, återställning, inställningen för kurvor, ritningsinställningar och GD&T, STEP-text importerad i en tidigare version |
| PartCraft-sammanställning | `.partcraft-asm.json` | Ja | {{ui:Spara}} i en sammanställning | mm | Y | Varje del (inbäddad), kopiorna och deras positioner, fogarna |
| STL (binär eller text) | `.stl` | Ja, som en solid kropp: [Öppna en STL, OBJ eller 3MF](topic:open-meshes) | {{ui:STL, för 3D-utskrift}} | mm (frågas vid öppning) | Z | Solidets trianglar endast |
| 3MF | `.3mf` | Ja, som en solid kropp | {{ui:3MF, för 3D-utskrift}} | mm (anges i filen) | Z | Solidet som ett nätobjekt |
| OBJ | `.obj` | Ja, som en solid kropp (endast ytor) | Nej | frågas vid öppning | Z eller Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, som en solid kropp läst som trianglar (krökta ytor ritas som facetter; filens plana ytor, cylindrar, koner, sfärer och torusar behålls för exakt export): [Öppna en STEP-fil](topic:import-step) | | mm (från filens enhet) | Z, eller Y om du anger det | Solider och ytkroppar, sammanställningar med varje del på plats; inga färger, namn, sammanställningsträd eller PMI |
| `.3dm` | `.3dm` | Ja, som en solid kropp från dess nät och ytor (sparade renderingsnät, annars tessellerade): [Öppna en .3dm-modell](topic:open-3dm-files) | | Från filens enhet | Z, eller Y om du anger det | Nät, polyytor, extruderingar och blockplaceringar som en kropp; inga kurvor, färger, lager eller namn |
| STEP AP242, exakt | `.step` | | {{ui:STEP AP242 (exakt solid)}} | mm | Z | En exakt solid: plana ytor, cylindrar, koner, sfärer och torusar på sina sanna ytor, sanna cirklar och linjer som kanter; sidor av splines, modellerade gängor, kroppar från nätfiler och en STEP-fils splineytor förblir facetter. Den STEP som ska användas för andra CAD- och CAM-program |
| STEP AP214, exakt | `.step` | | {{ui:STEP AP214 (exakt solid)}} | mm | Z | Samma exakta solid i det äldre AP214-schemat, för program som bara läser det |
| STEP AP242, fasetterad | `.step` | | {{ui:STEP (fasetterad, nätkärna)}} | mm | Y | En sluten solid av plana ytor: runda ytor som facetter. För ett program som vägrar den exakta filen |
| STEP AP214, fasetterad | `.step` | | {{ui:STEP AP214 (fasetterad, nätkärna)}} | mm | Y | Samma solid i det äldre AP214-schemat, för program som bara läser det |
| USD-paket | `.usdz` | Nej | {{ui:USD-paket (.usdz)}} | m | Z | Solidet med dess material, volym och massa; en sammanställning med varje del en gång och varje kopia placerad: [Exportera som USD](topic:usd) |
| IFC 4 | `.ifc` | Nej | {{ui:IFC 4 (med alla egenskaper)}} | mm | Z | Formen som trianglar, materialet, varje parameter, ritningshuvudet, kvantiteter; en sammanställnings delar som typer och kopiorna placerade |
| DXF R12, skiss | `.dxf` | Nej | {{ui:DXF av skissen eller den plana ytan}} med en skiss markerad | mm | Skissens egna x, y | Linjer, sanna bågar och cirklar, punkter; lagren PROFILE, CONSTRUCTION, POINTS |
| DXF R12, yta | `.dxf` | Nej | {{ui:DXF av skissen eller den plana ytan}} med en plan yta vald | mm | Ytans egna x, y | Ytans konturer: runda hål som sanna cirklar, resten som slutna polylinjer (runda kanter som facetter) |
| PDF-ritning | `.pdf` | Nej | {{ui:Ritning (PDF): vyer, sektion, detalj, GD&T}} | mm på ett A3-ark | | Fram-, ovan-, höger-, isometriska, sektion- och detaljvyer ritade från facetter, dolda linjer, totalmått, GD&T-symboler, ritningshuvud |

## PartCraft-filerna

Båda är ren text (JSON). Solidet lagras aldrig: PartCraft bygger om det från historiken, så filerna förblir små och stämmer alltid med historiken.

- Varje fil har ett versionsnummer. Den här versionen skriver varje delfil med lägsta versionen som rymmer det den använder (2 till 5; en kropp gjord av ett nät kräver 5), och öppnar alla äldre versioner. En fil från en nyare PartCraft vägras, med ett meddelande som nämner båda versionerna.
- Varje värde kontrolleras när en fil öppnas. Namn förlorar styrtecken; tal utanför intervallet, referenser till saknade funktioner och okända funktionstyper vägras med en enkel förklaring.
- Redigera inte dessa filer för hand om du inte känner till formatet. En fil som inte klarar kontrollerna öppnas inte.
- En del med en stor STEP-solid importerad i en tidigare version kan passera 50 MB, vilket är det största PartCraft öppnar som delfil (se [Felsökning](topic:troubleshooting#file-problems)).

## Facetter och exakthet

STL och 3MF består alltid av facetter, enligt inställningen **Kurvor**, och så gör även ytans DXF, utom runda hål som är sanna cirklar. Skiss-DXF har sanna bågar och cirklar, eftersom den kommer direkt från skissen. Den här versionen bygger varje del med nätkärnan, så även ritningens vyer (inklusive sektioner) är facetterade. Den exakta STEP-exporten är undantaget: kärnan känner till varje yta sanna form från skissen (eller från STEP-filen en kropp öppnades från), så runda ytor skrivs som sanna cylindrar, koner, sfärer och torusar oavsett hur **Kurvor** är inställt (se [Export för utskrift, STEP och DXF](topic:export-files#for-other-cad-programs-step)).

## Stöds inte i den här versionen

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (in eller ut); OBJ-export | Finns inte ännu |
| DWG | Skrivs endast av [variantpaketet](topic:variant-pack), som ritningsbladet för varje konfiguration. Läses inte, och ingen annan export. Exportera DXF; alla CAD-program öppnar R12-DXF |
| Sammanställnings-STEP och ritningen av en sammanställning | Finns inte ännu. Exportera varje del som exakt STEP; STL, 3MF och stycklistan exporteras från en sammanställning |
| Andra programs egna del- och sammanställningsfiler (utom `.3dm`, som öppnas som en kropp) | Finns inte ännu |

Se [Det som inte finns ännu](topic:not-built-yet).
