---
title: Postprocesorji, ki jih lahko uredite
summary: Post je kratka besedilna datoteka, ki potek orodja pretvori v G-kodo za vaš krmilnik. Kopirajte enega od vgrajenih postov, spremenite vrstice, ki jih potrebujete (številke vrstic, menjavo orodja, premike domov, končno kodo), med tipkanjem sproti vidite G-kodo, ki jo zapisuje, in ga shranite skupaj z delom.
keywords: post, postprocesor, G-koda, NC, GRBL, LinuxCNC, uredi post, post po meri, cpost, menjava orodja, M6, G43, vgrajeni cikel, številke vrstic, modalno, dogodek, spremenljivka
from: 36ab8a38
---

Isti potek orodja je treba za različne krmilnike zapisati različno: s številkami vrstic ali brez, z `M6` ali s premorom, z `G28` ali `G53`, z `M30` ali `M2`. **Post** je kratko besedilo, ki pove, kako. Trije vgrajeni posti PartCrafta (v slogu Fanuc, GRBL in LinuxCNC) so zapisani v tej obliki, zato lahko svoj post začnete kot kopijo enega od njih.

Izhod preverite v simulatorju svojega stroja, preden režete, in najprej zaženite program v zraku nad surovcem. Vgrajeni posti zapisujejo natanko to, kar so zapisovali pred uvedbo te oblike (testi primerjajo njihov izhod bajt za bajtom pri stotinah programov), vendar na vašem stroju ni ničesar dokazano, post, ki ga spremenite, pa morate dokazati sami.

## Ustvarite svojega

V Izdelavi pod **Post**:

- {{ui:Uredi post…}} pri vgrajenem krmilniku odpre **vašo lastno kopijo**. Pri vašem postu odpre ta post.
- {{ui:Nov post…}} začne z majhnim praznim postom, v katerem so vsi dogodki.
- {{ui:Uvozi datoteko posta…}} prebere besedilno datoteko `.cpost` (datoteko, ki jo dobite z **Shrani kot datoteko…** v urejevalniku).

Urejevalnik med tipkanjem prikazuje besedilo, vrstico, ki pove, ali se bere (in katera vrstica je napačna), ter G-kodo, ki jo post zapiše. **Predogled z** izbere majhen vzorčni program, ki sproži vse dogodke, ali pa program tega dela. {{ui:Shrani}} shrani post v datoteko dela (do 20 postov) in ga izbere kot krmilnik. Posti potujejo z delom; če ga želite uporabiti v drugem delu, ga shranite kot datoteko in uvozite tam.

## Kako izgleda post

```
post mymill
name Moj stroj (.nc)
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

Vrstice, ki se začnejo z `//`, in prazne vrstice se prezrejo. Na vrhu so nastavitve; nato je za vsak dogodek en blok `on <dogodek>`, zaključen z `end`. Dogodek, ki ga izpustite, ne zapiše ničesar.

| Nastavitev | Pomen |
|---|---|
| `post <id>` | Id posta: črke, številke, `-` in `_` |
| `name <besedilo>` | Kar prikaže seznam krmilnikov |
| `extension <ext>` | Končnica datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … v vsaki vrstici `emit`, ali nič |
| `decimal-point yes` / `no` | `10.` namesto `10` (komentarji nikoli ne vsebujejo pike) |
| `canned-cycles yes` / `no` | `no`: luknje se zapišejo kot premiki G0/G1, ki jih predstavljajo |
| `modal <skupina> <besede>` | Besede skupine (`modal motion G0 G1 G2 G3`), ki se zapišejo le, ko se spremenijo |

## Dogodki

Izvajajo se v tem vrstnem redu za program: `start`; nato za vsako operacijo `operation`, `tool-change` (ko se orodje zamenja), `spindle` (ko se hitrost spremeni), `approach` (premik do prve točke, pred prvim hitrim premikom), `coolant-on`, nato njeni premiki kot `rapid`, `feed` in `arc`, vsak vgrajeni cikel pa kot `cycle-start`, en `cycle-hole` za vsako luknjo in `cycle-end`; na koncu `end`.

Vsak dogodek lahko uporablja spremenljivke svoje vrste premika, zapisane kot `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), surovec (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), orodje (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, točka premika (`x`, `y`, `z`, `f` in `moved`: true, ko se je os spremenila), loki (`arc.g` 2 ali 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) in luknje (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Seznam **Dogodki in spremenljivke** v urejevalniku prikaže, kateri dogodek katero vidi. Stanje, ki ga lahko berete in nastavljate: `cool`, `offset` ter `at.x`, `at.y`, `at.z`, `at.f` (zadnje zapisane vrednosti).

## Stavki

| Stavek | Kaj naredi |
|---|---|
| `raw TEXT` | Vrstica natanko tako, kot je vnesena (brez številke vrstice) |
| `comment TEXT` | `(TEXT)`, pri čemer so ne-ASCII znaki in oklepaji odstranjeni |
| `emit WORD WORD …` | Vrstica besed; besede, ki so prazne, se izpustijo; brez besed, brez vrstice |
| `word WORD …` | Doda besede v vrstico, ki nastaja; samostojen `emit` jo zaključi |
| `if EXPR` … `else` … `end` | Pogoji: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, sicer b) |
| `for tool in tools` … `end` | Enkrat za vsako orodje, ki ga program uporablja |
| `set NAME EXPR` | Zapomni si vrednost (`set offset tool.number`) |
| `reset NAME …` | Pozabi modalne besede (skupino, črko naslova, kot je `Z`, ali `at.z`) |
| `do rapid X Y Z` | Zažene dogodek `rapid` za točko |

Beseda je vneseno besedilo z luknjami `{variable|filter}`. Filtri so `upper`, `lower`, `pad:N` (polnjenje z ničlami), `cut:N` (prvih N znakov), `safe` (ASCII, varen za komentarje) in `int`. Beseda, ki se konča z `~`, je **modalna**: zapiše se le, če se razlikuje od tistega, kar je bilo nazadnje zapisano (`G1~`, `X{x}~`). Beseda, ki se konča z `~!`, se zapiše vedno in se še vedno zapomni. Ime, ki ni spremenljivka, je navadno besedilo (`G81`, `mist`). Števila so zaokrožena na 0,001 mm in zapisana brez končnih ničel.

## Česa post ne more

Odloča samo, kako se premiki zapišejo, nič drugega. Ne more spremeniti poteka orodja, razvrstiti operacij, razdeliti loka, dodati osi, poznati hoda ali kinematike vašega stroja ali računati s koordinatami (ni `+`). Sondiranje, cikli življenjske dobe orodja in podprogramov, izhod 4. in 5. osi ter kode za struženje niso izdelani. Datoteke `.cps` iz drugih programov ni mogoče naložiti: to je drugačna, preprostejša oblika.
