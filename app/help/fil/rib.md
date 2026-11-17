---
title: Mga rib at gusset
summary: Patibayin ang part gamit ang rib na iginuhit bilang isang linya: pupunuin nito ang espasyo mula sa linya hanggang sa mga pader, sa itinakdang kapal sa kabuuan ng sketch plane, sa panig na pipiliin mo.
keywords: rib, gusset, web, stiffener, brace, bracket, corner support, manipis na pader, patibayin
from: 5c218881
---

:::note
**Hindi pa naitatayo sa bersyong ito.** Kailangan ng rib ang exact geometry kernel, na wala sa bersyong ito ng PartCraft: binubuo nito ang bawat part gamit ang mesh kernel. Sinasabi ng [Ano ang hindi pa naitatayo](topic:not-built-yet) kung ano ang gagawin sa halip. Inilalarawan ng natitirang pahinang ito kung paano ito gumagana sa exact kernel.
:::

Ang **rib** (o gusset) ay manipis na pader na nagpapatibay sa isang part, gaya ng tatsulok sa loob ng sulok ng L-bracket. Ang iginuguhit mo lamang ay ang malayang gilid nito: pinupuno ng PartCraft ang espasyo sa pagitan ng linyang iyon at ng mga pader. Kailangan nito ang **exact kernel** (tingnan ang [Ang mesh kernel](topic:solid-kernels)).

## Magdagdag ng rib

1. Gumawa ng plane na dumadaan sa gitna ng lugar kung saan pupunta ang rib (para sa L-bracket na 40 ang lalim, isang plane na 20 sa harap ng sketch nito: tingnan ang [Mga reference plane, axis at point](topic:reference-geometry)).
2. Mag-sketch dito ng **isang line** mula pader hanggang pader, o ilang line na magkakasunod para sa baluktot na gilid ng rib. Puwedeng huminto nang maikli sa mga pader ang line: ipinagpapatuloy ang mga dulo nito hanggang magtagpo ang mga ito sa pader.
3. Piliin ang sketch at piliin ang {{ui:Higit pa}} › {{ui:Rib}}.

Pinupuno ng rib ang espasyo mula sa line hanggang sa mga pader sa panig na patungo sa gitna ng part, kaya napupunta ang gusset sa loob ng sulok. Kung bukas ang panig na iyon at sarado ang kabila, binabaligtad ito ng PartCraft para sa iyo at sinasabi ito.

## Mga setting

- **Thickness (mm)** ang kapal ng rib sa kabuuan ng sketch plane. Puwede itong kontrolin ng parameter.
- **Thickness** (ang pagpipiliang nasa ilalim nito): **Centred on the sketch plane**, **In front of the plane** (sa kahabaan ng normal nito) o **Behind the plane**.
- **Flip** ang pumupuno sa kabilang panig ng line.

## Mga mensahe

- **On this side the rib's edge never meets the body** — walang nagsasara sa espasyo sa panig na iyon: lagyan o alisin ang tsek sa **Flip**, o ilipat ang line para may mga pader na magtatakda rito.
- **A rib needs one open chain of lines in its sketch** — ang sketch ay may saradong hugis, arc o spline, o mga line na hindi nagdudugtong dulo sa dulo.
- **The rib's edge runs inside the body there** — nasa loob ng solid ang line; iguhit ito sa bukas na espasyo sa pagitan ng mga pader.
