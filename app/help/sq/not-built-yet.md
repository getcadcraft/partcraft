---
title: Çfarë nuk është ndërtuar ende
summary: Gjithçka që kjo version e PartCraft nuk e bën ende, nga shtrirjet e përdredhura te shfaqja në inç, kotat e vizatimit dhe nënmontimet, me atë që bëhet sot në vend të saj.
keywords: mungon, ende jo, kufizime, kufij, plan zhvillimi, kernel i saktë, rrumbullakim, qoshim, zbrazje, shtrirje, loft, importim step, simulim, prodhim, shtrirje e përdredhur, tangjencë në fund të loft, rrumbullakim sipërfaqe, ekuacione, inç, dimensione vizatimi, nënmontime, re, tablet, telefon
from: 9b868162
---

PartCraft është një version i hershëm. Kjo faqe liston atë që nuk bën ende, që të mos e kërkosh, dhe çfarë të bësh në vend të saj sot. Asnjë nga këto nuk ka datë.

## Kërkon një kernel të saktë

Kjo version ndërton çdo pjesë me kernelin e rrjetës (shih [Kerneli i rrjetës](topic:solid-kernels)). Gjithçka më poshtë kërkon një kernel të saktë gjeometrie, që kjo version ende nuk e ka. Pjesët e ruajtura me këto veçori hapen akoma: veçoritë mbeten në historik, të shënuara si të pandërtuara, dhe ruhen kur ruan.

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| {{ui:Rrumbullakim}} dhe {{ui:Qoshim}} në brinjë të rrumbullakta; rrumbullakime me rreze që ndryshon përgjatë brinjës; rrumbullakime të përzier me butësi aty ku takohen (kerneli i rrjetës i pret në qoshe) | Rrumbullakimi dhe qoshimi punojnë në brinjë të drejta midis faqesh të sheshta; rrumbullo qoshet e tjera në skicë para se të nxjerrësh ({{ui:Rrumbullakim}} në një skicë, {{key:F}}) |
| {{ui:Zbraz}} me faqe të lakuara hapëse; mure me trashësi të ndryshme | Hap faqe të sheshta; shto material me nxjerrje aty ku muri duhet të jetë më i trashë |
| {{ui:Shtrirja}}, {{ui:Ndërlidhja}}, {{ui:Draft}} mbi faqe të lakuara; nxjerrje deri te një faqe, faqja tjetër ose një kulm; nxjerrje konike | Nxirr ose rrotullo, në hapa aty ku duhet; nxirr deri në një thellësi që mat |
| {{ui:Nervurë}}, {{ui:Flanxh bazë}}, {{ui:Flanxh brinje}} dhe modele të sheshta | Nxirr pllakën ose profilin e nervurës |
| Sipërfaqet: përfundimi i një {{ui:Formë}} në pjesë, {{ui:Arnim}}, {{ui:Loft sipërfaqe}}, {{ui:Sipërfaqe Gordon}}, {{ui:Qep}}, {{ui:Trashëso}}, {{ui:Sipërfaqe ofset}}, {{ui:Zgjat sipërfaqen}}, {{ui:Shkurto sipërfaqen}} | Nuk është e disponueshme |
| Trupa të shumtë: {{ui:Kombino}}, {{ui:Zhvendos trupin}}, {{ui:Shkallëzo trupin}}, {{ui:Model përgjatë shtegut}}, veçori që bëjnë trup të ri | Një trup i ngurtë; modele dhe veçori pasqyrimi kopjojnë |
| Skica, plane, boshte dhe pika mbi faqe që vetëm një kernel i saktë mund t'i gjejë (një faqe e bërë nga një rrumbullakim, mur vrime, një faqe e një trupi të importuar) | Skico mbi plane bazë, plane referimi dhe faqet e sheshta të nxjerrjeve dhe rrotullimeve |
| Një rezultat i projektimit gjenerativ i hapur si pjesë ose i shtuar në të (bëhet trup i importuar) | Shkarko rezultatin si STL ose STEP |
| Redaktimi i faqeve të lakuara të një skedari STEP të hapur si sipërfaqe të sakta; STEP i saktë i faqeve spline, të shtrira dhe të rrotulluara nga një skedar STEP, anët spline, filetat e modeluar, trupat dhe montimet STL / OBJ / 3MF; STEP për modelues të tjerë pjesësh | {{ui:Hap}} lexon STEP si trekëndësha dhe mban faqet e sheshta, cilindrat, konet, sferat dhe torët e skedarit për eksportin ([Hap një skedar STEP](topic:import-step)); {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} shkruan çdo faqe analitike saktë dhe i mban ato si facete ([Eksporto](topic:export-files#for-other-cad-programs-step)); makro për modelues tjetër pjesësh akoma shkruan |
| Vija të vërteta harkore në pamjet e vizatimit | Pamjet dhe pamjet e prerjes vizatohen nga faketet |
| Vëllime, sipërfaqe dhe distanca të sakta | {{ui:Matje}} jep numrat e trupit me facete, pak më të ulët në pjesët e rrumbullakëta; një cilësim më i imët i **Kurbave** i afron më shumë |

Disa rreshta në tabelat më poshtë sugjerojnë një nga këto veçori si rrugë rrethuese për diçka tjetër. Ato sugjerime zbatohen kur të kthehet një kernel i saktë.

## Veçoritë

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Rrumbullakime në faqe, rrumbullakime të plota, rrumbullakime me rreze të caktuara në pika përgjatë një brinje | {{ui:Rrumbullakim}} me rreze konstante ose lineare të ndryshueshme; disa veçori rrumbullakimi |
| Zbrazje me trashësi të ndryshme muresh | Një trashësi {{ui:Zbraz}}; shto material me nxjerrje aty ku muri duhet të jetë më i trashë |
| Draft në faqe të lira (spline) | {{ui:Draft}} punon në faqe të sheshta, cilindrike dhe konike |
| Shtrirje të përdredhura, shtrirje me mur të hollë dhe me sipërfaqe; tangjencë në fund në veçorinë Loft; loft me një shinë udhëzuese; shtigje spline | {{ui:Shtrirja}} me orientim të fiksuar ose një shkallë në fund; loft me dy ose më shumë shina udhëzuese: shih [Shtrirja, loft dhe draft](topic:sweep-loft-draft) |
| Nervura nga harqe ose spline; nervura të rritura katrore me skicën (nga një pamje e sipërme); draft në nervura; disa nervura nga një skicë | {{ui:Nervurë}} nga një zinxhir vijash në planin e vet të nervurës: shih [Nervurat dhe gusetat](topic:rib) |
| "Deri te" një sipërfaqe e lakuar, "deri te tjetra" që ndalon në një faqe të lakuar | Deri te një faqe e sheshtë ose një plan referimi |
| Vrima me kundërshpim, filete në inç dhe tubash, filete konike, mbarim i filetave dhe fillime të filetit të prera me qoshe | Kundërvrimë me thellësi të vogël; filete metrike ISO dhe trapezoidale, kozmetike ose të modeluara: shih [Filetat te boshtet dhe vrimat, të vizatuara ose të modeluara](topic:threads) |
| Nxjerrje me veçori të hollë | Vizato të dy murët e profilit |
| Kopje modeli të kaluara një nga një, modele mbushjeje | Përdor veçori të ndara; modele përgjatë një kurbe: {{ui:Model përgjatë shtegut}} |
| Kopjet e modeleve, pasqyrat, rrumbullakimet, qoshimet, zbrazjet dhe trupat e importuar | Kopjo skicën ose veçorinë mbi të cilën janë ndërtuar, ose modelo atë |
| Tangjenca e saktë (G1) në pikat e jashtëzakonshme të një forme; bashkimi i copave të një forme në faqe më të mëdha | Rrit Nivelin e formës: copat e përafruara bëhen më të vogla; shih [Forma të lira me Formë](topic:form-surfaces) |
| Një formë e bërë nga disa copa të ndara të mbyllura në një veçori; ura midis formash | Një copë e mbyllur për çdo veçori Formë; bashkoji me Bashko |
| Zgjedhja e trupave sipërfaqësorë në pamje (përveç pikave të prerjes dhe arnimit); rrumbullakime sipërfaqesh; zhbërja e prerjes; arnime G2; sipërfaqe Gordon tangjente me fqinjë të lakuar (tangjente me plane dhe faqe të sheshta është ndërtuar) | Zgjidhi me emër në panelin e veçorisë; trashëso fillimisht, pastaj rrumbullako trupin |
| Një listë trupash në historik; lënia jashtë e trupave të fshehur nga eksportet | Riemëro dhe fshih trupat te lista e trupave të panelit të pjesës; fshi ose pezullo veçorinë që bëri një trup për ta lënë jashtë |
| Një shkallëzim jo uniform që mban cilindrat dhe konet analitike; shkallëzim jo uniform i sipërfaqeve ofset | {{ui:Shkallëzo trupin}} bën faqet e lakuara B-spline të mbyllura (brenda 0.0000004 mm); një shkallëzim uniform mbetet i saktë |
| Bashkimi i trupave sipërfaqësorë; shumat Minkowski | {{ui:Qep}} ose {{ui:Trashëso}} fillimisht, pastaj {{ui:Kombino}} |
| Analiza e tolerancës: zinxhirë tolerancash që kthehen qoshe (vektorë 2D dhe 3D), ndjeshmëri të llogaritura nga gjeometria, Monte Carlo me shpërndarje të tjera, toleranca madhësish në dimensionet e skicës, tolerancë bonus nga gjendja e materialit | {{ui:Zinxhiri i tolerancave}} në një montim: një drejtim, rasti më i keq dhe RSS, toleranca të shkruara, nga toleranca e përgjithshme e kornizës së titullit ose nga kornizat GD&T: shih [Zinxhirët e tolerancave](topic:tolerance-stackup) |
| Vendosja: rendi i prerjes dhe hyrjet e prerjes, prerja e skajeve të përbashkëta një herë, pjesë që duhet mbajtur bashkë; mbetje rulesh, stok i përbashkët ndërmjet projekteve | {{ui:Vendos pjesët e sheshta në fleta…}} me hapësirë, kufij, kthesa dhe drejtim kokrre: shih [Vendos pjesët e sheshta në fleta](topic:nest-flat-parts); pllakat e mbetura mbahen dhe përdoren së pari: shih [Ruaj dhe ripërdor mbetjet](topic:nest-offcuts); planifiko prerjen në softuerin e vet të prerësit |
| Llamarina: rrotullime, përkulje, flanxha me qoshe në prerje dhe në konturi; flanxha në skaje të lakuara ose në faqet e një flanxhe baze të përkulur; përkulje të skicuara; mbyllje qoshesh; mjete formimi; konvertimi i një trupi në llamarinë; modeli i sheshtë i një flanxhe baze të përkulur me prerje në të; tabela përkuljesh | {{ui:Flanxh bazë}} (një pllakë ose një profil i përkulur), {{ui:Flanxh brinje}} në skajet e drejta të pllakës me zbutje përkuljeje, dhe modeli i sheshtë me një faktor K: shih [Llamarina](topic:sheet-metal) |
| Analiza e draftit në montime; gjetja e vijës së ndarjes; analiza e trashësisë së murit | {{ui:Analiza Draft}} mbi pjesën në Dizajn: shih [Kontrollo draftin për kallëpe dhe derdhje](topic:draft-analysis); hap çdo pjesë të një montimi për ta kontrolluar |

## Skicat

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Elipse, harqe tangjente, konikë, spline me shkallë ose pesha të caktuara (NURBS) | Spline (kubike), harqe dhe rrethe me relacione Tangent |
| Një pikë mbi një spline (një relacion), relacione lakimi (G2) | Vendos pikën e vet të splinit aty ku duhet të kalojë |
| Kopje ofset të splineve që ndjekin ndryshimet e mëvonshme; ofsete të zinxhirëve me qoshe të mprehta spline | Ofseto përsëri pas ndryshimit; rrumbullako qoshen fillimisht |
| Kopje modeli që mbeten të lidhura me origjinalin; modele përgjatë një kurbe | Modelo përsëri pas një ndryshimi |
| Projektimi i brinjëve të lira ose rrethore të prirura, gjeometria e projektuar që ndjek pjesën | Projekto brinjët rrethore të drejta dhe paralele, pastaj dimensiono |
| Dimensione të drejtuara (referuese) | Lexo madhësitë nga paneli ose nga faktet e pjesës |
| Relacione kolineare | Paralele me distancë 0 |
| Ngjitja në një program tjetër (kujtesa e sistemit) | Eksporto DXF, STEP, STL ose 3MF |
| Shkrimi i harqeve, koordinatave relative ose polare | Shkruaj vija dhe rrethe; vizato harqe me veglën Hark |
| Zgjedhja e gjeometrisë pa treguesin | Kërkon një klikim ose prekje |

## Parametrat dhe njësitë

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Konfigurime që ndryshojnë materialet; një tabelë projektimi CSV që fik veçori | Konfigurimet vendosin parametra dhe ndezin ose fikin veçori: shih [Konfigurimet dhe tabelat e projektimit](topic:design-tables); `partcraft variants` ndërton konfigurimet e ruajtura me emër, përfshirë ato me veçori të fikura: shih [Bëj një paketë variantesh nga konfigurimet e tua](topic:variant-pack) |
| Ekuacione mbi numrat e paneleve të veçorive më të reja (plan, shtrirje, draft dhe të ngjashme) | Shkruaj ato në një skript ose me `partcraft set` ([Skriptet dhe linja e komandës](topic:scripts-and-cli)) |
| Një pjesë e shfaqur në inç | Madhësitë shfaqen në milimetra; shkruaj `2in` në një kuti numri ose në një shprehje dhe bëhet 50.8 |

## Skedarët

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Redaktimi i veçorive të vetë një trupi STEP të importuar (vjen pa historik) | Shto ose pre material me veçoritë e tua |
| Leximi i ngjyrave, emrave, strukturës së montimit dhe PMI nga STEP | Nuk është e disponueshme |
| Eksport glTF, OBJ, IGES, Parasolid; DWG i një pjese 3D (vetëm paketa e variantëve shkruan një DWG: fletën e vizatimit) | STL ose 3MF për rrjetat; STEP për trupa; DXF për 2D |
| Hapja e IGES, DXF ose skedarëve të programeve të tjera (skedarët `.3dm` hapen si një trup: [Hap një model .3dm si trup të ngurtë](topic:open-3dm-files)) | Kërko STEP, ose një rrjetë të mbyllur STL, OBJ ose 3MF: [Hap një STL, OBJ ose 3MF](topic:open-meshes) |
| Struktura e montimit (një pemë me emrat e pjesëve) në STEP të eksportuar | STEP i montimit është një përbërje e trupave të vendosur |
| Ruajtja në një dosje sipas zgjedhjes tënde pa dritaren e shkarkimit të shfletuesit | Aktivizo "pyet ku të ruhet" te cilësimet e shkarkimit të shfletuesit |

## Vizatimet

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Dimensione përtej tre madhësive të përgjithshme (madhësi vrimash, pozicione, toleranca në madhësi) | Shëno PDF-në, ose eksporto DXF dhe dimensiono në një program 2D CAD |
| Më shumë se një prerje ose detaj; pamje të rreshtuara, të thyera dhe ndihmëse | Një prerje dhe një detaj për vizatim |
| Tekst i lirë, shënime dhe tabela në fletë (përveç blloqeve të titullit dhe të revizionit) | Shënimi i përfundimit, ose tekst i shtuar në PDF |
| Projeksion me kënd të parë, pamje të lëvizshme, fletë portreti | Kënd i tretë, shtrirje automatike, fletë horizontale A4–A0 dhe ANSI A–E |
| Pamja e drejtpërdrejtë e prerjes: disa plane ose një kuti prerjeje njëherësh, një kontur rreth prerjes, ruajtja e prerjes në skedar | Një plan në një kohë nga {{ui:Pamjet}} › {{ui:Pamja e prerjes}}; shih [Shiko brenda me një pamje prerjeje](topic:section-view) |
| Vizatimet e montimit me më shumë pamje, dimensione ose balona që mund t'i lëvizësh | Një pamje izometrike (ose e shpërndarë) me balona automatike dhe listën e pjesëve |
| Kopjimi dhe ngjitja e simboleve GD&T dhe të përfundimit | Vendos secilin me {{ui:Datum}}, {{ui:Kornizë}} ose {{ui:Përfundim}} |
| Manuale: skedarë STEP te {{ui:Nga një skedar tjetër…}} në Illustrate, një model që vjen drejtpërdrejt nga ModelCraft ose BimCraft, figura me cilësinë e gjurmuesit të rrezeve, 3D ndërvepruese brenda një PDF | Hap STEP në Dizajn dhe nis manualin {{ui:Nga pjesa e hapur}}; ruaj modelin si glTF (.glb); figura PNG të pamjes 3D; skedari 3D ndërveprues: shih [Nis një manual në Illustrate](topic:illustrate) |

## Montimet

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Lidhje me vegla, rack, kamë dhe vidë; një lidhje topi e kufizuar në një kon; lidhje mbi faqe të lakuara ose midis pikash | Lidhje të ngurta, rrotulluese, rrëshqitëse, cilindrike, të sheshta, topi dhe kunj-në-prerje mbi faqe të sheshta, çdo vlerë me kufijtë e vet: shih [Ndërto një montim](topic:build-assembly) |
| Hapat e shpërndarjes që rrotullojnë pjesët, dhe tërheqja e pjesëve që vendosin lidhjet | Hapa të drejtë shpërndarjeje; hiq një lidhje për të lëvizur një pjesë me dorë |
| Nënmontime | Vetëm një nivel pjesësh |
| Vegla, kamë, kontakt | Nuk është e disponueshme |

## Prodhimi

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Përpunimi 3D i faqeve të lakuara, pastrimi adaptiv 3D, përpunimi i mbetjes; përfundimi waterline, pencil, radial dhe spiral; kalime adaptive të shkruara si harqe | Faqe 2.5-boshtore, xhep, adaptiv 2D, kontur, shpim dhe qoshim: shih [Bëj rrugë veglash dhe G-code](topic:manufacture); përfundimi Parallel dhe Scallop i gjithë modelit: shih [Përfundimi 3D](topic:finish-3d) |
| Rrugë veglash 4- dhe 5-boshtore, tornim, provim | Përgatit një anë në një kohë me boshtin e veglës në skedën Setup |
| Kontrolle përplasjesh të mbajtësit dhe të bishtit | Shiko paralajmërimet për gjatësinë e brazdave dhe kontrollo në simulatorin e kontrollit tënd |
| Provim, cikle jetëgjatësie veglash dhe nënprograme; kode të boshtit të 4-t dhe 5-t dhe të tornit në një post; ngarkimi i skedarëve post të programeve të tjera | Shkruaj ose ndrysho një post në formatin e vet të PartCraft: shih [Post-procesorët që mund t'i ndryshosh](topic:post-processors) |
| G-code në inç (G20) | Vetëm milimetra (G21) |

## Simulimi dhe projektimi gjenerativ

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Studime jolineare: rrjedhje, deformime të mëdha, kontakt midis pjesëve, lodhje | Statike lineare dhe frekuenca natyrore: shih [Kontrollo stresin dhe deformimin](topic:simulation); mbaje faktorin e sigurisë shumë mbi 1 |
| Shkyçje jolineare (imperfeksione, pas-shkyçje, kapërcim i shpejtë) | Faktorë ngarkese shkyçjeje lineare me një marzh të gjerë: shih [Nxehtësia, stresi termik dhe shkyçja](topic:thermal-and-buckling) |
| Rrezatimi midis faqesh (faktorët e pamjes), rezistenca e kontaktit, materiale që varen nga temperatura, inercia në stresin termik (valët e goditjes termike) | Rrezatim ndaj rrethinës, stres termik i qëndrueshëm ose kuazi-statik me kohën, veti konstante: shih [Nxehtësia, stresi termik dhe shkyçja](topic:thermal-and-buckling) |
| Rafinim automatik për nxehtësi kalimtare dhe studime me ngarkesë termike; rrjetë më e trashë aty ku gabimi është i vogël; një objektiv mbi një sasi lokale (stresi maksimal në një pikë) | **Rafino automatikisht** për studime statike, shkyçjeje, frekuence natyrore dhe termike të qëndrueshme, mbi gabimin në të gjithë pjesën: shih [Kontrollo stresin dhe deformimin](topic:simulation); ndryshe ul madhësinë e elementit |
| Ngarkesa mbi mbajtëse dhe bulona, forca nga larg, momente, susta, zhvendosje të paracaktuara | Forca dhe presione mbi faqe, graviteti; faqe të fiksuara dhe pa fërkim |
| Simulimi i montimeve; materiale që ndryshojnë sipas drejtimit (shtresa të printuara, kompozitë) | Një pjesë, një material izotropik |
| Disa fije llogaritëse për studime tetraedrike, transferim nxehtësie dhe projektim gjenerativ; çdo fije në një faqe që nuk është e izoluar ndër-origjinë | Studime vokseli, shkyçja, stresi me kohën dhe rrjedha laminare përdorin fijet aty ku e lejon faqja: shih [Cilësimet e PartCraft](topic:settings) |
| Rrjedha turbulente me saktësi projektimi (modeli Spalart–Allmaras është i përfshirë si eksperimental: fërkimi i tubit 30 deri 34 % më i lartë, rishtimi pas hapit prapa 21 deri 39 % më i shkurtër; planifikuar: qeliza më të imëta pranë mureve); nxehtësi në rrjedhë; rrjedhë jo e qëndrueshme (me kohë të saktë); sipërfaqe të lira; fluide jo-Njutonianë; pjesë që rrotullohen | Rrjedhë laminare, e qëndrueshme, izotermike e një fluidi Njutonian, ose modeli eksperimental turbulent për modele cilësore: shih [Simulo rrjedhën e fluidit](topic:flow-simulation); paneli paralajmëron kur numri i Reynolds-it kalon laminarin |
| Kufijtë e stresit dhe rregullat e prodhimit (mbivendosjet, drejtimet e frezimit) në projektimin gjenerativ; disa materiale në një formë | Forma më e fortë për një vëllim; kontrollo rezultatin në Simulim: shih [Rrit një formë nga ngarkesat](topic:generative-design) |
| Një rezultat si trup i redaktueshëm (i lëmuar, parametrik) | STL, STEP me facete ose një pjesë me rezultatin si trup të importuar me facete |
| Projektimi i një makinë elektrike: një rotor që rrotullohet në një stator, cift kundrejt këndit, çelik ngopës, magnete që humbasin forcën pas gjurit të tyre, rrymat e Foucault-it dhe humbjet e hekurit dhe të bakrit; fusha magnetike në 3-D ose mbi rrjeta të lakuara | Magnetostatikë lineare 2-D mbi një rrjet në bibliotekën e analizës: bobina, hekur, magnete të përhershëm mbi vijën e tyre të rikthimit, hapësira, induktanca dhe tërheqja: shih [Fushat magnetike në 2-D](topic:magnetic-fields-2d) |

## Skriptet

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Ndihmë me kalim mausi, pikat e ndalimit dhe hapat brenda redaktorit të skriptit | Kërkimi, palosja dhe plotësimi janë të përfshira (shih [Shkruaj dhe ekzekuto skriptet](topic:craftscript)); për të tjerat, redaktori yt: {{ui:Ruaj}} dhe {{ui:Hap}} te grupi Skript i zhvendosin skriptet brenda dhe jashtë; funksionet e integruara listohen te [Gjuha CraftScript](topic:craftscript-language) |
| Pikat e ndalimit dhe hapat përmes një skripti | `disp` dhe `fprintf` gjatë rrugës; {{key:Mod+Enter}} ekzekuton disa rreshta të zgjedhur njëherësh |
| Fushat dhe grafikët që shfaq një skript të vizatohen në hapësirën e Dizajnit; skripte që ndryshojnë parametrat e pjesës | Shfaqen në hapësirën e Skriptit; skriptet lexojnë parametra me `param` (shih [Shkruaj dhe ekzekuto skriptet](topic:craftscript)), i ndryshojnë në skedën {{ui:Parametrat}} |
| Figura dhe tabela krah për krah me grafikë; redaktimi i një grafiku (zmadhim, kufij boshtesh) përpara ruajtjes | Krah për krah shfaq grafikët; ruaj një grafik si PNG, SVG ose CSV dhe përfundoje gjetiu |
| numpy dhe paketa të tjera Python; Python jashtë linje; Python i palosur në redaktor; Pascal Script | Biblioteka standarde e Python-it, CraftScript dhe Lua: shih [Skriptet në Python](topic:craftscript-python) |
| Kalimi i funksioneve Lua te funksionet e integruara; thirrja e një funksioni biblioteke nga Lua me një emër të ndërtuar gjatë ekzekutimit të skriptit | Shkruaj emrin e funksionit të bibliotekës në skript (`cs.static_tet(…)`), ose thirre nga një skript CraftScript |

## Aplikacioni

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Ruajtje në re, ndarje dhe historik versionesh | Ende nuk është e disponueshme. Ruaj skedarët në kompjuterin tënd dhe mbaj versionet me emër |
| PartCraft si aplikacion i instaluar në iPad dhe iPhone | Përdor PartCraft në shfletuesin e pajisjes; në Android dhe në desktop ai punon edhe në CadCraft Studio (getcadcraft.com/download) |
| Menutë e kontekstit (klikim me të djathtën) | Shiriti i veglave dhe paneli i djathtë |
| Punë plotësisht jashtë linje nga një fillim i ri | Vetëm kur aplikacioni është ruajtur për përdorim jashtë linje: shih [Puna jashtë linje](common:offline) |

Raporto atë që të mungon më shumë përmes faqes së mbështetjes së sajtit: ajo formon çfarë vjen më pas.

## Inxhinieri (gjeneratorët dhe fushat)

| Nuk është ndërtuar ende | Në vend të kësaj, sot |
|---|---|
| Koka, porta dhe fitime në shkëmbyesin e nxehtësisë të gjeneruar; kurba temperature për forcën e materialit; humbjet e degës në kolektor | Gjeneratorët ndërtojnë bërthamën dhe tubat; shto fitime në Dizajn; përdor shifrat e materialit në temperaturë dhomë me një faktor sigurie |
| Shtimi i gjeneratorëve nga drejtoria e shtojcave me një klikim | {{ui:Hap}} në hapësirën e Inxhinierisë shton një gjenerator nga një skedar |
| Një skedar fushe më i imët se madhësia e vokselit të gjeneratorit; lexim i skedarëve `.vdb` | Ruaj një fushë më të imët nga një skript; `.vdb` shkruhet, nuk lexohet |
| Llogaritjet e kodit për enë me presion | Formulat klasike të mureve të hollë dhe të trashë, me faktorin e sigurisë që zgjedh; jo një marzh kodi |
| Gjeneratorë për aplikacionet e tjera | Vetëm PartCraft në këtë version |
