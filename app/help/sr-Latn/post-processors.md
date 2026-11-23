---
title: Postprocesori koje možete menjati
summary: Postprocesor je kratka tekstualna datoteka koja putanju alata pretvara u G-kod za vaš upravljač. Kopirajte jedan od ugrađenih postprocesora, promenite redove koje su vam potrebni (brojevi redova, zamena alata, kretanja na početni položaj, završni kod), pogledajte G-kod koji piše dok kucate i čuvajte ga uz deo.
keywords: postprocesor, postprocesor, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, zamena alata, M6, G43, fiksni ciklus, brojevi redova, modalno, događaj, promenljiva
from: c78d0cae
---

Ista putanja alata mora se drugačije zapisati za različite upravljače: brojevi redova ili ih nema, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratak tekst koji kaže kako. Tri ugrađena postprocesora PartCraft-a (Fanuc-stil, GRBL i LinuxCNC) napisana su u ovom formatu, pa vaš sopstveni može početi kao kopija jednog od njih.

Proverite izlaz u simulatoru vaše mašine pre sečenja i najpre ga pustite u vazduhu iznad sirovca. Ugrađeni postprocesori pišu tačno ono što su pisali pre ovog formata (testovi upoređuju njihov izlaz bajt po bajt na stotinama programa), ali ništa ovde nije dokazano na vašoj mašini, a postprocesor koji izmenite je vaš da dokažete.

## Pravljenje

U Proizvodnji, pod **Postprocesor**:

- {{ui:Uredi postprocesor…}} na ugrađenom upravljaču otvara **vašu sopstvenu kopiju** tog postprocesora. Na jednom od vaših postprocesora otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od male prazne datoteke sa svakim događajem.
- {{ui:Uvezi datoteku postprocesora…}} čita `.cpost` tekstualnu datoteku (datoteku koju dobijete iz **Sačuvaj kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, red koji kaže da li se čita (i koji red je pogrešan), i G-kod koji postprocesor piše dok kucate. **Pregled sa** bira mali uzorak programa koji pokreće svaki događaj, ili pravi program ovog dela. {{ui:Sačuvaj}} čuva postprocesor u datoteci dela (do 20 postprocesora) i bira ga kao upravljač. Postprocesori putuju sa delom; da biste ga koristili u drugom delu, sačuvajte ga kao datoteku i uvezite ga tamo.

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

Redovi koji počinju sa `//` i prazni redovi se ignorišu. Na vrhu dolaze podešavanja; zatim jedan blok `on <event>` za svaki događaj, zatvoren sa `end`. Događaj koji izostavite ne piše ništa.

| Podešavanje | Značenje |
|---|---|
| `post <id>` | Identifikator postprocesora: slova, cifre, `-` i `_` |
| `name <text>` | Ono što prikazuje lista upravljača |
| `extension <ext>` | Ekstenzija datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … u svakom redu `emit`, ili nijedan |
| `decimal-point yes` / `no` | `10.` umesto `10` (komentari nikad ne nose tačku) |
| `canned-cycles yes` / `no` | `no`: rupe se pišu kao G0/G1 kretanja koja predstavljaju |
| `modal <group> <words>` | Reči grupe (`modal motion G0 G1 G2 G3`) koje se pišu samo kada se promene |

## Događaji

Izvršavaju se ovim redom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kada se alat menja), `spindle` (kada se brzina menja), `approach` (kretanje do prve tačke, pre prvog brzog hoda), `coolant-on`, zatim njeni pokreti kao `rapid`, `feed` i `arc`, a svaki fiksni ciklus kao `cycle-start`, jedan `cycle-hole` po rupi i `cycle-end`; na kraju `end`.

Još događaja, za ono što ide preko tri ose (postprocesor bez njih odbija takav program i navodi događaj koji mu nedostaje):

