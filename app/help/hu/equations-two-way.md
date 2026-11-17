---
title: Egyenletek mindkét irányban
summary: Módosítson egy paramétert, és az alkatrész követi; írjon be új méretet egy vezérelt értékbe, és a PartCraft kiszámolja a mögötte lévő paramétert, rákérdezve, melyik változzon, ha több is lehetne.
keywords: egyenletek, visszafelé megoldás, vezérelt méret, kétirányú, megfordítás, célkeresés, paraméterek, kapcsolt értékek, melyik paraméter
from: 82dc0269
---

Egy egyenlet, mint például az **Extrude1 mélysége = vastag + plusz**, mindkét irányban működik.

## Előre: a paraméter módosítása

A {{ui:Paraméterek}} fülön változtassa meg a `vastag` értékét 20-ról 30-ra. Az Extrude1 mélysége 30 + plusz lesz, az alkatrész pedig újra épül.

## Visszafelé: a vezérelt érték módosítása

1. Kattintson az „Extrude1”-re az előzményekben. A **Mélység (mm)** mezőben **ƒ** látható: egy egyenlet vezérli.
2. Írja be a kívánt méretet, például `40`, és nyomja meg az {{key:Enter}} billentyűt.

A PartCraft megoldja a paramétert, amely az egyenlet mögött áll, akárhány lépésen át is: `mélység = hub_h`, `hub_h = korong_v + 50`: egy magasság beírása megváltoztatja a `korong_v`-t. Az állapotsor megmondja, mi változott, például hogy a plusz értéke 5-ről 15-re módosult.

Ha két vagy több paraméter vezérli az értéket, egy ablak kérdezi: **Melyik paramétert kell módosítani?**, és felsorolja őket. Kattintson egyre; a többi megtartja az értékét. A {{ui:Mégse}} semmit sem változtat.

Ugyanez működik egy vázlatban: kattintson duplán egy vezérelt méretre, írjon be egy értéket, és nyomja meg az {{key:Enter}} billentyűt. A paramétertábla **Érték** oszlopában is működik, olyan paraméternél, amely maga is kifejezés.

## Amikor nem megy

- Az olyan szám, amelynek egész számnak kell lennie (egy minta darabszáma) vagy tartományon belül kell maradnia (360°-ig terjedő szög), mielőtt bármi változna, elutasításra kerül.
- Csak rögzített számokból álló egyenlet (`=40`) nem tartalmaz változtatható paramétert: az Ön által beírt szám helyettesíti.
- Ha a paraméter egyetlen értéke sem adja meg a beírt méretet, az állapotsor ezt jelzi, és semmi sem változik.
- Ha egy vázlat nem oldható meg az új értékkel, megtartja előző értékeit, és az állapotsor megnevezi a vázlatot.

Minden változtatás, bármelyik irányban, egy lépés a {{key:Mod+Z}} és a {{key:Mod+Y}} billentyűkhöz.
