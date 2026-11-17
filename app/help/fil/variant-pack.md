---
title: Gumawa ng variant pack mula sa iyong mga configuration
summary: Itayo ang bawat configuration ng isang part, o ilan lang na pinili, nang sabay bilang STEP, IFC, DWG at preview ng bawat isa, kasama ang talaan ng kanilang mga parameter at ang part bilang isang library item na may mga variant nito.
keywords: variant pack, variants, configurations, family of parts, batch export, bawat laki, step, ifc, dwg, preview, talaan, csv, json, library, configurator, product configurator, catalog, item json
from: 9a6db99f
---

## Ang gagawin mo

Ibigay ang **bawat laki ng isang part nang sabay**: isang STEP, IFC at DWG file at isang larawan para sa bawat configuration, isang talaan na nagsasabi kung ano ang bawat isa, at isang library item na naglalagay sa lahat ng ito sa iisang pahina.

Kailangan mo muna ng part na may **configuration** (tingnan ang [Mga configuration at design table](topic:design-tables)). Ang configuration na nag-o-off ng isang feature, gaya ng plate na may at walang butas, ay nagiging sariling variant.

## Mga hakbang

1. Buksan ang part. Sa {{ui:Parameters}} tab, hanapin ang **Mga configuration**.
2. I-click ang {{ui:Variant pack…}}.
3. I-tick ang mga configuration na bubuuin (lahat ay naka-tick) at ang mga file na isusulat: STEP, IFC, DWG, isang preview, at ang library item.
4. I-click ang {{ui:Gawin ang pack}}. Ipinapakita ng status line ang bilang ng mga variant habang binubuo ang mga ito; hindi nagbabago ang part mo.
5. Isang zip ang dina-download: `<part> variants.zip`.

## Ano ang nasa zip

| File | Ano ito |
|---|---|
| `<name>.step` | Ang configuration bilang STEP solid. |
| `<name>.ifc` | IFC4, isang element na may built body at ang mga parameter ng part bilang property; ang value ay sa sarili ng configuration na iyon. |
| `<name>.dwg` | Ang Front, Itaas, Kanan at isometric view bilang drawing sheet sa buong laki. |
| `<name>.svg` | Isang isometric line picture nito. |
| `variants.csv`, `variants.json` | Ang talaan ng parameter: ang id, pangalan at value ng bawat parameter ng bawat variant, ang mga feature na pinapatay nito, ang mga file nito, ang volume at laki nito. |
| `<part>.item.json` | Ang part bilang isang library item na may mga variant nito (tingnan sa ibaba). |
| `README.txt` | Ano ang ginawa, ang mga tala sa ibaba, at anumang hindi nabuo. |

Pinapangalanan ang mga file ayon sa configuration. Ang configuration na hindi mabuo (feature na hindi magawa sa mga value na iyon) ay hindi isinasama sa mga file at talaan; nakalista ito sa README at sa mensaheng lumalabas pagkatapos i-save ang zip. Isinusulat pa rin ang iba.

## Dapat malaman

- **STEP** ay eksakto kapag naka-on ang exact kernel sa build mo. Kung wala ito, faceted (flat triangles) ang STEP, at sinasabi ito ng README.
- **DWG** ay drawing sheet, hindi 3D model. Galing sa mesh ang mga linya nito, kaya maraming maikling linya ang isang curved edge.
- **Ang library item** ay may isang body at isang footprint bawat variant, sa sarili nitong axes ng library: Z pataas, ang harap ay patungong −Y, at ang insertion point ay nasa gitna ng likod sa ilalim. Ang plan ay ang bounding rectangle ng bawat variant. Hanggang 8 MB lang ang isang item, kaya nagiging kahon ng sarili nitong laki ang napakabigat na variant, at sinasabi ng README kung ilan ito.
- Ang aktibong configuration ng part ang default variant ng item.
- Hindi nagtatakda ng mga port (connection point para sa tubo at duct) mula sa PartCraft.

## Ilagay ang mga variant sa isang library page

I-upload ang `<part>.item.json` sa **Library › I-upload** sa site. Piliin ang category, license at credit line mo, at magiging Library item ito na may mga variant nito. Sa BimCraft, kapag inilagay ito, nagtatanong ito kung aling variant, at inaalok ng Palitan ang iba. Ang pahina kung saan pipili ang mga bisita ng option, makikita ang 3D at made-download ang variant ay **staff preview** sa ngayon: hindi pa ito bukas sa publiko.

## Mula sa command line

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

Pinapangalanan ng `--only` ang mga configuration; ang `--formats` ay alinman sa `step`, `ifc`, `dwg`, `preview`; iniiwan ng `--no-item` ang library item. Sumusulat ito ng folder, zip o pareho, at lumalabas na may exit 1 kapag hindi nabuo ang isang variant. Tingnan ang [Mga script at command line](topic:scripts-and-cli).
