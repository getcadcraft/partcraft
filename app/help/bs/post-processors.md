---
title: Postprocesori koje možeš uređivati
summary: Postprocesor je kratka tekstualna datoteka koja toolpath pretvara u G-kod za tvoj upravljač. Kopiraj jedan od ugrađenih postprocesora, promijeni linije koje ti trebaju (brojevi linija, promjena alata, početni pomaci, završni kod), gledaj G-kod koji piše dok kucaš, i čuvaj ga uz dio.
keywords: postprocesor, post, postprocesor, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, promjena alata, M6, G43, ciklus, brojevi linija, modalno, događaj, varijabla
from: 36ab8a38
---

Isti toolpath mora se drugačije zapisati za različite upravljače: brojevi linija ili bez njih, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratak tekst koji kaže kako. Tri ugrađena postprocesora u PartCraft-u (Fanuc-stil, GRBL i LinuxCNC) napisana su u ovom formatu, pa tvoj vlastiti može početi kao kopija jednog od njih.

Prije rezanja provjeri izlaz u simulatoru svoje mašine, i prvo ga pusti u zraku iznad sirovine. Ugrađeni postprocesori pišu tačno ono što su pisali prije nego što je ovaj format postojao (testovi upoređuju njihov izlaz bajt po bajt na stotinama programa), ali ništa ovdje nije dokazano na tvojoj mašini, a postprocesor koji promijeniš tvoj je da ga dokažeš.

## Napravi jedan

U Proizvodnji, pod **Post**:

- {{ui:Uredi postprocesor…}} na ugrađenom upravljaču otvara **tvoju vlastitu kopiju** njega. Na jednom od tvojih postprocesora otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od malog praznog postprocesora sa svim događajima.
- {{ui:Uvezi datoteku postprocesora…}} čita `.cpost` tekstualnu datoteku (datoteku koju dobiješ sa **Spasi kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, liniju koja kaže da li se čita (i koja linija je pogrešna), i G-kod koji postprocesor piše dok kucaš. **Pregled sa** bira mali uzorak programa koji pokreće svaki događaj, ili vlastiti program ovog dijela. {{ui:Spasi}} čuva postprocesor u datoteci dijela (do 20 postprocesora) i bira ga kao upravljač. Postprocesori putuju s dijelom; da ga koristiš u drugom dijelu, sačuvaj ga kao datoteku i uvezi tamo.

## Kako izgleda postprocesor

```
post mymill
name Moja glodalica (.nc)
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

Linije koje počinju sa `//` i prazne linije se ignorišu. Na vrhu idu postavke; zatim po jedan blok `on <event>` za svaki događaj, zatvoren sa `end`. Događaj koji izostaviš ništa ne piše.

| Postavka | Značenje |
|---|---|
| `post <id>` | Identifikator postprocesora: slova, cifre, `-` i `_` |
| `name <text>` | Šta prikazuje lista upravljača |
| `extension <ext>` | Ekstenzija datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … na svakoj `emit` liniji, ili nijedne |
| `decimal-point yes` / `no` | `10.` umjesto `10` (komentari nikad ne nose tačku) |
| `canned-cycles yes` / `no` | `no`: rupe se pišu kao G0/G1 pomjeranja koja predstavljaju |
| `modal <group> <words>` | Riječi grupe (`modal motion G0 G1 G2 G3`) koje se pišu samo kad se promijene |

## Događaji

Izvršavaju se ovim redom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kad se alat promijeni), `spindle` (kad se brzina promijeni), `approach` (pomjeranje do prve tačke, prije prvog brzog hoda), `coolant-on`, zatim njeni hodovi kao `rapid`, `feed` i `arc`, a svaki ciklus kao `cycle-start`, jedan `cycle-hole` po rupi i `cycle-end`; na kraju `end`.

Svaki događaj može koristiti varijable svoje vrste hoda, zapisane kao `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovina (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, tačka hoda (`x`, `y`, `z`, `f`, i `moved`: tačno kad se neka osa promijenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Događaji i varijable** u uređivaču pokazuje koji događaj vidi koje. Stanje koje možeš čitati i postavljati: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (zadnje zapisane vrijednosti).

## Naredbe

| Naredba | Šta radi |
|---|---|
| `raw TEXT` | Linija tačno kako je ukucana (bez broja linije) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII znakova i zagrada |
| `emit WORD WORD …` | Linija riječi; riječi koje ispadnu prazne se izostavljaju; bez riječi, nema linije |
| `word WORD …` | Dodaje riječi liniji koja se gradi; prazan `emit` je završava |
| `if EXPR` … `else` … `end` | Uslovi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set NAME EXPR` | Zapamti vrijednost (`set offset tool.number`) |
| `reset NAME …` | Zaboravi modalne riječi (grupu, slovo adrese poput `Z`, ili `at.z`) |
| `do rapid X Y Z` | Pokreni događaj `rapid` za tačku |

Riječ je ukucani tekst sa rupama `{variable|filter}`. Filteri su `upper`, `lower`, `pad:N` (popuna nulama), `cut:N` (prvih N znakova), `safe` (ASCII bez opasnosti za komentar) i `int`. Riječ koja se završava sa `~` je **modalna**: piše se samo kad se razlikuje od onoga što je zadnje zapisano (`G1~`, `X{x}~`). Riječ koja se završava sa `~!` piše se svaki put i ipak se pamti. Ime koje nije varijabla je običan tekst (`G81`, `mist`). Brojevi se zaokružuju na 0,001 mm i pišu bez završnih nula.

## Šta postprocesor ne može

Odlučuje samo kako se hodovi pišu, ništa više. Ne može promijeniti toolpath, redati operacije, razdvojiti luk, dodati osu, znati hod ili kinematiku tvoje mašine, niti računati sa koordinatama (nema `+`). Sondiranje, ciklusi vijeka alata i potprogrami, izlaz za 4. i 5. osu, i kodovi tokarenja nisu napravljeni. Datoteka postprocesora u `.cps` stilu iz drugog programa ne može se učitati: ovo je drugi, jednostavniji format.
