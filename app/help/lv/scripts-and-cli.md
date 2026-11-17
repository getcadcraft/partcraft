---
title: Skripti un komandrinda
summary: PartCraft skriptu formāts (.pcscript), kas uzraksta visu detaļu kā lasāmu tekstu, un partcraft komandrindas rīks, kas bez ekrāna veido, maina, atgriež un pārbauda detaļas.
keywords: skripts, pcscript, teksts, komandrinda, cli, terminālis, paketes apstrāde, automatizēt, pārbaudīt, lint, veidot, eksportēt, versiju kontrole, atšķirības, parametriskais skripts
from: c56df222
---

Rūpīga modelēšana ir vairāk disciplīna nekā pogas. Detaļu, kas uzrakstīta kā teksts, var lasīt, pārskatīt, salīdzināt rindu pa rindai un atjaunot ar skriptu. PartCraft darbojas abos virzienos: jebkuru detaļu var uzrakstīt kā skriptu, un skripts veido detaļu.

## Lietotnē

Cilnē {{ui:Parametri}} zem **Skripts**:

- {{ui:Saglabāt kā skriptu}} lejupielādē atvērto detaļu kā `<name>.pcscript`.
- {{ui:Atvērt skriptu}} veido detaļu no `.pcscript` faila. Kļūda tiek ziņota ar tās rindas numuru, un nekas netiek aizstāts.

## Skripta formāts

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

Noteikumi:

- Rinda, kas sākas kreisajā malā, sāk priekšrakstu: `pcscript`, `part`, `param`, elementa tips (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` un jaunākie tipi), kam seko tā nosaukums, vai `rollback <feature>`.
- Ievilktās rindas ir augstāk esošā priekšraksta iestatījumi. Iestatījums bez vērtības (`through`, `reverse`, `suppressed`) nozīmē jā.
- Skaitļa iestatījums ir skaitlis vai `=` un izteiksme, kas veido vienādojumu: `depth = thick`.
- Skicē `on` norāda plakni (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); ģeometrija ir `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (pretēji pulksteņrādītāja virzienam) vai `spline <name> fit|control <points>`; sakarības ir to tips un nosaukumi, ko tās savieno (`O` ir sākumpunkts); izmērs beidzas ar savu vērtību vai `= expression`.
- Ģeometrijas vai sakarību rindas papildu iestatījumi tiek likti kvadrātiekavās rindas beigās, atdalīti ar `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` sāk komentāru (rindas sākumā vai pēc atstarpes). Nosaukumi ar atstarpēm tiek likti "dubultpēdiņās".
- Elementu ID skaita no f1 rakstīšanas secībā. Malu un virsmu atsauces tos izmanto, piemēram, `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Iestatījumus, kam formātam nav vārdu, raksta kā `json` un vērtību; tie tiek nolasīti tādi, kādi ir.

Saglabāts no lietotnes, skripts ietver katru iestatījumu, tāpēc to atver kā to pašu detaļu. Importēta STEP cietviela no lietotnes tiek rakstīta skripta iekšienē, bet no komandrindas – kā atsevišķs `.step` fails, kura nosaukumu nosaka `step-file`.

## Komandrindas rīks

Rīks darbojas datorā ar Node.js 24 no CadCraft pirmkoda kopijas: `node tools/partcraft-cli/partcraft.mjs <command>`. Tas ir izstrādātāju rīks un izmanto tos pašus moduļus kā lietotne. Detaļas ir `.partcraft.json` faili vai `.pcscript` skripti.

| Komanda | Ko tā dara |
|---|---|
| `info <part>` | Elementi, parametri, atgriešanās josla, izveidotās cietvielas tilpums un izmērs |
| `params <part>` | Katrs parametrs un vienādojums ar savu vērtību |
| `set <part> width=150 Base.depth==thick` | Uz priekšu: maina parametrus, saista skaitļus (`==` vai izteiksme), iestata vienkāršus skaitļus |
| `drive <part> Base.depth=12` | Atpakaļ: atrisina parametru aiz vadāma skaitļa (`--prefer width` izvēlas vienu) |
| `build <part> --out x.step` | Raksta `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` vai makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Viens fails katrai konstrukcijas tabulas rindai |
| `variants <part> --out-dir d` vai `--zip f.zip` | Katra konfigurācija kā STEP, IFC, DWG un priekšskatījums, variantu tabula un bibliotēkas vienība (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); skatiet [Veidot variantu paku](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | No skripta uz detaļu |
| `to-script <part> -o part.pcscript` | No detaļas uz skriptu |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Pārvieto atgriešanās joslu failā |
| `check <part> [--strict]` | Disciplīnas pārbaude (zemāk) |

`build` pieņem arī `--set name=value` (tikai šai veidošanai) un `--upto <feature>`. Katra komanda pieņem `--json`. Izejas kodi: 0 – viss kārtībā, 1 – atrasta problēma, 2 – komanda ierakstīta nepareizi. Skripts nekad netiek pārrakstīts vietā: lai saglabātu izmainītu kopiju, norādiet `-o`.

## Pārbaude

`check` ziņo par to, kas vēlāk padara detaļu grūti mainīt:

| Atradums | Skaitās kā |
|---|---|
| Skice, kas ir pārmērīgi definēta (pretrunīgas vai atkārtotas sakarības) | kļūda |
| Elements, ko nevar izveidot | kļūda |
| Parametrs vai vienādojums ar kļūdu, vai parametri, kas viens otru izmanto | kļūda |
| Skice, kas ir nepietiekami definēta, ar tās brīvības pakāpēm | brīdinājums |
| Skaitļi, kas ierakstīti tieši elementos un izmēros, ko neviens parametrs nevada | brīdinājums |
| Parametrs, ko nekas neizmanto | brīdinājums |
| Izslēgts elements; atgriešanās josla nav beigās | brīdinājums |

`--strict` padara katru brīdinājumu par kļūdu, tāpēc veidošanas skripts var noraidīt detaļu, kas nav pilnībā vadāma.

:::note
`.swb` makro izvade ir paredzēta detaļu modelētājam, ko izmanto vairums darbnīcu: palaists tā programmā, tas tur veido detaļu. Šeit to šajā programmā nav palaists (tā nav pieejama mūsu serveros), tāpēc uzskatiet to par nepārbaudītu.
:::
