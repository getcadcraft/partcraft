---
title: Kopírování, vložení a duplikace
summary: Kopírujte geometrii skic, prvky a díly sestavy; vkládejte, kam kliknete, nebo na stejné místo; duplikujte jedním krokem; a zjistěte, co se s kopií přenese a co ne.
keywords: kopírovat, vložit, vyjmout, duplikovat, schránka, vložit na stejné místo, vybrat vše, zrušit výběr, smazat, ctrl c, ctrl v, ctrl d, instance, komponenta, kopírovat skicu, kopírovat prvek, kopírovat díl
from: 611307d7
---

Skupina {{ui:Upravit}} na panelu nástrojů obsahuje {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}} a nabídku {{ui:Více}} s {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}} a {{ui:Zrušit výběr}}, každé s klávesou. Co kopírují, závisí na tom, kde jste: geometrie v otevřené skice, prvek v historii, nebo díl v sestavě.

Šedá položka teď nemůže zasáhnout. Najeďte na ni: popisek vysvětlí proč, například „Nejdřív vyberte geometrii skici", nebo „Schránka obsahuje Sketch2 a Extrude2: prvky se vkládají do historie, takže nejdřív ukončete skicu".

| Akce | Klávesa | Ve skice | V historii | V sestavě |
|---|---|---|---|---|
| Kopírovat | {{key:Mod+C}} | Vybrané body a křivky | Vybraná skica, vytažení, rotace nebo díra (se svou skicou) | Vybraný díl |
| Vyjmout | {{key:Mod+X}} | Zkopírovat, pak smazat | Zkopírovat, pak smazat prvek | Zkopírovat, pak odebrat díl |
| Vložit | {{key:Mod+V}} | Kopie následuje ukazovátko; klikněte, kam má jít | Přidá kopii na konec historie | Nová kopie vedle ostatních dílů |
| Vložit na stejné místo | {{key:Mod+Shift+V}} | Na stejné souřadnice | Stejné jako Vložit | Na stejném místě jako zkopírovaný díl |
| Duplikovat | {{key:Mod+D}} | Zkopírovat a přesunout najednou; schránka zůstane nedotčena | Druhá kopie hned za vámi | Druhá kopie vedle ostatních dílů |
| Smazat | {{key:Delete}} | Výběr | Prvek (zeptá se, pokud ho jiné prvky používají) | Díl nebo vazba |
| Vybrat vše | {{key:Mod+A}} | Vše ve skice | Nedostupné | Nedostupné |
| Zrušit výběr | {{key:Esc}} | Zruší výběr | Zruší výběr i výběr plochy | Zruší výběr |

Každé vložení, duplikace a vyjmutí je jeden krok v seznamu zpět: {{key:Mod+Z}} jej vrátí, {{key:Mod+Y}} jej obnoví.

## Ve skice

1. Vyberte, co kopírovat: klikněte, {{key:Shift}}+klik pro další, přetáhněte okno, nebo stiskněte {{key:Mod+A}} pro vše.
2. Stiskněte {{key:Mod+C}}, nebo zvolte {{ui:Kopírovat}}. Stavový řádek říká, co bylo zkopírováno.
3. Stiskněte {{key:Mod+V}}, nebo zvolte {{ui:Vložit}}. Přerušovaná kopie následuje ukazovátko, držená za střed. Přichytává se k bodům: chcete-li dát střed zkopírované kružnice na bod, klikněte na tento bod.
4. Klikněte, kam má jít. Vložená geometrie zůstane vybraná, takže ji můžete hned přesunout nebo přidat vazby. {{key:Esc}} vložení zruší.

Co se přenese:

- Zkopírovaná úsečka, kružnice nebo oblouk přinese vlastní koncové body a střed.
- Vazby a kóty **mezi zkopírovanými položkami** se přenesou: zkopírovaný obdélník zůstane obdélníkem se svými rozměry.
- Vazby **k geometrii, kterou jste nezkopírovali**, a k počátku se zahodí. Stavový řádek je počítá: „2 vazby k geometrii mimo kopii se nepřenesou". Vložená kopie se tedy volně pohybuje, dokud ji nespojíte vazbami nebo kótami.
- Pevný bod zůstane pevný na nové poloze.

