---
title: Nini kipya katika 0.9 (cha awali)
summary: PartCraft 0.9 inaongeza fillet kati ya nyuso na unene kuwa vigumu, mikusanyiko ya maelfu ya sehemu, hazina ya Hati yenye marekebisho, nyongeza ya Solid FEM ya msongo, njia kumi za matao, saizi za chuma za UK, hatua ya Kuchapisha na nyongeza za uchapishaji wa resin.
keywords: nini kipya 0.9, toleo la awali, nini kipya, maelezo ya toleo, historia ya mabadiliko, 0.9, fillet kati ya nyuso, rolling ball, fillet za kingo kadhaa, thicken, kigumu kutoka nyuso, step shell, iges solid, skana, mkusanyiko mkubwa, onyesho jepesi, sehemu 20,000, hati, hazina, angalia nje, marekebisho, kiungo cha rhino, grasshopper, 3dm, sakafu ya kiwanda, foleni ya kazi, solid fem, finite element, von Mises, masafa asilia, mbinu za arc, sehemu za chuma za UK, hatua ya kuchapisha, resin, goo, ctb, kitanda, lay flat, 0.8, 0.8.1, toleo, vipengele vipya, uigaji hai, sasisha wakati wa kuhariri, vunja, kinachovunjika kwanza, kipengele cha mzigo, isiyo ya mstari, kukubali, mguso, calculix, utafiti wa mwendo, kibali, nyuso, nurbs, nyoosha, hull, zebra, mhandisi, jenereta, kitu kilichozalishwa, mchoro kutoka picha, kipimo cha kuchapisha, kugawanya kwa kuchapisha, kupungua, karatasi zilizopangwa, g-code, mchoro, vipimo vya matundu, msaidizi, mcp, lugha, safu za upau wa zana
from: 1dafd7c8
---

Haya ndiyo yaliyobadilika katika PartCraft 0.9, ukilinganisha na 0.8.1. Nyuso huru sasa zinafungwa kuwa vigumu, mikusanyiko ya maelfu ya sehemu inabaki inatumika, hazina ya Hati inahifadhi marekebisho, na nyongeza ya Solid FEM inakagua msongo kwenye sehemu. Kila kipengele kinaeleza mahali pa kukipata.

## Mpya katika 0.9.1

