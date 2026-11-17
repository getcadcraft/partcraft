---
title: Scripts en de opdrachtregel
summary: Het PartCraft-scriptformaat (.pcscript) dat een heel onderdeel als leesbare tekst schrijft, en het hulpprogramma partcraft voor de opdrachtregel dat onderdelen bouwt, wijzigt, terugrolt en controleert zonder scherm.
keywords: script, pcscript, tekst, opdrachtregel, cli, terminal, batch, automatiseren, controleren, lint, bouwen, exporteren, versiebeheer, diff, parametrisch script
from: c56df222
---

Zorgvuldig modelleren gaat meer over discipline dan over knoppen. Een onderdeel dat als tekst is geschreven, kan worden gelezen, beoordeeld, regel voor regel vergeleken en door een script opnieuw worden gebouwd. PartCraft werkt beide kanten op: elk onderdeel kan als script worden geschreven, en een script bouwt het onderdeel.

## In de app

Op het tabblad {{ui:Parameters}}, onder **Script**:

- {{ui:Opslaan als script}} downloadt het open onderdeel als `<naam>.pcscript`.
- {{ui:Script openen}} bouwt een onderdeel uit een `.pcscript`-bestand. Een fout wordt gemeld met het regelnummer, en er wordt niets vervangen.

## Het scriptformaat

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

De regels:

- Een regel die aan de linkerkant begint, is een opdracht: `pcscript`, `part`, `param`, een featuretype (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` en de nieuwere typen) gevolgd door zijn naam, of `rollback <feature>`.
- Ingesprongen regels zijn de instellingen van de opdracht erboven. Een instelling op zichzelf (`through`, `reverse`, `suppressed`) betekent ja.
- Een getalinstelling is een getal, of `=` met een expressie, wat een vergelijking maakt: `depth = thick`.
- In een schets: `on` benoemt het vlak (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrie is `point <naam> x, y`, `line <naam> <punt> <punt>`, `circle <naam> <middelpunt> <straal>`, `arc <naam> <middelpunt> <start> <eind>` (tegen de klok in) of `spline <naam> fit|control <punten>`; beperkingen zijn hun type en de namen die ze verbinden (`O` is de oorsprong); een maatvoering eindigt met haar waarde of `= expressie`.
- Optionele instellingen van een geometrie- of beperkingsregel staan tussen vierkante haken aan het eind, gescheiden door `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` begint een opmerking (aan het begin van een regel of na een spatie). Namen met spaties staan tussen "dubbele aanhalingstekens".
- Featureconcepten tellen vanaf f1 in de volgorde waarin ze staan. Rand- en vlakverwijzingen gebruiken ze, bijvoorbeeld `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Instellingen waarvoor het formaat geen woorden heeft, worden geschreven als `json` en een waarde; ze worden zoals ze zijn teruggelezen.

Opgeslagen vanuit de app bevat het script elke instelling, dus het opent als hetzelfde onderdeel. Een geïmporteerd STEP-volume wordt vanuit de app in het script geschreven, en vanaf de opdrachtregel als een apart `.step`-bestand met de naam uit `step-file`.

## Het hulpprogramma voor de opdrachtregel

Het hulpprogramma draait op een computer met Node.js 24, vanuit een kopie van de CadCraft-broncode: `node tools/partcraft-cli/partcraft.mjs <opdracht>`. Het is een ontwikkelaarshulpmiddel en gebruikt dezelfde modules als de app. Onderdelen zijn `.partcraft.json`-bestanden of `.pcscript`-scripts.

| Opdracht | Wat het doet |
|---|---|
| `info <part>` | Features, parameters, terugrolbalk, het volume en de afmeting van het gebouwde volume |
| `params <part>` | Elke parameter en vergelijking met haar waarde |
| `set <part> width=150 Base.depth==thick` | Vooruit: parameters wijzigen, getallen koppelen (`==` of een expressie), gewone getallen instellen |
| `drive <part> Base.depth=12` | Achteruit: de parameter oplossen achter een aangestuurd getal (`--prefer width` kiest er een) |
| `build <part> --out x.step` | Schrijft `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` of een macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Één bestand per rij van de ontwerptabel |
| `variants <part> --out-dir d` of `--zip f.zip` | Elke configuratie als STEP, IFC, DWG en een voorbeeld, een variantentabel en een bibliotheekitem (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); zie [Een variantenpakket maken](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script naar onderdeel |
| `to-script <part> -o part.pcscript` | Onderdeel naar script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Verplaats de terugrolbalk in het bestand |
| `check <part> [--strict]` | De disciplinecontrole (hieronder) |

`build` accepteert ook `--set naam=waarde` (alleen voor deze build) en `--upto <feature>`. Elke opdracht accepteert `--json`. Afsluitcodes: 0 goed, 1 er is een probleem gevonden, 2 de opdracht is verkeerd getypt. Een script wordt nooit ter plekke herschreven: geef `-o` om een gewijzigde kopie op te slaan.

## De controle

`check` meldt wat een onderdeel later moeilijk te wijzigen maakt:

| Bevinding | Telt als |
|---|---|
| Een schets die overbepaald is (tegenstrijdige of herhaalde beperkingen) | fout |
| Een feature die niet bouwt | fout |
| Een parameter of vergelijking met een fout, of parameters die van elkaar afhangen | fout |
| Een schets die onderbepaald is, met de vrijheidsgraden | waarschuwing |
| Getallen die rechtstreeks in features en maatvoeringen zijn getypt en die geen parameter aanstuurt | waarschuwing |
| Een parameter die niets gebruikt | waarschuwing |
| Een onderdrukte feature; de terugrolbalk niet aan het eind | waarschuwing |

`--strict` maakt elke waarschuwing tot een fout, zodat een bouwscript een onderdeel kan weigeren dat niet volledig is aangestuurd.

:::note
De uitvoer als `.swb`-macro is bedoeld voor de onderdeelmodeler die de meeste werkplaatsen gebruiken: uitgevoerd in dat programma bouwt het onderdeel daar. Hier is het niet in dat programma uitgevoerd (het is niet beschikbaar op onze servers), dus behandel het als ongetest.
:::
