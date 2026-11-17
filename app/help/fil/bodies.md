---
title: Combine, ilipat at i-scale ang mga body; path patterns
summary: Gumawa ng hiwalay na mga body, tapos i-join, i-cut o i-intersect ang mga ito pagkatapos, ilipat, paikutin, i-align o kopyahin ang mga ito, i-scale nang pantay o ayon sa X, Y at Z, at kopyahin ang features o body sa kahabaan ng curve.
keywords: body, mga body, multi-body, bagong body, combine, boolean, join, cut, intersect, subtract, union, panatilihin ang tools, ilipat ang body, kopyahin ang body, paikutin ang body, align, translate, scale, hindi pantay na scale, stretch, affine, path pattern, pattern sa kahabaan ng curve, array sa kahabaan ng path, curve driven pattern
from: 6b1ea820
---

:::note
**Hindi pa nagagawa sa bersyong ito.** Ang pagtatrabaho sa maraming body ay nangangailangan ng exact geometry kernel, na wala sa bersyong ito ng PartCraft: binubuo nito ang bawat piyesa gamit ang mesh kernel. [Ano ang hindi pa nagagawa](topic:not-built-yet) ang nagsasabi kung ano ang gagawin sa halip. Inilalarawan ng natitirang pahina kung paano ito gumagana gamit ang exact kernel.
:::

Maaaring may higit sa isang solid ang piyesa. Ang bawat hiwalay na solid ay isang **body**. Karamihan sa features ay nagdaragdag o nag-aalis sa bawat body na nasasagi nila; ang mga tool sa pahinang ito ay gumagana sa buong body na pipiliin mo. Nasa {{ui:Higit pa}} menu ng Features group ang mga ito: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}} at {{ui:Path pattern}}. Lahat ng ito ay nangangailangan ng exact kernel (OpenCascade).

## Gumawa ng hiwalay na body

Itakda ang **Operation** ng isang extrude o revolve sa **Bagong body** sa kanang panel nito (may ganito rin ang sweeps at lofts). Mananatiling hiwalay ang bagong solid kahit mag-overlap ito sa iba. Ang **Intersect** ay tinitira lang ang overlap ng bagong shape sa kung ano ang naroon na.

Ipinapangalan ang mga body ayon sa feature na nagsimula sa mga ito: "Extrude2". Ang kopya ay ipinapangalan ayon sa original nito at sa feature na kumopya rito: "Extrude2, copy 1 of Move1". Hindi nagbabago ang mga pangalan kapag binago mo ang sizes sa itaas, kaya nahahanap pa rin ng mga feature na gumagamit ng body ang mga ito. Kapag dalawa o higit pa ang body, ipinapakita ng part panel (i-click ang bakanteng espasyo) ang mga ito kasama ang kanilang volumes.

## Palitan ang pangalan o itago ang body

I-click ang bakanteng espasyo sa view para makita ang part panel. Ang body list nito (lumalabas kapag dalawa o higit pa ang body ng piyesa) ay may name box at {{ui:Itago}} button sa bawat row.

- **Rename:** i-type ang bagong pangalan sa box at pindutin ang {{key:Enter}} o i-click sa labas. Gagamitin na ito ng bawat panel: Combine, Move body, ang mga pattern. I-clear ang box para bumalik sa pangalan mula sa feature na gumawa ng body.
- **Hide:** i-click ang {{ui:Itago}} sa row nito. Aalis ang body sa view at dadaan ang mga click dito, kaya maaari kang pumili ng mga face sa likod nito. {{ui:Ipakita}} ang magbabalik nito; {{ui:Ipakita lahat}} ang magbabalik sa bawat nakatagong body.

Ang pagtatago ay nagbabago lang ng view. Binubuo pa rin ang nakatagong body, kasama sa volume at measurements, at kasama sa STL, 3MF at STEP exports. Naka-save ang mga pangalan at nakatagong body sa part file, at bawat pagbabago ay isang hakbang ng {{ui:I-undo}}.

## Pagsamahin ang mga body

1. Shift+click ang face ng **target** na body, tapos ang face ng bawat **tool** na body.
2. Piliin ang {{ui:Higit pa}}, tapos {{ui:Combine}}.
3. Sa kanang panel, piliin ang **Operation**:

| Operation | Resulta |
|---|---|
| Join | Ang target at ang tools ay nagiging isang body |
| Cut | Ang tools ay tinatanggal sa target |
| Intersect | Tanging ang bahaging pinagsasaluhan ng target at ng bawat tool ang natitira |

Ang **Target body** ang body na nagpapanatili ng pangalan nito. Lagyan ng tsek o alisin ang tsek sa **Tool bodies**, o gamitin ang **Pumili sa view** at i-click ang mga face nila. Ang **Panatilihin ang tool bodies** ay iniiwan din ang tools sa lugar nila (kapaki-pakinabang para sa mold at core nito). Kapag nagamit na ang isang tool body ng naunang Combine, sasabihin ito ng panel sa halip na pumili ng ibang body.

