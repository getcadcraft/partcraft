---
title: Fájlok: megnyitás, mentés és exportálás
summary: A PartCraft által megnyitott és mentett alkatrész- és összeállításfájlok, minden exportformátum és hogy mit őriz meg, hová kerülnek a fájlok, és mi változik offline vagy a böngészők között.
keywords: megnyitás, mentés, exportálás, letöltés, fájl, partcraft.json, összeállításfájl, stl, 3mf, step, dxf, pdf, hol vannak a fájljaim, offline, mentés másként
from: c15c2c48
---

A PartCraft a számítógépén lévő fájlokkal dolgozik. Soha nem tölt fel alkatrészt, és nincs szó fiókról vagy felhőtárhelyről. A felhőbe mentés még nem érhető el.

## Amit a PartCraft megnyit

| Fájl | Kiterjesztés | Hogyan |
|---|---|---|
| PartCraft-alkatrész | `.partcraft.json` | {{ui:Megnyitás}}, {{key:Mod+O}}, vagy húzza a 3D nézetre |
| PartCraft-összeállítás | `.partcraft-asm.json` | Ugyanígy: a PartCraft látja, melyik fajta |
| STEP-test | `.step`, `.stp` | Háromszögekként beolvasott szilárd test: [STEP-fájl megnyitása és építkezés rá](topic:import-step) |

Az STL-, OBJ- és 3MF-hálók is szilárd testként nyílnak meg ([STL, OBJ vagy 3MF megnyitása](topic:open-meshes)), és a `.3dm` fájlok is ([.3dm modell megnyitása](topic:open-3dm-files)). A DXF, az IGES és más programok saját alkatrészfájljai nem nyithatók meg (lásd [Ami még nincs elkészítve](topic:not-built-yet)).

Szabályok megnyitáskor:

- Az alkatrész- vagy összeállításfájl nevének `.json` végűnek kell lennie, és a fájl 50 MB-nál kisebb kell legyen.
- A fájlokat ellenőrzi a program, mielőtt bármit megmutatna. A sérült vagy szerkesztett fájlt egyszerű indokkal utasítja el, például: „Ez nem PartCraft fájl.”
- A PartCraft újabb verziójával mentett fájlt elutasítja: „Ezt a fájlt a PartCraft egy újabb verziója mentette (fájlverzió: 3); ez a(z) 2 verziót olvassa.” A régebbi fájlok megnyílnak.
- Ha a képernyőn lévő alkatrésznek nem mentett módosításai vannak, a PartCraft előbb rákérdez: {{ui:Mégse}}, {{ui:Módosítások elvetése}} vagy {{ui:Előbb mentés}}.

## Mentés

A {{ui:Mentés}} vagy a {{key:Mod+S}} azt menti, ami a képernyőn van:

- Alkatrésznél: `<alkatrész neve>.partcraft.json`, a teljes előzmény (vázlatok, kényszerek, méretek, jellemzők, a visszagörgetés helye), a rajzlap metszet-, részlet- és GD&T-jegyzetei, valamint egy korábbi kiadásban importált STEP-test teljes szövege. Azokat a jellemzőket, amelyeket ez a kiadás nem tud felépíteni, változatlanul menti vissza. Magát a testet nem tárolja; a PartCraft az előzményből építi újra a fájl megnyitásakor.
- Összeállításban: `<összeállítás neve>.partcraft-asm.json`, **benne minden alkatrésszel**. Egyetlen fájl hordozza az egész összeállítást, így önállóan elküldhető.

A mentés **letöltés**. A böngésző a letöltések mappába teszi a fájlt, vagy rákérdez a helyre, ha így állította be. Az újramentés új letöltést készít; a böngésző elnevezheti `Part1 (1).partcraft.json` néven ahelyett, hogy felülírná a régit. A fájlokat tetszés szerint átnevezheti vagy áthelyezheti itt: {{pick:mac=Finder|windows=Fájlkezelő|linux=a fájlkezelő}}.

