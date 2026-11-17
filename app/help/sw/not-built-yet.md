---
title: Kisichojengwa bado
summary: Kila kitu ambacho toleo hili la PartCraft bado halifanyi, kuanzia sweeps za kusokota hadi onyesho la inchi, vipimo vya michoro na sub-assemblies, pamoja na kile cha kufanya badala yake leo.
keywords: kukosekana, bado, mipaka, vikwazo, ramani ya njia, kernel sahihi, fillet, chamfer, shell, sweep, loft, kuingiza STEP, simulation, manufacture, twist sweep, loft end tangency, face fillet, milinganyo, inchi, vipimo vya michoro, sub-assemblies, wingu, tablet, simu
from: 9b868162
---

PartCraft ni toleo la awali. Ukurasa huu unaorodhesha yale ambayo haifanyi bado, ili usiyatafute, na kile cha kufanya badala yake leo. Hakuna hata moja lenye tarehe.

## Inahitaji kernel sahihi

Toleo hili hujenga kila sehemu kwa mesh kernel (angalia [Kernel ya mesh](topic:solid-kernels)). Kila kilicho hapa chini kinahitaji kernel sahihi ya jiometri, ambayo toleo hili bado halina. Sehemu zilizohifadhiwa kwa vipengele hivi bado hufunguka: vipengele hubaki kwenye historia, vimewekwa alama kuwa havijajengwa, na huhifadhiwa unapohifadhi.

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| {{ui:Fillet}} na {{ui:Chamfer}} kwenye kingo za mviringo; fillet ambazo radius yake hubadilika kando ya ukingo; mizunguko iliyochanganywa kwa ulaini inapokutana (mesh kernel huzikata kwa mshazari) | Fillet na Chamfer hufanya kazi kwenye kingo zilizonyooka kati ya nyuso bapa; zungusha pembe nyingine kwenye mchoro kabla ya kutoa extrude ({{ui:Fillet}} kwenye mchoro, {{key:F}}) |
| {{ui:Shell}} inayofungua nyuso zilizopinda; kuta zenye unene tofauti | Fungua nyuso bapa; ongeza nyenzo kwa extrudes pale ukuta unapohitaji kuwa mnene zaidi |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Mteremko}} kwenye nyuso zilizopinda; kutoa extrude hadi uso, uso unaofuata au kipeo; extrudes zilizopunguka | Extrude au revolve, kwa hatua inapohitajika; extrude kwa kina unachopima |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} na muundo bapa | Extrude bamba au wasifu wa rib |
| Nyuso: kumalizia {{ui:Form}} kuwa sehemu, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Hazipatikani |
| Miili kadhaa: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, vipengele vinavyotengeneza mwili mpya | Kigumu kimoja; mifumo na vipengele vya kioo vinanakili |
| Michoro, ndege, shoka na pointi kwenye nyuso ambazo kernel sahihi pekee inaweza kuzipata (uso uliotengenezwa na fillet, ukuta wa shimo, uso wa kigumu kilichoingizwa) | Chora kwenye ndege za msingi, ndege za marejeo na nyuso bapa za extrudes na revolves |
| Matokeo ya muundo wa kizalishi yakifunguliwa kama sehemu au kuongezwa kwake (yanakuwa kigumu kilichoingizwa) | Pakua matokeo kama STL au STEP |
| Kuhariri nyuso zilizopinda za faili la STEP lililofunguliwa kama nyuso sahihi; STEP sahihi ya nyuso za spline, zilizosogezwa na zilizozungushwa kutoka faili la STEP, pande za spline, nyuzi zilizomodeliwa, miili na mikusanyiko ya STL / OBJ / 3MF; STEP kwa wamodeli wengine wa sehemu | {{ui:Open}} husoma STEP kama pembetatu na huhifadhi nyuso bapa, silinda, koni, duara na torasi za faili kwa ajili ya hamisho ([Fungua faili la STEP](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} huandika kila uso wa kuchambuliwa kwa usahihi na kuhifadhi hizo kama facets ([Hamisha nje](topic:export-files#for-other-cad-programs-step)); macro ya wamodeli wengine wa sehemu bado huandika |
| Matao halisi kwenye mionekano ya michoro | Mionekano na mionekano ya sehemu hutolewa kutoka kwenye facets |
| Ujazo, maeneo na umbali sahihi | {{ui:Measure}} hutoa namba za kigumu cha facets, kidogo kidogo kwenye sehemu za mviringo; mpangilio mzuri zaidi wa **Mikunjo** unazisogeza karibu zaidi |

Baadhi ya safu katika majedwali yaliyo chini zinapendekeza mojawapo ya vipengele hivi kama njia ya kukabiliana na kitu kingine. Mapendekezo hayo yanatumika mara tu kernel sahihi itakaporudi.

## Vipengele

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Fillet za nyuso, fillet za mzunguko kamili, fillet zenye radius zilizowekwa kwenye pointi kando ya ukingo | {{ui:Fillet}} ya kawaida au ya mstari inayobadilika; vipengele kadhaa vya fillet |
| Shells zenye unene tofauti wa kuta | Unene mmoja wa {{ui:Shell}}; ongeza nyenzo kwa extrudes pale ukuta unapohitaji kuwa mnene zaidi |
| Mteremko kwenye nyuso huru (spline) | {{ui:Mteremko}} hufanya kazi kwenye nyuso bapa, za silinda na za koni |
| Sweeps zinazosokota, sweeps za ukuta mwembamba na za uso; tangensi ya mwisho kwenye kipengele cha Loft; loft yenye reli moja ya mwongozo; njia za spline | {{ui:Sweep}} yenye mwelekeo uliowekwa au kipimo cha mwisho; loft yenye reli mbili au zaidi za mwongozo: angalia [Sweep, loft na mteremko](topic:sweep-loft-draft) |
| Ribs kutoka matao au splines; ribs zinazokua mraba na mchoro (kutoka mwonekano wa juu); mteremko kwenye ribs; ribs kadhaa kutoka mchoro mmoja | {{ui:Rib}} kutoka mnyororo mmoja wa mistari kwenye ndege ya rib yenyewe: angalia [Mbavu na gussets](topic:rib) |
| "Hadi" uso uliopinda, "hadi unaofuata" kusimama kwenye uso uliopinda | Hadi uso bapa au ndege ya marejeo |
| Mashimo yaliyochimbwa kwa kukabiliana, nyuzi za inchi na za bomba, nyuzi zilizopunguka, mwisho wa nyuzi na mwanzo wa nyuzi uliokatwa kwa chamfer | Counterbore yenye kina kidogo; nyuzi za ISO metric na trapezoidal, za kimapambo au zilizomodeliwa: angalia [Nyuzi kwenye shafti na mashimo, zilizochorwa au zilizomodeliwa](topic:threads) |
| Extrudes za kipengele chembamba | Chora kuta zote mbili za wasifu |
| Nakala za mfumo zinazoruka moja moja, mifumo ya kujaza | Tumia vipengele tofauti; mifumo kando ya mkunjo: {{ui:Path pattern}} |
| Kunakili mifumo, vioo, fillet, chamfer, shells na vigumu vilivyoingizwa | Nakili mchoro au kipengele ambacho vimejengwa juu yake, au vipe mfumo |
| Tangensi sahihi (G1) kwenye pointi za kipekee za umbo; kuunganisha vipande vya umbo kuwa nyuso kubwa | Ongeza Level ya umbo: vipande vilivyokadiriwa vinakuwa vidogo; angalia [Maumbo huru kwa Form](topic:form-surfaces) |
| Umbo lililotengenezwa na vipande kadhaa vilivyofungwa tofauti katika kipengele kimoja; madaraja kati ya maumbo | Kipande kimoja kilichofungwa kwa kila kipengele cha Form; viunganishe kwa Unganisha |
| Kuchagua miili ya uso kwenye mwonekano (isipokuwa pointi za trim na patch); fillet za uso; untrim; vipande vya G2; nyuso za Gordon zinazogusa majirani waliopinda (kugusa ndege na nyuso bapa kumejengwa) | Chagua kwa jina kwenye paneli ya kipengele; {{ui:Thicken}} kwanza, kisha fillet kigumu |
| Orodha ya miili kwenye historia; kuacha miili iliyofichwa nje ya hamisho | Badilisha jina na ufiche miili kwenye orodha ya miili ya paneli ya sehemu; futa au zima kipengele kilichotengeneza mwili ili kuuacha |
| Kipimo kisicho sawa kinachohifadhi silinda na koni kama za kuchambuliwa; kipimo kisicho sawa cha nyuso zilizohamishwa | {{ui:Scale body}} hufanya nyuso zilizopinda kuwa B-spline zilizofungwa (ndani ya 0.0000004 mm); kipimo sawa hubaki sahihi |
| Kuunganisha miili ya uso; jumla za Minkowski | {{ui:Stitch}} au {{ui:Thicken}} kwanza, kisha {{ui:Combine}} |
| Uchambuzi wa uvumilivu: mrundikano unaogeuka pembe (vitanzi vya vekta 2D na 3D), unyeti unaohesabiwa kutoka jiometri, Monte Carlo yenye usambazaji mwingine, uvumilivu wa ukubwa kwenye vipimo vya michoro, uvumilivu wa ziada kutoka hali ya nyenzo | {{ui:Stack-up}} kwenye mkusanyiko: mwelekeo mmoja, kesi mbaya zaidi na RSS, uvumilivu ulioandikwa, kutoka uvumilivu wa jumla wa kizuizi cha kichwa au kutoka fremu za GD&T: angalia [Mrundikano wa uvumilivu](topic:tolerance-stackup) |
| Kupanga: mpangilio wa kukata na mistari ya kuingia, kukata kingo zinazoshirikiwa mara moja, sehemu zinazopaswa kubaki pamoja; mabaki ya roli, hisa inayoshirikiwa kati ya miradi | {{ui:Nest flat parts on sheets…}} yenye nafasi, pambizo, mizunguko na nafaka: angalia [Panga sehemu bapa kwenye karatasi](topic:nest-flat-parts); mabamba yaliyobaki huhifadhiwa na kutumika kwanza: angalia [Hifadhi na tumia tena mabaki](topic:nest-offcuts); panga kata kwenye programu yako ya mashine |
| Chuma-bamba: hems, jogs, flensi za miter na kontua; flensi kwenye kingo zilizopinda au kwenye nyuso za flensi ya msingi iliyopindwa; mikunjo iliyochorwa; kufunga kona; zana za kuumba; kubadilisha kigumu kuwa chuma-bamba; muundo bapa wa flensi ya msingi iliyopindwa yenye kupunguzwa; jedwali za mikunjo | {{ui:Base flange}} (bamba au wasifu uliopindwa), {{ui:Edge flange}} kwenye kingo zilizonyooka za bamba zenye bend reliefs, na muundo bapa wenye K-factor: angalia [Chuma-bamba](topic:sheet-metal) |
| {{ui:Draft analysis}} kwenye mikusanyiko; kutafuta mstari wa kutenganisha; uchambuzi wa unene wa ukuta | {{ui:Draft analysis}} kwenye sehemu katika Design: angalia [Angalia draft kwa ukingo na kutupa](topic:draft-analysis); fungua kila sehemu ya mkusanyiko ili kuikagua |

## Michoro

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Duaradufu, matao ya tangenti, koni, spline zenye shahada au uzito uliowekwa (NURBS) | Spline (cubic), matao na miduara yenye mahusiano ya Tangent |
| Pointi kwenye spline (uhusiano), mahusiano ya mkunjo (G2) | Weka pointi ya spline yenyewe mahali inapopaswa kupita |
| Nakala za offset za splines zinazofuata mabadiliko ya baadaye; offset za minyororo yenye pembe kali za spline | Fanya offset tena baada ya mabadiliko; zungusha kona kwanza |
| Nakala za mfumo zinazobaki zimeunganishwa na asili; mifumo kando ya mkunjo | Panga tena baada ya mabadiliko |
| Kuprojekti kingo huru au zilizoinama za duara, jiometri iliyoprojekti inayofuata sehemu | Projekti kingo zilizonyooka na sambamba za duara, kisha weka vipimo |
| Vipimo vinavyofuata (vya marejeo) | Soma ukubwa kutoka paneli au ukweli wa sehemu |
| Mahusiano ya mstari mmoja | Sambamba na umbali wa 0 |
| Kubandika kwenye programu nyingine (ubao wa kunakili wa mfumo) | Hamisha DXF, STEP, STL au 3MF |
| Kuandika matao, viwianishi vya jamaa au vya polar | Andika mistari na miduara; chora matao kwa zana ya Arc |
| Kuchagua jiometri bila kipanya | Inahitaji kubofya au kugusa |

## Vigezo na vipimo

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Usanidi unaobadilisha nyenzo; jedwali la usanifu la CSV linalozima vipengele | Usanidi huweka vigezo na kuwasha au kuzima vipengele: angalia [Usanidi na jedwali za usanifu](topic:design-tables); `partcraft variants` hujenga usanidi uliohifadhiwa kwa jina, pamoja na vipengele vilivyozimwa: angalia [Tengeneza kifurushi cha tofauti kutoka usanidi wako](topic:variant-pack) |
| Milinganyo kwenye namba za paneli za vipengele vipya zaidi (ndege, sweep, mteremko na vinginevyo) | Iandike kwenye script au kwa `partcraft set` ([Scripts na mstari wa amri](topic:scripts-and-cli)) |
| Sehemu inayoonyeshwa kwa inchi | Ukubwa unaonyeshwa kwa milimita; andika `2in` kwenye kisanduku cha namba au katika usemi, na itakuwa 50.8 |

## Faili

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Kuhariri vipengele vya kigumu cha STEP kilichoingizwa (kinafika bila historia) | Ongeza au kata nyenzo kwa vipengele vyako |
| Kusoma rangi, majina, muundo wa mkusanyiko na PMI kutoka STEP | Hapatikani |
| Hamisho ya glTF, OBJ, IGES, Parasolid; DWG ya sehemu ya 3D (kifurushi cha tofauti pekee huandika DWG: karatasi ya mchoro) | STL au 3MF kwa mesh; STEP kwa vigumu; DXF kwa 2D |
| Kufungua IGES, DXF au faili za programu nyingine (faili za `.3dm` hufunguka kama mwili mmoja: [Fungua modeli ya .3dm kama mwili kigumu](topic:open-3dm-files)) | Omba STEP, au mesh ya STL, OBJ au 3MF iliyofungwa: [Fungua STL, OBJ au 3MF](topic:open-meshes) |
| Muundo wa mkusanyiko (mti wenye majina ya sehemu) kwenye STEP iliyohamishwa | STEP ya mkusanyiko ni kitu kimoja cha vigumu vilivyowekwa |
| Kuhifadhi kwenye folda unayochagua bila upakuaji wa kivinjari | Washa "uliza mahali pa kuhifadhi" kwenye mipangilio ya upakuaji wa kivinjari |

## Michoro ya kiufundi

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Vipimo zaidi ya ukubwa mkuu watatu (ukubwa wa mashimo, nafasi, uvumilivu wa ukubwa) | Weka alama kwenye PDF, au hamisha DXF na uweke vipimo kwenye programu ya CAD ya 2D |
| Zaidi ya sehemu moja au undani mmoja; mionekano iliyopangwa, iliyovunjwa na msaidizi | Sehemu moja na undani moja kwa kila mchoro |
| Maandishi huru, maelezo na majedwali kwenye karatasi (isipokuwa vizuizi vya kichwa na marekebisho) | Maelezo ya umaliziaji, au maandishi yaliyoongezwa kwenye PDF |
| Projekti ya pembe ya kwanza, mionekano inayosogea, karatasi za wima | Pembe ya tatu, mpangilio wa kiotomatiki, karatasi za mlalo A4–A0 na ANSI A–E |
| Mwonekano wa sehemu wa moja kwa moja: ndege kadhaa au kisanduku cha sehemu kwa wakati mmoja, mtaro kuzunguka ukataji, kuhifadhi sehemu kwenye faili | Ndege moja kwa wakati kutoka {{ui:Views}} › {{ui:Section view}}; angalia [Tazama ndani kwa mwonekano wa sehemu](topic:section-view) |
| Michoro ya mkusanyiko yenye mionekano, vipimo au baluni zaidi unazoweza kusogeza | Mwonekano mmoja wa isometric (au uliopanuliwa) wenye baluni za kiotomatiki na orodha ya sehemu |
| Kunakili na kubandika alama za GD&T na umaliziaji | Weka kila moja kwa Datum, Frame au Finish |
| Miongozo: faili za STEP kupitia {{ui:From another file…}} ya Illustrate, modeli inayopelekwa moja kwa moja kutoka ModelCraft au BimCraft, picha za ubora wa path tracer, 3D shirikishi ndani ya PDF | Fungua STEP kwenye Design na anza mwongozo kutoka {{ui:From the open part}}; hifadhi modeli kama glTF (.glb); picha za PNG za mwonekano wa 3D; faili la 3D shirikishi: angalia [Anza mwongozo katika Illustrate](topic:illustrate) |

## Mikusanyiko

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Viungio vya gia, rack, cam na skrubu; kiungo cha mpira kilichowekewa koni; viungio kwenye nyuso zilizopinda au kati ya pointi | Viungio vigumu, vya mzunguko, vya kuteleza, vya silinda, vya ndege, vya mpira na vya pini-kwenye-nafasi kwenye nyuso bapa, kila thamani ikiwa na mipaka yake: angalia [Jenga mkusanyiko](topic:build-assembly) |
| Hatua za kutenganisha zinazogeuza sehemu, na kuburuta sehemu ambazo viungio huziweka | Hatua za kutenganisha zilizonyooka; ondoa kiungio ili kusogeza sehemu kwa mkono |
| Mikusanyiko midogo | Ngazi moja ya sehemu tu |
| Gia, cam, mguso | Hapatikani |

## Manufacture

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Ukataji mbaya wa 3D wa nyuso zilizopinda, usafishaji wa 3D unaobadilika, uchakataji wa mabaki; umaliziaji wa waterline, pencil, radial na spiral; pasi zinazobadilika zilizoandikwa kama matao | Uso wa 2.5-axis, pocket, 2D adaptive, contour, drill na chamfer: angalia [Tengeneza njia za zana na G-code](topic:manufacture); umaliziaji wa Parallel na Scallop wa modeli nzima: angalia [Umaliziaji wa 3D](topic:finish-3d) |
| Njia za zana za mhimili 4 na 5, kugeuza, kupima kwa probe | Weka upande mmoja kwa wakati na mhimili wa zana kwenye kichupo cha Setup |
| Ukaguzi wa mgongano wa kishikilizi na shingo ya zana | Tazama onyo za urefu wa mifereji na kagua kwenye simulator ya kidhibiti chako |
| Upimaji kwa probe, mizunguko ya maisha ya zana na subprogram, misimbo ya mhimili wa 4 na 5 na ya lathe kwenye post; kupakia faili za post za programu nyingine | Andika au badilisha post katika muundo wa PartCraft wenyewe: angalia [Post processors unazoweza kuhariri](topic:post-processors) |
| G-code ya inchi (G20) | Milimita (G21) pekee |

## Simulation na muundo wa kizalishi

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Masomo yasiyo ya mstari: kuvunjika kwa mavuno, mikunjo mikubwa, mguso kati ya sehemu, uchovu | Tuli ya mstari na masafa asilia: angalia [Angalia msongo na mkunjo](topic:simulation); weka kipengele cha usalama mbali juu ya 1 |
| Kupinda kusiko kwa mstari (kasoro, baada ya kupinda, snap-through) | Vipengele vya mzigo wa kupinda kwa mstari pamoja na ukingo mpana: angalia [Joto, msongo wa joto na kupinda](topic:thermal-and-buckling) |
| Mionzi kati ya nyuso (view factors), upinzani wa mguso, nyenzo zinazotegemea joto, hali ya kutulia katika msongo wa joto (mawimbi ya mshtuko wa joto) | Mionzi kwa mazingira, msongo wa joto wa hali-thabiti au wa kiasi-thabiti kwa muda, sifa zisizobadilika: angalia [Joto, msongo wa joto na kupinda](topic:thermal-and-buckling) |
| Uboreshaji wa kiotomatiki kwa joto la muda mfupi na masomo yenye mzigo wa joto; kufanya mesh kuwa mbaya zaidi pale kosa ni dogo; lengo kwenye kiasi cha ndani (msongo wa kilele kwenye eneo moja) | **Boresha kiotomatiki** kwa masomo ya tuli, ya kupinda, ya masafa asilia na ya joto la hali-thabiti, kwenye kosa la sehemu nzima: angalia [Angalia msongo na mkunjo](topic:simulation); vinginevyo punguza ukubwa wa kipengele |
| Mizigo ya fani na bolti, nguvu za mbali, momenti, springs, mihamisho iliyowekwa | Nguvu na shinikizo kwenye nyuso, mvuto; nyuso zilizofungwa na zisizo na msuguano |
| Simulation ya mikusanyiko; nyenzo zinazotofautiana kwa mwelekeo (tabaka zilizochapishwa, composites) | Sehemu moja, nyenzo moja ya isotropiki |
| Nyuzi kadhaa za solver kwa masomo ya tetrahedral, uhamishaji wa joto na muundo wa kizalishi; nyuzi zozote kwenye ukurasa usiotengwa cross-origin | Masomo ya voxel, kupinda, msongo kwa muda na mtiririko wa laminar hutumia nyuzi pale ukurasa unaporuhusu: angalia [Mipangilio ya PartCraft](topic:settings) |
| Mtiririko wa msukosuko wenye usahihi wa muundo (modeli ya Spalart–Allmaras imo kama ya majaribio: msuguano wa bomba juu kwa 30 hadi 34 %, kuungana tena kwa hatua ya nyuma fupi kwa 21 hadi 39 %; imepangwa: seli nzuri zaidi karibu na kuta), joto kwenye mtiririko, mtiririko usio thabiti (wa wakati halisi), nyuso huru, vimiminika visivyo vya Newtonian, sehemu zinazozunguka | Mtiririko wa laminar, thabiti, wa joto moja wa kimiminika cha Newtonian, au modeli ya majaribio ya msukosuko kwa mifumo ya ubora: angalia [Iga mtiririko wa kimiminika](topic:flow-simulation); paneli huonya Reynolds inapopita laminar |
| Mipaka ya msongo na kanuni za utengenezaji (overhangs, mwelekeo wa kusaga) katika muundo wa kizalishi; nyenzo kadhaa katika umbo moja | Umbo gumu zaidi kwa ujazo; angalia matokeo kwenye Simulation: angalia [Kuza umbo kutoka mizigo](topic:generative-design) |
| Matokeo kama kigumu kinachoharirika (laini, cha parametric) | STL, STEP yenye facets, au sehemu yenye matokeo kama kigumu kilichoingizwa chenye facets |
| Usanifu wa mashine za umeme: rotor inayozunguka ndani ya stator, torque dhidi ya pembe, chuma kinachojaa, sumaku zinazopoteza nguvu baada ya goti lake, mikondo ya eddy na hasara za chuma na shaba; sehemu za sumaku kwa 3-D au kwenye mesh zilizopinda | Magnetostatics ya 2-D ya mstari kwenye gridi kwenye maktaba ya uchambuzi: koili, chuma, sumaku za kudumu kwenye mstari wake wa kurudi nyuma, mapengo, inductance na nguvu ya kuvuta: angalia [Sehemu za sumaku kwa 2-D](topic:magnetic-fields-2d) |

## Scripts

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Msaada wa kuelea, vituo vya kusimamisha na kupitia hatua kwa hatua kwenye mhariri wa script | Tafuta, kukunja na kukamilisha vipo (angalia [Andika na endesha scripts](topic:craftscript)); kwa mengine, mhariri wako mwenyewe: {{ui:Save}} na {{ui:Open}} kwenye kikundi cha Script huhamisha scripts ndani na nje; kazi zilizojengwa ndani zimeorodheshwa kwenye [Lugha ya CraftScript](topic:craftscript-language) |
| Vituo vya kusimamisha na kupitia script hatua kwa hatua | `disp` na `fprintf` njiani; {{key:Mod+Enter}} huendesha mistari michache iliyochaguliwa kwa wakati mmoja |
| Sehemu na grafu ambazo script inaonyesha zikichorwa kwenye workspace ya Design; scripts zinazobadilisha vigezo vya sehemu | Zinaonyeshwa kwenye workspace ya Script; scripts husoma vigezo kwa `param` (angalia [Andika na endesha scripts](topic:craftscript)), na hubadilishwa kwenye kichupo cha {{ui:Parameters}} |
| Picha na majedwali kando kwa kando na grafu; kuhariri grafu (kukuza, mipaka ya mihimili) kabla ya kuihifadhi | Upande kwa upande huonyesha grafu; hifadhi grafu kama PNG, SVG au CSV na umalize kwingine |
| numpy na pakiti nyingine za Python; Python nje ya mtandao; kukunja Python kwenye mhariri; Pascal Script | Maktaba ya kawaida ya Python, CraftScript na Lua: angalia [Scripts kwa Python](topic:craftscript-python) |
| Kupitisha kazi za Lua kwa kazi zilizojengwa ndani; kuita kazi ya maktaba kutoka Lua kwa jina lililojengwa wakati script inaendeshwa | Andika jina la kazi ya maktaba kwenye script (`cs.static_tet(…)`), au iite kutoka script ya CraftScript |

## Programu

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Kuhifadhi kwenye wingu, kushiriki na historia ya matoleo | Bado hakipatikani. Hifadhi faili kwenye kompyuta yako na weka matoleo kwa jina |
| PartCraft kama programu iliyosakinishwa kwenye iPad na iPhone | Tumia PartCraft kwenye kivinjari cha kifaa; kwenye Android na kwenye kompyuta pia inaendeshwa katika CadCraft Studio (getcadcraft.com/download) |
| Menyu za muktadha (kubofya kulia) | Upau wa zana na paneli ya kulia |
| Kufanya kazi kikamilifu nje ya mtandao tangu mwanzo | Ni wakati programu imehifadhiwa kwa matumizi ya nje ya mtandao pekee: angalia [Kufanya kazi nje ya mtandao](common:offline) |

Ripoti kile unachokosa zaidi kupitia ukurasa wa usaidizi wa tovuti: unaamua kitakachofuata.

## Engineer (jenereta na sehemu)

| Bado hakijajengwa | Badala yake, leo |
|---|---|
| Vichwa, bandari na viungio kwenye kibadilisha joto kilichozalishwa; mikunjo ya joto kwa nguvu ya nyenzo; hasara za tee kwenye manifold | Jenereta hujenga kiini na mirija; ongeza viungio kwenye Design; tumia takwimu za joto la chumba za nyenzo pamoja na kipengele cha usalama |
| Kuongeza jenereta kutoka saraka ya nyongeza kwa kubofya mara moja | {{ui:Open}} kwenye workspace ya Engineer huongeza jenereta kutoka faili |
| Faili ya sehemu nzuri kuliko ukubwa wa voxel wa jenereta yenyewe; kusoma faili za `.vdb` | Hifadhi sehemu nzuri zaidi kutoka script; `.vdb` huandikwa, haisomwi |
| Mahesabu ya kanuni ya chombo cha shinikizo | Fomula za kitabu za ukuta mwembamba na ukuta mzito, pamoja na kipengele cha usalama unachochagua; si kiwango cha kanuni |
| Jenereta kwa programu nyingine | PartCraft pekee katika toleo hili |