- **Usafirishaji wa STEP halisi.** {{ui:Hamisha nje}} › {{ui:STEP AP242 (kigumu sahihi)}} na {{ui:STEP AP214 (kigumu sahihi)}} sasa zinafanya kazi. Matundu, viinuko, fillet, koni, duara na torus zinaandikwa kwenye nyuso zao halisi na miduara halisi kama kingo, ili programu nyingine ya CAD au CAM iweze kuchagua tundu kama tundu. Pande za spline, nyuzi zilizomodeliwa na mesh zilizoingizwa zinabaki facets tambarare kwenye kigumu kile kile. Angalia [Hamisha kwa kuchapisha, STEP na DXF](topic:export-files#for-other-cad-programs-step).
- **STEP inayoingia, STEP halisi inayotoka.** Faili ya STEP unayoifungua inahifadhi nyuso zake tambarare, silinda, koni, duara na torus, kwa hiyo {{ui:Hamisha nje}} › {{ui:STEP AP242 (kigumu sahihi)}} inazirudisha kama nyuso halisi badala ya facets: boriti ya msambazaji yenye matundu ya bolti inatoka ikiwa na nyuso zile zile ilizoingia nazo, pamoja na chochote ulichokata ndani yake. Nyuso za spline, zilizosukumwa na zilizozungushwa za faili zinabaki facets, na ndivyo miili kutoka STL, OBJ na 3MF. Fungua tena faili ya STEP kwa sehemu iliyohifadhiwa awali. Angalia [Fungua faili ya STEP na ujenge juu yake](topic:import-step).
- **Miduara halisi kwenye DXF ya uso.** {{ui:Hamisha nje}} › {{ui:DXF ya mchoro au uso tambarare}} ikiwa na uso tambarare uliochaguliwa sasa inaandika matundu ya duara kama miduara, yenye katikati na radius ya tundu lenyewe, kwa meza ya leza, plasma au waterjet. Kingo nyingine za duara bado ni facets.
- **STEP halisi kwa duka.** Kwenye {{ui:Utengenezaji}}, {{ui:STEP halisi (kuratibu za kazi)}} inaandika sehemu ikiwa na asili yake kwenye asili ya kazi ya mpangilio, na Z kando ya mhimili wa zana, kuratibu ambazo G-code inatumia. Angalia [Tengeneza njia za zana na G-code](topic:manufacture#exact-step-for-the-shop).

## Mpya

### Nyuso na vigumu

- **Fillet kati ya nyuso.** Chagua {{ui:Nyuso}} kwenye kisanduku cha {{ui:Eneo kazi}}, kisha {{ui:Mviringo wa kona kati ya nyuso}}. Chagua nyuso mbili za kigumu kimoja, andika radius (na {{ui:Radius mwishoni (mm, 0 = sawa)}} kwa radius inayobadilika kando ya kingo). Mstari wa matokeo unasema fillet iko mbali kiasi gani na mpira bora unaoviringika, na radius isiyofaa inakataliwa huku uso ukitajwa. {{ui:Zungusha kingo kadhaa}} inazungusha kingo nyingi kwa hatua moja; weka alama {{ui:Kona (kiraka cha duara pale vitatu vinapokutana)}} kwa kona ya duara pale kingo tatu zilizozungushwa za nyuso tambarare zinapokutana. Angalia [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Nenepesha kuwa kigumu.** {{ui:Fanya nene kuwa kigumu}} kwenye eneo kazi lilelile inatoa uso unene; {{ui:Upande mwingine}} unauongeza upande mwingine. Mkunjo au mvuke unaojivuka wenyewe unakataliwa huku uso na mahali pakitajwa.
- **Vigumu kutoka nyuso.** Nyuso zilizokatwa zinaweza kuunganishwa kwa muungano, kutoa na makutano na kuokwa kwenye sehemu kama hatua moja ya kutendua. STEP inaandika kigumu kama shell moja iliyofungwa na IGES kama kigumu kimoja; zote mbili zinasomwa tena kama kigumu. Nyuso zisipooanishwa kingo kwa kingo, faili inapata nyuso tofauti na mstari wa hali unasema hivyo. Vigumu pia vinaweza kutengenezwa kwenye mhariri wa nodi; angalia [Mhariri wa nodi](topic:nodes).
- **Fillet za ukingo na zinazobadilika kwenye skana.** Unapopachika nyuso kwenye skana, fillet za ukingo (torus) na fillet za radius inayobadilika kando ya kingo iliyonyooka kiasi zinatafutwa pia na kuorodheshwa pamoja na radius yao. Imejaribiwa kwenye skana zilizotengenezwa tu.

### Mikusanyiko, hati na viungo

- **Mikusanyiko mikubwa.** Sehemu zilizo nakala zinashiriki mesh moja, na {{ui:Mionekano}} › {{ui:Onyesho jepesi}} inachora masanduku ili mwonekano uendelee kusogea (unawaka wenyewe kwa mikusanyiko mikubwa sana; kuchagua na viungio bado vinatumia sehemu halisi). Mti wa sehemu unaonyesha safu zake za kwanza na kitufe cha {{ui:Onyesha 700 zaidi}} kwa zilizobaki. Faili za mkusanyiko zinaweza kushikilia hadi matukio 50,000 na viungio 100,000. Angalia [Jenga mkusanyiko](topic:build-assembly).
- **Hati.** {{ui:Hati…}} kwenye kikundi cha **Faili** hufungua kidirisha juu ya folda ya mradi: toa na rudisha, herufi za marekebisho, hali (kazi inayoendelea, kwa ukaguzi, imetolewa, imepitwa na wakati), historia, mahali kinapotumika na orodha ya vifaa. Angalia [Hati na marekebisho (hazina)](topic:documents-walkthrough).
- **Kiungo hai cha Rhino.** Script moja, `cadcraft_link.py`, inaangalia hati ya Rhino au Grasshopper na kusukuma kwenye PartCraft mabadiliko tu, ambapo kipengele kilichoingizwa kinajengwa upya kwa umbo jipya. Ni njia moja na inahitaji Studio. Angalia [Kiungo hai cha .3dm](topic:live-3dm-link).
- **Ona vielekezi vya wengine.** Kwenye kikao kilichoshirikiwa, kielekezi cha kila mtu kinaonyeshwa pamoja na jina lake na kipengele alichochagua. Angalia [Fanya kazi kwa pamoja moja kwa moja](topic:work-live).
- **Sakafu ya kiwanda.** Washa nyongeza ya Sakafu ya kiwanda kwenye {{ui:Mipangilio}} › {{ui:Programu-jalizi}}. Baada ya kuandika programu kwenye {{ui:Utengenezaji}}, kichupo chake kinaweza {{ui:Ongeza kwenye foleni ya kazi ya kiwanda}} au {{ui:Hifadhi kama faili ya kazi}}. Haituma wala kuanzisha mashine kamwe.

### Uchambuzi na sehemu

- **Nyongeza ya Solid FEM.** Washa {{ui:Solid FEM}} kwenye {{ui:Mipangilio}} › {{ui:Programu-jalizi}} (imezimwa hadi utakapofanya hivyo) na kichupo cha {{ui:Solid FEM}} kinaonekana kwenye paneli ya kulia. {{ui:Tengeneza mesh ya sehemu}}, chagua nyuso zilizowekwa na mizigo kwenye mwonekano wa 3D, {{ui:Tatua}}, na chora mkengeuko, msongo wa von Mises au umbo la hali kwa {{ui:Onyesha kwenye modeli}}. Angalia [Solid FEM: ukaguzi wa msongo](topic:solid-fem-check).
- **Tao kwenye michoro, njia kumi.** Mshale ulio kando ya {{ui:Tao}} kwenye upau wa zana wa mchoro unaorodhesha Pointi 3, Anza Katikati Mwisho, Anza Katikati Pembe, Anza Katikati Urefu, Anza Mwisho Pembe, Anza Mwisho Mwelekeo, Anza Mwisho Radius, Katikati Anza Mwisho, Katikati Anza Pembe, Katikati Anza Urefu na Endelea. Angalia [Chora tao kwa njia kumi](topic:sketch-arc-methods).
- **Ukubwa wa chuma wa UK.** Vifungu vya kulehemu vinaweza kutumia sehemu 976 za UK (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); andika ukubwa kama `305x165x40 UB`. Angalia [Vipengele vya muundo](topic:structural-members).

### Uchapishaji

- **Hatua ya kuchapisha.** Kitufe cha {{ui:Hatua ya kuchapisha}} kwenye upau wa zana (nyongeza ya 3D Print, imewashwa kwa chaguo-msingi) huweka miili ya sehemu yako kwenye kitanda chenye mistari-mistari: {{ui:Tandaza tambarare}}, {{ui:Geuza 90°}}, {{ui:Panga kwenye kitanda}}, {{ui:Weka vyote kwenye kitanda}}, {{ui:Hakiki tabaka}}, kisha {{ui:Tuma kwa kichapishi cha 3D}} kupitia USB, Klipper (Moonraker), OctoPrint au PrusaLink. Hakuna kinachotumwa hadi uthibitishe, na sehemu yako haibadilishwi kamwe. Kwa faili ya STL au 3MF badala yake, angalia [Andaa sehemu kwa uchapishaji wa 3D](topic:print-3d).
- **Uchapishaji wa resin.** Nyongeza kwenye {{ui:Mipangilio}} › {{ui:Programu-jalizi}}, zote zimezimwa hadi uziwashe: kikata-tabaka cha resin, jaribio la mfiduo, na miundo ya faili Elegoo GOO, SL1, Chitubox CBDDLP/CTB na Anycubic. Ukataji wa tabaka unaendeshwa kwenye nyuzi ya msaidizi, kwa hiyo ukurasa unabaki unaitikia.

## Kwenye kila programu

- Kila kidokezo cha kuelea juu ni tooltip ya Bootstrap.
- Kidokezo cha kuanza kina kitufe cha kufunga; kinabaki kimefungwa.
- Safu ya vichupo ya paneli isiyotosha inasogea kando badala ya kukatwa.
- Kichupo cha kivinjari kinaonyesha jina la hati iliyofunguliwa kabla ya PartCraft | CadCraft.
- {{ui:Mipangilio}} inaonyesha {{ui:Muundo}} wa eneo kazi kama orodha ya chaguo inayoshuka, na kisanduku cha lugha kinaorodhesha kila lugha ambayo build ina nayo.
- Uzito na Joto ni aina za vipimo kwenye mipangilio ya Vipimo.

## Imerekebishwa

- Menyu ya Tao ya mchoro sasa inaorodhesha kila mbinu.
- Upau wa zana wa nyongeza na kichwa cha kichupo cha kivinjari vilirekebishwa tarehe 2026-11-09.

## Mipaka halisi

- STEP halisi ilisomwa tena kwenye OpenCascade (vigumu halali, ujazo sawa na zile zilizohesabiwa kwa mkono). Bado haijafunguliwa kwenye kila programu ya CAD au CAM, na mkusanyiko hauandikwi kama STEP halisi.
- Hakuna kilichochapishwa kwenye kichapishi halisi. Ukataji wa tabaka, G-code na faili za resin zilisomwa tena na programu zetu wenyewe au kichapishi cha kuigiza; hakuna muundo wa resin uliopakiwa kwenye kichapishi, na ukubwa wa vichapishi na mfiduo ni mahali pa kuanzia.
- Solid FEM ni ya mstari, isiyo na mwelekeo na ya kunyumbulika, nyenzo moja kwa kila sehemu, bila mguso, kukubali au kujikunja. Msongo kwenye nyuso zilizowekwa na kona kali unategemea mesh. Ni msaada wa kukagua, haujakaguliwa na mhandisi.
- Muda wa mikusanyiko mikubwa unatoka kwenye seva isiyo na GPU; fremu ya undani kamili ya sehemu 20,000 bado inachukua sekunde hapo.
- Fillet zinafanya kazi kwenye jozi za nyuso; hakuna mchanganyiko wa jumla wa kipeo, wala fillet kati ya nyuso zisizokutana.
- Kiungo cha Rhino hakijawahi kuendeshwa ndani ya Rhino au Grasshopper halisi. Hati zilijaribiwa na programu mbili kwenye folda moja, si na watu wawili kwenye hifadhi ya mtandao.
- Kupachika nyuso kwenye skana halisi hakujakaguliwa kwa mkono. Lugha zisizo Kiingereza ni rasimu za mashine.
- Viwekaji vya Windows havijasainiwa kwa msimbo, na picha ya diski ya macOS haijathibitishwa (notarized). Angalia [Utatuzi wa matatizo](topic:troubleshooting).

Mabadiliko ya awali yako katika [Nini kipya katika 0.7](topic:whats-new-0-7).

## Awali: 0.8 na 0.8.1

Haya ndiyo yaliyobadilika katika PartCraft 0.8 na 0.8.1, ukilinganisha na 0.7. Uigaji hujibu unapohariri na unakuambia kinachovunjika kwanza, mikusanyiko inapata tafiti za mwendo, na maeneo kazi mapya yanatengeneza nyuso huru na sehemu zenye ukubwa kutoka fizikia. 0.8.1 ni toleo dogo la marekebisho.

### Mpya

**Uigaji**

- **Sasisha wakati ninahariri.** Weka alama kwenye {{ui:Sasisha ninapohariri}} kwenye kizuizi cha {{ui:Tatua}} na majibu yanafuata mabadiliko yako. Badilisha kipimo, mzigo au nyenzo, na jibu la haraka, lililotengenezwa kwa vipengele vikubwa mara nne, linaonekana papo hapo; ukisimama kwa sekunde moja hivi, jibu lililosafishwa la utafiti lenyewe linachukua nafasi yake. Matokeo yanasema unaona lipi. Kwenye cantilever ya chuma jibu la haraka lilikuwa ndani ya 1 % kwenye mkengeuko na takriban 4 % kwenye msongo ukilinganisha na lile lililosafishwa. Angalia [Kagua msongo na mkengeuko](topic:simulation#update-while-you-edit-live).
- **Kinachovunjika kwanza.** Kwa utafiti tuli au wa kujikunja, {{ui:Nini kitavunjika kwanza?}} kwenye kizuizi cha **Vunja** hupima mizigo hadi sehemu ikate tamaa. Inaorodhesha, mbaya zaidi kwanza, kipengele cha mzigo hadi kukubali kwa mara ya kwanza (kwa alama nyekundu pale msongo unapofikia kilele) na kipengele cha mzigo hadi kujikunja. Kipengele chini ya 1 kinamaanisha sehemu tayari inakata tamaa ikiwa imebeba mzigo, na Matatizo yanaonyesha kosa. Vipengele vinatokana na utafiti wa mstari, kwa hiyo ni vizuri kama ulivyo. Angalia [Kagua msongo na mkengeuko](topic:simulation#find-out-what-breaks-first-break-it).
- **Kukubali na mguso.** Aina mbili zaidi za utafiti: ya isiyo ya mstari ambapo nyenzo inafuata mstari wake ulionyooka hadi msongo wa kukubali kisha mteremko tambarare zaidi, na mkengeuko wa plastiki ukichorwa; na ya mguso ambapo vipande tofauti vinasukumana (bila msuguano) au vinabaki vimeshikana (vimeunganishwa). Hatua ya mzigo isiyoweza kutulia, au vipande vinavyozama sana ndani ya kila kimoja, vinaonekana kwenye paneli ya Matatizo. Msuguano, mteleziko mkubwa, mizunguko mikubwa, mikengeuko mikubwa na uchovu havitatuliwi. Angalia [Kagua msongo na mkengeuko](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Faili za CalculiX.** {{ui:Hamisha nje}} › {{ui:Faili ya CalculiX (.inp)}} inahifadhi utafiti kwa CalculiX, programu tofauti unayoisakinisha na kuiendesha mwenyewe; {{ui:Hamisha nje}} › {{ui:Matokeo ya CalculiX (.frd)}} inasoma faili yake ya matokeo tena kwenye mesh ile ile. PartCraft haianzishi programu hiyo kamwe, na inasema hivyo ikiwa sehemu ilibadilika tangu faili ihifadhiwe.

**Mikusanyiko**

- **Tafiti za mwendo.** {{ui:Mkusanyiko}} › {{ui:Mwendo}} inaendesha thamani ya kiungo kimoja katika muda unaotoa (kasi thabiti, ya taratibu, sine, au kwenda na kurudi), inaweka mkusanyiko katika kila hatua pamoja na viungio vyake na vitanzi vilivyofungwa, na inaripoti kinachogongana na sehemu zinavyokaribiana. {{ui:Ongeza nukta}} inachora nafasi, kasi na kuongeza kasi ya nukta, thamani ya kiungo na kibali dhidi ya muda; {{ui:Hifadhi CSV}} na {{ui:Hifadhi grafu}} zinaziandika nje. Baada ya {{ui:Endesha}}, upau wa uendeshaji wa Pitia hatua unahamisha mkusanyiko hadi hatua yoyote. Mipangilio ya utafiti huhifadhiwa kwenye faili ya mkusanyiko. Kasi na kuongeza kasi vinatokana na nafasi zilizorekodiwa, kwa hiyo tumia hatua zaidi ikiwa kilele kikali kinasomeka chini. Angalia [Kagua mkusanyiko kwa migongano na mwendo](topic:check-assembly#a-motion-study).

**Nyuso na sehemu kutoka fizikia**

- **Eneo kazi la Nyuso.** Chagua {{ui:Nyuso}} kwenye kisanduku cha {{ui:Eneo kazi}} kwa mikunjo na nyuso za NURBS kando ya sehemu: {{ui:Mkunjo}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Linganisha}} na {{ui:Zebra}}, pamoja na mwendelezo (G0, G1 au G2) unaopimwa kwenye nyuso halisi, na kingo iliyo mbaya kuliko ulivyoomba ikiorodheshwa kwenye Matatizo pamoja na marekebisho ya Linganisha. {{ui:Nyoosha}} inapima mistari ya hull kwa mapinduko na kuruka kwa mkunjo na kujenga upya zisizo laini ndani ya uvumilivu wako. Nyuso zimehifadhiwa kwenye faili ya sehemu na hazibadilishi vipengele vya sehemu. Angalia [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Eneo kazi la Mhandisi.** Chagua {{ui:Mhandisi}} kwenye kibadilishaji cha eneo kazi, chagua jenereta kisha ubofye {{ui:Mpya}}: script inapima sehemu kutokana na inachopaswa kufanya (joto la kuhamisha, mitiririko, shinikizo, nyenzo, mchakato wa uchapishaji) kwa fomula za kitabu na kuijenga, kisha inarudisha namba ilizotumia pamoja na vyanzo vyake, ukaguzi wake wa utengenezaji na faili za zana za uchambuzi. Pembejeo zilezile zinatoa sehemu ile ile kwenye kompyuta yoyote. Jenereta inahifadhiwa kwenye sehemu, na kufungua sehemu hakuendeshi script kamwe. Angalia [Sehemu kutoka fizikia: jenereta](topic:engineer-generators) na [Andika jenereta](topic:write-a-generator).

**Michoro, michoro na utengenezaji**

- **Mchoro kutoka picha.** {{ui:Vipengele}} › {{ui:Zaidi}} › {{ui:Mchoro kutoka picha…}} inafuatilia picha ya sehemu tambarare kwenye ardhi tupu (mstari wa nje na matundu) au mchoro wa kalamu kuwa mistari, matao na miduara. Unatoa urefu mmoja, unakagua hakiki na kutengeneza mchoro. Angalia [Misingi ya michoro](topic:sketch-basics#a-sketch-from-a-photo).
- **Kipimo na kugawanya kwa kuchapisha.** {{ui:Hamisha nje}} › {{ui:Kipimo cha kuchapisha (STL au 3MF)…}} inapima kwa mhimili bila kubadilisha sehemu, kwa mfano kwa posho ya kupungua. {{ui:Hamisha nje}} › {{ui:Gawanya kwa kuchapisha (zipu ya vipande)…}} inakata sehemu kubwa kuliko kitanda chako kuwa vipande vyenye namba vilivyounganishwa kwa vigingi, funguo, mikia ya njiwa, matundu ya dowel au mifuko ya sumaku. Angalia [Chapisha kwa 3D](topic:print-3d).
- **Karatasi zilizopangwa hadi G-code.** {{ui:Hamisha nje}} › {{ui:Karatasi zilizopangwa hadi G-code}} inasoma DXF iliyopangwa na kutengeneza programu moja kwa kila karatasi kupitia post utakayochagua: matundu na mikato kwanza, kisha mistari ya nje. Haipangi kuingia kwa kukata, mpangilio wa kukata wala kingo zilizoshirikiwa. Angalia [Panga sehemu bapa kwenye karatasi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Michoro inayojifanyia zaidi yenyewe.** {{ui:Karatasi}} › {{ui:Otomatiki}} inachagua karatasi ndogo kabisa ya ukubwa wa A inayoshikilia mionekano kwa kipimo kikubwa cha kawaida hadi 1:1. {{ui:Pima matundu}} inaweka alama ya katikati kwenye kila tundu, dokezo moja kwa kila ukubwa na nafasi kutoka kona ya chini kushoto ya mwonekano. Angalia [Tengeneza mchoro](topic:drawing-pdf).

**Kwenye kila programu**

- **Lugha.** Programu zinakuja kwa lugha 54. Zile zaidi ya Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.
- **Safu za upau wa zana.** {{ui:Mipangilio}} › {{ui:Kwa ujumla}} › {{ui:Safu za upau wa zana}} huchagua Kufunga mstari (kama hapo awali), safu 2 au safu 1; upau usiotosha unasogea kando. Utepe wa Vipengele vya PartCraft unaonyesha zana inayotumika zaidi kwa ukubwa na kuficha tofauti nyuma ya kitufe cha kugawanya.
- **Unganisha AI yako.** Studio ndiyo kitovu cha kuunganisha msaidizi wako mwenyewe kwenye programu zote nane, kwa ruhusa ya kusoma tu, kupendekeza au kuhariri kwa kila programu. Msaidizi aliyeunganishwa anaweza kupima sehemu kutoka sentensi kama kibano kwa mzigo, kuonyesha kazi yake na kila ukaguzi, na kuijenga; anaripoti asichokikagua (mkusanyiko wa msongo, uchovu, kutambaa kwa plastiki). Angalia [Tumia PartCraft na msaidizi wa AI](topic:use-with-ai-assistants).

### Imerekebishwa katika 0.8.1

- **Kuganda kwa kielekezi kwenye skrini nzima.** Uchaguzi wa kuelea juu sasa unadhibitiwa kasi. Sababu ni usomaji wetu bora zaidi na haikuthibitishwa na aliyeripoti.
- **Lugha wakati wa uendeshaji.** Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yakiwa yanaendeshwa; kabla ya hapo yalikuwa Kiingereza pekee. Hili bado halijajaribiwa kwenye kila jukwaa: tuambie lugha isipobadilika.

### Bado hakipo katika toleo hili

- Kuunganisha AI yako hakijakamilika: kuunganisha kwa bofya moja ndani ya Studio, kiunganishi cha wenyeji kwa AI ya kivinjari, ufunguo wako wa API ndani ya Studio na pakiti iliyochapishwa ya MCP havikuahidiwa. Studio haina AI yake yenyewe.
- Studio haijasainiwa kwa msimbo: Windows inaweza kuonya, na macOS inauliza ubofye kulia kisha Fungua. Angalia [Utatuzi wa matatizo](topic:troubleshooting).
- Mrundikano wa uvumilivu bado ni mwelekeo mmoja: angalia [Mrundikano wa uvumilivu](topic:tolerance-stackup).
- Kilichobaki kimeorodheshwa kwenye [Bado hakijajengwa](topic:not-built-yet).
