---
title: Dydžių keitimas be eskizo atidarymo
summary: Valdykite detalę iš skaičių dešiniajame skydelyje: eskizo matmenys, gyliai, kiekiai ir kampai, kaip planuoti detalę, kad tinkami skaičiai ją valdytų, ir kur parametrai bei lygtys perima valdymą.
keywords: parametrai, valdantys matmenys, projektinis ketinimas, keisti dydį, lygtys, globalūs kintamieji, projektavimo lentelė, konfigūracijos, perdydyti, keisti matmenį
from: c2ae1a32
---

Kiekvienas PartCraft detalės dydis yra skaičius, kurį galite pakeisti vėliau: jos eskizų matmenys ir elementų nustatymai. Norint pakeisti matmenis, eskizo atidaryti nereikia.

## Eskizo matmens keitimas iš skydelio

1. Istorijoje spustelėkite elementą, pavyzdžiui „Extrude1“.
2. Ištempimo nustatymuose pagal jo paties nustatymus **Eskizo matmenys (Sketch1)** išvardija visus jo eskizo matmenis: „Atstumas“, „Skersmuo“, „Kampas (°)“ ir taip toliau.
3. Įveskite naują reikšmę viename laukelyje ir paspauskite {{key:Enter}} arba {{key:Tab}}.

Eskizas išsprendžiamas su nauja reikšme, o visa detalė perstatoma. Pasirinkus patį eskizą rodomas tas pats sąrašas kaip **Valdantys matmenys**.

Spindulys ar skersmuo turi būti didesnis už nulį, o kampas – tarp 0 ir 180 laipsnių; jei ne, apie tai praneša būsenos juosta.

:::tip
Kuris laukelis kuris? Laukeliai išvardyti pagal tai, kokia tvarka buvo sukurti matmenys. Jei nesate tikri, atidarykite eskizą (dukart spustelėkite jį), dukart spustelėkite matmenį darbo lauke ir pakeiskite jį ten.
:::

## Pagrindinio skaičiaus įvedimas iš karto

Istorijoje pasirinkite elementą (arba tiesiog jį pridėkite) ir įveskite skaičių: jis įrašomas į pagrindinį elemento laukelį – tą, kurį dažniausiai keičiate (ištempimo **Gylis**, sukimo **Kampas**, skylės **Skersmuo**, masyvo **Kiekis**, suapvalinimo **Spindulys**, išdrožimo sienelė). Paspauskite {{key:Enter}}, kad nustatytumėte, arba {{key:Esc}}, kad paliktumėte seną reikšmę. Pridėjus ištempimą, apie tai pranešama būsenos juostoje: „Extrude1 pridėtas. Pakeiskite jo skaičius dešinėje arba dabar įveskite skaičių jo gyliui.“

## Skaičiaus keitimas istorijoje

Kiekvieno elemento eilutė istorijoje rodo pagrindinį skaičių šalia pavadinimo: „Extrude1 25 mm“, „Hole1 Ø6.6 thru“, „Fillet1 R2“, „LPattern1 4 × 20 mm“. Dukart spustelėkite skaičių (arba pasirinkite eilutę ir paspauskite {{key:F2}}) – tuoj pat atsiveria laukelis. Įveskite naują reikšmę ir paspauskite {{key:Enter}}; {{key:Esc}} palieka seną. Veikia lygiai taip, kaip elemento laukelis dešinėje: tos pačios ribos, `=` įvedant lygtį, pavyzdžiui `=width/2`, ir vienas žingsnis anuliavimui.

Ištempimo, skylės ar masyvo atveju dukart spustelėjus bet kurią eilutės vietą atsiveria laukelis. Suapvalinimo, nuožulninimo, išdrožimo, nuolydžio ar sriegio atveju dukart spustelėjus pavadinimą vis tiek pasirenkamos briaunos ar paviršiai, todėl dukart spustelėkite patį skaičių. Eskizų eilutėje skaičiaus nėra: dukart spustelėjus atsiveria eskizas.

## Vilkimas vaizde

