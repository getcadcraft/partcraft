---
title: Postprocessorer som du kan redigera
summary: En postprocessor är en kort textfil som omvandlar verktygsbanan till G-code för din styrning. Kopiera en av de inbyggda, ändra de rader du behöver (radnummer, verktygsbyte, hemförflyttningar, slutkod), se G-koden den skriver medan du skriver, och behåll den tillsammans med delen.
keywords: postprocessor, post, G-code, NC, GRBL, LinuxCNC, redigera postprocessor, egen postprocessor, cpost, verktygsbyte, M6, G43, fast cykel, radnummer, modal, händelse, variabel
from: 36ab8a38
---

Samma verktygsbana måste skrivas på olika sätt för olika styrningar: med eller utan radnummer, `M6` eller en paus, `G28` eller `G53`, `M30` eller `M2`. En **postprocessor** är den korta text som anger hur. PartCrafts tre inbyggda postprocessorer (Fanuc-lik, GRBL och LinuxCNC) är skrivna i det här formatet, så en egen postprocessor kan börja som en kopia av en av dem.

Kontrollera utdata i maskinens egna simulator innan du skär, och kör den i luften ovanför materialet först. De inbyggda postprocessorerna skriver exakt det de skrev innan det här formatet fanns (testerna jämför deras utdata byte för byte över hundratals program), men inget här har bevisats på just din maskin, och en postprocessor du ändrar är din egen att bevisa.

## Skapa en

Under **Postprocessor** i Tillverkning:

- {{ui:Redigera postprocessor…}} på en inbyggd styrning öppnar **din egen kopia** av den. På en av dina egna postprocessorer öppnar den den postprocessorn.
- {{ui:Ny postprocessor…}} startar från en liten tom postprocessor med alla händelser.
- {{ui:Importera postprocessorfil…}} läser en `.cpost`-textfil (filen du får från **Spara som fil…** i redigeraren).

Redigeraren visar texten, en rad som anger om den går att läsa (och vilken rad som är fel), och G-koden som postprocessorn skriver medan du skriver. **Förhandsgranska med** väljer ett litet exempelprogram som kör alla händelser, eller delens eget program. {{ui:Spara}} sparar postprocessorn i delens fil (upp till 20 postprocessorer) och väljer den som styrning. Postprocessorer följer med delen; för att använda en i en annan del, spara den som fil och importera den där.

## Så här ser en postprocessor ut

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

Rader som börjar med `//` och tomma rader ignoreras. Överst kommer inställningarna; sedan ett `on <event>`-block för varje händelse, avslutat med `end`. En händelse som du utelämnar skriver ingenting.

| Inställning | Betydelse |
|---|---|
| `post <id>` | Postprocessorns id: bokstäver, siffror, `-` och `_` |
| `name <text>` | Det som visas i styrningslistan |
| `extension <ext>` | Filändelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på varje `emit`-rad, eller inga |
| `decimal-point yes` / `no` | `10.` i stället för `10` (kommentarer innehåller aldrig punkten) |
| `canned-cycles yes` / `no` | `no`: hål skrivs som de G0/G1-förflyttningar de står för |
| `modal <group> <words>` | Ord i en grupp (`modal motion G0 G1 G2 G3`) som bara skrivs när de ändras |

## Händelser

De körs i den här ordningen för ett program: `start`; sedan för varje operation `operation`, `tool-change` (när verktyget byts), `spindle` (när varvtalet ändras), `approach` (förflyttningen till första punkten, före första snabbförflyttningen), `coolant-on`, därefter förflyttningarna som `rapid`, `feed` och `arc`, och varje fast cykel som `cycle-start`, en `cycle-hole` per hål och `cycle-end`; sist `end`.

Varje händelse kan använda variablerna för sin egen typ av förflyttning, skrivna `{name}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), materialet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verktyget (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operationen (`op.name`, `op.type`), `rpm`, förflyttningens punkt (`x`, `y`, `z`, `f` och `moved`: sant när en axel har ändrats), bågar (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) och hål (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Listan **Händelser och variabler** i redigeraren visar vilken händelse som ser vad. Tillstånd du kan läsa och sätta: `cool`, `offset` och `at.x`, `at.y`, `at.z`, `at.f` (de senast skrivna värdena).

## Satser

| Sats | Vad den gör |
|---|---|
| `raw TEXT` | En rad exakt som den skrivs (inget radnummer) |
| `comment TEXT` | `(TEXT)` med icke-ASCII-tecken och parenteser borttagna |
| `emit WORD WORD …` | En rad med ord; ord som blir tomma utelämnas; inga ord, ingen rad |
| `word WORD …` | Lägger till ord på raden som byggs; en bar `emit` avslutar den |
| `if EXPR` … `else` … `end` | Villkor: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, annars b) |
| `for tool in tools` … `end` | En gång för varje verktyg som programmet använder |
| `set NAME EXPR` | Kom ihåg ett värde (`set offset tool.number`) |
| `reset NAME …` | Glömmer modala ord (en grupp, en adressbokstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kör händelsen `rapid` för en punkt |

Ett ord är inskriven text med hål `{variable|filter}`. Filtren är `upper`, `lower`, `pad:N` (nollfyllning), `cut:N` (de första N tecknen), `safe` (ASCII som tål kommentarer) och `int`. Ett ord som slutar på `~` är **modalt**: det skrivs bara när det skiljer sig från det senast skrivna (`G1~`, `X{x}~`). Ett ord som slutar på `~!` skrivs varje gång men kommer ihåg ändå. Ett namn som inte är en variabel är vanlig text (`G81`, `mist`). Tal avrundas till 0.001 mm och skrivs utan avslutande nollor.

## Vad en postprocessor inte kan göra

Den avgör bara hur förflyttningarna skrivs, inget mer. Den kan inte ändra en verktygsbana, ordna om operationer, dela upp en båge, lägga till en axel, veta din maskins rörelseomfång eller kinematik, eller räkna på koordinater (det finns inget `+`). Mätning, cykler för verktygslivslängd och underprogram, utdata för 4:e och 5:e axeln samt svarvkoder är inte byggda. En `.cps`-liknande postfil från ett annat program kan inte läsas in: detta är ett annat, enklare format.
