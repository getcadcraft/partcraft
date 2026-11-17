---
title: Mga script at ang command line
summary: Ang format ng script ng PartCraft (.pcscript) na nagsusulat ng buong piyesa bilang nababasang teksto, at ang partcraft command line tool na bumubuo, nagbabago, nagro-rollback at nagche-check ng mga piyesa nang walang screen.
keywords: script, pcscript, teksto, command line, cli, terminal, batch, i-automate, check, lint, build, export, version control, diff, parametric script
from: c56df222
---

Ang maingat na pagmo-model ay higit na tungkol sa disiplina kaysa sa mga button. Ang piyesang isinulat bilang teksto ay mababasa, masusuri, maihahambing linya por linya at mabubuo muli ng script. Pumupunta ang PartCraft sa dalawang direksyon: anumang piyesa ay maisusulat bilang script, at bubuo ng piyesa ang isang script.

## Sa app

Sa tab na {{ui:Parameters}}, sa ilalim ng **Script**:

- {{ui:Save as script}} ay nagda-download ng bukas na piyesa bilang `<name>.pcscript`.
- {{ui:Open script}} ay bumubuo ng piyesa mula sa `.pcscript` na file. Kapag may mali, iuulat ito kasama ang numero ng linya nito at walang papalitan.

## Ang format ng script

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

Ang mga patakaran:

- Ang linyang nasa kaliwang gilid ay nagsisimula ng statement: `pcscript`, `part`, `param`, isang uri ng feature (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` at ang mas bagong uri) na sinusundan ng pangalan nito, o `rollback <feature>`.
- Ang mga naka-indent na linya ay mga setting ng statement sa itaas. Ang setting na mag-isa (`through`, `reverse`, `suppressed`) ay nangangahulugang oo.
- Ang numerong setting ay numero, o `=` at expression, na nagiging equation: `depth = thick`.
- Sa sketch: ang `on` ay nagpapangalan ng plane (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); ang geometry ay `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (counter-clockwise) o `spline <name> fit|control <points>`; ang mga relation ay ang uri nila at ang mga pangalang pinag-uugnay nila (`O` ang origin); ang dimension ay nagtatapos sa value nito o sa `= expression`.
- Ang opsyonal na setting ng linya ng geometry o relation ay nasa square bracket sa dulo, pinaghihiwalay ng `;`: `[construction]`, `[side -1; label 5, 3]`.
- Ang `#` ay nagsisimula ng comment (sa simula ng linya o pagkatapos ng space). Ang mga pangalang may space ay nasa "double quotes".
- Ang feature id ay nagbibilang mula f1 ayon sa pagkakasulat. Ginagamit ito ng edge at face reference, halimbawa `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Ang mga setting na walang salita sa format ay isinusulat bilang `json` at isang value; binabasa ang mga ito pabalik nang eksakto.

Kapag na-save mula sa app, kasama sa script ang bawat setting, kaya bumubukas ito bilang parehong piyesa. Ang na-import na STEP solid ay isinusulat sa loob ng script mula sa app, at bilang hiwalay na `.step` file na pinangalanan ng `step-file` mula sa command line.

## Ang command line tool

Tumatakbo ang tool sa computer na may Node.js 24, mula sa kopya ng CadCraft source: `node tools/partcraft-cli/partcraft.mjs <command>`. Developer tool ito at gumagamit ng parehong module ng app. Ang mga piyesa ay `.partcraft.json` na file o `.pcscript` na script.

| Command | Ginagawa |
|---|---|
| `info <part>` | Mga feature, parameter, rollback bar, ang built solid na volume at laki |
| `params <part>` | Bawat parameter at equation kasama ang value nito |
| `set <part> width=150 Base.depth==thick` | Forward: baguhin ang mga parameter, i-link ang mga numero (`==` o isang expression), itakda ang mga plain na numero |
| `drive <part> Base.depth=12` | Backward: lutasin ang parameter sa likod ng driven na numero (`--prefer width` ang pumipili ng isa) |
| `build <part> --out x.step` | Sumusulat ng `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` o macro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Isang file bawat row ng design table |
| `variants <part> --out-dir d` o `--zip f.zip` | Bawat configuration bilang STEP, IFC, DWG at preview, isang variants table at isang library item (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); tingnan ang [Gumawa ng variant pack](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script papunta sa piyesa |
| `to-script <part> -o part.pcscript` | Piyesa papunta sa script |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Igalaw ang rollback bar sa file |
| `check <part> [--strict]` | Ang discipline check (sa ibaba) |

Tumatanggap din ang `build` ng `--set name=value` (para sa build na ito lamang) at `--upto <feature>`. Tumatanggap ang bawat command ng `--json`. Exit code: 0 maayos, 1 may nakitang problema, 2 mali ang pagkatype ng command. Hindi kailanman binabago nang direkta ang script: ibigay ang `-o` para i-save ang binagong kopya.

## Ang check

Iniuulat ng `check` kung ano ang nagpapahirap palitan ang piyesa sa hinaharap:

| Finding | Binibilang bilang |
|---|---|
| Sketch na over defined (magkasalungat o paulit-ulit na relation) | error |
| Feature na hindi nabubuo | error |
| Parameter o equation na may error, o mga parameter na gumagamit sa isa't isa | error |
| Sketch na under defined, kasama ang degrees of freedom nito | warning |
| Mga numerong direktang tinype sa feature at dimension na walang parameter na nagtutulak sa mga ito | warning |
| Parameter na walang gumagamit | warning |
| Suppressed na feature; ang rollback bar ay wala sa dulo | warning |

Ginagawang error ng `--strict` ang bawat warning, kaya maaaring tanggihan ng build script ang piyesang hindi ganap na napapatakbo ng parameter.

:::note
Ang output na `.swb` macro ay para sa part modeler na ginagamit ng karamihan sa shop: kapag tumakbo sa loob ng program na iyon, bubuuin nito doon ang piyesa. Hindi ito napatakbo sa program na iyon dito (hindi ito available sa aming server), kaya ituring itong hindi pa nasusubok.
:::
