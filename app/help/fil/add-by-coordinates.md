---
title: Magdagdag ng sketch geometry sa pag-type ng coordinates
summary: Gamitin ang Idagdag gamit ang coordinates sa sketch panel para maglagay ng lines, centerlines, rectangles, circles at points sa eksaktong posisyon, gamit lang ang keyboard.
keywords: coordinates, typed input, pag-type ng input, keyboard entry, numeric entry, eksaktong posisyon, x y, absolute coordinates, accessibility, walang mouse
from: 5e6c1656
---

Kapag alam mo na ang mga numero, mas mabilis itong i-type kaysa i-click at lagyan ng dimension. **Idagdag gamit ang coordinates** ay nasa kanang panel tuwing may bukas na sketch. Puwede ka rin nitong bumuo ng sketch nang walang pointer.

Ang coordinates ay nasa millimeters, sa sariling axes ng sketch: x pakanan at y paitaas habang tinitingnan mo ang sketch, na may (0, 0) sa origin (ang pulang bilog na may krus).

## Magdagdag ng shape

1. Magbukas ng sketch (tingnan ang [Gumuhit ng unang sketch mo](topic:sketch-basics)).
2. Sa kanang panel, mag-scroll hanggang sa **Idagdag gamit ang coordinates**.
3. Piliin ang shape sa **Idagdag**: Linya, Centerline, Rectangle, Bilog o Punto.
4. Punan ang mga box:

| Shape | Mga box |
|---|---|
| Linya | **Mula sa x, y** at **Hanggang sa x, y** |
| Centerline | **Mula sa x, y** at **Hanggang sa x, y** |
| Rectangle | **Corner x, y** at **Opposite corner x, y** |
| Bilog | **Sentro x, y** at **Radius** |
| Punto | **Sa x, y** |

5. Piliin ang {{ui:Idagdag}}, o pindutin ang {{key:Enter}} sa kahit anong box.

Lalabas ang shape at sasabihin ng status bar, halimbawa, "Naidagdag ang rectangle." Mawawalan ng laman ang mga box, handa para sa susunod. Bawat dagdag ay isang undo step.

I-type ang isang pares bilang dalawang numero na pinaghihiwalay ng comma o space: `0, 0`, `25 -10` o `12.5,40`. Puwede ang negative na numero at decimal. Dapat higit sa zero ang radius. Kung may hindi mabasang numero, sasabihin ng status bar: 'I-type ang coordinates bilang "x, y" at radius na higit sa zero.'

## Halimbawa: outline ng plate na may slot, na-type

1. Magbukas ng sketch sa **Front plane**.
2. **Idagdag**: Rectangle. **Corner x, y**: `-50, -30`. **Opposite corner x, y**: `50, 30`. {{key:Enter}}.
3. **Idagdag**: Bilog. **Sentro x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Sentro x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Piliin ang {{ui:Lumabas sa sketch}}, tapos {{ui:Extrude}}: isang plate na 100 × 60 na may dalawang butas na 10 mm.

## Ang typed geometry ay nailagay, hindi naka-tie down

Nailalagay sa tamang lugar ang typed coordinates, pero **hindi sila relations**. Nananatiling asul (under defined) ang mga shape at puwedeng gumalaw kung i-drag mo ang mga ito o baguhin ang ibang dimension:

- ang typed rectangle ay may sariling corner, horizontal at vertical relations, gaya ng iginuhit, pero walang nakakabit dito sa origin;
- ang typed line ay walang horizontal o vertical relation, kahit pa na-type mo ang pantay na linya;
- malaya ang center ng typed circle.

Para maging fully defined ang sketch, magdagdag ng dimensions at relations pagkatapos (tingnan ang [I-fully define ang sketch](topic:relations-dimensions)). Halimbawa, piliin ang isang corner ng rectangle at ang origin, tapos piliin ang {{ui:• Coincident}}, o lagyan ng dimension ang mga center ng bilog mula sa origin.

:::note
Kahit walang pointer, aabot ka pa rin hanggang dito: ilipat ang focus sa plane row sa history gamit ang {{key:Tab}} at arrow keys, pindutin ang {{key:Enter}} para piliin ito, pindutin ang {{key:S}} para mag-sketch, magdagdag ng shapes dito, at piliin ang **Edit** sa tabi ng bawat dimension at {{ui:Lumabas sa sketch}} gamit ang {{key:Tab}}. Ang pagpili ng geometry, at kaya ang pagdagdag ng relations o bagong dimensions, ay nangangailangan pa rin ng click o tap sa build na ito.
:::

## Mga limitasyon

- Hindi pa ma-type ang arc. Iguhit ito gamit ang Arko tool, o mag-type ng bilog at gumamit ng relations.
- Walang relative coordinates (mula sa huling point) o polar coordinates (haba at anggulo) sa box na ito.
- Hindi nagsa-snap ang typed geometry sa mga umiiral na point. I-type ang parehong coordinates ng umiiral na point, tapos magdagdag ng {{ui:• Coincident}} relation sa pagitan nila kung kailangang magkadikit ang mga ito.
