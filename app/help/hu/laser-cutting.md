---
title: Rajz küldése lézerre
summary: Válassza ki, mit tegyen minden réteg (vágás, karcolás, gravírozás, kitöltés, kép), tekintse meg a fej mozgásait, mentse a GRBL lézermódú G-kódot, vagy küldje el a böngészőből a munka keretezése után.
keywords: lézer, lézervágó, lézeres gravírozó, GRBL, G-kód, gravírozás, kitöltés, dithering, képgravírozás, karcolás, vágás, Web Serial, Linux, a munka keretezése, teljesítmény, sebesség, menetek
from: 327b3c46
---

A {{ui:Lézer}} panel a rajz rétegeit olyan programmá alakítja, amely GRBL-vezérlésű lézert futtat (a legtöbb hobbi- és kisüzemi dióda- és CO2-vezérlő). A PartCraftban válassza az {{ui:Exportálás}} › {{ui:Lézerprogram…}} menüpontot, majd a {{ui:Körvonalak hozzáadása DXF-ből…}} lehetőséget: a körvonalak és a furatok a CUT rétegre kerülnek. A lemezalkatrészek síkmintázatai (a hajlítási vonalakkal a BEND rétegen) pontos kernelt igényelnek, ez a verzió viszont nem tartalmaz ilyet. A beállítások az alkatrész- vagy összeállítási fájlban mentődnek.

:::warning
Minden beállítást előbb hulladékon próbáljon ki, viseljen a lézerhez illő védőszemüveget, ahol van fedél, tartsa zárva, és soha ne hagyja felügyelet nélkül működő lézert. A rétegek kezdő számai helyőrzők, nem ajánlások egyetlen anyagra sem.
:::

## Döntse el, mit tegyen minden réteg

A rajz minden rétege egy sor. A {{ui:Mit csinál}} beállítása **Vágás**, **Karcolás**, **Vonalgravírozás**, **Alakzatok kitöltése**, **Kép gravírozása** vagy **Nem küldött**, valamint {{ui:Teljesítmény %}}, {{ui:Sebesség mm/perc}} és {{ui:Menetek}} száma.

- **Kitöltés**: a zárt alakzatok belsejét vonalakban égeti ki, a {{ui:Vonalköz}} távolságra egymástól, a {{ui:Szög}} mellett, mindkét irányban vagy egy irányban; túlfutással, hogy a fej elérje a sebességét, mire a lézer bekapcsol. A keresztkitöltés 90°-ban második menetet ad hozzá. A lyukkal rendelkező alakzat a lyuknál nyitva marad.
- **Kép gravírozása** pontokká alakítja a képet (Floyd–Steinberg, Atkinson, rendezett, vagy egyszerű fekete-fehér küszöbértékkel), vagy a *Szürke szintek* beállítással változó teljesítménnyé.
- Sorrend: előbb a képek és a kitöltések, utána a vonalgravírozás, majd a karcolások, végül a vágások, hogy a kivágott alkatrész ne mozduljon el gravírozás közben. Egy rétegen belül az útvonalak **belülről kifelé** haladnak (előbb a lyuk, aztán a lemez, amelyben van), és mindig a legközelebbi következik.

## Előnézet, majd mentés

Az előnézet azt rajzolja meg, amit a fej csinál: az égető vonalak színesen, a gyors mozgások szürkén, és zöld keret minden égetett elem körül. Alatta a méret, az égetési hossz és egy időbecslés látható (gyorsulás nélkül; a valódi gép tovább tart). A {{ui:G-kód mentése…}} GRBL lézermódú G-kódot ír: `$32=1`, `M4` (vagy `M3`) S értékekkel, `G0` és `G1` mozgások, a végén `M5`. Az X0 Y0 a munka bal alsó sarka, kivéve, ha a rajz origóját választja: ott állítsa be a gépe munkanulláját. A G-kód a GRBL dokumentált lézermódját követi; valódi lézeren még nem próbálták ki.

## Küldés a böngészőből

A Chrome és az Edge böngészőben a {{ui:Csatlakozás…}} megkéri, hogy válassza ki a lézer USB-portját. Semmi nem csatlakozik és nem küldődik addig, amíg nem nyom meg egy gombot. Előbb nyomja meg a {{ui:A munka keretezése}} gombot: a fej a munka dobozát a lézer **kikapcsolt** állapotában járja körbe (vagy a mutatóhoz beállított kis teljesítménnyel), hogy lássa, hol fog égetni. Csak ezután válik aktívvá a {{ui:Munka küldése}} gomb, és ha bármit módosít, újra inaktívvá válik. A {{ui:Szünet}} megtartja a fejet, a {{ui:Leállítás}} szintén megtartja, visszaállítja a vezérlőt (a lézer kikapcsol), és elküld egy `M5` parancsot. Ahol nincs Web Serial (Firefoxban, Safariban, és a CadCraft Studio webnézetében, amely még nem rendelkezik vele), mentse a G-kódot, és küldje el a lézer saját programjával.

## Még nincs elkészítve

Más vezérlők formátumai (Ruida, Marlin lézerek, gyártói fájlok), bordák és belépő- és kilépő szakaszok, rés (kerf) eltolása, anyagkönyvtárak, forgótengely és Z tengely, kamerás illesztés.
