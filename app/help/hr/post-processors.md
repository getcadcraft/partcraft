---
title: Postprocesori koje možete uređivati
summary: Postprocesor je kratka tekstualna datoteka koja putanju alata pretvara u G-kod za vaš upravljač. Kopirajte jedan od ugrađenih, promijenite retke koji vam trebaju (brojevi redaka, izmjena alata, pomaci na referentnu točku, završni kod), pogledajte G-kod koji zapisuje dok tipkate i čuvajte ga uz dio.
keywords: postprocesor, post procesor, G-kod, NC, GRBL, LinuxCNC, uredi postprocesor, prilagođeni postprocesor, cpost, izmjena alata, M6, G43, gotov ciklus, brojevi redaka, modalno, događaj, varijabla
from: c78d0cae
---

Isti putanja alata mora se zapisati drukčije za različite upravljače: brojevi redaka ili ih nema, `M6` ili pauza, `G28` ili `G53`, `M30` ili `M2`. **Postprocesor** je kratki tekst koji kaže kako. Tri ugrađena PartCraftova postprocesora (u stilu Fanuc, GRBL i LinuxCNC) napisana su u ovom formatu, pa vlastiti postprocesor može započeti kao kopija jednog od njih.

Provjerite izlaz u simulatoru vašeg stroja prije rezanja i prvo ga pokrenite u zraku iznad sirovca. Ugrađeni postprocesori zapisuju točno ono što su zapisivali prije postojanja ovog formata (testovi uspoređuju njihov izlaz bajt po bajt na stotinama programa), ali ništa ovdje nije dokazano na vašem stroju, a postprocesor koji promijenite vaš je za dokazati.

## Napravite jedan

U Proizvodnji, pod **Postprocesor**:

- {{ui:Uredi postprocesor…}} na ugrađenom upravljaču otvara **vašu vlastitu kopiju** njega. Na jednom od vaših postprocesora otvara taj postprocesor.
- {{ui:Novi postprocesor…}} počinje od malog praznog postprocesora sa svakim događajem u njemu.
- {{ui:Uvezi datoteku postprocesora…}} čita tekstualnu datoteku `.cpost` (datoteku koju dobijete s **Spremi kao datoteku…** u uređivaču).

Uređivač prikazuje tekst, redak koji kaže može li se čitati (i koji je redak pogrešan) te G-kod koji postprocesor zapisuje dok tipkate. **Pregled s** bira mali uzorak programa koji pokreće svaki događaj ili program ovog dijela. {{ui:Spremi}} čuva postprocesor u datoteci dijela (do 20 postprocesora) i odabire ga kao upravljač. Postprocesori putuju s dijelom; za korištenje u drugom dijelu spremite ga kao datoteku i uvezite tamo.

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

Retci koji počinju s `//` i prazni retci se zanemaruju. Na vrhu su postavke; zatim jedan blok `on <event>` za svaki događaj, zatvoren s `end`. Događaj koji izostavite ne zapisuje ništa.

| Postavka | Značenje |
|---|---|
| `post <id>` | Id postprocesora: slova, znamenke, `-` i `_` |
| `name <text>` | Što prikazuje popis Upravljača |
| `extension <ext>` | Nastavak datoteke: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … na svakom retku `emit`, ili nijedan |
| `decimal-point yes` / `no` | `10.` umjesto `10` (komentari nikad ne nose točku) |
| `canned-cycles yes` / `no` | `no`: rupe se zapisuju kao G0/G1 pomaci koje predstavljaju |
| `modal <group> <words>` | Riječi grupe (`modal motion G0 G1 G2 G3`) koje se zapisuju samo kad se promijene |

## Događaji

Izvršavaju se ovim redom za program: `start`; zatim za svaku operaciju `operation`, `tool-change` (kad se alat promijeni), `spindle` (kad se brzina promijeni), `approach` (pomak do prve točke, prije prvog brzog hoda), `coolant-on`, zatim njezini pomaci kao `rapid`, `feed` i `arc`, a svaki gotov ciklus kao `cycle-start`, jedan `cycle-hole` po rupi i `cycle-end`; na kraju `end`.

Dodatni događaji, za ono što ide preko tri osi (postprocesor bez njih odbija takav program i imenuje događaj koji mu nedostaje):

