---
title: Post-processorer, du kan redigere
summary: En post er en kort tekstfil, der omsætter værktøjsbanen til G-kode til din styring. Kopiér en af de indbyggede poster, ændr de linjer, du har brug for (linjenumre, værktøjsskift, hjemkørsler, slutkode), se G-koden den skriver, mens du skriver, og gem den sammen med emnet.
keywords: post, post-processor, postprocessor, G-kode, NC, GRBL, LinuxCNC, rediger post, egen post, cpost, værktøjsskift, M6, G43, faste cyklusser, linjenumre, modal, hændelse, variabel
from: 36ab8a38
---

Den samme værktøjsbane skal skrives forskelligt til forskellige styringer: linjenumre eller ingen, `M6` eller en pause, `G28` eller `G53`, `M30` eller `M2`. En **post** er den korte tekst, der siger, hvordan. De tre indbyggede poster i PartCraft (Fanuc-style, GRBL og LinuxCNC) er skrevet i dette format, så en egen post kan starte som en kopi af en af dem.

Kontrollér outputtet i din maskines egen simulator, før du skærer, og kør det først i luften over materialet. De indbyggede poster skriver præcis det, de skrev, før dette format fandtes (testene sammenligner deres output byte for byte på hundredvis af programmer), men intet her er bevist på din maskine, og en post, du ændrer, skal du selv bevise.

## Lav en

Under **Post** i Manufacture:

- {{ui:Rediger post…}} på en indbygget styring åbner **din egen kopi** af den. På en af dine egne poster åbner den netop den post.
- {{ui:Ny post…}} starter fra en lille tom post med alle hændelser i.
- {{ui:Importér postfil…}} læser en `.cpost`-tekstfil (filen du får fra **Gem som fil…** i editoren).

Editoren viser teksten, en linje, der siger, om den kan læses (og hvilken linje der er forkert), og G-koden posten skriver, mens du skriver. **Forhåndsvis med** vælger et lille eksempelprogram, der kører alle hændelser, eller dette emnes eget program. {{ui:Gem}} gemmer posten i emnets fil (op til 20 poster) og vælger den som styring. Poster følger emnet; for at bruge en i et andet emne, gem den som fil og importér den der.

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

Linjer, der starter med `//`, og tomme linjer ignoreres. Øverst kommer indstillingerne; derefter én `on <hændelse>`-blok for hver hændelse, lukket med `end`. En hændelse, du udelader, skriver intet.

| Indstilling | Betydning |
|---|---|
| `post <id>` | Postens id: bogstaver, cifre, `-` og `_` |
| `name <text>` | Det, Styring-listen viser |
| `extension <ext>` | Filendelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på hver `emit`-linje, eller ingen |
| `decimal-point yes` / `no` | `10.` i stedet for `10` (kommentarer får aldrig punktum) |
| `canned-cycles yes` / `no` | `no`: huller skrives som de G0/G1-bevægelser, de står for |
| `modal <group> <words>` | Ord i en gruppe (`modal motion G0 G1 G2 G3`), der kun skrives, når de ændrer sig |

## Hændelser

De kører i denne rækkefølge for et program: `start`; derefter for hver operation `operation`, `tool-change` (når værktøjet skiftes), `spindle` (når hastigheden ændres), `approach` (bevægelsen op til første punkt, før den første hurtige bevægelse), `coolant-on`, derefter dens bevægelser som `rapid`, `feed` og `arc`, og hver fast cyklus som `cycle-start`, én `cycle-hole` pr. hul og `cycle-end`; til sidst `end`.

Hver hændelse kan bruge variablerne for sin egen type bevægelse, skrevet `{name}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), emnet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), værktøjet (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operationen (`op.name`, `op.type`), `rpm`, bevægelsespunktet (`x`, `y`, `z`, `f`, og `moved`: sand når en akse er ændret), buer (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) og huller (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Editorens liste **Hændelser og variabler** viser, hvilken hændelse der ser hvad. Tilstand, du kan læse og sætte: `cool`, `offset` og `at.x`, `at.y`, `at.z`, `at.f` (de sidst skrevne værdier).

## Statements

| Statement | Hvad den gør |
|---|---|
| `raw TEXT` | En linje præcis som skrevet (uden linjenummer) |
| `comment TEXT` | `(TEXT)` med ikke-ASCII og parenteser fjernet |
| `emit WORD WORD …` | En linje af ord; ord, der bliver tomme, udelades; ingen ord, ingen linje |
| `word WORD …` | Tilføj ord til linjen under opbygning; et tomt `emit` afslutter den |
| `if EXPR` … `else` … `end` | Betingelser: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, ellers b) |
| `for tool in tools` … `end` | Én gang for hvert værktøj, programmet bruger |
| `set NAME EXPR` | Husk en værdi (`set offset tool.number`) |
| `reset NAME …` | Glem modale ord (en gruppe, et adressebogstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kør hændelsen `rapid` for et punkt |

Et ord er skrevet tekst med `{variabel|filter}`-huller. Filtrene er `upper`, `lower`, `pad:N` (nulfyld), `cut:N` (første N tegn), `safe` (kommentarsikker ASCII) og `int`. Et ord, der slutter med `~`, er **modalt**: det skrives kun, når det afviger fra det sidst skrevne (`G1~`, `X{x}~`). Et ord, der slutter med `~!`, skrives hver gang og huskes stadig. Et navn, der ikke er en variabel, er ren tekst (`G81`, `mist`). Tal afrundes til 0.001 mm og skrives uden efterfølgende nuller.

## Hvad en post ikke kan

Den bestemmer kun, hvordan bevægelserne skrives, intet mere. Den kan ikke ændre en værktøjsbane, ordne operationer, dele en bue, tilføje en akse, kende din maskines kørselsområde eller kinematik, eller regne på koordinater (der er ingen `+`). Probing, værktøjslevetid- og underprogramcyklusser, output for 4. og 5. akse og drejebænkkoder er ikke bygget. En `.cps`-lignende postfil fra et andet program kan ikke indlæses: dette er et andet, enklere format.
