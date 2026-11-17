---
title: Kontrollo forcën dhe lakimin (Simulim)
summary: Zgjidhni një material, fiksoni sipërfaqe, shtoni forca, presione ose peshën e vetë pjesës, zgjidhni dhe lexoni stresin von Mises, zhvendosjen, faktorin e sigurisë, reaksionet dhe frekuencat natyrore mbi model, me atë që metoda mund dhe nuk mund t'ju tregojë.
keywords: simulim, FEA, analizë e drejtpërdrejtë, përditëso gjatë redaktimit, thyeje, çfarë thyhet së pari, faktor ngarkese, jolinear, plasticitet, rrjedhje, shtrirje plastike, bilinear, kontakt, çift kontakti, penalitet, i lidhur, kontakt pa fërkim, CalculiX, .inp, .frd, elementë të fundëm, stres, deformim, von Mises, zhvendosje, lakim, faktor sigurie, rezervë, reaksion, ngarkesë, forcë, presion, gravitet, pesha e vetë, i fiksuar, pa fërkim, mbështetje, kufizim, material, çelik, alumin, titan, ABS, PLA, najlon, frekuencë natyrore, modale, vibrim, rrjetë, madhësi elementi, tetraedrike, tetraedra, rrjetë tetraedrike, voksel, cilësi rrjete, stres kryesor, deformim ekuivalent, vlerësim gabimi, sipërfaqe të lakuara, vrima, rrumbullakime, adaptive, rafinim adaptiv, rafinim automatik, h-adaptive, konvergjencë, konvergjencë rrjete, sipërfaqe e saktë, sferë, kon, torus, spline, formë e lirë
from: 6f2fdec1
---

Hapësira e punës Simulim përgjigjet te pyetja "a do të përkulet apo do të thyhet nën këtë ngarkesë?" për pjesën që po modeloni. Është një studim **statik linear** (lakime të vogla, materiali mbetet elastik) ose një studim **frekuence natyrore**, i zgjidhur në një rrjetë tetraedrash kuadratikë me 10 nyje që ndjek sipërfaqet e pjesës (ose, nëse zgjidhni, në kube të vogla të barabarta). Punon me sipërfaqet e emërtuara që i jep kerneli i rrjetës pjesës (shih [Kerneli i rrjetës](topic:solid-kernels)).

Zgjidhni **Simulim** te kutia **Hapësira e punës** në të majtë të shiritit të veglave. Pjesa juaj nuk ndryshon; studimi ruhet brenda skedarit të pjesës dhe çdo ndryshim i tij mund të zhbëhet.

## Përgatit një studim

1. Shtypni **Studim i ri** në panelin e djathtë.
2. Zgjidhni **Material**. Paneli tregon fortësinë (E), koeficientin e Poisson-it, densitetin dhe kufirin e rrjedhjes. Vlerat janë shifra tipike të manualeve; vlerat e certifikuara të furnizuesit tuaj mund të ndryshojnë.
3. Zgjidhni **Rrjeta**:
   - **Tetraedrike (më e saktë)**, parazgjedhja: tetraedra me 10 nyje, sipërfaqet e jashtme të të cilëve shtrihen mbi sipërfaqet e pjesës, me skaje të lakuara te vrimat, rrumbullakimet dhe sipërfaqet e tjera të rrumbullakta. Nyjet mbi sipërfaqet e sheshta, cilindrike, koniche, sferike dhe torusi, mbi sipërfaqet e rrotulluara dhe të ekstrudura dhe mbi sipërfaqet e formës së lirë (B-spline) qëndrojnë mbi sipërfaqen e saktë; çdo lloj tjetër sipërfaqeje ndjek rrjetën e vet të shfaqjes, dhe tabela e rezultateve tregon sa sipërfaqe e bënë këtë. Rrjeta bëhet më e imët vetvetiu pranë sipërfaqeve të lakuara, mureve të hollë dhe skajeve të mprehta.
   - **Kube voksel (e shpejtë)**: pjesa e mbushur me kube të barabarta. E shpejtë, por sipërfaqet e lakuara bëhen hapa. Studimet e ruajtura para se të ekzistonte rrjeta tetraedrike e mbajnë këtë.
