---
title: Fájlok: megnyitás, mentés és exportálás
summary: A PartCraft által megnyitott és mentett alkatrész- és összeállításfájlok, minden exportformátum és az, hogy mit tartanak meg, hol vannak a fájlok, és mi változik offline módban vagy böngészőnként.
keywords: megnyitás, mentés, exportálás, letöltés, fájl, partcraft.json, összeállításfájl, stl, 3mf, step, dxf, pdf, hol vannak a fájlaim, offline, mentés másként
from: e5fbc7e3
---

A PartCraft a számítógépén lévő fájlokkal dolgozik. Alkatrészt soha nem tölt fel, és nincs fiók vagy felhőtárhely. A felhős mentés még nem érhető el.

## Amit a PartCraft megnyit

| Fájl | Kiterjesztés | Hogyan |
|---|---|---|
| PartCraft-alkatrész | `.partcraft.json` | {{ui:Megnyitás}}, {{key:Mod+O}}, vagy húzza a 3D nézetre |
| PartCraft-összeállítás | `.partcraft-asm.json` | Ugyanígy: a PartCraft felismeri a típusát |
| STEP-test | `.step`, `.stp` | Testként, háromszögekként olvasva: [STEP-fájl megnyitása és építés rá](topic:import-step) |

Az STL, OBJ és 3MF hálók szintén testként nyílnak meg ([STL, OBJ vagy 3MF megnyitása](topic:open-meshes)), ahogyan a `.3dm` fájlok is ([.3dm modell megnyitása](topic:open-3dm-files)). A DXF, IGES és más programok saját alkatrészfájljai nem nyithatók meg (lásd [Ami még nincs elkészítve](topic:not-built-yet)).

Megnyitáskor érvényes szabályok:

- Az alkatrész- vagy összeállításfájl nevének `.json`-ra kell végződnie, a fájl pedig legfeljebb 50 MB lehet.
- A fájlokat a megjelenítés előtt ellenőrzi a rendszer. A sérült vagy szerkesztett fájlt egyszerű indokkal utasítja el, például: „Ez nem PartCraft-fájl.”
- Az újabb PartCraftban mentett fájl nem nyitható meg: „Ezt a fájlt az újabb PartCraft mentette (fájlverzió: 3); ez a verzió a 2-est olvassa.” A régebbi fájlok megnyílnak.
- Ha a képernyőn lévő alkatrészben nem mentett módosítások vannak, a PartCraft előbb rákérdez: {{ui:Mégse}}, {{ui:Módosítások elvetése}} vagy {{ui:Előbb mentés}}.

## Mentés

A {{ui:Mentés}} vagy a {{key:Mod+S}} a képernyőn lévő állapotot menti:

- Alkatrésznél: `<alkatrész neve>.partcraft.json`, a teljes előzmény (vázlatok, kapcsolatok, méretek, jellemzők, visszagörgetési pozíció), a rajzlap metszet-, részlet- és GD&T-jegyzetei, valamint egy korábbi verzióban importált STEP-test teljes szövege. Az ebben a verzióban nem elkészíthető jellemzők változatlanul mentődnek vissza. Maga a test nincs tárolva; a PartCraft a fájl megnyitásakor újraépíti az előzményekből.
- Összeállításnál: `<összeállítás neve>.partcraft-asm.json`, **benne minden alkatrésszel**. Egyetlen fájl tartalmazza az egész összeállítást, így önmagában is elküldhető.

A mentés **letöltés**. A böngésző a letöltések mappájába teszi a fájlt, vagy megkérdezi, hová mentse, ha így állította be. Újabb mentés újabb letöltést hoz létre; a böngésző a `Part1 (1).partcraft.json` nevet adhatja neki, a régi fájl felülírása helyett. A fájlokat a {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}} alkalmazásban nevezheti át vagy helyezheti át tetszés szerint.

Az alkatrész nevében a betűkön, számokon, szóközökön, `_`, `.` és `-` jeleken kívüli karakterek fájlnévben `_` jelre cserélődnek.

