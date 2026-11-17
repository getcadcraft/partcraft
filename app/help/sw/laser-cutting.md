---
title: Tuma mchoro kwenye leza
summary: Chagua kila tabaka linafanya nini (kata, alama, chora, jaza, picha), kagua mienendo ya kichwa, hifadhi G-code ya leza ya GRBL, au itume kutoka kivinjari baada ya kuweka fremu kwenye kazi.
keywords: leza, kikata leza, kichongaji leza, GRBL, G-code, chora, jaza, dither, uchongaji wa picha, alama, kata, Web Serial, Linux, weka fremu kwenye kazi, nguvu, kasi, pitio
from: 327b3c46
---

Paneli ya {{ui:Laser}} hugeuza matabaka ya mchoro kuwa programu ya leza inayoendeshwa na GRBL (vidhibiti vingi vya leza ndogo za hobi na za warsha ndogo, za diode na CO2). Katika PartCraft, chagua {{ui:Export}} › {{ui:Laser program…}}, kisha {{ui:Add outlines from a DXF…}}: mistari ya nje na mashimo huingia kwenye tabaka CUT. Mifumo bapa ya sehemu za chuma cha karatasi (zenye mistari ya kukunja kwenye tabaka BEND) inahitaji kernel sahihi, ambayo toleo hili halina. Mipangilio huhifadhiwa kwenye faili la sehemu au mkusanyiko.

:::warning
Jaribu kila mpangilio kwenye chakavu kwanza, vaa kinga ya macho inayolingana na leza yako, weka mfuniko umefungwa pale kuna mfuniko, na usiwahi kuacha leza inayofanya kazi bila mtu. Namba ambazo tabaka huanza nazo ni alama za kushikilia nafasi, si mapendekezo kwa nyenzo yoyote.
:::

## Chagua kila tabaka linafanya nini

Kila tabaka la mchoro ni safu mlalo. {{ui:Does}} huliweka kuwa **Kata**, **Alama**, **Chora mistari**, **Jaza maumbo**, **Chora picha** au **Usitume**, pamoja na {{ui:Power %}}, {{ui:Speed mm/min}} na idadi ya {{ui:Passes}}.

- **Jaza** huchoma ndani ya maumbo yaliyofungwa kwa mistari, ikiwa na {{ui:Nafasi ya mistari}} kati yake, kwa {{ui:Angle}}, pande zote mbili au moja, pamoja na overscan ili kichwa kiwe kwenye kasi leza inapowaka; cross-hatch huongeza pitio la pili kwa 90°. Umbo lenye shimo hubaki wazi kwenye shimo.
- **Chora picha** hugeuza picha kuwa nukta (Floyd–Steinberg, Atkinson, iliyopangwa, au nyeusi na nyeupe tu kwa kizingiti), au, kwa *Viwango vya kijivu*, kuwa nguvu inayobadilika.
- Mpangilio: picha na majazo kwanza, kisha uchoraji wa mistari, kisha alama, kisha kata, ili sehemu iliyokatwa isisogee wakati inachorwa. Ndani ya tabaka moja, njia hupita **ndani kwanza** (shimo kabla ya bamba lililomo), na inayo karibu zaidi kufuata.

## Kagua, kisha hifadhi

Onyesho linachora kile kichwa kinachofanya: mistari inayochoma kwa rangi, mienendo ya haraka kwa kijivu, na kisanduku cha kijani kuzunguka kila kitu kinachochoma. Chini yake kuna ukubwa, urefu wa kuchoma na makadirio ya muda (bila kuongeza kasi; mashine halisi huchukua muda zaidi). {{ui:Save G-code…}} huandika G-code ya hali ya leza ya GRBL: `$32=1`, `M4` (au `M3`) yenye thamani za S, mienendo ya `G0` na `G1`, na `M5` mwishoni. X0 Y0 ni kona ya chini kushoto ya kazi isipokuwa uchague asili ya mchoro: weka sifuri ya kazi ya mashine yako hapo. G-code inafuata hali ya leza ya GRBL iliyoandikwa; bado haijajaribiwa kwenye leza halisi.

## Tuma kutoka kivinjari

Katika Chrome na Edge, {{ui:Connect…}} hukuomba uchague mlango wa USB wa leza. Hakuna kinachounganishwa wala kutumwa hadi ubonyeze kitufe. Bonyeza {{ui:Frame the job}} kwanza: kichwa kinafuatilia kisanduku cha kazi na leza **imezimwa** (au kwa nguvu ya chini uliyoweka kwa kiashiria) ili uone itachoma wapi. Ndipo {{ui:Send job}} huwashwa, na huzima tena ukibadilisha kitu chochote. {{ui:Pause}} hushikilia kichwa, {{ui:Stop}} nayo hushikilia, huweka upya kidhibiti (leza inazima) na kutuma `M5`. Pale Web Serial isipokuwepo (Firefox, Safari, na CadCraft Studio, ambayo web view yake bado haina), hifadhi G-code na uitume kwa programu ya leza yako yenyewe.

## Bado hazijajengwa

Miundo ya vidhibiti vingine (Ruida, leza za Marlin, faili za wauzaji), vichupo na lead-ins, offset ya kerf, maktaba za nyenzo, mihimili ya rotary na Z, na upangaji wa kamera.
