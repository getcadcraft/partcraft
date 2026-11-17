---
title: Napravi paket varijanti iz tvojih konfiguracija
summary: Napravi svaku konfiguraciju dela, ili izabrane, odjednom kao STEP, IFC, DWG i pregled za svaku, sa tabelom njihovih parametara i delom kao jednom stavkom biblioteke sa varijantama.
keywords: paket varijanti, varijante, konfiguracije, porodica delova, grupni izvoz, svaka veličina, step, ifc, dwg, pregled, tabela, csv, json, biblioteka, konfigurator, konfigurator proizvoda, katalog, item json
from: 9a6db99f
---

## Šta ćeš uraditi

Isporuči **svaku veličinu dela odjednom**: jednu STEP, IFC i DWG datoteku i sliku za svaku konfiguraciju, tabelu koja kaže šta je svaka, i stavku biblioteke koja ih sve stavlja na jednu stranicu.

Treba ti deo sa **konfiguracijama** prvo (vidi [Konfiguracije i tabele dizajna](topic:design-tables)). Konfiguracija koja isključuje element, na primer ploču sa i bez rupa, postaje sopstvena varijanta.

## Koraci

1. Otvori deo. Na kartici {{ui:Parametri}} nađi **Konfiguracije**.
2. Klikni {{ui:Paket varijanti…}}.
3. Štikliraj konfiguracije za izgradnju (sve su štiklirane) i datoteke za upis: STEP, IFC, DWG, pregled i stavku biblioteke.
4. Klikni {{ui:Napravi paket}}. Statusna linija broji varijante dok se grade; tvoj deo se ne menja.
5. Jedan zip se preuzima: `<part> variants.zip`.

## Šta je u zip datoteci

| Datoteka | Šta je |
|---|---|
| `<name>.step` | Konfiguracija kao STEP čvrsto telo. |
| `<name>.ifc` | IFC4, jedan element sa izgrađenim telom i parametrima dela kao svojstvima; vrednost je te konfiguracije. |
| `<name>.dwg` | Pogled sprede, odozgo, desno i izometrija kao list crteža u punoj veličini. |
| `<name>.svg` | Izometrijska linijska slika toga. |
| `variants.csv`, `variants.json` | Tabela parametara: id, naziv i vrednost svakog parametra za svaku varijantu, elementi koje isključuje, njene datoteke, zapremina i veličina. |
| `<part>.item.json` | Deo kao jedna stavka biblioteke sa varijantama (vidi dole). |
| `README.txt` | Šta je napravljeno, napomene ispod i šta nije izgrađeno. |

Datoteke nose ime po konfiguraciji. Konfiguracija koja ne uspe da se izgradi (element koji se ne može napraviti sa tim vrednostima) izostavlja se iz datoteka i tabele, navodi se u README-u i u poruci posle čuvanja zip datoteke; ostale se i dalje upisuju.

## Dobro je znati

- **STEP** je tačan kad je tačan kernel uključen u tvojoj verziji. Bez njega je STEP facetiran (ravni trouglovi), a README to kaže.
- **DWG** je list crteža, a ne 3D model. Njegove linije dolaze iz mreže, pa je jedna zakrivljena ivica mnogo kratkih linija.
- **Stavka biblioteke** nosi jedno telo i jedan otisak po varijanti, u osama biblioteke: Z gore, prednja strana prema −Y, a tačka umetanja je na sredini zadnje strane pri dnu. Plan je pravougaonik ograničenja svake varijante. Stavka je ograničena na 8 MB, pa se vrlo teška varijanta pretvara u kutiju svoje veličine, a README kaže koliko ih je.
- Aktivna konfiguracija dela je podrazumevana varijanta stavke.
- Portovi (tačke povezivanja za cevi i kanale) ne postavljaju se iz PartCraft-a.

## Postavi varijante na stranicu biblioteke

Otpremi `<part>.item.json` na **Biblioteka › Otpremanje** na sajtu. Izaberi kategoriju, licencu i svoj tekst zasluge, i postaje stavka biblioteke sa varijantama. U BimCraft-u, kad je postaviš, pita koju varijantu, a Zameni nudi ostale. Stranica na kojoj posetioci biraju opcije, vide 3D i preuzimaju varijantu je za sada **pregled za osoblje**: još nije otvorena javnosti.

## Iz komandne linije

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` imenuje konfiguracije, `--formats` bilo koje od `step`, `ifc`, `dwg`, `preview`; `--no-item` izostavlja stavku biblioteke. Upisuje fasciklu, zip ili oboje i završava sa 1 kad varijanta ne može da se izgradi. Vidi [Skripte i komandna linija](topic:scripts-and-cli).
