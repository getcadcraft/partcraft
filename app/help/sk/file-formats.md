---
title: Formáty súborov
summary: Každý súbor, ktorý PartCraft číta a zapisuje, s príponami, jednotkami, osami a tým, čo každý zachováva alebo stráca.
keywords: formáty, typy súborov, prípony, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, sieť, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, jednotky, z nahor
from: 4d0ecbee
---

| Formát | Prípona | Otvoriť | Uložiť alebo exportovať | Jednotky | Os nahor | Zachováva |
|---|---|---|---|---|---|---|
| Súčiastka PartCraft | `.partcraft.json` | Áno | {{ui:Save}} | mm | Y | Celú históriu: náčrty, vzťahy, kóty, prvky, potlačenie, návrat, nastavenie kriviek, nastavenia výkresu a GD&T, text STEP importovaný v skoršom zostavení |
| Zostava PartCraft | `.partcraft-asm.json` | Áno | {{ui:Save}} v zostave | mm | Y | Každú súčiastku (vloženú), kópie a ich polohy, spoje |
| STL (binárny alebo textový) | `.stl` | Áno, ako teleso: [Otvorte STL, OBJ alebo 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (pýta sa pri otvorení) | Z | Iba trojuholníky telesa |
| 3MF | `.3mf` | Áno, ako teleso | {{ui:3MF, for 3D printing}} | mm (uvedené v súbore) | Z | Teleso ako jeden sieťový objekt |
| OBJ | `.obj` | Áno, ako teleso (iba plochy) | Nie | pýta sa pri otvorení | Z alebo Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Áno, ako teleso načítané ako trojuholníky (zakrivené plochy nakreslené ako fazety; rovné plochy, valce, kužele, gule a torusy zo súboru sa zachovajú pre presný export): [Otvorte súbor STEP](topic:import-step) | | mm (z jednotky súboru) | Z, alebo Y ak to určíte | Telesá a plošné telesá, zostavy so všetkými súčiastkami na mieste; bez farieb, názvov, stromu zostavy ani PMI |
| `.3dm` | `.3dm` | Áno, ako jedno teleso z jeho sietí a plôch (uložené siete na vykreslenie, inak tesselované): [Otvorte model .3dm](topic:open-3dm-files) | | Z jednotky súboru | Z, alebo Y ak to určíte | Siete, polyplochy, vytiahnutia a umiestnenia blokov ako jedno teleso; bez kriviek, farieb, vrstiev a názvov |
| STEP AP242, presný | `.step` | | {{ui:STEP AP242 (presné teleso)}} | mm | Z | Jedno presné teleso: rovné plochy, valce, kužele, gule a torusy na ich skutočných povrchoch, pravé kružnice a čiary ako hrany; bočné strany splajnov, modelované závity, telesá zo sieťových súborov a splajnové plochy zo súboru STEP zostávajú fazetami. STEP na použitie v iných CAD a CAM programoch |
| STEP AP214, presný | `.step` | | {{ui:STEP AP214 (presné teleso)}} | mm | Z | To isté presné teleso v staršej schéme AP214, pre programy, ktoré čítajú iba ju |
| STEP AP242, fazetovaný | `.step` | | {{ui:STEP (fazetovaný, sieťové jadro)}} | mm | Y | Uzavreté teleso z rovných plôch: okrúhle povrchy ako fazety. Pre program, ktorý odmieta presný súbor |
| STEP AP214, fazetovaný | `.step` | | {{ui:STEP AP214 (fazetovaný, sieťové jadro)}} | mm | Y | To isté teleso v staršej schéme AP214, pre programy, ktoré čítajú iba ju |
| Balík USD | `.usdz` | Nie | {{ui:USD package (.usdz)}} | m | Z | Teleso s materiálom, objemom a hmotnosťou; zostava s každou súčiastkou raz a každou kópiou umiestnenou: [Export ako USD](topic:usd) |
| IFC 4 | `.ifc` | Nie | {{ui:IFC 4 (so všetkými vlastnosťami)}} | mm | Z | Tvar ako trojuholníky, materiál, každý parameter, popisové pole, množstvá; súčiastky zostavy ako typy a jej kópie umiestnené |
| DXF R12, náčrt | `.dxf` | Nie | {{ui:DXF náčrtu alebo plochej plochy}} pri vybranom náčrte | mm | Vlastné x, y náčrtu | Čiary, pravé oblúky a kružnice, body; vrstvy PROFILE, CONSTRUCTION, POINTS |
| DXF R12, plocha | `.dxf` | Nie | {{ui:DXF náčrtu alebo plochej plochy}} pri vybratej rovnej ploche | mm | Vlastné x, y plochy | Obrysy plochy: okrúhle otvory ako pravé kružnice, zvyšok ako uzavreté lomené čiary (okrúhle hrany ako fazety) |
| PDF výkres | `.pdf` | Nie | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm na liste A3 | | Predný, horný, pravý, izometrický, rez a detailné pohľady nakreslené z fazet, skryté čiary, celkové rozmery, symboly GD&T, popisové pole |

## Súbory PartCraft

Oba sú čistý text (JSON). Teleso sa nikdy neukladá: PartCraft ho znovu vytvorí z histórie, takže súbory zostávajú malé a vždy sedia s históriou.

- Každý súbor má číslo verzie. Táto verzia zapíše každý súbor súčiastky s najnižšou verziou, ktorá obsahuje to, čo používa (2 až 5; teleso vytvorené zo siete potrebuje 5), a otvorí každú staršiu verziu. Súbor z novšieho PartCraft sa odmietne so správou, ktorá uvedie obidve verzie.
- Každá hodnota sa skontroluje pri otvorení súboru. Názvy stratia riadiace znaky; čísla mimo rozsahu, odkazy na chýbajúce prvky a neznáme druhy prvkov sa odmietnu s jednoduchým dôvodom.
- Tieto súbory needitujte ručne, pokiaľ nepoznáte formát. Súbor, ktorý neprejde kontrolami, sa neotvorí.
- Súčiastka s veľkým telesom STEP importovaným v skoršom zostavení môže presiahnuť 50 MB, čo je najväčší súbor súčiastky, ktorý PartCraft otvorí (pozri [Riešenie problémov](topic:troubleshooting#file-problems)).

## Fazety a presnosť

STL a 3MF sú vždy zložené z fazet podľa nastavenia **Krivky**, rovnako aj DXF plochy okrem okrúhlych otvorov, ktoré sú pravé kružnice. DXF náčrtu má pravé oblúky a kružnice, pretože pochádza priamo z náčrtu. Táto verzia stavia každú súčiastku sieťovým jadrom, takže aj pohľady výkresu (vrátane rezov) sú fazetované. Presný export STEP je výnimka: jadro pozná skutočný povrch každej plochy z náčrtu (alebo zo súboru STEP, z ktorého bolo teleso otvorené), takže okrúhle plochy sa zapíšu ako skutočné valce, kužele, gule a torusy bez ohľadu na nastavenie **Krivky** (pozri [Export na tlač, STEP a DXF](topic:export-files#for-other-cad-programs-step)).

## Nepodporované v tejto verzii

| Formát | Stav |
|---|---|
| glTF, IGES, Parasolid, ACIS (dovnútra aj von); export OBJ | Nie je hotové |
| DWG | Zapíše ho iba [balík variantov](topic:variant-pack), ako výkresový list každej konfigurácie. Nečíta sa a nie je iný export. Exportujte DXF; každý CAD program otvorí DXF R12 |
| STEP zostavy a výkres zostavy | Ešte nie je hotové. Exportujte každú súčiastku ako presný STEP; STL, 3MF a kusovník sa exportujú zo zostavy |
| Natívne súbory súčiastok a zostáv iných programov (okrem `.3dm`, ktorý sa otvorí ako jedno teleso) | Nie je hotové |

Pozri [Čo ešte nie je hotové](topic:not-built-yet).