Az alkatrész nevében a betűktől, számjegyektől, szóközöktől, `_`, `.` és `-` jelektől eltérő karakterek `_` jellé válnak a fájlnévben.

:::tip
A legtöbb böngészőben van beállítás arra, hogy rákérdezzen az egyes letöltések helyére. Kapcsolja be, ha minden alkalommal „Mentés másként” választást szeretne: Chrome-ban és Edge-ben a beállítások Letöltések részében; Firefoxban az Általános, Fájlok és alkalmazások részben; Safariban az Általános, Fájlletöltések helye részben.
:::

További információ a letöltések helyéről és a fájlok biztonságos megőrzéséről: [Hová kerülnek a fájljai](common:your-files).

## Exportálás

Az {{ui:Exportálás}} menü más formátumokat ír. Mindegyik letöltés, az alkatrész nevével.

| Menüelem | Fájl | Mi van benne |
|---|---|---|
| {{ui:STL, 3D-nyomtatáshoz}} | `<name>.stl` | A test háromszögeinek bináris STL-je, milliméterben, **Z felfelé** |
| {{ui:3MF, 3D-nyomtatáshoz}} | `<name>.3mf` | 3MF a testtel mint egyetlen objektummal, milliméterben, **Z felfelé** |
| {{ui:STEP AP242 (pontos test)}} | `<name>.step` | Ebben a kiadásban még nincs elkészítve (szürkített): pontos kernel kell hozzá |
| {{ui:STEP AP214 (pontos test)}} | `<name>.step` | Ebben a kiadásban még nincs elkészítve (szürkített) |
| {{ui:STEP (lapokra bontott, hálókernel)}} | `<name>.step` | A hálóból készült, sík lapokból álló test: **a kerek felületek sok kis sík lapka**. Milliméterben, a PartCraft saját tengelyeiben (Y felfelé). Ebben a kiadásban ezt a STEP-et kell használni más CAD-programokhoz |
| {{ui:DXF a vázlatról vagy sík lapról}} | `<name> - <sketch>.dxf` vagy `<name> - face.dxf` | DXF R12. Vázlatnál: vonalak, ívek, körök és pontok a vázlat saját koordinátáiban, a PROFILE, CONSTRUCTION és POINTS rétegeken. Kijelölt sík lapnál: a körvonalai zárt polivonalakként (a kerek élek lapkáikkal) |
| {{ui:Rajz (PDF): nézetek, metszet, részlet, GD&T}} | `<name> - drawing.pdf` | Az A3-as rajzlap: három nézet, izometrikus, ha be van állítva, metszet és részlet, teljes méretek, GD&T-jelek, rajzfej |

:::note
A {{ui:STEP AP242 (pontos test)}} és a {{ui:STEP AP214 (pontos test)}} ebben a kiadásban még nincs elkészítve: használja a {{ui:STEP (lapokra bontott, hálókernel)}} elemet. Az alakja és a térfogata helyes, de minden kerek lap sok sík lapka, így más programok nem tudnak egy furatot hengerként kijelölni. Ha ez számít, állítsa előbb finomabbra a **Görbék** értékét.
:::

- Az exportok a képernyőn lévő alkatrészről készülnek. Összeállításban az exportálás ki van kapcsolva; összeállítás-exportálás még nincs.
- Az STL, a 3MF, a lapokra bontott STEP és a lap-DXF mindig lapkákból áll. A **Görbék** beállítás (a jobb oldali panelen, kijelölés nélkül) állítja be, mennyire finomak, fordulatonként 32-től 256 lapkáig. Válassza a Finom vagy a Nagyon finom értéket, mielőtt STL-t vagy 3MF-et exportál a sima nyomtatáshoz.
- A PDF-rajz az olvasó beépített Helvetica betűtípusát használja. Azok a karakterek, amelyeket nem tud megjeleníteni, „?” jelként nyomtatódnak.

