---
title: "Mga file: buksan, i-save at i-export"
summary: Ang mga file ng piyesa at assembly na binubuksan at sine-save ng PartCraft, bawat format ng export at kung ano ang pinapanatili nito, kung saan napupunta ang mga file, at kung ano ang nagbabago offline o sa pagitan ng mga browser.
keywords: buksan, i-save, i-export, download, file, partcraft.json, assembly file, stl, 3mf, step, dxf, pdf, nasaan ang mga file ko, offline, i-save bilang
from: e5fbc7e3
---

Gumagana ang PartCraft sa mga file sa kompyuter mo. Hindi ito kailanman nag-a-upload ng piyesa, at walang account o cloud storage na kasali. Hindi pa available ang cloud saving.

## Ano ang binubuksan ng PartCraft

| File | Extension | Paano |
|---|---|---|
| Isang PartCraft part | `.partcraft.json` | {{ui:Open}}, {{key:Mod+O}}, o i-drop sa 3D view |
| Isang PartCraft assembly | `.partcraft-asm.json` | Pareho: nalalaman ng PartCraft kung anong uri ito |
| Isang STEP solid | `.step`, `.stp` | Isang solid body na binasa bilang triangle: [Magbukas ng STEP file at bumuo mula rito](topic:import-step) |

Nabubuksan din bilang solid body ang mga STL, OBJ at 3MF mesh ([Magbukas ng STL, OBJ o 3MF](topic:open-meshes)), at gayundin ang mga `.3dm` na file ([Magbukas ng .3dm model](topic:open-3dm-files)). Hindi mabubuksan ang DXF, IGES at ang sariling part file ng ibang program (tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet)).

Mga patakaran sa pagbubukas:

- Dapat magtapos sa `.json` ang pangalan ng part o assembly file, at dapat wala pang 50 MB ang file.
- Sinusuri ang mga file bago ipakita ang anuman. Ang sira o na-edit na file ay tinatanggihan nang may payak na dahilan, halimbawa "Hindi ito file ng PartCraft."
- Tinatanggihan ang file na na-save ng mas bagong PartCraft: "Na-save ang file na ito ng mas bagong PartCraft (file version 3); version 2 lang ang kayang basahin nito." Nagbubukas ang mas lumang file.
- Kung may hindi pa nase-save na pagbabago ang piyesang nasa screen, unang magtatanong ang PartCraft: {{ui:Cancel}}, {{ui:Discard changes}} o {{ui:Save first}}.

## Pag-save

{{ui:Save}} o {{key:Mod+S}} ay sine-save ang nasa screen:

- Sa piyesa: `<part name>.partcraft.json`, ang buong history (mga sketch, relasyon, dimension, feature, posisyon ng rollback), ang mga section, detail at GD&T note ng drawing sheet, at ang buong text ng anumang STEP solid na in-import sa mas lumang build. Ang mga feature na hindi kayang buuin ng bersyong ito ay sine-save nang hindi nagbabago. Hindi naka-imbak ang solid mismo; muling binubuo ito ng PartCraft mula sa history kapag binuksan ang file.
- Sa assembly: `<assembly name>.partcraft-asm.json`, na may **bawat piyesa sa loob**. Isang file ang nagdadala ng buong assembly, kaya maipapadala mo ito nang mag-isa.

Ang pag-save ay isang **download**. Ilalagay ng browser mo ang file sa downloads folder nito, o magtatanong kung saan ilalagay kung itinakda mo itong magtanong. Ang muling pag-save ay gumagawa ng bagong download; maaaring pangalanan ito ng browser na `Part1 (1).partcraft.json` sa halip na palitan ang luma. I-rename o ilipat ang mga file sa {{pick:mac=Finder|windows=File Explorer|linux=your file manager}} ayon sa gusto mo.

Ang mga karakter maliban sa letra, digit, espasyo, `_`, `.` at `-` sa pangalan ng piyesa ay nagiging `_` sa pangalan ng file.

:::tip
Karamihan sa mga browser ay may setting na nagtatanong kung saan ilalagay ang bawat download. I-on ito kung gusto mo ng pagpipiliang "Save as" sa bawat pagkakataon: sa Chrome at Edge, nasa Downloads sa settings; sa Firefox, nasa General, Files and Applications; sa Safari, nasa General, File download location.
:::

Higit pa tungkol sa kung saan napupunta ang mga download at kung paano ligtas na itago ang mga file: [Saan napupunta ang iyong mga file](common:your-files).

## Pag-export

Isinusulat ng menu na {{ui:Export}} ang ibang format. Bawat isa ay isang download, na pinangalanan ayon sa piyesa.

| Menu item | File | Laman |
|---|---|---|
| {{ui:STL, for 3D printing}} | `<name>.stl` | Binary STL ng mga triangle ng solid, millimeters, **Z up** |
| {{ui:3MF, for 3D printing}} | `<name>.3mf` | 3MF na may solid bilang isang object, millimeters, **Z up** |
| {{ui:STEP AP242 (exact solid)}} | `<name>.step` | Isang eksaktong solid, millimeters, Z up: mga bilog na face bilang totoong silindro, kono, sphere at torus. Ang STEP na gagamitin para sa ibang CAD at CAM program |
| {{ui:STEP AP214 (exact solid)}} | `<name>.step` | Ang parehong eksaktong solid sa mas lumang AP214 schema |
| {{ui:STEP (faceted, mesh kernel)}} | `<name>.step` | Isang solid na gawa sa flat face mula sa mesh: **ang mga bilog na surface ay maraming maliliit na flat facet**. Millimeters, sa sariling axes ng PartCraft (Y up). Para sa program na tumatanggi sa eksaktong file |
| {{ui:DXF of the sketch or flat face}} | `<name> - <sketch>.dxf` o `<name> - face.dxf` | DXF R12. Isang sketch: mga linya, arko, bilog at punto sa sariling coordinates ng sketch, sa mga layer na PROFILE, CONSTRUCTION at POINTS. Isang napiling flat face: ang mga outline nito bilang closed polyline (ang bilog na edge bilang mga facet nito) |
| {{ui:Drawing (PDF): views, section, detail, GD&T}} | `<name> - drawing.pdf` | Ang A3 drawing sheet: tatlong view, isometric, section at detail kung nakatakda, pangkalahatang sukat, simbolo ng GD&T, title block |

