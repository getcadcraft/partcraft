---
title: Weka modeli ya .3dm hai
summary: Badilisha modeli katika programu iliyoitengeneza na uone mwili wa PartCraft ukifuata, kutoka Rhino 8 au ufafanuzi wa Grasshopper, huku vipengele vyako vikijengwa upya kwenye umbo jipya.
keywords: rhino, grasshopper, kiungo hai, muunganisho hai, 3dm, nurbs, parametric, kiungo, sawazisha, script, sukuma, mwili uliotolewa
from: cf4dc9b2
---

Endelea kuunda modeli pale unapoimodeli, na uchakate, kukagua na kuandika hapa. Kila mabadiliko katika programu nyingine hubadilisha mwili mmoja uliotolewa katika PartCraft, na vipengele vinavyofuata hujengwa upya kwenye umbo jipya.

:::note
Kiungo kinahitaji **CadCraft Studio** kwenye kompyuta ile ile. Kichupo cha kivinjari hakiwezi kuchukua muunganisho. Hakuna kinachopita kwenye intaneti: script inazungumza na Studio kwenye anwani ya kompyuta hii yenyewe, kwa tokeni.
:::

:::warning
Kiungo hiki kimejaribiwa kwa kiandishi cha faili cha script na kwa mbadala wa programu nyingine, bado si ndani ya Rhino au Grasshopper zenyewe. Kama kitu kitashindwa hapo, tuambie kilichosema.
:::

## Weka

1. Katika Studio, fungua PartCraft. Katika {{ui:Mipangilio}} › {{ui:PartCraft}} › {{ui:Assistants}}, weka tiki kwenye **Ruhusu visaidizi vya AI na scripts zitumie PartCraft**, kisha **Hariri**.
2. Katika Studio, chagua {{ui:Unganisha msaidizi}}. Inaonyesha anwani na tokeni utakayobandika hapa chini.
3. Pakua script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Kutoka Rhino

1. Endesha `cadcraft_link.py` kwenye kihariri cha script cha Rhino (Python 3 katika Rhino 8).
2. Mara ya kwanza, bandika anwani na tokeni. Zinahifadhiwa kwenye `.cadcraft-link.json` kwenye folda yako ya nyumbani, kamwe si kwenye modeli. Studio hutengeneza tokeni mpya kila inapoanza, kwa hivyo script itauliza tena hapo.

Endesha script tena ili kusimamisha.

## Kutoka Grasshopper

Endesha script mara moja kwenye Rhino kwanza, ili anwani na tokeni zihifadhiwe.

1. Ongeza kijenzi cha Script (Python 3) na ubandike `cadcraft_link.py` yote ndani yake.
2. Ipe ingizo hizi: `G` (jiometri, yenye ufikiaji wa orodha), `N` (jina, si lazima), `On` (swichi ya boolean), na `Target` (si lazima: `model` au `part`, ikiwa programu zote mbili zimefunguliwa).
3. Washa `On` iwe true.

Kila solve hutuma `G` na kubadilisha kile kijenzi kilichotuma mara ya mwisho.

## Inavyofanya kazi hapa

- **Mwili mmoja.** Kila kitu kinachoonekana kwenye modeli kinakuwa kipengele kimoja kilichotolewa, kama unavyofanya unapo [fungua faili la .3dm](topic:open-3dm-files).
- **Lazima ifungwe.** PartCraft hujaza mashimo madogo na fursa bapa, na programu nyingine inaambiwa ni ngapi. Ikiwa modeli bado haijafungwa, PartCraft huhifadhi mwili uliokuwa nao, na upau wa hali unasema hivyo. Mabadiliko yanayofuata yanayofunga humsasisha.
- **Maliza unachofanya.** Katika mchoro wa awali au karatasi ya mchoro, masasisho hukataliwa na kujaribiwa tena; yanafika ukirudi kwenye modeli.
- **Tendua.** Masasisho yaliyo ndani ya sekunde mbili kutoka kwa mengine hushiriki hatua moja ya kutendua.
- **Hifadhi.** Faili la sehemu huhifadhi kiungo. Endesha script tena baada ya kuifungua, na kipengele kile kile kitasasishwa.

**Njia moja tu.** Mabadiliko hapa hayarudi kwenye programu nyingine.

## Kama kitu kitaenda vibaya

- **"Hakuna dirisha la ModelCraft wala PartCraft linaloiruhusu":** fanya hatua ya 1 ya usanidi.
- **"Studio imekataa tokeni":** Studio imeanza upya. Nakili tokeni mpya na uendeshe script tena. Kwa Grasshopper, iendeshe kwenye Rhino kwanza.
- **"Haiwezi kufikia CadCraft Studio":** Studio haiendeshwi, au anwani imebadilika.
