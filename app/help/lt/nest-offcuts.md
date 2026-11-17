---
title: Likučių išsaugojimas ir pakartotinis naudojimas
summary: Po išdėstymo tai, kas lieka iš kiekvienos plokštės, tampa sunumeruotu likučiu atsargų sąraše; kitas išdėstymas pirma naudoja likučius, paskui pilnas plokštes.
keywords: išdėstymas, likutis, atliekos, atsargos, plokštė, lakštas, pakartotinis naudojimas, medžiaga, storis, CSV
from: 7a68d4b8
---

Kai išdėstote detales ant plokščių, kiekvienos plokštės naudingas likutis (ne skiautelės) gali būti išsaugotas kaip **likutis**: sunumeruotas kontūras (R-0001, R-0002 …) su medžiaga, storiu, dydžiu ir darbu, iš kurio jis atsirado. Sąrašas įrašomas kartu su failu ir gali būti įrašytas kaip CSV.

## Naudoti pakartotinai

Įveskite **medžiagą** ir **storį**, palikite {{ui:Pirma naudoti likučius}} įjungtą ir išdėstykite. Tos pačios medžiagos ir storio likučiai bandomi nuo mažiausio; detalės, kurios telpa, dedamos ant jų, likučio kontūro viduje ir atokiau nuo jo krašto; kas netelpa, dedama ant naujų plokščių. Darbo ataskaitoje nurodoma, kurie likučiai panaudoti ir kas liko. Įjungus {{ui:Išsaugoti likučius kaip atsargas}}, {{ui:Pridėti šį darbą prie atsargų}} įrašo jį į atsargų sąrašą: panaudotas likutis pažymimas **Panaudota** (su darbu) ir nebesiūlomas dar kartą; tai, kas iš jo liko, tampa naujuoju likučiu, kuris prisimena savo pirmtaką.

## Kas laikoma likučiu

Likutis matuojamas su nustatytu tarpu (jokia detalė nėra arčiau pjūvio nei tas tarpas). Juostos, siauresnės nei dvidešimtadalis plokštės, ir gabalai, mažesni nei 2 % jos, laikomi laužu; pakeiskite abi ribas, jei jūsų dirbtuvė saugo mažesnius gabalus. Skylės detalių viduje priklauso pačioms detalėms ir nėra saugomos. Iš ritinio likučių nelieka.

## Brėžinyje

Išdėstymo DXF nubrėžia kiekvieno likučio kontūrą sluoksnyje REMNANTS, o jo numerį — viduryje, kad gabalus būtų galima pažymėti pjaunant.

Dar neįgyvendinta: likučio valcavimo kryptis, brūkšninio kodo ar etikečių lakštas, ritinių likučiai, atsargos, bendros keliems projektams.
