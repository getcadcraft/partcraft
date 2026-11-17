---
title: Skripte en die opdragreël
summary: Die PartCraft-skripformaat (.pcscript) wat 'n hele onderdeel as leesbare teks skryf, en die partcraft-opdragreëlhulpmiddel wat onderdele bou, verander, terugrol en kontroleer sonder die skerm.
keywords: skrip, pcscript, teks, opdragreël, cli, terminal, groepverwerking, outomatiseer, kontroleer, lint, bou, uitvoer, weergawebeheer, verskil, parametriese skrip
from: c56df222
---

Noukeurige modellering gaan meer oor dissipline as oor knoppies. 'n Onderdeel wat as teks geskryf is, kan gelees, nagegaan, reël vir reël vergelyk en deur 'n skrip herbou word. PartCraft werk albei kante toe: enige onderdeel kan as 'n skrip geskryf word, en 'n skrip bou die onderdeel.

## In die toepassing

Op die {{ui:Parameters}}-oortjie, onder **Skrip**:

- {{ui:Stoor as skrip}} laai die oop onderdeel af as `<naam>.pcscript`.
- {{ui:Maak skrip oop}} bou 'n onderdeel uit 'n `.pcscript`-lêer. 'n Fout word gerapporteer met sy reëlnommer, en niks word vervang nie.

## Die skripformaat

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

Die reëls:

- 'n Reël aan die linkerrand begin 'n stelling: `pcscript`, `part`, `param`, 'n kenmerktipe (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` en die nuwer tipes) gevolg deur sy naam, of `rollback <feature>`.
- Ingesprore reëls is die instellings van die stelling hierbo. 'n Instelling op sy eie (`through`, `reverse`, `suppressed`) beteken ja.
- 'n Getalinstelling is 'n getal, of `=` en 'n uitdrukking, wat 'n vergelyking maak: `depth = thick`.
- In 'n skets noem `on` die vlak (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); meetkunde is `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (teen die wysers van die klok in) of `spline <name> fit|control <points>`; verhoudings is hul tipe en die name wat hulle verbind (`O` is die oorsprong); 'n maat eindig met sy waarde of `= expression`.
- Opsionele instellings van 'n meetkunde- of verhoudingsreël gaan aan die einde in vierkantige hakies, geskei deur `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` begin 'n kommentaar (aan die begin van 'n reël of na 'n spasie). Name met spasies gaan in "dubbele aanhalingstekens".
- Kenmerk-id's tel vanaf f1 in die volgorde waarin hulle geskryf is. Rand- en vlakverwysings gebruik hulle, byvoorbeeld `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Instellings waarvoor die formaat geen woorde het nie, word as `json` en 'n waarde geskryf; hulle word presies so teruggelees.

As dit uit die toepassing gestoor word, bevat die skrip elke instelling, so dit maak as dieselfde onderdeel oop. 'n Ingevoerde STEP-soliede word binne die skrip geskryf vanuit die toepassing, en as 'n afsonderlike `.step`-lêer wat deur `step-file` genoem word vanaf die opdragreël.

## Die opdragreëlhulpmiddel

Die hulpmiddel loop op 'n rekenaar met Node.js 24, vanaf 'n afskrif van die CadCraft-bron: `node tools/partcraft-cli/partcraft.mjs <command>`. Dit is 'n ontwikkelaarshulpmiddel en gebruik dieselfde modules as die toepassing. Onderdele is `.partcraft.json`-lêers of `.pcscript`-skripte.

| Opdrag | Wat dit doen |
|---|---|
| `info <part>` | Kenmerke, parameters, terugrolbalk, die gebou-soliede se volume en grootte |
| `params <part>` | Elke parameter en vergelyking met sy waarde |
| `set <part> width=150 Base.depth==thick` | Vorentoe: verander parameters, koppel getalle (`==` of 'n uitdrukking), stel gewone getalle |
| `drive <part> Base.depth=12` | Terug: los die parameter agter 'n aangedrewe getal op (`--prefer width` kies een) |
| `build <part> --out x.step` | Skryf `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` of 'n makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Een lêer per ontwerptabelreël |
| `variants <part> --out-dir d` or `--zip f.zip` | Elke konfigurasie as STEP, IFC, DWG en 'n voorskou, 'n variantetabel en 'n biblioteekitem (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); sien [Maak 'n variantepakket](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skrip na onderdeel |
| `to-script <part> -o part.pcscript` | Onderdeel na skrip |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Skuif die terugrolbalk in die lêer |
| `check <part> [--strict]` | Die dissiplinekontrole (hieronder) |

`build` neem ook `--set name=value` (net vir hierdie bou) en `--upto <feature>`. Elke opdrag neem `--json`. Afsluitkodes: 0 goed, 1 'n probleem is gevind, 2 die opdrag is verkeerd getik. 'n Skrip word nooit op dieselfde plek herskryf nie: gee `-o` om 'n veranderde afskrif te stoor.

## Die kontrole

`check` rapporteer wat 'n onderdeel later moeilik maak om te verander:

| Bevinding | Tel as |
|---|---|
| 'n Skets wat oor-gedefinieer is (botsende of herhaalde verhoudings) | fout |
| 'n Kenmerk wat nie bou nie | fout |
| 'n Parameter of vergelyking met 'n fout, of parameters wat mekaar gebruik | fout |
| 'n Skets wat onder-gedefinieer is, met sy vryheidsgrade | waarskuwing |
| Getalle direk in kenmerke en maate ingetik wat geen parameter aandryf nie | waarskuwing |
| 'n Parameter wat niks gebruik nie | waarskuwing |
| 'n Onderdrukte kenmerk; die terugrolbalk nie aan die einde nie | waarskuwing |

`--strict` maak elke waarskuwing 'n fout, sodat 'n bouskrip 'n onderdeel kan weier wat nie volledig aangedryf word nie.

:::note
Die `.swb`-makro-uitvoer is vir die onderdeelmodelleerder wat die meeste werkswinkels gebruik: wanneer dit binne daardie program loop, bou dit die onderdeel daar. Dit is hier nie in daardie program getoets nie (dit is nie op ons bedieners beskikbaar nie), so behandel dit as ongetoets.
:::
