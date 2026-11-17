---
title: A jellemzők és beállításaik
summary: Az eszköztár minden jellemzője a beállításaival, alapértékeikkel és korlátaival, a kihúzástól a lekerekítésen és héjazáson át az importált STEP-testekig, a jellemzők közös műveletei, valamint az alkatrész beállításai.
keywords: jellemzők, nincs még elkészítve, kihúzás, kivágás, forgatás, forgatott kivágás, furat, süllyesztett furat, lineáris minta, körkörös minta, tükrözés, lekerekítés, letörés, héjazás, importálás, beállítások, alapértékek, felbontás, görbék, facetták, letiltás, visszagörgetés
from: ab3a598e
---

A jellemzők az előzményekben abban a sorrendben jelennek meg, ahogyan készültek, és felülről lefelé épülnek újra. Mindegyik a fajtájáról kapja a nevét és egy számot: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

A PartCraft minden jellemzőt a hálókernellel épít fel. A lekerekítés és a letörés egyenes éleken működik, amelyek két sík lap között húzódnak, a héjazás pedig sík lapokat nyit meg. Az importált testekhez pontos kernel kell, amely ebben a verzióban nincs: ezek még nincsenek elkészítve, a lenti szakasz pedig azt írja le, hogyan marad meg a korábbi verzióban készült alkatrész. Lásd: [A hálókernel](topic:solid-kernels) és [Ami még nincs elkészítve](topic:not-built-yet).

## Vázlat

| Beállítás | Megjegyzés |
|---|---|
| Sík | Elölnézeti, Felső vagy Jobb oldali sík, vagy egy sík lap. Csak megjelenik, nem módosítható: a vázlat áthelyezéséhez készítsen újat |
| Állapot | Teljesen meghatározott, Részben meghatározott (a szabadságfokokkal), Túlhatározott vagy Üres |
| Geometria, kapcsolatok | Hány görbe, pont és kapcsolat van |
| Vezérlő méretek | A vázlat minden mérete, szerkeszthető |

Gombok: {{ui:Vázlat szerkesztése}}, {{ui:Exportálás DXF-ként}}.

## Kihúzás és kivágás

Az {{ui:Extrude}} és a {{ui:Cut}} ugyanazt a jellemzőt hozza létre, eltérő kezdő beállításokkal.

| Beállítás | Választható értékek | A Kihúzás kezdő értéke | A Kivágás kezdő értéke |
|---|---|---|---|
| Művelet | Boss (anyag hozzáadása), Kivágás (anyag eltávolítása), Közös rész (az átfedés megtartása), Új test (ebben a verzióban még nincs elkészítve) | Boss | Kivágás |
| Vég | Vak (adott mélység), Középsík (mindkét irányba), Teljesen átmenő | Vak | Teljesen átmenő |
| Mélység (mm) | 0-nál nagyobb, legfeljebb 1 000 000 | 10 | 10 |
| Irány megfordítása | Ki / be | Ki | Ki |

- Profil: a vázlat minden zárt hurka tömör vonalakból, körökből és ívekből. A hurkokon belüli hurkok furatok.
- A Teljesen átmenő csak kivágásnál működik. A kiválasztott oldalon át teljesen átmegy az alkatrészen.
- A kivágás az anyagba megy, a vázlatsík kifelé mutató oldalától elfelé; az Irány megfordítása ezt megfordítja.

## Forgatás és forgatott kivágás

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Művelet | Boss, Kivágás | Boss ({{ui:Forgatás}}), Kivágás ({{ui:Továbbiak}} › {{ui:Forgatott kivágás}}) |
| Szög (°) | 0-nál nagyobb, legfeljebb 360 | 360 |
| Tengely | Első középvonal, a vázlat bármely vonala vagy középvonala, vagy a vázlat síkjában fekvő tengelyjellemző | Első középvonal |

- A profilnak a tengely egyik oldalán kell maradnia. Érintheti is.
- A forgatás tengelyét használhatják a körkörös minták és az összeállítási kapcsolatok.

## Furat

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Típus | Egyszerű, Süllyesztett furat | Egyszerű |
| Átmérő (mm) | 0-nál nagyobb | 6 |
| Teljesen átmenő | Be / ki | Be |
| Mélység (mm) | Ha a Teljesen átmenő ki van kapcsolva | 10 |
| Süllyesztés ⌀ | A furatnál szélesebb | 11 |
| Süllyesztés mélysége | A vak furatnál sekélyebb | 6 |
| Irány megfordítása | Ki / be | Ki |

