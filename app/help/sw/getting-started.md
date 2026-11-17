---
title: Anza na PartCraft
summary: PartCraft inafanya nini leo, kivinjari chako kinahitaji nini, na sehemu yako ya kwanza kwa dakika kumi, kuanzia mchoro hadi faili iliyohifadhiwa.
keywords: anza, kuanza kwa mara ya kwanza, mwongozo wa haraka, utangulizi, mafunzo, sehemu ya kwanza, bamba, parametric, mfano wa sehemu
from: 7d43283f
---

PartCraft ni programu ya sehemu za parametric na mikusanyiko ya familia ya CadCraft. Unachora mchoro wa awali wa 2D, kuufunga kwa mahusiano na vipimo, kuugeuza kuwa kigumu kwa vipengele kama extrude, revolve na hole, na kubadilisha nambari yoyote baadaye: sehemu inajengwa upya kutoka historia yake. Sehemu kisha huingia kwenye mikusanyiko, ambapo viungio huziweka na kukuruhusu kukagua mwendo.

Kile toleo hili linafanya:

| Kazi | Unachopata |
|---|---|
| Michoro ya awali | Mistari, mistatili, duara, mikunjo, nukta na mistari ya katikati, pamoja na mahusiano na vipimo, na hali ya moja kwa moja: haijafafanuliwa, imefafanuliwa kikamilifu au imefafanuliwa kupita kiasi |
| Vipengele vya kigumu | Extrude, cut, revolve, revolved cut, matundu rahisi na yenye counterbore, mifumo ya mstari na ya duara, mirror, fillet na chamfer kwenye kingo zilizonyooka kati ya nyuso tambarare, pamoja na shell na draft kwenye nyuso tambarare. Sweep, loft na vipengele vingine vinavyohitaji kernel sahihi bado havijajengwa katika toleo hili: angalia [Kisichojengwa bado](topic:not-built-yet) |
| Historia | Hariri nambari za kipengele chochote, zima, rudi nyuma, panga upya na ufute, pamoja na kutendua |
| Mikusanyiko | Sehemu zilizounganishwa kwa viungio vigumu, vya kuzunguka na vya kuteleza, ukaguzi wa mgongano na ukaguzi wa mwendo |
| Michoro | Karatasi ya A3 yenye mionekano mitatu, isometric, sehemu ya kukata, mwonekano wa maelezo, vipimo vya jumla, datum, fremu za udhibiti wa kipengele na alama za umaliziaji wa uso, zinazosafirishwa kama PDF |
| Faili | Faili zake za sehemu na mikusanyiko; STL, 3MF, STEP sahihi, DXF na PDF kutoka nje |

Kila kitu kinaendeshwa kwenye kivinjari chako, kwenye kompyuta yako. **Hakuna kinachopakiwa.** Angalia [Faili: fungua, hifadhi na uhamishe](topic:files) kwa mahali faili zinapokwenda.

## Unachohitaji

- Chrome, Edge, Firefox au Safari ya sasa yenye **WebGL** (michoro ya 3D) na **WebAssembly** vimewashwa. Vyote viwili vimewashwa kwa chaguo-msingi. Jiometri ya kigumu inajengwa na mesh kernel ya WebAssembly inayopakia pamoja na programu: angalia [The mesh kernel](topic:solid-kernels).
- Kipanya ndicho rahisi zaidi. Trackpad inafanya kazi, na skrini za kugusa zinafanya kazi kwa kutazama na michoro rahisi: angalia [Trackpad, touch and small screens](topic:trackpad-and-touch).
- Skrini yenye upana wa angalau pikseli 1280 inaonyesha upau mzima wa zana kwenye mstari mmoja. Madirisha membamba zaidi hufanya upau wa zana usogee kando; kwenye simu paneli hufunguka kama karatasi kutoka kwenye upau wa chini.

Kuhusu vivinjari: [Browsers and computers](common:browsers).

:::note
PartCraft inafanya kazi kwenye kivinjari, na kwenye kompyuta ndani ya CadCraft Studio. Kuhifadhi kwenye wingu bado hakupatikani: unafungua sehemu kutoka kwenye kompyuta yako na kuzihifadhi tena huko kama faili.
:::

## Fungua PartCraft

1. Fungua PartCraft.
2. Subiri skrini isome "Inapakia kernel ya umbo gumu…". Hii huchukua muda mara ya kwanza.
3. Utaona mwonekano tupu wa 3D wenye ndege tatu za msingi, historia upande wa kushoto ("Part1", kisha Ndege ya Mbele, Ndege ya Juu, Ndege ya Kulia) na kisanduku kwenye mwonekano kikiwa na kichwa "Start a part".
4. Chipu iliyo karibu na mwisho wa kulia wa upau wa hali inasema "Mesh kernel": PartCraft hujenga kila sehemu kwa mesh kernel katika toleo hili, kwa hiyo nyuso za duara ni vipande tambarare. Unaweza kuanza kuunda mara moja.

