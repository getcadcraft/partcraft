---
title: Scripts og kommandolinjen
summary: PartCraft-scriptformatet (.pcscript), der skriver en hel del som læsbar tekst, og kommandolinjeværktøjet partcraft, der bygger, ændrer, ruller tilbage og kontrollerer dele uden skærmen.
keywords: script, pcscript, tekst, kommandolinje, cli, terminal, batch, automatisér, kontrol, lint, byg, eksport, versionsstyring, diff, parametrisk script
from: c56df222
---

Omhyggelig modellering handler mere om disciplin end om knapper. En del skrevet som tekst kan læses, gennemgås, sammenlignes linje for linje og genopbygges af et script. PartCraft virker i begge retninger: enhver del kan skrives som et script, og et script bygger delen.

## I programmet

Under fanen {{ui:Parametre}}, under **Script**:

- {{ui:Gem som script}} downloader den åbne del som `<navn>.pcscript`.
- {{ui:Åbn script}} bygger en del ud fra en `.pcscript`-fil. En fejl rapporteres med linjenummer, og intet erstattes.

## Scriptformatet

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

Reglerne:

- En linje ved venstre kant starter en sætning: `pcscript`, `part`, `param`, en feature-type (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` og de nyere typer) efterfulgt af dens navn, eller `rollback <feature>`.
- Indrykkede linjer er indstillingerne for sætningen ovenfor. En indstilling alene (`through`, `reverse`, `suppressed`) betyder ja.
- En talindstilling er et tal, eller `=` og et udtryk, der laver en ligning: `depth = thick`.
- I en skitse: `on` navngiver planet (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`). Geometri er `point <navn> x, y`, `line <navn> <punkt> <punkt>`, `circle <navn> <centrum> <radius>`, `arc <navn> <centrum> <start> <slut>` (mod uret) eller `spline <navn> fit|control <punkter>`. Relationer er deres type og de navne, de forbinder (`O` er origo). Et mål slutter med sin værdi eller `= udtryk`.
- Valgfrie indstillinger for en geometri- eller relationslinje står i firkantede parenteser til sidst, adskilt med `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` starter en kommentar (i begyndelsen af en linje eller efter et mellemrum). Navne med mellemrum står i "dobbelte anførselstegn".
- Feature-id'er tæller fra f1 i den rækkefølge, de skrives. Kant- og flade-referencer bruger dem, for eksempel `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Indstillinger, formatet ikke har ord for, skrives `json` og en værdi. De læses tilbage, som de er.

Gemt fra programmet indeholder scriptet alle indstillinger, så det åbner som den samme del. Et importeret STEP-massivt legeme skrives ind i scriptet fra programmet og som en separat `.step`-fil, navngivet af `step-file`, fra kommandolinjen.

## Kommandolinjeværktøjet

Værktøjet kører på en computer med Node.js 24, fra en kopi af CadCraft-kildekoden: `node tools/partcraft-cli/partcraft.mjs <kommando>`. Det er et udviklerværktøj og bruger de samme moduler som programmet. Dele er `.partcraft.json`-filer eller `.pcscript`-scripts.

| Kommando | Hvad den gør |
|---|---|
| `info <part>` | Features, parametre, rollback-linjen, det byggede legemes volumen og størrelse |
| `params <part>` | Hver parameter og ligning med sin værdi |
| `set <part> width=150 Base.depth==thick` | Fremad: ændrer parametre, forbinder tal (`==` eller et udtryk), sætter almindelige tal |
| `drive <part> Base.depth=12` | Baglæns: løser parameteren bag et styret tal (`--prefer width` vælger én) |
| `build <part> --out x.step` | Skriver `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` eller en makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Én fil pr. række i designtabellen |
| `variants <part> --out-dir d` eller `--zip f.zip` | Hver konfiguration som STEP, IFC, DWG og et forhåndsvisningsbillede, en variantoversigt og et biblioteksemne (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); se [Lav en variantpakke](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script til del |
| `to-script <part> -o part.pcscript` | Del til script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Flytter rollback-linjen i filen |
| `check <part> [--strict]` | Disciplinkontrollen (nedenfor) |

`build` tager også `--set name=value` (kun for denne bygning) og `--upto <feature>`. Alle kommandoer tager `--json`. Afslutningskoder: 0 i orden, 1 et problem blev fundet, 2 kommandoen blev skrevet forkert. Et script omskrives aldrig på stedet: angiv `-o` for at gemme en ændret kopi.

## Kontrollen

`check` rapporterer det, der gør en del svær at ændre senere:

| Fund | Tæller som |
|---|---|
| En skitse, der er overbestemt (modstridende eller gentagne relationer) | fejl |
| En feature, der ikke kan bygges | fejl |
| En parameter eller ligning med en fejl, eller parametre, der bruger hinanden | fejl |
| En skitse, der er underbestemt, med dens frihedsgrader | advarsel |
| Tal skrevet direkte ind i features og mål, som ingen parameter styrer | advarsel |
| En parameter, som intet bruger | advarsel |
| En undertrykt feature, eller rollback-linjen ikke til sidst | advarsel |

`--strict` gør hver advarsel til en fejl, så et byggescript kan afvise en del, der ikke er fuldt styret.

:::note
Makroen `.swb` er til det modelleringsprogram, de fleste værksteder bruger: kørt inde i det program bygger den delen dér. Den er ikke kørt i det program her (det er ikke tilgængeligt på vores servere), så betragt den som utestet.
:::
