---
title: Postprosessors wat jy kan wysig
summary: 'n Post is 'n kort tekslêer wat die gereedskapbaan omskakel na G-kode vir jou beheerder. Kopieer een van die ingeboude posts, verander die reëls wat jy nodig het (reëlnommers, gereedskapwissel, tuisbewegings, eindkode), sien die G-kode wat dit skryf terwyl jy tik, en hou dit by die onderdeel.
keywords: post, postprosessor, postprosessor, G-kode, NC, GRBL, LinuxCNC, wysig post, eie post, cpost, gereedskapwissel, M6, G43, vaste siklus, reëlnommers, modaal, gebeurtenis, veranderlike
from: c78d0cae
---

Dieselfde gereedskapbaan moet verskillend geskryf word vir verskillende beheerders: reëlnommers of geen, `M6` of 'n pouse, `G28` of `G53`, `M30` of `M2`. 'n **Post** is die kort teks wat sê hoe. PartCraft se drie ingeboude posts (Fanuc-styl, GRBL en LinuxCNC) is in hierdie formaat geskryf, so 'n post van jou eie kan as 'n kopie van een daarvan begin.

Kontroleer die uitset in jou masjien se eie simulator voordat jy sny, en laat dit eers in die lug bo die voorraad loop. Die ingeboude posts skryf presies wat hulle geskryf het voordat hierdie formaat bestaan het (die toetse vergelyk hul uitset greep vir greep op honderde programme), maar niks hier is op jou masjien bewys nie, en 'n post wat jy verander, is joune om te bewys.

## Maak een

In Vervaardiging, onder **Pos**:

- {{ui:Wysig postprosessor…}} op 'n ingeboude beheerder open **jou eie kopie** daarvan. Op een van jou eie posts open dit daardie post.
- {{ui:Nuwe postprosessor…}} begin van 'n klein leë post met elke gebeurtenis daarin.
- {{ui:Voer postprosessorlêer in…}} lees 'n `.cpost`-tekslêer (die lêer wat jy kry uit **Stoor as 'n lêer…** in die redigeerder).

Die redigeerder wys die teks, 'n reël wat sê of dit lees (en watter reël verkeerd is), en die G-kode wat die post skryf, terwyl jy tik. **Voorskou met** kies 'n klein voorbeeldprogram wat elke gebeurtenis uitvoer, of hierdie onderdeel se eie program. {{ui:Stoor}} hou die post in die onderdeel se lêer (tot 20 posts) en kies dit as die beheerder. Posts reis saam met die onderdeel; om een in 'n ander onderdeel te gebruik, stoor dit as 'n lêer en voer dit daar in.

## Hoe 'n post lyk

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

Reëls wat met `//` begin en leë reëls word geïgnoreer. Bo-aan kom die instellings; dan 'n `on <gebeurtenis>`-blok vir elke gebeurtenis, gesluit met `end`. 'n Gebeurtenis wat jy weglaat, skryf niks nie.

| Instelling | Betekenis |
|---|---|
| `post <id>` | Die post se id: letters, syfers, `-` en `_` |
| `name <teks>` | Wat die Beheerder-lys wys |
| `extension <ext>` | Die lêeruitbreiding: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … op elke `emit`-reël, of geen |
| `decimal-point yes` / `no` | `10.` in plaas van `10` (kommentaar dra nooit die punt nie) |
| `canned-cycles yes` / `no` | `no`: gate word geskryf as die G0/G1-bewegings wat hulle voorstel |
| `modal <groep> <woorde>` | Woorde van 'n groep (`modal motion G0 G1 G2 G3`) wat net geskryf word wanneer hulle verander |

## Gebeurtenisse

Hulle loop in hierdie volgorde vir 'n program: `start`; dan vir elke bewerking `operation`, `tool-change` (wanneer die gereedskap verander), `spindle` (wanneer die spoed verander), `approach` (die beweging op na die eerste punt, voor die eerste snelgang), `coolant-on`, dan sy bewegings as `rapid`, `feed` en `arc`, en elke vaste siklus as `cycle-start`, een `cycle-hole` per gat en `cycle-end`; laastens `end`.

Meer gebeurtenisse, vir wat verder gaan as drie asse ('n post sonder die gebeurtenis weier so 'n program en noem die gebeurtenis wat dit mis):

