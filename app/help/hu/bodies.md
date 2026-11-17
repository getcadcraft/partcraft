---
title: Testek egyesítése, mozgatása és méretezése; pályamintázatok
summary: Készítsen külön testeket, majd utólag egyesítse, vonja le vagy metssze őket, mozgassa, forgassa, igazítsa vagy másolja őket, méretezze egyenletesen vagy X, Y és Z szerint, illetve másoljon jellemzőket vagy testeket egy görbe mentén.
keywords: test, testek, többtestes, új test, egyesítés, logikai művelet, levonás, metszet, unió, eszközök megtartása, test mozgatása, test másolása, test forgatása, igazítás, eltolás, méretezés, nem egyenletes méretezés, nyújtás, affin, pályamintázás, mintázat görbe mentén, tömb pálya mentén, görbe vezérelt mintázat
from: 6b1ea820
---

:::note
**Ebben a verzióban még nincs elkészítve.** Több testtel való munkához pontos geometriai kernel kell, amely a PartCraft jelenlegi verziójában nincs meg: minden alkatrészt a háló-kernellel épít fel. A [Ami még nincs elkészítve](topic:not-built-yet) oldalon olvasható, mit tegyen helyette. Az oldal többi része úgy írja le a működést, ahogy a pontos kernellel működne.
:::

Egy alkatrész több testet is tartalmazhat. Minden külön test egy **test**. A legtöbb jellemző minden általa érintett testhez hozzáad vagy abból vág le; az ezen az oldalon található eszközök a kiválasztott teljes testeken dolgoznak. A Jellemzők csoport {{ui:Továbbiak}} menüjében találhatók: {{ui:Egyesítés}}, {{ui:Test mozgatása}}, {{ui:Test méretezése}} és {{ui:Pályamintázás}}. Mindegyikhez pontos kernel (OpenCascade) kell.

## Külön test készítése

Állítsa a kihúzás vagy a forgatás **Művelet** beállítását **Új test**re a jobb oldali panelen (a végigvezetésnek és az áthúzásnak is van ilyen). Az új test akkor is külön marad, ha átfedésben van a többivel. A **Metszet** csak az új alak és a meglévő anyag közös részét tartja meg.

A testek azon jellemző után kapnak nevet, amely létrehozta őket: például „Extrude2”. A másolat az eredeti nevéből és a másolást végző jellemző nevéből kap nevet: „Extrude2, copy 1 of Move1”. A nevek megmaradnak, ha a korábbi lépésekben módosítja a méreteket, így a testet használó jellemzők továbbra is megtalálják. Két vagy több test esetén az alkatrészpanel (kattintson az üres területre) a térfogatukkal együtt listázza őket.

## Test átnevezése vagy elrejtése

Kattintson a nézet üres területére az alkatrészpanel megjelenítéséhez. A testlistában (ez akkor látható, ha az alkatrésznek két vagy több teste van) minden sorban van egy névmező és egy {{ui:Elrejtés}} gomb.

- **Átnevezés:** írjon új nevet a mezőbe, és nyomja meg az {{key:Enter}} billentyűt, vagy kattintson máshova. Ezt utána minden panel használja: az Egyesítés, a Test mozgatása és a mintázatok. Ha a mezőt törli, a név visszaáll arra, amit a testet létrehozó jellemző adott.
- **Elrejtés:** kattintson a sorában lévő {{ui:Elrejtés}} gombra. A test kikerül a nézetből, a kattintások pedig átmennek rajta, így a mögötte lévő lapokat is kiválaszthatja. A {{ui:Megjelenítés}} visszahozza; az {{ui:Összes megjelenítése}} az összes elrejtett testet visszahozza.

Az elrejtés csak a nézetet változtatja meg. Az elrejtett test attól még el van készítve, beleszámít a térfogatba és a mérésekbe, és az STL-, 3MF- és STEP-exportba is mentésre kerül. A nevek és az elrejtett testek az alkatrészfájlban mentődnek, minden módosítás pedig a {{ui:Visszavonás}} egy lépése.

## Testek egyesítése

1. Shift+kattintással jelöljön ki egy lapot a **célként** szolgáló testen, majd minden **szerszámtest** egy lapját.
2. Válassza a {{ui:Továbbiak}}, majd az {{ui:Egyesítés}} parancsot.
3. A jobb oldali panelen válassza ki a **Műveletet**:

| Művelet | Eredmény |
|---|---|
| Egyesítés | A cél és a szerszámok egyetlen testté válnak |
| Levonás | A szerszámok le lesznek vonva a céltestből |
| Metszet | Csak az marad meg, amit a cél és minden szerszám közösen tartalmaz |

A **célként** szolgáló test az, amelyik megtartja a nevét. Jelölje be vagy törölje a jelölést a **Szerszámtestek** mellől, vagy használja a **Kiválasztás a nézetben** lehetőséget, és kattintson a lapjaikra. A **Szerszámtestek megtartása** a szerszámokat is a helyükön hagyja (hasznos például egy forma és a magja esetén). Ha egy szerszámtestet egy korábbi egyesítés már felhasznált, a panel ezt jelzi, ahelyett hogy másik testet választana.

