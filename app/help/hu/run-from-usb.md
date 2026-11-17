---
title: Futtatás USB-meghajtóról
summary: Azt írja le, mit írnak a mérnöki eszközök, és hol, hogy a CadCraft Studio telepítő és rendszergazdai jogok nélkül futhasson USB-pendriveról vagy bármely mappából: beállítások, generátorok, gyorsítótárak és alkatrészfájlok, valamint az, ami a pendriven marad.
keywords: usb, hordozható, telepítő nélkül, rendszergazda, admin, beállítások, adatmappa, generátorok, hol íródnak a fájlok, offline, adatvédelem, hozzáférés a géphez
from: 263efc79
---

A mérnöki eszközök (generátorok, a mérnöki könyvtár, az ellenőrzések és az adatfájlok) **nem igényelnek rendszergazdai jogot** és **nem igényelnek telepítőt**. Csak az itt felsorolt dolgokat írják, mást nem.

| Mi | Hol tárolódik |
|---|---|
| Alkatrészek a generált testekkel, adatlapokkal és ellenőrzésekkel | Az alkatrészfájl (`.partcraft.json`), amelyet elment, oda, ahová menti. |
| A fájlokból megnyitott generátorok | Az alkalmazás saját tárolójában: webes oldalon a böngésző helyi tárolójában, a hordozható Studióban pedig a programmal azonos mappában lévő `data` mappában. Legfeljebb 20. |
| Beállítások (a megadott voxelméretek, megoldószálak, elrendezés) | Ugyanabban az alkalmazás-tárolóban. |
| Adatlapok, mezők, hálók | Csak ott, ahol elmenti: a letöltés oda kerül, ahová kiválasztja. |

A eszközök **nem indítanak saját hálózati hívást**: a mellékelt generátorok az alkalmazás saját mappájában lévő fájlok, a könyvtár és az ellenőrzések a számítógépen futnak egy olyan háttérfolyamatban, amely nem éri el a hálózatot, a mérnöki adatok (víz- és levegőtulajdonságok, anyagok) pedig az alkalmazáson belül vannak. A fájlból megnyitott generátort a számítógép olvassa be, és az nem hagyja el a gépet.

## A hordozható Windows-os zip és Linux

A hordozható Windows-os Studio a beállításait, gyorsítótárait és bővítményeit a programmal azonos mappában lévő `data` mappában tárolja. A Linux AppImage ugyanezeket a programja mellett tárolja, ha mellette `portable` nevű fájl van; e nélkül a saját kezdőmappát használja. Hordozható Mac-változat nincs: a rendszer nem engedi, hogy a letöltött alkalmazás a saját helye mellé írjon. A Studio saját hordozhatósági megjegyzései (`Studio` súgó) felsorolják, mit ír a program.

## Hozzáférés a számítógéphez

Itt semmi nem kér hozzáférést a géphez. A nyomtatók, soros gépek és USB-eszközök ettől külön állnak: akkor kérnek engedélyt, amikor egy feladathoz szükség van rájuk, eszközönként egyszer, és a generátorok vagy az ellenőrzések semmit nem érintenek belőlük.
