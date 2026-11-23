---
title: Suriin ang frame na ito
summary: Kunin ang steel member ng weldment (isang skid, stand, frame ng tubo at section), ilagay ang kagamitan sa mga paa nito at ang support sa sahig, at tingnan kung gaano karami ng bawat member at bawat weld ang nagagamit sa ilalim ng AISC 360-16 o EN 1993. Tulong lamang ito hanggang makapagrepaso ang isang engineer.
keywords: frame, weldment, skid, pump skid, structural member, weld, welds, check, AISC 360, EN 1993, utilisation, utilization, support, equipment, load, hollow section, HSS, RHS, CHS, engineer
from: 032e34ee
---

{{ui:Check this frame}} ay kumukuha ng tuwid na steel member ng weldment, bumubuo ng frame mula sa mga ito, nilulutas ito sa ilalim ng bigat ng steel at ng kagamitang inilagay mo rito, at sinusubok ang bawat member at bawat weld kung saan nagtatagpo ang mga member. Isang takbo, isang table.

:::warning
Isa itong **tulong hanggang makapagrepaso ang isang engineer**. Hindi ito selyo, at hindi disenyo ang pagpasa. Ginagamit nito ang centre line ng mga member gaya ng iginuhit, itinuturing na welded sa paligid ng buong section ang bawat joint, kinukuha ang leg ng fillet mula sa pader ng section (hanggang 8 mm) maliban kung itatakda mo ito, at hindi nito sinusuri ang bolt, plato, base plate, anchor, bearing, block shear, fatigue o lifting.
:::

## Run it

1. Iguhit ang mga member gamit ang {{ui:Structural member}} (galing sa section table ang mga section).
2. Buksan ang {{ui:Views}} › {{ui:Check this frame}}. Sabihin kung saan nakatayo ang frame (isang **support** sa bawat paa: pinned, fixed o roller; ang {{ui:Pinned supports at the feet}} ay naglalagay ng isa sa bawat pinakamababang dulo ng member) at kung ano ang nakapatong dito (**equipment**: mass, centre of gravity, ang mga punto kung saan ito nakabolt sa sahig, at opsyonal na pahalang na push).
3. Piliin ang code: **ASCE 7 + AISC 360-16** o **EN 1990 + EN 1993**. Itakda ang steel grade at, para sa AISC, ang lakas ng weld metal (482.6 MPa ang E70).
4. Pindutin ang {{ui:Check}}. Isinusulat ng {{ui:Save the report as CSV}} ang bawat table, kasama ang linyang hindi pa nirerepaso sa unahan.

Binabasa ang frame sa milimetro, na nakataas ang vertical axis ng piyesa. Ang mga support at punto ng kagamitan ay tina-type bilang x y z sa parehong frame, kung saan ang z ang taas.

Kapag ang dulo ng member ay tumama sa gitna ng ibang member, hinahati ito doon, gayundin ang paa o bolt-down point sa linya ng isang member. Ibinabahagi ang bigat sa mga bolt-down point bilang rigid body; ang centre of gravity na nasa labas ng mga paa, o ang lifting force sa isang paa, ay sinasabi, hindi kailanman tinatago.

## What you get

- Ang pinakaginagamit na item at kung may bumabagsak. Ang mga item na hindi kayang husgahan ng check (section na wala sa table, steel na walang factor sa code) ay binibilang at pinangangalanan, hindi kailanman binibilang bilang pumasa.
- Isang hilera bawat member at bawat weld group: gaano karami ang nagagamit, ang nangingibabaw na check at clause, at ang load combination na nangibabaw.
- Ang parehong table sa report.

## What is checked

Hollow section (RHS, SHS, CHS, pipe) at I-section para sa tension, compression, bending, shear at ang interaksyon ng mga ito; fillet at full-penetration na weld sa pamamagitan ng elastic vector method. Ang compact na pader ay sa bending lamang para sa hollow section; sinasabing hindi sinusuri ang slender na pader. May ilang constant na isinulat mula sa mga standard at hindi pa naihahambing sa nakalimbag na kopya; inililista ng report ang bawat pinagmulan.

Tingnan ang [Frames from steel sections](topic:structural-members) para sa pagguhit ng mga member at ng cut list nila.
