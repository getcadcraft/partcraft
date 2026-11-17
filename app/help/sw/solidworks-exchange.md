---
title: Peleka sehemu kwenda na kutoka kwa wabunifu wengine wa sehemu
summary: Tuma sehemu kwa mbunifu mwingine wa sehemu kama makro inayojenga upya kwa mti hai wa vipengele. STEP iliyopewa jina na kufungua orodha ya vipengele iliyoandikwa na mbunifu mwingine havijajengwa bado katika toleo hili.
keywords: makro, haijajengwa, swb, vba, mti wa vipengele, mzunguko kamili, hamisha makro, cadcraft-sw.json, step yenye jina, ap214, vigezo vya kimataifa, milinganyo, sehemu asilia
from: 97ca61da
---

PartCraft inabadilishana sehemu na SolidWorks pande zote mbili, bila umbizo la faili ambalo hakuna mtu mwingine anaweza kulisoma:

- **Kwenda nje:** makro (`.swb`, maandishi tupu) ambayo SolidWorks inaiendesha ili ijenge sehemu yenyewe, kipengele kwa kipengele, pamoja na michoro yake, mahusiano, vipimo, vigezo vya kimataifa na milinganyo. Unapata sehemu asilia yenye mti hai wa vipengele, si kiunzi kilichokufa.
- **Kurudi:** makro unayoiendesha ndani ya SolidWorks huandika vipengele vya sehemu na milinganyo kwenye faili la `.cadcraft-sw.json`. Kufungua faili hilo kwenye PartCraft bado hakujajengwa katika toleo hili (linahitaji kernel sahihi).

:::warning
Hakuna hili lililojaribiwa kwenye SolidWorks bado. SolidWorks inaendeshwa kwenye Windows pekee na ikiwa na leseni, na PartCraft haijawahi kuendesha makro hizi humo. Makro ziliandikwa kutoka kwenye nyaraka za API za SolidWorks na kukaguliwa muundo wake hapa. Tarajia kuripoti matatizo; logi ambayo makro inaandika inaonyesha hatua iliyoshindwa.
:::

PartCraft haiwezi kuandika faili la `.sldprt`: umbizo hilo ni la kufungwa. Makro ndiyo njia ya kupata sehemu asilia.

## Tuma sehemu kama makro

1. Fungua sehemu.
2. Chagua {{ui:Hamisha nje}}, kisha {{ui:Makro ya SolidWorks (.swb)}}. PartCraft inapakua `<part>.swb`; upau wa hali unasema iliandikwa "bila kernel sahihi".
3. Kisanduku kinasema makro inajenga vipengele, vigezo vya kimataifa na milinganyo ngapi, na kinaorodhesha chochote inachoacha. Hakuna STEP inayoambatana nayo katika toleo hili: tumia {{ui:Hamisha nje}}, kisha {{ui:STEP (yenye nyuso bapa, kernel ya matundu)}} ikiwa unaihitaji.
4. Katika SolidWorks, chagua **Tools > Macro > Run**, chagua faili la `.swb` na usubiri. Inatengeneza sehemu mpya kutoka kwenye kiolezo chako cha chaguo-msingi, huweka milimita na kujenga kila kipengele.
5. Mwishoni ujumbe unasema hatua ngapi zilikamilika, ngapi zilishindwa na ngapi zililingana na mwili wa PartCraft. Logi kamili, `<part> macro log.txt`, inaandikwa karibu na makro.

Makro inajenga nini:

| PartCraft | Katika sehemu mpya |
|---|---|
| Mchoro kwenye ndege ya mbele, ya juu au ya kulia | Mchoro kwenye ndege hiyo, na mistari, matao, duara, nukta, mahusiano na vipimo vyake (vimepewa majina kama PartCraft, kama `k7`) |
| Mchoro kwenye uso | Mchoro kwenye uso uleule, uliochaguliwa kwa nukta juu yake |
| Mchoro kwenye ndege iliyorekebishwa | Ndege ya marejeo kupitia nukta tatu, na mchoro juu yake |
| Tolea, kata (kipofu, kupitia yote, katikati ya ndege, pande mbili, mteremko) | Boss-extrude au cut-extrude |
| Zungusha, kata iliyozungushwa | Zungusha kuzunguka mhimili uleule wa kati |
| Tundu (rahisi, counterbore, countersink, lenye uzi) | Kata moja au mbili zenye michoro yake (tundu lenye uzi ni kipenyo chake cha kuchimba; hakuna uzi) |
| Mfululizo wa mstari na wa duara, kioo | Mfululizo wa mstari, mfululizo wa duara, kioo (vipengele au mwili) |
| Fillet, chamfer, shell | Fillet, chamfer na shell kwenye kingo na nyuso zilezile, zilizochaguliwa kwa nukta |
| Vigezo na milinganyo | Vigezo vya kimataifa na milinganyo kwenye vipimo vilivyopewa majina mapya |
| Vipengele vilivyozimwa, upau wa kurudisha nyuma | Vimezimwa kwa njia ileile; upau wa kurudisha nyuma mahali pale pale |