4. Lëreni **Madhësia e elementit** bosh për një madhësi automatike (rreth 12,000 tetraedra, ose 20,000 kube), ose shkruani një në milimetra. Paneli tregon përafërsisht sa elemente bëjnë përpara se të shtohen vendet e imëta. Me tetraedra, **Elemente më të vegjël në sipërfaqet e lakuara** (ndezur si parazgjedhje) rafinon vrimat dhe rrumbullakimet, ku stresi zakonisht arrin kulmin.

### Rafino automatikisht

Me tetraedra, një studim statik ose lakimi (pa ngarkesë termike), një studim frekuence natyrore dhe një studim termik i qëndrueshëm ofrojnë **Rafino automatikisht (adaptiv)**. Shenjojeni dhe caktoni:

- **Gabimi i synuar (%)**: zgjidhja ndalon kur gabimi i vlerësuar është nën këtë (1 % në fillim).
- **Kalimet më të shumta**: sa zgjidhje më së shumti mund të bëjë (5 në fillim, më së shumti 10).

Çdo kalim zgjidh, gjen elementët me gabimin më të madh të vlerësuar, i ndan (dhe aq fqinjë sa nevojiten për ta mbajtur rrjetën të plotë), dhe zgjidh përsëri. Nyjet e reja mbi sipërfaqet e lakuara vendosen mbi sipërfaqen e saktë. Rezultatet tregojnë më pas një tabelë dhe një grafik me, për çdo kalim, elementët, të panjohurat, gabimin e vlerësuar, stresin kulmor (ose temperaturën) dhe zhvendosjen (ose fluksin e nxehtësisë), dhe një rresht që thotë pse u ndal: u arrit synimi, kalimet mbaruan, rrjeta e radhës do të ishte shumë e madhe, ose një kalim dështoi (atëherë shihni kalimin e fundit të mirë).

Lexoni vlerësimin si vlerësim. Ai (Zienkiewicz–Zhu; krahasuar me zgjidhje të sakta lexon rreth 0.6 deri në 0.95 të gabimit të vërtetë) mat gabimin mbi **gjithë pjesën**, kështu që stresi kulmor te një vrimë ose një rrumbullakim është zakonisht pak i pasaktë kur vlerësimi duket i vogël: për një përqendrim stresi, vendosni synimin nën 1 % dhe shikoni kulmin që qetësohet nga kalimi në kalim. Në një cep të mprehtë brenda, ose te skaji i një sipërfaqeje të fiksuar, stresi i vërtetë është i pafund, kështu që vlerësimi nuk arrin kurrë atje: kalimet mbarojnë në vend të kësaj.

**Frekuencat natyrore dhe lakimi.** Për një studim frekuence natyrore, vlerësimi mbulon çdo mënyrë që kërkuat, secila e numëruar njëlloj; tabela dhe grafiku ndjekin dy frekuencat e para. Në një pjesë me vetëm sipërfaqe të sheshta një frekuencë mund vetëm të zbresë nga një kalim në tjetrin (çdo rrjetë e mban atë të mëparshmen); sipërfaqet e lakuara afrohen gjithashtu më shumë me formën e tyre të vërtetë, gjë që mund ta lëvizë një frekuencë pak në njërën ose tjetrën anë. Për lakimin, vlerësimi mbulon para-stresin dhe mënyrat e lakimit, dhe tabela ndjek faktorët e ngarkesës. Të kontrolluar në një shufër çeliku 100 × 10 × 10 mm: frekuenca e parë qetësohet nga 812.4 në 811.9 Hz gjatë katër kalimeve, 0.4 % nën Euler–Bernoulli (që injoron prerjen), dhe faktori i ngarkesës së kolonës brenda 0.5 % të Euler-it.

## Mbaje dhe ngarkoje

