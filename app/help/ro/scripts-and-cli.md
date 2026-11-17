---
title: Scripturi și linia de comandă
summary: Formatul de script PartCraft (.pcscript), care scrie o piesă întreagă ca text citibil, și instrumentul de linie de comandă partcraft, care construiește, modifică, revine și verifică piese fără ecran.
keywords: script, pcscript, text, linie de comandă, cli, terminal, lot, automatizare, verificare, lint, construire, export, control al versiunilor, diff, script parametric
from: c56df222
---

Modelarea atentă ține mai mult de disciplină decât de butoane. O piesă scrisă ca text poate fi citită, verificată, comparată linie cu linie și reconstruită printr-un script. PartCraft merge în ambele direcții: orice piesă poate fi scrisă ca script, iar un script construiește piesa.

## În aplicație

În fila {{ui:Parametri}}, sub **Script**:

- {{ui:Salvare ca script}} descarcă piesa deschisă ca `<nume>.pcscript`.
- {{ui:Deschidere script}} construiește o piesă dintr-un fișier `.pcscript`. O greșeală este raportată cu numărul liniei sale și nimic nu este înlocuit.

## Formatul scriptului

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

Regulile:

- O linie din marginea stângă începe o instrucțiune: `pcscript`, `part`, `param`, un tip de operație (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` și tipurile mai noi) urmat de numele său sau `rollback <operație>`.
- Liniile indentate sunt setările instrucțiunii de deasupra. O setare de sine stătătoare (`through`, `reverse`, `suppressed`) înseamnă da.
- O setare numerică este un număr sau `=` și o expresie, care face o ecuație: `depth = thick`.
- Într-o schiță: `on` numește planul (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometria este `point <nume> x, y`, `line <nume> <punct> <punct>`, `circle <nume> <centru> <rază>`, `arc <nume> <centru> <start> <sfârșit>` (în sens trigonometric) sau `spline <nume> fit|control <puncte>`; relațiile sunt tipul lor și numele pe care le leagă (`O` este originea); o cotă se termină cu valoarea sa sau cu `= expresie`.
- Setările opționale ale unei linii de geometrie sau de relație merg între paranteze pătrate la sfârșit, separate prin `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` începe un comentariu (la începutul unei linii sau după un spațiu). Numele cu spații merg între „ghilimele duble”.
- Identificatorii operațiilor se numără din f1 în ordinea scrierii. Referințele la muchii și fețe îi folosesc, de exemplu `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Setările pentru care formatul nu are cuvinte se scriu `json` și o valoare; sunt citite înapoi așa cum sunt.

Salvat din aplicație, scriptul include fiecare setare, așa că se deschide ca aceeași piesă. Un corp solid STEP importat este scris în interiorul scriptului din aplicație și ca fișier `.step` separat, numit prin `step-file`, din linia de comandă.

## Instrumentul de linie de comandă

Instrumentul rulează pe un calculator cu Node.js 24, dintr-o copie a codului sursă CadCraft: `node tools/partcraft-cli/partcraft.mjs <comandă>`. Este un instrument pentru dezvoltatori și folosește aceleași module ca aplicația. Piesele sunt fișiere `.partcraft.json` sau scripturi `.pcscript`.

| Comandă | Ce face |
|---|---|
| `info <piesă>` | Operații, parametri, bara de revenire, volumul și dimensiunea corpului construit |
| `params <piesă>` | Fiecare parametru și ecuație cu valoarea sa |
| `set <piesă> width=150 Base.depth==thick` | Înainte: schimbă parametri, leagă numere (`==` sau o expresie), setează numere simple |
| `drive <piesă> Base.depth=12` | Înapoi: rezolvă parametrul din spatele unei cote conduse (`--prefer width` alege unul) |
| `build <piesă> --out x.step` | Scrie `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` sau o macro (`.swb`) |
| `build <piesă> --table sizes.csv --out-dir sizes` | Un fișier pentru fiecare rând al tabelului de proiectare |
| `variants <piesă> --out-dir d` sau `--zip f.zip` | Fiecare configurație ca STEP, IFC, DWG și o previzualizare, un tabel de variante și un element de bibliotecă (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vezi [Crearea unui pachet de variante](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Script în piesă |
| `to-script <piesă> -o part.pcscript` | Piesă în script |
| `rollback <piesă> [<operație>]`, `forward <piesă> [--end]` | Mută bara de revenire în fișier |
| `check <piesă> [--strict]` | Verificarea disciplinei (mai jos) |

`build` acceptă și `--set nume=valoare` (doar pentru această construcție) și `--upto <operație>`. Fiecare comandă acceptă `--json`. Coduri de ieșire: 0 în regulă, 1 a fost găsită o problemă, 2 comanda a fost tastată greșit. Un script nu este rescris niciodată pe loc: dați `-o` ca să salvați o copie modificată.

## Verificarea

`check` raportează ce face o piesă greu de modificat mai târziu:

| Constatare | Se numără ca |
|---|---|
| O schiță supradefinită (relații contradictorii sau repetate) | eroare |
| O operație care nu se construiește | eroare |
| Un parametru sau o ecuație cu o eroare sau parametri care se folosesc unul pe altul | eroare |
| O schiță subdefinită, cu gradele sale de libertate | avertisment |
| Numere scrise direct în operații și cote pe care niciun parametru nu le conduce | avertisment |
| Un parametru pe care nimic nu-l folosește | avertisment |
| O operație suprimată; bara de revenire care nu este la sfârșit | avertisment |

`--strict` transformă fiecare avertisment într-o eroare, așa că un script de construire poate refuza o piesă care nu este complet condusă.

:::note
Ieșirea macro `.swb` este pentru modelatorul de piese folosit de majoritatea atelierelor: rulată în acel program, construiește piesa acolo. Nu a fost rulată în acel program aici (nu este disponibilă pe serverele noastre), așa că tratați-o ca netestată.
:::
