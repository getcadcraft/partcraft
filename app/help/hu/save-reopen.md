---
title: Mentés, újranyitás és a munka folytatása
summary: Alkatrészek és összeállítások mentése a számítógépre, elnevezésük, újranyitásuk gombbal, billentyűvel vagy húzással, verziók megtartása, és a munka elvesztésének elkerülése a böngészőlapon.
keywords: mentés, megnyitás, újranyitás, betöltés, letöltés, verziók, biztonsági mentés, átnevezés, fájlnév, elveszett munka, oldal elhagyása, partcraft.json, partcraft-asm.json, új alkatrész
from: c18a5abc
---

A PartCraft a látogatások között semmit nem tart meg. Az alkatrész addig a böngészőlapon él, amíg fájlként el nem menti, és akkor tér vissza, amikor azt a fájlt megnyitja.

## Alkatrész mentése

1. Nevezze el az alkatrészt: kattintson a nézet üres területére, hogy semmi ne legyen kijelölve, majd a jobb oldali panelen írja be a **Nevet**, és nyomja meg az {{key:Enter}} billentyűt. Az előzmények címe ehhez igazodik.
2. Nyomja meg a {{key:Mod+S}} billentyűt, vagy válassza a {{ui:Mentés}} lehetőséget.
3. A böngésző letölti a `<név>.partcraft.json` fájlt. Az állapotsor ezt írja: „A(z) Bracket.partcraft.json mentve (a teljes előzmény; ide visszanyitva a szerkesztés folytatható).”

Ha vázlat van megnyitva, a mentés előbb bezárja.

A fájl tartalmazza az összes vázlatot, kapcsolatot, méretet és jellemzőt, a letiltott jellemzőket, a visszagörgetési pozíciót, a rajzlap beállításait és GD&T-jegyzeteit, valamint egy importált STEP-test teljes szövegét. A visszavonási lista nem kerül mentésre.

## Összeállítás mentése

Összeállításban ugyanez a {{ui:Mentés}} vagy a {{key:Mod+S}} a `<összeállítás neve>.partcraft-asm.json` fájlt tölti le. Minden alkatrész benne van: az újranyitáshoz nincs szükség külön alkatrészfájlokra.

Ha összeállításon belül szerkeszt egy alkatrészt, a {{key:Mod+S}} csak azt az alkatrészt menti önállóan, `.partcraft.json` fájlként. Az egész összeállítás mentéséhez előbb válassza a {{ui:Vissza}} lehetőséget, majd mentsen.

## Újranyitás

Bármelyik módon:

- válassza a {{ui:Megnyitás}} lehetőséget, vagy nyomja meg a {{key:Mod+O}} billentyűt, majd válassza ki a fájlt;
- fogja meg a fájlt itt: {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}}, és húzza a 3D-nézetre („Húzza ide a PartCraft-alkatrészt a megnyitáshoz” jelenik meg).

A PartCraft a tartalmuk alapján különbözteti meg az alkatrészt és az összeállítást, ezért mindkettő ugyanúgy nyílik meg. A `.step` vagy `.stp` fájl importált testként nyílik meg: lásd [STEP-fájl megnyitása és építkezés rá](topic:import-step). Az állapotsor visszaigazolja: „A(z) Bracket.partcraft.json megnyitva: 7 jellemző.” vagy „A(z) Hinge.partcraft-asm.json megnyitva: 3 alkatrész, 2 kapcsolat.”

Ha a képernyőn lévő alkatrészben nem mentett módosítások vannak, a PartCraft előbb rákérdez: {{ui:Mégse}}, {{ui:Módosítások elvetése}} vagy {{ui:Előbb mentés}}.

:::warning
Egy összeállítást a {{ui:Bezárás}} lehetőséggel zárjon be, mielőtt alkatrészfájlt nyitna meg. Ha alkatrészt nyit meg, miközben összeállítás van a képernyőn, az alkatrész az összeállítás mögé töltődik be, és csak az összeállítás bezárása után látható. Összeállítás-fájl megnyitása a nem mentett összeállítást is kérdés nélkül felülírja, ezért előbb mentse.
:::

## Újrakezdés

A {{ui:Új}} egy üres „Part1” alkatrészt indít. Ha vannak nem mentett módosítások, előbb rákérdez, és ha összeállítás van megnyitva, bezárja (nem mentett összeállításnál rákérdez).

## Verziók megtartása

Minden mentés új letöltés, így a verziókat egyszerűen a fájlok megtartásával őrizheti meg:

- Mentés előtt tegyen a névbe verziót vagy dátumot: „Bracket rev B”.
- A böngésző „ (1)”, „ (2)” utótagot adhat, ha ugyanilyen nevű fájl már van a letöltések mappájában. A legújabb a legnagyobb számú, vagy nézze meg a dátumot itt: {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}}.
- A kész fájlokat helyezze át a letöltések mappájából a projektmappába.

Hogy az egyes rendszereken hová kerülnek a letöltések, lásd: [Hová kerülnek a fájlok](common:your-files).

## Ne veszítse el a munkát

- Mentse a munkát, mielőtt bezárja a lapot, újratölti az oldalt, vagy a számítógépet hosszabb ideig altatásba engedi. A böngésző „Elhagyja az oldalt?” kérdést tesz fel, ha nem mentett módosításokkal próbál bezárni, de összeomlás vagy lezárt laptop nem ad figyelmeztetést.
- Privát vagy inkognitó ablak is működik, de semmi más nem változik: a fájl továbbra is az egyetlen példány.
- A felhőbe mentés és a verziótörténet még nem érhető el.