Çdo studim ka nevojë për të paktën një mbështetje dhe, për stresin, një ngarkesë.

1. Shtypni {{ui:Fixed}} në shiritin e veglave. Mbështetja e re zgjidhet dhe pret sipërfaqe: klikoni sipërfaqet që mbahen të palëvizura (klikoni një sipërfaqe përsëri për ta hequr). Shtypni **Mbaro zgjedhjen** ose {{key:Esc}} kur të mbaroni. Konet blu shënojnë sipërfaqet e mbajtura.
2. Shtypni {{ui:Force}} dhe klikoni sipërfaqet mbi të cilat vepron forca. Në panel shkruani **Forcën totale** në njuton dhe zgjidhni **Drejtimin**: brenda sipërfaqes, ose përgjatë një boshti. Forca ndahet mbi sipërfaqet e zgjedhura sipas sipërfaqes. Shigjetat portokalli e tregojnë.
3. Shtypni {{ui:Pressure}} për një presion në MPa (N/mm²) që shtyn brenda sipërfaqeve të zgjedhura; një presion negativ tërheq.

Lloje të tjera janë në listën **Shto** të panelit: një **Sipërfaqe pa fërkim** (sipërfaqja mund të rrëshqasë përgjatë vetes, por nuk largohet nga ajo — përdoreni për plane simetrie dhe mbështetje të lëmuara) dhe **Gravitet** (pesha e vetë pjesës, 9.81 m/s², në drejtimin që zgjidhni).

Një mbështetje që e lë pjesën të lirë të rrëshqasë ose rrotullohet refuzohet, duke thënë cilin lëvizje mbetet e lirë.

## Zgjidh dhe lexo rezultatet

Shtypni {{ui:Solve}}. Puna bëhet në sfond; **Stop** e anulon. Pastaj:

- Pjesa ngjyroset sipas **stresit von Mises**; zgjidhni **Zhvendosjen** ose **Faktorin e sigurisë** te **Shfaq**. Legjenda tregon shkallën.
- Tregojeni pjesën për të lexuar vlerat nën tregues.
- Shenjoni **Forma e deformuar** për ta parë pjesën të përkulur (lëvizja zmadhohet nga **Shkalla**; ajo e vërtetë është ajo e tabelës).
- Tabela liston stresin më të madh dhe ku është, zhvendosjen më të madhe, **faktorin e sigurisë** më të vogël (kufiri i rrjedhjes ÷ stresi von Mises; nën 1 materiali rrjedh), ngarkesën e aplikuar dhe **reaksionet** te mbështetjet (balancojnë ngarkesën), dhe rrjetën e përdorur.

Për **frekuencat natyrore**, zgjidhni **Llojin** atë, vendosni sa **Mënyra**, dhe zgjidhni. Çdo mënyrë shfaq frekuencën dhe formën e saj (format shkallëzohen në 1 te lëvizja më e madhe e tyre).

Nëse ndryshoni pjesën, rezultatet shënohen si të vjetruara: zgjidhni sërish.

## Rrjedhja dhe kontakti (studime jolineare)

Dy lloje të tjera studimesh shkojnë përtej "materiali mbetet elastik":

