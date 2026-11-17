---
title: Skripte in ukazna vrstica
summary: Format skript PartCraft (.pcscript), ki zapiše celoten del kot berljivo besedilo, in orodje ukazne vrstice partcraft, ki gradi, spreminja, vrača nazaj in preverja dele brez zaslona.
keywords: skripta, pcscript, besedilo, ukazna vrstica, cli, terminal, paket, avtomatizacija, preverjanje, lint, gradnja, izvoz, nadzor različic, razlika, parametrična skripta
from: c56df222
---

Skrbno modeliranje je bolj stvar discipline kot gumbov. Del, zapisan kot besedilo, lahko preberete, pregledate, primerjate vrstico za vrstico in ga zgradite s skripto. PartCraft deluje v obe smeri: kateri koli del lahko zapišete kot skripto, skripta pa zgradi del.

## V aplikaciji

Na zavihku {{ui:Parametri}} pod **Skripta**:

- {{ui:Shrani kot skript}} prenese odprti del kot `<ime>.pcscript`.
- {{ui:Odpri skript}} zgradi del iz datoteke `.pcscript`. Napaka je prijavljena s številko vrstice, nič pa se ne zamenja.

## Format skripte

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

Pravila:

- Vrstica, ki se začne na levem robu, začne stavek: `pcscript`, `part`, `param`, vrsta značilke (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` in novejše vrste), ki ji sledi ime, ali `rollback <feature>`.
- Zamaknjene vrstice so nastavitve stavka zgoraj. Nastavitev sama po sebi (`through`, `reverse`, `suppressed`) pomeni da.
- Številčna nastavitev je število ali `=` in izraz, ki ustvari enačbo: `depth = thick`.
- V skici: `on` določi ravnino (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrija je `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (v nasprotni smeri urnega kazalca) ali `spline <name> fit|control <points>`; relacije so njihova vrsta in imena, ki jih povezujejo (`O` je izhodišče); kota se konča z vrednostjo ali `= izraz`.
- Neobvezne nastavitve vrstice geometrije ali relacije gredo na konec v oglatih oklepajih, ločene s `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` začne komentar (na začetku vrstice ali za presledkom). Imena s presledki gredo v "dvojne narekovaje".
- Številke značilk štejejo od f1 v zapisanem vrstnem redu. Reference robov in ploskev jih uporabljajo, na primer `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Nastavitve, za katere format nima besed, se zapišejo kot `json` in vrednost; berejo se nazaj takšne, kakršne so.

Shranjeno iz aplikacije: skripta vsebuje vsako nastavitev, zato se odpre kot isti del. Uvoženo telo STEP je iz aplikacije zapisano znotraj skripte, iz ukazne vrstice pa kot ločena datoteka `.step`, ki jo določi `step-file`.

## Orodje ukazne vrstice

Orodje deluje na računalniku z Node.js 24, iz kopije izvorne kode CadCraft: `node tools/partcraft-cli/partcraft.mjs <ukaz>`. Je razvojno orodje in uporablja iste module kot aplikacija. Deli so datoteke `.partcraft.json` ali skripte `.pcscript`.

| Ukaz | Kaj naredi |
|---|---|
| `info <part>` | Značilke, parametri, vrstica vračanja, prostornina in velikost zgrajenega telesa |
| `params <part>` | Vsak parameter in enačba z vrednostjo |
| `set <part> width=150 Base.depth==thick` | Naprej: spremeni parametre, poveži števila (`==` ali izraz), nastavi navadna števila |
| `drive <part> Base.depth=12` | Nazaj: reši parameter za poganjano število (`--prefer width` izbere enega) |
| `build <part> --out x.step` | Zapiše `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ali makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Ena datoteka za vsako vrstico tabele oblikovanja |
| `variants <part> --out-dir d` ali `--zip f.zip` | Vsaka konfiguracija kot STEP, IFC, DWG in predogled, tabela različic in element knjižnice (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); glejte [Ustvarite paket različic](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skripta v del |
| `to-script <part> -o part.pcscript` | Del v skripto |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Premakne vrstico vračanja v datoteki |
| `check <part> [--strict]` | Preverjanje discipline (spodaj) |

`build` prav tako sprejme `--set name=value` (samo za to gradnjo) in `--upto <feature>`. Vsak ukaz sprejme `--json`. Izhodne kode: 0 v redu, 1 najdena težava, 2 ukaz je napačno vpisan. Skripta se nikoli ne prepiše na mestu: za shranjevanje spremenjene kopije podajte `-o`.

## Preverjanje

`check` poroča, kaj otežuje poznejšo spremembo dela:

| Ugotovitev | Šteje kot |
|---|---|
| Skica, ki je preveč določena (nasprotujoče ali ponovljene relacije) | napaka |
| Značilka, ki se ne zgradi | napaka |
| Parameter ali enačba z napako ali parametri, ki se medsebojno uporabljajo | napaka |
| Skica, ki je premalo določena, s stopnjami prostosti | opozorilo |
| Števila, vpisana neposredno v značilke in kote, ki jih noben parameter ne poganja | opozorilo |
| Parameter, ki ga nič ne uporablja | opozorilo |
| Potlačena značilka; vrstica vračanja ni na koncu | opozorilo |

`--strict` vsako opozorilo spremeni v napako, zato skripta za gradnjo lahko zavrne del, ki ni popolnoma določen s parametri.

:::note
Izhod makra `.swb` je namenjen modelarju delov, ki ga uporablja večina delavnic: če ga zaženete znotraj tega programa, tam zgradi del. Tu ni bil zagnan v tem programu (ni na voljo na naših strežnikih), zato ga obravnavajte kot netestiranega.
:::
