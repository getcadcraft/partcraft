---
title: Uzly: sestavení modelu propojováním
summary: Propojte čísla s body, body s křivkami a křivky s plochami. Změníte-li číslo, vše níže se přestaví. Každý uzel je také řádek CraftScriptu a graf se uloží do souboru.
keywords: uzly, editor uzlů, vizuální skriptování, parametrický, graf, spoje, porty, volný tvar, freeform, nurbs, lofting, vytažení, rotační těleso, kružnice, křivka, plocha, řada, rozsah, náhodný, seznam, skript, craftscript, grasshopper
from: 3a4625de
---

Editor **Uzly** sestavuje geometrii propojováním krabiček. Každá krabička (uzel) udělá jednu malou práci: vytvoří číslo, bod, kružnici, lofting. Výsledek jednoho napojíte na vstup dalšího a model následuje, když změníte číslo na začátku.

Otevřete jej ze seznamu pracovního prostoru: {{ui:Uzly}}. Otevře se okno editoru. Díl, který už graf má, jej ukáže při otevření pracovního prostoru. Je to okno nad 3D pohledem: táhněte za jeho záhlaví pro přesun, za roh pro změnu velikosti.

## Propojování

1. Vyberte uzel ze seznamu vlevo (psaním do vyhledávacího pole zúžíte výběr; <kbd>Enter</kbd> přidá první shodu). Objeví se doprostřed plátna.
2. Táhněte od kulatého bodu **výstupu** vpravo od jednoho uzlu ke kulatému bodu **vstupu** vlevo od jiného. Bod zezelená, když to sedí, a zčervená, když ne; najetím ukážete důvod.
3. Vstup, do kterého nic nevede, ukazuje políčko pro zadanou hodnotu. Napište číslo a stiskněte <kbd>Tab</kbd>: výsledek se přestaví.
4. Malý kroužek v záhlaví uzlu je jeho **oko**. Uzel s otevřeným okem se kreslí v 3D pohledu: křivky jako čáry, plochy stínovaně, body jako tečky.

Táhněte uzel za záhlaví. Táhněte pozadí pro posun, kolečkem přibližujete. <kbd>Delete</kbd> smaže vybraný uzel. {{ui:Uspořádat}} seřadí uzly do sloupců, {{ui:Přizpůsobit}} je všechny zobrazí, {{ui:Zpět}} a {{ui:Znovu}} procházejí vaše úpravy.

## Typy a jednotky

Porty mají typ: číslo, ano/ne, bod, vektor, křivka, plocha, síť, těleso, nebo „geometrie“ pro kterýkoli z nich. Bod může napájet vektorový vstup a naopak. Čísla nesou jednotku: **délka** je v milimetrech a **úhel** ve stupních. Délka nemůže napájet úhel a délka krát délka (plocha) je odmítnuta, takže chybný spoj je zastaven už při vytváření.

Čtvercová tečka je **seznam**. Když seznam dorazí na vstup pro jedinou hodnotu, uzel proběhne jednou pro každou položku a jeho výsledek je seznam. Kratší seznam opakuje svou poslední položku. Například **Řada** výšek napojená do **Přesunout** vytvoří zásobník kopií.

## Tělesa a Booleovy operace jako uzly

Skupina **Tělesa** vytváří uzavřená tělesa ze stejných přesných ploch jako panel Plochy: **Krabice těleso**, **Válec těleso** a **Koule těleso** (rozměry v mm), **Sjednocení**, **Odečtení** a **Průnik** (druhé těleso se bere z prvního; tolerance je, jak daleko smějí trojúhelníky tělesového jádra být od přesných ploch), **Zaoblení mezi plochami** (plochy podle jejich čísla v tělese, 1 pro první; poloměr a, nad 0, poloměr na konci), **Objem tělesa** (mm³) a **Těleso na síť** (pro zobrazení nebo zapečení). Těleso má vlastní typ portu: bod ani číslo nelze napojit na vstup tělesa a bod zůstane červený. Uzly Booleovských operací a zaoblení používají vlastní tělesové jádro programu, které se načte při prvním otevření editoru.

## Chyby

Uzel, který svou práci nezvládne, řekne proč pod svým názvem, červeně („Poloměr musí být větší než nula.“), a následující uzly čekají. Stejná zpráva je problém v panelu Problémy, takže ji najdete odtud.

## Každý uzel je řádek skriptu

Stiskněte {{ui:Skript}}, abyste viděli graf jako CraftScript: jeden řádek na uzel, například `n3 = nd_circle(n2, n1, [0 0 1]);`. Upravte text a stiskněte {{ui:Vytvořit graf z tohoto skriptu}}, aby se vrátil jako graf. Stejné funkce `nd_` fungují v CraftScriptu v PartCraft, takže graf lze tam spustit, opakovat nebo testovat. Náhodná čísla vždy berou **seed** (počáteční hodnotu), takže stejný graf dá stejný výsledek na každém počítači.

## Uloženo se souborem

Graf se uloží do souboru dílu (ne do historie, takže Zpět v editoru je vlastní). Uzly vytvářejí křivky, plochy a sítě vedle tělesa a nemění prvky dílu.
