---
title: Použite PartCraft s AI asistentom
summary: Nechajte svojho AI asistenta alebo skript pracovať s otvorenou súčiastkou, čítať jej prvky, parametre a hmotnosť, zmeniť parameter a prepočítať, spustiť skript, exportovať a uložiť. Dovtedy vypnuté, kým ho nezapnete.
keywords: ai, asistent, agent, mcp, model context protocol, skript, automatizácia, parametre, vlastnosti hmotnosti, stl, step, 3mf, oprávnenia, odpojenie, aktivita, priečinky
from: e66d3470
---

## Čo sa naučíte

Ako necháte AI asistenta (alebo skript, ktorý ste napísali) pozrieť sa na súčiastku, ktorú máte otvorenú, zmeniť jej parametre, spustiť skript a exportovať ju, a ako rozhodnete, čoho sa môže dotknúť.

PartCraft **nemá vlastnú AI** a nikam nič neposiela. Asistenta prinesiete vy: ktorýkoľvek program, ktorý hovorí cez Model Context Protocol (MCP). PartCraft mu iba poskytne nástroje a vy vyberiete, ktoré.

## Zapnutie

1. Otvorte {{ui:Nastavenia}} (ozubené koliesko na paneli aplikácie alebo {{key:Mod+,}}) a prejdite na kartu {{ui:PartCraft}}.
2. Pod {{ui:Asistenti}} zaškrtnite **Nechať AI asistentov a skripty používať PartCraft**. Kým to neurobíte, je to vypnuté.
3. Zvoľte, čo môže robiť. **Čítanie** je zaškrtnuté na začiatku; ostatné zaškrtnite, až keď ich budete potrebovať.
4. Ak chcete, aby mohol exportovať a ukladať do priečinka, zvoľte pod **Priečinky, ktoré môže používať** {{ui:Pridať priečinok…}} a vyberte priečinok v dialógovom okne Studio.

Asistenti sa pripájajú cez **CadCraft Studio** vo vašom počítači: Studio zobrazí adresu a token, ktorý vložíte do asistenta. Karta prehliadača nemôže otvoriť pripojenie pre asistenta.

## Čo môže asistent požadovať

| Nástroj | Oprávnenie | Čo robí |
|---|---|---|
| `part_describe`, `features_list` | Čítanie | Prvky v poradí s tým, čo sa zostavilo a čo zlyhalo, materiál, objem a veľkosť telesa |
| `params_list` | Čítanie | Parametre a každé číslo, ktoré môže riadiť rovnica, s ich hodnotami |
| `mass_properties` | Čítanie | Objem, plocha, ťažisko, zotrvačnosť okolo neho; hmotnosť, ak má súčiastka materiál |
| `param_set` | Úprava | Nastaví parameter alebo číslo prvku a prepočíta. Jeden krok, ktorý môžete vrátiť späť |
| `script_run` | Úprava | Spustí skript CraftScript, Lua alebo Python tak, ako ho spúšťa pracovný priestor {{ui:Skript}}: izolovane, bez súborov a bez siete. Súčiastka sa nezmení |
| `part_export` | Export | STL, 3MF, STEP alebo OpenUSD (.usdz, .usda, .usdc), tak ako ich zapisuje {{ui:Súbor}} › {{ui:Export}} |
| `link_push` | Úprava | Aktualizuje model prepojený z iného programu (pozri [Udržiavať model .3dm aktuálny](topic:live-3dm-link)) |
| `link_status` | Čítanie | Povie, či prepojený model stále existuje a kedy sa naposledy aktualizoval |
| `part_save` | Uložiť | Vlastné {{ui:Uložiť}} PartCraft |
| `illustrate_export` | Export | Návod z pracovného priestoru {{ui:Ilustrácia}} ako PDF alebo SVG čiarová grafika jeho pohľadov, ako interaktívny 3D súbor, alebo jeho pokyny ako PDF či webová stránka, tak ako ich zapisujú ponuky {{ui:Export}} a {{ui:Pokyny}} pracovného priestoru ([Návody](topic:illustrate)) |

:::note
Táto verzia používa sieťové jadro: objemy vznikajú z trojuholníkov (o trochu menšie než skutočné zakrivené teleso) a STEP sa zapisuje fazetovane, s trojuholníkmi namiesto presných plôch.
:::

## Kontrolu máte vy

- **Každá zmena je jeden krok späť**, označený pre asistenta, napríklad „Assistant: set l = 45“. Stlačením {{key:Mod+Z}} ju vrátite späť.
- **Viete, kedy je pripojený.** Tlačidlo na paneli aplikácie počas pripojenia pomenuje asistenta. Kliknutím naň zistíte, čo môže robiť, alebo ho **odpojíte**.
- **Aktivita.** {{ui:Nastavenia}} › {{ui:PartCraft}} › {{ui:Asistenti}} › {{ui:Aktivita}} vypíše každé volanie; {{ui:Uložiť záznam}} uchová kópiu.
- **Priečinky.** Číta a zapisuje súbory iba v priečinkoch, ktoré ste pridali; {{ui:Odstrániť}} priečinok hneď odoberie.

## Bez otvorenia PartCraft

Súborový server CadCraft pre asistentov (`npx @getcadcraft/mcp`) a príkazový riadok `cadcraft` otvárajú súčiastky `.partcraft.json` s vlastným kódom PartCraft a sieťovým jadrom, bez okna: rovnaké nástroje na čítanie, nastavovanie parametrov, skripty CraftScript, exporty (vrátane OpenUSD) a ukladanie. `cadcraft convert bracket.partcraft.json bracket.stl` zostaví súčiastku a zapíše ju z príkazového riadku. Návody (`.partcraft-manual.json`) sa tam exportujú tiež: `illustrate_export` alebo `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (pre pokyny pridajte `--instructions`).

## Ak niečo nefunguje

- **„needs the edit permission“:** zaškrtnite **Úprava** pod {{ui:Asistenti}} a potom požiadajte znova.
- **„driven by the equation“:** to číslo nasleduje parameter; požiadajte asistenta, aby nastavil parameter.
- **Zmena bola nesprávna:** stlačte {{key:Mod+Z}}.

## Pozri tiež

- [Recepty pre AI asistentov](common:assistants-recipes): pracovné príklady, každý s nástrojmi, ktoré volá.
