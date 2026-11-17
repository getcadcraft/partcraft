---
title: Nyuso huru (NURBS)
summary: Mikunjo na nyuso laini kando ya sehemu — loft, sweep, mitandao ya mikunjo, viraka vya kingo nne, mchanganyiko, trim — pamoja na mwendelezo wa G0, G1 na G2 unaopimwa kwenye nyuso halisi, vigumu vyenye union, subtract na intersect vilivyooka kwenye sehemu, mionekano ya zebra na mkunjo, nyuso zilizolingana na skani kwa kupimwa kwa kosa, na faili za STEP au IGES. Huhifadhiwa kwenye faili la sehemu.
keywords: nurbs, skani, uhandisi wa kinyume, lingana, mesh kuwa uso, wingu la pointi, stl, trim, trimmed, shimo, kata, kigumu, vigumu, boolean, union, subtract, intersect, tofauti, shona, funga, oka, huru, uso, nyuso, b-spline, bspline, mkunjo, spline, loft, sweep, reli, mtandao, coons, kiraka, mchanganyiko, linganisha, mwendelezo, g0, g1, g2, tangensi, mkunjo, zebra, pointi za udhibiti, mafundo, shahada, step, iges, daraja la A, hull, ulaini
from: 64ed5196
---

Workspace ya **Surfaces** hutengeneza mikunjo na nyuso laini za aina inayotumika kwenye maganda ya bidhaa, miili ya magari na maganda ya boti: NURBS, hisabati ile ile inayotumiwa na wamodeli wengine wa nyuso. Kila kitu hupimwa kwenye nyuso halisi, si kwenye pembetatu unazoziona. Ukubwa ni milimita, kama sehemu nyingine ya PartCraft.

Chagua **Surfaces** kwenye kisanduku cha **Workspace**. Upau wa zana una {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} na {{ui:Zebra}}; kila amri iko kwenye paneli ya kulia. Amri huonyesha kinachohitaji: bofya mikunjo au nyuso kwenye mwonekano (karibu na ukingo au ncha inapoomba mmoja) au uchague kwenye orodha; andika pointi, au bofya kwenye nyuso za sehemu (nje ya sehemu zinatua kwenye ndege ya ardhi), kisha bonyeza Enter.

Mikunjo na nyuso huhifadhiwa kwenye faili la sehemu pamoja na kigumu. Hazibadilishi vipengele vya sehemu: paneli ina **Undo** na **Redo** zake, hatua moja kwa kila amri.

## Mikunjo

- **Curve through points** hupitia kila pointi unayobofya. **Curve by control points** hufuata ngome ya pointi badala yake.
- **Insert knot**, **Raise degree** na **Lower degree** hubadilisha jinsi mkunjo unavyoelezwa bila kuusogeza (kushusha shahada hukataa mkunjo ukisogea zaidi ya uvumilivu). **Rebuild curve** huupa idadi mpya ya pointi za udhibiti na kusema umesogea kwa kiasi gani.
- **Match curve** hufanya ncha ya mkunjo mmoja ikutane na nyingine kwa G0 (kugusana), G1 (mwelekeo uleule) au G2 (mkunjo uleule pia). **Blend curve** huongeza mkunjo mpya kati ya ncha mbili, G1 au G2.

## Nyuso

- **Loft** kupitia mikunjo miwili au zaidi, **Ruled surface** kati ya miwili, **Extrude curve**, **Revolve curve**.
- **Sweep along one rail** husogeza wasifu kando ya njia bila kuusokota; **Sweep along two rails** huweka ncha za wasifu kwenye reli zote mbili. Sweeps hulingana, na matokeo yanasema yalikaa karibu kiasi gani na sweep halisi.
- **Surface from a curve network** hupitia gridi ya mikunjo (kila moja ikikatiza kila nyingine mara moja). **Patch from four edges** hujaza mikunjo minne inayokutana kwenye pembe zake.
- **Match surface** hufanya ukingo wa uso ukutane na jirani kwa G0, G1 au G2; **Blend surface** huongeza uso kati ya kingo mbili.
- **Offset surface**, **Extend surface** (uso unaendelea kama ulivyokuwa unakwenda), **Rebuild surface**.

