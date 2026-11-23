---
title: Redigerbara postprocessorer
summary: En postprocessor är en kort textfil som gör om verktygsbanan till G-kod för din styrning. Kopiera en av de inbyggda, ändra raderna du behöver (radnummer, verktygsbyte, referensrörelser, slutkod), se G-koden den skriver medan du skriver och behåll den tillsammans med delen.
keywords: postprocessor, G-kod, NC, GRBL, LinuxCNC, redigera postprocessor, anpassad postprocessor, cpost, verktygsbyte, M6, G43, fast cykel, radnummer, modal, händelse, variabel
from: c78d0cae
---

Samma verktygsbana måste skrivas olika för olika styrningar: radnummer eller inga, `M6` eller en paus, `G28` eller `G53`, `M30` eller `M2`. En **postprocessor** är den korta texten som säger hur. De tre inbyggda postprocessorerna i PartCraft (Fanuc-liknande, GRBL och LinuxCNC) är skrivna i det här formatet, så en egen postprocessor kan börja som en kopia av en av dem.

Kontrollera utdata i din maskins egna simulator före skärning, och kör den i luften över materialet först. De inbyggda postprocessorerna skriver exakt det de skrev innan det här formatet fanns (testerna jämför deras utdata byte för byte på hundratals program), men ingenting här har bevisats på din maskin, och en postprocessor du ändrar är din att bevisa.

## Skapa en

I Tillverkning, under **Postprocessor**:

- {{ui:Edit post…}} på en inbyggd styrning öppnar **din egen kopia** av den. På en av dina egna postprocessorer öppnas just den.
- {{ui:New post…}} startar från en liten tom postprocessor med varje händelse i sig.
- {{ui:Import post file…}} läser en `.cpost`-textfil (filen du får från **Spara som fil…** i redigeraren).

Redigeraren visar texten, en rad som säger om den läses (och vilken rad som är fel), och G-koden som postprocessorn skriver, medan du skriver. **Förhandsgranska med** väljer ett litet exempelprogram som kör varje händelse, eller delens egna program. {{ui:Save}} behåller postprocessorn i delens fil (upp till 20 postprocessorer) och väljer den som styrning. Postprocessorer följer med delen; för att använda en i en annan del, spara den som en fil och importera den där.

## Hur en postprocessor ser ut

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

Rader som börjar med `//` och tomma rader ignoreras. Överst kommer inställningarna; sedan ett `on <event>`-block för varje händelse, avslutat med `end`. En händelse du utelämnar skriver ingenting.

| Inställning | Betydelse |
|---|---|
| `post <id>` | Postprocessorns id: bokstäver, siffror, `-` och `_` |
| `name <text>` | Det som Styrningslistan visar |
| `extension <ext>` | Filändelsen: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … på varje `emit`-rad, eller inga |
| `decimal-point yes` / `no` | `10.` i stället för `10` (kommentarer får aldrig punkten) |
| `canned-cycles yes` / `no` | `no`: hål skrivs som de G0/G1-rörelser de står för |
| `modal <group> <words>` | Ord i en grupp (`modal motion G0 G1 G2 G3`) som bara skrivs när de ändras |

## Händelser

De körs i denna ordning för ett program: `start`; sedan för varje operation `operation`, `tool-change` (när verktyget byts), `spindle` (när varvtalet ändras), `approach` (rörelsen upp till första punkten, före första snabbgången), `coolant-on`, sedan dess rörelser som `rapid`, `feed` och `arc`, och varje fast cykel som `cycle-start`, en `cycle-hole` per hål och `cycle-end`; sist `end`.

Fler händelser, för det som går utöver tre axlar (en postprocessor utan en händelse vägrar ett sådant program och nämner den händelse den saknar):

