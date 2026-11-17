---
title: Vytvoření balíčku variant z vašich konfigurací
summary: Sestavte každou konfiguraci dílu, nebo jen vybrané, najednou jako STEP, IFC, DWG a náhled u každé z nich, s tabulkou jejich parametrů a dílem jako jednou položkou knihovny s jeho variantami.
keywords: balíček variant, varianty, konfigurace, rodina dílů, dávkový export, každá velikost, step, ifc, dwg, náhled, tabulka, csv, json, knihovna, konfigurátor, konfigurátor produktu, katalog, json položky
from: 9a6db99f
---

## Co uděláte

Předáte **každou velikost dílu najednou**: jeden soubor STEP, IFC a DWG a obrázek pro každou konfiguraci, tabulku, která říká, čím každá je, a položku knihovny, která je všechny umístí na jednu stránku.

Nejdříve potřebujete díl s **konfiguracemi** (viz [Konfigurace a tabulky návrhů](topic:design-tables)). Konfigurace, která vypne prvek, například plát s otvory a bez nich, se stane vlastní variantou.

## Postup

1. Otevřete díl. Na kartě {{ui:Parametry}} najděte **Konfigurace**.
2. Klikněte na {{ui:Balíček variant…}}.
3. Zaškrtněte konfigurace k sestavení (všechny jsou zaškrtnuté) a soubory k zápisu: STEP, IFC, DWG, náhled a položku knihovny.
4. Klikněte na {{ui:Vytvořit balíček}}. Stavový řádek počítá varianty, jak se sestavují; váš díl se nezmění.
5. Stáhne se jeden zip: `<part> variants.zip`.

## Co je v zipu

| Soubor | Co to je |
|---|---|
| `<name>.step` | Konfigurace jako těleso STEP. |
| `<name>.ifc` | IFC4, jeden prvek se sestaveným tělesem a parametry dílu jako vlastnostmi; hodnota je vlastní pro danou konfiguraci. |
| `<name>.dwg` | Pohled zepředu, shora, zprava a izometrický jako list výkresu v plné velikosti. |
| `<name>.svg` | Izometrický čárový obrázek. |
| `variants.csv`, `variants.json` | Tabulka parametrů: id, název a hodnota každého parametru u každé varianty, prvky, které vypne, její soubory, objem a velikost. |
| `<part>.item.json` | Díl jako jedna položka knihovny s jeho variantami (viz níže). |
| `README.txt` | Co bylo vytvořeno, poznámky níže a cokoli, co nebylo sestaveno. |

Soubory jsou pojmenovány podle konfigurace. Konfigurace, kterou se nepodaří sestavit (prvek, který nelze s těmito hodnotami vytvořit), se vynechá ze souborů a tabulky, uvede se v README a ve zprávě po uložení zipu; ostatní se zapíšou.

## Dobré vědět

- **STEP** je přesný, když je v sestavení zapnuté přesné jádro. Bez něj je STEP fasetovaný (ploché trojúhelníky) a README to říká.
- **DWG** je list výkresu, ne 3D model. Jeho čáry vznikají ze sítě, takže zakřivená hrana je mnoho krátkých čar.
- **Položka knihovny** nese jedno těleso a jeden půdorys u každé varianty, v osách knihovny: Z nahoru, přední strana směrem k −Y a bod vložení uprostřed zadní strany dole. Půdorys je ohraničující obdélník každé varianty. Položka je omezena na 8 MB, takže velmi těžká varianta se stane krabicí své velikosti a README uvede, kolik jich je.
- Aktivní konfigurace dílu je výchozí variantou položky.
- Porty (body připojení pro potrubí a vzduchotechniku) se z PartCraftu nenastavují.

## Umístění variant na stránku knihovny

Nahrajte `<part>.item.json` v **Knihovna › Nahrát** na webu. Vyberte jeho kategorii, licenci a svůj řádek uvedení autora; stane se položkou knihovny s jejími variantami. V BimCraftu se při vložení zeptá, která varianta, a Výměna nabídne ostatní. Stránka, kde návštěvníci volí možnosti, vidí 3D a stahují variantu, je zatím **náhled pro zaměstnance**: ještě není otevřená veřejnosti.

## Z příkazového řádku

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` pojmenuje konfigurace, `--formats` libovolné z `step`, `ifc`, `dwg`, `preview`; `--no-item` položku knihovny vynechá. Zapíše složku, zip nebo obojí a skončí s kódem 1, když varianta nemohla být sestavena. Viz [Skripty a příkazový řádek](topic:scripts-and-cli).
