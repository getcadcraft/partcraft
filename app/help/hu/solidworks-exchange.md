---
title: Alkatrészek átvitele más alkatrész-modellezőkbe és onnan
summary: Alkatrész küldése más alkatrész-modellezőnek makróként, amely élő jellemzőfával építi újra. A nevesített STEP és a más modellező által kiírt jellemzőlista megnyitása ebben a verzióban még nincs elkészítve.
keywords: makró, még nincs elkészítve, swb, vba, jellemzőfa, oda-vissza, makró exportálása, nevesített step, ap214, globális változók, egyenletek, natív alkatrész
from: 97ca61da
---

A PartCraft oda-vissza cserél alkatrészeket a SolidWorks-szel, olyan fájlformátum nélkül, amelyet senki más nem tud olvasni:

- **Kifelé:** egy makró (`.swb`, egyszerű szöveg), amelyet a SolidWorks futtat, hogy maga építse fel az alkatrészt, jellemzőről jellemzőre, a vázlataival, kényszereivel, méreteivel, globális változóival és egyenleteivel. Élő jellemzőfával rendelkező natív alkatrészt kap, nem holt testet.
- **Vissza:** a SolidWorksben futtatott makró az alkatrész jellemzőit és egyenleteit egy `.cadcraft-sw.json` fájlba írja. Ennek a fájlnak a PartCraftban való megnyitása ebben a verzióban még nincs elkészítve (pontos kernel kell hozzá).

:::warning
Ezt még nem tesztelték a SolidWorksben. A SolidWorks csak Windows alatt, licenccel fut, és a PartCraft soha nem futtatta ezeket a makrókat benne. A makrók a SolidWorks API-dokumentációja alapján készültek, és itt csak szerkezetükben lettek ellenőrizve. Számítson rá, hogy hibákat kell jelentenie; a makró által írt napló megmondja, melyik lépés hibázott.
:::

A PartCraft nem tud `.sldprt` fájlt írni: ez a formátum zárt. A natív alkatrészhez a makró az út.

## Alkatrész küldése makróként

1. Nyissa meg az alkatrészt.
2. Válassza a {{ui:Exportálás}} elemet, majd a {{ui:Makró a SolidWorkshöz (.swb)}} lehetőséget. A PartCraft letölti a `<part>.swb` fájlt; az állapotsor szerint „pontos kernel nélkül íródott”.
3. A párbeszédpanel megmondja, hány jellemzőt, globális változót és egyenletet épít a makró, és felsorolja, amit kihagy. Ebben a verzióban nem készül mellé STEP: ha szükséges, használja az {{ui:Exportálás}}, majd a {{ui:STEP (lapokra bontott, hálókernel)}} lehetőséget.
4. A SolidWorksben válassza a **Tools > Macro > Run** menüpontot, jelölje ki a `.swb` fájlt, és várjon. Új alkatrészt készít az alapértelmezett alkatrész-sablonból, beállítja a milliméter mértékegységet, és felépíti az összes jellemzőt.
5. A végén üzenet jelzi, hány lépés készült el, hány hibázott, és hány egyezett a PartCraft testével. A teljes napló, a `<part> macro log.txt` a makró mellé íródik.

A makró ezeket építi fel:

| PartCraft | Az új alkatrészben |
|---|---|
| Vázlat az Elölnézeti, Felülnézeti vagy Jobb oldali síkon | Vázlat azon a síkon, a vonalaival, íveivel, köreivel, pontjaival, kényszereivel és méreteivel (a PartCraftban szereplő néven, például `k7`) |
| Vázlat lapon | Vázlat ugyanazon a lapon, amelyet egy rajta lévő pont választ ki |
| Vázlat rögzített síkon | Hivatkozási sík három ponton át, és a rajta lévő vázlat |
| Kihúzás, kivágás (vak, teljes átmenő, síkközép, két irány, kúposság) | Boss-extrude vagy cut-extrude |
| Forgatás, forgatott kivágás | Revolve ugyanazon tengelyvonal körül |
| Furat (egyszerű, süllyesztett, kúpos süllyesztés, menetes) | Egy vagy két kivágás saját vázlatokkal (a menetes furat a menetfúrójának átmérőjével készül; menet nélkül) |
| Lineáris és körkörös minta, tükrözés | Linear pattern, circular pattern, mirror (jellemzők vagy a test) |
| Lekerekítés, letörés, héjazás | Fillet, chamfer és shell ugyanazokon az éleken és lapokon, pontok alapján kiválasztva |
| Paraméterek és egyenletek | Globális változók és egyenletek az átnevezett méreteken |
| Elnyomott jellemzők, a visszaállító sáv | Ugyanúgy elnyomva; a visszaállító sáv ugyanazon a helyen |

