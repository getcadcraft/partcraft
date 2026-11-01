---
title: Simulan ang PartCraft
summary: Ano ang ginagawa ng PartCraft ngayon, ano ang kailangan ng browser mo, at isang unang piyesa sa loob ng sampung minuto, mula sketch hanggang sa na-save na file.
keywords: simula, unang takbo, mabilis na simula, panimula, tutorial, unang piyesa, plate, parametric, part modeler
from: 5f0a668d
---

Ang PartCraft ang parametric na app para sa piyesa at assembly ng CadCraft family. Gumuguhit ka ng 2D sketch, itinatali ito gamit ang relation at dimension, ginagawang solid gamit ang mga feature gaya ng extrude, revolve at hole, at puwede mong palitan ang alinmang numero sa susunod: ire-rebuild ang piyesa mula sa history nito. Pagkatapos, napupunta ang mga piyesa sa mga assembly, kung saan inilalagay ng joint ang mga ito at puwede mong suriin ang galaw.

Ano ang kaya ng build na ito:

| Gawain | Ang makukuha mo |
|---|---|
| Sketch | Linya, rectangle, bilog, arko, punto at centerline, may relation at dimension, at live na estado: under, fully o over defined |
| Solid feature | Extrude, cut, revolve, revolved cut, simple at counterbored na hole, linear at circular na pattern, mirror, fillet at chamfer sa mga tuwid na edge sa pagitan ng flat face, at shell at draft sa flat face. Hindi pa nagagawa sa bersyong ito ang sweep, loft at iba pang feature na nangangailangan ng exact kernel: tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet) |
| History | I-edit ang mga numero ng alinmang feature, i-suppress, i-roll back, ayusin ang pagkakasunod-sunod at burahin, may undo |
| Assembly | Mga piyesang pinagdugtong ng rigid, revolute at slider na joint, clash check at motion check |
| Drawing | Isang A3 sheet na may tatlong view, isometric, section, detail view, kabuuang sukat, datum, feature control frame at surface finish symbol, na ini-export bilang PDF |
| File | Sariling part at assembly file; STL, 3MF, faceted STEP, DXF at PDF na palabas |

Lahat ay tumatakbo sa browser mo, sa computer mo. **Walang ina-upload.** Tingnan ang [Mga file: buksan, i-save at i-export](topic:files) para sa kung saan napupunta ang mga file.

## Ano ang kailangan mo

- Kasalukuyang Chrome, Edge, Firefox o Safari na naka-on ang **WebGL** (3D graphics) at **WebAssembly**. Parehong naka-on bilang default. Ginagawa ang solid geometry ng isang WebAssembly mesh kernel na kasabay na naglo-load ng app: tingnan ang [Ang mesh kernel](topic:solid-kernels).
- Pinakamadali ang mouse. Gumagana ang trackpad, at gumagana ang touch screen para sa pagtingin at simpleng sketching: tingnan ang [Trackpad, touch at maliliit na screen](topic:trackpad-and-touch).
- Ang screen na hindi bababa sa 1280 pixels ang lapad ay nagpapakita ng buong toolbar sa iisang hanay. Ang mas makitid na window ay nagpa-scroll ng toolbar pagilid; sa phone, bumubukas ang mga panel bilang sheet mula sa bar sa ibaba.

Karagdagang impormasyon tungkol sa browser: [Mga browser at computer](common:browsers).

:::note
Tumatakbo ang PartCraft sa browser, at sa desktop sa loob ng CadCraft Studio. Hindi pa available ang cloud saving: binubuksan mo ang mga piyesa mula sa computer mo at sine-save pabalik dito bilang mga file.
:::

## Buksan ang PartCraft

1. Buksan ang PartCraft.
2. Maghintay habang nakasulat sa screen ang "Loading the solid kernel…". Medyo matagal ito sa unang pagkakataon.
3. Makikita mo ang walang laman na 3D view na may tatlong base plane, ang history sa kaliwa ("Part1", pagkatapos Front plane, Top plane, Right plane) at isang kahon sa view na may header na "Start a part".
4. Ang chip malapit sa dulong kanan ng status bar ay nagsasabing "Mesh kernel": binubuo ng PartCraft ang bawat piyesa gamit ang mesh kernel sa bersyong ito, kaya flat facet ang mga bilog na face. Puwede ka nang magsimulang mag-model.

