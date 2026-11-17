---
title: Vágási maradékok megtartása és újrahasználata
summary: Elhelyezés után minden tábla maradéka számozott maradékdarabbá válik a készletlistában; a következő elhelyezés előbb a maradékdarabokat, majd az egész táblákat használja.
keywords: elhelyezés, vágási maradék, maradékdarab, készlet, maradék, hulladék, lemez, tábla, újrahasználat, anyag, vastagság, CSV
from: 7a68d4b8
---

Amikor alkatrészeket helyez el táblákon, minden tábla használható maradéka (az apró csíkok kivételével) megtartható **maradékdarabként**: számozott körvonalként (R-0001, R-0002 …) az anyaggal, a vastagsággal, a méretével és azzal a munkával, amelyből származik. A lista a fájllal együtt mentődik, és CSV-fájlként is elmenthető.

## Újrahasználat

Adja meg az **anyagot** és a **vastagságot**, hagyja bekapcsolva a {{ui:Előbb a maradékokat használja}} lehetőséget, és végezze el az elhelyezést. Az azonos anyagú és vastagságú maradékdarabokat a legkisebbtől kezdve próbálja ki; a ráférő alkatrészek a maradékdarab saját körvonalán belül, a szélétől távolabb kerülnek rájuk; ami nem fér el, új táblákra kerül. A munkajelentés megmondja, mely maradékdarabokat használta fel és mi maradt. Ha a {{ui:A maradékok mentése készletként}} be van kapcsolva, a {{ui:A munka hozzáadása a készlethez}} gomb ezt beírja a készletlistába: a felhasznált maradékdarab **Felhasznált** jelölést kap (a munkával együtt), és többé nem kínálja fel; a belőle megmaradt rész új maradékdarabbá válik, amely emlékszik az eredetijére.

## Mi számít maradékdarabnak

A maradékot a beállított távolsággal méri (egyetlen alkatrész sincs ennél közelebb a vágáshoz). A tábla huszadánál keskenyebb csíkok és a 2%-nál kisebb darabok selejtnek számítanak; mindkét határt módosítsa, ha műhelyében a kisebb darabokat is megtartják. Az alkatrészeken belüli lyukak az alkatrészek sajátjai, nem tartódnak meg. A tekercsnek nincsenek maradékdarabjai.

## A rajzon

Az elhelyezés DXF-je minden maradékdarab körvonalát a REMNANTS rétegen rajzolja meg, a közepén a számával, hogy a darabok vágáskor megjelölhetők legyenek.

Még nincs elkészítve: a maradékdarab szálirányának kezelése, vonalkódos vagy címkelap, tekercsek maradékdarabjai, több projekt közös készlete.
