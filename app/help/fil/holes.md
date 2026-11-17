---
title: I-drill ang mga butas at counterbore sa mga punto ng sketch
summary: Maglagay ng mga punto sa sketch sa isang face, gumawa ng simple, counterbored, countersunk o tapped (ISO metric) na butas sa bawat punto, itakda ang diameter at lalim, at ayusin ang mga butas na nadrill sa maling direksyon.
keywords: hole, hole wizard, drill, modelled thread, 3D printing, counterbore, cbore, countersink, csink, tapped hole, thread, tap drill, metric thread, M6, through all, blind hole, bolt hole, punto, sentro ng butas
from: 8e1eef83
---

{{ui:Hole}} ay nagdi-drill ng isang butas sa bawat maluwag na punto ng sketch. Ang maluwag na punto ay ginawa gamit ang Point tool, hindi ang dulo ng linya o gitna ng bilog.

## I-drill ang mga butas sa isang face

1. I-click ang patag na face na pagdi-drillan, pagkatapos piliin ang {{ui:Sketch on this face}}.
2. Pindutin ang {{key:P}} at i-click kung saan napupunta ang bawat butas. I-dimension ang mga punto mula sa mga gilid o sa origin kung mahalaga ang posisyon nila (tingnan ang [Ganap na tukuyin ang sketch](topic:relations-dimensions)).
3. Piliin ang {{ui:Exit}}.
4. Piliin ang {{ui:Hole}}.

Dumadaan sa piyesa ang mga butas, 6 mm ang lapad. Ipinapakita ng kanang panel ang **Holes**: ilan ang nagawa, "isang bawat punto ng sketch".

**Isang butas, mabilis:** i-click ang patag na face kung saan pupunta ang butas at piliin ang {{ui:Hole here}} sa kanang panel. Nagdadagdag ang PartCraft ng sketch sa face na may isang punto kung saan ka nag-click, at isang Hole na dumadaan sa piyesa, sa isang hakbang lang. Mag-type ng numero agad at pindutin ang {{key:Enter}} para sa diameter nito. Para ilagay ito nang eksakto, buksan ang bagong sketch at i-dimension ang punto.

**Aling sketch ang ginagamit:** ang sketch na kakasara mo lang o ang napiling sketch; kung wala, ang pinakabagong hindi nagamit na sketch na may maluwag na punto. Kung wala talaga: "Gumawa muna ng sketch na may mga punto kung saan pupunta ang mga butas (Sketch on a face, pagkatapos Point)."

## Mga setting

| Setting | Mga pagpipilian | Default |
|---|---|---|
| **Type** | Simple, Counterbore, Countersink, Tapped (ISO metric) | Simple |
| **Diameter (mm)** | Ang diameter ng butas | 6 |
| **Through all** | Kapag may check: dumadaan sa buong piyesa. Alisin ang check para sa bulag na butas | May check |
| **Depth (mm)** | Lumalabas kapag wala ang check ng Through all | 10 |
| **Counterbore ⌀** | Lumalabas para sa Counterbore: ang diameter ng mas malapad na uka | 11 |
| **Counterbore depth** | Lumalabas para sa Counterbore | 6 |
| **Reverse direction** | Nagdi-drill sa kabilang gilid ng eroplano ng sketch | Naka-off |

Nagdi-drill ang mga butas sa materyal, patayo sa eroplano ng sketch. Sinusukat ang lalim ng bulag na butas mula sa eroplano ng sketch; patag ang ilalim nito.

## Counterbored na butas para sa bolt

1. Gawin ang mga butas gaya ng nasa itaas.
2. Itakda ang **Type** sa **Counterbore**.
3. Itakda ang **Diameter (mm)** sa `6.6` (clearance para sa M6 bolt), **Counterbore ⌀** sa `11` at **Counterbore depth** sa `6.5`.

Dapat mas malapad ang counterbore kaysa sa butas ("The counterbore must be wider than the hole.") at, para sa bulag na butas, mas mababaw ito kaysa sa butas ("The counterbore must be shallower than the hole.").

## Bolt circle

Para sa mga butas na pantay ang pagitan sa paligid ng isang sentro, gumawa ng **isang** butas at i-pattern ito: piliin ang Hole feature, pagkatapos piliin ang {{ui:Circular}} (tingnan ang [Pattern and mirror features](topic:patterns-mirror)). Susunod ang pattern kapag binago mo ang laki ng butas.

## Kapag mali ang direksyon ng butas

- "There is nothing to drill on that side of the sketch. Try reversing the direction." Walang maidi-drill sa panig na iyon ng sketch. Subukang baliktarin ang direksyon. Nasa malayong panig ng materyal ang sketch. Lagyan ng check ang **Reverse direction**.
- "Put sketch points where the holes go (Point tool), then make the hole." Maglagay ng mga punto ng sketch kung saan pupunta ang mga butas (Point tool), pagkatapos gawin ang butas. Walang maluwag na punto ang sketch. Hindi binibilang ang mga dulo ng linya at gitna ng bilog.
- "There is nothing to drill yet." Wala pang mada-drillan. Kailangan ng butas ng solid. Gumawa muna ng boss.

## Mga butas sa assembly

May axis ang bawat butas. Sa assembly, maaaring ilagay ng **Centre on** ang isang joint sa axis ng butas, nakalista bilang "Hole1, hole 2", kaya nakahanay dito ang pin o bolt na piyesa. Tingnan ang [Build an assembly](topic:build-assembly).

## Countersunk na butas

Itakda ang **Type** sa **Countersink**, pagkatapos ang **Countersink ⌀** (sa surface) at **Countersink angle**: 90° (ISO metric flat-head screws) o 82° (inch screws). Kunin ang countersink diameter mula sa datos ng gumawa ng turnilyo (bahagyang mas malaki kaysa sa diameter ng ulo ng turnilyo). Ang face ng kono ay pinangalanang "countersink" sa mga panel.

## Tapped na butas

Itakda ang **Type** sa **Tapped (ISO metric)** at piliin ang **Thread**, M2 hanggang M24 coarse. Dinadrill ang butas sa laki ng tap drill mula sa talahanayan sa ibaba (nominal diameter minus pitch, sa drill series, gaya ng nakalista sa ISO 2306 para sa 6H thread); hindi ginagamit ang kahon ng **Diameter (mm)**. Para sa bulag na butas, itinatakda ng **Thread depth (mm)** kung gaano kalalim ang thread.

| Thread | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tap drill ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Sa simula, **cosmetic** ang thread: may dinrill na butas ang modelo, ipinapakita ng view ang major diameter ng thread bilang mga dashed na bilog, at dinadala ng drawing sheet ang callout bilang note, gaya ng "4× M8×1.25 - 6H, thread through". Dinadrill na butas lamang ang ine-export ng STEP.

Lagyan ng check ang **Modelled** para i-cut ang tunay na helical thread sa butas, para sa 3D printing. Ginagawa ng **Clearance (mm)** itong mas malaki nang ganoon sa lahat ng panig, para kumasya ang naka-print na bolt: 0.1 hanggang 0.2 mm ay angkop sa karamihan ng printer. Nagtatapos ang callout sa "(modelled)". Tingnan ang [Threads on shafts and bores, drawn or modelled](topic:threads), na naglalagay din ng thread sa shaft.

:::note
Hindi pa nagagawa ang counterdrilled na butas, inch thread at pipe thread.
:::
