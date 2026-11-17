---
title: Gebruik PartCraft met 'n KI-assistent
summary: Laat jou eie KI-assistent of skrip met die oop onderdeel werk: lees sy kenmerke, parameters en massa, verander 'n parameter en bou weer, laat 'n skrip loop, voer uit en stoor. Af totdat jy dit aanskakel.
keywords: ki, assistent, agent, mcp, model context protocol, skrip, outomatisering, parameters, massa-eienskappe, stl, step, 3mf, toestemmings, ontkoppel, bedrywighede, vouers
from: e66d3470
---

## Wat jy sal leer

Hoe jy 'n KI-assistent (of 'n skrip wat jy geskryf het) die onderdeel wat jy oop het laat nagaan, sy parameters laat verander, 'n skrip laat loop en dit laat uitvoer, en hoe jy besluit wat dit mag aanraak.

PartCraft het **geen eie KI nie** en stuur niks iewers heen nie. Jy bring die assistent: enige program wat met die Model Context Protocol (MCP) werk. PartCraft gee dit net gereedskap, en jy kies watter.

## Skakel dit aan

1. Maak {{ui:Instellings}} oop (die rat in die programbalk, of {{key:Mod+,}}) en gaan na die {{ui:PartCraft}}-oortjie.
2. Onder {{ui:Assistente}}, merk **Laat KI-assistente en skripte PartCraft gebruik**. Dit is af totdat jy dit doen.
3. Kies wat dit mag doen. **Lees** is van die begin af gemerk; merk die ander slegs wanneer jy hulle nodig het.
4. Om dit toe te laat om na 'n vouer uit te voer en te stoor, kies {{ui:Voeg 'n vouer by…}} onder **Vouers wat dit mag gebruik** en kies die vouer in Studio se dialoog.

Assistente koppel deur **CadCraft Studio** op jou rekenaar: Studio wys die adres en die token om in die assistent te plak. 'n Blad in 'n blaaier kan nie 'n verbinding vir 'n assistent oopmaak nie.

## Wat 'n assistent kan vra

| Gereedskap | Toestemming | Wat dit doen |
|---|---|---|
| `part_describe`, `features_list` | Lees | Die kenmerke in volgorde met wat gebou is en wat misluk het, die materiaal, die soliede liggaam se volume en grootte |
| `params_list` | Lees | Die parameters en elke getal wat 'n vergelyking kan aandryf, met hul waardes |
| `mass_properties` | Lees | Volume, oppervlakte, massamiddelpunt, die traagheid daaromheen; die massa wanneer die onderdeel 'n materiaal het |
| `param_set` | Wysig | Stel 'n parameter of 'n kenmerk se getal in en bou weer. Een stap wat jy kan ontdoen |
| `script_run` | Wysig | Laat 'n CraftScript-, Lua- of Python-skrip loop soos die {{ui:Skrip}}-werkruimte dit doen: toe, geen lêers en geen netwerk nie. Die onderdeel verander nie |
| `part_export` | Uitvoer | STL, 3MF, STEP of OpenUSD (.usdz, .usda, .usdc), soos {{ui:Lêer}} › {{ui:Uitvoer}} dit skryf |
| `link_push` | Wysig | Dateer 'n model op wat uit 'n ander program gekoppel is (sien [Hou 'n .3dm-model lewend](topic:live-3dm-link)) |
| `link_status` | Lees | Sê of 'n gekoppelde model nog daar is en wanneer dit laas opgedateer is |
| `part_save` | Stoor | PartCraft se eie {{ui:Stoor}} |
| `illustrate_export` | Uitvoer | 'n Handleiding uit die {{ui:Illustreer}}-werkruimte as PDF- of SVG-lynkuns van sy aansigte, as die interaktiewe 3D-lêer, of sy instruksies as PDF of 'n webblad, soos die werkruimte se {{ui:Uitvoer}}- en {{ui:Instruksies}}-kieslyste dit skryf ([Handleidings](topic:illustrate)) |

:::note
Hierdie bouweergawe gebruik die masjiennetkern: volumes kom uit die driehoeke (effens minder as 'n ware geboë soliede liggaam), en STEP word gefacetteer geskryf, met driehoeke in plaas van presiese oppervlaktes.
:::

## Jy bly in beheer

- **Elke verandering is een ontdoen-stap**, met 'n etiket vir die assistent, byvoorbeeld "Assistent: stel l = 45". Druk {{key:Mod+Z}} om dit terug te neem.
- **Jy weet wanneer een gekoppel is.** 'n Knoppie in die programbalk noem die assistent solank hy gekoppel is. Klik daarop om te sien wat hy mag doen, of om hom te **Ontkoppel**.
- **Bedrywighede.** {{ui:Instellings}} › {{ui:PartCraft}} › {{ui:Assistente}} › {{ui:Bedrywighede}} lys elke oproep; {{ui:Stoor die logboek}} hou 'n afskrif.
- **Vouers.** Dit lees en skryf lêers net in die vouers wat jy bygevoeg het; {{ui:Verwyder}} haal 'n vouer dadelik terug.

## Sonder om PartCraft oop te maak

Die CadCraft-lêerbediener vir assistente (`npx @getcadcraft/mcp`) en die `cadcraft`-opdragreël open `.partcraft.json`-onderdele met PartCraft se eie kode en netkern, sonder 'n venster: dieselfde leeshulpmiddels, parameters instel, CraftScript-skripte, uitvoere (OpenUSD ook) en stoor. `cadcraft convert bracket.partcraft.json bracket.stl` bou 'n onderdeel en skryf dit vanaf die opdragreël. Handleidings (`.partcraft-manual.json`) voer daar ook uit: `illustrate_export`, of `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (voeg `--instructions` by vir die instruksies).

## As iets nie werk nie

- **"needs the edit permission":** merk **Wysig** onder {{ui:Assistente}}, en vra dan weer.
- **"driven by the equation":** daardie getal volg 'n parameter; vra eerder die assistent om die parameter in te stel.
- **Die verandering was verkeerd:** druk {{key:Mod+Z}}.

## Sien ook

- [Resepte vir KI-assistente](common:assistants-recipes): uitgewerkte voorbeelde, elk met die gereedskap wat dit roep.
