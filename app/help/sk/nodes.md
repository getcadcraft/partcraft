---
title: Uzly: vytvorenie modelu prepájaním
summary: Prepojte čísla do bodov, body do kriviek a krivky do plôch. Zmeňte číslo a všetko, čo nadväzuje, sa prestaví. Každý uzol je zároveň riadok CraftScriptu a graf sa uloží do súboru.
keywords: uzly, editor uzlov, vizuálne skriptovanie, parametrický, graf, prepojenia, porty, voľný tvar, freeform, nurbs, loft, vytiahnutie, rotácia, kružnica, krivka, plocha, rad, rozsah, náhodný, zoznam, skript, craftscript, grasshopper
from: 3a4625de
---

Editor **Uzly** vytvára geometriu tak, že spája rámčeky. Každý rámček (uzol) robí jednu malú úlohu: vytvorí číslo, bod, kružnicu, loft. Výsledok jedného uzla pripojíte na vstup ďalšieho a model sa riadi podľa toho, keď zmeníte číslo na začiatku.

Otvorte ho zo zoznamu pracovných priestorov: {{ui:Uzly}}. Otvorí sa okno editora. Súčiastka, ktorá už má graf, ho zobrazí, keď otvoríte pracovný priestor. Je to okno nad 3D pohľadom: potiahnite jeho titulok na presun a jeho roh na zmenu veľkosti.

## Prepájanie

1. Vyberte uzol zo zoznamu vľavo (do vyhľadávacieho poľa napíšte text, aby sa zoznam zúžil; <kbd>Enter</kbd> pridá prvú zhodu). Uzol sa objaví v strede plátna.
2. Potiahnite z okrúhlej bodky **výstupu** vpravo od jedného uzla na okrúhlu bodku **vstupu** vľavo od druhého. Bodka sa zmení na zelenú, ak sa to hodí, a na červenú, ak nie; ukážte na ňu a uvidíte dôvod.
3. Vstup, na ktorý nič nie je pripojené, zobrazí políčko na zadanie hodnoty. Napíšte číslo a stlačte <kbd>Tab</kbd>: výsledok sa prebuduje.
4. Malý kruh v titulku uzla je jeho **oko**. Uzol so zapnutým okom sa kreslí v 3D pohľade: ako čiary pre krivky, tieňované pre plochy, ako bodky pre body.

Uzol potiahnite za titulok. Potiahnutím pozadia posúvate, kolieskom myši zväčšujete. <kbd>Delete</kbd> odstráni označený uzol. {{ui:Usporiadať}} rozmiestni uzly do stĺpcov, {{ui:Prispôsobiť}} ich všetky zobrazí v okne, {{ui:Späť}} a {{ui:Znova}} prechádzajú vaše úpravy.

## Typy a jednotky

Porty majú typ: číslo, áno/nie, bod, vektor, krivka, plocha, sieť, teleso, alebo "geometry" pre ktorýkoľvek z nich. Bod môže napájať vektorový vstup a naopak. Čísla nesú jednotku: **dĺžka** je v milimetroch a **uhol** v stupňoch. Dĺžka nemôže napájať uhol a dĺžka vynásobená dĺžkou (plocha) sa odmietne, takže nesprávne prepojenie sa zastaví hneď, ako ho vytvoríte.

Štvorcová bodka je **zoznam**. Keď zoznam dorazí na jednohodnotový vstup, uzol sa spustí raz pre každú položku a jeho výsledok je tiež zoznam. Kratší zoznam zopakuje svoju poslednú položku. Napríklad **Rad** výšok vložený do **Presunúť** vytvorí stoh kópií.

## Telesá a booleovské operácie ako uzly

Skupina **Telesá** vytvára uzavreté telesá z tých istých presných plôch ako panel Plochy: **Kvádrové teleso**, **Valcové teleso** a **Guľové teleso** (veľkosti v mm), **Zjednotenie**, **Odčítanie** a **Prienik** (druhé teleso sa berie z prvého; tolerancia určuje, ako ďaleko môžu byť trojuholníky telesového jadra od presných plôch), **Zaoblenie medzi plochami** (plochy podľa ich čísla v telese, 1 pre prvú; polomer a, ak je nad 0, polomer na konci), **Objem telesa** (mm³) a **Teleso na sieť** (na zobrazenie alebo zapečenie). Teleso má vlastný typ portu: bod ani číslo sa nedá prepojiť na vstup telesa a bodka zostane červená. Uzly booleovských operácií a zaoblenia používajú telesové jadro programu, ktoré sa načíta pri prvom otvorení editora.

## Chyby

Uzol, ktorý nemôže vykonať svoju úlohu, vysvetlí to pod svojím názvom červenou farbou ("Polomer musí byť väčší ako nula."), a nasledujúce uzly čakajú. Rovnaká správa je v paneli Problémy, odkiaľ ju môžete nájsť.

## Každý uzol je riadok skriptu

Stlačte {{ui:Skript}} a uvidíte graf ako CraftScript: jeden riadok na uzol, napríklad `n3 = nd_circle(n2, n1, [0 0 1]);`. Upravte text a stlačte {{ui:Vytvoriť graf z tohto skriptu}}, aby sa vrátil ako graf. Rovnaké funkcie `nd_` fungujú aj v CraftScripte v PartCraft, takže sa graf dá tam spustiť, zacykliť alebo otestovať. Náhodné čísla vždy berú **seed**, takže rovnaký graf dá na každom počítači rovnaký výsledok.

## Uložené so súborom

Graf sa uloží do súboru súčiastky (nie do histórie, takže {{ui:Späť}} v editore má vlastnú históriu). Uzly vytvárajú krivky, plochy a siete popri telese: nemenia prvky súčiastky.
