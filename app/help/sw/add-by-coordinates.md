---
title: Ongeza jiometri ya mchoro kwa kuandika viwianishi
summary: Tumia Ongeza kwa viwianishi kwenye paneli ya mchoro kuweka mistari, mistari ya kati, mistatili, duara na nukta mahali sahihi, kwa kibodi pekee.
keywords: viwianishi, ingizo lililoandikwa, ingizo la kibodi, ingizo la namba, nafasi sahihi, x y, viwianishi kamili, ufikiaji, bila panya
from: 5e6c1656
---

Wakati unajua namba, kuziandika ni haraka kuliko kubofya na kupima. **Ongeza kwa viwianishi** iko kwenye paneli ya kulia kila wakati mchoro umefunguliwa. Pia inakuwezesha kujenga mchoro bila kipanya kabisa.

Viwianishi viko kwa milimita, kwenye shoka za mchoro wenyewe: x kwenda kulia na y kwenda juu unapotazama mchoro, huku (0, 0) ikiwa asili (duara jekundu lenye msalaba).

## Ongeza umbo

1. Fungua mchoro (ona [Chora mchoro wako wa kwanza](topic:sketch-basics)).
2. Kwenye paneli ya kulia, sogeza hadi **Ongeza kwa viwianishi**.
3. Chagua umbo kwenye **Ongeza**: Mstari, Mhimili wa kati, Mstatili, Duara au Nukta.
4. Jaza visanduku:

| Umbo | Visanduku |
|---|---|
| Mstari | **Kutoka x, y** na **Hadi x, y** |
| Mhimili wa kati | **Kutoka x, y** na **Hadi x, y** |
| Mstatili | **Kona x, y** na **Kona ya pinzani x, y** |
| Duara | **Kituo x, y** na **Radius** |
| Nukta | **Kwenye x, y** |

5. Chagua {{ui:Add}}, au bonyeza {{key:Enter}} kwenye kisanduku chochote.

Umbo linaonekana na upau wa hali unasema, kwa mfano, "Mstatili umeongezwa." Visanduku vinafutwa, tayari kwa kipengele kinachofuata. Kila nyongeza ni hatua moja ya kutendua.

Andika jozi kama namba mbili zilizotenganishwa kwa koma au nafasi: `0, 0`, `25 -10` au `12.5,40`. Namba hasi na desimali ni sawa. Radius lazima iwe zaidi ya sifuri. Kama kitu hakisomeki kama namba, upau wa hali unasema: 'Andika viwianishi kama "x, y" na radius zaidi ya sifuri.'

## Mfano: muhtasari wa sahani, ulioandikwa

1. Fungua mchoro kwenye **Front plane** (ndege ya Front).
2. **Ongeza**: Mstatili. **Kona x, y**: `-50, -30`. **Kona ya pinzani x, y**: `50, 30`. {{key:Enter}}.
3. **Ongeza**: Duara. **Kituo x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Kituo x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Chagua {{ui:Exit sketch}}, kisha {{ui:Extrude}}: sahani ya 100 × 60 yenye matundu mawili ya 10 mm.

## Viwianishi vilivyoandikwa vimewekwa, havijafungwa

Viwianishi vilivyoandikwa vinaweka jiometri mahali pake, lakini si **mahusiano**. Maumbo yanabaki bluu (hayajafafanuliwa kikamilifu) na yanaweza kusogea ukiyaburuta au ukibadilisha kipimo kingine:

- mstatili uliondikwa unapata kona yake, mahusiano ya mlalo na wima kama uliochora, lakini hakuna kinachoufunga kwenye asili;
- mstari uliondikwa hauna mahusiano ya mlalo au wima, hata kama uliandika mstari ulio sawa;
- kituo cha duara kilichoandikwa ni huru.

Ili kufafanua mchoro kikamilifu, ongeza vipimo na mahusiano baadaye (ona [Fafanua mchoro kikamilifu](topic:relations-dimensions)). Kwa mfano, chagua kona ya mstatili na asili kisha chagua {{ui:• Kugusana}}, au pima vituo vya duara kutoka asili.

:::note
Bila kipanya unaweza kufikia hatua hii: sogeza hadi safu ya ndege kwenye historia kwa {{key:Tab}} na vitufe vya mishale, bonyeza {{key:Enter}} ili kuichagua, bonyeza {{key:S}} ili kuchora, ongeza maumbo hapa, kisha fikia **Hariri** kando ya kila kipimo na {{ui:Toka kwenye mchoro}} kwa {{key:Tab}}. Kuchagua jiometri, na hivyo kuongeza mahusiano au vipimo vipya, bado kunahitaji kubofya au kugusa katika toleo hili.
:::

## Mipaka

- Tao bado haliwezi kuandikwa. Chora kwa zana ya Tao, au andika duara kisha utumie mahusiano.
- Hakuna viwianishi vya kiasi (kutoka nukta ya mwisho) wala viwianishi vya polari (urefu na pembe) kwenye kisanduku hiki.
- Jiometri iliyoandikwa haishikamani na nukta zilizopo. Andika viwianishi sawa na nukta iliyopo, kisha ongeza {{ui:• Kugusana}} kati yao ikiwa lazima zibaki zimeunganishwa.
