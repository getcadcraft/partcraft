---
title: Skriptid ja käsurida
summary: PartCraft'i skriptivorming (.pcscript), mis kirjutab terve detaili loetava tekstina, ja partcraft-käsureatööriist, mis koostab, muudab, kerib tagasi ja kontrollib detaile ilma ekraanita.
keywords: skript, pcscript, tekst, käsurida, cli, terminal, partii, automatiseeri, kontrolli, lint, ehita, eksport, versioonihaldus, erinevus, parameetriline skript
from: c56df222
---

Hoolikas modelleerimine on rohkem distsipliin kui nuppude küsimus. Tekstina kirjutatud detaili saab lugeda, üle vaadata, rida-realt võrrelda ja skriptiga uuesti ehitada. PartCraft töötab mõlemas suunas: iga detaili saab kirjutada skriptina ja skript ehitab detaili.

## Rakenduses

Vahekaardil {{ui:Parameetrid}}, jaotises **Skript**:

- {{ui:Salvesta skriptina}} laadib avatud detaili alla failina `<nimi>.pcscript`.
- {{ui:Ava skript}} ehitab detaili `.pcscript`-failist. Viga teatatakse koos rea numbriga ja midagi ei asendata.

## Skriptivorming

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

Reeglid:

- Rida vasakul servas alustab lauset: `pcscript`, `part`, `param`, elemendi tüüp (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` ja uuemad tüübid) koos nimega või `rollback <element>`.
- Taandatud read on lause, mis on ülal, seaded. Seade, mis on üksi (`through`, `reverse`, `suppressed`), tähendab jah.
- Arvuseade on arv või `=` ja avaldis, mis teeb võrrandi: `depth = thick`.
- Visandis: `on` nimetab tasandi (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geomeetria on `point <nimi> x, y`, `line <nimi> <punkt> <punkt>`, `circle <nimi> <keskpunkt> <raadius>`, `arc <nimi> <keskpunkt> <algus> <lõpp>` (vastupäeva) või `spline <nimi> fit|control <punktid>`; seosed on oma tüüp ja nimed, mida nad ühendavad (`O` on algpunkt); mõõt lõpeb väärtusega või `= avaldis`.
- Geomeetria- või seoserea valikulised seaded lähevad lõppu nurksulgudesse, eraldatuna `;`-ga: `[construction]`, `[side -1; label 5, 3]`.
- `#` alustab kommentaari (rea alguses või pärast tühikut). Tühikuga nimed lähevad „topelt jutumärkide“ vahele.
- Elementide ID-d loevad f1-st kirjutamise järjekorras. Serva- ja pinnaviited kasutavad neid, näiteks `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Seaded, millel vormingul pole sõnu, kirjutatakse `json` ja väärtus; need loetakse tagasi just nii, nagu on.

Rakendusest salvestatud skript sisaldab kõiki seadeid, nii et see avaneb sama detailina. Rakendusest imporditud STEP-tahke kirjutatakse skripti sisse ning käsurealt eraldi `.step`-failina, mille nimi on määratud `step-file`-ga.

## Käsureatööriist

Tööriist töötab arvutis, kus on Node.js 24, CadCraft'i lähtekoodi koopiast: `node tools/partcraft-cli/partcraft.mjs <käsk>`. See on arendaja tööriist ja kasutab samu mooduleid mis rakendus. Detailid on `.partcraft.json`-failid või `.pcscript`-skriptid.

| Käsk | Mida see teeb |
|---|---|
| `info <part>` | Elemendid, parameetrid, tagasikerimisriba, valmis tahke maht ja mõõtmed |
| `params <part>` | Iga parameeter ja võrrand koos väärtusega |
| `set <part> width=150 Base.depth==thick` | Edasi: muudab parameetreid, seob arve (`==` või avaldis), seab tavalisi arve |
| `drive <part> Base.depth=12` | Tagasi: lahendab juhitud arvu taga oleva parameetri (`--prefer width` valib ühe) |
| `build <part> --out x.step` | Kirjutab `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` või makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Üks fail iga konstruktsioonitabeli rea kohta |
| `variants <part> --out-dir d` või `--zip f.zip` | Iga konfiguratsioon STEP-, IFC- ja DWG-vormingus ning eelvaade, variantide tabel ja teegi kirje (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vaata [Tee variantide pakk](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skript detailiks |
| `to-script <part> -o part.pcscript` | Detail skriptiks |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Liigutab tagasikerimisriba failis |
| `check <part> [--strict]` | Distsipliinikontroll (allpool) |

`build` võtab ka `--set name=value` (ainult selle ehituse jaoks) ja `--upto <feature>`. Iga käsk võtab `--json`. Väljumiskoodid: 0 korras, 1 leiti probleem, 2 käsk sisestati valesti. Skripti ei kirjutata kohapeal ümber: muudetud koopia salvestamiseks anna `-o`.

## Kontroll

`check` teatab, mis teeb detaili hiljem raskesti muudetavaks:

| Leid | Loetakse |
|---|---|
| Visand, mis on üle määratud (vastuolulised või korduvad seosed) | veaks |
| Element, mis ei ehitu | veaks |
| Parameeter või võrrand veaga, või parameetrid, mis kasutavad üksteist | veaks |
| Visand, mis on alla määratud, koos vabadusastmetega | hoiatuseks |
| Elementidesse ja mõõtudesse sisestatud arvud, mida ükski parameeter ei juhi | hoiatuseks |
| Parameeter, mida miski ei kasuta | hoiatuseks |
| Peidetud element; tagasikerimisriba pole lõpus | hoiatuseks |

`--strict` muudab iga hoiatuse veaks, nii et ehitusskript võib keelduda detailist, mis pole täielikult juhitud.

:::note
`.swb`-makro väljund on mõeldud detailimodelleerijale, mida enamik töökodasid kasutab: selle programmi sees käivitamisel ehitab see detaili seal. Seda pole siin selles programmis käivitatud (see pole meie serveritel saadaval), seega käsitle seda testimata.
:::
