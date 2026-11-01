---
title: Faili: fungua, hifadhi na hamisha nje
summary: Faili za sehemu na mkusanyiko ambazo PartCraft hufungua na kuhifadhi, kila umbizo la kuhamisha nje na kile linachohifadhi, mahali faili zinapoenda, na kinachobadilika nje ya mtandao au kati ya vivinjari.
keywords: fungua, hifadhi, hamisha nje, pakua, faili, partcraft.json, faili ya mkusanyiko, stl, 3mf, step, dxf, pdf, faili zangu ziko wapi, nje ya mtandao, hifadhi kama
from: c15c2c48
---

PartCraft hufanya kazi na faili zilizo kwenye kompyuta yako. Haipakii sehemu yoyote, na hakuna akaunti wala hifadhi ya wingu inayohusika. Kuhifadhi kwenye wingu bado hakupatikani.

## Kinachofunguliwa na PartCraft

| Faili | Kiendelezi | Jinsi |
|---|---|---|
| Sehemu ya PartCraft | `.partcraft.json` | {{ui:Fungua}}, {{key:Mod+O}}, au buruta na uachie kwenye mwonekano wa 3D |
| Mkusanyiko wa PartCraft | `.partcraft-asm.json` | Vivyo hivyo: PartCraft inatambua ni aina gani |
| Kigumu cha STEP | `.step`, `.stp` | Mwili mgumu unaosomwa kama pembetatu: [Fungua faili ya STEP na ujenge juu yake](topic:import-step) |

STL, OBJ na 3MF pia hufunguka kama miili migumu ([Fungua STL, OBJ au 3MF](topic:open-meshes)), na vivyo hivyo faili za `.3dm` ([Fungua modeli ya .3dm](topic:open-3dm-files)). DXF, IGES na faili za sehemu za programu nyingine haziwezi kufunguliwa (tazama [Kisichojengwa bado](topic:not-built-yet)).

Kanuni wakati wa kufungua:

- Jina la faili la sehemu au mkusanyiko lazima limalizike na `.json`, na faili iwe chini ya MB 50.
- Faili zinakaguliwa kabla ya chochote kuonyeshwa. Faili iliyoharibika au iliyohaririwa inakataliwa kwa sababu wazi, kwa mfano "Hii si faili ya PartCraft."
- Faili iliyohifadhiwa na PartCraft mpya zaidi inakataliwa: "Faili hii imehifadhiwa na PartCraft mpya zaidi (toleo la faili 3); hii inasoma toleo la 2." Faili za zamani zinafunguka.
- Ikiwa sehemu iliyo kwenye skrini ina mabadiliko ambayo hayajahifadhiwa, PartCraft inauliza kwanza: {{ui:Ghairi}}, {{ui:Tupa mabadiliko}} au {{ui:Hifadhi kwanza}}.

## Kuhifadhi

{{ui:Hifadhi}} au {{key:Mod+S}} huhifadhi kile kilicho kwenye skrini:

- Kwenye sehemu: `<part name>.partcraft.json`, yenye historia kamili (michoro, uhusiano, vipimo, vipengele, nafasi ya kurudisha nyuma), sehemu ya karatasi ya mchoro, maelezo ya mkato, undani na GD&T, pamoja na maandishi kamili ya kigumu chochote cha STEP kilichoingizwa katika toleo la awali. Vipengele ambavyo toleo hili haliwezi kujenga vinahifadhiwa tena bila kubadilishwa. Kigumu chenyewe hakihifadhiwi; PartCraft huikokotoa upya kutoka kwenye historia faili inapofunguliwa.
- Kwenye mkusanyiko: `<assembly name>.partcraft-asm.json`, pamoja na **kila sehemu iliyo ndani yake**. Faili moja hubeba mkusanyiko mzima, kwa hiyo unaweza kuutuma wenyewe.

