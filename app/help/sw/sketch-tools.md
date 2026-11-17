---
title: Splines, punguza, hamisha na zana nyingine za mchoro
summary: Chora splines za nukta za kupita na za nukta za udhibiti, punguza na ongeza mikunjo, hamisha mnyororo, kioo kuzunguka mhimili wa kati, ongeza poligoni na nafasi, tengeneza mifuatano ya jiometri ya mchoro na makadirio ya kingo za modeli.
keywords: spline, nukta ya kupita, nukta ya udhibiti, b-spline, nurbs, mkunjo, punguza, ongeza, hamisha, kioo, ulinganifu, poligoni, heksagoni, nafasi, mfuatano, mfuatano wa mstari, mfuatano wa duara, makadirio, makadirio ya kingo, jumuisha, badilisha vitu
from: 3ecb166a
---

Zana hizi hufanya kazi kwenye mchoro wa awali ulio wazi. {{ui:Spline}} na {{ui:Punguza}} ziko kwenye upau wa zana. Nyingine ziko chini ya {{ui:Zaidi}} mwishoni mwa zana za mchoro. Kila zana ni hatua moja ya kutendua, na {{key:Esc}} inaisimamisha. Kwa zana za msingi za kuchora tazama [Chora mchoro wako wa kwanza wa awali](topic:sketch-basics).

## Splines

Spline ni mkunjo laini. Kuna aina mbili.

| Zana | Ufunguo | Jinsi ya kuchora |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Bofya nukta ambazo mkunjo unapita. Maliza kwa {{key:Enter}}, {{key:Esc}}, kubofya kulia au kubofya mara mbili. Bofya nukta ya kwanza tena ili kuufunga spline |
| {{ui:Spline ya nukta za udhibiti}} (chini ya {{ui:Zaidi}}) | | Bofya nukta za udhibiti. Mkunjo unavutwa kuelekea kwake lakini unagusa ya kwanza na ya mwisho pekee. Poligoni ya udhibiti yenye nukta-nukta inaonekana unapochora na baadaye |

- **Nukta ni nukta za mchoro.** Ziburute, au ziwekee mahusiano na vipimo kama nukta nyingine yoyote. Nukta ya kwanza ya spline inaweza kunasa kwenye ncha ya mstari, ambayo huziunganisha kwa mahusiano ya kugusana.
- **Tanjenti kwenye ncha.** Chagua mstari, tao au spline inayokutana na ncha moja ya spline, kisha spline, kisha chagua {{ui:T Tanjenti}}. Mwelekeo wa ncha ya spline unafuata mstari. Tanjenti mbali na ncha za spline inakataliwa: "Tanjenti kwa spline inahitaji mstari, tao au spline inayokutana na ncha moja yake."
- **Ncha.** Bila mahusiano ya tanjenti, ncha za spline ya nukta za kupita ni asili (hakuna mkunjo kabisa kwenye ncha). Mkunjo ni wa daraja la tatu na unapita kila nukta, nafasi yake ikiwekwa na umbali kati ya nukta.
- **Splines zilizofungwa** zinaunda wasifu zenyewe. Splines wazi zinaunganisha mistari na matao kuwa kitanzi kilichofungwa kama mikunjo mingine yoyote.
- Kufuta nukta ndani ya spline kunaondoa nukta hiyo na kuhifadhi spline, mradi bado ina nukta angalau mbili (tatu ikiwa imefungwa).

Tolea na zungusha hujenga spline kwa kutumia kernel ya matundu kutoka vipande vifupi vilivyonyooka (mikunjo halisi inahitaji kernel sahihi: haijajengwa katika toleo hili). Usafirishaji wa DXF unaandika spline kama polilaini inayobaki ndani ya 0.01 mm kutoka kwenye mkunjo, kwa sababu DXF R12 haina kipengele cha spline.

## Punguza na ongeza

| Zana | Ufunguo | Jinsi |
|---|---|---|
| {{ui:Punguza}} | {{key:T}} | Elekeza mkunjo: kipande kitakachoondoka kinaonekana nyekundu, hadi makutano ya karibu. Bofya ili kukiondoa. Mkunjo usiovuka chochote unaondolewa wote |
| {{ui:Ongeza}} (chini ya {{ui:Zaidi}}) | {{key:E}} | Bofya mstari au tao karibu na ncha ili kuongeza. Unakua hadi mkunjo unaofuata unaokutana nao. "Hakuna kitu ambacho ncha hiyo inaweza kufikia." pale ambapo hakuna kinachozuia |

Punguza na Ongeza hufanya kazi kwenye mistari, matao, duara na splines (Ongeza: mistari na matao pekee).

- **Duara** lililopunguzwa linakuwa tao. Kipimo chake cha radius au kipenyo kinahamia kwenye tao.
- Kupunguza katikati ya mstari kunaacha mistari miwili inayobaki kwenye mstari huo huo ulionyooka. Kupunguza katikati ya tao kunaacha matao mawili yenye katikati moja na mahusiano ya sawa.
- **Spline** iliyopunguzwa inakuwa spline ya nukta za udhibiti inayofuata mkunjo wa zamani kwa usahihi. Mahusiano ya tanjenti kwenye ncha inayobaki yanabaki.
- Ncha mpya inawekwa kwenye mkunjo uliokata (kwenye mstari, tao au duara, au sawa-kwenye-nukta na ncha yake). Splines haziwezi kushikilia nukta, hivyo spline inayokata haiongezi mahusiano yoyote.

