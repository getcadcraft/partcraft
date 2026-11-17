---
title: Postprocesori koje možete uređivati
summary: Postprocesor je kratka tekstualna datoteka koja pretvara putanju alata u G-kod za vaš upravljački uređaj. Kopirajte jedan od ugrađenih postprocesora, promijenite retke koje trebate (brojevi redaka, promjena alata, početni pomaci, završni kod), pogledajte G-kod koji piše dok tipkate i čuvajte ga uz dio.
keywords: postprocesor, post, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, promjena alata, M6, G43, ciklus, brojevi redaka, modalno, događaj, varijabla
from: 36ab8a38
---

Ista putanja alata mora se zapisati drukčije za različite upravljačke uređaje: brojevi redaka ili bez njih, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratki tekst koji određuje kako. Tri ugrađena postprocesora programa PartCraft (u stilu Fanuc, GRBL i LinuxCNC) napisana su u ovom formatu, pa vlastiti postprocesor može početi kao kopija jednog od njih.

Provjerite ispis u simulatoru vašeg stroja prije rezanja i prvo ga pokrenite u zraku iznad sirovca. Ugrađeni postprocesori pišu točno ono što su pisali prije nego što je ovaj format postojao (testovi uspoređuju njihov ispis bajt po bajt na stotinama programa), ali ništa ovdje nije dokazano na vašem stroju, a postprocesor koji promijenite je vaš da ga dokažete.

## Izradite jedan

U Manufacture, pod **Post**:

- {{ui:Uredi postprocesor…}} na ugrađenom upravljaču otvara **vašu vlastitu kopiju** tog postprocesora. Na vašem postprocesoru otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od male prazne datoteke sa svakim događajem.
- {{ui:Uvezi datoteku postprocesora…}} čita tekstualnu datoteku `.cpost` (datoteku koju dobijete iz **Spremi kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, redak koji kaže može li se čitati (i koji je redak pogrešan), te G-kod koji postprocesor piše dok tipkate. **Pregled s** bira mali uzorak programa koji pokreće svaki događaj ili vlastiti program ovog dijela. {{ui:Spremi}} sprema postprocesor u datoteku dijela (do 20 postprocesora) i odabire ga kao upravljač. Postprocesori putuju s dijelom; za korištenje u drugom dijelu spremite ga kao datoteku i uvezite ga tamo.

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

Redovi koji počinju s `//` i prazni redovi se zanemaruju. Na vrhu dolaze postavke; zatim jedan blok `on <event>` za svaki događaj, zatvoren s `end`. Događaj koji izostavite ne piše ništa.

| Postavka | Značenje |
|---|---|
| `post <id>` | Oznaka postprocesora: slova, znamenke, `-` i `_` |
| `name <text>` | Što prikazuje popis upravljača |
| `extension <ext>` | Nastavak datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … u svakom retku `emit`, ili nijedan |
| `decimal-point yes` / `no` | `10.` umjesto `10` (komentari nikad ne nose točku) |
| `canned-cycles yes` / `no` | `no`: rupe se pišu kao G0/G1 pomaci koje predstavljaju |
| `modal <group> <words>` | Riječi grupe (`modal motion G0 G1 G2 G3`) koje se pišu samo kad se promijene |

## Događaji

Izvršavaju se ovim redoslijedom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kad se alat promijeni), `spindle` (kad se brzina promijeni), `approach` (pomak do prve točke, prije prvog brzog pomaka), `coolant-on`, zatim njezini pomaci kao `rapid`, `feed` i `arc`, te svaki ciklus kao `cycle-start`, jedan `cycle-hole` po rupi i `cycle-end`; na kraju `end`.

Svaki događaj može koristiti varijable svoje vrste pomaka, pisane kao `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovac (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, točka pomaka (`x`, `y`, `z`, `f` i `moved`: true kad se os promijenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Popis **Događaji i varijable** u uređivaču pokazuje koji događaj vidi koju varijablu. Stanje koje možete čitati i postaviti: `cool`, `offset`, te `at.x`, `at.y`, `at.z`, `at.f` (posljednje zapisane vrijednosti).

## Naredbe

| Naredba | Što radi |
|---|---|
| `raw TEXT` | Redak točno kako je upisan (bez broja retka) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII znakova i zagrada |
| `emit WORD WORD …` | Redak riječi; riječi koje ispadnu prazne se izostavljaju; bez riječi, bez retka |
| `word WORD …` | Dodaje riječi retku koji se gradi; sam `emit` ga završava |
| `if EXPR` … `else` … `end` | Uvjeti: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set NAME EXPR` | Zapamti vrijednost (`set offset tool.number`) |
| `reset NAME …` | Zaboravi modalne riječi (grupu, slovo adrese poput `Z` ili `at.z`) |
| `do rapid X Y Z` | Pokreni događaj `rapid` za točku |

Riječ je upisani tekst s rupama `{variable|filter}`. Filtri su `upper`, `lower`, `pad:N` (popuna nulama), `cut:N` (prvih N znakova), `safe` (ASCII bez problema u komentaru) i `int`. Riječ koja završava s `~` je **modalna**: piše se samo kad se razlikuje od onoga što je zadnje zapisano (`G1~`, `X{x}~`). Riječ koja završava s `~!` piše se svaki put i ipak se pamti. Ime koje nije varijabla je obični tekst (`G81`, `mist`). Brojevi se zaokružuju na 0.001 mm i pišu bez završnih nula.

## Što postprocesor ne može

Odlučuje samo kako se pomaci pišu, ništa više. Ne može promijeniti putanju alata, poredati operacije, podijeliti luk, dodati os, znati hod ili kinematiku vašeg stroja niti raditi aritmetiku s koordinatama (nema `+`). Mjerenje sondom, ciklusi trajnosti alata i potprograma, izlaz za 4. i 5. os te kodovi za tokarilicu nisu izrađeni. Datoteka u stilu `.cps` iz drugog programa ne može se učitati: ovo je drugi, jednostavniji format.
