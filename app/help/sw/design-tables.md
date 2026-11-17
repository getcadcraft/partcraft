---
title: Usanidi na jedwali za muundo
summary: Hifadhi ukubwa na matoleo kadhaa ya sehemu moja kama usanidi uliopewa majina, uliohifadhiwa kwenye faili la sehemu, pamoja na vipengele vilivyowashwa au kuzimwa katika kila moja; badilisha kati yao kwa kubofya mara moja, ingiza au toa kama jedwali la muundo la CSV, au jenga zote kutoka mstari wa amri.
keywords: jedwali la muundo, usanidi, configuration, ukubwa, familia ya sehemu, csv, lahajedwali, lahaja, inayoendeshwa na jedwali, zima, zima kipengele, kwa au bila, mpangaji
from: 17249afb
---

**Usanidi** ni ukubwa mmoja wa sehemu: seti yenye jina ya thamani za vigezo vyake. Sehemu huhifadhi usanidi wake kwenye faili lake yenyewe, kwa hiyo husafiri nayo. **Jedwali la muundo** ni kitu kile kile kama faili la CSV, safu mlalo moja kwa kila usanidi.

Usanidi huweka **vigezo**, kwa hiyo ongeza hivyo kwanza (tazama [Endesha sehemu kwa vigezo](topic:parameters)). Usanidi huhifadhi vigezo ambavyo ni namba za kawaida; vigezo vinavyohesabiwa kutoka vingine (kama `area = w * d`) hufuata vyenyewe.

## Hifadhi usanidi

1. Kwenye kichupo cha {{ui:Vigezo}}, weka vigezo vya ukubwa mmoja wa sehemu.
2. Chini ya **Usanidi**, andika jina (kwa mfano `Kubwa`) kisha bonyeza {{ui:Hifadhi thamani za sasa}} au {{key:Enter}}.

Usanidi mpya unawekwa alama **hai**. Ukibadilisha kigezo baadaye, unasema **hai, umebadilishwa tangu**, ili ujue sehemu haifanani tena nao.

## Badilisha, sasisha, badili jina, futa

- {{ui:Tumia}} huweka vigezo kuwa thamani za usanidi huo na kujenga upya sehemu.
- {{ui:Sasisha}} huhifadhi thamani za sasa kwenye usanidi huo.
- Ili kubadili jina, andika jina jipya kwenye kisanduku chake na bonyeza {{key:Enter}}.
- {{ui:Futa}} huondoa usanidi. Vigezo vinabaki na thamani zake.

Kila moja ya haya ni hatua moja: {{key:Mod+Z}} inarudisha nyuma. Ukibadili jina la kigezo, kila usanidi unafuata jina jipya; ukifuta kigezo, kinatoka kwenye usanidi zote.

## Washa na zima vipengele katika usanidi

Usanidi pia huhifadhi vipengele vilivyozimwa, kwa hiyo sehemu moja inaweza kuwa na matoleo **yenye** na **yasiyo na** kitu fulani: matundu ya kufungia, chamfa, boss.

1. Zima kipengele: bofya kwenye historia, kisha {{ui:Zima}} katika {{ui:Sifa}}.
2. Hifadhi usanidi kama kawaida, kwa mfano `Bila matundu`. Safu mlalo yake inaorodhesha kile inachozima.
3. Washa kipengele tena ({{ui:Washa tena}}) kisha hifadhi usanidi mwingine, kwa mfano `Na matundu`.

Mara usanidi wowote unapozima kipengele, kutumia usanidi huzima vipengele vyake na **kuwasha kila kipengele kingine**, pamoja na thamani zake za vigezo, kwa hatua moja. Usanidi uliohifadhiwa kabla vipengele havijazimwa katika lolote unahesabiwa kama "kila kitu kimewashwa". {{ui:Sasisha}} huhifadhi vipengele kama vilivyo sasa, pamoja na thamani.

Sehemu ambayo usanidi wake huzima vipengele huhifadhiwa kama toleo jipya zaidi la faili: PartCraft ya zamani husema faili linatoka toleo jipya badala ya kulifungua bila vipengele hivyo.

:::note
Jedwali la muundo la CSV hubeba thamani za vigezo pekee. Kuingiza jedwali juu ya usanidi hubadilisha thamani zake na kuhifadhi vipengele unavyozima; `--table` ya mstari wa amri hujenga thamani pekee.
:::

Faili la sehemu huhifadhiwa pamoja na usanidi na ule uliokuwa hai. Sehemu hufunguka na thamani zilizohifadhiwa nayo.

## Ingiza au toa jedwali la muundo

Jedwali la muundo ni faili la CSV lenye safu wima kwa kila kigezo na safu mlalo kwa kila usanidi:

```
name,width,thick,bolt
ndogo,100,6,6.6
wastani,140,8,8.5
kubwa,200,12,13
```

Safu wima ya kwanza inaweza kuitwa `name`, `config` au `configuration`; kila safu wima nyingine lazima iwe jina la kigezo cha sehemu. Seli ni namba, pamoja na vitengo ukipenda (`8in`). Seli tupu huacha kigezo hicho nje ya safu mlalo.

- {{ui:Leta CSV}} huongeza kila safu mlalo kama usanidi. Safu mlalo yenye jina la usanidi uliopo huubadilisha. Kuleta ni hatua moja.
- {{ui:Hamisha CSV}} huandika usanidi nje. Pasipo usanidi wowote bado, huandika safu mlalo moja ya thamani za sasa, mwanzo wa lahajedwali.

Jina la usanidi ambalo lahajedwali lingelisoma kama fomula (linaloanza na `=`, `+`, `-` au `@`) huandikwa likiwa na `'` mwanzoni.

## Ukubwa wote kwa mara moja

{{ui:Pakiti ya lahaja…}} chini ya **Usanidi** hujenga kila usanidi, au machache uliochagua, kama STEP, IFC, DWG na onyesho la awali kwenye zip moja, pamoja na jedwali la vigezo vyao: tazama [Tengeneza pakiti ya lahaja kutoka usanidi wako](topic:variant-pack).

Zana ya mstari wa amri hujenga faili moja kwa kila safu mlalo ya jedwali la muundo la CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Hamisha usanidi kama CSV kwanza, kisha pitisha faili hilo kwa `--table`. Tazama [Scripts na mstari wa amri](topic:scripts-and-cli). Sehemu iliyohifadhiwa kama script huhifadhi usanidi wake kwenye mstari wa `configs json …`.
