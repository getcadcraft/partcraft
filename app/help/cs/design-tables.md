---
title: Konfigurace a návrhové tabulky
summary: Uchování několika velikostí a verzí jednoho dílu jako pojmenovaných konfigurací uložených v souboru dílu, s prvky zapnutými nebo vypnutými v každé z nich; přepínání jedním kliknutím, načítání nebo export jako návrhová tabulka CSV, nebo sestavení všech z příkazového řádku.
keywords: návrhová tabulka, konfigurace, velikosti, rodina dílů, csv, tabulkový procesor, varianty, tabulkově řízené, potlačit, potlačeno, vypnout prvek, volby, s nebo bez, konfigurátor
from: 17249afb
---

**Konfigurace** je jedna velikost dílu: pojmenovaná sada hodnot jeho parametrů. Díl drží své konfigurace ve vlastním souboru, takže putují s ním. **Návrhová tabulka** je totéž jako soubor CSV, jeden řádek na konfiguraci.

Konfigurace nastavují **parametry**, takže je nejdřív přidejte (viz [Ovládání dílu pomocí parametrů](topic:parameters)). Konfigurace ukládá parametry, které jsou prostými čísly; parametry vypočítané z jiných (jako `area = w * d`) následují samy.

## Uložení konfigurace

1. Na kartě {{ui:Parametry}} nastavte parametry pro jednu velikost dílu.
2. Pod **Konfigurace** napište název (například `Velká`) a stiskněte {{ui:Uložit aktuální hodnoty}} nebo {{key:Enter}}.

Nová konfigurace je označena jako **aktivní**. Když pak změníte parametr, řekne **aktivní, změněno od uložení**, takže víte, že díl už neodpovídá.

## Přepínání, aktualizace, přejmenování, mazání

- {{ui:Použít}} nastaví parametry na hodnoty té konfigurace a přestaví díl.
- {{ui:Aktualizovat}} uloží aktuální hodnoty do té konfigurace.
- Chcete-li ji přejmenovat, napište nový název do jejího pole a stiskněte {{key:Enter}}.
- {{ui:Smazat}} konfiguraci odstraní. Parametry si ponechají své hodnoty.

Každá z těchto akcí je jeden krok: {{key:Mod+Z}} se vrátí zpět. Když přejmenujete parametr, každá konfigurace převezme nový název; když jednu smažete, z nich vypadne.

## Zapnutí a vypnutí prvků v konfiguraci

Konfigurace také uchovává, které prvky jsou vypnuté, takže jeden díl může mít verze **s** a **bez** něčeho: montážních děr, zkosení, výstupku.

1. Vypněte prvek: klikněte na něj v historii, pak {{ui:Potlačit}} v {{ui:Vlastnosti}}.
2. Uložte konfiguraci jako obvykle, například `Bez děr`. Její řádek vypíše, co vypíná.
3. Zapněte prvek zpět ({{ui:Obnovit}}) a uložte jinou konfiguraci, například `S dírami`.

Jakmile některá konfigurace vypne prvek, použití konfigurace vypne její prvky a **zapne každý další prvek** spolu s hodnotami jejich parametrů, v jediném kroku. Konfigurace uložená dříve, než byl kterýkoli prvek vypnut, se počítá jako „vše zapnuto“. {{ui:Aktualizovat}} uloží prvky tak, jak jsou teď, spolu s hodnotami.

Díl, jehož konfigurace vypínají prvky, se uloží jako novější verze souboru: starší PartCraft řekne, že soubor je z novější verze, místo aby jej otevřel bez těchto prvků.

:::note
Návrhová tabulka CSV nese jen hodnoty parametrů. Import tabulky přes konfiguraci změní její hodnoty a zachová prvky, které vypíná; volba `--table` na příkazovém řádku sestaví jen hodnoty.
:::

Díl je uložen s konfiguracemi a s tou, která byla aktivní. Otevře se s hodnotami, se kterými byl uložen.

## Načtení nebo export návrhové tabulky

Návrhová tabulka je soubor CSV se sloupcem pro každý parametr a řádkem pro každou konfiguraci:

```
name,width,thick,bolt
malá,100,6,6.6
střední,140,8,8.5
velká,200,12,13
```

První sloupec se může jmenovat `name`, `config` nebo `configuration`; každý další sloupec musí být názvem parametru dílu. Buňky jsou čísla, s jednotkami, pokud chcete (`8in`). Prázdná buňka vynechá daný parametr z řádku.

- {{ui:Importovat CSV}} přidá každý řádek jako konfiguraci. Řádek se jménem existující konfigurace ji nahradí. Import je jeden krok.
- {{ui:Exportovat CSV}} zapíše konfigurace ven. Pokud žádné nejsou, zapíše jeden řádek s aktuálními hodnotami jako výchozí bod pro tabulkový procesor.

Název konfigurace, který by tabulkový procesor přečetl jako vzorec (začíná `=`, `+`, `-` nebo `@`), se zapíše s předním `'`.

## Všechny velikosti najednou

{{ui:Balíček variant…}} pod **Konfigurace** sestaví každou konfiguraci, nebo vybrané, jako STEP, IFC, DWG a náhled v jednom zip souboru s tabulkou jejich parametrů: viz [Balíček variant z konfigurací](topic:variant-pack).

Příkazový nástroj vytvoří jeden soubor na každý řádek návrhové tabulky CSV:

```
node tools/partcraft-cli/partcraft.mjs build bracket.pcscript --table sizes.csv --out-dir sizes --format step
```

Nejprve konfigurace exportujte jako CSV, pak předejte ten soubor přes `--table`. Viz [Skripty a příkazový řádek](topic:scripts-and-cli). Díl uložený jako skript si drží své konfigurace na řádku `configs json …`.