Kung nakasulat sa view na hindi kayang magpakita ng 3D ang browser, o hindi na-load ang kernel, tingnan ang [Troubleshooting](topic:troubleshooting#the-app-does-not-start).

## Ang unang piyesa mo: plate na may butas

Gagawa ka ng plate na 60 × 40 mm, kapal na 10 mm, na may 6 mm na butas na tumatagos dito. Millimeters ang mga unit.

### I-sketch ang balangkas

1. I-click ang **Front plane** sa history sa kaliwa. Naka-highlight ang plane sa view.
2. Piliin ang {{ui:Sketch}} sa toolbar, o pindutin ang {{key:S}}. Iikot ang view para diretsong tingnan ang plane, at aktibo ang Line tool.
3. Pindutin ang {{key:R}} para sa Rectangle tool.
4. Ilipat ang pointer sa origin (ang maliit na pulang bilog na may krus). Lalabas ang maliit na parisukat na nagpapakitang nag-snap ito. I-click.
5. Ilipat pataas at pakanan at i-click ulit. Mayroon ka nang rectangle. Asul ang mga linya nito: ibig sabihin ng asul, puwede pa silang gumalaw.

### Bigyan ito ng sukat

1. Pindutin ang {{key:D}} para sa Dimension tool.
2. I-click ang itaas na linya, pagkatapos i-click ng kaunti sa itaas nito. Magbubukas ang number box na may kasalukuyang haba.
3. I-type ang `60` at pindutin ang {{key:Enter}}. Magiging 60 mm ang lapad ng rectangle.
4. I-click ang kaliwang linya, pagkatapos i-click ng kaunti sa kaliwa nito. I-type ang `40` at pindutin ang {{key:Enter}}.

Ang chip sa itaas-kaliwa ng view ay nagsasabi na ngayong **Fully defined** at nagiging tinta ang mga linya (itim sa Paper theme, maliwanag sa Model theme). Naayos na ang bawat punto at sukat.

:::tip
Kung nagsimula ka ng rectangle malayo sa origin, nagsasabi pa rin ang chip ng "Under defined · 2 degrees of freedom". Pindutin ang {{key:S}} para sa Select, i-click ang isang sulok, {{key:Shift}}+click sa origin, pagkatapos piliin ang {{ui:• Coincident}} sa kanang panel.
:::

### I-extrude ito

1. Piliin ang {{ui:Lumabas}} sa toolbar, o pindutin ang {{key:Esc}} hanggang magsara ang sketch (karaniwang dalawang beses).
2. Piliin ang {{ui:Extrude}}. Lilitaw ang 10 mm na solid. Idinadagdag ang "Extrude1" sa history, at naka-indent sa ilalim nito ang "Sketch1".
3. Ipinapakita ng kanang panel ang mga setting ng extrude. Para palitan ang kapal, mag-type ng bagong numero sa **Depth (mm)** at pindutin ang {{key:Enter}} o {{key:Tab}}. Agad na nire-rebuild ang piyesa.

### Idagdag ang butas

1. I-click ang malaking flat na face sa harap ng plate (ang dulo ng extrusion). Naka-highlight ang buong face at nakasulat sa kanang panel ang **Face**.
2. Piliin ang {{ui:Sketch sa face na ito}} sa kanang panel.
3. Pindutin ang {{key:P}} para sa Point tool at i-click malapit sa gitna ng face.
4. Piliin ang {{ui:Lumabas}}.
5. Piliin ang {{ui:Hole}}. Tatagos sa plate ang 6 mm na butas. Palitan ang **Diameter (mm)** sa kanang panel kung gusto mo.

Ang kahong **Part** sa ibabang-kaliwa ay nagpapakita na ngayon ng volume, surface area, sukat (60 × 40 × 10 mm) at "Through holes: 1".

### I-save ito

1. Pindutin ang {{key:Mod+S}} o piliin ang {{ui:I-save}}.
2. Dina-download ng browser mo ang `Part1.partcraft.json` sa downloads folder nito. Dala ng file ang buong history: buksan ulit ito gamit ang {{ui:Buksan}} para ituloy ang pag-edit.

Para palitan muna ang pangalan ng piyesa, i-click ang bakanteng espasyo sa view para walang napiling bagay at mag-type ng bagong **Name** sa kanang panel.

## Saan pupunta pagkatapos

- Ipinapaliwanag nang maayos ng [Gumuhit ng unang sketch](topic:sketch-basics) at [Ganap na tukuyin ang sketch](topic:relations-dimensions) ang sketcher.
- Ipinapakita ng [Baguhin ang piyesa sa pamamagitan ng history nito](topic:edit-history) kung paano i-edit ang ginawa mo.
- Tinatapos ng [Bilugin, bevel at gawing guwang](topic:fillet-chamfer-shell) at [Gumawa ng drawing](topic:drawing-pdf) ang piyesa. Inilalista ng [Ano ang hindi pa nagagawa](topic:not-built-yet) ang mga hindi kayang gawin ng bersyong ito, gaya ng sweep at loft.
- Inilalista ng [Galing sa ibang parametric modeler](topic:coming-from) ang mga gawi na iba ang takbo dito.
- Ang [Mga key at mouse](topic:keyboard) ang buong listahan ng mga shortcut.
- [Paggamit ng help na ito](common:help).