Lépésről lépésre: [Exportálás nyomtatáshoz, STEP-be és DXF-be](topic:export-files) és [Rajzlap készítése](topic:drawing-pdf).

## Nem mentett munka

- A PartCraft minden módosítás után egy pillanattal helyreállítási másolatot tart a megnyitott alkatrészről vagy összeállításról ebben a böngészőben, így egy összeomlás vagy bezárt lap nem veszíti el: a PartCraft következő megnyitásakor rákérdez: „Helyreállítja a munkáját?” Ez nem mentés: a munkája megőrzéséhez mentsen fájlba. Lásd [Nem mentett munka helyreállítása](common:recover).
- Ha nem mentett módosításokkal próbálja bezárni a lapot vagy újratölteni, a böngésző rákérdez: „Elhagyja az oldalt?”. Ez a böngésző saját ablaka; a PartCraft nem tudja módosítani a szövegét.
- Az {{ui:Új}}, a {{ui:Megnyitás}} és egy összeállítás bezárása rákérdez a nem mentett módosítások elvetése előtt.

## Online és offline

Minden a számítógépén történik: a hálókernel (egy WebAssembly-program) az alkalmazással együtt töltődik le, és helyben építi a geometriát, a fájlokat pedig a lemezéről olvassa és a lemezére írja. Alkatrészadat nem megy át a hálózaton. Lásd [A hálókernel](topic:solid-kernels).

Hogy egyáltalán kapcsolat nélkül is dolgozhasson, mentse el a PartCraftot offline használatra, amíg online van: válassza az alkalmazássáv {{ui:Mentés offline használatra}} gombját, és várja meg, amíg számol („Mentés: 40 / 212”), és ezt írja: **Offline használatra kész**. A mentett másolat tartalmazza a 3D könyvtárat és a hálókernelt, így utána a modellezés, a mentés, minden exportálás és a rajzok is működnek offline. Ha azt írja: **Nem sikerült menteni**, kattintson rá, hogy online újra megpróbálja; az **Az offline mód nem érhető el** azt jelenti, hogy ez a böngészőablak nem tud másolatot tartani (privát ablakok és egyes felügyelt számítógépek). A másolat mentése után az **Offline használatra kész** gombra kattintva felkínálja a {{ui:Mentés újra (a legújabb verzió beszerzése)}} és az {{ui:Az offline másolat eltávolítása}} lehetőséget. Részletek: [Offline munka](common:offline).

:::online
Online van. Akkor is, ha nem mentette offline használatra, miután a PartCraft betöltődött, és az állapotsor jelvénye „Hálókernel”-t ír, tovább dolgozhat, ha megszakad a kapcsolat. Csak ne töltse újra az oldalt, amíg nem kapcsolódik újra.
:::

:::offline
Offline van. Ha a PartCraft már nyitva van, dolgozzon tovább; a mentés és az exportálás is működik. Ha az alkalmazássáv azt írja: **Offline használatra kész**, a PartCraft kapcsolat nélkül, elölről is megnyílik; különben ne töltse újra ezt a lapot.
:::

## A böngészők közötti különbségek

- **Letöltések.** Minden böngészőnek saját letöltési mappája és saját módja van a rákérdezésre. Ha a böngésző megkérdezi, letölthet-e fájlokat ez az oldal, engedélyezze, különben a mentés és az exportálás nem működhet.
- A fájlok **húzása** a nézetre működik Chrome-ban, Edge-ben, Firefoxban és Safariban.
- **Fájlok telefonról vagy táblagépről.** iPhone-on és iPaden a Megnyitás a Fájlok alkalmazást mutatja; a mentett fájlok a Fájlok, Letöltések helyre kerülnek. Androidon a Letöltések mappába.

A fájlok tartalma nem különbözik a böngészők vagy operációs rendszerek között.
