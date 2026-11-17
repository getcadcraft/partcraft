---
title: Angalia msongo na mkengeuko (Uigaji)
summary: Chagua nyenzo, rekebisha nyuso, ongeza nguvu, shinikizo au uzito wa sehemu yenyewe, tatua, kisha usome msongo wa von Mises, mwendo, kigezo cha usalama, mwitikio na marudio asilia kwenye modeli, pamoja na kile mbinu inaweza na isichoweza kukuambia.
keywords: uigaji, FEA, uchambuzi wa moja kwa moja, sasisha wakati wa kuhariri, ivunje, kipi kinavunjika kwanza, kigezo cha mzigo, isiyo ya mstari, plastiki, kunyumbuka, mnyumbuko wa plastiki, bilinia, mguso, jozi ya mguso, adhabu, imeungana, mguso bila msuguano, CalculiX, .inp, .frd, kipengele kikomo, msongo, mnyumbuko, von Mises, mwendo, mkengeuko, kigezo cha usalama, mpaka wa kunyumbuka, mwitikio, mzigo, nguvu, shinikizo, mvuto, uzito wa yenyewe, imewekwa, kishikio, kizuizi, nyenzo, chuma, alumini, titani, ABS, PLA, nailoni, marudio asilia, modi, mtetemo, matundu, ukubwa wa kipengele, tetrahedral, tetrahedra, matundu ya tetrahedra, voksel, ubora wa matundu, msongo mkuu, mnyumbuko sawa, makadirio ya kosa, nyuso zilizopinda, mashimo, mizunguko, kubadilika, usafishaji wa kiotomatiki, muungano, muungano wa matundu, uso sahihi, duara, koni, torasi, spline, umbo huru
from: 6f2fdec1
---

Nafasi ya kazi ya Uigaji inajibu swali "itapinda au kuvunjika chini ya mzigo huu?" kwa sehemu unayoibuni. Ni uchunguzi wa **tuli wa mstari** (mikengeuko midogo, nyenzo inabaki ya elastiki) au uchunguzi wa **marudio asilia**, unaotatuliwa kwenye matundu ya tetrahedra za quadratic zinazofuata nyuso za sehemu (au, ukichagua, ya mchemraba midogo sawa). Inafanya kazi kwenye nyuso zilizotajwa ambazo kernel ya matundu inazipa sehemu (angalia [Kernel ya matundu](topic:solid-kernels)).

Chagua **Uigaji** kwenye kisanduku cha **Eneo la kazi** upande wa kushoto wa upau wa zana. Sehemu yako haibadiliki; uchunguzi unahifadhiwa ndani ya faili ya sehemu na kila mabadiliko yake yanaweza kutenduliwa.

## Weka uchunguzi

1. Bonyeza **Uchunguzi mpya** kwenye paneli ya kulia.
2. Chagua **Nyenzo**. Paneli inaonyesha ugumu wake (E), uwiano wa Poisson, msongamano na nguvu ya mpaka wa kunyumbuka. Thamani ni takwimu za kawaida za vitabu vya marejeo; thamani zilizothibitishwa na muuzaji wako zinaweza kutofautiana.
3. Chagua **Matundu**:
   - **Tetrahedral (sahihi)**, cha mwanzo: tetrahedra za nodi 10 ambazo nyuso zake za nje zinakaa kwenye nyuso za sehemu, zenye kingo zilizopinda kwenye mashimo, mizunguko (fillet) na nyuso nyingine za mviringo. Nodi kwenye nyuso bapa, silinda, koni, duara na torasi, nyuso zilizozungushwa na zilizotolewa, na nyuso huru (B-spline) zinakaa kwenye uso sahihi; aina nyingine yoyote ya uso hufuata matundu yake ya kuonyesha, na jedwali la matokeo linasema nyuso ngapi zilifanya hivyo. Matundu hujifanya laini zaidi karibu na nyuso zilizopinda, kuta nyembamba na kingo kali.
   - **Mchemraba wa voksel (wa haraka)**: sehemu imejazwa mchemraba sawa. Ni wa haraka, lakini nyuso zilizopinda huwa hatua. Uchunguzi uliohifadhiwa kabla ya matundu ya tetrahedral kuwepo unabaki hivyo.
