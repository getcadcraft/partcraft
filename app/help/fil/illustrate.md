---
title: Simulan ang manual sa Illustrate
summary: Ginagawa ng Illustrate workspace ang mga manual mula sa design mo: views, exploded line art na may balloons at parts list, step-by-step na instructions, animation at 3D file na mabubuksan ng customer nang walang CAD. Sarili nitong file ang manual.
keywords: illustrate, manual, technical illustration, documentation, exploded view, parts list, instructions, partcraft-manual
from: e447e0ab
---

Ang **Illustrate** ang workspace para sa mga dokumentong kailangan sa paligid ng design: exploded views na may balloons at parts list, line-art na illustration para sa mga manual, step-by-step na instructions, animation, at 3D file na mabubuksan ng customer nang walang CAD. Piliin ang {{ui:Illustrate}} sa {{ui:Workspace}} switcher sa simula ng toolbar.

Ang **manual** ay sarili nitong file (`<name>.partcraft-manual.json`). Nagtatago ito ng kopya ng hugis ng bawat piyesa, ng product tree at ng property ng mga piyesa, at link pabalik sa pinanggalingan nila, kaya maaari kang magtrabaho sa manual habang tuloy ang design. Kapag nagbago ang design, dinadala ng [I-update mula sa design](topic:illustrate-update) ang mga pagbabago.

## Magsimula ng isa

I-click ang {{ui:Bago}} sa grupong {{ui:Manual}}, tapos:

- {{ui:Mula sa bukas na piyesa}}: ang piyesang bukas sa Design.
- {{ui:Mula sa bukas na assembly}}: ito ang ipinapakita kapag may bukas na assembly; kasama ang mga piyesa nito, ang posisyon, part number, materyal at exploded views nito.
- {{ui:Mula sa assembly file…}}: isang naka-save na `.partcraft-asm.json`; bubuuin muna ng PartCraft ang mga piyesa nito.
- {{ui:Mula sa ibang file…}}: glTF (.glb, .gltf), OBJ, STL o 3MF. Pinananatili ang tree at mga pangalan ng file, at ang mga kopya ng isang piyesa (ang parehong hugis na nakalagay nang dalawang beses) ay nagiging isang piyesa na may quantity. Hindi sinasabi ng mga STL at OBJ file ang unit nila, kaya tinatanong ka. Binabasa ang mga STL file bilang Z up; sinasabi ng glTF at 3MF ang sarili nilang direksyon.

Habang bukas ang manual, ipinapakita ng Illustrate ang sariling kopya ng manual ng mga piyesa; nakatago ang part o assembly na bukas sa Design hanggang bumalik ka sa Design.

## I-save at buksan

{{ui:I-save}} sa grupong {{ui:Manual}} (o {{key:Mod+S}}) ay nagse-save ng manual; {{ui:Buksan}} ay nagbubukas ng isa. Bawat pagbabago sa Illustrate ay isang hakbang sa sariling history ng manual: kumikilos ang {{ui:I-undo}} at {{ui:I-redo}} sa manual habang bukas ang Illustrate.

## Hindi pa nagagawa

- Hindi pa nabubuksan ang mga STEP file sa {{ui:Mula sa ibang file…}}. Buksan muna ang STEP sa Design (papasok ito bilang solid body: tingnan ang [Magbukas ng STEP file](topic:import-step)) at simulan ang manual sa {{ui:Mula sa bukas na piyesa}}, o i-save ito bilang glTF, 3MF, OBJ o STL.
- Hindi pa kayang ibigay ng ModelCraft at BimCraft ang model diretso sa Illustrate: i-save ito bilang glTF (.glb) at gamitin ang {{ui:Mula sa ibang file…}}.

Susunod: [Views at looks](topic:illustrate-views).
