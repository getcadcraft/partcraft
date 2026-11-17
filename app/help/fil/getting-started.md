---
title: Magsimula sa PartCraft
summary: Ano ang ginagawa ng PartCraft ngayon, ano ang kailangan ng browser mo, at unang piyesa sa loob ng sampung minuto, mula sketch hanggang sa naka-save na file.
keywords: magsimula, unang pagbubukas, mabilisang simula, panimula, tutorial, unang piyesa, plate, parametric, part modeler
from: 7d43283f
---

Ang PartCraft ang parametric part at assembly app ng pamilya ng CadCraft. Gumuguhit ka ng 2D sketch, itinatali ito gamit ang mga relation at dimension, ginagawang solid gamit ang mga feature gaya ng extrude, revolve at hole, at puwede mong baguhin ang anumang numero pagkatapos: muling bumubuo ang piyesa mula sa history nito. Pagkatapos, napupunta ang mga piyesa sa mga assembly, kung saan itinatakda ng mga joint ang mga ito at tinitingnan mo ang galaw.

Ang kayang gawin ng bersyong ito:

| Gawain | Ang makukuha mo |
|---|---|
| Sketches | Mga linya, rectangle, bilog, arko, punto at centerline, kasama ang relation at dimension, at live na estado: under, fully o over defined |
| Solid features | Extrude, cut, revolve, revolved cut, simple at counterbored hole, linear at circular pattern, mirror, fillet at chamfer sa tuwid na gilid sa pagitan ng patag na face, at shell at draft sa patag na face. Ang sweep, loft at iba pang feature na nangangailangan ng exact kernel ay hindi pa nagagawa sa bersyong ito: tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet) |
| History | I-edit ang numero ng anumang feature, i-suppress, i-roll back, i-reorder at burahin, kasama ang undo |
| Assemblies | Mga piyesang pinagdugtong ng rigid, revolute at slider joint, clash check at motion check |
| Drawings | Isang A3 sheet na may tatlong view, isang isometric, isang section, isang detail view, overall sizes, datums, feature control frame at surface finish symbol, na ini-export bilang PDF |
| Files | Sarili nitong part at assembly file; STL, 3MF, exact STEP, DXF at PDF ang output |

Tumatakbo ang lahat sa browser mo, sa computer mo. **Walang ina-upload.** Tingnan ang [Mga file: buksan, i-save at i-export](topic:files) para malaman kung saan napupunta ang mga file.

## Ano ang kailangan mo

- Kasalukuyang Chrome, Edge, Firefox o Safari na naka-**WebGL** (3D graphics) at **WebAssembly** na nakabukas. Parehong nakabukas bilang default. Ginagawa ang solid geometry ng WebAssembly mesh kernel na naglo-load kasama ng app: tingnan ang [The mesh kernel](topic:solid-kernels).
- Pinakamadali ang mouse. Gumagana ang trackpad, at gumagana ang touch screen para sa pagtingin at simpleng sketching: tingnan ang [Trackpad, touch and small screens](topic:trackpad-and-touch).
- Ang screen na hindi bababa sa 1280 pixels ang lapad ay nagpapakita ng buong toolbar sa iisang hilera. Ang mas makitid na window ay nag-s-scroll sa toolbar sa gilid; sa telepono, bumubukas ang mga panel bilang sheet mula sa bar sa ibaba.

Higit pa tungkol sa mga browser: [Browsers and computers](common:browsers).

:::note
Tumatakbo ang PartCraft sa browser, at sa desktop sa loob ng CadCraft Studio. Hindi pa available ang cloud saving: binubuksan mo ang mga piyesa mula sa computer mo at isinasave pabalik dito bilang mga file.
:::

## Buksan ang PartCraft

1. Buksan ang PartCraft.
2. Maghintay habang sinasabi ng screen na "Ina-load ang solid kernel…". Tumatagal ito sandali sa unang pagkakataon.
3. Makikita mo ang walang laman na 3D view na may tatlong base plane, ang history sa kaliwa ("Part1", pagkatapos Front plane, Top plane, Right plane) at isang box sa view na may headline na "Simulan ang isang piyesa".
4. Ang chip malapit sa kanang dulo ng status bar ay nagsasabing "Mesh kernel": bumubuo ang PartCraft ng bawat piyesa gamit ang mesh kernel sa bersyong ito, kaya ang mga bilugang face ay patag na facet. Maaari ka nang magsimulang mag-model.