## Kukagua ubora

Jedwali la **Shared edges** huorodhesha kila ukingo nyuso mbili zinaoshiriki, pamoja na pengo (mm), pembe kati yao (°) na mruko wa mkunjo (1/mm), na kama hiyo inafanya G0, G1 au G2. Ukingo ulio mbaya kuliko ulivyoomba huonekana kwenye **Problems** pamoja na marekebisho ya **Match**. Milia ya **Zebra** na rangi za **curvature** hutoka kwenye uso halisi: milia inayoendelea bila kukatika kuvuka ukingo inamaanisha G1; milia inayohifadhi pia upana wake inamaanisha G2.

G0–G2 hupimwa, kwenye pointi 33 kwa kila ukingo. **G3 na ubora wa "class A" hazipimwi** na hazidaiwi.

## Kukata uso (trim)

Kikundi cha **Trim** hukata uso bila kubadilisha umbo lake: uso unahifadhi pointi zake zote za udhibiti, na sehemu iliyo ndani ya mtaro pekee ndiyo inaonyeshwa, kuhesabiwa na kuandikwa. **Trim to a rectangle** na **Trim with a circle** hufanya kazi kwenye sehemu (0 hadi 1) ya uso katika kila mwelekeo, kwa hiyo hazihitaji kuchagua kwenye mwonekano; **Trim by a curve** huchukua mkunjo uliofungwa ulio kwenye uso (unaprojekti ndani ya uso, na hukataliwa kwa maneno ikiwa wazi au zaidi ya uvumilivu mbali). Weka alama **Cut a hole** kuondoa ndani ya mtaro; iache bila alama kubaki na ndani pekee. Uso unaweza kuwa na mtaro mmoja uliobaki na mashimo yoyote; mtaro unaokatiza mwingine hukataliwa. **Remove the trim** huonyesha uso mzima tena. Undo ya paneli huondoa trim kama hatua nyingine yoyote.

STEP hubeba trim kama mipaka ya uso, na IGES kama uso uliokatwa (entity 144); zote mbili huisoma tena.

## Vigumu na Boolean

Kikundi cha **Solids** hugeuza nyuso kuwa miili iliyofungwa na kuziunganisha. Kigumu hapa ni seti ya nyuso za paneli zinazofunga pamoja ujazo; nyuso zake hubaki NURBS halisi zenye trim zake.

- **Box solid**, **Cylinder solid** na **Sphere solid** hutengeneza moja kutoka ukubwa uliochapwa (mm): kisanduku cha nyuso sita bapa, silinda yenye upande wa mviringo na ncha mbili bapa zilizokatwa kwenye duara, duara la uso mmoja uliozungushwa.
- **Solid from surfaces** huunganisha nyuso ulizozitengeneza mwenyewe. Chagua, au usichague yoyote kutumia kila uso unaoonekana usio kwenye kigumu bado. Zinashonwa pamoja ndani ya uvumilivu: zisipofunga, hakuna kinachobadilika na paneli inasema ni ukingo ngapi unabaki wazi na zinapaswa kukutana karibu kiasi gani.
- **Union**, **Subtract** (kigumu cha pili kinaondolewa kutoka cha kwanza) na **Intersect** (kile tu ambacho vyote viwili vinashiriki) huchukua vigumu viwili: bofya nyuso za kila kimoja kwenye mwonekano, au bonyeza **Pick** kwenye orodha ya **Solids**. Weka alama **Keep the two solids** kuviacha pembeni ya matokeo.

Boolean huhifadhi kila uso kwenye uso wake halisi na kuukata kwa mitaro mipya ya trim kando ya makutano. Mstari wa matokeo unatoa namba zilizopimwa: pointi za injini ya vigumu zilihitaji kusogea kwa kiasi gani ili zikae kwenye nyuso halisi (kamwe zaidi ya uvumilivu), pointi za makutano ziko karibu kiasi gani na nyuso zote mbili (kwa kawaida milionisehemu chache za milimita), ujazo, na kama nyuso mpya hufunga tena zinaposhonwa upya kutoka nyuso zao halisi. Ujazo hupimwa kwenye pembetatu ndani ya uvumilivu (0.05 mm isipokuwa uweke nyingine), kwa hiyo ujazo wa duara au silinda huonyesha kidogo chini ya halisi: uvumilivu mdogo unakaribia zaidi. Boolean isiyoweza kufanywa safi (vigumu havishiriki chochote, mtaro ungejikatiza) hukataliwa kwa maneno na hakuna kinachobadilika. Boolean moja ni hatua moja ya **Undo** ya paneli.