Minden test-jellemző után a makró összeveti a test térfogatát és méretét a PartCraftéval. Ha eltérnek, egyszer megfordítja az adott jellemző irányát, és újra ellenőriz; ha ez sem jobb, visszafordítja, és a naplóba „Check” bejegyzést ír.

### Mi marad ki

A párbeszédpanel és a makró eleje felsorolja az összes át nem vitt elemet, az okkal együtt. Jelenleg ezek: importált testek (helyette a STEP-et illessze be), seprések, áthúzások (loft), dőlésszögek, hivatkozási tengelyek és pontok, „eddig” végfeltételek, csak egyes kontúrok kihúzása, és minden, ami ezektől függ. A splinek a pontjaikon áthaladó görbékké válnak. Ebben a verzióban nincs pontos kernel, ezért a lapokon készült vázlatok és az éleket vagy lapokat kiválasztó jellemzők szintén kimaradnak.

## Nevesített STEP küldése

Ebben a verzióban még nincs elkészítve: a {{ui:STEP a SolidWorkshöz (elnevezett, AP214)}} pontos kernelt igényel, és kiválasztásakor ez jelenik meg: „STEP a SolidWorkshöz: még nincs elkészítve. …”. Pontos kernellel a fájl hordozza az alkatrész nevét, a milliméter mértékegységet és az alkatrész színét, és az Y tengelyt felfelé állítja, ahogyan a SolidWorks mutatja az alkatrészeket (a sima {{ui:STEP AP214 (pontos test)}} export a Z tengelyt állítja felfelé). Az ékezetes betűk a névben ékezet nélkül jelennek meg, az egyéb, ASCII-n kívüli karakterek `_` jelet kapnak.

## Alkatrész visszahozása

A fájl PartCraftban való megnyitása (3. lépés) ebben a verzióban még nincs elkészítve: ilyenkor ez jelenik meg: „SolidWorks-export megnyitása: még nincs elkészítve. …”. A CadCraft rajzoló alkalmazás továbbra is megnyitja a fájlt, és átveszi a vázlatait.

1. Válassza a {{ui:Fájl}} > {{ui:Exportálás}} > {{ui:Makró exportálása alkatrészek visszahozásához (.swb)}} elemet a `CadCraftExport.swb` letöltéséhez, és tegye az alkatrészei mellé.
2. A SolidWorksben nyissa meg az alkatrészt, válassza a **Tools > Macro > Run** menüpontot, és jelölje ki a `CadCraftExport.swb` fájlt. Az alkatrész mellé `<part>.cadcraft-sw.json` fájlt ír, és magát az alkatrészt nem módosítja.
3. A PartCraftban válassza a {{ui:Megnyitás}} lehetőséget, és jelölje ki ezt a fájlt, vagy húzza a 3D-nézetre.
4. Pontos kernellel a PartCraft jellemzőről jellemzőre újraépíti az alkatrészt, és megmutatja, mit tett: például „5 / 5 jellemző átvéve a SolidWorksből (Flange.SLDPRT)”, minden olyan jellemzőt, amelyet nem tudott átvenni („Nem vett át: Sweep1 (Sweep).”), és azt, hogy a térfogat egyezik-e azzal, amelyet a SolidWorks írt.
5. Mentse PartCraft-alkatrészként a {{ui:Mentés}} gombbal.

A vázlatok alapsíkra kerülnek, ha ilyenen fekszenek, az alkatrész megfelelő sík lapjára, ha van ilyen (így követik a későbbi módosításokat), egyéb esetben rögzített síkra. A lekerekítések, letörések és héjazások éleit és lapjait pontok alapján találja meg, és nevesített hivatkozásként tartja meg. A globális változók paraméterekké válnak (a szóközös nevekben aláhúzás áll: a „Bolt count” `Bolt_count` lesz), az egyenletek pedig ugyanazokon a méreteken egyenletekké válnak. Semmi nem találgatott: ami nem párosítható, az fel van sorolva.

A CadCraft rajzoló alkalmazás ugyanezt a fájlt megnyitja, és átveszi a vázlatait.

:::note
A formátum a `cadcraft-sw-export` 1-es verzió, egyszerű JSON, milliméterben és fokban. Az újabb makróból származó vagy érvénytelen fájl az okával együtt elutasításra kerül.
:::
