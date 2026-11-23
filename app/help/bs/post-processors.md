---
title: Postprocesori koje možete uređivati
summary: Postprocesor je kratka tekstualna datoteka koja pretvara putanju alata u G-kod za vašu upravljačku jedinicu. Kopirajte jedan od ugrađenih, promijenite redove koje trebate (brojevi redova, promjena alata, pomaci na početni položaj, završni kod), vidite G-kod koji zapisuje dok kucate i čuvajte ga uz dio.
keywords: postprocesor, post processor, postprocessor, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, promjena alata, M6, G43, standardni ciklus, brojevi redova, modalno, događaj, varijabla
from: c78d0cae
---

Ista putanja alata mora se drugačije zapisati za različite upravljačke jedinice: brojevi redova ili bez njih, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratak tekst koji kaže kako. Tri ugrađena postprocesora PartCrafta (u stilu Fanuc, GRBL i LinuxCNC) napisana su u ovom formatu, pa vlastiti postprocesor može početi kao kopija jednog od njih.

Provjerite izlaz u simulatoru vaše mašine prije rezanja i prvo ga pustite u zraku iznad sirovca. Ugrađeni postprocesori zapisuju tačno ono što su zapisivali prije postojanja ovog formata (testovi upoređuju njihov izlaz bajt po bajt na stotinama programa), ali ništa ovdje nije dokazano na vašoj mašini, a postprocesor koji promijenite je vaš da ga dokažete.

## Napravite jedan

U Izradi, pod **Post-procesor**:

- {{ui:Uredi postprocesor…}} na ugrađenoj upravljačkoj jedinici otvara **vašu sopstvenu kopiju** nje. Na vašem vlastitom postprocesoru otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od malog praznog postprocesora sa svakim događajem u njemu.
- {{ui:Uvezi datoteku postprocesora…}} čita `.cpost` tekstualnu datoteku (datoteku koju dobijete iz **Spasi kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, red koji kaže da li se čita (i koji je red pogrešan), i G-kod koji postprocesor zapisuje, dok kucate. **Pregled s** bira mali primjer programa koji prolazi kroz svaki događaj, ili ovaj program dijela. {{ui:Spasi}} čuva postprocesor u datoteci dijela (do 20 postprocesora) i bira ga kao upravljačku jedinicu. Postprocesori putuju s dijelom; da ga koristite u drugom dijelu, sačuvajte ga kao datoteku i uvezite tamo.

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

Redovi koji počinju s `//` i prazni redovi se ignorišu. Na vrhu su postavke; zatim jedan blok `on <događaj>` za svaki događaj, zatvoren s `end`. Događaj koji izostavite ne zapisuje ništa.

| Postavka | Značenje |
|---|---|
| `post <id>` | Id postprocesora: slova, cifre, `-` i `_` |
| `name <tekst>` | Šta prikazuje lista upravljačkih jedinica |
| `extension <ext>` | Nastavak datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … u svakom redu `emit`, ili nijedan |
| `decimal-point yes` / `no` | `10.` umjesto `10` (komentari nikad ne nose tačku) |
| `canned-cycles yes` / `no` | `no`: rupe se zapisuju kao G0/G1 pomaci koje predstavljaju |
| `modal <grupa> <riječi>` | Riječi grupe (`modal motion G0 G1 G2 G3`) koje se zapisuju samo kad se promijene |

## Događaji

Izvršavaju se ovim redom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kad se alat promijeni), `spindle` (kad se brzina promijeni), `approach` (pomak do prve tačke, prije prvog brzog hoda), `coolant-on`, zatim njeni pomaci kao `rapid`, `feed` i `arc`, a svaki standardni ciklus kao `cycle-start`, jedan `cycle-hole` po rupi i `cycle-end`; na kraju `end`.

Više događaja, za ono što ide preko tri ose (postprocesor bez njih odbija takav program i navodi događaj koji mu nedostaje):

