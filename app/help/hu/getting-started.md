---
title: Első lépések a PartCrafttal
summary: Mit tud ma a PartCraft, mire van szüksége a böngészőjének, és egy első alkatrész tíz perc alatt, a vázlattól a mentett fájlig.
keywords: indulás, első indítás, gyors útmutató, bevezetés, útmutató, első alkatrész, lemez, parametrikus, alkatrészmodellező
from: 5f0a668d
---

A PartCraft a CadCraft család parametrikus alkatrész- és összeállítás-alkalmazása. Rajzol egy 2D vázlatot, rögzíti kényszerekkel és méretekkel, testté alakítja olyan jellemzőkkel, mint a kihúzás, a forgatás és a furat, és bármelyik számot később módosíthatja: az alkatrész újraépül az előzményeiből. Az alkatrészek ezután összeállításokba kerülnek, ahol a kapcsolatok helyezik el őket, és ellenőrizheti a mozgást.

Amit ez a kiadás tud:

| Feladat | Amit kap |
|---|---|
| Vázlatok | Vonalak, téglalapok, körök, ívek, pontok és tengelyvonalak, kényszerekkel és méretekkel, valamint élő állapot: alul-, teljesen vagy túlhatározott |
| Testjellemzők | Kihúzás, kivágás, forgatás, forgatásos kivágás, egyszerű és süllyesztett furatok, lineáris és körkörös minták, tükrözés, lekerekítések és letörések sík lapok közötti egyenes éleken, valamint héjazás és dőlésszög sík lapokon. A végigvezetés, az áthúzás és a többi, pontos kernelt igénylő jellemző ebben a kiadásban még nincs elkészítve: lásd [Ami még nincs elkészítve](topic:not-built-yet) |
| Előzmények | Bármelyik jellemző számainak szerkesztése, letiltás, visszagörgetés, átrendezés és törlés, visszavonással |
| Összeállítások | Merev, forgó és csúszó kapcsolatokkal összekötött alkatrészek, ütközésellenőrzés és mozgásellenőrzés |
| Rajzok | Egy A3-as lap három nézettel, egy izometrikus nézettel, egy metszettel, egy részletnézettel, teljes méretekkel, datumokkal, tűréskeretekkel és felületi minőségjelekkel, PDF-ként exportálva |
| Fájlok | Saját alkatrész- és összeállításfájlok; STL, 3MF, lapokra bontott STEP, DXF és PDF kimenet |

Minden a böngészőben, a saját számítógépén fut. **Semmi sem töltődik fel.** A fájlok útjáról lásd [Fájlok: megnyitás, mentés és exportálás](topic:files).

## Amire szüksége van

- Egy aktuális Chrome, Edge, Firefox vagy Safari, bekapcsolt **WebGL**-lel (3D grafika) és **WebAssembly**-vel. Mindkettő alapból be van kapcsolva. A testgeometriát egy WebAssembly hálókernel építi, amely az alkalmazással együtt betöltődik: lásd [A hálókernel](topic:solid-kernels).
- Egérrel a legegyszerűbb. Az érintőpad is működik, az érintőképernyő pedig megjelenítéshez és egyszerű vázlatoláshoz: lásd [Érintőpad, érintés és kis képernyők](topic:trackpad-and-touch).
- Legalább 1280 képpont széles képernyőn az egész eszköztár egy sorban látszik. A keskenyebb ablakokban az eszköztár oldalra görgethető; telefonon a panelek lapokként nyílnak az alsó sávból.

További információ a böngészőkről: [Böngészők és számítógépek](common:browsers).

:::note
A PartCraft a böngészőben fut, asztali gépen pedig a CadCraft Studióban. A felhőbe mentés még nem érhető el: az alkatrészeket a számítógépéről nyitja meg, és fájlként oda menti vissza.
:::

## A PartCraft megnyitása

1. Nyissa meg a PartCraftot.
2. Várja meg, amíg a képernyő ezt írja: „A testkernel betöltése…”. Az első alkalommal ez egy kis időt vesz igénybe.
3. Egy üres 3D nézetet lát három alapsíkkal, balra az előzményeket („Part1”, majd Elülső sík, Felső sík, Jobb oldali sík), a nézetben pedig egy „Alkatrész indítása” című dobozt.
4. Az állapotsor jobb vége közelében lévő jelvény ezt írja: „Hálókernel”: a PartCraft ebben a kiadásban minden alkatrészt a hálókernellel épít, így a kerek lapok sík lapkák. Azonnal elkezdhet modellezni.

