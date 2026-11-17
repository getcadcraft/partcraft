---
title: Scenarijai ir komandinė eilutė
summary: PartCraft scenarijų formatas (.pcscript), kuris įrašo visą detalę kaip skaitomą tekstą, ir partcraft komandinės eilutės įrankis, kuris kuria, keičia, atkuria ir tikrina detales be ekrano.
keywords: scenarijus, pcscript, tekstas, komandinė eilutė, cli, terminalas, paketinis, automatizuoti, tikrinti, lint, kurti, eksportuoti, versijų valdymas, skirtumai, parametrinis scenarijus
from: c56df222
---

Kruopštus modeliavimas labiau priklauso nuo drausmės nei nuo mygtukų. Detalę, parašytą tekstu, galima perskaityti, peržiūrėti, palyginti eilutė po eilutės ir atkurti scenarijumi. PartCraft veikia abiem kryptimis: bet kurią detalę galima užrašyti kaip scenarijų, o scenarijus sukuria detalę.

## Programoje

Skirtuke {{ui:Parametrai}}, skyriuje **Scenarijus**:

- {{ui:Išsaugoti kaip scenarijų}} atsisiunčia atvirą detalę kaip `<pavadinimas>.pcscript`.
- {{ui:Atidaryti scenarijų}} sukuria detalę iš `.pcscript` failo. Klaida pranešama su eilutės numeriu, ir nieko nepakeičiama.

## Scenarijaus formatas

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

Taisyklės:

- Eilutė kairiajame krašte pradeda teiginį: `pcscript`, `part`, `param`, elemento tipas (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` ir naujesni tipai), po kurio nurodomas jo pavadinimas, arba `rollback <feature>`.
- Įtrauktos eilutės yra eilutės virš jų nustatymai. Nustatymas, stovintis vienas (`through`, `reverse`, `suppressed`), reiškia „taip“.
- Skaitinis nustatymas yra skaičius arba `=` ir išraiška, kuri sudaro lygtį: `depth = thick`.
- Eskize: `on` nurodo plokštumą (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrija yra `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (prieš laikrodžio rodyklę) arba `spline <name> fit|control <points>`; ryšiai yra jų tipas ir pavadinimai, kuriuos jie jungia (`O` yra pradžios taškas); matmuo baigiasi reikšme arba `= išraiška`.
- Papildomi geometrijos ar ryšių eilutės nustatymai rašomi laužtiniuose skliaustuose eilutės gale, atskirti `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` pradeda komentarą (eilutės pradžioje arba po tarpo). Pavadinimai su tarpais rašomi „dvigubose kabutėse“.
- Elementų id skaičiuojami nuo f1 pagal parašymo tvarką. Briaunų ir paviršių nuorodos juos naudoja, pavyzdžiui `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Nustatymai, kuriems formatas neturi žodžių, rašomi `json` ir reikšme; jie nuskaitomi tokie, kokie yra.

Įrašytas iš programos scenarijus apima visus nustatymus, todėl jis atsidaro kaip ta pati detalė. Importuotas STEP kietasis kūnas įrašomas scenarijaus viduje, kai įrašoma iš programos, o komandinėje eilutėje – kaip atskiras `.step` failas, nurodytas per `step-file`.

## Komandinės eilutės įrankis

Įrankis veikia kompiuteryje su Node.js 24, iš CadCraft šaltinio kopijos: `node tools/partcraft-cli/partcraft.mjs <command>`. Tai kūrėjo įrankis, naudojantis tuos pačius modulius kaip programa. Detalės yra `.partcraft.json` failai arba `.pcscript` scenarijai.

| Komanda | Ką daro |
|---|---|
| `info <part>` | Elementai, parametrai, atkūrimo juosta, sukurto kietojo kūno tūris ir dydis |
| `params <part>` | Kiekvienas parametras ir lygtis su jos reikšme |
| `set <part> width=150 Base.depth==thick` | Tiesiogiai: keičia parametrus, sieja skaičius (`==` arba išraiška), nustato paprastus skaičius |
| `drive <part> Base.depth=12` | Atgal: išsprendžia parametrą, slypintį už valdomo skaičiaus (`--prefer width` pasirenka vieną) |
| `build <part> --out x.step` | Įrašo `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` arba makrokomandą (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Po vieną failą kiekvienai projektavimo lentelės eilutei |
| `variants <part> --out-dir d` arba `--zip f.zip` | Kiekviena konfigūracija kaip STEP, IFC, DWG ir peržiūra, variantų lentelė ir bibliotekos elementas (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); žr. [Sudaryti variantų paketą](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Scenarijus į detalę |
| `to-script <part> -o part.pcscript` | Detalė į scenarijų |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Perkelia atkūrimo juostą faile |
| `check <part> [--strict]` | Drausmės patikra (žemiau) |

`build` taip pat priima `--set name=value` (tik šiam kūrimui) ir `--upto <feature>`. Kiekviena komanda priima `--json`. Išėjimo kodai: 0 – viskas gerai, 1 – rasta problema, 2 – komanda įvesta klaidingai. Scenarijus niekada nepakeičiamas vietoje: nurodykite `-o`, kad įrašytumėte pakeistą kopiją.

## Patikra

`check` praneša, kas vėliau apsunkina detalės keitimą:

| Radinys | Skaičiuojamas kaip |
|---|---|
| Eskizas, kuris perteklinis (prieštaringi ar pasikartojantys ryšiai) | klaida |
| Elementas, kuris nesukuriamas | klaida |
| Parametras ar lygtis su klaida arba parametrai, kurie naudoja vienas kitą | klaida |
| Eskizas, kuris nepakankamai apibrėžtas, su jo laisvės laipsniais | įspėjimas |
| Skaičiai, įvesti tiesiai į elementus ir matmenis, kurių nevaldo joks parametras | įspėjimas |
| Parametras, kurio niekas nenaudoja | įspėjimas |
| Išjungtas elementas; atkūrimo juosta ne pabaigoje | įspėjimas |

`--strict` kiekvieną įspėjimą paverčia klaida, todėl kūrimo scenarijus gali atsisakyti detalės, kuri nėra visiškai valdoma.

:::note
`.swb` makrokomandos išvestis skirta detalių modeliavimo programai, kurią naudoja dauguma dirbtuvių: paleista toje programoje, ji sukuria detalę ten. Čia ji toje programoje nebuvo paleista (ji nepasiekiama mūsų serveriuose), todėl laikykite ją neišbandyta.
:::
