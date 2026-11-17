---
title: Alkatrész vezérlése paraméterekkel
summary: Nevezze el a fontos méreteket (szélesség, vastagság, csavarméret), kapcsolja hozzájuk bármelyik jellemzőszámot vagy vázlatméretet az = jellel, és az egész alkatrészt egyetlen táblázatból változtassa.
keywords: paraméterek, hol használják, használja, globális változók, változók, egyenletek, tervezési szándék, vezérlő méretek, kapcsolás, kifejezés, képlet, méret elnevezése, kapcsolt értékek
from: 58c646ea
---

A paraméter egy elnevezett szám, például `width = 120` vagy `margin = bolt * 1.5`. Kapcsoljon hozzá egy mélységet, egy furatátmérőt, egy mintaszámot vagy egy vázlatméretet, és a paraméter megváltoztatása mindet egy lépésben módosítja. Így a tervezési szándék az alkatrészben marad, nem a fejében.

## Paraméterek hozzáadása

1. A jobb oldali panelen kattintson a {{ui:Paraméterek}} fülre.
2. A **Változók** részben írjon nevet a „név” mezőbe, például `width`.
3. Írja be az értékét a következő mezőbe, például `120`, és nyomja meg az {{key:Enter}} billentyűt (vagy kattintson a {{ui:Hozzáadás}} gombra).

Az érték lehet szám vagy más paraméterek kifejezése: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Az **Érték** oszlop megmutatja, mire számolódik ki. A név betűvel vagy `_`-tal kezdődik, és csak betűket, számjegyeket és `_`-t tartalmaz; a függvények és mértékegységek nevei (`sin`, `mm`, `pi`) nem használhatók, és nem fogadja el az olyan hurkot sem, mint az `a = b`, ahol `b = a`.

## Szám kapcsolása paraméterhez

1. Kattintson az előzményekben egy jellemzőre, például a „Extrude1”-re. Beállításai a {{ui:Tulajdonságok}} fülön jelennek meg.
2. Egy számmezőben, például a **Mélység (mm)** mezőben, írjon `=` jelet és egy kifejezést: `=thick` vagy `=width / 4`.
3. Nyomja meg az {{key:Enter}} billentyűt.

A mező ekkor az eredményt mutatja, a címkéje mellett pedig megjelenik egy **ƒ** gomb. Erre rámutatva látható az egyenlet. A vázlatméretek ugyanígy működnek, mind a jellemző **Vázlatméretek** listájában, mind a megnyitott vázlat méretmezőjében (kattintson duplán egy méretre, írja be `=width`-et, és nyomja meg az {{key:Enter}} billentyűt).

Kapcsolható számok: kihúzás mélysége, forgatás szöge, furatátmérő, süllyesztés és ellenfúrás méretei, mintaszám, távolság és szög, lekerekítés sugara, letörés távolsága, héjazás falvastagsága, minden vázlatméret, valamint az újabb jellemzők méretei (második mélység, kúposság, ellensüllyesztés, segédsík távolsága, dőlésszög és mások).

## Paraméter módosítása

A {{ui:Paraméterek}} fülön írjon új értéket vagy kifejezést a **Kifejezés** oszlopba, és nyomja meg az {{key:Enter}} billentyűt. Minden hozzá kapcsolt érték megváltozik, és az alkatrész újraépül egy lépésben: a {{key:Mod+Z}} visszavonja.

Hogy egy számot a másik végéről változtasson, lásd: [Egyenletek mindkét irányban](topic:equations-two-way).

## Hol használják a paramétert

A {{ui:Paraméterek}} fülön minden paraméter alatt egy sor mondja meg, mi használja:

- a számok, amelyeket vezérel, például az **Extrude1 mélysége** vagy a **Sketch1 D2 (távolság)**. Kattintson egyre a jellemzőjének kijelöléséhez és tulajdonságai megjelenítéséhez;
- a számok, amelyeket **más paramétereken keresztül** vezérel, például a **Hole1 átmérője (keresztül: h, d)**, ha `d = h + 2` és `h = w / 2`;
- a **paraméterek**, amelyek kifejezései használják, a **konfigurációk**, amelyek beállítják, és a **szkriptek**, amelyek olvassák (lásd: [Szkriptek írása és futtatása](topic:craftscript)).

A „Még nincs használva.” azt jelenti, hogy semmi sem használja: kérdezés nélkül törölheti.

## Leválasztás, átnevezés, törlés

- **Szám leválasztása:** kattintson a **ƒ** gombjára, vagy az **Egyenletek** listában lévő {{ui:Leválasztás}} gombra. Megtartja a jelenlegi értékét, és többé egyik paraméter sem változtatja.
- **Paraméter átnevezése:** írjon új nevet a **Név** mezőjébe. Minden kifejezés, amely használja, átíródik.
- **Paraméter törlése:** kattintson a sorában lévő × jelre. Ha valami használja, a PartCraft megkérdezi, hogy előbb az aktuális értékét beírja-e azokba a kifejezésekbe.
- **Jellemző törlése** eltávolítja a számainak egyenleteit; az állapotsor megmondja, melyeket.

:::note
A paraméterek a `.partcraft.json` fájlban mentődnek (3-as fájlverzióként). Paraméterek nélküli alkatrész pontosan úgy mentődik, mint korábban.
:::

## Kifejezések

| Írja | Jelentése |
|---|---|
| `120`, `12.5`, `1e3` | szám (milliméter, szögnél fok) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | hossz más mértékegységben, milliméterre váltva |
| `30deg`, `0.5rad` | szög, fokra váltva |
| `+ - * / %` és `^` | számtan; a `^` hatványt jelöl, a `-2^2` értéke −4 |
| `sin cos tan asin acos atan atan2` | trigonometria fokban |
| `sqrt pow exp ln log abs sign` | egyéb függvények |
| `ceil floor int round(x, digits) min max` | kerekítés és határok |
| `if(test, a, b)` a `< <= > >= == !=` műveletekkel | választás: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

A nevek kis- és nagybetűre érzékenyek: a `Width` és a `width` két paraméter.

Lásd még: [Konfigurációk és tervtáblák](topic:design-tables) és [Szkriptek és parancssor](topic:scripts-and-cli).
