---
title: Mga file: buksan, i-save at i-export
summary: Ang mga part at assembly file na binubuksan at sine-save ng PartCraft, bawat format ng export at ang iniingatan nito, saan napupunta ang mga file, at ano ang nagbabago offline o sa pagitan ng mga browser.
keywords: buksan, i-save, i-export, i-download, file, partcraft.json, assembly file, stl, 3mf, step, dxf, pdf, nasaan ang mga file ko, offline, i-save bilang
from: c15c2c48
---

Gumagana ang PartCraft sa mga file sa iyong computer. Hindi ito nag-a-upload ng piyesa kailanman, at walang account o cloud storage na kasali. Hindi pa available ang cloud saving.

## Ano ang mga binubuksan ng PartCraft

| File | Extension | Paano |
|---|---|---|
| Isang PartCraft part | `.partcraft.json` | {{ui:Buksan}}, {{key:Mod+O}}, o i-drop ito sa 3D view |
| Isang PartCraft assembly | `.partcraft-asm.json` | Pareho: nakikita ng PartCraft kung anong uri ito |
| Isang STEP solid | `.step`, `.stp` | Isang solid body na binasa bilang mga triangle: [Buksan ang STEP file at magpatuloy dito](topic:import-step) |

Nabubuksan din bilang solid body ang mga STL, OBJ at 3MF mesh ([Buksan ang STL, OBJ o 3MF](topic:open-meshes)), gayundin ang mga `.3dm` file ([Buksan ang .3dm model](topic:open-3dm-files)). Hindi mabubuksan ang DXF, IGES at iba pang part file ng ibang programa (tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet)).

Mga patakaran sa pagbubukas:

- Dapat magtapos sa `.json` ang pangalan ng part o assembly file, at dapat wala pang 50 MB ang file.
- Sinusuri ang mga file bago may ipakita. Tinatanggihan ang sira o na-edit na file na may malinaw na dahilan, halimbawa: "Hindi ito PartCraft file."
- Tinatanggihan ang file na na-save ng mas bagong PartCraft: "Na-save ang file na ito ng mas bagong PartCraft (file version 3); version 2 ang kaya nitong basahin." Nabubuksan ang mas lumang file.
- Kung may hindi pa na-save na pagbabago ang piyesang nasa screen, unang magtatanong ang PartCraft: {{ui:Kanselahin}}, {{ui:Itapon ang mga pagbabago}} o {{ui:I-save muna}}.

## Pag-save

Sine-save ng {{ui:I-save}} o {{key:Mod+S}} ang nasa screen:

- Sa piyesa: `<part name>.partcraft.json`, kumpletong history (sketch, relation, dimension, feature, at posisyon ng rollback), ang section, detail at GD&T note ng drawing sheet, at ang buong teksto ng anumang STEP solid na na-import sa naunang build. Ang mga feature na hindi kayang buuin ng bersyong ito ay ise-save nang hindi binabago. Hindi naka-store ang mismong solid; ire-rebuild ito ng PartCraft mula sa history kapag nabuksan ang file.
- Sa assembly: `<assembly name>.partcraft-asm.json`, kasama ang **bawat piyesa sa loob nito**. Dala ng iisang file ang buong assembly, kaya maipapadala mo ito nang mag-isa.

Ang pag-save ay **download**. Ilalagay ng browser mo ang file sa downloads folder nito, o magtatanong kung saan ilalagay kung ganoon ang setting mo. Kapag nag-save ulit, bagong download ang nagagawa; maaaring pangalanan ito ng browser na `Part1 (1).partcraft.json` sa halip na palitan ang luma. I-rename o ilipat ang mga file sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} ayon sa gusto mo.

Ang mga karakter sa pangalan ng piyesa na hindi letra, digit, espasyo, `_`, `.` o `-` ay nagiging `_` sa pangalan ng file.

:::tip
Karamihan ng browser ay may setting na nagtatanong kung saan ise-save ang bawat download. I-on ito kung gusto mo ng pagpipiliang "I-save bilang" sa bawat pagkakataon: sa Chrome at Edge, nasa Downloads sa settings; sa Firefox, nasa General, Files and Applications; sa Safari, nasa General, File download location.
:::

Karagdagang impormasyon tungkol sa kung saan napupunta ang mga download at kung paano ligtas na itago ang mga file: [Saan napupunta ang iyong mga file](common:your-files).

## Pag-export

Gumagawa ang menu na {{ui:Export}} ng ibang format. Bawat isa ay download, na pinangalanan ayon sa piyesa.

