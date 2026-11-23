---
title: Postprosessorer som kan redigeres
summary: En post er en kort tekstfil som gjør verktøybanen om til G-kode for styringen din. Kopier en av de innebygde postene, endre linjene du trenger (linjenummer, verktøyskifte, referansebevegelser, sluttkode), se G-koden den skriver mens du skriver, og behold den sammen med delen.
keywords: post, postprosessor, G-kode, NC, GRBL, LinuxCNC, rediger post, egendefinert post, cpost, verktøyskifte, M6, G43, fast syklus, linjenummer, modal, hendelse, variabel

from: c78d0cae
---

Den samme verktøybanen må skrives ulikt for ulike styringer: med eller uten linjenummer, `M6` eller en pause, `G28` eller `G53`, `M30` eller `M2`. En **post** er den korte teksten som sier hvordan. PartCraft sine tre innebygde poster (Fanuc-lignende, GRBL og LinuxCNC) er skrevet i dette formatet, så en egen post kan starte som en kopi av en av dem.

Sjekk utdataene i maskinens egen simulator før skjæring, og kjør dem i luften over råemnet først. De innebygde postene skriver nøyaktig det de skrev før dette formatet fantes (testene sammenligner utdataene byte for byte på hundrevis av programmer), men ingenting her er bevist på din maskin, og en post du endrer, må du selv bevise.

## Lag en

I Produksjon, under **Post**:

- {{ui:Edit post…}} på en innebygd styring åpner **din egen kopi** av den. På en av dine egne poster åpnes den posten.
- {{ui:New post…}} starter fra en liten tom post med alle hendelser i seg.
- {{ui:Import post file…}} leser en `.cpost`-tekstfil (filen du får fra **Lagre som fil…** i redigereren).

Redigereren viser teksten, en linje som sier om den kan leses (og hvilken linje som er feil), og G-koden posten skriver, mens du skriver. **Forhåndsvis med** velger et lite eksempelprogram som kjører alle hendelser, eller delens eget program. {{ui:Save}} beholder posten i delens fil (opptil 20 poster) og velger den som styring. Poster følger med delen; for å bruke en i en annen del, lagre den som en fil og importer den der.

## Slik ser en post ut

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

Linjer som starter med `//`, og tomme linjer, ignoreres. Øverst kommer innstillingene; deretter én `on <hendelse>`-blokk for hver hendelse, avsluttet med `end`. En hendelse du utelater skriver ingenting.

| Innstilling | Betydning |
|---|---|
| `post <id>` | Postens id: bokstaver, siffer, `-` og `_` |
| `name <tekst>` | Det styringslisten viser |
| `extension <ext>` | Filendelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på hver `emit`-linje, eller ingen |
| `decimal-point yes` / `no` | `10.` i stedet for `10` (kommentarer har aldri punktum) |
| `canned-cycles yes` / `no` | `no`: hull skrives som G0/G1-bevegelsene de står for |
| `modal <gruppe> <ord>` | Ord i en gruppe (`modal motion G0 G1 G2 G3`) som bare skrives når de endrer seg |

## Hendelser

De kjøres i denne rekkefølgen for et program: `start`; deretter for hver operasjon `operation`, `tool-change` (når verktøyet skiftes), `spindle` (når turtallet endres), `approach` (bevegelsen opp til det første punktet, før den første eilgangen), `coolant-on`, og så dens bevegelser som `rapid`, `feed` og `arc`, og hver fast syklus som `cycle-start`, én `cycle-hole` per hull og `cycle-end`; til slutt `end`.

Flere hendelser, for det som går utover tre akser (en post uten hendelsen avviser et slikt program og sier hvilken hendelse den mangler):

