---
title: Joto, msongo wa joto na kujikunja
summary: Tafuta halijoto katika sehemu kutoka kwa halijoto zilizowekwa, mtiririko wa joto, nguvu ya joto, mzunguko wa joto na mionzi (imara au kwa muda), pakia utafiti wa msongo kwa ongezeko la joto, na tafuta mzigo ambao sehemu nyembamba inajikunja, pamoja na kile kila mbinu inaweza na isichoweza kukuambia.
keywords: joto, uhamisho wa joto, halijoto, upitishaji wa joto, mzunguko wa joto, mgawo wa filamu, mionzi, emissivity, mtiririko wa joto, nguvu ya joto, uzalishaji wa joto, sinki ya joto, mpito, muda, kupoa, kupasha joto, Crank-Nicolson, implicit Euler, mizani ya joto, msongo wa joto, msongo wa joto kwa muda, mshtuko wa joto, kuzima ghafla, historia ya msongo, muda mbaya zaidi, upanuzi wa joto, mgawo wa upanuzi, kujikunja, Euler buckling, kipengele cha mzigo, mzigo muhimu, safu, nyembamba, eigenvalue
from: 1a1b7545
---

Tafiti hizi zinaishi kwenye mazingira ya Simulation kando ya msongo tuli na masafa ya asili (tazama [Kagua msongo na mkengeuko](topic:simulation)). Zichague kwenye kisanduku cha **Aina** cha paneli. Zinatumia mesh ile ile ya mchemraba mdogo na orodha ile ile ya nyenzo; kila nyenzo ya maktaba ina upitishaji wa joto, joto mahususi na mgawo wa upanuzi (thamani za kawaida za kitabu, zinaonyeshwa chini ya **Sifa**).

## Joto: joto linakwenda wapi?

1. Chagua **Joto (uhamisho wa joto)** kama **Aina**.
2. Ongeza masharti ya joto kutoka orodha ya **Add** ya paneli, kisha bofya nyuso zake (kama ilivyo kwa msaada na mizigo):
   - **Halijoto iliyowekwa**: uso unashikiliwa kwenye halijoto, kwa °C.
   - **Mtiririko wa joto**: W/m² unaoingia kwenye uso (hasi unatoka). Unatenda kwenye eneo halisi la uso, hata pale mchemraba unapounda ngazi.
   - **Nguvu ya joto**: jumla kwa wati, inayogawanywa kwenye nyuso zilizochaguliwa kwa eneo. Itumie kwa hita au chipu yenye nguvu inayojulikana.
   - **Mzunguko wa joto (convection)**: hewa au kiowevu chenye halijoto kinabeba joto mbali kwa h W/(m²·K). h ya kawaida: hewa tulivu 5–10, feni 25–100, maji 500–10,000. PartCraft haihesabu h: hakuna mtiririko wa kiowevu katika utafiti huu.
   - **Mionzi (radiation)**: uso unatoa mionzi kwa mazingira yenye halijoto, na emissivity kutoka 0 hadi 1. Ni **iliyonyooshwa kwa mstari** (linearised): mionzi imeandikwa kama mgawo unaotegemea halijoto na kutatuliwa tena hadi itulie. Inaenda kwa mazingira pekee: nyuso hazibadilishani joto kati yao.
3. **Uzalishaji wa joto** (W/m³) unapasha sehemu nzima kutoka ndani, kwa mfano sehemu ya kupasha kwa upinzani.
4. Bonyeza **Tatua**. Sehemu inapakwa rangi kwa halijoto; chagua **Mtiririko wa joto** kwenye **Onyesha** kuona mtiririko wa joto unapokwenda. Elekeza kwenye sehemu ili kusoma yote mawili.

Mtiririko wa joto imara unahitaji mahali pa joto kwenda: angalau halijoto moja iliyowekwa, mzunguko wa joto au mionzi. Sehemu inayopokea joto tu haina hali imara; ifanye ya mpito badala yake.

