---
title: Maumbo huru kwa Form, na vipengele vya uso
summary: Sukuma na vuta ngome laini ya udhibiti kwenye nafasi ya kazi ya Form, kunja kingo, tumia ulinganifu, kagua na umalizie kuwa kigumu sahihi au uso sahihi, kisha weka viraka, loft, shona, nenepesha, sogeza na punguza nyuso kwenye Design. Kipi ni sahihi na kipi kimekadiriwa.
keywords: form, freeform, t-spline, subdivision, catmull-clark, ngome, quadball, mkunjo, ulinganifu, zebra, curvature, uso, kiraka, jaza, loft surface, shona, nenepesha, offset surface, panua, punguza
from: 0d326ef4
---

:::note
**Bado haijajengwa katika toleo hili.** Kumaliza umbo kuwa sehemu, na vipengele vya uso, kunahitaji kernel sahihi ya jiometri, ambayo toleo hili la PartCraft halina: linajenga kila sehemu kwa mesh kernel. [Kisichojengwa bado](topic:not-built-yet) kinaeleza cha kufanya badala yake. Sehemu iliyobaki ya ukurasa huu inaeleza jinsi vinavyofanya kazi kwa kernel sahihi.
:::

Nafasi ya kazi ya **Form** hutengeneza maumbo ya kikaboni. Unahariri **ngome** (cage), gridi mbaya ya pembe, kingo na nyuso. Umbo ni uso laini unaodhibitiwa na ngome (uso wake wa kikomo wa Catmull–Clark), kwa hiyo kusogeza kona moja hupinda uso kwa upole kuizunguka. Ukiwa tayari, **Finish** huongeza umbo kwenye historia ya sehemu kama kipengele cha *Form*, na kernel sahihi huligeuza kuwa nyuso halisi za B-spline. Baadaye unaweza kuweka fillet, kukata, kuunganisha na vipengele vingine, na kuuza nje kama STEP.

Chagua **Form** kwenye orodha ya **Workspace** upande wa kushoto wa upau wa zana.

## Anza ngome

1. Weka **Size** na **Divisions** kwenye paneli ya kulia. Divisions ni idadi ya nyuso kila upande unapata.
2. Bonyeza {{ui:Box}}, {{ui:Quadball}} au {{ui:Plane}} kwenye upau wa zana. Paneli pia ina **Cylinder**, **Torus** na **Faces by clicks**.

- **Quadball** ni ngome ya kisanduku iliyowekwa ili pointi zake za kona zilale kwenye duara. Kati ya pointi hizo uso uko ndani kidogo ya duara: takriban 0.4 % ujazo mdogo zaidi kwa migawanyo 2.
- **Plane** iko wazi, kwa hiyo inakuwa mwili wa uso (angalia "Surface features in Design" hapa chini).
- **Faces by clicks**: bonyeza pointi 4 kwenye ndege ya juu (ya ardhi) au kwenye kona za ngome ili kutengeneza uso mmoja. Nyuso zinazoshiriki kona huungana. Bonyeza {{key:Enter}} baada ya pointi 3 kwa pembetatu, au {{key:Esc}} kusimama.

Ngome yako isiyokamilika huhifadhiwa pamoja na faili ya sehemu, kwa hiyo unaweza kufunga faili na kuendelea baadaye.

## Chagua na sogeza

- Bonyeza kona, kingo au uso wa ngome. {{key:Shift}}+bonyeza huongeza au kuondoa vipengee. {{key:Esc}} hufuta uteuzi.
- Gizmo huonekana katikati ya uteuzi. Buruta mshale kusogea kwenye mstari wake, au mraba kusogea kwenye ndege hiyo. Bonyeza {{key:W}} kusogeza, {{key:E}} kuzungusha na {{key:R}} kubadilisha ukubwa, au tumia vitufe vilivyo kwenye paneli. {{ui:Gizmo}} kwenye upau wa zana hupitia kati yao.
- **Soft falloff** (mm) pia huvuta kona zilizo ndani ya umbali huo, zikififia polepole hadi sifuri kwenye ukingo wa umbali huo.
- Kila kuburuta ni hatua moja ya kutendua: {{key:Ctrl+Z}} na {{key:Ctrl+Y}} hufanya kazi kama kawaida.

