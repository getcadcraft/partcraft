---
title: Nota PartCraft með gervigreindaraðstoðarmanni
summary: Leyfðu þínum eigin gervigreindaraðstoðarmanni eða skriftu að vinna með opna hlutann: lesa eiginleika, breytur og massa, breyta breytu og endurbyggja, keyra skriftu, flytja út og vista. Slökkt þar til þú kveikir á því.
keywords: ai, aðstoðarmaður, umboðsmaður, mcp, model context protocol, skrift, sjálfvirkni, breytur, massaeiginleikar, stl, step, 3mf, heimildir, aftengja, virkni, möppur
from: e66d3470
---

## Hvað þú lærir

Hvernig gervigreindaraðstoðarmaður (eða skrifta sem þú skrifaðir) getur skoðað hlutann sem þú hefur opinn, breytt breytum hans, keyrt skriftu og flutt hann út, og hvernig þú ákveður hvað hann má snerta.

PartCraft hefur **enga eigin gervigreind** og sendir ekkert neitt. Þú kemur með aðstoðarmanninn: hvaða forrit sem talar Model Context Protocol (MCP). PartCraft gefur honum aðeins verkfæri og þú velur hvaða.

## Kveikja á því

1. Opnaðu {{ui:Stillingar}} (tannhjólið í forritsstikunni, eða {{key:Mod+,}}) og farðu á flipann {{ui:PartCraft}}.
2. Undir {{ui:Aðstoðarmenn}} skaltu haka í **Leyfa gervigreindaraðstoðarmönnum og skriftum að nota PartCraft**. Það er slökkt þar til þú gerir það.
3. Veldu hvað hann má gera. **Lesa** er hakað í upphafi; hakaðu við hin aðeins þegar þú þarft þau.
4. Til að leyfa honum að flytja út og vista í möppu skaltu velja {{ui:Bæta við möppu…}} undir **Möppur sem hann má nota** og velja möppuna í glugga CadCraft Studio.

Aðstoðarmenn tengjast í gegnum **CadCraft Studio** í tölvunni þinni: Studio sýnir vistfangið og táknið sem þú límir í aðstoðarmanninn. Vafraflipi getur ekki opnað tengingu fyrir aðstoðarmann.

## Hvað aðstoðarmaður getur beðið um

| Verkfæri | Heimild | Hvað það gerir |
|---|---|---|
| `part_describe`, `features_list` | Lesa | Eiginleikarnir í röð með því sem byggðist og því sem mistókst, efnið, rúmmál fasthlutans og stærð hans |
| `params_list` | Lesa | Breyturnar og allar tölur sem jafna getur stýrt, með gildum sínum |
| `mass_properties` | Lesa | Rúmmál, flatarmál, massamiðja, tregða um hana; massinn þegar hlutinn hefur efni |
| `param_set` | Breyta | Setur breytu eða tölu eiginleika og endurbyggir. Eitt skref sem þú getur afturkallað |
| `script_run` | Breyta | Keyrir CraftScript, Lua eða Python skriftu eins og {{ui:Skrift}}-vinnusvæðið gerir: lokuð, engar skrár og ekkert net. Hlutinn breytist ekki |
| `part_export` | Flytja út | STL, 3MF, STEP eða OpenUSD (.usdz, .usda, .usdc), eins og {{ui:Skrá}} › {{ui:Flytja út}} skrifar þau |
| `link_push` | Breyta | Uppfærir líkan sem er tengt úr öðru forriti (sjá [Halda .3dm líkani lifandi](topic:live-3dm-link)) |
| `link_status` | Lesa | Segir hvort tengda líkanið er enn til staðar og hvenær það uppfærðist síðast |
| `part_save` | Vista | {{ui:Vista}} PartCraft sjálfs |
| `illustrate_export` | Flytja út | Handbók úr {{ui:Myndskreyting}}-vinnusvæðinu sem PDF eða SVG línumynd af sýnum hennar, sem gagnvirk þrívíddarskrá, eða leiðbeiningar sem PDF eða vefsíðu, eins og valmyndir {{ui:Flytja út}} og {{ui:Leiðbeiningar}} vinnusvæðisins skrifa þær ([Handbækur](topic:illustrate)) |

:::note
Þessi útgáfa notar möskvakjarna: rúmmál koma úr þríhyrningunum (aðeins minna en sannur bogadreginn fasthluti), og STEP er skrifað facetað, með þríhyrningum í stað nákvæmra yfirborða.
:::

## Þú hefur stjórnina

- **Sérhver breyting er eitt afturköllunarskref**, merkt aðstoðarmanninum, til dæmis „Aðstoðarmaður: setti l = 45“. Ýttu á {{key:Mod+Z}} til að taka það til baka.
- **Þú veist þegar einn er tengdur.** Hnappur í forritsstikunni nefnir aðstoðarmanninn meðan hann er tengdur. Smelltu á hann til að sjá hvað hann má gera, eða til að **Aftengja** hann.
- **Virkni.** {{ui:Stillingar}} › {{ui:PartCraft}} › {{ui:Aðstoðarmenn}} › {{ui:Virkni}} sýnir hvert kall; {{ui:Vista atburðaskrána}} geymir afrit.
- **Möppur.** Hann les og skrifar skrár aðeins í möppunum sem þú bættir við; {{ui:Fjarlægja}} tekur möppu til baka strax.

## Án þess að opna PartCraft

Skráaþjónninn fyrir aðstoðarmenn (`npx @getcadcraft/mcp`) og skipanalínan `cadcraft` opna `.partcraft.json`-hluta með eigin kóða PartCraft og möskvakjarna þess, án glugga: sömu lesverkfæri, breytingar á breytum, CraftScript-skriftur, útflutningur (OpenUSD líka) og vistun. `cadcraft convert bracket.partcraft.json bracket.stl` byggir hluta og skrifar hann úr skipanalínunni. Handbækur (`.partcraft-manual.json`) flytjast líka þar út: `illustrate_export`, eða `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (bættu við `--instructions` fyrir leiðbeiningarnar).

## Ef eitthvað virkar ekki

- **„needs the edit permission“:** Hakaðu við **Breyta** undir {{ui:Aðstoðarmenn}} og spurðu svo aftur.
- **„driven by the equation“:** Þessi tala fylgir breytu; biddu aðstoðarmanninn að stilla breytuna í staðinn.
- **Breytingin hans var röng:** Ýttu á {{key:Mod+Z}}.

## Sjá einnig

- [Uppskriftir fyrir gervigreindaraðstoðarmenn](common:assistants-recipes): unnin dæmi, hvert með verkfærunum sem það kallar á.
