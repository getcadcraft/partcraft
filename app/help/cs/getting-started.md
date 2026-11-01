---
title: Začínáme s PartCraftem
summary: Co PartCraft dnes umí, co potřebuje váš prohlížeč a první díl za deset minut, od skici po uložený soubor.
keywords: start, první spuštění, rychlý start, úvod, návod, první díl, deska, parametrický, modelář dílů
from: 5f0a668d
---

PartCraft je parametrická aplikace rodiny CadCraft pro díly a sestavy. Nakreslíte 2D skicu, zafixujete ji vazbami a kótami, změníte ji na těleso pomocí prvků, jako je vytažení, rotace a díra, a libovolné číslo můžete později změnit: díl se znovu sestaví z historie. Díly pak jdou do sestav, kde je vazby umístí a umožní vám zkontrolovat pohyb.

Co tato verze umí:

| Úkol | Co dostanete |
|---|---|
| Skici | Úsečky, obdélníky, kružnice, oblouky, body a osové čáry, s vazbami a kótami, a živý stav: nedourčeno, plně určeno nebo přeurčeno |
| Prvky těles | Vytažení, výřez, rotace, rotovaný výřez, jednoduché díry a díry se zahloubením, lineární a kruhové vzory, zrcadlení, zaoblení a sražení na přímých hranách mezi rovnými plochami a skořepiny a úkosy na rovných plochách. Tažení po dráze, lofting a další prvky, které potřebují přesné jádro, v této verzi zatím nejsou hotové: viz [Co ještě není hotovo](topic:not-built-yet) |
| Historie | Úprava čísel jakéhokoli prvku, potlačení, vrácení, změna pořadí a smazání, s krokem zpět |
| Sestavy | Díly spojené pevnými, rotačními a posuvnými vazbami, kontrola kolizí a kontrola pohybu |
| Výkresy | List A3 se třemi pohledy, izometrií, řezem, detailním pohledem, celkovými rozměry, vztažnými body, rámečky tolerancí a značkami povrchu, exportovaný jako PDF |
| Soubory | Vlastní soubory dílů a sestav; ven STL, 3MF, fasetovaný STEP, DXF a PDF |

Všechno běží ve vašem prohlížeči, na vašem počítači. **Nic se nenahrává.** Kam soubory míří, viz [Soubory: otevírání, ukládání a export](topic:files).

## Co budete potřebovat

