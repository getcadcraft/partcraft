---
title: Skriftur og skipanalína
summary: PartCraft-skriftusniðið (.pcscript) sem skrifar heilan hlut sem lesanlegan texta, og partcraft-skipanalínutólið sem býr til, breytir, rúllar til baka og athugar hluti án skjásins.
keywords: skrift, pcscript, texti, skipanalína, cli, flugstöð, lotuvinnsla, sjálfvirkni, athugun, lint, smíða, útflutningur, útgáfustýring, mismunur, parametrísk skrift
from: c56df222
---

Vönduð mótun snýst meira um aga en hnappa. Hlutur skrifaður sem texti er hægt að lesa, yfirfara, bera saman línu fyrir línu og endurbyggja með skrift. PartCraft virkar í báðar áttir: hvaða hlutur sem er er hægt að skrifa sem skrift, og skrift smíðar hlutinn.

## Í forritinu

Undir **Skrift** á flipanum {{ui:Breytur}}:

- {{ui:Vista sem skrift}} sækir opna hlutinn sem `<name>.pcscript`.
- {{ui:Opna skrift}} býr til hlut úr `.pcscript`-skrá. Villa er tilkynnt með línunúmeri sínu og engu er skipt út.

## Skriftusniðið

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

Reglurnar:

- Lína við vinstri jaðar byrjar setningu: `pcscript`, `part`, `param`, eiginleikategund (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` og þær nýrri) sem fylgir nafn hennar, eða `rollback <feature>`.
- Inndregnar línur eru stillingar setningarinnar fyrir ofan. Stök stilling (`through`, `reverse`, `suppressed`) þýðir já.
- Talnastilling er tala, eða `=` og segð, sem býr til jöfnu: `depth = thick`.
- Í skissu: `on` nefnir planið (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); rúmfræði er `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (rangsælis) eða `spline <name> fit|control <points>`; tengsl eru tegund þeirra og nöfnin sem þau tengja (`O` er upphafspunkturinn); vídd endar á gildi sínu eða `= segð`.
- Valfrjálsar stillingar rúmfræði- eða tengslalínu fara í hornklofa í lokin, aðskildar með `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` byrjar athugasemd (í upphafi línu eða eftir bil). Nöfn með bilum fara í „tvöföld gæsalappir“.
- Auðkenni eiginleika telja frá f1 í þeirri röð sem þau eru skrifuð. Tilvísanir í jaðra og fleti nota þau, til dæmis `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Stillingar sem sniðið hefur engin orð yfir eru skrifaðar `json` og gildi; þær eru lesnar til baka eins og þær eru.

Vistuð úr forritinu inniheldur skriftan allar stillingar, þannig að hún opnast sem sami hluturinn. Innfluttur STEP-massi er skrifaður inn í skriftuna úr forritinu, og sem sérstök `.step`-skrá sem heitir eftir `step-file` úr skipanalínunni.

## Skipanalínutólið

Tólið keyrir á tölvu með Node.js 24, úr afriti af CadCraft-kóðanum: `node tools/partcraft-cli/partcraft.mjs <command>`. Það er þróunartól og notar sömu einingar og forritið. Hlutir eru `.partcraft.json`-skrár eða `.pcscript`-skriftur.

| Skipun | Hvað hún gerir |
|---|---|
| `info <part>` | Eiginleikar, breytur, afturrúllunarstikan, og rúmmál og stærð smíðaðs massa |
| `params <part>` | Sérhver breyta og jafna með gildi sínu |
| `set <part> width=150 Base.depth==thick` | Áfram: breytir breytum, tengir tölur (`==` eða segð), stillir einfaldar tölur |
| `drive <part> Base.depth=12` | Afturábak: leysir breytuna á bak við drifna tölu (`--prefer width` velur eina) |
| `build <part> --out x.step` | Skrifar `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` eða fjölva (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Ein skrá fyrir hverja röð í hönnunartöflu |
| `variants <part> --out-dir d` eða `--zip f.zip` | Sérhver stilling sem STEP, IFC, DWG og forskoðun, afbrigðatafla og safnseining (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); sjá [Búa til afbrigðapakka](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skrift í hlut |
| `to-script <part> -o part.pcscript` | Hlutur í skrift |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Færir afturrúllunarstikuna í skránni |
| `check <part> [--strict]` | Agaathugunin (hér að neðan) |

`build` tekur líka `--set name=value` (aðeins fyrir þessa smíði) og `--upto <feature>`. Sérhver skipun tekur `--json`. Hættukóðar: 0 í lagi, 1 vandamál fannst, 2 skipun var slegin rangt inn. Skrift er aldrei endurskrifuð á staðnum: gefðu `-o` til að vista breytt afrit.

## Athugunin

`check` tilkynnir það sem gerir hlut erfiðan að breyta síðar:

| Niðurstaða | Telst sem |
|---|---|
| Skissa sem er ofskilgreind (tengsl sem stangast á eða eru endurtekin) | villa |
| Eiginleiki sem smíðast ekki | villa |
| Breyta eða jafna með villu, eða breytur sem nota hvor aðra | villa |
| Skissa sem er vanskilgreind, með frítölum sínum | aðvörun |
| Tölur slegnar beint inn í eiginleika og víddir sem engin breyta stýrir | aðvörun |
| Breyta sem ekkert notar | aðvörun |
| Óvirkur eiginleiki; afturrúllunarstikan er ekki í lok | aðvörun |

`--strict` gerir hverja aðvörun að villu, þannig að smíðaskrift getur hafnað hlut sem er ekki að fullu stýrður.

:::note
Fjölvaúttakið `.swb` er ætlað þeim hlutamótara sem flestar smiðjur nota: keyrt innan í því forriti smíðar það hlutinn þar. Það hefur ekki verið keyrt í því forriti hér (það er ekki tiltækt á þjónum okkar), svo meðhöndlaðu það sem óprófað.
:::
