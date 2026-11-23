---
title: Skontrolovať tento rám
summary: Zoberte oceľové prvky zvarenca (sánky, stojan, rám z rúr a profilov), postavte zariadenie na nohy a podpery na podlahu a zistite, koľko z každého prvku a z každého zvaru je využité podľa AISC 360-16 alebo EN 1993. Pomôcka, kým ju neprekontroluje inžinier.
keywords: rám, zvarenec, sánky, čerpacie sánky, konštrukčný prvok, zvar, zvary, kontrola, AISC 360, EN 1993, využitie, podpora, zariadenie, zaťaženie, dutý profil, HSS, RHS, CHS, inžinier
from: 032e34ee
---

{{ui:Skontrolovať tento rám}} zoberie rovné oceľové prvky zvarenca, zostaví z nich rám, vyrieši ho pri hmotnosti ocele a zariadenia, ktoré na ňom stojí, a otestuje každý prvok a každý zvar, kde sa prvky stretávajú. Jeden beh, jedna tabuľka.

:::warning
Je to **pomôcka, kým ju neprekontroluje inžinier**. Nie je to pečiatka a úspešný výsledok nie je návrh. Používa stredové čiary prvkov tak, ako sú nakreslené, každý spoj považuje za zvarený po celom obvode prierezu, berie hrúbku kútového zvaru zo steny prierezu (až 8 mm), pokiaľ ju nenastavíte, a nekontroluje skrutky, plechy, päty stĺpov, kotvy, uloženie, šmyk v bloku, únavu ani zdvíhanie.
:::

## Spustenie

1. Nakreslite prvky pomocou {{ui:Konštrukčný prvok}} (prierezy pochádzajú z tabuľky prierezov).
2. Otvorte {{ui:Pohľady}} › {{ui:Skontrolovať tento rám}}. Určite, kde rám stojí (**podpora** na každej nohe: kĺbová, pevná alebo valcová; {{ui:Kĺbové podpory na nohách}} dá jednu na každý najnižší koniec prvku) a čo na ňom stojí (**zariadenie**: hmotnosť, ťažisko, body, kde je privŕtané k podlahe, a voliteľný vodorovný tlak).
3. Vyberte normu: **ASCE 7 + AISC 360-16** alebo **EN 1990 + EN 1993**. Nastavte pevnosť ocele a pre AISC pevnosť zvarového kovu (482.6 MPa je E70).
4. Stlačte {{ui:Skontrolovať}}. {{ui:Uložiť správu ako CSV}} zapíše každú tabuľku, s riadkom o tom, že nebolo preskúmané, ako prvým.

Rám sa číta v milimetroch so zvislou osou súčiastky nahor. Body podpôr a zariadenia sa zadávajú ako x y z v tom istom súradnicovom systéme, pričom z je výška.

Koniec prvku, ktorý dopadne na stred iného prvku, ho tam rozdelí, rovnako ako noha alebo bod privŕtania na čiare prvku. Hmotnosť sa rozdelí na body privŕtania ako tuhé teleso; ťažisko mimo nôh alebo zdvíhacia sila v nohe sa uvedie, nikdy sa neskryje.

## Čo dostanete

- Najviac využitú položku a či niečo zlyhá. Položky, ktoré kontrola nevie posúdiť (prierez, ktorý nie je v tabuľke, alebo oceľ bez súčiniteľa v norme), sa spočítajú a pomenujú, nikdy sa nepočítajú ako vyhovujúce.
- Jeden riadok na každý prvok a skupinu zvarov: koľko je využité, rozhodujúca kontrola a klauzula a kombinácia zaťažení, ktorá rozhodla.
- Tie isté tabuľky v správe.

## Čo sa kontroluje

Duté profily (RHS, SHS, CHS, rúra) a I-profily na ťah, tlak, ohyb, šmyk a ich vzájomné pôsobenie; kútové a úplne previarené zvary elastickou vektorovou metódou. Kompaktné steny pri ohybe len pre duté profily; štíhle steny sa uvedú ako nekontrolované. Niektoré konštanty boli zapísané z noriem a ešte nie sú porovnané s tlačenou verziou; správa uvádza každý zdroj.

Pozri [Rámy z oceľových profilov](topic:structural-members), kde nájdete kreslenie prvkov a ich rezný zoznam.
