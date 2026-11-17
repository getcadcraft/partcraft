---
title: Vytvorte balík variantov z vašich konfigurácií
summary: Zostavte naraz každú konfiguráciu súčiastky alebo niekoľko vybraných ako STEP, IFC, DWG a náhľad ku každej, s tabuľkou ich parametrov a súčiastkou ako jednou položkou knižnice s jej variantmi.
keywords: balík variantov, varianty, konfigurácie, rodina súčiastok, dávkový export, každá veľkosť, step, ifc, dwg, náhľad, tabuľka, csv, json, knižnica, konfigurátor, konfigurátor produktov, katalóg, item json
from: 9a6db99f
---

## Čo urobíte

Odovzdajte **každú veľkosť súčiastky naraz**: jeden súbor STEP, IFC a DWG a obrázok pre každú konfiguráciu, tabuľku, ktorá hovorí, čo je každá z nich, a položku knižnice, ktorá všetky umiestni na jednu stránku.

Najprv potrebujete súčiastku s **konfiguráciami** (pozri [Konfigurácie a tabuľky návrhov](topic:design-tables)). Konfigurácia, ktorá vypne prvok, napríklad plech s otvormi a bez nich, sa stane vlastným variantom.

## Postup

1. Otvorte súčiastku. Na karte {{ui:Parametre}} nájdite **Konfigurácie**.
2. Kliknite na {{ui:Balík variantov…}}.
3. Zaškrtnite konfigurácie, ktoré sa majú zostaviť (všetky sú zaškrtnuté), a súbory, ktoré sa majú zapísať: STEP, IFC, DWG, náhľad a položku knižnice.
4. Kliknite na {{ui:Vytvoriť balík}}. Stavový riadok počíta varianty, ako sa zostavujú; vaša súčiastka sa nezmení.
5. Stiahne sa jeden zip: `<part> variants.zip`.

## Čo je v zip súbore

| Súbor | Čo to je |
|---|---|
| `<name>.step` | Konfigurácia ako teleso STEP. |
| `<name>.ifc` | IFC4, jeden prvok so zostaveným telesom a parametrami súčiastky ako vlastnosťami; hodnota je vlastná pre danú konfiguráciu. |
| `<name>.dwg` | Pohľad spredu, zhora, sprava a izometrický ako výkresový list v plnej veľkosti. |
| `<name>.svg` | Izometrický čiarový obrázok tejto konfigurácie. |
| `variants.csv`, `variants.json` | Tabuľka parametrov: id každého variantu, názov a hodnota každého parametra, prvky, ktoré vypína, jeho súbory, jeho objem a veľkosť. |
| `<part>.item.json` | Súčiastka ako jedna položka knižnice s jej variantmi (pozri nižšie). |
| `README.txt` | Čo bolo vytvorené, poznámky nižšie a čo sa nezostavilo. |

Súbory sa pomenúvajú podľa konfigurácie. Konfigurácia, ktorú sa nepodarí zostaviť (prvok, ktorý sa s týmito hodnotami nedá vytvoriť), sa vynechá zo súborov a z tabuľky, uvedie sa v README a v správe po uložení zipu; ostatné sa napriek tomu zapíšu.

## Dobré vedieť

- **STEP** je presný, keď je v tejto verzii zapnuté presné jadro. Bez neho je STEP fazetovaný (ploché trojuholníky) a README to uvedie.
- **DWG** je výkresový list, nie 3D model. Jeho čiary vznikajú zo siete, takže zakrivená hrana je mnoho krátkych čiar.
- **Položka knižnice** nesie jedno teleso a jeden pôdorys na variant, v osiach knižnice: Z smerom nahor, predok smerom k −Y a bod vloženia v strede zadnej strany dole. Pôdorys je ohraničujúci obdĺžnik každého variantu. Položka je obmedzená na 8 MB, takže veľmi ťažký variant sa zmení na škatuľu svojej veľkosti a README uvedie, koľko ich bolo.
- **Aktívna konfigurácia súčiastky je predvolený variant položky.**
- **Porty** (spojovacie body pre potrubia a vzduchotechniku) sa z PartCraft nenastavujú.

## Umiestnenie variantov na stránku knižnice

Nahrajte `<part>.item.json` v **Knižnica › Nahrať** na webovej stránke. Vyberte jej kategóriu, licenciu a svoj údaj o autorstve, a stane sa položkou knižnice s jej variantmi. V BimCraft sa pri umiestnení pýta, ktorý variant, a výmena ponúka ostatné. Stránka konfigurátora, kde návštevníci vyberajú možnosti, vidia 3D a sťahujú variant, je zatiaľ **náhľad pre zamestnancov**: ešte nie je verejne prístupná.

## Z príkazového riadku

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` určí konfigurácie, `--formats` ktorékoľvek z `step`, `ifc`, `dwg`, `preview`; `--no-item` vynechá položku knižnice. Zapíše priečinok, zip alebo obidva a ukončí sa s kódom 1, keď sa niektorý variant nepodarilo zostaviť. Pozri [Skripty a príkazový riadok](topic:scripts-and-cli).
