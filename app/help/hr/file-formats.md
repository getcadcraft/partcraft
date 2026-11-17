---
title: Formati datoteka
summary: Svaka datoteka koju PartCraft čita i zapisuje, s ekstenzijama, jedinicama, osima te onim što svaka zadržava ili gubi.
keywords: formati, vrste datoteka, ekstenzije, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mreža, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, jedinice, z gore
from: 4d0ecbee
---

| Format | Ekstenzija | Otvori | Spremi ili izvezi | Jedinice | Os gore | Zadržava |
|---|---|---|---|---|---|---|
| PartCraft dio | `.partcraft.json` | Da | {{ui:Spremi}} | mm | Y | Cijelu povijest: skice, odnose, kote, značajke, potiskivanje, vraćanje, postavku krivulja, postavke crteža i GD&T, STEP tekst uvezen u ranijoj verziji |
| PartCraft sklop | `.partcraft-asm.json` | Da | {{ui:Spremi}} u sklopu | mm | Y | Svaki dio (ugrađen), kopije i njihove položaje, zglobove |
| STL (binarni ili tekstualni) | `.stl` | Da, kao čvrsto tijelo: [Otvorite STL, OBJ ili 3MF](topic:open-meshes) | {{ui:STL, za 3D ispis}} | mm (pita se pri otvaranju) | Z | Samo trokute tijela |
| 3MF | `.3mf` | Da, kao čvrsto tijelo | {{ui:3MF, za 3D ispis}} | mm (navedeno u datoteci) | Z | Tijelo kao jedan mrežni objekt |
| OBJ | `.obj` | Da, kao čvrsto tijelo (samo plohe) | Ne | pita se pri otvaranju | Z ili Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Da, kao čvrsto tijelo čitano kao trokuti (zakrivljene plohe nacrtane kao facete; ravne plohe, cilindri, stošci, kugle i torusi datoteke zadržani za egzaktni izvoz): [Otvorite STEP datoteku](topic:import-step) | | mm (iz jedinice datoteke) | Z, ili Y ako tako kažete | Tijela i površinska tijela, sklopovi sa svakim dijelom na mjestu; bez boja, naziva, stabla sklopa ili PMI |
| `.3dm` | `.3dm` | Da, kao jedno čvrsto tijelo iz njegovih mreža i površina (spremljene mreže za prikaz, inače pretvorene u mrežu): [Otvorite .3dm model](topic:open-3dm-files) | | Iz jedinice datoteke | Z, ili Y ako tako kažete | Mreže, polipovršine, izvlačenja i položaji blokova kao jedno tijelo; bez krivulja, boja, slojeva ili naziva |
| STEP AP242, egzaktno | `.step` | | {{ui:STEP AP242 (egzaktno tijelo)}} | mm | Z | Jedno egzaktno tijelo: ravne plohe, cilindri, stošci, kugle i torusi na pravim površinama, pravi krugovi i linije kao bridovi; bočne strane splajnova, modelirani navoji, tijela iz mrežnih datoteka i splajn-plohe STEP datoteke ostaju facete. STEP za druge CAD i CAM programe |
| STEP AP214, egzaktno | `.step` | | {{ui:STEP AP214 (egzaktno tijelo)}} | mm | Z | Isto egzaktno tijelo u starijoj shemi AP214, za programe koji čitaju samo nju |
| STEP AP242, facetirano | `.step` | | {{ui:STEP (stranični, mrežna jezgra)}} | mm | Y | Zatvoreno tijelo od ravnih ploha: okrugle plohe kao facete. Za program koji odbija egzaktnu datoteku |
| STEP AP214, facetirano | `.step` | | {{ui:STEP AP214 (stranični, mrežna jezgra)}} | mm | Y | Isto tijelo u starijoj shemi AP214, za programe koji čitaju samo nju |
| USD paket | `.usdz` | Ne | {{ui:USD paket (.usdz)}} | m | Z | Tijelo s materijalom, volumenom i masom; sklop s svakim dijelom jednom i svakom kopijom postavljenom: [Izvoz kao USD](topic:usd) |
| IFC 4 | `.ifc` | Ne | {{ui:IFC 4 (sa svakim svojstvom)}} | mm | Z | Oblik kao trokuti, materijal, svaki parametar, zaglavlje crteža, količine; dijelovi sklopa kao tipovi, a kopije postavljene |
| DXF R12, skica | `.dxf` | Ne | {{ui:DXF skice ili ravne plohe}} s odabranom skicom | mm | Vlastiti x, y skice | Linije, prave lukove i kružnice, točke; slojevi PROFILE, CONSTRUCTION, POINTS |
| DXF R12, ploha | `.dxf` | Ne | {{ui:DXF skice ili ravne plohe}} s odabranom ravnom plohom | mm | Vlastiti x, y plohe | Obrisi plohe: okrugle rupe kao prave kružnice, ostalo kao zatvorene polilinije (okrugli bridovi kao facete) |
| PDF crtež | `.pdf` | Ne | {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} | mm na A3 listu | | Pogledi sprijeda, odozgo, desno, izometrijski, presjek i detalj nacrtani iz faceta, skrivene linije, ukupne dimenzije, GD&T simboli, zaglavlje crteža |