4. Acha **Ukubwa wa kipengele** tupu kwa ukubwa wa kiotomatiki (takriban tetrahedra 12,000, au mchemraba 20,000), au andika moja kwa milimita. Paneli inaonyesha takriban vipengele vingapi hufanya hivyo kabla ya sehemu ndogo zaidi kuongezwa. Kwa tetrahedra, **Vipengele vidogo zaidi kwenye nyuso zilizopinda** (imewashwa kwa chaguo-msingi) husafisha mashimo na mizunguko, pale msongo kwa kawaida unapofikia kilele.

### Safisha kiotomatiki

Kwa tetrahedra, uchunguzi wa tuli au wa kubonyea (bila mzigo wa joto), uchunguzi wa marudio asilia na uchunguzi wa joto tuli hutoa **Safisha kiotomatiki (adaptive)**. Weka tiki na weka:

- **Kosa lengwa (%)**: kutatua kunasimama kosa lililokadiriwa likiwa chini yake (1 % kwa kuanzia).
- **Mapito mengi zaidi**: idadi kubwa ya utatuzi inayoruhusiwa (5 kwa kuanzia, kiwango cha juu 10).

Kila pito hutatua, hupata vipengele vyenye kosa kubwa zaidi lililokadiriwa, huvigawanya (na majirani wachache tu wanaohitajika ili matundu yabaki kamili), kisha hutatua tena. Nodi mpya kwenye nyuso zilizopinda zinaenda kwenye uso sahihi. Matokeo kisha yanaonyesha jedwali na chati yenye, kwa kila pito, vipengele, vigezo visivyojulikana, kosa lililokadiriwa, msongo wa kilele (au joto) na mwendo (au mtiririko wa joto), pamoja na mstari unaoeleza kwa nini ilisimama: lengo limefikiwa, mapito yameisha, matundu yanayofuata yangekuwa makubwa mno, au pito limeshindwa (basi unaona pito la mwisho lililofanikiwa).

Soma makadirio kama makadirio. Yanatumia Zienkiewicz–Zhu; ikilinganishwa na majibu sahihi, husoma takriban 0.6 hadi 0.95 ya kosa halisi. Yanapima kosa kwenye **sehemu nzima**, kwa hiyo msongo wa kilele kwenye shimo au mzunguko kwa kawaida bado uko mbali kidogo wakati makadirio yanaonekana madogo: kwa msongamano wa msongo, weka lengo chini ya 1 % na uangalie kilele kikitulia kutoka pito hadi pito. Kwenye kona kali ya ndani au ukingo wa uso uliowekwa, msongo halisi hauna kikomo, kwa hiyo makadirio hayafikii hapo kamwe: mapito yanaisha badala yake.

**Marudio asilia na kubonyea.** Kwa uchunguzi wa marudio asilia makadirio yanashughulikia kila modi uliyoomba, kila moja ikihesabiwa sawa; jedwali na chati zinafuata marudio mawili ya kwanza. Kwenye sehemu yenye nyuso bapa pekee, marudio yanaweza tu kushuka kutoka pito hadi pito (kila matundu yanashikilia lile lililotangulia); nyuso zilizopinda pia hukaribia umbo lao halisi, jambo linaloweza kusogeza marudio kidogo kwa upande wowote. Kwa kubonyea, makadirio yanashughulikia msongo wa awali na modi za kubonyea, na jedwali linafuata vigezo vya mzigo. Imekaguliwa kwenye baa ya chuma ya 100 × 10 × 10 mm: marudio ya kwanza yanatulia kutoka 812.4 hadi 811.9 Hz kwa pito nne, 0.4 % chini ya Euler–Bernoulli (ambayo haizingatii kukata), na kigezo cha mzigo wa safu ndani ya 0.5 % ya Euler.

## Shikilia na pakia

Kila uchunguzi unahitaji angalau kishikio kimoja na, kwa msongo, mzigo mmoja.

