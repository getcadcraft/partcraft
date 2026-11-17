---
title: Sweep, loft na mteremko
summary: Sweep ya wasifu uliofungwa kando ya njia ya mistari ya mchoro au kingo za modeli, loft kupitia sehemu kwenye ndege tofauti, na kuongeza mteremko kwenye nyuso; pamoja na chaguo, matokeo sahihi na ujumbe.
keywords: sweep, boss ya sweep, kata ya sweep, bomba, njia, loft, boss ya loft, sehemu za kuchanganya, ruled, iliyonyooka, mteremko, pembe ya mteremko, nyuso zilizoteremka, ndege ya kati, mwelekeo wa kuvuta, ukungu
from: 9d637981
---

:::note
**Katika toleo hili** sweep na loft bado hazijajengwa: zinahitaji kernel sahihi ya jiometri, ambayo toleo hili la PartCraft halina. [Kisichojengwa bado](topic:not-built-yet) kinaeleza cha kufanya badala yake; sehemu za Sweep na Loft zinaeleza zinavyofanya kazi na kernel sahihi. **Mteremko unafanya kazi** kwenye nyuso bapa: kernel ya matundu ndiyo inayoujenga, kwa matokeo yale yale ambayo kernel sahihi inatoa.
:::

Zote tatu ziko kwenye menyu ya {{ui:More}} ya kikundi cha Vipengele (tazama [Kernel ya matundu](topic:solid-kernels)). Kila moja inaweza kuongeza nyenzo, kuikata, kubaki na mwingiliano pekee (**Intersect**) au kuunda **Mwili mpya** (sweep na loft: **Uendeshaji** kwenye paneli).

## Sweep

Sweep inasogeza wasifu uliofungwa kando ya njia: mabomba, mipini, chemchemi za waya, reli.

1. Chora **njia** kwenye mchoro mmoja wa awali: mistari na matao yaliyounganishwa mwisho kwa mwisho (au tumia kingo za modeli, hapa chini).
2. Chora **wasifu** kwenye mchoro mwingine wa awali ambao ndege yake inapita kwenye ncha moja ya njia, kwa mfano duara kwenye ndege ya juu mwanzoni mwa njia iliyochorwa kwenye ndege ya mbele.
3. Chagua mchoro wa wasifu na uchague {{ui:More}}, kisha {{ui:Sweep}}. Mchoro mwingine wa hivi karibuni zaidi unakuwa njia.

Kwenye paneli:

| Mpangilio | Inachofanya |
|---|---|
| **Njia** | Weka alama kwenye michoro inayounda njia (michoro kadhaa inaunganishwa mwisho kwa mwisho kuwa njia moja ya 3D); **Chagua kingo za modeli** inaongeza kingo za sehemu |
| **Mwelekeo** | Fuata njia (chaguo-msingi), Frenet, Imewekwa (sehemu zinabaki sambamba na wasifu), Shikilia mwelekeo mmoja, Kando ya curve ya mwongozo |
| **Kipimo cha mwisho** | Wasifu unakua au kupungua kwa mstari hadi ukubwa huu mwishoni (1 = bila kubadilika) |

Pembe kali kwenye njia zinakatwa kwa mshazari (mitre). Duara ya radius 5 iliyopitishwa kando ya mstari wa 100 mm ni silinda ya 2500π mm³ hasa; kando ya robo ya upinde wa radius 50, ni robo ya torasi ya 625π² mm³.

## Loft

Loft inachanganya kupitia sehemu mbili au zaidi kwenye ndege tofauti.

1. Chora kila sehemu kwenye mchoro wake (kitanzi kimoja kilichofungwa kila moja), kwenye ndege za msingi, ndege za marejeo (tazama [Ndege za marejeo, mihimili na pointi](topic:reference-geometry)) au nyuso.
2. Chagua {{ui:More}}, kisha {{ui:Loft}}. Kila mchoro wenye kitanzi kimoja ambao haujatumika unakuwa sehemu, kwa mpangilio wa historia.

Paneli inaorodhesha sehemu kwa mpangilio (**Juu** inapanga upya, **Ondoa** inaondoa moja); **Ongeza mchoro** inaongeza mwingine, **Chagua uso** inaongeza uso bapa wa sehemu. **Ruled** inatengeneza nyuso bapa kati ya sehemu badala ya mchanganyiko laini. Kati ya miraba miwili, zote ni frustum ile ile (mraba wa 40 mm hadi mraba wa 20 mm kwenye urefu wa 30 mm: 28000 mm³ hasa).