## Datoteke PartCrafta

Obje su obični tekst (JSON). Tijelo se nikad ne sprema: PartCraft ga ponovno gradi iz povijesti, pa datoteke ostaju male i uvijek se podudaraju s poviješću.

- Svaka datoteka ima broj verzije. Ova verzija zapisuje svaku datoteku dijela s najnižom verzijom koja sadrži ono što koristi (2 do 5; tijelo napravljeno od mreže treba 5) i otvara svaku stariju verziju. Datoteka iz novijeg PartCrafta se odbija uz poruku koja navodi obje verzije.
- Svaka vrijednost se provjerava pri otvaranju. Nazivi gube upravljačke znakove; brojevi izvan raspona, reference na nepostojeće značajke i nepoznate vrste značajki odbijaju se uz jednostavan razlog.
- Ne uređujte ove datoteke ručno osim ako poznajete format. Datoteka koja ne prođe provjere neće se otvoriti.
- Dio s velikim STEP tijelom uvezenim u ranijoj verziji može premašiti 50 MB, što je najviše što PartCraft otvara kao datoteku dijela (vidi [Rješavanje problema](topic:troubleshooting#file-problems)).

## Facete i egzaktnost

STL i 3MF su uvijek od faceta, prema postavci **Krivulje**, a tako je i DXF ploha, osim za okrugle rupe, koje su prave kružnice. DXF skice ima prave lukove i kružnice, jer dolazi izravno iz skice. Ova verzija gradi svaki dio mrežnom jezgrom, pa su pogledi crteža (uključujući presjeke) također facetirani. Egzaktni STEP izvoz je iznimka: jezgra zna pravu površinu svake plohe iz skice (ili iz STEP datoteke iz koje je tijelo otvoreno), pa se okrugle plohe zapisuju kao pravi cilindri, stošci, kugle i torusi bez obzira na postavku **Krivulje** (vidi [Izvoz za ispis, STEP i DXF](topic:export-files#for-other-cad-programs-step)).

## Nije podržano u ovoj verziji

| Format | Stanje |
|---|---|
| glTF, IGES, Parasolid, ACIS (uvoz ili izvoz); izvoz OBJ | Nije izrađeno |
| DWG | Zapisuje ga samo [paket varijanti](topic:variant-pack), kao list crteža svake konfiguracije. Ne čita se i nema drugog izvoza. Izvezite DXF; svaki CAD program otvara R12 DXF |
| STEP sklopa i crtež sklopa | Još nije izrađeno. Izvezite svaki dio kao egzaktni STEP; STL, 3MF i sastavnica izvoze se iz sklopa |
| Izvorne datoteke dijelova i sklopova drugih programa (osim `.3dm`, koji se otvara kao jedno tijelo) | Nije izrađeno |

Vidi [Što još nije izrađeno](topic:not-built-yet).
