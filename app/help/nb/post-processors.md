---
title: Postprosessorer du kan redigere
summary: En post er en kort tekstfil som gjør verktøybanen om til G-kode for styringen din. Kopier en av de innebygde postene, endre linjene du trenger (linjenummer, verktøyskifte, referansebevegelser, sluttkode), se G-koden den skriver mens du skriver, og behold den sammen med emnet.
keywords: post, postprosessor, G-kode, NC, GRBL, LinuxCNC, rediger post, egendefinert post, cpost, verktøyskifte, M6, G43, fast syklus, linjenummer, modal, hendelse, variabel
from: 36ab8a38
---

Den samme verktøybanen må skrives ulikt for ulike styringer: linjenumre eller ingen, `M6` eller en pause, `G28` eller `G53`, `M30` eller `M2`. En **post** er den korte teksten som sier hvordan. PartCraft sine tre innebygde poster (Fanuc-stil, GRBL og LinuxCNC) er skrevet i dette formatet, så en egen post kan starte som en kopi av en av dem.

Sjekk utdataene i maskinens egen simulator før du skjærer, og kjør den i luften over råemnet først. De innebygde postene skriver nøyaktig det de skrev før dette formatet fantes (testene sammenligner utdataene byte for byte på hundrevis av programmer), men ingenting her er bevist på din maskin, og en post du endrer er din å bevise.

## Lag en

I Produksjon, under **Post**:

- {{ui:Rediger post…}} på en innebygd styring åpner **din egen kopi** av den. På en av dine egne poster åpner den den posten.
- {{ui:Ny post…}} starter fra en liten tom post med alle hendelser i seg.
- {{ui:Importer postfil…}} leser en `.cpost`-tekstfil (filen du får fra **Lagre som fil…** i editoren).

Editoren viser teksten, en linje som sier om den kan leses (og hvilken linje som er feil), og G-koden posten skriver mens du skriver. **Forhåndsvis med** velger et lite eksempelprogram som kjører alle hendelser, eller dette emnets eget program. {{ui:Lagre}} beholder posten i emnets fil (opptil 20 poster) og velger den som styring. Poster følger emnet; for å bruke en i et annet emne, lagre den som fil og importer den der.

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

Linjer som begynner med `//`, og tomme linjer, ignoreres. Øverst kommer innstillingene; deretter én `on <event>`-blokk for hver hendelse, avsluttet med `end`. En hendelse du utelater skriver ingenting.

| Innstilling | Betydning |
|---|---|
| `post <id>` | Postens id: bokstaver, siffer, `-` og `_` |
| `name <text>` | Det Styringslisten viser |
| `extension <ext>` | Filendelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på hver `emit`-linje, eller ingen |
| `decimal-point yes` / `no` | `10.` i stedet for `10` (kommentarer har aldri punktum) |
| `canned-cycles yes` / `no` | `no`: hull skrives som G0/G1-bevegelsene de står for |
| `modal <group> <words>` | Ord i en gruppe (`modal motion G0 G1 G2 G3`) som bare skrives når de endrer seg |

## Hendelser

Hendelsene kjører i denne rekkefølgen for et program: `start`; deretter for hver operasjon `operation`, `tool-change` (når verktøyet skiftes), `spindle` (når hastigheten endres), `approach` (bevegelsen opp til første punkt, før den første `rapid`), `coolant-on`, så operasjonens bevegelser som `rapid`, `feed` og `arc`, og hver fast syklus som `cycle-start`, én `cycle-hole` per hull og `cycle-end`; til slutt `end`.

Hver hendelse kan bruke variablene for sin egen type bevegelse, skrevet `{name}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), råemnet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verktøyet (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operasjonen (`op.name`, `op.type`), `rpm`, punktet i en bevegelse (`x`, `y`, `z`, `f`, og `moved`: sann når en akse endret seg), buer (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og hull (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Editorens liste **Hendelser og variabler** viser hvilken hendelse som ser hvilke variabler. Tilstand du kan lese og sette: `cool`, `offset`, og `at.x`, `at.y`, `at.z`, `at.f` (de sist skrevne verdiene).

## Setninger

| Setning | Hva den gjør |
|---|---|
| `raw TEXT` | En linje nøyaktig som skrevet (uten linjenummer) |
| `comment TEXT` | `(TEXT)` med ikke-ASCII og parenteser fjernet |
| `emit WORD WORD …` | En linje med ord; ord som blir tomme utelates; ingen ord, ingen linje |
| `word WORD …` | Legg til ord på linjen som bygges; en tom `emit` avslutter den |
| `if EXPR` … `else` … `end` | Betingelser: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, ellers b) |
| `for tool in tools` … `end` | Én gang for hvert verktøy programmet bruker |
| `set NAME EXPR` | Husk en verdi (`set offset tool.number`) |
| `reset NAME …` | Glem modale ord (en gruppe, en adressebokstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kjør hendelsen `rapid` for et punkt |

Et ord er vanlig tekst med `{variable|filter}`-hull. Filtrene er `upper`, `lower`, `pad:N` (nullfylling), `cut:N` (de første N tegnene), `safe` (kommentarsikker ASCII) og `int`. Et ord som slutter med `~` er **modal**: det skrives bare når det er forskjellig fra det sist skrevne (`G1~`, `X{x}~`). Et ord som slutter med `~!` skrives hver gang, og huskes likevel. Et navn som ikke er en variabel, er vanlig tekst (`G81`, `mist`). Tall rundes til 0.001 mm og skrives uten etterfølgende nuller.

## Hva en post ikke kan gjøre

Den bestemmer bare hvordan bevegelsene skrives, ikke mer. Den kan ikke endre en verktøybane, ordne operasjoner, dele en bue, legge til en akse, kjenne maskinens kjøreområde eller kinematikk, eller regne på koordinater (det finnes ingen `+`). Probing, verktøylevetid og underprogramsykluser, utdata for 4. og 5. akse og dreiebenkkoder er ikke bygget. En `.cps`-lignende postfil fra et annet program kan ikke lastes: dette er et annet, enklere format.
