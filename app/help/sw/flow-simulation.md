---
title: Iga umajimaji kutiririka (Utafiti wa mtiririko)
summary: Mtiririko kupitia njia zilizo ndani ya sehemu au kuizunguka ndani ya kisanduku: mianya ya kuingia na kutoka, hewa, maji au umajimaji wako mwenyewe, kisha kasi na shinikizo kwenye ndege ya kukata inayoweza kuhamishwa, mistari ya mtiririko, shinikizo la uso, upotevu wa shinikizo, mizani ya wingi, buruta na kuinua, pamoja na kile mbinu ya laminar inachoweza na isichoweza kukuambia.
keywords: mtiririko, CFD, umajimaji, dinamiki ya umajimaji ya kikokotoo, mtiririko wa umajimaji, hewa, maji, mnato, msongamano, namba ya Reynolds, laminar, turbulent, upotevu wa shinikizo, kichwa cha upotevu, mlango wa kuingia, mlango wa kutoka, kifuniko, kofia, kasi, kiwango cha mtiririko, kiasi cha mtiririko, lita kwa dakika, shinikizo tuli, mistari ya mtiririko, ndege ya kukata, ndege ya sehemu, buruta, kuinua, mgawo wa buruta, mgawo wa kuinua, eneo la mbele, mtiririko wa nje, mtiririko wa ndani, bomba, mfereji, kikusanyo, pua, Lattice Boltzmann, mabaki, muunganiko
from: 7dc75f29
---

Utafiti wa **Mtiririko** hukokotoa jinsi umajimaji unavyosogea kupitia njia zilizo ndani ya sehemu yako (**ndani**) au kuizunguka (**nje**). Kwa chaguo-msingi ni **laminar, isiyobanwa, ya joto la kudumu na Newtonian**: mtiririko laini wa umajimaji ambao msongamano na mnato wake hubaki vilevile, bila joto, bila msukosuko na bila mvuto. Pia kuna modeli ya **majaribio** ya msukosuko, kwa ajili ya mifumo ya ubora tu (angalia hapa chini). Inafanya kazi kwenye nyuso zilizopewa majina ambazo mesh kernel hutoa kwa sehemu (angalia [The mesh kernel](topic:solid-kernels)).

Chagua **Simulation** kwenye kisanduku cha **Workspace**, bonyeza **New study** ikiwa hakuna, kisha weka **Type** kuwa **Flow (CFD)**. **Flow model** ni **Laminar** (chaguo-msingi) au **Turbulent (Spalart–Allmaras, experimental)**: angalia **Turbulent flow (experimental)** hapa chini. Mipangilio ya kimuundo ya utafiti inabaki, kwa hiyo unaweza kurudi nyuma. Mipangilio ya mtiririko huhifadhiwa kwenye faili ya sehemu na kila mabadiliko yanaweza kutenduliwa.

## Chagua umajimaji na seli

- **Fluid**: hewa au maji kwa 20 °C, au **Custom** yenye msongamano wako (kg/m³) na mnato wa nguvu (Pa·s). Hewa hutumia sheria ya gesi bora na sheria ya Sutherland (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); maji hutumia thamani za IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Cell size**: nafasi ya umajimaji imejazwa na ujazo sawa. Iache tupu kwa ukubwa wa kiotomatiki; paneli inaonyesha gridi. Kila mlango na njia inapaswa kuwa **angalau seli 8 hadi 10 kwa upana** ili upate namba zenye maana; seli ndogo ni sahihi zaidi na polepole zaidi (mara mbili ya nzuri ni takriban mara 16 ya kazi).
- **Walls**: **Interpolated** hufuata kuta zilizopinda kati ya seli (chaguo-msingi); **Bounce-back** huchukulia kuta kama ngazi za ujazo.

## Mtiririko ndani ya sehemu

Nafasi ya umajimaji lazima iwe imefungwa. Ongeza **Inlet** na **Outlet** kwenye paneli, kisha bonyeza nyuso zao kwenye mwonekano:

