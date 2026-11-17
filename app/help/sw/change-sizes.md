---
title: Badilisha ukubwa bila kufungua mchoro
summary: Endesha sehemu kutoka kwa namba kwenye paneli ya kulia: vipimo vya mchoro, kina, idadi na pembe, jinsi ya kupanga sehemu ili namba sahihi ziiendeshe, na mahali vigezo na milinganyo vinapochukua nafasi.
keywords: vigezo, vipimo vya kuendesha, nia ya usanifu, badilisha ukubwa, milinganyo, vigezo vya kimataifa, jedwali la muundo, usanidi, badilisha ukubwa tena, rekebisha kipimo
from: c2ae1a32
---

Kila ukubwa katika sehemu ya PartCraft ni namba unayoweza kuibadilisha baadaye: vipimo vilivyo kwenye michoro yake na mipangilio ya vipengele vyake. Huhitaji kufungua mchoro ili kubadilisha vipimo vyake.

## Badilisha kipimo cha mchoro kutoka paneli

1. Bofya kipengele kwenye historia, kwa mfano "Extrude1".
2. Chini ya mipangilio ya tolea yenyewe, **Vipimo vya mchoro (Sketch1)** inaorodhesha kila kipimo cha mchoro wake: "Umbali", "Kipenyo", "Pembe (°)" na kadhalika.
3. Andika thamani mpya kwenye kisanduku kimoja kisha bonyeza {{key:Enter}} au {{key:Tab}}.

Mchoro unatatuliwa kwa thamani mpya, na sehemu nzima inajengwa upya. Kuchagua mchoro wenyewe kunaonyesha orodha ileile kama **Vipimo vinavyoendesha**.

Radius au kipenyo lazima viwe zaidi ya sifuri, na pembe iwe kati ya 0 na digrii 180; upau wa hali unasema hivyo ikiwa sivyo.

:::tip
Kisanduku kipi ni kipi? Visanduku vimeorodheshwa kwa mpangilio ambao vipimo vilitengenezwa. Usipokuwa na uhakika, fungua mchoro (bofya mara mbili), bofya mara mbili kipimo kwenye turubai, kisha ukibadilishe hapo.
:::

## Andika namba kuu mara moja

Chagua kipengele kwenye historia (au ongeza tu) kisha andika namba: inaingia kwenye kisanduku kikuu cha kipengele, kile unachobadilisha zaidi (**Kina** ya tolea, **Pembe** ya revolve, **Kipenyo** cha tundu, **Idadi** ya mfumo, **Radius** ya fillet, unene wa ukuta wa shell). Bonyeza {{key:Enter}} kuiweka, au {{key:Esc}} kubaki na ile ya zamani. Kuongeza tolea kunasemwa kwenye upau wa hali: "Extrude1 imeongezwa. Badilisha namba zake upande wa kulia, au andika namba sasa kwa kina chake."

## Badilisha namba kwenye historia

Safu ya kila kipengele kwenye historia inaonyesha namba yake kuu kando ya jina lake: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Bofya mara mbili namba (au chagua safu na ubonyeze {{key:F2}}) na kisanduku kinafunguka hapo hapo. Andika thamani mpya kisha bonyeza {{key:Enter}}; {{key:Esc}} inabaki na ile ya zamani. Inafanya kazi kama kisanduku cha kipengele upande wa kulia: mipaka ileile, `=` kuandika mlinganyo kama `=width/2`, na hatua moja ya kutendua.

Kwenye Tolea, Tundu au mfumo, bofya mara mbili popote kwenye safu kunafungua kisanduku. Kwenye Fillet, Chamfer, Shell, Mteremko au Uzi, bofya mara mbili kwenye jina bado kunaenda kwenye kuchagua kingo au nyuso zake, kwa hiyo bofya mara mbili namba yenyewe. Michoro haina namba kwenye safu: bofya mara mbili kunafungua mchoro.

## Buruta kwenye mwonekano

