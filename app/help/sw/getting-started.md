---
title: Anza na PartCraft
summary: PartCraft inafanya nini leo, kivinjari chako kinahitaji nini, na sehemu ya kwanza kwa dakika kumi, kuanzia mchoro hadi faili iliyohifadhiwa.
keywords: anza, kuanza mara ya kwanza, mafunzo ya haraka, utangulizi, mafunzo, sehemu ya kwanza, sahani, parametriki, mfano wa sehemu
from: 5f0a668d
---

PartCraft ni programu ya sehemu za parametriki na mikusanyiko ya familia ya CadCraft. Unachora mchoro wa 2D, kisha unaufunga kwa uhusiano na vipimo, unaugeuza kuwa kigumu kwa vipengele kama tolea, zungusha na tundu, na unaweza kubadilisha nambari yoyote baadaye: sehemu hujengwa upya kutoka historia yake. Sehemu kisha huingia kwenye mikusanyiko, ambapo viungio huziweka na kukuwezesha kuangalia mwendo.

Ujenzi huu hufanya nini:

| Kazi | Unachopata |
|---|---|
| Michoro | Mistari, mistatili, miduara, matao, nukta na mistari ya kati, pamoja na uhusiano na vipimo, na hali ya moja kwa moja: haijafafanuliwa, imefafanuliwa kikamilifu au imefafanuliwa kupita kiasi |
| Vipengele vya kigumu | Tolea, kata, zungusha, kukata kwa zungusha, matundu rahisi na yaliyowekwa kaunta, mifululizo ya mistari na miduara, kioo, fillet na chamfer kwenye kingo zilizonyooka kati ya nyuso bapa, na shell na rasimu kwenye nyuso bapa. Sweep, loft na vipengele vingine vinavyohitaji kernel sahihi bado havijajengwa katika toleo hili: tazama [Kisichojengwa bado](topic:not-built-yet) |
| Historia | Hariri nambari za kipengele chochote, zima, rudisha nyuma, panga upya na ufute, kwa kutendua |
| Mikusanyiko | Sehemu zilizounganishwa kwa viungio vigumu, vya kuzungusha na vya kuteleza, ukaguzi wa mgongano na ukaguzi wa mwendo |
| Michoro | Karatasi ya A3 yenye mionekano mitatu, isometriki, sehemu ya mkato, mwonekano wa undani, ukubwa wa jumla, datum, fremu za udhibiti wa kipimo na alama za umaliziaji wa uso, zinazohamishwa kama PDF |
| Faili | Faili zake za sehemu na mkusanyiko; STL, 3MF, STEP yenye nyuso bapa, DXF na PDF vinavyotoka |

Kila kitu kinaendeshwa kwenye kivinjari chako, kwenye kompyuta yako. **Hakuna kinachopakiwa.** Tazama [Faili: fungua, hifadhi na hamisha nje](topic:files) kwa mahali faili zinapoenda.

## Unachohitaji

- Chrome, Edge, Firefox au Safari ya sasa yenye **WebGL** (picha za 3D) na **WebAssembly** zimewashwa. Zote mbili zimewashwa kwa chaguo-msingi. Jiometri ya kigumu inajengwa na kernel ya matundu ya WebAssembly inayopakia pamoja na programu: tazama [Kernel ya matundu](topic:solid-kernels).
- Kipanya ndicho rahisi zaidi. Pedi ya kugusa inafanya kazi, na skrini za kugusa zinafanya kazi kwa kutazama na michoro rahisi: tazama [Pedi ya kugusa, mguso na skrini ndogo](topic:trackpad-and-touch).
- Skrini yenye upana wa angalau pikseli 1280 huonyesha upau mzima wa zana kwa safu moja. Madirisha nyembamba huvuta upau wa zana kando; kwenye simu paneli hufunguka kama karatasi kutoka upau wa chini.

Zaidi kuhusu vivinjari: [Vivinjari na kompyuta](common:browsers).

:::note
PartCraft inaendeshwa kwenye kivinjari, na kwenye eneo-kazi ndani ya CadCraft Studio. Kuhifadhi kwenye wingu bado hakupatikani: unafungua sehemu kutoka kwenye kompyuta yako na kuzihifadhi tena kwake kama faili.
:::

## Fungua PartCraft

1. Fungua PartCraft.
2. Subiri wakati skrini inasema "Inapakia kernel ya kigumu…". Hili huchukua muda mara ya kwanza.
3. Utaona mwonekano tupu wa 3D wenye ndege tatu za msingi, historia upande wa kushoto ("Part1", kisha Ndege ya mbele, Ndege ya juu, Ndege ya kulia) na kisanduku kwenye mwonekano kinachoitwa "Anza sehemu".
4. Chip iliyo karibu na mwisho wa kulia wa upau wa hali inasema "Mesh kernel": PartCraft hujenga kila sehemu kwa kernel ya matundu katika toleo hili, kwa hiyo nyuso za duara ni nyuso bapa ndogo. Unaweza kuanza kuunda modeli mara moja.

