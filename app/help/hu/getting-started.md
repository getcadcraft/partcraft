---
title: Ismerkedés a PartCraft-tal
summary: Mit tud a PartCraft jelenleg, mire van szüksége a böngészőjének, és egy első alkatrész tíz perc alatt, vázlattól a mentett fájlig.
keywords: kezdés, első indítás, gyorsindítás, bevezetés, bemutató, első alkatrész, lemez, paraméteres, alkatrész-modellező
from: 7d43283f
---

A PartCraft a CadCraft család paraméteres alkatrész- és összeállítás-alkalmazása. 2D vázlatot rajzol, rögzíti kapcsolatokkal és méretekkel, majd olyan jellemzőkkel alakítja testté, mint a kihúzás, a forgatás és a furat. Bármelyik számot később is megváltoztathatja: az alkatrész az előzményei alapján újraépül. Az alkatrészek ezután összeállításokba kerülnek, ahol csatlakozások helyezik el őket, és ellenőrizhető a mozgásuk.

Mit tud ez a verzió:

| Feladat | Mit kap |
|---|---|
| Vázlatok | Vonalak, téglalapok, körök, ívek, pontok és középvonalak, kapcsolatokkal és méretekkel, élő állapottal: alulhatározott, teljesen meghatározott vagy túlhatározott |
| Testjellemzők | Kihúzás, kivágás, forgatás, forgatott kivágás, egyszerű és fészkes furatok, lineáris és körkörös minták, tükrözés, lekerekítések és letörések egyenes éleken, sík lapok között, valamint héjazás és dőlésszög sík lapokon. A seprések, áthúzások és a többi pontos magot igénylő jellemző ebben a verzióban még nincs elkészítve: lásd [Mi még nincs elkészítve](topic:not-built-yet) |
| Előzmények | Bármely jellemző számait szerkesztheti, felfüggesztheti, visszagörgetheti, átrendezheti és törölheti, visszavonással |
| Összeállítások | Alkatrészek merev, forgó és csúszó csatlakozásokkal összekötve, ütközésellenőrzéssel és mozgásellenőrzéssel |
| Rajzok | Egy A3-as rajzlap három nézettel, izometrikus nézettel, metszettel, részletnézettel, összméretekkel, alapjelekkel (datum), tűrésjelölő keretekkel és felületi érdességi jelekkel, PDF-ben exportálva |
| Fájlok | Saját alkatrész- és összeállításfájlok; kimenet: STL, 3MF, pontos STEP, DXF és PDF |

Minden a böngészőjében fut, a saját számítógépén. **Semmi sem töltődik fel.** A fájlok helyéről lásd: [Fájlok: megnyitás, mentés és exportálás](topic:files).

## Mire van szüksége

- Egy aktuális Chrome, Edge, Firefox vagy Safari, amelyben a **WebGL** (3D grafika) és a **WebAssembly** be van kapcsolva. Mindkettő alapértelmezés szerint be van kapcsolva. A geometriát a WebAssembly hálómag (mesh kernel) építi, amely az alkalmazással együtt töltődik be: lásd [A háló-kernel](topic:solid-kernels).
- Egérrel a legkönnyebb. Az érintőpad is működik, az érintőképernyők pedig a nézegetéshez és egyszerű vázlatkészítéshez: lásd [Érintőpad, érintés és kis képernyők](topic:trackpad-and-touch).
- Legalább 1280 pixel széles képernyő mutatja az egész eszköztárat egy sorban. Keskenyebb ablakokban az eszköztár vízszintesen görgethető; telefonon a panelek lapokként nyílnak meg az alsó sávból.

A böngészőkről bővebben: [Böngészők és számítógépek](common:browsers).

:::note
A PartCraft a böngészőben fut, asztali gépen pedig a CadCraft Studio-n belül. A felhőbe mentés még nem érhető el: alkatrészeket a számítógépről nyit meg, és fájlként a számítógépre menti vissza.
:::

## A PartCraft megnyitása

1. Nyissa meg a PartCraft-ot.
2. Várjon, amíg a képernyő ezt írja: „A testkernel betöltése…”. Az első alkalommal ez eltart egy ideig.
3. Egy üres 3D nézetet lát három alapsíkkal, balra az előzményekkel („Part1”, majd Elülső sík, Felső sík, Jobb oldali sík), és a nézetben egy dobozt „Alkatrész indítása” felirattal.
4. A állapotsor jobb végén lévő chip ezt írja: „Háló-kernel”. A PartCraft ebben a verzióban minden alkatrészt a hálómaggal épít, így a kerek felületek lapos facettákból állnak. Azonnal kezdhet modellezni.

