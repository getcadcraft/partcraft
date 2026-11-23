---
title: Szerkeszthető utófeldolgozók
summary: Az utófeldolgozó rövid szövegfájl, amely a szerszámpályát a vezérlőjének megfelelő G-kóddá alakítja. Másoljon egy beépítettet, módosítsa a szükséges sorokat (sorszámok, szerszámcsere, alapállásba mozgások, programvég), lássa a kiírt G-kódot, ahogy gépel, és tartsa meg a munkadarabbal együtt.
keywords: utófeldolgozó, utófeldolgozó, g-kód, nc, grbl, linuxcnc, utófeldolgozó szerkesztése, egyéni utófeldolgozó, utófeldolgozó-szerkesztő, cpost, szerszámcsere, m6, g43, fix ciklus, sorszámok, modális, esemény, változó
from: c78d0cae
---

Ugyanazt a szerszámpályát máshogy kell kiírni a különböző vezérlőknek: sorszámokkal vagy anélkül, `M6` vagy szünet, `G28` vagy `G53`, `M30` vagy `M2`. Az **utófeldolgozó** rövid szöveg, amely megmondja, hogyan. A PartCraft három beépített utófeldolgozója (Fanuc-típusú, GRBL és LinuxCNC) ebben a formátumban íródik, így a saját utófeldolgozó indulhat a beépítettek egyikének másolataként.

Vágás előtt ellenőrizze a kimenetet a gépe saját szimulátorában, és először a nyersanyag felett, levegőben futtassa. A beépített utófeldolgozók pontosan azt írják, amit ez a formátum előtt is írtak (a tesztek bájtra összevetik a kimenetüket több száz programon), de semmi itt nem lett bizonyítva az ön gépén, és az ön által módosított utófeldolgozót ön igazolja.

## Készítés

A Gyártásban, az **Utófeldolgozó** alatt:

- A {{ui:Utófeldolgozó szerkesztése…}} egy beépített vezérlőnél megnyitja **az ön saját másolatát**. Egy saját utófeldolgozón ugyanez a sajátot nyitja meg.
- Az {{ui:Új utófeldolgozó…}} egy kis üres utófeldolgozóval indul, amelyben minden esemény benne van.
- Az {{ui:Utófeldolgozó fájl importálása…}} egy `.cpost` szövegfájlt olvas be (a szerkesztőben a **Mentés fájlként…** gombbal kapott fájlt).

A szerkesztő megmutatja a szöveget, egy sort, amely jelzi, hogy olvasható-e (és melyik sor hibás), valamint a G-kódot, amelyet az utófeldolgozó ír, miközben gépel. Az **Előnézet ezzel** választja ki a kis mintaprogramot, amely minden eseményt lefuttat, vagy a munkadarab saját programját. A {{ui:Mentés}} a utófeldolgozót a munkadarab fájljában tartja (legfeljebb 20 utófeldolgozó), és vezérlőnek választja. Az utófeldolgozók a munkadarabbal együtt utaznak; ha egy másik munkadarabban is használni akarja, mentse fájlként, és ott importálja.

## Hogyan néz ki egy utófeldolgozó

```
post mymill
name Saját marógépem (.nc)
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

A `//`-rel kezdődő sorok és az üres sorok figyelmen kívül maradnak. Felül a beállítások állnak; utána minden eseményhez egy `on <event>` blokk, `end`-del lezárva. Az az esemény, amelyet kihagy, nem ír semmit.

| Beállítás | Jelentés |
|---|---|
| `post <id>` | Az utófeldolgozó azonosítója: betűk, számjegyek, `-` és `_` |
| `name <text>` | Amit a Vezérlő-lista mutat |
| `extension <ext>` | A fájl kiterjesztése: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … minden `emit` sorban, vagy egyik sem |
| `decimal-point yes` / `no` | `10.` a `10` helyett (a megjegyzések soha nem kapnak pontot) |
| `canned-cycles yes` / `no` | `no`: a lyukakat azok G0/G1 mozgásaiként írja ki, amelyeket jelentenek |
| `modal <group> <words>` | Egy csoport szavai (`modal motion G0 G1 G2 G3`), amelyeket csak akkor írnak ki, ha változnak |

## Események

Egy program során ebben a sorrendben futnak: `start`; majd minden műveletre `operation`, `tool-change` (amikor a szerszám változik), `spindle` (amikor a fordulatszám változik), `approach` (a mozgás az első pontig, az első gyorsjárat előtt), `coolant-on`, majd a mozgásaik `rapid`, `feed` és `arc` eseményként, és minden fix ciklus `cycle-start` eseményként, egy `cycle-hole` minden lyukra és `cycle-end`; végül `end`.

További események, amelyek a három tengelyen túl történnek (az esemény nélküli utófeldolgozó visszautasítja az ilyen programot, és megnevezi a hiányzó eseményt):

