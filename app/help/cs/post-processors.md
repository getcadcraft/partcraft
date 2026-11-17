---
title: Postprocesory, které můžete upravit
summary: Postprocesor je krátký textový soubor, který převádí dráhu nástroje na G-kód pro vaše řízení. Zkopírujte jeden z vestavěných postprocesorů, upravte řádky, které potřebujete (čísla řádků, výměnu nástroje, pohyby na domovskou polohu, kód konce), sledujte G-kód, který při psaní zapisuje, a uložte jej spolu s dílem.
keywords: postprocesor, G-kód, NC, GRBL, LinuxCNC, upravit postprocesor, vlastní postprocesor, cpost, výměna nástroje, M6, G43, pevný cyklus, čísla řádků, modální, událost, proměnná
from: 36ab8a38
---

Stejná dráha nástroje musí být zapsána jinak pro různá řízení: čísla řádků nebo bez nich, `M6` nebo pauza, `G28` nebo `G53`, `M30` nebo `M2`. **Postprocesor** je krátký text, který říká, jak na to. Tři vestavěné postprocesory PartCraftu (ve stylu Fanuc, GRBL a LinuxCNC) jsou napsány v tomto formátu, takže vlastní postprocesor může začít jako kopie jednoho z nich.

Výstup zkontrolujte v simulátoru vašeho stroje před řezáním a nejdřív jej spusťte nad polotovarem ve vzduchu. Vestavěné postprocesory zapisují přesně to, co zapisovaly před zavedením tohoto formátu (testy porovnávají jejich výstup bajt po bajtu u stovek programů), ale nic zde nebylo ověřeno na vašem stroji a postprocesor, který změníte, musíte ověřit sami.

## Vytvoření postprocesoru

V části Výroba, pod **Postprocesor**:

- {{ui:Upravit postprocesor…}} u vestavěného řízení otevře **vaši vlastní kopii** tohoto postprocesoru. U vlastního postprocesoru otevře tento postprocesor.
- {{ui:Nový postprocesor…}} začne od malého prázdného postprocesoru se všemi událostmi.
- {{ui:Importovat soubor postprocesoru…}} načte textový soubor `.cpost` (soubor, který dostanete přes **Uložit jako soubor…** v editoru).

Editor zobrazuje text, řádek, který říká, zda se čte (a který řádek je chybný), a G-kód, který postprocesor zapisuje, a to průběžně při psaní. **Náhled s** zvolí malý vzorový program, který spustí všechny události, nebo vlastní program tohoto dílu. {{ui:Uložit}} uloží postprocesor do souboru dílu (až 20 postprocesorů) a zvolí jej jako řízení. Postprocesory cestují spolu s dílem; chcete-li jej použít v jiném dílu, uložte jej jako soubor a importujte jej tam.

## Jak vypadá postprocesor

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

Řádky začínající `//` a prázdné řádky se ignorují. Na začátku jsou nastavení; potom jeden blok `on <event>` pro každou událost, ukončený `end`. Událost, kterou vynecháte, nezapíše nic.

| Nastavení | Význam |
|---|---|
| `post <id>` | Identifikátor postprocesoru: písmena, číslice, `-` a `_` |
| `name <text>` | Co ukazuje seznam řízení |
| `extension <ext>` | Přípona souboru: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … u každého řádku `emit`, nebo žádná čísla |
| `decimal-point yes` / `no` | `10.` místo `10` (komentáře desetinnou tečku nikdy neobsahují) |
| `canned-cycles yes` / `no` | `no`: díry se zapíší jako pohyby G0/G1, které představují |
| `modal <group> <words>` | Slova skupiny (`modal motion G0 G1 G2 G3`), která se zapisují jen tehdy, když se změní |

## Události

Běží v tomto pořadí pro program: `start`; potom pro každou operaci `operation`, `tool-change` (když se mění nástroj), `spindle` (když se mění otáčky), `approach` (pohyb k prvnímu bodu, před prvním rychloposuvem), `coolant-on`, pak její pohyby jako `rapid`, `feed` a `arc`, a každý pevný cyklus jako `cycle-start`, jeden `cycle-hole` pro každou díru a `cycle-end`; nakonec `end`.

Každá událost může používat proměnné svého druhu pohybu, psané jako `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), polotovar (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), nástroj (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operaci (`op.name`, `op.type`), `rpm`, bod pohybu (`x`, `y`, `z`, `f` a `moved`: true, když se změnila osa), oblouky (`arc.g` 2 nebo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) a díry (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Seznam **Události a proměnné** v editoru ukazuje, která událost vidí které. Stav, který můžete číst a nastavovat: `cool`, `offset` a `at.x`, `at.y`, `at.z`, `at.f` (naposledy zapsané hodnoty).

## Příkazy

| Příkaz | Co dělá |
|---|---|
| `raw TEXT` | Řádek přesně tak, jak je napsán (bez čísla řádku) |
| `comment TEXT` | `(TEXT)` bez znaků mimo ASCII a bez závorek |
| `emit WORD WORD …` | Řádek slov; prázdná slova se vynechají; žádná slova, žádný řádek |
| `word WORD …` | Přidá slova do právě vytvářeného řádku; samotné `emit` jej ukončí |
| `if EXPR` … `else` … `end` | Podmínky: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, jinak b) |
| `for tool in tools` … `end` | Jednou pro každý nástroj, který program používá |
| `set NAME EXPR` | Zapamatuje hodnotu (`set offset tool.number`) |
| `reset NAME …` | Zapomene modální slova (skupinu, adresní písmeno jako `Z`, nebo `at.z`) |
| `do rapid X Y Z` | Spustí událost `rapid` pro bod |

Slovo je zadaný text s otvory `{variable|filter}`. Filtry jsou `upper`, `lower`, `pad:N` (doplnění nulami), `cut:N` (prvních N znaků), `safe` (ASCII bezpečné pro komentář) a `int`. Slovo končící `~` je **modální**: zapíše se jen tehdy, když se liší od naposledy zapsaného (`G1~`, `X{x}~`). Slovo končící `~!` se zapíše pokaždé a stále se pamatuje. Název, který není proměnnou, je prostý text (`G81`, `mist`). Čísla se zaokrouhlují na 0.001 mm a zapisují se bez koncových nul.

## Co postprocesor neumí

Rozhoduje jen o tom, jak se pohyby zapisují, nic víc. Nemůže změnit dráhu nástroje, přeuspořádat operace, rozdělit oblouk, přidat osu, znát dojezd nebo kinematiku vašeho stroje ani počítat se souřadnicemi (není zde `+`). Sondování, cykly životnosti nástroje a podprogramů, výstup 4. a 5. osy a kódy soustruhu zatím nejsou hotové. Soubor `.cps` z jiného programu načíst nelze: toto je jiný a jednodušší formát.
