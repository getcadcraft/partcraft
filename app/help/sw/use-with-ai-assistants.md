---
title: Tumia PartCraft na msaidizi wa AI
summary: Ruhusu msaidizi wako wa AI au script ifanye kazi na sehemu iliyofunguliwa: kusoma vipengele, vigezo na uzito, kubadilisha kigezo na kujenga upya, kuendesha script, kuhamisha nje na kuhifadhi. Imezimwa hadi uiwashe.
keywords: ai, msaidizi, wakala, mcp, model context protocol, script, otomatiki, vigezo, sifa za wingi, stl, step, 3mf, ruhusa, tenganisha, shughuli, folda
from: e66d3470
---

## Utakachojifunza

Jinsi ya kuruhusu msaidizi wa AI (au script uliyoandika) kuangalia sehemu uliyofungua, kubadilisha vigezo vyake, kuendesha script na kuihamisha nje, na jinsi unavyoamua kile kinachoruhusiwa kugusa.

PartCraft **haina AI yake yenyewe** na haituma chochote popote. Wewe ndiye unayeleta msaidizi: programu yoyote inayozungumza Model Context Protocol (MCP). PartCraft inampa zana tu, na wewe unachagua zipi.

## Iwashe

1. Fungua {{ui:Mipangilio}} (gia kwenye upau wa programu, au {{key:Mod+,}}) kisha nenda kwenye kichupo cha {{ui:PartCraft}}.
2. Chini ya {{ui:Wasaidizi}}, weka alama kwenye **Ruhusu wasaidizi wa AI na scripts watumie PartCraft**. Imezimwa hadi utakapofanya hivyo.
3. Chagua kile kinachoruhusiwa kufanya. **Soma** imewekwa alama tangu mwanzo; weka alama kwenye nyingine tu unapozihitaji.
4. Ili kuruhusu kuhamisha nje na kuhifadhi kwenye folda, chagua {{ui:Ongeza folda…}} chini ya **Folda inazoweza kutumia** kisha uchague folda kwenye kisanduku cha mazungumzo cha Studio.

Wasaidizi huunganishwa kupitia **CadCraft Studio** kwenye kompyuta yako: Studio inaonyesha anwani na tokeni ya kubandika kwenye msaidizi. Kichupo cha kivinjari hakiwezi kufungua muunganisho kwa msaidizi.

## Anachoweza kuomba msaidizi

| Zana | Ruhusa | Kinachofanya |
|---|---|---|
| `part_describe`, `features_list` | Soma | Vipengele kwa mpangilio pamoja na kilichojengwa na kilichoshindwa, nyenzo, ujazo na ukubwa wa kigumu |
| `params_list` | Soma | Vigezo na kila namba ambayo mlinganyo unaweza kuendesha, pamoja na thamani zake |
| `mass_properties` | Soma | Ujazo, eneo, kituo cha wingi, na hali ya mzunguko wake (inertia); wingi pale sehemu ina nyenzo |
| `param_set` | Hariri | Huweka kigezo au namba ya kipengele kisha kujenga upya. Hatua moja unayoweza kutendua |
| `script_run` | Hariri | Huendesha script ya CraftScript, Lua au Python kama eneo la {{ui:Script}} linavyofanya: imefungwa, bila faili wala mtandao. Sehemu haibadiliki |
| `part_export` | Hamisha nje | STL, 3MF, STEP au OpenUSD (.usdz, .usda, .usdc), kama {{ui:Faili}} › {{ui:Hamisha nje}} zinavyoziandika |
| `link_push` | Hariri | Husasisha modeli iliyounganishwa kutoka programu nyingine (angalia [Weka modeli ya .3dm hai](topic:live-3dm-link)) |
| `link_status` | Soma | Inaonyesha kama modeli iliyounganishwa bado ipo na ilisasishwa lini mara ya mwisho |
| `part_save` | Hifadhi | {{ui:Hifadhi}} ya PartCraft yenyewe |
| `illustrate_export` | Hamisha nje | Mwongozo kutoka eneo la {{ui:Illustrate}} kama PDF au michoro ya mistari ya SVG ya mionekano yake, kama faili shirikishi la 3D, au maelekezo yake kama PDF au ukurasa wa wavuti, kama menyu za {{ui:Hamisha nje}} na {{ui:Maelekezo}} za eneo zinavyoziandika ([Miongozo](topic:illustrate)) |

:::note
Toleo hili linatumia kiini cha mesh: ujazo unatokana na pembetatu (kidogo chini ya kigumu halisi chenye mikunjo), na STEP inaandikwa kwa pembe, kwa pembetatu badala ya nyuso sahihi.
:::

## Wewe ndiye mwenye udhibiti

- **Kila mabadiliko ni hatua moja ya kutendua**, yenye lebo kwa msaidizi, kwa mfano "Assistant: set l = 45". Bonyeza {{key:Mod+Z}} ili kuirudisha.
- **Utajua msaidizi anapounganishwa.** Kitufe kwenye upau wa programu kinataja msaidizi wakati umeunganishwa. Bonyeza ili kuona kile kinachoruhusiwa kufanya, au **Tenganisha** msaidizi huyo.
- **Shughuli.** {{ui:Mipangilio}} › {{ui:PartCraft}} › {{ui:Wasaidizi}} › {{ui:Shughuli}} inaorodhesha kila wito; {{ui:Hifadhi kumbukumbu}} inahifadhi nakala.
- **Folda.** Inasoma na kuandika faili katika folda ulizoongeza tu; {{ui:Ondoa}} inaondoa folda papo hapo.

## Bila kufungua PartCraft

Seva ya faili za CadCraft kwa wasaidizi (`npx @getcadcraft/mcp`) na mstari wa amri wa `cadcraft` hufungua sehemu za `.partcraft.json` kwa msimbo wa PartCraft wenyewe na kiini cha mesh, bila dirisha: zana zile zile za kusoma, kuweka vigezo, script za CraftScript, kuhamisha nje (pamoja na OpenUSD) na kuhifadhi. `cadcraft convert bracket.partcraft.json bracket.stl` hujenga sehemu na kuiandika kutoka mstari wa amri. Miongozo (`.partcraft-manual.json`) pia huhamishwa nje hapo: `illustrate_export`, au `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (ongeza `--instructions` kwa maelekezo).

## Kama kitu hakifanyi kazi

- **"Inahitaji ruhusa ya kuhariri":** weka alama kwenye **Hariri** chini ya {{ui:Wasaidizi}}, kisha uulize tena.
- **"Inaendeshwa na mlinganyo":** namba hiyo hufuata kigezo; mwombe msaidizi aweke kigezo badala yake.
- **Mabadiliko yake yalikuwa si sahihi:** bonyeza {{key:Mod+Z}}.

## Angalia pia

- [Mapishi kwa wasaidizi wa AI](common:assistants-recipes): mifano iliyofanyiwa kazi, kila moja ikiwa na zana inazoita.
