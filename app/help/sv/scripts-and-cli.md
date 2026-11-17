---
title: Skript och kommandoraden
summary: PartCraft-skriptformatet (.pcscript) som skriver en hel del som läsbar text, och verktyget partcraft för kommandoraden som bygger, ändrar, återrullar och kontrollerar delar utan skärm.
keywords: skript, pcscript, text, kommandorad, cli, terminal, batch, automatisera, kontrollera, lint, bygg, exportera, versionshantering, diff, parametriskt skript
from: c56df222
---

Noggrann modellering handlar mer om disciplin än om knappar. En del skriven som text kan läsas, granskas, jämföras rad för rad och byggas om av ett skript. PartCraft fungerar åt båda hållen: vilken del som helst kan skrivas som ett skript, och ett skript bygger delen.

## I appen

På fliken {{ui:Parametrar}} under **Skript**:

- {{ui:Spara som skript}} laddar ner den öppna delen som `<namn>.pcscript`.
- {{ui:Öppna skript}} bygger en del från en `.pcscript`-fil. Ett fel rapporteras med radnummer, och ingenting ersätts.

## Skriptformatet

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Plate width
param thick = 8
param bolt = 8.5
param margin = bolt * 1.5

sketch Plate
  on top
  point a 0, 0
  point b 120, 0
  point c 120, 60
  point d 0, 60
  line bottom a b
  line right b c
  line top c d
  line left d a
  coincident a O
  horizontal bottom
  horizontal top
  vertical left
  vertical right
  distance bottom = width
  distance left 60

extrude Base
  sketch Plate
  depth = thick

sketch HoleCentres
  on face Base end
  point h1 12, 12
  hdistance O h1 = margin
  vdistance O h1 = margin

hole Bolts
  sketch HoleCentres
  d = bolt
  through
```

Reglerna:

- En rad längst till vänster inleder en sats: `pcscript`, `part`, `param`, en funktionstyp (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` och de nyare typerna) följd av sitt namn, eller `rollback <funktion>`.
- Indragna rader är inställningarna för satsen ovanför. En inställning ensam på en rad (`through`, `reverse`, `suppressed`) betyder ja.
- En talinställning är ett tal, eller `=` och ett uttryck, som gör en ekvation: `depth = thick`.
- I en skiss: `on` anger planet (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometri är `point <namn> x, y`, `line <namn> <punkt> <punkt>`, `circle <namn> <centrum> <radie>`, `arc <namn> <centrum> <start> <slut>` (moturs) eller `spline <namn> fit|control <punkter>`; relationer är deras typ och de namn de förbinder (`O` är origo); ett mått avslutas med sitt värde eller `= uttryck`.
- Valfria inställningar för en geometri- eller relationsrad skrivs inom hakparenteser i slutet, åtskilda av `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` inleder en kommentar (i början av en rad eller efter ett mellanslag). Namn med mellanslag skrivs inom "dubbla citattecken".
- Funktions-id:n räknas från f1 i den ordning de skrivs. Kant- och ytreferenser använder dem, till exempel `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Inställningar som formatet saknar ord för skrivs som `json` och ett värde; de läses tillbaka precis som de är.

Sparat från appen innehåller skriptet alla inställningar, så det öppnas som samma del. En importerad STEP-solid skrivs in i skriptet från appen, och som en separat `.step`-fil som anges med `step-file` från kommandoraden.

## Kommandoradsverktyget

Verktyget körs på en dator med Node.js 24, från en kopia av CadCraft-källkoden: `node tools/partcraft-cli/partcraft.mjs <kommando>`. Det är ett utvecklarverktyg och använder samma moduler som appen. Delar är `.partcraft.json`-filer eller `.pcscript`-skript.

| Kommando | Vad det gör |
|---|---|
| `info <part>` | Funktioner, parametrar, återrullningsfältet, den byggda solidens volym och storlek |
| `params <part>` | Varje parameter och ekvation med sitt värde |
| `set <part> width=150 Base.depth==thick` | Framåt: ändra parametrar, länka tal (`==` eller ett uttryck), ange vanliga tal |
| `drive <part> Base.depth=12` | Bakåt: lös parametern bakom ett drivet tal (`--prefer width` väljer en) |
| `build <part> --out x.step` | Skriver `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` eller ett makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | En fil per rad i konstruktionstabellen |
| `variants <part> --out-dir d` eller `--zip f.zip` | Varje konfiguration som STEP, IFC, DWG och en förhandsvisning, en variantförteckning och ett biblioteksobjekt (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); se [Gör ett variantpaket](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript till del |
| `to-script <part> -o part.pcscript` | Del till skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Flyttar återrullningsfältet i filen |
| `check <part> [--strict]` | Disciplinkontrollen (nedan) |

`build` tar också `--set namn=värde` (endast för den här byggningen) och `--upto <funktion>`. Varje kommando tar `--json`. Avslutningskoder: 0 bra, 1 ett problem hittades, 2 kommandot skrevs fel. Ett skript skrivs aldrig om på plats: ange `-o` för att spara en ändrad kopia.

## Kontrollen

`check` rapporterar det som gör en del svår att ändra senare:

| Fynd | Räknas som |
|---|---|
| En skiss som är överdefinierad (motstridiga eller upprepade relationer) | fel |
| En funktion som inte byggs | fel |
| En parameter eller ekvation med ett fel, eller parametrar som använder varandra | fel |
| En skiss som är underdefinierad, med sina frihetsgrader | varning |
| Tal som skrivits direkt in i funktioner och mått som ingen parameter styr | varning |
| En parameter som ingen använder | varning |
| En undertryckt funktion; återrullningsfältet inte i slutet | varning |

`--strict` gör varje varning till ett fel, så ett byggskript kan vägra en del som inte är helt styrd.

:::note
`.swb`-makrot är till för det delmodelleringsprogram som de flesta verkstäder använder: körs i det programmet bygger det delen där. Det har inte körts i det programmet här (det finns inte på våra servrar), så behandla det som otestat.
:::
