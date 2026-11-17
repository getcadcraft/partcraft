---
title: Posten die u kunt bewerken
summary: Een post is een kort tekstbestand dat het gereedschapspad omzet in G-code voor uw besturing. Kopieer een van de ingebouwde posten, wijzig de regels die u nodig hebt (regelnummers, gereedschapswissel, startverplaatsingen, eindcode), zie de G-code die hij schrijft terwijl u typt, en bewaar hem bij het onderdeel.
keywords: post, postprocessor, G-code, NC, GRBL, LinuxCNC, post bewerken, eigen post, cpost, gereedschapswissel, M6, G43, vaste cyclus, regelnummers, modaal, gebeurtenis, variabele
from: 36ab8a38
---

Hetzelfde gereedschapspad moet anders worden geschreven voor verschillende besturingen: met of zonder regelnummers, `M6` of een pauze, `G28` of `G53`, `M30` of `M2`. Een **post** is de korte tekst die zegt hoe. De drie ingebouwde posten van PartCraft (Fanuc-stijl, GRBL en LinuxCNC) zijn in dit formaat geschreven, dus een eigen post kan beginnen als kopie van een van hen.

Controleer de uitvoer in de simulator van uw eigen machine voordat u snijdt, en laat hem eerst in de lucht boven het materiaal draaien. De ingebouwde posten schrijven precies wat ze schreven voordat dit formaat bestond (de tests vergelijken hun uitvoer byte voor byte over honderden programma's), maar niets hier is op uw machine bewezen, en een post die u wijzigt moet u zelf bewijzen.

## Een post maken

In Manufacture, onder **Post**:

- {{ui:Post bewerken…}} op een ingebouwde besturing opent **uw eigen kopie** ervan. Op een van uw eigen posten opent hij die post.
- {{ui:Nieuwe post…}} begint met een kleine lege post met elke gebeurtenis erin.
- {{ui:Postbestand importeren…}} leest een `.cpost`-tekstbestand (het bestand dat u krijgt via **Opslaan als bestand…** in de editor).

De editor toont de tekst, een regel die aangeeft of hij leesbaar is (en welke regel fout is), en de G-code die de post schrijft terwijl u typt. **Voorbeeld met** kiest een klein voorbeeldprogramma dat elke gebeurtenis doorloopt, of het eigen programma van dit onderdeel. {{ui:Opslaan}} bewaart de post in het bestand van het onderdeel (tot 20 posten) en kiest hem als besturing. Posten reizen mee met het onderdeel; wilt u er een in een ander onderdeel gebruiken, sla hem dan op als bestand en importeer hem daar.

## Hoe een post eruitziet

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

Regels die beginnen met `//` en lege regels worden genegeerd. Bovenaan staan de instellingen; daarna een `on <event>`-blok voor elke gebeurtenis, afgesloten met `end`. Een gebeurtenis die u weglaat, schrijft niets.

| Instelling | Betekenis |
|---|---|
| `post <id>` | De id van de post: letters, cijfers, `-` en `_` |
| `name <text>` | Wat de lijst Control toont |
| `extension <ext>` | De bestandsextensie: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … bij elke `emit`-regel, of geen |
| `decimal-point yes` / `no` | `10.` in plaats van `10` (opmerkingen krijgen nooit het punt) |
| `canned-cycles yes` / `no` | `no`: gaten worden geschreven als de G0/G1-verplaatsingen die ze voorstellen |
| `modal <group> <words>` | Woorden van een groep (`modal motion G0 G1 G2 G3`) die alleen worden geschreven als ze veranderen |

## Gebeurtenissen

Ze lopen in deze volgorde voor een programma: `start`; daarna voor elke bewerking `operation`, `tool-change` (wanneer het gereedschap wisselt), `spindle` (wanneer de snelheid verandert), `approach` (de verplaatsing naar het eerste punt, vóór de eerste snelle beweging), `coolant-on`, dan de bewegingen als `rapid`, `feed` en `arc`, en elke vaste cyclus als `cycle-start`, één `cycle-hole` per gat en `cycle-end`; tot slot `end`.

Elke gebeurtenis kan de variabelen van zijn eigen soort beweging gebruiken, geschreven als `{name}`: het programma (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), de voorraad (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), het gereedschap (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), de bewerking (`op.name`, `op.type`), `rpm`, het punt van een beweging (`x`, `y`, `z`, `f`, en `moved`: waar als een as is veranderd), bogen (`arc.g` 2 of 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) en gaten (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). De lijst **Gebeurtenissen en variabelen** in de editor toont welke gebeurtenis welke ziet. Status die u kunt lezen en instellen: `cool`, `offset`, en `at.x`, `at.y`, `at.z`, `at.f` (de laatst geschreven waarden).

## Instructies

| Instructie | Wat het doet |
|---|---|
| `raw TEXT` | Een regel precies zoals getypt (zonder regelnummer) |
| `comment TEXT` | `(TEXT)` met niet-ASCII-tekens en haakjes eruit gehaald |
| `emit WORD WORD …` | Een regel met woorden; woorden die leeg uitkomen worden weggelaten; geen woorden, geen regel |
| `word WORD …` | Voegt woorden toe aan de regel die wordt opgebouwd; een kale `emit` sluit hem af |
| `if EXPR` … `else` … `end` | Voorwaarden: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, anders b) |
| `for tool in tools` … `end` | Eén keer voor elk gereedschap dat het programma gebruikt |
| `set NAME EXPR` | Onthoudt een waarde (`set offset tool.number`) |
| `reset NAME …` | Vergeet modale woorden (een groep, een adresletter zoals `Z`, of `at.z`) |
| `do rapid X Y Z` | Voert de gebeurtenis `rapid` uit voor een punt |

Een woord is getypte tekst met `{variable|filter}`-gaten. De filters zijn `upper`, `lower`, `pad:N` (opvullen met nullen), `cut:N` (eerste N tekens), `safe` (opmerkingveilige ASCII) en `int`. Een woord dat eindigt op `~` is **modaal**: het wordt alleen geschreven als het verschilt van wat er het laatst is geschreven (`G1~`, `X{x}~`). Een woord dat eindigt op `~!` wordt elke keer geschreven en onthouden. Een naam die geen variabele is, is gewone tekst (`G81`, `mist`). Getallen worden afgerond op 0.001 mm en zonder volgnullen geschreven.

## Wat een post niet kan

Hij bepaalt alleen hoe de bewegingen worden geschreven, niets meer. Hij kan geen gereedschapspad wijzigen, bewerkingen ordenen, een boog splitsen, een as toevoegen, de verplaatsingsruimte of kinematica van uw machine kennen, of rekenen met coördinaten (er is geen `+`). Tasten, cycli voor gereedschapsstandtijd en subprogramma's, uitvoer voor de 4e- en 5e-as en draaibankcodes zijn nog niet beschikbaar. Een `.cps`-achtig postbestand van een ander programma kan niet worden geladen: dit is een ander, eenvoudiger formaat.
