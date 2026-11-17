---
title: Kézikönyv indítása az Illusztrálásban
summary: Az Illusztrálás munkaterület a tervéből készít kézikönyveket: nézetek, szétszedett vonalrajzok pozíciószámokkal és alkatrészlistával, lépésenkénti útmutatók, animációk és egy 3D-fájl, amelyet a vevő CAD nélkül is megnyithat. A kézikönyv önálló fájl.
keywords: illusztrálás, kézikönyv, műszaki illusztráció, dokumentáció, szétszedett nézet, alkatrészlista, útmutató, partcraft-manual
from: e447e0ab
---

Az **Illusztrálás** az a munkaterület, amely a tervhez tartozó dokumentumokat készíti: szétszedett nézetek pozíciószámokkal és alkatrészlistával, vonalrajzok kézikönyvekbe, lépésenkénti útmutatók, animációk és egy 3D-fájl, amelyet a vevő CAD nélkül is megnyithat. Az eszköztár elején lévő {{ui:Munkaterület}} váltóban válassza az {{ui:Illusztrálás}} lehetőséget.

A **kézikönyv** önálló fájl (`<name>.partcraft-manual.json`). Minden alkatrész alakjának, a termékfának és az alkatrészek tulajdonságainak másolatát tárolja, valamint hivatkozást a forrására, így a kézikönyvön lehet dolgozni, miközben a terv tovább fejlődik. Ha a terv változik, a [Frissítés a tervből](topic:illustrate-update) hozza át a változásokat.

## Új kézikönyv indítása

Kattintson a {{ui:Kézikönyv}} csoport {{ui:Új}} gombjára, majd:

- {{ui:A megnyitott alkatrészből}}: a Tervezésben megnyitott alkatrész.
- {{ui:A megnyitott összeállításból}}: ez jelenik meg, ha összeállítás van megnyitva; az alkatrészei, helyzetük, cikkszámaik, anyagaik és szétszedett nézeteik átkerülnek.
- {{ui:Összeállításfájlból…}}: egy mentett `.partcraft-asm.json`; a PartCraft előbb elkészíti az alkatrészeit.
- {{ui:Másik fájlból…}}: glTF (.glb, .gltf), OBJ, STL vagy 3MF. A fájl szerkezete és nevei megmaradnak, és ha egy alkatrész többször szerepel (ugyanaz az alak kétszer elhelyezve), egy alkatrészként jelenik meg mennyiséggel. Az STL- és OBJ-fájlok nem mondják meg a mértékegységüket, ezért rákérdezés történik. Az STL-fájlokat Z felfelé mutató tengellyel olvassa; a glTF és a 3MF megadja a sajátját.

Amíg kézikönyv van megnyitva, az Illusztrálás a kézikönyv saját alkatrész-másolatait mutatja; a Tervezésben megnyitott alkatrész vagy összeállítás rejtve marad, amíg vissza nem tér a Tervezésbe.

## Mentés és megnyitás

A {{ui:Kézikönyv}} csoport {{ui:Mentés}} gombja (vagy a {{key:Mod+S}}) menti a kézikönyvet; a {{ui:Megnyitás}} egyet megnyit. Az Illusztrálásban minden változtatás a kézikönyv saját előzményének egy lépése: a {{ui:Visszavonás}} és az {{ui:Ismétlés}} az Illusztrálás megnyitott állapotában a kézikönyvre hat.

## Még nincs elkészítve

- A STEP-fájlok a {{ui:Másik fájlból…}} lehetőségnél még nem nyílnak meg. Nyissa meg a STEP-fájlt a Tervezésben (testként jön be: lásd [STEP-fájl megnyitása](topic:import-step)), és indítsa a kézikönyvet a {{ui:A megnyitott alkatrészből}} lehetőséggel, vagy mentse glTF, 3MF, OBJ vagy STL formátumban.
- A ModelCraft és a BimCraft még nem adhat modellt közvetlenül az Illusztrálásnak: mentse glTF (.glb) formátumban, és használja a {{ui:Másik fájlból…}} lehetőséget.

Tovább: [Nézetek és megjelenések](topic:illustrate-views).
