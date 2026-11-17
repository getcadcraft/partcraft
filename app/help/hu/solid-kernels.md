---
title: A hálókernel
summary: A PartCraft ebben a verziójában minden alkatrészt a böngészőben futó hálókernel épít fel. Mit jelent ez a kerek felületekre, térfogatokra és fájlokra, hogyan ismerhető fel, hogy működik, és mely jellemzők várnak pontos kernelre.
keywords: kernel, háló, manifold, pontos, b-rep, lapokra bontott, görbék, opencascade, occt, lekerekítéshez pontos kell, még nincs elkészítve, offline, webassembly
from: f931645c
---

A geometriai kernel az a motor, amely az előzményekből testet készít. A PartCraft ebben a verziójában egy ilyet tartalmaz: a **hálókernelt** (manifold-3d). Kis WebAssembly-programként a számítógépén fut, és röviddel az alkalmazás megnyitása után készen áll. Az alkatrész adatai semmilyen helyre nem kerülnek elküldésre.

| | Hálókernel |
|---|---|
| Kerek alakzatok | Lapos facetek. Az alkatrész-panelen a **Görbék** állítja be a finomságot |
| Térfogatok és területek | A facetes testé; kerek részeknél kissé alacsony |
| Vázlatok, kihúzás, kivágás, forgatás, furatok, minták, tükrözés, hivatkozási síkok | Igen |
| Lekerekítés és letörés | Lapos lapok közötti egyenes éleken; a találkozó lekerekítések gérbe vágódnak |
| Héjazás és dőlésszög | A héjazás a lapos lapokat megnyitja (pontos falvastagság); a dőlésszög a lapos lapokat megdönti |
| Exportok | STL, 3MF, STEP (pontos: a kerek lapok valódi felületükön íródnak ki; vagy facetes), rajz PDF és DXF |
| Rajznézetek | A facetekből rajzolva, a metszeti nézetekkel együtt |
| Lapok és élek | Névvel és típussal ismertek (sík, henger, kúp, gömb, tórusz; egyenes, kör), a vázlatokból származnak: ezeket használja a Szimuláció, a Generatív és a Gyártás munkaterület, a Mérés, a kijelölés és a furattáblázat |

Az állapotsor jobb végén lévő címke **Hálókernel** feliratot mutat, amíg az alkatrészt építi.

## Mi vár pontos kernelre

A pontos (B-rep) kernel valódi köröket, hengereket és kúpokat tart meg, továbbá ezen épülnek a tetszőleges élek sima lekerekítései, a seprések, az áthúzások (loft), a felületek, a lemezalkatrészek, a bordák, a több test, valamint a görbe lapokkal rendelkező STEP-import pontos megtartása. (A pontos STEP-export nem vár rá: a hálókernel a vázlatból ismeri minden lap valódi felületét, és az export ezeket írja ki.) A PartCraft korábbi laboratóriumi verziói erre az OpenCascade-et használták. Licence­e (LGPL) nem fér bele ebbe a kiadásba, ahol minden alkalmazás Apache-2.0 licencű, és csak megengedő licencű könyvtárakat használ, ezért nincs benne. Ehhez nincs dátum.

Addig ezek a jellemzők a kiválasztáskor a **Még nincs elkészítve** üzenetet mutatják: az állapotsor megadja az okot, a gombjaik súgója pedig ezzel végződik: „még nincs elkészítve (pontos kernel kell)”. A [Mi még nincs elkészítve](topic:not-built-yet) felsorolja mindegyiket, és azt, mit tegyen helyette.

A korábbi kiadásban ezekkel készült alkatrész továbbra is megnyílik. Ezek a jellemzők az előzményekben nincs elkészítve jelöléssel maradnak (az okért vigye rájuk az egérmutatót), az alkatrész többi része elkészül, a mentés pedig változatlanul megtartja őket.

## Kerek lapok és a Görbék

A hálókernel a kört sokszögként rajzolja meg. Az alkatrész-panelen a **Görbék** állítja be, hány oldalt kap egy teljes kör; több oldal simábbnak látszik, és közelebb esik a valódi értékhez, de tovább tart az építés. A {{ui:Mérés}} térfogatai, területei és távolságai ezen a facetes testen értendők: furat vagy kiemelkedés esetén kissé kisebbek a kerek alakzaténál.

## Online és offline

A hálókernel része az alkalmazás saját letöltésének. Kapcsolat nélküli munkához mentse a PartCraftot offline használatra, amíg online van: válassza az alkalmazássávban a {{ui:Mentés offline használatra}} lehetőséget, és várja meg, amíg megjelenik az **Offline készen áll** üzenet. Részletek: [Munka offline módban](common:offline).
