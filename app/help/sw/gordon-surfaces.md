---
title: Nyuso kupitia mtandao wa mikunjo (uso wa Gordon)
summary: Tengeneza uso mmoja laini unaopita kwenye gridi ya mikunjo ya wasifu na miongozo iliyochorwa kwenye michoro au kuchukuliwa kutoka kingo za modeli, uufunge kuwa kigumu wasifu unapokuwa umefungwa, pamoja na kilicho sahihi, kilichofaa na ujumbe wakati mtandao hauendani.
keywords: tangent, g1, tangency, tangent continuity, mirror plane, gordon surface, curve network, boundary surface, net surface, network surface, profiles, guides, guide curves, loft with guides, guide rails, skin, transfinite, coons, b-spline surface, freeform surface
from: ada3cb8b
---

:::note
**Bado haijajengwa katika toleo hili.** Uso wa Gordon unahitaji kernel sahihi ya jiometri, ambayo toleo hili la PartCraft halina: linajenga kila sehemu kwa mesh kernel. [Kisichojengwa bado](topic:not-built-yet) kinaeleza cha kufanya badala yake. Sehemu iliyobaki ya ukurasa huu inaeleza jinsi unavyofanya kazi kwa kernel sahihi.
:::

**Uso wa Gordon** ni uso mmoja unaopita kwenye kila mkunjo wa mtandao: seti ya **wasifu** unaokimbia upande mmoja na seti ya **miongozo** inayokimbia upande mwingine, zikivukana kama nyuzi za wavu. Ndivyo unavyounda ganda la meli, fender au mpini kutoka kwa mikunjo michache ya sehemu unayoidhibiti moja kwa moja. Unahitaji **kernel sahihi** (angalia [The mesh kernel](topic:solid-kernels)).

## Chora mtandao

1. Chora **wasifu**: mikunjo miwili au zaidi inayokimbia pamoja, kwa mfano sehemu kwenye ndege sambamba. Mistari, arc, duara na splines zote zinafanya kazi, na mnyororo wa mikunjo iliyounganishwa mwisho hadi mwisho unahesabiwa kama mkunjo mmoja.
2. Chora **miongozo**: mikunjo miwili au zaidi inayokimbia kuvuka wasifu. Kila mwongozo lazima uvuke kila wasifu mara moja, na kila wasifu uvuke kila mwongozo mara moja.
3. Hakikisha mikunjo inakutana kweli. Chora mchoro wa mwongozo ili mkunjo wake upite kwenye pointi za wasifu (shika kwenye pointi zilizokadiriwa, au andika viwianishi). Mtandao unakubali mapengo hadi **Tolerance** (0.01 mm kuanzia).

Mchoro mmoja unaweza kushikilia mikunjo kadhaa: kila mnyororo tofauti ndani yake ni mkunjo wake. Kwa mfano, unaweza kuchora miongozo yote kwenye mchoro mmoja kwenye ndege ya juu.

## Tengeneza uso

1. Chagua {{ui:More}} katika kundi la Features, kisha {{ui:Gordon surface}}.
2. PartCraft huchukua michoro ambayo bado hakuna inayoitumia: zile zilizo kwenye ndege sambamba na ya kwanza zinakuwa **wasifu**, nyingine ni **miongozo**. Angalia orodha upande wa kulia na weka kila mchoro kuwa **Profiles**, **Guides** au **Not used**.
3. Ili kutumia kingo za sehemu, bonyeza **Chagua kingo kama wasifu** (au **kama miongozo**), bonyeza kingo kwenye mwonekano, kisha bonyeza Esc.

Matokeo ni **mwili wa uso**. {{ui:Thicken}} hugeuza kuwa kigumu, {{ui:Stitch}} huyashona kwa nyuso nyingine, na {{ui:Trim surface}} hukata.

### Ufunge kuwa kigumu

Wasifu unapokuwa mikunjo iliyofungwa (duara, splines zilizofungwa, minyororo iliyofungwa) na wasifu wa kwanza na wa mwisho kila moja liko tambarare kwenye ndege, weka alama **Close to a solid**. Ncha zinafunikwa kwa nyuso tambarare na umbo lililofungwa linajiunga, linakatwa, linakatiza au linakuwa mwili mpya kama kipengele kingine chochote. Hivi ndivyo unavyotengeneza loft inayofuata miongozo ya mkunjo. Inafanya kazi vilevile na miongozo iliyofungwa.

## Tangenti kwa ndege kando ya kingo

Uso wa Gordon hupita kwenye mikunjo yake, lakini peke yake hauendani na mteremko wa kile unachokutana nacho. Ili kuufanya uache kingo ukiwa **tangenti** kwa ndege (G1), kama ndege ya kioo, ili nakala iliyoakisiwa iungane bila mkunjo, au uso tambarare unaoukuzia:

1. Chagua kipengele cha Gordon. Chini ya **Tangent to**, chagua ndege kwenye {{ui:Add a plane…}} (Mbele, Juu, Kulia au ndege ya marejeo), au chagua uso tambarare kwenye mwonekano kisha bonyeza {{ui:Add the picked flat face}}.
2. PartCraft hupata mkunjo wa mpaka wa mtandao unaolala kwenye ndege hiyo, na uso unaacha kingo ukiwa tangenti kwa ndege.

Ikiwa ndege moja ina mikunjo miwili ya mpaka (sakafu chini ya ncha zote mbili), iongeze mara mbili: nakala kila moja inachukua mkunjo unaofuata. Hadi ndege nne, moja kwa kila kingo.

Ripoti inasema kando ya mkunjo gani kila ndege ilifanya uso kuwa tangenti na pembe mwinuko zaidi uso ulikutana nayo kabla ya hapo. Miongozo ambayo tayari inaacha mkunjo huo ikiwa tangenti kwa ndege hufuatwa kwa usahihi. Miongozo inayopanda mbali nao hupindwa kwenye ukanda mwembamba karibu na kingo, na kiwango cha "follows every curve within" kwenye ripoti kinaonyesha kwa kiasi gani: chora miongozo ikiacha kingo tambarare kwa mlingano sahihi.

## Kilicho sahihi na kilichofaa

Paneli inaonyesha ni lipi kati ya haya linatumika, na uso unapotoka mbali kiasi gani na mikunjo yako.

- **Exact**: kila mkunjo ukiwa wa polinomia (mistari, splines na minyororo yake) na miongozo ikivuka wasifu wote kwa vigezo sawa, uso ni hasa uso wa Gordon wa mikunjo hiyo. Mtandao wa mikunjo ya iso iliyokatwa kutoka uso wa bicubic hurudisha uso huo; mistari minne iliyonyooka hutoa kiraka tambarare au kilichopinda (bilinear).
- **Fitted**: arc, duara na kingo za sehemu si za polinomia, na mikunjo inayovuka kwa vigezo tofauti inahitaji kupangwa upya ili makutano yalingane. Mikunjo hiyo inafaa kwa B-splines za ujazo ndani ya sehemu moja ya milioni ya ukubwa wa mtandao (takriban 0.00001 mm kwa sehemu ya 100 mm). Kiraka cha silinda kilichotengenezwa kwa arc na mistari kinabaki ndani ya 0.00001 mm ya silinda halisi.

Kati ya mikunjo, uso ni chochote mbinu inachotoa: wasifu uliochanganywa kuvuka, pamoja na miongozo iliyochanganywa kuvuka, ukitoa mchanganyiko wa pointi zao za makutano. Ni laini kila mahali isipokuwa pale mkunjo una kona kali. Pale nyuso mbili za Gordon zinaposhiriki mkunjo wa mpaka zinakutana kingo kwa kingo (G0), si tangenti.

## Mtandao usipofaa

| Ujumbe | Cha kufanya |
|---|---|
| "… do not meet: they pass 0.4 mm apart" | Fanya wasifu huo na mwongozo huo kuvuka, au ongeza Tolerance |
| "… meets … 2 times" | Mwongozo unaweza kuvuka kila wasifu mara moja tu: gawanya mkunjo unaojizungusha, au tumia wasifu wachache |
| "… in a different order" au "folds over itself" | Miongozo miwili inavukana (au wasifu wawili). Familia lazima zikimbie pamoja |
| "at least two profiles and two guides" | Ongeza mikunjo, au weka michoro zaidi kuwa Profiles au Guides |
| "mix open and closed curves" | Fanya wasifu wote wazi au wote wafungwa (vivyo hivyo kwa miongozo) |
| "An end … is not flat, so it cannot be capped" | Chora wasifu wa kwanza na wa mwisho uliofungwa kila moja kwenye ndege moja, au acha Close to a solid bila kuwekwa alama |

## Mipaka

- Uso mmoja wa B-spline kwa kila mtandao: hakuna tangenti ya G1 au G2 kwa nyuso jirani.
- Mshono wa mtandao uliofungwa, kwenye mwongozo wa kwanza, umeunganishwa kingo kwa kingo lakini si tangenti.
- Kipengele cha Loft chenyewe hakina reli za miongozo; tumia uso wa Gordon uliofungwa kuwa kigumu badala yake.
- Mikunjo yenye msokoto mwingi, au makutano yaliyotengana bila usawa kando ya mkunjo mmoja ikilinganishwa na mwingine, yanaweza kuhitaji pointi nyingi mno kulingana; kipengele kinasema hivyo.