Ha a nézet szerint a böngésző nem tud 3D-t megjeleníteni, vagy a kernel nem töltődött be, lásd: [Hibaelhárítás](topic:troubleshooting#the-app-does-not-start).

## Első alkatrésze: lemez furattal

Egy 60 × 40 mm-es, 10 mm vastag lemezt készít, 6 mm-es átmenő furattal. Mértékegység: milliméter.

### A körvonal megrajzolása

1. Kattintson az előzményekben a **Elülső sík** elemre. A sík a nézetben kiemelkedik.
2. Válassza az eszköztár {{ui:Vázlat}} gombját, vagy nyomja meg az {{key:S}} billentyűt. A nézet egyenesen a síkra fordul, és a Vonal eszköz aktív lesz.
3. Nyomja meg az {{key:R}} billentyűt a Téglalap eszközhöz.
4. Vigye a mutatót az origóra (a kis piros kör kereszttel). Egy kis négyzet mutatja, hogy illeszkedik. Kattintson.
5. Mozduljon fel és jobbra, majd kattintson újra. Megvan a téglalap. A vonalai kékek: a kék azt jelenti, hogy még mozgathatók.

### Méretek megadása

1. Nyomja meg a {{key:D}} billentyűt a Méretezés eszközhöz.
2. Kattintson a felső vonalra, majd kicsit felette, egy másik helyen kattintson. Megnyílik egy számdoboz az aktuális hosszal.
3. Írja be a `60` értéket, és nyomja meg az {{key:Enter}} billentyűt. A téglalap 60 mm széles lesz.
4. Kattintson a bal oldali vonalra, majd kicsit balra tőle. Írja be a `40` értéket, és nyomja meg az {{key:Enter}} billentyűt.

A nézet bal felső sarkában lévő chip most ezt írja: **Teljesen meghatározott**, és a vonalak tintaszínűek lesznek (feketék a Papír témában, világosak a Modell témában). Minden pont és méret rögzített.

:::tip
Ha a téglalapot az origótól távolabb kezdte, a chip még mindig ezt írja: „Alulhatározott · 2 szabadságfok”. Nyomja meg az {{key:S}} billentyűt a Kijelölés eszközhöz, kattintson egy sarkot, {{key:Shift}}+kattintással jelölje ki az origót, majd válassza a {{ui:• Egybeeső}} elemet a jobb oldali panelen.
:::

### Kihúzás

1. Válassza az eszköztár {{ui:Kilépés}} gombját, vagy nyomja meg az {{key:Esc}} billentyűt, amíg a vázlat bezárul (általában kétszer).
2. Válassza a {{ui:Kihúzás}} gombot. Egy 10 mm-es test jelenik meg. Az előzményekhez hozzáadódik az „Extrude1”, alatta behúzva a „Sketch1”.
3. A jobb oldali panel a kihúzás beállításait mutatja. A vastagság módosításához írjon új számot a **Mélység (mm)** mezőbe, és nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt. Az alkatrész azonnal újraépül.

### Furat hozzáadása

1. Kattintson a lemez elején lévő nagy sík lapra (a kihúzás végén). A teljes lap kiemelkedik, a jobb oldali panelen pedig a **Lap** felirat látszik.
2. Válassza a jobb oldali panelen a {{ui:Vázlat ezen a lapon}} gombot.
3. Nyomja meg a {{key:P}} billentyűt a Pont eszközhöz, és kattintson a lap közepe közelében.
4. Válassza a {{ui:Kilépés}} gombot.
5. Válassza a {{ui:Furat}} gombot. Egy 6 mm-es furat megy át a lemezen. Ha szeretné, módosíthatja az **Átmérő (mm)** értéket a jobb oldali panelen.

Az alsó bal sarokban lévő **Alkatrész** doboz most térfogatot, felületet, méretet (60 × 40 × 10 mm) és „Átmenő furatok: 1” értéket mutat.

### Mentés

1. Nyomja meg a {{key:Mod+S}} billentyűt, vagy válassza a {{ui:Mentés}} gombot.
2. A böngésző letölti a `Part1.partcraft.json` fájlt a letöltések mappájába. A fájl tartalmazza az egész előzményt: a {{ui:Megnyitás}} gombbal újra megnyitható, és a szerkesztés folytatható.

Az alkatrész átnevezéséhez előbb kattintson a nézet üres részére, hogy semmi ne legyen kijelölve, majd írjon új **Nevet** a jobb oldali panelen.

## Tovább

- [Első vázlat rajzolása](topic:sketch-basics) és [Vázlat teljes meghatározása](topic:relations-dimensions) részletesen bemutatják a vázlatszerkesztőt.
- [Alkatrész módosítása az előzményeken keresztül](topic:edit-history) megmutatja, hogyan szerkesztheti a megépítettet.
- [Lekerekítés, letörés és héjazás](topic:fillet-chamfer-shell) és [Rajz készítése](topic:drawing-pdf) befejezi az alkatrészt. [Mi még nincs elkészítve](topic:not-built-yet) felsorolja, mit nem tud ez a verzió, például a seprést és az áthúzást.
- [Más paraméteres modellezőből érkezve](topic:coming-from) felsorolja azokat a szokásokat, amelyek itt másként működnek.
- [Billentyűk és egér](topic:keyboard) a teljes gyorsbillentyű-lista.
- [A súgó használata](common:help).
