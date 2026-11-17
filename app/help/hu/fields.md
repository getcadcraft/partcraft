---
title: Mezők: alakzatok távolságként
summary: Mi a mező (olyan alakzat, amelyet a felületéig mért távolságként tárolunk), hogyan építhető fel alapelemekből, logikai műveletekből, rácsokból és minimálfelületekből egy szkriptben, hogyan válik testté, és miért ad ugyanaz a szkript mindig ugyanazokat a bájtokat.
keywords: mező, előjeles távolság, sdf, voxel, gyroid, tpms, rács, logikai művelet, eltolás, héj, átmenet, kettős kontúrozás, determinisztikus, vízzáró, manifold, kocka
from: faab7480
---

A **mező** egy alakzatot úgy ír le, hogy megadja bármely pont távolságát az alakzat felületétől: belül negatív, a felületen nulla, kívül pozitív. Egy 5 sugarú gömb „a középpont távolsága mínusz 5”. Az alakzatok kombinálása a távolságok számtana: az egyesítés a két érték közül a kisebb, a metszet a nagyobb, egy alakzat kivonása a másikból pedig az első nagyobbik értéke mínusz a második. Egy alakzat 1 mm-rel való megnövelése 1-et vonz le a távolságból; egy üreges fal a távolság, visszahajtva.

Ezért jók a mezők rácsokhoz, csatornákhoz és változó vastagságú falakhoz: a giroid felülete az „a szinuszok összege nulla”, az alkatrész mentén 1-ről 3 mm-re vastagodó fal pedig egy szám, amely az alkatrészen át változik.

## A mezőtől a testig

A `to_body(field, h)` a mezőt `h` milliméterenként elhelyezett pontrácson mintavételezi, csak a felület közelében lévő pontokat tartva meg (ritka rács, 8 × 8 × 8-as kockákban), a felületet pedig **kettős kontúrozással** építi fel: egy csúcs felületi cellánként, ott, ahol a felületi síkok találkoznak, így az éles él a egy voxelen belül éles marad. A felület zárt, és minden élét pontosan két háromszög osztja meg; a jelentés ezt is közli. Az egy voxelnél vékonyabb, hozzávetőleg három voxelnél kisebb részletek összeszűkülhetnek, és ekkor a jelentés azt írja, hogy a test nem zárt test, nem pedig elrejti ezt.

A voxelméret a pontosság: egy gömb térfogata 25 voxel átmérő mellett néhány század százalékon belül pontos, a fal pedig csak annyira pontos, mint a voxelei. Minél durvább a rács, annál gyorsabb.

## Mindig ugyanazok a bájtok

A mezőnek nincs órája és nincs véletlen száma. A giroid szinusza és koszinusza, valamint a könyvtár minden exponenciális, logaritmikus és hatványozási művelete sima aritmetikából készül, így a Node, a Chrome, a Firefox és a Safari ugyanazokat a biteket adja; a rácsot rögzített sorrendben járja be, így ugyanaz a szkript ugyanazokkal a bemenetekkel bájtra azonos hálókat és adatlapokat ad, bármely számítógépen és bármennyi munkaszálon. Ezt tesztelték is, a böngészőt a Node-dal összevetve.

## Merre tovább

A [Generátor írása](topic:write-a-generator) mezőkkel épít alkatrészt; a [Mérnöki könyvtár](topic:engineering-library) méretezi.