| Item sa menu | File | Laman |
|---|---|---|
| {{ui:STL, para sa 3D printing}} | `<name>.stl` | Binary STL ng mga triangle ng solid, sa millimeters, **Z up** |
| {{ui:3MF, para sa 3D printing}} | `<name>.3mf` | 3MF na may solid bilang isang object, sa millimeters, **Z up** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Hindi pa nagagawa sa bersyong ito (naka-gray): kailangan nito ng exact kernel |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Hindi pa nagagawa sa bersyong ito (naka-gray) |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Solid na binubuo ng flat face mula sa mesh: **ang mga bilog na surface ay maraming maliliit na flat facet**. Sa millimeters, sa sariling axes ng PartCraft (Y up). Ito ang STEP na gamitin para sa ibang CAD program sa bersyong ito |
| {{ui:DXF ng sketch o flat face}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Sketch: mga linya, arko, bilog at punto sa sarili nitong coordinates ng sketch, sa mga layer na PROFILE, CONSTRUCTION at POINTS. Napiling flat face: ang mga outline nito bilang sarado na polyline (ang mga bilog na edge bilang mga facet nito) |
| {{ui:Drawing (PDF): mga view, section, detail, GD&T}} | `<name> - drawing.pdf` | Ang A3 drawing sheet: tatlong view, isometric, section at detail kung naka-set, kabuuang sukat, GD&T symbol, title block |

:::note
Hindi pa nagagawa sa bersyong ito ang {{ui:STEP AP242 (exact solid)}} at {{ui:STEP AP214 (exact solid)}}: gamitin ang {{ui:STEP (faceted, mesh kernel)}}. Tama ang hugis at volume nito, pero bawat bilog na face ay maraming flat facet, kaya hindi mapipili ng ibang programa ang butas bilang silindro. Itakda muna nang mas pino ang **Curves** kung mahalaga ito.
:::

- Ang mga export ay mula sa piyesang nasa screen. Naka-off ang export sa assembly; wala pang assembly export.
- Laging binubuo ng facet ang STL, 3MF, faceted STEP at face DXF. Itinatakda ng setting na **Curves** (nasa kanang panel kapag walang napili) kung gaano ito kapino, mula 32 hanggang 256 facet kada ikot. Piliin ang Fine o Very fine bago mag-export ng STL o 3MF para sa makinis na print.
- Gumagamit ang PDF drawing ng Helvetica font na nakapaloob sa reader. Ang mga karakter na hindi nito maipakita ay lalabas bilang "?".

Hakbang-hakbang: [Mag-export para sa printing, STEP at DXF](topic:export-files) at [Gumawa ng drawing sheet](topic:drawing-pdf).

## Hindi pa na-save na trabaho

- Nagtatago ang PartCraft ng recovery copy ng bukas na piyesa o assembly sa browser na ito ilang sandali pagkatapos ng bawat pagbabago, kaya hindi ito mawawala kapag nag-crash o nagsara ng tab: sa susunod na buksan mo ang PartCraft, magtatanong ito ng "I-recover ang iyong trabaho?". Hindi ito save: mag-save sa file para mapanatili ang trabaho mo. Tingnan ang [I-recover ang hindi pa na-save na trabaho](common:recover).
- Kapag sinubukan mong isara ang tab o i-reload na may hindi pa na-save na pagbabago, magtatanong ang browser ng "Umalis sa site?". Sa sarili ng browser ang kahong iyon; hindi mababago ng PartCraft ang salita nito.
- Ang {{ui:Bago}}, {{ui:Buksan}} at pagsara ng assembly ay nagtatanong muna bago itapon ang hindi pa na-save na pagbabago.

## Online at offline

Lahat ay nangyayari sa iyong computer: dina-download ang mesh kernel (isang WebAssembly program) kasama ng app at binubuo nito ang geometry nang lokal, at binabasa at isinusulat sa disk mo ang mga file. Walang data ng piyesa na dumadaan sa network. Tingnan ang [Ang mesh kernel](topic:solid-kernels).

Para magtrabaho nang walang koneksyon, mag-save ng PartCraft para sa offline na gamit habang online ka: piliin ang {{ui:I-save para sa offline}} sa app bar at maghintay habang nagbibilang ito ("Sine-save 40 sa 212") hanggang sabihing **Handa na offline**. Kasama sa naka-save na kopya ang 3D library at ang mesh kernel, kaya pagkatapos ay gumagana na offline ang modeling, pag-save, lahat ng export at drawing. Kung nakasulat na **Hindi ma-save**, i-click ito para subukan ulit habang online; ang **Hindi available ang offline** ay ibig sabihin hindi kayang magtago ng kopya ng window ng browser na ito (private window at ilang managed computer). Kapag may naka-save na kopya, ang pag-click sa **Handa na offline** ay nag-aalok ng {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} at {{ui:Alisin ang offline copy}}. Detalye: [Pagtatrabaho offline](common:offline).

:::online
Online ka. Kahit walang naka-save para sa offline na gamit, kapag na-load na ang PartCraft at nakasulat sa status bar na "Mesh kernel", maaari ka pa ring magpatuloy kung mawala ang koneksyon. Huwag lang i-reload ang pahina hanggang sa bumalik ang koneksyon.
:::

:::offline
Offline ka. Kung bukas na ang PartCraft, magpatuloy lang sa trabaho; gumagana pa rin ang pag-save at pag-export. Kung nakasulat sa app bar ang **Handa na offline**, nabubuksan din ng PartCraft mula sa simula nang walang koneksyon; kung hindi, huwag i-reload ang tab na ito.
:::

## Mga pagkakaiba ng browser

- **Downloads.** May sariling downloads folder at sariling paraan ng pagtatanong ang bawat browser. Kung magtanong ang browser kung puwedeng mag-download ng file ang site na ito, payagan ito, kundi hindi gagana ang pag-save at pag-export.
- **Drag and drop** ng file papunta sa view ay gumagana sa Chrome, Edge, Firefox at Safari.
- **Mga file mula sa phone o tablet.** Sa iPhone at iPad, ipinapakita ng Buksan ang Files app; ang mga naka-save na file ay napupunta sa Files, Downloads. Sa Android, napupunta sa Downloads folder ang mga ito.

Walang pagkakaiba sa laman ng mga file sa pagitan ng mga browser o operating system.