- Aktuální Chrome, Edge, Firefox nebo Safari se zapnutým **WebGL** (3D grafika) a **WebAssembly**. Obojí je ve výchozím stavu zapnuto. Geometrii těles staví síťové jádro ve WebAssembly, které se načítá spolu s aplikací: viz [Síťové jádro](topic:solid-kernels).
- Nejjednodušší je myš. Funguje i touchpad a dotykové obrazovky fungují pro prohlížení a jednoduché skicování: viz [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
- Obrazovka široká alespoň 1280 pixelů ukáže celý panel nástrojů v jednom řádku. Užší okna posouvají panel nástrojů do stran; na telefonu se panely otevírají jako listy z lišty dole.

Více o prohlížečích: [Prohlížeče a počítače](common:browsers).

:::note
PartCraft běží v prohlížeči a na počítači uvnitř CadCraft Studia. Ukládání do cloudu zatím není k dispozici: díly otevíráte ze svého počítače a ukládáte je zpět do něj jako soubory.
:::

## Otevření PartCraftu

1. Otevřete PartCraft.
2. Počkejte, dokud obrazovka říká „Načítání jádra těles…“. Poprvé to chvíli trvá.
3. Uvidíte prázdný 3D pohled se třemi základními rovinami, historii vlevo („Part1“, pak Čelní rovina, Rovina půdorysu, Boční rovina) a v pohledu rámeček s nadpisem „Začněte díl“.
4. Čip poblíž pravého konce stavového řádku říká „Síťové jádro“: PartCraft v této verzi staví každý díl síťovým jádrem, takže kulaté plochy jsou rovné facety. Můžete začít modelovat hned.

Pokud pohled říká, že prohlížeč nemůže zobrazit 3D, nebo se jádro nenačetlo, viz [Řešení potíží](topic:troubleshooting#the-app-does-not-start).

## Váš první díl: deska s dírou

Vytvoříte desku 60 × 40 mm, tlustou 10 mm, s dírou o průměru 6 mm skrz. Jednotky jsou milimetry.

### Nakreslení obrysu

1. Klikněte na **Čelní rovina** v historii vlevo. Rovina se v pohledu zvýrazní.
2. Zvolte {{ui:Skica}} na panelu nástrojů nebo stiskněte {{key:S}}. Pohled se otočí tak, aby se díval přímo na rovinu, a je aktivní nástroj Úsečka.
3. Stiskněte {{key:R}} pro nástroj Obdélník.
4. Přesuňte ukazatel na počátek (malý červený kroužek s křížkem). Malý čtvereček ukazuje, že se přichytává. Klikněte.
5. Posuňte se nahoru a doprava a klikněte znovu. Máte obdélník. Jeho čáry jsou modré: modrá znamená, že se ještě mohou pohybovat.

### Zadání rozměrů

1. Stiskněte {{key:D}} pro nástroj Kóta.
2. Klikněte na horní čáru a pak kousek nad ni. Otevře se pole s číslem se současnou délkou.
3. Napište `60` a stiskněte {{key:Enter}}. Obdélník se změní na šířku 60 mm.
4. Klikněte na levou čáru a pak kousek vlevo od ní. Napište `40` a stiskněte {{key:Enter}}.

Čip vlevo nahoře v pohledu nyní říká **Plně určeno** a čáry zčernají (černé na motivu Papír, světlé na motivu Model). Každý bod a rozměr je pevný.

:::tip
Pokud jste obdélník začali mimo počátek, čip stále říká „Nedourčeno · 2 stupně volnosti“. Stiskněte {{key:S}} pro Vybrat, klikněte na jeden roh, {{key:Shift}}+klikněte na počátek a zvolte {{ui:• Splývání}} v pravém panelu.
:::

### Vytažení

1. Zvolte {{ui:Konec}} na panelu nástrojů nebo stiskněte {{key:Esc}}, dokud se skica nezavře (obvykle dvakrát).
2. Zvolte {{ui:Vytáhnout}}. Objeví se těleso o tloušťce 10 mm. Do historie se přidá „Extrude1“ s odsazeným „Sketch1“ pod ním.
3. Pravý panel ukazuje nastavení vytažení. Chcete-li změnit tloušťku, napište nové číslo do **Hloubka (mm)** a stiskněte {{key:Enter}} nebo {{key:Tab}}. Díl se okamžitě znovu sestaví.

### Přidání díry

1. Klikněte na velkou rovnou plochu na přední straně desky (konec vytažení). Celá plocha se zvýrazní a pravý panel říká **Plocha**.
2. Zvolte {{ui:Skica na této ploše}} v pravém panelu.
3. Stiskněte {{key:P}} pro nástroj Bod a klikněte poblíž středu plochy.
4. Zvolte {{ui:Konec}}.
5. Zvolte {{ui:Díra}}. Deskou projde díra o průměru 6 mm. Chcete-li, změňte **Průměr (mm)** v pravém panelu.

Rámeček **Díl** vlevo dole nyní uvádí objem, povrchovou plochu, rozměr (60 × 40 × 10 mm) a „Průchozí díry: 1“.

### Uložení

1. Stiskněte {{key:Mod+S}} nebo zvolte {{ui:Uložit}}.
2. Prohlížeč stáhne `Part1.partcraft.json` do své složky se staženými soubory. Soubor obsahuje celou historii: otevřete jej znovu pomocí {{ui:Otevřít}} a pokračujte v úpravách.

Chcete-li díl nejdřív přejmenovat, klikněte do prázdného místa v pohledu, aby nebylo nic vybráno, a napište nový **Název** v pravém panelu.

## Kam dál

- [Nakreslete první skicu](topic:sketch-basics) a [Plné určení skici](topic:relations-dimensions) vysvětlují skicování pořádně.
- [Změna dílu přes jeho historii](topic:edit-history) ukazuje, jak upravit, co jste postavili.
- [Zaoblení, sražení a skořepina](topic:fillet-chamfer-shell) a [Vytvoření výkresu](topic:drawing-pdf) díl dokončí. [Co ještě není hotovo](topic:not-built-yet) uvádí, co tato verze neumí, například tažení po dráze a lofting.
- [Pokud přecházíte z jiného parametrického modeláře](topic:coming-from) uvádí zvyky, které tady fungují jinak.
- [Klávesy a myš](topic:keyboard) je úplný seznam zkratek.
- [Používání této nápovědy](common:help).
