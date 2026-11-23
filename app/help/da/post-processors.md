---
title: Postprocessorer du kan redigere
summary: En post er en kort tekstfil, der omsætter værktøjsbanen til G-kode til din styring. Kopiér en af de indbyggede poster, ændr de linjer, du har brug for (linjenumre, værktøjsskift, referencekørsler, slutkode), se den G-kode, den skriver, mens du skriver, og behold den sammen med delen.
keywords: post, postprocessor, G-code, NC, GRBL, LinuxCNC, rediger post, egen post, cpost, værktøjsskift, M6, G43, fast cyklus, linjenumre, modal, hændelse, variabel
from: c78d0cae
---

Den samme værktøjsbane skal skrives forskelligt for forskellige styringer: linjenumre eller ingen, `M6` eller en pause, `G28` eller `G53`, `M30` eller `M2`. En **post** er den korte tekst, der siger hvordan. PartCraft's tre indbyggede poster (Fanuc-lignende, GRBL og LinuxCNC) er skrevet i dette format, så en egen post kan starte som en kopi af en af dem.

Kontrollér outputtet i din maskines egen simulator, før du skærer, og kør det først i luften over råemnet. De indbyggede poster skriver præcis det, de skrev, før dette format fandtes (testene sammenligner deres output byte for byte på hundredvis af programmer), men intet her er afprøvet på din maskine, og en post, du ændrer, er din egen at dokumentere.

## Lav en

Under **Post** i Fremstilling:

- {{ui:Rediger post…}} på en indbygget styring åbner **din egen kopi** af den. På en af dine egne poster åbner den den post.
- {{ui:Ny post…}} starter fra en lille tom post med alle hændelser i.
- {{ui:Importér postfil…}} læser en `.cpost`-tekstfil (filen, du får fra **Gem som fil…** i editoren).

Editoren viser teksten, en linje, der siger, om den kan læses (og hvilken linje der er forkert), og den G-kode posten skriver, mens du skriver. **Forhåndsvis med** vælger et lille eksempelprogram, der kører alle hændelser, eller delens eget program. {{ui:Gem}} gemmer posten i delens fil (op til 20 poster) og vælger den som styring. Poster følger med delen; for at bruge en i en anden del, gem den som fil og importér den der.

## Sådan ser en post ud

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

Linjer, der starter med `//`, og tomme linjer ignoreres. Øverst kommer indstillingerne; derefter en `on <hændelse>`-blok for hver hændelse, afsluttet med `end`. En hændelse, du udelader, skriver intet.

| Indstilling | Betydning |
|---|---|
| `post <id>` | Postens id: bogstaver, cifre, `-` og `_` |
| `name <text>` | Det, styringslisten viser |
| `extension <ext>` | Filendelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på hver `emit`-linje, eller ingen |
| `decimal-point yes` / `no` | `10.` i stedet for `10` (kommentarer får aldrig punktum) |
| `canned-cycles yes` / `no` | `no`: huller skrives som de G0/G1-bevægelser, de står for |
| `modal <group> <words>` | Ord i en gruppe (`modal motion G0 G1 G2 G3`), der kun skrives, når de ændrer sig |

## Hændelser

De kører i denne rækkefølge for et program: `start`; derefter for hver operation `operation`, `tool-change` (når værktøjet skiftes), `spindle` (når hastigheden ændres), `approach` (bevægelsen op til det første punkt, før den første eilgang), `coolant-on`, derefter dens bevægelser som `rapid`, `feed` og `arc`, og hver fast cyklus som `cycle-start`, én `cycle-hole` pr. hul og `cycle-end`; til sidst `end`.

Flere hændelser, til det der går ud over tre akser (en post uden hændelsen afviser et sådant program og navngiver den hændelse, den mangler):