Jedwali linaonyesha halijoto ya chini kabisa na ya juu kabisa na mahali zilipo, mtiririko mkubwa zaidi wa joto, na **mizani ya joto**: joto linaloingia au kutoka kwenye kila sharti (halijoto iliyowekwa inahesabu kile lazima ilete au inachonyonya), joto lililozalishwa, jumla zinazoingia na kutoka, na **kutolingana**. Kutolingana kunapaswa kuwa sehemu ndogo sana ya joto lililoingia; kikubwa kinamaanisha matokeo hayaaminiki.

### Kwa muda (mpito)

Weka alama **Mpito** na upe **Halijoto ya kuanzia** (sehemu nzima inaanzia hapo), **Muda wote** na idadi ya **Hatua za muda**. **Implicit Euler** ni imara; **Crank–Nicolson** ni sahihi zaidi kwa hatua zilezile lakini inaweza kutetemeka baada ya mabadiliko ya ghafla. Baada ya kutatua, buruta kitelezi cha **Muda** kuona halijoto kwa kila wakati (kipimo cha rangi kinabaki kile kile kwa kila wakati). Mizani ya joto kisha inajumuisha joto linalohifadhiwa.

## Msongo wa joto: mabadiliko ya joto yanafanya nini kwa sehemu?

Katika utafiti wa **Msongo tuli** (au **Kujikunja**), weka **Mzigo wa joto**:

- **Mabadiliko ya halijoto sawa**: sehemu nzima inapata joto (au inapoa, kwa namba hasi) kwa kelvin nyingi hizo.
- **Halijoto kutoka masharti ya joto**: ongeza masharti ya joto kwenye utafiti huo; halijoto imara zinatatuliwa kwanza kwenye mesh ile ile, kisha sehemu inapanuka kwa α·(T − **halijoto isiyo na msongo**).
- **Halijoto kwa muda (utafiti wa mpito)**: ongeza masharti ya joto, kisha toa **Halijoto ya kuanzia**, **Muda wote**, **Hatua za muda** na **Mpangilio wa hatua** kama kwa utafiti wa joto wa mpito. Halijoto zinatatuliwa kwa muda kwenye mesh ile ile (mchemraba au tetrahedra), na utatuzi tuli kwenye halijoto ya kila wakati unatoa msongo wa wakati huo. **Msongo kwa**:
  - **Wakati mbaya zaidi** (mwanzo): **Suluhisho za msongo** zinatatua nyakati zilizogawanyika sawasawa katika mzunguko, pamoja na mwanzo (21 isipokuwa ubadilishe, kiwango cha juu 51). Matokeo yanafunguka kwenye wakati wenye msongo mkubwa zaidi wa von Mises; jedwali linautaja, chati ndogo inaonyesha msongo wa kilele dhidi ya muda, na kitelezi cha **Muda** kinaonyesha msongo kwa kila wakati uliotatuliwa (kipimo cha rangi kinabaki cha wakati mbaya zaidi).
  - **Wakati mmoja uliochaguliwa**: wakati mmoja, hatua ya muda iliyo karibu zaidi na **Muda (s)** unayotoa. Utafiti wa kujikunja daima unachukua wakati mmoja uliochaguliwa (mwisho wa mzunguko isipokuwa uweke mwingine).

Sehemu iliyozimwa ghafla (kuzama kutoka moto hadi baridi) au kupashwa joto ghafla inapata msongo mkubwa zaidi pale ndani na uso vinapotofautiana zaidi: mara nyingi mwanzoni kabisa. Halijoto iliyoshikiliwa inatumika tangu papo la kwanza, kama mabadiliko ya ghafla, kwa hiyo msongo wa mwanzo kabisa unategemea ukubwa wa kipengele (vipengele vichache tu vinaona mabadiliko). Usome kama "juu sana", na tazama nyakati zinazofuata za kitelezi kwa thamani ambazo mesh inazitatua. Msongo ni quasi-static: hakuna inertia, hakuna mtetemo kutokana na mabadiliko ya ghafla.

Sehemu inayoweza kukua kwa uhuru haina msongo wa joto: ishikilie kiasi tu cha kuzuia kusogea (kwa mfano nyuso tatu zisizo na msuguano kwenye pembe za kulia). Ikiwa imebanwa kati ya kuta mbili, inabanwa: upau wa chuma uliopashwa joto kwa 50 K kati ya kuta ngumu hubeba takriban 117 MPa. Mizigo ya joto inajisawazisha yenyewe, kwa hiyo athari bado zinasawazisha mizigo ya kimitambo pekee.