Chagua Tolea kwenye historia (au ubofye kwenye mwonekano, kisha safu yake), na mshale wa rangi ya chungwa unasimama kwenye uso wake wa mwisho, huku kina kikiwa kwenye kisanduku kando yake. Buruta mshale: sehemu inafuata unapoburuta, na ukiachia, kina kipya kinawekwa kama hatua moja ({{key:Mod+Z}} inairudisha). Bonyeza {{key:Esc}} wakati wa kuburuta ili kurudi pale ulipoanzia. Kina kinasogea kwa hatua ya kumi ya ukubwa wake: 1 mm kwenye tolea ya 25 mm, 0.1 mm kwenye ile ya 3 mm.

Revolve inapata mshale uliopinda mwishoni mwa mzunguko wake: iburuze kuzunguka mhimili ili kubadilisha pembe, kwa digrii kamili kutoka 1° hadi 360°.

Au bofya kwenye kisanduku kilicho kando ya mshale, andika thamani (au `=` na mlinganyo) kisha bonyeza {{key:Enter}}. Hakuna mshale kwenye Tolea inayoenda **Kupitia yote** au hadi uso, wala kwenye thamani inayoendeshwa na mlinganyo: zibadilishe upande wa kulia.

## Namba zinazoendesha sehemu

| Mahali | Unachoweza kubadilisha |
|---|---|
| Mchoro | Kila kipimo: urefu, umbali, radii, vipenyo, pembe |
| Tolea na Kata | Kina, hali ya mwisho, mwelekeo, boss au kata |
| Zungusha na kata ya kuzungusha | Pembe, mhimili, boss au kata |
| Tundu | Kipenyo, kina, kupitia yote, kipenyo na kina cha counterbore |
| Fillet, Chamfer, Shell | Radius, umbali, unene wa ukuta na mwelekeo, na ni kingo au nyuso gani |
| Mfululizo wa mstari na duara | Idadi, nafasi au pembe, mwelekeo au mhimili |
| Sehemu | Mikunjo (jinsi maumbo ya duara yanavyogawanywa kwa pembe kwa undani) |
| Mchoro wa uhandisi | Mahali sehemu inapokatwa, ukubwa na kipimo cha maelezo, thamani za GD&T |

## Panga sehemu ili namba sahihi ziiendeshe

Namba unazotoa ndizo unazoweza kubadilisha. Tabia chache zinafanya mabadiliko ya baadaye yafanye kazi vizuri:

- **Pima kile kinachojali kwa kazi.** Ikiwa tundu linapaswa kubaki 15 mm kutoka ukingo, lipime kutoka ukingo huo, si kutoka asili.
- **Fafanua michoro kikamilifu.** Hapo badiliko linasogeza tu kile kinachopaswa (ona [Fafanua mchoro kikamilifu](topic:relations-dimensions)).
- **Tumia mahusiano kwa nia.** Sawa kwenye matundu mawili inamaanisha kipenyo kimoja kinaendesha yote mawili. Maumbo yenye ulinganifu: weka asili kwenye mstari wa katikati, au tumia Midpoint.
- **Chora kwenye nyuso zilizotengenezwa na vipengele.** Mchoro kwenye uso wa mwisho wa tolea unasogea kina kinapobadilika.
- **Tumia mfumo badala ya kunakili.** Tundu moja lililopangwa mara nane lina kipenyo kimoja cha kubadilisha.

## Zaidi ya namba moja

- **Namba moja inayoendesha kadhaa:** tumia vigezo na milinganyo: [Endesha sehemu kwa vigezo](topic:parameters).
- **Ukubwa kadhaa wa sehemu moja:** hifadhi kila moja kama [usanidi](topic:design-tables); zinahifadhiwa kwenye faili la sehemu.
- **Hesabu kwenye kisanduku cha namba:** andika `=40/2` au `=width / 2`. Hiyo inakuwa mlinganyo; ona [Milinganyo pande zote mbili](topic:equations-two-way).
- **Vipimo vya inchi:** sehemu inaonyesha milimita. Kwenye kisanduku cha namba chenye `=`, au kwenye kigezo, `2in` inageuzwa kuwa 50.8.

Ona [Kisichojengwa bado](topic:not-built-yet).
