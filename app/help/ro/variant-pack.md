---
title: Crearea unui pachet de variante din configurații
summary: Construiește dintr-o dată fiecare configurație a unei piese, sau câteva alese, ca STEP, IFC, DWG și câte o previzualizare, cu un tabel al parametrilor lor și piesa ca un singur element de bibliotecă cu variantele sale.
keywords: pachet de variante, variante, configurații, familie de piese, export în lot, fiecare dimensiune, step, ifc, dwg, previzualizare, tabel, csv, json, bibliotecă, configurator, configurator de produs, catalog, json element
from: 9a6db99f
---

## Ce veți face

Livrați **toate dimensiunile unei piese deodată**: câte un fișier STEP, IFC și DWG și o imagine pentru fiecare configurație, un tabel care arată ce este fiecare și un element de bibliotecă ce pune toate pe o singură pagină.

Aveți nevoie mai întâi de o piesă cu **configurații** (vezi [Configurații și tabele de proiectare](topic:design-tables)). O configurație care dezactivează o funcție, cum ar fi o placă cu și fără găuri, devine o variantă proprie.

## Pași

1. Deschideți piesa. Pe fila {{ui:Parametri}}, găsiți **Configurații**.
2. Faceți clic pe {{ui:Pachet de variante…}}.
3. Bifați configurațiile de construit (toate sunt bifate) și fișierele de scris: STEP, IFC, DWG, o previzualizare și elementul de bibliotecă.
4. Faceți clic pe {{ui:Creare pachet}}. Linia de stare numără variantele pe măsură ce sunt construite; piesa nu se schimbă.
5. Se descarcă o arhivă zip: `<part> variants.zip`.

## Ce conține arhiva

| Fișier | Ce este |
|---|---|
| `<name>.step` | Configurația ca solid STEP. |
| `<name>.ifc` | IFC4, un element cu corpul construit și parametrii piesei ca proprietăți; valoarea este cea proprie configurației. |
| `<name>.dwg` | Vederile din față, de sus, din dreapta și izometrică, ca foaie de desen la dimensiune reală. |
| `<name>.svg` | O imagine izometrică cu linii a configurației. |
| `variants.csv`, `variants.json` | Tabelul parametrilor: id-ul, numele și valoarea fiecărui parametru pentru fiecare variantă, funcțiile pe care le dezactivează, fișierele ei, volumul și dimensiunea. |
| `<part>.item.json` | Piesa ca un singur element de bibliotecă cu variantele sale (vezi mai jos). |
| `README.txt` | Ce s-a făcut, notele de mai jos și ce nu a fost construit. |

Fișierele poartă numele configurației. O configurație care nu se poate construi (o funcție care nu poate fi făcută cu acele valori) este lăsată din fișiere și din tabel, trecută în README și într-un mesaj după salvarea arhivei; celelalte sunt scrise oricum.

## De reținut

- **STEP** este exact când nucleul exact este activat în versiunea folosită. Fără el, STEP este cu fațete (triunghiuri plane), iar README spune asta.
- **DWG** este foaia de desen, nu un model 3D. Liniile vin din plasă (mesh), așa că o muchie curbă devine multe linii scurte.
- **Elementul de bibliotecă** conține un corp și o amprentă pentru fiecare variantă, în axele bibliotecii: Z în sus, fața spre −Y, iar punctul de inserare la mijlocul spatelui, jos. Planul este dreptunghiul de încadrare al fiecărei variante. Un element este limitat la 8 MB, așa că o variantă foarte grea devine o cutie de dimensiunea ei, iar README spune câte sunt.
- Configurația activă a piesei devine varianta implicită a elementului.
- Porturile (puncte de conectare pentru țevi și conducte) nu se setează din PartCraft.

## Puneți variantele pe o pagină de bibliotecă

Încărcați `<part>.item.json` la **Bibliotecă › Încărcare** pe site. Alegeți categoria, licența și linia de atribuire, iar el devine un element de bibliotecă cu variantele sale. În BimCraft, la plasare se întreabă ce variantă, iar Schimbare oferă celelalte. Pagina în care vizitatorii aleg opțiunile, văd 3D-ul și descarcă o variantă este, deocamdată, o **previzualizare pentru personal**: nu este deschisă publicului încă.

## Din linia de comandă

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` numește configurațiile, `--formats` acceptă oricare dintre `step`, `ifc`, `dwg`, `preview`, iar `--no-item` lasă afară elementul de bibliotecă. Scrie un dosar, o arhivă zip sau ambele și iese cu codul 1 când o variantă nu a putut fi construită. Vezi [Scripturi și linia de comandă](topic:scripts-and-cli).
