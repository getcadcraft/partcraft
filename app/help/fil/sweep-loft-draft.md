---
title: Sweep, loft at draft
summary: I-sweep ang closed profile sa kahabaan ng path ng sketch curves o model edges, i-loft sa mga section na nasa magkakaibang plane, at magdagdag ng draft sa mga face; kasama ang mga opsyon, ang eksaktong resulta, at ang mga mensahe.
keywords: sweep, swept boss, swept cut, pipe, path, loft, lofted boss, timpla ng sections, ruled, draft, draft angle, taper faces, neutral plane, direksyon ng paghila, molding
from: 9d637981
---

:::note
**Sa bersyong ito** hindi pa nabubuo ang sweep at loft: kailangan nila ng exact geometry kernel, na wala sa bersyong ito ng PartCraft. [Ano ang hindi pa nabubuo](topic:not-built-yet) ang nagsasabi kung ano ang gagawin sa halip; inilalarawan ng mga seksyong Sweep at Loft kung paano sila gumagana sa exact kernel. **Gumagana ang Draft** sa mga flat face: ang mesh kernel ang gumagawa nito, na may parehong resultang ibinibigay ng exact kernel.
:::

Lahat ng tatlo ay nasa menu na {{ui:More}} ng grupong Features (tingnan ang [The mesh kernel](topic:solid-kernels)). Bawat isa ay maaaring mag-join ng material, mag-cut dito, panatilihin lang ang overlap (**Intersect**), o gumawa ng **New body** (sweep at loft: **Operation** sa panel).

## Sweep

Inililipat ng sweep ang isang closed profile sa kahabaan ng path: mga tubo, hawakan, springs ng wire, rails.

1. Iguhit ang **path** sa isang sketch: mga linya at arko na magkakabit dulo-sa-dulo (o gamitin ang model edges, sa ibaba).
2. Iguhit ang **profile** sa ibang sketch na ang plane ay dumadaan sa isang dulo ng path, halimbawa isang bilog sa top plane sa simula ng path na iginuhit sa front plane.
3. Piliin ang profile sketch at piliin ang {{ui:More}}, saka {{ui:Sweep}}. Ang pinakabagong ibang sketch ang magiging path.

Sa panel:

| Setting | Ano ang ginagawa |
|---|---|
| **Path** | Lagyan ng tsek ang mga sketch na bumubuo sa path (ilang sketch ay nagdurugtong dulo-sa-dulo para maging isang 3D path); ang **Pick model edges** ay nagdaragdag ng mga edge ng piyesa |
| **Orientation** | Sundan ang path (default), Frenet, Fixed (nananatiling parallel sa profile ang mga section), Keep a direction, Along a guide curve |
| **End scale** | Lumalaki o lumiliit nang linear ang profile hanggang sa laking ito sa dulo (1 = pare-pareho) |

Namimitera ang matatalas na sulok sa path. Ang bilog na may radius 5 na na-sweep sa 100 mm na linya ay cylinder na eksaktong 2500π mm³; sa isang quarter arc na radius 50, quarter torus na 625π² mm³.

## Loft

Pinaghahalo ng loft ang dalawa o higit pang section na nasa magkakaibang plane.

1. Iguhit ang bawat section sa sarili nitong sketch (tig-isang closed loop), sa base planes, reference planes (tingnan ang [Reference planes, axes and points](topic:reference-geometry)) o sa mga face.
2. Piliin ang {{ui:More}}, saka {{ui:Loft}}. Bawat hindi pa nagagamit na one-loop sketch ay nagiging section, ayon sa history order.

Inililista ng panel ang mga section ayon sa pagkakasunod (ang **Up** ay nag-aayos ulit ng ayos, ang **Remove** ay nag-aalis ng isa); ang **Add a sketch** ay nagdaragdag ng isa pa, ang **Pick a face** ay nagdaragdag ng flat face ng piyesa. Ang **Ruled** ay gumagawa ng flat face sa pagitan ng mga section sa halip na makinis na timpla. Sa pagitan ng dalawang parisukat, pareho silang frustum (parisukat na 40 mm patungong parisukat na 20 mm sa loob ng 30 mm: eksaktong 28000 mm³).

Ang mga section na magkaiba ang bilang ng gilid (parisukat patungong tatsulok) ay itinutugma ng OpenCascade, na maaaring magpaikot sa mga side face; nagbababala ang feature. Iguhit ang mga section na may parehong bilang ng gilid, simula sa magkakatugmang sulok, para sa pinakamalinis na resulta.

