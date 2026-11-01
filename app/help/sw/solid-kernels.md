---
title: Kernel ya matundu
summary: Toleo hili la PartCraft hujenga kila sehemu kwa kernel ya matundu inayoendeshwa kwenye kivinjari chako. Hiyo inamaanisha nini kwa nyuso za duara, ujazo na faili, jinsi ya kujua inafanya kazi, na ni vipengele vipi vinavyosubiri kernel sahihi.
keywords: kernel, matundu, manifold, sahihi, exact, b-rep, yenye nyuso bapa, mikunjo, opencascade, occt, fillet inahitaji sahihi, bado haijajengwa, nje ya mtandao, webassembly
from: 68d32d16
---

Kernel ya jiometri ni injini inayogeuza historia yako kuwa kigumu. Toleo hili la PartCraft lina moja: **kernel ya matundu** (manifold-3d). Inaendeshwa kwenye kompyuta yako kama programu ndogo ya WebAssembly na iko tayari muda mfupi baada ya programu kufunguka. Hakuna kitu kuhusu sehemu yako kinachotumwa popote.

| | Kernel ya matundu |
|---|---|
| Maumbo ya duara | Nyuso bapa ndogo. **Mikunjo** kwenye paneli ya sehemu huweka jinsi zilivyo laini |
| Ujazo na maeneo | Ya kigumu chenye nyuso bapa, kidogo chini kwa sehemu za duara |
| Michoro, tolea, kata, zungusha, matundu, mifululizo, kioo, ndege za marejeo | Ndiyo |
| Fillet na Chamfer | Kwenye kingo zilizonyooka kati ya nyuso bapa; kingo zinazokutana zinakatwa kwa pembe |
| Shell na Rasimu | Shell hufungua nyuso bapa (unene sahihi wa ukuta); Rasimu inainamisha nyuso bapa |
| Usafirishaji | STL, 3MF, STEP (yenye nyuso bapa), PDF ya mchoro na DXF |
| Mionekano ya michoro | Inachorwa kutoka kwenye nyuso bapa, ikiwemo mionekano ya mkato |
| Nyuso na kingo | Zimepewa majina na zinatambuliwa kwa aina (bapa, silinda, koni, duara, torasi; moja kwa moja, duara), zikitokana na michoro: nafasi za kazi za Simulation, Generative na Manufacture, {{ui:Pima}}, kuchagua na jedwali la matundu zinazitumia |

Chip iliyo karibu na mwisho wa kulia wa upau wa hali inasema **Mesh kernel** wakati inajenga sehemu yako.

## Kinachosubiri kernel sahihi

Kernel sahihi (B-rep) huweka miduara, silinda na koni halisi, na fillet laini kwenye kingo yoyote, sweep, loft, nyuso, sheet metal, ribs, miili kadhaa, kuingiza STEP na kuhamisha STEP sahihi hujengwa juu yake. Matoleo ya awali ya majaribio ya PartCraft yalitumia OpenCascade kwa hilo. Leseni yake (LGPL) haifai toleo hili, ambapo kila programu ni Apache-2.0 na inatumia maktaba zenye leseni ya ruhusa pekee, kwa hiyo haijajumuishwa. Hakuna tarehe yake.

Hadi hapo, vipengele hivyo vinasema **Bado haijajengwa** unapovichagua: upau wa hali unatoa sababu, na vidokezo vya vitufe vyao vinaishia na "bado haijajengwa (inahitaji kernel sahihi)". [Kisichojengwa bado](topic:not-built-yet) kinaorodhesha kila kimoja pamoja na cha kufanya badala yake.

Sehemu iliyotengenezwa nao katika toleo la awali bado inafunguka. Vipengele hivyo hubaki kwenye historia vikiwa na alama ya bado haijajengwa (elea juu yake upate sababu), sehemu nyingine zote zinajengwa, na kuhifadhi kunavihifadhi bila kubadilishwa.

## Nyuso za duara na Mikunjo

Kernel ya matundu huchora duara kama poligoni. **Mikunjo** kwenye paneli ya sehemu huweka idadi ya pande za duara kamili; pande nyingi zaidi zinaonekana laini zaidi na zinapima karibu zaidi na thamani halisi, lakini zinachukua muda zaidi kujenga. Ujazo, maeneo na umbali kutoka {{ui:Pima}} ni wa kigumu hiki chenye nyuso: kwa tundu au boss ni kidogo kidogo kuliko umbo la duara.

## Mtandaoni na nje ya mtandao

Kernel ya matundu ni sehemu ya upakuaji wa programu yenyewe. Ili kufanya kazi bila muunganisho, hifadhi PartCraft kwa matumizi nje ya mtandao ukiwa mtandaoni: chagua {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu na usubiri hadi useme **Tayari nje ya mtandao**. Maelezo: [Kufanya kazi nje ya mtandao](common:offline).
