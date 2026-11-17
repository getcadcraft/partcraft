---
title: Izveidot variantu komplektu no konfigurācijām
summary: Izveidojiet katru detaļas konfigurāciju vai izvēlētas dažas vienā reizē kā STEP, IFC, DWG un priekšskatījumu katrai, ar to parametru tabulu un detaļu kā vienu bibliotēkas vienumu ar tās variantiem.
keywords: variantu komplekts, varianti, konfigurācijas, detaļu saime, pakešu eksports, katrs izmērs, step, ifc, dwg, priekšskatījums, tabula, csv, json, bibliotēka, konfigurators, produktu konfigurators, katalogs, vienuma json
from: 9a6db99f
---

## Ko jūs darīsiet

Nodosiet **visus detaļas izmērus uzreiz**: vienu STEP, IFC un DWG failu un attēlu katrai konfigurācijai, tabulu, kas parāda, kas katra ir, un bibliotēkas vienumu, kas visus tos novieto vienā lapā.

Vispirms jums vajag detaļu ar **konfigurācijām** (skatīt [Konfigurācijas un projektēšanas tabulas](topic:design-tables)). Konfigurācija, kas izslēdz elementu, piemēram, plāksni ar caurumiem un bez tiem, kļūst par savu variantu.

## Soļi

1. Atveriet detaļu. Cilnē {{ui:Parametri}} atrodiet **Konfigurācijas**.
2. Noklikšķiniet uz {{ui:Variantu komplekts…}}.
3. Atzīmējiet konfigurācijas, ko izveidot (visas ir atzīmētas), un failus, ko ierakstīt: STEP, IFC, DWG, priekšskatījumu un bibliotēkas vienumu.
4. Noklikšķiniet uz {{ui:Izveidot komplektu}}. Statusa rindā redzams, cik variantu ir izveidoti; jūsu detaļa nemainās.
5. Lejupielādējas viens zip fails: `<part> variants.zip`.

## Kas ir zip failā

| Fails | Kas tas ir |
|---|---|
| `<name>.step` | Konfigurācija kā STEP cietais ķermenis. |
| `<name>.ifc` | IFC4, viens elements ar izveidoto korpusu un detaļas parametriem kā īpašībām; vērtība ir šīs konfigurācijas pašas. |
| `<name>.dwg` | Priekšskats, augšskats, labais skats un izometrija kā rasējuma lapa pilnā izmērā. |
| `<name>.svg` | Tās izometriskais līnijzīmējums. |
| `variants.csv`, `variants.json` | Parametru tabula: katra varianta id, nosaukums un katra parametra vērtība, elementi, ko tas izslēdz, tā faili, tilpums un izmērs. |
| `<part>.item.json` | Detaļa kā viens bibliotēkas vienums ar tās variantiem (skatīt tālāk). |
| `README.txt` | Kas tika izveidots, zemāk esošās piezīmes un tas, kas netika izveidots. |

Failus nosauc pēc konfigurācijas. Konfigurācija, ko neizdodas izveidot (elements, ko nevar izveidot ar šīm vērtībām), tiek izlaista no failiem un tabulas, uzskaitīta README un ziņojumā pēc zip saglabāšanas; pārējās tiek ierakstītas.

## Noderīga informācija

- **STEP** ir precīzs, ja jūsu versijā ir ieslēgts precīzais kodols. Bez tā STEP ir facetēts (plakani trijstūri), un README to norāda.
- **DWG** ir rasējuma lapa, nevis 3D modelis. Tās līnijas nāk no tīkla, tātad izliekta mala ir daudz īsu līniju.
- **Bibliotēkas vienumā** ir viens korpuss un viens pamatnes laukums katram variantam bibliotēkas pašās asīs: Z augšup, priekšpuse pret −Y, un ievietošanas punkts pie aizmugures vidus apakšā. Plāns ir katra varianta ierobežojošais taisnstūris. Vienums ir ierobežots līdz 8 MB, tāpēc ļoti smags variants kļūst par kasti ar tā izmēru, un README norāda, cik to ir.
- Detaļas aktīvā konfigurācija ir vienuma noklusējuma variants.
- Porti (savienojuma punkti caurulēm un gaisa vadiem) netiek iestatīti no PartCraft.

## Varianti bibliotēkas lapā

Augšupielādējiet `<part>.item.json` vietnē **Bibliotēka › Augšupielādēt**. Izvēlieties tā kategoriju, licenci un savu autora norādi, un tas kļūst par bibliotēkas vienumu ar tā variantiem. BimCraft, to novietojot, tiek jautāts, kuru variantu, un Mainīt piedāvā citus. Lapa, kur apmeklētāji izvēlas opcijas, redz 3D un lejupielādē variantu, pašlaik ir **tikai personāla priekšskatījums**: tā vēl nav atvērta sabiedrībai.

## No komandrindas

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` nosauc konfigurācijas, `--formats` — jebkurš no `step`, `ifc`, `dwg`, `preview`; `--no-item` atstāj bibliotēkas vienumu ārpusē. Tas ieraksta mapi, zip vai abus un iziet ar kodu 1, kad variantu nevarēja izveidot. Skatīt [Skripti un komandrinda](topic:scripts-and-cli).