| Događaj | Kada | Njegove promenljive |
|---|---|---|
| `index` | Pre operacije čiji se pravac alata razlikuje od prethodnog, i pre prve operacije na mašini sa rotacionim osama | `rot.a`, `rot.b`, `rot.c` (položaji na koje treba ići; prazno za osu koju mašina nema), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Kretanja operacije čije se rotacione ose pomeraju dok seče | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (da kada posmak mora biti inverzno vreme), `invf` (1/minutama) |
| `rotary-end` | Posle takve operacije | |
| `probe-move` | Kretanje koje staje kada sonda okine | `x`, `y`, `z`, `f`, `probe.n` (1 do 4), `probe.axis` (x, y ili z), `probe.k` (1, 2 ili 3) |
| `probe-set` | Posle dodira jednog ciklusa sondiranja | `probe.kind` (`"z"`, `"x"`, `"y"` ili `centre`), `probe.action` (`set` ili `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Kretanje navoja na strugu | `x`, `z`, `thread.lead` |

Takođe za svaki događaj: `kin` (none, a, b, ac, bc), `rotary` i `tcp` (yes ili no, iz mašine u Postavci), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` i `op.turn` operacije, a na strugu `spin.mode` (css ili rpm), `spin.css`, `spin.max` i `tool.nose`. Reč slova čija je vrednost prazna, kao `A{rot.a}` na mašini bez A ose, izostavlja se iz reda. Poredite sa x, y i z kao tekstom u navodnicima (`if probe.kind == "z"`): bez navodnika to su koordinate kretanja.

Dva reda na vrhu postprocesora ga čine postprocesorom za strug: `machine lathe` (tada piše samo X i Z, i odbija putanje glodanja kao što postprocesor za glodanje odbija putanje struganja) i `lathe-x diameter` ili `lathe-x radius`.

Svaki događaj može koristiti promenljive svoje vrste kretanja, pisane kao `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovac (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, tačka kretanja (`x`, `y`, `z`, `f`, i `moved`: tačno kada se osa promenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Spisak **Događaji i promenljive** u uređivaču pokazuje koji događaj šta vidi. Stanje koje možete čitati i postavljati: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (poslednje vrednosti koje su napisane).

## Naredbe

| Naredba | Šta radi |
|---|---|
| `raw TEXT` | Red tačno kako je ukucan (bez broja reda) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII znakova i zagrada |
| `emit WORD WORD …` | Red reči; reči koje ispadnu prazne se izostavljaju; bez reči, bez reda |
| `word WORD …` | Dodaje reči redu koji se gradi; goli `emit` ga završava |
| `if EXPR` … `else` … `end` | Uslovi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set NAME EXPR` | Pamti vrednost (`set offset tool.number`) |
| `reset NAME …` | Zaboravlja modalne reči (grupu, slovo adrese kao `Z` ili `at.z`) |
| `do rapid X Y Z` | Pokreće događaj `rapid` za tačku |

Reč je tekst sa rupama `{variable|filter}`. Filteri su `upper`, `lower`, `pad:N` (popunjavanje nulama), `cut:N` (prvih N znakova), `safe` (ASCII bezbedan za komentar) i `int`. Reč koja se završava sa `~` je **modalna**: piše se samo kada se razlikuje od onoga što je poslednje napisano (`G1~`, `X{x}~`). Reč koja se završava sa `~!` piše se svaki put i i dalje se pamti. Ime koje nije promenljiva je običan tekst (`G81`, `mist`). Brojevi se zaokružuju na 0.001 mm i pišu bez nula na kraju.

## Šta postprocesor ne može

Odlučuje samo kako se kretanja pišu, ništa više. Ne može da promeni putanju alata, da menja redosled operacija, da podeli luk, da doda osu, da zna hod i kinematiku vaše mašine ili da računa sa koordinatama (nema `+`). Rotacioni položaji dolaze iz mašine opisane u Postavci, a ne iz postprocesora: postprocesor može promeniti njihov znak ili slova, ali ne i kinematiku. Ciklusi vek alata i potprograma nisu napravljeni. Postprocesor `.cps` tipa iz drugog programa ne može se učitati: ovo je drugi, jednostavniji format.
