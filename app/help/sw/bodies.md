---
title: Unganisha, sogeza na badilisha ukubwa wa miili; mifumo ya njia
summary: Tengeneza miili tofauti, kisha iunganishe, ikate au iingiliane baadaye, isogeze, izungushe, ipange au inakili, ibadilishe ukubwa kwa usawa au kwa X, Y na Z, na nakili vipengele au miili kwenye mkunjo.
keywords: mwili, miili, miili mingi, mwili mpya, unganisha, boolean, jiunge, kata, ingiliana, toa, muungano, weka zana, hamisha mwili, nakili mwili, zungusha mwili, panga, sogeza, badilisha ukubwa, ukubwa usio sawa, nyoosha, affine, mfumo wa njia, mfumo kando ya mkunjo, mfumo unaoendeshwa na mkunjo
from: 6b1ea820
---

:::note
**Bado haijajengwa katika toleo hili.** Kufanya kazi na miili kadhaa kunahitaji kernel sahihi ya jiometri, ambayo toleo hili la PartCraft halina: linajenga kila sehemu kwa kernel ya mesh. [Kisichojengwa bado](topic:not-built-yet) kinaeleza cha kufanya badala yake. Sehemu iliyobaki ya ukurasa huu inaeleza jinsi inavyofanya kazi kwa kernel sahihi.
:::

Sehemu moja inaweza kuwa na kigumu zaidi ya kimoja. Kila kigumu tofauti ni **mwili**. Vipengele vingi huongeza au hukata kutoka kila mwili wanaougusa; zana za ukurasa huu zinafanya kazi kwenye miili yote unayoichagua. Ziko kwenye menyu ya {{ui:Zaidi}} ya kikundi cha Vipengele: {{ui:Unganisha}}, {{ui:Hamisha mwili}}, {{ui:Badilisha ukubwa wa mwili}} na {{ui:Mfululizo wa njia}}. Zote zinahitaji kernel sahihi (OpenCascade).

## Tengeneza mwili tofauti

Weka **Operesheni** ya tolea au ya revolve iwe **Mwili mpya** kwenye paneli yake ya kulia (sweep na loft pia zina chaguo hili). Kigumu kipya kinabaki tofauti hata pale kinapoingiliana na vingine. **Ingiliana** inahifadhi tu sehemu ya muingiliano wa umbo jipya na kilichopo.

Miili hupewa jina kwa jina la kipengele kilichoianzisha: "Extrude2". Nakala hupewa jina la asili yake na kipengele kilichoinakili: "Extrude2, nakala 1 ya Move1". Majina hubaki yale yale unapobadilisha ukubwa wa vipengele vilivyotangulia, ili vipengele vinavyotumia mwili viendelee kuupata. Ikiwa kuna miili miwili au zaidi, paneli ya sehemu (bofya nafasi tupu) inaziorodhesha pamoja na ujazo wake.

## Badilisha jina au ficha mwili

Bofya nafasi tupu kwenye mwonekano ili kuona paneli ya sehemu. Orodha yake ya miili (inayoonekana sehemu ina miili miwili au zaidi) ina kisanduku cha jina na kitufe cha {{ui:Ficha}} kwenye kila safu.

- **Badilisha jina:** andika jina jipya kwenye kisanduku kisha bonyeza {{key:Enter}} au bofya pembeni. Kila paneli kisha inalitumia: Unganisha, Hamisha mwili, mifumo. Futa kisanduku ili kurudi kwenye jina la kipengele kilichotengeneza mwili.
- **Ficha:** bofya {{ui:Ficha}} kwenye safu yake. Mwili unaondoka kwenye mwonekano na mibofyo inapita ndani yake, hivyo unaweza kuchagua nyuso zilizo nyuma yake. {{ui:Onyesha}} unairudisha; {{ui:Onyesha yote}} inarudisha miili yote iliyofichwa.

Kuficha kunabadilisha mwonekano tu. Mwili uliofichwa bado unajengwa, unahesabiwa kwenye ujazo na vipimo, na unahifadhiwa kwenye uhamishaji wa STL, 3MF na STEP. Majina na miili iliyofichwa vinahifadhiwa kwenye faili la sehemu, na kila badiliko ni hatua moja ya {{ui:Tendua}}.

## Unganisha miili

1. Shift+bofya uso mmoja wa mwili **lengwa**, kisha uso wa kila mwili **wa zana**.
2. Chagua {{ui:Zaidi}}, kisha {{ui:Unganisha}}.
3. Kwenye paneli ya kulia chagua **Operesheni**:

| Operesheni | Matokeo |
|---|---|
| Unganisha | Lengwa na zana vinakuwa mwili mmoja |
| Kata | Zana zinaondolewa kutoka lengwa |
| Ingiliana | Ni kile tu ambacho lengwa na kila zana vinashiriki kinachobaki |

