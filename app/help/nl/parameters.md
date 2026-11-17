---
title: Een onderdeel aansturen met parameters
summary: Geef de maten die ertoe doen een naam (breedte, dikte, boutmaat), koppel elk featuregetal of schetsmaat eraan met =, en wijzig het hele onderdeel vanuit één tabel.
keywords: parameters, waar gebruikt, gebruikt door, globale variabelen, variabelen, vergelijkingen, ontwerpintentie, aansturende maten, koppeling, expressie, formule, een maat benoemen, gekoppelde waarden
from: 58c646ea
---

Een parameter is een genoemd getal, zoals `width = 120` of `margin = bolt * 1.5`. Koppel een diepte, een gatdiameter, een patroontelling of een schetsmaat eraan, en wanneer u de parameter wijzigt, veranderen ze allemaal in één stap. Zo houdt u de ontwerpintentie in het onderdeel in plaats van in uw hoofd.

## Parameters toevoegen

1. Klik in het rechterpaneel op het tabblad {{ui:Parameters}}.
2. Typ onder **Variabelen** een naam in het vak "naam", bijvoorbeeld `width`.
3. Typ de waarde in het volgende vak, bijvoorbeeld `120`, en druk op {{key:Enter}} (of klik op {{ui:Toevoegen}}).

Een waarde kan een getal zijn of een expressie van andere parameters: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. De kolom **Waarde** toont wat het uitkomt. Een naam begint met een letter of `_` en bevat alleen letters, cijfers en `_`; namen van functies en eenheden (`sin`, `mm`, `pi`) worden geweigerd, en ook een lus zoals `a = b` met `b = a`.

## Een getal aan een parameter koppelen

1. Klik een feature in de geschiedenis, bijvoorbeeld "Extrude1". De instellingen ervan verschijnen op het tabblad {{ui:Eigenschappen}}.
2. Typ in een getalvak, zoals **Diepte (mm)**, `=` en een expressie: `=thick` of `=width / 4`.
3. Druk op {{key:Enter}}.

Het vak toont nu het resultaat, en er verschijnt een knop **ƒ** naast het label. Wijs erop om de vergelijking te zien. Schetsmaten werken op dezelfde manier, zowel in de lijst **Schetsmaten** van een feature als in het maatvak van een open schets (dubbelklik op een maat, typ `=width`, druk op {{key:Enter}}).

Getallen die u kunt koppelen: extrusiediepte, omwentelingshoek, gatdiameter, diepte en verzonken maten, patroontelling, afstand en hoek van een patroon, afrondingsstraal, afschuiningsafstand, wanddikte van een uitholling, elke schetsmaat, en de maten van de nieuwere features (tweede diepte, taps, verzinking, afstand van een referentievlak, trekhoek en andere).

## Een parameter wijzigen

Typ op het tabblad {{ui:Parameters}} een nieuwe waarde of expressie in de kolom **Expressie** en druk op {{key:Enter}}. Alles wat eraan is gekoppeld, verandert en het onderdeel wordt opnieuw opgebouwd, in één stap: {{key:Mod+Z}} maakt het ongedaan.

Om een getal van de andere kant te wijzigen, zie [Vergelijkingen in beide richtingen](topic:equations-two-way).

## Zien waar een parameter wordt gebruikt

Onder elke parameter op het tabblad {{ui:Parameters}} staat een regel die zegt wat hem gebruikt:

- de getallen die hij aanstuurt, zoals **Extrude1 depth** of **Sketch1 D2 (distance)**. Klik er een aan om het feature te selecteren en de eigenschappen ervan te tonen;
- de getallen die hij **via** andere parameters aanstuurt, zoals **Hole1 diameter (through h, d)** wanneer `d = h + 2` en `h = w / 2`;
- de **parameters** wier expressies hem gebruiken, de **configuraties** die hem instellen, en de **scripts** die hem lezen (zie [Scripts schrijven en uitvoeren](topic:craftscript)).

"Nog niet gebruikt." betekent dat niets hem gebruikt: u kunt hem zonder vragen verwijderen.

## Ontkoppelen, hernoemen, verwijderen

- **Een getal ontkoppelen:** klik op de knop **ƒ**, of op {{ui:Ontkoppelen}} in de lijst **Vergelijkingen**. Het behoudt zijn huidige waarde en geen parameter wijzigt het nog.
- **Een parameter hernoemen:** typ een nieuwe naam in het vak **Naam**. Elke expressie die hem gebruikt, wordt herschreven.
- **Een parameter verwijderen:** klik op × in zijn rij. Als iets hem gebruikt, vraagt PartCraft of de huidige waarde eerst in die expressies moet worden geschreven.
- **Een feature verwijderen** laat de vergelijkingen van zijn getallen vallen; de statusbalk zegt welke.

:::note
Parameters worden opgeslagen in het bestand `.partcraft.json` (als bestandsversie 3). Een onderdeel zonder parameters wordt precies zoals voorheen opgeslagen.
:::

## Expressies

| Schrijf | Betekent |
|---|---|
| `120`, `12.5`, `1e3` | een getal (millimeter, of graden voor een hoek) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | een lengte in andere eenheden, omgezet naar millimeter |
| `30deg`, `0.5rad` | een hoek, omgezet naar graden |
| `+ - * / %` en `^` | rekenkunde; `^` is een macht, `-2^2` is −4 |
| `sin cos tan asin acos atan atan2` | goniometrie in graden |
| `sqrt pow exp ln log abs sign` | andere functies |
| `ceil floor int round(x, digits) min max` | afronden en grenzen |
| `if(test, a, b)` met `< <= > >= == !=` | een keuze: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Namen zijn hoofdlettergevoelig: `Width` en `width` zijn twee parameters.

Zie ook [Configuraties en ontwerptabellen](topic:design-tables) en [Scripts en de opdrachtregel](topic:scripts-and-cli).
