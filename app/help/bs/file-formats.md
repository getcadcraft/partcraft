---
title: Formati datoteka
summary: Svaka datoteka koju PartCraft čita i piše, s ekstenzijama, jedinicama, osama i onim što svaka zadržava ili gubi.
keywords: formati, vrste datoteka, ekstenzije, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mreža, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, jedinice, z gore
from: 4d0ecbee
---

| Format | Ekstenzija | Otvori | Spasi ili izvezi | Jedinice | Osa gore | Zadržava |
|---|---|---|---|---|---|---|
| PartCraft dio | `.partcraft.json` | Da | {{ui:Spasi}} | mm | Y | Cijelu historiju: skice, relacije, kote, elemente, isključivanje, vraćanje, postavku krivina, postavke crteža i GD&T, STEP tekst uvezen u ranijoj verziji |
| PartCraft sklop | `.partcraft-asm.json` | Da | {{ui:Spasi}} u sklopu | mm | Y | Svaki dio (ugrađen), kopije i njihove pozicije, spojeve |
| STL (binarno ili tekstualno) | `.stl` | Da, kao čvrsto tijelo: [Otvori STL, OBJ ili 3MF](topic:open-meshes) | {{ui:STL, za 3D štampu}} | mm (pita se pri otvaranju) | Z | Samo trouglove čvrstog tijela |
| 3MF | `.3mf` | Da, kao čvrsto tijelo | {{ui:3MF, za 3D štampu}} | mm (navedeno u datoteci) | Z | Čvrsto tijelo kao jedan objekat mreže |
| OBJ | `.obj` | Da, kao čvrsto tijelo (samo površine) | Ne | pita se pri otvaranju | Z ili Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Da, kao čvrsto tijelo pročitano kao trouglovi (zakrivljene površine nacrtane kao fasete; ravne površine, cilindri, konusi, sfere i torusi datoteke se zadržavaju za tačan izvoz): [Otvori STEP datoteku](topic:import-step) | | mm (iz jedinice datoteke) | Z, ili Y ako tako kažeš | Čvrsta i površinska tijela, sklopovi sa svakim dijelom na mjestu; bez boja, naziva, stabla sklopa ili PMI |
| `.3dm` | `.3dm` | Da, kao jedno čvrsto tijelo iz njegovih mreža i površina (sačuvane mreže za renderovanje, inače tesselirane): [Otvori .3dm model](topic:open-3dm-files) | | Iz jedinice datoteke | Z, ili Y ako tako kažeš | Mreže, polipovršine, ekstruzije i položaji blokova kao jedno tijelo; bez krivih, boja, slojeva ili naziva |
| STEP AP242, tačan | `.step` | | {{ui:STEP AP242 (tačno čvrsto tijelo)}} | mm | Z | Jedno tačno čvrsto tijelo: ravne površine, cilindri, konusi, sfere i torusi na njihovim pravim površinama, prave kružnice i linije kao ivice; bokovi splajna, modelovani navoji, tijela iz datoteka mreže i splajn površine STEP datoteke ostaju fasete. STEP za druge CAD i CAM programe |
| STEP AP214, tačan | `.step` | | {{ui:STEP AP214 (tačno čvrsto tijelo)}} | mm | Z | Isto tačno čvrsto tijelo u starijoj AP214 shemi, za programe koji čitaju samo nju |
| STEP AP242, fasetirano | `.step` | | {{ui:STEP (poligonalni, mrežni kernel)}} | mm | Y | Zatvoreno čvrsto tijelo od ravnih površina: okrugle površine kao fasete. Za program koji odbija tačnu datoteku |
| STEP AP214, fasetirano | `.step` | | {{ui:STEP AP214 (facetirano, mesh kernel)}} | mm | Y | Isto čvrsto tijelo u starijoj AP214 shemi, za programe koji čitaju samo nju |
| USD paket | `.usdz` | Ne | {{ui:USD paket (.usdz)}} | m | Z | Čvrsto tijelo s materijalom, zapreminom i masom; sklop s svakim dijelom jednom i svakom kopijom postavljenom: [Izvoz kao USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (sa svim svojstvima)}} | mm | Z | Oblik kao trouglovi, materijal, svaki parametar, natpisna tabla, količine; dijelovi sklopa kao tipovi, a njegove kopije postavljene |
| DXF R12, skica | `.dxf` | Ne | {{ui:DXF skice ili ravne površine}} uz odabranu skicu | mm | Vlastiti x, y skice | Linije, prave lukove i krugove, tačke; slojevi PROFILE, CONSTRUCTION, POINTS |
| DXF R12, površina | `.dxf` | Ne | {{ui:DXF skice ili ravne površine}} uz odabranu ravnu površinu | mm | Vlastiti x, y površine | Obrisi površine: okrugle rupe kao pravi krugovi, ostalo kao zatvorene polilinije (okrugle ivice kao fasete) |
| PDF crtež | `.pdf` | Ne | {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} | mm na A3 listu | | Prednji, gornji, desni, izometrijski, presjek i pogledi detalja nacrtani iz faseta, skrivene linije, ukupne dimenzije, GD&T simboli, natpisna tabla |

