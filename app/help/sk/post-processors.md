---
title: Postprocesory, ktoré môžete upraviť
summary: Postprocesor je krátky textový súbor, ktorý mení dráhu nástroja na G-kód pre váš riadiaci systém. Skopírujte jeden z vstavaných postprocesorov, zmeňte riadky, ktoré potrebujete (čísla riadkov, výmenu nástroja, pohyby na referenciu, koncový kód), pozrite G-kód, ktorý zapisuje, ako píšete, a uložte ho so súčiastkou.
keywords: postprocesor, postprocesor, G-kód, NC, GRBL, LinuxCNC, upraviť postprocesor, vlastný postprocesor, cpost, výmena nástroja, M6, G43, pevný cyklus, čísla riadkov, modálny, udalosť, premenná
from: c78d0cae
---

Ten istý tvar dráhy sa musí zapísať inak pre rôzne riadiace systémy: čísla riadkov alebo žiadne, `M6` alebo pauza, `G28` alebo `G53`, `M30` alebo `M2`. **Postprocesor** je krátky text, ktorý to určuje. Tri vstavané postprocesory PartCraft (štýl Fanuc, GRBL a LinuxCNC) sú napísané v tomto formáte, takže vlastný postprocesor môže začínať ako kópia jedného z nich.

Výstup skontrolujte v simulátore vášho stroja pred rezaním a najprv ho spustite vo vzduchu nad polotovarom. Vstavané postprocesory zapisujú presne to, čo zapisovali predtým, ako tento formát existoval (testy porovnávajú ich výstup bajt po bajte na stovkách programov), ale nič tu nebolo overené na vašom stroji a postprocesor, ktorý zmeníte, musíte overiť vy.

## Vytvorenie postprocesora

V pracovnom priestore **Výroba**, pod **Postprocesor**:

- {{ui:Upraviť postprocesor…}} pri vstavanom riadení otvorí **vašu vlastnú kópiu** tohto postprocesora. Pri jednom z vašich postprocesorov otvorí ten postprocesor.
- {{ui:Nový postprocesor…}} začína od malého prázdneho postprocesora so všetkými udalosťami.
- {{ui:Importovať súbor postprocesora…}} načíta textový súbor `.cpost` (súbor, ktorý dostanete cez **Uložiť ako súbor…** v editore).

Editor zobrazuje text, riadok, ktorý hovorí, či sa číta (a ktorý riadok je zlý), a G-kód, ktorý postprocesor zapíše, hneď ako píšete. **Náhľad s** vyberie malý vzorový program, ktorý spustí každú udalosť, alebo program tejto súčiastky. {{ui:Uložiť}} uloží postprocesor do súboru súčiastky (až 20 postprocesorov) a zvolí ho ako riadenie. Postprocesory putujú so súčiastkou; ak ho chcete použiť v inej súčiastke, uložte ho ako súbor a importujte ho tam.

## Ako vyzerá postprocesor

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

Riadky začínajúce `//` a prázdne riadky sa ignorujú. Na začiatku sú nastavenia; potom jeden blok `on <event>` pre každú udalosť, uzavretý `end`. Udalosť, ktorú vynecháte, nič nezapíše.

| Nastavenie | Význam |
|---|---|
| `post <id>` | Identifikátor postprocesora: písmená, číslice, `-` a `_` |
| `name <text>` | Čo zobrazuje zoznam riadení |
| `extension <ext>` | Prípona súboru: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … na každom riadku `emit`, alebo žiadne |
| `decimal-point yes` / `no` | `10.` namiesto `10` (komentáre nikdy nemajú bodku) |
| `canned-cycles yes` / `no` | `no`: otvory sa zapisujú ako pohyby G0/G1, ktoré predstavujú |
| `modal <group> <words>` | Slová skupiny (`modal motion G0 G1 G2 G3`), ktoré sa zapisujú len vtedy, keď sa zmenia |

## Udalosti

Bežia v tomto poradí pre program: `start`; potom pre každú operáciu `operation`, `tool-change` (keď sa mení nástroj), `spindle` (keď sa mení otáčky), `approach` (pohyb k prvému bodu, pred prvým rýchlym pohybom), `coolant-on`, potom jej pohyby ako `rapid`, `feed` a `arc`, a každý pevný cyklus ako `cycle-start`, jeden `cycle-hole` na každý otvor a `cycle-end`; nakoniec `end`.

Ďalšie udalosti pre to, čo presahuje tri osi (postprocesor bez nich odmietne taký program a pomenuje udalosť, ktorá mu chýba):