| Hendelse | Når | Dens variabler |
|---|---|---|
| `index` | Før en operasjon hvis verktøyretning avviker fra den forrige, og før den første operasjonen på en maskin med roterende akser | `rot.a`, `rot.b`, `rot.c` (posisjonene å gå til; tomme for en akse maskinen ikke har), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Bevegelsene i en operasjon der de roterende aksene beveger seg mens den skjærer | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ja når tilmatingen må være invers tid), `invf` (1/minutter) |
| `rotary-end` | Etter en slik operasjon | |
| `probe-move` | En bevegelse som stopper når tasten utløses | `x`, `y`, `z`, `f`, `probe.n` (1 til 4), `probe.axis` (x, y eller z), `probe.k` (1, 2 eller 3) |
| `probe-set` | Etter berøringene i én probing-syklus | `probe.kind` (`"z"`, `"x"`, `"y"` eller `centre`), `probe.action` (`set` eller `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | En gjengebevegelse på en dreiebenk | `x`, `z`, `thread.lead` |

Også for alle hendelser: `kin` (none, a, b, ac, bc), `rotary` og `tcp` (yes eller no, fra maskinen i Oppsett), `pivot.x`, `pivot.y`, `pivot.z`, operasjonens `op.tilt` og `op.turn`, og på en dreiebenk `spin.mode` (css eller rpm), `spin.css`, `spin.max` og `tool.nose`. Et bokstavord der verdien er tom, for eksempel `A{rot.a}` på en maskin uten A-akse, utelates fra linjen. Sammenlign med x, y og z som tekst i anførselstegn (`if probe.kind == "z"`): uten anførsel er de bevegelsens koordinater.

To linjer til øverst i en post gjør den til en dreiepost: `machine lathe` (den skriver da bare X og Z, og avviser fresebaner slik en fresepost avviser dreiebaner) og `lathe-x diameter` eller `lathe-x radius`.

Hver hendelse kan bruke variablene for sin egen type bevegelse, skrevet `{navn}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), råemnet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verktøyet (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasjonen (`op.name`, `op.type`), `rpm`, punktet i en bevegelse (`x`, `y`, `z`, `f`, og `moved`: sann når en akse endret seg), buer (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og hull (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Listen **Hendelser og variabler** i redigereren viser hvilken hendelse som ser hva. Tilstand du kan lese og sette: `cool`, `offset`, og `at.x`, `at.y`, `at.z`, `at.f` (de sist skrevne verdiene).

## Setninger

| Setning | Hva den gjør |
|---|---|
| `raw TEKST` | En linje nøyaktig som skrevet (uten linjenummer) |
| `comment TEKST` | `(TEKST)` med ikke-ASCII og parenteser fjernet |
| `emit ORD ORD …` | En linje med ord; ord som blir tomme utelates; ingen ord, ingen linje |
| `word ORD …` | Legg til ord i linjen som bygges; en bar `emit` avslutter den |
| `if UTTRYKK` … `else` … `end` | Betingelser: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, ellers b) |
| `for tool in tools` … `end` | Én gang for hvert verktøy programmet bruker |
| `set NAVN UTTRYKK` | Husk en verdi (`set offset tool.number`) |
| `reset NAVN …` | Glem modale ord (en gruppe, en adressebokstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kjør `rapid`-hendelsen for et punkt |

Et ord er skrevet tekst med `{variabel|filter}`-hull. Filtrene er `upper`, `lower`, `pad:N` (fyll med nuller), `cut:N` (de første N tegnene), `safe` (kommentarsikker ASCII) og `int`. Et ord som slutter med `~` er **modalt**: det skrives bare når det er forskjellig fra det som sist ble skrevet (`G1~`, `X{x}~`). Et ord som slutter med `~!` skrives hver gang og huskes likevel. Et navn som ikke er en variabel, er vanlig tekst (`G81`, `mist`). Tall rundes til 0.001 mm og skrives uten etterfølgende nuller.

## Det en post ikke kan

Den bestemmer bare hvordan bevegelsene skrives, ikke mer. Den kan ikke endre en verktøybane, ordne operasjoner, dele en bue, legge til en akse, kjenne maskinens bevegelsesområde eller kinematikk, eller regne med koordinater (det finnes ingen `+`). De roterende posisjonene kommer fra maskinen som er beskrevet i Oppsett, ikke fra posten: en post kan endre fortegnet eller bokstavene deres, ikke kinematikken. Verktøylevetid og underprogramsykluser er ikke bygget. En `.cps`-lignende postfil fra et annet program kan ikke lastes: dette er et annet og enklere format.
