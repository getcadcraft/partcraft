---
title: A mérnöki könyvtár
summary: Tankönyvi képletek olvasható szkriptekben, SI-egységekben, minden eredménnyel a forrásával: csőben és csatornában való áramlás, hőátadás és hőcserélők, nyomásterhelt alkatrészek, gázdinamika, víz- és levegőtulajdonságok, anyagok és ellenőrzött mértékegységek. Hogy mire jó az egyes elem, és hol ér véget.
keywords: mérnöki, könyvtár, egységek, Darcy-Weisbach, Colebrook, Reynolds, súrlódási tényező, Dittus-Boelter, Gnielinski, NTU, hatékonyság, LMTD, borda, Barlow, Lamé, csőcsonk, izentropikus, Mach, fojtott áramlás, víz, levegő, tulajdonságok, anyag, források
from: 786ef967
---

A mérnöki könyvtár szkriptek gyűjteménye a Szkriptmunkaterület könyvtárában (`craftlib/eng`). Mindegyik egy olvasható függvény, felülről lefelé végigolvasható, fejléccel, amely megadja a **módszerét**, a **mértékegységeit**, a **korlátait**, a **hivatkozásait** és egy **ellenőrzést** kidolgozott számmal. Végig SI-egységeket használnak, és olyan mennyiségeket adnak vissza, amelyekhez **egység** és **forrás** tartozik, így az adatlap kiírhatja, honnan származik minden szám.

## Ellenőrzött egységek

A `to_si(10, 'bar', 'Pa')` átvált egy értéket, és nem fogad el olyan egységet, amely más dolgot mér (hosszúságot, ahol nyomás várt). A `from_si`, a `unit_convert(1, 'bar', 'psi')` és a `unit_kind('W/(m K)')` („hővezetési tényező”) ugyanígy működik. A `temp_k(25, 'C')` és a `temp_from_k` a hőmérsékleteket váltja át, amelyeknek eltolásuk van.

## Tulajdonságok

- `fluid('water', T)` és `fluid('air', T, p)`: sűrűség, viszkozitás, hővezetés, fajhő, Prandtl-szám. Víz 0 és 100 °C között, levegő 250 és 600 K között; azon kívül leáll, ahelyett hogy extrapolálna.
- `material('ss304')`: Young-modulus, Poisson-tényező, sűrűség, folyáshatár, hővezetés, fajhő, hőtágulás: szobahőmérsékleti értékek ugyanabból az adatlapból, mint a Szimuláció. Egy valódi tervezés a szállító hitelesített adatait használja. A hőmérsékleti görbék még nincsenek elkészítve.

## Áramlás csövekben és csatornákban

`reynolds`, `hydraulic_diameter`, `friction_factor` (lamináris, majd turbulens áramlásra a Colebrook-egyenlet; a 2300 és 4000 közötti tartományra nincs megbízható képlet, és ezt jelzi), `darcy_weisbach`, `minor_loss`, `pipe_flow` (kör keresztmetszetű cső, mindent egyszerre) és `rect_channel` (téglalap keresztmetszetű lamináris csatornák a Shah és London illesztéssel).

## Hőátadás

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (lamináris vagy turbulens esetet választ, és megnevezi a összefüggést), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` és `ntu_for` (a hatékonyság-NTU összefüggések ellenáramra, egyenáramra, köpenycsöves, keresztáramú és egy változó hőmérsékletű áramra), valamint `hx_size` (a teljesítményhez szükséges UA-méret; ha a teljesítmény nem érhető el, megmondja, mennyi lehetséges).

## Nyomásterhelt alkatrészek

`allowable_stress` (folyáshatár biztonsági tényezővel osztva), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, a kerületi vagy a nyírási kritérium szerint) és `wall_sphere`. Ezek tankönyvi tartalékok, **nem nyomástartó edény szabványos számítása**: nincs korróziós ráhagyás, illesztési hatásfok vagy szabványos tényező.

## Gázdinamika

`isentropic` (az arányok egy Mach-számnál), `mach_from_area`, `choked_flow`, `throat_area` és `exit_mach`, tökéletes gázra, súrlódás, hő vagy lökéshullám nélkül.

## Az eredmény ellenőrzése

A `check_stress`, a `check_thermal` és a `check_flow` a PartCraft saját szilárdsági, hővezetési és áramlási megoldóit futtatják egy szkriptből generált alkatrészen, és visszaolvassák a maximális feszültséget és elmozdulást, a hőmérsékleteket és a hőáramot, valamint egy csatornahálózat áteresztőképességét. Nem változtatnak semmit a megoldókon. A feszültség- és hőmérsékletellenőrzések voxeleket használnak, így egy görbe felület lépcsős lesz, és egy éles belső sarokban vagy pontterhelés alatti feszültség a voxelmérettől függ.