Ikiwa mwonekano unasema kivinjari hakiwezi kuonyesha 3D, au kernel haikupakia, tazama [Utatuzi wa matatizo](topic:troubleshooting#the-app-does-not-start).

## Sehemu yako ya kwanza: sahani yenye tundu

Utatengeneza sahani ya 60 × 40 mm, nene 10 mm, yenye tundu la 6 mm kupitia humo. Vipimo ni milimita.

### Chora muhtasari

1. Bofya **Ndege ya mbele** kwenye historia upande wa kushoto. Ndege inaangaziwa kwenye mwonekano.
2. Chagua {{ui:Mchoro wa awali}} kwenye upau wa zana, au bonyeza {{key:S}}. Mwonekano unageuka kutazama ndege moja kwa moja, na zana ya Mstari inatumika.
3. Bonyeza {{key:R}} kwa zana ya Mstatili.
4. Sogeza kielekezi kwenye asili (duara dogo jekundu lenye msalaba). Mraba mdogo unaonyesha kwamba unashika. Bofya.
5. Sogeza juu na kulia kisha ubofye tena. Umepata mstatili. Mistari yake ni bluu: bluu maana yake bado inaweza kusogea.

### Ipe vipimo

1. Bonyeza {{key:D}} kwa zana ya Kipimo.
2. Bofya mstari wa juu, kisha ubofye kidogo juu yake. Kisanduku cha nambari kinafunguka kikiwa na urefu wa sasa.
3. Andika `60` kisha bonyeza {{key:Enter}}. Mstatili unabadilika kuwa upana wa 60 mm.
4. Bofya mstari wa kushoto, kisha ubofye kidogo upande wa kushoto wake. Andika `40` kisha bonyeza {{key:Enter}}.

Chip iliyo juu kushoto ya mwonekano sasa inasema **Imefafanuliwa kikamilifu** na mistari inageuka wino (nyeusi kwenye mandhari ya Karatasi, nyepesi kwenye mandhari ya Modeli). Kila nukta na kila ukubwa umewekwa.

:::tip
Ikiwa umeanza mstatili mbali na asili, chip bado itasema "Haijafafanuliwa kikamilifu · digrii 2 za uhuru". Bonyeza {{key:S}} kwa Chagua, bofya kona moja, {{key:Shift}}+bofya asili, kisha uchague {{ui:• Mahali pamoja}} kwenye paneli ya kulia.
:::

### Itolee

1. Chagua {{ui:Toka}} kwenye upau wa zana, au bonyeza {{key:Esc}} hadi mchoro ufungwe (kwa kawaida mara mbili).
2. Chagua {{ui:Tolea}}. Kigumu cha 10 mm kinaonekana. "Extrude1" inaongezwa kwenye historia, na "Sketch1" ikiwa imeingizwa chini yake.
3. Paneli ya kulia inaonyesha mipangilio ya tolea. Kubadilisha unene, andika nambari mpya kwenye **Kina (mm)** kisha bonyeza {{key:Enter}} au {{key:Tab}}. Sehemu inajengwa upya mara moja.

### Ongeza tundu

1. Bofya uso mkubwa bapa mbele ya sahani (mwisho wa tolea). Uso wote unaangaziwa na paneli ya kulia inasema **Uso**.
2. Chagua {{ui:Mchoro wa awali juu ya uso huu}} kwenye paneli ya kulia.
3. Bonyeza {{key:P}} kwa zana ya Nukta kisha ubofye karibu na katikati ya uso.
4. Chagua {{ui:Toka}}.
5. Chagua {{ui:Tundu}}. Tundu la 6 mm linapita kwenye sahani. Badilisha **Kipenyo (mm)** kwenye paneli ya kulia ukipenda.

Kisanduku cha **Sehemu** kilicho chini kushoto sasa kinaonyesha ujazo, eneo la uso, ukubwa (60 × 40 × 10 mm) na "Matundu yanayopita: 1".

### Ihifadhi

1. Bonyeza {{key:Mod+S}} au chagua {{ui:Hifadhi}}.
2. Kivinjari chako kinapakua `Part1.partcraft.json` kwenye folda yake ya upakuaji. Faili inabeba historia yote: ifungue tena kwa {{ui:Fungua}} ili kuendelea kuhariri.

Ili kubadilisha jina la sehemu kwanza, bofya nafasi tupu kwenye mwonekano ili hakuna kilichochaguliwa, kisha andika **Jina** jipya kwenye paneli ya kulia.

## Hatua inayofuata

- [Chora mchoro wako wa kwanza](topic:sketch-basics) na [Fafanua mchoro kikamilifu](topic:relations-dimensions) vinaeleza mhariri wa michoro kwa kina.
- [Badilisha sehemu kupitia historia yake](topic:edit-history) kinaonyesha jinsi ya kuhariri ulichojenga.
- [Kuzungusha kingo, kukata pembe na kufanya tupu](topic:fillet-chamfer-shell) na [Tengeneza karatasi ya mchoro](topic:drawing-pdf) vinamalizia sehemu. [Kisichojengwa bado](topic:not-built-yet) kinaorodhesha kisichofanywa na toleo hili, kama sweep na loft.
- [Kutoka kwa kiundaji kingine cha parametriki](topic:coming-from) kinaorodhesha tabia zinazofanya kazi tofauti hapa.
- [Vitufe na kipanya](topic:keyboard) ni orodha kamili ya njia fupi.
- [Kutumia mwongozo huu](common:help).
