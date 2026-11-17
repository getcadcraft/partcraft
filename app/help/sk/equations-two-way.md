---
title: Rovnice v oboch smeroch
summary: Zmeňte parameter a súčiastka sa za ním prispôsobí; zadajte novú veľkosť do riadenej hodnoty a PartCraft vypočíta parameter za ňou, pričom sa opýta, ktorý, keď sa môže zmeniť viacero.
keywords: rovnice, riešenie spätne, riadený rozmer, obojsmerné, opačne, hľadanie cieľa, parametre, prepojené hodnoty, ktorý parameter
from: 82dc0269
---

Rovnica, napríklad **Extrude1 hĺbka = hrúbka + extra**, funguje v oboch smeroch.

## Dopredu: zmeňte parameter

Na karte {{ui:Parametre}} zmeňte `hrúbka` z 20 na 30. Hĺbka Extrude1 sa stane 30 + extra a súčiastka sa prepočíta.

## Spätne: zmeňte riadenú hodnotu

1. Kliknite na „Extrude1“ v histórii. Jeho políčko **Hĺbka (mm)** zobrazuje **ƒ**: rovnica ho riadi.
2. Napíšte požadovanú veľkosť, napríklad `40`, a stlačte {{key:Enter}}.

PartCraft vyrieši parameter za rovnicou, a to cez toľko krokov, koľko treba (`hĺbka = hub_h`, `hub_h = disc_t + 50`: zadanie výšky zmení `disc_t`). Stavový riadok hovorí, čo sa zmenilo, napríklad že extra išlo z 5 na 15.

Keď riadi číslo dva alebo viac parametrov, okno sa spýta **Ktorý parameter sa má zmeniť?** a zobrazí ich. Kliknite na jeden; ostatné si zachovajú svoje hodnoty. {{ui:Zrušiť}} nezmení nič.

To isté funguje aj v náčrte: dvakrát kliknite na riadenú kótu, napíšte hodnotu a stlačte {{key:Enter}}. Funguje to aj v stĺpci **Hodnota** tabuľky parametrov, pre parameter, ktorý je sám výrazom.

## Keď to nejde

- Číslo, ktoré musí byť celé (počet vzoru) alebo ostať v rozsahu (uhol do 360°), sa odmietne skôr, než sa čokoľvek zmení.
- Rovnica iba s pevnými číslami (`=40`) nemá parameter na zmenu: číslo, ktoré napíšete, ju nahradí.
- Ak žiadna hodnota parametra nedá veľkosť, ktorú ste napísali, stavový riadok to povie a nič sa nezmení.
- Náčrt, ktorý sa s novou hodnotou nedá vyriešiť, si ponechá predchádzajúce hodnoty a stavový riadok uvedie jeho názov.

Každá zmena, obojako, je jeden krok pre {{key:Mod+Z}} a {{key:Mod+Y}}.
