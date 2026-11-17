---
title: Nabídky, klávesy a myš
summary: Vyberte styl nabídek, který odpovídá tomu, jak už pracujete, přiřaďte libovolnému příkazu vlastní klávesu, přesuňte příkazy mezi karty pásu a nastavte, co dělá kolečko a každé tlačítko myši ve 3D pohledu.
keywords: styl nabídek, nabídky, pás karet, panel nástrojů, strom prvků, klávesové zkratky, zkratky, klávesy, přizpůsobit, přemapovat, přiřadit znovu, myš, kolečko, obrátit, směr zoomu, prostřední tlačítko, otáčení, posun, export, import, přepínání, známý
from: 8445b06c
---

Příkazy PartCraftu jsou stejné, ať se k nim dostanete jakkoli. **Styl nabídek** určuje jen to, kde jsou na obrazovce, jak se tam jmenují a kterými klávesami se spouštějí. Vyberte jej v {{ui:Settings}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Nabídky, klávesy a myš}}; změna se projeví hned a tento prohlížeč si ji zapamatuje.

## Dva styly

| Styl | Co dostanete |
|---|---|
| {{ui:PartCraft}} | Vlastní panel nástrojů PartCraftu: přepínač pracovních prostorů, {{ui:Soubor}}, {{ui:Skica}}, {{ui:Prvky}}, {{ui:Výkres}}, {{ui:Sestava}}, Upravit a {{ui:Pohled}}. Klávesy {{key:S}} skica, {{key:F}} přizpůsobit, {{key:M}} měřit, {{key:X}} pohled do řezu. Výchozí. |
| {{ui:Strom prvků}} | Pás karet uspořádaný tak, jak to dělají programy mechanického CAD založené na prvcích: nabídka {{ui:Soubor}} (se všemi exporty), rychlá tlačítka a karty {{ui:Prvky}}, {{ui:Skica}}, {{ui:Plochy}}, {{ui:Vyhodnocení}}, {{ui:Výkres}}, {{ui:Sestava}}, {{ui:Studie}} (pracovní prostory a jejich nástroje), {{ui:Illustrate}} (ruční nástroje pracovního prostoru Illustrate; jeho nástroje se nejprve přepnou na Illustrate) a {{ui:Pohled}}. {{ui:Prvky}} začínají {{ui:Skica}}, protože díl začíná skicou. Další klávesy: {{key:E}} vytažení, {{key:H}} díra, a {{key:V}} pak písmeno pro pohled: {{key:V}} {{key:F}} zepředu, {{key:V}} {{key:B}} zezadu, {{key:V}} {{key:T}} shora, {{key:V}} {{key:O}} zdola, {{key:V}} {{key:R}} zprava, {{key:V}} {{key:L}} zleva, {{key:V}} {{key:I}} izometrie, {{key:V}} {{key:N}} kolmo k. Ve 3D pohledu prostřední tlačítko otáčí, {{key:Shift}} s prostředním tlačítkem a pravé tlačítko posouvají, levé tlačítko jen vybírá. |

Každý styl zachovává {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} a {{key:Mod+A}}.

Nástroj jiného pracovního prostoru se nejprve přepne do něj; nástroj Design vybraný v jiném pracovním prostoru se nejprve vrátí do Design. Nástroje skici čekají na skicu, nástroje výkresu na list výkresu, nástroje sestavy na sestavu: stavový řádek říká, co udělat jako první.

:::tip
Ve skice, na listu výkresu, v sestavě a v ostatních pracovních prostorech si písmena v každém stylu zachovávají svůj význam ({{key:L}} úsečka, {{key:R}} obdélník, {{key:J}} spoj …). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} a šipky si vždy zachovávají svůj. Klávesa z rozložení PartCraftu, kterou váš styl dal jinému příkazu, nedělá nic, a stavový řádek ukáže, kam se její příkaz přesunul.
:::

## Upravte si to podle sebe

1. Vyberte styl nejblíže tomu, co chcete, a klikněte na {{ui:Přizpůsobit…}}.
2. Na {{ui:Klávesy a nabídky}} najděte příkaz (pomůže vyhledávací pole). Klikněte na {{ui:Přidat klávesu}} a stiskněte klávesu, nebo dvě klávesy za sebou. Kliknutím na klávesu ji odeberete.
3. U pásu karet {{ui:Kde je}} přesune příkaz na jinou kartu a panel, do nabídky {{ui:Soubor}}, nebo na {{ui:Jen klávesy}}.
4. Na {{ui:Myš}} nastavte kolečko, tlačítka, která posouvají skicu, a co dělá každé tlačítko ve 3D pohledu.
5. Dejte mu název a klikněte na {{ui:Uložit}}.

Uložení vestavěného stylu vytvoří vaši vlastní kopii ("Můj strom prvků"); vestavěný se nikdy nemění. Klávesa přiřazená dvěma příkazům, nebo taková, která by se spustila dřív, než by šlo napsat dvoupísmenovou klávesu, se zobrazí červeně a před uložením ji musíte opravit.

## Myš

- **Kolečko myši**: {{ui:Posun kolečkem nahoru přibližuje}} (výchozí) nebo {{ui:Posun kolečkem nahoru oddaluje}}, a jak rychle. Stažení a roztažení prsty na touchpadu vždy zoomuje směrem, kterým se pohybují vaše prsty.
- **Posun skice**: prostředním tlačítkem, pravým tlačítkem, nebo obojím. Pravý klik ve skice pořád ukončí krok nástroje.
- **Tažení ve 3D pohledu**: {{ui:Vlastní pro každý pohled}} ponechá nastavení PartCraftu ({{ui:Settings}} › {{ui:PartCraft}}: levé otáčí, nebo prostřední otáčí). Nebo nastavte každé tlačítko na otáčení, posun, zoom nebo nic; {{key:Shift}} s tlačítkem otáčení posouvá. Klik bez tažení stále vybírá.

## Vezměte si to s sebou

{{ui:Export}} uloží používaný styl jako malý soubor `.ccinput.json`; {{ui:Importovat…}} přidá jeden, z jiného počítače nebo od kolegy. Importovaný soubor může odkazovat jen na příkazy PartCraftu: cokoli jiného v něm se vynechá a započítá ve stavovém řádku. {{ui:Smazat tento styl}} odstraní některý z vašich vlastních.

:::note
Tato nastavení zůstávají v tomto prohlížeči. {{ui:Používat tento styl ve všech aplikacích}} pod kartami stylů způsobí, že se každá aplikace otevře v odpovídajícím stylu (vlastní panel nástrojů, nebo pás), se změnami, které jste v každé aplikaci udělali. Výběr jiného stylu v jedné aplikaci změní jen tu aplikaci.
:::

Související: [Klávesy a myš](topic:keyboard) · [Nastavení PartCraftu](topic:settings) · [Přechod z jiného parametrického modeláře](topic:coming-from)