| Händelse | När | Dess variabler |
|---|---|---|
| `index` | Före en operation vars verktygsriktning skiljer sig från den sista, och före första operationen på en maskin med roterande axlar | `rot.a`, `rot.b`, `rot.c` (positionerna att gå till; tomt för en axel maskinen inte har), `first.x`, `first.y`, `first.z` |
| `rapid-rotary`, `feed-rotary` | Rörelserna i en operation vars roterande axlar rör sig medan den skär | `x`, `y`, `z`, `rot.a`, `rot.b`, `rot.c`, `f`, `rot.moved`, `inverse` (ja när matningen måste vara inverstid), `invf` (1/minuter) |
| `rotary-end` | Efter en sådan operation | |
| `probe-move` | En rörelse som stannar när sonden utlöses | `x`, `y`, `z`, `f`, `probe.n` (1 till 4), `probe.axis` (x, y eller z), `probe.k` (1, 2 eller 3) |
| `probe-set` | Efter tangeringarna i en probningscykel | `probe.kind` (`"z"`, `"x"`, `"y"` eller `centre`), `probe.action` (`set` eller `measure`), `probe.expect`, `probe.cx`, `probe.cy` |
| `thread` | En gängrörelse på en svarv | `x`, `z`, `thread.lead` |

För varje händelse gäller också: `kin` (none, a, b, ac, bc), `rotary` och `tcp` (yes eller no, från maskinen i Uppställningen), `pivot.x`, `pivot.y`, `pivot.z`, operationens `op.tilt` och `op.turn`, och på en svarv `spin.mode` (css eller rpm), `spin.css`, `spin.max` och `tool.nose`. Ett bokstavsord vars värde är tomt, till exempel `A{rot.a}` på en maskin utan A-axel, utelämnas från raden. Jämför x, y och z som text inom citattecken (`if probe.kind == "z"`): utan citattecken är de rörelsens koordinater.

Två rader till överst i en postprocessor gör den till en svarvpostprocessor: `machine lathe` (den skriver då bara X och Z och vägrar fräsbanor på samma sätt som en fräspostprocessor vägrar svarvbanor) och `lathe-x diameter` eller `lathe-x radius`.

Varje händelse kan använda variablerna för sin egen typ av rörelse, skrivna `{name}`: programmet (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), råmaterialet (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), verktyget (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), operationen (`op.name`, `op.type`), `rpm`, rörelsens punkt (`x`, `y`, `z`, `f`, och `moved`: sant när en axel ändrats), bågar (`arc.g` 2 eller 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) och hål (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). Redigerarens lista **Händelser och variabler** visar vilken händelse som ser vad. Tillstånd du kan läsa och sätta: `cool`, `offset`, och `at.x`, `at.y`, `at.z`, `at.f` (de senast skrivna värdena).

## Satser

| Sats | Vad den gör |
|---|---|
| `raw TEXT` | En rad exakt som den skrivs (inget radnummer) |
| `comment TEXT` | `(TEXT)` med icke-ASCII och parenteser borttagna |
| `emit WORD WORD …` | En rad med ord; ord som blir tomma utelämnas; inga ord, ingen rad |
| `word WORD …` | Lägg till ord på raden som byggs; en tom `emit` avslutar den |
| `if EXPR` … `else` … `end` | Villkor: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, annars b) |
| `for tool in tools` … `end` | En gång för varje verktyg programmet använder |
| `set NAME EXPR` | Kom ihåg ett värde (`set offset tool.number`) |
| `reset NAME …` | Glöm modala ord (en grupp, en adressbokstav som `Z`, eller `at.z`) |
| `do rapid X Y Z` | Kör händelsen `rapid` för en punkt |

Ett ord är skriven text med `{variable|filter}`-hål. Filtren är `upper`, `lower`, `pad:N` (nollfyllning), `cut:N` (de första N tecknen), `safe` (kommentarssäker ASCII) och `int`. Ett ord som slutar med `~` är **modalt**: det skrivs bara när det skiljer sig från det som skrevs senast (`G1~`, `X{x}~`). Ett ord som slutar med `~!` skrivs varje gång och kommer ihåg. Ett namn som inte är en variabel är vanlig text (`G81`, `mist`). Tal avrundas till 0.001 mm och skrivs utan efterföljande nollor.

## Vad en postprocessor inte kan göra

Den avgör bara hur rörelserna skrivs, inget mer. Den kan inte ändra en verktygsbana, ordna om operationer, dela en båge, lägga till en axel, känna till din maskins förflyttningar eller kinematik, eller räkna aritmetik på koordinater (det finns inget `+`). De roterande positionerna kommer från maskinen som beskrivs i Uppställningen, inte från postprocessorn: en postprocessor kan ändra deras tecken eller bokstäver, men inte kinematiken. Verktygslivslängds- och underprogramcykler är inte byggda. En postfil i `.cps`-stil från ett annat program kan inte läsas in: detta är ett annat, enklare format.