| Esemény | Mikor | Változói |
|---|---|---|
| `index` | Olyan művelet előtt, amelynek szerszámiránya eltér az utolsótól, és az első művelet előtt forgótengelyes gépen | `rot.a`, `rot.b`, `rot.c` (a pozíciók, ahová menni kell; üres, ha a gépnek nincs az a tengelye), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Olyan művelet mozgásai, amelyeknél a forgótengelyek vágás közben mozognak | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (igen, ha az előtolás inverz idő), `invf` (1/perc) |
| `rotary-end` | Ilyen művelet után | |
| `probe-move` | Olyan mozgás, amely megáll, amikor a tapintó kioldódik | `x`, `y`, `z`, `f`, `probe.n` (1 és 4 között), `probe.axis` (x, y vagy z), `probe.k` (1, 2 vagy 3) |
| `probe-set` | Egy tapintási ciklus érintései után | `probe.kind` (`"z"`, `"x"`, `"y"` vagy `centre`), `probe.action` (`set` vagy `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Menetvágó mozgás esztergán | `x`, `z`, `thread.lead` |

Minden eseménynél továbbá: `kin` (none, a, b, ac, bc), `rotary` és `tcp` (yes vagy no, a Beállításban lévő gépből), `pivot.x`, `pivot.y`, `pivot.z`, a művelet `op.tilt` és `op.turn` értékei, és esztergán `spin.mode` (css vagy rpm), `spin.css`, `spin.max` és `tool.nose`. Egy betűs szó, amelynek értéke üres, például `A{rot.a}` olyan gépen, amelynek nincs A tengelye, kimarad a sorból. Idézőjelben hasonlítsa össze x, y és z szövegként (`if probe.kind == "z"`): idézőjel nélkül a mozgás koordinátái.

Két további sor az utófeldolgozó elején eszterga-utófeldolgozóvá teszi: `machine lathe` (ekkor csak X-et és Z-t ír, és visszautasítja a marási pályákat, ahogy a marási utófeldolgozó az eszterga-pályákat), valamint `lathe-x diameter` vagy `lathe-x radius`.

Minden esemény használhatja a saját mozgástípusának változóit, `{name}` alakban: a program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), a nyersanyag (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), a szerszám (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), a művelet (`op.name`, `op.type`), `rpm`, egy mozgás pontja (`x`, `y`, `z`, `f`, és `moved`: igaz, ha valamelyik tengely változott), ívek (`arc.g` 2 vagy 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) és lyukak (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). A szerkesztő **Események és változók** listája mutatja, melyik esemény mit lát. Olvasható és beállítható állapot: `cool`, `offset`, és `at.x`, `at.y`, `at.z`, `at.f` (az utoljára kiírt értékek).

## Utasítások

| Utasítás | Mit tesz |
|---|---|
| `raw TEXT` | Egy sor pontosan úgy, ahogy be van gépelve (sorszám nélkül) |
| `comment TEXT` | `(TEXT)`, a nem ASCII karakterek és zárójelek kivételével |
| `emit WORD WORD …` | Szavakból álló sor; az üres szavak kimaradnak; szó nélkül nincs sor |
| `word WORD …` | Szavak hozzáadása az épülő sorhoz; egy üres `emit` lezárja |
| `if EXPR` … `else` … `end` | Feltételek: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, különben b) |
| `for tool in tools` … `end` | Minden program által használt szerszámra egyszer |
| `set NAME EXPR` | Érték megjegyzése (`set offset tool.number`) |
| `reset NAME …` | Modális szavak elfelejtése (csoport, címbetű, mint `Z`, vagy `at.z`) |
| `do rapid X Y Z` | A `rapid` esemény futtatása egy pontra |

Egy szó beírt szöveg `{variable|filter}` lyukakkal. A szűrők: `upper`, `lower`, `pad:N` (nullákkal feltöltés), `cut:N` (az első N karakter), `safe` (megjegyzésbiztos ASCII) és `int`. A `~` végű szó **modális**: csak akkor íródik ki, ha különbözik az utoljára kiírttól (`G1~`, `X{x}~`). A `~!` végű szó mindig kiíródik, és emlékezik rá. A változónak nem minősülő név egyszerű szöveg (`G81`, `mist`). A számok 0,001 mm-re kerekítve íródnak, záró nullák nélkül.

## Mit nem tud egy utófeldolgozó

Csak azt dönti el, hogyan íródnak ki a mozgások, semmi mást. Nem tudja megváltoztatni a szerszámpályát, átrendezni a műveleteket, ívet felosztani, tengelyt hozzáadni, ismerni a gép járatait vagy kinematikáját, és számtani műveleteket végezni a koordinátákon (nincs `+`). A forgópozíciókat maga a Beállításban leírt gép adja, nem az utófeldolgozó: az utófeldolgozó előjelüket vagy betűiket változtathatja meg, a kinematikát nem. Szerszám-élettartam- és részprogram-ciklusok nincsenek megépítve. Egy más programból származó `.cps` stílusú utófeldolgozó-fájl nem tölthető be: ez egy másik, egyszerűbb formátum.