1. Bonyeza {{ui:Fixed}} kwenye upau wa zana. Kishikio kipya kinachaguliwa na kinasubiri nyuso: bofya nyuso zinazoshikiliwa bila kusogea (bofya uso tena ili kuuachia). Bonyeza **Maliza kuchagua** au {{key:Esc}} ukimaliza. Koni za buluu zinaonyesha nyuso zilizoshikiliwa.
2. Bonyeza {{ui:Force}} kisha ubofye nyuso ambazo nguvu inazitenda. Kwenye paneli andika **Jumla ya nguvu** kwa newton na uchague **Mwelekeo** wake: ndani ya uso, au kando ya mhimili. Nguvu inagawanywa kwenye nyuso zilizochaguliwa kwa eneo. Mishale ya chungwa inaionyesha.
3. Bonyeza {{ui:Pressure}} kwa shinikizo kwa MPa (N/mm²) linalosukuma ndani ya nyuso zilizochaguliwa; shinikizo hasi huvuta.

Aina zaidi ziko kwenye orodha ya **Ongeza** ya paneli: **Uso bila msuguano** (uso unaweza kuteleza kando yake lakini hauwezi kujitenga nao; tumia kwa ndege za ulinganifu na vishikio laini) na **Mvuto** (uzito wa sehemu yenyewe, 9.81 m/s², kwenye mwelekeo unaochagua).

Kishikio kinachoacha sehemu huru kuteleza au kuzunguka kinakataliwa, kikisema ni mwendo gani unaobaki huru.

## Tatua na usome matokeo

Bonyeza {{ui:Solve}}. Kazi inaendeshwa chinichini; **Simamisha** inaghairi. Kisha:

- Sehemu imepakwa rangi kwa **msongo wa von Mises**; chagua **Mwendo** au **Kigezo cha usalama** kwenye **Onyesha**. Kipimo cha rangi kinaonyesha kiwango.
- Elekeza kwenye sehemu ili kusoma thamani chini ya kiashiria.
- Weka tiki kwenye **Umbo lililopinda** ili kuona sehemu ikipinda (mwendo unakuzwa na **Ukuzaji**; halisi ni ile ya jedwali).
- Jedwali linaorodhesha msongo mkubwa zaidi na ulipo, mwendo mkubwa zaidi, **kigezo cha usalama** kidogo zaidi (nguvu ya mpaka wa kunyumbuka ÷ msongo wa von Mises; chini ya 1 nyenzo inanyumbuka), mzigo uliotumika, **mwitikio** kwenye vishikio (zinasawazisha mzigo), na matundu yaliyotumika.

Kwa **marudio asilia**, chagua **Aina** hiyo, weka idadi ya **Modi**, kisha utatue. Kila modi inaonyesha marudio yake na umbo lake (maumbo yanapimwa hadi 1 kwenye mwendo wao mkubwa zaidi).

Ukibadilisha sehemu, matokeo yanaonyeshwa kuwa ya zamani: tatua tena.

## Kunyumbuka na mguso (uchunguzi usio wa mstari)

Aina mbili zaidi za uchunguzi zinaenda zaidi ya "nyenzo inabaki ya elastiki":

- **Isiyo ya mstari (nyenzo inanyumbuka)** hufuata mstari ulionyoka wa nyenzo hadi msongo wake wa kunyumbuka, kisha mteremko tambarare zaidi (**Mteremko baada ya kunyumbuka**, 1 % ya E pale usipoweka chochote). Mzigo unaendelea kwenye **Hatua za mzigo**; hatua isiyotulia inagawanywa nusu yenyewe. Matokeo yanaongeza **Mnyumbuko wa plastiki** kwenye grafu na kusema ni kiasi gani cha mzigo kilibebwa. Ikiwa hatua bado haitulii, uchunguzi unasimama kwenye hatua ya mwisho nzuri na paneli ya ⚠ Matatizo inaonyesha mahali: sehemu imepoteza nguvu hapo (kuanguka), au hatua ni kubwa mno.
- **Mguso kati ya vipande** unaruhusu vipande tofauti vya sehemu kusukumana. Ongeza **Jozi ya mguso**, chagua nyuso za upande A (zinazobonyeza) kwa {{ui:Pick faces}}, kisha upande B kwa {{ui:Pick side B faces}}. Vipande vya **bila msuguano** vinasukuma, vinateleza na kujitenga; vipande vya **imeungana** vinabaki vimeshikamana. Kila kipande kinapatiwa matundu yake, kwa hiyo pengo dogo kati yao ni sawa. Mguso ni mbinu ya adhabu: vipande vinazama kidogo ndani ya kila kimoja (**kipengele cha adhabu** × E ÷ ukubwa wa kipengele huweka ugumu wa mguso). Jedwali linaonyesha kuzama kwa kina zaidi, na paneli ya Matatizo inaonya ikiwa ni zaidi ya 1 % ya ukubwa wa kipengele: ongeza kipengele au tumia vipengele vidogo.

