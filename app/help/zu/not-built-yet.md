---
title: Okungakakwakhiwa
summary: Konke lolu buildi lwe-PartCraft olungakakwenzi, kusukela ezigoqweni ezijikelezayo kuya ekuboniseni kwamayintshi, izilinganiso zemidwebo nezinhlanganisela ezingaphansi, kanye nokwenza okutholakala namuhla.
keywords: okungekho, okungakakwakhiwa, imikhawulo, izinhlelo, indlela yokuthuthuka, kernel eqondile, fillet, chamfer, shell, sweep, loft, ukungenisa i-step, ukulingisa, ukukhiqiza, isweep sokupha, ukungqubuzana komgogodla we-loft, ubuso be-fillet, izibalo, amayintshi, izilinganiso zemidwebo, izinhlanganisela, ifu, ithebhulethi, ifoni
from: 9b868162
---

PartCraft iyibuildi lokuqala. Leli khasi libala okungakenziwa yi-PartCraft, ukuze ungasesheli, nokuthi yenzeni namuhla. Akukho usuku lwalokhu.

## Idinga i-kernel eqondile

Lolu hlobo lwakha zonke izingxenye nge-mesh kernel (bona [Imesh kernel](topic:solid-kernels)). Konke okungaphansi kudinga i-geometry kernel eqondile, engekho kulolu hlobo. Izingxenye ezigcinwe ngalezi zici ziyavuleka: izici zihlala emlandweni, zimakwe njengokungakakwakhiwa, futhi ziyagcinwa uma ulondoloza.

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| {{ui:Fillet}} kanye {{ui:Chamfer}} emaphethelweni ajikelezayo; ama-fillet anobubanzi oshintsha ngomphetho; amajika ahlanganisa ngobuthambile lapho ahlangana khona (i-mesh kernel iwasika ngama-mitre) | I-Fillet ne-Chamfer zisebenza emaphethelweni aqondile phakathi kobuso obucaba; jikeleza amanye amakhoni eskethini ngaphambi kokuphuma ({{ui:Fillet}} eskethini, {{key:F}}) |
| {{ui:Shell}} evula ubuso obujikelezayo; izindonga zobukhulu obuhlukene | Vula ubuso obucaba; engeza impahla ngama-extrude lapho udonga kumele lube lukhulu |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} emabusweni ajikelezayo; ukuphuma kuya ebusweni elilandelayo, ku-vertex noma kuze kube lapho; ama-extrude athambile | Phuma noma jikeleza, ngezinyathelo lapho kudingeka; phuma kubukhulu obulinganiswe nguwe |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} namaphathini aliyisicaba | Phuma ipuleti noma uphrofayili wefini |
| Ubuso: ukuqeda {{ui:Form}} ibe yingxenye, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Akutholakali |
| Izingxenye eziningi: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, izici ezenza umzimba omusha | Isolid eyodwa; amaphethini nezici zokukopisha ngesibonakaliso |
| Izikethi, amapuleni, ama-axis namaphoyinti ebusweni okuphela i-kernel eqondile ingawathola (ubuso obenziwe i-fillet, udonga lwembobo, ubuso be-solid ethekwe) | Qhoma eskethini ezindizeni eziyisisekelo, ezindizeni zereferensi nasebusweni obucaba be-extrudes ne-revolves |
| Isizukulwane sedizayini esiphumele esivulwa njengengxenye noma sengezwa kuyo (siba yi-solid ethekiwe) | Landa umphumela njenge-STL noma i-STEP |
| Ukuhlela ubuso obujikelezayo be-STEP evuliwe njengobuso eqondile; i-STEP eqondile yobuso be-spline, obuhanjisiwe nobuphendulwe kufayela le-STEP, izinhlangothi ze-spline, izinsongo ezenziwe ngomklamo; i-STEP yabanye abenzi bengxenye | {{ui:Vula}} ifunda i-STEP njengama-triangle futhi igcine ubuso obucaba, amasilinda, ama-cone, izindawo nama-torus wefayela ukuze kuthunyelwe ([Vula ifayela le-STEP](topic:import-step)); {{ui:Thumela}} › {{ui:STEP AP242 (isolidi eqondile)}} ibhala zonke izindawo ezinengqondo ngokuqondile futhi izigcina njengama-facet ([Thumela](topic:export-files#for-other-cad-programs-step)); i-macro yomenzi wengxenye yenye ilokhu ibhala |
| Imijikelezo eqondile ezibonweni zemidwebo | Imibono nemibono yesigaba yenziwa kuma-facet |
| Izinombolo eziqondile zevolumu, indawo nezikhala | {{ui:Linganisa}} inikeza izinombolo ze-solid enama-facet, incane kancane ezintweni ezijikelezayo; isilungiselelo se-**Amajika** esiphakeme siyazisondeza |

Amanye amakholomu emitapo engezansi aphakamisa enye yalezi zici njengendlela yokwenza enye into. Lezo zincomo zisebenza uma i-kernel eqondile ibuyile.

## Izici

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Ama-fillet abuso, ama-fillet ajikelezile ngokuphelele, ama-fillet anobubanzi obusethwe emaphointini ngomphetho | {{ui:Fillet}} oshintshayo oqinile noma oshintshayo ngokuqondile; izici eziningi ze-fillet |
| Amashelu anobukhulu bodonga obuhlukene | Ukukodwa {{ui:Shell}} ubukhulu; engeza impahla ngama-extrude lapho udonga kumele lube lukhulu |
| I-draft ku-ubuso oluhlaza (spline) | {{ui:Draft}} isebenza kubuso obucaba, obujikelezayo nobuconyiwe |
| Ama-sweep ajikelezayo, ama-sweep odonga abuncane nobuso; ukuthinta kokugcina kwesici se-Loft; i-loft ngerela elilodwa lesiqondiso; izindlela ze-spline | {{ui:Sweep}} ngokuhlela okulungisiwe noma isikali sokugcina; i-loft ngamarela amabili noma ngaphezulu: bona [Sweep, loft and draft](topic:sweep-loft-draft) |
| Ama-rib avela kumajika noma kuma-spline; ama-rib akhula asikwele kuskethi (kusuka kumbono ophezulu); i-draft kuma-rib; amanye ama-rib kusketshi kanye | {{ui:Rib}} ngesiqoqo semigqa eyodwa ngendiza yefini ngokwalo: bona [Ribs and gussets](topic:rib) |
| "Kuze kube" ubuso obujikelezayo, "kuze kube okulandelayo" kuma-stop obusebujikelezayo | Kuze kube ubuso obucaba noma indiza yereferensi |
| Imbobo ezinjalo ezine-counterdrill, imisongo ye-inch nowepayipi, imisongo emile, ukuphela komsongo kanye nokuqala okuncishisiwe komsongo | Counterbore ngokujula okuncane; imisongo ye-ISO metric ne-trapezoidal, eyenziwe ngokubonakala noma ngokwakhiwa: bona [Imisongo ezinhlamvwini nasembobeni, edwetshiwe noma eyakhiwe](topic:threads) |
| Ama-extrude adonga elincane | Dweba zombili izindonga zeprofayili |
| Amakhophi ahlelwe ngokuqondile, ama-fill patterns | Sebenzisa izici ezihlukene; amaphethini asendleleni eyiyo: {{ui:Path pattern}} |
| Ukukopisha amaphethini, ama-mirror, ama-fillet, ama-chamfer, ama-shell nezolid ezingeniswe | Kopisha iskethi noma isici okwakhiwe kuso, noma yenza iphethini kuso |
| Ukuthinta okuqondile (G1) emaphointini aphambene e-form; ukuhlanganisa amapetshi e-form ibe ubuso obukhulu | Phakamisa i-Level ye-form: amapetshi acishisiwe ayancipha; bona [Freeform shapes with Form](topic:form-surfaces) |
| I-form eyenziwe ngezingcezu ezimbalwa eziqondile esici esisodwa; izigaxa phakathi kwama-form | Ingcezu eyodwa evaliwe ngesici se-Form ngasinye; zihlanganise ngo-Join |
| Ukukhetha imizimba yobuso kumbono (ngaphandle kwamaphoyinti okusika nokufaka ipetshi); ama-fillet obuso; ukungasika; amapetshi we-G2; ama-Gordon surfaces athinte amajika omakhelwane (ukuthinta amapuleni nobuso obucaba kwakhiwe) | Zikhethe ngegama ephaneli yesici; jiyisa kuqala, bese wenza i-fillet ku-solid |
| Uhlu lwemizimba emlandweni; ukushiya imizimba efihliwe ngaphandle kokuthunyelwa | Qamba futhi ufihle imizimba ohlwini lwemizimba ephaneli yengxenye; susa noma vimbela isici esenze umzimba ukuze uyishiye ngaphandle |
| Ukushintsha usayizi okungafani okugcina amasilinda namakhoni eqondile; ukushintsha usayizi okungafani kobuso obuhambisiwe | {{ui:Shintsha usayizi womzimba}} yenza ubuso obujikelezayo bube ama-B-spline avaliwe (ngaphakathi kuka-0.0000004 mm); ukushintsha usayizi okulinganayo kuhlala kukhona |
| Ukuhlanganisa imizimba yobuso; ukufingqa kwe-Minkowski | {{ui:Stitch}} noma {{ui:Thicken}} kuqala, bese {{ui:Combine}} |
| Ukuhlolwa kwetholerensi: izinkomba zamashelu aguqukayo ezinkomba (izigaxa zevekthafu ezi-2D nezi-3D), ukuzwela okubalwe kusuka ejiyomethrini, i-Monte Carlo ngokusatshalaliswa okunye, izilinganiso zetholerensi kuskethi, itholerensi yebhonasi ekuhleleni kwempahla | {{ui:Isakhiwo setholeransi}} ekuhlanganisweni: indlela eyodwa, okubi kakhulu kanye ne-RSS, amathholerensi abhalwe, noma avela ku-general tolerance yebhulokhi lesihloko noma kumafreyimu we-GD&T: bona [Tolerance stack-ups](topic:tolerance-stackup) |
| Ukuhlela: ukuhleleka kokusika kanye nokungena, ukusika imiphetho eyabelwanwe kanye, izingxenye okumele zihlale ndawonye; izinsalela zamarola, impahla eyabiwe phakathi kwamaphrojekthi | {{ui:Hlela izingxenye ezibhethiwe ezishidini…}} nebanga, imikhawulo, ukujikeleza nomqondo: bona [Nest flat parts on sheets](topic:nest-flat-parts); amapuleti asele agcinwa futhi asetshenziswe kuqala: bona [Keep and reuse offcuts](topic:nest-offcuts); hlela ukusika ku-software yomshini wakho wokusika |
| Ishidi lensimbi: amahemu, ama-jogs, ama-miter nama-contour flanges; ama-flanges emaphethelweni ajikelezayo noma ebusweni be-base flange egobile; amajika alotshwe; izivalo zamakhoni; amathuluzi okubumba; ukuguqula i-solid ibe yishidi lensimbi; iphathini eliyisicaba le-base flange egobile elinemigqa ekuyo; amatafula okugoba | {{ui:Iflange yesisekelo}} (ipuleti noma uphrofayili ogobile), {{ui:Iflange yomphetho}} emigqeni eqondile yephuleti nezinciphisi zokugoba, kanye nephathini eliyisicaba nge-K-factor: bona [Sheet metal](topic:sheet-metal) |
| Ukuhlaziya kohlaka kuzinhlanganisela; ukuthola umugqa wokuhlukana; ukuhlaziya ubukhulu bodonga | {{ui:Ukuhlaziya kohlaka}} kungxenye ku-Design: bona [Check draft for moulding and casting](topic:draft-analysis); vula ingxenye ngayinye yenhlanganisela ukuze uyihlole |

## Izikethi

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Ama-ellipse, ama-arc athinta, ama-conic, ama-spline anedigri ebekiwe noma izisindo (NURBS) | Ama-spline (cubic), ama-arc namasongo namabhalansi athintayo |
| Iphoyinti ku-spline (ubudlelwano), ubudlelwano lwe-curvature (G2) | Beka iphoyinti le-spline lalapho kumele idlule khona |
| Amakhophi okuhlehla ama-spline angalandela ushintsho olwalandela; okuhlehla kwamajika anamakhona abukhali e-spline | Hlehla futhi emva kokushintsha; jikelezisa ikhona kuqala |
| Amakhophi okuphindaphinda angahlala exhunyiwe kumsuka; amaphethini asendleleni | Phinda emva kokushintsha |
| Ukuprojekhthela imiphetho eyisiyingi noma ethambekile, ijiyomethri eprojektiwe elandela ingxenye | Prokhetha imiphetho eqondile nekhwaya ezihlanganayo, bese uyilinganisa |
| Izilinganiso ezishayekayo (zereferensi) | Funda usayizi ophaneli noma kuma-facts engxenye |
| Ubudlelwano be-Collinear | Parallel ngebanga le-0 |
| Ukunamathisela kolunye uhlelo (ibhodi lokudlulisa lesistimu) | Thumela i-DXF, STEP, STL noma 3MF |
| Ukuthayipha ama-arc, izixhumanisi ezihlobene noma ze-polar | Thayipha imigqa namasongo; dweba ama-arc ngethuluzi le-Arc |
| Ukukhetha ijiyomethri ngaphandle kwesikhombisi | Kudinga ukuchofozwa noma ukuthintwa |

## Imingcele nezinyunithi

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Izinhlobo ezishintsha izinto; itafula lemiklamo ye-CSV elivala izici | Izinhlobo zibeka imingcele futhi zivule noma zivale izici: bona [Configurations and design tables](topic:design-tables); `partcraft variants` yakha izinhlobo ezigciniwe ngegama, nezici ezivaliwe zifakiwe: bona [Make a variant pack from your configurations](topic:variant-pack) |
| Izibalo zezinombolo zezici ezisha kakhulu ephaneli yazo (indiza, isweep, draft nezinye) | Zibhale ku-script noma nge-`partcraft set` ([Scripts and the command line](topic:scripts-and-cli)) |
| Ingxenye ebonwe ngamayintshi | Usayizi ubonisa ngamamilimitha; thayipha `2in` ebhokisini lenombolo noma ekunxephezeleni futhi ishintshe ibe ngu-50.8 |

## Amafayela

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Ukuhlela izici zesolid ezingeniswe ye-STEP (ifika ingenayo umlando) | Engeza noma usike impahla ngezici zakho |
| Ukufunda imibala, amagama, isakhiwo sezinhlanganisela kanye ne-PMI kusuka ku-STEP | Akutholakali |
| Ukuthumela i-glTF, OBJ, IGES, Parasolid; i-DWG yengxenye ye-3D (kuphela i-variant pack ibhala i-DWG: ishidi lemidwebo) | I-STL noma i-3MF yama-mesh; i-STEP yama-solid; i-DXF ye-2D |
| Ukuvula i-IGES, i-DXF noma amafayela ezinye izinhlelo (amafayela `.3dm` avula njengomzimba owodwa: [Vula imodeli ye-.3dm njengomzimba oqinile](topic:open-3dm-files)) | Cela i-STEP, noma i-STL, OBJ noma i-3MF evaliwe: [Vula i-STL, i-OBJ noma i-3MF](topic:open-meshes) |
| Isakhiwo sezinhlanganisela (isihlahla namagama engxenye) ku-STEP ethunyelwe | I-STEP yenhlanganisela iyisakhiwo esisodwa sama-solid abekiwe |
| Ukugcina endaweni oyikhethayo ngaphandle kokudawuniloda kwesiphequluli | Vula "ask where to save" ezilungiselelweni zokudawuniloda zesiphequluli |

## Imidwebo

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Izilinganiso ngaphezu kwezinkulu ezintathu zangaphandle (usayizi wembobo, izindawo, ukubekezelela kusayizi) | Maka i-PDF, noma thumela i-DXF uyilinganise ku-2D CAD |
| Ngaphezu kwesigaba esisodwa noma umbono oyodwa oqondile; imibono eyodwa ngesigaba esisodwa nomnyango ngamunye ngomdwebo | Isigaba esisodwa nomcibisholo owodwa ngomdwebo ngamunye |
| Umbhalo wokhululekile, amanothi nezitebhulethi ebhodini (ngaphandle kwebhulokhi lesihloko nelokuguqulwa) | Inothi lokuqedwa, noma umbhalo ongezwe ku-PDF |
| Ukuprojekhthela kwe-first-angle, imibono enyakazayo, amashidi aphakanyiswe | I-third angle, indawo yokuhlela ezenzakalelayo, amashidi aphansi A4–A0 nama-ANSI A–E |
| Isigaba esiphilayo: izindiza eziningi noma ibhokisi lesigaba ngesikhathi esisodwa, umkhawulo ozungeze isigaba, ukonga isigaba efayelini | Indiza eyodwa ngesikhathi kusuka ku-{{ui:Imibono}} › {{ui:Umbono wesigaba}}; bona [Look inside with a section view](topic:section-view) |
| Imidwebo yezinhlanganisela enemibono, izilinganiso noma amabhalo engiwe | Umbono oyodwa we-isometric (noma wokuqhekeka) nama-balloon azenzakalelayo nohlu lwezingxenye |
| Ukukopisha nokunamathisela izimpawu ze-GD&T nokuqeda | Beka ngayinye nge-Datum, Frame noma Finish |
| Izinkondlo: amafayela e-STEP ku-{{ui:Kusuka kwenye ifayela…}} ka-Illustrate, imodeli eshayelwa ngqo kusuka ku-ModelCraft noma i-BimCraft, izithombe zomgomo we-path tracer, i-3D ehlanganyelwe ngaphakathi kwe-PDF | Vula i-STEP ku-Design bese uqala inkondlo ngo-{{ui:Kusuka engxenyeni evulekile}}; londoloza imodeli njenge-glTF (.glb); izithombe ze-PNG zombono we-3D; ifayela le-3D elihlanganyelwe: bona [Start a manual in Illustrate](topic:illustrate) |

## Izinhlanganisela

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Amagiya, izinhlangano zerack, cam kanye nezikulufo; ijoyinti lebhola elikhawulelwe ku-cone; amajoyinti ezindawo ezijikelezayo noma phakathi kwamaphoyinti | Amajoyinti aqinile, ajikelezayo, aguqukayo, ama-cylindrical, ama-planar, ebhola nezikhala ze-pin-in-slot ezindaweni ezicaba, ngayinye inamakhawulo ayo: bona [Build an assembly](topic:build-assembly) |
| Izinyathelo ezihlukanisayo ezijikeleza izingxenye, nokudonsa izingxenye ezibekwe ngamajoyinti | Izinyathelo ezihlukanisayo eziqondile; susa ijoyinti ukuze uhambise ingxenye ngesandla |
| Izinhlanganisela ezingaphansi | Izingxenye zezinga elilodwa kuphela |
| Amagiya, ama-cam, ukuthintana | Akutholakali |

## Ukukhiqiza

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Ukuhlanza kwe-3D kwezindawo ezijikelezayo, ukuhlanza okuzivumelanisayo nge-3D, ukuhlanza okuseleyo; ukwenza ngamapasi e-waterline, pencil, radial ne-spiral; amapasi ahlanzayo abhalwa njengama-arc | 2.5-axis face, pocket, 2D adaptive, contour, drill kanye ne-chamfer: bona [Make toolpaths and G-code](topic:manufacture); ukuqeda ngokufana nangokuscallop kwemodeli yonke: bona [3D finishing](topic:finish-3d) |
| Amaphathi e-4- nama-5-axis, ukutshala, ukuhlola | Lungisa uhlangothi olulodwa ngesikhathi nomugqa wethuluzi kuthebhu lokusetha |
| Ukuhlolwa kokungqubuzana kwesibambi nesiqu | Qaphela izexwayiso zobude be-flute bese uhlola kusimulator yesilawuli sakho |
| Ukuhlolwa kwamaprobe, izimpilo zamathuluzi nemijikelezo yezinhlelo ezingaphansi kwe-post; ukulayisha amafayela e-post ezinye izinhlelo | Bhala noma guqula i-post ngefomethi yePartCraft: bona [Post processors you can edit](topic:post-processors) |
| I-G-code ngamayintshi (G20) | Amamilimitha (G21) kuphela |

## Ukulingisa nokwakha kwedizayini

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Izifundo ezingelinear: ukukhiqizwa, ukuguquka okukhulu, ukuthintana phakathi kwezingxenye, ukukhathala | I-linear static kanye nezinzwa zemvelo: bona [Check stress and deflection](topic:simulation); gcina isilinganiso sokuphepha sikhulu kakhulu kuno-1 |
| Ukuhlehla kwe-buckling engelinear (ukungafani, i-post-buckling, i-snap-through) | Izinombolo zokuhlehla ze-linear buckling ngomphetho omkhulu: bona [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Imitha phakathi kwamabuso (view factors), ukumelana kokuthintana, izinto ezincike ezingeni lokushisa, ukungazinzi ekucindezelekeni kokushisa (amagagasi okushisa okuqhuma) | Imitha kuya ezungezile, ukucindezeleka okuzinzile noma okuqhubekayo kokushisa ngesikhathi, izakhiwo ezingashintshi: bona [Heat, thermal stress and buckling](topic:thermal-and-buckling) |
| Ukuthuthukiswa okuzenzakalelayo kwezifundo zokushisa ezidlulayo nezinhlobo ezinomthwalo wokushisa; ukwenza umesh ube mncane lapho iphutha lincane; inhloso kwinani lendawo (ukucindezeleka okuphezulu endaweni eyodwa) | **Refine automatically** kwezifundo ezimile, zokuhlehla, zefrikhwensi yemvelo nezokushisa okuzinzile, ngephutha phezu kwengxenye yonke: bona [Check stress and deflection](topic:simulation); noma yehlisa usayizi wenhlayiya |
| Imithwalo yamabheringi nemibhoxo, imithwalo ekude, izikhathi, izintambo, izinkulumo zokuhamba ezibekiwe | Izinamba nemigcinezelo ezinhlangothini, ukudonsa kwegravithi; izinhlangothi ezimisiwe nezingenayo ukuhwebelana |
| Ukulingisa kwezinhlanganisela; izinto eziyahlukahluka ngokuqondisa (izingqimba ezishicilelwe, ama-composite) | Ingxenye eyodwa, izinto ezinye ezingashintshi |
| Izinsizi zesixazululi eziningi zezifundo ze-tetrahedral, ukudluliswa kokushisa nokwakhiwa kwedizayini okuzenzakalelayo; izinsizi kukhasi elingenayo i-cross-origin isolation | Izifundo ze-voxel, i-buckling, ukucindezeleka ngesikhathi nokugeleza okunolaka kusebenzisa izinsizi lapho ikhasi livumela: bona [PartCraft settings](topic:settings) |
| Ukugeleza okunamagagasi nokunembe kokwakheka (imodeli ye-Spalart–Allmaras ingeniwe njengeyokuhlola: ukumelana kwepayipi kwe-30 kuya ku-34 % ephezulu, ukuhlangana kwe-backward-step kwe-21 kuya ku-39 % kufushane; kuhlelwe: amaseli amahle eduze namadonga), ukushisa ekugelezeni, ukugeleza okungazinzile (ngesikhathi esinembile), izindawo ezikhululekile, izinhlobo ze-non-Newtonian, izingxenye ezijikelezayo | Ukugeleza okunolaka, okuzinzile, okungashintshi izinga lokushisa kolwelo lwe-Newtonian, noma imodeli yamanje yenyeka yokubonisa iziphethu: bona [Simulate fluid flow](topic:flow-simulation); iphaneli ixwayisa lapho inombolo ye-Reynolds idlula ukunolaka |
| Imingcele yokucindezeleka nemithetho yokukhiqiza (ama-overhang, izinqondiso zokugaya) ekwakhiweni kwedizayini okuzenzakalelayo; izinto eziningi kuwo wonke umumo | Umumo oqinile kakhulu kuvolumu; hlola umphumela ekulinganiseni: bona [Grow a shape from loads](topic:generative-design) |
| Umphumela njengesolid esihlelekayo (esibushelelezi, esinemingcele) | STL, i-STEP enama-facet noma ingxenye enomphumela njengesolid esingeniswe esinama-facet |
| Injini yomshini kagesi: irotha ejikeleza kusitatha, ukuwoyela ngokungafani nama-engeli, insimbi egcwele, amamagnethi alahlekelwa amandla angaphezu kwamawele awo, ama-eddy currents nokulahlekelwa kwensimbi nongqinamba; izinkambu zomagnethi ngo-3-D noma emeshini ejikelezayo | Ukulinganisa okulinganiselwe kwe-2-D kwamagnethi kwigridi kumtapo wokuhlaziya: izinsimbi, insimbi, amamagnethi ahlala njalo esiphethweni sawo sokubuyela, amagebe, i-inductance kanye nokudonsa: bona [Magnetic fields in 2-D](topic:magnetic-fields-2d) |

## Izikripthi

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Usizo lokuhlanganisa, izikhawu nokungena ohlelweni lwe-script | Ukuthola, ukugoqa nokuqedela kukhona (bona [Write and run scripts](topic:craftscript)); okunye, umhleli wakho: {{ui:Londoloza}} no-{{ui:Vula}} kweqembu le-Script bayangenisa nakuphume izikripthi; imisebenzi yangaphakathi ihlinzeka kuthi [The CraftScript language](topic:craftscript-language) |
| Izikhawu nokungena ngesikripthi | `disp` no-`fprintf` ohambweni; {{key:Mod+Enter}} iqhuba imigqa embalwa ekhethiwe ngesikhathi esisodwa |
| Izinkambu namapuloti esikripthi esiwabonisa emsebenzini wedizayini; izikripthi eziguqula imingcele yengxenye | Zibonakala emsebenzini we-Script; izikripthi zifunda imingcele nge-`param` (bona [Write and run scripts](topic:craftscript)), zishintshe ethebhulethini le-{{ui:Imingcele}} |
| Izithombe nezitebhulethi ngokuhlangana namapuloti; ukuhlela iphuloti (ukuzoomela, imikhawulo yeaksi) ngaphambi kokulonga | Ngokuhlanganyela kubonisa amapuloti; londoloza iphuloti njenge-PNG, SVG noma CSV bese uqeda kwenye indawo |
| I-numpy nezinye izikhwama ze-Python; i-Python ngaphandle kwe-inthanethi; ukufaka i-Python kumhleli; i-Pascal Script | Ilabhulari elijwayelekile le-Python, i-CraftScript ne-Lua: bona [Scripts in Python](topic:craftscript-python) |
| Ukudlulisa imisebenzi ye-Lua kumisebenzi yangaphakathi; ukubiza umsebenzi welabhulari ngegama elakhiwe ngesikhathi isikripthi sisebenza | Bhala igama lomsebenzi welabhulari esikripthini (`cs.static_tet(…)`), noma ubize kusikripthi se-CraftScript |

## I-app

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Ukugcina kuleyo, ukwabelana nomlando wenguqulo | Akutholakali okwamanje. Gcina amafayela kukhompyutha yakho futhi ugcine izinguqulo ngamagama |
| I-PartCraft njenge-app efakiwe ku-iPad nasei-iPhone | Sebenzisa i-PartCraft kusiphequluli sedivayisi; ku-Android nasedeskithophu isebenza nakwi-CadCraft Studio (getcadcraft.com/download) |
| Imenyu yokudweba (eyokuchofoza ngokudla) | Ithuluzi lokuthobela nephaneli esekudla |
| Ukusebenza ngokuphelele ngaphandle kwe-inthanethi kusuka ekuqaleni | Kuphela uma i-app igcinelwe ukusetshenziswa ngaphandle kwe-inthanethi: bona [Working offline](common:offline) |

Bika ngalokho ongakukhumbula kakhulu ngekhasi lokusekelwa lwesayithi: lokho kuyabumba okuzayo.

## Engineer (abakhiqizi namasimu)

| Akukakwakhiwa | Esikhundleni salokhu, namuhla |
|---|---|
| Amakhanda, amachweba nezixhumanisi ku-exchanger yokushisa eyakhiwe; amajika ezinga lokushisa lamandla ezinto; ukulahleka kwe-tee emanifoldini | Abakhiqizi bakha umqondo namathubhu; engeza izixhumanisi ku-Design; sebenzisa izibalo zezinto zezinga lokushisa lekamelo nokuphepha okulinganiselwe |
| Ukwengeza abakhiqizi ohlwini lwe-add-on ngocofo olulodwa | {{ui:Vula}} ku-workspace ye-Engineer yengeza umkhiqizi kusuka kwifayela |
| Ifayela lensimu elincane kunebanga lesikhombiphikseli somkhiqizi; ukufunda amafayela `.vdb` | Londoloza insimu ebushelelezi kusuka ku-script; i-`.vdb` ibhalwa, ayifundwa |
| Izibalo zekhodi yesitsha sokucindezela | Amafomula okudonsa-thin-wall nethick-wall esemqondweni, nokuphepha okukhethwe nguwe; hhayi ukuphepha kwekhodi |
| Abakhiqizi bezinye izinhlelo | I-PartCraft kuphela kulolu hlobo |
