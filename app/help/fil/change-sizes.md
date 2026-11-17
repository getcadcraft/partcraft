---
title: Baguhin ang sizes nang hindi binubuksan ang sketch
summary: Kontrolin ang piyesa gamit ang mga numero sa kanang panel: sketch dimensions, depths, bilang at anggulo, kung paano planuhin ang piyesa para tama ang mga numerong magkokontrol dito, at kung saan pumapalit ang parameters at equations.
keywords: parameters, driving dimensions, design intent, baguhin ang size, equations, global variables, design table, configurations, resize, baguhin ang dimension
from: c2ae1a32
---

Bawat size sa piyesa ng PartCraft ay numerong puwede mong baguhin pagkatapos: ang dimensions sa sketches nito at ang settings ng features nito. Hindi mo kailangang buksan ang sketch para baguhin ang dimensions nito.

## Baguhin ang sketch dimension mula sa panel

1. I-click ang feature sa history, halimbawa "Extrude1".
2. Sa sariling settings ng extrude, nakalista ang **Sketch dimensions (Sketch1)** sa bawat dimension ng sketch nito: "Distansya", "Diameter", "Anggulo (°)" at iba pa.
3. I-type ang bagong value sa isang box at pindutin ang {{key:Enter}} o {{key:Tab}}.

Nagso-solve ang sketch sa bagong value, at nire-rebuild ang buong piyesa. Kapag pinili mo ang mismong sketch, ipinapakita nito ang parehong listahan bilang **Driving dimensions**.

Ang radius o diameter ay dapat higit sa zero, at ang anggulo ay nasa pagitan ng 0 at 180 degrees; sasabihin ito ng status bar kapag hindi.

:::tip
Aling box ang alin? Nakalista ang mga box ayon sa pagkakagawa ng mga dimension. Kung hindi ka sigurado, buksan ang sketch (i-double-click ito), i-double-click ang dimension sa canvas, at baguhin ito roon.
:::

## I-type agad ang pangunahing numero

Piliin ang feature sa history (o idagdag lang ito) at i-type ang numero: mapupunta ito sa pangunahing box ng feature, ang binabago mo nang pinakamadalas (ang **Lalim** ng Extrude, ang **Anggulo** ng Revolve, ang **Diameter** ng Hole, ang **Bilang** ng pattern, ang **Radius** ng Fillet, ang wall ng Shell). Pindutin ang {{key:Enter}} para itakda ito, o {{key:Esc}} para panatilihin ang luma. Kapag nagdagdag ng Extrude, sinasabi ito ng status bar: "Naidagdag ang Extrude1. Baguhin ang mga numero nito sa kanan, o mag-type ng numero ngayon para sa lalim nito."

## Baguhin ang numero sa history

Ang bawat row ng feature sa history ay nagpapakita ng pangunahing numero nito sa tabi ng pangalan: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". I-double-click ang numero (o piliin ang row at pindutin ang {{key:F2}}) at may lalabas na box doon mismo. I-type ang bagong value at pindutin ang {{key:Enter}}; pinapanatili ng {{key:Esc}} ang luma. Gumagana ito nang eksakto gaya ng box ng feature sa kanan: parehong limit, `=` para mag-type ng equation gaya ng `=width/2`, at isang hakbang para i-undo.

Sa Extrude, Hole o pattern, nagbubukas ang box sa double-click kahit saan sa row. Sa Fillet, Chamfer, Shell, Draft o Thread, ang double-click sa pangalan ay napupunta pa rin sa pagpili ng mga edge o face, kaya i-double-click ang mismong numero. Walang numero ang sketches sa row; ang double-click ay nagbubukas ng sketch.

## I-drag sa view

Piliin ang Extrude sa history (o i-click ito sa view, tapos ang row nito) at may orange na arrow na nakatayo sa end face nito, kasama ang lalim sa box sa tabi nito. I-drag ang arrow: sumusunod ang piyesa habang nagdidrag ka, at kapag binitawan mo, itinatakda nito ang bagong lalim bilang isang hakbang ({{key:Mod+Z}} ang nagbabalik nito). Pindutin ang {{key:Esc}} habang nagdidrag para bumalik sa dating lugar. Gumagalaw ang lalim nang tig-ikasampu ng laki nito: 1 mm sa 25 mm na extrude, 0.1 mm sa 3 mm na isa.

Ang Revolve ay may kurbadong arrow sa dulo ng pag-ikot nito: i-drag ito paikot sa axis para baguhin ang anggulo, sa buong degrees mula 1° hanggang 360°.

O i-click ang box sa tabi ng arrow, i-type ang value (o `=` at equation) at pindutin ang {{key:Enter}}. Walang arrow ang Extrude na **Through all** o hanggang sa isang face, o sa value na pinapatakbo ng equation: baguhin ang mga ito sa kanan.

## Ang mga numerong nagpapatakbo sa piyesa

| Saan | Ano ang mababago mo |
|---|---|
| Sketch | Bawat dimension: haba, distansya, radius, diameter, anggulo |
| Extrude at Cut | Lalim, end condition, direksyon, boss o cut |
| Revolve at revolved cut | Anggulo, axis, boss o cut |
| Hole | Diameter, lalim, through all, counterbore diameter at lalim |
| Fillet, Chamfer, Shell | Radius, distansya, kapal ng wall at direksyon, at aling edges o faces |
| Linear at Circular | Bilang, spacing o anggulo, direksyon o axis |
| Part | Curves (gaano kapino ginagawang faceted ang mga bilog na hugis) |
| Drawing | Saan puputulin ng section, laki at scale ng detail, GD&T values |

## Planuhin ang piyesa para tama ang mga numerong magpapatakbo rito

Ang mga numerong ibinibigay mo ang mga puwede mong baguhin. Ilang ugali ang nakakatulong para maayos ang mga susunod na pagbabago:

- **I-dimension ang mahalaga sa trabaho.** Kung dapat manatiling 15 mm ang layo ng hole mula sa isang edge, i-dimension ito mula sa edge na iyon, hindi mula sa origin.
- **I-fully define ang mga sketch.** Kapag gayon, isang galaw lang ang gumagalaw sa dapat gumalaw (tingnan ang [I-fully define ang sketch](topic:relations-dimensions)).
- **Gumamit ng relations para sa intensyon.** Ang Equal sa dalawang hole ay nangangahulugang iisang diameter ang nagpapatakbo sa pareho. Para sa simetrikong hugis: ilagay ang origin sa center line, o gumamit ng Midpoint.
- **Mag-sketch sa mga face na gawa ng features.** Gumagalaw ang sketch sa end face ng isang extrude kapag nagbago ang lalim.
- **Mag-pattern sa halip na kumopya.** Ang isang hole na pinattern nang walong beses ay may iisang diameter na babaguhin.

## Higit pa sa iisang numero

- **Isang numerong nagpapatakbo ng marami:** gumamit ng parameters at equations: [Patakbuhin ang piyesa gamit ang parameters](topic:parameters).
- **Ilang sizes ng iisang piyesa:** i-save ang bawat isa bilang [configuration](topic:design-tables); naka-save ang mga ito sa part file.
- **Aritmetika sa number box:** i-type ang `=40/2` o `=width / 2`. Gumagawa ito ng equation; tingnan ang [Equations sa dalawang direksyon](topic:equations-two-way).
- **Inch units:** millimeters ang ipinapakita ng piyesa. Sa number box na may `=`, o sa parameter, nagiging 50.8 ang `2in`.

Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet).
