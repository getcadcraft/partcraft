---
title: Çfarë nuk është ndërtuar ende
summary: Gjithçka që ky ndërtim i PartCraft nuk e bën ende, nga shtrirjet e përdredhura deri te shfaqja në inç, vizatimet me dimensione dhe nën-montimet, me atë që duhet të bësh sot në vend të tyre.
keywords: mungon, jo ende, kufizime, kufij, plan zhvillimi, kerneli i saktë, rrumbullakim, qoshim, zbraz, shtrirje, import step, simulim, prodhim, shtrirje e përdredhur, tangjencë në fund, rrumbullakim sipërfaqe, ekuacione, inç, dimensione vizatimi, nën-montime, cloud, tablet, telefon
from: 97b10a29
---

PartCraft është një ndërtim i hershëm. Kjo faqe liston çfarë nuk bën ende, që të mos e kërkosh kot, dhe çfarë të bësh sot në vend të tij. Asnjë prej tyre nuk ka datë.

## Kërkon një kernel të saktë

Ky version ndërton çdo pjesë me kernelin e rrjetit (shih [Kerneli i rrjetit](topic:solid-kernels)). Gjithçka më poshtë kërkon një kernel gjeometrik të saktë, që ky version nuk e ka ende. Pjesët e ruajtura me këto veçori hapen akoma: veçoritë qëndrojnë në histori, të shënuara si të pandërtuara, dhe ruhen kur ruan.

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| {{ui:Rrumbullakim}} dhe {{ui:Qoshim}} në skaje të rrumbullakëta; rrumbullakime me rreze që ndryshon përgjatë skajit; rrumbullakime të përziera butësisht aty ku takohen (kerneli i rrjetit i pret me kënd) | Rrumbullakimi dhe qoshimi funksionojnë në skaje të drejta midis faqeve të sheshta; rrumbullakos qoshet e tjera në skicë para se ta ekstrudosh ({{ui:Rrumbullakim}} në një skicë, {{key:F}}) |
| {{ui:Zbraz}} që hap faqe të lakuara; mure me trashësi të ndryshme | Faqe të sheshta të hapura; shto material me ekstrudime aty ku muri duhet të jetë më i trashë |
| {{ui:Shtrirja}}, {{ui:Ndërlidhja}}, {{ui:Draft}} mbi faqe të lakuara; ekstrudimi deri te një faqe, faqja tjetër ose një kulm; ekstrudime konike | Ekstrudo ose rrotullo, në hapa aty ku duhet; ekstrudo në një thellësi që mat |
| {{ui:Nervurë}}, {{ui:Flanxh bazë}}, {{ui:Flanxh brinje}} dhe modelet e sheshta | Ekstrudo pllakën ose profilin e nervurës |
| Sipërfaqet: përfundimi i një {{ui:Formë}} në pjesë, {{ui:Arnim}}, {{ui:Loft sipërfaqe}}, {{ui:Sipërfaqe Gordon}}, {{ui:Qep}}, {{ui:Trashëso}}, {{ui:Sipërfaqe ofset}}, {{ui:Zgjat sipërfaqen}}, {{ui:Shkurto sipërfaqen}} | Nuk është e disponueshme |
| Disa trupa: {{ui:Kombino}}, {{ui:Zhvendos trupin}}, {{ui:Shkallëzo trupin}}, {{ui:Model përgjatë shtegut}}, veçori që krijojnë trup të ri | Një solid; modele dhe veçori kopjimi me pasqyrë |
| Skica, plane, boshte dhe pika mbi faqe që vetëm një kernel i saktë mund t'i gjejë (një faqe e krijuar nga një rrumbullakim, mur vrime, një faqe e një solidi të importuar) | Skico mbi plane bazë, plane referimi dhe faqet e sheshta të ekstrudimeve dhe rrotullimeve |
| Një rezultat dizajni gjenerativ i hapur si pjesë ose i shtuar në të (bëhet solid i importuar) | Shkarko rezultatin si STL ose STEP |
| Redaktimi i faqeve të lakuara të një skedari STEP të hapur si sipërfaqe të sakta; STEP i saktë i faqeve spline, të shtrira dhe të rrotulluara nga një skedar STEP; skajet spline; filetimet e modeluara; trupat STL / OBJ / 3MF dhe montimet; STEP për modelues të tjerë pjesësh | {{ui:Hap}} lexon STEP si trekëndësha dhe mban faqet e sheshta, cilindrat, konet, sferat dhe torët e skedarit për eksport ([Hap një skedar STEP](topic:import-step)); {{ui:Eksporto}} › {{ui:STEP AP242 (trup i saktë i ngurtë)}} shkruan çdo faqe analitike saktë dhe i mban ato si facete ([Eksporto](topic:export-files#for-other-cad-programs-step)); makroja për një modelues tjetër pjesësh ende shkruan |
| Harqe të vërteta në pamjet e vizatimit | Pamjet dhe pamjet e prerjes vizatohen nga facetet |
| Vëllime, sipërfaqe dhe largësi të sakta | {{ui:Matje}} jep numrat e solidit me facete, pak të ulët në pjesët e rrumbullakëta; një cilësim më i imët **Kurbat** i afron ato |

Disa rreshta në tabelat më poshtë sugjerojnë një nga këto veçori si rrugë për diçka tjetër. Ato sugjerime zbatohen pasi të kthehet një kernel i saktë.

## Veçoritë

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Rrumbullakime në faqe, rrumbullakime të plota, rrumbullakime me rreze të vendosura në pika përgjatë një skaji | {{ui:Rrumbullakim}} me rreze konstante ose lineare të ndryshueshme; disa veçori rrumbullakimi |
| Zbrazje me trashësi muresh të ndryshme | Një trashësi {{ui:Zbraz}}; shto material me ekstrudime aty ku muri duhet të jetë më i trashë |
| {{ui:Draft}} mbi faqe spline të lira | {{ui:Draft}} funksionon mbi faqe të sheshta, cilindrike dhe konike |
| Shtrirje të përdredhura, shtrirje me mur të hollë dhe me sipërfaqe; tangjencë në fund te veçoria Ndërlidhja; një ndërlidhje me një shinë udhëzimi; shtigje spline | {{ui:Shtrirja}} me orientim fiks ose me shkallë në fund; një ndërlidhje me dy ose më shumë shina udhëzimi: shih [Shtrirja, ndërlidhja dhe draft](topic:sweep-loft-draft) |
| Nervura nga harqe ose spline; nervura të rritura katrore me skicën (nga një pamje e sipërme); draft mbi nervura; disa nervura nga një skicë | {{ui:Nervurë}} nga një zinxhir vijash në planin e vet të nervurës: shih [Nervurat dhe gusetat](topic:rib) |
| "Deri te" një sipërfaqe e lakuar, "deri te tjetra" që ndalon te një faqe e lakuar | Deri te një faqe e sheshtë ose një plan referimi |
| Vrima të kundërshpuara, filetime inç dhe tubash, filetime konike, dalje filetimi dhe fillime filetimi të qoshuara | Zgjerim me thellësi të vogël; filetime metrike ISO dhe trapezoidale, kozmetike ose të modeluara: shih [Filetimet te boshtet dhe vrimat](topic:threads) |
| Ekstrudime me veçori të hollë | Vizato të dyja muret e profilit |
| Kopje modelesh të kaluara një nga një, modele mbushjeje | Përdor veçori të ndara; modele përgjatë një kurbe: {{ui:Model përgjatë shtegut}} |
| Kopjimi i modeleve, pasqyrat, rrumbullakimet, qoshimet, zbrazjet dhe solidët e importuar | Kopjo skicën ose veçorinë mbi të cilën janë ndërtuar, ose modelo atë |
| Tangjencë e saktë (G1) në pikat e jashtëzakonshme të një forme; bashkimi i arnimeve të një forme në faqe më të mëdha | Rrit Nivelin e formës: arnimet e përafruara bëhen më të vogla; shih [Forma të lira me Formë](topic:form-surfaces) |
| Një formë e përbërë nga disa copa të ndara të mbyllura në një veçori; ura midis formave | Një copë e mbyllur për çdo veçori Formë; bashkoji me Bashko |
| Përzgjedhja e trupave sipërfaqësorë në pamje (përveç pikave të prerjes dhe arnimit); rrumbullakime sipërfaqesh; zhbërja e prerjes; arnime G2; sipërfaqe Gordon tangjente me fqinjë të lakuar (tangjente me plane dhe faqe të sheshta është e ndërtuar) | Zgjidh ato me emër në panelin e veçorisë; trashe së pari, pastaj rrumbullakos solidin |
| Një listë trupash në histori; lënia jashtë e trupave të fshehur nga eksportet | Riemërto dhe fshih trupat në listën e trupave të panelit të pjesës; fshi ose pezullo veçorinë që krijoi një trup për ta lënë jashtë |
| Shkallëzim jo uniform që mban cilindrat dhe konet analitike; shkallëzim jo uniform i sipërfaqeve të zhvendosura | {{ui:Shkallëzo trupin}} bën sipërfaqet e lakuara B-spline të mbyllura (brenda 0,0000004 mm); një shkallëzim uniform mbetet i saktë |
| Kombinimi i trupave sipërfaqësorë; shumat Minkowski | {{ui:Qep}} ose {{ui:Trashëso}} së pari, pastaj {{ui:Kombino}} |
| Analiza e tolerancave: zinxhirë tolerancash që kthehen qoshe (lak vektorësh 2D dhe 3D), ndjeshmëri të llogaritura nga gjeometria, Monte Carlo me shpërndarje të tjera, tolerancë madhësie në dimensionet e skicës, toleranca bonus nga gjendja e materialit | {{ui:Zinxhiri i tolerancave}} në një montim: një drejtim, rasti më i keq dhe RSS, tolerancat e shkruara, nga toleranca e përgjithshme e bllokut të titullit ose nga kornizat GD&T: shih [Zinxhirët e tolerancave](topic:tolerance-stackup) |
| Vendosja: rendi i prerjes dhe hyrjet, prerja e skajeve të përbashkëta një herë, pjesë që duhet të mbahen bashkë; mbetjet e rrotullave, materiali i përbashkët midis projekteve | {{ui:Vendos pjesët e sheshta në fleta…}} me hapësirë, margjina, rrotullime dhe drejtim fibre: shih [Vendos pjesët e sheshta në fleta](topic:nest-flat-parts); pllakat e mbetura ruhen dhe përdoren të parat: shih [Ruaj dhe ripërdor mbetjet](topic:nest-offcuts); planifiko prerjen në softin e prerësit tënd |
| Lamarinë: palosje, zhvendosje, flanxha me prerje me miter dhe konturi; flanxha mbi skaje të lakuara ose mbi faqet e një flanxhe baze të përkulur; përkulje të skicuara; mbyllje qoshesh; mjete formimi; konvertim i solidit në lamarinë; sheshi i një flanxhe baze të përkulur me prerje; tabela përkuljeje | {{ui:Flanxh bazë}} (një pllakë ose profil i përkulur), {{ui:Flanxh brinje}} mbi skajet e drejta të një pllake me zbutje përkuljeje, dhe modeli i sheshtë me një K-faktor: shih [Lamarina](topic:sheet-metal) |
| Analiza e draftit në montime; gjetja e vijës së ndarjes; analiza e trashësisë së murit | {{ui:Analiza Draft}} në pjesën te Dizajni: shih [Kontrollo draftin për kallëpe dhe derdhje](topic:draft-analysis); hap çdo pjesë të një montimi për ta kontrolluar |

## Skicat

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Elipse, harqe tangjente, konike, spline me shkallë ose pesha të caktuara (NURBS) | Spline (kubike), harqe dhe rrathë me relacione Tangjente |
| Një pikë mbi një spline (relacion), relacione kurbature (G2) | Vendos pikën e vetë spline-it aty ku duhet të kalojë |
| Kopje ofset të splineve që ndjekin ndryshimet e mëvonshme; ofset të zinxhirëve me qoshe të mprehta spline | Ofseto përsëri pas ndryshimit; rrumbullakos së pari qoshen |
| Kopje modelesh që mbeten të lidhura me origjinalin; modele përgjatë një kurbe | Modelo përsëri pas një ndryshimi |
| Projektimi i gjeometrisë së lirë ose të pjerrët të skajeve rrethore; gjeometri e projektuar që ndjek pjesën | Projekto skajet rrethore të drejta dhe paralele, pastaj dimensiono |
| Dimensione të drejtuara (referencë) | Lexo madhësitë nga paneli ose nga faktet e pjesës |
| Relacione kolineare | Paralele me distancë 0 |
| Ngjitja në një program tjetër (kujtesa e sistemit) | Eksporto DXF, STEP, STL ose 3MF |
| Shkrimi i harqeve, koordinatave relative ose polare | Shkruaj vija dhe rrathë; vizato harqe me veglën Hark |
| Zgjedhja e gjeometrisë pa një tregues | Duhet një klikim ose prekje |

## Parametrat dhe njësitë

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Konfigurime që ndryshojnë materialet; një tabelë dizajni CSV që fik veçori | Konfigurimet vendosin parametrat dhe ndezin ose fikin veçoritë: shih [Konfigurimet dhe tabelat e dizajnit](topic:design-tables); `partcraft variants` ndërton konfigurimet e ruajtura me emër, edhe ato me veçori të fikura: shih [Bëj një paketë variantesh nga konfigurimet e tua](topic:variant-pack) |
| Ekuacione mbi numrat e paneleve të veçorive më të reja (plan, shtrirje, draft dhe të ngjashme) | Shkruaj ato në një skript ose me `partcraft set` ([Skriptet dhe rreshti i komandës](topic:scripts-and-cli)) |
| Një pjesë e shfaqur në inç | Madhësitë shfaqen në milimetra; shkruaj `2in` në një kuti numri ose shprehje dhe bëhet 50,8 |

## Skedarët

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Redaktimi i veçorive të vetë një solidi STEP të importuar (vjen pa histori) | Shto ose hiq material me veçoritë e tua |
| Leximi i ngjyrave, emrave, strukturës së montimit dhe PMI nga STEP | Nuk është e disponueshme |
| Eksportimi glTF, OBJ, IGES, Parasolid; DWG i një pjese 3D (vetëm paketa e variantit shkruan një DWG: fleta e vizatimit) | STL ose 3MF për rrjetat; STEP për solidet; DXF për 2D |
| Hapja e IGES, DXF ose skedarëve të vetë programeve të tjera (skedarët `.3dm` hapen si një trup i vetëm: [Hap një model .3dm si trup solid](topic:open-3dm-files)) | Kërko STEP, ose një rrjet STL, OBJ ose 3MF të mbyllur: [Hap një STL, OBJ ose 3MF](topic:open-meshes) |
| Struktura e montimit (një pemë me emrat e pjesëve) në STEP të eksportuar | STEP i montimit është një përbërje e solideve të vendosura |
| Ruajtja në një dosje sipas zgjedhjes sate pa shkarkimin e shfletuesit | Aktivizo "pyet ku të ruhet" te cilësimet e shkarkimit të shfletuesit |

## Vizatimet

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Dimensione përtej tre madhësive të përgjithshme (madhësi vrimash, pozicione, toleranca në madhësi) | Shëno PDF-në, ose eksporto DXF dhe dimensiono në një program CAD 2D |
| Më shumë se një prerje ose detaj; pamje të drejtuara, të ndara dhe ndihmëse | Një prerje dhe një detaj për vizatim |
| Tekst i lirë, shënime dhe tabela në fletë (përveç blloqeve të titullit dhe të revizionit) | Shënimi i përfundimit, ose tekst i shtuar në PDF |
| Projeksion këndi të parë, pamje të lëvizshme, fleta vertikale | Këndi i tretë, planimetri automatike, fleta horizontale A4–A0 dhe ANSI A–E |
| Pamje prerjeje e drejtpërdrejtë: disa plane ose një kuti prerjeje njëherësh, një kontur rreth prerjes, ruajtja e prerjes në skedar | Një plan në një kohë nga {{ui:Pamjet}} › {{ui:Pamja e prerjes}}; shih [Shiko brenda me një pamje prerjeje](topic:section-view) |
| Vizatime montimi me më shumë pamje, dimensione ose balona që mund t'i zhvendosësh | Një pamje izometrike (ose e shpërndarë) me balona automatike dhe listën e pjesëve |
| Kopjimi dhe ngjitja e simboleve GD&T dhe të përfundimit | Vendos secilin me Datum, Kornizë ose Përfundimi |
| Manuale: skedarë STEP te {{ui:Nga një skedar tjetër…}} i Illustrate, një model i dorëzuar drejtpërdrejt nga ModelCraft ose BimCraft, figura me cilësinë e gjurmuesit të rrugës, 3D interaktive brenda një PDF-je | Hap STEP te Dizajni dhe nis manualin {{ui:Nga pjesa e hapur}}; ruaj modelin si glTF (.glb); imazhe PNG të pamjes 3D; skedari 3D interaktiv: shih [Nis një manual në Illustrate](topic:illustrate) |

## Montimet

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Lidhje me ingranazhe, rrip, kamë dhe vidë; një lidhje sferike e kufizuar në një kon; lidhje mbi faqe të lakuara ose midis pikave | Lidhje rigide, rrotulluese, rrëshqitëse, cilindrike, të sheshta, sferike dhe me pin në yllë, secila me vlerat e veta dhe kufijtë e saj: shih [Ndërto një montim](topic:build-assembly) |
| Hapa shpërndarjeje që rrotullojnë pjesët, dhe tërheqja e pjesëve që vendosin lidhjet | Hapa të drejtë shpërndarjeje; hiq një lidhje për të zhvendosur një pjesë me dorë |
| Nën-montime | Një nivel vetëm pjesësh |
| Ingranazhe, kamë, kontakt | Nuk është e disponueshme |

## Prodhimi

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Pastrim adaptiv 3D dhe trashje me ofset në 3D; përfundim me vijë uji, me laps, radial dhe spirale; kalime adaptive të shkruara si harqe | Trashje 3D me rreshta të drejtë dhe makinim i mbetjes: shih [Trashja 3D dhe makinimi i mbetjes](topic:rough-3d); përfundim Paralele dhe Scallop: shih [Përfundimi 3D](topic:finish-3d); sipërfaqja, xhepi, adaptiv 2D, kontura, shpuarja dhe qoshimi 2,5 boshte: shih [Bëj shtigjet e veglës dhe G-code](topic:manufacture) |
| Prerje me anën e veglës (swarf), shtigje trashjeje me vija rrjedhëse dhe me shumë boshte, kode të planit të punës të pjerrët (G68.2), kontrolle përplasjeje të mbajtësit dhe të makinës; simulim i prerjeve 5 boshte dhe rrotulluese | Një vegël e pjerrët për çdo operacion, përfundim 5 boshte me freza me top dhe përfundim rrotullues 4 boshte: shih [Makinimi me 4 dhe 5 boshte](topic:multi-axis) |
| Shpuarje dhe filetime të brendshme në torno, cikle G71/G76, harqe në shtigje tornimi, vegla të gjalla, nën-bosh | Tornim i jashtëm: sipërfaqja, trashja, përfundimi, kanali, ndarja e pjesës, filetimi, shpuarja në qendër: shih [Tornimi në torno](topic:turning) |
| Sondimi i një këndi ose qoshe, një vegël caktuese, matja e një madhësie kundrejt një tolerance | Sondimi i një faqeje, një ane, një vrime ose një bosi për të caktuar zhvendosjen e punës: shih [Sondimi](topic:probing) |
| Kontrolle përplasjeje të mbajtësit dhe të bishtit | Kujdes paralajmërimet e gjatësisë së brinjës dhe kontrollo në simulatorin e kontrollit tënd |
| Cikle jetëgjatësie veglash dhe nënprogramesh në një postprocesor; ngarkimi i skedarëve postprocesorë të programeve të tjera | Shkruaj ose ndrysho një postprocesor në formatin e vetë PartCraft: shih [Postprocesorët që mund t'i redaktosh](topic:post-processors) |
| G-code në inç (G20) | Vetëm milimetra (G21) |

## Simulimi dhe dizajni gjenerativ

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Studime jolineare: rrjedhje, deformime të mëdha, kontakt midis pjesëve, lodhje | Lineare statike dhe frekuencat natyrore: shih [Kontrollo tendosjen dhe deformimin](topic:simulation); mbaj faktorin e sigurisë shumë mbi 1 |
| Shembje jolineare (papërsosmëri, pas-shembje, kalim i papritur) | Faktorët e ngarkesës së shembjes lineare me një marzh të gjerë: shih [Nxehtësia, tendosja termike dhe shembja](topic:thermal-and-buckling) |
| Rrezatimi midis faqeve (faktorët e shikimit), rezistenca e kontaktit, materiale që varen nga temperatura, inercia në tendosjen termike (valët e goditjes termike) | Rrezatim drejt rrethinës, tendosje termike e qëndrueshme ose quasi-statike me kohë, veti konstante: shih [Nxehtësia, tendosja termike dhe shembja](topic:thermal-and-buckling) |
| Rafinim automatik për nxehtësi kalimtare dhe studime me ngarkesë termike; rrjet më i trashë aty ku gabimi është i vogël; objektiv mbi një sasi lokale (tendosja maksimale në një pikë) | **Rafino automatikisht** për studimet statike, shembjeje, frekuencë natyrore dhe termike të qëndrueshme, mbi gabimin në gjithë pjesën: shih [Kontrollo tendosjen dhe deformimin](topic:simulation); përndryshe ul madhësinë e elementit |
| Ngarkesat e mbajtëseve dhe bulonave, forcat e largëta, momentet, sustat, zhvendosjet e caktuara | Forca dhe presione mbi faqe, gravitet; faqe të fiksuara dhe pa fërkim |
| Simulimi i montimeve; materiale që ndryshojnë sipas drejtimit (shtresa të printuara, kompozitë) | Një pjesë, një material izotrop |
| Disa fije zgjidhësi për studime tetraedrike, transferim nxehtësie dhe dizajn gjenerativ; çdo fije në një faqe që nuk është e izoluar me origjinë të kryqëzuar | Studimet me voksel, shembja, tendosja me kohë dhe rrjedha laminare përdorin fijet aty ku lejon faqja: shih [Cilësimet e PartCraft](topic:settings) |
| Rrjedhë turbulente me saktësi projektimi (modeli Spalart–Allmaras është i përfshirë si eksperimental: fërkimi i tubit 30 deri 34 % më i lartë, rikthimi pas hapit 21 deri 39 % më i shkurtër; e planifikuar: qeliza më të imëta pranë mureve), nxehtësi në rrjedhë, rrjedhë jo e qëndrueshme (me kohë të saktë), sipërfaqe të lira, fluide jo-njutonianë, pjesë rrotulluese | Rrjedhë laminare, e qëndrueshme, izotermike e një fluidi njutonian, ose modeli eksperimental turbulent për modele cilësore: shih [Simulo rrjedhën e fluidit](topic:flow-simulation); paneli paralajmëron kur numri Reynolds kalon laminarin |
| Kufijtë e tendosjes dhe rregullat e prodhimit (tepricat, drejtimet e frezimit) në dizajnin gjenerativ; disa materiale në një formë | Forma më e ngurtë për një vëllim; kontrollo rezultatin në Simulimi: shih [Rritja e një forme nga ngarkesat](topic:generative-design) |
| Një rezultat si solid i redaktueshëm (i lëmuar, parametrik) | STL, STEP me facete ose një pjesë me rezultatin si solid i importuar me facete |
| Projektimi i makinave elektrike: një rotor që rrotullohet në një stator, çift kundrejt këndit, çelik ngopës, magnet që humbin forcën pas gjurit të tyre, rrymat e Fukoit dhe humbjet e hekurit dhe të bakrit; fusha magnetike në 3D ose mbi rrjete të lakuara | Magnetostatikë lineare 2-D mbi një rrjet në bibliotekën e analizës: bobina, hekur, magnet të përhershëm mbi vijën e tyre të rikthimit, hapësira, induktancë dhe tërheqje: shih [Fushat magnetike në 2-D](topic:magnetic-fields-2d) |

## Skriptet

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Ndihma me kalimin e miut, pikat e ndërprerjes dhe hapat në redaktorin e skripteve | Kërkimi, palosja dhe plotësimi janë të përfshira (shih [Shkruaj dhe ekzekuto skripte](topic:craftscript)); për pjesën tjetër, redaktori yt: {{ui:Ruaj}} dhe {{ui:Hap}} në grupin Skript zhvendosin skriptet brenda dhe jashtë; funksionet e integruara janë listuar në [Gjuha CraftScript](topic:craftscript-language) |
| Pikat e ndërprerjes dhe hapat përmes një skripti | `disp` dhe `fprintf` përgjatë rrugës; {{key:Mod+Enter}} ekzekuton disa rreshta të zgjedhur njëherësh |
| Fushat dhe grafikët që një skript shfaq të vizatuar në hapësirën e punës Dizajn; skriptet që ndryshojnë parametrat e pjesës | Shfaqen në hapësirën e punës Script; skriptet lexojnë parametrat me `param` (shih [Shkruaj dhe ekzekuto skripte](topic:craftscript)), i ndryshojnë në skedën {{ui:Parametrat}} |
| Imazhe dhe tabela krah për krah me grafikët; redaktimi i një grafiku (zmadhimi, kufijtë e boshteve) para ruajtjes | Krahas tregon grafikët; ruaj një grafik si PNG, SVG ose CSV dhe përfundoje diku tjetër |
| numpy dhe paketa të tjera Python; Python jashtë linje; palosja e Python-it në redaktor; Pascal Script | Biblioteka standarde e Python, CraftScript dhe Lua: shih [Skriptet në Python](topic:craftscript-python) |
| Kalimi i funksioneve Lua te funksionet e integruara; thirrja e një funksioni biblioteke nga Lua me një emër të ndërtuar gjatë ekzekutimit të skriptit | Shkruaj emrin e funksionit të bibliotekës në skript (`cs.static_tet(…)`), ose thirre nga një skript CraftScript |

## Aplikacioni

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Ruajtja në cloud, ndarja dhe historiku i versioneve | Jo e disponueshme ende. Ruaj skedarët në kompjuterin tënd dhe mbaj versionet me emër |
| PartCraft si aplikacion i instaluar në iPad dhe iPhone | Përdor PartCraft në shfletuesin e pajisjes; në Android dhe në desktop funksionon edhe në CadCraft Studio (getcadcraft.com/download) |
| Menutë e kontekstit (klikimi me të djathtën) | Shiriti i veglave dhe paneli i djathtë |
| Puna plotësisht jashtë linje nga një nisje e re | Vetëm kur aplikacioni është ruajtur për përdorim jashtë linje: shih [Puna jashtë linje](common:offline) |

Raporto çfarë të mungon më shumë përmes faqes së mbështetjes së sajtit: ajo formon çfarë vjen më pas.

## Engineer (gjeneratorët dhe fushat)

| Ende nuk është ndërtuar | Në vend, sot |
|---|---|
| Kolektorë, porta dhe bashkime në shkëmbyesin e nxehtësisë të gjeneruar; kurba temperature për forcën e materialit; humbjet në T në kolektor | Gjeneratorët ndërtojnë bërthamën dhe tubat; shto bashkime në Dizajn; përdor shifrat e materialit në temperaturën e dhomës me një faktor sigurie |
| Shtimi i gjeneratorëve nga drejtoria e shtojcave me një klikim | {{ui:Hap}} në hapësirën e punës Engineer shton një gjenerator nga një skedar |
| Një skedar fushe më i imët se madhësia voksel e vetë gjeneratorit; leximi i skedarëve `.vdb` | Ruaj një fushë më të imët nga një skript; `.vdb` shkruhet, nuk lexohet |
| Llogaritjet sipas kodit për enët nën presion | Formulat klasike të mureve të hollë dhe të trashë, me faktorin e sigurisë që zgjedh ti; jo një marzh kodi |
| Gjeneratorë për aplikacionet e tjera | Vetëm PartCraft në këtë version |
