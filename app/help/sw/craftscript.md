---
title: Andika na endesha scripts (Eneo la Script)
summary: Eneo la Script hatua kwa hatua: andika script ya CraftScript au Lua, iendeshe kwa F5, soma kiweko, weka matokeo kwenye vigeu kwa script inayofuata, onyesha mesh, nyanja na michoro, simamisha endesho, na hifadhi scripts pamoja na sehemu.
keywords: script, uandishi wa script, script wakati wa kumodeli, toa nje, skrini ya pili, kifuatilizi cha pili, param, params, vigezo kwenye scripts, CraftScript, Lua, msimbo, programu, kihariri, kiweko, REPL, mstari wa amri, endesha, F5, endesha uteuzi, simamisha, vigeu, eneo la kazi, mchoro, nyanja, mesh, hadithi, onyesho dogo, uchambuzi, otomatiki, matriki, hesabu
from: d0003e89
---

**Onyesho la awali.** Uandishi wa script ni mpya katika PartCraft 0.3 na ni onyesho la awali: lugha, maktaba na namna scripts zinavyohifadhiwa vinaweza kubadilika, na scripts zilizoandikwa sasa zinaweza kuhitaji mabadiliko madogo baadaye. Tuambie kinachovunjika.

Eneo la Script huendesha hesabu zako mwenyewe karibu na sehemu: jumla ndogo, uchambuzi mzima, au scripts za [maktaba ya uchambuzi](topic:craftscript-library). Scripts zinaandikwa kwa **CraftScript** (lugha ya matriki inayofanana sana na MATLAB, tazama [Lugha ya CraftScript](topic:craftscript-language)) au kwa **Lua** (tazama [Scripts katika Lua](topic:craftscript-lua)) au kwa **Python** (tazama [Scripts katika Python](topic:craftscript-python)).

Chagua **Script** kwenye kisanduku cha **Eneo la kazi** upande wa kushoto wa upau wa zana. Sehemu haibadilishwi. Paneli ya kulia inakuwa paneli ya script (pana kuliko kawaida; buruta ukingo wake ili kuibadilisha, au isogeze hadi skrini ya pili kwa menyu yake ya {{ui:⋯}}, tazama [Panga paneli](common:arrange-panels)).

## Script unapomodeli

Hujalazimika kuondoka kwenye eneo la kazi la **Muundo** ili kuandika script. Katika Muundo, kichupo cha {{ui:Script}} cha paneli ya kulia kina kihariri, kiweko, vigeu na maktaba vile vile, pamoja na scripts zile zile. Mti wa vipengele na mwonekano vinaendelea kufanya kazi: bofya kipengele ili kukichagua, bofya mara mbili mchoro ili kuuhariri, zungusha mwonekano, kisha rudi kwenye kichupo cha {{ui:Script}} na ubonyeze {{key:F5}}.

Kile ambacho script **inaonyesha** (mesh, nyanja, michoro, jedwali) hakichorwi juu ya modeli yako katika Muundo: kiweko kinasema hivyo, na Eneo la Script lina kila kitu utakapobadili hadi humo.

{{ui:Toa nje}}, karibu na {{ui:Endesha}}, huhamisha paneli nzima hadi dirisha lake, kwa mfano kwenye skrini ya pili, ili kihariri na mwonekano kamili vikae kando kwa kando. {{ui:Rudisha}} huiunganisha tena. Tazama [Panga paneli](common:arrange-panels).

## Endesha script yako ya kwanza

1. Andika kwenye kihariri, kwa mfano:

   ```
   x = linspace(0, 2*pi, 50);
   y = sin(x);
   plot(x, y, 'title', 'Wimbi la sine')
   disp(max(y))
   ```

2. Bonyeza {{key:F5}} (au Endesha). Kiweko chini ya kihariri kinaonyesha kile script ilichochapisha, na "Imekamilika kwa … s". Mchoro unaonekana katika **maonyesho madogo** chini ya mwonekano wa 3D.
3. Mstari usio na semikoloni huchapisha thamani yake, kama katika MATLAB: `a = 3` huchapisha `a = 3`; `a = 3;` haichapishi kitu.
4. Ili kuendesha sehemu ya script tu, chagua mistari kisha bonyeza {{key:Mod+Enter}} (Uteuzi). Pasipo kuchagua chochote, huendesha mstari ambapo kishale kipo.
5. Mstari uliopo chini ya kiweko (baada ya `>>`) huendesha kauli moja unapobonyeza {{key:Enter}}. {{key:Up}} na {{key:Down}} hurudisha mistari ya awali.

