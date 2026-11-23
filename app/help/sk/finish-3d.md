---
title: 3D dokončovanie: rovnobežné a hrebienkové
summary: Dokončite zakrivený povrch celého modelu guľovou, zaoblenou alebo plochou stopkovou frézou v rovnobežných líniách pod ľubovoľným uhlom alebo v prechodoch vo vzdialenosti, ktorú nastavíte, aby hrebene medzi nimi mali výšku, ktorú zadáte. Čo dráhy zaručujú a čo nie.
keywords: 3D dokončovanie, dokončovanie, rovnobežné, rastrové, hrebienkovanie, konštantné hrebienkovanie, hrot, guľová fréza, zaoblená fréza, plocha, tolerancia, priečny krok, sklon, prídavok, drop cutter, zarezanie
from: 942d2341
---

Dve operácie vo Výrobe rezú **celý povrch modelu** s nástrojom držaným zvisle (tri osi). Nevyžadujú výber bodov: pracujú na celom modeli, ktorý je vidieť zhora. Najprv hrubujte súčiastku (adaptívne alebo kapsa); dokončovací prechod cez nevyrezaný polotovar upozorní, že by rezal hlboko.

## Rovnobežnosť

Priame čiary cez model pod **uhlom**, ktorý nastavíte, s **priečnym krokom** medzi nimi (zlomok priemeru nástroja). Každá čiara sleduje povrch: hrot nástroja je tak vysoko, ako je potrebné, aby žiadna časť frézy neklesla pod model, a čiara je rezaná jemnejšie všade, kde sa povrch ohýba. Keď je zapnuté **Cik-cak**, nástroj zostáva v materiáli medzi čiarami tam, kde to môže bezpečne urobiť (kontrolované pozdĺž pohybu); inak sa zdvihne.

- **Tolerancia**: ako ďaleko môže byť rovný úsek čiary od skutočnej výšky hrotu (polovica sa použije ako limit v strede každého úseku). Predvolene 0.01 mm.
- **Len tam, kde je povrch aspoň … a najviac … (°)**: dokončiť len plytké alebo len strmé oblasti. Kde je povrch mimo rozsahu, čiara sa vynechá a nástroj sa zdvihne.
- **Prídavok**: model posunutý o túto vzdialenosť (nástroj zväčšený o ňu: presné pre guľové a zaoblené nástroje; plochý nástroj zanechá aspoň toľko).
- **Spodok**: nič sa nereže pod touto výškou z.

## Hrebienkovanie

Prechody, ktoré si na povrchu zachovávajú konštantnú vzdialenosť od seba, takže hrebeň (hrebienok) zostávajúci medzi dvoma susednými prechodmi má **výšku**, ktorú zadáte. Vzdialenosť vyplýva z výšky a polomeru guličky: s = 2·√(2·R·h − h²), napríklad približne 0.69 mm medzi prechodmi pre guľu Ø6 a hrebeň 0.02 mm. Zaoblený nástroj používa polomer svojho rohu. Plochá stopková fréza sa odmietne: nemá hrebeň, ktorý by bolo možné dimenzovať.

Prechody začínajú **od hrany modelu smerom dovnútra** alebo **od jeho vrchu smerom dole**. Sú to izočiary vzdialenosti na povrchu (nie výšky), takže na svahu sú v pôdoryse blízko pri sebe a na rovine sú od seba široko. Vzdialenosť sa meria na mriežke nad povrchom a je presná na približne 1 %; výška hrebeňa je presná tam, kde je povrch rovný alebo mierne zakrivený, a len približná tam, kde sa rýchlo zakrivuje. **Súhlasné frézovanie** ponechá vyššiu stranu povrchu na pravej strane nástroja.

## Ako dobré sú dráhy

Čo testy overujú, uzavretými tvarmi alebo nezávislým hrubým hľadaním stopy nástroja:

- Výška hrotu pod nástrojom je presná pre guľový, zaoblený a plochý nástroj na plochách, hranách a rohoch siete a nikdy nie je vyššia ako skutočná výška; pri rovnobežných čiarach dráha zostáva v rámci tolerancie, bez zarezania hlbšieho ako tá.
- Dĺžky dráh na naklonenej rovine zodpovedajú uzavretému tvaru; prechody hrebienkovania na rovine sú od seba vo vyžiadanej vzdialenosti a hrebeň medzi nimi má výšku, ktorú ste žiadali.
- Simulácia polotovaru po prechode neukazuje žiadne zarezanie a ukazuje hrebene, ktoré zostávajú.

Čo tieto dráhy nie sú: sú to základné dokončovacie prechody, nie všetko, čo ponúka výrobný systém.

- **Ešte nie je hotové**: dokončovanie vodnou čiarou (konštantné z), čistenie hrán a rohov ceruzkou, radiálne a špirálové prechody, premietanie krivky na povrch, zisťovanie rovných oblastí, kontroly kolízie držiaka a stopky. Hrubovanie a obrábanie zvyškov sú vlastné operácie ([3D hrubovanie a obrábanie zvyškov](topic:rough-3d)); nástroj, ktorý sa nakláňa, je [5-osové dokončovanie](topic:multi-axis#5-axis-finishing).
- Stred nástroja zostáva nad modelom: dráhy sa zastavia na hrane modelu namiesto toho, aby z nej vybiehali, takže zvislá stena presne na hrane sa nedokončí až k svojej päte.
- Podrezy nie sú vidieť (vidí sa len to, čo nástroj stretne zhora).
- Model je sieť z jadra, takže dráhy nasledujú sieť (jej tetivová tolerancia je približne 0.0002 uhlopriečky súčiastky), nie presný povrch.
- Dokončovanie veľkého modelu s jemnou toleranciou vytvorí dlhý program s mnohými krátkymi pohybmi. Pred rezaním skontrolujte výstup v simulátore vášho stroja.
