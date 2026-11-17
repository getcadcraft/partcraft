---
title: STEP-fájl megnyitása és építés rá
summary: A szállító vagy más CAD-program STEP-modelljét testként hozza be a PartCraftba, új alkatrészként vagy a meglévőhöz adva, beállíthatja, merre legyen a felfelé irány, és vázlatokat és jellemzőket adhat hozzá.
keywords: step, stp, importálás, step megnyitása, ap203, ap214, ap242, szállítói modell, előzmény nélküli test, importált test, felfelé tengely, z felfelé, y felfelé, háromszögek, facettált, összeállítás step
from: ca0eca5f
---

A PartCraft a STEP-fájlokat (`.step` vagy `.stp`, AP203, AP214 és AP242) **testként** nyitja meg, amelyre vázlatot rajzolhat, amelyet kivághat, fúrhat, és amelyet a saját jellemzőivel kombinálhat. A testnek nincs saját előzménye: nem módosíthatók azok a méretek, amelyekkel készült; csak hozzáadni vagy kivágni lehet belőle.

Ez a verzió minden alkatrészt a háló-kernellel épít, így a STEP-fájl **háromszögekként** olvasódik be: a sík lapok síkok maradnak, a görbe felületek (hengerek, kúpok, gömbök, tóruszok, B-spline felületek) sok kis sík lapra bomlanak. Térfogatuk a pontos értéktől a töredékszázalékon belül van. A görbe felületek pontos megtartásához pontos kernel kell, amely ebben a verzióban nincs.

## STEP-fájl megnyitása

1. Válassza az {{ui:Megnyitás}} parancsot, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt, és válassza ki a `.step` vagy `.stp` fájlt. Vagy húzza a 3D-nézetre.
2. A PartCraft beolvassa a fájlt, és megmutatja, mit talált, például: „AP214 fájl: 1 test, 10 lap, háromszögekként olvasva.” Alatta látható a háromszögek száma, az, amit kihagyott vagy összevont, és hogy a végeredmény zárt-e.
3. Ellenőrizze a **Felfelé a fájlban** beállítást. A STEP-fájl megmondja a saját mértékegységét (milliméter, hüvelyk, méter…); a PartCraft milliméterre vált, így a **Mértékegységek a fájlban** beállításnál a Milliméter látszik, „a fájl így mondja”. A **Méret itt** mutatja, mekkora lesz.
4. Válassza az {{ui:Megnyitás testként}} lehetőséget üres alkatrészhez, vagy a {{ui:Hozzáadás ehhez az alkatrészhez}} / {{ui:Új alkatrész}} lehetőséget, ha az alkatrésznek már vannak jellemzői. Hozzáadásnál a PartCraft rákérdez a **Felhasználás** beállításra: hozzáadás, kivágás vagy csak az átfedés megtartása.

Az **Imported1** jellemző megjelenik az előzményekben, az állapotsoron pedig például ez látszik: „plate.step testként áll: 57995.937 mm³, 6 sík lap, amelyre vázlatot lehet rajzolni.”

## Összeállítás STEP-je

Az összeállítás **egy testként** jön be, minden alkatrészével ott, ahol a fájl elhelyezi („a fájlban elhelyezett 3 alkatrész ott jön be, ahol áll”). A kétszer használt alkatrész kétszer jön be. Az alkatrészek nevei és az összeállítási fa nem marad meg.

## Felfelé mutató irány beállítása

A legtöbb CAD-program Z felfelé használ; a PartCraft Y felfelé. Alapértelmezetten a PartCraft úgy forgatja a fájlt, hogy annak Z tengelye itt felfelé mutasson. Ha az alkatrész oldalán fekve érkezik, jelölje ki az **Imported1** jellemzőt, és állítsa a **Felfelé a fájlban** beállítást **Y felfelé** értékre. A **Mértékegységek a fájlban** és a **Felhasználás** beállítás is ott módosítható; mindegyik változtatás egy visszavonási lépés.

## Építés rá