## Kujikunja: sehemu nyembamba inakubali lini?

1. Chagua **Kujikunja (mstari)** kama **Aina**, na ongeza msaada na mizigo kama kwa utafiti tuli.
2. Weka **Kipengele cha mzigo cha kutafuta** (mode ngapi za kujikunja).
3. Bonyeza **Tatua**. Kila mode ina **kipengele cha mzigo**: kizidishi cha mizigo yako ambapo sehemu bora inajikunja. Kipengele cha 3 kinamaanisha mara tatu ya mizigo yako; **kipengele cha mzigo chini ya 1 kinamaanisha inajikunja chini ya mizigo uliyotumia**. Jedwali pia linatoa jumla ya mzigo kwa kila kipengele. Umbo la mode linaonyesha inavyojikunja (ukubwa wake hauna maana).

**Kujikunja kwa mstari kunakadiria kupita kiasi mzigo halisi wa kujikunja.** Inadhani sehemu bora: iliyonyooka kabisa, bila msongo wa mabaki, na ya elastic. Sehemu halisi zina kasoro ndogo na zinaweza kuanza kutoa mavuno kwanza, na maganda membamba yanaweza kujikunja kwa sehemu ndogo ya thamani ya mstari. Tumia kiasi kikubwa cha usalama, na chukulia kipengele cha mzigo karibu au chini ya 3 kwa ganda jembamba kama onyo.

## Jinsi ya kuiamini kwa kiasi gani

PartCraft inakagua vitatuzi hivi dhidi ya fomula za mkono: upau kati ya halijoto mbili (sahihi kabisa), kipande cha kupoza (ndani ya 0.3 K), sahani inayojipasha yenyewe (sahihi kabisa), mchemraba unaopoa kwa muda (ndani ya 0.1 % kwa Crank–Nicolson), upau uliopashwa ghafla kwenye ncha moja, upau huru uliopashwa (hakuna msongo, ΔL = αLΔT), upau uliobanwa kati ya kuta (σ = −EαΔT), sahani iliyozimwa kwa muda dhidi ya suluhisho la kawaida la mfululizo (ndani ya 1 % kwenye mchemraba, 2.1 % kwenye tetrahedra katikati ya sahani; 0.5 % kwenye uso wake), wakati wa mwisho wa mzunguko mrefu dhidi ya msongo wa joto imara (sawa hadi milioni moja), na nguzo za Euler (ndani ya 1 % fixed–free, 1.5 % pinned–pinned). Kumbuka:

- **Thamani za nyenzo zisizobadilika.** Upitishaji, joto mahususi na upanuzi hazibadiliki kulingana na halijoto hapa; kwa digrii mia chache zinaweza kubadilika kwa 10–30 %. Ugumu nao haubadiliki.
- **Msongo kwa muda ni quasi-static na wa elastic**: kila wakati ni utatuzi tuli (bila inertia), na hakuna mavuno. Kwa hiyo kuzima ambako kungevunja uso kunaonyesha msongo juu ya kikomo cha mavuno.
- **Mgawo wa mzunguko wa joto ni ingizo lako**, hauhesabiwi kutoka mtiririko wa hewa au maji.
- **Hakuna upinzani wa mguso**: sehemu ni kigumu kimoja.
- **Kujikunja kwa mstari pekee**: hakuna kasoro, hakuna mavuno, hakuna tabia baada ya kujikunja.
- Ngazi ya mchemraba na pembe kali za ndani zinaathiri msongo wa joto kwa njia ile ile kama msongo mwingine (tazama [Kagua msongo na mkengeuko](topic:simulation)).
- Hii ni toleo la maabara: kagua sehemu zenye umuhimu kwa njia nyingine.

## Mada zinazohusiana

- [Kagua msongo na mkengeuko (Simulation)](topic:simulation)
- [Kisichojengwa bado](topic:not-built-yet)