- Egy furat minden szabad pontnál (a Pont eszközzel készített pontoknál). A panel megmutatja, hány van.
- A furatok a vázlatsíkra merőlegesen, az anyagba fúródnak.
- Minden furat tengelyét használhatják az összeállítási kapcsolatok („Hole1, furat 2”).

## Lineáris minta

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Másolandó jellemzők | A fölötte lévő bármely test-jellemző | A kijelölt jellemző, különben az utolsó test-jellemző |
| Irány | X tengely, Y tengely, Z tengely; egy korábbi vázlat vonala; egy forgatás tengelye; egy kijelölt él | X tengely (vagy az a él, amelyet a hozzáadáskor kijelölt) |
| Távolság (mm) | Bármely szám | 20 |
| Darabszám | 1-től 1000-ig, az eredetit is beleértve | 3 |
| Irány megfordítása | Ki / be | Ki |

## Körkörös minta

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Másolandó jellemzők | Mint a lineárisnál | Mint a lineárisnál |
| Tengely | Mint az Irány fent | Az utolsó forgatás tengelye, különben az Y tengely (vagy a kijelölt él) |
| Szög (°) | 0-nál nagyobb, legfeljebb 360. A 360 egyenletesen osztja el a másolatokat a teljes körben; a kisebb érték a megadott szögben szórja szét őket | 360 |
| Darabszám | 1-től 1000-ig, az eredetit is beleértve | 6 |
| Irány megfordítása | Ki / be | Ki |

## Tükrözés

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Tükrözés | A teljes test (az eddigi állapotában), vagy kiválasztott jellemzők | A kijelölt jellemző, különben a teljes test |
| Tükrözősík | Elölnézeti, Felső vagy Jobb oldali sík; egy sík lap | Jobb oldali sík, vagy a hozzáadáskor kijelölt sík lap |

## Lekerekítés és letörés

Ebben a verzióban a hálókernel két sík lap közötti egyenes élekre készíti el őket (külső vagy belső sarkoknál), egyetlen sugárral. Egy kerek él esetén ez jelenik meg: „Lekerekítés: ebben a verzióban csak két sík lap közötti egyenes élek működnek (a hálókernel ezeket készíti el). Kerekítse vagy ferdítse le a görbe éleket a vázlatban.”; ahol a lekerekített élek sarokban találkoznak, azok eltérítve (gérvágással) csatlakoznak, és a jellemző figyelmeztet: „Lekerekítés a hálókernellel: ahol a lekerekített élek találkoznak, gérvágással csatlakoznak, nem keverednek.” A letörés minden típusa (azonos távolság, két távolság, távolság és szög, az **Oldalak felcserélése** lehetőséggel) működik. Lásd: [Lekerekítés, letörés és üreges test](topic:fillet-chamfer-shell).

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Sugár (mm) (Lekerekítés) | 0-nál nagyobb | 2 |
| Távolság (mm) (Letörés) | 0-nál nagyobb, mindkét lapon azonos | 1 |
| Élek | A kijelölt élek, mindegyik a két összekötött lapjával megjelölve („Extrude1 végső lapja × Extrude1 oldala”), **Eltávolítás** gombbal | A hozzáadáskor kijelölt élek |

- A gomb választása előtt jelölje ki az éleket (több éleknél {{key:Shift}}+kattintás), vagy válassza a gombot kijelölés nélkül, és utána kattintson az élekre.
- A {{ui:Élek kijelölése}} (vagy a jellemzőre duplán kattintás) módosítja az éleket.
- Az éleket a két lap alapján tartja nyilván, így a fölöttük lévő méretváltozások után is megmaradnak.

## Héjazás

A hálókernel készíti el. Csak sík lapok nyithatók meg („Héjazás: ebben a verzióban csak sík lapokat nyit meg (a hálókernel készíti el).”); a különböző vastagságú falak még nincsenek elkészítve. Lásd: [Lekerekítés, letörés és üreges test](topic:fillet-chamfer-shell).

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Fal (mm) | 0-nál nagyobb | 2 |
| A falak kifelé nőnek (a lapok belül maradnak) | Ki: a falak befelé mennek. Be: a falak kifelé mennek | Ki |
| Nyitott lapok | Az eltávolított lapok, legalább egy, **Eltávolítás** gombbal | A hozzáadáskor kijelölt lapok |

A {{ui:Lapok kijelölése}} módosítja a nyitott lapokat.

## Importált test

