---
title: Postprocesorji, ki jih lahko urejate
summary: Postprocesor je kratka besedilna datoteka, ki pot orodja pretvori v G-kodo za vaše krmilnik. Kopirajte enega od vgrajenih postprocesorjev, spremenite vrstice, ki jih potrebujete (številke vrstic, menjava orodja, premiki na izhodišče, končna koda), v živo vidite G-kodo, ki jo zapiše med tipkanjem, in ga shranite skupaj z delom.
keywords: postprocesor, post, G-koda, NC, GRBL, LinuxCNC, uredi post, post po meri, urejevalnik postprocesorjev, cpost, menjava orodja, M6, G43, fiksni cikel, številke vrstic, modalno, dogodek, spremenljivka
from: c78d0cae
---

Enaka pot orodja mora biti zapisana drugače za različna krmilnika: s številkami vrstic ali brez njih, `M6` ali pavza, `G28` ali `G53`, `M30` ali `M2`. **Postprocesor** je kratko besedilo, ki pove, kako. Trije vgrajeni postprocesorji PartCraft (Fanuc-style, GRBL in LinuxCNC) so zapisani v tej obliki, zato se lahko postprocesor po meri začne kot kopija enega od njih.

Pred rezanjem preverite izhod v simulatorju svojega stroja in ga najprej zaženite v zraku nad surovcem. Vgrajeni postprocesorji zapisujejo natanko to, kar so zapisovali pred uvedbo te oblike (preizkusi primerjajo njihov izhod bajt za bajtom na stotinah programov), vendar ničesar tukaj ni bilo dokazano na vašem stroju, postprocesor, ki ga spremenite, pa morate dokazati vi.

## Ustvarite svojega

V Izdelavi, pod **Postprocesor**:

- {{ui:Uredi post…}} pri vgrajenem krmilniku odpre **vašo lastno kopijo** le-tega. Pri enem od vaših postprocesorjev odpre ta postprocesor.
- {{ui:Nov post…}} začne z majhnim praznim postprocesorjem, ki ima vse dogodke.
- {{ui:Uvozi datoteko posta…}} prebere besedilno datoteko `.cpost` (datoteko, ki jo dobite z **Shrani kot datoteko…** v urejevalniku).

Urejevalnik prikaže besedilo, vrstico, ki pove, ali se bere (in katera vrstica je napačna), ter G-kodo, ki jo postprocesor zapiše med tipkanjem. **Predogled z** izbere majhen vzorčni program, ki sproži vsak dogodek, ali lastni program tega dela. {{ui:Shrani}} shrani postprocesor v datoteko dela (do 20 postprocesorjev) in ga izbere kot krmilnik. Postprocesorji potujejo z delom; če ga želite uporabiti v drugem delu, ga shranite kot datoteko in uvozite tam.

## Kako izgleda postprocesor

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

Vrstice, ki se začnejo z `//`, in prazne vrstice se prezrejo. Na vrhu so nastavitve; nato po en blok `on <dogodek>` za vsak dogodek, zaključen z `end`. Dogodek, ki ga izpustite, ne zapiše ničesar.

| Nastavitev | Pomen |
|---|---|
| `post <id>` | Identifikator postprocesorja: črke, številke, `-` in `_` |
| `name <besedilo>` | Kar prikazuje seznam krmilnikov |
| `extension <ext>` | Končnica datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … v vsaki vrstici `emit`, ali nič |
| `decimal-point yes` / `no` | `10.` namesto `10` (v komentarjih pika nikoli ni) |
| `canned-cycles yes` / `no` | `no`: luknje so zapisane kot premiki G0/G1, ki jih predstavljajo |
| `modal <skupina> <besede>` | Besede skupine (`modal motion G0 G1 G2 G3`), ki se zapišejo samo, kadar se spremenijo |

## Dogodki

Izvajajo se v tem vrstnem redu za program: `start`; nato za vsako operacijo `operation`, `tool-change` (ko se orodje zamenja), `spindle` (ko se hitrost spremeni), `approach` (premik do prve točke, pred prvim hitrim premikom), `coolant-on`, nato njeni premiki kot `rapid`, `feed` in `arc`, vsak fiksni cikel kot `cycle-start`, en `cycle-hole` na luknjo in `cycle-end`; nazadnje `end`.

Več dogodkov za to, kar presega tri osi (postprocesor brez dogodka zavrne tak program in navede dogodek, ki mu manjka):

