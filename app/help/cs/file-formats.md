---
title: Formáty souborů
summary: Každý soubor, který PartCraft čte a zapisuje, s příponami, jednotkami, osami a tím, co si každý zachovává nebo ztrácí.
keywords: formáty, typy souborů, přípony, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, jednotky, Z nahoru
from: 4d0ecbee
---

| Formát | Přípona | Otevřít | Uložit nebo exportovat | Jednotky | Osa nahoru | Zachová |
|---|---|---|---|---|---|---|
| Díl PartCraft | `.partcraft.json` | Ano | {{ui:Uložit}} | mm | Y | Celou historii: skice, vazby, kóty, prvky, potlačení, návrat, nastavení křivek, nastavení výkresu a GD&T, text STEP importovaný v dřívějším sestavení |
| Sestava PartCraft | `.partcraft-asm.json` | Ano | {{ui:Uložit}} v sestavě | mm | Y | Každý díl (vložený), kopie a jejich pozice, spoje |
| STL (binární nebo textový) | `.stl` | Ano, jako těleso: [Otevření STL, OBJ nebo 3MF](topic:open-meshes) | {{ui:STL, pro 3D tisk}} | mm (dotaz při otevření) | Z | Pouze trojúhelníky tělesa |
| 3MF | `.3mf` | Ano, jako těleso | {{ui:3MF, pro 3D tisk}} | mm (uvedeno v souboru) | Z | Těleso jako jeden objekt sítě |
| OBJ | `.obj` | Ano, jako těleso (jen plochy) | Ne | dotaz při otevření | Z nebo Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ano, jako těleso čtené jako trojúhelníky (zakřivené plochy kresleny jako fazety; rovné plochy, válce, kužely, koule a tori souboru se zachovají pro přesný export): [Otevření souboru STEP](topic:import-step) | | mm (z jednotky souboru) | Z, nebo Y, pokud to určíte | Tělesa a povrchová tělesa, sestavy se všemi díly na místě; bez barev, názvů, stromu sestavy ani PMI |
| `.3dm` | `.3dm` | Ano, jako jedno těleso z jeho sítí a ploch (uložené sítě pro vykreslení, jinak tesselace): [Otevření modelu .3dm](topic:open-3dm-files) | | Z jednotky souboru | Z, nebo Y, pokud to určíte | Sítě, polyplochy, vytažení a umístění bloků jako jedno těleso; bez křivek, barev, vrstev nebo názvů |
| STEP AP242, přesný | `.step` | | {{ui:STEP AP242 (přesné těleso)}} | mm | Z | Jedno přesné těleso: rovné plochy, válce, kužely, koule a tori na skutečných površích, pravé kružnice a přímky jako hrany; boky splajnů, modelované závity, tělesa ze síťových souborů a splajnové plochy souboru STEP zůstanou fasetami. STEP pro jiné CAD a CAM programy |
| STEP AP214, přesný | `.step` | | {{ui:STEP AP214 (přesné těleso)}} | mm | Z | Stejné přesné těleso ve starším schématu AP214, pro programy, které čtou jen je |
| STEP AP242, fasetový | `.step` | | {{ui:STEP (fasetovaný, síťové jádro)}} | mm | Y | Uzavřené těleso z rovných ploch: kulaté plochy jako fazety. Pro program, který přesný soubor odmítne |
| STEP AP214, fasetový | `.step` | | {{ui:STEP AP214 (fasetovaný, síťové jádro)}} | mm | Y | Stejné těleso ve starším schématu AP214, pro programy, které čtou jen je |
| Balíček USD | `.usdz` | Ne | {{ui:Balíček USD (.usdz)}} | m | Z | Těleso s materiálem, objemem a hmotností; sestava s každým dílem jednou a umístěnými kopiemi: [Export do USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (se všemi vlastnostmi)}} | mm | Z | Tvar jako trojúhelníky, materiál, každý parametr, razítko, množství; díly sestavy jako typy a jejich kopie umístěné |
| DXF R12, skica | `.dxf` | Ne | {{ui:DXF skici nebo rovné plochy}} s vybranou skicou | mm | Vlastní x, y skici | Úsečky, pravé oblouky a kružnice, body; vrstvy PROFILE, CONSTRUCTION, POINTS |
| DXF R12, plocha | `.dxf` | Ne | {{ui:DXF skici nebo rovné plochy}} s vybranou rovnou plochou | mm | Vlastní x, y plochy | Obrysy plochy: kulaté díry jako pravé kružnice, zbytek jako uzavřené mnohočáry (kulaté hrany jako fasety) |
| PDF výkres | `.pdf` | Ne | {{ui:Výkres (PDF): pohledy, řez, detail, GD&T}} | mm na listu A3 | | Pohledy zepředu, shora, zprava, izometrický, řez a detail nakreslené z fazet, skryté čáry, celkové rozměry, symboly GD&T, razítko |

## Soubory PartCraftu

Oba jsou prostý text (JSON). Těleso se nikdy neukládá: PartCraft jej přestaví z historie, takže soubory zůstanou malé a vždy odpovídají historii.

- Každý soubor má číslo verze. Tato verze zapisuje každý soubor dílu s nejnižší verzí, která pojme, co používá (2 až 5; těleso vytvořené ze sítě potřebuje 5), a otevře každou starší verzi. Soubor z novějšího PartCraftu je odmítnut se zprávou uvádějící obě verze.
- Každá hodnota se kontroluje při otevření souboru. Názvy ztratí řídicí znaky; čísla mimo rozsah, odkazy na chybějící prvky a neznámé druhy prvků jsou odmítnuty s prostým důvodem.
- Tyto soubory neupravujte ručně, pokud neznáte formát. Soubor, který kontrolou neprojde, se neotevře.
- Díl s velkým tělesem STEP importovaným v dřívějším sestavení může přesáhnout 50 MB, což je největší díl, který PartCraft otevře (viz [Řešení potíží](topic:troubleshooting#file-problems)).

## Fazety a přesnost

STL a 3MF jsou vždy tvořeny fazetami podle nastavení **Křivky**, stejně jako DXF plochy kromě kulatých děr, které jsou pravými kružnicemi. DXF skici má pravé oblouky a kružnice, protože pochází přímo ze skici. Tato verze staví každý díl mesh jádrem, takže pohledy výkresu (včetně řezů) jsou také fasetové. Přesný export STEP je výjimka: jádro zná skutečný povrch každé plochy ze skici (nebo ze souboru STEP, ze kterého bylo těleso otevřeno), takže kulaté plochy se zapíší jako skutečné válce, kužely, koule a tori bez ohledu na nastavení **Křivky** (viz [Export pro tisk, STEP a DXF](topic:export-files#for-other-cad-programs-step)).

## Nepodporováno v této verzi

| Formát | Stav |
|---|---|
| glTF, IGES, Parasolid, ACIS (dovoz i vývoz); export OBJ | Zatím není hotové |
| DWG | Zapisuje pouze [variantní balíček](topic:variant-pack), jako list výkresu každé konfigurace. Nečte se a jiný export neexistuje. Exportujte DXF; každý CAD program otevře DXF R12 |
| STEP sestavy a výkres sestavy | Zatím není hotové. Exportujte každý díl jako přesný STEP; STL, 3MF a kusovník exportujte ze sestavy |
| Nativní soubory dílů a sestav jiných programů (kromě `.3dm`, který se otevře jako jedno těleso) | Zatím není hotové |

Viz [Co ještě není hotové](topic:not-built-yet).