:::tip
A legtöbb böngészőben van beállítás, amely minden letöltésnél megkérdezi, hová mentse a fájlt. Kapcsolja be, ha minden alkalommal „Mentés másként” lehetőséget szeretne: a Chrome-ban és az Edge-ben a beállítások Letöltések részében; a Firefoxban az Általános, majd a Fájlok és alkalmazások részben; a Safariban az Általános, majd a Fájl letöltési helye alatt.
:::

A letöltések helyéről és a fájlok biztonságos megőrzéséről bővebben: [Hol vannak a fájljai](common:your-files).

## Exportálás

Az {{ui:Export}} menü más formátumokat ír ki. Mindegyik letöltés, az alkatrész neve alapján elnevezve.

| Menüpont | Fájl | Tartalma |
|---|---|---|
| {{ui:STL, 3D-nyomtatáshoz}} | `<név>.stl` | A test háromszögeinek bináris STL-je, milliméterben, **Z felfelé** |
| {{ui:3MF, 3D-nyomtatáshoz}} | `<név>.3mf` | 3MF a testtel egyetlen objektumként, milliméterben, **Z felfelé** |
| {{ui:STEP AP242 (pontos test)}} | `<név>.step` | Egyetlen pontos test, milliméterben, Z felfelé: a kerek felületek valódi hengerekként, kúpokként, gömbökként és toruszokként. Más CAD- és CAM-programokhoz használandó STEP |
| {{ui:STEP AP214 (pontos test)}} | `<név>.step` | Ugyanez a pontos test a régebbi AP214 sémában |
| {{ui:STEP (lapokra bontott, hálókernel)}} | `<név>.step` | A hálóból készült, sík lapokból álló test: **a kerek felületek sok kis sík facetta**. Milliméterben, a PartCraft saját tengelyeiben (Y felfelé). Ahhoz a programhoz, amely nem fogadja el a pontos fájlt |
| {{ui:DXF a vázlatról vagy sík lapról}} | `<név> - <vázlat>.dxf` vagy `<név> - face.dxf` | DXF R12. Vázlatnál: vonalak, ívek, körök és pontok a vázlat saját koordinátáiban, a PROFILE, CONSTRUCTION és POINTS rétegeken. Kijelölt sík lapnál: a körvonalai zárt polivonalként (a kerek élek facettáival) |
| {{ui:Rajz (PDF): nézetek, metszet, részlet, GD&T}} | `<név> - drawing.pdf` | Az A3-as rajzlap: három nézet, axonometrikus, metszet és részlet, ha be van állítva, összes méret, GD&T-jelek, rajzfej |

:::note
Az {{ui:STEP AP242 (pontos test)}} a furatokat, kiemelkedéseket, lekerekítéseket, kúpokat, gömböket és toruszokat valódi felületükön írja ki, így egy másik program furatként tudja kijelölni a furatot; a **Görbék** beállítás ezt nem változtatja meg. A spline-oldalak, a modellezett menetek és az importált hálók nincsenek valódi felülettel, ezért ugyanebben a testben sík facettákként maradnak; az állapotsor megmutatja, hány van belőlük. Az {{ui:STEP (lapokra bontott, hálókernel)}} minden kerek felületet facettákként ír ki.
:::

- Az exportok a képernyőn lévő alkatrészre vonatkoznak. Összeállításban az export ki van kapcsolva; összeállításexport még nincs.
- Az STL-t, 3MF-et, a lapokra bontott STEP-et és a lap DXF-et mindig facetták alkotják. A **Görbék** beállítás (a jobb oldali panelen, ha semmi nincs kijelölve) határozza meg, milyen finomak legyenek: teljes körönként 32-től 256 facettáig. A sima nyomtatáshoz az STL vagy 3MF exportálása előtt válassza a Finom vagy Nagyon finom beállítást.
- A PDF-rajz a olvasó beépített Helvetica betűtípusát használja. A meg nem jeleníthető karakterek „?” jellel nyomtatódnak ki.