**Mahusiano yasiyofaa tena yanaondolewa**, na upau wa hali unasema yangapi. Kwa mfano, kipimo cha urefu kwenye mstari uliopunguzwa kinaondolewa, lakini mahusiano ya mlalo au sambamba yanabaki.

## Hamisha

1. Chagua {{ui:Hamisha}} chini ya {{ui:Zaidi}} au bonyeza {{key:O}}.
2. Bofya mstari, tao, duara au spline. Mnyororo wake wote unaangaziwa: mikunjo yote iliyounganishwa mwisho hadi mwisho, hadi nukta ambapo tatu au zaidi zinakutana. Ili kuhamisha sehemu tu ya mnyororo, chagua mikunjo hiyo kwanza, kisha chagua Hamisha na ubofye mojawapo.
3. Sogeza kielekezi upande ambapo nakala inaenda. Onyesho la kuchungulia la mistari ya nukta-nukta linafuata. Bonyeza {{key:B}} kwa pande zote mbili.
4. Bofya, andika umbali, kisha bonyeza {{key:Enter}}.

Mistari na matao vinahamishwa kwa usahihi kamili. Kona zinaongezwa au kupunguzwa hadi zikutane. Nakala ina kipimo kimoja cha **Hamisha**, na vipande vingine vinafuata: bofya mara mbili kipimo ili kubadilisha nakala nzima. Umbali mkubwa mno kwa mnyororo unakataliwa, kwa mfano "Umbali huo ni mkubwa mno kwa mnyororo huu: upande ungegeuka ndani nje."

Spline inahamishwa na spline mpya ya nukta za kupita iliyo ndani ya 0.001 mm ya hamisha halisi. Nakala hii imerekebishwa: haifuati mabadiliko ya baadaye, na haina kipimo cha Hamisha. Spline kwenye mnyororo inahitaji viungio laini (vya tanjenti) kwenye ncha zake.

## Kioo

1. Kwa Chagua, chagua kitu cha kuakisi.
2. Chagua {{ui:Kioo}} chini ya {{ui:Zaidi}} au bonyeza {{key:M}}.
3. Bofya mstari au mhimili wa kati wa kuakisi kuzunguka.

Kila nukta iliyoakisiwa inapata mahusiano ya **Ulinganifu** na asili yake, hivyo nakala inafuata asili inapobadilika. Nukta zilizo kwenye mstari wa kioo zinashirikiwa, na duara zilizoakisiwa zinapata mahusiano ya Sawa. Kama hakuna kilichochaguliwa, bofya vitu vya kuakisi, bonyeza {{key:Enter}}, kisha bofya mstari wa kioo.

## Poligoni na nafasi

| Zana | Jinsi |
|---|---|
| {{ui:Poligoni}} | Bofya katikati, kisha kona, kisha andika idadi ya pande (3 hadi 64). Pande ni sawa na kona ziko kwenye duara la ujenzi. Pima duara ili kuamua ukubwa wa poligoni |
| {{ui:Nafasi}} | Bofya katikati ya ncha moja, kisha katikati ya ncha nyingine, kisha bofya ili kuweka upana. Mistari miwili, inayogusa nusu duara mbili sawa |

## Mifuatano ya mchoro

Chagua jiometri kwanza, kisha:

- {{ui:Mfululizo wa mstari}}: bofya nukta ya mwanzo, kisha mahali nakala ya kwanza inaenda, kisha andika idadi ya nakala (ikiwa ni pamoja na ya asili).
- {{ui:Mfululizo wa duara}}: bofya katikati, kisha andika idadi ya nakala, zikisambazwa sawasawa kuzunguka mzunguko kamili.

Nakala zinachukua mahusiano kati ya jiometri iliyochaguliwa (mfululizo wa duara huacha ya mlalo na wima). Nakala hazijaunganishwa na asili: ukibadilisha moja, nyingine zinabaki kama zilivyo.

## Makadirio ya kingo za modeli

1. Chagua {{ui:Makadirio ya kingo}} chini ya {{ui:Zaidi}}.
2. Bofya ukingo ulio sawa au wa duara wa sehemu iliyo nyuma ya mchoro.

Ukingo unanakiliwa kwenye ndege ya mchoro kwa usahihi kamili na umerekebishwa (mahusiano ya Rekebisha). Haufuati mabadiliko ya baadaye kwenye sehemu. Bonyeza {{key:Q}} ili kuufanya jiometri ya ujenzi. Duara lililoinama kwa ndege ya mchoro lingekadiriwa kuwa duaradufu, kwa hiyo linakataliwa. Ndivyo ilivyo kwa kingo zisizo na umbo maalum na kingo zinazoelekea moja kwa moja nje ya mchoro. Makadirio yanahitaji kernel sahihi: bado hayajajengwa katika toleo hili.
