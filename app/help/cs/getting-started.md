---
title: Začínáme s PartCraftem
summary: Co PartCraft dnes umí, co váš prohlížeč potřebuje a první díl za deset minut od skici po uložený soubor.
keywords: začátek, první spuštění, rychlý start, úvod, výukový návod, první díl, deska, parametrický, modelář dílů
from: 7d43283f
---

PartCraft je parametrická aplikace pro díly a sestavy v rodině CadCraft. Nakreslíte 2D skicu, zajistíte ji vazbami a kótami, proměníte ji v těleso prvky jako vytažení, rotační těleso a díra a kterékoli číslo můžete později změnit: díl se přepočítá podle své historie. Díly pak vstupují do sestav, kde klouby je umisťují a umožňují zkontrolovat pohyb.

Co tato verze umí:

| Úloha | Co získáte |
|---|---|
| Skici | Úsečky, obdélníky, kružnice, oblouky, body a osy s vazbami a kótami a živým stavem: nedourčeno, plně nebo předurčeno |
| Prvky těles | Vytažení, výřez, rotační těleso, rotační výřez, jednoduché a zapuštěné díry, lineární a kruhová pole, zrcadlení, zaoblení a sražení přímých hran mezi rovinnými plochami a skořepiny a úkosy na rovinných plochách. Tažení, lofty a další prvky, které vyžadují přesné jádro, zatím nejsou v této verzi hotové: viz [Co ještě není hotovo](topic:not-built-yet) |
| Historie | Upravte čísla kteréhokoli prvku, potlačte, vraťte zpět, přeřaďte a smažte, s možností zpět |
| Sestavy | Díly spojené tuhými, rotačními a posuvnými klouby, kontrola kolizí a kontrola pohybu |
| Výkresy | List A3 se třemi pohledy, izometrie, řez, detailní pohled, celkové rozměry, vztažné body, rámečky tolerancí a značky drsnosti povrchu, exportované jako PDF |
| Soubory | Vlastní soubory dílů a sestav; výstup STL, 3MF, přesný STEP, DXF a PDF |

Vše běží ve vašem prohlížeči, na vašem počítači. **Nic se nenahrává.** Kam soubory směřují, viz [Soubory: otevření, uložení a export](topic:files).

## Co potřebujete

- Aktuální Chrome, Edge, Firefox nebo Safari s **WebGL** (3D grafika) a **WebAssembly** zapnutými. Obojí je ve výchozím nastavení zapnuto. Geometrii těles staví WebAssembly síťové jádro, které se načte s aplikací: viz [Síťové jádro (mesh kernel)](topic:solid-kernels).
- Nejsnadněji se ovládá myší. Touchpad funguje a dotykové obrazovky fungují pro prohlížení a jednoduché kreslení skic: viz [Touchpad, dotyk a malé obrazovky](topic:trackpad-and-touch).
- Obrazovka široká alespoň 1280 pixelů zobrazí celý panel nástrojů v jedné řadě. Užší okna posouvají panel nástrojů do stran; na telefonu se panely otevřou jako listy z lišty dole.

Více o prohlížečích: [Prohlížeče a počítače](common:browsers).

:::note
PartCraft běží v prohlížeči a na ploše uvnitř CadCraft Studio. Ukládání do cloudu zatím není k dispozici: díly otevřete z počítače a ukládáte je zpět jako soubory.
:::

## Otevření PartCraftu

1. Otevřete PartCraft.
2. Počkejte, dokud obrazovka říká „Načítání jádra těles…“. Poprvé to chvíli trvá.
3. Uvidíte prázdný 3D pohled se třemi základními rovinami, historii vlevo („Part1“, pak Přední rovina, Horní rovina, Pravá rovina) a pole nazvané „Začít díl“ v pohledu.
4. Čip u pravého konce stavového řádku říká „Mesh kernel“: PartCraft v této verzi staví každý díl síťovým jádrem, takže kulaté plochy jsou ploché fasety. Můžete začít modelovat hned.

