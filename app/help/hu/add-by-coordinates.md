---
title: Vázlatgeometria hozzáadása koordináták begépelésével
summary: A vázlat panelen található Hozzáadás koordinátákkal funkcióval vonalakat, tengelyvonalakat, téglalapokat, köröket és pontokat helyezhet el pontos pozícióba, kizárólag a billentyűzettel.
keywords: koordináták, begépelt bevitel, billentyűzetes bevitel, numerikus bevitel, pontos helyzet, x y, abszolút koordináták, akadálymentesség, egér nélkül
from: 5e6c1656
---

Ha ismeri a számokat, a begépelésük gyorsabb, mint a kattintás és a méretezés. A **Hozzáadás koordinátákkal** a jobb oldali panelen található, amikor vázlat van megnyitva. Segítségével mutatóeszköz nélkül is készíthet vázlatot.

A koordináták milliméterben értendők, a vázlat saját tengelyeiben: a vázlatot nézve x jobbra, y felfelé mutat, a (0, 0) pont pedig az origó (a keresztes piros kör).

## Alakzat hozzáadása

1. Nyisson meg egy vázlatot (lásd: [Az első vázlat elkészítése](topic:sketch-basics)).
2. A jobb oldali panelen görgessen a **Hozzáadás koordinátákkal** részhez.
3. Válassza ki az alakzatot a **Hozzáadás** listában: Vonal, Tengelyvonal, Téglalap, Kör vagy Pont.
4. Töltse ki a mezőket:

| Alakzat | Mezők |
|---|---|
| Vonal | **Kezdet x, y** és **Vég x, y** |
| Tengelyvonal | **Kezdet x, y** és **Vég x, y** |
| Téglalap | **Sarok x, y** és **Szemközti sarok x, y** |
| Kör | **Középpont x, y** és **Sugár** |
| Pont | **Helye x, y** |

5. Válassza a {{ui:Hozzáadás}} gombot, vagy nyomja meg a {{key:Enter}} billentyűt bármelyik mezőben.

Az alakzat megjelenik, az állapotsor pedig például ezt írja ki: „Téglalap hozzáadva.” A mezők kiürülnek, készen a következő alakzatra. Minden hozzáadás egy visszavonási lépés.

A koordinátapárt két szám írja le, vesszővel vagy szóközzel elválasztva: `0, 0`, `25 -10` vagy `12.5,40`. Negatív számok és tizedes törtek is megadhatók. A sugárnak nullánál nagyobbnak kell lennie. Ha valami nem számként értelmezhető, az állapotsor ezt írja ki: „Adja meg a koordinátákat „x, y” alakban, a sugarat pedig nullánál nagyobbra állítva.”

## Példa: gépelt, hornyolt lemez körvonala

1. Nyisson vázlatot ezen a síkon: **Elülső sík**.
2. **Hozzáadás**: Téglalap. **Sarok x, y**: `-50, -30`. **Szemközti sarok x, y**: `50, 30`. {{key:Enter}}.
3. **Hozzáadás**: Kör. **Középpont x, y**: `-30, 0`. **Sugár**: `5`. {{key:Enter}}.
4. **Középpont x, y**: `30, 0`. **Sugár**: `5`. {{key:Enter}}.
5. Válassza a {{ui:Kilépés a vázlatból}}, majd a {{ui:Kihúzás}} parancsot: 100 × 60-as lemez, benne két 10 mm-es furattal.

## A gépelt geometria csak elhelyezett, nincs rögzítve

A gépelt koordináták a geometriát a megfelelő helyre teszik, de **nem kényszerek**. Az alakzatok kékek maradnak (nincsenek teljesen meghatározva), és elmozdulhatnak, ha húzza őket, vagy ha más méretet módosít:

- a gépelt téglalap a saját sarkaival és vízszintes, illetve függőleges kényszereivel érkezik, mint a rajzolt, de semmi nem köti az origóhoz;
- a gépelt vonalnak nincs vízszintes vagy függőleges kényszere, még akkor sem, ha vízszintes vonalat adott meg;
- a gépelt kör középpontja szabad.

A vázlat teljes meghatározásához utólag adjon hozzá méreteket és kényszereket (lásd: [A vázlat teljes meghatározása](topic:relations-dimensions)). Például jelöljön ki egy téglalapsarkot és az origót, majd válassza a {{ui:• Egybeeső}} parancsot, vagy méretezze a körök középpontjait az origóhoz képest.

:::note
Mutatóeszköz nélkül eddig juthat el: a {{key:Tab}} billentyűvel és a nyílbillentyűkkel lépjen egy síksorra az előzménylistában, nyomja meg a {{key:Enter}} billentyűt a kijelöléshez, nyomja meg az {{key:S}} billentyűt a vázlatkészítéshez, adjon hozzá alakzatokat, majd a {{key:Tab}} billentyűvel érje el az egyes méretek melletti **Szerkesztés** gombot, és a {{key:Tab}} billentyűvel a {{ui:Kilépés a vázlatból}} gombot. A geometria kijelöléséhez, így kényszerek vagy új méretek hozzáadásához az aktuális verzióban továbbra is kattintás vagy érintés kell.
:::

## Korlátok

- Az ívek egyelőre nem adhatók meg begépeléssel. Rajzolja meg őket az Ív eszközzel, vagy gépeljen be egy kört, és használjon kényszereket.
- Ebben a mezőben nincsenek relatív koordináták (az utolsó ponttól mért) és poláris koordináták (hossz és szög) sem.
- A gépelt geometria nem fogódzik a meglévő pontokhoz. Ha egyesítve kell maradniuk, adja meg a meglévő pont koordinátáit, majd adjon hozzá közéjük {{ui:• Egybeeső}} kényszert.
