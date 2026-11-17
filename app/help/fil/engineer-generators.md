---
title: Mga piyesa mula sa physics: mga generator
summary: Ang Engineer workspace at ang Generated body feature: pumili ng generator, itakda ang mga input nito (flow, pressure, temperatura, materyal, printer), at makakuha ng piyesang sinukat mula sa textbook formula, kasama ang data sheet, mga manufacturing check, at mga file para sa analysis tool. Pareho palagi ang piyesa para sa parehong input.
keywords: engineer, generator, generated body, physics, rules, heat exchanger, manifold, nozzle, lattice, gyroid, data sheet, inputs, deterministic, parehong input parehong piyesa, manufacturing checks, 3d printing, powder bed
from: 5a387dc0
---

Ang **generator** ay script na nagsa-size ng piyesa mula sa iyong mga kailangan at binubuo ito. Ang heat exchanger generator ay kumukuha ng init na ililipat, ang dalawang flow at ang kanilang temperatura, ang pressure, at ang materyal; kinakalkula nito kung gaano kalaki ang core at kung gaano kakapal ang pader nito, binubuo ito, at sinasabi sa iyo ang mga numerong ginamit nito at kung saan galing ang bawat isa. Magbago ng input at susunod ang piyesa.

Ang resulta ay normal na body sa piyesa: nasa feature list ito, nakaka-print, at nae-export. Nakatago rin sa piyesa ang generator mismo, kaya bubukas ang file sa anumang computer kahit walang naka-install na generator, at **hindi kailanman nagpapatakbo ng script ang pagbubukas ng piyesa**.

## Gumawa ng body

1. Piliin ang {{ui:Engineer}} workspace sa switcher.
2. Pumili ng generator sa listahan (ang mga kasama ng PartCraft, saka ang mga binuksan mo mula sa file) at i-click ang {{ui:New}}.
3. Tatakbo ang script. Kapag natapos, nasa view na ang body at ipinapakita ng panel ang mga input nito, ang **data sheet**, at ang **checks**.

Maaari mo ring idagdag ito mula sa Design: {{ui:Features}} › {{ui:More}} › {{ui:Generated body}}.

## Baguhin ito

Magbago ng anumang input at muling gagawin ang body ilang saglit pagkatapos mong tumigil sa pag-type. Sinasabi ng panel kung alin sa tatlong ito ang totoo:

- **Up to date**: tugma ang body sa script at mga input nito.
- **Nagbago ang mga input**: ang body sa piyesa ay galing sa naunang input; muling ginagawa ito, o pindutin ang {{ui:Run}}.
- **Hindi pa na-run** o **Pumalya ang huling run**: ipinapakita ang script error kasama ang linya nito.

Tinatapos ng {{ui:Stop}} ang run na masyadong matagal. Bumabalik ang undo ng isang hakbang sa bawat pagkakataon: ang isang run ay isang hakbang, ang isang input ay isang hakbang.

## Ang data sheet

Nakalista ang bawat numerong kinalkula ng generator, kasama ang **unit** nito at **kung saan ito galing** (isang textbook equation, isang standard, isang data sheet). Walang nakatagong constant. Bahagi ng file ang sheet, kaya pareho ito sa susunod na computer. Sinasabi ng [Data out](topic:data-out) kung paano ito i-save bilang JSON o PDF.

## Ang mga check

Maaaring suriin ng generator ang sarili nitong piyesa laban sa isang printing process: mga pader at puwang na mas manipis kaysa kaya ng proseso, maluwag na piraso, mga cavity na nakakulong ng powder o resin, mga hole na masyadong makitid para malinisan, at mga overhang na nangangailangan ng support. Nasa panel ang mga natuklasan, nasa listahan ng {{ui:Problems}} (ang ⚠ button), at nase-save kasama ng piyesa.

Ang mga figure ng proseso ay mga bilog na numerong ibinibigay ng mga pampublikong design guide para sa proseso sa pangkalahatan (FDM, SLA, SLS, metal powder bed). **Hindi sila spesipikasyon ng iyong makina**: palitan ang mga ito ng figure ng iyong shop bago umasa sa check. Gumagana ang check sa grid ng voxel, kaya tumpak ito hanggang sa isang voxel: iniuulat lang ang isang pader kapag mas manipis ito sa limit nang higit sa isang voxel.

## Ano ang kasama

| Generator | Ano ang ginagawa nito |
|---|---|
| Gyroid block | Isang block na puno ng gyroid, Schwarz P, o diamond sheet: ang pinakasimpleng lattice |
| Gyroid heat exchanger | Ang core ng two-fluid exchanger, sized mula sa duty sa pamamagitan ng effectiveness-NTU method, ang pader nito mula sa pressure; maaaring suriin ang pressure drop gamit ang flow study sa isang cell |
| Distribution manifold | Isang header at mga branch, bawat tubo ay sized mula sa flow na dinadala nito |
| Graded lattice beam | Isang lattice na lumalapad ang pader kung saan sinasabi ng topology optimisation na kailangan ng materyal |

Lahat sila ay unang estimate na binuo mula sa textbook formula. Nakalista sa [The engineering library](topic:engineering-library) ang mga formula at ang kanilang limitasyon. Patakbuhin ang Simulation, Thermal, o Flow sa resulta bago ka umasa rito.

## Mga kontrol sa export

Ang mga generator at data sheet ng Engineer ay may notice tungkol sa export control at sanctions. Basahin ito sa [Engineer and export controls](topic:engineer-export-notice); nasa ibaba rin ito ng bawat data sheet.

## Hindi pa nagagawa

- Mga header, port, at fitting sa heat exchanger core: core lang ito.
- Mga temperature curve para sa lakas ng materyal: nasa room temperature ang mga materyal.
- Tee loss at paghahati ng flow sa mga outlet sa manifold.
- Pagdaragdag ng generator mula sa add-on directory gamit ang isang click; ang pagbukas ng file ay nagdaragdag ng isa sa browser na ito.
- Mga generator para sa ibang app.