| Događaj | Kad | Njegove varijable |
|---|---|---|
| `index` | Prije operacije čiji se smjer alata razlikuje od prethodnog, i prije prve operacije na mašini s rotacionim osama | `rot.a`, `rot.b`, `rot.c` (položaji na koje ide; prazno za osu koju mašina nema), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Pomaci operacije čije se rotacione ose pomjeraju dok reže | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (da kad posmak mora biti inverzno vrijeme), `invf` (1/minuta) |
| `rotary-end` | Nakon takve operacije | |
| `probe-move` | Pomak koji se zaustavlja kad sonda okine | `x`, `y`, `z`, `f`, `probe.n` (1 do 4), `probe.axis` (x, y ili z), `probe.k` (1, 2 ili 3) |
| `probe-set` | Nakon dodira jednog ciklusa sondiranja | `probe.kind` (`"z"`, `"x"`, `"y"` ili `centre`), `probe.action` (`set` ili `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Pomak navoja na tokarilici | `x`, `z`, `thread.lead` |

Također za svaki događaj: `kin` (none, a, b, ac, bc), `rotary` i `tcp` (yes ili no, s mašine iz Podešavanja), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` i `op.turn` operacije, a na tokarilici `spin.mode` (css ili rpm), `spin.css`, `spin.max` i `tool.nose`. Riječ slova čija je vrijednost prazna, kao `A{rot.a}` na mašini bez A ose, izostavlja se iz reda. Upoređujte x, y i z kao tekst u navodnicima (`if probe.kind == "z"`): bez njih su koordinate pomaka.

Dva reda na vrhu postprocesora čine ga postprocesorom za tokarilicu: `machine lathe` (tada zapisuje samo X i Z i odbija putanje glodanja, kao što postprocesor za glodanje odbija putanje struganja) i `lathe-x diameter` ili `lathe-x radius`.

Svaki događaj može koristiti varijable svoje vrste pomaka, pisane kao `{ime}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovac (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, tačka pomaka (`x`, `y`, `z`, `f`, i `moved`: tačno kad se neka osa promijenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Lista **Događaji i varijable** u uređivaču pokazuje koji događaj koju vidi. Stanje koje možete čitati i postavljati: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (posljednje zapisane vrijednosti).

## Naredbe

| Naredba | Šta radi |
|---|---|
| `raw TEKST` | Red tačno kako je upisan (bez broja reda) |
| `comment TEKST` | `(TEKST)` bez ne-ASCII znakova i zagrada |
| `emit RIJEČ RIJEČ …` | Red riječi; riječi koje ispadnu prazne se izostavljaju; nema riječi, nema reda |
| `word RIJEČ …` | Dodaje riječi redu koji se gradi; sami `emit` ga završava |
| `if IZRAZ` … `else` … `end` | Uslovi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set IME IZRAZ` | Pamti vrijednost (`set offset tool.number`) |
| `reset IME …` | Zaboravlja modalne riječi (grupu, slovo adrese kao `Z`, ili `at.z`) |
| `do rapid X Y Z` | Pokreće događaj `rapid` za tačku |

Riječ je tipkan tekst s rupama `{varijabla|filter}`. Filteri su `upper`, `lower`, `pad:N` (popunjavanje nulama), `cut:N` (prvih N znakova), `safe` (ASCII bezbedan za komentar) i `int`. Riječ koja se završava `~` je **modalna**: zapisuje se samo kad se razlikuje od onoga što je zadnje zapisano (`G1~`, `X{x}~`). Riječ koja se završava `~!` zapisuje se svaki put i i dalje se pamti. Ime koje nije varijabla je običan tekst (`G81`, `mist`). Brojevi se zaokružuju na 0,001 mm i zapisuju bez krajnjih nula.

## Šta postprocesor ne može

Odlučuje samo kako se pomaci zapisuju, ništa više. Ne može promijeniti putanju alata, poredati operacije, podijeliti luk, dodati osu, znati hod i kinematiku vaše mašine, niti vršiti aritmetiku nad koordinatama (nema `+`). Rotacione pozicije dolaze od mašine opisane u Podešavanju, a ne od postprocesora: postprocesor može promijeniti njihov predznak ili slova, ali ne kinematiku. Ciklusi vijeka alata i podprograma nisu izgrađeni. Datoteka postprocesora `.cps` iz drugog programa ne može se učitati: ovo je drugi, jednostavniji format.
