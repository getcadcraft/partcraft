---
title: Mga reference plane, axis at punto
summary: Gumawa ng plane na naka-offset mula sa face, nakaanggulo, dumadaan sa tatlong punto, nasa gitna, tangent sa cylinder, patayo sa edge, o dumadaan sa edge at punto; mga axis; mga punto sa gitna ng edge, sa mga tawiran at sa sulok ng plane; mag-sketch sa mga ito at gamitin bilang revolve axis, direksyon ng pattern at mirror plane.
keywords: datum, sa pagitan ng mga bagay, midpoint, intersection point, plane sa pamamagitan ng edge at punto, reference plane, work plane, construction plane, datum plane, offset plane, plane sa anggulo, midplane, tangent plane, reference axis, construction axis, datum axis, reference point, work point, sketch sa plane
from: e7eb6fc1
---

Ang reference geometry ay ang scaffolding na pinagbabatayan ng mga feature: isang **plane** na mapagsasketchan kung saan walang face, isang **axis** na paiikutan ng revolve o pattern, isang **punto** kung saan titigil ang extrude. Wala itong sariling materyal. Lumalabas sa view ang mga plane bilang maputlang parisukat, ang mga axis bilang putol-putol na linya, at ang mga punto bilang maliliit na krus; lahat ng tatlo ay sumasali sa history at sumusunod sa pinanggalingan nila kapag nagbago ang sukat sa itaas.

Nasa menu na {{ui:More}} ng grupong Features ang mga ito: {{ui:Plane}}, {{ui:Axis}}, {{ui:Point}}.

## Gumawa ng plane

1. I-click ang flat face, o base plane sa history, para magsimula mula dito (opsyonal).
2. Piliin ang {{ui:More}}, saka {{ui:Plane}}. Magsisimula ito bilang offset plane na 20 % ng laki ng part ang layo mula sa pinili mo (o mula sa top plane).
3. Sa kanang panel, piliin ang **Type** at ang mga reference nito:

| Uri | Mga reference | Mga numero |
|---|---|---|
| Offset mula sa plane o face | **Mula sa plane** | **Distansya (mm)**, negatibo para sa kabilang panig |
| Nakaanggulo, dumadaan sa edge o axis | **Mula sa plane**, **Turn about** (world axis, axis feature, o napiling tuwid na edge) | **Anggulo (°)** |
| Dumadaan sa tatlong punto | **Punto 1**, **Punto 2**, **Punto 3** | — |
| Midplane sa pagitan ng dalawa | **Unang plane**, **Ikalawang plane** (parallel: nasa gitna; nagtatagpo: ang plane na naghahati sa anggulo) | — |
| Tangent sa cylinder | **Cylinder** (cylindrical na face), **Malapit na punto** (aling panig) | — |
| Patayo sa edge, sa isang punto | **Edge**, **At point** (dumadaan ang plane sa punto ng edge na pinakamalapit dito, at dumadaan din sa punto) | — |
| Dumadaan sa edge at punto | **Tuwid na edge** (o axis), **Dumadaan sa punto** | — |
| Patayo sa edge sa gitna nito | **Edge** (nasa kalagitnaan nito, patayo rito doon), o kung walang edge, **Punto 1** at **Punto 2** (ang plane ay nasa gitna ng dalawa) | — |

Bawat reference ay may button na **Pick**: piliin ito, saka i-click sa view. Ang plane slot ay tumatanggap ng base plane, reference plane o flat face; ang point slot ay tumatanggap ng dulo ng edge (i-click malapit sa dulong iyon), point feature, o isang lugar sa face; ang edge slot ay tumatanggap ng edge. Kinakansela ng {{key:Esc}} ang pick. Binabaligtad ng **Flip the normal** ang plane (kung saang direksyon nakaharap ang sketch dito).

Sa bersyong ito, ang slot na nangangailangan ng edge o cylinder face (Tangent sa cylinder, at ang mga Edge slot) ay sumasagot ng "hindi pa nabubuo": gumamit na lang ng punto o axis.

## Mag-sketch sa plane

Piliin ang plane (sa history o sa pag-click sa parisukat nito sa view) at piliin ang {{ui:Sketch}}, o ang **Sketch dito** sa panel nito. Sumusunod ang sketch sa plane: kapag binago mo ang distansya ng plane, gumagalaw din ang sketch at bawat feature dito.

## Mga axis at punto

- {{ui:Axis}}: dumadaan sa dalawang punto, ang axis ng cylinder o cone, kung saan nagtatagpo ang dalawang plane, sa kahabaan ng tuwid na edge (o ang axis ng bilog na edge), o patayo sa face na dumadaan sa punto.
- {{ui:Point}}: sa mga coordinate, sa vertex o sketch point, o sa gitna ng bilog na edge, pati ang mga punto na "sa pagitan ng mga bagay":

| Uri ng punto | Mga reference |
|---|---|
| Gitna ng edge (o sa pagitan ng dalawang punto) | **Edge** (nasa kalagitnaan ng haba nito, pati sa arc at curve), o kung walang edge, **Punto 1** at **Punto 2** |
| Kung saan nagtatagpo ang edge o axis at isang face o plane | **Edge** (tuwid o kurba) o axis, at **Meets plane** (plane o flat face) o **Or a face** (flat face o cylinder). Tumatawid ang bilog sa plane nang dalawang beses, at ang linya ay dumadaan sa cylinder nang dalawang beses: kinukuha ng **The other crossing** ang ikalawa |
| Kung saan nagtatagpo ang tatlong plane | **First**, **Second** at **Third plane** (plane o flat face) |

Bawat isa ay nabibigo na may simpleng mensahe kapag hindi tugma ang mga reference: linyang parallel sa plane, linyang hindi tumatama sa cylinder, edge na hindi umaabot sa plane, tatlong plane na hindi nagtatagpo sa iisang punto, o punto sa linyang dapat mag-ayos ng plane.

Gamitin ang mga ito sa ibang feature:

| Saan | Paano |
|---|---|
| Revolve | **Axis**: piliin ang axis feature mula sa listahan (dapat nasa plane ng sketch) |
| Circular pattern | **Axis**: ang axis feature |
| Linear pattern | **Direction**: axis feature, o plane (ang normal nito) |
| Mirror | **Mirror plane**: reference plane |
| Extrude | **End**: Hanggang face o plane, Hanggang vertex (point feature). Hindi pa nabubuo sa bersyong ito (kailangan nito ng exact kernel) |
| Draft | **Neutral plane** |

## Kapag nawala ang reference

Ang plane na ginawa mula sa face na wala na ay nabibigo na may mensaheng nagpapangalan dito, gaya ng "Wala na sa Extrude1 ang face na kinapapatungan nito." Hindi ito kailanman inililipat sa ibang face. Mamarkahan ang mga sketch at feature dito na "hindi pa nabubuo" hanggang pumili ka ng bagong reference; mananatili sa dating anyo ang natitirang bahagi ng part.

:::note
Binubuo ng bersyong ito ang bawat part gamit ang mesh kernel, na gumagawa ng mga plane, axis at punto mula sa base plane, flat face na ginawa ng Extrude o Revolve, sketch point, coordinate at iba pang reference feature. Anumang nangangailangan ng edge, dulo ng edge o kurbadong face ay nangangailangan ng exact kernel: hindi pa nabubuo sa bersyong ito ("Gumagamit ito ng face o edge ng solid, na mahahanap lamang ng exact kernel: hindi pa nabubuo sa bersyong ito.").
:::
