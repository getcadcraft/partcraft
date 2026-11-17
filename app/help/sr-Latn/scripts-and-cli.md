---
title: Skripte i komandna linija
summary: Format PartCraft skripte (.pcscript) koji upisuje ceo deo kao čitljiv tekst, i alat komandne linije partcraft koji pravi, menja, vraća unazad i proverava delove bez ekrana.
keywords: skripta, pcscript, tekst, komandna linija, cli, terminal, serija, automatizacija, provera, lint, izgradnja, izvoz, kontrola verzija, razlika, parametarska skripta
from: c56df222
---

Pažljivo modelovanje više zavisi od discipline nego od dugmića. Deo napisan kao tekst može se pročitati, pregledati, uporediti red po red i ponovo izgraditi skriptom. PartCraft radi u oba smera: svaki deo može se napisati kao skripta, a skripta gradi deo.

## U aplikaciji

Na kartici {{ui:Parametri}}, pod **Skripta**:

- {{ui:Sačuvaj kao skriptu}} preuzima otvoreni deo kao `<ime>.pcscript`.
- {{ui:Otvori skriptu}} gradi deo iz datoteke `.pcscript`. Greška se prijavljuje sa brojem reda, i ništa se ne zamenjuje.

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

- Red uz levu ivicu počinje iskaz: `pcscript`, `part`, `param`, tip elementa (`sketch`, `extrude`, `revolve`, `hole`, `lpattern`, `cpattern`, `mirror`, `fillet`, `chamfer`, `shell`, `import` i noviji tipovi) iza kojeg sledi ime, ili `rollback <element>`.
- Uvučeni redovi su podešavanja iskaza iznad. Podešavanje samo za sebe (`through`, `reverse`, `suppressed`) znači da.
- Numeričko podešavanje je broj, ili `=` i izraz, što pravi jednačinu: `depth = thick`.
- U skici: `on` imenuje ravan (`front`, `top`, `right`, `face Base end`, `face Revolve1 side l3`); geometrija je `point <ime> x, y`, `line <ime> <tačka> <tačka>`, `circle <ime> <centar> <poluprečnik>`, `arc <ime> <centar> <početak> <kraj>` (suprotno od kretanja kazaljke na satu) ili `spline <ime> fit|control <tačke>`; relacije su njihov tip i imena koja povezuju (`O` je koordinatni početak); kota se završava vrednošću ili `= izraz`.
- Opciona podešavanja geometrije ili relacije idu u uglaste zagrade na kraju, odvojena sa `;`: `[construction]`, `[side -1; label 5, 3]`.
- `#` počinje komentar (na početku reda ili posle razmaka). Imena sa razmacima idu pod dvostrukim navodnicima.
- Brojevi identifikatora elemenata broje se od f1 po redosledu kojim su upisani. Reference na ivice i strane koriste ih, na primer `edge f2.side:l3 f2.end [at 50, 0, 10]`.
- Podešavanja za koja format nema reči pišu se kao `json` i vrednost; čitaju se nazad onako kako su napisana.

Sačuvana iz aplikacije, skripta uključuje svako podešavanje, pa se otvara kao isti deo. Uvezeno STEP telo se iz aplikacije upisuje unutar skripte, a iz komandne linije kao zasebna `.step` datoteka imenovana preko `step-file`.

## Alat komandne linije

Alat radi na računaru sa Node.js 24, iz kopije izvornog koda CadCraft-a: `node tools/partcraft-cli/partcraft.mjs <komanda>`. To je alat za programere i koristi iste module kao aplikacija. Delovi su datoteke `.partcraft.json` ili skripte `.pcscript`.

| Komanda | Šta radi |
|---|---|
| `info <deo>` | Elementi, parametri, traka vraćanja, zapremina i veličina izgrađenog tela |
| `params <deo>` | Svaki parametar i jednačina sa vrednošću |
| `set <deo> width=150 Base.depth==thick` | Unapred: menja parametre, povezuje brojeve (`==` ili izraz), postavlja obične brojeve |
| `drive <deo> Base.depth=12` | Unazad: rešava parametar iza upravljanog broja (`--prefer width` bira jedan) |
| `build <deo> --out x.step` | Piše `.step`, `.stl`, `.3mf`, `.json`, `.pcscript` ili makro (`.swb`) |
| `build <deo> --table sizes.csv --out-dir sizes` | Jedna datoteka po redu tabele dizajna |
| `variants <deo> --out-dir d` ili `--zip f.zip` | Svaka konfiguracija kao STEP, IFC, DWG i pregled, tabela varijanti i stavka biblioteke (`--only "A,B"`, `--formats step,ifc,dwg,preview`, `--no-item`); pogledajte [Napravite paket varijanti](topic:variant-pack) |
| `script <ulaz.pcscript> -o part.json` | Skripta u deo |
| `to-script <deo> -o part.pcscript` | Deo u skriptu |
| `rollback <deo> [<element>]`, `forward <deo> [--end]` | Pomera traku vraćanja u datoteci |
| `check <deo> [--strict]` | Provera discipline (ispod) |

`build` takođe prima `--set name=value` (samo za ovu izgradnju) i `--upto <element>`. Svaka komanda prima `--json`. Izlazni kodovi: 0 u redu, 1 nađen problem, 2 komanda pogrešno otkucana. Skripta se nikada ne prepisuje na mestu: navedite `-o` da sačuvate izmenjenu kopiju.

## Provera

`check` prijavljuje šta deo čini teškim za kasniju izmenu:

| Nalaz | Računa se kao |
|---|---|
| Skica koja je prekomerno definisana (sukobljene ili ponovljene relacije) | greška |
| Element koji se ne gradi | greška |
| Parametar ili jednačina sa greškom, ili parametri koji se međusobno koriste | greška |
| Skica koja je nedovoljno definisana, sa svojim stepenima slobode | upozorenje |
| Brojevi ukucani direktno u elemente i kote koje nijedan parametar ne upravlja | upozorenje |
| Parametar koji se nigde ne koristi | upozorenje |
| Potisnut element; traka vraćanja nije na kraju | upozorenje |

`--strict` pretvara svako upozorenje u grešku, pa skripta za izgradnju može odbiti deo koji nije potpuno upravljan.

:::note
Izlaz makroa `.swb` namenjen je modelaru delova koji većina radionica koristi: pokrenut unutar tog programa, gradi deo tamo. Ovde nije pokrenut u tom programu (nije dostupan na našim serverima), pa ga smatrajte neproverenim.
:::