1. **Uso tambarare kuzunguka mlango** — ukingo wa mwisho wa bomba, uso wa mlango. PartCraft hufunga tundu la mlango hapo kwa kifuniko. Kila tundu kwenye uso huo ni la mlango huo, kwa hiyo mlango wa kuingia na wa kutoka vikifunguka kwenye uso mmoja, mfano kofia nyembamba juu ya mmoja wao.
2. **Uso wa ndani wa kofia** — kama katika zana nyingine za CAD: tengeneza bamba nyembamba (extrude) juu ya mlango kisha chagua uso wake unaogusa umajimaji.

Kwa mlango wa kuingia weka **velocity** (m/s, sawa kote kwenye mlango, kuingia kwenye sehemu) au **volume flow** (L/min). Kwa mlango wa kutoka weka **static pressure** (Pa, kipimo). Ikiwa mlango umeachwa wazi, au ukuta ni mwembamba kuliko seli, ndani huungana na nje na hesabu inasimama kwa ujumbe "No closed fluid space".

## Mtiririko kuzunguka sehemu

Weka **Flow** kuwa **External**, **Speed**, mwelekeo ambao mtiririko unaelekea, na umbali ambao kisanduku kinafika upande wa juu, upande wa chini na pembeni (tupu: 1, 3 na 1 mara ya ukubwa mkubwa zaidi wa sehemu). Uso wa kisanduku ambao mtiririko unaingia kupitia kwake ni mtiririko unaoingia, uso ambao unatoka kupitia kwake ni mtiririko unaotoka kwa 0 Pa, na nyuso zilizo sambamba na mtiririko huteleza. Kisanduku kidogo sana hubana mtiririko kupita sehemu na huongeza buruta. **Reference area** ni eneo ambalo mgawo wa buruta na kuinua hutumia (tupu: eneo la mbele la sehemu linaloonekana kwenye mwelekeo wa mtiririko); kuinua hupimwa kwenye +Y isipokuwa uchague mwelekeo mwingine.

## Tatua na usome matokeo

Bonyeza **Solve**. Hesabu inaendeshwa chinichini ikiwa na idadi ya hatua, mabaki na mchoro wa mabaki; **Stop** huisimamisha. Inasimama mabaki (kiasi ambacho uwanja wa kasi bado unabadilika kwa kila hatua) yanapokuwa chini ya lengo na shinikizo au buruta limetulia. Ikifika kikomo cha hatua kwanza, paneli inasema **Not converged** kwa rangi nyekundu: namba ni hali ya mwisho, si jibu thabiti.

- **Cut plane**: kasi au shinikizo tuli kwenye ndege inayopita kwenye modeli; chagua kawaida yake (X, Y au Z) na uburute kitelezi kuisogeza. Elea juu yake ili usome thamani.
- **Streamlines**: kutoka kwenye milango ya kuingia (ndani) au kutoka kwenye rake inayovuka mwisho wa mtiririko wa kisanduku kwenye ndege ya kukata (nje).
- **Part**: kigumu, kinachoonekana kupitia (ili uone ndege ndani), shinikizo la uso, au kimefichwa.
- **Table**: namba ya Reynolds, upotevu wa shinikizo (wastani wa shinikizo tuli kwenye milango ya kuingia ukitoa wa milango ya kutoka), mtiririko na wastani wa shinikizo wa kila mlango, nguvu kwenye sehemu, buruta na kuinua pamoja na mgawo wao na eneo la marejeo (nje), mizani ya wingi (inayoingia dhidi ya inayotoka), gridi na kitatuzi.

## Mtiririko wa msukosuko (majaribio)

**Flow model › Turbulent (Spalart–Allmaras, experimental)** hutatua mtiririko wa msukosuko wa wastani wa muda (steady RANS): modeli ya Spalart–Allmaras hutoa mnato wa mzunguko kwenye kila seli, na seli zilizo karibu na kuta hutumia sheria ya ukuta ya Spalding badala ya kuchora safu nyembamba hapo. Ni wa msukosuko kamili kila mahali (hakuna maeneo ya laminar, hakuna mpito).

**Haikupita ukaguzi wake wa usahihi.** Paneli, matokeo na jedwali vinasema hivyo kwenye kila utafiti wa msukosuko, na onyo hilo haliwezi kufungwa. Itumie kwa **mifumo ya mtiririko ya ubora** — mahali mtiririko unapotengana, kuzunguka tena au kuongeza kasi — **si kwa namba za usanifu**.

