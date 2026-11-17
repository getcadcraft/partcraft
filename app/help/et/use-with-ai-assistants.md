---
title: PartCrafti kasutamine tehisintellekti assistendiga
summary: Lase oma tehisintellekti assistendil või skriptil avatud detailiga töötada: lugeda selle elemente, parameetreid ja massi, muuta parameetrit ja ehitada uuesti, käivitada skript, eksportida ja salvestada. Väljas, kuni selle sisse lülitad.
keywords: tehisintellekt, assistent, agent, mcp, mudeli konteksti protokoll, skript, automatiseerimine, parameetrid, massiomadused, stl, step, 3mf, õigused, ühenduse katkestamine, tegevus, kaustad
from: e66d3470
---

## Mida sa õpid

Kuidas lasta tehisintellekti assistendil (või sinu kirjutatud skriptil) vaadata avatud detaili, muuta selle parameetreid, käivitada skript ja seda eksportida ning kuidas otsustad, mida see tohib puudutada.

PartCraftil **ei ole oma tehisintellekti** ja ei saada kuhugi midagi. Assistendi toob sina: iga programm, mis räägib mudeli konteksti protokolli (MCP). PartCraft annab sellele ainult tööriistu ja sina otsustad, millised.

## Lülita sisse

1. Ava {{ui:Sätted}} (rakendusribal olev hammasratas või {{key:Mod+,}}) ja mine vahekaardile {{ui:PartCraft}}.
2. Jaotises {{ui:Assistendid}} märgi **Luba tehisintellekti assistentidel ja skriptidel PartCraft'i kasutada**. See on väljas, kuni sa seda ei tee.
3. Vali, mida see tohib teha. **Lugemine** on alguses märgitud; teised märgi ainult siis, kui neid vajad.
4. Et see saaks eksportida ja salvestada kausta, vali all **Kaustad, mida see tohib kasutada** {{ui:Lisa kaust…}} ja vali kaust Studio dialoogis.

Assistendid ühenduvad sinu arvutis **CadCraft Studio** kaudu: Studio näitab aadressi ja tokenit, mille kleebid assistenti. Brauseri vahekaart ei saa assistendile ühendust avada.

## Mida assistent võib küsida

| Tööriist | Õigus | Mida see teeb |
|---|---|---|
| `part_describe`, `features_list` | Lugemine | Elemendid järjekorras koos sellega, mis valmis ja mis ebaõnnestus, materjal, tahkise maht ja mõõdud |
| `params_list` | Lugemine | Parameetrid ja iga arv, mida võrrand võib juhtida, koos väärtustega |
| `mass_properties` | Lugemine | Maht, pindala, massikese, selle ümber olev inertsus; mass, kui detailil on materjal |
| `param_set` | Muutmine | Seab parameetri või elemendi arvu ja ehitab uuesti. Üks samm, mille saab tagasi võtta |
| `script_run` | Muutmine | Käivitab CraftScripti, Lua või Pythoni skripti nii nagu töötuba {{ui:Skript}} seda teeb: suletult, ilma failide ja võrguta. Detail ei muutu |
| `part_export` | Eksportimine | STL, 3MF, STEP või OpenUSD (.usdz, .usda, .usdc), nii nagu {{ui:Fail}} › {{ui:Ekspordi}} need kirjutab |
| `link_push` | Muutmine | Uuendab mudelit, mis on seotud teisest programmist (vt [Hoia .3dm-mudel elavana](topic:live-3dm-link)) |
| `link_status` | Lugemine | Ütleb, kas seotud mudel on veel alles ja millal see viimati uuenes |
| `part_save` | Salvestamine | PartCrafti oma {{ui:Salvesta}} |
| `illustrate_export` | Eksportimine | Juhend töötoast {{ui:Illustreeri}} PDF-ina või SVG joonistena oma vaadetest, interaktiivse 3D-failina või selle juhised PDF-ina või veebilehena, nii nagu töötoa menüüd {{ui:Ekspordi}} ja {{ui:Juhised}} need kirjutavad ([Juhendid](topic:illustrate)) |

:::note
See versioon kasutab võrgusilma tuuma: mahud tulevad kolmnurkadest (natuke alla tõelise kumera tahkise) ning STEP kirjutatakse tahkudeks jaotatult, kolmnurkadega tõeliste pindade asemel.
:::

## Sina jääd juhiks

- **Iga muudatus on üks tagasivõtmise samm**, assistendi järgi märgistatud, näiteks "Assistant: set l = 45". Tagasivõtmiseks vajuta {{key:Mod+Z}}.
- **Näed, kui ühendus on loodud.** Rakendusribal olev nupp nimetab assistendi, kui see on ühendatud. Klõpsa sellel, et näha, mida see tohib teha, või et **Katkesta ühendus**.
- **Tegevus.** {{ui:Sätted}} › {{ui:PartCraft}} › {{ui:Assistendid}} › {{ui:Tegevus}} loetleb iga päringu; {{ui:Salvesta logi}} hoiab koopia.
- **Kaustad.** See loeb ja kirjutab faile ainult kaustades, mille lisasid; {{ui:Eemalda}} võtab kausta kohe tagasi.

## Ilma PartCrafti avamata

CadCraft'i failiserver assistentidele (`npx @getcadcraft/mcp`) ja käsurida `cadcraft` avavad `.partcraft.json` detailid PartCrafti enda koodi ja võrgusilma tuumaga, ilma aknata: samad lugemistööriistad, parameetrite seadmine, CraftScripti skriptid, eksportimine (sh OpenUSD) ja salvestamine. `cadcraft convert bracket.partcraft.json bracket.stl` ehitab detaili ja kirjutab selle käsurealt. Juhendid (`.partcraft-manual.json`) eksporditakse seal samuti: `illustrate_export` või `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (juhiste jaoks lisa `--instructions`).

## Kui midagi ei tööta

- **"needs the edit permission":** märgi jaotises {{ui:Assistendid}} **Muutmine** ja küsi uuesti.
- **"driven by the equation":** see arv järgib parameetrit; palu assistendil seada hoopis parameeter.
- **Muudatus oli vale:** vajuta {{key:Mod+Z}}.

## Vaata ka

- [Retseptid tehisintellekti assistentidele](common:assistants-recipes): töönäited, igaüks koos tööriistadega, mida see kutsub.
