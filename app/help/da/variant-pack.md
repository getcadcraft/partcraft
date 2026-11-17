---
title: Lav en variantpakke fra dine konfigurationer
summary: Byg hver konfiguration af en del, eller nogle få valgte, på én gang som STEP, IFC, DWG og et billede af hver, med en tabel over deres parametre og delen som ét biblioteksemne med dets varianter.
keywords: variantpakke, varianter, konfigurationer, familie af dele, batcheksport, alle størrelser, step, ifc, dwg, forhåndsvisning, tabel, csv, json, bibliotek, konfigurator, produktkonfigurator, katalog, item json
from: 9a6db99f
---

## Hvad du skal gøre

Lever **hver størrelse af en del på én gang**: én STEP-, IFC- og DWG-fil og et billede for hver konfiguration, en tabel der siger hvad hver er, og et biblioteksemne der samler dem alle på én side.

Du skal først have en del med **konfigurationer** (se [Konfigurationer og designtabeller](topic:design-tables)). En konfiguration der slår en feature fra, såsom en plade med og uden huller, bliver sin egen variant.

## Trin

1. Åbn delen. På fanen {{ui:Parametre}} finder du **Konfigurationer**.
2. Klik på {{ui:Variantpakke…}}.
3. Sæt kryds ved de konfigurationer der skal bygges (alle er sat), og de filer der skal skrives: STEP, IFC, DWG, en forhåndsvisning og biblioteksemnet.
4. Klik på {{ui:Lav pakken}}. Statuslinjen tæller varianterne, efterhånden som de bygges; din del ændres ikke.
5. Én zip-fil downloades: `<part> variants.zip`.

## Hvad der er i zip-filen

| Fil | Hvad den er |
|---|---|
| `<name>.step` | Konfigurationen som et STEP-massivt legeme. |
| `<name>.ifc` | IFC4, ét element med det byggede legeme og delens parametre som egenskaber; værdien er konfigurationens egen. |
| `<name>.dwg` | Visningerne Front, Top, Højre og isometrisk som et tegningsark i fuld størrelse. |
| `<name>.svg` | Et isometrisk linjebillede af den. |
| `variants.csv`, `variants.json` | Parametertabellen: hver variants id, navn og værdi for hver parameter, de features den slår fra, dens filer, dens volumen og størrelse. |
| `<part>.item.json` | Delen som ét biblioteksemne med dets varianter (se nedenfor). |
| `README.txt` | Hvad der blev lavet, noterne nedenfor, og alt der ikke blev bygget. |

Filerne navngives efter konfigurationen. En konfiguration der ikke kan bygges (en feature der ikke kan laves med de værdier), udelades fra filerne og tabellen, opføres i README og i en besked efter zip-filen er gemt; de andre skrives stadig.

## Godt at vide

- **STEP** er eksakt, når den eksakte kerne er slået til i din build. Uden den er STEP facetteret (flade trekanter), og README siger det.
- **DWG** er tegningsarket, ikke en 3D-model. Dens linjer kommer fra mesh'et, så en krum kant er mange korte linjer.
- **Biblioteksemnet** bærer ét legeme og ét fodaftryk pr. variant, i bibliotekets egne akser: Z op, forsiden mod −Y, og indsætningspunktet midt på bagsiden nederst. Planen er hver variants afgrænsende rektangel. Et emne er begrænset til 8 MB, så en meget tung variant bliver til en boks i sin størrelse, og README siger, hvor mange.
- Delens aktive konfiguration er emnets standardvariant.
- Porte (forbindelsespunkter til rør og kanaler) sættes ikke fra PartCraft.

## Læg varianterne på en biblioteksside

Upload `<part>.item.json` under **Bibliotek › Upload** på siden. Vælg dens kategori, licens og din kildeangivelse, så bliver det et biblioteksemne med dets varianter. I BimCraft spørger placering hvilken variant, og **Byt** tilbyder de andre. Siden hvor besøgende vælger muligheder, ser 3D-modellen og henter en variant, er indtil videre en **forhåndsvisning for medarbejdere**: den er ikke åben for offentligheden endnu.

## Fra kommandolinjen

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` navngiver konfigurationerne, `--formats` tager en eller flere af `step`, `ifc`, `dwg`, `preview`, og `--no-item` udelader biblioteksemnet. Den skriver en mappe, en zip eller begge og afslutter med 1, når en variant ikke kunne bygges. Se [Scripts og kommandolinjen](topic:scripts-and-cli).
