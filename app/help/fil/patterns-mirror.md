---
title: Mga pattern at mirror na feature
summary: Ulitin ang mga feature nang sunod-sunod gamit ang Linear, ikutin sa isang axis gamit ang Circular, at kopyahin ang mga feature o ang buong body sa kabila ng isang plane gamit ang Mirror.
keywords: pattern, linear pattern, circular pattern, polar array, array, mirror, simetriko, kopyahin ang mga feature, bolt circle, seed, mirror body
from: 702e9edb
---

Kinokopya ng mga pattern at mirror ang mga feature na nabuo mo na. Bahagi ng history ang mga kopya: kapag binago mo ang orihinal, susunod ang mga kopya.

Ang kinokopya ay ang ginagawa ng feature: ang boss pattern ay nagdadagdag ng materyal, ang cut o hole pattern ay nag-aalis nito. Puwedeng i-pattern at i-mirror muli ang mga pattern. Puwede ring kopyahin ang na-import na STEP solid; hindi kayang kopyahin ang fillet, chamfer at shell.

## Linear pattern

1. Piliin sa history ang feature na kokopyahin (halimbawa, Hole o Cut). Kapag walang napili, ang huling solid feature ang gagamitin.
2. Piliin ang {{ui:Linear}}. Tatlong kopya ang lilitaw na 20 mm ang layo sa X.
3. Sa right panel, itakda:

| Setting | Ano ang ginagawa | Default |
|---|---|---|
| **Features to copy** | Lagyan ng tsek ang bawat feature na kokopyahin. Nakalista lamang ang mga feature sa itaas ng pattern | Ang napiling feature |
| **Direction** | X axis, Y axis, Z axis, isang line o centerline mula sa anumang naunang sketch, ang axis ng revolve, o isang piniling edge | X axis |
| **Spacing (mm)** | Distansya sa pagitan ng magkakatabi | 20 |
| **Count** | Kabuuang bilang, **kasama ang orihinal** (1 hanggang 1000) | 3 |
| **Reverse direction** | Pupunta ang mga kopya sa kabilang direksyon | Off |

### Gamitin ang edge bilang direksyon

1. I-click ang tuwid na edge ng part sa view. Sinasabi ng right panel na **Edge** at ipinapakita ang haba nito.
2. Piliin ang {{ui:Linear}}: tatakbo ang pattern sa kahabaan ng edge na iyon.

O piliin ang pattern, pumili ng edge, at piliin ang "Picked edge (gamitin ang napili ngayon)" sa **Direction**. Nakapirmi sa espasyo ang napiling edge: hindi ito sumusunod sa mga susunod na pagbabago. Ang sketch line naman ay sumusunod sa sarili nitong sketch.

## Circular pattern

1. Piliin ang feature na kokopyahin (halimbawa, isang butas malapit sa gilid ng disc).
2. Piliin ang {{ui:Circular}}. Anim na kopya ang lilitaw, pantay ang agwat sa buong paligid.
3. Itakda:

| Setting | Ano ang ginagawa | Default |
|---|---|---|
| **Features to copy** | Gaya sa Linear | Ang napiling feature |
| **Axis** | X, Y o Z axis, isang sketch line, ang axis ng revolve, o isang piniling edge | Ang axis ng huling revolve kung mayroon, kung wala ay ang Y axis |
| **Angle (°)** | Ang 360 ay naglalagay ng pantay na agwat ng mga kopya sa buong paligid. Ang mas maliit ay ikinakalat ang mga ito sa anggulong iyon, nasa dulo ang una at huli | 360 |
| **Count** | Kabuuang bilang, kasama ang orihinal | 6 |
| **Reverse direction** | Umiikot sa kabilang direksyon | Off |

Dumadaan sa origin ang mga world axis. Para sa disc na wala sa gitna ng origin, gumamit ng sketch centerline o axis ng revolve.

### Halimbawa: ang walong butas ng bolt ng isang flange

1. I-revolve ang flange (tingnan ang [Mag-revolve ng turned part](topic:revolve)) sa paligid ng Y axis.
2. Mag-sketch sa patag na top face ng flange, maglagay ng isang point sa bolt circle, at gumawa ng Hole.
3. Habang napili ang Hole, piliin ang {{ui:Circular}}. Nakatakda na ang axis sa "Axis of Revolve1".
4. Itakda ang **Count** sa `8`.

## Mirror

1. Piliin sa history ang feature na i-mirror, o walang piliin para i-mirror ang **buong body hanggang sa ngayon**.
2. Piliin ang {{ui:Mirror}}. Mag-mirror ito sa **Right plane**.

Para i-mirror ang buong body sa isang face ng part, i-click muna ang patag na face na iyon, saka piliin ang {{ui:Mirror}}. (Ang pag-click sa face ay nag-aalis ng pagkakapili sa history, kaya palaging buong body ang mami-mirror.)

Mga setting sa right panel:

- **Mirror**: lagyan ng tsek ang **The whole body (as built so far)**, o alisin ang tsek at piliin ang mga feature na kokopyahin.
- **Mirror plane**: Front plane, Top plane, Right plane, ang face na ginagamit nito ngayon ("A face of Extrude1" o "A fixed plane"), o "The face picked now". Para i-mirror ang napiling feature sa isang face: piliin ang Mirror sa history, i-click ang face sa view, at piliin ang "The face picked now".

Ang pag-mirror ng buong body sa isang face ay nagdodoble sa part, halimbawa mula half bracket tungo sa buong bracket.

## Mga mensahe

- "Build a feature to copy first." o "Build a solid first." Wala pang solid na makokopya.
- "Choose the features to copy." Walang tsek ang alinmang kahon ng **Features to copy**.
- "Extrude2 has no solid to copy." Nabigo ang feature na iyon o naka-suppress.
- "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Hindi maaaring i-pattern o i-mirror ang fillet, chamfer at shell; mag-pattern muna, saka mag-fillet.
- "There is no body to mirror yet."

:::note
Hindi maaaring laktawan nang isa-isa ang mga kopya ng pattern, at hindi maaaring sumunod ang pattern sa isang sketch curve. Hindi pa rin naitatayo ang sketch pattern at sketch mirror: iguhit nang mano-mano ang paulit-ulit na sketch geometry, o gamitin ang **Add by coordinates**.
:::
