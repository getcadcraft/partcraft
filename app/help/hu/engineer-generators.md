---
title: Fizikából készült alkatrészek: generátorok
summary: A Mérnök munkaterület és a Generált test jellemző: válasszon generátort, állítsa be a bemeneteit (áramlás, nyomás, hőmérséklet, anyag, nyomtató), és kapjon egy alkatrészt, amelyet tankönyvi képletek méreteznek, adatlappal, gyártási ellenőrzésekkel és elemzőeszközöknek szánt fájlokkal. Ugyanazok a bemenetek mindig ugyanazt az alkatrészt adják.
keywords: mérnök, generátor, generált test, fizika, szabályok, hőcserélő, elosztó, csőcsonk, rács, giroid, adatlap, bemenetek, determinisztikus, ugyanazok a bemenetek ugyanaz az alkatrész, gyártási ellenőrzések, 3D nyomtatás, porágy
from: 5a387dc0
---

A **generátor** egy szkript, amely a követelményei alapján méretezi az alkatrészt, és megépíti. Egy hőcserélő generátor a mozgatandó hőt, a két áramlást és azok hőmérsékletét, a nyomást és az anyagot veszi figyelembe; kiszámolja, mekkora legyen a mag, és milyen vastag a fala, megépíti, és megmondja a használt számokat, és azt, honnan származnak. Módosítson egy bemenetet, és az alkatrész követi.

Az eredmény egy szokásos test az alkatrészben: szerepel a jellemzőlistában, nyomtatható, exportálható. A generátor maga is az alkatrészben marad, így a fájl bármely számítógépen megnyitható a generátor telepítése nélkül, és **az alkatrész megnyitása soha nem futtat szkriptet**.

## Test készítése

1. Válassza a {{ui:Mérnök}} munkaterületet a váltóban.
2. Válasszon egy generátort a listából (a PartCraft-tal együtt szállítottakat, majd azokat, amelyeket fájlból nyitott meg), és kattintson az {{ui:Új}} gombra.
3. A szkript lefut. Amikor kész, a test megjelenik a nézetben, a panel pedig megmutatja a bemeneteit, az **adatlapját** és az **ellenőrzéseit**.

Hozzáadhatja a Tervezésből is: {{ui:Jellemzők}} › {{ui:Továbbiak}} › {{ui:Generált test}}.

## Módosítás

Bármely bemenet módosítása után a test a gépelés befejezése után rövid idővel újra elkészül. A panel megmondja, melyik három állítás igaz:

- **Naprakész**: a test megegyezik a szkripttel és a bemeneteivel.
- **A bemenetek megváltoztak**: az alkatrészben lévő test a korábbi bemenetekből készült; most újra készül, vagy nyomja meg a {{ui:Futtatás}} gombot.
- **Még nem futott** vagy **Az utolsó futtatás sikertelen**: egy szkripthiba jelenik meg a sorával.

A {{ui:Leállítás}} megszakít egy túl hosszú futtatást. A visszavonás egy lépéssel visszavisz: egy futtatás egy lépés, egy bemenet egy lépés.

## Az adatlap

Minden számot, amelyet a generátor kiszámolt, felsorol a **mértékegységével** és azzal, **honnan származik** (tankönyvi képlet, szabvány, adatlap). Semmi sem rejtett állandó. Az adatlap része a fájlnak, így a következő számítógépen is ugyanaz. A [Adatkimenet](topic:data-out) leírja, hogyan mentheti JSON vagy PDF formátumban.

## Az ellenőrzések

A generátor ellenőrizheti a saját alkatrészét egy nyomtatási eljárással szemben: a kívánt eljárásnál vékonyabb falak és rések, laza darabok, üregek, amelyek port vagy gyanta csapdájába esnek, túl szűk furatok a kitisztításhoz, és alátámasztást igénylő túlnyúlások. Az eredmények a panelen és a {{ui:Problémák}} listában (a ⚠ gomb) jelennek meg, és az alkatrészszel együtt mentődnek.

Az eljárási értékek azok a kerek számok, amelyeket a nyilvános tervezési útmutatók adnak az eljárásra általában (FDM, SLA, SLS, fém porágy). **Nem a gépe specifikációi**: a műhelye értékeivel helyettesítse őket, mielőtt bármire támaszkodna. Az ellenőrzés voxelrácson dolgozik, ezért körülbelül egy voxel pontos: falat csak akkor jelez, ha a határnál egy voxelnél vékonyabb.

## Mi van a csomagban

| Generátor | Mit készít |
|---|---|
| Giroid-blokk | Giroiddal, Schwarz P-vel vagy gyémánt lappal kitöltött blokk: az egyszerűbb rács |
| Giroid hőcserélő | Egy kétfolyadékos hőcserélő magja, a teljesítmény alapján az hatékonyság-NTU módszerrel méretezve, a fala a nyomásból; egy cellán áramlási vizsgálattal ellenőrizhető a nyomásesés |
| Elosztó | Főcső és ágak, minden cső a rajta átfolyó áramlás alapján méretezve |
| Fokozatos rácsgerenda | Rács, amelynek fala ott vastagodik, ahol a topológia-optimalizálás szerint anyag szükséges |

Mindegyik első becslés tankönyvi képletekre épül. A [Mérnöki könyvtár](topic:engineering-library) felsorolja a képleteket és a korlátaikat. Futtassa a Szimulációt, a Hőtani vagy az Áramlási vizsgálatot az eredményen, mielőtt bármire támaszkodna.

## Exportellenőrzések

A Mérnök generátorai és adatlapjai exportellenőrzésről és szankciókról szóló közleményt hordoznak. Olvassa el a [Mérnöki exportellenőrzések](topic:engineer-export-notice) témakörben; minden adatlap alján is ott van.

## Még nincs elkészítve

- Csatlakozók, csonkok és szerelvények a hőcserélő magján: csak a mag készül el.
- Hőmérsékleti görbék az anyagszilárdsághoz: az anyagok szobahőmérsékleten vannak.
- Elágazási veszteségek és az áramlás megosztása a kimenetek között az elosztóban.
- Generátorok hozzáadása a bővítménykönyvtárból egy kattintással; fájl megnyitásakor egy generátor kerül ebbe a böngészőbe.
- Generátorok a többi alkalmazáshoz.
