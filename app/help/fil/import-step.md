---
title: Magbukas ng STEP file at gumawa dito
summary: Dalhin ang STEP model ng supplier o ng ibang CAD program sa PartCraft bilang solid body, bilang bagong piyesa o idinagdag sa kasalukuyan, itakda kung aling direksyon ang pataas, at magdagdag ng sketch at feature dito.
keywords: step, stp, import, open step, ap203, ap214, ap242, supplier model, dumb solid, imported solid, up axis, z up, y up, triangles, faceted, assembly step
from: ca0eca5f
---

Binubuksan ng PartCraft ang mga STEP file (`.step` o `.stp`, AP203, AP214 at AP242) bilang **solid bodies** na maaari mong pagsketch-an, putulin, butasan at pagsamahin sa sarili mong feature. Walang sariling history ang body: hindi mo mababago ang mga dimensyong ginawa rito, puwede mo lang itong dagdagan o putulan.

Ginagawa ng bersyong ito ang bawat piyesa gamit ang mesh kernel, kaya **binabasa bilang triangles** ang STEP file: nananatiling flat ang mga flat face, at nagiging maraming maliliit na flat na face ang mga curved face (cylinders, cones, spheres, tori, B-spline surfaces). Nasa loob ng isang porsiyento ang volume nito mula sa eksaktong volume. Para mapanatili nang eksakto ang mga curved face, kailangan ng exact kernel, na wala sa bersyong ito.

## Magbukas ng STEP file

1. Piliin ang {{ui:Buksan}} o pindutin ang {{key:Mod+O}}, at piliin ang `.step` o `.stp` na file. O i-drop ito sa 3D view.
2. Binabasa ng PartCraft ang file at ipinapakita ang nakita nito, halimbawa: "AP214 file: 1 solid, 10 faces, binasa bilang triangles." Sa ibaba ang bilang ng triangle, anumang hindi nakuha o pinagsama, at kung nagsasara ang resulta.
3. Tingnan ang **Up sa file**. Sinasabi ng STEP file ang sarili nitong unit (millimetres, inches, metres…); kino-convert ito ng PartCraft sa millimetres, kaya ipinapakita ng **Units sa file** ang Millimetres, "ayon sa file". Ipinapakita ng **Laki dito** kung gaano ito kalaki.
4. Piliin ang {{ui:Buksan bilang body}} para sa bakanteng piyesa, o ang {{ui:Idagdag sa piyesang ito}} / {{ui:Bagong piyesa}} kapag may feature na ang piyesa. Kapag idinagdag, itatanong nito kung ano ang gagawin ng **Gamitin ito para**: idagdag, putulan, o itira lang ang overlap.

Lumalabas ang feature na **Imported1** sa history, at ipinapakita ng status bar, halimbawa, "plate.step ay isang solid body: 57995.937 mm³, 6 flat faces na maaaring i-sketch."

## An assembly STEP

Pumapasok ang assembly bilang **isang body** kasama ang bawat piyesa sa lugar na inilagay ito ng file ("3 piyesang nakalagay sa file ay papasok sa kinatatayuan nila"). Dalawang beses papasok ang piyesang ginamit nang dalawang beses. Hindi napapanatili ang mga pangalan ng mga piyesa at ang tree ng assembly.

## Itakda kung aling direksyon ang pataas

Karamihan sa CAD program ay Z up; Y up ang PartCraft. Bilang default, iniikot ng PartCraft ang file para ang Z nito ay nakaturo pataas dito. Kung nakahiga sa gilid ang piyesa pagdating, piliin ang **Imported1** at itakda ang **Up sa file** sa **Y up**. Maaari ding baguhin doon ang **Units sa file** at **Gamitin ito para**; bawat pagbabago ay isang undo step.

## Gumawa dito

- I-click ang isang flat face ng body at piliin ang {{ui:Sketch sa face na ito}}. Nananatili sa lugar nila ang mga flat face ng STEP model kapag muling binuo ang body.
- Magdagdag ng cut, butas, boss, pattern at mirror gaya ng sa anumang piyesa.
- Tingnan ang laki nito sa **Part** box: volume, surface area, laki.

Kailangan ng exact kernel ang fillets, chamfers at shells, gaya ng sa anumang piyesa sa bersyong ito ([Ang mesh kernel](topic:solid-kernels)).

## Saan ito nakalagay

Nakaimbak ang mga triangle **sa loob** ng `.partcraft.json` file, kaya kumpleto sa sarili ang part file: hindi mo na kailangan ang STEP file.

## Mga mensahe

| Mensahe | Ibig sabihin |
|---|---|
| '"part.stp" ay hindi STEP file (hindi ito nagsisimula sa ISO-10303-21).' | Hindi plain STEP text ang file. Humingi sa nagpadala ng AP203, AP214 o AP242 STEP file |
| "Hindi mabasa ang STEP file: kulang o sira ang data section nito." | Putol o sira ang file. Kopyahin ulit ito |
| "Walang solid o surface body ang STEP file: walang maidadala." | Drawing, point o data lang ang laman ng file. Humingi ng solid |
| "Masyadong malaki ang STEP file na iyon (higit 60 MB) para ma-import dito." at ang iba pang limit ng reader (entries, faces, triangles) | Pasimplehin ang model sa pinagmulan, o ipadala ang mga piyesa isa-isa |
| "… may sirang linya sa file na nilaktawan." | Hindi nabasa ang ilang linya; pumasok ang iba. Suriin ang body |
| "… faces ay hindi nagawang triangles at inalis." | Nag-iiwan ng butas ang mga face na iyon, na sinusubukang punan ng PartCraft; kapag hindi nagsara ang body, hindi ito idinadagdag |
| "… faces ng uri na hindi nababasa (…) ay nilaktawan." | Bihirang surface type. Humingi ng model na may plain o B-spline surfaces |
| "Hindi ito nagsasara …" | Hindi bumubuo ng closed solid ang mga face (surface model, o may naiwang face). Ipinapakita ng PartCraft ang mga butas at walang idinadagdag |

## Mga limitasyon

- Iginuguhit at sinusukat na flat facets ang mga curved face, gaya ng bawat piyesang binubuo ng bersyong ito. Pinananatili ng PartCraft ang sarili nitong flat faces, cylinders, cones, spheres at tori ng file kasama ng body, kaya isinusulat pabalik ng {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} ang mga ito bilang tunay na surface, butas bilang butas, kasama ang mga feature na idinagdag mo. Nananatiling facets sa export ang mga face na ibinigay ng file bilang splines, sweeps o surfaces of revolution. Ang piyesang na-save bago ang 0.9.1 ay walang nakatagong surface: buksan ulit ang STEP file para makuha ang mga ito.
- {{ui:Export}} › {{ui:DXF ng sketch o flat face}} na may napiling flat face ay sumusulat ng round hole ng file bilang tunay na circle.
- Hindi nababasa ang mga kulay, pangalan ng body, istruktura ng assembly at PMI (mga tolerance sa file).
- Bukod sa STEP, binubuksan ng PartCraft ang STL, OBJ at 3MF mesh ([Magbukas ng STL, OBJ o 3MF](topic:open-meshes)) at `.3dm` files ([Magbukas ng .3dm model](topic:open-3dm-files)) bilang solid bodies. Hindi suportado ang IGES at ang native files ng ibang program.
- Ang piyesang may STEP solid na na-import ng build na may exact kernel ay pinananatili ang STEP text; nilalaktawan ito ng bersyong ito ("hindi pa nagagawa"). Buksan ulit ang STEP file para papasukin ito bilang triangles.