{{ui:Vložit na stejné místo}} umístí kopii přesně na souřadnice originálu, v této nebo jiné skice. Hodí se k přenesení profilu z jedné skici do druhé. Ve stejné skici leží kopie na originálu; odtáhněte ji.

{{ui:Duplikovat}} ({{key:Mod+D}}) zkopíruje výběr a hned začne umisťovat, aniž by se dotkl schránky.

:::tip
Chcete-li opakovat střed díry nebo drážku několikrát, zkopírujte ji jednou a vložte několikrát: každé {{key:Mod+V}} začne novou kopii, která následuje ukazovátko.
:::

## V historii

1. Klikněte v historii na skicu, vytažení, rotaci nebo díru.
2. {{key:Mod+C}} ji zkopíruje. Prvek založený na skice se kopíruje spolu se svou skicou.
3. {{key:Mod+V}} přidá kopii na konec historie (u lišty návratu, když jste se vrátili), s novými názvy jako Sketch3 a Extrude2.

Kopie leží na stejné rovině nebo ploše jako originál, takže staví na něm a díl vypadá stejně. Chcete-li kopii přesunout, vyberte novou skicu a změňte její rovinu na pravém panelu, nebo ji otevřete a přetáhněte či znovu okótujte profil.

- Vložení do **jiného dílu**: otevřete ten díl a stiskněte {{key:Mod+V}}. Pokud skica kopie byla na ploše, kterou onen díl nemá, dá se na přední rovinu a stavový řádek to řekne.
- {{ui:Duplikovat}} dělá kopírování a vložení najednou, uvnitř téhož dílu.
- {{ui:Vyjmout}} zkopíruje prvek a pak jej smaže (pokud ho jiné prvky používají, zeptá se nejdřív).

Vzory, zrcadla, zaoblení, sražení, skořepiny a importovaná tělesa nelze kopírovat: visí na hranách, plochách nebo prvcích vybraných v tomto dílu. Zkopírujte místo toho skicu nebo prvek, na kterých jsou postaveny, nebo je vzorujte pomocí {{ui:Lineární}} nebo {{ui:Kruhový}}.

## V sestavě

1. Klikněte na díl v pohledu nebo v seznamu vlevo.
2. Zvolte {{ui:Duplikovat}} ({{key:Mod+D}}), nebo {{key:Mod+C}} a pak {{key:Mod+V}}.

Nová kopie je **stejný díl**: upravíte-li jednu, každá kopie se změní. Objeví se 20 mm vpravo od všeho, co je v sestavě, otočená stejně jako kopie, a zůstane tam, dokud ji vazba neumístí. {{ui:Vložit na stejné místo}} ({{key:Mod+Shift+V}}) ji umístí přesně tam, kde je zkopírovaný díl. Spojte ji vazbou, abyste ji přesunuli (odsazení posuvné vazby ji posune podél osy).

Vložení dílu zkopírovaného z jiné sestavy přinese díl s sebou, stejně jako {{ui:Vložit}} z jeho souboru. {{ui:Přidat kopii}} ve skupině Sestava dělá totéž jako {{ui:Duplikovat}} a funguje, i když nic není vybráno (kopíruje poslední díl).

## Schránka

- Je to schránka PartCraftu, ne počítače: geometrii PartCraftu nelze vložit do jiného programu ani text do pohledů PartCraftu.
- Uchovává se v tomto prohlížeči, takže jiná karta PartCraftu může vložit, co jste zkopírovali. Je načtena a ověřena jako otevřený soubor; cokoli poškozeného nebo z jiné verze je odmítnuto.
- Díl s velkým importovaným STEP souborem může být pro prohlížeč příliš velký na uchování. Pak se vloží jen v této kartě.
- V poli čísla nebo v hledání nápovědy fungují {{key:Mod+C}} a {{key:Mod+V}} jako obvykle pro text.

Na listu výkresu kopírování a vložení zatím nejsou dostupné. {{ui:Smazat}} a {{ui:Zrušit výběr}} fungují na vybraném symbolu. Viz [Zatím není hotovo](topic:not-built-yet).
