---
title: Izvoz za štampu, STEP i DXF
summary: Izvezi deo kao STL ili 3MF za 3D štampu, kao tačno STEP čvrsto telo za druge CAD i CAM programe, a skicu ili ravnu površ kao DXF za lasersko i vodenomlazno sečenje.
keywords: izvoz, sačuvaj kao, ifc, bim, skupovi svojstava, stl, 3mf, 3d štampa, slajser, step, stp, tačan step, b-rep, ap242, ap214, cam, mašinska radionica, glodanje, dxf, laser, vodeni mlaz, cnc, ravan obrazac, profil, mreža, fasetirano
from: e1de71d5
---

Izvozi su kopije u drugim formatima. Sačuvaj i datoteku `.partcraft.json`: to je jedina datoteka koju PartCraft može ponovo da otvori i uredi.

Svi izvozi rade nad delom na ekranu, u milimetrima. U sklopu se STL, 3MF, STEP i Crtež (PDF) izvoze kao ceo sklop: pogledaj [Lista delova, eksplodirani pogledi i pomerljivi delovi](topic:assembly-bom-explode). Ako čvrstog tela još nema: „Još nema čvrstog tela za izvoz.“

## Za 3D štampu: STL ili 3MF

1. Opciono: za glatke okrugle površi kliknite prazan prostor da ništa nije izabrano i u desnom panelu postavite **Krivine** na **Fino (128 po obrtaju)** ili **Vrlo fino (256 po obrtaju)**. STL i 3MF su uvek sastavljeni od trouglova.
2. Izaberi {{ui:Izvezi}}, zatim {{ui:STL, za 3D štampu}} ili {{ui:3MF, za 3D štampu}}.
3. Datoteka se preuzima. Statusna traka kaže, na primer: „Izvezeno: Part1.stl (binarno, mm, Z gore, 1536 trouglova).“

Oba formata su **Z gore**, kako štampači i slajseri očekuju. Svet u PartCraft-u je Y gore, pa izvoz okreće deo: ono što u PartCraft-u gleda gore (normalno na ravan Top) gleda gore i u slajseru, a deo skiciran na ravni Top leži ravno na podlozi. Po potrebi podesi konačnu orijentaciju u slajseru.

3MF je noviji, manji format koji slajseri čitaju zajedno sa jedinicama. Koristi STL ako program ne prihvata 3MF.

Da prvo proveriš da je deo zatvoren, da staje na podlogu štampača i da stoji na ravnoj površi, koristi {{ui:Izvezi}} › {{ui:Proveri za 3D štampu (STL ili 3MF)…}}: pogledaj [Pripremi deo za 3D štampu](topic:print-3d).

## Za druge CAD programe: STEP

Izaberi {{ui:Izvezi}}, zatim {{ui:STEP AP242 (tačno čvrsto telo)}}. Zapisuje deo kao jedno tačno čvrsto telo, u milimetrima, okrenuto na Z gore. Okrugle površi se zapisuju kao pravi cilindri, konusi, sfere i torusi, sa pravim kružnicama za svoje ivice, pa drugi program može rupu da prepozna kao rupu. Telo otvoreno iz STEP datoteke zadržava ravne površi, cilindre, konuse, sfere i torusi te datoteke, pa i one izlaze tačne. Površi bez takve površine (strana splajna, modelovani navoj, telo iz STL, OBJ ili 3MF mreže, splajn iz STEP datoteke, površi nastale provlačenjem i rotiranjem) ostaju ravne fasete u istom čvrstom telu, a statusna traka kaže koliko ih ima. Statusna traka kaže, na primer: „Izvezeno: Flange.step (AP242, tačno čvrsto telo, mm, Z gore): 14 površi na pravim površima (10 cilindričnih, 1 konusna, 0 sfernih, 0 torusnih), 0 uklopljenih krivih ivica.“ Sadrži samo čvrsto telo: bez istorije, bez skica, bez crteža. Ako drugi program čita samo AP214, izaberi {{ui:STEP AP214 (tačno čvrsto telo)}}: isto čvrsto telo u starijoj šemi.

Šta je tačno, a šta nije:

- Ravne površi, cilindri (rupe, izbočine, zaobljenja na pravim ivicama), konusi (upuštanja, nagibi), sfere i torusi su tačni, kao i njihove prave, kružne i eliptične ivice. Podešavanje **Krivine** ih ne menja.
- Gde se dve okrugle površi seku (rupa probušena kroz vratilo), ivica je glatka kriva uklopljena u obe površi do 0,00001 mm; „uklopljene krive ivice“ ih broje.
- Zatvorena šupljina unutar dela zapisuje se kao praznina čvrstog tela. Više odvojenih tela zapisuje se kao više čvrstih tela.
- Sklop još nije zapisan kao tačan STEP: izvezi svaki deo.