Ha a nézet azt írja, hogy a böngésző nem tud 3D-t megjeleníteni, vagy a kernel nem töltődött be, lásd [Hibaelhárítás](topic:troubleshooting#the-app-does-not-start).

## Az első alkatrész: egy lemez egy furattal

Egy 60 × 40 mm-es, 10 mm vastag lemezt készít, amelyen egy 6 mm-es furat megy át. A mértékegység a milliméter.

### A körvonal felvázolása

1. Kattintson az **Elülső sík** elemre a bal oldali előzményekben. A sík kiemelődik a nézetben.
2. Válassza a {{ui:Vázlat}} gombot az eszköztáron, vagy nyomja meg az {{key:S}} billentyűt. A nézet egyenesen a síkra fordul, és a Vonal eszköz aktív.
3. Nyomja meg az {{key:R}} billentyűt a Téglalap eszközhöz.
4. Vigye a mutatót az origóra (a kis piros kör kereszttel). Egy kis négyzet jelzi, hogy fog. Kattintson.
5. Mozgassa felfelé és jobbra, és kattintson újra. Van egy téglalapja. A vonalai kékek: a kék azt jelenti, hogy még mozoghatnak.

### Méretek megadása

1. Nyomja meg a {{key:D}} billentyűt a Méretezés eszközhöz.
2. Kattintson a felső vonalra, majd kicsit fölé. Megnyílik egy számmező az aktuális hosszal.
3. Írja be: `60`, és nyomja meg az {{key:Enter}} billentyűt. A téglalap 60 mm szélesre változik.
4. Kattintson a bal oldali vonalra, majd kicsit balra tőle. Írja be: `40`, és nyomja meg az {{key:Enter}} billentyűt.

A nézet bal felső sarkában lévő jelvény most ezt írja: **Teljesen meghatározott**, és a vonalak tintaszínűek lesznek (fekete a Papír témában, világos a Modell témában). Minden pont és méret rögzített.

:::tip
Ha a téglalapot az origótól távol kezdte, a jelvény még ezt írja: „Alulhatározott · 2 szabadságfok”. Nyomja meg az {{key:S}} billentyűt a Kijelöléshez, kattintson egy sarokra, {{key:Shift}}+kattintson az origóra, majd válassza a jobb oldali panelen a {{ui:• Egybeeső}} lehetőséget.
:::

### Kihúzás

1. Válassza a {{ui:Kilépés}} gombot az eszköztáron, vagy nyomja meg az {{key:Esc}} billentyűt, amíg a vázlat be nem zárul (általában kétszer).
2. Válassza a {{ui:Kihúzás}} gombot. Megjelenik egy 10 mm-es test. Az „Extrude1” bekerül az előzményekbe, alatta behúzva a „Sketch1”.
3. A jobb oldali panel a kihúzás beállításait mutatja. A vastagság módosításához írjon be új számot a **Mélység (mm)** mezőbe, és nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt. Az alkatrész azonnal újraépül.

### A furat hozzáadása

1. Kattintson a lemez elején lévő nagy sík lapra (a kihúzás végére). Az egész lap kiemelődik, és a jobb oldali panel ezt írja: **Lap**.
2. Válassza a jobb oldali panelen a {{ui:Vázlat ezen a lapon}} gombot.
3. Nyomja meg a {{key:P}} billentyűt a Pont eszközhöz, és kattintson a lap közepe közelében.
4. Válassza a {{ui:Kilépés}} gombot.
5. Válassza a {{ui:Furat}} gombot. Egy 6 mm-es furat megy át a lemezen. Ha szeretné, módosítsa az **Átmérő (mm)** értékét a jobb oldali panelen.

A bal alsó **Alkatrész** doboz most térfogatot, felszínt, méretet (60 × 40 × 10 mm) és ezt írja: „Átmenő furatok: 1”.

### Mentés

1. Nyomja meg a {{key:Mod+S}} billentyűt, vagy válassza a {{ui:Mentés}} gombot.
2. A böngésző letölti a `Part1.partcraft.json` fájlt a letöltések mappába. A fájl az egész előzményt tartalmazza: a szerkesztés folytatásához nyissa meg újra a {{ui:Megnyitás}} gombbal.

Az alkatrész előzetes átnevezéséhez kattintson a nézet üres részére, hogy ne legyen kijelölve semmi, és írjon új **Nevet** a jobb oldali panelen.

## Merre tovább

- A vázlatoló részletes bemutatása: [Első vázlat rajzolása](topic:sketch-basics) és [Vázlat teljes meghatározása](topic:relations-dimensions).
- Az épített alkatrész szerkesztése: [Alkatrész módosítása az előzményein keresztül](topic:edit-history).
- Az alkatrész befejezése: [Lekerekítés, letörés és kiüregelés](topic:fillet-chamfer-shell) és [Rajz készítése](topic:drawing-pdf). Hogy mit nem tud ez a kiadás, például a végigvezetést és az áthúzást: [Ami még nincs elkészítve](topic:not-built-yet).
- A másképp működő szokások listája: [Más parametrikus modellezőből érkezik](topic:coming-from).
- A billentyűparancsok teljes listája: [Billentyűk és egér](topic:keyboard).
- [A súgó használata](common:help).
