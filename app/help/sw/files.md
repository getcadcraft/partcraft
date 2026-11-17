---
title: Mafaili: fungua, hifadhi na hamisha
summary: Faili za sehemu na mkusanyiko ambazo PartCraft hufungua na kuhifadhi, kila umbizo la hamisho na kile linachohifadhi, mahali mafaili yanakwenda, na kinachobadilika nje ya mtandao au kati ya vivinjari.
keywords: fungua, hifadhi, hamisha, pakua, faili, partcraft.json, faili la mkusanyiko, stl, 3mf, step, dxf, pdf, faili langu liko wapi, nje ya mtandao, hifadhi kama
from: e5fbc7e3
---

PartCraft hufanya kazi kwenye faili zilizo kwenye kompyuta yako. Haipakii sehemu kamwe, na hakuna akaunti wala hifadhi ya wingu inayohusika. Kuhifadhi kwenye wingu bado hakupatikani.

## Inachofungua PartCraft

| Faili | Kiendelezi | Jinsi |
|---|---|---|
| Sehemu ya PartCraft | `.partcraft.json` | {{ui:Fungua}}, {{key:Mod+O}}, au iache kwenye mwonekano wa 3D |
| Mkusanyiko wa PartCraft | `.partcraft-asm.json` | Vivyo hivyo: PartCraft inaona ni aina gani |
| Kigumu cha STEP | `.step`, `.stp` | Mwili mgumu unaosomwa kama pembetatu: [Fungua faili la STEP na ujenge juu yake](topic:import-step) |

Matundu ya STL, OBJ na 3MF pia hufunguka kama miili migumu ([Fungua STL, OBJ au 3MF](topic:open-meshes)), na vivyo hivyo faili za `.3dm` ([Fungua modeli ya .3dm](topic:open-3dm-files)). DXF, IGES na faili za sehemu za programu nyingine haziwezi kufunguliwa (tazama [Bado hakijajengwa](topic:not-built-yet)).

Kanuni wakati wa kufungua:

- Jina la faili la sehemu au mkusanyiko lazima liishie `.json`, na faili lazima liwe chini ya MB 50.
- Faili hukaguliwa kabla ya kuonyeshwa chochote. Faili lililoharibika au lililohaririwa hukataliwa kwa sababu wazi, kwa mfano "Hili si faili la PartCraft."
- Faili lililohifadhiwa na PartCraft mpya hukataliwa: "Faili hili limehifadhiwa na PartCraft mpya (toleo la faili 3); hili linasoma toleo 2." Mafaili ya zamani hufunguka.
- Ikiwa sehemu iliyo kwenye skrini ina mabadiliko ambayo hayajahifadhiwa, PartCraft huuliza kwanza: {{ui:Ghairi}}, {{ui:Tupa mabadiliko}} au {{ui:Hifadhi kwanza}}.

## Kuhifadhi

{{ui:Hifadhi}} au {{key:Mod+S}} huhifadhi kile kilicho kwenye skrini:

- Kwenye sehemu: `<part name>.partcraft.json`, historia kamili (michoro, mahusiano, vipimo, vipengele, nafasi ya kurudisha nyuma), sehemu ya mkato, undani na maelezo ya GD&T ya karatasi ya mchoro, pamoja na maandishi kamili ya STEP yoyote iliyoingizwa na toleo la awali. Vipengele ambavyo toleo hili haliwezi kujenga huhifadhiwa tena bila kubadilika. Kigumu chenyewe hakihifadhiwi; PartCraft huki-jenga upya kutoka historia faili linapofunguka.
- Kwenye mkusanyiko: `<assembly name>.partcraft-asm.json`, pamoja na **kila sehemu ndani yake**. Faili moja hubeba mkusanyiko mzima, kwa hiyo unaweza kulituma lenyewe.

Kuhifadhi ni **upakuaji**. Kivinjari chako huweka faili kwenye folda yake ya upakuaji, au huuliza mahali pa kuliweka ikiwa umekiweka kiulize. Kuhifadhi tena hutengeneza upakuaji mpya; kivinjari kinaweza kulipa jina `Part1 (1).partcraft.json` badala ya kubadilisha la zamani. Badilisha jina au hamisha faili katika {{pick:mac=Finder|windows=File Explorer|linux=meneja wako wa faili}} upendavyo.

