---
title: Maktaba ya uhandisi
summary: Fomula za kitabu kama skripti zinazosomeka, kwa vitengo vya SI, kila matokeo na chanzo chake: mtiririko kwenye mabomba na njia, uhamishaji joto na vibadilisha joto, sehemu za shinikizo, dinamiki ya gesi, sifa za maji na hewa, nyenzo, na vitengo vinavyokaguliwa. Kila moja inafaa kwa nini na inaishia wapi.
keywords: uhandisi, maktaba, vitengo, Darcy-Weisbach, Colebrook, Reynolds, mgawo wa msuguano, Dittus-Boelter, Gnielinski, NTU, ufanisi, LMTD, pezi, Barlow, Lamé, pua, isentropiki, Mach, mtiririko uliozibwa, maji, hewa, sifa, nyenzo, vyanzo
from: 786ef967
---

Maktaba ya uhandisi ni seti ya skripti katika maktaba ya nafasi ya kazi ya Skripti (`craftlib/eng`). Kila moja ni kazi unayoweza kuisoma kutoka juu hadi chini, ikiwa na kichwa kinachotoa **mbinu** yake, **vitengo** vyake, **mipaka** yake, **marejeo** yake na **ukaguzi** wenye nambari iliyofanyiwa kazi. Zinatumia vitengo vya SI kote na zinarudisha kiasi kinachobeba **kitengo** na **chanzo**, kwa hiyo karatasi ya data inaweza kuchapisha mahali kila nambari ilipotoka.

## Vitengo vinavyokaguliwa

`to_si(10, 'bar', 'Pa')` inabadilisha thamani na inakataa kitengo kinachopima kitu kingine (urefu pale ambapo shinikizo linatarajiwa). `from_si`, `unit_convert(1, 'bar', 'psi')` na `unit_kind('W/(m K)')` ("upitishaji wa joto") zinafanya kazi kwa njia hiyo hiyo. `temp_k(25, 'C')` na `temp_from_k` zinabadilisha halijoto, ambazo zina mwanzo tofauti.

## Sifa

- `fluid('water', T)` na `fluid('air', T, p)`: msongamano, mnato, upitishaji, joto mahususi, nambari ya Prandtl. Maji 0 hadi 100 °C, hewa 250 hadi 600 K; nje ya hapo inasimama badala ya kukisia.
- `material('ss304')`: Moduli ya Young, uwiano wa Poisson, msongamano, mkazo wa mavuno, upitishaji, joto mahususi, upanuzi: thamani za joto la chumba kutoka karatasi za data zile zile za Uigaji. Muundo halisi hutumia takwimu zilizothibitishwa za msambazaji. Mikunjo ya halijoto bado haijajengwa.

## Mtiririko katika mabomba na njia

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminar, kisha mlinganyo wa Colebrook kwa mtiririko wa msukosuko; masafa ya 2300 hadi 4000 hayana mlinganyo wa kuaminika na yanasema hivyo), `darcy_weisbach`, `minor_loss`, `pipe_flow` (bomba la duara, kila kitu kwa mara moja) na `rect_channel` (mifereji ya mstatili ya laminar kwa mkunjo wa Shah na London).

## Uhamishaji joto

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (inachagua laminar au msukosuko na kutaja mlinganyo), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` na `ntu_for` (mahusiano ya ufanisi-NTU kwa mtiririko kinyume, sambamba, ganda-na-bomba, mtiririko-msalaba na mkondo mmoja unaobadilika) na `hx_size` (ukubwa wa UA ambao kazi inahitaji; inasema ni kiasi gani kinawezekana kazi isipoweza kufikiwa).

## Sehemu za shinikizo

`allowable_stress` (mavuno yakigawanywa kwa kipengele cha usalama), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, kwa kigezo cha hoop au cha mkato) na `wall_sphere`. Hizi ni kingo za kitabu, **si hesabu ya kanuni ya chombo cha shinikizo**: hakuna posho ya kutu, ufanisi wa kiungo wala vipengele vya kanuni.

## Dinamiki ya gesi

`isentropic` (uwiano kwa nambari ya Mach), `mach_from_area`, `choked_flow`, `throat_area` na `exit_mach`, kwa gesi kamilifu isiyo na msuguano, joto au mishtuko.

## Kagua matokeo

`check_stress`, `check_thermal` na `check_flow` zinaendesha vitatuzi vya PartCraft vya mkazo, upitishaji na mtiririko kwenye sehemu iliyotengenezwa kutoka skripti, na zinasoma nyuma mkazo wa juu zaidi na mwendo, halijoto na mtiririko wa joto, na upenyezaji wa mtandao wa njia. Hazibadilishi chochote kwenye vitatuzi. Ukaguzi wa mkazo na halijoto unatumia voksel, kwa hiyo uso uliopinda ni ngazi, na mkazo kwenye kona kali ya ndani au chini ya mzigo wa nukta unategemea ukubwa wa voksel.