## Ilipat o kopyahin ang body

1. Piliin ang {{ui:Higit pa}}, tapos {{ui:Move body}}. Naka-tsek ang pinakabagong body; lagyan ng tsek ang mga ililipat.
2. Piliin ang **Move** type:

| Move | Ano ang itatakda mo |
|---|---|
| Translate | **ΔX**, **ΔY**, **ΔZ** sa millimeters |
| Point to point | **Mula sa** at **Hanggang sa**: i-click malapit sa dulo ng edge, sa point feature, o sa isang lugar sa face |
| Rotate about an axis | **Axis** (X, Y, Z, isang axis feature, o **Pick**: isang tuwid na edge, bilog o cylinder) at **Angle (°)** |
| Align a face to a face or plane | **Face to move** (isang flat na face ng body), **Onto** (isang flat na face o plane) |

Ang Align ay pinapaikot ang body para nakapatong ang face nito sa kabilang face, face to face, tapos dumudulas ito sa normal ng face na iyon lang. Ang **Same way** ay pinapaikot ito sa kabilang direksyon. Ang **Copy** ay pinapanatili ang original at nagdaragdag ng inilipat na kopya bilang bagong body.

## I-scale ang body

1. Piliin ang {{ui:Higit pa}}, tapos {{ui:Scale body}}, at lagyan ng tsek ang mga body.
2. I-type ang **Scale**, o alisin ang tsek sa **Uniform** at i-type ang **Scale X**, **Scale Y** at **Scale Z** (sa kahabaan ng world axes).
3. Ang **About** ang punto na nananatili sa lugar: ang sentro ng box ng mga body, o isang punto na pipiliin mo.

Exact ang uniform scale. Ang non-uniform scale ay ginagawang ellipse ang mga bilog: ang cylinder ay nagiging elliptic cylinder, na walang analytic surface na kayang humawak, kaya ang mga curved face ay nagiging B-spline surfaces na nananatili sa loob ng 0.0000004 mm mula sa exact na hugis; nananatiling exact ang flat faces at tuwid na edges. Sinasabi ng panel kung alin ang nangyari. Dapat higit sa zero ang scale factors (gamitin ang {{ui:Mirror}} sa halip).

## Kopyahin sa kahabaan ng path

1. Piliin ang feature na kokopyahin sa history, o huwag pumili ng anuman para kopyahin ang pinakabagong body.
2. Piliin ang {{ui:Higit pa}}, tapos {{ui:Path pattern}}. Ang pinakabagong hindi pa nagagamit na sketch ang kinukuhang path.
3. Sa kanang panel, itakda ang:

| Setting | Ano ang ginagawa nito |
|---|---|
| **Copy** | Bodies (bawat kopya ay bagong body) o Features (idinudugtong o inaalis gaya ng original) |
| **Path** | Lagyan ng tsek ang sketches, o **Pick model edges**; dapat magdugtong nang dulo-sa-dulo ang mga piraso |
| **Count** | Kabuuang bilang, kasama ang original |
| **Spacing** | Equal (kumakalat hanggang dulo ng bukas na path, o paikot sa saradong path) o isang nakatakdang distansya |
| **Orientation** | Follow the path (bawat kopya ay umiikot kasabay nito) o Fixed (nananatiling parallel ang mga kopya) |
| **Reverse direction** | Pumunta sa kabilang direksyon sa path |

Nagsisimula ang mga kopya kung saan pinakamalapit ang path sa original at nakakalat ayon sa haba sa kahabaan ng curve.

Puwede ring kumopya ng bodies ang linear at circular patterns: lagyan ng tsek ang **Copy bodies** sa kanilang panel at piliin ang mga body; bawat kopya ay bagong body.

## Mga limitasyon

- Kailangan ng bodies ang exact kernel; ang mesh kernel ay nagpapanatili ng isang solid at sinasabi ito.
- Ginagawang malapit na B-spline approximations ng non-uniform scale ang mga curved face (tingnan sa itaas), hindi exact na cylinder o cone; hindi pa maiscale nang ganito ang offset surfaces.
- Ang pagsunod sa path sa isang nagtwi-twist na 3D curve ay dinadala ang kopya nang hindi ito binabaluktot; sa flat na path, exact ang pagliko.
- Solids lang ang gumagana sa Combine. Ang surface bodies ay dinudugtong gamit ang {{ui:Stitch}}.

Tingnan din ang [Reference planes, axes at points](topic:reference-geometry) para sa points at planes na "nasa pagitan ng mga object", at [Pattern at mirror features](topic:patterns-mirror).