Baada ya kila kipengele kigumu, makro inalinganisha ujazo na ukubwa wa mwili na ule wa PartCraft. Vikitofautiana, inageuza mwelekeo wa kipengele hicho mara moja na kukagua tena; kama hiyo haisaidii, inarudisha mwelekeo wa awali na kuandika "Check" kwenye logi.

### Kilichoachwa nje

Kisanduku na sehemu ya juu ya makro vinaorodhesha kila kisichohamishwa, pamoja na sababu. Kwa sasa hiyo ni: vigumu vilivyoingizwa (ingiza STEP badala yake), sweeps, lofts, drafts, shoka na nukta za marejeo, masharti ya "hadi" ya mwisho, kutoa baadhi tu ya kontua, na chochote kinachotegemea hivyo. Splines zinakuwa mikunjo inayopita kwenye nukta zao. Toleo hili halina kernel sahihi, kwa hiyo michoro kwenye nyuso na vipengele vinavyochagua kingo au nyuso pia vimeachwa.

## Tuma STEP yenye jina

Bado haijajengwa katika toleo hili: {{ui:STEP kwa SolidWorks (yenye jina, AP214)}} inahitaji kernel sahihi, na kuichagua kunasema "STEP kwa SolidWorks: bado haijajengwa. …". Kukiwa na kernel sahihi, faili linabeba jina la sehemu, milimita na rangi ya sehemu, na linasimamisha Y juu, kama SolidWorks inavyoonyesha sehemu (usafirishaji wa kawaida wa {{ui:STEP AP214 (kigumu sahihi)}} unasimamisha Z juu). Herufi zenye lafudhi hupoteza lafudhi zake kwenye jina, na herufi nyingine nje ya ASCII ya kawaida zinakuwa `_`.

## Rudisha sehemu

Kufungua faili kwenye PartCraft (hatua ya 3) bado hakujajengwa katika toleo hili: linasema "Kufungua usafirishaji wa SolidWorks: bado haijajengwa. …". Programu ya michoro ya CadCraft bado inafungua faili na kuchukua michoro yake.

1. Chagua {{ui:Faili}} > {{ui:Hamisha nje}} > {{ui:Makro ya kurudisha sehemu (.swb)}} ili kupakua `CadCraftExport.swb`, na uiweke karibu na sehemu zako.
2. Katika SolidWorks, fungua sehemu, chagua **Tools > Macro > Run** na uchague `CadCraftExport.swb`. Inaandika `<part>.cadcraft-sw.json` karibu na sehemu na haibadilishi chochote ndani yake.
3. Katika PartCraft, chagua {{ui:Fungua}} kisha uchague faili hilo, au liburute kwenye mwonekano wa 3D.
4. Kwa kernel sahihi, PartCraft inajenga upya sehemu kipengele kwa kipengele na kuonyesha ilichofanya: kwa mfano "vipengele 5 kati ya 5 vimebebwa kutoka SolidWorks (Flange.SLDPRT)", kila kipengele kisichoweza kubebwa ("Hakijabebwa: Sweep1 (Sweep)."), na kama ujazo unalingana na ule ulioandikwa na SolidWorks.
5. Hifadhi kama sehemu ya PartCraft kwa {{ui:Hifadhi}}.

Michoro inatua kwenye ndege ya msingi inapokaa juu yake, kwenye uso bapa unaolingana wa sehemu ikiwepo (ili ifuate mabadiliko ya baadaye), na kwenye ndege iliyorekebishwa vinginevyo. Kingo na nyuso za fillet, chamfer na shell zinapatikana kutoka kwa nukta na kuhifadhiwa kama marejeo yenye majina. Vigezo vya kimataifa vinakuwa vigezo (majina yenye nafasi yanapata mistari ya chini: "Bolt count" inakuwa `Bolt_count`), na milinganyo inakuwa milinganyo kwenye vipimo vile vile. Hakuna kinachokisiwa: kisicho na mwenzake kinaorodheshwa.

Programu ya michoro ya CadCraft inafungua faili hilo hilo na kuchukua michoro yake.

:::note
Umbizo ni `cadcraft-sw-export` toleo la 1, JSON tupu katika milimita na digrii. Faili kutoka makro mpya zaidi, au lisilo sahihi, linakataliwa pamoja na sababu.
:::