| Udalosť | Kedy | Jej premenné |
|---|---|---|
| `index` | Pred operáciou, ktorej smer nástroja sa líši od poslednej, a pred prvou operáciou na stroji s otočnými osami | `rot.a`, `rot.b`, `rot.c` (polohy, kam ísť; prázdne pre os, ktorú stroj nemá), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Pohyby operácie, ktorej otočné osi sa pohybujú počas rezania | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (áno, keď musí byť posuv inverzným časom), `invf` (1/minúty) |
| `rotary-end` | Po takej operácii | |
| `probe-move` | Pohyb, ktorý sa zastaví, keď sonda spustí | `x`, `y`, `z`, `f`, `probe.n` (1 až 4), `probe.axis` (x, y alebo z), `probe.k` (1, 2 alebo 3) |
| `probe-set` | Po dotykoch jedného cyklu snímania | `probe.kind` (`"z"`, `"x"`, `"y"` alebo `centre`), `probe.action` (`set` alebo `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Pohyb závitovania na sústruhu | `x`, `z`, `thread.lead` |

Pre každú udalosť platí aj: `kin` (none, a, b, ac, bc), `rotary` a `tcp` (yes alebo no, zo stroja v Nastavení), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` a `op.turn` operácie, a na sústruhu `spin.mode` (css alebo rpm), `spin.css`, `spin.max` a `tool.nose`. Písmenové slovo, ktorého hodnota je prázdna, napríklad `A{rot.a}` na stroji bez osi A, sa z riadku vynechá. Porovnávajte x, y a z ako text v úvodzovkách (`if probe.kind == "z"`): bez úvodzoviek sú to súradnice pohybu.

Dva ďalšie riadky na začiatku postprocesora z neho urobia postprocesor pre sústruh: `machine lathe` (potom zapisuje len X a Z a odmieta frézovacie dráhy, ako ich frézovací postprocesor odmieta sústružnícke) a `lathe-x diameter` alebo `lathe-x radius`.

Každá udalosť môže používať premenné svojho druhu pohybu, zapisované ako `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), polotovar (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), nástroj (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operácia (`op.name`, `op.type`), `rpm`, bod pohybu (`x`, `y`, `z`, `f` a `moved`: true, keď sa zmenila os), oblúky (`arc.g` 2 alebo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) a otvory (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Zoznam {{ui:Udalosti a premenné}} v editore ukazuje, ktorá udalosť čo vidí. Stav, ktorý môžete čítať a nastavovať: `cool`, `offset` a `at.x`, `at.y`, `at.z`, `at.f` (naposledy zapísané hodnoty).

## Príkazy

| Príkaz | Čo robí |
|---|---|
| `raw TEXT` | Riadok presne tak, ako je napísaný (bez čísla riadku) |
| `comment TEXT` | `(TEXT)` s odstránenými znakmi mimo ASCII a zátvorkami |
| `emit WORD WORD …` | Riadok slov; slová, ktoré sú prázdne, sa vynechajú; bez slov, žiadny riadok |
| `word WORD …` | Pridá slová do riadku, ktorý sa buduje; holé `emit` ho ukončí |
| `if EXPR` … `else` … `end` | Podmienky: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inak b) |
| `for tool in tools` … `end` | Raz pre každý nástroj, ktorý program používa |
| `set NAME EXPR` | Zapamätá hodnotu (`set offset tool.number`) |
| `reset NAME …` | Zabudne modálne slová (skupinu, písmeno adresy ako `Z`, alebo `at.z`) |
| `do rapid X Y Z` | Spustí udalosť `rapid` pre bod |

Slovo je napísaný text s dierami `{variable|filter}`. Filtre sú `upper`, `lower`, `pad:N` (doplnenie núl), `cut:N` (prvých N znakov), `safe` (ASCII bezpečné pre komentáre) a `int`. Slovo končiace `~` je **modálne**: zapíše sa len vtedy, keď sa líši od toho, čo sa naposledy zapísalo (`G1~`, `X{x}~`). Slovo končiace `~!` sa zapíše zakaždým a stále sa pamätá. Názov, ktorý nie je premennou, je obyčajný text (`G81`, `mist`). Čísla sa zaokrúhľujú na 0.001 mm a zapisujú sa bez koncových núl.

## Čo postprocesor nedokáže

Rozhoduje len o tom, ako sa pohyby zapisujú, nič viac. Nedokáže zmeniť dráhu nástroja, zoradiť operácie, rozdeliť oblúk, pridať os, poznať dráhu pohybu alebo kinematiku vášho stroja ani robiť aritmetiku so súradnicami (neexistuje `+`). Polohy otočných osí samotné pochádzajú zo stroja opísaného v Nastavení, nie z postprocesora: postprocesor môže zmeniť ich znamienko alebo písmená, nie kinematiku. Cykly životnosti nástroja a podprogramy nie sú hotové. Súbor postprocesora v štýle `.cps` z iného programu sa nedá načítať: toto je iný, jednoduchší formát.