**Mwili lengwa** ndio unaohifadhi jina lake. Weka au ondoa alama kwenye **Miili ya zana**, au tumia **Chagua kwenye mwonekano** na ubofye nyuso zake. **Weka miili ya zana** inaacha zana mahali pake pia (inafaa kwa ukungu na kiini chake). Ikiwa mwili wa zana ulishatumika na Unganisha ya awali, paneli inasema hivyo badala ya kuchagua mwili mwingine.

## Hamisha au nakili mwili

1. Chagua {{ui:Zaidi}}, kisha {{ui:Hamisha mwili}}. Mwili mpya zaidi umewekwa alama; weka alama kwenye yale ya kuhamisha.
2. Chagua aina ya **Hamisha**:

| Hamisha | Unachoweka |
|---|---|
| Tafsiri | **ΔX**, **ΔY**, **ΔZ** kwa milimita |
| Nukta hadi nukta | **Kutoka** na **Hadi**: bofya karibu na mwisho wa ukingo, kipengele cha nukta, au doa kwenye uso |
| Zungusha kuzunguka mhimili | **Mhimili** (X, Y, Z, kipengele cha mhimili, au **Chagua**: ukingo ulionyooka, duara au silinda) na **Pembe (°)** |
| Panga uso kwenye uso au ndege | **Uso wa kusogeza** (uso tambarare wa mwili), **Juu ya** (uso tambarare au ndege) |

Panga inazungusha mwili ili uso wake ulale juu ya uso mwingine, uso kwa uso, kisha unaiteleza kando ya kawaida ya uso huo tu. **Mwelekeo sawa** unaizungusha kinyume chake. **Nakili** inahifadhi asili na kuongeza nakala iliyohamishwa kama mwili mpya.

## Badilisha ukubwa wa mwili

1. Chagua {{ui:Zaidi}}, kisha {{ui:Badilisha ukubwa wa mwili}}, na weka alama kwenye miili.
2. Andika **Ukubwa**, au ondoa alama kwenye **Sawasawa** kisha uandike **Ukubwa X**, **Ukubwa Y** na **Ukubwa Z** (kando ya shoka za dunia).
3. **Kuhusu** ni nukta inayobaki mahali pake: katikati ya boksi la miili, au nukta unayochagua.

Ukubwa sawa ni sahihi. Ukubwa usio sawa hugeuza duara kuwa duaradufu: silinda inakuwa silinda ya duaradufu, ambayo hakuna uso wa kianalitiki unaoweza kuishikilia. Kwa hiyo nyuso zilizopinda zinakuwa nyuso za B-spline zinazobaki ndani ya 0.0000004 mm ya umbo halisi; nyuso tambarare na kingo zilizonyooka zinabaki sahihi. Paneli inasema kilichotokea. Vipengele vya ukubwa lazima viwe zaidi ya sifuri (tumia {{ui:Kioo}} badala yake).

## Nakili kando ya njia

1. Chagua kipengele cha kunakili kwenye historia, au usichague chochote ili kunakili mwili mpya zaidi.
2. Chagua {{ui:Zaidi}}, kisha {{ui:Mfululizo wa njia}}. Mchoro mpya zaidi ambao haujatumika unachukuliwa kama njia.
3. Kwenye paneli ya kulia weka:

| Mpangilio | Unachofanya |
|---|---|
| **Nakili** | Miili (kila nakala ni mwili mpya) au Vipengele (vinaunganishwa au kukatwa kama asili) |
| **Njia** | Weka alama kwenye michoro, au **Chagua kingo za modeli**; vipande lazima viunganike mwisho hadi mwisho |
| **Idadi** | Jumla, ikijumuisha asili |
| **Nafasi** | Sawa (kusambaa hadi mwisho wa njia wazi, au kuzunguka yote kwa njia iliyofungwa) au umbali uliowekwa |
| **Mwelekeo** | Fuata njia (kila nakala inageuka nayo) au Imerekebishwa (nakala zinabaki sambamba) |
| **Badili mwelekeo** | Nenda upande mwingine wa njia |

Nakala zinaanza pale njia inapopita karibu zaidi na asili, na zinatenganishwa kwa urefu kando ya mkunjo.

Mifululizo ya mstari na ya duara pia inaweza kunakili miili: weka alama kwenye **Nakili miili** kwenye paneli yao na uchague miili; kila nakala ni mwili mpya.

## Mipaka

- Miili inahitaji kernel sahihi; kernel ya mesh inabaki na kigumu kimoja na inasema hivyo.
- Ukubwa usio sawa hufanya nyuso zilizopinda kuwa makadirio ya karibu ya B-spline (ona hapo juu), si silinda au koni sahihi; nyuso za kuhama haziwezi kupimwa kwa njia hiyo bado.
- Kufuata njia kwenye mkunjo wa 3D unaosokota kunasafirisha nakala bila kuisokota; kwenye njia tambarare, mzunguko ni sahihi.
- Unganisha inafanya kazi kwenye vigumu tu. Miili ya uso inaunganishwa kwa {{ui:Shona}}.

Angalia pia [Ndege za marejeo, mihimili na nukta](topic:reference-geometry) kwa nukta na ndege "kati ya vitu", na [Vipengele vya mfumo na kioo](topic:patterns-mirror).
