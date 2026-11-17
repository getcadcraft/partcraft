---
title: Maak 'n varianteprent uit jou konfigurasies
summary: Bou elke konfigurasie van 'n onderdeel, of 'n gekose paar, in een keer as STEP, IFC, DWG en 'n voorskou elk, met 'n tabel van hul parameters en die onderdeel as een biblioteekitem met sy variante.
keywords: varianteprent, variante, konfigurasies, familie van onderdele, groepuitvoer, elke grootte, step, ifc, dwg, voorskou, tabel, csv, json, biblioteek, konfigureerder, produkkonfigureerder, katalogus, item json
from: 9a6db99f
---

## Wat jy sal doen

Lewer **elke grootte van 'n onderdeel op een keer**: een STEP-, IFC- en DWG-lêer en 'n prent vir elke konfigurasie, 'n tabel wat sê wat elkeen is, en 'n biblioteekitem wat almal op een bladsy plaas.

Jy het eers 'n onderdeel met **konfigurasies** nodig (sien [Konfigurasies en ontwerptabelle](topic:design-tables)). 'n Konfigurasie wat 'n kenmerk afskakel, soos 'n plaat met en sonder gate, word sy eie variant.

## Stappe

1. Maak die onderdeel oop. Vind op die {{ui:Parameters}}-oortjie **Konfigurasies**.
2. Klik op {{ui:Varianteprent…}}.
3. Merk die konfigurasies om te bou (almal is gemerk) en die lêers om te skryf: STEP, IFC, DWG, 'n voorskou, en die biblioteekitem.
4. Klik op {{ui:Maak die prent}}. Die statusreël tel die variante soos hulle gebou word; jou onderdeel word nie verander nie.
5. Een zip laai af: `<part> variants.zip`.

## Wat in die zip is

| Lêer | Wat dit is |
|---|---|
| `<name>.step` | Die konfigurasie as 'n STEP-soliede liggaam. |
| `<name>.ifc` | IFC4, een element met die gebou liggaam en die onderdeel se parameters as eienskappe; die waarde is daardie konfigurasie s'n eie. |
| `<name>.dwg` | Die voor-, bo-, regs- en isometriese aansigte as 'n tekenblad op volle grootte. |
| `<name>.svg` | 'n Isometriese lynprent daarvan. |
| `variants.csv`, `variants.json` | Die parametertabel: elke variant se id, naam en waarde van elke parameter, die kenmerke wat dit afskakel, sy lêers, sy volume en sy grootte. |
| `<part>.item.json` | Die onderdeel as een biblioteekitem met sy variante (sien hieronder). |
| `README.txt` | Wat gemaak is, die notas hieronder, en enigiets wat nie gebou is nie. |

Lêers word volgens die konfigurasie benoem. 'n Konfigurasie wat nie gebou kan word nie ('n kenmerk wat nie met daardie waardes gemaak kan word nie), word uit die lêers en die tabel gelaat, en in die README en in 'n boodskap nadat die zip gestoor is, gelys; die ander word steeds geskryf.

## Goed om te weet

- **STEP** is presies wanneer die presiese kern in jou bou aan is. Sonder dit is die STEP gefacetteer (plat driehoeke), en die README sê so.
- **DWG** is die tekenblad, nie 'n 3D-model nie. Die lyne kom uit die net, so 'n geboë rand is baie kort lyne.
- **Die biblioteekitem** dra een liggaam en een voetspoor per variant, in die biblioteek se eie asse: Z op, die voorkant na −Y, en die invoegpunt in die middel van die agterkant onderaan. Die plan is elke variant se begrensende reghoek. 'n Item is beperk tot 8 MB, so 'n baie swaar variant word 'n boks van sy grootte, en die README sê hoeveel.
- Die onderdeel se aktiewe konfigurasie is die item se verstek-variant.
- Poorte (verbindingspunte vir pype en kanale) word nie vanuit PartCraft ingestel nie.

## Sit die variante op 'n biblioteekbladsy

Laai `<part>.item.json` op by **Biblioteek › Laai op** op die webwerf. Kies die kategorie, lisensie en jou erkenningsreël, en dit word 'n biblioteekitem met sy variante. In BimCraft vra die plasing watter variant, en Ruil bied die ander aan. Die bladsy waar besoekers opsies kies, die 3D sien en 'n variant aflaai, is vir nou 'n **personeelvoorskou**: dit is nog nie vir die publiek oop nie.

## Vanaf die opdragreël

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` noem die konfigurasies, `--formats` enige van `step`, `ifc`, `dwg`, `preview`, `--no-item` laat die biblioteekitem weg. Dit skryf 'n gids, 'n zip of albei, en eindig met 1 wanneer 'n variant nie gebou kon word nie. Sien [Skripte en die opdragreël](topic:scripts-and-cli).