Kuhifadhi ni **upakuaji**. Kivinjari chako huweka faili kwenye folda yake ya upakuaji, au huuliza mahali pa kuiweka ikiwa umekiweka hivyo. Kuhifadhi tena kunatengeneza upakuaji mpya; kivinjari kinaweza kuutaja `Part1 (1).partcraft.json` badala ya kubadilisha wa zamani. Badilisha jina au sogeza faili kwenye {{pick:mac=Finder|windows=File Explorer|linux=kidhibiti chako cha faili}} unavyotaka.

Herufi nyingine isipokuwa herufi, tarakimu, nafasi, `_`, `.` na `-` katika jina la sehemu hubadilishwa kuwa `_` kwenye jina la faili.

:::tip
Vivinjari vingi vina mpangilio wa kuuliza mahali pa kuhifadhi kila upakuaji. Ukitaka chaguo la "Hifadhi kama" kila mara, uwashe: katika Chrome na Edge ipo chini ya Upakuaji kwenye mipangilio; katika Firefox chini ya Kwa ujumla, Faili na Programu; katika Safari chini ya Kwa ujumla, Mahali pa kupakua faili.
:::

Zaidi kuhusu mahali upakuaji unapoenda na jinsi ya kulinda faili zako: [Mahali faili zako zinapoenda](common:your-files).

## Kuhamisha nje

Menyu ya {{ui:Hamisha nje}} huandika miundo mingine. Kila moja ni upakuaji, na inapewa jina la sehemu.

