---
title: Nakreslete první skicu
summary: Otevřete skicu na rovině nebo na ploché ploše, kreslete úsečky, obdélníky, kružnice, oblouky, body a osové čáry, zaoblujte rohy, vybírejte, přesouvejte a mažte.
keywords: skica, kreslení, úsečka, obdélník, kružnice, oblouk, bod, osová čára, konstrukce, zaoblení, zaoblení skicy, zaoblení rohu, přichycení, výběr, okno, přesun, profil
from: 28be7436
---

Každé těleso začíná skicou: plochým výkresem na rovině. Tento postup popisuje kreslicí nástroje. Jak skicu zafixovat vazbami a kótami, je popsáno v [Plné určení skici](topic:relations-dimensions).

## Začátek skici

Skicu můžete kreslit na základní rovině nebo na libovolné ploché ploše dílu.

1. Vyberte, kde budete kreslit:
   - základní rovina: klikněte v historii na **Přední rovina**, **Horní rovina** nebo **Pravá rovina**, nebo klikněte na rovinu v pohledu;
   - plochá plocha: klikněte na plochu v pohledu. Celá plocha se zvýrazní.
2. Vyberte {{ui:Skica}} na panelu nástrojů nebo stiskněte {{key:S}}. (Když je vybrána plocha, můžete v pravém panelu zvolit {{ui:Skica na této ploše}}; u roviny {{ui:Skica na ní}}.)

Pohled se otočí kolmo k rovině, na panelu nástrojů se objeví nástroje skici a nástroj Úsečka je připraven. Stisknete-li {{ui:Skica}} bez výběru, zobrazí se základní roviny a ve stavovém řádku se objeví text "Klikněte na rovinu nebo plochou pro kreslení skici. Esc ukončí."

:::note
Zakřivená plocha nemůže nést skicu: "Tato plocha je zakřivená. Vyberte plochou plochu nebo rovinu, na kterou skicu nakreslíte."
:::

**Skica na ploše sleduje tuto plochu.** Pokud plocha vznikla hranou skici nebo koncem vytažení, nová skica se posune, když se prvek změní (hlubší kapsa si s sebou vezme skicu na svém dně). Pokud panel uvádí, že plocha je "Pevná v místě výběru", skica zůstane tam, kde je plocha nyní.

## Kreslicí nástroje

Každý nástroj má tlačítko na panelu nástrojů a klávesu. Opětovným výběrem stejného tlačítka, stisknutím {{key:S}} nebo {{key:Esc}} se vrátíte k nástroji Výběr.

| Nástroj | Klávesa | Jak kreslit |
|---|---|---|
| {{ui:Úsečka}} | {{key:L}} | Klikněte na začátek a potom na každý další bod. Úsečky na sebe navazují. Řetězec ukončíte klávesou {{key:Esc}}, {{key:Enter}}, pravým tlačítkem nebo dvojklikem. Kliknutí na existující bod řetězec také ukončí |
| {{ui:Obdélník}} | {{key:R}} | Klikněte na jeden roh a potom na protilehlý roh. Dostanete čtyři úsečky spojené v rozích, dvě vodorovné a dvě svislé |
| {{ui:Kružnice}} | {{key:C}} | Klikněte na střed a potom na bod na kružnici |
| {{ui:Oblouk}} | {{key:A}} | Klikněte na střed, potom na začátek a na konec. Oblouk vede podle toho, jak pohybujete ukazatelem kolem středu |
| {{ui:Bod}} | {{key:P}} | Klikněte. Samostatný bod označuje střed díry pro {{ui:Díra}} |
| {{ui:Osová čára}} | {{key:N}} | Jako úsečka, po jednom úseku. Kreslí se čárkovaně; je to konstrukční geometrie, používá se jako osa rotace nebo reference |
| {{ui:Zaoblení}} | {{key:F}} | Klikněte na roh, kde se setkávají dvě úsečky, zadejte poloměr a stiskněte {{key:Enter}} |
| {{ui:Spline}} | {{key:B}} | Klikejte na body, kterými křivka prochází; {{key:Enter}} ukončí, kliknutí na první bod ji uzavře. Viz [Spliny, oříznutí, odsazení a další nástroje skic](topic:sketch-tools) |
| {{ui:Oříznout}} | {{key:T}} | Klikněte na část křivky, která se má odstranit, až k nejbližším průsečíkům |
| {{ui:Kóta}} | {{key:D}} | Viz [Plné určení skici](topic:relations-dimensions) |

