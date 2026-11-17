---
title: Filformater
summary: Alle filer PartCraft læser og skriver, med endelser, enheder, akser, og hvad hvert format beholder eller mister.
keywords: formater, filtyper, endelser, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, enheder, Z op
from: 4d0ecbee
---

| Format | Endelse | Åbn | Gem eller eksportér | Enheder | Op-akse | Beholder |
|---|---|---|---|---|---|---|
| PartCraft-del | `.partcraft.json` | Ja | {{ui:Gem}} | mm | Y | Hele historikken: skitser, relationer, mål, features, undertrykkelse, rulning tilbage, indstilling for kurver, tegnings- og GD&T-indstillinger, STEP-tekst importeret i en tidligere build |
| PartCraft-samling | `.partcraft-asm.json` | Ja | {{ui:Gem}} i en samling | mm | Y | Hver del (indlejret), kopierne og deres positioner, samlingsleddene |
| STL (binær eller tekst) | `.stl` | Ja, som et massivt legeme: [Åbn en STL, OBJ eller 3MF](topic:open-meshes) | {{ui:STL, til 3D-print}} | mm (spørges ved åbning) | Z | Kun det massive legemes trekanter |
| 3MF | `.3mf` | Ja, som et massivt legeme | {{ui:3MF, til 3D-print}} | mm (angivet i filen) | Z | Det massive legeme som ét mesh-objekt |
| OBJ | `.obj` | Ja, som et massivt legeme (kun flader) | Nej | spørges ved åbning | Z eller Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, som et massivt legeme læst som trekanter (buede flader tegnet som facetter; filens plane flader, cylindre, kegler, kugler og tori beholdes til eksakt eksport): [Åbn en STEP-fil](topic:import-step) | | mm (fra filens enhed) | Z, eller Y hvis du siger det | De massive legemer og overfladelegemer, samlinger med hver del på plads; ingen farver, navne, samlingstræ eller PMI |
| `.3dm` | `.3dm` | Ja, som ét massivt legeme fra dets meshes og flader (gemte rendermeshes, ellers tessellerede): [Åbn en .3dm-model](topic:open-3dm-files) | | Fra filens enhed | Z, eller Y hvis du siger det | Meshes, polyflader, udtrækninger og blokplaceringer som ét legeme; ingen kurver, farver, lag eller navne |
| STEP AP242, eksakt | `.step` | | {{ui:STEP AP242 (eksakt massivt legeme)}} | mm | Z | Ét eksakt massivt legeme: plane flader, cylindre, kegler, kugler og tori på deres sande overflader, sande cirkler og linjer som kanter; sider af splines, modellerede gevind, legemer fra mesh-filer og en STEP-fils spline-flader forbliver facetter. Den STEP der bruges til andre CAD- og CAM-programmer |
| STEP AP214, eksakt | `.step` | | {{ui:STEP AP214 (eksakt massivt legeme)}} | mm | Z | Samme eksakte massive legeme i det ældre AP214-skema, til programmer der kun læser det |
| STEP AP242, facetteret | `.step` | | {{ui:STEP (facetteret, netkerne)}} | mm | Y | Et lukket massivt legeme af plane flader: runde overflader som facetter. Til et program der afviser den eksakte fil |
| STEP AP214, facetteret | `.step` | | {{ui:STEP AP214 (facetteret, netkerne)}} | mm | Y | Samme massive legeme i det ældre AP214-skema, til programmer der kun læser det |
| USD-pakke | `.usdz` | Nej | {{ui:USD-pakke (.usdz)}} | m | Z | Det massive legeme med sit materiale, rumfang og masse; en samling med hver del én gang og hver kopi placeret: [Eksportér som USD](topic:usd) |
| IFC 4 | `.ifc` | Nej | {{ui:IFC 4 (med alle egenskaber)}} | mm | Z | Formen som trekanter, materialet, hver parameter, tegningshovedet, mængder; en samlings dele som typer og dens kopier placeret |
| DXF R12, skitse | `.dxf` | Nej | {{ui:DXF af skitsen eller den plane flade}} med en skitse valgt | mm | Skitsens egne x, y | Linjer, sande buer og cirkler, punkter; lag PROFILE, CONSTRUCTION, POINTS |
| DXF R12, flade | `.dxf` | Nej | {{ui:DXF af skitsen eller den plane flade}} med en plan flade valgt | mm | Fladens egne x, y | Fladens konturer: runde huller som sande cirkler, resten som lukkede polylinjer (runde kanter som facetter) |
| PDF-tegning | `.pdf` | Nej | {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}} | mm på et A3-ark | | Forside-, top-, højre-, isometriske, snit- og detaljevisninger tegnet af facetter, skjulte linjer, samlede mål, GD&T-symboler, tegningshoved |

## PartCraft-filerne

Begge er rene tekstfiler (JSON). Det massive legeme gemmes aldrig: PartCraft bygger det igen ud fra historikken, så filerne er små og matcher altid historikken.

- Hver fil har et versionsnummer. Denne build skriver hver delfil med den laveste version, der kan rumme det den bruger (2 til 5; et legeme lavet af et mesh kræver 5), og åbner alle ældre versioner. En fil fra en nyere PartCraft afvises med en meddelelse, der nævner begge versioner.
- Hver værdi kontrolleres, når en fil åbnes. Navne mister kontroltegn; tal uden for området, henvisninger til manglende features og ukendte feature-typer afvises med en klar årsag.
- Redigér ikke disse filer i hånden, medmindre du kender formatet. En fil der ikke består kontrollerne, åbner ikke.
- En del med et stort STEP-legeme importeret i en tidligere build kan overstige 50 MB, det største PartCraft åbner som delfil (se [Fejlfinding](topic:troubleshooting#file-problems)).

## Facetter og eksakthed

STL og 3MF består altid af facetter, ved **Kurver**-indstillingen, og det samme gælder flade-DXF'en, undtagen runde huller, der er sande cirkler. Skitse-DXF'en har sande buer og cirkler, fordi den kommer direkte fra skitsen. Denne version bygger hver del med mesh-kernen, så tegningens visninger (også snit) også er facetterede. Den eksakte STEP-eksport er undtagelsen: kernen kender hver flades sande overflade fra skitsen (eller fra STEP-filen et legeme blev åbnet fra), så runde flader skrives som sande cylindre, kegler, kugler og tori, uanset hvad **Kurver** er sat til (se [Eksport til print, STEP og DXF](topic:export-files#for-other-cad-programs-step)).

## Ikke understøttet i denne build

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (ind eller ud); OBJ-eksport | Ikke lavet |
| DWG | Skrevet kun af [variantpakken](topic:variant-pack), som tegningsarket for hver konfiguration. Ikke læst, og ingen anden eksport. Eksportér DXF; alle CAD-programmer åbner R12 DXF |
| Samlings-STEP og tegningen af en samling | Endnu ikke lavet. Eksportér hver del som eksakt STEP; STL, 3MF og stykliste eksporteres fra en samling |
| Andre programmers egne del- og samlingsfiler (undtagen `.3dm`, som åbnes som ét legeme) | Ikke lavet |

Se [Hvad der endnu ikke er lavet](topic:not-built-yet).
