---
title: Technical illustrations: line art, larawan at sheet
summary: I-export ang anumang view bilang vector line art (SVG o PDF) na may tatlong line weight, nakatagong linya na dashed o wala, hatched na cut face at opsyonal na fill, o bilang PNG; maglagay ng maraming view sa isang sheet.
keywords: illustrate, line art, technical illustration, svg, pdf, png, hidden lines, silhouette, hatch, sheet, export
from: 0e9bea63
---

Ang {{ui:Export}} sa grupong {{ui:Labas}} ay nagbubukas ng export dialog:

- {{ui:Ano}}: ang scene gaya ng kasalukuyan, isang view, o bawat view.
- {{ui:Bilang}}: **PDF** o **SVG** (vector line art; pareho ang pinagmulan ng dalawa), **PNG ng line art**, o **PNG larawan ng 3D view** (hanggang 4096 pixels ang lapad), at ang [interactive 3D file](topic:illustrate-interactive).
- {{ui:Mga pahina}}: isang view bawat page, o bawat view sa isang sheet na may pangalan nito sa ilalim. {{ui:Papel}}: A4, A3, Letter o Tabloid.
- {{ui:Mga nakatagong linya}}: dashed o wala. {{ui:Punan}}: gaya ng itsura ng view, wala, flat na kulay o shaded. {{ui:Gumuhit din ng soft edges}} ay nagdadagdag ng detail lines.

Tatlo ang line weight ng line art: outlines (silhouette at bukas na gilid, at cut outline), sharp edges, at detail lines. Hatched ang cut face ng section o box cut-away. Nakakakuha ng chain-line trails ang exploded view mula sa kinalalagyan ng bawat piyesa; iginuguhit din ang balloons, annotations, parts list at magnifier.

Kinakalkula ang line art mula sa hugis ng mga piyesa sa paraang mesh (ang parehong ginagamit ng drawing sheet ng PartCraft na walang exact kernel), kaya iginuguhit ang mga curved face ayon sa kanilang facets, gaya ng hawak ng model.

## Hindi pa nagagawa

- Hindi pa inaalok dito ang mga larawang may kalidad ng path tracer (renderer ng ModelCraft); ang PNG na larawan ay ang sariling itsura ng 3D view.