| Dogodek | Kdaj | Njegove spremenljivke |
|---|---|---|
| `index` | Pred operacijo, katere smer orodja se razlikuje od prejšnje, in pred prvo operacijo na stroju z rotacijskimi osmi | `rot.a`, `rot.b`, `rot.c` (položaji, na katere je treba oditi; prazno za os, ki je stroj nima), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Premiki operacije, pri kateri se rotacijske osi premikajo med rezanjem | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (da, kadar mora biti posmik inverzni čas), `invf` (1/minute) |
| `rotary-end` | Po taki operaciji | |
| `probe-move` | Premik, ki se ustavi, ko se sproži tipalo | `x`, `y`, `z`, `f`, `probe.n` (1 do 4), `probe.axis` (x, y ali z), `probe.k` (1, 2 ali 3) |
| `probe-set` | Po dotikih enega cikla tipanja | `probe.kind` (`"z"`, `"x"`, `"y"` ali `centre`), `probe.action` (`set` ali `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Premik navoja na stroju za struženje | `x`, `z`, `thread.lead` |

Tudi za vsak dogodek: `kin` (none, a, b, ac, bc), `rotary` in `tcp` (yes ali no, iz stroja v Nastavitvi), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` in `op.turn` operacije, na stroju za struženje pa `spin.mode` (css ali rpm), `spin.css`, `spin.max` in `tool.nose`. Črkovna beseda, katere vrednost je prazna, kot `A{rot.a}` na stroju brez osi A, je izpuščena iz vrstice. Primerjajte x, y in z kot besedilo v narekovajih (`if probe.kind == "z"`): brez narekovajev so to koordinate premika.

Dve dodatni vrstici na vrhu postprocesorja ga naredita za postprocesor za struženje: `machine lathe` (tedaj zapiše samo X in Z ter zavrne poti rezkanja, kot postprocesor za rezkanje zavrne poti struženja) in `lathe-x diameter` ali `lathe-x radius`.

Vsak dogodek lahko uporabi spremenljivke svoje vrste premika, zapisane kot `{ime}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), surovec (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), orodje (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacijo (`op.name`, `op.type`), `rpm`, točko premika (`x`, `y`, `z`, `f` in `moved`: true, ko se je os spremenila), loke (`arc.g` 2 ali 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) in luknje (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Seznam **Dogodki in spremenljivke** v urejevalniku pokaže, kateri dogodek vidi katere. Stanje, ki ga lahko beremo in nastavljamo: `cool`, `offset` ter `at.x`, `at.y`, `at.z`, `at.f` (zadnje zapisane vrednosti).

## Stavki

| Stavek | Kaj naredi |
|---|---|
| `raw BESEDILO` | Vrstica natanko kot vpisana (brez številke vrstice) |
| `comment BESEDILO` | `(BESEDILO)` brez znakov, ki niso ASCII, in oklepajev |
| `emit BESEDA BESEDA …` | Vrstica besed; besede, ki so prazne, se izpustijo; brez besed ni vrstice |
| `word BESEDA …` | Doda besede vrstici, ki se gradi; samostojni `emit` jo zaključi |
| `if IZRAZ` … `else` … `end` | Pogoji: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sicer b) |
| `for tool in tools` … `end` | Enkrat za vsako orodje, ki ga program uporablja |
| `set IME IZRAZ` | Zapomni si vrednost (`set offset tool.number`) |
| `reset IME …` | Pozabi modalne besede (skupino, naslovno črko, kot `Z`, ali `at.z`) |
| `do rapid X Y Z` | Zaženi dogodek `rapid` za točko |

Beseda je vpisano besedilo z luknjami `{spremenljivka|filter}`. Filtri so `upper`, `lower`, `pad:N` (polnjenje z ničlami), `cut:N` (prvih N znakov), `safe` (ASCII, varen za komentar) in `int`. Beseda, ki se konča z `~`, je **modalna**: zapiše se samo, kadar se razlikuje od tega, kar je bilo nazadnje zapisano (`G1~`, `X{x}~`). Beseda, ki se konča z `~!`, se zapiše vsakič in se še vedno zapomni. Ime, ki ni spremenljivka, je navadno besedilo (`G81`, `mist`). Števila so zaokrožena na 0.001 mm in zapisana brez končnih ničel.

## Česa postprocesor ne zmore

Odloča samo, kako so premiki zapisani, nič več. Ne more spremeniti poti orodja, razvrščati operacij, deliti loka, dodati osi, poznati obsega hodov ali kinematike vašega stroja ali računati s koordinatami (ni `+`). Rotacijske položaje same prihajajo iz stroja, opisanega v Nastavitvi, ne iz postprocesorja: postprocesor lahko spremeni njihov predznak ali črke, ne kinematike. Cikli življenjske dobe orodja in podprogramov niso izdelani. Datoteke postprocesorja v slogu `.cps` iz drugega programa ni mogoče naložiti: to je drugačna, enostavnejša oblika.
