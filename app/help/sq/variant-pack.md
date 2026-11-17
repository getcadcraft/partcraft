---
title: Bëj një paketë variantesh nga konfigurimet e tua
summary: Ndërto çdo konfigurim të një pjese, ose disa të zgjedhur, në një herë si STEP, IFC, DWG dhe një pamje paraprake secila, me një tabelë të parametrave të tyre dhe pjesën si një artikull biblioteke me variantet e saj.
keywords: paketë variantesh, variante, konfigurime, familje pjesësh, eksport grupor, çdo madhësi, step, ifc, dwg, pamje paraprake, tabelë, csv, json, bibliotekë, konfigurues, konfigurues produkti, katalog, artikull json
from: 9a6db99f
---

## Çfarë do të bësh

Dorëzo **çdo madhësi të një pjese njëherësh**: një skedar STEP, IFC dhe DWG dhe një foto për çdo konfigurim, një tabelë që thotë çfarë është secili, dhe një artikull biblioteke që i vendos të gjitha në një faqe.

Duhet fillimisht një pjesë me **konfigurime** (shih [Konfigurimet dhe tabelat e projektimit](topic:design-tables)). Një konfigurim që fik një veçori, si një pllakë me dhe pa vrima, bëhet variant i vetin.

## Hapat

1. Hap pjesën. Te skeda {{ui:Parametrat}}, gjej **Konfigurimet**.
2. Kliko {{ui:Paketa e variantesh…}}.
3. Shëno konfigurimet për t'u ndërtuar (të gjitha janë të shënuara) dhe skedarët për t'u shkruar: STEP, IFC, DWG, një pamje paraprake dhe artikullin e bibliotekës.
4. Kliko {{ui:Bëj paketën}}. Rreshti i statusit numëron variantet ndërsa ndërtohen; pjesa jote nuk ndryshohet.
5. Një zip shkarkohet: `<part> variants.zip`.

## Çfarë ka në zip

| Skedari | Çfarë është |
|---|---|
| `<name>.step` | Konfigurimi si solid STEP. |
| `<name>.ifc` | IFC4, një element me trupin e ndërtuar dhe parametrat e pjesës si veti; vlera është e konfigurimit përkatës. |
| `<name>.dwg` | Pamjet para, sipër, djathtas dhe izometrike si fletë vizatimi në madhësi të plotë. |
| `<name>.svg` | Një foto vije izometrike e tij. |
| `variants.csv`, `variants.json` | Tabela e parametrave: id, emri i secilit variant dhe vlera e çdo parametri, veçoritë që fik, skedarët e tij, vëllimi dhe madhësia e tij. |
| `<part>.item.json` | Pjesa si një artikull biblioteke me variantet e saj (shih më poshtë). |
| `README.txt` | Çfarë u bë, shënimet më poshtë dhe çdo gjë që nuk u ndërtua. |

Skedarët emërtohen sipas konfigurimit. Një konfigurim që dështon në ndërtim (një veçori që s'mund të bëhet me ato vlera) lihet jashtë skedarëve dhe tabelës, listohet në README dhe në një mesazh pasi zipi ruhet; të tjerët shkruhen gjithsesi.

## Të mirë për t'u ditur

- **STEP** është i saktë kur kerneli i saktë është aktiv në ndërtimin tënd. Pa të, STEP është me facetë (trekëndësha të sheshtë), dhe README e thotë këtë.
- **DWG** është fleta e vizatimit, jo një model 3D. Vijat e saj vijnë nga rrjeti, kështu që një brinjë e lakuar është shumë vija të shkurtra.
- **Artikulli i bibliotekës** mban një trup dhe një gjurmë për çdo variant, në boshtet e bibliotekës: Z lart, para nga ana −Y, dhe pika e futjes në mes të pjesës së pasme në fund. Plani është drejtkëndëshi kufizues i secilit variant. Një artikull kufizohet në 8 MB, kështu që një variant shumë i rëndë bëhet një kuti me madhësinë e tij dhe README thotë sa janë.
- Konfigurimi aktiv i pjesës është varianti parazgjedhur i artikullit.
- Portat (pikat e lidhjes për tubat dhe kanalet) nuk vendosen nga PartCraft.

## Vendos variantet në një faqe bibliotekeje

Ngarko `<part>.item.json` te **Bibliotekë › Ngarko** në sit. Zgjidh kategorinë, licencën dhe rreshtin tënd të kreditit, dhe bëhet një artikull Biblioteke me variantet e tij. Në BimCraft, vendosja e tij pyet cilin variant, dhe Ndërro i ofron të tjerët. Faqja ku vizitorët zgjedhin opsionet, shohin 3D dhe shkarkojnë një variant është një **pamje paraprake për stafin** për tani: nuk është ende e hapur për publikun.

## Nga rreshti i komandave

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` emëron konfigurimet, `--formats` çdo nga `step`, `ifc`, `dwg`, `preview`; `--no-item` e lë artikullin e bibliotekës jashtë. Shkruan një dosje, një zip ose të dyja, dhe del me kodin 1 kur një variant nuk mund të ndërtohet. Shih [Skriptet dhe rreshti i komandave](topic:scripts-and-cli).
