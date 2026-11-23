---
title: Bado hakijajengwa
summary: Kila kitu ambacho build hii ya PartCraft bado haifanyi, kuanzia sweep zilizopinda hadi onyesho la inchi, michoro ya vipimo na mikusanyiko midogo, pamoja na kile cha kufanya badala yake leo.
keywords: inayokosekana, bado, mipaka, vikwazo, ramani ya njia, kernel halisi, fillet, chamfer, shell, sweep, loft, kuingiza step, uigaji, utengenezaji, sweep iliyopinda, mguso wa mwisho wa loft, fillet ya uso, milinganyo, inchi, vipimo vya michoro, mikusanyiko midogo, wingu, kompyuta kibao, simu
from: 97b10a29
---

PartCraft ni build ya mapema. Ukurasa huu unaorodhesha kisichofanya bado, ili usikitafute, na kile cha kufanya badala yake leo. Hakuna chochote hapa kina tarehe.

## Inahitaji kernel halisi

Toleo hili hujenga kila sehemu kwa kernel ya mesh (angalia [Kernel ya mesh](topic:solid-kernels)). Kila kitu kilicho hapa chini kinahitaji kernel halisi ya jiometri, ambayo toleo hili bado halina. Sehemu zilizohifadhiwa na vipengele hivi bado hufunguka: vipengele vinabaki kwenye historia, vikiwa na alama ya kutojengwa, na vinahifadhiwa unapohifadhi.