Zote mbili zinatumia matundu ya tetrahedral. Msuguano, kuteleza kwa kiasi kikubwa na mizunguko mikubwa havitatuliwi hapa.

## Iendeshe kwenye CalculiX

**Hamisha › Staha ya CalculiX (.inp)** (au {{ui:Save a CalculiX deck (.inp)}} kwenye paneli) inahifadhi uchunguzi kama faili ya ingizo kwa CalculiX, programu tofauti unayoisakinisha na kuiendesha mwenyewe: matundu yaleyale, nyenzo, vishikio, mizigo na jozi za mguso, katika mm, N na MPa. Iendeshe, kisha **Hamisha › Matokeo ya CalculiX (.frd)** husoma faili yake ya matokeo tena kwenye matundu yaleyale na kuonyesha mwendo (na msongo wa von Mises faili ikiwa na misongo). Ukibadilisha sehemu au ukubwa wa kipengele katikati, matundu hayatakuwa yaleyale na PartCraft inasema hivyo: hifadhi staha mpya.

## Ni kwa kiasi gani unaweza kuamini

PartCraft inakagua kitatuzi chake dhidi ya fomula za mkono (mkengeuko wa ncha ya cantilever PL³/3EI ndani ya 1 %, kunyooka kwa baa PL/AE kikamilifu, marudio ya kwanza ya cantilever ndani ya 3 %, msongo kuzunguka shimo kwenye sahani). Hata hivyo, zingatia mipaka hii:

- **Matundu.** Kwa tetrahedra, PartCraft inakagua mkengeuko wa cantilever na msongo wa kupinda (ndani ya 0.3 %), msongo kwenye shimo la sahani (Kt, ndani ya takriban 1 %), bomba nene chini ya shinikizo (Lamé, ndani ya 0.3 %) na marudio ya kwanza (ndani ya 0.4 %). Jedwali linaonyesha **ubora wa matundu** (pembe ndogo zaidi na kubwa zaidi kati ya nyuso za vipengele; chini ya takriban 10° kipengele ni duni) na **makadirio ya kosa la msongo**: ikiwa ni zaidi ya asilimia chache, tatua tena kwa ukubwa mdogo wa kipengele, au acha **Safisha kiotomatiki** ifanye hivyo. Kwenye sahani yenye shimo na baa yenye mikato miwili ya kingo, usafishaji wa kiotomatiki ulifika ndani ya 1 % ya Kt ya kitabu ukitumia takriban sehemu moja ya sita ya vigezo visivyojulikana ambavyo kufanya matundu yote kuwa laini zaidi kulihitaji. Kwa mchemraba wa voksel, shimo au mzunguko ni ngazi kwenye ukubwa wa mchemraba, kwa hiyo msongo hapo ni mbaya.
- **Pembe kali za ndani na kingo za nyuso zilizowekwa hazina msongo halisi wa kilele.** Thamani hapo inaendelea kukua vipengele vinapopungua. Soma misongo mbali kidogo na sehemu kama hizo, au zungusha kona kwenye modeli.
- **Matokeo ya kusoma.** Mbali na msongo wa von Mises, mwendo na kigezo cha usalama, uchunguzi wa tetrahedral unaonyesha **msongo mkuu wa juu na chini** (mvutano na mbano) na **mnyumbuko sawa**. Weka tiki kwenye **Onyesha matundu** ili kuona vipengele.
- **Uchunguzi tuli ni wa mstari na wa elastiki.** Kwa kunyumbuka na mguso tumia aina za uchunguzi zisizo za mstari hapo juu; mikengeuko mikubwa na uchovu havitatuliwi. Joto, msongo wa joto na kubonyea kwa mstari ni aina zao wenyewe za uchunguzi: angalia [Joto, msongo wa joto na kubonyea](topic:thermal-and-buckling).
- **Kila nyenzo ina sifa sawa katika pande zote.** Plastiki zilizochapishwa kwa 3D ni dhaifu kuvuka tabaka zake, mara nyingi kwa theluthi moja au zaidi.
- Hii ni toleo la maabara: angalia sehemu zenye umuhimu kwa njia nyingine.

