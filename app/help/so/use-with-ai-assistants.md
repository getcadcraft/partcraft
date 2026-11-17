---
title: Isticmaal PartCraft oo leh caawiye AI
summary: Ogolow caawiyahaaga AI ama script-ka uu ka shaqeeyo qaybta furan: akhri astaamaha, halbeegyada iyo culeyska, beddel halbeeg oo dib u dhis, orod script, dhoofi oo kaydi. Waa damaan ilaa aad furto.
keywords: ai, caawiye, wakiil, mcp, model context protocol, script, otomatig, halbeegyada, sifooyinka culeyska, stl, step, 3mf, ogolaansho, ka jooji, waxqabadka, galalka
from: e66d3470
---

## Waxa aad baran doontid

Sida loo ogolaado caawiye AI (ama script aad qortay) inuu eego qaybta aad furtay, beddelo halbeegyadeeda, orod script oo dhoofiyo, iyo sida aad go'aamiso waxa ay taaban karto.

PartCraft **ma lahan AI gaar ah** mana diro wax meel kasta. Caawiyaha waxaad keentaa adigu: barnaamij kasta oo ku hadla Model Context Protocol (MCP). PartCraft waxa kaliya oo uu siiyaa qalabyo, adigu baad dooratay kuwa.

## Shid

1. Fur {{ui:Dejinta}} (giraanta bar-ka app-ka, ama {{key:Mod+,}}) oo tag tabka {{ui:PartCraft}}.
2. Hoosta {{ui:Kaaliyayaasha}}, calaamadi **Oggolow caawiyayaasha AI iyo scripts-ka inay isticmaalaan PartCraft**. Waa la damiyay ilaa aad samayso.
3. Dooro waxa ay samayn karto. **Akhri** ayaa markii hore la calaamadiyay; kuwa kale calaamadi kaliya markaad u baahan tahay.
4. Si ay u dhoofiyo oo u kaydiso gal, dooro {{ui:Ku dar gal…}} hoosta **Galalka ay isticmaali karto**, oo dooro galka wada-hadalka Studio.

Caawiyayaashu waxay ku xiriiraan **CadCraft Studio** kombiyuutarkaaga: Studio wuxuu muujinayaa cinwaanka iyo tokenka lagu dhejiyo caawiyaha. Tab-ka browser-ka ma furi karo xiriir caawiye.

## Waxa caawiyuhu weydiin karo

| Qalab | Ogolaansho | Waxa uu sameeyo |
|---|---|---|
| `part_describe`, `features_list` | Akhri | Astaamaha iyagoo ku taxan dalbaga ah, oo leh waxa dhisay iyo waxa fashilmay, agabka, mugga iyo cabbirka jidhka |
| `params_list` | Akhri | Halbeegyada iyo lambar kasta oo isle'eg wadi karo, oo leh qiyamkooda |
| `mass_properties` | Akhri | Mugga, dusha, dhexe-culeyska, inertia-ga ku saabsan; culeyska haddii qaybtu leedahay agab |
| `param_set` | Wax ka beddel | Dejiya halbeeg ama lambarka astaamaha oo dib u dhis. Hal tallaabo oo aad ka noqon karto |
| `script_run` | Wax ka beddel | Orodsii script CraftScript, Lua ama Python sida workspace-ka {{ui:Script}} u sameeyo: la xidhay, faylal iyo shabakad la'aan. Qaybtu ma beddelmayso |
| `part_export` | Dhoofi | STL, 3MF, STEP ama OpenUSD (.usdz, .usda, .usdc), sida {{ui:Fayl}} › {{ui:Dhoofi}} u qorto |
| `link_push` | Wax ka beddel | Cusboonaysii moodel laga xiriiriyay barnaamij kale (eeg [Ilaali moodel .3dm oo nool](topic:live-3dm-link)) |
| `link_status` | Akhri | Wuxuu sheegaa in moodelka xiriiran weli jiro iyo markii ugu dambeysay ee cusboonaaday |
| `part_save` | Kaydi | {{ui:Kaydi}} gaarka PartCraft |
| `illustrate_export` | Dhoofi | Buug laga helo workspace-ka {{ui:Illustrate}} oo ah PDF ama SVG line art ee muuqaalkiisa, ama faylka 3D ee wada-falka, ama tilmaamihiisa oo ah PDF ama bog web, sida menu-yada workspace-ka {{ui:Dhoofi}} iyo {{ui:Tilmaamaha}} u qoraan ([Buugaagta](topic:illustrate)) |

:::note
Dhismahan wuxuu isticmaalaa kernel-ka mesh: mugga waxaa laga helaa xagagga (wax yar ka yar jidh gobol run ah), STEP waxaa loo qoraa fasedyo, oo leh xagag halkii ay ka ahaan lahayd dusha saxda ah.
:::

## Adigu ayaad maamulaysaa

- **Isbeddel kasta waa hal tallaabo oo ka noqod**, lagu calaamadiyay caawiyaha, tusaale "Caawiye: deji l = 45". Riix {{key:Mod+Z}} si aad u soo celiso.
- **Waad ogaan kartaa marka uu xiriiray.** Badhanka ku jira bar-ka app-ka ayaa magacaabaya caawiyaha intii uu xiriiran yahay. Riix si aad u aragto waxa uu samayn karo, ama si aad **uga jootid xiriirka**.
- **Waxqabadka.** {{ui:Dejinta}} › {{ui:PartCraft}} › {{ui:Kaaliyayaasha}} › {{ui:Waxqabadka}} waxa ku taxan wac kasta oo la sameeyay; {{ui:Kaydi diiwaanka}} wuxuu keydiyaa nuqul.
- **Galalka.** Wuxuu akhrinayaa oo qorayaa faylal kaliya galalka aad ku darto; {{ui:Ka saar}} wuxuu galka dib u qaadaa isla markiiba.

## Iyada oo aan la furin PartCraft

Server-ka faylalka CadCraft ee caawiyayaasha (`npx @getcadcraft/mcp`) iyo sadarka amarka `cadcraft` waxay furaan qaybaha `.partcraft.json` iyagoo isticmaalaya koodka PartCraft laftiisa iyo kernel-ka mesh-ka, iyada oo aan daaqad la furin: isla qalabyada akhrinta, dejinta halbeegyada, script-yada CraftScript, dhoofinta (OpenUSD sidoo kale) iyo kaydinta. `cadcraft convert bracket.partcraft.json bracket.stl` wuxuu dhisaa qayb oo wuxuu qoraa sadarka amarka. Buugaagta (`.partcraft-manual.json`) waxa laga dhoofin karaa halkaas sidoo kale: `illustrate_export`, ama `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (ku dar `--instructions` tilmaamaha).

## Hadday wax shaqayn waayaan

- **"needs the edit permission":** calaamadi **Wax ka beddel** hoosta {{ui:Kaaliyayaasha}}, kadibna mar kale weydii.
- **"driven by the equation":** lambarkaasi wuxuu raacaa halbeeg; weydii caawiyaha inuu halkii deeyo halbeegga.
- **Isbeddelkiisu waa qalad:** riix {{key:Mod+Z}}.

## Eeg sidoo kale

- [Cuntooyinka caawiyayaasha AI](common:assistants-recipes): tusaalooyin la sameeyay, mid kastaa leh qalabyada uu wicayo.