:::note
Isinusulat ng {{ui:STEP AP242 (exact solid)}} ang mga butas, boss, fillet, kono, sphere at torus sa totoong surface nila, para mapili ng ibang program ang butas bilang silindro; hindi ito binabago ng **Curves**. Ang spline na gilid, modeladong thread at na-import na mesh ay walang eksaktong surface at nananatiling flat facet sa iisang solid; sinasabi ng status bar kung ilan. Isinusulat ng {{ui:STEP (faceted, mesh kernel)}} ang bawat bilog na face bilang facet.
:::

- Ang mga export ay ng piyesang nasa screen. Naka-off ang export sa assembly; wala pang assembly export.
- Palaging gawa sa facet ang STL, 3MF, faceted STEP at face DXF. Itinatakda ng setting na **Curves** (sa right panel kapag walang napili) kung gaano kapino ang mga ito, mula 32 hanggang 256 facet bawat ikot. Piliin ang Fine o Very fine bago i-export ang STL o 3MF para sa makinis na print.
- Gumagamit ang PDF drawing ng built-in na Helvetica font ng reader. Ang mga karakter na hindi nito maipakita ay ipi-print bilang "?".

Hakbang-hakbang: [I-export para sa printing, STEP at DXF](topic:export-files) at [Gumawa ng drawing sheet](topic:drawing-pdf).

## Mga hindi pa nase-save na gawa

- Nagtatago ang PartCraft ng recovery copy ng bukas na piyesa o assembly sa browser na ito, ilang sandali pagkatapos ng bawat pagbabago, para hindi mawala ang gawa kapag nag-crash o nasara ang tab: sa susunod na buksan mo ang PartCraft, magtatanong ito ng "Recover your work?". Hindi ito save: i-save sa file para mapanatili ang gawa mo. Tingnan ang [Mabawi ang hindi pa nase-save na gawa](common:recover).
- Kung susubukan mong isara ang tab o i-reload ito na may hindi pa nase-save na pagbabago, magtatanong ang browser ng "Leave site?". Ito ang sariling kahon ng browser; hindi mababago ng PartCraft ang pagkakasulat nito.
- Ang {{ui:New}}, {{ui:Open}} at ang pagsasara ng assembly ay nagtatanong muna bago itapon ang hindi pa nase-save na pagbabago.

## Online at offline

Nangyayari ang lahat sa kompyuter mo: dina-download kasama ng app ang mesh kernel (isang WebAssembly program) at lokal itong bumubuo ng geometry, at binabasa at isinusulat ang mga file sa disk mo. Walang data ng piyesa na dumadaan sa network. Tingnan ang [The mesh kernel](topic:solid-kernels).

Para magtrabaho nang walang koneksyon, i-save ang PartCraft para sa offline na paggamit habang online ka: piliin ang {{ui:Save for offline}} sa app bar at maghintay habang nagbibilang ito ("Sine-save ang 40 sa 212") hanggang sabihin nitong **Handa na offline**. Kasama sa naka-save na kopya ang 3D library at ang mesh kernel, kaya pagkatapos ay gumagana na ang pagmomodelo, pag-save, bawat export at drawing offline. Kung sinasabi nitong **Hindi ma-save**, i-click ito para subukan ulit habang online; ang **Hindi available ang offline** ay nangangahulugang hindi kayang magtago ng kopya ng window ng browser na ito (private window at ilang managed computer). Kapag may naka-save na kopya, ang pag-click sa **Handa na offline** ay nag-aalok ng {{ui:Save again (get the newest version)}} at {{ui:Remove the offline copy}}. Mga detalye: [Pagtatrabaho offline](common:offline).

:::online
Online ka. Kahit hindi mo i-save para sa offline na paggamit, kapag naka-load na ang PartCraft at sinasabi ng status bar chip na "Mesh kernel", maaari ka pa ring magtrabaho kung mawala ang koneksyon. Huwag lang i-reload ang pahina hangga't hindi ka bumabalik online.
:::

:::offline
Offline ka. Kung bukas na ang PartCraft, ituloy ang trabaho; gumagana pa rin ang pag-save at pag-export. Kung nakasaad sa app bar ang **Handa na offline**, bubukas din ang PartCraft mula sa simula nang walang koneksyon; kung hindi, huwag i-reload ang tab na ito.
:::

## Pagkakaiba ng mga browser

- **Downloads.** May sariling downloads folder at sariling paraan ng pagtatanong ang bawat browser. Kung magtanong ang browser kung puwedeng mag-download ng file ang site na ito, payagan ito, kung hindi ay hindi gagana ang pag-save at pag-export.
- **Drag and drop** ng file papunta sa view ay gumagana sa Chrome, Edge, Firefox at Safari.
- **Mga file mula sa telepono o tablet.** Sa iPhone at iPad, ang Buksan ay nagpapakita ng Files app; ang mga na-save na file ay napupunta sa Files, Downloads. Sa Android, napupunta ang mga ito sa Downloads folder.

Walang pagkakaiba sa laman ng mga file sa pagitan ng mga browser o operating system.
