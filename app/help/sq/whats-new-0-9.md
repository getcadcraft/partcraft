---
title: Çfarë është e re në 0.9 (më herët)
summary: PartCraft 0.9 shton rrumbullakime midis faqeve dhe trashje në solide, montime me mijëra pjesë, një kasë dokumentesh me revizione, një shtojcë Solid FEM për tendosjen, dhjetë metoda harqesh, madhësi çeliku të Mbretërisë së Bashkuar, një fazë printimi dhe shtojca për printim me rrëshirë.
keywords: çfarë është e re 0.9, version i mëparshëm, çfarë është e re, shënime versioni, ndryshime, 0.9, rrumbullakim midis faqeve, rrumbullakim me top, rrumbullakim i disa skajeve, trashëso, solid nga sipërfaqet, step shell, solid iges, rrumbullakime nga skanimet, montim i madh, shfaqje e lehtë, 20000 pjesë, dokumente, kasë, revizion, lëshim, ku përdoret, lidhje rhino, grasshopper, 3dm, kursorë, dyshemeja e fabrikës, radhë pune, solid fem, elementë të fundëm, von mises, frekuencë natyrore, metoda harqesh, harku me 3 pika, seksione çeliku UK, faza e printimit, rrëshirë, goo, ctb, shtrat, shtrije, çfarë është e re, shënime versioni, ndryshime, 0.8, 0.8.1, version, veçori të reja, analizë live, përditëso ndërsa redaktoj, thyeje, ngarkesë faktor, jolinear, rrjedhje, deformim plastik, kontakt, calculix, studim lëvizjeje, hapësirë, sipërfaqe, nurbs, lëmim, hull, zebra, engineer, gjenerator, trup i gjeneruar, skicë nga foto, shkallë për printim, ndarje për printim, tkurrje, fleta të vendosura, g-code, vizatim, përmaso vrimat, asistent, mcp, gjuhë, rreshta të shiritit
from: 1dafd7c8
---

Kjo është ajo që ndryshoi në PartCraft 0.9, krahasuar me 0.8.1. Sipërfaqet e lira mbyllen tani në solide, montimet me mijëra pjesë mbeten të përdorshme, një kasë Dokumentesh mban revizionet, dhe një shtojcë Solid FEM kontrollon tendosjen në një pjesë. Çdo artikull tregon ku ta gjesh.

## Të reja në 0.9.1

