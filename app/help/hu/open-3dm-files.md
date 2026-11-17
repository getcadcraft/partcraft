---
title: Egy .3dm-modell megnyitása szilárd testként
summary: A .3dm-fájl hálóit, polifelületeit és blokkjait egyetlen szilárd testként hozza be a PartCraft, amelyet vághat, amelyhez anyagot adhat és amelyre vázolhat; honnan származnak a háromszögek, és mi marad ki.
keywords: 3dm, nurbs, polifelület, brep, felületek, megjelenítési háló, kihúzás, blokkok, importálás, háló testté, mértékegységek, importált test
from: 8ae9571b
---

A PartCraft a `.3dm` fájlokat **szilárd testként** nyitja meg, ugyanúgy, ahogy egy [STL-, OBJ- vagy 3MF-hálót](topic:open-meshes). A test úgy működik, mint bármely más szilárd test: vághatja, hozzáadhat anyagot, fúrhat bele, mintázhatja, és vázolhat a sík lapjaira. Saját előzményei nincsenek.

## A fájl megnyitása

1. Válassza a {{ui:Megnyitás}} lehetőséget, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt, és válassza ki a `.3dm` fájlt. Vagy húzza a 3D-nézetre.
2. A PartCraft beolvassa, és megmutatja, mit talált: hány felületes objektum érkezik, hány lap származik a fájlban mentett hálókból, és hányat háromszögelt maga a PartCraft, minden javítást, valamint azt, hogy az eredmény **zárul-e**.
3. Ellenőrizze a **Mértékegység a fájlban** beállítást (a fájl a sajátját megadja; a PartCraft által fel nem sorolt mértékegységet, például a yardot, milliméterre váltja), és a **Felfelé a fájlban** beállítást.
4. Válassza a {{ui:Megnyitás testként}} lehetőséget, vagy a **Használja a következőhöz** beállítást és a {{ui:Hozzáadás ehhez az alkatrészhez}} gombot, ha az alkatrésznek már vannak jellemzői.

## Honnan származnak a háromszögek

A PartCraft ebben a verzióban háromszögekből építi a testeket, így a fájl minden felülete kis sík lapokká válik. Egy polifelület (és minden kihúzás) minden lapjához a **fájlban mentett megjelenítési hálót** veszi, ha van ilyen; ellenkező esetben **maga háromszögeli** (síkok, NURBS-felületek, forgásfelületek, kihúzott görbék és kihúzások, a széleik mentén vágva). Egy polifelület lapjai megosztják az élpontjaikat, így a zárt polifelület zárva érkezik. Az olyan felületfajtán lévő lapot, amelyet a PartCraft még nem olvas, kihagyja, és a párbeszédpanel megmondja, hány és milyen fajta; az eredmény ekkor általában nem zárul.

## A fájl minden eleme egy testté lesz

Minden látható háló, polifelület és kihúzás, valamint minden blokkelhelyezés **egyetlen** testbe kerül oda, ahová a fájl teszi. A rejtett objektumok, vagy a kikapcsolt rétegen lévők kimaradnak. Ha a fájl több különálló testet tartalmaz, a test több darabból áll: ha külön testként szeretné, nyissa meg mindegyiket a saját fájljából.

## Mi marad ki (és erről szól)

Görbék, pontok, pontfelhők, szövegek, méretek, sraffozások és fények kimaradnak: a test csak lapokat fogad be. Ugyanígy kimaradnak a SubD-objektumok (először alakítsa őket hálóvá vagy polifelületté abban a programban, amely a fájlt készítette), más fájlokból hivatkozott blokkok, valamint a színek, rétegek és nevek (a PartCraft-testeknek itt nincsenek saját ilyenek).

## Ha nem zárul

A nyitott polifelületeknek és felületeknek (egyetlen vágott felület, hiányzó lapú alak) nincs belsejük, így nem lehetnek szilárd test. A párbeszédpanel megmondja, hány nyílás maradt, és nem ad hozzá semmit. Csatlakoztassa vagy zárja le az alakot abban a programban, amely készítette, mentse, és nyissa meg újra. Lásd: [Mikor nem zárul egy háló](topic:open-meshes#when-a-mesh-does-not-close).
