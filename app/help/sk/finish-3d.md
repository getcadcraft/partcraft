---
title: 3D dokončovanie: rovnobežné a hrebeňové
summary: Dokončite celý zakrivený povrch modelu guľovou, polguľovou alebo plochou frézou, v rovnobežných líniách pod ľubovoľným uhlom alebo v prechodoch vzdialených od seba o nastavenú vzdialenosť, aby hrebene medzi nimi mali výšku, ktorú žiadate. Čo dráhy zaručujú a čo nie.
keywords: 3D dokončovanie, dokončovanie, rovnobežné, raster, hrebeň, konštantný hrebeň, hrot, guľová fréza, polguľová fréza, povrch, tolerancia, krok, sklon, zásoba na ponechanie, drop cutter, zarezanie
from: e1587d0a
---

Dve operácie v Manufacture režú **celý povrch modelu** s nástrojom držaným zvisle (tri osi). Nepotrebujú žiadne výbery: pracujú na celom modeli, ktorý je vidieť zhora. Najprv súčiastku zhruba obrobte (adaptívne alebo vrecko); dokončovací prechod cez nedorezaný materiál upozorní, že by zarezal hlboko.

## Rovnobežné

Rovné čiary cez model pod **uhlom**, ktorý nastavíte, vo vzdialenosti **kroku** od seba (zlomok priemeru nástroja). Každá čiara sleduje povrch: hrot nástroja je tak vysoko, ako musí byť, aby žiadna časť frézy nešla pod model, a čiara sa reže jemnejšie všade, kde sa povrch ohýba. Pri zapnutom **Cik-cak** zostáva nástroj dole medzi čiarami, kde to môže bezpečne urobiť (kontroluje sa pozdĺž pohybu); inak sa zdvihne.

- **Tolerancia**: ako ďaleko od skutočnej výšky hrotu smie rovná časť čiary byť (polovica sa použije ako limit v strede každej časti). Predvolene 0.01 mm.
- **Iba kde je povrch aspoň … a najviac … (°)**: dokončiť len plytké oblasti alebo len strmé. Kde je povrch mimo rozsahu, čiara sa vynechá a nástroj sa zdvihne.
- **Zásoba na ponechanie**: model odsadený o túto vzdialenosť (fréza zväčšená o ňu: presné pre guľové a polguľové nástroje; plochý nástroj zanechá aspoň toľko).
- **Dno**: nič sa neurezáva pod touto z.

## Hrebeňové

Prechody, ktoré si zachovávajú konštantnú vzdialenosť po povrchu od seba, takže hrebeň (scallop) medzi dvoma susednými prechodmi má **výšku**, ktorú žiadate. Vzdialenosť sa odvodí z výšky a polomeru gule: s = 2·√(2·R·h − h²), napríklad asi 0.69 mm medzi prechodmi pre guľu Ø6 a hrebeň 0.02 mm. Polguľový nástroj použije polomer svojho rohu. Plochá fréza sa odmietne: nemá hrebeň, podľa ktorého by sa dala určiť veľkosť.

Prechody začínajú **od hrany modelu smerom dovnútra** alebo **od jeho vrchu smerom dole**. Sú to vrstevnice vzdialenosti po povrchu (nie výšky), takže na svahu sú blízko pri pôdoryse a na rovine široko od seba. Vzdialenosť sa meria na mriežke nad povrchom a je presná asi na 1 %; výška hrebeňa je presná tam, kde je povrch rovný alebo mierne zakrivený, a približná tam, kde sa zakrivenie rýchlo mení. **Súbežné frézovanie** (Climb) necháva vyššiu stranu povrchu po pravej strane frézy.

## Ako dobré sú dráhy

Čo testy overujú, uzavretými vzorcami alebo nezávislým hrubým hľadaním stopy frézy:

- Výška hrotu pod nástrojom je presná pre guľový, polguľový a plochý nástroj na plochách, hranách a rohoch siete a nikdy nie je vyššia ako skutočná výška; pre rovnobežné čiary dráha zostáva v rámci tolerancie od nej, bez zarezania hlbšieho ako tá.
- Dĺžky dráhy na naklonenej rovine súhlasia s uzavretým vzorcom; prechody hrebeňa na rovine sú v žiadanej vzdialenosti a hrebeň medzi nimi vyjde na žiadanú výšku.
- Simulácia zásoby neukazuje po prechode žiadne zarezanie a ukazuje zostávajúce hrebene.

Čo tieto dráhy nie sú: sú to základné dokončovacie prechody, nie všetko, čo ponúka produkčný systém.

- Ešte nie je hotové: vodorovná línia (konštantné z), čistenie hrán a rohov ceruzkou, radiálne a špirálové prechody, premietanie krivky na povrch, detekcia plochých oblastí, obrábanie zvyšku, kontroly kolízie držiaka a stopky a akékoľvek naklonenie nástroja.
- Stred frézy zostáva nad modelom: dráhy sa zastavia na hrane modelu namiesto toho, aby pokračovali mimo neho, takže zvislá stena presne na hrane nie je dokončená až do päty.
- Podrezania sa nevidia (povrch je to, čo nástroj stretne zhora).
- Model je sieť z jadra, takže dráhy nasledujú sieť (jej tolerancia tetivy je asi 0.0002 uhlopriečky súčiastky), nie presný povrch.
- Dokončenie veľkého modelu pri jemnej tolerancii dá dlhý program s mnohými krátkymi pohybmi. Skontrolujte výstup v simulátore vášho stroja pred rezaním.