- **Jolineare (materiali rrjedh)** ndjek vijën e drejtë të materialit deri te kufiri i rrjedhjes, pastaj një pjerrësi më të sheshtë (**Pjerrësia pas rrjedhjes**, 1 % e E kur lihet bosh). Ngarkesa vazhdon në **Hapat e ngarkesës**; një hap që nuk qetësohet përgjysmohet vetvetiu. Rezultatet shtojnë **Shtrirjen plastike** te grafikët dhe thonë sa e ngarkesës u mbajt. Nëse një hap ende nuk qetësohet, studimi ndalon te hapi i fundit i mirë dhe paneli ⚠ Problemet tregon ku: pjesa ka mbaruar forcën aty (një shembje), ose hapat janë shumë të mëdhenj.
- **Kontakti midis pjesëve** lejon pjesë të ndara të pjesës të shtyjnë njëra-tjetrën. Shtoni një **Çift kontakti**, zgjidhni sipërfaqet e anës A (ato që shtypin) me {{ui:Pick faces}}, pastaj të anës B me {{ui:Pick side B faces}}. Pjesët **pa fërkim** shtyjnë, rrëshqasin dhe ndahen; pjesët **të lidhura** mbeten të ngjitura. Çdo pjesë rrjetëzohet veçmas, kështu që një hapësirë e vogël midis tyre është në rregull. Kontakti është një metodë penaliteti: pjesët zhyten pak njëra në tjetrën (**faktori i penalitetit** × E ÷ madhësia e elementit cakton sa i ngurtë është kontakti). Tabela tregon zhytjen më të thellë, dhe paneli i Problemeve paralajmëron kur është më shumë se 1 % e madhësisë së elementit: rrisni faktorin ose përdorni elemente më të vegjël.

Të dy përdorin rrjetën tetraedrike. Fërkimi, rrëshqitja e madhe dhe rrotullimet e mëdha nuk zgjidhen këtu.

## Ekzekuto në CalculiX

**Eksporto › Skedar CalculiX (.inp)** (ose {{ui:Save a CalculiX deck (.inp)}} në panel) e ruan studimin si skedar hyrës për CalculiX, një program i veçantë që e instaloni dhe e ekzekutoni vetë: e njëjta rrjetë, material, mbështetje, ngarkesa dhe çifte kontakti, në mm, N dhe MPa. Ekzekutojeni, pastaj **Eksporto › Rezultatet CalculiX (.frd)** e lexon skedarin e tij të rezultateve mbi të njëjtën rrjetë dhe shfaq zhvendosjen (dhe stresin von Mises kur skedari ka stresa). Nëse keni ndryshuar pjesën ose madhësinë e elementit ndërmjet, rrjeta nuk është e njëjtë dhe PartCraft e thotë këtë: ruani një skedar hyrës të ri.

## Sa t'i besoni

PartCraft kontrollon zgjidhësin e vet me formula llogaritëse dore (zhvendosja e skajit të një konzole PL³/3EI brenda 1 %, zgjatja e një shufre PL/AE saktësisht, frekuenca e parë e një konzole brenda 3 %, stresi rreth një vrime në një pllakë). Megjithatë, mbani parasysh këto kufizime:

- **Rrjeta.** Me tetraedra, PartCraft kontrollon zhvendosjen dhe stresin e përkuljes të një konzole (brenda 0.3 %), stresin te një vrimë në një pllakë (Kt, brenda rreth 1 %), një tub të trashë nën presion (Lamé, brenda 0.3 %) dhe frekuencën e parë (brenda 0.4 %). Tabela tregon **cilësinë e rrjetës** (këndet më të vogla dhe më të mëdha ndërmjet faqeve të elementeve; nën rreth 10° një element është i dobët) dhe një **gabim të vlerësuar të stresit**: nëse është më shumë se disa përqind, zgjidhni sërish me një madhësi më të vogël elementi, ose lëreni **Rafino automatikisht** ta bëjë. Në një pllakë me vrimë dhe një shufër me dy prerje në skaj, rafinimi automatik arriti brenda 1 % të Kt-së së tekstit me rreth një të gjashtën e të panjohurave që kërkoi një rrjetë e përgjithshme më e imët. Me kube voksel, një vrimë ose një rrumbullakim është shkallë me madhësinë e kubit, kështu që stresi aty është i trashë.
- **Cepat e mprehtë brenda dhe skajet e sipërfaqeve të fiksuara nuk kanë kulm të vërtetë stresi.** Vlera atje rritet vazhdimisht sa më të vogla të bëhen elementët. Lexoni stresin pak larg vendeve të tilla, ose rrumbulloseni cepin në model.
- **Rezultatet për t'u lexuar.** Përveç stresit von Mises, zhvendosjes dhe faktorit të sigurisë, një studim tetraedrik shfaq **stresin kryesor maksimal dhe minimal** (tendosje dhe shtypje) dhe **deformimin ekuivalent**. Shenjoni **Shfaq rrjetën** për të parë elementët.
- **Studimet statike janë lineare dhe elastike.** Për rrjedhjen dhe kontaktin përdorni llojet jolineare të studimeve më sipër; lakimet e mëdha dhe lodhja nuk zgjidhen. Nxehtësia, stresi termik dhe lakimi linear janë lloje studimesh të veta: shih [Nxehtësia, stresi termik dhe lakimi](topic:thermal-and-buckling).
- **Çdo material është i njëjtë në të gjitha drejtimet.** Plastikat e printuara 3D janë më të dobëta përgjatë shtresave të tyre, shpesh me një të tretën ose më shumë.
- Kjo është një version laboratorik: kontrolloni pjesët që kanë rëndësi në një mënyrë tjetër.

