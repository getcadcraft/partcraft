---
title: Exportálás nyomtatáshoz, STEP és DXF formátumban
summary: Exportálja az alkatrészt STL vagy 3MF formátumban 3D-nyomtatáshoz, pontos STEP testként más CAD- és CAM-programokhoz, a vázlatot vagy a sík lapot pedig DXF formátumban lézeres és vízsugaras vágáshoz.
keywords: exportálás, mentés másként, ifc, bim, tulajdonságkészletek, stl, 3mf, 3D-nyomtatás, szeletelő, step, stp, pontos step, b-rep, ap242, ap214, cam, gépműhely, marás, dxf, lézer, vízsugaras, cnc, síkminta, profil, háló, lapokra bontott
from: e1de71d5
---

Az exportok más formátumú másolatok. Őrizze meg a `.partcraft.json` fájlt is: ez az egyetlen fájl, amelyet a PartCraft újra meg tud nyitni és szerkeszteni.

Minden exportálás a képernyőn lévő alkatrészre vonatkozik, milliméterben. Összeállításban az STL, 3MF, STEP és Rajz (PDF) az egész összeállítást exportálja: lásd [Alkatrészlista, robbantott nézetek és mozgó alkatrészek](topic:assembly-bom-explode). Ha még nincs test: „Még nincs exportálható test.”

## 3D-nyomtatáshoz: STL vagy 3MF

1. Opcionális: a sima, kerek felületekhez kattintson az üres térre, hogy semmi ne legyen kijelölve, majd a jobb oldali panelen állítsa a **Görbék** beállítást **Finom (128 teljes körönként)** vagy **Nagyon finom (256 teljes körönként)** értékre. Az STL és a 3MF mindig háromszögekből áll.
2. Válassza az {{ui:Export}}, majd az {{ui:STL, for 3D printing}} vagy a {{ui:3MF, for 3D printing}} lehetőséget.
3. A fájl letöltődik. Az állapotsorban például ez olvasható: „Exportálva: Part1.stl (bináris, mm, Z felfelé, 1536 háromszög).”

Mindkét formátum **Z felfelé** irányú, ahogyan a nyomtatók és a szeletelők várják. A PartCraft saját koordinátarendszere Y felfelé mutat, ezért az exportálás elforgatja az alkatrészt: ami a PartCraftban felfelé mutat (merőleges a felső síkra), az a szeletelőben is felfelé mutat, a felső síkra rajzolt alkatrész pedig fekve áll az ágyon. Szükség esetén a végső tájolást a szeletelőben állítsa be.

A 3MF újabb, kisebb formátum, amelyet a szeletelők a mértékegységgel együtt olvasnak be. Ha egy program nem fogadja a 3MF-et, használja az STL-t.

Ahhoz, hogy előre ellenőrizni tudja, hogy az alkatrész zárt-e, ráfér-e a nyomtató ágyára és sík lapon áll-e, használja az {{ui:Export}} › {{ui:Check for 3D printing (STL or 3MF)…}} lehetőséget: lásd [Alkatrész előkészítése 3D-nyomtatáshoz](topic:print-3d).

## Más CAD-programokhoz: STEP

Válassza az {{ui:Export}}, majd az {{ui:STEP AP242 (exact solid)}} lehetőséget. A rendszer az alkatrészt egyetlen pontos testként írja ki, milliméterben, Z felfelé fordítva. A kerek felületek valódi hengerekként, kúpokként, gömbökként és tóruszokként kerülnek ki, az élek pedig valódi körökként, így a másik program furatként tudja kijelölni a furatot. A STEP-fájlból megnyitott test megtartja a fájl sík lapjait, hengereit, kúpjait, gömbjeit és tóruszait, így azok is pontosan kerülnek ki. Azok a lapok, amelyekhez nincs ilyen felület (egy spline oldala, egy modellezett menet, STL, OBJ vagy 3MF hálóból származó test, a STEP-fájl spline-ja, valamint a húzott és forgatott lapok), ugyanabban a testben lapokra bontott sík felületekként maradnak meg; az állapotsor megmutatja, hány van belőlük. Az állapotsorban például ez olvasható: „Exportálva: Flange.step (AP242, pontos test, mm, Z felfelé): 14 lap valódi felületen (10 hengeres, 1 kúpos, 0 gömbi, 0 toroidális), 0 illesztett élgörbe.” A fájl csak a testet tartalmazza: nincs benne előzmény, vázlat vagy rajz. Ha a másik program csak az AP214 változatot olvassa, válassza az {{ui:STEP AP214 (exact solid)}} lehetőséget: ugyanez a test a régebbi sémában.

Mi pontos, és mi nem:

- A sík lapok, a hengerek (furatok, kiemelkedések, egyenes élekre készült lekerekítések), a kúpok (süllyesztések, lejtések), a gömbök és a toruszok pontosak, és pontosak egyenes, köríves és ellipszis élei is. A **Görbék** beállítás ezeket nem változtatja meg.
- Ahol két kerek felület metszi egymást (egy tengelyen átfúrt furat), az él a két felülethez 0,00001 mm-en belül illesztett sima görbe; az „illesztett élgörbék” számlálóban ezek szerepelnek.
- Az alkatrészen belül lévő zárt üreg a test üregeként kerül kiírásra. Több különálló test több testként kerül kiírásra.
- Az összeállítás még nem exportálható pontos STEP-ként: exportálja az egyes alkatrészeket.