Ispitano je čitanjem datoteka u OpenCascade, koji prijavljuje ispravna čvrsta tela sa zapreminama izračunatim ručno. Još nije otvoreno u svakom CAD ili CAM programu; ako neki program odbije datoteku, {{ui:STEP (fasetirano, mrežno jezgro)}} zapisuje isti oblik kao ravne površi (u sopstvenim osama PartCraft-a, Y gore), a javi nam preko {{ui:Pomoć}} › {{ui:Prijavi problem}}.

Za obradu: modul Manufacture takođe zapisuje tačno čvrsto telo u radnim koordinatama postavke: pogledaj [Napravi putanje alata i G-kod](topic:manufacture#exact-step-for-the-shop).

## Za BIM programe: IFC sa svim svojstvima

Izaberi {{ui:Izvezi}}, zatim {{ui:IFC 4 (sa svim svojstvima)}}. Zapisuje deo kao IFC 4 element za modele zgrada i postrojenja, njegov oblik kao trouglove (Z gore, milimetri), uz ono što PartCraft zna o njemu, kao skupove svojstava:

| Skup svojstava | Sadrži |
|---|---|
| **PartCraft_Part** | Ime, materijal i njegovu gustinu, aktivnu konfiguraciju, broj tela; u sklopu i broj dela i opis |
| **PartCraft_Parameters** | Svaki parametar dela sa vrednošću; izraz formule i napomena su u opisu svojstva |
| **PartCraft_TitleBlock** | Polja naslovnog bloka crteža koja si popunio (naslov, broj crteža, revizija, firma, nacrtao, proverio i odobrio, datum, završna obrada, opšta tolerancija) i veličina lista |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Zapremina, površina, masa (uz materijal) i ukupne dimenzije |

Materijal je pridružen kao IFC materijal, a broj crteža je oznaka elementa. U sklopu se svaki deo zapisuje jednom kao tip koji sadrži svoja svojstva, a svaka kopija se postavlja tamo gde je sklop postavlja, sa sopstvenim vrednostima u **PartCraft_Instance**: njenim imenom, rednim brojem u listi materijala i tim da li je to učvršćeni deo.

## Za lasersku, vodenomlaznu ili CNC obradu profila: DXF

Dve vrste DXF-a, obe verzije R12, koju otvara svaki CAD i CAM program:

### Skica

1. Izaberi skicu u istoriji (ili je imaj otvorenu).
2. Izaberi {{ui:Izvezi}}, zatim {{ui:DXF skice ili ravne površi}}. (Desni panel skice takođe ima {{ui:Izvezi kao DXF}}.)

Dobijaš `<deo> - <skica>.dxf` u sopstvenim koordinatama skice: linije, prave lukove i krugove na sloju **PROFILE**, konstrukcionu geometriju na **CONSTRUCTION**, slobodne tačke na **POINTS**.

### Ravna površ tela

1. Klikni ravnu površ u prikazu (na primer vrh ploče sa rupama).
2. Izaberi {{ui:Izvezi površ kao DXF}} u desnom panelu, ili {{ui:Izvezi}}, zatim {{ui:DXF skice ili ravne površi}}.

Dobijaš `<deo> - face.dxf`: obris površi i svaku rupu u njoj. Okrugla rupa (cela kružnica tamo gde se cilindar spaja sa površi: probušena rupa, ili rupa iz otvorene STEP datoteke) zapisuje se kao prava kružnica sa sopstvenim centrom i poluprečnikom rupe. Svaki drugi obris je zatvorena polilinija, a njene okrugle ivice (uglovi zaobljenja, žlebovi, lukovi) su fasete, pa prvo postavi **Krivine** na Fino ako ih rezač prati od blizu. Statusna traka kaže koliko ima obrisa, koliko ih je pravih krugova i površinu površi.

Ako nije izabrana ni skica ni ravna površ: „Otvori ili izaberi skicu, ili izaberi ravnu površ, da izvezeš DXF.“

## Crtež

Crtež u PDF-u ima sopstveno uputstvo: [Napravi list crteža](topic:drawing-pdf).

## Formati koji nisu dostupni

glTF, OBJ, IGES i Parasolid se u ovoj verziji ne izvoze. DWG zapisuje samo varijantni paket, kao list crteža: pogledaj [Napravi paket varijanti iz konfiguracija](topic:variant-pack). Pogledaj [Formati datoteka](topic:file-formats).