STEP, STL, OBJ vagy 3MF fájl megnyitásával készül: háromszögekből álló testként, saját előzmények nélkül ([STEP-fájl megnyitása](topic:import-step), [STL, OBJ vagy 3MF megnyitása](topic:open-meshes)). Megjeleníti a fájlt, ahonnan származik, és azt, amit az importálás javított; a **Mértékegység a fájlban**, a **Felfelé a fájlban** és a **Felhasználás célja** szerkeszthető marad. Az előző verzióban, pontos kernellel importált STEP-test az előzményekben megmarad, nincs elkészítve jelöléssel; a STEP-fájlt újra meg kell nyitni, hogy háromszögekként kerüljön be.

| Beállítás | Választható értékek | Alapérték |
|---|---|---|
| Felfelé a fájlban | Z felfelé (a legtöbb CAD), Y felfelé | Z felfelé |

A minták és tükrözések másolhatnak importált testet, de lekerekítést, letörést vagy héjazást nem.

## Minden jellemzőnek van

A jellemzőpanel alján:

| Gomb | Művelet |
|---|---|
| {{ui:Letiltás}} / {{ui:Letiltás megszüntetése}} | Kikapcsolja vagy bekapcsolja. Az a jellemző, amelyhez szükséges, kikapcsolt állapotban nincs elkészítve |
| {{ui:Visszagörgetés idáig}} | Csak az e fölötti jellemzőket építi meg. Az új jellemzők a visszagörgetési sávba kerülnek |
| {{ui:Mozgatás felfelé}} / {{ui:Mozgatás lefelé}} | Átrendezés, ha az, amit használ, nem kerülne alá. Egyéb esetben szürkén jelenik meg, az okkal együtt |
| {{ui:Törlés}} | Törli, és (rákérdezés után) minden olyan jellemzőt, amely ezt használja |
| Név | Átnevezés (legfeljebb 60 karakter) |

A vázlattal rendelkező jellemzők a **Vázlatméretek** elemet is felsorolják, ezek helyben szerkeszthetők.

## Állapotok az előzményekben

| Állapot | Megjelenés | Jelentés |
|---|---|---|
| Elkészült | Normál | Rendben |
| Figyelmeztetés | ⚠ | Elkészült, de ellenőrizni kell valamit: „Túlhatározott: 1 kapcsolat nem szükséges.” vagy „Ezután már nem maradt semmi az alkatrészből.” |
| Hiba | ⚠ hiba, piros | Nem készült el; az üzenet megmondja az okát |
| Nincs elkészítve | ⚠ nincs elkészítve | Egy hibás, letiltott vagy visszagörgetett jellemzőre van szüksége, vagy pontos kernelre, amely ebben a verzióban nincs meg („Söprés: még nincs elkészítve. …”) |
| Letiltva | ki | Kikapcsolva |
| Visszagörgetve | szürke, a visszagörgetési sáv alatt | Nem épül meg, amíg előre nem görgeti |

## Alkatrész beállításai

Kattintson az üres térre, hogy semmi ne legyen kijelölve. A jobb oldali panelen az **Alkatrész** jelenik meg:

- **Név**: az alkatrész neve, a fájlnevekhez és a rajz rajzfejéhez használatos (legfeljebb 120 karakter).
- **Görbék**: lásd lent.

### A görbék felbontása

A hálókernel a testet maga építi fel sík lapokból (facetták), ezért a nézet, az STL, a 3MF, a lapokra bontott STEP, a térfogat és a rajznézetek mind a **Görbék** beállítást követik: teljes körönként hány facetta legyen.

| Beállítás | Facetta teljes körönként | Egy kerek alakzat térfogata |
|---|---|---|
| Durva (32 teljes körönként) | 32 | Körülbelül 0,64 %-kal kisebb a valódi értéknél |
| Normál (64 teljes körönként) | 64 | Körülbelül 0,16 %-kal kisebb (alapérték) |
| Finom (128 teljes körönként) | 128 | Körülbelül 0,04 %-kal kisebb |
| Nagyon finom (256 teljes körönként) | 256 | Körülbelül 0,01 %-kal kisebb |

A finomabb görbék simább exportot és nézetet adnak, de lassabb újraépítést. A beállítás a alkatrészfájlban tárolódik.

## Ami még nincs elkészítve

Változó sugarú lekerekítések, kerek élek lekerekítése és letörése, görbe lapokat nyitó héjazás, lejtés görbe lapokon, söprés, loft, borda, pontos görbe lapokkal rendelkező STEP-testek, új testek, lejtések, egy lapig vagy csúcsig tartó „adott pontig” végek, valamint a test lapjaira és éleire való hivatkozások pontos kernelt igényelnek, amely ebben a verzióban nincs meg. Szintén nincs még elkészítve: a menetes és süllyesztett fejű furatok. Lásd: [Ami még nincs elkészítve](topic:not-built-yet).
