---
title: Mambo mapya katika 0.8 na 0.8.1
summary: PartCraft 0.8 inaongeza uchambuzi wa moja kwa moja unapohariri, ukaguzi wa Nini kitavunjika kwanza?, tafiti za mavuno na mguso zenye faili za sitaha kwa kisuluhishi cha nje, tafiti za mwendo kwa mikusanyiko, eneo kazi la Nyuso kwa nyuso huru, sehemu zilizopimwa kwa fizikia katika eneo kazi la Engineer, picha kuwa mchoro, hamisho za kuchapisha, karatasi zilizopangwa hadi G-code na michoro inayopima matundu yake. 0.8.1 inarekebisha kuganda kwa kishale katika skrini nzima.
keywords: mambo mapya, ni nini kipya, maelezo ya toleo, kumbukumbu ya mabadiliko, mabadiliko, 0.8, 0.8.1, toleo, vipengele vipya, uchambuzi wa moja kwa moja, sasisha wakati wa kuhariri, vunja, nini kitavunjika kwanza, kipengele cha mzigo, lisilo la mstari, mavuno, mkazo wa plastiki, mguso, calculix, utafiti wa mwendo, kibali, nyuso, nurbs, nyoosha, zebra, engineer, jenereta, sehemu iliyozalishwa, mchoro kutoka picha, skeli ya kuchapisha, gawanya kwa kuchapisha, kupungua, karatasi zilizopangwa, g-code, mchoro, pima matundu, msaidizi, mcp, lugha, safu za upau wa zana
from: 62e4dce2
---

Haya ndiyo yaliyobadilika katika PartCraft 0.8 na 0.8.1, ikilinganishwa na 0.7. Uigaji hujibu unapohariri na kukuambia nini kitavunjika kwanza, mikusanyiko inapata tafiti za mwendo, na maeneo mapya ya kazi yanatengeneza nyuso huru na sehemu zilizopimwa kwa fizikia. 0.8.1 ni toleo dogo la marekebisho.

## Mpya

### Uigaji