| Hændelse | Hvornår | Dens variabler |
|---|---|---|
| `index` | Før en operation, hvis værktøjsretning afviger fra den sidste, og før den første operation på en maskine med roterende akser | `rot.a`, `rot.b`, `rot.c` (positionerne at gå til; tom for en akse maskinen ikke har), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Bevægelserne i en operation, hvis roterende akser bevæger sig, mens den skærer | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ja, når fremføringen skal være invers tid), `invf` (1/minutter) |
| `rotary-end` | Efter en sådan operation | |
| `probe-move` | En bevægelse, der stopper, når proben udløser | `x`, `y`, `z`, `f`, `probe.n` (1 til 4), `probe.axis` (x, y eller z), `probe.k` (1, 2 eller 3) |
| `probe-set` | Efter berøringerne i én probingcyklus | `probe.kind` (`"z"`, `"x"`, `"y"` eller `centre`), `probe.action` (`set` eller `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | En gevindskæringsbevægelse på en drejebænk | `x`, `z`, `thread.lead` |

Også for alle hændelser: `kin` (none, a, b, ac, bc), `rotary` og `tcp` (yes eller no, fra maskinen i Opsætning), `pivot.x`, `pivot.y`, `pivot.z`, operationens `op.tilt` og `op.turn`, og på en drejebænk `spin.mode` (css eller rpm), `spin.css`, `spin.max` og `tool.nose`. Et bogstavord, hvis værdi er tom, såsom `A{rot.a}` på en maskine uden A-akse, udelades af linjen. Sammenlign x, y og z som tekst i anførselstegn (`if probe.kind == "z"`): uden anførselstegn er de bevægelsens koordinater.

To linjer mere øverst i en post gør den til en drejebænkspost: `machine lathe` (den skriver da kun X og Z, og afviser fræsebaner, som en fræsepost afviser drejebaner) og `lathe-x diameter` eller `lathe-x radius`.

Hver hændelse kan bruge variablerne for sin egen slags bevægelse, skrevet `{navn}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), råemnet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), værktøjet (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operationen (`op.name`, `op.type`), `rpm`, punktet i en bevægelse (`x`, `y`, `z`, `f`, og `moved`: sand, når en akse har ændret sig), buer (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og huller (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Editorens liste **Hændelser og variabler** viser, hvilken hændelse der ser hvad. Tilstand du kan læse og sætte: `cool`, `offset` og `at.x`, `at.y`, `at.z`, `at.f` (de sidst skrevne værdier).

## Udsagn

| Udsagn | Hvad det gør |
|---|---|
| `raw TEXT` | En linje præcis som skrevet (uden linjenummer) |
| `comment TEXT` | `(TEXT)` med ikke-ASCII og parenteser fjernet |
| `emit WORD WORD …` | En linje af ord; ord der bliver tomme, udelades; ingen ord, ingen linje |
| `word WORD …` | Tilføj ord til den linje, der bygges; en nøgen `emit` afslutter den |
| `if EXPR` … `else` … `end` | Betingelser: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, ellers b) |
| `for tool in tools` … `end` | En gang for hvert værktøj programmet bruger |
| `set NAME EXPR` | Husk en værdi (`set offset tool.number`) |
| `reset NAME …` | Glem modale ord (en gruppe, et adressebogstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kør `rapid`-hændelsen for et punkt |

Et ord er skrevet tekst med `{variabel|filter}`-huller. Filtrene er `upper`, `lower`, `pad:N` (nulfyldning), `cut:N` (de første N tegn), `safe` (kommentarsikker ASCII) og `int`. Et ord, der slutter med `~`, er **modalt**: det skrives kun, når det afviger fra det sidst skrevne (`G1~`, `X{x}~`). Et ord, der slutter med `~!`, skrives hver gang og huskes stadig. Et navn, der ikke er en variabel, er almindelig tekst (`G81`, `mist`). Tal afrundes til 0.001 mm og skrives uden efterfølgende nuller.

## Hvad en post ikke kan

Den bestemmer kun, hvordan bevægelserne skrives, intet mere. Den kan ikke ændre en værktøjsbane, omordne operationer, dele en bue, tilføje en akse, kende din maskines kørselsområde eller kinematik, eller regne på koordinater (der er ingen `+`). De roterende positioner selv kommer fra maskinen beskrevet i Opsætning, ikke fra posten: en post kan ændre deres fortegn eller bogstaver, ikke kinematikken. Værktøjslevetid og underprogramcyklusser er ikke lavet. En `.cps`-postfil fra et andet program kan ikke indlæses: dette er et andet, enklere format.
