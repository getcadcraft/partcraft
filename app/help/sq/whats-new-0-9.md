---
title: Çfarë ka të re në 0.9
summary: PartCraft 0.9 shton mbushje midis sipërfaqeve dhe trashje në solide, montime me mijëra pjesë, një kasafortë Dokumentesh me revizione, një shtesë Solid FEM për stresin, dhjetë metoda harku, madhësi çeliku të Mbretërisë së Bashkuar, një fazë Printimi dhe shtesa për printim me rrëshirë.
keywords: çfarë ka të re, release notes, shënime versioni, ndryshimet, 0.9, mbushje midis faqeve, rrumbullim me top që rrotullohet, rrumbullo disa skaje, trashje, solid nga sipërfaqet, step shell, iges solid, rrumbullime skanimi, montim i madh, shfaqje e lehtë, 20000 pjesë, dokumente, kasafortë, kontroll dalës, revizion, version, lidhja Rhino, grasshopper, 3dm, kursorë, dyshemeja e fabrikës, radhë pune, solid fem, elementë të fundëm, von mises, frekuenca natyrale, metodat e harkut, hark 3 pikë, profile çeliku të Mbretërisë së Bashkuar, blue book, faza e printimit, rrëshirë, goo, ctb, shtrat, shtrije, ndryshimet, 0.8, 0.8.1, version, veçori të reja, analizë e drejtpërdrejtë, përditëso ndërsa redaktoj, prishe atë, faktor ngarkese, jolinear, rrjedhje, deformim plastik, kontakt, calculix, studim lëvizjeje, hapësirë e lirë, sipërfaqe, nurbs, lëmim, hull, zebra, inxhinier, gjenerator, objekt i gjeneruar, skicë nga një foto, shkallë për printim, ndaj për printim, tkurrje, fletë të vendosura, g-code, vizatim, përmaso vrimat, asistent, mcp, gjuhët, rreshtat e shiritit të veglave
from: 96d9fbfa
---

Kjo është ajo që ndryshoi në PartCraft 0.9, krahasuar me 0.8.1. Sipërfaqet e lira mbyllen tani në solide, montimet me mijëra pjesë mbeten të përdorshme, një kasafortë Dokumentesh mban revizionet, dhe një shtesë Solid FEM kontrollon stresin në një pjesë. Çdo element thotë ku ta gjesh.

## E re në 0.9.1