Kwenye orodha ya **Solids**, **Ungroup** huweka nyuso kama nyuso za kawaida; pipa huondoa kigumu na nyuso zake.

## Mchanganyiko na unene

**Fillet between faces** huzungusha ukingo ambapo nyuso mbili za kigumu kimoja zinakutana: chagua nyuso mbili (kwenye mwonekano, au kwa **Pick** kwenye orodha), andika **radius** na, kwa radius inayobadilika kando ya ukingo, **radius at the end** (0 huweka radius moja). Mpira wa radius hiyo unasogezwa kando ya ukingo ukigusa nyuso zote mbili; fillet ni mkunjo wa duara halisi unaobaki kwenye kila pointi, uliounganishwa kuwa uso mmoja, na nyuso mbili zinakatwa pale mpira unapogusa. Ukingo wa nje hupoteza nyenzo, pembe ya ndani hupata. Mstari wa matokeo unatoa vilivyopimwa: uso wa fillet uko mbali kiasi gani na mpira unaozunguka kati ya pointi ulizojengwa kutoka (pointi huongezwa hadi ziwe ndani ya robo ya uvumilivu), pembe kubwa zaidi kati ya fillet na kila uso kwenye mistari ya kugusa, na namba zile zile za Union. Radius isiyotoshea (mpira ungeacha uso, au uso unapinda kwa kubana zaidi ya radius) hukataliwa, ukitaja uso, na hakuna kinachobadilika.

**Fillet several edges** huzungusha kingo nyingi kwa hatua moja: chagua nyuso mbili za ukingo wa kwanza, kisha nyuso mbili za unaofuata, na kadhalika (uso unaweza kuwa kwenye jozi kadhaa, kwa mfano uso wa juu wa kisanduku ukiwa kwenye nne kati yake); kingo zote hupata radius uliyoandika. Kila mzunguko huhesabiwa kwenye kigumu kama kilivyokuwa, kisha hukatwa moja baada ya nyingine, kwa hiyo mpangilio haujali. Pale kingo mbili zilizozungushwa zinapokutana kwenye pembe ambayo kingo zake nyingine zinabaki kali, fillet hizo mbili huingia kwenye mkunjo wa makutano yao (mkunjo). Pale kingo tatu za nje zilizozungushwa za nyuso tatu bapa zinazoshikana kwa pembe kali zinapokutana kwa radius moja, pembe hiyo ni **sphere patch** moja inayogusa fillet zote tatu (ondoa alama ya **Corners** kupata pembe ya mkunjo badala yake); ukingo lazima uwe angalau mara mbili ya radius urefu pale ncha zake zote mbili ni pembe kama hizo. Mstari wa matokeo unasema kingo ngapi zilizungushwa na pembe zilitokaje. Kingo za ndani zinaweza kuzungushwa pamoja pia, lakini matokeo yasiyofunga tena yanaripotiwa tu (mstari unasema hivyo), kwa hiyo yakague.

**Thicken into a solid** hupa uso unene: chagua, andika **thickness**, na weka alama **Other side** kuukuza upande mwingine. Uso uliohamishwa unalingana na uso na kupimwa dhidi yake (mstari wa matokeo unatoa tofauti kubwa zaidi kutoka unene); kuta hufuata kila ukingo na kila mtaro wa trim. Ikiwa uso unapinda kwa kubana zaidi kuliko unene upande huo, au sehemu nyingine ya uso iko karibu kuliko unene, unakataliwa, ukitaja uso na mahali, na hakuna kinachobadilika.

## Oka kigumu kwenye sehemu

