---
title: Postprosessors wat jy kan wysig
summary: 'n Postprosessor is 'n kort tekslêer wat die gereedskapspad na G-code vir jou beheerder omskakel. Kopieer een van die ingeboude postprosessors, verander die reëls wat jy nodig het (reëlnommers, gereedskapswissel, tuisbewegings, eindkode), sien die G-code wat dit skryf soos jy tik, en hou dit by die onderdeel.
keywords: postprosessor, postprosessor, G-code, NC, GRBL, LinuxCNC, wysig postprosessor, persoonlike postprosessor, cpost, gereedskapswissel, M6, G43, vaste siklus, reëlnommers, modaal, gebeurtenis, veranderlike
from: 36ab8a38
---

Dieselfde gereedskapspad moet anders geskryf word vir verskillende beheerders: reëlnommers of geen, `M6` of 'n pouse, `G28` of `G53`, `M30` of `M2`. 'n **Postprosessor** is die kort teks wat sê hoe. PartCraft se drie ingeboude postprosessors (Fanuc-styl, GRBL en LinuxCNC) is in hierdie formaat geskryf, so 'n eie postprosessor kan as 'n kopie van een van hulle begin.

Kontroleer die uitset in jou masjien se eie simulator voor jy sny, en laat dit eers in die lug bo die blank loop. Die ingeboude postprosessors skryf presies wat hulle geskryf het voordat hierdie formaat bestaan het (die toetse vergelyk hul uitset greep vir greep oor honderde programme), maar niks hier is op jou masjien bewys nie, en 'n postprosessor wat jy verander, is joune om te bewys.

## Maak een

Onder **Postprosessor** in Vervaardiging:

- {{ui:Wysig postprosessor…}} op 'n ingeboude beheerder open **jou eie kopie** daarvan. Op een van jou eie postprosessors open dit daardie postprosessor.
- {{ui:Nuwe postprosessor…}} begin met 'n klein leë postprosessor met elke gebeurtenis daarin.
- {{ui:Voer postprosessorlêer in…}} lees 'n `.cpost` tekslêer (die lêer wat jy kry van **Stoor as lêer…** in die redigeerder).

Die redigeerder wys die teks, 'n reël wat sê of dit lees (en watter reël verkeerd is), en die G-code wat die postprosessor skryf, soos jy tik. **Voorskou met** kies 'n klein voorbeeldprogram wat elke gebeurtenis uitvoer, of hierdie onderdeel se eie program. {{ui:Stoor}} hou die postprosessor in die onderdeel se lêer (tot 20 postprosessors) en kies dit as die beheerder. Postprosessors reis saam met die onderdeel; om een in 'n ander onderdeel te gebruik, stoor dit as 'n lêer en voer dit daar in.

## Hoe 'n postprosessor lyk

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

Reëls wat met `//` begin en leë reëls word geïgnoreer. Bo-aan kom die instellings; daarna een `on <event>`-blok vir elke gebeurtenis, gesluit met `end`. 'n Gebeurtenis wat jy weglaat, skryf niks nie.

| Instelling | Betekenis |
|---|---|
| `post <id>` | Die postprosessor se id: letters, syfers, `-` en `_` |
| `name <text>` | Wat die Beheerderlys wys |
| `extension <ext>` | Die lêeruitbreiding: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … op elke `emit`-reël, of geen |
| `decimal-point yes` / `no` | `10.` in plaas van `10` (kommentaar dra nooit die punt nie) |
| `canned-cycles yes` / `no` | `no`: gate word geskryf as die G0/G1-bewegings wat hulle verteenwoordig |
| `modal <group> <words>` | Woorde van 'n groep (`modal motion G0 G1 G2 G3`) wat slegs geskryf word wanneer hulle verander |

## Gebeurtenisse

Hulle loop in hierdie volgorde vir 'n program: `start`; dan vir elke bewerking `operation`, `tool-change` (wanneer die gereedskap verander), `spindle` (wanneer die spoed verander), `approach` (die beweging op na die eerste punt, voor die eerste snelgang), `coolant-on`, dan sy bewegings as `rapid`, `feed` en `arc`, en elke vaste siklus as `cycle-start`, een `cycle-hole` per gat en `cycle-end`; laaste `end`.

Elke gebeurtenis kan die veranderlikes van sy eie soort beweging gebruik, geskryf as `{name}`: die program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), die blank (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), die gereedskap (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), die bewerking (`op.name`, `op.type`), `rpm`, die punt van 'n beweging (`x`, `y`, `z`, `f`, en `moved`: waar wanneer 'n as verander het), boë (`arc.g` 2 of 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) en gate (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Die redigeerder se lys **Gebeurtenisse en veranderlikes** wys watter gebeurtenis watter een sien. Toestand wat jy kan lees en stel: `cool`, `offset`, en `at.x`, `at.y`, `at.z`, `at.f` (die laaste waardes wat geskryf is).

## Stellings

| Stelling | Wat dit doen |
|---|---|
| `raw TEXT` | 'n Reël presies soos getik (sonder reëlnommer) |
| `comment TEXT` | `(TEXT)` met nie-ASCII en hakies verwyder |
| `emit WORD WORD …` | 'n Reël woorde; woorde wat leeg uitkom, word weggelaat; geen woorde, geen reël nie |
| `word WORD …` | Voeg woorde by die reël wat gebou word; 'n kaal `emit` beëindig dit |
| `if EXPR` … `else` … `end` | Voorwaardes: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, anders b) |
| `for tool in tools` … `end` | Een keer vir elke gereedskap wat die program gebruik |
| `set NAME EXPR` | Onthou 'n waarde (`set offset tool.number`) |
| `reset NAME …` | Vergeet modale woorde ('n groep, 'n adreslettel soos `Z`, of `at.z`) |
| `do rapid X Y Z` | Voer die `rapid`-gebeurtenis uit vir 'n punt |

'n Woord is getikte teks met `{veranderlike|filter}`-gate. Die filters is `upper`, `lower`, `pad:N` (nulvul), `cut:N` (eerste N karakters), `safe` (kommentaarveilige ASCII) en `int`. 'n Woord wat met `~` eindig, is **modaal**: dit word slegs geskryf wanneer dit verskil van wat laas geskryf is (`G1~`, `X{x}~`). 'n Woord wat met `~!` eindig, word elke keer geskryf en onthou steeds. 'n Naam wat nie 'n veranderlike is nie, is gewone teks (`G81`, `mist`). Getalle word afgerond tot 0.001 mm en sonder slepende nulle geskryf.

## Wat 'n postprosessor nie kan doen nie

Dit besluit net hoe die bewegings geskryf word, niks meer nie. Dit kan nie 'n gereedskapspad verander nie, bewerkings rangskik, 'n boog verdeel, 'n as byvoeg, of jou masjien se reisafstand of kinematika ken nie, of rekenkunde op koördinate doen (daar is geen `+` nie). Tastmeting, gereedskapslewe- en subprogramsiklusse, uitset vir die 4de- en 5de-as en draaibankkode is nie gebou nie. 'n `.cps`-styl postlêer van 'n ander program kan nie gelaai word nie: dit is 'n ander, eenvoudiger formaat.
