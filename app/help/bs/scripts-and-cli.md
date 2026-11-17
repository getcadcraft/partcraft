---
title: Skripte i komandna linija
summary: Format PartCraft skripti (.pcscript) koji zapisuje cijeli dio kao čitljiv tekst, i alat komandne linije partcraft koji gradi, mijenja, vraća unazad i provjerava dijelove bez ekrana.
keywords: skripta, pcscript, tekst, komandna linija, cli, terminal, serija, automatizacija, provjera, lint, izgradnja, izvoz, kontrola verzija, razlika, parametarska skripta
from: c56df222
---

Pažljivo modeliranje više zavisi od discipline nego od dugmadi. Dio zapisan kao tekst može se čitati, pregledati, upoređivati red po red i ponovo izgraditi skriptom. PartCraft ide u oba smjera: svaki dio može se zapisati kao skripta, a skripta gradi dio.

## U aplikaciji

Na kartici {{ui:Parametri}}, pod **Skripta**:

- {{ui:Spasi kao skriptu}} preuzima otvoreni dio kao `<naziv>.pcscript`.
- {{ui:Otvori skriptu}} gradi dio iz datoteke `.pcscript`. Greška se prijavljuje s brojem reda i ništa se ne mijenja.

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

- Red na lijevom rubu započinje iskaz: `pcscript`, `part`, `param`, vrsta značajke (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` i novije vrste) praćena svojim imenom, ili `rollback <značajka>`.
- Uvučeni redovi su postavke iskaza iznad. Postavka sama za sebe (`through`, `reverse`, `suppressed`) znači da.
- Postavka broja je broj, ili `=` i izraz, što pravi jednadžbu: `depth = thick`.
- U skici: `on` imenuje ravninu (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrija je `point <naziv> x, y`, `line <naziv> <tačka> <tačka>`, `circle <naziv> <centar> <poluprečnik>`, `arc <naziv> <centar> <početak> <kraj>` (suprotno kazaljci na satu) ili `spline <naziv> fit|control <tačke>`; relacije su njihova vrsta i imena koja spajaju (`O` je ishodište); kota se završava vrijednošću ili `= izraz`.
- Opcione postavke geometrije ili relacije idu u uglaste zagrade na kraju, odvojene s `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` počinje komentar (na početku reda ili nakon razmaka). Imena s razmacima idu u "dvostruke navodnike".
- Brojevi značajki počinju od f1, redom kojim su zapisani. Reference na ivice i površi koriste ih, na primjer `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Postavke za koje format nema riječi pišu se kao `json` i vrijednost; čitaju se nazad kakve jesu.

Kada se spasi iz aplikacije, skripta uključuje svaku postavku, pa se otvara kao isti dio. Uvezeni STEP solid zapisuje se unutar skripte iz aplikacije, a iz komandne linije kao zasebna `.step` datoteka imenovana preko `step-file`.

## Alat komandne linije

Alat radi na računaru s Node.js 24, iz kopije izvornog koda CadCraft: `node tools/partcraft-cli/partcraft.mjs <command>`. To je alat za programere i koristi iste module kao aplikacija. Dijelovi su datoteke `.partcraft.json` ili skripte `.pcscript`.

| Komanda | Šta radi |
|---|---|
| `info <part>` | Značajke, parametri, traka vraćanja, zapremina i veličina izgrađenog solida |
| `params <part>` | Svaki parametar i jednadžba s vrijednošću |
| `set <part> width=150 Base.depth==thick` | Naprijed: mijenja parametre, povezuje brojeve (`==` ili izraz), postavlja obične brojeve |
| `drive <part> Base.depth=12` | Unazad: rješava parametar iza upravljanog broja (`--prefer width` bira jedan) |
| `build <part> --out x.step` | Piše `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ili makro (`.swb`) |
| `build <part> --table sizes.csv --out-dir sizes` | Jedna datoteka po redu tabele dizajna |
| `variants <part> --out-dir d` ili `--zip f.zip` | Svaka konfiguracija kao STEP, IFC, DWG i pregled, tabela varijanti i stavka biblioteke (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); vidi [Napravite paket varijanti](topic:variant-pack) |
| `script <in.pcscript> -o part.json` | Skripta u dio |
| `to-script <part> -o part.pcscript` | Dio u skriptu |
| `rollback <part> [<feature>]`, `forward <part> [--end]` | Pomjera traku vraćanja u datoteci |
| `check <part> [--strict]` | Provjera discipline (dolje) |

`build` također prima `--set name=value` (samo za ovu izgradnju) i `--upto <feature>`. Svaka komanda prima `--json`. Izlazni kodovi: 0 u redu, 1 pronađen problem, 2 komanda pogrešno unesena. Skripta se nikada ne prepisuje na mjestu: navedite `-o` da sačuvate izmijenjenu kopiju.

## Provjera

`check` prijavljuje šta dio čini teškim za kasniju izmjenu:

| Nalaz | Računa se kao |
|---|---|
| Skica koja je prekomjerno definisana (sukobljene ili ponovljene relacije) | greška |
| Značajka koja se ne može izgraditi | greška |
| Parametar ili jednadžba s greškom, ili parametri koji se međusobno koriste | greška |
| Skica koja je nedovoljno definisana, sa svojim stepenima slobode | upozorenje |
| Brojevi unijeti direktno u značajke i kote koje nijedan parametar ne upravlja | upozorenje |
| Parametar koji ništa ne koristi | upozorenje |
| Potisnuta značajka; traka vraćanja nije na kraju | upozorenje |

`--strict` pretvara svako upozorenje u grešku, pa skripta izgradnje može odbiti dio koji nije potpuno upravljan.

:::note
Izlaz makroa `.swb` namijenjen je modelaru dijelova kojeg koristi većina radionica: pokrenut unutar tog programa, gradi dio tamo. Ovdje nije pokrenut u tom programu (nije dostupan na našim serverima), pa ga smatrajte neprovjerenim.
:::
