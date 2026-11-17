---
title: Zungusha kipande kilichosokotwa
summary: Chora nusu ya wasifu kando ya mhimili wa kati, uizungushe kuwa sehemu ya duara, chagua mhimili na pembe, na utumie kukata kwa kuzungusha kwa mifereji.
keywords: zungusha, boss ya kuzungushwa, kukata kwa kuzungusha, kipande kilichosokotwa, lathe, shafti, mhimili, mhimili wa kati, mfereji, pembe, kata ya zungusho
from: 593b6929
---

{{ui:Zungusha}} inazungusha wasifu kuzunguka mhimili, kama kipande kilichotengenezwa kwenye lathe: shafti, kapi, flanji, vifundo. Kukata kwa kuzungusha (katika menyu ya {{ui:Zaidi}} ya kikundi cha Features) kunazungusha wasifu kuondoa nyenzo, kwa mifereji na mashimo ya ndani.

## Zungusha shafti yenye hatua

1. Chora kwenye **Ndege ya mbele**.
2. Bonyeza {{key:N}} kwa {{ui:Mhimili wa kati}}. Anza kwenye asili kisha bofya nukta moja kwa kulia, kwa mfano 100 mm mbele. Hii ndiyo mhimili. Ina vitone: jiometri ya ujenzi haiko sehemu ya wasifu.
3. Bonyeza {{key:L}} kwa Mstari. Chora **nusu** ya wasifu juu ya mhimili wa kati kama kitanzi kimoja kilichofungwa: anza kwenye mhimili wa kati, nenda juu, pitia hatua, kisha rudi chini kwenye mhimili wa kati, kisha kando yake hadi mwanzo. Ncha zake lazima ziungane: kitanzi lazima kifungwe.
4. Weka vipimo vya radii (urefu juu ya mhimili wa kati) na urefu. Urefu wa 10 juu ya mhimili wa kati unatoa kipenyo cha 20.
5. Chagua {{ui:Toka}}.
6. Chagua {{ui:Zungusha}}. Shafti inaonekana, zamu kamili.

Wasifu lazima ubaki upande mmoja wa mhimili. Ukivuka: "Wasifu unavuka mhimili. Uweke upande mmoja wa mhimili wa kati." Ukingo wa wasifu unaweza kulala juu ya mhimili.

## Mipangilio

| Mpangilio | Kazi yake | Chaguo-msingi |
|---|---|---|
| **Operesheni** | Boss (ongeza nyenzo), Cut (ondoa nyenzo), Intersect (hifadhi mwingiliano) au New body (mwili mpya) | Boss kwa {{ui:Zungusha}}, Cut kwa {{ui:Zaidi}} › {{ui:Kukata kwa kuzungusha}} |
| **Pembe (°)** | Inazungusha kwa umbali gani, kutoka juu ya 0 hadi 360 | 360 |
| **Mhimili** | Mhimili wa kati wa kwanza, au mstari wowote au mhimili wa kati kwenye mchoro, ulioorodheshwa kama "Mhimili wa kati 1 (l1)" au "Mstari 3 (l3)" | Mhimili wa kati wa kwanza |

Pembe ya sehemu huunda kabari, inayozungushwa kutoka ndege ya mchoro upande mmoja.

Ikiwa mchoro hauna mhimili wa kati na umeacha **Mhimili** kwenye Mhimili wa kati wa kwanza: "Chora mhimili wa kati (mstari wa ujenzi) kwenye mchoro wa kuzungushia." Unaweza pia kuchagua mstari thabiti wa wasifu kama mhimili.

## Kata mfereji

1. Shafti ikiwa imejengwa, fungua mchoro mpya kwenye **Ndege ya mbele** (ndege ile ile ya mchoro wa shafti).
2. Chora mhimili wa kati kwenye mhimili ule ule: anza kwenye asili na uuweke mlalo ili upate H, au uandike kwa **Ongeza kwa kuratibu** (kwa mfano kutoka `0, 0` hadi `100, 0`). Mchoro mpya hauwezi kushikamana na mistari ya mchoro mwingine.
3. Chora mstatili mdogo uliofungwa unaopishana na ukingo wa shafti pale mfereji unapokwenda.
4. Chagua {{ui:Toka}}, kisha {{ui:Zaidi}} › {{ui:Kukata kwa kuzungusha}}.

## Nyuso zilizozungushwa katika mikusanyiko

Zungusho lina mhimili ambao vipengele vingine na mikusanyiko inaweza kuutumia:

- {{ui:Mfululizo wa duara}} unatumia mhimili wa zungusho la mwisho kwa chaguo-msingi (ona [Vipengele vya mfululizo na kioo](topic:patterns-mirror));
- katika mkusanyiko, kiungo kati ya nyuso zilizotengenezwa kwa zungusho huanza kama kiungo cha **revolute**, na **Weka katikati kwenye** inatoa "Mhimili wa Revolve1" (ona [Jenga mkusanyiko](topic:build-assembly)).

## Mikunjo halisi na nyuso bapa

PartCraft hujenga zungusho kwa mesh kernel (chipu ya upau wa hali inasema "Mesh kernel"): maumbo ya duara ni nyuso bapa, 64 kwa mzunguko kwa chaguo-msingi, na ujazo ni kidogo chini ya thamani halisi (takriban 0.16 % kwa 64). Mwonekano, usafirishaji wa STL, 3MF na STEP vyote vimeundwa kwa nyuso hizo: weka **Mikunjo** (bofya nafasi tupu, kisha paneli ya kulia) kuwa Nzuri (128) au Nzuri sana (256) kwa laini zaidi. Silinda, koni na torasi halisi zinahitaji kernel sahihi: bado hazijajengwa katika toleo hili. Ona [Mesh kernel](topic:solid-kernels).
