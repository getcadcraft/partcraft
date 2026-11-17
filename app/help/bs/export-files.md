---
title: Izvoz za štampu, STEP i DXF
summary: Izvezi dio kao STL ili 3MF za 3D štampu, kao tačno STEP čvrsto tijelo za druge CAD i CAM programe, a skicu ili ravnu površinu kao DXF za lasersko i vodeno rezanje.
keywords: izvoz, spasi kao, ifc, bim, skupovi svojstava, stl, 3mf, 3d štampa, slicer, step, stp, tačan step, b-rep, ap242, ap214, cam, mašinska radionica, glodanje, dxf, laser, vodeni mlaz, cnc, ravni obrazac, profil, mreža, fasetirano
from: e1de71d5
---

Izvozi su kopije u drugim formatima. Zadrži i datoteku `.partcraft.json`: to je jedina datoteka koju PartCraft može ponovo otvoriti i uređivati.

Svi izvozi rade na dijelu na ekranu, u milimetrima. U sklopu se STL, 3MF, STEP i {{ui:Crtež (PDF): pogledi, presjek, detalj, GD&T}} izvoze kao cijeli sklop: vidi [Lista dijelova, rastavljeni pogledi i pomični dijelovi](topic:assembly-bom-explode). Ako čvrstog tijela još nema: "Još nema čvrstog tijela za izvoz."

## Za 3D štampu: STL ili 3MF

1. Opciono: za glatke okrugle površine, klikni prazan prostor da ništa nije odabrano i postavi **Krive** na **Fino (128 po krugu)** ili **Vrlo fino (256 po krugu)** u desnom panelu. STL i 3MF su uvijek sastavljeni od trouglova.
2. Odaberi {{ui:Izvoz}}, zatim {{ui:STL, za 3D štampu}} ili {{ui:3MF, za 3D štampu}}.
3. Datoteka se preuzima. Statusna traka kaže, na primjer: "Izvezeno: Part1.stl (binarno, mm, Z gore, 1536 trouglova)."

Oba formata su **Z gore**, kako štampači i slajseri očekuju. Svijet PartCraft-a je Y gore, pa izvoz okreće dio: ono što pokazuje gore u PartCraft-u (okomito na gornju ravan) pokazuje gore i u slajseru, a dio skiciran na gornjoj ravni leži ravno na podlozi. Po potrebi postavi konačnu orijentaciju u svom slajseru.

3MF je noviji, manji format koji slajseri čitaju zajedno s jedinicama. Koristi STL ako program ne prima 3MF.

Da prvo provjeriš da je dio zatvoren, da staje na podlogu tvog štampača i da stoji na ravnoj površini, koristi {{ui:Izvoz}} › {{ui:Provjeri za 3D štampanje (STL ili 3MF)…}}: vidi [Pripremi dio za 3D štampu](topic:print-3d).

## Za druge CAD programe: STEP

Odaberi {{ui:Izvoz}}, zatim {{ui:STEP AP242 (tačno čvrsto tijelo)}}. Piše dio kao jedno tačno čvrsto tijelo, u milimetrima, okrenuto na Z gore. Okrugle površine se pišu kao pravi cilindri, konusi, sfere i torusi, s pravim krugovima za svoje ivice, pa drugi program može odabrati rupu kao rupu. Tijelo otvoreno iz STEP datoteke zadržava ravne površine, cilindre, konuse, sfere i torusi te datoteke, pa i one izlaze tačne. Površine bez takve površine (bok splajna, modelovani navoj, tijelo iz STL, OBJ ili 3MF mreže, splajn iz STEP datoteke, pomaknute i rotirane površine) ostaju ravne fasete u istom čvrstom tijelu, a statusna traka kaže koliko ih ima. Statusna traka kaže, na primjer: "Izvezeno: Flange.step (AP242, tačno čvrsto tijelo, mm, Z gore): 14 površina na njihovim pravim površinama (10 cilindričnih, 1 konična, 0 sferičnih, 0 torusnih), 0 uklopljenih krivih ivica." Sadrži samo čvrsto tijelo: bez historije, bez skica, bez crteža. Ako drugi program čita samo AP214, odaberi {{ui:STEP AP214 (tačno čvrsto tijelo)}}: isto čvrsto tijelo u toj starijoj shemi.

Šta je tačno, a šta nije:

- Ravne površine, cilindri (rupe, izbočine, zaobljenja na pravim ivicama), konusi (upuštanja, nagibi), sfere i torusi su tačni, kao i njihove prave, kružne i eliptične ivice. Postavka **Krive** ih ne mijenja.
- Gdje se dvije okrugle površine sijeku (rupa bušena kroz osovinu), ivica je glatka kriva uklopljena u obje površine na 0.00001 mm; "uklopljene krive ivica" ih broji.
- Zatvorena šupljina unutar dijela piše se kao praznina čvrstog tijela. Više odvojenih tijela piše se kao više čvrstih tijela.
- Sklop još nije zapisan kao tačni STEP: izvezi svaki dio.

Provjereno je čitanjem datoteka natrag u OpenCascade, koji prijavljuje ispravna čvrsta tijela s zapreminama izračunatim ručno. Nije još otvoren u svakom CAD ili CAM programu. Ako neki odbije datoteku, {{ui:STEP (poligonalni, mrežni kernel)}} piše isti oblik kao ravne površine (u vlastitim osama PartCraft-a, Y gore). Javi nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.

Za obradu, radni prostor Manufacture također piše tačno čvrsto tijelo u radnim koordinatama postavke: vidi [Napravi putanje alata i G-kod](topic:manufacture#exact-step-for-the-shop).

## Za BIM programe: IFC sa svim svojstvima

Odaberi {{ui:Izvoz}}, zatim {{ui:IFC 4 (sa svim svojstvima)}}. Piše dio kao IFC 4 element za zgrade i postrojenja, njegov oblik kao trouglove (Z gore, milimetri), uz ono što PartCraft zna o njemu, kao skupove svojstava:

| Skup svojstava | Sadrži |
|---|---|
| **PartCraft_Part** | Naziv, materijal i njegova gustina, aktivna konfiguracija, broj tijela; u sklopu također broj dijela i opis |
| **PartCraft_Parameters** | Svaki parametar dijela s vrijednošću; izraz formule i napomena su u opisu svojstva |
| **PartCraft_TitleBlock** | Polja natpisne table crteža koja si popunio (naslov, broj crteža, revizija, firma, nacrtao, provjerio i odobrio, datum, završna obrada, opća tolerancija) i veličina lista |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Zapremina, površina, masa (uz materijal) i ukupna veličina |

Materijal se pridružuje kao IFC materijal, a broj crteža je oznaka elementa. U sklopu se svaki dio piše jednom kao tip koji sadrži njegova svojstva, a svaka kopija se postavlja tamo gdje je sklop postavlja, sa vlastitim vrijednostima u **PartCraft_Instance**: njen naziv, njen broj stavke u listi materijala i da li je to učvršćeni dio.

## Za lasersko, vodeno ili CNC profile: DXF

Dvije vrste DXF-a, obje verzije R12, koje svaki CAD i CAM program otvara:

### Skica

1. Odaberi skicu u historiji (ili je imaj otvorenu).
2. Odaberi {{ui:Izvoz}}, zatim {{ui:DXF skice ili ravne površine}}. (Desni panel skice također ima {{ui:Izvezi kao DXF}}.)

Dobijaš `<part> - <sketch>.dxf` u vlastitim koordinatama skice: linije, prave lukove i krugove na sloju **PROFILE**, konstrukcijsku geometriju na **CONSTRUCTION**, slobodne tačke na **POINTS**.

### Ravna površina čvrstog tijela

1. Klikni ravnu površinu u prikazu (na primjer vrh ploče s rupama).
2. Odaberi {{ui:Izvezi površinu kao DXF}} u desnom panelu, ili {{ui:Izvoz}}, zatim {{ui:DXF skice ili ravne površine}}.

Dobijaš `<part> - face.dxf`: obris površine i svaku rupu u njoj. Okrugla rupa (cijeli krug gdje cilindar sijeće površinu: bušena rupa, ili rupa otvorene STEP datoteke) piše se kao pravi krug sa sopstvenim centrom i poluprečnikom rupe. Svaki drugi obris je zatvorena polilinija, a njene okrugle ivice (uglovi zaobljenja, utori, lukovi) su njene fasete, pa prvo postavi **Krive** na Fino ako ih rezač prati blisko. Statusna traka kaže koliko ima obrisa, koliko ih je pravih krugova i površinu ravne površine.

Ako nije odabrana ni skica ni ravna površina: "Otvori ili odaberi skicu, ili odaberi ravnu površinu, za izvoz DXF-a."

## Crtež

Crtež u PDF-u ima svoj vodič: [Napravi list crteža](topic:drawing-pdf).

## Formati nisu dostupni

glTF, OBJ, IGES i Parasolid se u ovoj verziji ne izvoze. DWG piše samo varijantni paket, kao list crteža: vidi [Napravi varijantni paket iz konfiguracija](topic:variant-pack). Vidi [Formati datoteka](topic:file-formats).
