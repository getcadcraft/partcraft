---
title: Gamitin ang PartCraft kasama ang AI assistant
summary: Hayaang gumana ang sarili mong AI assistant o script kasama ang bukas na part: basahin ang mga feature, parameter at mass nito, baguhin ang parameter at i-rebuild, magpatakbo ng script, mag-export at mag-save. Naka-off hanggang i-on mo ito.
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, parameter, mass properties, stl, step, 3mf, pahintulot, idiskonekta, aktibidad, folder
from: e66d3470
---

## Ano ang matututunan mo

Paano payagan ang AI assistant (o script na isinulat mo) na tingnan ang part na bukas mo, baguhin ang mga parameter nito, magpatakbo ng script at i-export ito, at paano mo pinipili kung ano ang maaari nitong galawin.

Walang **sariling AI** ang PartCraft at wala itong ipinapadala kahit saan. Ikaw ang magdadala ng assistant: anumang programa na nagsasalita ng Model Context Protocol (MCP). Ibinibigay lang ng PartCraft ang mga tool, at ikaw ang pumipili kung alin.

## I-on ito

1. Buksan ang {{ui:Mga setting}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:PartCraft}}.
2. Sa ilalim ng {{ui:Mga Assistant}}, lagyan ng tick ang **Payagan ang mga AI assistant at script na gamitin ang PartCraft**. Naka-off ito hanggang gawin mo iyon.
3. Piliin kung ano ang maaari nitong gawin. **Basahin** ang naka-tick sa simula; i-tick ang iba kapag kailangan lang.
4. Para payagan itong mag-export at mag-save sa isang folder, piliin ang {{ui:Magdagdag ng folder…}} sa ilalim ng **Mga folder na maaari nitong gamitin** at piliin ang folder sa dialog ng Studio.

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa computer mo: ipinapakita ng Studio ang address at token na ipe-paste sa assistant. Hindi makakapagbukas ng koneksyon para sa assistant ang browser tab.

## Ano ang maaaring hilingin ng assistant

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `part_describe`, `features_list` | Basahin | Ang mga feature nang sunod-sunod, kasama kung ano ang nabuo at kung ano ang pumalya, ang materyal, ang volume at sukat ng solid |
| `params_list` | Basahin | Ang mga parameter at bawat numerong maaaring kontrolin ng equation, kasama ang kanilang value |
| `mass_properties` | Basahin | Volume, area, center of mass, inertia tungkol dito; ang mass kapag may materyal ang part |
| `param_set` | I-edit | Nagtatakda ng parameter o numero ng isang feature at nire-rebuild. Isang hakbang na maaari mong i-undo |
| `script_run` | I-edit | Nagpapatakbo ng CraftScript, Lua o Python script gaya ng ginagawa ng {{ui:Script}} workspace: nakasara, walang file at walang network. Hindi nagbabago ang part |
| `part_export` | Export | STL, 3MF, STEP o OpenUSD (.usdz, .usda, .usdc), gaya ng isinusulat ng {{ui:File}} › {{ui:Export}} |
| `link_push` | I-edit | Ina-update ang modelong naka-link mula sa ibang programa (tingnan ang [Panatilihing live ang modelo ng .3dm](topic:live-3dm-link)) |
| `link_status` | Basahin | Sinasabi kung nandiyan pa ang naka-link na modelo at kailan ito huling na-update |
| `part_save` | I-save | Ang sariling {{ui:I-save}} ng PartCraft |
| `illustrate_export` | Export | Isang manual mula sa {{ui:Illustrate}} workspace bilang PDF o SVG line art ng mga view nito, bilang interactive na 3D file, o ang mga instruction nito bilang PDF o web page, gaya ng isinusulat ng {{ui:Export}} at {{ui:Mga instruction}} menu ng workspace ([Mga manual](topic:illustrate)) |

:::note
Gumagamit ang build na ito ng mesh kernel: nagmumula ang volume sa mga triangle (bahagyang mas maliit kaysa sa totoong curved solid), at isinusulat ang STEP bilang faceted, na may mga triangle sa halip na exact surface.
:::

## Ikaw pa rin ang may kontrol

- **Bawat pagbabago ay isang undo step**, may label para sa assistant, halimbawa "Assistant: set l = 45". Pindutin ang {{key:Mod+Z}} para bawiin ito.
- **Alam mo kapag may nakakonekta.** Ipinapakita ng button sa app bar ang pangalan ng assistant habang nakakonekta ito. I-click ito para makita kung ano ang maaari nitong gawin, o para **Idiskonekta** ito.
- **Aktibidad.** {{ui:Mga setting}} › {{ui:PartCraft}} › {{ui:Mga Assistant}} › {{ui:Aktibidad}} ay naglilista ng bawat tawag; pinapanatili ng {{ui:I-save ang log}} ang kopya nito.
- **Mga folder.** Bumabasa at sumusulat lang ito ng file sa mga folder na idinagdag mo; inaalis ng {{ui:Alisin}} ang folder agad.

## Nang hindi binubuksan ang PartCraft

Ang file server ng CadCraft para sa mga assistant (`npx @getcadcraft/mcp`) at ang `cadcraft` command line ay nagbubukas ng mga part na `.partcraft.json` gamit ang sariling code ng PartCraft at mesh kernel nito, nang walang window: ang parehong mga tool sa pagbasa, pagtatakda ng parameter, CraftScript script, export (kasama ang OpenUSD) at pag-save. Ang `cadcraft convert bracket.partcraft.json bracket.stl` ay bumubuo ng part at isinusulat ito mula sa command line. Nag-e-export din doon ang mga manual (`.partcraft-manual.json`): `illustrate_export`, o `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (idagdag ang `--instructions` para sa mga instruction).

## Kung may hindi gumana

- **"needs the edit permission":** i-tick ang **I-edit** sa ilalim ng {{ui:Mga Assistant}}, pagkatapos itanong ulit.
- **"driven by the equation":** ang numerong iyon ay sumusunod sa isang parameter; hilingin sa assistant na itakda ang parameter sa halip.
- **Mali ang pagbabago nito:** pindutin ang {{key:Mod+Z}}.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang may kasamang tool na tinatawag ng bawat isa.