### Guide rails

Ang guide rails ay mga kurbang dapat sundan ng gilid ng loft mula sa unang section hanggang sa huli, para sa umbok, bewang o pagluwang na ikaw mismo ang gumuhit.

1. Iguhit ang dalawa o higit pang rail: bukas na kurba (linya, arko, spline) na tumatakbo mula sa unang section hanggang sa huli at tumatawid sa bawat section nang isang beses. Maaaring maglaman ang isang sketch ng ilang rail: bawat hiwalay na chain dito ay sarili nitong rail. Iguhit ang rail para tunay na magtagpo sa bawat section: i-snap ang mga dulo nito sa mga punto ng section.
2. Sa Loft panel, sa ilalim ng **Guide rails**, lagyan ng tsek ang mga sketch na naglalaman nito, o i-click ang {{ui:Pick model edges as rails}} at i-click ang mga edge ng piyesa ({{key:Esc}} ang tatapos).

Kapag may rails, ang loft ay isang Gordon surface sa mga section at rails (tingnan ang [Surfaces through a curve network](topic:gordon-surfaces)), na tinatakpan nang flat sa dalawang dulo para maging solid. Sinasabi ng panel kung gaano kalapit ang pagsunod nito sa mga ito. Dapat sketch ang bawat section (hindi tatanggap ng rail ang point o face), at hindi naaangkop ang **Ruled**. Tinatanggihan ang rail na lumalampas sa section nang higit sa 0.01 mm, kasama ang agwat.

Nasubok: dalawang bilog (20 mm at 10 mm ang diyametro, sa 40 mm na layo) na may apat na tuwid na rail ay nagbibigay ng volume ng cone frustum sa loob ng 0.000002 %; ang mga arkong umuumbok nang 5 mm ay nagbibigay ng barrel na sumusunod sa bawat rail sa loob ng 0.00001 mm.

## Draft

Ikinikiling ng draft ang mga face para lumabas sa mold ang piyesa.

1. Piliin ang {{ui:More}}, saka {{ui:Draft}} (o {{key:Shift}}+click muna sa mga face). Kung walang napili, nasa pick mode ka: i-click ang bawat face na ikikiling, saka {{ui:Done}}.
2. Itakda ang **Angle (°)**, ang **Neutral plane** (kung saan pinananatili ng mga face ang laki nila) at ang **Pull direction** (ang normal ng neutral plane bilang default).

Ang positibong anggulo ay ikinikiling ang face papasok sa kahabaan ng pull at nag-aalis ng material; ang negatibo ay nagdaragdag nito. Nagsisimula ang neutral plane sa Top plane. Sa bersyong ito, flat face lang ang maaaring i-draft: ang cylinder, cone o freeform face ay magsasabing "Draft: sa bersyong ito flat faces lang (ang mesh kernel ang gumagawa nito)." Ang apat na gilid ng block na 100 × 100 × 50 na naka-draft ng 5° sa paligid ng ilalim nito ay nagiging frustum na eksaktong h/3·(a² + b² + ab), na may b = a − 2h·tan 5°.

## Mga mensahe

| Mensahe | Ano ang gagawin |
|---|---|
| "Dapat dumaan sa isang dulo ng path ang plane ng profile …" | Ilipat ang profile sketch sa simula (o dulo) ng path |
| "May puwang ang path: hindi nagdurugtong dulo-sa-dulo ang mga kurba nito …" | Pagdugtungin ang mga kurba ng path; sa magkakahiwalay na sketch, dapat eksaktong magtagpo ang mga dulo nila |
| "Kailangan ng loft section ng eksaktong isang closed loop" | Hatiin ang sketch, o alisin ang dagdag na loop |
| "… hindi ma-draft sa paligid ng neutral plane na ito …" | Parallel ang face sa neutral plane, o hindi ito nagtatagpo rito |
| "Draft: sa bersyong ito flat faces lang (ang mesh kernel ang gumagawa nito)." | Curved ang napiling face. Alisin ito; i-draft lang ang mga flat face |

:::note
Hindi pa nabubuo: twisting sweeps, thin-wall at surface sweeps, loft guide rails at end tangency, draft sa cylinders, cones at freeform faces.
:::