| Ukaguzi | Marejeo | Matokeo |
|---|---|---|
| Msuguano wa njia tambarare, seli ya kwanza kwa y⁺ 49 / 98 | Mlinganyo wa Dean | +3.3 % / +4.7 % |
| Njia yenye ukuta ulioonyeshwa (y⁺ ≈ 3), Re_τ 180: kasi ya wingi | Moser, Kim & Mansour DNS | −1 % |
| Njia tambarare, y⁺ 7–15 au 190–380 | Mlinganyo wa Dean | +9 hadi +22 % |
| Msuguano wa bomba kupitia seli za ujazo, lililokomaa kikamilifu, seli 10–30 kwa upana | Colebrook | 30 hadi 34 % juu mno |
| Kuunganishwa tena nyuma ya hatua inayoelekea nyuma, seli 6–14 kwa urefu wa hatua | Driver & Seegmiller, hatua 6.26 | 21 hadi 39 % fupi mno |

Matokeo yanaboreka polepole tu kwa seli ndogo zaidi. Baada ya kutatua, jedwali linaonyesha **y⁺ ya seli ya kwanza** (ndogo, wastani na kubwa kwenye seli za ukuta) na linaonya nje ya masafa yaliyokaguliwa ya 1 hadi 400; lenga takriban 30 hadi 300. **Muda wa kukimbia:** seli za kiotomatiki zimepangwa kwa dakika chache kwenye kiini kimoja cha kompyuta ndogo kwa kiwango cha juu (paneli inaonyesha hali mbaya zaidi kwa gridi na kikomo cha hatua; bomba dogo hutulia chini ya sekunde 20). Kupunguza ukubwa wa seli kwa nusu kunachukua takriban mara 16 ya muda. Nguvu kwenye sehemu hutoka kwenye mizani ya kasi kupitia milango au kisanduku.

**Kazi iliyofanyika hadi sasa:** seli za ukuta sasa zinalingana na msongo wao wa kukata kwa sheria ya ukuta, jambo lililoshusha makosa ya bomba na hatua hadi takwimu zilizo hapo juu bila kubadilisha matokeo ya njia tambarare. Hiyo haikutosha kwa namba za usanifu. Hatua inayofuata ni seli nzuri zaidi karibu na kuta.

## Inachoweza na isichoweza kukuambia

- **Modeli ya laminar** ni laminar tu. Kwenye mabomba mtiririko unageuka wa msukosuko juu ya namba ya Reynolds ya takriban 2,000 hadi 4,000; nyuma ya miili mipana, mkia wa mtiririko huanza kutoa mizunguko juu ya takriban 50. Paneli inaonya kwenye pointi hizi. Matokeo ya laminar kwa mtiririko wa msukosuko hupunguza upotevu wa shinikizo na kukosea buruta. Modeli ya msukosuko wa majaribio (hapo juu) inafunika mtiririko wa msukosuko kwa ubora; namba zake bado hazitegemewi.
- **Mbinu:** lattice Boltzmann method (D3Q19, two-relaxation-time collision) iliyokimbizwa hadi hali thabiti. Ndani kidogo inabanwa; PartCraft huweka mabadiliko ya msongamano kwa asilimia chache. Ikiwa mtiririko ni wa haraka mno kwa seli, haianzi na inaonyesha seli zinapaswa kuwa ndogo kiasi gani.
- **Imelinganishwa na:** mtiririko wa Hagen–Poiseuille kwenye bomba kupitia sehemu (gradient ya shinikizo ndani ya 1 % kwa seli 20 kwa upana), tundu la mfuniko linaloendeshwa la Ghia et al. (ndani ya 0.75 % ya kasi ya mfuniko), na kipimo cha silinda cha Schäfer–Turek (buruta ndani ya 1 % kwa seli 10 kwa kipenyo).
- Havijaigwa: uhamishaji wa joto, msukosuko wenye usahihi wa usanifu (modeli ya msukosuko ni ya majaribio), nyuso huru, kuvukiza kwa umajimaji, mvuto, sehemu zinazosogea, umajimaji usio wa Newtonian, kuta mbovu. Ujenzi wa maabara: kagua matokeo muhimu kwa njia nyingine.
