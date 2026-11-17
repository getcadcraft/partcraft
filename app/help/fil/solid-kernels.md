---
title: Ang mesh kernel
summary: Ginagawa ng bersyon ng PartCraft na ito ang bawat piyesa gamit ang mesh kernel na tumatakbo sa browser mo. Ano ang ibig sabihin nito para sa bilog na face, volume at file, paano malalaman na gumagana ito, at aling feature ang naghihintay ng exact kernel.
keywords: kernel, mesh, manifold, exact, b-rep, faceted, kurba, opencascade, occt, fillet needs exact, hindi pa nagagawa, offline, webassembly
from: f931645c
---

Ang geometry kernel ang makina na nagpapalit ng history mo tungo sa solid. May isa ang bersyon ng PartCraft na ito: ang **mesh kernel** (manifold-3d). Tumatakbo ito sa iyong computer bilang maliit na WebAssembly program at handa ilang sandali pagkabukas ng app. Walang anumang ipinapadala kahit saan tungkol sa iyong piyesa.

| | Mesh kernel |
|---|---|
| Mga bilog na hugis | Flat na facet. Itinatakda ng **Curves** sa part panel kung gaano kapino |
| Mga volume at area | Ng faceted na solid, bahagyang mas mababa sa mga bilog na bahagi |
| Mga sketch, extrude, cut, revolve, hole, pattern, mirror, reference plane | Oo |
| Fillet at Chamfer | Sa tuwid na edge sa pagitan ng flat na face; ang mga bilugang nagtatagpo ay naka-miter |
| Shell at Draft | Binubuksan ng Shell ang mga flat na face (eksaktong kapal ng pader); ina-tilt ng Draft ang mga flat na face |
| Mga export | STL, 3MF, STEP (exact: isinusulat ang bilog na face sa totoo nitong surface; o faceted), drawing PDF at DXF |
| Mga drawing view | Iginuguhit mula sa mga facet, kasama ang section view |
| Mga face at edge | Pinangalanan at kilala ayon sa uri (flat, cylinder, cone, sphere, torus; straight, circle), kinuha mula sa mga sketch: ginagamit ito ng Simulation, Generative at Manufacture workspaces, ng {{ui:Sukatin}}, ng pagpili at ng hole table |

Ang chip malapit sa dulong kanan ng status bar ay nagsasabing **Mesh kernel** habang binubuo nito ang piyesa mo.

## Ano ang naghihintay ng exact kernel

Pinapanatili ng exact (B-rep) kernel ang totoong bilog, silindro at kono, at makinis na fillet sa anumang edge, sweep, loft, surface, sheet metal, rib, maraming body, at STEP import na may kurbadong face na nananatiling exact, at nakabatay ang mga ito dito. (Hindi naghihintay dito ang exact na STEP export: alam ng mesh kernel ang totoong surface ng bawat face mula sa sketch, at iyon ang isinusulat ng export.) Gumamit ng OpenCascade para dito ang mga naunang lab build ng PartCraft. Hindi akma ang lisensya nito (LGPL) sa release na ito, kung saan Apache-2.0 ang bawat app at tanging permissively licensed na library lang ang gamit, kaya hindi ito kasama. Walang petsa ang anuman dito.

Hanggang doon, sasabihin ng mga feature na ito ang **Hindi pa nagagawa** kapag pinili mo ang mga ito: ibinibigay ng status bar ang dahilan, at nagtatapos ang tooltip ng kanilang button sa "hindi pa nagagawa (kailangan ng exact kernel)". Inililista ng [Ano ang hindi pa nagagawa](topic:not-built-yet) ang bawat isa kasama ang dapat gawin sa halip.

Bumubukas pa rin ang piyesang ginawa gamit sila sa naunang build. Nananatili sa history ang mga feature na iyon na minarkahang hindi pa nagagawa (i-hover ang isa para malaman ang dahilan), nabubuo ang natitirang bahagi ng piyesa, at hindi binabago ng pag-save ang mga ito.

## Bilog na face at Curves

Iginuguhit ng mesh kernel ang bilog bilang polygon. Itinatakda ng **Curves** sa part panel kung ilang side ang makukuha ng buong bilog; mas makinis tingnan at mas malapit sa totoong halaga ang mas maraming side, pero mas matagal bumuo. Ang volume, area at distansya mula sa {{ui:Sukatin}} ay mula sa faceted na solid na ito: para sa hole o boss, bahagyang mas maliit ang mga ito kaysa sa bilog na hugis.

## Online at offline

Bahagi ng sariling download ng app ang mesh kernel. Para magtrabaho nang walang koneksyon, i-save ang PartCraft para sa offline na paggamit habang online ka: piliin ang {{ui:I-save para sa offline}} sa app bar at maghintay hanggang sabihing **Handa na offline**. Detalye: [Pagtatrabaho offline](common:offline).
