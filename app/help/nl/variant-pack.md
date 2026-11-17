---
title: Een variantenpakket maken uit uw configuraties
summary: Bouw elke configuratie van een onderdeel, of een gekozen paar, in één keer als STEP, IFC, DWG en elk een voorbeeld, met een tabel van hun parameters en het onderdeel als één bibliotheekitem met de varianten.
keywords: variantenpakket, varianten, configuraties, familie van onderdelen, batch-export, elke maat, step, ifc, dwg, voorbeeld, tabel, csv, json, bibliotheek, configurator, productconfigurator, catalogus, item-json
from: 9a6db99f
---

## Wat u gaat doen

Lever **elke maat van een onderdeel tegelijk** af: één STEP-, IFC- en DWG-bestand en een afbeelding voor elke configuratie, een tabel die zegt wat elk is, en een bibliotheekitem dat ze allemaal op één pagina zet.

U hebt eerst een onderdeel met **configuraties** nodig (zie [Configuraties en ontwerptabellen](topic:design-tables)). Een configuratie die een kenmerk uitschakelt, zoals een plaat met en zonder gaten, wordt een eigen variant.

## Stappen

1. Open het onderdeel. Zoek op het tabblad {{ui:Parameters}} de **Configuraties**.
2. Klik op {{ui:Variantenpakket…}}.
3. Vink de configuraties aan om te bouwen (alle staan aan) en de bestanden om te schrijven: STEP, IFC, DWG, een voorbeeld en het bibliotheekitem.
4. Klik op {{ui:Het pakket maken}}. De statusregel telt de varianten terwijl ze worden gebouwd; uw onderdeel verandert niet.
5. Eén zip wordt gedownload: `<part> variants.zip`.

## Wat in de zip zit

| Bestand | Wat het is |
|---|---|
| `<name>.step` | De configuratie als STEP-volume. |
| `<name>.ifc` | IFC4, één element met het opgebouwde lichaam en de parameters van het onderdeel als eigenschappen; de waarde is die van die configuratie. |
| `<name>.dwg` | Het voor-, boven-, rechter- en isometrische aanzicht als tekenblad op ware grootte. |
| `<name>.svg` | Een isometrische lijntekening ervan. |
| `variants.csv`, `variants.json` | De parametertabel: van elke variant het id, de naam en de waarde van elke parameter, de kenmerken die ze uitschakelt, de bestanden, het volume en de grootte. |
| `<part>.item.json` | Het onderdeel als één bibliotheekitem met zijn varianten (zie hieronder). |
| `README.txt` | Wat er is gemaakt, de opmerkingen hieronder, en wat niet is gebouwd. |

Bestanden krijgen de naam van de configuratie. Een configuratie die niet kan worden gebouwd (een kenmerk dat met die waarden niet te maken is) wordt weggelaten uit de bestanden en de tabel, staat in de README en in een melding nadat de zip is opgeslagen; de andere worden nog steeds geschreven.

## Goed om te weten

- **STEP** is exact wanneer de exacte kernel in uw versie aanstaat. Zonder die kernel is de STEP gefacetteerd (platte driehoeken), en de README zegt dat.
- **DWG** is het tekenblad, geen 3D-model. De lijnen komen uit de mesh, dus een gebogen rand bestaat uit veel korte lijnen.
- **Het bibliotheekitem** bevat één lichaam en één voetafdruk per variant, in de eigen assen van de bibliotheek: Z omhoog, de voorkant naar −Y, en het invoegpunt in het midden van de achterkant onderaan. Het plan is de omhullende rechthoek van elke variant. Een item is beperkt tot 8 MB, dus een zeer zware variant wordt een doos van haar grootte, en de README zegt hoeveel het er zijn.
- De actieve configuratie van het onderdeel is de standaardvariant van het item.
- Poorten (verbindingspunten voor leidingen en kanalen) worden niet vanuit PartCraft ingesteld.

## Zet de varianten op een bibliotheekpagina

Upload `<part>.item.json` bij **Bibliotheek › Uploaden** op de site. Kies de categorie, licentie en uw bronvermelding, en het wordt een bibliotheekitem met zijn varianten. In BimCraft vraagt het plaatsen welke variant, en Wisselen biedt de andere aan. De pagina waar bezoekers opties kiezen, de 3D zien en een variant downloaden is voorlopig een **voorbeeld voor medewerkers**: ze is nog niet openbaar.

## Vanaf de opdrachtregel

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` noemt de configuraties, `--formats` accepteert een van `step`, `ifc`, `dwg`, `preview`, en `--no-item` laat het bibliotheekitem weg. Het schrijft een map, een zip of beide en eindigt met code 1 wanneer een variant niet kon worden gebouwd. Zie [Scripts en de opdrachtregel](topic:scripts-and-cli).
