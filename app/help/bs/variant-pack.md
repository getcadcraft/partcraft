---
title: Napravi paket varijanti iz svojih konfiguracija
summary: Napravi svaku konfiguraciju dijela, ili odabrane, odjednom kao STEP, IFC, DWG i pregled za svaku, s tabelom njihovih parametara i dijelom kao jednom stavkom biblioteke s njezinim varijantama.
keywords: paket varijanti, varijante, konfiguracije, porodica dijelova, grupni izvoz, svaka veličina, step, ifc, dwg, pregled, tabela, csv, json, biblioteka, konfigurator, konfigurator proizvoda, katalog, json stavke
from: 9a6db99f
---

## Šta ćeš uraditi

Predaj **svaku veličinu dijela odjednom**: jednu STEP, IFC i DWG datoteku i sliku za svaku konfiguraciju, tabelu koja kaže šta je svaka, i stavku biblioteke koja ih sve stavlja na jednu stranicu.

Prvo ti treba dio s **konfiguracijama** (vidi [Konfiguracije i tabele dizajna](topic:design-tables)). Konfiguracija koja isključuje element, kao ploča sa i bez rupa, postaje vlastita varijanta.

## Koraci

1. Otvori dio. Na kartici {{ui:Parametri}} pronađi **Konfiguracije**.
2. Klikni {{ui:Paket varijanti…}}.
3. Označi konfiguracije za izradu (sve su označene) i datoteke za pisanje: STEP, IFC, DWG, pregled i stavku biblioteke.
4. Klikni {{ui:Napravi paket}}. Statusna linija broji varijante dok se prave; tvoj dio se ne mijenja.
5. Preuzme se jedan zip: `<part> variants.zip`.

## Šta je u zipu

| Datoteka | Šta je |
|---|---|
| `<name>.step` | Konfiguracija kao STEP čvrsto tijelo. |
| `<name>.ifc` | IFC4, jedan element s izgrađenim tijelom i parametrima dijela kao svojstvima; vrijednost je konfiguracijina vlastita. |
| `<name>.dwg` | Pogledi prednji, gornji, desni i izometrijski kao list crteža u punoj veličini. |
| `<name>.svg` | Izometrijska linijska slika. |
| `variants.csv`, `variants.json` | Tabela parametara: id, naziv i vrijednost svakog parametra za svaku varijantu, elementi koje isključuje, njene datoteke, zapremina i veličina. |
| `<part>.item.json` | Dio kao jedna stavka biblioteke s varijantama (vidi dolje). |
| `README.txt` | Šta je napravljeno, napomene ispod i šta nije izgrađeno. |

Datoteke se nazivaju po konfiguraciji. Konfiguracija koja se ne može izgraditi (element koji se ne može napraviti s tim vrijednostima) izostavlja se iz datoteka i tabele, navodi se u README-u i u poruci nakon što se zip spremi; ostale se i dalje pišu.

## Dobro je znati

- **STEP** je tačan kad je tačan kernel uključen u tvojoj verziji. Bez njega je STEP poligonalan (ravni trouglovi), a README to kaže.
- **DWG** je list crteža, a ne 3D model. Njegove linije dolaze iz mreže, pa je jedna zakrivljena ivica mnogo kratkih linija.
- **Stavka biblioteke** nosi jedno tijelo i jedan otisak po varijanti, u osama biblioteke: Z gore, prednja strana prema −Y, a tačka umetanja je na sredini zadnje strane pri dnu. Plan je pravougaonik ograničenja svake varijante. Stavka je ograničena na 8 MB, pa vrlo teška varijanta postaje kutija svoje veličine, a README kaže koliko ih ima.
- Aktivna konfiguracija dijela postaje zadana varijanta stavke.
- Portovi (tačke spajanja za cijevi i kanale) se ne postavljaju iz PartCrafta.

## Stavi varijante na stranicu biblioteke

Učitaj `<part>.item.json` na **Biblioteka › Učitaj** na sajtu. Odaberi kategoriju, licencu i svoj navod autora, i postaje stavka Biblioteke s varijantama. U BimCraftu, postavljanje pita koju varijantu, a Zamjena nudi ostale. Stranica na kojoj posjetioci biraju opcije, pregledaju 3D i preuzimaju varijantu je za sada **pregled za osoblje**: nije otvorena javnosti.

## Iz komandne linije

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` imenuje konfiguracije, `--formats` bilo koji od `step`, `ifc`, `dwg`, `preview`; `--no-item` izostavlja stavku biblioteke. Piše folder, zip ili oboje i izlazi sa 1 kad varijanta nije mogla biti izgrađena. Vidi [Skripte i komandna linija](topic:scripts-and-cli).
