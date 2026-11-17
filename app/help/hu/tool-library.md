---
title: A szerszámkönyvtár
summary: Mentse el a böngészőben használt szerszámait, hogy minden alkatrészhez elérhetők legyenek, és vigye át a szerszámkönyvtárakat számítógépek között JSON-fájlként.
keywords: szerszámkönyvtár, szerszámok, exportálás, importálás, JSON, szerszámok mentése, T-szám, végmaró, műhelyi szerszámok
from: 8b9f2483
---

A Gyártás **Szerszámok** lapja felsorolja az alkatrész szerszámait. A **Szerszámkönyvtár** alatt az alkatrészeken túl is megtarthatja saját szerszámait:

- A {{ui:A szerszám mentése}} hozzáadja a kijelölt szerszámot a **Mentett szerszámaim** közé; az {{ui:Az alkatrész összes szerszámának mentése}} mindegyiket hozzáadja. A mentett szerszámok ebben a böngészőben maradnak, és minden alkatrészben elérhetők. Egy már elmentett szerszám (ugyanaz a típus, méret, élszám és felülírások) nem kerül kétszer mentésre.
- A {{ui:Hozzáadás ehhez az alkatrészhez}} a kiválasztott mentett szerszámot az alkatrészbe veszi. Ha a T-száma már használatban van az alkatrész egy másik szerszámánál, a következő szabad számot kapja, és a panel ezt jelzi. Az {{ui:Eltávolítás a könyvtáramból}} törli a mentett listáról (nem azokról az alkatrészekről, amelyek már tartalmazzák).
- A {{ui:Szerszámok exportálása…}} az alkatrész szerszámait `.json` fájlba írja; a {{ui:Szerszámok importálása…}} az ilyen fájl szerszámait adja hozzá az alkatrészhez, ugyanazokkal a szabályokkal (a már meglévő szerszámot kihagyja, a foglalt T-számot pedig áthelyezi). A fájl a méreteket, az éleket, az anyagokat és a beírt előtolás- és fordulatszám-felülírásokat tartalmazza, azonosítókat nem. Használja arra, hogy egy műhely szerszámait másik számítógépre vigye, vagy kollégának adja át.

Ha a böngésző nem tudja megtartani a könyvtárat (a tárolás ki van kapcsolva, vagy tele van), a mentés ezt jelzi, és a **Szerszámok exportálása** a mód arra, hogy fájlban őrizze meg. A fájlnak ennek a verziónak vagy egy régebbi verziónak megfelelő PartCraft-szerszámkönyvtárnak kell lennie, legfeljebb 500 érvényes méretű szerszámmal; minden más elutasításra kerül, az okkal együtt.

A szerszámokhoz tartozó vágási sebesség- és forgácsvastagság-értékek kezdő értékek; lásd [Szerszámpályák és G-kód készítése](topic:manufacture).