## Datoteke PartCraft-a

Obje su obični tekst (JSON). Čvrsto tijelo se nikad ne čuva: PartCraft ga ponovo gradi iz historije, pa datoteke ostaju male i uvijek se poklapaju s historijom.

- Svaka datoteka ima broj verzije. Ova verzija upisuje svaku datoteku dijela s najnižom verzijom koja sadrži ono što koristi (2 do 5; tijelo napravljeno iz mreže treba 5) i otvara svaku stariju verziju. Datoteka iz novijeg PartCraft-a se odbija, uz poruku koja navodi obje verzije.
- Svaka vrijednost se provjerava pri otvaranju. Nazivi gube upravljačke znakove; brojevi van opsega, reference na nepostojeće elemente i nepoznate vrste elemenata se odbijaju uz jasan razlog.
- Ne uređuj ove datoteke ručno osim ako znaš format. Datoteka koja ne prođe provjere neće se otvoriti.
- Dio s velikim STEP čvrstim tijelom uvezenim u ranijoj verziji može preći 50 MB, što je najviše što PartCraft otvara kao datoteku dijela (vidi [Rješavanje problema](topic:troubleshooting#file-problems)).

## Fasete i tačnost

STL i 3MF su uvijek od faseta, prema postavci **Krive**, i tako je i DXF površine, osim za okrugle rupe, koje su pravi krugovi. DXF skice ima prave lukove i krugove, jer dolazi direktno iz skice. Ova verzija gradi svaki dio mrežnim kernelom, pa su pogledi crteža (uključujući presjeke) također od faseta. Tačan STEP izvoz je izuzetak: kernel zna pravu površinu svake površine iz skice (ili iz STEP datoteke iz koje je tijelo otvoreno), pa se okrugle površine pišu kao pravi cilindri, konusi, sfere i torusi bez obzira na postavku **Krive** (vidi [Izvoz za štampu, STEP i DXF](topic:export-files#for-other-cad-programs-step)).

## Nije podržano u ovoj verziji

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (ni uvoz ni izvoz); izvoz OBJ | Nije izrađeno |
| DWG | Piše ga samo [varijantni paket](topic:variant-pack), kao list crteža svake konfiguracije. Ne čita se i nema drugog izvoza. Izvezi DXF; svaki CAD program otvara R12 DXF |
| STEP sklopa i crtež sklopa | Još nije izrađeno. Izvezi svaki dio kao tačan STEP; STL, 3MF i lista materijala se izvoze iz sklopa |
| Izvorne datoteke dijelova i sklopova drugih programa (osim `.3dm`, koji se otvara kao jedno tijelo) | Nije izrađeno |

Vidi [Šta još nije izrađeno](topic:not-built-yet).
