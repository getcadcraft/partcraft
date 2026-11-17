---
title: Lietot PartCraft ar AI asistentu
summary: Ļaujiet savam AI asistentam vai skriptam strādāt ar atvērto detaļu: lasīt tās elementus, parametrus un masu, mainīt parametru un pārbūvēt, palaist skriptu, eksportēt un saglabāt. Ir izslēgts, līdz to ieslēdzat.
keywords: ai, asistents, aģents, mcp, modeļa konteksta protokols, skripts, automatizācija, parametri, masas īpašības, stl, step, 3mf, atļaujas, atvienot, aktivitāte, mapes
from: e66d3470
---

## Ko jūs uzzināsiet

Kā ļaut AI asistentam (vai skriptam, ko esat uzrakstījis) apskatīt atvērto detaļu, mainīt tās parametrus, palaist skriptu un eksportēt to, un kā jūs nosakāt, ko tas drīkst mainīt.

PartCraft **nav savs AI** un nekur neko nesūta. Asistentu nodrošināsiet jūs: jebkura programma, kas atbalsta Modeļa konteksta protokolu (MCP). PartCraft tikai dod tam rīkus, un jūs izvēlaties, kurus.

## Ieslēgt

1. Atveriet {{ui:Iestatījumi}} (zobrats lietotnes joslā vai {{key:Mod+,}}) un dodieties uz cilni {{ui:PartCraft}}.
2. Sadaļā {{ui:Asistenti}} atzīmējiet **Ļaut AI asistentiem un skriptiem izmantot PartCraft**. Līdz tam tas ir izslēgts.
3. Izvēlieties, ko tas drīkst darīt. **Lasīt** sākumā ir atzīmēts; citus atzīmējiet tikai tad, kad tie ir nepieciešami.
4. Lai ļautu tam eksportēt un saglabāt mapē, sadaļā **Mapes, ko tas drīkst izmantot** izvēlieties {{ui:Pievienot mapi…}} un izvēlieties mapi Studio dialogā.

Asistenti savienojas caur **CadCraft Studio** jūsu datorā: Studio parāda adresi un marķieri, ko ielīmēt asistentā. Pārlūkprogrammas cilne nevar atvērt savienojumu asistentam.

## Ko asistents var pieprasīt

| Rīks | Atļauja | Ko tas dara |
|---|---|---|
| `part_describe`, `features_list` | Lasīt | Elementi secībā ar to, kas izveidots un kas neizdevās, materiāls, cietā ķermeņa tilpums un izmērs |
| `params_list` | Lasīt | Parametri un katrs skaitlis, ko var vadīt vienādojums, ar to vērtībām |
| `mass_properties` | Lasīt | Tilpums, laukums, masas centrs, inerce ap to; masa, ja detaļai ir materiāls |
| `param_set` | Rediģēt | Iestata parametru vai elementa skaitli un pārbūvē. Viens solis, ko var atsaukt |
| `script_run` | Rediģēt | Palaiž CraftScript, Lua vai Python skriptu tāpat kā darba vide {{ui:Skripts}}: izolēts, bez failiem un tīkla. Detaļa nemainās |
| `part_export` | Eksportēt | STL, 3MF, STEP vai OpenUSD (.usdz, .usda, .usdc), tāpat kā {{ui:Fails}} › {{ui:Eksportēt}} tos ieraksta |
| `link_push` | Rediģēt | Atjaunina modeli, kas saistīts no citas programmas (skatīt [Saglabāt .3dm modeli sinhronizētu](topic:live-3dm-link)) |
| `link_status` | Lasīt | Norāda, vai saistītais modelis joprojām ir un kad tas pēdējo reizi atjaunināts |
| `part_save` | Saglabāt | PartCraft pašu {{ui:Saglabāt}} |
| `illustrate_export` | Eksportēt | Rokasgrāmatu no darba vides {{ui:Illustrate}} kā PDF vai SVG līnijzīmējumu tās skatiem, kā interaktīvo 3D failu vai tās instrukcijas kā PDF vai tīmekļa lapu, tāpat kā darba vides izvēlnes {{ui:Eksportēt}} un {{ui:Instrukcijas}} tos ieraksta ([Rokasgrāmatas](topic:illustrate)) |

:::note
Šī versija izmanto tīkla kodolu: tilpumi nāk no trijstūriem (nedaudz mazāki par patiesu izliektu cietu ķermeni), un STEP tiek ierakstīts facetēts, ar trijstūriem, nevis precīzām virsmām.
:::

## Jūs paliekat vadībā

- **Katra izmaiņa ir viens atsaukšanas solis**, atzīmēts asistentam, piemēram, "Asistents: iestatīja l = 45". Nospiediet {{key:Mod+Z}}, lai to atsauktu.
- **Jūs zināt, kad tas ir pievienots.** Poga lietotnes joslā parāda asistenta nosaukumu, kamēr tas ir pievienots. Noklikšķiniet uz tās, lai redzētu, ko tas drīkst, vai lai to **atvienotu**.
- **Aktivitāte.** {{ui:Iestatījumi}} › {{ui:PartCraft}} › {{ui:Asistenti}} › {{ui:Aktivitāte}} uzskaita katru izsaukumu; {{ui:Saglabāt žurnālu}} saglabā kopiju.
- **Mapes.** Tas lasa un raksta failus tikai pievienotajās mapēs; {{ui:Noņemt}} tūlīt atņem mapi.

## Bez PartCraft atvēršanas

CadCraft failu serveris asistentiem (`npx @getcadcraft/mcp`) un komandrindas rīks `cadcraft` atver `.partcraft.json` detaļas ar PartCraft paša kodu un tīkla kodolu, bez loga: tie paši lasīšanas rīki, parametru iestatīšana, CraftScript skripti, eksporti (arī OpenUSD) un saglabāšana. `cadcraft convert bracket.partcraft.json bracket.stl` izveido detaļu un ieraksta to no komandrindas. Rokasgrāmatas (`.partcraft-manual.json`) arī tur eksportējas: `illustrate_export` vai `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (pievienojiet `--instructions` instrukcijām).

## Ja kaut kas nedarbojas

- **"Nepieciešama rediģēšanas atļauja":** atzīmējiet **Rediģēt** sadaļā {{ui:Asistenti}} un pēc tam jautājiet vēlreiz.
- **"Vadīts ar vienādojumu":** šis skaitlis seko parametram; lūdziet asistentam iestatīt parametru.
- **Tā izmaiņa bija nepareiza:** nospiediet {{key:Mod+Z}}.

## Skatīt arī

- [Receptes AI asistentiem](common:assistants-recipes): darba piemēri, katrs ar rīkiem, ko tas izsauc.