Pokud pohled říká, že prohlížeč nedokáže zobrazit 3D, nebo se jádro nenačetlo, viz [Řešení potíží](topic:troubleshooting#the-app-does-not-start).

## Váš první díl: deska s dírou

Vytvoříte desku 60 × 40 mm, silnou 10 mm, se šestimilimetrovou dírou skrz. Jednotky jsou milimetry.

### Nakreslete obrys

1. Klikněte na **Přední rovina** v historii vlevo. Rovina se v pohledu zvýrazní.
2. Vyberte {{ui:Sketch}} na panelu nástrojů, nebo stiskněte {{key:S}}. Pohled se otočí přímo k rovině a je aktivní nástroj Úsečka.
3. Stiskněte {{key:R}} pro nástroj Obdélník.
4. Přesuňte kurzor na počátek (malý červený kruh s křížkem). Malý čtvereček ukáže, že se přichytává. Klikněte.
5. Posuňte nahoru a doprava a znovu klikněte. Máte obdélník. Jeho čáry jsou modré: modrá znamená, že se ještě mohou posouvat.

### Zadejte rozměry

1. Stiskněte {{key:D}} pro nástroj Kóta.
2. Klikněte na horní čáru a pak kousek nad ni. Otevře se pole s číslem aktuální délky.
3. Napište `60` a stiskněte {{key:Enter}}. Obdélník se změní na šířku 60 mm.
4. Klikněte na levou čáru a pak kousek vlevo od ní. Napište `40` a stiskněte {{key:Enter}}.

Čip vlevo nahoře v pohledu nyní říká **Plně určeno** a čáry zčernají (černé na motivu Papír, světlé na motivu Model). Každý bod a rozměr je pevný.

:::tip
Pokud jste obdélník začali mimo počátek, čip stále říká „Nedourčeno · 2 stupně volnosti“. Stiskněte {{key:S}} pro Výběr, klikněte na jeden roh, {{key:Shift}}+klik na počátek a pak zvolte {{ui:• Coincident}} v pravém panelu.
:::

### Vytáhněte ji

1. Vyberte {{ui:Exit}} na panelu nástrojů, nebo stiskněte {{key:Esc}}, dokud se skica nezavře (obvykle dvakrát).
2. Vyberte {{ui:Extrude}}. Objeví se těleso o tloušťce 10 mm. „Extrude1“ se přidá do historie a pod ním odsazeně „Sketch1“.
3. Pravý panel ukazuje nastavení vytažení. Chcete-li změnit tloušťku, napište nové číslo do pole **Hloubka (mm)** a stiskněte {{key:Enter}} nebo {{key:Tab}}. Díl se hned přepočítá.

### Přidejte díru

1. Klikněte na velkou rovnou plochu na přední straně desky (konec vytažení). Celá plocha se zvýrazní a pravý panel říká **Plocha**.
2. Vyberte {{ui:Sketch on this face}} v pravém panelu.
3. Stiskněte {{key:P}} pro nástroj Bod a klikněte blízko středu plochy.
4. Vyberte {{ui:Exit}}.
5. Vyberte {{ui:Hole}}. Šestimilimetrová díra prochází deskou. Pokud chcete, změňte **Průměr (mm)** v pravém panelu.

Pole **Díl** vlevo dole nyní ukazuje objem, plochu povrchu, velikost (60 × 40 × 10 mm) a „Průchozí díry: 1“.

### Uložte ji

1. Stiskněte {{key:Mod+S}} nebo vyberte {{ui:Save}}.
2. Váš prohlížeč stáhne `Part1.partcraft.json` do složky stažených souborů. Soubor obsahuje celou historii: otevřete jej znovu pomocí {{ui:Open}}, abyste mohli dál upravovat.

Chcete-li nejprve přejmenovat díl, klikněte na prázdné místo v pohledu, aby nic nebylo vybráno, a v pravém panelu napište nový **Název**.

## Kam dál

- [Nakreslete svou první skicu](topic:sketch-basics) a [Plně určete skicu](topic:relations-dimensions) vysvětlují skicář pořádně.
- [Změňte díl přes jeho historii](topic:edit-history) ukazuje, jak upravit to, co jste postavili.
- [Zaoblení, zkosení a dutina](topic:fillet-chamfer-shell) a [Vytvoření výkresu](topic:drawing-pdf) díl dokončí. [Co ještě není hotovo](topic:not-built-yet) vypisuje, co tato verze nedělá, například tažení a lofty.
- [Přechod z jiného parametrického modeláře](topic:coming-from) vypisuje zvyky, které tady fungují jinak.
- [Klávesy a myš](topic:keyboard) je úplný seznam zkratek.
- [Používání této nápovědy](common:help).
