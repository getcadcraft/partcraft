---
title: Formati datoteka
summary: Svaka datoteka koju PartCraft čita i piše, sa ekstenzijama, jedinicama, osama i onim što svaki čuva ili gubi.
keywords: formati, vrste datoteka, ekstenzije, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mreža, step, stp, ap242, dxf, r12, pdf, gltf, iges, jedinice, z gore
from: 4d0ecbee
---

| Format | Ekstenzija | Otvori | Sačuvaj ili izvezi | Jedinice | Osa gore | Čuva |
|---|---|---|---|---|---|---|
| PartCraft deo | `.partcraft.json` | Da | {{ui:Sačuvaj}} | mm | Y | Celu istoriju: skice, relacije, kote, elemente, isključivanje, vraćanje, podešavanje krivina, podešavanja crteža i GD&T, STEP tekst uvezen u ranijoj verziji |
| PartCraft sklop | `.partcraft-asm.json` | Da | {{ui:Sačuvaj}} u sklopu | mm | Y | Svaki deo (ugrađen), kopije i njihove pozicije, spojeve |
| STL (binarni ili tekstualni) | `.stl` | Da, kao čvrsto telo: [Otvori STL, OBJ ili 3MF](topic:open-meshes) | {{ui:STL, za 3D štampu}} | mm (pita se pri otvaranju) | Z | Samo trouglove čvrstog tela |
| 3MF | `.3mf` | Da, kao čvrsto telo | {{ui:3MF, za 3D štampu}} | mm (navedeno u datoteci) | Z | Čvrsto telo kao jedan objekat mreže |
| OBJ | `.obj` | Da, kao čvrsto telo (samo površi) | Ne | pita se pri otvaranju | Z ili Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Da, kao čvrsto telo pročitano kao trouglovi (zakrivljene površi nacrtane kao fasete; ravne površi, cilindri, konusi, sfere i torusi datoteke se čuvaju za tačan izvoz): [Otvori STEP datoteku](topic:import-step) | | mm (iz jedinice datoteke) | Z, ili Y ako tako kažeš | Čvrsta tela i površinska tela, sklopove sa svakim delom na mestu; bez boja, imena, stabla sklopa ili PMI |
| `.3dm` | `.3dm` | Da, kao jedno čvrsto telo iz mreža i površi (sačuvane mreže za render, inače tesalacija): [Otvori .3dm model](topic:open-3dm-files) | | Iz jedinice datoteke | Z, ili Y ako tako kažeš | Mreže, polipovrši, izvlačenja i postavke blokova kao jedno telo; bez krivih, boja, slojeva ili imena |
| STEP AP242, tačan | `.step` | | {{ui:STEP AP242 (tačno čvrsto telo)}} | mm | Z | Jedno tačno čvrsto telo: ravne površi, cilindri, konusi, sfere i torusi na pravim površima, prave kružnice i linije kao ivice; splajn strane, modelovani navoji, tela iz mrežnih datoteka i splajn površi STEP datoteke ostaju fasete. STEP za druge CAD i CAM programe |
| STEP AP214, tačan | `.step` | | {{ui:STEP AP214 (tačno čvrsto telo)}} | mm | Z | Isto tačno čvrsto telo u starijoj šemi AP214, za programe koji čitaju samo nju |
| STEP AP242, fasetiran | `.step` | | {{ui:STEP (fasetirano, mrežno jezgro)}} | mm | Y | Zatvoreno čvrsto telo od ravnih površi: okrugle površi kao fasete. Za program koji odbija tačnu datoteku |
| STEP AP214, fasetiran | `.step` | | {{ui:STEP AP214 (fasetirano, mrežno jezgro)}} | mm | Y | Isto čvrsto telo u starijoj šemi AP214, za programe koji čitaju samo nju |
| USD paket | `.usdz` | Ne | {{ui:USD paket (.usdz)}} | m | Z | Čvrsto telo sa svojim materijalom, zapreminom i masom; sklop sa svakim delom jednom i svakom kopijom postavljenom: [Izvezi kao USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (sa svim svojstvima)}} | mm | Z | Oblik kao trouglovi, materijal, svaki parametar, naslovni blok, količine; delovi sklopa kao tipovi, a kopije postavljene |
| DXF R12, skica | `.dxf` | Ne | {{ui:DXF skice ili ravne površi}} sa izabranom skicom | mm | Sopstveni x, y skice | Linije, prave lukove i krugove, tačke; slojevi PROFILE, CONSTRUCTION, POINTS |
| DXF R12, površ | `.dxf` | Ne | {{ui:DXF skice ili ravne površi}} sa izabranom ravnom površi | mm | Sopstveni x, y površi | Obrisi površi: okrugle rupe kao prave kružnice, ostalo kao zatvorene polilinije (okrugle ivice kao fasete) |
| PDF crtež | `.pdf` | Ne | {{ui:Crtež (PDF): pogledi, presek, detalj, GD&T}} | mm na A3 listu | | Prednji, gornji, desni, izometrijski, presečni i detaljni pogledi nacrtani iz fasete, skrivene linije, ukupne dimenzije, GD&T simboli, naslovni blok |