A fájlt az OpenCascade-ban való visszaolvasással ellenőrizték: a program érvényes testeket jelent, a térfogatok pedig kézzel számolt értékekkel egyeznek. Még nem nyitották meg minden CAD- vagy CAM-programban. Ha valamelyik program nem fogadja el a fájlt, az {{ui:STEP (faceted, mesh kernel)}} ugyanazt az alakzatot sík lapokként írja ki (a PartCraft saját tengelyeiben, Y felfelé), kérjük, jelezze ezt a {{ui:Súgó}} › {{ui:Probléma jelentése}} menüponton keresztül.

Megmunkáláshoz a Gyártás munkaterület a pontos testet a beállítás saját munkakoordinátáiban is kiírja: lásd [Szerszámpályák és G-kód készítése](topic:manufacture#exact-step-for-the-shop).

## BIM-programokhoz: IFC, minden tulajdonsággal

Válassza az {{ui:Export}}, majd az {{ui:IFC 4 (with every property)}} lehetőséget. Az alkatrészt IFC 4 elemként írja ki épület- és üzemi modellekhez, alakját háromszögekként (Z felfelé, milliméterben), a PartCraft által ismert adatokkal együtt tulajdonságkészletekben:

| Tulajdonságkészlet | Tartalma |
|---|---|
| **PartCraft_Part** | Név, anyag és annak sűrűsége, az aktív konfiguráció, a testek száma; összeállításban emellett az alkatrészszám és a leírás |
| **PartCraft_Parameters** | Az alkatrész minden paramétere az értékével; a képlet kifejezése és a megjegyzés a tulajdonság leírásában szerepel |
| **PartCraft_TitleBlock** | A rajzfej mezői, amelyeket kitöltött (cím, rajzszám, revízió, cég, rajzolta, ellenőrizte és jóváhagyta, dátum, felület, általános tűrés), és a lapméret |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Térfogat, felületi terület, tömeg (anyaggal együtt) és a teljes méret |

Az anyag IFC-anyagként kerül hozzárendelésre, a rajzszám pedig az elem címkéje. Összeállításban minden alkatrész egyszer, tulajdonságait tartalmazó típusként íródik ki, a példányok pedig oda kerülnek, ahová az összeállítás helyezi, saját értékeikkel a **PartCraft_Instance** készletben: nevük, a darabjegyzékben szereplő tételszámuk, valamint az, hogy ez-e a földelt alkatrész.

## Lézeres, vízsugaras vagy CNC-profilokhoz: DXF

Kétféle DXF-fájl készíthető, mindkettő R12 verziójú, amelyet minden CAD- és CAM-program megnyit:

### Vázlat

1. Jelölje ki a vázlatot az előzményekben (vagy legyen megnyitva).
2. Válassza az {{ui:Export}}, majd a {{ui:DXF a vázlatról vagy sík lapról}} lehetőséget. (A vázlat jobb oldali panelén az {{ui:Exportálás DXF-ként}} gomb is megtalálható.)

Az eredmény a `<part> - <sketch>.dxf` fájl a vázlat saját koordinátáiban: a vonalak, valódi ívek és körök a **PROFILE** rétegen, a szerkesztési geometria a **CONSTRUCTION** rétegen, a szabad pontok pedig a **POINTS** rétegen találhatók.

### Az test egy sík lapja

1. Kattintson a nézetben egy sík lapra (például egy furatokkal ellátott lemez tetejére).
2. Válassza a jobb oldali panelen az {{ui:Lap exportálása DXF-ként}} gombot, vagy az {{ui:Export}}, majd a {{ui:DXF a vázlatról vagy sík lapról}} lehetőséget.

Az eredmény a `<part> - face.dxf` fájl: a lap körvonala és minden rajta lévő furat. A kerek furat (teljes kör ott, ahol a henger találkozik a lappal: egy átfúrt furat vagy egy megnyitott STEP-fájl furata) valódi körként kerül kiírásra a furat saját középpontjával és sugarával. Minden más körvonal zárt polivonal, és kerek élei (lekerekített sarkok, hornyok, ívek) lapokra bontott formában szerepelnek, ezért állítsa előbb a **Görbék** beállítást Finom értékre, ha a szerszám szorosan követi őket. Az állapotsor megmutatja, hány körvonal van, ezek közül hány valódi kör, és a lap területét.

Ha sem vázlat, sem sík lap nincs kijelölve: „Nyisson meg vagy jelöljön ki egy vázlatot, vagy válasszon ki egy sík lapot a DXF exportáláshoz.”

## Rajz

A PDF-rajzhoz külön útmutató tartozik: [Rajzlap készítése](topic:drawing-pdf).

## Nem elérhető formátumok

A glTF, OBJ, IGES és Parasolid formátumok ebben a verzióban nem exportálhatók. A DWG csak a változatcsomaggal készül, rajzlapként: lásd [Változatcsomag készítése a konfigurációkból](topic:variant-pack). Lásd még: [Fájlformátumok](topic:file-formats).