| Kipengee cha menyu | Faili | Kilichomo |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | STL ya binary ya pembetatu za kigumu, milimita, **Z juu** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF yenye kigumu kama kitu kimoja, milimita, **Z juu** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Bado haijajengwa katika toleo hili (imepauka): inahitaji kernel sahihi |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Bado haijajengwa katika toleo hili (imepauka) |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Kigumu kilichoundwa na nyuso bapa kutoka kwenye matundu: **nyuso za duara ni nyuso ndogo nyingi bapa**. Milimita, katika shoka za PartCraft zenyewe (Y juu). Ndiyo STEP ya kutumia kwa programu nyingine za CAD katika toleo hili |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` au `<name> - face.dxf` | DXF R12. Mchoro: mistari, matao, miduara na nukta katika kuratibu za mchoro wenyewe, kwenye tabaka PROFILE, CONSTRUCTION na POINTS. Uso bapa uliochaguliwa: mistari yake ya nje kama polilaini zilizofungwa (kingo za duara kama nyuso zake ndogo) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | Karatasi ya mchoro ya A3: mionekano mitatu, isometriki, sehemu ya mkato na undani ikiwa imewekwa, ukubwa wa jumla, alama za GD&T, kizuizi cha kichwa |

:::note
{{ui:STEP AP242 (exact solid)}} na {{ui:STEP AP214 (exact solid)}} bado hazijajengwa katika toleo hili: tumia {{ui:STEP (faceted, mesh kernel)}}. Ina umbo na ujazo sahihi, lakini kila uso wa duara ni nyuso ndogo nyingi bapa, kwa hiyo programu nyingine haziwezi kuchagua tundu kama silinda. Weka **Mikunjo** iwe laini zaidi kwanza ikiwa hilo ni muhimu.
:::

- Usafirishaji unahusu sehemu iliyo kwenye skrini. Kuhamisha nje kumezimwa katika mkusanyiko; bado hakuna usafirishaji wa mkusanyiko.
- STL, 3MF, STEP yenye nyuso bapa na DXF ya uso daima zimetengenezwa kwa nyuso bapa. Mpangilio wa **Mikunjo** (kwenye paneli ya kulia wakati hakuna kilichochaguliwa) unaweka jinsi zilivyo laini, kutoka nyuso 32 hadi 256 kwa mzunguko. Chagua Nzuri au Nzuri sana kabla ya kuhamisha STL au 3MF kwa chapa laini.
- Mchoro wa PDF hutumia fonti ya Helvetica iliyojengwa ndani ya msomaji. Herufi ambazo haiwezi kuonyesha huchapishwa kama "?".

Hatua kwa hatua: [Hamisha kwa uchapishaji, STEP na DXF](topic:export-files) na [Tengeneza karatasi ya mchoro](topic:drawing-pdf).

## Kazi ambayo haijahifadhiwa

- PartCraft huhifadhi nakala ya urejeshaji ya sehemu au mkusanyiko uliofunguliwa kwenye kivinjari hiki muda mfupi baada ya kila badiliko, ili hitilafu au kichupo kilichofungwa visipoteze kazi: mara ijayo utakapofungua PartCraft itauliza "Rejesha kazi yako?". Hii si kuhifadhi: hifadhi kwenye faili ili kuweka kazi yako. Tazama [Rejesha kazi ambayo haijahifadhiwa](common:recover).
- Ukijaribu kufunga kichupo au kupakia upya ukiwa na mabadiliko ambayo hayajahifadhiwa, kivinjari kinauliza "Ondoka kwenye tovuti?". Hilo ni kisanduku cha kivinjari chenyewe; PartCraft haiwezi kubadilisha maneno yake.
- {{ui:Mpya}}, {{ui:Fungua}} na kufunga mkusanyiko huuliza kabla ya kutupa mabadiliko ambayo hayajahifadhiwa.

## Mtandaoni na nje ya mtandao

Kila kitu hufanyika kwenye kompyuta yako: kernel ya matundu (programu ya WebAssembly) hupakuliwa pamoja na programu na kujenga jiometri ndani ya kifaa chako, na faili husomwa na kuandikwa kwenye diski yako. Hakuna data ya sehemu inayopita kwenye mtandao. Tazama [Kernel ya matundu](topic:solid-kernels).

Ili kufanya kazi bila muunganisho kabisa, hifadhi PartCraft kwa matumizi nje ya mtandao ukiwa mtandaoni: chagua {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu na usubiri wakati unahesabu ("Inahifadhi 40 kati ya 212") hadi useme **Tayari nje ya mtandao**. Nakala iliyohifadhiwa inajumuisha maktaba ya 3D na kernel ya matundu, kwa hiyo baadaye uundaji wa modeli, kuhifadhi, kila usafirishaji na michoro vyote vinafanya kazi nje ya mtandao. Ikisema **Imeshindwa kuhifadhi**, bofya ili ujaribu tena ukiwa mtandaoni; **Nje ya mtandao haipatikani** maana yake dirisha hili la kivinjari haliwezi kuweka nakala (madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa). Nakala ikiwa imehifadhiwa, kubofya **Tayari nje ya mtandao** kunatoa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} na {{ui:Ondoa nakala ya nje ya mtandao}}. Maelezo: [Kufanya kazi nje ya mtandao](common:offline).

:::online
Uko mtandaoni. Hata bila kuhifadhi kwa matumizi ya nje ya mtandao, mara PartCraft inapokuwa imepakia na chip ya upau wa hali inasema "Mesh kernel", unaweza kuendelea kufanya kazi muunganisho ukikatika. Usipakie upya ukurasa hadi urudi mtandaoni.
:::

:::offline
Uko nje ya mtandao. Ikiwa PartCraft tayari imefunguliwa, endelea kufanya kazi; kuhifadhi na kuhamisha nje bado kunafanya kazi. Ikiwa upau wa programu unasema **Tayari nje ya mtandao**, PartCraft pia hufunguka kuanzia mwanzo bila muunganisho; vinginevyo usipakie upya kichupo hiki.
:::

## Tofauti kati ya vivinjari

- **Upakuaji.** Kila kivinjari kina folda yake ya upakuaji na njia yake ya kuuliza. Kivinjari kikiuliza kama tovuti hii inaruhusiwa kupakua faili, ruhusu; la sivyo kuhifadhi na kuhamisha nje hakuwezi kufanya kazi.
- **Kuburuta na kuachia** faili kwenye mwonekano kunafanya kazi katika Chrome, Edge, Firefox na Safari.
- **Faili kutoka simu au kompyuta kibao.** Kwenye iPhone na iPad, Fungua huonyesha programu ya Files; faili zilizohifadhiwa huenda kwenye Files, Downloads. Kwenye Android huenda kwenye folda ya Upakuaji.

Hakuna tofauti katika kile faili zinachokuwa nacho kati ya vivinjari au mifumo ya uendeshaji.
