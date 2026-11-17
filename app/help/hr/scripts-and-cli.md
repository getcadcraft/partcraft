---
title: Skripte i naredbeni redak
summary: Format PartCraft skripte (.pcscript) koji zapisuje cijeli dio kao čitljiv tekst te alat naredbenog retka partcraft koji gradi, mijenja, vraća i provjerava dijelove bez zaslona.
keywords: skripta, pcscript, tekst, naredbeni redak, cli, terminal, serija, automatiziraj, provjeri, lint, gradnja, izvoz, kontrola verzija, razlika, parametarska skripta
from: c56df222
---

Pažljivo modeliranje više ovisi o disciplini nego o gumbima. Dio zapisan kao tekst može se čitati, pregledavati, uspoređivati redak po redak i ponovno izgraditi skriptom. PartCraft radi u oba smjera: svaki dio može se zapisati kao skripta, a skripta gradi dio.

## U aplikaciji

Na kartici {{ui:Parametri}}, pod **Skripta**:

- {{ui:Spremi kao skriptu}} preuzima otvoreni dio kao `<naziv>.pcscript`.
- {{ui:Otvori skriptu}} gradi dio iz datoteke `.pcscript`. Pogreška se prijavljuje s brojem retka, a ništa se ne zamjenjuje.

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

- Redak uz lijevi rub započinje naredbu: `pcscript`, `part`, `param`, vrsta značajke (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` i novije vrste) nakon koje slijedi njezin naziv, ili `rollback <feature>`.
- Uvučeni redci su postavke naredbe iznad. Postavka sama za sebe (`through`, `reverse`, `suppressed`) znači da.
- Postavka broja je broj ili `=` i izraz, što stvara jednadžbu: `depth = thick`.
- U skici: `on` imenuje ravninu (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrija je `point <name> x, y`, `line <name> <point> <point>`, `circle <name> <centre> <radius>`, `arc <name> <centre> <start> <end>` (suprotno smjeru kazaljke na satu) ili `spline <name> fit|control <points>`; ograničenja su njihova vrsta i nazivi koje povezuju (`O` je ishodište); kota završava vrijednošću ili `= expression`.
- Izborne postavke retka geometrije ili ograničenja stavljaju se na kraj u uglate zagrade, odvojene s `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` započinje komentar (na početku retka ili nakon razmaka). Nazivi s razmacima stavljaju se u „dvostruke navodnike”.
- Oznake značajki broje se od f1 redoslijedom kojim su napisane. Reference na brid i plohu koriste ih, na primjer `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Postavke za koje format nema riječi zapisuju se kao `json` i vrijednost; čitaju se natrag onakve kakve jesu.

Spremljena iz aplikacije, skripta sadrži svaku postavku pa se otvara kao isti dio. Uvezeno STEP tijelo zapisuje se unutar skripte iz aplikacije, a iz naredbenog retka kao zasebna datoteka `.step` čiji je naziv određen s `step-file`.

## Alat naredbenog retka

Alat radi na računalu s Node.js 24, iz kopije izvornog koda programa CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. Riječ je o alatu za programere koji koristi iste module kao aplikacija. Dijelovi su datoteke `.partcraft.json` ili skripte `.pcscript`.

| Naredba | Što radi |
|---|---|
| `info <part>` | Značajke, parametri, traka vraćanja, volumen i veličina izgrađenog tijela |
| `params <part>` | Svaki parametar i jednadžba s vrijednošću |
| `set <part> width=150 Base.depth==thick` | Naprijed: mijenja parametre, povezuje brojeve (`==` ili izraz), postavlja obične brojeve |
| `drive <part> Base.depth=12` | Unatrag: rješava parametar iza izvedenog broja (`--prefer width` odabire jedan) |
| `build <part> --out x.step` | Zapisuje `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ili makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Jedna datoteka po retku tablice konfiguracija |
| `variants <part> --out-dir d` ili `--zip f.zip` | Svaka konfiguracija kao STEP, IFC, DWG i pregled, tablica varijanti i stavka knjižnice (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); pogledajte [Izrada paketa varijanti](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skripta u dio |
| `to-script <part> -o part.pcscript` | Dio u skriptu |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Pomiče traku vraćanja u datoteci |
| `check <part> [--strict]` | Provjera pravilnosti modeliranja (u nastavku) |

`build` prima i `--set name=value` (samo za ovu gradnju) i `--upto <feature>`. Svaka naredba prima `--json`. Izlazni kodovi: 0 u redu, 1 pronađen je problem, 2 naredba je pogrešno upisana. Skripta se nikada ne prepisuje na mjestu: za spremanje izmijenjene kopije navedite `-o`.

## Provjera

`check` izvještava što otežava kasnije mijenjanje dijela:

| Nalaz | Vrijedi kao |
|---|---|
| Skica koja je prekomjerno definirana (proturječna ili ponovljena ograničenja) | pogreška |
| Značajka koja se ne može izgraditi | pogreška |
| Parametar ili jednadžba s pogreškom, ili parametri koji se međusobno koriste | pogreška |
| Skica koja je nedovoljno definirana, sa svojim stupnjevima slobode | upozorenje |
| Brojevi upisani izravno u značajke i kote koje nijedan parametar ne pogoni | upozorenje |
| Parametar koji se nigdje ne koristi | upozorenje |
| Potisnuta značajka; traka vraćanja nije na kraju | upozorenje |

`--strict` pretvara svako upozorenje u pogrešku, pa skripta za gradnju može odbiti dio koji nije u potpunosti određen parametrima.

:::note
Izlaz makroa `.swb` namijenjen je modelarskom programu koji koristi većina radionica: pokrenut unutar tog programa, gradi dio tamo. Ovdje u tom programu nije pokrenut (nije dostupan na našim poslužiteljima), zato ga smatrajte neispitanim.
:::