- **Eksport STEP i saktë.** {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} dhe {{ui:STEP AP214 (trup i saktë i ngurtë)}} tani funksionojnë. Vrimat, daljet, rrumbullimet, konet, sferat dhe torët shkruhen në sipërfaqet e tyre të vërteta me rrathë të vërtetë si brinjë, kështu që një program tjetër CAD ose CAM mund ta zgjedhë një vrimë si vrimë. Anët spline, filetat e modeluara dhe rrjetat e importuara mbeten facetë të sheshta në të njëjtin solid. Shih [Eksporto për printim, STEP dhe DXF](topic:export-files#for-other-cad-programs-step).
- **STEP hyn, STEP i saktë del.** Një skedar STEP që hap mban sipërfaqet e veta të sheshta, cilindrat, konet, sferat dhe torët, kështu që {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} i shkruan përsëri si sipërfaqe të vërteta në vend të facetave: një trarë furnitori me vrima për bulona del me të njëjtat sipërfaqe me të cilat hyri, plus çfarë ke prerë brenda tij. Sipërfaqet spline, të zhvendosura dhe të rrotulluara të skedarit mbeten facetë, dhe kështu trupat nga STL, OBJ dhe 3MF. Hap përsëri skedarin STEP për një pjesë të ruajtur më parë. Shih [Hap një skedar STEP dhe ndërto mbi të](topic:import-step).
- **Rrathë të vërtetë në DXF-in e sipërfaqes.** {{ui:Eksporto}} › {{ui:DXF i skicës ose i sipërfaqes së sheshtë}} me një sipërfaqe të sheshtë të zgjedhur tani shkruan vrimat e rrumbullakëta si rrathë, me qendrën dhe rrezen e vetë vrimës, për një tavolinë lazeri, plazme ose prerëse me ujë. Skajet e tjera të rrumbullakëta mbeten facetë.
- **STEP i saktë për punëtorinë.** Te {{ui:Prodhimi}}, {{ui:STEP i saktë (koordinatat e punës)}} shkruan pjesën me origjinën në origjinën e punës së rregullimit dhe Z sipas boshtit të veglës, koordinatat që përdor kodi G. Shih [Bëj rrugët e veglave dhe kodin G](topic:manufacture#exact-step-for-the-shop).

## E re

### Sipërfaqet dhe solidet

- **Mbushje midis faqeve.** Zgjidh {{ui:Sipërfaqet}} te kutia e hapësirës së punës, pastaj {{ui:Rrumbullim midis faqeve}}. Zgjidh dy faqet e një solidi, shkruaj rrezen (dhe {{ui:Rrezja në fund (mm, 0 = e njëjtë)}} për një rreze që ndryshon përgjatë skajit). Rreshti i rezultatit thotë sa larg është mbushja nga topi ideal që rrotullohet, dhe një rreze që s'përshtatet refuzohet me faqen e emërtuar. {{ui:Rrumbullim i disa skajeve}} rrumbullos shumë skaje në një hap; shëno {{ui:Qoshet (pjesë sferike ku takohen tre)}} për një qoshe sfere ku takohen tre skaje të rrumbullosur të faqeve të sheshta. Shih [Sipërfaqet e lira (NURBS)](topic:nurbs-surfaces).
- **Trashje në solid.** {{ui:Jep trashësi dhe bëje solid}} te e njëjta hapësirë pune i jep një sipërfaqeje trashësi; {{ui:Ana tjetër}} e rrit në anën tjetër. Një palosje ose kryqëzim me vetveten refuzohet, me sipërfaqen dhe vendin e emërtuar.
- **Solide nga sipërfaqet.** Sipërfaqet e prera mund të bashkohen me bashkim, zbritje dhe kryqëzim dhe të ngulen në pjesë si një hap zhbërjeje. STEP shkruan një solid si një guaskë të mbyllur dhe IGES si një solid; të dyja lexohen si solid. Nëse faqet nuk çiftohen skaj për skaj, skedari merr faqe të ndara dhe rreshti i statusit e thotë këtë. Solidet mund të bëhen edhe në redaktorin e nyjeve; shih [Redaktori i nyjeve](topic:nodes).
- **Rrumbullime buzë dhe të ndryshueshme në skanime.** Kur përshtat sipërfaqe në një skanim, rrumbullimet e buzës (torë) dhe rrumbullimet me rreze të ndryshueshme përgjatë një skaji mjaft të drejtë kërkohen gjithashtu dhe listohen me rrezen e tyre. Është testuar vetëm në skanime të trilluara.

### Montime, dokumente dhe lidhje

- **Montime të mëdha.** Pjesët që janë kopje ndajnë një rrjet, dhe {{ui:Pamjet}} › {{ui:Shfaqje e lehtë}} vizaton kuti që pamja të mbetet e lëvizshme (ndizet vetvetiu për montime shumë të mëdha; zgjedhja dhe bashkimet përdorin ende pjesët reale). Pema e pjesëve shfaq rreshtat e parë dhe një buton {{ui:Shfaq 700 të tjera}} për pjesën tjetër. Skedarët e montimeve mund të mbajnë deri në 50,000 instanca dhe 100,000 lidhje. Shih [Ndërto një montim](topic:build-assembly).
- **Dokumentet.** {{ui:Dokumentet…}} te grupi **Skedari** hap një dialog mbi një dosje projekti: kontroll dalës dhe hyrës, revizione me shkronja, gjendje (punë në vazhdim, për shqyrtim, e lëshuar, e vjetëruar), histori, ku përdoret dhe lista e materialeve. Shih [Dokumentet dhe revizionet (kasafortë)](topic:documents-walkthrough).
- **Lidhja live me Rhino.** Një skript, `cadcraft_link.py`, shikon një dokument Rhino ose Grasshopper dhe shtyn në PartCraft vetëm ato që ndryshuan, ku një veçori e importuar ri-ndërtohet mbi formën e re. Është një drejtim dhe kërkon Studio. Shih [Lidhja live .3dm](topic:live-3dm-link).
- **Shiko kursorët e njëri-tjetrit.** Në një sesion të përbashkët kursori i secilit shfaqet me emrin e tij dhe veçorinë që ka zgjedhur. Shih [Puno live me të tjerët](topic:work-live).
- **Dyshemeja e fabrikës.** Ndiz shtesën Dyshemeja e fabrikës te {{ui:Cilësimet}} › {{ui:Shtojcat}}. Pasi postos një program në {{ui:Prodhimi}}, skeda e tij mund të {{ui:Shto në radhën e punëve të fabrikës}} ose {{ui:Ruaj si skedar pune}}. Nuk dërgon dhe nuk nis kurrë një makinë.

### Analiza dhe pjesët

- **Shtesa Solid FEM.** Ndiz {{ui:Solid FEM}} te {{ui:Cilësimet}} › {{ui:Shtojcat}} (është e fikur derisa ta bësh) dhe një skedë {{ui:Solid FEM}} shfaqet në panelin e djathtë. {{ui:Rrjeto pjesën}}, zgjidh faqet e fiksuara dhe ngarkesat në pamjen 3D, {{ui:Zgjidh}}, dhe vizato zhvendosjen, stresin von Mises ose formën e modalitetit me {{ui:Shfaq te modeli}}. Shih [Solid FEM: një kontroll stresi](topic:solid-fem-check).
- **Hark në skica, në dhjetë mënyra.** Shigjeta pranë {{ui:Hark}} në shiritin e skicës liston 3 pikë, Fillim Qendër Fund, Fillim Qendër Kënd, Fillim Qendër Gjatësi, Fillim Fund Kënd, Fillim Fund Drejtim, Fillim Fund Rreze, Qendër Fillim Fund, Qendër Fillim Kënd, Qendër Fillim Gjatësi dhe Vazhdo. Shih [Vizato një hark me dhjetë metoda](topic:sketch-arc-methods).
- **Madhësi çeliku të Mbretërisë së Bashkuar.** Konstruksionet e saldura mund të përdorin 976 profile të Mbretërisë së Bashkuar (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); shkruaj një madhësi si `305x165x40 UB`. Shih [Elementët strukturorë](topic:structural-members).

### Printimi

- **Faza e printimit.** Butoni {{ui:Faza e printimit}} në shirit (shtesa 3D Print, e ndezur si parazgjedhje) vendos trupat e pjesës tënde në një shtrat me vija të ndërprera: {{ui:Shtrije}}, {{ui:Kthe 90°}}, {{ui:Rregullo në shtrat}}, {{ui:Përshtat të gjitha në shtrat}}, {{ui:Shiko paraprakisht shtresat}}, pastaj {{ui:Dërgo te printeri 3D}} përmes USB, Klipper (Moonraker), OctoPrint ose PrusaLink. Asgjë nuk dërgohet derisa ta konfirmosh, dhe pjesa jote nuk ndryshohet kurrë. Për një skedar STL ose 3MF në vend të kësaj, shih [Përgatit një pjesë për printim 3D](topic:print-3d).
- **Printimi me rrëshirë.** Shtesat te {{ui:Cilësimet}} › {{ui:Shtojcat}}, të gjitha të fikura derisa t'i ndizësh: një prerës rrëshire, një test ekspozimi, dhe formatet e skedarëve Elegoo GOO, SL1, Chitubox CBDDLP/CTB dhe Anycubic. Prerja bëhet në një fije punëtore, kështu që faqja mbetet e përgjegjshme.

## Në çdo aplikacion

- Çdo ndihmës kursori është një tooltip Bootstrap.
- Shiriti i fillimit ka një buton mbylljeje; mbetet i mbyllur.
- Një rresht skedash i panelit që nuk përshtatet lëviz anash në vend që të pritet.
- Skeda e shfletuesit tregon emrin e dokumentit të hapur para PartCraft | CadCraft.
- {{ui:Cilësimet}} shfaq {{ui:Paraqitja}} e hapësirës së punës si menu me zgjedhje, dhe kutia e gjuhës liston çdo gjuhë që ka ndërtimi.
- Pesha dhe Temperatura janë lloje njësish në cilësimet e Njësive.

## Të rregulluara

- Menuja Hark e skicës tani liston çdo metodë.
- Shiriti i shtesave dhe titulli i skedës së shfletuesit u korrigjuan më 2026-11-09.

## Kufizimet e sinqerta

- STEP i saktë u lexua prapa në OpenCascade (solide të vlefshme, vëllime të barabarta me ato të llogaritura me dorë). Nuk është hapur ende në çdo program CAD ose CAM, dhe një montim nuk shkruhet si STEP i saktë.
- Asgjë nuk është printuar në një printer të vërtetë. Prerja, kodi G dhe skedarët e rrëshirës u lexuan prapa nga programet tona ose nga një printer i zëvendësimit; asnjë format rrëshire nuk është ngarkuar në një printer, dhe madhësitë e printerëve dhe ekspozimet janë pika fillimi.
- Solid FEM është lineare, izotropike dhe elastike, me një material për pjesë, pa kontakt, dorëzim ose kthim pas. Stresi te faqet e fiksuara dhe qoshet e mprehta varet nga rrjeti. Është një mjet kontrolli, jo i rishikuar nga një inxhinier.
- Kohët e montimeve të mëdha vijnë nga një server pa GPU; një kornizë me detaje të plota të 20,000 pjesëve merr ende sekonda atje.
- Mbushjet funksionojnë në çifte faqesh; s'ka kulm të përgjithshëm me hapësirë dhe s'ka mbushje midis faqesh që nuk takohen.
- Lidhja me Rhino s'ka funksionuar kurrë brenda Rhino ose Grasshopper të vërtetë. Documents u provua nga dy programe në një dosje, jo nga dy persona në një rrjet ndarës.
- Përshtatja e sipërfaqeve me një skanim të vërtetë s'ka pasur ende kontrollin me dorë. Gjuhët e tjera nga anglishtja janë draft makinash.
- Instaluesit e Windows nuk janë të nënshkruar me kod, dhe imazhi i diskut macOS nuk është noterizuar. Shih [Zgjidhja e problemeve](topic:troubleshooting).

Ndryshimet më herët janë në [Çfarë ka të re në 0.7](topic:whats-new-0-7).

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në PartCraft 0.8 dhe 0.8.1, krahasuar me 0.7. Simulimi u përgjigjet ndërsa redakton dhe të thotë çfarë prishet së pari, montimet marrin studime lëvizjeje, dhe hapësira të reja pune bëjnë sipërfaqe të lira dhe pjesë të përcaktuara nga fizika. 0.8.1 është një version i vogël riparimi.

### E re

**Simulimi**

- **Përditëso ndërsa redaktoj.** Shëno {{ui:Përditëso ndërsa redaktoj}} te blloku Zgjidh dhe përgjigjet ndjekin redaktimet e tua. Ndrysho një dimension, një ngarkesë ose materialin dhe një përgjigje e shpejtë, e bërë me elemente katër herë më të mëdhenj, shfaqet menjëherë; kur ndalon për rreth një sekondë, përgjigja e vetë studimit e rafinuar zëvendëson atë. Rezultatet thonë cilën po shikon. Në një konzolë çeliku, përgjigja e shpejtë ishte brenda 1 % në deformim dhe rreth 4 % në stres të asaj të rafinuar. Shih [Kontrollo stresin dhe deformimin](topic:simulation#update-while-you-edit-live).
- **Çfarë prishet së pari.** Për një studim statik ose kthimi, {{ui:Çfarë thyhet e para?}} te blloku **Thyeje** shkallëzon ngarkesat deri sa pjesa të dorëzohet. Liston, më i keqi së pari, faktorin e ngarkesës deri te rrjedhja e parë (me një shenjë të kuqe ku piqet stresi) dhe faktorin e ngarkesës deri te kthimi. Një faktor nën 1 do të thotë që pjesa tashmë jep sipas ngarkesës, dhe {{ui:Problemet}} shfaq një gabim. Faktorët vijnë nga një studim linear, kështu që janë aq të mirë sa është ai. Shih [Kontrollo stresin dhe deformimin](topic:simulation#find-out-what-breaks-first-break-it).
- **Rrjedhja dhe kontakti.** Dy lloje studimesh të tjera: një jolinear ku materiali ndjek vijën e tij të drejtë deri te stresi i rrjedhjes dhe pastaj një pjerrësi më të sheshtë, me deformimin plastik të vizatuar, dhe një studim kontakti ku copa të ndara shtyjnë njëra-tjetrën (pa fërkim) ose qëndrojnë të ngjitura (të lidhura). Një hap ngarkese që s'mund të stabilizohet, ose copa që zhyten shumë në njëra-tjetrën, shfaqen në panelin e Problemeve. Fërkimi, rrëshqitja e madhe, rrotullimet e mëdha, deformimet e mëdha dhe lodhja nuk zgjidhen. Shih [Kontrollo stresin dhe deformimin](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Skedarë për CalculiX.** {{ui:Eksporto}} › {{ui:Skedari CalculiX (.inp)}} ruan studimin për CalculiX, një program i veçantë që ti e instalon dhe e nis; {{ui:Eksporto}} › {{ui:Rezultatet CalculiX (.frd)}} lexon skedarin e rezultateve mbrapsht në të njëjtin rrjet. PartCraft s'e nis kurrë atë program, dhe e thotë këtë nëse pjesa ndryshoi që kur u ruajt skedari.

**Montimet**

- **Studime lëvizjeje.** {{ui:Montimi}} › {{ui:Lëvizja}} drejton vlerën e një lidhjeje gjatë një kohe që ti jep (shpejtësi konstante, e butësuar, sinus, ose lart e pas), vendos montimin në çdo hap me lidhjet dhe unazat e tij të mbyllura, dhe raporton çfarë përplaset dhe sa afër vijnë pjesët. {{ui:Shto një pikë}} vizaton pozicionin, shpejtësinë dhe nxitimin e një pike, vlerën e lidhjes dhe hapësirën e lirë kundrejt kohës; {{ui:Ruaj CSV}} dhe {{ui:Ruaj grafikun}} i shkruajnë ato. Pasi {{ui:Ekzeko}}, hapi nëpër ekzekutim te shiriti i ekzekutimit e zhvendos montimin në çdo hap. Cilësimet e studimit ruhen në skedarin e montimit. Shpejtësia dhe nxitimi vijnë nga pozicionet e regjistruara, kështu që përdor më shumë hapa nëse një majë e mprehtë lexohet e ulët. Shih [Kontrollo një montim për përplasje dhe lëvizje](topic:check-assembly#a-motion-study).

**Sipërfaqet dhe pjesët nga fizika**

- **Një hapësirë pune Sipërfaqet.** Zgjidh {{ui:Sipërfaqet}} te kutia e hapësirës së punës për kurba dhe sipërfaqe NURBS pranë pjesës: {{ui:Kurbë}}, {{ui:Ndërlidhja}}, {{ui:Shtrirja}}, {{ui:Përputh}} dhe {{ui:Zebra}}, me vazhdimësinë (G0, G1 ose G2) të matur mbi sipërfaqet e sakta dhe një skaj që është më keq se e kërkove, i listuar te Problemet me një rregullim Përputh. {{ui:Lëmo}} mat vijat e trupit për pikat e kthesës dhe kërcimet e lakimit dhe ri-ndërton ato të pa-lëmuara brenda tolerancës tënde. Sipërfaqet ruhen në skedarin e pjesës dhe nuk ndryshojnë veçoritë e pjesës. Shih [Sipërfaqet e lira (NURBS)](topic:nurbs-surfaces).
- **Hapësira e punës Inxhinieri.** Zgjidh {{ui:Inxhinieri}} te ndërruesi i hapësirës së punës, zgjidh një gjenerator dhe kliko {{ui:E re}}: një skript përcakton madhësinë e një pjese nga ajo që duhet të bëjë (ngrohje për të lëvizur, rrjedha, presion, material, proces printimi) me formula të librave shkollorë dhe e ndërton, pastaj jep kthim numrat që përdori me burimet e tyre, kontrollet e prodhimit dhe skedarë për mjetet e analizës. Të njëjtat hyrje japin të njëjtën pjesë në çdo kompjuter. Gjeneratori mbahet në pjesë, dhe hapja e një pjese s'e nis kurrë një skript. Shih [Pjesët nga fizika: gjeneratorët](topic:engineer-generators) dhe [Shkruaj një gjenerator](topic:write-a-generator).

**Skicimi, vizatimet dhe prodhimi**

- **Një skicë nga një foto.** {{ui:Veçori}} › {{ui:Më shumë}} › {{ui:Skicë nga një foto…}} gjurmon një foto të një pjese të sheshtë mbi tokë të thjeshtë (kontur dhe vrima) ose një vizatim me laps në vija, harqe dhe rrathë. Jep një gjatësi, kontrollo paraprakën dhe bëje skicën. Shih [Bazat e skicimit](topic:sketch-basics#a-sketch-from-a-photo).
- **Madhësi dhe ndarje për printim.** {{ui:Eksporto}} › {{ui:Shkallë për printim (STL ose 3MF)…}} shkallëzon sipas boshtit pa ndryshuar pjesën, p.sh. për një lejë tkurrjeje. {{ui:Eksporto}} › {{ui:Ndaj për printim (zip me copa)…}} pret një pjesë shumë të madhe për shtratin tënd në copa të numëruara të lidhura me kunja, çelësa, lidhje bisht-zogu, vrima kunjash ose xhepa magnetësh. Shih [Printo në 3D](topic:print-3d).
- **Fletët e vendosura në G-code.** {{ui:Eksporto}} › {{ui:Fletët e vendosura në G-code}} lexon një DXF të vendosur dhe bën një program për fletë përmes postprocesorit që zgjedh: vrimat dhe prerjet e para, pastaj konturat. Nuk planifikon hyrjet, renditjen e prerjes ose skajet e përbashkëta. Shih [Vendos pjesë të sheshta në fleta](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Vizatime që bëjnë më shumë vetë.** {{ui:Fleta}} › {{ui:Automatik}} zgjedh fletën më të vogël A-madhësi që mban pamjet me shkallën standarde më të madhe deri 1:1. {{ui:Përmaso vrimat}} vendos një shenjë qendre te çdo vrimë, një thirrje për madhësi dhe pozicionet nga qoshja e poshtme majtas e pamjes. Shih [Bëj një vizatim](topic:drawing-pdf).

**Në çdo aplikacion**

- **Gjuhët.** Aplikacionet vijnë në 54 gjuhë. Ato përveç anglishtes janë draft makinash derisa t'i lexojë një folës amtar.
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} zgjedh Mbështjellje (si më parë), 2 rreshta ose 1 rresht; një shirit që s'përshtatet lëviz anash. Shiriti i veçorive të PartCraft tregon veglën më të përdorur të madhe dhe fsheh variantet pas një butoni të ndarë.
- **Lidh AI-në tënde.** Studio është qendra për lidhjen e një asistenti tënd me të tetë aplikacionet, me leje vetëm lexim, sugjerim ose redaktim për çdo aplikacion. Një asistent i lidhur mund të përcaktojë madhësinë e një pjese nga një fjali si një mbajtëse për një ngarkesë, të tregojë punën dhe çdo kontroll, dhe ta ndërtojë; raporton çfarë s'kontrolloi (përqendrimi i stresit, lodhja, zvarritja në plastika). Shih [Përdor PartCraft me një asistent AI](topic:use-with-ai-assistants).

### Ende jo në këtë version

- Lidhja e AI-së është e pakryer: lidhja me një klikim brenda Studio, lidhësi i hostuar për AI-në e shfletuesit, çelësi yt API brenda Studio dhe paketa MCP e publikuar nuk premtohen. Studio nuk ka AI të vetin.
- Studio nuk është e nënshkruar me kod: Windows mund të paralajmërojë, dhe macOS kërkon klikim me butonin e djathtë pastaj Hap. Shih [Zgjidhja e problemeve](topic:troubleshooting).
- Analiza e tolerancave ende është me një drejtim: shih [Analiza e tolerancave](topic:tolerance-stackup).
- Pjesa tjetër është listuar në [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

Ndryshimet më herët janë në [Çfarë ka të re në 0.7](topic:whats-new-0-7).
