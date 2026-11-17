---
title: Szerkeszthető utófeldolgozók
summary: Az utófeldolgozó egy rövid szöveges fájl, amely a szerszámpályát G-kóddá alakítja a vezérlőjéhez. Másoljon egy beépített utófeldolgozót, módosítsa a szükséges sorokat (sorszámok, szerszámcsere, kezdőpozícióba mozgások, programvég), lássa gépelés közben a kiírt G-kódot, és tárolja az alkatrésszel együtt.
keywords: utófeldolgozó, post processor, postprocessor, G-kód, NC, GRBL, LinuxCNC, utófeldolgozó szerkesztése, egyéni utófeldolgozó, cpost, szerszámcsere, M6, G43, fix ciklus, sorszámok, modális, esemény, változó
from: 36ab8a38
---

Ugyanazt a szerszámpályát másként kell kiírni a különböző vezérlőkhöz: sorszámokkal vagy anélkül, `M6` vagy szünet, `G28` vagy `G53`, `M30` vagy `M2`. Az **utófeldolgozó** egy rövid szöveg, amely megadja ezt. A PartCraft három beépített utófeldolgozója (Fanuc-jellegű, GRBL és LinuxCNC) ebben a formátumban íródott, ezért a saját utófeldolgozó egy beépített másolatából indulhat.

Ellenőrizze a kimenetet a saját gépe szimulátorában vágás előtt, és futtassa le előbb a levegőben, a nyersanyag fölött. A beépített utófeldolgozók pontosan azt írják, amit ez a formátum előtt is írtak (a tesztek bájtról bájtra hasonlítják össze a kimenetet több száz programon), de semmi sincs bizonyítva az Ön gépén, és a megváltoztatott utófeldolgozót Önnek kell bizonyítania.

## Készítsen egyet

A Gyártásban, az **Utófeldolgozó** résznél:

- {{ui:Utófeldolgozó szerkesztése…}} egy beépített vezérlőn megnyitja **az Ön saját másolatát**. Egy saját utófeldolgozón azt nyitja meg.
- {{ui:Új utófeldolgozó…}} egy kis üres utófeldolgozóval indul, amelyben minden esemény szerepel.
- {{ui:Utófeldolgozó fájl importálása…}} beolvas egy `.cpost` szöveges fájlt (a szerkesztőben a **Mentés fájlként…** paranccsal kapott fájlt).

A szerkesztő megmutatja a szöveget, egy sort, amely jelzi, hogy beolvasható-e (és melyik sor a hibás), valamint a G-kódot, amelyet az utófeldolgozó gépelés közben ír. Az **Előnézet ezzel** egy kis mintaprogramot választ, amely minden eseményt lefuttat, vagy az alkatrész saját programját. A {{ui:Mentés}} az utófeldolgozót az alkatrész fájljában tartja (legfeljebb 20 utófeldolgozó), és vezérlőként kiválasztja. Az utófeldolgozók az alkatrésszel együtt mozognak; más alkatrészben való használatukhoz mentse fájlként, és importálja ott.

## Milyen egy utófeldolgozó

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

A `//`-rel kezdődő sorok és az üres sorok figyelmen kívül maradnak. Elöl állnak a beállítások; utána minden eseményhez tartozik egy `on <esemény>` blokk, amelyet `end` zár le. Az az esemény, amelyet kihagy, semmit nem ír.

| Beállítás | Jelentés |
|---|---|
| `post <id>` | Az utófeldolgozó azonosítója: betűk, számjegyek, `-` és `_` |
| `name <text>` | Amit a vezérlőlista mutat |
| `extension <ext>` | A fájlkiterjesztés: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … minden `emit` sorban, vagy egy sem |
| `decimal-point yes` / `no` | `10.` a `10` helyett (a megjegyzésekben soha nincs pont) |
| `canned-cycles yes` / `no` | `no`: a furatok azokként a G0/G1 mozgásokként íródnak, amelyeket jelölnek |
| `modal <group> <words>` | Egy csoport szavai (`modal motion G0 G1 G2 G3`), amelyek csak akkor íródnak, ha változnak |

## Események

Egy program során ebben a sorrendben futnak: `start`; majd minden műveletre `operation`, `tool-change` (amikor a szerszám változik), `spindle` (amikor a fordulatszám változik), `approach` (az első pontig tartó mozgás, az első gyors mozgás előtt), `coolant-on`, majd a mozgásai `rapid`, `feed` és `arc` eseményként, és minden fix ciklus `cycle-start` eseményként, lyukanként egy `cycle-hole`, végül `cycle-end`; legvégül `end`.

Minden esemény használhatja a saját mozgásfajtájának változóit, `{name}` alakban írva: a programét (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), a nyersanyagét (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a szerszámét (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a műveletét (`op.name`, `op.type`), a `rpm`-et, egy mozgás pontjáét (`x`, `y`, `z`, `f`, és `moved`: igaz, ha egy tengely megváltozott), az íveket (`arc.g` 2 vagy 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) és a furatokat (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A szerkesztő **Események és változók** listája mutatja, melyik esemény mit lát. Olvasható és beállítható állapot: `cool`, `offset`, valamint `at.x`, `at.y`, `at.z`, `at.f` (az utoljára kiírt értékek).

## Utasítások

| Utasítás | Mit csinál |
|---|---|
| `raw TEXT` | Egy sor pontosan úgy, ahogy be van írva (sorszám nélkül) |
| `comment TEXT` | `(TEXT)`, a nem ASCII karakterek és a zárójelek nélkül |
| `emit WORD WORD …` | Szavakból álló sor; az üresen maradó szavak kimaradnak; szó nélkül nincs sor |
| `word WORD …` | Szavak hozzáadása a most épülő sorhoz; egy puszta `emit` lezárja |
| `if EXPR` … `else` … `end` | Feltételek: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, különben b) |
| `for tool in tools` … `end` | Egyszer minden szerszámra, amelyet a program használ |
| `set NAME EXPR` | Érték megjegyzése (`set offset tool.number`) |
| `reset NAME …` | A modális szavak elfelejtése (egy csoport, egy címbetű, például `Z`, vagy `at.z`) |
| `do rapid X Y Z` | A `rapid` esemény lefuttatása egy pontra |

A szó gépelt szöveg, amelyben `{variable|filter}` helyek vannak. A szűrők: `upper`, `lower`, `pad:N` (nullákkal töltés), `cut:N` (az első N karakter), `safe` (megjegyzésbarát ASCII) és `int`. A `~` végű szó **modális**: csak akkor íródik ki, ha eltér attól, ami utoljára kiíródott (`G1~`, `X{x}~`). A `~!` végű szó minden alkalommal kiíródik, és emlékezetben is marad. Ami nem változó, az egyszerű szöveg (`G81`, `mist`). A számok 0,001 mm-re kerekítve íródnak, záró nullák nélkül.

## Amit egy utófeldolgozó nem tud

Csak azt dönti el, hogyan íródnak ki a mozgások, mást nem. Nem változtathat szerszámpályát, nem rendezhet műveleteket, nem bonthat ívet, nem adhat hozzá tengelyt, nem ismeri a gépe mozgástartományát vagy kinematikáját, és nem végez számítást a koordinátákon (nincs `+`). A tapintás, a szerszám-élettartam és az alprogram-ciklusok, a 4. és 5. tengelyes kimenet, valamint az eszterga-kódok nincsenek elkészítve. Egy másik programtól származó `.cps` jellegű utófeldolgozó fájl nem tölthető be: ez egy másik, egyszerűbb formátum.
