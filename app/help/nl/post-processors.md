---
title: Postprocessoren die u kunt bewerken
summary: Een postprocessor is een kort tekstbestand dat het freespad omzet in G-code voor uw besturing. Kopieer een van de ingebouwde postprocessors, wijzig de regels die u nodig heeft (regelnummers, gereedschapswissel, nulbewegingen, eindcode), zie de G-code die hij schrijft terwijl u typt, en bewaar hem bij het onderdeel.
keywords: postprocessor, post processor, G-code, NC, GRBL, LinuxCNC, postprocessor bewerken, eigen postprocessor, cpost, gereedschapswissel, M6, G43, vaste cyclus, regelnummers, modaal, gebeurtenis, variabele
from: c78d0cae
---

Hetzelfde freespad moet anders geschreven worden voor verschillende besturingen: regelnummers of geen, `M6` of een pauze, `G28` of `G53`, `M30` of `M2`. Een **postprocessor** is de korte tekst die zegt hoe. De drie ingebouwde postprocessors van PartCraft (Fanuc-stijl, GRBL en LinuxCNC) zijn in dit formaat geschreven, dus een eigen postprocessor kan beginnen als kopie van een van hen.

Controleer de uitvoer in de eigen simulator van uw machine voordat u snijdt, en laat het eerst in de lucht boven het ruwdeel lopen. De ingebouwde postprocessors schrijven precies wat ze schreven voordat dit formaat bestond (de tests vergelijken hun uitvoer byte voor byte bij honderden programma's), maar niets hier is op uw machine bewezen, en een postprocessor die u wijzigt is van u om te bewijzen.

## Er een maken

In Fabricage, onder **Postprocessor**:

- {{ui:Post bewerken…}} op een ingebouwde besturing opent **uw eigen kopie** ervan. Op een van uw eigen postprocessors opent het die postprocessor.
- {{ui:Nieuwe post…}} begint met een kleine lege postprocessor met elke gebeurtenis erin.
- {{ui:Postbestand importeren…}} leest een `.cpost`-tekstbestand (het bestand dat u krijgt via **Opslaan als bestand…** in de editor).

De editor toont de tekst, een regel die zegt of hij leest (en welke regel fout is), en de G-code die de postprocessor schrijft, terwijl u typt. **Voorbeeld met** kiest een klein voorbeeldprogramma dat elke gebeurtenis uitvoert, of het eigen programma van dit onderdeel. {{ui:Opslaan}} bewaart de postprocessor in het onderdeelbestand (tot 20 postprocessors) en kiest hem als besturing. Postprocessors reizen mee met het onderdeel; om er een in een ander onderdeel te gebruiken, slaat u hem als bestand op en importeert u hem daar.

## Hoe een postprocessor eruitziet

```
post mymill
name Mijn frees (.nc)
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

Regels die met `//` beginnen en lege regels worden genegeerd. Bovenaan staan de instellingen; daarna een `on <gebeurtenis>`-blok voor elke gebeurtenis, afgesloten met `end`. Een gebeurtenis die u weglaat schrijft niets.

| Instelling | Betekenis |
|---|---|
| `post <id>` | De id van de postprocessor: letters, cijfers, `-` en `_` |
| `name <tekst>` | Wat de lijst Besturing toont |
| `extension <ext>` | De bestandsextensie: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … bij elke `emit`-regel, of geen |
| `decimal-point yes` / `no` | `10.` in plaats van `10` (opmerkingen krijgen nooit het punt) |
| `canned-cycles yes` / `no` | `no`: gaten worden geschreven als de G0/G1-bewegingen die ze voorstellen |
| `modal <groep> <woorden>` | Woorden van een groep (`modal motion G0 G1 G2 G3`) die alleen worden geschreven wanneer ze veranderen |

## Gebeurtenissen

Ze lopen voor een programma in deze volgorde: `start`; dan voor elke bewerking `operation`, `tool-change` (wanneer het gereedschap wisselt), `spindle` (wanneer het toerental verandert), `approach` (de beweging naar het eerste punt, vóór de eerste snelgang), `coolant-on`, dan de bewegingen als `rapid`, `feed` en `arc`, en elke vaste cyclus als `cycle-start`, één `cycle-hole` per gat en `cycle-end`; tot slot `end`.

Meer gebeurtenissen, voor wat verder gaat dan drie assen (een postprocessor zonder de gebeurtenis weigert zo'n programma en noemt de gebeurtenis die hij mist):

| Gebeurtenis | Wanneer | Zijn variabelen |
|---|---|---|
| `index` | Vóór een bewerking waarvan de gereedschapsrichting afwijkt van de vorige, en vóór de eerste bewerking op een machine met roteerassen | `rot.a`, `rot.b`, `rot.c` (de posities waarheen moet worden gegaan; leeg voor een as die de machine niet heeft), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | De bewegingen van een bewerking waarvan de roteerassen bewegen tijdens het snijden | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (yes wanneer de aanzet inverse tijd moet zijn), `invf` (1/minuten) |
| `rotary-end` | Na zo'n bewerking | |
| `probe-move` | Een beweging die stopt wanneer de tastkop aanslaat | `x`, `y`, `z`, `f`, `probe.n` (1 tot 4), `probe.axis` (x, y of z), `probe.k` (1, 2 of 3) |
| `probe-set` | Na de tastingen van één tastcyclus | `probe.kind` (`"z"`, `"x"`, `"y"` of `centre`), `probe.action` (`set` of `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | Een schroefdraadbeweging op een draaibank | `x`, `z`, `thread.lead` |

Ook voor elke gebeurtenis: `kin` (none, a, b, ac, bc), `rotary` en `tcp` (yes of no, van de machine in Opstelling), `pivot.x`, `pivot.y`, `pivot.z`, de `op.tilt` en `op.turn` van de bewerking, en op een draaibank `spin.mode` (css of rpm), `spin.css`, `spin.max` en `tool.nose`. Een letterwoord waarvan de waarde leeg is, zoals `A{rot.a}` op een machine zonder A-as, wordt uit de regel weggelaten. Vergelijk x, y en z als tekst tussen aanhalingstekens (`if probe.kind == "z"`): zonder die tekens zijn het de coördinaten van de beweging.

Twee regels extra bovenaan maken een postprocessor een draaibank-postprocessor: `machine lathe` (dan schrijft hij alleen X en Z, en weigert hij freespaden zoals een freespostprocessor draaipaden weigert) en `lathe-x diameter` of `lathe-x radius`.

Elke gebeurtenis kan de variabelen van zijn eigen soort beweging gebruiken, geschreven als `{naam}`: het programma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), het ruwdeel (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), het gereedschap (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), de bewerking (`op.name`, `op.type`), `rpm`, het punt van een beweging (`x`, `y`, `z`, `f`, en `moved`: waar wanneer een as is veranderd), bogen (`arc.g` 2 of 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) en gaten (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). De lijst **Gebeurtenissen en variabelen** in de editor toont welke gebeurtenis welke ziet. Toestand die u kunt lezen en instellen: `cool`, `offset`, en `at.x`, `at.y`, `at.z`, `at.f` (de laatst geschreven waarden).

## Statements

| Statement | Wat het doet |
|---|---|
| `raw TEXT` | Een regel precies zoals getypt (zonder regelnummer) |
| `comment TEXT` | `(TEXT)` met niet-ASCII-tekens en haakjes verwijderd |
| `emit WORD WORD …` | Een regel woorden; woorden die leeg blijven worden weggelaten; geen woorden, geen regel |
| `word WORD …` | Woorden toevoegen aan de regel die wordt opgebouwd; een kale `emit` beëindigt hem |
| `if EXPR` … `else` … `end` | Voorwaarden: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, anders b) |
| `for tool in tools` … `end` | Eén keer voor elk gereedschap dat het programma gebruikt |
| `set NAME EXPR` | Een waarde onthouden (`set offset tool.number`) |
| `reset NAME …` | Modale woorden vergeten (een groep, een adresletter zoals `Z`, of `at.z`) |
| `do rapid X Y Z` | De gebeurtenis `rapid` uitvoeren voor een punt |

Een woord is getypte tekst met `{variabele|filter}`-gaten. De filters zijn `upper`, `lower`, `pad:N` (opvullen met nullen), `cut:N` (eerste N tekens), `safe` (opmerkingsveilig ASCII) en `int`. Een woord dat op `~` eindigt is **modaal**: het wordt alleen geschreven wanneer het verschilt van wat er het laatst is geschreven (`G1~`, `X{x}~`). Een woord dat op `~!` eindigt wordt altijd geschreven en toch onthouden. Een naam die geen variabele is, is gewone tekst (`G81`, `nevel`). Getallen worden afgerond op 0.001 mm en zonder nullen aan het eind geschreven.

## Wat een postprocessor niet kan

Hij bepaalt alleen hoe de bewegingen geschreven worden, meer niet. Hij kan een freespad niet wijzigen, bewerkingen niet herordenen, een boog niet splitsen, geen as toevoegen, de reisbereiken of kinematica van uw machine niet kennen, en geen rekenwerk op coördinaten doen (er is geen `+`). De roterende posities zelf komen van de machine die in Opstelling is beschreven, niet van de postprocessor: een postprocessor kan hun teken of letters wijzigen, niet de kinematica. Gereedschapslevensduur- en subprogrammacycli zijn niet gebouwd. Een `.cps`-achtig postprocessorbestand van een ander programma kan niet worden geladen: dit is een ander, eenvoudiger formaat.
