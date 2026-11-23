---
title: Zkontrolujte tento rám
summary: Vezměte ocelové prvky svařence (podrám, stojan, rám z trubek a profilů), postavte zařízení na nohy a podpory na podlahu a zjistěte, kolik je využito u každého prvku a každého svaru podle AISC 360-16 nebo EN 1993. Pomůcka, dokud rozbor neprojde inženýrem.
keywords: rám, svařenec, podrám, podrám čerpadla, konstrukční prvek, svar, svary, kontrola, AISC 360, EN 1993, využití, podpora, zařízení, zatížení, duté profily, HSS, RHS, CHS, inženýr
from: 032e34ee
---

{{ui:Zkontrolovat tento rám}} vezme přímé ocelové prvky svařence, sestaví z nich rám, vyřeší jej pod vahou oceli a zařízení, které na něj položíte, a otestuje každý prvek a každý svar, kde se prvky setkávají. Jeden běh, jedna tabulka.

:::warning
Je to **pomůcka, dokud ji neprojde inženýr**. Není to razítko a průchod není návrh. Používá středové osy prvků tak, jak jsou nakresleny, bere každý spoj jako svařený dokola po celém průřezu, bere katetu koutového svaru ze stěny průřezu (až 8 mm), pokud ji nenastavíte, a nekontroluje šrouby, plechy, patní plechy, kotvy, ložiskový tlak, smykové vytržení, únavu ani zvedání.
:::

## Postup

1. Nakreslete prvky pomocí {{ui:Structural member}} (profily pocházejí z tabulky profilů).
2. Otevřete {{ui:Views}} › {{ui:Check this frame}}. Řekněte, kde rám stojí (**podpora** na každé patě: kloubová, vetknutá nebo válečková; {{ui:Pinned supports at the feet}} dá jednu na každý nejnižší konec prvku) a co na něm sedí (**zařízení**: hmotnost, těžiště, body, kde je přišroubováno, a volitelný vodorovný tlak).
3. Zvolte normu: **ASCE 7 + AISC 360-16** nebo **EN 1990 + EN 1993**. Nastavte jakost oceli a u AISC pevnost svarového kovu (482,6 MPa je E70).
4. Stiskněte {{ui:Check}}. {{ui:Save the report as CSV}} zapíše každou tabulku, s řádkem o tom, že nebylo zkontrolováno, jako prvním.

Rám se čte v milimetrech se svislou osou dílu nahoru. Podpory a body zařízení se zadávají jako x y z ve stejné soustavě, přičemž z je výška.

Konec prvku, který padá na střed jiného prvku, jej tam rozdělí, stejně jako pata nebo bod přišroubování na čáře prvku. Hmotnost se rozděluje přes body přišroubování jako tuhé těleso; těžiště mimo paty nebo zvedací síla v patě je řečena, nikdy skryta.

## Co dostanete

- Nejvíce využitou položku a to, zda něco selhává. Položky, které kontrola nemůže posoudit (profil, který není v tabulce, ocel bez součinitele v normě), se počítají a jmenují, nikdy se nepočítají jako vyhovující.
- Jeden řádek na prvek a na skupinu svarů: kolik je využito, rozhodující kontrola a klauzule a kombinace zatížení, která rozhodla.
- Stejné tabulky v protokolu.

## Co se kontroluje

Duté profily (RHS, SHS, CHS, trubka) a I-profily na tah, tlak, ohyb, smyk a jejich vzájemné působení; koutové a plně provařené svary metodou pružného vektoru. Kompaktní stěny se posuzují jen na ohyb u dutých profilů; štíhlé stěny se hlásí jako nezkontrolované. Některé konstanty byly zapsány z norem a ještě nebyly porovnány s tištěnou kopií; protokol uvádí každý zdroj.

Viz [Rámy z ocelových profilů](topic:structural-members) pro kreslení prvků a jejich seznam řezů.