| Bado haijajengwa | Badala yake, leo |
|---|---|
| {{ui:Fillet}} na {{ui:Chamfer}} kwenye kingo zilizo duara; fillet ambazo radius yake inabadilika kando ya kingo; mizunguko iliyochanganywa vizuri pale zinapokutana (kernel ya mesh inazikata kwa mtindo wa mitre) | Fillet na Chamfer zinafanya kazi kwenye kingo zilizonyooka kati ya nyuso tambarare; zungusha kona nyingine kwenye mchoro kabla ya kutoa ({{ui:Fillet}} kwenye mchoro, {{key:F}}) |
| {{ui:Shell}} inayofungua nyuso zilizopinda; kuta za unene tofauti | Fungua nyuso tambarare; ongeza nyenzo kwa extrude pale ukuta unapohitaji kuwa mnene zaidi |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Mteremko}} kwenye nyuso zilizopinda; extrude hadi uso, uso unaofuata au kipeo; extrude zilizopunguka | Extrude au zungusha, kwa hatua pale inapohitajika; extrude hadi kina unachopima |
| {{ui:Mbavu}}, {{ui:Flensi ya msingi}}, {{ui:Flensi ya ukingo}} na mifumo tambarare | Extrude bamba au wasifu wa mbavu |
| Nyuso: kumaliza {{ui:Umbo}} ndani ya sehemu, {{ui:Kiraka}}, {{ui:Loft ya uso}}, {{ui:Uso wa Gordon}}, {{ui:Shona}}, {{ui:Nenepesha}}, {{ui:Hamisha uso}}, {{ui:Ongeza uso}}, {{ui:Punguza uso}} | Haipatikani |
| Miili kadhaa: {{ui:Unganisha}}, {{ui:Hamisha mwili}}, {{ui:Badilisha ukubwa wa mwili}}, {{ui:Mfululizo wa njia}}, vipengele vinavyotengeneza mwili mpya | Kigumu kimoja; mifumo na vipengele vya nakala ya kioo |
| Michoro, ndege, shoka na nukta kwenye nyuso ambazo kernel halisi pekee inaweza kuzipata (uso ulioundwa na fillet, ukuta wa tundu, uso wa kigumu kilichoingizwa) | Chora kwenye ndege za msingi, ndege za marejeo na nyuso tambarare za extrude na mizunguko |
| Matokeo ya muundo wa kizazi yaliyofunguliwa kama sehemu au kuongezwa kwake (yanakuwa kigumu kilichoingizwa) | Pakua matokeo kama STL au STEP |
| Kuhariri nyuso zilizopinda za faili ya STEP iliyofunguliwa kama nyuso halisi; STEP halisi ya nyuso za spline, zilizosukumwa na zilizozungushwa kutoka faili ya STEP, pande za spline, nyuzi zilizomodeliwa, miili ya STL / OBJ / 3MF na mikusanyiko; STEP kwa wahariri wengine wa sehemu | {{ui:Fungua}} inasoma STEP kama pembetatu na inahifadhi nyuso tambarare, silinda, koni, duara na torus za faili kwa ajili ya usafirishaji ([Fungua faili ya STEP](topic:import-step)); {{ui:Hamisha nje}} › {{ui:STEP AP242 (kigumu sahihi)}} inaandika kila uso wa kichanganuzi kwa usahihi na kuweka hizo kama facets ([Hamisha](topic:export-files#for-other-cad-programs-step)); macro kwa mhariri mwingine wa sehemu bado inaandika |
| Matao halisi kwenye mionekano ya michoro | Mionekano na mionekano ya sehemu ya mkato zinachorwa kutoka facets |
| Ujazo, eneo na umbali halisi | {{ui:Pima}} inatoa namba za kigumu chenye facets, kidogo chini kwa sehemu za duara; mpangilio wa **Mikunjo** wa usahihi zaidi unazisogeza karibu |

Baadhi ya safu kwenye majedwali hapa chini zinapendekeza mojawapo ya vipengele hivi kama njia ya kuzunguka kitu kingine. Mapendekezo hayo yanatumika mara kernel halisi itakaporudi.

## Vipengele

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Fillet za uso, fillet za duara kamili, fillet zenye radius zilizowekwa kwenye nukta kando ya kingo | {{ui:Fillet}} yenye radius thabiti au inayobadilika kwa mstari; vipengele kadhaa vya fillet |
| Shell zenye unene tofauti wa kuta | Unene mmoja wa {{ui:Shell}}; ongeza nyenzo kwa extrude pale ukuta unapohitaji kuwa mnene zaidi |
| {{ui:Mteremko}} kwenye nyuso huru (spline) | {{ui:Mteremko}} inafanya kazi kwenye nyuso tambarare, za silinda na koni |
| Sweep zinazopinda, sweep za ukuta mwembamba na za uso; mguso wa mwisho kwenye kipengele cha Loft; loft yenye reli moja ya mwongozo; njia za spline | {{ui:Sweep}} yenye mwelekeo uliowekwa au kipimo cha mwisho; loft yenye reli mbili au zaidi za mwongozo: angalia [Sweep, loft na mteremko](topic:sweep-loft-draft) |
| Mbavu kutoka kwenye matao au spline; mbavu zinazokuzwa mraba kwa mchoro (kutoka mwonekano wa juu); mteremko kwenye mbavu; mbavu kadhaa kutoka mchoro mmoja | {{ui:Mbavu}} kutoka mnyororo mmoja wa mistari kwenye ndege yake yenyewe: angalia [Mbavu na gusset](topic:rib) |
| "Hadi" uso uliopinda, "hadi inayofuata" inayosimama kwenye uso uliopinda | Hadi uso tambarare au ndege ya marejeo |
| Matundu yaliyochimbwa mara mbili, nyuzi za inchi na za bomba, nyuzi zilizopunguka, mwisho wa nyuzi na mianzo ya nyuzi iliyokatwa pembe | Counterbore yenye kina kidogo; nyuzi za ISO metric na trapezoidal, za mapambo au zilizomodeliwa: angalia [Nyuzi kwenye shafti na matundu, zilizochorwa au zilizomodeliwa](topic:threads) |
| Extrude za kipengele chembamba | Chora kuta zote mbili za wasifu |
| Nakala za mfumo zinazoruka moja moja, mifumo ya kujaza | Tumia vipengele tofauti; mifumo kando ya mkunjo: {{ui:Mfululizo wa njia}} |
| Kunakili mifumo, vioo, fillet, chamfer, shell na vigumu vilivyoingizwa | Nakili mchoro au kipengele ambacho vimejengwa juu yake, au ufanye mfumo wake |
| Mguso halisi (G1) kwenye nukta maalum za umbo; kuunganisha viraka vya umbo kuwa nyuso kubwa | Ongeza Kiwango cha umbo: viraka vilivyokadiriwa vinakuwa vidogo; angalia [Maumbo huru kwa Umbo](topic:form-surfaces) |
| Umbo lililoundwa na vipande kadhaa vilivyofungwa kando katika kipengele kimoja; madaraja kati ya maumbo | Kipande kimoja kilichofungwa kwa kila kipengele cha Umbo; viunganishe kwa {{ui:Jiunge}} |
| Kuchagua miili ya uso kwenye mwonekano (isipokuwa nukta za kupunguza na za kiraka); fillet za uso; kufuta upunguzaji; viraka vya G2; nyuso za Gordon zinazogusa majirani waliopinda (mguso kwa ndege na nyuso tambarare umejengwa) | Zichague kwa jina kwenye paneli ya kipengele; nenepesha kwanza, kisha fillet kigumu |
| Orodha ya miili kwenye historia; kuacha miili iliyofichwa nje ya usafirishaji | Badilisha jina na ficha miili kwenye orodha ya miili ya paneli ya sehemu; futa au zima kipengele kilichotengeneza mwili ili kuiacha nje |
| Kipimo kisicho sawa kinachohifadhi silinda na koni kama za kichanganuzi; kipimo kisicho sawa cha nyuso zilizohamishwa | {{ui:Badilisha ukubwa wa mwili}} inafanya nyuso zilizopinda kuwa B-spline zilizofungwa (ndani ya 0.0000004 mm); kipimo sawa kinabaki halisi |
| Kuunganisha miili ya uso; jumla za Minkowski | {{ui:Shona}} au {{ui:Nenepesha}} kwanza, kisha {{ui:Unganisha}} |
| Uchambuzi wa uvumilivu: mrundikano unaogeuka kona (vitanzi vya vekta 2D na 3D), unyeti uliohesabiwa kutoka jiometri, Monte Carlo yenye usambazaji mwingine, uvumilivu wa ukubwa kwenye vipimo vya mchoro, uvumilivu wa ziada kutoka hali ya nyenzo | {{ui:Mrundikano wa uvumilivu}} kwenye mkusanyiko: mwelekeo mmoja, kesi mbaya zaidi na RSS, uvumilivu ulioandikwa, kutoka uvumilivu wa jumla wa kizuizi cha kichwa cha mchoro au kutoka fremu za GD&T: angalia [Mrundikano wa uvumilivu](topic:tolerance-stackup) |
| Upangaji: mpangilio wa kukata na kuingia, kukata kingo zilizoshirikiwa mara moja, sehemu zinazopaswa kubaki pamoja; mabaki ya roli, malighafi inayoshirikiwa kati ya miradi | {{ui:Panga sehemu bapa kwenye karatasi…}} pamoja na nafasi, pambizo, mizunguko na mwelekeo wa nafaka: angalia [Panga sehemu bapa kwenye karatasi](topic:nest-flat-parts); bamba zilizobaki zinahifadhiwa na kutumika kwanza: angalia [Hifadhi na tumia tena vipande vilivyobaki](topic:nest-offcuts); panga ukataji kwenye programu ya kikata chako mwenyewe |
| Chuma cha karatasi: pindo, jogs, flensi za mshazari na za kontua; flensi kwenye kingo zilizopinda au kwenye nyuso za flensi ya msingi iliyopindwa; mikunjo iliyochorwa; kufunga kona; zana za kuunda; kubadilisha kigumu kuwa chuma cha karatasi; upande tambarare wa flensi ya msingi iliyopindwa yenye mikato ndani yake; jedwali za mikunjo | {{ui:Flensi ya msingi}} (bamba au wasifu uliopindwa), {{ui:Flensi ya ukingo}} kwenye kingo zilizonyooka za bamba zenye unafuu wa mikunjo, na mfumo tambarare wenye K-factor: angalia [Chuma cha karatasi](topic:sheet-metal) |
| {{ui:Uchambuzi wa rasimu}} kwenye mikusanyiko; kutafuta mstari wa kugawanya; uchambuzi wa unene wa ukuta | {{ui:Uchambuzi wa rasimu}} kwenye sehemu katika Usanifu: angalia [Kagua mteremko kwa ukingo na kutupa](topic:draft-analysis); fungua kila sehemu ya mkusanyiko kuikagua |

## Michoro

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Duaradufu, matao ya tanjenti, koni, spline zenye kiwango au uzito uliowekwa (NURBS) | Spline (za ujazo), matao na miduara yenye mahusiano ya Tanjenti |
| Nukta kwenye spline (uhusiano), mahusiano ya mkunjo (G2) | Weka nukta yenyewe ya spline mahali inapopaswa kupita |
| Nakala za kukabiliana za spline zinazofuata mabadiliko ya baadaye; kukabiliana kwa minyororo yenye kona kali za spline | Fanya kukabiliana tena baada ya mabadiliko; zungusha kona kwanza |
| Nakala za mfumo zinazobaki zimeunganishwa na ya asili; mifumo kando ya mkunjo | Fanya mfumo tena baada ya mabadiliko |
| Kuweka makadirio ya kingo za duara huru au zilizoinama, jiometri iliyokadiriwa inayofuata sehemu | Weka makadirio ya kingo za duara zilizonyooka na sambamba, kisha pima |
| Vipimo vinavyoendeshwa (vya marejeo) | Soma ukubwa kutoka paneli au taarifa za sehemu |
| Mahusiano ya mstari mmoja (collinear) | Sambamba yenye umbali wa 0 |
| Kubandika kwenye programu nyingine (ubao wa kunakili wa mfumo) | Hamisha DXF, STEP, STL au 3MF |
| Kuandika matao, kuratibu jamaa au za polar | Andika mistari na miduara; chora matao kwa zana ya {{ui:Tao}} |
| Kuchagua jiometri bila kiashiria | Inahitaji bofya au mguso |

## Vigezo na vipimo

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Usanidi unaobadilisha nyenzo; jedwali la usanifu la CSV linalozima vipengele | Usanidi huweka vigezo na kuwasha au kuzima vipengele: angalia [Usanidi na jedwali za usanifu](topic:design-tables); `partcraft variants` hujenga usanidi uliohifadhiwa kwa jina, ikijumuisha vipengele vilivyozimwa: angalia [Tengeneza kifurushi cha tofauti kutoka usanidi wako](topic:variant-pack) |
| Milinganyo kwenye namba za paneli za vipengele vipya zaidi (ndege, sweep, mteremko na vinginevyo) | Yaandike kwenye script au kwa `partcraft set` ([Scripts na mstari wa amri](topic:scripts-and-cli)) |
| Sehemu inayoonyeshwa kwa inchi | Ukubwa unaonyeshwa kwa milimita; andika `2in` kwenye kisanduku cha namba au usemi nao utakuwa 50.8 |

## Faili

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Kuhariri vipengele vya kigumu cha STEP kilichoingizwa (kinafika bila historia) | Ongeza au kata nyenzo kwa vipengele vyako mwenyewe |
| Kusoma rangi, majina, muundo wa mkusanyiko na PMI kutoka STEP | Haipatikani |
| Usafirishaji wa glTF, OBJ, IGES, Parasolid; DWG ya sehemu ya 3D (kifurushi cha tofauti pekee ndicho kinaandika DWG: karatasi ya mchoro) | STL au 3MF kwa mesh; STEP kwa vigumu; DXF kwa 2D |
| Kufungua IGES, DXF au faili za programu nyingine (faili za `.3dm` hufunguka kama mwili mmoja: [Fungua modeli ya .3dm kama mwili mgumu](topic:open-3dm-files)) | Omba STEP, au mesh ya STL, OBJ au 3MF iliyofungwa: [Fungua STL, OBJ au 3MF](topic:open-meshes) |
| Muundo wa mkusanyiko (mti wenye majina ya sehemu) kwenye STEP iliyohamishwa | STEP ya mkusanyiko ni mchanganyiko mmoja wa vigumu vilivyowekwa |
| Kuhifadhi kwenye folda unayochagua bila upakuaji wa kivinjari | Washa "uliza mahali pa kuhifadhi" kwenye mipangilio ya upakuaji wa kivinjari |

## Michoro

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Vipimo zaidi ya ukubwa mitatu wa jumla (ukubwa wa matundu, nafasi, uvumilivu wa ukubwa) | Weka alama kwenye PDF, au hamisha DXF na upime kwenye programu ya CAD ya 2D |
| Zaidi ya sehemu moja ya mkato au undani mmoja; mionekano iliyopangwa, iliyovunjwa na msaidizi | Sehemu moja ya mkato na undani mmoja kwa kila mchoro |
| Maandishi huru, maelezo na jedwali kwenye karatasi (isipokuwa vizuizi vya kichwa na marekebisho) | Dokezo la umaliziaji, au maandishi yaliyoongezwa kwenye PDF |
| Makadirio ya pembe ya kwanza, mionekano inayosogea, karatasi wima | Pembe ya tatu, mpangilio wa kiotomatiki, karatasi za mlalo A4–A0 na ANSI A–E |
| Mwonekano hai wa sehemu ya mkato: ndege kadhaa au kisanduku cha sehemu kwa wakati mmoja, mstari wa nje kuzunguka mkato, kuhifadhi sehemu ya mkato kwenye faili | Ndege moja kwa wakati kutoka {{ui:Mionekano}} › {{ui:Mwonekano wa sehemu ya mkato}}; angalia [Tazama ndani kwa mwonekano wa sehemu ya mkato](topic:section-view) |
| Michoro ya mkusanyiko yenye mionekano, vipimo au puto zaidi unazoweza kusogeza | Mwonekano mmoja wa isometric (au uliotenganishwa) wenye puto za kiotomatiki na orodha ya sehemu |
| Kunakili na kubandika alama za GD&T na za umaliziaji | Weka kila moja kwa Datum, Fremu au Umaliziaji |
| Miongozo: faili za STEP katika {{ui:Kutoka faili nyingine…}} ya Illustrate, modeli inayotoka moja kwa moja kutoka ModelCraft au BimCraft, picha katika ubora wa path tracer, 3D shirikishi ndani ya PDF | Fungua STEP katika Usanifu na uanzishe mwongozo kwa {{ui:Kutoka sehemu iliyofunguliwa}}; hifadhi modeli kama glTF (.glb); picha za PNG za mwonekano wa 3D; faili ya 3D shirikishi: angalia [Anzisha mwongozo katika Illustrate](topic:illustrate) |

## Mikusanyiko

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Viungio vya gia, rack, cam na skrubu; kiungio cha mpira kilichofungwa kwenye koni; viungio kwenye nyuso zilizopinda au kati ya nukta | Viungio vigumu, vya kuzunguka, vya kuteleza, vya silinda, vya ndege, vya mpira na vya pini-kwenye-mpasuo kwenye nyuso tambarare, kila thamani ikiwa na mipaka yake: angalia [Jenga mkusanyiko](topic:build-assembly) |
| Hatua za kutenganisha zinazogeuza sehemu, na kuburuta sehemu ambazo viungio vinaziweka | Hatua za kutenganisha zilizonyooka; ondoa kiungio ili kusogeza sehemu kwa mkono |
| Sehemu ndogo za mkusanyiko | Ngazi moja ya sehemu pekee |
| Gia, cam, mguso | Haipatikani |

## Utengenezaji

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Usafishaji unaojirekebisha wa 3D na ukataji wa kukabiliana wa 3D; umaliziaji wa waterline, penseli, radial na spiral; pita za adaptive zilizoandikwa kama matao | Ukataji mbaya wa 3D kwa safu zilizonyooka na ukataji wa mabaki: angalia [Ukataji mbaya wa 3D na wa mabaki](topic:rough-3d); umaliziaji wa Sambamba na Scallop: angalia [Umaliziaji wa 3D](topic:finish-3d); uso, pocket, adaptive ya 2D, contour, kuchimba na chamfer za mihimili 2.5: angalia [Tengeneza njia za zana na G-code](topic:manufacture) |
| Ukataji wa swarf, njia za flow-line na za ukataji mbaya wa shoka nyingi, misimbo ya ndege ya kazi iliyoinama (G68.2), ukaguzi wa migongano ya mshikio na mashine; uigaji wa mikato ya shoka 5 na ya mzunguko | Zana iliyoinama kwa operesheni yoyote, umaliziaji wa shoka 5 kwa kikata cha ncha ya duara na umaliziaji wa mzunguko wa shoka ya 4: angalia [Uchakataji wa shoka 4 na 5](topic:multi-axis) |
| Kuchosha na nyuzi za ndani kwenye lathe, mizunguko ya G71/G76, matao kwenye njia za kugeuza, zana hai, spindle ndogo | Kugeuza kwa nje: uso, mbaya, umaliziaji, mtaro, kukata kipande, uzi, kuchimba katikati: angalia [Kugeuza kwenye lathe](topic:turning) |
| Kuchunguza pembe au kona, kipimo cha zana, kupima ukubwa dhidi ya uvumilivu | Kuchunguza uso, upande, tundu au kiinuko ili kuweka kukabiliana kwa kazi: angalia [Kuchunguza](topic:probing) |
| Ukaguzi wa migongano ya mshikio na shank | Angalia onyo za urefu wa mkato na kagua kwenye kiigaji cha kidhibiti chako |
| Mizunguko ya maisha ya zana na ya subprogram kwenye post; kupakia faili za post za programu nyingine | Andika au badilisha post katika muundo wa PartCraft: angalia [Vichakataji vya post unavyoweza kuhariri](topic:post-processors) |
| G-code ya inchi (G20) | Milimita (G21) pekee |

## Uigaji na muundo wa kizazi

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Tafiti zisizo za mstari: kufikia kikomo cha kukubali (yield), mikengeuko mikubwa, mguso kati ya sehemu, uchovu | Tuli ya mstari na masafa asilia: angalia [Kagua msongo na mkengeuko](topic:simulation); weka kipengele cha usalama juu zaidi ya 1 |
| Kujikunja kisicho cha mstari (kasoro, kujikunja baada ya kwanza, kuruka ghafla) | Vipengele vya mzigo wa kujikunja vya mstari kwa ukingo mpana: angalia [Joto, msongo wa joto na kujikunja](topic:thermal-and-buckling) |
| Mionzi kati ya nyuso (vipengele vya kuona), upinzani wa mguso, nyenzo zinazotegemea joto, ajizi katika msongo wa joto (mawimbi ya mshtuko wa joto) | Mionzi kwa mazingira, msongo wa joto tulivu au wa karibu-tuli kwa muda, sifa thabiti: angalia [Joto, msongo wa joto na kujikunja](topic:thermal-and-buckling) |
| Uboreshaji wa kiotomatiki kwa joto la mpito na tafiti zenye mzigo wa joto; kufanya mesh ikubwe zaidi pale kosa ni dogo; lengo kwa kiasi cha ndani (msongo wa kilele mahali pamoja) | **Boresha kiotomatiki** kwa tafiti tuli, za kujikunja, za masafa asilia na za joto tulivu, kwa kosa juu ya sehemu yote: angalia [Kagua msongo na mkengeuko](topic:simulation); vinginevyo punguza ukubwa wa kipengele |
| Mizigo ya kuzaa na ya bolti, nguvu za mbali, momenti, springi, mikengeuko iliyowekwa | Nguvu na shinikizo kwenye nyuso, mvuto; nyuso zilizowekwa na zisizo na msuguano |
| Uigaji wa mikusanyiko; nyenzo zinazotofautiana kwa mwelekeo (tabaka zilizochapishwa, composites) | Sehemu moja, nyenzo moja ya isotropiki |
| Nyuzi kadhaa za solver kwa tafiti za tetrahedral, uhamishaji wa joto na muundo wa kizazi; nyuzi zozote kwenye ukurasa usiotengwa cross-origin | Tafiti za voxel, kujikunja, msongo kwa muda na mtiririko wa laminar hutumia nyuzi pale ukurasa unaporuhusu: angalia [Mipangilio ya PartCraft](topic:settings) |
| Mtiririko wa msukosuko wenye usahihi wa muundo (modeli ya Spalart–Allmaras imo kama ya majaribio: msuguano wa bomba 30 hadi 34 % juu zaidi, kuunganishwa tena kwa hatua ya nyuma 21 hadi 39 % fupi; imepangwa: seli bora karibu na kuta); joto kwenye mtiririko, mtiririko usio thabiti (wa muda sahihi), nyuso huru, vimiminika visivyo vya Newton, sehemu zinazozunguka | Mtiririko wa laminar, tulivu, wa joto moja wa kimiminika cha Newton, au modeli ya msukosuko ya majaribio kwa mifumo ya kiubora: angalia [Iga mtiririko wa kimiminika](topic:flow-simulation); paneli inaonya Reynolds inapopita laminar |
| Vikomo vya msongo na kanuni za utengenezaji (mikunjo ya kupita, mielekeo ya kusaga) katika muundo wa kizazi; nyenzo kadhaa katika umbo moja | Umbo gumu zaidi kwa ujazo; kagua matokeo kwenye Uigaji: angalia [Kuza umbo kutoka mizigo](topic:generative-design) |
| Matokeo kama kigumu kinachoharirika (laini, cha kiparamita) | STL, STEP yenye facets au sehemu yenye matokeo kama kigumu chenye facets kilichoingizwa |
| Usanifu wa mashine za umeme: rota inayozunguka ndani ya stata, torque dhidi ya pembe, chuma kilichojaa, sumaku zinazopoteza nguvu baada ya goti lao, mikondo ya eddy na hasara za chuma na shaba; sehemu za sumaku katika 3-D au kwenye mesh zilizopinda | Magnetostatiki ya mstari ya 2-D kwenye gridi katika maktaba ya uchambuzi: koili, chuma, sumaku za kudumu kwenye mstari wao wa kurudi nyuma, mapengo, inductance na nguvu ya kuvuta: angalia [Sehemu za sumaku katika 2-D](topic:magnetic-fields-2d) |

## Scripts

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Msaada wa kuelea juu ya kipanya, vituo vya kusimama na kuendelea hatua kwa hatua kwenye mhariri wa script | Tafuta, kukunja na kukamilisha vipo (angalia [Andika na endesha scripts](topic:craftscript)); kwa mengine, tumia mhariri wako mwenyewe: {{ui:Hifadhi}} na {{ui:Fungua}} kwenye kikundi cha Script huingiza na kutoa scripts; kazi zilizojengwa ndani zimeorodheshwa kwenye [Lugha ya CraftScript](topic:craftscript-language) |
| Vituo vya kusimama na kupitia script hatua kwa hatua | `disp` na `fprintf` njiani; {{key:Mod+Enter}} huendesha mistari michache iliyochaguliwa kwa wakati mmoja |
| Sehemu na michoro ya grafu ambayo script inaonyesha ikichorwa kwenye eneo kazi la Usanifu; scripts zinazobadilisha vigezo vya sehemu | Zinaonekana kwenye eneo kazi la Script; scripts husoma vigezo kwa `param` (angalia [Andika na endesha scripts](topic:craftscript)), zibadilishe kwenye kichupo cha {{ui:Vigezo}} |
| Picha na jedwali pamoja na grafu; kuhariri grafu (kukuza, mipaka ya mhimili) kabla ya kuihifadhi | Upande kwa upande huonyesha grafu; hifadhi grafu kama PNG, SVG au CSV na uimalize mahali pengine |
| numpy na pakiti nyingine za Python; Python nje ya mtandao; kukunja Python kwenye mhariri; Pascal Script | Maktaba ya kawaida ya Python, CraftScript na Lua: angalia [Scripts katika Python](topic:craftscript-python) |
| Kupitisha kazi za Lua kwa kazi zilizojengwa ndani; kuita kazi ya maktaba kutoka Lua kwa jina lililojengwa wakati script inaendeshwa | Andika jina la kazi ya maktaba kwenye script (`cs.static_tet(…)`), au iite kutoka script ya CraftScript |

## Programu

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Kuhifadhi kwenye wingu, kushiriki na historia ya matoleo | Bado haipatikani. Hifadhi faili kwenye kompyuta yako na weka matoleo kwa jina |
| PartCraft kama programu iliyosakinishwa kwenye iPad na iPhone | Tumia PartCraft kwenye kivinjari cha kifaa; kwenye Android na kwenye kompyuta ya mezani pia inaendeshwa kwenye CadCraft Studio (getcadcraft.com/download) |
| Menyu za muktadha (kubofya kulia) | Upau wa zana na paneli ya kulia |
| Kufanya kazi kikamilifu nje ya mtandao tangu mwanzo | Pale tu programu inapokuwa imehifadhiwa kwa matumizi nje ya mtandao: angalia [Kufanya kazi nje ya mtandao](common:offline) |

Ripoti unachokikosa zaidi kupitia ukurasa wa usaidizi wa tovuti: kinaunda kinachofuata.

## Mhandisi (jenereta na nyanja)

| Bado haijajengwa | Badala yake, leo |
|---|---|
| Vichwa, milango na viungio kwenye kibadilisha joto kilichozalishwa; mikunjo ya joto kwa nguvu ya nyenzo; hasara za tee kwenye manifold | Jenereta hujenga kiini na mirija; ongeza viungio katika Usanifu; tumia takwimu za joto la chumba za nyenzo pamoja na kipengele cha usalama |
| Kuongeza jenereta kutoka saraka ya programu-jalizi kwa bofya moja | {{ui:Fungua}} kwenye eneo kazi la Mhandisi huongeza jenereta kutoka faili |
| Faili ya nyanja nzuri zaidi kuliko ukubwa wa voxel wa jenereta yenyewe; kusoma faili za `.vdb` | Hifadhi nyanja nzuri zaidi kutoka script; `.vdb` inaandikwa, haisomwi |
| Hesabu za kanuni ya chombo cha shinikizo | Fomula za kitabu za ukuta mwembamba na mzito, pamoja na kipengele cha usalama unachochagua; si ukingo wa kanuni |
| Jenereta za programu nyingine | PartCraft pekee katika toleo hili |
