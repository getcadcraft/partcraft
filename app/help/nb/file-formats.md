---
title: Filformater
summary: Hver fil PartCraft leser og skriver, med filendelser, enheter, akser og hva hver beholder eller mister.
keywords: formater, filtyper, filendelser, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, nett, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, enheter, z opp
from: 4d0ecbee
---

| Format | Filendelse | Åpne | Lagre eller eksporter | Enheter | Opp-akse | Beholder |
|---|---|---|---|---|---|---|
| PartCraft-del | `.partcraft.json` | Ja | {{ui:Lagre}} | mm | Y | Hele historikken: skisser, relasjoner, mål, funksjoner, undertrykking, tilbakerulling, innstilling for kurver, tegningsinnstillinger og GD&T, STEP-tekst importert i en tidligere versjon |
| PartCraft-sammenstilling | `.partcraft-asm.json` | Ja | {{ui:Lagre}} i en sammenstilling | mm | Y | Hver del (innebygd), kopiene og posisjonene deres, leddene |
| STL (binær eller tekst) | `.stl` | Ja, som et volumlegeme: [Åpne en STL, OBJ eller 3MF](topic:open-meshes) | {{ui:STL, for 3D-utskrift}} | mm (spørres når den åpnes) | Z | Bare volumlegemets trekanter |
| 3MF | `.3mf` | Ja, som et volumlegeme | {{ui:3MF, for 3D-utskrift}} | mm (står i filen) | Z | Volumlegemet som ett nettobjekt |
| OBJ | `.obj` | Ja, som et volumlegeme (bare flater) | Nei | spørres når den åpnes | Z eller Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, som et volumlegeme lest som trekanter (buede flater tegnet som fasetter; filens plane flater, sylindre, kjegler, kuler og torer beholdes for eksakt eksport): [Åpne en STEP-fil](topic:import-step) | | mm (fra filens enhet) | Z, eller Y hvis det oppgis | Volumlegemene og overflatelegemene, sammenstillinger med hver del på plass; ingen farger, navn, sammenstillingstre eller PMI |
| `.3dm` | `.3dm` | Ja, som ett volumlegeme fra nettene og flatene (lagrede rendernett, ellers trianguleres de): [Åpne en .3dm-modell](topic:open-3dm-files) | | Fra filens enhet | Z, eller Y hvis det oppgis | Nett, polyflater, ekstruderinger og blokkplasseringer som ett legeme; ingen kurver, farger, lag eller navn |
| STEP AP242, eksakt | `.step` | | {{ui:STEP AP242 (eksakt volumlegeme)}} | mm | Z | Ett eksakt volumlegeme: plane flater, sylindre, kjegler, kuler og torer på sine ekte overflater, ekte sirkler og linjer som kanter; sider av spline, modellerte gjenger, legemer fra nettfiler og en STEP-fils spline-flater forblir fasetter. STEP-formatet å bruke for andre CAD- og CAM-programmer |
| STEP AP214, eksakt | `.step` | | {{ui:STEP AP214 (eksakt volumlegeme)}} | mm | Z | Det samme eksakte volumlegemet i det eldre AP214-skjemaet, for programmer som bare leser det |
| STEP AP242, fasettert | `.step` | | {{ui:STEP (fasettert, nettkjerne)}} | mm | Y | Et lukket volumlegeme av plane flater: runde overflater som fasetter. For et program som avviser den eksakte filen |
| STEP AP214, fasettert | `.step` | | {{ui:STEP AP214 (fasettert, nettkjerne)}} | mm | Y | Det samme volumlegemet i det eldre AP214-skjemaet, for programmer som bare leser det |
| USD-pakke | `.usdz` | Nei | {{ui:USD-pakke (.usdz)}} | m | Z | Volumlegemet med materiale, volum og masse; en sammenstilling med hver del én gang og hver kopi plassert: [Eksporter som USD](topic:usd) |
| IFC 4 | `.ifc` | Nei | {{ui:IFC 4 (med alle egenskaper)}} | mm | Z | Formen som trekanter, materialet, hver parameter, tegningshodet, mengder; en sammenstillings deler som typer og kopiene plassert |
| DXF R12, skisse | `.dxf` | Nei | {{ui:DXF av skissen eller den plane flaten}} med en skisse valgt | mm | Skissens egne x, y | Linjer, ekte buer og sirkler, punkter; lagene PROFILE, CONSTRUCTION, POINTS |
| DXF R12, flate | `.dxf` | Nei | {{ui:DXF av skissen eller den plane flaten}} med en plan flate valgt | mm | Flatens egne x, y | Flatens omriss: runde hull som ekte sirkler, resten som lukkede polylinjer (runde kanter som fasetter) |
| PDF-tegning | `.pdf` | Nei | {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}} | mm på et A3-ark | | Forside-, topp-, høyre-, isometriske, snitt- og detaljvisninger tegnet fra fasetter, skjulte linjer, totalmål, GD&T-symboler, tegningshode |

## PartCraft-filene

Begge er ren tekst (JSON). Volumlegemet lagres aldri: PartCraft bygger det på nytt fra historikken, så filene holder seg små og samsvarer alltid med historikken.

- Hver fil har et versjonsnummer. Denne versjonen skriver hver delfil med det laveste versjonsnummeret som dekker det den bruker (2 til 5; et legeme laget av et nett trenger 5), og åpner alle eldre versjoner. En fil fra en nyere PartCraft avvises med en melding som nevner begge versjonene.
- Hver verdi kontrolleres når en fil åpnes. Navn mister kontrolltegn; tall utenfor området, referanser til manglende funksjoner og ukjente funksjonstyper avvises med en enkel begrunnelse.
- Ikke rediger disse filene for hånd med mindre formatet er kjent. En fil som ikke består kontrollene, åpnes ikke.
- En del med en stor STEP-volumlegeme importert i en tidligere versjon kan passere 50 MB, som er den største delfilen PartCraft åpner (se [Feilsøking](topic:troubleshooting#file-problems)).

## Fasetter og eksakthet

STL og 3MF er alltid laget av fasetter, ved innstillingen **Kurver**, og det samme gjelder flate-DXF-en, bortsett fra runde hull, som er ekte sirkler. Skisse-DXF-en har ekte buer og sirkler, fordi den kommer rett fra skissen. Denne versjonen bygger hver del med nettkjernen, så også tegningens visninger (inkludert snitt) er fasetterte. Den eksakte STEP-eksporten er unntaket: kjernen kjenner hver flates ekte overflate fra skissen (eller fra STEP-filen et legeme ble åpnet fra), så runde flater skrives som ekte sylindre, kjegler, kuler og torer uansett hva **Kurver** er satt til (se [Eksporter for 3D-utskrift, STEP og DXF](topic:export-files#for-other-cad-programs-step)).

## Ikke støttet i denne versjonen

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (inn eller ut); OBJ-eksport | Ikke bygget |
| DWG | Skrives bare av [variantpakken](topic:variant-pack), som tegningsarket for hver konfigurasjon. Ikke lest, og ingen annen eksport. Eksporter DXF; alle CAD-programmer åpner R12-DXF |
| STEP for sammenstillinger og tegning av en sammenstilling | Ikke bygget ennå. Eksporter hver del som eksakt STEP; STL, 3MF og stykklisten eksporteres fra en sammenstilling |
| Andre programmers egne del- og sammenstillingsfiler (unntatt `.3dm`, som åpnes som ett legeme) | Ikke bygget |

Se [Hva som ikke er bygget ennå](topic:not-built-yet).
