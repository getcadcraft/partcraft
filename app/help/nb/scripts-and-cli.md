---
title: Skript og kommandolinjen
summary: PartCraft-skriptformatet (.pcscript) som skriver en hel del som lesbar tekst, og kommandolinjeverktøyet partcraft som bygger, endrer, ruller tilbake og kontrollerer deler uten skjermen.
keywords: skript, pcscript, tekst, kommandolinje, cli, terminal, batch, automatiser, kontroll, lint, bygg, eksporter, versjonskontroll, diff, parametrisk skript
from: c56df222
---

Nøyaktig modellering handler mer om disiplin enn om knapper. En del skrevet som tekst kan leses, gjennomgås, sammenlignes linje for linje og bygges på nytt av et skript. PartCraft går begge veier: enhver del kan skrives som et skript, og et skript bygger delen.

## I appen

På fanen {{ui:Parametere}}, under **Skript**:

- {{ui:Lagre som skript}} laster ned den åpne delen som `<navn>.pcscript`.
- {{ui:Åpne skript}} bygger en del fra en `.pcscript`-fil. En feil rapporteres med linjenummer, og ingenting erstattes.

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

Reglene:

- En linje helt til venstre starter en setning: `pcscript`, `part`, `param`, en funksjonstype (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` og de nyere typene) etterfulgt av navnet, eller `rollback <feature>`.
- Innrykkede linjer er innstillingene til setningen over. En innstilling alene (`through`, `reverse`, `suppressed`) betyr ja.
- En tallinnstilling er et tall, eller `=` og et uttrykk, som gir en ligning: `depth = thick`.
- I en skisse: `on` angir planet (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometri er `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (mot klokken) eller `spline <name> fit|control <points>`; relasjoner er typen og navnene de forbinder (`O` er origo); et mål slutter med verdien sin eller `= uttrykk`.
- Valgfrie innstillinger for en geometri- eller relasjonslinje går i hakeparenteser til slutt, adskilt med `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` starter en kommentar (på starten av en linje eller etter et mellomrom). Navn med mellomrom går i "doble anførselstegn".
- Funksjons-ID-er teller fra f1 i den rekkefølgen de skrives. Kant- og flatereferanser bruker dem, for eksempel `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Innstillinger som formatet ikke har ord for, skrives som `json` og en verdi; de leses tilbake uendret.

Lagret fra appen inkluderer skriptet alle innstillinger, så det åpnes som samme del. Et importert STEP-legeme skrives inn i skriptet fra appen, og som en egen `.step`-fil navngitt med `step-file` fra kommandolinjen.

## Kommandolinjeverktøyet

Verktøyet kjører på en datamaskin med Node.js 24, fra en kopi av CadCraft-kildekoden: `node tools/partcraft-cli/partcraft.mjs <kommando>`. Det er et utviklerverktøy og bruker de samme modulene som appen. Deler er `.partcraft.json`-filer eller `.pcscript`-skript.

| Kommando | Hva den gjør |
|---|---|
| `info <part>` | Funksjoner, parametere, tilbakerullingslinjen, og det bygde legemets volum og størrelse |
| `params <part>` | Hver parameter og ligning med verdien sin |
| `set <part> width=150 Base.depth==thick` | Fremover: endre parametere, koble tall (`==` eller et uttrykk), sett vanlige tall |
| `drive <part> Base.depth=12` | Bakover: løs parameteren bak et drevet tall (`--prefer width` velger én) |
| `build <part> --out x.step` | Skriver `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` eller en makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Én fil per rad i designtabellen |
| `variants <part> --out-dir d` eller `--zip f.zip` | Hver konfigurasjon som STEP, IFC, DWG og en forhåndsvisning, en variantstabell og et bibliotekselement (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); se [Lag en variantpakke](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript til del |
| `to-script <part> -o part.pcscript` | Del til skript |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Flytt tilbakerullingslinjen i filen |
| `check <part> [--strict]` | Disiplinkontrollen (nedenfor) |

`build` tar også `--set name=value` (bare for denne bygningen) og `--upto <feature>`. Alle kommandoer tar `--json`. Avslutningskoder: 0 er i orden, 1 betyr at et problem ble funnet, 2 betyr at kommandoen ble skrevet feil. Et skript skrives aldri om på stedet: gi `-o` for å lagre en endret kopi.

## Kontrollen

`check` rapporterer det som gjør en del vanskelig å endre senere:

| Funn | Telles som |
|---|---|
| En skisse som er overdefinert (motstridende eller gjentatte relasjoner) | feil |
| En funksjon som ikke bygges | feil |
| En parameter eller ligning med en feil, eller parametere som bruker hverandre | feil |
| En skisse som er underdefinert, med sine frihetsgrader | advarsel |
| Tall skrevet direkte inn i funksjoner og mål som ingen parameter styrer | advarsel |
| En parameter som ingen bruker | advarsel |
| En undertrykt funksjon; tilbakerullingslinjen ikke helt til slutt | advarsel |

`--strict` gjør hver advarsel til en feil, slik at et byggeskript kan avvise en del som ikke er fullt styrt.

:::note
Makroutdataene `.swb` er for delemodelleringsprogrammet de fleste verksteder bruker: kjørt inne i det programmet bygger den delen der. Den er ikke kjørt i det programmet her (det er ikke tilgjengelig på serverne våre), så behandle den som utestet.
:::
