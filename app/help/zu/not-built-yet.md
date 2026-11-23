---
title: Okungakakhiwa okwamanje
summary: Konke okungenziwa yile nguqulo ye-PartCraft okwamanje, kusukela ezindleleni ezigoqayo kuya ekubonisweni ngama-intshi, izilinganiso zokudweba nezinhlelo ezingaphansi, nokuthi yini okufanele wenze esikhundleni salokho namuhla.
keywords: okungekho, akukakhiwa, imikhawulo, imikhawulo, uhlelo lwesikhathi esizayo, exact kernel, fillet, chamfer, shell, sweep, loft, ukungenisa kwe-step, ukulingisa, manufacture, ukugoqa kwesiphetho, i-face fillet, izibalo, amaintshi, izilinganiso zokudweba, izinhlelo ezingaphansi, cloud, ithebhulethi, ifoni, ukuhamba kumsindo
from: 97b10a29
---

I-PartCraft ingunguqulo yokuqala. Leli khasi lidwebe okungenziwa yi-PartCraft yalolu hlobo, ukuze ungazifuni, nokuthi yini okufanele wenze namuhla. Akukho okunalo usuku.

## Kudinga i-exact kernel

Le nguqulo yakha zonke izingxenye nge-mesh kernel (bona [I-mesh kernel](topic:solid-kernels)). Konke okulandelayo kudinga i-exact geometry kernel, engekho kulolu hlobo okwamanje. Izingxenye ezigcinwe nalezi zici ziyavulwa: izici zihlala emlandweni, zimakwe njengezingakakhiwa, futhi ziyagcinwa lapho ulondoloza.

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| {{ui:Fillet}} ne-{{ui:Chamfer}} emaphethelweni ajikeleziwe; ama-fillet anobubanzi oshintshayo ngomphetho; ama-round ahlanganiswa ngokuthambile lapho ehlangana khona (i-mesh kernel iwasika ngama-mitre) | I-Fillet ne-Chamfer zisebenza emaphethelweni aqondile phakathi kobuso obusicaba; gobisa amanye amakhona ngaphambi kokuqunta esketshini ({{ui:Fillet}} esketshini, {{key:F}}) |
| {{ui:Shell}} ivula ubuso obugobile; izindonga zobukhulu obuhlukile | Vula ubuso obusicaba; engeza izinto ngama-extrude lapho udonga kumele lube lukhulu |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} ebusweni obugobile; ukuqunta kuya kubuso, kubuso obulandelayo noma kuvertex; ama-extrude athambile | Qunta noma phendula, ngezinyathelo uma kudingeka; qunta ukujula okulinganiswe ngokwakho |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} nezingqwembe ezisicaba | Qunta ipuleti noma iphrofayili yezimfucuza |
| Izindawo: ukuqeda {{ui:Form}} ngaphakathi engxenyeni, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Akutholakali |
| Izingxenye eziningi: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, izici ezenza isigaba esisha | Isolidi eyodwa; amaphethini nezici zokukopisha okuphindwe | 
| Amasketshi, amapuleni, ama-eksisi namaphoyinti ebusweni okuphela i-exact kernel ingawathola (ubuso olwenziwe yi-fillet, udonga lwembobo, ubuso besolidi elingeniswe) | Dweba ezipuleni eziyisisekelo, ezipuleni zesethulo nasebusweni obusicaba bama-extrude nokuphendula |
| Isiphetho sedizayini esizuzwe njengengxenye noma sengezwa kuyo (siba yisolidi eyingenisiwe) | Landa umphumela njenge-STL noma STEP |
| Ukuhlela ubuso obugobile besolidi le-STEP elivuliwe njengobuso oluqondile; i-exact STEP yobuso be-spline, obuphonswa nobuphendulwe kusuka kufayela le-STEP, izinhlangothi ze-spline, izinsimbi ezakhiwe; i-STEP yezinye izinhlelo zokwakha izingxenye | {{ui:Open}} ifunda i-STEP njengezikhonjana futhi igcina ubuso obusicaba, amasilinda, amakhoni, izingqimba nama-torus efayeleni ukuze ihlinzeke ngokuthunyelwa ([Vula ifayela le-STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ibhala bonke ubuso be-analytic ngokunembile futhi igcina lezo njengama-facet ([Export](topic:export-files#for-other-cad-programs-step)); i-macro yezinye izinhlelo zokwakha izingxenye isabhala |
| Amawaka eqondile ku-drawing views | Izivivinyo nezivivinyo zesigaba zidwetshwe kusuka kuma-facet |
| Amavolumu, izindawo namabanga ngokunembile | {{ui:Measure}} inikeza izinombolo zesolidi ye-faceted, zincane kancane ezingxenyeni ezijikelezayo; isethingi ye-**Curves** eshaya kakhulu iyazisondeza |

Amanye amakhodi kwamathebula angezansi aphakamisa enye yalezi zici njengendlela yokuzungeza into ethile ngenye. Lezo zincomo zisebenza uma i-exact kernel ibuyile.

## Izici

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ama-fillet obuso, ama-fillet agcwele ama-round, ama-fillet anobubanzi obusethwe emaphoyinteni ngomphetho | I-{{ui:Fillet}} enobubanzi obungashintshi noma obushintshayo ngokuqondile; izici eziningi ze-fillet |
| Amashell anezindonga zobukhulu obuhlukile | I-{{ui:Shell}} eyodwa; engeza izinto ngama-extrude lapho udonga kumele lube lukhulu |
| I-{{ui:Draft}} ebusweni obungaqondile (i-spline) | I-{{ui:Draft}} isebenza ebusweni obusicaba, obungamasilinda nobungamakhoni |
| Ukuphendula okuphendukayo, ukuphendula kodonga olulincane nobuso; ukuqedela kwe-tangency ku-loft; i-loft enereyili eyodwa yesiqondisi; izindlela ze-spline | {{ui:Sweep}} enokuqondiswa okusetshenzisiwe noma isikali sokuphela; i-loft enereyili ezimbili noma ngaphezulu yesiqondisi: bona [Sweep, loft ne-draft](topic:sweep-loft-draft) |
| Izimfucuza ezivela emadlumbeni noma ku-spline; izimfucuza ezikhula ziyisikwele kusketshi (kusukela embonweni owuphezulu); i-draft ezimfucuzeni; izimfucuza eziningi kusketshi owodwa | {{ui:Rib}} kusuka kuchungechunge olulodwa lwemigqa endizeni yesimfucuza siqobo: bona [Izimfucuza nama-gusset](topic:rib) |
| "Kuze kufike" ebusweni obugobile, "kuze kufike kolandelayo" kuma-face agobile | Kuze kufike ebusweni obusicaba noma endizeni yesethulo |
| Izimbobo ezibhobozwe ngaphansi, imithambo yamaintshi nephayipi, imithambo ethambile, ukuphela kwemithambo namaqalo emithambo anamakhoni | I-counterbore ngokujula okuncane; imithambo ye-ISO metric nethrapezoidal, ukuthi ibukeka kanjani noma ibhalwe: bona [Imithambo esikhundleni sokuzungeza nemibhobo, edwetshiwe noma eyakhiwe](topic:threads) |
| Ama-extrude ajulile ngokwezici | Dweba izingxenye zombili zephrofayili |
| Ukukopisha amaphethini okudlulile ngesinyathelo ngasinye, amaphethini okugcwalisa | Sebenzisa izici ezihlukene; amaphethini adlula ngevini: {{ui:Path pattern}} |
| Ukukopisha amaphethini, amamirror, ama-fillet, ama-chamfer, ama-shell namasolidi angeniswe | Kopisha isketshi noma isici abakhiwe kuso, noma yenza iphethini kuso |
| I-tangency ye-(G1) emaphoyinteni angajwayelekile e-form; ukuhlanganisa ama-patch e-form ezingxenyeni ezinkulu | Phakamisa i-Level ye-form: ama-patch angalinganiswa aba amancane; bona [Izimo ezingenasici nge-Form](topic:form-surfaces) |
| I-form eyakhiwe ngezingcezu eziningi ezivaliwe kusici esisodwa; izinkaxa phakathi kwama-form | Ingcezu eyodwa evaliwe ngesici se-Form ngasinye; ihlanganise nge-Join |
| Ukukhetha izinsizakalo zobuso embonweni (ngaphandle kwamaphoyinti okusika nokuhlanga); ama-fillet obuso; ukungasika; ama-patch e-G2; ama-Gordon ahlangene nobuso obugobile obuseduze (ahlanganiswa namaphuleti nobuso obusicaba kwakhiwe) | Zikhethe ngegama ephaneli yesici; yenza ubukhulu kuqala, bese wenza i-fillet kwisolidi |
| Uhlu lwezinsizakalo ku-history; ukungabandakanyi izinsizakalo ezifihliwe ekuthunyelweni | Qamba kabusha futhi ufihle izinsizakalo ephaneli yezinsizakalo; susa noma ucindezele isici esakhe insizakalo ukuze uyishiye ngaphandle |
| Ukulinganisa okungafani okugcina amasilinda namakhoni e-analytic; ukulinganisa okungafani kobuso obucindezelwe | {{ui:Scale body}} yenza ubuso obugobile bube yi-B-splines eduze (ngaphakathi kuka-0.0000004 mm); ukulinganisa okufanayo kuhlala kunembile |
| Ukuhlanganisa izinsizakalo zobuso; izimfuno zeMinkowski | {{ui:Stitch}} noma {{ui:Thicken}} kuqala, bese {{ui:Combine}} |
| Ukuhlaziywa kokubekezelela: izitaki ezigoqa amakhona (izilinganiso ze-vector ezimbili nezintathu), ukuzwela okubalwe kusuka ejiyometri, i-Monte Carlo nokusabalala kwamanye, ukubekezelela kobukhulu ezilinganisweni zesketshi, ukubekezelela okuyisiphuthuma kusuka ebunzimbeni | {{ui:Stack-up}} kwi-assembly: enye indlela, okubi kakhulu kanye ne-RSS, ukubekezelela okuthayipheke, okuvela kwi-general tolerance ye-title block noma kuhlaka lwe-GD&T: bona [Izitaki zokubekezelela](topic:tolerance-stackup) |
| Ukuhlela: ukuhlukanisa ukusika nokungena; ukusika kwezindawo ezabelwanayo kanye kanye; izingxenye okufanele zigcinwe ndawonye; izinsalela zamaroll, nesitoko esabelwane phakathi kwamaphrojekthi | {{ui:Nest flat parts on sheets…}} ngesikhala, imiphetho, ukugoba nendlela yesiqhoqho: bona [Hlela izingxenye ezibhethiwe ezishidini](topic:nest-flat-parts); amapuleti asele ayagcinwa futhi asetshenziswa kuqala: bona [Gcina bese usebenzisa okusele](topic:nest-offcuts); hlela ukusika kusofthiwe wakho wesikhando |
| Insimbi ebhethiwe: ukuhlanganisa imiphetho, ukugoba, ama-flange ahlanganisiwe nama-contour; ama-flange emiphetheni egobile noma ebusweni be-base flange egobile; izigoba ezidweba; ukuvalwa kwamakhona; izinsimbi zokwakha; ukuguqula isolidi ibe insimbi ebhethiwe; ibhedi ye-base flange egobile enokusika kuyo; amathebula okugoba | {{ui:Base flange}} (ipuleti noma iphrofayili egobile), {{ui:Edge flange}} emiphetheni eqondile yamapuleti nezindawo zokuphumula, nobuso obusicaba nge-K-factor: bona [Insimbi ebhethiwe](topic:sheet-metal) |
| Ukuhlaziywa kwe-draft kuma-assembly; ukuthola umugqa wokuhlukanisa; ukuhlaziywa kobukhulu bodonga | {{ui:Draft analysis}} engxenyeni ku-Design: bona [Hlola i-draft yokwakha nokufakwa](topic:draft-analysis); vula yonke ingxenye ye-assembly ukuze uyihlole |

## Amasketshi

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ama-ellipse, ama-arc athintwayo, ama-conic, ama-spline anedigri ethile noma amandla (NURBS) | Ama-spline (cubic), ama-arc namasilinda nobudlelwano bokuthinta |
| Iphoyinti ku-spline (ubudlelwano), ubudlelwano be-curvature (G2) | Beka iphoyinti le-spline lapho kumele lidlule khona |
| Amakhophi e-offset ama-spline alandela ushintsho olulandelayo; ama-offset ezinkomba zama-spline abukhali | Phinda i-offset ngemva kwoshintsho; zungeza ikhona kuqala |
| Amakhophi amaphethini ahlala exhunywe emthonjeni; amaphethini ngevini | Phinda iphethini ngemva koshintsho |
| Ukuprojekta amaphethelo ajikelezayo akhululekile noma athambekile, ijiyometri eprojekthiwe elandela ingxenye | Projekta amaphethelo ajikelezayo aqondile nalinganayo, bese ulinganisa |
| Izilinganiso ezishayelwe (ezireferensi) | Funda usayizi kusuka ephaneli noma kuqoqo le-part |
| Ukuhlanganiswa okuqondile (collinear) | Parallel nekhala elingu-0 |
| Ukunamathela kolunye uhlelo (i-clipboard yesistimu) | Thumela ngaphandle i-DXF, STEP, STL noma 3MF |
| Ukuthayipha amaarc, izixhumanisi ezihlobene noma ze-polar | Thayipha imigqa namasirkili; dweba ama-arc nge-Arc tool |
| Ukukhetha ijiyometri ngaphandle kwepointa | Kudinga ukuchofoza noma ukuthinta |

## Amapharamitha namayunithi

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ukumiswa okushintsha izinto; ithebula lodizayini ye-CSV elivala izici | Ukumiswa kusetha amapharamitha futhi kuvula nokuvala izici: bona [Ukumiswa nethebula lodizayini](topic:design-tables); `partcraft variants` yakha ukumiswa okulondoloziwe ngegama, nezici ezivaliwe: bona [Yenza iphakethe lezinguquko kokumiswa kwakho](topic:variant-pack) |
| Ukulinganisa kwezinombolo zezici zamanje ze-panel yazo (i-plane, sweep, draft nokufana nakho) | Zibhale ku-script noma nge-`partcraft set` ([Ama-script nomugqa womyalo](topic:scripts-and-cli)) |
| Ingxenye ebonakala ngamaintshi | Usayizi ubonisa ngamamilimitha; thayipha `2in` ebhokisini lenombolo noma ku-expression bese kuba ngu-50.8 |

## Amafayela

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ukuhlela izici zesolidi ye-STEP eyengeniwe (ifika ingenayo umlando) | Engeza noma sika izinto ngezici zakho |
| Ukufunda imibala, amagama, isakhiwo se-assembly ne-PMI kusuka ku-STEP | Akutholakali |
| Ukuthumela i-glTF, OBJ, IGES, Parasolid; i-DWG yengxenye ye-3D (kuphela i-variant pack ibhala i-DWG: ishidi lokudweba) | I-STL noma i-3MF kumesh; i-STEP kumasolidi; i-DXF kwe-2D |
| Ukuvula i-IGES, i-DXF noma amafayela ezinye izinhlelo (amafayela `.3dm` avulwa njengesisodwa somzimba: [Vula imodeli ye-.3dm njengesolidi](topic:open-3dm-files)) | Cela i-STEP, noma i-mesh evaliwe ye-STL, OBJ noma 3MF: [Vula i-STL, OBJ noma i-3MF](topic:open-meshes) |
| Isakhiwo se-assembly (ihlelo lamagama engxenye) kusitoko se-STEP esithunyelwe | I-assembly STEP iyi-compound eyodwa yezinsizakalo ezibekiwe |
| Ukulondoloza kufolda oyikhethayo ngaphandle kokudawuniloda kwesiphequluli | Vula "ask where to save" kumasethingi okudawuniloda kwesiphequluli |

## Izidwewe

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Izilinganiso ezingaphezu kwezinkulu ezintathu zokuphelela (usayizi wemigodi, izindawo, ukubekezelela kobukhulu) | Phawula i-PDF, noma ithumele i-DXF bese uyilinganisa ngohlelo lwe-2D CAD |
| Okungaphezu kwesigaba esisodwa noma ingxenye eyodwa; amabhuku ahlanganisiwe, ama-angle abonakalayo nezinhlelo ezingeziwe | Isigaba esisodwa nengxenye eyodwa ngesidwe ngasinye |
| Umbhalo ngokukhululekile, izinkomba nemitapo ekhasini (ngaphandle kwamabhoku wesihloko nokuguqulwa) | Inothi lokuqeda, noma umbhalo owengeziwe kwi-PDF |
| Ukuprojekta kwe-first-angle, izibonelo ezinyakazayo, amashidi ahlezi ebude | I-third angle, ukwakheka okuzenzakalelayo, amashidi ahlezi A4–A0 nama-ANSI A–E |
| Ukubuka isigaba ngokuphilayo: izindiza eziningi noma ibhokisi lesigaba ngesikhathi esisodwa, umugqa wangaphandle ozungeze isigaba, ukugcina isigaba efayeleni | Indiza eyodwa ngesikhathi kusuka ku-{{ui:Views}} › {{ui:Section view}}; bona [Bheka ngaphakathi ngokubuka isigaba](topic:section-view) |
| Imibono ye-assembly enezinye izibonelo, izilinganiso noma ama-balloon onganyakazisa | Isibonelo se-isometric (noma sihlakazwe) esinama-balloon okuzenzakalelayo nohlu lwezingxenye |
| Ukukopisha nokunamathisela kwe-GD&T nezimpawu zokuqeda | Beka ngalunye nge-Datum, Frame noma Finish |
| Imibhalo: amafayela e-STEP ku-{{ui:From another file…}} yesifanekiso, imodeli ethunyelwe ngqo kusuka ku-ModelCraft noma BimCraft, izithombe ngekhwalithi ye-path tracer, i-3D ehlanganyelwe ngaphakathi kwe-PDF | Vula i-STEP ku-Design bese uqala umbhalo ngo-{{ui:From the open part}}; londoloza imodeli njenge-glTF (.glb); izithombe ze-PNG zombono we-3D; ifayela le-3D elihlanganyelwe: bona [Qala umbhalo ku-Illustrate](topic:illustrate) |

## Ama-assembly

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Amajoyinti egiya, rack, cam nesikulufo; ijoyinti lebhola elikhawulelwe kukhoni; amajoyinti ezindaweni ezigobile noma phakathi kwamaphoyinti | Ama-joint aqinile, ajikelezayo, ayisilayidi, asicaba, ama-cylindrical, aseyizinzwa, ebhola nesikhala se-pin kubuso obusicaba, ngamanani ngamanani anemikhawulo yawo: bona [Yakha i-assembly](topic:build-assembly) |
| Izinyathelo zokuhlakaza ezihambisa izingxenye nokuhudula izingxenye ama-joint ayibeka | Izinyathelo ezigoqayo zokuhlakaza; susa i-joint ukuze uhambise ingxenye ngesandla |
| Ama-sub-assembly | Izinga elilodwa lezingxenye kuphela |
| Amagiya, ama-cam, ukuxhumana | Akutholakali |

## Ukukhiqiza

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ukuhlanza okuguquguqukayo nokuhlanza ngokuphakama kwe-3D; ukuqeda ngomugqa wokuphakama, ngepensela, ngoradial nangesipiral; amapasi ahambisanayo abhalwa njengama-arc | Ukuhlanza nge-3D ngemigqa eqondile: bona [Ukuhlanzwa nge-3D nokusala okusele](topic:rough-3d); Ukuqedwa kwe-Parallel ne-Scallop: bona [Ukuqedwa nge-3D](topic:finish-3d); ubuso be-2.5-eksisi, i-pocket, i-adaptive ye-2D, contour, drill nochamfer: bona [Yenza izindlela zethuluzi ne-G-code](topic:manufacture) |
| Ukusika i-swarf, izindlela zomugqa wokugeleza nokuhlanza kwama-eksisi amaningi, amakhodi esikhala sokusebenza esithambekile (G68.2), ukuhlolwa kokushayisana kwe-holder nomshini; ukulingiswa kokusika kwe-5-eksisi nokuzungezayo | Ithuluzi elithambekile kunoma yimuphi umsebenzi, ukuqedwa nge-5-eksisi ngebhola lesiphetho nokuqedwa okuzungezayo ngo-4th-axis: bona [Ukusebenza nama-eksisi ama-4 nama-5](topic:multi-axis) |
| Ukubhoboza nemithambo yangaphakathi ekhalaleni, imiyalo ye-G71/G76, ama-arc ezindleleni zokuthenda, amathuluzi aphilayo, i-sub-spindle | Ukuthenda ngaphandle: ubuso, rough, finish, groove, part off, thread, drill ku-centre: bona [Ukuthenda emshinini wokuthenda](topic:turning) |
| Ukuhlola i-angle noma ikhona, isethi yethuluzi, ukukala usayizi ngokubekezelela | Ukuhlola ubuso, uhlangothi, imbobo noma ingxenye ukuze usethe ukushintshwa komsebenzi: bona [Iprobhu](topic:probing) |
| Ukuhlolwa kokushayisana kwe-holder ne-shank | Qaphela izexwayiso zobude be-flute bese uhlola kusimulator somlawuli wakho |
| Ukuphila kwethuluzi nomjikelezo wezinhlelo ezincane ku-post; ukulayisha amafayela e-post angewakho | Bhala noma shintsha i-post ngefomethi yePartCraft: bona [Ama-post processor ongawahlela](topic:post-processors) |
| I-G-code yamayunithi e-inch (G20) | Amamilimitha (G21) kuphela |

## Ukulingisa nokuklama okuzenzakalelayo

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Izifundo ezingalingani: ukuvuma, ukuguquka okukhulu, ukuxhumana phakathi kwezingxenye, ukukhathala | Amandla amile nemvelo ezinzile: bona [Hlola ukucindezela nokuguquka](topic:simulation); gcina isilinganiso sokuphepha siphezulu kakhulu kuno-1 |
| Ukuhlehla kwe-buckling okungalingani (ukungafani, post-buckling, snap-through) | Izinombolo ezilinganayo zokuhlehla ngomkhawulo omkhulu: bona [Ukushisa, ukucindezela okushisayo nokuhlehla](topic:thermal-and-buckling) |
| Ukukhanya phakathi kwezindawo (view factors), ukumelana nokuxhumana, izinto ezithintwa yizinga lokushisa, ukunyakaza ekucindezelekeni okushisayo (amagagasi okushaqeka okushisayo) | Ukukhanya kubuso bozungezayo, ukucindezela okushisayo okuzinzile noma okuphansi phakathi nesikhathi, izakhiwo ezingashintshi: bona [Ukushisa, ukucindezela okushisayo nokuhlehla](topic:thermal-and-buckling) |
| Ukuhlukanisa okuzenzakalelayo kokushisa okudlulayo nezifundo ngomthwalo oshisayo; ukwenza i-mesh ibe yincane lapho iphutha lincane; inhloso yesisebenzi esilinganayo (ukucindezela okuphezulu esikhundleni esisodwa) | **Hlukanisa ngokuzenzakalela** ezifundweni ezizinzile, ezihlehla, ezinamafreqansi emvelo nezinzile ezishisayo, ephutheni lonke lengxenye: bona [Hlola ukucindezela nokuguquka](topic:simulation); noma nciphisa usayizi wesakhi |
| Izimpoqo nezinhlaka ezinenkomba, imithwalo ekude, izikhathi, izinzipho, ukuphindisa okuqondile | Amandla nengcindezi ezinhlangothini, ukudonsa; ubuso obuqinile nobungenayo ukungaphikisani |
| Ukulingisa kwezinhlanganisela; izinto ezihlukana ngokuqondisa (izingqimba ezishicilelwe, ama-composite) | Ingxenye eyodwa, impahla eyodwa yonke ilingana |
| Izinhlobo zokukhiqizwa nemithetho yokukhiqiza (okwenza kube nzima, izindlela zokugaya) ekwakhiweni okuzenzakalelayo; izinto ezimbalwa esimweni esisodwa | Isimo esiqinile kakhulu sevolumu; hlola umphumela ku-Simulation: bona [Khulisa isimo ngemithwalo](topic:generative-design) |
| Umphumela njengesolidi esihlelekayo (esibushelelezi, esinemingcele) | I-STL, i-STEP enobuso oqondile noma ingxenye enomphumela njengesolidi esingeniswe esinobuso |
| Izinhlelo zezinto ezingokwezinzwa zokwakha (i-electric machine): irotor ejikelezayo ku-stator, i-torque ngokuya ngekona, insimbi egcwele, izinsimbi ezilahlekelwa ngamandla ngaphezu kwesiqu sazo, imibuthano yamanzi nokulahlekelwa kwensimbi nethusi; izinkambu ze-magnetic ku-3D noma ku-mesh egoqayo | I-magnetostatics ye-2-D enomugqa ku-grid ye-analysis library: izinto zokuhlanganiswa, insimbi, izinsimbi zokuhlala ezindaweni zazo, imikhawulo, i-inductance nokuhudulwa: bona [Izinkambu ze-magnetic ku-2-D](topic:magnetic-fields-2d) |

## Ama-script

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Usizo lokuhamba phezu kwebhokisi, amaphoyinti okumisa nokuhamba ku-script editor | Ukuthola, ukugoqa nokuqedela kuyakhona (bona [Bhala futhi uqalise ama-script](topic:craftscript)); kwezinye, umhleli wakho: {{ui:Save}} no {{ui:Open}} eqenjini le-Script zithutha ama-script ngaphakathi nangaphandle; imisebenzi yangaphakathi ihlolwe ku-[Ulimi lwe-CraftScript](topic:craftscript-language) |
| Amaphoyinti okumisa nokuhamba ku-script | `disp` no `fprintf` ngendlela; {{key:Mod+Enter}} iqalisa imigqa ethile ekhethiwe ngesikhathi esisodwa |
| Izinkambu namapulani ama-script abonisa adwetshwe kwi-Design workspace; ama-script aguqula amapharamitha engxenye | Abonakala kwi-Script workspace; ama-script afunda amapharamitha ngo-`param` (bona [Bhala futhi uqalise ama-script](topic:craftscript)), abashintshe ku-{{ui:Parameters}} tab |
| Izithombe nemithebula ecaleni kwamapulani; ukuhlela ipulani (ukusondeza, imikhawulo yomugqa) ngaphambi kokulondoloza | Ecaleni kukhombisa amapulani; londoloza ipulani njenge-PNG, SVG noma CSV bese uyiqeda kwenye indawo |
| I-numpy nezinye izinkomba zephayitoni; i-Python ngaphandle kwe-inthanethi; ukufaka i-Python kumhleli; i-Pascal Script | Ilabrari ejwayelekile ye-Python, CraftScript neLua: bona [Ama-script ku-Python](topic:craftscript-python) |
| Ukudlulisa imisebenzi ye-Lua kumisebenzi yangaphakathi; ukubiza umsebenzi welabhulari kusuka ku-Lua ngegama elakhelwe ngesikhathi i-script isebenza | Bhala igama lomsebenzi welabhulari ku-script (`cs.static_tet(…)`), noma uwubize ku-script ye-CraftScript |

## I-app

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Ukugcina efwini, ukwabelana nomlando wenguqulo | Akutholakali okwamanje. Gcina amafayela kukhompyutha yakho futhi ugcine izinguqulo ngamagama |
| I-PartCraft njenge-app efakiwe ku-iPad nasku-iPhone | Sebenzisa i-PartCraft kusiphequluli sedivayisi; ku-Android nakwi-desktop iphinde isebenze ku-CadCraft Studio (getcadcraft.com/download) |
| Imenyu yokudweba (right-click) | Ibha yamathuluzi nephaneli yesokudla |
| Ukusebenza ngokuphelele ngaphandle kwe-inthanethi ekuqaleni okusha | Kuphela uma i-app ilondolozwe ukuze isetshenziswe ngaphandle kwe-inthanethi: bona [Ukusebenza ngaphandle kwe-inthanethi](common:offline) |

Biza into oyiphuthelwe kakhulu ngekhasi lokusekela lesayithi: liyakwakha ukuthi kuzolandela yini.

## Umakhi (izinkiyi nezinkambu)

| Akukakhiwa okwamanje | Esikhundleni salokho, namuhla |
|---|---|
| Izinhloko, amaport nokufakwa kumsebenzi oshisayo wangaphambili; amagrafu ezinga lokushisa lezinto zamandla; ukulahlekelwa kwethi emanifoldini | Abakhi bakha okuyisisekelo nama-tube; engeza ukufakwa ku-Design; sebenzisa izinombolo zezinto zokushisa kwegumbi ngohlelo lokuphepha |
| Ukungeza abakhi ku-add-on directory ngokucindezela kanye | {{ui:Open}} ku-Engineer workspace ingeza umakhi kusuka ku-fayela |
| Ifayela lenkambu eliphezulu kunosayizi wevokhseli womakhi; ukufunda amafayela `.vdb` | Londoloza inkambu ephezulu kusuka ku-script; i-`.vdb` iyabhalwa, ayifundwa |
| Izibalo zekhodi yesitsha sokucindezela | Izibalo zethekisthi ezilula zomdonga nezinjongo ezijulile zomdonga, nengxenye yokuphepha oyikhethayo; hhayi umkhawulo wekhodi |
| Abakhi ezinye izinhlelo | I-PartCraft kuphela kule nguqulo |

