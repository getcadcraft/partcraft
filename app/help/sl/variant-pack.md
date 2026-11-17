---
title: Izdelajte paket različic iz svojih konfiguracij
summary: Izdelajte vsako konfiguracijo dela ali nekaj izbranih naenkrat kot STEP, IFC, DWG in predogled za vsako, s tabelo njihovih parametrov ter delom kot enim elementom knjižnice z njegovimi različicami.
keywords: paket različic, različice, konfiguracije, družina delov, serijski izvoz, vsaka velikost, step, ifc, dwg, predogled, tabela, csv, json, knjižnica, konfigurator, konfigurator izdelkov, katalog, json elementa
from: 9a6db99f
---

## Kaj boste naredili

Oddajte **vsako velikost dela naenkrat**: eno datoteko STEP, IFC in DWG ter sliko za vsako konfiguracijo, tabelo, ki pove, kaj je kaj, in element knjižnice, ki vse prikaže na eni strani.

Najprej potrebujete del s **konfiguracijami** (glejte [Konfiguracije in tabele načrtov](topic:design-tables)). Konfiguracija, ki izklopi značilko, kot je plošča z luknjami in brez njih, postane svoja različica.

## Koraki

1. Odprite del. Na zavihku {{ui:Parametri}} poiščite **Konfiguracije**.
2. Kliknite {{ui:Paket različic…}}.
3. Označite konfiguracije za izdelavo (vse so označene) in datoteke za zapis: STEP, IFC, DWG, predogled in element knjižnice.
4. Kliknite {{ui:Naredi paket}}. Vrstica stanja šteje različice med izdelavo; vaš del se ne spremeni.
5. Ena datoteka zip se prenese: `<part> variants.zip`.

## Kaj je v datoteki zip

| Datoteka | Kaj je |
|---|---|
| `<name>.step` | Konfiguracija kot telo STEP. |
| `<name>.ifc` | IFC4, en element z izdelanim telesom in parametri dela kot lastnostmi; vrednost je lastna za to konfiguracijo. |
| `<name>.dwg` | Pogledi spredaj, zgoraj, desno in izometrični pogled kot list risbe v polni velikosti. |
| `<name>.svg` | Izometrična črtna slika. |
| `variants.csv`, `variants.json` | Tabela parametrov: id, ime in vrednost vsakega parametra za vsako različico, značilke, ki jih izklopi, njene datoteke, prostornina in velikost. |
| `<part>.item.json` | Del kot en element knjižnice z njegovimi različicami (glejte spodaj). |
| `README.txt` | Kaj je bilo izdelano, spodnje opombe in vse, kar ni bilo izdelano. |

Datoteke so poimenovane po konfiguraciji. Konfiguracija, ki se ne izdela (značilka, ki je z danimi vrednostmi ni mogoče izdelati), je izpuščena iz datotek in tabele, navedena je v datoteki README in v sporočilu, ko je zip shranjen; druge so še vedno zapisane.

## Dobro je vedeti

- **STEP** je natančen, če je natančno jedro vklopljeno v vaši izdelavi. Brez njega je STEP fasetiran (ravni trikotniki), datoteka README to pove.
- **DWG** je list risbe, ne 3D model. Njegove črte prihajajo iz mreže, zato je ukrivljen rob mnogo kratkih črt.
- **Element knjižnice** nosi eno telo in en tloris za vsako različico, v osi knjižnice: os Z kaže navzgor, spredaj je proti −Y, točka vstavljanja je na sredini zadnjega dela na dnu. Tloris je pravokotnik okoli vsake različice. Element je omejen na 8 MB, zato je zelo težka različica spremenjena v škatlo svoje velikosti, datoteka README pa pove, koliko jih je.
- Aktivna konfiguracija dela je privzeta različica elementa.
- Priključki (točke povezave za cevi in zračne kanale) se iz PartCraft ne nastavljajo.

## Postavite različice na stran knjižnice

Naložite `<part>.item.json` pri **Knjižnica › Naloži** na spletnem mestu. Izberite njegovo kategorijo, licenco in svojo navedbo avtorja, nato postane element knjižnice s svojimi različicami. V BimCraft ob postavitvi vpraša, katera različica, Zamenjaj pa ponudi druge. Stran, kjer obiskovalci izbirajo možnosti, vidijo 3D in prenesejo različico, je za zdaj **predogled za osebje**: ni še odprta javnosti.

## Iz ukazne vrstice

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` navede konfiguracije, `--formats` pa katero koli od `step`, `ifc`, `dwg`, `preview`; `--no-item` izpusti element knjižnice. Zapiše mapo, zip ali oboje in izstopi s kodo 1, če različice ni mogoče izdelati. Glejte [Skripti in ukazna vrstica](topic:scripts-and-cli).