## Përditëso ndërsa redakton (Live)

Shenjoni **Përditëso ndërsa redaktoj** te blloku **Zgjidh** dhe përgjigjet e Simulimit ndjekin redaktimet tuaja. Ndryshoni një dimension, një ngarkesë, materialin ose mjedisin dhe menjëherë shfaqet një **përgjigje e shpejtë**, e bërë me elemente katër herë më të mëdhenj se ata të studimit; kur ndaloni për një çast (rreth një sekondë), përgjigja e **rafinuar** e vetë studimit zëvendëson atë. Rezultatet thonë cilën po shikoni (**Përgjigje e shpejtë** ose **Përgjigje e rafinuar**) dhe madhësinë e elementit. Përgjigja e shpejtë është e mirë për drejtim dhe madhësi: te një konzolë çeliku ishte brenda 1 % në zhvendosje dhe rreth 4 % në stres me atë të rafinuar. Besojini asaj të rafinuarës për numrat që do të përdorni. Studimet statike, të frekuencës natyrore, termike dhe lakimit punojnë kështu; Live është cilësim pamjeje dhe nuk ruhet në pjesë. Një zgjidhje që shtypni vetë mbetet siç është deri te redaktimi i radhës.

## Gjej çfarë thyhet së pari (Thyeje)

Për një studim statik ose lakimi, shtypni **Çfarë thyhet së pari?** te blloku **Thyeje**. PartCraft i shkallëzon ngarkesat e studimit (forcat, presionet dhe pesha së bashku) derisa pjesa të dorëzohet dhe liston, më të dobëtin e parë, **faktorin e ngarkesës deri te rrjedha e parë** (faktori mbi ngarkesat e sotme në të cilin stresi më i lartë von Mises arrin kufirin e rrjedhjes së materialit, me një shenjë të kuqe aty ku ndodh) dhe **faktorin e ngarkesës deri te lakimi** për të njëjtat mbështetje dhe ngarkesa. Një faktor 4.3 do të thotë se pjesa duron 4.3 herë ngarkesën e vet përpara se të rrjedhë; **një faktor nën 1 do të thotë se tashmë dorëzohet kur ngarkohet**, dhe kjo shfaqet te lista e Problemeve si gabim (gjetja më e dobët shfaqet si shënim edhe kur gjithçka qëndron). Faktorët vijnë nga një studim linear mbi tetraedra me madhësinë tuaj të elementit, kështu që janë aq të saktë sa është ai studim: stresi te një sipërfaqe e fiksuar ose te një cep i mprehtë nuk ka kulm të vërtetë (shih më poshtë), dhe faktori i rrjedhjes do të jetë në anën e kujdesshme aty. Asistenti juaj mund ta bëjë të njëjtën kontroll me mjetin `break_run`.

## Lidhje

- [Nxehtësia, stresi termik dhe lakimi](topic:thermal-and-buckling)
- [Rrit një formë nga ngarkesat (Gjeneruese)](topic:generative-design)
- [Mat distancat, këndet dhe masën](topic:measure)
- [Çfarë nuk është ndërtuar ende](topic:not-built-yet)