**Bake** (kwenye upau wa zana wa Surfaces), au **Bake into the part** kwenye orodha ya **Solids**, hufanya kigumu kuwa mwili wa sehemu, kama STL iliyofunguliwa inavyokuwa mwili: chagua kigumu, kama kinaongezwa kwenye sehemu (**added**), kinakatwa kutoka kwake (**cut**) au kinaingiliana nayo (**intersected**), na uvumilivu (pembetatu zinaweza kuwa mbali kiasi gani na nyuso halisi). Ni hatua moja ya Undo ya sehemu na inaonekana kwenye orodha ya vipengele kama ingizo lenye jina la kigumu. Sehemu huhifadhi pembetatu, kwa hiyo hufunguka na kujengwa upya bila nyuso; kigumu halisi kinabaki kwenye Surfaces, kwa hiyo unaweza kukioka tena baada ya mabadiliko.

## Faili

Hamisha **STEP** (AP242) au **IGES** pamoja na mikunjo na nyuso kama zilivyo (mikunjo na nyuso za B-spline, bila kugeuzwa kuwa pembetatu). Kila uso ni uso wake wenyewe, pamoja na trim yake; kigumu huandikwa kama ganda moja lililofungwa, kila ukingo ukishirikiwa na nyuso zake mbili kama programu nyingine za CAD zinavyotarajia (mstari wa hali unasema vigumu ngapi vilitoka hivyo). Kwenye IGES kigumu kile kile ni B-rep moja ya kigumu cha manifold (entity 186 juu ya ganda lililofungwa 514, nyuso 510, loops 508, orodha moja ya kingo 504 na orodha moja ya vipeo 502); kigumu ambacho nyuso zake hazioani ukingo kwa ukingo huandikwa kama nyuso tofauti, na mstari unasema hivyo. **Import…** husoma kigumu kama hicho tena kama kigumu, kutoka STEP na kutoka IGES.

## Kulainisha mistari ya meli

**Fair** (kwenye upau wa zana wa Surfaces) hupima kila mkunjo kwenye umbo lake halisi — mipinda (pale unapobadilisha mwelekeo wa kupinda), mkunjo mkubwa zaidi, mruko wa mkunjo kwenye mafundo yake na ukali wake — kisha hujenga upya zile zenye mpinda au mruko kwa pointi chache zaidi za udhibiti zinazobaki ndani ya uvumilivu unaotoa na kutoongeza mpinda. Chora stesheni, mistari ya maji na buttocks kama mikunjo, zilainishe, kisha **Loft** hull kupitia stesheni na uikague kwa **Zebra**. Mikunjo isiyolainishwa pia huonekana kwenye **Problems** pamoja na marekebisho ya **Fair this curve**. Mstari unaokusudiwa kubadilisha mwelekeo (sehemu yenye umbo la S) huhifadhi mpinda huo mmoja. Uhamishaji, vituo na mikono ya kurejesha ya hull hutoka kwenye sehemu ya kigumu: angalia zana ya hydrostatics.

## Nyuso kutoka skani (uhandisi wa kinyume)

Fungua sehemu inayoshikilia mesh iliyoskaniwa (STL iliyofunguliwa au mwili uliookwa), chagua **Surfaces** kwenye kisanduku cha **Workspace**, kisha kwenye kikundi cha **Scan** chagua **Fit surfaces to the scan**; mesh iliyojengwa ya sehemu ndiyo skani. Zana hutafuta **ndege**, **silinda**, **duara** na **koni** (nyuso halisi ambazo sehemu iliyochongwa imetengenezwa; kila safu inaonyesha radius au nusu-pembe iliyopatikana), hupata **fillet** (kingo na pembe zilizozungushwa: silinda ndogo au duara linalogusa kwa tangensi nyuso mbili au zaidi nyingine, likionyeshwa kwa radius yake na nyuso inazounganisha), **rim fillets** (torasi: ukingo uliozungushwa pale uso bapa unapokutana na silinda au koni, ukionyeshwa kwa radius yake na radius ya pete yake) na **variable fillets** (ukingo uliozungushwa ambao radius yake hubadilika kando yake, ukionyeshwa kwa radius kila ncha), hulingana **kiraka kimoja cha umbo huru** na kipande laini, kilichopinda kwa upole, na kukata kila uso kwenye mtaro wa sehemu ya skani uliotoka, hivyo mashimo na pembe hubaki. Chaguo: **tolerance** (kwa mm, pointi ya skani inaweza kuwa mbali kiasi gani na ndege au silinda na bado kuwa yake, na lengo kwa kiraka cha umbo huru), **smallest piece** (sehemu ya eneo la uso) na **most faces**. Skani na chaguo zilezile daima hutoa nyuso zilezile.