## Sasisha unapohariri (Moja kwa moja)

Weka tiki kwenye **Sasisha ninapohariri** katika kizuizi cha Tatua, na majibu ya Uigaji yanafuata mabadiliko yako. Badilisha kipimo, mzigo, nyenzo au mazingira, na **jibu la haraka** linaonekana papo hapo, lililotengenezwa kwa vipengele vikubwa mara nne kuliko vya uchunguzi; ukisimama kwa muda (sekunde moja hivi), **jibu lililosafishwa** la uchunguzi huchukua nafasi yake. Matokeo yanasema ni lipi unaloliona ("Jibu la haraka" au "Jibu lililosafishwa") pamoja na ukubwa wa kipengele. Jibu la haraka ni zuri kwa mwelekeo na ukubwa: kwenye cantilever ya chuma lilikuwa ndani ya 1 % kwa mkengeuko na takriban 4 % kwa msongo kutoka kwa lile lililosafishwa. Amini lililosafishwa kwa namba utakazozitumia. Uchunguzi tuli, wa marudio asilia, wa joto na wa kubonyea hufanya kazi kwa njia hii; Moja kwa moja ni mpangilio wa mwonekano na haihifadhiwi kwenye sehemu. Tatua unayoibonyeza mwenyewe hubaki hivyo hadi mabadiliko yanayofuata.

## Tafuta kipi kinavunjika kwanza (Ivunje)

Kwa uchunguzi tuli au wa kubonyea, bonyeza **Kipi kinavunjika kwanza?** kwenye kizuizi cha **Ivunje**. PartCraft inapima mizigo ya uchunguzi (nguvu, shinikizo na uzito pamoja) hadi sehemu itoe nafasi, kisha inaorodhesha, kutoka hatari zaidi: **kigezo cha mzigo hadi mnyumbuko wa kwanza** (kigezo cha mzigo wa leo ambapo msongo wa juu zaidi wa von Mises unafikia mpaka wa kunyumbuka wa nyenzo, pamoja na alama nyekundu mahali inapotokea) na **kigezo cha mzigo hadi kubonyea** kwa vishikio na mizigo ile ile. Kigezo cha 4.3 kinamaanisha sehemu inachukua mara 4.3 ya mzigo wake kabla ya kunyumbuka; **kigezo chini ya 1 kinamaanisha tayari inatoa nafasi ikiwa imepakiwa**, na hiyo inaonekana kwenye orodha ya Matatizo kama hitilafu (matokeo dhaifu zaidi huonyeshwa kama dokezo hata kila kitu kikiwa sawa). Vigezo vinatokana na uchunguzi wa mstari kwenye tetrahedra kwa ukubwa wako wa kipengele, kwa hiyo ni vyema kama uchunguzi huo ulivyo: msongo kwenye uso uliowekwa au kona kali hauna kilele halisi (angalia hapo juu), na kigezo cha kunyumbuka hapo kitakuwa upande wa tahadhari. Msaidizi wako anaweza kuendesha ukaguzi huo huo kwa zana ya `break_run`.

## Inahusiana

- [Joto, msongo wa joto na kubonyea](topic:thermal-and-buckling)
- [Kukuza umbo kutoka kwenye mizigo (Generative)](topic:generative-design)
- [Pima umbali, pembe na uzito](topic:measure)
- [Kisichojengwa bado](topic:not-built-yet)
