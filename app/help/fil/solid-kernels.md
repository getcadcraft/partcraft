---
title: Ang mesh kernel
summary: Binubuo ng bersyong ito ng PartCraft ang bawat piyesa gamit ang mesh kernel na tumatakbo sa browser mo. Ano ang ibig sabihin nito para sa mga bilog na face, volume at file, paano malalamang gumagana ito, at aling mga feature ang naghihintay ng exact kernel.
keywords: kernel, mesh, manifold, exact, b-rep, faceted, curves, opencascade, occt, fillet nangangailangan ng exact, hindi pa nagagawa, offline, webassembly
from: 68d32d16
---

Ang geometry kernel ang makinang nagbabago ng history mo tungo sa solid. May ganito ang bersyong ito ng PartCraft: ang **mesh kernel** (manifold-3d). Tumatakbo ito sa computer mo bilang maliit na WebAssembly program at handa ilang sandali pagkatapos mabuksan ang app. Walang ipinapadala kahit saan tungkol sa piyesa mo.

| | Mesh kernel |
|---|---|
| Mga bilog na hugis | Flat facet. Itinatakda ng **Curves** sa panel ng piyesa kung gaano kapino |
| Volume at area | Mula sa faceted na solid, bahagyang mas mababa sa mga bilog na piyesa |
| Sketch, extrude, cut, revolve, butas, pattern, mirror, reference plane | Oo |
| Fillet at Chamfer | Sa mga tuwid na edge sa pagitan ng flat face; ang mga bilog na nagtatagpo ay mitred |
| Shell at Draft | Binubuksan ng Shell ang mga flat face (tumpak na kapal ng pader); tinatagilid ng Draft ang mga flat face |
| Mga export | STL, 3MF, STEP (faceted), drawing PDF at DXF |
| Drawing view | Iginuguhit mula sa mga facet, kasama ang section view |
| Mga face at edge | Pinangalanan at kilala ayon sa uri (flat, cylinder, cone, sphere, torus; straight, circle), galing sa mga sketch: ginagamit ang mga ito ng mga workspace na Simulation, Generative at Manufacture, ng Measure, ng pagpili at ng hole table |

Ang chip malapit sa dulong kanan ng status bar ay nagsasabing **Mesh kernel** habang binubuo nito ang piyesa mo.

## Ano ang naghihintay ng exact kernel

Pinananatili ng exact (B-rep) kernel ang tunay na bilog, silindro at cone, at makinis na fillet sa anumang edge, sweep, loft, surface, sheet metal, rib, maraming body, STEP import at exact STEP export. Ginamit ng mas naunang lab build ng PartCraft ang OpenCascade para dito. Hindi akma sa release na ito ang lisensya nito (LGPL), kung saan Apache-2.0 ang bawat app at tanging permissibong lisensyadong library lang ang ginagamit, kaya wala ito sa kasama. Walang petsa ang anuman dito.

Hanggang noon, nagsasabing **Hindi pa nagagawa** ang mga feature na iyon kapag pinili mo ang mga ito: ibinibigay ng status bar ang dahilan, at nagtatapos ang tooltip ng kanilang button sa "hindi pa nagagawa (kailangan ng exact kernel)". Inilalista ng [Ano ang hindi pa nagagawa](topic:not-built-yet) ang bawat isa kasama ang dapat gawin sa halip.

Nabubuksan pa rin ang piyesang ginawa gamit ang mga ito sa naunang build. Nananatili sa history ang mga feature na iyon na minarkahang hindi pa nagagawa (i-hover ang isa para sa dahilan), nabubuo ang natitirang bahagi ng piyesa, at hindi binabago ng pag-save ang mga ito.

## Mga bilog na face at Curves

Iginuguhit ng mesh kernel ang bilog bilang polygon. Itinatakda ng **Curves** sa panel ng piyesa kung ilang gilid ang makukuha ng buong bilog; mas maraming gilid, mas makinis ang itsura at mas malapit ang sukat sa tunay na halaga, at mas matagal ang pagbuo. Ang volume, area at distansya mula sa {{ui:Measure}} ay mula sa faceted na solid na ito: para sa butas o boss, bahagyang mas maliit ang mga ito kaysa sa bilog na hugis.

## Online at offline

Bahagi ng sariling download ng app ang mesh kernel. Para magtrabaho nang walang koneksyon, mag-save ng PartCraft para sa offline na gamit habang online ka: piliin ang {{ui:I-save para sa offline}} sa app bar at maghintay hanggang sabihing **Handa na offline**. Detalye: [Pagtatrabaho offline](common:offline).