| Događaj | Kada | Njegove varijable |
|---|---|---|
| `index` | Prije operacije čiji se smjer alata razlikuje od prethodnog i prije prve operacije na stroju s rotacijskim osima | `rot.a`, `rot.b`, `rot.c` (položaji na koje ide; prazno za os koju stroj nema), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Pomaci operacije čije se rotacijske osi pomiču dok reže | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (da kad posmak mora biti inverzno vrijeme), `invf` (1/minuta) |
| `rotary-end` | Nakon takve operacije | |
| `probe-move` | Pomak koji se zaustavi kad sonda okine | `x`, `y`, `z`, `f`, `probe.n` (1 do 4), `probe.axis` (x, y ili z), `probe.k` (1, 2 ili 3) |
| `probe-set` | Nakon dodira jednog ciklusa sondiranja | `probe.kind` (`"z"`, `"x"`, `"y"` ili `centre`), `probe.action` (`set` ili `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Pomak narezivanja na tokarilici | `x`, `z`, `thread.lead` |

Za svaki događaj vrijedi i: `kin` (none, a, b, ac, bc), `rotary` i `tcp` (yes ili no, iz stroja u Postavljanju), `pivot.x`, `pivot.y`, `pivot.z`, `op.tilt` i `op.turn` operacije, a na tokarilici `spin.mode` (css ili rpm), `spin.css`, `spin.max` i `tool.nose`. Riječ slova čija je vrijednost prazna, poput `A{rot.a}` na stroju bez osi A, izostavlja se iz retka. Usporedite x, y i z kao tekst u navodnicima (`if probe.kind == "z"`): goli, oni su koordinate pomaka.

Dva retka na vrhu postprocesora čine ga postprocesorom za tokarilicu: `machine lathe` (tada zapisuje samo X i Z, a putanje glodanja odbija kao što postprocesor za glodanje odbija putanje tokarenja) i `lathe-x diameter` ili `lathe-x radius`.

Svaki događaj može koristiti varijable svoje vrste pomaka, pisane kao `{name}`: program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), sirovac (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), alat (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operacija (`op.name`, `op.type`), `rpm`, točka pomaka (`x`, `y`, `z`, `f` i `moved`: true kad se os promijenila), lukovi (`arc.g` 2 ili 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) i rupe (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Popis **Događaji i varijable** u uređivaču pokazuje koji događaj vidi što. Stanje koje možete čitati i postaviti: `cool`, `offset`, te `at.x`, `at.y`, `at.z`, `at.f` (zadnje zapisane vrijednosti).

## Naredbe

| Naredba | Što radi |
|---|---|
| `raw TEXT` | Redak upisan točno onako kako je (bez broja retka) |
| `comment TEXT` | `(TEXT)` bez ne-ASCII znakova i zagrada |
| `emit WORD WORD …` | Redak riječi; riječi koje ispadnu prazne se izostavljaju; bez riječi, bez retka |
| `word WORD …` | Dodaje riječi retku koji se gradi; goli `emit` ga završava |
| `if EXPR` … `else` … `end` | Uvjeti: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, inače b) |
| `for tool in tools` … `end` | Jednom za svaki alat koji program koristi |
| `set NAME EXPR` | Pamti vrijednost (`set offset tool.number`) |
| `reset NAME …` | Zaboravlja modalne riječi (grupu, slovo adrese poput `Z`, ili `at.z`) |
| `do rapid X Y Z` | Pokreće događaj `rapid` za točku |

Riječ je upisani tekst s rupama `{variable|filter}`. Filtri su `upper`, `lower`, `pad:N` (nulama popunjeno), `cut:N` (prvih N znakova), `safe` (ASCII sigurno za komentar) i `int`. Riječ koja završava s `~` je **modalna**: zapisuje se samo kad se razlikuje od onoga što je zadnje zapisano (`G1~`, `X{x}~`). Riječ koja završava s `~!` zapisuje se svaki put i pamti se. Ime koje nije varijabla je običan tekst (`G81`, `mist`). Brojevi se zaokružuju na 0.001 mm i zapisuju bez završnih nula.

## Što postprocesor ne može

On odlučuje samo kako se pomaci zapisuju, ništa više. Ne može promijeniti putanju alata, redoslijed operacija, podijeliti luk, dodati os, znati hod ili kinematiku vašeg stroja ni računati s koordinatama (nema `+`). Rotacijske pozicije dolaze iz stroja opisanog u Postavljanju, a ne iz postprocesora: postprocesor može promijeniti njihov predznak ili slova, ali ne kinematiku. Ciklusi zamjene alata i potprograma nisu izrađeni. Datoteka postprocesora u stilu `.cps` iz drugog programa ne može se učitati: ovo je drugi, jednostavniji format.
