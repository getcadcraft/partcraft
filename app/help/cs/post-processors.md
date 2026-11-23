---
title: Upravitelné postprocesory
summary: Postprocesor je krátký textový soubor, který mění dráhu nástroje na G-kód pro váš řídicí systém. Zkopírujte jeden z vestavěných, změňte řádky, které potřebujete (čísla řádků, výměnu nástroje, najetí domů, koncový kód), sledujte G-kód, který zapisuje, jak píšete, a uchovejte jej spolu s dílem.
keywords: postprocesor, postprocesor, G-kód, NC, GRBL, LinuxCNC, upravit postprocesor, vlastní postprocesor, cpost, výměna nástroje, M6, G43, pevný cyklus, čísla řádků, modální, událost, proměnná
from: c78d0cae
---

Stejná dráha nástroje se musí zapisovat jinak pro různé řídicí systémy: čísla řádků, nebo žádná; `M6`, nebo pauza; `G28`, nebo `G53`; `M30`, nebo `M2`. **Postprocesor** je krátký text, který říká jak. Tři vestavěné postprocesory PartCraftu (Fanuc-style, GRBL a LinuxCNC) jsou zapsány v tomto formátu, takže vlastní postprocesor může začít jako kopie jednoho z nich.

Před řezáním zkontrolujte výstup v simulátoru vašeho stroje a nejdřív jej spusťte ve vzduchu nad polotovarem. Vestavěné postprocesory zapisují přesně to, co zapisovaly dříve, než tento formát existoval (testy porovnávají jejich výstup bajt po bajtu na stovkách programů), ale nic zde nebylo ověřeno na vašem stroji a postprocesor, který změníte, musíte ověřit vy.

## Vytvořte jeden

Ve Výrobě pod **Postprocesor**:

- {{ui:Edit post…}} u vestavěného řídicího systému otevře **vaši vlastní kopii**. U vašeho vlastního postprocesoru otevře tento postprocesor.
- {{ui:New post…}} začíná z malého prázdného postprocesoru se všemi událostmi.
- {{ui:Import post file…}} načte textový soubor `.cpost` (soubor, který získáte z **Uložit jako soubor…** v editoru).

Editor zobrazuje text, řádek, který říká, zda se čte (a který řádek je špatný), a G-kód, který postprocesor zapisuje, jak píšete. **Náhled s** vybere malý vzorový program, který spustí všechny události, nebo vlastní program tohoto dílu. {{ui:Save}} uchová postprocesor v souboru dílu (až 20 postprocesorů) a zvolí jej jako řídicí systém. Postprocesory cestují s dílem; chcete-li jeden použít v jiném díle, uložte jej jako soubor a importujte jej tam.

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

Řádky začínající `//` a prázdné řádky se ignorují. Nahoře jsou nastavení; pak jeden blok `on <event>` pro každou událost, uzavřený `end`. Událost, kterou vynecháte, nic nezapíše.

| Nastavení | Význam |
|---|---|
| `post <id>` | Id postprocesoru: písmena, číslice, `-` a `_` |
| `name <text>` | Co zobrazuje seznam řídicích systémů |
| `extension <ext>` | Přípona souboru: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … na každém řádku `emit`, nebo žádná |
| `decimal-point yes` / `no` | `10.` místo `10` (komentáře desetinnou tečku nikdy nemají) |
| `canned-cycles yes` / `no` | `no`: otvory se zapisují jako pohyby G0/G1, které představují |
| `modal <group> <words>` | Slova skupiny (`modal motion G0 G1 G2 G3`), která se zapisují jen tehdy, když se změní |

## Události

Běží v tomto pořadí pro program: `start`; pak pro každou operaci `operation`, `tool-change` (když se mění nástroj), `spindle` (když se mění otáčky), `approach` (pohyb k prvnímu bodu, před prvním rychloposuvem), `coolant-on`, pak její pohyby jako `rapid`, `feed` a `arc`, a každý pevný cyklus jako `cycle-start`, jeden `cycle-hole` pro každý otvor a `cycle-end`; nakonec `end`.

Další události pro to, co jde nad tři osy (postprocesor bez nich takový program odmítne a pojmenuje událost, která mu chybí):