## Tafuta, kunja na kamilisha

- **Tafuta na badilisha.** Bonyeza {{key:Mod+F}} (au {{key:Mod+H}} kubadilisha pia). Upau unafunguka juu ya msimbo: andika la kutafuta; mechi zinawaka na hesabu inaonyesha ulipo. Vitufe vilivyo kando ya kisanduku vinalinganisha herufi kubwa na ndogo (**Aa**), vinatafuta maneno kamili pekee (**W**) na kutumia usemi wa kawaida (**.\***; katika kubadilisha, `$1` huweka kile kundi la kwanza lililolingana). {{ui:Badilisha}} hubadilisha mechi ya sasa, {{ui:Zote}} hubadilisha kila mechi kama hatua moja ya {{key:Mod+Z}}.
- **Kukunja.** Bofya ▾ karibu na nambari ya mstari, au bonyeza {{key:Mod+Shift+[}} kwa kishale kwenye mstari wa `function`, `if`, `for`, `while`, `switch` au `try` (Lua: `function`, `do`, `if`, `repeat`), ili kuficha mistari yake ya ndani; mstari unaonyesha ni mingapi. ▸ au {{key:Mod+Shift+]}} huufungua tena. Kukunja huficha mistari tu: Endesha, Hifadhi, kunakili na nambari za mistari bado zinahesabu kila mstari, na kuandika kwenye mstari uliokunjwa hufungua kwanza.
- **Kukamilisha.** Andika herufi mbili za jina, au bonyeza {{key:Mod+Space}}: orodha inaonyesha vigeu ulivyo navyo, kazi za lugha (pamoja na hoja zake), maneno muhimu na majina yaliyopo tayari kwenye script. Chagua kwa vishale na bonyeza {{key:Enter}} au {{key:Tab}}.

## Kitu kikienda vibaya

- Hitilafu hutaja tatizo na mstari wake: mstari unawekwa alama nyekundu kwenye kihariri, na **Mstari n** kwenye kiweko hukupeleka huko.
- Kitanzi kisichoisha: bonyeza {{ui:Simamisha}} (upau wa zana au paneli). Script inasimama mara moja; vigeu vinaendelea kuwa na thamani zilizokuwa nazo kabla ya endesho hilo.
- Kila endesho pia lina bajeti ya hatua (hatua bilioni 2 kwa chaguo-msingi; badilisha chini ya **Chaguo za uendeshaji** kwenye paneli). Endesho linalopita bajeti hiyo husimama kwa ujumbe.

## Vigeu vinasafiri kutoka script hadi script

Kila kigeu cha ngazi ya juu ambacho script inatengeneza huingia kwenye kichupo cha **Vigeu** (jina, aina, ukubwa, thamani ndogo kabisa na kubwa kabisa) na hubaki hapo kwa script inayofuata, katika lugha yoyote. Hivyo ndivyo script moja inavyounda mesh, inayofuata inatatua, na ya tatu inachora.

- Bofya kigeu ili kukionyesha: mesh, nyanja na modeli katika mwonekano wa 3D, safu kama jedwali (pamoja na mchoro wa mstari kwa vekta au ramani ya rangi kwa matriki) katika maonyesho madogo.
- {{ui:Hifadhi kama JSON}}, {{ui:Hifadhi kama CSV}} (jedwali la namba) na {{ui:Hifadhi kama HDF5}} hupakua; {{ui:Futa}} huiondoa; {{ui:Futa zote}} hufuta eneo la kazi lote.
- Weka alama kwenye **Hifadhi vigeu pamoja na sehemu** ili kuviweka kwenye faili la sehemu (hadi MB 32; vikubwa zaidi vinabaki kwa ziara hii pekee). Ukifungua sehemu kama hiyo, paneli inatoa kuvipakia.

## Mesh, nyanja na michoro