Během kreslení zobrazuje malé pole vedle ukazatele délku, velikost, průměr nebo poloměr.

### Zadání velikosti při kreslení

Po prvním kliknutí u úsečky, obdélníku, kružnice nebo oblouku můžete velikost zadat místo klikání. Když napíšete číslo, otevře se pole vedle ukazatele s tímto číslem:

| Nástroj | Pole ({{key:Tab}} přesune na další) | Co se stane po {{key:Enter}} |
|---|---|---|
| {{ui:Úsečka}}, {{ui:Osová čára}} | Délka, potom Úhel (°) od osy X skici | Úsečka se nakreslí s touto délkou směrem k ukazateli nebo pod zadaným úhlem; řetězec pokračuje od jejího konce |
| {{ui:Obdélník}} | Šířka, potom Výška | Obdélník se nakreslí od prvního rohu směrem k ukazateli; velikost, kterou jste nezadali, se převezme z ukazatele |
| {{ui:Kružnice}} | Průměr | Kružnice se nakreslí s tímto průměrem |
| {{ui:Oblouk}} | Poloměr po středu, potom Úhel oblouku (°) po začátku | Začátek je od středu vzdálen o tuto hodnotu; potom oblouk pokračuje o zadaný úhel ve směru, jakým jste pohybovali ukazatelem |

Každá zadaná velikost se ve stejném kroku změní na **řídicí kótu**, takže skica má správnou velikost: {{key:Mod+Z}} odstraní tvar i jeho kóty najednou. Pokud místo stisknutí {{key:Enter}} klepnete, zachovají se hodnoty, které jste zadali, a zbytek se převezme z kliknutí. {{key:Esc}} zavře pole a vrátí vás k ukazateli.

Pokud chcete kreslit jen klikáním, vypněte to v {{ui:Nastavení}} › {{ui:PartCraft}} › **Kótovat při kreslení**. Viz [Nastavení PartCraftu](topic:settings).

{{ui:Více}} na konci nástrojů skici obsahuje spline s řídicími body, prodloužení, odsazení, zrcadlení, mnohoúhelník, drážku, vzory skici a promítnutí hrany: viz [Spliny, oříznutí, odsazení a další nástroje skic](topic:sketch-tools).

### Přichycení

Přichycení přidává vazby automaticky, takže skica zůstane spojená, když se pohne:

- Na **koncovém bodu nebo počátku** se zobrazí malý čtverec. Nový bod se s ním ztotožní.
- Na **úsečce, kružnici nebo oblouku** se zobrazí malý křížek. Nový bod se umístí na tuto křivku.
- Úsečka odchylující se od vodorovné nebo svislé o méně než 3 stupně se k ní přichytí a získá vazbu vodorovnosti nebo svislosti. Popisek ukazuje "H" nebo "V".

Přichycení se vyhnete tak, že přiblížíte pohled, abyste klikli dál od bodu nebo křivky.

## Zaoblení rohu

1. Stiskněte {{key:F}} nebo zvolte {{ui:Zaoblení}}.
2. Klikněte na roh, kde se setkávají dvě úsečky.
3. Otevře se pole s navrženým poloměrem. Zadejte poloměr a stiskněte {{key:Enter}}.

Obě úsečky se oříznou a spojí tečným obloukem s kótou poloměru. Můžete se setkat se zprávami: "Zaoblení vyžaduje roh, kde se setkávají přesně dvě úsečky." a "Tento poloměr je pro tyto úsečky příliš velký."

:::tip
Zaoblení ve skici zaoblí roh profilu, takže vytažení dostane zaoblené svislé hrany. Chcete-li zaoblit hrany samotného tělesa (například horní hrany desky), použijte místo toho prvek {{ui:Zaoblení}} na dílu: viz [Zaoblení, zkosení a skořepina](topic:fillet-chamfer-shell). Ve skici je {{ui:Zaoblení}} na panelu nástrojů nástrojem skici; na dílu je to prvek.
:::

