---
title: Formate de fișiere
summary: Fiecare fișier pe care PartCraft îl citește și îl scrie, cu extensii, unități, axe și ce păstrează sau pierde fiecare.
keywords: formate, tipuri de fișiere, extensii, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, plasă, step, stp, ap242, dxf, r12, pdf, gltf, iges, unități, Z în sus
from: 4d0ecbee
---

| Format | Extensie | Deschidere | Salvare sau export | Unități | Axa în sus | Păstrează |
|---|---|---|---|---|---|---|
| Piesă PartCraft | `.partcraft.json` | Da | {{ui:Save}} | mm | Y | Istoricul complet: schițe, relații, cote, operații, suprimare, derulare înapoi, setarea curbelor, setările desenului și GD&T, textul STEP importat într-o versiune anterioară |
| Ansamblu PartCraft | `.partcraft-asm.json` | Da | {{ui:Save}} într-un ansamblu | mm | Y | Fiecare piesă (încorporată), copiile și pozițiile lor, articulațiile |
| STL (binar sau text) | `.stl` | Da, ca un corp solid: [Deschiderea unui STL, OBJ sau 3MF](topic:open-meshes) | {{ui:STL, for 3D printing}} | mm (se cere la deschidere) | Z | Doar triunghiurile solidului |
| 3MF | `.3mf` | Da, ca un corp solid | {{ui:3MF, for 3D printing}} | mm (precizat în fișier) | Z | Solidul ca un singur obiect de plasă |
| OBJ | `.obj` | Da, ca un corp solid (doar fețe) | Nu | se cere la deschidere | Z sau Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Da, ca un corp solid citit ca triunghiuri (fețele curbe desenate ca fațete; fețele plane, cilindrii, conurile, sferele și torii din fișier sunt păstrate pentru exportul exact): [Deschiderea unui fișier STEP](topic:import-step) | | mm (din unitatea fișierului) | Z, sau Y dacă o precizați | Solidele și corpurile de suprafață, ansamblurile cu fiecare piesă la locul ei; fără culori, nume, arbore de ansamblu sau PMI |
| `.3dm` | `.3dm` | Da, ca un singur corp solid din plasele și suprafețele lui (plase de randare salvate, altfel triangulate): [Deschiderea unui model .3dm](topic:open-3dm-files) | | Din unitatea fișierului | Z, sau Y dacă o precizați | Plase, polisuprafețe, extrudări și plasări de blocuri ca un singur corp; fără curbe, culori, straturi sau nume |
| STEP AP242, exact | `.step` | | {{ui:STEP AP242 (exact solid)}} | mm | Z | Un solid exact: fețe plane, cilindri, conuri, sfere și tori pe suprafețele lor adevărate, cercuri și linii adevărate ca muchii; laturile de spline, filetele modelate, corpurile din fișiere de plasă și fețele spline ale unui fișier STEP rămân fațete. STEP-ul de folosit pentru alte programe CAD și CAM |
| STEP AP214, exact | `.step` | | {{ui:STEP AP214 (exact solid)}} | mm | Z | Același solid exact, în schema mai veche AP214, pentru programele care citesc doar aceasta |
| STEP AP242, cu fațete | `.step` | | {{ui:STEP (faceted, mesh kernel)}} | mm | Y | Un solid închis din fețe plane: suprafețele rotunde ca fațete. Pentru un program care refuză fișierul exact |
| STEP AP214, cu fațete | `.step` | | {{ui:STEP AP214 (faceted, mesh kernel)}} | mm | Y | Același solid în schema mai veche AP214, pentru programele care citesc doar aceasta |
| Pachet USD | `.usdz` | Nu | {{ui:USD package (.usdz)}} | m | Z | Solidul cu materialul, volumul și masa lui; un ansamblu cu fiecare piesă o singură dată și fiecare copie plasată: [Exportul ca USD](topic:usd) |
| IFC 4 | `.ifc` | Nu | {{ui:IFC 4 (with every property)}} | mm | Z | Forma ca triunghiuri, materialul, fiecare parametru, cartușul, cantitățile; piesele unui ansamblu ca tipuri, iar copiile plasate |
| DXF R12, schiță | `.dxf` | Nu | {{ui:DXF of the sketch or flat face}} cu o schiță selectată | mm | x, y proprii ale schiței | Linii, arce și cercuri adevărate, puncte; straturile PROFILE, CONSTRUCTION, POINTS |
| DXF R12, față | `.dxf` | Nu | {{ui:DXF of the sketch or flat face}} cu o față plană aleasă | mm | x, y proprii ale feței | Conturele feței: găurile rotunde ca cercuri adevărate, restul ca polilinii închise (muchiile rotunde ca fațete) |
| Desen PDF | `.pdf` | Nu | {{ui:Drawing (PDF): views, section, detail, GD&T}} | mm pe o foaie A3 | | Vederi din față, de sus, din dreapta, izometrică, secțiune și detaliu desenate din fațete, linii ascunse, dimensiuni de ansamblu, simboluri GD&T, cartuș |