- **Sasisha ninapohariri.** Weka alama {{ui:Update while I edit}} kwenye kizuizi cha Solve na majibu yatafuata mabadiliko yako. Badilisha kipimo, mzigo au nyenzo, na jibu la haraka, lililofanywa kwa elementi mara nne kubwa zaidi, litaonekana mara moja; ukisimama kwa takriban sekunde moja, jibu lililosafishwa la utafiti lenyewe litachukua nafasi yake. Matokeo yanaonyesha unaloliangalia. Kwenye boriti ya chuma ya kutundika, jibu la haraka lilikuwa ndani ya 1 % kwa mkengeuko na takriban 4 % kwa mkazo ikilinganishwa na jibu lililosafishwa. Angalia [Angalia mkazo na mkengeuko](topic:simulation#update-while-you-edit-live).
- **Nini kitavunjika kwanza?** Kwa utafiti tuli au wa kujikunja, {{ui:What breaks first?}} kwenye kizuizi cha **Ivunje** hupandisha mizigo hadi sehemu itakapoachia. Inaorodhesha, mbaya zaidi kwanza, kipengele cha mzigo hadi mavuno ya kwanza (pamoja na alama nyekundu pale mkazo unapofikia kilele) na kipengele cha mzigo hadi kujikunja. Kipengele chini ya 1 kinamaanisha sehemu tayari inaachia ikiwa imepakiwa, na Matatizo yanaonyesha hitilafu. Vipengele hivi vinatoka kwenye utafiti wa mstari, kwa hivyo ni vizuri kama utafiti wenyewe. Angalia [Angalia mkazo na mkengeuko](topic:simulation#find-out-what-breaks-first-break-it).
- **Mavuno na mguso.** Aina mbili zaidi za utafiti: ile isiyo ya mstari, ambapo nyenzo hufuata mstari wake ulionyooka hadi mkazo wa mavuno kisha mteremko tambarare zaidi, pamoja na mkazo wa plastiki uliochorwa; na ile ya mguso, ambapo vipande tofauti vinasukumana (bila msuguano) au vinabaki vimeshikana (vimeunganishwa). Hatua ya mzigo isiyoweza kutulia, au vipande vinavyozama sana ndani ya kila kimoja, vinaonekana kwenye kidirisha cha Matatizo. Msuguano, kuteleza kwa kiasi kikubwa, mizunguko mikubwa, mikengeuko mikubwa na uchovu havitatuliwi. Angalia [Angalia mkazo na mkengeuko](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Sitaha za CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} huhifadhi utafiti kwa CalculiX, programu tofauti unayoisakinisha na kuiendesha mwenyewe; {{ui:Export}} › {{ui:CalculiX results (.frd)}} husoma faili lake la matokeo kurudi kwenye mesh ileile. PartCraft haianzishi programu hiyo kamwe, na inasema hivyo ikiwa sehemu imebadilika tangu sitaha ihifadhiwe.

### Mikusanyiko

- **Tafiti za mwendo.** {{ui:Assembly}} › {{ui:Motion}} huendesha thamani ya kiungio kimoja kwa muda utakaoweka (kasi ya kudumu, iliyolainishwa, sine, au kwenda na kurudi), huweka mkusanyiko katika kila hatua pamoja na viungio vyake na vitanzi vilivyofungwa, na kuripoti nini kinagongana na sehemu zinakaribiana kwa kiasi gani. {{ui:Ongeza nukta}} huchora nafasi, kasi na kuongeza kasi ya nukta, thamani ya kiungio na kibali dhidi ya muda; {{ui:Hifadhi CSV}} na {{ui:Hifadhi grafu}} vinaviandika nje. Baada ya {{ui:Endesha}}, upau wa Pitia hatua za endesha huhamisha mkusanyiko hadi hatua yoyote. Mipangilio ya utafiti inahifadhiwa kwenye faili la mkusanyiko. Kasi na kuongeza kasi hutokana na nafasi zilizorekodiwa, kwa hivyo tumia hatua zaidi ikiwa kilele kikali kinasomeka chini. Angalia [Angalia mkusanyiko kwa migongano na mwendo](topic:check-assembly#a-motion-study).

### Nyuso na sehemu kutoka fizikia

- **Eneo kazi la Nyuso.** Chagua {{ui:Surfaces}} kwenye kisanduku cha {{ui:Workspace}} kwa mikunjo na nyuso za NURBS kando ya sehemu: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} na {{ui:Zebra}}, ukiwa na mwendelezo (G0, G1 au G2) unaopimwa kwenye nyuso halisi, na ukingo ulio mbaya kuliko ulivyoomba ukiorodheshwa kwenye Matatizo pamoja na marekebisho ya Match. {{ui:Fair}} hupima mistari ya ganda kwa mabadiliko ya mwelekeo na ruka za mkunjo, na kujenga upya zile zisizo nyoofu ndani ya uvumilivu wako. Nyuso zinahifadhiwa kwenye faili la sehemu na hazibadilishi vipengele vya sehemu. Angalia [Nyuso huru (NURBS)](topic:nurbs-surfaces).
- **Eneo kazi la Engineer.** Chagua {{ui:Engineer}} kwenye kibadilishaji cha maeneo ya kazi, chagua jenereta na ubofye {{ui:New}}: hati hupima sehemu kulingana na kazi yake (kupasha joto ili kusogeza, mitiririko, shinikizo, nyenzo, mchakato wa uchapishaji) kwa fomula za kitabu cha kiada, kisha kuijenga, na kurudisha namba ilizotumia pamoja na vyanzo vyake, ukaguzi wake wa utengenezaji na faili za zana za uchambuzi. Ingizo sawa hutoa sehemu ileile kwenye kompyuta yoyote. Jenereta inahifadhiwa ndani ya sehemu, na kufungua sehemu hakuendeshi hati kamwe. Angalia [Sehemu kutoka fizikia: jenereta](topic:engineer-generators) na [Andika jenereta](topic:write-a-generator).

### Michoro, uchoraji na utengenezaji

- **Mchoro kutoka picha.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} hufuatilia picha ya sehemu bapa kwenye ardhi tupu (mstari wa nje na matundu) au mchoro wa kalamu kuwa mistari, mikunjo na duara. Unatoa urefu mmoja, unakagua onyesho la awali na kutengeneza mchoro. Angalia [Misingi ya uchoraji](topic:sketch-basics#a-sketch-from-a-photo).
- **Kupima na kugawanya kwa kuchapisha.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} hupima kwa kila mhimili bila kubadilisha sehemu, kwa mfano kwa posho ya kupungua. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} hukata sehemu kubwa kuliko kitanda chako kuwa vipande vyenye namba vilivyounganishwa kwa vigingi, funguo, mikia ya njiwa, matundu ya dowel au mifuko ya sumaku. Angalia [Chapisha kwa 3D](topic:print-3d).
- **Karatasi zilizopangwa hadi G-code.** {{ui:Export}} › {{ui:Nested sheets to G-code}} husoma DXF iliyopangwa na kutengeneza programu moja kwa kila karatasi kupitia post utakayochagua: matundu na vikato kwanza, kisha mistari ya nje. Haipangi njia za kuingia, mpangilio wa ukataji wala kingo zinazoshirikiwa. Angalia [Panga sehemu bapa kwenye karatasi](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Michoro inayojifanyia zaidi.** {{ui:Sheet}} › {{ui:Automatic}} huchagua karatasi ndogo kabisa ya ukubwa A inayoshikilia mionekano kwa kipimo kikubwa zaidi cha kawaida hadi 1:1. {{ui:Dimension the holes}} huweka alama ya katikati kwenye kila tundu, maelezo moja kwa kila ukubwa, na nafasi kutoka kona ya chini kushoto ya mwonekano. Angalia [Tengeneza mchoro](topic:drawing-pdf).

### Katika kila programu

- **Lugha.** Programu zinakuja katika lugha 54. Zile zilizo nje ya Kiingereza ni rasimu za mashine hadi mzungumzaji wa asili azisome.
- **Safu za upau wa zana.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} huchagua Funga mistari (kama awali), safu 2 au safu 1; upau usiolingana unasogea pembeni. Utepe wa Vipengele wa PartCraft unaonyesha zana inayotumika zaidi kwa ukubwa mkubwa na kuficha tofauti zake nyuma ya kitufe chenye sehemu mbili.
- **Unganisha AI yako.** Studio ndiyo kitovu cha kuunganisha msaidizi wako mwenyewe kwenye programu zote nane, ukiwa na ruhusa ya kusoma tu, kupendekeza au kuhariri kwa kila programu. Msaidizi aliyeunganishwa anaweza kupima sehemu kutoka sentensi kama bracket kwa mzigo, kuonyesha kazi yake na kila ukaguzi, na kuijenga; huripoti asichokikagua (mkusanyiko wa mkazo, uchovu, mtambaa kwenye plastiki). Angalia [Tumia PartCraft na msaidizi wa AI](topic:use-with-ai-assistants).