Istorijoje pasirinkite ištempimą (arba spustelėkite jį vaizde, tada jo eilutę), ir oranžinė rodyklė atsistos ant jo galinio paviršiaus, o šalia jos bus laukelis su gyliu. Vilkite rodyklę: detalė seka jūsų vilkimą, o paleidus nustatomas naujas gylis kaip vienas žingsnis ({{key:Mod+Z}} jį grąžina). Vilkdami paspauskite {{key:Esc}}, kad grįžtumėte į pradžios vietą. Gylis keičiasi dešimtosios dalies žingsniais nuo savo dydžio: 1 mm 25 mm ištempime, 0.1 mm 3 mm ištempime.

Sukimas gauna lenktą rodyklę savo posūkio gale: vilkite ją aplink ašį, kad pakeistumėte kampą, sveikais laipsniais nuo 1° iki 360°.

Arba spustelėkite laukelį šalia rodyklės, įveskite reikšmę (arba `=` ir lygtį) ir paspauskite {{key:Enter}}. Ištempimas, kuris eina **Per visą** arba iki paviršiaus, arba reikšmė, kurią valdo lygtis, rodyklės neturi: keiskite tai dešinėje.

## Skaičiai, kurie valdo detalę

| Kur | Ką galima keisti |
|---|---|
| Eskizas | Kiekvienas matmuo: ilgiai, atstumai, spinduliai, skersmenys, kampai |
| Ištempti ir Iškirpti | Gylis, galo sąlyga, kryptis, išsikišimas ar išpjova |
| Sukti ir Sukta išpjova | Kampas, ašis, išsikišimas ar išpjova |
| Skylė | Skersmuo, gylis, per visą, įleidimo skersmuo ir gylis |
| Suapvalinti, Nuožulninti, Išdrožti | Spindulys, atstumas, sienelės storis ir kryptis, bei kurios briaunos ar paviršiai |
| Tiesinis ir Apskritiminis | Kiekis, tarpas ar kampas, kryptis ar ašis |
| Detalė | Kreivės (kaip smulkiai apvalios formos suskaidomos į paviršius) |
| Brėžinys | Kur pjūvis kerta, detalės dydis ir mastelis, GD&T reikšmės |

## Planuokite detalę taip, kad ją valdytų tinkami skaičiai

Jūsų nurodyti skaičiai yra tie, kuriuos galite keisti. Keli įpročiai padeda, kad vėlesni pakeitimai elgtųsi tinkamai:

- **Matuokite tai, kas svarbu darbui.** Jei skylė turi likti 15 mm atstumu nuo briaunos, matuokite ją nuo tos briaunos, o ne nuo pradžios taško.
- **Visiškai apibrėžkite eskizus.** Tada pakeitimas perkelia tik tai, ką turi (žr. [Visiškai apibrėžkite eskizą](topic:relations-dimensions)).
- **Naudokite ryšius paskirčiai.** Lygu dviejose skylėse reiškia, kad vienas skersmuo valdo abi. Simetrinės formos: įdėkite pradžios tašką į centrinę liniją arba naudokite Vidurio tašką.
- **Braižykite eskizus ant elementų sukurtų paviršių.** Eskizas ištempimo galiniame paviršiuje pajuda, kai pasikeičia gylis.
- **Naudokite masyvą vietoj kopijavimo.** Viena skylė, išdėstyta aštuonis kartus masyve, turi vieną skersmenį, kurį reikia pakeisti.

## Daugiau nei atskiri skaičiai

- **Vienas skaičius valdo kelis:** naudokite parametrus ir lygtis: [Valdykite detalę parametrais](topic:parameters).
- **Keli vienos detalės dydžiai:** įrašykite kiekvieną kaip [konfigūraciją](topic:design-tables); jos saugomos detalės byloje.
- **Aritmetika skaičių laukelyje:** įveskite `=40/2` arba `=width / 2`. Tai sukuria lygtį; žr. [Lygtys abiem kryptimis](topic:equations-two-way).
- **Coliai:** detalė rodoma milimetrais. Skaičių laukelyje su `=` arba parametre `2in` paverčiamas į 50.8.

Žr. [Kas dar nesukurta](topic:not-built-yet).