## Datoteke PartCraft-a

Obe su običan tekst (JSON). Čvrsto telo se nikada ne čuva: PartCraft ga ponovo gradi iz istorije, pa datoteke ostaju male i uvek se slažu sa istorijom.

- Svaka datoteka ima broj verzije. Ova verzija piše svaku datoteku dela najnižom verzijom koja sadrži ono što koristi (2 do 5; telo napravljeno iz mreže traži 5), i otvara svaku stariju verziju. Datoteka iz novijeg PartCraft-a se odbija uz poruku koja navodi obe verzije.
- Svaka vrednost se proverava pri otvaranju. Imena gube kontrolne znakove; brojevi van opsega, reference na nepostojeće elemente i nepoznate vrste elemenata se odbijaju uz jednostavan razlog.
- Ne menjaj ove datoteke ručno, osim ako znaš format. Datoteka koja ne prolazi proveru neće se otvoriti.
- Deo sa velikim STEP telom uvezenim u ranijoj verziji može preći 50 MB, što je najveće što PartCraft otvara kao datoteku dela (pogledaj [Rešavanje problema](topic:troubleshooting#file-problems)).

## Fasete i tačnost

STL i 3MF su uvek sastavljeni od fasete, prema podešavanju **Krivine**, a tako je i DXF površi, osim okruglih rupa, koje su prave kružnice. DXF skice ima prave lukove i kružnice, jer dolazi direktno iz skice. Ova verzija gradi svaki deo mrežnim jezgrom, pa su pogledi crteža (uključujući preseke) takođe fasetirani. Tačan STEP izvoz je izuzetak: jezgro zna pravu površ svake strane iz skice (ili iz STEP datoteke iz koje je telo otvoreno), pa se okrugle površi zapisuju kao pravi cilindri, konusi, sfere i torusi, bez obzira na to kako je **Krivine** podešeno (pogledaj [Izvoz za štampu, STEP i DXF](topic:export-files#for-other-cad-programs-step)).

## Nije podržano u ovoj verziji

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (uvoz ili izvoz); OBJ izvoz | Nije izgrađeno |
| DWG | Piše ga samo [varijantni paket](topic:variant-pack), kao list crteža svake konfiguracije. Ne čita se, i nema drugog izvoza. Izvezi DXF; svaki CAD program otvara R12 DXF |
| STEP sklopa i crtež sklopa | Još nije izgrađeno. Izvezi svaki deo kao tačan STEP; STL, 3MF i lista materijala se izvoze iz sklopa |
| Sopstvene datoteke delova i sklopova drugih programa (osim `.3dm`, koja se otvara kao jedno telo) | Nije izgrađeno |

Pogledaj [Šta još nije izgrađeno](topic:not-built-yet).