## Fișierele PartCraft

Ambele sunt text simplu (JSON). Solidul nu este stocat niciodată: PartCraft îl reconstruiește din istoric, astfel încât fișierele rămân mici și se potrivesc mereu cu istoricul.

- Fiecare fișier are un număr de versiune. Această versiune scrie fiecare fișier de piesă cu cea mai mică versiune care cuprinde ce folosește (de la 2 la 5; un corp făcut dintr-o plasă are nevoie de 5) și deschide orice versiune mai veche. Un fișier salvat de un PartCraft mai nou este refuzat, cu un mesaj care indică ambele versiuni.
- Fiecare valoare este verificată la deschiderea unui fișier. Numele pierd caracterele de control; numerele în afara intervalului, referințele la operații lipsă și tipurile de operații necunoscute sunt refuzate, cu un motiv simplu.
- Nu editați aceste fișiere manual decât dacă cunoașteți formatul. Un fișier care nu trece verificările nu se va deschide.
- O piesă cu un solid STEP mare, importat într-o versiune anterioară, poate depăși 50 MB, cea mai mare dimensiune pe care PartCraft o deschide ca fișier de piesă (vezi [Depanare](topic:troubleshooting#file-problems)).

## Fațete și exactitate

STL și 3MF sunt mereu formate din fațete, la setarea **Curbe**, și la fel este DXF-ul feței, cu excepția găurilor rotunde, care sunt cercuri adevărate. DXF-ul schiței are arce și cercuri adevărate, pentru că provine direct din schiță. Această versiune construiește fiecare piesă cu nucleul de plasă, deci și vederile desenului (inclusiv secțiunile) sunt din fațete. Exportul STEP exact face excepție: nucleul cunoaște suprafața adevărată a fiecărei fețe din schiță (sau din fișierul STEP din care a fost deschis un corp), deci fețele rotunde sunt scrise ca cilindri, conuri, sfere și tori adevărați, indiferent de setarea **Curbe** (vezi [Exportul pentru imprimare, STEP și DXF](topic:export-files#for-other-cad-programs-step)).

## Neacceptat în această versiune

| Format | Stare |
|---|---|
| glTF, IGES, Parasolid, ACIS (intrare sau ieșire); exportul OBJ | Încă nerealizat |
| DWG | Scris doar de [pachetul de variante](topic:variant-pack), ca foaia de desen a fiecărei configurații. Nu se citește și nu există alt export. Exportați DXF; orice program CAD deschide DXF R12 |
| STEP-ul ansamblului și desenul unui ansamblu | Încă nerealizate. Exportați fiecare piesă ca STEP exact; STL, 3MF și lista de materiale se exportă dintr-un ansamblu |
| Fișierele native de piesă și ansamblu ale altor programe (cu excepția `.3dm`, care se deschide ca un corp) | Încă nerealizat |

Vezi [Ce nu este încă realizat](topic:not-built-yet).