Ikiwa mwonekano unasema kivinjari hakiwezi kuonyesha 3D, au kernel haikupakia, angalia [Troubleshooting](topic:troubleshooting#the-app-does-not-start).

## Sehemu yako ya kwanza: bamba lenye tundu

Utatengeneza bamba la 60 × 40 mm, lenye unene wa 10 mm, lenye tundu la 6 mm kupitia humo. Vipimo ni milimita.

### Chora mstari wa nje

1. Bonyeza **Ndege ya Mbele** kwenye historia upande wa kushoto. Ndege inaangaziwa kwenye mwonekano.
2. Chagua {{ui:Sketch}} kwenye upau wa zana, au bonyeza {{key:S}}. Mwonekano unageuka kuitazama ndege moja kwa moja, na zana ya Mstari inatumika.
3. Bonyeza {{key:R}} kwa zana ya Mstatili.
4. Sogeza kielekezi hadi kwenye asili (duara dogo jekundu lenye msalaba). Mraba mdogo unaonyesha kwamba unashika. Bonyeza.
5. Sogeza juu na kulia kisha bonyeza tena. Utakuwa na mstatili. Mistari yake ni ya bluu: bluu inamaanisha bado inaweza kusogea.

### Ipe vipimo

1. Bonyeza {{key:D}} kwa zana ya Kipimo.
2. Bonyeza mstari wa juu, kisha bonyeza kidogo juu yake. Kisanduku cha namba kinafunguka chenye urefu wa sasa.
3. Andika `60` kisha bonyeza {{key:Enter}}. Mstatili unabadilika kuwa upana wa 60 mm.
4. Bonyeza mstari wa kushoto, kisha bonyeza kidogo kushoto kwake. Andika `40` kisha bonyeza {{key:Enter}}.

Chipu iliyo juu kushoto ya mwonekano sasa inasema **Imefafanuliwa kikamilifu** na mistari inageuka wino (nyeusi kwenye mandhari ya Paper, nyepesi kwenye mandhari ya Model). Kila nukta na kila ukubwa umewekwa.

:::tip
Ukianza mstatili mbali na asili, chipu bado itasema "Haijafafanuliwa kikamilifu · uhuru wa digrii 2". Bonyeza {{key:S}} kwa Select, bonyeza kona moja, kisha {{key:Shift}}+bonyeza asili, kisha chagua {{ui:• Coincident}} kwenye paneli ya kulia.
:::

### Itoe (extrude)

1. Chagua {{ui:Exit}} kwenye upau wa zana, au bonyeza {{key:Esc}} hadi mchoro ufunge (kwa kawaida mara mbili).
2. Chagua {{ui:Extrude}}. Kigumu cha 10 mm kinaonekana. "Extrude1" inaongezwa kwenye historia, na "Sketch1" ikiwa imeingizwa chini yake.
3. Paneli ya kulia inaonyesha mipangilio ya extrude. Ili kubadilisha unene, andika nambari mpya kwenye **Depth (mm)** na bonyeza {{key:Enter}} au {{key:Tab}}. Sehemu inajengwa upya mara moja.

### Ongeza tundu

1. Bonyeza uso mkubwa tambarare mbele ya bamba (mwisho wa extrusion). Uso wote unaangaziwa na paneli ya kulia inasema **Face**.
2. Chagua {{ui:Sketch on this face}} kwenye paneli ya kulia.
3. Bonyeza {{key:P}} kwa zana ya Nukta kisha ubofye karibu na katikati ya uso.
4. Chagua {{ui:Exit}}.
5. Chagua {{ui:Hole}}. Tundu la 6 mm linapitia bamba. Badilisha **Diameter (mm)** kwenye paneli ya kulia ukipenda.

Kisanduku cha **Part** chini kushoto sasa kinaonyesha ujazo, eneo la uso, ukubwa (60 × 40 × 10 mm) na "Through holes: 1".

### Hifadhi

1. Bonyeza {{key:Mod+S}} au chagua {{ui:Save}}.
2. Kivinjari chako kinapakua `Part1.partcraft.json` kwenye folda ya upakuaji. Faili hii ina historia yote: ifungue tena kwa {{ui:Open}} ili kuendelea kuhariri.

Ili kubadilisha jina la sehemu kwanza, bonyeza nafasi tupu kwenye mwonekano ili hakuna kilichochaguliwa, kisha andika **Name** mpya kwenye paneli ya kulia.

## Pale pa kwenda baadaye

- [Chora mchoro wako wa kwanza](topic:sketch-basics) na [Fafanua mchoro kikamilifu](topic:relations-dimensions) yanaeleza mhariri wa michoro kwa kina.
- [Badilisha sehemu kupitia historia yake](topic:edit-history) inaonyesha jinsi ya kuhariri ulichojenga.
- [Zungusha, pinda na tupu](topic:fillet-chamfer-shell) na [Tengeneza mchoro](topic:drawing-pdf) zinamalizia sehemu. [Kisichojengwa bado](topic:not-built-yet) kinaorodhesha kisichofanywa na toleo hili, kama sweep na loft.
- [Kutoka kwa modeli nyingine ya parametric](topic:coming-from) inaorodhesha tabia zinazofanya kazi tofauti hapa.
- [Funguo na kipanya](topic:keyboard) ni orodha kamili ya njia za mkato.
- [Kutumia msaada huu](common:help).