## Test mozgatása vagy másolása

1. Válassza a {{ui:Továbbiak}}, majd a {{ui:Test mozgatása}} parancsot. A legújabb test be van jelölve; jelölje be a mozgatandókat.
2. Válassza ki a **Mozgatás** típusát:

| Mozgatás | Mit állít be | 
|---|---|
| Eltolás | **ΔX**, **ΔY**, **ΔZ** milliméterben |
| Pont pontba | **Kezdet** és **Vég**: kattintson egy él vége közelében, egy ponti jellemzőn vagy egy lap valamely pontján |
| Forgatás tengely körül | **Tengely** (X, Y, Z, tengelyjellemző, vagy **Kiválasztás**: egyenes él, kör vagy henger) és **Szög (°)** |
| Lap igazítása lapra vagy síkra | **Mozgatandó lap** (a test egy síkfelülete), **Erre** (síkfelület vagy sík) |

Az igazítás úgy forgatja a testet, hogy a lapja a másik lapon feküdjön, lap a laphoz, majd csak azon lap normálisa mentén csúsztatja. Az **Azonos irány** a másik irányba fordítja. A **Másolás** megtartja az eredetit, a mozgatott másolatot pedig új testként hozzáadja.

## Test méretezése

1. Válassza a {{ui:Továbbiak}}, majd a {{ui:Test méretezése}} parancsot, és jelölje be a testeket.
2. Adja meg a **Léptéktényezőt**, vagy törölje az **Egyenletes** jelölését, és adja meg a **Léptéktényező X**, **Léptéktényező Y** és **Léptéktényező Z** értékeket (a világtengelyek mentén).
3. A **Körül** a pont, amely helyben marad: a testek határoló dobozának középpontja vagy egy Ön által kiválasztott pont.

Az egyenletes méretezés pontos. A nem egyenletes méretezés a köröket ellipszissé alakítja: a henger elliptikus hengerré válik, amelyet egyetlen analitikus felület sem tud leírni, ezért a görbe lapok B-spline felületekké válnak, amelyek a pontos alaktól legfeljebb 0,0000004 mm-re térnek el; a sík lapok és az egyenes élek pontosak maradnak. A panel jelzi, hogy melyik történt. A léptéktényezőnek nullánál nagyobbnak kell lennie (tükrözéshez használja helyette a {{ui:Tükrözés}} parancsot).

## Másolás útvonal mentén

1. Jelölje ki a másolandó jellemzőt az előzménylistában, vagy ne jelöljön ki semmit, így a legújabb testet másolja.
2. Válassza a {{ui:Továbbiak}}, majd a {{ui:Pályamintázás}} parancsot. Az útvonal a legújabb, még fel nem használt vázlat lesz.
3. A jobb oldali panelen állítsa be:

| Beállítás | Mit csinál |
|---|---|
| **Másolás** | Testek (minden másolat új test) vagy Jellemzők (ugyanúgy egyesítve vagy levonva, mint az eredeti) |
| **Útvonal** | Jelölje be a vázlatokat, vagy válassza a **Modellélek kiválasztása** lehetőséget; a részeknek végig-végig csatlakozniuk kell |
| **Darabszám** | Összes darab, az eredetit is beleértve |
| **Távolság** | Egyenlő (nyitott útvonal végéig, vagy zártnál körbe elosztva) vagy adott távolság |
| **Irányítás** | Követi az útvonalat (minden másolat vele együtt fordul) vagy Rögzített (a másolatok párhuzamosak maradnak) |
| **Irány megfordítása** | Az útvonal mentén az ellenkező irányba halad |

A másolatok ott kezdődnek, ahol az útvonal az eredetihez a legközelebb halad, és a görbe mentén hosszban vannak elosztva.

A {{ui:Lineáris}} és a {{ui:Körkörös}} mintázatok is másolhatnak testeket: jelölje be a **Testek másolása** lehetőséget a panelükön, és válassza ki a testeket; minden másolat új test lesz.

## Korlátok

- A testekhez pontos kernel kell; a háló-kernel egyetlen testet tart meg, és ezt jelzi is.
- A nem egyenletes méretezés a görbe lapokat közelítő B-spline felületekké alakítja (lásd fent), nem pontos hengerekké vagy kúpokká; az eltolt felületek ilyen módon még nem méretezhetők.
- Egy csavarodó 3D görbén az útvonal követése a másolatot csavarodás nélkül viszi; sík útvonalakon a fordulás pontos.
- Az {{ui:Egyesítés}} csak testeken működik. A felülettesteket az {{ui:Összevarrás}} paranccsal kell összekapcsolni.

Lásd még: [Referenciasíkok, tengelyek és pontok](topic:reference-geometry) az „objektumok között” lévő pontokhoz és síkokhoz, valamint [Mintázat- és tükrözési jellemzők](topic:patterns-mirror).