| Gebeurtenis | Wanneer | Die veranderlikes daarvan |
|---|---|---|
| `index` | Voor 'n bewerking waarvan die gereedskaprigting van die laaste verskil, en voor die eerste bewerking op 'n masjien met roterende asse | `rot.a`, `rot.b`, `rot.c` (die posisies waarheen gegaan moet word; leeg vir 'n as wat die masjien nie het nie), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Die bewegings van 'n bewerking waarvan die roterende asse beweeg terwyl dit sny | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ja wanneer die voer omgekeerde tyd moet wees), `invf` (1/minute) |
| `rotary-end` | Ná so 'n bewerking | |
| `probe-move` | 'n Beweging wat stop wanneer die toets uitslaan | `x`, `y`, `z`, `f`, `probe.n` (1 tot 4), `probe.axis` (x, y of z), `probe.k` (1, 2 of 3) |
| `probe-set` | Ná die raak van een toetssiklus | `probe.kind` (`"z"`, `"x"`, `"y"` of `centre`), `probe.action` (`set` of `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | 'n Draadbeweging op 'n draaibank | `x`, `z`, `thread.lead` |

Ook vir elke gebeurtenis: `kin` (none, a, b, ac, bc), `rotary` en `tcp` (yes of no, uit die masjien in Opstel), `pivot.x`, `pivot.y`, `pivot.z`, die bewerking se `op.tilt` en `op.turn`, en op 'n draaibank `spin.mode` (css of rpm), `spin.css`, `spin.max` en `tool.nose`. 'n Lettersoord waarvan die waarde leeg is, soos `A{rot.a}` op 'n masjien sonder 'n A-as, word uit die reël gelaat. Vergelyk met x, y en z as teks tussen aanhalingstekens (`if probe.kind == "z"`): kaal, is dit die beweging se koördinate.

Twee verdere reëls bo-aan 'n post maak dit 'n draaibankpost: `machine lathe` (dit skryf dan slegs X en Z, en weier freespaaie soos 'n freespost draaipaaie weier) en `lathe-x diameter` of `lathe-x radius`.

Elke gebeurtenis kan die veranderlikes van sy eie soort beweging gebruik, geskryf as `{naam}`: die program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), die voorraad (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), die gereedskap (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), die bewerking (`op.name`, `op.type`), `rpm`, die punt van 'n beweging (`x`, `y`, `z`, `f`, en `moved`: waar wanneer 'n as verander het), boë (`arc.g` 2 of 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) en gate (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Die redigeerder se lys **Gebeurtenisse en veranderlikes** wys watter gebeurtenis wat sien. Toestand wat jy kan lees en stel: `cool`, `offset`, en `at.x`, `at.y`, `at.z`, `at.f` (die laaste waardes wat geskryf is).

## Stellings

| Stelling | Wat dit doen |
|---|---|
| `raw TEKS` | 'n Reël presies soos getik (sonder reëlnommer) |
| `comment TEKS` | `(TEKS)` met nie-ASCII en hakies uitgehaal |
| `emit WOORD WOORD …` | 'n Reël woorde; woorde wat leeg uitkom, word uitgelaat; geen woorde, geen reël nie |
| `word WOORD …` | Voeg woorde by die reël wat gebou word; 'n kaal `emit` beëindig dit |
| `if UITDRUKKING` … `else` … `end` | Voorwaardes: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, anders b) |
| `for tool in tools` … `end` | Een keer vir elke gereedskap wat die program gebruik |
| `set NAAM UITDRUKKING` | Onthou 'n waarde (`set offset tool.number`) |
| `reset NAAM …` | Vergeet modale woorde ('n groep, 'n adresletter soos `Z`, of `at.z`) |
| `do rapid X Y Z` | Voer die `rapid`-gebeurtenis vir 'n punt uit |

'n Woord is getikte teks met `{veranderlike|filter}`-gate. Die filters is `upper`, `lower`, `pad:N` (nulvul), `cut:N` (eerste N karakters), `safe` (kommentaarveilige ASCII) en `int`. 'n Woord wat met `~` eindig, is **modaal**: dit word net geskryf wanneer dit verskil van wat laas geskryf is (`G1~`, `X{x}~`). 'n Woord wat met `~!` eindig, word elke keer geskryf en onthou steeds. 'n Naam wat nie 'n veranderlike is nie, is gewone teks (`G81`, `mist`). Getalle word na 0,001 mm afgerond en sonder naloopnulle geskryf.

## Wat 'n post nie kan doen nie

Dit bepaal net hoe die bewegings geskryf word, niks meer nie. Dit kan nie 'n gereedskapbaan verander nie, bewerkings herrangskik, 'n boog verdeel, 'n as byvoeg, jou masjien se verplasing of kinematika ken nie, of rekenkunde op koördinate doen nie (daar is geen `+` nie). Die roterende posisies self kom uit die masjien wat in Opstel beskryf word, nie uit die post nie: 'n post kan hul teken of hul letters verander, nie die kinematika nie. Gereedskapleeftyd- en subprogramsiklusse is nie gebou nie. 'n `.cps`-styl postlêer van 'n ander program kan nie gelaai word nie: dit is 'n ander, eenvoudiger formaat.