Herufi zingine isipokuwa herufi, namba, nafasi, `_`, `.` na `-` katika jina la sehemu hubadilika kuwa `_` katika jina la faili.

:::tip
Vivinjari vingi vina mpangilio wa kuuliza mahali pa kuhifadhi kila upakuaji. Iwashe ukitaka chaguo la "Hifadhi kama" kila wakati: katika Chrome na Edge ipo chini ya Downloads kwenye mipangilio; katika Firefox chini ya General, Files and Applications; katika Safari chini ya General, File download location.
:::

Taarifa zaidi kuhusu mahali upakuaji unakwenda na jinsi ya kuweka faili salama: [Mahali faili zako zinakwenda](common:your-files).

## Kuhamisha

Menyu ya {{ui:Hamisha nje}} huandika miundo mingine. Kila moja ni upakuaji, uliopewa jina la sehemu.

| Kipengee cha menyu | Faili | Kilichomo |
|---|---|---|
| {{ui:STL, kwa uchapishaji wa 3D}} | `<name>.stl` | STL ya binary ya pembetatu za kigumu, milimita, **Z juu** |
| {{ui:3MF, kwa uchapishaji wa 3D}} | `<name>.3mf` | 3MF yenye kigumu kama kitu kimoja, milimita, **Z juu** |
| {{ui:STEP AP242 (kigumu sahihi)}} | `<name>.step` | Kigumu kimoja sahihi, milimita, Z juu: nyuso za duara kama silinda, koni, duara na torasi halisi. STEP ya kutumia kwa programu nyingine za CAD na CAM |
| {{ui:STEP AP214 (kigumu sahihi)}} | `<name>.step` | Kigumu kilekile sahihi katika skimu ya zamani ya AP214 |
| {{ui:STEP (yenye nyuso bapa, kernel ya matundu)}} | `<name>.step` | Kigumu kilichotengenezwa kwa nyuso bapa kutoka mesh: **nyuso za duara ni facet ndogo nyingi bapa**. Milimita, katika shoka za PartCraft zenyewe (Y juu). Kwa programu inayokataa faili sahihi |
| {{ui:DXF ya mchoro au uso tambarare}} | `<name> - <sketch>.dxf` au `<name> - face.dxf` | DXF R12. Mchoro: mistari, safu, duara na nukta katika kuratibu za mchoro wenyewe, kwenye tabaka PROFILE, CONSTRUCTION na POINTS. Uso bapa uliochaguliwa: mitaro yake kama polilaini zilizofungwa (kingo za duara kama facet zake) |
| {{ui:Mchoro (PDF): mionekano, sehemu ya mkato, undani, GD&T}} | `<name> - drawing.pdf` | Karatasi ya mchoro ya A3: mionekano mitatu, isometric, sehemu ya mkato na undani ikiwa imewekwa, ukubwa wa jumla, alama za GD&T, kichwa cha mchoro |

:::note
{{ui:STEP AP242 (kigumu sahihi)}} huandika mashimo, boss, fillet, koni, duara na torasi kwenye nyuso zao halisi, ili programu nyingine iweze kuchagua tundu kama silinda; **Curves** haibadilishi hilo. Pande za spline, nyuzi zilizomodelwa na mesh zilizoingizwa hazina uso halisi na hubaki facet bapa ndani ya kigumu kile kile; upau wa hali unasema zilivyo nyingi. {{ui:STEP (yenye nyuso bapa, kernel ya matundu)}} huandika kila nyuso ya duara kama facet.
:::

- Hamisho ni za sehemu iliyo kwenye skrini. Hamisha imezimwa kwenye mkusanyiko; bado hakuna hamisho ya mkusanyiko.
- STL, 3MF, STEP yenye facet na DXF ya uso daima huundwa kwa facet. Mpangilio wa **Mikunjo** (kwenye paneli ya kulia wakati hakuna kilichochaguliwa) huweka jinsi zilivyo laini, kutoka facet 32 hadi 256 kwa zamu. Chagua Laini au Laini sana kabla ya kuhamisha STL au 3MF kwa chapisho laini.
- Mchoro wa PDF hutumia fonti ya Helvetica iliyojengwa ndani ya msomaji. Herufi isiyoweza kuonyeshwa huchapishwa kama "?".

