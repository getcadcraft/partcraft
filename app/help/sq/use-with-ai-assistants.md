---
title: Përdor PartCraft me një asistent AI
summary: Lëre asistentin tënd AI ose skriptin të punojë me pjesën e hapur: lexo veçoritë, parametrat dhe masën, ndrysho një parametër dhe ri-ndërto, ekzekuto një skript, eksporto dhe ruaj. I fikur derisa ta ndezësh.
keywords: ai, asistent, agjent, mcp, protokolli i kontekstit të modelit, skript, automatizim, parametra, veti masash, stl, step, 3mf, leje, shkëput, aktivitet, dosje
from: e66d3470
---

## Çfarë do të mësosh

Si ta lësh një asistent AI (ose një skript që ke shkruar) të shikojë pjesën që ke hapur, të ndryshojë parametrat e saj, të ekzekutojë një skript dhe ta eksportojë, dhe si vendos ti se çfarë mund të prekë.

PartCraft **nuk ka AI të vetin** dhe nuk dërgon asgjë askund. Ti sjell asistentin: çdo program që flet Protokollin e Kontekstit të Modelit (MCP). PartCraft i jep vetëm mjete, dhe ti zgjedh cilat.

## Ndize

1. Hap {{ui:Cilësimet}} (ingranazhi në shiritin e aplikacionit, ose {{key:Mod+,}}) dhe shko te skeda {{ui:PartCraft}}.
2. Nën {{ui:Asistentët}}, shëno **Lejo asistentët AI dhe skriptet të përdorin PartCraft**. Është i fikur derisa ta bësh këtë.
3. Zgjidh çfarë mund të bëjë. **Lexim** është e shënuar në fillim; shëno të tjerat vetëm kur të nevojiten.
4. Për ta lejuar të eksportojë dhe të ruajë në një dosje, zgjidh {{ui:Shto një dosje…}} nën **Dosjet që mund t'i përdorë** dhe zgjidh dosjen te dialogu i Studio.

Asistentët lidhen përmes **CadCraft Studio** në kompjuterin tënd: Studio shfaq adresën dhe token-in që duhet ngjitur në asistent. Një skedë shfletuesi nuk mund të hapë një lidhje për një asistent.

## Çfarë mund të kërkojë një asistent

| Mjet | Leje | Çfarë bën |
|---|---|---|
| `part_describe`, `features_list` | Lexim | Veçoritë me radhë, me atë që u ndërtua dhe atë që dështoi, materialin, vëllimin dhe madhësinë e solidit |
| `params_list` | Lexim | Parametrat dhe çdo numër që mund ta drejtojë një ekuacion, me vlerat e tyre |
| `mass_properties` | Lexim | Vëllimi, sipërfaqja, qendra e masës, inercia rreth saj; masa kur pjesa ka material |
| `param_set` | Redaktim | Vendos një parametër ose numrin e një veçorie dhe ri-ndërton. Një hap që mund ta zhbësh |
| `script_run` | Redaktim | Ekzekuton një CraftScript, Lua ose Python skript në mënyrën e hapësirës së punës {{ui:Skript}}: i mbyllur, pa skedarë dhe pa rrjet. Pjesa nuk ndryshon |
| `part_export` | Eksport | STL, 3MF, STEP ose OpenUSD (.usdz, .usda, .usdc), siç i shkruan {{ui:Skedari}} › {{ui:Eksporto}} |
| `link_push` | Redaktim | Përditëson një model të lidhur nga një program tjetër (shih [Mbaj një model .3dm të gjallë](topic:live-3dm-link)) |
| `link_status` | Lexim | Tregon nëse një model i lidhur është ende aty dhe kur u përditësua për herë të fundit |
| `part_save` | Ruaj | {{ui:Ruaj}} e vetë PartCraft |
| `illustrate_export` | Eksport | Një manual nga hapësira e punës {{ui:Ilustro}} si vizatim vije PDF ose SVG i pamjeve të tij, si skedar 3D ndërveprues, ose udhëzimet e tij si PDF ose faqe web, ashtu si menutë {{ui:Eksporto}} dhe {{ui:Udhëzimet}} të hapësirës së punës i shkruajnë ([Manualet](topic:illustrate)) |

:::note
Ky version përdor kernelin e rrjetit: vëllimet vijnë nga trekëndëshat (pak më pak se një solid i vërtetë i lakuar), dhe STEP shkruhet me facetë, me trekëndësha në vend të sipërfaqeve të sakta.
:::

## Ti mbetesh në kontroll

- **Çdo ndryshim është një hap zhbërjeje**, i etiketuar për asistentin, për shembull "Asistent: cakto l = 45". Shtyp {{key:Mod+Z}} për ta kthyer.
- **Ti e di kur është e lidhur.** Një buton në shiritin e aplikacionit e emëron asistentin ndërsa është i lidhur. Kliko për të parë çfarë mund të bëjë, ose për ta **Shkëputur**.
- **Aktiviteti.** {{ui:Cilësimet}} › {{ui:PartCraft}} › {{ui:Asistentët}} › {{ui:Aktiviteti}} liston çdo thirrje; {{ui:Ruaj regjistrin}} mban një kopje.
- **Dosjet.** Lexon dhe shkruan skedarë vetëm në dosjet që ke shtuar; {{ui:Hiq}} heq një dosje menjëherë.

## Pa hapur PartCraft

Serveri i skedarëve CadCraft për asistentët (`npx @getcadcraft/mcp`) dhe rreshti i komandave `cadcraft` hapin pjesë `.partcraft.json` me kodin e vetë PartCraft dhe kernelin e rrjetit, pa dritare: të njëjtat mjete leximi, vendosja e parametrave, skriptet CraftScript, eksportet (edhe OpenUSD) dhe ruajtja. `cadcraft convert bracket.partcraft.json bracket.stl` ndërton një pjesë dhe e shkruan nga rreshti i komandave. Manualet (`.partcraft-manual.json`) eksportohen edhe atje: `illustrate_export`, ose `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (shto `--instructions` për udhëzimet).

## Nëse diçka nuk funksionon

- **"kërkon lejen e redaktimit":** shëno **Redaktim** nën {{ui:Asistentët}}, pastaj pyet përsëri.
- **"drejtohet nga ekuacioni":** ai numër ndjek një parametër; kërko që asistenti të vendosë parametrin në vend të tij.
- **Ndryshimi i tij ishte i gabuar:** shtyp {{key:Mod+Z}}.

## Shih edhe

- [Receta për asistentët AI](common:assistants-recipes): shembuj të punuar, secili me mjetet që thërret.
