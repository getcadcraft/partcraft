---
title: Postprocesory, ktoré môžete upravovať
summary: Postprocesor je krátky textový súbor, ktorý mení dráhu nástroja na G-kód pre vaše riadenie. Skopírujte jeden zo vstavaných postprocesorov, zmeňte riadky, ktoré potrebujete (čísla riadkov, výmena nástroja, presuny na domovskú polohu, ukončovací kód), sledujte G-kód, ktorý zapisuje, počas písania a uložte ho spolu s dielom.
keywords: postprocesor, G-kód, NC, GRBL, LinuxCNC, upraviť postprocesor, vlastný postprocesor, cpost, výmena nástroja, M6, G43, pevný cyklus, čísla riadkov, modálny, udalosť, premenná
from: 36ab8a38
---

Rovnaká dráha nástroja musí byť zapísaná inak pre rôzne riadenia: čísla riadkov alebo žiadne, `M6` alebo pauza, `G28` alebo `G53`, `M30` alebo `M2`. **Postprocesor** je krátky text, ktorý určuje, ako. Tri vstavané postprocesory v PartCraft (v štýle Fanuc, GRBL a LinuxCNC) sú napísané v tomto formáte, takže váš vlastný postprocesor môže začať ako kópia jedného z nich.

Výstup overte v simulátore vášho stroja pred rezaním a najprv ho spustite nad materiálom vo vzduchu. Vstavané postprocesory zapisujú presne to, čo zapisovali pred vznikom tohto formátu (testy porovnávajú ich výstup bajt po bajte na stovkách programov), ale nič tu nebolo overené na vašom stroji a postprocesor, ktorý zmeníte, musíte overiť vy.

## Vytvoriť postprocesor

V časti Výroba, pod **Postprocesor**:

- {{ui:Upraviť postprocesor…}} pri vstavanom riadení otvorí **vašu vlastnú kópiu**. Pri vašom vlastnom postprocesore otvorí tento postprocesor.
- {{ui:Nový postprocesor…}} začne z malého prázdneho postprocesora so všetkými udalosťami.
- {{ui:Importovať súbor postprocesora…}} načíta textový súbor `.cpost` (súbor, ktorý dostanete cez **Uložiť ako súbor…** v editore).

Editor zobrazuje text, riadok, ktorý hovorí, či sa postprocesor načíta (a ktorý riadok je chybný), a G-kód, ktorý postprocesor zapisuje, počas písania. **Ukážka pomocou** vyberie malý vzorový program, ktorý spustí každú udalosť, alebo vlastný program tohto dielu. {{ui:Uložiť}} uloží postprocesor do súboru dielu (až 20 postprocesorov) a zvolí ho ako riadenie. Postprocesory putujú spolu s dielom; ak chcete použiť jeden v inom diele, uložte ho ako súbor a importujte ho tam.

## Ako vyzerá postprocesor

```
post mymill
name Moja fréza (.nc)
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

Riadky začínajúce `//` a prázdne riadky sa ignorujú. Na začiatku sú nastavenia; potom jeden blok `on <udalosť>` pre každú udalosť, ukončený `end`. Udalosť, ktorú vynecháte, nič nezapíše.

| Nastavenie | Význam |
|---|---|
| `post <id>` | Identifikátor postprocesora: písmená, číslice, `-` a `_` |
| `name <text>` | Čo zobrazuje zoznam riadení |
| `extension <ext>` | Prípona súboru: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … pri každom riadku `emit`, alebo žiadne |
| `decimal-point yes` / `no` | `10.` namiesto `10` (komentáre nikdy nemajú bodku) |
| `canned-cycles yes` / `no` | `no`: otvory sa zapíšu ako pohyby G0/G1, ktoré predstavujú |
| `modal <group> <words>` | Slová skupiny (`modal motion G0 G1 G2 G3`), ktoré sa zapisujú iba pri zmene |

## Udalosti

Udalosti bežia v tomto poradí pre program: `start`; potom pre každú operáciu `operation`, `tool-change` (keď sa mení nástroj), `spindle` (keď sa mení otáčky), `approach` (pohyb k prvému bodu, pred prvým rýchlym pohybom), `coolant-on`, potom jej pohyby ako `rapid`, `feed` a `arc`, a každý pevný cyklus ako `cycle-start`, jeden `cycle-hole` pre každý otvor a `cycle-end`; nakoniec `end`.

Každá udalosť môže používať premenné svojho druhu pohybu, zapísané `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), polotovar (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), nástroj (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operáciu (`op.name`, `op.type`), `rpm`, bod pohybu (`x`, `y`, `z`, `f` a `moved`: true, ak sa zmenila os), oblúky (`arc.g` 2 alebo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) a otvory (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Zoznam **Udalosti a premenné** v editore ukazuje, ktorá udalosť čo vidí. Stav, ktorý môžete čítať a nastaviť: `cool`, `offset` a `at.x`, `at.y`, `at.z`, `at.f` (naposledy zapísané hodnoty).

## Príkazy

| Príkaz | Čo robí |
|---|---|
| `raw TEXT` | Riadok presne ako napísaný (bez čísla riadku) |
| `comment TEXT` | `(TEXT)` bez znakov mimo ASCII a bez zátvoriek |
| `emit WORD WORD …` | Riadok slov; slová, ktoré sú prázdne, sa vynechajú; žiadne slová, žiadny riadok |
| `word WORD …` | Pridá slová k riadku, ktorý sa skladá; holé `emit` ho ukončí |
| `if EXPR` … `else` … `end` | Podmienky: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inak b) |
| `for tool in tools` … `end` | Raz pre každý nástroj, ktorý program používa |
| `set NAME EXPR` | Zapamätá hodnotu (`set offset tool.number`) |
| `reset NAME …` | Zabudne modálne slová (skupinu, písmeno adresy ako `Z`, alebo `at.z`) |
| `do rapid X Y Z` | Spustí udalosť `rapid` pre bod |

Slovo je zadaný text s dierami `{variable|filter}`. Filtre sú `upper`, `lower`, `pad:N` (doplnenie nulami), `cut:N` (prvých N znakov), `safe` (ASCII bezpečné pre komentáre) a `int`. Slovo končiace `~` je **modálne**: zapíše sa iba vtedy, ak sa líši od naposledy zapísaného (`G1~`, `X{x}~`). Slovo končiace `~!` sa zapíše vždy a stále sa zapamätá. Názov, ktorý nie je premennou, je obyčajný text (`G81`, `mist`). Čísla sa zaokrúhľujú na 0.001 mm a zapisujú sa bez koncových núl.

## Čo postprocesor nedokáže

Rozhoduje iba o tom, ako sa pohyby zapisujú, nič viac. Nemôže zmeniť dráhu nástroja, zoradiť operácie, rozdeliť oblúk, pridať os, poznať pojazd alebo kinematiku vášho stroja ani počítať so súradnicami (neexistuje `+`). Sondovanie, cykly životnosti nástroja a podprogramov, výstup pre 4. a 5. os a kódy sústruhu nie sú hotové. Súbor `.cps` z iného programu sa nedá načítať: toto je iný, jednoduchší formát.