Hatua kwa hatua: [Hamisha kwa uchapishaji, STEP na DXF](topic:export-files) na [Tengeneza karatasi ya mchoro](topic:drawing-pdf).

## Kazi ambayo haijahifadhiwa

- PartCraft huweka nakala ya kurejesha ya sehemu au mkusanyiko uliofunguliwa kwenye kivinjari hiki muda mfupi baada ya kila badiliko, ili ajali au kichupo kilichofungwa visipoteze kazi: mara ujapofungua PartCraft tena, huuliza "Rejesha kazi yako?". Hii si hifadhi: hifadhi kwenye faili ili kuweka kazi yako. Tazama [Rejesha kazi ambayo haijahifadhiwa](common:recover).
- Ukijaribu kufunga kichupo au kupakia upya ukiwa na mabadiliko ambayo hayajahifadhiwa, kivinjari huuliza "Ondoka kwenye tovuti?". Hilo ni sanduku la kivinjari chenyewe; PartCraft haiwezi kubadilisha maneno yake.
- {{ui:Mpya}}, {{ui:Fungua}} na kufunga mkusanyiko huuliza kabla ya kutupa mabadiliko ambayo hayajahifadhiwa.

## Mtandaoni na nje ya mtandao

Kila kitu hufanyika kwenye kompyuta yako: kernel ya matundu (programu ya WebAssembly) hupakuliwa pamoja na programu na kujenga jiometri ndani ya kompyuta, na faili husomwa na kuandikwa kwenye diski yako. Hakuna data ya sehemu inayotumwa kwenye mtandao. Tazama [Kernel ya matundu](topic:solid-kernels).

Ili kufanya kazi bila muunganisho kabisa, hifadhi PartCraft kwa matumizi nje ya mtandao ukiwa mtandaoni: chagua {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu, kisha usubiri huku inahesabu ("Inahifadhi 40 kati ya 212") hadi isome **Tayari nje ya mtandao**. Nakala iliyohifadhiwa inajumuisha maktaba ya 3D na kernel ya matundu, kwa hiyo baadaye uundaji, kuhifadhi, hamisho zote na michoro vyote hufanya kazi nje ya mtandao. Ikisema **Imeshindwa kuhifadhi**, bofya ili kujaribu tena ukiwa mtandaoni; **Nje ya mtandao haipatikani** inamaanisha dirisha hili la kivinjari haliwezi kuweka nakala (madirisha ya faragha na baadhi ya kompyuta zinazosimamiwa). Nakala ikiwa imehifadhiwa, kubofya **Tayari nje ya mtandao** hutoa {{ui:Hifadhi tena (pata toleo la hivi karibuni)}} na {{ui:Ondoa nakala ya nje ya mtandao}}. Maelezo: [Kufanya kazi nje ya mtandao](common:offline).

:::online
Uko mtandaoni. Hata bila kuhifadhi kwa matumizi nje ya mtandao, mara PartCraft ikishapakia na chip ya upau wa hali inasema "Kernel ya matundu", unaweza kuendelea kufanya kazi muunganisho ukikatika. Usipakie ukurasa upya hadi urudi mtandaoni.
:::

:::offline
Uko nje ya mtandao. Ikiwa PartCraft tayari imefunguliwa, endelea kufanya kazi; kuhifadhi na kuhamisha bado kunafanya kazi. Ikiwa upau wa programu unasema **Tayari nje ya mtandao**, PartCraft pia hufunguka tangu mwanzo bila muunganisho; vinginevyo usipakie kichupo hiki upya.
:::

## Tofauti kati ya vivinjari

- **Upakuaji.** Kila kivinjari kina folda yake ya upakuaji na njia yake ya kuuliza. Kikiuliza kama tovuti hii inaruhusiwa kupakua faili, ruhusu; la sivyo kuhifadhi na kuhamisha hakuwezi kufanya kazi.
- **Kuburuta na kuacha** faili kwenye mwonekano kunafanya kazi katika Chrome, Edge, Firefox na Safari.
- **Faili kutoka simu au kompyuta kibao.** Kwenye iPhone na iPad, Fungua huonyesha programu ya Files; faili zilizohifadhiwa huenda kwenye Files, Downloads. Kwenye Android huenda kwenye folda ya Downloads.

Hakuna tofauti katika yaliyomo ya faili kati ya vivinjari au mifumo ya uendeshaji.