| Událost | Kdy | Její proměnné |
|---|---|---|
| `index` | Před operací, jejíž směr nástroje se liší od předchozí, a před první operací na stroji s rotačními osami | `rot.a`, `rot.b`, `rot.c` (polohy, kam jít; prázdné pro osu, kterou stroj nemá), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Pohyby operace, jejíž rotační osy se pohybují během řezu | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ano, když musí být posuv inverzní čas), `invf` (1/minuty) |
| `rotary-end` | Po takové operaci | |
| `probe-move` | Pohyb, který se zastaví, když sonda sepne | `x`, `y`, `z`, `f`, `probe.n` (1 až 4), `probe.axis` (x, y nebo z), `probe.k` (1, 2 nebo 3) |
| `probe-set` | Po dotycích jednoho cyklu snímání | `probe.kind` (`"z"`, `"x"`, `"y"` nebo `centre`), `probe.action` (`set` nebo `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Závitový pohyb na soustruhu | `x`, `z`, `thread.lead` |

Také pro každou událost: `kin` (none, a, b, ac, bc), `rotary` a `tcp` (yes nebo no, ze stroje v Upnutí), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` a `op.turn` operace, a na soustruhu `spin.mode` (css nebo rpm), `spin.css`, `spin.max` a `tool.nose`. Slovo s písmenem, jehož hodnota je prázdná, například `A{rot.a}` na stroji bez osy A, se z řádku vynechá. Porovnávejte x, y a z jako text v uvozovkách (`if probe.kind == "z"`): bez uvozovek jsou to souřadnice pohybu.

Dva další řádky nahoře postprocesoru z něj udělají soustružnický postprocesor: `machine lathe` (pak zapisuje jen X a Z a odmítá frézovací dráhy, jak frézovací postprocesor odmítá soustružnické) a `lathe-x diameter` nebo `lathe-x radius`.

Každá událost může používat proměnné svého vlastního druhu pohybu, zapsané jako `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), polotovar (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), nástroj (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operaci (`op.name`, `op.type`), `rpm`, bod pohybu (`x`, `y`, `z`, `f` a `moved`: true, když se některá osa změnila), oblouky (`arc.g` 2 nebo 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) a otvory (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Seznam **Události a proměnné** v editoru ukazuje, která událost co vidí. Stav, který můžete číst a nastavit: `cool`, `offset` a `at.x`, `at.y`, `at.z`, `at.f` (naposledy zapsané hodnoty).

## Příkazy

| Příkaz | Co dělá |
|---|---|
| `raw TEXT` | Řádek přesně tak, jak je napsán (bez čísla řádku) |
| `comment TEXT` | `(TEXT)` s odstraněnými znaky mimo ASCII a závorkami |
| `emit WORD WORD …` | Řádek slov; slova, která vyjdou prázdná, se vynechají; žádná slova, žádný řádek |
| `word WORD …` | Přidá slova do sestavovaného řádku; samotné `emit` jej ukončí |
| `if EXPR` … `else` … `end` | Podmínky: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, jinak b) |
| `for tool in tools` … `end` | Jednou pro každý nástroj, který program používá |
| `set NAME EXPR` | Zapamatuje si hodnotu (`set offset tool.number`) |
| `reset NAME …` | Zapomene modální slova (skupinu, písmeno adresy jako `Z`, nebo `at.z`) |
| `do rapid X Y Z` | Spustí událost `rapid` pro bod |

Slovo je napsaný text s otvory `{variable|filter}`. Filtry jsou `upper`, `lower`, `pad:N` (doplnění nulami), `cut:N` (prvních N znaků), `safe` (ASCII bezpečné pro komentář) a `int`. Slovo končící `~` je **modální**: zapíše se jen tehdy, když se liší od naposledy zapsaného (`G1~`, `X{x}~`). Slovo končící `~!` se zapisuje pokaždé a stále se pamatuje. Název, který není proměnnou, je prostý text (`G81`, `mist`). Čísla se zaokrouhlují na 0,001 mm a zapisují se bez koncových nul.

## Co postprocesor nedokáže

Rozhoduje jen o tom, jak se pohyby zapisují, nic dalšího. Nemůže změnit dráhu nástroje, přeřadit operace, rozdělit oblouk, přidat osu, znát dráhy a kinematiku vašeho stroje ani provádět aritmetiku se souřadnicemi (není zde `+`). Rotační polohy samy pocházejí ze stroje popsaného v Upnutí, ne z postprocesoru: postprocesor může změnit jejich znaménko nebo písmena, ne kinematiku. Životnost nástroje a cykly podprogramů nejsou zavedeny. Soubor postprocesoru ve stylu `.cps` z jiného programu nelze načíst: je to jiný, jednodušší formát.