Kung sinasabi ng view na hindi kayang ipakita ng browser ang 3D, o hindi nag-load ang kernel, tingnan ang [Troubleshooting](topic:troubleshooting#the-app-does-not-start).

## Ang unang piyesa mo: isang plate na may butas

Gagawa ka ng 60 × 40 mm na plate, 10 mm ang kapal, na may 6 mm na butas sa kabuuan nito. Millimeter ang mga unit.

### I-sketch ang balangkas

1. I-click ang **Front plane** sa history sa kaliwa. Naka-highlight ang plane sa view.
2. Piliin ang {{ui:Sketch}} sa toolbar, o pindutin ang {{key:S}}. Umiikot ang view para tumingin nang tuwid sa plane, at aktibo ang Line tool.
3. Pindutin ang {{key:R}} para sa Rectangle tool.
4. Ilipat ang pointer sa origin (ang maliit na pulang bilog na may krus). Lalabas ang maliit na parisukat na nagpapakitang nagsnap ito. I-click.
5. Ilipat pataas at pakanan at i-click muli. Mayroon ka nang rectangle. Asul ang mga linya nito: ibig sabihin ng asul ay maaari pa silang gumalaw.

### Bigyan ito ng sukat

1. Pindutin ang {{key:D}} para sa Dimension tool.
2. I-click ang itaas na linya, pagkatapos i-click nang kaunti sa itaas nito. Bumubukas ang isang kahon ng numero na may kasalukuyang haba.
3. I-type ang `60` at pindutin ang {{key:Enter}}. Nagiging 60 mm ang lapad ng rectangle.
4. I-click ang kaliwang linya, pagkatapos i-click nang kaunti sa kaliwa nito. I-type ang `40` at pindutin ang {{key:Enter}}.

Ang chip sa kaliwang itaas ng view ay nagsasabing **Ganap na tinukoy** at nagiging tinta ang mga linya (itim sa Paper theme, maliwanag sa Model theme). Naayos na ang bawat punto at sukat.

:::tip
Kung nagsimula ka ng rectangle na malayo sa origin, nagsasabi pa rin ang chip ng "Hindi pa ganap na tinukoy · 2 degrees of freedom". Pindutin ang {{key:S}} para sa Select, i-click ang isang sulok, {{key:Shift}}+click ang origin, pagkatapos piliin ang {{ui:• Coincident}} sa kanang panel.
:::

### I-extrude ito

1. Piliin ang {{ui:Exit}} sa toolbar, o pindutin ang {{key:Esc}} hanggang magsara ang sketch (karaniwan dalawang beses).
2. Piliin ang {{ui:Extrude}}. Lilitaw ang 10 mm na solid. Idinadagdag ang "Extrude1" sa history, na may "Sketch1" na naka-indent sa ilalim nito.
3. Ipinapakita ng kanang panel ang mga setting ng extrude. Para baguhin ang kapal, mag-type ng bagong numero sa **Depth (mm)** at pindutin ang {{key:Enter}} o {{key:Tab}}. Agad na bumubuo muli ang piyesa.

### Idagdag ang butas

1. I-click ang malaking patag na face sa harap ng plate (ang dulo ng extrusion). Naka-highlight ang buong face at sinasabi ng kanang panel na **Face**.
2. Piliin ang {{ui:Sketch on this face}} sa kanang panel.
3. Pindutin ang {{key:P}} para sa Point tool at i-click malapit sa gitna ng face.
4. Piliin ang {{ui:Exit}}.
5. Piliin ang {{ui:Hole}}. May 6 mm na butas na dumadaan sa plate. Baguhin ang **Diameter (mm)** sa kanang panel kung gusto mo.

Ang kahon na **Part** sa kaliwang ibaba ay nagpapakita na ngayon ng volume, surface area, sukat (60 × 40 × 10 mm) at "Through holes: 1".

### I-save ito

1. Pindutin ang {{key:Mod+S}} o piliin ang {{ui:Save}}.
2. Dina-download ng browser mo ang `Part1.partcraft.json` sa folder ng downloads nito. Naglalaman ang file ng buong history: buksan itong muli gamit ang {{ui:Open}} para ipagpatuloy ang pag-edit.

Para palitan muna ang pangalan ng piyesa, i-click ang walang laman na espasyo sa view para walang napili, at mag-type ng bagong **Name** sa kanang panel.

## Saan pupunta pagkatapos

- [Gumuhit ng unang sketch mo](topic:sketch-basics) at [Ganap na tukuyin ang sketch](topic:relations-dimensions) ay nagpapaliwanag nang maayos sa sketcher.
- [Baguhin ang piyesa sa pamamagitan ng history nito](topic:edit-history) ay nagpapakita kung paano i-edit ang ginawa mo.
- [Bilugan, i-bevel at gawing guwang](topic:fillet-chamfer-shell) at [Gumawa ng drawing](topic:drawing-pdf) ang tumatapos sa piyesa. Inililista ng [Ano ang hindi pa nagagawa](topic:not-built-yet) ang hindi ginagawa ng bersyong ito, gaya ng sweep at loft.
- [Galing sa ibang parametric modeler](topic:coming-from) ay naglilista ng mga ugaling iba ang gana rito.
- [Mga key at mouse](topic:keyboard) ang buong listahan ng mga shortcut.
- [Paggamit ng help na ito](common:help).
