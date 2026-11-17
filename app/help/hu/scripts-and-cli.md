---
title: Szkriptek és a parancssori eszköz
summary: A PartCraft szkriptformátuma (.pcscript), amely egy egész alkatrészt olvasható szövegként ír le, és a partcraft parancssori eszköz, amely képernyő nélkül épít, módosít, visszagörgeti és ellenőriz alkatrészeket.
keywords: szkript, pcscript, szöveg, parancssor, cli, terminál, köteg, automatizálás, ellenőrzés, lint, építés, export, verziókezelés, diff, paraméteres szkript
from: c56df222
---

A gondos modellezés inkább fegyelem kérdése, mint gombnyomkodásé. A szövegként írt alkatrész olvasható, átnézhető, sorról sorra összehasonlítható, és szkript építheti újra. A PartCraft mindkét irányba működik: bármely alkatrész felírható szkriptként, és a szkript meg is építi az alkatrészt.

## Az alkalmazásban

A {{ui:Paraméterek}} lapon, a **Szkript** alatt:

- a {{ui:Mentés szkriptként}} letölti a megnyitott alkatrészt `<név>.pcscript` fájlként;
- a {{ui:Szkript megnyitása}} alkatrészt épít egy `.pcscript` fájlból. A hibát a sorszámával jelzi, és semmi nem íródik felül.

## A szkriptformátum

```
pcscript 1
part "Bracket"
  resolution 64

param width = 120
  note Lemezszélesség
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

A szabályok:

- A bal szélen kezdődő sor utasítást nyit: `pcscript`, `part`, `param`, egy jellemzőtípus (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` és az újabb típusok), amelyet a neve követ, vagy `rollback <jellemző>`.
- A behúzott sorok a fölötte álló utasítás beállításai. Önmagában álló beállítás (`through`, `reverse`, `suppressed`) az igen értéket jelenti.
- A számbeállítás egy szám, vagy `=` és kifejezés, ami egyenletet alkot: `depth = thick`.
- Vázlatban az `on` megnevezi a síkot (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); a geometria `point <név> x, y`, `line <név> <pont> <pont>`, `circle <név> <középpont> <sugár>`, `arc <név> <középpont> <kezdőpont> <végpont>` (az óramutató járásával ellentétes irányban) vagy `spline <név> fit|control <pontok>`; a kényszerek a típusukból és az általuk összekötött nevekből állnak (az `O` az origó); a méret az értékével vagy a `= kifejezés` alakkal végződik.
- A geometriai vagy kényszersor opcionális beállításai a sor végén, szögletes zárójelben, `;`-vel elválasztva állnak: `[construction]`, `[side -1; label 5, 3]`.
- A `#` megjegyzést kezd (sor elején vagy szóköz után). A szóközt tartalmazó nevek „dupla idézőjelben” állnak.
- A jellemzőazonosítók a leírás sorrendjében f1-től számítódnak. Az él- és lap-hivatkozások ezeket használják, például `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Azok a beállítások, amelyekre a formátumnak nincs szava, `json` és egy érték alakban íródnak; visszaolvasáskor változatlanul maradnak.

Az alkalmazásból mentve a szkript minden beállítást tartalmaz, így ugyanaz az alkatrész nyílik meg belőle. Az importált STEP-testet az alkalmazás a szkripten belül írja ki, a parancssorból pedig külön `.step` fájlba, amelynek nevét a `step-file` adja meg.

## A parancssori eszköz

Az eszköz olyan számítógépen fut, amelyen Node.js 24 van, a CadCraft forráskódjának egy példányából: `node tools/partcraft-cli/partcraft.mjs <parancs>`. Fejlesztői eszköz, az alkalmazással azonos modulokat használ. Az alkatrészek `.partcraft.json` fájlok vagy `.pcscript` szkriptek.

| Parancs | Mit csinál |
|---|---|
| `info <part>` | Jellemzők, paraméterek, visszagörgetősáv, a felépített test térfogata és mérete |
| `params <part>` | Minden paraméter és egyenlet az értékével |
| `set <part> width=150 Base.depth==thick` | Előre: paraméterek módosítása, számok összekapcsolása (`==` vagy kifejezés), egyszerű számok beállítása |
| `drive <part> Base.depth=12` | Visszafelé: a meghajtott szám mögötti paraméter megoldása (`--prefer width` az egyiket választja) |
| `build <part> --out x.step` | Írás `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` vagy makró (`.swb`) formátumban |
| `build <part> --table sizes.csv --out-dir sizes` | Egy fájl a tervtáblázat soronként |
| `variants <part> --out-dir d` vagy `--zip f.zip` | Minden konfiguráció STEP, IFC, DWG formátumban és előnézettel, egy változattáblázattal és egy könyvtári elemmel (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); lásd: [Változatcsomag készítése](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Szkript alkatrésszé |
| `to-script <part> -o part.pcscript` | Alkatrész szkriptté |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | A visszagörgetősáv mozgatása a fájlban |
| `check <part> [--strict]` | A fegyelem-ellenőrzés (lent) |

A `build` parancs fogadja a `--set név=érték` kapcsolót (csak erre az építésre) és a `--upto <jellemző>` kapcsolót. Minden parancs fogadja a `--json` kapcsolót. Kilépési kódok: 0 rendben, 1 hibát talált, 2 a parancs hibásan lett beírva. A szkriptet soha nem írja át helyben: a módosított másolat mentéséhez adja meg a `-o` kapcsolót.

## Az ellenőrzés

A `check` azt jelzi, ami később nehezíti a módosítást:

| Megállapítás | Besorolás |
|---|---|
| Vázlat, amely túlhatározott (ellentmondó vagy ismétlődő kényszerek) | hiba |
| Jellemző, amely nem épül fel | hiba |
| Paraméter vagy egyenlet hibával, vagy egymást használó paraméterek | hiba |
| Vázlat, amely alulhatározott, a szabadsági fokaival együtt | figyelmeztetés |
| Számok, amelyeket közvetlenül jellemzőkbe és méretekbe írtak, és amelyeket semmilyen paraméter nem hajt | figyelmeztetés |
| Paraméter, amelyet semmi nem használ | figyelmeztetés |
| Letiltott jellemző; a visszagörgetősáv nincs a végén | figyelmeztetés |

A `--strict` kapcsoló minden figyelmeztetést hibává tesz, így egy építőszkript visszautasíthatja azt az alkatrészt, amely nincs teljesen meghajtva.

:::note
A `.swb` makrókimenet ahhoz a alkatrész-modellezőhöz készült, amelyet a legtöbb műhely használ: annak belsejében futtatva ott építi fel az alkatrészt. Itt nem futtattuk azt a programot (szervereinken nem érhető el), ezért tesztelés nélkülinek kell tekinteni.
:::
