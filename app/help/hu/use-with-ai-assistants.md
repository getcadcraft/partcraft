---
title: PartCraft használata AI-asszisztenssel
summary: Engedje, hogy a saját AI-asszisztense vagy szkriptje dolgozzon a megnyitott alkatrészen: olvassa a jellemzőit, paramétereit és tömegét, módosítson egy paramétert és építse újra, futtasson szkriptet, exportáljon és mentsen. Amíg be nem kapcsolja, ki van kapcsolva.
keywords: ai, asszisztens, ügynök, mcp, model context protocol, szkript, automatizálás, paraméterek, tömegtulajdonságok, stl, step, 3mf, engedélyek, leválasztás, tevékenység, mappák
from: e66d3470
---

## Mit fog megtanulni

Hogyan engedélyezheti, hogy egy AI-asszisztens (vagy az Ön által írt szkript) megnézze a megnyitott alkatrészt, módosítsa a paramétereit, futtasson szkriptet és exportálja, valamint hogyan dönti el, mihez nyúlhat hozzá.

A PartCraftban **nincs saját AI**, és semmit sem küld sehova. Ön hozza az asszisztenst: bármely olyan programot, amely beszél a Model Context Protocol (MCP) nyelvén. A PartCraft csak eszközöket ad neki, és Ön választja ki, melyeket.

## Bekapcsolás

1. Nyissa meg a(z) {{ui:Settings}} elemet (a fogaskerék az alkalmazássávon, vagy {{key:Mod+,}}), és lépjen a(z) {{ui:PartCraft}} lapra.
2. A(z) {{ui:Assistants}} alatt jelölje be a következőt: **Engedélyezze, hogy az AI-asszisztensek és szkriptek használják a PartCraftot**. Addig ki van kapcsolva, amíg be nem jelöli.
3. Válassza ki, mit tehet. Az **Olvasás** alapértelmezés szerint be van jelölve; a többit csak akkor jelölje be, ha szüksége van rájuk.
4. Ha exportálhat és menthet egy mappába, válassza a {{ui:Add a folder…}} lehetőséget a **Használható mappák** alatt, és a Studio párbeszédpanelén jelölje ki a mappát.

Az asszisztensek a számítógépén futó **CadCraft Studio** alkalmazáson keresztül kapcsolódnak: a Studio megmutatja azt a címet és tokent, amelyet be kell illeszteni az asszisztensbe. Böngészőlap nem tud kapcsolatot nyitni egy asszisztens számára.

## Mit kérhet egy asszisztens

| Eszköz | Engedély | Mit csinál |
|---|---|---|
| `part_describe`, `features_list` | Olvasás | A jellemzők sorrendben, azzal, hogy mi készült el és mi nem, az anyag, a test térfogata és mérete |
| `params_list` | Olvasás | A paraméterek és minden olyan szám, amelyet egyenlet vezérelhet, az értékeikkel |
| `mass_properties` | Olvasás | Térfogat, felület, tömegközéppont, az ahhoz tartozó tehetetlenségi nyomaték; a tömeg, ha az alkatrésznek van anyaga |
| `param_set` | Szerkesztés | Beállít egy paramétert vagy egy jellemző számát, és újraépíti. Egy visszavonási lépés |
| `script_run` | Szerkesztés | Futtat egy CraftScript, Lua vagy Python szkriptet úgy, ahogy a(z) {{ui:Script}} munkaterület: zárt, nincs fájl és hálózat. Az alkatrész nem változik |
| `part_export` | Exportálás | STL, 3MF, STEP vagy OpenUSD (.usdz, .usda, .usdc), ahogyan a {{ui:File}} › {{ui:Export}} írja őket |
| `link_push` | Szerkesztés | Frissít egy másik programból csatolt modellt (lásd: [A .3dm modell élő tartása](topic:live-3dm-link)) |
| `link_status` | Olvasás | Megmondja, hogy a csatolt modell még ott van-e, és mikor frissült utoljára |
| `part_save` | Mentés | A PartCraft saját {{ui:Save}} parancsa |
| `illustrate_export` | Exportálás | Egy kézikönyv az {{ui:Illustrate}} munkaterületről PDF-ben vagy SVG vonalrajzként a nézeteiről, interaktív 3D-fájlként, vagy az utasításai PDF-ben vagy weboldalként, ahogyan a munkaterület {{ui:Export}} és {{ui:Instructions}} menüi írják ([Kézikönyvek](topic:illustrate)) |

:::note
Ez a build hálókernelt használ: a térfogatok a háromszögekből származnak (valamivel kisebbek, mint egy valódi görbe test), a STEP pedig lapokra bontva íródik, háromszögekkel a pontos felületek helyett.
:::

## Ön marad az irányító

- **Minden módosítás egy visszavonási lépés**, az asszisztensnek megfelelő címkével, például „Assistant: set l = 45”. A visszavonáshoz nyomja meg a {{key:Mod+Z}} billentyűt.
- **Tudja, mikor van csatlakoztatva.** Az alkalmazássávon egy gomb nevezi meg az asszisztenst, amíg csatlakoztatva van. Kattintson rá, hogy lássa, mit tehet, vagy a **Leválasztás** gombbal válassza le.
- **Tevékenység.** A {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}} › {{ui:Activity}} menüpont minden hívást listáz; a {{ui:Save the log}} gombbal megőrizhet egy másolatot.
- **Mappák.** Csak az Ön által hozzáadott mappákban olvas és ír fájlokat; az az Eltávolítás gombbal azonnal visszavonhatja a mappát.

## PartCraft megnyitása nélkül

Az asszisztensek számára készült CadCraft fájlkiszolgáló (`npx @getcadcraft/mcp`) és a `cadcraft` parancssor a `.partcraft.json` alkatrészeket a PartCraft saját kódjával és hálókerneljével nyitja meg, ablak nélkül: ugyanazokkal az olvasó eszközökkel, paraméterbeállítással, CraftScript-szkriptekkel, exportokkal (az OpenUSD is) és mentéssel. A `cadcraft convert bracket.partcraft.json bracket.stl` parancs felépít egy alkatrészt, és a parancssorból kiírja. A kézikönyvek (`.partcraft-manual.json`) is exportálhatók ott: `illustrate_export`, vagy `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (az utasításokhoz adja hozzá a `--instructions` kapcsolót).

## Ha valami nem működik

- **„szerkesztési engedély szükséges”:** a(z) {{ui:Assistants}} alatt jelölje be a **Szerkesztés** lehetőséget, majd kérje újra.
- **„egyenlet vezérli”:** ez a szám egy paramétert követ; kérje meg az asszisztenst, hogy inkább a paramétert állítsa be.
- **A módosítása hibás volt:** nyomja meg a {{key:Mod+Z}} billentyűt.

## Lásd még

- [Receptek AI-asszisztensekhez](common:assistants-recipes): kidolgozott példák, mindegyik mellett a hívott eszközökkel.