## Imerekebishwa katika 0.8.1

- **Kuganda kwa kishale katika skrini nzima.** Uchaguzi wa kuelea sasa umedhibitiwa. Chanzo ni usomaji wetu bora zaidi na hakijathibitishwa na aliyeripoti.
- **Lugha wakati wa kuendesha.** Studio na matoleo yaliyofungashwa yanaweza kubadilisha lugha yanapoendeshwa; hapo awali yalikuwa Kiingereza pekee. Hii bado haijajaribiwa kwenye kila jukwaa: tuambie kama lugha haibadiliki.

## Bado haijawa katika toleo hili

- Unganisha AI yako bado haijakamilika: kuunganisha kwa mbofyo mmoja ndani ya Studio, kiunganishi cha AI ya kivinjari, ufunguo wako wa API ndani ya Studio na kifurushi kilichochapishwa cha MCP hakiahidiwi. Studio haina AI yake yenyewe.
- Studio haijasainiwa kwa msimbo: Windows inaweza kuonya, na macOS inauliza bonyeza-kulia kisha Fungua. Angalia [Utatuzi](topic:troubleshooting).
- Mikusanyiko ya uvumilivu bado ni mwelekeo mmoja: angalia [Mikusanyiko ya uvumilivu](topic:tolerance-stackup).
- Kilichobaki kimeorodheshwa katika [Ambacho bado hakijajengwa](topic:not-built-yet).

Mabadiliko ya awali yako katika [Mambo mapya katika 0.7](topic:whats-new-0-7).
