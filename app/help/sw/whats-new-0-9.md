---
title: Kipya katika 0.9
summary: PartCraft 0.9 inaongeza mviringo kati ya nyuso na kunenepesha kuwa vigumu, mikusanyiko ya sehemu elfu kadhaa, hazina ya Hati yenye marekebisho, kiongezi cha Solid FEM cha msongo, njia kumi za tao, ukubwa wa chuma wa Uingereza, hatua ya kuchapisha na viongezi vya uchapishaji wa resin.
keywords: kipya, nini kipya, maelezo ya toleo, orodha ya mabadiliko, 0.9, mviringo kati ya nyuso, mpira unaozunguka, zungusha kingo kadhaa, nenepesha, kigumu kutoka nyuso, step shell, iges solid, mviringo wa skani, mkusanyiko mkubwa, onyesho jepesi, sehemu 20000, hati, hazina, angalia nje, marekebisho, toleo, kiungo cha Rhino, grasshopper, 3dm, vikaguzi, sakafu ya kiwanda, foleni ya kazi, solid fem, kipengele kikomo, von mises, marudio asilia, njia za tao, tao la nukta 3, sehemu za chuma za Uingereza, hatua ya kuchapisha, resin, goo, ctb, kitanda, tandaza tambarare, nyoosha, zebra, mhandisi, jenereta, kipengele kilichozalishwa, mchoro wa awali kutoka picha, kipimo cha kuchapisha, gawanya kwa kuchapisha, kupungua, karatasi zilizopangwa, g-code, mchoro, pima matundu, msaidizi, mcp, lugha, safu za upau wa zana, 0.8, 0.8.1, vipengele vipya, uchambuzi wa moja kwa moja, sasisha ninapohariri, vunja, nini kitavunjika kwanza, kipengele cha mzigo, isiyo ya mstari, mavuno, mgeuko wa plastiki, mguso, calculix, utafiti wa mwendo, kibali, nyuso, nurbs, hull
from: 96d9fbfa
---

Hiki ndicho kilichobadilika katika PartCraft 0.9, ikilinganishwa na 0.8.1. Nyuso huru sasa zinafunga kuwa vigumu, mikusanyiko ya sehemu elfu kadhaa inabaki ikitumika, hazina ya Hati inahifadhi marekebisho, na kiongezi cha Solid FEM kinakagua msongo katika sehemu. Kila kipengele kinaonyesha mahali pa kukipata.

## Mpya katika 0.9.1

