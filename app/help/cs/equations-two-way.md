---
title: Rovnice oběma směry
summary: Změňte parametr a díl se řídí; napište novou velikost do řízené hodnoty a PartCraft dopočítá parametr za ní a zeptá se, který, pokud se jich může změnit více.
keywords: rovnice, řešení zpět, řízená kóta, obousměrně, zpětně, hledání cíle, parametry, propojené hodnoty, který parametr
from: 82dc0269
---

Rovnice jako **Extrude1 hloubka = thick + extra** funguje oběma směry.

## Dopředu: změňte parametr

Na záložce {{ui:Parametry}} změňte `thick` z 20 na 30. Hloubka Extrude1 se stane 30 + extra a díl se přestaví.

## Zpětně: změňte řízenou hodnotu

1. Klikněte na "Extrude1" v historii. Jeho pole **Hloubka (mm)** ukazuje **ƒ**: rovnice jej řídí.
2. Napište velikost, kterou chcete, například `40`, a stiskněte {{key:Enter}}.

PartCraft řeší parametr za rovnicí, přes tolik kroků, kolik je třeba (`depth = hub_h`, `hub_h = disc_t + 50`: zadání výšky změní `disc_t`). Stavový řádek říká, co se změnilo, například že extra se změnilo z 5 na 15.

Když dva nebo více parametrů řídí hodnotu, objeví se okno s dotazem **Který parametr se má změnit?** a vypíše je. Klikněte na jeden; ostatní si ponechají své hodnoty. {{ui:Zrušit}} nic nezmění.

Totéž funguje ve skice: dvakrát klikněte na řízenou kótu, napište hodnotu a stiskněte {{key:Enter}}. Funguje to také ve sloupci **Hodnota** tabulky parametrů, u parametru, který je sám výrazem.

## Když to nejde

- Číslo, které musí být celé (počet opakování ve vzoru), nebo musí zůstat v rozsahu (úhel do 360°), je odmítnuto dříve, než se cokoli změní.
- Rovnice jen z pevných čísel (`=40`) nemá parametr, který by se dal změnit: zadané číslo ji nahradí.
- Pokud žádná hodnota parametru nedá velikost, kterou jste napsali, stavový řádek to řekne a nic se nezmění.
- Skica, kterou nelze vyřešit s novou hodnotou, si ponechá své předchozí hodnoty a stavový řádek pojmenuje skicu.

Každá změna, v jakémkoli směru, je jeden krok pro {{key:Mod+Z}} a {{key:Mod+Y}}.