## Konstrukční geometrie

Konstrukční úsečky, kružnice a oblouky jsou čárkované a šedé. Vedou skicu, ale nejsou součástí profilu, který se vytahuje nebo rotuje.

1. Vyberte úsečky, kružnice nebo oblouky.
2. Stiskněte {{key:Q}} nebo zvolte {{ui:Konstrukce}}. Opětovným stisknutím je vrátíte zpět.

## Výběr, přesun a smazání

Pro nástroj Výběr stiskněte {{key:S}} (nebo {{key:Esc}}, dokud není aktivní žádný nástroj).

- Kliknutím na bod, úsečku, kružnici, oblouk, symbol vazby nebo kótu je vyberete. {{key:Shift}}+klik přidá k výběru nebo z něj odebere. Ve Windows a Linuxu dělá totéž {{key:Ctrl}}+klik; na Macu ⌘+klik.
- Tažením po prázdném místě nakreslíte výběrové okno: vybere se vše, co je v něm celé obsaženo.
- Bod nebo úsečku přesunete tažením. Řešič při pohybu zachovává všechny vazby a kóty, takže se hýbe jen volná geometrie. Tažením okraje kružnice změníte její poloměr.
- Tažením čísla kóty přesunete popisek.
- Výběr smažete klávesou {{key:Delete}} nebo {{key:Backspace}}, případně zvolte {{ui:Smazat}} v pravém panelu. Smazání geometrie smaže i vazby na ni.

## Zoom a posun ve skici

- Otáčením kolečka myši přibližujete a oddalujete u ukazatele.
- Tažením prostředním nebo pravým tlačítkem posouváte pohled.
- {{ui:Přizpůsobit}} na panelu nástrojů nebo v pravém panelu přizpůsobí skicu pohledu. Ve skici je klávesa {{key:F}} nástroj Zaoblení, ne Přizpůsobit.

## Zavření skici

Zvolte {{ui:Konec}} na panelu nástrojů nebo {{ui:Ukončit skicu}} v pravém panelu, případně stiskněte {{key:Esc}}, dokud se skica nezavře. Každé stisknutí {{key:Esc}} nejprve zruší rozpracovanou akci, potom se vrátí k výběru, potom zruší výběr, a další stisknutí skicu zavře.

Skica zůstane vybraná, takže příští {{ui:Vytáhnout}} nebo {{ui:Rotace}} ji použije.

## Co tvoří dobrý profil

{{ui:Vytáhnout}} a {{ui:Rotace}} používají **každou uzavřenou smyčku** z běžných (nekonstrukčních) úseček, kružnic, oblouků a splinů skici. Smyčky uvnitř smyček se stanou dírami.

- Každý konec se musí setkat právě s jedním dalším koncem. Hlášení "Profil je otevřený: konec v (12.5, 40) není s ničím spojen." udává místo.
- Ve stejném bodě se nesmějí setkat tři konce: "Profil se větví v (0, 20): setkávají se tam více než dva konce."
- Body a konstrukční geometrie se v profilu ignorují.

Dále: [Plné určení skici vazbami a kótami](topic:relations-dimensions).

## Skica z fotografie

**Prvky › Více › Skica z fotografie…** (nebo skupina Skica na pásu nástrojů stromu prvků) obrysuje fotografii plochého dílu na jednoduchém podkladu (jeho obrys a díry) nebo kresbu tužkou a převede ji na skicu úseček, oblouků a kružnic. Zadejte jednu délku (šířku, výšku nebo nejdelší stranu), aby skica měla správnou velikost, zkontrolujte, co program našel v náhledu, a zvolte **Vytvořit skicu**; může ji rovnou i vytáhnout, ve stejném kroku zpět. Zpracovává se na tomto počítači. Poloměry rohů vyjdou zhruba do 5 %, detaily o pixel nebo dva se ztratí, a fotografie pořízená šikmo nebo se stíny přes díl se nevyrovnává: fotografujte díl kolmo, při rovnoměrném světle.
