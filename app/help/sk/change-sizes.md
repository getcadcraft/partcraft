---
title: Zmena rozmerov bez otvorenia náčrtu
summary: Ovládajte súčiastku číslami na pravom paneli: kóty náčrtu, hĺbky, počty a uhly, ako naplánovať súčiastku tak, aby ju riadili správne čísla, a kde preberajú úlohu parametre a rovnice.
keywords: parametre, riadiace kóty, zámer návrhu, zmena rozmeru, rovnice, globálne premenné, tabuľka návrhu, konfigurácie, zmena veľkosti, úprava kóty
from: c2ae1a32
---

Každý rozmer v súčiastke PartCraft je číslo, ktoré môžete neskôr zmeniť: kóty jej náčrtov a nastavenia jej prvkov. Na zmenu kót nemusíte otvárať náčrt.

## Zmena kóty náčrtu z panela

1. Kliknite na prvok v histórii, napríklad "Extrude1".
2. V nastaveniach vytiahnutia v časti **Kóty náčrtu (Sketch1)** sú uvedené všetky kóty jeho náčrtu: Vzdialenosť, Priemer, Uhol (°) a podobne.
3. Zadajte novú hodnotu do jedného poľa a stlačte {{key:Enter}} alebo {{key:Tab}}.

Náčrt sa vyrieši s novou hodnotou a celá súčiastka sa znova zostaví. Výber samotného náčrtu zobrazí rovnaký zoznam ako **Riadiace kóty**.

Polomer alebo priemer musí byť väčší ako nula a uhol je medzi 0 a 180 stupňami; ak nie, stavový riadok to oznámi.

:::tip
Ktoré pole je ktoré? Polia sú uvedené v poradí, v akom boli kóty vytvorené. Ak si nie ste istí, otvorte náčrt (dvojklikom na neho), dvojklikom na kótu v náčrte ju nájdite a zmeňte ju tam.
:::

## Okamžité zadanie hlavného čísla

Vyberte prvok v histórii (alebo ho práve pridajte) a zadajte číslo: pôjde do hlavného poľa prvku, toho, ktoré meníte najčastejšie (**Hĺbka** vytiahnutia, **Uhol** rotácie, **Priemer** otvoru, **Počet** vzoru, **Polomer** zaoblenia, stena škrupiny). Stlačte {{key:Enter}} na nastavenie alebo {{key:Esc}} na ponechanie starej hodnoty. Pridanie vytiahnutia to oznámi v stavovom riadku: "Extrude1 bol pridaný. Zmeňte jeho čísla vpravo alebo zadajte číslo hneď pre jeho hĺbku."

## Zmena čísla v histórii

Riadok každého prvku v histórii zobrazuje jeho hlavné číslo vedľa názvu: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dvojklikom na číslo (alebo vyberte riadok a stlačte {{key:F2}}) sa priamo tam otvorí pole. Zadajte novú hodnotu a stlačte {{key:Enter}}; {{key:Esc}} ponechá starú. Funguje to presne ako pole prvku vpravo: rovnaké limity, `=` na zadanie rovnice, napríklad `=width/2`, a jeden krok späť.

Pri vytiahnutí, otvore alebo vzore sa pole otvorí dvojklikom kdekoľvek na riadku. Pri zaoblení, skosení, škrupine, úkose alebo závite dvojklik na názov stále slúži na výber hrán alebo plôch, preto dvakrát kliknite priamo na číslo. Náčrty nemajú v riadku číslo: dvojklik otvorí náčrt.

## Ťahanie v pohľade

Vyberte vytiahnutie v histórii (alebo naň kliknite v pohľade a potom v jeho riadku) a na jeho koncovej ploche sa objaví oranžová šípka s hĺbkou v poli vedľa nej. Potiahnite šípku: súčiastka sa pohybuje spolu s ťahaním a pustením sa nová hĺbka nastaví ako jeden krok ({{key:Mod+Z}} ju vráti späť). Ak počas ťahania stlačíte {{key:Esc}}, vrátite sa na pôvodné miesto. Hĺbka sa mení po krokoch s veľkosťou jednej desatiny: 1 mm pri vytiahnutí 25 mm, 0.1 mm pri vytiahnutí 3 mm.

Rotácia dostane zakrivenú šípku na konci otočenia: potiahnutím okolo osi zmeníte uhol, po celých stupňoch od 1° do 360°.

Alebo kliknite do poľa vedľa šípky, zadajte hodnotu (alebo `=` a rovnicu) a stlačte {{key:Enter}}. Vytiahnutie, ktoré ide **Cez všetko** alebo až po plochu, ani hodnota riadená rovnicou nemá šípku: tieto zmeňte vpravo.

## Čísla, ktoré riadia súčiastku

| Kde | Čo možno zmeniť |
|---|---|
| Náčrt | Každú kótu: dĺžky, vzdialenosti, polomery, priemery, uhly |
| Vytiahnutie a Vyrezanie | Hĺbku, podmienku ukončenia, smer, výstupok alebo vyrezanie |
| Rotácia a rotačné vyrezanie | Uhol, os, výstupok alebo vyrezanie |
| Otvor | Priemer, hĺbku, cez všetko, priemer a hĺbku zapusteného otvoru |
| Zaoblenie, Skosenie, Škrupina | Polomer, vzdialenosť, hrúbku steny a smer a ktoré hrany alebo plochy |
| Lineárne a Kruhové | Počet, rozstup alebo uhol, smer alebo os |
| Súčiastka | Krivky (ako jemne sa fazetujú guľaté tvary) |
| Výkres | Kde rez prechádza, veľkosť a mierka detailu, hodnoty GD&T |

## Naplánujte súčiastku tak, aby ju riadili správne čísla

Čísla, ktoré zadáte, sú tie, ktoré môžete neskôr meniť. Niekoľko návykov zabezpečí, že sa zmeny budú správať správne:

- **Okótujte to, čo je pre prácu dôležité.** Ak musí otvor zostať 15 mm od hrany, okótujte ho od tejto hrany, nie od začiatku.
- **Úplne určte náčrty.** Potom zmena pohne len tým, čím má (pozri [Úplné určenie náčrtu](topic:relations-dimensions)).
- **Používajte väzby pre zámer.** Rovnosť pri dvoch otvoroch znamená, že jeden priemer riadi oba. Symetrické tvary: umiestnite začiatok na stredovú os alebo použite stred úsečky.
- **Kreslite náčrty na plochách vytvorených prvkami.** Náčrt na koncovej ploche vytiahnutia sa pohne, keď sa zmení hĺbka.
- **Použite vzor namiesto kopírovania.** Jeden otvor zopakovaný osemkrát má jeden priemer na zmenu.

## Viac ako jednotlivé čísla

- **Jedno číslo riadi viacero:** použite parametre a rovnice: [Riadenie súčiastky parametrami](topic:parameters).
- **Viacero veľkostí jednej súčiastky:** uložte každú ako [konfiguráciu](topic:design-tables); uchovávajú sa v súbore súčiastky.
- **Aritmetika v poli čísla:** zadajte `=40/2` alebo `=width / 2`. Vznikne tým rovnica; pozri [Rovnice oboma smermi](topic:equations-two-way).
- **Palce:** súčiastka zobrazuje milimetre. V poli čísla so `=` alebo v parametri sa `2in` prevedie na 50.8.

Pozri [Čo ešte nie je hotové](topic:not-built-yet).
