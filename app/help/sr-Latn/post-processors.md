---
title: Postprocesori koje možete uređivati
summary: Postprocesor je kratka tekstualna datoteka koja pretvara putanju alata u G-kod za vaš upravljač. Kopiraj jedan od ugrađenih postprocesora, promeni linije koje su ti potrebne (brojevi linija, promena alata, početna kretanja, završni kod), pogledaj G-kod koji se piše dok kucaš i čuvaj ga uz deo.
keywords: postprocesor, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, promena alata, M6, G43, gotov ciklus, brojevi linija, modalno, događaj, promenljiva
from: 36ab8a38
---

Isti putanja alata mora biti zapisan drugačije za različite upravljače: brojevi linija ili bez njih, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratak tekst koji to kaže. Tri ugrađena postprocesora PartCraft-a (u stilu Fanuc, GRBL i LinuxCNC) napisana su u ovom formatu, pa postprocesor po svojoj meri može da počne kao kopija jednog od njih.

Proveri izlaz u simulatoru svoje mašine pre rezanja i prvo ga pusti u vazduhu iznad sirovca. Ugrađeni postprocesori pišu tačno ono što su pisali pre nego što je ovaj format postojao (testovi upoređuju njihov izlaz bajt po bajt na stotinama programa), ali ništa ovde nije dokazano na tvojoj mašini, a postprocesor koji menjaš tvoj je da ga dokažeš.

## Napravi jedan

U Proizvodnji, pod **Postprocesor**:

- {{ui:Uredi postprocesor…}} na ugrađenom upravljaču otvara **tvoju kopiju** njega. Na tvom sopstvenom postprocesoru otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od malog praznog postprocesora sa svakim događajem u njemu.
- {{ui:Uvezi datoteku postprocesora…}} učitava `.cpost` tekstualnu datoteku (onu koju dobijaš iz **Sačuvaj kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, liniju koja kaže da li se čita (i koja linija je pogrešna) i G-kod koji postprocesor piše dok kucaš. **Pregled sa** bira mali primer programa koji pokreće svaki događaj ili program ovog dela. {{ui:Sačuvaj}} čuva postprocesor u datoteci dela (do 20 postprocesora) i bira ga kao upravljač. Postprocesori putuju sa delom; da ga koristiš u drugom delu, sačuvaj ga kao datoteku i uvezi ga tamo.

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

Linije koje počinju sa `//` i prazne linije se ignorišu. Na vrhu su podešavanja; zatim jedan blok `on <događaj>` za svaki događaj, zatvoren sa `end`. Događaj koji izostaviš ne piše ništa.

| Podešavanje | Značenje |
|---|---|
| `post <id>` | Id postprocesora: slova, cifre, `-` i `_` |
| `name <tekst>` | Šta prikazuje lista upravljača |
| `extension <ext>` | Nastavak datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … u svakoj `emit` liniji, ili nijedan |
| `decimal-point yes` / `no` | `10.` umesto `10` (komentari nikad ne nose decimalnu tačku) |
| `canned-cycles yes` / `no` | `no`: rupe se pišu kao G0/G1 kretanja koja predstavljaju |
| `modal <grupa> <reči>` | Reči grupe (`modal motion G0 G1 G2 G3`) koje se pišu samo kad se promene |

## Događaji

Izvršavaju se ovim redom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kad se alat promeni), `spindle` (kad se brzina promeni), `approach` (kretanje do prve tačke, pre prvog brzog hoda), `coolant-on`, pa njegovi pokreti kao `rapid`, `feed` i `arc`, a svaki gotov ciklus kao `cycle-start`, po jedan `cycle-hole` za svaku rupu i `cycle-end`; na kraju `end`.

Svaki događaj može da koristi promenljive svoje vrste kretanja, napisane kao `{ime}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovac (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, tačka kretanja (`x`, `y`, `z`, `f` i `moved`: true kad se neka osa promenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Spisak **Događaji i promenljive** u uređivaču pokazuje koji događaj vidi koje. Stanje koje možeš da čitaš i postavljaš: `cool`, `offset`, i `at.x`, `at.y`, `at.z`, `at.f` (poslednje upisane vrednosti).

## Naredbe

| Naredba | Šta radi |
|---|---|
| `raw TEKST` | Linija tačno kako je ukucana (bez broja linije) |
| `comment TEKST` | `(TEKST)` sa uklonjenim znacima van ASCII i zagradama |
| `emit REČ REČ …` | Linija reči; reči koje ispadnu prazne se izostavljaju; bez reči, nema linije |
| `word REČ …` | Dodaje reči liniji koja se gradi; prazan `emit` je završava |
| `if IZRAZ` … `else` … `end` | Uslovi: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set IME IZRAZ` | Zapamti vrednost (`set offset tool.number`) |
| `reset IME …` | Zaboravi modalne reči (grupu, slovo adrese kao `Z`, ili `at.z`) |
| `do rapid X Y Z` | Pokreće događaj `rapid` za tačku |

Reč je otkucan tekst sa rupama `{promenljiva|filter}`. Filteri su `upper`, `lower`, `pad:N` (popunjavanje nulama), `cut:N` (prvih N znakova), `safe` (ASCII bezbedan za komentar) i `int`. Reč koja se završava sa `~` je **modalna**: piše se samo kad se razlikuje od poslednje napisane (`G1~`, `X{x}~`). Reč koja se završava sa `~!` piše se svaki put i i dalje se pamti. Ime koje nije promenljiva je običan tekst (`G81`, `mist`). Brojevi se zaokružuju na 0.001 mm i pišu se bez završnih nula.

## Šta postprocesor ne može

Odlučuje samo kako se pokreti pišu, ništa više. Ne može da promeni putanju alata, redja operacije, podeli luk, doda osu, zna hod ili kinematiku tvoje mašine, niti da računa sa koordinatama (nema `+`). Sondiranje, životni vek alata i ciklusi potprograma, izlaz za 4. i 5. osu i kodovi za struganje nisu napravljeni. Datoteka `.cps` u stilu drugog programa ne može da se učita: ovo je drugačiji, jednostavniji format.
