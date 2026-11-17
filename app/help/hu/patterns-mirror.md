---
title: Minta- és tükrözési jellemzők
summary: Jellemzők ismétlése sorban a Lineáris paranccsal, körkörösen egy tengely körül a Körkörös paranccsal, illetve jellemzők vagy a teljes test másolása egy sík mentén a Tükrözés paranccsal.
keywords: minta, lineáris minta, körkörös minta, poláris sokszorozás, sokszorozás, tükrözés, szimmetrikus, jellemzők másolása, furatkör, kiindulóelem, testtükrözés
from: 702e9edb
---

A minták és tükrözések már felépített jellemzőket másolnak. A másolatok részei az előzményeknek: ha megváltoztatja az eredetit, a másolatok követik.

Amit másolnak, az a jellemző hatása: egy hozzáadó minta anyagot ad, egy kivágás- vagy furatminta eltávolít. A mintákat újra lehet mintázni és tükrözni. Egy importált STEP-test is másolható; a lekerekítések, letörések és héjazások nem.

## Lineáris minta

1. Jelölje ki a másolandó jellemzőt az előzményekben (például egy **Furat** vagy egy **Kivágás**). Ha semmi nincs kijelölve, az utolsó test-jellemző használatos.
2. Válassza a {{ui:Lineáris}} gombot. Három másolat jelenik meg 20 mm-enként, az X mentén.
3. A jobb oldali panelen állítsa be:

| Beállítás | Mit csinál | Alapérték |
|---|---|---|
| **Másolandó jellemzők** | Jelölje be az összes másolandó jellemzőt. Csak a minta fölötti jellemzők szerepelnek a listában | A kijelölt jellemző |
| **Irány** | X tengely, Y tengely, Z tengely, egy egyenes vagy tengelyvonal egy korábbi vázlatból, egy forgatás tengelye vagy egy kiválasztott él | X tengely |
| **Osztásköz (mm)** | A szomszédos példányok közötti távolság | 20 |
| **Darabszám** | Összesen, **az eredetit is beleértve** (1-től 1000-ig) | 3 |
| **Irány megfordítása** | A másolatok az ellenkező irányba kerülnek | Ki |

### Él használata irányként

1. Kattintson az alkatrész egyenes élére a nézetben. A jobb oldali panel **Él** feliratot mutat, és megjeleníti a hosszát.
2. Válassza a {{ui:Lineáris}} gombot: a minta ezen az élen fut.

Vagy jelölje ki a mintát, válasszon ki egy élt, és az **Irány** mezőben válassza a „Kiválasztott él (a most kiválasztott használata)” lehetőséget. A kiválasztott él a térben rögzített: nem követi a későbbi változásokat. A vázlatvonal követi a vázlatát.

## Körkörös minta

1. Jelölje ki a másolandó jellemzőt (például egy furatot egy korong peremének közelében).
2. Válassza a {{ui:Körkörös}} gombot. Hat másolat jelenik meg, egyenletesen elosztva a teljes körben.
3. Állítsa be:

| Beállítás | Mit csinál | Alapérték |
|---|---|---|
| **Másolandó jellemzők** | Mint a lineáris mintánál | A kijelölt jellemző |
| **Tengely** | X, Y vagy Z tengely, vázlatvonal, forgatás tengelye vagy egy kiválasztott él | Az utolsó forgatás tengelye, ha van ilyen, különben az Y tengely |
| **Szög (°)** | 360 esetén a másolatok egyenletesen oszlanak el körben. Kisebb szögnél a megadott szögön oszlanak el, az első és az utolsó a két végén | 360 |
| **Darabszám** | Összesen, az eredetit is beleértve | 6 |
| **Irány megfordítása** | A másik irányba fordul | Ki |

A világtengelyek az origón haladnak át. Ha a korong nem az origó köré van központosítva, használjon vázlatvonalat vagy egy forgatás tengelyét.

### Példa: egy karima nyolc csavarfurata

1. Forgassa meg a karimát (lásd [Esztergált alkatrész forgatása](topic:revolve)) az Y tengely körül.
2. Vázoljon a karima lapos felső lapjára, helyezzen egy pontot a csavarkörre, és készítsen egy furatot.
3. A kijelölt furattal válassza a {{ui:Körkörös}} gombot. A tengely már ki van választva: „A Revolve1 tengelye”.
4. Állítsa a **Darabszám** értékét `8`-ra.

## Tükrözés

1. Jelölje ki a tükrözendő jellemzőt az előzményekben, vagy ne jelöljön ki semmit, hogy az **eddig felépített teljes testet** tükrözze.
2. Válassza a {{ui:Tükrözés}} gombot. A **Jobb oldali sík** mentén tükröz.

Ha a teljes testet az alkatrész egyik lapján át kívánja tükrözni, először kattintson arra a lapos felületre, majd válassza a {{ui:Tükrözés}} gombot. (A felület kiválasztása törli az előzményekben a kijelölést, így ez mindig a teljes testet tükrözi.)

A jobb oldali panelen:

- **Tükrözés**: jelölje be a **Az egész test (eddig felépítve)** opciót, vagy törölje a jelölést, és jelölje be a másolandó jellemzőket.
- **Tükrösík**: Elülső sík, Felső sík, Jobb oldali sík, a felület, amelyet jelenleg használ („Az Extrude1 egy lapja” vagy „Rögzített sík”), vagy „A most kiválasztott felület”. Kiválasztott jellemzők egy lap mentén való tükrözéséhez: jelölje ki a Tükrözést az előzményekben, kattintson a lapra a nézetben, és válassza a „A most kiválasztott felület” lehetőséget.

A teljes test egy lapja mentén való tükrözés megduplázza az alkatrészt, például egy félkonzolból teljes konzol lesz.

## Üzenetek

- „Először készítsen felépített, másolható jellemzőt.” vagy „Először készítsen felépített testet.” Még nincs másolható test.
- „Válassza ki a másolandó jellemzőket.” Minden **Másolandó jellemzők** mező üres.
- „Az Extrude2-nek nincs másolható teteste.” Ez a jellemző hibás vagy el van rejtve.
- „A Fillet1 a test éleit vagy falait módosítja, ezért nem másolható. Másolja a testet létrehozó jellemzőket (kihúzások, forgatások, furatok, importok).” A lekerekítések, letörések és héjazások nem mintázhatók és nem tükrözhetők: először mintázzon, utána kerekítsen.
- „Még nincs tükrözhető test.”

:::note
A minta másolatait nem lehet egyenként kihagyni, és a minta nem követhet vázlatgörbét. A vázlat-mintázatok és -tükrözések szintén még nincsenek elkészítve: az ismétlődő vázlatgeometriát rajzolja kézzel, vagy használja a **Hozzáadás koordinátákkal** parancsot.
:::
