---
title: A hálókernel
summary: A PartCraft ez a kiadása minden alkatrészt a böngészőben futó hálókernellel épít. Mit jelent ez a kerek lapokra, a térfogatokra és a fájlokra, honnan látszik, hogy működik, és mely jellemzők várnak pontos kernelre.
keywords: kernel, háló, sokrétű, pontos, b-rep, lapokra bontott, görbék, opencascade, occt, lekerekítéshez pontos kell, még nincs elkészítve, offline, webassembly
from: 68d32d16
---

A geometriai kernel az a motor, amely az előzményeiből testet készít. A PartCraft ebben a kiadásában egy van: a **hálókernel** (manifold-3d). A számítógépén fut kis WebAssembly-programként, és az alkalmazás megnyitása után egy pillanattal kész. Az alkatrészéről semmi sem megy sehová.

| | Hálókernel |
|---|---|
| Kerek alakzatok | Sík lapkák. A **Görbék** az alkatrészpanelen állítja be, milyen finomak |
| Térfogatok és felszínek | A lapokra bontott testé, kerek alkatrészeknél kicsit alacsony |
| Vázlatok, kihúzás, kivágás, forgatás, furatok, minták, tükrözés, referenciasíkok | Igen |
| Lekerekítés és letörés | Sík lapok közötti egyenes éleken; az összetalálkozó lekerekítések gérvágottak |
| Héjazás és dőlésszög | A héjazás sík lapokat nyit (pontos falvastagság); a dőlésszög sík lapokat dönt |
| Exportok | STL, 3MF, STEP (lapokra bontott), rajz-PDF és DXF |
| Rajznézetek | A lapkákból rajzolva, a metszeti nézeteket is beleértve |
| Lapok és élek | Elnevezettek és fajtájuk szerint ismertek (sík, henger, kúp, gömb, tórusz; egyenes, kör), a vázlatokból átvéve: a Szimuláció, a Generatív és a Gyártás munkaterület, a Mérés, a kijelölés és a furattáblázat ezeket használja |

Az állapotsor jobb vége közelében lévő jelvény **Hálókernel** feliratú, amíg az alkatrészét építi.

## Ami pontos kernelre vár

A pontos (B-rep) kernel megőrzi a valódi köröket, hengereket és kúpokat, a sima lekerekítéseket bármelyik élen, és erre épülnek a végigvezetések, áthúzások, felületek, lemezalkatrészek, bordák, a több test, a STEP-importálás és a pontos STEP-exportálás. A PartCraft korábbi laborkiadásai az OpenCascade-ot használták erre. A licence (az LGPL) nem fér össze ezzel a kiadással, ahol minden alkalmazás Apache-2.0, és csak megengedő licencű könyvtárakat használ, ezért nincs benne. Egyiknek sincs dátuma.

Addig ezek a jellemzők azt írják, hogy **Még nincs elkészítve**, amikor kiválasztja őket: az állapotsor megadja az okot, a gombjaik súgószövege pedig így végződik: „még nincs elkészítve (pontos kernel kell hozzá)”. Mindegyiket felsorolja, azzal együtt, mit tegyen helyette: [Ami még nincs elkészítve](topic:not-built-yet).

Az ezekkel egy korábbi kiadásban készített alkatrész még megnyílik. Ezek a jellemzők az előzményekben még nem felépítettként megjelölve maradnak (tartsa fölöttük a mutatót az okért), az alkatrész többi része felépül, és a mentés változatlanul megtartja őket.

## Kerek lapok és a Görbék

A hálókernel a kört sokszögként rajzolja. A **Görbék** az alkatrészpanelen azt állítja be, hány oldala legyen egy teljes körnek; több oldal simábbnak látszik, és közelebb mér a valódi értékhez, de tovább épül. A {{ui:Mérés}} térfogatai, felszínei és távolságai ennek a lapokra bontott testnek az értékei: egy furatnál vagy dudornál kicsit kisebbek a kerek alakzaténál.

## Online és offline

A hálókernel az alkalmazás saját letöltésének része. Hogy kapcsolat nélkül is dolgozhasson, mentse el a PartCraftot offline használatra, amíg online van: válassza az alkalmazássáv {{ui:Mentés offline használatra}} gombját, és várja meg, amíg ezt írja: **Offline használatra kész**. Részletek: [Offline munka](common:offline).