Sehemu zenye idadi tofauti ya pande (mraba hadi pembetatu) zinalinganishwa na OpenCascade, ambayo inaweza kupotosha nyuso za pembeni; kipengele kinatoa onyo. Chora sehemu zenye idadi sawa ya pande, zikianza kutoka pembe zinazolingana, kwa matokeo safi zaidi.

### Reli za mwongozo

Reli za mwongozo ni curve ambazo pande za loft lazima zifuate kutoka sehemu ya kwanza hadi ya mwisho, kwa mkunjo, kiuno au upana unaochora mwenyewe.

1. Chora reli mbili au zaidi: curve wazi (mistari, matao, splines) zinazotoka sehemu ya kwanza hadi ya mwisho na kuvuka kila sehemu mara moja. Mchoro mmoja unaweza kushikilia reli kadhaa: kila mnyororo tofauti ndani yake ni reli yake. Chora reli ili ikutane kweli na kila sehemu: vuta ncha zake kwenye pointi za sehemu.
2. Kwenye paneli ya Loft, chini ya **Reli za mwongozo**, weka alama kwenye michoro inayoshikilia, au bofya {{ui:Pick model edges as rails}} kisha ubofye kingo za sehemu ({{key:Esc}} inamaliza).

Pamoja na reli, loft ni uso wa Gordon kupitia sehemu na reli (tazama [Nyuso kupitia mtandao wa curve](topic:gordon-surfaces)), umefungwa bapa mwisho wote mawili kuwa kigumu. Paneli inaonyesha inavyozifuata kwa karibu. Kila sehemu lazima sasa iwe mchoro (nukta au uso hauwezi kubeba reli), na **Ruled** haitumiki. Reli inayokosa sehemu kwa zaidi ya 0.01 mm inakataliwa, pamoja na pengo lake.

Imekaguliwa: duara mbili (20 mm na 10 mm kwa kipenyo, kwenye urefu wa 40 mm) zenye reli nne za moja kwa moja zinatoa ujazo wa frustum ya koni ndani ya 0.000002 %; matao yanayovimba kwa 5 mm yanatoa pipa linalofuata kila reli ndani ya 0.00001 mm.

## Mteremko

Mteremko unainamisha nyuso ili sehemu itoke kwenye ukungu.

1. Chagua {{ui:More}}, kisha {{ui:Draft}} (au bonyeza nyuso kwa {{key:Shift}} kwanza). Bila chochote kilichochaguliwa uko kwenye hali ya kuchagua: bofya kila uso wa kuinamisha, kisha {{ui:Done}}.
2. Weka **Pembe (°)**, **Ndege ya kati** (ambapo nyuso zinabaki na ukubwa wake) na **Mwelekeo wa kuvuta** (kawaida ya ndege ya kati kwa chaguo-msingi).

Pembe chanya inaegemeza uso ndani kando ya kuvuta na kuondoa nyenzo; hasi inaiongeza. Ndege ya kati inaanza kama ndege ya Juu. Katika toleo hili nyuso bapa tu ndizo zinaweza kuteremshwa: silinda, koni au uso huru unasema "Mteremko: katika toleo hili nyuso bapa tu (kernel ya matundu inazijenga)." Pande nne za kizuizi cha 100 × 100 × 50 zilizoteremshwa kwa 5° kuzunguka sehemu yake ya chini zinakuwa frustum ya h/3·(a² + b² + ab) hasa, ambapo b = a − 2h·tan 5°.

## Ujumbe

| Ujumbe | Cha kufanya |
|---|---|
| "Ndege ya wasifu lazima ipite kwenye ncha moja ya njia …" | Sogeza mchoro wa wasifu hadi mwanzo (au mwisho) wa njia |
| "Njia ina pengo: mikunjo yake haiungani mwisho kwa mwisho …" | Unganisha mikunjo ya njia; kwenye michoro tofauti ncha zao lazima zikutane kabisa |
| "Sehemu ya loft inahitaji kitanzi kimoja kilichofungwa tu" | Gawanya mchoro, au ondoa kitanzi cha ziada |
| "… haiwezi kuteremshwa kuzunguka ndege hii ya kati …" | Uso uko sambamba na ndege ya kati au haukutani nayo |
| "Mteremko: katika toleo hili nyuso bapa tu (kernel ya matundu inazijenga)." | Uso uliochaguliwa umepinda. Uondoe; teremsha nyuso bapa tu |

:::note
Bado hazijajengwa: sweep zinazopinda, sweep za ukuta mwembamba na za uso, reli za mwongozo za loft na mguso wa ncha, mteremko kwenye silinda, koni na nyuso huru.
:::
