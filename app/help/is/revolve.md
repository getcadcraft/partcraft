---
title: Snúningur á rennds hluta
summary: Teiknaðu hálft snið við hlið miðlínu, snúðu því í kringlótt stykki, veldu ás og horn, og notaðu snúið úrtak fyrir rásir.
keywords: snúningur, snúin upphækkun, snúið úrtak, rennt stykki, rennibekkur, öxull, ás, miðlína, rás, horn, snúningsúrtak
from: 593b6929
---

{{ui:Snúningur}} snýr sniði um ás, eins og hlut sem er gerður í rennibekk: öxla, trissur, flansa, hnappa. {{ui:Snúið úrtak}} (í valmyndinni {{ui:Meira}} í hópi Eiginleika) snýr sniði til að fjarlægja efni, fyrir rásir og holur.

## Snúa þrepuðum öxli

1. Skissaðu á **Framplan**.
2. Ýttu á {{key:N}} fyrir {{ui:Miðlína}}. Byrjaðu á upprunanum og smelltu á punkt beint til hægri, til dæmis 100 mm frá. Þetta er ásinn. Hann er strikaður: byggingarrúmfræði er ekki hluti af sniðinu.
3. Ýttu á {{key:L}} fyrir Lína. Teiknaðu **hálft** sniðið fyrir ofan miðlínuna sem eina lokaða lykkju: byrjaðu á miðlínunni, farðu upp, færðu þig til, og komdu aftur niður á miðlínuna, og síðan eftir henni að byrjuninni. Endarnir verða að mætast: lykkjan verður að vera lokuð.
4. Málsettu radíusana (hæðirnar fyrir ofan miðlínuna) og lengdirnar. Hæð 10 fyrir ofan miðlínuna gefur þvermál 20.
5. Veldu {{ui:Hætta}}.
6. Veldu {{ui:Snúningur}}. Öxullinn birtist, ein heil umferð.

Sniðið verður að vera öðrum megin við ásinn. Ef það sker hann: „Sniðið sker ásinn. Haltu því öðrum megin við miðlínuna.“ Ein brún sniðsins má liggja á ásnum.

## Stillingar

| Stilling | Hvað hún gerir | Sjálfgefið |
|---|---|---|
| **Aðgerð** | Upphækkun (bætir við efni), Úrtak (fjarlægir efni), Skurðpunktur (heldur skörunarsvæðinu) eða Nýtt rúmtak | Upphækkun fyrir {{ui:Snúningur}}, Úrtak fyrir {{ui:Meira}} › {{ui:Snúið úrtak}} |
| **Horn (°)** | Hversu langt á að snúa, frá rétt yfir 0 upp í 360 | 360 |
| **Ás** | Fyrsta miðlína, eða hvaða lína eða miðlína sem er í skissunni, skráð sem „Miðlína 1 (l1)“ eða „Lína 3 (l3)“ | Fyrsta miðlína |

Hluta-horn gerir kíl, snúinn frá skissuplaninu í eina átt.

Ef skissan hefur enga miðlínu og þú skilur **Ás** eftir á Fyrsta miðlína: „Teiknaðu miðlínu (hjálparlínu) í skissunni til að snúa um.“ Þú getur líka valið fasta línu úr sniðinu sem ásinn.

## Skera rás

1. Með öxulinn byggðan opnar þú nýja skissu á **Framplan** (sama plan og skissa öxulsins).
2. Teiknaðu miðlínu á sama ás: byrjaðu hana á upprunanum og haltu henni láréttri svo hún fái H, eða sláðu hana inn með **Bæta við eftir hnitum** (til dæmis frá `0, 0` til `100, 0`). Ný skissa getur ekki smellst á línur úr annarri skissu.
3. Teiknaðu lítinn lokaðan rétthyrning sem skarast á brún öxulsins þar sem rásin á að vera.
4. Veldu {{ui:Hætta}}, og síðan {{ui:Meira}} › {{ui:Snúið úrtak}}.

## Snúnir fletir í samsetningum

Snúningur hefur ás sem aðrir eiginleikar og samsetningar geta notað:

- **Hringlaga** mynstur notar ás síðasta snúnings sjálfgefið (sjá [Mynstur og speglun eiginleika](topic:patterns-mirror));
- í samsetningu byrjar tenging á milli flata sem snúningar búa til sem **snúningstenging**, og **Miðja á** býður „Ás snúnings 1“ (sjá [Byggja samsetningu](topic:build-assembly)).

## Sannar bogar og facettur

PartCraft byggir snúning með möskvakjarnanum (stöðustikumerkið segir „Möskvakjarni“): kringlótt form eru flatar facettur, 64 á hring sjálfgefið, og rúmmál er aðeins undir raungildinu (um 0,16 % við 64). Myndin og STL-, 3MF- og STEP-útflutningur eru gerð úr þessum facettum: stilltu **Sveigjur** (smelltu á tómt rými, og síðan í hægra spjaldinu) á Fínt (128) eða Mjög fínt (256) fyrir sléttari. Sannir sívalningar, keilur og tórusar þurfa nákvæman kjarna: ekki byggt enn í þessari útgáfu. Sjá [Möskvakjarninn](topic:solid-kernels).