## Badilisha ngome

Vitufe vya **Modify** kwenye paneli hufanya kazi kwenye uteuzi:

| Kitufe | Kinachofanya |
|---|---|
| {{ui:Extrude}} | Nyuso zilizochaguliwa husogea nje kwa **Extrude distance**, kando ya kawaida zake, na nyuso mpya za pembeni. Kingo wazi zilizochaguliwa huotesha nyuso mpya nje. |
| {{ui:Edge loop}} / Insert edge loop | Hugawanya mkanda wa nyuso za pande nne unaovuka kingo iliyochaguliwa, katikati ya njia. Mikanda zaidi hutoa mikunjo mikali zaidi. |
| Insert point | Huongeza kona katikati ya kingo iliyochaguliwa. |
| Subdivide | Hugawanya kila uso uliochaguliwa kuwa nyuso nne za pande nne kuzunguka katikati yake. |
| Bridge | Huunganisha nyuso mbili zilizochaguliwa, au mianya miwili (chagua kingo moja wazi kwenye kila moja), kwa bomba la nyuso. Zote mbili zinahitaji idadi sawa ya kingo. |
| Fill hole | Hufunga mwanya kupitia kingo wazi iliyochaguliwa kwa uso mmoja. |
| Weld | Huunganisha kona zilizochaguliwa kuwa moja, katikati yake. |
| Flatten | Husogeza kona zilizochaguliwa hadi kwenye ndege inayozifaa zaidi. |
| Delete | Huondoa nyuso zilizochaguliwa, kingo (nyuso mbili huungana) au kona. |

## Kingo kali, ulinganifu na onyesho

- {{ui:Crease}} hufanya kingo zilizochaguliwa ziwe kali. **Crease weight** 10 ni kali kabisa. Uzito mdogo hubaki mkali kwa hatua nyingi za kuboresha kisha hulainika, jambo linalotoa mzingo mdogo badala ya mkunjo mgumu. **Uncrease** huzirudisha laini. **Sharp vertex** hushikilia kona ili uso upite ndani yake kwa nukta.
- **Symmetry** hunakili ngome kuvuka X, Y au Z = 0. Huweka upande chanya, huunakili, na kuunganisha nusu mbili. Baada ya hapo, mabadiliko upande wowote hufanyika pande zote. Kona zilizo kwenye ndege ya kioo hubaki juu yake.
- {{ui:Display}} hubadilisha kati ya **Smooth** (uso ambao kipengele kitakuwa) na **Box** (nyuso zenyewe za ngome).
- **Analysis**: **Zebra stripes** huakisi mwanga wenye mistari kutoka mwonekano wa sasa. Hupinda vizuri kwenye uso laini na kukatika kwenye mkunjo. **Mean curvature** hupaka maeneo yanayoinama nje rangi nyekundu, maeneo yanayoinama ndani bluu na maeneo tambarare nyeupe. Hupimwa kwenye wavu unaoonyeshwa kwa fomula ya cotangent, kwa hiyo ni mwongozo, si kipimo.

## Kagua na umalizie

- **Check exact** hubadilisha ngome kwenye kernel sahihi bila kubadilisha sehemu yako. Inaripoti ni viraka vingapi vya B-spline ngome inatengeneza, vingapi ni sahihi, na kama matokeo ni kigumu kilichofungwa na halali, pamoja na ujazo wake.
- {{ui:Finish}} huongeza kipengele cha *Form* kwenye historia, au husasisha umbo ulilokuwa ukihariri, kisha kukurudisha kwenye Design. Ngome iliyofungwa inakuwa kigumu. **Operation** yake kwenye paneli ya Design inaweza kuwa New body, Join, Cut au Intersect. Ngome wazi inakuwa mwili wa uso.
- Ili kubadilisha umbo baadaye, chagua kwenye historia kisha bonyeza **Edit in Form**. Mwili uliojengwa umefichwa unapohariri ngome yake.
- **Discard** hutupa ngome bila kugusa historia.