Lépésről lépésre: [Exportálás nyomtatáshoz, STEP és DXF formátumban](topic:export-files) és [Rajzlap készítése](topic:drawing-pdf).

## Nem mentett munka

- A PartCraft a megnyitott alkatrész vagy összeállítás helyreállítási másolatát tartja meg a böngészőben, röviddel minden módosítás után, így az összeomlás vagy a bezárt lap nem veszíti el a munkát: a PartCraft következő megnyitásakor megkérdezi: „Munka helyreállítása?”. Ez nem mentés: fájlba mentve őrizheti meg a munkáját. Lásd [Nem mentett munka helyreállítása](common:recover).
- Ha nem mentett módosításokkal próbálja bezárni a lapot vagy újratölteni, a böngésző megkérdezi: „Elhagyja az oldalt?”. Ez a böngésző saját párbeszédpanelje; a PartCraft nem módosíthatja a szövegét.
- A {{ui:Új}}, a {{ui:Megnyitás}} és az összeállítás bezárása előtt a rendszer rákérdez, mielőtt eldobná a nem mentett módosításokat.

## Online és offline

Minden a számítógépén történik: a hálókernel (WebAssembly-program) az alkalmazással együtt töltődik le, és helyben építi fel a geometriát, a fájlokat pedig a lemezről olvassa és írja. Alkatrészadat sem megy hálózaton keresztül. Lásd: [A hálókernel](topic:solid-kernels).

Ha teljesen kapcsolat nélkül akar dolgozni, online állapotban mentse a PartCraftot offline használatra: válassza az alkalmazássávon a {{ui:Mentés offline használatra}} lehetőséget, és várjon, amíg számol („Mentés: 40 / 212”), amíg meg nem jelenik az **Offline kész** felirat. A mentett másolat tartalmazza a 3D-könyvtárat és a hálókernelt, így utána a modellezés, a mentés, minden export és a rajzok offline is működnek. Ha a felirat **Nem sikerült menteni**, online állapotban kattintson rá újra; az **Offline nem érhető el** azt jelenti, hogy ez a böngészőablak nem tud másolatot tárolni (privát ablakok és egyes felügyelt számítógépek). Ha a másolat mentve van, az **Offline kész** feliratra kattintva felajánlja a {{ui:Mentés újra (a legújabb verzió beszerzése)}} és az {{ui:Az offline másolat eltávolítása}} lehetőségeket. Részletek: [Munka offline](common:offline).

:::online
Online van. Még offline használat mentése nélkül is, miután a PartCraft betöltött és az állapotsor „Hálókernel” jelzése megjelent, tovább dolgozhat, ha megszakad a kapcsolat. Csak ne töltse újra az oldalt, amíg vissza nem kapcsolódik.
:::

:::offline
Offline van. Ha a PartCraft már meg van nyitva, dolgozhat tovább; a mentés és az exportálás továbbra is működik. Ha az alkalmazássávon az **Offline kész** felirat látszik, a PartCraft kapcsolat nélkül is megnyílik a semmiből; ellenkező esetben ne töltse újra a lapot.
:::

## Böngészőnként eltérések

- **Letöltések.** Minden böngészőnek saját letöltési mappája és saját kérdezési módja van. Ha a böngésző megkérdezi, engedélyezheti-e az oldalnak a fájlletöltést, engedélyezze, különben a mentés és az exportálás nem működik.
- **Húzással való áthelyezés.** A fájl nézetre húzása a Chrome-ban, az Edge-ben, a Firefoxban és a Safariban működik.
- **Fájlok telefonról vagy táblagépről.** iPhone-on és iPaden a Megnyitás a Fájlok alkalmazást mutatja; a mentett fájlok a Fájlokba, a Letöltések mappába kerülnek. Androidon a Letöltések mappába.

A fájlok tartalma böngészők és operációs rendszerek között nem tér el.
