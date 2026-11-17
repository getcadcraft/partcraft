---
title: Mga configuration at design table
summary: Itago ang ilang laki at bersyon ng isang part bilang mga pinangalanang configuration na naka-save sa part file, na may mga feature na naka-on o naka-off sa bawat isa, lumipat sa pagitan ng mga ito sa isang click, ipasok o ilabas bilang CSV design table, o buuin lahat mula sa command line.
keywords: design table, configurations, configuration, sizes, pamilya ng part, csv, spreadsheet, variants, table driven, part family, suppress, suppressed, i-off ang feature, options, with or without, configurator
from: 17249afb
---

Ang **configuration** ay isang laki ng part: isang pinangalanang set ng mga value para sa mga parameter nito. Itinatago ng part ang mga configuration nito sa sarili nitong file, kaya kasama ang mga ito saan man dalhin ang part. Ang **design table** ay kapareho ng isang CSV file, isang row bawat configuration.

Ang mga configuration ay nagtatakda ng **parameter**, kaya idagdag muna ang mga iyon (tingnan ang [Drive a part with parameters](topic:parameters)). Iniimbak ng configuration ang mga parameter na plain number; ang mga parameter na kinukwenta mula sa iba (gaya ng `area = w * d`) ay sumusunod nang kusa.

## I-save ang configuration

1. Sa {{ui:Parameters}} tab, itakda ang mga parameter para sa isang laki ng part.
2. Sa ilalim ng **Configurations**, mag-type ng pangalan (halimbawa `Large`) at pindutin ang {{ui:Save current values}} o {{key:Enter}}.

Mamarkahang **active** ang bagong configuration. Kapag binago mo ang isang parameter pagkatapos nito, sasabihin nitong **active, changed since**, para malaman mong hindi na tugma ang part dito.

## Lumipat, i-update, palitan ang pangalan, burahin

- Itinatakda ng {{ui:Apply}} ang mga parameter sa mga value ng configuration na iyon at muling binubuo ang part.
- Sine-save ng {{ui:Update}} ang kasalukuyang mga value sa configuration na iyon.
- Para palitan ang pangalan ng isa, i-type ang bagong pangalan sa box nito at pindutin ang {{key:Enter}}.
- Inaalis ng {{ui:Delete}} ang configuration. Pinapanatili ng mga parameter ang kanilang mga value.

Bawat isa rito ay isang hakbang: binabalik ito ng {{key:Mod+Z}}. Kung papalitan mo ang pangalan ng isang parameter, susunod ang bawat configuration sa bagong pangalan; kung buburahin mo ang isa, mawawala ito sa kanila.

## I-on at i-off ang mga feature sa isang configuration

Itinatago rin ng configuration kung aling mga feature ang naka-off, kaya maaaring magkaroon ang isang part ng mga bersyong **may** at **wala** ng isang bagay: mga mounting hole, chamfer, boss.

1. I-off ang feature: i-click ito sa history, saka ang {{ui:Suppress}} sa {{ui:Properties}}.
2. I-save ang configuration gaya ng dati, halimbawa `No holes`. Nakalista sa row nito kung ano ang pinapatay nito.
3. I-on ulit ang feature ({{ui:Unsuppress}}) at mag-save ng isa pang configuration, halimbawa `With holes`.

Kapag may anumang configuration na nag-o-off ng feature, ang pag-apply ng configuration ay nag-o-off ng mga feature nito at **nag-o-on ng bawat ibang feature**, kasama ang mga value ng parameter nito, sa isang hakbang. Ang configuration na na-save bago pa na-off ang mga feature sa alinman sa mga ito ay binabasa bilang "lahat naka-on". Sine-save ng {{ui:Update}} ang mga feature gaya ng mga ito ngayon, kasama ng mga value.

Ang part na may configuration na nag-o-off ng feature ay sine-save bilang mas bagong bersyon ng file: sasabihin ng mas lumang PartCraft na galing ito sa mas bagong bersyon sa halip na buksan ito nang wala ang mga iyon.

:::note
Ang CSV design table ay naglalaman lamang ng mga value ng parameter. Ang pag-import ng table sa ibabaw ng configuration ay nagbabago sa mga value nito at pinapanatili ang mga feature na pinapatay nito; ang `--table` ng command line ay mga value lamang ang binubuo.
:::

Naka-save ang part file kasama ng mga configuration at kung alin ang active. Bumubukas ang part gamit ang mga value na na-save kasama nito.

## Magdala ng design table papasok o palabas

Ang design table ay isang CSV file na may column para sa bawat parameter at row para sa bawat configuration:

```
name,width,thick,bolt
small,100,6,6.6
medium,140,8,8.5
large,200,12,13
```

Ang unang column ay maaaring tawaging `name`, `config` o `configuration`; bawat ibang column ay dapat pangalan ng isang parameter ng part. Ang mga cell ay numero, may unit kung gusto mo (`8in`). Ang walang lamang cell ay hindi isasama ang parameter na iyon sa row.

- Idinadagdag ng {{ui:Import CSV}} ang bawat row bilang configuration. Ang row na may pangalan ng umiiral na configuration ay pumapalit dito. Isang hakbang ang pag-import.
- Isinusulat ng {{ui:Export CSV}} palabas ang mga configuration. Kapag wala pang configuration, sumusulat ito ng isang row ng kasalukuyang mga value, bilang panimula para sa spreadsheet.

Ang pangalan ng configuration na babasahin ng spreadsheet bilang formula (nagsisimula sa `=`, `+`, `-` o `@`) ay isinusulat na may nangungunang `'`.

## Lahat ng laki nang sabay

{{ui:Variant pack…}} sa ilalim ng **Configurations** ay bumubuo ng bawat configuration, o ilang piling, bilang STEP, IFC, DWG at preview sa isang zip, kasama ang table ng mga parameter nila: tingnan ang [Make a variant pack from your configurations](topic:variant-pack).

Ang command line tool ay bumubuo ng isang file bawat row ng CSV design table:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

I-export muna ang mga configuration bilang CSV, saka ipasa ang file na iyon gamit ang `--table`. Tingnan ang [Scripts and the command line](topic:scripts-and-cli). Ang part na naka-save bilang script ay nagtatago ng mga configuration nito sa isang linyang `configs json …`.