- `show(m)` huchora mesh; `show(f)` hupaka rangi nyanja kwenye mesh yake pamoja na hadithi. Orodha ya **Zinazoonyeshwa** kwenye kona ya juu kushoto ya mwonekano huficha ({{ui:jicho}}) au kuondoa kila kipengele, na huficha au kuonyesha sehemu yenyewe. Chini ya hadithi, andika upeo (**Kutoka**, **hadi**) au bonyeza {{ui:Otomatiki}}; nyanja ya vekta au mkazo pia hutoa chaguo la sehemu ya kuonyesha.
- `show(f, 'deform', u, 'scale', 50)` huchora mesh iliyohamishwa na uwanja wa mikengeuko `u`, ukikuzwa mara 50 (bila `scale`, takriban 8 % ya ukubwa wa modeli).
- Bofya mesh iliyoonyeshwa: nodi iliyo karibu zaidi, elementi na thamani za nyanja hapo huonekana katika maonyesho madogo (**Iliyochaguliwa**).
- `plot`, `imagesc` na `table` huweka mchoro wa mstari, ramani ya rangi ya safu ya 2-D au jedwali katika maonyesho madogo. Mchoro wenye `'id'` (au jina) sawa na uliotangulia unauchukua nafasi, kwa hiyo kitanzi kinaweza kusasisha mchoro mmoja wa muunganiko; `'append', true` huongeza mkunjo kwake. {{ui:Safisha}} hufuta maonyesho madogo; mshale huyakunja.
- Kukiwa na michoro miwili au zaidi, {{ui:Kando kwa kando}} huonyesha yote kwa wakati mmoja (sita ya hivi karibuni); kubofya kichupo cha jedwali au picha huonyesha hicho pekee tena.
- Kila mchoro una {{ui:PNG}}, {{ui:SVG}} na {{ui:CSV}} chini yake. PNG na SVG huuchapisha kwenye mandharinyuma nyeupe kwa rangi za karatasi, bila kujali mandhari (PNG pikseli 1600 × 1000; SVG hukuza bila kufifia); CSV inashikilia namba zake zenye tarakimu zote: safu wima moja ya x na safu wima kwa kila mkunjo mikunjo ikishiriki x, vinginevyo safu mlalo moja kwa kila nukta yenye jina la mkunjo.
- {{key:F}} au {{ui:Lingana}} huweka mwonekano kulingana na kile kinachoonyeshwa.

## Faili

- {{ui:Fungua}} katika kikundi cha Script (au buruta faili kwenye mwonekano au paneli): faili za `.craft`, `.lua` na `.py` hufunguka kama scripts mpya (haziendeshwi); faili za data (STL, OBJ, CSV, JSON, NPY, HDF5) hupakiwa kwenye vigeu chini ya jina la faili.
- {{ui:Hifadhi}} katika kikundi cha Script hupakua script ya sasa kama faili.
- {{ui:Mpya}} katika kikundi cha Script (au {{ui:+}} karibu na vichupo) huanzisha script nyingine. Bofya mara mbili kichupo ili kukibadilisha jina; {{ui:×}} yake huiondoa (unaweza kutendua hilo).

## Soma vigezo vya sehemu

Script inasoma vigezo vya sehemu (tazama [Endesha sehemu kwa vigezo](topic:parameters)) kwa jina:

```
w = param('width');     % thamani ya kigezo kimoja, kwa mm (au digrii, au namba ya kawaida)
p = params();           % vyote, kama struct: p.width, p.height
```

Katika Lua na Python ni `cs.param('width')` na `cs.params()`. Scripts zinasoma vigezo tu: badilisha kwenye kichupo cha {{ui:Vigezo}}. Chini ya kichupo cha script, mstari unaorodhesha vigezo inavyosoma kwa `param('…')`, na unaweka alama vile ambavyo sehemu haina; kichupo cha {{ui:Vigezo}} kinaorodhesha script chini ya kila kigezo. Jina linalojengwa wakati script inaendeshwa, kama `param(name)`, halioorodheshwi.

## Scripts zinahifadhiwa kwenye sehemu

Kila script kwenye vichupo huhifadhiwa kwenye sehemu, kwa hiyo {{ui:Hifadhi}} katika kikundi cha Faili huihifadhi pamoja nayo, na mabadiliko yake yanaweza kutenduliwa. Kufungua sehemu **hakuendeshi scripts zake kamwe**: kiweko kinasema zimebeba ngapi, na huendeshwa tu ukibonyeza Endesha. Sehemu ya mtu mwingine inaweza kuwa na script yoyote: isome kabla ya kuiendesha. Scripts huendeshwa chinichini kwenye kompyuta hii bila ufikiaji wa mtandao na haziwezi kugusa ukurasa.

## Vinavyohusiana

- [Lugha ya CraftScript](topic:craftscript-language)
- [Scripts katika Lua](topic:craftscript-lua)
- [Scripts katika Python](topic:craftscript-python)
- [Maktaba ya uchambuzi](topic:craftscript-library)
- [Andika uchambuzi wako](topic:craftscript-own-analysis)