## Kilicho sahihi na kilichokadiriwa

Kila uso wa pande nne wa ngome, ukisafishwa inapohitajika, unakuwa kiraka kimoja cha bicubic B-spline.

- Pale kila kona ya uso ilipo *ya kawaida* (kingo nne hukutana ndani ya uso, au tatu kwenye kingo wazi au kando ya mkunjo), kiraka ni **sahihi kabisa** kuwa uso wa mgawanyo. Majaribio huthibitisha hili hadi 1e-9 mm.
- Kuzunguka **nukta isiyo ya kawaida** (kingo tatu, tano au zaidi zinapokutana, kona ya uso wa pande tatu au tano, au mwisho wa mkunjo) hakuna kiraka sahihi cha polinomia. Hapo kiraka huchukua nukta sahihi na ndege ya tangenti kwenye kona hiyo pamoja na mikunjo ya kingo za majirani, kwa hiyo viraka bado vinakutana bila pengo. Mwendelezo wa tangenti kwenye kingo zinazokutana kwenye nukta hiyo ni wa kukadiria. Paneli ya Form na paneli ya kipengele zinatoa pembe kubwa zaidi, kwa kawaida chini ya 2°. **Level** ya juu zaidi kwenye paneli ya kipengele hufanya viraka hivi viwe vidogo na karibu zaidi.
- Mikunjo mikali ni kingo halisi za kigumu, kwa hiyo unaweza kuweka fillet.
- Kila kiraka ni uso wake, kwa hiyo umbo lina nyuso nyingi, na mistari huchorwa kati yake.

## Vipengele vya uso kwenye Design

Amri za uso ziko kwenye menyu ya {{ui:More}} ya Design, chini ya vipengele. Zinahitaji kernel sahihi. Miili ya uso huchorwa ikionekana kupitia kwa rangi ya bluu. Si sehemu ya kigumu hadi uinenepeshe au uishone.

| Amri | Kinachofanya |
|---|---|
| Patch | Hujaza kitanzi kilichofungwa cha kingo. Bonyeza {{key:Shift}}+bonyeza kingo za kigumu kwanza, au chagua mwili wa uso ili kujaza mwanya wake. **Tangent (G1)** hufanya kiraka kikutane na uso huo kwa upole. |
| Loft surface | Uso unaopita kwenye mnyororo mmoja wa mikunjo kwa kila mchoro (wazi au uliofungwa), kwa mpangilio wa historia. |
| Stitch | Hushona miili ya uso kando ya kingo zao zinazoshirikiwa. Zikifungwa, matokeo ni kigumu, kikiwa na Operation kama vipengele vingine. |
| Thicken | Huupa mwili wa uso unene: kando ya kawaida yake, dhidi yake, au nusu kila upande. Matokeo ni kigumu. |
| Offset surface | Nakala ya mwili wa uso iliyosogezwa kando ya kawaida zake. Ya asili inabaki. |
| Extend surface | Hukuza uso wa uso mmoja zaidi ya kingo unazochagua. |
| Trim surface | Hukata mwili wa uso mahali mwili mwingine wa uso, au kigumu, unapoukatiza. Bonyeza **Pick a point on the piece** kuchagua kipande cha kuweka, au weka kila kitu kingine. |

Stitch, Thicken, Extend na Trim hutumia mwili wa uso wanaoanzia nao. Vipengele vya baadaye hutumia mpya.

Vikwazo vya sasa: maumbo yenye vipande kadhaa vilivyofungwa tofauti hayageuki kuwa kigumu kimoja; maeneo ya kawaida hayaunganishwi kuwa nyuso kubwa zaidi; na angalia [Kisichojengwa bado](topic:not-built-yet).