- **Hamisha STEP halisi.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} na {{ui:STEP AP214 (exact solid)}} sasa zinafanya kazi. Matundu, vilele, mviringo, koni, duara na tori zinaandikwa kwenye nyuso zake halisi zenye miduara halisi kama kingo, ili programu nyingine ya CAD au CAM itambue tundu kama tundu. Pande za spline, nyuzi zilizomodelwa na matundu yaliyoagizwa vinabaki vipande tambarare katika kigumu kile kile. Tazama [Hamisha kwa kuchapisha, STEP na DXF](topic:export-files#for-other-cad-programs-step).
- **STEP ndani, STEP halisi nje.** Faili ya STEP unayofungua inahifadhi nyuso zake tambarare, silinda, koni, duara na tori, kwa hiyo {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} inazirudisha kama nyuso halisi badala ya vipande: boriti ya msambazaji yenye matundu ya bolti inatoka ikiwa na nyuso zile zile ilizoingia nazo, pamoja na chochote ulichokata ndani yake. Nyuso za spline, zilizosukumwa na zilizozungushwa za faili zinabaki vipande, na ndivyo ilivyo kwa miili kutoka STL, OBJ na 3MF. Fungua faili ya STEP tena kwa sehemu iliyohifadhiwa awali. Tazama [Fungua faili ya STEP na ujenge juu yake](topic:import-step).
- **Miduara ya kweli kwenye DXF ya uso.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} ukiwa umechagua uso tambarare sasa unaandika matundu ya duara kama miduara, yenye katikati na radius ya tundu lenyewe, kwa meza ya laser, plasma au waterjet. Kingo nyingine za duara bado ni vipande.
- **STEP halisi kwa karakana.** Katika {{ui:Manufacture}}, {{ui:Exact STEP (work coordinates)}} inaandika sehemu ikiwa na asili yake kwenye asili ya kazi ya usanidi na Z kwenye mhimili wa zana, kuratibu ambazo G-code inatumia. Tazama [Tengeneza njia za zana na G-code](topic:manufacture#exact-step-for-the-shop).

## Mpya

### Nyuso na vigumu

- **Mviringo kati ya nyuso.** Chagua {{ui:Surfaces}} kwenye kisanduku cha {{ui:Workspace}}, kisha {{ui:Fillet between faces}}. Chagua nyuso mbili za kigumu kimoja, kisha andika radius (na {{ui:Radius at the end (mm, 0 = the same)}} kwa radius inayobadilika kando ya kingo). Mstari wa matokeo unaonyesha umbali wa mviringo kutoka kwenye mpira unaozunguka bora, na radius isiyotoshea inakataliwa huku uso ukitajwa. {{ui:Fillet several edges}} inazungusha kingo nyingi kwa hatua moja; weka alama {{ui:Corners (sphere patch where three meet)}} kwa kona ya duara pale kingo tatu zilizozungushwa za nyuso tambarare zinapokutana. Tazama [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Nenepesha kuwa kigumu.** {{ui:Thicken into a solid}} kwenye eneo kazi hilo hilo inapa uso unene; {{ui:Other side}} inaupanua upande mwingine. Mkunjo au mvuko wa kujivuka unakataliwa huku uso na mahali pake vikitajwa.
- **Vigumu kutoka nyuso.** Nyuso zilizokatwa zinaweza kuunganishwa kwa union, subtract na intersect na kuingizwa kwenye sehemu kama hatua moja ya kutendua. STEP inaandika kigumu kama ganda moja lililofungwa na IGES kama kigumu kimoja; zote mbili zinasomwa tena kama kigumu. Nyuso zisipooanishwa kingo kwa kingo, faili inapata nyuso tofauti na mstari wa hali unasema hivyo. Vigumu pia vinaweza kutengenezwa kwenye mhariri wa nodi; tazama [Mhariri wa nodi](topic:nodes).
- **Mviringo wa ukingo na unaobadilika katika skani.** Unapofaa nyuso kwenye skani, mviringo wa ukingo (tori) na mviringo unaobadilika radius kando ya kingo iliyonyooka kiasi nao unatafutwa na kuorodheshwa pamoja na radius yake. Umejaribiwa kwenye skani zilizotengenezwa tu.

### Mikusanyiko, hati na viungo

- **Mikusanyiko mikubwa.** Sehemu zinazofanana nakala zinashiriki matundu moja, na {{ui:Views}} › {{ui:Lightweight display}} inachora masanduku ili mwonekano uendelee kusogea (inajiwasha yenyewe kwa mikusanyiko mikubwa sana; kuchagua na viungio bado vinatumia sehemu halisi). Mti wa sehemu unaonyesha safu zake za kwanza na kitufe cha {{ui:Show 700 more}} kwa zilizobaki. Faili za mkusanyiko zinaweza kushikilia hadi matukio 50,000 na viungio 100,000. Tazama [Jenga mkusanyiko](topic:build-assembly).
- **Hati.** {{ui:Documents…}} kwenye kundi la **Faili** inafungua kidirisha juu ya folda ya mradi: angalia nje na angalia ndani, herufi za marekebisho, hali (kazini, kwa ukaguzi, imetolewa, imepitwa na wakati), historia, mahali inapotumika na orodha ya vifaa. Tazama [Hati na marekebisho (hazina)](topic:documents-walkthrough).
- **Kiungo cha Rhino moja kwa moja.** Hati moja, `cadcraft_link.py`, inafuatilia hati ya Rhino au Grasshopper na kusukuma tu kilichobadilika kwenda PartCraft, ambako kipengele kilichoagizwa kinajengwa upya kwenye umbo jipya. Ni njia moja na kinahitaji Studio. Tazama [Kiungo cha .3dm moja kwa moja](topic:live-3dm-link).
- **Ona vielekezi vya wenzako.** Katika kikao cha pamoja, kielekezi cha kila mtu kinaonyeshwa pamoja na jina lake na kipengele alichochagua. Tazama [Fanya kazi moja kwa moja na wengine](topic:work-live).
- **Sakafu ya kiwanda.** Washa kiongezi cha Sakafu ya kiwanda kwenye {{ui:Settings}} › {{ui:Add-ons}}. Baada ya kutuma programu kwenye {{ui:Manufacture}}, kichupo chake kinaweza {{ui:Add to the factory job queue}} au {{ui:Save as a job file}}. Hakitumi wala kuanzisha mashine kamwe.

### Uchambuzi na sehemu

- **Kiongezi cha Solid FEM.** Washa {{ui:Solid FEM}} kwenye {{ui:Settings}} › {{ui:Add-ons}} (kimezimwa hadi uwashe) na kichupo cha {{ui:Solid FEM}} kinaonekana kwenye kidirisha cha kulia. {{ui:Mesh the part}}, chagua nyuso zilizobana na mizigo kwenye mwonekano wa 3D, {{ui:Solve}}, kisha chora mgeuko, msongo wa von Mises au umbo la mtetemo kwa {{ui:Show on the model}}. Tazama [Solid FEM: ukaguzi wa msongo](topic:solid-fem-check).
- **Tao kwenye michoro ya awali, njia kumi.** Kishale kilicho karibu na {{ui:Arc}} kwenye upau wa zana wa mchoro wa awali kinaorodhesha Pointi 3, Mwanzo Katikati Mwisho, Mwanzo Katikati Pembe, Mwanzo Katikati Urefu, Mwanzo Mwisho Pembe, Mwanzo Mwisho Mwelekeo, Mwanzo Mwisho Radius, Katikati Mwanzo Mwisho, Katikati Mwanzo Pembe, Katikati Mwanzo Urefu na Endelea. Tazama [Chora tao kwa njia kumi](topic:sketch-arc-methods).
- **Ukubwa wa chuma wa Uingereza.** Miundo ya chuma inaweza kutumia sehemu 976 za Uingereza (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); andika ukubwa kama `305x165x40 UB`. Tazama [Vipengele vya kimuundo](topic:structural-members).

### Kuchapisha

- **Hatua ya kuchapisha.** Kitufe cha {{ui:Print stage}} kwenye upau wa zana (kiongezi cha 3D Print, kimewashwa kwa chaguo-msingi) kinaweka miili ya sehemu yako kwenye kitanda chenye mistari ya vitone: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, kisha {{ui:Send to 3D printer}} kupitia USB, Klipper (Moonraker), OctoPrint au PrusaLink. Hakuna kinachotumwa hadi uthibitishe, na sehemu yako haibadilishwi kamwe. Kwa faili ya STL au 3MF badala yake, tazama [Andaa sehemu kwa uchapishaji wa 3D](topic:print-3d).
- **Uchapishaji wa resin.** Viongezi kwenye {{ui:Settings}} › {{ui:Add-ons}}, vyote vimezimwa hadi uviwashe: kikata-kata cha resin, jaribio la mwangaza, na miundo ya faili Elegoo GOO, SL1, Chitubox CBDDLP/CTB na Anycubic. Ukataji unaendeshwa kwenye uzi wa kazi, kwa hiyo ukurasa unabaki ukijibu.

## Katika kila programu

- Kila kidokezo cha kuelekeza panya ni kidokezo cha Bootstrap.
- Kidokezo cha kuanza kina kitufe cha kufunga; kinabaki kimefungwa.
- Safu ya vichupo vya kidirisha ambavyo haviingii inasogea pembeni badala ya kukatwa.
- Kichupo cha kivinjari kinaonyesha jina la hati iliyofunguliwa kabla ya PartCraft | CadCraft.
- {{ui:Settings}} inaonyesha {{ui:Layout}} ya eneo kazi kama orodha ya chaguo, na kisanduku cha lugha kinaorodhesha lugha zote ambazo muundo unazo.
- Uzito na Halijoto ni aina za vipimo katika mipangilio ya Vipimo.

## Imerekebishwa

- Menyu ya Tao ya mchoro wa awali sasa inaorodhesha kila njia.
- Upau wa zana wa viongezi na kichwa cha kichupo cha kivinjari vilirekebishwa tarehe 2026-11-09.

## Mipaka halisi

- STEP halisi ilisomwa tena kwenye OpenCascade (vigumu halali, ujazo sawa na ule uliohesabiwa kwa mkono). Bado haijafunguliwa kwenye kila programu ya CAD au CAM, na mkusanyiko haujaandikwa kama STEP halisi.
- Hakuna kilichochapishwa kwenye kichapishi halisi. Ukataji, G-code na faili za resin zilisomwa tena na programu zetu wenyewe au kichapishi cha kuigiza; hakuna muundo wa resin uliopakiwa kwenye kichapishi, na ukubwa wa vichapishi na mwangaza ni pointi za kuanzia.
- Solid FEM ni ya mstari, ya isotropiki na ya elastiki, nyenzo moja kwa kila sehemu, bila mguso, mavuno wala kujikunja. Msongo kwenye nyuso zilizobana na kona kali unategemea matundu. Ni msaada wa kukagua, si ukaguzi wa mhandisi.
- Muda wa mikusanyiko mikubwa unatoka kwenye seva isiyo na GPU; fremu kamili ya sehemu 20,000 bado inachukua sekunde hapo.
- Mviringo unafanya kazi kwenye jozi za nyuso; hakuna mchanganyiko wa jumla wa vilele wala mviringo kati ya nyuso zisizokutana.
- Kiungo cha Rhino hakijawahi kuendeshwa ndani ya Rhino au Grasshopper halisi. Hati zilijaribiwa na programu mbili kwenye folda moja, si na watu wawili kwenye mtandao wa pamoja.
- Kufaa nyuso kwenye skani halisi hakujakaguliwa kwa mkono. Lugha zisizo za Kiingereza ni rasimu za mashine.
- Visakinishi vya Windows havijatiwa sahihi kwa msimbo, na picha ya diski ya macOS haijathibitishwa na Apple. Tazama [Utatuzi wa matatizo](topic:troubleshooting).

Mabadiliko ya awali yapo katika [Kipya katika 0.7](topic:whats-new-0-7).

## Awali: 0.8 na 0.8.1

Hiki ndicho kilichobadilika katika PartCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. Uigaji unajibu unapohariri na unakuambia kipi kitavunjika kwanza, mikusanyiko inapata tafiti za mwendo, na nafasi mpya za kazi zinatengeneza nyuso huru na sehemu zenye ukubwa unaotokana na fizikia. 0.8.1 ni toleo dogo la marekebisho.

### Mpya

**Uigaji**

- **Sasisha ninapohariri.** Weka alama {{ui:Update while I edit}} kwenye kizuizi cha Tatua na majibu yanafuata mabadiliko yako. Badilisha kipimo, mzigo au nyenzo, na jibu la haraka, lililotengenezwa kwa elementi zenye ukubwa mara nne zaidi, linaonekana mara moja; ukisimama kwa sekunde moja hivi, jibu lililosafishwa la utafiti lenyewe linachukua nafasi yake. Matokeo yanaonyesha unaloliangalia. Kwenye boriti ya chuma ya kutoka nje, jibu la haraka lilikuwa ndani ya 1 % kwa mgeuko na karibu 4 % kwa msongo ikilinganishwa na lile lililosafishwa. Tazama [Angalia msongo na mgeuko](topic:simulation#update-while-you-edit-live).
- **Kipi kitavunjika kwanza.** Kwa utafiti wa tuli au wa kujikunja, {{ui:What breaks first?}} kwenye kizuizi cha **Vunja** inakuza mizigo hadi sehemu ikate tamaa. Inaorodhesha, kuanzia mbaya zaidi, kipengele cha mzigo hadi mavuno ya kwanza (na alama nyekundu pale msongo unapofikia kilele) na kipengele cha mzigo hadi kujikunja. Kipengele chini ya 1 kinamaanisha sehemu tayari inakata tamaa ikiwa imebeba mzigo, na Matatizo yanaonyesha hitilafu. Vipengele vinatokana na utafiti wa mstari, kwa hiyo vina ubora sawa na wake. Tazama [Angalia msongo na mgeuko](topic:simulation#find-out-what-breaks-first-break-it).
- **Mavuno na mguso.** Aina mbili zaidi za utafiti: moja isiyo ya mstari ambapo nyenzo inafuata mstari wake hadi msongo wa mavuno kisha mteremko mlalo zaidi, pamoja na mgeuko wa plastiki kuchorwa; na moja ya mguso ambapo vipande tofauti vinasukumana (bila msuguano) au vinakwama (vimeungana). Hatua ya mzigo isiyotulia, au vipande vinavyozama sana ndani ya kila kimoja, vinaonekana kwenye kidirisha cha Matatizo. Msuguano, kuteleza kwa kiasi kikubwa, mzunguko mkubwa, mgeuko mkubwa na uchovu havitatuliwi. Tazama [Angalia msongo na mgeuko](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Mafaili kwa CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} inahifadhi utafiti kwa CalculiX, programu tofauti unayosakinisha na kuiendesha mwenyewe; {{ui:Export}} › {{ui:CalculiX results (.frd)}} inasoma faili yake ya matokeo kurudi kwenye matundu yale yale. PartCraft haianzishi programu hiyo kamwe, na inasema hivyo ikiwa sehemu ilibadilika tangu staha ihifadhiwe.

**Mikusanyiko**

- **Tafiti za mwendo.** {{ui:Assembly}} › {{ui:Motion}} inaendesha thamani ya kiungio kimoja kwa muda utakaoutoa (kasi ya kudumu, iliyolainishwa, sine, au kwenda na kurudi), inaweka mkusanyiko kila hatua pamoja na viungio na vitanzi vilivyofungwa, na inaripoti kinachogongana na sehemu zinakaribiana kwa kiasi gani. {{ui:Add a point}} inachora nafasi ya nukta, kasi, kuongeza kasi, thamani ya kiungio na kibali dhidi ya muda; {{ui:Save CSV}} na {{ui:Save plot}} zinaviandika nje. Baada ya {{ui:Run}}, Pitia kwenye upau wa kuendesha unasogeza mkusanyiko hadi hatua yoyote. Mipangilio ya utafiti inahifadhiwa kwenye faili ya mkusanyiko. Kasi na kuongeza kasi vinatokana na nafasi zilizorekodiwa, kwa hiyo tumia hatua zaidi ikiwa kilele kikali kinasomeka chini. Tazama [Angalia mkusanyiko kwa migongano na mwendo](topic:check-assembly#a-motion-study).

**Nyuso na sehemu kutoka fizikia**

- **Eneo kazi la Nyuso.** Chagua {{ui:Surfaces}} kwenye kisanduku cha {{ui:Workspace}} kwa mikunjo na nyuso za NURBS pembeni ya sehemu: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} na {{ui:Zebra}}, pamoja na mwendelezo (G0, G1 au G2) unaopimwa kwenye nyuso halisi, na kingo iliyo mbaya kuliko ulivyoomba inaorodheshwa kwenye Matatizo pamoja na marekebisho ya Linganisha. {{ui:Fair}} inapima mistari ya hull kwa mabadiliko ya mwelekeo na ruka za mkunjo na kujenga upya zile zisizo nadhifu ndani ya uvumilivu wako. Nyuso zinahifadhiwa kwenye faili ya sehemu na hazibadilishi vipengele vya sehemu. Tazama [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Eneo kazi la Mhandisi.** Chagua {{ui:Engineer}} kwenye kibadilishaji cha maeneo kazi, chagua jenereta na ubofye {{ui:New}}: hati inapima sehemu kutokana na kazi yake (kupasha joto ili kusogeza, mitiririko, shinikizo, nyenzo, mchakato wa uchapishaji) kwa fomula za kitabu cha kiada na kuijenga, kisha inarudisha namba ilizotumia pamoja na vyanzo vyake, ukaguzi wake wa utengenezaji na faili za zana za uchambuzi. Pembejeo zile zile zinatoa sehemu ile ile kwenye kompyuta yoyote. Jenereta inahifadhiwa ndani ya sehemu, na kufungua sehemu hakuendeshi hati kamwe. Tazama [Sehemu kutoka fizikia: jenereta](topic:engineer-generators) na [Andika jenereta](topic:write-a-generator).

**Michoro ya awali, michoro na utengenezaji**

- **Mchoro wa awali kutoka picha.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} inafuatilia picha ya sehemu tambarare kwenye ardhi tupu (mstari wa nje na matundu) au mchoro wa kalamu kuwa mistari, matao na miduara. Unatoa urefu mmoja, unaangalia onyesho la kukagua na kutengeneza mchoro wa awali. Tazama [Misingi ya mchoro wa awali](topic:sketch-basics#a-sketch-from-a-photo).
- **Kipimo na kugawanya kwa uchapishaji.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} inapima kwa kila mhimili bila kubadilisha sehemu, kwa mfano kwa posho ya kupungua. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} inakata sehemu kubwa kuliko kitanda chako kuwa vipande vyenye namba vinavyounganishwa kwa vigingi, funguo, mikia ya njiwa, matundu ya dowel au mashimo ya sumaku. Tazama [Chapisha kwa 3D](topic:print-3d).
- **Karatasi zilizopangwa hadi G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} inasoma DXF iliyopangwa na kutengeneza programu moja kwa kila karatasi kupitia post utakayochagua: matundu na vipunguzi kwanza, kisha mistari ya nje. Haipangi njia za kuingia, mpangilio wa kukata wala kingo zilizoshirikiwa. Tazama [Panga sehemu tambarare kwenye karatasi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Michoro inayojifanyia zaidi.** {{ui:Sheet}} › {{ui:Automatic}} inachagua karatasi ndogo kabisa ya ukubwa A inayoshikilia mionekano kwa kipimo kikubwa cha kawaida hadi 1:1. {{ui:Dimension the holes}} inaweka alama ya katikati kwenye kila tundu, lebo moja kwa kila ukubwa na nafasi kutoka kona ya chini kushoto ya mwonekano. Tazama [Tengeneza mchoro](topic:drawing-pdf).

**Katika kila programu**

- **Lugha.** Programu zinapatikana kwa lugha 54. Zile zaidi ya Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} inachagua Wrap (kama awali), safu 2 au safu 1; upau usiotoshea unasogea pembeni. Utepe wa Vipengele wa PartCraft unaonyesha zana inayotumika zaidi kwa ukubwa mkubwa na kuficha tofauti zake nyuma ya kitufe cha kugawanya.
- **Unganisha AI yako.** Studio ndiyo kitovu cha kuunganisha msaidizi wako mwenyewe kwenye programu zote nane, pamoja na ruhusa ya kusoma tu, kupendekeza au kuhariri kwa kila programu. Msaidizi aliyeunganishwa anaweza kupima sehemu kutokana na sentensi, kama kishikilia kwa mzigo, kuonyesha kazi yake na kila ukaguzi, na kuijenga; anaripoti asichokikagua (mkazo wa msongo, uchovu, mteremko wa plastiki). Tazama [Tumia PartCraft na msaidizi wa AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Kuganda kwa kielekezi kwenye skrini nzima.** Uchaguzi wa kuelekeza panya sasa umepunguzwa kasi. Chanzo ni usomaji wetu bora zaidi na haujathibitishwa na aliyeripoti.
- **Lugha wakati wa kuendesha.** Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yakiwa yanaendesha; awali yalikuwa Kiingereza pekee. Hii bado haijajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.

### Bado haipo katika toleo hili

- Unganisha AI yako bado haijakamilika: kuunganisha kwa kubofya mara moja ndani ya Studio, kiunganishi kinachohudumiwa kwa AI ya kivinjari, ufunguo wako wa API ndani ya Studio na kifurushi kilichochapishwa cha MCP hakuahidiwi. Studio haina AI yake yenyewe.
- Studio haijatiwa sahihi kwa msimbo: Windows inaweza kuonya, na macOS inauliza bonyeza-kulia kisha Fungua. Tazama [Utatuzi wa matatizo](topic:troubleshooting).
- Stack-ups bado ni mwelekeo mmoja: tazama [Stack-ups za uvumilivu](topic:tolerance-stackup).
- Yaliyobaki yameorodheshwa katika [Bado haijajengwa](topic:not-built-yet).

Mabadiliko ya awali yapo katika [Kipya katika 0.7](topic:whats-new-0-7).