- **Eksport STEP i saktë.** {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} dhe {{ui:STEP AP214 (trup i saktë i ngurtë)}} funksionojnë tani. Vrimat, bosat, rrumbullakimet, konet, sferat dhe torët shkruhen mbi sipërfaqet e tyre të vërteta me rrethe të vërteta si skaje, kështu që një program tjetër CAD ose CAM mund ta zgjedhë një vrimë si vrimë. Anët spline, filetimet e modeluara dhe rrjetat e importuara mbeten facete të sheshta në të njëjtin solid. Shih [Eksporto për printim, STEP dhe DXF](topic:export-files#for-other-cad-programs-step).
- **STEP hyn, STEP i saktë del.** Një skedar STEP që hapet mban faqet e veta të sheshta, cilindrat, konet, sferat dhe torët, kështu që {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} i shkruan përsëri si sipërfaqe të vërteta në vend të facetave: një trarë furnitori me vrima bulonash del me të njëjtat faqe me të cilat hyri, plus çfarë ke prerë brenda tij. Faqet spline, të shtrira dhe të rrotulluara të skedarit mbeten facete, dhe kështu trupat nga STL, OBJ dhe 3MF. Hap përsëri skedarin STEP për një pjesë të ruajtur më herët. Shih [Hap një skedar STEP dhe ndërto mbi të](topic:import-step).
- **Rrathë të vërtetë në DXF të faqes.** {{ui:Eksporto}} › {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} me një faqe të sheshtë të zgjedhur shkruan tani vrimat e rrumbullakëta si rrathë, me qendrën dhe rrezen e vetë vrimës, për një tavolinë lazeri, plazme ose ujëprerëse. Skajet e tjera rrethore mbeten facete.
- **STEP i saktë për punëtorinë.** Te {{ui:Prodhimi}}, {{ui:STEP i saktë (koordinatat e punës)}} shkruan pjesën me origjinën e saj te origjina e punës së konfigurimit dhe Z sipas boshtit të veglës, koordinatat që përdor G-code. Shih [Bëj shtigjet e veglës dhe G-code](topic:manufacture#exact-step-for-the-shop).

## Të reja

### Sipërfaqet dhe solidet

- **Rrumbullakim midis faqeve.** Zgjidh {{ui:Sipërfaqet}} te kutia {{ui:Hapësira e punës}}, pastaj {{ui:Rrumbullim midis faqeve}}. Përzgjidh dy faqet e një solidi, shkruaj rrezen (dhe {{ui:Rrezja në fund (mm, 0 = e njëjtë)}} për një rreze që ndryshon përgjatë skajit). Rreshti i rezultatit tregon sa larg është rrumbullakimi nga topi ideal që rrokulliset, dhe një rreze që nuk përshtatet refuzohet me faqen e emërtuar. {{ui:Rrumbullim i disa skajeve}} rrumbullakos shumë skaje në një hap; shëno {{ui:Qoshet (pjesë sferike ku takohen tre)}} për një qoshe sferike ku takohen tre skaje të rrumbullakosura të faqeve të sheshta. Shih [Sipërfaqet e lira (NURBS)](topic:nurbs-surfaces).
- **Trashje në solid.** {{ui:Jep trashësi dhe bëje solid}} në të njëjtën hapësirë pune i jep një sipërfaqeje trashësi; {{ui:Ana tjetër}} e rrit në drejtimin tjetër. Një palosje ose kryqëzim me vetveten refuzohet, me sipërfaqen dhe vendin e emërtuar.
- **Solide nga sipërfaqet.** Sipërfaqet e prera mund të bashkohen me bashkim, zbritje dhe kryqëzim dhe të ngulen në pjesë si një hap zhbërjeje. STEP shkruan një solid si një guaskë të mbyllur dhe IGES si një solid; të dyja lexohen përsëri si solid. Nëse faqet nuk çiftëzohen skaj për skaj, skedari merr faqe të veçanta dhe rreshti i gjendjes e thotë. Solidet mund të bëhen edhe në redaktorin e nyjeve; shih [Redaktori i nyjeve](topic:nodes).
- **Rrumbullakime me rreze të ndryshueshme në skanime.** Kur përshtat sipërfaqe në një skanim, rrumbullakimet buzë (tore) dhe rrumbullakimet me rreze të ndryshueshme përgjatë një skaji mjaft të drejtë kërkohen gjithashtu dhe listohen me rrezen e tyre. Është testuar vetëm në skanime të krijuara.

### Montimet, dokumentet dhe lidhjet

- **Montime të mëdha.** Pjesët që janë kopje ndajnë një rrjet, dhe {{ui:Pamjet}} › {{ui:Shfaqje e lehtë}} vizaton kuti që pamja të mbetet e lëvizshme (ndizet vetvetiu për montime shumë të mëdha; zgjedhja dhe bashkimet përdorin ende pjesët reale). Pema e pjesëve shfaq rreshtat e parë dhe një buton {{ui:Shfaq 700 të tjera}} për pjesën tjetër. Skedarët e montimit mund të mbajnë deri në 50 000 instanca dhe 100 000 bashkime. Shih [Ndërto një montim](topic:build-assembly).
- **Dokumente.** {{ui:Dokumentet…}} te grupi **Skedar** hap një dialog mbi një dosje projekti: nxirr dhe fut (check out dhe check in), shkronja revizionesh, gjendje (punë në proces, për rishikim, i lëshuar, i vjetëruar), historik, ku përdoret dhe lista e materialeve. Shih [Dokumentet dhe revizionet (kasa)](topic:documents-walkthrough).
- **Lidhja e drejtpërdrejtë me Rhino.** Një skript, `cadcraft_link.py`, ndjek një dokument Rhino ose Grasshopper dhe shtyn në PartCraft vetëm atë që ndryshoi; një veçori e importuar rindërtohet mbi formën e re. Është një drejtim i vetëm dhe kërkon Studio. Shih [Lidhja e drejtpërdrejtë .3dm](topic:live-3dm-link).
- **Shiko kursorët e njëri-tjetrit.** Në një sesion të përbashkët kursori i secilit shfaqet me emrin dhe veçorinë që ka zgjedhur. Shih [Puna e drejtpërdrejtë me të tjerët](topic:work-live).
- **Dyshemeja e fabrikës.** Ndiz shtojcën Dyshemeja e fabrikës te {{ui:Cilësimet}} › {{ui:Shtojcat}}. Pasi postohet një program te {{ui:Prodhimi}}, skeda e tij mund të {{ui:Shto në radhën e punës së fabrikës}} ose {{ui:Ruaj si skedar pune}}. Nuk dërgon dhe nuk nis kurrë një makinë.

### Analiza dhe pjesët

- **Shtojca Solid FEM.** Ndiz {{ui:Solid FEM}} te {{ui:Cilësimet}} › {{ui:Shtojcat}} (është e fikur derisa ta bësh) dhe shfaqet një skedë {{ui:Solid FEM}} në panelin e djathtë. {{ui:Rrjetëzo pjesën}}, zgjidh faqet e fiksuara dhe ngarkesat në pamjen 3D, {{ui:Zgjidh}}, dhe vizato zhvendosjen, tendosjen von Mises ose formën e modalitetit me {{ui:Shfaq në model}}. Shih [Solid FEM: një kontroll tendosjeje](topic:solid-fem-check).
- **Hark në skica, dhjetë mënyra.** Shigjeta pranë {{ui:Hark}} në shiritin e skicës liston 3 pikë, Fillim-Qendër-Fund, Fillim-Qendër-Kënd, Fillim-Qendër-Gjatësi, Fillim-Fund-Kënd, Fillim-Fund-Drejtim, Fillim-Fund-Rreze, Qendër-Fillim-Fund, Qendër-Fillim-Kënd, Qendër-Fillim-Gjatësi dhe Vazhdim. Shih [Vizato një hark me dhjetë metoda](topic:sketch-arc-methods).
- **Madhësi çeliku të Mbretërisë së Bashkuar.** Elementët e saldimit mund të përdorin 976 seksione UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); shkruaj një madhësi si `305x165x40 UB`. Shih [Elementët strukturorë](topic:structural-members).

### Printimi

- **Faza e printimit.** Butoni {{ui:Faza e printimit}} në shirit (shtojca 3D Print, e ndezur si parazgjedhje) vendos trupat e pjesës tënde mbi një shtrat me viza: {{ui:Shtrije}}, {{ui:Rrotullo 90°}}, {{ui:Rendit në bazë}}, {{ui:Përshtat të gjitha në bazë}}, {{ui:Shiko shtresat paraprakisht}}, pastaj {{ui:Dërgo te printeri 3D}} me USB, Klipper (Moonraker), OctoPrint ose PrusaLink. Asgjë nuk dërgohet derisa ta konfirmosh, dhe pjesa jote nuk ndryshohet kurrë. Për një skedar STL ose 3MF, shih [Përgatit një pjesë për printim 3D](topic:print-3d).
- **Printim me rrëshirë.** Shtojcat te {{ui:Cilësimet}} › {{ui:Shtojcat}}, të gjitha të fikura derisa t'i ndezësh: një prerës me rrëshirë, një test ekspozimi, dhe formatet e skedarëve Elegoo GOO, SL1, Chitubox CBDDLP/CTB dhe Anycubic. Prerja bëhet në një fije punëtore, kështu që faqja mbetet e përgjigjshme.

## Në çdo aplikacion

- Çdo ndihmë me kursorin është një tooltip Bootstrap.
- Kartela e fillimit ka një buton mbylljeje; mbetet e mbyllur.
- Rreshti i skedave të një paneli që nuk përshtatet lëviz anash në vend që të pritet.
- Skeda e shfletuesit tregon emrin e dokumentit të hapur para PartCraft | CadCraft.
- {{ui:Cilësimet}} tregon {{ui:Paraqitja}} të hapësirës së punës si një listë zgjedhjesh, dhe kutia e gjuhës liston çdo gjuhë që ka ndërtimi.
- Pesha dhe Temperatura janë lloje njësish në cilësimet e Njësive.

## Të rregulluara

- Menyja Hark e skicës tani liston çdo metodë.
- Shiriti i shtojcave dhe titulli i skedës së shfletuesit u korrigjuan më 2026-11-09.

## Kufijtë e sinqertë

- STEP i saktë u lexua përsëri në OpenCascade (solide të vlefshme, vëllime të barabarta me ato të llogaritura me dorë). Nuk është hapur ende në çdo program CAD ose CAM, dhe një montim nuk shkruhet si STEP i saktë.
- Asgjë nuk është printuar në një printer të vërtetë. Prerja, G-code dhe skedarët me rrëshirë u lexuan përsëri nga programet tona ose nga një printer i zëvendësuar; asnjë nga formatet me rrëshirë nuk është ngarkuar në një printer, dhe madhësitë e printerëve dhe ekspozimet janë pika nisjeje.
- Solid FEM është lineare, izotropike dhe elastike, një material për pjesë, pa kontakt, rrjedhje ose shembje. Tendosja në faqet e fiksuara dhe në qoshet e mprehta varet nga rrjeti. Është një ndihmës kontrolli, jo i rishikuar nga një inxhinier.
- Kohët e montimeve të mëdha vijnë nga një server pa GPU; një kornizë me detaj të plotë prej 20 000 pjesësh ende merr sekonda atje.
- Rrumbullakimet punojnë mbi çifte faqesh; nuk ka përzierje e përgjithshme në kulm dhe nuk ka rrumbullakim midis faqeve që nuk takohen.
- Lidhja Rhino nuk është ekzekutuar kurrë brenda Rhino ose Grasshopper të vërtetë. Dokumentet u provuan nga dy programe mbi një dosje, jo nga dy persona mbi një ndarje rrjeti.
- Përshtatja e sipërfaqeve me një skanim të vërtetë nuk ka pasur ende kontrollin e dorës. Gjuhët e tjera nga anglishtja janë draft të gjeneruara nga makina.
- Instaluesit e Windows nuk janë të nënshkruar me kod, dhe imazhi i diskut macOS nuk është noterizuar. Shih [Zgjidhja e problemeve](topic:troubleshooting).

Ndryshimet më herët janë te [Çfarë është e re në 0.7](topic:whats-new-0-7).

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në PartCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Simulimi përgjigjet ndërsa redakton dhe thotë çfarë thyhet e para, montimet marrin studime lëvizjeje, dhe hapësirat e reja punojnë sipërfaqe të lira dhe pjesë të dimensionuara nga fizika. 0.8.1 është një version i vogël riparimesh.

### Të reja

**Simulimi**

- **Përditëso ndërsa redaktoj.** Shëno {{ui:Përditëso ndërsa redaktoj}} te blloku Zgjidh dhe përgjigjet ndjekin redaktimet e tua. Ndrysho një dimension, një ngarkesë ose materialin dhe një përgjigje e shpejtë, e bërë me elemente katër herë më të mëdhenj, shfaqet menjëherë; kur ndalon për rreth një sekondë, përgjigjja e rafinuar e studimit zëvendëson atë. Rezultatet tregojnë cilën po shikon. Në një konsol çeliku përgjigjja e shpejtë ishte brenda 1 % në deformim dhe rreth 4 % në tendosje nga ajo e rafinuar. Shih [Kontrollo tendosjen dhe deformimin](topic:simulation#update-while-you-edit-live).
- **Çfarë thyhet e para.** Për një studim statik ose shembjeje, {{ui:Çfarë thyhet e para?}} te blloku **Thyeje** shkallëzon ngarkesat deri sa pjesa të dorëzohet. Liston, nga më e keqja, faktorin e ngarkesës deri te rrjedhja e parë (me një shenjë të kuqe aty ku tendosja kulmon) dhe faktorin e ngarkesës deri te shembja. Një faktor nën 1 do të thotë që pjesa tashmë dorëzohet sipas ngarkimit, dhe Problemet shfaq një gabim. Faktorët vijnë nga një studim linear, kështu që janë aq të mirë sa ai. Shih [Kontrollo tendosjen dhe deformimin](topic:simulation#find-out-what-breaks-first-break-it).
- **Rrjedhja dhe kontakti.** Dy lloje studimi të tjerë: një jolinear ku materiali ndjek vijën e tij të drejtë deri te tensioni i rrjedhjes dhe më pas një pjerrësi më të sheshtë, me tensionin plastik të vizatuar; dhe një ku copa të ndara shtyjnë njëra-tjetrën (pa fërkim) ose qëndrojnë të ngjitura (të lidhura). Një hap ngarkese që nuk stabilizohet, ose copa që zhyten shumë në njëra-tjetrën, shfaqen në panelin Problemet. Fërkimi, lëvizja e madhe, rrotullimet e mëdha, deformimet e mëdha dhe lodhja nuk zgjidhen. Shih [Kontrollo tendosjen dhe deformimin](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Skedarë për CalculiX.** {{ui:Eksporto}} › {{ui:Skedari CalculiX (.inp)}} ruan studimin për CalculiX, një program i veçantë që instalon dhe ekzekuton vetë; {{ui:Eksporto}} › {{ui:Rezultatet CalculiX (.frd)}} lexon mbrapsht skedarin e rezultateve mbi të njëjtin rrjet. PartCraft nuk e nis kurrë atë program, dhe e thotë nëse pjesa ka ndryshuar që kur u ruajt skedari.

**Montimet**

- **Studime lëvizjeje.** {{ui:Montimi}} › {{ui:Lëvizja}} drejton vlerën e një lidhjeje përgjatë një kohe që jep ti (shpejtësi konstante, e butësuar, sinus, ose lart e mbrapsht), vendos montimin në çdo hap me lidhjet dhe unazat e mbyllura të tij, dhe raporton çfarë përplaset dhe sa afër vijnë pjesët. {{ui:Shto një pikë}} vizaton pozicionin, shpejtësinë dhe nxitimin e një pike, vlerën e lidhjes dhe hapësirën kundrejt kohës; {{ui:Ruaj CSV}} dhe {{ui:Ruaj grafikun}} i shkruajnë jashtë. Pas {{ui:Ekzeko}}, shiriti Hap përmes ekzekutimit e sjell montimin në çdo hap. Cilësimet e studimit ruhen në skedarin e montimit. Shpejtësia dhe nxitimi vijnë nga pozicionet e regjistruara, kështu që përdor më shumë hapa nëse një majë e mprehtë del e ulët. Shih [Kontrollo një montim për përplasje dhe lëvizje](topic:check-assembly#a-motion-study).

**Sipërfaqe dhe pjesë nga fizika**

- **Një hapësirë pune Sipërfaqet.** Zgjidh {{ui:Sipërfaqet}} te kutia {{ui:Hapësira e punës}} për kurba dhe sipërfaqe NURBS pranë pjesës: {{ui:Kurbë}}, {{ui:Ndërlidhja}}, {{ui:Shtrirja}}, {{ui:Përputh}} dhe {{ui:Zebra}}, me vazhdimësi (G0, G1 ose G2) të matur mbi sipërfaqet e sakta dhe një skaj që është më keq se ç'kërkove, i listuar te Problemet me një rregullim Përputh. {{ui:Lëmo}} mat vijat hull për pikat e kthesës dhe kërcimet e kurbaturës dhe ri-ndërton ato të pa-lëmuara brenda tolerancës tënde. Sipërfaqet ruhen në skedarin e pjesës dhe nuk ndryshojnë veçoritë e pjesës. Shih [Sipërfaqet e lira (NURBS)](topic:nurbs-surfaces).
- **Engineer.** Zgjidh {{ui:Engineer}} te ndërruesi i hapësirës së punës, zgjidh një gjenerator dhe kliko {{ui:E re}}: një skript dimensionon një pjesë sipas asaj që duhet të bëjë (nxehtësi për t'u lëvizur, rrjedha, presion, material, proces printimi) me formula klasike, dhe e ndërton, pastaj jep numrat që përdori me burimet e tyre, kontrollet e prodhimit dhe skedarë për veglat e analizës. Të njëjtat hyrje japin të njëjtën pjesë në çdo kompjuter. Gjeneratori mbahet në pjesë, dhe hapja e një pjese nuk nis kurrë një skript. Shih [Pjesët nga fizika: gjeneratorët](topic:engineer-generators) dhe [Shkruaj një gjenerator](topic:write-a-generator).

**Skicimi, vizatimet dhe prodhimi**

- **Një skicë nga një foto.** {{ui:Veçoritë}} › {{ui:Më shumë}} › {{ui:Skicë nga një foto…}} gjurmon një foto të një pjese të sheshtë mbi një sfond të thjeshtë (kontur dhe vrima) ose një vizatim me stilolaps në vija, harqe dhe rrathë. Jep një gjatësi, kontrollon paraparjen dhe bën skicën. Shih [Bazat e skicimit](topic:sketch-basics#a-sketch-from-a-photo).
- **Shkallë dhe ndarje për printim.** {{ui:Eksporto}} › {{ui:Shkallë për printim (STL ose 3MF)…}} shkallëzon sipas çdo boshti pa e ndryshuar pjesën, për shembull me një lejim tkurrjeje. {{ui:Eksporto}} › {{ui:Ndaj për printim (zip me copa)…}} pret një pjesë shumë të madhe për shtratin tënd në copa të numërtuara të lidhura me kunja, çelësa, bisht-dallëndyshe, vrima kunjash ose xhepa magnetësh. Shih [Printo në 3D](topic:print-3d).
- **Fletët e vendosura në G-code.** {{ui:Eksporto}} › {{ui:Fletët e vendosura në G-code}} lexon një DXF të vendosur dhe bën një program për fletë përmes postprocesorit që zgjedh: vrimat dhe prerjet e para, pastaj konturet. Nuk planifikon hyrjet, renditjen e prerjes ose skajet e përbashkëta. Shih [Vendos pjesët e sheshta në fleta](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Vizatime që bëjnë më shumë vetë.** {{ui:Fleta}} › {{ui:Automatik}} zgjedh fletën më të vogël madhësi A që mban pamjet në shkallën më të madhe standarde deri në 1:1. {{ui:Përmaso vrimat}} vendos një shenjë qendre në çdo vrimë, një thirrje për çdo madhësi dhe pozicionet nga qoshja e poshtme majtas e pamjes. Shih [Bëj një vizatim](topic:drawing-pdf).

**Në çdo aplikacion**

- **Gjuhët.** Aplikacionet vijnë në 54 gjuhë. Ato përveç anglishtes janë draft të gjeneruara nga makina derisa një folës amtare t'i lexojë.
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh Mbështjell (si më parë), 2 rreshta ose 1 rresht; një shirit që nuk përshtatet lëviz anash. Shiriti i veglave të PartCraft tregon veglën më të përdorur të madhe dhe fsheh variantet pas një butoni të ndarë.
- **Lidh AI-në tënde.** Studio është qendra për lidhjen e një asistenti tënd me të tetë aplikacionet, me leje vetëm lexim, sugjerim ose redaktim për çdo aplikacion. Një asistent i lidhur mund të dimensionojë një pjesë nga një fjali, si një mbajtëse për një ngarkesë, të tregojë punën dhe çdo kontroll, dhe ta ndërtojë; raporton çfarë nuk kontrolloi (përqendrimi i tendosjes, lodhja, zvarritja në plastikë). Shih [Përdor PartCraft me një asistent AI](topic:use-with-ai-assistants).

### Të rregulluara në 0.8.1

- **Ngrirja e kursorit në ekran të plotë.** Zgjedhja me kursor tani kufizohet. Shkaku është leximi ynë më i mirë dhe nuk u konfirmua me personin që e raportoi.
- **Gjuha gjatë ekzekutimit.** Studio dhe versionet e paketuara mund të ndërrojnë gjuhën ndërsa punojnë; më parë ishin vetëm anglisht. Kjo nuk është testuar ende në çdo platformë: thuaj nëse gjuha nuk ndryshon.

### Ende jo në këtë version

- Lidh AI-në nuk është e përfunduar: lidhja me një klik brenda Studio, lidhësi i hostuar për AI të shfletuesit, çelësi yt API brenda Studio dhe paketa e publikuar MCP nuk premtohen. Studio nuk ka AI të vetën.
- Studio nuk është e nënshkruar me kod: Windows mund të paralajmërojë, dhe macOS kërkon klikim me të djathtën, pastaj Hap. Shih [Zgjidhja e problemeve](topic:troubleshooting).
- Zinxhirët e tolerancave janë ende në një drejtim: shih [Zinxhirët e tolerancave](topic:tolerance-stackup).
- Pjesa tjetër listohet te [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

Ndryshimet më herët janë te [Çfarë është e re në 0.7](topic:whats-new-0-7).
