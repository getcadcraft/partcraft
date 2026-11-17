---
title: Izrada paketa varijanti iz vaših konfiguracija
summary: Izradite svaku konfiguraciju dijela, ili odabrane, odjednom kao STEP, IFC, DWG i pregled za svaku, s tablicom njihovih parametara i dijelom kao jednom stavkom knjižnice s varijantama.
keywords: paket varijanti, varijante, konfiguracije, obitelj dijelova, skupni izvoz, svaka veličina, step, ifc, dwg, pregled, tablica, csv, json, knjižnica, konfigurator, konfigurator proizvoda, katalog, json stavke
from: 9a6db99f
---

## Što ćete napraviti

Predajte **sve veličine dijela odjednom**: jednu STEP, IFC i DWG datoteku te sliku za svaku konfiguraciju, tablicu koja kaže što je svaka, i stavku knjižnice koja ih sve stavlja na jednu stranicu.

Najprije vam treba dio s **konfiguracijama** (vidi [Konfiguracije i tablice dizajna](topic:design-tables)). Konfiguracija koja isključuje značajku, poput ploče s provrtima i bez njih, postaje vlastita varijanta.

## Koraci

1. Otvorite dio. Na kartici {{ui:Parametri}} pronađite **Konfiguracije**.
2. Kliknite {{ui:Paket varijanti…}}.
3. Označite konfiguracije za izradu (sve su označene) i datoteke za zapisivanje: STEP, IFC, DWG, pregled i stavku knjižnice.
4. Kliknite {{ui:Napravi paket}}. Statusna linija broji varijante dok se izrađuju; vaš dio se ne mijenja.
5. Preuzima se jedna zip datoteka: `<part> variants.zip`.

## Što je u zip datoteci

| Datoteka | Što je |
|---|---|
| `<name>.step` | Konfiguracija kao STEP tijelo. |
| `<name>.ifc` | IFC4, jedan element s izgrađenim tijelom i parametrima dijela kao svojstvima; vrijednost je vlastita za tu konfiguraciju. |
| `<name>.dwg` | Prednji, gornji, desni i izometrijski pogled kao list crteža u punoj veličini. |
| `<name>.svg` | Izometrijska linijska slika konfiguracije. |
| `variants.csv`, `variants.json` | Tablica parametara: id, naziv i vrijednost svakog parametra za svaku varijantu, značajke koje isključuje, njezine datoteke, volumen i veličinu. |
| `<part>.item.json` | Dio kao jedna stavka knjižnice s njezinim varijantama (vidi dolje). |
| `README.txt` | Što je izrađeno, bilješke u nastavku i sve što nije izgrađeno. |

Datoteke se imenuju prema konfiguraciji. Konfiguracija koju nije moguće izraditi (značajka koja se ne može napraviti s tim vrijednostima) izostavlja se iz datoteka i tablice, navodi se u README-u i u poruci nakon što se zip spremi; ostale se i dalje zapisuju.

## Dobro je znati

- **STEP** je točan kad je točna jezgra uključena u vašu verziju. Bez nje je STEP stranični (ravni trokuti), a README to navodi.
- **DWG** je list crteža, a ne 3D model. Njegove linije dolaze iz mreže, pa je zakrivljeni brid mnogo kratkih linija.
- **Stavka knjižnice** nosi jedno tijelo i jedan tlocrt po varijanti, u osima knjižnice: Z prema gore, prednja strana prema −Y, a točka umetanja na sredini stražnje strane pri dnu. Tlocrt je ograničavajući pravokutnik svake varijante. Stavka je ograničena na 8 MB, pa se vrlo teška varijanta pretvara u kutiju svoje veličine, a README navodi koliko ih je.
- Aktivna konfiguracija dijela je zadana varijanta stavke.
- Priključci (točke spajanja za cijevi i kanale) ne postavljaju se iz PartCraft-a.

## Postavite varijante na stranicu knjižnice

Učitajte `<part>.item.json` na **Knjižnica › Učitaj** na stranici. Odaberite njezinu kategoriju, licencu i svoj navod autora, i postat će stavka knjižnice s varijantama. U BimCraft-u, pri postavljanju pita koju varijantu, a Zamijeni nudi ostale. Stranica na kojoj posjetitelji biraju opcije, pregledavaju 3D i preuzimaju varijantu je zasad **pregled za osoblje**: još nije otvorena javnosti.

## Iz naredbenog retka

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` navodi konfiguracije, `--formats` bilo koje od `step`, `ifc`, `dwg`, `preview`; `--no-item` izostavlja stavku knjižnice. Zapisuje mapu, zip ili oboje i završava s 1 kad varijanta nije mogla biti izrađena. Vidi [Skripte i naredbeni redak](topic:scripts-and-cli).
