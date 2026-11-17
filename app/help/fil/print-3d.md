---
title: Ihanda ang part para sa 3D printing
summary: Tiyaking sarado ang part o assembly, kasya sa printer mo, at nakatayo sa base, saka i-download bilang STL o 3MF para sa slicer mo.
keywords: 3d print, 3d printing, printer, print, slicer, stl, 3mf, watertight, sarado, manifold, bed, laki ng bed, build plate, overhang, supports, base, milimetro, export, mga thread, clearance
from: 90d81dff
---

Kailangan ng slicer ang saradong hugis: walang butas, nakaharap palabas ang bawat face, at walang dumadaan sa sarili nito. Sarado sa pagkakagawa ang mga part na binuo sa PartCraft, kaya karamihan sa pagsusuri ay nagsasabi lamang sa iyo ng laki, kung kasya ito sa bed ng printer mo, kung nakatayo ito sa patag na face, at kung gaano kalaki ang overhang nito.

## Suriin at i-download

1. Opsyonal, minsan lang: itakda ang bed ng printer mo sa {{ui:Mga setting}} › PartCraft › **3D printer**: lapad, lalim at taas sa milimetro. Iwanang walang laman para laktawan ang pagsusuring iyon.
2. Piliin ang {{ui:Export}}, saka ang {{ui:Check for 3D printing (STL or 3MF)…}}.

   Sinasabi ng dialog ang "Ready to print" o "Not ready to print", inilalista ang anumang mali, at ibinibigay ang laki sa bed (X × Y × Z, sa milimetro), ang volume at ang bilang ng triangle.

3. I-click ang {{ui:Download 3MF}} o {{ui:Download STL}}. Ang file ay kapareho ng {{ui:Export}} › {{ui:3MF, for 3D printing}} o {{ui:STL, for 3D printing}}.

Sa isang assembly, ang pagsusuri at ang mga file ay sumasaklaw sa buong assembly, bawat kopya kung saan ito nakalagay.

Sinusuri ang part habang nakatayo ito gaya ng pagkakasulat ng export: ang nakaturo pataas sa PartCraft (patayo sa Top plane) ay nakaturo pataas sa bed. Ang part na na-sketch sa Top plane ay nakahiga nang patag.

## Ano ang maaaring sabihin ng dialog

**Not ready to print** (maaaring tanggihan ng slicer o mali ang i-print): mga butas (mga edge na may face sa isang panig lamang), mga edge na pinagsasaluhan ng tatlo o higit pang face, mga face na nakaharap sa magkasalungat na direksyon, body na nakabaligtad, o body na dumadaan sa sarili nito. Hindi dapat magpakita nito ang part na binuo sa PartCraft; kung may lumabas, tingnan ang [Troubleshooting](topic:troubleshooting).

**Warnings** (mai-print ito, pero tingnan muna):

- **Mas malaki kaysa sa bed ng printer**, kahit iikutin ng 90° dito.
- **Walang patag na nakahiga sa ilalim**: iikutin ang part sa slicer para may face na nakapatong sa bed, o kakailanganin nito ng supports o raft.
- **Nakahilig nang higit sa 45° mula sa pagkatayo nang tuwid**: kakailanganin ng suporta ang mga face na iyon sa ayos nito ngayon. Ang ibang ayos ay maaaring mangailangan ng mas kaunti.
- **Nagsasapawan ang magkakahiwalay na body** o **nagtatagpo face sa face**: kadalasang pinagsasama ng slicer ang mga ito. Pinagsasama ng {{ui:Combine}} sa Features › {{ui:Higit pa}} ang mga ito sa iisang body. Tingnan ang [Mga body](topic:bodies).
- **Mas maliit sa 1 mm ang kabuuan**: suriin ang mga sukat ng part.

## Mga thread na naiprint

Naiprint bilang tunay na thread ang thread na namodelo. Bigyan ito ng kaunting **Clearance** para kumasya ang naiprint na bolt sa naiprint na nut: tingnan ang [Mga thread](topic:threads).

## Pakinisin ang mga bilog na face

Binubuo ng triangle ang STL at 3MF. Para mas makinis na bilog na face, i-click ang walang lamang espasyo para walang napili, saka itakda ang **Curves** sa **Fine (128 per turn)** o **Very fine (256 per turn)** sa right panel bago mag-export. Mas malalaking file ang nagagawa ng mas maraming triangle.

## Mas malaki, mas maliit, o sa mga piraso

- **Export › Scale for printing (STL or 3MF)…** ay nagse-save ng part na in-scale bawat axis nang hindi ito binabago: isang **shrinkage allowance** sa porsyento (laki × (1 + s), o ang eksaktong laki ÷ (1 − s)) para sa casting pattern, o simpleng factor, tungkol sa gitna, sa pinakamababang sulok, sa gitna ng ilalim, o sa origin.
- **Export › Split for printing (a zip of pieces)…** ay pumuputol ng part na masyadong malaki para sa printer mo sa mga piraso na kasya bawat isa sa bed na ibibigay mo, pinagdudugtong ng mga peg, key, dovetail, dowel hole o magnet pocket (ayon sa clearance na itinakda mo), nilalagyan ng numero ang bawat piraso at joint, at sine-save ang mga piraso bilang STL o 3MF sa isang zip na may assembly sheet. Hindi nagbabago ang mismong part.

## Hindi sinusuri

Kapal ng pader, mga detalyeng mas maliit kaysa sa nozzle mo, at kung paano ilalagay ng slicer ang supports. Ipinapakita ng slicer mo ang mga iyon.