- Kattintson a test egyik sík lapjára, és válassza a {{ui:Vázlat ezen a lapon}} lehetőséget. A STEP-modell sík lapjai megtartják helyüket, amikor a test újraépül.
- Adjon hozzá vágásokat, furatokat, kiemelkedéseket, mintákat és tükrözéseket, ahogy bármely alkatrésznél.
- Ellenőrizze a méretet az **Alkatrész** dobozban: térfogat, felszín, méret.

A lekerekítésekhez, letörésekhez és héjazáshoz pontos kernel kell, ahogy ebben a verzióban bármely alkatrésznél ([A háló-kernel](topic:solid-kernels)).

## Tárolás helye

A háromszögek a `.partcraft.json` fájlon **belül** tárolódnak, így az alkatrészfájl önálló: a STEP-fájlra már nincs szükség.

## Üzenetek

| Üzenet | Jelentése |
|---|---|
| "part.stp" nem STEP-fájl (nem ISO-10303-21-gyel kezdődik). | A fájl nem sima STEP-szöveg. Kérjen AP203, AP214 vagy AP242 STEP-fájlt a feladótól |
| A STEP-fájl nem olvasható: az adatrész hiányzik vagy sérült. | A fájl csonka vagy sérült. Másolja újra |
| A STEP-fájl nem tartalmaz test- vagy felületi testet: nincs mit behozni. | A fájl csak rajzokat, pontokat vagy adatokat tartalmaz. Kérjen testet |
| Ez a STEP-fájl túl nagy (60 MB felett), így itt nem importálható. és az olvasó egyéb korlátai (elemek, lapok, háromszögek) | Egyszerűsítse a modellt a forrásnál, vagy küldje az alkatrészeket egyenként |
| „… a fájl sérült sorait kihagyta.” | Néhány sort nem lehetett beolvasni; a többi bekerült. Ellenőrizze a testet |
| „… lapokat nem lehetett háromszögekre bontani, ezért kimaradtak.” | Ezek a lapok lyukakat hagynak, amelyeket a PartCraft megpróbál kitölteni; ha a test nem zárul, nem kerül be |
| „… a be nem olvasható típusú lapok (…) kimaradtak.” | Ritka felülettípus. Kérjen olyan modellt, amelyben sima vagy B-spline felületek vannak |
| „Nem záródik …” | A lapok nem zárt testet alkotnak (felületmodell, vagy kimaradt lapok). A PartCraft megmutatja a nyílásokat, és nem ad hozzá semmit |

## Korlátok

- A görbe lapokat sík lapokként rajzolja és méri, ahogy ebben a verzióban minden alkatrészt. A PartCraft a fájl saját sík lapjait, hengereit, kúpjait, gömbjeit és tóruszait a testtel együtt megtartja, így a {{ui:Export}} › {{ui:STEP AP242 (pontos test)}} parancs ezeket valódi felületekként írja vissza, a furatokat furatként, a hozzáadott jellemzőkkel együtt. A fájlban spline-ként, végigvezetésként vagy forgásfelületként megadott lapok export során facettként maradnak. A 0.9.1 előtt mentett alkatrésznek nincsenek megtartott felületei: nyissa meg újra a STEP-fájlt, hogy azokat megkapja.
- A {{ui:Export}} › {{ui:DXF a vázlatról vagy sík lapról}} parancs, ha sík lapot jelöl ki, a fájl kerek furatát valódi körként írja ki.
- A színek, a testek nevei, az összeállítási szerkezet és a PMI (a fájlban lévő tűrések) nem olvasódnak be.
- A STEP mellett a PartCraft az STL-, OBJ- és 3MF-hálókat ([STL, OBJ vagy 3MF megnyitása](topic:open-meshes)) és a `.3dm` fájlokat ([.3dm-modell megnyitása](topic:open-3dm-files)) is testként nyitja meg. Az IGES és más programok saját fájljai nem támogatottak.
- A pontos kernelt tartalmazó verzióban importált STEP-testet tartalmazó alkatrész megtartja a STEP-szöveget; ez a verzió kihagyja ezt a jellemzőt („még nincs elkészítve”). Nyissa meg újra a STEP-fájlt, hogy háromszögekként kerüljön be.
