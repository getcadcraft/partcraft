---
title: Tingnan ang loob gamit ang section view
summary: Hiwain ang piyesa o assembly gamit ang plane para makita ang loob nito, na pinupunan ang mga cut face. Igalaw ang plane gamit ang slider, mag-cut sa flat face na iki-click mo, at baligtarin kung aling panig ang hinihiwa.
keywords: section, section view, cut, cutaway, cross section, clipping, loob, hiwa, plane, caps, hatch, assembly section
from: a7555f7c
---

Hinihiwa ng **section view** ang model gamit ang plane para makita mo ang loob: mga butas, pocket, kapal ng pader, at kung paano nakaupo ang mga piyesa sa isang assembly. Gumagana ito sa bawat workspace at sa assembly. Buksan ito mula sa menu na {{ui:Views}} ng grupong **View**, {{ui:Section view}}, o pindutin ang {{key:X}}. Lilitaw ang isang card sa kaliwang ibaba ng view.

Ang view lamang ang hinihiwa. Nananatiling buo ang piyesa, ang volume, mga sukat at mga export nito, at walang naka-save sa file.

## Hiwain sa gitna

1. Pindutin ang {{key:X}}. Hihiwain ang piyesa ng front plane sa gitna nito, at pupunuan ng may kulay na tint ang mga cut face.
2. I-drag ang slider na {{ui:Position}}, o i-type ang distansya sa mm, para igalaw ang hiwa.
3. Pumili ng ibang {{ui:Plane}}: {{ui:Front (XY)}}, {{ui:Top (XZ)}} o {{ui:Right (YZ)}}.
4. Lagyan ng tsek ang {{ui:Cut away the other side}} para panatilihin ang kalahating naputol.

## Hiwain sa face

1. I-click ang {{ui:Pick a face}} sa card.
2. I-click ang flat na face sa view. Magsisimula ang hiwa na kapantay nito, na nasa face na iyon ang plane.
3. Igalaw ang {{ui:Position}} para pumasok nang mas malalim. Ang numero ay distansya sa kahabaan ng outward direction ng face.

## Mga click at ang hiwa

Ang mga click sa view ay napupunta sa natitira pagkatapos ng hiwa, kaya maaari kang pumili ng face o edge sa loob ng piyesa, magsimula ng sketch doon, o sumukat nang tawid dito. I-untick ang {{ui:Fill the cut faces}} para makita sa pamamagitan ng hiwa ang mga guwang na bahagi.

## Isara ito

Pindutin ang {{key:Esc}}, pindutin ulit ang {{key:X}}, o i-click ang {{ui:Close}}. Isasara rin ito kapag binuksan ang sketch o ang drawing sheet.

:::tip
Para sa section sa drawing sheet (may hatch, na may linya ng cutting plane), gamitin ang {{ui:Drawing}}: tingnan ang [Gumawa ng drawing (PDF)](topic:drawing-pdf).
:::