Matokeo ni jedwali, mstari mmoja kwa kila uso: aina yake, pembetatu ngapi zilitoka, na kosa **lililopimwa kutoka skani hadi uso** (rms, kubwa zaidi, na sehemu ya pointi ndani ya uvumilivu). Pointi zinazopimwa ni vipeo vya skani na katikati ya kila pembetatu. Kosa halipimwi kwa upande mwingine (uso hadi skani), kwa hiyo uso unaofika zaidi ya skani hauonekani. Dokezo chini ya jedwali pia linasema eneo kiasi gani lilikuwa dogo mno kulingana. Kwenye mwonekano, pointi za skani zinapakwa rangi kwa **deviation map** yao: bluu kwenye uso, kijani nusu ya njia hadi uvumilivu, nyekundu kwenye uvumilivu au zaidi (ondoa alama ya **Show the deviation map** kuificha). Vipande vinavyojikunja vyenyewe (bomba lililofungwa lililolingana na viraka vya umbo huru, kwa mfano) huorodheshwa kama visivyolingana, havilazimishwi kuwa uso mmoja.

**Stitch the surfaces to a solid** hushona kila uso unaoonekana usio kwenye kigumu kuwa kigumu kimoja kilichofungwa. Nyuso za skani hukutana tu ndani ya kosa la skani yenyewe, kwa hiyo hujaribu umbali mdogo kabisa wa kuunganisha unaofunga (kamwe zaidi ya **stitch distance** uliyoweka) na inakataa kwa maneno pale nyuso zisipofunga. Kamwe haiziba pengo kwa kulifunika. Kisanduku chenye kingo zilizozungushwa hushonwa pale fillet zake zilipopatikana kama nyuso zake wenyewe; umbali wa kuunganisha uliofunga upo kwenye matokeo. Kigumu hicho kisha hufanya kazi na Union, Subtract, Intersect na **Bake into the part**.

Isichokifanya: **rim fillet** (torasi) hutafutwa tu kuzunguka mhimili wa silinda au koni iliyoshapatikana tayari, na **variable fillet** tu kando ya ukingo ulionyooka kiasi (sehemu zake hukatwa mraba kwa mwelekeo mmoja); kwingineko hutokea kama viraka vya umbo huru pale vinapokuwa laini vya kutosha na huachwa nje vinginevyo; duara, koni na fillet hupatikana kwa sampuli za nasibu, kwa hiyo kipande kidogo sana (pembetatu chache) kinaweza kukosekana; ramani ya deviation inaonyesha umbali kutoka skani hadi nyuso, si kinyume chake; skani kubwa sana (zaidi ya pembetatu 300,000) hukataliwa hapa. Nyuso za silinda kamili hukatwa kuzunguka mashimo, na mshono huwekwa pale hakuna shimo. Kagua kila uso dhidi ya skani yako kabla ya kuutegemea.

## Bado hakijajengwa

Kuzungusha kingo zinazokutana kwenye pembe ya nyuso zilizopinda au zenye radius tofauti (mchanganyiko wa kipeo), fillet kati ya nyuso zisizokutana, fillet ya ndani inayoishia kwenye uso ulioinama au uliopinda, Boolean na fillet zinazohesabiwa kwenye nyuso bila pembetatu (hapa injini ya vigumu hufanya kazi kwenye pembetatu ndani ya uvumilivu, na kila pointi kisha huwekwa tena kwenye nyuso halisi), mwili uliookwa unaofuata nyuso zikibadilika, kukata uso kwa uso mwingine nje ya Boolean, kujaza mashimo yenye pande zaidi ya nne, kuprojekti mikunjo kwenye nyuso.
